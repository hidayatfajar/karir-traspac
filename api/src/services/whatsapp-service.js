// src/services/whatsapp.service.js

import baileys, {
  useMultiFileAuthState,
  DisconnectReason,
} from "@whiskeysockets/baileys";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import pino from "pino"; // <-- 1. IMPORT PINO
import qrcodeTerminal from "qrcode-terminal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SESSIONS_PATH = path.resolve(__dirname, "..", "..", "sessions");

let sock;
let status = {
  connection: "disconnected", // disconnected, connecting, connected, waiting_for_qr
  qr: null,
};

const getSessionPath = (sessionId) => path.join(SESSIONS_PATH, sessionId);

const createSession = async (sessionId = "default") => {
  if (
    sock &&
    (status.connection === "connected" || status.connection === "connecting")
  ) {
    console.log("Session creation/connection already in progress.");
    return;
  }

  const sessionPath = getSessionPath(sessionId);
  if (!fs.existsSync(sessionPath)) {
    fs.mkdirSync(sessionPath, { recursive: true });
  }

  status.connection = "connecting";
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

  sock = baileys.default({
    auth: state,
    printQRInTerminal: false,
    browser: ["Ubuntu", "Chrome", "22.04.4"],
    logger: pino({ level: "trace" }),
    connectTimeoutMs: 60 * 1000, // 60 seconds timeout
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      status.connection = "waiting_for_qr";
      status.qr = qr;

      console.log("QR Code diterima, silakan scan:");
      qrcodeTerminal.generate(qr, { small: true });
    }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
      status.connection = "disconnected";
      status.qr = null;
      if (shouldReconnect) {
        console.log("Connection closed due to error, reconnecting...");
        createSession(sessionId);
      } else {
        console.log("Connection closed, reason: Logged Out. Not reconnecting.");
        deleteSession(sessionId);
      }
    } else if (connection === "open") {
      status.connection = "connected";
      status.qr = null;
      console.log("Connection opened.");
    }
  });

  sock.ev.on("creds.update", saveCreds);

  return sock;
};

const sendMarkdownMessage = async (number, message) => {
  if (status.connection !== "connected") {
    throw new Error("WhatsApp is not connected.");
  }
  const jid = `${number}@s.whatsapp.net`;
  await sock.sendMessage(
    jid,
    {
      text: message,
      contextInfo: {
        mentionedJid: [],
        forwardingScore: 0,
        isForwarded: false,
      },
    },
    {
      messageId: null,
      quoted: null,
      ephemeralExpiration: null,
      messageTimestamp: null,
      backgroundColor: null,
    }
  );
};

const sendTextMessage = async (number, message) => {
  if (status.connection !== "connected") {
    throw new Error("WhatsApp is not connected.");
  }
  const jid = `${number}@s.whatsapp.net`;

  const formatForWA = (text) => {
    return text
      .replace(/```([\s\S]*?)```/g, "`$1`") // monospace
      .replace(/\*([^\*]+)\*/g, "*$1*") // bold
      .replace(/_([^_]+)_/g, "_$1_") // italic
      .replace(/~([^~]+)~/g, "~$1~") // strikethrough
      .replace(/^(?:-|\*) (.*)$/gm, "- $1") // bullet list
      .replace(/^\d+\.\s+(.*)$/gm, (m) => m) // numbered list (raw pass)
      .replace(/^(>.*?)$/gm, "$1") // blockquote
  };

  await sock.sendMessage(jid, {
    text: formatForWA(message),
    contextInfo: {
      mentionedJid: [],
      forwardingScore: 0,
      isForwarded: false,
      backgroundColor: '#ffffff',
    },
  });
};

const checkNumberExists = async (number) => {
  if (status.connection !== "connected") {
    throw new Error("WhatsApp is not connected.");
  }
  const jid = `${number}@s.whatsapp.net`;

  const result = await sock.onWhatsApp(jid);
  console.log(`Checking if number ${number} exists:`, result);
  if(result?.length > 0) {
    return true;
  };
  return false;
};

const getStatus = () => status;

const deleteSession = (sessionId) => {
  const sessionPath = getSessionPath(sessionId);
  if (fs.existsSync(sessionPath)) {
    fs.rmSync(sessionPath, { recursive: true, force: true });
  }
  if (sock) {
    sock.logout();
    sock = null;
  }
  status.connection = "disconnected";
  status.qr = null;
};

export {
  createSession,
  sendTextMessage,
  sendMarkdownMessage,
  getStatus,
  deleteSession,
  checkNumberExists
};

import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, g as getUserSession, s as setResponseStatus, a as deleteCookie, u as useRuntimeConfig, o as ofetch, b as decryptModuleData } from '../../_/nitro.mjs';
import 'crypto-es';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:module';
import 'node:path';

const hakAkses_get = defineEventHandler(async (event) => {
  const session = getUserSession(event);
  if (!session || !session.user.token) {
    setResponseStatus(event, 401);
    deleteCookie(event, `auth_${config == null ? void 0 : config.cookieName}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/"
    });
    return {
      status: false,
      message: "Unauthorized: No valid session found.",
      data: null
    };
  }
  const config = useRuntimeConfig();
  const baseUrl = config.public.backendApiUrl || globalThis._importMeta_.env.VITE_APP_BASE_API;
  try {
    const responseFromGateway = await ofetch(
      `${baseUrl}/access-gateway`,
      {
        method: "GET",
        headers: {
          TTOKEN: session.user.token
        }
      }
    );
    const decryptedData = decryptModuleData(responseFromGateway.data);
    if (!decryptedData) {
      throw new Error("Decryption failed.");
    }
    const hakAkses = typeof decryptedData === "string" ? decryptedData.split(";").map(Number) : [];
    event.context.hakAkses = hakAkses;
    return {
      status: true,
      message: responseFromGateway.message || "Hak akses berhasil diambil.",
      data: hakAkses
    };
  } catch (error) {
    console.error("Error in /api/hak-akses:", error);
    setResponseStatus(event, 500);
    return {
      status: false,
      message: "Gagal mengambil atau mendekripsi hak akses.",
      data: null
    };
  }
});

export { hakAkses_get as default };
//# sourceMappingURL=hak-akses.get.mjs.map

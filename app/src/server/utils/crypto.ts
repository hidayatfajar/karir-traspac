import CryptoES from "crypto-es";

function getParsedSecrets() {
  // @ts-ignore: Force any type
  const config = useRuntimeConfig();
  const secretKey = config.cookieSecret as string;
  const iv = config.cookieIv as string;

  if (!secretKey || secretKey.length !== 32)
    throw new Error("Kunci rahasia (cookieSecret) tidak valid.");
  if (!iv || iv.length !== 16) throw new Error("IV (cookieIv) tidak valid.");

  return {
    keyParsed: CryptoES.enc.Utf8.parse(secretKey),
    ivParsed: CryptoES.enc.Utf8.parse(iv),
  };
}

/**
 * Enkripsi data di sisi server.
 */
export function encryptServerData(data: object): string {
  const { keyParsed, ivParsed } = getParsedSecrets();

  if (!keyParsed || !ivParsed) {
    console.error("Module key/IV is not defined in runtime config.");
    return null;
  }

  const jsonData = JSON.stringify(data);

  const encrypted = CryptoES.AES.encrypt(jsonData, keyParsed, {
    iv: ivParsed,
    mode: CryptoES.mode.CBC,
    padding: CryptoES.pad.Pkcs7,
  });

  const base64String = encrypted.toString();

  // --- PERBAIKAN DITAMBAHKAN DI SINI ---
  // Ubah ke format Base64URL yang aman untuk cookie
  return base64String.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Dekripsi data di sisi server.
 */
// server/utils/crypto.ts

export function decryptServerData(
  encryptedData: string
): object | string | null {
  try {
    const { keyParsed, ivParsed } = getParsedSecrets();

    if (!keyParsed || !ivParsed) {
      console.error("Module key/IV is not defined in runtime config.");
      return null;
    }

    let base64String = encryptedData.replace(/-/g, "+").replace(/_/g, "/");
    while (base64String.length % 4) {
      base64String += "=";
    }

    const decrypted = CryptoES.AES.decrypt(base64String, keyParsed, {
      iv: ivParsed,
      mode: CryptoES.mode.CBC,
      padding: CryptoES.pad.Pkcs7,
    });

    const jsonData = decrypted.toString(CryptoES.enc.Utf8);

    if (!jsonData || jsonData.trim() === "") {
      console.warn("Decryption produced empty string.");
      return null;
    }

    try {
      return JSON.parse(jsonData);
    } catch (e) {
      return jsonData;
    }
  } catch (error) {
    console.error("Decryption process failed:", error);
    return null;
  }
}

export const encryptPassword = (password: string): string => {
  const { keyParsed, ivParsed } = getParsedSecrets();

  if (!keyParsed || !ivParsed) {
    console.error("Module key/IV is not defined in runtime config.");
    return null;
  }

  const encrypted = CryptoES.AES.encrypt(password, keyParsed, {
    iv: ivParsed,
    mode: CryptoES.mode.CBC,
    padding: CryptoES.pad.Pkcs7,
  });
  return encrypted.toString();
};

export function decryptModuleData(encryptedData: string): string | null {
  try {
    // @ts-ignore
    const { keyParsed, ivParsed } = getParsedSecrets();

    if (!keyParsed || !ivParsed) {
      console.error("Module key/IV is not defined in runtime config.");
      return null;
    }

    const decryptedBytes = CryptoES.AES.decrypt(encryptedData, keyParsed, {
      iv: ivParsed,
      mode: CryptoES.mode.CBC,
      padding: CryptoES.pad.Pkcs7,
    });

    // Hasil dekripsi pertama adalah string yang di-encode Base64
    const base64String = decryptedBytes.toString(CryptoES.enc.Utf8);

    if (!base64String) return null;

    // Langkah kunci: Decode string Base64 menggunakan atob
    const finalDecodedString = atob(base64String);

    return finalDecodedString;
  } catch (error) {
    console.error("Module data decryption failed:", error);
    return null;
  }
}

import { type H3Event } from "h3";
import { decryptServerData } from "../utils/crypto";

// 1. Definisikan interface untuk data sesi agar type-safe
interface SessionData {
  user: {
    user_id: number;
    user_group_id: string | number;
    stakeholder_id: string | number;
    nama: string;
    token: string;
    email: string;
    foto: string;
    foto_url: string;
    foto_link: string;
    nama_user_group: string;
    username: string;
  };
  moduleAccess: string;
}

/**
 * Membaca cookie sesi, mendekripsinya, dan mengembalikan data sesi yang utuh.
 * Ini adalah satu-satunya fungsi yang Anda perlukan untuk mengambil sesi pengguna.
 * @param event - Objek H3Event dari event handler.
 * @returns Objek SessionData atau null jika sesi tidak valid.
 */
export function getUserSession(event: H3Event): SessionData | null {
  // @ts-ignore: Force any type
  const config = useRuntimeConfig();
  // @ts-ignore: Force any type
  const encryptedCookie = getCookie(event, `auth_${config?.cookieName}`);

  if (!encryptedCookie) {
    return null;
  }

  // 3. Dekripsi data menggunakan helper crypto server-side kita
  // Kita melakukan type assertion 'as SessionData' karena kita percaya hasil dekripsi
  // akan sesuai dengan interface yang kita definisikan.
  const session = decryptServerData(encryptedCookie) as SessionData | null;
  event.context.user = session?.user || null;
  event.context.moduleAccess = session?.moduleAccess || null;
  console.log("Session data retrieved:", session);
  return session;
}

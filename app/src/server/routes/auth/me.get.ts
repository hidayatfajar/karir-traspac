import { decryptServerData } from "../../utils/crypto";
import type { SessionData } from "../../types/index";
import { defineEventHandler, deleteCookie, use } from "h3";

export default defineEventHandler((event) => {
  // @ts-ignore: Force any type
  const config = useRuntimeConfig();
  const userLogin = event?.context?.user || null;
  const moduleAccess = event?.context?.user ? event?.context?.user.hak_akses_modul : null;
  console.log('userLogin:', userLogin);
  console.log('moduleAccess:', moduleAccess);

  // @ts-ignore: Force any type
  const encryptedCookie = getCookie(event, `auth_${config?.cookieName}`);
  if (!encryptedCookie) {
    // deleteCookie(event, `auth_${config?.cookieName}`, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    // });
    return {
      status: false,
      message: "Session tidak ditemukan",
      data: null,
    };
  }

  const session = decryptServerData(encryptedCookie) as SessionData;
  if (!session) {
    // deleteCookie(event, `auth_${config?.cookieName}`, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    // });
    return {
      status: false,
      message: "Session tidak valid",
      data: null,
    };
  }

  return {
    status: true,
    message: "Session valid",
    data: session.user,
  };
});

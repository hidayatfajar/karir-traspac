import { ofetch } from "ofetch";
import { defineEventHandler } from "h3";
import { decryptModuleData } from "../../utils/crypto";
import { getUserSession } from "../../utils/session";

export default defineEventHandler(async (event) => {
  const session = getUserSession(event);
  if (!session || !session.user.token) {
    // @ts-ignore
    setResponseStatus(event, 401);
    // @ts-ignore
    deleteCookie(event, `auth_${config?.cookieName}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });
    return {
      status: false,
      message: "Unauthorized: No valid session found.",
      data: null,
    };
  }

  // @ts-ignore
  const config = useRuntimeConfig();
  // @ts-ignore: Force any type
  const baseUrl = config.public.backendApiUrl || import.meta.env.VITE_APP_BASE_API;

  try {
    const responseFromGateway = await ofetch<{ data: string; message: string }>(
      `${baseUrl}/access-gateway`,
      {
        method: "GET",
        headers: {
          TTOKEN: session.user.token,
        },
      }
    );
    const decryptedData = decryptModuleData(responseFromGateway.data);
    if (!decryptedData) {
      throw new Error("Decryption failed.");
    }

    const hakAkses = typeof decryptedData === "string"
        ? decryptedData.split(";").map(Number)
        : [];
    event.context.hakAkses = hakAkses;
    return {
      status: true,
      message: responseFromGateway.message || "Hak akses berhasil diambil.",
      data: hakAkses,
    };
  } catch (error) {
    console.error("Error in /api/hak-akses:", error);
    // @ts-ignore
    setResponseStatus(event, 500);
    return {
      status: false,
      message: "Gagal mengambil atau mendekripsi hak akses.",
      data: null,
    };
  }
});

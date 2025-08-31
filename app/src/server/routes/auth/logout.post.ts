import { getUserSession } from "../../utils/session";
import { defineEventHandler, deleteCookie } from "h3";
import { ofetch } from "ofetch";

export default defineEventHandler(async (event) => {
  const session = getUserSession(event);

  // @ts-ignore: Force any type
  const config = useRuntimeConfig();

  try {
    // @ts-ignore: Force any type
    const baseUrl = config?.public?.backendApiUrl || import.meta.env.VITE_APP_BASE_API;
    const {
      data = null,
      message = null,
      code = 200,
      // @ts-ignore: Force any type
    } = await ofetch(`${baseUrl}/logout`, {
      method: "POST",
      headers: {
        TTOKEN: session.user.token,
      },
    });
    console.log("Logout response:", data, message, code);

    deleteCookie(event, `auth_${config?.cookieName}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    // @ts-ignore: Force any type
    setResponseStatus(event, code);
    return {
      data,
      message,
      status: true,
    };
  } catch (e) {
    console.error("Gagal menginvalidasi token di backend:", e);
    if (process.env.NODE_ENV !== "production") {
      console.error("LOG OUT SERVER", typeof e, JSON.stringify(e, null, 2));
      console.error("LOG OUT SERVER", e?.response?.data, e?.status);
    }
    if (e?.message?.toLowerCase()?.includes("network")) {
      return {
        status: false,
        message: "Koneksi bermasalah, silakan cek koneksi internet.",
        data: null,
      };
    } else if (e?.response?.data) {
      const { message } = e?.response?.data as any;
      return {
        status: false,
        message,
        data: null,
      };
    } else {
      return {
        status: false,
        message:
          Object.keys(e || {}).length === 0
            ? `${e}` || "Error Server Nuxt"
            : e?.message || `Error ${JSON.stringify(e, null, 2)}`,
        data: null,
      };
    }
  }
});

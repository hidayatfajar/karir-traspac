import { ofetch } from "ofetch";
import { z } from "zod";
import { SessionData, User } from "../../types";
import { createError, defineEventHandler, readValidatedBody } from "h3";
import { encryptPassword, encryptServerData } from "../../utils/crypto";

const LoginPayloadSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  // @ts-ignore: Force any type
  const config = useRuntimeConfig();
  const body = await readValidatedBody(event, LoginPayloadSchema.parse);
  encryptPassword(body.password);
  try {
    // @ts-ignore: Force any type
    const baseUrl = config?.public?.backendApiUrl || import.meta.env.VITE_APP_BASE_API;
    const backendResponse = await ofetch<{
      data: User;
      status: boolean;
      message: string;
    }>(`${baseUrl}/login/validasi`, {
      method: "POST",
      body,
    });
    console.log("Backend response:", backendResponse);
    const sessionData: SessionData = {
      user: backendResponse.data,
      hak_akses_modul: backendResponse.data.hak_akses_modul,
    };

    const encryptedSession = encryptServerData(sessionData);
    // 4. Atur cookie httpOnly yang aman
    // @ts-ignore: Force any type
    setCookie(event, `auth_${config?.cookieName}`, encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });

    return {
      data: backendResponse.data,
      message:
        `${backendResponse.message} ${config?.cookieName}` || "Login berhasil.",
      status: true,
    };
  } catch (error) {
    // Tangani error jika login di backend utama gagal
    console.error("Login error details:", JSON.stringify(error, null, 2));
    return {
      status: false,
      message: error?.response?.data?.message || error || "Login gagal, silakan coba lagi.",
      data: null,
    }
  }
});

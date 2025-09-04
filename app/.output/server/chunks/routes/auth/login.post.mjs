import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, u as useRuntimeConfig, r as readValidatedBody, e as encryptPassword, o as ofetch, c as encryptServerData, f as setCookie } from '../../_/nitro.mjs';
import { z } from 'zod';
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
import 'node:path';

const LoginPayloadSchema = z.object({
  username: z.string(),
  password: z.string()
});
const login_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const config = useRuntimeConfig();
  const body = await readValidatedBody(event, LoginPayloadSchema.parse);
  encryptPassword(body.password);
  try {
    const baseUrl = ((_a = config == null ? void 0 : config.public) == null ? void 0 : _a.backendApiUrl) || globalThis._importMeta_.env.VITE_APP_BASE_API;
    const backendResponse = await ofetch(`${baseUrl}/login/validasi`, {
      method: "POST",
      body
    });
    console.log("Backend response:", backendResponse);
    const sessionData = {
      user: backendResponse.data,
      hak_akses_modul: backendResponse.data.hak_akses_modul
    };
    const encryptedSession = encryptServerData(sessionData);
    setCookie(event, `auth_${config == null ? void 0 : config.cookieName}`, encryptedSession, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
      // 7 hari
    });
    return {
      data: backendResponse.data,
      message: `${backendResponse.message} ${config == null ? void 0 : config.cookieName}` || "Login berhasil.",
      status: true
    };
  } catch (error) {
    console.error("Login error details:", JSON.stringify(error, null, 2));
    return {
      status: false,
      message: ((_c = (_b = error == null ? void 0 : error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || error || "Login gagal, silakan coba lagi.",
      data: null
    };
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map

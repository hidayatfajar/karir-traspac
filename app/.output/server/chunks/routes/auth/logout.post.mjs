import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, g as getUserSession, u as useRuntimeConfig, o as ofetch, a as deleteCookie, s as setResponseStatus } from '../../_/nitro.mjs';
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

const logout_post = defineEventHandler(async (event) => {
  var _a, _c, _d, _e, _f;
  const session = getUserSession(event);
  const config = useRuntimeConfig();
  try {
    const baseUrl = ((_a = config == null ? void 0 : config.public) == null ? void 0 : _a.backendApiUrl) || globalThis._importMeta_.env.VITE_APP_BASE_API;
    const {
      data = null,
      message = null,
      code = 200
      // @ts-ignore: Force any type
    } = await ofetch(`${baseUrl}/logout`, {
      method: "POST",
      headers: {
        TTOKEN: session.user.token
      }
    });
    console.log("Logout response:", data, message, code);
    deleteCookie(event, `auth_${config == null ? void 0 : config.cookieName}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/"
    });
    setResponseStatus(event, code);
    return {
      data,
      message,
      status: true
    };
  } catch (e) {
    console.error("Gagal menginvalidasi token di backend:", e);
    if ((_d = (_c = e == null ? void 0 : e.message) == null ? void 0 : _c.toLowerCase()) == null ? void 0 : _d.includes("network")) {
      return {
        status: false,
        message: "Koneksi bermasalah, silakan cek koneksi internet.",
        data: null
      };
    } else if ((_e = e == null ? void 0 : e.response) == null ? void 0 : _e.data) {
      const { message } = (_f = e == null ? void 0 : e.response) == null ? void 0 : _f.data;
      return {
        status: false,
        message,
        data: null
      };
    } else {
      return {
        status: false,
        message: Object.keys(e || {}).length === 0 ? `${e}` || "Error Server Nuxt" : (e == null ? void 0 : e.message) || `Error ${JSON.stringify(e, null, 2)}`,
        data: null
      };
    }
  }
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map

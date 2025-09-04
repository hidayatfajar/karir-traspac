import { d as defineEventHandler, u as useRuntimeConfig, h as getCookie, i as decryptServerData } from '../../_/nitro.mjs';
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

const me_get = defineEventHandler((event) => {
  var _a, _b, _c;
  const config = useRuntimeConfig();
  const userLogin = ((_a = event == null ? void 0 : event.context) == null ? void 0 : _a.user) || null;
  const moduleAccess = ((_b = event == null ? void 0 : event.context) == null ? void 0 : _b.user) ? (_c = event == null ? void 0 : event.context) == null ? void 0 : _c.user.hak_akses_modul : null;
  console.log("userLogin:", userLogin);
  console.log("moduleAccess:", moduleAccess);
  const encryptedCookie = getCookie(event, `auth_${config == null ? void 0 : config.cookieName}`);
  if (!encryptedCookie) {
    return {
      status: false,
      message: "Session tidak ditemukan",
      data: null
    };
  }
  const session = decryptServerData(encryptedCookie);
  if (!session) {
    return {
      status: false,
      message: "Session tidak valid",
      data: null
    };
  }
  return {
    status: true,
    message: "Session valid",
    data: session.user
  };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map

import { E as Df, f as fa, p as Qs } from './server.mjs';

const r = Df.create({ baseURL: "https://lms-sttal.dev-app.online/s22-api/lms-sttal-api/index.php", timeout: 6e5 });
r.interceptors.request.use(function(e2) {
  const r2 = fa(), { loading: o, user: n } = Qs.storeToRefs(r2);
  return o.value = true, n.value && n.value.token && e2.headers.set("TTOKEN", n.value.token), e2;
}), r.interceptors.response.use((e2) => {
  const r2 = fa();
  if (r2) {
    const { loading: e3 } = Qs.storeToRefs(r2);
    setTimeout(() => {
      e3.value = false;
    }, 1e3);
  }
  return e2;
}, async (e2) => {
  var _a;
  var r2, o, n, l, t, d, i, u, p, c, m, k;
  const v = fa();
  if (v) {
    const { loading: e3 } = Qs.storeToRefs(v);
    e3.value = false;
  }
  if (!(null == e2 ? void 0 : e2.response)) return e2.response = { data: { code: 500, message: "Server dalam perbaikan.", data: null, errors: null } }, Promise.reject(e2);
  if (!(null == (o = null == (r2 = null == e2 ? void 0 : e2.message) ? void 0 : r2.toLowerCase()) ? void 0 : o.includes("network"))) {
    switch (parseInt((null == e2 ? void 0 : e2.response) && (null == (l = null == e2 ? void 0 : e2.response) ? void 0 : l.status))) {
      case 401:
        e2.response.data = { ...null == (t = e2.response) ? void 0 : t.data, code: 401, message: "Anda belum login atau token sudah kadaluarsa, silahkan login terlebih dahulu.", data: null, errors: null };
        break;
      case 403:
        e2.response.data = { ...null == (d = e2.response) ? void 0 : d.data, code: 403, message: "Anda tidak memiliki akses ke halaman ini.", data: null, errors: null }, $router.push({ path: "/no-access" });
        break;
      case 502:
        e2.response.data = { ...null == (i = e2.response) ? void 0 : i.data, code: 502, message: "Aplikasi sedang tidak terkoneksi ke server.", data: null, errors: null };
        break;
      case 413:
        e2.response.data = { ...null == (u = e2.response) ? void 0 : u.data, code: 413, message: "File gagal diunggah.", data: null, errors: null };
        break;
      case 500:
        e2.response.data = { ...null == (p = e2.response) ? void 0 : p.data, code: 500, message: ((_a = null == (c = null == e2 ? void 0 : e2.response) ? void 0 : c.error) != null ? _a : null == (k = null == (m = null == e2 ? void 0 : e2.response) ? void 0 : m.data) ? void 0 : k.message) || "Server dalam perbaikan.", data: null, errors: null };
    }
    return Promise.reject(e2);
  }
  e2.response.data = { ...null == (n = e2.response) ? void 0 : n.data, code: 503, message: "Koneksi bermasalah, silakan cek koneksi internet.", data: null, errors: null };
});

export { r };
//# sourceMappingURL=axios-BfCSAjfx.mjs.map

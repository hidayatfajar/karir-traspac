import { C as Uf, D as sa, v as Wt, f as ha, p as Qs } from './server.mjs';

const r = Uf.create({ baseURL: "https://lms-sttal.dev-app.online/s22-api/lms-sttal-api/index.php", timeout: 6e5 });
function l() {
  const e2 = sa("toasts", () => []), a2 = Wt.ref(false), s2 = [];
  return { toasts: e2, add: function(n2) {
    const r2 = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, open: true, ...n2 };
    return s2.push(r2), async function() {
      if (!a2.value && 0 !== s2.length) {
        for (a2.value = true; s2.length > 0; ) {
          const a3 = s2.shift();
          await Wt.nextTick(), e2.value = [...e2.value, a3].slice(-5);
        }
        a2.value = false;
      }
    }(), r2;
  }, update: function(a3, s3) {
    const n2 = e2.value.findIndex((e3) => e3.id === a3);
    -1 !== n2 && (e2.value[n2] = { ...e2.value[n2], ...s3 });
  }, remove: function(a3) {
    const s3 = e2.value.findIndex((e3) => e3.id === a3);
    -1 !== s3 && (e2.value[s3] = { ...e2.value[s3], open: false }), setTimeout(() => {
      e2.value = e2.value.filter((e3) => e3.id !== a3);
    }, 200);
  }, clear: function() {
    e2.value = [];
  } };
}
r.interceptors.request.use(function(e2) {
  const n2 = ha(), { loading: o2, user: r2 } = Qs.storeToRefs(n2);
  return o2.value = true, r2.value && r2.value.token && e2.headers.set("TTOKEN", r2.value.token), e2;
}), r.interceptors.response.use((e2) => {
  const n2 = ha();
  if (n2) {
    const { loading: e3 } = Qs.storeToRefs(n2);
    setTimeout(() => {
      e3.value = false;
    }, 1e3);
  }
  return e2;
}, async (e2) => {
  var _a;
  var n2, o2, r2, l2, t, i, u, d, p, c, v, m;
  const k = ha();
  if (k) {
    const { loading: e3 } = Qs.storeToRefs(k);
    e3.value = false;
  }
  if (!(null == e2 ? void 0 : e2.response)) return e2.response = { data: { code: 500, message: "Server dalam perbaikan.", data: null, errors: null } }, Promise.reject(e2);
  if (!(null == (o2 = null == (n2 = null == e2 ? void 0 : e2.message) ? void 0 : n2.toLowerCase()) ? void 0 : o2.includes("network"))) {
    switch (parseInt((null == e2 ? void 0 : e2.response) && (null == (l2 = null == e2 ? void 0 : e2.response) ? void 0 : l2.status))) {
      case 401:
        e2.response.data = { ...null == (t = e2.response) ? void 0 : t.data, code: 401, message: "Anda belum login atau token sudah kadaluarsa, silahkan login terlebih dahulu.", data: null, errors: null };
        break;
      case 403:
        e2.response.data = { ...null == (i = e2.response) ? void 0 : i.data, code: 403, message: "Anda tidak memiliki akses ke halaman ini.", data: null, errors: null }, $router.push({ path: "/no-access" });
        break;
      case 502:
        e2.response.data = { ...null == (u = e2.response) ? void 0 : u.data, code: 502, message: "Aplikasi sedang tidak terkoneksi ke server.", data: null, errors: null };
        break;
      case 413:
        e2.response.data = { ...null == (d = e2.response) ? void 0 : d.data, code: 413, message: "File gagal diunggah.", data: null, errors: null };
        break;
      case 500:
        e2.response.data = { ...null == (p = e2.response) ? void 0 : p.data, code: 500, message: ((_a = null == (c = null == e2 ? void 0 : e2.response) ? void 0 : c.error) != null ? _a : null == (m = null == (v = null == e2 ? void 0 : e2.response) ? void 0 : v.data) ? void 0 : m.message) || "Server dalam perbaikan.", data: null, errors: null };
    }
    return Promise.reject(e2);
  }
  e2.response.data = { ...null == (r2 = e2.response) ? void 0 : r2.data, code: 503, message: "Koneksi bermasalah, silakan cek koneksi internet.", data: null, errors: null };
});

export { l, r };
//# sourceMappingURL=useToast-BU_XT8o3.mjs.map

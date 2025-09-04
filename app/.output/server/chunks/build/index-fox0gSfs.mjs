import { k as buildAssetsURL } from '../_/nitro.mjs';
import { v as Wt, j as ei, f as fa, b as Fs, s as om, l as Qo, c as hb, u as ua, t as Hy, P as xm } from './server.mjs';
import { t } from './useToast-DJ8z3Z8V.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'util';
import 'stream';
import 'path';
import 'http';
import 'https';
import 'url';
import 'fs';
import 'crypto';
import 'assert';
import 'tty';
import 'node:process';
import 'node:os';
import 'node:tty';
import 'zlib';
import 'events';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';

const l = { base: "animate-pulse rounded-md bg-elevated" }, c = { __name: "Skeleton", __ssrInlineRender: true, props: { as: { type: null, required: false }, class: { type: null, required: false } }, setup(d2) {
  const s2 = d2, o2 = ua(), i2 = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(l), ...(null == (e2 = o2.ui) ? void 0 : e2.skeleton) || {} });
  });
  return (e2, n2, o3, m2) => {
    n2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: d2.as, "aria-busy": "true", "aria-label": "loading", "aria-live": "polite", role: "alert", class: i2.value({ class: s2.class }) }, m2), { default: Wt.withCtx((n3, t2, d3, s3) => {
      if (!t2) return [Wt.renderSlot(e2.$slots, "default")];
      om.ssrRenderSlot(e2.$slots, "default", {}, null, t2, d3, s3);
    }), _: 3 }, o3));
  };
} }, v = c.setup;
c.setup = (e2, n2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue"), v ? v(e2, n2) : void 0;
};
const x = "" + buildAssetsURL("logo.Dg4k1axg.png"), _ = Wt.defineComponent({ __name: "index", __ssrInlineRender: true, setup(e2) {
  var n2;
  ei({ title: "Menu", meta: [{ name: "Portal Menu", content: "Portal Menu in Manajemen Gadik Page." }] }), t();
  const t2 = fa();
  Fs(), Wt.ref(false);
  const p2 = Wt.ref(true), l2 = Wt.ref(false), v2 = Wt.ref([]), _2 = null == (n2 = null == t2 ? void 0 : t2.user) ? void 0 : n2.hak_akses_modul;
  Array.isArray(_2) || null == _2 || _2.split(";").map(Number), Wt.ref(false);
  const h2 = Wt.ref([{ name: "Data Master", icon: "data-master", is_under_construction: false, id: 15 }, { name: "Kalender Akademik", icon: "kalender-akademik", is_under_construction: false, id: 6 }, { name: "Manajemen Gadik", icon: "manajemen-gadik", is_under_construction: false, id: 9 }, { name: "Manajemen Bahan Ajar", icon: "manajemen-bahan-ajar", is_under_construction: false, id: 8 }, { name: "Manajemen Kuis", icon: "manajemen-kuis", is_under_construction: false, id: 3 }, { name: "Manajemen Video", icon: "manajemen-video", is_under_construction: false, id: 12 }, { name: "Manajemen Siswa", icon: "manajemen-siswa", is_under_construction: false, id: 10 }, { name: "Manajemen Polling", icon: "manajemen-polling", is_under_construction: false, id: 4 }, { name: "Manajemen Penilaian", icon: "manajemen-penilaian", is_under_construction: false, id: 7 }, { name: "Manajemen Kelas", icon: "manajemen-kelas", is_under_construction: false, id: 1 }, { name: "Manajemen Kehadiran", icon: "manajemen-kehadiran", is_under_construction: false, id: 2 }, { name: "Manajemen Pengguna", icon: "manajemen-pengguna", is_under_construction: false, id: 11 }, { name: "Pesan & Forum", icon: "pesan-dan-forum", is_under_construction: false, id: 13 }, { name: "Executive Information System", icon: "executive-information-system", is_under_construction: false, id: 5 }, { name: "Aktivitas Pengguna", icon: "aktivitas-pengguna", is_under_construction: false, id: 14 }]), f2 = Wt.computed(() => {
    var _a;
    var e3;
    return (_a = null == (e3 = h2.value) ? void 0 : e3.filter((e4) => {
      var a2;
      return null == (a2 = v2.value) ? void 0 : a2.includes(null == e4 ? void 0 : e4.id);
    })) != null ? _a : [];
  }), g = Wt.reactive({ user_id: null, password_lama: "", password_baru: "", password_konfirmasi: "" });
  Wt.computed(() => !(!g.password_baru || "" === g.password_baru || !g.password_konfirmasi || "" === g.password_konfirmasi || g.password_baru === g.password_konfirmasi)), Wt.computed(() => !(!g.password_lama || "" === g.password_lama || !g.password_baru || "" === g.password_baru || g.password_lama !== g.password_baru));
  const b = (e3) => {
    const a2 = `/assets/images/icon/${e3}.png`;
    return Object.assign({})[a2].default;
  };
  return (e3, n3, t3, d2) => {
    var _a, _b;
    var s2;
    const o2 = Qo, u2 = hb, v3 = c;
    n3(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "px-3 py-2" }, d2))} data-v-6aade02d><div class="z-10 px-2 py-1 pb-5" data-v-6aade02d><div class="justify-between items-center flex mx-auto px-0 sm:px-1 lg:px-2 max-w-7xl !z-10" data-v-6aade02d><img class="h-[45px] w-[45px] -intro-x !z-10" height="45" width="45"${om.ssrRenderAttr("src", x)} alt="logo-kt" data-v-6aade02d>`), n3(om.ssrRenderComponent(o2, null, {}, t3)), n3('</div><div class="mx-auto max-w-7xl" data-v-6aade02d><div class="text-center -intro-y mt-4 !z-10" data-v-6aade02d><h1 class="text-center text-[50px] font-bold gradient-text" data-v-6aade02d> Karir Traspac </h1></div>'), Wt.unref(p2) ? (n3('<div class="z-10 py-16" data-v-6aade02d><div class="flex flex-wrap justify-center z-10 gap-10" data-v-6aade02d><!--[-->'), om.ssrRenderList(16, (e4) => {
      n3('<div class="w-64 flex items-center p-2 z-10 rounded-md intro-x" data-v-6aade02d>'), n3(om.ssrRenderComponent(v3, { class: "min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] flex items-center justify-center p-2 rounded-md", ui: { rounded: "rounded-lg" } }, null, t3)), n3("<div data-v-6aade02d>"), n3(om.ssrRenderComponent(v3, { class: "ml-2 w-[170px] h-[20px] rounded-lg mt-1", ui: { rounded: "rounded-lg" } }, null, t3)), n3(om.ssrRenderComponent(v3, { class: "ml-2 w-[105px] h-[20px] rounded-lg mt-2", ui: { rounded: "rounded-lg" } }, null, t3)), n3("</div></div>");
    }), n3("<!--]--></div></div>")) : (n3('<div class="z-10 py-16" data-v-6aade02d><div class="flex flex-wrap justify-center z-10 gap-10" data-v-6aade02d><!--[-->'), om.ssrRenderList((_a = Wt.unref(f2)) != null ? _a : [], (e4, a2) => {
      var _a2;
      n3(`<div class="group w-64 flex items-center p-2 cursor-pointer z-10 border rounded-md border-transparent hover:border-primary hover:border-opacity-10 hover:shadow-sm hover:bg-primary hover:bg-opacity-10 intro-x" data-v-6aade02d><div class="min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] bg-white flex items-center justify-center border p-2 rounded-md border-[#B5B7B954] border-opacity-50 shadow-sm" data-v-6aade02d><img loading="lazy" width="37" height="37" class="mx-auto group-hover:scale-[1.35] transform transition-all duration-500"${om.ssrRenderAttr("src", (_a2 = b(null == e4 ? void 0 : e4.icon)) != null ? _a2 : "/images/no-thumbnail.jpg")}${om.ssrRenderAttr("alt", null == e4 ? void 0 : e4.icon)} data-v-6aade02d></div><div class="ml-2 text-neutral-500 text-base font-medium group-hover:text-PRIMARY" data-v-6aade02d>${om.ssrInterpolate(null == e4 ? void 0 : e4.name)}</div></div>`);
    }), n3('<!--]--><div class="group w-64 flex items-center p-2 cursor-pointer z-10 border rounded-md border-transparent hover:border-PRIMARY hover:border-opacity-10 hover:shadow-sm hover:bg-PRIMARY hover:bg-opacity-10 intro-x" data-v-6aade02d><div class="min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] bg-white flex items-center justify-center border p-2 rounded-md border-[#B5B7B954] border-opacity-50 shadow-sm" data-v-6aade02d>'), Wt.unref(l2) ? n3(om.ssrRenderComponent(u2, { name: "line-md:loading-loop", class: "text-[#B5B7B9] text-[30px]" }, null, t3)) : n3(`<img loading="lazy" width="37" height="37" class="mx-auto group-hover:scale-[1.35] transform transition-all duration-500"${om.ssrRenderAttr("src", (_b = b("buku-panduan")) != null ? _b : "/images/no-thumbnail.jpg")}${om.ssrRenderAttr("alt", "buku-panduan")} data-v-6aade02d>`), n3(`</div><div class="ml-2 text-neutral-500 text-base font-medium group-hover:text-PRIMARY" data-v-6aade02d>${om.ssrInterpolate("Buku Panduan")}</div></div></div></div>`)), (null == (s2 = Wt.unref(f2)) ? void 0 : s2.length) < 9 && !Wt.unref(p2) ? n3('<div class="h-40" data-v-6aade02d></div>') : n3("<!---->"), n3("</div></div></div>");
  };
} }), h = _.setup;
_.setup = (e2, n2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/admin/portal-menu/index.vue"), h ? h(e2, n2) : void 0;
};
const f = o(_, [["__scopeId", "data-v-6aade02d"]]);

export { f as default };
//# sourceMappingURL=index-fox0gSfs.mjs.map

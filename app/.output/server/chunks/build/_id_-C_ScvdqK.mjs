import N from './HeaderPublic-BB0VCnCi.mjs';
import { v as Wt, s as pm, d as _b, _ as Ob } from './server.mjs';
import { u } from './Badge-DbT1gGUe.mjs';
import './useLocale-DRieL7bI.mjs';
import '../_/nitro.mjs';
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
import './usePortal-B0EwXMSu.mjs';
import './useForwardPropsEmits-nQnKVeqj.mjs';
import './DialogPortal-DWaqTrjw.mjs';
import './utils-6y4URocx.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './Presence-D-YonBfP.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import './useBodyScrollLock-DClI9ev0.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './Card-DDyQTkQA.mjs';
import './logo-kt-C_l9s7Hp.mjs';
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

const o = Wt.defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(o2) {
  const l2 = Wt.ref({ id: 5, title: "Marketing Specialist", company: "Traspac", icon: "i-mdi-bullhorn-outline", tags: ["Full-time", "On-site", "Digital Marketing"], description: ["Bergabunglah dengan tim kami sebagai Marketing Specialist untuk mengembangkan dan melaksanakan strategi pemasaran digital.", "Anda akan bertanggung jawab untuk mengelola kampanye iklan, menganalisis kinerja, dan meningkatkan visibilitas merek."], requirements: ["Pengalaman minimal 3 tahun dalam pemasaran digital", "Mahir dalam alat pemasaran seperti Google Ads, Facebook Ads, dan SEO", "Kemampuan analitis yang kuat dan perhatian terhadap detail"], location: "Bandung, Indonesia", salary: "Rp 10-15jt" });
  return (o3, n, d, p) => {
    const m = N, u$1 = _b, c = u, x = Ob, v = Wt.resolveComponent("UDivider");
    n("<!--[-->"), n(pm.ssrRenderComponent(m, null, null, d)), n('<div class="min-h-screen w-full relative bg-gray-50 flex justify-center p-4 py-12 sm:py-20"><div class="absolute inset-0 z-0 cool-blue-glow"></div><div class="relative w-full max-w-4xl bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden"><div class="p-8 sm:p-10"><div class="flex flex-col sm:flex-row gap-6 items-start mb-8">'), n(pm.ssrRenderComponent(u$1, { icon: l2.value.icon, size: "3xl" }, null, d)), n(`<div class="flex-grow"><h1 class="text-slate-800 text-3xl font-bold leading-tight">${pm.ssrInterpolate(l2.value.title)}</h1><p class="text-neutral-500 text-lg font-medium mt-1">${pm.ssrInterpolate(l2.value.company)}</p><div class="flex flex-wrap gap-2 mt-4"><!--[-->`), pm.ssrRenderList(l2.value.tags, (e2) => {
      n(pm.ssrRenderComponent(c, { key: e2, label: e2, size: "md", variant: "subtle" }, null, d));
    }), n('<!--]--></div></div><div class="w-full sm:w-auto flex-shrink-0">'), n(pm.ssrRenderComponent(x, { label: "Lamar Sekarang", color: "primary", size: "lg", icon: "i-mdi-send-outline", class: "w-full sm:w-auto", onClick: (e2) => o3.$router.push("/auth/login") }, null, d)), n("</div></div>"), n(pm.ssrRenderComponent(v, { class: "my-8" }, null, d)), n('<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-8"><div><h2 class="text-xl font-semibold text-slate-700 mb-4">Deskripsi Pekerjaan</h2><div class="prose max-w-none text-slate-600"><!--[-->'), pm.ssrRenderList(l2.value.description, (e2, t2) => {
      n(`<p>${pm.ssrInterpolate(e2)}</p>`);
    }), n('<!--]--></div></div><div><h2 class="text-xl font-semibold text-slate-700 mb-4">Kualifikasi</h2><ul class="prose list-disc pl-5 text-slate-600 space-y-2"><!--[-->'), pm.ssrRenderList(l2.value.requirements, (e2, t2) => {
      n(`<li>${pm.ssrInterpolate(e2)}</li>`);
    }), n(`<!--]--></ul></div></div><div class="lg:col-span-1"><div class="bg-slate-50 rounded-xl p-6 space-y-4 border"><h3 class="text-lg font-semibold text-slate-700 border-b pb-2">Informasi Pekerjaan</h3><div><p class="text-sm text-slate-500">Lokasi</p><p class="text-base text-slate-800 font-medium">${pm.ssrInterpolate(l2.value.location)}</p></div><div><p class="text-sm text-slate-500">Gaji</p><p class="text-base text-slate-800 font-medium">${pm.ssrInterpolate(l2.value.salary)}</p></div></div></div></div><div class="w-full mt-10 pt-6 border-t">`), n(pm.ssrRenderComponent(x, { label: "Kembali ke Lowongan", color: "neutral", variant: "outline", icon: "i-mdi-arrow-left", onClick: (e2) => o3.$router.push("/lowongan") }, null, d)), n("</div></div></div></div><!--]-->");
  };
} }), l = o.setup;
o.setup = (e2, s2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/lowongan/[id].vue"), l ? l(e2, s2) : void 0;
};

export { o as default };
//# sourceMappingURL=_id_-C_ScvdqK.mjs.map

import { m as buildAssetsURL } from '../_/nitro.mjs';
import { s as pm, _ as Rb, v as Wt } from './server.mjs';
import { o as o$1 } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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
import 'node:module';
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

const o = "" + buildAssetsURL("logo-white-kt.B0ESoAx-.png"), r = {};
const i = r.setup;
r.setup = (t2, e2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/common/layouts/FooterPublic.vue"), i ? i(t2, e2) : void 0;
};
const m = o$1(r, [["ssrRender", function(s2, a2, r2, i2) {
  const m2 = Rb;
  a2(`<div${pm.ssrRenderAttrs(i2)}><footer class="bg-slate-800 text-white py-8 md:py-12 relative overflow-hidden"><div class="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"></div><div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-emerald-400/10 blur-lg"></div><div class="container max-w-7xl mx-auto px-6 relative z-10"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8"><div class="col-span-1 sm:col-span-2 lg:col-span-1"><img${pm.ssrRenderAttr("src", o)} alt="Karir Traspac" class="w-40 object-contain mb-4"><p class="text-slate-300 text-sm sm:text-base"> Better Solution Better Service </p></div><div><h4 class="font-bold mb-3 md:mb-4 text-sm sm:text-base text-white"> Perusahaan </h4><ul class="space-y-2"><li><a class="text-slate-300 hover:text-white transition text-sm sm:text-base">Beranda</a></li><li><a class="text-slate-300 hover:text-white transition text-sm sm:text-base">Lowongan</a></li><li><a class="text-slate-300 hover:text-white transition text-sm sm:text-base">FAQ</a></li></ul></div><div><h4 class="font-bold mb-3 md:mb-4 text-sm sm:text-base text-white"> Kontak </h4><p class="text-slate-300 mb-2 text-sm sm:text-base"> info@traspac.co.id </p><p class="text-slate-300 text-sm sm:text-base">(021) 31997486</p></div><div><h4 class="font-bold mb-3 md:mb-4 text-sm sm:text-base text-white"> Sosial Media </h4><div class="flex space-x-2">`), a2(pm.ssrRenderComponent(m2, { icon: "i-mdi-linkedin", color: "neutral", variant: "ghost", to: "https://www.linkedin.com/company/pt-traspac-makmur-sejahtera/", target: "_blank" }, null, r2)), a2(pm.ssrRenderComponent(m2, { icon: "i-mdi-instagram", color: "neutral", variant: "ghost", to: "https://instagram.com/traspac", target: "_blank" }, null, r2)), a2(pm.ssrRenderComponent(m2, { icon: "i-mdi-youtube", color: "neutral", variant: "ghost", to: "https://www.youtube.com/@traspacmakmursejahtera", target: "_blank" }, null, r2)), a2(`</div></div></div><div class="border-t border-slate-700/50 pt-6 md:pt-8 text-center"><p class="text-slate-300 text-sm sm:text-base"> \xA9 ${pm.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Karir Traspac. All rights reserved. </p></div></div></footer></div>`);
}]]);

export { m as default };
//# sourceMappingURL=FooterPublic-CPfiW6Oc.mjs.map

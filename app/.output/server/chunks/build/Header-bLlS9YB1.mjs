import { v as Wt, $ as Bs, b as Fs, f as fa, s as om, l as Qo } from './server.mjs';
import { s } from './logo-kt-C_l9s7Hp.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/nitro.mjs';
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
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

const a = Wt.defineComponent({ __name: "Header", __ssrInlineRender: true, setup(a2) {
  Bs(), Fs(), fa();
  const d2 = Wt.ref(false);
  return Wt.ref(false), Wt.ref(false), (e2, r2, s2, a3) => {
    const m = Qo;
    r2(`<div${om.ssrRenderAttrs(a3)}><header id="mainHeader" class="w-full h-[--header-height] px-4 sticky top-0 z-50 bg-white"><div class="${om.ssrRenderClass([Wt.unref(d2) ? "w-full" : "max-w-[1200px]", "justify-between items-center flex mx-auto px-0 sm:px-1 lg:px-2 h-[--header-height] py-2"])}"><div class="hover:scale-[1.07] transition-all duration-500"><div class="justify-start items-center gap-x-4 flex cursor-pointer -intro-x"><img${om.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-32 object-contain mx-auto"></div></div>`), r2(om.ssrRenderComponent(m, null, {}, s2)), r2("</div></header></div>");
  };
} }), d = a.setup;
a.setup = (e2, r2) => {
  const s2 = Wt.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("components/common/layouts/Header.vue"), d ? d(e2, r2) : void 0;
};

export { a as default };
//# sourceMappingURL=Header-bLlS9YB1.mjs.map

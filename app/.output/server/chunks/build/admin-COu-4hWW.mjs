import a from './Header-dbw-CESb.mjs';
import { o as o$1 } from './Container-mCQntVpP.mjs';
import { s as pm, v as Wt } from './server.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import './logo-kt-C_l9s7Hp.mjs';
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

const p = {};
const i = p.setup;
p.setup = (t2, o2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue"), i ? i(t2, o2) : void 0;
};
const d = o(p, [["ssrRender", function(s2, p2, i2, d2) {
  const m = a, n = o$1;
  p2(`<div${pm.ssrRenderAttrs(d2)}><div class="bg-[##EEF5F9] min-h-dvh">`), p2(pm.ssrRenderComponent(m, null, null, i2)), p2(pm.ssrRenderComponent(n, { ui: { base: "mx-auto", padding: "sm:px-0 lg:px-0 xl:px-0 md:px-0 px-0", constrained: "max-w-7xl" } }, { default: Wt.withCtx((t2, o2, p3, i3) => {
    if (!o2) return [Wt.renderSlot(s2.$slots, "default")];
    pm.ssrRenderSlot(s2.$slots, "default", {}, null, o2, p3, i3);
  }), _: 3 }, i2)), p2("</div></div>");
}]]);

export { d as default };
//# sourceMappingURL=admin-COu-4hWW.mjs.map

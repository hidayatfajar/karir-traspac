import { s as om, v as Wt } from './server.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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

const e = {};
const p = e.setup;
e.setup = (t2, r2) => {
  const e2 = Wt.useSSRContext();
  return (e2.modules || (e2.modules = /* @__PURE__ */ new Set())).add("layouts/no-layout.vue"), p ? p(t2, r2) : void 0;
};
const s = o(e, [["ssrRender", function(r2, e2, p2, s2) {
  e2(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "" }, s2))}>`), om.ssrRenderSlot(r2.$slots, "default", {}, null, e2, p2), e2("</div>");
}]]);

export { s as default };
//# sourceMappingURL=no-layout-Bty-kGuG.mjs.map

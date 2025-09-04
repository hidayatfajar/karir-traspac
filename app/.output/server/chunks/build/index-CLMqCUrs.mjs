import { s as om, v as Wt } from './server.mjs';
import { o as o$1 } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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

const o = {};
const i = o.setup;
o.setup = (t2, e2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/interviewers/index.vue"), i ? i(t2, e2) : void 0;
};
const p = o$1(o, [["ssrRender", function(e2, o2, i2, p2) {
  o2(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "h-screen flex items-center justify-center" }, p2))}> ini adalah halaman interviewer </div>`);
}]]);

export { p as default };
//# sourceMappingURL=index-CLMqCUrs.mjs.map

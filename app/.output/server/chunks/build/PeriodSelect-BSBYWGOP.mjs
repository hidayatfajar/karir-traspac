import { _ as _e } from './Select-5h5sLi6z.mjs';
import { v as Wt, s as pm } from './server.mjs';
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
import './PopperArrow-DHFd-Rdx.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './Collection-B86A2tPF.mjs';
import './usePrimitiveElement-BYq1qwBL.mjs';
import './useDirection-D0ypspbM.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import './nullish-aV-w2MPu.mjs';
import './Presence-D-YonBfP.mjs';
import './useTypeahead-BwB5DMSn.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './utils-6y4URocx.mjs';
import './useBodyScrollLock-DClI9ev0.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
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

const r = Symbol.for("constructDateFrom");
function i(e2, t2) {
  return "function" == typeof e2 ? e2(t2) : e2 && "object" == typeof e2 && r in e2 ? e2[r](t2) : e2 instanceof Date ? new e2.constructor(t2) : new Date(t2);
}
function s(e2, t2) {
  const [o2, r2] = function(e3, ...t3) {
    const o3 = i.bind(null, t3.find((e4) => "object" == typeof e4));
    return t3.map(o3);
  }(0, t2.start, t2.end);
  return { start: o2, end: r2 };
}
const a = { __name: "PeriodSelect", __ssrInlineRender: true, props: Wt.mergeModels({ range: Object }, { modelValue: { required: true, default: "daily" }, modelModifiers: {} }), emits: ["update:modelValue"], setup(r2) {
  const a2 = Wt.useModel(r2, "modelValue"), n2 = r2, p = Wt.computed(() => n2.range ? function(e2, t2) {
    const { start: o2, end: r3 } = s(null == t2, e2);
    let a3 = +o2 > +r3;
    const n3 = a3 ? +o2 : +r3, p2 = a3 ? r3 : o2;
    p2.setHours(0, 0, 0, 0);
    const m2 = [];
    for (; +p2 <= n3; ) m2.push(i(o2, p2)), p2.setDate(p2.getDate() + 1), p2.setHours(0, 0, 0, 0);
    return a3 ? m2.reverse() : m2;
  }(n2.range) : []), m = Wt.computed(() => {
    if (!n2.range) return ["daily"];
    const e2 = p.value.length;
    return e2 <= 8 ? ["daily"] : e2 <= 31 ? ["daily", "weekly"] : ["weekly", "monthly"];
  });
  return Wt.watch(m, (e2) => {
    e2.length > 0 && !e2.includes(a2.value) && (a2.value = e2[0]);
  }, { immediate: true }), (r3, i2, s2, n3) => {
    const p2 = _e;
    i2(pm.ssrRenderComponent(p2, Wt.mergeProps({ modelValue: a2.value, "onUpdate:modelValue": (e2) => a2.value = e2, items: m.value, variant: "ghost", class: "data-[state=open]:bg-elevated", ui: { value: "capitalize", itemLabel: "capitalize", trailingIcon: "group-data-[state=open]:rotate-180 transition-transform duration-200" } }, n3), null, s2));
  };
} }, n = a.setup;
a.setup = (e2, o2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/PeriodSelect.vue"), n ? n(e2, o2) : void 0;
};

export { a as default };
//# sourceMappingURL=PeriodSelect-BSBYWGOP.mjs.map

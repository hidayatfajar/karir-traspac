import { _ as _e } from './Select-DbdRKll6.mjs';
import { v as Wt, s as om } from './server.mjs';
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
import './usePortal-DzDMWCd7.mjs';
import './ConfigProvider-C3zU966T.mjs';
import './useForwardPropsEmits-DnSfSOTI.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './Collection-CK0B56BN.mjs';
import './usePrimitiveElement-BqlHGOiE.mjs';
import './useFormControl-BKZlrIrW.mjs';
import './nullish-aV-w2MPu.mjs';
import './useTypeahead-CXda91ln.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './utils-iLtTyP0t.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
import './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
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
function s(t2, e2) {
  return "function" == typeof t2 ? t2(e2) : t2 && "object" == typeof t2 && r in t2 ? t2[r](e2) : t2 instanceof Date ? new t2.constructor(e2) : new Date(e2);
}
function i(t2, e2) {
  const [o2, r2] = function(t3, ...e3) {
    const o3 = s.bind(null, e3.find((t4) => "object" == typeof t4));
    return e3.map(o3);
  }(0, e2.start, e2.end);
  return { start: o2, end: r2 };
}
const a = { __name: "PeriodSelect", __ssrInlineRender: true, props: Wt.mergeModels({ range: Object }, { modelValue: { required: true, default: "daily" }, modelModifiers: {} }), emits: ["update:modelValue"], setup(r2) {
  const a2 = Wt.useModel(r2, "modelValue"), n2 = r2, p = Wt.computed(() => n2.range ? function(t2, e2) {
    const { start: o2, end: r3 } = i(null == e2, t2);
    let a3 = +o2 > +r3;
    const n3 = a3 ? +o2 : +r3, p2 = a3 ? r3 : o2;
    p2.setHours(0, 0, 0, 0);
    const d2 = [];
    for (; +p2 <= n3; ) d2.push(s(o2, p2)), p2.setDate(p2.getDate() + 1), p2.setHours(0, 0, 0, 0);
    return a3 ? d2.reverse() : d2;
  }(n2.range) : []), d = Wt.computed(() => {
    if (!n2.range) return ["daily"];
    const t2 = p.value.length;
    return t2 <= 8 ? ["daily"] : t2 <= 31 ? ["daily", "weekly"] : ["weekly", "monthly"];
  });
  return Wt.watch(d, (t2) => {
    t2.length > 0 && !t2.includes(a2.value) && (a2.value = t2[0]);
  }, { immediate: true }), (r3, s2, i2, n3) => {
    const p2 = _e;
    s2(om.ssrRenderComponent(p2, Wt.mergeProps({ modelValue: a2.value, "onUpdate:modelValue": (t2) => a2.value = t2, items: d.value, variant: "ghost", class: "data-[state=open]:bg-elevated", ui: { value: "capitalize", itemLabel: "capitalize", trailingIcon: "group-data-[state=open]:rotate-180 transition-transform duration-200" } }, n3), null, i2));
  };
} }, n = a.setup;
a.setup = (t2, o2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/PeriodSelect.vue"), n ? n(t2, o2) : void 0;
};

export { a as default };
//# sourceMappingURL=PeriodSelect-CSHjTNNy.mjs.map

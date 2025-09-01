import { _ as _e } from './Select-ehTOOHkR.mjs';
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
import 'node:module';
import 'node:path';
import './usePortal-DtLtCtVs.mjs';
import './ConfigProvider-BxfkmoHO.mjs';
import './useForwardPropsEmits-WwvTsoLV.mjs';
import './PopperArrow-DcWSYcLt.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './Collection-BWpNbfJs.mjs';
import './usePrimitiveElement-DSug4YUi.mjs';
import './useFormControl-BrnPeDt6.mjs';
import './nullish-aV-w2MPu.mjs';
import './useTypeahead-B73O3JTr.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './utils-iLtTyP0t.mjs';
import './useBodyScrollLock-Fz4_gHfe.mjs';
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
const n = { __name: "PeriodSelect", __ssrInlineRender: true, props: Wt.mergeModels({ range: Object }, { modelValue: { required: true, default: "daily" }, modelModifiers: {} }), emits: ["update:modelValue"], setup(r2) {
  const n2 = Wt.useModel(r2, "modelValue"), a2 = r2, p = Wt.computed(() => a2.range ? function(t2, e2) {
    const { start: o2, end: r3 } = i(null == e2, t2);
    let n3 = +o2 > +r3;
    const a3 = n3 ? +o2 : +r3, p2 = n3 ? r3 : o2;
    p2.setHours(0, 0, 0, 0);
    const d2 = [];
    for (; +p2 <= a3; ) d2.push(s(o2, p2)), p2.setDate(p2.getDate() + 1), p2.setHours(0, 0, 0, 0);
    return n3 ? d2.reverse() : d2;
  }(a2.range) : []), d = Wt.computed(() => {
    if (!a2.range) return ["daily"];
    const t2 = p.value.length;
    return t2 <= 8 ? ["daily"] : t2 <= 31 ? ["daily", "weekly"] : ["weekly", "monthly"];
  });
  return Wt.watch(d, (t2) => {
    t2.length > 0 && !t2.includes(n2.value) && (n2.value = t2[0]);
  }, { immediate: true }), (r3, s2, i2, a3) => {
    const p2 = _e;
    s2(pm.ssrRenderComponent(p2, Wt.mergeProps({ modelValue: n2.value, "onUpdate:modelValue": (t2) => n2.value = t2, items: d.value, variant: "ghost", class: "data-[state=open]:bg-elevated", ui: { value: "capitalize", itemLabel: "capitalize", trailingIcon: "group-data-[state=open]:rotate-180 transition-transform duration-200" } }, a3), null, i2));
  };
} }, a = n.setup;
n.setup = (t2, o2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/PeriodSelect.vue"), a ? a(t2, o2) : void 0;
};

export { n as default };
//# sourceMappingURL=PeriodSelect-gFXL7EIf.mjs.map

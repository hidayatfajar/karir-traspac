import { v as Wt } from './server.mjs';
import { d } from './VisuallyHidden-CudQpOEQ.mjs';
import { o } from './usePrimitiveElement-BqlHGOiE.mjs';

const l = Wt.defineComponent({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(l2) {
  const n2 = l2, { primitiveElement: r, currentElement: o$1 } = o(), u = Wt.computed(() => {
    var _a;
    return (_a = n2.checked) != null ? _a : n2.value;
  });
  return Wt.watch(u, (e2, a2) => {
    if (!o$1.value) return;
    const t2 = o$1.value, l3 = (void 0).HTMLInputElement.prototype, n3 = Object.getOwnPropertyDescriptor(l3, "value").set;
    if (n3 && e2 !== a2) {
      const a3 = new Event("input", { bubbles: true }), l4 = new Event("change", { bubbles: true });
      n3.call(t2, e2), t2.dispatchEvent(a3), t2.dispatchEvent(l4);
    }
  }), (t2, l3) => (Wt.openBlock(), Wt.createBlock(d, Wt.mergeProps({ ref_key: "primitiveElement", ref: r }, { ...n2, ...t2.$attrs }, { as: "input" }), null, 16));
} }), n = Wt.defineComponent({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(a2) {
  const t2 = a2, n2 = Wt.computed(() => "object" == typeof t2.value && Array.isArray(t2.value) && 0 === t2.value.length && t2.required), r = Wt.computed(() => "string" == typeof t2.value || "number" == typeof t2.value || "boolean" == typeof t2.value ? [{ name: t2.name, value: t2.value }] : "object" == typeof t2.value && Array.isArray(t2.value) ? t2.value.flatMap((e2, a3) => "object" == typeof e2 ? Object.entries(e2).map(([e3, l2]) => ({ name: `[${t2.name}][${a3}][${e3}]`, value: l2 })) : { name: `[${t2.name}][${a3}]`, value: e2 }) : null === t2.value || "object" != typeof t2.value || Array.isArray(t2.value) ? [] : Object.entries(t2.value).map(([e2, a3]) => ({ name: `[${t2.name}][${e2}]`, value: a3 })));
  return (a3, o) => n2.value ? (Wt.openBlock(), Wt.createBlock(l, Wt.mergeProps({ key: a3.name }, { ...t2, ...a3.$attrs }, { name: a3.name, value: a3.value }), null, 16, ["name", "value"])) : (Wt.openBlock(true), Wt.createElementBlock(Wt.Fragment, { key: 1 }, Wt.renderList(r.value, (n3) => (Wt.openBlock(), Wt.createBlock(l, Wt.mergeProps({ key: n3.name, ref_for: true }, { ...t2, ...a3.$attrs }, { name: n3.name, value: n3.value }), null, 16, ["name", "value"]))), 128));
} });

export { n };
//# sourceMappingURL=VisuallyHiddenInput-BCSgpyOT.mjs.map

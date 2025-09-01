import { v as Wt, P as _m } from './server.mjs';
import { C as C$1, T, N, I } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { s } from './utils-iLtTyP0t.mjs';
import { c, h as h$1, f, b as b$1 } from './usePortal-DtLtCtVs.mjs';
import { N as N$1, T as T$1, E } from './useBodyScrollLock-Fz4_gHfe.mjs';

const [m, v] = T("DialogRoot"), B = Wt.defineComponent({ inheritAttrs: false, __name: "DialogRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: false }, modal: { type: Boolean, default: true } }, emits: ["update:open"], setup(t2, { emit: n2 }) {
  const a2 = t2, r2 = C$1(a2, "open", n2, { defaultValue: a2.defaultOpen, passive: void 0 === a2.open }), s2 = Wt.ref(), l2 = Wt.ref(), { modal: u2 } = Wt.toRefs(a2);
  return v({ open: r2, modal: u2, openModal: () => {
    r2.value = true;
  }, onOpenChange: (e2) => {
    r2.value = e2;
  }, onOpenToggle: () => {
    r2.value = !r2.value;
  }, contentId: "", titleId: "", descriptionId: "", triggerElement: s2, contentElement: l2 }), (t3, o2) => Wt.renderSlot(t3.$slots, "default", { open: Wt.unref(r2), close: () => r2.value = false });
} }), C = Wt.defineComponent({ __name: "DialogClose", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o2) {
  const n2 = o2;
  N();
  const r2 = m();
  return (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(n2, { type: "button" === o3.as ? "button" : void 0, onClick: a2[0] || (a2[0] = (t2) => Wt.unref(r2).onOpenChange(false)) }), { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 16, ["type"]));
} });
const y = Wt.defineComponent({ __name: "DialogContentImpl", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: o2 }) {
  const n2 = t2, r2 = o2, i2 = m(), { forwardRef: d2} = N();
  return i2.titleId || (i2.titleId = c(void 0, "reka-dialog-title")), i2.descriptionId || (i2.descriptionId = c(void 0, "reka-dialog-description")), (t3, o3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(E), { "as-child": "", loop: "", trapped: n2.trapFocus, onMountAutoFocus: o3[5] || (o3[5] = (e2) => r2("openAutoFocus", e2)), onUnmountAutoFocus: o3[6] || (o3[6] = (e2) => r2("closeAutoFocus", e2)) }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(b$1), Wt.mergeProps({ id: Wt.unref(i2).contentId, ref: Wt.unref(d2), as: t3.as, "as-child": t3.asChild, "disable-outside-pointer-events": t3.disableOutsidePointerEvents, role: "dialog", "aria-describedby": Wt.unref(i2).descriptionId, "aria-labelledby": Wt.unref(i2).titleId, "data-state": Wt.unref(s)(Wt.unref(i2).open.value) }, t3.$attrs, { onDismiss: o3[0] || (o3[0] = (t4) => Wt.unref(i2).onOpenChange(false)), onEscapeKeyDown: o3[1] || (o3[1] = (e2) => r2("escapeKeyDown", e2)), onFocusOutside: o3[2] || (o3[2] = (e2) => r2("focusOutside", e2)), onInteractOutside: o3[3] || (o3[3] = (e2) => r2("interactOutside", e2)), onPointerDownOutside: o3[4] || (o3[4] = (e2) => r2("pointerDownOutside", e2)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])]), _: 3 }, 8, ["trapped"]));
} }), g = Wt.defineComponent({ __name: "DialogContentModal", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: o2 }) {
  const n2 = t2, s2 = o2, l2 = m(), u2 = I(s2), { forwardRef: i2, currentElement: d2 } = N();
  return T$1(d2), (t3, o3) => (Wt.openBlock(), Wt.createBlock(y, Wt.mergeProps({ ...n2, ...Wt.unref(u2) }, { ref: Wt.unref(i2), "trap-focus": Wt.unref(l2).open.value, "disable-outside-pointer-events": true, onCloseAutoFocus: o3[0] || (o3[0] = (t4) => {
    var o4;
    t4.defaultPrevented || (t4.preventDefault(), null == (o4 = Wt.unref(l2).triggerElement.value) || o4.focus());
  }), onPointerDownOutside: o3[1] || (o3[1] = (e2) => {
    const t4 = e2.detail.originalEvent, o4 = 0 === t4.button && true === t4.ctrlKey;
    (2 === t4.button || o4) && e2.preventDefault();
  }), onFocusOutside: o3[2] || (o3[2] = (e2) => {
    e2.preventDefault();
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), _ = Wt.defineComponent({ __name: "DialogContentNonModal", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: o2 }) {
  const n2 = t2, s2 = I(o2);
  N();
  const l2 = m(), u2 = Wt.ref(false), i2 = Wt.ref(false);
  return (t3, o3) => (Wt.openBlock(), Wt.createBlock(y, Wt.mergeProps({ ...n2, ...Wt.unref(s2) }, { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: o3[0] || (o3[0] = (t4) => {
    var o4;
    t4.defaultPrevented || (u2.value || null == (o4 = Wt.unref(l2).triggerElement.value) || o4.focus(), t4.preventDefault()), u2.value = false, i2.value = false;
  }), onInteractOutside: o3[1] || (o3[1] = (t4) => {
    var o4;
    t4.defaultPrevented || (u2.value = true, "pointerdown" === t4.detail.originalEvent.type && (i2.value = true));
    const n3 = t4.target;
    (null == (o4 = Wt.unref(l2).triggerElement.value) ? void 0 : o4.contains(n3)) && t4.preventDefault(), "focusin" === t4.detail.originalEvent.type && i2.value && t4.preventDefault();
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), h = Wt.defineComponent({ __name: "DialogContent", props: { forceMount: { type: Boolean }, trapFocus: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: o2 }) {
  const n2 = t2, s2 = o2, l2 = m(), u2 = I(s2), { forwardRef: d2 } = N();
  return (t3, o3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(f), { present: t3.forceMount || Wt.unref(l2).open.value }, { default: Wt.withCtx(() => [Wt.unref(l2).modal.value ? (Wt.openBlock(), Wt.createBlock(g, Wt.mergeProps({ key: 0, ref: Wt.unref(d2) }, { ...n2, ...Wt.unref(u2), ...t3.$attrs }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16)) : (Wt.openBlock(), Wt.createBlock(_, Wt.mergeProps({ key: 1, ref: Wt.unref(d2) }, { ...n2, ...Wt.unref(u2), ...t3.$attrs }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), k = Wt.defineComponent({ __name: "DialogDescription", props: { asChild: { type: Boolean }, as: { default: "p" } }, setup(o2) {
  const n2 = o2;
  N();
  const r2 = m();
  return (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(n2, { id: Wt.unref(r2).descriptionId }), { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), O = Wt.defineComponent({ __name: "DialogOverlayImpl", props: { asChild: { type: Boolean }, as: {} }, setup(o2) {
  const n2 = m();
  return N$1(true), N(), (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { as: o3.as, "as-child": o3.asChild, "data-state": Wt.unref(n2).open.value ? "open" : "closed", style: { "pointer-events": "auto" } }, { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-state"]));
} }), w = Wt.defineComponent({ __name: "DialogOverlay", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const o2 = m(), { forwardRef: n2 } = N();
  return (t3, a2) => {
    var r2;
    return (null == (r2 = Wt.unref(o2)) ? void 0 : r2.modal.value) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(f), { key: 0, present: t3.forceMount || Wt.unref(o2).open.value }, { default: Wt.withCtx(() => [Wt.createVNode(O, Wt.mergeProps(t3.$attrs, { ref: Wt.unref(n2), as: t3.as, "as-child": t3.asChild }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["as", "as-child"])]), _: 3 }, 8, ["present"])) : Wt.createCommentVNode("", true);
  };
} }), D = Wt.defineComponent({ __name: "DialogTitle", props: { asChild: { type: Boolean }, as: { default: "h2" } }, setup(o2) {
  const n2 = o2, r2 = m();
  return N(), (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(n2, { id: Wt.unref(r2).titleId }), { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), b = Wt.defineComponent({ __name: "DialogTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o2) {
  const n2 = o2, r2 = m(), { forwardRef: s2 } = N();
  return r2.contentId || (r2.contentId = c(void 0, "reka-dialog-content")), (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(n2, { ref: Wt.unref(s2), type: "button" === o3.as ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": Wt.unref(r2).open.value || false, "aria-controls": Wt.unref(r2).open.value ? Wt.unref(r2).contentId : void 0, "data-state": Wt.unref(r2).open.value ? "open" : "closed", onClick: Wt.unref(r2).onOpenToggle }), { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
} }), P = Wt.defineComponent({ __name: "DialogPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const o2 = t2;
  return (t3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(h$1), Wt.normalizeProps(Wt.guardReactiveProps(o2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} });

export { B, C, D, P, b, h, k, w };
//# sourceMappingURL=DialogPortal-3xALZYl4.mjs.map

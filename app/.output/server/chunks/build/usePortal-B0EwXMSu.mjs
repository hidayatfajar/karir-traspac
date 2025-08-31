import { v as Wt, P as _m } from './server.mjs';
import { S, N, k } from './useForwardPropsEmits-nQnKVeqj.mjs';

const n = Wt.reactive({ layersRoot: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), u = Wt.defineComponent({ __name: "DismissableLayer", props: { disableOutsidePointerEvents: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"], setup(l2, { emit: u2 }) {
  const s2 = l2, r2 = u2, { forwardRef: i2, currentElement: d } = N(), v = Wt.computed(() => {
    var _a;
    var e2;
    return (_a = null == (e2 = d.value) ? void 0 : e2.ownerDocument) != null ? _a : globalThis.document;
  }), c = Wt.computed(() => n.layersRoot), p = Wt.computed(() => d.value ? Array.from(c.value).indexOf(d.value) : -1), f = Wt.computed(() => n.layersWithOutsidePointerEventsDisabled.size > 0), m = Wt.computed(() => {
    const e2 = Array.from(c.value), [t2] = [...n.layersWithOutsidePointerEventsDisabled].slice(-1), o2 = e2.indexOf(t2);
    return p.value >= o2;
  }), y = function(t2, o2, a2 = true) {
    var _a;
    var l3;
    (_a = null == (l3 = null == o2 ? void 0 : o2.value) ? void 0 : l3.ownerDocument) != null ? _a : null == globalThis || globalThis.document;
    const n2 = Wt.ref(false);
    return Wt.ref(() => {
    }), Wt.watchEffect((e2) => {
    }), { onPointerDownCapture: () => {
      Wt.toValue(a2) && (n2.value = true);
    } };
  }(0, d), b = function(t2, o2, a2 = true) {
    var _a;
    var l3;
    (_a = null == (l3 = null == o2 ? void 0 : o2.value) ? void 0 : l3.ownerDocument) != null ? _a : null == globalThis || globalThis.document;
    const n2 = Wt.ref(false);
    return Wt.watchEffect((e2) => {
    }), { onFocusCapture: () => {
      Wt.toValue(a2) && (n2.value = true);
    }, onBlurCapture: () => {
      Wt.toValue(a2) && (n2.value = false);
    } };
  }(0, d);
  let h;
  return k("Escape", (e2) => {
    p.value === c.value.size - 1 && (r2("escapeKeyDown", e2), e2.defaultPrevented || r2("dismiss"));
  }), Wt.watchEffect((e2) => {
    d.value && (s2.disableOutsidePointerEvents && (0 === n.layersWithOutsidePointerEventsDisabled.size && (h = v.value.body.style.pointerEvents, v.value.body.style.pointerEvents = "none"), n.layersWithOutsidePointerEventsDisabled.add(d.value)), c.value.add(d.value), e2(() => {
      s2.disableOutsidePointerEvents && 1 === n.layersWithOutsidePointerEventsDisabled.size && (v.value.body.style.pointerEvents = h);
    }));
  }), Wt.watchEffect((e2) => {
    e2(() => {
      d.value && (c.value.delete(d.value), n.layersWithOutsidePointerEventsDisabled.delete(d.value));
    });
  }), (o2, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref: Wt.unref(i2), "as-child": o2.asChild, as: o2.as, "data-dismissable-layer": "", style: Wt.normalizeStyle({ pointerEvents: f.value ? m.value ? "auto" : "none" : void 0 }), onFocusCapture: Wt.unref(b).onFocusCapture, onBlurCapture: Wt.unref(b).onBlurCapture, onPointerdownCapture: Wt.unref(y).onPointerDownCapture }, { default: Wt.withCtx(() => [Wt.renderSlot(o2.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
} }), s = Wt.defineComponent({ __name: "Teleport", props: { to: { default: "body" }, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const o2 = S();
  return (t3, a2) => Wt.unref(o2) || t3.forceMount ? (Wt.openBlock(), Wt.createBlock(Wt.Teleport, { key: 0, to: t3.to, disabled: t3.disabled, defer: t3.defer }, [Wt.renderSlot(t3.$slots, "default")], 8, ["to", "disabled", "defer"])) : Wt.createCommentVNode("", true);
} }), r = Symbol("nuxt-ui.portal-target");
function i(t2) {
  const o2 = Wt.inject(r, void 0), a2 = Wt.computed(() => {
    var _a;
    return "boolean" == typeof t2.value || void 0 === t2.value ? (_a = null == o2 ? void 0 : o2.value) != null ? _a : "body" : t2.value;
  }), l2 = Wt.computed(() => "boolean" == typeof t2.value && !t2.value);
  return Wt.provide(r, Wt.computed(() => a2.value)), Wt.computed(() => ({ to: a2.value, disabled: l2.value }));
}

export { i, s, u };
//# sourceMappingURL=usePortal-B0EwXMSu.mjs.map

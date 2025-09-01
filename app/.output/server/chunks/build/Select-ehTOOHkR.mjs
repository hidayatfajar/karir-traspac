import { v as Wt, u as da, r as Bm, e as sg, m as Am, q as Pm, t as Ky, i as yg, s as pm, c as yb, d as Tb, j as fg, F as wb, P as _m, E as gg, a as Tm } from './server.mjs';
import { k as defu, j as isEqual } from '../_/nitro.mjs';
import { O, c, h, f, b } from './usePortal-DtLtCtVs.mjs';
import { F, C, T, N, O as O$1, P } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { $ as $e, H as He, q as qe, I as Ie$1 } from './PopperArrow-DcWSYcLt.mjs';
import { d } from './VisuallyHidden-CudQpOEQ.mjs';
import { l } from './Collection-BWpNbfJs.mjs';
import { n as n$1 } from './usePrimitiveElement-DSug4YUi.mjs';
import { e } from './useFormControl-BrnPeDt6.mjs';
import { n } from './nullish-aV-w2MPu.mjs';
import { r } from './useTypeahead-B73O3JTr.mjs';
import { f as f$1 } from './utils-iLtTyP0t.mjs';
import { N as N$1, T as T$1, E } from './useBodyScrollLock-Fz4_gHfe.mjs';
import { t } from './useFocusGuards-AjDOEN6x.mjs';
import { e as e$1 } from './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
import { l as l$1 } from './getActiveElement-CxMYnBFR.mjs';

function H(e2, l2 = Number.NEGATIVE_INFINITY, t2 = Number.POSITIVE_INFINITY) {
  return Math.min(t2, Math.max(l2, e2));
}
const U = [" ", "Enter", "ArrowUp", "ArrowDown"], G = [" ", "Enter"], Y = 10;
function X(e2, l2, t2) {
  return void 0 !== e2 && (Array.isArray(e2) ? e2.some((e3) => J(e3, l2, t2)) : J(e2, l2, t2));
}
function J(e2, l2, t2) {
  return void 0 !== e2 && void 0 !== l2 && ("string" == typeof e2 ? e2 === l2 : "function" == typeof t2 ? t2(e2, l2) : "string" == typeof t2 ? (null == e2 ? void 0 : e2[t2]) === (null == l2 ? void 0 : l2[t2]) : isEqual(e2, l2));
}
function Q(e2) {
  return null == e2 || "" === e2 || Array.isArray(e2) && 0 === e2.length;
}
const Z = Wt.defineComponent({ __name: "BubbleSelect", props: { autocomplete: {}, autofocus: { type: Boolean }, disabled: { type: Boolean }, form: {}, multiple: { type: Boolean }, name: {}, required: { type: Boolean }, size: {}, value: {} }, setup(l2) {
  const t2 = l2, a2 = Wt.ref();
  return Wt.watch(() => t2.value, (e2, l3) => {
    const t3 = (void 0).HTMLSelectElement.prototype, i2 = Object.getOwnPropertyDescriptor(t3, "value").set;
    if (e2 !== l3 && i2 && a2.value) {
      const l4 = new Event("change", { bubbles: true });
      i2.call(a2.value, e2), a2.value.dispatchEvent(l4);
    }
  }), (l3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(d), { "as-child": "" }, { default: Wt.withCtx(() => [Wt.createElementVNode("select", Wt.mergeProps({ ref_key: "selectElement", ref: a2 }, t2), [Wt.renderSlot(l3.$slots, "default")], 16)]), _: 3 }));
} }), ee = { key: 0, value: "" }, [le, te] = T("SelectRoot"), ae = Wt.defineComponent({ inheritAttrs: false, __name: "SelectRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, defaultValue: {}, modelValue: { default: void 0 }, by: {}, dir: {}, multiple: { type: Boolean }, autocomplete: {}, disabled: { type: Boolean }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "update:open"], setup(l2, { emit: t2 }) {
  var _a;
  const a2 = l2, i2 = t2, { required: n2, disabled: o2, multiple: r2, dir: s2 } = Wt.toRefs(a2), u2 = C(a2, "modelValue", i2, { defaultValue: (_a = a2.defaultValue) != null ? _a : r2.value ? [] : void 0, passive: void 0 === a2.modelValue, deep: true }), d2 = C(a2, "open", i2, { defaultValue: a2.defaultOpen, passive: void 0 === a2.open }), c2 = Wt.ref(), p2 = Wt.ref(), v2 = Wt.ref({ x: 0, y: 0 }), m2 = Wt.computed(() => {
    var e2;
    return r2.value && Array.isArray(u2.value) ? 0 === (null == (e2 = u2.value) ? void 0 : e2.length) : n(u2.value);
  });
  l({ isProvider: true });
  const g2 = n$1(s2), f2 = e(c2), h2 = Wt.ref(/* @__PURE__ */ new Set()), y2 = Wt.computed(() => Array.from(h2.value).map((e2) => e2.value).join(";"));
  return te({ triggerElement: c2, onTriggerChange: (e2) => {
    c2.value = e2;
  }, valueElement: p2, onValueElementChange: (e2) => {
    p2.value = e2;
  }, contentId: "", modelValue: u2, onValueChange: function(e2) {
    if (r2.value) {
      const l3 = Array.isArray(u2.value) ? [...u2.value] : [], t3 = l3.findIndex((l4) => J(l4, e2, a2.by));
      -1 === t3 ? l3.push(e2) : l3.splice(t3, 1), u2.value = [...l3];
    } else u2.value = e2;
  }, by: a2.by, open: d2, multiple: r2, required: n2, onOpenChange: (e2) => {
    d2.value = e2;
  }, dir: g2, triggerPointerDownPosRef: v2, disabled: o2, isEmptyModelValue: m2, optionsSet: h2, onOptionAdd: (e2) => h2.value.add(e2), onOptionRemove: (e2) => h2.value.delete(e2) }), (l3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref($e), null, { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default", { modelValue: Wt.unref(u2), open: Wt.unref(d2) }), Wt.unref(f2) ? (Wt.openBlock(), Wt.createBlock(Z, { key: y2.value, "aria-hidden": "true", tabindex: "-1", multiple: Wt.unref(r2), required: Wt.unref(n2), name: l3.name, autocomplete: l3.autocomplete, disabled: Wt.unref(o2), value: Wt.unref(u2) }, { default: Wt.withCtx(() => [Wt.unref(n)(Wt.unref(u2)) ? (Wt.openBlock(), Wt.createElementBlock("option", ee)) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createElementBlock(Wt.Fragment, null, Wt.renderList(Array.from(h2.value), (l4) => {
    var _a2;
    return Wt.openBlock(), Wt.createElementBlock("option", Wt.mergeProps({ key: (_a2 = l4.value) != null ? _a2 : "", ref_for: true }, l4), null, 16);
  }), 128))]), _: 1 }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : Wt.createCommentVNode("", true)]), _: 3 }));
} }), [ie, ne] = T("SelectItemAlignedPosition"), oe = Wt.defineComponent({ inheritAttrs: false, __name: "SelectItemAlignedPosition", props: { asChild: { type: Boolean }, as: {} }, emits: ["placed"], setup(t2, { emit: a2 }) {
  const i2 = t2, n2 = a2, { getItems: o2 } = l(), r2 = le(), s2 = ue(), u2 = Wt.ref(false), d2 = Wt.ref(true), c2 = Wt.ref(), { forwardRef: p2, currentElement: v2 } = N(), { viewport: m2, selectedItem: g2, selectedItemText: f2, focusSelectedItem: h2 } = s2;
  function y2() {
    if (r2.triggerElement.value && r2.valueElement.value && c2.value && v2.value && (null == m2 ? void 0 : m2.value) && (null == g2 ? void 0 : g2.value) && (null == f2 ? void 0 : f2.value)) {
      const e2 = r2.triggerElement.value.getBoundingClientRect(), l2 = v2.value.getBoundingClientRect(), t3 = r2.valueElement.value.getBoundingClientRect(), a3 = f2.value.getBoundingClientRect();
      if ("rtl" !== r2.dir.value) {
        const i4 = a3.left - l2.left, n3 = t3.left - i4, o3 = e2.left - n3, r3 = e2.width + o3, s4 = Math.max(r3, l2.width), u3 = (void 0).innerWidth - Y, d4 = H(n3, Y, Math.max(Y, u3 - s4));
        c2.value.style.minWidth = `${r3}px`, c2.value.style.left = `${d4}px`;
      } else {
        const i4 = l2.right - a3.right, n3 = (void 0).innerWidth - t3.right - i4, o3 = (void 0).innerWidth - e2.right - n3, r3 = e2.width + o3, s4 = Math.max(r3, l2.width), u3 = (void 0).innerWidth - Y, d4 = H(n3, Y, Math.max(Y, u3 - s4));
        c2.value.style.minWidth = `${r3}px`, c2.value.style.right = `${d4}px`;
      }
      const i3 = o2().map((e3) => e3.ref), s3 = (void 0).innerHeight - 20, d3 = m2.value.scrollHeight, p3 = (void 0).getComputedStyle(v2.value), h3 = Number.parseInt(p3.borderTopWidth, 10), y3 = Number.parseInt(p3.paddingTop, 10), k3 = Number.parseInt(p3.borderBottomWidth, 10), b2 = h3 + y3 + d3 + Number.parseInt(p3.paddingBottom, 10) + k3, x2 = Math.min(5 * g2.value.offsetHeight, b2), B2 = (void 0).getComputedStyle(m2.value), C2 = Number.parseInt(B2.paddingTop, 10), S2 = Number.parseInt(B2.paddingBottom, 10), L2 = e2.top + e2.height / 2 - Y, w2 = s3 - L2, I2 = g2.value.offsetHeight / 2, z2 = h3 + y3 + (g2.value.offsetTop + I2), _2 = b2 - z2;
      if (z2 <= L2) {
        const e3 = g2.value === i3[i3.length - 1];
        c2.value.style.bottom = "0px";
        const l3 = v2.value.clientHeight - m2.value.offsetTop - m2.value.offsetHeight, t4 = z2 + Math.max(w2, I2 + (e3 ? S2 : 0) + l3 + k3);
        c2.value.style.height = `${t4}px`;
      } else {
        const e3 = g2.value === i3[0];
        c2.value.style.top = "0px";
        const l3 = Math.max(L2, h3 + m2.value.offsetTop + (e3 ? C2 : 0) + I2) + _2;
        c2.value.style.height = `${l3}px`, m2.value.scrollTop = z2 - L2 + m2.value.offsetTop;
      }
      c2.value.style.margin = "10px 0", c2.value.style.minHeight = `${x2}px`, c2.value.style.maxHeight = `${s3}px`, n2("placed"), requestAnimationFrame(() => u2.value = true);
    }
  }
  const k2 = Wt.ref("");
  return P(r2.triggerElement, () => {
    y2();
  }), ne({ contentWrapper: c2, shouldExpandOnScrollRef: u2, onScrollButtonChange: function(e2) {
    e2 && true === d2.value && (y2(), null == h2 || h2(), d2.value = false);
  } }), (t3, a3) => (Wt.openBlock(), Wt.createElementBlock("div", { ref_key: "contentWrapperElement", ref: c2, style: Wt.normalizeStyle({ display: "flex", flexDirection: "column", position: "fixed", zIndex: k2.value }) }, [Wt.createVNode(Wt.unref(_m), Wt.mergeProps({ ref: Wt.unref(p2), style: { boxSizing: "border-box", maxHeight: "100%" } }, { ...t3.$attrs, ...i2 }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16)], 4));
} }), re = Wt.defineComponent({ __name: "SelectPopperPosition", props: { side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: { default: Y }, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, setup(l2) {
  const a2 = Tm(l2);
  return (l3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(Ie$1), Wt.mergeProps(Wt.unref(a2), { style: { boxSizing: "border-box", "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-select-content-available-width": "var(--reka-popper-available-width)", "--reka-select-content-available-height": "var(--reka-popper-available-height)", "--reka-select-trigger-width": "var(--reka-popper-anchor-width)", "--reka-select-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16));
} }), se = { onViewportChange: () => {
}, itemTextRefCallback: () => {
}, itemRefCallback: () => {
} }, [ue, de] = T("SelectContent"), ce = Wt.defineComponent({ __name: "SelectContentImpl", props: { position: { default: "item-aligned" }, bodyLock: { type: Boolean, default: true }, side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(l2, { emit: a2 }) {
  const i2 = l2, n2 = a2, o2 = le();
  t(), N$1(i2.bodyLock);
  const { CollectionSlot: r2, getItems: s2 } = l(), u2 = Wt.ref();
  T$1(u2);
  const { search: d2, handleTypeaheadSearch: c2 } = r(), p2 = Wt.ref(), v2 = Wt.ref(), m2 = Wt.ref(), g2 = Wt.ref(false), f2 = Wt.ref(false), y2 = Wt.ref(false);
  function k2() {
    v2.value && u2.value && f$1([v2.value, u2.value]);
  }
  Wt.watch(g2, () => {
    k2();
  });
  const { onOpenChange: b2, triggerPointerDownPosRef: x2 } = o2;
  function B2(e2) {
    const l3 = e2.ctrlKey || e2.altKey || e2.metaKey;
    if ("Tab" === e2.key && e2.preventDefault(), l3 || 1 !== e2.key.length || c2(e2.key, s2()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e2.key)) {
      let l4 = [...s2().map((e3) => e3.ref)];
      if (["ArrowUp", "End"].includes(e2.key) && (l4 = l4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e2.key)) {
        const t2 = e2.target, a3 = l4.indexOf(t2);
        l4 = l4.slice(a3 + 1);
      }
      setTimeout(() => f$1(l4)), e2.preventDefault();
    }
  }
  Wt.watchEffect((e2) => {
    if (!u2.value) return;
    let l3 = { x: 0, y: 0 };
    const t2 = (e3) => {
      var _a, _b;
      var t3, a4;
      l3 = { x: Math.abs(Math.round(e3.pageX) - ((_a = null == (t3 = x2.value) ? void 0 : t3.x) != null ? _a : 0)), y: Math.abs(Math.round(e3.pageY) - ((_b = null == (a4 = x2.value) ? void 0 : a4.y) != null ? _b : 0)) };
    }, a3 = (e3) => {
      var a4;
      "touch" !== e3.pointerType && (l3.x <= 10 && l3.y <= 10 ? e3.preventDefault() : (null == (a4 = u2.value) ? void 0 : a4.contains(e3.target)) || b2(false), (void 0).removeEventListener("pointermove", t2), x2.value = null);
    };
    null !== x2.value && ((void 0).addEventListener("pointermove", t2), (void 0).addEventListener("pointerup", a3, { capture: true, once: true })), e2(() => {
      (void 0).removeEventListener("pointermove", t2), (void 0).removeEventListener("pointerup", a3, { capture: true });
    });
  });
  const C2 = Wt.computed(() => "popper" === i2.position ? i2 : {}), S2 = Tm(C2.value);
  return de({ content: u2, viewport: p2, onViewportChange: (e2) => {
    p2.value = e2;
  }, itemRefCallback: (e2, l3, t2) => {
    const a3 = !f2.value && !t2, i3 = X(o2.modelValue.value, l3, o2.by);
    if (o2.multiple.value) {
      if (y2.value) return;
      (i3 || a3) && (v2.value = e2, i3 && (y2.value = true));
    } else (i3 || a3) && (v2.value = e2);
    a3 && (f2.value = true);
  }, selectedItem: v2, selectedItemText: m2, onItemLeave: () => {
    var e2;
    null == (e2 = u2.value) || e2.focus();
  }, itemTextRefCallback: (e2, l3, t2) => {
    const a3 = !f2.value && !t2;
    (X(o2.modelValue.value, l3, o2.by) || a3) && (m2.value = e2);
  }, focusSelectedItem: k2, position: i2.position, isPositioned: g2, searchRef: d2 }), (l3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(r2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(E), { "as-child": "", onMountAutoFocus: t2[6] || (t2[6] = Wt.withModifiers(() => {
  }, ["prevent"])), onUnmountAutoFocus: t2[7] || (t2[7] = (l4) => {
    var t3;
    n2("closeAutoFocus", l4), l4.defaultPrevented || (null == (t3 = Wt.unref(o2).triggerElement.value) || t3.focus({ preventScroll: true }), l4.preventDefault());
  }) }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(b), { "as-child": "", "disable-outside-pointer-events": "", onFocusOutside: t2[2] || (t2[2] = Wt.withModifiers(() => {
  }, ["prevent"])), onDismiss: t2[3] || (t2[3] = (l4) => Wt.unref(o2).onOpenChange(false)), onEscapeKeyDown: t2[4] || (t2[4] = (e2) => n2("escapeKeyDown", e2)), onPointerDownOutside: t2[5] || (t2[5] = (e2) => n2("pointerDownOutside", e2)) }, { default: Wt.withCtx(() => [(Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent("popper" === l3.position ? re : oe), Wt.mergeProps({ ...l3.$attrs, ...Wt.unref(S2) }, { id: Wt.unref(o2).contentId, ref: (l4) => {
    u2.value = Wt.unref(O$1)(l4);
  }, role: "listbox", "data-state": Wt.unref(o2).open.value ? "open" : "closed", dir: Wt.unref(o2).dir.value, style: { display: "flex", flexDirection: "column", outline: "none" }, onContextmenu: t2[0] || (t2[0] = Wt.withModifiers(() => {
  }, ["prevent"])), onPlaced: t2[1] || (t2[1] = (e2) => g2.value = true), onKeydown: B2 }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "dir", "onKeydown"]))]), _: 3 })]), _: 3 })]), _: 3 }));
} }), pe = Wt.defineComponent({ __name: "SelectArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(l2) {
  const t2 = l2, a2 = le(), i2 = ue(se);
  return (l3, n2) => Wt.unref(a2).open.value && "popper" === Wt.unref(i2).position ? (Wt.openBlock(), Wt.createBlock(Wt.unref(qe), Wt.normalizeProps(Wt.mergeProps({ key: 0 }, t2)), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), ve = Wt.defineComponent({ inheritAttrs: false, __name: "SelectProvider", props: { context: {} }, setup: (l2) => (te(l2.context), de(se), (l3, t2) => Wt.renderSlot(l3.$slots, "default")) }), me = { key: 1 }, ge = Wt.defineComponent({ inheritAttrs: false, __name: "SelectContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(l2, { emit: t2 }) {
  const a2 = l2, i2 = F(a2, t2), n2 = le(), o2 = Wt.ref(), r2 = Wt.ref(), s2 = Wt.computed(() => a2.forceMount || n2.open.value);
  return (l3, t3) => {
    var a3;
    return s2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(f), { key: 0, ref_key: "presenceRef", ref: r2, present: true }, { default: Wt.withCtx(() => [Wt.createVNode(ce, Wt.normalizeProps(Wt.guardReactiveProps({ ...Wt.unref(i2), ...l3.$attrs })), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 512)) : !(null == (a3 = r2.value) ? void 0 : a3.present) && o2.value ? (Wt.openBlock(), Wt.createElementBlock("div", me, [(Wt.openBlock(), Wt.createBlock(Wt.Teleport, { to: o2.value }, [Wt.createVNode(ve, { context: Wt.unref(n2) }, { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 8, ["context"])], 8, ["to"]))])) : Wt.createCommentVNode("", true);
  };
} }), [fe, he] = T("SelectGroup"), ye = Wt.defineComponent({ __name: "SelectGroup", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2, i2 = c(void 0, "reka-select-group");
  return he({ id: i2 }), (t3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ role: "group" }, a2, { "aria-labelledby": Wt.unref(i2) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["aria-labelledby"]));
} }), [ke, be] = T("SelectItem"), xe = Wt.defineComponent({ __name: "SelectItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(t2, { emit: a2 }) {
  var _a;
  const i2 = t2, n2 = a2, { disabled: o2 } = Wt.toRefs(i2), r2 = le(), s2 = ue(), { forwardRef: u2 } = N(), { CollectionItem: d2 } = l(), c2 = Wt.computed(() => {
    var e2;
    return X(null == (e2 = r2.modelValue) ? void 0 : e2.value, i2.value, r2.by);
  }), p2 = Wt.ref(false), v2 = Wt.ref((_a = i2.textValue) != null ? _a : ""), m2 = c(void 0, "reka-select-item-text");
  async function g2(e2) {
    if (e2.defaultPrevented) return;
    const l2 = { originalEvent: e2, value: i2.value };
    e$1("select.select", f2, l2);
  }
  async function f2(l2) {
    await Wt.nextTick(), n2("select", l2), l2.defaultPrevented || o2.value || (r2.onValueChange(i2.value), r2.multiple.value || r2.onOpenChange(false));
  }
  async function h2(l2) {
    var t3, a3;
    await Wt.nextTick(), l2.defaultPrevented || (o2.value ? null == (t3 = s2.onItemLeave) || t3.call(s2) : null == (a3 = l2.currentTarget) || a3.focus({ preventScroll: true }));
  }
  async function y2(l2) {
    var t3;
    await Wt.nextTick(), l2.defaultPrevented || l2.currentTarget === l$1() && (null == (t3 = s2.onItemLeave) || t3.call(s2));
  }
  async function b2(l2) {
    var t3;
    if (await Wt.nextTick(), l2.defaultPrevented) return;
    "" !== (null == (t3 = s2.searchRef) ? void 0 : t3.value) && " " === l2.key || (G.includes(l2.key) && g2(l2), " " === l2.key && l2.preventDefault());
  }
  if ("" === i2.value) throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return be({ value: i2.value, disabled: o2, textId: m2, isSelected: c2, onItemTextChange: (e2) => {
    var _a2;
    v2.value = ((_a2 = v2.value || (null == e2 ? void 0 : e2.textContent)) != null ? _a2 : "").trim();
  } }), (t3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(d2), { value: { textValue: v2.value } }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { ref: Wt.unref(u2), role: "option", "aria-labelledby": Wt.unref(m2), "data-highlighted": p2.value ? "" : void 0, "aria-selected": c2.value, "data-state": c2.value ? "checked" : "unchecked", "aria-disabled": Wt.unref(o2) || void 0, "data-disabled": Wt.unref(o2) ? "" : void 0, tabindex: Wt.unref(o2) ? void 0 : -1, as: t3.as, "as-child": t3.asChild, onFocus: a3[0] || (a3[0] = (e2) => p2.value = true), onBlur: a3[1] || (a3[1] = (e2) => p2.value = false), onPointerup: g2, onPointerdown: a3[2] || (a3[2] = (e2) => {
    e2.currentTarget.focus({ preventScroll: true });
  }), onTouchend: a3[3] || (a3[3] = Wt.withModifiers(() => {
  }, ["prevent", "stop"])), onPointermove: h2, onPointerleave: y2, onKeydown: b2 }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]), _: 3 }, 8, ["value"]));
} }), Be = Wt.defineComponent({ __name: "SelectItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(t2) {
  const a2 = t2, i2 = ke();
  return (t3, n2) => Wt.unref(i2).isSelected.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ key: 0, "aria-hidden": "true" }, a2), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), Ce = Wt.defineComponent({ inheritAttrs: false, __name: "SelectItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(t2) {
  const a2 = t2;
  le(), ue();
  const i2 = ke(), { forwardRef: n2, currentElement: o2 } = N();
  return Wt.computed(() => {
    var _a, _b;
    var e2, l2;
    return { value: i2.value, disabled: i2.disabled.value, textContent: (_b = (_a = null == (e2 = o2.value) ? void 0 : e2.textContent) != null ? _a : null == (l2 = i2.value) ? void 0 : l2.toString()) != null ? _b : "" };
  }), (t3, o3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ id: Wt.unref(i2).textId, ref: Wt.unref(n2) }, { ...a2, ...t3.$attrs }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Se = Wt.defineComponent({ __name: "SelectLabel", props: { for: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const a2 = t2, i2 = fe({ id: "" });
  return (t3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(a2, { id: Wt.unref(i2).id }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Le = Wt.defineComponent({ __name: "SelectPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(l2) {
  const t2 = l2;
  return (l3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(h), Wt.normalizeProps(Wt.guardReactiveProps(t2)), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16));
} }), we = Wt.defineComponent({ __name: "SelectSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return (t3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ "aria-hidden": "true" }, a2), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Ie = Wt.defineComponent({ __name: "SelectTrigger", props: { disabled: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const a2 = t2, i2 = le(), { forwardRef: n2 } = N(), o2 = Wt.computed(() => {
    var e2;
    return (null == (e2 = i2.disabled) ? void 0 : e2.value) || a2.disabled;
  });
  i2.contentId || (i2.contentId = c(void 0, "reka-select-content"));
  const { getItems: r2 } = l(), { search: s2, handleTypeaheadSearch: u2, resetTypeahead: d2 } = r();
  function c2() {
    o2.value || (i2.onOpenChange(true), d2());
  }
  function p2(e2) {
    c2(), i2.triggerPointerDownPosRef.value = { x: Math.round(e2.pageX), y: Math.round(e2.pageY) };
  }
  return (t3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(He), { "as-child": "", reference: t3.reference }, { default: Wt.withCtx(() => {
    var d3, v2, m2, g2;
    return [Wt.createVNode(Wt.unref(_m), { ref: Wt.unref(n2), role: "combobox", type: "button" === t3.as ? "button" : void 0, "aria-controls": Wt.unref(i2).contentId, "aria-expanded": Wt.unref(i2).open.value || false, "aria-required": null == (d3 = Wt.unref(i2).required) ? void 0 : d3.value, "aria-autocomplete": "none", disabled: o2.value, dir: null == (v2 = Wt.unref(i2)) ? void 0 : v2.dir.value, "data-state": (null == (m2 = Wt.unref(i2)) ? void 0 : m2.open.value) ? "open" : "closed", "data-disabled": o2.value ? "" : void 0, "data-placeholder": Wt.unref(Q)(null == (g2 = Wt.unref(i2).modelValue) ? void 0 : g2.value) ? "" : void 0, "as-child": t3.asChild, as: t3.as, onClick: a3[0] || (a3[0] = (e2) => {
      var l2;
      null == (l2 = null == e2 ? void 0 : e2.currentTarget) || l2.focus();
    }), onPointerdown: a3[1] || (a3[1] = (e2) => {
      if ("touch" === e2.pointerType) return e2.preventDefault();
      const l2 = e2.target;
      l2.hasPointerCapture(e2.pointerId) && l2.releasePointerCapture(e2.pointerId), 0 === e2.button && false === e2.ctrlKey && (p2(e2), e2.preventDefault());
    }), onPointerup: a3[2] || (a3[2] = Wt.withModifiers((e2) => {
      "touch" === e2.pointerType && p2(e2);
    }, ["prevent"])), onKeydown: a3[3] || (a3[3] = (l2) => {
      const t4 = "" !== Wt.unref(s2);
      !(l2.ctrlKey || l2.altKey || l2.metaKey) && 1 === l2.key.length && t4 && " " === l2.key || (Wt.unref(u2)(l2.key, Wt.unref(r2)()), Wt.unref(U).includes(l2.key) && (c2(), l2.preventDefault()));
    }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])];
  }), _: 3 }, 8, ["reference"]));
} }), ze = { slots: { base: ["relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"], leading: "absolute inset-y-0 start-0 flex items-center", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "absolute inset-y-0 end-0 flex items-center", trailingIcon: "shrink-0 text-dimmed", value: "truncate pointer-events-none", placeholder: "truncate text-dimmed", arrow: "fill-default", content: "max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col", viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: ["group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"], itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemLabel: "truncate" }, variants: { buttonGroup: { horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]", vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]" }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2", trailing: "pe-2", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1 text-xs" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1.5 text-xs" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-1.5 text-sm" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-2 text-sm" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailingIcon: "size-6", empty: "p-2 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" } }, compoundVariants: [{ color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, _e = Object.assign({ inheritAttrs: false }, { __name: "Select", __ssrInlineRender: true, props: { id: { type: String, required: false }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, trailingIcon: { type: String, required: false }, selectedIcon: { type: String, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, valueKey: { type: null, required: false, default: "value" }, labelKey: { type: null, required: false, default: "label" }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, autocomplete: { type: String, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, emits: ["update:open", "change", "blur", "focus", "update:modelValue"], setup(l2, { expose: t2, emit: h2 }) {
  const y2 = l2, k2 = h2, b2 = Wt.useSlots(), B2 = da(), C2 = F(Bm(y2, "open", "defaultOpen", "disabled", "autocomplete", "required", "multiple"), k2), S2 = O(Wt.toRef(() => y2.portal)), L2 = Wt.toRef(() => defu(y2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" })), w2 = Wt.toRef(() => y2.arrow), { emitFormChange: z2, emitFormInput: _2, emitFormBlur: V2, emitFormFocus: A2, size: T2, color: $2, id: P2, name: N2, highlight: R2, disabled: D2, ariaAttrs: E2 } = sg(y2), { orientation: q2, size: F2 } = Am(y2), { isLeading: K2, isTrailing: O2, leadingIconName: j2, trailingIconName: M2 } = Pm(Wt.toRef(() => defu(y2, { trailingIcon: B2.ui.icons.chevronDown }))), W2 = Wt.computed(() => F2.value || T2.value), H2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(ze), ...(null == (e2 = B2.ui) ? void 0 : e2.select) || {} })({ color: $2.value, variant: y2.variant, size: null == W2 ? void 0 : W2.value, loading: y2.loading, highlight: R2.value, leading: K2.value || !!y2.avatar || !!b2.leading, trailing: O2.value || !!b2.trailing, buttonGroup: q2.value });
  }), U2 = Wt.computed(() => {
    var e2;
    return (null == (e2 = y2.items) ? void 0 : e2.length) ? yg(y2.items) ? y2.items : [y2.items] : [];
  }), G2 = Wt.computed(() => U2.value.flatMap((e2) => e2));
  function Y2(e2) {
    if (y2.multiple && Array.isArray(e2)) {
      const l4 = e2.map((e3) => Y2(e3)).filter(Boolean);
      return (null == l4 ? void 0 : l4.length) ? l4.join(", ") : void 0;
    }
    const l3 = G2.value.find((l4) => gg("object" == typeof l4 ? fg(l4, y2.valueKey) : l4, e2));
    return l3 && ("object" == typeof l3 ? fg(l3, y2.labelKey) : l3);
  }
  const X2 = Wt.ref(null);
  function J2(e2) {
    const l3 = new Event("change", { target: { value: e2 } });
    k2("change", l3), z2(), _2();
  }
  function Q2(e2) {
    if (e2) {
      const e3 = new FocusEvent("focus");
      k2("focus", e3), A2();
    } else {
      const e3 = new FocusEvent("blur");
      k2("blur", e3), V2();
    }
  }
  function Z2(e2) {
    return "object" == typeof e2 && null !== e2;
  }
  return t2({ triggerRef: X2 }), (t3, a2, i2, n2) => {
    a2(pm.ssrRenderComponent(Wt.unref(ae), Wt.mergeProps({ name: Wt.unref(N2) }, Wt.unref(C2), { autocomplete: l2.autocomplete, disabled: Wt.unref(D2), "default-value": l2.defaultValue, "model-value": l2.modelValue, "onUpdate:modelValue": J2, "onUpdate:open": Q2 }, n2), { default: Wt.withCtx(({ modelValue: a3, open: i3 }, n3, o2, r2) => {
      var s2, u2;
      if (!n3) return [Wt.createVNode(Wt.unref(Ie), Wt.mergeProps({ id: Wt.unref(P2), ref_key: "triggerRef", ref: X2, class: H2.value.base({ class: [null == (u2 = y2.ui) ? void 0 : u2.base, y2.class] }) }, { ...t3.$attrs, ...Wt.unref(E2) }), { default: Wt.withCtx(() => {
        var n4, o3;
        return [Wt.unref(K2) || l2.avatar || b2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: H2.value.leading({ class: null == (n4 = y2.ui) ? void 0 : n4.leading }) }, [Wt.renderSlot(t3.$slots, "leading", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var t4, a4, i4;
          return [Wt.unref(K2) && Wt.unref(j2) ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: Wt.unref(j2), class: H2.value.leadingIcon({ class: null == (t4 = y2.ui) ? void 0 : t4.leadingIcon }) }, null, 8, ["name", "class"])) : l2.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (a4 = y2.ui) ? void 0 : a4.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, l2.avatar, { class: H2.value.itemLeadingAvatar({ class: null == (i4 = y2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t3.$slots, "default", { modelValue: a3, open: i3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([Y2(a3)], (t4) => {
          var _a;
          var a4, i4;
          return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: t4 }, [null != t4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: H2.value.value({ class: null == (a4 = y2.ui) ? void 0 : a4.value }) }, Wt.toDisplayString(t4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: H2.value.placeholder({ class: null == (i4 = y2.ui) ? void 0 : i4.placeholder }) }, Wt.toDisplayString((_a = l2.placeholder) != null ? _a : "\xA0"), 3))], 64);
        }), 128))]), Wt.unref(O2) || b2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: H2.value.trailing({ class: null == (o3 = y2.ui) ? void 0 : o3.trailing }) }, [Wt.renderSlot(t3.$slots, "trailing", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var l3;
          return [Wt.unref(M2) ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: Wt.unref(M2), class: H2.value.trailingIcon({ class: null == (l3 = y2.ui) ? void 0 : l3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true)];
      }), _: 2 }, 1040, ["id", "class"]), Wt.createVNode(Wt.unref(Le), Wt.unref(S2), { default: Wt.withCtx(() => {
        var a4;
        return [Wt.createVNode(Wt.unref(ge), Wt.mergeProps({ class: H2.value.content({ class: null == (a4 = y2.ui) ? void 0 : a4.content }) }, L2.value), { default: Wt.withCtx(() => {
          var a5, i4;
          return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode("div", { role: "presentation", class: H2.value.viewport({ class: null == (a5 = y2.ui) ? void 0 : a5.viewport }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(U2.value, (a6, i5) => {
            var n4;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(ye), { key: `group-${i5}`, class: H2.value.group({ class: null == (n4 = y2.ui) ? void 0 : n4.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a6, (a7, n5) => {
              var o3, r3, s3, u3, d2, g2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i5}-${n5}` }, [Z2(a7) && "label" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: H2.value.label({ class: [null == (o3 = y2.ui) ? void 0 : o3.label, null == (r3 = a7.ui) ? void 0 : r3.label, a7.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(a7, y2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Z2(a7) && "separator" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: H2.value.separator({ class: [null == (s3 = y2.ui) ? void 0 : s3.separator, null == (u3 = a7.ui) ? void 0 : u3.separator, a7.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: H2.value.item({ class: [null == (d2 = y2.ui) ? void 0 : d2.item, Z2(a7) && (null == (g2 = a7.ui) ? void 0 : g2.item), Z2(a7) && a7.class] }), disabled: Z2(a7) && a7.disabled, value: Z2(a7) ? Wt.unref(fg)(a7, y2.valueKey) : a7, onSelect: (e2) => {
                var l3;
                return Z2(a7) && (null == (l3 = a7.onSelect) ? void 0 : l3.call(a7, e2));
              } }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a7, index: n5 }, () => {
                var i6, o4, r4, s4;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a7, index: n5 }, () => {
                  var l3, t4, i7, n6, o5, r5, s5, u4, d3, v2;
                  return [Z2(a7) && a7.icon ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Z2(a7) && a7.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (i7 = a7.ui) ? void 0 : i7.itemLeadingAvatarSize) || (null == (n6 = y2.ui) ? void 0 : n6.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (o5 = y2.ui) ? void 0 : o5.itemLeadingAvatar, null == (r5 = a7.ui) ? void 0 : r5.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Z2(a7) && a7.chip ? (Wt.openBlock(), Wt.createBlock(wb, Wt.mergeProps({ key: 2, size: (null == (s5 = a7.ui) ? void 0 : s5.itemLeadingChipSize) || (null == (u4 = y2.ui) ? void 0 : u4.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (d3 = y2.ui) ? void 0 : d3.itemLeadingChip, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (i6 = y2.ui) ? void 0 : i6.itemLabel, Z2(a7) && (null == (o4 = a7.ui) ? void 0 : o4.itemLabel)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: n5 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode("span", { class: H2.value.itemTrailing({ class: [null == (r4 = y2.ui) ? void 0 : r4.itemTrailing, Z2(a7) && (null == (s4 = a7.ui) ? void 0 : s4.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a7, index: n5 }), Wt.createVNode(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, i7;
                  return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (t4 = y2.ui) ? void 0 : t4.itemTrailingIcon, Z2(a7) && (null == (i7 = a7.ui) ? void 0 : i7.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128))], 2), Wt.renderSlot(t3.$slots, "content-bottom"), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(pe), Wt.mergeProps({ key: 0 }, w2.value, { class: H2.value.arrow({ class: null == (i4 = y2.ui) ? void 0 : i4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      n3(pm.ssrRenderComponent(Wt.unref(Ie), Wt.mergeProps({ id: Wt.unref(P2), ref_key: "triggerRef", ref: X2, class: H2.value.base({ class: [null == (s2 = y2.ui) ? void 0 : s2.base, y2.class] }) }, { ...t3.$attrs, ...Wt.unref(E2) }), { default: Wt.withCtx((n4, o3, r3, s3) => {
        var u3, v2, m2, g2;
        if (!o3) return [Wt.unref(K2) || l2.avatar || b2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: H2.value.leading({ class: null == (m2 = y2.ui) ? void 0 : m2.leading }) }, [Wt.renderSlot(t3.$slots, "leading", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var t4, a4, i4;
          return [Wt.unref(K2) && Wt.unref(j2) ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: Wt.unref(j2), class: H2.value.leadingIcon({ class: null == (t4 = y2.ui) ? void 0 : t4.leadingIcon }) }, null, 8, ["name", "class"])) : l2.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (a4 = y2.ui) ? void 0 : a4.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, l2.avatar, { class: H2.value.itemLeadingAvatar({ class: null == (i4 = y2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t3.$slots, "default", { modelValue: a3, open: i3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([Y2(a3)], (t4) => {
          var _a;
          var a4, i4;
          return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: t4 }, [null != t4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: H2.value.value({ class: null == (a4 = y2.ui) ? void 0 : a4.value }) }, Wt.toDisplayString(t4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: H2.value.placeholder({ class: null == (i4 = y2.ui) ? void 0 : i4.placeholder }) }, Wt.toDisplayString((_a = l2.placeholder) != null ? _a : "\xA0"), 3))], 64);
        }), 128))]), Wt.unref(O2) || b2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: H2.value.trailing({ class: null == (g2 = y2.ui) ? void 0 : g2.trailing }) }, [Wt.renderSlot(t3.$slots, "trailing", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var l3;
          return [Wt.unref(M2) ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: Wt.unref(M2), class: H2.value.trailingIcon({ class: null == (l3 = y2.ui) ? void 0 : l3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true)];
        Wt.unref(K2) || l2.avatar || b2.leading ? (o3(`<span class="${pm.ssrRenderClass(H2.value.leading({ class: null == (u3 = y2.ui) ? void 0 : u3.leading }))}"${s3}>`), pm.ssrRenderSlot(t3.$slots, "leading", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var t4, a4, i4;
          Wt.unref(K2) && Wt.unref(j2) ? o3(pm.ssrRenderComponent(yb, { name: Wt.unref(j2), class: H2.value.leadingIcon({ class: null == (t4 = y2.ui) ? void 0 : t4.leadingIcon }) }, null, r3, s3)) : l2.avatar ? o3(pm.ssrRenderComponent(Tb, Wt.mergeProps({ size: (null == (a4 = y2.ui) ? void 0 : a4.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, l2.avatar, { class: H2.value.itemLeadingAvatar({ class: null == (i4 = y2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, r3, s3)) : o3("<!---->");
        }, o3, r3, s3), o3("</span>")) : o3("<!---->"), pm.ssrRenderSlot(t3.$slots, "default", { modelValue: a3, open: i3 }, () => {
          o3("<!--[-->"), pm.ssrRenderList([Y2(a3)], (e2) => {
            var _a;
            var t4, a4;
            o3("<!--[-->"), o3(null != e2 ? `<span class="${pm.ssrRenderClass(H2.value.value({ class: null == (t4 = y2.ui) ? void 0 : t4.value }))}"${s3}>${pm.ssrInterpolate(e2)}</span>` : `<span class="${pm.ssrRenderClass(H2.value.placeholder({ class: null == (a4 = y2.ui) ? void 0 : a4.placeholder }))}"${s3}>${pm.ssrInterpolate((_a = l2.placeholder) != null ? _a : "\xA0")}</span>`), o3("<!--]-->");
          }), o3("<!--]-->");
        }, o3, r3, s3), Wt.unref(O2) || b2.trailing ? (o3(`<span class="${pm.ssrRenderClass(H2.value.trailing({ class: null == (v2 = y2.ui) ? void 0 : v2.trailing }))}"${s3}>`), pm.ssrRenderSlot(t3.$slots, "trailing", { modelValue: a3, open: i3, ui: H2.value }, () => {
          var l3;
          Wt.unref(M2) ? o3(pm.ssrRenderComponent(yb, { name: Wt.unref(M2), class: H2.value.trailingIcon({ class: null == (l3 = y2.ui) ? void 0 : l3.trailingIcon }) }, null, r3, s3)) : o3("<!---->");
        }, o3, r3, s3), o3("</span>")) : o3("<!---->");
      }), _: 2 }, o2, r2)), n3(pm.ssrRenderComponent(Wt.unref(Le), Wt.unref(S2), { default: Wt.withCtx((a4, i4, n4, o3) => {
        var r3, s3;
        if (!i4) return [Wt.createVNode(Wt.unref(ge), Wt.mergeProps({ class: H2.value.content({ class: null == (s3 = y2.ui) ? void 0 : s3.content }) }, L2.value), { default: Wt.withCtx(() => {
          var a5, i5;
          return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode("div", { role: "presentation", class: H2.value.viewport({ class: null == (a5 = y2.ui) ? void 0 : a5.viewport }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(U2.value, (a6, i6) => {
            var n5;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(ye), { key: `group-${i6}`, class: H2.value.group({ class: null == (n5 = y2.ui) ? void 0 : n5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a6, (a7, n6) => {
              var o4, r4, s4, u3, d2, g2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i6}-${n6}` }, [Z2(a7) && "label" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: H2.value.label({ class: [null == (o4 = y2.ui) ? void 0 : o4.label, null == (r4 = a7.ui) ? void 0 : r4.label, a7.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(a7, y2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Z2(a7) && "separator" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: H2.value.separator({ class: [null == (s4 = y2.ui) ? void 0 : s4.separator, null == (u3 = a7.ui) ? void 0 : u3.separator, a7.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: H2.value.item({ class: [null == (d2 = y2.ui) ? void 0 : d2.item, Z2(a7) && (null == (g2 = a7.ui) ? void 0 : g2.item), Z2(a7) && a7.class] }), disabled: Z2(a7) && a7.disabled, value: Z2(a7) ? Wt.unref(fg)(a7, y2.valueKey) : a7, onSelect: (e2) => {
                var l3;
                return Z2(a7) && (null == (l3 = a7.onSelect) ? void 0 : l3.call(a7, e2));
              } }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a7, index: n6 }, () => {
                var i7, o5, r5, s5;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a7, index: n6 }, () => {
                  var l3, t4, i8, n7, o6, r6, s6, u4, d3, v2;
                  return [Z2(a7) && a7.icon ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Z2(a7) && a7.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (i8 = a7.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n7 = y2.ui) ? void 0 : n7.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (o6 = y2.ui) ? void 0 : o6.itemLeadingAvatar, null == (r6 = a7.ui) ? void 0 : r6.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Z2(a7) && a7.chip ? (Wt.openBlock(), Wt.createBlock(wb, Wt.mergeProps({ key: 2, size: (null == (s6 = a7.ui) ? void 0 : s6.itemLeadingChipSize) || (null == (u4 = y2.ui) ? void 0 : u4.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (d3 = y2.ui) ? void 0 : d3.itemLeadingChip, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (i7 = y2.ui) ? void 0 : i7.itemLabel, Z2(a7) && (null == (o5 = a7.ui) ? void 0 : o5.itemLabel)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: n6 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode("span", { class: H2.value.itemTrailing({ class: [null == (r5 = y2.ui) ? void 0 : r5.itemTrailing, Z2(a7) && (null == (s5 = a7.ui) ? void 0 : s5.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a7, index: n6 }), Wt.createVNode(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, i8;
                  return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (t4 = y2.ui) ? void 0 : t4.itemTrailingIcon, Z2(a7) && (null == (i8 = a7.ui) ? void 0 : i8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128))], 2), Wt.renderSlot(t3.$slots, "content-bottom"), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(pe), Wt.mergeProps({ key: 0 }, w2.value, { class: H2.value.arrow({ class: null == (i5 = y2.ui) ? void 0 : i5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        i4(pm.ssrRenderComponent(Wt.unref(ge), Wt.mergeProps({ class: H2.value.content({ class: null == (r3 = y2.ui) ? void 0 : r3.content }) }, L2.value), { default: Wt.withCtx((a5, i5, n5, o4) => {
          var r4, s4, u3, g2;
          if (!i5) return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode("div", { role: "presentation", class: H2.value.viewport({ class: null == (u3 = y2.ui) ? void 0 : u3.viewport }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(U2.value, (a6, i6) => {
            var n6;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(ye), { key: `group-${i6}`, class: H2.value.group({ class: null == (n6 = y2.ui) ? void 0 : n6.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a6, (a7, n7) => {
              var o5, r5, s5, u4, d2, g3;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i6}-${n7}` }, [Z2(a7) && "label" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: H2.value.label({ class: [null == (o5 = y2.ui) ? void 0 : o5.label, null == (r5 = a7.ui) ? void 0 : r5.label, a7.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(a7, y2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Z2(a7) && "separator" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: H2.value.separator({ class: [null == (s5 = y2.ui) ? void 0 : s5.separator, null == (u4 = a7.ui) ? void 0 : u4.separator, a7.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: H2.value.item({ class: [null == (d2 = y2.ui) ? void 0 : d2.item, Z2(a7) && (null == (g3 = a7.ui) ? void 0 : g3.item), Z2(a7) && a7.class] }), disabled: Z2(a7) && a7.disabled, value: Z2(a7) ? Wt.unref(fg)(a7, y2.valueKey) : a7, onSelect: (e2) => {
                var l3;
                return Z2(a7) && (null == (l3 = a7.onSelect) ? void 0 : l3.call(a7, e2));
              } }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a7, index: n7 }, () => {
                var i7, o6, r6, s6;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a7, index: n7 }, () => {
                  var l3, t4, i8, n8, o7, r7, s7, u5, d3, v2;
                  return [Z2(a7) && a7.icon ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Z2(a7) && a7.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (i8 = a7.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n8 = y2.ui) ? void 0 : n8.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (o7 = y2.ui) ? void 0 : o7.itemLeadingAvatar, null == (r7 = a7.ui) ? void 0 : r7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Z2(a7) && a7.chip ? (Wt.openBlock(), Wt.createBlock(wb, Wt.mergeProps({ key: 2, size: (null == (s7 = a7.ui) ? void 0 : s7.itemLeadingChipSize) || (null == (u5 = y2.ui) ? void 0 : u5.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (d3 = y2.ui) ? void 0 : d3.itemLeadingChip, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (i7 = y2.ui) ? void 0 : i7.itemLabel, Z2(a7) && (null == (o6 = a7.ui) ? void 0 : o6.itemLabel)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode("span", { class: H2.value.itemTrailing({ class: [null == (r6 = y2.ui) ? void 0 : r6.itemTrailing, Z2(a7) && (null == (s6 = a7.ui) ? void 0 : s6.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a7, index: n7 }), Wt.createVNode(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, i8;
                  return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (t4 = y2.ui) ? void 0 : t4.itemTrailingIcon, Z2(a7) && (null == (i8 = a7.ui) ? void 0 : i8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128))], 2), Wt.renderSlot(t3.$slots, "content-bottom"), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(pe), Wt.mergeProps({ key: 0 }, w2.value, { class: H2.value.arrow({ class: null == (g2 = y2.ui) ? void 0 : g2.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          pm.ssrRenderSlot(t3.$slots, "content-top", {}, null, i5, n5, o4), i5(`<div role="presentation" class="${pm.ssrRenderClass(H2.value.viewport({ class: null == (r4 = y2.ui) ? void 0 : r4.viewport }))}"${o4}><!--[-->`), pm.ssrRenderList(U2.value, (a6, r5) => {
            var s5;
            i5(pm.ssrRenderComponent(Wt.unref(ye), { key: `group-${r5}`, class: H2.value.group({ class: null == (s5 = y2.ui) ? void 0 : s5.group }) }, { default: Wt.withCtx((i6, n6, o5, s6) => {
              if (!n6) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a6, (a7, i7) => {
                var n7, o6, s7, u4, d2, g3;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${r5}-${i7}` }, [Z2(a7) && "label" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: H2.value.label({ class: [null == (n7 = y2.ui) ? void 0 : n7.label, null == (o6 = a7.ui) ? void 0 : o6.label, a7.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(a7, y2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Z2(a7) && "separator" === a7.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: H2.value.separator({ class: [null == (s7 = y2.ui) ? void 0 : s7.separator, null == (u4 = a7.ui) ? void 0 : u4.separator, a7.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: H2.value.item({ class: [null == (d2 = y2.ui) ? void 0 : d2.item, Z2(a7) && (null == (g3 = a7.ui) ? void 0 : g3.item), Z2(a7) && a7.class] }), disabled: Z2(a7) && a7.disabled, value: Z2(a7) ? Wt.unref(fg)(a7, y2.valueKey) : a7, onSelect: (e2) => {
                  var l3;
                  return Z2(a7) && (null == (l3 = a7.onSelect) ? void 0 : l3.call(a7, e2));
                } }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a7, index: i7 }, () => {
                  var n8, o7, r6, s8;
                  return [Wt.renderSlot(t3.$slots, "item-leading", { item: a7, index: i7 }, () => {
                    var l3, t4, i8, n9, o8, r7, s9, u5, d3, v2;
                    return [Z2(a7) && a7.icon ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Z2(a7) && a7.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (i8 = a7.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n9 = y2.ui) ? void 0 : n9.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (o8 = y2.ui) ? void 0 : o8.itemLeadingAvatar, null == (r7 = a7.ui) ? void 0 : r7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Z2(a7) && a7.chip ? (Wt.openBlock(), Wt.createBlock(wb, Wt.mergeProps({ key: 2, size: (null == (s9 = a7.ui) ? void 0 : s9.itemLeadingChipSize) || (null == (u5 = y2.ui) ? void 0 : u5.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (d3 = y2.ui) ? void 0 : d3.itemLeadingChip, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (n8 = y2.ui) ? void 0 : n8.itemLabel, Z2(a7) && (null == (o7 = a7.ui) ? void 0 : o7.itemLabel)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: i7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode("span", { class: H2.value.itemTrailing({ class: [null == (r6 = y2.ui) ? void 0 : r6.itemTrailing, Z2(a7) && (null == (s8 = a7.ui) ? void 0 : s8.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a7, index: i7 }), Wt.createVNode(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var t4, i8;
                    return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (t4 = y2.ui) ? void 0 : t4.itemTrailingIcon, Z2(a7) && (null == (i8 = a7.ui) ? void 0 : i8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))];
              n6("<!--[-->"), pm.ssrRenderList(a6, (a7, i7) => {
                var r6, u4, g3, f2, h3, k3;
                n6("<!--[-->"), Z2(a7) && "label" === a7.type ? n6(pm.ssrRenderComponent(Wt.unref(Se), { class: H2.value.label({ class: [null == (r6 = y2.ui) ? void 0 : r6.label, null == (u4 = a7.ui) ? void 0 : u4.label, a7.class] }) }, { default: Wt.withCtx((l3, t4, i8, n7) => {
                  if (!t4) return [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(a7, y2.labelKey)), 1)];
                  t4(`${pm.ssrInterpolate(Wt.unref(fg)(a7, y2.labelKey))}`);
                }), _: 2 }, o5, s6)) : Z2(a7) && "separator" === a7.type ? n6(pm.ssrRenderComponent(Wt.unref(we), { class: H2.value.separator({ class: [null == (g3 = y2.ui) ? void 0 : g3.separator, null == (f2 = a7.ui) ? void 0 : f2.separator, a7.class] }) }, null, o5, s6)) : n6(pm.ssrRenderComponent(Wt.unref(xe), { class: H2.value.item({ class: [null == (h3 = y2.ui) ? void 0 : h3.item, Z2(a7) && (null == (k3 = a7.ui) ? void 0 : k3.item), Z2(a7) && a7.class] }), disabled: Z2(a7) && a7.disabled, value: Z2(a7) ? Wt.unref(fg)(a7, y2.valueKey) : a7, onSelect: (e2) => {
                  var l3;
                  return Z2(a7) && (null == (l3 = a7.onSelect) ? void 0 : l3.call(a7, e2));
                } }, { default: Wt.withCtx((n7, o6, r7, s7) => {
                  if (!o6) return [Wt.renderSlot(t3.$slots, "item", { item: a7, index: i7 }, () => {
                    var n8, o7, r8, s8;
                    return [Wt.renderSlot(t3.$slots, "item-leading", { item: a7, index: i7 }, () => {
                      var l3, t4, i8, n9, o8, r9, s9, u5, d2, v2;
                      return [Z2(a7) && a7.icon ? (Wt.openBlock(), Wt.createBlock(yb, { key: 0, name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Z2(a7) && a7.avatar ? (Wt.openBlock(), Wt.createBlock(Tb, Wt.mergeProps({ key: 1, size: (null == (i8 = a7.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n9 = y2.ui) ? void 0 : n9.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (o8 = y2.ui) ? void 0 : o8.itemLeadingAvatar, null == (r9 = a7.ui) ? void 0 : r9.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Z2(a7) && a7.chip ? (Wt.openBlock(), Wt.createBlock(wb, Wt.mergeProps({ key: 2, size: (null == (s9 = a7.ui) ? void 0 : s9.itemLeadingChipSize) || (null == (u5 = y2.ui) ? void 0 : u5.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (d2 = y2.ui) ? void 0 : d2.itemLeadingChip, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                    }), Wt.createVNode(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (n8 = y2.ui) ? void 0 : n8.itemLabel, Z2(a7) && (null == (o7 = a7.ui) ? void 0 : o7.itemLabel)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: i7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode("span", { class: H2.value.itemTrailing({ class: [null == (r8 = y2.ui) ? void 0 : r8.itemTrailing, Z2(a7) && (null == (s8 = a7.ui) ? void 0 : s8.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a7, index: i7 }), Wt.createVNode(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx(() => {
                      var t4, i8;
                      return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (t4 = y2.ui) ? void 0 : t4.itemTrailingIcon, Z2(a7) && (null == (i8 = a7.ui) ? void 0 : i8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                    }), _: 2 }, 1024)], 2)];
                  })];
                  pm.ssrRenderSlot(t3.$slots, "item", { item: a7, index: i7 }, () => {
                    var n8, u5, g4, f3;
                    pm.ssrRenderSlot(t3.$slots, "item-leading", { item: a7, index: i7 }, () => {
                      var l3, t4, i8, n9, u6, v2, g5, f4, h4, k4;
                      Z2(a7) && a7.icon ? o6(pm.ssrRenderComponent(yb, { name: a7.icon, class: H2.value.itemLeadingIcon({ class: [null == (l3 = y2.ui) ? void 0 : l3.itemLeadingIcon, null == (t4 = a7.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, r7, s7)) : Z2(a7) && a7.avatar ? o6(pm.ssrRenderComponent(Tb, Wt.mergeProps({ size: (null == (i8 = a7.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n9 = y2.ui) ? void 0 : n9.itemLeadingAvatarSize) || H2.value.itemLeadingAvatarSize() }, { ref_for: true }, a7.avatar, { class: H2.value.itemLeadingAvatar({ class: [null == (u6 = y2.ui) ? void 0 : u6.itemLeadingAvatar, null == (v2 = a7.ui) ? void 0 : v2.itemLeadingAvatar] }) }), null, r7, s7)) : Z2(a7) && a7.chip ? o6(pm.ssrRenderComponent(wb, Wt.mergeProps({ size: (null == (g5 = a7.ui) ? void 0 : g5.itemLeadingChipSize) || (null == (f4 = y2.ui) ? void 0 : f4.itemLeadingChipSize) || H2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a7.chip, { class: H2.value.itemLeadingChip({ class: [null == (h4 = y2.ui) ? void 0 : h4.itemLeadingChip, null == (k4 = a7.ui) ? void 0 : k4.itemLeadingChip] }) }), null, r7, s7)) : o6("<!---->");
                    }, o6, r7, s7), o6(pm.ssrRenderComponent(Wt.unref(Ce), { class: H2.value.itemLabel({ class: [null == (n8 = y2.ui) ? void 0 : n8.itemLabel, Z2(a7) && (null == (u5 = a7.ui) ? void 0 : u5.itemLabel)] }) }, { default: Wt.withCtx((l3, n9, o7, r8) => {
                      if (!n9) return [Wt.renderSlot(t3.$slots, "item-label", { item: a7, index: i7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7), 1)])];
                      pm.ssrRenderSlot(t3.$slots, "item-label", { item: a7, index: i7 }, () => {
                        n9(`${pm.ssrInterpolate(Z2(a7) ? Wt.unref(fg)(a7, y2.labelKey) : a7)}`);
                      }, n9, o7, r8);
                    }), _: 2 }, r7, s7)), o6(`<span class="${pm.ssrRenderClass(H2.value.itemTrailing({ class: [null == (g4 = y2.ui) ? void 0 : g4.itemTrailing, Z2(a7) && (null == (f3 = a7.ui) ? void 0 : f3.itemTrailing)] }))}"${s7}>`), pm.ssrRenderSlot(t3.$slots, "item-trailing", { item: a7, index: i7 }, null, o6, r7, s7), o6(pm.ssrRenderComponent(Wt.unref(Be), { "as-child": "" }, { default: Wt.withCtx((t4, i8, n9, o7) => {
                      var r8, s8, u6, p2;
                      if (!i8) return [Wt.createVNode(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (u6 = y2.ui) ? void 0 : u6.itemTrailingIcon, Z2(a7) && (null == (p2 = a7.ui) ? void 0 : p2.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                      i8(pm.ssrRenderComponent(yb, { name: l2.selectedIcon || Wt.unref(B2).ui.icons.check, class: H2.value.itemTrailingIcon({ class: [null == (r8 = y2.ui) ? void 0 : r8.itemTrailingIcon, Z2(a7) && (null == (s8 = a7.ui) ? void 0 : s8.itemTrailingIcon)] }) }, null, n9, o7));
                    }), _: 2 }, r7, s7)), o6("</span>");
                  }, o6, r7, s7);
                }), _: 2 }, o5, s6)), n6("<!--]-->");
              }), n6("<!--]-->");
            }), _: 2 }, n5, o4));
          }), i5("<!--]--></div>"), pm.ssrRenderSlot(t3.$slots, "content-bottom", {}, null, i5, n5, o4), l2.arrow ? i5(pm.ssrRenderComponent(Wt.unref(pe), Wt.mergeProps(w2.value, { class: H2.value.arrow({ class: null == (s4 = y2.ui) ? void 0 : s4.arrow }) }), null, n5, o4)) : i5("<!---->");
        }), _: 2 }, n4, o3));
      }), _: 2 }, o2, r2));
    }), _: 3 }, i2));
  };
} }), Ve = _e.setup;
_e.setup = (l2, t2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue"), Ve ? Ve(l2, t2) : void 0;
};

export { _e as _ };
//# sourceMappingURL=Select-ehTOOHkR.mjs.map

import { v as Wt, u as ua, r as Mm, e as eg, h as _m, i as wm, t as Hy, z as hg, A as pg, B as dg, s as om, c as hb, d as Sb, C as bb, P as xm, a as Sm } from './server.mjs';
import { m as defu, j as isEqual } from '../_/nitro.mjs';
import { v } from './index-CLkrk2zK.mjs';
import { l } from './useLocale-BepRiSpk.mjs';
import { O, c as c$1, b, f, h } from './usePortal-DzDMWCd7.mjs';
import { c } from './Input-BTq7Ekjb.mjs';
import { F, T, C, r, N, m } from './useForwardPropsEmits-DnSfSOTI.mjs';
import { $ as $e, H as He, q as qe, I as Ie$1 } from './PopperArrow-BQDIGHqG.mjs';
import { o, n } from './usePrimitiveElement-BqlHGOiE.mjs';
import { l as l$1 } from './Collection-CK0B56BN.mjs';
import { e as e$2 } from './utils-B3GHb33t.mjs';
import { r as r$1 } from './useTypeahead-CXda91ln.mjs';
import { e } from './useFormControl-BKZlrIrW.mjs';
import { n as n$1 } from './VisuallyHiddenInput-BCSgpyOT.mjs';
import { F as F$1 } from './useKbd-kRIii9yh.mjs';
import { e as e$1 } from './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
import { E, N as N$1, T as T$1 } from './useBodyScrollLock-BoUAQdAA.mjs';

const W = Wt.defineComponent({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(a2) {
  const { forwardRef: t2 } = N();
  return (a3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(He), { "as-child": "", reference: a3.reference }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(xm), Wt.mergeProps({ ref: Wt.unref(t2), "as-child": a3.asChild, as: a3.as }, a3.$attrs), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} });
function X(l2) {
  const a2 = Wt.computed(() => Wt.unref(l2)), t2 = Wt.computed(() => new Intl.Collator("en", { usage: "search", ...a2.value }));
  return { startsWith: (e2, l3) => 0 === l3.length || (e2 = e2.normalize("NFC"), l3 = l3.normalize("NFC"), 0 === t2.value.compare(e2.slice(0, l3.length), l3)), endsWith: (e2, l3) => 0 === l3.length || (e2 = e2.normalize("NFC"), l3 = l3.normalize("NFC"), 0 === t2.value.compare(e2.slice(-l3.length), l3)), contains: (e2, l3) => {
    if (0 === l3.length) return true;
    e2 = e2.normalize("NFC");
    let a3 = 0;
    const i2 = (l3 = l3.normalize("NFC")).length;
    for (; a3 + i2 <= e2.length; a3++) {
      const n2 = e2.slice(a3, a3 + i2);
      if (0 === t2.value.compare(l3, n2)) return true;
    }
    return false;
  } };
}
function Y(e2, l2, a2) {
  return void 0 !== e2 && void 0 !== l2 && ("string" == typeof e2 ? e2 === l2 : "function" == typeof a2 ? a2(e2, l2) : "string" == typeof a2 ? (null == e2 ? void 0 : e2[a2]) === (null == l2 ? void 0 : l2[a2]) : isEqual(e2, l2));
}
const [Z, J] = T("ListboxRoot"), Q = Wt.defineComponent({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(a2, { expose: t2, emit: i2 }) {
  var _a;
  const n2 = a2, o2 = i2, { multiple: r2, highlightOnHover: s2, orientation: u2, disabled: d2, selectionBehavior: c2, dir: v2 } = Wt.toRefs(n2), { getItems: p2 } = l$1({ isProvider: true }), { handleTypeaheadSearch: m2 } = r$1(), { primitiveElement: f2, currentElement: g2 } = o(), h2 = F$1(), y2 = n(v2), b2 = e(g2), k2 = Wt.ref(), x2 = Wt.ref(false), B2 = Wt.ref(true), C2 = C(n2, "modelValue", o2, { defaultValue: (_a = n2.defaultValue) != null ? _a : r2.value ? [] : void 0, passive: void 0 === n2.modelValue, deep: true });
  const S2 = Wt.ref(null), V2 = Wt.ref(null), w2 = Wt.ref(false), z2 = Wt.ref(false), _2 = r(), N2 = r(), T2 = r();
  function $2() {
    return p2().map((e2) => e2.ref).filter((e2) => "" !== e2.dataset.disabled);
  }
  function A2(e2, l2 = true) {
    if (!e2) return;
    S2.value = e2, B2.value && S2.value.focus(), l2 && S2.value.scrollIntoView({ block: "nearest" });
    const a3 = p2().find((l3) => l3.ref === e2);
    o2("highlight", a3);
  }
  function j2() {
    Wt.nextTick(() => {
      U2(new KeyboardEvent("keydown", { key: "PageUp" }));
    });
  }
  function H2(e2) {
    const l2 = S2.value;
    (null == l2 ? void 0 : l2.isConnected) && (V2.value = l2), S2.value = null, o2("leave", e2);
  }
  function U2(e2) {
    const l2 = e$2(e2, u2.value, y2.value);
    if (!l2) return;
    let a3 = $2();
    if (S2.value) {
      if ("last" === l2) a3.reverse();
      else if ("prev" === l2 || "next" === l2) {
        "prev" === l2 && a3.reverse();
        const e3 = a3.indexOf(S2.value);
        a3 = a3.slice(e3 + 1);
      }
      !function(e3, l3) {
        var a4;
        if (w2.value || "replace" !== n2.selectionBehavior || !r2.value || !Array.isArray(C2.value)) return;
        const t3 = e3.altKey || e3.ctrlKey || e3.metaKey;
        if (t3 && !e3.shiftKey) return;
        if (e3.shiftKey) {
          const t4 = p2().filter((e4) => "" !== e4.ref.dataset.disabled);
          let i3 = null == (a4 = t4.find((e4) => e4.ref === l3)) ? void 0 : a4.value;
          if (e3.key === h2.END ? i3 = t4[t4.length - 1].value : e3.key === h2.HOME && (i3 = t4[0].value), !i3 || !k2.value) return;
          const n3 = function(e4, l4, a5) {
            const t5 = e4.findIndex((e5) => isEqual(e5, l4)), i4 = e4.findIndex((e5) => isEqual(e5, a5));
            if (-1 === t5 || -1 === i4) return [];
            const [n4, o3] = [t5, i4].sort((e5, l5) => e5 - l5);
            return e4.slice(n4, o3 + 1);
          }(t4.map((e4) => e4.value), k2.value, i3);
          C2.value = n3;
        }
      }(e2, a3[0]);
    }
    if (a3.length) {
      A2(a3[S2.value || "prev" !== l2 ? 0 : a3.length - 1]);
    }
    return w2.value ? N2.trigger(e2) : void 0;
  }
  async function G2(l2) {
    if (await Wt.nextTick(), w2.value) _2.trigger(l2);
    else {
      const e2 = $2(), l3 = e2.find((e3) => "checked" === e3.dataset.state);
      l3 ? A2(l3) : e2.length && A2(e2[0]);
    }
  }
  return Wt.watch(C2, () => {
    x2.value || Wt.nextTick(() => {
      G2();
    });
  }, { immediate: true, deep: true }), t2({ highlightedElement: S2, highlightItem: function(e2) {
    if (w2.value) T2.trigger(e2);
    else {
      const l2 = p2().find((l3) => Y(l3.value, e2, n2.by));
      l2 && (S2.value = l2.ref, A2(l2.ref));
    }
  }, highlightFirstItem: j2, highlightSelected: G2, getItems: p2 }), J({ modelValue: C2, onValueChange: function(e2) {
    if (x2.value = true, n2.multiple) {
      const l2 = Array.isArray(C2.value) ? [...C2.value] : [], a3 = l2.findIndex((l3) => Y(l3, e2, n2.by));
      "toggle" === n2.selectionBehavior ? (-1 === a3 ? l2.push(e2) : l2.splice(a3, 1), C2.value = l2) : (C2.value = [e2], k2.value = e2);
    } else "toggle" === n2.selectionBehavior && Y(C2.value, e2, n2.by) ? C2.value = void 0 : C2.value = e2;
    setTimeout(() => {
      x2.value = false;
    }, 1);
  }, multiple: r2, orientation: u2, dir: y2, disabled: d2, highlightOnHover: s2, highlightedElement: S2, isVirtual: w2, virtualFocusHook: _2, virtualKeydownHook: N2, virtualHighlightHook: T2, by: n2.by, firstValue: k2, selectionBehavior: c2, focusable: B2, onLeave: H2, onEnter: function(e2) {
    var l2, a3;
    const t3 = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if (null == (l2 = e2.currentTarget) || l2.dispatchEvent(t3), o2("entryFocus", t3), !t3.defaultPrevented) if (V2.value) A2(V2.value);
    else {
      A2(null == (a3 = $2()) ? void 0 : a3[0]);
    }
  }, changeHighlight: A2, onKeydownEnter: function(e2) {
    S2.value && S2.value.isConnected && (e2.preventDefault(), e2.stopPropagation(), z2.value || S2.value.click());
  }, onKeydownNavigation: U2, onKeydownTypeAhead: function(e2) {
    if (B2.value) {
      if (x2.value = true, w2.value) N2.trigger(e2);
      else {
        const l2 = e2.altKey || e2.ctrlKey || e2.metaKey;
        if (l2 && "a" === e2.key && r2.value) {
          const l3 = p2(), a3 = l3.map((e3) => e3.value);
          C2.value = [...a3], e2.preventDefault(), A2(l3[l3.length - 1].ref);
        } else if (!l2) {
          const l3 = m2(e2.key, p2());
          l3 && A2(l3);
        }
      }
      setTimeout(() => {
        x2.value = false;
      }, 1);
    }
  }, onCompositionStart: function() {
    z2.value = true;
  }, onCompositionEnd: function() {
    requestAnimationFrame(() => {
      z2.value = false;
    });
  }, highlightFirstItem: j2 }), (a3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), { ref_key: "primitiveElement", ref: f2, as: a3.as, "as-child": a3.asChild, dir: Wt.unref(y2), "data-disabled": Wt.unref(d2) ? "" : void 0, onPointerleave: H2, onFocusout: t3[0] || (t3[0] = async (l2) => {
    const a4 = l2.relatedTarget || l2.target;
    await Wt.nextTick(), S2.value && Wt.unref(g2) && !Wt.unref(g2).contains(a4) && H2(l2);
  }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default", { modelValue: Wt.unref(C2) }), Wt.unref(b2) && a3.name ? (Wt.openBlock(), Wt.createBlock(Wt.unref(n$1), { key: 0, name: a3.name, value: Wt.unref(C2), disabled: Wt.unref(d2), required: a3.required }, null, 8, ["name", "value", "disabled", "required"])) : Wt.createCommentVNode("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [ee, le] = T("ComboboxRoot"), ae = Wt.defineComponent({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(l2, { expose: a2, emit: t2 }) {
  var _a;
  var i2, n2, o2;
  const r2 = l2, s2 = t2, { primitiveElement: u2, currentElement: d2 } = o(), { multiple: c2, disabled: v2, ignoreFilter: p2, resetSearchTermOnSelect: m2, dir: f2 } = Wt.toRefs(r2), g2 = n(f2), h2 = C(r2, "modelValue", s2, { defaultValue: (_a = r2.defaultValue) != null ? _a : c2.value ? [] : void 0, passive: void 0 === r2.modelValue, deep: true }), y2 = C(r2, "open", s2, { defaultValue: r2.defaultOpen, passive: void 0 === r2.open });
  const b2 = r(), k2 = Wt.ref(false), x2 = Wt.ref(false), B2 = Wt.ref(), C2 = Wt.ref(), S2 = Wt.computed(() => {
    var _a2;
    var e2;
    return (_a2 = null == (e2 = u2.value) ? void 0 : e2.highlightedElement) != null ? _a2 : void 0;
  }), V2 = Wt.ref(/* @__PURE__ */ new Map()), w2 = Wt.ref(/* @__PURE__ */ new Map()), { contains: z2 } = X({ sensitivity: "base" }), _2 = Wt.reactive({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function N2() {
    if (!_2.search || r2.ignoreFilter || x2.value) return void (_2.filtered.count = V2.value.size);
    _2.filtered.groups = /* @__PURE__ */ new Set();
    let e2 = 0;
    for (const [l3, a3] of V2.value) {
      const t3 = z2(a3, _2.search);
      _2.filtered.items.set(l3, t3 ? 1 : 0), t3 && e2++;
    }
    for (const [l3, a3] of w2.value) for (const e3 of a3) if (_2.filtered.items.get(e3) > 0) {
      _2.filtered.groups.add(l3);
      break;
    }
    _2.filtered.count = e2;
  }
  return Wt.watch([() => _2.search, () => V2.value.size], () => {
    N2();
  }, { immediate: true }), Wt.watch(() => y2.value, () => {
    Wt.nextTick(() => {
      y2.value && N2();
    });
  }, { flush: "post" }), Wt.getCurrentInstance(), a2({ filtered: Wt.computed(() => _2.filtered), highlightedElement: S2, highlightItem: null == (i2 = u2.value) ? void 0 : i2.highlightItem, highlightFirstItem: null == (n2 = u2.value) ? void 0 : n2.highlightFirstItem, highlightSelected: null == (o2 = u2.value) ? void 0 : o2.highlightSelected }), le({ modelValue: h2, multiple: c2, disabled: v2, open: y2, onOpenChange: async function(l3) {
    var a3, t3;
    y2.value = l3, _2.search = "", l3 ? (await Wt.nextTick(), null == (a3 = u2.value) || a3.highlightSelected(), k2.value = true) : k2.value = false, null == (t3 = B2.value) || t3.focus(), setTimeout(() => {
      !l3 && r2.resetSearchTermOnBlur && b2.trigger();
    }, 1);
  }, contentId: "", isUserInputted: k2, isVirtual: x2, inputElement: B2, highlightedElement: S2, onInputElementChange: (e2) => B2.value = e2, triggerElement: C2, onTriggerElementChange: (e2) => C2.value = e2, parentElement: d2, resetSearchTermOnSelect: m2, onResetSearchTerm: b2.on, allItems: V2, allGroups: w2, filterState: _2, ignoreFilter: p2 }), (l3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref($e), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(Q), Wt.mergeProps({ ref_key: "primitiveElement", ref: u2 }, l3.$attrs, { modelValue: Wt.unref(h2), "onUpdate:modelValue": a3[0] || (a3[0] = (l4) => Wt.isRef(h2) ? h2.value = l4 : null), style: { pointerEvents: Wt.unref(y2) ? "auto" : void 0 }, as: l3.as, "as-child": l3.asChild, dir: Wt.unref(g2), multiple: Wt.unref(c2), name: l3.name, required: l3.required, disabled: Wt.unref(v2), "highlight-on-hover": true, by: r2.by, onHighlight: a3[1] || (a3[1] = (e2) => s2("highlight", e2)) }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default", { open: Wt.unref(y2), modelValue: Wt.unref(h2) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), te = Wt.defineComponent({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const { CollectionSlot: t2 } = l$1(), i2 = Z(), n2 = m(false, 10);
  return (a3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(t2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(xm), { role: "listbox", as: a3.as, "as-child": a3.asChild, tabindex: Wt.unref(i2).focusable.value ? Wt.unref(i2).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": Wt.unref(i2).orientation.value, "aria-multiselectable": !!Wt.unref(i2).multiple.value, "data-orientation": Wt.unref(i2).orientation.value, onMousedown: o2[0] || (o2[0] = Wt.withModifiers((e2) => n2.value = true, ["left"])), onFocus: o2[1] || (o2[1] = (l2) => {
    Wt.unref(n2) || Wt.unref(i2).onEnter(l2);
  }), onKeydown: [o2[2] || (o2[2] = Wt.withKeys(Wt.withModifiers((l2) => {
    Wt.unref(i2).focusable.value && Wt.unref(i2).onKeydownNavigation(l2);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), Wt.withKeys(Wt.unref(i2).onKeydownEnter, ["enter"]), Wt.unref(i2).onKeydownTypeAhead] }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [ie, ne] = T("ComboboxContent"), oe = Wt.defineComponent({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t2, { emit: i2 }) {
  const n2 = t2, o2 = i2, { position: r2 } = Wt.toRefs(n2), s2 = ee(), { forwardRef: u2 } = N();
  N$1(n2.bodyLock), T$1(s2.parentElement);
  const d2 = Wt.computed(() => "popper" === n2.position ? n2 : {}), c2 = Sm(d2.value), v2 = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  return ne({ position: r2 }), Wt.ref(false), (a2, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(te), { "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(h), { "as-child": "", "disable-outside-pointer-events": a2.disableOutsidePointerEvents, onDismiss: t3[0] || (t3[0] = (l2) => Wt.unref(s2).onOpenChange(false)), onFocusOutside: t3[1] || (t3[1] = (l2) => {
    var a3;
    (null == (a3 = Wt.unref(s2).parentElement.value) ? void 0 : a3.contains(l2.target)) && l2.preventDefault(), o2("focusOutside", l2);
  }), onInteractOutside: t3[2] || (t3[2] = (e2) => o2("interactOutside", e2)), onEscapeKeyDown: t3[3] || (t3[3] = (e2) => o2("escapeKeyDown", e2)), onPointerDownOutside: t3[4] || (t3[4] = (l2) => {
    var a3;
    (null == (a3 = Wt.unref(s2).parentElement.value) ? void 0 : a3.contains(l2.target)) && l2.preventDefault(), o2("pointerDownOutside", l2);
  }) }, { default: Wt.withCtx(() => [(Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent("popper" === Wt.unref(r2) ? Wt.unref(Ie$1) : Wt.unref(xm)), Wt.mergeProps({ ...a2.$attrs, ...Wt.unref(c2) }, { id: Wt.unref(s2).contentId, ref: Wt.unref(u2), "data-state": Wt.unref(s2).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ..."popper" === Wt.unref(r2) ? v2 : {} } }), { default: Wt.withCtx(() => [Wt.renderSlot(a2.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), re = Wt.defineComponent({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(l2) {
  const a2 = l2, t2 = ee(), i2 = ie();
  return N(), (l3, n2) => Wt.unref(t2).open.value && "popper" === Wt.unref(i2).position.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(qe), Wt.normalizeProps(Wt.mergeProps({ key: 0 }, a2)), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), se = Wt.defineComponent({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(l2, { emit: a2 }) {
  const t2 = F(l2, a2), { forwardRef: i2 } = N(), n2 = ee();
  return n2.contentId || (n2.contentId = c$1(void 0, "reka-combobox-content")), (l3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(f), { present: l3.forceMount || Wt.unref(n2).open.value }, { default: Wt.withCtx(() => [Wt.createVNode(oe, Wt.mergeProps({ ...Wt.unref(t2), ...l3.$attrs }, { ref: Wt.unref(i2) }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), ue = Wt.defineComponent({ __name: "ComboboxEmpty", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2, i2 = ee(), n2 = Wt.computed(() => i2.ignoreFilter.value ? 0 === i2.allItems.value.size : !!i2.filterState.search && 0 === i2.filterState.filtered.count);
  return (a3, i3) => n2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.normalizeProps(Wt.mergeProps({ key: 0 }, t2)), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default", {}, () => [i3[0] || (i3[0] = Wt.createTextVNode("No options"))])]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), [de, ce] = T("ListboxGroup"), ve = Wt.defineComponent({ __name: "ListboxGroup", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2, i2 = c$1(void 0, "reka-listbox-group");
  return ce({ id: i2 }), (a3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps({ role: "group" }, t2, { "aria-labelledby": Wt.unref(i2) }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["aria-labelledby"]));
} }), [pe, me] = T("ComboboxGroup"), fe = Wt.defineComponent({ __name: "ComboboxGroup", props: { asChild: { type: Boolean }, as: {} }, setup(l2) {
  const a2 = l2, t2 = c$1(void 0, "reka-combobox-group"), i2 = ee(), n2 = Wt.computed(() => !!i2.ignoreFilter.value || (!i2.filterState.search || i2.filterState.filtered.groups.has(t2))), o2 = me({ id: t2, labelId: "" });
  return (l3, i3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(ve), Wt.mergeProps({ id: Wt.unref(t2), "aria-labelledby": Wt.unref(o2).labelId }, a2, { hidden: !n2.value || void 0 }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "hidden"]));
} }), ge = Wt.defineComponent({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(a2, { emit: t2 }) {
  const i2 = a2, n2 = C(i2, "modelValue", t2, { defaultValue: "", passive: void 0 === i2.modelValue }), o2 = Z(), { primitiveElement: r2 } = o(), s2 = Wt.computed(() => i2.disabled || o2.disabled.value || false), u2 = Wt.ref();
  return Wt.watchSyncEffect(() => {
    var e2;
    return u2.value = null == (e2 = o2.highlightedElement.value) ? void 0 : e2.id;
  }), (a3, t3) => {
    var _a;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(xm), { ref_key: "primitiveElement", ref: r2, as: a3.as, "as-child": a3.asChild, value: Wt.unref(n2), disabled: s2.value ? "" : void 0, "data-disabled": s2.value ? "" : void 0, "aria-disabled": (_a = s2.value) != null ? _a : void 0, "aria-activedescendant": u2.value, type: "text", onKeydown: [Wt.withKeys(Wt.withModifiers(Wt.unref(o2).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), Wt.withKeys(Wt.unref(o2).onKeydownEnter, ["enter"])], onInput: t3[0] || (t3[0] = (l2) => {
      n2.value = l2.target.value, Wt.unref(o2).highlightFirstItem(l2);
    }), onCompositionstart: Wt.unref(o2).onCompositionStart, onCompositionend: Wt.unref(o2).onCompositionEnd }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default", { modelValue: Wt.unref(n2) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]);
  };
} }), he = Wt.defineComponent({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(l2, { emit: a2 }) {
  const t2 = l2, i2 = a2, n2 = ee(), o2 = Z(), { primitiveElement: r2 } = o(), s2 = C(t2, "modelValue", i2, { passive: void 0 === t2.modelValue });
  function u2(e2) {
    n2.open.value || n2.onOpenChange(true);
  }
  function d2(l3) {
    const a3 = l3.target;
    n2.open.value ? n2.filterState.search = a3.value : (n2.onOpenChange(true), Wt.nextTick(() => {
      a3.value && (n2.filterState.search = a3.value, o2.highlightFirstItem(l3));
    }));
  }
  function c2() {
    const l3 = n2.modelValue.value;
    t2.displayValue ? s2.value = t2.displayValue(l3) : n2.multiple.value || !l3 || Array.isArray(l3) ? s2.value = "" : s2.value = "object" != typeof l3 ? l3.toString() : "", Wt.nextTick(() => {
      s2.value = s2.value;
    });
  }
  return n2.onResetSearchTerm(() => {
    c2();
  }), Wt.watch(n2.modelValue, async () => {
    !n2.isUserInputted.value && n2.resetSearchTermOnSelect.value && c2();
  }, { immediate: true, deep: true }), Wt.watch(() => t2.modelValue, () => {
    void 0 !== t2.modelValue && (n2.filterState.search = t2.modelValue);
  }), (l3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(ge), { ref_key: "primitiveElement", ref: r2, modelValue: Wt.unref(s2), "onUpdate:modelValue": a3[0] || (a3[0] = (l4) => Wt.isRef(s2) ? s2.value = l4 : null), as: l3.as, "as-child": l3.asChild, "auto-focus": l3.autoFocus, "aria-expanded": Wt.unref(n2).open.value, "aria-controls": Wt.unref(n2).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: d2, onKeydown: Wt.withKeys(Wt.withModifiers(u2, ["prevent"]), ["down", "up"]) }, { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), [ye, be] = T("ListboxItem"), ke = Wt.defineComponent({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(a2, { emit: t2 }) {
  const i2 = a2, n2 = t2, o2 = c$1(void 0, "reka-listbox-item"), { CollectionItem: r2 } = l$1(), { forwardRef: s2, currentElement: u2 } = N(), d2 = Z(), c2 = Wt.computed(() => u2.value === d2.highlightedElement.value), v2 = Wt.computed(() => {
    return e2 = d2.modelValue.value, l2 = i2.value, a3 = d2.by, void 0 !== e2 && (Array.isArray(e2) ? e2.some((e3) => Y(e3, l2, a3)) : Y(e2, l2, a3));
    var e2, l2, a3;
  }), p2 = Wt.computed(() => d2.disabled.value || i2.disabled);
  async function m2(e2) {
    n2("select", e2), (null == e2 ? void 0 : e2.defaultPrevented) || !p2.value && e2 && (d2.onValueChange(i2.value), d2.changeHighlight(u2.value));
  }
  function f2(e2) {
    const l2 = { originalEvent: e2, value: i2.value };
    e$1("listbox.select", m2, l2);
  }
  return be({ isSelected: v2 }), (a3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(r2), { value: a3.value }, { default: Wt.withCtx(() => [Wt.withMemo([c2.value, v2.value], () => Wt.createVNode(Wt.unref(xm), Wt.mergeProps({ id: Wt.unref(o2) }, a3.$attrs, { ref: Wt.unref(s2), role: "option", tabindex: Wt.unref(d2).focusable.value ? c2.value ? "0" : "-1" : -1, "aria-selected": v2.value, as: a3.as, "as-child": a3.asChild, disabled: p2.value ? "" : void 0, "data-disabled": p2.value ? "" : void 0, "data-highlighted": c2.value ? "" : void 0, "data-state": v2.value ? "checked" : "unchecked", onClick: f2, onKeydown: Wt.withKeys(Wt.withModifiers(f2, ["prevent"]), ["space"]), onPointermove: t3[0] || (t3[0] = (l2) => {
    Wt.unref(d2).highlightedElement.value !== Wt.unref(u2) && (Wt.unref(d2).highlightOnHover.value ? Wt.unref(d2).changeHighlight(Wt.unref(u2), false) : Wt.unref(d2).focusable.value || Wt.unref(d2).changeHighlight(Wt.unref(u2), false));
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), t3, 1)]), _: 3 }, 8, ["value"]));
} }), xe = Wt.defineComponent({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(l2, { emit: a2 }) {
  const t2 = l2, i2 = a2, n2 = c$1(void 0, "reka-combobox-item"), o2 = ee();
  pe(null);
  const { primitiveElement: r2 } = o();
  if ("" === t2.value) throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const s2 = Wt.computed(() => {
    if (o2.isVirtual.value || o2.ignoreFilter.value || !o2.filterState.search) return true;
    {
      const e2 = o2.filterState.filtered.items.get(n2);
      return void 0 === e2 || e2 > 0;
    }
  });
  return (l3, a3) => s2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ke), Wt.mergeProps({ key: 0 }, t2, { id: Wt.unref(n2), ref_key: "primitiveElement", ref: r2, disabled: Wt.unref(o2).disabled.value || l3.disabled, onSelect: a3[0] || (a3[0] = (a4) => {
    i2("select", a4), a4.defaultPrevented || Wt.unref(o2).multiple.value || l3.disabled || Wt.unref(o2).disabled.value || (a4.preventDefault(), Wt.unref(o2).onOpenChange(false), Wt.unref(o2).modelValue.value = t2.value);
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(l3.value), 1)])]), _: 3 }, 16, ["id", "disabled"])) : Wt.createCommentVNode("", true);
} }), Be = Wt.defineComponent({ __name: "ListboxItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(a2) {
  const t2 = a2;
  N();
  const i2 = ye();
  return (a3, n2) => Wt.unref(i2).isSelected.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps({ key: 0, "aria-hidden": "true" }, t2), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), Ce = Wt.defineComponent({ __name: "ComboboxItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(l2) {
  const a2 = l2;
  return (l3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(Be), Wt.normalizeProps(Wt.guardReactiveProps(a2)), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16));
} }), Se = Wt.defineComponent({ __name: "ComboboxLabel", props: { for: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const t2 = a2;
  N();
  const i2 = pe({ id: "", labelId: "" });
  return i2.labelId || (i2.labelId = c$1(void 0, "reka-combobox-group-label")), (a3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps(t2, { id: Wt.unref(i2).labelId }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Ve = Wt.defineComponent({ __name: "ComboboxPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(l2) {
  const a2 = l2;
  return (l3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(b), Wt.normalizeProps(Wt.guardReactiveProps(a2)), { default: Wt.withCtx(() => [Wt.renderSlot(l3.$slots, "default")]), _: 3 }, 16));
} }), we = Wt.defineComponent({ __name: "ComboboxSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2;
  return N(), (a3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps(t2, { "aria-hidden": "true" }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Le = Wt.defineComponent({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const t2 = a2, { forwardRef: i2 } = N(), n2 = ee(), o2 = Wt.computed(() => t2.disabled || n2.disabled.value || false);
  return (a3, r2) => {
    var _a;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps(t2, { ref: Wt.unref(i2), type: "button" === a3.as ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": Wt.unref(n2).open.value, "aria-controls": Wt.unref(n2).contentId, "data-state": Wt.unref(n2).open.value ? "open" : "closed", disabled: o2.value, "data-disabled": o2.value ? "" : void 0, "aria-disabled": (_a = o2.value) != null ? _a : void 0, onClick: r2[0] || (r2[0] = (l2) => Wt.unref(n2).onOpenChange(!Wt.unref(n2).open.value)) }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]);
  };
} }), Ie = { slots: { base: ["relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"], leading: "absolute inset-y-0 start-0 flex items-center", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "absolute inset-y-0 end-0 flex items-center", trailingIcon: "shrink-0 text-dimmed", value: "truncate pointer-events-none", placeholder: "truncate text-dimmed", arrow: "fill-default", content: ["max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col", "origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"], viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: ["group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"], itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemLabel: "truncate", input: "border-b border-default", focusScope: "flex flex-col min-h-0" }, variants: { buttonGroup: { horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]", vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]" }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2", trailing: "pe-2", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1 text-xs" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1.5 text-xs" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-1.5 text-sm" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-2 text-sm" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailingIcon: "size-6", empty: "p-2 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" } }, compoundVariants: [{ color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, ze = Object.assign({ inheritAttrs: false }, { __name: "SelectMenu", __ssrInlineRender: true, props: Wt.mergeModels({ id: { type: String, required: false }, placeholder: { type: String, required: false }, searchInput: { type: [Boolean, Object], required: false, default: true }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, trailingIcon: { type: String, required: false }, selectedIcon: { type: String, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: Wt.mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]), setup(l2, { expose: a2, emit: b2 }) {
  const k2 = l2, x2 = b2, B2 = Wt.useSlots(), V2 = Wt.useModel(l2, "searchTerm", { type: String, default: "" }), { t: w2 } = l(), L2 = ua(), { contains: I2 } = X({ sensitivity: "base" }), z2 = F(Mm(k2, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover"), x2), N2 = O(Wt.toRef(() => k2.portal)), T2 = Wt.toRef(() => defu(k2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" })), $2 = Wt.toRef(() => k2.arrow), A2 = Wt.toRef(() => defu(k2.searchInput, { placeholder: w2("selectMenu.search"), variant: "none" })), { emitFormBlur: R2, emitFormFocus: P2, emitFormInput: K2, emitFormChange: F2, size: E2, color: O2, id: D2, name: q2, highlight: M2, disabled: j2, ariaAttrs: H2 } = eg(k2), { orientation: U2, size: Y2 } = _m(k2), { isLeading: Z2, isTrailing: J2, leadingIconName: Q2, trailingIconName: ee2 } = wm(Wt.toRef(() => defu(k2, { trailingIcon: L2.ui.icons.chevronDown }))), le2 = Wt.computed(() => Y2.value || E2.value), [te2, ie2] = v(), ne2 = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(Ie), ...(null == (e2 = L2.ui) ? void 0 : e2.selectMenu) || {} })({ color: O2.value, variant: k2.variant, size: null == le2 ? void 0 : le2.value, loading: k2.loading, highlight: M2.value, leading: Z2.value || !!k2.avatar || !!B2.leading, trailing: J2.value || !!B2.trailing, buttonGroup: U2.value });
  });
  function oe2(e2) {
    if (k2.multiple && Array.isArray(e2)) {
      const l4 = e2.map((e3) => oe2(e3)).filter(Boolean);
      return (null == l4 ? void 0 : l4.length) ? l4.join(", ") : void 0;
    }
    if (!k2.valueKey) return e2 && ("object" == typeof e2 ? pg(e2, k2.labelKey) : e2);
    const l3 = ce2.value.find((l4) => dg("object" == typeof l4 ? pg(l4, k2.valueKey) : l4, e2));
    return l3 && ("object" == typeof l3 ? pg(l3, k2.labelKey) : l3);
  }
  const de2 = Wt.computed(() => {
    var e2;
    return (null == (e2 = k2.items) ? void 0 : e2.length) ? hg(k2.items) ? k2.items : [k2.items] : [];
  }), ce2 = Wt.computed(() => de2.value.flatMap((e2) => e2)), ve2 = Wt.computed(() => {
    if (k2.ignoreFilter || !V2.value) return de2.value;
    const e2 = Array.isArray(k2.filterFields) ? k2.filterFields : [k2.labelKey];
    return de2.value.map((l3) => l3.filter((l4) => "object" != typeof l4 || null === l4 ? I2(String(l4), V2.value) : !(!l4.type || !["label", "separator"].includes(l4.type)) || e2.some((e3) => I2(pg(l4, e3), V2.value)))).filter((e3) => e3.filter((e4) => !ze2(e4) || !e4.type || !["label", "separator"].includes(e4.type)).length > 0);
  }), pe2 = Wt.computed(() => ve2.value.flatMap((e2) => e2)), me2 = Wt.computed(() => {
    if (!k2.createItem || !V2.value) return false;
    const e2 = k2.valueKey ? { [k2.valueKey]: V2.value } : V2.value;
    return "object" == typeof k2.createItem && "always" === k2.createItem.when || "always" === k2.createItem ? !pe2.value.find((l3) => dg(l3, e2, k2.valueKey)) : !pe2.value.length;
  }), ge2 = Wt.computed(() => "object" == typeof k2.createItem ? k2.createItem.position : "bottom"), ye2 = Wt.ref(null);
  function be2(l3) {
    if (Wt.toRaw(k2.modelValue) === l3) return;
    const a3 = new Event("change", { target: { value: l3 } });
    x2("change", a3), F2(), K2(), k2.resetSearchTermOnSelect && (V2.value = "");
  }
  function ke2(e2) {
    let l3;
    if (e2) {
      const e3 = new FocusEvent("focus");
      x2("focus", e3), P2(), clearTimeout(l3);
    } else {
      const e3 = new FocusEvent("blur");
      if (x2("blur", e3), R2(), k2.resetSearchTermOnBlur) {
        l3 = setTimeout(() => {
          V2.value = "";
        }, 100);
      }
    }
  }
  function Be2(e2, l3) {
    var a3;
    ze2(l3) && (l3.disabled ? e2.preventDefault() : null == (a3 = l3.onSelect) || a3.call(l3, e2));
  }
  function ze2(e2) {
    return "object" == typeof e2 && null !== e2;
  }
  return a2({ triggerRef: ye2 }), (a3, t2, i2, n2) => {
    t2("<!--[-->"), t2(om.ssrRenderComponent(Wt.unref(te2), null, { default: Wt.withCtx((l3, t3, i3, n3) => {
      var o2, r2;
      if (!t3) return [Wt.createVNode(Wt.unref(fe), { class: ne2.value.group({ class: null == (r2 = k2.ui) ? void 0 : r2.group }) }, { default: Wt.withCtx(() => {
        var l4;
        return [Wt.createVNode(Wt.unref(xe), { class: ne2.value.item({ class: null == (l4 = k2.ui) ? void 0 : l4.item }), value: V2.value, onSelect: Wt.withModifiers((e2) => x2("create", V2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var l5;
          return [Wt.createVNode("span", { class: ne2.value.itemLabel({ class: null == (l5 = k2.ui) ? void 0 : l5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(w2)("selectMenu.create", { label: V2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
      }), _: 3 }, 8, ["class"])];
      t3(om.ssrRenderComponent(Wt.unref(fe), { class: ne2.value.group({ class: null == (o2 = k2.ui) ? void 0 : o2.group }) }, { default: Wt.withCtx((l4, t4, i4, n4) => {
        var o3, r3;
        if (!t4) return [Wt.createVNode(Wt.unref(xe), { class: ne2.value.item({ class: null == (r3 = k2.ui) ? void 0 : r3.item }), value: V2.value, onSelect: Wt.withModifiers((e2) => x2("create", V2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var l5;
          return [Wt.createVNode("span", { class: ne2.value.itemLabel({ class: null == (l5 = k2.ui) ? void 0 : l5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(w2)("selectMenu.create", { label: V2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
        t4(om.ssrRenderComponent(Wt.unref(xe), { class: ne2.value.item({ class: null == (o3 = k2.ui) ? void 0 : o3.item }), value: V2.value, onSelect: (e2) => x2("create", V2.value) }, { default: Wt.withCtx((l5, t5, i5, n5) => {
          var o4, r4;
          if (!t5) return [Wt.createVNode("span", { class: ne2.value.itemLabel({ class: null == (r4 = k2.ui) ? void 0 : r4.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(w2)("selectMenu.create", { label: V2.value })), 1)])], 2)];
          t5(`<span class="${om.ssrRenderClass(ne2.value.itemLabel({ class: null == (o4 = k2.ui) ? void 0 : o4.itemLabel }))}"${n5}>`), om.ssrRenderSlot(a3.$slots, "create-item-label", { item: V2.value }, () => {
            t5(`${om.ssrInterpolate(Wt.unref(w2)("selectMenu.create", { label: V2.value }))}`);
          }, t5, i5, n5), t5("</span>");
        }), _: 3 }, i4, n4));
      }), _: 3 }, i3, n3));
    }), _: 3 }, i2)), t2(om.ssrRenderComponent(Wt.unref(ae), Wt.mergeProps({ id: Wt.unref(D2) }, { ...Wt.unref(z2), ...a3.$attrs, ...Wt.unref(H2) }, { "ignore-filter": "", "as-child": "", name: Wt.unref(q2), disabled: Wt.unref(j2), "onUpdate:modelValue": be2, "onUpdate:open": ke2 }), { default: Wt.withCtx(({ modelValue: t3, open: i3 }, n3, o2, r2) => {
      if (!n3) return [Wt.createVNode(Wt.unref(W), { "as-child": "" }, { default: Wt.withCtx(() => {
        var n4;
        return [Wt.createVNode(Wt.unref(Le), { ref_key: "triggerRef", ref: ye2, class: ne2.value.base({ class: [null == (n4 = k2.ui) ? void 0 : n4.base, k2.class] }), tabindex: "0" }, { default: Wt.withCtx(() => {
          var n5, o3;
          return [Wt.unref(Z2) || l2.avatar || B2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.leading({ class: null == (n5 = k2.ui) ? void 0 : n5.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var a4, t4, i4;
            return [Wt.unref(Z2) && Wt.unref(Q2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(Q2), class: ne2.value.leadingIcon({ class: null == (a4 = k2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : l2.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (t4 = k2.ui) ? void 0 : t4.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, l2.avatar, { class: ne2.value.itemLeadingAvatar({ class: null == (i4 = k2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t3, open: i3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([oe2(t3)], (a4) => {
            var _a;
            var t4, i4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.value({ class: null == (t4 = k2.ui) ? void 0 : t4.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.placeholder({ class: null == (i4 = k2.ui) ? void 0 : i4.placeholder }) }, Wt.toDisplayString((_a = l2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(J2) || B2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.trailing({ class: null == (o3 = k2.ui) ? void 0 : o3.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var l3;
            return [Wt.unref(ee2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(ee2), class: ne2.value.trailingIcon({ class: null == (l3 = k2.ui) ? void 0 : l3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
        }), _: 2 }, 1032, ["class"])];
      }), _: 2 }, 1024), Wt.createVNode(Wt.unref(Ve), Wt.unref(N2), { default: Wt.withCtx(() => {
        var t4;
        return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ class: ne2.value.content({ class: null == (t4 = k2.ui) ? void 0 : t4.content }) }, T2.value), { default: Wt.withCtx(() => {
          var t5, i4;
          return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ne2.value.focusScope({ class: null == (t5 = k2.ui) ? void 0 : t5.focusScope }) }, { default: Wt.withCtx(() => {
            var t6, i5;
            return [Wt.renderSlot(a3.$slots, "content-top"), l2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref(he), { key: 0, modelValue: V2.value, "onUpdate:modelValue": (e2) => V2.value = e2, "display-value": () => V2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (a4 = k2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(ue), { class: ne2.value.empty({ class: null == (t6 = k2.ui) ? void 0 : t6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ne2.value.viewport({ class: null == (i5 = k2.ui) ? void 0 : i5.viewport }) }, [me2.value && "top" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ve2.value, (t7, i6) => {
              var n4;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(fe), { key: `group-${i6}`, class: ne2.value.group({ class: null == (n4 = k2.ui) ? void 0 : n4.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, n5) => {
                var o3, r3, s2, u2, c2, v2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i6}-${n5}` }, [ze2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: ne2.value.label({ class: [null == (o3 = k2.ui) ? void 0 : o3.label, null == (r3 = t8.ui) ? void 0 : r3.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ze2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: ne2.value.separator({ class: [null == (s2 = k2.ui) ? void 0 : s2.separator, null == (u2 = t8.ui) ? void 0 : u2.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: ne2.value.item({ class: [null == (c2 = k2.ui) ? void 0 : c2.item, ze2(t8) && (null == (v2 = t8.ui) ? void 0 : v2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n5 }, () => {
                  var i7, o4, r4, s3;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n5 }, () => {
                    var l3, a4, i8, n6, o5, r5, s4, u3, d2;
                    return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i8 = t8.ui) ? void 0 : i8.itemLeadingAvatarSize) || (null == (n6 = k2.ui) ? void 0 : n6.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o5 = k2.ui) ? void 0 : o5.itemLeadingAvatar, null == (r5 = t8.ui) ? void 0 : r5.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s4 = k2.ui) ? void 0 : s4.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u3 = k2.ui) ? void 0 : u3.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (i7 = k2.ui) ? void 0 : i7.itemLabel, ze2(t8) && (null == (o4 = t8.ui) ? void 0 : o4.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n5 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r4 = k2.ui) ? void 0 : r4.itemTrailing, ze2(t8) && (null == (s3 = t8.ui) ? void 0 : s3.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n5 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, i8;
                    return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i8 = t8.ui) ? void 0 : i8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), me2.value && "bottom" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re), Wt.mergeProps({ key: 0 }, $2.value, { class: ne2.value.arrow({ class: null == (i4 = k2.ui) ? void 0 : i4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      n3(om.ssrRenderComponent(Wt.unref(W), { "as-child": "" }, { default: Wt.withCtx((n4, o3, r3, s2) => {
        var u2, d2;
        if (!o3) return [Wt.createVNode(Wt.unref(Le), { ref_key: "triggerRef", ref: ye2, class: ne2.value.base({ class: [null == (d2 = k2.ui) ? void 0 : d2.base, k2.class] }), tabindex: "0" }, { default: Wt.withCtx(() => {
          var n5, o4;
          return [Wt.unref(Z2) || l2.avatar || B2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.leading({ class: null == (n5 = k2.ui) ? void 0 : n5.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var a4, t4, i4;
            return [Wt.unref(Z2) && Wt.unref(Q2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(Q2), class: ne2.value.leadingIcon({ class: null == (a4 = k2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : l2.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (t4 = k2.ui) ? void 0 : t4.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, l2.avatar, { class: ne2.value.itemLeadingAvatar({ class: null == (i4 = k2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t3, open: i3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([oe2(t3)], (a4) => {
            var _a;
            var t4, i4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.value({ class: null == (t4 = k2.ui) ? void 0 : t4.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.placeholder({ class: null == (i4 = k2.ui) ? void 0 : i4.placeholder }) }, Wt.toDisplayString((_a = l2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(J2) || B2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.trailing({ class: null == (o4 = k2.ui) ? void 0 : o4.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var l3;
            return [Wt.unref(ee2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(ee2), class: ne2.value.trailingIcon({ class: null == (l3 = k2.ui) ? void 0 : l3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
        }), _: 2 }, 1032, ["class"])];
        o3(om.ssrRenderComponent(Wt.unref(Le), { ref_key: "triggerRef", ref: ye2, class: ne2.value.base({ class: [null == (u2 = k2.ui) ? void 0 : u2.base, k2.class] }), tabindex: "0" }, { default: Wt.withCtx((n5, o4, r4, s3) => {
          var u3, d3, c2, f2;
          if (!o4) return [Wt.unref(Z2) || l2.avatar || B2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.leading({ class: null == (c2 = k2.ui) ? void 0 : c2.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var a4, t4, i4;
            return [Wt.unref(Z2) && Wt.unref(Q2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(Q2), class: ne2.value.leadingIcon({ class: null == (a4 = k2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : l2.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (t4 = k2.ui) ? void 0 : t4.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, l2.avatar, { class: ne2.value.itemLeadingAvatar({ class: null == (i4 = k2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t3, open: i3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([oe2(t3)], (a4) => {
            var _a;
            var t4, i4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ne2.value.value({ class: null == (t4 = k2.ui) ? void 0 : t4.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.placeholder({ class: null == (i4 = k2.ui) ? void 0 : i4.placeholder }) }, Wt.toDisplayString((_a = l2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(J2) || B2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ne2.value.trailing({ class: null == (f2 = k2.ui) ? void 0 : f2.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var l3;
            return [Wt.unref(ee2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(ee2), class: ne2.value.trailingIcon({ class: null == (l3 = k2.ui) ? void 0 : l3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
          Wt.unref(Z2) || l2.avatar || B2.leading ? (o4(`<span class="${om.ssrRenderClass(ne2.value.leading({ class: null == (u3 = k2.ui) ? void 0 : u3.leading }))}"${s3}>`), om.ssrRenderSlot(a3.$slots, "leading", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var a4, t4, i4;
            Wt.unref(Z2) && Wt.unref(Q2) ? o4(om.ssrRenderComponent(hb, { name: Wt.unref(Q2), class: ne2.value.leadingIcon({ class: null == (a4 = k2.ui) ? void 0 : a4.leadingIcon }) }, null, r4, s3)) : l2.avatar ? o4(om.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (t4 = k2.ui) ? void 0 : t4.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, l2.avatar, { class: ne2.value.itemLeadingAvatar({ class: null == (i4 = k2.ui) ? void 0 : i4.itemLeadingAvatar }) }), null, r4, s3)) : o4("<!---->");
          }, o4, r4, s3), o4("</span>")) : o4("<!---->"), om.ssrRenderSlot(a3.$slots, "default", { modelValue: t3, open: i3 }, () => {
            o4("<!--[-->"), om.ssrRenderList([oe2(t3)], (e2) => {
              var _a;
              var a4, t4;
              o4("<!--[-->"), o4(null != e2 ? `<span class="${om.ssrRenderClass(ne2.value.value({ class: null == (a4 = k2.ui) ? void 0 : a4.value }))}"${s3}>${om.ssrInterpolate(e2)}</span>` : `<span class="${om.ssrRenderClass(ne2.value.placeholder({ class: null == (t4 = k2.ui) ? void 0 : t4.placeholder }))}"${s3}>${om.ssrInterpolate((_a = l2.placeholder) != null ? _a : "\xA0")}</span>`), o4("<!--]-->");
            }), o4("<!--]-->");
          }, o4, r4, s3), Wt.unref(J2) || B2.trailing ? (o4(`<span class="${om.ssrRenderClass(ne2.value.trailing({ class: null == (d3 = k2.ui) ? void 0 : d3.trailing }))}"${s3}>`), om.ssrRenderSlot(a3.$slots, "trailing", { modelValue: t3, open: i3, ui: ne2.value }, () => {
            var l3;
            Wt.unref(ee2) ? o4(om.ssrRenderComponent(hb, { name: Wt.unref(ee2), class: ne2.value.trailingIcon({ class: null == (l3 = k2.ui) ? void 0 : l3.trailingIcon }) }, null, r4, s3)) : o4("<!---->");
          }, o4, r4, s3), o4("</span>")) : o4("<!---->");
        }), _: 2 }, r3, s2));
      }), _: 2 }, o2, r2)), n3(om.ssrRenderComponent(Wt.unref(Ve), Wt.unref(N2), { default: Wt.withCtx((t4, i4, n4, o3) => {
        var r3, s2;
        if (!i4) return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ class: ne2.value.content({ class: null == (s2 = k2.ui) ? void 0 : s2.content }) }, T2.value), { default: Wt.withCtx(() => {
          var t5, i5;
          return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ne2.value.focusScope({ class: null == (t5 = k2.ui) ? void 0 : t5.focusScope }) }, { default: Wt.withCtx(() => {
            var t6, i6;
            return [Wt.renderSlot(a3.$slots, "content-top"), l2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref(he), { key: 0, modelValue: V2.value, "onUpdate:modelValue": (e2) => V2.value = e2, "display-value": () => V2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (a4 = k2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(ue), { class: ne2.value.empty({ class: null == (t6 = k2.ui) ? void 0 : t6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ne2.value.viewport({ class: null == (i6 = k2.ui) ? void 0 : i6.viewport }) }, [me2.value && "top" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ve2.value, (t7, i7) => {
              var n5;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(fe), { key: `group-${i7}`, class: ne2.value.group({ class: null == (n5 = k2.ui) ? void 0 : n5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, n6) => {
                var o4, r4, s3, u2, c2, v2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i7}-${n6}` }, [ze2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: ne2.value.label({ class: [null == (o4 = k2.ui) ? void 0 : o4.label, null == (r4 = t8.ui) ? void 0 : r4.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ze2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: ne2.value.separator({ class: [null == (s3 = k2.ui) ? void 0 : s3.separator, null == (u2 = t8.ui) ? void 0 : u2.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: ne2.value.item({ class: [null == (c2 = k2.ui) ? void 0 : c2.item, ze2(t8) && (null == (v2 = t8.ui) ? void 0 : v2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n6 }, () => {
                  var i8, o5, r5, s4;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n6 }, () => {
                    var l3, a4, i9, n7, o6, r6, s5, u3, d2;
                    return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n7 = k2.ui) ? void 0 : n7.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o6 = k2.ui) ? void 0 : o6.itemLeadingAvatar, null == (r6 = t8.ui) ? void 0 : r6.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s5 = k2.ui) ? void 0 : s5.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u3 = k2.ui) ? void 0 : u3.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (i8 = k2.ui) ? void 0 : i8.itemLabel, ze2(t8) && (null == (o5 = t8.ui) ? void 0 : o5.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n6 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r5 = k2.ui) ? void 0 : r5.itemTrailing, ze2(t8) && (null == (s4 = t8.ui) ? void 0 : s4.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n6 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, i9;
                    return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i9 = t8.ui) ? void 0 : i9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), me2.value && "bottom" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re), Wt.mergeProps({ key: 0 }, $2.value, { class: ne2.value.arrow({ class: null == (i5 = k2.ui) ? void 0 : i5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        i4(om.ssrRenderComponent(Wt.unref(se), Wt.mergeProps({ class: ne2.value.content({ class: null == (r3 = k2.ui) ? void 0 : r3.content }) }, T2.value), { default: Wt.withCtx((t5, i5, n5, o4) => {
          var r4, s3, u2, c2;
          if (!i5) return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ne2.value.focusScope({ class: null == (u2 = k2.ui) ? void 0 : u2.focusScope }) }, { default: Wt.withCtx(() => {
            var t6, i6;
            return [Wt.renderSlot(a3.$slots, "content-top"), l2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref(he), { key: 0, modelValue: V2.value, "onUpdate:modelValue": (e2) => V2.value = e2, "display-value": () => V2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (a4 = k2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(ue), { class: ne2.value.empty({ class: null == (t6 = k2.ui) ? void 0 : t6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ne2.value.viewport({ class: null == (i6 = k2.ui) ? void 0 : i6.viewport }) }, [me2.value && "top" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ve2.value, (t7, i7) => {
              var n6;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(fe), { key: `group-${i7}`, class: ne2.value.group({ class: null == (n6 = k2.ui) ? void 0 : n6.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, n7) => {
                var o5, r5, s4, u3, c3, v2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i7}-${n7}` }, [ze2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: ne2.value.label({ class: [null == (o5 = k2.ui) ? void 0 : o5.label, null == (r5 = t8.ui) ? void 0 : r5.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ze2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: ne2.value.separator({ class: [null == (s4 = k2.ui) ? void 0 : s4.separator, null == (u3 = t8.ui) ? void 0 : u3.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: ne2.value.item({ class: [null == (c3 = k2.ui) ? void 0 : c3.item, ze2(t8) && (null == (v2 = t8.ui) ? void 0 : v2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n7 }, () => {
                  var i8, o6, r6, s5;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n7 }, () => {
                    var l3, a4, i9, n8, o7, r7, s6, u4, d2;
                    return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n8 = k2.ui) ? void 0 : n8.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o7 = k2.ui) ? void 0 : o7.itemLeadingAvatar, null == (r7 = t8.ui) ? void 0 : r7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s6 = k2.ui) ? void 0 : s6.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u4 = k2.ui) ? void 0 : u4.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (i8 = k2.ui) ? void 0 : i8.itemLabel, ze2(t8) && (null == (o6 = t8.ui) ? void 0 : o6.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r6 = k2.ui) ? void 0 : r6.itemTrailing, ze2(t8) && (null == (s5 = t8.ui) ? void 0 : s5.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n7 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, i9;
                    return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i9 = t8.ui) ? void 0 : i9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), me2.value && "bottom" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), l2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re), Wt.mergeProps({ key: 0 }, $2.value, { class: ne2.value.arrow({ class: null == (c2 = k2.ui) ? void 0 : c2.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          i5(om.ssrRenderComponent(Wt.unref(E), { trapped: "", class: ne2.value.focusScope({ class: null == (r4 = k2.ui) ? void 0 : r4.focusScope }) }, { default: Wt.withCtx((t6, i6, n6, o5) => {
            var r5, s4, u3, c3;
            if (!i6) return [Wt.renderSlot(a3.$slots, "content-top"), l2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref(he), { key: 0, modelValue: V2.value, "onUpdate:modelValue": (e2) => V2.value = e2, "display-value": () => V2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (a4 = k2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(ue), { class: ne2.value.empty({ class: null == (u3 = k2.ui) ? void 0 : u3.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ne2.value.viewport({ class: null == (c3 = k2.ui) ? void 0 : c3.viewport }) }, [me2.value && "top" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ve2.value, (t7, i7) => {
              var n7;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(fe), { key: `group-${i7}`, class: ne2.value.group({ class: null == (n7 = k2.ui) ? void 0 : n7.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, n8) => {
                var o6, r6, s5, u4, c4, v2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${i7}-${n8}` }, [ze2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: ne2.value.label({ class: [null == (o6 = k2.ui) ? void 0 : o6.label, null == (r6 = t8.ui) ? void 0 : r6.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ze2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: ne2.value.separator({ class: [null == (s5 = k2.ui) ? void 0 : s5.separator, null == (u4 = t8.ui) ? void 0 : u4.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: ne2.value.item({ class: [null == (c4 = k2.ui) ? void 0 : c4.item, ze2(t8) && (null == (v2 = t8.ui) ? void 0 : v2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n8 }, () => {
                  var i8, o7, r7, s6;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n8 }, () => {
                    var l3, a4, i9, n9, o8, r8, s7, u5, d2;
                    return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n9 = k2.ui) ? void 0 : n9.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o8 = k2.ui) ? void 0 : o8.itemLeadingAvatar, null == (r8 = t8.ui) ? void 0 : r8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s7 = k2.ui) ? void 0 : s7.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u5 = k2.ui) ? void 0 : u5.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (i8 = k2.ui) ? void 0 : i8.itemLabel, ze2(t8) && (null == (o7 = t8.ui) ? void 0 : o7.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n8 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r7 = k2.ui) ? void 0 : r7.itemTrailing, ze2(t8) && (null == (s6 = t8.ui) ? void 0 : s6.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n8 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, i9;
                    return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i9 = t8.ui) ? void 0 : i9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), me2.value && "bottom" === ge2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(ie2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
            om.ssrRenderSlot(a3.$slots, "content-top", {}, null, i6, n6, o5), l2.searchInput ? i6(om.ssrRenderComponent(Wt.unref(he), { modelValue: V2.value, "onUpdate:modelValue": (e2) => V2.value = e2, "display-value": () => V2.value, "as-child": "" }, { default: Wt.withCtx((a4, t7, i7, n7) => {
              var o6, r6;
              if (!t7) return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (r6 = k2.ui) ? void 0 : r6.input }) }), null, 16, ["size", "class"])];
              t7(om.ssrRenderComponent(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: l2.size }, A2.value, { class: ne2.value.input({ class: null == (o6 = k2.ui) ? void 0 : o6.input }) }), null, i7, n7));
            }), _: 2 }, n6, o5)) : i6("<!---->"), i6(om.ssrRenderComponent(Wt.unref(ue), { class: ne2.value.empty({ class: null == (r5 = k2.ui) ? void 0 : r5.empty }) }, { default: Wt.withCtx((l3, t7, i7, n7) => {
              if (!t7) return [Wt.renderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData")), 1)])];
              om.ssrRenderSlot(a3.$slots, "empty", { searchTerm: V2.value }, () => {
                t7(`${om.ssrInterpolate(V2.value ? Wt.unref(w2)("selectMenu.noMatch", { searchTerm: V2.value }) : Wt.unref(w2)("selectMenu.noData"))}`);
              }, t7, i7, n7);
            }), _: 2 }, n6, o5)), i6(`<div role="presentation" class="${om.ssrRenderClass(ne2.value.viewport({ class: null == (s4 = k2.ui) ? void 0 : s4.viewport }))}"${o5}>`), me2.value && "top" === ge2.value ? i6(om.ssrRenderComponent(Wt.unref(ie2), null, null, n6, o5)) : i6("<!---->"), i6("<!--[-->"), om.ssrRenderList(ve2.value, (t7, r6) => {
              var s5;
              i6(om.ssrRenderComponent(Wt.unref(fe), { key: `group-${r6}`, class: ne2.value.group({ class: null == (s5 = k2.ui) ? void 0 : s5.group }) }, { default: Wt.withCtx((i7, n7, o6, s6) => {
                if (!n7) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, i8) => {
                  var n8, o7, s7, u4, c4, v2;
                  return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${r6}-${i8}` }, [ze2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: ne2.value.label({ class: [null == (n8 = k2.ui) ? void 0 : n8.label, null == (o7 = t8.ui) ? void 0 : o7.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ze2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: ne2.value.separator({ class: [null == (s7 = k2.ui) ? void 0 : s7.separator, null == (u4 = t8.ui) ? void 0 : u4.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: ne2.value.item({ class: [null == (c4 = k2.ui) ? void 0 : c4.item, ze2(t8) && (null == (v2 = t8.ui) ? void 0 : v2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: i8 }, () => {
                    var n9, o8, r7, s8;
                    return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: i8 }, () => {
                      var l3, a4, i9, n10, o9, r8, s9, u5, d2;
                      return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n10 = k2.ui) ? void 0 : n10.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o9 = k2.ui) ? void 0 : o9.itemLeadingAvatar, null == (r8 = t8.ui) ? void 0 : r8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s9 = k2.ui) ? void 0 : s9.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u5 = k2.ui) ? void 0 : u5.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                    }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (n9 = k2.ui) ? void 0 : n9.itemLabel, ze2(t8) && (null == (o8 = t8.ui) ? void 0 : o8.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: i8 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r7 = k2.ui) ? void 0 : r7.itemTrailing, ze2(t8) && (null == (s8 = t8.ui) ? void 0 : s8.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: i8 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                      var a4, i9;
                      return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i9 = t8.ui) ? void 0 : i9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                    }), _: 2 }, 1024)], 2)];
                  })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
                }), 128))];
                n7("<!--[-->"), om.ssrRenderList(t7, (t8, i8) => {
                  var r7, u4, c4, g2, h2, y2;
                  n7("<!--[-->"), ze2(t8) && "label" === t8.type ? n7(om.ssrRenderComponent(Wt.unref(Se), { class: ne2.value.label({ class: [null == (r7 = k2.ui) ? void 0 : r7.label, null == (u4 = t8.ui) ? void 0 : u4.label, t8.class] }) }, { default: Wt.withCtx((l3, a4, i9, n8) => {
                    if (!a4) return [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(t8, k2.labelKey)), 1)];
                    a4(`${om.ssrInterpolate(Wt.unref(pg)(t8, k2.labelKey))}`);
                  }), _: 2 }, o6, s6)) : ze2(t8) && "separator" === t8.type ? n7(om.ssrRenderComponent(Wt.unref(we), { class: ne2.value.separator({ class: [null == (c4 = k2.ui) ? void 0 : c4.separator, null == (g2 = t8.ui) ? void 0 : g2.separator, t8.class] }) }, null, o6, s6)) : n7(om.ssrRenderComponent(Wt.unref(xe), { class: ne2.value.item({ class: [null == (h2 = k2.ui) ? void 0 : h2.item, ze2(t8) && (null == (y2 = t8.ui) ? void 0 : y2.item), ze2(t8) && t8.class] }), disabled: ze2(t8) && t8.disabled, value: k2.valueKey && ze2(t8) ? Wt.unref(pg)(t8, k2.valueKey) : t8, onSelect: (e2) => Be2(e2, t8) }, { default: Wt.withCtx((n8, o7, r8, s7) => {
                    if (!o7) return [Wt.renderSlot(a3.$slots, "item", { item: t8, index: i8 }, () => {
                      var n9, o8, r9, s8;
                      return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: i8 }, () => {
                        var l3, a4, i9, n10, o9, r10, s9, u5, d2;
                        return [ze2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ze2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n10 = k2.ui) ? void 0 : n10.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (o9 = k2.ui) ? void 0 : o9.itemLeadingAvatar, null == (r10 = t8.ui) ? void 0 : r10.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ze2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (s9 = k2.ui) ? void 0 : s9.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (u5 = k2.ui) ? void 0 : u5.itemLeadingChip, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                      }), Wt.createVNode("span", { class: ne2.value.itemLabel({ class: [null == (n9 = k2.ui) ? void 0 : n9.itemLabel, ze2(t8) && (null == (o8 = t8.ui) ? void 0 : o8.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: i8 }, () => [Wt.createTextVNode(Wt.toDisplayString(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ne2.value.itemTrailing({ class: [null == (r9 = k2.ui) ? void 0 : r9.itemTrailing, ze2(t8) && (null == (s8 = t8.ui) ? void 0 : s8.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: i8 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                        var a4, i9;
                        return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (a4 = k2.ui) ? void 0 : a4.itemTrailingIcon, ze2(t8) && (null == (i9 = t8.ui) ? void 0 : i9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                      }), _: 2 }, 1024)], 2)];
                    })];
                    om.ssrRenderSlot(a3.$slots, "item", { item: t8, index: i8 }, () => {
                      var n9, u5, c5, g3;
                      om.ssrRenderSlot(a3.$slots, "item-leading", { item: t8, index: i8 }, () => {
                        var l3, a4, i9, n10, u6, d2, c6, g4, h3;
                        ze2(t8) && t8.icon ? o7(om.ssrRenderComponent(hb, { name: t8.icon, class: ne2.value.itemLeadingIcon({ class: [null == (l3 = k2.ui) ? void 0 : l3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, r8, s7)) : ze2(t8) && t8.avatar ? o7(om.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (i9 = t8.ui) ? void 0 : i9.itemLeadingAvatarSize) || (null == (n10 = k2.ui) ? void 0 : n10.itemLeadingAvatarSize) || ne2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ne2.value.itemLeadingAvatar({ class: [null == (u6 = k2.ui) ? void 0 : u6.itemLeadingAvatar, null == (d2 = t8.ui) ? void 0 : d2.itemLeadingAvatar] }) }), null, r8, s7)) : ze2(t8) && t8.chip ? o7(om.ssrRenderComponent(bb, Wt.mergeProps({ size: (null == (c6 = k2.ui) ? void 0 : c6.itemLeadingChipSize) || ne2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ne2.value.itemLeadingChip({ class: [null == (g4 = k2.ui) ? void 0 : g4.itemLeadingChip, null == (h3 = t8.ui) ? void 0 : h3.itemLeadingChip] }) }), null, r8, s7)) : o7("<!---->");
                      }, o7, r8, s7), o7(`<span class="${om.ssrRenderClass(ne2.value.itemLabel({ class: [null == (n9 = k2.ui) ? void 0 : n9.itemLabel, ze2(t8) && (null == (u5 = t8.ui) ? void 0 : u5.itemLabel)] }))}"${s7}>`), om.ssrRenderSlot(a3.$slots, "item-label", { item: t8, index: i8 }, () => {
                        o7(`${om.ssrInterpolate(ze2(t8) ? Wt.unref(pg)(t8, k2.labelKey) : t8)}`);
                      }, o7, r8, s7), o7(`</span><span class="${om.ssrRenderClass(ne2.value.itemTrailing({ class: [null == (c5 = k2.ui) ? void 0 : c5.itemTrailing, ze2(t8) && (null == (g3 = t8.ui) ? void 0 : g3.itemTrailing)] }))}"${s7}>`), om.ssrRenderSlot(a3.$slots, "item-trailing", { item: t8, index: i8 }, null, o7, r8, s7), o7(om.ssrRenderComponent(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx((a4, i9, n10, o8) => {
                        var r9, s8, u6, d2;
                        if (!i9) return [Wt.createVNode(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (u6 = k2.ui) ? void 0 : u6.itemTrailingIcon, ze2(t8) && (null == (d2 = t8.ui) ? void 0 : d2.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                        i9(om.ssrRenderComponent(hb, { name: l2.selectedIcon || Wt.unref(L2).ui.icons.check, class: ne2.value.itemTrailingIcon({ class: [null == (r9 = k2.ui) ? void 0 : r9.itemTrailingIcon, ze2(t8) && (null == (s8 = t8.ui) ? void 0 : s8.itemTrailingIcon)] }) }, null, n10, o8));
                      }), _: 2 }, r8, s7)), o7("</span>");
                    }, o7, r8, s7);
                  }), _: 2 }, o6, s6)), n7("<!--]-->");
                }), n7("<!--]-->");
              }), _: 2 }, n6, o5));
            }), i6("<!--]-->"), me2.value && "bottom" === ge2.value ? i6(om.ssrRenderComponent(Wt.unref(ie2), null, null, n6, o5)) : i6("<!---->"), i6("</div>"), om.ssrRenderSlot(a3.$slots, "content-bottom", {}, null, i6, n6, o5);
          }), _: 2 }, n5, o4)), l2.arrow ? i5(om.ssrRenderComponent(Wt.unref(re), Wt.mergeProps($2.value, { class: ne2.value.arrow({ class: null == (s3 = k2.ui) ? void 0 : s3.arrow }) }), null, n5, o4)) : i5("<!---->");
        }), _: 2 }, n4, o3));
      }), _: 2 }, o2, r2));
    }), _: 3 }, i2)), t2("<!--]-->");
  };
} }), _e = ze.setup;
ze.setup = (l2, a2) => {
  const t2 = Wt.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue"), _e ? _e(l2, a2) : void 0;
};

export { Ce as C, Le as L, Se as S, Ve as V, W, X, ae as a, fe as f, he as h, re as r, se as s, ue as u, we as w, xe as x, ze as z };
//# sourceMappingURL=SelectMenu-Dc6b35ZD.mjs.map

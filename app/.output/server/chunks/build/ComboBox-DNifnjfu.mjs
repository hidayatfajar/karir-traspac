import { v as Wt, p as Qs, s as pm, _ as Ob, b as gb, o as _s, q as Zo, x as aa, u as da, r as Bm, e as sg, i as Am, j as Pm, t as Ky, y as yg, g as fg, z as gg, d as _b, A as Sb, n as Re$1, P as _m, B as ag, a as Tm } from './server.mjs';
import { k as hash, l as defu, j as isEqual } from '../_/nitro.mjs';
import { r, l } from './useToast-BU_XT8o3.mjs';
import { v } from './index-yQmnmHk3.mjs';
import { l as l$1 } from './useLocale-DRieL7bI.mjs';
import { i, s, u as u$1 } from './usePortal-B0EwXMSu.mjs';
import { F, T, C, r as r$1, N, x, m } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { u, c as c$1 } from './Presence-D-YonBfP.mjs';
import { $ as $e$1, H as He$1, N as Ne$1, j as je$1 } from './PopperArrow-DHFd-Rdx.mjs';
import { t } from './usePrimitiveElement-BYq1qwBL.mjs';
import { e } from './useDirection-D0ypspbM.mjs';
import { a, n } from './Collection-B86A2tPF.mjs';
import { o } from './utils-DfEv1peI.mjs';
import { n as n$2, a as a$1 } from './useTypeahead-BwB5DMSn.mjs';
import { n as n$1 } from './VisuallyHiddenInput-BYeJtXaU.mjs';
import { F as F$1 } from './useKbd-kRIii9yh.mjs';
import { r as r$2 } from './useArrowNavigation-Cic7byI7.mjs';
import { E, N as N$1, T as T$1 } from './useBodyScrollLock-DClI9ev0.mjs';
import { c } from './Input-B78WqLhZ.mjs';
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
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import './ConfigProvider-BpvNyuo1.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';

var oe = Re$1();
function re(e2, n2, o2) {
  const [r2 = {}, s2] = "string" == typeof n2 ? [{}, n2] : [n2, o2];
  return function(e3, n3, o3) {
    const [r3 = {}, s3] = "string" == typeof n3 ? [{}, n3] : [n3, o3], u2 = Wt.computed(() => Wt.toValue(e3)), d2 = Wt.computed(() => Wt.toValue(r3.key) || "$f" + hash([s3, "string" == typeof u2.value ? u2.value : "", ...se(r3)]));
    if (!r3.baseURL && "string" == typeof u2.value && "/" === u2.value[0] && "/" === u2.value[1]) throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const { server: c2, lazy: m2, default: v2, transform: p2, pick: g2, watch: f2, immediate: h2, getCachedData: y2, deep: b2, dedupe: x2, ...k2 } = r3, C2 = Wt.reactive({ ..._s, ...k2, cache: "boolean" == typeof r3.cache ? void 0 : r3.cache }), S2 = { server: c2, lazy: m2, default: v2, transform: p2, pick: g2, immediate: h2, getCachedData: y2, deep: b2, dedupe: x2, watch: false === f2 ? [] : [...f2 || [], C2] };
    if (!h2) {
      let e4 = function() {
        S2.immediate = true;
      };
      Wt.watch(d2, e4, { flush: "sync", once: true }), Wt.watch([...f2 || [], C2], e4, { flush: "sync", once: true });
    }
    let I2;
    return Zo(false === f2 ? d2.value : d2, () => {
      var e4;
      null == (e4 = null == I2 ? void 0 : I2.abort) || e4.call(I2, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), I2 = "undefined" != typeof AbortController ? new AbortController() : {};
      const a2 = Wt.toValue(r3.timeout);
      let t2;
      a2 && (t2 = setTimeout(() => I2.abort(new DOMException("Request aborted due to timeout.", "AbortError")), a2), I2.signal.onabort = () => clearTimeout(t2));
      let n4 = r3.$fetch || globalThis.$fetch;
      return r3.$fetch || "string" == typeof u2.value && "/" === u2.value[0] && (!Wt.toValue(r3.baseURL) || "/" === Wt.toValue(r3.baseURL)[0]) && (n4 = aa()), n4(u2.value, { signal: I2.signal, ...C2 }).finally(() => {
        clearTimeout(t2);
      });
    }, S2);
  }(e2, { ...r2, lazy: true }, s2);
}
function se(e2) {
  var a2;
  const t2 = [(null == (a2 = Wt.toValue(e2.method)) ? void 0 : a2.toUpperCase()) || "GET", Wt.toValue(e2.baseURL)];
  for (const i2 of [e2.params || e2.query]) {
    const e3 = Wt.toValue(i2);
    if (!e3) continue;
    const a3 = {};
    for (const [t3, i3] of Object.entries(e3)) a3[Wt.toValue(t3)] = Wt.toValue(i3);
    t2.push(a3);
  }
  if (e2.body) {
    const a3 = Wt.toValue(e2.body);
    if (a3) if (a3 instanceof ArrayBuffer) t2.push(hash(Object.fromEntries([...new Uint8Array(a3).entries()].map(([e3, l2]) => [e3, l2.toString()]))));
    else if (a3 instanceof FormData) {
      const e3 = {};
      for (const l2 of a3.entries()) {
        const [a4, t3] = l2;
        e3[a4] = t3 instanceof File ? t3.name : t3;
      }
      t2.push(hash(e3));
    } else if (oe.isPlainObject(a3)) t2.push(hash(Wt.reactive(a3)));
    else try {
      t2.push(hash(a3));
    } catch {
      console.warn("[useFetch] Failed to hash body", a3);
    }
    else t2.push(hash(a3));
  }
  return t2;
}
const ue = Wt.defineComponent({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(e2) {
  const { forwardRef: a2 } = N();
  return (e3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(He$1), { "as-child": "", reference: e3.reference }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), Wt.mergeProps({ ref: Wt.unref(a2), "as-child": e3.asChild, as: e3.as }, e3.$attrs), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} });
function de(e2) {
  const a2 = Wt.computed(() => Wt.unref(e2)), t2 = Wt.computed(() => new Intl.Collator("en", { usage: "search", ...a2.value }));
  return { startsWith: (e3, l2) => 0 === l2.length || (e3 = e3.normalize("NFC"), l2 = l2.normalize("NFC"), 0 === t2.value.compare(e3.slice(0, l2.length), l2)), endsWith: (e3, l2) => 0 === l2.length || (e3 = e3.normalize("NFC"), l2 = l2.normalize("NFC"), 0 === t2.value.compare(e3.slice(-l2.length), l2)), contains: (e3, l2) => {
    if (0 === l2.length) return true;
    e3 = e3.normalize("NFC");
    let a3 = 0;
    const i2 = (l2 = l2.normalize("NFC")).length;
    for (; a3 + i2 <= e3.length; a3++) {
      const n2 = e3.slice(a3, a3 + i2);
      if (0 === t2.value.compare(l2, n2)) return true;
    }
    return false;
  } };
}
function ce(e2, l2, a2) {
  return void 0 !== e2 && void 0 !== l2 && ("string" == typeof e2 ? e2 === l2 : "function" == typeof a2 ? a2(e2, l2) : "string" == typeof a2 ? (null == e2 ? void 0 : e2[a2]) === (null == l2 ? void 0 : l2[a2]) : isEqual(e2, l2));
}
const [me, ve] = T("ListboxRoot"), pe = Wt.defineComponent({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(e2, { expose: a2, emit: t2 }) {
  var _a;
  const i2 = e2, o2 = t2, { multiple: r2, highlightOnHover: s2, orientation: u2, disabled: d2, selectionBehavior: c2, dir: m2 } = Wt.toRefs(i2), { getItems: v2 } = n({ isProvider: true }), { handleTypeaheadSearch: p2 } = n$2(), { primitiveElement: g2, currentElement: f2 } = t(), h2 = F$1(), y2 = e(m2), b2 = a(f2), x2 = Wt.ref(), k2 = Wt.ref(false), C2 = Wt.ref(true), B2 = C(i2, "modelValue", o2, { defaultValue: (_a = i2.defaultValue) != null ? _a : r2.value ? [] : void 0, passive: void 0 === i2.modelValue, deep: true });
  const I2 = Wt.ref(null), V2 = Wt.ref(null), w2 = Wt.ref(false), L2 = Wt.ref(false), z2 = r$1(), _2 = r$1(), T2 = r$1();
  function $2() {
    return v2().map((e3) => e3.ref).filter((e3) => "" !== e3.dataset.disabled);
  }
  function N2(e3, l2 = true) {
    if (!e3) return;
    I2.value = e3, C2.value && I2.value.focus(), l2 && I2.value.scrollIntoView({ block: "nearest" });
    const a3 = v2().find((l3) => l3.ref === e3);
    o2("highlight", a3);
  }
  function A2() {
    Wt.nextTick(() => {
      q2(new KeyboardEvent("keydown", { key: "PageUp" }));
    });
  }
  function K2(e3) {
    const l2 = I2.value;
    (null == l2 ? void 0 : l2.isConnected) && (V2.value = l2), I2.value = null, o2("leave", e3);
  }
  function q2(e3) {
    const l2 = o(e3, u2.value, y2.value);
    if (!l2) return;
    let a3 = $2();
    if (I2.value) {
      if ("last" === l2) a3.reverse();
      else if ("prev" === l2 || "next" === l2) {
        "prev" === l2 && a3.reverse();
        const e4 = a3.indexOf(I2.value);
        a3 = a3.slice(e4 + 1);
      }
      !function(e4, l3) {
        var a4;
        if (w2.value || "replace" !== i2.selectionBehavior || !r2.value || !Array.isArray(B2.value)) return;
        const t3 = e4.altKey || e4.ctrlKey || e4.metaKey;
        if (t3 && !e4.shiftKey) return;
        if (e4.shiftKey) {
          const t4 = v2().filter((e5) => "" !== e5.ref.dataset.disabled);
          let i3 = null == (a4 = t4.find((e5) => e5.ref === l3)) ? void 0 : a4.value;
          if (e4.key === h2.END ? i3 = t4[t4.length - 1].value : e4.key === h2.HOME && (i3 = t4[0].value), !i3 || !x2.value) return;
          const n2 = function(e5, l4, a5) {
            const t5 = e5.findIndex((e6) => isEqual(e6, l4)), i4 = e5.findIndex((e6) => isEqual(e6, a5));
            if (-1 === t5 || -1 === i4) return [];
            const [n3, o3] = [t5, i4].sort((e6, l5) => e6 - l5);
            return e5.slice(n3, o3 + 1);
          }(t4.map((e5) => e5.value), x2.value, i3);
          B2.value = n2;
        }
      }(e3, a3[0]);
    }
    if (a3.length) {
      N2(a3[I2.value || "prev" !== l2 ? 0 : a3.length - 1]);
    }
    return w2.value ? _2.trigger(e3) : void 0;
  }
  async function P2(e3) {
    if (await Wt.nextTick(), w2.value) z2.trigger(e3);
    else {
      const e4 = $2(), l2 = e4.find((e5) => "checked" === e5.dataset.state);
      l2 ? N2(l2) : e4.length && N2(e4[0]);
    }
  }
  return Wt.watch(B2, () => {
    k2.value || Wt.nextTick(() => {
      P2();
    });
  }, { immediate: true, deep: true }), a2({ highlightedElement: I2, highlightItem: function(e3) {
    if (w2.value) T2.trigger(e3);
    else {
      const l2 = v2().find((l3) => ce(l3.value, e3, i2.by));
      l2 && (I2.value = l2.ref, N2(l2.ref));
    }
  }, highlightFirstItem: A2, highlightSelected: P2, getItems: v2 }), ve({ modelValue: B2, onValueChange: function(e3) {
    if (k2.value = true, i2.multiple) {
      const l2 = Array.isArray(B2.value) ? [...B2.value] : [], a3 = l2.findIndex((l3) => ce(l3, e3, i2.by));
      "toggle" === i2.selectionBehavior ? (-1 === a3 ? l2.push(e3) : l2.splice(a3, 1), B2.value = l2) : (B2.value = [e3], x2.value = e3);
    } else "toggle" === i2.selectionBehavior && ce(B2.value, e3, i2.by) ? B2.value = void 0 : B2.value = e3;
    setTimeout(() => {
      k2.value = false;
    }, 1);
  }, multiple: r2, orientation: u2, dir: y2, disabled: d2, highlightOnHover: s2, highlightedElement: I2, isVirtual: w2, virtualFocusHook: z2, virtualKeydownHook: _2, virtualHighlightHook: T2, by: i2.by, firstValue: x2, selectionBehavior: c2, focusable: C2, onLeave: K2, onEnter: function(e3) {
    var l2, a3;
    const t3 = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if (null == (l2 = e3.currentTarget) || l2.dispatchEvent(t3), o2("entryFocus", t3), !t3.defaultPrevented) if (V2.value) N2(V2.value);
    else {
      N2(null == (a3 = $2()) ? void 0 : a3[0]);
    }
  }, changeHighlight: N2, onKeydownEnter: function(e3) {
    I2.value && I2.value.isConnected && (e3.preventDefault(), e3.stopPropagation(), L2.value || I2.value.click());
  }, onKeydownNavigation: q2, onKeydownTypeAhead: function(e3) {
    if (C2.value) {
      if (k2.value = true, w2.value) _2.trigger(e3);
      else {
        const l2 = e3.altKey || e3.ctrlKey || e3.metaKey;
        if (l2 && "a" === e3.key && r2.value) {
          const l3 = v2(), a3 = l3.map((e4) => e4.value);
          B2.value = [...a3], e3.preventDefault(), N2(l3[l3.length - 1].ref);
        } else if (!l2) {
          const l3 = p2(e3.key, v2());
          l3 && N2(l3);
        }
      }
      setTimeout(() => {
        k2.value = false;
      }, 1);
    }
  }, onCompositionStart: function() {
    L2.value = true;
  }, onCompositionEnd: function() {
    requestAnimationFrame(() => {
      L2.value = false;
    });
  }, highlightFirstItem: A2 }), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref_key: "primitiveElement", ref: g2, as: e3.as, "as-child": e3.asChild, dir: Wt.unref(y2), "data-disabled": Wt.unref(d2) ? "" : void 0, onPointerleave: K2, onFocusout: a3[0] || (a3[0] = async (e4) => {
    const a4 = e4.relatedTarget || e4.target;
    await Wt.nextTick(), I2.value && Wt.unref(f2) && !Wt.unref(f2).contains(a4) && K2(e4);
  }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { modelValue: Wt.unref(B2) }), Wt.unref(b2) && e3.name ? (Wt.openBlock(), Wt.createBlock(Wt.unref(n$1), { key: 0, name: e3.name, value: Wt.unref(B2), disabled: Wt.unref(d2), required: e3.required }, null, 8, ["name", "value", "disabled", "required"])) : Wt.createCommentVNode("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [ge, fe] = T("ComboboxRoot"), he = Wt.defineComponent({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(e2, { expose: a2, emit: t2 }) {
  var _a;
  var i2, n2, o2;
  const r2 = e2, s2 = t2, { primitiveElement: u2, currentElement: d2 } = t(), { multiple: c2, disabled: m2, ignoreFilter: v2, resetSearchTermOnSelect: p2, dir: g2 } = Wt.toRefs(r2), f2 = e(g2), h2 = C(r2, "modelValue", s2, { defaultValue: (_a = r2.defaultValue) != null ? _a : c2.value ? [] : void 0, passive: void 0 === r2.modelValue, deep: true }), y2 = C(r2, "open", s2, { defaultValue: r2.defaultOpen, passive: void 0 === r2.open });
  const b2 = r$1(), x2 = Wt.ref(false), k2 = Wt.ref(false), C2 = Wt.ref(), B2 = Wt.ref(), S2 = Wt.computed(() => {
    var _a2;
    var e3;
    return (_a2 = null == (e3 = u2.value) ? void 0 : e3.highlightedElement) != null ? _a2 : void 0;
  }), I2 = Wt.ref(/* @__PURE__ */ new Map()), V2 = Wt.ref(/* @__PURE__ */ new Map()), { contains: w2 } = de({ sensitivity: "base" }), L2 = Wt.reactive({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function z2() {
    if (!L2.search || r2.ignoreFilter || k2.value) return void (L2.filtered.count = I2.value.size);
    L2.filtered.groups = /* @__PURE__ */ new Set();
    let e3 = 0;
    for (const [l2, a3] of I2.value) {
      const t3 = w2(a3, L2.search);
      L2.filtered.items.set(l2, t3 ? 1 : 0), t3 && e3++;
    }
    for (const [l2, a3] of V2.value) for (const e4 of a3) if (L2.filtered.items.get(e4) > 0) {
      L2.filtered.groups.add(l2);
      break;
    }
    L2.filtered.count = e3;
  }
  return Wt.watch([() => L2.search, () => I2.value.size], () => {
    z2();
  }, { immediate: true }), Wt.watch(() => y2.value, () => {
    Wt.nextTick(() => {
      y2.value && z2();
    });
  }, { flush: "post" }), Wt.getCurrentInstance(), a2({ filtered: Wt.computed(() => L2.filtered), highlightedElement: S2, highlightItem: null == (i2 = u2.value) ? void 0 : i2.highlightItem, highlightFirstItem: null == (n2 = u2.value) ? void 0 : n2.highlightFirstItem, highlightSelected: null == (o2 = u2.value) ? void 0 : o2.highlightSelected }), fe({ modelValue: h2, multiple: c2, disabled: m2, open: y2, onOpenChange: async function(e3) {
    var a3, t3;
    y2.value = e3, L2.search = "", e3 ? (await Wt.nextTick(), null == (a3 = u2.value) || a3.highlightSelected(), x2.value = true) : x2.value = false, null == (t3 = C2.value) || t3.focus(), setTimeout(() => {
      !e3 && r2.resetSearchTermOnBlur && b2.trigger();
    }, 1);
  }, contentId: "", isUserInputted: x2, isVirtual: k2, inputElement: C2, highlightedElement: S2, onInputElementChange: (e3) => C2.value = e3, triggerElement: B2, onTriggerElementChange: (e3) => B2.value = e3, parentElement: d2, resetSearchTermOnSelect: p2, onResetSearchTerm: b2.on, allItems: I2, allGroups: V2, filterState: L2, ignoreFilter: v2 }), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref($e$1), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(pe), Wt.mergeProps({ ref_key: "primitiveElement", ref: u2 }, e3.$attrs, { modelValue: Wt.unref(h2), "onUpdate:modelValue": a3[0] || (a3[0] = (e4) => Wt.isRef(h2) ? h2.value = e4 : null), style: { pointerEvents: Wt.unref(y2) ? "auto" : void 0 }, as: e3.as, "as-child": e3.asChild, dir: Wt.unref(f2), multiple: Wt.unref(c2), name: e3.name, required: e3.required, disabled: Wt.unref(m2), "highlight-on-hover": true, by: r2.by, onHighlight: a3[1] || (a3[1] = (e4) => s2("highlight", e4)) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { open: Wt.unref(y2), modelValue: Wt.unref(h2) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), ye = Wt.defineComponent({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(e2) {
  const { CollectionSlot: a2 } = n(), t2 = me(), i2 = m(false, 10);
  return (e3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(a2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { role: "listbox", as: e3.as, "as-child": e3.asChild, tabindex: Wt.unref(t2).focusable.value ? Wt.unref(t2).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": Wt.unref(t2).orientation.value, "aria-multiselectable": !!Wt.unref(t2).multiple.value, "data-orientation": Wt.unref(t2).orientation.value, onMousedown: o2[0] || (o2[0] = Wt.withModifiers((e4) => i2.value = true, ["left"])), onFocus: o2[1] || (o2[1] = (e4) => {
    Wt.unref(i2) || Wt.unref(t2).onEnter(e4);
  }), onKeydown: [o2[2] || (o2[2] = Wt.withKeys(Wt.withModifiers((e4) => {
    Wt.unref(t2).focusable.value && Wt.unref(t2).onKeydownNavigation(e4);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), Wt.withKeys(Wt.unref(t2).onKeydownEnter, ["enter"]), Wt.unref(t2).onKeydownTypeAhead] }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [be, xe] = T("ComboboxContent"), ke = Wt.defineComponent({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = a2, { position: r2 } = Wt.toRefs(t2), s2 = ge(), { forwardRef: u2 } = N();
  N$1(t2.bodyLock), T$1(s2.parentElement);
  const d2 = Wt.computed(() => "popper" === t2.position ? t2 : {}), c2 = Tm(d2.value), m2 = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  return xe({ position: r2 }), Wt.ref(false), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(ye), { "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(u$1), { "as-child": "", "disable-outside-pointer-events": e3.disableOutsidePointerEvents, onDismiss: a3[0] || (a3[0] = (e4) => Wt.unref(s2).onOpenChange(false)), onFocusOutside: a3[1] || (a3[1] = (e4) => {
    var a4;
    (null == (a4 = Wt.unref(s2).parentElement.value) ? void 0 : a4.contains(e4.target)) && e4.preventDefault(), i2("focusOutside", e4);
  }), onInteractOutside: a3[2] || (a3[2] = (e4) => i2("interactOutside", e4)), onEscapeKeyDown: a3[3] || (a3[3] = (e4) => i2("escapeKeyDown", e4)), onPointerDownOutside: a3[4] || (a3[4] = (e4) => {
    var a4;
    (null == (a4 = Wt.unref(s2).parentElement.value) ? void 0 : a4.contains(e4.target)) && e4.preventDefault(), i2("pointerDownOutside", e4);
  }) }, { default: Wt.withCtx(() => [(Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent("popper" === Wt.unref(r2) ? Wt.unref(je$1) : Wt.unref(_m)), Wt.mergeProps({ ...e3.$attrs, ...Wt.unref(c2) }, { id: Wt.unref(s2).contentId, ref: Wt.unref(u2), "data-state": Wt.unref(s2).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ..."popper" === Wt.unref(r2) ? m2 : {} } }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), Ce = Wt.defineComponent({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(e2) {
  const a2 = e2, t2 = ge(), i2 = be();
  return N(), (e3, n2) => Wt.unref(t2).open.value && "popper" === Wt.unref(i2).position.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ne$1), Wt.normalizeProps(Wt.mergeProps({ key: 0 }, a2)), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), Be = Wt.defineComponent({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e2, { emit: a2 }) {
  const t2 = F(e2, a2), { forwardRef: i2 } = N(), n2 = ge();
  return n2.contentId || (n2.contentId = u(void 0, "reka-combobox-content")), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(c$1), { present: e3.forceMount || Wt.unref(n2).open.value }, { default: Wt.withCtx(() => [Wt.createVNode(ke, Wt.mergeProps({ ...Wt.unref(t2), ...e3.$attrs }, { ref: Wt.unref(i2) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), Se = Wt.defineComponent({ __name: "ComboboxEmpty", props: { asChild: { type: Boolean }, as: {} }, setup(e2) {
  const a2 = e2, t2 = ge(), i2 = Wt.computed(() => t2.ignoreFilter.value ? 0 === t2.allItems.value.size : !!t2.filterState.search && 0 === t2.filterState.filtered.count);
  return (e3, t3) => i2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.normalizeProps(Wt.mergeProps({ key: 0 }, a2)), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", {}, () => [t3[0] || (t3[0] = Wt.createTextVNode("No options"))])]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), [Ie, Ve] = T("ListboxGroup"), we = Wt.defineComponent({ __name: "ListboxGroup", props: { asChild: { type: Boolean }, as: {} }, setup(e2) {
  const a2 = e2, t2 = u(void 0, "reka-listbox-group");
  return Ve({ id: t2 }), (e3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ role: "group" }, a2, { "aria-labelledby": Wt.unref(t2) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["aria-labelledby"]));
} }), [Le, ze] = T("ComboboxGroup"), _e = Wt.defineComponent({ __name: "ComboboxGroup", props: { asChild: { type: Boolean }, as: {} }, setup(e2) {
  const a2 = e2, t2 = u(void 0, "reka-combobox-group"), i2 = ge(), n2 = Wt.computed(() => !!i2.ignoreFilter.value || (!i2.filterState.search || i2.filterState.filtered.groups.has(t2))), o2 = ze({ id: t2, labelId: "" });
  return (e3, i3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(we), Wt.mergeProps({ id: Wt.unref(t2), "aria-labelledby": Wt.unref(o2).labelId }, a2, { hidden: !n2.value || void 0 }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "hidden"]));
} }), Te = Wt.defineComponent({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = C(t2, "modelValue", a2, { defaultValue: "", passive: void 0 === t2.modelValue }), o2 = me(), { primitiveElement: r2 } = t(), s2 = Wt.computed(() => t2.disabled || o2.disabled.value || false), u2 = Wt.ref();
  return Wt.watchSyncEffect(() => {
    var e3;
    return u2.value = null == (e3 = o2.highlightedElement.value) ? void 0 : e3.id;
  }), (e3, a3) => {
    var _a;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref_key: "primitiveElement", ref: r2, as: e3.as, "as-child": e3.asChild, value: Wt.unref(i2), disabled: s2.value ? "" : void 0, "data-disabled": s2.value ? "" : void 0, "aria-disabled": (_a = s2.value) != null ? _a : void 0, "aria-activedescendant": u2.value, type: "text", onKeydown: [Wt.withKeys(Wt.withModifiers(Wt.unref(o2).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), Wt.withKeys(Wt.unref(o2).onKeydownEnter, ["enter"])], onInput: a3[0] || (a3[0] = (e4) => {
      i2.value = e4.target.value, Wt.unref(o2).highlightFirstItem(e4);
    }), onCompositionstart: Wt.unref(o2).onCompositionStart, onCompositionend: Wt.unref(o2).onCompositionEnd }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { modelValue: Wt.unref(i2) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]);
  };
} }), $e = Wt.defineComponent({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = a2, n2 = ge(), o2 = me(), { primitiveElement: r2 } = t(), s2 = C(t2, "modelValue", i2, { passive: void 0 === t2.modelValue });
  function u2(e3) {
    n2.open.value || n2.onOpenChange(true);
  }
  function d2(e3) {
    const a3 = e3.target;
    n2.open.value ? n2.filterState.search = a3.value : (n2.onOpenChange(true), Wt.nextTick(() => {
      a3.value && (n2.filterState.search = a3.value, o2.highlightFirstItem(e3));
    }));
  }
  function c2() {
    const e3 = n2.modelValue.value;
    t2.displayValue ? s2.value = t2.displayValue(e3) : n2.multiple.value || !e3 || Array.isArray(e3) ? s2.value = "" : s2.value = "object" != typeof e3 ? e3.toString() : "", Wt.nextTick(() => {
      s2.value = s2.value;
    });
  }
  return n2.onResetSearchTerm(() => {
    c2();
  }), Wt.watch(n2.modelValue, async () => {
    !n2.isUserInputted.value && n2.resetSearchTermOnSelect.value && c2();
  }, { immediate: true, deep: true }), Wt.watch(() => t2.modelValue, () => {
    void 0 !== t2.modelValue && (n2.filterState.search = t2.modelValue);
  }), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(Te), { ref_key: "primitiveElement", ref: r2, modelValue: Wt.unref(s2), "onUpdate:modelValue": a3[0] || (a3[0] = (e4) => Wt.isRef(s2) ? s2.value = e4 : null), as: e3.as, "as-child": e3.asChild, "auto-focus": e3.autoFocus, "aria-expanded": Wt.unref(n2).open.value, "aria-controls": Wt.unref(n2).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: d2, onKeydown: Wt.withKeys(Wt.withModifiers(u2, ["prevent"]), ["down", "up"]) }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), [Ne, Ae] = T("ListboxItem"), Re = Wt.defineComponent({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = a2, o2 = u(void 0, "reka-listbox-item"), { CollectionItem: r2 } = n(), { forwardRef: s2, currentElement: u2 } = N(), d2 = me(), c2 = Wt.computed(() => u2.value === d2.highlightedElement.value), m2 = Wt.computed(() => {
    return e3 = d2.modelValue.value, l2 = t2.value, a3 = d2.by, void 0 !== e3 && (Array.isArray(e3) ? e3.some((e4) => ce(e4, l2, a3)) : ce(e3, l2, a3));
    var e3, l2, a3;
  }), v2 = Wt.computed(() => d2.disabled.value || t2.disabled);
  async function p2(e3) {
    i2("select", e3), (null == e3 ? void 0 : e3.defaultPrevented) || !v2.value && e3 && (d2.onValueChange(t2.value), d2.changeHighlight(u2.value));
  }
  function g2(e3) {
    const l2 = { originalEvent: e3, value: t2.value };
    a$1("listbox.select", p2, l2);
  }
  return Ae({ isSelected: m2 }), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(r2), { value: e3.value }, { default: Wt.withCtx(() => [Wt.withMemo([c2.value, m2.value], () => Wt.createVNode(Wt.unref(_m), Wt.mergeProps({ id: Wt.unref(o2) }, e3.$attrs, { ref: Wt.unref(s2), role: "option", tabindex: Wt.unref(d2).focusable.value ? c2.value ? "0" : "-1" : -1, "aria-selected": m2.value, as: e3.as, "as-child": e3.asChild, disabled: v2.value ? "" : void 0, "data-disabled": v2.value ? "" : void 0, "data-highlighted": c2.value ? "" : void 0, "data-state": m2.value ? "checked" : "unchecked", onClick: g2, onKeydown: Wt.withKeys(Wt.withModifiers(g2, ["prevent"]), ["space"]), onPointermove: a3[0] || (a3[0] = (e4) => {
    Wt.unref(d2).highlightedElement.value !== Wt.unref(u2) && (Wt.unref(d2).highlightOnHover.value ? Wt.unref(d2).changeHighlight(Wt.unref(u2), false) : Wt.unref(d2).focusable.value || Wt.unref(d2).changeHighlight(Wt.unref(u2), false));
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), a3, 1)]), _: 3 }, 8, ["value"]));
} }), De = Wt.defineComponent({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = a2, n2 = u(void 0, "reka-combobox-item"), o2 = ge();
  Le(null);
  const { primitiveElement: r2 } = t();
  if ("" === t2.value) throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const s2 = Wt.computed(() => {
    if (o2.isVirtual.value || o2.ignoreFilter.value || !o2.filterState.search) return true;
    {
      const e3 = o2.filterState.filtered.items.get(n2);
      return void 0 === e3 || e3 > 0;
    }
  });
  return (e3, a3) => s2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Re), Wt.mergeProps({ key: 0 }, t2, { id: Wt.unref(n2), ref_key: "primitiveElement", ref: r2, disabled: Wt.unref(o2).disabled.value || e3.disabled, onSelect: a3[0] || (a3[0] = (a4) => {
    i2("select", a4), a4.defaultPrevented || Wt.unref(o2).multiple.value || e3.disabled || Wt.unref(o2).disabled.value || (a4.preventDefault(), Wt.unref(o2).onOpenChange(false), Wt.unref(o2).modelValue.value = t2.value);
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(e3.value), 1)])]), _: 3 }, 16, ["id", "disabled"])) : Wt.createCommentVNode("", true);
} }), Ke = Wt.defineComponent({ __name: "ListboxItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const a2 = e2;
  N();
  const t2 = Ne();
  return (e3, i2) => Wt.unref(t2).isSelected.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ key: 0, "aria-hidden": "true" }, a2), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16)) : Wt.createCommentVNode("", true);
} }), qe = Wt.defineComponent({ __name: "ComboboxItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const a2 = e2;
  return (e3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(Ke), Wt.normalizeProps(Wt.guardReactiveProps(a2)), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16));
} }), Pe = Wt.defineComponent({ __name: "ComboboxLabel", props: { for: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(e2) {
  const a2 = e2;
  N();
  const t2 = Le({ id: "", labelId: "" });
  return t2.labelId || (t2.labelId = u(void 0, "reka-combobox-group-label")), (e3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(a2, { id: Wt.unref(t2).labelId }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Fe = Wt.defineComponent({ __name: "ComboboxPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(e2) {
  const a2 = e2;
  return (e3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(s), Wt.normalizeProps(Wt.guardReactiveProps(a2)), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16));
} }), Oe = Wt.defineComponent({ __name: "ComboboxSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(e2) {
  const a2 = e2;
  return N(), (e3, t2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(a2, { "aria-hidden": "true" }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16));
} }), Ee = Wt.defineComponent({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(e2) {
  const a2 = e2, { forwardRef: t2 } = N(), i2 = ge(), o2 = Wt.computed(() => a2.disabled || i2.disabled.value || false);
  return (e3, r2) => {
    var _a;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(a2, { ref: Wt.unref(t2), type: "button" === e3.as ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": Wt.unref(i2).open.value, "aria-controls": Wt.unref(i2).contentId, "data-state": Wt.unref(i2).open.value ? "open" : "closed", disabled: o2.value, "data-disabled": o2.value ? "" : void 0, "aria-disabled": (_a = o2.value) != null ? _a : void 0, onClick: r2[0] || (r2[0] = (e4) => Wt.unref(i2).onOpenChange(!Wt.unref(i2).open.value)) }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]);
  };
} }), [Me, je] = T("TagsInputRoot"), Ue = Wt.defineComponent({ __name: "TagsInputRoot", props: { modelValue: {}, defaultValue: { default: () => [] }, addOnPaste: { type: Boolean }, addOnTab: { type: Boolean }, addOnBlur: { type: Boolean }, duplicate: { type: Boolean }, disabled: { type: Boolean }, delimiter: { default: "," }, dir: {}, max: { default: 0 }, id: {}, convertValue: {}, displayValue: { type: Function, default: (e2) => e2.toString() }, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "invalid", "addTag", "removeTag"], setup(e2, { emit: a2 }) {
  const t2 = e2, i2 = a2, { addOnPaste: o2, disabled: r2, delimiter: s2, max: u2, id: d2, dir: c2, addOnBlur: m2, addOnTab: v2 } = Wt.toRefs(t2), p2 = e(c2), g2 = C(t2, "modelValue", i2, { defaultValue: t2.defaultValue, passive: true, deep: true }), { forwardRef: f2, currentElement: h2 } = N(), { focused: y2 } = x(h2), b2 = a(h2), { getItems: x2, CollectionSlot: k2 } = n({ isProvider: true }), C2 = Wt.ref(), B2 = Wt.ref(false), S2 = Wt.computed(() => Array.isArray(g2.value) ? [...g2.value] : []);
  function I2(e3) {
    if (-1 !== e3) {
      const l2 = x2().filter((e4) => "" !== e4.ref.dataset.disabled);
      g2.value = g2.value.filter((l3, a3) => a3 !== e3), i2("removeTag", l2[e3].value);
    }
  }
  return je({ modelValue: g2, onAddValue: (e3) => {
    const l2 = [...S2.value], a3 = l2.length > 0 && "object" == typeof l2[0], n2 = l2.length > 0 && "object" == typeof t2.defaultValue[0];
    if ((a3 || n2) && "function" != typeof t2.convertValue) throw new Error("You must provide a `convertValue` function when using objects as values.");
    const o3 = t2.convertValue ? t2.convertValue(e3) : e3;
    if (l2.length >= u2.value && u2.value) return i2("invalid", o3), false;
    if (t2.duplicate) return g2.value = [...l2, o3], i2("addTag", o3), true;
    if (!l2.includes(o3)) return g2.value = [...l2, o3], i2("addTag", o3), true;
    B2.value = true;
    return i2("invalid", o3), false;
  }, onRemoveValue: I2, onInputKeydown: (e3) => {
    const l2 = e3.target, a3 = x2().map((e4) => e4.ref).filter((e4) => "" !== e4.dataset.disabled);
    if (!a3.length) return;
    const t3 = a3.at(-1);
    switch (e3.key) {
      case "Delete":
      case "Backspace":
        if (0 !== l2.selectionStart || 0 !== l2.selectionEnd) break;
        if (C2.value) {
          const l3 = a3.findIndex((e4) => e4 === C2.value);
          I2(l3), C2.value = C2.value === t3 ? a3.at(l3 - 1) : a3.at(l3 + 1), e3.preventDefault();
        } else "Backspace" === e3.key && (C2.value = t3, e3.preventDefault());
        break;
      case "Home":
      case "End":
      case "ArrowRight":
      case "ArrowLeft": {
        const i3 = "ArrowRight" === e3.key && "ltr" === p2.value || "ArrowLeft" === e3.key && "rtl" === p2.value, n2 = !i3;
        if (0 !== l2.selectionStart || 0 !== l2.selectionEnd) break;
        if (n2 && !C2.value) C2.value = t3, e3.preventDefault();
        else if (i3 && t3 && C2.value === t3) C2.value = void 0, e3.preventDefault();
        else if (C2.value) {
          const l3 = r$2(e3, C2.value, void 0, { itemsArray: a3, loop: false, dir: p2.value });
          l3 && (C2.value = l3), e3.preventDefault();
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        C2.value && e3.preventDefault();
        break;
      default:
        C2.value = void 0;
    }
  }, selectedElement: C2, isInvalidInput: B2, addOnPaste: o2, addOnBlur: m2, addOnTab: v2, dir: p2, disabled: r2, delimiter: s2, max: u2, id: d2, displayValue: t2.displayValue }), (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(k2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { ref: Wt.unref(f2), dir: Wt.unref(p2), as: e3.as, "as-child": e3.asChild, "data-invalid": B2.value ? "" : void 0, "data-disabled": Wt.unref(r2) ? "" : void 0, "data-focused": Wt.unref(y2) ? "" : void 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { modelValue: Wt.unref(g2) }), Wt.unref(b2) && e3.name ? (Wt.openBlock(), Wt.createBlock(Wt.unref(n$1), { key: 0, name: e3.name, value: Wt.unref(g2), required: e3.required, disabled: Wt.unref(r2) }, null, 8, ["name", "value", "required", "disabled"])) : Wt.createCommentVNode("", true)]), _: 3 }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])]), _: 3 }));
} }), He = Wt.defineComponent({ __name: "TagsInputInput", props: { placeholder: {}, autoFocus: { type: Boolean }, maxLength: {}, asChild: { type: Boolean }, as: { default: "input" } }, setup(e2) {
  const a2 = Me(), { forwardRef: t2 } = N();
  function i2(e3) {
    if (a2.selectedElement.value = void 0, !a2.addOnBlur.value) return;
    const l2 = e3.target;
    if (!l2.value) return;
    a2.onAddValue(l2.value) && (l2.value = "");
  }
  function o2(e3) {
    a2.addOnTab.value && d2(e3);
  }
  const r2 = Wt.ref(false);
  function s2() {
    r2.value = true;
  }
  function u2() {
    requestAnimationFrame(() => {
      r2.value = false;
    });
  }
  async function d2(e3) {
    if (r2.value) return;
    if (await Wt.nextTick(), e3.defaultPrevented) return;
    const t3 = e3.target;
    if (!t3.value) return;
    a2.onAddValue(t3.value) && (t3.value = ""), e3.preventDefault();
  }
  function c2(e3) {
    if (a2.isInvalidInput.value = false, null === e3.data) return;
    const l2 = a2.delimiter.value;
    if (l2 === e3.data || l2 instanceof RegExp && l2.test(e3.data)) {
      const t3 = e3.target;
      t3.value = t3.value.replace(l2, "");
      a2.onAddValue(t3.value) && (t3.value = "");
    }
  }
  function m2(e3) {
    if (a2.addOnPaste.value) {
      e3.preventDefault();
      const l2 = e3.clipboardData;
      if (!l2) return;
      const t3 = l2.getData("text");
      if (a2.delimiter.value) {
        t3.split(a2.delimiter.value).forEach((e4) => {
          a2.onAddValue(e4);
        });
      } else a2.onAddValue(t3);
    }
  }
  return (e3, r3) => {
    var v2;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { id: null == (v2 = Wt.unref(a2).id) ? void 0 : v2.value, ref: Wt.unref(t2), type: "text", autocomplete: "off", autocorrect: "off", autocapitalize: "off", as: e3.as, "as-child": e3.asChild, maxlength: e3.maxLength, placeholder: e3.placeholder, disabled: Wt.unref(a2).disabled.value, "data-invalid": Wt.unref(a2).isInvalidInput.value ? "" : void 0, onInput: c2, onKeydown: [Wt.withKeys(d2, ["enter"]), Wt.withKeys(o2, ["tab"]), Wt.unref(a2).onInputKeydown], onBlur: i2, onCompositionstart: s2, onCompositionend: u2, onPaste: m2 }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
  };
} }), [Ge, We] = T("TagsInputItem"), Ye = Wt.defineComponent({ __name: "TagsInputItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(e2) {
  const a2 = e2, { value: t2 } = Wt.toRefs(a2), i2 = Me(), { forwardRef: o2, currentElement: r2 } = N(), { CollectionItem: s2 } = n(), u2 = Wt.computed(() => i2.selectedElement.value === r2.value), d2 = Wt.computed(() => a2.disabled || i2.disabled.value), c2 = We({ value: t2, isSelected: u2, disabled: d2, textId: "", displayValue: Wt.computed(() => i2.displayValue(t2.value)) });
  return (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(s2), { value: Wt.unref(t2) }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { ref: Wt.unref(o2), as: e3.as, "as-child": e3.asChild, "aria-labelledby": Wt.unref(c2).textId, "aria-current": u2.value, "data-disabled": d2.value ? "" : void 0, "data-state": u2.value ? "active" : "inactive" }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])]), _: 3 }, 8, ["value"]));
} }), Je = Wt.defineComponent({ __name: "TagsInputItemDelete", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(e2) {
  const a2 = e2;
  N();
  const t2 = Me(), i2 = Ge(), o2 = Wt.computed(() => {
    var e3;
    return (null == (e3 = i2.disabled) ? void 0 : e3.value) || t2.disabled.value;
  });
  function r2() {
    if (o2.value) return;
    const e3 = t2.modelValue.value.findIndex((e4) => isEqual(e4, i2.value.value));
    t2.onRemoveValue(e3);
  }
  return (e3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps({ tabindex: "-1" }, a2, { "aria-labelledby": Wt.unref(i2).textId, "aria-current": Wt.unref(i2).isSelected.value, "data-state": Wt.unref(i2).isSelected.value ? "active" : "inactive", "data-disabled": o2.value ? "" : void 0, type: "button" === e3.as ? "button" : void 0, onClick: r2 }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
} }), Qe = Wt.defineComponent({ __name: "TagsInputItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const a2 = e2, t2 = Ge();
  return N(), t2.textId || (t2.textId = u(void 0, "reka-tags-input-item-text")), (e3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(a2, { id: Wt.unref(t2).textId }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(t2).displayValue.value), 1)])]), _: 3 }, 16, ["id"]));
} }), Xe = { slots: { root: "relative inline-flex items-center", base: ["rounded-md", "transition-colors"], leading: "absolute inset-y-0 start-0 flex items-center", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75", trailingIcon: "shrink-0 text-dimmed", arrow: "fill-default", content: "max-h-60 w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col", viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: ["group relative w-full flex items-center gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"], itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemLabel: "truncate", tagsItem: "px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75", tagsItemText: "truncate", tagsItemDelete: ["inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none", "transition-colors"], tagsItemDeleteIcon: "shrink-0", tagsInput: "flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75" }, variants: { buttonGroup: { horizontal: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none" }, vertical: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none" } }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2", trailing: "pe-2", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", tagsItem: "text-[10px]/3", tagsItemDeleteIcon: "size-3", empty: "p-1 text-xs" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", tagsItem: "text-[10px]/3", tagsItemDeleteIcon: "size-3", empty: "p-1.5 text-xs" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", tagsItem: "text-xs", tagsItemDeleteIcon: "size-3.5", empty: "p-1.5 text-sm" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", tagsItem: "text-xs", tagsItemDeleteIcon: "size-3.5", empty: "p-2 text-sm" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailingIcon: "size-6", tagsItem: "text-sm", tagsItemDeleteIcon: "size-4", empty: "p-2 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" }, multiple: { true: { root: "flex-wrap" }, false: { base: "w-full border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75" } } }, compoundVariants: [{ variant: "soft", multiple: true, class: "has-focus:bg-elevated" }, { variant: "ghost", multiple: true, class: "has-focus:bg-elevated" }, { color: "primary", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-primary" }, { color: "secondary", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-secondary" }, { color: "success", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-success" }, { color: "info", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-info" }, { color: "warning", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-warning" }, { color: "error", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-error" }, { color: "neutral", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-inverted" }, { color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, Ze = Object.assign({ inheritAttrs: false }, { __name: "InputMenu", __ssrInlineRender: true, props: Wt.mergeModels({ as: { type: null, required: false }, id: { type: String, required: false }, type: { type: null, required: false, default: "text" }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, trailingIcon: { type: String, required: false }, selectedIcon: { type: String, required: false }, deleteIcon: { type: String, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: Wt.mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]), setup(e2, { expose: a2, emit: t2 }) {
  const i2 = e2, n2 = t2, o2 = Wt.useSlots(), k2 = Wt.useModel(e2, "searchTerm", { type: String, default: "" }), { t: C2 } = l$1(), B2 = da(), { contains: S2 } = de({ sensitivity: "base" }), V2 = F(Bm(i2, "as", "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover", "ignoreFilter"), n2), w2 = i(Wt.toRef(() => i2.portal)), _2 = Wt.toRef(() => defu(i2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" })), T2 = Wt.toRef(() => i2.arrow), { emitFormBlur: N2, emitFormFocus: A2, emitFormChange: R2, emitFormInput: D2, size: K2, color: P2, id: F2, name: O2, highlight: E2, disabled: M2, ariaAttrs: j2 } = sg(i2), { orientation: U2, size: H2 } = Am(i2), { isLeading: G2, isTrailing: W2, leadingIconName: Y2, trailingIconName: J2 } = Pm(Wt.toRef(() => defu(i2, { trailingIcon: B2.ui.icons.chevronDown }))), Q2 = Wt.computed(() => H2.value || K2.value), [X2, Z2] = v(), ee2 = Wt.computed(() => {
    var e3;
    return Ky({ extend: Ky(Xe), ...(null == (e3 = B2.ui) ? void 0 : e3.inputMenu) || {} })({ color: P2.value, variant: i2.variant, size: null == Q2 ? void 0 : Q2.value, loading: i2.loading, highlight: E2.value, leading: G2.value || !!i2.avatar || !!o2.leading, trailing: W2.value || !!o2.trailing, multiple: i2.multiple, buttonGroup: U2.value });
  });
  function le2(e3) {
    if (!i2.valueKey) return e3 && ("object" == typeof e3 ? fg(e3, i2.labelKey) : e3);
    const l2 = te2.value.find((l3) => gg("object" == typeof l3 ? fg(l3, i2.valueKey) : l3, e3));
    return l2 && ("object" == typeof l2 ? fg(l2, i2.labelKey) : l2);
  }
  const ae2 = Wt.computed(() => {
    var e3;
    return (null == (e3 = i2.items) ? void 0 : e3.length) ? yg(i2.items) ? i2.items : [i2.items] : [];
  }), te2 = Wt.computed(() => ae2.value.flatMap((e3) => e3)), ie2 = Wt.computed(() => {
    if (i2.ignoreFilter || !k2.value) return ae2.value;
    const e3 = Array.isArray(i2.filterFields) ? i2.filterFields : [i2.labelKey];
    return ae2.value.map((l2) => l2.filter((l3) => "object" != typeof l3 || null === l3 ? S2(String(l3), k2.value) : !(!l3.type || !["label", "separator"].includes(l3.type)) || e3.some((e4) => S2(fg(l3, e4), k2.value)))).filter((e4) => e4.filter((e5) => !ye2(e5) || !e5.type || !["label", "separator"].includes(e5.type)).length > 0);
  }), ne2 = Wt.computed(() => ie2.value.flatMap((e3) => e3)), oe2 = Wt.computed(() => {
    if (!i2.createItem || !k2.value) return false;
    const e3 = i2.valueKey ? { [i2.valueKey]: k2.value } : k2.value;
    return "object" == typeof i2.createItem && "always" === i2.createItem.when || "always" === i2.createItem ? !ne2.value.find((l2) => gg(l2, e3, i2.valueKey)) : !ne2.value.length;
  }), re2 = Wt.computed(() => "object" == typeof i2.createItem ? i2.createItem.position : "bottom"), se2 = Wt.ref(null);
  function ce2(e3) {
    if (Wt.toRaw(i2.modelValue) === e3) return;
    const a3 = new Event("change", { target: { value: e3 } });
    n2("change", a3), R2(), D2(), i2.resetSearchTermOnSelect && (k2.value = "");
  }
  function me2(e3) {
    n2("blur", e3), N2();
  }
  function ve2(e3) {
    n2("focus", e3), A2();
  }
  function pe2(e3) {
    let l2;
    if (e3) {
      const e4 = new FocusEvent("focus");
      n2("focus", e4), A2(), clearTimeout(l2);
    } else {
      const e4 = new FocusEvent("blur");
      if (n2("blur", e4), N2(), i2.resetSearchTermOnBlur) {
        l2 = setTimeout(() => {
          k2.value = "";
        }, 100);
      }
    }
  }
  function ge2(e3) {
    if (i2.multiple) {
      const l2 = i2.modelValue.filter((l3) => !ag(l3, e3));
      n2("update:modelValue", l2), ce2(l2);
    }
  }
  function fe2(e3, l2) {
    var a3;
    ye2(l2) && (l2.disabled ? e3.preventDefault() : null == (a3 = l2.onSelect) || a3.call(l2, e3));
  }
  function ye2(e3) {
    return "object" == typeof e3 && null !== e3;
  }
  return a2({ inputRef: se2 }), (a3, t3, r2, s2) => {
    var u2;
    t3("<!--[-->"), t3(pm.ssrRenderComponent(Wt.unref(X2), null, { default: Wt.withCtx((e3, t4, o3, r3) => {
      var s3, u3;
      if (!t4) return [Wt.createVNode(Wt.unref(_e), { class: ee2.value.group({ class: null == (u3 = i2.ui) ? void 0 : u3.group }) }, { default: Wt.withCtx(() => {
        var e4;
        return [Wt.createVNode(Wt.unref(De), { class: ee2.value.item({ class: null == (e4 = i2.ui) ? void 0 : e4.item }), value: k2.value, onSelect: Wt.withModifiers((e5) => n2("create", k2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(C2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
      }), _: 3 }, 8, ["class"])];
      t4(pm.ssrRenderComponent(Wt.unref(_e), { class: ee2.value.group({ class: null == (s3 = i2.ui) ? void 0 : s3.group }) }, { default: Wt.withCtx((e4, t5, o4, r4) => {
        var s4, u4;
        if (!t5) return [Wt.createVNode(Wt.unref(De), { class: ee2.value.item({ class: null == (u4 = i2.ui) ? void 0 : u4.item }), value: k2.value, onSelect: Wt.withModifiers((e5) => n2("create", k2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(C2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
        t5(pm.ssrRenderComponent(Wt.unref(De), { class: ee2.value.item({ class: null == (s4 = i2.ui) ? void 0 : s4.item }), value: k2.value, onSelect: (e5) => n2("create", k2.value) }, { default: Wt.withCtx((e5, t6, n3, o5) => {
          var r5, s5;
          if (!t6) return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (s5 = i2.ui) ? void 0 : s5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(C2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
          t6(`<span class="${pm.ssrRenderClass(ee2.value.itemLabel({ class: null == (r5 = i2.ui) ? void 0 : r5.itemLabel }))}"${o5}>`), pm.ssrRenderSlot(a3.$slots, "create-item-label", { item: k2.value }, () => {
            t6(`${pm.ssrInterpolate(Wt.unref(C2)("inputMenu.create", { label: k2.value }))}`);
          }, t6, n3, o5), t6("</span>");
        }), _: 3 }, o4, r4));
      }), _: 3 }, o3, r3));
    }), _: 3 }, r2)), t3(pm.ssrRenderComponent(Wt.unref(he), Wt.mergeProps({ id: Wt.unref(F2) }, Wt.unref(V2), { name: Wt.unref(O2), disabled: Wt.unref(M2), class: ee2.value.root({ class: [null == (u2 = i2.ui) ? void 0 : u2.root, i2.class] }), "as-child": !!e2.multiple, "ignore-filter": "", "onUpdate:modelValue": ce2, "onUpdate:open": pe2, onKeydown: (e3) => e3.preventDefault() }), { default: Wt.withCtx(({ modelValue: t4, open: n3 }, r3, s3, u3) => {
      var d2, c2;
      if (!r3) return [Wt.createVNode(Wt.unref(ue), { "as-child": !e2.multiple, class: ee2.value.base({ class: null == (c2 = i2.ui) ? void 0 : c2.base }) }, { default: Wt.withCtx(() => {
        var r4, s4;
        return [e2.multiple ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ue), { key: 0, "model-value": t4, disabled: Wt.unref(M2), required: e2.required, delimiter: "", "as-child": "", onBlur: me2, onFocus: ve2, onRemoveTag: ge2 }, { default: Wt.withCtx(({ modelValue: t5 }) => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t5, (t6, n4) => {
          var o3, r5;
          return Wt.openBlock(), Wt.createBlock(Wt.unref(Ye), { key: n4, value: t6, class: ee2.value.tagsItem({ class: [null == (o3 = i2.ui) ? void 0 : o3.tagsItem, ye2(t6) && (null == (r5 = t6.ui) ? void 0 : r5.tagsItem)] }) }, { default: Wt.withCtx(() => {
            var o4, r6, s5, u4;
            return [Wt.createVNode(Wt.unref(Qe), { class: ee2.value.tagsItemText({ class: [null == (o4 = i2.ui) ? void 0 : o4.tagsItemText, ye2(t6) && (null == (r6 = t6.ui) ? void 0 : r6.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-text", { item: t6, index: n4 }, () => [Wt.createTextVNode(Wt.toDisplayString(le2(t6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(Je), { class: ee2.value.tagsItemDelete({ class: [null == (s5 = i2.ui) ? void 0 : s5.tagsItemDelete, ye2(t6) && (null == (u4 = t6.ui) ? void 0 : u4.tagsItemDelete)] }), disabled: Wt.unref(M2) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: t6, index: n4 }, () => {
              var a4, n5;
              return [Wt.createVNode(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n5 = t6.ui) ? void 0 : n5.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
            })]), _: 2 }, 1032, ["class", "disabled"])];
          }), _: 2 }, 1032, ["value", "class"]);
        }), 128)), Wt.createVNode(Wt.unref($e), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
          var t6;
          return [Wt.createVNode(Wt.unref(He), Wt.mergeProps({ ref_key: "inputRef", ref: se2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { placeholder: e2.placeholder, class: ee2.value.tagsInput({ class: null == (t6 = i2.ui) ? void 0 : t6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
          }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
        }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2 }, 1032, ["model-value", "disabled", "required"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref($e), Wt.mergeProps({ key: 1, ref_key: "inputRef", ref: se2, "display-value": le2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: me2, onFocus: ve2, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, 16, ["type", "placeholder", "required", "onUpdate:modelValue"])), Wt.unref(G2) || e2.avatar || o2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 2, class: ee2.value.leading({ class: null == (r4 = i2.ui) ? void 0 : r4.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
          var a4, t5, n4;
          return [Wt.unref(G2) && Wt.unref(Y2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.unref(W2) || o2.trailing ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ee), { key: 3, class: ee2.value.trailing({ class: null == (s4 = i2.ui) ? void 0 : s4.trailing }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
          var e3;
          return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
      }), _: 2 }, 1032, ["as-child", "class"]), Wt.createVNode(Wt.unref(Fe), Wt.unref(w2), { default: Wt.withCtx(() => {
        var t5;
        return [Wt.createVNode(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (t5 = i2.ui) ? void 0 : t5.content }) }, _2.value), { default: Wt.withCtx(() => {
          var t6, n4, o3;
          return [Wt.renderSlot(a3.$slots, "content-top"), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (t6 = i2.ui) ? void 0 : t6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(C2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(C2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (n4 = i2.ui) ? void 0 : n4.viewport }) }, [oe2.value && "top" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ie2.value, (t7, n5) => {
            var o4;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n5}`, class: ee2.value.group({ class: null == (o4 = i2.ui) ? void 0 : o4.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, o5) => {
              var r4, s4, u4, d3, c3, m2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n5}-${o5}` }, [ye2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r4 = i2.ui) ? void 0 : r4.label, null == (s4 = t8.ui) ? void 0 : s4.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ye2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u4 = i2.ui) ? void 0 : u4.separator, null == (d3 = t8.ui) ? void 0 : d3.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c3 = i2.ui) ? void 0 : c3.item, ye2(t8) && (null == (m2 = t8.ui) ? void 0 : m2.item), ye2(t8) && t8.class] }), disabled: ye2(t8) && t8.disabled, value: i2.valueKey && ye2(t8) ? Wt.unref(fg)(t8, i2.valueKey) : t8, onSelect: (e3) => fe2(e3, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: o5 }, () => {
                var n6, r5, s5, u5;
                return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: o5 }, () => {
                  var e3, a4, n7, o6, r6, s6, u6, d4, c4, m3;
                  return [ye2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ye2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n7 = t8.ui) ? void 0 : n7.itemLeadingAvatarSize) || (null == (o6 = i2.ui) ? void 0 : o6.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r6 = i2.ui) ? void 0 : r6.itemLeadingAvatar, null == (s6 = t8.ui) ? void 0 : s6.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ye2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u6 = t8.ui) ? void 0 : u6.itemLeadingChipSize) || (null == (d4 = i2.ui) ? void 0 : d4.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemLeadingChip, null == (m3 = t8.ui) ? void 0 : m3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n6 = i2.ui) ? void 0 : n6.itemLabel, ye2(t8) && (null == (r5 = t8.ui) ? void 0 : r5.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: o5 }, () => [Wt.createTextVNode(Wt.toDisplayString(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s5 = i2.ui) ? void 0 : s5.itemTrailing, ye2(t8) && (null == (u5 = t8.ui) ? void 0 : u5.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: o5 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var a4, n7;
                  return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, ye2(t8) && (null == (n7 = t8.ui) ? void 0 : n7.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), oe2.value && "bottom" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, T2.value, { class: ee2.value.arrow({ class: null == (o3 = i2.ui) ? void 0 : o3.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      r3(pm.ssrRenderComponent(Wt.unref(ue), { "as-child": !e2.multiple, class: ee2.value.base({ class: null == (d2 = i2.ui) ? void 0 : d2.base }) }, { default: Wt.withCtx((r4, s4, u4, d3) => {
        var c3, m2, v2, p2;
        if (!s4) return [e2.multiple ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ue), { key: 0, "model-value": t4, disabled: Wt.unref(M2), required: e2.required, delimiter: "", "as-child": "", onBlur: me2, onFocus: ve2, onRemoveTag: ge2 }, { default: Wt.withCtx(({ modelValue: t5 }) => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t5, (t6, n4) => {
          var o3, r5;
          return Wt.openBlock(), Wt.createBlock(Wt.unref(Ye), { key: n4, value: t6, class: ee2.value.tagsItem({ class: [null == (o3 = i2.ui) ? void 0 : o3.tagsItem, ye2(t6) && (null == (r5 = t6.ui) ? void 0 : r5.tagsItem)] }) }, { default: Wt.withCtx(() => {
            var o4, r6, s5, u5;
            return [Wt.createVNode(Wt.unref(Qe), { class: ee2.value.tagsItemText({ class: [null == (o4 = i2.ui) ? void 0 : o4.tagsItemText, ye2(t6) && (null == (r6 = t6.ui) ? void 0 : r6.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-text", { item: t6, index: n4 }, () => [Wt.createTextVNode(Wt.toDisplayString(le2(t6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(Je), { class: ee2.value.tagsItemDelete({ class: [null == (s5 = i2.ui) ? void 0 : s5.tagsItemDelete, ye2(t6) && (null == (u5 = t6.ui) ? void 0 : u5.tagsItemDelete)] }), disabled: Wt.unref(M2) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: t6, index: n4 }, () => {
              var a4, n5;
              return [Wt.createVNode(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n5 = t6.ui) ? void 0 : n5.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
            })]), _: 2 }, 1032, ["class", "disabled"])];
          }), _: 2 }, 1032, ["value", "class"]);
        }), 128)), Wt.createVNode(Wt.unref($e), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
          var t6;
          return [Wt.createVNode(Wt.unref(He), Wt.mergeProps({ ref_key: "inputRef", ref: se2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { placeholder: e2.placeholder, class: ee2.value.tagsInput({ class: null == (t6 = i2.ui) ? void 0 : t6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
          }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
        }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2 }, 1032, ["model-value", "disabled", "required"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref($e), Wt.mergeProps({ key: 1, ref_key: "inputRef", ref: se2, "display-value": le2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: me2, onFocus: ve2, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, 16, ["type", "placeholder", "required", "onUpdate:modelValue"])), Wt.unref(G2) || e2.avatar || o2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 2, class: ee2.value.leading({ class: null == (v2 = i2.ui) ? void 0 : v2.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
          var a4, t5, n4;
          return [Wt.unref(G2) && Wt.unref(Y2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.unref(W2) || o2.trailing ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ee), { key: 3, class: ee2.value.trailing({ class: null == (p2 = i2.ui) ? void 0 : p2.trailing }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
          var e3;
          return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
        e2.multiple ? s4(pm.ssrRenderComponent(Wt.unref(Ue), { "model-value": t4, disabled: Wt.unref(M2), required: e2.required, delimiter: "", "as-child": "", onBlur: me2, onFocus: ve2, onRemoveTag: ge2 }, { default: Wt.withCtx(({ modelValue: t5 }, n4, o3, r5) => {
          if (!n4) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t5, (t6, n5) => {
            var o4, r6;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(Ye), { key: n5, value: t6, class: ee2.value.tagsItem({ class: [null == (o4 = i2.ui) ? void 0 : o4.tagsItem, ye2(t6) && (null == (r6 = t6.ui) ? void 0 : r6.tagsItem)] }) }, { default: Wt.withCtx(() => {
              var o5, r7, s5, u5;
              return [Wt.createVNode(Wt.unref(Qe), { class: ee2.value.tagsItemText({ class: [null == (o5 = i2.ui) ? void 0 : o5.tagsItemText, ye2(t6) && (null == (r7 = t6.ui) ? void 0 : r7.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-text", { item: t6, index: n5 }, () => [Wt.createTextVNode(Wt.toDisplayString(le2(t6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(Je), { class: ee2.value.tagsItemDelete({ class: [null == (s5 = i2.ui) ? void 0 : s5.tagsItemDelete, ye2(t6) && (null == (u5 = t6.ui) ? void 0 : u5.tagsItemDelete)] }), disabled: Wt.unref(M2) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: t6, index: n5 }, () => {
                var a4, n6;
                return [Wt.createVNode(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n6 = t6.ui) ? void 0 : n6.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
              })]), _: 2 }, 1032, ["class", "disabled"])];
            }), _: 2 }, 1032, ["value", "class"]);
          }), 128)), Wt.createVNode(Wt.unref($e), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
            var t6;
            return [Wt.createVNode(Wt.unref(He), Wt.mergeProps({ ref_key: "inputRef", ref: se2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { placeholder: e2.placeholder, class: ee2.value.tagsInput({ class: null == (t6 = i2.ui) ? void 0 : t6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
            }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
          }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
          n4("<!--[-->"), pm.ssrRenderList(t5, (t6, s5) => {
            var u5, d4;
            n4(pm.ssrRenderComponent(Wt.unref(Ye), { key: s5, value: t6, class: ee2.value.tagsItem({ class: [null == (u5 = i2.ui) ? void 0 : u5.tagsItem, ye2(t6) && (null == (d4 = t6.ui) ? void 0 : d4.tagsItem)] }) }, { default: Wt.withCtx((n5, o4, r6, u6) => {
              var d5, c4, m3, v3, p3, g2, y2, b2;
              if (!o4) return [Wt.createVNode(Wt.unref(Qe), { class: ee2.value.tagsItemText({ class: [null == (p3 = i2.ui) ? void 0 : p3.tagsItemText, ye2(t6) && (null == (g2 = t6.ui) ? void 0 : g2.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-text", { item: t6, index: s5 }, () => [Wt.createTextVNode(Wt.toDisplayString(le2(t6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(Je), { class: ee2.value.tagsItemDelete({ class: [null == (y2 = i2.ui) ? void 0 : y2.tagsItemDelete, ye2(t6) && (null == (b2 = t6.ui) ? void 0 : b2.tagsItemDelete)] }), disabled: Wt.unref(M2) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: t6, index: s5 }, () => {
                var a4, n6;
                return [Wt.createVNode(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n6 = t6.ui) ? void 0 : n6.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
              })]), _: 2 }, 1032, ["class", "disabled"])];
              o4(pm.ssrRenderComponent(Wt.unref(Qe), { class: ee2.value.tagsItemText({ class: [null == (d5 = i2.ui) ? void 0 : d5.tagsItemText, ye2(t6) && (null == (c4 = t6.ui) ? void 0 : c4.tagsItemText)] }) }, { default: Wt.withCtx((e3, i3, n6, o5) => {
                if (!i3) return [Wt.renderSlot(a3.$slots, "tags-item-text", { item: t6, index: s5 }, () => [Wt.createTextVNode(Wt.toDisplayString(le2(t6)), 1)])];
                pm.ssrRenderSlot(a3.$slots, "tags-item-text", { item: t6, index: s5 }, () => {
                  i3(`${pm.ssrInterpolate(le2(t6))}`);
                }, i3, n6, o5);
              }), _: 2 }, r6, u6)), o4(pm.ssrRenderComponent(Wt.unref(Je), { class: ee2.value.tagsItemDelete({ class: [null == (m3 = i2.ui) ? void 0 : m3.tagsItemDelete, ye2(t6) && (null == (v3 = t6.ui) ? void 0 : v3.tagsItemDelete)] }), disabled: Wt.unref(M2) }, { default: Wt.withCtx((n6, o5, r7, u7) => {
                if (!o5) return [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: t6, index: s5 }, () => {
                  var a4, n7;
                  return [Wt.createVNode(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n7 = t6.ui) ? void 0 : n7.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
                })];
                pm.ssrRenderSlot(a3.$slots, "tags-item-delete", { item: t6, index: s5 }, () => {
                  var a4, n7;
                  o5(pm.ssrRenderComponent(gb, { name: e2.deleteIcon || Wt.unref(B2).ui.icons.close, class: ee2.value.tagsItemDeleteIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.tagsItemDeleteIcon, ye2(t6) && (null == (n7 = t6.ui) ? void 0 : n7.tagsItemDeleteIcon)] }) }, null, r7, u7));
                }, o5, r7, u7);
              }), _: 2 }, r6, u6));
            }), _: 2 }, o3, r5));
          }), n4("<!--]-->"), n4(pm.ssrRenderComponent(Wt.unref($e), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx((t6, n5, o4, r6) => {
            var s5, u5;
            if (!n5) return [Wt.createVNode(Wt.unref(He), Wt.mergeProps({ ref_key: "inputRef", ref: se2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { placeholder: e2.placeholder, class: ee2.value.tagsInput({ class: null == (u5 = i2.ui) ? void 0 : u5.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
            }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
            n5(pm.ssrRenderComponent(Wt.unref(He), Wt.mergeProps({ ref_key: "inputRef", ref: se2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { placeholder: e2.placeholder, class: ee2.value.tagsInput({ class: null == (s5 = i2.ui) ? void 0 : s5.tagsInput }), onKeydown: () => {
            } }), null, o4, r6));
          }), _: 2 }, o3, r5));
        }), _: 2 }, u4, d3)) : s4(pm.ssrRenderComponent(Wt.unref($e), Wt.mergeProps({ ref_key: "inputRef", ref: se2, "display-value": le2 }, { ...a3.$attrs, ...Wt.unref(j2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: me2, onFocus: ve2, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, u4, d3)), Wt.unref(G2) || e2.avatar || o2.leading ? (s4(`<span class="${pm.ssrRenderClass(ee2.value.leading({ class: null == (c3 = i2.ui) ? void 0 : c3.leading }))}"${d3}>`), pm.ssrRenderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
          var a4, t5, n4;
          Wt.unref(G2) && Wt.unref(Y2) ? s4(pm.ssrRenderComponent(gb, { name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, u4, d3)) : e2.avatar ? s4(pm.ssrRenderComponent(_b, Wt.mergeProps({ size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, u4, d3)) : s4("<!---->");
        }, s4, u4, d3), s4("</span>")) : s4("<!---->"), Wt.unref(W2) || o2.trailing ? s4(pm.ssrRenderComponent(Wt.unref(Ee), { class: ee2.value.trailing({ class: null == (m2 = i2.ui) ? void 0 : m2.trailing }) }, { default: Wt.withCtx((e3, o3, r5, s5) => {
          if (!o3) return [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e4;
            return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e4 = i2.ui) ? void 0 : e4.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })];
          pm.ssrRenderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e4;
            Wt.unref(J2) ? o3(pm.ssrRenderComponent(gb, { name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e4 = i2.ui) ? void 0 : e4.trailingIcon }) }, null, r5, s5)) : o3("<!---->");
          }, o3, r5, s5);
        }), _: 2 }, u4, d3)) : s4("<!---->");
      }), _: 2 }, s3, u3)), r3(pm.ssrRenderComponent(Wt.unref(Fe), Wt.unref(w2), { default: Wt.withCtx((t5, n4, o3, r4) => {
        var s4, u4;
        if (!n4) return [Wt.createVNode(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (u4 = i2.ui) ? void 0 : u4.content }) }, _2.value), { default: Wt.withCtx(() => {
          var t6, n5, o4;
          return [Wt.renderSlot(a3.$slots, "content-top"), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (t6 = i2.ui) ? void 0 : t6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(C2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(C2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (n5 = i2.ui) ? void 0 : n5.viewport }) }, [oe2.value && "top" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ie2.value, (t7, n6) => {
            var o5;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n6}`, class: ee2.value.group({ class: null == (o5 = i2.ui) ? void 0 : o5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, o6) => {
              var r5, s5, u5, d3, c3, m2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n6}-${o6}` }, [ye2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r5 = i2.ui) ? void 0 : r5.label, null == (s5 = t8.ui) ? void 0 : s5.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ye2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u5 = i2.ui) ? void 0 : u5.separator, null == (d3 = t8.ui) ? void 0 : d3.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c3 = i2.ui) ? void 0 : c3.item, ye2(t8) && (null == (m2 = t8.ui) ? void 0 : m2.item), ye2(t8) && t8.class] }), disabled: ye2(t8) && t8.disabled, value: i2.valueKey && ye2(t8) ? Wt.unref(fg)(t8, i2.valueKey) : t8, onSelect: (e3) => fe2(e3, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: o6 }, () => {
                var n7, r6, s6, u6;
                return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: o6 }, () => {
                  var e3, a4, n8, o7, r7, s7, u7, d4, c4, m3;
                  return [ye2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ye2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n8 = t8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o7 = i2.ui) ? void 0 : o7.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r7 = i2.ui) ? void 0 : r7.itemLeadingAvatar, null == (s7 = t8.ui) ? void 0 : s7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ye2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u7 = t8.ui) ? void 0 : u7.itemLeadingChipSize) || (null == (d4 = i2.ui) ? void 0 : d4.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemLeadingChip, null == (m3 = t8.ui) ? void 0 : m3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n7 = i2.ui) ? void 0 : n7.itemLabel, ye2(t8) && (null == (r6 = t8.ui) ? void 0 : r6.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: o6 }, () => [Wt.createTextVNode(Wt.toDisplayString(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s6 = i2.ui) ? void 0 : s6.itemTrailing, ye2(t8) && (null == (u6 = t8.ui) ? void 0 : u6.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: o6 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var a4, n8;
                  return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, ye2(t8) && (null == (n8 = t8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), oe2.value && "bottom" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, T2.value, { class: ee2.value.arrow({ class: null == (o4 = i2.ui) ? void 0 : o4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        n4(pm.ssrRenderComponent(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (s4 = i2.ui) ? void 0 : s4.content }) }, _2.value), { default: Wt.withCtx((t6, n5, o4, r5) => {
          var s5, u5, d3, c3, m2, v2;
          if (!n5) return [Wt.renderSlot(a3.$slots, "content-top"), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (c3 = i2.ui) ? void 0 : c3.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(C2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(C2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (m2 = i2.ui) ? void 0 : m2.viewport }) }, [oe2.value && "top" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(ie2.value, (t7, n6) => {
            var o5;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n6}`, class: ee2.value.group({ class: null == (o5 = i2.ui) ? void 0 : o5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, o6) => {
              var r6, s6, u6, d4, c4, m3;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n6}-${o6}` }, [ye2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r6 = i2.ui) ? void 0 : r6.label, null == (s6 = t8.ui) ? void 0 : s6.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ye2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u6 = i2.ui) ? void 0 : u6.separator, null == (d4 = t8.ui) ? void 0 : d4.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c4 = i2.ui) ? void 0 : c4.item, ye2(t8) && (null == (m3 = t8.ui) ? void 0 : m3.item), ye2(t8) && t8.class] }), disabled: ye2(t8) && t8.disabled, value: i2.valueKey && ye2(t8) ? Wt.unref(fg)(t8, i2.valueKey) : t8, onSelect: (e3) => fe2(e3, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: o6 }, () => {
                var n7, r7, s7, u7;
                return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: o6 }, () => {
                  var e3, a4, n8, o7, r8, s8, u8, d5, c5, m4;
                  return [ye2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ye2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n8 = t8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o7 = i2.ui) ? void 0 : o7.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r8 = i2.ui) ? void 0 : r8.itemLeadingAvatar, null == (s8 = t8.ui) ? void 0 : s8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ye2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u8 = t8.ui) ? void 0 : u8.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (c5 = i2.ui) ? void 0 : c5.itemLeadingChip, null == (m4 = t8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n7 = i2.ui) ? void 0 : n7.itemLabel, ye2(t8) && (null == (r7 = t8.ui) ? void 0 : r7.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: o6 }, () => [Wt.createTextVNode(Wt.toDisplayString(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s7 = i2.ui) ? void 0 : s7.itemTrailing, ye2(t8) && (null == (u7 = t8.ui) ? void 0 : u7.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: o6 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var a4, n8;
                  return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, ye2(t8) && (null == (n8 = t8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), oe2.value && "bottom" === re2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, T2.value, { class: ee2.value.arrow({ class: null == (v2 = i2.ui) ? void 0 : v2.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          pm.ssrRenderSlot(a3.$slots, "content-top", {}, null, n5, o4, r5), n5(pm.ssrRenderComponent(Wt.unref(Se), { class: ee2.value.empty({ class: null == (s5 = i2.ui) ? void 0 : s5.empty }) }, { default: Wt.withCtx((e3, t7, i3, n6) => {
            if (!t7) return [Wt.renderSlot(a3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(C2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(C2)("inputMenu.noData")), 1)])];
            pm.ssrRenderSlot(a3.$slots, "empty", { searchTerm: k2.value }, () => {
              t7(`${pm.ssrInterpolate(k2.value ? Wt.unref(C2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(C2)("inputMenu.noData"))}`);
            }, t7, i3, n6);
          }), _: 2 }, o4, r5)), n5(`<div role="presentation" class="${pm.ssrRenderClass(ee2.value.viewport({ class: null == (u5 = i2.ui) ? void 0 : u5.viewport }))}"${r5}>`), oe2.value && "top" === re2.value ? n5(pm.ssrRenderComponent(Wt.unref(Z2), null, null, o4, r5)) : n5("<!---->"), n5("<!--[-->"), pm.ssrRenderList(ie2.value, (t7, s6) => {
            var u6;
            n5(pm.ssrRenderComponent(Wt.unref(_e), { key: `group-${s6}`, class: ee2.value.group({ class: null == (u6 = i2.ui) ? void 0 : u6.group }) }, { default: Wt.withCtx((n6, o5, r6, u7) => {
              if (!o5) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t7, (t8, n7) => {
                var o6, r7, u8, d4, c4, m3;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${s6}-${n7}` }, [ye2(t8) && "label" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (o6 = i2.ui) ? void 0 : o6.label, null == (r7 = t8.ui) ? void 0 : r7.label, t8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : ye2(t8) && "separator" === t8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u8 = i2.ui) ? void 0 : u8.separator, null == (d4 = t8.ui) ? void 0 : d4.separator, t8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c4 = i2.ui) ? void 0 : c4.item, ye2(t8) && (null == (m3 = t8.ui) ? void 0 : m3.item), ye2(t8) && t8.class] }), disabled: ye2(t8) && t8.disabled, value: i2.valueKey && ye2(t8) ? Wt.unref(fg)(t8, i2.valueKey) : t8, onSelect: (e3) => fe2(e3, t8) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n7 }, () => {
                  var o7, r8, s7, u9;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n7 }, () => {
                    var e3, a4, n8, o8, r9, s8, u10, d5, c5, m4;
                    return [ye2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ye2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n8 = t8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o8 = i2.ui) ? void 0 : o8.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatar, null == (s8 = t8.ui) ? void 0 : s8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ye2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u10 = t8.ui) ? void 0 : u10.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (c5 = i2.ui) ? void 0 : c5.itemLeadingChip, null == (m4 = t8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (o7 = i2.ui) ? void 0 : o7.itemLabel, ye2(t8) && (null == (r8 = t8.ui) ? void 0 : r8.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s7 = i2.ui) ? void 0 : s7.itemTrailing, ye2(t8) && (null == (u9 = t8.ui) ? void 0 : u9.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n7 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, n8;
                    return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, ye2(t8) && (null == (n8 = t8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))];
              o5("<!--[-->"), pm.ssrRenderList(t7, (t8, n7) => {
                var s7, d4, c4, m3, v3, g2;
                o5("<!--[-->"), ye2(t8) && "label" === t8.type ? o5(pm.ssrRenderComponent(Wt.unref(Pe), { class: ee2.value.label({ class: [null == (s7 = i2.ui) ? void 0 : s7.label, null == (d4 = t8.ui) ? void 0 : d4.label, t8.class] }) }, { default: Wt.withCtx((e3, a4, n8, o6) => {
                  if (!a4) return [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t8, i2.labelKey)), 1)];
                  a4(`${pm.ssrInterpolate(Wt.unref(fg)(t8, i2.labelKey))}`);
                }), _: 2 }, r6, u7)) : ye2(t8) && "separator" === t8.type ? o5(pm.ssrRenderComponent(Wt.unref(Oe), { class: ee2.value.separator({ class: [null == (c4 = i2.ui) ? void 0 : c4.separator, null == (m3 = t8.ui) ? void 0 : m3.separator, t8.class] }) }, null, r6, u7)) : o5(pm.ssrRenderComponent(Wt.unref(De), { class: ee2.value.item({ class: [null == (v3 = i2.ui) ? void 0 : v3.item, ye2(t8) && (null == (g2 = t8.ui) ? void 0 : g2.item), ye2(t8) && t8.class] }), disabled: ye2(t8) && t8.disabled, value: i2.valueKey && ye2(t8) ? Wt.unref(fg)(t8, i2.valueKey) : t8, onSelect: (e3) => fe2(e3, t8) }, { default: Wt.withCtx((o6, r7, s8, u8) => {
                  if (!r7) return [Wt.renderSlot(a3.$slots, "item", { item: t8, index: n7 }, () => {
                    var o7, r8, s9, u9;
                    return [Wt.renderSlot(a3.$slots, "item-leading", { item: t8, index: n7 }, () => {
                      var e3, a4, n8, o8, r9, s10, u10, d5, c5, m4;
                      return [ye2(t8) && t8.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : ye2(t8) && t8.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n8 = t8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o8 = i2.ui) ? void 0 : o8.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatar, null == (s10 = t8.ui) ? void 0 : s10.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : ye2(t8) && t8.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u10 = t8.ui) ? void 0 : u10.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (c5 = i2.ui) ? void 0 : c5.itemLeadingChip, null == (m4 = t8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                    }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (o7 = i2.ui) ? void 0 : o7.itemLabel, ye2(t8) && (null == (r8 = t8.ui) ? void 0 : r8.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t8, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s9 = i2.ui) ? void 0 : s9.itemTrailing, ye2(t8) && (null == (u9 = t8.ui) ? void 0 : u9.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t8, index: n7 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                      var a4, n8;
                      return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, ye2(t8) && (null == (n8 = t8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                    }), _: 2 }, 1024)], 2)];
                  })];
                  pm.ssrRenderSlot(a3.$slots, "item", { item: t8, index: n7 }, () => {
                    var o7, d5, c5, m4;
                    pm.ssrRenderSlot(a3.$slots, "item-leading", { item: t8, index: n7 }, () => {
                      var e3, a4, n8, o8, d6, c6, m5, v4, p2, g3;
                      ye2(t8) && t8.icon ? r7(pm.ssrRenderComponent(gb, { name: t8.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t8.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, s8, u8)) : ye2(t8) && t8.avatar ? r7(pm.ssrRenderComponent(_b, Wt.mergeProps({ size: (null == (n8 = t8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o8 = i2.ui) ? void 0 : o8.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t8.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemLeadingAvatar, null == (c6 = t8.ui) ? void 0 : c6.itemLeadingAvatar] }) }), null, s8, u8)) : ye2(t8) && t8.chip ? r7(pm.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (m5 = t8.ui) ? void 0 : m5.itemLeadingChipSize) || (null == (v4 = i2.ui) ? void 0 : v4.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t8.chip, { class: ee2.value.itemLeadingChip({ class: [null == (p2 = i2.ui) ? void 0 : p2.itemLeadingChip, null == (g3 = t8.ui) ? void 0 : g3.itemLeadingChip] }) }), null, s8, u8)) : r7("<!---->");
                    }, r7, s8, u8), r7(`<span class="${pm.ssrRenderClass(ee2.value.itemLabel({ class: [null == (o7 = i2.ui) ? void 0 : o7.itemLabel, ye2(t8) && (null == (d5 = t8.ui) ? void 0 : d5.itemLabel)] }))}"${u8}>`), pm.ssrRenderSlot(a3.$slots, "item-label", { item: t8, index: n7 }, () => {
                      r7(`${pm.ssrInterpolate(ye2(t8) ? Wt.unref(fg)(t8, i2.labelKey) : t8)}`);
                    }, r7, s8, u8), r7(`</span><span class="${pm.ssrRenderClass(ee2.value.itemTrailing({ class: [null == (c5 = i2.ui) ? void 0 : c5.itemTrailing, ye2(t8) && (null == (m4 = t8.ui) ? void 0 : m4.itemTrailing)] }))}"${u8}>`), pm.ssrRenderSlot(a3.$slots, "item-trailing", { item: t8, index: n7 }, null, r7, s8, u8), r7(pm.ssrRenderComponent(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx((a4, n8, o8, r8) => {
                      var s9, u9, d6, c6;
                      if (!n8) return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemTrailingIcon, ye2(t8) && (null == (c6 = t8.ui) ? void 0 : c6.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                      n8(pm.ssrRenderComponent(gb, { name: e2.selectedIcon || Wt.unref(B2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (s9 = i2.ui) ? void 0 : s9.itemTrailingIcon, ye2(t8) && (null == (u9 = t8.ui) ? void 0 : u9.itemTrailingIcon)] }) }, null, o8, r8));
                    }), _: 2 }, s8, u8)), r7("</span>");
                  }, r7, s8, u8);
                }), _: 2 }, r6, u7)), o5("<!--]-->");
              }), o5("<!--]-->");
            }), _: 2 }, o4, r5));
          }), n5("<!--]-->"), oe2.value && "bottom" === re2.value ? n5(pm.ssrRenderComponent(Wt.unref(Z2), null, null, o4, r5)) : n5("<!---->"), n5("</div>"), pm.ssrRenderSlot(a3.$slots, "content-bottom", {}, null, n5, o4, r5), e2.arrow ? n5(pm.ssrRenderComponent(Wt.unref(Ce), Wt.mergeProps(T2.value, { class: ee2.value.arrow({ class: null == (d3 = i2.ui) ? void 0 : d3.arrow }) }), null, o4, r5)) : n5("<!---->");
        }), _: 2 }, o3, r4));
      }), _: 2 }, s3, u3));
    }), _: 3 }, r2)), t3("<!--]-->");
  };
} }), el = Ze.setup;
Ze.setup = (e2, a2) => {
  const t2 = Wt.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue"), el ? el(e2, a2) : void 0;
};
const ll = { slots: { base: ["relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"], leading: "absolute inset-y-0 start-0 flex items-center", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "absolute inset-y-0 end-0 flex items-center", trailingIcon: "shrink-0 text-dimmed", value: "truncate pointer-events-none", placeholder: "truncate text-dimmed", arrow: "fill-default", content: ["max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col", "origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"], viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: ["group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"], itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemLabel: "truncate", input: "border-b border-default", focusScope: "flex flex-col min-h-0" }, variants: { buttonGroup: { horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]", vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]" }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2", trailing: "pe-2", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1 text-xs" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", empty: "p-1.5 text-xs" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-1.5 text-sm" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", empty: "p-2 text-sm" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailingIcon: "size-6", empty: "p-2 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" } }, compoundVariants: [{ color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, al = Object.assign({ inheritAttrs: false }, { __name: "SelectMenu", __ssrInlineRender: true, props: Wt.mergeModels({ id: { type: String, required: false }, placeholder: { type: String, required: false }, searchInput: { type: [Boolean, Object], required: false, default: true }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, trailingIcon: { type: String, required: false }, selectedIcon: { type: String, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: Wt.mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]), setup(e2, { expose: a2, emit: t2 }) {
  const i2 = e2, n2 = t2, o2 = Wt.useSlots(), x2 = Wt.useModel(e2, "searchTerm", { type: String, default: "" }), { t: k2 } = l$1(), C2 = da(), { contains: B2 } = de({ sensitivity: "base" }), S2 = F(Bm(i2, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover"), n2), V2 = i(Wt.toRef(() => i2.portal)), w2 = Wt.toRef(() => defu(i2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" })), _2 = Wt.toRef(() => i2.arrow), T2 = Wt.toRef(() => defu(i2.searchInput, { placeholder: k2("selectMenu.search"), variant: "none" })), { emitFormBlur: N2, emitFormFocus: A2, emitFormInput: R2, emitFormChange: D2, size: K2, color: P2, id: F2, name: O2, highlight: E2, disabled: M2, ariaAttrs: j2 } = sg(i2), { orientation: U2, size: H2 } = Am(i2), { isLeading: G2, isTrailing: W2, leadingIconName: Y2, trailingIconName: J2 } = Pm(Wt.toRef(() => defu(i2, { trailingIcon: C2.ui.icons.chevronDown }))), Q2 = Wt.computed(() => H2.value || K2.value), [X2, Z2] = v(), ee2 = Wt.computed(() => {
    var e3;
    return Ky({ extend: Ky(ll), ...(null == (e3 = C2.ui) ? void 0 : e3.selectMenu) || {} })({ color: P2.value, variant: i2.variant, size: null == Q2 ? void 0 : Q2.value, loading: i2.loading, highlight: E2.value, leading: G2.value || !!i2.avatar || !!o2.leading, trailing: W2.value || !!o2.trailing, buttonGroup: U2.value });
  });
  function le2(e3) {
    if (i2.multiple && Array.isArray(e3)) {
      const l3 = e3.map((e4) => le2(e4)).filter(Boolean);
      return (null == l3 ? void 0 : l3.length) ? l3.join(", ") : void 0;
    }
    if (!i2.valueKey) return e3 && ("object" == typeof e3 ? fg(e3, i2.labelKey) : e3);
    const l2 = te2.value.find((l3) => gg("object" == typeof l3 ? fg(l3, i2.valueKey) : l3, e3));
    return l2 && ("object" == typeof l2 ? fg(l2, i2.labelKey) : l2);
  }
  const ae2 = Wt.computed(() => {
    var e3;
    return (null == (e3 = i2.items) ? void 0 : e3.length) ? yg(i2.items) ? i2.items : [i2.items] : [];
  }), te2 = Wt.computed(() => ae2.value.flatMap((e3) => e3)), oe2 = Wt.computed(() => {
    if (i2.ignoreFilter || !x2.value) return ae2.value;
    const e3 = Array.isArray(i2.filterFields) ? i2.filterFields : [i2.labelKey];
    return ae2.value.map((l2) => l2.filter((l3) => "object" != typeof l3 || null === l3 ? B2(String(l3), x2.value) : !(!l3.type || !["label", "separator"].includes(l3.type)) || e3.some((e4) => B2(fg(l3, e4), x2.value)))).filter((e4) => e4.filter((e5) => !fe2(e5) || !e5.type || !["label", "separator"].includes(e5.type)).length > 0);
  }), re2 = Wt.computed(() => oe2.value.flatMap((e3) => e3)), se2 = Wt.computed(() => {
    if (!i2.createItem || !x2.value) return false;
    const e3 = i2.valueKey ? { [i2.valueKey]: x2.value } : x2.value;
    return "object" == typeof i2.createItem && "always" === i2.createItem.when || "always" === i2.createItem ? !re2.value.find((l2) => gg(l2, e3, i2.valueKey)) : !re2.value.length;
  }), ce2 = Wt.computed(() => "object" == typeof i2.createItem ? i2.createItem.position : "bottom"), me2 = Wt.ref(null);
  function ve2(e3) {
    if (Wt.toRaw(i2.modelValue) === e3) return;
    const a3 = new Event("change", { target: { value: e3 } });
    n2("change", a3), D2(), R2(), i2.resetSearchTermOnSelect && (x2.value = "");
  }
  function pe2(e3) {
    let l2;
    if (e3) {
      const e4 = new FocusEvent("focus");
      n2("focus", e4), A2(), clearTimeout(l2);
    } else {
      const e4 = new FocusEvent("blur");
      if (n2("blur", e4), N2(), i2.resetSearchTermOnBlur) {
        l2 = setTimeout(() => {
          x2.value = "";
        }, 100);
      }
    }
  }
  function ge2(e3, l2) {
    var a3;
    fe2(l2) && (l2.disabled ? e3.preventDefault() : null == (a3 = l2.onSelect) || a3.call(l2, e3));
  }
  function fe2(e3) {
    return "object" == typeof e3 && null !== e3;
  }
  return a2({ triggerRef: me2 }), (a3, t3, r2, s2) => {
    t3("<!--[-->"), t3(pm.ssrRenderComponent(Wt.unref(X2), null, { default: Wt.withCtx((e3, t4, o3, r3) => {
      var s3, u2;
      if (!t4) return [Wt.createVNode(Wt.unref(_e), { class: ee2.value.group({ class: null == (u2 = i2.ui) ? void 0 : u2.group }) }, { default: Wt.withCtx(() => {
        var e4;
        return [Wt.createVNode(Wt.unref(De), { class: ee2.value.item({ class: null == (e4 = i2.ui) ? void 0 : e4.item }), value: x2.value, onSelect: Wt.withModifiers((e5) => n2("create", x2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(k2)("selectMenu.create", { label: x2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
      }), _: 3 }, 8, ["class"])];
      t4(pm.ssrRenderComponent(Wt.unref(_e), { class: ee2.value.group({ class: null == (s3 = i2.ui) ? void 0 : s3.group }) }, { default: Wt.withCtx((e4, t5, o4, r4) => {
        var s4, u3;
        if (!t5) return [Wt.createVNode(Wt.unref(De), { class: ee2.value.item({ class: null == (u3 = i2.ui) ? void 0 : u3.item }), value: x2.value, onSelect: Wt.withModifiers((e5) => n2("create", x2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(k2)("selectMenu.create", { label: x2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
        t5(pm.ssrRenderComponent(Wt.unref(De), { class: ee2.value.item({ class: null == (s4 = i2.ui) ? void 0 : s4.item }), value: x2.value, onSelect: (e5) => n2("create", x2.value) }, { default: Wt.withCtx((e5, t6, n3, o5) => {
          var r5, s5;
          if (!t6) return [Wt.createVNode("span", { class: ee2.value.itemLabel({ class: null == (s5 = i2.ui) ? void 0 : s5.itemLabel }) }, [Wt.renderSlot(a3.$slots, "create-item-label", { item: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(k2)("selectMenu.create", { label: x2.value })), 1)])], 2)];
          t6(`<span class="${pm.ssrRenderClass(ee2.value.itemLabel({ class: null == (r5 = i2.ui) ? void 0 : r5.itemLabel }))}"${o5}>`), pm.ssrRenderSlot(a3.$slots, "create-item-label", { item: x2.value }, () => {
            t6(`${pm.ssrInterpolate(Wt.unref(k2)("selectMenu.create", { label: x2.value }))}`);
          }, t6, n3, o5), t6("</span>");
        }), _: 3 }, o4, r4));
      }), _: 3 }, o3, r3));
    }), _: 3 }, r2)), t3(pm.ssrRenderComponent(Wt.unref(he), Wt.mergeProps({ id: Wt.unref(F2) }, { ...Wt.unref(S2), ...a3.$attrs, ...Wt.unref(j2) }, { "ignore-filter": "", "as-child": "", name: Wt.unref(O2), disabled: Wt.unref(M2), "onUpdate:modelValue": ve2, "onUpdate:open": pe2 }), { default: Wt.withCtx(({ modelValue: t4, open: n3 }, r3, s3, u2) => {
      if (!r3) return [Wt.createVNode(Wt.unref(ue), { "as-child": "" }, { default: Wt.withCtx(() => {
        var r4;
        return [Wt.createVNode(Wt.unref(Ee), { ref_key: "triggerRef", ref: me2, class: ee2.value.base({ class: [null == (r4 = i2.ui) ? void 0 : r4.base, i2.class] }), tabindex: "0" }, { default: Wt.withCtx(() => {
          var r5, s4;
          return [Wt.unref(G2) || e2.avatar || o2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.leading({ class: null == (r5 = i2.ui) ? void 0 : r5.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var a4, t5, n4;
            return [Wt.unref(G2) && Wt.unref(Y2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t4, open: n3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([le2(t4)], (a4) => {
            var _a;
            var t5, n4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.value({ class: null == (t5 = i2.ui) ? void 0 : t5.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.placeholder({ class: null == (n4 = i2.ui) ? void 0 : n4.placeholder }) }, Wt.toDisplayString((_a = e2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(W2) || o2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.trailing({ class: null == (s4 = i2.ui) ? void 0 : s4.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e3;
            return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
        }), _: 2 }, 1032, ["class"])];
      }), _: 2 }, 1024), Wt.createVNode(Wt.unref(Fe), Wt.unref(V2), { default: Wt.withCtx(() => {
        var t5;
        return [Wt.createVNode(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (t5 = i2.ui) ? void 0 : t5.content }) }, w2.value), { default: Wt.withCtx(() => {
          var t6, n4;
          return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ee2.value.focusScope({ class: null == (t6 = i2.ui) ? void 0 : t6.focusScope }) }, { default: Wt.withCtx(() => {
            var t7, n5;
            return [Wt.renderSlot(a3.$slots, "content-top"), e2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref($e), { key: 0, modelValue: x2.value, "onUpdate:modelValue": (e3) => x2.value = e3, "display-value": () => x2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (a4 = i2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (t7 = i2.ui) ? void 0 : t7.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (n5 = i2.ui) ? void 0 : n5.viewport }) }, [se2.value && "top" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(oe2.value, (t8, n6) => {
              var o3;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n6}`, class: ee2.value.group({ class: null == (o3 = i2.ui) ? void 0 : o3.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t8, (t9, o4) => {
                var r4, s4, u3, d2, c2, m2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n6}-${o4}` }, [fe2(t9) && "label" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r4 = i2.ui) ? void 0 : r4.label, null == (s4 = t9.ui) ? void 0 : s4.label, t9.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : fe2(t9) && "separator" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u3 = i2.ui) ? void 0 : u3.separator, null == (d2 = t9.ui) ? void 0 : d2.separator, t9.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c2 = i2.ui) ? void 0 : c2.item, fe2(t9) && (null == (m2 = t9.ui) ? void 0 : m2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t9, index: o4 }, () => {
                  var n7, r5, s5, u4;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: o4 }, () => {
                    var e3, a4, n8, o5, r6, s6, u5, d3, c3;
                    return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n8 = t9.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (o5 = i2.ui) ? void 0 : o5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r6 = i2.ui) ? void 0 : r6.itemLeadingAvatar, null == (s6 = t9.ui) ? void 0 : s6.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u5 = i2.ui) ? void 0 : u5.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d3 = i2.ui) ? void 0 : d3.itemLeadingChip, null == (c3 = t9.ui) ? void 0 : c3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n7 = i2.ui) ? void 0 : n7.itemLabel, fe2(t9) && (null == (r5 = t9.ui) ? void 0 : r5.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: o4 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s5 = i2.ui) ? void 0 : s5.itemTrailing, fe2(t9) && (null == (u4 = t9.ui) ? void 0 : u4.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: o4 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, n8;
                    return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n8 = t9.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), se2.value && "bottom" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, _2.value, { class: ee2.value.arrow({ class: null == (n4 = i2.ui) ? void 0 : n4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      r3(pm.ssrRenderComponent(Wt.unref(ue), { "as-child": "" }, { default: Wt.withCtx((r4, s4, u3, d2) => {
        var c2, m2;
        if (!s4) return [Wt.createVNode(Wt.unref(Ee), { ref_key: "triggerRef", ref: me2, class: ee2.value.base({ class: [null == (m2 = i2.ui) ? void 0 : m2.base, i2.class] }), tabindex: "0" }, { default: Wt.withCtx(() => {
          var r5, s5;
          return [Wt.unref(G2) || e2.avatar || o2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.leading({ class: null == (r5 = i2.ui) ? void 0 : r5.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var a4, t5, n4;
            return [Wt.unref(G2) && Wt.unref(Y2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t4, open: n3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([le2(t4)], (a4) => {
            var _a;
            var t5, n4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.value({ class: null == (t5 = i2.ui) ? void 0 : t5.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.placeholder({ class: null == (n4 = i2.ui) ? void 0 : n4.placeholder }) }, Wt.toDisplayString((_a = e2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(W2) || o2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.trailing({ class: null == (s5 = i2.ui) ? void 0 : s5.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e3;
            return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
        }), _: 2 }, 1032, ["class"])];
        s4(pm.ssrRenderComponent(Wt.unref(Ee), { ref_key: "triggerRef", ref: me2, class: ee2.value.base({ class: [null == (c2 = i2.ui) ? void 0 : c2.base, i2.class] }), tabindex: "0" }, { default: Wt.withCtx((r5, s5, u4, d3) => {
          var c3, m3, v2, p2;
          if (!s5) return [Wt.unref(G2) || e2.avatar || o2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.leading({ class: null == (v2 = i2.ui) ? void 0 : v2.leading }) }, [Wt.renderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var a4, t5, n4;
            return [Wt.unref(G2) && Wt.unref(Y2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(a3.$slots, "default", { modelValue: t4, open: n3 }, () => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList([le2(t4)], (a4) => {
            var _a;
            var t5, n4;
            return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: a4 }, [null != a4 ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: ee2.value.value({ class: null == (t5 = i2.ui) ? void 0 : t5.value }) }, Wt.toDisplayString(a4), 3)) : (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.placeholder({ class: null == (n4 = i2.ui) ? void 0 : n4.placeholder }) }, Wt.toDisplayString((_a = e2.placeholder) != null ? _a : "\xA0"), 3))], 64);
          }), 128))]), Wt.unref(W2) || o2.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: ee2.value.trailing({ class: null == (p2 = i2.ui) ? void 0 : p2.trailing }) }, [Wt.renderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e3;
            return [Wt.unref(J2) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true)];
          Wt.unref(G2) || e2.avatar || o2.leading ? (s5(`<span class="${pm.ssrRenderClass(ee2.value.leading({ class: null == (c3 = i2.ui) ? void 0 : c3.leading }))}"${d3}>`), pm.ssrRenderSlot(a3.$slots, "leading", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var a4, t5, n4;
            Wt.unref(G2) && Wt.unref(Y2) ? s5(pm.ssrRenderComponent(gb, { name: Wt.unref(Y2), class: ee2.value.leadingIcon({ class: null == (a4 = i2.ui) ? void 0 : a4.leadingIcon }) }, null, u4, d3)) : e2.avatar ? s5(pm.ssrRenderComponent(_b, Wt.mergeProps({ size: (null == (t5 = i2.ui) ? void 0 : t5.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, e2.avatar, { class: ee2.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, u4, d3)) : s5("<!---->");
          }, s5, u4, d3), s5("</span>")) : s5("<!---->"), pm.ssrRenderSlot(a3.$slots, "default", { modelValue: t4, open: n3 }, () => {
            s5("<!--[-->"), pm.ssrRenderList([le2(t4)], (l2) => {
              var _a;
              var a4, t5;
              s5("<!--[-->"), s5(null != l2 ? `<span class="${pm.ssrRenderClass(ee2.value.value({ class: null == (a4 = i2.ui) ? void 0 : a4.value }))}"${d3}>${pm.ssrInterpolate(l2)}</span>` : `<span class="${pm.ssrRenderClass(ee2.value.placeholder({ class: null == (t5 = i2.ui) ? void 0 : t5.placeholder }))}"${d3}>${pm.ssrInterpolate((_a = e2.placeholder) != null ? _a : "\xA0")}</span>`), s5("<!--]-->");
            }), s5("<!--]-->");
          }, s5, u4, d3), Wt.unref(W2) || o2.trailing ? (s5(`<span class="${pm.ssrRenderClass(ee2.value.trailing({ class: null == (m3 = i2.ui) ? void 0 : m3.trailing }))}"${d3}>`), pm.ssrRenderSlot(a3.$slots, "trailing", { modelValue: t4, open: n3, ui: ee2.value }, () => {
            var e3;
            Wt.unref(J2) ? s5(pm.ssrRenderComponent(gb, { name: Wt.unref(J2), class: ee2.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, u4, d3)) : s5("<!---->");
          }, s5, u4, d3), s5("</span>")) : s5("<!---->");
        }), _: 2 }, u3, d2));
      }), _: 2 }, s3, u2)), r3(pm.ssrRenderComponent(Wt.unref(Fe), Wt.unref(V2), { default: Wt.withCtx((t5, n4, o3, r4) => {
        var s4, u3;
        if (!n4) return [Wt.createVNode(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (u3 = i2.ui) ? void 0 : u3.content }) }, w2.value), { default: Wt.withCtx(() => {
          var t6, n5;
          return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ee2.value.focusScope({ class: null == (t6 = i2.ui) ? void 0 : t6.focusScope }) }, { default: Wt.withCtx(() => {
            var t7, n6;
            return [Wt.renderSlot(a3.$slots, "content-top"), e2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref($e), { key: 0, modelValue: x2.value, "onUpdate:modelValue": (e3) => x2.value = e3, "display-value": () => x2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (a4 = i2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (t7 = i2.ui) ? void 0 : t7.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (n6 = i2.ui) ? void 0 : n6.viewport }) }, [se2.value && "top" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(oe2.value, (t8, n7) => {
              var o4;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n7}`, class: ee2.value.group({ class: null == (o4 = i2.ui) ? void 0 : o4.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t8, (t9, o5) => {
                var r5, s5, u4, d2, c2, m2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n7}-${o5}` }, [fe2(t9) && "label" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r5 = i2.ui) ? void 0 : r5.label, null == (s5 = t9.ui) ? void 0 : s5.label, t9.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : fe2(t9) && "separator" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u4 = i2.ui) ? void 0 : u4.separator, null == (d2 = t9.ui) ? void 0 : d2.separator, t9.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c2 = i2.ui) ? void 0 : c2.item, fe2(t9) && (null == (m2 = t9.ui) ? void 0 : m2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t9, index: o5 }, () => {
                  var n8, r6, s6, u5;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: o5 }, () => {
                    var e3, a4, n9, o6, r7, s7, u6, d3, c3;
                    return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o6 = i2.ui) ? void 0 : o6.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r7 = i2.ui) ? void 0 : r7.itemLeadingAvatar, null == (s7 = t9.ui) ? void 0 : s7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u6 = i2.ui) ? void 0 : u6.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d3 = i2.ui) ? void 0 : d3.itemLeadingChip, null == (c3 = t9.ui) ? void 0 : c3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n8 = i2.ui) ? void 0 : n8.itemLabel, fe2(t9) && (null == (r6 = t9.ui) ? void 0 : r6.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: o5 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s6 = i2.ui) ? void 0 : s6.itemTrailing, fe2(t9) && (null == (u5 = t9.ui) ? void 0 : u5.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: o5 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, n9;
                    return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n9 = t9.ui) ? void 0 : n9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), se2.value && "bottom" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, _2.value, { class: ee2.value.arrow({ class: null == (n5 = i2.ui) ? void 0 : n5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        n4(pm.ssrRenderComponent(Wt.unref(Be), Wt.mergeProps({ class: ee2.value.content({ class: null == (s4 = i2.ui) ? void 0 : s4.content }) }, w2.value), { default: Wt.withCtx((t6, n5, o4, r5) => {
          var s5, u4, d2, c2;
          if (!n5) return [Wt.createVNode(Wt.unref(E), { trapped: "", class: ee2.value.focusScope({ class: null == (d2 = i2.ui) ? void 0 : d2.focusScope }) }, { default: Wt.withCtx(() => {
            var t7, n6;
            return [Wt.renderSlot(a3.$slots, "content-top"), e2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref($e), { key: 0, modelValue: x2.value, "onUpdate:modelValue": (e3) => x2.value = e3, "display-value": () => x2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (a4 = i2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (t7 = i2.ui) ? void 0 : t7.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (n6 = i2.ui) ? void 0 : n6.viewport }) }, [se2.value && "top" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(oe2.value, (t8, n7) => {
              var o5;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n7}`, class: ee2.value.group({ class: null == (o5 = i2.ui) ? void 0 : o5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t8, (t9, o6) => {
                var r6, s6, u5, d3, c3, m2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n7}-${o6}` }, [fe2(t9) && "label" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r6 = i2.ui) ? void 0 : r6.label, null == (s6 = t9.ui) ? void 0 : s6.label, t9.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : fe2(t9) && "separator" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u5 = i2.ui) ? void 0 : u5.separator, null == (d3 = t9.ui) ? void 0 : d3.separator, t9.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c3 = i2.ui) ? void 0 : c3.item, fe2(t9) && (null == (m2 = t9.ui) ? void 0 : m2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t9, index: o6 }, () => {
                  var n8, r7, s7, u6;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: o6 }, () => {
                    var e3, a4, n9, o7, r8, s8, u7, d4, c4;
                    return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o7 = i2.ui) ? void 0 : o7.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r8 = i2.ui) ? void 0 : r8.itemLeadingAvatar, null == (s8 = t9.ui) ? void 0 : s8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u7 = i2.ui) ? void 0 : u7.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d4 = i2.ui) ? void 0 : d4.itemLeadingChip, null == (c4 = t9.ui) ? void 0 : c4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n8 = i2.ui) ? void 0 : n8.itemLabel, fe2(t9) && (null == (r7 = t9.ui) ? void 0 : r7.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: o6 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s7 = i2.ui) ? void 0 : s7.itemTrailing, fe2(t9) && (null == (u6 = t9.ui) ? void 0 : u6.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: o6 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, n9;
                    return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n9 = t9.ui) ? void 0 : n9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), se2.value && "bottom" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
          }), _: 3 }, 8, ["class"]), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Ce), Wt.mergeProps({ key: 0 }, _2.value, { class: ee2.value.arrow({ class: null == (c2 = i2.ui) ? void 0 : c2.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          n5(pm.ssrRenderComponent(Wt.unref(E), { trapped: "", class: ee2.value.focusScope({ class: null == (s5 = i2.ui) ? void 0 : s5.focusScope }) }, { default: Wt.withCtx((t7, n6, o5, r6) => {
            var s6, u5, d3, c3;
            if (!n6) return [Wt.renderSlot(a3.$slots, "content-top"), e2.searchInput ? (Wt.openBlock(), Wt.createBlock(Wt.unref($e), { key: 0, modelValue: x2.value, "onUpdate:modelValue": (e3) => x2.value = e3, "display-value": () => x2.value, "as-child": "" }, { default: Wt.withCtx(() => {
              var a4;
              return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (a4 = i2.ui) ? void 0 : a4.input }) }), null, 16, ["size", "class"])];
            }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(Se), { class: ee2.value.empty({ class: null == (d3 = i2.ui) ? void 0 : d3.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: ee2.value.viewport({ class: null == (c3 = i2.ui) ? void 0 : c3.viewport }) }, [se2.value && "top" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(oe2.value, (t8, n7) => {
              var o6;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(_e), { key: `group-${n7}`, class: ee2.value.group({ class: null == (o6 = i2.ui) ? void 0 : o6.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t8, (t9, o7) => {
                var r7, s7, u6, d4, c4, m2;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n7}-${o7}` }, [fe2(t9) && "label" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (r7 = i2.ui) ? void 0 : r7.label, null == (s7 = t9.ui) ? void 0 : s7.label, t9.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : fe2(t9) && "separator" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u6 = i2.ui) ? void 0 : u6.separator, null == (d4 = t9.ui) ? void 0 : d4.separator, t9.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c4 = i2.ui) ? void 0 : c4.item, fe2(t9) && (null == (m2 = t9.ui) ? void 0 : m2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t9, index: o7 }, () => {
                  var n8, r8, s8, u7;
                  return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: o7 }, () => {
                    var e3, a4, n9, o8, r9, s9, u8, d5, c5;
                    return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o8 = i2.ui) ? void 0 : o8.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatar, null == (s9 = t9.ui) ? void 0 : s9.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u8 = i2.ui) ? void 0 : u8.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChip, null == (c5 = t9.ui) ? void 0 : c5.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (n8 = i2.ui) ? void 0 : n8.itemLabel, fe2(t9) && (null == (r8 = t9.ui) ? void 0 : r8.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: o7 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s8 = i2.ui) ? void 0 : s8.itemTrailing, fe2(t9) && (null == (u7 = t9.ui) ? void 0 : u7.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: o7 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var a4, n9;
                    return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n9 = t9.ui) ? void 0 : n9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128)), se2.value && "bottom" === ce2.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Z2), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(a3.$slots, "content-bottom")];
            pm.ssrRenderSlot(a3.$slots, "content-top", {}, null, n6, o5, r6), e2.searchInput ? n6(pm.ssrRenderComponent(Wt.unref($e), { modelValue: x2.value, "onUpdate:modelValue": (e3) => x2.value = e3, "display-value": () => x2.value, "as-child": "" }, { default: Wt.withCtx((a4, t8, n7, o6) => {
              var r7, s7;
              if (!t8) return [Wt.createVNode(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (s7 = i2.ui) ? void 0 : s7.input }) }), null, 16, ["size", "class"])];
              t8(pm.ssrRenderComponent(c, Wt.mergeProps({ autofocus: "", autocomplete: "off", size: e2.size }, T2.value, { class: ee2.value.input({ class: null == (r7 = i2.ui) ? void 0 : r7.input }) }), null, n7, o6));
            }), _: 2 }, o5, r6)) : n6("<!---->"), n6(pm.ssrRenderComponent(Wt.unref(Se), { class: ee2.value.empty({ class: null == (s6 = i2.ui) ? void 0 : s6.empty }) }, { default: Wt.withCtx((e3, t8, i3, n7) => {
              if (!t8) return [Wt.renderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData")), 1)])];
              pm.ssrRenderSlot(a3.$slots, "empty", { searchTerm: x2.value }, () => {
                t8(`${pm.ssrInterpolate(x2.value ? Wt.unref(k2)("selectMenu.noMatch", { searchTerm: x2.value }) : Wt.unref(k2)("selectMenu.noData"))}`);
              }, t8, i3, n7);
            }), _: 2 }, o5, r6)), n6(`<div role="presentation" class="${pm.ssrRenderClass(ee2.value.viewport({ class: null == (u5 = i2.ui) ? void 0 : u5.viewport }))}"${r6}>`), se2.value && "top" === ce2.value ? n6(pm.ssrRenderComponent(Wt.unref(Z2), null, null, o5, r6)) : n6("<!---->"), n6("<!--[-->"), pm.ssrRenderList(oe2.value, (t8, s7) => {
              var u6;
              n6(pm.ssrRenderComponent(Wt.unref(_e), { key: `group-${s7}`, class: ee2.value.group({ class: null == (u6 = i2.ui) ? void 0 : u6.group }) }, { default: Wt.withCtx((n7, o6, r7, u7) => {
                if (!o6) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t8, (t9, n8) => {
                  var o7, r8, u8, d4, c4, m2;
                  return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${s7}-${n8}` }, [fe2(t9) && "label" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Pe), { key: 0, class: ee2.value.label({ class: [null == (o7 = i2.ui) ? void 0 : o7.label, null == (r8 = t9.ui) ? void 0 : r8.label, t9.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : fe2(t9) && "separator" === t9.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Oe), { key: 1, class: ee2.value.separator({ class: [null == (u8 = i2.ui) ? void 0 : u8.separator, null == (d4 = t9.ui) ? void 0 : d4.separator, t9.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(De), { key: 2, class: ee2.value.item({ class: [null == (c4 = i2.ui) ? void 0 : c4.item, fe2(t9) && (null == (m2 = t9.ui) ? void 0 : m2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "item", { item: t9, index: n8 }, () => {
                    var o8, r9, s8, u9;
                    return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: n8 }, () => {
                      var e3, a4, n9, o9, r10, s9, u10, d5, c5;
                      return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o9 = i2.ui) ? void 0 : o9.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r10 = i2.ui) ? void 0 : r10.itemLeadingAvatar, null == (s9 = t9.ui) ? void 0 : s9.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u10 = i2.ui) ? void 0 : u10.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChip, null == (c5 = t9.ui) ? void 0 : c5.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                    }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (o8 = i2.ui) ? void 0 : o8.itemLabel, fe2(t9) && (null == (r9 = t9.ui) ? void 0 : r9.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: n8 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s8 = i2.ui) ? void 0 : s8.itemTrailing, fe2(t9) && (null == (u9 = t9.ui) ? void 0 : u9.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: n8 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                      var a4, n9;
                      return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n9 = t9.ui) ? void 0 : n9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                    }), _: 2 }, 1024)], 2)];
                  })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
                }), 128))];
                o6("<!--[-->"), pm.ssrRenderList(t8, (t9, n8) => {
                  var s8, d4, c4, m2, v2, g2;
                  o6("<!--[-->"), fe2(t9) && "label" === t9.type ? o6(pm.ssrRenderComponent(Wt.unref(Pe), { class: ee2.value.label({ class: [null == (s8 = i2.ui) ? void 0 : s8.label, null == (d4 = t9.ui) ? void 0 : d4.label, t9.class] }) }, { default: Wt.withCtx((e3, a4, n9, o7) => {
                    if (!a4) return [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(t9, i2.labelKey)), 1)];
                    a4(`${pm.ssrInterpolate(Wt.unref(fg)(t9, i2.labelKey))}`);
                  }), _: 2 }, r7, u7)) : fe2(t9) && "separator" === t9.type ? o6(pm.ssrRenderComponent(Wt.unref(Oe), { class: ee2.value.separator({ class: [null == (c4 = i2.ui) ? void 0 : c4.separator, null == (m2 = t9.ui) ? void 0 : m2.separator, t9.class] }) }, null, r7, u7)) : o6(pm.ssrRenderComponent(Wt.unref(De), { class: ee2.value.item({ class: [null == (v2 = i2.ui) ? void 0 : v2.item, fe2(t9) && (null == (g2 = t9.ui) ? void 0 : g2.item), fe2(t9) && t9.class] }), disabled: fe2(t9) && t9.disabled, value: i2.valueKey && fe2(t9) ? Wt.unref(fg)(t9, i2.valueKey) : t9, onSelect: (e3) => ge2(e3, t9) }, { default: Wt.withCtx((o7, r8, s9, u8) => {
                    if (!r8) return [Wt.renderSlot(a3.$slots, "item", { item: t9, index: n8 }, () => {
                      var o8, r9, s10, u9;
                      return [Wt.renderSlot(a3.$slots, "item-leading", { item: t9, index: n8 }, () => {
                        var e3, a4, n9, o9, r10, s11, u10, d5, c5;
                        return [fe2(t9) && t9.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : fe2(t9) && t9.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o9 = i2.ui) ? void 0 : o9.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (r10 = i2.ui) ? void 0 : r10.itemLeadingAvatar, null == (s11 = t9.ui) ? void 0 : s11.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : fe2(t9) && t9.chip ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 2, size: (null == (u10 = i2.ui) ? void 0 : u10.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChip, null == (c5 = t9.ui) ? void 0 : c5.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                      }), Wt.createVNode("span", { class: ee2.value.itemLabel({ class: [null == (o8 = i2.ui) ? void 0 : o8.itemLabel, fe2(t9) && (null == (r9 = t9.ui) ? void 0 : r9.itemLabel)] }) }, [Wt.renderSlot(a3.$slots, "item-label", { item: t9, index: n8 }, () => [Wt.createTextVNode(Wt.toDisplayString(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9), 1)])], 2), Wt.createVNode("span", { class: ee2.value.itemTrailing({ class: [null == (s10 = i2.ui) ? void 0 : s10.itemTrailing, fe2(t9) && (null == (u9 = t9.ui) ? void 0 : u9.itemTrailing)] }) }, [Wt.renderSlot(a3.$slots, "item-trailing", { item: t9, index: n8 }), Wt.createVNode(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx(() => {
                        var a4, n9;
                        return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (a4 = i2.ui) ? void 0 : a4.itemTrailingIcon, fe2(t9) && (null == (n9 = t9.ui) ? void 0 : n9.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                      }), _: 2 }, 1024)], 2)];
                    })];
                    pm.ssrRenderSlot(a3.$slots, "item", { item: t9, index: n8 }, () => {
                      var o8, d5, c5, m3;
                      pm.ssrRenderSlot(a3.$slots, "item-leading", { item: t9, index: n8 }, () => {
                        var e3, a4, n9, o9, d6, c6, m4, v3, p2;
                        fe2(t9) && t9.icon ? r8(pm.ssrRenderComponent(gb, { name: t9.icon, class: ee2.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (a4 = t9.ui) ? void 0 : a4.itemLeadingIcon] }) }, null, s9, u8)) : fe2(t9) && t9.avatar ? r8(pm.ssrRenderComponent(_b, Wt.mergeProps({ size: (null == (n9 = t9.ui) ? void 0 : n9.itemLeadingAvatarSize) || (null == (o9 = i2.ui) ? void 0 : o9.itemLeadingAvatarSize) || ee2.value.itemLeadingAvatarSize() }, { ref_for: true }, t9.avatar, { class: ee2.value.itemLeadingAvatar({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemLeadingAvatar, null == (c6 = t9.ui) ? void 0 : c6.itemLeadingAvatar] }) }), null, s9, u8)) : fe2(t9) && t9.chip ? r8(pm.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (m4 = i2.ui) ? void 0 : m4.itemLeadingChipSize) || ee2.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, t9.chip, { class: ee2.value.itemLeadingChip({ class: [null == (v3 = i2.ui) ? void 0 : v3.itemLeadingChip, null == (p2 = t9.ui) ? void 0 : p2.itemLeadingChip] }) }), null, s9, u8)) : r8("<!---->");
                      }, r8, s9, u8), r8(`<span class="${pm.ssrRenderClass(ee2.value.itemLabel({ class: [null == (o8 = i2.ui) ? void 0 : o8.itemLabel, fe2(t9) && (null == (d5 = t9.ui) ? void 0 : d5.itemLabel)] }))}"${u8}>`), pm.ssrRenderSlot(a3.$slots, "item-label", { item: t9, index: n8 }, () => {
                        r8(`${pm.ssrInterpolate(fe2(t9) ? Wt.unref(fg)(t9, i2.labelKey) : t9)}`);
                      }, r8, s9, u8), r8(`</span><span class="${pm.ssrRenderClass(ee2.value.itemTrailing({ class: [null == (c5 = i2.ui) ? void 0 : c5.itemTrailing, fe2(t9) && (null == (m3 = t9.ui) ? void 0 : m3.itemTrailing)] }))}"${u8}>`), pm.ssrRenderSlot(a3.$slots, "item-trailing", { item: t9, index: n8 }, null, r8, s9, u8), r8(pm.ssrRenderComponent(Wt.unref(qe), { "as-child": "" }, { default: Wt.withCtx((a4, n9, o9, r9) => {
                        var s10, u9, d6, c6;
                        if (!n9) return [Wt.createVNode(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemTrailingIcon, fe2(t9) && (null == (c6 = t9.ui) ? void 0 : c6.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                        n9(pm.ssrRenderComponent(gb, { name: e2.selectedIcon || Wt.unref(C2).ui.icons.check, class: ee2.value.itemTrailingIcon({ class: [null == (s10 = i2.ui) ? void 0 : s10.itemTrailingIcon, fe2(t9) && (null == (u9 = t9.ui) ? void 0 : u9.itemTrailingIcon)] }) }, null, o9, r9));
                      }), _: 2 }, s9, u8)), r8("</span>");
                    }, r8, s9, u8);
                  }), _: 2 }, r7, u7)), o6("<!--]-->");
                }), o6("<!--]-->");
              }), _: 2 }, o5, r6));
            }), n6("<!--]-->"), se2.value && "bottom" === ce2.value ? n6(pm.ssrRenderComponent(Wt.unref(Z2), null, null, o5, r6)) : n6("<!---->"), n6("</div>"), pm.ssrRenderSlot(a3.$slots, "content-bottom", {}, null, n6, o5, r6);
          }), _: 2 }, o4, r5)), e2.arrow ? n5(pm.ssrRenderComponent(Wt.unref(Ce), Wt.mergeProps(_2.value, { class: ee2.value.arrow({ class: null == (u4 = i2.ui) ? void 0 : u4.arrow }) }), null, o4, r5)) : n5("<!---->");
        }), _: 2 }, o3, r4));
      }), _: 2 }, s3, u2));
    }), _: 3 }, r2)), t3("<!--]-->");
  };
} }), tl = al.setup;
al.setup = (e2, a2) => {
  const t2 = Wt.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue"), tl ? tl(e2, a2) : void 0;
};
const il = Wt.defineComponent({ __name: "ComboBox", __ssrInlineRender: true, props: { isOpsi: { type: Boolean, default: true }, url: { type: String, default: "" }, params: { type: Object, default: () => ({}) }, class: { type: String, default: "" }, isImmediate: { type: Boolean, default: false }, items: { type: Array, default: () => [] }, fetchOnSearch: { type: Boolean, default: false }, labelKey: { type: String, default: "text" }, valueKey: { type: String, default: "value" }, modelValue: { type: [String, Number, Array], default: null }, multiple: { type: Boolean }, disabled: { type: Boolean, default: false } }, emits: ["blur", "change", "focus", "update:open", "create", "highlight", "update:modelValue", "update:value", "update:searchTerm"], async setup(e2, { emit: a2 }) {
  let t2, i2;
  const n2 = Wt.ref(false), o2 = Wt.useAttrs(), r2 = e2, s2 = a2, u2 = Wt.ref(r2.modelValue), d2 = useRootStore(), { auth: c2 } = Qs.storeToRefs(d2), m2 = Wt.computed(() => {
    var e3;
    return r.defaults.headers.common.Authorization || `Bearer ${null == (e3 = c2.value) ? void 0 : e3.access_token}`;
  }), v2 = Wt.computed(() => ({ ...r2.params })), { data: p2, status: g2, error: y2, execute: b2 } = ([t2, i2] = Wt.withAsyncContext(() => re("https://lms-sttal.dev-app.online/s22-api/lms-sttal-api/index.php" + ((null == r2 ? void 0 : r2.isOpsi) ? `/api/master/${null == r2 ? void 0 : r2.url}/get-opsi` : `/${null == r2 ? void 0 : r2.url}`), { immediate: r2.isImmediate || null !== r2.modelValue, params: v2, onRequest({ request: e3, options: l2 }) {
    l2.headers || (l2.headers = new Headers()), l2.headers.set("Authorization", m2.value);
  }, transform: (e3) => (console.log("ComboBox", r2.params), Array.isArray(e3.data) ? e3.data.map((e4) => ({ text: e4[r2.labelKey] || e4.text, value: e4[r2.valueKey] || e4.value, ...e4 })) : e3.data && Array.isArray(e3.data.data) ? e3.data.data.map((e4) => ({ text: e4[r2.labelKey] || e4.nama || e4.text || e4.name, value: e4[r2.valueKey] || e4.id || e4.value, ...e4 })) : e3.data) }, "$cLCUH2NWYy")), t2 = await t2, i2(), t2), x2 = Wt.computed(() => Array.isArray(p2.value) && p2.value.length > 0 ? p2.value : r2.items);
  Wt.computed({ get: () => {
    var e3;
    return Array.isArray(r2.modelValue) ? r2.modelValue.join(",") : (null == (e3 = r2.modelValue) ? void 0 : e3.toString()) || "";
  }, set: (e3) => {
    s2("update:modelValue", e3);
  } });
  const B2 = Wt.computed(() => ({ ...o2, ...r2, items: x2.value, class: `${r2.class || ""} ${o2.class || ""}`.trim(), open: r2.multiple ? n2.value : void 0, debounce: r2.multiple ? 150 : 0 }));
  Wt.watch(() => r2.modelValue, (e3) => {
    u2.value = e3;
  }), Wt.watch(() => r2.params, (e3, l2) => {
    JSON.stringify(e3) !== JSON.stringify(l2) && b2();
  }, { deep: true });
  const S2 = Wt.ref(0);
  function I2(e3) {
    s2("blur", e3);
  }
  function L2(e3) {
    s2("change", e3);
  }
  function z2(e3) {
    console.log("handleFocus", e3), r2.multiple && (n2.value = true), s2("focus", e3);
  }
  function _2(e3) {
    console.log("onOpen", e3), r2.multiple && e3 !== n2.value && (n2.value = e3), s2("update:open", e3), e3 && Array.isArray(x2.value) && !x2.value.length && 0 === r2.items.length && b2();
  }
  function T2(e3) {
    s2("create", e3);
  }
  function $2(e3) {
    s2("highlight", e3);
  }
  function N2(e3) {
    var l2;
    const a3 = (null == (l2 = x2.value) ? void 0 : l2.find((l3) => l3.value === e3)) || e3;
    s2("update:value", a3), s2("update:modelValue", e3);
  }
  function A2(e3) {
    console.log("handleUpdateSearchTerm", e3), s2("update:searchTerm", e3);
  }
  return Wt.watch(y2, (e3) => {
    var l2, a3, t3;
    if (e3) {
      console.error("Error fetching data:", null == (l2 = null == e3 ? void 0 : e3.message) ? void 0 : l2.includes("401"), null == (a3 = null == e3 ? void 0 : e3.message) ? void 0 : a3.includes("another request"), e3);
      const i3 = (l3 = (null == e3 ? void 0 : e3.message) || "Terjadi Kesalahan Pada Server") => {
        var a4;
        (null == (a4 = null == e3 ? void 0 : e3.message) ? void 0 : a4.includes("another request")) || l().add({ title: "Gagal Memuat Data", description: l3, color: "error" });
      };
      (null == (t3 = null == e3 ? void 0 : e3.message) ? void 0 : t3.includes("401")) ? S2.value < 1 ? (S2.value++, null == d2 || d2.fetchCookie().then(() => {
        b2();
      })) : (S2.value = 0, d2.logout(), i3()) : i3();
    }
  }), Wt.watch(u2, (e3) => {
    s2("update:modelValue", e3);
  }), (a3, t3, i3, n3) => {
    const o3 = Ob, s3 = gb;
    pm.ssrRenderVNode(t3, Wt.createVNode(Wt.resolveDynamicComponent(r2.multiple ? Wt.unref(Ze) : Wt.unref(al)), Wt.mergeProps(Wt.unref(B2), { modelValue: Wt.unref(u2), "onUpdate:modelValue": [(e3) => Wt.isRef(u2) ? u2.value = e3 : null, N2], onBlur: I2, onChange: L2, onFocus: z2, "onUpdate:open": _2, onCreate: T2, onHighlight: $2, "onUpdate:searchTerm": A2, props: r2, items: Wt.unref(x2), labelKey: r2.labelKey, valueKey: r2.valueKey, loading: "pending" === Wt.unref(g2) }, n3), Wt.createSlots({ _: 2 }, [a3.$slots.leading ? { name: "leading", fn: Wt.withCtx(({ modelValue: e3, open: t4, ui: i4 }, n4, o4, r3) => {
      var s4, u3;
      if (!n4) return [Wt.renderSlot(a3.$slots, "leading", { modelValue: (null == (u3 = Wt.unref(x2)) ? void 0 : u3.find((l2) => l2.value === e3)) || e3, open: t4, ui: i4 })];
      pm.ssrRenderSlot(a3.$slots, "leading", { modelValue: (null == (s4 = Wt.unref(x2)) ? void 0 : s4.find((l2) => l2.value === e3)) || e3, open: t4, ui: i4 }, null, n4, o4, r3);
    }), key: "0" } : void 0, !e2.multiple || a3.$slots.trailing ? { name: "trailing", fn: Wt.withCtx(({ modelValue: t4, open: i4, ui: n4 }, u3, d3, c3) => {
      var m3, v3;
      if (!u3) return [a3.$slots.trailing ? Wt.renderSlot(a3.$slots, "trailing", { key: 0, modelValue: (null == (v3 = Wt.unref(x2)) ? void 0 : v3.find((e3) => e3.value === t4)) || t4, open: i4, ui: n4 }) : Wt.createCommentVNode("", true), !t4 || e2.multiple || (null == r2 ? void 0 : r2.disabled) ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock(o3, { key: 1, variant: "link", square: "", size: (null == r2 ? void 0 : r2.size) || "md", class: "text-danger cursor-pointer p-0", onClick: Wt.withModifiers((e3) => N2(null), ["stop", "prevent"]) }, { default: Wt.withCtx(() => [Wt.createVNode(s3, { name: "i-lucide-x" })]), _: 1 }, 8, ["size", "onClick"]))];
      a3.$slots.trailing ? pm.ssrRenderSlot(a3.$slots, "trailing", { modelValue: (null == (m3 = Wt.unref(x2)) ? void 0 : m3.find((e3) => e3.value === t4)) || t4, open: i4, ui: n4 }, null, u3, d3, c3) : u3("<!---->"), !t4 || e2.multiple || (null == r2 ? void 0 : r2.disabled) ? u3("<!---->") : u3(pm.ssrRenderComponent(o3, { variant: "link", square: "", size: (null == r2 ? void 0 : r2.size) || "md", class: "text-danger cursor-pointer p-0", onClick: (e3) => N2(null) }, { default: Wt.withCtx((e3, a4, t5, i5) => {
        if (!a4) return [Wt.createVNode(s3, { name: "i-lucide-x" })];
        a4(pm.ssrRenderComponent(s3, { name: "i-lucide-x" }, null, t5, i5));
      }), _: 2 }, d3, c3));
    }), key: "1" } : void 0, a3.$slots.empty ? { name: "empty", fn: Wt.withCtx(({ searchTerm: e3 }, t4, i4, n4) => {
      if (!t4) return [Wt.renderSlot(a3.$slots, "empty", { searchTerm: e3 })];
      pm.ssrRenderSlot(a3.$slots, "empty", { searchTerm: e3 }, null, t4, i4, n4);
    }), key: "2" } : void 0, a3.$slots.item ? { name: "item", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "item", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "item", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "3" } : void 0, a3.$slots["item-leading"] ? { name: "item-leading", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "item-leading", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "item-leading", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "4" } : void 0, a3.$slots["item-label"] ? { name: "item-label", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "item-label", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "item-label", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "5" } : void 0, a3.$slots["item-trailing"] ? { name: "item-trailing", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "item-trailing", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "item-trailing", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "6" } : void 0, e2.multiple && a3.$slots["tags-item-text"] ? { name: "tags-item-text", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "tags-item-text", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "tags-item-text", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "7" } : void 0, e2.multiple && a3.$slots["tags-item-delete"] ? { name: "tags-item-delete", fn: Wt.withCtx(({ item: e3, index: t4 }, i4, n4, o4) => {
      if (!i4) return [Wt.renderSlot(a3.$slots, "tags-item-delete", { item: e3, index: t4 })];
      pm.ssrRenderSlot(a3.$slots, "tags-item-delete", { item: e3, index: t4 }, null, i4, n4, o4);
    }), key: "8" } : void 0, a3.$slots["content-top"] ? { name: "content-top", fn: Wt.withCtx((e3, t4, i4, n4) => {
      if (!t4) return [Wt.renderSlot(a3.$slots, "content-top")];
      pm.ssrRenderSlot(a3.$slots, "content-top", {}, null, t4, i4, n4);
    }), key: "9" } : void 0, a3.$slots["content-bottom"] ? { name: "content-bottom", fn: Wt.withCtx((e3, t4, i4, n4) => {
      if (!t4) return [Wt.renderSlot(a3.$slots, "content-bottom")];
      pm.ssrRenderSlot(a3.$slots, "content-bottom", {}, null, t4, i4, n4);
    }), key: "10" } : void 0, a3.$slots["create-item-label"] ? { name: "create-item-label", fn: Wt.withCtx(({ item: e3 }, t4, i4, n4) => {
      if (!t4) return [Wt.renderSlot(a3.$slots, "create-item-label", { item: e3 })];
      pm.ssrRenderSlot(a3.$slots, "create-item-label", { item: e3 }, null, t4, i4, n4);
    }), key: "11" } : void 0])), i3);
  };
} }), nl = il.setup;
il.setup = (e2, a2) => {
  const t2 = Wt.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("components/ui/ComboBox.vue"), nl ? nl(e2, a2) : void 0;
};

export { il as default };
//# sourceMappingURL=ComboBox-DNifnjfu.mjs.map

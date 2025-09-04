import { v as Wt, p as Qs, s as om, _ as kb, c as hb, q as _s, x as Zo, y as oa, u as ua, r as Mm, e as eg, h as _m, i as wm, t as Hy, z as hg, A as pg, B as dg, d as Sb, C as bb, o as Re, P as xm, D as rg } from './server.mjs';
import { l as hash, m as defu, j as isEqual } from '../_/nitro.mjs';
import { r } from './axios-BfCSAjfx.mjs';
import { t } from './useToast-DJ8z3Z8V.mjs';
import { v } from './index-CLkrk2zK.mjs';
import { l } from './useLocale-BepRiSpk.mjs';
import { O, c } from './usePortal-DzDMWCd7.mjs';
import { z as ze, X, f as fe$1, x as xe, a as ae$1, W, h as he$1, L as Le, V as Ve, s as se$1, u as ue$1, S as Se, w as we, C as Ce, r as re$1 } from './SelectMenu-Dc6b35ZD.mjs';
import { F, C, N, x, T } from './useForwardPropsEmits-DnSfSOTI.mjs';
import { l as l$1 } from './Collection-CK0B56BN.mjs';
import { n } from './usePrimitiveElement-BqlHGOiE.mjs';
import { e } from './useFormControl-BKZlrIrW.mjs';
import { r as r$1 } from './useArrowNavigation-Cic7byI7.mjs';
import { n as n$1 } from './VisuallyHiddenInput-BCSgpyOT.mjs';
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
import './ConfigProvider-C3zU966T.mjs';
import './Input-BTq7Ekjb.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './utils-B3GHb33t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useTypeahead-CXda91ln.mjs';
import './useKbd-kRIii9yh.mjs';
import './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';

var te = Re();
function ae(e2, n2, r2) {
  const [o2 = {}, s2] = "string" == typeof n2 ? [{}, n2] : [n2, r2];
  return function(e3, n3, r3) {
    const [o3 = {}, s3] = "string" == typeof n3 ? [{}, n3] : [n3, r3], u2 = Wt.computed(() => Wt.toValue(e3)), d2 = Wt.computed(() => Wt.toValue(o3.key) || "$f" + hash([s3, "string" == typeof u2.value ? u2.value : "", ...ie(o3)]));
    if (!o3.baseURL && "string" == typeof u2.value && "/" === u2.value[0] && "/" === u2.value[1]) throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const { server: c2, lazy: m2, default: v2, transform: p2, pick: g2, watch: f2, immediate: h2, getCachedData: y2, deep: x2, dedupe: b2, ...k2 } = o3, S2 = Wt.reactive({ ..._s, ...k2, cache: "boolean" == typeof o3.cache ? void 0 : o3.cache }), C2 = { server: c2, lazy: m2, default: v2, transform: p2, pick: g2, immediate: h2, getCachedData: y2, deep: x2, dedupe: b2, watch: false === f2 ? [] : [...f2 || [], S2] };
    if (!h2) {
      let e4 = function() {
        C2.immediate = true;
      };
      Wt.watch(d2, e4, { flush: "sync", once: true }), Wt.watch([...f2 || [], S2], e4, { flush: "sync", once: true });
    }
    let B2;
    return Zo(false === f2 ? d2.value : d2, () => {
      var e4;
      null == (e4 = null == B2 ? void 0 : B2.abort) || e4.call(B2, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), B2 = "undefined" != typeof AbortController ? new AbortController() : {};
      const t2 = Wt.toValue(o3.timeout);
      let a2;
      t2 && (a2 = setTimeout(() => B2.abort(new DOMException("Request aborted due to timeout.", "AbortError")), t2), B2.signal.onabort = () => clearTimeout(a2));
      let n4 = o3.$fetch || globalThis.$fetch;
      return o3.$fetch || "string" == typeof u2.value && "/" === u2.value[0] && (!Wt.toValue(o3.baseURL) || "/" === Wt.toValue(o3.baseURL)[0]) && (n4 = oa()), n4(u2.value, { signal: B2.signal, ...S2 }).finally(() => {
        clearTimeout(a2);
      });
    }, C2);
  }(e2, { ...o2, lazy: true }, s2);
}
function ie(e2) {
  var t2;
  const a2 = [(null == (t2 = Wt.toValue(e2.method)) ? void 0 : t2.toUpperCase()) || "GET", Wt.toValue(e2.baseURL)];
  for (const i2 of [e2.params || e2.query]) {
    const e3 = Wt.toValue(i2);
    if (!e3) continue;
    const t3 = {};
    for (const [a3, i3] of Object.entries(e3)) t3[Wt.toValue(a3)] = Wt.toValue(i3);
    a2.push(t3);
  }
  if (e2.body) {
    const t3 = Wt.toValue(e2.body);
    if (t3) if (t3 instanceof ArrayBuffer) a2.push(hash(Object.fromEntries([...new Uint8Array(t3).entries()].map(([e3, l2]) => [e3, l2.toString()]))));
    else if (t3 instanceof FormData) {
      const e3 = {};
      for (const l2 of t3.entries()) {
        const [t4, a3] = l2;
        e3[t4] = a3 instanceof File ? a3.name : a3;
      }
      a2.push(hash(e3));
    } else if (te.isPlainObject(t3)) a2.push(hash(Wt.reactive(t3)));
    else try {
      a2.push(hash(t3));
    } catch {
      console.warn("[useFetch] Failed to hash body", t3);
    }
    else a2.push(hash(t3));
  }
  return a2;
}
const [ne, re] = T("TagsInputRoot"), oe = Wt.defineComponent({ __name: "TagsInputRoot", props: { modelValue: {}, defaultValue: { default: () => [] }, addOnPaste: { type: Boolean }, addOnTab: { type: Boolean }, addOnBlur: { type: Boolean }, duplicate: { type: Boolean }, disabled: { type: Boolean }, delimiter: { default: "," }, dir: {}, max: { default: 0 }, id: {}, convertValue: {}, displayValue: { type: Function, default: (e2) => e2.toString() }, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "invalid", "addTag", "removeTag"], setup(e2, { emit: t2 }) {
  const a2 = e2, i2 = t2, { addOnPaste: r2, disabled: o2, delimiter: s2, max: u2, id: d2, dir: c2, addOnBlur: m2, addOnTab: v2 } = Wt.toRefs(a2), p2 = n(c2), g2 = C(a2, "modelValue", i2, { defaultValue: a2.defaultValue, passive: true, deep: true }), { forwardRef: f2, currentElement: h2 } = N(), { focused: y2 } = x(h2), x2 = e(h2), { getItems: b2, CollectionSlot: k2 } = l$1({ isProvider: true }), I2 = Wt.ref(), S2 = Wt.ref(false), C2 = Wt.computed(() => Array.isArray(g2.value) ? [...g2.value] : []);
  function B2(e3) {
    if (-1 !== e3) {
      const l2 = b2().filter((e4) => "" !== e4.ref.dataset.disabled);
      g2.value = g2.value.filter((l3, t3) => t3 !== e3), i2("removeTag", l2[e3].value);
    }
  }
  return re({ modelValue: g2, onAddValue: (e3) => {
    const l2 = [...C2.value], t3 = l2.length > 0 && "object" == typeof l2[0], n2 = l2.length > 0 && "object" == typeof a2.defaultValue[0];
    if ((t3 || n2) && "function" != typeof a2.convertValue) throw new Error("You must provide a `convertValue` function when using objects as values.");
    const r3 = a2.convertValue ? a2.convertValue(e3) : e3;
    if (l2.length >= u2.value && u2.value) return i2("invalid", r3), false;
    if (a2.duplicate) return g2.value = [...l2, r3], i2("addTag", r3), true;
    if (!l2.includes(r3)) return g2.value = [...l2, r3], i2("addTag", r3), true;
    S2.value = true;
    return i2("invalid", r3), false;
  }, onRemoveValue: B2, onInputKeydown: (e3) => {
    const l2 = e3.target, t3 = b2().map((e4) => e4.ref).filter((e4) => "" !== e4.dataset.disabled);
    if (!t3.length) return;
    const a3 = t3.at(-1);
    switch (e3.key) {
      case "Delete":
      case "Backspace":
        if (0 !== l2.selectionStart || 0 !== l2.selectionEnd) break;
        if (I2.value) {
          const l3 = t3.findIndex((e4) => e4 === I2.value);
          B2(l3), I2.value = I2.value === a3 ? t3.at(l3 - 1) : t3.at(l3 + 1), e3.preventDefault();
        } else "Backspace" === e3.key && (I2.value = a3, e3.preventDefault());
        break;
      case "Home":
      case "End":
      case "ArrowRight":
      case "ArrowLeft": {
        const i3 = "ArrowRight" === e3.key && "ltr" === p2.value || "ArrowLeft" === e3.key && "rtl" === p2.value, n2 = !i3;
        if (0 !== l2.selectionStart || 0 !== l2.selectionEnd) break;
        if (n2 && !I2.value) I2.value = a3, e3.preventDefault();
        else if (i3 && a3 && I2.value === a3) I2.value = void 0, e3.preventDefault();
        else if (I2.value) {
          const l3 = r$1(e3, I2.value, void 0, { itemsArray: t3, loop: false, dir: p2.value });
          l3 && (I2.value = l3), e3.preventDefault();
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        I2.value && e3.preventDefault();
        break;
      default:
        I2.value = void 0;
    }
  }, selectedElement: I2, isInvalidInput: S2, addOnPaste: r2, addOnBlur: m2, addOnTab: v2, dir: p2, disabled: o2, delimiter: s2, max: u2, id: d2, displayValue: a2.displayValue }), (e3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(k2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(xm), { ref: Wt.unref(f2), dir: Wt.unref(p2), as: e3.as, "as-child": e3.asChild, "data-invalid": S2.value ? "" : void 0, "data-disabled": Wt.unref(o2) ? "" : void 0, "data-focused": Wt.unref(y2) ? "" : void 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { modelValue: Wt.unref(g2) }), Wt.unref(x2) && e3.name ? (Wt.openBlock(), Wt.createBlock(Wt.unref(n$1), { key: 0, name: e3.name, value: Wt.unref(g2), required: e3.required, disabled: Wt.unref(o2) }, null, 8, ["name", "value", "required", "disabled"])) : Wt.createCommentVNode("", true)]), _: 3 }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])]), _: 3 }));
} }), se = Wt.defineComponent({ __name: "TagsInputInput", props: { placeholder: {}, autoFocus: { type: Boolean }, maxLength: {}, asChild: { type: Boolean }, as: { default: "input" } }, setup(e2) {
  const t2 = ne(), { forwardRef: a2 } = N();
  function i2(e3) {
    if (t2.selectedElement.value = void 0, !t2.addOnBlur.value) return;
    const l2 = e3.target;
    if (!l2.value) return;
    t2.onAddValue(l2.value) && (l2.value = "");
  }
  function r2(e3) {
    t2.addOnTab.value && d2(e3);
  }
  const o2 = Wt.ref(false);
  function s2() {
    o2.value = true;
  }
  function u2() {
    requestAnimationFrame(() => {
      o2.value = false;
    });
  }
  async function d2(e3) {
    if (o2.value) return;
    if (await Wt.nextTick(), e3.defaultPrevented) return;
    const a3 = e3.target;
    if (!a3.value) return;
    t2.onAddValue(a3.value) && (a3.value = ""), e3.preventDefault();
  }
  function c2(e3) {
    if (t2.isInvalidInput.value = false, null === e3.data) return;
    const l2 = t2.delimiter.value;
    if (l2 === e3.data || l2 instanceof RegExp && l2.test(e3.data)) {
      const a3 = e3.target;
      a3.value = a3.value.replace(l2, "");
      t2.onAddValue(a3.value) && (a3.value = "");
    }
  }
  function m2(e3) {
    if (t2.addOnPaste.value) {
      e3.preventDefault();
      const l2 = e3.clipboardData;
      if (!l2) return;
      const a3 = l2.getData("text");
      if (t2.delimiter.value) {
        a3.split(t2.delimiter.value).forEach((e4) => {
          t2.onAddValue(e4);
        });
      } else t2.onAddValue(a3);
    }
  }
  return (e3, o3) => {
    var v2;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(xm), { id: null == (v2 = Wt.unref(t2).id) ? void 0 : v2.value, ref: Wt.unref(a2), type: "text", autocomplete: "off", autocorrect: "off", autocapitalize: "off", as: e3.as, "as-child": e3.asChild, maxlength: e3.maxLength, placeholder: e3.placeholder, disabled: Wt.unref(t2).disabled.value, "data-invalid": Wt.unref(t2).isInvalidInput.value ? "" : void 0, onInput: c2, onKeydown: [Wt.withKeys(d2, ["enter"]), Wt.withKeys(r2, ["tab"]), Wt.unref(t2).onInputKeydown], onBlur: i2, onCompositionstart: s2, onCompositionend: u2, onPaste: m2 }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
  };
} }), [ue, de] = T("TagsInputItem"), ce = Wt.defineComponent({ __name: "TagsInputItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(e2) {
  const t2 = e2, { value: a2 } = Wt.toRefs(t2), i2 = ne(), { forwardRef: r2, currentElement: o2 } = N(), { CollectionItem: s2 } = l$1(), u2 = Wt.computed(() => i2.selectedElement.value === o2.value), d2 = Wt.computed(() => t2.disabled || i2.disabled.value), c2 = de({ value: a2, isSelected: u2, disabled: d2, textId: "", displayValue: Wt.computed(() => i2.displayValue(a2.value)) });
  return (e3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(s2), { value: Wt.unref(a2) }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(xm), { ref: Wt.unref(r2), as: e3.as, "as-child": e3.asChild, "aria-labelledby": Wt.unref(c2).textId, "aria-current": u2.value, "data-disabled": d2.value ? "" : void 0, "data-state": u2.value ? "active" : "inactive" }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])]), _: 3 }, 8, ["value"]));
} }), me = Wt.defineComponent({ __name: "TagsInputItemDelete", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(e2) {
  const t2 = e2;
  N();
  const a2 = ne(), i2 = ue(), r2 = Wt.computed(() => {
    var e3;
    return (null == (e3 = i2.disabled) ? void 0 : e3.value) || a2.disabled.value;
  });
  function o2() {
    if (r2.value) return;
    const e3 = a2.modelValue.value.findIndex((e4) => isEqual(e4, i2.value.value));
    a2.onRemoveValue(e3);
  }
  return (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps({ tabindex: "-1" }, t2, { "aria-labelledby": Wt.unref(i2).textId, "aria-current": Wt.unref(i2).isSelected.value, "data-state": Wt.unref(i2).isSelected.value ? "active" : "inactive", "data-disabled": r2.value ? "" : void 0, type: "button" === e3.as ? "button" : void 0, onClick: o2 }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
} }), ve = Wt.defineComponent({ __name: "TagsInputItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const t2 = e2, a2 = ue();
  return N(), a2.textId || (a2.textId = c(void 0, "reka-tags-input-item-text")), (e3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps(t2, { id: Wt.unref(a2).textId }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(a2).displayValue.value), 1)])]), _: 3 }, 16, ["id"]));
} }), pe = { slots: { root: "relative inline-flex items-center", base: ["rounded-md", "transition-colors"], leading: "absolute inset-y-0 start-0 flex items-center", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75", trailingIcon: "shrink-0 text-dimmed", arrow: "fill-default", content: "max-h-60 w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col", viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: ["group relative w-full flex items-center gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"], itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemLabel: "truncate", tagsItem: "px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75", tagsItemText: "truncate", tagsItemDelete: ["inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none", "transition-colors"], tagsItemDeleteIcon: "shrink-0", tagsInput: "flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75" }, variants: { buttonGroup: { horizontal: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none" }, vertical: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none" } }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2", trailing: "pe-2", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", tagsItem: "text-[10px]/3", tagsItemDeleteIcon: "size-3", empty: "p-1 text-xs" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailingIcon: "size-4", tagsItem: "text-[10px]/3", tagsItemDeleteIcon: "size-3", empty: "p-1.5 text-xs" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5", trailing: "pe-2.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", tagsItem: "text-xs", tagsItemDeleteIcon: "size-3.5", empty: "p-1.5 text-sm" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailingIcon: "size-5", tagsItem: "text-xs", tagsItemDeleteIcon: "size-3.5", empty: "p-2 text-sm" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3", trailing: "pe-3", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailingIcon: "size-6", tagsItem: "text-sm", tagsItemDeleteIcon: "size-4", empty: "p-2 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" }, multiple: { true: { root: "flex-wrap" }, false: { base: "w-full border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75" } } }, compoundVariants: [{ variant: "soft", multiple: true, class: "has-focus:bg-elevated" }, { variant: "ghost", multiple: true, class: "has-focus:bg-elevated" }, { color: "primary", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-primary" }, { color: "secondary", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-secondary" }, { color: "success", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-success" }, { color: "info", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-info" }, { color: "warning", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-warning" }, { color: "error", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-error" }, { color: "neutral", multiple: true, variant: ["outline", "subtle"], class: "has-focus-visible:ring-2 has-focus-visible:ring-inverted" }, { color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, ge = Object.assign({ inheritAttrs: false }, { __name: "InputMenu", __ssrInlineRender: true, props: Wt.mergeModels({ as: { type: null, required: false }, id: { type: String, required: false }, type: { type: null, required: false, default: "text" }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, trailingIcon: { type: String, required: false }, selectedIcon: { type: String, required: false }, deleteIcon: { type: String, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: Wt.mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]), setup(e2, { expose: t2, emit: a2 }) {
  const i2 = e2, n2 = a2, b2 = Wt.useSlots(), k2 = Wt.useModel(e2, "searchTerm", { type: String, default: "" }), { t: I2 } = l(), S2 = ua(), { contains: B2 } = X({ sensitivity: "base" }), V2 = F(Mm(i2, "as", "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover", "ignoreFilter"), n2), T2 = O(Wt.toRef(() => i2.portal)), U2 = Wt.toRef(() => defu(i2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" })), H2 = Wt.toRef(() => i2.arrow), { emitFormBlur: G2, emitFormFocus: Y2, emitFormChange: J2, emitFormInput: X2, size: Z2, color: Q2, id: ee2, name: le2, highlight: te2, disabled: ae2, ariaAttrs: ie2 } = eg(i2), { orientation: ne2, size: re2 } = _m(i2), { isLeading: ue2, isTrailing: de2, leadingIconName: ge2, trailingIconName: fe2 } = wm(Wt.toRef(() => defu(i2, { trailingIcon: S2.ui.icons.chevronDown }))), he2 = Wt.computed(() => re2.value || Z2.value), [ye2, xe$1] = v(), be = Wt.computed(() => {
    var e3;
    return Hy({ extend: Hy(pe), ...(null == (e3 = S2.ui) ? void 0 : e3.inputMenu) || {} })({ color: Q2.value, variant: i2.variant, size: null == he2 ? void 0 : he2.value, loading: i2.loading, highlight: te2.value, leading: ue2.value || !!i2.avatar || !!b2.leading, trailing: de2.value || !!b2.trailing, multiple: i2.multiple, buttonGroup: ne2.value });
  });
  function ke(e3) {
    if (!i2.valueKey) return e3 && ("object" == typeof e3 ? pg(e3, i2.labelKey) : e3);
    const l2 = Se$1.value.find((l3) => dg("object" == typeof l3 ? pg(l3, i2.valueKey) : l3, e3));
    return l2 && ("object" == typeof l2 ? pg(l2, i2.labelKey) : l2);
  }
  const Ie = Wt.computed(() => {
    var e3;
    return (null == (e3 = i2.items) ? void 0 : e3.length) ? hg(i2.items) ? i2.items : [i2.items] : [];
  }), Se$1 = Wt.computed(() => Ie.value.flatMap((e3) => e3)), Ce$1 = Wt.computed(() => {
    if (i2.ignoreFilter || !k2.value) return Ie.value;
    const e3 = Array.isArray(i2.filterFields) ? i2.filterFields : [i2.labelKey];
    return Ie.value.map((l2) => l2.filter((l3) => "object" != typeof l3 || null === l3 ? B2(String(l3), k2.value) : !(!l3.type || !["label", "separator"].includes(l3.type)) || e3.some((e4) => B2(pg(l3, e4), k2.value)))).filter((e4) => e4.filter((e5) => !Ae(e5) || !e5.type || !["label", "separator"].includes(e5.type)).length > 0);
  }), Be = Wt.computed(() => Ce$1.value.flatMap((e3) => e3)), Ve$1 = Wt.computed(() => {
    if (!i2.createItem || !k2.value) return false;
    const e3 = i2.valueKey ? { [i2.valueKey]: k2.value } : k2.value;
    return "object" == typeof i2.createItem && "always" === i2.createItem.when || "always" === i2.createItem ? !Be.value.find((l2) => dg(l2, e3, i2.valueKey)) : !Be.value.length;
  }), we$1 = Wt.computed(() => "object" == typeof i2.createItem ? i2.createItem.position : "bottom"), Le$1 = Wt.ref(null);
  function Te(e3) {
    if (Wt.toRaw(i2.modelValue) === e3) return;
    const t3 = new Event("change", { target: { value: e3 } });
    n2("change", t3), J2(), X2(), i2.resetSearchTermOnSelect && (k2.value = "");
  }
  function ze(e3) {
    n2("blur", e3), G2();
  }
  function $e(e3) {
    n2("focus", e3), Y2();
  }
  function _e(e3) {
    let l2;
    if (e3) {
      const e4 = new FocusEvent("focus");
      n2("focus", e4), Y2(), clearTimeout(l2);
    } else {
      const e4 = new FocusEvent("blur");
      if (n2("blur", e4), G2(), i2.resetSearchTermOnBlur) {
        l2 = setTimeout(() => {
          k2.value = "";
        }, 100);
      }
    }
  }
  function Re(e3) {
    if (i2.multiple) {
      const l2 = i2.modelValue.filter((l3) => !rg(l3, e3));
      n2("update:modelValue", l2), Te(l2);
    }
  }
  function Ne(e3, l2) {
    var t3;
    Ae(l2) && (l2.disabled ? e3.preventDefault() : null == (t3 = l2.onSelect) || t3.call(l2, e3));
  }
  function Ae(e3) {
    return "object" == typeof e3 && null !== e3;
  }
  return t2({ inputRef: Le$1 }), (t3, a3, r2, o2) => {
    var s2;
    a3("<!--[-->"), a3(om.ssrRenderComponent(Wt.unref(ye2), null, { default: Wt.withCtx((e3, a4, r3, o3) => {
      var s3, u2;
      if (!a4) return [Wt.createVNode(Wt.unref(fe$1), { class: be.value.group({ class: null == (u2 = i2.ui) ? void 0 : u2.group }) }, { default: Wt.withCtx(() => {
        var e4;
        return [Wt.createVNode(Wt.unref(xe), { class: be.value.item({ class: null == (e4 = i2.ui) ? void 0 : e4.item }), value: k2.value, onSelect: Wt.withModifiers((e5) => n2("create", k2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: be.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(t3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(I2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
      }), _: 3 }, 8, ["class"])];
      a4(om.ssrRenderComponent(Wt.unref(fe$1), { class: be.value.group({ class: null == (s3 = i2.ui) ? void 0 : s3.group }) }, { default: Wt.withCtx((e4, a5, r4, o4) => {
        var s4, u3;
        if (!a5) return [Wt.createVNode(Wt.unref(xe), { class: be.value.item({ class: null == (u3 = i2.ui) ? void 0 : u3.item }), value: k2.value, onSelect: Wt.withModifiers((e5) => n2("create", k2.value), ["prevent"]) }, { default: Wt.withCtx(() => {
          var e5;
          return [Wt.createVNode("span", { class: be.value.itemLabel({ class: null == (e5 = i2.ui) ? void 0 : e5.itemLabel }) }, [Wt.renderSlot(t3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(I2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
        }), _: 3 }, 8, ["class", "value", "onSelect"])];
        a5(om.ssrRenderComponent(Wt.unref(xe), { class: be.value.item({ class: null == (s4 = i2.ui) ? void 0 : s4.item }), value: k2.value, onSelect: (e5) => n2("create", k2.value) }, { default: Wt.withCtx((e5, a6, n3, r5) => {
          var o5, s5;
          if (!a6) return [Wt.createVNode("span", { class: be.value.itemLabel({ class: null == (s5 = i2.ui) ? void 0 : s5.itemLabel }) }, [Wt.renderSlot(t3.$slots, "create-item-label", { item: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(I2)("inputMenu.create", { label: k2.value })), 1)])], 2)];
          a6(`<span class="${om.ssrRenderClass(be.value.itemLabel({ class: null == (o5 = i2.ui) ? void 0 : o5.itemLabel }))}"${r5}>`), om.ssrRenderSlot(t3.$slots, "create-item-label", { item: k2.value }, () => {
            a6(`${om.ssrInterpolate(Wt.unref(I2)("inputMenu.create", { label: k2.value }))}`);
          }, a6, n3, r5), a6("</span>");
        }), _: 3 }, r4, o4));
      }), _: 3 }, r3, o3));
    }), _: 3 }, r2)), a3(om.ssrRenderComponent(Wt.unref(ae$1), Wt.mergeProps({ id: Wt.unref(ee2) }, Wt.unref(V2), { name: Wt.unref(le2), disabled: Wt.unref(ae2), class: be.value.root({ class: [null == (s2 = i2.ui) ? void 0 : s2.root, i2.class] }), "as-child": !!e2.multiple, "ignore-filter": "", "onUpdate:modelValue": Te, "onUpdate:open": _e, onKeydown: (e3) => e3.preventDefault() }), { default: Wt.withCtx(({ modelValue: a4, open: n3 }, r3, o3, s3) => {
      var u2, d2;
      if (!r3) return [Wt.createVNode(Wt.unref(W), { "as-child": !e2.multiple, class: be.value.base({ class: null == (d2 = i2.ui) ? void 0 : d2.base }) }, { default: Wt.withCtx(() => {
        var r4, o4;
        return [e2.multiple ? (Wt.openBlock(), Wt.createBlock(Wt.unref(oe), { key: 0, "model-value": a4, disabled: Wt.unref(ae2), required: e2.required, delimiter: "", "as-child": "", onBlur: ze, onFocus: $e, onRemoveTag: Re }, { default: Wt.withCtx(({ modelValue: a5 }) => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a5, (a6, n4) => {
          var r5, o5;
          return Wt.openBlock(), Wt.createBlock(Wt.unref(ce), { key: n4, value: a6, class: be.value.tagsItem({ class: [null == (r5 = i2.ui) ? void 0 : r5.tagsItem, Ae(a6) && (null == (o5 = a6.ui) ? void 0 : o5.tagsItem)] }) }, { default: Wt.withCtx(() => {
            var r6, o6, s4, u3;
            return [Wt.createVNode(Wt.unref(ve), { class: be.value.tagsItemText({ class: [null == (r6 = i2.ui) ? void 0 : r6.tagsItemText, Ae(a6) && (null == (o6 = a6.ui) ? void 0 : o6.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-text", { item: a6, index: n4 }, () => [Wt.createTextVNode(Wt.toDisplayString(ke(a6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(me), { class: be.value.tagsItemDelete({ class: [null == (s4 = i2.ui) ? void 0 : s4.tagsItemDelete, Ae(a6) && (null == (u3 = a6.ui) ? void 0 : u3.tagsItemDelete)] }), disabled: Wt.unref(ae2) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: a6, index: n4 }, () => {
              var t4, n5;
              return [Wt.createVNode(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n5 = a6.ui) ? void 0 : n5.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
            })]), _: 2 }, 1032, ["class", "disabled"])];
          }), _: 2 }, 1032, ["value", "class"]);
        }), 128)), Wt.createVNode(Wt.unref(he$1), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
          var a6;
          return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1 }, { ...t3.$attrs, ...Wt.unref(ie2) }, { placeholder: e2.placeholder, class: be.value.tagsInput({ class: null == (a6 = i2.ui) ? void 0 : a6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
          }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
        }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2 }, 1032, ["model-value", "disabled", "required"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(he$1), Wt.mergeProps({ key: 1, ref_key: "inputRef", ref: Le$1, "display-value": ke }, { ...t3.$attrs, ...Wt.unref(ie2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: ze, onFocus: $e, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, 16, ["type", "placeholder", "required", "onUpdate:modelValue"])), Wt.unref(ue2) || e2.avatar || b2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 2, class: be.value.leading({ class: null == (r4 = i2.ui) ? void 0 : r4.leading }) }, [Wt.renderSlot(t3.$slots, "leading", { modelValue: a4, open: n3, ui: be.value }, () => {
          var t4, a5, n4;
          return [Wt.unref(ue2) && Wt.unref(ge2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(ge2), class: be.value.leadingIcon({ class: null == (t4 = i2.ui) ? void 0 : t4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (a5 = i2.ui) ? void 0 : a5.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, e2.avatar, { class: be.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.unref(de2) || b2.trailing ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Le), { key: 3, class: be.value.trailing({ class: null == (o4 = i2.ui) ? void 0 : o4.trailing }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "trailing", { modelValue: a4, open: n3, ui: be.value }, () => {
          var e3;
          return [Wt.unref(fe2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(fe2), class: be.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
      }), _: 2 }, 1032, ["as-child", "class"]), Wt.createVNode(Wt.unref(Ve), Wt.unref(T2), { default: Wt.withCtx(() => {
        var a5;
        return [Wt.createVNode(Wt.unref(se$1), Wt.mergeProps({ class: be.value.content({ class: null == (a5 = i2.ui) ? void 0 : a5.content }) }, U2.value), { default: Wt.withCtx(() => {
          var a6, n4, r4;
          return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode(Wt.unref(ue$1), { class: be.value.empty({ class: null == (a6 = i2.ui) ? void 0 : a6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(I2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(I2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: be.value.viewport({ class: null == (n4 = i2.ui) ? void 0 : n4.viewport }) }, [Ve$1.value && "top" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Ce$1.value, (a7, n5) => {
            var r5;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(fe$1), { key: `group-${n5}`, class: be.value.group({ class: null == (r5 = i2.ui) ? void 0 : r5.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a7, (a8, r6) => {
              var o4, s4, u3, d3, c2, m2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n5}-${r6}` }, [Ae(a8) && "label" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: be.value.label({ class: [null == (o4 = i2.ui) ? void 0 : o4.label, null == (s4 = a8.ui) ? void 0 : s4.label, a8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(a8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Ae(a8) && "separator" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: be.value.separator({ class: [null == (u3 = i2.ui) ? void 0 : u3.separator, null == (d3 = a8.ui) ? void 0 : d3.separator, a8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: be.value.item({ class: [null == (c2 = i2.ui) ? void 0 : c2.item, Ae(a8) && (null == (m2 = a8.ui) ? void 0 : m2.item), Ae(a8) && a8.class] }), disabled: Ae(a8) && a8.disabled, value: i2.valueKey && Ae(a8) ? Wt.unref(pg)(a8, i2.valueKey) : a8, onSelect: (e3) => Ne(e3, a8) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a8, index: r6 }, () => {
                var n6, o5, s5, u4;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a8, index: r6 }, () => {
                  var e3, t4, n7, r7, o6, s6, u5, d4, c3, m3;
                  return [Ae(a8) && a8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Ae(a8) && a8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (n7 = a8.ui) ? void 0 : n7.itemLeadingAvatarSize) || (null == (r7 = i2.ui) ? void 0 : r7.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (o6 = i2.ui) ? void 0 : o6.itemLeadingAvatar, null == (s6 = a8.ui) ? void 0 : s6.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Ae(a8) && a8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (u5 = a8.ui) ? void 0 : u5.itemLeadingChipSize) || (null == (d4 = i2.ui) ? void 0 : d4.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (c3 = i2.ui) ? void 0 : c3.itemLeadingChip, null == (m3 = a8.ui) ? void 0 : m3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: be.value.itemLabel({ class: [null == (n6 = i2.ui) ? void 0 : n6.itemLabel, Ae(a8) && (null == (o5 = a8.ui) ? void 0 : o5.itemLabel)] }) }, [Wt.renderSlot(t3.$slots, "item-label", { item: a8, index: r6 }, () => [Wt.createTextVNode(Wt.toDisplayString(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8), 1)])], 2), Wt.createVNode("span", { class: be.value.itemTrailing({ class: [null == (s5 = i2.ui) ? void 0 : s5.itemTrailing, Ae(a8) && (null == (u4 = a8.ui) ? void 0 : u4.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a8, index: r6 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, n7;
                  return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.itemTrailingIcon, Ae(a8) && (null == (n7 = a8.ui) ? void 0 : n7.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), Ve$1.value && "bottom" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re$1), Wt.mergeProps({ key: 0 }, H2.value, { class: be.value.arrow({ class: null == (r4 = i2.ui) ? void 0 : r4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      r3(om.ssrRenderComponent(Wt.unref(W), { "as-child": !e2.multiple, class: be.value.base({ class: null == (u2 = i2.ui) ? void 0 : u2.base }) }, { default: Wt.withCtx((r4, o4, s4, u3) => {
        var d3, c2, m2, v2;
        if (!o4) return [e2.multiple ? (Wt.openBlock(), Wt.createBlock(Wt.unref(oe), { key: 0, "model-value": a4, disabled: Wt.unref(ae2), required: e2.required, delimiter: "", "as-child": "", onBlur: ze, onFocus: $e, onRemoveTag: Re }, { default: Wt.withCtx(({ modelValue: a5 }) => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a5, (a6, n4) => {
          var r5, o5;
          return Wt.openBlock(), Wt.createBlock(Wt.unref(ce), { key: n4, value: a6, class: be.value.tagsItem({ class: [null == (r5 = i2.ui) ? void 0 : r5.tagsItem, Ae(a6) && (null == (o5 = a6.ui) ? void 0 : o5.tagsItem)] }) }, { default: Wt.withCtx(() => {
            var r6, o6, s5, u4;
            return [Wt.createVNode(Wt.unref(ve), { class: be.value.tagsItemText({ class: [null == (r6 = i2.ui) ? void 0 : r6.tagsItemText, Ae(a6) && (null == (o6 = a6.ui) ? void 0 : o6.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-text", { item: a6, index: n4 }, () => [Wt.createTextVNode(Wt.toDisplayString(ke(a6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(me), { class: be.value.tagsItemDelete({ class: [null == (s5 = i2.ui) ? void 0 : s5.tagsItemDelete, Ae(a6) && (null == (u4 = a6.ui) ? void 0 : u4.tagsItemDelete)] }), disabled: Wt.unref(ae2) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: a6, index: n4 }, () => {
              var t4, n5;
              return [Wt.createVNode(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n5 = a6.ui) ? void 0 : n5.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
            })]), _: 2 }, 1032, ["class", "disabled"])];
          }), _: 2 }, 1032, ["value", "class"]);
        }), 128)), Wt.createVNode(Wt.unref(he$1), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
          var a6;
          return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1 }, { ...t3.$attrs, ...Wt.unref(ie2) }, { placeholder: e2.placeholder, class: be.value.tagsInput({ class: null == (a6 = i2.ui) ? void 0 : a6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
          }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
        }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2 }, 1032, ["model-value", "disabled", "required"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(he$1), Wt.mergeProps({ key: 1, ref_key: "inputRef", ref: Le$1, "display-value": ke }, { ...t3.$attrs, ...Wt.unref(ie2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: ze, onFocus: $e, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, 16, ["type", "placeholder", "required", "onUpdate:modelValue"])), Wt.unref(ue2) || e2.avatar || b2.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 2, class: be.value.leading({ class: null == (m2 = i2.ui) ? void 0 : m2.leading }) }, [Wt.renderSlot(t3.$slots, "leading", { modelValue: a4, open: n3, ui: be.value }, () => {
          var t4, a5, n4;
          return [Wt.unref(ue2) && Wt.unref(ge2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(ge2), class: be.value.leadingIcon({ class: null == (t4 = i2.ui) ? void 0 : t4.leadingIcon }) }, null, 8, ["name", "class"])) : e2.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (a5 = i2.ui) ? void 0 : a5.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, e2.avatar, { class: be.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
        })], 2)) : Wt.createCommentVNode("", true), Wt.unref(de2) || b2.trailing ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Le), { key: 3, class: be.value.trailing({ class: null == (v2 = i2.ui) ? void 0 : v2.trailing }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "trailing", { modelValue: a4, open: n3, ui: be.value }, () => {
          var e3;
          return [Wt.unref(fe2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(fe2), class: be.value.trailingIcon({ class: null == (e3 = i2.ui) ? void 0 : e3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
        e2.multiple ? o4(om.ssrRenderComponent(Wt.unref(oe), { "model-value": a4, disabled: Wt.unref(ae2), required: e2.required, delimiter: "", "as-child": "", onBlur: ze, onFocus: $e, onRemoveTag: Re }, { default: Wt.withCtx(({ modelValue: a5 }, n4, r5, o5) => {
          if (!n4) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a5, (a6, n5) => {
            var r6, o6;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(ce), { key: n5, value: a6, class: be.value.tagsItem({ class: [null == (r6 = i2.ui) ? void 0 : r6.tagsItem, Ae(a6) && (null == (o6 = a6.ui) ? void 0 : o6.tagsItem)] }) }, { default: Wt.withCtx(() => {
              var r7, o7, s5, u4;
              return [Wt.createVNode(Wt.unref(ve), { class: be.value.tagsItemText({ class: [null == (r7 = i2.ui) ? void 0 : r7.tagsItemText, Ae(a6) && (null == (o7 = a6.ui) ? void 0 : o7.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-text", { item: a6, index: n5 }, () => [Wt.createTextVNode(Wt.toDisplayString(ke(a6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(me), { class: be.value.tagsItemDelete({ class: [null == (s5 = i2.ui) ? void 0 : s5.tagsItemDelete, Ae(a6) && (null == (u4 = a6.ui) ? void 0 : u4.tagsItemDelete)] }), disabled: Wt.unref(ae2) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: a6, index: n5 }, () => {
                var t4, n6;
                return [Wt.createVNode(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n6 = a6.ui) ? void 0 : n6.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
              })]), _: 2 }, 1032, ["class", "disabled"])];
            }), _: 2 }, 1032, ["value", "class"]);
          }), 128)), Wt.createVNode(Wt.unref(he$1), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx(() => {
            var a6;
            return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1 }, { ...t3.$attrs, ...Wt.unref(ie2) }, { placeholder: e2.placeholder, class: be.value.tagsInput({ class: null == (a6 = i2.ui) ? void 0 : a6.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
            }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
          }), _: 1 }, 8, ["modelValue", "onUpdate:modelValue"])];
          n4("<!--[-->"), om.ssrRenderList(a5, (a6, s5) => {
            var u4, d4;
            n4(om.ssrRenderComponent(Wt.unref(ce), { key: s5, value: a6, class: be.value.tagsItem({ class: [null == (u4 = i2.ui) ? void 0 : u4.tagsItem, Ae(a6) && (null == (d4 = a6.ui) ? void 0 : d4.tagsItem)] }) }, { default: Wt.withCtx((n5, r6, o6, u5) => {
              var d5, c3, m3, v3, p2, h2, y2, x2;
              if (!r6) return [Wt.createVNode(Wt.unref(ve), { class: be.value.tagsItemText({ class: [null == (p2 = i2.ui) ? void 0 : p2.tagsItemText, Ae(a6) && (null == (h2 = a6.ui) ? void 0 : h2.tagsItemText)] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-text", { item: a6, index: s5 }, () => [Wt.createTextVNode(Wt.toDisplayString(ke(a6)), 1)])]), _: 2 }, 1032, ["class"]), Wt.createVNode(Wt.unref(me), { class: be.value.tagsItemDelete({ class: [null == (y2 = i2.ui) ? void 0 : y2.tagsItemDelete, Ae(a6) && (null == (x2 = a6.ui) ? void 0 : x2.tagsItemDelete)] }), disabled: Wt.unref(ae2) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: a6, index: s5 }, () => {
                var t4, n6;
                return [Wt.createVNode(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n6 = a6.ui) ? void 0 : n6.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
              })]), _: 2 }, 1032, ["class", "disabled"])];
              r6(om.ssrRenderComponent(Wt.unref(ve), { class: be.value.tagsItemText({ class: [null == (d5 = i2.ui) ? void 0 : d5.tagsItemText, Ae(a6) && (null == (c3 = a6.ui) ? void 0 : c3.tagsItemText)] }) }, { default: Wt.withCtx((e3, i3, n6, r7) => {
                if (!i3) return [Wt.renderSlot(t3.$slots, "tags-item-text", { item: a6, index: s5 }, () => [Wt.createTextVNode(Wt.toDisplayString(ke(a6)), 1)])];
                om.ssrRenderSlot(t3.$slots, "tags-item-text", { item: a6, index: s5 }, () => {
                  i3(`${om.ssrInterpolate(ke(a6))}`);
                }, i3, n6, r7);
              }), _: 2 }, o6, u5)), r6(om.ssrRenderComponent(Wt.unref(me), { class: be.value.tagsItemDelete({ class: [null == (m3 = i2.ui) ? void 0 : m3.tagsItemDelete, Ae(a6) && (null == (v3 = a6.ui) ? void 0 : v3.tagsItemDelete)] }), disabled: Wt.unref(ae2) }, { default: Wt.withCtx((n6, r7, o7, u6) => {
                if (!r7) return [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: a6, index: s5 }, () => {
                  var t4, n7;
                  return [Wt.createVNode(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n7 = a6.ui) ? void 0 : n7.tagsItemDeleteIcon)] }) }, null, 8, ["name", "class"])];
                })];
                om.ssrRenderSlot(t3.$slots, "tags-item-delete", { item: a6, index: s5 }, () => {
                  var t4, n7;
                  r7(om.ssrRenderComponent(hb, { name: e2.deleteIcon || Wt.unref(S2).ui.icons.close, class: be.value.tagsItemDeleteIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.tagsItemDeleteIcon, Ae(a6) && (null == (n7 = a6.ui) ? void 0 : n7.tagsItemDeleteIcon)] }) }, null, o7, u6));
                }, r7, o7, u6);
              }), _: 2 }, o6, u5));
            }), _: 2 }, r5, o5));
          }), n4("<!--]-->"), n4(om.ssrRenderComponent(Wt.unref(he$1), { modelValue: k2.value, "onUpdate:modelValue": (e3) => k2.value = e3, "as-child": "" }, { default: Wt.withCtx((a6, n5, r6, o6) => {
            var s5, u4;
            if (!n5) return [Wt.createVNode(Wt.unref(se), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1 }, { ...t3.$attrs, ...Wt.unref(ie2) }, { placeholder: e2.placeholder, class: be.value.tagsInput({ class: null == (u4 = i2.ui) ? void 0 : u4.tagsInput }), onKeydown: Wt.withKeys(Wt.withModifiers(() => {
            }, ["prevent"]), ["enter"]) }), null, 16, ["placeholder", "class", "onKeydown"])];
            n5(om.ssrRenderComponent(Wt.unref(se), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1 }, { ...t3.$attrs, ...Wt.unref(ie2) }, { placeholder: e2.placeholder, class: be.value.tagsInput({ class: null == (s5 = i2.ui) ? void 0 : s5.tagsInput }), onKeydown: () => {
            } }), null, r6, o6));
          }), _: 2 }, r5, o5));
        }), _: 2 }, s4, u3)) : o4(om.ssrRenderComponent(Wt.unref(he$1), Wt.mergeProps({ ref_key: "inputRef", ref: Le$1, "display-value": ke }, { ...t3.$attrs, ...Wt.unref(ie2) }, { type: e2.type, placeholder: e2.placeholder, required: e2.required, onBlur: ze, onFocus: $e, "onUpdate:modelValue": (e3) => k2.value = e3 }), null, s4, u3)), Wt.unref(ue2) || e2.avatar || b2.leading ? (o4(`<span class="${om.ssrRenderClass(be.value.leading({ class: null == (d3 = i2.ui) ? void 0 : d3.leading }))}"${u3}>`), om.ssrRenderSlot(t3.$slots, "leading", { modelValue: a4, open: n3, ui: be.value }, () => {
          var t4, a5, n4;
          Wt.unref(ue2) && Wt.unref(ge2) ? o4(om.ssrRenderComponent(hb, { name: Wt.unref(ge2), class: be.value.leadingIcon({ class: null == (t4 = i2.ui) ? void 0 : t4.leadingIcon }) }, null, s4, u3)) : e2.avatar ? o4(om.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (a5 = i2.ui) ? void 0 : a5.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, e2.avatar, { class: be.value.itemLeadingAvatar({ class: null == (n4 = i2.ui) ? void 0 : n4.itemLeadingAvatar }) }), null, s4, u3)) : o4("<!---->");
        }, o4, s4, u3), o4("</span>")) : o4("<!---->"), Wt.unref(de2) || b2.trailing ? o4(om.ssrRenderComponent(Wt.unref(Le), { class: be.value.trailing({ class: null == (c2 = i2.ui) ? void 0 : c2.trailing }) }, { default: Wt.withCtx((e3, r5, o5, s5) => {
          if (!r5) return [Wt.renderSlot(t3.$slots, "trailing", { modelValue: a4, open: n3, ui: be.value }, () => {
            var e4;
            return [Wt.unref(fe2) ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: Wt.unref(fe2), class: be.value.trailingIcon({ class: null == (e4 = i2.ui) ? void 0 : e4.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
          })];
          om.ssrRenderSlot(t3.$slots, "trailing", { modelValue: a4, open: n3, ui: be.value }, () => {
            var e4;
            Wt.unref(fe2) ? r5(om.ssrRenderComponent(hb, { name: Wt.unref(fe2), class: be.value.trailingIcon({ class: null == (e4 = i2.ui) ? void 0 : e4.trailingIcon }) }, null, o5, s5)) : r5("<!---->");
          }, r5, o5, s5);
        }), _: 2 }, s4, u3)) : o4("<!---->");
      }), _: 2 }, o3, s3)), r3(om.ssrRenderComponent(Wt.unref(Ve), Wt.unref(T2), { default: Wt.withCtx((a5, n4, r4, o4) => {
        var s4, u3;
        if (!n4) return [Wt.createVNode(Wt.unref(se$1), Wt.mergeProps({ class: be.value.content({ class: null == (u3 = i2.ui) ? void 0 : u3.content }) }, U2.value), { default: Wt.withCtx(() => {
          var a6, n5, r5;
          return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode(Wt.unref(ue$1), { class: be.value.empty({ class: null == (a6 = i2.ui) ? void 0 : a6.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(I2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(I2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: be.value.viewport({ class: null == (n5 = i2.ui) ? void 0 : n5.viewport }) }, [Ve$1.value && "top" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Ce$1.value, (a7, n6) => {
            var r6;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(fe$1), { key: `group-${n6}`, class: be.value.group({ class: null == (r6 = i2.ui) ? void 0 : r6.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a7, (a8, r7) => {
              var o5, s5, u4, d3, c2, m2;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n6}-${r7}` }, [Ae(a8) && "label" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: be.value.label({ class: [null == (o5 = i2.ui) ? void 0 : o5.label, null == (s5 = a8.ui) ? void 0 : s5.label, a8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(a8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Ae(a8) && "separator" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: be.value.separator({ class: [null == (u4 = i2.ui) ? void 0 : u4.separator, null == (d3 = a8.ui) ? void 0 : d3.separator, a8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: be.value.item({ class: [null == (c2 = i2.ui) ? void 0 : c2.item, Ae(a8) && (null == (m2 = a8.ui) ? void 0 : m2.item), Ae(a8) && a8.class] }), disabled: Ae(a8) && a8.disabled, value: i2.valueKey && Ae(a8) ? Wt.unref(pg)(a8, i2.valueKey) : a8, onSelect: (e3) => Ne(e3, a8) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a8, index: r7 }, () => {
                var n7, o6, s6, u5;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a8, index: r7 }, () => {
                  var e3, t4, n8, r8, o7, s7, u6, d4, c3, m3;
                  return [Ae(a8) && a8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Ae(a8) && a8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (n8 = a8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (r8 = i2.ui) ? void 0 : r8.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (o7 = i2.ui) ? void 0 : o7.itemLeadingAvatar, null == (s7 = a8.ui) ? void 0 : s7.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Ae(a8) && a8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (u6 = a8.ui) ? void 0 : u6.itemLeadingChipSize) || (null == (d4 = i2.ui) ? void 0 : d4.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (c3 = i2.ui) ? void 0 : c3.itemLeadingChip, null == (m3 = a8.ui) ? void 0 : m3.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: be.value.itemLabel({ class: [null == (n7 = i2.ui) ? void 0 : n7.itemLabel, Ae(a8) && (null == (o6 = a8.ui) ? void 0 : o6.itemLabel)] }) }, [Wt.renderSlot(t3.$slots, "item-label", { item: a8, index: r7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8), 1)])], 2), Wt.createVNode("span", { class: be.value.itemTrailing({ class: [null == (s6 = i2.ui) ? void 0 : s6.itemTrailing, Ae(a8) && (null == (u5 = a8.ui) ? void 0 : u5.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a8, index: r7 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, n8;
                  return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.itemTrailingIcon, Ae(a8) && (null == (n8 = a8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), Ve$1.value && "bottom" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re$1), Wt.mergeProps({ key: 0 }, H2.value, { class: be.value.arrow({ class: null == (r5 = i2.ui) ? void 0 : r5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        n4(om.ssrRenderComponent(Wt.unref(se$1), Wt.mergeProps({ class: be.value.content({ class: null == (s4 = i2.ui) ? void 0 : s4.content }) }, U2.value), { default: Wt.withCtx((a6, n5, r5, o5) => {
          var s5, u4, d3, c2, m2, p2;
          if (!n5) return [Wt.renderSlot(t3.$slots, "content-top"), Wt.createVNode(Wt.unref(ue$1), { class: be.value.empty({ class: null == (c2 = i2.ui) ? void 0 : c2.empty }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(I2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(I2)("inputMenu.noData")), 1)])]), _: 3 }, 8, ["class"]), Wt.createVNode("div", { role: "presentation", class: be.value.viewport({ class: null == (m2 = i2.ui) ? void 0 : m2.viewport }) }, [Ve$1.value && "top" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 0 })) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Ce$1.value, (a7, n6) => {
            var r6;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(fe$1), { key: `group-${n6}`, class: be.value.group({ class: null == (r6 = i2.ui) ? void 0 : r6.group }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a7, (a8, r7) => {
              var o6, s6, u5, d4, c3, m3;
              return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${n6}-${r7}` }, [Ae(a8) && "label" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: be.value.label({ class: [null == (o6 = i2.ui) ? void 0 : o6.label, null == (s6 = a8.ui) ? void 0 : s6.label, a8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(a8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Ae(a8) && "separator" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: be.value.separator({ class: [null == (u5 = i2.ui) ? void 0 : u5.separator, null == (d4 = a8.ui) ? void 0 : d4.separator, a8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: be.value.item({ class: [null == (c3 = i2.ui) ? void 0 : c3.item, Ae(a8) && (null == (m3 = a8.ui) ? void 0 : m3.item), Ae(a8) && a8.class] }), disabled: Ae(a8) && a8.disabled, value: i2.valueKey && Ae(a8) ? Wt.unref(pg)(a8, i2.valueKey) : a8, onSelect: (e3) => Ne(e3, a8) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a8, index: r7 }, () => {
                var n7, o7, s7, u6;
                return [Wt.renderSlot(t3.$slots, "item-leading", { item: a8, index: r7 }, () => {
                  var e3, t4, n8, r8, o8, s8, u7, d5, c4, m4;
                  return [Ae(a8) && a8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Ae(a8) && a8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (n8 = a8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (r8 = i2.ui) ? void 0 : r8.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (o8 = i2.ui) ? void 0 : o8.itemLeadingAvatar, null == (s8 = a8.ui) ? void 0 : s8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Ae(a8) && a8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (u7 = a8.ui) ? void 0 : u7.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemLeadingChip, null == (m4 = a8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                }), Wt.createVNode("span", { class: be.value.itemLabel({ class: [null == (n7 = i2.ui) ? void 0 : n7.itemLabel, Ae(a8) && (null == (o7 = a8.ui) ? void 0 : o7.itemLabel)] }) }, [Wt.renderSlot(t3.$slots, "item-label", { item: a8, index: r7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8), 1)])], 2), Wt.createVNode("span", { class: be.value.itemTrailing({ class: [null == (s7 = i2.ui) ? void 0 : s7.itemTrailing, Ae(a8) && (null == (u6 = a8.ui) ? void 0 : u6.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a8, index: r7 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                  var t4, n8;
                  return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.itemTrailingIcon, Ae(a8) && (null == (n8 = a8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                }), _: 2 }, 1024)], 2)];
              })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128)), Ve$1.value && "bottom" === we$1.value ? (Wt.openBlock(), Wt.createBlock(Wt.unref(xe$1), { key: 1 })) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t3.$slots, "content-bottom"), e2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(re$1), Wt.mergeProps({ key: 0 }, H2.value, { class: be.value.arrow({ class: null == (p2 = i2.ui) ? void 0 : p2.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          om.ssrRenderSlot(t3.$slots, "content-top", {}, null, n5, r5, o5), n5(om.ssrRenderComponent(Wt.unref(ue$1), { class: be.value.empty({ class: null == (s5 = i2.ui) ? void 0 : s5.empty }) }, { default: Wt.withCtx((e3, a7, i3, n6) => {
            if (!a7) return [Wt.renderSlot(t3.$slots, "empty", { searchTerm: k2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(k2.value ? Wt.unref(I2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(I2)("inputMenu.noData")), 1)])];
            om.ssrRenderSlot(t3.$slots, "empty", { searchTerm: k2.value }, () => {
              a7(`${om.ssrInterpolate(k2.value ? Wt.unref(I2)("inputMenu.noMatch", { searchTerm: k2.value }) : Wt.unref(I2)("inputMenu.noData"))}`);
            }, a7, i3, n6);
          }), _: 2 }, r5, o5)), n5(`<div role="presentation" class="${om.ssrRenderClass(be.value.viewport({ class: null == (u4 = i2.ui) ? void 0 : u4.viewport }))}"${o5}>`), Ve$1.value && "top" === we$1.value ? n5(om.ssrRenderComponent(Wt.unref(xe$1), null, null, r5, o5)) : n5("<!---->"), n5("<!--[-->"), om.ssrRenderList(Ce$1.value, (a7, s6) => {
            var u5;
            n5(om.ssrRenderComponent(Wt.unref(fe$1), { key: `group-${s6}`, class: be.value.group({ class: null == (u5 = i2.ui) ? void 0 : u5.group }) }, { default: Wt.withCtx((n6, r6, o6, u6) => {
              if (!r6) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a7, (a8, n7) => {
                var r7, o7, u7, d4, c3, m3;
                return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: `group-${s6}-${n7}` }, [Ae(a8) && "label" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(Se), { key: 0, class: be.value.label({ class: [null == (r7 = i2.ui) ? void 0 : r7.label, null == (o7 = a8.ui) ? void 0 : o7.label, a8.class] }) }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(a8, i2.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Ae(a8) && "separator" === a8.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(we), { key: 1, class: be.value.separator({ class: [null == (u7 = i2.ui) ? void 0 : u7.separator, null == (d4 = a8.ui) ? void 0 : d4.separator, a8.class] }) }, null, 8, ["class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(xe), { key: 2, class: be.value.item({ class: [null == (c3 = i2.ui) ? void 0 : c3.item, Ae(a8) && (null == (m3 = a8.ui) ? void 0 : m3.item), Ae(a8) && a8.class] }), disabled: Ae(a8) && a8.disabled, value: i2.valueKey && Ae(a8) ? Wt.unref(pg)(a8, i2.valueKey) : a8, onSelect: (e3) => Ne(e3, a8) }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "item", { item: a8, index: n7 }, () => {
                  var r8, o8, s7, u8;
                  return [Wt.renderSlot(t3.$slots, "item-leading", { item: a8, index: n7 }, () => {
                    var e3, t4, n8, r9, o9, s8, u9, d5, c4, m4;
                    return [Ae(a8) && a8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Ae(a8) && a8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (n8 = a8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (o9 = i2.ui) ? void 0 : o9.itemLeadingAvatar, null == (s8 = a8.ui) ? void 0 : s8.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Ae(a8) && a8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (u9 = a8.ui) ? void 0 : u9.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemLeadingChip, null == (m4 = a8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                  }), Wt.createVNode("span", { class: be.value.itemLabel({ class: [null == (r8 = i2.ui) ? void 0 : r8.itemLabel, Ae(a8) && (null == (o8 = a8.ui) ? void 0 : o8.itemLabel)] }) }, [Wt.renderSlot(t3.$slots, "item-label", { item: a8, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8), 1)])], 2), Wt.createVNode("span", { class: be.value.itemTrailing({ class: [null == (s7 = i2.ui) ? void 0 : s7.itemTrailing, Ae(a8) && (null == (u8 = a8.ui) ? void 0 : u8.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a8, index: n7 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                    var t4, n8;
                    return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.itemTrailingIcon, Ae(a8) && (null == (n8 = a8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                  }), _: 2 }, 1024)], 2)];
                })]), _: 2 }, 1032, ["class", "disabled", "value", "onSelect"]))], 64);
              }), 128))];
              r6("<!--[-->"), om.ssrRenderList(a7, (a8, n7) => {
                var s7, d4, c3, m3, p3, x2;
                r6("<!--[-->"), Ae(a8) && "label" === a8.type ? r6(om.ssrRenderComponent(Wt.unref(Se), { class: be.value.label({ class: [null == (s7 = i2.ui) ? void 0 : s7.label, null == (d4 = a8.ui) ? void 0 : d4.label, a8.class] }) }, { default: Wt.withCtx((e3, t4, n8, r7) => {
                  if (!t4) return [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(pg)(a8, i2.labelKey)), 1)];
                  t4(`${om.ssrInterpolate(Wt.unref(pg)(a8, i2.labelKey))}`);
                }), _: 2 }, o6, u6)) : Ae(a8) && "separator" === a8.type ? r6(om.ssrRenderComponent(Wt.unref(we), { class: be.value.separator({ class: [null == (c3 = i2.ui) ? void 0 : c3.separator, null == (m3 = a8.ui) ? void 0 : m3.separator, a8.class] }) }, null, o6, u6)) : r6(om.ssrRenderComponent(Wt.unref(xe), { class: be.value.item({ class: [null == (p3 = i2.ui) ? void 0 : p3.item, Ae(a8) && (null == (x2 = a8.ui) ? void 0 : x2.item), Ae(a8) && a8.class] }), disabled: Ae(a8) && a8.disabled, value: i2.valueKey && Ae(a8) ? Wt.unref(pg)(a8, i2.valueKey) : a8, onSelect: (e3) => Ne(e3, a8) }, { default: Wt.withCtx((r7, o7, s8, u7) => {
                  if (!o7) return [Wt.renderSlot(t3.$slots, "item", { item: a8, index: n7 }, () => {
                    var r8, o8, s9, u8;
                    return [Wt.renderSlot(t3.$slots, "item-leading", { item: a8, index: n7 }, () => {
                      var e3, t4, n8, r9, o9, s10, u9, d5, c4, m4;
                      return [Ae(a8) && a8.icon ? (Wt.openBlock(), Wt.createBlock(hb, { key: 0, name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, 8, ["name", "class"])) : Ae(a8) && a8.avatar ? (Wt.openBlock(), Wt.createBlock(Sb, Wt.mergeProps({ key: 1, size: (null == (n8 = a8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (o9 = i2.ui) ? void 0 : o9.itemLeadingAvatar, null == (s10 = a8.ui) ? void 0 : s10.itemLeadingAvatar] }) }), null, 16, ["size", "class"])) : Ae(a8) && a8.chip ? (Wt.openBlock(), Wt.createBlock(bb, Wt.mergeProps({ key: 2, size: (null == (u9 = a8.ui) ? void 0 : u9.itemLeadingChipSize) || (null == (d5 = i2.ui) ? void 0 : d5.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemLeadingChip, null == (m4 = a8.ui) ? void 0 : m4.itemLeadingChip] }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
                    }), Wt.createVNode("span", { class: be.value.itemLabel({ class: [null == (r8 = i2.ui) ? void 0 : r8.itemLabel, Ae(a8) && (null == (o8 = a8.ui) ? void 0 : o8.itemLabel)] }) }, [Wt.renderSlot(t3.$slots, "item-label", { item: a8, index: n7 }, () => [Wt.createTextVNode(Wt.toDisplayString(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8), 1)])], 2), Wt.createVNode("span", { class: be.value.itemTrailing({ class: [null == (s9 = i2.ui) ? void 0 : s9.itemTrailing, Ae(a8) && (null == (u8 = a8.ui) ? void 0 : u8.itemTrailing)] }) }, [Wt.renderSlot(t3.$slots, "item-trailing", { item: a8, index: n7 }), Wt.createVNode(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx(() => {
                      var t4, n8;
                      return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (t4 = i2.ui) ? void 0 : t4.itemTrailingIcon, Ae(a8) && (null == (n8 = a8.ui) ? void 0 : n8.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                    }), _: 2 }, 1024)], 2)];
                  })];
                  om.ssrRenderSlot(t3.$slots, "item", { item: a8, index: n7 }, () => {
                    var r8, d5, c4, m4;
                    om.ssrRenderSlot(t3.$slots, "item-leading", { item: a8, index: n7 }, () => {
                      var e3, t4, n8, r9, d6, c5, m5, v2, p4, x3;
                      Ae(a8) && a8.icon ? o7(om.ssrRenderComponent(hb, { name: a8.icon, class: be.value.itemLeadingIcon({ class: [null == (e3 = i2.ui) ? void 0 : e3.itemLeadingIcon, null == (t4 = a8.ui) ? void 0 : t4.itemLeadingIcon] }) }, null, s8, u7)) : Ae(a8) && a8.avatar ? o7(om.ssrRenderComponent(Sb, Wt.mergeProps({ size: (null == (n8 = a8.ui) ? void 0 : n8.itemLeadingAvatarSize) || (null == (r9 = i2.ui) ? void 0 : r9.itemLeadingAvatarSize) || be.value.itemLeadingAvatarSize() }, { ref_for: true }, a8.avatar, { class: be.value.itemLeadingAvatar({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemLeadingAvatar, null == (c5 = a8.ui) ? void 0 : c5.itemLeadingAvatar] }) }), null, s8, u7)) : Ae(a8) && a8.chip ? o7(om.ssrRenderComponent(bb, Wt.mergeProps({ size: (null == (m5 = a8.ui) ? void 0 : m5.itemLeadingChipSize) || (null == (v2 = i2.ui) ? void 0 : v2.itemLeadingChipSize) || be.value.itemLeadingChipSize(), inset: "", standalone: "" }, { ref_for: true }, a8.chip, { class: be.value.itemLeadingChip({ class: [null == (p4 = i2.ui) ? void 0 : p4.itemLeadingChip, null == (x3 = a8.ui) ? void 0 : x3.itemLeadingChip] }) }), null, s8, u7)) : o7("<!---->");
                    }, o7, s8, u7), o7(`<span class="${om.ssrRenderClass(be.value.itemLabel({ class: [null == (r8 = i2.ui) ? void 0 : r8.itemLabel, Ae(a8) && (null == (d5 = a8.ui) ? void 0 : d5.itemLabel)] }))}"${u7}>`), om.ssrRenderSlot(t3.$slots, "item-label", { item: a8, index: n7 }, () => {
                      o7(`${om.ssrInterpolate(Ae(a8) ? Wt.unref(pg)(a8, i2.labelKey) : a8)}`);
                    }, o7, s8, u7), o7(`</span><span class="${om.ssrRenderClass(be.value.itemTrailing({ class: [null == (c4 = i2.ui) ? void 0 : c4.itemTrailing, Ae(a8) && (null == (m4 = a8.ui) ? void 0 : m4.itemTrailing)] }))}"${u7}>`), om.ssrRenderSlot(t3.$slots, "item-trailing", { item: a8, index: n7 }, null, o7, s8, u7), o7(om.ssrRenderComponent(Wt.unref(Ce), { "as-child": "" }, { default: Wt.withCtx((t4, n8, r9, o8) => {
                      var s9, u8, d6, c5;
                      if (!n8) return [Wt.createVNode(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (d6 = i2.ui) ? void 0 : d6.itemTrailingIcon, Ae(a8) && (null == (c5 = a8.ui) ? void 0 : c5.itemTrailingIcon)] }) }, null, 8, ["name", "class"])];
                      n8(om.ssrRenderComponent(hb, { name: e2.selectedIcon || Wt.unref(S2).ui.icons.check, class: be.value.itemTrailingIcon({ class: [null == (s9 = i2.ui) ? void 0 : s9.itemTrailingIcon, Ae(a8) && (null == (u8 = a8.ui) ? void 0 : u8.itemTrailingIcon)] }) }, null, r9, o8));
                    }), _: 2 }, s8, u7)), o7("</span>");
                  }, o7, s8, u7);
                }), _: 2 }, o6, u6)), r6("<!--]-->");
              }), r6("<!--]-->");
            }), _: 2 }, r5, o5));
          }), n5("<!--]-->"), Ve$1.value && "bottom" === we$1.value ? n5(om.ssrRenderComponent(Wt.unref(xe$1), null, null, r5, o5)) : n5("<!---->"), n5("</div>"), om.ssrRenderSlot(t3.$slots, "content-bottom", {}, null, n5, r5, o5), e2.arrow ? n5(om.ssrRenderComponent(Wt.unref(re$1), Wt.mergeProps(H2.value, { class: be.value.arrow({ class: null == (d3 = i2.ui) ? void 0 : d3.arrow }) }), null, r5, o5)) : n5("<!---->");
        }), _: 2 }, r4, o4));
      }), _: 2 }, o3, s3));
    }), _: 3 }, r2)), a3("<!--]-->");
  };
} }), fe = ge.setup;
ge.setup = (e2, t2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue"), fe ? fe(e2, t2) : void 0;
};
const he = Wt.defineComponent({ __name: "ComboBox", __ssrInlineRender: true, props: { isOpsi: { type: Boolean, default: true }, url: { type: String, default: "" }, params: { type: Object, default: () => ({}) }, class: { type: String, default: "" }, isImmediate: { type: Boolean, default: false }, items: { type: Array, default: () => [] }, fetchOnSearch: { type: Boolean, default: false }, labelKey: { type: String, default: "text" }, valueKey: { type: String, default: "value" }, modelValue: { type: [String, Number, Array], default: null }, multiple: { type: Boolean }, disabled: { type: Boolean, default: false } }, emits: ["blur", "change", "focus", "update:open", "create", "highlight", "update:modelValue", "update:value", "update:searchTerm"], async setup(e2, { emit: t2 }) {
  let a2, i2;
  const n2 = Wt.ref(false), r2 = Wt.useAttrs(), o2 = e2, s2 = t2, u2 = Wt.ref(o2.modelValue), d2 = useRootStore(), { auth: c2 } = Qs.storeToRefs(d2), m2 = Wt.computed(() => {
    var e3;
    return r.defaults.headers.common.Authorization || `Bearer ${null == (e3 = c2.value) ? void 0 : e3.access_token}`;
  }), v2 = Wt.computed(() => ({ ...o2.params })), { data: p2, status: h2, error: y2, execute: x2 } = ([a2, i2] = Wt.withAsyncContext(() => ae("https://lms-sttal.dev-app.online/s22-api/lms-sttal-api/index.php" + ((null == o2 ? void 0 : o2.isOpsi) ? `/api/master/${null == o2 ? void 0 : o2.url}/get-opsi` : `/${null == o2 ? void 0 : o2.url}`), { immediate: o2.isImmediate || null !== o2.modelValue, params: v2, onRequest({ request: e3, options: l2 }) {
    l2.headers || (l2.headers = new Headers()), l2.headers.set("Authorization", m2.value);
  }, transform: (e3) => (console.log("ComboBox", o2.params), Array.isArray(e3.data) ? e3.data.map((e4) => ({ text: e4[o2.labelKey] || e4.text, value: e4[o2.valueKey] || e4.value, ...e4 })) : e3.data && Array.isArray(e3.data.data) ? e3.data.data.map((e4) => ({ text: e4[o2.labelKey] || e4.nama || e4.text || e4.name, value: e4[o2.valueKey] || e4.id || e4.value, ...e4 })) : e3.data) }, "$cLCUH2NWYy")), a2 = await a2, i2(), a2), I2 = Wt.computed(() => Array.isArray(p2.value) && p2.value.length > 0 ? p2.value : o2.items);
  Wt.computed({ get: () => {
    var e3;
    return Array.isArray(o2.modelValue) ? o2.modelValue.join(",") : (null == (e3 = o2.modelValue) ? void 0 : e3.toString()) || "";
  }, set: (e3) => {
    s2("update:modelValue", e3);
  } });
  const S2 = Wt.computed(() => ({ ...r2, ...o2, items: I2.value, class: `${o2.class || ""} ${r2.class || ""}`.trim(), open: o2.multiple ? n2.value : void 0, debounce: o2.multiple ? 150 : 0 }));
  Wt.watch(() => o2.modelValue, (e3) => {
    u2.value = e3;
  }), Wt.watch(() => o2.params, (e3, l2) => {
    JSON.stringify(e3) !== JSON.stringify(l2) && x2();
  }, { deep: true });
  const C2 = Wt.ref(0);
  function w2(e3) {
    s2("blur", e3);
  }
  function L2(e3) {
    s2("change", e3);
  }
  function T2(e3) {
    console.log("handleFocus", e3), o2.multiple && (n2.value = true), s2("focus", e3);
  }
  function z2(e3) {
    console.log("onOpen", e3), o2.multiple && e3 !== n2.value && (n2.value = e3), s2("update:open", e3), e3 && Array.isArray(I2.value) && !I2.value.length && 0 === o2.items.length && x2();
  }
  function $2(e3) {
    s2("create", e3);
  }
  function _2(e3) {
    s2("highlight", e3);
  }
  function R2(e3) {
    var l2;
    const t3 = (null == (l2 = I2.value) ? void 0 : l2.find((l3) => l3.value === e3)) || e3;
    s2("update:value", t3), s2("update:modelValue", e3);
  }
  function N2(e3) {
    console.log("handleUpdateSearchTerm", e3), s2("update:searchTerm", e3);
  }
  return Wt.watch(y2, (e3) => {
    var l2, t3, a3;
    if (e3) {
      console.error("Error fetching data:", null == (l2 = null == e3 ? void 0 : e3.message) ? void 0 : l2.includes("401"), null == (t3 = null == e3 ? void 0 : e3.message) ? void 0 : t3.includes("another request"), e3);
      const i3 = (l3 = (null == e3 ? void 0 : e3.message) || "Terjadi Kesalahan Pada Server") => {
        var t4;
        (null == (t4 = null == e3 ? void 0 : e3.message) ? void 0 : t4.includes("another request")) || t().add({ title: "Gagal Memuat Data", description: l3, color: "error" });
      };
      (null == (a3 = null == e3 ? void 0 : e3.message) ? void 0 : a3.includes("401")) ? C2.value < 1 ? (C2.value++, null == d2 || d2.fetchCookie().then(() => {
        x2();
      })) : (C2.value = 0, d2.logout(), i3()) : i3();
    }
  }), Wt.watch(u2, (e3) => {
    s2("update:modelValue", e3);
  }), (t3, a3, i3, n3) => {
    const r3 = kb, s3 = hb;
    om.ssrRenderVNode(a3, Wt.createVNode(Wt.resolveDynamicComponent(o2.multiple ? Wt.unref(ge) : Wt.unref(ze)), Wt.mergeProps(Wt.unref(S2), { modelValue: Wt.unref(u2), "onUpdate:modelValue": [(e3) => Wt.isRef(u2) ? u2.value = e3 : null, R2], onBlur: w2, onChange: L2, onFocus: T2, "onUpdate:open": z2, onCreate: $2, onHighlight: _2, "onUpdate:searchTerm": N2, props: o2, items: Wt.unref(I2), labelKey: o2.labelKey, valueKey: o2.valueKey, loading: "pending" === Wt.unref(h2) }, n3), Wt.createSlots({ _: 2 }, [t3.$slots.leading ? { name: "leading", fn: Wt.withCtx(({ modelValue: e3, open: a4, ui: i4 }, n4, r4, o3) => {
      var s4, u3;
      if (!n4) return [Wt.renderSlot(t3.$slots, "leading", { modelValue: (null == (u3 = Wt.unref(I2)) ? void 0 : u3.find((l2) => l2.value === e3)) || e3, open: a4, ui: i4 })];
      om.ssrRenderSlot(t3.$slots, "leading", { modelValue: (null == (s4 = Wt.unref(I2)) ? void 0 : s4.find((l2) => l2.value === e3)) || e3, open: a4, ui: i4 }, null, n4, r4, o3);
    }), key: "0" } : void 0, !e2.multiple || t3.$slots.trailing ? { name: "trailing", fn: Wt.withCtx(({ modelValue: a4, open: i4, ui: n4 }, u3, d3, c3) => {
      var m3, v3;
      if (!u3) return [t3.$slots.trailing ? Wt.renderSlot(t3.$slots, "trailing", { key: 0, modelValue: (null == (v3 = Wt.unref(I2)) ? void 0 : v3.find((e3) => e3.value === a4)) || a4, open: i4, ui: n4 }) : Wt.createCommentVNode("", true), !a4 || e2.multiple || (null == o2 ? void 0 : o2.disabled) ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock(r3, { key: 1, variant: "link", square: "", size: (null == o2 ? void 0 : o2.size) || "md", class: "text-danger cursor-pointer p-0", onClick: Wt.withModifiers((e3) => R2(null), ["stop", "prevent"]) }, { default: Wt.withCtx(() => [Wt.createVNode(s3, { name: "i-lucide-x" })]), _: 1 }, 8, ["size", "onClick"]))];
      t3.$slots.trailing ? om.ssrRenderSlot(t3.$slots, "trailing", { modelValue: (null == (m3 = Wt.unref(I2)) ? void 0 : m3.find((e3) => e3.value === a4)) || a4, open: i4, ui: n4 }, null, u3, d3, c3) : u3("<!---->"), !a4 || e2.multiple || (null == o2 ? void 0 : o2.disabled) ? u3("<!---->") : u3(om.ssrRenderComponent(r3, { variant: "link", square: "", size: (null == o2 ? void 0 : o2.size) || "md", class: "text-danger cursor-pointer p-0", onClick: (e3) => R2(null) }, { default: Wt.withCtx((e3, t4, a5, i5) => {
        if (!t4) return [Wt.createVNode(s3, { name: "i-lucide-x" })];
        t4(om.ssrRenderComponent(s3, { name: "i-lucide-x" }, null, a5, i5));
      }), _: 2 }, d3, c3));
    }), key: "1" } : void 0, t3.$slots.empty ? { name: "empty", fn: Wt.withCtx(({ searchTerm: e3 }, a4, i4, n4) => {
      if (!a4) return [Wt.renderSlot(t3.$slots, "empty", { searchTerm: e3 })];
      om.ssrRenderSlot(t3.$slots, "empty", { searchTerm: e3 }, null, a4, i4, n4);
    }), key: "2" } : void 0, t3.$slots.item ? { name: "item", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "item", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "item", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "3" } : void 0, t3.$slots["item-leading"] ? { name: "item-leading", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "item-leading", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "item-leading", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "4" } : void 0, t3.$slots["item-label"] ? { name: "item-label", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "item-label", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "item-label", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "5" } : void 0, t3.$slots["item-trailing"] ? { name: "item-trailing", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "item-trailing", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "item-trailing", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "6" } : void 0, e2.multiple && t3.$slots["tags-item-text"] ? { name: "tags-item-text", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "tags-item-text", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "tags-item-text", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "7" } : void 0, e2.multiple && t3.$slots["tags-item-delete"] ? { name: "tags-item-delete", fn: Wt.withCtx(({ item: e3, index: a4 }, i4, n4, r4) => {
      if (!i4) return [Wt.renderSlot(t3.$slots, "tags-item-delete", { item: e3, index: a4 })];
      om.ssrRenderSlot(t3.$slots, "tags-item-delete", { item: e3, index: a4 }, null, i4, n4, r4);
    }), key: "8" } : void 0, t3.$slots["content-top"] ? { name: "content-top", fn: Wt.withCtx((e3, a4, i4, n4) => {
      if (!a4) return [Wt.renderSlot(t3.$slots, "content-top")];
      om.ssrRenderSlot(t3.$slots, "content-top", {}, null, a4, i4, n4);
    }), key: "9" } : void 0, t3.$slots["content-bottom"] ? { name: "content-bottom", fn: Wt.withCtx((e3, a4, i4, n4) => {
      if (!a4) return [Wt.renderSlot(t3.$slots, "content-bottom")];
      om.ssrRenderSlot(t3.$slots, "content-bottom", {}, null, a4, i4, n4);
    }), key: "10" } : void 0, t3.$slots["create-item-label"] ? { name: "create-item-label", fn: Wt.withCtx(({ item: e3 }, a4, i4, n4) => {
      if (!a4) return [Wt.renderSlot(t3.$slots, "create-item-label", { item: e3 })];
      om.ssrRenderSlot(t3.$slots, "create-item-label", { item: e3 }, null, a4, i4, n4);
    }), key: "11" } : void 0])), i3);
  };
} }), ye = he.setup;
he.setup = (e2, t2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/ui/ComboBox.vue"), ye ? ye(e2, t2) : void 0;
};

export { he as default };
//# sourceMappingURL=ComboBox-DHvfJqbX.mjs.map

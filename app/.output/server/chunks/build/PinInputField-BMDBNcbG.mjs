import { v as Wt, s as pm, u as da, r as Bm, e as sg, t as Ky, X as mg, P as _m } from './server.mjs';
import { F, N, C, T } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { n as n$1 } from './VisuallyHiddenInput-CkJh8-LE.mjs';
import { n, o } from './usePrimitiveElement-DSug4YUi.mjs';
import { r } from './useArrowNavigation-Cic7byI7.mjs';
import { l } from './getActiveElement-CxMYnBFR.mjs';
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
import '../_/nitro.mjs';
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:module';
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
import './VisuallyHidden-CudQpOEQ.mjs';
import './ConfigProvider-BxfkmoHO.mjs';

const [h, b] = T("PinInputRoot"), y = Wt.defineComponent({ inheritAttrs: false, __name: "PinInputRoot", props: { modelValue: {}, defaultValue: {}, placeholder: { default: "" }, mask: { type: Boolean }, otp: { type: Boolean }, type: { default: "text" }, dir: {}, disabled: { type: Boolean }, id: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "complete"], setup(i2, { emit: r2 }) {
  var _a;
  const a2 = i2, l2 = r2, { mask: n2, otp: o2, placeholder: d2, type: p2, disabled: f2, dir: v2 } = Wt.toRefs(a2), { forwardRef: g2 } = N(), h2 = n(v2), y2 = C(a2, "modelValue", l2, { defaultValue: (_a = a2.defaultValue) != null ? _a : [], passive: void 0 === a2.modelValue }), x2 = Wt.computed(() => Array.isArray(y2.value) ? [...y2.value] : []), k2 = Wt.ref(/* @__PURE__ */ new Set());
  const V2 = Wt.computed(() => "number" === a2.type), _2 = Wt.computed(() => x2.value.filter((e2) => !!e2 || V2.value && 0 === e2).length === k2.value.size);
  return Wt.watch(y2, () => {
    _2.value && l2("complete", y2.value);
  }, { deep: true }), b({ modelValue: y2, currentModelValue: x2, mask: n2, otp: o2, placeholder: d2, type: p2, dir: h2, disabled: f2, isCompleted: _2, inputElements: k2, onInputElementChange: function(e2) {
    k2.value.add(e2);
  }, isNumericMode: V2 }), (i3, r3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(i3.$attrs, { ref: Wt.unref(g2), dir: Wt.unref(h2), "data-complete": _2.value ? "" : void 0, "data-disabled": Wt.unref(f2) ? "" : void 0 }), { default: Wt.withCtx(() => {
    var _a2;
    return [Wt.renderSlot(i3.$slots, "default", { modelValue: Wt.unref(y2) }), Wt.createVNode(n$1, { id: i3.id, as: "input", feature: "focusable", tabindex: "-1", value: x2.value.join(""), name: (_a2 = i3.name) != null ? _a2 : "", disabled: Wt.unref(f2), required: i3.required, onFocus: r3[0] || (r3[0] = (e2) => {
      var t2, i4;
      return null == (i4 = null == (t2 = Array.from(k2.value)) ? void 0 : t2[0]) ? void 0 : i4.focus();
    }) }, null, 8, ["id", "value", "name", "disabled", "required"])];
  }), _: 3 }, 16, ["dir", "data-complete", "data-disabled"]));
} }), x = Wt.defineComponent({ __name: "PinInputInput", props: { index: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, setup(i2) {
  const r2 = i2, a2 = h(), l2 = Wt.computed(() => Array.from(a2.inputElements.value)), n2 = Wt.computed(() => a2.currentModelValue.value[r2.index]), o2 = Wt.computed(() => r2.disabled || a2.disabled.value), s2 = Wt.computed(() => a2.otp.value), u2 = Wt.computed(() => a2.mask.value), { primitiveElement: d2, currentElement: p2 } = o();
  function c2() {
    const t2 = p2.value;
    Wt.nextTick(() => {
      t2 && !t2.value && (t2.placeholder = a2.placeholder.value);
    });
  }
  function m2(e2) {
    r(e2, l(), void 0, { itemsArray: l2.value, focus: true, loop: false, arrowKeyOptions: "horizontal", dir: a2.dir.value });
  }
  function b2(e2) {
    e2.preventDefault();
    if (e2.target.value) B2(r2.index, "");
    else {
      const e3 = l2.value[r2.index - 1];
      e3 && (e3.focus(), B2(r2.index - 1, ""));
    }
  }
  function y2(e2) {
    "Delete" === e2.key && (e2.preventDefault(), B2(r2.index, ""));
  }
  function x2(e2) {
    const t2 = e2.target;
    t2.setSelectionRange(1, 1), t2.value || (t2.placeholder = "");
  }
  function k2(e2) {
    c2();
  }
  function V2(e2) {
    e2.preventDefault();
    const t2 = e2.clipboardData;
    if (!t2) return;
    _2(t2.getData("text"));
  }
  function _2(e2) {
    var t2;
    const i3 = [...a2.currentModelValue.value], n3 = e2.length >= l2.value.length ? 0 : r2.index, o3 = Math.min(n3 + e2.length, l2.value.length);
    for (let r3 = n3; r3 < o3; r3++) {
      const t3 = l2.value[r3], o4 = e2[r3 - n3];
      a2.isNumericMode.value && !/^\d*$/.test(o4) || (i3[r3] = o4, t3.focus());
    }
    a2.modelValue.value = i3, null == (t2 = l2.value[o3]) || t2.focus();
  }
  function B2(e2, t2) {
    const i3 = [...a2.currentModelValue.value];
    if (a2.isNumericMode.value) {
      const r3 = +t2;
      "" === t2 || isNaN(r3) ? delete i3[e2] : i3[e2] = r3;
    } else i3[e2] = t2;
    a2.modelValue.value = function(e3) {
      let t3 = e3.length - 1;
      for (; t3 >= 0 && "" === e3[t3]; ) e3.pop(), t3--;
      return e3;
    }(i3);
  }
  return Wt.watch(n2, () => {
    n2.value || c2();
  }), (i3, p3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref_key: "primitiveElement", ref: d2, autocapitalize: "none", as: i3.as, "as-child": i3.asChild, autocomplete: s2.value ? "one-time-code" : "false", type: u2.value ? "password" : "text", inputmode: Wt.unref(a2).isNumericMode.value ? "numeric" : "text", pattern: Wt.unref(a2).isNumericMode.value ? "[0-9]*" : void 0, placeholder: Wt.unref(a2).placeholder.value, value: n2.value, disabled: o2.value, "data-disabled": o2.value ? "" : void 0, "data-complete": Wt.unref(a2).isCompleted.value ? "" : void 0, "aria-label": `pin input ${i3.index + 1} of ${l2.value.length}`, onInput: p3[0] || (p3[0] = (e2) => function(e3) {
    var _a;
    var t2;
    const i4 = e3.target;
    if (((_a = null == (t2 = e3.data) ? void 0 : t2.length) != null ? _a : 0) > 1) return void _2(i4.value);
    if (a2.isNumericMode.value && !/^\d*$/.test(i4.value)) return void (i4.value = i4.value.replace(/\D/g, ""));
    i4.value = i4.value.slice(-1), B2(r2.index, i4.value);
    const n3 = l2.value[r2.index + 1];
    n3 && n3.focus();
  }(e2)), onKeydown: [Wt.withKeys(m2, ["left", "right", "up", "down", "home", "end"]), Wt.withKeys(b2, ["backspace"]), Wt.withKeys(y2, ["delete"])], onFocus: x2, onBlur: k2, onPaste: V2 }, { default: Wt.withCtx(() => [Wt.renderSlot(i3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"]));
} }), k = { slots: { root: "relative inline-flex items-center gap-1.5", base: ["rounded-md border-0 placeholder:text-dimmed text-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"] }, variants: { size: { xs: { base: "size-6 text-xs" }, sm: { base: "size-7 text-xs" }, md: { base: "size-8 text-sm" }, lg: { base: "size-9 text-sm" }, xl: { base: "size-10 text-base" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, highlight: { true: "" } }, compoundVariants: [{ color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, V = { __name: "PinInput", __ssrInlineRender: true, props: { as: { type: null, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, length: { type: [Number, String], required: false, default: 5 }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, highlight: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultValue: { type: Array, required: false }, disabled: { type: Boolean, required: false }, id: { type: String, required: false }, mask: { type: Boolean, required: false }, modelValue: { type: null, required: false }, name: { type: String, required: false }, otp: { type: Boolean, required: false }, placeholder: { type: String, required: false }, required: { type: Boolean, required: false }, type: { type: null, required: false, default: "text" } }, emits: ["update:modelValue", "complete", "change", "blur"], setup(t2, { expose: s2, emit: u2 }) {
  const d2 = t2, c2 = u2, m2 = da(), f2 = F(Bm(d2, "defaultValue", "disabled", "id", "mask", "modelValue", "name", "otp", "required", "type"), c2), { emitFormInput: v2, emitFormFocus: g2, emitFormChange: h2, emitFormBlur: b2, size: V2, color: _2, id: B2, name: S2, highlight: R, disabled: q, ariaAttrs: w } = sg(d2), I = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(k), ...(null == (e2 = m2.ui) ? void 0 : e2.pinInput) || {} })({ color: _2.value, variant: d2.variant, size: V2.value, highlight: R.value });
  }), C = Wt.ref([]), E = Wt.ref(false);
  function j(e2) {
    const t3 = new Event("change", { target: { value: e2 } });
    c2("change", t3), h2();
  }
  function z(e2) {
    e2.relatedTarget && !E.value || (c2("blur", e2), b2());
  }
  return s2({ inputsRef: C }), (i2, r2, a2, l2) => {
    var s3;
    r2(pm.ssrRenderComponent(Wt.unref(y), Wt.mergeProps({ ...Wt.unref(f2), ...Wt.unref(w) }, { id: Wt.unref(B2), name: Wt.unref(S2), placeholder: t2.placeholder, class: I.value.root({ class: [null == (s3 = d2.ui) ? void 0 : s3.root, d2.class] }), "onUpdate:modelValue": (t3) => Wt.unref(v2)(), onComplete: j }, l2), { default: Wt.withCtx((t3, i3, r3, a3) => {
      if (!i3) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Wt.unref(mg)(d2.length), (t4, i4) => {
        var r4;
        return Wt.openBlock(), Wt.createBlock(Wt.unref(x), { key: t4, ref_for: true, ref: (e2) => C.value[i4] = e2, index: i4, class: I.value.base({ class: null == (r4 = d2.ui) ? void 0 : r4.base }), disabled: Wt.unref(q), onBlur: z, onFocus: Wt.unref(g2) }, null, 8, ["index", "class", "disabled", "onFocus"]);
      }), 128))];
      i3("<!--[-->"), pm.ssrRenderList(Wt.unref(mg)(d2.length), (t4, l3) => {
        var o2;
        i3(pm.ssrRenderComponent(Wt.unref(x), { key: t4, ref_for: true, ref: (e2) => C.value[l3] = e2, index: l3, class: I.value.base({ class: null == (o2 = d2.ui) ? void 0 : o2.base }), disabled: Wt.unref(q), onBlur: z, onFocus: Wt.unref(g2) }, null, r3, a3));
      }), i3("<!--]-->");
    }), _: 1 }, a2));
  };
} }, _ = V.setup;
V.setup = (t2, i2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue"), _ ? _(t2, i2) : void 0;
};
const B = Wt.defineComponent({ __name: "PinInputField", __ssrInlineRender: true, props: { modelValue: { type: Array, default: () => [] }, length: { type: Number, default: 4 }, disabled: { type: Boolean, default: false }, type: { type: String, default: "number" }, mask: { type: Boolean, default: false }, placeholder: { type: String, default: "\u25CB" }, otp: { type: Boolean, default: true }, color: { type: String, default: "neutral" }, highlight: { type: Boolean, default: false }, variant: { type: String, default: "outline" }, size: { type: String, default: "lg" } }, emits: ["update:modelValue"], setup(t2, { emit: i2 }) {
  const r2 = i2, a2 = t2, l2 = Wt.ref(a2.modelValue);
  return (t3, i3, o2, s2) => {
    const u2 = V;
    i3(`<div${pm.ssrRenderAttrs(s2)}>`), i3(pm.ssrRenderComponent(u2, { modelValue: Wt.unref(l2), "onUpdate:modelValue": [(t4) => Wt.isRef(l2) ? l2.value = t4 : null, (e2) => r2("update:modelValue", e2)], length: a2.length, disabled: a2.disabled, type: a2.type, mask: a2.mask, placeholder: a2.placeholder, otp: a2.otp, color: a2.color, highlight: a2.highlight, variant: a2.variant, size: a2.size }, null, o2)), i3("</div>");
  };
} }), S = B.setup;
B.setup = (t2, i2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/PinInputField.vue"), S ? S(t2, i2) : void 0;
};

export { B as default };
//# sourceMappingURL=PinInputField-BMDBNcbG.mjs.map

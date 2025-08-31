import { u } from './Alert-BAy4yNmN.mjs';
import { _ as ee, a as N$1 } from './TextField-C4yGug-H.mjs';
import { v as Wt, f as ha, c as Fs, s as pm, b as gb, h as la, _ as Ob, u as da, a as Tm, r as Bm, e as sg, t as Ky, P as _m } from './server.mjs';
import { N as N$2, T as T$1, C } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { n } from './nullish-aV-w2MPu.mjs';
import { i } from './isValueEqualOrExist-DXup0XOt.mjs';
import { a, n as n$2 } from './Collection-B86A2tPF.mjs';
import { o, e, n as n$3 } from './utils-DfEv1peI.mjs';
import { c, u as u$1 } from './Presence-D-YonBfP.mjs';
import { n as n$1 } from './VisuallyHiddenInput-BYeJtXaU.mjs';
import { s } from './logo-kt-C_l9s7Hp.mjs';
import { j as isEqual } from '../_/nitro.mjs';
import './useLocale-DRieL7bI.mjs';
import './Input-B78WqLhZ.mjs';
import './usePortal-B0EwXMSu.mjs';
import './PopperArrow-DHFd-Rdx.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './useGraceArea-CDtlyMEy.mjs';
import './Progress-CXK4L9f0.mjs';
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
import './usePrimitiveElement-BYq1qwBL.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';

const [q, T] = T$1("RovingFocusGroup"), [z, $] = T$1("CheckboxGroupRoot");
function P(e2) {
  return "indeterminate" === e2;
}
function D(e2) {
  return P(e2) ? "indeterminate" : e2 ? "checked" : "unchecked";
}
const E = Wt.defineComponent({ __name: "RovingFocusItem", props: { tabStopId: {}, focusable: { type: Boolean, default: true }, active: { type: Boolean }, allowShiftKey: { type: Boolean }, asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const a2 = e2, r2 = q(), o2 = u$1(), i2 = Wt.computed(() => a2.tabStopId || o2), l2 = Wt.computed(() => r2.currentTabStopId.value === i2.value), { getItems: n2, CollectionItem: d2 } = n$2();
  function u2(e3) {
    if ("Tab" === e3.key && e3.shiftKey) return void r2.onItemShiftTab();
    if (e3.target !== e3.currentTarget) return;
    const s2 = o(e3, r2.orientation.value, r2.dir.value);
    if (void 0 !== s2) {
      if (e3.metaKey || e3.ctrlKey || e3.altKey || !a2.allowShiftKey && e3.shiftKey) return;
      e3.preventDefault();
      let o3 = [...n2().map((e4) => e4.ref).filter((e4) => "" !== e4.dataset.disabled)];
      if ("last" === s2) o3.reverse();
      else if ("prev" === s2 || "next" === s2) {
        "prev" === s2 && o3.reverse();
        const a3 = o3.indexOf(e3.currentTarget);
        o3 = r2.loop.value ? e(o3, a3 + 1) : o3.slice(a3 + 1);
      }
      Wt.nextTick(() => n$3(o3));
    }
  }
  return (e3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(d2), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { tabindex: l2.value ? 0 : -1, "data-orientation": Wt.unref(r2).orientation.value, "data-active": e3.active ? "" : void 0, "data-disabled": e3.focusable ? void 0 : "", as: e3.as, "as-child": e3.asChild, onMousedown: a3[0] || (a3[0] = (a4) => {
    e3.focusable ? Wt.unref(r2).onItemFocus(i2.value) : a4.preventDefault();
  }), onFocus: a3[1] || (a3[1] = (e4) => Wt.unref(r2).onItemFocus(i2.value)), onKeydown: u2 }, { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])]), _: 3 }));
} }), [N, M] = T$1("CheckboxRoot"), A = Wt.defineComponent({ inheritAttrs: false, __name: "CheckboxRoot", props: { defaultValue: { type: [Boolean, String] }, modelValue: { type: [Boolean, String, null], default: void 0 }, disabled: { type: Boolean }, value: { default: "on" }, id: {}, asChild: { type: Boolean }, as: { default: "button" }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue"], setup(e2, { emit: a2 }) {
  const r2 = e2, o2 = a2, { forwardRef: i2, currentElement: l2 } = N$2(), n2 = z(null), d2 = C(r2, "modelValue", o2, { defaultValue: r2.defaultValue, passive: void 0 === r2.modelValue }), u2 = Wt.computed(() => (null == n2 ? void 0 : n2.disabled.value) || r2.disabled), c2 = Wt.computed(() => n(null == n2 ? void 0 : n2.modelValue.value) ? "indeterminate" === d2.value ? "indeterminate" : d2.value : i(n2.modelValue.value, r2.value));
  function p2() {
    if (n(null == n2 ? void 0 : n2.modelValue.value)) d2.value = !!P(d2.value) || !d2.value;
    else {
      const e3 = [...n2.modelValue.value || []];
      if (i(e3, r2.value)) {
        const a3 = e3.findIndex((e4) => isEqual(e4, r2.value));
        e3.splice(a3, 1);
      } else e3.push(r2.value);
      n2.modelValue.value = e3;
    }
  }
  const m2 = a(l2), v2 = Wt.computed(() => {
    var e3;
    return r2.id && l2.value ? null == (e3 = (void 0).querySelector(`[for="${r2.id}"]`)) ? void 0 : e3.innerText : void 0;
  });
  return M({ disabled: u2, state: c2 }), (e3, a3) => {
    var r3, o3;
    return Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent((null == (r3 = Wt.unref(n2)) ? void 0 : r3.rovingFocus.value) ? Wt.unref(E) : Wt.unref(_m)), Wt.mergeProps(e3.$attrs, { id: e3.id, ref: Wt.unref(i2), role: "checkbox", "as-child": e3.asChild, as: e3.as, type: "button" === e3.as ? "button" : void 0, "aria-checked": Wt.unref(P)(c2.value) ? "mixed" : c2.value, "aria-required": e3.required, "aria-label": e3.$attrs["aria-label"] || v2.value, "data-state": Wt.unref(D)(c2.value), "data-disabled": u2.value ? "" : void 0, disabled: u2.value, focusable: (null == (o3 = Wt.unref(n2)) ? void 0 : o3.rovingFocus.value) ? !u2.value : void 0, onKeydown: Wt.withKeys(Wt.withModifiers(() => {
    }, ["prevent"]), ["enter"]), onClick: p2 }), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default", { modelValue: Wt.unref(d2), state: c2.value }), Wt.unref(m2) && e3.name && !Wt.unref(n2) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(n$1), { key: 0, type: "checkbox", checked: !!c2.value, name: e3.name, value: e3.value, disabled: u2.value, required: e3.required }, null, 8, ["checked", "name", "value", "disabled", "required"])) : Wt.createCommentVNode("", true)]), _: 3 }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
  };
} }), K = Wt.defineComponent({ __name: "CheckboxIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: "span" } }, setup(e2) {
  const { forwardRef: a2 } = N$2(), r2 = N();
  return (e3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(c), { present: e3.forceMount || Wt.unref(P)(Wt.unref(r2).state.value) || true === Wt.unref(r2).state.value }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), Wt.mergeProps({ ref: Wt.unref(a2), "data-state": Wt.unref(D)(Wt.unref(r2).state.value), "data-disabled": Wt.unref(r2).disabled.value ? "" : void 0, style: { pointerEvents: "none" }, "as-child": e3.asChild, as: e3.as }, e3.$attrs), { default: Wt.withCtx(() => [Wt.renderSlot(e3.$slots, "default")]), _: 3 }, 16, ["data-state", "data-disabled", "as-child", "as"])]), _: 3 }, 8, ["present"]));
} }), F = { slots: { root: "relative flex items-start", container: "flex items-center", base: "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2", indicator: "flex items-center justify-center size-full text-inverted", icon: "shrink-0 size-full", wrapper: "w-full", label: "block font-medium text-default", description: "text-muted" }, variants: { color: { primary: { base: "focus-visible:outline-primary", indicator: "bg-primary" }, secondary: { base: "focus-visible:outline-secondary", indicator: "bg-secondary" }, success: { base: "focus-visible:outline-success", indicator: "bg-success" }, info: { base: "focus-visible:outline-info", indicator: "bg-info" }, warning: { base: "focus-visible:outline-warning", indicator: "bg-warning" }, error: { base: "focus-visible:outline-error", indicator: "bg-error" }, neutral: { base: "focus-visible:outline-inverted", indicator: "bg-inverted" } }, variant: { list: { root: "" }, card: { root: "border border-muted rounded-lg" } }, indicator: { start: { root: "flex-row", wrapper: "ms-2" }, end: { root: "flex-row-reverse", wrapper: "me-2" }, hidden: { base: "sr-only", wrapper: "text-center" } }, size: { xs: { base: "size-3", container: "h-4", wrapper: "text-xs" }, sm: { base: "size-3.5", container: "h-4", wrapper: "text-xs" }, md: { base: "size-4", container: "h-5", wrapper: "text-sm" }, lg: { base: "size-4.5", container: "h-5", wrapper: "text-sm" }, xl: { base: "size-5", container: "h-6", wrapper: "text-base" } }, required: { true: { label: "after:content-['*'] after:ms-0.5 after:text-error" } }, disabled: { true: { base: "cursor-not-allowed opacity-75", label: "cursor-not-allowed opacity-75", description: "cursor-not-allowed opacity-75" } }, checked: { true: "" } }, compoundVariants: [{ size: "xs", variant: "card", class: { root: "p-2.5" } }, { size: "sm", variant: "card", class: { root: "p-3" } }, { size: "md", variant: "card", class: { root: "p-3.5" } }, { size: "lg", variant: "card", class: { root: "p-4" } }, { size: "xl", variant: "card", class: { root: "p-4.5" } }, { color: "primary", variant: "card", class: { root: "has-data-[state=checked]:border-primary" } }, { color: "secondary", variant: "card", class: { root: "has-data-[state=checked]:border-secondary" } }, { color: "success", variant: "card", class: { root: "has-data-[state=checked]:border-success" } }, { color: "info", variant: "card", class: { root: "has-data-[state=checked]:border-info" } }, { color: "warning", variant: "card", class: { root: "has-data-[state=checked]:border-warning" } }, { color: "error", variant: "card", class: { root: "has-data-[state=checked]:border-error" } }, { color: "neutral", variant: "card", class: { root: "has-data-[state=checked]:border-inverted" } }, { variant: "card", disabled: true, class: { root: "cursor-not-allowed opacity-75" } }], defaultVariants: { size: "md", color: "primary", variant: "list", indicator: "start" } }, G = Object.assign({ inheritAttrs: false }, { __name: "Checkbox", __ssrInlineRender: true, props: Wt.mergeModels({ as: { type: null, required: false }, label: { type: String, required: false }, description: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, indicator: { type: null, required: false }, icon: { type: String, required: false }, indeterminateIcon: { type: String, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, disabled: { type: Boolean, required: false }, required: { type: Boolean, required: false }, name: { type: String, required: false }, value: { type: null, required: false }, id: { type: String, required: false }, defaultValue: { type: [Boolean, String], required: false } }, { modelValue: { type: [Boolean, String], default: void 0 }, modelModifiers: {} }), emits: Wt.mergeModels(["change"], ["update:modelValue"]), setup(e2, { emit: r2 }) {
  var _a;
  const p2 = e2, m2 = Wt.useSlots(), v2 = r2, f2 = Wt.useModel(e2, "modelValue", { type: [Boolean, String], default: void 0 }), b2 = da(), x2 = Tm(Bm(p2, "required", "value", "defaultValue")), { id: h2, emitFormChange: g2, emitFormInput: w2, size: k2, color: y2, name: _2, disabled: C2, ariaAttrs: V2 } = sg(p2), R2 = (_a = h2.value) != null ? _a : Wt.useId(), S2 = Wt.computed(() => {
    var e3;
    return Ky({ extend: Ky(F), ...(null == (e3 = b2.ui) ? void 0 : e3.checkbox) || {} })({ size: k2.value, color: y2.value, variant: p2.variant, indicator: p2.indicator, required: p2.required, disabled: C2.value });
  });
  function B2(e3) {
    const a2 = new Event("change", { target: { value: e3 } });
    v2("change", a2), g2(), w2();
  }
  return (r3, o2, i2, l2) => {
    var n2;
    o2(pm.ssrRenderComponent(Wt.unref(_m), Wt.mergeProps({ as: e2.variant && "list" !== e2.variant ? Wt.unref(N$1) : e2.as, class: S2.value.root({ class: [null == (n2 = p2.ui) ? void 0 : n2.root, p2.class] }) }, l2), { default: Wt.withCtx((s2, o3, i3, l3) => {
      var n3, d2, v3, h3, g3, w3, k3, y3, I2, j2;
      if (!o3) return [Wt.createVNode("div", { class: S2.value.container({ class: null == (w3 = p2.ui) ? void 0 : w3.container }) }, [Wt.createVNode(Wt.unref(A), Wt.mergeProps({ id: Wt.unref(R2) }, { ...Wt.unref(x2), ...r3.$attrs, ...Wt.unref(V2) }, { modelValue: f2.value, "onUpdate:modelValue": [(e3) => f2.value = e3, B2], name: Wt.unref(_2), disabled: Wt.unref(C2), class: S2.value.base({ class: null == (k3 = p2.ui) ? void 0 : k3.base }) }), { default: Wt.withCtx(({ modelValue: a2 }) => {
        var r4;
        return [Wt.createVNode(Wt.unref(K), { class: S2.value.indicator({ class: null == (r4 = p2.ui) ? void 0 : r4.indicator }) }, { default: Wt.withCtx(() => {
          var r5, s3;
          return ["indeterminate" === a2 ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: e2.indeterminateIcon || Wt.unref(b2).ui.icons.minus, class: S2.value.icon({ class: null == (r5 = p2.ui) ? void 0 : r5.icon }) }, null, 8, ["name", "class"])) : (Wt.openBlock(), Wt.createBlock(gb, { key: 1, name: e2.icon || Wt.unref(b2).ui.icons.check, class: S2.value.icon({ class: null == (s3 = p2.ui) ? void 0 : s3.icon }) }, null, 8, ["name", "class"]))];
        }), _: 2 }, 1032, ["class"])];
      }), _: 1 }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])], 2), e2.label || m2.label || e2.description || m2.description ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: S2.value.wrapper({ class: null == (y3 = p2.ui) ? void 0 : y3.wrapper }) }, [e2.label || m2.label ? (Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent(e2.variant && "list" !== e2.variant ? "p" : Wt.unref(N$1)), { key: 0, for: Wt.unref(R2), class: S2.value.label({ class: null == (I2 = p2.ui) ? void 0 : I2.label }) }, { default: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "label", { label: e2.label }, () => [Wt.createTextVNode(Wt.toDisplayString(e2.label), 1)])]), _: 3 }, 8, ["for", "class"])) : Wt.createCommentVNode("", true), e2.description || m2.description ? (Wt.openBlock(), Wt.createBlock("p", { key: 1, class: S2.value.description({ class: null == (j2 = p2.ui) ? void 0 : j2.description }) }, [Wt.renderSlot(r3.$slots, "description", { description: e2.description }, () => [Wt.createTextVNode(Wt.toDisplayString(e2.description), 1)])], 2)) : Wt.createCommentVNode("", true)], 2)) : Wt.createCommentVNode("", true)];
      o3(`<div class="${pm.ssrRenderClass(S2.value.container({ class: null == (n3 = p2.ui) ? void 0 : n3.container }))}"${l3}>`), o3(pm.ssrRenderComponent(Wt.unref(A), Wt.mergeProps({ id: Wt.unref(R2) }, { ...Wt.unref(x2), ...r3.$attrs, ...Wt.unref(V2) }, { modelValue: f2.value, "onUpdate:modelValue": [(e3) => f2.value = e3, B2], name: Wt.unref(_2), disabled: Wt.unref(C2), class: S2.value.base({ class: null == (d2 = p2.ui) ? void 0 : d2.base }) }), { default: Wt.withCtx(({ modelValue: a2 }, r4, s3, o4) => {
        var i4, l4;
        if (!r4) return [Wt.createVNode(Wt.unref(K), { class: S2.value.indicator({ class: null == (l4 = p2.ui) ? void 0 : l4.indicator }) }, { default: Wt.withCtx(() => {
          var r5, s4;
          return ["indeterminate" === a2 ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: e2.indeterminateIcon || Wt.unref(b2).ui.icons.minus, class: S2.value.icon({ class: null == (r5 = p2.ui) ? void 0 : r5.icon }) }, null, 8, ["name", "class"])) : (Wt.openBlock(), Wt.createBlock(gb, { key: 1, name: e2.icon || Wt.unref(b2).ui.icons.check, class: S2.value.icon({ class: null == (s4 = p2.ui) ? void 0 : s4.icon }) }, null, 8, ["name", "class"]))];
        }), _: 2 }, 1032, ["class"])];
        r4(pm.ssrRenderComponent(Wt.unref(K), { class: S2.value.indicator({ class: null == (i4 = p2.ui) ? void 0 : i4.indicator }) }, { default: Wt.withCtx((r5, s4, o5, i5) => {
          var l5, n4, d3, m3;
          if (!s4) return ["indeterminate" === a2 ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: e2.indeterminateIcon || Wt.unref(b2).ui.icons.minus, class: S2.value.icon({ class: null == (d3 = p2.ui) ? void 0 : d3.icon }) }, null, 8, ["name", "class"])) : (Wt.openBlock(), Wt.createBlock(gb, { key: 1, name: e2.icon || Wt.unref(b2).ui.icons.check, class: S2.value.icon({ class: null == (m3 = p2.ui) ? void 0 : m3.icon }) }, null, 8, ["name", "class"]))];
          s4("indeterminate" === a2 ? pm.ssrRenderComponent(gb, { name: e2.indeterminateIcon || Wt.unref(b2).ui.icons.minus, class: S2.value.icon({ class: null == (l5 = p2.ui) ? void 0 : l5.icon }) }, null, o5, i5) : pm.ssrRenderComponent(gb, { name: e2.icon || Wt.unref(b2).ui.icons.check, class: S2.value.icon({ class: null == (n4 = p2.ui) ? void 0 : n4.icon }) }, null, o5, i5));
        }), _: 2 }, s3, o4));
      }), _: 1 }, i3, l3)), o3("</div>"), e2.label || m2.label || e2.description || m2.description ? (o3(`<div class="${pm.ssrRenderClass(S2.value.wrapper({ class: null == (v3 = p2.ui) ? void 0 : v3.wrapper }))}"${l3}>`), e2.label || m2.label ? pm.ssrRenderVNode(o3, Wt.createVNode(Wt.resolveDynamicComponent(e2.variant && "list" !== e2.variant ? "p" : Wt.unref(N$1)), { for: Wt.unref(R2), class: S2.value.label({ class: null == (h3 = p2.ui) ? void 0 : h3.label }) }, { default: Wt.withCtx((a2, s3, o4, i4) => {
        if (!s3) return [Wt.renderSlot(r3.$slots, "label", { label: e2.label }, () => [Wt.createTextVNode(Wt.toDisplayString(e2.label), 1)])];
        pm.ssrRenderSlot(r3.$slots, "label", { label: e2.label }, () => {
          s3(`${pm.ssrInterpolate(e2.label)}`);
        }, s3, o4, i4);
      }), _: 3 }), i3, l3) : o3("<!---->"), e2.description || m2.description ? (o3(`<p class="${pm.ssrRenderClass(S2.value.description({ class: null == (g3 = p2.ui) ? void 0 : g3.description }))}"${l3}>`), pm.ssrRenderSlot(r3.$slots, "description", { description: e2.description }, () => {
        o3(`${pm.ssrInterpolate(e2.description)}`);
      }, o3, i3, l3), o3("</p>")) : o3("<!---->"), o3("</div>")) : o3("<!---->");
    }), _: 3 }, i2));
  };
} }), U = G.setup;
G.setup = (e2, a2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue"), U ? U(e2, a2) : void 0;
};
const Y = Wt.defineComponent({ __name: "login", __ssrInlineRender: true, setup(a2) {
  const s2 = ha(), o2 = Fs(), i2 = Wt.ref({ username: "", password: "", is_remember: false }), l2 = Wt.ref({ show: false, message: "", error: false }), n2 = Wt.ref({ simpan: false }), d2 = async () => {
    n2.value.simpan = true;
    const { status: e2, message: a3, data: r2 } = await s2.login({ username: i2.value.username, password: i2.value.password, is_remember: i2.value.is_remember });
    e2 ? (l2.value = { show: true, message: "Berhasil login", error: false }, setTimeout(() => {
      b2(null == r2 ? void 0 : r2.user_group_id), n2.value.simpan = false;
    }, 2e3)) : (l2.value = { show: true, message: a3, error: true }, n2.value.simpan = false), setTimeout(() => {
      l2.value = { show: false, message: "", error: false };
    }, 3e3);
  }, b2 = (e2) => {
    switch (e2) {
      case "01":
        o2.push("/human-resources").then(() => {
          (void 0).location.reload();
        });
        break;
      case "02":
        o2.push("/interviewers").then(() => {
          (void 0).location.reload();
        });
        break;
      case "03":
        o2.push("/pelamar").then(() => {
          (void 0).location.reload();
        });
        break;
      default:
        l2.value = { show: true, message: "User group tidak ditemukan", error: true };
    }
  };
  return Wt.ref([{ user_id: "123", username: "user1", user_group_id: "01", roles: "admin" }, { user_id: "124", username: "user2", user_group_id: "02", roles: "interviewer" }, { user_id: "125", username: "user3", user_group_id: "03", roles: "pelamar" }]), (a3, o3, p2, m2) => {
    const x2 = u, h2 = ee, g2 = gb, w2 = G, k2 = la, y2 = Ob;
    o3(`<div${pm.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen w-full relative bg-gray-50 flex items-center justify-center" }, m2))}><div class="absolute inset-0 z-0 cool-blue-glow"></div><div class="relative w-full max-w-5xl bg-white rounded-2xl h-fit shadow-xl grid grid-cols-1 lg:grid-cols-2 ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden"><div class="flex flex-col justify-center p-8 sm:p-12"><div class="mb-8 text-center lg:text-left"><h1 class="text-slate-800 text-3xl font-bold leading-tight"> Selamat Datang! </h1><p class="text-neutral-500 text-base font-medium mt-2"> Mohon masukkan email dan password Anda. </p></div><div class="w-full flex flex-col gap-4"><div class="w-full h-10">`), Wt.unref(l2).show ? o3(pm.ssrRenderComponent(x2, { title: Wt.unref(l2).message, class: ["px-4 py-2 font-medium text-xs leading-4 h-auto text-center transition-all duration-500 ease-out", [Wt.unref(l2).error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"]] }, null, p2)) : o3("<!---->"), o3("</div>"), o3(pm.ssrRenderComponent(h2, { class: "w-full", label: "Email", variant: "soft", placeholder: "Masukkan Email", size: "xl", modelValue: Wt.unref(i2).username, "onUpdate:modelValue": (e2) => Wt.unref(i2).username = e2 }, { leading: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createVNode(g2, { name: "i-mdi-email", class: "text-PRIMARY size-5" })];
      a4(pm.ssrRenderComponent(g2, { name: "i-mdi-email", class: "text-PRIMARY size-5" }, null, r2, s3));
    }), _: 1 }, p2)), o3(pm.ssrRenderComponent(h2, { label: "Password", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Masukkan Password", modelValue: Wt.unref(i2).password, "onUpdate:modelValue": (e2) => Wt.unref(i2).password = e2, icon: "i-mdi-password", onKeyup: d2 }, { leading: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createVNode(g2, { name: "i-mdi-password", class: "text-PRIMARY size-5" })];
      a4(pm.ssrRenderComponent(g2, { name: "i-mdi-password", class: "text-PRIMARY size-5" }, null, r2, s3));
    }), _: 1 }, p2)), o3('<div class="self-stretch flex justify-between items-center">'), o3(pm.ssrRenderComponent(w2, { modelValue: Wt.unref(i2).is_remember, "onUpdate:modelValue": (e2) => Wt.unref(i2).is_remember = e2, id: "rememberMe", label: "Ingat Saya" }, null, p2)), o3(pm.ssrRenderComponent(k2, { to: "/auth/forget-password", class: "text-sm font-medium text-PRIMARY hover:text-opacity-80" }, { default: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createTextVNode(" Lupa password? ")];
      a4(" Lupa password? ");
    }), _: 1 }, p2)), o3('</div></div><div class="w-full space-y-4 mt-8">'), o3(pm.ssrRenderComponent(y2, { class: "rounded-xl font-semibold text-base text-white bg-[#0c315a]", color: "primary", variant: "solid", size: "xl", block: "", loading: Wt.unref(n2).simpan, disabled: Wt.unref(n2).simpan, onClick: (e2) => d2() }, { default: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createTextVNode(" Masuk ")];
      a4(" Masuk ");
    }), _: 1 }, p2)), o3('<div class="relative flex items-center py-2"><div class="flex-grow border-t border-neutral-200"></div><span class="flex-shrink mx-4 text-sm text-neutral-500">Atau login dengan</span><div class="flex-grow border-t border-neutral-200"></div></div>'), o3(pm.ssrRenderComponent(y2, { class: "rounded-xl bg-white ring-[#0c315a] text-[#0c315a] hover:bg-[#0c315a]/10", color: "primary", variant: "outline", avatar: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" }, size: "xl", block: "", loading: Wt.unref(n2).simpan, disabled: Wt.unref(n2).simpan, onClick: (e2) => (l2.value = { show: true, message: "Berhasil login (dummy)", error: false }, void setTimeout(() => {
      b2("02"), n2.value.simpan = false, s2.user = { user_id: "123", username: "dummyuser", user_group_id: "02", roles: "pelamar" };
    }, 2e3)) }, { default: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createTextVNode(" Login dengan Google ")];
      a4(" Login dengan Google ");
    }), _: 1 }, p2)), o3('</div><div class="text-center mt-8"><p class="text-sm text-neutral-500"> Belum punya akun? '), o3(pm.ssrRenderComponent(k2, { to: "/auth/register", class: "font-medium text-PRIMARY hover:text-opacity-80" }, { default: Wt.withCtx((e2, a4, r2, s3) => {
      if (!a4) return [Wt.createTextVNode("Daftar")];
      a4("Daftar");
    }), _: 1 }, p2)), o3(`</p></div></div><div class="hidden lg:flex flex-col justify-center items-center gap-4 bg-slate-50 p-12 rounded-r-2xl"><div class="text-center space-y-6"><img${pm.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-56 object-contain mx-auto"><p class="text-[#0c315a] text-xl font-bold capitalize"> Karir Traspac <span class="font-semibold text-slate-500"> Platform pencarian karir impian Anda. </span></p></div></div></div></div>`);
  };
} }), L = Y.setup;
Y.setup = (e2, a2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue"), L ? L(e2, a2) : void 0;
};

export { Y as default };
//# sourceMappingURL=login-BYdEQQFf.mjs.map

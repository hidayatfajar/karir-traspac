import { v as Wt, s as pm, _ as Rb, c as yb, u as da, t as Ky, T as tg, U as eg, P as _m, r as Bm, a as Tm } from './server.mjs';
import { F as F$1, N as N$1, T as T$1, C, R } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { c } from './Input-DfRex13n.mjs';
import { k as defu } from '../_/nitro.mjs';
import { O as O$1, c as c$1, h, f, b } from './usePortal-DtLtCtVs.mjs';
import { d } from './Kbd-CSjdA-rA.mjs';
import { $ as $e, H as He, q as qe, I as Ie } from './PopperArrow-DcWSYcLt.mjs';
import { d as d$1 } from './VisuallyHidden-CudQpOEQ.mjs';
import { r } from './useGraceArea-EHMcTElw.mjs';
import { y } from './Progress-BUxTXwf6.mjs';
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
import 'node:module';
import './ConfigProvider-BxfkmoHO.mjs';
import './useLocale-BTFVrGyI.mjs';
import './nullish-aV-w2MPu.mjs';

const N = Wt.defineComponent({ __name: "Label", props: { for: {}, asChild: { type: Boolean }, as: { default: "label" } }, setup(r2) {
  const o2 = r2;
  return N$1(), (r3, l2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { onMousedown: l2[0] || (l2[0] = (e2) => {
    !e2.defaultPrevented && e2.detail > 1 && e2.preventDefault();
  }) }), { default: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "default")]), _: 3 }, 16));
} }), P = Wt.defineComponent({ __name: "TooltipArrow", props: { width: { default: 10 }, height: { default: 5 }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(t2) {
  const r2 = t2;
  return N$1(), (t3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(qe), Wt.normalizeProps(Wt.guardReactiveProps(r2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), [D, T] = T$1("TooltipProvider"), [q, I] = T$1("TooltipRoot"), O = Wt.defineComponent({ __name: "TooltipRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, delayDuration: { default: void 0 }, disableHoverableContent: { type: Boolean, default: void 0 }, disableClosingTrigger: { type: Boolean, default: void 0 }, disabled: { type: Boolean, default: void 0 }, ignoreNonKeyboardFocus: { type: Boolean, default: void 0 } }, emits: ["update:open"], setup(t2, { emit: r2 }) {
  const o2 = t2, l2 = r2;
  N$1();
  const a2 = D(), n2 = Wt.computed(() => {
    var _a;
    return (_a = o2.disableHoverableContent) != null ? _a : a2.disableHoverableContent.value;
  }), s2 = Wt.computed(() => {
    var _a;
    return (_a = o2.disableClosingTrigger) != null ? _a : a2.disableClosingTrigger.value;
  }), i2 = Wt.computed(() => {
    var _a;
    return (_a = o2.disabled) != null ? _a : a2.disabled.value;
  }), u2 = Wt.computed(() => {
    var _a;
    return (_a = o2.delayDuration) != null ? _a : a2.delayDuration.value;
  }), d2 = Wt.computed(() => {
    var _a;
    return (_a = o2.ignoreNonKeyboardFocus) != null ? _a : a2.ignoreNonKeyboardFocus.value;
  }), c2 = C(o2, "open", l2, { defaultValue: o2.defaultOpen, passive: void 0 === o2.open });
  Wt.watch(c2, (e2) => {
    a2.onClose && (e2 ? (a2.onOpen(), (void 0).dispatchEvent(new CustomEvent("tooltip.open"))) : a2.onClose());
  });
  const v2 = Wt.ref(false), h2 = Wt.ref(), g2 = Wt.computed(() => c2.value ? v2.value ? "delayed-open" : "instant-open" : "closed"), { start: x2, stop: y2 } = R(() => {
    v2.value = true, c2.value = true;
  }, u2, { immediate: false });
  function b2() {
    y2(), v2.value = false, c2.value = true;
  }
  function k2() {
    y2(), c2.value = false;
  }
  return I({ contentId: "", open: c2, stateAttribute: g2, trigger: h2, onTriggerChange(e2) {
    h2.value = e2;
  }, onTriggerEnter() {
    a2.isOpenDelayed.value ? x2() : b2();
  }, onTriggerLeave() {
    n2.value ? k2() : y2();
  }, onOpen: b2, onClose: k2, disableHoverableContent: n2, disableClosingTrigger: s2, disabled: i2, ignoreNonKeyboardFocus: d2 }), (t3, r3) => (Wt.openBlock(), Wt.createBlock(Wt.unref($e), null, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", { open: Wt.unref(c2) })]), _: 3 }));
} }), F = Wt.defineComponent({ __name: "TooltipContentImpl", props: { ariaLabel: {}, asChild: { type: Boolean }, as: {}, side: { default: "top" }, sideOffset: { default: 0 }, align: { default: "center" }, alignOffset: {}, avoidCollisions: { type: Boolean, default: true }, collisionBoundary: { default: () => [] }, collisionPadding: { default: 0 }, arrowPadding: { default: 0 }, sticky: { default: "partial" }, hideWhenDetached: { type: Boolean, default: false }, positionStrategy: {}, updatePositionStrategy: {} }, emits: ["escapeKeyDown", "pointerDownOutside"], setup(t2, { emit: r2 }) {
  const o2 = t2, l2 = r2, a2 = q(), { forwardRef: n2 } = N$1(), s2 = Wt.useSlots(), i2 = Wt.computed(() => {
    var e2;
    return null == (e2 = s2.default) ? void 0 : e2.call(s2, {});
  }), u2 = Wt.computed(() => {
    var t3;
    if (o2.ariaLabel) return o2.ariaLabel;
    let r3 = "";
    function l3(t4) {
      "string" == typeof t4.children && t4.type !== Wt.Comment ? r3 += t4.children : Array.isArray(t4.children) && t4.children.forEach((e2) => l3(e2));
    }
    return null == (t3 = i2.value) || t3.forEach((e2) => l3(e2)), r3;
  }), d2 = Wt.computed(() => {
    const { ariaLabel: e2, ...t3 } = o2;
    return t3;
  });
  return (t3, r3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(b), { "as-child": "", "disable-outside-pointer-events": false, onEscapeKeyDown: r3[0] || (r3[0] = (e2) => l2("escapeKeyDown", e2)), onPointerDownOutside: r3[1] || (r3[1] = (t4) => {
    var r4;
    Wt.unref(a2).disableClosingTrigger.value && (null == (r4 = Wt.unref(a2).trigger.value) ? void 0 : r4.contains(t4.target)) && t4.preventDefault(), l2("pointerDownOutside", t4);
  }), onFocusOutside: r3[2] || (r3[2] = Wt.withModifiers(() => {
  }, ["prevent"])), onDismiss: r3[3] || (r3[3] = (t4) => Wt.unref(a2).onClose()) }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(Ie), Wt.mergeProps({ ref: Wt.unref(n2), "data-state": Wt.unref(a2).stateAttribute.value }, { ...t3.$attrs, ...d2.value }, { style: { "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)", "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)", "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)", "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default"), Wt.createVNode(Wt.unref(d$1), { id: Wt.unref(a2).contentId, role: "tooltip" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(u2.value), 1)]), _: 1 }, 8, ["id"])]), _: 3 }, 16, ["data-state"])]), _: 3 }));
} }), A = Wt.defineComponent({ __name: "TooltipContentHoverable", props: { ariaLabel: {}, asChild: { type: Boolean }, as: {}, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {} }, setup(t2) {
  const o2 = Tm(t2), { forwardRef: l2, currentElement: a2 } = N$1(), { trigger: n2, onClose: s2 } = q(), i2 = D(), { isPointerInTransit: u2, onPointerExit: d2 } = r(n2, a2);
  return i2.isPointerInTransitRef = u2, d2(() => {
    s2();
  }), (t3, r2) => (Wt.openBlock(), Wt.createBlock(F, Wt.mergeProps({ ref: Wt.unref(l2) }, Wt.unref(o2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), L = Wt.defineComponent({ __name: "TooltipContent", props: { forceMount: { type: Boolean }, ariaLabel: {}, asChild: { type: Boolean }, as: {}, side: { default: "top" }, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {} }, emits: ["escapeKeyDown", "pointerDownOutside"], setup(t2, { emit: r2 }) {
  const o2 = t2, l2 = r2, a2 = q(), n2 = F$1(o2, l2), { forwardRef: s2 } = N$1();
  return (t3, r3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(f), { present: t3.forceMount || Wt.unref(a2).open.value }, { default: Wt.withCtx(() => [(Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent(Wt.unref(a2).disableHoverableContent.value ? F : A), Wt.mergeProps({ ref: Wt.unref(s2) }, Wt.unref(n2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), j = Wt.defineComponent({ __name: "TooltipPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const r2 = t2;
  return (t3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(h), Wt.normalizeProps(Wt.guardReactiveProps(r2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), E = Wt.defineComponent({ __name: "TooltipTrigger", props: { reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(r2) {
  const o2 = r2, l2 = q(), a2 = D();
  l2.contentId || (l2.contentId = c$1(void 0, "reka-tooltip-content"));
  const { forwardRef: n2 } = N$1(), s2 = Wt.ref(false), i2 = Wt.ref(false), u2 = Wt.computed(() => l2.disabled.value ? {} : { click: g2, focus: v2, pointermove: f2, pointerleave: m2, pointerdown: c2, blur: h2 });
  function d2() {
    setTimeout(() => {
      s2.value = false;
    }, 1);
  }
  function c2() {
    l2.open && !l2.disableClosingTrigger.value && l2.onClose(), s2.value = true, (void 0).addEventListener("pointerup", d2, { once: true });
  }
  function f2(e2) {
    "touch" !== e2.pointerType && (i2.value || a2.isPointerInTransitRef.value || (l2.onTriggerEnter(), i2.value = true));
  }
  function m2() {
    l2.onTriggerLeave(), i2.value = false;
  }
  function v2(e2) {
    var t2, r3;
    s2.value || l2.ignoreNonKeyboardFocus.value && !(null == (r3 = (t2 = e2.target).matches) ? void 0 : r3.call(t2, ":focus-visible")) || l2.onOpen();
  }
  function h2() {
    l2.onClose();
  }
  function g2() {
    l2.disableClosingTrigger.value || l2.onClose();
  }
  return (r3, a3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(He), { "as-child": "", reference: r3.reference }, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), Wt.mergeProps({ ref: Wt.unref(n2), "aria-describedby": Wt.unref(l2).open.value ? Wt.unref(l2).contentId : void 0, "data-state": Wt.unref(l2).stateAttribute.value, as: r3.as, "as-child": o2.asChild, "data-grace-area-trigger": "" }, Wt.toHandlers(u2.value)), { default: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "default")]), _: 3 }, 16, ["aria-describedby", "data-state", "as", "as-child"])]), _: 3 }, 8, ["reference"]));
} }), H = { slots: { root: "", wrapper: "", labelWrapper: "flex content-center items-center justify-between", label: "block font-medium text-default", container: "mt-1 relative", description: "text-muted", error: "mt-2 text-error", hint: "text-muted", help: "mt-2 text-muted" }, variants: { size: { xs: { root: "text-xs" }, sm: { root: "text-xs" }, md: { root: "text-sm" }, lg: { root: "text-sm" }, xl: { root: "text-base" } }, required: { true: { label: "after:content-['*'] after:ms-0.5 after:text-error" } } }, defaultVariants: { size: "md" } }, K = { __name: "FormField", __ssrInlineRender: true, props: { as: { type: null, required: false }, name: { type: String, required: false }, errorPattern: { type: null, required: false }, label: { type: String, required: false }, description: { type: String, required: false }, help: { type: String, required: false }, error: { type: [String, Boolean], required: false }, hint: { type: String, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, eagerValidation: { type: Boolean, required: false }, validateOnInputDelay: { type: Number, required: false }, class: { type: null, required: false }, ui: { type: null, required: false } }, setup(r2) {
  const i2 = r2, u2 = Wt.useSlots(), d2 = da(), p2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(H), ...(null == (e2 = d2.ui) ? void 0 : e2.formField) || {} })({ size: i2.size, required: i2.required });
  }), c2 = Wt.inject("form-errors", null), f2 = Wt.computed(() => {
    var e2, t2;
    return i2.error || (null == (t2 = null == (e2 = null == c2 ? void 0 : c2.value) ? void 0 : e2.find((e3) => e3.name && (e3.name === i2.name || i2.errorPattern && e3.name.match(i2.errorPattern)))) ? void 0 : t2.message);
  }), m2 = Wt.ref(Wt.useId()), v2 = m2.value;
  return Wt.provide(tg, m2), Wt.provide(eg, Wt.computed(() => ({ error: f2.value, name: i2.name, size: i2.size, eagerValidation: i2.eagerValidation, validateOnInputDelay: i2.validateOnInputDelay, errorPattern: i2.errorPattern, hint: i2.hint, description: i2.description, help: i2.help, ariaId: v2 }))), (o2, l2, a2, n2) => {
    var d3;
    l2(pm.ssrRenderComponent(Wt.unref(_m), Wt.mergeProps({ as: r2.as, class: p2.value.root({ class: [null == (d3 = i2.ui) ? void 0 : d3.root, i2.class] }) }, n2), { default: Wt.withCtx((t2, l3, a3, n3) => {
      var d4, c3, h2, g2, x2, y2, b2, k2, w2, C2, S2, B2, $2, V2, R2, _2;
      if (!l3) return [Wt.createVNode("div", { class: p2.value.wrapper({ class: null == (w2 = i2.ui) ? void 0 : w2.wrapper }) }, [r2.label || u2.label ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: p2.value.labelWrapper({ class: null == (C2 = i2.ui) ? void 0 : C2.labelWrapper }) }, [Wt.createVNode(Wt.unref(N), { for: m2.value, class: p2.value.label({ class: null == (S2 = i2.ui) ? void 0 : S2.label }) }, { default: Wt.withCtx(() => [Wt.renderSlot(o2.$slots, "label", { label: r2.label }, () => [Wt.createTextVNode(Wt.toDisplayString(r2.label), 1)])]), _: 3 }, 8, ["for", "class"]), r2.hint || u2.hint ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, id: `${Wt.unref(v2)}-hint`, class: p2.value.hint({ class: null == (B2 = i2.ui) ? void 0 : B2.hint }) }, [Wt.renderSlot(o2.$slots, "hint", { hint: r2.hint }, () => [Wt.createTextVNode(Wt.toDisplayString(r2.hint), 1)])], 10, ["id"])) : Wt.createCommentVNode("", true)], 2)) : Wt.createCommentVNode("", true), r2.description || u2.description ? (Wt.openBlock(), Wt.createBlock("p", { key: 1, id: `${Wt.unref(v2)}-description`, class: p2.value.description({ class: null == ($2 = i2.ui) ? void 0 : $2.description }) }, [Wt.renderSlot(o2.$slots, "description", { description: r2.description }, () => [Wt.createTextVNode(Wt.toDisplayString(r2.description), 1)])], 10, ["id"])) : Wt.createCommentVNode("", true)], 2), Wt.createVNode("div", { class: [(r2.label || !!u2.label || r2.description || !!u2.description) && p2.value.container({ class: null == (V2 = i2.ui) ? void 0 : V2.container })] }, [Wt.renderSlot(o2.$slots, "default", { error: f2.value }), "string" == typeof f2.value && f2.value || u2.error ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, id: `${Wt.unref(v2)}-error`, class: p2.value.error({ class: null == (R2 = i2.ui) ? void 0 : R2.error }) }, [Wt.renderSlot(o2.$slots, "error", { error: f2.value }, () => [Wt.createTextVNode(Wt.toDisplayString(f2.value), 1)])], 10, ["id"])) : r2.help || u2.help ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: p2.value.help({ class: null == (_2 = i2.ui) ? void 0 : _2.help }) }, [Wt.renderSlot(o2.$slots, "help", { help: r2.help }, () => [Wt.createTextVNode(Wt.toDisplayString(r2.help), 1)])], 2)) : Wt.createCommentVNode("", true)], 2)];
      l3(`<div class="${pm.ssrRenderClass(p2.value.wrapper({ class: null == (d4 = i2.ui) ? void 0 : d4.wrapper }))}"${n3}>`), r2.label || u2.label ? (l3(`<div class="${pm.ssrRenderClass(p2.value.labelWrapper({ class: null == (c3 = i2.ui) ? void 0 : c3.labelWrapper }))}"${n3}>`), l3(pm.ssrRenderComponent(Wt.unref(N), { for: m2.value, class: p2.value.label({ class: null == (h2 = i2.ui) ? void 0 : h2.label }) }, { default: Wt.withCtx((t3, l4, a4, n4) => {
        if (!l4) return [Wt.renderSlot(o2.$slots, "label", { label: r2.label }, () => [Wt.createTextVNode(Wt.toDisplayString(r2.label), 1)])];
        pm.ssrRenderSlot(o2.$slots, "label", { label: r2.label }, () => {
          l4(`${pm.ssrInterpolate(r2.label)}`);
        }, l4, a4, n4);
      }), _: 3 }, a3, n3)), r2.hint || u2.hint ? (l3(`<span${pm.ssrRenderAttr("id", `${Wt.unref(v2)}-hint`)} class="${pm.ssrRenderClass(p2.value.hint({ class: null == (g2 = i2.ui) ? void 0 : g2.hint }))}"${n3}>`), pm.ssrRenderSlot(o2.$slots, "hint", { hint: r2.hint }, () => {
        l3(`${pm.ssrInterpolate(r2.hint)}`);
      }, l3, a3, n3), l3("</span>")) : l3("<!---->"), l3("</div>")) : l3("<!---->"), r2.description || u2.description ? (l3(`<p${pm.ssrRenderAttr("id", `${Wt.unref(v2)}-description`)} class="${pm.ssrRenderClass(p2.value.description({ class: null == (x2 = i2.ui) ? void 0 : x2.description }))}"${n3}>`), pm.ssrRenderSlot(o2.$slots, "description", { description: r2.description }, () => {
        l3(`${pm.ssrInterpolate(r2.description)}`);
      }, l3, a3, n3), l3("</p>")) : l3("<!---->"), l3(`</div><div class="${pm.ssrRenderClass([(r2.label || !!u2.label || r2.description || !!u2.description) && p2.value.container({ class: null == (y2 = i2.ui) ? void 0 : y2.container })])}"${n3}>`), pm.ssrRenderSlot(o2.$slots, "default", { error: f2.value }, null, l3, a3, n3), "string" == typeof f2.value && f2.value || u2.error ? (l3(`<div${pm.ssrRenderAttr("id", `${Wt.unref(v2)}-error`)} class="${pm.ssrRenderClass(p2.value.error({ class: null == (b2 = i2.ui) ? void 0 : b2.error }))}"${n3}>`), pm.ssrRenderSlot(o2.$slots, "error", { error: f2.value }, () => {
        l3(`${pm.ssrInterpolate(f2.value)}`);
      }, l3, a3, n3), l3("</div>")) : r2.help || u2.help ? (l3(`<div class="${pm.ssrRenderClass(p2.value.help({ class: null == (k2 = i2.ui) ? void 0 : k2.help }))}"${n3}>`), pm.ssrRenderSlot(o2.$slots, "help", { help: r2.help }, () => {
        l3(`${pm.ssrInterpolate(r2.help)}`);
      }, l3, a3, n3), l3("</div>")) : l3("<!---->"), l3("</div>");
    }), _: 3 }, a2));
  };
} }, M = K.setup;
K.setup = (t2, r2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue"), M ? M(t2, r2) : void 0;
};
const W = { slots: { content: "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto", arrow: "fill-default", text: "truncate", kbds: "hidden lg:inline-flex items-center shrink-0 gap-0.5 before:content-['\xB7'] before:me-0.5", kbdsSize: "sm" } }, U = { __name: "Tooltip", __ssrInlineRender: true, props: { text: { type: String, required: false }, kbds: { type: Array, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, delayDuration: { type: Number, required: false }, disableHoverableContent: { type: Boolean, required: false }, disableClosingTrigger: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, ignoreNonKeyboardFocus: { type: Boolean, required: false } }, emits: ["update:open"], setup(t2, { emit: r2 }) {
  const a2 = t2, n2 = r2, u2 = Wt.useSlots(), d2 = da(), p2 = F$1(Bm(a2, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "disabled", "ignoreNonKeyboardFocus"), n2), c2 = O$1(Wt.toRef(() => a2.portal)), f2 = Wt.toRef(() => defu(a2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 })), m2 = Wt.toRef(() => a2.arrow), h2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(W), ...(null == (e2 = d2.ui) ? void 0 : e2.tooltip) || {} })({ side: f2.value.side });
  });
  return (r3, o2, l2, n3) => {
    o2(pm.ssrRenderComponent(Wt.unref(O), Wt.mergeProps(Wt.unref(p2), n3), { default: Wt.withCtx(({ open: o3 }, l3, n4, i2) => {
      if (!l3) return [u2.default ? (Wt.openBlock(), Wt.createBlock(Wt.unref(E), Wt.mergeProps({ key: 0 }, r3.$attrs, { "as-child": "", class: a2.class }), { default: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "default", { open: o3 })]), _: 2 }, 1040, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(j), Wt.unref(c2), { default: Wt.withCtx(() => {
        var o4;
        return [Wt.createVNode(Wt.unref(L), Wt.mergeProps(f2.value, { class: h2.value.content({ class: [!u2.default && a2.class, null == (o4 = a2.ui) ? void 0 : o4.content] }) }), { default: Wt.withCtx(() => {
          var o5;
          return [Wt.renderSlot(r3.$slots, "content", {}, () => {
            var r4, o6, l4;
            return [t2.text ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: h2.value.text({ class: null == (r4 = a2.ui) ? void 0 : r4.text }) }, Wt.toDisplayString(t2.text), 3)) : Wt.createCommentVNode("", true), (null == (o6 = t2.kbds) ? void 0 : o6.length) ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: h2.value.kbds({ class: null == (l4 = a2.ui) ? void 0 : l4.kbds }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t2.kbds, (t3, r5) => {
              var o7;
              return Wt.openBlock(), Wt.createBlock(d, Wt.mergeProps({ key: r5, size: (null == (o7 = a2.ui) ? void 0 : o7.kbdsSize) || h2.value.kbdsSize() }, { ref_for: true }, "string" == typeof t3 ? { value: t3 } : t3), null, 16, ["size"]);
            }), 128))], 2)) : Wt.createCommentVNode("", true)];
          }), t2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), Wt.mergeProps({ key: 0 }, m2.value, { class: h2.value.arrow({ class: null == (o5 = a2.ui) ? void 0 : o5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      u2.default ? l3(pm.ssrRenderComponent(Wt.unref(E), Wt.mergeProps(r3.$attrs, { "as-child": "", class: a2.class }), { default: Wt.withCtx((t3, l4, a3, n5) => {
        if (!l4) return [Wt.renderSlot(r3.$slots, "default", { open: o3 })];
        pm.ssrRenderSlot(r3.$slots, "default", { open: o3 }, null, l4, a3, n5);
      }), _: 2 }, n4, i2)) : l3("<!---->"), l3(pm.ssrRenderComponent(Wt.unref(j), Wt.unref(c2), { default: Wt.withCtx((o4, l4, n5, i3) => {
        var d3, p3;
        if (!l4) return [Wt.createVNode(Wt.unref(L), Wt.mergeProps(f2.value, { class: h2.value.content({ class: [!u2.default && a2.class, null == (p3 = a2.ui) ? void 0 : p3.content] }) }), { default: Wt.withCtx(() => {
          var o5;
          return [Wt.renderSlot(r3.$slots, "content", {}, () => {
            var r4, o6, l5;
            return [t2.text ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: h2.value.text({ class: null == (r4 = a2.ui) ? void 0 : r4.text }) }, Wt.toDisplayString(t2.text), 3)) : Wt.createCommentVNode("", true), (null == (o6 = t2.kbds) ? void 0 : o6.length) ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: h2.value.kbds({ class: null == (l5 = a2.ui) ? void 0 : l5.kbds }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t2.kbds, (t3, r5) => {
              var o7;
              return Wt.openBlock(), Wt.createBlock(d, Wt.mergeProps({ key: r5, size: (null == (o7 = a2.ui) ? void 0 : o7.kbdsSize) || h2.value.kbdsSize() }, { ref_for: true }, "string" == typeof t3 ? { value: t3 } : t3), null, 16, ["size"]);
            }), 128))], 2)) : Wt.createCommentVNode("", true)];
          }), t2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), Wt.mergeProps({ key: 0 }, m2.value, { class: h2.value.arrow({ class: null == (o5 = a2.ui) ? void 0 : o5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        l4(pm.ssrRenderComponent(Wt.unref(L), Wt.mergeProps(f2.value, { class: h2.value.content({ class: [!u2.default && a2.class, null == (d3 = a2.ui) ? void 0 : d3.content] }) }), { default: Wt.withCtx((o5, l5, n6, i4) => {
          var u3, d4;
          if (!l5) return [Wt.renderSlot(r3.$slots, "content", {}, () => {
            var r4, o6, l6;
            return [t2.text ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: h2.value.text({ class: null == (r4 = a2.ui) ? void 0 : r4.text }) }, Wt.toDisplayString(t2.text), 3)) : Wt.createCommentVNode("", true), (null == (o6 = t2.kbds) ? void 0 : o6.length) ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: h2.value.kbds({ class: null == (l6 = a2.ui) ? void 0 : l6.kbds }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(t2.kbds, (t3, r5) => {
              var o7;
              return Wt.openBlock(), Wt.createBlock(d, Wt.mergeProps({ key: r5, size: (null == (o7 = a2.ui) ? void 0 : o7.kbdsSize) || h2.value.kbdsSize() }, { ref_for: true }, "string" == typeof t3 ? { value: t3 } : t3), null, 16, ["size"]);
            }), 128))], 2)) : Wt.createCommentVNode("", true)];
          }), t2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), Wt.mergeProps({ key: 0 }, m2.value, { class: h2.value.arrow({ class: null == (d4 = a2.ui) ? void 0 : d4.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          pm.ssrRenderSlot(r3.$slots, "content", {}, () => {
            var r4, o6, u4;
            t2.text ? l5(`<span class="${pm.ssrRenderClass(h2.value.text({ class: null == (r4 = a2.ui) ? void 0 : r4.text }))}"${i4}>${pm.ssrInterpolate(t2.text)}</span>`) : l5("<!---->"), (null == (o6 = t2.kbds) ? void 0 : o6.length) ? (l5(`<span class="${pm.ssrRenderClass(h2.value.kbds({ class: null == (u4 = a2.ui) ? void 0 : u4.kbds }))}"${i4}><!--[-->`), pm.ssrRenderList(t2.kbds, (t3, r5) => {
              var o7;
              l5(pm.ssrRenderComponent(d, Wt.mergeProps({ key: r5, size: (null == (o7 = a2.ui) ? void 0 : o7.kbdsSize) || h2.value.kbdsSize() }, { ref_for: true }, "string" == typeof t3 ? { value: t3 } : t3), null, n6, i4));
            }), l5("<!--]--></span>")) : l5("<!---->");
          }, l5, n6, i4), t2.arrow ? l5(pm.ssrRenderComponent(Wt.unref(P), Wt.mergeProps(m2.value, { class: h2.value.arrow({ class: null == (u3 = a2.ui) ? void 0 : u3.arrow }) }), null, n6, i4)) : l5("<!---->");
        }), _: 2 }, n5, i3));
      }), _: 2 }, n4, i2));
    }), _: 3 }, l2));
  };
} }, Z = U.setup;
U.setup = (t2, r2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue"), Z ? Z(t2, r2) : void 0;
};
const G = Wt.defineComponent({ __name: "TextField", __ssrInlineRender: true, props: { class: { type: String, default: "" }, modelValue: [String, Number, null], type: { type: String, default: "text", validator: (e2) => ["currency", "phone", "email", "number", "password", "strong-password", "search", "text", "url"].includes(e2) }, placeholder: String, color: { type: String, default: "primary" }, variant: { type: String, default: "outline" }, size: { type: String, default: "md" }, min: { type: Number, default: void 0 }, max: { type: Number, default: void 0 }, step: { type: Number, default: 1 }, floatingLabel: { type: Boolean, default: false }, id: String, required: Boolean, errorPattern: RegExp, uiInput: Object, classInput: String, uiInputProps: Object, uiFormField: Object, name: String, label: String, description: String, help: String, error: String, hint: String, eagerValidation: Boolean, validateOnInputDelay: Number, icon: String, validateOn: { type: String, default: "blur" }, isValidate: { type: Boolean, default: true }, isCopy: { type: Boolean, default: false }, requirements: { type: Array, default: () => [{ regex: /.{8,}/, text: "At least 8 characters" }, { regex: /\d/, text: "At least 1 number" }, { regex: /[a-z]/, text: "At least 1 lowercase letter" }, { regex: /[A-Z]/, text: "At least 1 uppercase letter" }], validator: (e2) => e2.every((e3) => e3.regex instanceof RegExp && "string" == typeof e3.text) } }, emits: ["blur", "change", "focus", "update:modelValue"], setup(t2, { expose: r2, emit: o2 }) {
  const l2 = Wt.useAttrs(), a2 = o2, n2 = Wt.ref(null), i2 = Wt.ref(null), p2 = Wt.ref(false), c2 = Wt.ref(false), f2 = Wt.ref(null);
  r2({ inputRef: n2 });
  const m2 = t2, v2 = Wt.computed(() => {
    var e2;
    return { ...l2, ...m2, placeholder: m2.floatingLabel ? "" : m2.placeholder, ui: { base: `${(null == m2 ? void 0 : m2.floatingLabel) ? "peer" : ""} ${(null == (e2 = null == m2 ? void 0 : m2.uiInput) ? void 0 : e2.base) || ""}`, ...m2.uiInput }, class: `${m2.classInput || m2.class || ""} ${l2.class || ""}`.trim(), ..."number" === m2.type ? { min: m2.min, max: m2.max, step: m2.step } : {} };
  }), g2 = Wt.computed(() => {
    const e2 = { name: m2.name, description: m2.description, help: m2.help, hint: m2.hint, size: m2.size, label: (null == m2 ? void 0 : m2.floatingLabel) ? "" : m2.label, required: m2.required, eagerValidation: m2.eagerValidation, validateOnInputDelay: m2.validateOnInputDelay, ui: m2.uiFormField, class: `${m2.class || ""} ${l2.class || ""}`.trim(), error: i2.value || m2.error };
    if (m2.isValidate) {
      if ("phone" === m2.type) return { ...e2, errorPattern: m2.errorPattern || /^[0-9]{8,15}$/ };
      if ("currency" === m2.type) return { ...e2, errorPattern: m2.errorPattern || /^[0-9]+$/ };
      if ("email" === m2.type) return { ...e2, errorPattern: m2.errorPattern || /^[^\s@]+@[^\s@]+\.[^\s@]+$/ };
      if ("url" === m2.type) return { ...e2, errorPattern: m2.errorPattern || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/ };
    }
    return e2;
  }), x2 = Wt.computed(() => {
    if ("phone" === m2.type) return 15;
  }), y2 = Wt.computed(() => "password" === m2.type || "strong-password" === m2.type ? p2.value ? "text" : "password" : ["currency", "phone"].includes(m2.type) ? "text" : m2.type), b2 = Wt.computed(() => {
    var e2;
    if (!["currency", "phone"].includes(m2.type)) return m2.modelValue;
    if (null === m2.modelValue || void 0 === m2.modelValue || "" === m2.modelValue) return "";
    const t3 = String(m2.modelValue).replace(/\D/g, "");
    return 0 === t3.length ? "" : "phone" === m2.type ? (null == (e2 = t3.match(/.{1,4}/g)) ? void 0 : e2.join("-")) || "" : t3.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  });
  function k2(e2) {
    if ("number" === m2.type) {
      if ("" === e2) return a2("update:modelValue", null), void (i2.value = m2.required ? "Field ini wajib diisi" : null);
      if (!S2(e2)) return;
      a2("update:modelValue", Number(e2));
    } else if (["currency", "phone"].includes(m2.type)) {
      const t3 = e2.replace(/\D/g, "");
      t3 !== String(m2.modelValue || "") && a2("update:modelValue", t3), n2.value && (n2.value.value = "phone" === m2.type ? B2(t3) : $2(t3));
    } else a2("update:modelValue", e2);
  }
  function w2(e2) {
    if ("number" === m2.type) {
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End", "."].includes(e2.key) || e2.preventDefault();
    }
    if (["currency", "phone"].includes(m2.type)) {
      const t3 = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"], r3 = (e2.ctrlKey || e2.metaKey) && ["v", "a", "c", "x", "z"].includes(e2.key.toLowerCase());
      /\d/.test(e2.key) || t3.includes(e2.key) || r3 || e2.preventDefault();
    }
  }
  function C2(e2) {
    var t3;
    if (["currency", "phone"].includes(m2.type)) {
      e2.preventDefault();
      const r3 = ((null == (t3 = e2.clipboardData) ? void 0 : t3.getData("text")) || "").replace(/\D/g, "");
      if (n2.value) {
        const e3 = n2.value.selectionStart || 0, t4 = n2.value.selectionEnd || 0, o3 = n2.value.value, l3 = (o3.substring(0, e3) + r3 + o3.substring(t4)).replace(/\D/g, "");
        a2("update:modelValue", l3), n2.value.value = "phone" === m2.type ? B2(l3) : $2(l3), setTimeout(() => {
          var t5;
          const o4 = e3 + r3.length;
          null == (t5 = n2.value) || t5.setSelectionRange(o4, o4);
        });
      }
    }
  }
  function S2(e2) {
    const t3 = Number(e2);
    return isNaN(t3) ? (i2.value = "Harus berupa angka", false) : void 0 !== m2.min && t3 < m2.min ? (i2.value = `Nilai minimal adalah ${m2.min}`, false) : !(void 0 !== m2.max && t3 > m2.max) || (i2.value = `Nilai maksimal adalah ${m2.max}`, false);
  }
  function B2(e2) {
    var t3;
    return e2 && (null == (t3 = e2.match(/.{1,4}/g)) ? void 0 : t3.join("-")) || "";
  }
  function $2(e2) {
    return e2 ? e2.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
  }
  function V2(e2) {
    ["currency", "phone"].includes(m2.type) && n2.value && (n2.value.value = String(m2.modelValue || "").replace(/\D/g, "")), a2("focus", e2);
  }
  function R2(e2) {
    if (["currency", "phone"].includes(m2.type) && n2.value) {
      const e3 = String(m2.modelValue || "").replace(/\D/g, "");
      n2.value.value = "phone" === m2.type ? B2(e3) : $2(e3);
    }
    m2.isValidate && N2(), a2("blur", e2);
  }
  function _2(e2) {
    a2("change", e2);
  }
  function N2(e2) {
    const t3 = e2 != null ? e2 : m2.modelValue, r3 = String(t3 || "").trim();
    if (i2.value = null, m2.required && !r3) return i2.value = m2.error || "Field ini wajib diisi", false;
    switch (m2.type) {
      case "number":
        return S2(r3);
      case "phone":
        if (r3.length < 8 || r3.length > 15) return i2.value = m2.error || "Nomor telepon harus 8-15 digit angka", false;
        break;
      case "currency":
        if (isNaN(Number(r3))) return i2.value = m2.error || "Hanya boleh berisi angka", false;
        break;
      case "email":
        if (r3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r3)) return console.log("Email validation failed for:", r3), i2.value = m2.error || "Format email tidak valid", false;
        break;
      case "url":
        if (r3 && !function(e3, t4 = false) {
          if (!(e3 = e3.trim())) return false;
          if (!e3.startsWith("http://") && !e3.startsWith("https://")) {
            if (t4) return false;
            e3 = "https://" + e3;
          }
          try {
            const t5 = new URL(e3);
            return !(!["http:", "https:"].includes(t5.protocol) || !t5.hostname || !t5.hostname.includes(".") && "localhost" !== t5.hostname);
          } catch {
            return false;
          }
        }(r3)) return i2.value = m2.error || "Format URL tidak valid", false;
    }
    return true;
  }
  function P2() {
    var e2;
    const t3 = (null == (e2 = m2.modelValue) ? void 0 : e2.toString()) || "";
    (void 0).clipboard.writeText(t3).then(() => {
      c2.value = true, f2.value && clearTimeout(f2.value), f2.value = setTimeout(() => {
        c2.value = false;
      }, 2e3);
    }).catch((e3) => {
      console.error("Failed to copy:", e3);
    });
  }
  Wt.watch(() => m2.modelValue, (e2) => {
    m2.isValidate && "input" === m2.validateOn && N2(e2);
  });
  const D2 = Wt.computed(() => {
    return "strong-password" !== m2.type ? [] : (e2 = String(m2.modelValue || ""), m2.requirements.map((t3) => ({ met: t3.regex.test(e2), text: t3.text })));
    var e2;
  }), T2 = Wt.computed(() => D2.value.filter((e2) => e2.met).length), q2 = Wt.computed(() => "strong-password" !== m2.type ? m2.color : 0 === T2.value ? "neutral" : T2.value <= Math.floor(0.25 * m2.requirements.length) ? "error" : T2.value <= Math.floor(0.5 * m2.requirements.length) || T2.value <= Math.floor(0.75 * m2.requirements.length) ? "warning" : "success"), I2 = Wt.computed(() => "strong-password" !== m2.type ? "" : 0 === T2.value ? "Enter a password" : T2.value <= Math.floor(0.25 * m2.requirements.length) ? "Very weak password" : T2.value <= Math.floor(0.5 * m2.requirements.length) ? "Weak password" : T2.value <= Math.floor(0.75 * m2.requirements.length) ? "Medium password" : "Strong password");
  function O2() {
    p2.value = !p2.value;
  }
  return (r3, o3, l3, a3) => {
    const i3 = K, f3 = c, S3 = U, B3 = Rb, $3 = y, N3 = yb;
    o3(pm.ssrRenderComponent(i3, Wt.mergeProps(Wt.unref(g2), a3), Wt.createSlots({ default: Wt.withCtx((o4, l4, a4, i4) => {
      if (!l4) return [Wt.createVNode(f3, Wt.mergeProps({ ref_key: "inputRef", ref: n2, onBlur: R2, onChange: _2, "onUpdate:modelValue": k2, onFocus: V2, onKeypress: w2, onPaste: C2 }, Wt.unref(v2), { type: Wt.unref(y2), modelValue: Wt.unref(b2), maxlength: Wt.unref(x2), color: Wt.unref(q2), "aria-invalid": Wt.unref(T2) < 4 && "strong-password" === t2.type, "aria-describedby": "password-strength" }), Wt.createSlots({ default: Wt.withCtx(() => [m2.floatingLabel ? (Wt.openBlock(), Wt.createBlock("label", { key: 0, for: m2.id, class: [["xs" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "sm" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "md" === m2.size && "peer-placeholder-shown:top-1.5 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-sm text-sm -top-3", "lg" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", "xl" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", (null == m2 ? void 0 : m2.icon) ? "xs" === m2.size ? "px-6" : "sm" === m2.size ? "px-7" : "md" === m2.size || "lg" === m2.size ? "px-8" : "xl" === m2.size ? "px-9" : "px-1.5" : "px-1.5"], "pointer-events-none absolute left-0 text-highlighted font-medium transition-all peer-focus:text-highlighted peer-focus:font-medium peer-placeholder-shown:text-dimmed peer-placeholder-shown:font-normal"] }, [Wt.createVNode("span", { class: "inline-flex bg-default px-1" }, Wt.toDisplayString(m2.placeholder || m2.label), 1)], 10, ["for"])) : Wt.createCommentVNode("", true)]), _: 2 }, [r3.$slots.leading ? { name: "leading", fn: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "leading")]), key: "0" } : void 0, r3.$slots.default ? { name: "default", fn: Wt.withCtx(() => [Wt.renderSlot(r3.$slots, "default")]), key: "1" } : void 0, r3.$slots.trailing || "password" === t2.type || "strong-password" === t2.type || t2.isCopy && t2.modelValue ? { name: "trailing", fn: Wt.withCtx(() => [t2.isCopy && t2.modelValue ? (Wt.openBlock(), Wt.createBlock(S3, { key: 0, text: "Copy to clipboard", class: "search" === t2.type || "number" === t2.type ? "mr-4" : "", popper: { placement: "right" } }, { default: Wt.withCtx(() => [Wt.createVNode(B3, { color: Wt.unref(c2) ? "success" : "neutral", variant: "link", size: "sm", icon: Wt.unref(c2) ? "i-lucide-check" : "i-lucide-copy", "aria-label": "Copy to clipboard", onClick: P2, class: "bg-default" }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.renderSlot(r3.$slots, "trailing"), "password" === t2.type || "strong-password" === t2.type ? (Wt.openBlock(), Wt.createBlock(B3, { key: 1, color: "neutral", variant: "link", size: "sm", icon: Wt.unref(p2) ? "i-lucide-eye-off" : "i-lucide-eye", "aria-label": Wt.unref(p2) ? "Hide password" : "Show password", "aria-pressed": Wt.unref(p2), "aria-controls": "password", onClick: O2 }, null, 8, ["icon", "aria-label", "aria-pressed"])) : Wt.createCommentVNode("", true)]), key: "2" } : void 0]), 1040, ["type", "modelValue", "maxlength", "color", "aria-invalid"]), "strong-password" === t2.type ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "mt-2 space-y-2" }, [Wt.createVNode($3, { color: Wt.unref(q2), indicator: Wt.unref(I2), "model-value": Wt.unref(T2), max: 4, size: "sm" }, null, 8, ["color", "indicator", "model-value"]), Wt.createVNode("p", { id: "password-strength", class: "text-sm font-medium" }, Wt.toDisplayString(Wt.unref(I2)) + ". Must contain: ", 1), Wt.createVNode("ul", { class: "space-y-1", "aria-label": "Password requirements" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Wt.unref(D2), (t3, r4) => (Wt.openBlock(), Wt.createBlock("li", { key: r4, class: ["flex items-center gap-0.5", t3.met ? "text-success" : "text-muted"] }, [Wt.createVNode(N3, { name: t3.met ? "i-lucide-circle-check" : "i-lucide-circle-x", class: "size-4 shrink-0" }, null, 8, ["name"]), Wt.createVNode("span", { class: "text-xs font-light" }, [Wt.createTextVNode(Wt.toDisplayString(t3.text) + " ", 1), Wt.createVNode("span", { class: "sr-only" }, Wt.toDisplayString(t3.met ? " - Requirement met" : " - Requirement not met"), 1)])], 2))), 128))])])) : Wt.createCommentVNode("", true)];
      l4(pm.ssrRenderComponent(f3, Wt.mergeProps({ ref_key: "inputRef", ref: n2, onBlur: R2, onChange: _2, "onUpdate:modelValue": k2, onFocus: V2, onKeypress: w2, onPaste: C2 }, Wt.unref(v2), { type: Wt.unref(y2), modelValue: Wt.unref(b2), maxlength: Wt.unref(x2), color: Wt.unref(q2), "aria-invalid": Wt.unref(T2) < 4 && "strong-password" === t2.type, "aria-describedby": "password-strength" }), Wt.createSlots({ default: Wt.withCtx((t3, r4, o5, l5) => {
        if (!r4) return [m2.floatingLabel ? (Wt.openBlock(), Wt.createBlock("label", { key: 0, for: m2.id, class: [["xs" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "sm" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "md" === m2.size && "peer-placeholder-shown:top-1.5 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-sm text-sm -top-3", "lg" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", "xl" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", (null == m2 ? void 0 : m2.icon) ? "xs" === m2.size ? "px-6" : "sm" === m2.size ? "px-7" : "md" === m2.size || "lg" === m2.size ? "px-8" : "xl" === m2.size ? "px-9" : "px-1.5" : "px-1.5"], "pointer-events-none absolute left-0 text-highlighted font-medium transition-all peer-focus:text-highlighted peer-focus:font-medium peer-placeholder-shown:text-dimmed peer-placeholder-shown:font-normal"] }, [Wt.createVNode("span", { class: "inline-flex bg-default px-1" }, Wt.toDisplayString(m2.placeholder || m2.label), 1)], 10, ["for"])) : Wt.createCommentVNode("", true)];
        m2.floatingLabel ? r4(`<label${pm.ssrRenderAttr("for", m2.id)} class="${pm.ssrRenderClass([["xs" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "sm" === m2.size && "peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5", "md" === m2.size && "peer-placeholder-shown:top-1.5 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-sm text-sm -top-3", "lg" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", "xl" === m2.size && "peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3", (null == m2 ? void 0 : m2.icon) ? "xs" === m2.size ? "px-6" : "sm" === m2.size ? "px-7" : "md" === m2.size || "lg" === m2.size ? "px-8" : "xl" === m2.size ? "px-9" : "px-1.5" : "px-1.5"], "pointer-events-none absolute left-0 text-highlighted font-medium transition-all peer-focus:text-highlighted peer-focus:font-medium peer-placeholder-shown:text-dimmed peer-placeholder-shown:font-normal"])}"${l5}><span class="inline-flex bg-default px-1"${l5}>${pm.ssrInterpolate(m2.placeholder || m2.label)}</span></label>`) : r4("<!---->");
      }), _: 2 }, [r3.$slots.leading ? { name: "leading", fn: Wt.withCtx((t3, o5, l5, a5) => {
        if (!o5) return [Wt.renderSlot(r3.$slots, "leading")];
        pm.ssrRenderSlot(r3.$slots, "leading", {}, null, o5, l5, a5);
      }), key: "0" } : void 0, r3.$slots.default ? { name: "default", fn: Wt.withCtx((t3, o5, l5, a5) => {
        if (!o5) return [Wt.renderSlot(r3.$slots, "default")];
        pm.ssrRenderSlot(r3.$slots, "default", {}, null, o5, l5, a5);
      }), key: "1" } : void 0, r3.$slots.trailing || "password" === t2.type || "strong-password" === t2.type || t2.isCopy && t2.modelValue ? { name: "trailing", fn: Wt.withCtx((o5, l5, a5, n3) => {
        if (!l5) return [t2.isCopy && t2.modelValue ? (Wt.openBlock(), Wt.createBlock(S3, { key: 0, text: "Copy to clipboard", class: "search" === t2.type || "number" === t2.type ? "mr-4" : "", popper: { placement: "right" } }, { default: Wt.withCtx(() => [Wt.createVNode(B3, { color: Wt.unref(c2) ? "success" : "neutral", variant: "link", size: "sm", icon: Wt.unref(c2) ? "i-lucide-check" : "i-lucide-copy", "aria-label": "Copy to clipboard", onClick: P2, class: "bg-default" }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.renderSlot(r3.$slots, "trailing"), "password" === t2.type || "strong-password" === t2.type ? (Wt.openBlock(), Wt.createBlock(B3, { key: 1, color: "neutral", variant: "link", size: "sm", icon: Wt.unref(p2) ? "i-lucide-eye-off" : "i-lucide-eye", "aria-label": Wt.unref(p2) ? "Hide password" : "Show password", "aria-pressed": Wt.unref(p2), "aria-controls": "password", onClick: O2 }, null, 8, ["icon", "aria-label", "aria-pressed"])) : Wt.createCommentVNode("", true)];
        t2.isCopy && t2.modelValue ? l5(pm.ssrRenderComponent(S3, { text: "Copy to clipboard", class: "search" === t2.type || "number" === t2.type ? "mr-4" : "", popper: { placement: "right" } }, { default: Wt.withCtx((t3, r4, o6, l6) => {
          if (!r4) return [Wt.createVNode(B3, { color: Wt.unref(c2) ? "success" : "neutral", variant: "link", size: "sm", icon: Wt.unref(c2) ? "i-lucide-check" : "i-lucide-copy", "aria-label": "Copy to clipboard", onClick: P2, class: "bg-default" }, null, 8, ["color", "icon"])];
          r4(pm.ssrRenderComponent(B3, { color: Wt.unref(c2) ? "success" : "neutral", variant: "link", size: "sm", icon: Wt.unref(c2) ? "i-lucide-check" : "i-lucide-copy", "aria-label": "Copy to clipboard", onClick: P2, class: "bg-default" }, null, o6, l6));
        }), _: 1 }, a5, n3)) : l5("<!---->"), pm.ssrRenderSlot(r3.$slots, "trailing", {}, null, l5, a5, n3), "password" === t2.type || "strong-password" === t2.type ? l5(pm.ssrRenderComponent(B3, { color: "neutral", variant: "link", size: "sm", icon: Wt.unref(p2) ? "i-lucide-eye-off" : "i-lucide-eye", "aria-label": Wt.unref(p2) ? "Hide password" : "Show password", "aria-pressed": Wt.unref(p2), "aria-controls": "password", onClick: O2 }, null, a5, n3)) : l5("<!---->");
      }), key: "2" } : void 0]), a4, i4)), "strong-password" === t2.type ? (l4(`<div class="mt-2 space-y-2"${i4}>`), l4(pm.ssrRenderComponent($3, { color: Wt.unref(q2), indicator: Wt.unref(I2), "model-value": Wt.unref(T2), max: 4, size: "sm" }, null, a4, i4)), l4(`<p id="password-strength" class="text-sm font-medium"${i4}>${pm.ssrInterpolate(Wt.unref(I2))}. Must contain: </p><ul class="space-y-1" aria-label="Password requirements"${i4}><!--[-->`), pm.ssrRenderList(Wt.unref(D2), (e2, t3) => {
        l4(`<li class="${pm.ssrRenderClass([e2.met ? "text-success" : "text-muted", "flex items-center gap-0.5"])}"${i4}>`), l4(pm.ssrRenderComponent(N3, { name: e2.met ? "i-lucide-circle-check" : "i-lucide-circle-x", class: "size-4 shrink-0" }, null, a4, i4)), l4(`<span class="text-xs font-light"${i4}>${pm.ssrInterpolate(e2.text)} <span class="sr-only"${i4}>${pm.ssrInterpolate(e2.met ? " - Requirement met" : " - Requirement not met")}</span></span></li>`);
      }), l4("<!--]--></ul></div>")) : l4("<!---->");
    }), _: 2 }, [r3.$slots.label ? { name: "label", fn: Wt.withCtx(({ label: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "label", { label: t3 })];
      pm.ssrRenderSlot(r3.$slots, "label", { label: t3 }, null, o4, l4, a4);
    }), key: "0" } : void 0, r3.$slots.hint ? { name: "hint", fn: Wt.withCtx(({ hint: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "hint", { hint: t3 })];
      pm.ssrRenderSlot(r3.$slots, "hint", { hint: t3 }, null, o4, l4, a4);
    }), key: "1" } : void 0, r3.$slots.description ? { name: "description", fn: Wt.withCtx(({ description: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "description", { description: t3 })];
      pm.ssrRenderSlot(r3.$slots, "description", { description: t3 }, null, o4, l4, a4);
    }), key: "2" } : void 0, r3.$slots.help ? { name: "help", fn: Wt.withCtx(({ help: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "help", { help: t3 })];
      pm.ssrRenderSlot(r3.$slots, "help", { help: t3 }, null, o4, l4, a4);
    }), key: "3" } : void 0, r3.$slots.error ? { name: "error", fn: Wt.withCtx(({ error: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "error", { error: t3 })];
      pm.ssrRenderSlot(r3.$slots, "error", { error: t3 }, null, o4, l4, a4);
    }), key: "4" } : void 0, r3.$slots.default ? { name: "default", fn: Wt.withCtx(({ error: t3 }, o4, l4, a4) => {
      if (!o4) return [Wt.renderSlot(r3.$slots, "default", { error: t3 })];
      pm.ssrRenderSlot(r3.$slots, "default", { error: t3 }, null, o4, l4, a4);
    }), key: "5" } : void 0]), l3));
  };
} }), X = G.setup;
G.setup = (t2, r2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/ui/TextField.vue"), X ? X(t2, r2) : void 0;
};
const Y = Object.freeze(Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, { value: "Module" }));

export { Y as T, G as _, N as a };
//# sourceMappingURL=TextField-DvcL8FOr.mjs.map

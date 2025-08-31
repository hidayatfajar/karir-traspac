import { v as Wt, c as Fs, s as pm, _ as Ob, d as _b, b as gb, u as da, a as Tm, r as Bm, t as Ky, P as _m, g as fg } from './server.mjs';
import { u } from './Badge-DbT1gGUe.mjs';
import { c } from './index-yQmnmHk3.mjs';
import { l } from './useLocale-DRieL7bI.mjs';
import { F as F$1, C, N as N$1, T as T$1, j } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { i } from './isValueEqualOrExist-DXup0XOt.mjs';
import { e } from './useDirection-D0ypspbM.mjs';
import { r } from './useArrowNavigation-Cic7byI7.mjs';
import { u as u$1, c as c$1 } from './Presence-D-YonBfP.mjs';
import { j as isEqual } from '../_/nitro.mjs';
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
import './nullish-aV-w2MPu.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';

function I({ type: e2, defaultValue: a2, modelValue: t2 }) {
  return e2 || function({ type: e3, defaultValue: a3, modelValue: t3 }) {
    const n2 = t3 || a3;
    return void 0 !== t3 || void 0 !== a3 ? Array.isArray(n2) ? "multiple" : "single" : e3 != null ? e3 : "single";
  }({ type: e2, defaultValue: a2, modelValue: t2 });
}
function R({ type: e2, defaultValue: a2 }) {
  return void 0 !== a2 ? a2 : "single" === e2 ? void 0 : [];
}
const [B, $] = T$1("AccordionRoot"), _ = Wt.defineComponent({ __name: "AccordionRoot", props: { collapsible: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dir: {}, orientation: { default: "vertical" }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {}, type: {}, modelValue: {}, defaultValue: {} }, emits: ["update:modelValue"], setup(t2, { emit: n2 }) {
  const l2 = t2, i2 = n2, { dir: o2, disabled: s2, unmountOnHide: r2 } = Wt.toRefs(l2), d2 = e(o2), { modelValue: u2, changeModelValue: c2, isSingle: m2 } = function(a2, t3) {
    const n3 = Wt.computed(() => I(a2)), l3 = C(a2, "modelValue", t3, { defaultValue: R(a2), passive: void 0 === a2.modelValue, deep: true }), i3 = Wt.computed(() => "single" === n3.value);
    return { modelValue: l3, changeModelValue: function(e2) {
      if ("single" === n3.value) l3.value = isEqual(e2, l3.value) ? void 0 : e2;
      else {
        const a3 = Array.isArray(l3.value) ? [...l3.value || []] : [l3.value].filter(Boolean);
        if (i(a3, e2)) {
          const t4 = a3.findIndex((a4) => isEqual(a4, e2));
          a3.splice(t4, 1);
        } else a3.push(e2);
        l3.value = a3;
      }
    }, isSingle: i3 };
  }(l2, i2), { forwardRef: p2, currentElement: v2 } = N$1();
  return $({ disabled: s2, direction: d2, orientation: l2.orientation, parentElement: v2, isSingle: m2, collapsible: l2.collapsible, modelValue: u2, changeModelValue: c2, unmountOnHide: r2 }), (t3, n3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref: Wt.unref(p2), "as-child": t3.asChild, as: t3.as }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", { modelValue: Wt.unref(u2) })]), _: 3 }, 8, ["as-child", "as"]));
} }), [V, N] = T$1("CollapsibleRoot"), D = Wt.defineComponent({ __name: "CollapsibleRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, disabled: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, emits: ["update:open"], setup(t2, { expose: n2, emit: l2 }) {
  const i2 = t2, o2 = C(i2, "open", l2, { defaultValue: i2.defaultOpen, passive: void 0 === i2.open }), { disabled: s2, unmountOnHide: r2 } = Wt.toRefs(i2);
  return N({ contentId: "", disabled: s2, open: o2, unmountOnHide: r2, onOpenToggle: () => {
    s2.value || (o2.value = !o2.value);
  } }), n2({ open: o2 }), N$1(), (t3, n3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { as: t3.as, "as-child": i2.asChild, "data-state": Wt.unref(o2) ? "open" : "closed", "data-disabled": Wt.unref(s2) ? "" : void 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", { open: Wt.unref(o2) })]), _: 3 }, 8, ["as", "as-child", "data-state", "data-disabled"]));
} }), [q, A] = T$1("AccordionItem"), T = Wt.defineComponent({ __name: "AccordionItem", props: { disabled: { type: Boolean }, value: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(a2, { expose: t2 }) {
  const n2 = a2, l2 = B(), i2 = Wt.computed(() => l2.isSingle.value ? n2.value === l2.modelValue.value : Array.isArray(l2.modelValue.value) && l2.modelValue.value.includes(n2.value)), o2 = Wt.computed(() => l2.disabled.value || n2.disabled), s2 = Wt.computed(() => o2.value ? "" : void 0), r2 = Wt.computed(() => i2.value ? "open" : "closed");
  t2({ open: i2, dataDisabled: s2 });
  const { currentRef: d2, currentElement: u2 } = N$1();
  function c2(e2) {
    var _a;
    var a3;
    const t3 = e2.target;
    if (-1 === Array.from((_a = null == (a3 = l2.parentElement.value) ? void 0 : a3.querySelectorAll("[data-reka-collection-item]")) != null ? _a : []).findIndex((e3) => e3 === t3)) return null;
    r(e2, u2.value, l2.parentElement.value, { arrowKeyOptions: l2.orientation, dir: l2.direction.value, focus: true });
  }
  return A({ open: i2, dataState: r2, disabled: o2, dataDisabled: s2, triggerId: "", currentRef: d2, currentElement: u2, value: Wt.computed(() => n2.value) }), (a3, t3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { "data-orientation": Wt.unref(l2).orientation, "data-disabled": s2.value, "data-state": r2.value, disabled: o2.value, open: i2.value, as: n2.as, "as-child": n2.asChild, "unmount-on-hide": Wt.unref(l2).unmountOnHide.value, onKeydown: Wt.withKeys(c2, ["up", "down", "left", "right", "home", "end"]) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default", { open: i2.value })]), _: 3 }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child", "unmount-on-hide"]));
} }), O = Wt.defineComponent({ inheritAttrs: false, __name: "CollapsibleContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["contentFound"], setup(t2, { emit: n2 }) {
  const l2 = t2, i2 = n2, o2 = V();
  o2.contentId || (o2.contentId = u$1(void 0, "reka-collapsible-content"));
  const s2 = Wt.ref(), { forwardRef: r2, currentElement: d2 } = N$1(), u2 = Wt.ref(0), c2 = Wt.ref(0), m2 = Wt.computed(() => o2.open.value), p2 = Wt.ref(m2.value), v2 = Wt.ref();
  Wt.watch(() => {
    var e2;
    return [m2.value, null == (e2 = s2.value) ? void 0 : e2.present];
  }, async () => {
    await Wt.nextTick();
    const a2 = d2.value;
    if (!a2) return;
    v2.value = v2.value || { transitionDuration: a2.style.transitionDuration, animationName: a2.style.animationName }, a2.style.transitionDuration = "0s", a2.style.animationName = "none";
    const t3 = a2.getBoundingClientRect();
    c2.value = t3.height, u2.value = t3.width, p2.value || (a2.style.transitionDuration = v2.value.transitionDuration, a2.style.animationName = v2.value.animationName);
  }, { immediate: true });
  const x2 = Wt.computed(() => p2.value && o2.open.value);
  return j(d2, "beforematch", (e2) => {
    requestAnimationFrame(() => {
      o2.onOpenToggle(), i2("contentFound");
    });
  }), (t3, n3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(c$1), { ref_key: "presentRef", ref: s2, present: t3.forceMount || Wt.unref(o2).open.value, "force-mount": true }, { default: Wt.withCtx(({ present: n4 }) => {
    var i3;
    return [Wt.createVNode(Wt.unref(_m), Wt.mergeProps(t3.$attrs, { id: Wt.unref(o2).contentId, ref: Wt.unref(r2), "as-child": l2.asChild, as: t3.as, hidden: n4 ? void 0 : Wt.unref(o2).unmountOnHide.value ? "" : "until-found", "data-state": x2.value ? void 0 : Wt.unref(o2).open.value ? "open" : "closed", "data-disabled": (null == (i3 = Wt.unref(o2).disabled) ? void 0 : i3.value) ? "" : void 0, style: { "--reka-collapsible-content-height": `${c2.value}px`, "--reka-collapsible-content-width": `${u2.value}px` } }), { default: Wt.withCtx(() => [!Wt.unref(o2).unmountOnHide.value || n4 ? Wt.renderSlot(t3.$slots, "default", { key: 0 }) : Wt.createCommentVNode("", true)]), _: 2 }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])];
  }), _: 3 }, 8, ["present"]));
} }), P = Wt.defineComponent({ __name: "AccordionContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2, n2 = B(), l2 = q();
  return N$1(), (a3, i2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(O), { role: "region", "as-child": t2.asChild, as: a3.as, "force-mount": t2.forceMount, "aria-labelledby": Wt.unref(l2).triggerId, "data-state": Wt.unref(l2).dataState.value, "data-disabled": Wt.unref(l2).dataDisabled.value, "data-orientation": Wt.unref(n2).orientation, style: { "--reka-accordion-content-width": "var(--reka-collapsible-content-width)", "--reka-accordion-content-height": "var(--reka-collapsible-content-height)" }, onContentFound: i2[0] || (i2[0] = (a4) => Wt.unref(n2).changeModelValue(Wt.unref(l2).value.value)) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
} }), M = Wt.defineComponent({ __name: "AccordionHeader", props: { asChild: { type: Boolean }, as: { default: "h3" } }, setup(t2) {
  const n2 = t2, l2 = B(), i2 = q();
  return N$1(), (t3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { as: n2.as, "as-child": n2.asChild, "data-orientation": Wt.unref(l2).orientation, "data-state": Wt.unref(i2).dataState.value, "data-disabled": Wt.unref(i2).dataDisabled.value }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
} }), z = Wt.defineComponent({ __name: "CollapsibleTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2;
  N$1();
  const l2 = V();
  return (t3, i2) => {
    var o2, s2;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { type: "button" === t3.as ? "button" : void 0, as: t3.as, "as-child": n2.asChild, "aria-controls": Wt.unref(l2).contentId, "aria-expanded": Wt.unref(l2).open.value, "data-state": Wt.unref(l2).open.value ? "open" : "closed", "data-disabled": (null == (o2 = Wt.unref(l2).disabled) ? void 0 : o2.value) ? "" : void 0, disabled: null == (s2 = Wt.unref(l2).disabled) ? void 0 : s2.value, onClick: Wt.unref(l2).onOpenToggle }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
  };
} }), E = Wt.defineComponent({ __name: "AccordionTrigger", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2, n2 = B(), l2 = q();
  function i2() {
    const e2 = n2.isSingle.value && l2.open.value && !n2.collapsible;
    l2.disabled.value || e2 || n2.changeModelValue(l2.value.value);
  }
  return l2.triggerId || (l2.triggerId = u$1(void 0, "reka-accordion-trigger")), (a3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(z), { id: Wt.unref(l2).triggerId, ref: Wt.unref(l2).currentRef, "data-reka-collection-item": "", as: t2.as, "as-child": t2.asChild, "aria-disabled": Wt.unref(l2).disabled.value || void 0, "aria-expanded": Wt.unref(l2).open.value || false, "data-disabled": Wt.unref(l2).dataDisabled.value, "data-orientation": Wt.unref(n2).orientation, "data-state": Wt.unref(l2).dataState.value, disabled: Wt.unref(l2).disabled.value, onClick: i2 }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
} });
function L(e2) {
  return function(e3) {
    return "[object Object]" === Object.prototype.toString.call(e3);
  }(e2) || Array.isArray(e2);
}
function F(e2, a2) {
  const t2 = Object.keys(e2), n2 = Object.keys(a2);
  if (t2.length !== n2.length) return false;
  return JSON.stringify(Object.keys(e2.breakpoints || {})) === JSON.stringify(Object.keys(a2.breakpoints || {})) && t2.every((t3) => {
    const n3 = e2[t3], l2 = a2[t3];
    return "function" == typeof n3 ? `${n3}` == `${l2}` : L(n3) && L(l2) ? F(n3, l2) : n3 === l2;
  });
}
function K(e2) {
  return e2.concat().sort((e3, a2) => e3.name > a2.name ? 1 : -1).map((e3) => e3.options);
}
function H(a2 = {}, t2 = []) {
  const n2 = Wt.isRef(a2), l2 = Wt.isRef(t2);
  let i2 = n2 ? a2.value : a2, o2 = l2 ? t2.value : t2;
  const s2 = Wt.shallowRef(), r2 = Wt.shallowRef();
  function d2() {
    r2.value && r2.value.reInit(i2, o2);
  }
  return n2 && Wt.watch(a2, (e2) => {
    F(i2, e2) || (i2 = e2, d2());
  }), l2 && Wt.watch(t2, (e2) => {
    (function(e3, a3) {
      if (e3.length !== a3.length) return false;
      const t3 = K(e3), n3 = K(a3);
      return t3.every((e4, a4) => F(e4, n3[a4]));
    })(o2, e2) || (o2 = e2, d2());
  }), [s2, r2];
}
H.globalOptions = void 0;
const U = { slots: { root: "relative focus:outline-none", viewport: "overflow-hidden", container: "flex items-start", item: "min-w-0 shrink-0 basis-full", controls: "", arrows: "", prev: "absolute rounded-full", next: "absolute rounded-full", dots: "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3", dot: ["cursor-pointer size-3 bg-accented rounded-full", "transition"] }, variants: { orientation: { vertical: { container: "flex-col -mt-4", item: "pt-4", prev: "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90", next: "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90" }, horizontal: { container: "flex-row -ms-4", item: "ps-4", prev: "start-4 sm:-start-12 top-1/2 -translate-y-1/2", next: "end-4 sm:-end-12 top-1/2 -translate-y-1/2" } }, active: { true: { dot: "data-[state=active]:bg-inverted" } } } }, J = { __name: "Carousel", __ssrInlineRender: true, props: { as: { type: null, required: false }, prev: { type: Object, required: false }, prevIcon: { type: String, required: false }, next: { type: Object, required: false }, nextIcon: { type: String, required: false }, arrows: { type: Boolean, required: false, default: false }, dots: { type: Boolean, required: false, default: false }, orientation: { type: null, required: false, default: "horizontal" }, items: { type: Array, required: false }, autoplay: { type: [Boolean, Object], required: false, default: false }, autoScroll: { type: [Boolean, Object], required: false, default: false }, autoHeight: { type: [Boolean, Object], required: false, default: false }, classNames: { type: [Boolean, Object], required: false, default: false }, fade: { type: [Boolean, Object], required: false, default: false }, wheelGestures: { type: Boolean, required: false, skipCheck: true, default: false }, class: { type: null, required: false }, ui: { type: null, required: false }, align: { type: [String, Function], required: false, default: "center" }, containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" }, slidesToScroll: { type: [String, Number], required: false, default: 1 }, dragFree: { type: Boolean, required: false, default: false }, dragThreshold: { type: Number, required: false, default: 10 }, inViewThreshold: { type: null, required: false, default: 0 }, loop: { type: Boolean, required: false, default: false }, skipSnaps: { type: Boolean, required: false, default: false }, duration: { type: Number, required: false, default: 25 }, startIndex: { type: Number, required: false, default: 0 }, watchDrag: { type: [Boolean, Function], required: false, default: true }, watchResize: { type: [Boolean, Function], required: false, default: true }, watchSlides: { type: [Boolean, Function], required: false, default: true }, watchFocus: { type: [Boolean, Function], required: false, default: true }, active: { type: Boolean, required: false, default: true }, breakpoints: { type: Object, required: false, default: () => ({}) } }, emits: ["select"], setup(r2, { expose: d2, emit: u2 }) {
  const c2 = r2, { dir: m2, t: x2 } = l(), g2 = da(), b2 = Tm(Bm(c2, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus")), f2 = Wt.computed(() => c2.prevIcon || ("rtl" === m2.value ? g2.ui.icons.arrowRight : g2.ui.icons.arrowLeft)), y2 = Wt.computed(() => c2.nextIcon || ("rtl" === m2.value ? g2.ui.icons.arrowLeft : g2.ui.icons.arrowRight)), h2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(U), ...(null == (e2 = g2.ui) ? void 0 : e2.carousel) || {} })({ orientation: c2.orientation });
  }), k2 = Wt.computed(() => ({ ...c2.fade ? { align: "center", containScroll: false } : {}, ...b2.value, axis: "horizontal" === c2.orientation ? "x" : "y", direction: "rtl" === m2.value ? "rtl" : "ltr" })), w2 = c(async () => {
    const e2 = [];
    if (c2.autoplay) {
      const a2 = await import('./embla-carousel-autoplay.esm-BBRRh7my.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof c2.autoplay ? {} : c2.autoplay));
    }
    if (c2.autoScroll) {
      const a2 = await import('./embla-carousel-auto-scroll.esm-D6K5luu_.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof c2.autoScroll ? {} : c2.autoScroll));
    }
    if (c2.autoHeight) {
      const a2 = await import('./embla-carousel-auto-height.esm-D2AJx4eL.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof c2.autoHeight ? {} : c2.autoHeight));
    }
    if (c2.classNames) {
      const a2 = await import('./embla-carousel-class-names.esm-DZ_9LAlh.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof c2.classNames ? {} : c2.classNames));
    }
    if (c2.fade) {
      const a2 = await import('./embla-carousel-fade.esm-Ct6_2HCn.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof c2.fade ? {} : c2.fade));
    }
    if (c2.wheelGestures) {
      const { WheelGesturesPlugin: a2 } = await import('./embla-carousel-wheel-gestures.esm-BvaQ4ZQa.mjs');
      e2.push(a2("boolean" == typeof c2.wheelGestures ? {} : c2.wheelGestures));
    }
    return e2;
  }), [C2, S2] = H(k2.value, w2.value);
  function j2() {
    var e2;
    null == (e2 = S2.value) || e2.scrollPrev();
  }
  function I2() {
    var e2;
    null == (e2 = S2.value) || e2.scrollNext();
  }
  function R2(e2) {
    const a2 = "vertical" === c2.orientation ? "ArrowUp" : "ArrowLeft", t2 = "vertical" === c2.orientation ? "ArrowDown" : "ArrowRight";
    if (e2.key === a2) return e2.preventDefault(), void j2();
    e2.key === t2 && (e2.preventDefault(), I2());
  }
  Wt.watch([k2, w2], () => {
    var e2;
    null == (e2 = S2.value) || e2.reInit(k2.value, w2.value);
  });
  const B2 = Wt.ref(false), $2 = Wt.ref(false), _2 = Wt.ref(0), V2 = Wt.ref([]);
  function N2(e2) {
    return "object" == typeof e2 && null !== e2;
  }
  return d2({ emblaRef: C2, emblaApi: S2 }), (t2, n2, l2, i2) => {
    var d3;
    n2(pm.ssrRenderComponent(Wt.unref(_m), Wt.mergeProps({ as: r2.as, role: "region", "aria-roledescription": "carousel", tabindex: "0", class: h2.value.root({ class: [null == (d3 = c2.ui) ? void 0 : d3.root, c2.class] }), onKeydown: R2 }, i2), { default: Wt.withCtx((a2, n3, l3, i3) => {
      var d4, u3, m3, p2, v2, g3, b3, k3, w3, R3, D2, q2, A2, T2;
      if (!n3) return [Wt.createVNode("div", { ref_key: "emblaRef", ref: C2, class: h2.value.viewport({ class: null == (k3 = c2.ui) ? void 0 : k3.viewport }) }, [Wt.createVNode("div", { class: h2.value.container({ class: null == (w3 = c2.ui) ? void 0 : w3.container }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r2.items, (a3, n4) => {
        var l4, i4;
        return Wt.openBlock(), Wt.createBlock("div", { key: n4, role: "group", "aria-roledescription": "slide", class: h2.value.item({ class: [null == (l4 = c2.ui) ? void 0 : l4.item, N2(a3) && (null == (i4 = a3.ui) ? void 0 : i4.item), N2(a3) && a3.class] }) }, [Wt.renderSlot(t2.$slots, "default", { item: a3, index: n4 })], 2);
      }), 128))], 2)], 2), r2.arrows || r2.dots ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: h2.value.controls({ class: null == (R3 = c2.ui) ? void 0 : R3.controls }) }, [r2.arrows ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: h2.value.arrows({ class: null == (D2 = c2.ui) ? void 0 : D2.arrows }) }, [Wt.createVNode(Ob, Wt.mergeProps({ disabled: !$2.value, icon: f2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(x2)("carousel.prev") }, "object" == typeof r2.prev ? r2.prev : void 0, { class: h2.value.prev({ class: null == (q2 = c2.ui) ? void 0 : q2.prev }), onClick: j2 }), null, 16, ["disabled", "icon", "aria-label", "class"]), Wt.createVNode(Ob, Wt.mergeProps({ disabled: !B2.value, icon: y2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(x2)("carousel.next") }, "object" == typeof r2.next ? r2.next : void 0, { class: h2.value.next({ class: null == (A2 = c2.ui) ? void 0 : A2.next }), onClick: I2 }), null, 16, ["disabled", "icon", "aria-label", "class"])], 2)) : Wt.createCommentVNode("", true), r2.dots ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: h2.value.dots({ class: null == (T2 = c2.ui) ? void 0 : T2.dots }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(V2.value, (a3, t3) => {
        var n4;
        return Wt.openBlock(), Wt.createBlock("button", { key: t3, "aria-label": Wt.unref(x2)("carousel.goto", { slide: t3 + 1 }), class: h2.value.dot({ class: null == (n4 = c2.ui) ? void 0 : n4.dot, active: _2.value === t3 }), "data-state": _2.value === t3 ? "active" : void 0, onClick: (e2) => function(e3) {
          var a4;
          null == (a4 = S2.value) || a4.scrollTo(e3);
        }(t3) }, null, 10, ["aria-label", "data-state", "onClick"]);
      }), 128))], 2)) : Wt.createCommentVNode("", true)], 2)) : Wt.createCommentVNode("", true)];
      n3(`<div class="${pm.ssrRenderClass(h2.value.viewport({ class: null == (d4 = c2.ui) ? void 0 : d4.viewport }))}"${i3}><div class="${pm.ssrRenderClass(h2.value.container({ class: null == (u3 = c2.ui) ? void 0 : u3.container }))}"${i3}><!--[-->`), pm.ssrRenderList(r2.items, (e2, a3) => {
        var s2, r3;
        n3(`<div role="group" aria-roledescription="slide" class="${pm.ssrRenderClass(h2.value.item({ class: [null == (s2 = c2.ui) ? void 0 : s2.item, N2(e2) && (null == (r3 = e2.ui) ? void 0 : r3.item), N2(e2) && e2.class] }))}"${i3}>`), pm.ssrRenderSlot(t2.$slots, "default", { item: e2, index: a3 }, null, n3, l3, i3), n3("</div>");
      }), n3("<!--]--></div></div>"), r2.arrows || r2.dots ? (n3(`<div class="${pm.ssrRenderClass(h2.value.controls({ class: null == (m3 = c2.ui) ? void 0 : m3.controls }))}"${i3}>`), r2.arrows ? (n3(`<div class="${pm.ssrRenderClass(h2.value.arrows({ class: null == (p2 = c2.ui) ? void 0 : p2.arrows }))}"${i3}>`), n3(pm.ssrRenderComponent(Ob, Wt.mergeProps({ disabled: !$2.value, icon: f2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(x2)("carousel.prev") }, "object" == typeof r2.prev ? r2.prev : void 0, { class: h2.value.prev({ class: null == (v2 = c2.ui) ? void 0 : v2.prev }), onClick: j2 }), null, l3, i3)), n3(pm.ssrRenderComponent(Ob, Wt.mergeProps({ disabled: !B2.value, icon: y2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(x2)("carousel.next") }, "object" == typeof r2.next ? r2.next : void 0, { class: h2.value.next({ class: null == (g3 = c2.ui) ? void 0 : g3.next }), onClick: I2 }), null, l3, i3)), n3("</div>")) : n3("<!---->"), r2.dots ? (n3(`<div class="${pm.ssrRenderClass(h2.value.dots({ class: null == (b3 = c2.ui) ? void 0 : b3.dots }))}"${i3}><!--[-->`), pm.ssrRenderList(V2.value, (a3, t3) => {
        var l4;
        n3(`<button${pm.ssrRenderAttr("aria-label", Wt.unref(x2)("carousel.goto", { slide: t3 + 1 }))} class="${pm.ssrRenderClass(h2.value.dot({ class: null == (l4 = c2.ui) ? void 0 : l4.dot, active: _2.value === t3 }))}"${pm.ssrRenderAttr("data-state", _2.value === t3 ? "active" : void 0)}${i3}></button>`);
      }), n3("<!--]--></div>")) : n3("<!---->"), n3("</div>")) : n3("<!---->");
    }), _: 3 }, l2));
  };
} }, G = J.setup;
J.setup = (a2, t2) => {
  const n2 = Wt.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue"), G ? G(a2, t2) : void 0;
};
const X = { slots: { root: "w-full", item: "border-b border-default last:border-b-0", header: "flex", trigger: "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0", content: "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none", body: "text-sm pb-3.5", leadingIcon: "shrink-0 size-5", trailingIcon: "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200", label: "text-start break-words" }, variants: { disabled: { true: { trigger: "cursor-not-allowed opacity-75" } } } }, Q = { __name: "Accordion", __ssrInlineRender: true, props: { as: { type: null, required: false }, items: { type: Array, required: false }, trailingIcon: { type: String, required: false }, labelKey: { type: String, required: false, default: "label" }, class: { type: null, required: false }, ui: { type: null, required: false }, collapsible: { type: Boolean, required: false, default: true }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, type: { type: String, required: false, default: "single" }, disabled: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: ["update:modelValue"], setup(a2, { emit: n2 }) {
  const s2 = a2, u2 = n2, c2 = Wt.useSlots(), m2 = da(), p2 = F$1(Bm(s2, "as", "collapsible", "defaultValue", "disabled", "modelValue", "type", "unmountOnHide"), u2), v2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(X), ...(null == (e2 = m2.ui) ? void 0 : e2.accordion) || {} })({ disabled: s2.disabled });
  });
  return (t2, n3, l2, i2) => {
    var u3;
    n3(pm.ssrRenderComponent(Wt.unref(_), Wt.mergeProps(Wt.unref(p2), { class: v2.value.root({ class: [null == (u3 = s2.ui) ? void 0 : u3.root, s2.class] }) }, i2), { default: Wt.withCtx((n4, l3, i3, u4) => {
      if (!l3) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(s2.items, (n5, l4) => {
        var i4, o2;
        return Wt.openBlock(), Wt.createBlock(Wt.unref(T), { key: l4, value: n5.value || String(l4), disabled: n5.disabled, class: v2.value.item({ class: [null == (i4 = s2.ui) ? void 0 : i4.item, null == (o2 = n5.ui) ? void 0 : o2.item, n5.class] }) }, { default: Wt.withCtx(({ open: i5 }) => {
          var o3, u5, p3, x2;
          return [Wt.createVNode(Wt.unref(M), { as: "div", class: v2.value.header({ class: [null == (o3 = s2.ui) ? void 0 : o3.header, null == (u5 = n5.ui) ? void 0 : u5.header] }) }, { default: Wt.withCtx(() => {
            var o4, u6;
            return [Wt.createVNode(Wt.unref(E), { class: v2.value.trigger({ class: [null == (o4 = s2.ui) ? void 0 : o4.trigger, null == (u6 = n5.ui) ? void 0 : u6.trigger], disabled: n5.disabled }) }, { default: Wt.withCtx(() => {
              var o5, u7;
              return [Wt.renderSlot(t2.$slots, "leading", { item: n5, index: l4, open: i5 }, () => {
                var a3, t3;
                return [n5.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: n5.icon, class: v2.value.leadingIcon({ class: [null == (a3 = s2.ui) ? void 0 : a3.leadingIcon, null == (t3 = null == n5 ? void 0 : n5.ui) ? void 0 : t3.leadingIcon] }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
              }), Wt.unref(fg)(n5, s2.labelKey) || c2.default ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: v2.value.label({ class: [null == (o5 = s2.ui) ? void 0 : o5.label, null == (u7 = n5.ui) ? void 0 : u7.label] }) }, [Wt.renderSlot(t2.$slots, "default", { item: n5, index: l4, open: i5 }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(n5, s2.labelKey)), 1)])], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "trailing", { item: n5, index: l4, open: i5 }, () => {
                var t3, l5;
                return [Wt.createVNode(gb, { name: n5.trailingIcon || a2.trailingIcon || Wt.unref(m2).ui.icons.chevronDown, class: v2.value.trailingIcon({ class: [null == (t3 = s2.ui) ? void 0 : t3.trailingIcon, null == (l5 = n5.ui) ? void 0 : l5.trailingIcon] }) }, null, 8, ["name", "class"])];
              })];
            }), _: 2 }, 1032, ["class"])];
          }), _: 2 }, 1032, ["class"]), n5.content || c2.content || n5.slot && c2[n5.slot] || c2.body || n5.slot && c2[`${n5.slot}-body`] ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), { key: 0, class: v2.value.content({ class: [null == (p3 = s2.ui) ? void 0 : p3.content, null == (x2 = n5.ui) ? void 0 : x2.content] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, n5.slot || "content", { item: n5, index: l4, open: i5 }, () => {
            var a3, o4;
            return [Wt.createVNode("div", { class: v2.value.body({ class: [null == (a3 = s2.ui) ? void 0 : a3.body, null == (o4 = n5.ui) ? void 0 : o4.body] }) }, [Wt.renderSlot(t2.$slots, n5.slot ? `${n5.slot}-body` : "body", { item: n5, index: l4, open: i5 }, () => [Wt.createTextVNode(Wt.toDisplayString(n5.content), 1)])], 2)];
          })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 2 }, 1032, ["value", "disabled", "class"]);
      }), 128))];
      l3("<!--[-->"), pm.ssrRenderList(s2.items, (n5, p3) => {
        var x2, g2;
        l3(pm.ssrRenderComponent(Wt.unref(T), { key: p3, value: n5.value || String(p3), disabled: n5.disabled, class: v2.value.item({ class: [null == (x2 = s2.ui) ? void 0 : x2.item, null == (g2 = n5.ui) ? void 0 : g2.item, n5.class] }) }, { default: Wt.withCtx(({ open: l4 }, i4, u5, x3) => {
          var g3, b2, f2, y2, h2, k2, w2, C2;
          if (!i4) return [Wt.createVNode(Wt.unref(M), { as: "div", class: v2.value.header({ class: [null == (h2 = s2.ui) ? void 0 : h2.header, null == (k2 = n5.ui) ? void 0 : k2.header] }) }, { default: Wt.withCtx(() => {
            var i5, o2;
            return [Wt.createVNode(Wt.unref(E), { class: v2.value.trigger({ class: [null == (i5 = s2.ui) ? void 0 : i5.trigger, null == (o2 = n5.ui) ? void 0 : o2.trigger], disabled: n5.disabled }) }, { default: Wt.withCtx(() => {
              var i6, o3;
              return [Wt.renderSlot(t2.$slots, "leading", { item: n5, index: p3, open: l4 }, () => {
                var a3, t3;
                return [n5.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: n5.icon, class: v2.value.leadingIcon({ class: [null == (a3 = s2.ui) ? void 0 : a3.leadingIcon, null == (t3 = null == n5 ? void 0 : n5.ui) ? void 0 : t3.leadingIcon] }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
              }), Wt.unref(fg)(n5, s2.labelKey) || c2.default ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: v2.value.label({ class: [null == (i6 = s2.ui) ? void 0 : i6.label, null == (o3 = n5.ui) ? void 0 : o3.label] }) }, [Wt.renderSlot(t2.$slots, "default", { item: n5, index: p3, open: l4 }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(n5, s2.labelKey)), 1)])], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "trailing", { item: n5, index: p3, open: l4 }, () => {
                var t3, l5;
                return [Wt.createVNode(gb, { name: n5.trailingIcon || a2.trailingIcon || Wt.unref(m2).ui.icons.chevronDown, class: v2.value.trailingIcon({ class: [null == (t3 = s2.ui) ? void 0 : t3.trailingIcon, null == (l5 = n5.ui) ? void 0 : l5.trailingIcon] }) }, null, 8, ["name", "class"])];
              })];
            }), _: 2 }, 1032, ["class"])];
          }), _: 2 }, 1032, ["class"]), n5.content || c2.content || n5.slot && c2[n5.slot] || c2.body || n5.slot && c2[`${n5.slot}-body`] ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), { key: 0, class: v2.value.content({ class: [null == (w2 = s2.ui) ? void 0 : w2.content, null == (C2 = n5.ui) ? void 0 : C2.content] }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, n5.slot || "content", { item: n5, index: p3, open: l4 }, () => {
            var a3, i5;
            return [Wt.createVNode("div", { class: v2.value.body({ class: [null == (a3 = s2.ui) ? void 0 : a3.body, null == (i5 = n5.ui) ? void 0 : i5.body] }) }, [Wt.renderSlot(t2.$slots, n5.slot ? `${n5.slot}-body` : "body", { item: n5, index: p3, open: l4 }, () => [Wt.createTextVNode(Wt.toDisplayString(n5.content), 1)])], 2)];
          })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
          i4(pm.ssrRenderComponent(Wt.unref(M), { as: "div", class: v2.value.header({ class: [null == (g3 = s2.ui) ? void 0 : g3.header, null == (b2 = n5.ui) ? void 0 : b2.header] }) }, { default: Wt.withCtx((i5, u6, x4, g4) => {
            var b3, f3, y3, h3;
            if (!u6) return [Wt.createVNode(Wt.unref(E), { class: v2.value.trigger({ class: [null == (y3 = s2.ui) ? void 0 : y3.trigger, null == (h3 = n5.ui) ? void 0 : h3.trigger], disabled: n5.disabled }) }, { default: Wt.withCtx(() => {
              var i6, o2;
              return [Wt.renderSlot(t2.$slots, "leading", { item: n5, index: p3, open: l4 }, () => {
                var a3, t3;
                return [n5.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: n5.icon, class: v2.value.leadingIcon({ class: [null == (a3 = s2.ui) ? void 0 : a3.leadingIcon, null == (t3 = null == n5 ? void 0 : n5.ui) ? void 0 : t3.leadingIcon] }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
              }), Wt.unref(fg)(n5, s2.labelKey) || c2.default ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: v2.value.label({ class: [null == (i6 = s2.ui) ? void 0 : i6.label, null == (o2 = n5.ui) ? void 0 : o2.label] }) }, [Wt.renderSlot(t2.$slots, "default", { item: n5, index: p3, open: l4 }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(n5, s2.labelKey)), 1)])], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "trailing", { item: n5, index: p3, open: l4 }, () => {
                var t3, l5;
                return [Wt.createVNode(gb, { name: n5.trailingIcon || a2.trailingIcon || Wt.unref(m2).ui.icons.chevronDown, class: v2.value.trailingIcon({ class: [null == (t3 = s2.ui) ? void 0 : t3.trailingIcon, null == (l5 = n5.ui) ? void 0 : l5.trailingIcon] }) }, null, 8, ["name", "class"])];
              })];
            }), _: 2 }, 1032, ["class"])];
            u6(pm.ssrRenderComponent(Wt.unref(E), { class: v2.value.trigger({ class: [null == (b3 = s2.ui) ? void 0 : b3.trigger, null == (f3 = n5.ui) ? void 0 : f3.trigger], disabled: n5.disabled }) }, { default: Wt.withCtx((i6, u7, x5, g5) => {
              var b4, f4, y4, h4;
              if (!u7) return [Wt.renderSlot(t2.$slots, "leading", { item: n5, index: p3, open: l4 }, () => {
                var a3, t3;
                return [n5.icon ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: n5.icon, class: v2.value.leadingIcon({ class: [null == (a3 = s2.ui) ? void 0 : a3.leadingIcon, null == (t3 = null == n5 ? void 0 : n5.ui) ? void 0 : t3.leadingIcon] }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
              }), Wt.unref(fg)(n5, s2.labelKey) || c2.default ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: v2.value.label({ class: [null == (y4 = s2.ui) ? void 0 : y4.label, null == (h4 = n5.ui) ? void 0 : h4.label] }) }, [Wt.renderSlot(t2.$slots, "default", { item: n5, index: p3, open: l4 }, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(fg)(n5, s2.labelKey)), 1)])], 2)) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "trailing", { item: n5, index: p3, open: l4 }, () => {
                var t3, l5;
                return [Wt.createVNode(gb, { name: n5.trailingIcon || a2.trailingIcon || Wt.unref(m2).ui.icons.chevronDown, class: v2.value.trailingIcon({ class: [null == (t3 = s2.ui) ? void 0 : t3.trailingIcon, null == (l5 = n5.ui) ? void 0 : l5.trailingIcon] }) }, null, 8, ["name", "class"])];
              })];
              pm.ssrRenderSlot(t2.$slots, "leading", { item: n5, index: p3, open: l4 }, () => {
                var e2, a3;
                n5.icon ? u7(pm.ssrRenderComponent(gb, { name: n5.icon, class: v2.value.leadingIcon({ class: [null == (e2 = s2.ui) ? void 0 : e2.leadingIcon, null == (a3 = null == n5 ? void 0 : n5.ui) ? void 0 : a3.leadingIcon] }) }, null, x5, g5)) : u7("<!---->");
              }, u7, x5, g5), Wt.unref(fg)(n5, s2.labelKey) || c2.default ? (u7(`<span class="${pm.ssrRenderClass(v2.value.label({ class: [null == (b4 = s2.ui) ? void 0 : b4.label, null == (f4 = n5.ui) ? void 0 : f4.label] }))}"${g5}>`), pm.ssrRenderSlot(t2.$slots, "default", { item: n5, index: p3, open: l4 }, () => {
                u7(`${pm.ssrInterpolate(Wt.unref(fg)(n5, s2.labelKey))}`);
              }, u7, x5, g5), u7("</span>")) : u7("<!---->"), pm.ssrRenderSlot(t2.$slots, "trailing", { item: n5, index: p3, open: l4 }, () => {
                var t3, l5;
                u7(pm.ssrRenderComponent(gb, { name: n5.trailingIcon || a2.trailingIcon || Wt.unref(m2).ui.icons.chevronDown, class: v2.value.trailingIcon({ class: [null == (t3 = s2.ui) ? void 0 : t3.trailingIcon, null == (l5 = n5.ui) ? void 0 : l5.trailingIcon] }) }, null, x5, g5));
              }, u7, x5, g5);
            }), _: 2 }, x4, g4));
          }), _: 2 }, u5, x3)), n5.content || c2.content || n5.slot && c2[n5.slot] || c2.body || n5.slot && c2[`${n5.slot}-body`] ? i4(pm.ssrRenderComponent(Wt.unref(P), { class: v2.value.content({ class: [null == (f2 = s2.ui) ? void 0 : f2.content, null == (y2 = n5.ui) ? void 0 : y2.content] }) }, { default: Wt.withCtx((a3, i5, r2, d2) => {
            if (!i5) return [Wt.renderSlot(t2.$slots, n5.slot || "content", { item: n5, index: p3, open: l4 }, () => {
              var a4, i6;
              return [Wt.createVNode("div", { class: v2.value.body({ class: [null == (a4 = s2.ui) ? void 0 : a4.body, null == (i6 = n5.ui) ? void 0 : i6.body] }) }, [Wt.renderSlot(t2.$slots, n5.slot ? `${n5.slot}-body` : "body", { item: n5, index: p3, open: l4 }, () => [Wt.createTextVNode(Wt.toDisplayString(n5.content), 1)])], 2)];
            })];
            pm.ssrRenderSlot(t2.$slots, n5.slot || "content", { item: n5, index: p3, open: l4 }, () => {
              var e2, a4;
              i5(`<div class="${pm.ssrRenderClass(v2.value.body({ class: [null == (e2 = s2.ui) ? void 0 : e2.body, null == (a4 = n5.ui) ? void 0 : a4.body] }))}"${d2}>`), pm.ssrRenderSlot(t2.$slots, n5.slot ? `${n5.slot}-body` : "body", { item: n5, index: p3, open: l4 }, () => {
                i5(`${pm.ssrInterpolate(n5.content)}`);
              }, i5, r2, d2), i5("</div>");
            }, i5, r2, d2);
          }), _: 2 }, u5, x3)) : i4("<!---->");
        }), _: 2 }, i3, u4));
      }), l3("<!--]-->");
    }), _: 3 }, l2));
  };
} }, W = Q.setup;
Q.setup = (a2, t2) => {
  const n2 = Wt.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue"), W ? W(a2, t2) : void 0;
};
const Y = Wt.defineComponent({ __name: "index", __ssrInlineRender: true, setup(a2) {
  Fs(), Wt.ref(false);
  const t2 = Wt.ref({ total_user: 1247, user_hari_ini: 23, jumlah_lowongan: 45, total_diterima: 312 }), n2 = [{ id: 1, title: "Frontend Developer", company: "TechCorp Inc.", icon: "i-mdi-code-braces", tags: ["Full-time", "Remote", "JavaScript", "React"], description: ["Kami mencari Frontend Developer berpengalaman untuk mengembangkan aplikasi web modern menggunakan React.js.", "Anda akan bertanggung jawab untuk membangun antarmuka pengguna yang responsif dan interaktif, bekerja sama dengan tim desain untuk menerapkan mockup, dan berkolaborasi dengan tim backend untuk mengintegrasikan API."], requirements: ["Pengalaman minimal 2 tahun sebagai Frontend Developer", "Mahir dalam HTML, CSS, dan JavaScript (ES6+)", "Pengalaman kuat dengan React.js dan ekosistemnya", "Familiar dengan konsep RESTful API"], location: "Jakarta, Indonesia", salary: "Rp 12-18jt" }, { id: 2, title: "Backend Engineer", company: "DataSystems Ltd.", icon: "i-mdi-server", tags: ["Full-time", "On-site", "Node.js", "MongoDB"], description: ["Bergabunglah sebagai Backend Engineer untuk membangun dan mengoptimalkan API dan layanan mikro kami.", "Anda akan merancang dan mengimplementasikan solusi backend yang skalabel, mengoptimalkan kinerja database, dan memastikan keamanan sistem kami."], requirements: ["Pengalaman minimal 3 tahun dalam pengembangan backend", "Mahir dalam Node.js dan Express.js", "Pengalaman dengan database NoSQL (MongoDB) dan SQL", "Memahami arsitektur mikroservis"], location: "Bandung, Indonesia", salary: "Rp 15-20jt" }, { id: 3, title: "UI/UX Designer", company: "CreativeMinds", icon: "i-mdi-palette-outline", tags: ["Contract", "Hybrid", "Figma"], description: ["Kami mencari desainer berbakat untuk menciptakan pengalaman pengguna yang luar biasa untuk produk digital kami.", "Anda akan bertanggung jawab untuk merancang antarmuka pengguna yang intuitif dan estetis, melakukan penelitian pengguna, dan membuat prototipe."], requirements: ["Portofolio yang menunjukkan keterampilan desain UI/UX yang kuat", "Mahir dalam alat desain seperti Figma, Adobe XD, atau Sketch", "Memahami prinsip-prinsip UX dan metodologi penelitian pengguna"], location: "Surabaya, Indonesia", salary: "Rp 10-15jt" }], l2 = [{ title: "Visi", icon: "i-mdi-eye", levels: ["Menjadi Perusahaan Solusi Teknologi Informasi yang inovatif dan kokoh dalam pelayanan pelanggan."], bg: "bg-indigo-100", border: "border-indigo-200", rotation: { bg: "rotate-3", card: "-rotate-1" } }, { title: "Misi", icon: "i-hugeicons:target-02", levels: ["Memberikan nilai tambah kepada pelanggan", "Menjamin kemakmuran jangka panjang kepada karyawan dan stakeholder", "Meningkatkan pertumbuhan perusahaan", "Menjadi tempat bekerja yang sehat"], bg: "bg-purple-100", border: "border-purple-200", rotation: { bg: "-rotate-3", card: "rotate-1" } }, { title: "Nilai-Nilai Traspac ", icon: "i-mdi:flower-tulip", levels: ["Integritas", "Semangat", "Profesional"], bg: "bg-blue-100", border: "border-blue-200", rotation: { bg: "rotate-3", card: "-rotate-1" } }], i2 = [{ name: "Sarah Johnson", position: "Product Designer at TechCorp", avatar: "https://randomuser.me/api/portraits/women/32.jpg", quote: "Platform ini sangat membantu saya menemukan pekerjaan yang sesuai dengan passion saya. Proses rekrutmennya transparan dan cepat. Dalam waktu 2 minggu setelah mendaftar, saya sudah mendapatkan tawaran pekerjaan!" }, { name: "Michael Chen", position: "Senior Developer at DataSystems", avatar: "https://randomuser.me/api/portraits/men/64.jpg", quote: "Saya sangat terkesan dengan kualitas lowongan yang tersedia di platform ini. Tidak seperti situs pekerjaan lainnya yang penuh dengan spam, di sini semuanya relevan dan berkualitas tinggi. Tim support juga sangat responsif." }, { name: "Aisha Rahman", position: "Marketing Manager at CreativeMinds", avatar: "https://randomuser.me/api/portraits/women/68.jpg", quote: "Sebagai fresh graduate, saya kesulitan menemukan pekerjaan yang sesuai. Setelah mencoba, saya mendapatkan beberapa panggilan interview dalam waktu singkat. Sekarang saya bekerja di perusahaan impian saya!" }], d2 = [{ label: "Bagaimana cara mendaftar di Karir Traspac?", content: 'Anda bisa mendaftar dengan mengklik tombol "Daftar" di bagian atas halaman, kemudian mengisi formulir pendaftaran dengan data diri yang valid. Setelah itu, Anda akan menerima email verifikasi untuk mengaktifkan akun.' }, { label: "Apakah ada biaya untuk menggunakan platform ini?", content: "Platform ini sepenuhnya gratis untuk pencari kerja. Kami tidak memungut biaya apapun untuk melihat lowongan, melamar pekerjaan, atau menggunakan fitur-fitur lainnya." }, { label: "Bagaimana cara melamar pekerjaan?", content: 'Setelah menemukan lowongan yang sesuai, klik tombol "Lihat Detail" yang akan mengarahkan Anda ke halaman detail pekerjaan. Di sana Anda dapat mengikuti instruksi untuk melamar.' }, { label: "Apakah data pribadi saya aman?", content: "Kami sangat serius dalam menjaga keamanan dan privasi data pengguna. Semua informasi pribadi Anda dilindungi dan hanya akan dibagikan kepada perusahaan setelah Anda menyetujui untuk melamar pekerjaan tertentu." }];
  return (a3, u2, p2, v2) => {
    const x2 = Ob, g2 = _b, b2 = u, f2 = gb, y2 = J, h2 = Q;
    u2(`<div${pm.ssrRenderAttrs(v2)}><main class="overflow-x-hidden xl:-mx-[150px]"><section id="hero" class="relative px-4 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[56px] bg-slate-50"><div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-500 blur-2xl opacity-50"></div><div class="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-primary-500 blur-2xl opacity-50"></div><div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative z-10"><div class="text-center md:text-left"><h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-4 md:mb-6"> Temukan Pekerjaan <span class="bg-gradient-to-r from-primary-500 to-neutral-500 bg-clip-text text-transparent">Impianmu</span></h1><p class="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8"> Jadilah bagian dari perjalanan kami dalam menciptakan solusi teknologi yang mengubah dunia. </p><div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">`), u2(pm.ssrRenderComponent(x2, { label: "Daftar Sekarang", onClick: (e2) => a3.$router.push("/auth/register"), size: "xl", class: "w-full sm:w-auto justify-center rounded-xl lg:px-5", icon: "i-mdi-account-plus-outline" }, null, p2)), u2(pm.ssrRenderComponent(x2, { label: "Lihat Lowongan", onClick: (e2) => a3.$router.push("/lowongan"), size: "xl", class: "w-full sm:w-auto justify-center rounded-xl lg:px-5", variant: "outline" }, null, p2)), u2('</div></div><div class="hidden md:block mt-8 md:mt-0"><img class="w-full rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c6667673b9-05d9b3aee6af7abcf6d0.png" alt="Tim teknologi yang beragam sedang bekerja bersama" onerror="this.onerror=null;this.src=&#39;https://placehold.co/600x400/e0e7ff/4338ca?text=Inovasi&#39;"></div></div></section><section id="jobs" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-white"><div class="container mx-auto px-6"><h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center"> Lowongan Tersedia </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><!--[-->'), pm.ssrRenderList(n2, (e2) => {
      u2('<div class="group relative bg-white rounded-xl border border-slate-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2"><div class="p-6"><div class="flex items-center mb-4">'), u2(pm.ssrRenderComponent(g2, { icon: e2.icon, size: "lg", class: "bg-primary-50 text-primary" }, null, p2)), u2(`<div class="ml-4"><h3 class="text-lg font-semibold text-gray-900">${pm.ssrInterpolate(e2.title)}</h3><p class="text-sm text-gray-500">${pm.ssrInterpolate(e2.company)}</p></div></div><div class="flex flex-wrap gap-2 mb-4"><!--[-->`), pm.ssrRenderList(e2.tags, (e3) => {
        u2(pm.ssrRenderComponent(b2, { key: e3, label: e3, size: "sm", variant: "subtle" }, null, p2));
      }), u2(`<!--]--></div><p class="text-gray-600 text-sm mb-4 line-clamp-2">${pm.ssrInterpolate(e2.description[0])}</p><div class="flex justify-between items-center text-sm"><span class="text-gray-500 flex items-center">`), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-map-marker-outline", class: "mr-1" }, null, p2)), u2(`${pm.ssrInterpolate(e2.location)}</span><span class="text-primary font-medium">${pm.ssrInterpolate(e2.salary)}</span></div></div><div class="border-t border-slate-200 p-4">`), u2(pm.ssrRenderComponent(x2, { label: "Lihat Detail", onClick: (t3) => a3.$router.push(`/lowongan/${e2.id}`), block: "", variant: "soft" }, null, p2)), u2("</div></div>");
    }), u2('<!--]--></div></div></section><section id="process" class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl font-bold text-gray-900 mb-4"> Tahapan Rekrutmen </h2><p class="text-gray-600 max-w-2xl mx-auto"> Proses rekrutmen kami yang sederhana dan transparan. </p></div><div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0"><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="100"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-file-document", class: "text-2xl text-white" }, null, p2)), u2('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Administrasi </h3><p class="text-gray-600 text-sm"> Lengkapi dokumen dan data diri Anda. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="200"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-magnify", class: "text-2xl text-white" }, null, p2)), u2('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Screening CV </h3><p class="text-gray-600 text-sm"> Tim kami akan meninjau kualifikasi Anda. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="300"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-clipboard-check", class: "text-2xl text-white" }, null, p2)), u2('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Tes Kemampuan </h3><p class="text-gray-600 text-sm"> Uji keterampilan teknis dan soft skill. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="400"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-account-group", class: "text-2xl text-white" }, null, p2)), u2('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Interview </h3><p class="text-gray-600 text-sm"> Bertemu dengan tim untuk diskusi lebih lanjut. </p></div></div></div></div></section><section id="about" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50"><div class="container mx-auto px-6"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Tentang Kami </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Dengan kompetensi, kemampuan inovasi, dan kesungguhan menciptakan solusi, kami menjadi salah satu pilihan dalam transformasi digital. Serta lingkungan dan budaya membentuk bakat untuk berkembang adalah kontribusi kami </p></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-12"><!--[-->'), pm.ssrRenderList(l2, (e2, a4) => {
      u2(`<div class="relative"><div class="${pm.ssrRenderClass(["absolute -inset-4 rounded-xl opacity-20 transform", e2.bg, e2.rotation.bg])}"></div><div class="${pm.ssrRenderClass(["relative bg-white p-6 md:p-8 rounded-xl border-2 border-dotted transition duration-300 transform hover:rotate-0", e2.border, e2.rotation.card])}">`), u2(pm.ssrRenderComponent(f2, { name: e2.icon, class: "text-2xl sm:text-3xl text-primary" }, null, p2)), u2(`<h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">${pm.ssrInterpolate(e2.title)}</h3><ul class="space-y-2 text-gray-600 text-sm sm:text-base"><!--[-->`), pm.ssrRenderList(e2.levels, (e3) => {
        u2(`<li>${pm.ssrInterpolate(e3)}</li>`);
      }), u2("<!--]--></ul></div></div>");
    }), u2('<!--]--></div></div></section><section id="testimonials" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50 relative overflow-hidden"><div class="absolute -top-32 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"></div><div class="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"></div><div class="container mx-auto px-6 relative z-10"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Apa Kata Mereka </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Dengar langsung dari mereka yang telah menemukan pekerjaan impian. </p></div>'), u2(pm.ssrRenderComponent(y2, { items: i2, ui: { item: "basis-full" }, class: "mx-auto max-w-3xl", arrows: "" }, { default: Wt.withCtx(({ item: a4 }, t3, n3, l3) => {
      if (!t3) return [Wt.createVNode("div", { class: "text-center p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl" }, [Wt.createVNode(g2, { src: a4.avatar, size: "2xl", class: "mx-auto mb-4" }, null, 8, ["src"]), Wt.createVNode("p", { class: "text-gray-700 italic text-sm sm:text-base" }, ' "' + Wt.toDisplayString(a4.quote) + '" ', 1), Wt.createVNode("div", { class: "mt-4 md:mt-6" }, [Wt.createVNode("h4", { class: "font-semibold text-gray-900 text-sm sm:text-base" }, Wt.toDisplayString(a4.name), 1), Wt.createVNode("p", { class: "text-primary text-xs sm:text-sm" }, Wt.toDisplayString(a4.position), 1)])])];
      t3(`<div class="text-center p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl"${l3}>`), t3(pm.ssrRenderComponent(g2, { src: a4.avatar, size: "2xl", class: "mx-auto mb-4" }, null, n3, l3)), t3(`<p class="text-gray-700 italic text-sm sm:text-base"${l3}> &quot;${pm.ssrInterpolate(a4.quote)}&quot; </p><div class="mt-4 md:mt-6"${l3}><h4 class="font-semibold text-gray-900 text-sm sm:text-base"${l3}>${pm.ssrInterpolate(a4.name)}</h4><p class="text-primary text-xs sm:text-sm"${l3}>${pm.ssrInterpolate(a4.position)}</p></div></div>`);
    }), _: 1 }, p2)), u2(`</div></section><section id="stats" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-800 relative overflow-hidden"><div class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-500/20 blur-xl"></div><div class="absolute top-20 -right-10 w-32 h-32 rounded-full bg-green-400/15 blur-lg"></div><div class="absolute -bottom-16 left-1/4 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl"></div><div class="absolute bottom-10 right-1/3 w-24 h-24 rounded-full bg-emerald-400/20 blur-md"></div><div class="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-blue-400/25 blur-sm"></div><div class="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-purple-400/15 blur-lg"></div><div class="absolute inset-0 opacity-5" style="${pm.ssrRenderStyle({ "background-image": "radial-gradient(\r\n              circle at 2px 2px,\r\n              white 1px,\r\n              transparent 0\r\n            )", "background-size": "40px 40px" })}"></div><div class="container mx-auto px-6 relative z-10"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-white mb-4"> Statistik Platform Rekrutmen </h2><p class="text-white/70 max-w-2xl mx-auto text-sm sm:text-base"> Data terkini mengenai aktivitas dan pencapaian platform kami. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Total Pelamar </div><div class="flex items-center justify-between">`), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-account-group", class: "text-4xl sm:text-5xl text-blue-400" }, null, p2)), u2(`<div class="text-2xl sm:text-3xl font-bold text-white">${pm.ssrInterpolate(t2.value.total_user || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Pelamar Hari Ini </div><div class="flex items-center justify-between">`), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-calendar-today", class: "text-4xl sm:text-5xl text-green-400" }, null, p2)), u2(`<div class="text-2xl sm:text-3xl font-bold text-white">${pm.ssrInterpolate(t2.value.user_hari_ini || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Lowongan Aktif </div><div class="flex items-center justify-between">`), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-briefcase", class: "text-4xl sm:text-5xl text-amber-400" }, null, p2)), u2(`<div class="text-2xl sm:text-3xl font-bold text-white">${pm.ssrInterpolate(t2.value.jumlah_lowongan || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Berhasil Diterima </div><div class="flex items-center justify-between">`), u2(pm.ssrRenderComponent(f2, { name: "i-mdi-handshake", class: "text-4xl sm:text-5xl text-emerald-400" }, null, p2)), u2(`<div class="text-2xl sm:text-3xl font-bold text-white">${pm.ssrInterpolate(t2.value.total_diterima || 0)}</div></div></div></div></div></section><section id="faq" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-white"><div class="container mx-auto px-6"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Pertanyaan Umum </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Temukan jawaban atas pertanyaan yang sering diajukan. </p></div>`), u2(pm.ssrRenderComponent(h2, { items: d2, class: "max-w-3xl mx-auto space-y-4" }, null, p2)), u2("</div></section></main></div>");
  };
} }), Z = Y.setup;
Y.setup = (a2, t2) => {
  const n2 = Wt.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), Z ? Z(a2, t2) : void 0;
};

export { Y as default };
//# sourceMappingURL=index-C6pkJSiP.mjs.map

import { v as Wt, u as da, r as Bm, t as Ky, s as pm, P as _m } from './server.mjs';
import { l } from './useLocale-DRieL7bI.mjs';
import { F, N, C, T } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { n } from './nullish-aV-w2MPu.mjs';

const m = 100, [v, p] = T("ProgressRoot"), x = (e2) => "number" == typeof e2;
const f = Wt.defineComponent({ __name: "ProgressRoot", props: { modelValue: {}, max: { default: m }, getValueLabel: { type: Function, default: (e2, t2) => x(e2) ? `${Math.round(e2 / t2 * m)}%` : void 0 }, getValueText: {}, asChild: { type: Boolean }, as: {} }, emits: ["update:modelValue", "update:max"], setup(a2, { emit: s2 }) {
  const r2 = a2, i2 = s2;
  N();
  const n2 = C(r2, "modelValue", i2, { passive: void 0 === r2.modelValue }), u2 = C(r2, "max", i2, { passive: void 0 === r2.max });
  Wt.watch(() => n2.value, async (t2) => {
    const a3 = function(e2, t3) {
      return n(e2) || x(e2) && !Number.isNaN(e2) && e2 <= t3 && e2 >= 0 ? e2 : (console.error(`Invalid prop \`value\` of value \`${e2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
    }(t2, r2.max);
    a3 !== t2 && (await Wt.nextTick(), n2.value = a3);
  }, { immediate: true }), Wt.watch(() => r2.max, (e2) => {
    const t2 = function(e3) {
      return x(e3) && !Number.isNaN(e3) && e3 > 0 ? e3 : (console.error(`Invalid prop \`max\` of value \`${e3}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`), m);
    }(r2.max);
    t2 !== e2 && (u2.value = t2);
  }, { immediate: true });
  const d2 = Wt.computed(() => n(n2.value) ? "indeterminate" : n2.value === u2.value ? "complete" : "loading");
  return p({ modelValue: n2, max: u2, progressState: d2 }), (a3, s3) => {
    var _a;
    var r3;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { "as-child": a3.asChild, as: a3.as, "aria-valuemax": Wt.unref(u2), "aria-valuemin": 0, "aria-valuenow": x(Wt.unref(n2)) ? Wt.unref(n2) : void 0, "aria-valuetext": null == (r3 = a3.getValueText) ? void 0 : r3.call(a3, Wt.unref(n2), Wt.unref(u2)), "aria-label": a3.getValueLabel(Wt.unref(n2), Wt.unref(u2)), role: "progressbar", "data-state": d2.value, "data-value": (_a = Wt.unref(n2)) != null ? _a : void 0, "data-max": Wt.unref(u2) }, { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default", { modelValue: Wt.unref(n2) })]), _: 3 }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]);
  };
} }), g = Wt.defineComponent({ __name: "ProgressIndicator", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const s2 = a2, r2 = v();
  return N(), (a3, i2) => {
    var _a;
    var n2;
    return Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(s2, { "data-state": Wt.unref(r2).progressState.value, "data-value": (_a = null == (n2 = Wt.unref(r2).modelValue) ? void 0 : n2.value) != null ? _a : void 0, "data-max": Wt.unref(r2).max.value }), { default: Wt.withCtx(() => [Wt.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["data-state", "data-value", "data-max"]);
  };
} }), h = { slots: { root: "gap-2", base: "relative overflow-hidden rounded-full bg-accented", indicator: "rounded-full size-full transition-transform duration-200 ease-out", status: "flex justify-end text-dimmed transition-[width] duration-200", steps: "grid items-end", step: "truncate text-end row-start-1 col-start-1 transition-opacity" }, variants: { animation: { carousel: "", "carousel-inverse": "", swing: "", elastic: "" }, color: { primary: { indicator: "bg-primary", steps: "text-primary" }, secondary: { indicator: "bg-secondary", steps: "text-secondary" }, success: { indicator: "bg-success", steps: "text-success" }, info: { indicator: "bg-info", steps: "text-info" }, warning: { indicator: "bg-warning", steps: "text-warning" }, error: { indicator: "bg-error", steps: "text-error" }, neutral: { indicator: "bg-inverted", steps: "text-inverted" } }, size: { "2xs": { status: "text-xs", steps: "text-xs" }, xs: { status: "text-xs", steps: "text-xs" }, sm: { status: "text-sm", steps: "text-sm" }, md: { status: "text-sm", steps: "text-sm" }, lg: { status: "text-sm", steps: "text-sm" }, xl: { status: "text-base", steps: "text-base" }, "2xl": { status: "text-base", steps: "text-base" } }, step: { active: { step: "opacity-100" }, first: { step: "opacity-100 text-muted" }, other: { step: "opacity-0" }, last: { step: "" } }, orientation: { horizontal: { root: "w-full flex flex-col", base: "w-full", status: "flex-row" }, vertical: { root: "h-full flex flex-row-reverse", base: "h-full", status: "flex-col" } }, inverted: { true: { status: "self-end" } } }, compoundVariants: [{ inverted: true, orientation: "horizontal", class: { step: "text-start", status: "flex-row-reverse" } }, { inverted: true, orientation: "vertical", class: { steps: "items-start", status: "flex-col-reverse" } }, { orientation: "horizontal", size: "2xs", class: "h-px" }, { orientation: "horizontal", size: "xs", class: "h-0.5" }, { orientation: "horizontal", size: "sm", class: "h-1" }, { orientation: "horizontal", size: "md", class: "h-2" }, { orientation: "horizontal", size: "lg", class: "h-3" }, { orientation: "horizontal", size: "xl", class: "h-4" }, { orientation: "horizontal", size: "2xl", class: "h-5" }, { orientation: "vertical", size: "2xs", class: "w-px" }, { orientation: "vertical", size: "xs", class: "w-0.5" }, { orientation: "vertical", size: "sm", class: "w-1" }, { orientation: "vertical", size: "md", class: "w-2" }, { orientation: "vertical", size: "lg", class: "w-3" }, { orientation: "vertical", size: "xl", class: "w-4" }, { orientation: "vertical", size: "2xl", class: "w-5" }, { orientation: "horizontal", animation: "carousel", class: { indicator: "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "carousel", class: { indicator: "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "carousel-inverse", class: { indicator: "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "carousel-inverse", class: { indicator: "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "swing", class: { indicator: "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "swing", class: { indicator: "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "elastic", class: { indicator: "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "elastic", class: { indicator: "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]" } }], defaultVariants: { animation: "carousel", color: "primary", size: "md" } }, y = { __name: "Progress", __ssrInlineRender: true, props: { as: { type: null, required: false }, max: { type: [Number, Array], required: false }, status: { type: Boolean, required: false }, inverted: { type: Boolean, required: false, default: false }, size: { type: null, required: false }, color: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, animation: { type: null, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, getValueLabel: { type: Function, required: false }, getValueText: { type: Function, required: false }, modelValue: { type: [Number, null], required: false, default: null } }, emits: ["update:modelValue", "update:max"], setup(l2, { emit: o2 }) {
  const u2 = l2, c2 = o2, m2 = Wt.useSlots(), { dir: v2 } = l(), p2 = da(), x2 = F(Bm(u2, "getValueLabel", "getValueText", "modelValue"), c2), y2 = Wt.computed(() => null === x2.value.modelValue), _2 = Wt.computed(() => Array.isArray(u2.max)), b = Wt.computed(() => {
    if (!y2.value && u2.max) return Array.isArray(u2.max) ? u2.max.length - 1 : Number(u2.max);
  }), w = Wt.computed(() => {
    var _a, _b;
    if (!y2.value) switch (true) {
      case x2.value.modelValue < 0:
        return 0;
      case x2.value.modelValue > ((_a = b.value) != null ? _a : 100):
        return 100;
      default:
        return Math.round(x2.value.modelValue / ((_b = b.value) != null ? _b : 100) * 100);
    }
  }), z = Wt.computed(() => {
    if (void 0 !== w.value) return "vertical" === u2.orientation ? { transform: `translateY(${u2.inverted ? "" : "-"}${100 - w.value}%)` } : "rtl" === v2.value ? { transform: `translateX(${u2.inverted ? "-" : ""}${100 - w.value}%)` } : { transform: `translateX(${u2.inverted ? "" : "-"}${100 - w.value}%)` };
  }), V = Wt.computed(() => ({ ["vertical" === u2.orientation ? "height" : "width"]: w.value ? `${w.value}%` : "fit-content" }));
  function $(e2) {
    return e2 === Number(u2.modelValue);
  }
  function C(e2) {
    return 0 === e2;
  }
  function N(e2) {
    return $(e2 = Number(e2)) && !C(e2) ? "active" : C(e2) && $(e2) ? "first" : function(e3) {
      return e3 === b.value;
    }(e2) && $(e2) ? "last" : "other";
  }
  const R = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(h), ...(null == (e2 = p2.ui) ? void 0 : e2.progress) || {} })({ animation: u2.animation, size: u2.size, color: u2.color, orientation: u2.orientation, inverted: u2.inverted });
  });
  return (a2, s2, r2, n2) => {
    var o3;
    s2(pm.ssrRenderComponent(Wt.unref(_m), Wt.mergeProps({ as: l2.as, class: R.value.root({ class: [null == (o3 = u2.ui) ? void 0 : o3.root, u2.class] }) }, n2), { default: Wt.withCtx((t2, s3, r3, n3) => {
      var o4, d2, c3, v3, p3, h2;
      if (!s3) return [y2.value || !l2.status && !m2.status ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.status({ class: null == (v3 = u2.ui) ? void 0 : v3.status }), style: V.value }, [Wt.renderSlot(a2.$slots, "status", { percent: w.value }, () => [Wt.createTextVNode(Wt.toDisplayString(w.value) + "% ", 1)])], 6)), Wt.createVNode(Wt.unref(f), Wt.mergeProps(Wt.unref(x2), { max: b.value, class: R.value.base({ class: null == (p3 = u2.ui) ? void 0 : p3.base }), style: { transform: "translateZ(0)" } }), { default: Wt.withCtx(() => {
        var t3;
        return [Wt.createVNode(Wt.unref(g), { class: R.value.indicator({ class: null == (t3 = u2.ui) ? void 0 : t3.indicator }), style: z.value }, null, 8, ["class", "style"])];
      }), _: 1 }, 16, ["max", "class"]), _2.value ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.steps({ class: null == (h2 = u2.ui) ? void 0 : h2.steps }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(l2.max, (t3, s4) => {
        var r4;
        return Wt.openBlock(), Wt.createBlock("div", { key: s4, class: R.value.step({ class: null == (r4 = u2.ui) ? void 0 : r4.step, step: N(s4) }) }, [Wt.renderSlot(a2.$slots, `step-${s4}`, { step: t3 }, () => [Wt.createTextVNode(Wt.toDisplayString(t3), 1)])], 2);
      }), 128))], 2)) : Wt.createCommentVNode("", true)];
      y2.value || !l2.status && !m2.status ? s3("<!---->") : (s3(`<div class="${pm.ssrRenderClass(R.value.status({ class: null == (o4 = u2.ui) ? void 0 : o4.status }))}" style="${pm.ssrRenderStyle(V.value)}"${n3}>`), pm.ssrRenderSlot(a2.$slots, "status", { percent: w.value }, () => {
        s3(`${pm.ssrInterpolate(w.value)}% `);
      }, s3, r3, n3), s3("</div>")), s3(pm.ssrRenderComponent(Wt.unref(f), Wt.mergeProps(Wt.unref(x2), { max: b.value, class: R.value.base({ class: null == (d2 = u2.ui) ? void 0 : d2.base }), style: { transform: "translateZ(0)" } }), { default: Wt.withCtx((t3, a3, s4, r4) => {
        var n4, l3;
        if (!a3) return [Wt.createVNode(Wt.unref(g), { class: R.value.indicator({ class: null == (l3 = u2.ui) ? void 0 : l3.indicator }), style: z.value }, null, 8, ["class", "style"])];
        a3(pm.ssrRenderComponent(Wt.unref(g), { class: R.value.indicator({ class: null == (n4 = u2.ui) ? void 0 : n4.indicator }), style: z.value }, null, s4, r4));
      }), _: 1 }, r3, n3)), _2.value ? (s3(`<div class="${pm.ssrRenderClass(R.value.steps({ class: null == (c3 = u2.ui) ? void 0 : c3.steps }))}"${n3}><!--[-->`), pm.ssrRenderList(l2.max, (e2, t3) => {
        var l3;
        s3(`<div class="${pm.ssrRenderClass(R.value.step({ class: null == (l3 = u2.ui) ? void 0 : l3.step, step: N(t3) }))}"${n3}>`), pm.ssrRenderSlot(a2.$slots, `step-${t3}`, { step: e2 }, () => {
          s3(`${pm.ssrInterpolate(e2)}`);
        }, s3, r3, n3), s3("</div>");
      }), s3("<!--]--></div>")) : s3("<!---->");
    }), _: 3 }, r2));
  };
} }, _ = y.setup;
y.setup = (t2, a2) => {
  const s2 = Wt.useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue"), _ ? _(t2, a2) : void 0;
};

export { y };
//# sourceMappingURL=Progress-CXK4L9f0.mjs.map

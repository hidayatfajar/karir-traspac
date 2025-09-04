import { S as Pm, u as ua, v as Wt, t as Hy, s as om, P as xm } from './server.mjs';

const i = { meta: "", ctrl: "", alt: "", win: "\u229E", command: "\u2318", shift: "\u21E7", control: "\u2303", option: "\u2325", enter: "\u21B5", delete: "\u2326", backspace: "\u232B", escape: "\u238B", tab: "\u21E5", capslock: "\u21EA", arrowup: "\u2191", arrowright: "\u2192", arrowdown: "\u2193", arrowleft: "\u2190", pageup: "\u21DE", pagedown: "\u21DF", home: "\u2196", end: "\u2198" }, l = Pm(() => {
  const e2 = Wt.computed(() => false), n2 = Wt.reactive({ meta: " ", alt: " ", ctrl: " " });
  return { macOS: e2, getKbdKey: function(e3) {
    if (e3) return ["meta", "alt", "ctrl"].includes(e3) ? n2[e3] : i[e3] || e3.toUpperCase();
  } };
}), u = { base: "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans", variants: { variant: { solid: "bg-inverted text-inverted", outline: "bg-default text-highlighted ring ring-inset ring-accented", subtle: "bg-elevated text-default ring ring-inset ring-accented" }, size: { sm: "h-4 min-w-[16px] text-[10px]", md: "h-5 min-w-[20px] text-[11px]", lg: "h-6 min-w-[24px] text-[12px]" } }, defaultVariants: { variant: "outline", size: "md" } }, d = { __name: "Kbd", __ssrInlineRender: true, props: { as: { type: null, required: false, default: "kbd" }, value: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, class: { type: null, required: false } }, setup(e2) {
  const i2 = e2, { getKbdKey: d2 } = l(), o2 = ua(), p = Wt.computed(() => {
    var e3;
    return Hy({ extend: Hy(u), ...(null == (e3 = o2.ui) ? void 0 : e3.kbd) || {} });
  });
  return (n2, r2, l2, u2) => {
    r2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: e2.as, class: p.value({ variant: e2.variant, size: e2.size, class: i2.class }) }, u2), { default: Wt.withCtx((r3, a2, i3, l3) => {
      if (!a2) return [Wt.renderSlot(n2.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(Wt.unref(d2)(e2.value)), 1)])];
      om.ssrRenderSlot(n2.$slots, "default", {}, () => {
        a2(`${om.ssrInterpolate(Wt.unref(d2)(e2.value))}`);
      }, a2, i3, l3);
    }), _: 3 }, l2));
  };
} }, o = d.setup;
d.setup = (e2, n2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue"), o ? o(e2, n2) : void 0;
};

export { d };
//# sourceMappingURL=Kbd-2mh2A80S.mjs.map

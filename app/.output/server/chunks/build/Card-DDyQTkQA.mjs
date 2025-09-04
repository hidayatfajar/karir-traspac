import { v as Wt, u as ua, t as Hy, s as om, P as xm } from './server.mjs';

const t = { slots: { root: "rounded-lg overflow-hidden", header: "p-4 sm:px-6", body: "p-4 sm:p-6", footer: "p-4 sm:px-6" }, variants: { variant: { solid: { root: "bg-inverted text-inverted" }, outline: { root: "bg-default ring ring-default divide-y divide-default" }, soft: { root: "bg-elevated/50 divide-y divide-default" }, subtle: { root: "bg-elevated/50 ring ring-default divide-y divide-default" } } }, defaultVariants: { variant: "outline" } }, d = { __name: "Card", __ssrInlineRender: true, props: { as: { type: null, required: false }, variant: { type: null, required: false }, class: { type: null, required: false }, ui: { type: null, required: false } }, setup(d2) {
  const a2 = d2, n = Wt.useSlots(), u = ua(), i = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(t), ...(null == (e2 = u.ui) ? void 0 : e2.card) || {} })({ variant: a2.variant });
  });
  return (s2, l2, t2, u2) => {
    var v;
    l2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: d2.as, class: i.value.root({ class: [null == (v = a2.ui) ? void 0 : v.root, a2.class] }) }, u2), { default: Wt.withCtx((l3, r2, t3, d3) => {
      var u3, v2, c, f, p, m;
      if (!r2) return [n.header ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: i.value.header({ class: null == (f = a2.ui) ? void 0 : f.header }) }, [Wt.renderSlot(s2.$slots, "header")], 2)) : Wt.createCommentVNode("", true), n.default ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: i.value.body({ class: null == (p = a2.ui) ? void 0 : p.body }) }, [Wt.renderSlot(s2.$slots, "default")], 2)) : Wt.createCommentVNode("", true), n.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 2, class: i.value.footer({ class: null == (m = a2.ui) ? void 0 : m.footer }) }, [Wt.renderSlot(s2.$slots, "footer")], 2)) : Wt.createCommentVNode("", true)];
      n.header ? (r2(`<div class="${om.ssrRenderClass(i.value.header({ class: null == (u3 = a2.ui) ? void 0 : u3.header }))}"${d3}>`), om.ssrRenderSlot(s2.$slots, "header", {}, null, r2, t3, d3), r2("</div>")) : r2("<!---->"), n.default ? (r2(`<div class="${om.ssrRenderClass(i.value.body({ class: null == (v2 = a2.ui) ? void 0 : v2.body }))}"${d3}>`), om.ssrRenderSlot(s2.$slots, "default", {}, null, r2, t3, d3), r2("</div>")) : r2("<!---->"), n.footer ? (r2(`<div class="${om.ssrRenderClass(i.value.footer({ class: null == (c = a2.ui) ? void 0 : c.footer }))}"${d3}>`), om.ssrRenderSlot(s2.$slots, "footer", {}, null, r2, t3, d3), r2("</div>")) : r2("<!---->");
    }), _: 3 }, t2));
  };
} }, a = d.setup;
d.setup = (s2, l2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue"), a ? a(s2, l2) : void 0;
};

export { d };
//# sourceMappingURL=Card-DDyQTkQA.mjs.map

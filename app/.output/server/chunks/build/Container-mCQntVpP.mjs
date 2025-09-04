import { u as ua, v as Wt, t as Hy, s as om, P as xm } from './server.mjs';

const u = { base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8" }, o = { __name: "Container", __ssrInlineRender: true, props: { as: { type: null, required: false }, class: { type: null, required: false } }, setup(o2) {
  const a2 = o2, l = ua(), d = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(u), ...(null == (e2 = l.ui) ? void 0 : e2.container) || {} });
  });
  return (e2, t2, u2, l2) => {
    t2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: o2.as, class: d.value({ class: a2.class }) }, l2), { default: Wt.withCtx((t3, r2, u3, o3) => {
      if (!r2) return [Wt.renderSlot(e2.$slots, "default")];
      om.ssrRenderSlot(e2.$slots, "default", {}, null, r2, u3, o3);
    }), _: 3 }, u2));
  };
} }, a = o.setup;
o.setup = (e2, t2) => {
  const n2 = Wt.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue"), a ? a(e2, t2) : void 0;
};

export { o };
//# sourceMappingURL=Container-mCQntVpP.mjs.map

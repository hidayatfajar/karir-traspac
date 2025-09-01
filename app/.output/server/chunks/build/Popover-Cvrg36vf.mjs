import { v as Wt, u as da, r as Bm, t as Ky, s as pm } from './server.mjs';
import { k as defu } from '../_/nitro.mjs';
import { C as Co, B as Bo } from './index-BJFOiOgd.mjs';
import { O } from './usePortal-DtLtCtVs.mjs';
import { F } from './useForwardPropsEmits-WwvTsoLV.mjs';

const c = { slots: { content: "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto", arrow: "fill-default" } }, i = { __name: "Popover", __ssrInlineRender: true, props: { mode: { type: String, required: false, default: "click" }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, modal: { type: Boolean, required: false }, openDelay: { type: Number, required: false, default: 0 }, closeDelay: { type: Number, required: false, default: 0 } }, emits: ["close:prevent", "update:open"], setup(i2, { emit: p2 }) {
  const f = i2, m = p2, v = Wt.useSlots(), w = da(), h = "hover" === f.mode ? Bm(f, "defaultOpen", "open", "openDelay", "closeDelay") : Bm(f, "defaultOpen", "open", "modal"), C = F(h, m), y = O(Wt.toRef(() => f.portal)), g = Wt.toRef(() => defu(f.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 })), x = Wt.computed(() => {
    if (!f.dismissible) {
      return ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((e2, r2) => (e2[r2] = (e3) => {
        e3.preventDefault(), m("close:prevent");
      }, e2), {});
    }
    return {};
  }), _ = Wt.toRef(() => f.arrow), k = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(c), ...(null == (e2 = w.ui) ? void 0 : e2.popover) || {} })({ side: g.value.side });
  }), R = Wt.computed(() => "hover" === f.mode ? Co : Bo);
  return (r2, o2, t2, l2) => {
    o2(pm.ssrRenderComponent(Wt.unref(R).Root, Wt.mergeProps(Wt.unref(C), l2), { default: Wt.withCtx(({ open: o3 }, t3, l3, s2) => {
      if (!t3) return [v.default ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Trigger, { key: 0, "as-child": "", class: f.class }, { default: Wt.withCtx(() => [Wt.renderSlot(r2.$slots, "default", { open: o3 })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), "Anchor" in R.value && v.anchor ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Anchor, { key: 1, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(r2.$slots, "anchor")]), _: 3 })) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(R).Portal, Wt.unref(y), { default: Wt.withCtx(() => {
        var o4;
        return [Wt.createVNode(Wt.unref(R).Content, Wt.mergeProps(g.value, { class: k.value.content({ class: [!v.default && f.class, null == (o4 = f.ui) ? void 0 : o4.content] }) }, Wt.toHandlers(x.value)), { default: Wt.withCtx(() => {
          var o5;
          return [Wt.renderSlot(r2.$slots, "content"), i2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Arrow, Wt.mergeProps({ key: 0 }, _.value, { class: k.value.arrow({ class: null == (o5 = f.ui) ? void 0 : o5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      v.default ? t3(pm.ssrRenderComponent(Wt.unref(R).Trigger, { "as-child": "", class: f.class }, { default: Wt.withCtx((t4, l4, s3, a2) => {
        if (!l4) return [Wt.renderSlot(r2.$slots, "default", { open: o3 })];
        pm.ssrRenderSlot(r2.$slots, "default", { open: o3 }, null, l4, s3, a2);
      }), _: 2 }, l3, s2)) : t3("<!---->"), "Anchor" in R.value && v.anchor ? t3(pm.ssrRenderComponent(Wt.unref(R).Anchor, { "as-child": "" }, { default: Wt.withCtx((o4, t4, l4, s3) => {
        if (!t4) return [Wt.renderSlot(r2.$slots, "anchor")];
        pm.ssrRenderSlot(r2.$slots, "anchor", {}, null, t4, l4, s3);
      }), _: 2 }, l3, s2)) : t3("<!---->"), t3(pm.ssrRenderComponent(Wt.unref(R).Portal, Wt.unref(y), { default: Wt.withCtx((o4, t4, l4, s3) => {
        var a2, u2;
        if (!t4) return [Wt.createVNode(Wt.unref(R).Content, Wt.mergeProps(g.value, { class: k.value.content({ class: [!v.default && f.class, null == (u2 = f.ui) ? void 0 : u2.content] }) }, Wt.toHandlers(x.value)), { default: Wt.withCtx(() => {
          var o5;
          return [Wt.renderSlot(r2.$slots, "content"), i2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Arrow, Wt.mergeProps({ key: 0 }, _.value, { class: k.value.arrow({ class: null == (o5 = f.ui) ? void 0 : o5.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        t4(pm.ssrRenderComponent(Wt.unref(R).Content, Wt.mergeProps(g.value, { class: k.value.content({ class: [!v.default && f.class, null == (a2 = f.ui) ? void 0 : a2.content] }) }, Wt.toHandlers(x.value)), { default: Wt.withCtx((o5, t5, l5, s4) => {
          var a3, u3;
          if (!t5) return [Wt.renderSlot(r2.$slots, "content"), i2.arrow ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Arrow, Wt.mergeProps({ key: 0 }, _.value, { class: k.value.arrow({ class: null == (u3 = f.ui) ? void 0 : u3.arrow }) }), null, 16, ["class"])) : Wt.createCommentVNode("", true)];
          pm.ssrRenderSlot(r2.$slots, "content", {}, null, t5, l5, s4), i2.arrow ? t5(pm.ssrRenderComponent(Wt.unref(R).Arrow, Wt.mergeProps(_.value, { class: k.value.arrow({ class: null == (a3 = f.ui) ? void 0 : a3.arrow }) }), null, l5, s4)) : t5("<!---->");
        }), _: 2 }, l4, s3));
      }), _: 2 }, l3, s2));
    }), _: 3 }, t2));
  };
} }, p = i.setup;
i.setup = (r2, o2) => {
  const t2 = Wt.useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue"), p ? p(r2, o2) : void 0;
};

export { i };
//# sourceMappingURL=Popover-Cvrg36vf.mjs.map

import { v as Wt, u as ua, r as Mm, t as Hy, s as om, _ as kb } from './server.mjs';
import { l } from './useLocale-BepRiSpk.mjs';
import { O } from './usePortal-DzDMWCd7.mjs';
import { F } from './useForwardPropsEmits-DnSfSOTI.mjs';
import { B as B$1, b, P, w, h, D, k, C as C$1 } from './DialogPortal-BClYAy6o.mjs';
import { d } from './VisuallyHidden-CudQpOEQ.mjs';

const x = { slots: { overlay: "fixed inset-0 bg-elevated/75", content: "fixed bg-default divide-y divide-default flex flex-col focus:outline-none", header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16", wrapper: "", body: "flex-1 overflow-y-auto p-4 sm:p-6", footer: "flex items-center gap-1.5 p-4 sm:px-6", title: "text-highlighted font-semibold", description: "mt-1 text-muted text-sm", close: "absolute top-4 end-4" }, variants: { transition: { true: { overlay: "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]", content: "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]" } }, fullscreen: { true: { content: "inset-0" }, false: { content: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden" } } } }, C = { __name: "Modal", __ssrInlineRender: true, props: { title: { type: String, required: false }, description: { type: String, required: false }, content: { type: Object, required: false }, overlay: { type: Boolean, required: false, default: true }, transition: { type: Boolean, required: false, default: true }, fullscreen: { type: Boolean, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: String, required: false }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["after:leave", "after:enter", "close:prevent", "update:open"], setup(C2, { emit: B2 }) {
  const S = C2, h$1 = B2, $ = Wt.useSlots(), { t: V } = l(), N = ua(), w$1 = F(Mm(S, "open", "defaultOpen", "modal"), h$1), _ = O(Wt.toRef(() => S.portal)), g = Wt.toRef(() => S.content), b$1 = Wt.computed(() => {
    const e2 = { closeAutoFocus: (e3) => e3.preventDefault() };
    if (!S.dismissible) {
      return ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((e3, t2) => (e3[t2] = (e4) => {
        e4.preventDefault(), h$1("close:prevent");
      }, e3), e2);
    }
    return e2;
  }), R = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(x), ...(null == (e2 = N.ui) ? void 0 : e2.modal) || {} })({ transition: S.transition, fullscreen: S.fullscreen });
  });
  return (t2, o2, l2, n2) => {
    o2(om.ssrRenderComponent(Wt.unref(B$1), Wt.mergeProps(Wt.unref(w$1), n2), { default: Wt.withCtx(({ open: o3, close: l3 }, n3, a2, c2) => {
      if (!n3) return [$.default ? (Wt.openBlock(), Wt.createBlock(Wt.unref(b), { key: 0, "as-child": "", class: S.class }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "default", { open: o3 })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(P), Wt.unref(_), { default: Wt.withCtx(() => {
        var o4, s2;
        return [C2.overlay ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 0, class: R.value.overlay({ class: null == (o4 = S.ui) ? void 0 : o4.overlay }) }, null, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(h), Wt.mergeProps({ class: R.value.content({ class: [!$.default && S.class, null == (s2 = S.ui) ? void 0 : s2.content] }) }, g.value, { onAfterEnter: (e2) => h$1("after:enter"), onAfterLeave: (e2) => h$1("after:leave") }, Wt.toHandlers(b$1.value)), { default: Wt.withCtx(() => [$.content && (C2.title || $.title || C2.description || $.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d), { key: 0 }, { default: Wt.withCtx(() => [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
          var o5, s3, n4;
          return [$.header || C2.title || $.title || C2.description || $.description || S.close || $.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o5 = S.ui) ? void 0 : o5.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
            var o6, s4, n5;
            return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o6 = S.ui) ? void 0 : o6.wrapper }) }, [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (s4 = S.ui) ? void 0 : s4.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (n5 = S.ui) ? void 0 : n5.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), S.close || $.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C$1), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
              var t3;
              return [S.close ? (Wt.openBlock(), Wt.createBlock(kb, Wt.mergeProps({ key: 0, icon: C2.closeIcon || Wt.unref(N).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(V)("modal.close") }, "object" == typeof S.close ? S.close : {}, { class: R.value.close({ class: null == (t3 = S.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), $.body ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.body({ class: null == (s3 = S.ui) ? void 0 : s3.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2)) : Wt.createCommentVNode("", true), $.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 2, class: R.value.footer({ class: null == (n4 = S.ui) ? void 0 : n4.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, 1040)];
      $.default ? n3(om.ssrRenderComponent(Wt.unref(b), { "as-child": "", class: S.class }, { default: Wt.withCtx((l4, r2, n4, a3) => {
        if (!r2) return [Wt.renderSlot(t2.$slots, "default", { open: o3 })];
        om.ssrRenderSlot(t2.$slots, "default", { open: o3 }, null, r2, n4, a3);
      }), _: 2 }, a2, c2)) : n3("<!---->"), n3(om.ssrRenderComponent(Wt.unref(P), Wt.unref(_), { default: Wt.withCtx((o4, n4, a3, c3) => {
        var i2, d2, u2, x2;
        if (!n4) return [C2.overlay ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 0, class: R.value.overlay({ class: null == (u2 = S.ui) ? void 0 : u2.overlay }) }, null, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(h), Wt.mergeProps({ class: R.value.content({ class: [!$.default && S.class, null == (x2 = S.ui) ? void 0 : x2.content] }) }, g.value, { onAfterEnter: (e2) => h$1("after:enter"), onAfterLeave: (e2) => h$1("after:leave") }, Wt.toHandlers(b$1.value)), { default: Wt.withCtx(() => [$.content && (C2.title || $.title || C2.description || $.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d), { key: 0 }, { default: Wt.withCtx(() => [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
          var o5, s2, n5;
          return [$.header || C2.title || $.title || C2.description || $.description || S.close || $.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o5 = S.ui) ? void 0 : o5.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
            var o6, s3, n6;
            return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o6 = S.ui) ? void 0 : o6.wrapper }) }, [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (s3 = S.ui) ? void 0 : s3.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (n6 = S.ui) ? void 0 : n6.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), S.close || $.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C$1), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
              var t3;
              return [S.close ? (Wt.openBlock(), Wt.createBlock(kb, Wt.mergeProps({ key: 0, icon: C2.closeIcon || Wt.unref(N).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(V)("modal.close") }, "object" == typeof S.close ? S.close : {}, { class: R.value.close({ class: null == (t3 = S.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), $.body ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.body({ class: null == (s2 = S.ui) ? void 0 : s2.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2)) : Wt.createCommentVNode("", true), $.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 2, class: R.value.footer({ class: null == (n5 = S.ui) ? void 0 : n5.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["class", "onAfterEnter", "onAfterLeave"])];
        C2.overlay ? n4(om.ssrRenderComponent(Wt.unref(w), { class: R.value.overlay({ class: null == (i2 = S.ui) ? void 0 : i2.overlay }) }, null, a3, c3)) : n4("<!---->"), n4(om.ssrRenderComponent(Wt.unref(h), Wt.mergeProps({ class: R.value.content({ class: [!$.default && S.class, null == (d2 = S.ui) ? void 0 : d2.content] }) }, g.value, { onAfterEnter: (e2) => h$1("after:enter"), onAfterLeave: (e2) => h$1("after:leave") }, Wt.toHandlers(b$1.value)), { default: Wt.withCtx((o5, n5, a4, c4) => {
          if (!n5) return [$.content && (C2.title || $.title || C2.description || $.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d), { key: 0 }, { default: Wt.withCtx(() => [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
            var o6, s2, n6;
            return [$.header || C2.title || $.title || C2.description || $.description || S.close || $.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o6 = S.ui) ? void 0 : o6.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
              var o7, s3, n7;
              return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o7 = S.ui) ? void 0 : o7.wrapper }) }, [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (s3 = S.ui) ? void 0 : s3.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (n7 = S.ui) ? void 0 : n7.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), S.close || $.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C$1), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                var t3;
                return [S.close ? (Wt.openBlock(), Wt.createBlock(kb, Wt.mergeProps({ key: 0, icon: C2.closeIcon || Wt.unref(N).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(V)("modal.close") }, "object" == typeof S.close ? S.close : {}, { class: R.value.close({ class: null == (t3 = S.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
              })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
            })], 2)) : Wt.createCommentVNode("", true), $.body ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.body({ class: null == (s2 = S.ui) ? void 0 : s2.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2)) : Wt.createCommentVNode("", true), $.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 2, class: R.value.footer({ class: null == (n6 = S.ui) ? void 0 : n6.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
          })];
          $.content && (C2.title || $.title || C2.description || $.description) ? n5(om.ssrRenderComponent(Wt.unref(d), null, { default: Wt.withCtx((o6, l4, r2, n6) => {
            if (!l4) return [C2.title || $.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), C2.description || $.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)];
            C2.title || $.title ? l4(om.ssrRenderComponent(Wt.unref(D), null, { default: Wt.withCtx((o7, l5, r3, n7) => {
              if (!l5) return [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])];
              om.ssrRenderSlot(t2.$slots, "title", {}, () => {
                l5(`${om.ssrInterpolate(C2.title)}`);
              }, l5, r3, n7);
            }), _: 2 }, r2, n6)) : l4("<!---->"), C2.description || $.description ? l4(om.ssrRenderComponent(Wt.unref(k), null, { default: Wt.withCtx((o7, l5, r3, n7) => {
              if (!l5) return [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])];
              om.ssrRenderSlot(t2.$slots, "description", {}, () => {
                l5(`${om.ssrInterpolate(C2.description)}`);
              }, l5, r3, n7);
            }), _: 2 }, r2, n6)) : l4("<!---->");
          }), _: 2 }, a4, c4)) : n5("<!---->"), om.ssrRenderSlot(t2.$slots, "content", { close: l3 }, () => {
            var o6, i3, d3;
            $.header || C2.title || $.title || C2.description || $.description || S.close || $.close ? (n5(`<div class="${om.ssrRenderClass(R.value.header({ class: null == (o6 = S.ui) ? void 0 : o6.header }))}"${c4}>`), om.ssrRenderSlot(t2.$slots, "header", { close: l3 }, () => {
              var o7, i4, d4;
              n5(`<div class="${om.ssrRenderClass(R.value.wrapper({ class: null == (o7 = S.ui) ? void 0 : o7.wrapper }))}"${c4}>`), C2.title || $.title ? n5(om.ssrRenderComponent(Wt.unref(D), { class: R.value.title({ class: null == (i4 = S.ui) ? void 0 : i4.title }) }, { default: Wt.withCtx((o8, l4, r2, n6) => {
                if (!l4) return [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.title), 1)])];
                om.ssrRenderSlot(t2.$slots, "title", {}, () => {
                  l4(`${om.ssrInterpolate(C2.title)}`);
                }, l4, r2, n6);
              }), _: 2 }, a4, c4)) : n5("<!---->"), C2.description || $.description ? n5(om.ssrRenderComponent(Wt.unref(k), { class: R.value.description({ class: null == (d4 = S.ui) ? void 0 : d4.description }) }, { default: Wt.withCtx((o8, l4, r2, n6) => {
                if (!l4) return [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(C2.description), 1)])];
                om.ssrRenderSlot(t2.$slots, "description", {}, () => {
                  l4(`${om.ssrInterpolate(C2.description)}`);
                }, l4, r2, n6);
              }), _: 2 }, a4, c4)) : n5("<!---->"), n5("</div>"), om.ssrRenderSlot(t2.$slots, "actions", {}, null, n5, a4, c4), S.close || $.close ? n5(om.ssrRenderComponent(Wt.unref(C$1), { "as-child": "" }, { default: Wt.withCtx((o8, n6, a5, c5) => {
                if (!n6) return [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                  var t3;
                  return [S.close ? (Wt.openBlock(), Wt.createBlock(kb, Wt.mergeProps({ key: 0, icon: C2.closeIcon || Wt.unref(N).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(V)("modal.close") }, "object" == typeof S.close ? S.close : {}, { class: R.value.close({ class: null == (t3 = S.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
                })];
                om.ssrRenderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                  var t3;
                  S.close ? n6(om.ssrRenderComponent(kb, Wt.mergeProps({ icon: C2.closeIcon || Wt.unref(N).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(V)("modal.close") }, "object" == typeof S.close ? S.close : {}, { class: R.value.close({ class: null == (t3 = S.ui) ? void 0 : t3.close }) }), null, a5, c5)) : n6("<!---->");
                }, n6, a5, c5);
              }), _: 2 }, a4, c4)) : n5("<!---->");
            }, n5, a4, c4), n5("</div>")) : n5("<!---->"), $.body ? (n5(`<div class="${om.ssrRenderClass(R.value.body({ class: null == (i3 = S.ui) ? void 0 : i3.body }))}"${c4}>`), om.ssrRenderSlot(t2.$slots, "body", { close: l3 }, null, n5, a4, c4), n5("</div>")) : n5("<!---->"), $.footer ? (n5(`<div class="${om.ssrRenderClass(R.value.footer({ class: null == (d3 = S.ui) ? void 0 : d3.footer }))}"${c4}>`), om.ssrRenderSlot(t2.$slots, "footer", { close: l3 }, null, n5, a4, c4), n5("</div>")) : n5("<!---->");
          }, n5, a4, c4);
        }), _: 2 }, a3, c3));
      }), _: 2 }, a2, c2));
    }), _: 3 }, l2));
  };
} }, B = C.setup;
C.setup = (t2, o2) => {
  const l2 = Wt.useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue"), B ? B(t2, o2) : void 0;
};

export { C };
//# sourceMappingURL=Modal-CWyVpLPN.mjs.map

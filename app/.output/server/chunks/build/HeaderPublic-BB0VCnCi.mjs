import { v as Wt, U as Bs, c as Fs, f as ha, s as pm, _ as Ob, u as da, r as Bm, t as Ky } from './server.mjs';
import { l } from './useLocale-DRieL7bI.mjs';
import { i } from './usePortal-B0EwXMSu.mjs';
import { F } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { B as B$1, b, P, w, h, D, k, C } from './DialogPortal-DWaqTrjw.mjs';
import { d as d$1 } from './VisuallyHidden-CudQpOEQ.mjs';
import { d } from './Card-DDyQTkQA.mjs';
import { s } from './logo-kt-C_l9s7Hp.mjs';
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
import './utils-6y4URocx.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './Presence-D-YonBfP.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import './useBodyScrollLock-DClI9ev0.mjs';

const S = { slots: { overlay: "fixed inset-0 bg-elevated/75", content: "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none", header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16", wrapper: "", body: "flex-1 overflow-y-auto p-4 sm:p-6", footer: "flex items-center gap-1.5 p-4 sm:px-6", title: "text-highlighted font-semibold", description: "mt-1 text-muted text-sm", close: "absolute top-4 end-4" }, variants: { side: { top: { content: "inset-x-0 top-0 max-h-full" }, right: { content: "right-0 inset-y-0 w-full max-w-md" }, bottom: { content: "inset-x-0 bottom-0 max-h-full" }, left: { content: "left-0 inset-y-0 w-full max-w-md" } }, transition: { true: { overlay: "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]" } } }, compoundVariants: [{ transition: true, side: "top", class: { content: "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]" } }, { transition: true, side: "right", class: { content: "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]" } }, { transition: true, side: "bottom", class: { content: "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]" } }, { transition: true, side: "left", class: { content: "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]" } }] }, B = { __name: "Slideover", __ssrInlineRender: true, props: { title: { type: String, required: false }, description: { type: String, required: false }, content: { type: Object, required: false }, overlay: { type: Boolean, required: false, default: true }, transition: { type: Boolean, required: false, default: true }, side: { type: null, required: false, default: "right" }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: String, required: false }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["after:leave", "after:enter", "close:prevent", "update:open"], setup(n2, { emit: a2 }) {
  const i2 = n2, b2 = a2, g2 = Wt.useSlots(), { t: B2 } = l(), V2 = da(), N2 = F(Bm(i2, "open", "defaultOpen", "modal"), b2), _2 = i(Wt.toRef(() => i2.portal)), $ = Wt.toRef(() => i2.content), w$1 = Wt.computed(() => {
    const e2 = { closeAutoFocus: (e3) => e3.preventDefault() };
    if (!i2.dismissible) {
      return ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((e3, t2) => (e3[t2] = (e4) => {
        e4.preventDefault(), b2("close:prevent");
      }, e3), e2);
    }
    return e2;
  }), R = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(S), ...(null == (e2 = V2.ui) ? void 0 : e2.slideover) || {} })({ transition: i2.transition, side: i2.side });
  });
  return (t2, o2, l2, a3) => {
    o2(pm.ssrRenderComponent(Wt.unref(B$1), Wt.mergeProps(Wt.unref(N2), a3), { default: Wt.withCtx(({ open: o3, close: l3 }, a4, c2, d2) => {
      if (!a4) return [g2.default ? (Wt.openBlock(), Wt.createBlock(Wt.unref(b), { key: 0, "as-child": "", class: i2.class }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "default", { open: o3 })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(P), Wt.unref(_2), { default: Wt.withCtx(() => {
        var o4, r2;
        return [n2.overlay ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 0, class: R.value.overlay({ class: null == (o4 = i2.ui) ? void 0 : o4.overlay }) }, null, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(h), Wt.mergeProps({ "data-side": n2.side, class: R.value.content({ class: [!g2.default && i2.class, null == (r2 = i2.ui) ? void 0 : r2.content] }) }, $.value, { onAfterEnter: (e2) => b2("after:enter"), onAfterLeave: (e2) => b2("after:leave") }, Wt.toHandlers(w$1.value)), { default: Wt.withCtx(() => [g2.content && (n2.title || g2.title || n2.description || g2.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d$1), { key: 0 }, { default: Wt.withCtx(() => [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
          var o5, r3, a5;
          return [g2.header || n2.title || g2.title || n2.description || g2.description || i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o5 = i2.ui) ? void 0 : o5.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
            var o6, r4, a6;
            return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o6 = i2.ui) ? void 0 : o6.wrapper }) }, [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (r4 = i2.ui) ? void 0 : r4.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (a6 = i2.ui) ? void 0 : a6.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
              var t3;
              return [i2.close ? (Wt.openBlock(), Wt.createBlock(Ob, Wt.mergeProps({ key: 0, icon: n2.closeIcon || Wt.unref(V2).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(B2)("slideover.close") }, "object" == typeof i2.close ? i2.close : {}, { class: R.value.close({ class: null == (t3 = i2.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.createVNode("div", { class: R.value.body({ class: null == (r3 = i2.ui) ? void 0 : r3.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2), g2.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.footer({ class: null == (a5 = i2.ui) ? void 0 : a5.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, 1040)];
      g2.default ? a4(pm.ssrRenderComponent(Wt.unref(b), { "as-child": "", class: i2.class }, { default: Wt.withCtx((l4, s2, n3, a5) => {
        if (!s2) return [Wt.renderSlot(t2.$slots, "default", { open: o3 })];
        pm.ssrRenderSlot(t2.$slots, "default", { open: o3 }, null, s2, n3, a5);
      }), _: 2 }, c2, d2)) : a4("<!---->"), a4(pm.ssrRenderComponent(Wt.unref(P), Wt.unref(_2), { default: Wt.withCtx((o4, a5, c3, d3) => {
        var u2, p2, m2, f2;
        if (!a5) return [n2.overlay ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 0, class: R.value.overlay({ class: null == (m2 = i2.ui) ? void 0 : m2.overlay }) }, null, 8, ["class"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(h), Wt.mergeProps({ "data-side": n2.side, class: R.value.content({ class: [!g2.default && i2.class, null == (f2 = i2.ui) ? void 0 : f2.content] }) }, $.value, { onAfterEnter: (e2) => b2("after:enter"), onAfterLeave: (e2) => b2("after:leave") }, Wt.toHandlers(w$1.value)), { default: Wt.withCtx(() => [g2.content && (n2.title || g2.title || n2.description || g2.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d$1), { key: 0 }, { default: Wt.withCtx(() => [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
          var o5, r2, a6;
          return [g2.header || n2.title || g2.title || n2.description || g2.description || i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o5 = i2.ui) ? void 0 : o5.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
            var o6, r3, a7;
            return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o6 = i2.ui) ? void 0 : o6.wrapper }) }, [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (r3 = i2.ui) ? void 0 : r3.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (a7 = i2.ui) ? void 0 : a7.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
              var t3;
              return [i2.close ? (Wt.openBlock(), Wt.createBlock(Ob, Wt.mergeProps({ key: 0, icon: n2.closeIcon || Wt.unref(V2).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(B2)("slideover.close") }, "object" == typeof i2.close ? i2.close : {}, { class: R.value.close({ class: null == (t3 = i2.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
          })], 2)) : Wt.createCommentVNode("", true), Wt.createVNode("div", { class: R.value.body({ class: null == (r2 = i2.ui) ? void 0 : r2.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2), g2.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.footer({ class: null == (a6 = i2.ui) ? void 0 : a6.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])];
        n2.overlay ? a5(pm.ssrRenderComponent(Wt.unref(w), { class: R.value.overlay({ class: null == (u2 = i2.ui) ? void 0 : u2.overlay }) }, null, c3, d3)) : a5("<!---->"), a5(pm.ssrRenderComponent(Wt.unref(h), Wt.mergeProps({ "data-side": n2.side, class: R.value.content({ class: [!g2.default && i2.class, null == (p2 = i2.ui) ? void 0 : p2.content] }) }, $.value, { onAfterEnter: (e2) => b2("after:enter"), onAfterLeave: (e2) => b2("after:leave") }, Wt.toHandlers(w$1.value)), { default: Wt.withCtx((o5, a6, c4, d4) => {
          if (!a6) return [g2.content && (n2.title || g2.title || n2.description || g2.description) ? (Wt.openBlock(), Wt.createBlock(Wt.unref(d$1), { key: 0 }, { default: Wt.withCtx(() => [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)]), _: 3 })) : Wt.createCommentVNode("", true), Wt.renderSlot(t2.$slots, "content", { close: l3 }, () => {
            var o6, r2, a7;
            return [g2.header || n2.title || g2.title || n2.description || g2.description || i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: R.value.header({ class: null == (o6 = i2.ui) ? void 0 : o6.header }) }, [Wt.renderSlot(t2.$slots, "header", { close: l3 }, () => {
              var o7, r3, a8;
              return [Wt.createVNode("div", { class: R.value.wrapper({ class: null == (o7 = i2.ui) ? void 0 : o7.wrapper }) }, [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0, class: R.value.title({ class: null == (r3 = i2.ui) ? void 0 : r3.title }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1, class: R.value.description({ class: null == (a8 = i2.ui) ? void 0 : a8.description }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true)], 2), Wt.renderSlot(t2.$slots, "actions"), i2.close || g2.close ? (Wt.openBlock(), Wt.createBlock(Wt.unref(C), { key: 0, "as-child": "" }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                var t3;
                return [i2.close ? (Wt.openBlock(), Wt.createBlock(Ob, Wt.mergeProps({ key: 0, icon: n2.closeIcon || Wt.unref(V2).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(B2)("slideover.close") }, "object" == typeof i2.close ? i2.close : {}, { class: R.value.close({ class: null == (t3 = i2.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
              })]), _: 2 }, 1024)) : Wt.createCommentVNode("", true)];
            })], 2)) : Wt.createCommentVNode("", true), Wt.createVNode("div", { class: R.value.body({ class: null == (r2 = i2.ui) ? void 0 : r2.body }) }, [Wt.renderSlot(t2.$slots, "body", { close: l3 })], 2), g2.footer ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: R.value.footer({ class: null == (a7 = i2.ui) ? void 0 : a7.footer }) }, [Wt.renderSlot(t2.$slots, "footer", { close: l3 })], 2)) : Wt.createCommentVNode("", true)];
          })];
          g2.content && (n2.title || g2.title || n2.description || g2.description) ? a6(pm.ssrRenderComponent(Wt.unref(d$1), null, { default: Wt.withCtx((o6, l4, s2, a7) => {
            if (!l4) return [n2.title || g2.title ? (Wt.openBlock(), Wt.createBlock(Wt.unref(D), { key: 0 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])]), _: 3 })) : Wt.createCommentVNode("", true), n2.description || g2.description ? (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: 1 }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])]), _: 3 })) : Wt.createCommentVNode("", true)];
            n2.title || g2.title ? l4(pm.ssrRenderComponent(Wt.unref(D), null, { default: Wt.withCtx((o7, l5, s3, a8) => {
              if (!l5) return [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])];
              pm.ssrRenderSlot(t2.$slots, "title", {}, () => {
                l5(`${pm.ssrInterpolate(n2.title)}`);
              }, l5, s3, a8);
            }), _: 2 }, s2, a7)) : l4("<!---->"), n2.description || g2.description ? l4(pm.ssrRenderComponent(Wt.unref(k), null, { default: Wt.withCtx((o7, l5, s3, a8) => {
              if (!l5) return [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])];
              pm.ssrRenderSlot(t2.$slots, "description", {}, () => {
                l5(`${pm.ssrInterpolate(n2.description)}`);
              }, l5, s3, a8);
            }), _: 2 }, s2, a7)) : l4("<!---->");
          }), _: 2 }, c4, d4)) : a6("<!---->"), pm.ssrRenderSlot(t2.$slots, "content", { close: l3 }, () => {
            var o6, u3, p3;
            g2.header || n2.title || g2.title || n2.description || g2.description || i2.close || g2.close ? (a6(`<div class="${pm.ssrRenderClass(R.value.header({ class: null == (o6 = i2.ui) ? void 0 : o6.header }))}"${d4}>`), pm.ssrRenderSlot(t2.$slots, "header", { close: l3 }, () => {
              var o7, u4, p4;
              a6(`<div class="${pm.ssrRenderClass(R.value.wrapper({ class: null == (o7 = i2.ui) ? void 0 : o7.wrapper }))}"${d4}>`), n2.title || g2.title ? a6(pm.ssrRenderComponent(Wt.unref(D), { class: R.value.title({ class: null == (u4 = i2.ui) ? void 0 : u4.title }) }, { default: Wt.withCtx((o8, l4, s2, a7) => {
                if (!l4) return [Wt.renderSlot(t2.$slots, "title", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.title), 1)])];
                pm.ssrRenderSlot(t2.$slots, "title", {}, () => {
                  l4(`${pm.ssrInterpolate(n2.title)}`);
                }, l4, s2, a7);
              }), _: 2 }, c4, d4)) : a6("<!---->"), n2.description || g2.description ? a6(pm.ssrRenderComponent(Wt.unref(k), { class: R.value.description({ class: null == (p4 = i2.ui) ? void 0 : p4.description }) }, { default: Wt.withCtx((o8, l4, s2, a7) => {
                if (!l4) return [Wt.renderSlot(t2.$slots, "description", {}, () => [Wt.createTextVNode(Wt.toDisplayString(n2.description), 1)])];
                pm.ssrRenderSlot(t2.$slots, "description", {}, () => {
                  l4(`${pm.ssrInterpolate(n2.description)}`);
                }, l4, s2, a7);
              }), _: 2 }, c4, d4)) : a6("<!---->"), a6("</div>"), pm.ssrRenderSlot(t2.$slots, "actions", {}, null, a6, c4, d4), i2.close || g2.close ? a6(pm.ssrRenderComponent(Wt.unref(C), { "as-child": "" }, { default: Wt.withCtx((o8, a7, c5, d5) => {
                if (!a7) return [Wt.renderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                  var t3;
                  return [i2.close ? (Wt.openBlock(), Wt.createBlock(Ob, Wt.mergeProps({ key: 0, icon: n2.closeIcon || Wt.unref(V2).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(B2)("slideover.close") }, "object" == typeof i2.close ? i2.close : {}, { class: R.value.close({ class: null == (t3 = i2.ui) ? void 0 : t3.close }) }), null, 16, ["icon", "aria-label", "class"])) : Wt.createCommentVNode("", true)];
                })];
                pm.ssrRenderSlot(t2.$slots, "close", { close: l3, ui: R.value }, () => {
                  var t3;
                  i2.close ? a7(pm.ssrRenderComponent(Ob, Wt.mergeProps({ icon: n2.closeIcon || Wt.unref(V2).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": Wt.unref(B2)("slideover.close") }, "object" == typeof i2.close ? i2.close : {}, { class: R.value.close({ class: null == (t3 = i2.ui) ? void 0 : t3.close }) }), null, c5, d5)) : a7("<!---->");
                }, a7, c5, d5);
              }), _: 2 }, c4, d4)) : a6("<!---->");
            }, a6, c4, d4), a6("</div>")) : a6("<!---->"), a6(`<div class="${pm.ssrRenderClass(R.value.body({ class: null == (u3 = i2.ui) ? void 0 : u3.body }))}"${d4}>`), pm.ssrRenderSlot(t2.$slots, "body", { close: l3 }, null, a6, c4, d4), a6("</div>"), g2.footer ? (a6(`<div class="${pm.ssrRenderClass(R.value.footer({ class: null == (p3 = i2.ui) ? void 0 : p3.footer }))}"${d4}>`), pm.ssrRenderSlot(t2.$slots, "footer", { close: l3 }, null, a6, c4, d4), a6("</div>")) : a6("<!---->");
          }, a6, c4, d4);
        }), _: 2 }, c3, d3));
      }), _: 2 }, c2, d2));
    }), _: 3 }, l2));
  };
} }, V = B.setup;
B.setup = (t2, o2) => {
  const l2 = Wt.useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue"), V ? V(t2, o2) : void 0;
};
const N = Wt.defineComponent({ __name: "HeaderPublic", __ssrInlineRender: true, setup(t2) {
  const o2 = Bs(), l2 = Fs(), c2 = ha();
  Wt.ref(false), Wt.ref(false), Wt.ref(false);
  const d2 = Wt.ref(false), u2 = [{ label: "Beranda", to: "/" }, { label: "Lowongan", to: "/lowongan" }, { label: "FAQ", to: "/faq" }], p2 = () => {
    "/" !== o2.path ? l2.push("/") : (void 0).scrollTo({ top: 0, behavior: "smooth" });
  }, m2 = (e2) => {
    d2.value = false, l2.push(e2);
  }, f2 = () => {
    l2.push("/"), d2.value = false;
  };
  return (t3, o3, l3, n2) => {
    const a2 = Ob, i2 = B, v2 = d, k2 = Wt.resolveComponent("UDivider");
    o3(`<div${pm.ssrRenderAttrs(n2)}><header class="sticky top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/80"><div class="max-w-7xl mx-auto"><nav class="px-6 py-4"><div class="flex items-center justify-between"><div class="flex items-center"><img${pm.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-32 object-contain mx-auto cursor-pointer"></div><div class="hidden lg:flex items-center space-x-2"><!--[-->`), pm.ssrRenderList(u2, (e2) => {
      o3(pm.ssrRenderComponent(a2, { key: e2.to, label: e2.label, onClick: (o4) => t3.$router.push(e2.to), color: "neutral", variant: "ghost", size: "lg" }, null, l3));
    }), o3("<!--]-->"), o3(pm.ssrRenderComponent(a2, { label: "Login", onClick: (e2) => t3.$router.push("/auth/login"), size: "lg", class: "border border-neutral-200 hover:border-neutral-300 px-8 rounded-2xl", color: "primary" }, null, l3)), o3('</div><div class="lg:hidden flex">'), o3(pm.ssrRenderComponent(a2, { icon: "i-mdi-menu", color: "neutral", variant: "ghost", onClick: (e2) => d2.value = true }, null, l3)), o3("</div>"), o3(pm.ssrRenderComponent(i2, { open: Wt.unref(d2), "onUpdate:open": (t4) => Wt.isRef(d2) ? d2.value = t4 : null }, { title: Wt.withCtx((e2, t4, o4, l4) => {
      if (!t4) return [];
    }), content: Wt.withCtx((o4, l4, s2, n3) => {
      if (!l4) return [Wt.createVNode(v2, { class: "flex flex-col flex-1 lg:hidden px-2" }, { default: Wt.withCtx(() => [Wt.createVNode("div", { class: "flex items-center justify-between mb-4" }, [Wt.createVNode("img", { src: s, alt: "Karir Traspac", class: "w-32 object-contain cursor-pointer", onClick: p2 }), Wt.createVNode(a2, { color: "neutral", variant: "ghost", icon: "i-mdi-close", class: "-my-1", onClick: (e2) => d2.value = false }, null, 8, ["onClick"])]), Wt.unref(c2).isAuthenticated ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "flex flex-col items-center justify-center h-full gap-4" }, [(Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, Wt.renderList(u2, (t4) => Wt.createVNode(a2, { key: t4.to, label: t4.label, onClick: (e2) => m2(t4.to), color: "neutral", variant: "ghost", size: "xl" }, null, 8, ["label", "onClick"])), 64)), Wt.createVNode(k2, { class: "my-4" }), Wt.createVNode(a2, { label: "Login", onClick: (e2) => t3.$router.push("/auth/login"), color: "neutral", variant: "outline", size: "xl", block: "" }, null, 8, ["onClick"]), Wt.createVNode(a2, { label: "Daftar", onClick: (e2) => t3.$router.push("/auth/register"), size: "xl", block: "" }, null, 8, ["onClick"])])), Wt.unref(c2).isAuthenticated ? (Wt.openBlock(), Wt.createBlock("div", { key: 1 }, [Wt.createVNode(a2, { label: "Dashboard", onClick: f2, color: "neutral", variant: "outline", size: "xl", block: "" })])) : Wt.createCommentVNode("", true)]), _: 1 })];
      l4(pm.ssrRenderComponent(v2, { class: "flex flex-col flex-1 lg:hidden px-2" }, { default: Wt.withCtx((o5, l5, s3, n4) => {
        if (!l5) return [Wt.createVNode("div", { class: "flex items-center justify-between mb-4" }, [Wt.createVNode("img", { src: s, alt: "Karir Traspac", class: "w-32 object-contain cursor-pointer", onClick: p2 }), Wt.createVNode(a2, { color: "neutral", variant: "ghost", icon: "i-mdi-close", class: "-my-1", onClick: (e2) => d2.value = false }, null, 8, ["onClick"])]), Wt.unref(c2).isAuthenticated ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "flex flex-col items-center justify-center h-full gap-4" }, [(Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, Wt.renderList(u2, (t4) => Wt.createVNode(a2, { key: t4.to, label: t4.label, onClick: (e2) => m2(t4.to), color: "neutral", variant: "ghost", size: "xl" }, null, 8, ["label", "onClick"])), 64)), Wt.createVNode(k2, { class: "my-4" }), Wt.createVNode(a2, { label: "Login", onClick: (e2) => t3.$router.push("/auth/login"), color: "neutral", variant: "outline", size: "xl", block: "" }, null, 8, ["onClick"]), Wt.createVNode(a2, { label: "Daftar", onClick: (e2) => t3.$router.push("/auth/register"), size: "xl", block: "" }, null, 8, ["onClick"])])), Wt.unref(c2).isAuthenticated ? (Wt.openBlock(), Wt.createBlock("div", { key: 1 }, [Wt.createVNode(a2, { label: "Dashboard", onClick: f2, color: "neutral", variant: "outline", size: "xl", block: "" })])) : Wt.createCommentVNode("", true)];
        l5(`<div class="flex items-center justify-between mb-4"${n4}><img${pm.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-32 object-contain cursor-pointer"${n4}>`), l5(pm.ssrRenderComponent(a2, { color: "neutral", variant: "ghost", icon: "i-mdi-close", class: "-my-1", onClick: (e2) => d2.value = false }, null, s3, n4)), l5("</div>"), Wt.unref(c2).isAuthenticated ? l5("<!---->") : (l5(`<div class="flex flex-col items-center justify-center h-full gap-4"${n4}><!--[-->`), pm.ssrRenderList(u2, (e2) => {
          l5(pm.ssrRenderComponent(a2, { key: e2.to, label: e2.label, onClick: (t4) => m2(e2.to), color: "neutral", variant: "ghost", size: "xl" }, null, s3, n4));
        }), l5("<!--]-->"), l5(pm.ssrRenderComponent(k2, { class: "my-4" }, null, s3, n4)), l5(pm.ssrRenderComponent(a2, { label: "Login", onClick: (e2) => t3.$router.push("/auth/login"), color: "neutral", variant: "outline", size: "xl", block: "" }, null, s3, n4)), l5(pm.ssrRenderComponent(a2, { label: "Daftar", onClick: (e2) => t3.$router.push("/auth/register"), size: "xl", block: "" }, null, s3, n4)), l5("</div>")), Wt.unref(c2).isAuthenticated ? (l5(`<div${n4}>`), l5(pm.ssrRenderComponent(a2, { label: "Dashboard", onClick: f2, color: "neutral", variant: "outline", size: "xl", block: "" }, null, s3, n4)), l5("</div>")) : l5("<!---->");
      }), _: 1 }, s2, n3));
    }), _: 1 }, l3)), o3("</div></nav></div></header></div>");
  };
} }), _ = N.setup;
N.setup = (t2, o2) => {
  const l2 = Wt.useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("components/common/layouts/HeaderPublic.vue"), _ ? _(t2, o2) : void 0;
};

export { N as default };
//# sourceMappingURL=HeaderPublic-BB0VCnCi.mjs.map

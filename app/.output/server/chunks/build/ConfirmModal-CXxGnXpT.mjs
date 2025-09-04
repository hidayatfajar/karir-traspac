import { C } from './Modal-CWyVpLPN.mjs';
import { v as Wt, s as om, c as hb, _ as kb } from './server.mjs';
import './useLocale-BepRiSpk.mjs';
import '../_/nitro.mjs';
import 'crypto-es';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import './usePortal-DzDMWCd7.mjs';
import './ConfigProvider-C3zU966T.mjs';
import './useForwardPropsEmits-DnSfSOTI.mjs';
import './DialogPortal-BClYAy6o.mjs';
import './utils-iLtTyP0t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
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

const n = { isOpen: Wt.ref(false), title: Wt.ref("Konfirmasi"), message: Wt.ref("Apakah Anda yakin?"), onConfirm: Wt.ref(() => {
}), onCancel: Wt.ref(() => {
}), customContent: Wt.ref(null) };
const a = Wt.defineComponent({ __name: "ConfirmModal", __ssrInlineRender: true, setup(a2) {
  const { isOpen: l2, title: i, message: d, onConfirm: m, onCancel: p, customContent: c } = { ...n};
  function u() {
    m.value(), l2.value = false;
  }
  function f() {
    p.value(), l2.value = false;
  }
  return (n2, a3, m2, p2) => {
    const v = C, x = hb, h = kb;
    a3(om.ssrRenderComponent(v, Wt.mergeProps({ open: Wt.unref(l2), "onUpdate:open": (e2) => Wt.isRef(l2) ? l2.value = e2 : null, ui: { content: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-visible" } }, p2), { content: Wt.withCtx((e2, r2, s2, n3) => {
      if (!r2) return [Wt.unref(c) ? (Wt.openBlock(), Wt.createBlock(Wt.resolveDynamicComponent(Wt.unref(c)({ handleConfirm: u, handleCancel: f })), { key: 1 })) : (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "relative p-3 text-center bg-default rounded-2xl shadow dark:bg-gray-800" }, [Wt.createVNode("div", { class: "absolute -top-15 left-1/2 -translate-x-1/2 bg-default p-1 rounded-full" }, [Wt.createVNode("div", { class: "bg- rounded-full size-26" }, [Wt.createVNode(x, { name: "line-md:close-circle-filled", class: "size-26 text-red-500 bg-white rounded-full", mode: "svg" })])]), Wt.createVNode("h3", { class: "mb-2 mt-10 text-lg font-semibold text-highlighted" }, Wt.toDisplayString(Wt.unref(i)), 1), Wt.createVNode("p", { class: "mb-3 text-toned" }, Wt.toDisplayString(Wt.unref(d)), 1), Wt.createVNode("hr"), Wt.createVNode("div", { class: "flex justify-center items-center space-x-6 mt-3" }, [Wt.createVNode(h, { label: "Batal", class: "w-24 flex items-center justify-center bg-slate-50 text-muted hover:bg-slate-100", color: "neutral", onClick: f }), Wt.createVNode(h, { label: "Konfirmasi", class: "w-24 flex items-center justify-center text-white", color: "error", onClick: u })])]))];
      Wt.unref(c) ? om.ssrRenderVNode(r2, Wt.createVNode(Wt.resolveDynamicComponent(Wt.unref(c)({ handleConfirm: u, handleCancel: f })), null, null), s2, n3) : (r2(`<div class="relative p-3 text-center bg-default rounded-2xl shadow dark:bg-gray-800"${n3}><div class="absolute -top-15 left-1/2 -translate-x-1/2 bg-default p-1 rounded-full"${n3}><div class="bg- rounded-full size-26"${n3}>`), r2(om.ssrRenderComponent(x, { name: "line-md:close-circle-filled", class: "size-26 text-red-500 bg-white rounded-full", mode: "svg" }, null, s2, n3)), r2(`</div></div><h3 class="mb-2 mt-10 text-lg font-semibold text-highlighted"${n3}>${om.ssrInterpolate(Wt.unref(i))}</h3><p class="mb-3 text-toned"${n3}>${om.ssrInterpolate(Wt.unref(d))}</p><hr${n3}><div class="flex justify-center items-center space-x-6 mt-3"${n3}>`), r2(om.ssrRenderComponent(h, { label: "Batal", class: "w-24 flex items-center justify-center bg-slate-50 text-muted hover:bg-slate-100", color: "neutral", onClick: f }, null, s2, n3)), r2(om.ssrRenderComponent(h, { label: "Konfirmasi", class: "w-24 flex items-center justify-center text-white", color: "error", onClick: u }, null, s2, n3)), r2("</div></div>"));
    }), _: 1 }, m2));
  };
} }), l = a.setup;
a.setup = (e2, o2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/common/modals/ConfirmModal.vue"), l ? l(e2, o2) : void 0;
};

export { a as default };
//# sourceMappingURL=ConfirmModal-CXxGnXpT.mjs.map

import { e as ee, h as he, f as fn } from './Popover-BMuqDJoE.mjs';
import { v as Wt, s as pm, _ as Ob } from './server.mjs';
import { c } from './Calendar-CRyWLZsX.mjs';
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
import './useForwardPropsEmits-nQnKVeqj.mjs';
import './usePrimitiveElement-BYq1qwBL.mjs';
import './ConfigProvider-BpvNyuo1.mjs';
import './useDirection-D0ypspbM.mjs';
import './useKbd-kRIii9yh.mjs';
import './PopperArrow-DHFd-Rdx.mjs';
import './useGraceArea-CDtlyMEy.mjs';
import './usePortal-B0EwXMSu.mjs';
import './Presence-D-YonBfP.mjs';
import './useBodyScrollLock-DClI9ev0.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
import './nullish-aV-w2MPu.mjs';
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
import './useLocale-DRieL7bI.mjs';

const i = Wt.defineComponent({ __name: "DatePicker", __ssrInlineRender: true, props: { modelValue: {}, placeholder: {}, disabled: { type: Boolean }, label: {} }, emits: ["update:modelValue"], setup(i2, { emit: d2 }) {
  const n = Wt.ref(false), p = i2, m = d2, u = Wt.computed({ get: () => ((t2) => {
    if (!t2) return null;
    const o2 = t2 instanceof Date ? t2 : new Date(t2);
    return he(o2, ee());
  })(p.modelValue), set: (t2) => {
    var a2;
    m("update:modelValue", t2 ? (a2 = t2.toDate(ee())) ? (a2 instanceof Date ? a2 : new Date(a2)).toISOString().split("T")[0] : null : null);
  } }), c$1 = (e2) => {
    if (!e2) return "";
    return (e2 instanceof Date ? e2 : new Date(e2)).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }, f = () => {
    m("update:modelValue", null), n.value = false;
  };
  return (e2, a2, i3, d3) => {
    const m2 = fn, b = Ob, x = c;
    a2(pm.ssrRenderComponent(m2, Wt.mergeProps({ open: Wt.unref(n), "onUpdate:open": (e3) => Wt.isRef(n) ? n.value = e3 : null, "default-open": false }, d3), { content: Wt.withCtx((e3, t2, a3, r2) => {
      if (!t2) return [Wt.createVNode("div", { class: "sm:divide-y divide-default" }, [Wt.createVNode("div", { class: "p-2" }, [Wt.createVNode(x, { modelValue: Wt.unref(u), "onUpdate:modelValue": (e4) => Wt.isRef(u) ? u.value = e4 : null, disabled: p.disabled, "number-of-months": 1 }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), Wt.createVNode("div", { class: "flex items-center justify-center p-2 gap-4" }, [Wt.createVNode(b, { disabled: p.disabled, color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: f }, null, 8, ["disabled"]), Wt.createVNode(b, { onClick: (e4) => n.value = false, disabled: p.disabled, label: "Simpan" }, null, 8, ["onClick", "disabled"])])])];
      t2(`<div class="sm:divide-y divide-default"${r2}><div class="p-2"${r2}>`), t2(pm.ssrRenderComponent(x, { modelValue: Wt.unref(u), "onUpdate:modelValue": (e4) => Wt.isRef(u) ? u.value = e4 : null, disabled: p.disabled, "number-of-months": 1 }, null, a3, r2)), t2(`</div><div class="flex items-center justify-center p-2 gap-4"${r2}>`), t2(pm.ssrRenderComponent(b, { disabled: p.disabled, color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: f }, null, a3, r2)), t2(pm.ssrRenderComponent(b, { onClick: (e4) => n.value = false, disabled: p.disabled, label: "Simpan" }, null, a3, r2)), t2("</div></div>");
    }), default: Wt.withCtx((t2, a3, r2, s2) => {
      if (!a3) return [Wt.createVNode(b, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx(() => [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || e2.modelValue ? "text-toned" : "text-dimmed"] }, [e2.modelValue ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(c$1(e2.modelValue)), 1)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)]), _: 1 })];
      a3(pm.ssrRenderComponent(b, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx((t3, a4, r3, s3) => {
        if (!a4) return [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || e2.modelValue ? "text-toned" : "text-dimmed"] }, [e2.modelValue ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(c$1(e2.modelValue)), 1)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)];
        a4(`<span class="${pm.ssrRenderClass([!p.placeholder && !p.label || e2.modelValue ? "text-toned" : "text-dimmed", "truncate"])}"${s3}>`), e2.modelValue ? a4(`<!--[-->${pm.ssrInterpolate(c$1(e2.modelValue))}<!--]-->`) : a4(`<!--[-->${pm.ssrInterpolate(p.placeholder || p.label || "Pilih Tanggal")}<!--]-->`), a4("</span>");
      }), _: 1 }, r2, s2));
    }), _: 1 }, i3));
  };
} }), d = i.setup;
i.setup = (e2, t2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/ui/DatePicker.vue"), d ? d(e2, t2) : void 0;
};

export { i as default };
//# sourceMappingURL=DatePicker-DgTbV6SS.mjs.map

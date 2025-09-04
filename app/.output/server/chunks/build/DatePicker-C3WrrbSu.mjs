import { i as i$1 } from './Popover-DOBuqdIH.mjs';
import { v as Wt, s as om, _ as kb } from './server.mjs';
import { c } from './Calendar-DESHLRds.mjs';
import { v as ve, O as Oe } from './index-KCESmdl8.mjs';
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
import './useLocale-BepRiSpk.mjs';
import './usePrimitiveElement-BqlHGOiE.mjs';
import './useKbd-kRIii9yh.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './Collection-CK0B56BN.mjs';
import './utils-iLtTyP0t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
import './useTypeahead-CXda91ln.mjs';
import './RovingFocusGroup-CPhnOram.mjs';
import './utils-B3GHb33t.mjs';
import './useArrowNavigation-Cic7byI7.mjs';
import './useGraceArea-B4Y81dwR.mjs';
import './nullish-aV-w2MPu.mjs';

const i = Wt.defineComponent({ __name: "DatePicker", __ssrInlineRender: true, props: { modelValue: {}, placeholder: {}, disabled: { type: Boolean }, label: {} }, emits: ["update:modelValue"], setup(i2, { emit: d2 }) {
  const n = Wt.ref(false), p = i2, m = d2, u = Wt.computed({ get: () => ((e2) => {
    if (!e2) return null;
    const t2 = e2 instanceof Date ? e2 : new Date(e2);
    return Oe(t2, ve());
  })(p.modelValue), set: (e2) => {
    var t2;
    m("update:modelValue", e2 ? (t2 = e2.toDate(ve())) ? (t2 instanceof Date ? t2 : new Date(t2)).toISOString().split("T")[0] : null : null);
  } }), c$1 = (e2) => {
    if (!e2) return "";
    return (e2 instanceof Date ? e2 : new Date(e2)).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }, f = () => {
    m("update:modelValue", null), n.value = false;
  };
  return (l2, s2, i3, d3) => {
    const m2 = i$1, x = kb, b = c;
    s2(om.ssrRenderComponent(m2, Wt.mergeProps({ open: Wt.unref(n), "onUpdate:open": (e2) => Wt.isRef(n) ? n.value = e2 : null, "default-open": false }, d3), { content: Wt.withCtx((e2, a2, r2, l3) => {
      if (!a2) return [Wt.createVNode("div", { class: "sm:divide-y divide-default" }, [Wt.createVNode("div", { class: "p-2" }, [Wt.createVNode(b, { modelValue: Wt.unref(u), "onUpdate:modelValue": (e3) => Wt.isRef(u) ? u.value = e3 : null, disabled: p.disabled, "number-of-months": 1 }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), Wt.createVNode("div", { class: "flex items-center justify-center p-2 gap-4" }, [Wt.createVNode(x, { disabled: p.disabled, color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: f }, null, 8, ["disabled"]), Wt.createVNode(x, { onClick: (e3) => n.value = false, disabled: p.disabled, label: "Simpan" }, null, 8, ["onClick", "disabled"])])])];
      a2(`<div class="sm:divide-y divide-default"${l3}><div class="p-2"${l3}>`), a2(om.ssrRenderComponent(b, { modelValue: Wt.unref(u), "onUpdate:modelValue": (e3) => Wt.isRef(u) ? u.value = e3 : null, disabled: p.disabled, "number-of-months": 1 }, null, r2, l3)), a2(`</div><div class="flex items-center justify-center p-2 gap-4"${l3}>`), a2(om.ssrRenderComponent(x, { disabled: p.disabled, color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: f }, null, r2, l3)), a2(om.ssrRenderComponent(x, { onClick: (e3) => n.value = false, disabled: p.disabled, label: "Simpan" }, null, r2, l3)), a2("</div></div>");
    }), default: Wt.withCtx((e2, a2, r2, s3) => {
      if (!a2) return [Wt.createVNode(x, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx(() => [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || l2.modelValue ? "text-toned" : "text-dimmed"] }, [l2.modelValue ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(c$1(l2.modelValue)), 1)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)]), _: 1 })];
      a2(om.ssrRenderComponent(x, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx((e3, a3, r3, s4) => {
        if (!a3) return [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || l2.modelValue ? "text-toned" : "text-dimmed"] }, [l2.modelValue ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(c$1(l2.modelValue)), 1)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)];
        a3(`<span class="${om.ssrRenderClass([!p.placeholder && !p.label || l2.modelValue ? "text-toned" : "text-dimmed", "truncate"])}"${s4}>`), l2.modelValue ? a3(`<!--[-->${om.ssrInterpolate(c$1(l2.modelValue))}<!--]-->`) : a3(`<!--[-->${om.ssrInterpolate(p.placeholder || p.label || "Pilih Tanggal")}<!--]-->`), a3("</span>");
      }), _: 1 }, r2, s3));
    }), _: 1 }, i3));
  };
} }), d = i.setup;
i.setup = (e2, o2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/ui/DatePicker.vue"), d ? d(e2, o2) : void 0;
};

export { i as default };
//# sourceMappingURL=DatePicker-C3WrrbSu.mjs.map

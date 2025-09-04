import { i as i$1 } from './Popover-DOBuqdIH.mjs';
import { v as Wt, s as om, _ as kb } from './server.mjs';
import { c } from './Calendar-DESHLRds.mjs';
import { v as ve, O as Oe, d as de } from './index-KCESmdl8.mjs';
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

const d = Wt.defineComponent({ __name: "DateRangePicker", __ssrInlineRender: true, props: { modelValue: {}, placeholder: {}, label: {} }, emits: ["update:modelValue"], setup(d2, { emit: i2 }) {
  const m = [{ label: "Last 7 days", days: 7 }, { label: "Last 14 days", days: 14 }, { label: "Last 30 days", days: 30 }, { label: "Last 3 months", months: 3 }, { label: "Last 6 months", months: 6 }, { label: "Last year", years: 1 }], u = Wt.ref(false), p = d2, c$1 = i2, x = (e2) => {
    if (!e2) return null;
    return (e2 instanceof Date ? e2 : new Date(e2)).toISOString().split("T")[0];
  }, V = (e2) => {
    if (!e2) return null;
    const t2 = e2 instanceof Date ? e2 : new Date(e2);
    return Oe(t2, ve());
  }, f = Wt.computed({ get: () => ({ start: V(p.modelValue.start), end: V(p.modelValue.end) }), set: (e2) => {
    c$1("update:modelValue", { start: e2.start ? x(e2.start.toDate(ve())) : null, end: e2.end ? x(e2.end.toDate(ve())) : null });
  } }), y = (e2) => {
    if (!e2) return "";
    return (e2 instanceof Date ? e2 : new Date(e2)).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }, h = (e2) => {
    const t2 = de(ve());
    let a2 = t2.copy();
    e2.days ? a2 = a2.subtract({ days: e2.days }) : e2.months ? a2 = a2.subtract({ months: e2.months }) : e2.years && (a2 = a2.subtract({ years: e2.years })), c$1("update:modelValue", { start: x(a2.toDate(ve())), end: x(t2.toDate(ve())) });
  }, b = (e2) => {
    if (!p.modelValue.start || !p.modelValue.end) return false;
    const t2 = de(ve());
    let a2 = t2.copy();
    e2.days ? a2 = a2.subtract({ days: e2.days }) : e2.months ? a2 = a2.subtract({ months: e2.months }) : e2.years && (a2 = a2.subtract({ years: e2.years }));
    const o2 = p.modelValue.start ? x(new Date(p.modelValue.start)) : null, l2 = p.modelValue.end ? x(new Date(p.modelValue.end)) : null, s2 = x(a2.toDate(ve())), d3 = x(t2.toDate(ve()));
    return o2 === s2 && l2 === d3;
  }, k = () => {
    c$1("update:modelValue", { start: null, end: null }), u.value = false;
  };
  return (r2, s2, n2, d3) => {
    const i3 = i$1, c2 = kb, x2 = c;
    s2(om.ssrRenderComponent(i3, Wt.mergeProps({ open: Wt.unref(u), "onUpdate:open": (e2) => Wt.isRef(u) ? u.value = e2 : null }, d3), { content: Wt.withCtx((e2, o2, l2, r3) => {
      if (!o2) return [Wt.createVNode("div", { class: "sm:divide-y divide-default" }, [Wt.createVNode("div", { class: "flex items-stretch sm:divide-x divide-default" }, [Wt.createVNode("div", { class: "hidden sm:flex flex-col justify-center" }, [(Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, Wt.renderList(m, (e3, a2) => Wt.createVNode(c2, { key: a2, label: e3.label, color: "neutral", variant: "ghost", class: ["rounded-none px-4", [b(e3) ? "bg-accented" : "hover:bg-accented/50"]], truncate: "", onClick: (t2) => h(e3) }, null, 8, ["label", "class", "onClick"])), 64))]), Wt.createVNode(x2, { modelValue: Wt.unref(f), "onUpdate:modelValue": (e3) => Wt.isRef(f) ? f.value = e3 : null, class: "p-2", "number-of-months": 2, range: "" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), Wt.createVNode("div", { class: "flex items-center justify-center p-2 gap-4" }, [Wt.createVNode(c2, { color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: k }), Wt.createVNode(c2, { onClick: (e3) => u.value = false, label: "Simpan" }, null, 8, ["onClick"])])])];
      o2(`<div class="sm:divide-y divide-default"${r3}><div class="flex items-stretch sm:divide-x divide-default"${r3}><div class="hidden sm:flex flex-col justify-center"${r3}><!--[-->`), om.ssrRenderList(m, (e3, t2) => {
        o2(om.ssrRenderComponent(c2, { key: t2, label: e3.label, color: "neutral", variant: "ghost", class: ["rounded-none px-4", [b(e3) ? "bg-accented" : "hover:bg-accented/50"]], truncate: "", onClick: (t3) => h(e3) }, null, l2, r3));
      }), o2("<!--]--></div>"), o2(om.ssrRenderComponent(x2, { modelValue: Wt.unref(f), "onUpdate:modelValue": (e3) => Wt.isRef(f) ? f.value = e3 : null, class: "p-2", "number-of-months": 2, range: "" }, null, l2, r3)), o2(`</div><div class="flex items-center justify-center p-2 gap-4"${r3}>`), o2(om.ssrRenderComponent(c2, { color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: k }, null, l2, r3)), o2(om.ssrRenderComponent(c2, { onClick: (e3) => u.value = false, label: "Simpan" }, null, l2, r3)), o2("</div></div>");
    }), default: Wt.withCtx((e2, o2, l2, s3) => {
      if (!o2) return [Wt.createVNode(c2, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx(() => [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || p.modelValue.end && p.modelValue.start ? "text-toned" : "text-dimmed"] }, [r2.modelValue.start || r2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(y(r2.modelValue.start)) + " ", 1), r2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(" - " + Wt.toDisplayString(y(r2.modelValue.end)), 1)], 64)) : Wt.createCommentVNode("", true)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)]), _: 1 })];
      o2(om.ssrRenderComponent(c2, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx((e3, o3, l3, s4) => {
        if (!o3) return [Wt.createVNode("span", { class: ["truncate", !p.placeholder && !p.label || p.modelValue.end && p.modelValue.start ? "text-toned" : "text-dimmed"] }, [r2.modelValue.start || r2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(y(r2.modelValue.start)) + " ", 1), r2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(" - " + Wt.toDisplayString(y(r2.modelValue.end)), 1)], 64)) : Wt.createCommentVNode("", true)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(p.placeholder || p.label || "Pilih Tanggal"), 1)], 64))], 2)];
        o3(`<span class="${om.ssrRenderClass([!p.placeholder && !p.label || p.modelValue.end && p.modelValue.start ? "text-toned" : "text-dimmed", "truncate"])}"${s4}>`), r2.modelValue.start || r2.modelValue.end ? (o3(`<!--[-->${om.ssrInterpolate(y(r2.modelValue.start))} `), r2.modelValue.end ? o3(`<!--[--> - ${om.ssrInterpolate(y(r2.modelValue.end))}<!--]-->`) : o3("<!---->"), o3("<!--]-->")) : o3(`<!--[-->${om.ssrInterpolate(p.placeholder || p.label || "Pilih Tanggal")}<!--]-->`), o3("</span>");
      }), _: 1 }, l2, s3));
    }), _: 1 }, n2));
  };
} }), i = d.setup;
d.setup = (e2, a2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/ui/DateRangePicker.vue"), i ? i(e2, a2) : void 0;
};

export { d as default };
//# sourceMappingURL=DateRangePicker-CCT9Y1G8.mjs.map

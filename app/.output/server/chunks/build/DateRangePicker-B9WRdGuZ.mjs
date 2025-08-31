import { e as ee, f as fn, h as he, j } from './Popover-BMuqDJoE.mjs';
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

const d = Wt.defineComponent({ __name: "DateRangePicker", __ssrInlineRender: true, props: { modelValue: {}, placeholder: {}, label: {} }, emits: ["update:modelValue"], setup(d2, { emit: i2 }) {
  const m = [{ label: "Last 7 days", days: 7 }, { label: "Last 14 days", days: 14 }, { label: "Last 30 days", days: 30 }, { label: "Last 3 months", months: 3 }, { label: "Last 6 months", months: 6 }, { label: "Last year", years: 1 }], u = Wt.ref(false), c$1 = d2, p = i2, x = (e2) => {
    if (!e2) return null;
    return (e2 instanceof Date ? e2 : new Date(e2)).toISOString().split("T")[0];
  }, V = (t2) => {
    if (!t2) return null;
    const l2 = t2 instanceof Date ? t2 : new Date(t2);
    return he(l2, ee());
  }, f = Wt.computed({ get: () => ({ start: V(c$1.modelValue.start), end: V(c$1.modelValue.end) }), set: (t2) => {
    p("update:modelValue", { start: t2.start ? x(t2.start.toDate(ee())) : null, end: t2.end ? x(t2.end.toDate(ee())) : null });
  } }), b = (e2) => {
    if (!e2) return "";
    return (e2 instanceof Date ? e2 : new Date(e2)).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }, y = (t2) => {
    const a2 = j(ee());
    let o2 = a2.copy();
    t2.days ? o2 = o2.subtract({ days: t2.days }) : t2.months ? o2 = o2.subtract({ months: t2.months }) : t2.years && (o2 = o2.subtract({ years: t2.years })), p("update:modelValue", { start: x(o2.toDate(ee())), end: x(a2.toDate(ee())) });
  }, h = (t2) => {
    if (!c$1.modelValue.start || !c$1.modelValue.end) return false;
    const a2 = j(ee());
    let o2 = a2.copy();
    t2.days ? o2 = o2.subtract({ days: t2.days }) : t2.months ? o2 = o2.subtract({ months: t2.months }) : t2.years && (o2 = o2.subtract({ years: t2.years }));
    const r2 = c$1.modelValue.start ? x(new Date(c$1.modelValue.start)) : null, s2 = c$1.modelValue.end ? x(new Date(c$1.modelValue.end)) : null, n2 = x(o2.toDate(ee())), d3 = x(a2.toDate(ee()));
    return r2 === n2 && s2 === d3;
  }, k = () => {
    p("update:modelValue", { start: null, end: null }), u.value = false;
  };
  return (e2, a2, l2, d3) => {
    const i3 = fn, p2 = Ob, x2 = c;
    a2(pm.ssrRenderComponent(i3, Wt.mergeProps({ open: Wt.unref(u), "onUpdate:open": (e3) => Wt.isRef(u) ? u.value = e3 : null }, d3), { content: Wt.withCtx((e3, t2, a3, l3) => {
      if (!t2) return [Wt.createVNode("div", { class: "sm:divide-y divide-default" }, [Wt.createVNode("div", { class: "flex items-stretch sm:divide-x divide-default" }, [Wt.createVNode("div", { class: "hidden sm:flex flex-col justify-center" }, [(Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, Wt.renderList(m, (e4, t3) => Wt.createVNode(p2, { key: t3, label: e4.label, color: "neutral", variant: "ghost", class: ["rounded-none px-4", [h(e4) ? "bg-accented" : "hover:bg-accented/50"]], truncate: "", onClick: (t4) => y(e4) }, null, 8, ["label", "class", "onClick"])), 64))]), Wt.createVNode(x2, { modelValue: Wt.unref(f), "onUpdate:modelValue": (e4) => Wt.isRef(f) ? f.value = e4 : null, class: "p-2", "number-of-months": 2, range: "" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), Wt.createVNode("div", { class: "flex items-center justify-center p-2 gap-4" }, [Wt.createVNode(p2, { color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: k }), Wt.createVNode(p2, { onClick: (e4) => u.value = false, label: "Simpan" }, null, 8, ["onClick"])])])];
      t2(`<div class="sm:divide-y divide-default"${l3}><div class="flex items-stretch sm:divide-x divide-default"${l3}><div class="hidden sm:flex flex-col justify-center"${l3}><!--[-->`), pm.ssrRenderList(m, (e4, o2) => {
        t2(pm.ssrRenderComponent(p2, { key: o2, label: e4.label, color: "neutral", variant: "ghost", class: ["rounded-none px-4", [h(e4) ? "bg-accented" : "hover:bg-accented/50"]], truncate: "", onClick: (t3) => y(e4) }, null, a3, l3));
      }), t2("<!--]--></div>"), t2(pm.ssrRenderComponent(x2, { modelValue: Wt.unref(f), "onUpdate:modelValue": (e4) => Wt.isRef(f) ? f.value = e4 : null, class: "p-2", "number-of-months": 2, range: "" }, null, a3, l3)), t2(`</div><div class="flex items-center justify-center p-2 gap-4"${l3}>`), t2(pm.ssrRenderComponent(p2, { color: "neutral", variant: "subtle", class: "px-4", label: "Reset", onClick: k }, null, a3, l3)), t2(pm.ssrRenderComponent(p2, { onClick: (e4) => u.value = false, label: "Simpan" }, null, a3, l3)), t2("</div></div>");
    }), default: Wt.withCtx((t2, a3, l3, s2) => {
      if (!a3) return [Wt.createVNode(p2, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx(() => [Wt.createVNode("span", { class: ["truncate", !c$1.placeholder && !c$1.label || c$1.modelValue.end && c$1.modelValue.start ? "text-toned" : "text-dimmed"] }, [e2.modelValue.start || e2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(b(e2.modelValue.start)) + " ", 1), e2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(" - " + Wt.toDisplayString(b(e2.modelValue.end)), 1)], 64)) : Wt.createCommentVNode("", true)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(c$1.placeholder || c$1.label || "Pilih Tanggal"), 1)], 64))], 2)]), _: 1 })];
      a3(pm.ssrRenderComponent(p2, { color: "neutral", variant: "subtle", icon: "i-lucide-calendar", class: "!bg-default" }, { default: Wt.withCtx((t3, a4, l4, s3) => {
        if (!a4) return [Wt.createVNode("span", { class: ["truncate", !c$1.placeholder && !c$1.label || c$1.modelValue.end && c$1.modelValue.start ? "text-toned" : "text-dimmed"] }, [e2.modelValue.start || e2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(Wt.toDisplayString(b(e2.modelValue.start)) + " ", 1), e2.modelValue.end ? (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 0 }, [Wt.createTextVNode(" - " + Wt.toDisplayString(b(e2.modelValue.end)), 1)], 64)) : Wt.createCommentVNode("", true)], 64)) : (Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: 1 }, [Wt.createTextVNode(Wt.toDisplayString(c$1.placeholder || c$1.label || "Pilih Tanggal"), 1)], 64))], 2)];
        a4(`<span class="${pm.ssrRenderClass([!c$1.placeholder && !c$1.label || c$1.modelValue.end && c$1.modelValue.start ? "text-toned" : "text-dimmed", "truncate"])}"${s3}>`), e2.modelValue.start || e2.modelValue.end ? (a4(`<!--[-->${pm.ssrInterpolate(b(e2.modelValue.start))} `), e2.modelValue.end ? a4(`<!--[--> - ${pm.ssrInterpolate(b(e2.modelValue.end))}<!--]-->`) : a4("<!---->"), a4("<!--]-->")) : a4(`<!--[-->${pm.ssrInterpolate(c$1.placeholder || c$1.label || "Pilih Tanggal")}<!--]-->`), a4("</span>");
      }), _: 1 }, l3, s2));
    }), _: 1 }, l2));
  };
} }), i = d.setup;
d.setup = (e2, t2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/ui/DateRangePicker.vue"), i ? i(e2, t2) : void 0;
};

export { d as default };
//# sourceMappingURL=DateRangePicker-B9WRdGuZ.mjs.map

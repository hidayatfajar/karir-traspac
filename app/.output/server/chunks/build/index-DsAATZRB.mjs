import { d } from './Card-DDyQTkQA.mjs';
import { v as Wt, s as om, c as hb, _ as kb, d as Sb } from './server.mjs';
import { c } from './Input-BTq7Ekjb.mjs';
import { i } from './Popover-DOBuqdIH.mjs';
import { _ as _e } from './Select-DbdRKll6.mjs';
import { u } from './Badge-DJV5kyds.mjs';
import { u as ue } from './Table-C3yOWgeJ.mjs';
import { y } from './Progress-BetH7UXp.mjs';
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
import './index-KCESmdl8.mjs';
import './useForwardPropsEmits-DnSfSOTI.mjs';
import './usePrimitiveElement-BqlHGOiE.mjs';
import './ConfigProvider-C3zU966T.mjs';
import './useKbd-kRIii9yh.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './Collection-CK0B56BN.mjs';
import './utils-iLtTyP0t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
import './useTypeahead-CXda91ln.mjs';
import './usePortal-DzDMWCd7.mjs';
import './RovingFocusGroup-CPhnOram.mjs';
import './utils-B3GHb33t.mjs';
import './useArrowNavigation-Cic7byI7.mjs';
import './useGraceArea-B4Y81dwR.mjs';
import './nullish-aV-w2MPu.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './useFormControl-BKZlrIrW.mjs';
import './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
import './useLocale-BepRiSpk.mjs';

const p = { __name: "index", __ssrInlineRender: true, setup(p2) {
  const x2 = Wt.ref("card"), u$1 = Wt.ref(false);
  Wt.ref(false);
  const g = Wt.ref([{ name: "Screening", count: 28, color: "blue", candidates: [{ name: "Taylor Wilson", role: "Frontend Dev", time: "5d ago", status: "Pending", statusColor: "yellow", action: "Schedule" }, { name: "Casey Lee", role: "Product Manager", time: "3d ago", status: "Scheduled", statusColor: "green", action: "Details" }] }, { name: "Interview", count: 15, color: "purple", candidates: [{ name: "Jordan Park", role: "Backend Eng", time: "Today", status: "2:00 PM", statusColor: "blue", action: "Feedback" }] }, { name: "Offer", count: 5, color: "green", candidates: [{ name: "Morgan Taylor", role: "DevOps Eng", time: "2d ago", status: "Pending", statusColor: "yellow", action: "Send Offer" }] }]), v = [{ key: "candidate", label: "Candidate" }, { key: "position", label: "Position" }, { key: "stage", label: "Stage" }, { key: "lastUpdate", label: "Last Update" }, { key: "actions", label: "Actions" }], y$1 = [{ name: "Taylor Wilson", email: "taylor.w@example.com", position: "Frontend Developer", stage: "Screening", stageColor: "blue", lastUpdate: "1 day ago" }, { name: "Jordan Park", email: "jordan.p@example.com", position: "Backend Engineer", stage: "Interview", stageColor: "purple", lastUpdate: "Today, 2:00 PM" }];
  return (p3, f, b, h) => {
    const k = d, N = hb, V = kb, w = c, C = i, $ = _e, j = u, R = ue, D = Sb, _ = y;
    f(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen bg-gray-50 font-sans text-gray-800 dark:bg-gray-900" }, h))}><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">`), f(om.ssrRenderComponent(k, null, { default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, " Total Candidates "), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, " 142 ")]), Wt.createVNode("div", { class: "rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400" }, [Wt.createVNode(N, { name: "i-heroicons-users", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-green-600 dark:text-green-400" }, " +12% from last month ")];
      r2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}> Total Candidates </p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}> 142 </h3></div><div class="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"${o2}>`), r2(om.ssrRenderComponent(N, { name: "i-heroicons-users", class: "h-6 w-6" }, null, s2, o2)), r2(`</div></div><p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400"${o2}> +12% from last month </p>`);
    }), _: 1 }, b)), f(om.ssrRenderComponent(k, null, { default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, " Open Positions "), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, " 24 ")]), Wt.createVNode("div", { class: "rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400" }, [Wt.createVNode(N, { name: "i-heroicons-briefcase", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-red-600 dark:text-red-400" }, " -3 from last week ")];
      r2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}> Open Positions </p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}> 24 </h3></div><div class="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400"${o2}>`), r2(om.ssrRenderComponent(N, { name: "i-heroicons-briefcase", class: "h-6 w-6" }, null, s2, o2)), r2(`</div></div><p class="mt-2 text-xs font-medium text-red-600 dark:text-red-400"${o2}> -3 from last week </p>`);
    }), _: 1 }, b)), f(om.ssrRenderComponent(k, null, { default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, " Interviews Today "), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, " 7 ")]), Wt.createVNode("div", { class: "rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400" }, [Wt.createVNode(N, { name: "i-heroicons-calendar-days", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-gray-500 dark:text-gray-400" }, " 2 completed ")];
      r2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}> Interviews Today </p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}> 7 </h3></div><div class="rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400"${o2}>`), r2(om.ssrRenderComponent(N, { name: "i-heroicons-calendar-days", class: "h-6 w-6" }, null, s2, o2)), r2(`</div></div><p class="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400"${o2}> 2 completed </p>`);
    }), _: 1 }, b)), f(om.ssrRenderComponent(k, null, { default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, " Hiring Rate "), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, " 68% ")]), Wt.createVNode("div", { class: "rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400" }, [Wt.createVNode(N, { name: "i-heroicons-chart-bar", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-green-600 dark:text-green-400" }, " +5% from last quarter ")];
      r2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}> Hiring Rate </p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}> 68% </h3></div><div class="rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"${o2}>`), r2(om.ssrRenderComponent(N, { name: "i-heroicons-chart-bar", class: "h-6 w-6" }, null, s2, o2)), r2(`</div></div><p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400"${o2}> +5% from last quarter </p>`);
    }), _: 1 }, b)), f("</div>"), f(om.ssrRenderComponent(k, { ui: { body: { padding: "p-4" } } }, { default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4" }, [Wt.createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [Wt.createVNode(V, { label: "All Candidates" }), Wt.createVNode(V, { label: "Screening", variant: "outline" }), Wt.createVNode(V, { label: "Interview", variant: "outline" }), Wt.createVNode(V, { label: "Offer", variant: "outline" }), Wt.createVNode(V, { label: "Hired", variant: "outline" })]), Wt.createVNode("div", { class: "flex items-center gap-2" }, [Wt.createVNode(w, { icon: "i-heroicons-magnifying-glass", placeholder: "Search candidates..." }), Wt.createVNode(C, null, { panel: Wt.withCtx(() => [Wt.createVNode("div", { class: "p-4" }, [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Position"), Wt.createVNode($, { options: ["All Positions", "Frontend Developer"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Department"), Wt.createVNode($, { options: ["All Departments", "Engineering"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Date Applied"), Wt.createVNode($, { options: ["Any Time", "Last 7 days"] })]), Wt.createVNode("div", { class: "flex justify-end gap-2" }, [Wt.createVNode(V, { label: "Reset", variant: "ghost", color: "gray" }), Wt.createVNode(V, { label: "Apply" })])])])]), default: Wt.withCtx(() => [Wt.createVNode(V, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" })]), _: 1 })])])];
      r2(`<div class="flex flex-wrap items-center justify-between gap-4"${o2}><div class="flex flex-wrap items-center gap-2"${o2}>`), r2(om.ssrRenderComponent(V, { label: "All Candidates" }, null, s2, o2)), r2(om.ssrRenderComponent(V, { label: "Screening", variant: "outline" }, null, s2, o2)), r2(om.ssrRenderComponent(V, { label: "Interview", variant: "outline" }, null, s2, o2)), r2(om.ssrRenderComponent(V, { label: "Offer", variant: "outline" }, null, s2, o2)), r2(om.ssrRenderComponent(V, { label: "Hired", variant: "outline" }, null, s2, o2)), r2(`</div><div class="flex items-center gap-2"${o2}>`), r2(om.ssrRenderComponent(w, { icon: "i-heroicons-magnifying-glass", placeholder: "Search candidates..." }, null, s2, o2)), r2(om.ssrRenderComponent(C, null, { panel: Wt.withCtx((e3, r3, s3, o3) => {
        if (!r3) return [Wt.createVNode("div", { class: "p-4" }, [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Position"), Wt.createVNode($, { options: ["All Positions", "Frontend Developer"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Department"), Wt.createVNode($, { options: ["All Departments", "Engineering"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Date Applied"), Wt.createVNode($, { options: ["Any Time", "Last 7 days"] })]), Wt.createVNode("div", { class: "flex justify-end gap-2" }, [Wt.createVNode(V, { label: "Reset", variant: "ghost", color: "gray" }), Wt.createVNode(V, { label: "Apply" })])])])];
        r3(`<div class="p-4"${o3}><div class="space-y-4"${o3}><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Position</label>`), r3(om.ssrRenderComponent($, { options: ["All Positions", "Frontend Developer"] }, null, s3, o3)), r3(`</div><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Department</label>`), r3(om.ssrRenderComponent($, { options: ["All Departments", "Engineering"] }, null, s3, o3)), r3(`</div><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Date Applied</label>`), r3(om.ssrRenderComponent($, { options: ["Any Time", "Last 7 days"] }, null, s3, o3)), r3(`</div><div class="flex justify-end gap-2"${o3}>`), r3(om.ssrRenderComponent(V, { label: "Reset", variant: "ghost", color: "gray" }, null, s3, o3)), r3(om.ssrRenderComponent(V, { label: "Apply" }, null, s3, o3)), r3("</div></div></div>");
      }), default: Wt.withCtx((e3, r3, s3, o3) => {
        if (!r3) return [Wt.createVNode(V, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" })];
        r3(om.ssrRenderComponent(V, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" }, null, s3, o3));
      }), _: 1 }, s2, o2)), r2("</div></div>");
    }), _: 1 }, b)), f('<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-2">'), f(om.ssrRenderComponent(k, null, { header: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, " Recruitment Pipeline "), Wt.createVNode("div", { class: "flex items-center space-x-2" }, [Wt.createVNode(V, { class: "justify-center", onClick: (e3) => x2.value = "card", variant: "card" === x2.value ? "solid" : "outline", icon: "i-material-symbols:cards", label: "Card" }, null, 8, ["onClick", "variant"]), Wt.createVNode(V, { class: "justify-center", onClick: (e3) => x2.value = "table", variant: "table" === x2.value ? "solid" : "outline", icon: "i-heroicons-table-cells", label: "Table" }, null, 8, ["onClick", "variant"])])])];
      r2(`<div class="flex items-center justify-between"${o2}><h2 class="text-lg font-semibold text-gray-800 dark:text-white"${o2}> Recruitment Pipeline </h2><div class="flex items-center space-x-2"${o2}>`), r2(om.ssrRenderComponent(V, { class: "justify-center", onClick: (e3) => x2.value = "card", variant: "card" === x2.value ? "solid" : "outline", icon: "i-material-symbols:cards", label: "Card" }, null, s2, o2)), r2(om.ssrRenderComponent(V, { class: "justify-center", onClick: (e3) => x2.value = "table", variant: "table" === x2.value ? "solid" : "outline", icon: "i-heroicons-table-cells", label: "Table" }, null, s2, o2)), r2("</div></div>");
    }), default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return ["card" === x2.value ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(g.value, (e3) => (Wt.openBlock(), Wt.createBlock("div", { key: e3.name, class: "min-h-[400px] rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50" }, [Wt.createVNode("div", { class: "mb-3 flex items-center justify-between" }, [Wt.createVNode("h3", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode(j, { color: e3.color, variant: "subtle" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.count), 1)]), _: 2 }, 1032, ["color"])]), Wt.createVNode("div", { class: "space-y-3" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(e3.candidates, (a2) => (Wt.openBlock(), Wt.createBlock(k, { key: a2.name, ui: { body: { padding: "p-3" }, ring: `ring-1 ring-inset ring-${e3.color}-400` } }, { default: Wt.withCtx(() => [Wt.createVNode("div", { class: "flex items-start justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h4", { class: "text-sm font-medium text-gray-800 dark:text-white" }, Wt.toDisplayString(a2.name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(a2.role), 1)]), Wt.createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(a2.time), 1)]), Wt.createVNode("div", { class: "mt-2 flex items-center justify-between" }, [Wt.createVNode(j, { color: a2.statusColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(a2.status), 1)]), _: 2 }, 1032, ["color"]), Wt.createVNode(V, { label: a2.action, variant: "link", size: "xs" }, null, 8, ["label"])])]), _: 2 }, 1032, ["ui"]))), 128))])]))), 128))])) : Wt.createCommentVNode("", true), "table" === x2.value ? (Wt.openBlock(), Wt.createBlock("div", { key: 1 }, [Wt.createVNode(R, { rows: y$1, columns: v }, { "candidate-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(D, { alt: e3.name.substring(0, 2), size: "sm" }, null, 8, ["alt"]), Wt.createVNode("div", { class: "ml-3" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(e3.email), 1)])])]), "stage-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode(j, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)]), _: 2 }, 1032, ["color"])]), "actions-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode(V, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }), Wt.createVNode(V, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" })]), _: 1 })])) : Wt.createCommentVNode("", true)];
      "card" === x2.value ? (r2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-3"${o2}><!--[-->`), om.ssrRenderList(g.value, (e3) => {
        r2(`<div class="min-h-[400px] rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50"${o2}><div class="mb-3 flex items-center justify-between"${o2}><h3 class="text-sm font-medium text-gray-700 dark:text-gray-200"${o2}>${om.ssrInterpolate(e3.name)}</h3>`), r2(om.ssrRenderComponent(j, { color: e3.color, variant: "subtle" }, { default: Wt.withCtx((r3, s3, o3, l2) => {
          if (!s3) return [Wt.createTextVNode(Wt.toDisplayString(e3.count), 1)];
          s3(`${om.ssrInterpolate(e3.count)}`);
        }), _: 2 }, s2, o2)), r2(`</div><div class="space-y-3"${o2}><!--[-->`), om.ssrRenderList(e3.candidates, (l2) => {
          r2(om.ssrRenderComponent(k, { key: l2.name, ui: { body: { padding: "p-3" }, ring: `ring-1 ring-inset ring-${e3.color}-400` } }, { default: Wt.withCtx((e4, r3, s3, o3) => {
            if (!r3) return [Wt.createVNode("div", { class: "flex items-start justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h4", { class: "text-sm font-medium text-gray-800 dark:text-white" }, Wt.toDisplayString(l2.name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(l2.role), 1)]), Wt.createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(l2.time), 1)]), Wt.createVNode("div", { class: "mt-2 flex items-center justify-between" }, [Wt.createVNode(j, { color: l2.statusColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(l2.status), 1)]), _: 2 }, 1032, ["color"]), Wt.createVNode(V, { label: l2.action, variant: "link", size: "xs" }, null, 8, ["label"])])];
            r3(`<div class="flex items-start justify-between"${o3}><div${o3}><h4 class="text-sm font-medium text-gray-800 dark:text-white"${o3}>${om.ssrInterpolate(l2.name)}</h4><p class="text-xs text-gray-500 dark:text-gray-400"${o3}>${om.ssrInterpolate(l2.role)}</p></div><span class="text-xs text-gray-500 dark:text-gray-400"${o3}>${om.ssrInterpolate(l2.time)}</span></div><div class="mt-2 flex items-center justify-between"${o3}>`), r3(om.ssrRenderComponent(j, { color: l2.statusColor, variant: "soft" }, { default: Wt.withCtx((e5, r4, s4, o4) => {
              if (!r4) return [Wt.createTextVNode(Wt.toDisplayString(l2.status), 1)];
              r4(`${om.ssrInterpolate(l2.status)}`);
            }), _: 2 }, s3, o3)), r3(om.ssrRenderComponent(V, { label: l2.action, variant: "link", size: "xs" }, null, s3, o3)), r3("</div>");
          }), _: 2 }, s2, o2));
        }), r2("<!--]--></div></div>");
      }), r2("<!--]--></div>")) : r2("<!---->"), "table" === x2.value ? (r2(`<div${o2}>`), r2(om.ssrRenderComponent(R, { rows: y$1, columns: v }, { "candidate-data": Wt.withCtx(({ row: e3 }, r3, s3, o3) => {
        if (!r3) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(D, { alt: e3.name.substring(0, 2), size: "sm" }, null, 8, ["alt"]), Wt.createVNode("div", { class: "ml-3" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(e3.email), 1)])])];
        r3(`<div class="flex items-center"${o3}>`), r3(om.ssrRenderComponent(D, { alt: e3.name.substring(0, 2), size: "sm" }, null, s3, o3)), r3(`<div class="ml-3"${o3}><p class="text-sm font-medium text-gray-900 dark:text-white"${o3}>${om.ssrInterpolate(e3.name)}</p><p class="text-sm text-gray-500 dark:text-gray-400"${o3}>${om.ssrInterpolate(e3.email)}</p></div></div>`);
      }), "stage-data": Wt.withCtx(({ row: e3 }, r3, s3, o3) => {
        if (!r3) return [Wt.createVNode(j, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)]), _: 2 }, 1032, ["color"])];
        r3(om.ssrRenderComponent(j, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx((r4, s4, o4, l2) => {
          if (!s4) return [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)];
          s4(`${om.ssrInterpolate(e3.stage)}`);
        }), _: 2 }, s3, o3));
      }), "actions-data": Wt.withCtx(({ row: e3 }, r3, s3, o3) => {
        if (!r3) return [Wt.createVNode(V, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }), Wt.createVNode(V, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" })];
        r3(om.ssrRenderComponent(V, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }, null, s3, o3)), r3(om.ssrRenderComponent(V, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" }, null, s3, o3));
      }), _: 1 }, s2, o2)), r2("</div>")) : r2("<!---->");
    }), _: 1 }, b)), f('</div><div class="space-y-6 lg:col-span-1">'), f(om.ssrRenderComponent(k, null, { header: Wt.withCtx((e2, a2, r2, s2) => {
      if (!a2) return [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, " Open Positions ")];
      a2(`<h2 class="text-lg font-semibold text-gray-800 dark:text-white"${s2}> Open Positions </h2>`);
    }), default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "space-y-3" }, [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h3", { class: "text-sm font-medium text-gray-800 dark:text-white" }, " Senior Frontend Dev "), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, " Engineering \u2022 5 applicants ")]), Wt.createVNode(j, { color: "green", variant: "subtle" }, { default: Wt.withCtx(() => [Wt.createTextVNode("Active")]), _: 1 })]), Wt.createVNode(V, { onClick: (e3) => u$1.value = true, icon: "i-heroicons-plus", label: "Create New Position", block: "", class: "mt-3" }, null, 8, ["onClick"])])];
      r2(`<div class="space-y-3"${o2}><div class="flex items-center justify-between"${o2}><div${o2}><h3 class="text-sm font-medium text-gray-800 dark:text-white"${o2}> Senior Frontend Dev </h3><p class="text-xs text-gray-500 dark:text-gray-400"${o2}> Engineering \u2022 5 applicants </p></div>`), r2(om.ssrRenderComponent(j, { color: "green", variant: "subtle" }, { default: Wt.withCtx((e3, a2, r3, s3) => {
        if (!a2) return [Wt.createTextVNode("Active")];
        a2("Active");
      }), _: 1 }, s2, o2)), r2("</div>"), r2(om.ssrRenderComponent(V, { onClick: (e3) => u$1.value = true, icon: "i-heroicons-plus", label: "Create New Position", block: "", class: "mt-3" }, null, s2, o2)), r2("</div>");
    }), _: 1 }, b)), f(om.ssrRenderComponent(k, null, { header: Wt.withCtx((e2, a2, r2, s2) => {
      if (!a2) return [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, " Q2 Hiring Goals ")];
      a2(`<h2 class="text-lg font-semibold text-gray-800 dark:text-white"${s2}> Q2 Hiring Goals </h2>`);
    }), default: Wt.withCtx((e2, r2, s2, o2) => {
      if (!r2) return [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("div", { class: "mb-1 flex justify-between text-sm" }, [Wt.createVNode("span", { class: "text-gray-700 dark:text-gray-200" }, "Engineering"), Wt.createVNode("span", { class: "font-medium text-gray-800 dark:text-white" }, "8/12")]), Wt.createVNode(_, { "model-value": "8", max: "12" })]), Wt.createVNode("div", null, [Wt.createVNode("div", { class: "mb-1 flex justify-between text-sm" }, [Wt.createVNode("span", { class: "text-gray-700 dark:text-gray-200" }, "Product"), Wt.createVNode("span", { class: "font-medium text-gray-800 dark:text-white" }, "3/5")]), Wt.createVNode(_, { "model-value": "3", max: "5", color: "green" })])])];
      r2(`<div class="space-y-4"${o2}><div${o2}><div class="mb-1 flex justify-between text-sm"${o2}><span class="text-gray-700 dark:text-gray-200"${o2}>Engineering</span><span class="font-medium text-gray-800 dark:text-white"${o2}>8/12</span></div>`), r2(om.ssrRenderComponent(_, { "model-value": "8", max: "12" }, null, s2, o2)), r2(`</div><div${o2}><div class="mb-1 flex justify-between text-sm"${o2}><span class="text-gray-700 dark:text-gray-200"${o2}>Product</span><span class="font-medium text-gray-800 dark:text-white"${o2}>3/5</span></div>`), r2(om.ssrRenderComponent(_, { "model-value": "3", max: "5", color: "green" }, null, s2, o2)), r2("</div></div>");
    }), _: 1 }, b)), f("</div></div></div></div>");
  };
} }, x = p.setup;
p.setup = (e2, a2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/human-resources/index.vue"), x ? x(e2, a2) : void 0;
};

export { p as default };
//# sourceMappingURL=index-DsAATZRB.mjs.map

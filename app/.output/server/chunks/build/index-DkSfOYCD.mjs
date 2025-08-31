import a from './Header-BM0DBDfh.mjs';
import { d } from './Card-DDyQTkQA.mjs';
import { v as Wt, s as pm, b as gb, _ as Ob, d as _b } from './server.mjs';
import { c } from './Input-B78WqLhZ.mjs';
import { f as fn } from './Popover-BMuqDJoE.mjs';
import { _ as _e } from './Select-5h5sLi6z.mjs';
import { u as u$1 } from './Badge-DbT1gGUe.mjs';
import { u as ue } from './Table-rUu09S0K.mjs';
import { y } from './Progress-CXK4L9f0.mjs';
import './logo-kt-C_l9s7Hp.mjs';
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
import './VisuallyHidden-CudQpOEQ.mjs';
import './Collection-B86A2tPF.mjs';
import './useTypeahead-BwB5DMSn.mjs';
import './utils-6y4URocx.mjs';
import './useLocale-DRieL7bI.mjs';

const x = { __name: "index", __ssrInlineRender: true, setup(x2) {
  const u2 = Wt.ref("card"), g = Wt.ref(false);
  Wt.ref(false);
  const v = Wt.ref([{ name: "Screening", count: 28, color: "blue", candidates: [{ name: "Taylor Wilson", role: "Frontend Dev", time: "5d ago", status: "Pending", statusColor: "yellow", action: "Schedule" }, { name: "Casey Lee", role: "Product Manager", time: "3d ago", status: "Scheduled", statusColor: "green", action: "Details" }] }, { name: "Interview", count: 15, color: "purple", candidates: [{ name: "Jordan Park", role: "Backend Eng", time: "Today", status: "2:00 PM", statusColor: "blue", action: "Feedback" }] }, { name: "Offer", count: 5, color: "green", candidates: [{ name: "Morgan Taylor", role: "DevOps Eng", time: "2d ago", status: "Pending", statusColor: "yellow", action: "Send Offer" }] }]), y$1 = [{ key: "candidate", label: "Candidate" }, { key: "position", label: "Position" }, { key: "stage", label: "Stage" }, { key: "lastUpdate", label: "Last Update" }, { key: "actions", label: "Actions" }], f = [{ name: "Taylor Wilson", email: "taylor.w@example.com", position: "Frontend Developer", stage: "Screening", stageColor: "blue", lastUpdate: "1 day ago" }, { name: "Jordan Park", email: "jordan.p@example.com", position: "Backend Engineer", stage: "Interview", stageColor: "purple", lastUpdate: "Today, 2:00 PM" }];
  return (x3, b, h, k) => {
    const N = a, V = d, w = gb, C = Ob, $ = c, j = fn, R = _e, D = u$1, _ = ue, S = _b, T = y;
    b("<!--[-->"), b(pm.ssrRenderComponent(N, null, null, h)), b('<div class="min-h-screen bg-gray-50 font-sans text-gray-800 dark:bg-gray-900"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">'), b(pm.ssrRenderComponent(V, null, { default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Total Candidates"), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, "142")]), Wt.createVNode("div", { class: "rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400" }, [Wt.createVNode(w, { name: "i-heroicons-users", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-green-600 dark:text-green-400" }, "+12% from last month")];
      t2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}>Total Candidates</p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}>142</h3></div><div class="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"${o2}>`), t2(pm.ssrRenderComponent(w, { name: "i-heroicons-users", class: "h-6 w-6" }, null, s2, o2)), t2(`</div></div><p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400"${o2}>+12% from last month</p>`);
    }), _: 1 }, h)), b(pm.ssrRenderComponent(V, null, { default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Open Positions"), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, "24")]), Wt.createVNode("div", { class: "rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400" }, [Wt.createVNode(w, { name: "i-heroicons-briefcase", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-red-600 dark:text-red-400" }, "-3 from last week")];
      t2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}>Open Positions</p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}>24</h3></div><div class="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400"${o2}>`), t2(pm.ssrRenderComponent(w, { name: "i-heroicons-briefcase", class: "h-6 w-6" }, null, s2, o2)), t2(`</div></div><p class="mt-2 text-xs font-medium text-red-600 dark:text-red-400"${o2}>-3 from last week</p>`);
    }), _: 1 }, h)), b(pm.ssrRenderComponent(V, null, { default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Interviews Today"), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, "7")]), Wt.createVNode("div", { class: "rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400" }, [Wt.createVNode(w, { name: "i-heroicons-calendar-days", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-gray-500 dark:text-gray-400" }, "2 completed")];
      t2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}>Interviews Today</p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}>7</h3></div><div class="rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400"${o2}>`), t2(pm.ssrRenderComponent(w, { name: "i-heroicons-calendar-days", class: "h-6 w-6" }, null, s2, o2)), t2(`</div></div><p class="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400"${o2}>2 completed</p>`);
    }), _: 1 }, h)), b(pm.ssrRenderComponent(V, null, { default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Hiring Rate"), Wt.createVNode("h3", { class: "text-2xl font-semibold text-gray-800 dark:text-white" }, "68%")]), Wt.createVNode("div", { class: "rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400" }, [Wt.createVNode(w, { name: "i-heroicons-chart-bar", class: "h-6 w-6" })])]), Wt.createVNode("p", { class: "mt-2 text-xs font-medium text-green-600 dark:text-green-400" }, "+5% from last quarter")];
      t2(`<div class="flex items-center justify-between"${o2}><div${o2}><p class="text-sm text-gray-500 dark:text-gray-400"${o2}>Hiring Rate</p><h3 class="text-2xl font-semibold text-gray-800 dark:text-white"${o2}>68%</h3></div><div class="rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"${o2}>`), t2(pm.ssrRenderComponent(w, { name: "i-heroicons-chart-bar", class: "h-6 w-6" }, null, s2, o2)), t2(`</div></div><p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400"${o2}>+5% from last quarter</p>`);
    }), _: 1 }, h)), b("</div>"), b(pm.ssrRenderComponent(V, { ui: { body: { padding: "p-4" } } }, { default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4" }, [Wt.createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [Wt.createVNode(C, { label: "All Candidates" }), Wt.createVNode(C, { label: "Screening", variant: "outline" }), Wt.createVNode(C, { label: "Interview", variant: "outline" }), Wt.createVNode(C, { label: "Offer", variant: "outline" }), Wt.createVNode(C, { label: "Hired", variant: "outline" })]), Wt.createVNode("div", { class: "flex items-center gap-2" }, [Wt.createVNode($, { icon: "i-heroicons-magnifying-glass", placeholder: "Search candidates..." }), Wt.createVNode(j, null, { panel: Wt.withCtx(() => [Wt.createVNode("div", { class: "p-4" }, [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Position"), Wt.createVNode(R, { options: ["All Positions", "Frontend Developer"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Department"), Wt.createVNode(R, { options: ["All Departments", "Engineering"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Date Applied"), Wt.createVNode(R, { options: ["Any Time", "Last 7 days"] })]), Wt.createVNode("div", { class: "flex justify-end gap-2" }, [Wt.createVNode(C, { label: "Reset", variant: "ghost", color: "gray" }), Wt.createVNode(C, { label: "Apply" })])])])]), default: Wt.withCtx(() => [Wt.createVNode(C, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" })]), _: 1 })])])];
      t2(`<div class="flex flex-wrap items-center justify-between gap-4"${o2}><div class="flex flex-wrap items-center gap-2"${o2}>`), t2(pm.ssrRenderComponent(C, { label: "All Candidates" }, null, s2, o2)), t2(pm.ssrRenderComponent(C, { label: "Screening", variant: "outline" }, null, s2, o2)), t2(pm.ssrRenderComponent(C, { label: "Interview", variant: "outline" }, null, s2, o2)), t2(pm.ssrRenderComponent(C, { label: "Offer", variant: "outline" }, null, s2, o2)), t2(pm.ssrRenderComponent(C, { label: "Hired", variant: "outline" }, null, s2, o2)), t2(`</div><div class="flex items-center gap-2"${o2}>`), t2(pm.ssrRenderComponent($, { icon: "i-heroicons-magnifying-glass", placeholder: "Search candidates..." }, null, s2, o2)), t2(pm.ssrRenderComponent(j, null, { panel: Wt.withCtx((e3, t3, s3, o3) => {
        if (!t3) return [Wt.createVNode("div", { class: "p-4" }, [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Position"), Wt.createVNode(R, { options: ["All Positions", "Frontend Developer"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Department"), Wt.createVNode(R, { options: ["All Departments", "Engineering"] })]), Wt.createVNode("div", null, [Wt.createVNode("label", { class: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" }, "Date Applied"), Wt.createVNode(R, { options: ["Any Time", "Last 7 days"] })]), Wt.createVNode("div", { class: "flex justify-end gap-2" }, [Wt.createVNode(C, { label: "Reset", variant: "ghost", color: "gray" }), Wt.createVNode(C, { label: "Apply" })])])])];
        t3(`<div class="p-4"${o3}><div class="space-y-4"${o3}><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Position</label>`), t3(pm.ssrRenderComponent(R, { options: ["All Positions", "Frontend Developer"] }, null, s3, o3)), t3(`</div><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Department</label>`), t3(pm.ssrRenderComponent(R, { options: ["All Departments", "Engineering"] }, null, s3, o3)), t3(`</div><div${o3}><label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"${o3}>Date Applied</label>`), t3(pm.ssrRenderComponent(R, { options: ["Any Time", "Last 7 days"] }, null, s3, o3)), t3(`</div><div class="flex justify-end gap-2"${o3}>`), t3(pm.ssrRenderComponent(C, { label: "Reset", variant: "ghost", color: "gray" }, null, s3, o3)), t3(pm.ssrRenderComponent(C, { label: "Apply" }, null, s3, o3)), t3("</div></div></div>");
      }), default: Wt.withCtx((e3, t3, s3, o3) => {
        if (!t3) return [Wt.createVNode(C, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" })];
        t3(pm.ssrRenderComponent(C, { icon: "i-heroicons-funnel", label: "Filters", color: "gray" }, null, s3, o3));
      }), _: 1 }, s2, o2)), t2("</div></div>");
    }), _: 1 }, h)), b('<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-2">'), b(pm.ssrRenderComponent(V, null, { header: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, "Recruitment Pipeline"), Wt.createVNode("div", { class: "flex items-center space-x-2" }, [Wt.createVNode(C, { onClick: (e3) => u2.value = "card", variant: "card" === u2.value ? "solid" : "outline", icon: "i-heroicons-view-squares-2x2", label: "Card" }, null, 8, ["onClick", "variant"]), Wt.createVNode(C, { onClick: (e3) => u2.value = "table", variant: "table" === u2.value ? "solid" : "outline", icon: "i-heroicons-table-cells", label: "Table" }, null, 8, ["onClick", "variant"])])])];
      t2(`<div class="flex items-center justify-between"${o2}><h2 class="text-lg font-semibold text-gray-800 dark:text-white"${o2}>Recruitment Pipeline</h2><div class="flex items-center space-x-2"${o2}>`), t2(pm.ssrRenderComponent(C, { onClick: (e3) => u2.value = "card", variant: "card" === u2.value ? "solid" : "outline", icon: "i-heroicons-view-squares-2x2", label: "Card" }, null, s2, o2)), t2(pm.ssrRenderComponent(C, { onClick: (e3) => u2.value = "table", variant: "table" === u2.value ? "solid" : "outline", icon: "i-heroicons-table-cells", label: "Table" }, null, s2, o2)), t2("</div></div>");
    }), default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return ["card" === u2.value ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: "grid grid-cols-1 gap-4 md:grid-cols-3" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(v.value, (e3) => (Wt.openBlock(), Wt.createBlock("div", { key: e3.name, class: "min-h-[400px] rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50" }, [Wt.createVNode("div", { class: "mb-3 flex items-center justify-between" }, [Wt.createVNode("h3", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode(D, { color: e3.color, variant: "subtle" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.count), 1)]), _: 2 }, 1032, ["color"])]), Wt.createVNode("div", { class: "space-y-3" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(e3.candidates, (t3) => (Wt.openBlock(), Wt.createBlock(V, { key: t3.name, ui: { body: { padding: "p-3" }, ring: `ring-1 ring-inset ring-${e3.color}-400` } }, { default: Wt.withCtx(() => [Wt.createVNode("div", { class: "flex items-start justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h4", { class: "text-sm font-medium text-gray-800 dark:text-white" }, Wt.toDisplayString(t3.name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(t3.role), 1)]), Wt.createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(t3.time), 1)]), Wt.createVNode("div", { class: "mt-2 flex items-center justify-between" }, [Wt.createVNode(D, { color: t3.statusColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(t3.status), 1)]), _: 2 }, 1032, ["color"]), Wt.createVNode(C, { label: t3.action, variant: "link", size: "xs" }, null, 8, ["label"])])]), _: 2 }, 1032, ["ui"]))), 128))])]))), 128))])) : Wt.createCommentVNode("", true), "table" === u2.value ? (Wt.openBlock(), Wt.createBlock("div", { key: 1 }, [Wt.createVNode(_, { rows: f, columns: y$1 }, { "candidate-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(S, { alt: e3.name.substring(0, 2), size: "sm" }, null, 8, ["alt"]), Wt.createVNode("div", { class: "ml-3" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(e3.email), 1)])])]), "stage-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode(D, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)]), _: 2 }, 1032, ["color"])]), "actions-data": Wt.withCtx(({ row: e3 }) => [Wt.createVNode(C, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }), Wt.createVNode(C, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" })]), _: 1 })])) : Wt.createCommentVNode("", true)];
      "card" === u2.value ? (t2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-3"${o2}><!--[-->`), pm.ssrRenderList(v.value, (e3) => {
        t2(`<div class="min-h-[400px] rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50"${o2}><div class="mb-3 flex items-center justify-between"${o2}><h3 class="text-sm font-medium text-gray-700 dark:text-gray-200"${o2}>${pm.ssrInterpolate(e3.name)}</h3>`), t2(pm.ssrRenderComponent(D, { color: e3.color, variant: "subtle" }, { default: Wt.withCtx((t3, s3, o3, l2) => {
          if (!s3) return [Wt.createTextVNode(Wt.toDisplayString(e3.count), 1)];
          s3(`${pm.ssrInterpolate(e3.count)}`);
        }), _: 2 }, s2, o2)), t2(`</div><div class="space-y-3"${o2}><!--[-->`), pm.ssrRenderList(e3.candidates, (l2) => {
          t2(pm.ssrRenderComponent(V, { key: l2.name, ui: { body: { padding: "p-3" }, ring: `ring-1 ring-inset ring-${e3.color}-400` } }, { default: Wt.withCtx((e4, t3, s3, o3) => {
            if (!t3) return [Wt.createVNode("div", { class: "flex items-start justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h4", { class: "text-sm font-medium text-gray-800 dark:text-white" }, Wt.toDisplayString(l2.name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(l2.role), 1)]), Wt.createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(l2.time), 1)]), Wt.createVNode("div", { class: "mt-2 flex items-center justify-between" }, [Wt.createVNode(D, { color: l2.statusColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(l2.status), 1)]), _: 2 }, 1032, ["color"]), Wt.createVNode(C, { label: l2.action, variant: "link", size: "xs" }, null, 8, ["label"])])];
            t3(`<div class="flex items-start justify-between"${o3}><div${o3}><h4 class="text-sm font-medium text-gray-800 dark:text-white"${o3}>${pm.ssrInterpolate(l2.name)}</h4><p class="text-xs text-gray-500 dark:text-gray-400"${o3}>${pm.ssrInterpolate(l2.role)}</p></div><span class="text-xs text-gray-500 dark:text-gray-400"${o3}>${pm.ssrInterpolate(l2.time)}</span></div><div class="mt-2 flex items-center justify-between"${o3}>`), t3(pm.ssrRenderComponent(D, { color: l2.statusColor, variant: "soft" }, { default: Wt.withCtx((e5, t4, s4, o4) => {
              if (!t4) return [Wt.createTextVNode(Wt.toDisplayString(l2.status), 1)];
              t4(`${pm.ssrInterpolate(l2.status)}`);
            }), _: 2 }, s3, o3)), t3(pm.ssrRenderComponent(C, { label: l2.action, variant: "link", size: "xs" }, null, s3, o3)), t3("</div>");
          }), _: 2 }, s2, o2));
        }), t2("<!--]--></div></div>");
      }), t2("<!--]--></div>")) : t2("<!---->"), "table" === u2.value ? (t2(`<div${o2}>`), t2(pm.ssrRenderComponent(_, { rows: f, columns: y$1 }, { "candidate-data": Wt.withCtx(({ row: e3 }, t3, s3, o3) => {
        if (!t3) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(S, { alt: e3.name.substring(0, 2), size: "sm" }, null, 8, ["alt"]), Wt.createVNode("div", { class: "ml-3" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(e3.email), 1)])])];
        t3(`<div class="flex items-center"${o3}>`), t3(pm.ssrRenderComponent(S, { alt: e3.name.substring(0, 2), size: "sm" }, null, s3, o3)), t3(`<div class="ml-3"${o3}><p class="text-sm font-medium text-gray-900 dark:text-white"${o3}>${pm.ssrInterpolate(e3.name)}</p><p class="text-sm text-gray-500 dark:text-gray-400"${o3}>${pm.ssrInterpolate(e3.email)}</p></div></div>`);
      }), "stage-data": Wt.withCtx(({ row: e3 }, t3, s3, o3) => {
        if (!t3) return [Wt.createVNode(D, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)]), _: 2 }, 1032, ["color"])];
        t3(pm.ssrRenderComponent(D, { color: e3.stageColor, variant: "soft" }, { default: Wt.withCtx((t4, s4, o4, l2) => {
          if (!s4) return [Wt.createTextVNode(Wt.toDisplayString(e3.stage), 1)];
          s4(`${pm.ssrInterpolate(e3.stage)}`);
        }), _: 2 }, s3, o3));
      }), "actions-data": Wt.withCtx(({ row: e3 }, t3, s3, o3) => {
        if (!t3) return [Wt.createVNode(C, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }), Wt.createVNode(C, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" })];
        t3(pm.ssrRenderComponent(C, { variant: "ghost", color: "gray", icon: "i-heroicons-pencil-square" }, null, s3, o3)), t3(pm.ssrRenderComponent(C, { variant: "ghost", color: "gray", icon: "i-heroicons-chevron-right" }, null, s3, o3));
      }), _: 1 }, s2, o2)), t2("</div>")) : t2("<!---->");
    }), _: 1 }, h)), b('</div><div class="space-y-6 lg:col-span-1">'), b(pm.ssrRenderComponent(V, null, { header: Wt.withCtx((e2, t2, r2, s2) => {
      if (!t2) return [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, "Open Positions")];
      t2(`<h2 class="text-lg font-semibold text-gray-800 dark:text-white"${s2}>Open Positions</h2>`);
    }), default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "space-y-3" }, [Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", null, [Wt.createVNode("h3", { class: "text-sm font-medium text-gray-800 dark:text-white" }, "Senior Frontend Dev"), Wt.createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, "Engineering \u2022 5 applicants")]), Wt.createVNode(D, { color: "green", variant: "subtle" }, { default: Wt.withCtx(() => [Wt.createTextVNode("Active")]), _: 1 })]), Wt.createVNode(C, { onClick: (e3) => g.value = true, icon: "i-heroicons-plus", label: "Create New Position", block: "", class: "mt-3" }, null, 8, ["onClick"])])];
      t2(`<div class="space-y-3"${o2}><div class="flex items-center justify-between"${o2}><div${o2}><h3 class="text-sm font-medium text-gray-800 dark:text-white"${o2}>Senior Frontend Dev</h3><p class="text-xs text-gray-500 dark:text-gray-400"${o2}>Engineering \u2022 5 applicants</p></div>`), t2(pm.ssrRenderComponent(D, { color: "green", variant: "subtle" }, { default: Wt.withCtx((e3, t3, r2, s3) => {
        if (!t3) return [Wt.createTextVNode("Active")];
        t3("Active");
      }), _: 1 }, s2, o2)), t2("</div>"), t2(pm.ssrRenderComponent(C, { onClick: (e3) => g.value = true, icon: "i-heroicons-plus", label: "Create New Position", block: "", class: "mt-3" }, null, s2, o2)), t2("</div>");
    }), _: 1 }, h)), b(pm.ssrRenderComponent(V, null, { header: Wt.withCtx((e2, t2, r2, s2) => {
      if (!t2) return [Wt.createVNode("h2", { class: "text-lg font-semibold text-gray-800 dark:text-white" }, "Q2 Hiring Goals")];
      t2(`<h2 class="text-lg font-semibold text-gray-800 dark:text-white"${s2}>Q2 Hiring Goals</h2>`);
    }), default: Wt.withCtx((e2, t2, s2, o2) => {
      if (!t2) return [Wt.createVNode("div", { class: "space-y-4" }, [Wt.createVNode("div", null, [Wt.createVNode("div", { class: "mb-1 flex justify-between text-sm" }, [Wt.createVNode("span", { class: "text-gray-700 dark:text-gray-200" }, "Engineering"), Wt.createVNode("span", { class: "font-medium text-gray-800 dark:text-white" }, "8/12")]), Wt.createVNode(T, { "model-value": "8", max: "12" })]), Wt.createVNode("div", null, [Wt.createVNode("div", { class: "mb-1 flex justify-between text-sm" }, [Wt.createVNode("span", { class: "text-gray-700 dark:text-gray-200" }, "Product"), Wt.createVNode("span", { class: "font-medium text-gray-800 dark:text-white" }, "3/5")]), Wt.createVNode(T, { "model-value": "3", max: "5", color: "green" })])])];
      t2(`<div class="space-y-4"${o2}><div${o2}><div class="mb-1 flex justify-between text-sm"${o2}><span class="text-gray-700 dark:text-gray-200"${o2}>Engineering</span><span class="font-medium text-gray-800 dark:text-white"${o2}>8/12</span></div>`), t2(pm.ssrRenderComponent(T, { "model-value": "8", max: "12" }, null, s2, o2)), t2(`</div><div${o2}><div class="mb-1 flex justify-between text-sm"${o2}><span class="text-gray-700 dark:text-gray-200"${o2}>Product</span><span class="font-medium text-gray-800 dark:text-white"${o2}>3/5</span></div>`), t2(pm.ssrRenderComponent(T, { "model-value": "3", max: "5", color: "green" }, null, s2, o2)), t2("</div></div>");
    }), _: 1 }, h)), b("</div></div></div></div><!--]-->");
  };
} }, u = x.setup;
x.setup = (e2, t2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/human-resources/index.vue"), u ? u(e2, t2) : void 0;
};

export { x as default };
//# sourceMappingURL=index-DkSfOYCD.mjs.map

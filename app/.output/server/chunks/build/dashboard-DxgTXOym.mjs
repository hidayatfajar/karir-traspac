import { d } from './Card-DDyQTkQA.mjs';
import { v as Wt, s as om, c as hb, d as Sb } from './server.mjs';
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

const i = Wt.defineComponent({ __name: "dashboard", __ssrInlineRender: true, setup(i2) {
  const o2 = Wt.ref([{ id: 1, name: "John Doe", position: "Frontend Developer", time: "2 min ago", avatar: "https://i.pravatar.cc/150?img=1" }, { id: 2, name: "Jane Smith", position: "UX Designer", time: "1 hour ago", avatar: "https://i.pravatar.cc/150?img=2" }, { id: 3, name: "Mike Johnson", position: "Backend Developer", time: "3 hours ago", avatar: "https://i.pravatar.cc/150?img=3" }]), d$1 = Wt.ref([{ id: 1, candidate: "Sarah Wilson", position: "Product Manager", time: "10:00 AM" }, { id: 2, candidate: "David Brown", position: "DevOps Engineer", time: "2:00 PM" }, { id: 3, candidate: "Lisa Davis", position: "Marketing Specialist", time: "4:30 PM" }]);
  return (i3, n, l, c) => {
    const m = d, p = hb, x = Sb;
    n(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "space-y-6" }, c))}><div><h1 class="text-2xl font-bold text-gray-900">HR Dashboard</h1><p class="text-gray-600"> Welcome back! Here&#39;s what&#39;s happening with your recruitment. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`), n(om.ssrRenderComponent(m, { class: "p-6" }, { default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode("div", { class: "flex-shrink-0" }, [Wt.createVNode("div", { class: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center" }, [Wt.createVNode(p, { name: "i-heroicons-briefcase", class: "w-5 h-5 text-blue-600" })])]), Wt.createVNode("div", { class: "ml-4" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-500" }, "Active Jobs"), Wt.createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "12")])])];
      r2(`<div class="flex items-center"${i4}><div class="flex-shrink-0"${i4}><div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"${i4}>`), r2(om.ssrRenderComponent(p, { name: "i-heroicons-briefcase", class: "w-5 h-5 text-blue-600" }, null, a2, i4)), r2(`</div></div><div class="ml-4"${i4}><p class="text-sm font-medium text-gray-500"${i4}>Active Jobs</p><p class="text-2xl font-bold text-gray-900"${i4}>12</p></div></div>`);
    }), _: 1 }, l)), n(om.ssrRenderComponent(m, { class: "p-6" }, { default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode("div", { class: "flex-shrink-0" }, [Wt.createVNode("div", { class: "w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center" }, [Wt.createVNode(p, { name: "i-heroicons-users", class: "w-5 h-5 text-green-600" })])]), Wt.createVNode("div", { class: "ml-4" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-500" }, "Total Candidates"), Wt.createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "248")])])];
      r2(`<div class="flex items-center"${i4}><div class="flex-shrink-0"${i4}><div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"${i4}>`), r2(om.ssrRenderComponent(p, { name: "i-heroicons-users", class: "w-5 h-5 text-green-600" }, null, a2, i4)), r2(`</div></div><div class="ml-4"${i4}><p class="text-sm font-medium text-gray-500"${i4}>Total Candidates</p><p class="text-2xl font-bold text-gray-900"${i4}>248</p></div></div>`);
    }), _: 1 }, l)), n(om.ssrRenderComponent(m, { class: "p-6" }, { default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode("div", { class: "flex-shrink-0" }, [Wt.createVNode("div", { class: "w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center" }, [Wt.createVNode(p, { name: "i-heroicons-calendar-days", class: "w-5 h-5 text-yellow-600" })])]), Wt.createVNode("div", { class: "ml-4" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-500" }, "Interviews Today"), Wt.createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "8")])])];
      r2(`<div class="flex items-center"${i4}><div class="flex-shrink-0"${i4}><div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center"${i4}>`), r2(om.ssrRenderComponent(p, { name: "i-heroicons-calendar-days", class: "w-5 h-5 text-yellow-600" }, null, a2, i4)), r2(`</div></div><div class="ml-4"${i4}><p class="text-sm font-medium text-gray-500"${i4}>Interviews Today</p><p class="text-2xl font-bold text-gray-900"${i4}>8</p></div></div>`);
    }), _: 1 }, l)), n(om.ssrRenderComponent(m, { class: "p-6" }, { default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode("div", { class: "flex-shrink-0" }, [Wt.createVNode("div", { class: "w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center" }, [Wt.createVNode(p, { name: "i-heroicons-chart-bar", class: "w-5 h-5 text-purple-600" })])]), Wt.createVNode("div", { class: "ml-4" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-500" }, "Hired This Month"), Wt.createVNode("p", { class: "text-2xl font-bold text-gray-900" }, "15")])])];
      r2(`<div class="flex items-center"${i4}><div class="flex-shrink-0"${i4}><div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"${i4}>`), r2(om.ssrRenderComponent(p, { name: "i-heroicons-chart-bar", class: "w-5 h-5 text-purple-600" }, null, a2, i4)), r2(`</div></div><div class="ml-4"${i4}><p class="text-sm font-medium text-gray-500"${i4}>Hired This Month</p><p class="text-2xl font-bold text-gray-900"${i4}>15</p></div></div>`);
    }), _: 1 }, l)), n('</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6">'), n(om.ssrRenderComponent(m, null, { header: Wt.withCtx((e2, s2, r2, a2) => {
      if (!s2) return [Wt.createVNode("h3", { class: "text-lg font-semibold" }, "Recent Applications")];
      s2(`<h3 class="text-lg font-semibold"${a2}>Recent Applications</h3>`);
    }), default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "space-y-4" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Wt.unref(o2), (e3) => (Wt.openBlock(), Wt.createBlock("div", { key: e3.id, class: "flex items-center space-x-4" }, [Wt.createVNode(x, { src: e3.avatar, alt: e3.name, size: "sm" }, null, 8, ["src", "alt"]), Wt.createVNode("div", { class: "flex-1 min-w-0" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 truncate" }, Wt.toDisplayString(e3.name), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 truncate" }, Wt.toDisplayString(e3.position), 1)]), Wt.createVNode("div", { class: "text-sm text-gray-500" }, Wt.toDisplayString(e3.time), 1)]))), 128))])];
      r2(`<div class="space-y-4"${i4}><!--[-->`), om.ssrRenderList(Wt.unref(o2), (e3) => {
        r2(`<div class="flex items-center space-x-4"${i4}>`), r2(om.ssrRenderComponent(x, { src: e3.avatar, alt: e3.name, size: "sm" }, null, a2, i4)), r2(`<div class="flex-1 min-w-0"${i4}><p class="text-sm font-medium text-gray-900 truncate"${i4}>${om.ssrInterpolate(e3.name)}</p><p class="text-sm text-gray-500 truncate"${i4}>${om.ssrInterpolate(e3.position)}</p></div><div class="text-sm text-gray-500"${i4}>${om.ssrInterpolate(e3.time)}</div></div>`);
      }), r2("<!--]--></div>");
    }), _: 1 }, l)), n(om.ssrRenderComponent(m, null, { header: Wt.withCtx((e2, s2, r2, a2) => {
      if (!s2) return [Wt.createVNode("h3", { class: "text-lg font-semibold" }, "Upcoming Interviews")];
      s2(`<h3 class="text-lg font-semibold"${a2}>Upcoming Interviews</h3>`);
    }), default: Wt.withCtx((e2, r2, a2, i4) => {
      if (!r2) return [Wt.createVNode("div", { class: "space-y-4" }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Wt.unref(d$1), (e3) => (Wt.openBlock(), Wt.createBlock("div", { key: e3.id, class: "flex items-center space-x-4" }, [Wt.createVNode("div", { class: "flex-shrink-0" }, [Wt.createVNode("div", { class: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center" }, [Wt.createVNode(p, { name: "i-heroicons-video-camera", class: "w-5 h-5 text-blue-600" })])]), Wt.createVNode("div", { class: "flex-1 min-w-0" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900 truncate" }, Wt.toDisplayString(e3.candidate), 1), Wt.createVNode("p", { class: "text-sm text-gray-500 truncate" }, Wt.toDisplayString(e3.position), 1)]), Wt.createVNode("div", { class: "text-sm text-gray-500" }, Wt.toDisplayString(e3.time), 1)]))), 128))])];
      r2(`<div class="space-y-4"${i4}><!--[-->`), om.ssrRenderList(Wt.unref(d$1), (e3) => {
        r2(`<div class="flex items-center space-x-4"${i4}><div class="flex-shrink-0"${i4}><div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"${i4}>`), r2(om.ssrRenderComponent(p, { name: "i-heroicons-video-camera", class: "w-5 h-5 text-blue-600" }, null, a2, i4)), r2(`</div></div><div class="flex-1 min-w-0"${i4}><p class="text-sm font-medium text-gray-900 truncate"${i4}>${om.ssrInterpolate(e3.candidate)}</p><p class="text-sm text-gray-500 truncate"${i4}>${om.ssrInterpolate(e3.position)}</p></div><div class="text-sm text-gray-500"${i4}>${om.ssrInterpolate(e3.time)}</div></div>`);
      }), r2("<!--]--></div>");
    }), _: 1 }, l)), n("</div></div>");
  };
} }), o = i.setup;
i.setup = (e2, s2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("pages/human-resources/dashboard.vue"), o ? o(e2, s2) : void 0;
};

export { i as default };
//# sourceMappingURL=dashboard-DxgTXOym.mjs.map

import { v as Wt, s as om, _ as kb, c as hb, n as $s } from './server.mjs';
import { d as d$1 } from './Card-DDyQTkQA.mjs';
import { c } from './Input-BTq7Ekjb.mjs';
import { _ as _e } from './Select-DbdRKll6.mjs';
import { u } from './Badge-DJV5kyds.mjs';
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
import './usePortal-DzDMWCd7.mjs';
import './ConfigProvider-C3zU966T.mjs';
import './useForwardPropsEmits-DnSfSOTI.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './Collection-CK0B56BN.mjs';
import './usePrimitiveElement-BqlHGOiE.mjs';
import './useFormControl-BKZlrIrW.mjs';
import './nullish-aV-w2MPu.mjs';
import './useTypeahead-CXda91ln.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './utils-iLtTyP0t.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';
import './useFocusGuards-AjDOEN6x.mjs';
import './handleAndDispatchCustomEvent-V4GPqTEe.mjs';

const d = Wt.defineComponent({ __name: "jobs", __ssrInlineRender: true, setup(d2) {
  const p2 = Wt.ref(false), c$1 = Wt.ref({ search: "", status: "", department: "", type: "" }), m = [{ label: "Active", value: "Active" }, { label: "Draft", value: "Draft" }, { label: "Closed", value: "Closed" }], u$1 = [{ label: "Engineering", value: "Engineering" }, { label: "Design", value: "Design" }, { label: "Marketing", value: "Marketing" }, { label: "Sales", value: "Sales" }], f = [{ label: "Full-time", value: "Full-time" }, { label: "Part-time", value: "Part-time" }, { label: "Contract", value: "Contract" }, { label: "Internship", value: "Internship" }], h = Wt.ref([{ id: 1, title: "Senior Frontend Developer", department: "Engineering", location: "Jakarta, Indonesia", type: "Full-time", status: "Active", applicants: 24, description: "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces and ensuring great user experience.", postedDate: "2 days ago" }, { id: 2, title: "UX/UI Designer", department: "Design", location: "Remote", type: "Full-time", status: "Active", applicants: 18, description: "Join our design team to create beautiful and intuitive user experiences. We need someone passionate about user-centered design.", postedDate: "1 week ago" }, { id: 3, title: "Marketing Specialist", department: "Marketing", location: "Surabaya, Indonesia", type: "Full-time", status: "Draft", applicants: 0, description: "Help us grow our brand presence and drive customer acquisition through various marketing channels.", postedDate: "Draft" }]), x = Wt.computed(() => h.value.filter((e2) => {
    const t2 = e2.title.toLowerCase().includes(c$1.value.search.toLowerCase()) || e2.department.toLowerCase().includes(c$1.value.search.toLowerCase()), s2 = !c$1.value.status || e2.status === c$1.value.status, a2 = !c$1.value.department || e2.department === c$1.value.department, r2 = !c$1.value.type || e2.type === c$1.value.type;
    return t2 && s2 && a2 && r2;
  })), v = (e2) => ({ Active: "green", Draft: "yellow", Closed: "red" })[e2] || "gray", g = (e2) => {
    $s(`/human-resources/jobs/${e2.id}`);
  }, V = (e2) => {
    $s(`/human-resources/jobs/${e2.id}/edit`);
  }, b = (e2) => [[{ label: "View Applications", icon: "i-heroicons-eye", click: () => $s(`/human-resources/jobs/${e2.id}/applications`) }], [{ label: "Duplicate", icon: "i-heroicons-document-duplicate", click: () => console.log("Duplicate job", e2.id) }], [{ label: "Archive", icon: "i-heroicons-archive-box", click: () => console.log("Archive job", e2.id) }]];
  return (r2, d3, h2, C) => {
    const y = kb, N = hb, j = d$1, D = c, w = _e, R = u, _ = Wt.resolveComponent("UDropdown");
    d3(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "space-y-6" }, C))}><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">Job Positions</h1><p class="text-gray-600">Manage all job openings and requirements</p></div>`), d3(om.ssrRenderComponent(y, { color: "primary", onClick: (e2) => p2.value = true }, { default: Wt.withCtx((s2, a2, r3, o2) => {
      if (!a2) return [Wt.createVNode(N, { name: "i-heroicons-plus", class: "mr-2" }), Wt.createTextVNode(" Create New Job ")];
      a2(om.ssrRenderComponent(N, { name: "i-heroicons-plus", class: "mr-2" }, null, r3, o2)), a2(" Create New Job ");
    }), _: 1 }, h2)), d3("</div>"), d3(om.ssrRenderComponent(j, { class: "p-4" }, { default: Wt.withCtx((s2, a2, r3, o2) => {
      if (!a2) return [Wt.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [Wt.createVNode(D, { modelValue: Wt.unref(c$1).search, "onUpdate:modelValue": (t2) => Wt.unref(c$1).search = t2, placeholder: "Search jobs...", icon: "i-heroicons-magnifying-glass" }, null, 8, ["modelValue", "onUpdate:modelValue"]), Wt.createVNode(w, { modelValue: Wt.unref(c$1).status, "onUpdate:modelValue": (t2) => Wt.unref(c$1).status = t2, options: m, placeholder: "All Status" }, null, 8, ["modelValue", "onUpdate:modelValue"]), Wt.createVNode(w, { modelValue: Wt.unref(c$1).department, "onUpdate:modelValue": (t2) => Wt.unref(c$1).department = t2, options: u$1, placeholder: "All Departments" }, null, 8, ["modelValue", "onUpdate:modelValue"]), Wt.createVNode(w, { modelValue: Wt.unref(c$1).type, "onUpdate:modelValue": (t2) => Wt.unref(c$1).type = t2, options: f, placeholder: "All Types" }, null, 8, ["modelValue", "onUpdate:modelValue"])])];
      a2(`<div class="grid grid-cols-1 md:grid-cols-4 gap-4"${o2}>`), a2(om.ssrRenderComponent(D, { modelValue: Wt.unref(c$1).search, "onUpdate:modelValue": (t2) => Wt.unref(c$1).search = t2, placeholder: "Search jobs...", icon: "i-heroicons-magnifying-glass" }, null, r3, o2)), a2(om.ssrRenderComponent(w, { modelValue: Wt.unref(c$1).status, "onUpdate:modelValue": (t2) => Wt.unref(c$1).status = t2, options: m, placeholder: "All Status" }, null, r3, o2)), a2(om.ssrRenderComponent(w, { modelValue: Wt.unref(c$1).department, "onUpdate:modelValue": (t2) => Wt.unref(c$1).department = t2, options: u$1, placeholder: "All Departments" }, null, r3, o2)), a2(om.ssrRenderComponent(w, { modelValue: Wt.unref(c$1).type, "onUpdate:modelValue": (t2) => Wt.unref(c$1).type = t2, options: f, placeholder: "All Types" }, null, r3, o2)), a2("</div>");
    }), _: 1 }, h2)), d3('<div class="grid gap-6"><!--[-->'), om.ssrRenderList(Wt.unref(x), (s2) => {
      d3(om.ssrRenderComponent(j, { key: s2.id, class: "hover:shadow-md transition-shadow" }, { default: Wt.withCtx((a2, r3, o2, i2) => {
        if (!r3) return [Wt.createVNode("div", { class: "flex justify-between items-start" }, [Wt.createVNode("div", { class: "flex-1" }, [Wt.createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [Wt.createVNode("h3", { class: "text-lg font-semibold text-gray-900" }, Wt.toDisplayString(s2.title), 1), Wt.createVNode(R, { color: v(s2.status), variant: "subtle" }, { default: Wt.withCtx(() => [Wt.createTextVNode(Wt.toDisplayString(s2.status), 1)]), _: 2 }, 1032, ["color"])]), Wt.createVNode("div", { class: "flex items-center space-x-6 text-sm text-gray-500 mb-4" }, [Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(N, { name: "i-heroicons-building-office", class: "mr-1" }), Wt.createTextVNode(" " + Wt.toDisplayString(s2.department), 1)]), Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(N, { name: "i-heroicons-map-pin", class: "mr-1" }), Wt.createTextVNode(" " + Wt.toDisplayString(s2.location), 1)]), Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(N, { name: "i-heroicons-briefcase", class: "mr-1" }), Wt.createTextVNode(" " + Wt.toDisplayString(s2.type), 1)]), Wt.createVNode("div", { class: "flex items-center" }, [Wt.createVNode(N, { name: "i-heroicons-users", class: "mr-1" }), Wt.createTextVNode(" " + Wt.toDisplayString(s2.applicants) + " applicants ", 1)])]), Wt.createVNode("p", { class: "text-gray-600 mb-4 line-clamp-2" }, Wt.toDisplayString(s2.description), 1), Wt.createVNode("div", { class: "flex items-center justify-between" }, [Wt.createVNode("div", { class: "text-sm text-gray-500" }, " Posted " + Wt.toDisplayString(s2.postedDate), 1), Wt.createVNode("div", { class: "flex space-x-2" }, [Wt.createVNode(y, { variant: "ghost", size: "sm", onClick: (e2) => g(s2) }, { default: Wt.withCtx(() => [Wt.createTextVNode(" View Details ")]), _: 2 }, 1032, ["onClick"]), Wt.createVNode(y, { variant: "ghost", size: "sm", onClick: (e2) => V(s2) }, { default: Wt.withCtx(() => [Wt.createTextVNode(" Edit ")]), _: 2 }, 1032, ["onClick"]), Wt.createVNode(_, { items: b(s2) }, { default: Wt.withCtx(() => [Wt.createVNode(y, { variant: "ghost", size: "sm" }, { default: Wt.withCtx(() => [Wt.createVNode(N, { name: "i-heroicons-ellipsis-horizontal" })]), _: 1 })]), _: 2 }, 1032, ["items"])])])])])];
        r3(`<div class="flex justify-between items-start"${i2}><div class="flex-1"${i2}><div class="flex items-center space-x-3 mb-2"${i2}><h3 class="text-lg font-semibold text-gray-900"${i2}>${om.ssrInterpolate(s2.title)}</h3>`), r3(om.ssrRenderComponent(R, { color: v(s2.status), variant: "subtle" }, { default: Wt.withCtx((a3, r4, o3, i3) => {
          if (!r4) return [Wt.createTextVNode(Wt.toDisplayString(s2.status), 1)];
          r4(`${om.ssrInterpolate(s2.status)}`);
        }), _: 2 }, o2, i2)), r3(`</div><div class="flex items-center space-x-6 text-sm text-gray-500 mb-4"${i2}><div class="flex items-center"${i2}>`), r3(om.ssrRenderComponent(N, { name: "i-heroicons-building-office", class: "mr-1" }, null, o2, i2)), r3(` ${om.ssrInterpolate(s2.department)}</div><div class="flex items-center"${i2}>`), r3(om.ssrRenderComponent(N, { name: "i-heroicons-map-pin", class: "mr-1" }, null, o2, i2)), r3(` ${om.ssrInterpolate(s2.location)}</div><div class="flex items-center"${i2}>`), r3(om.ssrRenderComponent(N, { name: "i-heroicons-briefcase", class: "mr-1" }, null, o2, i2)), r3(` ${om.ssrInterpolate(s2.type)}</div><div class="flex items-center"${i2}>`), r3(om.ssrRenderComponent(N, { name: "i-heroicons-users", class: "mr-1" }, null, o2, i2)), r3(` ${om.ssrInterpolate(s2.applicants)} applicants </div></div><p class="text-gray-600 mb-4 line-clamp-2"${i2}>${om.ssrInterpolate(s2.description)}</p><div class="flex items-center justify-between"${i2}><div class="text-sm text-gray-500"${i2}> Posted ${om.ssrInterpolate(s2.postedDate)}</div><div class="flex space-x-2"${i2}>`), r3(om.ssrRenderComponent(y, { variant: "ghost", size: "sm", onClick: (e2) => g(s2) }, { default: Wt.withCtx((t2, s3, a3, r4) => {
          if (!s3) return [Wt.createTextVNode(" View Details ")];
          s3(" View Details ");
        }), _: 2 }, o2, i2)), r3(om.ssrRenderComponent(y, { variant: "ghost", size: "sm", onClick: (e2) => V(s2) }, { default: Wt.withCtx((t2, s3, a3, r4) => {
          if (!s3) return [Wt.createTextVNode(" Edit ")];
          s3(" Edit ");
        }), _: 2 }, o2, i2)), r3(om.ssrRenderComponent(_, { items: b(s2) }, { default: Wt.withCtx((s3, a3, r4, o3) => {
          if (!a3) return [Wt.createVNode(y, { variant: "ghost", size: "sm" }, { default: Wt.withCtx(() => [Wt.createVNode(N, { name: "i-heroicons-ellipsis-horizontal" })]), _: 1 })];
          a3(om.ssrRenderComponent(y, { variant: "ghost", size: "sm" }, { default: Wt.withCtx((s4, a4, r5, o4) => {
            if (!a4) return [Wt.createVNode(N, { name: "i-heroicons-ellipsis-horizontal" })];
            a4(om.ssrRenderComponent(N, { name: "i-heroicons-ellipsis-horizontal" }, null, r5, o4));
          }), _: 2 }, r4, o3));
        }), _: 2 }, o2, i2)), r3("</div></div></div></div>");
      }), _: 2 }, h2));
    }), d3("<!--]--></div>"), 0 === Wt.unref(x).length ? (d3('<div class="text-center py-12">'), d3(om.ssrRenderComponent(N, { name: "i-heroicons-briefcase", class: "mx-auto h-12 w-12 text-gray-400" }, null, h2)), d3('<h3 class="mt-2 text-sm font-medium text-gray-900">No jobs found</h3><p class="mt-1 text-sm text-gray-500">Get started by creating a new job position.</p>'), d3(om.ssrRenderComponent(y, { class: "mt-6", onClick: (e2) => p2.value = true }, { default: Wt.withCtx((s2, a2, r3, o2) => {
      if (!a2) return [Wt.createVNode(N, { name: "i-heroicons-plus", class: "mr-2" }), Wt.createTextVNode(" Create New Job ")];
      a2(om.ssrRenderComponent(N, { name: "i-heroicons-plus", class: "mr-2" }, null, r3, o2)), a2(" Create New Job ");
    }), _: 1 }, h2)), d3("</div>")) : d3("<!---->"), d3("</div>");
  };
} }), p = d.setup;
d.setup = (t2, s2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/human-resources/jobs.vue"), p ? p(t2, s2) : void 0;
};

export { d as default };
//# sourceMappingURL=jobs-D5GF_wip.mjs.map

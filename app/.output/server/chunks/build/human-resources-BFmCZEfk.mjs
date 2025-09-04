import { v as Wt, $ as Bs, j as ei, s as om, c as hb, d as Sb, n as $s, f as fa, _ as kb } from './server.mjs';
import { c } from './Input-BTq7Ekjb.mjs';
import { B } from './DropdownMenu-D9nqttk_.mjs';
import { s } from './logo-kt-C_l9s7Hp.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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
import './index-CLkrk2zK.mjs';
import './useLocale-BepRiSpk.mjs';
import './Kbd-2mh2A80S.mjs';

const u = Wt.defineComponent({ __name: "HRHeader", __ssrInlineRender: true, props: { pageTitle: { default: "Dashboard" }, pageSubtitle: { default: "Welcome to HR Management System" } }, emits: ["toggleSidebar", "updateTitle"], setup(l2, { emit: p2 }) {
  const m2 = p2, u2 = Wt.ref(""), h2 = Wt.ref({ name: "Bagas Arifiea", email: "hr@traspac.co.id", role: "Human Resources" }), x2 = Wt.ref([[{ label: "Profile", icon: "i-heroicons-user", click: () => $s("/human-resources/profile") }], [{ label: "Settings", icon: "i-heroicons-cog-6-tooth", click: () => $s("/human-resources/settings") }], [{ label: "Help & Support", icon: "i-heroicons-question-mark-circle", click: () => $s("/help") }], [{ label: "Logout", icon: "i-heroicons-arrow-right-on-rectangle", click: () => {
    console.log("Logging out..."), b2();
  } }]]), g2 = Bs();
  Wt.computed(() => true);
  const f2 = fa(), b2 = async () => {
    setTimeout(async () => {
      await f2.logout();
    }, 2e3);
  };
  return Wt.watch(() => g2.path, (e2) => {
    const t2 = { "/human-resources/dashboard": { title: "Dashboard", subtitle: "Overview of HR activities" }, "/human-resources/jobs": { title: "Job Positions", subtitle: "Manage job openings and requirements" }, "/human-resources/candidates": { title: "Candidates", subtitle: "Review and manage job applications" }, "/human-resources/interviews": { title: "Interviews", subtitle: "Schedule and manage interviews" }, "/human-resources/reports": { title: "Reports", subtitle: "Analytics and insights" }, "/human-resources/settings": { title: "Settings", subtitle: "Configure HR system preferences" } }[e2];
    t2 && m2("updateTitle", t2.title, t2.subtitle);
  }, { immediate: true }), (t2, s2, r2, l3) => {
    const p3 = kb, m3 = hb, g3 = c, f3 = B, b3 = Sb;
    s2(`<header${om.ssrRenderAttrs(Wt.mergeProps({ class: "h-16 bg-white border-b border-gray-200 shadow-sm" }, l3))}><div class="flex items-center justify-between h-full px-4 md:px-6"><div class="flex items-center space-x-4">`), s2(om.ssrRenderComponent(p3, { variant: "ghost", size: "sm", class: "md:hidden", onClick: (e2) => t2.$emit("toggleSidebar") }, { default: Wt.withCtx((t3, s3, r3, a2) => {
      if (!s3) return [Wt.createVNode(m3, { name: "i-heroicons-bars-3", class: "w-5 h-5" })];
      s3(om.ssrRenderComponent(m3, { name: "i-heroicons-bars-3", class: "w-5 h-5" }, null, r3, a2));
    }), _: 1 }, r2)), s2(`<div class="hidden md:block"><h1 class="text-lg font-semibold text-gray-900">${om.ssrInterpolate(t2.pageTitle)}</h1>`), t2.pageSubtitle ? s2(`<p class="text-sm text-gray-500">${om.ssrInterpolate(t2.pageSubtitle)}</p>`) : s2("<!---->"), s2('</div></div><div class="flex items-center space-x-4">'), s2(om.ssrRenderComponent(p3, { variant: "ghost", size: "sm", class: "relative" }, { default: Wt.withCtx((t3, s3, r3, a2) => {
      if (!s3) return [Wt.createVNode(m3, { name: "i-heroicons-bell", class: "w-5 h-5" }), Wt.createVNode("span", { class: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center" }, [Wt.createVNode("span", { class: "text-white text-xs" }, "3")])];
      s3(om.ssrRenderComponent(m3, { name: "i-heroicons-bell", class: "w-5 h-5" }, null, r3, a2)), s3(`<span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center"${a2}><span class="text-white text-xs"${a2}>3</span></span>`);
    }), _: 1 }, r2)), s2('<div class="hidden md:block">'), s2(om.ssrRenderComponent(g3, { modelValue: Wt.unref(u2), "onUpdate:modelValue": (t3) => Wt.isRef(u2) ? u2.value = t3 : null, placeholder: "Search...", icon: "i-heroicons-magnifying-glass", size: "sm", class: "w-64" }, null, r2)), s2("</div>"), s2(om.ssrRenderComponent(f3, { items: Wt.unref(x2) }, { default: Wt.withCtx((t3, s3, r3, a2) => {
      if (!s3) return [Wt.createVNode(p3, { variant: "ghost", class: "flex items-center space-x-2" }, { default: Wt.withCtx(() => [Wt.createVNode(b3, { src: "https://placehold.co/40", alt: "HR Manager", size: "sm" }), Wt.createVNode("div", { class: "hidden md:block text-left" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900" }, Wt.toDisplayString(Wt.unref(h2).name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500" }, Wt.toDisplayString(Wt.unref(h2).role), 1)]), Wt.createVNode(m3, { name: "i-heroicons-chevron-down", class: "w-4 h-4" })]), _: 1 })];
      s3(om.ssrRenderComponent(p3, { variant: "ghost", class: "flex items-center space-x-2" }, { default: Wt.withCtx((t4, s4, r4, a3) => {
        if (!s4) return [Wt.createVNode(b3, { src: "https://placehold.co/40", alt: "HR Manager", size: "sm" }), Wt.createVNode("div", { class: "hidden md:block text-left" }, [Wt.createVNode("p", { class: "text-sm font-medium text-gray-900" }, Wt.toDisplayString(Wt.unref(h2).name), 1), Wt.createVNode("p", { class: "text-xs text-gray-500" }, Wt.toDisplayString(Wt.unref(h2).role), 1)]), Wt.createVNode(m3, { name: "i-heroicons-chevron-down", class: "w-4 h-4" })];
        s4(om.ssrRenderComponent(b3, { src: "https://placehold.co/40", alt: "HR Manager", size: "sm" }, null, r4, a3)), s4(`<div class="hidden md:block text-left"${a3}><p class="text-sm font-medium text-gray-900"${a3}>${om.ssrInterpolate(Wt.unref(h2).name)}</p><p class="text-xs text-gray-500"${a3}>${om.ssrInterpolate(Wt.unref(h2).role)}</p></div>`), s4(om.ssrRenderComponent(m3, { name: "i-heroicons-chevron-down", class: "w-4 h-4" }, null, r4, a3));
      }), _: 1 }, r3, a2));
    }), _: 1 }, r2)), s2("</div></div></header>");
  };
} }), h = u.setup;
u.setup = (t2, s2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/layouts/hr/HRHeader.vue"), h ? h(t2, s2) : void 0;
};
const x = Wt.defineComponent({ __name: "HRSidebar", __ssrInlineRender: true, props: { isOpen: { type: Boolean, default: false }, currentRoute: { default: "/human-resources/dashboard" } }, emits: ["close", "navigate"], setup(t2, { emit: s2 }) {
  const r2 = t2, a2 = Wt.ref([{ label: "Dashboard", icon: "i-heroicons-squares-2x2", route: "/human-resources/dashboard" }, { label: "Job Positions", icon: "i-heroicons-briefcase", route: "/human-resources/jobs" }, { label: "Candidates", icon: "i-heroicons-users", route: "/human-resources/candidates" }, { label: "Interviews", icon: "i-heroicons-calendar-days", route: "/human-resources/interviews" }, { label: "Reports", icon: "i-heroicons-document-chart-bar", route: "/human-resources/reports" }, { label: "Settings", icon: "i-heroicons-cog-6-tooth", route: "/human-resources/settings" }]);
  return Wt.watch(() => r2.currentRoute, (e2) => {
    a2.value.forEach((t3) => {
      t3.active = t3.route === e2;
    });
  }, { immediate: true }), (t3, s3, r3, l2) => {
    const d2 = hb, c2 = Sb;
    s3(`<!--[--><div class="${om.ssrRenderClass(["fixed left-0 top-0 z-40 w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out", t3.isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"])}"><div class="p-6 border-b border-gray-200"><div class="hover:scale-105 transition-transform duration-300"><img${om.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-24 object-contain mx-auto cursor-pointer"></div></div><nav class="p-4 space-y-2"><!--[-->`), om.ssrRenderList(Wt.unref(a2), (e2, t4) => {
      s3(`<div class="${om.ssrRenderClass(["flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200", e2.active ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"])}">`), s3(om.ssrRenderComponent(d2, { name: e2.icon, class: ["w-5 h-5 transition-colors", e2.active ? "text-blue-600" : "text-gray-500"] }, null, r3)), s3(`<span class="${om.ssrRenderClass(["font-medium transition-colors", e2.active ? "text-blue-700" : "text-gray-700"])}">${om.ssrInterpolate(e2.label)}</span></div>`);
    }), s3('<!--]--></nav><div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50"><div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer">'), s3(om.ssrRenderComponent(c2, { size: "sm", src: "https://i.pravatar.cc/40", alt: "HR User" }, null, r3)), s3('<div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900 truncate">HR Manager</p><p class="text-xs text-gray-500 truncate">hr@traspac.co.id</p></div>'), s3(om.ssrRenderComponent(d2, { name: "i-heroicons-ellipsis-vertical", class: "w-4 h-4 text-gray-400" }, null, r3)), s3("</div></div></div>"), t3.isOpen ? s3('<div class="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"></div>') : s3("<!---->"), s3("<!--]-->");
  };
} }), g = x.setup;
x.setup = (t2, s2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/layouts/hr/HRSidebar.vue"), g ? g(t2, s2) : void 0;
};
const f = Wt.defineComponent({ __name: "human-resources", __ssrInlineRender: true, setup(t2) {
  const r2 = Bs(), a2 = Wt.ref(false), n2 = Wt.ref(r2.path), i2 = Wt.ref("Dashboard"), d2 = Wt.ref("Welcome to HR Management System"), c2 = (e2) => {
    n2.value = e2, a2.value = false;
  };
  return ei({ title: () => `${i2.value} - HR Management`, meta: [{ name: "description", content: () => d2.value }] }), (t3, s2, r3, l2) => {
    s2(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen bg-gray-50" }, l2))} data-v-92489510>`), s2(om.ssrRenderComponent(x, { "is-open": Wt.unref(a2), "current-route": Wt.unref(n2), onClose: (e2) => a2.value = false, onNavigate: c2 }, null, r3)), s2(`<div class="${om.ssrRenderClass(["transition-all duration-300 ease-in-out", "md:ml-64", "flex flex-col min-h-screen"])}" data-v-92489510>`), s2(om.ssrRenderComponent(u, { "page-title": Wt.unref(i2), "page-subtitle": Wt.unref(d2), onToggleSidebar: (t4) => a2.value = !Wt.unref(a2) }, null, r3)), s2('<main class="flex-1 p-6" data-v-92489510>'), om.ssrRenderSlot(t3.$slots, "default", {}, null, s2, r3), s2("</main></div></div>");
  };
} }), b = f.setup;
f.setup = (t2, s2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("layouts/human-resources.vue"), b ? b(t2, s2) : void 0;
};
const v = o(f, [["__scopeId", "data-v-92489510"]]);

export { v as default };
//# sourceMappingURL=human-resources-BFmCZEfk.mjs.map

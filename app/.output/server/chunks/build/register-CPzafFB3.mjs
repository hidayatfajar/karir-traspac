import { u } from './Alert-B9sgIweM.mjs';
import { _ as G } from './TextField-DvcL8FOr.mjs';
import { v as Wt, s as pm, c as yb, _ as Rb, g as la } from './server.mjs';
import { s } from './logo-kt-C_l9s7Hp.mjs';
import './useLocale-BTFVrGyI.mjs';
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
import 'node:module';
import 'node:path';
import './useForwardPropsEmits-WwvTsoLV.mjs';
import './Input-DfRex13n.mjs';
import './usePortal-DtLtCtVs.mjs';
import './ConfigProvider-BxfkmoHO.mjs';
import './Kbd-CSjdA-rA.mjs';
import './PopperArrow-DcWSYcLt.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './useGraceArea-EHMcTElw.mjs';
import './Progress-BUxTXwf6.mjs';
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

const n = Wt.defineComponent({ __name: "register", __ssrInlineRender: true, setup(n2) {
  const d2 = Wt.ref({ fullName: "Fajar Nur Hidayat", email: "fajar@example.com", phone: "081234567890", password: "password123", password_confirmation: "password123" }), m = Wt.ref({ simpan: false }), p = Wt.ref({ show: false, error: false, message: "" }), u$1 = () => {
    console.log("Register attempt with:", d2.value), d2.value.password !== d2.value.password_confirmation ? p.value = { show: true, error: true, message: "Konfirmasi password tidak cocok!" } : Object.values(d2.value).some((e2) => !e2) ? p.value = { show: true, error: true, message: "Semua kolom wajib diisi!" } : p.value = { show: true, error: false, message: "Registrasi berhasil!" }, setTimeout(() => {
      p.value.show = false;
    }, 3e3);
  };
  return (n3, c, x, f) => {
    const v = u, g = G, h = yb, w = Rb, R = la;
    c(`<div${pm.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen w-full relative bg-gray-50 flex items-center justify-center p-4" }, f))}><div class="absolute inset-0 z-0 cool-blue-glow"></div><div class="relative w-full max-w-5xl bg-white rounded-2xl h-fit shadow-xl grid grid-cols-1 lg:grid-cols-2 ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden"><div class="flex flex-col justify-center p-8 sm:p-12"><div class="mb-6 text-center lg:text-left"><h1 class="text-slate-800 text-3xl font-bold leading-tight"> Buat Akun Baru </h1><p class="text-neutral-500 text-base font-medium mt-2"> Silakan isi data diri Anda untuk mendaftar. </p></div><div class="w-full flex flex-col gap-4"><div class="w-full h-10">`), p.value.show ? c(pm.ssrRenderComponent(v, { title: p.value.message, class: ["px-4 py-2 font-medium text-xs leading-4 h-auto text-center transition-all duration-500 ease-out", [p.value.error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"]] }, null, x)) : c("<!---->"), c("</div>"), c(pm.ssrRenderComponent(g, { class: "w-full", label: "Nama Lengkap", variant: "soft", placeholder: "Masukkan Nama Lengkap", size: "xl", modelValue: d2.value.fullName, "onUpdate:modelValue": (e2) => d2.value.fullName = e2 }, { leading: Wt.withCtx((e2, s2, r2, o2) => {
      if (!s2) return [Wt.createVNode(h, { name: "i-mdi-account", class: "text-PRIMARY size-5" })];
      s2(pm.ssrRenderComponent(h, { name: "i-mdi-account", class: "text-PRIMARY size-5" }, null, r2, o2));
    }), _: 1 }, x)), c(pm.ssrRenderComponent(g, { class: "w-full", label: "Email", variant: "soft", placeholder: "Masukkan Email", size: "xl", modelValue: d2.value.email, "onUpdate:modelValue": (e2) => d2.value.email = e2 }, { leading: Wt.withCtx((e2, s2, r2, o2) => {
      if (!s2) return [Wt.createVNode(h, { name: "i-mdi-email", class: "text-PRIMARY size-5" })];
      s2(pm.ssrRenderComponent(h, { name: "i-mdi-email", class: "text-PRIMARY size-5" }, null, r2, o2));
    }), _: 1 }, x)), c(pm.ssrRenderComponent(g, { label: "Password", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Masukkan Password", modelValue: d2.value.password, "onUpdate:modelValue": (e2) => d2.value.password = e2 }, { leading: Wt.withCtx((e2, s2, r2, o2) => {
      if (!s2) return [Wt.createVNode(h, { name: "i-mdi-password", class: "text-PRIMARY size-5" })];
      s2(pm.ssrRenderComponent(h, { name: "i-mdi-password", class: "text-PRIMARY size-5" }, null, r2, o2));
    }), _: 1 }, x)), c(pm.ssrRenderComponent(g, { label: "Konfirmasi Password", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Ulangi Password Anda", modelValue: d2.value.password_confirmation, "onUpdate:modelValue": (e2) => d2.value.password_confirmation = e2, onKeyup: u$1 }, { leading: Wt.withCtx((e2, s2, r2, o2) => {
      if (!s2) return [Wt.createVNode(h, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" })];
      s2(pm.ssrRenderComponent(h, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" }, null, r2, o2));
    }), _: 1 }, x)), c('</div><div class="w-full space-y-3 mt-6">'), c(pm.ssrRenderComponent(w, { class: "rounded-xl font-semibold text-base", color: "primary", variant: "solid", size: "xl", block: "", loading: m.value.simpan, disabled: m.value.simpan, onClick: (e2) => u$1() }, { default: Wt.withCtx((e2, s2, a2, r2) => {
      if (!s2) return [Wt.createTextVNode(" Daftar ")];
      s2(" Daftar ");
    }), _: 1 }, x)), c('</div><div class="text-center mt-6"><p class="text-sm text-neutral-500"> Sudah punya akun? '), c(pm.ssrRenderComponent(R, { to: "/auth/login", class: "font-medium text-PRIMARY hover:text-opacity-80" }, { default: Wt.withCtx((e2, s2, a2, r2) => {
      if (!s2) return [Wt.createTextVNode("Masuk")];
      s2("Masuk");
    }), _: 1 }, x)), c(`</p></div></div><div class="hidden lg:flex flex-col justify-center items-center gap-4 bg-slate-50 p-12 rounded-r-2xl"><div class="text-center space-y-6"><img${pm.ssrRenderAttr("src", s)} alt="Karir Traspac" class="w-56 object-contain mx-auto" onerror="this.onerror=null;this.src=&#39;https://placehold.co/224x60/e2e8f0/475569?text=Logo&#39;"><p class="text-primary text-xl font-bold capitalize"> Karir Traspac <span class="font-semibold text-slate-500"> Platform pencarian karir impian Anda. </span></p></div></div></div></div>`);
  };
} }), d = n.setup;
n.setup = (e2, s2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue"), d ? d(e2, s2) : void 0;
};

export { n as default };
//# sourceMappingURL=register-CPzafFB3.mjs.map

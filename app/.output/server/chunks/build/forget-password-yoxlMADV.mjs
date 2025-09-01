import { v as Wt, b as Fs, s as pm, c as yb, _ as Rb, g as la } from './server.mjs';
import { u } from './Alert-B9sgIweM.mjs';
import { _ as G } from './TextField-DvcL8FOr.mjs';
import B from './PinInputField-BMDBNcbG.mjs';
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
import 'node:module';
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
import './useLocale-BTFVrGyI.mjs';
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
import './VisuallyHiddenInput-CkJh8-LE.mjs';
import './usePrimitiveElement-DSug4YUi.mjs';
import './useArrowNavigation-Cic7byI7.mjs';
import './getActiveElement-CxMYnBFR.mjs';

const d = Wt.defineComponent({ __name: "forget-password", __ssrInlineRender: true, setup(d2) {
  const m2 = Wt.ref("email"), p = Fs(), u$1 = Wt.ref({ email: "fajar@example.com", pin: ["", "", "", "", "", ""], newPassword: "", confirmPassword: "" }), c = Wt.ref({ simpan: false }), f = Wt.ref({ show: false, error: false, message: "" }), x = (e2, t2, s2 = 3e3) => {
    f.value = { show: true, error: t2, message: e2 }, setTimeout(() => {
      f.value.show = false;
    }, s2);
  }, v = () => {
    u$1.value.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u$1.value.email) ? (c.value.simpan = true, console.log("Sending verification code to:", u$1.value.email), setTimeout(() => {
      x("Kode verifikasi berhasil dikirim!", false), c.value.simpan = false, setTimeout(() => {
        m2.value = "otp", f.value.show = false;
      }, 1e3);
    }, 1500)) : x("Format email tidak valid!", true);
  }, w = () => {
    u$1.value.newPassword && u$1.value.confirmPassword ? u$1.value.newPassword === u$1.value.confirmPassword ? (c.value.simpan = true, console.log("Resetting password..."), x("Password berhasil diubah! Anda akan diarahkan ke halaman login.", false, 4e3), setTimeout(() => {
      p.push("/auth/login"), c.value.simpan = false;
    }, 2e3)) : x("Konfirmasi password tidak cocok!", true) : x("Password tidak boleh kosong!", true);
  };
  return (t2, d3, p2, g) => {
    const h = yb, b = u, k = G, R = Rb, P = la, j = B;
    d3(`<div${pm.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen w-full relative bg-gray-50 flex items-center justify-center p-4" }, g))}><div class="absolute inset-0 z-0 cool-blue-glow"></div><div class="relative w-full max-w-md bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden">`), "email" === Wt.unref(m2) ? (d3('<div class="p-8 sm:p-10 transition-all duration-300"><div class="mb-6 text-center">'), d3(pm.ssrRenderComponent(h, { name: "i-mdi-email-fast-outline", class: "text-PRIMARY text-5xl mx-auto" }, null, p2)), d3('<h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4"> Lupa Password? </h1><p class="text-neutral-500 text-base font-medium mt-2"> Jangan khawatir! Masukkan email Anda di bawah ini untuk menerima kode verifikasi. </p></div><div class="w-full flex flex-col gap-4"><div class="w-full h-10">'), Wt.unref(f).show ? d3(pm.ssrRenderComponent(b, { title: Wt.unref(f).message, class: ["px-4 py-2 font-medium text-xs leading-4 h-auto text-center", [Wt.unref(f).error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"]] }, null, p2)) : d3("<!---->"), d3("</div>"), d3(pm.ssrRenderComponent(k, { class: "w-full", label: "Email", variant: "soft", placeholder: "Masukkan Email Anda", size: "xl", modelValue: Wt.unref(u$1).email, "onUpdate:modelValue": (t3) => Wt.unref(u$1).email = t3, onKeyup: v }, { leading: Wt.withCtx((t3, a2, i2, r2) => {
      if (!a2) return [Wt.createVNode(h, { name: "i-mdi-email", class: "text-PRIMARY size-5" })];
      a2(pm.ssrRenderComponent(h, { name: "i-mdi-email", class: "text-PRIMARY size-5" }, null, i2, r2));
    }), _: 1 }, p2)), d3('</div><div class="w-full space-y-3 mt-6">'), d3(pm.ssrRenderComponent(R, { class: "rounded-xl font-semibold text-base", color: "primary", variant: "solid", size: "xl", block: "", loading: Wt.unref(c).simpan, disabled: Wt.unref(c).simpan, onClick: (e2) => v() }, { default: Wt.withCtx((t3, s2, a2, i2) => {
      if (!s2) return [Wt.createTextVNode(" Kirim Kode Verifikasi ")];
      s2(" Kirim Kode Verifikasi ");
    }), _: 1 }, p2)), d3('</div><div class="text-center mt-6"><p class="text-sm text-neutral-500">'), d3(pm.ssrRenderComponent(P, { to: "/auth/login", class: "font-medium text-PRIMARY hover:text-opacity-80 inline-flex items-center gap-1" }, { default: Wt.withCtx((t3, a2, i2, r2) => {
      if (!a2) return [Wt.createVNode(h, { name: "i-mdi-arrow-left" }), Wt.createTextVNode(" Kembali ke Login ")];
      a2(pm.ssrRenderComponent(h, { name: "i-mdi-arrow-left" }, null, i2, r2)), a2(" Kembali ke Login ");
    }), _: 1 }, p2)), d3("</p></div></div>")) : "otp" === Wt.unref(m2) ? (d3('<div class="p-8 sm:p-10 transition-all duration-300"><div class="mb-6 text-center">'), d3(pm.ssrRenderComponent(h, { name: "i-mdi-numeric-6-box-multiple-outline", class: "text-PRIMARY text-5xl mx-auto" }, null, p2)), d3(`<h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4"> Masukkan Kode OTP </h1><p class="text-neutral-500 text-base font-medium mt-2"> Kami telah mengirimkan 6 digit kode verifikasi ke email <span class="font-bold text-slate-600">${pm.ssrInterpolate(Wt.unref(u$1).email)}</span>. </p></div><div class="w-full h-10 mb-4">`), Wt.unref(f).show ? d3(pm.ssrRenderComponent(b, { title: Wt.unref(f).message, class: ["px-4 py-2 font-medium text-xs leading-4 h-auto text-center", [Wt.unref(f).error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"]] }, null, p2)) : d3("<!---->"), d3('</div><div class="w-full flex justify-center my-8">'), d3(pm.ssrRenderComponent(j, { modelValue: Wt.unref(u$1).pin, "onUpdate:modelValue": (t3) => Wt.unref(u$1).pin = t3, length: 6, disabled: Wt.unref(c).simpan, type: "number", otp: "", color: "primary", highlight: "", size: "lg", placeholder: "-" }, null, p2)), d3('</div><div class="w-full space-y-3 mt-6">'), d3(pm.ssrRenderComponent(R, { class: "rounded-xl font-semibold text-base", color: "primary", variant: "solid", size: "xl", block: "", loading: Wt.unref(c).simpan, disabled: Wt.unref(c).simpan, onClick: (e2) => {
      6 === u$1.value.pin.length ? (c.value.simpan = true, console.log("Verifying OTP:", u$1.value.pin), setTimeout(() => {
        "123456" === u$1.value.pin.join("") ? (x("Verifikasi berhasil!", false), setTimeout(() => {
          m2.value = "reset", f.value.show = false;
        }, 1e3)) : (x("Kode OTP salah! Silakan coba lagi.", true), u$1.value.pin = ["", "", "", "", "", ""]), c.value.simpan = false;
      }, 1500)) : x("Kode OTP harus 6 digit!", true);
    } }, { default: Wt.withCtx((t3, s2, a2, i2) => {
      if (!s2) return [Wt.createTextVNode(" Verifikasi ")];
      s2(" Verifikasi ");
    }), _: 1 }, p2)), d3('</div><div class="text-center mt-6"><p class="text-sm text-neutral-500"> Tidak menerima kode? <button class="font-medium text-PRIMARY hover:text-opacity-80"> Kirim Ulang </button></p></div></div>')) : "reset" === Wt.unref(m2) ? (d3('<div class="p-8 sm:p-10 transition-all duration-300"><div class="mb-6 text-center">'), d3(pm.ssrRenderComponent(h, { name: "i-mdi-lock-reset", class: "text-PRIMARY text-5xl mx-auto" }, null, p2)), d3('<h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4"> Buat Password Baru </h1><p class="text-neutral-500 text-base font-medium mt-2"> Password baru Anda harus berbeda dari password sebelumnya. </p></div><div class="w-full flex flex-col gap-4"><div class="w-full h-10">'), Wt.unref(f).show ? d3(pm.ssrRenderComponent(b, { title: Wt.unref(f).message, class: ["px-4 py-2 font-medium text-xs leading-4 h-auto text-center", [Wt.unref(f).error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"]] }, null, p2)) : d3("<!---->"), d3("</div>"), d3(pm.ssrRenderComponent(k, { label: "Password Baru", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Masukkan Password Baru", modelValue: Wt.unref(u$1).newPassword, "onUpdate:modelValue": (t3) => Wt.unref(u$1).newPassword = t3 }, { leading: Wt.withCtx((t3, a2, i2, r2) => {
      if (!a2) return [Wt.createVNode(h, { name: "i-mdi-password", class: "text-PRIMARY size-5" })];
      a2(pm.ssrRenderComponent(h, { name: "i-mdi-password", class: "text-PRIMARY size-5" }, null, i2, r2));
    }), _: 1 }, p2)), d3(pm.ssrRenderComponent(k, { label: "Konfirmasi Password Baru", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Ulangi Password Baru Anda", modelValue: Wt.unref(u$1).confirmPassword, "onUpdate:modelValue": (t3) => Wt.unref(u$1).confirmPassword = t3, onKeyup: w }, { leading: Wt.withCtx((t3, a2, i2, r2) => {
      if (!a2) return [Wt.createVNode(h, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" })];
      a2(pm.ssrRenderComponent(h, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" }, null, i2, r2));
    }), _: 1 }, p2)), d3('</div><div class="w-full space-y-3 mt-6">'), d3(pm.ssrRenderComponent(R, { class: "rounded-xl font-semibold text-base", color: "primary", variant: "solid", size: "xl", block: "", loading: Wt.unref(c).simpan, disabled: Wt.unref(c).simpan, onClick: (e2) => w() }, { default: Wt.withCtx((t3, s2, a2, i2) => {
      if (!s2) return [Wt.createTextVNode(" Reset Password ")];
      s2(" Reset Password ");
    }), _: 1 }, p2)), d3("</div></div>")) : d3("<!---->"), d3("</div></div>");
  };
} }), m = d.setup;
d.setup = (t2, s2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/auth/forget-password.vue"), m ? m(t2, s2) : void 0;
};

export { d as default };
//# sourceMappingURL=forget-password-yoxlMADV.mjs.map

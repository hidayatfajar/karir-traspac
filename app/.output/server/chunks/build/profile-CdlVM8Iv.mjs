import { v as Wt, s as om, d as Sb, _ as kb, c as hb } from './server.mjs';
import { _ as Z } from './TextField-BAbDp9z3.mjs';
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
import './useForwardPropsEmits-DnSfSOTI.mjs';
import './Input-BTq7Ekjb.mjs';
import './usePortal-DzDMWCd7.mjs';
import './ConfigProvider-C3zU966T.mjs';
import './Kbd-2mh2A80S.mjs';
import './PopperArrow-BQDIGHqG.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';
import './useGraceArea-B4Y81dwR.mjs';
import './Progress-BetH7UXp.mjs';
import './useLocale-BepRiSpk.mjs';
import './nullish-aV-w2MPu.mjs';

const i = Wt.defineComponent({ __name: "profile", __ssrInlineRender: true, setup(i2) {
  const r2 = Wt.ref(false), n = Wt.ref({ fullName: "Fajar Nur Hidayat", email: "fajar@example.com", phone: "081234567890", oldPassword: "", newPassword: "", confirmPassword: "" }), d = Wt.ref({ simpan: false });
  return (i3, m, p, u) => {
    const c = Sb, x = kb, v = hb, f = Z, R = Wt.resolveComponent("UDivider");
    m(`<div${om.ssrRenderAttrs(Wt.mergeProps({ class: "min-h-screen w-full relative bg-gray-50 flex justify-center p-4 py-12 sm:py-20" }, u))}><div class="absolute inset-0 z-0 cool-blue-glow"></div><div class="relative w-full max-w-3xl bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden"><div class="p-8 sm:p-10"><div class="mb-8 text-center"><h1 class="text-slate-800 text-3xl font-bold leading-tight"> Profil Saya </h1><p class="text-neutral-500 text-base font-medium mt-2"> Kelola informasi akun dan data pribadi Anda. </p></div><div class="flex flex-col items-center gap-4 mb-8">`), m(om.ssrRenderComponent(c, { src: "https://avatars.githubusercontent.com/u/739984?v=4", alt: "Avatar", size: "3xl" }, null, p)), r2.value ? (m("<div>"), m(om.ssrRenderComponent(x, { label: "Ubah Foto", variant: "outline", color: "neutral", icon: "i-mdi-camera-outline" }, null, p)), m("</div>")) : m("<!---->"), m("</div>"), r2.value ? (m('<div class="w-full"><div class="w-full flex flex-col gap-4"><h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-2">Data Pribadi</h2>'), m(om.ssrRenderComponent(f, { class: "w-full", label: "Nama Lengkap", variant: "soft", placeholder: "Masukkan Nama Lengkap", size: "xl", modelValue: n.value.fullName, "onUpdate:modelValue": (e2) => n.value.fullName = e2 }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-account", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-account", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m(om.ssrRenderComponent(f, { class: "w-full", label: "Email", variant: "soft", placeholder: "Masukkan Email", size: "xl", modelValue: n.value.email, "onUpdate:modelValue": (e2) => n.value.email = e2, disabled: "" }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-email", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-email", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m(om.ssrRenderComponent(f, { class: "w-full", label: "No. Telp (WhatsApp)", variant: "soft", placeholder: "Contoh: 081234567890", size: "xl", modelValue: n.value.phone, "onUpdate:modelValue": (e2) => n.value.phone = e2 }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-whatsapp", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-whatsapp", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m("</div>"), m(om.ssrRenderComponent(R, { class: "my-8" }, null, p)), m('<div class="w-full flex flex-col gap-4"><h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-2">Ubah Password</h2>'), m(om.ssrRenderComponent(f, { label: "Password Lama", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Masukkan Password Lama", modelValue: n.value.oldPassword, "onUpdate:modelValue": (e2) => n.value.oldPassword = e2 }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-lock-outline", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-lock-outline", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m(om.ssrRenderComponent(f, { label: "Password Baru", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Masukkan Password Baru", modelValue: n.value.newPassword, "onUpdate:modelValue": (e2) => n.value.newPassword = e2 }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-password", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-password", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m(om.ssrRenderComponent(f, { label: "Konfirmasi Password Baru", class: "w-full", variant: "soft", type: "password", size: "xl", placeholder: "Ulangi Password Baru Anda", modelValue: n.value.confirmPassword, "onUpdate:modelValue": (e2) => n.value.confirmPassword = e2 }, { leading: Wt.withCtx((a2, l2, t2, o2) => {
      if (!l2) return [Wt.createVNode(v, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" })];
      l2(om.ssrRenderComponent(v, { name: "i-mdi-check-decagram", class: "text-PRIMARY size-5" }, null, t2, o2));
    }), _: 1 }, p)), m('</div><div class="w-full mt-8 flex flex-col sm:flex-row gap-4">'), m(om.ssrRenderComponent(x, { label: "Batal", color: "neutral", variant: "outline", size: "xl", class: "w-full sm:w-1/2 rounded-xl font-semibold text-base justify-center", onClick: (e2) => r2.value = false }, null, p)), m(om.ssrRenderComponent(x, { label: "Simpan Perubahan", color: "primary", variant: "solid", size: "xl", class: "w-full sm:w-1/2 rounded-xl font-semibold text-base justify-center", loading: d.value.simpan, disabled: d.value.simpan, onClick: (e2) => (d.value.simpan = true, console.log("Menyimpan perubahan:", n.value), void setTimeout(() => {
      d.value.simpan = false, r2.value = false;
    }, 1500)) }, null, p)), m("</div></div>")) : (m('<div class="w-full space-y-6"><div><h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-4">Data Pribadi</h2><div class="space-y-4"><div class="flex items-center">'), m(om.ssrRenderComponent(v, { name: "i-mdi-account", class: "text-PRIMARY size-5 mr-3" }, null, p)), m(`<div><p class="text-sm text-slate-500">Nama Lengkap</p><p class="text-base text-slate-800 font-medium">${om.ssrInterpolate(n.value.fullName)}</p></div></div><div class="flex items-center">`), m(om.ssrRenderComponent(v, { name: "i-mdi-email", class: "text-PRIMARY size-5 mr-3" }, null, p)), m(`<div><p class="text-sm text-slate-500">Email</p><p class="text-base text-slate-800 font-medium">${om.ssrInterpolate(n.value.email)}</p></div></div><div class="flex items-center">`), m(om.ssrRenderComponent(v, { name: "i-mdi-whatsapp", class: "text-PRIMARY size-5 mr-3" }, null, p)), m(`<div><p class="text-sm text-slate-500">No. Telp (WhatsApp)</p><p class="text-base text-slate-800 font-medium">${om.ssrInterpolate(n.value.phone)}</p></div></div></div></div><div class="w-full pt-4">`), m(om.ssrRenderComponent(x, { label: "Ubah Profil", color: "primary", variant: "solid", size: "xl", block: "", icon: "i-mdi-pencil-outline", onClick: (e2) => r2.value = true }, null, p)), m("</div></div>")), m("</div></div></div>");
  };
} }), r = i.setup;
i.setup = (s2, a2) => {
  const l2 = Wt.useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue"), r ? r(s2, a2) : void 0;
};

export { i as default };
//# sourceMappingURL=profile-CdlVM8Iv.mjs.map

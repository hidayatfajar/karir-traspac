import { v as Wt, b as Fs, s as om, _ as kb, c as hb, d as Sb, u as ua, a as Sm, r as Mm, t as Hy, P as xm } from './server.mjs';
import { _ as Z } from './TextField-BAbDp9z3.mjs';
import { z as ze } from './SelectMenu-Dc6b35ZD.mjs';
import { c } from './index-CLkrk2zK.mjs';
import { l } from './useLocale-BepRiSpk.mjs';
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
import './nullish-aV-w2MPu.mjs';
import './usePrimitiveElement-BqlHGOiE.mjs';
import './Collection-CK0B56BN.mjs';
import './utils-B3GHb33t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useTypeahead-CXda91ln.mjs';
import './useFormControl-BKZlrIrW.mjs';
import './VisuallyHiddenInput-BCSgpyOT.mjs';
import './useKbd-kRIii9yh.mjs';
import './handleAndDispatchCustomEvent-V4GPqTEe.mjs';
import './useBodyScrollLock-BoUAQdAA.mjs';

function g(e2) {
  return function(e3) {
    return "[object Object]" === Object.prototype.toString.call(e3);
  }(e2) || Array.isArray(e2);
}
function v(e2, a2) {
  const t2 = Object.keys(e2), i2 = Object.keys(a2);
  if (t2.length !== i2.length) return false;
  return JSON.stringify(Object.keys(e2.breakpoints || {})) === JSON.stringify(Object.keys(a2.breakpoints || {})) && t2.every((t3) => {
    const i3 = e2[t3], s2 = a2[t3];
    return "function" == typeof i3 ? `${i3}` == `${s2}` : g(i3) && g(s2) ? v(i3, s2) : i3 === s2;
  });
}
function b(e2) {
  return e2.concat().sort((e3, a2) => e3.name > a2.name ? 1 : -1).map((e3) => e3.options);
}
function f(a2 = {}, t2 = []) {
  const i2 = Wt.isRef(a2), s2 = Wt.isRef(t2);
  let r2 = i2 ? a2.value : a2, n2 = s2 ? t2.value : t2;
  const l2 = Wt.shallowRef(), o2 = Wt.shallowRef();
  function d2() {
    o2.value && o2.value.reInit(r2, n2);
  }
  return i2 && Wt.watch(a2, (e2) => {
    v(r2, e2) || (r2 = e2, d2());
  }), s2 && Wt.watch(t2, (e2) => {
    (function(e3, a3) {
      if (e3.length !== a3.length) return false;
      const t3 = b(e3), i3 = b(a3);
      return t3.every((e4, a4) => v(e4, i3[a4]));
    })(n2, e2) || (n2 = e2, d2());
  }), [l2, o2];
}
f.globalOptions = void 0;
const h = { slots: { root: "relative focus:outline-none", viewport: "overflow-hidden", container: "flex items-start", item: "min-w-0 shrink-0 basis-full", controls: "", arrows: "", prev: "absolute rounded-full", next: "absolute rounded-full", dots: "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3", dot: ["cursor-pointer size-3 bg-accented rounded-full", "transition"] }, variants: { orientation: { vertical: { container: "flex-col -mt-4", item: "pt-4", prev: "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90", next: "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90" }, horizontal: { container: "flex-row -ms-4", item: "ps-4", prev: "start-4 sm:-start-12 top-1/2 -translate-y-1/2", next: "end-4 sm:-end-12 top-1/2 -translate-y-1/2" } }, active: { true: { dot: "data-[state=active]:bg-inverted" } } } }, y = { __name: "Carousel", __ssrInlineRender: true, props: { as: { type: null, required: false }, prev: { type: Object, required: false }, prevIcon: { type: String, required: false }, next: { type: Object, required: false }, nextIcon: { type: String, required: false }, arrows: { type: Boolean, required: false, default: false }, dots: { type: Boolean, required: false, default: false }, orientation: { type: null, required: false, default: "horizontal" }, items: { type: Array, required: false }, autoplay: { type: [Boolean, Object], required: false, default: false }, autoScroll: { type: [Boolean, Object], required: false, default: false }, autoHeight: { type: [Boolean, Object], required: false, default: false }, classNames: { type: [Boolean, Object], required: false, default: false }, fade: { type: [Boolean, Object], required: false, default: false }, wheelGestures: { type: Boolean, required: false, skipCheck: true, default: false }, class: { type: null, required: false }, ui: { type: null, required: false }, align: { type: [String, Function], required: false, default: "center" }, containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" }, slidesToScroll: { type: [String, Number], required: false, default: 1 }, dragFree: { type: Boolean, required: false, default: false }, dragThreshold: { type: Number, required: false, default: 10 }, inViewThreshold: { type: null, required: false, default: 0 }, loop: { type: Boolean, required: false, default: false }, skipSnaps: { type: Boolean, required: false, default: false }, duration: { type: Number, required: false, default: 25 }, startIndex: { type: Number, required: false, default: 0 }, watchDrag: { type: [Boolean, Function], required: false, default: true }, watchResize: { type: [Boolean, Function], required: false, default: true }, watchSlides: { type: [Boolean, Function], required: false, default: true }, watchFocus: { type: [Boolean, Function], required: false, default: true }, active: { type: Boolean, required: false, default: true }, breakpoints: { type: Object, required: false, default: () => ({}) } }, emits: ["select"], setup(o2, { expose: d2, emit: m2 }) {
  const u2 = o2, { dir: p2, t: g2 } = l(), v2 = ua(), b2 = Sm(Mm(u2, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus")), y2 = Wt.computed(() => u2.prevIcon || ("rtl" === p2.value ? v2.ui.icons.arrowRight : v2.ui.icons.arrowLeft)), k2 = Wt.computed(() => u2.nextIcon || ("rtl" === p2.value ? v2.ui.icons.arrowLeft : v2.ui.icons.arrowRight)), w2 = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(h), ...(null == (e2 = v2.ui) ? void 0 : e2.carousel) || {} })({ orientation: u2.orientation });
  }), j2 = Wt.computed(() => ({ ...u2.fade ? { align: "center", containScroll: false } : {}, ...b2.value, axis: "horizontal" === u2.orientation ? "x" : "y", direction: "rtl" === p2.value ? "rtl" : "ltr" })), R = c(async () => {
    const e2 = [];
    if (u2.autoplay) {
      const a2 = await import('./embla-carousel-autoplay.esm-BBRRh7my.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof u2.autoplay ? {} : u2.autoplay));
    }
    if (u2.autoScroll) {
      const a2 = await import('./embla-carousel-auto-scroll.esm-D6K5luu_.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof u2.autoScroll ? {} : u2.autoScroll));
    }
    if (u2.autoHeight) {
      const a2 = await import('./embla-carousel-auto-height.esm-D2AJx4eL.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof u2.autoHeight ? {} : u2.autoHeight));
    }
    if (u2.classNames) {
      const a2 = await import('./embla-carousel-class-names.esm-DZ_9LAlh.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof u2.classNames ? {} : u2.classNames));
    }
    if (u2.fade) {
      const a2 = await import('./embla-carousel-fade.esm-Ct6_2HCn.mjs').then((e3) => e3.default);
      e2.push(a2("boolean" == typeof u2.fade ? {} : u2.fade));
    }
    if (u2.wheelGestures) {
      const { WheelGesturesPlugin: a2 } = await import('./embla-carousel-wheel-gestures.esm-BvaQ4ZQa.mjs');
      e2.push(a2("boolean" == typeof u2.wheelGestures ? {} : u2.wheelGestures));
    }
    return e2;
  }), [C, S] = f(j2.value, R.value);
  function q() {
    var e2;
    null == (e2 = S.value) || e2.scrollPrev();
  }
  function T() {
    var e2;
    null == (e2 = S.value) || e2.scrollNext();
  }
  function I(e2) {
    const a2 = "vertical" === u2.orientation ? "ArrowUp" : "ArrowLeft", t2 = "vertical" === u2.orientation ? "ArrowDown" : "ArrowRight";
    if (e2.key === a2) return e2.preventDefault(), void q();
    e2.key === t2 && (e2.preventDefault(), T());
  }
  Wt.watch([j2, R], () => {
    var e2;
    null == (e2 = S.value) || e2.reInit(j2.value, R.value);
  });
  const $ = Wt.ref(false), P = Wt.ref(false), B = Wt.ref(0), D = Wt.ref([]);
  function _(e2) {
    return "object" == typeof e2 && null !== e2;
  }
  return d2({ emblaRef: C, emblaApi: S }), (a2, t2, i2, s2) => {
    var d3;
    t2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: o2.as, role: "region", "aria-roledescription": "carousel", tabindex: "0", class: w2.value.root({ class: [null == (d3 = u2.ui) ? void 0 : d3.root, u2.class] }), onKeydown: I }, s2), { default: Wt.withCtx((t3, i3, s3, n2) => {
      var d4, m3, p3, c2, x2, v3, b3, f2, h2, j3, R2, I2, A, N;
      if (!i3) return [Wt.createVNode("div", { ref_key: "emblaRef", ref: C, class: w2.value.viewport({ class: null == (f2 = u2.ui) ? void 0 : f2.viewport }) }, [Wt.createVNode("div", { class: w2.value.container({ class: null == (h2 = u2.ui) ? void 0 : h2.container }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(o2.items, (t4, i4) => {
        var s4, r2;
        return Wt.openBlock(), Wt.createBlock("div", { key: i4, role: "group", "aria-roledescription": "slide", class: w2.value.item({ class: [null == (s4 = u2.ui) ? void 0 : s4.item, _(t4) && (null == (r2 = t4.ui) ? void 0 : r2.item), _(t4) && t4.class] }) }, [Wt.renderSlot(a2.$slots, "default", { item: t4, index: i4 })], 2);
      }), 128))], 2)], 2), o2.arrows || o2.dots ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: w2.value.controls({ class: null == (j3 = u2.ui) ? void 0 : j3.controls }) }, [o2.arrows ? (Wt.openBlock(), Wt.createBlock("div", { key: 0, class: w2.value.arrows({ class: null == (R2 = u2.ui) ? void 0 : R2.arrows }) }, [Wt.createVNode(kb, Wt.mergeProps({ disabled: !P.value, icon: y2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(g2)("carousel.prev") }, "object" == typeof o2.prev ? o2.prev : void 0, { class: w2.value.prev({ class: null == (I2 = u2.ui) ? void 0 : I2.prev }), onClick: q }), null, 16, ["disabled", "icon", "aria-label", "class"]), Wt.createVNode(kb, Wt.mergeProps({ disabled: !$.value, icon: k2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(g2)("carousel.next") }, "object" == typeof o2.next ? o2.next : void 0, { class: w2.value.next({ class: null == (A = u2.ui) ? void 0 : A.next }), onClick: T }), null, 16, ["disabled", "icon", "aria-label", "class"])], 2)) : Wt.createCommentVNode("", true), o2.dots ? (Wt.openBlock(), Wt.createBlock("div", { key: 1, class: w2.value.dots({ class: null == (N = u2.ui) ? void 0 : N.dots }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(D.value, (a3, t4) => {
        var i4;
        return Wt.openBlock(), Wt.createBlock("button", { key: t4, "aria-label": Wt.unref(g2)("carousel.goto", { slide: t4 + 1 }), class: w2.value.dot({ class: null == (i4 = u2.ui) ? void 0 : i4.dot, active: B.value === t4 }), "data-state": B.value === t4 ? "active" : void 0, onClick: (e2) => function(e3) {
          var a4;
          null == (a4 = S.value) || a4.scrollTo(e3);
        }(t4) }, null, 10, ["aria-label", "data-state", "onClick"]);
      }), 128))], 2)) : Wt.createCommentVNode("", true)], 2)) : Wt.createCommentVNode("", true)];
      i3(`<div class="${om.ssrRenderClass(w2.value.viewport({ class: null == (d4 = u2.ui) ? void 0 : d4.viewport }))}"${n2}><div class="${om.ssrRenderClass(w2.value.container({ class: null == (m3 = u2.ui) ? void 0 : m3.container }))}"${n2}><!--[-->`), om.ssrRenderList(o2.items, (e2, t4) => {
        var l2, o3;
        i3(`<div role="group" aria-roledescription="slide" class="${om.ssrRenderClass(w2.value.item({ class: [null == (l2 = u2.ui) ? void 0 : l2.item, _(e2) && (null == (o3 = e2.ui) ? void 0 : o3.item), _(e2) && e2.class] }))}"${n2}>`), om.ssrRenderSlot(a2.$slots, "default", { item: e2, index: t4 }, null, i3, s3, n2), i3("</div>");
      }), i3("<!--]--></div></div>"), o2.arrows || o2.dots ? (i3(`<div class="${om.ssrRenderClass(w2.value.controls({ class: null == (p3 = u2.ui) ? void 0 : p3.controls }))}"${n2}>`), o2.arrows ? (i3(`<div class="${om.ssrRenderClass(w2.value.arrows({ class: null == (c2 = u2.ui) ? void 0 : c2.arrows }))}"${n2}>`), i3(om.ssrRenderComponent(kb, Wt.mergeProps({ disabled: !P.value, icon: y2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(g2)("carousel.prev") }, "object" == typeof o2.prev ? o2.prev : void 0, { class: w2.value.prev({ class: null == (x2 = u2.ui) ? void 0 : x2.prev }), onClick: q }), null, s3, n2)), i3(om.ssrRenderComponent(kb, Wt.mergeProps({ disabled: !$.value, icon: k2.value, color: "neutral", variant: "outline", "aria-label": Wt.unref(g2)("carousel.next") }, "object" == typeof o2.next ? o2.next : void 0, { class: w2.value.next({ class: null == (v3 = u2.ui) ? void 0 : v3.next }), onClick: T }), null, s3, n2)), i3("</div>")) : i3("<!---->"), o2.dots ? (i3(`<div class="${om.ssrRenderClass(w2.value.dots({ class: null == (b3 = u2.ui) ? void 0 : b3.dots }))}"${n2}><!--[-->`), om.ssrRenderList(D.value, (a3, t4) => {
        var s4;
        i3(`<button${om.ssrRenderAttr("aria-label", Wt.unref(g2)("carousel.goto", { slide: t4 + 1 }))} class="${om.ssrRenderClass(w2.value.dot({ class: null == (s4 = u2.ui) ? void 0 : s4.dot, active: B.value === t4 }))}"${om.ssrRenderAttr("data-state", B.value === t4 ? "active" : void 0)}${n2}></button>`);
      }), i3("<!--]--></div>")) : i3("<!---->"), i3("</div>")) : i3("<!---->");
    }), _: 3 }, i2));
  };
} }, k = y.setup;
y.setup = (a2, t2) => {
  const i2 = Wt.useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue"), k ? k(a2, t2) : void 0;
};
const w = Wt.defineComponent({ __name: "index", __ssrInlineRender: true, setup(a2) {
  const t2 = Wt.ref([]), i2 = Fs(), s2 = Wt.ref(false), n2 = Wt.ref({ total_user: 1247, user_hari_ini: 23, jumlah_lowongan: 45, total_diterima: 312 }), c2 = Wt.ref([{ id: 1, title: "Frontend Developer", description: "Bergabung dengan tim development untuk mengembangkan aplikasi web modern menggunakan React, Vue.js, dan teknologi frontend terdepan.", location: "Jakarta, Indonesia", type: "Full-time", typeColor: "bg-green-100 text-green-800", icon: "fa6-solid:code" }, { id: 2, title: "Backend Developer", description: "Kembangkan sistem backend yang scalable menggunakan Node.js, Python, atau Java untuk mendukung aplikasi dengan jutaan pengguna.", location: "Remote / Jakarta", type: "Remote", typeColor: "bg-blue-100 text-blue-800", icon: "fa6-solid:server" }, { id: 3, title: "UI/UX Designer", description: "Ciptakan pengalaman pengguna yang luar biasa melalui desain interface yang intuitif dan menarik untuk produk digital kami.", location: "Bandung, Indonesia", type: "Full-time", typeColor: "bg-green-100 text-green-800", icon: "fa6-solid:palette" }, { id: 4, title: "Data Analyst", description: "Analisis data untuk memberikan insights bisnis yang valuable menggunakan Python, SQL, dan tools visualisasi data modern.", location: "Jakarta, Indonesia", type: "Part-time", typeColor: "bg-orange-100 text-orange-800", icon: "fa6-solid:chart-line" }, { id: 5, title: "Mobile Developer", description: "Kembangkan aplikasi mobile native dan cross-platform menggunakan Flutter, React Native, atau teknologi mobile terbaru.", location: "Surabaya, Indonesia", type: "Full-time", typeColor: "bg-green-100 text-green-800", icon: "fa6-solid:mobile-screen-button" }, { id: 6, title: "Product Manager", description: "Lead product development dari konsep hingga eksekusi, bekerja sama dengan tim engineering dan design untuk menciptakan produk yang luar biasa.", location: "Remote / Jakarta", type: "Remote", typeColor: "bg-blue-100 text-blue-800", icon: "fa6-solid:users" }]), x2 = [{ title: "Visi", icon: "i-mdi-eye", levels: ["Menjadi Perusahaan Solusi Teknologi Informasi yang inovatif dan kokoh dalam pelayanan pelanggan."], bg: "bg-indigo-100", border: "border-indigo-200", rotation: { bg: "rotate-3", card: "-rotate-1" } }, { title: "Misi", icon: "i-hugeicons:target-02", levels: ["Memberikan nilai tambah kepada pelanggan", "Menjamin kemakmuran jangka panjang kepada karyawan dan stakeholder", "Meningkatkan pertumbuhan perusahaan", "Menjadi tempat bekerja yang sehat"], bg: "bg-purple-100", border: "border-purple-200", rotation: { bg: "-rotate-3", card: "rotate-1" } }, { title: "Nilai-Nilai Traspac ", icon: "i-mdi:flower-tulip", levels: ["Integritas", "Semangat", "Profesional"], bg: "bg-blue-100", border: "border-blue-200", rotation: { bg: "rotate-3", card: "-rotate-1" } }], g2 = [{ name: "Sarah Johnson", position: "Product Designer at TechCorp", avatar: "https://randomuser.me/api/portraits/women/32.jpg", quote: "Platform ini sangat membantu saya menemukan pekerjaan yang sesuai dengan passion saya. Proses rekrutmennya transparan dan cepat. Dalam waktu 2 minggu setelah mendaftar, saya sudah mendapatkan tawaran pekerjaan!" }, { name: "Michael Chen", position: "Senior Developer at DataSystems", avatar: "https://randomuser.me/api/portraits/men/64.jpg", quote: "Saya sangat terkesan dengan kualitas lowongan yang tersedia di platform ini. Tidak seperti situs pekerjaan lainnya yang penuh dengan spam, di sini semuanya relevan dan berkualitas tinggi. Tim support juga sangat responsif." }, { name: "Aisha Rahman", position: "Marketing Manager at CreativeMinds", avatar: "https://randomuser.me/api/portraits/women/68.jpg", quote: "Sebagai fresh graduate, saya kesulitan menemukan pekerjaan yang sesuai. Setelah mencoba, saya mendapatkan beberapa panggilan interview dalam waktu singkat. Sekarang saya bekerja di perusahaan impian saya!" }], v2 = Wt.ref([{ id: 1, category: "application", question: "Bagaimana cara melamar pekerjaan di PT. Traspac Makmur Sejahtera?", answer: "Anda dapat melamar pekerjaan melalui halaman karir kami dengan mengklik tombol 'Lamar Sekarang' pada posisi yang diminati. Pastikan untuk melengkapi profil dan mengunggah CV terbaru Anda. Tim HR kami akan meninjau aplikasi Anda dalam 3-5 hari kerja." }, { id: 2, category: "application", question: "Dokumen apa saja yang diperlukan untuk melamar?", answer: "Dokumen yang diperlukan meliputi CV terbaru, surat lamaran, portfolio (untuk posisi teknis/kreatif), dan sertifikat relevan. Pastikan semua dokumen dalam format PDF dengan ukuran maksimal 5MB per file." }, { id: 3, category: "interview", question: "Seperti apa proses interview di PT. Traspac Makmur Sejahtera?", answer: "Proses interview terdiri dari 3 tahap: screening awal via telepon/video call, technical interview dengan tim teknis, dan final interview dengan hiring manager. Setiap tahap berlangsung 45-60 menit dengan fokus pada kemampuan teknis dan cultural fit." }, { id: 4, category: "interview", question: "Berapa lama proses rekrutmen berlangsung?", answer: "Proses rekrutmen biasanya memakan waktu 2-3 minggu dari aplikasi hingga keputusan akhir. Kami akan memberikan update status aplikasi Anda di setiap tahap proses melalui email." }, { id: 5, category: "benefits", question: "Apa saja benefit yang ditawarkan PT. Traspac Makmur Sejahtera?", answer: "Kami menawarkan paket benefit komprehensif termasuk asuransi kesehatan, tunjangan makan, flexible working hours, work from home policy, annual leave 12 hari, training & development budget, dan bonus performa tahunan." }, { id: 6, category: "benefits", question: "Apakah ada program training dan development?", answer: "Ya, kami menyediakan budget training Rp 10 juta per tahun untuk setiap karyawan, akses ke platform learning online, mentoring program, dan kesempatan menghadiri konferensi teknologi nasional maupun internasional." }, { id: 7, category: "career", question: "Bagaimana jenjang karir di PT. Traspac Makmur Sejahtera?", answer: "Kami memiliki clear career path untuk setiap posisi dengan review performa setiap 6 bulan. Promosi berdasarkan merit dengan kesempatan advancement ke posisi senior, lead, manager, hingga director level sesuai dengan performa dan kontribusi." }, { id: 8, category: "career", question: "Apakah fresh graduate bisa melamar di PT. Traspac Makmur Sejahtera?", answer: "Tentu saja! Kami memiliki program Graduate Trainee khusus untuk fresh graduate dengan mentoring intensif selama 6 bulan pertama. Kami mencari kandidat dengan passion tinggi, kemampuan belajar cepat, dan mindset growth." }]), b2 = (e2) => {
    s2.value = false, i2.push(e2);
  };
  return (a3, i3, s3, o2) => {
    const f2 = kb, h2 = Z, k2 = ze, w2 = hb, j2 = y, R = Sb;
    i3(`<div${om.ssrRenderAttrs(o2)}><main class="overflow-x-hidden xl:-mx-[150px]"><section id="hero" class="relative px-4 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[56px] bg-slate-50"><div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-500 blur-2xl opacity-50"></div><div class="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-primary-500 blur-2xl opacity-50"></div><div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative z-10"><div class="text-center md:text-left"><h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-4 md:mb-6"> Temukan Pekerjaan <span class="bg-gradient-to-r from-primary-500 to-neutral-500 bg-clip-text text-transparent">Impianmu</span></h1><p class="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8"> Jadilah bagian dari perjalanan kami dalam menciptakan solusi teknologi yang mengubah dunia. </p><div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">`), i3(om.ssrRenderComponent(f2, { label: "Daftar Sekarang", onClick: (e2) => a3.$router.push("/auth/register"), size: "xl", class: "w-full sm:w-auto justify-center rounded-xl lg:px-5", icon: "i-mdi-account-plus-outline" }, null, s3)), i3(om.ssrRenderComponent(f2, { label: "Lihat Lowongan", onClick: (e2) => a3.$router.push("/lowongan"), size: "xl", class: "w-full sm:w-auto justify-center rounded-xl lg:px-5", variant: "outline" }, null, s3)), i3('</div></div><div class="hidden md:block mt-8 md:mt-0"><img class="w-full rounded-lg" src="https://kyyjdpebklyiaolvxrjj.supabase.co/storage/v1/object/public/storage-public/bg-hero.png" alt="Tim teknologi yang beragam sedang bekerja bersama" onerror="this.onerror=null;this.src=&#39;https://placehold.co/600x400/e0e7ff/4338ca?text=Inovasi&#39;"></div></div></section><section class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h3 class="text-3xl font-bold text-primary mb-4"> Lowongan Tersedia </h3><p class="text-gray-600"> Temukan posisi yang sesuai dengan passion dan keahlian Anda </p></div><div class="bg-white rounded-2xl shadow-lg p-8 mb-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="md:col-span-2"><label class="block text-sm font-medium text-gray-700 mb-2">Cari Posisi</label><div class="relative">'), i3(om.ssrRenderComponent(h2, { size: "xl", placeholder: "Masukkan nama posisi atau kata kunci...", type: "search", class: "w-full", icon: "i-heroicons-magnifying-glass-20-solid" }, null, s3)), i3('</div></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Filter</label><div class="relative">'), i3(om.ssrRenderComponent(k2, { placeholder: "Pilih Tipe", options: ["Semua Tipe", "Full-time", "Part-time", "Remote", "Contract"], size: "xl", class: "w-full" }, null, s3)), i3('</div></div></div><div class="mt-6 flex justify-center">'), i3(om.ssrRenderComponent(f2, { label: "Cari Lowongan", color: "primary", size: "xl", icon: "i-heroicons-magnifying-glass-20-solid", class: "bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all" }, null, s3)), i3('</div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->'), om.ssrRenderList(Wt.unref(c2).slice(0, 3), (e2) => {
      i3('<div class="bg-white w-full rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"><div class="flex items-start justify-between mb-4"><div class="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">'), i3(om.ssrRenderComponent(w2, { class: "text-primary", name: e2.icon }, null, s3)), i3(`</div><span class="${om.ssrRenderClass([e2.typeColor, "px-3 py-1 rounded-full text-xs font-medium"])}">${om.ssrInterpolate(e2.type)}</span></div><h4 class="text-xl font-bold text-gray-900 mb-2">${om.ssrInterpolate(e2.title)}</h4><div class="flex items-center text-gray-500 mb-4">`), i3(om.ssrRenderComponent(w2, { class: "mr-2", name: "fa6-solid:location-dot" }, null, s3)), i3(`<span>${om.ssrInterpolate(e2.location)}</span></div><p class="text-gray-600 mb-6 line-clamp-3">${om.ssrInterpolate(e2.description)}</p><div class="flex items-center gap-4">`), i3(om.ssrRenderComponent(f2, { label: "Lihat Detail", class: "rounded-xl w-full justify-center", color: "primary", size: "xl", onClick: (a4) => b2("lowongan/" + e2.id) }, null, s3)), i3('<div class="h-10 w-px bg-gray-200"></div>'), i3(om.ssrRenderComponent(f2, { icon: "i-heroicons-share-20-solid", class: "rounded-xl", color: "primary", size: "xl" }, null, s3)), i3("</div></div>");
    }), i3('<!--]--></div><div class="mt-8 text-right">'), i3(om.ssrRenderComponent(f2, { label: "Lihat Semua Lowongan", class: "rounded-xl w-fit justify-center", color: "primary", variant: "outline", size: "xl", "trailing-icon": "i-heroicons-arrow-right-20-solid", onClick: (e2) => b2("lowongan") }, null, s3)), i3('</div></div></section><section id="process" class="py-20 bg-primary/15"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16" data-aos="fade-up"><h2 class="text-3xl font-bold text-gray-900 mb-4"> Tahapan Rekrutmen </h2><p class="text-gray-600 max-w-2xl mx-auto"> Proses rekrutmen kami yang sederhana dan transparan. </p></div><div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0"><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="100"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), i3(om.ssrRenderComponent(w2, { name: "i-mdi-file-document", class: "text-2xl text-white" }, null, s3)), i3('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Administrasi </h3><p class="text-gray-600 text-sm"> Lengkapi dokumen dan data diri Anda. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="200"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), i3(om.ssrRenderComponent(w2, { name: "i-mdi-magnify", class: "text-2xl text-white" }, null, s3)), i3('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Screening CV </h3><p class="text-gray-600 text-sm"> Tim kami akan meninjau kualifikasi Anda. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="300"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), i3(om.ssrRenderComponent(w2, { name: "i-mdi-clipboard-check", class: "text-2xl text-white" }, null, s3)), i3('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Tes Kemampuan </h3><p class="text-gray-600 text-sm"> Uji keterampilan teknis dan soft skill. </p></div></div><div class="step-item flex-col md:flex-1 flex items-center md:block relative" data-aos="zoom-in" data-aos-delay="400"><div class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto">'), i3(om.ssrRenderComponent(w2, { name: "i-mdi-account-group", class: "text-2xl text-white" }, null, s3)), i3('</div><div class="text-center mt-2 md:mt-0"><h3 class="text-lg font-semibold text-gray-900 mb-2"> Interview </h3><p class="text-gray-600 text-sm"> Bertemu dengan tim untuk diskusi lebih lanjut. </p></div></div></div></div></section><section id="about" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50"><div class="container mx-auto px-6"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Tentang Kami </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Dengan kompetensi, kemampuan inovasi, dan kesungguhan menciptakan solusi, kami menjadi salah satu pilihan dalam transformasi digital. Serta lingkungan dan budaya membentuk bakat untuk berkembang adalah kontribusi kami </p></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-12"><!--[-->'), om.ssrRenderList(x2, (e2, a4) => {
      i3(`<div class="relative"><div class="${om.ssrRenderClass(["absolute -inset-4 rounded-xl opacity-20 transform", e2.bg, e2.rotation.bg])}"></div><div class="${om.ssrRenderClass(["relative bg-white p-6 md:p-8 rounded-xl border-2 border-dotted transition duration-300 transform hover:rotate-0", e2.border, e2.rotation.card])}">`), i3(om.ssrRenderComponent(w2, { name: e2.icon, class: "text-2xl sm:text-3xl text-primary" }, null, s3)), i3(`<h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">${om.ssrInterpolate(e2.title)}</h3><ul class="space-y-2 text-gray-600 text-sm sm:text-base"><!--[-->`), om.ssrRenderList(e2.levels, (e3) => {
        i3(`<li>${om.ssrInterpolate(e3)}</li>`);
      }), i3("<!--]--></ul></div></div>");
    }), i3('<!--]--></div></div></section><section id="testimonials" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50 relative overflow-hidden"><div class="absolute -top-32 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"></div><div class="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"></div><div class="container mx-auto px-6 relative z-10"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Apa Kata Mereka </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Dengar langsung dari mereka yang telah menemukan pekerjaan impian. </p></div>'), i3(om.ssrRenderComponent(j2, { items: g2, ui: { item: "basis-full" }, class: "mx-auto max-w-3xl", arrows: "" }, { default: Wt.withCtx(({ item: a4 }, t3, i4, s4) => {
      if (!t3) return [Wt.createVNode("div", { class: "text-center p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl" }, [Wt.createVNode(R, { src: a4.avatar, size: "2xl", class: "mx-auto mb-4" }, null, 8, ["src"]), Wt.createVNode("p", { class: "text-gray-700 italic text-sm sm:text-base" }, ' "' + Wt.toDisplayString(a4.quote) + '" ', 1), Wt.createVNode("div", { class: "mt-4 md:mt-6" }, [Wt.createVNode("h4", { class: "font-semibold text-gray-900 text-sm sm:text-base" }, Wt.toDisplayString(a4.name), 1), Wt.createVNode("p", { class: "text-primary text-xs sm:text-sm" }, Wt.toDisplayString(a4.position), 1)])])];
      t3(`<div class="text-center p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl"${s4}>`), t3(om.ssrRenderComponent(R, { src: a4.avatar, size: "2xl", class: "mx-auto mb-4" }, null, i4, s4)), t3(`<p class="text-gray-700 italic text-sm sm:text-base"${s4}> &quot;${om.ssrInterpolate(a4.quote)}&quot; </p><div class="mt-4 md:mt-6"${s4}><h4 class="font-semibold text-gray-900 text-sm sm:text-base"${s4}>${om.ssrInterpolate(a4.name)}</h4><p class="text-primary text-xs sm:text-sm"${s4}>${om.ssrInterpolate(a4.position)}</p></div></div>`);
    }), _: 1 }, s3)), i3(`</div></section><section id="stats" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-800 relative overflow-hidden"><div class="absolute inset-0 opacity-5" style="${om.ssrRenderStyle({ "background-image": "radial-gradient(\r\n              circle at 2px 2px,\r\n              white 1px,\r\n              transparent 0\r\n            )", "background-size": "40px 40px" })}"></div><div class="container mx-auto px-6 relative z-10"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-white mb-4"> Statistik Platform Rekrutmen </h2><p class="text-white/70 max-w-2xl mx-auto text-sm sm:text-base"> Data terkini mengenai aktivitas dan pencapaian platform kami. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Total Pelamar </div><div class="flex items-center justify-between">`), i3(om.ssrRenderComponent(w2, { name: "i-mdi-account-group", class: "text-4xl sm:text-5xl text-blue-400" }, null, s3)), i3(`<div class="text-2xl sm:text-3xl font-bold text-white">${om.ssrInterpolate(Wt.unref(n2).total_user || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Pelamar Hari Ini </div><div class="flex items-center justify-between">`), i3(om.ssrRenderComponent(w2, { name: "i-mdi-calendar-today", class: "text-4xl sm:text-5xl text-green-400" }, null, s3)), i3(`<div class="text-2xl sm:text-3xl font-bold text-white">${om.ssrInterpolate(Wt.unref(n2).user_hari_ini || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Lowongan Aktif </div><div class="flex items-center justify-between">`), i3(om.ssrRenderComponent(w2, { name: "i-mdi-briefcase", class: "text-4xl sm:text-5xl text-amber-400" }, null, s3)), i3(`<div class="text-2xl sm:text-3xl font-bold text-white">${om.ssrInterpolate(Wt.unref(n2).jumlah_lowongan || 0)}</div></div></div><div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"><div class="text-white/70 text-sm sm:text-base font-medium mb-4"> Berhasil Diterima </div><div class="flex items-center justify-between">`), i3(om.ssrRenderComponent(w2, { name: "i-mdi-handshake", class: "text-4xl sm:text-5xl text-emerald-400" }, null, s3)), i3(`<div class="text-2xl sm:text-3xl font-bold text-white">${om.ssrInterpolate(Wt.unref(n2).total_diterima || 0)}</div></div></div></div></div></section><section id="faq" class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-white"><div class="container mx-auto px-6"><div class="text-center mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"> Pertanyaan Umum </h2><p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"> Temukan jawaban untuk pertanyaan yang sering diajukan seputar karir dan proses rekrutmen di Karir Traspac. </p></div></div><section id="faq-list" class="py-8"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="space-y-4"><!--[-->`), om.ssrRenderList(Wt.unref(v2).slice(0, 5), (a4) => {
      i3('<div class="faq-item bg-white rounded-2xl shadow-lg border border-gray-100">'), i3(om.ssrRenderComponent(f2, { variant: "ghost", class: "w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50", onClick: (e2) => ((e3) => {
        const a5 = t2.value.indexOf(e3);
        a5 > -1 ? t2.value.splice(a5, 1) : t2.value.push(e3);
      })(a4.id) }, { default: Wt.withCtx((i4, s4, n3, l2) => {
        if (!s4) return [Wt.createVNode("h3", { class: "text-lg font-semibold text-gray-900 pr-4" }, Wt.toDisplayString(a4.question), 1), Wt.createVNode(w2, { name: Wt.unref(t2).includes(a4.id) ? "i-heroicons-minus" : "i-heroicons-plus", class: ["text-primary text-xl transition-transform duration-300", { "rotate-180": Wt.unref(t2).includes(a4.id) }] }, null, 8, ["name", "class"])];
        s4(`<h3 class="text-lg font-semibold text-gray-900 pr-4"${l2}>${om.ssrInterpolate(a4.question)}</h3>`), s4(om.ssrRenderComponent(w2, { name: Wt.unref(t2).includes(a4.id) ? "i-heroicons-minus" : "i-heroicons-plus", class: ["text-primary text-xl transition-transform duration-300", { "rotate-180": Wt.unref(t2).includes(a4.id) }] }, null, n3, l2));
      }), _: 2 }, s3)), Wt.unref(t2).includes(a4.id) ? i3(`<div class="px-8 pb-6 overflow-hidden"><p class="text-gray-600 leading-relaxed">${om.ssrInterpolate(a4.answer)}</p></div>`) : i3("<!---->"), i3("</div>");
    }), i3('<!--]--></div><div class="mt-8 text-right">'), i3(om.ssrRenderComponent(f2, { label: "Lihat Semua FAQ", class: "rounded-xl w-fit justify-center", color: "primary", variant: "outline", size: "xl", "trailing-icon": "i-heroicons-arrow-right-20-solid", onClick: (e2) => b2("/faq") }, null, s3)), i3("</div></div></section></section></main></div>");
  };
} }), j = w.setup;
w.setup = (a2, t2) => {
  const i2 = Wt.useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), j ? j(a2, t2) : void 0;
};

export { w as default };
//# sourceMappingURL=index-Bn9Deb19.mjs.map

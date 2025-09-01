import { c } from './Input-DfRex13n.mjs';
import { v as Wt, s as pm, _ as Rb, c as yb } from './server.mjs';
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

const n = Wt.defineComponent({ __name: "index", __ssrInlineRender: true, setup(n2) {
  const s2 = Wt.ref(null), o = Wt.ref(""), l = Wt.ref([]), p = Wt.ref([{ text: "Semua", value: null }, { text: "Application", value: "application" }, { text: "Interview", value: "interview" }, { text: "Benefits", value: "benefits" }, { text: "Career", value: "career" }]), d = Wt.ref([{ id: 1, category: "application", question: "Bagaimana cara melamar pekerjaan di PT. Traspac Makmur Sejahtera?", answer: "Anda dapat melamar pekerjaan melalui halaman karir kami dengan mengklik tombol 'Lamar Sekarang' pada posisi yang diminati. Pastikan untuk melengkapi profil dan mengunggah CV terbaru Anda. Tim HR kami akan meninjau aplikasi Anda dalam 3-5 hari kerja." }, { id: 2, category: "application", question: "Dokumen apa saja yang diperlukan untuk melamar?", answer: "Dokumen yang diperlukan meliputi CV terbaru, surat lamaran, portfolio (untuk posisi teknis/kreatif), dan sertifikat relevan. Pastikan semua dokumen dalam format PDF dengan ukuran maksimal 5MB per file." }, { id: 3, category: "interview", question: "Seperti apa proses interview di PT. Traspac Makmur Sejahtera?", answer: "Proses interview terdiri dari 3 tahap: screening awal via telepon/video call, technical interview dengan tim teknis, dan final interview dengan hiring manager. Setiap tahap berlangsung 45-60 menit dengan fokus pada kemampuan teknis dan cultural fit." }, { id: 4, category: "interview", question: "Berapa lama proses rekrutmen berlangsung?", answer: "Proses rekrutmen biasanya memakan waktu 2-3 minggu dari aplikasi hingga keputusan akhir. Kami akan memberikan update status aplikasi Anda di setiap tahap proses melalui email." }, { id: 5, category: "benefits", question: "Apa saja benefit yang ditawarkan PT. Traspac Makmur Sejahtera?", answer: "Kami menawarkan paket benefit komprehensif termasuk asuransi kesehatan, tunjangan makan, flexible working hours, work from home policy, annual leave 12 hari, training & development budget, dan bonus performa tahunan." }, { id: 6, category: "benefits", question: "Apakah ada program training dan development?", answer: "Ya, kami menyediakan budget training Rp 10 juta per tahun untuk setiap karyawan, akses ke platform learning online, mentoring program, dan kesempatan menghadiri konferensi teknologi nasional maupun internasional." }, { id: 7, category: "career", question: "Bagaimana jenjang karir di PT. Traspac Makmur Sejahtera?", answer: "Kami memiliki clear career path untuk setiap posisi dengan review performa setiap 6 bulan. Promosi berdasarkan merit dengan kesempatan advancement ke posisi senior, lead, manager, hingga director level sesuai dengan performa dan kontribusi." }, { id: 8, category: "career", question: "Apakah fresh graduate bisa melamar di PT. Traspac Makmur Sejahtera?", answer: "Tentu saja! Kami memiliki program Graduate Trainee khusus untuk fresh graduate dengan mentoring intensif selama 6 bulan pertama. Kami mencari kandidat dengan passion tinggi, kemampuan belajar cepat, dan mindset growth." }]), m = Wt.computed(() => {
    let a2 = d.value;
    if (s2.value && (a2 = a2.filter((a3) => a3.category === s2.value)), o.value) {
      const e2 = o.value.toLowerCase();
      a2 = a2.filter((a3) => a3.question.toLowerCase().includes(e2) || a3.answer.toLowerCase().includes(e2));
    }
    return a2;
  }), u = () => {
    (void 0).open("tel:(021) 31997486");
  }, c$1 = () => {
    (void 0).open("mailto:info@traspac.co.id");
  };
  return (n3, d2, x, g) => {
    const k = c, f = Rb, v = yb;
    d2(`<div${pm.ssrRenderAttrs(g)}><section id="hero-section" class="bg-white py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-4xl md:text-5xl font-bold text-primary mb-6"> Pertanyaan Umum </h2><p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"> Temukan jawaban untuk pertanyaan yang sering diajukan seputar karir dan proses rekrutmen di <span class="text-primary font-semibold">Karir Traspac</span>. </p></div></section><section id="search-faq" class="bg-gray-50 py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-white rounded-2xl shadow-lg p-8"><div class="relative">`), d2(pm.ssrRenderComponent(k, { modelValue: Wt.unref(o), "onUpdate:modelValue": (a2) => Wt.isRef(o) ? o.value = a2 : null, size: "xl", placeholder: "Cari pertanyaan atau kata kunci...", type: "search", class: "w-full", icon: "i-heroicons-magnifying-glass" }, null, x)), d2('</div></div></div></section><section id="faq-categories" class="py-8"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-wrap justify-center gap-4"><!--[-->'), pm.ssrRenderList(Wt.unref(p), (a2) => {
      d2(pm.ssrRenderComponent(f, { key: a2.value, variant: Wt.unref(s2) === a2.value ? "solid" : "outline", color: Wt.unref(s2) === a2.value ? "primary" : "neutral", class: "px-6 py-3 rounded-xl font-medium transition-all", onClick: (e2) => {
        return t2 = a2.value, void (s2.value = t2);
        var t2;
      } }, { default: Wt.withCtx((i2, r2, n4, s3) => {
        if (!r2) return [Wt.createTextVNode(Wt.toDisplayString(a2.text), 1)];
        r2(`${pm.ssrInterpolate(a2.text)}`);
      }), _: 2 }, x));
    }), d2('<!--]--></div></div></section><section id="faq-list" class="py-8"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="space-y-4"><!--[-->'), pm.ssrRenderList(Wt.unref(m), (a2) => {
      d2('<div class="faq-item bg-white rounded-2xl shadow-lg border border-gray-100">'), d2(pm.ssrRenderComponent(f, { variant: "ghost", class: "w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50", onClick: (e2) => ((a3) => {
        const e3 = l.value.indexOf(a3);
        e3 > -1 ? l.value.splice(e3, 1) : l.value.push(a3);
      })(a2.id) }, { default: Wt.withCtx((i2, r2, n4, s3) => {
        if (!r2) return [Wt.createVNode("h3", { class: "text-lg font-semibold text-gray-900 pr-4" }, Wt.toDisplayString(a2.question), 1), Wt.createVNode(v, { name: Wt.unref(l).includes(a2.id) ? "i-heroicons-minus" : "i-heroicons-plus", class: ["text-primary text-xl transition-transform duration-300", { "rotate-180": Wt.unref(l).includes(a2.id) }] }, null, 8, ["name", "class"])];
        r2(`<h3 class="text-lg font-semibold text-gray-900 pr-4"${s3}>${pm.ssrInterpolate(a2.question)}</h3>`), r2(pm.ssrRenderComponent(v, { name: Wt.unref(l).includes(a2.id) ? "i-heroicons-minus" : "i-heroicons-plus", class: ["text-primary text-xl transition-transform duration-300", { "rotate-180": Wt.unref(l).includes(a2.id) }] }, null, n4, s3));
      }), _: 2 }, x)), Wt.unref(l).includes(a2.id) ? d2(`<div class="px-8 pb-6 overflow-hidden"><p class="text-gray-600 leading-relaxed">${pm.ssrInterpolate(a2.answer)}</p></div>`) : d2("<!---->"), d2("</div>");
    }), d2('<!--]--></div></div></section><section id="contact-support" class="py-16 bg-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h3 class="text-2xl font-bold text-primary mb-4"> Masih Ada Pertanyaan? </h3><p class="text-gray-600 mb-8"> Tim HR kami siap membantu menjawab pertanyaan Anda </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-gray-50 rounded-2xl p-6 text-center">'), d2(pm.ssrRenderComponent(v, { name: "i-heroicons-envelope", class: "text-primary text-5xl mb-4 mx-auto" }, null, x)), d2('<h4 class="font-semibold text-gray-900 mb-2">Email Support</h4><p class="text-gray-600 mb-4">Kirim pertanyaan Anda via email</p>'), d2(pm.ssrRenderComponent(f, { onClick: c$1, variant: "solid", color: "primary", class: "px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all" }, { default: Wt.withCtx((a2, t2, i2, r2) => {
      if (!t2) return [Wt.createTextVNode(" info@traspac.co.id ")];
      t2(" info@traspac.co.id ");
    }), _: 1 }, x)), d2('</div><div class="bg-gray-50 rounded-2xl p-6 text-center">'), d2(pm.ssrRenderComponent(v, { name: "i-heroicons-phone", class: "text-primary text-5xl mb-4 mx-auto" }, null, x)), d2('<h4 class="font-semibold text-gray-900 mb-2">Phone Support</h4><p class="text-gray-600 mb-4">Hubungi kami di jam kerja</p>'), d2(pm.ssrRenderComponent(f, { variant: "solid", onClick: u, color: "primary", class: "px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all" }, { default: Wt.withCtx((a2, t2, i2, r2) => {
      if (!t2) return [Wt.createTextVNode(" (021) 31997486 ")];
      t2(" (021) 31997486 ");
    }), _: 1 }, x)), d2("</div></div></div></section></div>");
  };
} }), s = n.setup;
n.setup = (a2, t2) => {
  const i2 = Wt.useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("pages/faq/index.vue"), s ? s(a2, t2) : void 0;
};

export { n as default };
//# sourceMappingURL=index-CcPBRA3x.mjs.map

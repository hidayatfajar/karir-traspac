import { v as Wt, s as pm, c as yb, _ as Rb } from './server.mjs';
import { C } from './Modal-B5ltEwbi.mjs';
import { o as o$1 } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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
import './usePortal-DtLtCtVs.mjs';
import './ConfigProvider-BxfkmoHO.mjs';
import './useForwardPropsEmits-WwvTsoLV.mjs';
import './DialogPortal-3xALZYl4.mjs';
import './utils-iLtTyP0t.mjs';
import './getActiveElement-CxMYnBFR.mjs';
import './useBodyScrollLock-Fz4_gHfe.mjs';
import './VisuallyHidden-CudQpOEQ.mjs';

const d = Wt.defineComponent({ __name: "CustomFileUpload", __ssrInlineRender: true, props: { modelValue: { default: null }, name: { default: "files" }, label: { default: "Upload files" }, multiple: { type: Boolean, default: false }, accept: { default: "*" }, required: { type: Boolean, default: false }, maxSize: { default: 10 }, maxFiles: { default: 5 }, icon: { default: null }, disabled: { type: Boolean, default: false }, thumbnailSize: { default: 120 }, thumbnailFit: { default: "cover" }, forceCustom: { type: Boolean, default: false } }, emits: ["update:modelValue", "change"], setup(s2, { emit: d2 }) {
  const o2 = s2;
  Wt.ref(null), Wt.ref(null);
  const i2 = Wt.ref([]), n = Wt.ref([]), c = Wt.ref(null), u = Wt.ref(false);
  Wt.ref(null), Wt.ref(null);
  const p = Wt.computed(() => (o2.multiple, n.value.length > 0 || i2.value.length > 0));
  Wt.computed(() => [...n.value, ...i2.value]);
  const v = (e2) => {
    var t2;
    return decodeURIComponent((null == (t2 = e2.split("/").pop()) ? void 0 : t2.split("?")[0]) || "file");
  }, m = (e2) => (console.log("getPreviewUrl", e2), URL.createObjectURL(e2)), x = (e2) => {
    if (0 === e2) return "0 Bytes";
    const t2 = Math.floor(Math.log(e2) / Math.log(1024));
    return parseFloat((e2 / Math.pow(1024, t2)).toFixed(2)) + " " + ["Bytes", "KB", "MB", "GB"][t2];
  };
  Wt.watch(() => o2.modelValue, (e2) => {
    ((e3) => {
      if (i2.value = [], n.value = [], e3) {
        if (o2.multiple) (Array.isArray(e3) ? e3 : [e3]).forEach((e4) => {
          e4 instanceof File ? i2.value.push(e4) : "string" == typeof e4 ? n.value.push({ url: e4, name: v(e4) }) : e4 && "object" == typeof e4 && (e4.file ? i2.value.push(e4.file) : e4.url && n.value.push(e4));
        });
        else if (e3 instanceof File) i2.value = [e3];
        else if ("string" == typeof e3) n.value = [{ url: e3, name: v(e3) }];
        else if (e3 && "object" == typeof e3 && !Array.isArray(e3)) {
          const t2 = e3;
          t2.file ? i2.value = [t2.file] : t2.url && (n.value = [t2]);
        }
      }
    })(e2);
  }, { immediate: true, deep: true });
  const b = (e2) => {
    var t2;
    return (null == (t2 = e2.split(".").pop()) ? void 0 : t2.toUpperCase()) || "FILE";
  }, g = Wt.ref(false), f = Wt.ref(null), h = Wt.computed(() => {
    var e2;
    return !!(null == (e2 = f.value) ? void 0 : e2.type) && ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(f.value.type);
  }), y = Wt.computed(() => {
    var e2;
    return "application/pdf" === (null == (e2 = f.value) ? void 0 : e2.type);
  }), k = Wt.computed(() => {
    var e2;
    if (!(null == (e2 = f.value) ? void 0 : e2.type)) return "Unknown file type";
    return { "image/jpeg": "JPEG Image", "image/png": "PNG Image", "image/gif": "GIF Image", "image/webp": "WebP Image", "application/pdf": "PDF Document", "application/msword": "Word Document", "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word Document" }[f.value.type] || f.value.type;
  });
  return (s3, d3, w, j) => {
    var $, R;
    const C$1 = yb, I = C, B = Rb;
    d3(`<div${pm.ssrRenderAttrs(Wt.mergeProps({ class: ["file-upload-container", { "opacity-75 pointer-events-none": s3.disabled }] }, j))} data-v-c2d632b3><div class="mb-4" data-v-c2d632b3><label class="${pm.ssrRenderClass([{ "text-gray-400 dark:text-gray-500": s3.disabled }, "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"])}" data-v-c2d632b3>${pm.ssrInterpolate(s3.label)} `), s3.required ? d3('<span class="text-red-500" data-v-c2d632b3>*</span>') : d3("<!---->"), d3(`</label><div class="${pm.ssrRenderClass([{ "border-primary bg-primary/10": u.value, "hover:border-primary": !u.value && !p.value && !s3.disabled, "bg-gray-100 dark:bg-gray-800": s3.disabled }, "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-colors"])}" data-v-c2d632b3><input type="file"${pm.ssrIncludeBooleanAttr(s3.multiple) ? " multiple" : ""}${pm.ssrIncludeBooleanAttr(s3.disabled) ? " disabled" : ""}${pm.ssrRenderAttr("accept", s3.accept)} class="hidden" data-v-c2d632b3>`), !p.value || s3.forceCustom ? (d3("<div data-v-c2d632b3>"), s3.$slots.icon ? pm.ssrRenderSlot(s3.$slots, "icon", { icon: s3.icon, files: [...n.value, ...null == ($ = i2.value) ? void 0 : $.map((e2) => ({ url: m(e2), ...e2 }))] }, null, d3, w) : (d3(`<div class="${pm.ssrRenderClass([{ "cursor-pointer": !s3.disabled }, "flex flex-col items-center justify-center py-8"])}" data-v-c2d632b3>`), s3.icon ? d3(pm.ssrRenderComponent(C$1, { name: s3.icon, class: s3.disabled ? "text-gray-400 dark:text-gray-600" : "text-gray-400 dark:text-gray-500" }, null, w)) : d3(`<svg class="${pm.ssrRenderClass([s3.disabled ? "text-gray-400 dark:text-gray-600" : "text-gray-400 dark:text-gray-500", "size-12"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-c2d632b3></path></svg>`), d3(`<p class="${pm.ssrRenderClass([s3.disabled ? "text-gray-500 dark:text-gray-600" : "text-gray-600 dark:text-gray-400", "mt-2 text-sm"])}" data-v-c2d632b3> Drag and drop files here, or <span class="${pm.ssrRenderClass(s3.disabled ? "text-gray-500" : "text-primary cursor-pointer")}" data-v-c2d632b3>click to browse</span></p><p class="${pm.ssrRenderClass([s3.disabled ? "text-gray-500 dark:text-gray-600" : "text-gray-500 dark:text-gray-400", "text-xs mt-1"])}" data-v-c2d632b3> Supported formats: ${pm.ssrInterpolate("*" === s3.accept ? "Any file type" : s3.accept)}</p></div>`)), d3("</div>")) : (d3(`<div class="${pm.ssrRenderClass([o2.multiple ? "grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "flex items-center justify-center"])}" data-v-c2d632b3><!--[-->`), pm.ssrRenderList(n.value, (e2, a2) => {
      var _a, _b;
      var r2;
      d3(`<div class="relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700" style="${pm.ssrRenderStyle({ "max-width": `${s3.thumbnailSize}px`, "max-height": `${s3.thumbnailSize}px` })}" data-v-c2d632b3><div class="aspect-square flex flex-col" data-v-c2d632b3><div class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-grow" data-v-c2d632b3>`), r2 = e2.url, /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(r2) ? d3(`<img${pm.ssrRenderAttr("src", e2.url)} class="w-full h-full object-cover" style="${pm.ssrRenderStyle({ "object-fit": s3.thumbnailFit })}"${pm.ssrRenderAttr("alt", e2.name || "Preview")} data-v-c2d632b3>`) : d3(`<div class="w-full h-full flex flex-col items-center justify-center p-2 text-gray-500 dark:text-gray-400" data-v-c2d632b3><svg class="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-c2d632b3></path></svg><span class="text-xs text-center truncate w-full px-1" data-v-c2d632b3>${pm.ssrInterpolate(b(e2.url))}</span></div>`), d3(`</div><div class="p-2 bg-white dark:bg-gray-800 max-h-40" data-v-c2d632b3><p class="text-xs font-medium text-gray-900 dark:text-white truncate" data-v-c2d632b3>${pm.ssrInterpolate(e2.name || v(e2.url))}</p>`), e2.size ? d3(`<p class="text-xs text-gray-500 dark:text-gray-400" data-v-c2d632b3>${pm.ssrInterpolate((_a = x(e2.size)) != null ? _a : "-")}</p>`) : d3(`<p class="text-xs text-gray-500 dark:text-gray-400 truncate" data-v-c2d632b3>${pm.ssrInterpolate((_b = e2.url) != null ? _b : "-")}</p>`), d3('</div></div><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2" data-v-c2d632b3><button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Preview" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-c2d632b3></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-c2d632b3></path></svg></button><div class="flex items-center gap-3" data-v-c2d632b3>'), o2.disabled ? d3("<!---->") : d3('<button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Replace" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-.828.515L7 15l1.657-3.828a2 2 0 01.515-.828z" data-v-c2d632b3></path></svg></button>'), o2.disabled ? d3("<!---->") : d3('<button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Remove" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-c2d632b3></path></svg></button>'), d3("</div></div></div>");
    }), d3("<!--]--><!--[-->"), pm.ssrRenderList(i2.value, (e2, a2) => {
      var _a;
      d3(`<div class="relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700" style="${pm.ssrRenderStyle({ "max-width": `${s3.thumbnailSize}px`, "max-height": `${s3.thumbnailSize}px` })}" data-v-c2d632b3><div class="aspect-square flex flex-col" data-v-c2d632b3><div class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-grow" data-v-c2d632b3>`), ((e3) => e3.type.startsWith("image/"))(e2) ? d3(`<img${pm.ssrRenderAttr("src", m(e2))} class="w-full h-full" style="${pm.ssrRenderStyle({ "object-fit": s3.thumbnailFit })}"${pm.ssrRenderAttr("alt", e2.name)} data-v-c2d632b3>`) : d3(`<div class="w-full h-full flex flex-col items-center justify-center p-2 text-gray-500 dark:text-gray-400" data-v-c2d632b3><svg class="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-c2d632b3></path></svg><span class="text-xs text-center truncate w-full px-1" data-v-c2d632b3>${pm.ssrInterpolate(b(e2.name))}</span></div>`), d3(`</div><div class="p-2 bg-white dark:bg-gray-800 max-h-40" data-v-c2d632b3><p class="text-xs font-medium text-gray-900 dark:text-white truncate" data-v-c2d632b3>${pm.ssrInterpolate(e2.name)}</p><p class="text-xs text-gray-500 dark:text-gray-400" data-v-c2d632b3>${pm.ssrInterpolate((_a = x(e2.size)) != null ? _a : "-")}</p></div></div><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2" data-v-c2d632b3><button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Preview" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-c2d632b3></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-c2d632b3></path></svg></button><div class="flex items-center gap-3" data-v-c2d632b3>`), o2.disabled ? d3("<!---->") : d3('<button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Replace" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-.828.515L7 15l1.657-3.828a2 2 0 01.515-.828z" data-v-c2d632b3></path></svg></button>'), o2.disabled ? d3("<!---->") : d3('<button class="text-white p-2 rounded-full hover:bg-white/20 transition-colors" title="Remove" data-v-c2d632b3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-c2d632b3></path></svg></button>'), d3("</div></div></div>");
    }), d3("<!--]-->"), s3.multiple && !s3.disabled ? d3('<div class="aspect-square border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center cursor-pointer hover:border-primary transition-colors" data-v-c2d632b3><div class="text-center p-4" data-v-c2d632b3><svg class="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c2d632b3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-c2d632b3></path></svg><p class="mt-1 text-xs text-gray-500 dark:text-gray-400" data-v-c2d632b3> Add files </p></div></div>') : d3("<!---->"), d3("</div>")), d3("</div>"), c.value ? d3(`<p class="mt-2 text-sm text-red-600 dark:text-red-400" data-v-c2d632b3>${pm.ssrInterpolate(c.value)}</p>`) : d3("<!---->"), d3("</div>"), d3(pm.ssrRenderComponent(I, { open: g.value, "onUpdate:open": (e2) => g.value = e2, ui: { width: "sm:max-w-4xl", footer: "justify-between" }, title: (null == (R = f.value) ? void 0 : R.name) || "File Preview" }, { body: Wt.withCtx((a2, r2, l2, s4) => {
      var d4, o3, i3, n2, c2, u2, p2, v2, m2, x2;
      if (!r2) return [Wt.createVNode("div", { class: "flex-1 flex items-center justify-center p-4" }, [h.value ? (Wt.openBlock(), Wt.createBlock("img", { key: 0, src: null == (u2 = f.value) ? void 0 : u2.url, alt: null == (p2 = f.value) ? void 0 : p2.name, class: "max-h-[70vh] max-w-full object-contain rounded-md" }, null, 8, ["src", "alt"])) : y.value ? (Wt.openBlock(), Wt.createBlock("iframe", { key: 1, src: `${null == (v2 = f.value) ? void 0 : v2.url}#view=fitH`, class: "w-full h-[70vh] border-none rounded-md", frameborder: "0" }, null, 8, ["src"])) : (Wt.openBlock(), Wt.createBlock("div", { key: 2, class: "text-center" }, [Wt.createVNode(C$1, { name: "i-heroicons-document-text", class: "mx-auto h-12 w-12 text-gray-400" }), Wt.createVNode("h3", { class: "mt-2 text-sm font-medium text-gray-900 dark:text-white" }, Wt.toDisplayString((null == (m2 = f.value) ? void 0 : m2.name) || "File"), 1), Wt.createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " No preview available "), Wt.createVNode("div", { class: "mt-6" }, [(null == (x2 = f.value) ? void 0 : x2.url) ? (Wt.openBlock(), Wt.createBlock(B, { key: 0, label: "Download File", color: "primary", variant: "solid", to: f.value.url, target: "_blank", download: "" }, null, 8, ["to"])) : Wt.createCommentVNode("", true)])]))])];
      r2(`<div class="flex-1 flex items-center justify-center p-4" data-v-c2d632b3${s4}>`), h.value ? r2(`<img${pm.ssrRenderAttr("src", null == (d4 = f.value) ? void 0 : d4.url)}${pm.ssrRenderAttr("alt", null == (o3 = f.value) ? void 0 : o3.name)} class="max-h-[70vh] max-w-full object-contain rounded-md" data-v-c2d632b3${s4}>`) : y.value ? r2(`<iframe${pm.ssrRenderAttr("src", `${null == (i3 = f.value) ? void 0 : i3.url}#view=fitH`)} class="w-full h-[70vh] border-none rounded-md" frameborder="0" data-v-c2d632b3${s4}></iframe>`) : (r2(`<div class="text-center" data-v-c2d632b3${s4}>`), r2(pm.ssrRenderComponent(C$1, { name: "i-heroicons-document-text", class: "mx-auto h-12 w-12 text-gray-400" }, null, l2, s4)), r2(`<h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white" data-v-c2d632b3${s4}>${pm.ssrInterpolate((null == (n2 = f.value) ? void 0 : n2.name) || "File")}</h3><p class="mt-1 text-sm text-gray-500 dark:text-gray-400" data-v-c2d632b3${s4}> No preview available </p><div class="mt-6" data-v-c2d632b3${s4}>`), (null == (c2 = f.value) ? void 0 : c2.url) ? r2(pm.ssrRenderComponent(B, { label: "Download File", color: "primary", variant: "solid", to: f.value.url, target: "_blank", download: "" }, null, l2, s4)) : r2("<!---->"), r2("</div></div>")), r2("</div>");
    }), footer: Wt.withCtx((a2, r2, l2, s4) => {
      if (!r2) return [Wt.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, Wt.toDisplayString(k.value), 1), Wt.createVNode(B, { label: "Close", color: "neutral", variant: "ghost", onClick: (e2) => g.value = false }, null, 8, ["onClick"])];
      r2(`<p class="text-sm text-gray-500 dark:text-gray-400" data-v-c2d632b3${s4}>${pm.ssrInterpolate(k.value)}</p>`), r2(pm.ssrRenderComponent(B, { label: "Close", color: "neutral", variant: "ghost", onClick: (e2) => g.value = false }, null, l2, s4));
    }), _: 1 }, w)), d3("</div>");
  };
} }), o = d.setup;
d.setup = (t2, a2) => {
  const r2 = Wt.useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/CustomFileUpload.vue"), o ? o(t2, a2) : void 0;
};
const i = o$1(d, [["__scopeId", "data-v-c2d632b3"]]);

export { i as default };
//# sourceMappingURL=CustomFileUpload-D2nUC3ua.mjs.map

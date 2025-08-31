import { v as Wt, s as pm, u as da, e as sg, j as Pm, t as Ky, P as _m, b as gb, d as _b, S as mg } from './server.mjs';
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

const d = { slots: { root: "relative inline-flex items-center", base: ["w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"], leading: "absolute start-0 flex items-start", leadingIcon: "shrink-0 text-dimmed", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailing: "absolute end-0 flex items-start", trailingIcon: "shrink-0 text-dimmed" }, variants: { buttonGroup: { horizontal: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none" }, vertical: { root: "group has-focus-visible:z-[1]", base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none" } }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leading: "ps-2 inset-y-1", trailing: "pe-2 inset-y-1", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leading: "ps-2.5 inset-y-1.5", trailing: "pe-2.5 inset-y-1.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leading: "ps-2.5 inset-y-1.5", trailing: "pe-2.5 inset-y-1.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5" }, lg: { base: "px-3 py-2 text-sm gap-2", leading: "ps-3 inset-y-2", trailing: "pe-3 inset-y-2", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5" }, xl: { base: "px-3 py-2 text-base gap-2", leading: "ps-3 inset-y-2", trailing: "pe-3 inset-y-2", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6" } }, variant: { outline: "text-highlighted bg-default ring ring-inset ring-accented", soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50", subtle: "text-highlighted bg-elevated ring ring-inset ring-accented", ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent", none: "text-highlighted bg-transparent" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, highlight: { true: "" }, type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" }, autoresize: { true: { base: "resize-none" } } }, compoundVariants: [{ color: "primary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "primary", highlight: true, class: "ring ring-inset ring-primary" }, { color: "secondary", highlight: true, class: "ring ring-inset ring-secondary" }, { color: "success", highlight: true, class: "ring ring-inset ring-success" }, { color: "info", highlight: true, class: "ring ring-inset ring-info" }, { color: "warning", highlight: true, class: "ring ring-inset ring-warning" }, { color: "error", highlight: true, class: "ring ring-inset ring-error" }, { color: "neutral", variant: ["outline", "subtle"], class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" }, { color: "neutral", highlight: true, class: "ring ring-inset ring-inverted" }, { leading: true, size: "xs", class: "ps-7" }, { leading: true, size: "sm", class: "ps-8" }, { leading: true, size: "md", class: "ps-9" }, { leading: true, size: "lg", class: "ps-10" }, { leading: true, size: "xl", class: "ps-11" }, { trailing: true, size: "xs", class: "pe-7" }, { trailing: true, size: "sm", class: "pe-8" }, { trailing: true, size: "md", class: "pe-9" }, { trailing: true, size: "lg", class: "pe-10" }, { trailing: true, size: "xl", class: "pe-11" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { size: "md", color: "primary", variant: "outline" } }, g = Object.assign({ inheritAttrs: false }, { __name: "Textarea", __ssrInlineRender: true, props: Wt.mergeModels({ as: { type: null, required: false }, id: { type: String, required: false }, name: { type: String, required: false }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, autoresize: { type: Boolean, required: false }, autoresizeDelay: { type: Number, required: false, default: 0 }, disabled: { type: Boolean, required: false }, rows: { type: Number, required: false, default: 3 }, maxrows: { type: Number, required: false, default: 0 }, highlight: { type: Boolean, required: false }, modelModifiers: { type: Object, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, icon: { type: String, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: String, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: String, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: String, required: false } }, { modelValue: { type: null }, modelModifiers: {} }), emits: Wt.mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]), setup(g2, { expose: p2, emit: c2 }) {
  const m2 = g2, v = c2, f = Wt.useSlots(), [b, h] = Wt.useModel(g2, "modelValue"), y = da(), { emitFormFocus: x, emitFormBlur: z, emitFormInput: S, emitFormChange: I, size: k, color: q, id: w, name: R, highlight: A, disabled: B, ariaAttrs: _ } = sg(m2, { deferInputValidation: true }), { isLeading: C, isTrailing: N, leadingIconName: T, trailingIconName: V } = Pm(m2), j = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(d), ...(null == (e2 = y.ui) ? void 0 : e2.textarea) || {} })({ color: q.value, variant: m2.variant, size: null == k ? void 0 : k.value, loading: m2.loading, highlight: A.value, autoresize: m2.autoresize, leading: C.value || !!m2.avatar || !!f.leading, trailing: N.value || !!f.trailing });
  }), $ = Wt.ref(null);
  function D(e2) {
    var _a;
    h.trim && (e2 = (_a = null == e2 ? void 0 : e2.trim()) != null ? _a : null), h.number && (e2 = mg(e2)), h.nullify && (e2 || (e2 = null)), b.value = e2, S();
  }
  function E(e2) {
    P(), h.lazy || D(e2.target.value);
  }
  function F(e2) {
    const i2 = e2.target.value;
    h.lazy && D(i2), h.trim && (e2.target.value = i2.trim()), I(), v("change", e2);
  }
  function M(e2) {
    z(), v("blur", e2);
  }
  function P() {
    if (m2.autoresize && $.value) {
      $.value.rows = m2.rows;
      const e2 = $.value.style.overflow;
      $.value.style.overflow = "hidden";
      const i2 = (void 0).getComputedStyle($.value), r2 = Number.parseInt(i2.paddingTop) + Number.parseInt(i2.paddingBottom), a2 = Number.parseInt(i2.lineHeight), { scrollHeight: n2 } = $.value, t2 = (n2 - r2) / a2;
      t2 > m2.rows && ($.value.rows = m2.maxrows ? Math.min(t2, m2.maxrows) : t2), $.value.style.overflow = e2;
    }
  }
  return Wt.watch(b, () => {
    Wt.nextTick(P);
  }), p2({ textareaRef: $ }), (i2, r2, a2, n2) => {
    var u2;
    let d2;
    r2(pm.ssrRenderComponent(Wt.unref(_m), Wt.mergeProps({ as: g2.as, class: j.value.root({ class: [null == (u2 = m2.ui) ? void 0 : u2.root, m2.class] }) }, n2), { default: Wt.withCtx((r3, a3, n3, l2) => {
      var u3, p3, c3, v2, h2, y2;
      if (!a3) return [Wt.createVNode("textarea", Wt.mergeProps({ id: Wt.unref(w), ref_key: "textareaRef", ref: $, value: Wt.unref(b), name: Wt.unref(R), rows: g2.rows, placeholder: g2.placeholder, class: j.value.base({ class: null == (v2 = m2.ui) ? void 0 : v2.base }), disabled: Wt.unref(B), required: g2.required }, { ...i2.$attrs, ...Wt.unref(_) }, { onInput: E, onBlur: M, onChange: F, onFocus: Wt.unref(x) }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]), Wt.renderSlot(i2.$slots, "default"), Wt.unref(C) || g2.avatar || f.leading ? (Wt.openBlock(), Wt.createBlock("span", { key: 0, class: j.value.leading({ class: null == (h2 = m2.ui) ? void 0 : h2.leading }) }, [Wt.renderSlot(i2.$slots, "leading", {}, () => {
        var i3, r4, a4;
        return [Wt.unref(C) && Wt.unref(T) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(T), class: j.value.leadingIcon({ class: null == (i3 = m2.ui) ? void 0 : i3.leadingIcon }) }, null, 8, ["name", "class"])) : g2.avatar ? (Wt.openBlock(), Wt.createBlock(_b, Wt.mergeProps({ key: 1, size: (null == (r4 = m2.ui) ? void 0 : r4.leadingAvatarSize) || j.value.leadingAvatarSize() }, g2.avatar, { class: j.value.leadingAvatar({ class: null == (a4 = m2.ui) ? void 0 : a4.leadingAvatar }) }), null, 16, ["size", "class"])) : Wt.createCommentVNode("", true)];
      })], 2)) : Wt.createCommentVNode("", true), Wt.unref(N) || f.trailing ? (Wt.openBlock(), Wt.createBlock("span", { key: 1, class: j.value.trailing({ class: null == (y2 = m2.ui) ? void 0 : y2.trailing }) }, [Wt.renderSlot(i2.$slots, "trailing", {}, () => {
        var i3;
        return [Wt.unref(V) ? (Wt.openBlock(), Wt.createBlock(gb, { key: 0, name: Wt.unref(V), class: j.value.trailingIcon({ class: null == (i3 = m2.ui) ? void 0 : i3.trailingIcon }) }, null, 8, ["name", "class"])) : Wt.createCommentVNode("", true)];
      })], 2)) : Wt.createCommentVNode("", true)];
      a3(`<textarea${pm.ssrRenderAttrs(d2 = Wt.mergeProps({ id: Wt.unref(w), ref_key: "textareaRef", ref: $, value: Wt.unref(b), name: Wt.unref(R), rows: g2.rows, placeholder: g2.placeholder, class: j.value.base({ class: null == (u3 = m2.ui) ? void 0 : u3.base }), disabled: Wt.unref(B), required: g2.required }, { ...i2.$attrs, ...Wt.unref(_) }), "textarea")}${l2}>${pm.ssrInterpolate("value" in d2 ? d2.value : "")}</textarea>`), pm.ssrRenderSlot(i2.$slots, "default", {}, null, a3, n3, l2), Wt.unref(C) || g2.avatar || f.leading ? (a3(`<span class="${pm.ssrRenderClass(j.value.leading({ class: null == (p3 = m2.ui) ? void 0 : p3.leading }))}"${l2}>`), pm.ssrRenderSlot(i2.$slots, "leading", {}, () => {
        var i3, r4, u4;
        Wt.unref(C) && Wt.unref(T) ? a3(pm.ssrRenderComponent(gb, { name: Wt.unref(T), class: j.value.leadingIcon({ class: null == (i3 = m2.ui) ? void 0 : i3.leadingIcon }) }, null, n3, l2)) : g2.avatar ? a3(pm.ssrRenderComponent(_b, Wt.mergeProps({ size: (null == (r4 = m2.ui) ? void 0 : r4.leadingAvatarSize) || j.value.leadingAvatarSize() }, g2.avatar, { class: j.value.leadingAvatar({ class: null == (u4 = m2.ui) ? void 0 : u4.leadingAvatar }) }), null, n3, l2)) : a3("<!---->");
      }, a3, n3, l2), a3("</span>")) : a3("<!---->"), Wt.unref(N) || f.trailing ? (a3(`<span class="${pm.ssrRenderClass(j.value.trailing({ class: null == (c3 = m2.ui) ? void 0 : c3.trailing }))}"${l2}>`), pm.ssrRenderSlot(i2.$slots, "trailing", {}, () => {
        var i3;
        Wt.unref(V) ? a3(pm.ssrRenderComponent(gb, { name: Wt.unref(V), class: j.value.trailingIcon({ class: null == (i3 = m2.ui) ? void 0 : i3.trailingIcon }) }, null, n3, l2)) : a3("<!---->");
      }, a3, n3, l2), a3("</span>")) : a3("<!---->");
    }), _: 3 }, a2));
  };
} }), p = g.setup;
g.setup = (i2, r2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue"), p ? p(i2, r2) : void 0;
};
const c = Wt.defineComponent({ __name: "TextAreaField", __ssrInlineRender: true, props: { modelValue: { type: String, default: "" }, placeholder: { type: String, default: "Enter text here..." }, color: { type: String, default: "neutral" }, rows: { type: [Number, String], default: 4 }, cols: { type: [Number, String], default: 50 }, disabled: { type: Boolean, default: false }, ui: { type: Object, default: () => ({}) }, as: { type: String, default: "textarea" }, size: { type: String, default: "md" }, label: { type: String, default: "Text Area" } }, emits: ["update:modelValue"], setup(i2, { emit: r2 }) {
  const a2 = r2, n2 = i2, l2 = Wt.ref(n2.modelValue);
  return (i3, r3, s2, o2) => {
    const u2 = g;
    r3(`<div${pm.ssrRenderAttrs(o2)}>`), r3(pm.ssrRenderComponent(u2, { modelValue: Wt.unref(l2), "onUpdate:modelValue": [(i4) => Wt.isRef(l2) ? l2.value = i4 : null, (e2) => a2("update:modelValue", e2)], placeholder: n2.placeholder, rows: Number(n2.rows), cols: Number(n2.cols), disabled: n2.disabled, ui: n2.ui, as: n2.as, size: n2.size, label: n2.label, color: n2.color }, null, s2)), r3("</div>");
  };
} }), m = c.setup;
c.setup = (i2, r2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/ui/TextAreaField.vue"), m ? m(i2, r2) : void 0;
};

export { c as default };
//# sourceMappingURL=TextAreaField-DSuWX_Aj.mjs.map

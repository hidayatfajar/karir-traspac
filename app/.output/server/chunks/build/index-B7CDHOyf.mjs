import { v as Wt, k as ei, s as pm, p as Qs, c as Fs, u as da, r as Bm, t as Ky, _ as Ob, P as _m } from './server.mjs';
import { u as ue, e as ee } from './Table-rUu09S0K.mjs';
import { l as l$1 } from './useLocale-DRieL7bI.mjs';
import { F, N as N$1, C as C$1, T as T$1 } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { l, r } from './useToast-BU_XT8o3.mjs';
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

const k = Wt.defineComponent({ __name: "PaginationEllipsis", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const o2 = t2;
  return N$1(), (t3, l2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "data-type": "ellipsis" }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [l2[0] || (l2[0] = Wt.createTextVNode("\u2026"))])]), _: 3 }, 16));
} }), [C, _] = T$1("PaginationRoot"), b = Wt.defineComponent({ __name: "PaginationRoot", props: { page: {}, defaultPage: { default: 1 }, itemsPerPage: {}, total: { default: 0 }, siblingCount: { default: 2 }, disabled: { type: Boolean }, showEdges: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:page"], setup(t2, { emit: o2 }) {
  const l2 = t2, r2 = o2, { siblingCount: s2, disabled: n2, showEdges: i2 } = Wt.toRefs(l2);
  N$1();
  const u2 = C$1(l2, "page", r2, { defaultValue: l2.defaultPage, passive: void 0 === l2.page }), d2 = Wt.computed(() => Math.max(1, Math.ceil(l2.total / (l2.itemsPerPage || 1))));
  return _({ page: u2, onPageChange(e2) {
    u2.value = e2;
  }, pageCount: d2, siblingCount: s2, disabled: n2, showEdges: i2 }), (t3, o3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { as: t3.as, "as-child": t3.asChild }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", { page: Wt.unref(u2), pageCount: d2.value })]), _: 3 }, 8, ["as", "as-child"]));
} }), y = Wt.defineComponent({ __name: "PaginationFirst", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const o2 = t2, l2 = C();
  N$1();
  const r2 = Wt.computed(() => 1 === l2.page.value || l2.disabled.value);
  return (t3, s2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "aria-label": "First Page", type: "button" === t3.as ? "button" : void 0, disabled: r2.value, onClick: s2[0] || (s2[0] = (a2) => !r2.value && Wt.unref(l2).onPageChange(1)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [s2[1] || (s2[1] = Wt.createTextVNode("First page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), w = Wt.defineComponent({ __name: "PaginationLast", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const o2 = t2, l2 = C();
  N$1();
  const r2 = Wt.computed(() => l2.page.value === l2.pageCount.value || l2.disabled.value);
  return (t3, s2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "aria-label": "Last Page", type: "button" === t3.as ? "button" : void 0, disabled: r2.value, onClick: s2[0] || (s2[0] = (a2) => !r2.value && Wt.unref(l2).onPageChange(Wt.unref(l2).pageCount.value)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [s2[1] || (s2[1] = Wt.createTextVNode("Last page"))])]), _: 3 }, 16, ["type", "disabled"]));
} });
function S(e2, a2) {
  const t2 = a2 - e2 + 1;
  return Array.from({ length: t2 }, (a3, t3) => t3 + e2);
}
const z = "ellipsis";
const B = Wt.defineComponent({ __name: "PaginationList", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const o2 = t2;
  N$1();
  const l2 = C(), r2 = Wt.computed(() => function(e2, a2, t3, o3) {
    const l3 = a2, r3 = Math.max(e2 - t3, 1), s2 = Math.min(e2 + t3, l3);
    if (o3) {
      const e3 = Math.min(2 * t3 + 5, a2) - 2, o4 = r3 > 3 && Math.abs(l3 - e3 - 1 + 1) > 2 && Math.abs(r3 - 1) > 2, n2 = s2 < l3 - 2 && Math.abs(l3 - e3) > 2 && Math.abs(l3 - s2) > 2;
      if (!o4 && n2) return [...S(1, e3), z, l3];
      if (o4 && !n2) {
        const a3 = S(l3 - e3 + 1, l3);
        return [1, z, ...a3];
      }
      if (o4 && n2) {
        const e4 = S(r3, s2);
        return [1, z, ...e4, z, l3];
      }
      return S(1, l3);
    }
    {
      const o4 = 2 * t3 + 1;
      return a2 < o4 ? S(1, l3) : e2 <= t3 + 1 ? S(1, o4) : a2 - e2 <= t3 ? S(a2 - o4 + 1, l3) : S(r3, s2);
    }
  }(l2.page.value, l2.pageCount.value, l2.siblingCount.value, l2.showEdges.value).map((e2) => "number" == typeof e2 ? { type: "page", value: e2 } : { type: "ellipsis" }));
  return (t3, l3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.normalizeProps(Wt.guardReactiveProps(o2)), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", { items: r2.value })]), _: 3 }, 16));
} }), R = Wt.defineComponent({ __name: "PaginationListItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const o2 = t2;
  N$1();
  const l2 = C(), r2 = Wt.computed(() => l2.page.value === o2.value), s2 = Wt.computed(() => l2.disabled.value);
  return (t3, n2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "data-type": "page", "aria-label": `Page ${t3.value}`, "aria-current": r2.value ? "page" : void 0, "data-selected": r2.value ? "true" : void 0, disabled: s2.value, type: "button" === t3.as ? "button" : void 0, onClick: n2[0] || (n2[0] = (a2) => !s2.value && Wt.unref(l2).onPageChange(t3.value)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [Wt.createTextVNode(Wt.toDisplayString(t3.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
} }), P = Wt.defineComponent({ __name: "PaginationNext", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const o2 = t2;
  N$1();
  const l2 = C(), r2 = Wt.computed(() => l2.page.value === l2.pageCount.value || l2.disabled.value);
  return (t3, s2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "aria-label": "Next Page", type: "button" === t3.as ? "button" : void 0, disabled: r2.value, onClick: s2[0] || (s2[0] = (a2) => !r2.value && Wt.unref(l2).onPageChange(Wt.unref(l2).page.value + 1)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [s2[1] || (s2[1] = Wt.createTextVNode("Next page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), $ = Wt.defineComponent({ __name: "PaginationPrev", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const o2 = t2;
  N$1();
  const l2 = C(), r2 = Wt.computed(() => 1 === l2.page.value || l2.disabled.value);
  return (t3, s2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), Wt.mergeProps(o2, { "aria-label": "Previous Page", type: "button" === t3.as ? "button" : void 0, disabled: r2.value, onClick: s2[0] || (s2[0] = (a2) => !r2.value && Wt.unref(l2).onPageChange(Wt.unref(l2).page.value - 1)) }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default", {}, () => [s2[1] || (s2[1] = Wt.createTextVNode("Prev page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), N = { slots: { root: "", list: "flex items-center gap-1", ellipsis: "pointer-events-none", label: "min-w-5 text-center", first: "", prev: "", item: "", next: "", last: "" } }, V = { __name: "Pagination", __ssrInlineRender: true, props: { as: { type: null, required: false }, firstIcon: { type: String, required: false }, prevIcon: { type: String, required: false }, nextIcon: { type: String, required: false }, lastIcon: { type: String, required: false }, ellipsisIcon: { type: String, required: false }, color: { type: null, required: false, default: "neutral" }, variant: { type: null, required: false, default: "outline" }, activeColor: { type: null, required: false, default: "primary" }, activeVariant: { type: null, required: false, default: "solid" }, showControls: { type: Boolean, required: false, default: true }, size: { type: null, required: false }, to: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultPage: { type: Number, required: false }, disabled: { type: Boolean, required: false }, itemsPerPage: { type: Number, required: false, default: 10 }, page: { type: Number, required: false }, showEdges: { type: Boolean, required: false, default: false }, siblingCount: { type: Number, required: false, default: 2 }, total: { type: Number, required: false, default: 0 } }, emits: ["update:page"], setup(a2, { emit: n2 }) {
  const i2 = a2, u2 = n2, d2 = Wt.useSlots(), { dir: c2 } = l$1(), m2 = da(), v2 = F(Bm(i2, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), u2), g2 = Wt.computed(() => i2.firstIcon || ("rtl" === c2.value ? m2.ui.icons.chevronDoubleRight : m2.ui.icons.chevronDoubleLeft)), h2 = Wt.computed(() => i2.prevIcon || ("rtl" === c2.value ? m2.ui.icons.chevronRight : m2.ui.icons.chevronLeft)), x2 = Wt.computed(() => i2.nextIcon || ("rtl" === c2.value ? m2.ui.icons.chevronLeft : m2.ui.icons.chevronRight)), C2 = Wt.computed(() => i2.lastIcon || ("rtl" === c2.value ? m2.ui.icons.chevronDoubleLeft : m2.ui.icons.chevronDoubleRight)), _2 = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(N), ...(null == (e2 = m2.ui) ? void 0 : e2.pagination) || {} })();
  });
  return (t2, o2, l2, n3) => {
    var u3;
    o2(pm.ssrRenderComponent(Wt.unref(b), Wt.mergeProps(Wt.unref(v2), { class: _2.value.root({ class: [null == (u3 = i2.ui) ? void 0 : u3.root, i2.class] }) }, n3), { default: Wt.withCtx(({ page: o3, pageCount: l3 }, n4, u4, c3) => {
      var p2, v3;
      if (!n4) return [Wt.createVNode(Wt.unref(B), { class: _2.value.list({ class: null == (v3 = i2.ui) ? void 0 : v3.list }) }, { default: Wt.withCtx(({ items: r2 }) => {
        var n5, u5, c4, p3;
        return [a2.showControls || d2.first ? (Wt.openBlock(), Wt.createBlock(Wt.unref(y), { key: 0, "as-child": "", class: _2.value.first({ class: null == (n5 = i2.ui) ? void 0 : n5.first }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "first", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: g2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, 1) }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), a2.showControls || d2.prev ? (Wt.openBlock(), Wt.createBlock(Wt.unref($), { key: 1, "as-child": "", class: _2.value.prev({ class: null == (u5 = i2.ui) ? void 0 : u5.prev }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "prev", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: h2.value, to: o3 > 1 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 - 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r2, (r3, n6) => {
          var u6, d3;
          return Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, ["page" === r3.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R), { key: n6, "as-child": "", value: r3.value, class: _2.value.item({ class: null == (u6 = i2.ui) ? void 0 : u6.item }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "item", Wt.mergeProps({ ref_for: true }, { item: r3, index: n6, page: o3, pageCount: l3 }), () => {
            var t3;
            return [Wt.createVNode(Ob, { color: o3 === r3.value ? a2.activeColor : a2.color, variant: o3 === r3.value ? a2.activeVariant : a2.variant, size: a2.size, label: String(r3.value), ui: { label: _2.value.label() }, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, r3.value), square: "" }, null, 8, ["color", "variant", "size", "label", "ui", "to"])];
          })]), _: 2 }, 1032, ["value", "class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: r3.type, index: n6, "as-child": "", class: _2.value.ellipsis({ class: null == (d3 = i2.ui) ? void 0 : d3.ellipsis }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "ellipsis", {}, () => [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: a2.ellipsisIcon || Wt.unref(m2).ui.icons.ellipsis }, null, 8, ["color", "variant", "size", "icon"])])]), _: 2 }, 1032, ["index", "class"]))], 64);
        }), 256)), a2.showControls || d2.next ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), { key: 2, "as-child": "", class: _2.value.next({ class: null == (c4 = i2.ui) ? void 0 : c4.next }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "next", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: x2.value, to: o3 < l3 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 + 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), a2.showControls || d2.last ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 3, "as-child": "", class: _2.value.last({ class: null == (p3 = i2.ui) ? void 0 : p3.last }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "last", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: C2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, l3) }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
      }), _: 2 }, 1032, ["class"])];
      n4(pm.ssrRenderComponent(Wt.unref(B), { class: _2.value.list({ class: null == (p2 = i2.ui) ? void 0 : p2.list }) }, { default: Wt.withCtx(({ items: n5 }, u5, c4, p3) => {
        var v4, f2, b2, S2, z2, B2, N2, V2;
        if (!u5) return [a2.showControls || d2.first ? (Wt.openBlock(), Wt.createBlock(Wt.unref(y), { key: 0, "as-child": "", class: _2.value.first({ class: null == (z2 = i2.ui) ? void 0 : z2.first }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "first", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: g2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, 1) }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 3 }, 8, ["class"])) : Wt.createCommentVNode("", true), a2.showControls || d2.prev ? (Wt.openBlock(), Wt.createBlock(Wt.unref($), { key: 1, "as-child": "", class: _2.value.prev({ class: null == (B2 = i2.ui) ? void 0 : B2.prev }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "prev", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: h2.value, to: o3 > 1 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 - 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(n5, (r2, n6) => {
          var u6, d3;
          return Wt.openBlock(), Wt.createBlock(Wt.Fragment, null, ["page" === r2.type ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R), { key: n6, "as-child": "", value: r2.value, class: _2.value.item({ class: null == (u6 = i2.ui) ? void 0 : u6.item }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "item", Wt.mergeProps({ ref_for: true }, { item: r2, index: n6, page: o3, pageCount: l3 }), () => {
            var t3;
            return [Wt.createVNode(Ob, { color: o3 === r2.value ? a2.activeColor : a2.color, variant: o3 === r2.value ? a2.activeVariant : a2.variant, size: a2.size, label: String(r2.value), ui: { label: _2.value.label() }, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, r2.value), square: "" }, null, 8, ["color", "variant", "size", "label", "ui", "to"])];
          })]), _: 2 }, 1032, ["value", "class"])) : (Wt.openBlock(), Wt.createBlock(Wt.unref(k), { key: r2.type, index: n6, "as-child": "", class: _2.value.ellipsis({ class: null == (d3 = i2.ui) ? void 0 : d3.ellipsis }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "ellipsis", {}, () => [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: a2.ellipsisIcon || Wt.unref(m2).ui.icons.ellipsis }, null, 8, ["color", "variant", "size", "icon"])])]), _: 2 }, 1032, ["index", "class"]))], 64);
        }), 256)), a2.showControls || d2.next ? (Wt.openBlock(), Wt.createBlock(Wt.unref(P), { key: 2, "as-child": "", class: _2.value.next({ class: null == (N2 = i2.ui) ? void 0 : N2.next }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "next", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: x2.value, to: o3 < l3 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 + 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true), a2.showControls || d2.last ? (Wt.openBlock(), Wt.createBlock(Wt.unref(w), { key: 3, "as-child": "", class: _2.value.last({ class: null == (V2 = i2.ui) ? void 0 : V2.last }) }, { default: Wt.withCtx(() => [Wt.renderSlot(t2.$slots, "last", {}, () => {
          var t3;
          return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: C2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, l3) }, null, 8, ["color", "variant", "size", "icon", "to"])];
        })]), _: 2 }, 1032, ["class"])) : Wt.createCommentVNode("", true)];
        a2.showControls || d2.first ? u5(pm.ssrRenderComponent(Wt.unref(y), { "as-child": "", class: _2.value.first({ class: null == (v4 = i2.ui) ? void 0 : v4.first }) }, { default: Wt.withCtx((o4, l4, n6, i3) => {
          if (!l4) return [Wt.renderSlot(t2.$slots, "first", {}, () => {
            var t3;
            return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: g2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, 1) }, null, 8, ["color", "variant", "size", "icon", "to"])];
          })];
          pm.ssrRenderSlot(t2.$slots, "first", {}, () => {
            var e2;
            l4(pm.ssrRenderComponent(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: g2.value, to: null == (e2 = a2.to) ? void 0 : e2.call(a2, 1) }, null, n6, i3));
          }, l4, n6, i3);
        }), _: 2 }, c4, p3)) : u5("<!---->"), a2.showControls || d2.prev ? u5(pm.ssrRenderComponent(Wt.unref($), { "as-child": "", class: _2.value.prev({ class: null == (f2 = i2.ui) ? void 0 : f2.prev }) }, { default: Wt.withCtx((l4, n6, i3, u6) => {
          if (!n6) return [Wt.renderSlot(t2.$slots, "prev", {}, () => {
            var t3;
            return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: h2.value, to: o3 > 1 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 - 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
          })];
          pm.ssrRenderSlot(t2.$slots, "prev", {}, () => {
            var e2;
            n6(pm.ssrRenderComponent(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: h2.value, to: o3 > 1 ? null == (e2 = a2.to) ? void 0 : e2.call(a2, o3 - 1) : void 0 }, null, i3, u6));
          }, n6, i3, u6);
        }), _: 2 }, c4, p3)) : u5("<!---->"), u5("<!--[-->"), pm.ssrRenderList(n5, (n6, d3) => {
          var v5, g3;
          u5("<!--[-->"), "page" === n6.type ? u5(pm.ssrRenderComponent(Wt.unref(R), { key: d3, "as-child": "", value: n6.value, class: _2.value.item({ class: null == (v5 = i2.ui) ? void 0 : v5.item }) }, { default: Wt.withCtx((i3, u6, c5, p4) => {
            if (!u6) return [Wt.renderSlot(t2.$slots, "item", Wt.mergeProps({ ref_for: true }, { item: n6, index: d3, page: o3, pageCount: l3 }), () => {
              var t3;
              return [Wt.createVNode(Ob, { color: o3 === n6.value ? a2.activeColor : a2.color, variant: o3 === n6.value ? a2.activeVariant : a2.variant, size: a2.size, label: String(n6.value), ui: { label: _2.value.label() }, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, n6.value), square: "" }, null, 8, ["color", "variant", "size", "label", "ui", "to"])];
            })];
            pm.ssrRenderSlot(t2.$slots, "item", Wt.mergeProps({ ref_for: true }, { item: n6, index: d3, page: o3, pageCount: l3 }), () => {
              var e2;
              u6(pm.ssrRenderComponent(Ob, { color: o3 === n6.value ? a2.activeColor : a2.color, variant: o3 === n6.value ? a2.activeVariant : a2.variant, size: a2.size, label: String(n6.value), ui: { label: _2.value.label() }, to: null == (e2 = a2.to) ? void 0 : e2.call(a2, n6.value), square: "" }, null, c5, p4));
            }, u6, c5, p4);
          }), _: 2 }, c4, p3)) : u5(pm.ssrRenderComponent(Wt.unref(k), { key: n6.type, index: d3, "as-child": "", class: _2.value.ellipsis({ class: null == (g3 = i2.ui) ? void 0 : g3.ellipsis }) }, { default: Wt.withCtx((o4, l4, n7, i3) => {
            if (!l4) return [Wt.renderSlot(t2.$slots, "ellipsis", {}, () => [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: a2.ellipsisIcon || Wt.unref(m2).ui.icons.ellipsis }, null, 8, ["color", "variant", "size", "icon"])])];
            pm.ssrRenderSlot(t2.$slots, "ellipsis", {}, () => {
              l4(pm.ssrRenderComponent(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: a2.ellipsisIcon || Wt.unref(m2).ui.icons.ellipsis }, null, n7, i3));
            }, l4, n7, i3);
          }), _: 2 }, c4, p3)), u5("<!--]-->");
        }), u5("<!--]-->"), a2.showControls || d2.next ? u5(pm.ssrRenderComponent(Wt.unref(P), { "as-child": "", class: _2.value.next({ class: null == (b2 = i2.ui) ? void 0 : b2.next }) }, { default: Wt.withCtx((n6, i3, u6, d3) => {
          if (!i3) return [Wt.renderSlot(t2.$slots, "next", {}, () => {
            var t3;
            return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: x2.value, to: o3 < l3 ? null == (t3 = a2.to) ? void 0 : t3.call(a2, o3 + 1) : void 0 }, null, 8, ["color", "variant", "size", "icon", "to"])];
          })];
          pm.ssrRenderSlot(t2.$slots, "next", {}, () => {
            var e2;
            i3(pm.ssrRenderComponent(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: x2.value, to: o3 < l3 ? null == (e2 = a2.to) ? void 0 : e2.call(a2, o3 + 1) : void 0 }, null, u6, d3));
          }, i3, u6, d3);
        }), _: 2 }, c4, p3)) : u5("<!---->"), a2.showControls || d2.last ? u5(pm.ssrRenderComponent(Wt.unref(w), { "as-child": "", class: _2.value.last({ class: null == (S2 = i2.ui) ? void 0 : S2.last }) }, { default: Wt.withCtx((o4, n6, i3, u6) => {
          if (!n6) return [Wt.renderSlot(t2.$slots, "last", {}, () => {
            var t3;
            return [Wt.createVNode(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: C2.value, to: null == (t3 = a2.to) ? void 0 : t3.call(a2, l3) }, null, 8, ["color", "variant", "size", "icon", "to"])];
          })];
          pm.ssrRenderSlot(t2.$slots, "last", {}, () => {
            var e2;
            n6(pm.ssrRenderComponent(Ob, { color: a2.color, variant: a2.variant, size: a2.size, icon: C2.value, to: null == (e2 = a2.to) ? void 0 : e2.call(a2, l3) }, null, i3, u6));
          }, n6, i3, u6);
        }), _: 2 }, c4, p3)) : u5("<!---->");
      }), _: 2 }, u4, c3));
    }), _: 3 }, l2));
  };
} }, T = V.setup;
V.setup = (a2, t2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue"), T ? T(a2, t2) : void 0;
};
const E = Qs.defineStore("useDataMasterStore", () => {
  Fs();
  const a2 = Wt.ref([]), t2 = Wt.ref(false), o2 = "/admin/master";
  return { listData: a2, loading: t2, path: o2, loadDataMaster: async (e2) => {
    var a3, t3;
    try {
      const a4 = (await r.get(`${o2}/${null == e2 ? void 0 : e2.master}`, { params: null == e2 ? void 0 : e2.params })).data || [];
      return { status: true, message: a4.message || "Data master berhasil dimuat.", data: a4.data.data || [], total_halaman: a4.data.total_halaman || 1, total_data: a4.data.total_data || 0, halaman_sekarang: a4.data.halaman_sekarang || 1 };
    } catch (l2) {
      if (console.error("Error loading data master:", l2), l2.message.toLowerCase().includes("network")) return { status: false, message: "Koneksi bermasalah, silakan cek koneksi internet." };
      if (null == (a3 = null == l2 ? void 0 : l2.response) ? void 0 : a3.data) {
        const { name: e3, message: a4 } = null == (t3 = null == l2 ? void 0 : l2.response) ? void 0 : t3.data;
        return { status: false, errors: e3, message: a4 };
      }
      return { status: false, errors: "Error", message: l2 };
    }
  }, saveDataMaster: async (e2) => {
    var a3, t3;
    try {
      const { data: a4 } = await r.post(`${o2}/${e2.master}/simpan`, e2);
      return { status: true, message: a4.message || "Data master berhasil disimpan.", data: a4.data || null };
    } catch (l2) {
      if (console.error("Error saving data master:", l2), l2.message.toLowerCase().includes("network")) return { status: false, message: "Koneksi bermasalah, silakan cek koneksi internet." };
      if (null == (a3 = null == l2 ? void 0 : l2.response) ? void 0 : a3.data) {
        const { name: e3, message: a4 } = null == (t3 = null == l2 ? void 0 : l2.response) ? void 0 : t3.data;
        return { status: false, errors: e3, message: a4 };
      }
      return { status: false, errors: "Error", message: l2 };
    }
  }, deleteDataMaster: async (e2) => {
    var a3, t3;
    try {
      const { data: a4 } = await r.post(`${o2}/${e2.master}/${e2.id}/hapus`, e2);
      return { status: true, message: a4.message || "Data master berhasil dihapus.", data: a4.data || null };
    } catch (l2) {
      if (console.error("Error deleting data master:", l2), l2.message.toLowerCase().includes("network")) return { status: false, message: "Koneksi bermasalah, silakan cek koneksi internet." };
      if (null == (a3 = null == l2 ? void 0 : l2.response) ? void 0 : a3.data) {
        const { name: e3, message: a4 } = null == (t3 = null == l2 ? void 0 : l2.response) ? void 0 : t3.data;
        return { status: false, errors: e3, message: a4 };
      }
      return { status: false, errors: "Error", message: l2 };
    }
  }, setToggleActive: async (e2) => {
    var a3, t3;
    try {
      const { data: a4 } = await r.post(`${o2}/${e2.master}/${e2.id}/toggle-default`, e2);
      return { status: true, message: a4.message || "Status berhasil diubah.", data: a4.data || null };
    } catch (l2) {
      if (console.error("Error toggling active status:", l2), l2.message.toLowerCase().includes("network")) return { status: false, message: "Koneksi bermasalah, silakan cek koneksi internet." };
      if (null == (a3 = null == l2 ? void 0 : l2.response) ? void 0 : a3.data) {
        const { name: e3, message: a4 } = null == (t3 = null == l2 ? void 0 : l2.response) ? void 0 : t3.data;
        return { status: false, errors: e3, message: a4 };
      }
      return { status: false, errors: "Error", message: l2 };
    }
  } };
}), D = Qs.defineStore("useGetOpsiStore", () => {
  Fs();
  const a2 = Wt.ref(false), t2 = "/master";
  return { loading: a2, path: t2, loadOpsiMaster: async (e2) => {
    var a3, o2, l2;
    try {
      const { data: o3 } = await r.get(`${t2}/${e2.master}/get-opsi`, { params: e2.params });
      return (null == (a3 = e2.params) ? void 0 : a3.is_with_paginasi) ? { data: o3.data.data, total_halaman: o3.data.total_halaman, halaman_sekarang: o3.data.halaman_sekarang, total_data: o3.data.total_data, message: o3.message, status: true } : { data: o3.data, message: "Berhasil mendapatkan data", status: true };
    } catch (r2) {
      if (r2.message.toLowerCase().includes("network")) return { status: false, message: "Koneksi bermasalah, silakan cek koneksi internet." };
      if (null == (o2 = null == r2 ? void 0 : r2.response) ? void 0 : o2.data) {
        const { name: e3, message: a4 } = null == (l2 = null == r2 ? void 0 : r2.response) ? void 0 : l2.data;
        return { status: false, errors: e3, message: a4 };
      }
      return { status: false, errors: "Error", message: r2 };
    }
  } };
}), I = Wt.defineComponent({ __name: "mataKuliahFragment", __ssrInlineRender: true, setup(a2) {
  const t2 = Wt.useTemplateRef("table"), o2 = Wt.ref([{ id: "4600", date: "2024-03-11T15:30:00", email: "james.anderson@example.com", amount: 594 }, { id: "4599", date: "2024-03-11T10:10:00", email: "mia.white@example.com", amount: 276 }, { id: "4598", date: "2024-03-11T08:50:00", email: "william.brown@example.com", amount: 315 }, { id: "4597", date: "2024-03-10T19:45:00", email: "emma.davis@example.com", amount: 529 }, { id: "4596", date: "2024-03-10T15:55:00", email: "ethan.harris@example.com", amount: 639 }, { id: "4595", date: "2024-03-10T13:20:00", email: "sophia.miller@example.com", amount: 428 }, { id: "4594", date: "2024-03-10T11:05:00", email: "noah.wilson@example.com", amount: 673 }, { id: "4593", date: "2024-03-09T22:15:00", email: "olivia.jones@example.com", amount: 382 }, { id: "4592", date: "2024-03-09T20:30:00", email: "liam.taylor@example.com", amount: 547 }, { id: "4591", date: "2024-03-09T18:45:00", email: "ava.thomas@example.com", amount: 291 }, { id: "4590", date: "2024-03-09T16:20:00", email: "lucas.martin@example.com", amount: 624 }, { id: "4589", date: "2024-03-09T14:10:00", email: "isabella.clark@example.com", amount: 438 }, { id: "4588", date: "2024-03-09T12:05:00", email: "mason.rodriguez@example.com", amount: 583 }, { id: "4587", date: "2024-03-09T10:30:00", email: "sophia.lee@example.com", amount: 347 }, { id: "4586", date: "2024-03-09T08:15:00", email: "ethan.walker@example.com", amount: 692 }, { id: "4585", date: "2024-03-08T23:40:00", email: "amelia.hall@example.com", amount: 419 }, { id: "4584", date: "2024-03-08T21:25:00", email: "oliver.young@example.com", amount: 563 }, { id: "4583", date: "2024-03-08T19:50:00", email: "aria.king@example.com", amount: 328 }, { id: "4582", date: "2024-03-08T17:35:00", email: "henry.wright@example.com", amount: 647 }, { id: "4581", date: "2024-03-08T15:20:00", email: "luna.lopez@example.com", amount: 482 }]), l2 = [{ accessorKey: "id", header: "#", cell: ({ row: e2 }) => `#${e2.getValue("id")}` }, { accessorKey: "date", header: "Date", cell: ({ row: e2 }) => new Date(e2.getValue("date")).toLocaleString("en-US", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hour12: false }) }, { accessorKey: "email", header: "Email" }, { accessorKey: "amount", header: () => Wt.h("div", { class: "text-right" }, "Amount"), cell: ({ row: a3 }) => {
    const t3 = Number.parseFloat(a3.getValue("amount")), o3 = new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(t3);
    return Wt.h("div", { class: "text-right font-medium" }, o3);
  } }], s2 = Wt.ref({ pageIndex: 0, pageSize: 5 }), n2 = E(), i2 = D(), u2 = l(), p2 = Wt.ref(false);
  Wt.ref(false);
  const m2 = Wt.ref({ mata_kuliah_id: null, nama: null, program_studi_id: null, kode_mk: null, gadik_id: null }), v2 = Wt.ref(0), g2 = Wt.ref(0), f2 = Wt.ref(0), h2 = Wt.ref({ limit: 15, page: 1 }), k2 = Wt.ref([]), C2 = Wt.ref([]), _2 = Wt.ref([]), b2 = Wt.ref({ post: false, get: false, put: false, delete: false });
  Wt.computed(() => {
    const e2 = [];
    for (let a3 = (/* @__PURE__ */ new Date()).getFullYear(); a3 >= 2e3; a3--) e2.push({ text: a3, value: a3 });
    return e2;
  });
  Wt.computed(() => {
    var e2, a3;
    const t3 = k2.value, o3 = t3.length > 0 ? null == (e2 = t3[0]) ? void 0 : e2.no_urut : 0, l3 = t3.length > 0 ? null == (a3 = t3[t3.length - 1]) ? void 0 : a3.no_urut : 0;
    return t3.length > 0 ? `Hasil ${o3} - ${l3} dari ${v2.value}` : `Hasil 0 dari ${v2.value}`;
  });
  return Wt.watch(p2, (e2) => {
    e2 || (m2.value = { mata_kuliah_id: null, nama: null, program_studi_id: null, kode_mk: null, gadik_id: null });
  }), Wt.watch(() => m2.value.program_studi_id, async () => {
    await (async (e2 = null, a3 = true) => {
      b2.value.get = true;
      let t3 = ["program-studi"];
      e2 && a3 ? t3 = [e2] : e2 && !a3 && t3.push(e2);
      for (let o3 = 0; o3 < t3.length; o3++) {
        const { status: e3, data: a4, message: l3 } = await i2.loadOpsiMaster({ master: "satuan_tree" === t3[o3] ? "satuan" : t3[o3], params: "stakeholder" === t3[o3] ? { kategori: "gadik;gapendik", program_studi_id: m2.value.program_studi_id.join(";") } : null });
        if (e3) switch (t3[o3]) {
          case "program-studi":
            C2.value = a4;
            break;
          case "stakeholder":
            _2.value = a4;
        }
        else u2.add({ title: "error", description: l3, color: "error" });
      }
      b2.value.get = false;
    })("stakeholder", true);
  }, { deep: true }), Wt.watch(() => h2.value.page, () => {
    (async () => {
      b2.value.get = true;
      const { status: e2, data: a3, message: t3, total_data: o3, halaman_sekarang: l3, total_halaman: r2 } = await n2.loadDataMaster({ params: { ...h2.value }, master: "mata-kuliah" });
      e2 ? (k2.value = a3, v2.value = o3, g2.value = r2, f2.value = l3) : u2.add({ title: "error", description: t3, color: "error" }), b2.value.get = false;
    })();
  }, { deep: true }), (a3, n3, i3, u3) => {
    var p3, m3, v3, g3, f3, h3;
    const x2 = ue, k3 = V;
    n3(`<div${pm.ssrRenderAttrs(Wt.mergeProps({ class: "w-full space-y-4 pb-4" }, u3))}>`), n3(pm.ssrRenderComponent(x2, { ref_key: "table", ref: t2, pagination: Wt.unref(s2), "onUpdate:pagination": (a4) => Wt.isRef(s2) ? s2.value = a4 : null, data: Wt.unref(o2), columns: l2, "pagination-options": { getPaginationRowModel: Wt.unref(ee)() }, class: "flex-1" }, null, i3)), n3('<div class="flex justify-center border-t border-default pt-4">'), n3(pm.ssrRenderComponent(k3, { ui: { root: "rounded-full" }, "default-page": ((null == (m3 = null == (p3 = Wt.unref(t2)) ? void 0 : p3.tableApi) ? void 0 : m3.getState().pagination.pageIndex) || 0) + 1, "items-per-page": null == (g3 = null == (v3 = Wt.unref(t2)) ? void 0 : v3.tableApi) ? void 0 : g3.getState().pagination.pageSize, total: null == (h3 = null == (f3 = Wt.unref(t2)) ? void 0 : f3.tableApi) ? void 0 : h3.getFilteredRowModel().rows.length, "onUpdate:page": (a4) => {
      var o3, l3;
      return null == (l3 = null == (o3 = Wt.unref(t2)) ? void 0 : o3.tableApi) ? void 0 : l3.setPageIndex(a4 - 1);
    } }, null, i3)), n3("</div></div>");
  };
} }), q = I.setup;
I.setup = (a2, t2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/features/admin/dataMaster/mataKuliahFragment.vue"), q ? q(a2, t2) : void 0;
};
const M = Wt.defineComponent({ __name: "index", __ssrInlineRender: true, setup(a2) {
  ei({ title: "Data Master", meta: [{ name: "Data Master" }] });
  const t2 = Wt.ref("periode-akademik"), o2 = Wt.ref([{ value: "periode-akademik", text: "Periode Akademik" }, { value: "program-studi", text: "Program Studi" }, { value: "mata-kuliah", text: "Mata Kuliah" }]);
  return (a3, l2, s2, n2) => {
    l2(`<div${pm.ssrRenderAttrs(n2)}><div class="mt-5 flex flex-row gap-x-5"><div class="w-[293px] gap-y-2 h-full -intro-x"><div class="bg-secondary px-3 py-2 rounded-lg text-white text-sm font-semibold"> Menu </div><div class="bg-white p-4 rounded-lg min-h-[300px] mt-2"><div class="w-full flex flex-col gap-y-1"><!--[-->`), pm.ssrRenderList(Wt.unref(o2), (a4) => {
      l2(`<div class="flex flex-col gap-y-3"><div class="${pm.ssrRenderClass([a4.value == Wt.unref(t2) ? "text-777777 bg-PRIMARY bg-opacity-[0.08] border-l-[3px] border-PRIMARY" : "bg-transparent text-777777", "px-2 py-2 text-sm font-medium rounded cursor-pointer transition duration-500 ease-in-out hover:scale-105"])}">${pm.ssrInterpolate(a4.text)}</div></div>`);
    }), l2('<!--]--></div></div></div><div class="grow intro-x">'), "mata-kuliah" == Wt.unref(t2) ? l2(pm.ssrRenderComponent(I, null, null, s2)) : l2("<!---->"), l2("</div></div></div>");
  };
} }), L = M.setup;
M.setup = (a2, t2) => {
  const o2 = Wt.useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/admin/data-master/index.vue"), L ? L(a2, t2) : void 0;
};

export { M as default };
//# sourceMappingURL=index-B7CDHOyf.mjs.map

import { u as da, h as Rm, v as Wt, t as Ky, s as pm, _ as Rb } from './server.mjs';
import { D as Do, b as bo } from './index-BJFOiOgd.mjs';
import { l } from './useLocale-BTFVrGyI.mjs';
import { F } from './useForwardPropsEmits-WwvTsoLV.mjs';

const u = { slots: { root: "", header: "flex items-center justify-between", body: "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0", heading: "text-center font-medium truncate mx-auto", grid: "w-full border-collapse select-none space-y-1 focus:outline-none", gridRow: "grid grid-cols-7 place-items-center", gridWeekDaysRow: "mb-1 grid w-full grid-cols-7", gridBody: "grid", headCell: "rounded-md", cell: "relative text-center", cellTrigger: ["m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-[selected]:text-inverted data-today:font-semibold data-[outside-view]:text-muted", "transition"] }, variants: { color: { primary: { headCell: "text-primary", cellTrigger: "focus-visible:ring-primary data-[selected]:bg-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20" }, secondary: { headCell: "text-secondary", cellTrigger: "focus-visible:ring-secondary data-[selected]:bg-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20" }, success: { headCell: "text-success", cellTrigger: "focus-visible:ring-success data-[selected]:bg-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20" }, info: { headCell: "text-info", cellTrigger: "focus-visible:ring-info data-[selected]:bg-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20" }, warning: { headCell: "text-warning", cellTrigger: "focus-visible:ring-warning data-[selected]:bg-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20" }, error: { headCell: "text-error", cellTrigger: "focus-visible:ring-error data-[selected]:bg-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20" }, neutral: { headCell: "text-highlighted", cellTrigger: "focus-visible:ring-inverted data-[selected]:bg-inverted data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10" } }, size: { xs: { heading: "text-xs", cell: "text-xs", headCell: "text-[10px]", cellTrigger: "size-7", body: "space-y-2 pt-2" }, sm: { heading: "text-xs", headCell: "text-xs", cell: "text-xs", cellTrigger: "size-7" }, md: { heading: "text-sm", headCell: "text-xs", cell: "text-sm", cellTrigger: "size-8" }, lg: { heading: "text-md", headCell: "text-md", cellTrigger: "size-9 text-md" }, xl: { heading: "text-lg", headCell: "text-lg", cellTrigger: "size-10 text-lg" } } }, defaultVariants: { size: "md", color: "primary" } }, c = { __name: "Calendar", __ssrInlineRender: true, props: { as: { type: null, required: false }, nextYearIcon: { type: String, required: false }, nextYear: { type: Object, required: false }, nextMonthIcon: { type: String, required: false }, nextMonth: { type: Object, required: false }, prevYearIcon: { type: String, required: false }, prevYear: { type: Object, required: false }, prevMonthIcon: { type: String, required: false }, prevMonth: { type: Object, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, range: { type: Boolean, required: false }, multiple: { type: Boolean, required: false }, monthControls: { type: Boolean, required: false, default: true }, yearControls: { type: Boolean, required: false, default: true }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultPlaceholder: { type: null, required: false }, placeholder: { type: null, required: false }, allowNonContiguousRanges: { type: Boolean, required: false }, pagedNavigation: { type: Boolean, required: false }, preventDeselect: { type: Boolean, required: false }, maximumDays: { type: Number, required: false }, weekStartsOn: { type: Number, required: false }, weekdayFormat: { type: String, required: false }, fixedWeeks: { type: Boolean, required: false, default: true }, maxValue: { type: null, required: false }, minValue: { type: null, required: false }, numberOfMonths: { type: Number, required: false }, disabled: { type: Boolean, required: false }, readonly: { type: Boolean, required: false }, initialFocus: { type: Boolean, required: false }, isDateDisabled: { type: Function, required: false }, isDateUnavailable: { type: Function, required: false }, isDateHighlightable: { type: Function, required: false }, nextPage: { type: Function, required: false }, prevPage: { type: Function, required: false }, disableDaysOutsideCurrentView: { type: Boolean, required: false }, fixedDate: { type: String, required: false } }, emits: ["update:modelValue", "update:placeholder", "update:startValue"], setup(c2, { emit: g2 }) {
  const v = c2, h = g2, { code: p, dir: y, t: f } = l(), x = da(), m = F(Rm(v, "range", "modelValue", "defaultValue", "color", "size", "monthControls", "yearControls", "class", "ui"), h), C = Wt.computed(() => v.nextYearIcon || ("rtl" === y.value ? x.ui.icons.chevronDoubleLeft : x.ui.icons.chevronDoubleRight)), k = Wt.computed(() => v.nextMonthIcon || ("rtl" === y.value ? x.ui.icons.chevronLeft : x.ui.icons.chevronRight)), w = Wt.computed(() => v.prevYearIcon || ("rtl" === y.value ? x.ui.icons.chevronDoubleRight : x.ui.icons.chevronDoubleLeft)), B = Wt.computed(() => v.prevMonthIcon || ("rtl" === y.value ? x.ui.icons.chevronRight : x.ui.icons.chevronLeft)), b = Wt.computed(() => {
    var e2;
    return Ky({ extend: Ky(u), ...(null == (e2 = x.ui) ? void 0 : e2.calendar) || {} })({ color: v.color, size: v.size });
  });
  function V(e2, r2) {
    return -1 === r2 ? e2.subtract({ years: 1 }) : e2.add({ years: 1 });
  }
  const R = Wt.computed(() => v.range ? Do : bo);
  return (e2, r2, a2, n2) => {
    var i2;
    r2(pm.ssrRenderComponent(Wt.unref(R).Root, Wt.mergeProps(Wt.unref(m), { "model-value": c2.modelValue, "default-value": c2.defaultValue, locale: Wt.unref(p), dir: Wt.unref(y), class: b.value.root({ class: [null == (i2 = v.ui) ? void 0 : i2.root, v.class] }) }, n2), { default: Wt.withCtx(({ weekDays: r3, grid: a3 }, n3, i3, s2) => {
      var d2, u2, c3, g3;
      if (!n3) return [Wt.createVNode(Wt.unref(R).Header, { class: b.value.header({ class: null == (c3 = v.ui) ? void 0 : c3.header }) }, { default: Wt.withCtx(() => {
        var r4;
        return [v.yearControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Prev, { key: 0, "prev-page": (e3) => V(e3, -1), "aria-label": Wt.unref(f)("calendar.prevYear"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: w.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevYear), null, 16, ["icon", "size"])]), _: 1 }, 8, ["prev-page", "aria-label"])) : Wt.createCommentVNode("", true), v.monthControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Prev, { key: 1, "aria-label": Wt.unref(f)("calendar.prevMonth"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: B.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevMonth), null, 16, ["icon", "size"])]), _: 1 }, 8, ["aria-label"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(R).Heading, { class: b.value.heading({ class: null == (r4 = v.ui) ? void 0 : r4.heading }) }, { default: Wt.withCtx(({ headingValue: r5 }) => [Wt.renderSlot(e2.$slots, "heading", { value: r5 }, () => [Wt.createTextVNode(Wt.toDisplayString(r5), 1)])]), _: 3 }, 8, ["class"]), v.monthControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Next, { key: 2, "aria-label": Wt.unref(f)("calendar.nextMonth"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: k.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextMonth), null, 16, ["icon", "size"])]), _: 1 }, 8, ["aria-label"])) : Wt.createCommentVNode("", true), v.yearControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Next, { key: 3, "next-page": (e3) => V(e3, 1), "aria-label": Wt.unref(f)("calendar.nextYear"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: C.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextYear), null, 16, ["icon", "size"])]), _: 1 }, 8, ["next-page", "aria-label"])) : Wt.createCommentVNode("", true)];
      }), _: 3 }, 8, ["class"]), Wt.createVNode("div", { class: b.value.body({ class: null == (g3 = v.ui) ? void 0 : g3.body }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a3, (a4) => {
        var t2;
        return Wt.openBlock(), Wt.createBlock(Wt.unref(R).Grid, { key: a4.value.toString(), class: b.value.grid({ class: null == (t2 = v.ui) ? void 0 : t2.grid }) }, { default: Wt.withCtx(() => {
          var t3;
          return [Wt.createVNode(Wt.unref(R).GridHead, null, { default: Wt.withCtx(() => {
            var a5;
            return [Wt.createVNode(Wt.unref(R).GridRow, { class: b.value.gridWeekDaysRow({ class: null == (a5 = v.ui) ? void 0 : a5.gridWeekDaysRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r3, (r4) => {
              var a6;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).HeadCell, { key: r4, class: b.value.headCell({ class: null == (a6 = v.ui) ? void 0 : a6.headCell }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "week-day", { day: r4 }, () => [Wt.createTextVNode(Wt.toDisplayString(r4), 1)])]), _: 2 }, 1032, ["class"]);
            }), 128))]), _: 2 }, 1032, ["class"])];
          }), _: 2 }, 1024), Wt.createVNode(Wt.unref(R).GridBody, { class: b.value.gridBody({ class: null == (t3 = v.ui) ? void 0 : t3.gridBody }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a4.rows, (r4, t4) => {
            var o2;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(R).GridRow, { key: `weekDate-${t4}`, class: b.value.gridRow({ class: null == (o2 = v.ui) ? void 0 : o2.gridRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r4, (r5) => {
              var t5;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).Cell, { key: r5.toString(), date: r5, class: b.value.cell({ class: null == (t5 = v.ui) ? void 0 : t5.cell }) }, { default: Wt.withCtx(() => {
                var t6;
                return [Wt.createVNode(Wt.unref(R).CellTrigger, { day: r5, month: a4.value, class: b.value.cellTrigger({ class: null == (t6 = v.ui) ? void 0 : t6.cellTrigger }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "day", { day: r5 }, () => [Wt.createTextVNode(Wt.toDisplayString(r5.day), 1)])]), _: 2 }, 1032, ["day", "month", "class"])];
              }), _: 2 }, 1032, ["date", "class"]);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128))]), _: 2 }, 1032, ["class"])];
        }), _: 2 }, 1032, ["class"]);
      }), 128))], 2)];
      n3(pm.ssrRenderComponent(Wt.unref(R).Header, { class: b.value.header({ class: null == (d2 = v.ui) ? void 0 : d2.header }) }, { default: Wt.withCtx((r4, a4, n4, i4) => {
        var s3, d3;
        if (!a4) return [v.yearControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Prev, { key: 0, "prev-page": (e3) => V(e3, -1), "aria-label": Wt.unref(f)("calendar.prevYear"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: w.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevYear), null, 16, ["icon", "size"])]), _: 1 }, 8, ["prev-page", "aria-label"])) : Wt.createCommentVNode("", true), v.monthControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Prev, { key: 1, "aria-label": Wt.unref(f)("calendar.prevMonth"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: B.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevMonth), null, 16, ["icon", "size"])]), _: 1 }, 8, ["aria-label"])) : Wt.createCommentVNode("", true), Wt.createVNode(Wt.unref(R).Heading, { class: b.value.heading({ class: null == (d3 = v.ui) ? void 0 : d3.heading }) }, { default: Wt.withCtx(({ headingValue: r5 }) => [Wt.renderSlot(e2.$slots, "heading", { value: r5 }, () => [Wt.createTextVNode(Wt.toDisplayString(r5), 1)])]), _: 3 }, 8, ["class"]), v.monthControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Next, { key: 2, "aria-label": Wt.unref(f)("calendar.nextMonth"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: k.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextMonth), null, 16, ["icon", "size"])]), _: 1 }, 8, ["aria-label"])) : Wt.createCommentVNode("", true), v.yearControls ? (Wt.openBlock(), Wt.createBlock(Wt.unref(R).Next, { key: 3, "next-page": (e3) => V(e3, 1), "aria-label": Wt.unref(f)("calendar.nextYear"), "as-child": "" }, { default: Wt.withCtx(() => [Wt.createVNode(Rb, Wt.mergeProps({ icon: C.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextYear), null, 16, ["icon", "size"])]), _: 1 }, 8, ["next-page", "aria-label"])) : Wt.createCommentVNode("", true)];
        v.yearControls ? a4(pm.ssrRenderComponent(Wt.unref(R).Prev, { "prev-page": (e3) => V(e3, -1), "aria-label": Wt.unref(f)("calendar.prevYear"), "as-child": "" }, { default: Wt.withCtx((e3, r5, a5, n5) => {
          if (!r5) return [Wt.createVNode(Rb, Wt.mergeProps({ icon: w.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevYear), null, 16, ["icon", "size"])];
          r5(pm.ssrRenderComponent(Rb, Wt.mergeProps({ icon: w.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevYear), null, a5, n5));
        }), _: 2 }, n4, i4)) : a4("<!---->"), v.monthControls ? a4(pm.ssrRenderComponent(Wt.unref(R).Prev, { "aria-label": Wt.unref(f)("calendar.prevMonth"), "as-child": "" }, { default: Wt.withCtx((e3, r5, a5, n5) => {
          if (!r5) return [Wt.createVNode(Rb, Wt.mergeProps({ icon: B.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevMonth), null, 16, ["icon", "size"])];
          r5(pm.ssrRenderComponent(Rb, Wt.mergeProps({ icon: B.value, size: v.size, color: "neutral", variant: "ghost" }, v.prevMonth), null, a5, n5));
        }), _: 2 }, n4, i4)) : a4("<!---->"), a4(pm.ssrRenderComponent(Wt.unref(R).Heading, { class: b.value.heading({ class: null == (s3 = v.ui) ? void 0 : s3.heading }) }, { default: Wt.withCtx(({ headingValue: r5 }, a5, o2, n5) => {
          if (!a5) return [Wt.renderSlot(e2.$slots, "heading", { value: r5 }, () => [Wt.createTextVNode(Wt.toDisplayString(r5), 1)])];
          pm.ssrRenderSlot(e2.$slots, "heading", { value: r5 }, () => {
            a5(`${pm.ssrInterpolate(r5)}`);
          }, a5, o2, n5);
        }), _: 2 }, n4, i4)), v.monthControls ? a4(pm.ssrRenderComponent(Wt.unref(R).Next, { "aria-label": Wt.unref(f)("calendar.nextMonth"), "as-child": "" }, { default: Wt.withCtx((e3, r5, a5, n5) => {
          if (!r5) return [Wt.createVNode(Rb, Wt.mergeProps({ icon: k.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextMonth), null, 16, ["icon", "size"])];
          r5(pm.ssrRenderComponent(Rb, Wt.mergeProps({ icon: k.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextMonth), null, a5, n5));
        }), _: 2 }, n4, i4)) : a4("<!---->"), v.yearControls ? a4(pm.ssrRenderComponent(Wt.unref(R).Next, { "next-page": (e3) => V(e3, 1), "aria-label": Wt.unref(f)("calendar.nextYear"), "as-child": "" }, { default: Wt.withCtx((e3, r5, a5, n5) => {
          if (!r5) return [Wt.createVNode(Rb, Wt.mergeProps({ icon: C.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextYear), null, 16, ["icon", "size"])];
          r5(pm.ssrRenderComponent(Rb, Wt.mergeProps({ icon: C.value, size: v.size, color: "neutral", variant: "ghost" }, v.nextYear), null, a5, n5));
        }), _: 2 }, n4, i4)) : a4("<!---->");
      }), _: 2 }, i3, s2)), n3(`<div class="${pm.ssrRenderClass(b.value.body({ class: null == (u2 = v.ui) ? void 0 : u2.body }))}"${s2}><!--[-->`), pm.ssrRenderList(a3, (a4) => {
        var o2;
        n3(pm.ssrRenderComponent(Wt.unref(R).Grid, { key: a4.value.toString(), class: b.value.grid({ class: null == (o2 = v.ui) ? void 0 : o2.grid }) }, { default: Wt.withCtx((o3, n4, i4, s3) => {
          var d3, u3;
          if (!n4) return [Wt.createVNode(Wt.unref(R).GridHead, null, { default: Wt.withCtx(() => {
            var a5;
            return [Wt.createVNode(Wt.unref(R).GridRow, { class: b.value.gridWeekDaysRow({ class: null == (a5 = v.ui) ? void 0 : a5.gridWeekDaysRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r3, (r4) => {
              var a6;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).HeadCell, { key: r4, class: b.value.headCell({ class: null == (a6 = v.ui) ? void 0 : a6.headCell }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "week-day", { day: r4 }, () => [Wt.createTextVNode(Wt.toDisplayString(r4), 1)])]), _: 2 }, 1032, ["class"]);
            }), 128))]), _: 2 }, 1032, ["class"])];
          }), _: 2 }, 1024), Wt.createVNode(Wt.unref(R).GridBody, { class: b.value.gridBody({ class: null == (u3 = v.ui) ? void 0 : u3.gridBody }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a4.rows, (r4, t2) => {
            var o4;
            return Wt.openBlock(), Wt.createBlock(Wt.unref(R).GridRow, { key: `weekDate-${t2}`, class: b.value.gridRow({ class: null == (o4 = v.ui) ? void 0 : o4.gridRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r4, (r5) => {
              var t3;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).Cell, { key: r5.toString(), date: r5, class: b.value.cell({ class: null == (t3 = v.ui) ? void 0 : t3.cell }) }, { default: Wt.withCtx(() => {
                var t4;
                return [Wt.createVNode(Wt.unref(R).CellTrigger, { day: r5, month: a4.value, class: b.value.cellTrigger({ class: null == (t4 = v.ui) ? void 0 : t4.cellTrigger }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "day", { day: r5 }, () => [Wt.createTextVNode(Wt.toDisplayString(r5.day), 1)])]), _: 2 }, 1032, ["day", "month", "class"])];
              }), _: 2 }, 1032, ["date", "class"]);
            }), 128))]), _: 2 }, 1032, ["class"]);
          }), 128))]), _: 2 }, 1032, ["class"])];
          n4(pm.ssrRenderComponent(Wt.unref(R).GridHead, null, { default: Wt.withCtx((a5, o4, n5, i5) => {
            var s4, d4;
            if (!o4) return [Wt.createVNode(Wt.unref(R).GridRow, { class: b.value.gridWeekDaysRow({ class: null == (d4 = v.ui) ? void 0 : d4.gridWeekDaysRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r3, (r4) => {
              var a6;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).HeadCell, { key: r4, class: b.value.headCell({ class: null == (a6 = v.ui) ? void 0 : a6.headCell }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "week-day", { day: r4 }, () => [Wt.createTextVNode(Wt.toDisplayString(r4), 1)])]), _: 2 }, 1032, ["class"]);
            }), 128))]), _: 2 }, 1032, ["class"])];
            o4(pm.ssrRenderComponent(Wt.unref(R).GridRow, { class: b.value.gridWeekDaysRow({ class: null == (s4 = v.ui) ? void 0 : s4.gridWeekDaysRow }) }, { default: Wt.withCtx((a6, o5, n6, i6) => {
              if (!o5) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r3, (r4) => {
                var a7;
                return Wt.openBlock(), Wt.createBlock(Wt.unref(R).HeadCell, { key: r4, class: b.value.headCell({ class: null == (a7 = v.ui) ? void 0 : a7.headCell }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "week-day", { day: r4 }, () => [Wt.createTextVNode(Wt.toDisplayString(r4), 1)])]), _: 2 }, 1032, ["class"]);
              }), 128))];
              o5("<!--[-->"), pm.ssrRenderList(r3, (r4) => {
                var a7;
                o5(pm.ssrRenderComponent(Wt.unref(R).HeadCell, { key: r4, class: b.value.headCell({ class: null == (a7 = v.ui) ? void 0 : a7.headCell }) }, { default: Wt.withCtx((a8, o6, n7, i7) => {
                  if (!o6) return [Wt.renderSlot(e2.$slots, "week-day", { day: r4 }, () => [Wt.createTextVNode(Wt.toDisplayString(r4), 1)])];
                  pm.ssrRenderSlot(e2.$slots, "week-day", { day: r4 }, () => {
                    o6(`${pm.ssrInterpolate(r4)}`);
                  }, o6, n7, i7);
                }), _: 2 }, n6, i6));
              }), o5("<!--]-->");
            }), _: 2 }, n5, i5));
          }), _: 2 }, i4, s3)), n4(pm.ssrRenderComponent(Wt.unref(R).GridBody, { class: b.value.gridBody({ class: null == (d3 = v.ui) ? void 0 : d3.gridBody }) }, { default: Wt.withCtx((r4, o4, n5, i5) => {
            if (!o4) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(a4.rows, (r5, t2) => {
              var o5;
              return Wt.openBlock(), Wt.createBlock(Wt.unref(R).GridRow, { key: `weekDate-${t2}`, class: b.value.gridRow({ class: null == (o5 = v.ui) ? void 0 : o5.gridRow }) }, { default: Wt.withCtx(() => [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r5, (r6) => {
                var t3;
                return Wt.openBlock(), Wt.createBlock(Wt.unref(R).Cell, { key: r6.toString(), date: r6, class: b.value.cell({ class: null == (t3 = v.ui) ? void 0 : t3.cell }) }, { default: Wt.withCtx(() => {
                  var t4;
                  return [Wt.createVNode(Wt.unref(R).CellTrigger, { day: r6, month: a4.value, class: b.value.cellTrigger({ class: null == (t4 = v.ui) ? void 0 : t4.cellTrigger }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "day", { day: r6 }, () => [Wt.createTextVNode(Wt.toDisplayString(r6.day), 1)])]), _: 2 }, 1032, ["day", "month", "class"])];
                }), _: 2 }, 1032, ["date", "class"]);
              }), 128))]), _: 2 }, 1032, ["class"]);
            }), 128))];
            o4("<!--[-->"), pm.ssrRenderList(a4.rows, (r5, s4) => {
              var d4;
              o4(pm.ssrRenderComponent(Wt.unref(R).GridRow, { key: `weekDate-${s4}`, class: b.value.gridRow({ class: null == (d4 = v.ui) ? void 0 : d4.gridRow }) }, { default: Wt.withCtx((o5, n6, i6, s5) => {
                if (!n6) return [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(r5, (r6) => {
                  var t2;
                  return Wt.openBlock(), Wt.createBlock(Wt.unref(R).Cell, { key: r6.toString(), date: r6, class: b.value.cell({ class: null == (t2 = v.ui) ? void 0 : t2.cell }) }, { default: Wt.withCtx(() => {
                    var t3;
                    return [Wt.createVNode(Wt.unref(R).CellTrigger, { day: r6, month: a4.value, class: b.value.cellTrigger({ class: null == (t3 = v.ui) ? void 0 : t3.cellTrigger }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "day", { day: r6 }, () => [Wt.createTextVNode(Wt.toDisplayString(r6.day), 1)])]), _: 2 }, 1032, ["day", "month", "class"])];
                  }), _: 2 }, 1032, ["date", "class"]);
                }), 128))];
                n6("<!--[-->"), pm.ssrRenderList(r5, (r6) => {
                  var o6;
                  n6(pm.ssrRenderComponent(Wt.unref(R).Cell, { key: r6.toString(), date: r6, class: b.value.cell({ class: null == (o6 = v.ui) ? void 0 : o6.cell }) }, { default: Wt.withCtx((o7, n7, i7, s6) => {
                    var d5, u4;
                    if (!n7) return [Wt.createVNode(Wt.unref(R).CellTrigger, { day: r6, month: a4.value, class: b.value.cellTrigger({ class: null == (u4 = v.ui) ? void 0 : u4.cellTrigger }) }, { default: Wt.withCtx(() => [Wt.renderSlot(e2.$slots, "day", { day: r6 }, () => [Wt.createTextVNode(Wt.toDisplayString(r6.day), 1)])]), _: 2 }, 1032, ["day", "month", "class"])];
                    n7(pm.ssrRenderComponent(Wt.unref(R).CellTrigger, { day: r6, month: a4.value, class: b.value.cellTrigger({ class: null == (d5 = v.ui) ? void 0 : d5.cellTrigger }) }, { default: Wt.withCtx((a5, o8, n8, i8) => {
                      if (!o8) return [Wt.renderSlot(e2.$slots, "day", { day: r6 }, () => [Wt.createTextVNode(Wt.toDisplayString(r6.day), 1)])];
                      pm.ssrRenderSlot(e2.$slots, "day", { day: r6 }, () => {
                        o8(`${pm.ssrInterpolate(r6.day)}`);
                      }, o8, n8, i8);
                    }), _: 2 }, i7, s6));
                  }), _: 2 }, i6, s5));
                }), n6("<!--]-->");
              }), _: 2 }, n5, i5));
            }), o4("<!--]-->");
          }), _: 2 }, i4, s3));
        }), _: 2 }, i3, s2));
      }), n3("<!--]--></div>");
    }), _: 3 }, a2));
  };
} }, g = c.setup;
c.setup = (e2, r2) => {
  const a2 = Wt.useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue"), g ? g(e2, r2) : void 0;
};

export { c };
//# sourceMappingURL=Calendar-Ewq8HzWU.mjs.map

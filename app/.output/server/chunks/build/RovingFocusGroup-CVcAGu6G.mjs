import { v as Wt, P as _m } from './server.mjs';
import { T, C } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { l as l$1 } from './Collection-BWpNbfJs.mjs';
import { s, o, t } from './utils-B3GHb33t.mjs';
import { n } from './usePrimitiveElement-DSug4YUi.mjs';

const [l, d] = T("RovingFocusGroup"), c = Wt.defineComponent({ __name: "RovingFocusGroup", props: { orientation: { default: void 0 }, dir: {}, loop: { type: Boolean, default: false }, currentTabStopId: {}, defaultCurrentTabStopId: {}, preventScrollOnEntryFocus: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["entryFocus", "update:currentTabStopId"], setup(o2, { expose: l2, emit: c2 }) {
  const f = o2, p = c2, { loop: v, orientation: m, dir: b } = Wt.toRefs(f), I = n(b), S = C(f, "currentTabStopId", p, { defaultValue: f.defaultCurrentTabStopId, passive: void 0 === f.currentTabStopId }), T = Wt.ref(false), F = Wt.ref(false), C$1 = Wt.ref(0), { getItems: g, CollectionSlot: h } = l$1({ isProvider: true });
  function y(e2) {
    const t2 = !F.value;
    if (e2.currentTarget && e2.target === e2.currentTarget && t2 && !T.value) {
      const t3 = new CustomEvent(o, t);
      if (e2.currentTarget.dispatchEvent(t3), p("entryFocus", t3), !t3.defaultPrevented) {
        const e3 = g().map((e4) => e4.ref).filter((e4) => "" !== e4.dataset.disabled), t4 = [e3.find((e4) => "" === e4.getAttribute("data-active")), e3.find((e4) => e4.id === S.value), ...e3].filter(Boolean);
        s(t4, f.preventScrollOnEntryFocus);
      }
    }
    F.value = false;
  }
  function B() {
    setTimeout(() => {
      F.value = false;
    }, 1);
  }
  return l2({ getItems: g }), d({ loop: v, dir: I, orientation: m, currentTabStopId: S, onItemFocus: (e2) => {
    S.value = e2;
  }, onItemShiftTab: () => {
    T.value = true;
  }, onFocusableItemAdd: () => {
    C$1.value++;
  }, onFocusableItemRemove: () => {
    C$1.value--;
  } }), (o3, a2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(h), null, { default: Wt.withCtx(() => [Wt.createVNode(Wt.unref(_m), { tabindex: T.value || 0 === C$1.value ? -1 : 0, "data-orientation": Wt.unref(m), as: o3.as, "as-child": o3.asChild, dir: Wt.unref(I), style: { outline: "none" }, onMousedown: a2[0] || (a2[0] = (e2) => F.value = true), onMouseup: B, onFocus: y, onBlur: a2[1] || (a2[1] = (e2) => T.value = false) }, { default: Wt.withCtx(() => [Wt.renderSlot(o3.$slots, "default")]), _: 3 }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])]), _: 3 }));
} });

export { c, l };
//# sourceMappingURL=RovingFocusGroup-CVcAGu6G.mjs.map

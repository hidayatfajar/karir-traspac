import { v as Wt, W as Sm, P as _m } from './server.mjs';
import { o } from './ConfigProvider-BxfkmoHO.mjs';
import { E, O as O$1, S, N, k } from './useForwardPropsEmits-WwvTsoLV.mjs';

function s(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    const o2 = t2[n2];
    if ("string" != typeof o2 && !Array.isArray(o2)) {
      for (const t3 in o2) if ("default" !== t3 && !(t3 in e2)) {
        const n3 = Object.getOwnPropertyDescriptor(o2, t3);
        n3 && Object.defineProperty(e2, t3, n3.get ? n3 : { enumerable: true, get: () => o2[t3] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }));
}
const d = s({ __proto__: null }, [Wt]);
let v = 0;
function c(t2, n2 = "reka") {
  var a2, l2;
  const u2 = o({ useId: void 0 });
  return Object.hasOwn(d, "useId") ? `${n2}-${null == (l2 = (a2 = Wt).useId) ? void 0 : l2.call(a2)}` : u2.useId ? `${n2}-${u2.useId()}` : `${n2}-${++v}`;
}
function p(t2, n2) {
  const o2 = Wt.ref(t2);
  return { state: o2, dispatch: (e2) => {
    o2.value = function(e3) {
      var _a;
      return (_a = n2[o2.value][e3]) != null ? _a : o2.value;
    }(e2);
  } };
}
function m(e2) {
  return e2 && getComputedStyle(e2).animationName || "none";
}
const f = Wt.defineComponent({ name: "Presence", props: { present: { type: Boolean, required: true }, forceMount: { type: Boolean } }, slots: {}, setup(n2, { slots: o2, expose: u2 }) {
  var r2;
  const { present: i2, forceMount: s2 } = Wt.toRefs(n2), d2 = Wt.ref(), { isPresent: v2 } = function(t2, n3) {
    var _a;
    var o3;
    const l2 = Wt.ref({}), u3 = Wt.ref("none"), r3 = Wt.ref(t2), i3 = t2.value ? "mounted" : "unmounted";
    let s3;
    const d3 = (_a = null == (o3 = n3.value) ? void 0 : o3.ownerDocument.defaultView) != null ? _a : E, { state: v3, dispatch: c3 } = p(i3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    Wt.watch(t2, async (t3, o4) => {
      var a2;
      const r4 = o4 !== t3;
      if (await Wt.nextTick(), r4) {
        const e2 = u3.value, r5 = m(n3.value);
        t3 ? c3("MOUNT") : "none" === r5 || "undefined" === r5 || "none" === (null == (a2 = l2.value) ? void 0 : a2.display) ? c3("UNMOUNT") : c3(o4 && e2 !== r5 ? "ANIMATION_OUT" : "UNMOUNT");
      }
    }, { immediate: true });
    const f3 = (e2) => {
      const t3 = m(n3.value), o4 = t3.includes(e2.animationName);
      if (v3.value, e2.target === n3.value && o4 && (c3("ANIMATION_END"), !r3.value)) {
        const e3 = n3.value.style.animationFillMode;
        n3.value.style.animationFillMode = "forwards", s3 = null == d3 ? void 0 : d3.setTimeout(() => {
          var t4;
          "forwards" === (null == (t4 = n3.value) ? void 0 : t4.style.animationFillMode) && (n3.value.style.animationFillMode = e3);
        });
      }
      e2.target === n3.value && "none" === t3 && c3("ANIMATION_END");
    }, y2 = (e2) => {
      e2.target === n3.value && (u3.value = m(n3.value));
    };
    return Wt.watch(n3, (e2, t3) => {
      e2 ? (l2.value = getComputedStyle(e2), e2.addEventListener("animationstart", y2), e2.addEventListener("animationcancel", f3), e2.addEventListener("animationend", f3)) : (c3("ANIMATION_END"), void 0 !== s3 && (null == d3 || d3.clearTimeout(s3)), null == t3 || t3.removeEventListener("animationstart", y2), null == t3 || t3.removeEventListener("animationcancel", f3), null == t3 || t3.removeEventListener("animationend", f3));
    }, { immediate: true }), Wt.watch(v3, () => {
      const e2 = m(n3.value);
      u3.value = "mounted" === v3.value ? e2 : "none";
    }), { isPresent: Wt.computed(() => ["mounted", "unmountSuspended"].includes(v3.value)) };
  }(i2, d2);
  u2({ present: v2 });
  let c2 = o2.default({ present: v2.value });
  c2 = Sm(c2 || []);
  const f2 = Wt.getCurrentInstance();
  if (c2 && (null == c2 ? void 0 : c2.length) > 1) {
    const e2 = (null == (r2 = null == f2 ? void 0 : f2.parent) ? void 0 : r2.type.name) ? `<${f2.parent.type.name} />` : "component";
    throw new Error([`Detected an invalid children for \`${e2}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((e3) => `  - ${e3}`).join("\n")].join("\n"));
  }
  return () => s2.value || i2.value || v2.value ? Wt.h(o2.default({ present: v2.value })[0], { ref: (e2) => {
    const t2 = O$1(e2);
    return void 0 === (null == t2 ? void 0 : t2.hasAttribute) || ((null == t2 ? void 0 : t2.hasAttribute("data-reka-popper-content-wrapper")) ? d2.value = t2.firstElementChild : d2.value = t2), t2;
  } }) : null;
} });
const y = Wt.reactive({ layersRoot: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), b = Wt.defineComponent({ __name: "DismissableLayer", props: { disableOutsidePointerEvents: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"], setup(t2, { emit: o2 }) {
  const a2 = t2, l2 = o2, { forwardRef: i2, currentElement: s2 } = N(), d2 = Wt.computed(() => {
    var _a;
    var e2;
    return (_a = null == (e2 = s2.value) ? void 0 : e2.ownerDocument) != null ? _a : globalThis.document;
  }), v2 = Wt.computed(() => y.layersRoot), c2 = Wt.computed(() => s2.value ? Array.from(v2.value).indexOf(s2.value) : -1), p2 = Wt.computed(() => y.layersWithOutsidePointerEventsDisabled.size > 0), m2 = Wt.computed(() => {
    const e2 = Array.from(v2.value), [t3] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), n2 = e2.indexOf(t3);
    return c2.value >= n2;
  }), f2 = function(t3, n2, o3 = true) {
    var _a;
    var a3;
    (_a = null == (a3 = null == n2 ? void 0 : n2.value) ? void 0 : a3.ownerDocument) != null ? _a : null == globalThis || globalThis.document;
    const l3 = Wt.ref(false);
    return Wt.ref(() => {
    }), Wt.watchEffect((e2) => {
    }), { onPointerDownCapture: () => {
      Wt.toValue(o3) && (l3.value = true);
    } };
  }(0, s2), b2 = function(t3, n2, o3 = true) {
    var _a;
    var a3;
    (_a = null == (a3 = null == n2 ? void 0 : n2.value) ? void 0 : a3.ownerDocument) != null ? _a : null == globalThis || globalThis.document;
    const l3 = Wt.ref(false);
    return Wt.watchEffect((e2) => {
    }), { onFocusCapture: () => {
      Wt.toValue(o3) && (l3.value = true);
    }, onBlurCapture: () => {
      Wt.toValue(o3) && (l3.value = false);
    } };
  }(0, s2);
  let h2;
  return k("Escape", (e2) => {
    c2.value === v2.value.size - 1 && (l2("escapeKeyDown", e2), e2.defaultPrevented || l2("dismiss"));
  }), Wt.watchEffect((e2) => {
    s2.value && (a2.disableOutsidePointerEvents && (0 === y.layersWithOutsidePointerEventsDisabled.size && (h2 = d2.value.body.style.pointerEvents, d2.value.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(s2.value)), v2.value.add(s2.value), e2(() => {
      a2.disableOutsidePointerEvents && 1 === y.layersWithOutsidePointerEventsDisabled.size && (d2.value.body.style.pointerEvents = h2);
    }));
  }), Wt.watchEffect((e2) => {
    e2(() => {
      s2.value && (v2.value.delete(s2.value), y.layersWithOutsidePointerEventsDisabled.delete(s2.value));
    });
  }), (t3, o3) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref: Wt.unref(i2), "as-child": t3.asChild, as: t3.as, "data-dismissable-layer": "", style: Wt.normalizeStyle({ pointerEvents: p2.value ? m2.value ? "auto" : "none" : void 0 }), onFocusCapture: Wt.unref(b2).onFocusCapture, onBlurCapture: Wt.unref(b2).onBlurCapture, onPointerdownCapture: Wt.unref(f2).onPointerDownCapture }, { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
} }), h = Wt.defineComponent({ __name: "Teleport", props: { to: { default: "body" }, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const n2 = S();
  return (t3, o2) => Wt.unref(n2) || t3.forceMount ? (Wt.openBlock(), Wt.createBlock(Wt.Teleport, { key: 0, to: t3.to, disabled: t3.disabled, defer: t3.defer }, [Wt.renderSlot(t3.$slots, "default")], 8, ["to", "disabled", "defer"])) : Wt.createCommentVNode("", true);
} }), w = Symbol("nuxt-ui.portal-target");
function O(t2) {
  const n2 = Wt.inject(w, void 0), o2 = Wt.computed(() => {
    var _a;
    return "boolean" == typeof t2.value || void 0 === t2.value ? (_a = null == n2 ? void 0 : n2.value) != null ? _a : "body" : t2.value;
  }), a2 = Wt.computed(() => "boolean" == typeof t2.value && !t2.value);
  return Wt.provide(w, Wt.computed(() => o2.value)), Wt.computed(() => ({ to: o2.value, disabled: a2.value }));
}

export { O, b, c, f, h };
//# sourceMappingURL=usePortal-DtLtCtVs.mjs.map

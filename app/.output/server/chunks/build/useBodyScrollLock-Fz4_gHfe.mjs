import { v as Wt, P as _m } from './server.mjs';
import { N as N$1, u, l as l$2, w, O } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { l as l$1 } from './getActiveElement-CxMYnBFR.mjs';
import { o } from './ConfigProvider-BxfkmoHO.mjs';

const c = u(() => Wt.ref([]));
function l(e2, t2) {
  const n2 = [...e2], r2 = n2.indexOf(t2);
  return -1 !== r2 && n2.splice(r2, 1), n2;
}
const f = "focusScope.autoFocusOnMount", d = "focusScope.autoFocusOnUnmount", p = { bubbles: false, cancelable: true };
function v(e2) {
  const t2 = [], n2 = (void 0).createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
    const t3 = "INPUT" === e3.tagName && "hidden" === e3.type;
    return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function m(e2, t2) {
  for (const n2 of e2) if (!h(n2, { upTo: t2 })) return n2;
}
function h(e2, { upTo: t2 }) {
  if ("hidden" === getComputedStyle(e2).visibility) return true;
  for (; e2; ) {
    if (void 0 !== t2 && e2 === t2) return false;
    if ("none" === getComputedStyle(e2).display) return true;
    e2 = e2.parentElement;
  }
  return false;
}
function y(e2, { select: t2 = false } = {}) {
  if (e2 && e2.focus) {
    const n2 = l$1();
    e2.focus({ preventScroll: true }), e2 !== n2 && function(e3) {
      return e3 instanceof HTMLInputElement && "select" in e3;
    }(e2) && t2 && e2.select();
  }
}
const E = Wt.defineComponent({ __name: "FocusScope", props: { loop: { type: Boolean, default: false }, trapped: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["mountAutoFocus", "unmountAutoFocus"], setup(n2, { emit: o2 }) {
  const a2 = n2, u2 = o2, { currentRef: i2, currentElement: h2 } = N$1();
  Wt.ref(null);
  const E2 = function() {
    const e2 = c();
    return { add(t2) {
      const n3 = e2.value[0];
      t2 !== n3 && (null == n3 || n3.pause()), e2.value = l(e2.value, t2), e2.value.unshift(t2);
    }, remove(t2) {
      var n3;
      e2.value = l(e2.value, t2), null == (n3 = e2.value[0]) || n3.resume();
    } };
  }(), A2 = Wt.reactive({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } });
  function g2(e2) {
    if (!a2.loop && !a2.trapped) return;
    if (A2.paused) return;
    const t2 = "Tab" === e2.key && !e2.altKey && !e2.ctrlKey && !e2.metaKey, n3 = l$1();
    if (t2 && n3) {
      const t3 = e2.currentTarget, [r2, o3] = function(e3) {
        const t4 = v(e3);
        return [m(t4, e3), m(t4.reverse(), e3)];
      }(t3);
      r2 && o3 ? e2.shiftKey || n3 !== o3 ? e2.shiftKey && n3 === r2 && (e2.preventDefault(), a2.loop && y(o3, { select: true })) : (e2.preventDefault(), a2.loop && y(r2, { select: true })) : n3 === t3 && e2.preventDefault();
    }
  }
  return Wt.watchEffect((e2) => {
  }), Wt.watchEffect(async (t2) => {
    const n3 = h2.value;
    if (await Wt.nextTick(), !n3) return;
    E2.add(A2);
    const r2 = l$1();
    if (!n3.contains(r2)) {
      const e2 = new CustomEvent(f, p);
      n3.addEventListener(f, (e3) => u2("mountAutoFocus", e3)), n3.dispatchEvent(e2), e2.defaultPrevented || (!function(e3, { select: t3 = false } = {}) {
        const n4 = l$1();
        for (const r3 of e3) if (y(r3, { select: t3 }), l$1() !== n4) return true;
      }((o3 = v(n3), o3.filter((e3) => "A" !== e3.tagName)), { select: true }), l$1() === r2 && y(n3));
    }
    var o3;
    t2(() => {
      n3.removeEventListener(f, (e3) => u2("mountAutoFocus", e3));
      const e2 = new CustomEvent(d, p), t3 = (e3) => {
        u2("unmountAutoFocus", e3);
      };
      n3.addEventListener(d, t3), n3.dispatchEvent(e2), setTimeout(() => {
        e2.defaultPrevented || y(r2 != null ? r2 : (void 0).body, { select: true }), n3.removeEventListener(d, t3), E2.remove(A2);
      }, 0);
    });
  }), (n3, r2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(_m), { ref_key: "currentRef", ref: i2, tabindex: "-1", "as-child": n3.asChild, as: n3.as, onKeydown: g2 }, { default: Wt.withCtx(() => [Wt.renderSlot(n3.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} });
function T(t2) {
  let n2;
  Wt.watch(() => O(t2), (e2) => {
    e2 ? n2 = function(e3, t3, n3) {
      Array.from(Array.isArray(e3) ? e3 : [e3]);
      return function() {
        return null;
      };
    }(e2) : n2 && n2();
  });
}
const k = l$2(() => {
  const t2 = Wt.ref(/* @__PURE__ */ new Map());
  Wt.ref();
  const n2 = Wt.computed(() => {
    for (const e2 of t2.value.values()) if (e2) return true;
    return false;
  });
  return o({ scrollBody: Wt.ref(true) }), Wt.watch(n2, (e2, t3) => {
  }, { immediate: true, flush: "sync" }), t2;
});
function N(t2) {
  const n2 = Math.random().toString(36).substring(2, 7), r2 = k();
  r2.value.set(n2, t2 != null ? t2 : false);
  const o2 = Wt.computed({ get: () => {
    var _a;
    return (_a = r2.value.get(n2)) != null ? _a : false;
  }, set: (e2) => r2.value.set(n2, e2) });
  return w(), o2;
}

export { E, N, T };
//# sourceMappingURL=useBodyScrollLock-Fz4_gHfe.mjs.map

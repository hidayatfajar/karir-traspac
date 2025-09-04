import { a as Sm, v as Wt } from './server.mjs';

function n(t2, n2) {
  const o2 = Wt.shallowRef();
  return Wt.watchEffect(() => {
    o2.value = t2();
  }, { ...n2, flush: "sync" }), Wt.readonly(o2);
}
function o(t2) {
  return !!Wt.getCurrentScope() && (Wt.onScopeDispose(t2), true);
}
function r() {
  const e2 = /* @__PURE__ */ new Set(), t2 = (t3) => {
    e2.delete(t3);
  };
  return { on: (n2) => {
    e2.add(n2);
    const r2 = () => t2(n2);
    return o(r2), { off: r2 };
  }, off: t2, trigger: (...t3) => Promise.all(Array.from(e2).map((e3) => e3(...t3))), clear: () => {
    e2.clear();
  } };
}
function u(t2) {
  let n2, o2 = false;
  const r2 = Wt.effectScope(true);
  return (...e2) => (o2 || (n2 = r2.run(() => t2(...e2)), o2 = true), n2);
}
function l(t2) {
  let n2, r2, u2 = 0;
  const l2 = () => {
    u2 -= 1, r2 && u2 <= 0 && (r2.stop(), n2 = void 0, r2 = void 0);
  };
  return (...i2) => (u2 += 1, r2 || (r2 = Wt.effectScope(true), n2 = r2.run(() => t2(...i2))), o(l2), n2);
}
function i(t2) {
  return function(t3) {
    if (!Wt.isRef(t3)) return Wt.reactive(t3);
    const n2 = new Proxy({}, { get: (n3, o2, r2) => Wt.unref(Reflect.get(t3.value, o2, r2)), set: (n3, o2, r2) => (Wt.isRef(t3.value[o2]) && !Wt.isRef(r2) ? t3.value[o2].value = r2 : t3.value[o2] = r2, true), deleteProperty: (e2, n3) => Reflect.deleteProperty(t3.value, n3), has: (e2, n3) => Reflect.has(t3.value, n3), ownKeys: () => Object.keys(t3.value), getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }) });
    return Wt.reactive(n2);
  }(Wt.computed(t2));
}
function a(t2, ...n2) {
  const o2 = n2.flat(), r2 = o2[0];
  return i(() => "function" == typeof r2 ? Object.fromEntries(Object.entries(Wt.toRefs(t2)).filter(([t3, n3]) => !r2(Wt.toValue(n3), t3))) : Object.fromEntries(Object.entries(Wt.toRefs(t2)).filter((e2) => !o2.includes(e2[0]))));
}
"undefined" != typeof WorkerGlobalScope && (WorkerGlobalScope);
const s = (e2) => null != e2, c = Object.prototype.toString, f = () => {
};
const d = (e2) => e2();
function v(t2 = d, n2 = {}) {
  const { initialState: o2 = "active" } = n2, r2 = function(...t3) {
    if (1 !== t3.length) return Wt.toRef(...t3);
    const n3 = t3[0];
    return "function" == typeof n3 ? Wt.readonly(Wt.customRef(() => ({ get: n3, set: f }))) : Wt.ref(n3);
  }("active" === o2);
  return { isActive: Wt.readonly(r2), pause: function() {
    r2.value = false;
  }, resume: function() {
    r2.value = true;
  }, eventFilter: (...e2) => {
    r2.value && t2(...e2);
  } };
}
function p(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function m(t2, n2 = 1e4) {
  return Wt.customRef((r2, u2) => {
    let l2, i2 = Wt.toValue(t2);
    return o(() => {
      clearTimeout(l2);
    }), { get: () => (r2(), i2), set(o2) {
      i2 = o2, u2(), clearTimeout(l2), l2 = setTimeout(() => {
        i2 = Wt.toValue(t2), u2();
      }, Wt.toValue(n2));
    } };
  });
}
function h(t2, n2, o2 = {}) {
  const { eventFilter: r2 = d, ...u2 } = o2;
  return Wt.watch(t2, (l2 = r2, i2 = n2, function(...e2) {
    return new Promise((t3, n3) => {
      Promise.resolve(l2(() => i2.apply(this, e2), { fn: i2, thisArg: this, args: e2 })).then(t3).catch(n3);
    });
  }), u2);
  var l2, i2;
}
function g(e2, t2, n2 = {}) {
  const { eventFilter: o2, initialState: r2 = "active", ...u2 } = n2, { eventFilter: l2, pause: i2, resume: a2, isActive: s2 } = v(o2, { initialState: r2 });
  return { stop: h(e2, t2, { ...u2, eventFilter: l2 }), pause: i2, resume: a2, isActive: s2 };
}
function y(e2, t2, ...[n2]) {
  const { flush: o2 = "sync", deep: r2 = false, immediate: u2 = true, direction: l2 = "both", transform: i2 = {} } = n2 || {}, a2 = [], s2 = "ltr" in i2 && i2.ltr || ((e3) => e3), c2 = "rtl" in i2 && i2.rtl || ((e3) => e3);
  "both" !== l2 && "ltr" !== l2 || a2.push(g(e2, (e3) => {
    a2.forEach((e4) => e4.pause()), t2.value = s2(e3), a2.forEach((e4) => e4.resume());
  }, { flush: o2, deep: r2, immediate: u2 })), "both" !== l2 && "rtl" !== l2 || a2.push(g(t2, (t3) => {
    a2.forEach((e3) => e3.pause()), e2.value = c2(t3), a2.forEach((e3) => e3.resume());
  }, { flush: o2, deep: r2, immediate: u2 }));
  return () => {
    a2.forEach((e3) => e3.stop());
  };
}
const b = Wt.toValue;
function w(t2, n2) {
  Wt.getCurrentInstance();
}
function R(t2, n2, r2 = {}) {
  const { immediate: u2 = true, immediateCallback: l2 = false } = r2, i2 = Wt.shallowRef(false);
  let a2 = null;
  function s2() {
    a2 && (clearTimeout(a2), a2 = null);
  }
  function c2() {
    i2.value = false, s2();
  }
  return u2 && (i2.value = true), o(c2), { isPending: Wt.readonly(i2), start: function(...o2) {
    l2 && t2(), s2(), i2.value = true, a2 = setTimeout(() => {
      i2.value = false, a2 = null, t2(...o2);
    }, Wt.toValue(n2));
  }, stop: c2 };
}
const E = void 0;
function O(t2) {
  var n2;
  const o2 = Wt.toValue(t2);
  return null != (n2 = null == o2 ? void 0 : o2.$el) ? n2 : o2;
}
function j(...t2) {
  const n2 = [], r2 = () => {
    n2.forEach((e2) => e2()), n2.length = 0;
  }, u2 = Wt.computed(() => {
    const n3 = p(Wt.toValue(t2[0])).filter((e2) => null != e2);
    return n3.every((e2) => "string" != typeof e2) ? n3 : void 0;
  }), l2 = (i2 = () => {
    var n3, o2;
    return [null != (o2 = null == (n3 = u2.value) ? void 0 : n3.map((e2) => O(e2))) ? o2 : [E].filter((e2) => null != e2), p(Wt.toValue(u2.value ? t2[1] : t2[0])), p(Wt.unref(u2.value ? t2[2] : t2[1])), Wt.toValue(u2.value ? t2[3] : t2[2])];
  }, a2 = ([e2, t3, o2, u3]) => {
    if (r2(), !(null == e2 ? void 0 : e2.length) || !(null == t3 ? void 0 : t3.length) || !(null == o2 ? void 0 : o2.length)) return;
    const l3 = (i3 = u3, "[object Object]" === c.call(i3) ? { ...u3 } : u3);
    var i3;
    n2.push(...e2.flatMap((e3) => t3.flatMap((t4) => o2.map((n3) => ((e4, t5, n4, o3) => (e4.addEventListener(t5, n4, o3), () => e4.removeEventListener(t5, n4, o3)))(e3, t4, n3, l3)))));
  }, s2 = { flush: "post" }, Wt.watch(i2, a2, { ...s2, immediate: true }));
  var i2, a2, s2;
  return o(r2), () => {
    l2(), r2();
  };
}
function S() {
  const t2 = Wt.shallowRef(false);
  return Wt.getCurrentInstance(), t2;
}
function V(t2) {
  const n2 = S();
  return Wt.computed(() => (n2.value, Boolean(t2())));
}
function $(t2, n2, r2 = {}) {
  const { window: u2 = E, document: l2 = null == u2 ? void 0 : u2.document, flush: i2 = "sync" } = r2;
  if (!u2 || !l2) return f;
  let a2;
  const c2 = (e2) => {
    null == a2 || a2(), a2 = e2;
  }, d2 = Wt.watchEffect(() => {
    const r3 = O(t2);
    if (r3) {
      const { stop: t3 } = function(t4, n3, r4 = {}) {
        const { window: u3 = E, ...l3 } = r4;
        let i3;
        const a3 = V(() => u3 && "MutationObserver" in u3), c3 = () => {
          i3 && (i3.disconnect(), i3 = void 0);
        }, f2 = Wt.computed(() => {
          const n4 = p(Wt.toValue(t4)).map(O).filter(s);
          return new Set(n4);
        }), d3 = Wt.watch(() => f2.value, (e2) => {
          c3(), a3.value && e2.size && (i3 = new MutationObserver(n3), e2.forEach((e3) => i3.observe(e3, l3)));
        }, { immediate: true, flush: "post" }), v3 = () => {
          d3(), c3();
        };
        return o(v3), { isSupported: a3, stop: v3, takeRecords: () => null == i3 ? void 0 : i3.takeRecords() };
      }(l2, (e2) => {
        e2.map((e3) => [...e3.removedNodes]).flat().some((e3) => e3 === r3 || e3.contains(r3)) && n2(e2);
      }, { window: u2, childList: true, subtree: true });
      c2(t3);
    }
  }, { flush: i2 }), v2 = () => {
    d2(), c2();
  };
  return o(v2), v2;
}
function k(...t2) {
  let n2, o2, r2 = {};
  3 === t2.length ? (n2 = t2[0], o2 = t2[1], r2 = t2[2]) : 2 === t2.length ? "object" == typeof t2[1] ? (n2 = true, o2 = t2[0], r2 = t2[1]) : (n2 = t2[0], o2 = t2[1]) : (n2 = true, o2 = t2[0]);
  const { target: u2 = E, eventName: l2 = "keydown", passive: i2 = false, dedupe: a2 = false } = r2, s2 = "function" == typeof (c2 = n2) ? c2 : "string" == typeof c2 ? (e2) => e2.key === c2 : Array.isArray(c2) ? (e2) => c2.includes(e2.key) : () => true;
  var c2;
  return j(u2, l2, (t3) => {
    t3.repeat && Wt.toValue(a2) || s2(t3) && o2(t3);
  }, i2);
}
function A(t2 = {}) {
  var n2;
  const { window: o2 = E, deep: r2 = true, triggerOnRemoval: u2 = false } = t2, l2 = null != (n2 = t2.document) ? n2 : null == o2 ? void 0 : o2.document, i2 = Wt.shallowRef(), a2 = () => {
    i2.value = (() => {
      var e2;
      let t3 = null == l2 ? void 0 : l2.activeElement;
      if (r2) for (; null == t3 ? void 0 : t3.shadowRoot; ) t3 = null == (e2 = null == t3 ? void 0 : t3.shadowRoot) ? void 0 : e2.activeElement;
      return t3;
    })();
  };
  if (o2) {
    const e2 = { capture: true, passive: true };
    j(o2, "blur", (e3) => {
      null === e3.relatedTarget && a2();
    }, e2), j(o2, "focus", a2, e2);
  }
  return u2 && $(i2, a2, { document: l2 }), a2(), i2;
}
function P(t2, n2, r2 = {}) {
  const { window: u2 = E, ...l2 } = r2;
  let i2;
  const a2 = V(() => u2 && "ResizeObserver" in u2), s2 = () => {
    i2 && (i2.disconnect(), i2 = void 0);
  }, c2 = Wt.computed(() => {
    const n3 = Wt.toValue(t2);
    return Array.isArray(n3) ? n3.map((e2) => O(e2)) : [O(n3)];
  }), f2 = Wt.watch(c2, (e2) => {
    if (s2(), a2.value && u2) {
      i2 = new ResizeObserver(n2);
      for (const t3 of e2) t3 && i2.observe(t3, l2);
    }
  }, { immediate: true, flush: "post" }), d2 = () => {
    s2(), f2();
  };
  return o(d2), { isSupported: a2, stop: d2 };
}
function x(t2, n2 = {}) {
  const { window: o2 = E } = n2, r2 = Wt.computed(() => O(t2)), u2 = Wt.shallowRef(false), l2 = Wt.computed(() => u2.value), i2 = A(n2);
  if (!o2 || !i2.value) return { focused: l2 };
  const a2 = { passive: true };
  return j(r2, "focusin", () => u2.value = true, a2), j(r2, "focusout", () => {
    var e2, t3, n3;
    return u2.value = null != (n3 = null == (t3 = null == (e2 = r2.value) ? void 0 : e2.matches) ? void 0 : t3.call(e2, ":focus-within")) && n3;
  }, a2), { focused: l2 };
}
function C(t2, n2, o2, r2 = {}) {
  var u2, l2, i2;
  const { clone: a2 = false, passive: s2 = false, eventName: c2, deep: f2 = false, defaultValue: d2, shouldEmit: v2 } = r2, p2 = Wt.getCurrentInstance(), m2 = o2 || (null == p2 ? void 0 : p2.emit) || (null == (u2 = null == p2 ? void 0 : p2.$emit) ? void 0 : u2.bind(p2)) || (null == (i2 = null == (l2 = null == p2 ? void 0 : p2.proxy) ? void 0 : l2.$emit) ? void 0 : i2.bind(null == p2 ? void 0 : p2.proxy));
  let h2 = c2;
  n2 || (n2 = "modelValue"), h2 = h2 || `update:${n2.toString()}`;
  const g2 = (e2) => {
    return a2 ? "function" == typeof a2 ? a2(e2) : (t3 = e2, JSON.parse(JSON.stringify(t3))) : e2;
    var t3;
  }, y2 = () => void 0 !== t2[n2] ? g2(t2[n2]) : d2, b2 = (e2) => {
    v2 ? v2(e2) && m2(h2, e2) : m2(h2, e2);
  };
  if (s2) {
    const o3 = y2(), r3 = Wt.ref(o3);
    let u3 = false;
    return Wt.watch(() => t2[n2], (t3) => {
      u3 || (u3 = true, r3.value = g2(t3), Wt.nextTick(() => u3 = false));
    }), Wt.watch(r3, (e2) => {
      u3 || e2 === t2[n2] && !f2 || b2(e2);
    }, { deep: f2 }), r3;
  }
  return Wt.computed({ get: () => y2(), set(e2) {
    b2(e2);
  } });
}
function T(t2, n2) {
  const o2 = Symbol("string" != typeof t2 || n2 ? n2 : `${t2}Context`);
  return [(n3) => {
    const r2 = Wt.inject(o2, n3);
    if (r2) return r2;
    if (null === r2) return r2;
    throw new Error(`Injection \`${o2.toString()}\` not found. Component must be used within ${Array.isArray(t2) ? `one of the following components: ${t2.join(", ")}` : `\`${t2}\``}`);
  }, (t3) => (Wt.provide(o2, t3), t3)];
}
function N() {
  const t2 = Wt.getCurrentInstance(), n2 = Wt.ref(), o2 = Wt.computed(() => {
    var e2, t3;
    return ["#text", "#comment"].includes(null == (e2 = n2.value) ? void 0 : e2.$el.nodeName) ? null == (t3 = n2.value) ? void 0 : t3.$el.nextElementSibling : O(n2);
  }), r2 = Object.assign({}, t2.exposed), u2 = {};
  for (const e2 in t2.props) Object.defineProperty(u2, e2, { enumerable: true, configurable: true, get: () => t2.props[e2] });
  if (Object.keys(r2).length > 0) for (const e2 in r2) Object.defineProperty(u2, e2, { enumerable: true, configurable: true, get: () => r2[e2] });
  return Object.defineProperty(u2, "$el", { enumerable: true, configurable: true, get: () => t2.vnode.el }), t2.exposed = u2, { forwardRef: function(e2) {
    n2.value = e2, e2 && (Object.defineProperty(u2, "$el", { enumerable: true, configurable: true, get: () => e2 instanceof Element ? e2 : e2.$el }), t2.exposed = u2);
  }, currentRef: n2, currentElement: o2 };
}
function I(t2) {
  const n2 = Wt.getCurrentInstance(), o2 = null == n2 ? void 0 : n2.type.emits, r2 = {};
  return (null == o2 ? void 0 : o2.length) || console.warn(`No emitted event found. Please check component: ${null == n2 ? void 0 : n2.type.__name}`), null == o2 || o2.forEach((n3) => {
    r2[Wt.toHandlerKey(Wt.camelize(n3))] = (...e2) => t2(n3, ...e2);
  }), r2;
}
function F(n2, o2) {
  const r2 = Sm(n2), u2 = o2 ? I(o2) : {};
  return Wt.computed(() => ({ ...r2.value, ...u2 }));
}

export { C, E, F, I, N, O, P, R, S, T, a, b, j, k, l, m, n, r, u, w, x, y };
//# sourceMappingURL=useForwardPropsEmits-DnSfSOTI.mjs.map

import { v as Wt, Q as Im, R as Hm, K as km, L as zm, M as Lm, J as Km, S as jm, N as Jm, O as Dm } from './server.mjs';

function c(t2, l2, n2) {
  let o2;
  o2 = Wt.isRef(n2) ? { evaluating: n2 } : {};
  const { lazy: a2 = false, flush: s2 = "pre", evaluating: u2, shallow: r2 = true, onError: c2 = jm } = o2, v2 = Wt.shallowRef(!a2), f2 = r2 ? Wt.shallowRef(l2) : Wt.ref(l2);
  let h2 = 0;
  return Wt.watchEffect(async (e2) => {
    if (!v2.value) return;
    h2++;
    const l3 = h2;
    let n3 = false;
    u2 && Promise.resolve().then(() => {
      u2.value = true;
    });
    try {
      const o3 = await t2((t3) => {
        e2(() => {
          u2 && (u2.value = false), n3 || t3();
        });
      });
      l3 === h2 && (f2.value = o3);
    } catch (o3) {
      c2(o3);
    } finally {
      u2 && l3 === h2 && (u2.value = false), n3 = true;
    }
  }, { flush: s2 }), a2 ? Wt.computed(() => (v2.value = true, f2.value)) : f2;
}
function v(t2 = {}) {
  const { inheritAttrs: l2 = true } = t2, n2 = Wt.shallowRef(), o2 = Wt.defineComponent({ setup: (e2, { slots: t3 }) => () => {
    n2.value = t3.default;
  } }), a2 = Wt.defineComponent({ inheritAttrs: l2, props: t2.props, setup: (e2, { attrs: o3, slots: a3 }) => () => {
    var s2;
    if (!n2.value && false) ;
    const u2 = null == (s2 = n2.value) ? void 0 : s2.call(n2, { ...null == t2.props ? f(o3) : e2, $slots: a3 });
    return l2 && 1 === (null == u2 ? void 0 : u2.length) ? u2[0] : u2;
  } });
  return Im({ define: o2, reuse: a2 }, [o2, a2]);
}
function f(e2) {
  const t2 = {};
  for (const l2 in e2) t2[Hm(l2)] = e2[l2];
  return t2;
}
const h = void 0;
function d(t2) {
  var l2;
  const n2 = Wt.toValue(t2);
  return null != (l2 = null == n2 ? void 0 : n2.$el) ? l2 : n2;
}
function p(...t2) {
  const o2 = [], u2 = () => {
    o2.forEach((e2) => e2()), o2.length = 0;
  }, r2 = Wt.computed(() => {
    const l2 = zm(Wt.toValue(t2[0])).filter((e2) => null != e2);
    return l2.every((e2) => "string" != typeof e2) ? l2 : void 0;
  }), i2 = Jm(() => {
    var l2, o3;
    return [null != (o3 = null == (l2 = r2.value) ? void 0 : l2.map((e2) => d(e2))) ? o3 : [h].filter((e2) => null != e2), zm(Wt.toValue(r2.value ? t2[1] : t2[0])), zm(Wt.unref(r2.value ? t2[2] : t2[1])), Wt.toValue(r2.value ? t2[3] : t2[2])];
  }, ([e2, t3, l2, n2]) => {
    if (u2(), !(null == e2 ? void 0 : e2.length) || !(null == t3 ? void 0 : t3.length) || !(null == l2 ? void 0 : l2.length)) return;
    const a2 = Dm(n2) ? { ...n2 } : n2;
    o2.push(...e2.flatMap((e3) => t3.flatMap((t4) => l2.map((l3) => ((e4, t5, l4, n3) => (e4.addEventListener(t5, l4, n3), () => e4.removeEventListener(t5, l4, n3)))(e3, t4, l3, a2)))));
  }, { flush: "post" });
  return km(u2), () => {
    i2(), u2();
  };
}
function w(t2) {
  const l2 = function() {
    const t3 = Wt.shallowRef(false);
    return Wt.getCurrentInstance(), t3;
  }();
  return Wt.computed(() => (l2.value, Boolean(t2())));
}
function m(a2, s2 = {}) {
  const { reset: u2 = true, windowResize: r2 = true, windowScroll: i2 = true, immediate: c2 = true, updateTiming: v2 = "sync" } = s2, f2 = Wt.shallowRef(0), m2 = Wt.shallowRef(0), R = Wt.shallowRef(0), g = Wt.shallowRef(0), y = Wt.shallowRef(0), b = Wt.shallowRef(0), E = Wt.shallowRef(0), V = Wt.shallowRef(0);
  function z() {
    const e2 = d(a2);
    if (!e2) return void (u2 && (f2.value = 0, m2.value = 0, R.value = 0, g.value = 0, y.value = 0, b.value = 0, E.value = 0, V.value = 0));
    const t2 = e2.getBoundingClientRect();
    f2.value = t2.height, m2.value = t2.bottom, R.value = t2.left, g.value = t2.right, y.value = t2.top, b.value = t2.width, E.value = t2.x, V.value = t2.y;
  }
  function O() {
    "sync" === v2 ? z() : "next-frame" === v2 && requestAnimationFrame(() => z());
  }
  return function(t2, n2, o2 = {}) {
    const { window: a3 = h, ...s3 } = o2;
    let u3;
    const r3 = w(() => a3 && "ResizeObserver" in a3), i3 = () => {
      u3 && (u3.disconnect(), u3 = void 0);
    }, c3 = Wt.computed(() => {
      const l2 = Wt.toValue(t2);
      return Array.isArray(l2) ? l2.map((e2) => d(e2)) : [d(l2)];
    }), v3 = Wt.watch(c3, (e2) => {
      if (i3(), r3.value && a3) {
        u3 = new ResizeObserver(n2);
        for (const t3 of e2) t3 && u3.observe(t3, s3);
      }
    }, { immediate: true, flush: "post" }), f3 = () => {
      i3(), v3();
    };
    km(f3);
  }(a2, O), Wt.watch(() => d(a2), (e2) => !e2 && O()), function(t2, a3, s3 = {}) {
    const { window: u3 = h, ...r3 } = s3;
    let i3;
    const c3 = w(() => u3 && "MutationObserver" in u3), v3 = () => {
      i3 && (i3.disconnect(), i3 = void 0);
    }, f3 = Wt.computed(() => {
      const l2 = Wt.toValue(t2), a4 = zm(l2).map(d).filter(Lm);
      return new Set(a4);
    }), p2 = Wt.watch(() => f3.value, (e2) => {
      v3(), c3.value && e2.size && (i3 = new MutationObserver(a3), e2.forEach((e3) => i3.observe(e3, r3)));
    }, { immediate: true, flush: "post" }), m3 = () => {
      p2(), v3();
    };
    km(m3);
  }(a2, O, { attributeFilter: ["style", "class"] }), i2 && p("scroll", O, { capture: true, passive: true }), r2 && p("resize", O, { passive: true }), Km(() => {
    c2 && O();
  }), { height: f2, bottom: m2, left: R, right: g, top: y, width: b, x: E, y: V, update: O };
}

export { c, m, v };
//# sourceMappingURL=index-CVudU8ow.mjs.map

const t = { direction: "forward", speed: 2, startDelay: 1e3, active: true, breakpoints: {}, playOnInit: true, stopOnFocusIn: true, stopOnInteraction: true, stopOnMouseEnter: false, rootNode: null };
function n(o = {}) {
  let e, i, r, s, c, a = 0, u = false, l = false;
  function f() {
    if (r) return;
    if (u) return;
    i.emit("autoScroll:play");
    const t2 = i.internalEngine(), { ownerWindow: n2 } = t2;
    a = n2.setTimeout(() => {
      t2.scrollBody = function(t3) {
        const { location: n3, previousLocation: o2, offsetLocation: r2, target: s2, scrollTarget: c2, index: a2, indexPrevious: u2, limit: { reachedMin: l2, reachedMax: f2, constrain: p2 }, options: { loop: g2 } } = t3, O2 = "forward" === e.direction ? -1 : 1, y2 = () => F;
        let m2 = 0, w2 = 0, I = n3.get(), v = 0, D = false;
        function E() {
          let t4 = 0;
          o2.set(n3), m2 = O2 * e.speed, I += m2, n3.add(m2), s2.set(n3), t4 = I - v, w2 = Math.sign(t4), v = I;
          const y3 = c2.byDistance(0, false).index;
          a2.get() !== y3 && (u2.set(a2.get()), a2.set(y3), i.emit("select"));
          const E2 = "forward" === e.direction ? l2(r2.get()) : f2(r2.get());
          if (!g2 && E2) {
            D = true;
            const t5 = p2(n3.get());
            n3.set(t5), s2.set(n3), d();
          }
          return F;
        }
        const F = { direction: () => w2, duration: () => -1, velocity: () => m2, settled: () => D, seek: E, useBaseFriction: y2, useBaseDuration: y2, useFriction: y2, useDuration: y2 };
        return F;
      }(t2), t2.animation.start();
    }, s), u = true;
  }
  function d() {
    if (r) return;
    if (!u) return;
    i.emit("autoScroll:stop");
    const t2 = i.internalEngine(), { ownerWindow: n2 } = t2;
    t2.scrollBody = c, n2.clearTimeout(a), a = 0, u = false;
  }
  function p() {
    l || d();
  }
  function g() {
    l || w();
  }
  function O() {
    l = true, d();
  }
  function y() {
    l = false, f();
  }
  function m() {
    i.off("settle", m), f();
  }
  function w() {
    i.on("settle", m);
  }
  return { name: "autoScroll", options: o, init: function(a2, u2) {
    i = a2;
    const { mergeOptions: l2, optionsAtMedia: m2 } = u2, w2 = l2(t, n.globalOptions), I = l2(w2, o);
    if (e = m2(I), i.scrollSnapList().length <= 1) return;
    s = e.startDelay, r = false, c = i.internalEngine().scrollBody;
    const { eventStore: v } = i.internalEngine(), D = !!i.internalEngine().options.watchDrag, E = function(t2, n2) {
      const o2 = t2.rootNode();
      return n2 && n2(o2) || o2;
    }(i, e.rootNode);
    D && i.on("pointerDown", p), D && !e.stopOnInteraction && i.on("pointerUp", g), e.stopOnMouseEnter && v.add(E, "mouseenter", O), e.stopOnMouseEnter && !e.stopOnInteraction && v.add(E, "mouseleave", y), e.stopOnFocusIn && i.on("slideFocusStart", d), e.stopOnFocusIn && !e.stopOnInteraction && v.add(i.containerNode(), "focusout", f), e.playOnInit && f();
  }, destroy: function() {
    i.off("pointerDown", p).off("pointerUp", g).off("slideFocusStart", d).off("settle", m), d(), r = true, u = false;
  }, play: function(t2) {
    void 0 !== t2 && (s = t2), f();
  }, stop: function() {
    u && d();
  }, reset: function() {
    u && (d(), w());
  }, isPlaying: function() {
    return u;
  } };
}
n.globalOptions = void 0;

export { n as default };
//# sourceMappingURL=embla-carousel-auto-scroll.esm-D6K5luu_.mjs.map

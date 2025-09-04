const n = { active: true, breakpoints: {}, delay: 4e3, jump: false, playOnInit: true, stopOnFocusIn: true, stopOnInteraction: true, stopOnMouseEnter: false, stopOnLastSnap: false, rootNode: null };
function t(o = {}) {
  let e, i, r, a, s = null, l = 0, c = false, u = false, p = false, f = false;
  function d() {
    r || (y() ? p = true : (c || i.emit("autoplay:play"), function() {
      const { ownerWindow: n2 } = i.internalEngine();
      n2.clearTimeout(l), l = n2.setTimeout(I, a[i.selectedScrollSnap()]), s = (/* @__PURE__ */ new Date()).getTime(), i.emit("autoplay:timerset");
    }(), c = true));
  }
  function m() {
    r || (c && i.emit("autoplay:stop"), function() {
      const { ownerWindow: n2 } = i.internalEngine();
      n2.clearTimeout(l), l = 0, s = null, i.emit("autoplay:timerstopped");
    }(), c = false);
  }
  function g() {
    if (y()) return p = c, m();
    p && d();
  }
  function y() {
    const { ownerDocument: n2 } = i.internalEngine();
    return "hidden" === n2.visibilityState;
  }
  function O() {
    u || m();
  }
  function S() {
    u || d();
  }
  function w() {
    u = true, m();
  }
  function E() {
    u = false, d();
  }
  function I() {
    const { index: n2 } = i.internalEngine(), t2 = n2.clone().add(1).get(), o2 = i.scrollSnapList().length - 1, r2 = e.stopOnLastSnap && t2 === o2;
    if (i.canScrollNext() ? i.scrollNext(f) : i.scrollTo(0, f), i.emit("autoplay:select"), r2) return m();
    d();
  }
  return { name: "autoplay", options: o, init: function(s2, l2) {
    i = s2;
    const { mergeOptions: c2, optionsAtMedia: u2 } = l2, p2 = c2(n, t.globalOptions), y2 = c2(p2, o);
    if (e = u2(y2), i.scrollSnapList().length <= 1) return;
    f = e.jump, r = false, a = function(n2, t2) {
      const o2 = n2.scrollSnapList();
      return "number" == typeof t2 ? o2.map(() => t2) : t2(o2, n2);
    }(i, e.delay);
    const { eventStore: I2, ownerDocument: v } = i.internalEngine(), D = !!i.internalEngine().options.watchDrag, N = function(n2, t2) {
      const o2 = n2.rootNode();
      return t2 && t2(o2) || o2;
    }(i, e.rootNode);
    I2.add(v, "visibilitychange", g), D && i.on("pointerDown", O), D && !e.stopOnInteraction && i.on("pointerUp", S), e.stopOnMouseEnter && I2.add(N, "mouseenter", w), e.stopOnMouseEnter && !e.stopOnInteraction && I2.add(N, "mouseleave", E), e.stopOnFocusIn && i.on("slideFocusStart", m), e.stopOnFocusIn && !e.stopOnInteraction && I2.add(i.containerNode(), "focusout", d), e.playOnInit && d();
  }, destroy: function() {
    i.off("pointerDown", O).off("pointerUp", S).off("slideFocusStart", m), m(), r = true, c = false;
  }, play: function(n2) {
    void 0 !== n2 && (f = n2), d();
  }, stop: function() {
    c && m();
  }, reset: function() {
    c && d();
  }, isPlaying: function() {
    return c;
  }, timeUntilNext: function() {
    return s ? a[i.selectedScrollSnap()] - ((/* @__PURE__ */ new Date()).getTime() - s) : null;
  } };
}
t.globalOptions = void 0;

export { t as default };
//# sourceMappingURL=embla-carousel-autoplay.esm-BBRRh7my.mjs.map

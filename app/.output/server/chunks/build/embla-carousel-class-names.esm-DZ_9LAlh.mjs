const n = { active: true, breakpoints: {}, snapped: "is-snapped", inView: "is-in-view", draggable: "is-draggable", dragging: "is-dragging", loop: "is-loop" };
function o(n2) {
  return (Array.isArray(n2) ? n2 : [n2]).filter(Boolean);
}
function i(n2, o2) {
  n2 && o2.length && n2.classList.remove(...o2);
}
function e(n2, o2) {
  n2 && o2.length && n2.classList.add(...o2);
}
function a(r = {}) {
  let s, t, g, l, p = [], d = [];
  const c = ["select"], f = ["pointerDown", "pointerUp"], u = ["slidesInView"], w = { snapped: [], inView: [], draggable: [], dragging: [], loop: [] };
  function b(n2, o2) {
    ("pointerDown" === o2 ? e : i)(g, w.dragging);
  }
  function h(n2 = [], o2 = [], a2) {
    const r2 = o2.map((n3) => l[n3]), s2 = n2.map((n3) => l[n3]);
    return r2.forEach((n3) => i(n3, a2)), s2.forEach((n3) => e(n3, a2)), n2;
  }
  function E() {
    const { slideRegistry: n2 } = t.internalEngine(), o2 = n2[t.selectedScrollSnap()];
    p = h(o2, p, w.snapped);
  }
  function V() {
    const n2 = t.slidesInView();
    d = h(n2, d, w.inView);
  }
  return { name: "classNames", options: r, init: function(i2, p2) {
    t = i2;
    const { mergeOptions: d2, optionsAtMedia: h2 } = p2, m = d2(n, a.globalOptions), y = d2(m, r);
    s = h2(y), g = t.rootNode(), l = t.slideNodes();
    const { watchDrag: v, loop: O } = t.internalEngine().options, A = !!v;
    s.loop && O && (w.loop = o(s.loop), e(g, w.loop)), s.draggable && A && (w.draggable = o(s.draggable), e(g, w.draggable)), s.dragging && (w.dragging = o(s.dragging), f.forEach((n2) => t.on(n2, b))), s.snapped && (w.snapped = o(s.snapped), c.forEach((n2) => t.on(n2, E)), E()), s.inView && (w.inView = o(s.inView), u.forEach((n2) => t.on(n2, V)), V());
  }, destroy: function() {
    f.forEach((n2) => t.off(n2, b)), c.forEach((n2) => t.off(n2, E)), u.forEach((n2) => t.off(n2, V)), i(g, w.loop), i(g, w.draggable), i(g, w.dragging), h([], p, w.snapped), h([], d, w.inView), Object.keys(w).forEach((n2) => {
      w[n2] = [];
    });
  } };
}
a.globalOptions = void 0;

export { a as default };
//# sourceMappingURL=embla-carousel-class-names.esm-DZ_9LAlh.mjs.map

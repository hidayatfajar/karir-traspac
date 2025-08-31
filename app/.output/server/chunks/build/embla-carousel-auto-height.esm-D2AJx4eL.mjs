function t(t2 = {}) {
  let e, n = [];
  const o = ["select", "slideFocus"];
  function i() {
    const { slideRegistry: t3 } = e.internalEngine(), o2 = t3[e.selectedScrollSnap()];
    return o2 ? o2.map((t4) => n[t4]).reduce((t4, e2) => Math.max(t4, e2), 0) : null;
  }
  function s() {
    null !== i() && (e.containerNode().style.height = `${i()}px`);
  }
  return { name: "autoHeight", options: t2, init: function(t3) {
    e = t3;
    const { options: { axis: i2 }, slideRects: l } = e.internalEngine();
    "y" !== i2 && (n = l.map((t4) => t4.height), o.forEach((t4) => e.on(t4, s)), s());
  }, destroy: function() {
    o.forEach((t4) => e.off(t4, s));
    const t3 = e.containerNode();
    t3.style.height = "", t3.getAttribute("style") || t3.removeAttribute("style");
  } };
}
t.globalOptions = void 0;

export { t as default };
//# sourceMappingURL=embla-carousel-auto-height.esm-D2AJx4eL.mjs.map

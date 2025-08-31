function n(n2, t2, e2) {
  return Math.min(Math.max(n2, t2), e2);
}
function t(n2) {
  return "number" == typeof n2 && !isNaN(n2);
}
function e(e2 = {}) {
  let o, r, i, s, l = [], c = 0, a = 0, f = 0, u = false;
  function d() {
    E(o.selectedScrollSnap(), 1);
  }
  function p() {
    u = false;
  }
  function g() {
    u = false, c = 0, a = 0;
  }
  function S() {
    const n2 = o.internalEngine().scrollBody.duration();
    a = n2 ? 0 : 1, u = true, n2 || d();
  }
  function E(t2, e3) {
    o.scrollSnapList().forEach((r2, i2) => {
      const s2 = Math.abs(e3), a2 = l[i2], d2 = i2 === t2, p2 = n(d2 ? a2 + s2 : a2 - s2, 0, 1);
      l[i2] = p2;
      const g2 = d2 && u, S2 = o.previousScrollSnap();
      g2 && (l[S2] = 1 - p2), d2 && function(n2, t3) {
        const { index: e4, dragHandler: r3, scrollSnaps: i3 } = o.internalEngine(), s3 = r3.pointerDown(), l2 = 1 / (i3.length - 1);
        let a3 = n2, u2 = s3 ? o.selectedScrollSnap() : o.previousScrollSnap();
        if (s3 && a3 === u2) {
          const n3 = -1 * Math.sign(c);
          a3 = u2, u2 = e4.clone().set(u2).add(n3).get();
        }
        const d3 = u2 * l2, p3 = (a3 - u2) * l2;
        f = d3 + p3 * t3;
      }(t2, p2), function(n2) {
        const t3 = o.internalEngine().slideRegistry[n2], { scrollSnaps: e4, containerRect: r3 } = o.internalEngine(), i3 = l[n2];
        t3.forEach((t4) => {
          const s3 = o.slideNodes()[t4].style, l2 = parseFloat(i3.toFixed(2)), c2 = l2 > 0, a3 = function(n3) {
            const { axis: t5 } = o.internalEngine();
            return `translate${t5.scroll.toUpperCase()}(${t5.direction(n3)}px)`;
          }(c2 ? e4[n2] : r3.width + 2);
          c2 && (s3.transform = a3), s3.opacity = l2.toString(), s3.pointerEvents = i3 > 0.5 ? "auto" : "none", c2 || (s3.transform = a3);
        });
      }(i2);
    });
  }
  function y() {
    const { dragHandler: n2, index: t2, scrollBody: e3 } = o.internalEngine(), r2 = o.selectedScrollSnap();
    if (!n2.pointerDown()) return r2;
    const i2 = Math.sign(e3.velocity()), s2 = Math.sign(c), l2 = t2.clone().set(r2).add(-1 * i2).get();
    return i2 && s2 ? s2 === i2 ? l2 : r2 : null;
  }
  function h(n2) {
    const { dragHandler: e3, scrollBody: i2 } = n2.internalEngine(), s2 = e3.pointerDown(), f2 = i2.velocity(), u2 = i2.duration(), d2 = y(), p2 = !t(d2);
    if (s2) {
      if (!f2) return;
      c += f2, a = Math.abs(f2 / r), function(n3) {
        const { scrollSnaps: e4, location: r2, target: i3 } = o.internalEngine();
        !t(n3) || l[n3] < 0.5 || (r2.set(e4[n3]), i3.set(r2));
      }(d2);
    }
    if (!s2) {
      if (!u2 || p2) return;
      a += (1 - l[d2]) / u2, a *= 0.68;
    }
    p2 || E(d2, a);
  }
  function m() {
    const { target: n2, location: e3 } = o.internalEngine(), r2 = n2.get() - e3.get(), i2 = Math.abs(r2) >= 1, s2 = y(), c2 = !t(s2);
    return h(o), !c2 && !i2 && l[s2] > 0.999;
  }
  function v() {
    return f;
  }
  return { name: "fade", options: e2, init: function(t2) {
    o = t2;
    const e3 = o.selectedScrollSnap(), { scrollBody: c2, containerRect: a2, axis: f2 } = o.internalEngine(), E2 = f2.measureSize(a2);
    r = n(0.75 * E2, 200, 500), u = false, l = o.scrollSnapList().map((n2, t3) => t3 === e3 ? 1 : 0), i = c2.settled, s = o.scrollProgress, c2.settled = m, o.scrollProgress = v, o.on("select", S).on("slideFocus", d).on("pointerDown", g).on("pointerUp", p), function() {
      const { translate: n2, slideLooper: t3 } = o.internalEngine();
      n2.clear(), n2.toggleActive(false), t3.loopPoints.forEach(({ translate: n3 }) => {
        n3.clear(), n3.toggleActive(false);
      });
    }(), d();
  }, destroy: function() {
    const { scrollBody: n2 } = o.internalEngine();
    n2.settled = i, o.scrollProgress = s, o.off("select", S).off("slideFocus", d).off("pointerDown", g).off("pointerUp", p), o.slideNodes().forEach((n3) => {
      const t2 = n3.style;
      t2.opacity = "", t2.transform = "", t2.pointerEvents = "", n3.getAttribute("style") || n3.removeAttribute("style");
    });
  } };
}
e.globalOptions = void 0;

export { e as default };
//# sourceMappingURL=embla-carousel-fade.esm-Ct6_2HCn.mjs.map

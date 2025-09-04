import { v as Wt, P as xm } from './server.mjs';
import { N as N$1, T as T$1, n } from './useForwardPropsEmits-DnSfSOTI.mjs';

const i = ["top", "right", "bottom", "left"], a = Math.min, l = Math.max, s = Math.round, c = Math.floor, u = (e2) => ({ x: e2, y: e2 }), f = { left: "right", right: "left", bottom: "top", top: "bottom" }, d = { start: "end", end: "start" };
function p(e2, t2, n2) {
  return l(e2, a(t2, n2));
}
function h(e2, t2) {
  return "function" == typeof e2 ? e2(t2) : e2;
}
function m(e2) {
  return e2.split("-")[0];
}
function g(e2) {
  return e2.split("-")[1];
}
function v(e2) {
  return "x" === e2 ? "y" : "x";
}
function y(e2) {
  return "y" === e2 ? "height" : "width";
}
const w = /* @__PURE__ */ new Set(["top", "bottom"]);
function x(e2) {
  return w.has(m(e2)) ? "y" : "x";
}
function b(e2) {
  return v(x(e2));
}
function A(e2) {
  return e2.replace(/start|end/g, (e3) => d[e3]);
}
const R = ["left", "right"], P = ["right", "left"], C = ["top", "bottom"], S = ["bottom", "top"];
function B(e2, t2, n2, o2) {
  const r2 = g(e2);
  let i2 = function(e3, t3, n3) {
    switch (e3) {
      case "top":
      case "bottom":
        return n3 ? t3 ? P : R : t3 ? R : P;
      case "left":
      case "right":
        return t3 ? C : S;
      default:
        return [];
    }
  }(m(e2), "start" === n2, o2);
  return r2 && (i2 = i2.map((e3) => e3 + "-" + r2), t2 && (i2 = i2.concat(i2.map(A)))), i2;
}
function k(e2) {
  return e2.replace(/left|right|bottom|top/g, (e3) => f[e3]);
}
function E(e2) {
  return "number" != typeof e2 ? function(e3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e3 };
  }(e2) : { top: e2, right: e2, bottom: e2, left: e2 };
}
function O(e2) {
  const { x: t2, y: n2, width: o2, height: r2 } = e2;
  return { width: o2, height: r2, top: n2, left: t2, right: t2 + o2, bottom: n2 + r2, x: t2, y: n2 };
}
function D(e2, t2, n2) {
  let { reference: o2, floating: r2 } = e2;
  const i2 = x(t2), a2 = b(t2), l2 = y(a2), s2 = m(t2), c2 = "y" === i2, u2 = o2.x + o2.width / 2 - r2.width / 2, f2 = o2.y + o2.height / 2 - r2.height / 2, d2 = o2[l2] / 2 - r2[l2] / 2;
  let p2;
  switch (s2) {
    case "top":
      p2 = { x: u2, y: o2.y - r2.height };
      break;
    case "bottom":
      p2 = { x: u2, y: o2.y + o2.height };
      break;
    case "right":
      p2 = { x: o2.x + o2.width, y: f2 };
      break;
    case "left":
      p2 = { x: o2.x - r2.width, y: f2 };
      break;
    default:
      p2 = { x: o2.x, y: o2.y };
  }
  switch (g(t2)) {
    case "start":
      p2[a2] -= d2 * (n2 && c2 ? -1 : 1);
      break;
    case "end":
      p2[a2] += d2 * (n2 && c2 ? -1 : 1);
  }
  return p2;
}
async function L(e2, t2) {
  var n2;
  void 0 === t2 && (t2 = {});
  const { x: o2, y: r2, platform: i2, rects: a2, elements: l2, strategy: s2 } = e2, { boundary: c2 = "clippingAncestors", rootBoundary: u2 = "viewport", elementContext: f2 = "floating", altBoundary: d2 = false, padding: p2 = 0 } = h(t2, e2), m2 = E(p2), g2 = l2[d2 ? "floating" === f2 ? "reference" : "floating" : f2], v2 = O(await i2.getClippingRect({ element: null == (n2 = await (null == i2.isElement ? void 0 : i2.isElement(g2))) || n2 ? g2 : g2.contextElement || await (null == i2.getDocumentElement ? void 0 : i2.getDocumentElement(l2.floating)), boundary: c2, rootBoundary: u2, strategy: s2 })), y2 = "floating" === f2 ? { x: o2, y: r2, width: a2.floating.width, height: a2.floating.height } : a2.reference, w2 = await (null == i2.getOffsetParent ? void 0 : i2.getOffsetParent(l2.floating)), x2 = await (null == i2.isElement ? void 0 : i2.isElement(w2)) && await (null == i2.getScale ? void 0 : i2.getScale(w2)) || { x: 1, y: 1 }, b2 = O(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l2, rect: y2, offsetParent: w2, strategy: s2 }) : y2);
  return { top: (v2.top - b2.top + m2.top) / x2.y, bottom: (b2.bottom - v2.bottom + m2.bottom) / x2.y, left: (v2.left - b2.left + m2.left) / x2.x, right: (b2.right - v2.right + m2.right) / x2.x };
}
function T(e2, t2) {
  return { top: e2.top - t2.height, right: e2.right - t2.width, bottom: e2.bottom - t2.height, left: e2.left - t2.width };
}
function $(e2) {
  return i.some((t2) => e2[t2] >= 0);
}
const H = /* @__PURE__ */ new Set(["left", "top"]);
function _(e2) {
  return "#document";
}
function z(e2) {
  var t2;
  return (null == e2 || null == (t2 = e2.ownerDocument) ? void 0 : t2.defaultView) || void 0;
}
function W(e2) {
  var t2;
  return null == (t2 = (e2.document) || (void 0).document) ? void 0 : t2.documentElement;
}
function M(e2) {
  return false;
}
const V = /* @__PURE__ */ new Set(["inline", "contents"]);
function X(e2) {
  const { overflow: t2, overflowX: n2, overflowY: o2, display: r2 } = Q(e2);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + o2 + n2) && !V.has(r2);
}
const Y = [":popover-open", ":modal"];
function j(e2) {
  return Y.some((t2) => {
    try {
      return e2.matches(t2);
    } catch (n2) {
      return false;
    }
  });
}
const I = ["transform", "translate", "scale", "rotate", "perspective"], N = ["transform", "translate", "scale", "rotate", "perspective", "filter"], q = ["paint", "layout", "strict", "content"];
function U(e2) {
  const t2 = G(), n2 = e2;
  return I.some((e3) => !!n2[e3] && "none" !== n2[e3]) || !!n2.containerType && "normal" !== n2.containerType || !t2 && !!n2.backdropFilter && "none" !== n2.backdropFilter || !t2 && !!n2.filter && "none" !== n2.filter || N.some((e3) => (n2.willChange || "").includes(e3)) || q.some((e3) => (n2.contain || "").includes(e3));
}
function G() {
  return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
const J = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function K(e2) {
  return J.has(_());
}
function Q(e2) {
  return z(e2).getComputedStyle(e2);
}
function Z(e2) {
  return { scrollLeft: e2.scrollX, scrollTop: e2.scrollY };
}
function ee(e2) {
  const t2 = e2.assignedSlot || e2.parentNode || W(e2);
  return t2;
}
function te(e2) {
  const t2 = ee(e2);
  return K() ? e2.ownerDocument ? e2.ownerDocument.body : e2.body : te(t2);
}
function ne(e2, t2, n2) {
  var o2;
  void 0 === t2 && (t2 = []), void 0 === n2 && (n2 = true);
  const r2 = te(e2), i2 = r2 === (null == (o2 = e2.ownerDocument) ? void 0 : o2.body), a2 = z(r2);
  if (i2) {
    const e3 = oe(a2);
    return t2.concat(a2, a2.visualViewport || [], X(r2) ? r2 : [], e3 && n2 ? ne(e3) : []);
  }
  return t2.concat(r2, ne(r2, [], n2));
}
function oe(e2) {
  return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
}
function re(e2) {
  const t2 = Q(e2);
  let n2 = parseFloat(t2.width) || 0, o2 = parseFloat(t2.height) || 0;
  const r2 = n2, i2 = o2, a2 = s(n2) !== r2 || s(o2) !== i2;
  return a2 && (n2 = r2, o2 = i2), { width: n2, height: o2, $: a2 };
}
function ie(e2) {
  return e2.contextElement;
}
function ae(e2) {
  ie(e2);
  return u(1);
}
const le = u(0);
function se(e2) {
  const t2 = z(e2);
  return G() && t2.visualViewport ? { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop } : le;
}
function ce(e2, t2, n2, o2) {
  void 0 === t2 && (t2 = false), void 0 === n2 && (n2 = false);
  const r2 = e2.getBoundingClientRect(), i2 = ie(e2);
  let a2 = u(1);
  t2 && (o2 || (a2 = ae(e2)));
  const l2 = function(e3, t3, n3) {
    return void 0 === t3 && (t3 = false), !(!n3 || t3 && n3 !== z(e3)) && t3;
  }(i2, n2, o2) ? se(i2) : u(0);
  let s2 = (r2.left + l2.x) / a2.x, c2 = (r2.top + l2.y) / a2.y, f2 = r2.width / a2.x, d2 = r2.height / a2.y;
  if (i2) {
    const e3 = o2;
    let t3 = z(i2), n3 = oe(t3);
    for (; n3 && o2 && e3 !== t3; ) {
      const e4 = ae(n3), o3 = n3.getBoundingClientRect(), r3 = Q(n3), i3 = o3.left + (n3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, a3 = o3.top + (n3.clientTop + parseFloat(r3.paddingTop)) * e4.y;
      s2 *= e4.x, c2 *= e4.y, f2 *= e4.x, d2 *= e4.y, s2 += i3, c2 += a3, t3 = z(n3), n3 = oe(t3);
    }
  }
  return O({ width: f2, height: d2, x: s2, y: c2 });
}
function ue(e2, t2) {
  const n2 = Z(e2).scrollLeft;
  return t2 ? t2.left + n2 : ce(W(e2)).left + n2;
}
function fe(e2, t2, n2) {
  void 0 === n2 && (n2 = false);
  const o2 = e2.getBoundingClientRect();
  return { x: o2.left + t2.scrollLeft - (n2 ? 0 : ue(e2, o2)), y: o2.top + t2.scrollTop };
}
const de = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function pe(e2, t2, n2) {
  let o2;
  if ("viewport" === t2) o2 = function(e3, t3) {
    const n3 = z(e3), o3 = W(e3), r2 = n3.visualViewport;
    let i2 = o3.clientWidth, a2 = o3.clientHeight, l2 = 0, s2 = 0;
    if (r2) {
      i2 = r2.width, a2 = r2.height;
      const e4 = G();
      (!e4 || e4 && "fixed" === t3) && (l2 = r2.offsetLeft, s2 = r2.offsetTop);
    }
    return { width: i2, height: a2, x: l2, y: s2 };
  }(e2, n2);
  else if ("document" === t2) o2 = function(e3) {
    const t3 = W(e3), n3 = Z(e3), o3 = e3.ownerDocument.body, r2 = l(t3.scrollWidth, t3.clientWidth, o3.scrollWidth, o3.clientWidth), i2 = l(t3.scrollHeight, t3.clientHeight, o3.scrollHeight, o3.clientHeight);
    let a2 = -n3.scrollLeft + ue(e3);
    const s2 = -n3.scrollTop;
    return "rtl" === Q(o3).direction && (a2 += l(t3.clientWidth, o3.clientWidth) - r2), { width: r2, height: i2, x: a2, y: s2 };
  }(W(e2));
  else {
    {
      const n3 = se(e2);
      o2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
    }
  }
  return O(o2);
}
function he(e2, t2) {
  ee(e2);
  return false;
}
function me(e2, t2, n2) {
  const o2 = W(t2), r2 = "fixed" === n2, i2 = ce(e2, true, r2, t2);
  let a2 = { scrollLeft: 0, scrollTop: 0 };
  const l2 = u(0);
  function s2() {
    l2.x = ue(o2);
  }
  r2 || ((a2 = Z(t2)), o2 && s2()), r2 && o2 && s2();
  const c2 = o2 && !r2 ? fe(o2, a2) : u(0);
  return { x: i2.left + a2.scrollLeft - l2.x - c2.x, y: i2.top + a2.scrollTop - l2.y - c2.y, width: i2.width, height: i2.height };
}
function ve(e2, t2) {
  const n2 = z(e2);
  if (j(e2)) return n2;
  {
    let t3 = ee(e2);
    for (; t3 && !K(); ) {
      t3 = ee(t3);
    }
    return n2;
  }
}
const ye = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e2) {
  let { elements: t2, rect: n2, offsetParent: o2, strategy: r2 } = e2;
  const i2 = "fixed" === r2, a2 = W(o2), l2 = !!t2 && j(t2.floating);
  if (o2 === a2 || l2 && i2) return n2;
  let s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = u(1);
  const f2 = u(0);
  i2 || (s2 = Z(o2));
  const d2 = a2 && !i2 ? fe(a2, s2, true) : u(0);
  return { width: n2.width * c2.x, height: n2.height * c2.y, x: n2.x * c2.x - s2.scrollLeft * c2.x + f2.x + d2.x, y: n2.y * c2.y - s2.scrollTop * c2.y + f2.y + d2.y };
}, getDocumentElement: W, getClippingRect: function(e2) {
  let { element: t2, boundary: n2, rootBoundary: o2, strategy: r2 } = e2;
  const i2 = [..."clippingAncestors" === n2 ? j(t2) ? [] : function(e3, t3) {
    const n3 = t3.get(e3);
    if (n3) return n3;
    let o3 = ne(e3, [], false).filter((e4) => false), r3 = null;
    const i3 = "fixed" === Q(e3).position;
    let a2 = i3 ? ee(e3) : e3;
    for (; M(); ) {
      const t4 = Q(a2), n4 = U(a2);
      n4 || "fixed" !== t4.position || (r3 = null), (i3 ? !n4 && !r3 : !n4 && "static" === t4.position && r3 && de.has(r3.position) || X(a2) && !n4 && he(e3)) ? o3 = o3.filter((e4) => e4 !== a2) : r3 = t4, a2 = ee(a2);
    }
    return t3.set(e3, o3), o3;
  }(t2, this._c) : [].concat(n2), o2], s2 = i2[0], c2 = i2.reduce((e3, n3) => {
    const o3 = pe(t2, n3, r2);
    return e3.top = l(o3.top, e3.top), e3.right = a(o3.right, e3.right), e3.bottom = a(o3.bottom, e3.bottom), e3.left = l(o3.left, e3.left), e3;
  }, pe(t2, s2, r2));
  return { width: c2.right - c2.left, height: c2.bottom - c2.top, x: c2.left, y: c2.top };
}, getOffsetParent: ve, getElementRects: async function(e2) {
  const t2 = this.getOffsetParent || ve, n2 = this.getDimensions, o2 = await n2(e2.floating);
  return { reference: me(e2.reference, await t2(e2.floating), e2.strategy), floating: { x: 0, y: 0, width: o2.width, height: o2.height } };
}, getClientRects: function(e2) {
  return Array.from(e2.getClientRects());
}, getDimensions: function(e2) {
  const { width: t2, height: n2 } = re(e2);
  return { width: t2, height: n2 };
}, getScale: ae, isElement: M, isRTL: function(e2) {
  return "rtl" === Q(e2).direction;
} };
function we(e2, t2) {
  return e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
}
function xe(e2, t2, n2, o2) {
  void 0 === o2 && (o2 = {});
  const { ancestorScroll: r2 = true, ancestorResize: i2 = true, elementResize: s2 = "function" == typeof ResizeObserver, layoutShift: u2 = "function" == typeof IntersectionObserver, animationFrame: f2 = false } = o2, d2 = ie(e2), p2 = r2 || i2 ? [...d2 ? ne(d2) : [], ...ne(t2)] : [];
  p2.forEach((e3) => {
    r2 && e3.addEventListener("scroll", n2, { passive: true }), i2 && e3.addEventListener("resize", n2);
  });
  const h2 = d2 && u2 ? function(e3, t3) {
    let n3, o3 = null;
    const r3 = W(e3);
    function i3() {
      var e4;
      clearTimeout(n3), null == (e4 = o3) || e4.disconnect(), o3 = null;
    }
    return function s3(u3, f3) {
      void 0 === u3 && (u3 = false), void 0 === f3 && (f3 = 1), i3();
      const d3 = e3.getBoundingClientRect(), { left: p3, top: h3, width: m3, height: g3 } = d3;
      if (u3 || t3(), !m3 || !g3) return;
      const v3 = { rootMargin: -c(h3) + "px " + -c(r3.clientWidth - (p3 + m3)) + "px " + -c(r3.clientHeight - (h3 + g3)) + "px " + -c(p3) + "px", threshold: l(0, a(1, f3)) || 1 };
      let y3 = true;
      function w2(t4) {
        const o4 = t4[0].intersectionRatio;
        if (o4 !== f3) {
          if (!y3) return s3();
          o4 ? s3(false, o4) : n3 = setTimeout(() => {
            s3(false, 1e-7);
          }, 1e3);
        }
        1 !== o4 || we(d3, e3.getBoundingClientRect()) || s3(), y3 = false;
      }
      try {
        o3 = new IntersectionObserver(w2, { ...v3, root: r3.ownerDocument });
      } catch (x2) {
        o3 = new IntersectionObserver(w2, v3);
      }
      o3.observe(e3);
    }(true), i3;
  }(d2, n2) : null;
  let m2, g2 = -1, v2 = null;
  s2 && (v2 = new ResizeObserver((e3) => {
    let [o3] = e3;
    o3 && o3.target === d2 && v2 && (v2.unobserve(t2), cancelAnimationFrame(g2), g2 = requestAnimationFrame(() => {
      var e4;
      null == (e4 = v2) || e4.observe(t2);
    })), n2();
  }), d2 && !f2 && v2.observe(d2), v2.observe(t2));
  let y2 = f2 ? ce(e2) : null;
  return f2 && function t3() {
    const o3 = ce(e2);
    y2 && !we(y2, o3) && n2();
    y2 = o3, m2 = requestAnimationFrame(t3);
  }(), n2(), () => {
    var e3;
    p2.forEach((e4) => {
      r2 && e4.removeEventListener("scroll", n2), i2 && e4.removeEventListener("resize", n2);
    }), null == h2 || h2(), null == (e3 = v2) || e3.disconnect(), v2 = null, f2 && cancelAnimationFrame(m2);
  };
}
const be = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(t2) {
    var n2, o2;
    const { x: r2, y: i2, placement: a2, middlewareData: l2 } = t2, s2 = await async function(e3, t3) {
      const { placement: n3, platform: o3, elements: r3 } = e3, i3 = await (null == o3.isRTL ? void 0 : o3.isRTL(r3.floating)), a3 = m(n3), l3 = g(n3), s3 = "y" === x(n3), c2 = H.has(a3) ? -1 : 1, u2 = i3 && s3 ? -1 : 1, f2 = h(t3, e3);
      let { mainAxis: d2, crossAxis: p2, alignmentAxis: v2 } = "number" == typeof f2 ? { mainAxis: f2, crossAxis: 0, alignmentAxis: null } : { mainAxis: f2.mainAxis || 0, crossAxis: f2.crossAxis || 0, alignmentAxis: f2.alignmentAxis };
      return l3 && "number" == typeof v2 && (p2 = "end" === l3 ? -1 * v2 : v2), s3 ? { x: p2 * u2, y: d2 * c2 } : { x: d2 * c2, y: p2 * u2 };
    }(t2, e2);
    return a2 === (null == (n2 = l2.offset) ? void 0 : n2.placement) && null != (o2 = l2.arrow) && o2.alignmentOffset ? {} : { x: r2 + s2.x, y: i2 + s2.y, data: { ...s2, placement: a2 } };
  } };
}, Ae = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "shift", options: e2, async fn(t2) {
    const { x: n2, y: o2, placement: r2 } = t2, { mainAxis: i2 = true, crossAxis: a2 = false, limiter: l2 = { fn: (e3) => {
      let { x: t3, y: n3 } = e3;
      return { x: t3, y: n3 };
    } }, ...s2 } = h(e2, t2), c2 = { x: n2, y: o2 }, u2 = await L(t2, s2), f2 = x(m(r2)), d2 = v(f2);
    let g2 = c2[d2], y2 = c2[f2];
    if (i2) {
      const e3 = "y" === d2 ? "bottom" : "right";
      g2 = p(g2 + u2["y" === d2 ? "top" : "left"], g2, g2 - u2[e3]);
    }
    if (a2) {
      const e3 = "y" === f2 ? "bottom" : "right";
      y2 = p(y2 + u2["y" === f2 ? "top" : "left"], y2, y2 - u2[e3]);
    }
    const w2 = l2.fn({ ...t2, [d2]: g2, [f2]: y2 });
    return { ...w2, data: { x: w2.x - n2, y: w2.y - o2, enabled: { [d2]: i2, [f2]: a2 } } };
  } };
}, Re = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(t2) {
    var n2, o2;
    const { placement: r2, middlewareData: i2, rects: a2, initialPlacement: l2, platform: s2, elements: c2 } = t2, { mainAxis: u2 = true, crossAxis: f2 = true, fallbackPlacements: d2, fallbackStrategy: p2 = "bestFit", fallbackAxisSideDirection: v2 = "none", flipAlignment: w2 = true, ...R2 } = h(e2, t2);
    if (null != (n2 = i2.arrow) && n2.alignmentOffset) return {};
    const P2 = m(r2), C2 = x(l2), S2 = m(l2) === l2, E2 = await (null == s2.isRTL ? void 0 : s2.isRTL(c2.floating)), O2 = d2 || (S2 || !w2 ? [k(l2)] : function(e3) {
      const t3 = k(e3);
      return [A(e3), t3, A(t3)];
    }(l2)), D2 = "none" !== v2;
    !d2 && D2 && O2.push(...B(l2, w2, v2, E2));
    const T2 = [l2, ...O2], $2 = await L(t2, R2), H2 = [];
    let _2 = (null == (o2 = i2.flip) ? void 0 : o2.overflows) || [];
    if (u2 && H2.push($2[P2]), f2) {
      const e3 = function(e4, t3, n3) {
        void 0 === n3 && (n3 = false);
        const o3 = g(e4), r3 = b(e4), i3 = y(r3);
        let a3 = "x" === r3 ? o3 === (n3 ? "end" : "start") ? "right" : "left" : "start" === o3 ? "bottom" : "top";
        return t3.reference[i3] > t3.floating[i3] && (a3 = k(a3)), [a3, k(a3)];
      }(r2, a2, E2);
      H2.push($2[e3[0]], $2[e3[1]]);
    }
    if (_2 = [..._2, { placement: r2, overflows: H2 }], !H2.every((e3) => e3 <= 0)) {
      var z2, W2;
      const e3 = ((null == (z2 = i2.flip) ? void 0 : z2.index) || 0) + 1, t3 = T2[e3];
      if (t3) {
        if (!("alignment" === f2 && C2 !== x(t3)) || _2.every((e4) => e4.overflows[0] > 0 && x(e4.placement) === C2)) return { data: { index: e3, overflows: _2 }, reset: { placement: t3 } };
      }
      let n3 = null == (W2 = _2.filter((e4) => e4.overflows[0] <= 0).sort((e4, t4) => e4.overflows[1] - t4.overflows[1])[0]) ? void 0 : W2.placement;
      if (!n3) switch (p2) {
        case "bestFit": {
          var F2;
          const e4 = null == (F2 = _2.filter((e5) => {
            if (D2) {
              const t4 = x(e5.placement);
              return t4 === C2 || "y" === t4;
            }
            return true;
          }).map((e5) => [e5.placement, e5.overflows.filter((e6) => e6 > 0).reduce((e6, t4) => e6 + t4, 0)]).sort((e5, t4) => e5[1] - t4[1])[0]) ? void 0 : F2[0];
          e4 && (n3 = e4);
          break;
        }
        case "initialPlacement":
          n3 = l2;
      }
      if (r2 !== n3) return { reset: { placement: n3 } };
    }
    return {};
  } };
}, Pe = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "size", options: e2, async fn(t2) {
    var n2, o2;
    const { placement: r2, rects: i2, platform: s2, elements: c2 } = t2, { apply: u2 = () => {
    }, ...f2 } = h(e2, t2), d2 = await L(t2, f2), p2 = m(r2), v2 = g(r2), y2 = "y" === x(r2), { width: w2, height: b2 } = i2.floating;
    let A2, R2;
    "top" === p2 || "bottom" === p2 ? (A2 = p2, R2 = v2 === (await (null == s2.isRTL ? void 0 : s2.isRTL(c2.floating)) ? "start" : "end") ? "left" : "right") : (R2 = p2, A2 = "end" === v2 ? "top" : "bottom");
    const P2 = b2 - d2.top - d2.bottom, C2 = w2 - d2.left - d2.right, S2 = a(b2 - d2[A2], P2), B2 = a(w2 - d2[R2], C2), k2 = !t2.middlewareData.shift;
    let E2 = S2, O2 = B2;
    if (null != (n2 = t2.middlewareData.shift) && n2.enabled.x && (O2 = C2), null != (o2 = t2.middlewareData.shift) && o2.enabled.y && (E2 = P2), k2 && !v2) {
      const e3 = l(d2.left, 0), t3 = l(d2.right, 0), n3 = l(d2.top, 0), o3 = l(d2.bottom, 0);
      y2 ? O2 = w2 - 2 * (0 !== e3 || 0 !== t3 ? e3 + t3 : l(d2.left, d2.right)) : E2 = b2 - 2 * (0 !== n3 || 0 !== o3 ? n3 + o3 : l(d2.top, d2.bottom));
    }
    await u2({ ...t2, availableWidth: O2, availableHeight: E2 });
    const D2 = await s2.getDimensions(c2.floating);
    return w2 !== D2.width || b2 !== D2.height ? { reset: { rects: true } } : {};
  } };
}, Ce = function(e2) {
  return void 0 === e2 && (e2 = {}), { name: "hide", options: e2, async fn(t2) {
    const { rects: n2 } = t2, { strategy: o2 = "referenceHidden", ...r2 } = h(e2, t2);
    switch (o2) {
      case "referenceHidden": {
        const e3 = T(await L(t2, { ...r2, elementContext: "reference" }), n2.reference);
        return { data: { referenceHiddenOffsets: e3, referenceHidden: $(e3) } };
      }
      case "escaped": {
        const e3 = T(await L(t2, { ...r2, altBoundary: true }), n2.floating);
        return { data: { escapedOffsets: e3, escaped: $(e3) } };
      }
      default:
        return {};
    }
  } };
}, Se = (e2) => ({ name: "arrow", options: e2, async fn(t2) {
  const { x: n2, y: o2, placement: r2, rects: i2, platform: l2, elements: s2, middlewareData: c2 } = t2, { element: u2, padding: f2 = 0 } = h(e2, t2) || {};
  if (null == u2) return {};
  const d2 = E(f2), m2 = { x: n2, y: o2 }, v2 = b(r2), w2 = y(v2), x2 = await l2.getDimensions(u2), A2 = "y" === v2, R2 = A2 ? "top" : "left", P2 = A2 ? "bottom" : "right", C2 = A2 ? "clientHeight" : "clientWidth", S2 = i2.reference[w2] + i2.reference[v2] - m2[v2] - i2.floating[w2], B2 = m2[v2] - i2.reference[v2], k2 = await (null == l2.getOffsetParent ? void 0 : l2.getOffsetParent(u2));
  let O2 = k2 ? k2[C2] : 0;
  O2 && await (null == l2.isElement ? void 0 : l2.isElement(k2)) || (O2 = s2.floating[C2] || i2.floating[w2]);
  const D2 = S2 / 2 - B2 / 2, L2 = O2 / 2 - x2[w2] / 2 - 1, T2 = a(d2[R2], L2), $2 = a(d2[P2], L2), H2 = T2, _2 = O2 - x2[w2] - $2, z2 = O2 / 2 - x2[w2] / 2 + D2, W2 = p(H2, z2, _2), F2 = !c2.arrow && null != g(r2) && z2 !== W2 && i2.reference[w2] / 2 - (z2 < H2 ? T2 : $2) - x2[w2] / 2 < 0, M2 = F2 ? z2 < H2 ? z2 - H2 : z2 - _2 : 0;
  return { [v2]: m2[v2] + M2, data: { [v2]: W2, centerOffset: z2 - W2 - M2, ...F2 && { alignmentOffset: M2 } }, reset: F2 };
} }), Be = function(e2) {
  return void 0 === e2 && (e2 = {}), { options: e2, fn(t2) {
    const { x: n2, y: o2, placement: r2, rects: i2, middlewareData: a2 } = t2, { offset: l2 = 0, mainAxis: s2 = true, crossAxis: c2 = true } = h(e2, t2), u2 = { x: n2, y: o2 }, f2 = x(r2), d2 = v(f2);
    let p2 = u2[d2], g2 = u2[f2];
    const y2 = h(l2, t2), w2 = "number" == typeof y2 ? { mainAxis: y2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y2 };
    if (s2) {
      const e3 = "y" === d2 ? "height" : "width", t3 = i2.reference[d2] - i2.floating[e3] + w2.mainAxis, n3 = i2.reference[d2] + i2.reference[e3] - w2.mainAxis;
      p2 < t3 ? p2 = t3 : p2 > n3 && (p2 = n3);
    }
    if (c2) {
      var b2, A2;
      const e3 = "y" === d2 ? "width" : "height", t3 = H.has(m(r2)), n3 = i2.reference[f2] - i2.floating[e3] + (t3 && (null == (b2 = a2.offset) ? void 0 : b2[f2]) || 0) + (t3 ? 0 : w2.crossAxis), o3 = i2.reference[f2] + i2.reference[e3] + (t3 ? 0 : (null == (A2 = a2.offset) ? void 0 : A2[f2]) || 0) - (t3 ? w2.crossAxis : 0);
      g2 < n3 ? g2 = n3 : g2 > o3 && (g2 = o3);
    }
    return { [d2]: p2, [f2]: g2 };
  } };
}, ke = (e2, t2, n2) => {
  const o2 = /* @__PURE__ */ new Map(), r2 = { platform: ye, ...n2 }, i2 = { ...r2.platform, _c: o2 };
  return (async (e3, t3, n3) => {
    const { placement: o3 = "bottom", strategy: r3 = "absolute", middleware: i3 = [], platform: a2 } = n3, l2 = i3.filter(Boolean), s2 = await (null == a2.isRTL ? void 0 : a2.isRTL(t3));
    let c2 = await a2.getElementRects({ reference: e3, floating: t3, strategy: r3 }), { x: u2, y: f2 } = D(c2, o3, s2), d2 = o3, p2 = {}, h2 = 0;
    for (let m2 = 0; m2 < l2.length; m2++) {
      const { name: n4, fn: i4 } = l2[m2], { x: g2, y: v2, data: y2, reset: w2 } = await i4({ x: u2, y: f2, initialPlacement: o3, placement: d2, strategy: r3, middlewareData: p2, rects: c2, platform: a2, elements: { reference: e3, floating: t3 } });
      u2 = null != g2 ? g2 : u2, f2 = null != v2 ? v2 : f2, p2 = { ...p2, [n4]: { ...p2[n4], ...y2 } }, w2 && h2 <= 50 && (h2++, "object" == typeof w2 && (w2.placement && (d2 = w2.placement), w2.rects && (c2 = true === w2.rects ? await a2.getElementRects({ reference: e3, floating: t3, strategy: r3 }) : w2.rects), { x: u2, y: f2 } = D(c2, d2, s2)), m2 = -1);
    }
    return { x: u2, y: f2, placement: d2, strategy: r3, middlewareData: p2 };
  })(e2, t2, { ...r2, platform: i2 });
};
function Ee(e2) {
  if (function(e3) {
    return null != e3 && "object" == typeof e3 && "$el" in e3;
  }(e2)) {
    const t2 = e2.$el;
    return t2;
  }
  return e2;
}
function Oe(t2) {
  return "function" == typeof t2 ? t2() : Wt.unref(t2);
}
function De(e2, t2) {
  return Math.round(1 * t2) / 1;
}
const [Le, Te] = T$1("PopperRoot"), $e = Wt.defineComponent({ inheritAttrs: false, __name: "PopperRoot", setup(t2) {
  const n2 = Wt.ref();
  return Te({ anchor: n2, onAnchorChange: (e2) => n2.value = e2 }), (t3, n3) => Wt.renderSlot(t3.$slots, "default");
} }), He = Wt.defineComponent({ __name: "PopperAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(n2) {
  const r2 = n2, { forwardRef: i2, currentElement: a2 } = N$1(), l2 = Le();
  return Wt.watchPostEffect(() => {
    var _a;
    l2.onAnchorChange((_a = r2.reference) != null ? _a : a2.value);
  }), (n3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), { ref: Wt.unref(i2), as: n3.as, "as-child": n3.asChild }, { default: Wt.withCtx(() => [Wt.renderSlot(n3.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} }), _e = { key: 0, d: "M0 0L6 6L12 0" }, ze = { key: 1, d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0" }, We = Wt.defineComponent({ __name: "Arrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(n2) {
  const r2 = n2;
  return N$1(), (n3, o2) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), Wt.mergeProps(r2, { width: n3.width, height: n3.height, viewBox: n3.asChild ? void 0 : "0 0 12 6", preserveAspectRatio: n3.asChild ? void 0 : "none" }), { default: Wt.withCtx(() => [Wt.renderSlot(n3.$slots, "default", {}, () => [n3.rounded ? (Wt.openBlock(), Wt.createElementBlock("path", ze)) : (Wt.openBlock(), Wt.createElementBlock("path", _e))])]), _: 3 }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
} });
function Fe(e2) {
  return null !== e2;
}
function Me(e2) {
  return { name: "transformOrigin", options: e2, fn(t2) {
    var _a, _b;
    var n2, o2, r2;
    const { placement: i2, rects: a2, middlewareData: l2 } = t2, s2 = 0 !== (null == (n2 = l2.arrow) ? void 0 : n2.centerOffset), c2 = s2 ? 0 : e2.arrowWidth, u2 = s2 ? 0 : e2.arrowHeight, [f2, d2] = Ve(i2), p2 = { start: "0%", center: "50%", end: "100%" }[d2], h2 = ((_a = null == (o2 = l2.arrow) ? void 0 : o2.x) != null ? _a : 0) + c2 / 2, m2 = ((_b = null == (r2 = l2.arrow) ? void 0 : r2.y) != null ? _b : 0) + u2 / 2;
    let g2 = "", v2 = "";
    return "bottom" === f2 ? (g2 = s2 ? p2 : `${h2}px`, v2 = -u2 + "px") : "top" === f2 ? (g2 = s2 ? p2 : `${h2}px`, v2 = `${a2.floating.height + u2}px`) : "right" === f2 ? (g2 = -u2 + "px", v2 = s2 ? p2 : `${m2}px`) : "left" === f2 && (g2 = `${a2.floating.width + u2}px`, v2 = s2 ? p2 : `${m2}px`), { data: { x: g2, y: v2 } };
  } };
}
function Ve(e2) {
  const [t2, n2 = "center"] = e2.split("-");
  return [t2, n2];
}
const Xe = { side: "bottom", sideOffset: 0, align: "center", alignOffset: 0, arrowPadding: 0, avoidCollisions: true, collisionBoundary: () => [], collisionPadding: 0, sticky: "partial", hideWhenDetached: false, positionStrategy: "fixed", updatePositionStrategy: "optimized", prioritizePosition: false }, [Ye, je] = T$1("PopperContent"), Ie = Wt.defineComponent({ inheritAttrs: false, __name: "PopperContent", props: Wt.mergeDefaults({ side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, { ...Xe }), emits: ["placed"], setup(n2, { emit: i2 }) {
  const a2 = n2, l2 = i2, s2 = Le(), { forwardRef: c2, currentElement: u2 } = N$1(), f2 = Wt.ref(), d2 = Wt.ref(), { width: p2, height: h2 } = function() {
    const t2 = Wt.ref();
    return { width: Wt.computed(() => {
      var _a;
      var e2;
      return (_a = null == (e2 = t2.value) ? void 0 : e2.width) != null ? _a : 0;
    }), height: Wt.computed(() => {
      var _a;
      var e2;
      return (_a = null == (e2 = t2.value) ? void 0 : e2.height) != null ? _a : 0;
    }) };
  }(), m2 = Wt.computed(() => a2.side + ("center" !== a2.align ? `-${a2.align}` : "")), g2 = Wt.computed(() => "number" == typeof a2.collisionPadding ? a2.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a2.collisionPadding }), v2 = Wt.computed(() => Array.isArray(a2.collisionBoundary) ? a2.collisionBoundary : [a2.collisionBoundary]), y2 = Wt.computed(() => ({ padding: g2.value, boundary: v2.value.filter(Fe), altBoundary: v2.value.length > 0 })), w2 = n(() => {
    return [be({ mainAxis: a2.sideOffset + h2.value, alignmentAxis: a2.alignOffset }), a2.prioritizePosition && a2.avoidCollisions && Re({ ...y2.value }), a2.avoidCollisions && Ae({ mainAxis: true, crossAxis: !!a2.prioritizePosition, limiter: "partial" === a2.sticky ? Be() : void 0, ...y2.value }), !a2.prioritizePosition && a2.avoidCollisions && Re({ ...y2.value }), Pe({ ...y2.value, apply: ({ elements: e3, rects: t2, availableWidth: n3, availableHeight: o2 }) => {
      const { width: r2, height: i3 } = t2.reference, a3 = e3.floating.style;
      a3.setProperty("--reka-popper-available-width", `${n3}px`), a3.setProperty("--reka-popper-available-height", `${o2}px`), a3.setProperty("--reka-popper-anchor-width", `${r2}px`), a3.setProperty("--reka-popper-anchor-height", `${i3}px`);
    } }), d2.value && (e2 = { element: d2.value, padding: a2.arrowPadding }, { name: "arrow", options: e2, fn(t2) {
      const n3 = Ee(Oe(e2.element));
      return null == n3 ? {} : Se({ element: n3, padding: e2.padding }).fn(t2);
    } }), Me({ arrowWidth: p2.value, arrowHeight: h2.value }), a2.hideWhenDetached && Ce({ strategy: "referenceHidden", ...y2.value })];
    var e2;
  }), x2 = Wt.computed(() => {
    var _a;
    return (_a = a2.reference) != null ? _a : s2.anchor.value;
  }), { floatingStyles: b2, placement: A2, isPositioned: R2, middlewareData: P2 } = function(t2, n3, o2) {
    void 0 === o2 && (o2 = {});
    const r2 = o2.whileElementsMounted, i3 = Wt.computed(() => {
      var e2;
      return null == (e2 = Oe(o2.open)) || e2;
    }), a3 = Wt.computed(() => Oe(o2.middleware)), l3 = Wt.computed(() => {
      var e2;
      return null != (e2 = Oe(o2.placement)) ? e2 : "bottom";
    }), s3 = Wt.computed(() => {
      var e2;
      return null != (e2 = Oe(o2.strategy)) ? e2 : "absolute";
    }), c3 = Wt.computed(() => {
      var e2;
      return null == (e2 = Oe(o2.transform)) || e2;
    }), u3 = Wt.computed(() => Ee(t2.value)), f3 = Wt.computed(() => Ee(n3.value)), d3 = Wt.ref(0), p3 = Wt.ref(0), h3 = Wt.ref(s3.value), m3 = Wt.ref(l3.value), g3 = Wt.shallowRef({}), v3 = Wt.ref(false), y3 = Wt.computed(() => {
      const e2 = { position: h3.value, left: "0", top: "0" };
      if (!f3.value) return e2;
      const t3 = De(f3.value, d3.value), n4 = De(f3.value, p3.value);
      return c3.value ? { ...e2, transform: "translate(" + t3 + "px, " + n4 + "px)", ...(f3.value, false) } : { position: h3.value, left: t3 + "px", top: n4 + "px" };
    });
    let w3;
    function x3() {
      if (null == u3.value || null == f3.value) return;
      const e2 = i3.value;
      ke(u3.value, f3.value, { middleware: a3.value, placement: l3.value, strategy: s3.value }).then((t3) => {
        d3.value = t3.x, p3.value = t3.y, h3.value = t3.strategy, m3.value = t3.placement, g3.value = t3.middlewareData, v3.value = false !== e2;
      });
    }
    function b3() {
      "function" == typeof w3 && (w3(), w3 = void 0);
    }
    return Wt.watch([a3, l3, s3, i3], x3, { flush: "sync" }), Wt.watch([u3, f3], function() {
      b3(), void 0 !== r2 ? null == u3.value || null == f3.value || (w3 = r2(u3.value, f3.value, x3)) : x3();
    }, { flush: "sync" }), Wt.watch(i3, function() {
      i3.value || (v3.value = false);
    }, { flush: "sync" }), Wt.getCurrentScope() && Wt.onScopeDispose(b3), { x: Wt.shallowReadonly(d3), y: Wt.shallowReadonly(p3), strategy: Wt.shallowReadonly(h3), placement: Wt.shallowReadonly(m3), middlewareData: Wt.shallowReadonly(g3), isPositioned: Wt.shallowReadonly(v3), floatingStyles: y3, update: x3 };
  }(x2, f2, { strategy: a2.positionStrategy, placement: m2, whileElementsMounted: (...e2) => xe(...e2, { layoutShift: !a2.disableUpdateOnLayoutShift, animationFrame: "always" === a2.updatePositionStrategy }), middleware: w2 }), C2 = Wt.computed(() => Ve(A2.value)[0]), S2 = Wt.computed(() => Ve(A2.value)[1]);
  Wt.watchPostEffect(() => {
    R2.value && l2("placed");
  });
  const B2 = Wt.computed(() => {
    var e2;
    return 0 !== (null == (e2 = P2.value.arrow) ? void 0 : e2.centerOffset);
  }), k2 = Wt.ref("");
  Wt.watchEffect(() => {
    u2.value && (k2.value = (void 0).getComputedStyle(u2.value).zIndex);
  });
  const E2 = Wt.computed(() => {
    var _a;
    var e2;
    return (_a = null == (e2 = P2.value.arrow) ? void 0 : e2.x) != null ? _a : 0;
  }), O2 = Wt.computed(() => {
    var _a;
    var e2;
    return (_a = null == (e2 = P2.value.arrow) ? void 0 : e2.y) != null ? _a : 0;
  });
  return je({ placedSide: C2, onArrowChange: (e2) => d2.value = e2, arrowX: E2, arrowY: O2, shouldHideArrow: B2 }), (n3, o2) => {
    var r2, i3, l3;
    return Wt.openBlock(), Wt.createElementBlock("div", { ref_key: "floatingRef", ref: f2, "data-reka-popper-content-wrapper": "", style: Wt.normalizeStyle({ ...Wt.unref(b2), transform: Wt.unref(R2) ? Wt.unref(b2).transform : "translate(0, -200%)", minWidth: "max-content", zIndex: k2.value, "--reka-popper-transform-origin": [null == (r2 = Wt.unref(P2).transformOrigin) ? void 0 : r2.x, null == (i3 = Wt.unref(P2).transformOrigin) ? void 0 : i3.y].join(" "), ...(null == (l3 = Wt.unref(P2).hide) ? void 0 : l3.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }) }, [Wt.createVNode(Wt.unref(xm), Wt.mergeProps({ ref: Wt.unref(c2) }, n3.$attrs, { "as-child": a2.asChild, as: n3.as, "data-side": C2.value, "data-align": S2.value, style: { animation: Wt.unref(R2) ? void 0 : "none" } }), { default: Wt.withCtx(() => [Wt.renderSlot(n3.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4);
  };
} }), Ne = { top: "bottom", right: "left", bottom: "top", left: "right" }, qe = Wt.defineComponent({ inheritAttrs: false, __name: "PopperArrow", props: { width: {}, height: {}, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(t2) {
  const { forwardRef: n2 } = N$1(), r2 = Ye(), i2 = Wt.computed(() => Ne[r2.placedSide.value]);
  return (t3, o2) => {
    var a2, l2, s2, c2;
    return Wt.openBlock(), Wt.createElementBlock("span", { ref: (t4) => {
      Wt.unref(r2).onArrowChange(t4);
    }, style: Wt.normalizeStyle({ position: "absolute", left: (null == (a2 = Wt.unref(r2).arrowX) ? void 0 : a2.value) ? `${null == (l2 = Wt.unref(r2).arrowX) ? void 0 : l2.value}px` : void 0, top: (null == (s2 = Wt.unref(r2).arrowY) ? void 0 : s2.value) ? `${null == (c2 = Wt.unref(r2).arrowY) ? void 0 : c2.value}px` : void 0, [i2.value]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[Wt.unref(r2).placedSide.value], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[Wt.unref(r2).placedSide.value], visibility: Wt.unref(r2).shouldHideArrow.value ? "hidden" : void 0 }) }, [Wt.createVNode(We, Wt.mergeProps(t3.$attrs, { ref: Wt.unref(n2), style: { display: "block" }, as: t3.as, "as-child": t3.asChild, rounded: t3.rounded, width: t3.width, height: t3.height }), { default: Wt.withCtx(() => [Wt.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["as", "as-child", "rounded", "width", "height"])], 4);
  };
} });

export { $e as $, He as H, Ie as I, Xe as X, qe as q };
//# sourceMappingURL=PopperArrow-BQDIGHqG.mjs.map

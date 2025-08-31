import { l } from './getActiveElement-CxMYnBFR.mjs';

const t = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function o(r2, o2, n2) {
  const e2 = /* @__PURE__ */ function(r3, t2) {
    return "rtl" !== t2 ? r3 : "ArrowLeft" === r3 ? "ArrowRight" : "ArrowRight" === r3 ? "ArrowLeft" : r3;
  }(r2.key, n2);
  if (!("vertical" === o2 && ["ArrowLeft", "ArrowRight"].includes(e2) || "horizontal" === o2 && ["ArrowUp", "ArrowDown"].includes(e2))) return t[e2];
}
function n(t2, o2 = false) {
  const n2 = l();
  for (const e2 of t2) {
    if (e2 === n2) return;
    if (e2.focus({ preventScroll: o2 }), l() !== n2) return;
  }
}
function e(r2, t2) {
  return r2.map((o2, n2) => r2[(t2 + n2) % r2.length]);
}

export { e, n, o };
//# sourceMappingURL=utils-DfEv1peI.mjs.map

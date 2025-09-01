import { l } from './getActiveElement-CxMYnBFR.mjs';

const o = "rovingFocusGroup.onEntryFocus", t = { bubbles: false, cancelable: true }, n = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function e(r2, o2, t2) {
  const e2 = /* @__PURE__ */ function(r3, o3) {
    return "rtl" !== o3 ? r3 : "ArrowLeft" === r3 ? "ArrowRight" : "ArrowRight" === r3 ? "ArrowLeft" : r3;
  }(r2.key, t2);
  if (!("vertical" === o2 && ["ArrowLeft", "ArrowRight"].includes(e2) || "horizontal" === o2 && ["ArrowUp", "ArrowDown"].includes(e2))) return n[e2];
}
function s(o2, t2 = false) {
  const n2 = l();
  for (const e2 of o2) {
    if (e2 === n2) return;
    if (e2.focus({ preventScroll: t2 }), l() !== n2) return;
  }
}
function i(r2, o2) {
  return r2.map((t2, n2) => r2[(o2 + n2) % r2.length]);
}

export { e, i, o, s, t };
//# sourceMappingURL=utils-B3GHb33t.mjs.map

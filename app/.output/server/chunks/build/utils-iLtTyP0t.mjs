import { l as l$1 } from './getActiveElement-CxMYnBFR.mjs';

const e = "menu.itemSelect", n = ["Enter", " "], r = ["ArrowUp", "PageDown", "End"], o = ["ArrowDown", "PageUp", "Home", ...r], c = { ltr: [...n, "ArrowRight"], rtl: [...n, "ArrowLeft"] }, i = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] };
function s(t2) {
  return t2 ? "open" : "closed";
}
function u(t2) {
  return "indeterminate" === t2;
}
function a(t2) {
  return u(t2) ? "indeterminate" : t2 ? "checked" : "unchecked";
}
function f(e2) {
  const n2 = l$1();
  for (const r2 of e2) {
    if (r2 === n2) return;
    if (r2.focus(), l$1() !== n2) return;
  }
}
function l(t2, e2) {
  if (!e2) return false;
  return function(t3, e3) {
    const { x: n2, y: r2 } = t3;
    let o2 = false;
    for (let c2 = 0, i2 = e3.length - 1; c2 < e3.length; i2 = c2++) {
      const t4 = e3[c2].x, s2 = e3[c2].y, u2 = e3[i2].x, a2 = e3[i2].y;
      s2 > r2 != a2 > r2 && n2 < (u2 - t4) * (r2 - s2) / (a2 - s2) + t4 && (o2 = !o2);
    }
    return o2;
  }({ x: t2.clientX, y: t2.clientY }, e2);
}
function g(t2) {
  return "mouse" === t2.pointerType;
}

export { a, c, e, f, g, i, l, n, o, r, s, u };
//# sourceMappingURL=utils-iLtTyP0t.mjs.map

const e = ["INPUT", "TEXTAREA"];
function r(r2, l, n, o = {}) {
  if (!l || o.enableIgnoredElement && e.includes(l.nodeName)) return null;
  const { arrowKeyOptions: u = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: a = [], loop: f = true, dir: s = "ltr", preventScroll: c = true, focus: d = false } = o, [A, g, y, h, p, w] = ["ArrowRight" === r2.key, "ArrowLeft" === r2.key, "ArrowUp" === r2.key, "ArrowDown" === r2.key, "Home" === r2.key, "End" === r2.key], b = y || h, k = A || g;
  if (!p && !w && (!b && !k || "vertical" === u && k || "horizontal" === u && b)) return null;
  const m = n ? Array.from(n.querySelectorAll(i)) : a;
  if (!m.length) return null;
  c && r2.preventDefault();
  let E = null;
  if (k || b) {
    E = t(m, l, { goForward: b ? h : "ltr" === s ? A : g, loop: f });
  } else p ? E = m.at(0) || null : w && (E = m.at(-1) || null);
  return d && (null == E || E.focus()), E;
}
function t(e2, r2, l, n = e2.length) {
  if (0 === --n) return null;
  const o = e2.indexOf(r2), u = l.goForward ? o + 1 : o - 1;
  if (!l.loop && (u < 0 || u >= e2.length)) return null;
  const i = e2[(u + e2.length) % e2.length];
  if (!i) return null;
  return i.hasAttribute("disabled") && "false" !== i.getAttribute("disabled") ? t(e2, i, l, n) : i;
}

export { r };
//# sourceMappingURL=useArrowNavigation-Cic7byI7.mjs.map

function e(e2, t, n) {
  const a = n.originalEvent.target, c = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n });
  t && a.addEventListener(e2, t, { once: true }), a.dispatchEvent(c);
}

export { e };
//# sourceMappingURL=handleAndDispatchCustomEvent-V4GPqTEe.mjs.map

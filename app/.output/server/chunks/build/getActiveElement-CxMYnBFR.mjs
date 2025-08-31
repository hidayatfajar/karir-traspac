function l() {
  let l2 = (void 0).activeElement;
  if (null == l2) return null;
  for (; null != l2 && null != l2.shadowRoot && null != l2.shadowRoot.activeElement; ) l2 = l2.shadowRoot.activeElement;
  return l2;
}

export { l };
//# sourceMappingURL=getActiveElement-CxMYnBFR.mjs.map

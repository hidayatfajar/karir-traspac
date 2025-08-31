import { l } from './getActiveElement-CxMYnBFR.mjs';

function t(o2) {
  return o2 ? "open" : "closed";
}
function n(t2) {
  const n2 = l();
  for (const e of t2) {
    if (e === n2) return;
    if (e.focus(), l() !== n2) return;
  }
}

export { n, t };
//# sourceMappingURL=utils-6y4URocx.mjs.map

import { m } from './useForwardPropsEmits-DnSfSOTI.mjs';
import { l } from './getActiveElement-CxMYnBFR.mjs';

function r(r2) {
  const a = m("", 1e3);
  return { search: a, handleTypeaheadSearch: (e2, r3) => {
    a.value = a.value + e2;
    {
      const e3 = l(), n = r3.map((e4) => {
        var _a, _b;
        var t2, r4;
        return { ...e4, textValue: (_b = (_a = null == (t2 = e4.value) ? void 0 : t2.textValue) != null ? _a : null == (r4 = e4.ref.textContent) ? void 0 : r4.trim()) != null ? _b : "" };
      }), l$1 = n.find((t2) => t2.ref === e3), o = function(e4, t2, r4) {
        const a2 = t2.length > 1 && Array.from(t2).every((e5) => e5 === t2[0]), n2 = a2 ? t2[0] : t2, l2 = r4 ? e4.indexOf(r4) : -1;
        let o2 = (u2 = e4, s = Math.max(l2, 0), u2.map((e5, t3) => u2[(s + t3) % u2.length]));
        var u2, s;
        1 === n2.length && (o2 = o2.filter((e5) => e5 !== r4));
        const i = o2.find((e5) => e5.toLowerCase().startsWith(n2.toLowerCase()));
        return i !== r4 ? i : void 0;
      }(n.map((e4) => e4.textValue), a.value, null == l$1 ? void 0 : l$1.textValue), u = n.find((e4) => e4.textValue === o);
      return u && u.ref.focus(), null == u ? void 0 : u.ref;
    }
  }, resetTypeahead: () => {
    a.value = "";
  } };
}

export { r };
//# sourceMappingURL=useTypeahead-CXda91ln.mjs.map

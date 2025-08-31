import { m } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { l } from './getActiveElement-CxMYnBFR.mjs';

function a(e2, t2, a2) {
  const n2 = a2.originalEvent.target, r = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: a2 });
  t2 && n2.addEventListener(e2, t2, { once: true }), n2.dispatchEvent(r);
}
function n(a2) {
  const n2 = m("", 1e3);
  return { search: n2, handleTypeaheadSearch: (e2, a3) => {
    n2.value = n2.value + e2;
    {
      const e3 = l(), r = a3.map((e4) => {
        var _a, _b;
        var t2, a4;
        return { ...e4, textValue: (_b = (_a = null == (t2 = e4.value) ? void 0 : t2.textValue) != null ? _a : null == (a4 = e4.ref.textContent) ? void 0 : a4.trim()) != null ? _b : "" };
      }), l$1 = r.find((t2) => t2.ref === e3), o = function(e4, t2, a4) {
        const n3 = t2.length > 1 && Array.from(t2).every((e5) => e5 === t2[0]), r2 = n3 ? t2[0] : t2, l2 = a4 ? e4.indexOf(a4) : -1;
        let o2 = (u2 = e4, s = Math.max(l2, 0), u2.map((e5, t3) => u2[(s + t3) % u2.length]));
        var u2, s;
        1 === r2.length && (o2 = o2.filter((e5) => e5 !== a4));
        const i = o2.find((e5) => e5.toLowerCase().startsWith(r2.toLowerCase()));
        return i !== a4 ? i : void 0;
      }(r.map((e4) => e4.textValue), n2.value, null == l$1 ? void 0 : l$1.textValue), u = r.find((e4) => e4.textValue === o);
      return u && u.ref.focus(), null == u ? void 0 : u.ref;
    }
  }, resetTypeahead: () => {
    n2.value = "";
  } };
}

export { a, n };
//# sourceMappingURL=useTypeahead-BwB5DMSn.mjs.map

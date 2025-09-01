import { v as Wt } from './server.mjs';
import { o as o$1 } from './ConfigProvider-BxfkmoHO.mjs';
import { O } from './useForwardPropsEmits-WwvTsoLV.mjs';

function n(t2) {
  const n2 = o$1({ dir: Wt.ref("ltr") });
  return Wt.computed(() => {
    var e2;
    return (null == t2 ? void 0 : t2.value) || (null == (e2 = n2.dir) ? void 0 : e2.value) || "ltr";
  });
}
function o() {
  const r2 = Wt.ref(), n2 = Wt.computed(() => {
    var e2, n3;
    return ["#text", "#comment"].includes(null == (e2 = r2.value) ? void 0 : e2.$el.nodeName) ? null == (n3 = r2.value) ? void 0 : n3.$el.nextElementSibling : O(r2);
  });
  return { primitiveElement: r2, currentElement: n2 };
}

export { n, o };
//# sourceMappingURL=usePrimitiveElement-DSug4YUi.mjs.map

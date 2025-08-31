import { O } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { v as Wt } from './server.mjs';

function t() {
  const t2 = Wt.ref(), n = Wt.computed(() => {
    var r2, n2;
    return ["#text", "#comment"].includes(null == (r2 = t2.value) ? void 0 : r2.$el.nodeName) ? null == (n2 = t2.value) ? void 0 : n2.$el.nextElementSibling : O(t2);
  });
  return { primitiveElement: t2, currentElement: n };
}

export { t };
//# sourceMappingURL=usePrimitiveElement-BYq1qwBL.mjs.map

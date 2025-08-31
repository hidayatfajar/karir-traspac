import { b, O } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { v as Wt, T as wm } from './server.mjs';
import { t } from './usePrimitiveElement-BYq1qwBL.mjs';

function a(o2) {
  return Wt.computed(() => {
    var r2;
    return !b(o2) || Boolean(null == (r2 = O(o2)) ? void 0 : r2.closest("form"));
  });
}
const i = "data-reka-collection-item";
function n(e2 = {}) {
  const { key: t2 = "", isProvider: a2 = false } = e2, n2 = `${t2}CollectionProvider`;
  let s;
  if (a2) {
    const e3 = Wt.ref(/* @__PURE__ */ new Map()), t3 = Wt.ref();
    s = { collectionRef: t3, itemMap: e3 }, Wt.provide(n2, s);
  } else s = Wt.inject(n2);
  const m = Wt.defineComponent({ name: "CollectionSlot", setup(e3, { slots: t3 }) {
    const { primitiveElement: a3, currentElement: i2 } = t();
    return Wt.watch(i2, () => {
      s.collectionRef.value = i2.value;
    }), () => Wt.h(wm, { ref: a3 }, t3);
  } }), u = Wt.defineComponent({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(e3, { slots: t3, attrs: a3 }) {
    const { primitiveElement: n3, currentElement: m2 } = t();
    return Wt.watchEffect((t4) => {
      if (m2.value) {
        const o2 = Wt.markRaw(m2.value);
        s.itemMap.value.set(o2, { ref: m2.value, value: e3.value }), t4(() => s.itemMap.value.delete(o2));
      }
    }), () => Wt.h(wm, { ...a3, [i]: "", ref: n3 }, t3);
  } });
  return { getItems: (e3 = false) => {
    const t3 = s.collectionRef.value;
    if (!t3) return [];
    const r2 = Array.from(t3.querySelectorAll(`[${i}]`)), o2 = Array.from(s.itemMap.value.values()).sort((e4, t4) => r2.indexOf(e4.ref) - r2.indexOf(t4.ref));
    return e3 ? o2 : o2.filter((e4) => "" !== e4.ref.dataset.disabled);
  }, reactiveItems: Wt.computed(() => Array.from(s.itemMap.value.values())), itemMapSize: Wt.computed(() => s.itemMap.value.size), CollectionSlot: m, CollectionItem: u };
}

export { a, n };
//# sourceMappingURL=Collection-B86A2tPF.mjs.map

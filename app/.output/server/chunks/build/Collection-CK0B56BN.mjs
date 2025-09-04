import { v as Wt, V as bm } from './server.mjs';
import { o as o$1 } from './usePrimitiveElement-BqlHGOiE.mjs';

const o = "data-reka-collection-item";
function l(l2 = {}) {
  const { key: i = "", isProvider: a = false } = l2, n = `${i}CollectionProvider`;
  let s;
  if (a) {
    const t2 = Wt.ref(/* @__PURE__ */ new Map()), r2 = Wt.ref();
    s = { collectionRef: r2, itemMap: t2 }, Wt.provide(n, s);
  } else s = Wt.inject(n);
  const m = Wt.defineComponent({ name: "CollectionSlot", setup(o2, { slots: l3 }) {
    const { primitiveElement: i2, currentElement: a2 } = o$1();
    return Wt.watch(a2, () => {
      s.collectionRef.value = a2.value;
    }), () => Wt.h(bm, { ref: i2 }, l3);
  } }), c = Wt.defineComponent({ name: "CollectionItem", inheritAttrs: false, props: { value: { validator: () => true } }, setup(l3, { slots: i2, attrs: a2 }) {
    const { primitiveElement: n2, currentElement: m2 } = o$1();
    return Wt.watchEffect((t2) => {
      if (m2.value) {
        const r2 = Wt.markRaw(m2.value);
        s.itemMap.value.set(r2, { ref: m2.value, value: l3.value }), t2(() => s.itemMap.value.delete(r2));
      }
    }), () => Wt.h(bm, { ...a2, [o]: "", ref: n2 }, i2);
  } });
  return { getItems: (e2 = false) => {
    const t2 = s.collectionRef.value;
    if (!t2) return [];
    const r2 = Array.from(t2.querySelectorAll(`[${o}]`)), l3 = Array.from(s.itemMap.value.values()).sort((e3, t3) => r2.indexOf(e3.ref) - r2.indexOf(t3.ref));
    return e2 ? l3 : l3.filter((e3) => "" !== e3.ref.dataset.disabled);
  }, reactiveItems: Wt.computed(() => Array.from(s.itemMap.value.values())), itemMapSize: Wt.computed(() => s.itemMap.value.size), CollectionSlot: m, CollectionItem: c };
}

export { l };
//# sourceMappingURL=Collection-CK0B56BN.mjs.map

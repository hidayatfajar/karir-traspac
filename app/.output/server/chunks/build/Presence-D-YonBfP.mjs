import { v as Wt, O as Sm } from './server.mjs';
import { o } from './ConfigProvider-BpvNyuo1.mjs';
import { E, O } from './useForwardPropsEmits-nQnKVeqj.mjs';

function r(e2, n2) {
  for (var t2 = 0; t2 < n2.length; t2++) {
    const o2 = n2[t2];
    if ("string" != typeof o2 && !Array.isArray(o2)) {
      for (const n3 in o2) if ("default" !== n3 && !(n3 in e2)) {
        const t3 = Object.getOwnPropertyDescriptor(o2, n3);
        t3 && Object.defineProperty(e2, n3, t3.get ? t3 : { enumerable: true, get: () => o2[n3] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }));
}
const i = r({ __proto__: null }, [Wt]);
let l = 0;
function u(n2, o2 = "reka") {
  var a2, r2;
  const u2 = o({ useId: void 0 });
  return Object.hasOwn(i, "useId") ? `${o2}-${null == (r2 = (a2 = Wt).useId) ? void 0 : r2.call(a2)}` : u2.useId ? `${o2}-${u2.useId()}` : `${o2}-${++l}`;
}
function s(n2, t2) {
  const o2 = Wt.ref(n2);
  return { state: o2, dispatch: (e2) => {
    o2.value = function(e3) {
      var _a;
      return (_a = t2[o2.value][e3]) != null ? _a : o2.value;
    }(e2);
  } };
}
function d(e2) {
  return e2 && getComputedStyle(e2).animationName || "none";
}
const c = Wt.defineComponent({ name: "Presence", props: { present: { type: Boolean, required: true }, forceMount: { type: Boolean } }, slots: {}, setup(t2, { slots: r2, expose: i2 }) {
  var l2;
  const { present: u2, forceMount: c2 } = Wt.toRefs(t2), v = Wt.ref(), { isPresent: m } = function(n2, t3) {
    var _a;
    var a2;
    const r3 = Wt.ref({}), i3 = Wt.ref("none"), l3 = Wt.ref(n2), u3 = n2.value ? "mounted" : "unmounted";
    let c3;
    const v2 = (_a = null == (a2 = t3.value) ? void 0 : a2.ownerDocument.defaultView) != null ? _a : E, { state: m2, dispatch: f2 } = s(u3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    Wt.watch(n2, async (n3, o2) => {
      var a3;
      const l4 = o2 !== n3;
      if (await Wt.nextTick(), l4) {
        const e2 = i3.value, l5 = d(t3.value);
        n3 ? f2("MOUNT") : "none" === l5 || "undefined" === l5 || "none" === (null == (a3 = r3.value) ? void 0 : a3.display) ? f2("UNMOUNT") : f2(o2 && e2 !== l5 ? "ANIMATION_OUT" : "UNMOUNT");
      }
    }, { immediate: true });
    const p2 = (e2) => {
      const n3 = d(t3.value), o2 = n3.includes(e2.animationName);
      if (m2.value, e2.target === t3.value && o2 && (f2("ANIMATION_END"), !l3.value)) {
        const e3 = t3.value.style.animationFillMode;
        t3.value.style.animationFillMode = "forwards", c3 = null == v2 ? void 0 : v2.setTimeout(() => {
          var n4;
          "forwards" === (null == (n4 = t3.value) ? void 0 : n4.style.animationFillMode) && (t3.value.style.animationFillMode = e3);
        });
      }
      e2.target === t3.value && "none" === n3 && f2("ANIMATION_END");
    }, N = (e2) => {
      e2.target === t3.value && (i3.value = d(t3.value));
    };
    return Wt.watch(t3, (e2, n3) => {
      e2 ? (r3.value = getComputedStyle(e2), e2.addEventListener("animationstart", N), e2.addEventListener("animationcancel", p2), e2.addEventListener("animationend", p2)) : (f2("ANIMATION_END"), void 0 !== c3 && (null == v2 || v2.clearTimeout(c3)), null == n3 || n3.removeEventListener("animationstart", N), null == n3 || n3.removeEventListener("animationcancel", p2), null == n3 || n3.removeEventListener("animationend", p2));
    }, { immediate: true }), Wt.watch(m2, () => {
      const e2 = d(t3.value);
      i3.value = "mounted" === m2.value ? e2 : "none";
    }), { isPresent: Wt.computed(() => ["mounted", "unmountSuspended"].includes(m2.value)) };
  }(u2, v);
  i2({ present: m });
  let f = r2.default({ present: m.value });
  f = Sm(f || []);
  const p = Wt.getCurrentInstance();
  if (f && (null == f ? void 0 : f.length) > 1) {
    const e2 = (null == (l2 = null == p ? void 0 : p.parent) ? void 0 : l2.type.name) ? `<${p.parent.type.name} />` : "component";
    throw new Error([`Detected an invalid children for \`${e2}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((e3) => `  - ${e3}`).join("\n")].join("\n"));
  }
  return () => c2.value || u2.value || m.value ? Wt.h(r2.default({ present: m.value })[0], { ref: (e2) => {
    const n2 = O(e2);
    return void 0 === (null == n2 ? void 0 : n2.hasAttribute) || ((null == n2 ? void 0 : n2.hasAttribute("data-reka-popper-content-wrapper")) ? v.value = n2.firstElementChild : v.value = n2), n2;
  } }) : null;
} });

export { c, u };
//# sourceMappingURL=Presence-D-YonBfP.mjs.map

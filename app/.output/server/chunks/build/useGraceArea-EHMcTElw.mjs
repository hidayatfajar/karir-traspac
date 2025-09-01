import { m, r as r$1 } from './useForwardPropsEmits-WwvTsoLV.mjs';
import { v as Wt } from './server.mjs';

function r(r2, o) {
  const a = m(false, 300), l = Wt.ref(null), u = r$1();
  function s() {
    l.value = null, a.value = false;
  }
  function i(e2, t2) {
    const n2 = e2.currentTarget, r3 = { x: e2.clientX, y: e2.clientY }, o2 = function(e3, t3, n3 = 5) {
      const r4 = [];
      switch (t3) {
        case "top":
          r4.push({ x: e3.x - n3, y: e3.y + n3 }, { x: e3.x + n3, y: e3.y + n3 });
          break;
        case "bottom":
          r4.push({ x: e3.x - n3, y: e3.y - n3 }, { x: e3.x + n3, y: e3.y - n3 });
          break;
        case "left":
          r4.push({ x: e3.x + n3, y: e3.y - n3 }, { x: e3.x + n3, y: e3.y + n3 });
          break;
        case "right":
          r4.push({ x: e3.x - n3, y: e3.y - n3 }, { x: e3.x - n3, y: e3.y + n3 });
      }
      return r4;
    }(r3, function(e3, t3) {
      const n3 = Math.abs(t3.top - e3.y), r4 = Math.abs(t3.bottom - e3.y), o3 = Math.abs(t3.right - e3.x), a2 = Math.abs(t3.left - e3.x);
      switch (Math.min(n3, r4, o3, a2)) {
        case a2:
          return "left";
        case o3:
          return "right";
        case n3:
          return "top";
        case r4:
          return "bottom";
        default:
          throw new Error("unreachable");
      }
    }(r3, n2.getBoundingClientRect())), u2 = function(e3) {
      const t3 = e3.slice();
      return t3.sort((e4, t4) => e4.x < t4.x ? -1 : e4.x > t4.x ? 1 : e4.y < t4.y ? -1 : e4.y > t4.y ? 1 : 0), function(e4) {
        if (e4.length <= 1) return e4.slice();
        const t4 = [];
        for (let r4 = 0; r4 < e4.length; r4++) {
          const n4 = e4[r4];
          for (; t4.length >= 2; ) {
            const e5 = t4[t4.length - 1], r5 = t4[t4.length - 2];
            if (!((e5.x - r5.x) * (n4.y - r5.y) >= (e5.y - r5.y) * (n4.x - r5.x))) break;
            t4.pop();
          }
          t4.push(n4);
        }
        t4.pop();
        const n3 = [];
        for (let r4 = e4.length - 1; r4 >= 0; r4--) {
          const t5 = e4[r4];
          for (; n3.length >= 2; ) {
            const e5 = n3[n3.length - 1], r5 = n3[n3.length - 2];
            if (!((e5.x - r5.x) * (t5.y - r5.y) >= (e5.y - r5.y) * (t5.x - r5.x))) break;
            n3.pop();
          }
          n3.push(t5);
        }
        return n3.pop(), 1 === t4.length && 1 === n3.length && t4[0].x === n3[0].x && t4[0].y === n3[0].y ? t4 : t4.concat(n3);
      }(t3);
    }([...o2, ...function(e3) {
      const { top: t3, right: n3, bottom: r4, left: o3 } = e3;
      return [{ x: o3, y: t3 }, { x: n3, y: t3 }, { x: n3, y: r4 }, { x: o3, y: r4 }];
    }(t2.getBoundingClientRect())]);
    l.value = u2, a.value = true;
  }
  return Wt.watchEffect((e2) => {
    if (r2.value && o.value) {
      const t2 = (e3) => i(e3, o.value), n2 = (e3) => i(e3, r2.value);
      r2.value.addEventListener("pointerleave", t2), o.value.addEventListener("pointerleave", n2), e2(() => {
        var e3, a2;
        null == (e3 = r2.value) || e3.removeEventListener("pointerleave", t2), null == (a2 = o.value) || a2.removeEventListener("pointerleave", n2);
      });
    }
  }), Wt.watchEffect((e2) => {
    var t2;
    if (l.value) {
      const n2 = (e3) => {
        var t3, n3;
        if (!(l.value && e3.target instanceof HTMLElement)) return;
        const a2 = e3.target, i2 = { x: e3.clientX, y: e3.clientY }, c = (null == (t3 = r2.value) ? void 0 : t3.contains(a2)) || (null == (n3 = o.value) ? void 0 : n3.contains(a2)), v = !function(e4, t4) {
          const { x: n4, y: r3 } = e4;
          let o2 = false;
          for (let a3 = 0, l2 = t4.length - 1; a3 < t4.length; l2 = a3++) {
            const e5 = t4[a3].x, u2 = t4[a3].y, s2 = t4[l2].x, i3 = t4[l2].y;
            u2 > r3 != i3 > r3 && n4 < (s2 - e5) * (r3 - u2) / (i3 - u2) + e5 && (o2 = !o2);
          }
          return o2;
        }(i2, l.value), x = !!a2.closest("[data-grace-area-trigger]");
        c ? s() : (v || x) && (s(), u.trigger());
      };
      null == (t2 = r2.value) || t2.ownerDocument.addEventListener("pointermove", n2), e2(() => {
        var e3;
        return null == (e3 = r2.value) ? void 0 : e3.ownerDocument.removeEventListener("pointermove", n2);
      });
    }
  }), { isPointerInTransit: a, onPointerExit: u.on };
}

export { r };
//# sourceMappingURL=useGraceArea-EHMcTElw.mjs.map

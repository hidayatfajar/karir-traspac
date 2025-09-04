import { F as sa, v as Wt } from './server.mjs';

function t() {
  const t2 = sa("toasts", () => []), a = Wt.ref(false), u = [];
  return { toasts: t2, add: function(e2) {
    const o = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, open: true, ...e2 };
    return u.push(o), async function() {
      if (!a.value && 0 !== u.length) {
        for (a.value = true; u.length > 0; ) {
          const e3 = u.shift();
          await Wt.nextTick(), t2.value = [...t2.value, e3].slice(-5);
        }
        a.value = false;
      }
    }(), o;
  }, update: function(e2, n2) {
    const a2 = t2.value.findIndex((n3) => n3.id === e2);
    -1 !== a2 && (t2.value[a2] = { ...t2.value[a2], ...n2 });
  }, remove: function(e2) {
    const n2 = t2.value.findIndex((n3) => n3.id === e2);
    -1 !== n2 && (t2.value[n2] = { ...t2.value[n2], open: false }), setTimeout(() => {
      t2.value = t2.value.filter((n3) => n3.id !== e2);
    }, 200);
  }, clear: function() {
    t2.value = [];
  } };
}

export { t };
//# sourceMappingURL=useToast-DJ8z3Z8V.mjs.map

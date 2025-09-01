import { V as Nm, v as Wt, j as fg } from './server.mjs';
import { k as defu } from '../_/nitro.mjs';

function n(a2) {
  return (o2, n2) => function(e2, a3, o3) {
    const n3 = fg(o3, `messages.${e2}`, e2);
    return n3.replace(/\{(\w+)\}/g, (e3, t2) => {
      var _a;
      return `${(_a = null == a3 ? void 0 : a3[t2]) != null ? _a : `{${t2}}`}`;
    });
  }(o2, n2, Wt.unref(a2));
}
function r(e2) {
  return defu(e2, { dir: "ltr" });
}
const c = r({ name: "English", code: "en", messages: { inputMenu: { noMatch: "No matching data", noData: "No data", create: 'Create "{label}"' }, calendar: { prevYear: "Previous year", nextYear: "Next year", prevMonth: "Previous month", nextMonth: "Next month" }, inputNumber: { increment: "Increment", decrement: "Decrement" }, commandPalette: { placeholder: "Type a command or search...", noMatch: "No matching data", noData: "No data", close: "Close", back: "Back" }, selectMenu: { noMatch: "No matching data", noData: "No data", create: 'Create "{label}"', search: "Search..." }, toast: { close: "Close" }, carousel: { prev: "Prev", next: "Next", goto: "Go to slide {slide}" }, modal: { close: "Close" }, slideover: { close: "Close" }, alert: { close: "Close" }, table: { noData: "No data" } } }), s = Symbol.for("nuxt-ui.locale-context"), l = Nm((t2) => {
  const a2 = t2 || Wt.toRef(Wt.inject(s));
  return function(t3) {
    return { lang: Wt.computed(() => Wt.unref(t3).name), code: Wt.computed(() => Wt.unref(t3).code), dir: Wt.computed(() => Wt.unref(t3).dir), locale: Wt.isRef(t3) ? t3 : Wt.ref(t3), t: n(t3) };
  }(Wt.computed(() => a2.value || c));
});

export { l };
//# sourceMappingURL=useLocale-BTFVrGyI.mjs.map

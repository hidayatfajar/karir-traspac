import { v as Wt$1, P as xm, a as Sm } from './server.mjs';
import { N, T, F, C, j as j$1, y, a, l, I } from './useForwardPropsEmits-DnSfSOTI.mjs';
import { o, n } from './usePrimitiveElement-BqlHGOiE.mjs';
import { o as o$1 } from './ConfigProvider-C3zU966T.mjs';
import { F as F$1 } from './useKbd-kRIii9yh.mjs';
import { H as He$1, q as qe$1, $ as $e$1, I as Ie$1, X as Xe$1 } from './PopperArrow-BQDIGHqG.mjs';
import { l as l$1 } from './Collection-CK0B56BN.mjs';
import { s, i, a as a$1, u, n as n$2, c as c$1, g, l as l$2, o as o$2, r as r$3, f as f$1, e } from './utils-iLtTyP0t.mjs';
import { N as N$1, T as T$1, E } from './useBodyScrollLock-BoUAQdAA.mjs';
import { t } from './useFocusGuards-AjDOEN6x.mjs';
import { r as r$1 } from './useTypeahead-CXda91ln.mjs';
import { f, b, c, h } from './usePortal-DzDMWCd7.mjs';
import { c as c$2 } from './RovingFocusGroup-CPhnOram.mjs';
import { r as r$2 } from './useArrowNavigation-Cic7byI7.mjs';
import { l as l$3 } from './getActiveElement-CxMYnBFR.mjs';
import { r } from './useGraceArea-B4Y81dwR.mjs';
import { n as n$1 } from './nullish-aV-w2MPu.mjs';

function z(e2, t2) {
  return e2 - t2 * Math.floor(e2 / t2);
}
const Z = 1721426;
function j(e2, t2, a2, n2) {
  let o2 = (t2 = q(e2, t2)) - 1, r2 = -2;
  return a2 <= 2 ? r2 = 0 : Q(t2) && (r2 = -1), 1721425 + 365 * o2 + Math.floor(o2 / 4) - Math.floor(o2 / 100) + Math.floor(o2 / 400) + Math.floor((367 * a2 - 362) / 12 + r2 + n2);
}
function Q(e2) {
  return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
}
function q(e2, t2) {
  return "BC" === e2 ? 1 - t2 : t2;
}
function X(e2) {
  let t2 = "AD";
  return e2 <= 0 && (t2 = "BC", e2 = 1 - e2), [t2, e2];
}
const ee = { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] };
class te {
  fromJulianDay(e2) {
    let t2 = e2, a2 = t2 - Z, n2 = Math.floor(a2 / 146097), o2 = z(a2, 146097), r2 = Math.floor(o2 / 36524), l2 = z(o2, 36524), i2 = Math.floor(l2 / 1461), u2 = z(l2, 1461), s2 = Math.floor(u2 / 365), d2 = 400 * n2 + 100 * r2 + 4 * i2 + s2 + (4 !== r2 && 4 !== s2 ? 1 : 0), [c2, f2] = X(d2), p2 = t2 - j(c2, f2, 1, 1), v2 = 2;
    t2 < j(c2, f2, 3, 1) ? v2 = 0 : Q(f2) && (v2 = 1);
    let h2 = Math.floor((12 * (p2 + v2) + 373) / 367), m2 = t2 - j(c2, f2, h2, 1) + 1;
    return new Xe(c2, f2, h2, m2);
  }
  toJulianDay(e2) {
    return j(e2.era, e2.year, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    return ee[Q(e2.year) ? "leapyear" : "standard"][e2.month - 1];
  }
  getMonthsInYear(e2) {
    return 12;
  }
  getDaysInYear(e2) {
    return Q(e2.year) ? 366 : 365;
  }
  getYearsInEra(e2) {
    return 9999;
  }
  getEras() {
    return ["BC", "AD"];
  }
  isInverseEra(e2) {
    return "BC" === e2.era;
  }
  balanceDate(e2) {
    e2.year <= 0 && (e2.era = "BC" === e2.era ? "AD" : "BC", e2.year = 1 - e2.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const ae = { "001": 1, AD: 1, AE: 6, AF: 6, AI: 1, AL: 1, AM: 1, AN: 1, AR: 1, AT: 1, AU: 1, AX: 1, AZ: 1, BA: 1, BE: 1, BG: 1, BH: 6, BM: 1, BN: 1, BY: 1, CH: 1, CL: 1, CM: 1, CN: 1, CR: 1, CY: 1, CZ: 1, DE: 1, DJ: 6, DK: 1, DZ: 6, EC: 1, EE: 1, EG: 6, ES: 1, FI: 1, FJ: 1, FO: 1, FR: 1, GB: 1, GE: 1, GF: 1, GP: 1, GR: 1, HR: 1, HU: 1, IE: 1, IQ: 6, IR: 6, IS: 1, IT: 1, JO: 6, KG: 1, KW: 6, KZ: 1, LB: 1, LI: 1, LK: 1, LT: 1, LU: 1, LV: 1, LY: 6, MC: 1, MD: 1, ME: 1, MK: 1, MN: 1, MQ: 1, MV: 5, MY: 1, NL: 1, NO: 1, NZ: 1, OM: 6, PL: 1, QA: 6, RE: 1, RO: 1, RS: 1, RU: 1, SD: 6, SE: 1, SI: 1, SK: 1, SM: 1, SY: 6, TJ: 1, TM: 1, TR: 1, UA: 1, UY: 1, UZ: 1, VA: 1, VN: 1, XK: 1 };
function ne(e2, t2) {
  return t2 = _e(t2, e2.calendar), e2.era === t2.era && e2.year === t2.year && e2.month === t2.month && e2.day === t2.day;
}
function oe(e2, t2) {
  return t2 = _e(t2, e2.calendar), e2 = he(e2), t2 = he(t2), e2.era === t2.era && e2.year === t2.year && e2.month === t2.month;
}
function re(e2, t2) {
  return ie(e2.calendar, t2.calendar) && ne(e2, t2);
}
function le(e2, t2) {
  return ie(e2.calendar, t2.calendar) && oe(e2, t2);
}
function ie(e2, t2) {
  var a2, n2, o2, r2;
  return null !== (r2 = null !== (o2 = null === (a2 = e2.isEqual) || void 0 === a2 ? void 0 : a2.call(e2, t2)) && void 0 !== o2 ? o2 : null === (n2 = t2.isEqual) || void 0 === n2 ? void 0 : n2.call(t2, e2)) && void 0 !== r2 ? r2 : e2.identifier === t2.identifier;
}
function ue(e2, t2) {
  return ne(e2, de(t2));
}
function se(e2, t2, a2) {
  let n2 = e2.calendar.toJulianDay(e2), o2 = function(e3) {
    let t3 = function(e4) {
      if (Intl.Locale) {
        let t5 = ye.get(e4);
        return t5 || (t5 = new Intl.Locale(e4).maximize().region, t5 && ye.set(e4, t5)), t5;
      }
      let t4 = e4.split("-")[1];
      return "u" === t4 ? void 0 : t4;
    }(e3);
    return t3 && ae[t3] || 0;
  }(t2), r2 = Math.ceil(n2 + 1 - o2) % 7;
  return r2 < 0 && (r2 += 7), r2;
}
function de(e2) {
  return t2 = function(e3) {
    return Se(Date.now(), e3);
  }(e2), new Xe(t2.calendar, t2.era, t2.year, t2.month, t2.day);
  var t2;
}
function ce(e2, t2) {
  return e2.calendar.toJulianDay(e2) - t2.calendar.toJulianDay(t2);
}
function fe(e2) {
  return 36e5 * e2.hour + 6e4 * e2.minute + 1e3 * e2.second + e2.millisecond;
}
let pe = null;
function ve() {
  return null == pe && (pe = new Intl.DateTimeFormat().resolvedOptions().timeZone), pe;
}
function he(e2) {
  return e2.subtract({ days: e2.day - 1 });
}
function me(e2) {
  return e2.add({ days: e2.calendar.getDaysInMonth(e2) - e2.day });
}
const ye = /* @__PURE__ */ new Map();
function ge(e2) {
  return be(q((e2 = _e(e2, new te())).era, e2.year), e2.month, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond);
}
function be(e2, t2, a2, n2, o2, r2, l2) {
  let i2 = /* @__PURE__ */ new Date();
  return i2.setUTCHours(n2, o2, r2, l2), i2.setUTCFullYear(e2, t2 - 1, a2), i2.getTime();
}
function we(e2, t2) {
  if ("UTC" === t2) return 0;
  if (e2 > 0 && t2 === ve()) return -6e4 * new Date(e2).getTimezoneOffset();
  let { year: a2, month: n2, day: o2, hour: r2, minute: l2, second: i2 } = Be(e2, t2);
  return be(a2, n2, o2, r2, l2, i2, 0) - 1e3 * Math.floor(e2 / 1e3);
}
const Ce = /* @__PURE__ */ new Map();
function Be(e2, t2) {
  let a2 = Ce.get(t2);
  a2 || (a2 = new Intl.DateTimeFormat("en-US", { timeZone: t2, hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), Ce.set(t2, a2));
  let n2 = a2.formatToParts(new Date(e2)), o2 = {};
  for (let r2 of n2) "literal" !== r2.type && (o2[r2.type] = r2.value);
  return { year: "BC" === o2.era || "B" === o2.era ? 1 - o2.year : +o2.year, month: +o2.month, day: +o2.day, hour: "24" === o2.hour ? 0 : +o2.hour, minute: +o2.minute, second: +o2.second };
}
const De = 864e5;
function ke(e2, t2, a2, n2) {
  return (a2 === n2 ? [a2] : [a2, n2]).filter((a3) => function(e3, t3, a4) {
    let n3 = Be(a4, t3);
    return e3.year === n3.year && e3.month === n3.month && e3.day === n3.day && e3.hour === n3.hour && e3.minute === n3.minute && e3.second === n3.second;
  }(e2, t2, a3));
}
function Pe(e2, t2, a2 = "compatible") {
  let n2 = Me(e2);
  if ("UTC" === t2) return ge(n2);
  if (t2 === ve() && "compatible" === a2) {
    n2 = _e(n2, new te());
    let e3 = /* @__PURE__ */ new Date(), t3 = q(n2.era, n2.year);
    return e3.setFullYear(t3, n2.month - 1, n2.day), e3.setHours(n2.hour, n2.minute, n2.second, n2.millisecond), e3.getTime();
  }
  let o2 = ge(n2), r2 = we(o2 - De, t2), l2 = we(o2 + De, t2), i2 = ke(n2, t2, o2 - r2, o2 - l2);
  if (1 === i2.length) return i2[0];
  if (i2.length > 1) switch (a2) {
    case "compatible":
    case "earlier":
      return i2[0];
    case "later":
      return i2[i2.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a2) {
    case "earlier":
      return Math.min(o2 - r2, o2 - l2);
    case "compatible":
    case "later":
      return Math.max(o2 - r2, o2 - l2);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function xe(e2, t2, a2 = "compatible") {
  return new Date(Pe(e2, t2, a2));
}
function Se(e2, t2) {
  let a2 = we(e2, t2), n2 = new Date(e2 + a2), o2 = n2.getUTCFullYear(), r2 = n2.getUTCMonth() + 1, l2 = n2.getUTCDate(), i2 = n2.getUTCHours(), u2 = n2.getUTCMinutes(), s2 = n2.getUTCSeconds(), d2 = n2.getUTCMilliseconds();
  return new nt(o2 < 1 ? "BC" : "AD", o2 < 1 ? 1 - o2 : o2, r2, l2, t2, a2, i2, u2, s2, d2);
}
function Oe(e2, t2) {
  return Se(e2.getTime(), t2);
}
function Me(e2, t2) {
  let a2 = 0, n2 = 0, o2 = 0, r2 = 0;
  if ("timeZone" in e2) ({ hour: a2, minute: n2, second: o2, millisecond: r2 } = e2);
  else if ("hour" in e2 && true) return e2;
  return new tt(e2.calendar, e2.era, e2.year, e2.month, e2.day, a2, n2, o2, r2);
}
function _e(e2, t2) {
  if (ie(e2.calendar, t2)) return e2;
  let a2 = t2.fromJulianDay(e2.calendar.toJulianDay(e2)), n2 = e2.copy();
  return n2.calendar = t2, n2.era = a2.era, n2.year = a2.year, n2.month = a2.month, n2.day = a2.day, Te(n2), n2;
}
function Ve(e2, t2, a2) {
  if (e2 instanceof nt) return e2.timeZone === t2 ? e2 : function(e3, t3) {
    let a3 = ge(e3) - e3.offset;
    return _e(Se(a3, t3), e3.calendar);
  }(e2, t2);
  return Se(Pe(e2, t2, a2), t2);
}
const Re = 36e5;
function Ie(e2, t2) {
  let a2 = e2.copy(), n2 = "hour" in a2 ? function(e3, t3) {
    return e3.hour += t3.hours || 0, e3.minute += t3.minutes || 0, e3.second += t3.seconds || 0, e3.millisecond += t3.milliseconds || 0, function(e4) {
      e4.second += Math.floor(e4.millisecond / 1e3), e4.millisecond = Le(e4.millisecond, 1e3), e4.minute += Math.floor(e4.second / 60), e4.second = Le(e4.second, 60), e4.hour += Math.floor(e4.minute / 60), e4.minute = Le(e4.minute, 60);
      let t4 = Math.floor(e4.hour / 24);
      return e4.hour = Le(e4.hour, 24), t4;
    }(e3);
  }(a2, t2) : 0;
  Ee(a2, t2.years || 0), a2.calendar.balanceYearMonth && a2.calendar.balanceYearMonth(a2, e2), a2.month += t2.months || 0, Ae(a2), Fe(a2), a2.day += 7 * (t2.weeks || 0), a2.day += t2.days || 0, a2.day += n2, function(e3) {
    for (; e3.day < 1; ) e3.month--, Ae(e3), e3.day += e3.calendar.getDaysInMonth(e3);
    for (; e3.day > e3.calendar.getDaysInMonth(e3); ) e3.day -= e3.calendar.getDaysInMonth(e3), e3.month++, Ae(e3);
  }(a2), a2.calendar.balanceDate && a2.calendar.balanceDate(a2), a2.year < 1 && (a2.year = 1, a2.month = 1, a2.day = 1);
  let o2 = a2.calendar.getYearsInEra(a2);
  if (a2.year > o2) {
    var r2, l2;
    let e3 = null === (r2 = (l2 = a2.calendar).isInverseEra) || void 0 === r2 ? void 0 : r2.call(l2, a2);
    a2.year = o2, a2.month = e3 ? 1 : a2.calendar.getMonthsInYear(a2), a2.day = e3 ? 1 : a2.calendar.getDaysInMonth(a2);
  }
  a2.month < 1 && (a2.month = 1, a2.day = 1);
  let i2 = a2.calendar.getMonthsInYear(a2);
  return a2.month > i2 && (a2.month = i2, a2.day = a2.calendar.getDaysInMonth(a2)), a2.day = Math.max(1, Math.min(a2.calendar.getDaysInMonth(a2), a2.day)), a2;
}
function Ee(e2, t2) {
  var a2, n2;
  (null === (a2 = (n2 = e2.calendar).isInverseEra) || void 0 === a2 ? void 0 : a2.call(n2, e2)) && (t2 = -t2), e2.year += t2;
}
function Ae(e2) {
  for (; e2.month < 1; ) Ee(e2, -1), e2.month += e2.calendar.getMonthsInYear(e2);
  let t2 = 0;
  for (; e2.month > (t2 = e2.calendar.getMonthsInYear(e2)); ) e2.month -= t2, Ee(e2, 1);
}
function Fe(e2) {
  e2.month = Math.max(1, Math.min(e2.calendar.getMonthsInYear(e2), e2.month)), e2.day = Math.max(1, Math.min(e2.calendar.getDaysInMonth(e2), e2.day));
}
function Te(e2) {
  e2.calendar.constrainDate && e2.calendar.constrainDate(e2), e2.year = Math.max(1, Math.min(e2.calendar.getYearsInEra(e2), e2.year)), Fe(e2);
}
function $e(e2) {
  let t2 = {};
  for (let a2 in e2) "number" == typeof e2[a2] && (t2[a2] = -e2[a2]);
  return t2;
}
function Ue(e2, t2) {
  return Ie(e2, $e(t2));
}
function Ne(e2, t2) {
  let a2 = e2.copy();
  return null != t2.era && (a2.era = t2.era), null != t2.year && (a2.year = t2.year), null != t2.month && (a2.month = t2.month), null != t2.day && (a2.day = t2.day), Te(a2), a2;
}
function We(e2, t2) {
  let a2 = e2.copy();
  var n2;
  return null != t2.hour && (a2.hour = t2.hour), null != t2.minute && (a2.minute = t2.minute), null != t2.second && (a2.second = t2.second), null != t2.millisecond && (a2.millisecond = t2.millisecond), (n2 = a2).millisecond = Math.max(0, Math.min(n2.millisecond, 1e3)), n2.second = Math.max(0, Math.min(n2.second, 59)), n2.minute = Math.max(0, Math.min(n2.minute, 59)), n2.hour = Math.max(0, Math.min(n2.hour, 23)), a2;
}
function Le(e2, t2) {
  let a2 = e2 % t2;
  return a2 < 0 && (a2 += t2), a2;
}
function Je(e2, t2, a2, n2) {
  let o2 = e2.copy();
  switch (t2) {
    case "era": {
      let t3 = e2.calendar.getEras(), r3 = t3.indexOf(e2.era);
      if (r3 < 0) throw new Error("Invalid era: " + e2.era);
      r3 = Ge(r3, a2, 0, t3.length - 1, null == n2 ? void 0 : n2.round), o2.era = t3[r3], Te(o2);
      break;
    }
    case "year":
      var r2, l2;
      (null === (r2 = (l2 = o2.calendar).isInverseEra) || void 0 === r2 ? void 0 : r2.call(l2, o2)) && (a2 = -a2), o2.year = Ge(e2.year, a2, -1 / 0, 9999, null == n2 ? void 0 : n2.round), o2.year === -1 / 0 && (o2.year = 1), o2.calendar.balanceYearMonth && o2.calendar.balanceYearMonth(o2, e2);
      break;
    case "month":
      o2.month = Ge(e2.month, a2, 1, e2.calendar.getMonthsInYear(e2), null == n2 ? void 0 : n2.round);
      break;
    case "day":
      o2.day = Ge(e2.day, a2, 1, e2.calendar.getDaysInMonth(e2), null == n2 ? void 0 : n2.round);
      break;
    default:
      throw new Error("Unsupported field " + t2);
  }
  return e2.calendar.balanceDate && e2.calendar.balanceDate(o2), Te(o2), o2;
}
function Ke(e2, t2, a2, n2) {
  let o2 = e2.copy();
  switch (t2) {
    case "hour": {
      let t3 = e2.hour, r2 = 0, l2 = 23;
      if (12 === (null == n2 ? void 0 : n2.hourCycle)) {
        let e3 = t3 >= 12;
        r2 = e3 ? 12 : 0, l2 = e3 ? 23 : 11;
      }
      o2.hour = Ge(t3, a2, r2, l2, null == n2 ? void 0 : n2.round);
      break;
    }
    case "minute":
      o2.minute = Ge(e2.minute, a2, 0, 59, null == n2 ? void 0 : n2.round);
      break;
    case "second":
      o2.second = Ge(e2.second, a2, 0, 59, null == n2 ? void 0 : n2.round);
      break;
    case "millisecond":
      o2.millisecond = Ge(e2.millisecond, a2, 0, 999, null == n2 ? void 0 : n2.round);
      break;
    default:
      throw new Error("Unsupported field " + t2);
  }
  return o2;
}
function Ge(e2, t2, a2, n2, o2 = false) {
  if (o2) {
    (e2 += Math.sign(t2)) < a2 && (e2 = n2);
    let o3 = Math.abs(t2);
    (e2 = t2 > 0 ? Math.ceil(e2 / o3) * o3 : Math.floor(e2 / o3) * o3) > n2 && (e2 = a2);
  } else (e2 += t2) < a2 ? e2 = n2 - (a2 - e2 - 1) : e2 > n2 && (e2 = a2 + (e2 - n2 - 1));
  return e2;
}
function Ye(e2, t2) {
  let a2;
  if (null != t2.years && 0 !== t2.years || null != t2.months && 0 !== t2.months || null != t2.weeks && 0 !== t2.weeks || null != t2.days && 0 !== t2.days) {
    a2 = Pe(Ie(Me(e2), { years: t2.years, months: t2.months, weeks: t2.weeks, days: t2.days }), e2.timeZone);
  } else a2 = ge(e2) - e2.offset;
  return a2 += t2.milliseconds || 0, a2 += 1e3 * (t2.seconds || 0), a2 += 6e4 * (t2.minutes || 0), a2 += 36e5 * (t2.hours || 0), _e(Se(a2, e2.timeZone), e2.calendar);
}
function He(e2) {
  let t2, a2 = _e(e2, new te());
  return t2 = "BC" === a2.era ? 1 === a2.year ? "0000" : "-" + String(Math.abs(1 - a2.year)).padStart(6, "00") : String(a2.year).padStart(4, "0"), `${t2}-${String(a2.month).padStart(2, "0")}-${String(a2.day).padStart(2, "0")}`;
}
function ze(e2) {
  return `${He(e2)}T${t2 = e2, `${String(t2.hour).padStart(2, "0")}:${String(t2.minute).padStart(2, "0")}:${String(t2.second).padStart(2, "0")}${t2.millisecond ? String(t2.millisecond / 1e3).slice(1) : ""}`}`;
  var t2;
}
function Ze(e2) {
  return `${ze(e2)}${function(e3) {
    let t2 = Math.sign(e3) < 0 ? "-" : "+";
    e3 = Math.abs(e3);
    let a2 = Math.floor(e3 / 36e5), n2 = e3 % 36e5 / 6e4;
    return `${t2}${String(a2).padStart(2, "0")}:${String(n2).padStart(2, "0")}`;
  }(e2.offset)}[${e2.timeZone}]`;
}
function je(e2, t2, a2) {
  !function(e3, t3) {
    if (t3.has(e3)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }(e2, t2), t2.set(e2, a2);
}
function Qe(e2) {
  let t2, a2 = "object" == typeof e2[0] ? e2.shift() : new te();
  if ("string" == typeof e2[0]) t2 = e2.shift();
  else {
    let e3 = a2.getEras();
    t2 = e3[e3.length - 1];
  }
  return [a2, t2, e2.shift(), e2.shift(), e2.shift()];
}
var qe = /* @__PURE__ */ new WeakMap();
class Xe {
  copy() {
    return this.era ? new Xe(this.calendar, this.era, this.year, this.month, this.day) : new Xe(this.calendar, this.year, this.month, this.day);
  }
  add(e2) {
    return Ie(this, e2);
  }
  subtract(e2) {
    return Ue(this, e2);
  }
  set(e2) {
    return Ne(this, e2);
  }
  cycle(e2, t2, a2) {
    return Je(this, e2, t2, a2);
  }
  toDate(e2) {
    return xe(this, e2);
  }
  toString() {
    return He(this);
  }
  compare(e2) {
    return ce(this, e2);
  }
  constructor(...e2) {
    je(this, qe, { writable: true, value: void 0 });
    let [t2, a2, n2, o2, r2] = Qe(e2);
    this.calendar = t2, this.era = a2, this.year = n2, this.month = o2, this.day = r2, Te(this);
  }
}
var et = /* @__PURE__ */ new WeakMap();
class tt {
  copy() {
    return this.era ? new tt(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new tt(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e2) {
    return Ie(this, e2);
  }
  subtract(e2) {
    return Ue(this, e2);
  }
  set(e2) {
    return Ne(We(this, e2), e2);
  }
  cycle(e2, t2, a2) {
    switch (e2) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Je(this, e2, t2, a2);
      default:
        return Ke(this, e2, t2, a2);
    }
  }
  toDate(e2, t2) {
    return xe(this, e2, t2);
  }
  toString() {
    return ze(this);
  }
  compare(e2) {
    let t2 = ce(this, e2);
    return 0 === t2 ? function(e3, t3) {
      return fe(e3) - fe(t3);
    }(this, Me(e2)) : t2;
  }
  constructor(...e2) {
    je(this, et, { writable: true, value: void 0 });
    let [t2, a2, n2, o2, r2] = Qe(e2);
    this.calendar = t2, this.era = a2, this.year = n2, this.month = o2, this.day = r2, this.hour = e2.shift() || 0, this.minute = e2.shift() || 0, this.second = e2.shift() || 0, this.millisecond = e2.shift() || 0, Te(this);
  }
}
var at = /* @__PURE__ */ new WeakMap();
class nt {
  copy() {
    return this.era ? new nt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new nt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e2) {
    return Ye(this, e2);
  }
  subtract(e2) {
    return function(e3, t2) {
      return Ye(e3, $e(t2));
    }(this, e2);
  }
  set(e2, t2) {
    return function(e3, t3, a2) {
      let n2 = Me(e3), o2 = We(Ne(n2, t3), t3);
      return 0 === o2.compare(n2) ? e3 : _e(Se(Pe(o2, e3.timeZone, a2), e3.timeZone), e3.calendar);
    }(this, e2, t2);
  }
  cycle(e2, t2, a2) {
    return function(e3, t3, a3, n2) {
      switch (t3) {
        case "hour": {
          let t4 = 0, o2 = 23;
          if (12 === (null == n2 ? void 0 : n2.hourCycle)) {
            let a4 = e3.hour >= 12;
            t4 = a4 ? 12 : 0, o2 = a4 ? 23 : 11;
          }
          let r2 = Me(e3), l2 = _e(We(r2, { hour: t4 }), new te()), i2 = [Pe(l2, e3.timeZone, "earlier"), Pe(l2, e3.timeZone, "later")].filter((t5) => Se(t5, e3.timeZone).day === l2.day)[0], u2 = _e(We(r2, { hour: o2 }), new te()), s2 = [Pe(u2, e3.timeZone, "earlier"), Pe(u2, e3.timeZone, "later")].filter((t5) => Se(t5, e3.timeZone).day === u2.day).pop(), d2 = ge(e3) - e3.offset, c2 = Math.floor(d2 / Re), f2 = d2 % Re;
          return d2 = Ge(c2, a3, Math.floor(i2 / Re), Math.floor(s2 / Re), null == n2 ? void 0 : n2.round) * Re + f2, _e(Se(d2, e3.timeZone), e3.calendar);
        }
        case "minute":
        case "second":
        case "millisecond":
          return Ke(e3, t3, a3, n2);
        case "era":
        case "year":
        case "month":
        case "day":
          return _e(Se(Pe(Je(Me(e3), t3, a3, n2), e3.timeZone), e3.timeZone), e3.calendar);
        default:
          throw new Error("Unsupported field " + t3);
      }
    }(this, e2, t2, a2);
  }
  toDate() {
    return function(e2) {
      let t2 = ge(e2) - e2.offset;
      return new Date(t2);
    }(this);
  }
  toString() {
    return Ze(this);
  }
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  compare(e2) {
    return this.toDate().getTime() - Ve(e2, this.timeZone).toDate().getTime();
  }
  constructor(...e2) {
    je(this, at, { writable: true, value: void 0 });
    let [t2, a2, n2, o2, r2] = Qe(e2), l2 = e2.shift(), i2 = e2.shift();
    this.calendar = t2, this.era = a2, this.year = n2, this.month = o2, this.day = r2, this.timeZone = l2, this.offset = i2, this.hour = e2.shift() || 0, this.minute = e2.shift() || 0, this.second = e2.shift() || 0, this.millisecond = e2.shift() || 0, Te(this);
  }
}
const ot = [[1868, 9, 8], [1912, 7, 30], [1926, 12, 25], [1989, 1, 8], [2019, 5, 1]], rt = [[1912, 7, 29], [1926, 12, 24], [1989, 1, 7], [2019, 4, 30]], lt = [1867, 1911, 1925, 1988, 2018], it = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function ut(e2) {
  const t2 = ot.findIndex(([t3, a2, n2]) => e2.year < t3 || (e2.year === t3 && e2.month < a2 || e2.year === t3 && e2.month === a2 && e2.day < n2));
  return -1 === t2 ? ot.length - 1 : 0 === t2 ? 0 : t2 - 1;
}
function st(e2) {
  let t2 = lt[it.indexOf(e2.era)];
  if (!t2) throw new Error("Unknown era: " + e2.era);
  return new Xe(e2.year + t2, e2.month, e2.day);
}
class dt extends te {
  fromJulianDay(e2) {
    let t2 = super.fromJulianDay(e2), a2 = ut(t2);
    return new Xe(this, it[a2], t2.year - lt[a2], t2.month, t2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(st(e2));
  }
  balanceDate(e2) {
    let t2 = st(e2), a2 = ut(t2);
    it[a2] !== e2.era && (e2.era = it[a2], e2.year = t2.year - lt[a2]), this.constrainDate(e2);
  }
  constrainDate(e2) {
    let t2 = it.indexOf(e2.era), a2 = rt[t2];
    if (null != a2) {
      let [n2, o2, r2] = a2, l2 = n2 - lt[t2];
      e2.year = Math.max(1, Math.min(l2, e2.year)), e2.year === l2 && (e2.month = Math.min(o2, e2.month), e2.month === o2 && (e2.day = Math.min(r2, e2.day)));
    }
    if (1 === e2.year && t2 >= 0) {
      let [, a3, n2] = ot[t2];
      e2.month = Math.max(a3, e2.month), e2.month === a3 && (e2.day = Math.max(n2, e2.day));
    }
  }
  getEras() {
    return it;
  }
  getYearsInEra(e2) {
    let t2 = it.indexOf(e2.era), a2 = ot[t2], n2 = ot[t2 + 1];
    if (null == n2) return 9999 - a2[0] + 1;
    let o2 = n2[0] - a2[0];
    return (e2.month < n2[1] || e2.month === n2[1] && e2.day < n2[2]) && o2++, o2;
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(st(e2));
  }
  getMinimumMonthInYear(e2) {
    let t2 = ct(e2);
    return t2 ? t2[1] : 1;
  }
  getMinimumDayInMonth(e2) {
    let t2 = ct(e2);
    return t2 && e2.month === t2[1] ? t2[2] : 1;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "japanese";
  }
}
function ct(e2) {
  if (1 === e2.year) {
    let t2 = it.indexOf(e2.era);
    return ot[t2];
  }
}
class ft extends te {
  fromJulianDay(e2) {
    let t2 = super.fromJulianDay(e2), a2 = q(t2.era, t2.year);
    return new Xe(this, a2 - -543, t2.month, t2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(pt(e2));
  }
  getEras() {
    return ["BE"];
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(pt(e2));
  }
  balanceDate() {
  }
  constructor(...e2) {
    super(...e2), this.identifier = "buddhist";
  }
}
function pt(e2) {
  let [t2, a2] = X(e2.year + -543);
  return new Xe(t2, a2, e2.month, e2.day);
}
const vt = 1911;
function ht(e2) {
  return "minguo" === e2.era ? e2.year + vt : 1 - e2.year + vt;
}
function mt(e2) {
  let t2 = e2 - vt;
  return t2 > 0 ? ["minguo", t2] : ["before_minguo", 1 - t2];
}
class yt extends te {
  fromJulianDay(e2) {
    let t2 = super.fromJulianDay(e2), a2 = q(t2.era, t2.year), [n2, o2] = mt(a2);
    return new Xe(this, n2, o2, t2.month, t2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(gt(e2));
  }
  getEras() {
    return ["before_minguo", "minguo"];
  }
  balanceDate(e2) {
    let [t2, a2] = mt(ht(e2));
    e2.era = t2, e2.year = a2;
  }
  isInverseEra(e2) {
    return "before_minguo" === e2.era;
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(gt(e2));
  }
  getYearsInEra(e2) {
    return "before_minguo" === e2.era ? 9999 : 8088;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "roc";
  }
}
function gt(e2) {
  let [t2, a2] = X(ht(e2));
  return new Xe(t2, a2, e2.month, e2.day);
}
const bt = 1948320, wt = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class Ct {
  fromJulianDay(e2) {
    let t2 = e2 - bt, a2 = 1 + Math.floor((33 * t2 + 3) / 12053), n2 = t2 - (365 * (a2 - 1) + Math.floor((8 * a2 + 21) / 33)), o2 = n2 < 216 ? Math.floor(n2 / 31) : Math.floor((n2 - 6) / 30);
    return new Xe(this, a2, o2 + 1, n2 - wt[o2] + 1);
  }
  toJulianDay(e2) {
    let t2 = 1948319 + 365 * (e2.year - 1) + Math.floor((8 * e2.year + 21) / 33);
    return t2 += wt[e2.month - 1], t2 += e2.day, t2;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e2) {
    if (e2.month <= 6) return 31;
    if (e2.month <= 11) return 30;
    return z(25 * e2.year + 11, 33) < 8 ? 30 : 29;
  }
  getEras() {
    return ["AP"];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
class Bt extends te {
  fromJulianDay(e2) {
    let t2, a2, n2, o2 = super.fromJulianDay(e2), r2 = o2.year - 78, l2 = e2 - j(o2.era, o2.year, 1, 1);
    if (l2 < 80 ? (r2--, t2 = Q(o2.year - 1) ? 31 : 30, l2 += t2 + 155 + 90 + 10) : (t2 = Q(o2.year) ? 31 : 30, l2 -= 80), l2 < t2) a2 = 1, n2 = l2 + 1;
    else {
      let e3 = l2 - t2;
      e3 < 155 ? (a2 = Math.floor(e3 / 31) + 2, n2 = e3 % 31 + 1) : (e3 -= 155, a2 = Math.floor(e3 / 30) + 7, n2 = e3 % 30 + 1);
    }
    return new Xe(this, r2, a2, n2);
  }
  toJulianDay(e2) {
    let t2, a2, n2 = e2.year + 78, [o2, r2] = X(n2);
    return Q(r2) ? (t2 = 31, a2 = j(o2, r2, 3, 21)) : (t2 = 30, a2 = j(o2, r2, 3, 22)), 1 === e2.month ? a2 + e2.day - 1 : (a2 += t2 + 31 * Math.min(e2.month - 2, 5), e2.month >= 8 && (a2 += 30 * (e2.month - 7)), a2 += e2.day - 1, a2);
  }
  getDaysInMonth(e2) {
    return 1 === e2.month && Q(e2.year + 78) || e2.month >= 2 && e2.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return ["saka"];
  }
  balanceDate() {
  }
  constructor(...e2) {
    super(...e2), this.identifier = "indian";
  }
}
const Dt = 1948440, kt = 1948439, Pt = 1300, xt = 1600;
function St(e2, t2, a2, n2) {
  return n2 + Math.ceil(29.5 * (a2 - 1)) + 354 * (t2 - 1) + Math.floor((3 + 11 * t2) / 30) + e2 - 1;
}
function Ot(e2, t2, a2) {
  let n2 = Math.floor((30 * (a2 - t2) + 10646) / 10631), o2 = Math.min(12, Math.ceil((a2 - (29 + St(t2, n2, 1, 1))) / 29.5) + 1), r2 = a2 - St(t2, n2, o2, 1) + 1;
  return new Xe(e2, n2, o2, r2);
}
function Mt(e2) {
  return (14 + 11 * e2) % 30 < 11;
}
class _t {
  fromJulianDay(e2) {
    return Ot(this, Dt, e2);
  }
  toJulianDay(e2) {
    return St(Dt, e2.year, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    let t2 = 29 + e2.month % 2;
    return 12 === e2.month && Mt(e2.year) && t2++, t2;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e2) {
    return Mt(e2.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return ["AH"];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class Vt extends _t {
  fromJulianDay(e2) {
    return Ot(this, kt, e2);
  }
  toJulianDay(e2) {
    return St(kt, e2.year, e2.month, e2.day);
  }
  constructor(...e2) {
    super(...e2), this.identifier = "islamic-tbla";
  }
}
let Rt, It;
function Et(e2) {
  return 460322 + It[e2 - Pt];
}
function At(e2, t2) {
  let a2 = 1 << 11 - (t2 - 1);
  return 0 === (Rt[e2 - Pt] & a2) ? 29 : 30;
}
function Ft(e2, t2) {
  let a2 = Et(e2);
  for (let n2 = 1; n2 < t2; n2++) a2 += At(e2, n2);
  return a2;
}
function Tt(e2) {
  return It[e2 + 1 - Pt] - It[e2 - Pt];
}
class $t extends _t {
  fromJulianDay(e2) {
    let t2 = e2 - Dt, a2 = Et(Pt), n2 = Et(xt);
    if (t2 < a2 || t2 > n2) return super.fromJulianDay(e2);
    {
      let e3 = 1299, a3 = 1, n3 = 1;
      for (; n3 > 0; ) {
        e3++, n3 = t2 - Et(e3) + 1;
        let o2 = Tt(e3);
        if (n3 === o2) {
          a3 = 12;
          break;
        }
        if (n3 < o2) {
          let t3 = At(e3, a3);
          for (a3 = 1; n3 > t3; ) n3 -= t3, a3++, t3 = At(e3, a3);
          break;
        }
      }
      return new Xe(this, e3, a3, t2 - Ft(e3, a3) + 1);
    }
  }
  toJulianDay(e2) {
    return e2.year < Pt || e2.year > xt ? super.toJulianDay(e2) : Dt + Ft(e2.year, e2.month) + (e2.day - 1);
  }
  getDaysInMonth(e2) {
    return e2.year < Pt || e2.year > xt ? super.getDaysInMonth(e2) : At(e2.year, e2.month);
  }
  getDaysInYear(e2) {
    return e2.year < Pt || e2.year > xt ? super.getDaysInYear(e2) : Tt(e2.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Rt || (Rt = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), (e2) => e2.charCodeAt(0)).buffer)), !It) {
      It = new Uint32Array(301);
      let e2 = 0;
      for (let t2 = Pt; t2 <= xt; t2++) {
        It[t2 - Pt] = e2;
        for (let a2 = 1; a2 <= 12; a2++) e2 += At(t2, a2);
      }
    }
  }
}
const Ut = 347997;
function Nt(e2) {
  return z(7 * e2 + 1, 19) < 7;
}
function Wt(e2) {
  let t2 = Math.floor((235 * e2 - 234) / 19), a2 = 12084 + 13753 * t2, n2 = 29 * t2 + Math.floor(a2 / 25920);
  return z(3 * (n2 + 1), 7) < 3 && (n2 += 1), n2;
}
function Lt(e2) {
  return Wt(e2) + function(e3) {
    let t2 = Wt(e3 - 1), a2 = Wt(e3);
    return Wt(e3 + 1) - a2 === 356 ? 2 : a2 - t2 === 382 ? 1 : 0;
  }(e2);
}
function Jt(e2) {
  return Lt(e2 + 1) - Lt(e2);
}
function Kt(e2, t2) {
  if (t2 >= 6 && !Nt(e2) && t2++, 4 === t2 || 7 === t2 || 9 === t2 || 11 === t2 || 13 === t2) return 29;
  let a2 = function(e3) {
    let t3 = Jt(e3);
    switch (t3 > 380 && (t3 -= 30), t3) {
      case 353:
        return 0;
      case 354:
        return 1;
      case 355:
        return 2;
    }
  }(e2);
  return 2 === t2 ? 2 === a2 ? 30 : 29 : 3 === t2 ? 0 === a2 ? 29 : 30 : 6 === t2 ? Nt(e2) ? 30 : 0 : 30;
}
class Gt {
  fromJulianDay(e2) {
    let t2 = e2 - Ut, a2 = 25920 * t2 / 765433, n2 = Math.floor((19 * a2 + 234) / 235) + 1, o2 = Lt(n2), r2 = Math.floor(t2 - o2);
    for (; r2 < 1; ) n2--, o2 = Lt(n2), r2 = Math.floor(t2 - o2);
    let l2 = 1, i2 = 0;
    for (; i2 < r2; ) i2 += Kt(n2, l2), l2++;
    return l2--, i2 -= Kt(n2, l2), new Xe(this, n2, l2, r2 - i2);
  }
  toJulianDay(e2) {
    let t2 = Lt(e2.year);
    for (let a2 = 1; a2 < e2.month; a2++) t2 += Kt(e2.year, a2);
    return t2 + e2.day + Ut;
  }
  getDaysInMonth(e2) {
    return Kt(e2.year, e2.month);
  }
  getMonthsInYear(e2) {
    return Nt(e2.year) ? 13 : 12;
  }
  getDaysInYear(e2) {
    return Jt(e2.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return ["AM"];
  }
  balanceYearMonth(e2, t2) {
    t2.year !== e2.year && (Nt(t2.year) && !Nt(e2.year) && t2.month > 6 ? e2.month-- : !Nt(t2.year) && Nt(e2.year) && t2.month > 6 && e2.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Yt = 1723856, Ht = 1824665, zt = 5500;
function Zt(e2, t2, a2, n2) {
  return e2 + 365 * t2 + Math.floor(t2 / 4) + 30 * (a2 - 1) + n2 - 1;
}
function jt(e2, t2) {
  let a2 = Math.floor(4 * (t2 - e2) / 1461), n2 = 1 + Math.floor((t2 - Zt(e2, a2, 1, 1)) / 30);
  return [a2, n2, t2 + 1 - Zt(e2, a2, n2, 1)];
}
function Qt(e2) {
  return Math.floor(e2 % 4 / 3);
}
function qt(e2, t2) {
  return t2 % 13 != 0 ? 30 : Qt(e2) + 5;
}
class Xt {
  fromJulianDay(e2) {
    let [t2, a2, n2] = jt(Yt, e2), o2 = "AM";
    return t2 <= 0 && (o2 = "AA", t2 += zt), new Xe(this, o2, t2, a2, n2);
  }
  toJulianDay(e2) {
    let t2 = e2.year;
    return "AA" === e2.era && (t2 -= zt), Zt(Yt, t2, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    return qt(e2.year, e2.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e2) {
    return 365 + Qt(e2.year);
  }
  getYearsInEra(e2) {
    return "AA" === e2.era ? 9999 : 9991;
  }
  getEras() {
    return ["AA", "AM"];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class ea extends Xt {
  fromJulianDay(e2) {
    let [t2, a2, n2] = jt(Yt, e2);
    return t2 += zt, new Xe(this, "AA", t2, a2, n2);
  }
  getEras() {
    return ["AA"];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "ethioaa";
  }
}
class ta extends Xt {
  fromJulianDay(e2) {
    let [t2, a2, n2] = jt(Ht, e2), o2 = "CE";
    return t2 <= 0 && (o2 = "BCE", t2 = 1 - t2), new Xe(this, o2, t2, a2, n2);
  }
  toJulianDay(e2) {
    let t2 = e2.year;
    return "BCE" === e2.era && (t2 = 1 - t2), Zt(Ht, t2, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    let t2 = e2.year;
    return "BCE" === e2.era && (t2 = 1 - t2), qt(t2, e2.month);
  }
  isInverseEra(e2) {
    return "BCE" === e2.era;
  }
  balanceDate(e2) {
    e2.year <= 0 && (e2.era = "BCE" === e2.era ? "CE" : "BCE", e2.year = 1 - e2.year);
  }
  getEras() {
    return ["BCE", "CE"];
  }
  getYearsInEra(e2) {
    return "BCE" === e2.era ? 9999 : 9715;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "coptic";
  }
}
let aa = /* @__PURE__ */ new Map();
class na {
  format(e2) {
    return this.formatter.format(e2);
  }
  formatToParts(e2) {
    return this.formatter.formatToParts(e2);
  }
  formatRange(e2, t2) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e2, t2);
    if (t2 < e2) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(e2)} \u2013 ${this.formatter.format(t2)}`;
  }
  formatRangeToParts(e2, t2) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e2, t2);
    if (t2 < e2) throw new RangeError("End date must be >= start date");
    let a2 = this.formatter.formatToParts(e2), n2 = this.formatter.formatToParts(t2);
    return [...a2.map((e3) => ({ ...e3, source: "startRange" })), { type: "literal", value: " \u2013 ", source: "shared" }, ...n2.map((e3) => ({ ...e3, source: "endRange" }))];
  }
  resolvedOptions() {
    let e2 = this.formatter.resolvedOptions();
    return function() {
      null == ia && (ia = "h12" === new Intl.DateTimeFormat("fr", { hour: "numeric", hour12: false }).resolvedOptions().hourCycle);
      return ia;
    }() && (this.resolvedHourCycle || (this.resolvedHourCycle = function(e3, t2) {
      if (!t2.timeStyle && !t2.hour) return;
      e3 = e3.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
      let a2 = ra(e3 += (e3.includes("-u-") ? "" : "-u") + "-nu-latn", { ...t2, timeZone: void 0 }), n2 = parseInt(a2.formatToParts(new Date(2020, 2, 3, 0)).find((e4) => "hour" === e4.type).value, 10), o2 = parseInt(a2.formatToParts(new Date(2020, 2, 3, 23)).find((e4) => "hour" === e4.type).value, 10);
      if (0 === n2 && 23 === o2) return "h23";
      if (24 === n2 && 23 === o2) return "h24";
      if (0 === n2 && 11 === o2) return "h11";
      if (12 === n2 && 11 === o2) return "h12";
      throw new Error("Unexpected hour cycle result");
    }(e2.locale, this.options)), e2.hourCycle = this.resolvedHourCycle, e2.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e2.calendar && (e2.calendar = "ethioaa"), e2;
  }
  constructor(e2, t2 = {}) {
    this.formatter = ra(e2, t2), this.options = t2;
  }
}
const oa = { true: { ja: "h11" }, false: {} };
function ra(e2, t2 = {}) {
  if ("boolean" == typeof t2.hour12 && function() {
    null == la && (la = "24" === new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false }).format(new Date(2020, 2, 3, 0)));
    return la;
  }()) {
    t2 = { ...t2 };
    let a3 = oa[String(t2.hour12)][e2.split("-")[0]], n3 = t2.hour12 ? "h12" : "h23";
    t2.hourCycle = null != a3 ? a3 : n3, delete t2.hour12;
  }
  let a2 = e2 + (t2 ? Object.entries(t2).sort((e3, t3) => e3[0] < t3[0] ? -1 : 1).join() : "");
  if (aa.has(a2)) return aa.get(a2);
  let n2 = new Intl.DateTimeFormat(e2, t2);
  return aa.set(a2, n2), n2;
}
let la = null;
let ia = null;
function ua(e2) {
  const { defaultValue: t2, defaultPlaceholder: a2, granularity: n2 = "day", locale: o2 = "en" } = e2;
  if (Array.isArray(t2) && t2.length) return t2.at(-1).copy();
  if (t2 && !Array.isArray(t2)) return t2.copy();
  if (a2) return a2.copy();
  const r2 = /* @__PURE__ */ new Date(), l2 = r2.getFullYear(), i2 = r2.getMonth() + 1, u2 = r2.getDate(), s2 = function(e3) {
    switch (e3) {
      case "buddhist":
        return new ft();
      case "ethiopic":
        return new Xt();
      case "ethioaa":
        return new ea();
      case "coptic":
        return new ta();
      case "hebrew":
        return new Gt();
      case "indian":
        return new Bt();
      case "islamic-civil":
        return new _t();
      case "islamic-tbla":
        return new Vt();
      case "islamic-umalqura":
        return new $t();
      case "japanese":
        return new dt();
      case "persian":
        return new Ct();
      case "roc":
        return new yt();
      default:
        return new te();
    }
  }(new na(o2).resolvedOptions().calendar);
  return ["hour", "minute", "second"].includes(n2 != null ? n2 : "day") ? _e(new tt(l2, i2, u2, 0, 0, 0), s2) : _e(new Xe(l2, i2, u2), s2);
}
function sa(e2, t2 = ve()) {
  return da(e2) ? e2.toDate() : e2.toDate(t2);
}
function da(e2) {
  return e2 instanceof nt;
}
function ca(e2) {
  return function(e3) {
    return e3 instanceof tt;
  }(e2) || da(e2);
}
function fa(e2) {
  if (e2 instanceof Date) {
    const t2 = e2.getFullYear(), a2 = e2.getMonth() + 1;
    return new Date(t2, a2, 0).getDate();
  }
  return e2.set({ day: 100 }).day;
}
function pa(e2, t2) {
  return e2.compare(t2) < 0;
}
function va(e2, t2) {
  return e2.compare(t2) > 0;
}
function ha(e2, t2) {
  const a2 = [];
  let n2 = e2.add({ days: 1 });
  const o2 = t2;
  for (; n2.compare(o2) < 0; ) a2.push(n2), n2 = n2.add({ days: 1 });
  return a2;
}
function ma(e2) {
  const { dateObj: t2, weekStartsOn: a2, fixedWeeks: n2, locale: o2 } = e2, r2 = fa(t2), l2 = Array.from({ length: r2 }, (e3, a3) => t2.set({ day: a3 + 1 })), i2 = he(t2), u2 = me(t2), s2 = function(e3, t3, a3) {
    const n3 = se(e3, a3);
    return t3 > n3 ? e3.subtract({ days: n3 + 7 - t3 }) : t3 === n3 ? e3 : e3.subtract({ days: n3 - t3 });
  }(i2, a2, o2), d2 = function(e3, t3, a3) {
    const n3 = se(e3, a3), o3 = 0 === t3 ? 6 : t3 - 1;
    return n3 === o3 ? e3 : n3 > o3 ? e3.add({ days: 7 - n3 + o3 }) : e3.add({ days: o3 - n3 });
  }(u2, a2, o2), c2 = ha(s2.subtract({ days: 1 }), i2), f2 = ha(u2, d2.add({ days: 1 })), p2 = c2.length + l2.length + f2.length;
  if (n2 && p2 < 42) {
    const e3 = 42 - p2;
    let a3 = f2[f2.length - 1];
    a3 || (a3 = me(t2));
    const n3 = Array.from({ length: e3 }, (e4, t3) => {
      const n4 = t3 + 1;
      return a3.add({ days: n4 });
    });
    f2.push(...n3);
  }
  const v2 = c2.concat(l2, f2), h2 = function(e3, t3) {
    const a3 = [];
    for (let n3 = 0; n3 < e3.length; n3 += t3) a3.push(e3.slice(n3, n3 + t3));
    return a3;
  }(v2, 7);
  return { value: t2, cells: v2, rows: h2 };
}
function ya(e2) {
  const { numberOfMonths: t2, dateObj: a2, ...n2 } = e2, o2 = [];
  if (!t2 || 1 === t2) return o2.push(ma({ ...n2, dateObj: a2 })), o2;
  o2.push(ma({ ...n2, dateObj: a2 }));
  for (let r2 = 1; r2 < t2; r2++) {
    const e3 = a2.add({ months: r2 });
    o2.push(ma({ ...n2, dateObj: e3 }));
  }
  return o2;
}
function ga(t2) {
  const a2 = function(t3, a3 = {}) {
    const n3 = Wt$1.ref(t3);
    function o3(e2, t4) {
      return new na(n3.value, { ...a3, ...t4 }).format(e2);
    }
    function r3(e2, t4 = {}) {
      return new na(n3.value, { ...a3, month: "long", ...t4 }).format(e2);
    }
    function l3(e2, t4) {
      return da(e2) ? new na(n3.value, { ...a3, ...t4, timeZone: e2.timeZone }).formatToParts(sa(e2)) : new na(n3.value, { ...a3, ...t4 }).formatToParts(sa(e2));
    }
    const i3 = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    return { setLocale: function(e2) {
      n3.value = e2;
    }, getLocale: function() {
      return n3.value;
    }, fullMonth: r3, fullYear: function(e2, t4 = {}) {
      return new na(n3.value, { ...a3, year: "numeric", ...t4 }).format(e2);
    }, fullMonthAndYear: function(e2, t4 = {}) {
      return new na(n3.value, { ...a3, month: "long", year: "numeric", ...t4 }).format(e2);
    }, toParts: l3, custom: o3, part: function(e2, t4, a4 = {}) {
      const n4 = l3(e2, { ...i3, ...a4 }).find((e3) => e3.type === t4);
      return n4 ? n4.value : "";
    }, dayPeriod: function(e2) {
      var t4;
      return "PM" === (null == (t4 = new na(n3.value, { ...a3, hour: "numeric", minute: "numeric" }).formatToParts(e2).find((e3) => "dayPeriod" === e3.type)) ? void 0 : t4.value) ? "PM" : "AM";
    }, selectedDate: function(e2, t4 = true) {
      return ca(e2) && t4 ? o3(sa(e2), { dateStyle: "long", timeStyle: "long" }) : o3(sa(e2), { dateStyle: "long" });
    }, dayOfWeek: function(e2, t4 = "narrow") {
      return new na(n3.value, { ...a3, weekday: t4 }).format(e2);
    }, getMonths: function() {
      const e2 = de(ve());
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((t4) => ({ label: r3(sa(e2.set({ month: t4 }))), value: t4 }));
    } };
  }(t2.locale.value), n2 = Wt$1.computed(() => {
    const e2 = { calendar: t2.placeholder.value.calendar.identifier };
    return "gregory" === t2.placeholder.value.calendar.identifier && "BC" === t2.placeholder.value.era && (e2.era = "short"), e2;
  }), o2 = Wt$1.ref(ya({ dateObj: t2.placeholder.value, weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value })), r2 = Wt$1.computed(() => o2.value.map((e2) => e2.value));
  const l2 = Wt$1.computed(() => o2.value.length ? o2.value[0].rows[0].map((e2) => a2.dayOfWeek(sa(e2), t2.weekdayFormat.value)) : []);
  Wt$1.watch(t2.placeholder, (e2) => {
    r2.value.some((t3) => le(t3, e2)) || (o2.value = ya({ dateObj: e2, weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value }));
  }), Wt$1.watch([t2.locale, t2.weekStartsOn, t2.fixedWeeks, t2.numberOfMonths], () => {
    o2.value = ya({ dateObj: t2.placeholder.value, weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value });
  });
  const i2 = Wt$1.computed(() => {
    if (!o2.value.length) return "";
    if (t2.locale.value !== a2.getLocale() && a2.setLocale(t2.locale.value), 1 === o2.value.length) {
      const e3 = o2.value[0].value;
      return `${a2.fullMonthAndYear(sa(e3), n2.value)}`;
    }
    const e2 = sa(o2.value[0].value), r3 = sa(o2.value[o2.value.length - 1].value), l3 = a2.fullMonth(e2, n2.value), i3 = a2.fullMonth(r3, n2.value), u3 = a2.fullYear(e2, n2.value), s2 = a2.fullYear(r3, n2.value);
    return u3 === s2 ? `${l3} - ${i3} ${s2}` : `${l3} ${u3} - ${i3} ${s2}`;
  }), u2 = Wt$1.computed(() => {
    var _a2;
    return `${(_a2 = t2.calendarLabel.value) != null ? _a2 : "Event Date"}, ${i2.value}`;
  });
  return { isDateDisabled: function(e2) {
    var a3;
    return !(!(null == (a3 = t2.isDateDisabled) ? void 0 : a3.call(t2, e2)) && !t2.disabled.value) || (!(!t2.maxValue.value || !va(e2, t2.maxValue.value)) || !(!t2.minValue.value || !pa(e2, t2.minValue.value)));
  }, isDateUnavailable: (e2) => {
    var a3;
    return !!(null == (a3 = t2.isDateUnavailable) ? void 0 : a3.call(t2, e2));
  }, isNextButtonDisabled: (e2) => {
    if (!t2.maxValue.value || !o2.value.length) return false;
    if (t2.disabled.value) return true;
    const a3 = o2.value[o2.value.length - 1].value;
    if (!e2 && !t2.nextPage.value) {
      return va(a3.add({ months: 1 }).set({ day: 1 }), t2.maxValue.value);
    }
    const n3 = function(e3, t3) {
      const a4 = t3(e3), n4 = a4.compare(e3), o3 = {};
      return n4 >= 7 && (o3.day = 1), n4 >= fa(e3) && (o3.month = 1), a4.set({ ...o3 });
    }(a3, e2 || t2.nextPage.value);
    return va(n3, t2.maxValue.value);
  }, isPrevButtonDisabled: (e2) => {
    if (!t2.minValue.value || !o2.value.length) return false;
    if (t2.disabled.value) return true;
    const a3 = o2.value[0].value;
    if (!e2 && !t2.prevPage.value) {
      return pa(a3.subtract({ months: 1 }).set({ day: 35 }), t2.minValue.value);
    }
    const n3 = function(e3, t3) {
      const a4 = t3(e3), n4 = e3.compare(a4), o3 = {};
      return n4 >= 7 && (o3.day = 35), n4 >= fa(e3) && (o3.month = 13), a4.set({ ...o3 });
    }(a3, e2 || t2.prevPage.value);
    return pa(n3, t2.minValue.value);
  }, grid: o2, weekdays: l2, visibleView: r2, isOutsideVisibleView: function(e2) {
    return !r2.value.some((t3) => le(e2, t3));
  }, formatter: a2, nextPage: (e2) => {
    const a3 = o2.value[0].value;
    if (!e2 && !t2.nextPage.value) {
      const e3 = ya({ dateObj: a3.add({ months: t2.pagedNavigation.value ? t2.numberOfMonths.value : 1 }), weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value });
      return o2.value = e3, void (t2.placeholder.value = e3[0].value.set({ day: 1 }));
    }
    const n3 = function(e3, t3) {
      return t3(e3);
    }(a3, e2 || t2.nextPage.value), r3 = ya({ dateObj: n3, weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value });
    o2.value = r3;
    const l3 = {};
    if (!e2) {
      const e3 = r3[0].value.compare(a3);
      e3 >= fa(a3) && (l3.day = 1), e3 >= 365 && (l3.month = 1);
    }
    t2.placeholder.value = r3[0].value.set({ ...l3 });
  }, prevPage: (e2) => {
    const a3 = o2.value[0].value;
    if (!e2 && !t2.prevPage.value) {
      const e3 = ya({ dateObj: a3.subtract({ months: t2.pagedNavigation.value ? t2.numberOfMonths.value : 1 }), weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value });
      return o2.value = e3, void (t2.placeholder.value = e3[0].value.set({ day: 1 }));
    }
    const n3 = function(e3, t3) {
      return t3(e3);
    }(a3, e2 || t2.prevPage.value), r3 = ya({ dateObj: n3, weekStartsOn: t2.weekStartsOn.value, locale: t2.locale.value, fixedWeeks: t2.fixedWeeks.value, numberOfMonths: t2.numberOfMonths.value });
    o2.value = r3;
    const l3 = {};
    if (!e2) {
      const e3 = a3.compare(r3[0].value);
      e3 >= fa(a3) && (l3.day = 1), e3 >= 365 && (l3.month = 1);
    }
    t2.placeholder.value = r3[0].value.set({ ...l3 });
  }, headingValue: i2, fullCalendarLabel: u2 };
}
function ba(t2) {
  const a2 = o$1({ locale: Wt$1.ref("en") });
  return Wt$1.computed(() => {
    var e2;
    return (null == t2 ? void 0 : t2.value) || (null == (e2 = a2.locale) ? void 0 : e2.value) || "en";
  });
}
const wa = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Ca = { role: "heading", "aria-level": "2" }, [Ba, Da] = T("CalendarRoot"), ka = Wt$1.defineComponent({ __name: "CalendarRoot", props: { defaultValue: { default: void 0 }, defaultPlaceholder: {}, placeholder: { default: void 0 }, pagedNavigation: { type: Boolean, default: false }, preventDeselect: { type: Boolean, default: false }, weekStartsOn: { default: 0 }, weekdayFormat: { default: "narrow" }, calendarLabel: {}, fixedWeeks: { type: Boolean, default: false }, maxValue: {}, minValue: {}, locale: {}, numberOfMonths: { default: 1 }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, initialFocus: { type: Boolean, default: false }, isDateDisabled: { type: Function, default: void 0 }, isDateUnavailable: { type: Function, default: void 0 }, dir: {}, nextPage: {}, prevPage: {}, modelValue: {}, multiple: { type: Boolean, default: false }, disableDaysOutsideCurrentView: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["update:modelValue", "update:placeholder"], setup(a2, { emit: n2 }) {
  var _a2;
  const r2 = a2, l2 = n2, { disabled: i2, readonly: u2, initialFocus: s2, pagedNavigation: d2, weekStartsOn: c2, weekdayFormat: v2, fixedWeeks: h2, multiple: m2, minValue: y2, maxValue: g2, numberOfMonths: b2, preventDeselect: w2, isDateDisabled: C2, isDateUnavailable: B2, calendarLabel: D2, defaultValue: k2, nextPage: P2, prevPage: x2, dir: S2, locale: O2, disableDaysOutsideCurrentView: M2 } = Wt$1.toRefs(r2), { primitiveElement: _2, currentElement: V2 } = o(), R2 = ba(O2), I2 = n(S2), E2 = C(r2, "modelValue", l2, { defaultValue: k2.value, passive: void 0 === r2.modelValue }), A2 = ua({ defaultPlaceholder: r2.placeholder, defaultValue: E2.value, locale: r2.locale }), F2 = C(r2, "placeholder", l2, { defaultValue: (_a2 = r2.defaultPlaceholder) != null ? _a2 : A2.copy(), passive: void 0 === r2.placeholder });
  function T2(e2) {
    F2.value = e2.copy();
  }
  const { fullCalendarLabel: $2, headingValue: U2, isDateDisabled: N2, isDateUnavailable: W2, isNextButtonDisabled: L2, isPrevButtonDisabled: J2, weekdays: K2, isOutsideVisibleView: G2, nextPage: Y2, prevPage: H2, formatter: z2, grid: Z2 } = ga({ locale: R2, placeholder: F2, weekStartsOn: c2, fixedWeeks: h2, numberOfMonths: b2, minValue: y2, maxValue: g2, disabled: i2, weekdayFormat: v2, pagedNavigation: d2, isDateDisabled: C2.value, isDateUnavailable: B2.value, calendarLabel: D2, nextPage: P2, prevPage: x2 }), { isInvalid: j2, isDateSelected: Q2 } = function(t2) {
    return { isDateSelected: function(e2) {
      return Array.isArray(t2.date.value) ? t2.date.value.some((t3) => ne(t3, e2)) : !!t2.date.value && ne(t2.date.value, e2);
    }, isInvalid: Wt$1.computed(() => {
      var e2, a3, n3, o2;
      if (Array.isArray(t2.date.value)) {
        if (!t2.date.value.length) return false;
        for (const n4 of t2.date.value) {
          if (null == (e2 = t2.isDateDisabled) ? void 0 : e2.call(t2, n4)) return true;
          if (null == (a3 = t2.isDateUnavailable) ? void 0 : a3.call(t2, n4)) return true;
        }
      } else {
        if (!t2.date.value) return false;
        if (null == (n3 = t2.isDateDisabled) ? void 0 : n3.call(t2, t2.date.value)) return true;
        if (null == (o2 = t2.isDateUnavailable) ? void 0 : o2.call(t2, t2.date.value)) return true;
      }
      return false;
    }) };
  }({ date: E2, isDateDisabled: N2, isDateUnavailable: W2 });
  return Wt$1.watch(E2, (e2) => {
    if (Array.isArray(e2) && e2.length) {
      const t2 = e2[e2.length - 1];
      t2 && !re(F2.value, t2) && T2(t2);
    } else Array.isArray(e2) || !e2 || re(F2.value, e2) || T2(e2);
  }), Da({ isDateUnavailable: W2, dir: I2, isDateDisabled: N2, locale: R2, formatter: z2, modelValue: E2, placeholder: F2, disabled: i2, initialFocus: s2, pagedNavigation: d2, grid: Z2, weekDays: K2, weekStartsOn: c2, weekdayFormat: v2, fixedWeeks: h2, multiple: m2, numberOfMonths: b2, readonly: u2, preventDeselect: w2, fullCalendarLabel: $2, headingValue: U2, isInvalid: j2, isDateSelected: Q2, isNextButtonDisabled: L2, isPrevButtonDisabled: J2, isOutsideVisibleView: G2, nextPage: Y2, prevPage: H2, parentElement: V2, onPlaceholderChange: T2, onDateChange: function(e2) {
    if (m2.value) if (E2.value) {
      if (Array.isArray(E2.value)) {
        if (-1 === E2.value.findIndex((t2) => ne(t2, e2))) E2.value = [...E2.value, e2];
        else if (!w2.value) {
          const t2 = E2.value.filter((t3) => !ne(t3, e2));
          if (!t2.length) return F2.value = e2.copy(), void (E2.value = void 0);
          E2.value = t2.map((e3) => e3.copy());
        }
      }
    } else E2.value = [e2.copy()];
    else {
      if (!E2.value) return void (E2.value = e2.copy());
      !w2.value && re(E2.value, e2) ? (F2.value = e2.copy(), E2.value = void 0) : E2.value = e2.copy();
    }
  }, disableDaysOutsideCurrentView: M2 }), (a3, n3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { ref_key: "primitiveElement", ref: _2, as: a3.as, "as-child": a3.asChild, role: "application", "aria-label": Wt$1.unref($2), "data-readonly": Wt$1.unref(u2) ? "" : void 0, "data-disabled": Wt$1.unref(i2) ? "" : void 0, "data-invalid": Wt$1.unref(j2) ? "" : void 0, dir: Wt$1.unref(I2) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { date: Wt$1.unref(F2), grid: Wt$1.unref(Z2), weekDays: Wt$1.unref(K2), weekStartsOn: Wt$1.unref(c2), locale: Wt$1.unref(R2), fixedWeeks: Wt$1.unref(h2), modelValue: Wt$1.unref(E2) }), Wt$1.createElementVNode("div", wa, [Wt$1.createElementVNode("div", Ca, Wt$1.toDisplayString(Wt$1.unref($2)), 1)])]), _: 3 }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
} }), Pa = Wt$1.defineComponent({ __name: "CalendarCell", props: { date: {}, asChild: { type: Boolean }, as: { default: "td" } }, setup(a2) {
  const n2 = Ba();
  return (a3, o2) => {
    var r2, l2;
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { as: a3.as, "as-child": a3.asChild, role: "gridcell", "aria-selected": !!Wt$1.unref(n2).isDateSelected(a3.date) || void 0, "aria-disabled": Wt$1.unref(n2).isDateDisabled(a3.date) || (null == (l2 = (r2 = Wt$1.unref(n2)).isDateUnavailable) ? void 0 : l2.call(r2, a3.date)) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value, "data-disabled": Wt$1.unref(n2).isDateDisabled(a3.date) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value ? "" : void 0 }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
  };
} });
function xa(e2) {
  var _a2;
  return (_a2 = Array.from(e2.querySelectorAll("[data-reka-calendar-cell-trigger]:not([data-outside-view]):not([data-outside-visible-view])"))) != null ? _a2 : [];
}
const Sa = Wt$1.defineComponent({ __name: "CalendarCellTrigger", props: { day: {}, month: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2, o2 = F$1(), r2 = Ba(), { primitiveElement: l2, currentElement: i2 } = o(), u2 = Wt$1.computed(() => n2.day.day.toLocaleString(r2.locale.value)), s2 = Wt$1.computed(() => r2.formatter.custom(sa(n2.day), { weekday: "long", month: "long", day: "numeric", year: "numeric" })), d2 = Wt$1.computed(() => {
    var _a2;
    var e2;
    return (_a2 = null == (e2 = r2.isDateUnavailable) ? void 0 : e2.call(r2, n2.day)) != null ? _a2 : false;
  }), c2 = Wt$1.computed(() => ue(n2.day, ve())), p2 = Wt$1.computed(() => !oe(n2.day, n2.month)), v2 = Wt$1.computed(() => r2.isOutsideVisibleView(n2.day)), m2 = Wt$1.computed(() => r2.isDateDisabled(n2.day) || r2.disableDaysOutsideCurrentView.value && p2.value), y2 = Wt$1.computed(() => !r2.disabled.value && ne(n2.day, r2.placeholder.value)), g2 = Wt$1.computed(() => r2.isDateSelected(n2.day));
  function b2(e2) {
    var t2;
    r2.readonly.value || r2.isDateDisabled(e2) || (null == (t2 = r2.isDateUnavailable) ? void 0 : t2.call(r2, e2)) || r2.onDateChange(e2);
  }
  function w2() {
    m2.value || b2(n2.day);
  }
  function C2(t2) {
    if (m2.value) return;
    t2.preventDefault(), t2.stopPropagation();
    const a3 = r2.parentElement.value, l3 = "rtl" === r2.dir.value ? -1 : 1;
    switch (t2.code) {
      case o2.ARROW_RIGHT:
        u3(i2.value, l3);
        break;
      case o2.ARROW_LEFT:
        u3(i2.value, -l3);
        break;
      case o2.ARROW_UP:
        u3(i2.value, -7);
        break;
      case o2.ARROW_DOWN:
        u3(i2.value, 7);
        break;
      case o2.ENTER:
      case o2.SPACE_CODE:
        b2(n2.day);
    }
    function u3(t3, n3) {
      const o3 = xa(a3);
      if (!o3.length) return;
      const l4 = o3.indexOf(t3) + n3;
      if (l4 >= 0 && l4 < o3.length) return o3[l4].hasAttribute("data-disabled") && u3(o3[l4], n3), void o3[l4].focus();
      if (l4 < 0) {
        if (r2.isPrevButtonDisabled()) return;
        return r2.prevPage(), void Wt$1.nextTick(() => {
          const e2 = xa(a3);
          if (!e2.length) return;
          if (!r2.pagedNavigation.value && r2.numberOfMonths.value > 1) {
            const t5 = fa(r2.placeholder.value) - Math.abs(l4);
            return e2[t5].hasAttribute("data-disabled") && u3(e2[t5], n3), void e2[t5].focus();
          }
          const t4 = e2.length - Math.abs(l4);
          e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), e2[t4].focus();
        });
      }
      if (l4 >= o3.length) {
        if (r2.isNextButtonDisabled()) return;
        r2.nextPage(), Wt$1.nextTick(() => {
          const e2 = xa(a3);
          if (!e2.length) return;
          if (!r2.pagedNavigation.value && r2.numberOfMonths.value > 1) {
            const t5 = fa(r2.placeholder.value.add({ months: r2.numberOfMonths.value - 1 })), a4 = l4 - o3.length + (e2.length - t5);
            return e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), void e2[a4].focus();
          }
          const t4 = l4 - o3.length;
          e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), e2[t4].focus();
        });
      }
    }
  }
  return (a3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps({ ref_key: "primitiveElement", ref: l2 }, n2, { role: "button", "aria-label": s2.value, "data-reka-calendar-cell-trigger": "", "aria-disabled": !(!m2.value && !d2.value) || void 0, "data-selected": !!g2.value || void 0, "data-value": a3.day.toString(), "data-disabled": m2.value ? "" : void 0, "data-unavailable": d2.value ? "" : void 0, "data-today": c2.value ? "" : void 0, "data-outside-view": p2.value ? "" : void 0, "data-outside-visible-view": v2.value ? "" : void 0, "data-focused": y2.value ? "" : void 0, tabindex: y2.value ? 0 : p2.value || m2.value ? void 0 : -1, onClick: w2, onKeydown: [Wt$1.withKeys(C2, ["up", "down", "left", "right", "space", "enter"]), o3[0] || (o3[0] = Wt$1.withKeys(Wt$1.withModifiers(() => {
  }, ["prevent"]), ["enter"]))] }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { dayValue: u2.value, disabled: m2.value, today: c2.value, selected: g2.value, outsideView: p2.value, outsideVisibleView: v2.value, unavailable: d2.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(u2.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
} }), Oa = Wt$1.defineComponent({ __name: "CalendarGrid", props: { asChild: { type: Boolean }, as: { default: "table" } }, setup(a2) {
  const n2 = a2, o2 = Ba(), r2 = Wt$1.computed(() => !!o2.disabled.value || void 0), l2 = Wt$1.computed(() => !!o2.readonly.value || void 0);
  return (a3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { tabindex: "-1", role: "grid", "aria-readonly": l2.value, "aria-disabled": r2.value, "data-readonly": l2.value && "", "data-disabled": r2.value && "" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
} }), Ma = Wt$1.defineComponent({ __name: "CalendarGridBody", props: { asChild: { type: Boolean }, as: { default: "tbody" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), _a = Wt$1.defineComponent({ __name: "CalendarGridHead", props: { asChild: { type: Boolean }, as: { default: "thead" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "aria-hidden": "true" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Va = Wt$1.defineComponent({ __name: "CalendarGridRow", props: { asChild: { type: Boolean }, as: { default: "tr" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Ra = Wt$1.defineComponent({ __name: "CalendarHeadCell", props: { asChild: { type: Boolean }, as: { default: "th" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Ia = Wt$1.defineComponent({ __name: "CalendarHeader", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Ea = Wt$1.defineComponent({ __name: "CalendarHeading", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2, o2 = Ba();
  return (a3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "data-disabled": Wt$1.unref(o2).disabled.value ? "" : void 0 }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { headingValue: Wt$1.unref(o2).headingValue.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(Wt$1.unref(o2).headingValue.value), 1)])]), _: 3 }, 16, ["data-disabled"]));
} }), Aa = Wt$1.defineComponent({ __name: "CalendarNext", props: { nextPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = Wt$1.computed(() => r2.disabled.value || r2.isNextButtonDisabled(n2.nextPage)), r2 = Ba();
  return (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { as: n2.as, "as-child": n2.asChild, "aria-label": "Next page", type: "button" === a3.as ? "button" : void 0, "aria-disabled": o2.value || void 0, "data-disabled": o2.value || void 0, disabled: o2.value, onClick: l2[0] || (l2[0] = (t2) => Wt$1.unref(r2).nextPage(n2.nextPage)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { disabled: o2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Next page "))])]), _: 3 }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
} }), Fa = Wt$1.defineComponent({ __name: "CalendarPrev", props: { prevPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = Wt$1.computed(() => r2.disabled.value || r2.isPrevButtonDisabled(n2.prevPage)), r2 = Ba();
  return (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { "aria-label": "Previous page", as: n2.as, "as-child": n2.asChild, type: "button" === a3.as ? "button" : void 0, "aria-disabled": o2.value || void 0, "data-disabled": o2.value || void 0, disabled: o2.value, onClick: l2[0] || (l2[0] = (t2) => Wt$1.unref(r2).prevPage(n2.prevPage)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { disabled: o2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Prev page "))])]), _: 3 }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
} }), Ta = Wt$1.defineComponent({ __name: "MenuArrow", props: { width: {}, height: {}, rounded: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(qe$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} });
const $a = l(function() {
  return Wt$1.ref(false);
}), [Ua, Na] = T(["MenuRoot", "MenuSub"], "MenuContext"), [Wa, La] = T("MenuRoot"), Ja = Wt$1.defineComponent({ __name: "MenuRoot", props: { open: { type: Boolean, default: false }, dir: {}, modal: { type: Boolean, default: true } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = a2, { modal: l2, dir: i2 } = Wt$1.toRefs(n2), u2 = n(i2), s2 = C(n2, "open", r2), d2 = Wt$1.ref(), c2 = $a();
  return Na({ open: s2, onOpenChange: (e2) => {
    s2.value = e2;
  }, content: d2, onContentChange: (e2) => {
    d2.value = e2;
  } }), La({ onClose: () => {
    s2.value = false;
  }, isUsingKeyboardRef: c2, dir: u2, modal: l2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }));
} }), [Ka, Ga] = T("MenuContent"), Ya = Wt$1.defineComponent({ __name: "MenuContentImpl", props: Wt$1.mergeDefaults({ loop: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, disableOutsideScroll: { type: Boolean }, trapFocus: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, { ...Xe$1 }), emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, r2 = Ua(), i2 = Wa(), { trapFocus: u2, disableOutsidePointerEvents: s2, loop: d2 } = Wt$1.toRefs(n2);
  t(), N$1(s2.value);
  const c2 = Wt$1.ref(""), f2 = Wt$1.ref(0), p2 = Wt$1.ref(0), v2 = Wt$1.ref(null), h2 = Wt$1.ref("right"), m2 = Wt$1.ref(0), y2 = Wt$1.ref(null), b2 = Wt$1.ref(), { forwardRef: w2, currentElement: C2 } = N(), { handleTypeaheadSearch: O2 } = r$1();
  function M2(e2) {
    var t3, a3;
    return h2.value === (null == (t3 = v2.value) ? void 0 : t3.side) && l$2(e2, null == (a3 = v2.value) ? void 0 : a3.area);
  }
  async function _2(e2) {
    var t3;
    o2("openAutoFocus", e2), e2.defaultPrevented || (e2.preventDefault(), null == (t3 = C2.value) || t3.focus({ preventScroll: true }));
  }
  function V2(e2) {
    var _a2;
    var t3;
    if (e2.defaultPrevented) return;
    const a3 = e2.target.closest("[data-reka-menu-content]") === e2.currentTarget, n3 = e2.ctrlKey || e2.altKey || e2.metaKey, o3 = 1 === e2.key.length, r3 = r$2(e2, l$3(), C2.value, { loop: d2.value, arrowKeyOptions: "vertical", dir: null == i2 ? void 0 : i2.dir.value, focus: true, attributeName: "[data-reka-collection-item]:not([data-disabled])" });
    if (r3) return null == r3 ? void 0 : r3.focus();
    if ("Space" === e2.code) return;
    const l2 = (_a2 = null == (t3 = b2.value) ? void 0 : t3.getItems()) != null ? _a2 : [];
    if (a3 && ("Tab" === e2.key && e2.preventDefault(), !n3 && o3 && O2(e2.key, l2)), e2.target !== C2.value) return;
    if (!o$2.includes(e2.key)) return;
    e2.preventDefault();
    const u3 = [...l2.map((e3) => e3.ref)];
    r$3.includes(e2.key) && u3.reverse(), f$1(u3);
  }
  function R2(e2) {
    var t3, a3;
    (null == (a3 = null == (t3 = null == e2 ? void 0 : e2.currentTarget) ? void 0 : t3.contains) ? void 0 : a3.call(t3, e2.target)) || ((void 0).clearTimeout(f2.value), c2.value = "");
  }
  function I2(e2) {
    var t3;
    if (!g(e2)) return;
    const a3 = e2.target, n3 = m2.value !== e2.clientX;
    if ((null == (t3 = null == e2 ? void 0 : e2.currentTarget) ? void 0 : t3.contains(a3)) && n3) {
      const t4 = e2.clientX > m2.value ? "right" : "left";
      h2.value = t4, m2.value = e2.clientX;
    }
  }
  return Wt$1.watch(C2, (e2) => {
    r2.onContentChange(e2);
  }), Ga({ onItemEnter: (e2) => !!M2(e2), onItemLeave: (e2) => {
    var t3;
    M2(e2) || (null == (t3 = C2.value) || t3.focus(), y2.value = null);
  }, onTriggerLeave: (e2) => !!M2(e2), searchRef: c2, pointerGraceTimerRef: p2, onPointerGraceIntentChange: (e2) => {
    v2.value = e2;
  } }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(E), { "as-child": "", trapped: Wt$1.unref(u2), onMountAutoFocus: _2, onUnmountAutoFocus: a3[7] || (a3[7] = (e2) => o2("closeAutoFocus", e2)) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(h), { "as-child": "", "disable-outside-pointer-events": Wt$1.unref(s2), onEscapeKeyDown: a3[2] || (a3[2] = (e2) => o2("escapeKeyDown", e2)), onPointerDownOutside: a3[3] || (a3[3] = (e2) => o2("pointerDownOutside", e2)), onFocusOutside: a3[4] || (a3[4] = (e2) => o2("focusOutside", e2)), onInteractOutside: a3[5] || (a3[5] = (e2) => o2("interactOutside", e2)), onDismiss: a3[6] || (a3[6] = (e2) => o2("dismiss")) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(c$2), { ref_key: "rovingFocusGroupRef", ref: b2, "current-tab-stop-id": y2.value, "onUpdate:currentTabStopId": a3[0] || (a3[0] = (e2) => y2.value = e2), "as-child": "", orientation: "vertical", dir: Wt$1.unref(i2).dir.value, loop: Wt$1.unref(d2), onEntryFocus: a3[1] || (a3[1] = (t4) => {
    o2("entryFocus", t4), Wt$1.unref(i2).isUsingKeyboardRef.value || t4.preventDefault();
  }) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(Ie$1), { ref: Wt$1.unref(w2), role: "menu", as: t3.as, "as-child": t3.asChild, "aria-orientation": "vertical", "data-reka-menu-content": "", "data-state": Wt$1.unref(s)(Wt$1.unref(r2).open.value), dir: Wt$1.unref(i2).dir.value, side: t3.side, "side-offset": t3.sideOffset, align: t3.align, "align-offset": t3.alignOffset, "avoid-collisions": t3.avoidCollisions, "collision-boundary": t3.collisionBoundary, "collision-padding": t3.collisionPadding, "arrow-padding": t3.arrowPadding, "prioritize-position": t3.prioritizePosition, "position-strategy": t3.positionStrategy, "update-position-strategy": t3.updatePositionStrategy, sticky: t3.sticky, "hide-when-detached": t3.hideWhenDetached, reference: t3.reference, onKeydown: V2, onBlur: R2, onPointermove: I2 }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "position-strategy", "update-position-strategy", "sticky", "hide-when-detached", "reference"])]), _: 3 }, 8, ["current-tab-stop-id", "dir", "loop"])]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }, 8, ["trapped"]));
} }), Ha = Wt$1.defineComponent({ inheritAttrs: false, __name: "MenuItemImpl", props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, setup(a2) {
  const n2 = a2, o2 = Ka(), { forwardRef: r2 } = N(), { CollectionItem: i2 } = l$1(), u2 = Wt$1.ref(false);
  async function s2(e2) {
    if (!e2.defaultPrevented && g(e2)) if (n2.disabled) o2.onItemLeave(e2);
    else {
      if (!o2.onItemEnter(e2)) {
        const t2 = e2.currentTarget;
        null == t2 || t2.focus({ preventScroll: true });
      }
    }
  }
  async function d2(t2) {
    await Wt$1.nextTick(), t2.defaultPrevented || g(t2) && o2.onItemLeave(t2);
  }
  return (a3, n3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(i2), { value: { textValue: a3.textValue } }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(xm), Wt$1.mergeProps({ ref: Wt$1.unref(r2), role: "menuitem", tabindex: "-1" }, a3.$attrs, { as: a3.as, "as-child": a3.asChild, "aria-disabled": a3.disabled || void 0, "data-disabled": a3.disabled ? "" : void 0, "data-highlighted": u2.value ? "" : void 0, onPointermove: s2, onPointerleave: d2, onFocus: n3[0] || (n3[0] = async (t2) => {
    await Wt$1.nextTick(), t2.defaultPrevented || a3.disabled || (u2.value = true);
  }), onBlur: n3[1] || (n3[1] = async (t2) => {
    await Wt$1.nextTick(), t2.defaultPrevented || (u2.value = false);
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])]), _: 3 }, 8, ["value"]));
} }), za = Wt$1.defineComponent({ __name: "MenuItem", props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, { forwardRef: r2, currentElement: i2 } = N(), u2 = Wa(), s2 = Ka(), d2 = Wt$1.ref(false);
  async function c2() {
    const t3 = i2.value;
    if (!n2.disabled && t3) {
      const t4 = new CustomEvent(e, { bubbles: true, cancelable: true });
      o2("select", t4), await Wt$1.nextTick(), t4.defaultPrevented ? d2.value = false : u2.onClose();
    }
  }
  return (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Ha, Wt$1.mergeProps(n2, { ref: Wt$1.unref(r2), onClick: c2, onPointerdown: a3[0] || (a3[0] = () => {
    d2.value = true;
  }), onPointerup: a3[1] || (a3[1] = async (t4) => {
    var a4;
    await Wt$1.nextTick(), t4.defaultPrevented || d2.value || null == (a4 = t4.currentTarget) || a4.click();
  }), onKeydown: a3[2] || (a3[2] = async (a4) => {
    const n3 = "" !== Wt$1.unref(s2).searchRef.value;
    t3.disabled || n3 && " " === a4.key || Wt$1.unref(n$2).includes(a4.key) && (a4.currentTarget.click(), a4.preventDefault());
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), [Za, ja] = T(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext"), Qa = Wt$1.defineComponent({ __name: "MenuItemIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: "span" } }, setup(a2) {
  const n2 = Za({ modelValue: Wt$1.ref(false) });
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(f), { present: a3.forceMount || Wt$1.unref(u)(Wt$1.unref(n2).modelValue.value) || true === Wt$1.unref(n2).modelValue.value }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(xm), { as: a3.as, "as-child": a3.asChild, "data-state": Wt$1.unref(a$1)(Wt$1.unref(n2).modelValue.value) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-state"])]), _: 3 }, 8, ["present"]));
} }), qa = Wt$1.defineComponent({ __name: "MenuCheckboxItem", props: { modelValue: { type: [Boolean, String], default: false }, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select", "update:modelValue"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = a2, l2 = C(n2, "modelValue", r2);
  return ja({ modelValue: l2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(za, Wt$1.mergeProps({ role: "menuitemcheckbox" }, n2, { "aria-checked": Wt$1.unref(u)(Wt$1.unref(l2)) ? "mixed" : Wt$1.unref(l2), "data-state": Wt$1.unref(a$1)(Wt$1.unref(l2)), onSelect: a3[0] || (a3[0] = async (t4) => {
    r2("select", t4), Wt$1.unref(u)(Wt$1.unref(l2)) ? l2.value = true : l2.value = !Wt$1.unref(l2);
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { modelValue: Wt$1.unref(l2) })]), _: 3 }, 16, ["aria-checked", "data-state"]));
} }), Xa = Wt$1.defineComponent({ __name: "MenuRootContentModal", props: { loop: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = a2, o2 = F(t2, n2), r2 = Ua(), { forwardRef: u2, currentElement: s2 } = N();
  return T$1(s2), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Ya, Wt$1.mergeProps(Wt$1.unref(o2), { ref: Wt$1.unref(u2), "trap-focus": Wt$1.unref(r2).open.value, "disable-outside-pointer-events": Wt$1.unref(r2).open.value, "disable-outside-scroll": true, onDismiss: a3[0] || (a3[0] = (t4) => Wt$1.unref(r2).onOpenChange(false)), onFocusOutside: a3[1] || (a3[1] = Wt$1.withModifiers((e2) => n2("focusOutside", e2), ["prevent"])) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["trap-focus", "disable-outside-pointer-events"]));
} }), en = Wt$1.defineComponent({ __name: "MenuRootContentNonModal", props: { loop: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2), o2 = Ua();
  return (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Ya, Wt$1.mergeProps(Wt$1.unref(n2), { "trap-focus": false, "disable-outside-pointer-events": false, "disable-outside-scroll": false, onDismiss: a3[0] || (a3[0] = (t4) => Wt$1.unref(o2).onOpenChange(false)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), tn = Wt$1.defineComponent({ __name: "MenuContent", props: { forceMount: { type: Boolean }, loop: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2), o2 = Ua(), r2 = Wa();
  return (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(f), { present: t3.forceMount || Wt$1.unref(o2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.unref(r2).modal.value ? (Wt$1.openBlock(), Wt$1.createBlock(Xa, Wt$1.normalizeProps(Wt$1.mergeProps({ key: 0 }, { ...t3.$attrs, ...Wt$1.unref(n2) })), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16)) : (Wt$1.openBlock(), Wt$1.createBlock(en, Wt$1.normalizeProps(Wt$1.mergeProps({ key: 1 }, { ...t3.$attrs, ...Wt$1.unref(n2) })), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), an = Wt$1.defineComponent({ __name: "MenuGroup", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps({ role: "group" }, n2), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), nn = Wt$1.defineComponent({ __name: "MenuLabel", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), on = Wt$1.defineComponent({ __name: "MenuPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(b), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), [rn, ln] = T("MenuRadioGroup"), un = Wt$1.defineComponent({ __name: "MenuRadioGroup", props: { modelValue: { default: "" }, asChild: { type: Boolean }, as: {} }, emits: ["update:modelValue"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = C(n2, "modelValue", a2);
  return ln({ modelValue: r2, onValueChange: (e2) => {
    r2.value = e2;
  } }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(an, Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { modelValue: Wt$1.unref(r2) })]), _: 3 }, 16));
} }), sn = Wt$1.defineComponent({ __name: "MenuRadioItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, { value: r2 } = Wt$1.toRefs(n2), l2 = rn(), i2 = Wt$1.computed(() => l2.modelValue.value === (null == r2 ? void 0 : r2.value));
  return ja({ modelValue: i2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(za, Wt$1.mergeProps({ role: "menuitemradio" }, n2, { "aria-checked": i2.value, "data-state": Wt$1.unref(a$1)(i2.value), onSelect: a3[0] || (a3[0] = async (t4) => {
    o2("select", t4), Wt$1.unref(l2).onValueChange(Wt$1.unref(r2));
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["aria-checked", "data-state"]));
} }), dn = Wt$1.defineComponent({ __name: "MenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { role: "separator", "aria-orientation": "horizontal" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), [cn, fn] = T("MenuSub"), pn = Wt$1.defineComponent({ __name: "MenuSub", props: { open: { type: Boolean, default: void 0 } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  const n2 = C(t2, "open", a2, { defaultValue: false, passive: void 0 === t2.open }), r2 = Ua(), l2 = Wt$1.ref(), i2 = Wt$1.ref();
  return Wt$1.watchEffect((e2) => {
    false === (null == r2 ? void 0 : r2.open.value) && (n2.value = false), e2(() => n2.value = false);
  }), Na({ open: n2, onOpenChange: (e2) => {
    n2.value = e2;
  }, content: i2, onContentChange: (e2) => {
    i2.value = e2;
  } }), fn({ triggerId: "", contentId: "", trigger: l2, onTriggerChange: (e2) => {
    l2.value = e2;
  } }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }));
} }), vn = Wt$1.defineComponent({ __name: "MenuSubContent", props: { forceMount: { type: Boolean }, loop: { type: Boolean }, sideOffset: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean, default: true }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2), o2 = Ua(), r2 = Wa(), u2 = cn(), { forwardRef: s2, currentElement: d2 } = N();
  return u2.contentId || (u2.contentId = c(void 0, "reka-menu-sub-content")), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(f), { present: t3.forceMount || Wt$1.unref(o2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Ya, Wt$1.mergeProps(Wt$1.unref(n2), { id: Wt$1.unref(u2).contentId, ref: Wt$1.unref(s2), "aria-labelledby": Wt$1.unref(u2).triggerId, align: "start", side: "rtl" === Wt$1.unref(r2).dir.value ? "left" : "right", "disable-outside-pointer-events": false, "disable-outside-scroll": false, "trap-focus": false, onOpenAutoFocus: a3[0] || (a3[0] = Wt$1.withModifiers((t4) => {
    var a4;
    Wt$1.unref(r2).isUsingKeyboardRef.value && (null == (a4 = Wt$1.unref(d2)) || a4.focus());
  }, ["prevent"])), onCloseAutoFocus: a3[1] || (a3[1] = Wt$1.withModifiers(() => {
  }, ["prevent"])), onFocusOutside: a3[2] || (a3[2] = (t4) => {
    t4.defaultPrevented || t4.target !== Wt$1.unref(u2).trigger.value && Wt$1.unref(o2).onOpenChange(false);
  }), onEscapeKeyDown: a3[3] || (a3[3] = (t4) => {
    Wt$1.unref(r2).onClose(), t4.preventDefault();
  }), onKeydown: a3[4] || (a3[4] = (t4) => {
    var a4, n3;
    const l2 = null == (a4 = t4.currentTarget) ? void 0 : a4.contains(t4.target), i2 = Wt$1.unref(i)[Wt$1.unref(r2).dir.value].includes(t4.key);
    l2 && i2 && (Wt$1.unref(o2).onOpenChange(false), null == (n3 = Wt$1.unref(u2).trigger.value) || n3.focus(), t4.preventDefault());
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "side"])]), _: 3 }, 8, ["present"]));
} }), hn = Wt$1.defineComponent({ __name: "MenuAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(He$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), mn = Wt$1.defineComponent({ __name: "MenuSubTrigger", props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2, n2 = Ua(), o2 = Wa(), r2 = cn(), l2 = Ka(), i2 = Wt$1.ref(null);
  function u2() {
    i2.value && (void 0).clearTimeout(i2.value), i2.value = null;
  }
  function s2(e2) {
    if (!g(e2)) return;
    l2.onItemEnter(e2) || a2.disabled || n2.open.value || i2.value || (l2.onPointerGraceIntentChange(null), i2.value = (void 0).setTimeout(() => {
      n2.onOpenChange(true), u2();
    }, 100));
  }
  async function d2(e2) {
    var t3, a3;
    if (!g(e2)) return;
    u2();
    const o3 = null == (t3 = n2.content.value) ? void 0 : t3.getBoundingClientRect();
    if (null == o3 ? void 0 : o3.width) {
      const t4 = null == (a3 = n2.content.value) ? void 0 : a3.dataset.side, r3 = "right" === t4, i3 = r3 ? -5 : 5, u3 = o3[r3 ? "left" : "right"], s3 = o3[r3 ? "right" : "left"];
      l2.onPointerGraceIntentChange({ area: [{ x: e2.clientX + i3, y: e2.clientY }, { x: u3, y: o3.top }, { x: s3, y: o3.top }, { x: s3, y: o3.bottom }, { x: u3, y: o3.bottom }], side: t4 }), (void 0).clearTimeout(l2.pointerGraceTimerRef.value), l2.pointerGraceTimerRef.value = (void 0).setTimeout(() => l2.onPointerGraceIntentChange(null), 300);
    } else {
      if (l2.onTriggerLeave(e2)) return;
      l2.onPointerGraceIntentChange(null);
    }
  }
  async function c2(t3) {
    var r3;
    const i3 = "" !== l2.searchRef.value;
    a2.disabled || i3 && " " === t3.key || c$1[o2.dir.value].includes(t3.key) && (n2.onOpenChange(true), await Wt$1.nextTick(), null == (r3 = n2.content.value) || r3.focus(), t3.preventDefault());
  }
  return r2.triggerId || (r2.triggerId = c(void 0, "reka-menu-sub-trigger")), (t3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(hn, { "as-child": "" }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Ha, Wt$1.mergeProps(a2, { id: Wt$1.unref(r2).triggerId, ref: (t4) => {
    var a3;
    null == (a3 = Wt$1.unref(r2)) || a3.onTriggerChange(null == t4 ? void 0 : t4.$el);
  }, "aria-haspopup": "menu", "aria-expanded": Wt$1.unref(n2).open.value, "aria-controls": Wt$1.unref(r2).contentId, "data-state": Wt$1.unref(s)(Wt$1.unref(n2).open.value), onClick: o3[0] || (o3[0] = async (t4) => {
    a2.disabled || t4.defaultPrevented || (t4.currentTarget.focus(), Wt$1.unref(n2).open.value || Wt$1.unref(n2).onOpenChange(true));
  }), onPointermove: s2, onPointerleave: d2, onKeydown: c2 }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])]), _: 3 }));
} }), [yn, gn] = T("PopoverRoot"), bn = Wt$1.defineComponent({ __name: "PopoverRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, modal: { type: Boolean, default: false } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = a2, { modal: l2 } = Wt$1.toRefs(n2), i2 = C(n2, "open", r2, { defaultValue: n2.defaultOpen, passive: void 0 === n2.open }), u2 = Wt$1.ref(), s2 = Wt$1.ref(false);
  return gn({ contentId: "", triggerId: "", modal: l2, open: i2, onOpenChange: (e2) => {
    i2.value = e2;
  }, onOpenToggle: () => {
    i2.value = !i2.value;
  }, triggerElement: u2, hasCustomAnchor: s2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { open: Wt$1.unref(i2) })]), _: 3 }));
} }), wn = Wt$1.defineComponent({ __name: "PopoverAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), yn(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(He$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Cn = Wt$1.defineComponent({ __name: "PopoverArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(qe$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Bn = Wt$1.defineComponent({ __name: "PopoverClose", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2;
  N();
  const o2 = yn();
  return (a3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { type: "button" === a3.as ? "button" : void 0, as: a3.as, "as-child": n2.asChild, onClick: r2[0] || (r2[0] = (t2) => Wt$1.unref(o2).onOpenChange(false)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child"]));
} }), Dn = Wt$1.defineComponent({ __name: "PopoverPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(b), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), kn = Wt$1.defineComponent({ __name: "PopoverContentImpl", props: { trapFocus: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: n2 }) {
  const o2 = n2, r2 = Sm(a(t2, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: i2 } = N(), s2 = yn();
  return t(), (t3, a2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(E), { "as-child": "", loop: "", trapped: t3.trapFocus, onMountAutoFocus: a2[5] || (a2[5] = (e2) => o2("openAutoFocus", e2)), onUnmountAutoFocus: a2[6] || (a2[6] = (e2) => o2("closeAutoFocus", e2)) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(h), { "as-child": "", "disable-outside-pointer-events": t3.disableOutsidePointerEvents, onPointerDownOutside: a2[0] || (a2[0] = (e2) => o2("pointerDownOutside", e2)), onInteractOutside: a2[1] || (a2[1] = (e2) => o2("interactOutside", e2)), onEscapeKeyDown: a2[2] || (a2[2] = (e2) => o2("escapeKeyDown", e2)), onFocusOutside: a2[3] || (a2[3] = (e2) => o2("focusOutside", e2)), onDismiss: a2[4] || (a2[4] = (t4) => Wt$1.unref(s2).onOpenChange(false)) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(Ie$1), Wt$1.mergeProps(Wt$1.unref(r2), { id: Wt$1.unref(s2).contentId, ref: Wt$1.unref(i2), "data-state": Wt$1.unref(s2).open.value ? "open" : "closed", "aria-labelledby": Wt$1.unref(s2).triggerId, style: { "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-popover-content-available-width": "var(--reka-popper-available-width)", "--reka-popover-content-available-height": "var(--reka-popper-available-height)", "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)", "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)" }, role: "dialog" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "aria-labelledby"])]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }, 8, ["trapped"]));
} }), Pn = Wt$1.defineComponent({ __name: "PopoverContentModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, r2 = yn(), u2 = Wt$1.ref(false);
  N$1(true);
  const s2 = F(n2, o2), { forwardRef: d2, currentElement: c2 } = N();
  return T$1(c2), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(kn, Wt$1.mergeProps(Wt$1.unref(s2), { ref: Wt$1.unref(d2), "trap-focus": Wt$1.unref(r2).open.value, "disable-outside-pointer-events": "", onCloseAutoFocus: a3[0] || (a3[0] = Wt$1.withModifiers((t4) => {
    var a4;
    o2("closeAutoFocus", t4), u2.value || null == (a4 = Wt$1.unref(r2).triggerElement.value) || a4.focus();
  }, ["prevent"])), onPointerDownOutside: a3[1] || (a3[1] = (e2) => {
    o2("pointerDownOutside", e2);
    const t4 = e2.detail.originalEvent, a4 = 0 === t4.button && true === t4.ctrlKey, n3 = 2 === t4.button || a4;
    u2.value = n3;
  }), onFocusOutside: a3[2] || (a3[2] = Wt$1.withModifiers(() => {
  }, ["prevent"])) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), xn = Wt$1.defineComponent({ __name: "PopoverContentNonModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, r2 = yn(), l2 = Wt$1.ref(false), u2 = Wt$1.ref(false), s2 = F(n2, o2);
  return (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(kn, Wt$1.mergeProps(Wt$1.unref(s2), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: a3[0] || (a3[0] = (t4) => {
    var a4;
    o2("closeAutoFocus", t4), t4.defaultPrevented || (l2.value || null == (a4 = Wt$1.unref(r2).triggerElement.value) || a4.focus(), t4.preventDefault()), l2.value = false, u2.value = false;
  }), onInteractOutside: a3[1] || (a3[1] = async (t4) => {
    var a4;
    o2("interactOutside", t4), t4.defaultPrevented || (l2.value = true, "pointerdown" === t4.detail.originalEvent.type && (u2.value = true));
    const n3 = t4.target;
    (null == (a4 = Wt$1.unref(r2).triggerElement.value) ? void 0 : a4.contains(n3)) && t4.preventDefault(), "focusin" === t4.detail.originalEvent.type && u2.value && t4.preventDefault();
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Sn = Wt$1.defineComponent({ __name: "PopoverContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = a2, r2 = yn(), u2 = F(n2, o2), { forwardRef: s2 } = N();
  return r2.contentId || (r2.contentId = c(void 0, "reka-popover-content")), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(f), { present: t3.forceMount || Wt$1.unref(r2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.unref(r2).modal.value ? (Wt$1.openBlock(), Wt$1.createBlock(Pn, Wt$1.mergeProps({ key: 0 }, Wt$1.unref(u2), { ref: Wt$1.unref(s2) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16)) : (Wt$1.openBlock(), Wt$1.createBlock(xn, Wt$1.mergeProps({ key: 1 }, Wt$1.unref(u2), { ref: Wt$1.unref(s2) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), On = Wt$1.defineComponent({ __name: "PopoverTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = yn(), { forwardRef: r2 } = N();
  return o2.triggerId || (o2.triggerId = c(void 0, "reka-popover-trigger")), (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(Wt$1.unref(o2).hasCustomAnchor.value ? Wt$1.unref(xm) : Wt$1.unref(He$1)), { "as-child": "" }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(xm), { id: Wt$1.unref(o2).triggerId, ref: Wt$1.unref(r2), type: "button" === a3.as ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": Wt$1.unref(o2).open.value, "aria-controls": Wt$1.unref(o2).contentId, "data-state": Wt$1.unref(o2).open.value ? "open" : "closed", as: a3.as, "as-child": n2.asChild, onClick: Wt$1.unref(o2).onOpenToggle }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["id", "type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])]), _: 3 }));
} });
function Mn(t2) {
  const a2 = Wt$1.computed(() => !!t2.start.value && !!t2.isDateDisabled(t2.start.value)), n2 = Wt$1.computed(() => !!t2.end.value && !!t2.isDateDisabled(t2.end.value)), o2 = Wt$1.computed(() => !a2.value && !n2.value && !!(t2.start.value && t2.end.value && pa(t2.end.value, t2.start.value))), r2 = (e2) => {
    var a3;
    return !!t2.isDateDisabled(e2) || !(!(null == (a3 = t2.maximumDays) ? void 0 : a3.value) || !t2.start.value || t2.end.value || ne(t2.start.value, e2)) && Math.abs(e2.compare(t2.start.value)) > t2.maximumDays.value;
  }, l2 = Wt$1.computed(() => {
    var e2;
    if (t2.start.value && t2.end.value && !t2.fixedDate.value) return null;
    if (!t2.start.value || !t2.focusedValue.value) return null;
    const a3 = pa(t2.start.value, t2.focusedValue.value), n3 = a3 ? t2.start.value : t2.focusedValue.value, o3 = a3 ? t2.focusedValue.value : t2.start.value;
    if (ne(n3, o3)) return { start: n3, end: o3 };
    if ((null == (e2 = t2.maximumDays) ? void 0 : e2.value) && !t2.end.value && Math.abs(o3.compare(n3)) > t2.maximumDays.value) {
      const e3 = a3 ? n3.add({ days: t2.maximumDays.value }) : n3.subtract({ days: t2.maximumDays.value });
      return { start: n3, end: e3 };
    }
    const l3 = function(e3, t3, a4, n4, o4) {
      if (void 0 === a4 && void 0 === n4 && void 0 === o4) return true;
      let r3 = e3.add({ days: 1 });
      if (((null == n4 ? void 0 : n4(r3)) || (null == a4 ? void 0 : a4(r3))) && !(null == o4 ? void 0 : o4(r3))) return false;
      const l4 = t3;
      for (; r3.compare(l4) < 0; ) if (r3 = r3.add({ days: 1 }), ((null == n4 ? void 0 : n4(r3)) || (null == a4 ? void 0 : a4(r3))) && !(null == o4 ? void 0 : o4(r3))) return false;
      return true;
    }(n3, o3, t2.allowNonContiguousRanges.value ? () => false : t2.isDateUnavailable, r2, t2.isDateHighlightable);
    return l3 ? { start: n3, end: o3 } : null;
  });
  return { isInvalid: o2, isSelected: (e2) => !(!t2.start.value || !ne(t2.start.value, e2)) || (!(!t2.end.value || !ne(t2.end.value, e2)) || !(!t2.end.value || !t2.start.value) && function(e3, t3, a3) {
    return va(e3, t3) && pa(e3, a3);
  }(e2, t2.start.value, t2.end.value)), isDateHighlightable: (e2) => {
    var a3;
    return !!(null == (a3 = t2.isDateHighlightable) ? void 0 : a3.call(t2, e2));
  }, highlightedRange: l2, isSelectionStart: (e2) => !!t2.start.value && ne(t2.start.value, e2), isSelectionEnd: (e2) => !!t2.end.value && ne(t2.end.value, e2), isHighlightedStart: (e2) => !(!l2.value || !l2.value.start) && ne(l2.value.start, e2), isHighlightedEnd: (e2) => !(!l2.value || !l2.value.end) && ne(l2.value.end, e2), isDateDisabled: r2 };
}
const _n = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Vn = { role: "heading", "aria-level": "2" }, [Rn, In] = T("RangeCalendarRoot"), En = Wt$1.defineComponent({ __name: "RangeCalendarRoot", props: { defaultPlaceholder: {}, defaultValue: { default: () => ({ start: void 0, end: void 0 }) }, modelValue: {}, placeholder: { default: void 0 }, allowNonContiguousRanges: { type: Boolean, default: false }, pagedNavigation: { type: Boolean, default: false }, preventDeselect: { type: Boolean, default: false }, maximumDays: { default: void 0 }, weekStartsOn: { default: 0 }, weekdayFormat: { default: "narrow" }, calendarLabel: {}, fixedWeeks: { type: Boolean, default: false }, maxValue: {}, minValue: {}, locale: {}, numberOfMonths: { default: 1 }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, initialFocus: { type: Boolean, default: false }, isDateDisabled: { type: Function, default: void 0 }, isDateUnavailable: { type: Function, default: void 0 }, isDateHighlightable: { type: Function, default: void 0 }, dir: {}, nextPage: {}, prevPage: {}, disableDaysOutsideCurrentView: { type: Boolean, default: false }, fixedDate: {}, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["update:modelValue", "update:placeholder", "update:startValue"], setup(a2, { emit: n2 }) {
  var _a2, _b;
  const r2 = a2, l2 = n2, { disabled: i2, readonly: u2, initialFocus: d2, pagedNavigation: c2, weekStartsOn: v2, weekdayFormat: m2, fixedWeeks: y2, numberOfMonths: g2, preventDeselect: b2, isDateUnavailable: w2, isDateHighlightable: C2, isDateDisabled: B2, calendarLabel: D2, maxValue: k2, minValue: P2, dir: x2, locale: S2, nextPage: O2, prevPage: M2, allowNonContiguousRanges: _2, disableDaysOutsideCurrentView: V2, fixedDate: R2, maximumDays: I2 } = Wt$1.toRefs(r2), { primitiveElement: E2, currentElement: A2 } = o(), F2 = n(x2), T2 = ba(S2), $2 = Wt$1.ref(), U2 = Wt$1.ref(), N2 = Wt$1.ref(false), W2 = C(r2, "modelValue", l2, { defaultValue: (_a2 = r2.defaultValue) != null ? _a2 : { start: void 0, end: void 0 }, passive: void 0 === r2.modelValue }), L2 = Wt$1.computed(() => n$1(W2.value) ? { start: void 0, end: void 0 } : W2.value), J2 = ua({ defaultPlaceholder: r2.placeholder, defaultValue: L2.value.start, locale: r2.locale }), K2 = Wt$1.ref(L2.value.start), G2 = Wt$1.ref(L2.value.end), Y2 = C(r2, "placeholder", l2, { defaultValue: (_b = r2.defaultPlaceholder) != null ? _b : J2.copy(), passive: void 0 === r2.placeholder });
  function z2(e2) {
    Y2.value = e2.copy();
  }
  const { fullCalendarLabel: Z2, headingValue: j2, isDateDisabled: Q2, isDateUnavailable: q2, isNextButtonDisabled: X2, isPrevButtonDisabled: ee2, grid: te2, weekdays: ae2, isOutsideVisibleView: ne2, nextPage: oe2, prevPage: le2, formatter: ie2 } = ga({ locale: T2, placeholder: Y2, weekStartsOn: v2, fixedWeeks: y2, numberOfMonths: g2, minValue: P2, maxValue: k2, disabled: i2, weekdayFormat: m2, pagedNavigation: c2, isDateDisabled: B2.value, isDateUnavailable: w2.value, calendarLabel: D2, nextPage: O2, prevPage: M2 }), { isInvalid: ue2, isSelected: se2, isDateHighlightable: de2, highlightedRange: ce2, isSelectionStart: fe2, isSelectionEnd: pe2, isHighlightedStart: ve2, isHighlightedEnd: he2, isDateDisabled: me2 } = Mn({ start: K2, end: G2, isDateDisabled: Q2, isDateUnavailable: q2, isDateHighlightable: C2.value, focusedValue: U2, allowNonContiguousRanges: _2, fixedDate: R2, maximumDays: I2 });
  Wt$1.watch(W2, (e2, t2) => {
    var a3, n3, o2, r3;
    (!(null == t2 ? void 0 : t2.start) && (null == e2 ? void 0 : e2.start) || !e2 || !e2.start || K2.value && !re(e2.start, K2.value)) && (K2.value = null == (n3 = null == (a3 = null == e2 ? void 0 : e2.start) ? void 0 : a3.copy) ? void 0 : n3.call(a3)), (!(null == t2 ? void 0 : t2.end) && e2.end || !e2 || !e2.end || G2.value && !re(e2.end, G2.value)) && (G2.value = null == (r3 = null == (o2 = null == e2 ? void 0 : e2.end) ? void 0 : o2.copy) ? void 0 : r3.call(o2));
  }), Wt$1.watch(K2, (e2) => {
    e2 && !re(e2, Y2.value) && z2(e2), l2("update:startValue", e2);
  }), Wt$1.watch([K2, G2], ([e2, t2]) => {
    const a3 = L2.value;
    if (!(a3 && a3.start && a3.end && e2 && t2 && re(a3.start, e2) && re(a3.end, t2)) && (N2.value = true, e2 && t2)) {
      if (N2.value = false, a3.start && a3.end && re(a3.start, e2) && re(a3.end, t2)) return;
      pa(t2, e2) ? W2.value = { start: t2.copy(), end: e2.copy() } : W2.value = { start: e2.copy(), end: t2.copy() };
    }
  });
  const ye2 = F$1();
  return j$1("keydown", (e2) => {
    var t2, a3;
    e2.key === ye2.ESCAPE && N2.value && (K2.value = null == (t2 = W2.value.start) ? void 0 : t2.copy(), G2.value = null == (a3 = W2.value.end) ? void 0 : a3.copy());
  }), In({ isDateUnavailable: q2, isDateHighlightable: de2, startValue: K2, endValue: G2, formatter: ie2, modelValue: W2, placeholder: Y2, disabled: i2, initialFocus: d2, pagedNavigation: c2, grid: te2, weekDays: ae2, weekStartsOn: v2, weekdayFormat: m2, fixedWeeks: y2, numberOfMonths: g2, readonly: u2, preventDeselect: b2, fullCalendarLabel: Z2, headingValue: j2, isInvalid: ue2, isDateDisabled: me2, allowNonContiguousRanges: _2, highlightedRange: ce2, focusedValue: U2, lastPressedDateValue: $2, isSelected: se2, isSelectionEnd: pe2, isSelectionStart: fe2, isNextButtonDisabled: X2, isPrevButtonDisabled: ee2, isOutsideVisibleView: ne2, nextPage: oe2, prevPage: le2, parentElement: A2, onPlaceholderChange: z2, locale: T2, dir: F2, isHighlightedStart: ve2, isHighlightedEnd: he2, disableDaysOutsideCurrentView: V2, fixedDate: R2, maximumDays: I2 }), (a3, n3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { ref_key: "primitiveElement", ref: E2, as: a3.as, "as-child": a3.asChild, role: "application", "aria-label": Wt$1.unref(Z2), "data-readonly": Wt$1.unref(u2) ? "" : void 0, "data-disabled": Wt$1.unref(i2) ? "" : void 0, "data-invalid": Wt$1.unref(ue2) ? "" : void 0, dir: Wt$1.unref(F2) }, { default: Wt$1.withCtx(() => [Wt$1.createElementVNode("div", _n, [Wt$1.createElementVNode("div", Vn, Wt$1.toDisplayString(Wt$1.unref(Z2)), 1)]), Wt$1.renderSlot(a3.$slots, "default", { date: Wt$1.unref(Y2), grid: Wt$1.unref(te2), weekDays: Wt$1.unref(ae2), weekStartsOn: Wt$1.unref(v2), locale: Wt$1.unref(T2), fixedWeeks: Wt$1.unref(y2), modelValue: Wt$1.unref(W2) })]), _: 3 }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
} }), An = Wt$1.defineComponent({ __name: "RangeCalendarCell", props: { date: {}, asChild: { type: Boolean }, as: { default: "td" } }, setup(a2) {
  const n2 = Rn();
  return (a3, o2) => {
    var r2, l2;
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), { as: a3.as, "as-child": a3.asChild, role: "gridcell", "aria-selected": !!Wt$1.unref(n2).isSelected(a3.date) || void 0, "aria-disabled": Wt$1.unref(n2).isDateDisabled(a3.date) || (null == (l2 = (r2 = Wt$1.unref(n2)).isDateUnavailable) ? void 0 : l2.call(r2, a3.date)) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value, "data-disabled": Wt$1.unref(n2).isDateDisabled(a3.date) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value ? "" : void 0 }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
  };
} }), Fn = Wt$1.defineComponent({ __name: "RangeCalendarCellTrigger", props: { day: {}, month: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2, o2 = Rn(), r2 = F$1(), { primitiveElement: l2, currentElement: i2 } = o(), u2 = Wt$1.computed(() => o2.formatter.custom(sa(n2.day), { weekday: "long", month: "long", day: "numeric", year: "numeric" })), s2 = Wt$1.computed(() => {
    var _a2;
    var e2;
    return (_a2 = null == (e2 = o2.isDateUnavailable) ? void 0 : e2.call(o2, n2.day)) != null ? _a2 : false;
  }), d2 = Wt$1.computed(() => o2.isSelected(n2.day)), c2 = Wt$1.computed(() => o2.isSelectionStart(n2.day)), p2 = Wt$1.computed(() => o2.isSelectionEnd(n2.day)), v2 = Wt$1.computed(() => o2.isHighlightedStart(n2.day)), m2 = Wt$1.computed(() => o2.isHighlightedEnd(n2.day)), y2 = Wt$1.computed(() => {
    return !!o2.highlightedRange.value && (e2 = n2.day, t2 = o2.highlightedRange.value.start, a3 = o2.highlightedRange.value.end, r3 = t2, e2.compare(r3) >= 0 && function(e3, t3) {
      return e3.compare(t3) <= 0;
    }(e2, a3));
    var e2, t2, a3, r3;
  }), g2 = Wt$1.computed(() => o2.allowNonContiguousRanges.value), b2 = Wt$1.computed(() => ue(n2.day, ve())), w2 = Wt$1.computed(() => !oe(n2.day, n2.month)), C2 = Wt$1.computed(() => o2.isOutsideVisibleView(n2.day)), B2 = Wt$1.computed(() => o2.isDateDisabled(n2.day) || o2.disableDaysOutsideCurrentView.value && w2.value), D2 = Wt$1.computed(() => n2.day.day.toLocaleString(o2.locale.value)), k2 = Wt$1.computed(() => !o2.disabled.value && ne(n2.day, o2.placeholder.value));
  function P2(e2, t2) {
    var a3;
    if (!o2.readonly.value && !o2.isDateDisabled(t2) && !(null == (a3 = o2.isDateUnavailable) ? void 0 : a3.call(o2, t2))) {
      if (o2.lastPressedDateValue.value = t2.copy(), o2.startValue.value && null === o2.highlightedRange.value) {
        if (ne(t2, o2.startValue.value) && !o2.preventDeselect.value && !o2.endValue.value) return o2.startValue.value = void 0, void o2.onPlaceholderChange(t2);
        if (!o2.endValue.value) return e2.preventDefault(), void (o2.lastPressedDateValue.value && ne(o2.lastPressedDateValue.value, t2) && (o2.startValue.value = t2.copy()));
      }
      if (o2.startValue.value && o2.endValue.value && ne(o2.endValue.value, t2) && !o2.preventDeselect.value) return o2.startValue.value = void 0, o2.endValue.value = void 0, void o2.onPlaceholderChange(t2);
      o2.startValue.value ? o2.endValue.value ? o2.endValue.value && o2.startValue.value && (o2.fixedDate.value ? "start" === o2.fixedDate.value ? t2.compare(o2.startValue.value) < 0 ? o2.startValue.value = t2.copy() : o2.endValue.value = t2.copy() : "end" === o2.fixedDate.value && (t2.compare(o2.endValue.value) > 0 ? o2.endValue.value = t2.copy() : o2.startValue.value = t2.copy()) : (o2.endValue.value = void 0, o2.startValue.value = t2.copy())) : o2.endValue.value = t2.copy() : o2.startValue.value = t2.copy();
    }
  }
  function x2(e2) {
    B2.value || P2(e2, n2.day);
  }
  function S2() {
    var e2;
    B2.value || (null == (e2 = o2.isDateUnavailable) ? void 0 : e2.call(o2, n2.day)) || (o2.focusedValue.value = n2.day.copy());
  }
  function O2(t2) {
    if (B2.value) return;
    t2.preventDefault(), t2.stopPropagation();
    const a3 = o2.parentElement.value, l3 = "rtl" === o2.dir.value ? -1 : 1;
    switch (t2.code) {
      case r2.ARROW_RIGHT:
        u3(i2.value, l3);
        break;
      case r2.ARROW_LEFT:
        u3(i2.value, -l3);
        break;
      case r2.ARROW_UP:
        u3(i2.value, -7);
        break;
      case r2.ARROW_DOWN:
        u3(i2.value, 7);
        break;
      case r2.ENTER:
      case r2.SPACE_CODE:
        P2(t2, n2.day);
    }
    function u3(t3, n3) {
      const r3 = xa(a3);
      if (!r3.length) return;
      const l4 = r3.indexOf(t3) + n3;
      if (l4 >= 0 && l4 < r3.length) return r3[l4].hasAttribute("data-disabled") && u3(r3[l4], n3), void r3[l4].focus();
      if (l4 < 0) {
        if (o2.isPrevButtonDisabled()) return;
        return o2.prevPage(), void Wt$1.nextTick(() => {
          const e2 = xa(a3);
          if (!e2.length) return;
          if (!o2.pagedNavigation.value && o2.numberOfMonths.value > 1) {
            const t5 = fa(o2.placeholder.value) - Math.abs(l4);
            return e2[t5].hasAttribute("data-disabled") && u3(e2[t5], n3), void e2[t5].focus();
          }
          const t4 = e2.length - Math.abs(l4);
          e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), e2[t4].focus();
        });
      }
      if (l4 >= r3.length) {
        if (o2.isNextButtonDisabled()) return;
        o2.nextPage(), Wt$1.nextTick(() => {
          const e2 = xa(a3);
          if (!e2.length) return;
          if (!o2.pagedNavigation.value && o2.numberOfMonths.value > 1) {
            const t5 = fa(o2.placeholder.value.add({ months: o2.numberOfMonths.value - 1 })), a4 = l4 - r3.length + (e2.length - t5);
            return e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), void e2[a4].focus();
          }
          const t4 = l4 - r3.length;
          e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), e2[t4].focus();
        });
      }
    }
  }
  return (a3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps({ ref_key: "primitiveElement", ref: l2 }, n2, { role: "button", "aria-label": u2.value, "data-reka-calendar-cell-trigger": "", "aria-selected": !(!d2.value || !g2.value && s2.value) || void 0, "aria-disabled": !(!B2.value && !s2.value) || void 0, "data-highlighted": !y2.value || !g2.value && s2.value ? void 0 : "", "data-selection-start": !!c2.value || void 0, "data-selection-end": !!p2.value || void 0, "data-highlighted-start": !!v2.value || void 0, "data-highlighted-end": !!m2.value || void 0, "data-selected": !(!d2.value || !g2.value && s2.value) || void 0, "data-outside-visible-view": C2.value ? "" : void 0, "data-value": a3.day.toString(), "data-disabled": B2.value ? "" : void 0, "data-unavailable": s2.value ? "" : void 0, "data-today": b2.value ? "" : void 0, "data-outside-view": w2.value ? "" : void 0, "data-focused": k2.value ? "" : void 0, tabindex: k2.value ? 0 : w2.value || B2.value ? void 0 : -1, onClick: x2, onFocusin: S2, onMouseenter: S2, onKeydown: Wt$1.withKeys(O2, ["up", "down", "left", "right", "enter", "space"]) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { dayValue: D2.value, disabled: B2.value, today: b2.value, selected: d2.value, outsideView: w2.value, outsideVisibleView: C2.value, unavailable: s2.value, highlighted: y2.value && (g2.value || !s2.value), highlightedStart: v2.value, highlightedEnd: m2.value, selectionStart: c2.value, selectionEnd: p2.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(D2.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
} }), Tn = Wt$1.defineComponent({ __name: "RangeCalendarGrid", props: { asChild: { type: Boolean }, as: { default: "table" } }, setup(a2) {
  const n2 = a2, o2 = Rn(), r2 = Wt$1.computed(() => !!o2.disabled.value || void 0), l2 = Wt$1.computed(() => !!o2.readonly.value || void 0);
  return (a3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { tabindex: "-1", role: "grid", "aria-readonly": l2.value, "aria-disabled": r2.value, "data-readonly": l2.value && "", "data-disabled": r2.value && "" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
} }), $n = Wt$1.defineComponent({ __name: "RangeCalendarGridBody", props: { asChild: { type: Boolean }, as: { default: "tbody" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Un = Wt$1.defineComponent({ __name: "RangeCalendarGridHead", props: { asChild: { type: Boolean }, as: { default: "thead" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "aria-hidden": "true" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Nn = Wt$1.defineComponent({ __name: "RangeCalendarGridRow", props: { asChild: { type: Boolean }, as: { default: "tr" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Wn = Wt$1.defineComponent({ __name: "RangeCalendarHeadCell", props: { asChild: { type: Boolean }, as: { default: "th" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Ln = Wt$1.defineComponent({ __name: "RangeCalendarHeader", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2;
  return (a3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Jn = Wt$1.defineComponent({ __name: "RangeCalendarHeading", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(a2) {
  const n2 = a2, o2 = Rn();
  return (a3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "data-disabled": Wt$1.unref(o2).disabled.value ? "" : void 0 }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { headingValue: Wt$1.unref(o2).headingValue.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(Wt$1.unref(o2).headingValue.value), 1)])]), _: 3 }, 16, ["data-disabled"]));
} }), Kn = Wt$1.defineComponent({ __name: "RangeCalendarNext", props: { nextPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = Wt$1.computed(() => r2.disabled.value || r2.isNextButtonDisabled(n2.nextPage)), r2 = Rn();
  return (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "aria-label": "Next page", type: "button" === a3.as ? "button" : void 0, "aria-disabled": o2.value || void 0, "data-disabled": o2.value || void 0, disabled: o2.value, onClick: l2[0] || (l2[0] = (t2) => Wt$1.unref(r2).nextPage(n2.nextPage)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { disabled: o2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Next page "))])]), _: 3 }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
} }), Gn = Wt$1.defineComponent({ __name: "RangeCalendarPrev", props: { prevPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = Wt$1.computed(() => r2.disabled.value || r2.isPrevButtonDisabled(n2.prevPage)), r2 = Rn();
  return (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(xm), Wt$1.mergeProps(n2, { "aria-label": "Previous page", type: "button" === a3.as ? "button" : void 0, "aria-disabled": o2.value || void 0, "data-disabled": o2.value || void 0, disabled: o2.value, onClick: l2[0] || (l2[0] = (t2) => Wt$1.unref(r2).prevPage(n2.prevPage)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { disabled: o2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Prev page "))])]), _: 3 }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
} }), Yn = Wt$1.defineComponent({ __name: "DropdownMenuArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(Ta), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Hn = Wt$1.defineComponent({ __name: "DropdownMenuCheckboxItem", props: { modelValue: { type: [Boolean, String] }, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select", "update:modelValue"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = I(a2);
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(qa), Wt$1.normalizeProps(Wt$1.guardReactiveProps({ ...n2, ...Wt$1.unref(o2) })), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), [zn, Zn] = T("DropdownMenuRoot"), jn = Wt$1.defineComponent({ __name: "DropdownMenuRoot", props: { defaultOpen: { type: Boolean }, open: { type: Boolean, default: void 0 }, dir: {}, modal: { type: Boolean, default: true } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = a2;
  N();
  const i2 = C(n2, "open", r2, { defaultValue: n2.defaultOpen, passive: void 0 === n2.open }), u2 = Wt$1.ref(), { modal: s2, dir: d2 } = Wt$1.toRefs(n2), c2 = n(d2);
  return Zn({ open: i2, onOpenChange: (e2) => {
    i2.value = e2;
  }, onOpenToggle: () => {
    i2.value = !i2.value;
  }, triggerId: "", triggerElement: u2, contentId: "", modal: s2, dir: c2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(Ja), { open: Wt$1.unref(i2), "onUpdate:open": a3[0] || (a3[0] = (t4) => Wt$1.isRef(i2) ? i2.value = t4 : null), dir: Wt$1.unref(c2), modal: Wt$1.unref(s2) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { open: Wt$1.unref(i2) })]), _: 3 }, 8, ["open", "dir", "modal"]));
} }), Qn = Wt$1.defineComponent({ __name: "DropdownMenuContent", props: { forceMount: { type: Boolean }, loop: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2);
  N();
  const o2 = zn(), r2 = Wt$1.ref(false);
  function u2(e2) {
    e2.defaultPrevented || (r2.value || setTimeout(() => {
      var e3;
      null == (e3 = o2.triggerElement.value) || e3.focus();
    }, 0), r2.value = false, e2.preventDefault());
  }
  return o2.contentId || (o2.contentId = c(void 0, "reka-dropdown-menu-content")), (t3, a3) => {
    var l2;
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(tn), Wt$1.mergeProps(Wt$1.unref(n2), { id: Wt$1.unref(o2).contentId, "aria-labelledby": null == (l2 = Wt$1.unref(o2)) ? void 0 : l2.triggerId, style: { "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)", "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)", "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)", "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)" }, onCloseAutoFocus: u2, onInteractOutside: a3[0] || (a3[0] = (t4) => {
      var a4;
      if (t4.defaultPrevented) return;
      const n3 = t4.detail.originalEvent, l3 = 0 === n3.button && true === n3.ctrlKey, i2 = 2 === n3.button || l3;
      Wt$1.unref(o2).modal.value && !i2 || (r2.value = true), (null == (a4 = Wt$1.unref(o2).triggerElement.value) ? void 0 : a4.contains(t4.target)) && t4.preventDefault();
    }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby"]);
  };
} }), qn = Wt$1.defineComponent({ __name: "DropdownMenuGroup", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(an), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Xn = Wt$1.defineComponent({ __name: "DropdownMenuItem", props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = I(a2);
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(za), Wt$1.normalizeProps(Wt$1.guardReactiveProps({ ...n2, ...Wt$1.unref(o2) })), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), eo = Wt$1.defineComponent({ __name: "DropdownMenuItemIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(Qa), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), to = Wt$1.defineComponent({ __name: "DropdownMenuLabel", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(nn), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), ao = Wt$1.defineComponent({ __name: "DropdownMenuPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(on), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), no = Wt$1.defineComponent({ __name: "DropdownMenuRadioGroup", props: { modelValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["update:modelValue"], setup(t2, { emit: a2 }) {
  const n2 = t2, o2 = I(a2);
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(un), Wt$1.normalizeProps(Wt$1.guardReactiveProps({ ...n2, ...Wt$1.unref(o2) })), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), oo = Wt$1.defineComponent({ __name: "DropdownMenuRadioItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2);
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(sn), Wt$1.normalizeProps(Wt$1.guardReactiveProps(Wt$1.unref(n2))), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), ro = Wt$1.defineComponent({ __name: "DropdownMenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(dn), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), lo = Wt$1.defineComponent({ __name: "DropdownMenuSub", props: { defaultOpen: { type: Boolean }, open: { type: Boolean, default: void 0 } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  var _a2;
  const n2 = t2, r2 = C(n2, "open", a2, { passive: void 0 === n2.open, defaultValue: (_a2 = n2.defaultOpen) != null ? _a2 : false });
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(pn), { open: Wt$1.unref(r2), "onUpdate:open": a3[0] || (a3[0] = (t4) => Wt$1.isRef(r2) ? r2.value = t4 : null) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { open: Wt$1.unref(r2) })]), _: 3 }, 8, ["open"]));
} }), io = Wt$1.defineComponent({ __name: "DropdownMenuSubContent", props: { forceMount: { type: Boolean }, loop: { type: Boolean }, sideOffset: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2);
  return N(), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(vn), Wt$1.mergeProps(Wt$1.unref(n2), { style: { "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)", "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)", "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)", "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), uo = Wt$1.defineComponent({ __name: "DropdownMenuSubTrigger", props: { disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(mn), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), so = Wt$1.defineComponent({ __name: "DropdownMenuTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(a2) {
  const n2 = a2, o2 = zn(), { forwardRef: r2 } = N();
  return o2.triggerId || (o2.triggerId = c(void 0, "reka-dropdown-menu-trigger")), (a3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(hn), { "as-child": "" }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(xm), { id: Wt$1.unref(o2).triggerId, ref: Wt$1.unref(r2), type: "button" === a3.as ? "button" : void 0, "as-child": n2.asChild, as: a3.as, "aria-haspopup": "menu", "aria-expanded": Wt$1.unref(o2).open.value, "aria-controls": Wt$1.unref(o2).open.value ? Wt$1.unref(o2).contentId : void 0, "data-disabled": a3.disabled ? "" : void 0, disabled: a3.disabled, "data-state": Wt$1.unref(o2).open.value ? "open" : "closed", onClick: l2[0] || (l2[0] = async (t2) => {
    var n3;
    a3.disabled || 0 !== t2.button || false !== t2.ctrlKey || (null == (n3 = Wt$1.unref(o2)) || n3.onOpenToggle(), await Wt$1.nextTick(), Wt$1.unref(o2).open.value && t2.preventDefault());
  }), onKeydown: l2[1] || (l2[1] = Wt$1.withKeys((t2) => {
    a3.disabled || (["Enter", " "].includes(t2.key) && Wt$1.unref(o2).onOpenToggle(), "ArrowDown" === t2.key && Wt$1.unref(o2).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(t2.key) && t2.preventDefault());
  }, ["enter", "space", "arrow-down"])) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])]), _: 3 }));
} }), co = Wt$1.defineComponent({ __name: "HoverCardArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(t2) {
  const a2 = t2;
  return N(), (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(qe$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} });
function fo(e2) {
  return (t2) => "touch" === t2.pointerType ? void 0 : e2();
}
const [po, vo] = T("HoverCardRoot"), ho = Wt$1.defineComponent({ __name: "HoverCardRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, openDelay: { default: 700 }, closeDelay: { default: 300 } }, emits: ["update:open"], setup(t2, { emit: a2 }) {
  const n2 = t2, r2 = a2, { openDelay: i2, closeDelay: u2 } = Wt$1.toRefs(n2);
  N();
  const s2 = C(n2, "open", r2, { defaultValue: n2.defaultOpen, passive: void 0 === n2.open }), d2 = Wt$1.ref(0), c2 = Wt$1.ref(0), f2 = Wt$1.ref(false), p2 = Wt$1.ref(false), v2 = Wt$1.ref(false), h2 = Wt$1.ref();
  return vo({ open: s2, onOpenChange(e2) {
    s2.value = e2;
  }, onOpen: function() {
    clearTimeout(c2.value), d2.value = (void 0).setTimeout(() => s2.value = true, i2.value);
  }, onClose: function() {
    clearTimeout(d2.value), f2.value || p2.value || (c2.value = (void 0).setTimeout(() => s2.value = false, u2.value));
  }, onDismiss: function() {
    s2.value = false;
  }, hasSelectionRef: f2, isPointerDownOnContentRef: p2, isPointerInTransitRef: v2, triggerElement: h2 }), (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { open: Wt$1.unref(s2) })]), _: 3 }));
} }), mo = Wt$1.defineComponent({ __name: "HoverCardContentImpl", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t2, { emit: n2 }) {
  const o2 = n2, r2 = Sm(t2), { forwardRef: i2, currentElement: u2 } = N(), s2 = po(), { isPointerInTransit: d2, onPointerExit: f2 } = r(s2.triggerElement, u2);
  y(s2.isPointerInTransitRef, d2, { direction: "rtl" }), f2(() => {
    s2.onClose();
  });
  const p2 = Wt$1.ref(false);
  let v2;
  return Wt$1.watchEffect((e2) => {
    if (p2.value) {
      const t3 = (void 0).body;
      v2 = t3.style.userSelect || t3.style.webkitUserSelect, t3.style.userSelect = "none", t3.style.webkitUserSelect = "none", e2(() => {
        t3.style.userSelect = v2, t3.style.webkitUserSelect = v2;
      });
    }
  }), (t3, a2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(h), { "as-child": "", "disable-outside-pointer-events": false, onEscapeKeyDown: a2[1] || (a2[1] = (e2) => o2("escapeKeyDown", e2)), onPointerDownOutside: a2[2] || (a2[2] = (e2) => o2("pointerDownOutside", e2)), onFocusOutside: a2[3] || (a2[3] = Wt$1.withModifiers((e2) => o2("focusOutside", e2), ["prevent"])), onDismiss: Wt$1.unref(s2).onDismiss }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(Ie$1), Wt$1.mergeProps({ ...Wt$1.unref(r2), ...t3.$attrs }, { ref: Wt$1.unref(i2), "data-state": Wt$1.unref(s2).open.value ? "open" : "closed", style: { userSelect: p2.value ? "text" : void 0, WebkitUserSelect: p2.value ? "text" : void 0, "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)", "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)", "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)", "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)" }, onPointerdown: a2[0] || (a2[0] = (t4) => {
    t4.currentTarget.contains(t4.target) && (p2.value = true), Wt$1.unref(s2).hasSelectionRef.value = false, Wt$1.unref(s2).isPointerDownOnContentRef.value = true;
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["data-state", "style"])]), _: 3 }, 8, ["onDismiss"]));
} }), yo = Wt$1.defineComponent({ __name: "HoverCardContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t2, { emit: a2 }) {
  const n2 = F(t2, a2), { forwardRef: o2 } = N(), r2 = po();
  return (t3, a3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(f), { present: t3.forceMount || Wt$1.unref(r2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(mo, Wt$1.mergeProps(Wt$1.unref(n2), { ref: Wt$1.unref(o2), onPointerenter: a3[0] || (a3[0] = (t4) => Wt$1.unref(fo)(Wt$1.unref(r2).onOpen)(t4)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), go = Wt$1.defineComponent({ __name: "HoverCardPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(t2) {
  const a2 = t2;
  return (t3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(b), Wt$1.normalizeProps(Wt$1.guardReactiveProps(a2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), bo = { Root: ka, Header: Ia, Heading: Ea, Grid: Oa, Cell: Pa, HeadCell: Ra, Next: Aa, Prev: Fa, GridHead: _a, GridBody: Ma, GridRow: Va, CellTrigger: Sa }, wo = { Root: jn, Trigger: so, Portal: ao, Content: Qn, Arrow: Yn, Item: Xn, Group: qn, Separator: ro, CheckboxItem: Hn, ItemIndicator: eo, Label: to, RadioGroup: no, RadioItem: oo, Sub: lo, SubContent: io, SubTrigger: uo }, Co = { Root: ho, Trigger: Wt$1.defineComponent({ __name: "HoverCardTrigger", props: { reference: {}, asChild: { type: Boolean }, as: { default: "a" } }, setup(a2) {
  const { forwardRef: n2, currentElement: o2 } = N(), r2 = po();
  function i2() {
    setTimeout(() => {
      r2.isPointerInTransitRef.value || r2.open.value || r2.onClose();
    }, 0);
  }
  return r2.triggerElement = o2, (a3, o3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(He$1), { "as-child": "", reference: a3.reference }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(xm), { ref: Wt$1.unref(n2), "as-child": a3.asChild, as: a3.as, "data-state": Wt$1.unref(r2).open.value ? "open" : "closed", "data-grace-area-trigger": "", onPointerenter: o3[0] || (o3[0] = (t2) => Wt$1.unref(fo)(Wt$1.unref(r2).onOpen)(t2)), onPointerleave: o3[1] || (o3[1] = (t2) => Wt$1.unref(fo)(i2)(t2)), onFocus: o3[2] || (o3[2] = (t2) => Wt$1.unref(r2).onOpen()), onBlur: o3[3] || (o3[3] = (t2) => Wt$1.unref(r2).onClose()) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "data-state"])]), _: 3 }, 8, ["reference"]));
} }), Portal: go, Content: yo, Arrow: co }, Bo = { Root: bn, Trigger: On, Portal: Dn, Content: Sn, Arrow: Cn, Close: Bn, Anchor: wn }, Do = { Root: En, Header: Ln, Heading: Jn, Grid: Tn, Cell: An, HeadCell: Wn, Next: Kn, Prev: Gn, GridHead: Un, GridBody: $n, GridRow: Nn, CellTrigger: Fn };

export { Bo as B, Co as C, Do as D, Oe as O, Yn as Y, bo as b, de as d, jn as j, so as s, ve as v, wo as w };
//# sourceMappingURL=index-KCESmdl8.mjs.map

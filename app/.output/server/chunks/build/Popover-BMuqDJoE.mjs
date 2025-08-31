import { v as Wt$1, u as da$1, r as Bm, t as Ky, s as pm, P as _m, a as Tm } from './server.mjs';
import { l as defu } from '../_/nitro.mjs';
import { F as F$1, N as N$1, T as T$1, C, j as j$1, y, a } from './useForwardPropsEmits-nQnKVeqj.mjs';
import { t } from './usePrimitiveElement-BYq1qwBL.mjs';
import { o } from './ConfigProvider-BpvNyuo1.mjs';
import { e } from './useDirection-D0ypspbM.mjs';
import { F as F$2 } from './useKbd-kRIii9yh.mjs';
import { H as He$1, N as Ne$1, $ as $e$1, j as je$1 } from './PopperArrow-DHFd-Rdx.mjs';
import { r } from './useGraceArea-CDtlyMEy.mjs';
import { i, s, u as u$1 } from './usePortal-B0EwXMSu.mjs';
import { c, u } from './Presence-D-YonBfP.mjs';
import { N as N$2, T as T$2, E } from './useBodyScrollLock-DClI9ev0.mjs';
import { t as t$1 } from './useFocusGuards-AjDOEN6x.mjs';
import { n } from './nullish-aV-w2MPu.mjs';

function R(e2, a2) {
  return e2 - a2 * Math.floor(e2 / a2);
}
const I = 1721426;
function U(e2, a2, t2, n2) {
  let r2 = (a2 = N(e2, a2)) - 1, o2 = -2;
  return t2 <= 2 ? o2 = 0 : F(a2) && (o2 = -1), 1721425 + 365 * r2 + Math.floor(r2 / 4) - Math.floor(r2 / 100) + Math.floor(r2 / 400) + Math.floor((367 * t2 - 362) / 12 + o2 + n2);
}
function F(e2) {
  return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
}
function N(e2, a2) {
  return "BC" === e2 ? 1 - a2 : a2;
}
function T(e2) {
  let a2 = "AD";
  return e2 <= 0 && (a2 = "BC", e2 = 1 - e2), [a2, e2];
}
const $ = { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] };
class W {
  fromJulianDay(e2) {
    let a2 = e2, t2 = a2 - I, n2 = Math.floor(t2 / 146097), r2 = R(t2, 146097), o2 = Math.floor(r2 / 36524), l2 = R(r2, 36524), i2 = Math.floor(l2 / 1461), u2 = R(l2, 1461), s2 = Math.floor(u2 / 365), d2 = 400 * n2 + 100 * o2 + 4 * i2 + s2 + (4 !== o2 && 4 !== s2 ? 1 : 0), [c2, f2] = T(d2), p2 = a2 - U(c2, f2, 1, 1), h2 = 2;
    a2 < U(c2, f2, 3, 1) ? h2 = 0 : F(f2) && (h2 = 1);
    let v2 = Math.floor((12 * (p2 + h2) + 373) / 367), m2 = a2 - U(c2, f2, v2, 1) + 1;
    return new Te(c2, f2, v2, m2);
  }
  toJulianDay(e2) {
    return U(e2.era, e2.year, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    return $[F(e2.year) ? "leapyear" : "standard"][e2.month - 1];
  }
  getMonthsInYear(e2) {
    return 12;
  }
  getDaysInYear(e2) {
    return F(e2.year) ? 366 : 365;
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
const J = { "001": 1, AD: 1, AE: 6, AF: 6, AI: 1, AL: 1, AM: 1, AN: 1, AR: 1, AT: 1, AU: 1, AX: 1, AZ: 1, BA: 1, BE: 1, BG: 1, BH: 6, BM: 1, BN: 1, BY: 1, CH: 1, CL: 1, CM: 1, CN: 1, CR: 1, CY: 1, CZ: 1, DE: 1, DJ: 6, DK: 1, DZ: 6, EC: 1, EE: 1, EG: 6, ES: 1, FI: 1, FJ: 1, FO: 1, FR: 1, GB: 1, GE: 1, GF: 1, GP: 1, GR: 1, HR: 1, HU: 1, IE: 1, IQ: 6, IR: 6, IS: 1, IT: 1, JO: 6, KG: 1, KW: 6, KZ: 1, LB: 1, LI: 1, LK: 1, LT: 1, LU: 1, LV: 1, LY: 6, MC: 1, MD: 1, ME: 1, MK: 1, MN: 1, MQ: 1, MV: 5, MY: 1, NL: 1, NO: 1, NZ: 1, OM: 6, PL: 1, QA: 6, RE: 1, RO: 1, RS: 1, RU: 1, SD: 6, SE: 1, SI: 1, SK: 1, SM: 1, SY: 6, TJ: 1, TM: 1, TR: 1, UA: 1, UY: 1, UZ: 1, VA: 1, VN: 1, XK: 1 };
function H(e2, a2) {
  return a2 = me(a2, e2.calendar), e2.era === a2.era && e2.year === a2.year && e2.month === a2.month && e2.day === a2.day;
}
function Y(e2, a2) {
  return a2 = me(a2, e2.calendar), e2 = ae(e2), a2 = ae(a2), e2.era === a2.era && e2.year === a2.year && e2.month === a2.month;
}
function L(e2, a2) {
  return K(e2.calendar, a2.calendar) && H(e2, a2);
}
function Z(e2, a2) {
  return K(e2.calendar, a2.calendar) && Y(e2, a2);
}
function K(e2, a2) {
  var t2, n2, r2, o2;
  return null !== (o2 = null !== (r2 = null === (t2 = e2.isEqual) || void 0 === t2 ? void 0 : t2.call(e2, a2)) && void 0 !== r2 ? r2 : null === (n2 = a2.isEqual) || void 0 === n2 ? void 0 : n2.call(a2, e2)) && void 0 !== o2 ? o2 : e2.identifier === a2.identifier;
}
function Q(e2, a2) {
  return H(e2, j(a2));
}
function G(e2, a2, t2) {
  let n2 = e2.calendar.toJulianDay(e2), r2 = function(e3) {
    let a3 = function(e4) {
      if (Intl.Locale) {
        let a5 = ne.get(e4);
        return a5 || (a5 = new Intl.Locale(e4).maximize().region, a5 && ne.set(e4, a5)), a5;
      }
      let a4 = e4.split("-")[1];
      return "u" === a4 ? void 0 : a4;
    }(e3);
    return a3 && J[a3] || 0;
  }(a2), o2 = Math.ceil(n2 + 1 - r2) % 7;
  return o2 < 0 && (o2 += 7), o2;
}
function j(e2) {
  return a2 = function(e3) {
    return pe(Date.now(), e3);
  }(e2), new Te(a2.calendar, a2.era, a2.year, a2.month, a2.day);
  var a2;
}
function q(e2, a2) {
  return e2.calendar.toJulianDay(e2) - a2.calendar.toJulianDay(a2);
}
function z(e2) {
  return 36e5 * e2.hour + 6e4 * e2.minute + 1e3 * e2.second + e2.millisecond;
}
let X = null;
function ee() {
  return null == X && (X = new Intl.DateTimeFormat().resolvedOptions().timeZone), X;
}
function ae(e2) {
  return e2.subtract({ days: e2.day - 1 });
}
function te(e2) {
  return e2.add({ days: e2.calendar.getDaysInMonth(e2) - e2.day });
}
const ne = /* @__PURE__ */ new Map();
function re(e2) {
  return oe(N((e2 = me(e2, new W())).era, e2.year), e2.month, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond);
}
function oe(e2, a2, t2, n2, r2, o2, l2) {
  let i2 = /* @__PURE__ */ new Date();
  return i2.setUTCHours(n2, r2, o2, l2), i2.setUTCFullYear(e2, a2 - 1, t2), i2.getTime();
}
function le(e2, a2) {
  if ("UTC" === a2) return 0;
  if (e2 > 0 && a2 === ee()) return -6e4 * new Date(e2).getTimezoneOffset();
  let { year: t2, month: n2, day: r2, hour: o2, minute: l2, second: i2 } = ue(e2, a2);
  return oe(t2, n2, r2, o2, l2, i2, 0) - 1e3 * Math.floor(e2 / 1e3);
}
const ie = /* @__PURE__ */ new Map();
function ue(e2, a2) {
  let t2 = ie.get(a2);
  t2 || (t2 = new Intl.DateTimeFormat("en-US", { timeZone: a2, hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), ie.set(a2, t2));
  let n2 = t2.formatToParts(new Date(e2)), r2 = {};
  for (let o2 of n2) "literal" !== o2.type && (r2[o2.type] = o2.value);
  return { year: "BC" === r2.era || "B" === r2.era ? 1 - r2.year : +r2.year, month: +r2.month, day: +r2.day, hour: "24" === r2.hour ? 0 : +r2.hour, minute: +r2.minute, second: +r2.second };
}
const se = 864e5;
function de(e2, a2, t2, n2) {
  return (t2 === n2 ? [t2] : [t2, n2]).filter((t3) => function(e3, a3, t4) {
    let n3 = ue(t4, a3);
    return e3.year === n3.year && e3.month === n3.month && e3.day === n3.day && e3.hour === n3.hour && e3.minute === n3.minute && e3.second === n3.second;
  }(e2, a2, t3));
}
function ce(e2, a2, t2 = "compatible") {
  let n2 = ve(e2);
  if ("UTC" === a2) return re(n2);
  if (a2 === ee() && "compatible" === t2) {
    n2 = me(n2, new W());
    let e3 = /* @__PURE__ */ new Date(), a3 = N(n2.era, n2.year);
    return e3.setFullYear(a3, n2.month - 1, n2.day), e3.setHours(n2.hour, n2.minute, n2.second, n2.millisecond), e3.getTime();
  }
  let r2 = re(n2), o2 = le(r2 - se, a2), l2 = le(r2 + se, a2), i2 = de(n2, a2, r2 - o2, r2 - l2);
  if (1 === i2.length) return i2[0];
  if (i2.length > 1) switch (t2) {
    case "compatible":
    case "earlier":
      return i2[0];
    case "later":
      return i2[i2.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (t2) {
    case "earlier":
      return Math.min(r2 - o2, r2 - l2);
    case "compatible":
    case "later":
      return Math.max(r2 - o2, r2 - l2);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function fe(e2, a2, t2 = "compatible") {
  return new Date(ce(e2, a2, t2));
}
function pe(e2, a2) {
  let t2 = le(e2, a2), n2 = new Date(e2 + t2), r2 = n2.getUTCFullYear(), o2 = n2.getUTCMonth() + 1, l2 = n2.getUTCDate(), i2 = n2.getUTCHours(), u2 = n2.getUTCMinutes(), s2 = n2.getUTCSeconds(), d2 = n2.getUTCMilliseconds();
  return new He(r2 < 1 ? "BC" : "AD", r2 < 1 ? 1 - r2 : r2, o2, l2, a2, t2, i2, u2, s2, d2);
}
function he(e2, a2) {
  return pe(e2.getTime(), a2);
}
function ve(e2, a2) {
  let t2 = 0, n2 = 0, r2 = 0, o2 = 0;
  if ("timeZone" in e2) ({ hour: t2, minute: n2, second: r2, millisecond: o2 } = e2);
  else if ("hour" in e2 && true) return e2;
  return new We(e2.calendar, e2.era, e2.year, e2.month, e2.day, t2, n2, r2, o2);
}
function me(e2, a2) {
  if (K(e2.calendar, a2)) return e2;
  let t2 = a2.fromJulianDay(e2.calendar.toJulianDay(e2)), n2 = e2.copy();
  return n2.calendar = a2, n2.era = t2.era, n2.year = t2.year, n2.month = t2.month, n2.day = t2.day, Be(n2), n2;
}
function ye(e2, a2, t2) {
  if (e2 instanceof He) return e2.timeZone === a2 ? e2 : function(e3, a3) {
    let t3 = re(e3) - e3.offset;
    return me(pe(t3, a3), e3.calendar);
  }(e2, a2);
  return pe(ce(e2, a2, t2), a2);
}
const ge = 36e5;
function be(e2, a2) {
  let t2 = e2.copy(), n2 = "hour" in t2 ? function(e3, a3) {
    return e3.hour += a3.hours || 0, e3.minute += a3.minutes || 0, e3.second += a3.seconds || 0, e3.millisecond += a3.milliseconds || 0, function(e4) {
      e4.second += Math.floor(e4.millisecond / 1e3), e4.millisecond = Se(e4.millisecond, 1e3), e4.minute += Math.floor(e4.second / 60), e4.second = Se(e4.second, 60), e4.hour += Math.floor(e4.minute / 60), e4.minute = Se(e4.minute, 60);
      let a4 = Math.floor(e4.hour / 24);
      return e4.hour = Se(e4.hour, 24), a4;
    }(e3);
  }(t2, a2) : 0;
  we(t2, a2.years || 0), t2.calendar.balanceYearMonth && t2.calendar.balanceYearMonth(t2, e2), t2.month += a2.months || 0, Ce(t2), De(t2), t2.day += 7 * (a2.weeks || 0), t2.day += a2.days || 0, t2.day += n2, function(e3) {
    for (; e3.day < 1; ) e3.month--, Ce(e3), e3.day += e3.calendar.getDaysInMonth(e3);
    for (; e3.day > e3.calendar.getDaysInMonth(e3); ) e3.day -= e3.calendar.getDaysInMonth(e3), e3.month++, Ce(e3);
  }(t2), t2.calendar.balanceDate && t2.calendar.balanceDate(t2), t2.year < 1 && (t2.year = 1, t2.month = 1, t2.day = 1);
  let r2 = t2.calendar.getYearsInEra(t2);
  if (t2.year > r2) {
    var o2, l2;
    let e3 = null === (o2 = (l2 = t2.calendar).isInverseEra) || void 0 === o2 ? void 0 : o2.call(l2, t2);
    t2.year = r2, t2.month = e3 ? 1 : t2.calendar.getMonthsInYear(t2), t2.day = e3 ? 1 : t2.calendar.getDaysInMonth(t2);
  }
  t2.month < 1 && (t2.month = 1, t2.day = 1);
  let i2 = t2.calendar.getMonthsInYear(t2);
  return t2.month > i2 && (t2.month = i2, t2.day = t2.calendar.getDaysInMonth(t2)), t2.day = Math.max(1, Math.min(t2.calendar.getDaysInMonth(t2), t2.day)), t2;
}
function we(e2, a2) {
  var t2, n2;
  (null === (t2 = (n2 = e2.calendar).isInverseEra) || void 0 === t2 ? void 0 : t2.call(n2, e2)) && (a2 = -a2), e2.year += a2;
}
function Ce(e2) {
  for (; e2.month < 1; ) we(e2, -1), e2.month += e2.calendar.getMonthsInYear(e2);
  let a2 = 0;
  for (; e2.month > (a2 = e2.calendar.getMonthsInYear(e2)); ) e2.month -= a2, we(e2, 1);
}
function De(e2) {
  e2.month = Math.max(1, Math.min(e2.calendar.getMonthsInYear(e2), e2.month)), e2.day = Math.max(1, Math.min(e2.calendar.getDaysInMonth(e2), e2.day));
}
function Be(e2) {
  e2.calendar.constrainDate && e2.calendar.constrainDate(e2), e2.year = Math.max(1, Math.min(e2.calendar.getYearsInEra(e2), e2.year)), De(e2);
}
function ke(e2) {
  let a2 = {};
  for (let t2 in e2) "number" == typeof e2[t2] && (a2[t2] = -e2[t2]);
  return a2;
}
function xe(e2, a2) {
  return be(e2, ke(a2));
}
function Pe(e2, a2) {
  let t2 = e2.copy();
  return null != a2.era && (t2.era = a2.era), null != a2.year && (t2.year = a2.year), null != a2.month && (t2.month = a2.month), null != a2.day && (t2.day = a2.day), Be(t2), t2;
}
function Me(e2, a2) {
  let t2 = e2.copy();
  var n2;
  return null != a2.hour && (t2.hour = a2.hour), null != a2.minute && (t2.minute = a2.minute), null != a2.second && (t2.second = a2.second), null != a2.millisecond && (t2.millisecond = a2.millisecond), (n2 = t2).millisecond = Math.max(0, Math.min(n2.millisecond, 1e3)), n2.second = Math.max(0, Math.min(n2.second, 59)), n2.minute = Math.max(0, Math.min(n2.minute, 59)), n2.hour = Math.max(0, Math.min(n2.hour, 23)), t2;
}
function Se(e2, a2) {
  let t2 = e2 % a2;
  return t2 < 0 && (t2 += a2), t2;
}
function Oe(e2, a2, t2, n2) {
  let r2 = e2.copy();
  switch (a2) {
    case "era": {
      let a3 = e2.calendar.getEras(), o3 = a3.indexOf(e2.era);
      if (o3 < 0) throw new Error("Invalid era: " + e2.era);
      o3 = _e(o3, t2, 0, a3.length - 1, null == n2 ? void 0 : n2.round), r2.era = a3[o3], Be(r2);
      break;
    }
    case "year":
      var o2, l2;
      (null === (o2 = (l2 = r2.calendar).isInverseEra) || void 0 === o2 ? void 0 : o2.call(l2, r2)) && (t2 = -t2), r2.year = _e(e2.year, t2, -1 / 0, 9999, null == n2 ? void 0 : n2.round), r2.year === -1 / 0 && (r2.year = 1), r2.calendar.balanceYearMonth && r2.calendar.balanceYearMonth(r2, e2);
      break;
    case "month":
      r2.month = _e(e2.month, t2, 1, e2.calendar.getMonthsInYear(e2), null == n2 ? void 0 : n2.round);
      break;
    case "day":
      r2.day = _e(e2.day, t2, 1, e2.calendar.getDaysInMonth(e2), null == n2 ? void 0 : n2.round);
      break;
    default:
      throw new Error("Unsupported field " + a2);
  }
  return e2.calendar.balanceDate && e2.calendar.balanceDate(r2), Be(r2), r2;
}
function Ve(e2, a2, t2, n2) {
  let r2 = e2.copy();
  switch (a2) {
    case "hour": {
      let a3 = e2.hour, o2 = 0, l2 = 23;
      if (12 === (null == n2 ? void 0 : n2.hourCycle)) {
        let e3 = a3 >= 12;
        o2 = e3 ? 12 : 0, l2 = e3 ? 23 : 11;
      }
      r2.hour = _e(a3, t2, o2, l2, null == n2 ? void 0 : n2.round);
      break;
    }
    case "minute":
      r2.minute = _e(e2.minute, t2, 0, 59, null == n2 ? void 0 : n2.round);
      break;
    case "second":
      r2.second = _e(e2.second, t2, 0, 59, null == n2 ? void 0 : n2.round);
      break;
    case "millisecond":
      r2.millisecond = _e(e2.millisecond, t2, 0, 999, null == n2 ? void 0 : n2.round);
      break;
    default:
      throw new Error("Unsupported field " + a2);
  }
  return r2;
}
function _e(e2, a2, t2, n2, r2 = false) {
  if (r2) {
    (e2 += Math.sign(a2)) < t2 && (e2 = n2);
    let r3 = Math.abs(a2);
    (e2 = a2 > 0 ? Math.ceil(e2 / r3) * r3 : Math.floor(e2 / r3) * r3) > n2 && (e2 = t2);
  } else (e2 += a2) < t2 ? e2 = n2 - (t2 - e2 - 1) : e2 > n2 && (e2 = t2 + (e2 - n2 - 1));
  return e2;
}
function Ee(e2, a2) {
  let t2;
  if (null != a2.years && 0 !== a2.years || null != a2.months && 0 !== a2.months || null != a2.weeks && 0 !== a2.weeks || null != a2.days && 0 !== a2.days) {
    t2 = ce(be(ve(e2), { years: a2.years, months: a2.months, weeks: a2.weeks, days: a2.days }), e2.timeZone);
  } else t2 = re(e2) - e2.offset;
  return t2 += a2.milliseconds || 0, t2 += 1e3 * (a2.seconds || 0), t2 += 6e4 * (a2.minutes || 0), t2 += 36e5 * (a2.hours || 0), me(pe(t2, e2.timeZone), e2.calendar);
}
function Ae(e2) {
  let a2, t2 = me(e2, new W());
  return a2 = "BC" === t2.era ? 1 === t2.year ? "0000" : "-" + String(Math.abs(1 - t2.year)).padStart(6, "00") : String(t2.year).padStart(4, "0"), `${a2}-${String(t2.month).padStart(2, "0")}-${String(t2.day).padStart(2, "0")}`;
}
function Re(e2) {
  return `${Ae(e2)}T${a2 = e2, `${String(a2.hour).padStart(2, "0")}:${String(a2.minute).padStart(2, "0")}:${String(a2.second).padStart(2, "0")}${a2.millisecond ? String(a2.millisecond / 1e3).slice(1) : ""}`}`;
  var a2;
}
function Ie(e2) {
  return `${Re(e2)}${function(e3) {
    let a2 = Math.sign(e3) < 0 ? "-" : "+";
    e3 = Math.abs(e3);
    let t2 = Math.floor(e3 / 36e5), n2 = e3 % 36e5 / 6e4;
    return `${a2}${String(t2).padStart(2, "0")}:${String(n2).padStart(2, "0")}`;
  }(e2.offset)}[${e2.timeZone}]`;
}
function Ue(e2, a2, t2) {
  !function(e3, a3) {
    if (a3.has(e3)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }(e2, a2), a2.set(e2, t2);
}
function Fe(e2) {
  let a2, t2 = "object" == typeof e2[0] ? e2.shift() : new W();
  if ("string" == typeof e2[0]) a2 = e2.shift();
  else {
    let e3 = t2.getEras();
    a2 = e3[e3.length - 1];
  }
  return [t2, a2, e2.shift(), e2.shift(), e2.shift()];
}
var Ne = /* @__PURE__ */ new WeakMap();
class Te {
  copy() {
    return this.era ? new Te(this.calendar, this.era, this.year, this.month, this.day) : new Te(this.calendar, this.year, this.month, this.day);
  }
  add(e2) {
    return be(this, e2);
  }
  subtract(e2) {
    return xe(this, e2);
  }
  set(e2) {
    return Pe(this, e2);
  }
  cycle(e2, a2, t2) {
    return Oe(this, e2, a2, t2);
  }
  toDate(e2) {
    return fe(this, e2);
  }
  toString() {
    return Ae(this);
  }
  compare(e2) {
    return q(this, e2);
  }
  constructor(...e2) {
    Ue(this, Ne, { writable: true, value: void 0 });
    let [a2, t2, n2, r2, o2] = Fe(e2);
    this.calendar = a2, this.era = t2, this.year = n2, this.month = r2, this.day = o2, Be(this);
  }
}
var $e = /* @__PURE__ */ new WeakMap();
class We {
  copy() {
    return this.era ? new We(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new We(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e2) {
    return be(this, e2);
  }
  subtract(e2) {
    return xe(this, e2);
  }
  set(e2) {
    return Pe(Me(this, e2), e2);
  }
  cycle(e2, a2, t2) {
    switch (e2) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Oe(this, e2, a2, t2);
      default:
        return Ve(this, e2, a2, t2);
    }
  }
  toDate(e2, a2) {
    return fe(this, e2, a2);
  }
  toString() {
    return Re(this);
  }
  compare(e2) {
    let a2 = q(this, e2);
    return 0 === a2 ? function(e3, a3) {
      return z(e3) - z(a3);
    }(this, ve(e2)) : a2;
  }
  constructor(...e2) {
    Ue(this, $e, { writable: true, value: void 0 });
    let [a2, t2, n2, r2, o2] = Fe(e2);
    this.calendar = a2, this.era = t2, this.year = n2, this.month = r2, this.day = o2, this.hour = e2.shift() || 0, this.minute = e2.shift() || 0, this.second = e2.shift() || 0, this.millisecond = e2.shift() || 0, Be(this);
  }
}
var Je = /* @__PURE__ */ new WeakMap();
class He {
  copy() {
    return this.era ? new He(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new He(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  add(e2) {
    return Ee(this, e2);
  }
  subtract(e2) {
    return function(e3, a2) {
      return Ee(e3, ke(a2));
    }(this, e2);
  }
  set(e2, a2) {
    return function(e3, a3, t2) {
      let n2 = ve(e3), r2 = Me(Pe(n2, a3), a3);
      return 0 === r2.compare(n2) ? e3 : me(pe(ce(r2, e3.timeZone, t2), e3.timeZone), e3.calendar);
    }(this, e2, a2);
  }
  cycle(e2, a2, t2) {
    return function(e3, a3, t3, n2) {
      switch (a3) {
        case "hour": {
          let a4 = 0, r2 = 23;
          if (12 === (null == n2 ? void 0 : n2.hourCycle)) {
            let t4 = e3.hour >= 12;
            a4 = t4 ? 12 : 0, r2 = t4 ? 23 : 11;
          }
          let o2 = ve(e3), l2 = me(Me(o2, { hour: a4 }), new W()), i2 = [ce(l2, e3.timeZone, "earlier"), ce(l2, e3.timeZone, "later")].filter((a5) => pe(a5, e3.timeZone).day === l2.day)[0], u2 = me(Me(o2, { hour: r2 }), new W()), s2 = [ce(u2, e3.timeZone, "earlier"), ce(u2, e3.timeZone, "later")].filter((a5) => pe(a5, e3.timeZone).day === u2.day).pop(), d2 = re(e3) - e3.offset, c2 = Math.floor(d2 / ge), f2 = d2 % ge;
          return d2 = _e(c2, t3, Math.floor(i2 / ge), Math.floor(s2 / ge), null == n2 ? void 0 : n2.round) * ge + f2, me(pe(d2, e3.timeZone), e3.calendar);
        }
        case "minute":
        case "second":
        case "millisecond":
          return Ve(e3, a3, t3, n2);
        case "era":
        case "year":
        case "month":
        case "day":
          return me(pe(ce(Oe(ve(e3), a3, t3, n2), e3.timeZone), e3.timeZone), e3.calendar);
        default:
          throw new Error("Unsupported field " + a3);
      }
    }(this, e2, a2, t2);
  }
  toDate() {
    return function(e2) {
      let a2 = re(e2) - e2.offset;
      return new Date(a2);
    }(this);
  }
  toString() {
    return Ie(this);
  }
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  compare(e2) {
    return this.toDate().getTime() - ye(e2, this.timeZone).toDate().getTime();
  }
  constructor(...e2) {
    Ue(this, Je, { writable: true, value: void 0 });
    let [a2, t2, n2, r2, o2] = Fe(e2), l2 = e2.shift(), i2 = e2.shift();
    this.calendar = a2, this.era = t2, this.year = n2, this.month = r2, this.day = o2, this.timeZone = l2, this.offset = i2, this.hour = e2.shift() || 0, this.minute = e2.shift() || 0, this.second = e2.shift() || 0, this.millisecond = e2.shift() || 0, Be(this);
  }
}
const Ye = [[1868, 9, 8], [1912, 7, 30], [1926, 12, 25], [1989, 1, 8], [2019, 5, 1]], Le = [[1912, 7, 29], [1926, 12, 24], [1989, 1, 7], [2019, 4, 30]], Ze = [1867, 1911, 1925, 1988, 2018], Ke = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function Qe(e2) {
  const a2 = Ye.findIndex(([a3, t2, n2]) => e2.year < a3 || (e2.year === a3 && e2.month < t2 || e2.year === a3 && e2.month === t2 && e2.day < n2));
  return -1 === a2 ? Ye.length - 1 : 0 === a2 ? 0 : a2 - 1;
}
function Ge(e2) {
  let a2 = Ze[Ke.indexOf(e2.era)];
  if (!a2) throw new Error("Unknown era: " + e2.era);
  return new Te(e2.year + a2, e2.month, e2.day);
}
class je extends W {
  fromJulianDay(e2) {
    let a2 = super.fromJulianDay(e2), t2 = Qe(a2);
    return new Te(this, Ke[t2], a2.year - Ze[t2], a2.month, a2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(Ge(e2));
  }
  balanceDate(e2) {
    let a2 = Ge(e2), t2 = Qe(a2);
    Ke[t2] !== e2.era && (e2.era = Ke[t2], e2.year = a2.year - Ze[t2]), this.constrainDate(e2);
  }
  constrainDate(e2) {
    let a2 = Ke.indexOf(e2.era), t2 = Le[a2];
    if (null != t2) {
      let [n2, r2, o2] = t2, l2 = n2 - Ze[a2];
      e2.year = Math.max(1, Math.min(l2, e2.year)), e2.year === l2 && (e2.month = Math.min(r2, e2.month), e2.month === r2 && (e2.day = Math.min(o2, e2.day)));
    }
    if (1 === e2.year && a2 >= 0) {
      let [, t3, n2] = Ye[a2];
      e2.month = Math.max(t3, e2.month), e2.month === t3 && (e2.day = Math.max(n2, e2.day));
    }
  }
  getEras() {
    return Ke;
  }
  getYearsInEra(e2) {
    let a2 = Ke.indexOf(e2.era), t2 = Ye[a2], n2 = Ye[a2 + 1];
    if (null == n2) return 9999 - t2[0] + 1;
    let r2 = n2[0] - t2[0];
    return (e2.month < n2[1] || e2.month === n2[1] && e2.day < n2[2]) && r2++, r2;
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(Ge(e2));
  }
  getMinimumMonthInYear(e2) {
    let a2 = qe(e2);
    return a2 ? a2[1] : 1;
  }
  getMinimumDayInMonth(e2) {
    let a2 = qe(e2);
    return a2 && e2.month === a2[1] ? a2[2] : 1;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "japanese";
  }
}
function qe(e2) {
  if (1 === e2.year) {
    let a2 = Ke.indexOf(e2.era);
    return Ye[a2];
  }
}
class ze extends W {
  fromJulianDay(e2) {
    let a2 = super.fromJulianDay(e2), t2 = N(a2.era, a2.year);
    return new Te(this, t2 - -543, a2.month, a2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(Xe(e2));
  }
  getEras() {
    return ["BE"];
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(Xe(e2));
  }
  balanceDate() {
  }
  constructor(...e2) {
    super(...e2), this.identifier = "buddhist";
  }
}
function Xe(e2) {
  let [a2, t2] = T(e2.year + -543);
  return new Te(a2, t2, e2.month, e2.day);
}
const ea = 1911;
function aa(e2) {
  return "minguo" === e2.era ? e2.year + ea : 1 - e2.year + ea;
}
function ta(e2) {
  let a2 = e2 - ea;
  return a2 > 0 ? ["minguo", a2] : ["before_minguo", 1 - a2];
}
class na extends W {
  fromJulianDay(e2) {
    let a2 = super.fromJulianDay(e2), t2 = N(a2.era, a2.year), [n2, r2] = ta(t2);
    return new Te(this, n2, r2, a2.month, a2.day);
  }
  toJulianDay(e2) {
    return super.toJulianDay(ra(e2));
  }
  getEras() {
    return ["before_minguo", "minguo"];
  }
  balanceDate(e2) {
    let [a2, t2] = ta(aa(e2));
    e2.era = a2, e2.year = t2;
  }
  isInverseEra(e2) {
    return "before_minguo" === e2.era;
  }
  getDaysInMonth(e2) {
    return super.getDaysInMonth(ra(e2));
  }
  getYearsInEra(e2) {
    return "before_minguo" === e2.era ? 9999 : 8088;
  }
  constructor(...e2) {
    super(...e2), this.identifier = "roc";
  }
}
function ra(e2) {
  let [a2, t2] = T(aa(e2));
  return new Te(a2, t2, e2.month, e2.day);
}
const oa = 1948320, la = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class ia {
  fromJulianDay(e2) {
    let a2 = e2 - oa, t2 = 1 + Math.floor((33 * a2 + 3) / 12053), n2 = a2 - (365 * (t2 - 1) + Math.floor((8 * t2 + 21) / 33)), r2 = n2 < 216 ? Math.floor(n2 / 31) : Math.floor((n2 - 6) / 30);
    return new Te(this, t2, r2 + 1, n2 - la[r2] + 1);
  }
  toJulianDay(e2) {
    let a2 = 1948319 + 365 * (e2.year - 1) + Math.floor((8 * e2.year + 21) / 33);
    return a2 += la[e2.month - 1], a2 += e2.day, a2;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e2) {
    if (e2.month <= 6) return 31;
    if (e2.month <= 11) return 30;
    return R(25 * e2.year + 11, 33) < 8 ? 30 : 29;
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
class ua extends W {
  fromJulianDay(e2) {
    let a2, t2, n2, r2 = super.fromJulianDay(e2), o2 = r2.year - 78, l2 = e2 - U(r2.era, r2.year, 1, 1);
    if (l2 < 80 ? (o2--, a2 = F(r2.year - 1) ? 31 : 30, l2 += a2 + 155 + 90 + 10) : (a2 = F(r2.year) ? 31 : 30, l2 -= 80), l2 < a2) t2 = 1, n2 = l2 + 1;
    else {
      let e3 = l2 - a2;
      e3 < 155 ? (t2 = Math.floor(e3 / 31) + 2, n2 = e3 % 31 + 1) : (e3 -= 155, t2 = Math.floor(e3 / 30) + 7, n2 = e3 % 30 + 1);
    }
    return new Te(this, o2, t2, n2);
  }
  toJulianDay(e2) {
    let a2, t2, n2 = e2.year + 78, [r2, o2] = T(n2);
    return F(o2) ? (a2 = 31, t2 = U(r2, o2, 3, 21)) : (a2 = 30, t2 = U(r2, o2, 3, 22)), 1 === e2.month ? t2 + e2.day - 1 : (t2 += a2 + 31 * Math.min(e2.month - 2, 5), e2.month >= 8 && (t2 += 30 * (e2.month - 7)), t2 += e2.day - 1, t2);
  }
  getDaysInMonth(e2) {
    return 1 === e2.month && F(e2.year + 78) || e2.month >= 2 && e2.month <= 6 ? 31 : 30;
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
const sa = 1948440, da = 1948439, ca = 1300, fa = 1600;
function pa(e2, a2, t2, n2) {
  return n2 + Math.ceil(29.5 * (t2 - 1)) + 354 * (a2 - 1) + Math.floor((3 + 11 * a2) / 30) + e2 - 1;
}
function ha(e2, a2, t2) {
  let n2 = Math.floor((30 * (t2 - a2) + 10646) / 10631), r2 = Math.min(12, Math.ceil((t2 - (29 + pa(a2, n2, 1, 1))) / 29.5) + 1), o2 = t2 - pa(a2, n2, r2, 1) + 1;
  return new Te(e2, n2, r2, o2);
}
function va(e2) {
  return (14 + 11 * e2) % 30 < 11;
}
class ma {
  fromJulianDay(e2) {
    return ha(this, sa, e2);
  }
  toJulianDay(e2) {
    return pa(sa, e2.year, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    let a2 = 29 + e2.month % 2;
    return 12 === e2.month && va(e2.year) && a2++, a2;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e2) {
    return va(e2.year) ? 355 : 354;
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
class ya extends ma {
  fromJulianDay(e2) {
    return ha(this, da, e2);
  }
  toJulianDay(e2) {
    return pa(da, e2.year, e2.month, e2.day);
  }
  constructor(...e2) {
    super(...e2), this.identifier = "islamic-tbla";
  }
}
let ga, ba;
function wa(e2) {
  return 460322 + ba[e2 - ca];
}
function Ca(e2, a2) {
  let t2 = 1 << 11 - (a2 - 1);
  return 0 === (ga[e2 - ca] & t2) ? 29 : 30;
}
function Da(e2, a2) {
  let t2 = wa(e2);
  for (let n2 = 1; n2 < a2; n2++) t2 += Ca(e2, n2);
  return t2;
}
function Ba(e2) {
  return ba[e2 + 1 - ca] - ba[e2 - ca];
}
class ka extends ma {
  fromJulianDay(e2) {
    let a2 = e2 - sa, t2 = wa(ca), n2 = wa(fa);
    if (a2 < t2 || a2 > n2) return super.fromJulianDay(e2);
    {
      let e3 = 1299, t3 = 1, n3 = 1;
      for (; n3 > 0; ) {
        e3++, n3 = a2 - wa(e3) + 1;
        let r2 = Ba(e3);
        if (n3 === r2) {
          t3 = 12;
          break;
        }
        if (n3 < r2) {
          let a3 = Ca(e3, t3);
          for (t3 = 1; n3 > a3; ) n3 -= a3, t3++, a3 = Ca(e3, t3);
          break;
        }
      }
      return new Te(this, e3, t3, a2 - Da(e3, t3) + 1);
    }
  }
  toJulianDay(e2) {
    return e2.year < ca || e2.year > fa ? super.toJulianDay(e2) : sa + Da(e2.year, e2.month) + (e2.day - 1);
  }
  getDaysInMonth(e2) {
    return e2.year < ca || e2.year > fa ? super.getDaysInMonth(e2) : Ca(e2.year, e2.month);
  }
  getDaysInYear(e2) {
    return e2.year < ca || e2.year > fa ? super.getDaysInYear(e2) : Ba(e2.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", ga || (ga = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), (e2) => e2.charCodeAt(0)).buffer)), !ba) {
      ba = new Uint32Array(301);
      let e2 = 0;
      for (let a2 = ca; a2 <= fa; a2++) {
        ba[a2 - ca] = e2;
        for (let t2 = 1; t2 <= 12; t2++) e2 += Ca(a2, t2);
      }
    }
  }
}
const xa = 347997;
function Pa(e2) {
  return R(7 * e2 + 1, 19) < 7;
}
function Ma(e2) {
  let a2 = Math.floor((235 * e2 - 234) / 19), t2 = 12084 + 13753 * a2, n2 = 29 * a2 + Math.floor(t2 / 25920);
  return R(3 * (n2 + 1), 7) < 3 && (n2 += 1), n2;
}
function Sa(e2) {
  return Ma(e2) + function(e3) {
    let a2 = Ma(e3 - 1), t2 = Ma(e3);
    return Ma(e3 + 1) - t2 === 356 ? 2 : t2 - a2 === 382 ? 1 : 0;
  }(e2);
}
function Oa(e2) {
  return Sa(e2 + 1) - Sa(e2);
}
function Va(e2, a2) {
  if (a2 >= 6 && !Pa(e2) && a2++, 4 === a2 || 7 === a2 || 9 === a2 || 11 === a2 || 13 === a2) return 29;
  let t2 = function(e3) {
    let a3 = Oa(e3);
    switch (a3 > 380 && (a3 -= 30), a3) {
      case 353:
        return 0;
      case 354:
        return 1;
      case 355:
        return 2;
    }
  }(e2);
  return 2 === a2 ? 2 === t2 ? 30 : 29 : 3 === a2 ? 0 === t2 ? 29 : 30 : 6 === a2 ? Pa(e2) ? 30 : 0 : 30;
}
class _a {
  fromJulianDay(e2) {
    let a2 = e2 - xa, t2 = 25920 * a2 / 765433, n2 = Math.floor((19 * t2 + 234) / 235) + 1, r2 = Sa(n2), o2 = Math.floor(a2 - r2);
    for (; o2 < 1; ) n2--, r2 = Sa(n2), o2 = Math.floor(a2 - r2);
    let l2 = 1, i2 = 0;
    for (; i2 < o2; ) i2 += Va(n2, l2), l2++;
    return l2--, i2 -= Va(n2, l2), new Te(this, n2, l2, o2 - i2);
  }
  toJulianDay(e2) {
    let a2 = Sa(e2.year);
    for (let t2 = 1; t2 < e2.month; t2++) a2 += Va(e2.year, t2);
    return a2 + e2.day + xa;
  }
  getDaysInMonth(e2) {
    return Va(e2.year, e2.month);
  }
  getMonthsInYear(e2) {
    return Pa(e2.year) ? 13 : 12;
  }
  getDaysInYear(e2) {
    return Oa(e2.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return ["AM"];
  }
  balanceYearMonth(e2, a2) {
    a2.year !== e2.year && (Pa(a2.year) && !Pa(e2.year) && a2.month > 6 ? e2.month-- : !Pa(a2.year) && Pa(e2.year) && a2.month > 6 && e2.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Ea = 1723856, Aa = 1824665, Ra = 5500;
function Ia(e2, a2, t2, n2) {
  return e2 + 365 * a2 + Math.floor(a2 / 4) + 30 * (t2 - 1) + n2 - 1;
}
function Ua(e2, a2) {
  let t2 = Math.floor(4 * (a2 - e2) / 1461), n2 = 1 + Math.floor((a2 - Ia(e2, t2, 1, 1)) / 30);
  return [t2, n2, a2 + 1 - Ia(e2, t2, n2, 1)];
}
function Fa(e2) {
  return Math.floor(e2 % 4 / 3);
}
function Na(e2, a2) {
  return a2 % 13 != 0 ? 30 : Fa(e2) + 5;
}
class Ta {
  fromJulianDay(e2) {
    let [a2, t2, n2] = Ua(Ea, e2), r2 = "AM";
    return a2 <= 0 && (r2 = "AA", a2 += Ra), new Te(this, r2, a2, t2, n2);
  }
  toJulianDay(e2) {
    let a2 = e2.year;
    return "AA" === e2.era && (a2 -= Ra), Ia(Ea, a2, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    return Na(e2.year, e2.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e2) {
    return 365 + Fa(e2.year);
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
class $a extends Ta {
  fromJulianDay(e2) {
    let [a2, t2, n2] = Ua(Ea, e2);
    return a2 += Ra, new Te(this, "AA", a2, t2, n2);
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
class Wa extends Ta {
  fromJulianDay(e2) {
    let [a2, t2, n2] = Ua(Aa, e2), r2 = "CE";
    return a2 <= 0 && (r2 = "BCE", a2 = 1 - a2), new Te(this, r2, a2, t2, n2);
  }
  toJulianDay(e2) {
    let a2 = e2.year;
    return "BCE" === e2.era && (a2 = 1 - a2), Ia(Aa, a2, e2.month, e2.day);
  }
  getDaysInMonth(e2) {
    let a2 = e2.year;
    return "BCE" === e2.era && (a2 = 1 - a2), Na(a2, e2.month);
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
let Ja = /* @__PURE__ */ new Map();
class Ha {
  format(e2) {
    return this.formatter.format(e2);
  }
  formatToParts(e2) {
    return this.formatter.formatToParts(e2);
  }
  formatRange(e2, a2) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e2, a2);
    if (a2 < e2) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(e2)} \u2013 ${this.formatter.format(a2)}`;
  }
  formatRangeToParts(e2, a2) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e2, a2);
    if (a2 < e2) throw new RangeError("End date must be >= start date");
    let t2 = this.formatter.formatToParts(e2), n2 = this.formatter.formatToParts(a2);
    return [...t2.map((e3) => ({ ...e3, source: "startRange" })), { type: "literal", value: " \u2013 ", source: "shared" }, ...n2.map((e3) => ({ ...e3, source: "endRange" }))];
  }
  resolvedOptions() {
    let e2 = this.formatter.resolvedOptions();
    return function() {
      null == Ka && (Ka = "h12" === new Intl.DateTimeFormat("fr", { hour: "numeric", hour12: false }).resolvedOptions().hourCycle);
      return Ka;
    }() && (this.resolvedHourCycle || (this.resolvedHourCycle = function(e3, a2) {
      if (!a2.timeStyle && !a2.hour) return;
      e3 = e3.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
      let t2 = La(e3 += (e3.includes("-u-") ? "" : "-u") + "-nu-latn", { ...a2, timeZone: void 0 }), n2 = parseInt(t2.formatToParts(new Date(2020, 2, 3, 0)).find((e4) => "hour" === e4.type).value, 10), r2 = parseInt(t2.formatToParts(new Date(2020, 2, 3, 23)).find((e4) => "hour" === e4.type).value, 10);
      if (0 === n2 && 23 === r2) return "h23";
      if (24 === n2 && 23 === r2) return "h24";
      if (0 === n2 && 11 === r2) return "h11";
      if (12 === n2 && 11 === r2) return "h12";
      throw new Error("Unexpected hour cycle result");
    }(e2.locale, this.options)), e2.hourCycle = this.resolvedHourCycle, e2.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e2.calendar && (e2.calendar = "ethioaa"), e2;
  }
  constructor(e2, a2 = {}) {
    this.formatter = La(e2, a2), this.options = a2;
  }
}
const Ya = { true: { ja: "h11" }, false: {} };
function La(e2, a2 = {}) {
  if ("boolean" == typeof a2.hour12 && function() {
    null == Za && (Za = "24" === new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false }).format(new Date(2020, 2, 3, 0)));
    return Za;
  }()) {
    a2 = { ...a2 };
    let t3 = Ya[String(a2.hour12)][e2.split("-")[0]], n3 = a2.hour12 ? "h12" : "h23";
    a2.hourCycle = null != t3 ? t3 : n3, delete a2.hour12;
  }
  let t2 = e2 + (a2 ? Object.entries(a2).sort((e3, a3) => e3[0] < a3[0] ? -1 : 1).join() : "");
  if (Ja.has(t2)) return Ja.get(t2);
  let n2 = new Intl.DateTimeFormat(e2, a2);
  return Ja.set(t2, n2), n2;
}
let Za = null;
let Ka = null;
function Qa(e2) {
  const { defaultValue: a2, defaultPlaceholder: t2, granularity: n2 = "day", locale: r2 = "en" } = e2;
  if (Array.isArray(a2) && a2.length) return a2.at(-1).copy();
  if (a2 && !Array.isArray(a2)) return a2.copy();
  if (t2) return t2.copy();
  const o2 = /* @__PURE__ */ new Date(), l2 = o2.getFullYear(), i2 = o2.getMonth() + 1, u2 = o2.getDate(), s2 = function(e3) {
    switch (e3) {
      case "buddhist":
        return new ze();
      case "ethiopic":
        return new Ta();
      case "ethioaa":
        return new $a();
      case "coptic":
        return new Wa();
      case "hebrew":
        return new _a();
      case "indian":
        return new ua();
      case "islamic-civil":
        return new ma();
      case "islamic-tbla":
        return new ya();
      case "islamic-umalqura":
        return new ka();
      case "japanese":
        return new je();
      case "persian":
        return new ia();
      case "roc":
        return new na();
      default:
        return new W();
    }
  }(new Ha(r2).resolvedOptions().calendar);
  return ["hour", "minute", "second"].includes(n2 != null ? n2 : "day") ? me(new We(l2, i2, u2, 0, 0, 0), s2) : me(new Te(l2, i2, u2), s2);
}
function Ga(e2, a2 = ee()) {
  return ja(e2) ? e2.toDate() : e2.toDate(a2);
}
function ja(e2) {
  return e2 instanceof He;
}
function qa(e2) {
  return function(e3) {
    return e3 instanceof We;
  }(e2) || ja(e2);
}
function za(e2) {
  if (e2 instanceof Date) {
    const a2 = e2.getFullYear(), t2 = e2.getMonth() + 1;
    return new Date(a2, t2, 0).getDate();
  }
  return e2.set({ day: 100 }).day;
}
function Xa(e2, a2) {
  return e2.compare(a2) < 0;
}
function et(e2, a2) {
  return e2.compare(a2) > 0;
}
function at(e2, a2) {
  const t2 = [];
  let n2 = e2.add({ days: 1 });
  const r2 = a2;
  for (; n2.compare(r2) < 0; ) t2.push(n2), n2 = n2.add({ days: 1 });
  return t2;
}
function tt(e2) {
  const { dateObj: a2, weekStartsOn: t2, fixedWeeks: n2, locale: r2 } = e2, o2 = za(a2), l2 = Array.from({ length: o2 }, (e3, t3) => a2.set({ day: t3 + 1 })), i2 = ae(a2), u2 = te(a2), s2 = function(e3, a3, t3) {
    const n3 = G(e3, t3);
    return a3 > n3 ? e3.subtract({ days: n3 + 7 - a3 }) : a3 === n3 ? e3 : e3.subtract({ days: n3 - a3 });
  }(i2, t2, r2), d2 = function(e3, a3, t3) {
    const n3 = G(e3, t3), r3 = 0 === a3 ? 6 : a3 - 1;
    return n3 === r3 ? e3 : n3 > r3 ? e3.add({ days: 7 - n3 + r3 }) : e3.add({ days: r3 - n3 });
  }(u2, t2, r2), c2 = at(s2.subtract({ days: 1 }), i2), f2 = at(u2, d2.add({ days: 1 })), p2 = c2.length + l2.length + f2.length;
  if (n2 && p2 < 42) {
    const e3 = 42 - p2;
    let t3 = f2[f2.length - 1];
    t3 || (t3 = te(a2));
    const n3 = Array.from({ length: e3 }, (e4, a3) => {
      const n4 = a3 + 1;
      return t3.add({ days: n4 });
    });
    f2.push(...n3);
  }
  const h2 = c2.concat(l2, f2), v2 = function(e3, a3) {
    const t3 = [];
    for (let n3 = 0; n3 < e3.length; n3 += a3) t3.push(e3.slice(n3, n3 + a3));
    return t3;
  }(h2, 7);
  return { value: a2, cells: h2, rows: v2 };
}
function nt(e2) {
  const { numberOfMonths: a2, dateObj: t2, ...n2 } = e2, r2 = [];
  if (!a2 || 1 === a2) return r2.push(tt({ ...n2, dateObj: t2 })), r2;
  r2.push(tt({ ...n2, dateObj: t2 }));
  for (let o2 = 1; o2 < a2; o2++) {
    const e3 = t2.add({ months: o2 });
    r2.push(tt({ ...n2, dateObj: e3 }));
  }
  return r2;
}
function rt(a2) {
  const t2 = function(a3, t3 = {}) {
    const n3 = Wt$1.ref(a3);
    function r3(e2, a4) {
      return new Ha(n3.value, { ...t3, ...a4 }).format(e2);
    }
    function o3(e2, a4 = {}) {
      return new Ha(n3.value, { ...t3, month: "long", ...a4 }).format(e2);
    }
    function l3(e2, a4) {
      return ja(e2) ? new Ha(n3.value, { ...t3, ...a4, timeZone: e2.timeZone }).formatToParts(Ga(e2)) : new Ha(n3.value, { ...t3, ...a4 }).formatToParts(Ga(e2));
    }
    const i3 = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    return { setLocale: function(e2) {
      n3.value = e2;
    }, getLocale: function() {
      return n3.value;
    }, fullMonth: o3, fullYear: function(e2, a4 = {}) {
      return new Ha(n3.value, { ...t3, year: "numeric", ...a4 }).format(e2);
    }, fullMonthAndYear: function(e2, a4 = {}) {
      return new Ha(n3.value, { ...t3, month: "long", year: "numeric", ...a4 }).format(e2);
    }, toParts: l3, custom: r3, part: function(e2, a4, t4 = {}) {
      const n4 = l3(e2, { ...i3, ...t4 }).find((e3) => e3.type === a4);
      return n4 ? n4.value : "";
    }, dayPeriod: function(e2) {
      var a4;
      return "PM" === (null == (a4 = new Ha(n3.value, { ...t3, hour: "numeric", minute: "numeric" }).formatToParts(e2).find((e3) => "dayPeriod" === e3.type)) ? void 0 : a4.value) ? "PM" : "AM";
    }, selectedDate: function(e2, a4 = true) {
      return qa(e2) && a4 ? r3(Ga(e2), { dateStyle: "long", timeStyle: "long" }) : r3(Ga(e2), { dateStyle: "long" });
    }, dayOfWeek: function(e2, a4 = "narrow") {
      return new Ha(n3.value, { ...t3, weekday: a4 }).format(e2);
    }, getMonths: function() {
      const e2 = j(ee());
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a4) => ({ label: o3(Ga(e2.set({ month: a4 }))), value: a4 }));
    } };
  }(a2.locale.value), n2 = Wt$1.computed(() => {
    const e2 = { calendar: a2.placeholder.value.calendar.identifier };
    return "gregory" === a2.placeholder.value.calendar.identifier && "BC" === a2.placeholder.value.era && (e2.era = "short"), e2;
  }), r2 = Wt$1.ref(nt({ dateObj: a2.placeholder.value, weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value })), o2 = Wt$1.computed(() => r2.value.map((e2) => e2.value));
  const l2 = Wt$1.computed(() => r2.value.length ? r2.value[0].rows[0].map((e2) => t2.dayOfWeek(Ga(e2), a2.weekdayFormat.value)) : []);
  Wt$1.watch(a2.placeholder, (e2) => {
    o2.value.some((a3) => Z(a3, e2)) || (r2.value = nt({ dateObj: e2, weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value }));
  }), Wt$1.watch([a2.locale, a2.weekStartsOn, a2.fixedWeeks, a2.numberOfMonths], () => {
    r2.value = nt({ dateObj: a2.placeholder.value, weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value });
  });
  const i2 = Wt$1.computed(() => {
    if (!r2.value.length) return "";
    if (a2.locale.value !== t2.getLocale() && t2.setLocale(a2.locale.value), 1 === r2.value.length) {
      const e3 = r2.value[0].value;
      return `${t2.fullMonthAndYear(Ga(e3), n2.value)}`;
    }
    const e2 = Ga(r2.value[0].value), o3 = Ga(r2.value[r2.value.length - 1].value), l3 = t2.fullMonth(e2, n2.value), i3 = t2.fullMonth(o3, n2.value), u3 = t2.fullYear(e2, n2.value), s2 = t2.fullYear(o3, n2.value);
    return u3 === s2 ? `${l3} - ${i3} ${s2}` : `${l3} ${u3} - ${i3} ${s2}`;
  }), u2 = Wt$1.computed(() => {
    var _a2;
    return `${(_a2 = a2.calendarLabel.value) != null ? _a2 : "Event Date"}, ${i2.value}`;
  });
  return { isDateDisabled: function(e2) {
    var t3;
    return !(!(null == (t3 = a2.isDateDisabled) ? void 0 : t3.call(a2, e2)) && !a2.disabled.value) || (!(!a2.maxValue.value || !et(e2, a2.maxValue.value)) || !(!a2.minValue.value || !Xa(e2, a2.minValue.value)));
  }, isDateUnavailable: (e2) => {
    var t3;
    return !!(null == (t3 = a2.isDateUnavailable) ? void 0 : t3.call(a2, e2));
  }, isNextButtonDisabled: (e2) => {
    if (!a2.maxValue.value || !r2.value.length) return false;
    if (a2.disabled.value) return true;
    const t3 = r2.value[r2.value.length - 1].value;
    if (!e2 && !a2.nextPage.value) {
      return et(t3.add({ months: 1 }).set({ day: 1 }), a2.maxValue.value);
    }
    const n3 = function(e3, a3) {
      const t4 = a3(e3), n4 = t4.compare(e3), r3 = {};
      return n4 >= 7 && (r3.day = 1), n4 >= za(e3) && (r3.month = 1), t4.set({ ...r3 });
    }(t3, e2 || a2.nextPage.value);
    return et(n3, a2.maxValue.value);
  }, isPrevButtonDisabled: (e2) => {
    if (!a2.minValue.value || !r2.value.length) return false;
    if (a2.disabled.value) return true;
    const t3 = r2.value[0].value;
    if (!e2 && !a2.prevPage.value) {
      return Xa(t3.subtract({ months: 1 }).set({ day: 35 }), a2.minValue.value);
    }
    const n3 = function(e3, a3) {
      const t4 = a3(e3), n4 = e3.compare(t4), r3 = {};
      return n4 >= 7 && (r3.day = 35), n4 >= za(e3) && (r3.month = 13), t4.set({ ...r3 });
    }(t3, e2 || a2.prevPage.value);
    return Xa(n3, a2.minValue.value);
  }, grid: r2, weekdays: l2, visibleView: o2, isOutsideVisibleView: function(e2) {
    return !o2.value.some((a3) => Z(e2, a3));
  }, formatter: t2, nextPage: (e2) => {
    const t3 = r2.value[0].value;
    if (!e2 && !a2.nextPage.value) {
      const e3 = nt({ dateObj: t3.add({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }), weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value });
      return r2.value = e3, void (a2.placeholder.value = e3[0].value.set({ day: 1 }));
    }
    const n3 = function(e3, a3) {
      return a3(e3);
    }(t3, e2 || a2.nextPage.value), o3 = nt({ dateObj: n3, weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value });
    r2.value = o3;
    const l3 = {};
    if (!e2) {
      const e3 = o3[0].value.compare(t3);
      e3 >= za(t3) && (l3.day = 1), e3 >= 365 && (l3.month = 1);
    }
    a2.placeholder.value = o3[0].value.set({ ...l3 });
  }, prevPage: (e2) => {
    const t3 = r2.value[0].value;
    if (!e2 && !a2.prevPage.value) {
      const e3 = nt({ dateObj: t3.subtract({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }), weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value });
      return r2.value = e3, void (a2.placeholder.value = e3[0].value.set({ day: 1 }));
    }
    const n3 = function(e3, a3) {
      return a3(e3);
    }(t3, e2 || a2.prevPage.value), o3 = nt({ dateObj: n3, weekStartsOn: a2.weekStartsOn.value, locale: a2.locale.value, fixedWeeks: a2.fixedWeeks.value, numberOfMonths: a2.numberOfMonths.value });
    r2.value = o3;
    const l3 = {};
    if (!e2) {
      const e3 = t3.compare(o3[0].value);
      e3 >= za(t3) && (l3.day = 1), e3 >= 365 && (l3.month = 1);
    }
    a2.placeholder.value = o3[0].value.set({ ...l3 });
  }, headingValue: i2, fullCalendarLabel: u2 };
}
function ot(a2) {
  const t2 = o({ locale: Wt$1.ref("en") });
  return Wt$1.computed(() => {
    var e2;
    return (null == a2 ? void 0 : a2.value) || (null == (e2 = t2.locale) ? void 0 : e2.value) || "en";
  });
}
const lt = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, it = { role: "heading", "aria-level": "2" }, [ut, st] = T$1("CalendarRoot"), dt = Wt$1.defineComponent({ __name: "CalendarRoot", props: { defaultValue: { default: void 0 }, defaultPlaceholder: {}, placeholder: { default: void 0 }, pagedNavigation: { type: Boolean, default: false }, preventDeselect: { type: Boolean, default: false }, weekStartsOn: { default: 0 }, weekdayFormat: { default: "narrow" }, calendarLabel: {}, fixedWeeks: { type: Boolean, default: false }, maxValue: {}, minValue: {}, locale: {}, numberOfMonths: { default: 1 }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, initialFocus: { type: Boolean, default: false }, isDateDisabled: { type: Function, default: void 0 }, isDateUnavailable: { type: Function, default: void 0 }, dir: {}, nextPage: {}, prevPage: {}, modelValue: {}, multiple: { type: Boolean, default: false }, disableDaysOutsideCurrentView: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["update:modelValue", "update:placeholder"], setup(t2, { emit: n2 }) {
  var _a2;
  const r2 = t2, o2 = n2, { disabled: l2, readonly: i2, initialFocus: u2, pagedNavigation: d2, weekStartsOn: c2, weekdayFormat: f2, fixedWeeks: p2, multiple: h2, minValue: m2, maxValue: g2, numberOfMonths: b2, preventDeselect: w2, isDateDisabled: C2, isDateUnavailable: D2, calendarLabel: B2, defaultValue: k2, nextPage: x2, prevPage: P2, dir: M2, locale: S2, disableDaysOutsideCurrentView: O2 } = Wt$1.toRefs(r2), { primitiveElement: V2, currentElement: _2 } = t(), E2 = ot(S2), A2 = e(M2), R2 = C(r2, "modelValue", o2, { defaultValue: k2.value, passive: void 0 === r2.modelValue }), I2 = Qa({ defaultPlaceholder: r2.placeholder, defaultValue: R2.value, locale: r2.locale }), U2 = C(r2, "placeholder", o2, { defaultValue: (_a2 = r2.defaultPlaceholder) != null ? _a2 : I2.copy(), passive: void 0 === r2.placeholder });
  function F2(e2) {
    U2.value = e2.copy();
  }
  const { fullCalendarLabel: N2, headingValue: T2, isDateDisabled: $2, isDateUnavailable: W2, isNextButtonDisabled: J2, isPrevButtonDisabled: Y2, weekdays: Z2, isOutsideVisibleView: K2, nextPage: Q2, prevPage: G2, formatter: j2, grid: q2 } = rt({ locale: E2, placeholder: U2, weekStartsOn: c2, fixedWeeks: p2, numberOfMonths: b2, minValue: m2, maxValue: g2, disabled: l2, weekdayFormat: f2, pagedNavigation: d2, isDateDisabled: C2.value, isDateUnavailable: D2.value, calendarLabel: B2, nextPage: x2, prevPage: P2 }), { isInvalid: z2, isDateSelected: X2 } = function(a2) {
    return { isDateSelected: function(e2) {
      return Array.isArray(a2.date.value) ? a2.date.value.some((a3) => H(a3, e2)) : !!a2.date.value && H(a2.date.value, e2);
    }, isInvalid: Wt$1.computed(() => {
      var e2, t3, n3, r3;
      if (Array.isArray(a2.date.value)) {
        if (!a2.date.value.length) return false;
        for (const n4 of a2.date.value) {
          if (null == (e2 = a2.isDateDisabled) ? void 0 : e2.call(a2, n4)) return true;
          if (null == (t3 = a2.isDateUnavailable) ? void 0 : t3.call(a2, n4)) return true;
        }
      } else {
        if (!a2.date.value) return false;
        if (null == (n3 = a2.isDateDisabled) ? void 0 : n3.call(a2, a2.date.value)) return true;
        if (null == (r3 = a2.isDateUnavailable) ? void 0 : r3.call(a2, a2.date.value)) return true;
      }
      return false;
    }) };
  }({ date: R2, isDateDisabled: $2, isDateUnavailable: W2 });
  return Wt$1.watch(R2, (e2) => {
    if (Array.isArray(e2) && e2.length) {
      const a2 = e2[e2.length - 1];
      a2 && !L(U2.value, a2) && F2(a2);
    } else Array.isArray(e2) || !e2 || L(U2.value, e2) || F2(e2);
  }), st({ isDateUnavailable: W2, dir: A2, isDateDisabled: $2, locale: E2, formatter: j2, modelValue: R2, placeholder: U2, disabled: l2, initialFocus: u2, pagedNavigation: d2, grid: q2, weekDays: Z2, weekStartsOn: c2, weekdayFormat: f2, fixedWeeks: p2, multiple: h2, numberOfMonths: b2, readonly: i2, preventDeselect: w2, fullCalendarLabel: N2, headingValue: T2, isInvalid: z2, isDateSelected: X2, isNextButtonDisabled: J2, isPrevButtonDisabled: Y2, isOutsideVisibleView: K2, nextPage: Q2, prevPage: G2, parentElement: _2, onPlaceholderChange: F2, onDateChange: function(e2) {
    if (h2.value) if (R2.value) {
      if (Array.isArray(R2.value)) {
        if (-1 === R2.value.findIndex((a2) => H(a2, e2))) R2.value = [...R2.value, e2];
        else if (!w2.value) {
          const a2 = R2.value.filter((a3) => !H(a3, e2));
          if (!a2.length) return U2.value = e2.copy(), void (R2.value = void 0);
          R2.value = a2.map((e3) => e3.copy());
        }
      }
    } else R2.value = [e2.copy()];
    else {
      if (!R2.value) return void (R2.value = e2.copy());
      !w2.value && L(R2.value, e2) ? (U2.value = e2.copy(), R2.value = void 0) : R2.value = e2.copy();
    }
  }, disableDaysOutsideCurrentView: O2 }), (t3, n3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { ref_key: "primitiveElement", ref: V2, as: t3.as, "as-child": t3.asChild, role: "application", "aria-label": Wt$1.unref(N2), "data-readonly": Wt$1.unref(i2) ? "" : void 0, "data-disabled": Wt$1.unref(l2) ? "" : void 0, "data-invalid": Wt$1.unref(z2) ? "" : void 0, dir: Wt$1.unref(A2) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { date: Wt$1.unref(U2), grid: Wt$1.unref(q2), weekDays: Wt$1.unref(Z2), weekStartsOn: Wt$1.unref(c2), locale: Wt$1.unref(E2), fixedWeeks: Wt$1.unref(p2), modelValue: Wt$1.unref(R2) }), Wt$1.createElementVNode("div", lt, [Wt$1.createElementVNode("div", it, Wt$1.toDisplayString(Wt$1.unref(N2)), 1)])]), _: 3 }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
} }), ct = Wt$1.defineComponent({ __name: "CalendarCell", props: { date: {}, asChild: { type: Boolean }, as: { default: "td" } }, setup(t2) {
  const n2 = ut();
  return (t3, r2) => {
    var o2, l2;
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { as: t3.as, "as-child": t3.asChild, role: "gridcell", "aria-selected": !!Wt$1.unref(n2).isDateSelected(t3.date) || void 0, "aria-disabled": Wt$1.unref(n2).isDateDisabled(t3.date) || (null == (l2 = (o2 = Wt$1.unref(n2)).isDateUnavailable) ? void 0 : l2.call(o2, t3.date)) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value, "data-disabled": Wt$1.unref(n2).isDateDisabled(t3.date) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value ? "" : void 0 }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
  };
} });
function ft(e2) {
  var _a2;
  return (_a2 = Array.from(e2.querySelectorAll("[data-reka-calendar-cell-trigger]:not([data-outside-view]):not([data-outside-visible-view])"))) != null ? _a2 : [];
}
const pt = Wt$1.defineComponent({ __name: "CalendarCellTrigger", props: { day: {}, month: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2, r2 = F$2(), o2 = ut(), { primitiveElement: l2, currentElement: i2 } = t(), u2 = Wt$1.computed(() => n2.day.day.toLocaleString(o2.locale.value)), s2 = Wt$1.computed(() => o2.formatter.custom(Ga(n2.day), { weekday: "long", month: "long", day: "numeric", year: "numeric" })), d2 = Wt$1.computed(() => {
    var _a2;
    var e2;
    return (_a2 = null == (e2 = o2.isDateUnavailable) ? void 0 : e2.call(o2, n2.day)) != null ? _a2 : false;
  }), c2 = Wt$1.computed(() => Q(n2.day, ee())), f2 = Wt$1.computed(() => !Y(n2.day, n2.month)), p2 = Wt$1.computed(() => o2.isOutsideVisibleView(n2.day)), h2 = Wt$1.computed(() => o2.isDateDisabled(n2.day) || o2.disableDaysOutsideCurrentView.value && f2.value), m2 = Wt$1.computed(() => !o2.disabled.value && H(n2.day, o2.placeholder.value)), y2 = Wt$1.computed(() => o2.isDateSelected(n2.day));
  function b2(e2) {
    var a2;
    o2.readonly.value || o2.isDateDisabled(e2) || (null == (a2 = o2.isDateUnavailable) ? void 0 : a2.call(o2, e2)) || o2.onDateChange(e2);
  }
  function w2() {
    h2.value || b2(n2.day);
  }
  function C2(a2) {
    if (h2.value) return;
    a2.preventDefault(), a2.stopPropagation();
    const t3 = o2.parentElement.value, l3 = "rtl" === o2.dir.value ? -1 : 1;
    switch (a2.code) {
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
        b2(n2.day);
    }
    function u3(a3, n3) {
      const r3 = ft(t3);
      if (!r3.length) return;
      const l4 = r3.indexOf(a3) + n3;
      if (l4 >= 0 && l4 < r3.length) return r3[l4].hasAttribute("data-disabled") && u3(r3[l4], n3), void r3[l4].focus();
      if (l4 < 0) {
        if (o2.isPrevButtonDisabled()) return;
        return o2.prevPage(), void Wt$1.nextTick(() => {
          const e2 = ft(t3);
          if (!e2.length) return;
          if (!o2.pagedNavigation.value && o2.numberOfMonths.value > 1) {
            const a5 = za(o2.placeholder.value) - Math.abs(l4);
            return e2[a5].hasAttribute("data-disabled") && u3(e2[a5], n3), void e2[a5].focus();
          }
          const a4 = e2.length - Math.abs(l4);
          e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), e2[a4].focus();
        });
      }
      if (l4 >= r3.length) {
        if (o2.isNextButtonDisabled()) return;
        o2.nextPage(), Wt$1.nextTick(() => {
          const e2 = ft(t3);
          if (!e2.length) return;
          if (!o2.pagedNavigation.value && o2.numberOfMonths.value > 1) {
            const a5 = za(o2.placeholder.value.add({ months: o2.numberOfMonths.value - 1 })), t4 = l4 - r3.length + (e2.length - a5);
            return e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), void e2[t4].focus();
          }
          const a4 = l4 - r3.length;
          e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), e2[a4].focus();
        });
      }
    }
  }
  return (t3, r3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps({ ref_key: "primitiveElement", ref: l2 }, n2, { role: "button", "aria-label": s2.value, "data-reka-calendar-cell-trigger": "", "aria-disabled": !(!h2.value && !d2.value) || void 0, "data-selected": !!y2.value || void 0, "data-value": t3.day.toString(), "data-disabled": h2.value ? "" : void 0, "data-unavailable": d2.value ? "" : void 0, "data-today": c2.value ? "" : void 0, "data-outside-view": f2.value ? "" : void 0, "data-outside-visible-view": p2.value ? "" : void 0, "data-focused": m2.value ? "" : void 0, tabindex: m2.value ? 0 : f2.value || h2.value ? void 0 : -1, onClick: w2, onKeydown: [Wt$1.withKeys(C2, ["up", "down", "left", "right", "space", "enter"]), r3[0] || (r3[0] = Wt$1.withKeys(Wt$1.withModifiers(() => {
  }, ["prevent"]), ["enter"]))] }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { dayValue: u2.value, disabled: h2.value, today: c2.value, selected: y2.value, outsideView: f2.value, outsideVisibleView: p2.value, unavailable: d2.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(u2.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
} }), ht = Wt$1.defineComponent({ __name: "CalendarGrid", props: { asChild: { type: Boolean }, as: { default: "table" } }, setup(t2) {
  const n2 = t2, r2 = ut(), o2 = Wt$1.computed(() => !!r2.disabled.value || void 0), l2 = Wt$1.computed(() => !!r2.readonly.value || void 0);
  return (t3, r3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { tabindex: "-1", role: "grid", "aria-readonly": l2.value, "aria-disabled": o2.value, "data-readonly": l2.value && "", "data-disabled": o2.value && "" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
} }), vt = Wt$1.defineComponent({ __name: "CalendarGridBody", props: { asChild: { type: Boolean }, as: { default: "tbody" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), mt = Wt$1.defineComponent({ __name: "CalendarGridHead", props: { asChild: { type: Boolean }, as: { default: "thead" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "aria-hidden": "true" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), yt = Wt$1.defineComponent({ __name: "CalendarGridRow", props: { asChild: { type: Boolean }, as: { default: "tr" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), gt = Wt$1.defineComponent({ __name: "CalendarHeadCell", props: { asChild: { type: Boolean }, as: { default: "th" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), bt = Wt$1.defineComponent({ __name: "CalendarHeader", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), wt = Wt$1.defineComponent({ __name: "CalendarHeading", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2, r2 = ut();
  return (t3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "data-disabled": Wt$1.unref(r2).disabled.value ? "" : void 0 }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { headingValue: Wt$1.unref(r2).headingValue.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(Wt$1.unref(r2).headingValue.value), 1)])]), _: 3 }, 16, ["data-disabled"]));
} }), Ct = Wt$1.defineComponent({ __name: "CalendarNext", props: { nextPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2, r2 = Wt$1.computed(() => o2.disabled.value || o2.isNextButtonDisabled(n2.nextPage)), o2 = ut();
  return (t3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { as: n2.as, "as-child": n2.asChild, "aria-label": "Next page", type: "button" === t3.as ? "button" : void 0, "aria-disabled": r2.value || void 0, "data-disabled": r2.value || void 0, disabled: r2.value, onClick: l2[0] || (l2[0] = (a2) => Wt$1.unref(o2).nextPage(n2.nextPage)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { disabled: r2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Next page "))])]), _: 3 }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
} }), Dt = Wt$1.defineComponent({ __name: "CalendarPrev", props: { prevPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2, r2 = Wt$1.computed(() => o2.disabled.value || o2.isPrevButtonDisabled(n2.prevPage)), o2 = ut();
  return (t3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { "aria-label": "Previous page", as: n2.as, "as-child": n2.asChild, type: "button" === t3.as ? "button" : void 0, "aria-disabled": r2.value || void 0, "data-disabled": r2.value || void 0, disabled: r2.value, onClick: l2[0] || (l2[0] = (a2) => Wt$1.unref(o2).prevPage(n2.prevPage)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { disabled: r2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Prev page "))])]), _: 3 }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
} }), [Bt, kt] = T$1("PopoverRoot"), xt = Wt$1.defineComponent({ __name: "PopoverRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, modal: { type: Boolean, default: false } }, emits: ["update:open"], setup(a2, { emit: t2 }) {
  const n2 = a2, r2 = t2, { modal: o2 } = Wt$1.toRefs(n2), l2 = C(n2, "open", r2, { defaultValue: n2.defaultOpen, passive: void 0 === n2.open }), i2 = Wt$1.ref(), u2 = Wt$1.ref(false);
  return kt({ contentId: "", triggerId: "", modal: o2, open: l2, onOpenChange: (e2) => {
    l2.value = e2;
  }, onOpenToggle: () => {
    l2.value = !l2.value;
  }, triggerElement: i2, hasCustomAnchor: u2 }), (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { open: Wt$1.unref(l2) })]), _: 3 }));
} }), Pt = Wt$1.defineComponent({ __name: "PopoverAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(a2) {
  const t2 = a2;
  return N$1(), Bt(), (a3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(He$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(t2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Mt = Wt$1.defineComponent({ __name: "PopoverArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(a2) {
  const t2 = a2;
  return N$1(), (a3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(Ne$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(t2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), St = Wt$1.defineComponent({ __name: "PopoverClose", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2;
  N$1();
  const r2 = Bt();
  return (t3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { type: "button" === t3.as ? "button" : void 0, as: t3.as, "as-child": n2.asChild, onClick: o2[0] || (o2[0] = (a2) => Wt$1.unref(r2).onOpenChange(false)) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["type", "as", "as-child"]));
} }), Ot = Wt$1.defineComponent({ __name: "PopoverPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(a2) {
  const t2 = a2;
  return (a3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(s), Wt$1.normalizeProps(Wt$1.guardReactiveProps(t2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), Vt = Wt$1.defineComponent({ __name: "PopoverContentImpl", props: { trapFocus: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(a2, { emit: n2 }) {
  const r2 = n2, o2 = Tm(a(a2, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: l2 } = N$1(), i2 = Bt();
  return t$1(), (a3, t2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(E), { "as-child": "", loop: "", trapped: a3.trapFocus, onMountAutoFocus: t2[5] || (t2[5] = (e2) => r2("openAutoFocus", e2)), onUnmountAutoFocus: t2[6] || (t2[6] = (e2) => r2("closeAutoFocus", e2)) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(u$1), { "as-child": "", "disable-outside-pointer-events": a3.disableOutsidePointerEvents, onPointerDownOutside: t2[0] || (t2[0] = (e2) => r2("pointerDownOutside", e2)), onInteractOutside: t2[1] || (t2[1] = (e2) => r2("interactOutside", e2)), onEscapeKeyDown: t2[2] || (t2[2] = (e2) => r2("escapeKeyDown", e2)), onFocusOutside: t2[3] || (t2[3] = (e2) => r2("focusOutside", e2)), onDismiss: t2[4] || (t2[4] = (a4) => Wt$1.unref(i2).onOpenChange(false)) }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(je$1), Wt$1.mergeProps(Wt$1.unref(o2), { id: Wt$1.unref(i2).contentId, ref: Wt$1.unref(l2), "data-state": Wt$1.unref(i2).open.value ? "open" : "closed", "aria-labelledby": Wt$1.unref(i2).triggerId, style: { "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-popover-content-available-width": "var(--reka-popper-available-width)", "--reka-popover-content-available-height": "var(--reka-popper-available-height)", "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)", "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)" }, role: "dialog" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "aria-labelledby"])]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }, 8, ["trapped"]));
} }), _t = Wt$1.defineComponent({ __name: "PopoverContentModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(a2, { emit: t2 }) {
  const n2 = a2, r2 = t2, o2 = Bt(), l2 = Wt$1.ref(false);
  N$2(true);
  const i2 = F$1(n2, r2), { forwardRef: u2, currentElement: s2 } = N$1();
  return T$2(s2), (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Vt, Wt$1.mergeProps(Wt$1.unref(i2), { ref: Wt$1.unref(u2), "trap-focus": Wt$1.unref(o2).open.value, "disable-outside-pointer-events": "", onCloseAutoFocus: t3[0] || (t3[0] = Wt$1.withModifiers((a4) => {
    var t4;
    r2("closeAutoFocus", a4), l2.value || null == (t4 = Wt$1.unref(o2).triggerElement.value) || t4.focus();
  }, ["prevent"])), onPointerDownOutside: t3[1] || (t3[1] = (e2) => {
    r2("pointerDownOutside", e2);
    const a4 = e2.detail.originalEvent, t4 = 0 === a4.button && true === a4.ctrlKey, n3 = 2 === a4.button || t4;
    l2.value = n3;
  }), onFocusOutside: t3[2] || (t3[2] = Wt$1.withModifiers(() => {
  }, ["prevent"])) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["trap-focus"]));
} }), Et = Wt$1.defineComponent({ __name: "PopoverContentNonModal", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(a2, { emit: t2 }) {
  const n2 = a2, r2 = t2, o2 = Bt(), l2 = Wt$1.ref(false), i2 = Wt$1.ref(false), u2 = F$1(n2, r2);
  return (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Vt, Wt$1.mergeProps(Wt$1.unref(u2), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: t3[0] || (t3[0] = (a4) => {
    var t4;
    r2("closeAutoFocus", a4), a4.defaultPrevented || (l2.value || null == (t4 = Wt$1.unref(o2).triggerElement.value) || t4.focus(), a4.preventDefault()), l2.value = false, i2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = async (a4) => {
    var t4;
    r2("interactOutside", a4), a4.defaultPrevented || (l2.value = true, "pointerdown" === a4.detail.originalEvent.type && (i2.value = true));
    const n3 = a4.target;
    (null == (t4 = Wt$1.unref(o2).triggerElement.value) ? void 0 : t4.contains(n3)) && a4.preventDefault(), "focusin" === a4.detail.originalEvent.type && i2.value && a4.preventDefault();
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), At = Wt$1.defineComponent({ __name: "PopoverContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"], setup(a2, { emit: t2 }) {
  const n2 = a2, r2 = t2, o2 = Bt(), l2 = F$1(n2, r2), { forwardRef: i2 } = N$1();
  return o2.contentId || (o2.contentId = u(void 0, "reka-popover-content")), (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(c), { present: a3.forceMount || Wt$1.unref(o2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.unref(o2).modal.value ? (Wt$1.openBlock(), Wt$1.createBlock(_t, Wt$1.mergeProps({ key: 0 }, Wt$1.unref(l2), { ref: Wt$1.unref(i2) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16)) : (Wt$1.openBlock(), Wt$1.createBlock(Et, Wt$1.mergeProps({ key: 1 }, Wt$1.unref(l2), { ref: Wt$1.unref(i2) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16))]), _: 3 }, 8, ["present"]));
} }), Rt = Wt$1.defineComponent({ __name: "PopoverTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2, r2 = Bt(), { forwardRef: o2 } = N$1();
  return r2.triggerId || (r2.triggerId = u(void 0, "reka-popover-trigger")), (t3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(Wt$1.unref(r2).hasCustomAnchor.value ? Wt$1.unref(_m) : Wt$1.unref(He$1)), { "as-child": "" }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(_m), { id: Wt$1.unref(r2).triggerId, ref: Wt$1.unref(o2), type: "button" === t3.as ? "button" : void 0, "aria-haspopup": "dialog", "aria-expanded": Wt$1.unref(r2).open.value, "aria-controls": Wt$1.unref(r2).contentId, "data-state": Wt$1.unref(r2).open.value ? "open" : "closed", as: t3.as, "as-child": n2.asChild, onClick: Wt$1.unref(r2).onOpenToggle }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["id", "type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])]), _: 3 }));
} });
function It(a2) {
  const t2 = Wt$1.computed(() => !!a2.start.value && !!a2.isDateDisabled(a2.start.value)), n2 = Wt$1.computed(() => !!a2.end.value && !!a2.isDateDisabled(a2.end.value)), r2 = Wt$1.computed(() => !t2.value && !n2.value && !!(a2.start.value && a2.end.value && Xa(a2.end.value, a2.start.value))), o2 = (e2) => {
    var t3;
    return !!a2.isDateDisabled(e2) || !(!(null == (t3 = a2.maximumDays) ? void 0 : t3.value) || !a2.start.value || a2.end.value || H(a2.start.value, e2)) && Math.abs(e2.compare(a2.start.value)) > a2.maximumDays.value;
  }, l2 = Wt$1.computed(() => {
    var e2;
    if (a2.start.value && a2.end.value && !a2.fixedDate.value) return null;
    if (!a2.start.value || !a2.focusedValue.value) return null;
    const t3 = Xa(a2.start.value, a2.focusedValue.value), n3 = t3 ? a2.start.value : a2.focusedValue.value, r3 = t3 ? a2.focusedValue.value : a2.start.value;
    if (H(n3, r3)) return { start: n3, end: r3 };
    if ((null == (e2 = a2.maximumDays) ? void 0 : e2.value) && !a2.end.value && Math.abs(r3.compare(n3)) > a2.maximumDays.value) {
      const e3 = t3 ? n3.add({ days: a2.maximumDays.value }) : n3.subtract({ days: a2.maximumDays.value });
      return { start: n3, end: e3 };
    }
    const l3 = function(e3, a3, t4, n4, r4) {
      if (void 0 === t4 && void 0 === n4 && void 0 === r4) return true;
      let o3 = e3.add({ days: 1 });
      if (((null == n4 ? void 0 : n4(o3)) || (null == t4 ? void 0 : t4(o3))) && !(null == r4 ? void 0 : r4(o3))) return false;
      const l4 = a3;
      for (; o3.compare(l4) < 0; ) if (o3 = o3.add({ days: 1 }), ((null == n4 ? void 0 : n4(o3)) || (null == t4 ? void 0 : t4(o3))) && !(null == r4 ? void 0 : r4(o3))) return false;
      return true;
    }(n3, r3, a2.allowNonContiguousRanges.value ? () => false : a2.isDateUnavailable, o2, a2.isDateHighlightable);
    return l3 ? { start: n3, end: r3 } : null;
  });
  return { isInvalid: r2, isSelected: (e2) => !(!a2.start.value || !H(a2.start.value, e2)) || (!(!a2.end.value || !H(a2.end.value, e2)) || !(!a2.end.value || !a2.start.value) && function(e3, a3, t3) {
    return et(e3, a3) && Xa(e3, t3);
  }(e2, a2.start.value, a2.end.value)), isDateHighlightable: (e2) => {
    var t3;
    return !!(null == (t3 = a2.isDateHighlightable) ? void 0 : t3.call(a2, e2));
  }, highlightedRange: l2, isSelectionStart: (e2) => !!a2.start.value && H(a2.start.value, e2), isSelectionEnd: (e2) => !!a2.end.value && H(a2.end.value, e2), isHighlightedStart: (e2) => !(!l2.value || !l2.value.start) && H(l2.value.start, e2), isHighlightedEnd: (e2) => !(!l2.value || !l2.value.end) && H(l2.value.end, e2), isDateDisabled: o2 };
}
const Ut = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Ft = { role: "heading", "aria-level": "2" }, [Nt, Tt] = T$1("RangeCalendarRoot"), $t = Wt$1.defineComponent({ __name: "RangeCalendarRoot", props: { defaultPlaceholder: {}, defaultValue: { default: () => ({ start: void 0, end: void 0 }) }, modelValue: {}, placeholder: { default: void 0 }, allowNonContiguousRanges: { type: Boolean, default: false }, pagedNavigation: { type: Boolean, default: false }, preventDeselect: { type: Boolean, default: false }, maximumDays: { default: void 0 }, weekStartsOn: { default: 0 }, weekdayFormat: { default: "narrow" }, calendarLabel: {}, fixedWeeks: { type: Boolean, default: false }, maxValue: {}, minValue: {}, locale: {}, numberOfMonths: { default: 1 }, disabled: { type: Boolean, default: false }, readonly: { type: Boolean, default: false }, initialFocus: { type: Boolean, default: false }, isDateDisabled: { type: Function, default: void 0 }, isDateUnavailable: { type: Function, default: void 0 }, isDateHighlightable: { type: Function, default: void 0 }, dir: {}, nextPage: {}, prevPage: {}, disableDaysOutsideCurrentView: { type: Boolean, default: false }, fixedDate: {}, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["update:modelValue", "update:placeholder", "update:startValue"], setup(t2, { emit: n2 }) {
  var _a2, _b;
  const r2 = t2, o2 = n2, { disabled: l2, readonly: i2, initialFocus: u2, pagedNavigation: d2, weekStartsOn: c2, weekdayFormat: f2, fixedWeeks: h2, numberOfMonths: m2, preventDeselect: b2, isDateUnavailable: w2, isDateHighlightable: C2, isDateDisabled: D2, calendarLabel: B2, maxValue: k2, minValue: x2, dir: P2, locale: M2, nextPage: S2, prevPage: O2, allowNonContiguousRanges: V2, disableDaysOutsideCurrentView: _2, fixedDate: E2, maximumDays: R2 } = Wt$1.toRefs(r2), { primitiveElement: I2, currentElement: U2 } = t(), F2 = e(P2), N2 = ot(M2), T2 = Wt$1.ref(), $2 = Wt$1.ref(), W2 = Wt$1.ref(false), J2 = C(r2, "modelValue", o2, { defaultValue: (_a2 = r2.defaultValue) != null ? _a2 : { start: void 0, end: void 0 }, passive: void 0 === r2.modelValue }), H2 = Wt$1.computed(() => n(J2.value) ? { start: void 0, end: void 0 } : J2.value), Y2 = Qa({ defaultPlaceholder: r2.placeholder, defaultValue: H2.value.start, locale: r2.locale }), Z2 = Wt$1.ref(H2.value.start), K2 = Wt$1.ref(H2.value.end), Q2 = C(r2, "placeholder", o2, { defaultValue: (_b = r2.defaultPlaceholder) != null ? _b : Y2.copy(), passive: void 0 === r2.placeholder });
  function G2(e2) {
    Q2.value = e2.copy();
  }
  const { fullCalendarLabel: j2, headingValue: q2, isDateDisabled: z2, isDateUnavailable: X2, isNextButtonDisabled: ee2, isPrevButtonDisabled: ae2, grid: te2, weekdays: ne2, isOutsideVisibleView: re2, nextPage: oe2, prevPage: le2, formatter: ie2 } = rt({ locale: N2, placeholder: Q2, weekStartsOn: c2, fixedWeeks: h2, numberOfMonths: m2, minValue: x2, maxValue: k2, disabled: l2, weekdayFormat: f2, pagedNavigation: d2, isDateDisabled: D2.value, isDateUnavailable: w2.value, calendarLabel: B2, nextPage: S2, prevPage: O2 }), { isInvalid: ue2, isSelected: se2, isDateHighlightable: de2, highlightedRange: ce2, isSelectionStart: fe2, isSelectionEnd: pe2, isHighlightedStart: he2, isHighlightedEnd: ve2, isDateDisabled: me2 } = It({ start: Z2, end: K2, isDateDisabled: z2, isDateUnavailable: X2, isDateHighlightable: C2.value, focusedValue: $2, allowNonContiguousRanges: V2, fixedDate: E2, maximumDays: R2 });
  Wt$1.watch(J2, (e2, a2) => {
    var t3, n3, r3, o3;
    (!(null == a2 ? void 0 : a2.start) && (null == e2 ? void 0 : e2.start) || !e2 || !e2.start || Z2.value && !L(e2.start, Z2.value)) && (Z2.value = null == (n3 = null == (t3 = null == e2 ? void 0 : e2.start) ? void 0 : t3.copy) ? void 0 : n3.call(t3)), (!(null == a2 ? void 0 : a2.end) && e2.end || !e2 || !e2.end || K2.value && !L(e2.end, K2.value)) && (K2.value = null == (o3 = null == (r3 = null == e2 ? void 0 : e2.end) ? void 0 : r3.copy) ? void 0 : o3.call(r3));
  }), Wt$1.watch(Z2, (e2) => {
    e2 && !L(e2, Q2.value) && G2(e2), o2("update:startValue", e2);
  }), Wt$1.watch([Z2, K2], ([e2, a2]) => {
    const t3 = H2.value;
    if (!(t3 && t3.start && t3.end && e2 && a2 && L(t3.start, e2) && L(t3.end, a2)) && (W2.value = true, e2 && a2)) {
      if (W2.value = false, t3.start && t3.end && L(t3.start, e2) && L(t3.end, a2)) return;
      Xa(a2, e2) ? J2.value = { start: a2.copy(), end: e2.copy() } : J2.value = { start: e2.copy(), end: a2.copy() };
    }
  });
  const ye2 = F$2();
  return j$1("keydown", (e2) => {
    var a2, t3;
    e2.key === ye2.ESCAPE && W2.value && (Z2.value = null == (a2 = J2.value.start) ? void 0 : a2.copy(), K2.value = null == (t3 = J2.value.end) ? void 0 : t3.copy());
  }), Tt({ isDateUnavailable: X2, isDateHighlightable: de2, startValue: Z2, endValue: K2, formatter: ie2, modelValue: J2, placeholder: Q2, disabled: l2, initialFocus: u2, pagedNavigation: d2, grid: te2, weekDays: ne2, weekStartsOn: c2, weekdayFormat: f2, fixedWeeks: h2, numberOfMonths: m2, readonly: i2, preventDeselect: b2, fullCalendarLabel: j2, headingValue: q2, isInvalid: ue2, isDateDisabled: me2, allowNonContiguousRanges: V2, highlightedRange: ce2, focusedValue: $2, lastPressedDateValue: T2, isSelected: se2, isSelectionEnd: pe2, isSelectionStart: fe2, isNextButtonDisabled: ee2, isPrevButtonDisabled: ae2, isOutsideVisibleView: re2, nextPage: oe2, prevPage: le2, parentElement: U2, onPlaceholderChange: G2, locale: N2, dir: F2, isHighlightedStart: he2, isHighlightedEnd: ve2, disableDaysOutsideCurrentView: _2, fixedDate: E2, maximumDays: R2 }), (t3, n3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { ref_key: "primitiveElement", ref: I2, as: t3.as, "as-child": t3.asChild, role: "application", "aria-label": Wt$1.unref(j2), "data-readonly": Wt$1.unref(i2) ? "" : void 0, "data-disabled": Wt$1.unref(l2) ? "" : void 0, "data-invalid": Wt$1.unref(ue2) ? "" : void 0, dir: Wt$1.unref(F2) }, { default: Wt$1.withCtx(() => [Wt$1.createElementVNode("div", Ut, [Wt$1.createElementVNode("div", Ft, Wt$1.toDisplayString(Wt$1.unref(j2)), 1)]), Wt$1.renderSlot(t3.$slots, "default", { date: Wt$1.unref(Q2), grid: Wt$1.unref(te2), weekDays: Wt$1.unref(ne2), weekStartsOn: Wt$1.unref(c2), locale: Wt$1.unref(N2), fixedWeeks: Wt$1.unref(h2), modelValue: Wt$1.unref(J2) })]), _: 3 }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
} }), Wt = Wt$1.defineComponent({ __name: "RangeCalendarCell", props: { date: {}, asChild: { type: Boolean }, as: { default: "td" } }, setup(t2) {
  const n2 = Nt();
  return (t3, r2) => {
    var o2, l2;
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), { as: t3.as, "as-child": t3.asChild, role: "gridcell", "aria-selected": !!Wt$1.unref(n2).isSelected(t3.date) || void 0, "aria-disabled": Wt$1.unref(n2).isDateDisabled(t3.date) || (null == (l2 = (o2 = Wt$1.unref(n2)).isDateUnavailable) ? void 0 : l2.call(o2, t3.date)) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value, "data-disabled": Wt$1.unref(n2).isDateDisabled(t3.date) || Wt$1.unref(n2).disableDaysOutsideCurrentView.value ? "" : void 0 }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
  };
} }), Jt = Wt$1.defineComponent({ __name: "RangeCalendarCellTrigger", props: { day: {}, month: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2, r2 = Nt(), o2 = F$2(), { primitiveElement: l2, currentElement: i2 } = t(), u2 = Wt$1.computed(() => r2.formatter.custom(Ga(n2.day), { weekday: "long", month: "long", day: "numeric", year: "numeric" })), s2 = Wt$1.computed(() => {
    var _a2;
    var e2;
    return (_a2 = null == (e2 = r2.isDateUnavailable) ? void 0 : e2.call(r2, n2.day)) != null ? _a2 : false;
  }), d2 = Wt$1.computed(() => r2.isSelected(n2.day)), c2 = Wt$1.computed(() => r2.isSelectionStart(n2.day)), f2 = Wt$1.computed(() => r2.isSelectionEnd(n2.day)), p2 = Wt$1.computed(() => r2.isHighlightedStart(n2.day)), h2 = Wt$1.computed(() => r2.isHighlightedEnd(n2.day)), m2 = Wt$1.computed(() => {
    return !!r2.highlightedRange.value && (e2 = n2.day, a2 = r2.highlightedRange.value.start, t3 = r2.highlightedRange.value.end, o3 = a2, e2.compare(o3) >= 0 && function(e3, a3) {
      return e3.compare(a3) <= 0;
    }(e2, t3));
    var e2, a2, t3, o3;
  }), y2 = Wt$1.computed(() => r2.allowNonContiguousRanges.value), b2 = Wt$1.computed(() => Q(n2.day, ee())), w2 = Wt$1.computed(() => !Y(n2.day, n2.month)), C2 = Wt$1.computed(() => r2.isOutsideVisibleView(n2.day)), D2 = Wt$1.computed(() => r2.isDateDisabled(n2.day) || r2.disableDaysOutsideCurrentView.value && w2.value), B2 = Wt$1.computed(() => n2.day.day.toLocaleString(r2.locale.value)), k2 = Wt$1.computed(() => !r2.disabled.value && H(n2.day, r2.placeholder.value));
  function x2(e2, a2) {
    var t3;
    if (!r2.readonly.value && !r2.isDateDisabled(a2) && !(null == (t3 = r2.isDateUnavailable) ? void 0 : t3.call(r2, a2))) {
      if (r2.lastPressedDateValue.value = a2.copy(), r2.startValue.value && null === r2.highlightedRange.value) {
        if (H(a2, r2.startValue.value) && !r2.preventDeselect.value && !r2.endValue.value) return r2.startValue.value = void 0, void r2.onPlaceholderChange(a2);
        if (!r2.endValue.value) return e2.preventDefault(), void (r2.lastPressedDateValue.value && H(r2.lastPressedDateValue.value, a2) && (r2.startValue.value = a2.copy()));
      }
      if (r2.startValue.value && r2.endValue.value && H(r2.endValue.value, a2) && !r2.preventDeselect.value) return r2.startValue.value = void 0, r2.endValue.value = void 0, void r2.onPlaceholderChange(a2);
      r2.startValue.value ? r2.endValue.value ? r2.endValue.value && r2.startValue.value && (r2.fixedDate.value ? "start" === r2.fixedDate.value ? a2.compare(r2.startValue.value) < 0 ? r2.startValue.value = a2.copy() : r2.endValue.value = a2.copy() : "end" === r2.fixedDate.value && (a2.compare(r2.endValue.value) > 0 ? r2.endValue.value = a2.copy() : r2.startValue.value = a2.copy()) : (r2.endValue.value = void 0, r2.startValue.value = a2.copy())) : r2.endValue.value = a2.copy() : r2.startValue.value = a2.copy();
    }
  }
  function P2(e2) {
    D2.value || x2(e2, n2.day);
  }
  function M2() {
    var e2;
    D2.value || (null == (e2 = r2.isDateUnavailable) ? void 0 : e2.call(r2, n2.day)) || (r2.focusedValue.value = n2.day.copy());
  }
  function S2(a2) {
    if (D2.value) return;
    a2.preventDefault(), a2.stopPropagation();
    const t3 = r2.parentElement.value, l3 = "rtl" === r2.dir.value ? -1 : 1;
    switch (a2.code) {
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
        x2(a2, n2.day);
    }
    function u3(a3, n3) {
      const o3 = ft(t3);
      if (!o3.length) return;
      const l4 = o3.indexOf(a3) + n3;
      if (l4 >= 0 && l4 < o3.length) return o3[l4].hasAttribute("data-disabled") && u3(o3[l4], n3), void o3[l4].focus();
      if (l4 < 0) {
        if (r2.isPrevButtonDisabled()) return;
        return r2.prevPage(), void Wt$1.nextTick(() => {
          const e2 = ft(t3);
          if (!e2.length) return;
          if (!r2.pagedNavigation.value && r2.numberOfMonths.value > 1) {
            const a5 = za(r2.placeholder.value) - Math.abs(l4);
            return e2[a5].hasAttribute("data-disabled") && u3(e2[a5], n3), void e2[a5].focus();
          }
          const a4 = e2.length - Math.abs(l4);
          e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), e2[a4].focus();
        });
      }
      if (l4 >= o3.length) {
        if (r2.isNextButtonDisabled()) return;
        r2.nextPage(), Wt$1.nextTick(() => {
          const e2 = ft(t3);
          if (!e2.length) return;
          if (!r2.pagedNavigation.value && r2.numberOfMonths.value > 1) {
            const a5 = za(r2.placeholder.value.add({ months: r2.numberOfMonths.value - 1 })), t4 = l4 - o3.length + (e2.length - a5);
            return e2[t4].hasAttribute("data-disabled") && u3(e2[t4], n3), void e2[t4].focus();
          }
          const a4 = l4 - o3.length;
          e2[a4].hasAttribute("data-disabled") && u3(e2[a4], n3), e2[a4].focus();
        });
      }
    }
  }
  return (t3, r3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps({ ref_key: "primitiveElement", ref: l2 }, n2, { role: "button", "aria-label": u2.value, "data-reka-calendar-cell-trigger": "", "aria-selected": !(!d2.value || !y2.value && s2.value) || void 0, "aria-disabled": !(!D2.value && !s2.value) || void 0, "data-highlighted": !m2.value || !y2.value && s2.value ? void 0 : "", "data-selection-start": !!c2.value || void 0, "data-selection-end": !!f2.value || void 0, "data-highlighted-start": !!p2.value || void 0, "data-highlighted-end": !!h2.value || void 0, "data-selected": !(!d2.value || !y2.value && s2.value) || void 0, "data-outside-visible-view": C2.value ? "" : void 0, "data-value": t3.day.toString(), "data-disabled": D2.value ? "" : void 0, "data-unavailable": s2.value ? "" : void 0, "data-today": b2.value ? "" : void 0, "data-outside-view": w2.value ? "" : void 0, "data-focused": k2.value ? "" : void 0, tabindex: k2.value ? 0 : w2.value || D2.value ? void 0 : -1, onClick: P2, onFocusin: M2, onMouseenter: M2, onKeydown: Wt$1.withKeys(S2, ["up", "down", "left", "right", "enter", "space"]) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { dayValue: B2.value, disabled: D2.value, today: b2.value, selected: d2.value, outsideView: w2.value, outsideVisibleView: C2.value, unavailable: s2.value, highlighted: m2.value && (y2.value || !s2.value), highlightedStart: p2.value, highlightedEnd: h2.value, selectionStart: c2.value, selectionEnd: f2.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(B2.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
} }), Ht = Wt$1.defineComponent({ __name: "RangeCalendarGrid", props: { asChild: { type: Boolean }, as: { default: "table" } }, setup(t2) {
  const n2 = t2, r2 = Nt(), o2 = Wt$1.computed(() => !!r2.disabled.value || void 0), l2 = Wt$1.computed(() => !!r2.readonly.value || void 0);
  return (t3, r3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { tabindex: "-1", role: "grid", "aria-readonly": l2.value, "aria-disabled": o2.value, "data-readonly": l2.value && "", "data-disabled": o2.value && "" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
} }), Yt = Wt$1.defineComponent({ __name: "RangeCalendarGridBody", props: { asChild: { type: Boolean }, as: { default: "tbody" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Lt = Wt$1.defineComponent({ __name: "RangeCalendarGridHead", props: { asChild: { type: Boolean }, as: { default: "thead" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "aria-hidden": "true" }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Zt = Wt$1.defineComponent({ __name: "RangeCalendarGridRow", props: { asChild: { type: Boolean }, as: { default: "tr" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Kt = Wt$1.defineComponent({ __name: "RangeCalendarHeadCell", props: { asChild: { type: Boolean }, as: { default: "th" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Qt = Wt$1.defineComponent({ __name: "RangeCalendarHeader", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2;
  return (t3, r2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.normalizeProps(Wt$1.guardReactiveProps(n2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 16));
} }), Gt = Wt$1.defineComponent({ __name: "RangeCalendarHeading", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(t2) {
  const n2 = t2, r2 = Nt();
  return (t3, o2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "data-disabled": Wt$1.unref(r2).disabled.value ? "" : void 0 }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { headingValue: Wt$1.unref(r2).headingValue.value }, () => [Wt$1.createTextVNode(Wt$1.toDisplayString(Wt$1.unref(r2).headingValue.value), 1)])]), _: 3 }, 16, ["data-disabled"]));
} }), jt = Wt$1.defineComponent({ __name: "RangeCalendarNext", props: { nextPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2, r2 = Wt$1.computed(() => o2.disabled.value || o2.isNextButtonDisabled(n2.nextPage)), o2 = Nt();
  return (t3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "aria-label": "Next page", type: "button" === t3.as ? "button" : void 0, "aria-disabled": r2.value || void 0, "data-disabled": r2.value || void 0, disabled: r2.value, onClick: l2[0] || (l2[0] = (a2) => Wt$1.unref(o2).nextPage(n2.nextPage)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { disabled: r2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Next page "))])]), _: 3 }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
} }), qt = Wt$1.defineComponent({ __name: "RangeCalendarPrev", props: { prevPage: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(t2) {
  const n2 = t2, r2 = Wt$1.computed(() => o2.disabled.value || o2.isPrevButtonDisabled(n2.prevPage)), o2 = Nt();
  return (t3, l2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(_m), Wt$1.mergeProps(n2, { "aria-label": "Previous page", type: "button" === t3.as ? "button" : void 0, "aria-disabled": r2.value || void 0, "data-disabled": r2.value || void 0, disabled: r2.value, onClick: l2[0] || (l2[0] = (a2) => Wt$1.unref(o2).prevPage(n2.prevPage)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { disabled: r2.value }, () => [l2[1] || (l2[1] = Wt$1.createTextVNode(" Prev page "))])]), _: 3 }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
} }), zt = Wt$1.defineComponent({ __name: "HoverCardArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(a2) {
  const t2 = a2;
  return N$1(), (a3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(Ne$1), Wt$1.normalizeProps(Wt$1.guardReactiveProps(t2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} });
function Xt(e2) {
  return (a2) => "touch" === a2.pointerType ? void 0 : e2();
}
const [en, an] = T$1("HoverCardRoot"), tn = Wt$1.defineComponent({ __name: "HoverCardRoot", props: { defaultOpen: { type: Boolean, default: false }, open: { type: Boolean, default: void 0 }, openDelay: { default: 700 }, closeDelay: { default: 300 } }, emits: ["update:open"], setup(a2, { emit: t2 }) {
  const n2 = a2, r2 = t2, { openDelay: o2, closeDelay: l2 } = Wt$1.toRefs(n2);
  N$1();
  const i2 = C(n2, "open", r2, { defaultValue: n2.defaultOpen, passive: void 0 === n2.open }), u2 = Wt$1.ref(0), c2 = Wt$1.ref(0), f2 = Wt$1.ref(false), p2 = Wt$1.ref(false), h2 = Wt$1.ref(false), v2 = Wt$1.ref();
  return an({ open: i2, onOpenChange(e2) {
    i2.value = e2;
  }, onOpen: function() {
    clearTimeout(c2.value), u2.value = (void 0).setTimeout(() => i2.value = true, o2.value);
  }, onClose: function() {
    clearTimeout(u2.value), f2.value || p2.value || (c2.value = (void 0).setTimeout(() => i2.value = false, l2.value));
  }, onDismiss: function() {
    i2.value = false;
  }, hasSelectionRef: f2, isPointerDownOnContentRef: p2, isPointerInTransitRef: h2, triggerElement: v2 }), (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref($e$1), null, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default", { open: Wt$1.unref(i2) })]), _: 3 }));
} }), nn = Wt$1.defineComponent({ __name: "HoverCardContentImpl", props: { side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(a2, { emit: n2 }) {
  const r2 = n2, o2 = Tm(a2), { forwardRef: l2, currentElement: i2 } = N$1(), u2 = en(), { isPointerInTransit: s2, onPointerExit: c2 } = r(u2.triggerElement, i2);
  y(u2.isPointerInTransitRef, s2, { direction: "rtl" }), c2(() => {
    u2.onClose();
  });
  const f2 = Wt$1.ref(false);
  let p2;
  return Wt$1.watchEffect((e2) => {
    if (f2.value) {
      const a3 = (void 0).body;
      p2 = a3.style.userSelect || a3.style.webkitUserSelect, a3.style.userSelect = "none", a3.style.webkitUserSelect = "none", e2(() => {
        a3.style.userSelect = p2, a3.style.webkitUserSelect = p2;
      });
    }
  }), (a3, t2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(u$1), { "as-child": "", "disable-outside-pointer-events": false, onEscapeKeyDown: t2[1] || (t2[1] = (e2) => r2("escapeKeyDown", e2)), onPointerDownOutside: t2[2] || (t2[2] = (e2) => r2("pointerDownOutside", e2)), onFocusOutside: t2[3] || (t2[3] = Wt$1.withModifiers((e2) => r2("focusOutside", e2), ["prevent"])), onDismiss: Wt$1.unref(u2).onDismiss }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(je$1), Wt$1.mergeProps({ ...Wt$1.unref(o2), ...a3.$attrs }, { ref: Wt$1.unref(l2), "data-state": Wt$1.unref(u2).open.value ? "open" : "closed", style: { userSelect: f2.value ? "text" : void 0, WebkitUserSelect: f2.value ? "text" : void 0, "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)", "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)", "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)", "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)" }, onPointerdown: t2[0] || (t2[0] = (a4) => {
    a4.currentTarget.contains(a4.target) && (f2.value = true), Wt$1.unref(u2).hasSelectionRef.value = false, Wt$1.unref(u2).isPointerDownOnContentRef.value = true;
  }) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16, ["data-state", "style"])]), _: 3 }, 8, ["onDismiss"]));
} }), rn = Wt$1.defineComponent({ __name: "HoverCardContent", props: { forceMount: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(a2, { emit: t2 }) {
  const n2 = F$1(a2, t2), { forwardRef: r2 } = N$1(), o2 = en();
  return (a3, t3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(c), { present: a3.forceMount || Wt$1.unref(o2).open.value }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(nn, Wt$1.mergeProps(Wt$1.unref(n2), { ref: Wt$1.unref(r2), onPointerenter: t3[0] || (t3[0] = (a4) => Wt$1.unref(Xt)(Wt$1.unref(o2).onOpen)(a4)) }), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), on = Wt$1.defineComponent({ __name: "HoverCardPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(a2) {
  const t2 = a2;
  return (a3, n2) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(s), Wt$1.normalizeProps(Wt$1.guardReactiveProps(t2)), { default: Wt$1.withCtx(() => [Wt$1.renderSlot(a3.$slots, "default")]), _: 3 }, 16));
} }), ln = { Root: dt, Header: bt, Heading: wt, Grid: ht, Cell: ct, HeadCell: gt, Next: Ct, Prev: Dt, GridHead: mt, GridBody: vt, GridRow: yt, CellTrigger: pt }, un = { Root: tn, Trigger: Wt$1.defineComponent({ __name: "HoverCardTrigger", props: { reference: {}, asChild: { type: Boolean }, as: { default: "a" } }, setup(t2) {
  const { forwardRef: n2, currentElement: r2 } = N$1(), o2 = en();
  function l2() {
    setTimeout(() => {
      o2.isPointerInTransitRef.value || o2.open.value || o2.onClose();
    }, 0);
  }
  return o2.triggerElement = r2, (t3, r3) => (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(He$1), { "as-child": "", reference: t3.reference }, { default: Wt$1.withCtx(() => [Wt$1.createVNode(Wt$1.unref(_m), { ref: Wt$1.unref(n2), "as-child": t3.asChild, as: t3.as, "data-state": Wt$1.unref(o2).open.value ? "open" : "closed", "data-grace-area-trigger": "", onPointerenter: r3[0] || (r3[0] = (a2) => Wt$1.unref(Xt)(Wt$1.unref(o2).onOpen)(a2)), onPointerleave: r3[1] || (r3[1] = (a2) => Wt$1.unref(Xt)(l2)(a2)), onFocus: r3[2] || (r3[2] = (a2) => Wt$1.unref(o2).onOpen()), onBlur: r3[3] || (r3[3] = (a2) => Wt$1.unref(o2).onClose()) }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "data-state"])]), _: 3 }, 8, ["reference"]));
} }), Portal: on, Content: rn, Arrow: zt }, sn = { Root: xt, Trigger: Rt, Portal: Ot, Content: At, Arrow: Mt, Close: St, Anchor: Pt }, dn = { Root: $t, Header: Qt, Heading: Gt, Grid: Ht, Cell: Wt, HeadCell: Kt, Next: jt, Prev: qt, GridHead: Lt, GridBody: Yt, GridRow: Zt, CellTrigger: Jt }, cn = { slots: { content: "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto", arrow: "fill-default" } }, fn = { __name: "Popover", __ssrInlineRender: true, props: { mode: { type: String, required: false, default: "click" }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, modal: { type: Boolean, required: false }, openDelay: { type: Number, required: false, default: 0 }, closeDelay: { type: Number, required: false, default: 0 } }, emits: ["close:prevent", "update:open"], setup(a2, { emit: t2 }) {
  const u2 = a2, s2 = t2, d2 = Wt$1.useSlots(), c2 = da$1(), p2 = "hover" === u2.mode ? Bm(u2, "defaultOpen", "open", "openDelay", "closeDelay") : Bm(u2, "defaultOpen", "open", "modal"), h2 = F$1(p2, s2), v2 = i(Wt$1.toRef(() => u2.portal)), m2 = Wt$1.toRef(() => defu(u2.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 })), y2 = Wt$1.computed(() => {
    if (!u2.dismissible) {
      return ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((e2, a3) => (e2[a3] = (e3) => {
        e3.preventDefault(), s2("close:prevent");
      }, e2), {});
    }
    return {};
  }), g2 = Wt$1.toRef(() => u2.arrow), b2 = Wt$1.computed(() => {
    var e2;
    return Ky({ extend: Ky(cn), ...(null == (e2 = c2.ui) ? void 0 : e2.popover) || {} })({ side: m2.value.side });
  }), w2 = Wt$1.computed(() => "hover" === u2.mode ? un : sn);
  return (t3, n2, r2, o2) => {
    n2(pm.ssrRenderComponent(Wt$1.unref(w2).Root, Wt$1.mergeProps(Wt$1.unref(h2), o2), { default: Wt$1.withCtx(({ open: n3 }, r3, o3, i2) => {
      if (!r3) return [d2.default ? (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(w2).Trigger, { key: 0, "as-child": "", class: u2.class }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "default", { open: n3 })]), _: 2 }, 1032, ["class"])) : Wt$1.createCommentVNode("", true), "Anchor" in w2.value && d2.anchor ? (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(w2).Anchor, { key: 1, "as-child": "" }, { default: Wt$1.withCtx(() => [Wt$1.renderSlot(t3.$slots, "anchor")]), _: 3 })) : Wt$1.createCommentVNode("", true), Wt$1.createVNode(Wt$1.unref(w2).Portal, Wt$1.unref(v2), { default: Wt$1.withCtx(() => {
        var n4;
        return [Wt$1.createVNode(Wt$1.unref(w2).Content, Wt$1.mergeProps(m2.value, { class: b2.value.content({ class: [!d2.default && u2.class, null == (n4 = u2.ui) ? void 0 : n4.content] }) }, Wt$1.toHandlers(y2.value)), { default: Wt$1.withCtx(() => {
          var n5;
          return [Wt$1.renderSlot(t3.$slots, "content"), a2.arrow ? (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(w2).Arrow, Wt$1.mergeProps({ key: 0 }, g2.value, { class: b2.value.arrow({ class: null == (n5 = u2.ui) ? void 0 : n5.arrow }) }), null, 16, ["class"])) : Wt$1.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
      d2.default ? r3(pm.ssrRenderComponent(Wt$1.unref(w2).Trigger, { "as-child": "", class: u2.class }, { default: Wt$1.withCtx((a3, r4, o4, i3) => {
        if (!r4) return [Wt$1.renderSlot(t3.$slots, "default", { open: n3 })];
        pm.ssrRenderSlot(t3.$slots, "default", { open: n3 }, null, r4, o4, i3);
      }), _: 2 }, o3, i2)) : r3("<!---->"), "Anchor" in w2.value && d2.anchor ? r3(pm.ssrRenderComponent(Wt$1.unref(w2).Anchor, { "as-child": "" }, { default: Wt$1.withCtx((a3, n4, r4, o4) => {
        if (!n4) return [Wt$1.renderSlot(t3.$slots, "anchor")];
        pm.ssrRenderSlot(t3.$slots, "anchor", {}, null, n4, r4, o4);
      }), _: 2 }, o3, i2)) : r3("<!---->"), r3(pm.ssrRenderComponent(Wt$1.unref(w2).Portal, Wt$1.unref(v2), { default: Wt$1.withCtx((n4, r4, o4, i3) => {
        var s3, c3;
        if (!r4) return [Wt$1.createVNode(Wt$1.unref(w2).Content, Wt$1.mergeProps(m2.value, { class: b2.value.content({ class: [!d2.default && u2.class, null == (c3 = u2.ui) ? void 0 : c3.content] }) }, Wt$1.toHandlers(y2.value)), { default: Wt$1.withCtx(() => {
          var n5;
          return [Wt$1.renderSlot(t3.$slots, "content"), a2.arrow ? (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(w2).Arrow, Wt$1.mergeProps({ key: 0 }, g2.value, { class: b2.value.arrow({ class: null == (n5 = u2.ui) ? void 0 : n5.arrow }) }), null, 16, ["class"])) : Wt$1.createCommentVNode("", true)];
        }), _: 3 }, 16, ["class"])];
        r4(pm.ssrRenderComponent(Wt$1.unref(w2).Content, Wt$1.mergeProps(m2.value, { class: b2.value.content({ class: [!d2.default && u2.class, null == (s3 = u2.ui) ? void 0 : s3.content] }) }, Wt$1.toHandlers(y2.value)), { default: Wt$1.withCtx((n5, r5, o5, i4) => {
          var s4, d3;
          if (!r5) return [Wt$1.renderSlot(t3.$slots, "content"), a2.arrow ? (Wt$1.openBlock(), Wt$1.createBlock(Wt$1.unref(w2).Arrow, Wt$1.mergeProps({ key: 0 }, g2.value, { class: b2.value.arrow({ class: null == (d3 = u2.ui) ? void 0 : d3.arrow }) }), null, 16, ["class"])) : Wt$1.createCommentVNode("", true)];
          pm.ssrRenderSlot(t3.$slots, "content", {}, null, r5, o5, i4), a2.arrow ? r5(pm.ssrRenderComponent(Wt$1.unref(w2).Arrow, Wt$1.mergeProps(g2.value, { class: b2.value.arrow({ class: null == (s4 = u2.ui) ? void 0 : s4.arrow }) }), null, o5, i4)) : r5("<!---->");
        }), _: 2 }, o4, i3));
      }), _: 2 }, o3, i2));
    }), _: 3 }, r2));
  };
} }, pn = fn.setup;
fn.setup = (a2, t2) => {
  const n2 = Wt$1.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue"), pn ? pn(a2, t2) : void 0;
};

export { dn as d, ee as e, fn as f, he as h, j, ln as l };
//# sourceMappingURL=Popover-BMuqDJoE.mjs.map

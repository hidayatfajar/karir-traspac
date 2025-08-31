import { Z as vn, Y as pn } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/nitro.mjs';
import 'crypto-es';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'util';
import 'stream';
import 'path';
import 'http';
import 'https';
import 'url';
import 'fs';
import 'crypto';
import 'assert';
import 'tty';
import 'node:process';
import 'node:os';
import 'node:tty';
import 'zlib';
import 'events';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';

var r = Object.defineProperty, a = (e2, t2) => r(e2, "name", { value: t2, configurable: true });
let n = 0;
const o = { START_BOUNDARY: n++, HEADER_FIELD_START: n++, HEADER_FIELD: n++, HEADER_VALUE_START: n++, HEADER_VALUE: n++, HEADER_VALUE_ALMOST_DONE: n++, HEADERS_ALMOST_DONE: n++, PART_DATA_START: n++, PART_DATA: n++, END: n++ };
let i = 1;
const s = i, d = i *= 2, p = a((e2) => 32 | e2, "lower"), E = a(() => {
}, "noop"), l = class {
  constructor(e2) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = E, this.onHeaderField = E, this.onHeadersEnd = E, this.onHeaderValue = E, this.onPartBegin = E, this.onPartData = E, this.onPartEnd = E, this.boundaryChars = {}, e2 = "\r\n--" + e2;
    const t2 = new Uint8Array(e2.length);
    for (let r2 = 0; r2 < e2.length; r2++) t2[r2] = e2.charCodeAt(r2), this.boundaryChars[t2[r2]] = true;
    this.boundary = t2, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = o.START_BOUNDARY;
  }
  write(e2) {
    let t2 = 0;
    const r2 = e2.length;
    let n2 = this.index, { lookbehind: i2, boundary: E2, boundaryChars: l2, index: m2, state: h2, flags: A2 } = this;
    const c = this.boundary.length, D = c - 1, u = e2.length;
    let T, f;
    const _ = a((e3) => {
      this[e3 + "Mark"] = t2;
    }, "mark"), R = a((e3) => {
      delete this[e3 + "Mark"];
    }, "clear"), b = a((e3, t3, r3, a2) => {
      (void 0 === t3 || t3 !== r3) && this[e3](a2 && a2.subarray(t3, r3));
    }, "callback"), H = a((r3, a2) => {
      const n3 = r3 + "Mark";
      n3 in this && (a2 ? (b(r3, this[n3], t2, e2), delete this[n3]) : (b(r3, this[n3], e2.length, e2), this[n3] = 0));
    }, "dataCallback");
    for (t2 = 0; t2 < r2; t2++) switch (T = e2[t2], h2) {
      case o.START_BOUNDARY:
        if (m2 === E2.length - 2) {
          if (45 === T) A2 |= d;
          else if (13 !== T) return;
          m2++;
          break;
        }
        if (m2 - 1 == E2.length - 2) {
          if (A2 & d && 45 === T) h2 = o.END, A2 = 0;
          else {
            if (A2 & d || 10 !== T) return;
            m2 = 0, b("onPartBegin"), h2 = o.HEADER_FIELD_START;
          }
          break;
        }
        T !== E2[m2 + 2] && (m2 = -2), T === E2[m2 + 2] && m2++;
        break;
      case o.HEADER_FIELD_START:
        h2 = o.HEADER_FIELD, _("onHeaderField"), m2 = 0;
      case o.HEADER_FIELD:
        if (13 === T) {
          R("onHeaderField"), h2 = o.HEADERS_ALMOST_DONE;
          break;
        }
        if (m2++, 45 === T) break;
        if (58 === T) {
          if (1 === m2) return;
          H("onHeaderField", true), h2 = o.HEADER_VALUE_START;
          break;
        }
        if (f = p(T), f < 97 || f > 122) return;
        break;
      case o.HEADER_VALUE_START:
        if (32 === T) break;
        _("onHeaderValue"), h2 = o.HEADER_VALUE;
      case o.HEADER_VALUE:
        13 === T && (H("onHeaderValue", true), b("onHeaderEnd"), h2 = o.HEADER_VALUE_ALMOST_DONE);
        break;
      case o.HEADER_VALUE_ALMOST_DONE:
        if (10 !== T) return;
        h2 = o.HEADER_FIELD_START;
        break;
      case o.HEADERS_ALMOST_DONE:
        if (10 !== T) return;
        b("onHeadersEnd"), h2 = o.PART_DATA_START;
        break;
      case o.PART_DATA_START:
        h2 = o.PART_DATA, _("onPartData");
      case o.PART_DATA:
        if (n2 = m2, 0 === m2) {
          for (t2 += D; t2 < u && !(e2[t2] in l2); ) t2 += c;
          t2 -= D, T = e2[t2];
        }
        if (m2 < E2.length) E2[m2] === T ? (0 === m2 && H("onPartData", true), m2++) : m2 = 0;
        else if (m2 === E2.length) m2++, 13 === T ? A2 |= s : 45 === T ? A2 |= d : m2 = 0;
        else if (m2 - 1 === E2.length) if (A2 & s) {
          if (m2 = 0, 10 === T) {
            A2 &= ~s, b("onPartEnd"), b("onPartBegin"), h2 = o.HEADER_FIELD_START;
            break;
          }
        } else A2 & d && 45 === T ? (b("onPartEnd"), h2 = o.END, A2 = 0) : m2 = 0;
        if (m2 > 0) i2[m2 - 1] = T;
        else if (n2 > 0) {
          const e3 = new Uint8Array(i2.buffer, i2.byteOffset, i2.byteLength);
          b("onPartData", 0, n2, e3), n2 = 0, _("onPartData"), t2--;
        }
        break;
      case o.END:
        break;
      default:
        throw new Error(`Unexpected state entered: ${h2}`);
    }
    H("onHeaderField"), H("onHeaderValue"), H("onPartData"), this.index = m2, this.state = h2, this.flags = A2;
  }
  end() {
    if (this.state === o.HEADER_FIELD_START && 0 === this.index || this.state === o.PART_DATA && this.index === this.boundary.length) this.onPartEnd();
    else if (this.state !== o.END) throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
};
a(l, "MultipartParser");
let m = l;
function h(e2) {
  const t2 = e2.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!t2) return;
  const r2 = t2[2] || t2[3] || "";
  let a2 = r2.slice(r2.lastIndexOf("\\") + 1);
  return a2 = a2.replace(/%22/g, '"'), a2 = a2.replace(/&#(\d{4});/g, (e3, t3) => String.fromCharCode(t3)), a2;
}
async function A(r2, n2) {
  if (!/multipart/i.test(n2)) throw new TypeError("Failed to fetch");
  const o2 = n2.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!o2) throw new TypeError("no or bad content-type header, no multipart boundary");
  const i2 = new m(o2[1] || o2[2]);
  let s2, d2, p2, E2, l2, A2;
  const c = [], D = new vn(), u = a((e2) => {
    p2 += R.decode(e2, { stream: true });
  }, "onPartData"), T = a((e2) => {
    c.push(e2);
  }, "appendToFile"), f = a(() => {
    const e2 = new pn(c, A2, { type: l2 });
    D.append(E2, e2);
  }, "appendFileToFormData"), _ = a(() => {
    D.append(E2, p2);
  }, "appendEntryToFormData"), R = new TextDecoder("utf-8");
  R.decode(), i2.onPartBegin = function() {
    i2.onPartData = u, i2.onPartEnd = _, s2 = "", d2 = "", p2 = "", E2 = "", l2 = "", A2 = null, c.length = 0;
  }, i2.onHeaderField = function(e2) {
    s2 += R.decode(e2, { stream: true });
  }, i2.onHeaderValue = function(e2) {
    d2 += R.decode(e2, { stream: true });
  }, i2.onHeaderEnd = function() {
    if (d2 += R.decode(), s2 = s2.toLowerCase(), "content-disposition" === s2) {
      const e2 = d2.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      e2 && (E2 = e2[2] || e2[3] || ""), A2 = h(d2), A2 && (i2.onPartData = T, i2.onPartEnd = f);
    } else "content-type" === s2 && (l2 = d2);
    d2 = "", s2 = "";
  };
  for await (const e2 of r2) i2.write(e2);
  return i2.end(), D;
}
a(h, "_fileName"), a(A, "toFormData");

export { A as toFormData };
//# sourceMappingURL=multipart-parser-XPeAY-0N.mjs.map

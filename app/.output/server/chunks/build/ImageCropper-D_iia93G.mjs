import { v as Wt$1, s as pm } from './server.mjs';
import { o as o$1 } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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

function n(t2, e2) {
  var i2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(t2);
    e2 && (n2 = n2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), i2.push.apply(i2, n2);
  }
  return i2;
}
function o(t2) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var i2 = null != arguments[e2] ? arguments[e2] : {};
    e2 % 2 ? n(Object(i2), true).forEach(function(e3) {
      s(t2, e3, i2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : n(Object(i2)).forEach(function(e3) {
      Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
    });
  }
  return t2;
}
function s(t2, e2, i2) {
  return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
}
function r(t2) {
  return function(t3) {
    if (Array.isArray(t3)) return a(t3);
  }(t2) || function(t3) {
    if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"]) return Array.from(t3);
  }(t2) || function(t3, e2) {
    if (t3) {
      if ("string" == typeof t3) return a(t3, e2);
      var i2 = Object.prototype.toString.call(t3).slice(8, -1);
      return "Object" === i2 && t3.constructor && (i2 = t3.constructor.name), "Map" === i2 || "Set" === i2 ? Array.from(t3) : "Arguments" === i2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i2) ? a(t3, e2) : void 0;
    }
  }(t2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var i2 = 0, n2 = new Array(e2); i2 < e2; i2++) n2[i2] = t2[i2];
  return n2;
}
var h, c = (function(t2) {
  /*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
  !function() {
    var e2 = {}.hasOwnProperty;
    function i2() {
      for (var t3 = [], n2 = 0; n2 < arguments.length; n2++) {
        var o2 = arguments[n2];
        if (o2) {
          var s2 = typeof o2;
          if ("string" === s2 || "number" === s2) t3.push(o2);
          else if (Array.isArray(o2)) {
            if (o2.length) {
              var r2 = i2.apply(null, o2);
              r2 && t3.push(r2);
            }
          } else if ("object" === s2) if (o2.toString === Object.prototype.toString) for (var a2 in o2) e2.call(o2, a2) && o2[a2] && t3.push(a2);
          else t3.push(o2.toString());
        }
      }
      return t3.join(" ");
    }
    t2.exports ? (i2.default = i2, t2.exports = i2) : (void 0).classNames = i2;
  }();
}(h = { path: void 0, exports: {}, require: function(t2, e2) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(null == e2 && h.path);
} }, h.exports), h.exports), l = function(t2) {
  return function(e2, i2) {
    if (!e2) return t2;
    var n2;
    "string" == typeof e2 ? n2 = e2 : i2 = e2;
    var o2 = t2;
    return n2 && (o2 += "__" + n2), o2 + (i2 ? Object.keys(i2).reduce(function(t3, e3) {
      var n3 = i2[e3];
      return n3 && (t3 += " " + ("boolean" == typeof n3 ? o2 + "--" + e3 : o2 + "--" + e3 + "_" + n3)), t3;
    }, "") : "");
  };
};
function u(t2, e2, i2) {
  var n2, o2, s2, r2, a2;
  function h2() {
    var c3 = Date.now() - r2;
    c3 < e2 && c3 >= 0 ? n2 = setTimeout(h2, e2 - c3) : (n2 = null, i2 || (a2 = t2.apply(s2, o2), s2 = o2 = null));
  }
  null == e2 && (e2 = 100);
  var c2 = function() {
    s2 = this, o2 = arguments, r2 = Date.now();
    var c3 = i2 && !n2;
    return n2 || (n2 = setTimeout(h2, e2)), c3 && (a2 = t2.apply(s2, o2), s2 = o2 = null), a2;
  };
  return c2.clear = function() {
    n2 && (clearTimeout(n2), n2 = null);
  }, c2.flush = function() {
    n2 && (a2 = t2.apply(s2, o2), s2 = o2 = null, clearTimeout(n2), n2 = null);
  }, c2;
}
u.debounce = u;
var d = u, m = function() {
  return m = Object.assign || function(t2) {
    for (var e2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) for (var o2 in e2 = arguments[i2]) Object.prototype.hasOwnProperty.call(e2, o2) && (t2[o2] = e2[o2]);
    return t2;
  }, m.apply(this, arguments);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function p(t2, e2) {
  var i2, n2;
  return t2 && e2 ? (i2 = "" + t2 + e2[0].toUpperCase() + e2.slice(1), n2 = t2 + "-" + e2) : (i2 = t2 || e2, n2 = t2 || e2), { name: i2, classname: n2 };
}
function f(t2) {
  return /^blob:/.test(t2);
}
function g(t2) {
  return f(t2) || /^data:/.test(t2);
}
function v(t2) {
  return !!(t2 && t2.constructor && t2.call && t2.apply);
}
function b(t2) {
  return void 0 === t2;
}
function w(t2) {
  return "object" == typeof t2 && null !== t2;
}
function y(t2, e2, i2) {
  var n2 = {};
  return w(t2) ? (Object.keys(e2).forEach(function(o2) {
    b(t2[o2]) ? n2[o2] = e2[o2] : w(e2[o2]) ? w(t2[o2]) ? n2[o2] = y(t2[o2], e2[o2], i2[o2]) : n2[o2] = t2[o2] ? e2[o2] : i2[o2] : true === e2[o2] || false === e2[o2] ? n2[o2] = Boolean(t2[o2]) : n2[o2] = t2[o2];
  }), n2) : t2 ? e2 : i2;
}
function z(t2) {
  var e2 = Number(t2);
  return Number.isNaN(e2) ? t2 : e2;
}
function R(t2) {
  return typeof ("number" == t2 || /* @__PURE__ */ function(t3) {
    return "object" == typeof t3 && null !== t3;
  }(t2) && "[object Number]" == toString.call(t2)) && !A(t2);
}
function A(t2) {
  return t2 != t2;
}
function S(t2, e2) {
  return Math.sqrt(Math.pow(t2.x - e2.x, 2) + Math.pow(t2.y - e2.y, 2));
}
var x = function(t2, e2) {
  void 0 === t2 && (t2 = {}), void 0 === e2 && (e2 = {}), this.type = "manipulateImage", this.move = t2, this.scale = e2;
}, M = function(t2, e2) {
  void 0 === e2 && (e2 = {}), this.type = "resize", this.directions = t2, this.params = e2;
}, C = function(t2) {
  this.type = "move", this.directions = t2;
}, E = function() {
  function t2(t3, e2, i2, n2, o2) {
    this.type = "drag", this.nativeEvent = t3, this.position = i2, this.previousPosition = n2, this.element = e2, this.anchor = o2;
  }
  return t2.prototype.shift = function() {
    var t3 = this, e2 = t3.element, i2 = t3.anchor, n2 = t3.position;
    if (e2) {
      var o2 = e2.getBoundingClientRect(), s2 = o2.left, r2 = o2.top;
      return { left: n2.left - s2 - i2.left, top: n2.top - r2 - i2.top };
    }
    return { left: 0, top: 0 };
  }, t2;
}(), T = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
  (void 0).addEventListener("mouseup", this.onMouseUp, { passive: false }), (void 0).addEventListener("mousemove", this.onMouseMove, { passive: false }), (void 0).addEventListener("touchmove", this.onTouchMove, { passive: false }), (void 0).addEventListener("touchend", this.onTouchEnd, { passive: false });
}, beforeUnmount: function() {
  (void 0).removeEventListener("mouseup", this.onMouseUp), (void 0).removeEventListener("mousemove", this.onMouseMove), (void 0).removeEventListener("touchmove", this.onTouchMove), (void 0).removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  if (!this.$refs.draggable) throw new Error('You should add ref "draggable" to your root element to use draggable mixin');
  this.touches = [], this.hovered = false;
}, methods: { onMouseOver: function() {
  this.hovered || (this.hovered = true, this.$emit("enter"));
}, onMouseLeave: function() {
  this.hovered && !this.touches.length && (this.hovered = false, this.$emit("leave"));
}, onTouchStart: function(t2) {
  t2.cancelable && !this.disabled && 1 === t2.touches.length && (this.touches = r(t2.touches), this.hovered || (this.$emit("enter"), this.hovered = true), t2.touches.length && this.initAnchor(this.touches.reduce(function(e2, i2) {
    return { clientX: e2.clientX + i2.clientX / t2.touches.length, clientY: e2.clientY + i2.clientY / t2.touches.length };
  }, { clientX: 0, clientY: 0 })), t2.preventDefault && t2.preventDefault(), t2.stopPropagation());
}, onTouchEnd: function() {
  this.processEnd();
}, onTouchMove: function(t2) {
  this.touches.length && (this.processMove(t2, t2.touches), t2.preventDefault && t2.preventDefault(), t2.stopPropagation && t2.stopPropagation());
}, onMouseDown: function(t2) {
  if (!this.disabled) {
    var e2 = { fake: true, clientX: t2.clientX, clientY: t2.clientY };
    this.touches = [e2], this.initAnchor(e2), t2.stopPropagation();
  }
}, onMouseMove: function(t2) {
  this.touches.length && (this.processMove(t2, [{ fake: true, clientX: t2.clientX, clientY: t2.clientY }]), t2.preventDefault && t2.preventDefault());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(t2) {
  var e2 = this.$refs.draggable.getBoundingClientRect(), i2 = e2.left, n2 = e2.right, o2 = e2.bottom, s2 = e2.top;
  this.anchor = { left: t2.clientX - i2, top: t2.clientY - s2, bottom: o2 - t2.clientY, right: n2 - t2.clientX };
}, processMove: function(t2, e2) {
  var i2 = r(e2);
  if (this.touches.length) {
    if (1 === this.touches.length && 1 === i2.length) {
      var n2 = this.$refs.draggable;
      this.$emit("drag", new E(t2, n2, { left: i2[0].clientX, top: i2[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i2;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = false), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"], render: function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "draggable", class: n2.classname, onTouchstart: i2[1] || (i2[1] = function() {
    return r2.onTouchStart && r2.onTouchStart.apply(r2, arguments);
  }), onMousedown: i2[2] || (i2[2] = function() {
    return r2.onMouseDown && r2.onMouseDown.apply(r2, arguments);
  }), onMouseover: i2[3] || (i2[3] = function() {
    return r2.onMouseOver && r2.onMouseOver.apply(r2, arguments);
  }), onMouseleave: i2[4] || (i2[4] = function() {
    return r2.onMouseLeave && r2.onMouseLeave.apply(r2, arguments);
  }) }, [Wt$1.renderSlot(e2.$slots, "default")], 34);
} }, W = l("vue-handler-wrapper"), D = { name: "HandlerWrapper", components: { DraggableElement: T }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: false } }, computed: { classes: function() {
  var t2;
  if (this.horizontalPosition || this.verticalPosition) {
    var e2, i2 = p(this.horizontalPosition, this.verticalPosition);
    t2 = W((s(e2 = {}, i2.classname, true), s(e2, "disabled", this.disabled), e2));
  } else t2 = W({ disabled: this.disabled });
  return { root: t2, draggable: W("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("DraggableElement");
  return Wt$1.openBlock(), Wt$1.createBlock("div", { class: r2.classes.root }, [Wt$1.createVNode(a2, { class: r2.classes.draggable, onDrag: i2[1] || (i2[1] = function(t2) {
    return e2.$emit("drag", t2);
  }), onDragEnd: i2[2] || (i2[2] = function(t2) {
    return e2.$emit("drag-end");
  }), onLeave: i2[3] || (i2[3] = function(t2) {
    return e2.$emit("leave");
  }), onEnter: i2[4] || (i2[4] = function(t2) {
    return e2.$emit("enter");
  }) }, { default: Wt$1.withCtx(function() {
    return [Wt$1.renderSlot(e2.$slots, "default")];
  }), _: 3 }, 8, ["class"])], 2);
} }, B = l("vue-line-wrapper"), k = { name: "LineWrapper", components: { DraggableElement: T }, props: { position: { type: String, required: true }, disabled: { type: Boolean, default: false } }, computed: { classname: function() {
  var t2;
  return B((s(t2 = {}, this.position, true), s(t2, "disabled", this.disabled), t2));
} }, emits: ["leave", "enter", "drag", "drag-end"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("DraggableElement");
  return Wt$1.openBlock(), Wt$1.createBlock(a2, { class: r2.classname, onDrag: i2[1] || (i2[1] = function(t2) {
    return e2.$emit("drag", t2);
  }), onDragEnd: i2[2] || (i2[2] = function(t2) {
    return e2.$emit("drag-end");
  }), onLeave: i2[3] || (i2[3] = function(t2) {
    return e2.$emit("leave");
  }), onEnter: i2[4] || (i2[4] = function(t2) {
    return e2.$emit("enter");
  }) }, { default: Wt$1.withCtx(function() {
    return [Wt$1.renderSlot(e2.$slots, "default")];
  }), _: 3 }, 8, ["class"]);
} }, O = ["left", "right", "top", "bottom"], I = ["left", "right"], H = ["top", "bottom"], j = ["left", "top"], L = ["fill-area", "fit-area", "stencil", "none"], P = { left: 0, top: 0, width: 0, height: 0 };
function $(t2, e2, i2) {
  return !(i2 = i2 || ["width", "height", "left", "top"]).some(function(i3) {
    return t2[i3] !== e2[i3];
  });
}
function N(t2) {
  return { left: t2.left, top: t2.top, right: t2.left + t2.width, bottom: t2.top + t2.height };
}
function Y(t2, e2) {
  return { left: t2.left - e2.left, top: t2.top - e2.top };
}
function X(t2) {
  return { left: t2.left + t2.width / 2, top: t2.top + t2.height / 2 };
}
function F(t2, e2) {
  var i2 = { left: 0, top: 0, right: 0, bottom: 0 };
  return O.forEach(function(n2) {
    var o2 = e2[n2], s2 = N(t2)[n2];
    i2[n2] = void 0 !== o2 && void 0 !== s2 ? "left" === n2 || "top" === n2 ? Math.max(0, o2 - s2) : Math.max(0, s2 - o2) : 0;
  }), i2;
}
function U(t2, e2) {
  return { left: t2.left - e2.left, top: t2.top - e2.top, width: t2.width + e2.left + e2.right, height: t2.height + e2.top + e2.bottom };
}
function V(t2) {
  return { left: -t2.left, top: -t2.top };
}
function _(t2, e2) {
  return m(m({}, t2), { left: t2.left + e2.left, top: t2.top + e2.top });
}
function Z(t2, e2, i2, n2) {
  if (1 !== e2) {
    if (i2) {
      var o2 = X(t2);
      return { width: t2.width * e2, height: t2.height * e2, left: t2.left + t2.width * (1 - e2) / 2 + (i2.left - o2.left) * (1 - e2), top: t2.top + t2.height * (1 - e2) / 2 + (i2.top - o2.top) * (1 - e2) };
    }
    return { width: t2.width * e2, height: t2.height * e2, left: t2.left + t2.width * (1 - e2) / 2, top: t2.top + t2.height * (1 - e2) / 2 };
  }
  return t2;
}
function q(t2) {
  return t2.width / t2.height;
}
function G(t2, e2) {
  return Math.min(void 0 !== e2.right && void 0 !== e2.left ? (e2.right - e2.left) / t2.width : 1 / 0, void 0 !== e2.bottom && void 0 !== e2.top ? (e2.bottom - e2.top) / t2.height : 1 / 0);
}
function Q(t2, e2) {
  var i2 = { left: 0, top: 0 }, n2 = F(t2, e2);
  return n2.left && n2.left > 0 ? i2.left = n2.left : n2.right && n2.right > 0 && (i2.left = -n2.right), n2.top && n2.top > 0 ? i2.top = n2.top : n2.bottom && n2.bottom > 0 && (i2.top = -n2.bottom), i2;
}
function K(t2, e2) {
  var i2;
  return e2.minimum && t2 < e2.minimum ? i2 = e2.minimum : e2.maximum && t2 > e2.maximum && (i2 = e2.maximum), i2;
}
function J(t2, e2) {
  var i2 = q(t2), n2 = q(e2);
  return e2.width < 1 / 0 && e2.height < 1 / 0 ? i2 > n2 ? { width: e2.width, height: e2.width / i2 } : { width: e2.height * i2, height: e2.height } : e2.width < 1 / 0 ? { width: e2.width, height: e2.width / i2 } : e2.height < 1 / 0 ? { width: e2.height * i2, height: e2.height } : t2;
}
function tt(t2, e2) {
  var i2 = e2 * Math.PI / 180;
  return { width: Math.abs(t2.width * Math.cos(i2)) + Math.abs(t2.height * Math.sin(i2)), height: Math.abs(t2.width * Math.sin(i2)) + Math.abs(t2.height * Math.cos(i2)) };
}
function et(t2, e2) {
  var i2 = e2 * Math.PI / 180;
  return { left: t2.left * Math.cos(i2) - t2.top * Math.sin(i2), top: t2.left * Math.sin(i2) + t2.top * Math.cos(i2) };
}
function it(t2, e2) {
  var i2 = F(nt(t2, e2), e2);
  return i2.left + i2.right + i2.top + i2.bottom ? i2.left + i2.right > i2.top + i2.bottom ? Math.min((t2.width + i2.left + i2.right) / t2.width, G(t2, e2)) : Math.min((t2.height + i2.top + i2.bottom) / t2.height, G(t2, e2)) : 1;
}
function nt(t2, e2, i2) {
  void 0 === i2 && (i2 = false);
  var n2 = Q(t2, e2);
  return _(t2, i2 ? V(n2) : n2);
}
function ot(t2) {
  return { width: void 0 !== t2.right && void 0 !== t2.left ? t2.right - t2.left : 1 / 0, height: void 0 !== t2.bottom && void 0 !== t2.top ? t2.bottom - t2.top : 1 / 0 };
}
function st(t2, e2, i2) {
  void 0 === i2 && (i2 = true);
  var n2 = {};
  return O.forEach(function(o2) {
    var s2 = t2[o2], r2 = e2[o2];
    void 0 !== s2 && void 0 !== r2 ? n2[o2] = "left" === o2 || "top" === o2 ? i2 ? Math.max(s2, r2) : Math.min(s2, r2) : i2 ? Math.min(s2, r2) : Math.max(s2, r2) : void 0 !== r2 ? n2[o2] = r2 : void 0 !== s2 && (n2[o2] = s2);
  }), n2;
}
function rt(t2, e2) {
  return st(t2, e2, true);
}
function at(t2) {
  var e2 = t2.size, i2 = t2.aspectRatio, n2 = t2.ignoreMinimum, o2 = t2.sizeRestrictions;
  return Boolean((e2.correctRatio || q(e2) >= i2.minimum && q(e2) <= i2.maximum) && e2.height <= o2.maxHeight && e2.width <= o2.maxWidth && e2.width && e2.height && (n2 || e2.height >= o2.minHeight && e2.width >= o2.minWidth));
}
function ht(t2, e2) {
  return Math.pow(t2.width - e2.width, 2) + Math.pow(t2.height - e2.height, 2);
}
function ct(t2) {
  var e2 = t2.width, i2 = t2.height, n2 = t2.sizeRestrictions, o2 = { minimum: t2.aspectRatio && t2.aspectRatio.minimum || 0, maximum: t2.aspectRatio && t2.aspectRatio.maximum || 1 / 0 }, s2 = { width: Math.max(n2.minWidth, Math.min(n2.maxWidth, e2)), height: Math.max(n2.minHeight, Math.min(n2.maxHeight, i2)) };
  function r2(t3, s3) {
    return void 0 === s3 && (s3 = false), t3.reduce(function(t4, r3) {
      return at({ size: r3, aspectRatio: o2, sizeRestrictions: n2, ignoreMinimum: s3 }) && (!t4 || ht(r3, { width: e2, height: i2 }) < ht(t4, { width: e2, height: i2 })) ? r3 : t4;
    }, null);
  }
  var a2 = [];
  o2 && [o2.minimum, o2.maximum].forEach(function(t3) {
    t3 && a2.push({ width: s2.width, height: s2.width / t3, correctRatio: true }, { width: s2.height * t3, height: s2.height, correctRatio: true });
  }), at({ size: s2, aspectRatio: o2, sizeRestrictions: n2 }) && a2.push(s2);
  var h2 = r2(a2) || r2(a2, true);
  return h2 && { width: h2.width, height: h2.height };
}
function lt(t2) {
  var e2 = t2.event, i2 = t2.coordinates, n2 = t2.positionRestrictions, o2 = void 0 === n2 ? {} : n2, s2 = _(i2, e2.directions);
  return _(s2, Q(s2, o2));
}
function ut(t2) {
  t2.event;
  var e2 = t2.getAreaRestrictions, i2 = t2.boundaries, n2 = t2.coordinates, o2 = t2.visibleArea;
  t2.aspectRatio;
  var s2 = t2.stencilSize, r2 = t2.sizeRestrictions, a2 = t2.positionRestrictions;
  t2.stencilReference;
  var h2, c2, l2, u2 = m({}, n2), d2 = m({}, o2), p2 = m({}, s2);
  h2 = q(p2), c2 = q(u2), void 0 === l2 && (l2 = 1e-3), (0 === h2 || 0 === c2 ? Math.abs(c2 - h2) < l2 : Math.abs(c2 / h2) < 1 + l2 && Math.abs(c2 / h2) > 1 - l2) || (u2 = m(m({}, u2), ct({ sizeRestrictions: r2, width: u2.width, height: u2.height, aspectRatio: { minimum: q(p2), maximum: q(p2) } })));
  var f2 = it(d2 = Z(d2, u2.width * i2.width / (d2.width * p2.width)), e2({ visibleArea: d2, type: "resize" }));
  return 1 !== f2 && (d2 = Z(d2, f2), u2 = Z(u2, f2)), d2 = nt(d2 = _(d2, Y(X(u2), X(d2))), e2({ visibleArea: d2, type: "move" })), { coordinates: u2 = nt(u2, rt(N(d2), a2)), visibleArea: d2 };
}
function dt(t2) {
  var e2 = t2.event, i2 = t2.getAreaRestrictions, n2 = t2.boundaries, o2 = t2.coordinates, s2 = t2.visibleArea;
  t2.aspectRatio, t2.stencilSize, t2.sizeRestrictions;
  var r2 = t2.positionRestrictions;
  t2.stencilReference;
  var a2 = m({}, o2), h2 = m({}, s2);
  if (o2 && s2 && "manipulateImage" !== e2.type) {
    var c2 = { width: 0, height: 0 };
    h2.width, n2.width, q(n2) > q(a2) ? (c2.height = 0.8 * n2.height, c2.width = c2.height * q(a2)) : (c2.width = 0.8 * n2.width, c2.height = c2.width * q(a2));
    var l2 = it(h2 = Z(h2, a2.width * n2.width / (h2.width * c2.width)), i2({ visibleArea: h2, type: "resize" }));
    h2 = Z(h2, l2), 1 !== l2 && (c2.height /= l2, c2.width /= l2), h2 = nt(h2 = _(h2, Y(X(a2), X(h2))), i2({ visibleArea: h2, type: "move" })), a2 = nt(a2, rt(N(h2), r2));
  }
  return { coordinates: a2, visibleArea: h2 };
}
function mt(t2) {
  var e2 = t2.event, i2 = t2.coordinates, n2 = t2.visibleArea, o2 = t2.getAreaRestrictions, s2 = m({}, n2), r2 = m({}, i2);
  if ("setCoordinates" === e2.type) {
    var a2 = Math.max(0, r2.width - s2.width), h2 = Math.max(0, r2.height - s2.height);
    a2 > h2 ? s2 = Z(s2, Math.min(r2.width / s2.width, G(s2, o2({ visibleArea: s2, type: "resize" })))) : h2 > a2 && (s2 = Z(s2, Math.min(r2.height / s2.height, G(s2, o2({ visibleArea: s2, type: "resize" }))))), s2 = nt(s2 = _(s2, V(Q(r2, N(s2)))), o2({ visibleArea: s2, type: "move" }));
  }
  return { visibleArea: s2, coordinates: r2 };
}
function pt(t2) {
  var e2 = t2.imageSize, i2 = t2.visibleArea, n2 = t2.coordinates, o2 = i2 || e2;
  return { left: (i2 ? i2.left : 0) + o2.width / 2 - n2.width / 2, top: (i2 ? i2.top : 0) + o2.height / 2 - n2.height / 2 };
}
function ft(t2) {
  var e2 = t2.imageSize, i2 = t2.visibleArea, n2 = t2.aspectRatio, o2 = t2.sizeRestrictions, s2 = i2 || e2, r2 = Math.min(n2.maximum || 1 / 0, Math.max(n2.minimum || 0, q(s2))), a2 = s2.width < s2.height ? { width: 0.8 * s2.width, height: 0.8 * s2.width / r2 } : { height: 0.8 * s2.height, width: 0.8 * s2.height * r2 };
  return ct(m(m({}, a2), { aspectRatio: n2, sizeRestrictions: o2 }));
}
function gt(t2) {
  var e2, i2, n2 = t2.imageSize, o2 = t2.visibleArea, s2 = t2.boundaries, r2 = t2.aspectRatio, a2 = t2.sizeRestrictions, h2 = t2.stencilSize, c2 = o2 || n2;
  return q(c2) > q(s2) ? i2 = (e2 = h2.height * c2.height / s2.height) * q(h2) : e2 = (i2 = h2.width * c2.width / s2.width) / q(h2), ct({ width: i2, height: e2, aspectRatio: r2, sizeRestrictions: a2 });
}
function vt(t2) {
  var e2 = t2.getAreaRestrictions, i2 = t2.coordinates, n2 = t2.imageSize, o2 = q(t2.boundaries);
  if (i2) {
    var s2 = { height: Math.max(i2.height, n2.height), width: Math.max(i2.width, n2.width) }, r2 = J({ width: q(s2) > o2 ? s2.width : s2.height * o2, height: q(s2) > o2 ? s2.width / o2 : s2.height }, ot(e2())), a2 = { left: i2.left + i2.width / 2 - r2.width / 2, top: i2.top + i2.height / 2 - r2.height / 2, width: r2.width, height: r2.height }, h2 = F(i2, N(m({ left: 0, top: 0 }, n2))), c2 = {};
    return !h2.left && !h2.right && a2.width <= n2.width && (c2.left = 0, c2.right = n2.width), !h2.top && !h2.bottom && a2.height <= n2.height && (c2.top = 0, c2.bottom = n2.height), nt(a2, c2);
  }
  var l2 = q(n2);
  return r2 = { height: l2 > o2 ? n2.height : n2.width / o2, width: l2 > o2 ? n2.height * o2 : n2.width }, { left: n2.width / 2 - r2.width / 2, top: n2.height / 2 - r2.height / 2, width: r2.width, height: r2.height };
}
function bt(t2, e2) {
  return st(t2, N(e2));
}
function wt(t2) {
  var e2 = t2.directions, i2 = t2.coordinates, n2 = t2.positionRestrictions, o2 = void 0 === n2 ? {} : n2, s2 = t2.sizeRestrictions, r2 = t2.preserveRatio, a2 = t2.compensate, h2 = m({}, e2), c2 = U(i2, h2).width, l2 = U(i2, h2).height;
  c2 < 0 && (h2.left < 0 && h2.right < 0 ? (h2.left = -(i2.width - s2.minWidth) / (h2.left / h2.right), h2.right = -(i2.width - s2.minWidth) / (h2.right / h2.left)) : h2.left < 0 ? h2.left = -(i2.width - s2.minWidth) : h2.right < 0 && (h2.right = -(i2.width - s2.minWidth))), l2 < 0 && (h2.top < 0 && h2.bottom < 0 ? (h2.top = -(i2.height - s2.minHeight) / (h2.top / h2.bottom), h2.bottom = -(i2.height - s2.minHeight) / (h2.bottom / h2.top)) : h2.top < 0 ? h2.top = -(i2.height - s2.minHeight) : h2.bottom < 0 && (h2.bottom = -(i2.height - s2.minHeight)));
  var u2 = F(U(i2, h2), o2);
  a2 && (u2.left && u2.left > 0 && 0 === u2.right ? (h2.right += u2.left, h2.left -= u2.left) : u2.right && u2.right > 0 && 0 === u2.left && (h2.left += u2.right, h2.right -= u2.right), u2.top && u2.top > 0 && 0 === u2.bottom ? (h2.bottom += u2.top, h2.top -= u2.top) : u2.bottom && u2.bottom > 0 && 0 === u2.top && (h2.top += u2.bottom, h2.bottom -= u2.bottom), u2 = F(U(i2, h2), o2));
  var d2 = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (O.forEach(function(t3) {
    var e3 = u2[t3];
    e3 && h2[t3] && (d2[t3] = Math.max(0, 1 - e3 / h2[t3]));
  }), r2) {
    var p2 = Math.min.apply(null, O.map(function(t3) {
      return d2[t3];
    }));
    p2 !== 1 / 0 && O.forEach(function(t3) {
      h2[t3] *= p2;
    });
  } else O.forEach(function(t3) {
    d2[t3] !== 1 / 0 && (h2[t3] *= d2[t3]);
  });
  if (c2 = U(i2, h2).width, l2 = U(i2, h2).height, h2.right + h2.left && (c2 > s2.maxWidth ? d2.width = (s2.maxWidth - i2.width) / (h2.right + h2.left) : c2 < s2.minWidth && (d2.width = (s2.minWidth - i2.width) / (h2.right + h2.left))), h2.bottom + h2.top && (l2 > s2.maxHeight ? d2.height = (s2.maxHeight - i2.height) / (h2.bottom + h2.top) : l2 < s2.minHeight && (d2.height = (s2.minHeight - i2.height) / (h2.bottom + h2.top))), r2) {
    var f2 = Math.min(d2.width, d2.height);
    f2 !== 1 / 0 && O.forEach(function(t3) {
      h2[t3] *= f2;
    });
  } else d2.width !== 1 / 0 && I.forEach(function(t3) {
    h2[t3] *= d2.width;
  }), d2.height !== 1 / 0 && H.forEach(function(t3) {
    h2[t3] *= d2.height;
  });
  return h2;
}
function yt(t2, e2, i2) {
  return 0 == e2 && 0 == i2 ? t2 / 2 : 0 == e2 ? 0 : 0 == i2 ? t2 : t2 * Math.abs(e2 / (e2 + i2));
}
var zt = l("vue-simple-handler"), Rt = l("vue-simple-handler-wrapper"), At = { name: "SimpleHandler", components: { HandlerWrapper: D }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: false } }, data: function() {
  return { hover: false };
}, computed: { classes: function() {
  var t2, e2 = (s(t2 = {}, this.horizontalPosition, Boolean(this.horizontalPosition)), s(t2, this.verticalPosition, Boolean(this.verticalPosition)), s(t2, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), Boolean(this.verticalPosition && this.horizontalPosition)), s(t2, "hover", this.hover), t2);
  return { default: c(zt(e2), this.defaultClass, this.hover && this.hoverClass), wrapper: c(Rt(e2), this.wrapperClass) };
} }, methods: { onDrag: function(t2) {
  this.$emit("drag", t2);
}, onEnter: function() {
  this.hover = true;
}, onLeave: function() {
  this.hover = false;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("HandlerWrapper");
  return Wt$1.openBlock(), Wt$1.createBlock(a2, { class: r2.classes.wrapper, "vertical-position": n2.verticalPosition, "horizontal-position": n2.horizontalPosition, disabled: n2.disabled, onDrag: r2.onDrag, onDragEnd: r2.onDragEnd, onEnter: r2.onEnter, onLeave: r2.onLeave }, { default: Wt$1.withCtx(function() {
    return [Wt$1.createVNode("div", { class: r2.classes.default }, null, 2)];
  }), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
} }, St = l("vue-simple-line"), xt = l("vue-simple-line-wrapper"), Mt = { name: "SimpleLine", components: { LineWrapper: k }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: false } }, data: function() {
  return { hover: false };
}, computed: { classes: function() {
  return { root: c(St(s({}, this.position, true)), this.defaultClass, this.hover && this.hoverClass), wrapper: c(xt(s({}, this.position, true)), this.wrapperClass) };
} }, methods: { onDrag: function(t2) {
  this.$emit("drag", t2);
}, onEnter: function() {
  this.hover = true;
}, onLeave: function() {
  this.hover = false;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("LineWrapper");
  return Wt$1.openBlock(), Wt$1.createBlock(a2, { class: r2.classes.wrapper, position: n2.position, disabled: n2.disabled, onDrag: r2.onDrag, onDragEnd: r2.onDragEnd, onEnter: r2.onEnter, onLeave: r2.onLeave }, { default: Wt$1.withCtx(function() {
    return [Wt$1.createVNode("div", { class: r2.classes.root }, null, 2)];
  }), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
} }, Ct = l("vue-bounding-box"), Et = ["east", "west", null], Tt = ["south", "north", null], Wt = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: true, north: true, westNorth: true, west: true, westSouth: true, south: true, eastSouth: true, east: true };
} }, handlersComponent: { type: [Object, String], default: function() {
  return At;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: true, north: true, east: true, south: true };
} }, linesComponent: { type: [Object, String], default: function() {
  return Mt;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: true } }, data: function() {
  var t2 = [];
  return Et.forEach(function(e2) {
    Tt.forEach(function(i2) {
      if (e2 !== i2) {
        var n2 = p(e2, i2), o2 = n2.name, s2 = n2.classname;
        t2.push({ name: o2, classname: s2, verticalDirection: i2, horizontalDirection: e2 });
      }
    });
  }), { points: t2 };
}, computed: { style: function() {
  var t2 = {};
  return this.width && this.height && (t2.width = "".concat(this.width, "px"), t2.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (t2.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), t2;
}, classes: function() {
  var t2 = this.handlersClasses, e2 = this.handlersWrappersClasses, i2 = this.linesClasses, n2 = this.linesWrappersClasses;
  return { root: Ct(), handlers: t2, handlersWrappers: e2, lines: i2, linesWrappers: n2 };
}, lineNodes: function() {
  var t2 = this, e2 = [];
  return this.points.forEach(function(i2) {
    i2.horizontalDirection && i2.verticalDirection || !t2.lines[i2.name] || e2.push({ name: i2.name, component: t2.linesComponent, class: c(t2.classes.lines.default, t2.classes.lines[i2.name], !t2.resizable && t2.classes.lines.disabled), wrapperClass: c(t2.classes.linesWrappers.default, t2.classes.linesWrappers[i2.name], !t2.resizable && t2.classes.linesWrappers.disabled), hoverClass: t2.classes.lines.hover, verticalDirection: i2.verticalDirection, horizontalDirection: i2.horizontalDirection, disabled: !t2.resizable });
  }), e2;
}, handlerNodes: function() {
  var t2 = this, e2 = [], i2 = this.width, n2 = this.height;
  return this.points.forEach(function(o2) {
    if (t2.handlers[o2.name]) {
      var r2 = { name: o2.name, component: t2.handlersComponent, class: c(t2.classes.handlers.default, t2.classes.handlers[o2.name]), wrapperClass: c(t2.classes.handlersWrappers.default, t2.classes.handlersWrappers[o2.name]), hoverClass: t2.classes.handlers.hover, verticalDirection: o2.verticalDirection, horizontalDirection: o2.horizontalDirection, disabled: !t2.resizable };
      if (i2 && n2) {
        var a2 = o2.horizontalDirection, h2 = o2.verticalDirection, l2 = "east" === a2 ? i2 : "west" === a2 ? 0 : i2 / 2, u2 = "south" === h2 ? n2 : "north" === h2 ? 0 : n2 / 2;
        r2.wrapperClass = Ct("handler"), r2.wrapperStyle = { transform: "translate(".concat(l2, "px, ").concat(u2, "px)") }, t2.transitions && t2.transitions.enabled && (r2.wrapperStyle.transition = "".concat(t2.transitions.time, "ms ").concat(t2.transitions.timingFunction));
      } else r2.wrapperClass = Ct("handler", s({}, o2.classname, true));
      e2.push(r2);
    }
  }), e2;
} }, beforeMount: function() {
  (void 0).addEventListener("mouseup", this.onMouseUp, { passive: false }), (void 0).addEventListener("mousemove", this.onMouseMove, { passive: false }), (void 0).addEventListener("touchmove", this.onTouchMove, { passive: false }), (void 0).addEventListener("touchend", this.onTouchEnd, { passive: false });
}, beforeUnmount: function() {
  (void 0).removeEventListener("mouseup", this.onMouseUp), (void 0).removeEventListener("mousemove", this.onMouseMove), (void 0).removeEventListener("touchmove", this.onTouchMove), (void 0).removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [];
}, methods: { onEnd: function() {
  this.$emit("resize-end");
}, onHandlerDrag: function(t2, e2, i2) {
  var n2, o2 = t2.shift(), s2 = o2.left, r2 = o2.top, a2 = { left: 0, right: 0, top: 0, bottom: 0 };
  "west" === e2 ? a2.left -= s2 : "east" === e2 && (a2.right += s2), "north" === i2 ? a2.top -= r2 : "south" === i2 && (a2.bottom += r2), !i2 && e2 ? n2 = "width" : i2 && !e2 && (n2 = "height"), this.resizable && this.$emit("resize", new M(a2, { allowedDirections: { left: "west" === e2 || !e2, right: "east" === e2 || !e2, bottom: "south" === i2 || !i2, top: "north" === i2 || !i2 }, preserveAspectRatio: t2.nativeEvent && t2.nativeEvent.shiftKey, respectDirection: n2 }));
} }, emits: ["resize", "resize-end"], render: function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "box", class: r2.classes.root, style: r2.style }, [Wt$1.renderSlot(e2.$slots, "default"), Wt$1.createVNode("div", null, [(Wt$1.openBlock(true), Wt$1.createBlock(Wt$1.Fragment, null, Wt$1.renderList(r2.lineNodes, function(e3) {
    return Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(e3.component), { key: e3.name, "default-class": e3.class, "hover-class": e3.hoverClass, "wrapper-class": e3.wrapperClass, position: e3.name, disabled: e3.disabled, onDrag: function(t2) {
      return r2.onHandlerDrag(t2, e3.horizontalDirection, e3.verticalDirection);
    }, onDragEnd: i2[1] || (i2[1] = function(t2) {
      return r2.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  }), 128))]), (Wt$1.openBlock(true), Wt$1.createBlock(Wt$1.Fragment, null, Wt$1.renderList(r2.handlerNodes, function(e3) {
    return Wt$1.openBlock(), Wt$1.createBlock("div", { key: e3.name, style: e3.wrapperStyle, class: e3.wrapperClass }, [(Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(e3.component), { "default-class": e3.class, "hover-class": e3.hoverClass, "wrapper-class": e3.wrapperClass, "horizontal-position": e3.horizontalDirection, "vertical-position": e3.verticalDirection, disabled: e3.disabled, onDrag: function(t2) {
      return r2.onHandlerDrag(t2, e3.horizontalDirection, e3.verticalDirection);
    }, onDragEnd: i2[2] || (i2[2] = function(t2) {
      return r2.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  }), 128))], 6);
} }, Dt = l("vue-draggable-area"), Bt = { name: "DraggableArea", props: { movable: { type: Boolean, default: true }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: Dt() };
} }, beforeMount: function() {
  (void 0).addEventListener("mouseup", this.onMouseUp, { passive: false }), (void 0).addEventListener("mousemove", this.onMouseMove, { passive: false }), (void 0).addEventListener("touchmove", this.onTouchMove, { passive: false }), (void 0).addEventListener("touchend", this.onTouchEnd, { passive: false });
}, beforeUnmount: function() {
  (void 0).removeEventListener("mouseup", this.onMouseUp), (void 0).removeEventListener("mousemove", this.onMouseMove), (void 0).removeEventListener("touchmove", this.onTouchMove), (void 0).removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = false;
}, methods: { onTouchStart: function(t2) {
  if (t2.cancelable) {
    var e2 = this.movable && 1 === t2.touches.length;
    e2 && (this.touches = r(t2.touches)), (this.touchStarted || e2) && (t2.preventDefault(), t2.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = false, this.processEnd();
}, onTouchMove: function(t2) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(t2, t2.touches), t2.preventDefault(), t2.stopPropagation()) : S({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: t2.touches[0].clientX, y: t2.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: t2.touches[0].clientX, clientY: t2.touches[0].clientY }), this.touchStarted = true));
}, onMouseDown: function(t2) {
  if (this.movable && 0 === t2.button) {
    var e2 = { fake: true, clientX: t2.clientX, clientY: t2.clientY };
    this.touches = [e2], this.initAnchor(e2), t2.stopPropagation();
  }
}, onMouseMove: function(t2) {
  this.touches.length && (this.processMove(t2, [{ fake: true, clientX: t2.clientX, clientY: t2.clientY }]), t2.preventDefault && t2.cancelable && t2.preventDefault(), t2.stopPropagation());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(t2) {
  var e2 = this.$refs.container.getBoundingClientRect(), i2 = e2.left, n2 = e2.top;
  this.anchor = { x: t2.clientX - i2, y: t2.clientY - n2 };
}, processMove: function(t2, e2) {
  var i2 = r(e2);
  if (this.touches.length) {
    var n2 = this.$refs.container.getBoundingClientRect(), o2 = n2.left, s2 = n2.top;
    1 === this.touches.length && 1 === i2.length && this.$emit("move", new C({ left: i2[0].clientX - (o2 + this.anchor.x), top: i2[0].clientY - (s2 + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
function kt(t2) {
  var e2, i2;
  return { rotate: t2.rotate || 0, flip: { horizontal: (null === (e2 = null == t2 ? void 0 : t2.flip) || void 0 === e2 ? void 0 : e2.horizontal) || false, vertical: (null === (i2 = null == t2 ? void 0 : t2.flip) || void 0 === i2 ? void 0 : i2.vertical) || false } };
}
function Ot(t2) {
  var e2 = t2.rotate, i2 = t2.flip, n2 = t2.scaleX, o2 = t2.scaleY, s2 = "";
  return s2 += " rotate(" + e2 + "deg) ", (s2 += " scaleX(" + n2 * (i2.horizontal ? -1 : 1) + ") ") + " scaleY(" + o2 * (i2.vertical ? -1 : 1) + ") ";
}
function It(t2, e2) {
  var i2 = e2.getBoundingClientRect(), n2 = i2.left, o2 = i2.top, s2 = { left: 0, top: 0 }, r2 = 0;
  return t2.forEach(function(e3) {
    s2.left += (e3.clientX - n2) / t2.length, s2.top += (e3.clientY - o2) / t2.length;
  }), t2.forEach(function(t3) {
    r2 += S({ x: s2.left, y: s2.top }, { x: t3.clientX - n2, y: t3.clientY - o2 });
  }), { centerMass: s2, spread: r2, count: t2.length };
}
Bt.render = function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "container", onTouchstart: i2[1] || (i2[1] = function() {
    return r2.onTouchStart && r2.onTouchStart.apply(r2, arguments);
  }), onMousedown: i2[2] || (i2[2] = function() {
    return r2.onMouseDown && r2.onMouseDown.apply(r2, arguments);
  }) }, [Wt$1.renderSlot(e2.$slots, "default")], 544);
};
var Ht = { props: { touchMove: { type: Boolean, required: true }, mouseMove: { type: Boolean, required: true }, touchResize: { type: Boolean, required: true }, wheelResize: { type: [Boolean, Object], required: true }, eventsFilter: { type: Function, required: false } }, beforeMount: function() {
  (void 0).addEventListener("mouseup", this.onMouseUp, { passive: false }), (void 0).addEventListener("mousemove", this.onMouseMove, { passive: false }), (void 0).addEventListener("touchmove", this.onTouchMove, { passive: false }), (void 0).addEventListener("touchend", this.onTouchEnd, { passive: false });
}, beforeUnmount: function() {
  (void 0).removeEventListener("mouseup", this.onMouseUp), (void 0).removeEventListener("mousemove", this.onMouseMove), (void 0).removeEventListener("touchmove", this.onTouchMove), (void 0).removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = false, this.debouncedProcessEnd = d(this.processEnd), this.touches = [];
}, methods: { processMove: function(t2, e2) {
  if (this.touches.length) {
    if (1 === this.touches.length && 1 === e2.length) this.$emit("move", new x({ left: this.touches[0].clientX - e2[0].clientX, top: this.touches[0].clientY - e2[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i2 = It(e2, this.$refs.container), n2 = this.oldGeometricProperties;
      n2.count === i2.count && n2.count > 1 && this.$emit("resize", new x({ left: n2.centerMass.left - i2.centerMass.left, top: n2.centerMass.top - i2.centerMass.top }, { factor: n2.spread / i2.spread, center: i2.centerMass })), this.oldGeometricProperties = i2;
    }
    this.touches = e2;
  }
}, processEnd: function() {
  this.transforming && (this.transforming = false, this.$emit("transform-end"));
}, processStart: function() {
  this.transforming = true, this.debouncedProcessEnd.clear();
}, processEvent: function(t2) {
  return this.eventsFilter ? false !== this.eventsFilter(t2, this.transforming) : (t2.preventDefault(), t2.stopPropagation(), true);
}, onTouchStart: function(t2) {
  if (t2.cancelable && (this.touchMove || this.touchResize && t2.touches.length > 1) && this.processEvent(t2)) {
    var e2 = this.$refs.container, i2 = e2.getBoundingClientRect(), n2 = i2.left, o2 = i2.top, s2 = i2.bottom, a2 = i2.right;
    this.touches = r(t2.touches).filter(function(t3) {
      return t3.clientX > n2 && t3.clientX < a2 && t3.clientY > o2 && t3.clientY < s2;
    }), this.oldGeometricProperties = It(this.touches, e2);
  }
}, onTouchEnd: function(t2) {
  0 === t2.touches.length && (this.touches = [], this.processEnd());
}, onTouchMove: function(t2) {
  var e2 = this;
  if (this.touches.length) {
    var i2 = r(t2.touches).filter(function(t3) {
      return !t3.identifier || e2.touches.find(function(e3) {
        return e3.identifier === t3.identifier;
      });
    });
    this.processEvent(t2) && (this.processMove(t2, i2), this.processStart());
  }
}, onMouseDown: function(t2) {
  if (this.mouseMove && "buttons" in t2 && 1 === t2.buttons && this.processEvent(t2)) {
    var e2 = { fake: true, clientX: t2.clientX, clientY: t2.clientY };
    this.touches = [e2], this.processStart();
  }
}, onMouseMove: function(t2) {
  this.touches.length && this.processEvent(t2) && this.processMove(t2, [{ clientX: t2.clientX, clientY: t2.clientY }]);
}, onMouseUp: function() {
  this.touches = [], this.processEnd();
}, onWheel: function(t2) {
  if (this.wheelResize && this.processEvent(t2)) {
    var e2 = this.$refs.container.getBoundingClientRect(), i2 = e2.left, n2 = e2.top, o2 = 1 + this.wheelResize.ratio * (0 === (r2 = +(t2.deltaY || t2.detail || t2.wheelDelta)) || A(r2) ? r2 : r2 > 0 ? 1 : -1), s2 = { left: t2.clientX - i2, top: t2.clientY - n2 };
    this.$emit("resize", new x({}, { factor: o2, center: s2 })), this.touches.length || this.debouncedProcessEnd();
  }
  var r2;
} }, emits: ["resize", "move", "transform-end"], render: function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "container", onTouchstart: i2[1] || (i2[1] = function() {
    return r2.onTouchStart && r2.onTouchStart.apply(r2, arguments);
  }), onMousedown: i2[2] || (i2[2] = function() {
    return r2.onMouseDown && r2.onMouseDown.apply(r2, arguments);
  }), onWheel: i2[3] || (i2[3] = function() {
    return r2.onWheel && r2.onWheel.apply(r2, arguments);
  }) }, [Wt$1.renderSlot(e2.$slots, "default")], 544);
} }, jt = { components: { TransformableImage: Ht }, props: { touchMove: { type: Boolean, required: true }, mouseMove: { type: Boolean, required: true }, touchResize: { type: Boolean, required: true }, wheelResize: { type: [Boolean, Object], required: true } }, emits: ["resize", "move"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("transformable-image");
  return Wt$1.openBlock(), Wt$1.createBlock(a2, { "touch-move": n2.touchMove, "touch-resize": n2.touchResize, "mouse-move": n2.mouseMove, "wheel-resize": n2.wheelResize, onMove: i2[1] || (i2[1] = function(t2) {
    return e2.$emit("move", t2);
  }), onResize: i2[2] || (i2[2] = function(t2) {
    return e2.$emit("resize", t2);
  }) }, { default: Wt$1.withCtx(function() {
    return [Wt$1.renderSlot(e2.$slots, "default")];
  }), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
} }, Lt = l("vue-preview"), Pt = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: Lt({ fill: this.fill }), wrapper: Lt("wrapper"), imageWrapper: Lt("image-wrapper"), image: c(Lt("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var t2 = {};
  return this.width && (t2.width = "".concat(this.size.width, "px")), this.height && (t2.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (t2.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), t2;
}, wrapperStyle: function() {
  var t2 = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (t2.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), t2;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var t2 = this.coordinates.width / this.size.width, e2 = o(o({ rotate: 0, flip: { horizontal: false, vertical: false } }, this.image.transforms), {}, { scaleX: 1 / t2, scaleY: 1 / t2 }), i2 = this.imageSize.width, n2 = this.imageSize.height, s2 = tt({ width: i2, height: n2 }, e2.rotate), r2 = { width: "".concat(i2, "px"), height: "".concat(n2, "px"), left: "0px", top: "0px" }, a2 = { rotate: { left: (i2 - s2.width) * e2.scaleX / 2, top: (n2 - s2.height) * e2.scaleY / 2 }, scale: { left: (1 - e2.scaleX) * i2 / 2, top: (1 - e2.scaleY) * n2 / 2 } };
    return r2.transform = "translate(\n				".concat(-this.coordinates.left / t2 - a2.rotate.left - a2.scale.left, "px,").concat(-this.coordinates.top / t2 - a2.rotate.top - a2.scale.top, "px) ") + Ot(e2), this.transitions && this.transitions.enabled && (r2.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), r2;
  }
  return {};
}, size: function() {
  return { width: this.width || this.calculatedSize.width, height: this.height || this.calculatedSize.height };
}, imageSize: function() {
  return { width: this.image.width || this.calculatedImageSize.width, height: this.image.height || this.calculatedImageSize.height };
} }, watch: { image: function(t2) {
  (t2.width || t2.height) && this.onChangeImage();
} }, mounted: function() {
  var t2 = this;
  this.onChangeImage(), this.$refs.image.addEventListener("load", function() {
    t2.refreshImage();
  }), (void 0).addEventListener("resize", this.refresh), (void 0).addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  (void 0).removeEventListener("resize", this.refresh), (void 0).removeEventListener("orientationchange", this.refresh);
}, methods: { refreshImage: function() {
  var t2 = this.$refs.image;
  this.calculatedImageSize.height = t2.naturalHeight, this.calculatedImageSize.width = t2.naturalWidth;
}, refresh: function() {
  var t2 = this.$refs.root;
  this.width || (this.calculatedSize.width = t2.clientWidth), this.height || (this.calculatedSize.height = t2.clientHeight);
}, onChangeImage: function() {
  var t2 = this.$refs.image;
  t2 && t2.complete && this.refreshImage(), this.refresh();
} }, render: function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "root", class: r2.classes.root, style: r2.style }, [Wt$1.createVNode("div", { ref: "wrapper", class: r2.classes.wrapper, style: r2.wrapperStyle }, [Wt$1.withDirectives(Wt$1.createVNode("img", { ref: "image", src: n2.image && n2.image.src, class: r2.classes.image, style: r2.imageStyle }, null, 14, ["src"]), [[Wt$1.vShow, n2.image && n2.image.src]])], 6)], 6);
} }, $t = { components: { Preview: Pt }, inheritAttrs: false, render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("preview");
  return Wt$1.openBlock(), Wt$1.createBlock(a2, Wt$1.mergeProps(e2.$attrs, { fill: true }), null, 16);
} }, Nt = l("vue-rectangle-stencil"), Yt = { name: "RectangleStencil", components: { StencilPreview: $t, BoundingBox: Wt, DraggableArea: Bt }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return At;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return Mt;
} }, aspectRatio: { type: [Number, String] }, minAspectRatio: { type: [Number, String] }, maxAspectRatio: { type: [Number, String] }, movable: { type: Boolean, default: true }, resizable: { type: Boolean, default: true }, transitions: { type: Object }, movingClass: { type: String }, resizingClass: { type: String }, previewClass: { type: String }, boundingBoxClass: { type: String }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} } }, data: function() {
  return { moving: false, resizing: false };
}, computed: { classes: function() {
  return { stencil: c(Nt({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: c(Nt("preview"), this.previewClass), boundingBox: c(Nt("bounding-box"), this.boundingBoxClass) };
}, style: function() {
  var t2 = this.stencilCoordinates, e2 = t2.height, i2 = t2.width, n2 = t2.left, o2 = t2.top, s2 = { width: "".concat(i2, "px"), height: "".concat(e2, "px"), transform: "translate(".concat(n2, "px, ").concat(o2, "px)") };
  return this.transitions && this.transitions.enabled && (s2.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), s2;
} }, methods: { onMove: function(t2) {
  this.$emit("move", t2), this.moving = true;
}, onMoveEnd: function() {
  this.$emit("move-end"), this.moving = false;
}, onResize: function(t2) {
  this.$emit("resize", t2), this.resizing = true;
}, onResizeEnd: function() {
  this.$emit("resize-end"), this.resizing = false;
}, aspectRatios: function() {
  return { minimum: this.aspectRatio || this.minAspectRatio, maximum: this.aspectRatio || this.maxAspectRatio };
} }, emits: ["resize", "resize-end", "move", "move-end"], render: function(e2, i2, n2, o2, s2, r2) {
  var a2 = Wt$1.resolveComponent("stencil-preview"), h2 = Wt$1.resolveComponent("draggable-area"), c2 = Wt$1.resolveComponent("bounding-box");
  return Wt$1.openBlock(), Wt$1.createBlock("div", { class: r2.classes.stencil, style: r2.style }, [Wt$1.createVNode(c2, { width: n2.stencilCoordinates.width, height: n2.stencilCoordinates.height, transitions: n2.transitions, class: r2.classes.boundingBox, handlers: n2.handlers, "handlers-component": n2.handlersComponent, "handlers-classes": n2.handlersClasses, "handlers-wrappers-classes": n2.handlersWrappersClasses, lines: n2.lines, "lines-component": n2.linesComponent, "lines-classes": n2.linesClasses, "lines-wrappers-classes": n2.linesWrappersClasses, resizable: n2.resizable, onResize: r2.onResize, onResizeEnd: r2.onResizeEnd }, { default: Wt$1.withCtx(function() {
    return [Wt$1.createVNode(h2, { movable: n2.movable, onMove: r2.onMove, onMoveEnd: r2.onMoveEnd }, { default: Wt$1.withCtx(function() {
      return [Wt$1.createVNode(a2, { image: n2.image, coordinates: n2.coordinates, width: n2.stencilCoordinates.width, height: n2.stencilCoordinates.height, class: r2.classes.preview, transitions: n2.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    }), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  }), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
} }, Xt = ["transitions"], Ft = l("vue-advanced-cropper"), Ut = { name: "Cropper", components: { BackgroundWrapper: jt }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return Yt;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return jt;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: false }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: true }, checkOrientation: { type: Boolean, default: true }, canvas: { type: [Object, Boolean], default: true }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(t2) {
  return -1 !== L.indexOf(t2);
} }, roundResult: { type: Boolean, default: true }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(t2) {
  return !("string" == typeof t2 && "fill" !== t2 && "fit" !== t2);
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: true }, moveImage: { type: [Boolean, Object], default: true }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(t2) {
  var e2 = t2.event, i2 = t2.coordinates, n2 = t2.aspectRatio, o2 = t2.positionRestrictions, s2 = t2.sizeRestrictions, r2 = m(m({}, i2), { right: i2.left + i2.width, bottom: i2.top + i2.height }), a2 = e2.params || {}, h2 = m({}, e2.directions), c2 = a2.allowedDirections || { left: true, right: true, bottom: true, top: true };
  s2.widthFrozen && (h2.left = 0, h2.right = 0), s2.heightFrozen && (h2.top = 0, h2.bottom = 0), O.forEach(function(t3) {
    c2[t3] || (h2[t3] = 0);
  });
  var l2 = U(r2, h2 = wt({ coordinates: r2, directions: h2, sizeRestrictions: s2, positionRestrictions: o2 })).width, u2 = U(r2, h2).height, d2 = a2.preserveRatio ? q(r2) : K(l2 / u2, n2);
  if (d2) {
    var p2 = a2.respectDirection;
    if (p2 || (p2 = r2.width >= r2.height || 1 === d2 ? "width" : "height"), "width" === p2) {
      var f2 = l2 / d2 - r2.height;
      if (c2.top && c2.bottom) {
        var g2 = h2.top, v2 = h2.bottom;
        h2.bottom = yt(f2, v2, g2), h2.top = yt(f2, g2, v2);
      } else c2.bottom ? h2.bottom = f2 : c2.top ? h2.top = f2 : c2.right ? h2.right = 0 : c2.left && (h2.left = 0);
    } else if ("height" === p2) {
      var b2 = r2.width - u2 * d2;
      if (c2.left && c2.right) {
        var w2 = h2.left, y2 = h2.right;
        h2.left = -yt(b2, w2, y2), h2.right = -yt(b2, y2, w2);
      } else c2.left ? h2.left = -b2 : c2.right ? h2.right = -b2 : c2.top ? h2.top = 0 : c2.bottom && (h2.bottom = 0);
    }
    h2 = wt({ directions: h2, coordinates: r2, sizeRestrictions: s2, positionRestrictions: o2, preserveRatio: true, compensate: a2.compensate });
  }
  return l2 = U(r2, h2).width, u2 = U(r2, h2).height, (d2 = a2.preserveRatio ? q(r2) : K(l2 / u2, n2)) && Math.abs(d2 - l2 / u2) > 1e-3 && O.forEach(function(t3) {
    c2[t3] || (h2[t3] = 0);
  }), lt({ event: new C({ left: -h2.left, top: -h2.top }), coordinates: { width: i2.width + h2.right + h2.left, height: i2.height + h2.top + h2.bottom, left: i2.left, top: i2.top }, positionRestrictions: o2 });
} }, moveAlgorithm: { type: Function, default: lt }, initStretcher: { type: Function, default: function(t2) {
  var e2 = t2.stretcher, i2 = t2.imageSize, n2 = q(i2);
  e2.style.width = i2.width + "px", e2.style.height = e2.clientWidth / n2 + "px", e2.style.width = e2.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(t2) {
  var e2 = t2.visibleArea, i2 = t2.coordinates, n2 = t2.aspectRatio, o2 = t2.sizeRestrictions, s2 = t2.positionRestrictions, r2 = m(m({}, i2), ct({ width: i2.width, height: i2.height, aspectRatio: n2, sizeRestrictions: { maxWidth: e2.width, maxHeight: e2.height, minHeight: Math.min(e2.height, o2.minHeight), minWidth: Math.min(e2.width, o2.minWidth) } }));
  return nt(r2 = _(r2, Y(X(i2), X(r2))), rt(N(e2), s2));
} }, fitVisibleArea: { type: Function, default: function(t2) {
  var e2 = t2.visibleArea, i2 = t2.boundaries, n2 = t2.getAreaRestrictions, o2 = t2.coordinates, s2 = m({}, e2);
  s2.height = s2.width / q(i2), s2.top += (e2.height - s2.height) / 2, (o2.height - s2.height > 0 || o2.width - s2.width > 0) && (s2 = Z(s2, Math.max(o2.height / s2.height, o2.width / s2.width)));
  var r2 = V(Q(o2, N(s2 = Z(s2, it(s2, n2({ visibleArea: s2, type: "resize" }))))));
  return s2.width < o2.width && (r2.left = 0), s2.height < o2.height && (r2.top = 0), nt(s2 = _(s2, r2), n2({ visibleArea: s2, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(t2) {
  var e2 = t2.visibleArea, i2 = t2.boundaries, n2 = t2.imageSize, o2 = t2.imageRestriction, s2 = t2.type, r2 = {};
  return "fill-area" === o2 ? r2 = { left: 0, top: 0, right: n2.width, bottom: n2.height } : "fit-area" === o2 && (q(i2) > q(n2) ? (r2 = { top: 0, bottom: n2.height }, e2 && "move" === s2 && (e2.width > n2.width ? (r2.left = -(e2.width - n2.width) / 2, r2.right = n2.width - r2.left) : (r2.left = 0, r2.right = n2.width))) : (r2 = { left: 0, right: n2.width }, e2 && "move" === s2 && (e2.height > n2.height ? (r2.top = -(e2.height - n2.height) / 2, r2.bottom = n2.height - r2.top) : (r2.top = 0, r2.bottom = n2.height)))), r2;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(t2) {
  return { minWidth: t2.minWidth, minHeight: t2.minHeight, maxWidth: t2.maxWidth, maxHeight: t2.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(t2) {
  var e2 = t2.imageSize, i2 = {};
  return "none" !== t2.imageRestriction && (i2 = { left: 0, top: 0, right: e2.width, bottom: e2.height }), i2;
} } }, data: function() {
  return { transitionsActive: false, imageLoaded: false, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: false, vertical: false } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: false, vertical: false } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: o({}, P) };
}, computed: { image: function() {
  return { src: this.imageAttributes.src, width: this.imageAttributes.width, height: this.imageAttributes.height, transforms: this.imageTransforms };
}, imageTransforms: function() {
  return { rotate: this.appliedImageTransforms.rotate, flip: { horizontal: this.appliedImageTransforms.flip.horizontal, vertical: this.appliedImageTransforms.flip.vertical }, translateX: this.visibleArea ? this.visibleArea.left / this.coefficient : 0, translateY: this.visibleArea ? this.visibleArea.top / this.coefficient : 0, scaleX: 1 / this.coefficient, scaleY: 1 / this.coefficient };
}, imageSize: function() {
  var t2 = this.imageTransforms.rotate * Math.PI / 180;
  return { width: Math.abs(this.imageAttributes.width * Math.cos(t2)) + Math.abs(this.imageAttributes.height * Math.sin(t2)), height: Math.abs(this.imageAttributes.width * Math.sin(t2)) + Math.abs(this.imageAttributes.height * Math.cos(t2)) };
}, initialized: function() {
  return Boolean(this.visibleArea && this.imageLoaded);
}, settings: function() {
  var t2 = y(this.resizeImage, { touch: true, wheel: { ratio: 0.1 }, adjustStencil: true }, { touch: false, wheel: false, adjustStencil: false });
  return { moveImage: y(this.moveImage, { touch: true, mouse: true }, { touch: false, mouse: false }), resizeImage: t2 };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var t2 = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: b(this.minWidth) ? 0 : z(this.minWidth), minHeight: b(this.minHeight) ? 0 : z(this.minHeight), maxWidth: b(this.maxWidth) ? 1 / 0 : z(this.maxWidth), maxHeight: b(this.maxHeight) ? 1 / 0 : z(this.maxHeight) });
    if (t2 = function(t3) {
      var e3 = t3.areaRestrictions, i3 = t3.sizeRestrictions, n2 = t3.boundaries, o2 = t3.positionRestrictions, s2 = m(m({}, i3), { minWidth: void 0 !== i3.minWidth ? i3.minWidth : 0, minHeight: void 0 !== i3.minHeight ? i3.minHeight : 0, maxWidth: void 0 !== i3.maxWidth ? i3.maxWidth : 1 / 0, maxHeight: void 0 !== i3.maxHeight ? i3.maxHeight : 1 / 0 });
      void 0 !== o2.left && void 0 !== o2.right && (s2.maxWidth = Math.min(s2.maxWidth, o2.right - o2.left)), void 0 !== o2.bottom && void 0 !== o2.top && (s2.maxHeight = Math.min(s2.maxHeight, o2.bottom - o2.top));
      var r2 = ot(e3), a2 = J(n2, r2);
      return r2.width < 1 / 0 && (!s2.maxWidth || s2.maxWidth > a2.width) && (s2.maxWidth = Math.min(s2.maxWidth, a2.width)), r2.height < 1 / 0 && (!s2.maxHeight || s2.maxHeight > a2.height) && (s2.maxHeight = Math.min(s2.maxHeight, a2.height)), s2.minWidth > s2.maxWidth && (s2.minWidth = s2.maxWidth, s2.widthFrozen = true), s2.minHeight > s2.maxHeight && (s2.minHeight = s2.maxHeight, s2.heightFrozen = true), s2;
    }({ sizeRestrictions: t2, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var e2 = this.getStencilSize(), i2 = ot(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      t2.maxWidth = Math.min(t2.maxWidth, i2.width * e2.width / this.boundaries.width), t2.maxHeight = Math.min(t2.maxHeight, i2.height * e2.height / this.boundaries.height), t2.maxWidth < t2.minWidth && (t2.minWidth = t2.maxWidth), t2.maxHeight < t2.minHeight && (t2.minHeight = t2.maxHeight);
    }
    return t2;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: Ft(), image: c(Ft("image"), this.imageClass), stencil: Ft("stencil"), boundaries: c(Ft("boundaries"), this.boundariesClass), stretcher: c(Ft("stretcher")), background: c(Ft("background"), this.backgroundClass), foreground: c(Ft("foreground"), this.foregroundClass), imageWrapper: c(Ft("image-wrapper")), cropperWrapper: c(Ft("cropper-wrapper")) };
}, stencilCoordinates: function() {
  if (this.initialized) {
    var t2 = this.coordinates, e2 = t2.width, i2 = t2.height, n2 = t2.left, o2 = t2.top;
    return { width: e2 / this.coefficient, height: i2 / this.coefficient, left: (n2 - this.visibleArea.left) / this.coefficient, top: (o2 - this.visibleArea.top) / this.coefficient };
  }
  return this.defaultCoordinates();
}, boundariesStyle: function() {
  var t2 = { width: this.boundaries.width ? "".concat(Math.round(this.boundaries.width), "px") : "auto", height: this.boundaries.height ? "".concat(Math.round(this.boundaries.height), "px") : "auto", transition: "opacity ".concat(this.transitionTime, "ms"), pointerEvents: this.imageLoaded ? "all" : "none" };
  return this.imageLoaded || (t2.opacity = "0"), t2;
}, imageStyle: function() {
  var t2 = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, e2 = (t2.width - this.imageSize.width) / (2 * this.coefficient), i2 = (t2.height - this.imageSize.height) / (2 * this.coefficient), n2 = (1 - 1 / this.coefficient) * t2.width / 2, s2 = (1 - 1 / this.coefficient) * t2.height / 2, r2 = o(o({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / t2.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / t2.height) }), a2 = { width: "".concat(t2.width, "px"), height: "".concat(t2.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-e2 - n2 - this.imageTransforms.translateX, "px, ").concat(-i2 - s2 - this.imageTransforms.translateY, "px)") + Ot(r2) };
  return this.transitionsOptions.enabled && (a2.transition = "".concat(this.transitionsOptions.time, "ms ").concat(this.transitionsOptions.timingFunction)), a2;
} }, watch: { src: function() {
  this.onChangeImage();
}, stencilComponent: function() {
  var t2 = this;
  this.$nextTick(function() {
    t2.resetCoordinates(), t2.runAutoZoom("setCoordinates"), t2.onChange();
  });
}, minWidth: function() {
  this.onPropsChange();
}, maxWidth: function() {
  this.onPropsChange();
}, minHeight: function() {
  this.onPropsChange();
}, maxHeight: function() {
  this.onPropsChange();
}, imageRestriction: function() {
  this.reset();
}, stencilProps: function(t2, e2) {
  ["aspectRatio", "minAspectRatio", "maxAspectRatio"].find(function(i2) {
    return t2[i2] !== e2[i2];
  }) && this.$nextTick(this.onPropsChange);
} }, created: function() {
  this.debouncedUpdate = d(this.update, this.debounce), this.debouncedDisableTransitions = d(this.disableTransitions, this.transitionsOptions.time), this.awaiting = false;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), (void 0).addEventListener("resize", this.refresh), (void 0).addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  (void 0).removeEventListener("resize", this.refresh), (void 0).removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var t2 = this.initialized ? this.prepareResult(o({}, this.coordinates)) : this.defaultCoordinates(), e2 = { rotate: this.imageTransforms.rotate % 360, flip: o({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var i2 = this;
    return { image: this.image, coordinates: t2, visibleArea: this.visibleArea ? o({}, this.visibleArea) : null, imageTransforms: e2, get canvas() {
      return i2.canvas ? i2.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: t2, visibleArea: this.visibleArea ? o({}, this.visibleArea) : null, canvas: void 0, imageTransforms: e2 };
}, zoom: function(t2, e2) {
  var i2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).transitions, n2 = void 0 === i2 || i2;
  this.onManipulateImage(new x({}, { factor: 1 / t2, center: e2 }), { normalize: false, transitions: n2 });
}, move: function(t2, e2) {
  var i2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).transitions, n2 = void 0 === i2 || i2;
  this.onManipulateImage(new x({ left: t2 || 0, top: e2 || 0 }), { normalize: false, transitions: n2 });
}, setCoordinates: function(t2) {
  var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = i2.autoZoom, o2 = void 0 === n2 || n2, s2 = i2.transitions, r2 = void 0 === s2 || s2;
  this.$nextTick(function() {
    e2.imageLoaded ? (e2.transitionsActive || (r2 && e2.enableTransitions(), e2.coordinates = e2.applyTransform(t2), o2 && e2.runAutoZoom("setCoordinates"), r2 && e2.debouncedDisableTransitions()), e2.onChange()) : e2.delayedTransforms = t2;
  });
}, refresh: function() {
  var t2 = this, e2 = this.$refs.image;
  if (this.src && e2) return this.initialized ? this.updateVisibleArea().then(function() {
    t2.onChange();
  }) : this.resetVisibleArea().then(function() {
    t2.onChange();
  });
}, reset: function() {
  var t2 = this;
  return this.resetVisibleArea().then(function() {
    t2.onChange(false);
  });
}, awaitRender: function(t2) {
  var e2 = this;
  this.awaiting || (this.awaiting = true, this.$nextTick(function() {
    t2(), e2.awaiting = false;
  }));
}, prepareResult: function(t2) {
  return this.roundResult ? (e2 = o(o({}, this.getPublicProperties()), {}, { positionRestrictions: bt(this.positionRestrictions, this.visibleArea), coordinates: t2 }), i2 = e2.coordinates, n2 = e2.sizeRestrictions, s2 = e2.positionRestrictions, (r2 = { width: Math.round(i2.width), height: Math.round(i2.height), left: Math.round(i2.left), top: Math.round(i2.top) }).width > n2.maxWidth ? r2.width = Math.floor(i2.width) : r2.width < n2.minWidth && (r2.width = Math.ceil(i2.width)), r2.height > n2.maxHeight ? r2.height = Math.floor(i2.height) : r2.height < n2.minHeight && (r2.height = Math.ceil(i2.height)), nt(r2, s2)) : t2;
  var e2, i2, n2, s2, r2;
}, processAutoZoom: function(t2, e2, i2, n2) {
  var s2 = this.autoZoomAlgorithm;
  s2 || (s2 = this.stencilSize ? ut : this.autoZoom ? dt : mt);
  var r2 = s2({ event: { type: t2, params: n2 }, visibleArea: e2, coordinates: i2, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return o(o({}, r2), {}, { changed: !$(r2.visibleArea, e2) || !$(r2.coordinates, i2) });
}, runAutoZoom: function(t2) {
  var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = e2.transitions, n2 = void 0 !== i2 && i2, o2 = function(t3, e3) {
    if (null == t3) return {};
    var i3, n3, o3 = function(t4, e4) {
      if (null == t4) return {};
      var i4, n4, o4 = {}, s4 = Object.keys(t4);
      for (n4 = 0; n4 < s4.length; n4++) i4 = s4[n4], e4.indexOf(i4) >= 0 || (o4[i4] = t4[i4]);
      return o4;
    }(t3, e3);
    if (Object.getOwnPropertySymbols) {
      var s3 = Object.getOwnPropertySymbols(t3);
      for (n3 = 0; n3 < s3.length; n3++) i3 = s3[n3], e3.indexOf(i3) >= 0 || Object.prototype.propertyIsEnumerable.call(t3, i3) && (o3[i3] = t3[i3]);
    }
    return o3;
  }(e2, Xt), s2 = this.processAutoZoom(t2, this.visibleArea, this.coordinates, o2), r2 = s2.visibleArea, a2 = s2.coordinates, h2 = s2.changed;
  n2 && h2 && this.enableTransitions(), this.visibleArea = r2, this.coordinates = a2, n2 && h2 && this.debouncedDisableTransitions();
}, normalizeEvent: function(t2) {
  return function(t3) {
    var e2 = t3.event, i2 = t3.visibleArea, n2 = t3.coefficient;
    if ("manipulateImage" === e2.type) return m(m({}, e2), { move: { left: e2.move && e2.move.left ? n2 * e2.move.left : 0, top: e2.move && e2.move.top ? n2 * e2.move.top : 0 }, scale: { factor: e2.scale && e2.scale.factor ? e2.scale.factor : 1, center: e2.scale && e2.scale.center ? { left: e2.scale.center.left * n2 + i2.left, top: e2.scale.center.top * n2 + i2.top } : null } });
    if ("resize" === e2.type) {
      var o2 = m(m({}, e2), { directions: m({}, e2.directions) });
      return O.forEach(function(t4) {
        o2.directions[t4] *= n2;
      }), o2;
    }
    if ("move" === e2.type) {
      var s2 = m(m({}, e2), { directions: m({}, e2.directions) });
      return j.forEach(function(t4) {
        s2.directions[t4] *= n2;
      }), s2;
    }
    return e2;
  }(o(o({}, this.getPublicProperties()), {}, { event: t2 }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var t2 = this.$refs.canvas, e2 = this.$refs.image, i2 = 0 !== this.imageTransforms.rotate || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? function(t3, e3, i3) {
      var n3 = i3.rotate, o2 = i3.flip, s3 = { width: e3.naturalWidth, height: e3.naturalHeight }, r3 = tt(s3, n3), a3 = t3.getContext("2d");
      t3.height = r3.height, t3.width = r3.width, a3.save();
      var h2 = et(X(m({ left: 0, top: 0 }, s3)), n3);
      return a3.translate(-(h2.left - r3.width / 2), -(h2.top - r3.height / 2)), a3.rotate(n3 * Math.PI / 180), a3.translate(o2.horizontal ? s3.width : 0, o2.vertical ? s3.height : 0), a3.scale(o2.horizontal ? -1 : 1, o2.vertical ? -1 : 1), a3.drawImage(e3, 0, 0, s3.width, s3.height), a3.restore(), t3;
    }(this.$refs.sourceCanvas, e2, this.imageTransforms) : e2, n2 = o({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: true, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), s2 = function(t3) {
      return t3.find(function(t4) {
        return e3 = t4, !Number.isNaN(parseFloat(e3)) && isFinite(e3);
        var e3;
      });
    }, r2 = ct({ sizeRestrictions: { minWidth: s2([n2.width, n2.minWidth]) || 0, minHeight: s2([n2.height, n2.minHeight]) || 0, maxWidth: s2([n2.width, n2.maxWidth]) || 1 / 0, maxHeight: s2([n2.height, n2.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (n2.maxArea && r2.width * r2.height > n2.maxArea) {
      var a2 = Math.sqrt(n2.maxArea / (r2.width * r2.height));
      r2 = { width: Math.round(a2 * r2.width), height: Math.round(a2 * r2.height) };
    }
    return function(t3, e3, i3, n3, o2) {
      t3.width = n3 ? n3.width : i3.width, t3.height = n3 ? n3.height : i3.height;
      var s3 = t3.getContext("2d");
      s3.clearRect(0, 0, t3.width, t3.height), o2 && (o2.imageSmoothingEnabled && (s3.imageSmoothingEnabled = o2.imageSmoothingEnabled), o2.imageSmoothingQuality && (s3.imageSmoothingQuality = o2.imageSmoothingQuality), o2.fillColor && (s3.fillStyle = o2.fillColor, s3.fillRect(0, 0, t3.width, t3.height), s3.save()));
      var r3 = i3.left < 0 ? -i3.left : 0, a3 = i3.top < 0 ? -i3.top : 0;
      s3.drawImage(e3, i3.left + r3, i3.top + a3, i3.width, i3.height, r3 * (t3.width / i3.width), a3 * (t3.height / i3.height), t3.width, t3.height);
    }(t2, i2, this.coordinates, r2, n2), t2;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(t2) {
  var e2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i2 = this.visibleArea && e2 ? function(t3, e3) {
    return m(m({}, t3), { minWidth: Math.min(e3.width, t3.minWidth), minHeight: Math.min(e3.height, t3.minHeight), maxWidth: Math.min(e3.width, t3.maxWidth), maxHeight: Math.min(e3.height, t3.maxHeight) });
  }(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, n2 = this.visibleArea && e2 ? bt(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return function(t3) {
    var e3 = t3.coordinates, i3 = t3.transform, n3 = t3.imageSize, o2 = t3.sizeRestrictions, s2 = t3.positionRestrictions, r2 = t3.aspectRatio, a2 = t3.visibleArea, h2 = function(t4, e4) {
      return lt({ coordinates: t4, positionRestrictions: s2, event: new C({ left: e4.left - t4.left, top: e4.top - t4.top }) });
    }, c2 = m({}, e3);
    return (Array.isArray(i3) ? i3 : [i3]).forEach(function(t4) {
      var e4, i4, s3, l2;
      b((e4 = "function" == typeof t4 ? t4({ coordinates: c2, imageSize: n3, visibleArea: a2 }) : t4).width) && b(e4.height) || (i4 = c2, s3 = m(m({}, c2), e4), l2 = m(m(m({}, i4), ct({ width: s3.width, height: s3.height, sizeRestrictions: o2, aspectRatio: r2 })), { left: 0, top: 0 }), c2 = h2(l2, { left: i4.left, top: i4.top })), b(e4.left) && b(e4.top) || (c2 = h2(c2, m(m({}, c2), e4)));
    }), c2;
  }({ transform: t2, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i2, positionRestrictions: n2, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var t2 = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var e2 = this.defaultSize;
    e2 || (e2 = this.stencilSize ? gt : ft);
    var i2 = this.sizeRestrictions;
    i2.minWidth, i2.minHeight, i2.maxWidth, i2.maxHeight;
    var n2 = v(e2) ? e2({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : e2, s2 = this.defaultPosition || pt, a2 = [n2, function(e3) {
      var i3 = e3.coordinates;
      return o({}, v(s2) ? s2({ coordinates: i3, imageSize: t2.imageSize, visibleArea: t2.visibleArea }) : t2.defaultPosition);
    }];
    this.delayedTransforms && a2.push.apply(a2, r(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(a2, true), this.delayedTransforms = null;
  }
}, clearImage: function() {
  var t2 = this;
  this.imageLoaded = false, setTimeout(function() {
    var e2 = t2.$refs.stretcher;
    e2 && (e2.style.height = "auto", e2.style.width = "auto"), t2.coordinates = t2.defaultCoordinates(), t2.boundaries = { width: 0, height: 0 };
  }, this.transitionTime);
}, enableTransitions: function() {
  this.transitions && (this.transitionsActive = true);
}, disableTransitions: function() {
  this.transitionsActive = false;
}, updateBoundaries: function() {
  var t2 = this, e2 = this.$refs.stretcher, i2 = this.$refs.cropper;
  return this.initStretcher({ cropper: i2, stretcher: e2, imageSize: this.imageSize }), this.$nextTick().then(function() {
    var e3, n2, o2, s2, r2, a2, h2, c2 = { cropper: i2, imageSize: t2.imageSize };
    if (v(t2.defaultBoundaries) ? t2.boundaries = t2.defaultBoundaries(c2) : "fit" === t2.defaultBoundaries ? t2.boundaries = (o2 = (e3 = c2).imageSize, s2 = (n2 = e3.cropper).clientHeight, r2 = n2.clientWidth, a2 = s2, (h2 = o2.width * s2 / o2.height) > r2 && (h2 = r2, a2 = o2.height * r2 / o2.width), { width: h2, height: a2 }) : t2.boundaries = function(t3) {
      var e4 = t3.cropper;
      return { width: e4.clientWidth, height: e4.clientHeight };
    }(c2), !t2.boundaries.width || !t2.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  });
}, resetVisibleArea: function() {
  var t2 = this;
  return this.appliedImageTransforms = o(o({}, this.defaultImageTransforms), {}, { flip: o({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then(function() {
    "visible-area" !== t2.priority && (t2.visibleArea = null, t2.resetCoordinates());
    var e2, i2, n2, o2, s2, r2 = t2.defaultVisibleArea || vt;
    t2.visibleArea = v(r2) ? r2({ imageSize: t2.imageSize, boundaries: t2.boundaries, coordinates: "visible-area" !== t2.priority ? t2.coordinates : null, getAreaRestrictions: t2.getAreaRestrictions, stencilSize: t2.getStencilSize() }) : t2.defaultVisibleArea, t2.visibleArea = (i2 = (e2 = { visibleArea: t2.visibleArea, boundaries: t2.boundaries, getAreaRestrictions: t2.getAreaRestrictions }).boundaries, n2 = e2.getAreaRestrictions, o2 = m({}, e2.visibleArea), s2 = q(i2), o2.width / o2.height !== s2 && (o2.height = o2.width / s2), nt(o2, n2({ visibleArea: o2, type: "move" }))), "visible-area" === t2.priority ? t2.resetCoordinates() : t2.coordinates = t2.fitCoordinates({ visibleArea: t2.visibleArea, coordinates: t2.coordinates, aspectRatio: t2.getAspectRatio(), positionRestrictions: t2.positionRestrictions, sizeRestrictions: t2.sizeRestrictions }), t2.runAutoZoom("resetVisibleArea");
  }).catch(function() {
    t2.visibleArea = null;
  });
}, updateVisibleArea: function() {
  var t2 = this;
  return this.updateBoundaries().then(function() {
    t2.visibleArea = t2.fitVisibleArea({ imageSize: t2.imageSize, boundaries: t2.boundaries, visibleArea: t2.visibleArea, coordinates: t2.coordinates, getAreaRestrictions: t2.getAreaRestrictions }), t2.coordinates = t2.fitCoordinates({ visibleArea: t2.visibleArea, coordinates: t2.coordinates, aspectRatio: t2.getAspectRatio(), positionRestrictions: t2.positionRestrictions, sizeRestrictions: t2.sizeRestrictions }), t2.runAutoZoom("updateVisibleArea");
  }).catch(function() {
    t2.visibleArea = null;
  });
}, onChange: function() {
  (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && this.debounce ? this.debouncedUpdate() : this.update();
}, onChangeImage: function() {
  var t2, e2 = this;
  if (this.imageLoaded = false, this.delayedTransforms = null, this.src) {
    if (function(t3) {
      if (g(t3)) return false;
      var e3 = (void 0).location, i3 = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(t3) || [], n3 = { protocol: i3[1] || "", host: i3[2] || "", port: i3[3] || "" }, o2 = function(t4) {
        return t4.port || ("http" === (t4.protocol || e3.protocol) ? 80 : 433);
      };
      return !(!n3.protocol && !n3.host && !n3.port || Boolean(n3.protocol && n3.protocol == e3.protocol && n3.host && n3.host == e3.host && n3.host && o2(n3) == o2(e3)));
    }(this.src)) {
      var i2 = b(this.crossOrigin) ? this.canvas : this.crossOrigin;
      true === i2 && (i2 = "anonymous"), this.imageAttributes.crossOrigin = i2 || null;
    }
    if (this.checkOrientation) {
      var n2 = (t2 = this.src, new Promise(function(e3) {
        (function(t3) {
          return new Promise(function(e4, i3) {
            try {
              if (t3) if (/^data:/i.test(t3)) e4(function(t4) {
                t4 = t4.replace(/^data:([^;]+);base64,/gim, "");
                for (var e5 = atob(t4), i4 = e5.length, n4 = new ArrayBuffer(i4), o3 = new Uint8Array(n4), s3 = 0; s3 < i4; s3++) o3[s3] = e5.charCodeAt(s3);
                return n4;
              }(t3));
              else if (/^blob:/i.test(t3)) {
                var n3 = new FileReader();
                n3.onload = function(t4) {
                  e4(t4.target.result);
                }, s2 = t3, r2 = function(t4) {
                  n3.readAsArrayBuffer(t4);
                }, (a2 = new (void 0)()).open("GET", s2, true), a2.responseType = "blob", a2.onload = function() {
                  200 != this.status && 0 !== this.status || r2(this.response);
                }, a2.send();
              } else {
                var o2 = new (void 0)();
                o2.onreadystatechange = function() {
                  4 === o2.readyState && (200 === o2.status || 0 === o2.status ? e4(o2.response) : i3("Warning: could not load an image to parse its orientation"), o2 = null);
                }, o2.onprogress = function() {
                  "image/jpeg" !== o2.getResponseHeader("content-type") && o2.abort();
                }, o2.withCredentials = false, o2.open("GET", t3, true), o2.responseType = "arraybuffer", o2.send(null);
              }
              else i3("Error: the image is empty");
            } catch (h2) {
              i3(h2);
            }
            var s2, r2, a2;
          });
        })(t2).then(function(i3) {
          var n3 = function(t3) {
            try {
              var e4, i4 = new DataView(t3), n4 = void 0, o2 = void 0, s2 = void 0, r2 = void 0;
              if (255 === i4.getUint8(0) && 216 === i4.getUint8(1)) for (var a2 = i4.byteLength, h2 = 2; h2 + 1 < a2; ) {
                if (255 === i4.getUint8(h2) && 225 === i4.getUint8(h2 + 1)) {
                  s2 = h2;
                  break;
                }
                h2++;
              }
              if (s2 && (n4 = s2 + 10, "Exif" === function(t4, e5, i5) {
                var n5, o3 = "";
                for (n5 = e5, i5 += e5; n5 < i5; n5++) o3 += String.fromCharCode(t4.getUint8(n5));
                return o3;
              }(i4, s2 + 4, 4))) {
                var c2 = i4.getUint16(n4);
                if (((o2 = 18761 === c2) || 19789 === c2) && 42 === i4.getUint16(n4 + 2, o2)) {
                  var l2 = i4.getUint32(n4 + 4, o2);
                  l2 >= 8 && (r2 = n4 + l2);
                }
              }
              if (r2) {
                for (var u2 = i4.getUint16(r2, o2), d2 = 0; d2 < u2; d2++) if (h2 = r2 + 12 * d2 + 2, 274 === i4.getUint16(h2, o2)) {
                  h2 += 8, e4 = i4.getUint16(h2, o2), i4.setUint16(h2, 1, o2);
                  break;
                }
              }
              return e4;
            } catch (m2) {
              return null;
            }
          }(i3);
          e3(i3 ? { source: t2, arrayBuffer: i3, orientation: n3 } : { source: t2, arrayBuffer: null, orientation: null });
        }).catch(function(i3) {
          console.warn(i3), e3({ source: t2, arrayBuffer: null, orientation: null });
        });
      }));
      setTimeout(function() {
        n2.then(e2.onParseImage);
      }, this.transitionTime);
    } else setTimeout(function() {
      e2.onParseImage({ source: e2.src });
    }, this.transitionTime);
  } else this.clearImage();
}, onFailLoadImage: function() {
  this.imageAttributes.src && (this.clearImage(), this.$emit("error"));
}, onSuccessLoadImage: function() {
  var t2 = this, e2 = this.$refs.image;
  e2 && !this.imageLoaded && (this.imageAttributes.height = e2.naturalHeight, this.imageAttributes.width = e2.naturalWidth, this.imageLoaded = true, this.resetVisibleArea().then(function() {
    t2.$emit("ready"), t2.onChange(false);
  }));
}, onParseImage: function(t2) {
  var e2 = this, i2 = t2.source, n2 = t2.arrayBuffer, s2 = t2.orientation;
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = false, n2 && s2 && s2 > 1 ? f(i2) || !g(i2) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([n2])), this.imageAttributes.revoke = true) : this.imageAttributes.src = function(t3) {
    for (var e3 = [], i3 = new Uint8Array(t3); i3.length > 0; ) {
      var n3 = i3.subarray(0, 8192);
      e3.push(String.fromCharCode.apply(null, Array.from ? Array.from(n3) : n3.slice())), i3 = i3.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(e3.join(""));
  }(n2) : this.imageAttributes.src = i2, v(this.defaultTransforms) ? this.appliedImageTransforms = kt(this.defaultTransforms()) : w(this.defaultTransforms) ? this.appliedImageTransforms = kt(this.defaultTransforms) : this.appliedImageTransforms = function(t3) {
    var e3 = kt({});
    if (t3) switch (t3) {
      case 2:
        e3.flip.horizontal = true;
        break;
      case 3:
        e3.rotate = -180;
        break;
      case 4:
        e3.flip.vertical = true;
        break;
      case 5:
        e3.rotate = 90, e3.flip.vertical = true;
        break;
      case 6:
        e3.rotate = 90;
        break;
      case 7:
        e3.rotate = 90, e3.flip.horizontal = true;
        break;
      case 8:
        e3.rotate = -90;
    }
    return e3;
  }(s2), this.defaultImageTransforms = o(o({}, this.appliedImageTransforms), {}, { flip: o({}, this.appliedImageTransforms.flip) }), this.$nextTick(function() {
    var t3 = e2.$refs.image;
    t3 && t3.complete && (Boolean(t3.naturalWidth) ? e2.onSuccessLoadImage() : e2.onFailLoadImage());
  });
}, onResizeEnd: function() {
  this.runAutoZoom("resize", { transitions: true });
}, onMoveEnd: function() {
  this.runAutoZoom("move", { transitions: true });
}, onMove: function(t2) {
  var e2 = this;
  this.transitionsOptions.enabled || this.awaitRender(function() {
    e2.coordinates = e2.moveAlgorithm(o(o({}, e2.getPublicProperties()), {}, { positionRestrictions: bt(e2.positionRestrictions, e2.visibleArea), coordinates: e2.coordinates, event: e2.normalizeEvent(t2) })), e2.onChange();
  });
}, onResize: function(t2) {
  var e2 = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender(function() {
    var i2 = e2.sizeRestrictions, n2 = Math.min(e2.coordinates.width, e2.coordinates.height, 20 * e2.coefficient);
    e2.coordinates = e2.resizeAlgorithm(o(o({}, e2.getPublicProperties()), {}, { positionRestrictions: bt(e2.positionRestrictions, e2.visibleArea), sizeRestrictions: { maxWidth: Math.min(i2.maxWidth, e2.visibleArea.width), maxHeight: Math.min(i2.maxHeight, e2.visibleArea.height), minWidth: Math.max(i2.minWidth, n2), minHeight: Math.max(i2.minHeight, n2) }, event: e2.normalizeEvent(t2) })), e2.onChange(), e2.ticking = false;
  });
}, onManipulateImage: function(t2) {
  var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i2 = e2.transitions, n2 = void 0 !== i2 && i2, s2 = e2.normalize, r2 = void 0 === s2 || s2;
    n2 && this.enableTransitions();
    var a2 = function(t3) {
      var e3 = t3.event, i3 = t3.coordinates, n3 = t3.visibleArea, o2 = t3.sizeRestrictions, s3 = t3.getAreaRestrictions, r3 = t3.positionRestrictions, a3 = t3.adjustStencil, h3 = e3.scale, c3 = e3.move, l2 = m({}, n3), u2 = m({}, i3), d2 = 1, p2 = 1, f2 = h3.factor && Math.abs(h3.factor - 1) > 1e-3;
      l2 = _(l2, { left: c3.left || 0, top: c3.top || 0 });
      var g2 = { stencil: { minimum: Math.max(o2.minWidth ? o2.minWidth / u2.width : 0, o2.minHeight ? o2.minHeight / u2.height : 0), maximum: Math.min(o2.maxWidth ? o2.maxWidth / u2.width : 1 / 0, o2.maxHeight ? o2.maxHeight / u2.height : 1 / 0, G(u2, r3)) }, area: { maximum: G(l2, s3({ visibleArea: l2, type: "resize" })) } };
      h3.factor && f2 && (h3.factor < 1 ? (p2 = Math.max(h3.factor, g2.stencil.minimum)) > 1 && (p2 = 1) : h3.factor > 1 && (p2 = Math.min(h3.factor, Math.min(g2.area.maximum, g2.stencil.maximum))) < 1 && (p2 = 1)), p2 && (l2 = Z(l2, p2, h3.center));
      var v2 = i3.left - n3.left, b2 = n3.width + n3.left - (i3.width + i3.left), w2 = i3.top - n3.top, y2 = n3.height + n3.top - (i3.height + i3.top);
      return l2 = nt(l2 = _(l2, Q(l2, { left: void 0 !== r3.left ? r3.left - v2 * p2 : void 0, top: void 0 !== r3.top ? r3.top - w2 * p2 : void 0, bottom: void 0 !== r3.bottom ? r3.bottom + y2 * p2 : void 0, right: void 0 !== r3.right ? r3.right + b2 * p2 : void 0 })), s3({ visibleArea: l2, type: "move" })), u2.width = u2.width * p2, u2.height = u2.height * p2, u2.left = l2.left + v2 * p2, u2.top = l2.top + w2 * p2, u2 = nt(u2, rt(N(l2), r3)), h3.factor && f2 && a3 && (h3.factor > 1 ? d2 = Math.min(g2.area.maximum, h3.factor) / p2 : h3.factor < 1 && (d2 = Math.max(u2.height / l2.height, u2.width / l2.width, h3.factor / p2)), 1 !== d2 && (l2 = _(l2 = nt(l2 = Z(l2, d2, h3.factor > 1 ? h3.center : X(u2)), s3({ visibleArea: l2, type: "move" })), V(Q(u2, N(l2)))))), { coordinates: u2, visibleArea: l2 };
    }(o(o({}, this.getPublicProperties()), {}, { event: r2 ? this.normalizeEvent(t2) : t2, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), h2 = a2.visibleArea, c2 = a2.coordinates;
    this.visibleArea = h2, this.coordinates = c2, this.runAutoZoom("manipulateImage"), this.onChange(), n2 && this.debouncedDisableTransitions();
  }
}, onPropsChange: function() {
  this.coordinates = this.applyTransform(this.coordinates, true), this.onChange(false);
}, getAreaRestrictions: function() {
  var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t2.visibleArea, i2 = t2.type, n2 = void 0 === i2 ? "move" : i2;
  return this.areaRestrictionsAlgorithm({ boundaries: this.boundaries, imageSize: this.imageSize, imageRestriction: this.imageRestriction, visibleArea: e2, type: n2 });
}, getAspectRatio: function(t2) {
  var e2, i2, n2 = this.stencilProps, o2 = n2.aspectRatio, s2 = n2.minAspectRatio, r2 = n2.maxAspectRatio;
  if (this.$refs.stencil && this.$refs.stencil.aspectRatios) {
    var a2 = this.$refs.stencil.aspectRatios();
    e2 = a2.minimum, i2 = a2.maximum;
  }
  if (b(e2) && (e2 = b(o2) ? s2 : o2), b(i2) && (i2 = b(o2) ? r2 : o2), !t2 && (b(e2) || b(i2))) {
    var h2 = this.getStencilSize(), c2 = h2 ? q(h2) : null;
    b(e2) && (e2 = R(c2) ? c2 : void 0), b(i2) && (i2 = R(c2) ? c2 : void 0);
  }
  return { minimum: e2, maximum: i2 };
}, getStencilSize: function() {
  if (this.stencilSize) return e2 = (t2 = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(true) }).boundaries, n2 = t2.aspectRatio, K(q(o2 = v(i2 = t2.stencilSize) ? i2({ boundaries: e2, aspectRatio: n2 }) : i2), n2) && (o2 = ct({ sizeRestrictions: { maxWidth: e2.width, maxHeight: e2.height, minWidth: 0, minHeight: 0 }, width: o2.width, height: o2.height, aspectRatio: { minimum: n2.minimum, maximum: n2.maximum } })), (o2.width > e2.width || o2.height > e2.height) && (o2 = ct({ sizeRestrictions: { maxWidth: e2.width, maxHeight: e2.height, minWidth: 0, minHeight: 0 }, width: o2.width, height: o2.height, aspectRatio: { minimum: q(o2), maximum: q(o2) } })), o2;
  var t2, e2, i2, n2, o2;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return o({}, P);
}, flip: function(t2, e2) {
  var i2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).transitions, n2 = void 0 === i2 || i2;
  if (!this.transitionsActive) {
    n2 && this.enableTransitions();
    var s2 = o({}, this.imageTransforms.flip), r2 = function(t3) {
      var e3 = t3.flip, i3 = t3.previousFlip, n3 = t3.rotate, o2 = t3.getAreaRestrictions, s3 = t3.coordinates, r3 = t3.visibleArea, a3 = t3.imageSize, h3 = m({}, s3), c2 = m({}, r3), l2 = i3.horizontal !== e3.horizontal, u2 = i3.vertical !== e3.vertical;
      if (l2 || u2) {
        var d2 = et({ left: a3.width / 2, top: a3.height / 2 }, -n3), p2 = et(X(h3), -n3), f2 = et({ left: l2 ? d2.left - (p2.left - d2.left) : p2.left, top: u2 ? d2.top - (p2.top - d2.top) : p2.top }, n3);
        h3 = _(h3, Y(f2, X(h3))), p2 = et(X(c2), -n3), c2 = nt(c2 = _(c2, Y(f2 = et({ left: l2 ? d2.left - (p2.left - d2.left) : p2.left, top: u2 ? d2.top - (p2.top - d2.top) : p2.top }, n3), X(c2))), o2({ visibleArea: c2, type: "move" }));
      }
      return { coordinates: h3, visibleArea: c2 };
    }({ flip: { horizontal: t2 ? !s2.horizontal : s2.horizontal, vertical: e2 ? !s2.vertical : s2.vertical }, previousFlip: s2, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), a2 = r2.visibleArea, h2 = r2.coordinates;
    t2 && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), e2 && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = a2, this.coordinates = h2, this.onChange(), n2 && this.debouncedDisableTransitions();
  }
}, rotate: function(t2) {
  var e2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).transitions, i2 = void 0 === e2 || e2;
  if (!this.transitionsActive) {
    i2 && this.enableTransitions();
    var n2 = o({}, this.imageSize);
    this.appliedImageTransforms.rotate += t2;
    var s2 = function(t3) {
      var e3 = t3.aspectRatio, i3 = t3.getAreaRestrictions, n3 = t3.coordinates, o2 = t3.visibleArea, s3 = t3.sizeRestrictions, r3 = t3.positionRestrictions, a3 = t3.imageSize, h3 = t3.previousImageSize, c2 = t3.angle, l2 = m({}, n3), u2 = m({}, o2), d2 = et(X(m({ left: 0, top: 0 }, h3)), c2);
      return (l2 = m(m({}, ct({ sizeRestrictions: s3, aspectRatio: e3, width: l2.width, height: l2.height })), et(X(l2), c2))).left -= d2.left - a3.width / 2 + l2.width / 2, l2.top -= d2.top - a3.height / 2 + l2.height / 2, u2 = Z(u2, it(u2, i3({ visibleArea: u2, type: "resize" }))), { coordinates: l2 = nt(l2, r3), visibleArea: u2 = nt(u2 = _(u2, Y(X(l2), X(n3))), i3({ visibleArea: u2, type: "move" })) };
    }({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: n2, imageSize: this.imageSize, angle: t2, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), r2 = s2.visibleArea, a2 = s2.coordinates, h2 = this.processAutoZoom("rotateImage", r2, a2);
    r2 = h2.visibleArea, a2 = h2.coordinates, this.visibleArea = r2, this.coordinates = a2, this.onChange(), i2 && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, Vt = { key: 0, ref: "canvas", style: { display: "none" } }, _t = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
Ut.render = function(e2, i2, n2, o2, s2, r2) {
  return Wt$1.openBlock(), Wt$1.createBlock("div", { ref: "cropper", class: r2.classes.cropper }, [Wt$1.createVNode("div", { ref: "stretcher", class: r2.classes.stretcher }, null, 2), Wt$1.createVNode("div", { class: r2.classes.boundaries, style: r2.boundariesStyle }, [(Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(n2.backgroundWrapperComponent), { class: r2.classes.cropperWrapper, "wheel-resize": r2.settings.resizeImage.wheel, "touch-resize": r2.settings.resizeImage.touch, "touch-move": r2.settings.moveImage.touch, "mouse-move": r2.settings.moveImage.mouse, onMove: r2.onManipulateImage, onResize: r2.onManipulateImage }, { default: Wt$1.withCtx(function() {
    return [Wt$1.createVNode("div", { class: r2.classes.background, style: r2.boundariesStyle }, null, 6), Wt$1.createVNode("div", { class: r2.classes.imageWrapper }, [Wt$1.createVNode("img", { ref: "image", crossorigin: s2.imageAttributes.crossOrigin, src: s2.imageAttributes.src, class: r2.classes.image, style: r2.imageStyle, onMousedown: i2[1] || (i2[1] = Wt$1.withModifiers(function() {
    }, ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), Wt$1.createVNode("div", { class: r2.classes.foreground, style: r2.boundariesStyle }, null, 6), Wt$1.withDirectives((Wt$1.openBlock(), Wt$1.createBlock(Wt$1.resolveDynamicComponent(n2.stencilComponent), Wt$1.mergeProps({ ref: "stencil", image: r2.image, coordinates: s2.coordinates, "stencil-coordinates": r2.stencilCoordinates, transitions: r2.transitionsOptions }, n2.stencilProps, { onResize: r2.onResize, onResizeEnd: r2.onResizeEnd, onMove: r2.onMove, onMoveEnd: r2.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Wt$1.vShow, s2.imageLoaded]]), n2.canvas ? (Wt$1.openBlock(), Wt$1.createBlock("canvas", Vt, null, 512)) : Wt$1.createCommentVNode("", true), n2.canvas ? (Wt$1.openBlock(), Wt$1.createBlock("canvas", _t, null, 512)) : Wt$1.createCommentVNode("", true)];
  }), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const Zt = { __name: "ImageCropper", __ssrInlineRender: true, props: { modelValue: { type: String, required: true, default: "/images/no-thumbnail.jpg" }, aspectRatio: { type: Number, default: 16 / 9 } }, emits: ["update:modelValue", "crop"], setup(i2, { emit: n2 }) {
  const o2 = i2, s2 = Wt$1.ref(null), r2 = Wt$1.ref(o2.aspectRatio), a2 = { width: 400, height: 300 }, h2 = (t2) => {
    console.log("Crop updated:", t2);
  };
  return Wt$1.watch(() => o2.aspectRatio, async (e2) => {
    var i3;
    r2.value = e2, await Wt$1.nextTick(), (null == (i3 = s2.value) ? void 0 : i3.refresh) && s2.value.refresh();
  }), (n3, o3, c2, l2) => {
    o3(`<div${pm.ssrRenderAttrs(Wt$1.mergeProps({ class: "image-cropper-container" }, l2))} data-v-9db941ae>${pm.ssrInterpolate(r2.value)} `), o3(pm.ssrRenderComponent(Wt$1.unref(Ut), { ref_key: "cropperRef", ref: s2, class: "cropper", src: i2.modelValue, "stencil-props": { aspectRatio: r2.value }, "default-boundaries": a2, onChange: h2 }, null, c2)), o3('<div class="controls" data-v-9db941ae><button data-v-9db941ae>16:9</button><button data-v-9db941ae>4:3</button><button data-v-9db941ae>1:1</button><button data-v-9db941ae>3:4</button><button data-v-9db941ae>9:16</button><button data-v-9db941ae>Crop</button></div></div>');
  };
} }, qt = Zt.setup;
Zt.setup = (e2, i2) => {
  const n2 = Wt$1.useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("components/ui/ImageCropper.vue"), qt ? qt(e2, i2) : void 0;
};
const Gt = o$1(Zt, [["__scopeId", "data-v-9db941ae"]]);

export { Gt as default };
//# sourceMappingURL=ImageCropper-D_iia93G.mjs.map

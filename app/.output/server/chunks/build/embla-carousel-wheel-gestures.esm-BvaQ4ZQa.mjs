function e() {
  return e = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var i2 in n2) Object.prototype.hasOwnProperty.call(n2, i2) && (e2[i2] = n2[i2]);
    }
    return e2;
  }, e.apply(this, arguments);
}
function t(e2, t2) {
  if (e2.length !== t2.length) throw new Error("vectors must be same length");
  return e2.map(function(e3, n2) {
    return e3 + t2[n2];
  });
}
function n(e2) {
  return Math.max.apply(Math, e2.map(Math.abs));
}
function i(e2) {
  return Object.freeze(e2), Object.values(e2).forEach(function(e3) {
    null === e3 || "object" != typeof e3 || Object.isFrozen(e3) || i(e3);
  }), e2;
}
var o = [1, 18, 800];
var r = [-1, -1, -1];
var a = function(t2) {
  return e({}, t2, { axisDelta: t2.axisDelta.map(function(e2) {
    return t3 = e2, n2 = -700, i2 = 700, Math.min(Math.max(n2, t3), i2);
    var t3, n2, i2;
  }) });
}, u = i({ preventWheelAction: true, reverseSign: [true, true, false] });
function c(c2) {
  void 0 === c2 && (c2 = {});
  var l2, m2, v2 = function() {
    var e2 = {};
    function t2(t3, n2) {
      e2[t3] = (e2[t3] || []).filter(function(e3) {
        return e3 !== n2;
      });
    }
    return i({ on: function(n2, i2) {
      return e2[n2] = (e2[n2] || []).concat(i2), function() {
        return t2(n2, i2);
      };
    }, off: t2, dispatch: function(t3, n2) {
      t3 in e2 && e2[t3].forEach(function(e3) {
        return e3(n2);
      });
    } });
  }(), f = v2.on, d = v2.off, p = v2.dispatch, h = u, g = { isStarted: false, isStartPublished: false, isMomentum: false, startTime: 0, lastAbsDelta: 1 / 0, axisMovement: [0, 0, 0], axisVelocity: [0, 0, 0], accelerationFactors: [], scrollPoints: [], scrollPointsToMerge: [], willEndTimeout: 400 }, M = false, x = function(e2) {
    Array.isArray(e2) ? e2.forEach(function(e3) {
      return w(e3);
    }) : w(e2);
  }, b = function(t2) {
    return void 0 === t2 && (t2 = {}), Object.values(t2).some(function(e2) {
      return null == e2;
    }) ? (h) : h = i(e({}, u, h, t2));
  }, E = function(n2) {
    var i2 = e({ event: l2, isStart: false, isEnding: false, isMomentumCancel: false, isMomentum: g.isMomentum, axisDelta: [0, 0, 0], axisVelocity: g.axisVelocity, axisMovement: g.axisMovement, get axisMovementProjection() {
      return t(i2.axisMovement, i2.axisVelocity.map(function(e2) {
        return void 0 === t2 && (t2 = 0.996), e2 * t2 / (1 - t2);
        var t2;
      }));
    } }, n2);
    p("wheel", e({}, i2, { previous: m2 })), m2 = i2;
  }, w = function(i2) {
    var u2, c3, m3, v3, f2 = a(function(t2, n2) {
      if (!n2) return t2;
      var i3 = true === n2 ? r : n2.map(function(e2) {
        return e2 ? -1 : 1;
      });
      return e({}, t2, { axisDelta: t2.axisDelta.map(function(e2, t3) {
        return e2 * i3[t3];
      }) });
    }((c3 = (u2 = i2).deltaX * o[u2.deltaMode], m3 = u2.deltaY * o[u2.deltaMode], v3 = (u2.deltaZ || 0) * o[u2.deltaMode], { timeStamp: u2.timeStamp, axisDelta: [c3, m3, v3] }), h.reverseSign)), d2 = f2.axisDelta, p2 = f2.timeStamp, x2 = n(d2);
    i2.preventDefault && function(e2, t2) {
      var n2 = h.preventWheelAction, i3 = t2[0], o2 = t2[1], r2 = t2[2];
      if ("boolean" == typeof n2) return n2;
      switch (n2) {
        case "x":
          return Math.abs(i3) >= e2;
        case "y":
          return Math.abs(o2) >= e2;
        case "z":
          return Math.abs(r2) >= e2;
        default:
          return false;
      }
    }(x2, d2) && i2.preventDefault(), g.isStarted ? g.isMomentum && x2 > Math.max(2, 2 * g.lastAbsDelta) && (j(true), L()) : L(), 0 === x2 && Object.is && Object.is(i2.deltaX, -0) ? M = true : (l2 = i2, g.axisMovement = t(g.axisMovement, d2), g.lastAbsDelta = x2, g.scrollPointsToMerge.push({ axisDelta: d2, timeStamp: p2 }), D(), E({ axisDelta: d2, isStart: !g.isStartPublished }), g.isStartPublished = true, V());
  }, D = function() {
    var e2;
    2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({ axisDeltaSum: g.scrollPointsToMerge.map(function(e3) {
      return e3.axisDelta;
    }).reduce(t), timeStamp: (e2 = g.scrollPointsToMerge.map(function(e3) {
      return e3.timeStamp;
    }), e2.reduce(function(e3, t2) {
      return e3 + t2;
    }) / e2.length) }), y(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || O()) : g.isStartPublished || S();
  }, S = function() {
    var e2;
    g.axisVelocity = (e2 = g.scrollPointsToMerge, e2[e2.length - 1]).axisDelta.map(function(e3) {
      return e3 / g.willEndTimeout;
    });
  }, y = function() {
    var e2 = g.scrollPoints, t2 = e2[0], n2 = e2[1];
    if (n2 && t2) {
      var i2 = t2.timeStamp - n2.timeStamp;
      if (i2 <= 0) ;
      else {
        var o2 = t2.axisDeltaSum.map(function(e3) {
          return e3 / i2;
        }), r2 = o2.map(function(e3, t3) {
          return e3 / (g.axisVelocity[t3] || 1);
        });
        g.axisVelocity = o2, g.accelerationFactors.push(r2), P(i2);
      }
    }
  }, P = function(e2) {
    var t2 = 10 * Math.ceil(e2 / 10) * 1.2;
    g.isMomentum || (t2 = Math.max(100, 2 * t2)), g.willEndTimeout = Math.min(1e3, Math.round(t2));
  }, T = function(e2) {
    return 0 === e2 || e2 <= 0.96 && e2 >= 0.6;
  }, O = function() {
    if (g.accelerationFactors.length >= 5) {
      if (M && (M = false, n(g.axisVelocity) >= 0.2)) return void A();
      var e2 = g.accelerationFactors.slice(-5);
      e2.every(function(e3) {
        var t2 = !!e3.reduce(function(e4, t3) {
          return e4 && e4 < 1 && e4 === t3 ? 1 : 0;
        }), n2 = e3.filter(T).length === e3.length;
        return t2 || n2;
      }) && A(), g.accelerationFactors = e2;
    }
  }, A = function() {
    g.isMomentum = true;
  }, L = function() {
    (g = { isStarted: false, isStartPublished: false, isMomentum: false, startTime: 0, lastAbsDelta: 1 / 0, axisMovement: [0, 0, 0], axisVelocity: [0, 0, 0], accelerationFactors: [], scrollPoints: [], scrollPointsToMerge: [], willEndTimeout: 400 }).isStarted = true, g.startTime = Date.now(), m2 = void 0, M = false;
  }, V = /* @__PURE__ */ function() {
    var e2;
    return function() {
      clearTimeout(e2), e2 = setTimeout(j, g.willEndTimeout);
    };
  }(), j = function(e2) {
    void 0 === e2 && (e2 = false), g.isStarted && (g.isMomentum && e2 ? E({ isEnding: true, isMomentumCancel: true }) : E({ isEnding: true }), g.isMomentum = false, g.isStarted = false);
  }, F = function(e2) {
    var t2 = [], n2 = function(n3) {
      n3.removeEventListener("wheel", e2), t2 = t2.filter(function(e3) {
        return e3 !== n3;
      });
    };
    return i({ observe: function(i2) {
      return i2.addEventListener("wheel", e2, { passive: false }), t2.push(i2), function() {
        return n2(i2);
      };
    }, unobserve: n2, disconnect: function() {
      t2.forEach(n2);
    } });
  }(x), C = F.observe, N = F.unobserve, W = F.disconnect;
  return b(c2), i({ on: f, off: d, observe: C, unobserve: N, disconnect: W, feedWheel: x, updateOptions: b });
}
var l = { active: true, breakpoints: {}, wheelDraggingClass: "is-wheel-dragging", forceWheelAxis: void 0, target: void 0 };
v.globalOptions = void 0;
function v(e2) {
  var t2;
  void 0 === e2 && (e2 = {});
  var n2 = function() {
  };
  return { name: "wheelGestures", options: e2, init: function(i2, o2) {
    var r2, a2, s2 = o2.mergeOptions, u2 = o2.optionsAtMedia, f = s2(l, v.globalOptions), d = s2(f, e2);
    t2 = u2(d);
    var p, h = i2.internalEngine(), g = null != (r2 = t2.target) ? r2 : i2.containerNode().parentNode, M = null != (a2 = t2.forceWheelAxis) ? a2 : h.options.axis, x = c({ preventWheelAction: M, reverseSign: [true, true, false] }), b = x.observe(g), E = x.on("wheel", function(e3) {
      var i3 = e3.axisDelta, o3 = i3[0], r3 = i3[1], a3 = "x" === M ? o3 : r3, s3 = "x" === M ? r3 : o3, u3 = e3.isMomentum && e3.previous && !e3.previous.isMomentum, c2 = e3.isEnding && !e3.isMomentum || u3;
      Math.abs(a3) > Math.abs(s3) && !w && !e3.isMomentum && function(e4) {
        try {
          P(p = new MouseEvent("mousedown", e4.event));
        } catch (i4) {
          return n2();
        }
        w = true, (void 0).documentElement.addEventListener("mousemove", S, true), (void 0).documentElement.addEventListener("mouseup", S, true), void (void 0).documentElement.addEventListener("mousedown", S, true), t2.wheelDraggingClass && g.classList.add(t2.wheelDraggingClass);
      }(e3);
      if (!w) return;
      c2 ? function(e4) {
        w = false, P(y("mouseup", e4)), D(), t2.wheelDraggingClass && g.classList.remove(t2.wheelDraggingClass);
      }(e3) : P(y("mousemove", e3));
    }), w = false;
    function D() {
      (void 0).documentElement.removeEventListener("mousemove", S, true), (void 0).documentElement.removeEventListener("mouseup", S, true), (void 0).documentElement.removeEventListener("mousedown", S, true);
    }
    function S(e3) {
      w && e3.isTrusted && e3.stopImmediatePropagation();
    }
    function y(e3, t3) {
      var n3, i3;
      if (M === h.options.axis) {
        var o3 = t3.axisMovement;
        n3 = o3[0], i3 = o3[1];
      } else {
        var r3 = t3.axisMovement;
        i3 = r3[0], n3 = r3[1];
      }
      if (!h.options.skipSnaps && !h.options.dragFree) {
        var a3 = h.containerRect.width, s3 = h.containerRect.height;
        n3 = n3 < 0 ? Math.max(n3, -a3) : Math.min(n3, a3), i3 = i3 < 0 ? Math.max(i3, -s3) : Math.min(i3, s3);
      }
      return new MouseEvent(e3, { clientX: p.clientX + n3, clientY: p.clientY + i3, screenX: p.screenX + n3, screenY: p.screenY + i3, movementX: n3, movementY: i3, button: 0, bubbles: true, cancelable: true, composed: true });
    }
    function P(e3) {
      i2.containerNode().dispatchEvent(e3);
    }
    n2 = function() {
      b(), E(), D();
    };
  }, destroy: function() {
    return n2();
  } };
}

export { v as WheelGesturesPlugin };
//# sourceMappingURL=embla-carousel-wheel-gestures.esm-BvaQ4ZQa.mjs.map

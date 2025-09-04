import { v as Wt, u as ua, t as Hy, k as km, s as om, P as xm } from './server.mjs';
import { l } from './useLocale-BepRiSpk.mjs';

/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function a(e2, t2) {
  return "function" == typeof e2 ? e2(t2) : e2;
}
function s(e2, t2) {
  return (n2) => {
    t2.setState((t3) => ({ ...t3, [e2]: a(n2, t3[e2]) }));
  };
}
function u(e2) {
  return e2 instanceof Function;
}
function d(e2, t2, n2) {
  let l2, o2 = [];
  return (i2) => {
    let r2;
    n2.key && n2.debug && (r2 = Date.now());
    const a2 = e2(i2);
    if (!(a2.length !== o2.length || a2.some((e3, t3) => o2[t3] !== e3))) return l2;
    let s2;
    if (o2 = a2, n2.key && n2.debug && (s2 = Date.now()), l2 = t2(...a2), null == n2 || null == n2.onChange || n2.onChange(l2), n2.key && n2.debug && null != n2 && n2.debug()) {
      const e3 = Math.round(100 * (Date.now() - r2)) / 100, t3 = Math.round(100 * (Date.now() - s2)) / 100, l3 = t3 / 16, o3 = (e4, t4) => {
        for (e4 = String(e4); e4.length < t4; ) e4 = " " + e4;
        return e4;
      };
      console.info(`%c\u23F1 ${o3(t3, 5)} /${o3(e3, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * l3, 120))}deg 100% 31%);`, null == n2 ? void 0 : n2.key);
    }
    return l2;
  };
}
function g(e2, t2, n2, l2) {
  return { debug: () => {
    var n3;
    return null != (n3 = null == e2 ? void 0 : e2.debugAll) ? n3 : e2[t2];
  }, key: false, onChange: l2 };
}
const c = "debugHeaders";
function p(e2, t2, n2) {
  var l2;
  let o2 = { id: null != (l2 = n2.id) ? l2 : t2.id, column: t2, index: n2.index, isPlaceholder: !!n2.isPlaceholder, placeholderId: n2.placeholderId, depth: n2.depth, subHeaders: [], colSpan: 0, rowSpan: 0, headerGroup: null, getLeafHeaders: () => {
    const e3 = [], t3 = (n3) => {
      n3.subHeaders && n3.subHeaders.length && n3.subHeaders.map(t3), e3.push(n3);
    };
    return t3(o2), e3;
  }, getContext: () => ({ table: e2, header: o2, column: t2 }) };
  return e2._features.forEach((t3) => {
    null == t3.createHeader || t3.createHeader(o2, e2);
  }), o2;
}
const f = { createTable: (e2) => {
  e2.getHeaderGroups = d(() => [e2.getAllColumns(), e2.getVisibleLeafColumns(), e2.getState().columnPinning.left, e2.getState().columnPinning.right], (t2, n2, l2, o2) => {
    var i2, r2;
    const a2 = null != (i2 = null == l2 ? void 0 : l2.map((e3) => n2.find((t3) => t3.id === e3)).filter(Boolean)) ? i2 : [], s2 = null != (r2 = null == o2 ? void 0 : o2.map((e3) => n2.find((t3) => t3.id === e3)).filter(Boolean)) ? r2 : [];
    return m(t2, [...a2, ...n2.filter((e3) => !(null != l2 && l2.includes(e3.id) || null != o2 && o2.includes(e3.id))), ...s2], e2);
  }, g(e2.options, c)), e2.getCenterHeaderGroups = d(() => [e2.getAllColumns(), e2.getVisibleLeafColumns(), e2.getState().columnPinning.left, e2.getState().columnPinning.right], (t2, n2, l2, o2) => m(t2, n2 = n2.filter((e3) => !(null != l2 && l2.includes(e3.id) || null != o2 && o2.includes(e3.id))), e2, "center"), g(e2.options, c)), e2.getLeftHeaderGroups = d(() => [e2.getAllColumns(), e2.getVisibleLeafColumns(), e2.getState().columnPinning.left], (t2, n2, l2) => {
    var o2;
    return m(t2, null != (o2 = null == l2 ? void 0 : l2.map((e3) => n2.find((t3) => t3.id === e3)).filter(Boolean)) ? o2 : [], e2, "left");
  }, g(e2.options, c)), e2.getRightHeaderGroups = d(() => [e2.getAllColumns(), e2.getVisibleLeafColumns(), e2.getState().columnPinning.right], (t2, n2, l2) => {
    var o2;
    return m(t2, null != (o2 = null == l2 ? void 0 : l2.map((e3) => n2.find((t3) => t3.id === e3)).filter(Boolean)) ? o2 : [], e2, "right");
  }, g(e2.options, c)), e2.getFooterGroups = d(() => [e2.getHeaderGroups()], (e3) => [...e3].reverse(), g(e2.options, c)), e2.getLeftFooterGroups = d(() => [e2.getLeftHeaderGroups()], (e3) => [...e3].reverse(), g(e2.options, c)), e2.getCenterFooterGroups = d(() => [e2.getCenterHeaderGroups()], (e3) => [...e3].reverse(), g(e2.options, c)), e2.getRightFooterGroups = d(() => [e2.getRightHeaderGroups()], (e3) => [...e3].reverse(), g(e2.options, c)), e2.getFlatHeaders = d(() => [e2.getHeaderGroups()], (e3) => e3.map((e4) => e4.headers).flat(), g(e2.options, c)), e2.getLeftFlatHeaders = d(() => [e2.getLeftHeaderGroups()], (e3) => e3.map((e4) => e4.headers).flat(), g(e2.options, c)), e2.getCenterFlatHeaders = d(() => [e2.getCenterHeaderGroups()], (e3) => e3.map((e4) => e4.headers).flat(), g(e2.options, c)), e2.getRightFlatHeaders = d(() => [e2.getRightHeaderGroups()], (e3) => e3.map((e4) => e4.headers).flat(), g(e2.options, c)), e2.getCenterLeafHeaders = d(() => [e2.getCenterFlatHeaders()], (e3) => e3.filter((e4) => {
    var t2;
    return !(null != (t2 = e4.subHeaders) && t2.length);
  }), g(e2.options, c)), e2.getLeftLeafHeaders = d(() => [e2.getLeftFlatHeaders()], (e3) => e3.filter((e4) => {
    var t2;
    return !(null != (t2 = e4.subHeaders) && t2.length);
  }), g(e2.options, c)), e2.getRightLeafHeaders = d(() => [e2.getRightFlatHeaders()], (e3) => e3.filter((e4) => {
    var t2;
    return !(null != (t2 = e4.subHeaders) && t2.length);
  }), g(e2.options, c)), e2.getLeafHeaders = d(() => [e2.getLeftHeaderGroups(), e2.getCenterHeaderGroups(), e2.getRightHeaderGroups()], (e3, t2, n2) => {
    var l2, o2, i2, r2, a2, s2;
    return [...null != (l2 = null == (o2 = e3[0]) ? void 0 : o2.headers) ? l2 : [], ...null != (i2 = null == (r2 = t2[0]) ? void 0 : r2.headers) ? i2 : [], ...null != (a2 = null == (s2 = n2[0]) ? void 0 : s2.headers) ? a2 : []].map((e4) => e4.getLeafHeaders()).flat();
  }, g(e2.options, c));
} };
function m(e2, t2, n2, l2) {
  var o2, i2;
  let r2 = 0;
  const a2 = function(e3, t3) {
    void 0 === t3 && (t3 = 1), r2 = Math.max(r2, t3), e3.filter((e4) => e4.getIsVisible()).forEach((e4) => {
      var n3;
      null != (n3 = e4.columns) && n3.length && a2(e4.columns, t3 + 1);
    }, 0);
  };
  a2(e2);
  let s2 = [];
  const u2 = (e3, t3) => {
    const o3 = { depth: t3, id: [l2, `${t3}`].filter(Boolean).join("_"), headers: [] }, i3 = [];
    e3.forEach((e4) => {
      const r3 = [...i3].reverse()[0];
      let a3, s3 = false;
      if (e4.column.depth === o3.depth && e4.column.parent ? a3 = e4.column.parent : (a3 = e4.column, s3 = true), r3 && (null == r3 ? void 0 : r3.column) === a3) r3.subHeaders.push(e4);
      else {
        const o4 = p(n2, a3, { id: [l2, t3, a3.id, null == e4 ? void 0 : e4.id].filter(Boolean).join("_"), isPlaceholder: s3, placeholderId: s3 ? `${i3.filter((e5) => e5.column === a3).length}` : void 0, depth: t3, index: i3.length });
        o4.subHeaders.push(e4), i3.push(o4);
      }
      o3.headers.push(e4), e4.headerGroup = o3;
    }), s2.push(o3), t3 > 0 && u2(i3, t3 - 1);
  }, d2 = t2.map((e3, t3) => p(n2, e3, { depth: r2, index: t3 }));
  u2(d2, r2 - 1), s2.reverse();
  const g2 = (e3) => e3.filter((e4) => e4.column.getIsVisible()).map((e4) => {
    let t3 = 0, n3 = 0, l3 = [0];
    e4.subHeaders && e4.subHeaders.length ? (l3 = [], g2(e4.subHeaders).forEach((e5) => {
      let { colSpan: n4, rowSpan: o3 } = e5;
      t3 += n4, l3.push(o3);
    })) : t3 = 1;
    return n3 += Math.min(...l3), e4.colSpan = t3, e4.rowSpan = n3, { colSpan: t3, rowSpan: n3 };
  });
  return g2(null != (o2 = null == (i2 = s2[0]) ? void 0 : i2.headers) ? o2 : []), s2;
}
const v = (e2, t2, n2, l2, o2, i2, r2) => {
  let a2 = { id: t2, index: l2, original: n2, depth: o2, parentId: r2, _valuesCache: {}, _uniqueValuesCache: {}, getValue: (t3) => {
    if (a2._valuesCache.hasOwnProperty(t3)) return a2._valuesCache[t3];
    const n3 = e2.getColumn(t3);
    return null != n3 && n3.accessorFn ? (a2._valuesCache[t3] = n3.accessorFn(a2.original, l2), a2._valuesCache[t3]) : void 0;
  }, getUniqueValues: (t3) => {
    if (a2._uniqueValuesCache.hasOwnProperty(t3)) return a2._uniqueValuesCache[t3];
    const n3 = e2.getColumn(t3);
    return null != n3 && n3.accessorFn ? n3.columnDef.getUniqueValues ? (a2._uniqueValuesCache[t3] = n3.columnDef.getUniqueValues(a2.original, l2), a2._uniqueValuesCache[t3]) : (a2._uniqueValuesCache[t3] = [a2.getValue(t3)], a2._uniqueValuesCache[t3]) : void 0;
  }, renderValue: (t3) => {
    var n3;
    return null != (n3 = a2.getValue(t3)) ? n3 : e2.options.renderFallbackValue;
  }, subRows: [], getLeafRows: () => function(e3, t3) {
    const n3 = [], l3 = (e4) => {
      e4.forEach((e5) => {
        n3.push(e5);
        const o3 = t3(e5);
        null != o3 && o3.length && l3(o3);
      });
    };
    return l3(e3), n3;
  }(a2.subRows, (e3) => e3.subRows), getParentRow: () => a2.parentId ? e2.getRow(a2.parentId, true) : void 0, getParentRows: () => {
    let e3 = [], t3 = a2;
    for (; ; ) {
      const n3 = t3.getParentRow();
      if (!n3) break;
      e3.push(n3), t3 = n3;
    }
    return e3.reverse();
  }, getAllCells: d(() => [e2.getAllLeafColumns()], (t3) => t3.map((t4) => function(e3, t5, n3, l3) {
    const o3 = { id: `${t5.id}_${n3.id}`, row: t5, column: n3, getValue: () => t5.getValue(l3), renderValue: () => {
      var t6;
      return null != (t6 = o3.getValue()) ? t6 : e3.options.renderFallbackValue;
    }, getContext: d(() => [e3, n3, t5, o3], (e4, t6, n4, l4) => ({ table: e4, column: t6, row: n4, cell: l4, getValue: l4.getValue, renderValue: l4.renderValue }), g(e3.options, "debugCells")) };
    return e3._features.forEach((l4) => {
      null == l4.createCell || l4.createCell(o3, n3, t5, e3);
    }, {}), o3;
  }(e2, a2, t4, t4.id)), g(e2.options, "debugRows")), _getAllCellsByColumnId: d(() => [a2.getAllCells()], (e3) => e3.reduce((e4, t3) => (e4[t3.column.id] = t3, e4), {}), g(e2.options, "debugRows")) };
  for (let s2 = 0; s2 < e2._features.length; s2++) {
    const t3 = e2._features[s2];
    null == t3 || null == t3.createRow || t3.createRow(a2, e2);
  }
  return a2;
}, h = { createColumn: (e2, t2) => {
  e2._getFacetedRowModel = t2.options.getFacetedRowModel && t2.options.getFacetedRowModel(t2, e2.id), e2.getFacetedRowModel = () => e2._getFacetedRowModel ? e2._getFacetedRowModel() : t2.getPreFilteredRowModel(), e2._getFacetedUniqueValues = t2.options.getFacetedUniqueValues && t2.options.getFacetedUniqueValues(t2, e2.id), e2.getFacetedUniqueValues = () => e2._getFacetedUniqueValues ? e2._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e2._getFacetedMinMaxValues = t2.options.getFacetedMinMaxValues && t2.options.getFacetedMinMaxValues(t2, e2.id), e2.getFacetedMinMaxValues = () => {
    if (e2._getFacetedMinMaxValues) return e2._getFacetedMinMaxValues();
  };
} }, w = (e2, t2, n2) => {
  var l2, o2;
  const i2 = null == n2 || null == (l2 = n2.toString()) ? void 0 : l2.toLowerCase();
  return Boolean(null == (o2 = e2.getValue(t2)) || null == (o2 = o2.toString()) || null == (o2 = o2.toLowerCase()) ? void 0 : o2.includes(i2));
};
w.autoRemove = (e2) => V(e2);
const b = (e2, t2, n2) => {
  var l2;
  return Boolean(null == (l2 = e2.getValue(t2)) || null == (l2 = l2.toString()) ? void 0 : l2.includes(n2));
};
b.autoRemove = (e2) => V(e2);
const C = (e2, t2, n2) => {
  var l2;
  return (null == (l2 = e2.getValue(t2)) || null == (l2 = l2.toString()) ? void 0 : l2.toLowerCase()) === (null == n2 ? void 0 : n2.toLowerCase());
};
C.autoRemove = (e2) => V(e2);
const S = (e2, t2, n2) => {
  var l2;
  return null == (l2 = e2.getValue(t2)) ? void 0 : l2.includes(n2);
};
S.autoRemove = (e2) => V(e2);
const R = (e2, t2, n2) => !n2.some((n3) => {
  var l2;
  return !(null != (l2 = e2.getValue(t2)) && l2.includes(n3));
});
R.autoRemove = (e2) => V(e2) || !(null != e2 && e2.length);
const y = (e2, t2, n2) => n2.some((n3) => {
  var l2;
  return null == (l2 = e2.getValue(t2)) ? void 0 : l2.includes(n3);
});
y.autoRemove = (e2) => V(e2) || !(null != e2 && e2.length);
const F = (e2, t2, n2) => e2.getValue(t2) === n2;
F.autoRemove = (e2) => V(e2);
const x = (e2, t2, n2) => e2.getValue(t2) == n2;
x.autoRemove = (e2) => V(e2);
const M = (e2, t2, n2) => {
  let [l2, o2] = n2;
  const i2 = e2.getValue(t2);
  return i2 >= l2 && i2 <= o2;
};
M.resolveFilterValue = (e2) => {
  let [t2, n2] = e2, l2 = "number" != typeof t2 ? parseFloat(t2) : t2, o2 = "number" != typeof n2 ? parseFloat(n2) : n2, i2 = null === t2 || Number.isNaN(l2) ? -1 / 0 : l2, r2 = null === n2 || Number.isNaN(o2) ? 1 / 0 : o2;
  if (i2 > r2) {
    const e3 = i2;
    i2 = r2, r2 = e3;
  }
  return [i2, r2];
}, M.autoRemove = (e2) => V(e2) || V(e2[0]) && V(e2[1]);
const P = { includesString: w, includesStringSensitive: b, equalsString: C, arrIncludes: S, arrIncludesAll: R, arrIncludesSome: y, equals: F, weakEquals: x, inNumberRange: M };
function V(e2) {
  return null == e2 || "" === e2;
}
const I = { getDefaultColumnDef: () => ({ filterFn: "auto" }), getInitialState: (e2) => ({ columnFilters: [], ...e2 }), getDefaultOptions: (e2) => ({ onColumnFiltersChange: s("columnFilters", e2), filterFromLeafRows: false, maxLeafRowFilterDepth: 100 }), createColumn: (e2, t2) => {
  e2.getAutoFilterFn = () => {
    const n2 = t2.getCoreRowModel().flatRows[0], l2 = null == n2 ? void 0 : n2.getValue(e2.id);
    return "string" == typeof l2 ? P.includesString : "number" == typeof l2 ? P.inNumberRange : "boolean" == typeof l2 || null !== l2 && "object" == typeof l2 ? P.equals : Array.isArray(l2) ? P.arrIncludes : P.weakEquals;
  }, e2.getFilterFn = () => {
    var n2, l2;
    return u(e2.columnDef.filterFn) ? e2.columnDef.filterFn : "auto" === e2.columnDef.filterFn ? e2.getAutoFilterFn() : null != (n2 = null == (l2 = t2.options.filterFns) ? void 0 : l2[e2.columnDef.filterFn]) ? n2 : P[e2.columnDef.filterFn];
  }, e2.getCanFilter = () => {
    var n2, l2, o2;
    return (null == (n2 = e2.columnDef.enableColumnFilter) || n2) && (null == (l2 = t2.options.enableColumnFilters) || l2) && (null == (o2 = t2.options.enableFilters) || o2) && !!e2.accessorFn;
  }, e2.getIsFiltered = () => e2.getFilterIndex() > -1, e2.getFilterValue = () => {
    var n2;
    return null == (n2 = t2.getState().columnFilters) || null == (n2 = n2.find((t3) => t3.id === e2.id)) ? void 0 : n2.value;
  }, e2.getFilterIndex = () => {
    var n2, l2;
    return null != (n2 = null == (l2 = t2.getState().columnFilters) ? void 0 : l2.findIndex((t3) => t3.id === e2.id)) ? n2 : -1;
  }, e2.setFilterValue = (n2) => {
    t2.setColumnFilters((t3) => {
      const l2 = e2.getFilterFn(), o2 = null == t3 ? void 0 : t3.find((t4) => t4.id === e2.id), i2 = a(n2, o2 ? o2.value : void 0);
      var r2;
      if (_(l2, i2, e2)) return null != (r2 = null == t3 ? void 0 : t3.filter((t4) => t4.id !== e2.id)) ? r2 : [];
      const s2 = { id: e2.id, value: i2 };
      var u2;
      return o2 ? null != (u2 = null == t3 ? void 0 : t3.map((t4) => t4.id === e2.id ? s2 : t4)) ? u2 : [] : null != t3 && t3.length ? [...t3, s2] : [s2];
    });
  };
}, createRow: (e2, t2) => {
  e2.columnFilters = {}, e2.columnFiltersMeta = {};
}, createTable: (e2) => {
  e2.setColumnFilters = (t2) => {
    const n2 = e2.getAllLeafColumns();
    null == e2.options.onColumnFiltersChange || e2.options.onColumnFiltersChange((e3) => {
      var l2;
      return null == (l2 = a(t2, e3)) ? void 0 : l2.filter((e4) => {
        const t3 = n2.find((t4) => t4.id === e4.id);
        if (t3) {
          if (_(t3.getFilterFn(), e4.value, t3)) return false;
        }
        return true;
      });
    });
  }, e2.resetColumnFilters = (t2) => {
    var n2, l2;
    e2.setColumnFilters(t2 ? [] : null != (n2 = null == (l2 = e2.initialState) ? void 0 : l2.columnFilters) ? n2 : []);
  }, e2.getPreFilteredRowModel = () => e2.getCoreRowModel(), e2.getFilteredRowModel = () => (!e2._getFilteredRowModel && e2.options.getFilteredRowModel && (e2._getFilteredRowModel = e2.options.getFilteredRowModel(e2)), e2.options.manualFiltering || !e2._getFilteredRowModel ? e2.getPreFilteredRowModel() : e2._getFilteredRowModel());
} };
function _(e2, t2, n2) {
  return !(!e2 || !e2.autoRemove) && e2.autoRemove(t2, n2) || void 0 === t2 || "string" == typeof t2 && !t2;
}
const O = { sum: (e2, t2, n2) => n2.reduce((t3, n3) => {
  const l2 = n3.getValue(e2);
  return t3 + ("number" == typeof l2 ? l2 : 0);
}, 0), min: (e2, t2, n2) => {
  let l2;
  return n2.forEach((t3) => {
    const n3 = t3.getValue(e2);
    null != n3 && (l2 > n3 || void 0 === l2 && n3 >= n3) && (l2 = n3);
  }), l2;
}, max: (e2, t2, n2) => {
  let l2;
  return n2.forEach((t3) => {
    const n3 = t3.getValue(e2);
    null != n3 && (l2 < n3 || void 0 === l2 && n3 >= n3) && (l2 = n3);
  }), l2;
}, extent: (e2, t2, n2) => {
  let l2, o2;
  return n2.forEach((t3) => {
    const n3 = t3.getValue(e2);
    null != n3 && (void 0 === l2 ? n3 >= n3 && (l2 = o2 = n3) : (l2 > n3 && (l2 = n3), o2 < n3 && (o2 = n3)));
  }), [l2, o2];
}, mean: (e2, t2) => {
  let n2 = 0, l2 = 0;
  if (t2.forEach((t3) => {
    let o2 = t3.getValue(e2);
    null != o2 && (o2 = +o2) >= o2 && (++n2, l2 += o2);
  }), n2) return l2 / n2;
}, median: (e2, t2) => {
  if (!t2.length) return;
  const n2 = t2.map((t3) => t3.getValue(e2));
  if (l2 = n2, !Array.isArray(l2) || !l2.every((e3) => "number" == typeof e3)) return;
  var l2;
  if (1 === n2.length) return n2[0];
  const o2 = Math.floor(n2.length / 2), i2 = n2.sort((e3, t3) => e3 - t3);
  return n2.length % 2 != 0 ? i2[o2] : (i2[o2 - 1] + i2[o2]) / 2;
}, unique: (e2, t2) => Array.from(new Set(t2.map((t3) => t3.getValue(e2))).values()), uniqueCount: (e2, t2) => new Set(t2.map((t3) => t3.getValue(e2))).size, count: (e2, t2) => t2.length }, A = { getDefaultColumnDef: () => ({ aggregatedCell: (e2) => {
  var t2, n2;
  return null != (t2 = null == (n2 = e2.getValue()) || null == n2.toString ? void 0 : n2.toString()) ? t2 : null;
}, aggregationFn: "auto" }), getInitialState: (e2) => ({ grouping: [], ...e2 }), getDefaultOptions: (e2) => ({ onGroupingChange: s("grouping", e2), groupedColumnMode: "reorder" }), createColumn: (e2, t2) => {
  e2.toggleGrouping = () => {
    t2.setGrouping((t3) => null != t3 && t3.includes(e2.id) ? t3.filter((t4) => t4 !== e2.id) : [...null != t3 ? t3 : [], e2.id]);
  }, e2.getCanGroup = () => {
    var n2, l2;
    return (null == (n2 = e2.columnDef.enableGrouping) || n2) && (null == (l2 = t2.options.enableGrouping) || l2) && (!!e2.accessorFn || !!e2.columnDef.getGroupingValue);
  }, e2.getIsGrouped = () => {
    var n2;
    return null == (n2 = t2.getState().grouping) ? void 0 : n2.includes(e2.id);
  }, e2.getGroupedIndex = () => {
    var n2;
    return null == (n2 = t2.getState().grouping) ? void 0 : n2.indexOf(e2.id);
  }, e2.getToggleGroupingHandler = () => {
    const t3 = e2.getCanGroup();
    return () => {
      t3 && e2.toggleGrouping();
    };
  }, e2.getAutoAggregationFn = () => {
    const n2 = t2.getCoreRowModel().flatRows[0], l2 = null == n2 ? void 0 : n2.getValue(e2.id);
    return "number" == typeof l2 ? O.sum : "[object Date]" === Object.prototype.toString.call(l2) ? O.extent : void 0;
  }, e2.getAggregationFn = () => {
    var n2, l2;
    if (!e2) throw new Error();
    return u(e2.columnDef.aggregationFn) ? e2.columnDef.aggregationFn : "auto" === e2.columnDef.aggregationFn ? e2.getAutoAggregationFn() : null != (n2 = null == (l2 = t2.options.aggregationFns) ? void 0 : l2[e2.columnDef.aggregationFn]) ? n2 : O[e2.columnDef.aggregationFn];
  };
}, createTable: (e2) => {
  e2.setGrouping = (t2) => null == e2.options.onGroupingChange ? void 0 : e2.options.onGroupingChange(t2), e2.resetGrouping = (t2) => {
    var n2, l2;
    e2.setGrouping(t2 ? [] : null != (n2 = null == (l2 = e2.initialState) ? void 0 : l2.grouping) ? n2 : []);
  }, e2.getPreGroupedRowModel = () => e2.getFilteredRowModel(), e2.getGroupedRowModel = () => (!e2._getGroupedRowModel && e2.options.getGroupedRowModel && (e2._getGroupedRowModel = e2.options.getGroupedRowModel(e2)), e2.options.manualGrouping || !e2._getGroupedRowModel ? e2.getPreGroupedRowModel() : e2._getGroupedRowModel());
}, createRow: (e2, t2) => {
  e2.getIsGrouped = () => !!e2.groupingColumnId, e2.getGroupingValue = (n2) => {
    if (e2._groupingValuesCache.hasOwnProperty(n2)) return e2._groupingValuesCache[n2];
    const l2 = t2.getColumn(n2);
    return null != l2 && l2.columnDef.getGroupingValue ? (e2._groupingValuesCache[n2] = l2.columnDef.getGroupingValue(e2.original), e2._groupingValuesCache[n2]) : e2.getValue(n2);
  }, e2._groupingValuesCache = {};
}, createCell: (e2, t2, n2, l2) => {
  e2.getIsGrouped = () => t2.getIsGrouped() && t2.id === n2.groupingColumnId, e2.getIsPlaceholder = () => !e2.getIsGrouped() && t2.getIsGrouped(), e2.getIsAggregated = () => {
    var t3;
    return !e2.getIsGrouped() && !e2.getIsPlaceholder() && !(null == (t3 = n2.subRows) || !t3.length);
  };
} };
const E = { getInitialState: (e2) => ({ columnOrder: [], ...e2 }), getDefaultOptions: (e2) => ({ onColumnOrderChange: s("columnOrder", e2) }), createColumn: (e2, t2) => {
  e2.getIndex = d((e3) => [B(t2, e3)], (t3) => t3.findIndex((t4) => t4.id === e2.id), g(t2.options, "debugColumns")), e2.getIsFirstColumn = (n2) => {
    var l2;
    return (null == (l2 = B(t2, n2)[0]) ? void 0 : l2.id) === e2.id;
  }, e2.getIsLastColumn = (n2) => {
    var l2;
    const o2 = B(t2, n2);
    return (null == (l2 = o2[o2.length - 1]) ? void 0 : l2.id) === e2.id;
  };
}, createTable: (e2) => {
  e2.setColumnOrder = (t2) => null == e2.options.onColumnOrderChange ? void 0 : e2.options.onColumnOrderChange(t2), e2.resetColumnOrder = (t2) => {
    var n2;
    e2.setColumnOrder(t2 ? [] : null != (n2 = e2.initialState.columnOrder) ? n2 : []);
  }, e2._getOrderColumnsFn = d(() => [e2.getState().columnOrder, e2.getState().grouping, e2.options.groupedColumnMode], (e3, t2, n2) => (l2) => {
    let o2 = [];
    if (null != e3 && e3.length) {
      const t3 = [...e3], n3 = [...l2];
      for (; n3.length && t3.length; ) {
        const e4 = t3.shift(), l3 = n3.findIndex((t4) => t4.id === e4);
        l3 > -1 && o2.push(n3.splice(l3, 1)[0]);
      }
      o2 = [...o2, ...n3];
    } else o2 = l2;
    return function(e4, t3, n3) {
      if (null == t3 || !t3.length || !n3) return e4;
      const l3 = e4.filter((e5) => !t3.includes(e5.id));
      return "remove" === n3 ? l3 : [...t3.map((t4) => e4.find((e5) => e5.id === t4)).filter(Boolean), ...l3];
    }(o2, t2, n2);
  }, g(e2.options, "debugTable"));
} }, D = { getInitialState: (e2) => ({ columnPinning: { left: [], right: [] }, ...e2 }), getDefaultOptions: (e2) => ({ onColumnPinningChange: s("columnPinning", e2) }), createColumn: (e2, t2) => {
  e2.pin = (n2) => {
    const l2 = e2.getLeafColumns().map((e3) => e3.id).filter(Boolean);
    t2.setColumnPinning((e3) => {
      var t3, o2, i2, r2, a2, s2;
      return "right" === n2 ? { left: (null != (i2 = null == e3 ? void 0 : e3.left) ? i2 : []).filter((e4) => !(null != l2 && l2.includes(e4))), right: [...(null != (r2 = null == e3 ? void 0 : e3.right) ? r2 : []).filter((e4) => !(null != l2 && l2.includes(e4))), ...l2] } : "left" === n2 ? { left: [...(null != (a2 = null == e3 ? void 0 : e3.left) ? a2 : []).filter((e4) => !(null != l2 && l2.includes(e4))), ...l2], right: (null != (s2 = null == e3 ? void 0 : e3.right) ? s2 : []).filter((e4) => !(null != l2 && l2.includes(e4))) } : { left: (null != (t3 = null == e3 ? void 0 : e3.left) ? t3 : []).filter((e4) => !(null != l2 && l2.includes(e4))), right: (null != (o2 = null == e3 ? void 0 : e3.right) ? o2 : []).filter((e4) => !(null != l2 && l2.includes(e4))) };
    });
  }, e2.getCanPin = () => e2.getLeafColumns().some((e3) => {
    var n2, l2, o2;
    return (null == (n2 = e3.columnDef.enablePinning) || n2) && (null == (l2 = null != (o2 = t2.options.enableColumnPinning) ? o2 : t2.options.enablePinning) || l2);
  }), e2.getIsPinned = () => {
    const n2 = e2.getLeafColumns().map((e3) => e3.id), { left: l2, right: o2 } = t2.getState().columnPinning, i2 = n2.some((e3) => null == l2 ? void 0 : l2.includes(e3)), r2 = n2.some((e3) => null == o2 ? void 0 : o2.includes(e3));
    return i2 ? "left" : !!r2 && "right";
  }, e2.getPinnedIndex = () => {
    var n2, l2;
    const o2 = e2.getIsPinned();
    return o2 ? null != (n2 = null == (l2 = t2.getState().columnPinning) || null == (l2 = l2[o2]) ? void 0 : l2.indexOf(e2.id)) ? n2 : -1 : 0;
  };
}, createRow: (e2, t2) => {
  e2.getCenterVisibleCells = d(() => [e2._getAllVisibleCells(), t2.getState().columnPinning.left, t2.getState().columnPinning.right], (e3, t3, n2) => {
    const l2 = [...null != t3 ? t3 : [], ...null != n2 ? n2 : []];
    return e3.filter((e4) => !l2.includes(e4.column.id));
  }, g(t2.options, "debugRows")), e2.getLeftVisibleCells = d(() => [e2._getAllVisibleCells(), t2.getState().columnPinning.left], (e3, t3) => (null != t3 ? t3 : []).map((t4) => e3.find((e4) => e4.column.id === t4)).filter(Boolean).map((e4) => ({ ...e4, position: "left" })), g(t2.options, "debugRows")), e2.getRightVisibleCells = d(() => [e2._getAllVisibleCells(), t2.getState().columnPinning.right], (e3, t3) => (null != t3 ? t3 : []).map((t4) => e3.find((e4) => e4.column.id === t4)).filter(Boolean).map((e4) => ({ ...e4, position: "right" })), g(t2.options, "debugRows"));
}, createTable: (e2) => {
  e2.setColumnPinning = (t2) => null == e2.options.onColumnPinningChange ? void 0 : e2.options.onColumnPinningChange(t2), e2.resetColumnPinning = (t2) => {
    var n2, l2;
    return e2.setColumnPinning(t2 ? { left: [], right: [] } : null != (n2 = null == (l2 = e2.initialState) ? void 0 : l2.columnPinning) ? n2 : { left: [], right: [] });
  }, e2.getIsSomeColumnsPinned = (t2) => {
    var n2;
    const l2 = e2.getState().columnPinning;
    var o2, i2;
    return t2 ? Boolean(null == (n2 = l2[t2]) ? void 0 : n2.length) : Boolean((null == (o2 = l2.left) ? void 0 : o2.length) || (null == (i2 = l2.right) ? void 0 : i2.length));
  }, e2.getLeftLeafColumns = d(() => [e2.getAllLeafColumns(), e2.getState().columnPinning.left], (e3, t2) => (null != t2 ? t2 : []).map((t3) => e3.find((e4) => e4.id === t3)).filter(Boolean), g(e2.options, "debugColumns")), e2.getRightLeafColumns = d(() => [e2.getAllLeafColumns(), e2.getState().columnPinning.right], (e3, t2) => (null != t2 ? t2 : []).map((t3) => e3.find((e4) => e4.id === t3)).filter(Boolean), g(e2.options, "debugColumns")), e2.getCenterLeafColumns = d(() => [e2.getAllLeafColumns(), e2.getState().columnPinning.left, e2.getState().columnPinning.right], (e3, t2, n2) => {
    const l2 = [...null != t2 ? t2 : [], ...null != n2 ? n2 : []];
    return e3.filter((e4) => !l2.includes(e4.id));
  }, g(e2.options, "debugColumns"));
} };
const z = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER }, L = { getDefaultColumnDef: () => z, getInitialState: (e2) => ({ columnSizing: {}, columnSizingInfo: { startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] }, ...e2 }), getDefaultOptions: (e2) => ({ columnResizeMode: "onEnd", columnResizeDirection: "ltr", onColumnSizingChange: s("columnSizing", e2), onColumnSizingInfoChange: s("columnSizingInfo", e2) }), createColumn: (e2, t2) => {
  e2.getSize = () => {
    var n2, l2, o2;
    const i2 = t2.getState().columnSizing[e2.id];
    return Math.min(Math.max(null != (n2 = e2.columnDef.minSize) ? n2 : z.minSize, null != (l2 = null != i2 ? i2 : e2.columnDef.size) ? l2 : z.size), null != (o2 = e2.columnDef.maxSize) ? o2 : z.maxSize);
  }, e2.getStart = d((e3) => [e3, B(t2, e3), t2.getState().columnSizing], (t3, n2) => n2.slice(0, e2.getIndex(t3)).reduce((e3, t4) => e3 + t4.getSize(), 0), g(t2.options, "debugColumns")), e2.getAfter = d((e3) => [e3, B(t2, e3), t2.getState().columnSizing], (t3, n2) => n2.slice(e2.getIndex(t3) + 1).reduce((e3, t4) => e3 + t4.getSize(), 0), g(t2.options, "debugColumns")), e2.resetSize = () => {
    t2.setColumnSizing((t3) => {
      let { [e2.id]: n2, ...l2 } = t3;
      return l2;
    });
  }, e2.getCanResize = () => {
    var n2, l2;
    return (null == (n2 = e2.columnDef.enableResizing) || n2) && (null == (l2 = t2.options.enableColumnResizing) || l2);
  }, e2.getIsResizing = () => t2.getState().columnSizingInfo.isResizingColumn === e2.id;
}, createHeader: (e2, t2) => {
  e2.getSize = () => {
    let t3 = 0;
    const n2 = (e3) => {
      var l2;
      e3.subHeaders.length ? e3.subHeaders.forEach(n2) : t3 += null != (l2 = e3.column.getSize()) ? l2 : 0;
    };
    return n2(e2), t3;
  }, e2.getStart = () => {
    if (e2.index > 0) {
      const t3 = e2.headerGroup.headers[e2.index - 1];
      return t3.getStart() + t3.getSize();
    }
    return 0;
  }, e2.getResizeHandler = (n2) => {
    const l2 = t2.getColumn(e2.column.id), o2 = null == l2 ? void 0 : l2.getCanResize();
    return (i2) => {
      if (!l2 || !o2) return;
      if (null == i2.persist || i2.persist(), H(i2) && i2.touches && i2.touches.length > 1) return;
      const r2 = e2.getSize(), a2 = e2 ? e2.getLeafHeaders().map((e3) => [e3.column.id, e3.column.getSize()]) : [[l2.id, l2.getSize()]], s2 = H(i2) ? Math.round(i2.touches[0].clientX) : i2.clientX, u2 = {}, d2 = (e3, n3) => {
        "number" == typeof n3 && (t2.setColumnSizingInfo((e4) => {
          var l3, o3;
          const i3 = "rtl" === t2.options.columnResizeDirection ? -1 : 1, r3 = (n3 - (null != (l3 = null == e4 ? void 0 : e4.startOffset) ? l3 : 0)) * i3, a3 = Math.max(r3 / (null != (o3 = null == e4 ? void 0 : e4.startSize) ? o3 : 0), -0.999999);
          return e4.columnSizingStart.forEach((e5) => {
            let [t3, n4] = e5;
            u2[t3] = Math.round(100 * Math.max(n4 + n4 * a3, 0)) / 100;
          }), { ...e4, deltaOffset: r3, deltaPercentage: a3 };
        }), "onChange" !== t2.options.columnResizeMode && "end" !== e3 || t2.setColumnSizing((e4) => ({ ...e4, ...u2 })));
      }, g2 = (e3) => d2("move", e3), c2 = (e3) => {
        d2("end", e3), t2.setColumnSizingInfo((e4) => ({ ...e4, isResizingColumn: false, startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, columnSizingStart: [] }));
      }, p2 = n2 || null;
      const f2 = { moveHandler: (e3) => g2(e3.clientX), upHandler: (e3) => {
        null == p2 || p2.removeEventListener("mousemove", f2.moveHandler), null == p2 || p2.removeEventListener("mouseup", f2.upHandler), c2(e3.clientX);
      } }, m2 = { moveHandler: (e3) => (e3.cancelable && (e3.preventDefault(), e3.stopPropagation()), g2(e3.touches[0].clientX), false), upHandler: (e3) => {
        var t3;
        null == p2 || p2.removeEventListener("touchmove", m2.moveHandler), null == p2 || p2.removeEventListener("touchend", m2.upHandler), e3.cancelable && (e3.preventDefault(), e3.stopPropagation()), c2(null == (t3 = e3.touches[0]) ? void 0 : t3.clientX);
      } }, v2 = !!function() {
        if ("boolean" == typeof G) return G;
        let e3 = false;
        try {
          const t3 = { get passive() {
            return e3 = true, false;
          } }, n3 = () => {
          };
          (void 0).addEventListener("test", n3, t3), (void 0).removeEventListener("test", n3);
        } catch (t3) {
          e3 = false;
        }
        return G = e3, G;
      }() && { passive: false };
      H(i2) ? (null == p2 || p2.addEventListener("touchmove", m2.moveHandler, v2), null == p2 || p2.addEventListener("touchend", m2.upHandler, v2)) : (null == p2 || p2.addEventListener("mousemove", f2.moveHandler, v2), null == p2 || p2.addEventListener("mouseup", f2.upHandler, v2)), t2.setColumnSizingInfo((e3) => ({ ...e3, startOffset: s2, startSize: r2, deltaOffset: 0, deltaPercentage: 0, columnSizingStart: a2, isResizingColumn: l2.id }));
    };
  };
}, createTable: (e2) => {
  e2.setColumnSizing = (t2) => null == e2.options.onColumnSizingChange ? void 0 : e2.options.onColumnSizingChange(t2), e2.setColumnSizingInfo = (t2) => null == e2.options.onColumnSizingInfoChange ? void 0 : e2.options.onColumnSizingInfoChange(t2), e2.resetColumnSizing = (t2) => {
    var n2;
    e2.setColumnSizing(t2 ? {} : null != (n2 = e2.initialState.columnSizing) ? n2 : {});
  }, e2.resetHeaderSizeInfo = (t2) => {
    var n2;
    e2.setColumnSizingInfo(t2 ? { startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] } : null != (n2 = e2.initialState.columnSizingInfo) ? n2 : { startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] });
  }, e2.getTotalSize = () => {
    var t2, n2;
    return null != (t2 = null == (n2 = e2.getHeaderGroups()[0]) ? void 0 : n2.headers.reduce((e3, t3) => e3 + t3.getSize(), 0)) ? t2 : 0;
  }, e2.getLeftTotalSize = () => {
    var t2, n2;
    return null != (t2 = null == (n2 = e2.getLeftHeaderGroups()[0]) ? void 0 : n2.headers.reduce((e3, t3) => e3 + t3.getSize(), 0)) ? t2 : 0;
  }, e2.getCenterTotalSize = () => {
    var t2, n2;
    return null != (t2 = null == (n2 = e2.getCenterHeaderGroups()[0]) ? void 0 : n2.headers.reduce((e3, t3) => e3 + t3.getSize(), 0)) ? t2 : 0;
  }, e2.getRightTotalSize = () => {
    var t2, n2;
    return null != (t2 = null == (n2 = e2.getRightHeaderGroups()[0]) ? void 0 : n2.headers.reduce((e3, t3) => e3 + t3.getSize(), 0)) ? t2 : 0;
  };
} };
let G = null;
function H(e2) {
  return "touchstart" === e2.type;
}
function B(e2, t2) {
  return t2 ? "center" === t2 ? e2.getCenterVisibleLeafColumns() : "left" === t2 ? e2.getLeftVisibleLeafColumns() : e2.getRightVisibleLeafColumns() : e2.getVisibleLeafColumns();
}
const k = { getInitialState: (e2) => ({ rowSelection: {}, ...e2 }), getDefaultOptions: (e2) => ({ onRowSelectionChange: s("rowSelection", e2), enableRowSelection: true, enableMultiRowSelection: true, enableSubRowSelection: true }), createTable: (e2) => {
  e2.setRowSelection = (t2) => null == e2.options.onRowSelectionChange ? void 0 : e2.options.onRowSelectionChange(t2), e2.resetRowSelection = (t2) => {
    var n2;
    return e2.setRowSelection(t2 ? {} : null != (n2 = e2.initialState.rowSelection) ? n2 : {});
  }, e2.toggleAllRowsSelected = (t2) => {
    e2.setRowSelection((n2) => {
      t2 = void 0 !== t2 ? t2 : !e2.getIsAllRowsSelected();
      const l2 = { ...n2 }, o2 = e2.getPreGroupedRowModel().flatRows;
      return t2 ? o2.forEach((e3) => {
        e3.getCanSelect() && (l2[e3.id] = true);
      }) : o2.forEach((e3) => {
        delete l2[e3.id];
      }), l2;
    });
  }, e2.toggleAllPageRowsSelected = (t2) => e2.setRowSelection((n2) => {
    const l2 = void 0 !== t2 ? t2 : !e2.getIsAllPageRowsSelected(), o2 = { ...n2 };
    return e2.getRowModel().rows.forEach((t3) => {
      q(o2, t3.id, l2, true, e2);
    }), o2;
  }), e2.getPreSelectedRowModel = () => e2.getCoreRowModel(), e2.getSelectedRowModel = d(() => [e2.getState().rowSelection, e2.getCoreRowModel()], (t2, n2) => Object.keys(t2).length ? $(e2, n2) : { rows: [], flatRows: [], rowsById: {} }, g(e2.options, "debugTable")), e2.getFilteredSelectedRowModel = d(() => [e2.getState().rowSelection, e2.getFilteredRowModel()], (t2, n2) => Object.keys(t2).length ? $(e2, n2) : { rows: [], flatRows: [], rowsById: {} }, g(e2.options, "debugTable")), e2.getGroupedSelectedRowModel = d(() => [e2.getState().rowSelection, e2.getSortedRowModel()], (t2, n2) => Object.keys(t2).length ? $(e2, n2) : { rows: [], flatRows: [], rowsById: {} }, g(e2.options, "debugTable")), e2.getIsAllRowsSelected = () => {
    const t2 = e2.getFilteredRowModel().flatRows, { rowSelection: n2 } = e2.getState();
    let l2 = Boolean(t2.length && Object.keys(n2).length);
    return l2 && t2.some((e3) => e3.getCanSelect() && !n2[e3.id]) && (l2 = false), l2;
  }, e2.getIsAllPageRowsSelected = () => {
    const t2 = e2.getPaginationRowModel().flatRows.filter((e3) => e3.getCanSelect()), { rowSelection: n2 } = e2.getState();
    let l2 = !!t2.length;
    return l2 && t2.some((e3) => !n2[e3.id]) && (l2 = false), l2;
  }, e2.getIsSomeRowsSelected = () => {
    var t2;
    const n2 = Object.keys(null != (t2 = e2.getState().rowSelection) ? t2 : {}).length;
    return n2 > 0 && n2 < e2.getFilteredRowModel().flatRows.length;
  }, e2.getIsSomePageRowsSelected = () => {
    const t2 = e2.getPaginationRowModel().flatRows;
    return !e2.getIsAllPageRowsSelected() && t2.filter((e3) => e3.getCanSelect()).some((e3) => e3.getIsSelected() || e3.getIsSomeSelected());
  }, e2.getToggleAllRowsSelectedHandler = () => (t2) => {
    e2.toggleAllRowsSelected(t2.target.checked);
  }, e2.getToggleAllPageRowsSelectedHandler = () => (t2) => {
    e2.toggleAllPageRowsSelected(t2.target.checked);
  };
}, createRow: (e2, t2) => {
  e2.toggleSelected = (n2, l2) => {
    const o2 = e2.getIsSelected();
    t2.setRowSelection((i2) => {
      var r2;
      if (n2 = void 0 !== n2 ? n2 : !o2, e2.getCanSelect() && o2 === n2) return i2;
      const a2 = { ...i2 };
      return q(a2, e2.id, n2, null == (r2 = null == l2 ? void 0 : l2.selectChildren) || r2, t2), a2;
    });
  }, e2.getIsSelected = () => {
    const { rowSelection: n2 } = t2.getState();
    return j(e2, n2);
  }, e2.getIsSomeSelected = () => {
    const { rowSelection: n2 } = t2.getState();
    return "some" === T(e2, n2);
  }, e2.getIsAllSubRowsSelected = () => {
    const { rowSelection: n2 } = t2.getState();
    return "all" === T(e2, n2);
  }, e2.getCanSelect = () => {
    var n2;
    return "function" == typeof t2.options.enableRowSelection ? t2.options.enableRowSelection(e2) : null == (n2 = t2.options.enableRowSelection) || n2;
  }, e2.getCanSelectSubRows = () => {
    var n2;
    return "function" == typeof t2.options.enableSubRowSelection ? t2.options.enableSubRowSelection(e2) : null == (n2 = t2.options.enableSubRowSelection) || n2;
  }, e2.getCanMultiSelect = () => {
    var n2;
    return "function" == typeof t2.options.enableMultiRowSelection ? t2.options.enableMultiRowSelection(e2) : null == (n2 = t2.options.enableMultiRowSelection) || n2;
  }, e2.getToggleSelectedHandler = () => {
    const t3 = e2.getCanSelect();
    return (n2) => {
      var l2;
      t3 && e2.toggleSelected(null == (l2 = n2.target) ? void 0 : l2.checked);
    };
  };
} }, q = (e2, t2, n2, l2, o2) => {
  var i2;
  const r2 = o2.getRow(t2, true);
  n2 ? (r2.getCanMultiSelect() || Object.keys(e2).forEach((t3) => delete e2[t3]), r2.getCanSelect() && (e2[t2] = true)) : delete e2[t2], l2 && null != (i2 = r2.subRows) && i2.length && r2.getCanSelectSubRows() && r2.subRows.forEach((t3) => q(e2, t3.id, n2, l2, o2));
};
function $(e2, t2) {
  const n2 = e2.getState().rowSelection, l2 = [], o2 = {}, i2 = function(e3, t3) {
    return e3.map((e4) => {
      var t4;
      const r2 = j(e4, n2);
      if (r2 && (l2.push(e4), o2[e4.id] = e4), null != (t4 = e4.subRows) && t4.length && (e4 = { ...e4, subRows: i2(e4.subRows) }), r2) return e4;
    }).filter(Boolean);
  };
  return { rows: i2(t2.rows), flatRows: l2, rowsById: o2 };
}
function j(e2, t2) {
  var n2;
  return null != (n2 = t2[e2.id]) && n2;
}
function T(e2, t2, n2) {
  var l2;
  if (null == (l2 = e2.subRows) || !l2.length) return false;
  let o2 = true, i2 = false;
  return e2.subRows.forEach((e3) => {
    if ((!i2 || o2) && (e3.getCanSelect() && (j(e3, t2) ? i2 = true : o2 = false), e3.subRows && e3.subRows.length)) {
      const n3 = T(e3, t2);
      "all" === n3 ? i2 = true : "some" === n3 ? (i2 = true, o2 = false) : o2 = false;
    }
  }), o2 ? "all" : !!i2 && "some";
}
const N = /([0-9]+)/gm;
function U(e2, t2) {
  return e2 === t2 ? 0 : e2 > t2 ? 1 : -1;
}
function X(e2) {
  return "number" == typeof e2 ? isNaN(e2) || e2 === 1 / 0 || e2 === -1 / 0 ? "" : String(e2) : "string" == typeof e2 ? e2 : "";
}
function K(e2, t2) {
  const n2 = e2.split(N).filter(Boolean), l2 = t2.split(N).filter(Boolean);
  for (; n2.length && l2.length; ) {
    const e3 = n2.shift(), t3 = l2.shift(), o2 = parseInt(e3, 10), i2 = parseInt(t3, 10), r2 = [o2, i2].sort();
    if (isNaN(r2[0])) {
      if (e3 > t3) return 1;
      if (t3 > e3) return -1;
    } else {
      if (isNaN(r2[1])) return isNaN(o2) ? -1 : 1;
      if (o2 > i2) return 1;
      if (i2 > o2) return -1;
    }
  }
  return n2.length - l2.length;
}
const W = { alphanumeric: (e2, t2, n2) => K(X(e2.getValue(n2)).toLowerCase(), X(t2.getValue(n2)).toLowerCase()), alphanumericCaseSensitive: (e2, t2, n2) => K(X(e2.getValue(n2)), X(t2.getValue(n2))), text: (e2, t2, n2) => U(X(e2.getValue(n2)).toLowerCase(), X(t2.getValue(n2)).toLowerCase()), textCaseSensitive: (e2, t2, n2) => U(X(e2.getValue(n2)), X(t2.getValue(n2))), datetime: (e2, t2, n2) => {
  const l2 = e2.getValue(n2), o2 = t2.getValue(n2);
  return l2 > o2 ? 1 : l2 < o2 ? -1 : 0;
}, basic: (e2, t2, n2) => U(e2.getValue(n2), t2.getValue(n2)) }, J = [f, { getInitialState: (e2) => ({ columnVisibility: {}, ...e2 }), getDefaultOptions: (e2) => ({ onColumnVisibilityChange: s("columnVisibility", e2) }), createColumn: (e2, t2) => {
  e2.toggleVisibility = (n2) => {
    e2.getCanHide() && t2.setColumnVisibility((t3) => ({ ...t3, [e2.id]: null != n2 ? n2 : !e2.getIsVisible() }));
  }, e2.getIsVisible = () => {
    var n2, l2;
    const o2 = e2.columns;
    return null == (n2 = o2.length ? o2.some((e3) => e3.getIsVisible()) : null == (l2 = t2.getState().columnVisibility) ? void 0 : l2[e2.id]) || n2;
  }, e2.getCanHide = () => {
    var n2, l2;
    return (null == (n2 = e2.columnDef.enableHiding) || n2) && (null == (l2 = t2.options.enableHiding) || l2);
  }, e2.getToggleVisibilityHandler = () => (t3) => {
    null == e2.toggleVisibility || e2.toggleVisibility(t3.target.checked);
  };
}, createRow: (e2, t2) => {
  e2._getAllVisibleCells = d(() => [e2.getAllCells(), t2.getState().columnVisibility], (e3) => e3.filter((e4) => e4.column.getIsVisible()), g(t2.options, "debugRows")), e2.getVisibleCells = d(() => [e2.getLeftVisibleCells(), e2.getCenterVisibleCells(), e2.getRightVisibleCells()], (e3, t3, n2) => [...e3, ...t3, ...n2], g(t2.options, "debugRows"));
}, createTable: (e2) => {
  const t2 = (t3, n2) => d(() => [n2(), n2().filter((e3) => e3.getIsVisible()).map((e3) => e3.id).join("_")], (e3) => e3.filter((e4) => null == e4.getIsVisible ? void 0 : e4.getIsVisible()), g(e2.options, "debugColumns"));
  e2.getVisibleFlatColumns = t2("getVisibleFlatColumns", () => e2.getAllFlatColumns()), e2.getVisibleLeafColumns = t2("getVisibleLeafColumns", () => e2.getAllLeafColumns()), e2.getLeftVisibleLeafColumns = t2("getLeftVisibleLeafColumns", () => e2.getLeftLeafColumns()), e2.getRightVisibleLeafColumns = t2("getRightVisibleLeafColumns", () => e2.getRightLeafColumns()), e2.getCenterVisibleLeafColumns = t2("getCenterVisibleLeafColumns", () => e2.getCenterLeafColumns()), e2.setColumnVisibility = (t3) => null == e2.options.onColumnVisibilityChange ? void 0 : e2.options.onColumnVisibilityChange(t3), e2.resetColumnVisibility = (t3) => {
    var n2;
    e2.setColumnVisibility(t3 ? {} : null != (n2 = e2.initialState.columnVisibility) ? n2 : {});
  }, e2.toggleAllColumnsVisible = (t3) => {
    var n2;
    t3 = null != (n2 = t3) ? n2 : !e2.getIsAllColumnsVisible(), e2.setColumnVisibility(e2.getAllLeafColumns().reduce((e3, n3) => ({ ...e3, [n3.id]: t3 || !(null != n3.getCanHide && n3.getCanHide()) }), {}));
  }, e2.getIsAllColumnsVisible = () => !e2.getAllLeafColumns().some((e3) => !(null != e3.getIsVisible && e3.getIsVisible())), e2.getIsSomeColumnsVisible = () => e2.getAllLeafColumns().some((e3) => null == e3.getIsVisible ? void 0 : e3.getIsVisible()), e2.getToggleAllColumnsVisibilityHandler = () => (t3) => {
    var n2;
    e2.toggleAllColumnsVisible(null == (n2 = t3.target) ? void 0 : n2.checked);
  };
} }, E, D, h, I, { createTable: (e2) => {
  e2._getGlobalFacetedRowModel = e2.options.getFacetedRowModel && e2.options.getFacetedRowModel(e2, "__global__"), e2.getGlobalFacetedRowModel = () => e2.options.manualFiltering || !e2._getGlobalFacetedRowModel ? e2.getPreFilteredRowModel() : e2._getGlobalFacetedRowModel(), e2._getGlobalFacetedUniqueValues = e2.options.getFacetedUniqueValues && e2.options.getFacetedUniqueValues(e2, "__global__"), e2.getGlobalFacetedUniqueValues = () => e2._getGlobalFacetedUniqueValues ? e2._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e2._getGlobalFacetedMinMaxValues = e2.options.getFacetedMinMaxValues && e2.options.getFacetedMinMaxValues(e2, "__global__"), e2.getGlobalFacetedMinMaxValues = () => {
    if (e2._getGlobalFacetedMinMaxValues) return e2._getGlobalFacetedMinMaxValues();
  };
} }, { getInitialState: (e2) => ({ globalFilter: void 0, ...e2 }), getDefaultOptions: (e2) => ({ onGlobalFilterChange: s("globalFilter", e2), globalFilterFn: "auto", getColumnCanGlobalFilter: (t2) => {
  var n2;
  const l2 = null == (n2 = e2.getCoreRowModel().flatRows[0]) || null == (n2 = n2._getAllCellsByColumnId()[t2.id]) ? void 0 : n2.getValue();
  return "string" == typeof l2 || "number" == typeof l2;
} }), createColumn: (e2, t2) => {
  e2.getCanGlobalFilter = () => {
    var n2, l2, o2, i2;
    return (null == (n2 = e2.columnDef.enableGlobalFilter) || n2) && (null == (l2 = t2.options.enableGlobalFilter) || l2) && (null == (o2 = t2.options.enableFilters) || o2) && (null == (i2 = null == t2.options.getColumnCanGlobalFilter ? void 0 : t2.options.getColumnCanGlobalFilter(e2)) || i2) && !!e2.accessorFn;
  };
}, createTable: (e2) => {
  e2.getGlobalAutoFilterFn = () => P.includesString, e2.getGlobalFilterFn = () => {
    var t2, n2;
    const { globalFilterFn: l2 } = e2.options;
    return u(l2) ? l2 : "auto" === l2 ? e2.getGlobalAutoFilterFn() : null != (t2 = null == (n2 = e2.options.filterFns) ? void 0 : n2[l2]) ? t2 : P[l2];
  }, e2.setGlobalFilter = (t2) => {
    null == e2.options.onGlobalFilterChange || e2.options.onGlobalFilterChange(t2);
  }, e2.resetGlobalFilter = (t2) => {
    e2.setGlobalFilter(t2 ? void 0 : e2.initialState.globalFilter);
  };
} }, { getInitialState: (e2) => ({ sorting: [], ...e2 }), getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }), getDefaultOptions: (e2) => ({ onSortingChange: s("sorting", e2), isMultiSortEvent: (e3) => e3.shiftKey }), createColumn: (e2, t2) => {
  e2.getAutoSortingFn = () => {
    const n2 = t2.getFilteredRowModel().flatRows.slice(10);
    let l2 = false;
    for (const t3 of n2) {
      const n3 = null == t3 ? void 0 : t3.getValue(e2.id);
      if ("[object Date]" === Object.prototype.toString.call(n3)) return W.datetime;
      if ("string" == typeof n3 && (l2 = true, n3.split(N).length > 1)) return W.alphanumeric;
    }
    return l2 ? W.text : W.basic;
  }, e2.getAutoSortDir = () => {
    const n2 = t2.getFilteredRowModel().flatRows[0];
    return "string" == typeof (null == n2 ? void 0 : n2.getValue(e2.id)) ? "asc" : "desc";
  }, e2.getSortingFn = () => {
    var n2, l2;
    if (!e2) throw new Error();
    return u(e2.columnDef.sortingFn) ? e2.columnDef.sortingFn : "auto" === e2.columnDef.sortingFn ? e2.getAutoSortingFn() : null != (n2 = null == (l2 = t2.options.sortingFns) ? void 0 : l2[e2.columnDef.sortingFn]) ? n2 : W[e2.columnDef.sortingFn];
  }, e2.toggleSorting = (n2, l2) => {
    const o2 = e2.getNextSortingOrder(), i2 = null != n2;
    t2.setSorting((r2) => {
      const a2 = null == r2 ? void 0 : r2.find((t3) => t3.id === e2.id), s2 = null == r2 ? void 0 : r2.findIndex((t3) => t3.id === e2.id);
      let u2, d2 = [], g2 = i2 ? n2 : "desc" === o2;
      var c2;
      (u2 = null != r2 && r2.length && e2.getCanMultiSort() && l2 ? a2 ? "toggle" : "add" : null != r2 && r2.length && s2 !== r2.length - 1 ? "replace" : a2 ? "toggle" : "replace", "toggle" === u2 && (i2 || o2 || (u2 = "remove")), "add" === u2) ? (d2 = [...r2, { id: e2.id, desc: g2 }], d2.splice(0, d2.length - (null != (c2 = t2.options.maxMultiSortColCount) ? c2 : Number.MAX_SAFE_INTEGER))) : d2 = "toggle" === u2 ? r2.map((t3) => t3.id === e2.id ? { ...t3, desc: g2 } : t3) : "remove" === u2 ? r2.filter((t3) => t3.id !== e2.id) : [{ id: e2.id, desc: g2 }];
      return d2;
    });
  }, e2.getFirstSortDir = () => {
    var n2, l2;
    return (null != (n2 = null != (l2 = e2.columnDef.sortDescFirst) ? l2 : t2.options.sortDescFirst) ? n2 : "desc" === e2.getAutoSortDir()) ? "desc" : "asc";
  }, e2.getNextSortingOrder = (n2) => {
    var l2, o2;
    const i2 = e2.getFirstSortDir(), r2 = e2.getIsSorted();
    return r2 ? !!(r2 === i2 || null != (l2 = t2.options.enableSortingRemoval) && !l2 || n2 && null != (o2 = t2.options.enableMultiRemove) && !o2) && ("desc" === r2 ? "asc" : "desc") : i2;
  }, e2.getCanSort = () => {
    var n2, l2;
    return (null == (n2 = e2.columnDef.enableSorting) || n2) && (null == (l2 = t2.options.enableSorting) || l2) && !!e2.accessorFn;
  }, e2.getCanMultiSort = () => {
    var n2, l2;
    return null != (n2 = null != (l2 = e2.columnDef.enableMultiSort) ? l2 : t2.options.enableMultiSort) ? n2 : !!e2.accessorFn;
  }, e2.getIsSorted = () => {
    var n2;
    const l2 = null == (n2 = t2.getState().sorting) ? void 0 : n2.find((t3) => t3.id === e2.id);
    return !!l2 && (l2.desc ? "desc" : "asc");
  }, e2.getSortIndex = () => {
    var n2, l2;
    return null != (n2 = null == (l2 = t2.getState().sorting) ? void 0 : l2.findIndex((t3) => t3.id === e2.id)) ? n2 : -1;
  }, e2.clearSorting = () => {
    t2.setSorting((t3) => null != t3 && t3.length ? t3.filter((t4) => t4.id !== e2.id) : []);
  }, e2.getToggleSortingHandler = () => {
    const n2 = e2.getCanSort();
    return (l2) => {
      n2 && (null == l2.persist || l2.persist(), null == e2.toggleSorting || e2.toggleSorting(void 0, !!e2.getCanMultiSort() && (null == t2.options.isMultiSortEvent ? void 0 : t2.options.isMultiSortEvent(l2))));
    };
  };
}, createTable: (e2) => {
  e2.setSorting = (t2) => null == e2.options.onSortingChange ? void 0 : e2.options.onSortingChange(t2), e2.resetSorting = (t2) => {
    var n2, l2;
    e2.setSorting(t2 ? [] : null != (n2 = null == (l2 = e2.initialState) ? void 0 : l2.sorting) ? n2 : []);
  }, e2.getPreSortedRowModel = () => e2.getGroupedRowModel(), e2.getSortedRowModel = () => (!e2._getSortedRowModel && e2.options.getSortedRowModel && (e2._getSortedRowModel = e2.options.getSortedRowModel(e2)), e2.options.manualSorting || !e2._getSortedRowModel ? e2.getPreSortedRowModel() : e2._getSortedRowModel());
} }, A, { getInitialState: (e2) => ({ expanded: {}, ...e2 }), getDefaultOptions: (e2) => ({ onExpandedChange: s("expanded", e2), paginateExpandedRows: true }), createTable: (e2) => {
  let t2 = false, n2 = false;
  e2._autoResetExpanded = () => {
    var l2, o2;
    if (t2) {
      if (null != (l2 = null != (o2 = e2.options.autoResetAll) ? o2 : e2.options.autoResetExpanded) ? l2 : !e2.options.manualExpanding) {
        if (n2) return;
        n2 = true, e2._queue(() => {
          e2.resetExpanded(), n2 = false;
        });
      }
    } else e2._queue(() => {
      t2 = true;
    });
  }, e2.setExpanded = (t3) => null == e2.options.onExpandedChange ? void 0 : e2.options.onExpandedChange(t3), e2.toggleAllRowsExpanded = (t3) => {
    (null != t3 ? t3 : !e2.getIsAllRowsExpanded()) ? e2.setExpanded(true) : e2.setExpanded({});
  }, e2.resetExpanded = (t3) => {
    var n3, l2;
    e2.setExpanded(t3 ? {} : null != (n3 = null == (l2 = e2.initialState) ? void 0 : l2.expanded) ? n3 : {});
  }, e2.getCanSomeRowsExpand = () => e2.getPrePaginationRowModel().flatRows.some((e3) => e3.getCanExpand()), e2.getToggleAllRowsExpandedHandler = () => (t3) => {
    null == t3.persist || t3.persist(), e2.toggleAllRowsExpanded();
  }, e2.getIsSomeRowsExpanded = () => {
    const t3 = e2.getState().expanded;
    return true === t3 || Object.values(t3).some(Boolean);
  }, e2.getIsAllRowsExpanded = () => {
    const t3 = e2.getState().expanded;
    return "boolean" == typeof t3 ? true === t3 : !!Object.keys(t3).length && !e2.getRowModel().flatRows.some((e3) => !e3.getIsExpanded());
  }, e2.getExpandedDepth = () => {
    let t3 = 0;
    return (true === e2.getState().expanded ? Object.keys(e2.getRowModel().rowsById) : Object.keys(e2.getState().expanded)).forEach((e3) => {
      const n3 = e3.split(".");
      t3 = Math.max(t3, n3.length);
    }), t3;
  }, e2.getPreExpandedRowModel = () => e2.getSortedRowModel(), e2.getExpandedRowModel = () => (!e2._getExpandedRowModel && e2.options.getExpandedRowModel && (e2._getExpandedRowModel = e2.options.getExpandedRowModel(e2)), e2.options.manualExpanding || !e2._getExpandedRowModel ? e2.getPreExpandedRowModel() : e2._getExpandedRowModel());
}, createRow: (e2, t2) => {
  e2.toggleExpanded = (n2) => {
    t2.setExpanded((l2) => {
      var o2;
      const i2 = true === l2 || !(null == l2 || !l2[e2.id]);
      let r2 = {};
      if (true === l2 ? Object.keys(t2.getRowModel().rowsById).forEach((e3) => {
        r2[e3] = true;
      }) : r2 = l2, n2 = null != (o2 = n2) ? o2 : !i2, !i2 && n2) return { ...r2, [e2.id]: true };
      if (i2 && !n2) {
        const { [e2.id]: t3, ...n3 } = r2;
        return n3;
      }
      return l2;
    });
  }, e2.getIsExpanded = () => {
    var n2;
    const l2 = t2.getState().expanded;
    return !!(null != (n2 = null == t2.options.getIsRowExpanded ? void 0 : t2.options.getIsRowExpanded(e2)) ? n2 : true === l2 || (null == l2 ? void 0 : l2[e2.id]));
  }, e2.getCanExpand = () => {
    var n2, l2, o2;
    return null != (n2 = null == t2.options.getRowCanExpand ? void 0 : t2.options.getRowCanExpand(e2)) ? n2 : (null == (l2 = t2.options.enableExpanding) || l2) && !(null == (o2 = e2.subRows) || !o2.length);
  }, e2.getIsAllParentsExpanded = () => {
    let n2 = true, l2 = e2;
    for (; n2 && l2.parentId; ) l2 = t2.getRow(l2.parentId, true), n2 = l2.getIsExpanded();
    return n2;
  }, e2.getToggleExpandedHandler = () => {
    const t3 = e2.getCanExpand();
    return () => {
      t3 && e2.toggleExpanded();
    };
  };
} }, { getInitialState: (e2) => ({ ...e2, pagination: { pageIndex: 0, pageSize: 10, ...null == e2 ? void 0 : e2.pagination } }), getDefaultOptions: (e2) => ({ onPaginationChange: s("pagination", e2) }), createTable: (e2) => {
  let t2 = false, n2 = false;
  e2._autoResetPageIndex = () => {
    var l2, o2;
    if (t2) {
      if (null != (l2 = null != (o2 = e2.options.autoResetAll) ? o2 : e2.options.autoResetPageIndex) ? l2 : !e2.options.manualPagination) {
        if (n2) return;
        n2 = true, e2._queue(() => {
          e2.resetPageIndex(), n2 = false;
        });
      }
    } else e2._queue(() => {
      t2 = true;
    });
  }, e2.setPagination = (t3) => null == e2.options.onPaginationChange ? void 0 : e2.options.onPaginationChange((e3) => a(t3, e3)), e2.resetPagination = (t3) => {
    var n3;
    e2.setPagination(t3 ? { pageIndex: 0, pageSize: 10 } : null != (n3 = e2.initialState.pagination) ? n3 : { pageIndex: 0, pageSize: 10 });
  }, e2.setPageIndex = (t3) => {
    e2.setPagination((n3) => {
      let l2 = a(t3, n3.pageIndex);
      const o2 = void 0 === e2.options.pageCount || -1 === e2.options.pageCount ? Number.MAX_SAFE_INTEGER : e2.options.pageCount - 1;
      return l2 = Math.max(0, Math.min(l2, o2)), { ...n3, pageIndex: l2 };
    });
  }, e2.resetPageIndex = (t3) => {
    var n3, l2;
    e2.setPageIndex(t3 ? 0 : null != (n3 = null == (l2 = e2.initialState) || null == (l2 = l2.pagination) ? void 0 : l2.pageIndex) ? n3 : 0);
  }, e2.resetPageSize = (t3) => {
    var n3, l2;
    e2.setPageSize(t3 ? 10 : null != (n3 = null == (l2 = e2.initialState) || null == (l2 = l2.pagination) ? void 0 : l2.pageSize) ? n3 : 10);
  }, e2.setPageSize = (t3) => {
    e2.setPagination((e3) => {
      const n3 = Math.max(1, a(t3, e3.pageSize)), l2 = e3.pageSize * e3.pageIndex, o2 = Math.floor(l2 / n3);
      return { ...e3, pageIndex: o2, pageSize: n3 };
    });
  }, e2.setPageCount = (t3) => e2.setPagination((n3) => {
    var l2;
    let o2 = a(t3, null != (l2 = e2.options.pageCount) ? l2 : -1);
    return "number" == typeof o2 && (o2 = Math.max(-1, o2)), { ...n3, pageCount: o2 };
  }), e2.getPageOptions = d(() => [e2.getPageCount()], (e3) => {
    let t3 = [];
    return e3 && e3 > 0 && (t3 = [...new Array(e3)].fill(null).map((e4, t4) => t4)), t3;
  }, g(e2.options, "debugTable")), e2.getCanPreviousPage = () => e2.getState().pagination.pageIndex > 0, e2.getCanNextPage = () => {
    const { pageIndex: t3 } = e2.getState().pagination, n3 = e2.getPageCount();
    return -1 === n3 || 0 !== n3 && t3 < n3 - 1;
  }, e2.previousPage = () => e2.setPageIndex((e3) => e3 - 1), e2.nextPage = () => e2.setPageIndex((e3) => e3 + 1), e2.firstPage = () => e2.setPageIndex(0), e2.lastPage = () => e2.setPageIndex(e2.getPageCount() - 1), e2.getPrePaginationRowModel = () => e2.getExpandedRowModel(), e2.getPaginationRowModel = () => (!e2._getPaginationRowModel && e2.options.getPaginationRowModel && (e2._getPaginationRowModel = e2.options.getPaginationRowModel(e2)), e2.options.manualPagination || !e2._getPaginationRowModel ? e2.getPrePaginationRowModel() : e2._getPaginationRowModel()), e2.getPageCount = () => {
    var t3;
    return null != (t3 = e2.options.pageCount) ? t3 : Math.ceil(e2.getRowCount() / e2.getState().pagination.pageSize);
  }, e2.getRowCount = () => {
    var t3;
    return null != (t3 = e2.options.rowCount) ? t3 : e2.getPrePaginationRowModel().rows.length;
  };
} }, { getInitialState: (e2) => ({ rowPinning: { top: [], bottom: [] }, ...e2 }), getDefaultOptions: (e2) => ({ onRowPinningChange: s("rowPinning", e2) }), createRow: (e2, t2) => {
  e2.pin = (n2, l2, o2) => {
    const i2 = l2 ? e2.getLeafRows().map((e3) => {
      let { id: t3 } = e3;
      return t3;
    }) : [], r2 = o2 ? e2.getParentRows().map((e3) => {
      let { id: t3 } = e3;
      return t3;
    }) : [], a2 = /* @__PURE__ */ new Set([...r2, e2.id, ...i2]);
    t2.setRowPinning((e3) => {
      var t3, l3, o3, i3, r3, s2;
      return "bottom" === n2 ? { top: (null != (o3 = null == e3 ? void 0 : e3.top) ? o3 : []).filter((e4) => !(null != a2 && a2.has(e4))), bottom: [...(null != (i3 = null == e3 ? void 0 : e3.bottom) ? i3 : []).filter((e4) => !(null != a2 && a2.has(e4))), ...Array.from(a2)] } : "top" === n2 ? { top: [...(null != (r3 = null == e3 ? void 0 : e3.top) ? r3 : []).filter((e4) => !(null != a2 && a2.has(e4))), ...Array.from(a2)], bottom: (null != (s2 = null == e3 ? void 0 : e3.bottom) ? s2 : []).filter((e4) => !(null != a2 && a2.has(e4))) } : { top: (null != (t3 = null == e3 ? void 0 : e3.top) ? t3 : []).filter((e4) => !(null != a2 && a2.has(e4))), bottom: (null != (l3 = null == e3 ? void 0 : e3.bottom) ? l3 : []).filter((e4) => !(null != a2 && a2.has(e4))) };
    });
  }, e2.getCanPin = () => {
    var n2;
    const { enableRowPinning: l2, enablePinning: o2 } = t2.options;
    return "function" == typeof l2 ? l2(e2) : null == (n2 = null != l2 ? l2 : o2) || n2;
  }, e2.getIsPinned = () => {
    const n2 = [e2.id], { top: l2, bottom: o2 } = t2.getState().rowPinning, i2 = n2.some((e3) => null == l2 ? void 0 : l2.includes(e3)), r2 = n2.some((e3) => null == o2 ? void 0 : o2.includes(e3));
    return i2 ? "top" : !!r2 && "bottom";
  }, e2.getPinnedIndex = () => {
    var n2, l2;
    const o2 = e2.getIsPinned();
    if (!o2) return -1;
    const i2 = null == (n2 = "top" === o2 ? t2.getTopRows() : t2.getBottomRows()) ? void 0 : n2.map((e3) => {
      let { id: t3 } = e3;
      return t3;
    });
    return null != (l2 = null == i2 ? void 0 : i2.indexOf(e2.id)) ? l2 : -1;
  };
}, createTable: (e2) => {
  e2.setRowPinning = (t2) => null == e2.options.onRowPinningChange ? void 0 : e2.options.onRowPinningChange(t2), e2.resetRowPinning = (t2) => {
    var n2, l2;
    return e2.setRowPinning(t2 ? { top: [], bottom: [] } : null != (n2 = null == (l2 = e2.initialState) ? void 0 : l2.rowPinning) ? n2 : { top: [], bottom: [] });
  }, e2.getIsSomeRowsPinned = (t2) => {
    var n2;
    const l2 = e2.getState().rowPinning;
    var o2, i2;
    return t2 ? Boolean(null == (n2 = l2[t2]) ? void 0 : n2.length) : Boolean((null == (o2 = l2.top) ? void 0 : o2.length) || (null == (i2 = l2.bottom) ? void 0 : i2.length));
  }, e2._getPinnedRows = (t2, n2, l2) => {
    var o2;
    return (null == (o2 = e2.options.keepPinnedRows) || o2 ? (null != n2 ? n2 : []).map((t3) => {
      const n3 = e2.getRow(t3, true);
      return n3.getIsAllParentsExpanded() ? n3 : null;
    }) : (null != n2 ? n2 : []).map((e3) => t2.find((t3) => t3.id === e3))).filter(Boolean).map((e3) => ({ ...e3, position: l2 }));
  }, e2.getTopRows = d(() => [e2.getRowModel().rows, e2.getState().rowPinning.top], (t2, n2) => e2._getPinnedRows(t2, n2, "top"), g(e2.options, "debugRows")), e2.getBottomRows = d(() => [e2.getRowModel().rows, e2.getState().rowPinning.bottom], (t2, n2) => e2._getPinnedRows(t2, n2, "bottom"), g(e2.options, "debugRows")), e2.getCenterRows = d(() => [e2.getRowModel().rows, e2.getState().rowPinning.top, e2.getState().rowPinning.bottom], (e3, t2, n2) => {
    const l2 = /* @__PURE__ */ new Set([...null != t2 ? t2 : [], ...null != n2 ? n2 : []]);
    return e3.filter((e4) => !l2.has(e4.id));
  }, g(e2.options, "debugRows"));
} }, k, L];
function Q(e2) {
  var t2, n2;
  const l2 = [...J, ...null != (t2 = e2._features) ? t2 : []];
  let o2 = { _features: l2 };
  const i2 = o2._features.reduce((e3, t3) => Object.assign(e3, null == t3.getDefaultOptions ? void 0 : t3.getDefaultOptions(o2)), {});
  let r2 = { ...null != (n2 = e2.initialState) ? n2 : {} };
  o2._features.forEach((e3) => {
    var t3;
    r2 = null != (t3 = null == e3.getInitialState ? void 0 : e3.getInitialState(r2)) ? t3 : r2;
  });
  const s2 = [];
  let u2 = false;
  const c2 = { _features: l2, options: { ...i2, ...e2 }, initialState: r2, _queue: (e3) => {
    s2.push(e3), u2 || (u2 = true, Promise.resolve().then(() => {
      for (; s2.length; ) s2.shift()();
      u2 = false;
    }).catch((e4) => setTimeout(() => {
      throw e4;
    })));
  }, reset: () => {
    o2.setState(o2.initialState);
  }, setOptions: (e3) => {
    const t3 = a(e3, o2.options);
    var n3;
    o2.options = (n3 = t3, o2.options.mergeOptions ? o2.options.mergeOptions(i2, n3) : { ...i2, ...n3 });
  }, getState: () => o2.options.state, setState: (e3) => {
    null == o2.options.onStateChange || o2.options.onStateChange(e3);
  }, _getRowId: (e3, t3, n3) => {
    var l3;
    return null != (l3 = null == o2.options.getRowId ? void 0 : o2.options.getRowId(e3, t3, n3)) ? l3 : `${n3 ? [n3.id, t3].join(".") : t3}`;
  }, getCoreRowModel: () => (o2._getCoreRowModel || (o2._getCoreRowModel = o2.options.getCoreRowModel(o2)), o2._getCoreRowModel()), getRowModel: () => o2.getPaginationRowModel(), getRow: (e3, t3) => {
    let n3 = (t3 ? o2.getPrePaginationRowModel() : o2.getRowModel()).rowsById[e3];
    if (!n3 && (n3 = o2.getCoreRowModel().rowsById[e3], !n3)) {
      throw new Error();
    }
    return n3;
  }, _getDefaultColumnDef: d(() => [o2.options.defaultColumn], (e3) => {
    var t3;
    return e3 = null != (t3 = e3) ? t3 : {}, { header: (e4) => {
      const t4 = e4.header.column.columnDef;
      return t4.accessorKey ? t4.accessorKey : t4.accessorFn ? t4.id : null;
    }, cell: (e4) => {
      var t4, n3;
      return null != (t4 = null == (n3 = e4.renderValue()) || null == n3.toString ? void 0 : n3.toString()) ? t4 : null;
    }, ...o2._features.reduce((e4, t4) => Object.assign(e4, null == t4.getDefaultColumnDef ? void 0 : t4.getDefaultColumnDef()), {}), ...e3 };
  }, g(e2, "debugColumns")), _getColumnDefs: () => o2.options.columns, getAllColumns: d(() => [o2._getColumnDefs()], (e3) => {
    const t3 = function(e4, n3, l3) {
      return void 0 === l3 && (l3 = 0), e4.map((e5) => {
        const i3 = function(e6, t4, n4, l4) {
          var o3, i4;
          const r4 = { ...e6._getDefaultColumnDef(), ...t4 }, a2 = r4.accessorKey;
          let s3, u3 = null != (o3 = null != (i4 = r4.id) ? i4 : a2 ? "function" == typeof String.prototype.replaceAll ? a2.replaceAll(".", "_") : a2.replace(/\./g, "_") : void 0) ? o3 : "string" == typeof r4.header ? r4.header : void 0;
          if (r4.accessorFn ? s3 = r4.accessorFn : a2 && (s3 = a2.includes(".") ? (e7) => {
            let t5 = e7;
            for (const l5 of a2.split(".")) {
              var n5;
              t5 = null == (n5 = t5) ? void 0 : n5[l5];
            }
            return t5;
          } : (e7) => e7[r4.accessorKey]), !u3) {
            throw new Error();
          }
          let c3 = { id: `${String(u3)}`, accessorFn: s3, parent: l4, depth: n4, columnDef: r4, columns: [], getFlatColumns: d(() => [true], () => {
            var e7;
            return [c3, ...null == (e7 = c3.columns) ? void 0 : e7.flatMap((e8) => e8.getFlatColumns())];
          }, g(e6.options, "debugColumns")), getLeafColumns: d(() => [e6._getOrderColumnsFn()], (e7) => {
            var t5;
            return null != (t5 = c3.columns) && t5.length ? e7(c3.columns.flatMap((e8) => e8.getLeafColumns())) : [c3];
          }, g(e6.options, "debugColumns")) };
          for (const d2 of e6._features) null == d2.createColumn || d2.createColumn(c3, e6);
          return c3;
        }(o2, e5, l3, n3), r3 = e5;
        return i3.columns = r3.columns ? t3(r3.columns, i3, l3 + 1) : [], i3;
      });
    };
    return t3(e3);
  }, g(e2, "debugColumns")), getAllFlatColumns: d(() => [o2.getAllColumns()], (e3) => e3.flatMap((e4) => e4.getFlatColumns()), g(e2, "debugColumns")), _getAllFlatColumnsById: d(() => [o2.getAllFlatColumns()], (e3) => e3.reduce((e4, t3) => (e4[t3.id] = t3, e4), {}), g(e2, "debugColumns")), getAllLeafColumns: d(() => [o2.getAllColumns(), o2._getOrderColumnsFn()], (e3, t3) => t3(e3.flatMap((e4) => e4.getLeafColumns())), g(e2, "debugColumns")), getColumn: (e3) => {
    const t3 = o2._getAllFlatColumnsById()[e3];
    return t3;
  } };
  Object.assign(o2, c2);
  for (let a2 = 0; a2 < o2._features.length; a2++) {
    const e3 = o2._features[a2];
    null == e3 || null == e3.createTable || e3.createTable(o2);
  }
  return o2;
}
function Y(e2) {
  const t2 = [], n2 = (e3) => {
    var l2;
    t2.push(e3), null != (l2 = e3.subRows) && l2.length && e3.getIsExpanded() && e3.subRows.forEach(n2);
  };
  return e2.rows.forEach(n2), { rows: t2, flatRows: e2.flatRows, rowsById: e2.rowsById };
}
function Z(e2, t2, n2) {
  return n2.options.filterFromLeafRows ? function(e3, t3, n3) {
    var l2;
    const o2 = [], i2 = {}, r2 = null != (l2 = n3.options.maxLeafRowFilterDepth) ? l2 : 100, a2 = function(e4, l3) {
      void 0 === l3 && (l3 = 0);
      const s2 = [];
      for (let d2 = 0; d2 < e4.length; d2++) {
        var u2;
        let g2 = e4[d2];
        const c2 = v(n3, g2.id, g2.original, g2.index, g2.depth, 0, g2.parentId);
        if (c2.columnFilters = g2.columnFilters, null != (u2 = g2.subRows) && u2.length && l3 < r2) {
          if (c2.subRows = a2(g2.subRows, l3 + 1), g2 = c2, t3(g2) && !c2.subRows.length) {
            s2.push(g2), i2[g2.id] = g2, o2.push(g2);
            continue;
          }
          if (t3(g2) || c2.subRows.length) {
            s2.push(g2), i2[g2.id] = g2, o2.push(g2);
            continue;
          }
        } else g2 = c2, t3(g2) && (s2.push(g2), i2[g2.id] = g2, o2.push(g2));
      }
      return s2;
    };
    return { rows: a2(e3), flatRows: o2, rowsById: i2 };
  }(e2, t2, n2) : function(e3, t3, n3) {
    var l2;
    const o2 = [], i2 = {}, r2 = null != (l2 = n3.options.maxLeafRowFilterDepth) ? l2 : 100, a2 = function(e4, l3) {
      void 0 === l3 && (l3 = 0);
      const s2 = [];
      for (let d2 = 0; d2 < e4.length; d2++) {
        let g2 = e4[d2];
        if (t3(g2)) {
          var u2;
          if (null != (u2 = g2.subRows) && u2.length && l3 < r2) {
            const e5 = v(n3, g2.id, g2.original, g2.index, g2.depth, 0, g2.parentId);
            e5.subRows = a2(g2.subRows, l3 + 1), g2 = e5;
          }
          s2.push(g2), o2.push(g2), i2[g2.id] = g2;
        }
      }
      return s2;
    };
    return { rows: a2(e3), flatRows: o2, rowsById: i2 };
  }(e2, t2, n2);
}
function ee(e2) {
  return (e3) => d(() => [e3.getState().pagination, e3.getPrePaginationRowModel(), e3.options.paginateExpandedRows ? void 0 : e3.getState().expanded], (t2, n2) => {
    if (!n2.rows.length) return n2;
    const { pageSize: l2, pageIndex: o2 } = t2;
    let { rows: i2, flatRows: r2, rowsById: a2 } = n2;
    const s2 = l2 * o2, u2 = s2 + l2;
    let d2;
    i2 = i2.slice(s2, u2), d2 = e3.options.paginateExpandedRows ? { rows: i2, flatRows: r2, rowsById: a2 } : Y({ rows: i2, flatRows: r2, rowsById: a2 }), d2.flatRows = [];
    const g2 = (e4) => {
      d2.flatRows.push(e4), e4.subRows.length && e4.subRows.forEach(g2);
    };
    return d2.rows.forEach(g2), d2;
  }, g(e3.options, "debugTable"));
}
/**
   * vue-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function te() {
  return true;
}
const ne = Symbol("merge-proxy"), le = { get: (e2, t2, n2) => t2 === ne ? n2 : e2.get(t2), has: (e2, t2) => e2.has(t2), set: te, deleteProperty: te, getOwnPropertyDescriptor: (e2, t2) => ({ configurable: true, enumerable: true, get: () => e2.get(t2), set: te, deleteProperty: te }), ownKeys: (e2) => e2.keys() };
function oe(e2) {
  return "value" in e2 ? e2.value : e2;
}
function ie() {
  for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
  return new Proxy({ get(e3) {
    for (let n3 = t2.length - 1; n3 >= 0; n3--) {
      const l2 = oe(t2[n3])[e3];
      if (void 0 !== l2) return l2;
    }
  }, has(e3) {
    for (let n3 = t2.length - 1; n3 >= 0; n3--) if (e3 in oe(t2[n3])) return true;
    return false;
  }, keys() {
    const e3 = [];
    for (let n3 = 0; n3 < t2.length; n3++) e3.push(...Object.keys(oe(t2[n3])));
    return [...Array.from(new Set(e3))];
  } }, le);
}
const re = Wt.defineComponent({ props: ["render", "props"], setup: (t2) => () => "function" == typeof t2.render || "object" == typeof t2.render ? Wt.h(t2.render, t2.props) : t2.render });
function ae(t2) {
  return ie(t2, { data: Wt.unref(t2.data) });
}
const se = { slots: { root: "relative overflow-auto", base: "min-w-full overflow-clip", caption: "sr-only", thead: "relative", tbody: "divide-y divide-default [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary", tr: "data-[selected=true]:bg-elevated/50", th: "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0", td: "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0", separator: "absolute z-[1] left-0 w-full h-px bg-(--ui-border-accented)", empty: "py-6 text-center text-sm text-muted", loading: "py-6 text-center" }, variants: { pinned: { true: { th: "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0", td: "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0" } }, sticky: { true: { thead: "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur" } }, loading: { true: { thead: "after:absolute after:z-[1] after:h-px" } }, loadingAnimation: { carousel: "", "carousel-inverse": "", swing: "", elastic: "" }, loadingColor: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" } }, compoundVariants: [{ loading: true, loadingColor: "primary", class: { thead: "after:bg-primary" } }, { loading: true, loadingColor: "secondary", class: { thead: "after:bg-secondary" } }, { loading: true, loadingColor: "success", class: { thead: "after:bg-success" } }, { loading: true, loadingColor: "info", class: { thead: "after:bg-info" } }, { loading: true, loadingColor: "warning", class: { thead: "after:bg-warning" } }, { loading: true, loadingColor: "error", class: { thead: "after:bg-error" } }, { loading: true, loadingColor: "neutral", class: { thead: "after:bg-inverted" } }, { loading: true, loadingAnimation: "carousel", class: { thead: "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "carousel-inverse", class: { thead: "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "swing", class: { thead: "after:animate-[swing_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "elastic", class: { thead: "after:animate-[elastic_2s_ease-in-out_infinite]" } }], defaultVariants: { loadingColor: "primary", loadingAnimation: "carousel" } }, ue = { __name: "Table", __ssrInlineRender: true, props: Wt.mergeModels({ as: { type: null, required: false }, data: { type: Array, required: false }, columns: { type: Array, required: false }, caption: { type: String, required: false }, meta: { type: Object, required: false }, empty: { type: String, required: false }, sticky: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingColor: { type: null, required: false }, loadingAnimation: { type: null, required: false }, watchOptions: { type: Object, required: false, default: () => ({ deep: true }) }, globalFilterOptions: { type: Object, required: false }, columnFiltersOptions: { type: Object, required: false }, columnPinningOptions: { type: Object, required: false }, columnSizingOptions: { type: Object, required: false }, visibilityOptions: { type: Object, required: false }, sortingOptions: { type: Object, required: false }, groupingOptions: { type: Object, required: false }, expandedOptions: { type: Object, required: false }, rowSelectionOptions: { type: Object, required: false }, rowPinningOptions: { type: Object, required: false }, paginationOptions: { type: Object, required: false }, facetedOptions: { type: Object, required: false }, onSelect: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, state: { type: Object, required: false }, onStateChange: { type: Function, required: false }, renderFallbackValue: { type: null, required: false }, _features: { type: Array, required: false }, autoResetAll: { type: Boolean, required: false }, debugAll: { type: Boolean, required: false }, debugCells: { type: Boolean, required: false }, debugColumns: { type: Boolean, required: false }, debugHeaders: { type: Boolean, required: false }, debugRows: { type: Boolean, required: false }, debugTable: { type: Boolean, required: false }, defaultColumn: { type: Object, required: false }, getRowId: { type: Function, required: false }, getSubRows: { type: Function, required: false }, initialState: { type: Object, required: false }, mergeOptions: { type: Function, required: false } }, { globalFilter: { type: String, default: void 0 }, globalFilterModifiers: {}, columnFilters: { type: Array, default: [] }, columnFiltersModifiers: {}, columnOrder: { type: Array, default: [] }, columnOrderModifiers: {}, columnVisibility: { type: Object, default: {} }, columnVisibilityModifiers: {}, columnPinning: { type: Object, default: {} }, columnPinningModifiers: {}, columnSizing: { type: Object, default: {} }, columnSizingModifiers: {}, columnSizingInfo: { type: Object, default: {} }, columnSizingInfoModifiers: {}, rowSelection: { type: Object, default: {} }, rowSelectionModifiers: {}, rowPinning: { type: Object, default: {} }, rowPinningModifiers: {}, sorting: { type: Array, default: [] }, sortingModifiers: {}, grouping: { type: Array, default: [] }, groupingModifiers: {}, expanded: { type: [Boolean, Object], default: {} }, expandedModifiers: {}, pagination: { type: Object, default: {} }, paginationModifiers: {} }), emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"], setup(a2, { expose: s2 }) {
  var _a;
  const u2 = a2, c2 = Wt.useSlots(), { t: p2 } = l(), f2 = ua(), m2 = Wt.ref((_a = u2.data) != null ? _a : []), h2 = Wt.computed(() => {
    var _a2, _b;
    return (_b = u2.columns) != null ? _b : Object.keys((_a2 = m2.value[0]) != null ? _a2 : {}).map((e2) => {
      return { accessorKey: e2, header: (t2 = e2, t2 ? t2[0].toUpperCase() + t2.slice(1) : "") };
      var t2;
    });
  }), w2 = Wt.computed(() => {
    var _a2;
    return (_a2 = u2.meta) != null ? _a2 : {};
  }), b2 = Wt.computed(() => {
    var e2;
    return Hy({ extend: Hy(se), ...(null == (e2 = f2.ui) ? void 0 : e2.table) || {} })({ sticky: u2.sticky, loading: u2.loading, loadingColor: u2.loadingColor, loadingAnimation: u2.loadingAnimation });
  }), C2 = Wt.useModel(a2, "globalFilter", { type: String, default: void 0 }), S2 = Wt.useModel(a2, "columnFilters", { type: Array, default: [] }), R2 = Wt.useModel(a2, "columnOrder", { type: Array, default: [] }), y2 = Wt.useModel(a2, "columnVisibility", { type: Object, default: {} }), F2 = Wt.useModel(a2, "columnPinning", { type: Object, default: {} }), x2 = Wt.useModel(a2, "columnSizing", { type: Object, default: {} }), M2 = Wt.useModel(a2, "columnSizingInfo", { type: Object, default: {} }), P2 = Wt.useModel(a2, "rowSelection", { type: Object, default: {} }), V2 = Wt.useModel(a2, "rowPinning", { type: Object, default: {} }), I2 = Wt.useModel(a2, "sorting", { type: Array, default: [] }), _2 = Wt.useModel(a2, "grouping", { type: Array, default: [] }), O2 = Wt.useModel(a2, "expanded", { type: [Boolean, Object], default: {} }), A2 = Wt.useModel(a2, "pagination", { type: Object, default: {} }), E2 = Wt.ref(null), D2 = function(t2) {
    const n2 = Wt.isRef(t2.data), l2 = Q(ie({ state: {}, onStateChange: () => {
    }, renderFallbackValue: null, mergeOptions: (e2, t3) => n2 ? { ...e2, ...t3 } : ie(e2, t3) }, n2 ? ae(t2) : t2));
    if (n2) {
      const n3 = Wt.shallowRef(t2.data);
      Wt.watch(n3, () => {
        l2.setState((e2) => ({ ...e2, data: n3.value }));
      }, { immediate: true });
    }
    const o2 = Wt.ref(l2.initialState);
    return Wt.watchEffect(() => {
      l2.setOptions((e2) => {
        var l3;
        const i2 = new Proxy({}, { get: (e3, t3) => o2.value[t3] });
        return ie(e2, n2 ? ae(t2) : t2, { state: ie(i2, null != (l3 = t2.state) ? l3 : {}), onStateChange: (e3) => {
          o2.value = e3 instanceof Function ? e3(o2.value) : e3, null == t2.onStateChange || t2.onStateChange(e3);
        } });
      });
    }), l2;
  }({ ...km(u2, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"), data: m2, columns: h2.value, meta: w2.value, getCoreRowModel: (e2) => d(() => [e2.options.data], (t2) => {
    const n2 = { rows: [], flatRows: [], rowsById: {} }, l2 = function(t3, o2, i2) {
      void 0 === o2 && (o2 = 0);
      const r2 = [];
      for (let s3 = 0; s3 < t3.length; s3++) {
        const u3 = v(e2, e2._getRowId(t3[s3], s3, i2), t3[s3], s3, o2, 0, null == i2 ? void 0 : i2.id);
        var a3;
        n2.flatRows.push(u3), n2.rowsById[u3.id] = u3, r2.push(u3), e2.options.getSubRows && (u3.originalSubRows = e2.options.getSubRows(t3[s3], s3), null != (a3 = u3.originalSubRows) && a3.length && (u3.subRows = l2(u3.originalSubRows, o2 + 1, u3)));
      }
      return r2;
    };
    return n2.rows = l2(t2), n2;
  }, g(e2.options, "debugTable", "getRowModel", () => e2._autoResetPageIndex())), ...u2.globalFilterOptions || {}, onGlobalFilterChange: (e2) => z2(e2, C2), ...u2.columnFiltersOptions || {}, getFilteredRowModel: (e2) => d(() => [e2.getPreFilteredRowModel(), e2.getState().columnFilters, e2.getState().globalFilter], (t2, n2, l2) => {
    if (!t2.rows.length || (null == n2 || !n2.length) && !l2) {
      for (let e3 = 0; e3 < t2.flatRows.length; e3++) t2.flatRows[e3].columnFilters = {}, t2.flatRows[e3].columnFiltersMeta = {};
      return t2;
    }
    const o2 = [], i2 = [];
    (null != n2 ? n2 : []).forEach((t3) => {
      var n3;
      const l3 = e2.getColumn(t3.id);
      if (!l3) return;
      const i3 = l3.getFilterFn();
      i3 ? o2.push({ id: t3.id, filterFn: i3, resolvedValue: null != (n3 = null == i3.resolveFilterValue ? void 0 : i3.resolveFilterValue(t3.value)) ? n3 : t3.value }) : false;
    });
    const r2 = (null != n2 ? n2 : []).map((e3) => e3.id), a3 = e2.getGlobalFilterFn(), s3 = e2.getAllLeafColumns().filter((e3) => e3.getCanGlobalFilter());
    let u3, d2;
    l2 && a3 && s3.length && (r2.push("__global__"), s3.forEach((e3) => {
      var t3;
      i2.push({ id: e3.id, filterFn: a3, resolvedValue: null != (t3 = null == a3.resolveFilterValue ? void 0 : a3.resolveFilterValue(l2)) ? t3 : l2 });
    }));
    for (let e3 = 0; e3 < t2.flatRows.length; e3++) {
      const n3 = t2.flatRows[e3];
      if (n3.columnFilters = {}, o2.length) for (let e4 = 0; e4 < o2.length; e4++) {
        u3 = o2[e4];
        const t3 = u3.id;
        n3.columnFilters[t3] = u3.filterFn(n3, t3, u3.resolvedValue, (e5) => {
          n3.columnFiltersMeta[t3] = e5;
        });
      }
      if (i2.length) {
        for (let e4 = 0; e4 < i2.length; e4++) {
          d2 = i2[e4];
          const t3 = d2.id;
          if (d2.filterFn(n3, t3, d2.resolvedValue, (e5) => {
            n3.columnFiltersMeta[t3] = e5;
          })) {
            n3.columnFilters.__global__ = true;
            break;
          }
        }
        true !== n3.columnFilters.__global__ && (n3.columnFilters.__global__ = false);
      }
    }
    return Z(t2.rows, (e3) => {
      for (let t3 = 0; t3 < r2.length; t3++) if (false === e3.columnFilters[r2[t3]]) return false;
      return true;
    }, e2);
  }, g(e2.options, "debugTable", "getFilteredRowModel", () => e2._autoResetPageIndex())), onColumnFiltersChange: (e2) => z2(e2, S2), onColumnOrderChange: (e2) => z2(e2, R2), ...u2.visibilityOptions || {}, onColumnVisibilityChange: (e2) => z2(e2, y2), ...u2.columnPinningOptions || {}, onColumnPinningChange: (e2) => z2(e2, F2), ...u2.columnSizingOptions || {}, onColumnSizingChange: (e2) => z2(e2, x2), onColumnSizingInfoChange: (e2) => z2(e2, M2), ...u2.rowSelectionOptions || {}, onRowSelectionChange: (e2) => z2(e2, P2), ...u2.rowPinningOptions || {}, onRowPinningChange: (e2) => z2(e2, V2), ...u2.sortingOptions || {}, getSortedRowModel: (e2) => d(() => [e2.getState().sorting, e2.getPreSortedRowModel()], (t2, n2) => {
    if (!n2.rows.length || null == t2 || !t2.length) return n2;
    const l2 = e2.getState().sorting, o2 = [], i2 = l2.filter((t3) => {
      var n3;
      return null == (n3 = e2.getColumn(t3.id)) ? void 0 : n3.getCanSort();
    }), r2 = {};
    i2.forEach((t3) => {
      const n3 = e2.getColumn(t3.id);
      n3 && (r2[t3.id] = { sortUndefined: n3.columnDef.sortUndefined, invertSorting: n3.columnDef.invertSorting, sortingFn: n3.getSortingFn() });
    });
    const a3 = (e3) => {
      const t3 = e3.map((e4) => ({ ...e4 }));
      return t3.sort((e4, t4) => {
        for (let l3 = 0; l3 < i2.length; l3 += 1) {
          var n3;
          const o3 = i2[l3], a4 = r2[o3.id], s3 = a4.sortUndefined, u3 = null != (n3 = null == o3 ? void 0 : o3.desc) && n3;
          let d2 = 0;
          if (s3) {
            const n4 = void 0 === e4.getValue(o3.id), l4 = void 0 === t4.getValue(o3.id);
            if (n4 || l4) {
              if ("first" === s3) return n4 ? -1 : 1;
              if ("last" === s3) return n4 ? 1 : -1;
              d2 = n4 && l4 ? 0 : n4 ? s3 : -s3;
            }
          }
          if (0 === d2 && (d2 = a4.sortingFn(e4, t4, o3.id)), 0 !== d2) return u3 && (d2 *= -1), a4.invertSorting && (d2 *= -1), d2;
        }
        return e4.index - t4.index;
      }), t3.forEach((e4) => {
        var t4;
        o2.push(e4), null != (t4 = e4.subRows) && t4.length && (e4.subRows = a3(e4.subRows));
      }), t3;
    };
    return { rows: a3(n2.rows), flatRows: o2, rowsById: n2.rowsById };
  }, g(e2.options, "debugTable", "getSortedRowModel", () => e2._autoResetPageIndex())), onSortingChange: (e2) => z2(e2, I2), ...u2.groupingOptions || {}, onGroupingChange: (e2) => z2(e2, _2), ...u2.expandedOptions || {}, getExpandedRowModel: (e2) => d(() => [e2.getState().expanded, e2.getPreExpandedRowModel(), e2.options.paginateExpandedRows], (e3, t2, n2) => !t2.rows.length || true !== e3 && !Object.keys(null != e3 ? e3 : {}).length ? t2 : n2 ? Y(t2) : t2, g(e2.options, "debugTable")), onExpandedChange: (e2) => z2(e2, O2), ...u2.paginationOptions || {}, onPaginationChange: (e2) => z2(e2, A2), ...u2.facetedOptions || {}, state: { get globalFilter() {
    return C2.value;
  }, get columnFilters() {
    return S2.value;
  }, get columnOrder() {
    return R2.value;
  }, get columnVisibility() {
    return y2.value;
  }, get columnPinning() {
    return F2.value;
  }, get expanded() {
    return O2.value;
  }, get rowSelection() {
    return P2.value;
  }, get sorting() {
    return I2.value;
  }, get grouping() {
    return _2.value;
  }, get rowPinning() {
    return V2.value;
  }, get columnSizing() {
    return x2.value;
  }, get columnSizingInfo() {
    return M2.value;
  }, get pagination() {
    return A2.value;
  } } });
  function z2(e2, t2) {
    t2.value = "function" == typeof e2 ? e2(t2.value) : e2;
  }
  return Wt.watch(() => u2.data, () => {
    m2.value = u2.data ? [...u2.data] : [];
  }, u2.watchOptions), s2({ tableRef: E2, tableApi: D2 }), (t2, n2, l2, r2) => {
    var s3;
    n2(om.ssrRenderComponent(Wt.unref(xm), Wt.mergeProps({ as: a2.as, class: b2.value.root({ class: [null == (s3 = u2.ui) ? void 0 : s3.root, u2.class] }) }, r2), { default: Wt.withCtx((n3, l3, i2, r3) => {
      var s4, d2, g2, f3, m3, v2, w3, C3, S3, R3, y3, F3, x3, M3, P3, V3, I3, _3, O3, A3;
      if (!l3) return [Wt.createVNode("table", { ref_key: "tableRef", ref: E2, class: b2.value.base({ class: [null == (y3 = u2.ui) ? void 0 : y3.base] }) }, [a2.caption || c2.caption ? (Wt.openBlock(), Wt.createBlock("caption", { key: 0, class: b2.value.caption({ class: [null == (F3 = u2.ui) ? void 0 : F3.caption] }) }, [Wt.renderSlot(t2.$slots, "caption", {}, () => [Wt.createTextVNode(Wt.toDisplayString(a2.caption), 1)])], 2)) : Wt.createCommentVNode("", true), Wt.createVNode("thead", { class: b2.value.thead({ class: [null == (x3 = u2.ui) ? void 0 : x3.thead] }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(Wt.unref(D2).getHeaderGroups(), (n4) => {
        var l4;
        return Wt.openBlock(), Wt.createBlock("tr", { key: n4.id, class: b2.value.tr({ class: [null == (l4 = u2.ui) ? void 0 : l4.tr] }) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(n4.headers, (n5) => {
          var l5, o2, i3, r4, a3;
          return Wt.openBlock(), Wt.createBlock("th", { key: n5.id, "data-pinned": n5.column.getIsPinned(), colspan: n5.colSpan > 1 ? n5.colSpan : void 0, class: b2.value.th({ class: [null == (l5 = u2.ui) ? void 0 : l5.th, "function" == typeof (null == (i3 = null == (o2 = n5.column.columnDef.meta) ? void 0 : o2.class) ? void 0 : i3.th) ? n5.column.columnDef.meta.class.th(n5) : null == (a3 = null == (r4 = n5.column.columnDef.meta) ? void 0 : r4.class) ? void 0 : a3.th], pinned: !!n5.column.getIsPinned() }) }, [Wt.renderSlot(t2.$slots, `${n5.id}-header`, Wt.mergeProps({ ref_for: true }, n5.getContext()), () => [n5.isPlaceholder ? Wt.createCommentVNode("", true) : (Wt.openBlock(), Wt.createBlock(Wt.unref(re), { key: 0, render: n5.column.columnDef.header, props: n5.getContext() }, null, 8, ["render", "props"]))])], 10, ["data-pinned", "colspan"]);
        }), 128))], 2);
      }), 128)), Wt.createVNode("tr", { class: b2.value.separator({ class: [null == (M3 = u2.ui) ? void 0 : M3.separator] }) }, null, 2)], 2), Wt.createVNode("tbody", { class: b2.value.tbody({ class: [null == (P3 = u2.ui) ? void 0 : P3.tbody] }) }, [Wt.renderSlot(t2.$slots, "body-top"), (null == (V3 = Wt.unref(D2).getRowModel().rows) ? void 0 : V3.length) ? (Wt.openBlock(true), Wt.createBlock(Wt.Fragment, { key: 0 }, Wt.renderList(Wt.unref(D2).getRowModel().rows, (n4) => {
        var l4, o2, i3, r4, a3, s5, d3;
        return Wt.openBlock(), Wt.createBlock(Wt.Fragment, { key: n4.id }, [Wt.createVNode("tr", { "data-selected": n4.getIsSelected(), "data-selectable": !!u2.onSelect, "data-expanded": n4.getIsExpanded(), role: u2.onSelect ? "button" : void 0, tabindex: u2.onSelect ? 0 : void 0, class: b2.value.tr({ class: [null == (l4 = u2.ui) ? void 0 : l4.tr, "function" == typeof (null == (i3 = null == (o2 = Wt.unref(D2).options.meta) ? void 0 : o2.class) ? void 0 : i3.tr) ? Wt.unref(D2).options.meta.class.tr(n4) : null == (a3 = null == (r4 = Wt.unref(D2).options.meta) ? void 0 : r4.class) ? void 0 : a3.tr] }), onClick: (e2) => function(e3, t3) {
          if (!u2.onSelect) return;
          const n5 = t3.target;
          n5.closest("button") || n5.closest("a") || (t3.preventDefault(), t3.stopPropagation(), u2.onSelect(e3, t3));
        }(n4, e2) }, [(Wt.openBlock(true), Wt.createBlock(Wt.Fragment, null, Wt.renderList(n4.getVisibleCells(), (n5) => {
          var l5, o3, i4, r5, a4;
          return Wt.openBlock(), Wt.createBlock("td", { key: n5.id, "data-pinned": n5.column.getIsPinned(), class: b2.value.td({ class: [null == (l5 = u2.ui) ? void 0 : l5.td, "function" == typeof (null == (i4 = null == (o3 = n5.column.columnDef.meta) ? void 0 : o3.class) ? void 0 : i4.td) ? n5.column.columnDef.meta.class.td(n5) : null == (a4 = null == (r5 = n5.column.columnDef.meta) ? void 0 : r5.class) ? void 0 : a4.td], pinned: !!n5.column.getIsPinned() }) }, [Wt.renderSlot(t2.$slots, `${n5.column.id}-cell`, Wt.mergeProps({ ref_for: true }, n5.getContext()), () => [Wt.createVNode(Wt.unref(re), { render: n5.column.columnDef.cell, props: n5.getContext() }, null, 8, ["render", "props"])])], 10, ["data-pinned"]);
        }), 128))], 10, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick"]), n4.getIsExpanded() ? (Wt.openBlock(), Wt.createBlock("tr", { key: 0, class: b2.value.tr({ class: [null == (s5 = u2.ui) ? void 0 : s5.tr] }) }, [Wt.createVNode("td", { colspan: n4.getAllCells().length, class: b2.value.td({ class: [null == (d3 = u2.ui) ? void 0 : d3.td] }) }, [Wt.renderSlot(t2.$slots, "expanded", { row: n4 })], 10, ["colspan"])], 2)) : Wt.createCommentVNode("", true)], 64);
      }), 128)) : a2.loading && c2.loading ? (Wt.openBlock(), Wt.createBlock("tr", { key: 1 }, [Wt.createVNode("td", { colspan: null == (I3 = h2.value) ? void 0 : I3.length, class: b2.value.loading({ class: null == (_3 = u2.ui) ? void 0 : _3.loading }) }, [Wt.renderSlot(t2.$slots, "loading")], 10, ["colspan"])])) : (Wt.openBlock(), Wt.createBlock("tr", { key: 2 }, [Wt.createVNode("td", { colspan: null == (O3 = h2.value) ? void 0 : O3.length, class: b2.value.empty({ class: null == (A3 = u2.ui) ? void 0 : A3.empty }) }, [Wt.renderSlot(t2.$slots, "empty", {}, () => [Wt.createTextVNode(Wt.toDisplayString(a2.empty || Wt.unref(p2)("table.noData")), 1)])], 10, ["colspan"])])), Wt.renderSlot(t2.$slots, "body-bottom")], 2)], 2)];
      l3(`<table class="${om.ssrRenderClass(b2.value.base({ class: [null == (s4 = u2.ui) ? void 0 : s4.base] }))}"${r3}>`), a2.caption || c2.caption ? (l3(`<caption class="${om.ssrRenderClass(b2.value.caption({ class: [null == (d2 = u2.ui) ? void 0 : d2.caption] }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, "caption", {}, () => {
        l3(`${om.ssrInterpolate(a2.caption)}`);
      }, l3, i2, r3), l3("</caption>")) : l3("<!---->"), l3(`<thead class="${om.ssrRenderClass(b2.value.thead({ class: [null == (g2 = u2.ui) ? void 0 : g2.thead] }))}"${r3}><!--[-->`), om.ssrRenderList(Wt.unref(D2).getHeaderGroups(), (n4) => {
        var a3;
        l3(`<tr class="${om.ssrRenderClass(b2.value.tr({ class: [null == (a3 = u2.ui) ? void 0 : a3.tr] }))}"${r3}><!--[-->`), om.ssrRenderList(n4.headers, (n5) => {
          var a4, s5, d3, g3, c3;
          l3(`<th${om.ssrRenderAttr("data-pinned", n5.column.getIsPinned())}${om.ssrRenderAttr("colspan", n5.colSpan > 1 ? n5.colSpan : void 0)} class="${om.ssrRenderClass(b2.value.th({ class: [null == (a4 = u2.ui) ? void 0 : a4.th, "function" == typeof (null == (d3 = null == (s5 = n5.column.columnDef.meta) ? void 0 : s5.class) ? void 0 : d3.th) ? n5.column.columnDef.meta.class.th(n5) : null == (c3 = null == (g3 = n5.column.columnDef.meta) ? void 0 : g3.class) ? void 0 : c3.th], pinned: !!n5.column.getIsPinned() }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, `${n5.id}-header`, Wt.mergeProps({ ref_for: true }, n5.getContext()), () => {
            n5.isPlaceholder ? l3("<!---->") : l3(om.ssrRenderComponent(Wt.unref(re), { render: n5.column.columnDef.header, props: n5.getContext() }, null, i2, r3));
          }, l3, i2, r3), l3("</th>");
        }), l3("<!--]--></tr>");
      }), l3(`<!--]--><tr class="${om.ssrRenderClass(b2.value.separator({ class: [null == (f3 = u2.ui) ? void 0 : f3.separator] }))}"${r3}></tr></thead><tbody class="${om.ssrRenderClass(b2.value.tbody({ class: [null == (m3 = u2.ui) ? void 0 : m3.tbody] }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, "body-top", {}, null, l3, i2, r3), (null == (v2 = Wt.unref(D2).getRowModel().rows) ? void 0 : v2.length) ? (l3("<!--[-->"), om.ssrRenderList(Wt.unref(D2).getRowModel().rows, (n4) => {
        var a3, s5, d3, g3, c3, p3, f4;
        l3(`<!--[--><tr${om.ssrRenderAttr("data-selected", n4.getIsSelected())}${om.ssrRenderAttr("data-selectable", !!u2.onSelect)}${om.ssrRenderAttr("data-expanded", n4.getIsExpanded())}${om.ssrRenderAttr("role", u2.onSelect ? "button" : void 0)}${om.ssrRenderAttr("tabindex", u2.onSelect ? 0 : void 0)} class="${om.ssrRenderClass(b2.value.tr({ class: [null == (a3 = u2.ui) ? void 0 : a3.tr, "function" == typeof (null == (d3 = null == (s5 = Wt.unref(D2).options.meta) ? void 0 : s5.class) ? void 0 : d3.tr) ? Wt.unref(D2).options.meta.class.tr(n4) : null == (c3 = null == (g3 = Wt.unref(D2).options.meta) ? void 0 : g3.class) ? void 0 : c3.tr] }))}"${r3}><!--[-->`), om.ssrRenderList(n4.getVisibleCells(), (n5) => {
          var a4, s6, d4, g4, c4;
          l3(`<td${om.ssrRenderAttr("data-pinned", n5.column.getIsPinned())} class="${om.ssrRenderClass(b2.value.td({ class: [null == (a4 = u2.ui) ? void 0 : a4.td, "function" == typeof (null == (d4 = null == (s6 = n5.column.columnDef.meta) ? void 0 : s6.class) ? void 0 : d4.td) ? n5.column.columnDef.meta.class.td(n5) : null == (c4 = null == (g4 = n5.column.columnDef.meta) ? void 0 : g4.class) ? void 0 : c4.td], pinned: !!n5.column.getIsPinned() }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, `${n5.column.id}-cell`, Wt.mergeProps({ ref_for: true }, n5.getContext()), () => {
            l3(om.ssrRenderComponent(Wt.unref(re), { render: n5.column.columnDef.cell, props: n5.getContext() }, null, i2, r3));
          }, l3, i2, r3), l3("</td>");
        }), l3("<!--]--></tr>"), n4.getIsExpanded() ? (l3(`<tr class="${om.ssrRenderClass(b2.value.tr({ class: [null == (p3 = u2.ui) ? void 0 : p3.tr] }))}"${r3}><td${om.ssrRenderAttr("colspan", n4.getAllCells().length)} class="${om.ssrRenderClass(b2.value.td({ class: [null == (f4 = u2.ui) ? void 0 : f4.td] }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, "expanded", { row: n4 }, null, l3, i2, r3), l3("</td></tr>")) : l3("<!---->"), l3("<!--]-->");
      }), l3("<!--]-->")) : a2.loading && c2.loading ? (l3(`<tr${r3}><td${om.ssrRenderAttr("colspan", null == (w3 = h2.value) ? void 0 : w3.length)} class="${om.ssrRenderClass(b2.value.loading({ class: null == (C3 = u2.ui) ? void 0 : C3.loading }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, "loading", {}, null, l3, i2, r3), l3("</td></tr>")) : (l3(`<tr${r3}><td${om.ssrRenderAttr("colspan", null == (S3 = h2.value) ? void 0 : S3.length)} class="${om.ssrRenderClass(b2.value.empty({ class: null == (R3 = u2.ui) ? void 0 : R3.empty }))}"${r3}>`), om.ssrRenderSlot(t2.$slots, "empty", {}, () => {
        l3(`${om.ssrInterpolate(a2.empty || Wt.unref(p2)("table.noData"))}`);
      }, l3, i2, r3), l3("</td></tr>")), om.ssrRenderSlot(t2.$slots, "body-bottom", {}, null, l3, i2, r3), l3("</tbody></table>");
    }), _: 3 }, l2));
  };
} }, de = ue.setup;
ue.setup = (t2, n2) => {
  const l2 = Wt.useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue"), de ? de(t2, n2) : void 0;
};

export { ee as e, ue as u };
//# sourceMappingURL=Table-C3yOWgeJ.mjs.map

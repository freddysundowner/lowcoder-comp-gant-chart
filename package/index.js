(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.id="lowcoder-comp-gant-chart-0.0.8",e.appendChild(document.createTextNode("._3_ygE{display:table;border-bottom:#e6e4e4 1px solid;border-top:#e6e4e4 1px solid;border-left:#e6e4e4 1px solid}._1nBOt{display:table-row;list-style:none}._2eZzQ{border-right:1px solid rgb(196,196,196);opacity:1;margin-left:-2px}._WuQ0f{display:table-cell;vertical-align:-webkit-baseline-middle;vertical-align:middle}._3ZbQT{display:table;border-bottom:#e6e4e4 1px solid;border-left:#e6e4e4 1px solid}._34SS0{display:table-row;text-overflow:ellipsis}._34SS0:nth-of-type(2n){background-color:#f5f5f5}._3lLk3{display:table-cell;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._nI1Xw{display:flex}._2QjE6{color:#565656;font-size:.6rem;padding:.15rem .2rem 0rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}._2TfEi{font-size:.6rem;padding-left:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._3T42e{background:#fff;padding:12px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b}._29NTg{font-size:12px;margin-bottom:6px;color:#666}._25P-K{position:absolute;display:flex;flex-shrink:0;pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._3gVAq{visibility:hidden;position:absolute;display:flex;pointer-events:none}._1eT-t{overflow:hidden auto;width:1rem;flex-shrink:0;scrollbar-width:thin}._1eT-t::-webkit-scrollbar{width:1.1rem;height:1.1rem}._1eT-t::-webkit-scrollbar-corner{background:transparent}._1eT-t::-webkit-scrollbar-thumb{border:6px solid transparent;background:rgba(0,0,0,.2);background:var(--palette-black-alpha-20, rgba(0, 0, 0, .2));border-radius:10px;background-clip:padding-box}._1eT-t::-webkit-scrollbar-thumb:hover{border:4px solid transparent;background:rgba(0,0,0,.3);background:var(--palette-black-alpha-30, rgba(0, 0, 0, .3));background-clip:padding-box}._2dZTy{fill:#fff}._2dZTy:nth-child(2n){fill:#f5f5f5}._3rUKi{stroke:#ebeff2}._RuwuK{stroke:#e6e4e4}._9w8d5{text-anchor:middle;fill:#333;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}._1rLuZ{stroke:#e6e4e4}._2q1Kt{text-anchor:middle;fill:#555;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}._35nLX{fill:#fff;stroke:#e0e0e0;stroke-width:1.4}._KxSXS{cursor:pointer;outline:none}._KxSXS:hover ._3w_5u{visibility:visible;opacity:1}._3w_5u{fill:#ddd;cursor:ew-resize;opacity:0;visibility:hidden}._31ERP{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;stroke-width:0}._RRr13{cursor:pointer;outline:none}._2P2B1{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._1KJ6x{cursor:pointer;outline:none}._2RbVy{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.6}._2pZMF{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._3zRJQ{fill:#fff;text-anchor:middle;font-weight:lighter;dominant-baseline:central;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}._3KcaM{fill:#555;text-anchor:start;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}._CZjuD{overflow:hidden;font-size:0;margin:0;padding:0}._2B2zv{margin:0;padding:0;overflow:hidden}._3eULf{display:flex;padding:0;margin:0;list-style:none;outline:none;position:relative}._2k9Ys{overflow:auto;max-width:100%;scrollbar-width:thin;height:1.2rem}._2k9Ys::-webkit-scrollbar{width:1.1rem;height:1.1rem}._2k9Ys::-webkit-scrollbar-corner{background:transparent}._2k9Ys::-webkit-scrollbar-thumb{border:6px solid transparent;background:rgba(0,0,0,.2);background:var(--palette-black-alpha-20, rgba(0, 0, 0, .2));border-radius:10px;background-clip:padding-box}._2k9Ys::-webkit-scrollbar-thumb:hover{border:4px solid transparent;background:rgba(0,0,0,.3);background:var(--palette-black-alpha-30, rgba(0, 0, 0, .3));background-clip:padding-box}._19jgW{height:1px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
var zr = Object.defineProperty, Vr = Object.defineProperties;
var Yr = Object.getOwnPropertyDescriptors;
var Bt = Object.getOwnPropertySymbols;
var Ar = Object.prototype.hasOwnProperty, Xr = Object.prototype.propertyIsEnumerable;
var Wt = (n, e, t) => e in n ? zr(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, q = (n, e) => {
  for (var t in e || (e = {}))
    Ar.call(e, t) && Wt(n, t, e[t]);
  if (Bt)
    for (var t of Bt(e))
      Xr.call(e, t) && Wt(n, t, e[t]);
  return n;
}, Ft = (n, e) => Vr(n, Yr(e));
var Ot = (n, e, t) => new Promise((r, a) => {
  var o = (s) => {
    try {
      l(t.next(s));
    } catch (c) {
      a(c);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (c) {
      a(c);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(o, i);
  l((t = t.apply(n, e)).next());
});
var Ue = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function nr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Gr(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var lt = Gr, Ur = typeof Ue == "object" && Ue && Ue.Object === Object && Ue, Kr = Ur, Qr = Kr, Jr = typeof self == "object" && self && self.Object === Object && self, Zr = Qr || Jr || Function("return this")(), or = Zr, qr = or, _r = function() {
  return qr.Date.now();
}, ea = _r, ta = /\s/;
function ra(n) {
  for (var e = n.length; e-- && ta.test(n.charAt(e)); )
    ;
  return e;
}
var aa = ra, na = aa, oa = /^\s+/;
function ia(n) {
  return n && n.slice(0, na(n) + 1).replace(oa, "");
}
var la = ia, sa = or, da = sa.Symbol, ir = da, Rt = ir, lr = Object.prototype, ca = lr.hasOwnProperty, ua = lr.toString, je = Rt ? Rt.toStringTag : void 0;
function ga(n) {
  var e = ca.call(n, je), t = n[je];
  try {
    n[je] = void 0;
    var r = !0;
  } catch (o) {
  }
  var a = ua.call(n);
  return r && (e ? n[je] = t : delete n[je]), a;
}
var ha = ga, va = Object.prototype, fa = va.toString;
function ya(n) {
  return fa.call(n);
}
var ma = ya, Nt = ir, pa = ha, ba = ma, Ca = "[object Null]", ka = "[object Undefined]", It = Nt ? Nt.toStringTag : void 0;
function xa(n) {
  return n == null ? n === void 0 ? ka : Ca : It && It in Object(n) ? pa(n) : ba(n);
}
var Ta = xa;
function wa(n) {
  return n != null && typeof n == "object";
}
var Sa = wa, Da = Ta, $a = Sa, Ha = "[object Symbol]";
function Pa(n) {
  return typeof n == "symbol" || $a(n) && Da(n) == Ha;
}
var Ma = Pa, ja = la, zt = lt, Ea = Ma, Vt = 0 / 0, La = /^[-+]0x[0-9a-f]+$/i, Ba = /^0b[01]+$/i, Wa = /^0o[0-7]+$/i, Fa = parseInt;
function Oa(n) {
  if (typeof n == "number")
    return n;
  if (Ea(n))
    return Vt;
  if (zt(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = zt(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = ja(n);
  var t = Ba.test(n);
  return t || Wa.test(n) ? Fa(n.slice(2), t ? 2 : 8) : La.test(n) ? Vt : +n;
}
var Ra = Oa, Na = lt, rt = ea, Yt = Ra, Ia = "Expected a function", za = Math.max, Va = Math.min;
function Ya(n, e, t) {
  var r, a, o, i, l, s, c = 0, d = !1, h = !1, f = !0;
  if (typeof n != "function")
    throw new TypeError(Ia);
  e = Yt(e) || 0, Na(t) && (d = !!t.leading, h = "maxWait" in t, o = h ? za(Yt(t.maxWait) || 0, e) : o, f = "trailing" in t ? !!t.trailing : f);
  function x($) {
    var E = r, T = a;
    return r = a = void 0, c = $, i = n.apply(T, E), i;
  }
  function w($) {
    return c = $, l = setTimeout(C, e), d ? x($) : i;
  }
  function D($) {
    var E = $ - s, T = $ - c, y = e - E;
    return h ? Va(y, o - T) : y;
  }
  function k($) {
    var E = $ - s, T = $ - c;
    return s === void 0 || E >= e || E < 0 || h && T >= o;
  }
  function C() {
    var $ = rt();
    if (k($))
      return v($);
    l = setTimeout(C, D($));
  }
  function v($) {
    return l = void 0, f && r ? x($) : (r = a = void 0, i);
  }
  function g() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = a = l = void 0;
  }
  function b() {
    return l === void 0 ? i : v(rt());
  }
  function M() {
    var $ = rt(), E = k($);
    if (r = arguments, a = this, s = $, E) {
      if (l === void 0)
        return w(s);
      if (h)
        return clearTimeout(l), l = setTimeout(C, e), x(s);
    }
    return l === void 0 && (l = setTimeout(C, e)), i;
  }
  return M.cancel = g, M.flush = b, M;
}
var sr = Ya;
const Aa = /* @__PURE__ */ nr(sr);
var Xa = sr, Ga = lt, Ua = "Expected a function";
function Ka(n, e, t) {
  var r = !0, a = !0;
  if (typeof n != "function")
    throw new TypeError(Ua);
  return Ga(t) && (r = "leading" in t ? !!t.leading : r, a = "trailing" in t ? !!t.trailing : a), Xa(n, e, {
    leading: r,
    maxWait: e,
    trailing: a
  });
}
var Qa = Ka;
const Ja = /* @__PURE__ */ nr(Qa), Za = (n, e, t, r) => {
  switch (e) {
    case "debounce":
      return Aa(n, t, r);
    case "throttle":
      return Ja(n, t, r);
    default:
      return n;
  }
};
function qa({ skipOnMount: n = !1, refreshMode: e, refreshRate: t = 1e3, refreshOptions: r, handleWidth: a = !0, handleHeight: o = !0, targetRef: i, observerOptions: l, onResize: s } = {}) {
  const c = $react.useRef(n), [d, h] = $react.useState({
    width: void 0,
    height: void 0
  }), [f, x] = $react.useState((i == null ? void 0 : i.current) || null);
  i && setTimeout(() => {
    i.current !== f && x(i.current);
  }, 0);
  const w = $react.useMemo(() => new Proxy((v) => {
    v !== f && x(v);
  }, {
    get(v, g) {
      return g === "current" ? f : v[g];
    },
    set(v, g, b) {
      return g === "current" ? x(b) : v[g] = b, !0;
    }
  }), [f]), D = $react.useCallback((v, g) => !(v.width === g.width && v.height === g.height || v.width === g.width && !o || v.height === g.height && !a), [a, o]), k = $react.useCallback((v) => {
    if (!(!a && !o)) {
      if (c.current) {
        c.current = !1;
        return;
      }
      v.forEach((g) => {
        const { width: b, height: M } = (g == null ? void 0 : g.contentRect) || {};
        h(($) => D($, { width: b, height: M }) ? { width: b, height: M } : $);
      });
    }
  }, [a, o, c, D]), C = $react.useCallback(Za(k, e, t, r), [
    k,
    e,
    t,
    r
  ]);
  return $react.useEffect(() => {
    let v;
    return f ? (v = new window.ResizeObserver(C), v.observe(f, l)) : (d.width || d.height) && h({ width: void 0, height: void 0 }), () => {
      var g, b, M;
      (g = v == null ? void 0 : v.disconnect) === null || g === void 0 || g.call(v), (M = (b = C).cancel) === null || M === void 0 || M.call(b);
    };
  }, [C, f]), $react.useEffect(() => {
    s == null || s(d.width, d.height);
  }, [d]), Object.assign({ ref: w }, d);
}
var dr = { exports: {} }, qe = {};
const _a = $react;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en = _a, tn = Symbol.for("react.element"), rn = Symbol.for("react.fragment"), an = Object.prototype.hasOwnProperty, nn = en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, on = { key: !0, ref: !0, __self: !0, __source: !0 };
function cr(n, e, t) {
  var r, a = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (r in e)
    an.call(e, r) && !on.hasOwnProperty(r) && (a[r] = e[r]);
  if (n && n.defaultProps)
    for (r in e = n.defaultProps, e)
      a[r] === void 0 && (a[r] = e[r]);
  return { $$typeof: tn, type: n, key: o, ref: i, props: a, _owner: nn.current };
}
qe.Fragment = rn;
qe.jsx = cr;
qe.jsxs = cr;
dr.exports = qe;
var st = dr.exports;
const ot = st.Fragment, u = st.jsx, O = st.jsxs;
function ne() {
  return ne = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, ne.apply(this, arguments);
}
function ln(n, e) {
  if (n) {
    if (typeof n == "string")
      return At(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return At(n, e);
  }
}
function At(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ur(n, e) {
  var t = typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
  if (t)
    return (t = t.call(n)).next.bind(t);
  if (Array.isArray(n) || (t = ln(n)) || e && n && typeof n.length == "number") {
    t && (n = t);
    var r = 0;
    return function() {
      return r >= n.length ? {
        done: !0
      } : {
        done: !1,
        value: n[r++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var j;
(function(n) {
  n.Hour = "Hour", n.QuarterDay = "Quarter Day", n.HalfDay = "Half Day", n.Day = "Day", n.Week = "Week", n.Month = "Month", n.Year = "Year";
})(j || (j = {}));
var Xt = {}, Qe = function(e, t) {
  t === void 0 && (t = {});
  var r = JSON.stringify([e, t]), a = Xt[r];
  return a || (a = new Intl.DateTimeFormat(e, t), Xt[r] = a), a;
}, V = function(e, t, r) {
  var a = new Date(e.getFullYear() + (r === "year" ? t : 0), e.getMonth() + (r === "month" ? t : 0), e.getDate() + (r === "day" ? t : 0), e.getHours() + (r === "hour" ? t : 0), e.getMinutes() + (r === "minute" ? t : 0), e.getSeconds() + (r === "second" ? t : 0), e.getMilliseconds() + (r === "millisecond" ? t : 0));
  return a;
}, J = function(e, t) {
  var r = ["millisecond", "second", "minute", "hour", "day", "month", "year"], a = function(l) {
    var s = r.indexOf(t);
    return r.indexOf(l) <= s;
  }, o = new Date(e.getFullYear(), a("year") ? 0 : e.getMonth(), a("month") ? 1 : e.getDate(), a("day") ? 0 : e.getHours(), a("hour") ? 0 : e.getMinutes(), a("minute") ? 0 : e.getSeconds(), a("second") ? 0 : e.getMilliseconds());
  return o;
}, Gt = function(e, t, r) {
  for (var a = e[0].start, o = e[0].start, i = ur(e), l; !(l = i()).done; ) {
    var s = l.value;
    s.start < a && (a = s.start), s.end > o && (o = s.end);
  }
  switch (t) {
    case j.Year:
      a = V(a, -1, "year"), a = J(a, "year"), o = V(o, 1, "year"), o = J(o, "year");
      break;
    case j.Month:
      a = V(a, -1 * r, "month"), a = J(a, "month"), o = V(o, 1, "year"), o = J(o, "year");
      break;
    case j.Week:
      a = J(a, "day"), a = V(sn(a), -7 * r, "day"), o = J(o, "day"), o = V(o, 1.5, "month");
      break;
    case j.Day:
      a = J(a, "day"), a = V(a, -1 * r, "day"), o = J(o, "day"), o = V(o, 19, "day");
      break;
    case j.QuarterDay:
      a = J(a, "day"), a = V(a, -1 * r, "day"), o = J(o, "day"), o = V(o, 66, "hour");
      break;
    case j.HalfDay:
      a = J(a, "day"), a = V(a, -1 * r, "day"), o = J(o, "day"), o = V(o, 108, "hour");
      break;
    case j.Hour:
      a = J(a, "hour"), a = V(a, -1 * r, "hour"), o = J(o, "day"), o = V(o, 1, "day");
      break;
  }
  return [a, o];
}, Ut = function(e, t, r) {
  for (var a = new Date(e), o = [a]; a < t; ) {
    switch (r) {
      case j.Year:
        a = V(a, 1, "year");
        break;
      case j.Month:
        a = V(a, 1, "month");
        break;
      case j.Week:
        a = V(a, 7, "day");
        break;
      case j.Day:
        a = V(a, 1, "day");
        break;
      case j.HalfDay:
        a = V(a, 12, "hour");
        break;
      case j.QuarterDay:
        a = V(a, 6, "hour");
        break;
      case j.Hour:
        a = V(a, 1, "hour");
        break;
    }
    o.push(a);
  }
  return o;
}, Ee = function(e, t) {
  var r = Qe(t, {
    month: "long"
  }).format(e);
  return r = r.replace(r[0], r[0].toLocaleUpperCase()), r;
}, at = function(e, t, r) {
  var a = Qe(t, {
    weekday: r
  }).format(e);
  return a = a.replace(a[0], a[0].toLocaleUpperCase()), a;
}, sn = function(e) {
  var t = e.getDay(), r = e.getDate() - t + (t === 0 ? -6 : 1);
  return new Date(e.setDate(r));
}, dn = function(e) {
  var t = new Date(e.valueOf()), r = (t.getDay() + 6) % 7;
  t.setDate(t.getDate() - r + 3);
  var a = t.valueOf();
  t.setMonth(0, 1), t.getDay() !== 4 && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7);
  var o = (1 + Math.ceil((a - t.valueOf()) / 6048e5)).toString();
  return o.length === 1 ? "0" + o : o;
}, cn = function(e, t) {
  return new Date(t, e + 1, 0).getDate();
}, Ce = {
  ganttTable: "_3_ygE",
  ganttTable_Header: "_1nBOt",
  ganttTable_HeaderSeparator: "_2eZzQ",
  ganttTable_HeaderItem: "_WuQ0f"
}, un = function(e) {
  var t = e.headerHeight, r = e.fontFamily, a = e.fontSize, o = e.rowWidth;
  return /* @__PURE__ */ u("div", {
    className: Ce.ganttTable,
    style: {
      fontFamily: r,
      fontSize: a
    },
    children: /* @__PURE__ */ O("div", {
      className: Ce.ganttTable_Header,
      style: {
        height: t - 2
      },
      children: [/* @__PURE__ */ u("div", {
        className: Ce.ganttTable_HeaderItem,
        style: {
          minWidth: o
        },
        children: " Name"
      }), /* @__PURE__ */ u("div", {
        className: Ce.ganttTable_HeaderSeparator,
        style: {
          height: t * 0.5,
          marginTop: t * 0.2
        }
      }), /* @__PURE__ */ u("div", {
        className: Ce.ganttTable_HeaderItem,
        style: {
          minWidth: o
        },
        children: " From"
      }), /* @__PURE__ */ u("div", {
        className: Ce.ganttTable_HeaderSeparator,
        style: {
          height: t * 0.5,
          marginTop: t * 0.25
        }
      }), /* @__PURE__ */ u("div", {
        className: Ce.ganttTable_HeaderItem,
        style: {
          minWidth: o
        },
        children: " To"
      })]
    })
  });
}, fe = {
  taskListWrapper: "_3ZbQT",
  taskListTableRow: "_34SS0",
  taskListCell: "_3lLk3",
  taskListNameWrapper: "_nI1Xw",
  taskListExpander: "_2QjE6",
  taskListEmptyExpander: "_2TfEi"
}, Kt = {}, gn = function(e) {
  return function(t, r) {
    var a = t.toString(), o = Kt[a];
    return o || (o = t.toLocaleDateString(e, r), Kt[a] = o), o;
  };
}, Qt = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric"
}, hn = function(e) {
  var t = e.rowHeight, r = e.rowWidth, a = e.tasks, o = e.fontFamily, i = e.fontSize, l = e.locale, s = e.onExpanderClick, c = $react.useMemo(function() {
    return gn(l);
  }, [l]);
  return /* @__PURE__ */ u("div", {
    className: fe.taskListWrapper,
    style: {
      fontFamily: o,
      fontSize: i
    },
    children: a.map(function(d) {
      var h = "";
      return d.hideChildren === !1 ? h = "▼" : d.hideChildren === !0 && (h = "▶"), /* @__PURE__ */ O("div", {
        className: fe.taskListTableRow,
        style: {
          height: t
        },
        children: [/* @__PURE__ */ u("div", {
          className: fe.taskListCell,
          style: {
            minWidth: r,
            maxWidth: r
          },
          title: d.name,
          children: /* @__PURE__ */ O("div", {
            className: fe.taskListNameWrapper,
            children: [/* @__PURE__ */ u("div", {
              className: h ? fe.taskListExpander : fe.taskListEmptyExpander,
              onClick: function() {
                return s(d);
              },
              children: h
            }), /* @__PURE__ */ u("div", {
              children: d.name
            })]
          })
        }), /* @__PURE__ */ O("div", {
          className: fe.taskListCell,
          style: {
            minWidth: r,
            maxWidth: r
          },
          children: [" ", c(d.start, Qt)]
        }), /* @__PURE__ */ O("div", {
          className: fe.taskListCell,
          style: {
            minWidth: r,
            maxWidth: r
          },
          children: [" ", c(d.end, Qt)]
        })]
      }, d.id + "row");
    })
  });
}, We = {
  tooltipDefaultContainer: "_3T42e",
  tooltipDefaultContainerParagraph: "_29NTg",
  tooltipDetailsContainer: "_25P-K",
  tooltipDetailsContainerHidden: "_3gVAq"
}, vn = function(e) {
  var t = e.task, r = e.rowHeight, a = e.rtl, o = e.svgContainerHeight, i = e.svgContainerWidth, l = e.scrollX, s = e.scrollY, c = e.arrowIndent, d = e.fontSize, h = e.fontFamily, f = e.headerHeight, x = e.taskListWidth, w = e.TooltipContent, D = $react.useRef(null), k = $react.useState(0), C = k[0], v = k[1], g = $react.useState(0), b = g[0], M = g[1];
  return $react.useEffect(function() {
    if (D.current) {
      var $ = D.current.offsetHeight * 1.1, E = D.current.offsetWidth * 1.1, T = t.index * r - s + f, y;
      if (a) {
        y = t.x1 - c * 1.5 - E - l, y < 0 && (y = t.x2 + c * 1.5 - l);
        var P = E + y;
        P > i && (y = i - E, T += r);
      } else {
        y = t.x2 + c * 1.5 + x - l;
        var H = E + y, S = x + i;
        H > S && (y = t.x1 + x - c * 1.5 - l - E), y < x && (y = i + x - E, T += r);
      }
      var p = $ + T - s;
      p > o - s && (T = o - $), v(T), M(y);
    }
  }, [D, t, c, l, s, f, x, r, o, i, a]), /* @__PURE__ */ u("div", {
    ref: D,
    className: b ? We.tooltipDetailsContainer : We.tooltipDetailsContainerHidden,
    style: {
      left: b,
      top: C
    },
    children: /* @__PURE__ */ u(w, {
      task: t,
      fontSize: d,
      fontFamily: h
    })
  });
}, fn = function(e) {
  var t = e.task, r = e.fontSize, a = e.fontFamily, o = {
    fontSize: r,
    fontFamily: a
  };
  return /* @__PURE__ */ O("div", {
    className: We.tooltipDefaultContainer,
    style: o,
    children: [/* @__PURE__ */ u("b", {
      style: {
        fontSize: r + 6
      },
      children: t.name + ": " + t.start.getDate() + "-" + (t.start.getMonth() + 1) + "-" + t.start.getFullYear() + " - " + t.end.getDate() + "-" + (t.end.getMonth() + 1) + "-" + t.end.getFullYear()
    }), t.end.getTime() - t.start.getTime() !== 0 && /* @__PURE__ */ u("p", {
      className: We.tooltipDefaultContainerParagraph,
      children: "Duration: " + ~~((t.end.getTime() - t.start.getTime()) / (1e3 * 60 * 60 * 24)) + " day(s)"
    }), /* @__PURE__ */ u("p", {
      className: We.tooltipDefaultContainerParagraph,
      children: !!t.progress && "Progress: " + t.progress + " %"
    })]
  });
}, yn = {
  scroll: "_1eT-t"
}, mn = function(e) {
  var t = e.scroll, r = e.ganttHeight, a = e.ganttFullHeight, o = e.headerHeight, i = e.rtl, l = e.onScroll, s = $react.useRef(null);
  return $react.useEffect(function() {
    s.current && (s.current.scrollTop = t);
  }, [t]), /* @__PURE__ */ u("div", {
    style: {
      height: r,
      marginTop: o,
      marginLeft: i ? "" : "-1rem"
    },
    className: yn.scroll,
    onScroll: l,
    ref: s,
    children: /* @__PURE__ */ u("div", {
      style: {
        height: a,
        width: 1
      }
    })
  });
}, pn = function(e) {
  var t = e.headerHeight, r = e.fontFamily, a = e.fontSize, o = e.rowWidth, i = e.rowHeight, l = e.scrollY, s = e.tasks, c = e.selectedTask, d = e.setSelectedTask, h = e.onExpanderClick, f = e.locale, x = e.ganttHeight, w = e.taskListRef, D = e.horizontalContainerClass, k = e.TaskListHeader, C = e.TaskListTable, v = $react.useRef(null);
  $react.useEffect(function() {
    v.current && (v.current.scrollTop = l);
  }, [l]);
  var g = {
    headerHeight: t,
    fontFamily: r,
    fontSize: a,
    rowWidth: o
  }, b = c ? c.id : "", M = {
    rowHeight: i,
    rowWidth: o,
    fontFamily: r,
    fontSize: a,
    tasks: s,
    locale: f,
    selectedTaskId: b,
    setSelectedTask: d,
    onExpanderClick: h
  };
  return /* @__PURE__ */ O("div", {
    ref: w,
    children: [/* @__PURE__ */ u(k, q({}, Object.assign({}, g))), /* @__PURE__ */ u("div", {
      ref: v,
      className: D,
      style: x ? {
        height: x
      } : {},
      children: /* @__PURE__ */ u(C, q({}, Object.assign({}, M)))
    })]
  });
}, Ke = {
  gridRow: "_2dZTy",
  gridRowLine: "_3rUKi",
  gridTick: "_RuwuK"
}, bn = function(e) {
  for (var t = e.tasks, r = e.dates, a = e.rowHeight, o = e.svgWidth, i = e.columnWidth, l = e.todayColor, s = e.rtl, c = 0, d = [], h = [/* @__PURE__ */ u("line", {
    x: "0",
    y1: 0,
    x2: o,
    y2: 0,
    className: Ke.gridRowLine
  }, "RowLineFirst")], f = ur(t), x; !(x = f()).done; ) {
    var w = x.value;
    d.push(/* @__PURE__ */ u("rect", {
      x: "0",
      y: c,
      width: o,
      height: a,
      className: Ke.gridRow
    }, "Row" + w.id)), h.push(/* @__PURE__ */ u("line", {
      x: "0",
      y1: c + a,
      x2: o,
      y2: c + a,
      className: Ke.gridRowLine
    }, "RowLine" + w.id)), c += a;
  }
  for (var D = /* @__PURE__ */ new Date(), k = 0, C = [], v = /* @__PURE__ */ u("rect", {}), g = 0; g < r.length; g++) {
    var b = r[g];
    C.push(/* @__PURE__ */ u("line", {
      x1: k,
      y1: 0,
      x2: k,
      y2: c,
      className: Ke.gridTick
    }, b.getTime())), (g + 1 !== r.length && b.getTime() < D.getTime() && r[g + 1].getTime() >= D.getTime() || g !== 0 && g + 1 === r.length && b.getTime() < D.getTime() && V(b, b.getTime() - r[g - 1].getTime(), "millisecond").getTime() >= D.getTime()) && (v = /* @__PURE__ */ u("rect", {
      x: k,
      y: 0,
      width: i,
      height: c,
      fill: l
    })), s && g + 1 !== r.length && b.getTime() >= D.getTime() && r[g + 1].getTime() < D.getTime() && (v = /* @__PURE__ */ u("rect", {
      x: k + i,
      y: 0,
      width: i,
      height: c,
      fill: l
    })), k += i;
  }
  return /* @__PURE__ */ O("g", {
    className: "gridBody",
    children: [/* @__PURE__ */ u("g", {
      className: "rows",
      children: d
    }), /* @__PURE__ */ u("g", {
      className: "rowLines",
      children: h
    }), /* @__PURE__ */ u("g", {
      className: "ticks",
      children: C
    }), /* @__PURE__ */ u("g", {
      className: "today",
      children: v
    })]
  });
}, Cn = function(e) {
  return /* @__PURE__ */ u("g", {
    className: "grid",
    children: /* @__PURE__ */ u(bn, q({}, Object.assign({}, e)))
  });
}, ue = {
  calendarBottomText: "_9w8d5",
  calendarTopTick: "_1rLuZ",
  calendarTopText: "_2q1Kt",
  calendarHeader: "_35nLX"
}, $e = function(e) {
  var t = e.value, r = e.x1Line, a = e.y1Line, o = e.y2Line, i = e.xText, l = e.yText;
  return /* @__PURE__ */ O("g", {
    className: "calendarTop",
    children: [/* @__PURE__ */ u("line", {
      x1: r,
      y1: a,
      x2: r,
      y2: o,
      className: ue.calendarTopTick
    }, t + "line"), /* @__PURE__ */ u("text", {
      y: l,
      x: i,
      className: ue.calendarTopText,
      children: t
    }, t + "text")]
  });
}, kn = function(e) {
  var t = e.dateSetup, r = e.locale, a = e.viewMode, o = e.rtl, i = e.headerHeight, l = e.columnWidth, s = e.fontFamily, c = e.fontSize, d = function() {
    for (var y = [], P = [], H = i * 0.5, S = 0; S < t.dates.length; S++) {
      var p = t.dates[S], m = p.getFullYear();
      if (P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * S + l * 0.5,
        className: ue.calendarBottomText,
        children: m
      }, p.getFullYear())), S === 0 || p.getFullYear() !== t.dates[S - 1].getFullYear()) {
        var W = p.getFullYear().toString(), R = void 0;
        o ? R = (6 + S + p.getFullYear() + 1) * l : R = (6 + S - p.getFullYear()) * l, y.push(/* @__PURE__ */ u($e, {
          value: W,
          x1Line: l * S,
          y1Line: 0,
          y2Line: i,
          xText: R,
          yText: H * 0.9
        }, W));
      }
    }
    return [y, P];
  }, h = function() {
    for (var y = [], P = [], H = i * 0.5, S = 0; S < t.dates.length; S++) {
      var p = t.dates[S], m = Ee(p, r);
      if (P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * S + l * 0.5,
        className: ue.calendarBottomText,
        children: m
      }, m + p.getFullYear())), S === 0 || p.getFullYear() !== t.dates[S - 1].getFullYear()) {
        var W = p.getFullYear().toString(), R = void 0;
        o ? R = (6 + S + p.getMonth() + 1) * l : R = (6 + S - p.getMonth()) * l, y.push(/* @__PURE__ */ u($e, {
          value: W,
          x1Line: l * S,
          y1Line: 0,
          y2Line: H,
          xText: R,
          yText: H * 0.9
        }, W));
      }
    }
    return [y, P];
  }, f = function() {
    for (var y = [], P = [], H = 1, S = i * 0.5, p = t.dates, m = p.length - 1; m >= 0; m--) {
      var W = p[m], R = "";
      (m === 0 || W.getMonth() !== p[m - 1].getMonth()) && (R = Ee(W, r) + ", " + W.getFullYear());
      var Z = "W" + dn(W);
      P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * (m + +o),
        className: ue.calendarBottomText,
        children: Z
      }, W.getTime())), R && (m !== p.length - 1 && y.push(/* @__PURE__ */ u($e, {
        value: R,
        x1Line: l * m + H * l,
        y1Line: 0,
        y2Line: S,
        xText: l * m + l * H * 0.5,
        yText: S * 0.9
      }, R)), H = 0), H++;
    }
    return [y, P];
  }, x = function() {
    for (var y = [], P = [], H = i * 0.5, S = t.dates, p = 0; p < S.length; p++) {
      var m = S[p], W = at(m, r, "short") + ", " + m.getDate().toString();
      if (P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * p + l * 0.5,
        className: ue.calendarBottomText,
        children: W
      }, m.getTime())), p + 1 !== S.length && m.getMonth() !== S[p + 1].getMonth()) {
        var R = Ee(m, r);
        y.push(/* @__PURE__ */ u($e, {
          value: R,
          x1Line: l * (p + 1),
          y1Line: 0,
          y2Line: H,
          xText: l * (p + 1) - cn(m.getMonth(), m.getFullYear()) * l * 0.5,
          yText: H * 0.9
        }, R + m.getFullYear()));
      }
    }
    return [y, P];
  }, w = function() {
    for (var y = [], P = [], H = a === j.HalfDay ? 2 : 4, S = i * 0.5, p = t.dates, m = 0; m < p.length; m++) {
      var W = p[m], R = Qe(r, {
        hour: "numeric"
      }).format(W);
      if (P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * (m + +o),
        className: ue.calendarBottomText,
        fontFamily: s,
        children: R
      }, W.getTime())), m === 0 || W.getDate() !== p[m - 1].getDate()) {
        var Z = at(W, r, "short") + ", " + W.getDate() + " " + Ee(W, r);
        y.push(/* @__PURE__ */ u($e, {
          value: Z,
          x1Line: l * m + H * l,
          y1Line: 0,
          y2Line: S,
          xText: l * m + H * l * 0.5,
          yText: S * 0.9
        }, Z + W.getFullYear()));
      }
    }
    return [y, P];
  }, D = function() {
    for (var y = [], P = [], H = i * 0.5, S = t.dates, p = 0; p < S.length; p++) {
      var m = S[p], W = Qe(r, {
        hour: "numeric"
      }).format(m);
      if (P.push(/* @__PURE__ */ u("text", {
        y: i * 0.8,
        x: l * (p + +o),
        className: ue.calendarBottomText,
        fontFamily: s,
        children: W
      }, m.getTime())), p !== 0 && m.getDate() !== S[p - 1].getDate()) {
        var R = S[p - 1], Z = at(R, r, "long") + ", " + R.getDate() + " " + Ee(R, r), ye = (m.getHours() - 24) / 2;
        y.push(/* @__PURE__ */ u($e, {
          value: Z,
          x1Line: l * p,
          y1Line: 0,
          y2Line: H,
          xText: l * (p + ye),
          yText: H * 0.9
        }, Z + R.getFullYear()));
      }
    }
    return [y, P];
  }, k = [], C = [];
  switch (t.viewMode) {
    case j.Year:
      var v = d();
      k = v[0], C = v[1];
      break;
    case j.Month:
      var g = h();
      k = g[0], C = g[1];
      break;
    case j.Week:
      var b = f();
      k = b[0], C = b[1];
      break;
    case j.Day:
      var M = x();
      k = M[0], C = M[1];
      break;
    case j.QuarterDay:
    case j.HalfDay:
      var $ = w();
      k = $[0], C = $[1];
      break;
    case j.Hour:
      var E = D();
      k = E[0], C = E[1];
  }
  return /* @__PURE__ */ O("g", {
    className: "calendar",
    fontSize: c,
    fontFamily: s,
    children: [/* @__PURE__ */ u("rect", {
      x: 0,
      y: 0,
      width: l * t.dates.length,
      height: i,
      className: ue.calendarHeader
    }), C, " ", k]
  });
};
typeof Symbol != "undefined" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol != "undefined" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function nt(n, e) {
  try {
    var t = n();
  } catch (r) {
    return e(r);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
var xn = function(e) {
  var t = e.taskFrom, r = e.taskTo, a = e.rowHeight, o = e.taskHeight, i = e.arrowIndent, l = e.rtl, s, c;
  if (l) {
    var d = wn(t, r, a, o, i);
    s = d[0], c = d[1];
  } else {
    var h = Tn(t, r, a, o, i);
    s = h[0], c = h[1];
  }
  return /* @__PURE__ */ O("g", {
    className: "arrow",
    children: [/* @__PURE__ */ u("path", {
      strokeWidth: "1.5",
      d: s,
      fill: "none"
    }), /* @__PURE__ */ u("polygon", {
      points: c
    })]
  });
}, Tn = function(e, t, r, a, o) {
  var i = e.index > t.index ? -1 : 1, l = t.y + a / 2, s = e.x2 + o * 2, c = s < t.x1 ? "" : "H " + (t.x1 - o), d = s > t.x1 ? o : t.x1 - e.x2 - o, h = "M " + e.x2 + " " + (e.y + a / 2) + ` 
  h ` + o + ` 
  v ` + i * r / 2 + ` 
  ` + c + `
  V ` + l + ` 
  h ` + d, f = t.x1 + "," + l + ` 
  ` + (t.x1 - 5) + "," + (l - 5) + ` 
  ` + (t.x1 - 5) + "," + (l + 5);
  return [h, f];
}, wn = function(e, t, r, a, o) {
  var i = e.index > t.index ? -1 : 1, l = t.y + a / 2, s = e.x1 - o * 2, c = s > t.x2 ? "" : "H " + (t.x2 + o), d = s < t.x2 ? -o : t.x2 - e.x1 + o, h = "M " + e.x1 + " " + (e.y + a / 2) + ` 
  h ` + -o + ` 
  v ` + i * r / 2 + ` 
  ` + c + `
  V ` + l + ` 
  h ` + d, f = t.x2 + "," + l + ` 
  ` + (t.x2 + 5) + "," + (l + 5) + ` 
  ` + (t.x2 + 5) + "," + (l - 5);
  return [h, f];
}, Sn = function(e, t, r, a, o, i, l, s, c, d, h, f, x, w, D, k, C, v) {
  var g = e.map(function(b, M) {
    return Dn(b, M, t, r, a, o, i, l, s, c, d, h, f, x, w, D, k, C, v);
  });
  return g = g.map(function(b) {
    for (var M = b.dependencies || [], $ = function(y) {
      var P = g.findIndex(function(H) {
        return H.id === M[y];
      });
      P !== -1 && g[P].barChildren.push(b);
    }, E = 0; E < M.length; E++)
      $(E);
    return b;
  }), g;
}, Dn = function(e, t, r, a, o, i, l, s, c, d, h, f, x, w, D, k, C, v, g) {
  var b;
  switch (e.type) {
    case "milestone":
      b = $n(e, t, r, a, o, i, l, s, v, g);
      break;
    case "project":
      b = Jt(e, t, r, a, o, i, l, s, c, w, D, k, C);
      break;
    default:
      b = Jt(e, t, r, a, o, i, l, s, c, d, h, f, x);
      break;
  }
  return b;
}, Jt = function(e, t, r, a, o, i, l, s, c, d, h, f, x) {
  var w, D;
  c ? (D = Zt(e.start, r, a), w = Zt(e.end, r, a)) : (w = Je(e.start, r, a), D = Je(e.end, r, a));
  var k = e.type;
  k === "task" && D - w < s * 2 && (k = "smalltask", D = w + s * 2);
  var C = Be(w, D, e.progress, c), v = C[0], g = C[1], b = gr(t, o, i), M = e.type === "project" ? e.hideChildren : void 0, $ = ne({
    backgroundColor: f,
    backgroundSelectedColor: x,
    progressColor: d,
    progressSelectedColor: h
  }, e.styles);
  return ne({}, e, {
    typeInternal: k,
    x1: w,
    x2: D,
    y: b,
    index: t,
    progressX: g,
    progressWidth: v,
    barCornerRadius: l,
    handleWidth: s,
    hideChildren: M,
    height: i,
    barChildren: [],
    styles: $
  });
}, $n = function(e, t, r, a, o, i, l, s, c, d) {
  var h = Je(e.start, r, a), f = gr(t, o, i), x = h - i * 0.5, w = h + i * 0.5, D = i / 1.414, k = ne({
    backgroundColor: c,
    backgroundSelectedColor: d,
    progressColor: "",
    progressSelectedColor: ""
  }, e.styles);
  return ne({}, e, {
    end: e.start,
    x1: x,
    x2: w,
    y: f,
    index: t,
    progressX: 0,
    progressWidth: 0,
    barCornerRadius: l,
    handleWidth: s,
    typeInternal: e.type,
    progress: 0,
    height: D,
    hideChildren: void 0,
    barChildren: [],
    styles: k
  });
}, Je = function(e, t, r) {
  var a = t.findIndex(function(s) {
    return s.getTime() >= e.getTime();
  }) - 1, o = e.getTime() - t[a].getTime(), i = o / (t[a + 1].getTime() - t[a].getTime()), l = a * r + i * r;
  return l;
}, Zt = function(e, t, r) {
  var a = Je(e, t, r);
  return a += r, a;
}, gr = function(e, t, r) {
  var a = e * t + (t - r) / 2;
  return a;
}, Be = function(e, t, r, a) {
  var o = (t - e) * r * 0.01, i;
  return a ? i = t - o : i = e, [o, i];
}, Hn = function(e, t) {
  if (e >= t.x2)
    return 100;
  if (e <= t.x1)
    return 0;
  var r = t.x2 - t.x1, a = Math.round((e - t.x1) * 100 / r);
  return a;
}, Pn = function(e, t) {
  if (e >= t.x2)
    return 0;
  if (e <= t.x1)
    return 100;
  var r = t.x2 - t.x1, a = Math.round((t.x2 - e) * 100 / r);
  return a;
}, hr = function(e, t, r) {
  var a = [e - 5, t + r, e + 5, t + r, e, t + r - 8.66];
  return a.join(",");
}, Mn = function(e, t, r) {
  e >= r.x2 - r.handleWidth * 2 && (e = r.x2 - r.handleWidth * 2);
  var a = Math.round((e - r.x1) / t), o = a * t, i = r.x1 + o;
  return i;
}, jn = function(e, t, r) {
  e <= r.x1 + r.handleWidth * 2 && (e = r.x1 + r.handleWidth * 2);
  var a = Math.round((e - r.x2) / t), o = a * t, i = r.x2 + o;
  return i;
}, vr = function(e, t, r) {
  var a = Math.round((e - r.x1) / t), o = a * t, i = r.x1 + o, l = i + r.x2 - r.x1;
  return [i, l];
}, ke = function(e, t, r, a, o) {
  var i = new Date((e - t) / a * o + r.getTime());
  return i = new Date(i.getTime() + (i.getTimezoneOffset() - r.getTimezoneOffset()) * 6e4), i;
}, qt = function(e, t, r, a, o, i, l) {
  var s;
  switch (r.type) {
    case "milestone":
      s = Ln(e, t, r, a, o, i);
      break;
    default:
      s = En(e, t, r, a, o, i, l);
      break;
  }
  return s;
}, En = function(e, t, r, a, o, i, l) {
  var s = ne({}, r), c = !1;
  switch (t) {
    case "progress":
      if (l ? s.progress = Pn(e, r) : s.progress = Hn(e, r), c = s.progress !== r.progress, c) {
        var d = Be(s.x1, s.x2, s.progress, l), h = d[0], f = d[1];
        s.progressWidth = h, s.progressX = f;
      }
      break;
    case "start": {
      var x = Mn(e, a, r);
      if (s.x1 = x, c = s.x1 !== r.x1, c) {
        l ? s.end = ke(x, r.x1, r.end, a, o) : s.start = ke(x, r.x1, r.start, a, o);
        var w = Be(s.x1, s.x2, s.progress, l), D = w[0], k = w[1];
        s.progressWidth = D, s.progressX = k;
      }
      break;
    }
    case "end": {
      var C = jn(e, a, r);
      if (s.x2 = C, c = s.x2 !== r.x2, c) {
        l ? s.start = ke(C, r.x2, r.start, a, o) : s.end = ke(C, r.x2, r.end, a, o);
        var v = Be(s.x1, s.x2, s.progress, l), g = v[0], b = v[1];
        s.progressWidth = g, s.progressX = b;
      }
      break;
    }
    case "move": {
      var M = vr(e - i, a, r), $ = M[0], E = M[1];
      if (c = $ !== r.x1, c) {
        s.start = ke($, r.x1, r.start, a, o), s.end = ke(E, r.x2, r.end, a, o), s.x1 = $, s.x2 = E;
        var T = Be(s.x1, s.x2, s.progress, l), y = T[0], P = T[1];
        s.progressWidth = y, s.progressX = P;
      }
      break;
    }
  }
  return {
    isChanged: c,
    changedTask: s
  };
}, Ln = function(e, t, r, a, o, i) {
  var l = ne({}, r), s = !1;
  switch (t) {
    case "move": {
      var c = vr(e - i, a, r), d = c[0], h = c[1];
      s = d !== r.x1, s && (l.start = ke(d, r.x1, r.start, a, o), l.end = l.start, l.x1 = d, l.x2 = h);
      break;
    }
  }
  return {
    isChanged: s,
    changedTask: l
  };
};
function Bn(n) {
  return n.key !== void 0;
}
function Wn(n) {
  var e = n.filter(function(a) {
    return a.hideChildren && a.type === "project";
  });
  if (e.length > 0)
    for (var t = function(o) {
      var i = e[o], l = fr(n, i);
      n = n.filter(function(s) {
        return l.indexOf(s) === -1;
      });
    }, r = 0; e.length > r; r++)
      t(r);
  return n;
}
function fr(n, e) {
  var t = [];
  e.type !== "project" ? t = n.filter(function(a) {
    return a.dependencies && a.dependencies.indexOf(e.id) !== -1;
  }) : t = n.filter(function(a) {
    return a.project && a.project === e.id;
  });
  var r = [];
  return t.forEach(function(a) {
    r.push.apply(r, fr(n, a));
  }), t = t.concat(t, r), t;
}
var Fn = function(e, t) {
  var r = e.displayOrder || Number.MAX_VALUE, a = t.displayOrder || Number.MAX_VALUE;
  return r > a ? 1 : r < a ? -1 : 0;
}, Oe = {
  barWrapper: "_KxSXS",
  barHandle: "_3w_5u",
  barBackground: "_31ERP"
}, yr = function(e) {
  var t = e.x, r = e.y, a = e.width, o = e.height, i = e.isSelected, l = e.progressX, s = e.progressWidth, c = e.barCornerRadius, d = e.styles, h = e.onMouseDown, f = function() {
    return i ? d.progressSelectedColor : d.progressColor;
  }, x = function() {
    return i ? d.backgroundSelectedColor : d.backgroundColor;
  };
  return /* @__PURE__ */ O("g", {
    onMouseDown: h,
    children: [/* @__PURE__ */ u("rect", {
      x: t,
      width: a,
      y: r,
      height: o,
      ry: c,
      rx: c,
      fill: x(),
      className: Oe.barBackground
    }), /* @__PURE__ */ u("rect", {
      x: l,
      width: s,
      y: r,
      height: o,
      ry: c,
      rx: c,
      fill: f()
    })]
  });
}, _t = function(e) {
  var t = e.x, r = e.y, a = e.width, o = e.height, i = e.barCornerRadius, l = e.onMouseDown;
  return /* @__PURE__ */ u("rect", {
    x: t,
    y: r,
    width: a,
    height: o,
    className: Oe.barHandle,
    ry: i,
    rx: i,
    onMouseDown: l
  });
}, mr = function(e) {
  var t = e.progressPoint, r = e.onMouseDown;
  return /* @__PURE__ */ u("polygon", {
    className: Oe.barHandle,
    points: t,
    onMouseDown: r
  });
}, On = function(e) {
  var t = e.task, r = e.isProgressChangeable, a = e.isDateChangeable, o = e.rtl, i = e.onEventStart, l = e.isSelected, s = hr(+!o * t.progressWidth + t.progressX, t.y, t.height), c = t.height - 2;
  return /* @__PURE__ */ O("g", {
    className: Oe.barWrapper,
    tabIndex: 0,
    children: [/* @__PURE__ */ u(yr, {
      x: t.x1,
      y: t.y,
      width: t.x2 - t.x1,
      height: t.height,
      progressX: t.progressX,
      progressWidth: t.progressWidth,
      barCornerRadius: t.barCornerRadius,
      styles: t.styles,
      isSelected: l,
      onMouseDown: function(h) {
        a && i("move", t, h);
      }
    }), /* @__PURE__ */ O("g", {
      className: "handleGroup",
      children: [a && /* @__PURE__ */ O("g", {
        children: [/* @__PURE__ */ u(_t, {
          x: t.x1 + 1,
          y: t.y + 1,
          width: t.handleWidth,
          height: c,
          barCornerRadius: t.barCornerRadius,
          onMouseDown: function(h) {
            i("start", t, h);
          }
        }), /* @__PURE__ */ u(_t, {
          x: t.x2 - t.handleWidth - 1,
          y: t.y + 1,
          width: t.handleWidth,
          height: c,
          barCornerRadius: t.barCornerRadius,
          onMouseDown: function(h) {
            i("end", t, h);
          }
        })]
      }), r && /* @__PURE__ */ u(mr, {
        progressPoint: s,
        onMouseDown: function(h) {
          i("progress", t, h);
        }
      })]
    })]
  });
}, Rn = function(e) {
  var t = e.task, r = e.isProgressChangeable, a = e.isDateChangeable, o = e.onEventStart, i = e.isSelected, l = hr(t.progressWidth + t.x1, t.y, t.height);
  return /* @__PURE__ */ O("g", {
    className: Oe.barWrapper,
    tabIndex: 0,
    children: [/* @__PURE__ */ u(yr, {
      x: t.x1,
      y: t.y,
      width: t.x2 - t.x1,
      height: t.height,
      progressX: t.progressX,
      progressWidth: t.progressWidth,
      barCornerRadius: t.barCornerRadius,
      styles: t.styles,
      isSelected: i,
      onMouseDown: function(c) {
        a && o("move", t, c);
      }
    }), /* @__PURE__ */ u("g", {
      className: "handleGroup",
      children: r && /* @__PURE__ */ u(mr, {
        progressPoint: l,
        onMouseDown: function(c) {
          o("progress", t, c);
        }
      })
    })]
  });
}, er = {
  milestoneWrapper: "_RRr13",
  milestoneBackground: "_2P2B1"
}, Nn = function(e) {
  var t = e.task, r = e.isDateChangeable, a = e.onEventStart, o = e.isSelected, i = "rotate(45 " + (t.x1 + t.height * 0.356) + ` 
    ` + (t.y + t.height * 0.85) + ")", l = function() {
    return o ? t.styles.backgroundSelectedColor : t.styles.backgroundColor;
  };
  return /* @__PURE__ */ u("g", {
    tabIndex: 0,
    className: er.milestoneWrapper,
    children: /* @__PURE__ */ u("rect", {
      fill: l(),
      x: t.x1,
      width: t.height,
      y: t.y,
      height: t.height,
      rx: t.barCornerRadius,
      ry: t.barCornerRadius,
      transform: i,
      className: er.milestoneBackground,
      onMouseDown: function(c) {
        r && a("move", t, c);
      }
    })
  });
}, Le = {
  projectWrapper: "_1KJ6x",
  projectBackground: "_2RbVy",
  projectTop: "_2pZMF"
}, In = function(e) {
  var t = e.task, r = e.isSelected, a = r ? t.styles.backgroundSelectedColor : t.styles.backgroundColor, o = r ? t.styles.progressSelectedColor : t.styles.progressColor, i = t.x2 - t.x1, l = [t.x1, t.y + t.height / 2 - 1, t.x1, t.y + t.height, t.x1 + 15, t.y + t.height / 2 - 1].join(","), s = [t.x2, t.y + t.height / 2 - 1, t.x2, t.y + t.height, t.x2 - 15, t.y + t.height / 2 - 1].join(",");
  return /* @__PURE__ */ O("g", {
    tabIndex: 0,
    className: Le.projectWrapper,
    children: [/* @__PURE__ */ u("rect", {
      fill: a,
      x: t.x1,
      width: i,
      y: t.y,
      height: t.height,
      rx: t.barCornerRadius,
      ry: t.barCornerRadius,
      className: Le.projectBackground
    }), /* @__PURE__ */ u("rect", {
      x: t.progressX,
      width: t.progressWidth,
      y: t.y,
      height: t.height,
      ry: t.barCornerRadius,
      rx: t.barCornerRadius,
      fill: o
    }), /* @__PURE__ */ u("rect", {
      fill: a,
      x: t.x1,
      width: i,
      y: t.y,
      height: t.height / 2,
      rx: t.barCornerRadius,
      ry: t.barCornerRadius,
      className: Le.projectTop
    }), /* @__PURE__ */ u("polygon", {
      className: Le.projectTop,
      points: l,
      fill: a
    }), /* @__PURE__ */ u("polygon", {
      className: Le.projectTop,
      points: s,
      fill: a
    })]
  });
}, tr = {
  barLabel: "_3zRJQ",
  barLabelOutside: "_3KcaM"
}, zn = function(e) {
  var t = ne({}, e), r = t.task, a = t.arrowIndent, o = t.isDelete, i = t.taskHeight, l = t.isSelected, s = t.rtl, c = t.onEventStart, d = $react.useRef(null), h = $react.useState(/* @__PURE__ */ u("div", {})), f = h[0], x = h[1], w = $react.useState(!0), D = w[0], k = w[1];
  $react.useEffect(function() {
    switch (r.typeInternal) {
      case "milestone":
        x(/* @__PURE__ */ u(Nn, q({}, Object.assign({}, e))));
        break;
      case "project":
        x(/* @__PURE__ */ u(In, q({}, Object.assign({}, e))));
        break;
      case "smalltask":
        x(/* @__PURE__ */ u(Rn, q({}, Object.assign({}, e))));
        break;
      default:
        x(/* @__PURE__ */ u(On, q({}, Object.assign({}, e))));
        break;
    }
  }, [r, l]), $react.useEffect(function() {
    d.current && k(d.current.getBBox().width < r.x2 - r.x1);
  }, [d, r]);
  var C = function() {
    var g = r.x2 - r.x1, b = r.barChildren.length > 0;
    return D ? r.x1 + g * 0.5 : s && d.current ? r.x1 - d.current.getBBox().width - a * +b - a * 0.2 : r.x1 + g + a * +b + a * 0.2;
  };
  return /* @__PURE__ */ O("g", {
    onKeyDown: function(g) {
      switch (g.key) {
        case "Delete": {
          o && c("delete", r, g);
          break;
        }
      }
      g.stopPropagation();
    },
    onMouseEnter: function(g) {
      c("mouseenter", r, g);
    },
    onMouseLeave: function(g) {
      c("mouseleave", r, g);
    },
    onDoubleClick: function(g) {
      c("dblclick", r, g);
    },
    onClick: function(g) {
      c("click", r, g);
    },
    onFocus: function() {
      c("select", r);
    },
    children: [f, /* @__PURE__ */ u("text", {
      x: C(),
      y: r.y + i * 0.5,
      className: D ? tr.barLabel : tr.barLabelOutside,
      ref: d,
      children: r.name
    })]
  });
}, Vn = function(e) {
  var t, r = e.tasks, a = e.dates, o = e.ganttEvent, i = e.selectedTask, l = e.rowHeight, s = e.columnWidth, c = e.timeStep, d = e.svg, h = e.taskHeight, f = e.arrowColor, x = e.arrowIndent, w = e.fontFamily, D = e.fontSize, k = e.rtl, C = e.setGanttEvent, v = e.setFailedTask, g = e.setSelectedTask, b = e.onDateChange, M = e.onProgressChange, $ = e.onDoubleClick, E = e.onClick, T = e.onDelete, y = d == null || (t = d.current) === null || t === void 0 ? void 0 : t.createSVGPoint(), P = $react.useState(0), H = P[0], S = P[1], p = $react.useState(0), m = p[0], W = p[1], R = $react.useState(!1), Z = R[0], ye = R[1];
  $react.useEffect(function() {
    var X = a[1].getTime() - a[0].getTime() - a[1].getTimezoneOffset() * 60 * 1e3 + a[0].getTimezoneOffset() * 60 * 1e3, Y = c * s / X;
    S(Y);
  }, [s, a, c]), $react.useEffect(function() {
    var X = function(_) {
      try {
        var K;
        if (!o.changedTask || !y || !(d != null && d.current))
          return Promise.resolve();
        _.preventDefault(), y.x = _.clientX;
        var te = y.matrixTransform(d == null || (K = d.current.getScreenCTM()) === null || K === void 0 ? void 0 : K.inverse()), ee = qt(te.x, o.action, o.changedTask, H, c, m, k), Q = ee.isChanged, G = ee.changedTask;
        return Q && C({
          action: o.action,
          changedTask: G
        }), Promise.resolve();
      } catch (re) {
        return Promise.reject(re);
      }
    }, Y = function U(_) {
      try {
        var K, te = function() {
          ge || v(Q);
        }, ee = o.action, Q = o.originalSelectedTask, G = o.changedTask;
        if (!G || !y || !(d != null && d.current) || !Q)
          return Promise.resolve();
        _.preventDefault(), y.x = _.clientX;
        var re = y.matrixTransform(d == null || (K = d.current.getScreenCTM()) === null || K === void 0 ? void 0 : K.inverse()), Ne = qt(re.x, ee, G, H, c, m, k), oe = Ne.changedTask, Ie = Q.start !== oe.start || Q.end !== oe.end || Q.progress !== oe.progress;
        d.current.removeEventListener("mousemove", X), d.current.removeEventListener("mouseup", U), C({
          action: ""
        }), ye(!1);
        var ge = !0, xe = function() {
          if ((ee === "move" || ee === "end" || ee === "start") && b && Ie) {
            var ie = nt(function() {
              return Promise.resolve(b(oe, oe.barChildren)).then(function(le) {
                le !== void 0 && (ge = le);
              });
            }, function() {
              ge = !1;
            });
            if (ie && ie.then)
              return ie.then(function() {
              });
          } else {
            var he = function() {
              if (M && Ie) {
                var le = nt(function() {
                  return Promise.resolve(M(oe, oe.barChildren)).then(function(me) {
                    me !== void 0 && (ge = me);
                  });
                }, function() {
                  ge = !1;
                });
                if (le && le.then)
                  return le.then(function() {
                  });
              }
            }();
            if (he && he.then)
              return he.then(function() {
              });
          }
        }();
        return Promise.resolve(xe && xe.then ? xe.then(te) : te(xe));
      } catch (ie) {
        return Promise.reject(ie);
      }
    };
    !Z && (o.action === "move" || o.action === "end" || o.action === "start" || o.action === "progress") && d !== null && d !== void 0 && d.current && (d.current.addEventListener("mousemove", X), d.current.addEventListener("mouseup", Y), ye(!0));
  }, [o, H, m, M, c, b, d, Z, y, k, v, C]);
  var Re = function(Y, U, _) {
    try {
      return Promise.resolve(function() {
        if (!_)
          Y === "select" && g(U.id);
        else
          return function() {
            if (Bn(_)) {
              var K = function() {
                if (Y === "delete") {
                  var Q = function() {
                    if (T) {
                      var G = nt(function() {
                        return Promise.resolve(T(U)).then(function(re) {
                          re !== void 0 && re && C({
                            action: Y,
                            changedTask: U
                          });
                        });
                      }, function(re) {
                        console.error("Error on Delete. " + re);
                      });
                      if (G && G.then)
                        return G.then(function() {
                        });
                    }
                  }();
                  if (Q && Q.then)
                    return Q.then(function() {
                    });
                }
              }();
              if (K && K.then)
                return K.then(function() {
                });
            } else if (Y === "mouseenter")
              o.action || C({
                action: Y,
                changedTask: U,
                originalSelectedTask: U
              });
            else if (Y === "mouseleave")
              o.action === "mouseenter" && C({
                action: ""
              });
            else if (Y === "dblclick")
              $ && $(U);
            else if (Y === "click")
              E && E(U);
            else if (Y === "move") {
              var te;
              if (!(d != null && d.current) || !y)
                return;
              y.x = _.clientX;
              var ee = y.matrixTransform((te = d.current.getScreenCTM()) === null || te === void 0 ? void 0 : te.inverse());
              W(ee.x - U.x1), C({
                action: Y,
                changedTask: U,
                originalSelectedTask: U
              });
            } else
              C({
                action: Y,
                changedTask: U,
                originalSelectedTask: U
              });
          }();
      }());
    } catch (K) {
      return Promise.reject(K);
    }
  };
  return /* @__PURE__ */ O("g", {
    className: "content",
    children: [/* @__PURE__ */ u("g", {
      className: "arrows",
      fill: f,
      stroke: f,
      children: r.map(function(X) {
        return X.barChildren.map(function(Y) {
          return /* @__PURE__ */ u(xn, {
            taskFrom: X,
            taskTo: r[Y.index],
            rowHeight: l,
            taskHeight: h,
            arrowIndent: x,
            rtl: k
          }, "Arrow from " + X.id + " to " + r[Y.index].id);
        });
      })
    }), /* @__PURE__ */ u("g", {
      className: "bar",
      fontFamily: w,
      fontSize: D,
      children: r.map(function(X) {
        return /* @__PURE__ */ u(zn, {
          task: X,
          arrowIndent: x,
          taskHeight: h,
          isProgressChangeable: !!M && !X.isDisabled,
          isDateChangeable: !!b && !X.isDisabled,
          isDelete: !X.isDisabled,
          onEventStart: Re,
          isSelected: !!i && X.id === i.id,
          rtl: k
        }, X.id);
      })
    })]
  });
}, Ze = {
  ganttVerticalContainer: "_CZjuD",
  horizontalContainer: "_2B2zv",
  wrapper: "_3eULf"
}, Yn = function(e) {
  var t = e.gridProps, r = e.calendarProps, a = e.barProps, o = e.ganttHeight, i = e.scrollY, l = e.scrollX, s = $react.useRef(null), c = $react.useRef(null), d = $react.useRef(null), h = ne({}, a, {
    svg: s
  });
  return $react.useEffect(function() {
    c.current && (c.current.scrollTop = i);
  }, [i]), $react.useEffect(function() {
    d.current && (d.current.scrollLeft = l);
  }, [l]), /* @__PURE__ */ O("div", {
    className: Ze.ganttVerticalContainer,
    ref: d,
    dir: "ltr",
    children: [/* @__PURE__ */ u("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t.svgWidth,
      height: r.headerHeight,
      fontFamily: a.fontFamily,
      children: /* @__PURE__ */ u(kn, q({}, Object.assign({}, r)))
    }), /* @__PURE__ */ u("div", {
      ref: c,
      className: Ze.horizontalContainer,
      style: o ? {
        height: o,
        width: t.svgWidth
      } : {
        width: t.svgWidth
      },
      children: /* @__PURE__ */ O("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t.svgWidth,
        height: a.rowHeight * a.tasks.length,
        fontFamily: a.fontFamily,
        ref: s,
        children: [/* @__PURE__ */ u(Cn, q({}, Object.assign({}, t))), /* @__PURE__ */ u(Vn, q({}, Object.assign({}, h)))]
      })
    })]
  });
}, rr = {
  scrollWrapper: "_2k9Ys",
  scroll: "_19jgW"
}, An = function(e) {
  var t = e.scroll, r = e.svgWidth, a = e.taskListWidth, o = e.rtl, i = e.onScroll, l = $react.useRef(null);
  return $react.useEffect(function() {
    l.current && (l.current.scrollLeft = t);
  }, [t]), /* @__PURE__ */ u("div", {
    dir: "ltr",
    style: {
      margin: o ? "0px " + a + "px 0px 0px" : "0px 0px 0px " + a + "px"
    },
    className: rr.scrollWrapper,
    onScroll: i,
    ref: l,
    children: /* @__PURE__ */ u("div", {
      style: {
        width: r
      },
      className: rr.scroll
    })
  });
}, Xn = function(e) {
  var t = e.tasks, r = e.headerHeight, a = r === void 0 ? 50 : r, o = e.columnWidth, i = o === void 0 ? 60 : o, l = e.listCellWidth, s = l === void 0 ? "155px" : l, c = e.rowHeight, d = c === void 0 ? 50 : c, h = e.ganttHeight, f = h === void 0 ? 0 : h, x = e.viewMode, w = x === void 0 ? j.Day : x, D = e.preStepsCount, k = D === void 0 ? 1 : D, C = e.locale, v = C === void 0 ? "en-GB" : C, g = e.barFill, b = g === void 0 ? 60 : g, M = e.barCornerRadius, $ = M === void 0 ? 3 : M, E = e.barProgressColor, T = E === void 0 ? "#a3a3ff" : E, y = e.barProgressSelectedColor, P = y === void 0 ? "#8282f5" : y, H = e.barBackgroundColor, S = H === void 0 ? "#b8c2cc" : H, p = e.barBackgroundSelectedColor, m = p === void 0 ? "#aeb8c2" : p, W = e.projectProgressColor, R = W === void 0 ? "#7db59a" : W, Z = e.projectProgressSelectedColor, ye = Z === void 0 ? "#59a985" : Z, Re = e.projectBackgroundColor, X = Re === void 0 ? "#fac465" : Re, Y = e.projectBackgroundSelectedColor, U = Y === void 0 ? "#f7bb53" : Y, _ = e.milestoneBackgroundColor, K = _ === void 0 ? "#f1c453" : _, te = e.milestoneBackgroundSelectedColor, ee = te === void 0 ? "#f29e4c" : te, Q = e.rtl, G = Q === void 0 ? !1 : Q, re = e.handleWidth, Ne = re === void 0 ? 8 : re, oe = e.timeStep, Ie = oe === void 0 ? 3e5 : oe, ge = e.arrowColor, xe = ge === void 0 ? "grey" : ge, ie = e.fontFamily, he = ie === void 0 ? "Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue" : ie, le = e.fontSize, me = le === void 0 ? "14px" : le, dt = e.arrowIndent, ct = dt === void 0 ? 20 : dt, ut = e.todayColor, br = ut === void 0 ? "rgba(252, 248, 227, 0.5)" : ut, pe = e.viewDate, gt = e.TooltipContent, Cr = gt === void 0 ? fn : gt, ht = e.TaskListHeader, kr = ht === void 0 ? un : ht, vt = e.TaskListTable, xr = vt === void 0 ? hn : vt, Tr = e.onDateChange, wr = e.onProgressChange, Sr = e.onDoubleClick, Dr = e.onClick, $r = e.onDelete, _e = e.onSelect, ze = e.onExpanderClick, be = $react.useRef(null), Ve = $react.useRef(null), ft = $react.useState(function() {
    var L = Gt(t, w, k), F = L[0], N = L[1];
    return {
      viewMode: w,
      dates: Ut(F, N, w)
    };
  }), ve = ft[0], Hr = ft[1], yt = $react.useState(void 0), He = yt[0], mt = yt[1], pt = $react.useState(0), Ye = pt[0], bt = pt[1], Ct = $react.useState(0), Pr = Ct[0], Mr = Ct[1], kt = $react.useState(f), jr = kt[0], xt = kt[1], Tt = $react.useState([]), ae = Tt[0], Ae = Tt[1], wt = $react.useState({
    action: ""
  }), Te = wt[0], St = wt[1], et = $react.useMemo(function() {
    return d * b / 100;
  }, [d, b]), Dt = $react.useState(), Xe = Dt[0], Er = Dt[1], $t = $react.useState(null), Ge = $t[0], Ht = $t[1], se = ve.dates.length * i, we = ae.length * d, Pt = $react.useState(0), de = Pt[0], tt = Pt[1], Mt = $react.useState(-1), ce = Mt[0], Pe = Mt[1], jt = $react.useState(!1), Et = jt[0], Se = jt[1];
  $react.useEffect(function() {
    var L;
    ze ? L = Wn(t) : L = t, L = L.sort(Fn);
    var F = Gt(L, w, k), N = F[0], I = F[1], z = Ut(N, I, w);
    G && (z = z.reverse(), ce === -1 && Pe(z.length * i)), Hr({
      dates: z,
      viewMode: w
    }), Ae(Sn(L, z, i, d, et, $, Ne, G, T, P, S, m, R, ye, X, U, K, ee));
  }, [t, w, k, d, $, i, et, Ne, T, P, S, m, R, ye, X, U, K, ee, G, ce, ze]), $react.useEffect(function() {
    if (w === ve.viewMode && (pe && !He || pe && (He == null ? void 0 : He.valueOf()) !== pe.valueOf())) {
      var L = ve.dates, F = L.findIndex(function(N, I) {
        return pe.valueOf() >= N.valueOf() && I + 1 !== L.length && pe.valueOf() < L[I + 1].valueOf();
      });
      if (F === -1)
        return;
      mt(pe), Pe(i * F);
    }
  }, [pe, i, ve.dates, ve.viewMode, w, He, mt]), $react.useEffect(function() {
    var L = Te.changedTask, F = Te.action;
    if (L) {
      if (F === "delete")
        St({
          action: ""
        }), Ae(ae.filter(function(z) {
          return z.id !== L.id;
        }));
      else if (F === "move" || F === "end" || F === "start" || F === "progress") {
        var N = ae.find(function(z) {
          return z.id === L.id;
        });
        if (N && (N.start.getTime() !== L.start.getTime() || N.end.getTime() !== L.end.getTime() || N.progress !== L.progress)) {
          var I = ae.map(function(z) {
            return z.id === L.id ? L : z;
          });
          Ae(I);
        }
      }
    }
  }, [Te, ae]), $react.useEffect(function() {
    Ge && (Ae(ae.map(function(L) {
      return L.id !== Ge.id ? L : Ge;
    })), Ht(null));
  }, [Ge, ae]), $react.useEffect(function() {
    s || bt(0), Ve.current && bt(Ve.current.offsetWidth);
  }, [Ve, s]), $react.useEffect(function() {
    be.current && Mr(be.current.offsetWidth - Ye);
  }, [be, Ye]), $react.useEffect(function() {
    xt(f ? f + a : t.length * d + a);
  }, [f, t, a, d]), $react.useEffect(function() {
    var L, F = function(I) {
      if (I.shiftKey || I.deltaX) {
        var z = I.deltaX ? I.deltaX : I.deltaY, Me = ce + z;
        Me < 0 ? Me = 0 : Me > se && (Me = se), Pe(Me), I.preventDefault();
      } else if (f) {
        var De = de + I.deltaY;
        De < 0 ? De = 0 : De > we - f && (De = we - f), De !== de && (tt(De), I.preventDefault());
      }
      Se(!0);
    };
    return (L = be.current) === null || L === void 0 || L.addEventListener("wheel", F, {
      passive: !1
    }), function() {
      var N;
      (N = be.current) === null || N === void 0 || N.removeEventListener("wheel", F);
    };
  }, [be, de, ce, f, se, G, we]);
  var Lr = function(F) {
    de !== F.currentTarget.scrollTop && !Et ? (tt(F.currentTarget.scrollTop), Se(!0)) : Se(!1);
  }, Br = function(F) {
    ce !== F.currentTarget.scrollLeft && !Et ? (Pe(F.currentTarget.scrollLeft), Se(!0)) : Se(!1);
  }, Wr = function(F) {
    F.preventDefault();
    var N = de, I = ce, z = !0;
    switch (F.key) {
      case "Down":
      case "ArrowDown":
        N += d, z = !1;
        break;
      case "Up":
      case "ArrowUp":
        N -= d, z = !1;
        break;
      case "Left":
      case "ArrowLeft":
        I -= i;
        break;
      case "Right":
      case "ArrowRight":
        I += i;
        break;
    }
    z ? (I < 0 ? I = 0 : I > se && (I = se), Pe(I)) : (N < 0 ? N = 0 : N > we - f && (N = we - f), tt(N)), Se(!0);
  }, Lt = function(F) {
    var N = ae.find(function(z) {
      return z.id === F;
    }), I = ae.find(function(z) {
      return !!Xe && z.id === Xe.id;
    });
    _e && (I && _e(I, !1), N && _e(N, !0)), Er(N);
  }, Fr = function(F) {
    ze && F.hideChildren !== void 0 && ze(ne({}, F, {
      hideChildren: !F.hideChildren
    }));
  }, Or = {
    columnWidth: i,
    svgWidth: se,
    tasks: t,
    rowHeight: d,
    dates: ve.dates,
    todayColor: br,
    rtl: G
  }, Rr = {
    dateSetup: ve,
    locale: v,
    viewMode: w,
    headerHeight: a,
    columnWidth: i,
    fontFamily: he,
    fontSize: me,
    rtl: G
  }, Nr = {
    tasks: ae,
    dates: ve.dates,
    ganttEvent: Te,
    selectedTask: Xe,
    rowHeight: d,
    taskHeight: et,
    columnWidth: i,
    arrowColor: xe,
    timeStep: Ie,
    fontFamily: he,
    fontSize: me,
    arrowIndent: ct,
    svgWidth: se,
    rtl: G,
    setGanttEvent: St,
    setFailedTask: Ht,
    setSelectedTask: Lt,
    onDateChange: Tr,
    onProgressChange: wr,
    onDoubleClick: Sr,
    onClick: Dr,
    onDelete: $r
  }, Ir = {
    rowHeight: d,
    rowWidth: s,
    fontFamily: he,
    fontSize: me,
    tasks: ae,
    locale: v,
    headerHeight: a,
    scrollY: de,
    ganttHeight: f,
    horizontalContainerClass: Ze.horizontalContainer,
    selectedTask: Xe,
    taskListRef: Ve,
    setSelectedTask: Lt,
    onExpanderClick: Fr,
    TaskListHeader: kr,
    TaskListTable: xr
  };
  return /* @__PURE__ */ O("div", {
    children: [/* @__PURE__ */ O("div", {
      className: Ze.wrapper,
      onKeyDown: Wr,
      tabIndex: 0,
      ref: be,
      children: [s && /* @__PURE__ */ u(pn, q({}, Object.assign({}, Ir))), /* @__PURE__ */ u(Yn, {
        gridProps: Or,
        calendarProps: Rr,
        barProps: Nr,
        ganttHeight: f,
        scrollY: de,
        scrollX: ce
      }), Te.changedTask && /* @__PURE__ */ u(vn, {
        arrowIndent: ct,
        rowHeight: d,
        svgContainerHeight: jr,
        svgContainerWidth: Pr,
        fontFamily: he,
        fontSize: me,
        scrollX: ce,
        scrollY: de,
        task: Te.changedTask,
        headerHeight: a,
        taskListWidth: Ye,
        TooltipContent: Cr,
        rtl: G,
        svgWidth: se
      }), /* @__PURE__ */ u(mn, {
        ganttFullHeight: we,
        ganttHeight: f,
        headerHeight: a,
        scroll: de,
        onScroll: Lr,
        rtl: G
      })]
    }), /* @__PURE__ */ u(An, {
      svgWidth: se,
      taskListWidth: Ye,
      scroll: ce,
      rtl: G,
      onScroll: Br
    })]
  });
};
const Gn = {
  style: {
    textColor: "Text Color",
    contrastText: "Contrast Text Color",
    accent: "Accent",
    arrowColor: "Arrow Color Color",
    taskProgressColor: "Task Progress Color",
    barCornerRadius: "Bar Corner Radius",
    taskbackgroundColor: "Task Background Color",
    taskProgressSelectedColor: "Task Selected Color",
    borderWidth: "Border Width",
    barBackgroundColor: "Bar Background Color",
    barProgressColor: "Bar Progress Color",
    backgroundColor: "Background Color",
    barBackgroundSelectedColor: "Bar Background Selected Color",
    headerBackground: "Header Background",
    footerBackground: "Footer Background",
    checkedBackground: "Checked Background",
    uncheckedBackground: "Unchecked Background",
    uncheckedBorder: "Unchecked Border",
    indicatorBackground: "Indicator Background",
    toolbarBackground: "Toolbar Background",
    margin: "Margin",
    headerheight: "Header Height",
    padding: "Padding",
    marginLeft: "Margin Left",
    marginRight: "Margin Right",
    marginTop: "Margin Top",
    marginBottom: "Margin Bottom",
    minWidth: "Minimum Width",
    aspectRatio: "Aspect Ratio",
    textSize: "Font Size"
  },
  component: {
    data: "Gant Chart Data",
    name: "Name",
    start: "Start date",
    end: "End Date",
    id: "Id",
    progress: "Progress",
    type: "Type",
    hideChildren: "Hide Children",
    displayOrder: "Display Order",
    project: "Project",
    dependencies: "Dependencies"
  },
  methods: {
    setPoint: "Set Point",
    invalidInput: "Invalid Input",
    requiredField: "{field} is required"
  }
}, Un = {}, B = /* @__PURE__ */ new Date(), Kn = {
  defaultTasks: [{
    start: new Date(B.getFullYear(), B.getMonth(), 1),
    end: new Date(B.getFullYear(), B.getMonth(), 15),
    name: "Some Project",
    label: "Some Project",
    id: "ProjectSample",
    progress: 25,
    type: "project",
    hideChildren: !1,
    displayOrder: 1
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 1),
    end: new Date(B.getFullYear(), B.getMonth(), 2, 12, 28),
    label: "Idea",
    name: "Idea",
    id: "Task 0",
    progress: 45,
    type: "task",
    project: "ProjectSample",
    displayOrder: 2
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 2),
    end: new Date(B.getFullYear(), B.getMonth(), 4, 0, 0),
    name: "Research",
    label: "Research",
    id: "Task 1",
    progress: 25,
    dependencies: ["Task 0"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 3
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 4),
    end: new Date(B.getFullYear(), B.getMonth(), 8, 0, 0),
    name: "Discussion with team",
    label: "Discussion with team",
    id: "Task 2",
    progress: 10,
    dependencies: ["Task 1"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 4
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 8),
    end: new Date(B.getFullYear(), B.getMonth(), 9, 0, 0),
    name: "Developing",
    label: "Developing",
    id: "Task 3",
    progress: 2,
    dependencies: ["Task 2"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 5
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 8),
    end: new Date(B.getFullYear(), B.getMonth(), 10),
    name: "Review",
    label: "Review",
    id: "Task 4",
    type: "task",
    progress: 70,
    dependencies: ["Task 2"],
    project: "ProjectSample",
    displayOrder: 6
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 15),
    end: new Date(B.getFullYear(), B.getMonth(), 15),
    name: "Release",
    label: "Release",
    id: "Task 6",
    progress: B.getMonth(),
    type: "milestone",
    dependencies: ["Task 4"],
    project: "ProjectSample",
    displayOrder: 7
  }, {
    start: new Date(B.getFullYear(), B.getMonth(), 18),
    end: new Date(B.getFullYear(), B.getMonth(), 19),
    name: "Party Time",
    label: "Party Time",
    id: "Task 9",
    progress: 0,
    isDisabled: !0,
    type: "task"
  }]
}, Qn = void 0, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  en: Gn,
  enObj: Kn,
  zh: Un,
  zhObj: Qn
}, Symbol.toStringTag, { value: "Module" })), {
  trans: A,
  language: no
} = new $lowcoder_sdk.Translator(pr, ""), Jn = $lowcoder_sdk.getI18nObjects(pr, ""), Zn = [{
  name: "textSize",
  label: A("style.textSize"),
  textSize: "textSize"
}, {
  name: "barBackgroundColor",
  label: A("style.barBackgroundColor"),
  barBackgroundColor: "barBackgroundColor"
}, {
  name: "barProgressColor",
  label: A("style.barProgressColor"),
  barProgressColor: "barProgressColor"
}, {
  name: "arrowColor",
  label: A("style.arrowColor"),
  arrowColor: "arrowColor"
}, {
  name: "radius",
  label: A("style.barCornerRadius"),
  radius: "radius"
}], qn = (n, e) => {
  const t = n.filter((o) => o.project === e);
  let r = t[0].start, a = t[0].end;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    r.getTime() > i.start.getTime() && (r = i.start), i.end.getTime() < i.end.getTime() && (a = i.end);
  }
  return [r, a];
};
let it = new $lowcoder_sdk.MultiCompBuilder({
  name: $lowcoder_sdk.StringControl,
  start: $lowcoder_sdk.jsonControl((n) => new Date(n)),
  end: $lowcoder_sdk.jsonControl((n) => new Date(n)),
  label: $lowcoder_sdk.StringControl,
  id: $lowcoder_sdk.StringControl,
  project: $lowcoder_sdk.StringControl,
  progress: $lowcoder_sdk.NumberControl,
  type: $lowcoder_sdk.StringControl,
  hideChildren: $lowcoder_sdk.BoolCodeControl,
  displayOrder: $lowcoder_sdk.NumberControl,
  dependencies: $lowcoder_sdk.jsonControl((n) => [n])
  // dependencies: withDefault(ArrayControl, []),
}, (n) => n).build();
it = class extends it {
  propertyView(n) {
    return /* @__PURE__ */ O(ot, {
      children: [this.children.name.propertyView({
        label: A("component.name")
      }), this.children.start.propertyView({
        label: A("component.start")
      }), this.children.end.propertyView({
        label: A("component.end")
      }), this.children.progress.propertyView({
        label: A("component.progress")
      }), this.children.id.propertyView({
        label: A("component.id")
      }), this.children.type.propertyView({
        label: A("component.type")
      }), this.children.project.propertyView({
        label: A("component.project")
      }), this.children.dependencies.propertyView({
        label: A("component.dependencies")
      }), this.children.hideChildren.propertyView({
        label: A("component.hideChildren")
      }), this.children.displayOrder.propertyView({
        label: A("component.displayOrder")
      })]
    });
  }
};
const _n = $lowcoder_sdk.optionsControl(it, {
  initOptions: Jn.defaultTasks,
  uniqField: "name"
}), eo = [{
  label: "Hour",
  value: j.Hour
}, {
  label: "Quarter Day",
  value: j.QuarterDay
}, {
  label: "Half Day",
  value: j.HalfDay
}, {
  label: "Day",
  value: j.Day
}, {
  label: "Week",
  value: j.Week
}, {
  label: "Month",
  value: j.Month
}, {
  label: "Year",
  value: j.Year
}];
function ar(n) {
  return n;
}
const to = [{
  name: "padding",
  label: A("style.padding"),
  padding: "padding"
}, {
  name: "textSize",
  label: A("style.textSize"),
  textSize: "textSize"
}, {
  name: "textColor",
  label: A("style.textColor"),
  textColor: "textColor",
  depType: "toSelf",
  transformer: ar,
  color: "#000000"
}, {
  name: "headerBackground",
  label: A("style.backgroundColor"),
  depName: "background",
  depType: "toSelf",
  transformer: ar
}];
let Fe = function() {
  const n = {
    styles: $lowcoder_sdk.styleControl(Zn),
    autoHeight: $lowcoder_sdk.withDefault($lowcoder_sdk.AutoHeightControl, "auto"),
    showHeaders: $lowcoder_sdk.withDefault($lowcoder_sdk.BoolControl, !0),
    data: _n,
    headerStyle: $lowcoder_sdk.styleControl(to),
    activeViewMode: $lowcoder_sdk.dropdownControl(eo, j.Day),
    onEvent: $lowcoder_sdk.eventHandlerControl([{
      label: "Task Date Changed",
      value: "handleTaskDateChange",
      description: "Specifies the function to be executed when drag taskbar event on timeline has finished."
    }, {
      label: "Task Clicked",
      value: "taskClick",
      description: "Specifies the function to be executed when drag taskbar event on timeline has finished."
    }, {
      label: "Task Deleted",
      value: "handleTaskDelete",
      description: "Specifies the function to be executed when drag taskbar event on timeline has finished."
    }, {
      label: "Task Progress Changed",
      value: "handleProgressChange",
      description: "Specifies the function to be executed when drag taskbar progress event has finished."
    }, {
      label: "Task Selected",
      value: "handleSelect",
      description: "Specifies the function to be executed on the taskbar select or unselect event."
    }, {
      label: "Task Expandered",
      value: "handleExpanderClick",
      description: ""
    }, {
      label: "Task Updated",
      value: "handleTaskUpdate",
      description: ""
    }, {
      label: "Task Progres Changed",
      value: "onProgressChanged",
      description: ""
    }, {
      label: "Task Selected",
      value: "onTaskSelected",
      description: ""
    }, {
      label: "Task Expanded",
      value: "onTaskExpandClicked",
      description: ""
    }])
  };
  return new $lowcoder_sdk.UICompBuilder(n, (e) => {
    var C, v, g, b, M, $, E;
    let {
      activeViewMode: t
    } = e;
    const [r, a] = $react.useState({
      width: 480,
      height: 300
    }), {
      width: o,
      height: i,
      ref: l
    } = qa({
      onResize: () => {
        if (!(!l.current || !o || !i)) {
          if (e.autoHeight) {
            a({
              width: o,
              height: r.height
            });
            return;
          }
          a({
            width: o,
            height: i
          });
        }
      }
    }), [s, c] = $react.useState([]);
    t === j.Year || t === j.Month || j.Week;
    const d = (T) => {
      let P = e.data.map((H) => H.id === T.id ? T : H);
      if (T.project) {
        const [H, S] = qn(P, T.project), p = P[P.findIndex((m) => m.id === T.project)];
        if (p.start.getTime() !== H.getTime() || p.end.getTime() !== S.getTime()) {
          const m = Ft(q({}, p), {
            start: H,
            end: S
          });
          P = P.map((W) => W.id === T.project ? m : W);
        }
      }
      e.onEvent("handleTaskDateChange", P);
    }, h = (T) => {
      const y = window.confirm("Are you sure about " + T.name + " ?");
      return y && c(s.filter((P) => P.id !== T.id)), y;
    }, f = (T) => Ot(this, null, function* () {
      e.onEvent("onProgressChanged", T);
    }), x = (T) => {
      e.onEvent("onTaskClick", T);
    }, w = (T) => {
      e.onEvent("onTaskClick", T);
    }, D = (T, y) => {
      e.onEvent("onTaskSelected", T, y);
    }, k = (T) => {
      e.onEvent("onTaskExpandClicked", T);
    };
    return /* @__PURE__ */ u("div", {
      className: "Wrapper",
      children: e.data.length > 0 ? /* @__PURE__ */ u(Xn, {
        tasks: (C = e.data) != null ? C : [],
        viewMode: t,
        onDateChange: d,
        onDelete: h,
        onProgressChange: f,
        onDoubleClick: x,
        onClick: w,
        onSelect: D,
        onExpanderClick: k,
        ganttHeight: e.autoHeight ? 0 : 300,
        headerHeight: 30,
        columnWidth: 65,
        fontSize: (v = e.styles) == null ? void 0 : v.textSize,
        rowHeight: 40,
        barCornerRadius: (g = e.styles) == null ? void 0 : g.radius,
        barFill: 50,
        fontFamily: "Arial",
        locale: "en",
        barBackgroundColor: (b = e.styles) == null ? void 0 : b.barBackgroundColor,
        barBackgroundSelectedColor: (M = e.styles) == null ? void 0 : M.barBackgroundSelectedColor,
        barProgressColor: ($ = e.styles) == null ? void 0 : $.barProgressColor,
        arrowColor: (E = e.styles) == null ? void 0 : E.arrowColor,
        listCellWidth: e.showHeaders == !0 ? "155px" : "",
        TaskListTable: ({
          fontSize: T,
          fontFamily: y,
          rowHeight: P = "400px",
          rowWidth: H = "300px",
          onExpanderClick: S,
          tasks: p = e.data
        }) => /* @__PURE__ */ u("div", {
          style: {
            fontFamily: y,
            fontSize: e.headerStyle.textSize,
            width: "100%",
            overflow: "hidden",
            backgroundColor: e.headerStyle.headerBackground
          },
          children: p.map((m) => (m.hideChildren === !1 || m.hideChildren, /* @__PURE__ */ O("div", {
            style: {
              height: P,
              padding: e.headerStyle.padding,
              width: "100%",
              display: "flex",
              color: e.headerStyle.textColor
            },
            children: [/* @__PURE__ */ u("div", {
              style: {
                minWidth: H,
                maxWidth: H
              },
              title: m.name,
              children: /* @__PURE__ */ O("div", {
                children: [/* @__PURE__ */ u("div", {
                  onClick: () => S(m)
                }), /* @__PURE__ */ u("div", {
                  children: m.name
                })]
              })
            }), /* @__PURE__ */ O("div", {
              style: {
                minWidth: H,
                maxWidth: H
              },
              children: [" ", new Date(m.start).toLocaleDateString()]
            }), /* @__PURE__ */ O("div", {
              style: {
                minWidth: H,
                maxWidth: H
              },
              children: [" ", new Date(m.end).toLocaleDateString()]
            })]
          }, `${m.id}row`)))
        })
      }) : /* @__PURE__ */ u(ot, {})
    });
  }).setPropertyViewFn((e) => /* @__PURE__ */ O(ot, {
    children: [/* @__PURE__ */ O($lowcoder_sdk.Section, {
      name: "Basic",
      children: [e.activeViewMode.propertyView({
        label: "View Mode"
      }), e.showHeaders.propertyView({
        label: "Show Headers"
      }), e.data.propertyView({})]
    }), /* @__PURE__ */ u($lowcoder_sdk.Section, {
      name: "Interaction",
      children: e.onEvent.propertyView()
    }), e.showHeaders.getView() && /* @__PURE__ */ u($lowcoder_sdk.Section, {
      name: "Legend-Style",
      children: e.headerStyle.getPropertyView()
    }), /* @__PURE__ */ O($lowcoder_sdk.Section, {
      name: "Styles",
      children: [e.autoHeight.getPropertyView(), e.styles.getPropertyView()]
    })]
  })).build();
}();
Fe = class extends Fe {
  autoHeight() {
    return this.children.autoHeight.getView();
  }
};
Fe = $lowcoder_sdk.withMethodExposing(Fe, [{
  method: {
    name: "setData",
    description: "",
    params: [{
      name: "data",
      type: "JSON",
      description: "JSON value"
    }]
  },
  execute: (n, e) => {
    n.children.data.dispatchChangeValueAction(e.length > 0 ? JSON.stringify(e, null, 2) : []);
  }
}]);
const ro = $lowcoder_sdk.withExposingConfigs(Fe, [new $lowcoder_sdk.NameConfig("data", A("component.data")), $lowcoder_sdk.NameConfigHidden]), oo = {
  gantchart: ro
};
export {
  oo as default
};

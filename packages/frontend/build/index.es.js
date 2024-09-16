var Fd = Object.defineProperty;
var Vd = (e, t, n) => t in e ? Fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var jn = (e, t, n) => Vd(e, typeof t != "symbol" ? t + "" : t, n);
import * as m from "react";
import it, { forwardRef as Ud, useContext as ec, Children as zd, isValidElement as Vr, cloneElement as Ur, createContext as Wd, useState as qd, useEffect as la, useCallback as Hd } from "react";
import * as Kd from "react-dom";
import Yn from "react-dom";
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti = { exports: {} }, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function Gd() {
  if (ca) return Dn;
  ca = 1;
  var e = it, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, b = null, S = null;
    u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (S = c.ref);
    for (d in c) r.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: b, ref: S, props: f, _owner: o.current };
  }
  return Dn.Fragment = n, Dn.jsx = a, Dn.jsxs = a, Dn;
}
var Bn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Xd() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && function() {
    var e = it, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), p = Symbol.iterator, y = "@@iterator";
    function h(C) {
      if (C === null || typeof C != "object")
        return null;
      var D = p && C[p] || C[y];
      return typeof D == "function" ? D : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(C) {
      {
        for (var D = arguments.length, G = new Array(D > 1 ? D - 1 : 0), ce = 1; ce < D; ce++)
          G[ce - 1] = arguments[ce];
        v("error", C, G);
      }
    }
    function v(C, D, G) {
      {
        var ce = w.ReactDebugCurrentFrame, Ce = ce.getStackAddendum();
        Ce !== "" && (D += "%s", G = G.concat([Ce]));
        var Me = G.map(function(ve) {
          return String(ve);
        });
        Me.unshift("Warning: " + D), Function.prototype.apply.call(console[C], console, Me);
      }
    }
    var x = !1, E = !1, O = !1, k = !1, L = !1, g;
    g = Symbol.for("react.module.reference");
    function N(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === s || L || C === o || C === u || C === d || k || C === S || x || E || O || typeof C == "object" && C !== null && (C.$$typeof === b || C.$$typeof === f || C.$$typeof === a || C.$$typeof === l || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === g || C.getModuleId !== void 0));
    }
    function B(C, D, G) {
      var ce = C.displayName;
      if (ce)
        return ce;
      var Ce = D.displayName || D.name || "";
      return Ce !== "" ? G + "(" + Ce + ")" : G;
    }
    function F(C) {
      return C.displayName || "Context";
    }
    function z(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case l:
            var D = C;
            return F(D) + ".Consumer";
          case a:
            var G = C;
            return F(G._context) + ".Provider";
          case c:
            return B(C, C.render, "ForwardRef");
          case f:
            var ce = C.displayName || null;
            return ce !== null ? ce : z(C.type) || "Memo";
          case b: {
            var Ce = C, Me = Ce._payload, ve = Ce._init;
            try {
              return z(ve(Me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, U = 0, j, K, Y, re, M, $, J;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function W() {
      {
        if (U === 0) {
          j = console.log, K = console.info, Y = console.warn, re = console.error, M = console.group, $ = console.groupCollapsed, J = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        U++;
      }
    }
    function Q() {
      {
        if (U--, U === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, C, {
              value: j
            }),
            info: V({}, C, {
              value: K
            }),
            warn: V({}, C, {
              value: Y
            }),
            error: V({}, C, {
              value: re
            }),
            group: V({}, C, {
              value: M
            }),
            groupCollapsed: V({}, C, {
              value: $
            }),
            groupEnd: V({}, C, {
              value: J
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = w.ReactCurrentDispatcher, Z;
    function te(C, D, G) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Ce) {
            var ce = Ce.stack.trim().match(/\n( *(at )?)/);
            Z = ce && ce[1] || "";
          }
        return `
` + Z + C;
      }
    }
    var ee = !1, q;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ne();
    }
    function R(C, D) {
      if (!C || ee)
        return "";
      {
        var G = q.get(C);
        if (G !== void 0)
          return G;
      }
      var ce;
      ee = !0;
      var Ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Me;
      Me = X.current, X.current = null, W();
      try {
        if (D) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (ct) {
              ce = ct;
            }
            Reflect.construct(C, [], ve);
          } else {
            try {
              ve.call();
            } catch (ct) {
              ce = ct;
            }
            C.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ct) {
            ce = ct;
          }
          C();
        }
      } catch (ct) {
        if (ct && ce && typeof ct.stack == "string") {
          for (var pe = ct.stack.split(`
`), at = ce.stack.split(`
`), Ke = pe.length - 1, Ge = at.length - 1; Ke >= 1 && Ge >= 0 && pe[Ke] !== at[Ge]; )
            Ge--;
          for (; Ke >= 1 && Ge >= 0; Ke--, Ge--)
            if (pe[Ke] !== at[Ge]) {
              if (Ke !== 1 || Ge !== 1)
                do
                  if (Ke--, Ge--, Ge < 0 || pe[Ke] !== at[Ge]) {
                    var Et = `
` + pe[Ke].replace(" at new ", " at ");
                    return C.displayName && Et.includes("<anonymous>") && (Et = Et.replace("<anonymous>", C.displayName)), typeof C == "function" && q.set(C, Et), Et;
                  }
                while (Ke >= 1 && Ge >= 0);
              break;
            }
        }
      } finally {
        ee = !1, X.current = Me, Q(), Error.prepareStackTrace = Ce;
      }
      var pn = C ? C.displayName || C.name : "", Zt = pn ? te(pn) : "";
      return typeof C == "function" && q.set(C, Zt), Zt;
    }
    function ie(C, D, G) {
      return R(C, !1);
    }
    function I(C) {
      var D = C.prototype;
      return !!(D && D.isReactComponent);
    }
    function le(C, D, G) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return R(C, I(C));
      if (typeof C == "string")
        return te(C);
      switch (C) {
        case u:
          return te("Suspense");
        case d:
          return te("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case c:
            return ie(C.render);
          case f:
            return le(C.type, D, G);
          case b: {
            var ce = C, Ce = ce._payload, Me = ce._init;
            try {
              return le(Me(Ce), D, G);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, je = {}, ze = w.ReactDebugCurrentFrame;
    function _e(C) {
      if (C) {
        var D = C._owner, G = le(C.type, C._source, D ? D.type : null);
        ze.setExtraStackFrame(G);
      } else
        ze.setExtraStackFrame(null);
    }
    function st(C, D, G, ce, Ce) {
      {
        var Me = Function.call.bind(he);
        for (var ve in C)
          if (Me(C, ve)) {
            var pe = void 0;
            try {
              if (typeof C[ve] != "function") {
                var at = Error((ce || "React class") + ": " + G + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw at.name = "Invariant Violation", at;
              }
              pe = C[ve](D, ve, ce, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              pe = Ke;
            }
            pe && !(pe instanceof Error) && (_e(Ce), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", G, ve, typeof pe), _e(null)), pe instanceof Error && !(pe.message in je) && (je[pe.message] = !0, _e(Ce), T("Failed %s type: %s", G, pe.message), _e(null));
          }
      }
    }
    var we = Array.isArray;
    function rt(C) {
      return we(C);
    }
    function oe(C) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, G = D && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return G;
      }
    }
    function We(C) {
      try {
        return pt(C), !1;
      } catch {
        return !0;
      }
    }
    function pt(C) {
      return "" + C;
    }
    function ge(C) {
      if (We(C))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", oe(C)), pt(C);
    }
    var me = w.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, lt, Ee;
    Ee = {};
    function Wt(C) {
      if (he.call(C, "ref")) {
        var D = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Jt(C) {
      if (he.call(C, "key")) {
        var D = Object.getOwnPropertyDescriptor(C, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Or(C, D) {
      if (typeof C.ref == "string" && me.current && D && me.current.stateNode !== D) {
        var G = z(me.current.type);
        Ee[G] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(me.current.type), C.ref), Ee[G] = !0);
      }
    }
    function se(C, D) {
      {
        var G = function() {
          vt || (vt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function be(C, D) {
      {
        var G = function() {
          lt || (lt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Qe = function(C, D, G, ce, Ce, Me, ve) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: C,
        key: D,
        ref: G,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Me
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function qt(C, D, G, ce, Ce) {
      {
        var Me, ve = {}, pe = null, at = null;
        G !== void 0 && (ge(G), pe = "" + G), Jt(D) && (ge(D.key), pe = "" + D.key), Wt(D) && (at = D.ref, Or(D, Ce));
        for (Me in D)
          he.call(D, Me) && !ht.hasOwnProperty(Me) && (ve[Me] = D[Me]);
        if (C && C.defaultProps) {
          var Ke = C.defaultProps;
          for (Me in Ke)
            ve[Me] === void 0 && (ve[Me] = Ke[Me]);
        }
        if (pe || at) {
          var Ge = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          pe && se(ve, Ge), at && be(ve, Ge);
        }
        return Qe(C, pe, at, Ce, ce, me.current, ve);
      }
    }
    var dn = w.ReactCurrentOwner, ta = w.ReactDebugCurrentFrame;
    function fn(C) {
      if (C) {
        var D = C._owner, G = le(C.type, C._source, D ? D.type : null);
        ta.setExtraStackFrame(G);
      } else
        ta.setExtraStackFrame(null);
    }
    var Qo;
    Qo = !1;
    function ei(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function na() {
      {
        if (dn.current) {
          var C = z(dn.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function Nd(C) {
      return "";
    }
    var ra = {};
    function _d(C) {
      {
        var D = na();
        if (!D) {
          var G = typeof C == "string" ? C : C.displayName || C.name;
          G && (D = `

Check the top-level render call using <` + G + ">.");
        }
        return D;
      }
    }
    function oa(C, D) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var G = _d(D);
        if (ra[G])
          return;
        ra[G] = !0;
        var ce = "";
        C && C._owner && C._owner !== dn.current && (ce = " It was passed a child from " + z(C._owner.type) + "."), fn(C), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ce), fn(null);
      }
    }
    function ia(C, D) {
      {
        if (typeof C != "object")
          return;
        if (rt(C))
          for (var G = 0; G < C.length; G++) {
            var ce = C[G];
            ei(ce) && oa(ce, D);
          }
        else if (ei(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Ce = h(C);
          if (typeof Ce == "function" && Ce !== C.entries)
            for (var Me = Ce.call(C), ve; !(ve = Me.next()).done; )
              ei(ve.value) && oa(ve.value, D);
        }
      }
    }
    function Ad(C) {
      {
        var D = C.type;
        if (D == null || typeof D == "string")
          return;
        var G;
        if (typeof D == "function")
          G = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === f))
          G = D.propTypes;
        else
          return;
        if (G) {
          var ce = z(D);
          st(G, C.props, "prop", ce, C);
        } else if (D.PropTypes !== void 0 && !Qo) {
          Qo = !0;
          var Ce = z(D);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Md(C) {
      {
        for (var D = Object.keys(C.props), G = 0; G < D.length; G++) {
          var ce = D[G];
          if (ce !== "children" && ce !== "key") {
            fn(C), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), fn(null);
            break;
          }
        }
        C.ref !== null && (fn(C), T("Invalid attribute `ref` supplied to `React.Fragment`."), fn(null));
      }
    }
    var sa = {};
    function aa(C, D, G, ce, Ce, Me) {
      {
        var ve = N(C);
        if (!ve) {
          var pe = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = Nd();
          at ? pe += at : pe += na();
          var Ke;
          C === null ? Ke = "null" : rt(C) ? Ke = "array" : C !== void 0 && C.$$typeof === t ? (Ke = "<" + (z(C.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof C, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, pe);
        }
        var Ge = qt(C, D, G, Ce, Me);
        if (Ge == null)
          return Ge;
        if (ve) {
          var Et = D.children;
          if (Et !== void 0)
            if (ce)
              if (rt(Et)) {
                for (var pn = 0; pn < Et.length; pn++)
                  ia(Et[pn], C);
                Object.freeze && Object.freeze(Et);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ia(Et, C);
        }
        if (he.call(D, "key")) {
          var Zt = z(C), ct = Object.keys(D).filter(function(Bd) {
            return Bd !== "key";
          }), ti = ct.length > 0 ? "{key: someKey, " + ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sa[Zt + ti]) {
            var Dd = ct.length > 0 ? "{" + ct.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ti, Zt, Dd, Zt), sa[Zt + ti] = !0;
          }
        }
        return C === r ? Md(Ge) : Ad(Ge), Ge;
      }
    }
    function Ld(C, D, G) {
      return aa(C, D, G, !0);
    }
    function Id(C, D, G) {
      return aa(C, D, G, !1);
    }
    var $d = Id, jd = Ld;
    Bn.Fragment = r, Bn.jsx = $d, Bn.jsxs = jd;
  }()), Bn;
}
process.env.NODE_ENV === "production" ? Ti.exports = Gd() : Ti.exports = Xd();
var P = Ti.exports, Ri, kr = Yn;
if (process.env.NODE_ENV === "production")
  Ri = kr.createRoot, kr.hydrateRoot;
else {
  var da = kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ri = function(e, t) {
    da.usingClientEntryPoint = !0;
    try {
      return kr.createRoot(e, t);
    } finally {
      da.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
var Kt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Kt || (Kt = {}));
function Jd(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: n,
    v5Compat: r = !1
  } = e, o;
  o = t.map((S, p) => d(S, typeof S == "string" ? null : S.state, p === 0 ? "default" : void 0));
  let s = c(n ?? o.length - 1), a = Kt.Pop, l = null;
  function c(S) {
    return Math.min(Math.max(S, 0), o.length - 1);
  }
  function u() {
    return o[s];
  }
  function d(S, p, y) {
    p === void 0 && (p = null);
    let h = Qd(o ? u().pathname : "/", S, p, y);
    return sn(h.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(S)), h;
  }
  function f(S) {
    return typeof S == "string" ? S : ef(S);
  }
  return {
    get index() {
      return s;
    },
    get action() {
      return a;
    },
    get location() {
      return u();
    },
    createHref: f,
    createURL(S) {
      return new URL(f(S), "http://localhost");
    },
    encodeLocation(S) {
      let p = typeof S == "string" ? yr(S) : S;
      return {
        pathname: p.pathname || "",
        search: p.search || "",
        hash: p.hash || ""
      };
    },
    push(S, p) {
      a = Kt.Push;
      let y = d(S, p);
      s += 1, o.splice(s, o.length, y), r && l && l({
        action: a,
        location: y,
        delta: 1
      });
    },
    replace(S, p) {
      a = Kt.Replace;
      let y = d(S, p);
      o[s] = y, r && l && l({
        action: a,
        location: y,
        delta: 0
      });
    },
    go(S) {
      a = Kt.Pop;
      let p = c(s + S), y = o[p];
      s = p, l && l({
        action: a,
        location: y,
        delta: S
      });
    },
    listen(S) {
      return l = S, () => {
        l = null;
      };
    }
  };
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function sn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Zd() {
  return Math.random().toString(36).substr(2, 8);
}
function Qd(e, t, n, r) {
  return n === void 0 && (n = null), Oi({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? yr(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Zd()
  });
}
function ef(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function yr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var fa;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(fa || (fa = {}));
function tf(e, t, n) {
  return n === void 0 && (n = "/"), nf(e, t, n, !1);
}
function nf(e, t, n, r) {
  let o = typeof t == "string" ? yr(t) : t, s = rc(o.pathname || "/", n);
  if (s == null)
    return null;
  let a = tc(e);
  rf(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = mf(s);
    l = pf(a[c], u, r);
  }
  return l;
}
function tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (Be(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length));
    let u = Cn([r, c.relativePath]), d = n.concat(c);
    s.children && s.children.length > 0 && (Be(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), tc(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: df(u, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      o(s, a);
    else
      for (let c of nc(s.path))
        o(s, a, c);
  }), t;
}
function nc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0)
    return o ? [s, ""] : [s];
  let a = nc(r.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), o && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function rf(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : ff(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const of = /^:[\w-]+$/, sf = 3, af = 2, lf = 1, cf = 10, uf = -2, pa = (e) => e === "*";
function df(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(pa) && (r += uf), t && (r += af), n.filter((o) => !pa(o)).reduce((o, s) => o + (of.test(s) ? sf : s === "" ? lf : cf), r);
}
function ff(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function pf(e, t, n) {
  let {
    routesMeta: r
  } = e, o = {}, s = "/", a = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l], u = l === r.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", f = ha({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, d), b = c.route;
    if (!f && u && n && !r[r.length - 1].route.index && (f = ha({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, d)), !f)
      return null;
    Object.assign(o, f.params), a.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: Cn([s, f.pathname]),
      pathnameBase: yf(Cn([s, f.pathnameBase])),
      route: b
    }), f.pathnameBase !== "/" && (s = Cn([s, f.pathnameBase]));
  }
  return a;
}
function ha(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = hf(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o) return null;
  let s = o[0], a = s.replace(/(.)\/+$/, "$1"), l = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let {
        paramName: b,
        isOptional: S
      } = d;
      if (b === "*") {
        let y = l[f] || "";
        a = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const p = l[f];
      return S && !p ? u[b] = void 0 : u[b] = (p || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function hf(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), sn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (r.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function mf(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return sn(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function rc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Cn = (e) => e.join("/").replace(/\/\/+/g, "/"), yf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function gf(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const oc = ["post", "put", "patch", "delete"];
new Set(oc);
const bf = ["get", ...oc];
new Set(bf);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, no.apply(this, arguments);
}
const ic = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (ic.displayName = "DataRouter");
const sc = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (sc.displayName = "DataRouterState");
const vf = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (vf.displayName = "Await");
const ps = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (ps.displayName = "Navigation");
const gr = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (gr.displayName = "Location");
const br = /* @__PURE__ */ m.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (br.displayName = "Route");
const hs = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (hs.displayName = "RouteError");
function ms() {
  return m.useContext(gr) != null;
}
function Ef() {
  return ms() || (process.env.NODE_ENV !== "production" ? Be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Be(!1)), m.useContext(gr).location;
}
function Sf(e, t) {
  return xf(e, t);
}
function xf(e, t, n, r) {
  ms() || (process.env.NODE_ENV !== "production" ? Be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : Be(!1));
  let {
    navigator: o
  } = m.useContext(ps), {
    matches: s
  } = m.useContext(br), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", u = a ? a.pathnameBase : "/", d = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let T = d && d.path || "";
    lc(c, !d || T.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + T + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + T + '"> to <Route ') + ('path="' + (T === "/" ? "*" : T + "/*") + '">.'));
  }
  let f = Ef(), b;
  if (t) {
    var S;
    let T = typeof t == "string" ? yr(t) : t;
    u === "/" || (S = T.pathname) != null && S.startsWith(u) || (process.env.NODE_ENV !== "production" ? Be(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + u + '" ') + ('but pathname "' + T.pathname + '" was given in the `location` prop.')) : Be(!1)), b = T;
  } else
    b = f;
  let p = b.pathname || "/", y = p;
  if (u !== "/") {
    let T = u.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let h = tf(e, {
    pathname: y
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && sn(d || h != null, 'No routes matched location "' + b.pathname + b.search + b.hash + '" '), process.env.NODE_ENV !== "production" && sn(h == null || h[h.length - 1].route.element !== void 0 || h[h.length - 1].route.Component !== void 0 || h[h.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + b.pathname + b.search + b.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let w = Of(h && h.map((T) => Object.assign({}, T, {
    params: Object.assign({}, l, T.params),
    pathname: Cn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(T.pathname).pathname : T.pathname
    ]),
    pathnameBase: T.pathnameBase === "/" ? u : Cn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(T.pathnameBase).pathname : T.pathnameBase
    ])
  })), s, n, r);
  return t && w ? /* @__PURE__ */ m.createElement(gr.Provider, {
    value: {
      location: no({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, b),
      navigationType: Kt.Pop
    }
  }, w) : w;
}
function wf() {
  let e = _f(), t = gf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", o = {
    padding: "0.5rem",
    backgroundColor: r
  }, s = {
    padding: "2px 4px",
    backgroundColor: r
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), a = /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ m.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ m.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ m.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ m.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ m.createElement("pre", {
    style: o
  }, n) : null, a);
}
const Cf = /* @__PURE__ */ m.createElement(wf, null);
class Tf extends m.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ m.createElement(br.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ m.createElement(hs.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Rf(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = m.useContext(ic);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ m.createElement(br.Provider, {
    value: t
  }, r);
}
function Of(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var s;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let a = e, l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = a.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? Be(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : Be(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
        let {
          loaderData: b,
          errors: S
        } = n, p = f.route.loader && b[f.route.id] === void 0 && (!S || S[f.route.id] === void 0);
        if (f.route.lazy || p) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, f, b) => {
    let S, p = !1, y = null, h = null;
    n && (S = l && f.route.id ? l[f.route.id] : void 0, y = f.route.errorElement || Cf, c && (u < 0 && b === 0 ? (lc("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), p = !0, h = null) : u === b && (p = !0, h = f.route.hydrateFallbackElement || null)));
    let w = t.concat(a.slice(0, b + 1)), T = () => {
      let v;
      return S ? v = y : p ? v = h : f.route.Component ? v = /* @__PURE__ */ m.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = d, /* @__PURE__ */ m.createElement(Rf, {
        match: f,
        routeContext: {
          outlet: d,
          matches: w,
          isDataRoute: n != null
        },
        children: v
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || b === 0) ? /* @__PURE__ */ m.createElement(Tf, {
      location: n.location,
      revalidation: n.revalidation,
      component: y,
      error: S,
      children: T(),
      routeContext: {
        outlet: null,
        matches: w,
        isDataRoute: !0
      }
    }) : T();
  }, null);
}
var ki = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ki || {});
function ac(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function kf(e) {
  let t = m.useContext(sc);
  return t || (process.env.NODE_ENV !== "production" ? Be(!1, ac(e)) : Be(!1)), t;
}
function Pf(e) {
  let t = m.useContext(br);
  return t || (process.env.NODE_ENV !== "production" ? Be(!1, ac(e)) : Be(!1)), t;
}
function Nf(e) {
  let t = Pf(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? Be(!1, e + ' can only be used on routes that contain a unique "id"') : Be(!1)), n.route.id;
}
function _f() {
  var e;
  let t = m.useContext(hs), n = kf(ki.UseRouteError), r = Nf(ki.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const ma = {};
function lc(e, t, n) {
  !t && !ma[e] && (ma[e] = !0, process.env.NODE_ENV !== "production" && sn(!1, n));
}
const Af = "startTransition", ya = m[Af];
function Mf(e) {
  let {
    basename: t,
    children: n,
    initialEntries: r,
    initialIndex: o,
    future: s
  } = e, a = m.useRef();
  a.current == null && (a.current = Jd({
    initialEntries: r,
    initialIndex: o,
    v5Compat: !0
  }));
  let l = a.current, [c, u] = m.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = s || {}, f = m.useCallback((b) => {
    d && ya ? ya(() => u(b)) : u(b);
  }, [u, d]);
  return m.useLayoutEffect(() => l.listen(f), [l, f]), /* @__PURE__ */ m.createElement(Lf, {
    basename: t,
    children: n,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: s
  });
}
function cc(e) {
  process.env.NODE_ENV !== "production" ? Be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : Be(!1);
}
function Lf(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Kt.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  ms() && (process.env.NODE_ENV !== "production" ? Be(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : Be(!1));
  let c = t.replace(/^\/*/, "/"), u = m.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: no({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof r == "string" && (r = yr(r));
  let {
    pathname: d = "/",
    search: f = "",
    hash: b = "",
    state: S = null,
    key: p = "default"
  } = r, y = m.useMemo(() => {
    let h = rc(d, c);
    return h == null ? null : {
      location: {
        pathname: h,
        search: f,
        hash: b,
        state: S,
        key: p
      },
      navigationType: o
    };
  }, [c, d, f, b, S, p, o]);
  return process.env.NODE_ENV !== "production" && sn(y != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + f + b + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), y == null ? null : /* @__PURE__ */ m.createElement(ps.Provider, {
    value: u
  }, /* @__PURE__ */ m.createElement(gr.Provider, {
    children: n,
    value: y
  }));
}
function If(e) {
  let {
    children: t,
    location: n
  } = e;
  return Sf(Pi(t), n);
}
new Promise(() => {
});
function Pi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return m.Children.forEach(e, (r, o) => {
    if (!/* @__PURE__ */ m.isValidElement(r))
      return;
    let s = [...t, o];
    if (r.type === m.Fragment) {
      n.push.apply(n, Pi(r.props.children, s));
      return;
    }
    r.type !== cc && (process.env.NODE_ENV !== "production" ? Be(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : Be(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? Be(!1, "An index route cannot have child routes.") : Be(!1));
    let a = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (a.children = Pi(r.props.children, s)), n.push(a);
  }), n;
}
const rr = {
  black: "#000",
  white: "#fff"
}, hn = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, mn = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, yn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, gn = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, bn = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Fn = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, $f = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Bt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Pt = "$$material";
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ro.apply(null, arguments);
}
function uc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var jf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Df = /* @__PURE__ */ uc(
  function(e) {
    return jf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Bf = !1;
function Ff(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Vf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Uf = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, s), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !Bf : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Vf(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Ff(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ot = "-ms-", oo = "-moz-", Se = "-webkit-", dc = "comm", ys = "rule", gs = "decl", zf = "@import", fc = "@keyframes", Wf = "@layer", qf = Math.abs, bo = String.fromCharCode, Hf = Object.assign;
function Kf(e, t) {
  return tt(e, 0) ^ 45 ? (((t << 2 ^ tt(e, 0)) << 2 ^ tt(e, 1)) << 2 ^ tt(e, 2)) << 2 ^ tt(e, 3) : 0;
}
function pc(e) {
  return e.trim();
}
function Yf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function xe(e, t, n) {
  return e.replace(t, n);
}
function Ni(e, t) {
  return e.indexOf(t);
}
function tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function or(e, t, n) {
  return e.slice(t, n);
}
function It(e) {
  return e.length;
}
function bs(e) {
  return e.length;
}
function Pr(e, t) {
  return t.push(e), e;
}
function Gf(e, t) {
  return e.map(t).join("");
}
var vo = 1, kn = 1, hc = 0, ft = 0, Xe = 0, Nn = "";
function Eo(e, t, n, r, o, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: vo, column: kn, length: a, return: "" };
}
function Vn(e, t) {
  return Hf(Eo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Xf() {
  return Xe;
}
function Jf() {
  return Xe = ft > 0 ? tt(Nn, --ft) : 0, kn--, Xe === 10 && (kn = 1, vo--), Xe;
}
function yt() {
  return Xe = ft < hc ? tt(Nn, ft++) : 0, kn++, Xe === 10 && (kn = 1, vo++), Xe;
}
function Dt() {
  return tt(Nn, ft);
}
function zr() {
  return ft;
}
function vr(e, t) {
  return or(Nn, e, t);
}
function ir(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function mc(e) {
  return vo = kn = 1, hc = It(Nn = e), ft = 0, [];
}
function yc(e) {
  return Nn = "", e;
}
function Wr(e) {
  return pc(vr(ft - 1, _i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zf(e) {
  for (; (Xe = Dt()) && Xe < 33; )
    yt();
  return ir(e) > 2 || ir(Xe) > 3 ? "" : " ";
}
function Qf(e, t) {
  for (; --t && yt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return vr(e, zr() + (t < 6 && Dt() == 32 && yt() == 32));
}
function _i(e) {
  for (; yt(); )
    switch (Xe) {
      case e:
        return ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _i(Xe);
        break;
      case 40:
        e === 41 && _i(e);
        break;
      case 92:
        yt();
        break;
    }
  return ft;
}
function ep(e, t) {
  for (; yt() && e + Xe !== 57; )
    if (e + Xe === 84 && Dt() === 47)
      break;
  return "/*" + vr(t, ft - 1) + "*" + bo(e === 47 ? e : yt());
}
function tp(e) {
  for (; !ir(Dt()); )
    yt();
  return vr(e, ft);
}
function np(e) {
  return yc(qr("", null, null, null, [""], e = mc(e), 0, [0], e));
}
function qr(e, t, n, r, o, s, a, l, c) {
  for (var u = 0, d = 0, f = a, b = 0, S = 0, p = 0, y = 1, h = 1, w = 1, T = 0, v = "", x = o, E = s, O = r, k = v; h; )
    switch (p = T, T = yt()) {
      case 40:
        if (p != 108 && tt(k, f - 1) == 58) {
          Ni(k += xe(Wr(T), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Wr(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Zf(p);
        break;
      case 92:
        k += Qf(zr() - 1, 7);
        continue;
      case 47:
        switch (Dt()) {
          case 42:
          case 47:
            Pr(rp(ep(yt(), zr()), t, n), c);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        l[u++] = It(k) * w;
      case 125 * y:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            w == -1 && (k = xe(k, /\f/g, "")), S > 0 && It(k) - f && Pr(S > 32 ? ba(k + ";", r, n, f - 1) : ba(xe(k, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (Pr(O = ga(k, t, n, u, d, o, l, v, x = [], E = [], f), s), T === 123)
              if (d === 0)
                qr(k, t, O, O, x, s, f, l, E);
              else
                switch (b === 99 && tt(k, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    qr(e, O, O, r && Pr(ga(e, O, O, 0, 0, o, l, v, o, x = [], f), E), o, E, f, l, r ? x : E);
                    break;
                  default:
                    qr(k, O, O, O, [""], E, 0, l, E);
                }
        }
        u = d = S = 0, y = w = 1, v = k = "", f = a;
        break;
      case 58:
        f = 1 + It(k), S = p;
      default:
        if (y < 1) {
          if (T == 123)
            --y;
          else if (T == 125 && y++ == 0 && Jf() == 125)
            continue;
        }
        switch (k += bo(T), T * y) {
          case 38:
            w = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = (It(k) - 1) * w, w = 1;
            break;
          case 64:
            Dt() === 45 && (k += Wr(yt())), b = Dt(), d = f = It(v = k += tp(zr())), T++;
            break;
          case 45:
            p === 45 && It(k) == 2 && (y = 0);
        }
    }
  return s;
}
function ga(e, t, n, r, o, s, a, l, c, u, d) {
  for (var f = o - 1, b = o === 0 ? s : [""], S = bs(b), p = 0, y = 0, h = 0; p < r; ++p)
    for (var w = 0, T = or(e, f + 1, f = qf(y = a[p])), v = e; w < S; ++w)
      (v = pc(y > 0 ? b[w] + " " + T : xe(T, /&\f/g, b[w]))) && (c[h++] = v);
  return Eo(e, t, n, o === 0 ? ys : l, c, u, d);
}
function rp(e, t, n) {
  return Eo(e, t, n, dc, bo(Xf()), or(e, 2, -2), 0);
}
function ba(e, t, n, r) {
  return Eo(e, t, n, gs, or(e, 0, r), or(e, r + 1, -1), r);
}
function Tn(e, t) {
  for (var n = "", r = bs(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function op(e, t, n, r) {
  switch (e.type) {
    case Wf:
      if (e.children.length) break;
    case zf:
    case gs:
      return e.return = e.return || e.value;
    case dc:
      return "";
    case fc:
      return e.return = e.value + "{" + Tn(e.children, r) + "}";
    case ys:
      e.value = e.props.join(",");
  }
  return It(n = Tn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ip(e) {
  var t = bs(e);
  return function(n, r, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, o, s) || "";
    return a;
  };
}
function sp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ap = function(t, n, r) {
  for (var o = 0, s = 0; o = s, s = Dt(), o === 38 && s === 12 && (n[r] = 1), !ir(s); )
    yt();
  return vr(t, ft);
}, lp = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ir(o)) {
      case 0:
        o === 38 && Dt() === 12 && (n[r] = 1), t[r] += ap(ft - 1, n, r);
        break;
      case 2:
        t[r] += Wr(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Dt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += bo(o);
    }
  while (o = yt());
  return t;
}, cp = function(t, n) {
  return yc(lp(mc(t), n));
}, va = /* @__PURE__ */ new WeakMap(), up = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !va.get(r)) && !o) {
      va.set(t, !0);
      for (var s = [], a = cp(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, dp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function gc(e, t) {
  switch (Kf(e, t)) {
    case 5103:
      return Se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + oo + e + ot + e + e;
    case 6828:
    case 4268:
      return Se + e + ot + e + e;
    case 6165:
      return Se + e + ot + "flex-" + e + e;
    case 5187:
      return Se + e + xe(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + ot + "flex-$1$2") + e;
    case 5443:
      return Se + e + ot + "flex-item-" + xe(e, /flex-|-self/, "") + e;
    case 4675:
      return Se + e + ot + "flex-line-pack" + xe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Se + e + ot + xe(e, "shrink", "negative") + e;
    case 5292:
      return Se + e + ot + xe(e, "basis", "preferred-size") + e;
    case 6060:
      return Se + "box-" + xe(e, "-grow", "") + Se + e + ot + xe(e, "grow", "positive") + e;
    case 4554:
      return Se + xe(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    case 6187:
      return xe(xe(xe(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return xe(e, /(image-set\([^]*)/, Se + "$1$`$1");
    case 4968:
      return xe(xe(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xe(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (It(e) - 1 - t > 6) switch (tt(e, t + 1)) {
        case 109:
          if (tt(e, t + 4) !== 45) break;
        case 102:
          return xe(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + oo + (tt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ni(e, "stretch") ? gc(xe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (tt(e, t + 1) !== 115) break;
    case 6444:
      switch (tt(e, It(e) - 3 - (~Ni(e, "!important") && 10))) {
        case 107:
          return xe(e, ":", ":" + Se) + e;
        case 101:
          return xe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Se + (tt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + ot + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (tt(e, t + 11)) {
        case 114:
          return Se + e + ot + xe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Se + e + ot + xe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Se + e + ot + xe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Se + e + ot + e + e;
  }
  return e;
}
var fp = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case gs:
      t.return = gc(t.value, t.length);
      break;
    case fc:
      return Tn([Vn(t, {
        value: xe(t.value, "@", "@" + Se)
      })], o);
    case ys:
      if (t.length) return Gf(t.props, function(s) {
        switch (Yf(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Tn([Vn(t, {
              props: [xe(s, /:(read-\w+)/, ":" + oo + "$1")]
            })], o);
          case "::placeholder":
            return Tn([Vn(t, {
              props: [xe(s, /:(plac\w+)/, ":" + Se + "input-$1")]
            }), Vn(t, {
              props: [xe(s, /:(plac\w+)/, ":" + oo + "$1")]
            }), Vn(t, {
              props: [xe(s, /:(plac\w+)/, ot + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, pp = [fp], hp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var h = y.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || pp, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var h = y.getAttribute("data-emotion").split(" "), w = 1; w < h.length; w++)
        s[h[w]] = !0;
      l.push(y);
    }
  );
  var c, u = [up, dp];
  {
    var d, f = [op, sp(function(y) {
      d.insert(y);
    })], b = ip(u.concat(o, f)), S = function(h) {
      return Tn(np(h), b);
    };
    c = function(h, w, T, v) {
      d = T, S(h ? h + "{" + w.styles + "}" : w.styles), v && (p.inserted[w.name] = !0);
    };
  }
  var p = {
    key: n,
    sheet: new Uf({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return p.sheet.hydrate(l), p;
}, Ai = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function mp() {
  if (Ea) return Te;
  Ea = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var O = E.$$typeof;
      switch (O) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case r:
            case s:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case p:
                case S:
                case a:
                  return E;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function x(E) {
    return v(E) === u;
  }
  return Te.AsyncMode = c, Te.ConcurrentMode = u, Te.ContextConsumer = l, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = d, Te.Fragment = r, Te.Lazy = p, Te.Memo = S, Te.Portal = n, Te.Profiler = s, Te.StrictMode = o, Te.Suspense = f, Te.isAsyncMode = function(E) {
    return x(E) || v(E) === c;
  }, Te.isConcurrentMode = x, Te.isContextConsumer = function(E) {
    return v(E) === l;
  }, Te.isContextProvider = function(E) {
    return v(E) === a;
  }, Te.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Te.isForwardRef = function(E) {
    return v(E) === d;
  }, Te.isFragment = function(E) {
    return v(E) === r;
  }, Te.isLazy = function(E) {
    return v(E) === p;
  }, Te.isMemo = function(E) {
    return v(E) === S;
  }, Te.isPortal = function(E) {
    return v(E) === n;
  }, Te.isProfiler = function(E) {
    return v(E) === s;
  }, Te.isStrictMode = function(E) {
    return v(E) === o;
  }, Te.isSuspense = function(E) {
    return v(E) === f;
  }, Te.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === s || E === o || E === f || E === b || typeof E == "object" && E !== null && (E.$$typeof === p || E.$$typeof === S || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === h || E.$$typeof === w || E.$$typeof === T || E.$$typeof === y);
  }, Te.typeOf = v, Te;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function yp() {
  return Sa || (Sa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === u || R === s || R === o || R === f || R === b || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === S || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === h || R.$$typeof === w || R.$$typeof === T || R.$$typeof === y);
    }
    function x(R) {
      if (typeof R == "object" && R !== null) {
        var ie = R.$$typeof;
        switch (ie) {
          case t:
            var I = R.type;
            switch (I) {
              case c:
              case u:
              case r:
              case s:
              case o:
              case f:
                return I;
              default:
                var le = I && I.$$typeof;
                switch (le) {
                  case l:
                  case d:
                  case p:
                  case S:
                  case a:
                    return le;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var E = c, O = u, k = l, L = a, g = t, N = d, B = r, F = p, z = S, V = n, U = s, j = o, K = f, Y = !1;
    function re(R) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(R) || x(R) === c;
    }
    function M(R) {
      return x(R) === u;
    }
    function $(R) {
      return x(R) === l;
    }
    function J(R) {
      return x(R) === a;
    }
    function H(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function W(R) {
      return x(R) === d;
    }
    function Q(R) {
      return x(R) === r;
    }
    function X(R) {
      return x(R) === p;
    }
    function Z(R) {
      return x(R) === S;
    }
    function te(R) {
      return x(R) === n;
    }
    function ee(R) {
      return x(R) === s;
    }
    function q(R) {
      return x(R) === o;
    }
    function ne(R) {
      return x(R) === f;
    }
    Re.AsyncMode = E, Re.ConcurrentMode = O, Re.ContextConsumer = k, Re.ContextProvider = L, Re.Element = g, Re.ForwardRef = N, Re.Fragment = B, Re.Lazy = F, Re.Memo = z, Re.Portal = V, Re.Profiler = U, Re.StrictMode = j, Re.Suspense = K, Re.isAsyncMode = re, Re.isConcurrentMode = M, Re.isContextConsumer = $, Re.isContextProvider = J, Re.isElement = H, Re.isForwardRef = W, Re.isFragment = Q, Re.isLazy = X, Re.isMemo = Z, Re.isPortal = te, Re.isProfiler = ee, Re.isStrictMode = q, Re.isSuspense = ne, Re.isValidElementType = v, Re.typeOf = x;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ai.exports = mp() : Ai.exports = yp();
var gp = Ai.exports, bc = gp, bp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vc = {};
vc[bc.ForwardRef] = bp;
vc[bc.Memo] = vp;
var Ep = !0;
function Sp(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Ec = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ep === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Sc = function(t, n, r) {
  Ec(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function xp(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var wp = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Cp = !1, Tp = /[A-Z]|^ms/g, Rp = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xc = function(t) {
  return t.charCodeAt(1) === 45;
}, xa = function(t) {
  return t != null && typeof t != "boolean";
}, ni = /* @__PURE__ */ uc(function(e) {
  return xc(e) ? e : e.replace(Tp, "-$&").toLowerCase();
}), wa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Rp, function(r, o, s) {
          return $t = {
            name: o,
            styles: s,
            next: $t
          }, o;
        });
  }
  return wp[t] !== 1 && !xc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Op = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function sr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return $t = {
          name: o.name,
          styles: o.styles,
          next: $t
        }, o.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            $t = {
              name: a.name,
              styles: a.styles,
              next: $t
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return kp(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = $t, u = n(e);
        return $t = c, sr(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function kp(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += sr(e, t, n[o]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : xa(l) && (r += ni(s) + ":" + wa(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Cp)
          throw new Error(Op);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            xa(a[c]) && (r += ni(s) + ":" + wa(s, a[c]) + ";");
        else {
          var u = sr(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += ni(s) + ":" + u + ";";
              break;
            }
            default:
              r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Ca = /label:\s*([^\s;\n{]+)\s*(;|$)/g, $t;
function vs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  $t = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, o += sr(n, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += sr(n, t, e[l]), r) {
      var c = s;
      o += c[l];
    }
  Ca.lastIndex = 0;
  for (var u = "", d; (d = Ca.exec(o)) !== null; )
    u += "-" + d[1];
  var f = xp(o) + u;
  return {
    name: f,
    styles: o,
    next: $t
  };
}
var Pp = function(t) {
  return t();
}, wc = m.useInsertionEffect ? m.useInsertionEffect : !1, Np = wc || Pp, Ta = wc || m.useLayoutEffect, Cc = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ hp({
    key: "css"
  }) : null
);
Cc.Provider;
var Tc = function(t) {
  return /* @__PURE__ */ Ud(function(n, r) {
    var o = ec(Cc);
    return t(n, o, r);
  });
}, So = /* @__PURE__ */ m.createContext({}), _p = /* @__PURE__ */ Tc(function(e, t) {
  var n = e.styles, r = vs([n], void 0, m.useContext(So)), o = m.useRef();
  return Ta(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Ta(function() {
    var s = o.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Sc(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function xo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return vs(t);
}
var _n = function() {
  var t = xo.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ap = Df, Mp = function(t) {
  return t !== "theme";
}, Ra = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ap : Mp;
}, Oa = function(t, n, r) {
  var o;
  if (n) {
    var s = n.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Lp = !1, Ip = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ec(n, r, o), Np(function() {
    return Sc(n, r, o);
  }), null;
}, $p = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = Oa(t, n, r), c = l || Ra(o), u = !c("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var b = d.length, S = 1; S < b; S++)
        f.push(d[S], d[0][S]);
    }
    var p = Tc(function(y, h, w) {
      var T = u && y.as || o, v = "", x = [], E = y;
      if (y.theme == null) {
        E = {};
        for (var O in y)
          E[O] = y[O];
        E.theme = m.useContext(So);
      }
      typeof y.className == "string" ? v = Sp(h.registered, x, y.className) : y.className != null && (v = y.className + " ");
      var k = vs(f.concat(x), h.registered, E);
      v += h.key + "-" + k.name, a !== void 0 && (v += " " + a);
      var L = u && l === void 0 ? Ra(T) : c, g = {};
      for (var N in y)
        u && N === "as" || L(N) && (g[N] = y[N]);
      return g.className = v, w && (g.ref = w), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ip, {
        cache: h,
        serialized: k,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ m.createElement(T, g));
    });
    return p.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = f, p.__emotion_forwardProp = l, Object.defineProperty(p, "toString", {
      value: function() {
        return a === void 0 && Lp ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), p.withComponent = function(y, h) {
      return e(y, ro({}, n, h, {
        shouldForwardProp: Oa(p, h, !0)
      })).apply(void 0, f);
    }, p;
  };
}, jp = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Mi = $p.bind();
jp.forEach(function(e) {
  Mi[e] = Mi(e);
});
var Li = { exports: {} }, Nr = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Dp() {
  if (ka) return Oe;
  ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var O = E.$$typeof;
      switch (O) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case r:
            case s:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case p:
                case S:
                case a:
                  return E;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function x(E) {
    return v(E) === u;
  }
  return Oe.AsyncMode = c, Oe.ConcurrentMode = u, Oe.ContextConsumer = l, Oe.ContextProvider = a, Oe.Element = t, Oe.ForwardRef = d, Oe.Fragment = r, Oe.Lazy = p, Oe.Memo = S, Oe.Portal = n, Oe.Profiler = s, Oe.StrictMode = o, Oe.Suspense = f, Oe.isAsyncMode = function(E) {
    return x(E) || v(E) === c;
  }, Oe.isConcurrentMode = x, Oe.isContextConsumer = function(E) {
    return v(E) === l;
  }, Oe.isContextProvider = function(E) {
    return v(E) === a;
  }, Oe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Oe.isForwardRef = function(E) {
    return v(E) === d;
  }, Oe.isFragment = function(E) {
    return v(E) === r;
  }, Oe.isLazy = function(E) {
    return v(E) === p;
  }, Oe.isMemo = function(E) {
    return v(E) === S;
  }, Oe.isPortal = function(E) {
    return v(E) === n;
  }, Oe.isProfiler = function(E) {
    return v(E) === s;
  }, Oe.isStrictMode = function(E) {
    return v(E) === o;
  }, Oe.isSuspense = function(E) {
    return v(E) === f;
  }, Oe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === s || E === o || E === f || E === b || typeof E == "object" && E !== null && (E.$$typeof === p || E.$$typeof === S || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === h || E.$$typeof === w || E.$$typeof === T || E.$$typeof === y);
  }, Oe.typeOf = v, Oe;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Bp() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function v(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === u || R === s || R === o || R === f || R === b || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === S || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === h || R.$$typeof === w || R.$$typeof === T || R.$$typeof === y);
    }
    function x(R) {
      if (typeof R == "object" && R !== null) {
        var ie = R.$$typeof;
        switch (ie) {
          case t:
            var I = R.type;
            switch (I) {
              case c:
              case u:
              case r:
              case s:
              case o:
              case f:
                return I;
              default:
                var le = I && I.$$typeof;
                switch (le) {
                  case l:
                  case d:
                  case p:
                  case S:
                  case a:
                    return le;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var E = c, O = u, k = l, L = a, g = t, N = d, B = r, F = p, z = S, V = n, U = s, j = o, K = f, Y = !1;
    function re(R) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(R) || x(R) === c;
    }
    function M(R) {
      return x(R) === u;
    }
    function $(R) {
      return x(R) === l;
    }
    function J(R) {
      return x(R) === a;
    }
    function H(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function W(R) {
      return x(R) === d;
    }
    function Q(R) {
      return x(R) === r;
    }
    function X(R) {
      return x(R) === p;
    }
    function Z(R) {
      return x(R) === S;
    }
    function te(R) {
      return x(R) === n;
    }
    function ee(R) {
      return x(R) === s;
    }
    function q(R) {
      return x(R) === o;
    }
    function ne(R) {
      return x(R) === f;
    }
    ke.AsyncMode = E, ke.ConcurrentMode = O, ke.ContextConsumer = k, ke.ContextProvider = L, ke.Element = g, ke.ForwardRef = N, ke.Fragment = B, ke.Lazy = F, ke.Memo = z, ke.Portal = V, ke.Profiler = U, ke.StrictMode = j, ke.Suspense = K, ke.isAsyncMode = re, ke.isConcurrentMode = M, ke.isContextConsumer = $, ke.isContextProvider = J, ke.isElement = H, ke.isForwardRef = W, ke.isFragment = Q, ke.isLazy = X, ke.isMemo = Z, ke.isPortal = te, ke.isProfiler = ee, ke.isStrictMode = q, ke.isSuspense = ne, ke.isValidElementType = v, ke.typeOf = x;
  }()), ke;
}
var Na;
function Rc() {
  return Na || (Na = 1, process.env.NODE_ENV === "production" ? Nr.exports = Dp() : Nr.exports = Bp()), Nr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ri, _a;
function Fp() {
  if (_a) return ri;
  _a = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ri = o() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var b = 0; b < u.length; b++)
          n.call(l, u[b]) && (c[u[b]] = l[u[b]]);
      }
    }
    return c;
  }, ri;
}
var oi, Aa;
function Es() {
  if (Aa) return oi;
  Aa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oi = e, oi;
}
var ii, Ma;
function Oc() {
  return Ma || (Ma = 1, ii = Function.call.bind(Object.prototype.hasOwnProperty)), ii;
}
var si, La;
function Vp() {
  if (La) return si;
  La = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Es(), n = {}, r = Oc();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var b = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var S = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, si = o, si;
}
var ai, Ia;
function Up() {
  if (Ia) return ai;
  Ia = 1;
  var e = Rc(), t = Fp(), n = Es(), r = Oc(), o = Vp(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return ai = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(M) {
      var $ = M && (u && M[u] || M[d]);
      if (typeof $ == "function")
        return $;
    }
    var b = "<<anonymous>>", S = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: T(),
      arrayOf: v,
      element: x(),
      elementType: E(),
      instanceOf: O,
      node: N(),
      objectOf: L,
      oneOf: k,
      oneOfType: g,
      shape: F,
      exact: z
    };
    function p(M, $) {
      return M === $ ? M !== 0 || 1 / M === 1 / $ : M !== M && $ !== $;
    }
    function y(M, $) {
      this.message = M, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function h(M) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, J = 0;
      function H(Q, X, Z, te, ee, q, ne) {
        if (te = te || b, q = q || Z, ne !== n) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = te + ":" + Z;
            !$[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[ie] = !0, J++);
          }
        }
        return X[Z] == null ? Q ? X[Z] === null ? new y("The " + ee + " `" + q + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new y("The " + ee + " `" + q + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : M(X, Z, te, ee, q);
      }
      var W = H.bind(null, !1);
      return W.isRequired = H.bind(null, !0), W;
    }
    function w(M) {
      function $(J, H, W, Q, X, Z) {
        var te = J[H], ee = j(te);
        if (ee !== M) {
          var q = K(te);
          return new y(
            "Invalid " + Q + " `" + X + "` of type " + ("`" + q + "` supplied to `" + W + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return h($);
    }
    function T() {
      return h(a);
    }
    function v(M) {
      function $(J, H, W, Q, X) {
        if (typeof M != "function")
          return new y("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var Z = J[H];
        if (!Array.isArray(Z)) {
          var te = j(Z);
          return new y("Invalid " + Q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected an array."));
        }
        for (var ee = 0; ee < Z.length; ee++) {
          var q = M(Z, ee, W, Q, X + "[" + ee + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return h($);
    }
    function x() {
      function M($, J, H, W, Q) {
        var X = $[J];
        if (!l(X)) {
          var Z = j(X);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(M);
    }
    function E() {
      function M($, J, H, W, Q) {
        var X = $[J];
        if (!e.isValidElementType(X)) {
          var Z = j(X);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(M);
    }
    function O(M) {
      function $(J, H, W, Q, X) {
        if (!(J[H] instanceof M)) {
          var Z = M.name || b, te = re(J[H]);
          return new y("Invalid " + Q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return h($);
    }
    function k(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(J, H, W, Q, X) {
        for (var Z = J[H], te = 0; te < M.length; te++)
          if (p(Z, M[te]))
            return null;
        var ee = JSON.stringify(M, function(ne, R) {
          var ie = K(R);
          return ie === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + Q + " `" + X + "` of value `" + String(Z) + "` " + ("supplied to `" + W + "`, expected one of " + ee + "."));
      }
      return h($);
    }
    function L(M) {
      function $(J, H, W, Q, X) {
        if (typeof M != "function")
          return new y("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var Z = J[H], te = j(Z);
        if (te !== "object")
          return new y("Invalid " + Q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected an object."));
        for (var ee in Z)
          if (r(Z, ee)) {
            var q = M(Z, ee, W, Q, X + "." + ee, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return h($);
    }
    function g(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < M.length; $++) {
        var J = M[$];
        if (typeof J != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(J) + " at index " + $ + "."
          ), a;
      }
      function H(W, Q, X, Z, te) {
        for (var ee = [], q = 0; q < M.length; q++) {
          var ne = M[q], R = ne(W, Q, X, Z, te, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && ee.push(R.data.expectedType);
        }
        var ie = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new y("Invalid " + Z + " `" + te + "` supplied to " + ("`" + X + "`" + ie + "."));
      }
      return h(H);
    }
    function N() {
      function M($, J, H, W, Q) {
        return V($[J]) ? null : new y("Invalid " + W + " `" + Q + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return h(M);
    }
    function B(M, $, J, H, W) {
      return new y(
        (M || "React class") + ": " + $ + " type `" + J + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function F(M) {
      function $(J, H, W, Q, X) {
        var Z = J[H], te = j(Z);
        if (te !== "object")
          return new y("Invalid " + Q + " `" + X + "` of type `" + te + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var ee in M) {
          var q = M[ee];
          if (typeof q != "function")
            return B(W, Q, X, ee, K(q));
          var ne = q(Z, ee, W, Q, X + "." + ee, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return h($);
    }
    function z(M) {
      function $(J, H, W, Q, X) {
        var Z = J[H], te = j(Z);
        if (te !== "object")
          return new y("Invalid " + Q + " `" + X + "` of type `" + te + "` " + ("supplied to `" + W + "`, expected `object`."));
        var ee = t({}, J[H], M);
        for (var q in ee) {
          var ne = M[q];
          if (r(M, q) && typeof ne != "function")
            return B(W, Q, X, q, K(ne));
          if (!ne)
            return new y(
              "Invalid " + Q + " `" + X + "` key `" + q + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(J[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var R = ne(Z, q, W, Q, X + "." + q, n);
          if (R)
            return R;
        }
        return null;
      }
      return h($);
    }
    function V(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(V);
          if (M === null || l(M))
            return !0;
          var $ = f(M);
          if ($) {
            var J = $.call(M), H;
            if ($ !== M.entries) {
              for (; !(H = J.next()).done; )
                if (!V(H.value))
                  return !1;
            } else
              for (; !(H = J.next()).done; ) {
                var W = H.value;
                if (W && !V(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(M, $) {
      return M === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function j(M) {
      var $ = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : U($, M) ? "symbol" : $;
    }
    function K(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var $ = j(M);
      if ($ === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function Y(M) {
      var $ = K(M);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function re(M) {
      return !M.constructor || !M.constructor.name ? b : M.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, ai;
}
var li, $a;
function zp() {
  if ($a) return li;
  $a = 1;
  var e = Es();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, li = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, li;
}
if (process.env.NODE_ENV !== "production") {
  var Wp = Rc(), qp = !0;
  Li.exports = Up()(Wp.isElement, qp);
} else
  Li.exports = zp()();
var Hp = Li.exports;
const i = /* @__PURE__ */ Yd(Hp);
function Kp(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ss(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Kp(o) ? n : o) : t;
  return /* @__PURE__ */ P.jsx(_p, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function kc(e, t) {
  const n = Mi(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Yp = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function jt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pc(e) {
  if (!jt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pc(e[n]);
  }), t;
}
function et(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return jt(e) && jt(t) && Object.keys(t).forEach((o) => {
    jt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && jt(e[o]) ? r[o] = et(e[o], t[o], n) : n.clone ? r[o] = jt(t[o]) ? Pc(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Gp = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Xp(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, s = Gp(t), a = Object.keys(s);
  function l(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${n})`;
  }
  function c(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - r / 100}${n})`;
  }
  function u(b, S) {
    const p = a.indexOf(S);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${n}) and (max-width:${(p !== -1 && typeof t[a[p]] == "number" ? t[a[p]] : S) - r / 100}${n})`;
  }
  function d(b) {
    return a.indexOf(b) + 1 < a.length ? u(b, a[a.indexOf(b) + 1]) : l(b);
  }
  function f(b) {
    const S = a.indexOf(b);
    return S === 0 ? l(a[1]) : S === a.length - 1 ? c(a[S]) : u(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n,
    ...o
  };
}
function Jp(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = o.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const s = t[o];
    return delete r[o], r[o] = s, r;
  }, {
    ...t
  }) : t;
}
function Zp(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Qp(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Bt(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(s);
}
function eh(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function n(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, o = (s) => (n(r, s), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const th = {
  borderRadius: 4
}, Xt = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function Qn(e, t) {
  return t ? et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const wo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ja = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${wo[e]}px)`
}, nh = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : wo[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Nt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || ja;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || ja;
    return Object.keys(t).reduce((a, l) => {
      if (Zp(s.keys, l)) {
        const c = Qp(r.containerQueries ? r : nh, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || wo).includes(l)) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Nc(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const s = e.up(o);
    return r[s] = {}, r;
  }, {})) || {};
}
function _c(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function rh(e, ...t) {
  const n = Nc(e), r = [n, ...t].reduce((o, s) => et(o, s), {});
  return _c(Object.keys(n), r);
}
function oh(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, s) => {
    s < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ci({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || oh(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ue(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Bt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Co(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function io(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Co(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ye(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Co(c, r) || {};
    return Nt(a, l, (f) => {
      let b = io(u, o, f);
      return f === b && typeof f == "string" && (b = io(u, o, `${t}${f === "default" ? "" : ue(f)}`, f)), n === !1 ? b : {
        [n]: b
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Xt
  } : {}, s.filterProps = [t], s;
}
function ih(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const sh = {
  m: "margin",
  p: "padding"
}, ah = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Da = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, lh = ih((e) => {
  if (e.length > 2)
    if (Da[e])
      e = Da[e];
    else
      return [e];
  const [t, n] = e.split(""), r = sh[t], o = ah[n] || "";
  return Array.isArray(o) ? o.map((s) => r + s) : [r + o];
}), To = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ro = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ch = [...To, ...Ro];
function Er(e, t, n, r) {
  const o = Co(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), typeof o == "string" ? `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[a];
    return s >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Oo(e) {
  return Er(e, "spacing", 8, "spacing");
}
function an(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function uh(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = an(t, n), r), {});
}
function dh(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = lh(n), s = uh(o, r), a = e[n];
  return Nt(e, a, s);
}
function Ac(e, t) {
  const n = Oo(e.theme);
  return Object.keys(e).map((r) => dh(e, t, r, n)).reduce(Qn, {});
}
function qe(e) {
  return Ac(e, To);
}
qe.propTypes = process.env.NODE_ENV !== "production" ? To.reduce((e, t) => (e[t] = Xt, e), {}) : {};
qe.filterProps = To;
function He(e) {
  return Ac(e, Ro);
}
He.propTypes = process.env.NODE_ENV !== "production" ? Ro.reduce((e, t) => (e[t] = Xt, e), {}) : {};
He.filterProps = Ro;
process.env.NODE_ENV !== "production" && ch.reduce((e, t) => (e[t] = Xt, e), {});
function Mc(e = 8, t = Oo({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function ko(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, s) => t[s] ? Qn(o, t[s](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Tt(e, t) {
  return Ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const fh = Tt("border", xt), ph = Tt("borderTop", xt), hh = Tt("borderRight", xt), mh = Tt("borderBottom", xt), yh = Tt("borderLeft", xt), gh = Tt("borderColor"), bh = Tt("borderTopColor"), vh = Tt("borderRightColor"), Eh = Tt("borderBottomColor"), Sh = Tt("borderLeftColor"), xh = Tt("outline", xt), wh = Tt("outlineColor"), Po = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Er(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: an(t, r)
    });
    return Nt(e, e.borderRadius, n);
  }
  return null;
};
Po.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Xt
} : {};
Po.filterProps = ["borderRadius"];
ko(fh, ph, hh, mh, yh, gh, bh, vh, Eh, Sh, Po, xh, wh);
const No = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Er(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: an(t, r)
    });
    return Nt(e, e.gap, n);
  }
  return null;
};
No.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Xt
} : {};
No.filterProps = ["gap"];
const _o = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Er(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: an(t, r)
    });
    return Nt(e, e.columnGap, n);
  }
  return null;
};
_o.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Xt
} : {};
_o.filterProps = ["columnGap"];
const Ao = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Er(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: an(t, r)
    });
    return Nt(e, e.rowGap, n);
  }
  return null;
};
Ao.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Xt
} : {};
Ao.filterProps = ["rowGap"];
const Ch = Ye({
  prop: "gridColumn"
}), Th = Ye({
  prop: "gridRow"
}), Rh = Ye({
  prop: "gridAutoFlow"
}), Oh = Ye({
  prop: "gridAutoColumns"
}), kh = Ye({
  prop: "gridAutoRows"
}), Ph = Ye({
  prop: "gridTemplateColumns"
}), Nh = Ye({
  prop: "gridTemplateRows"
}), _h = Ye({
  prop: "gridTemplateAreas"
}), Ah = Ye({
  prop: "gridArea"
});
ko(No, _o, Ao, Ch, Th, Rh, Oh, kh, Ph, Nh, _h, Ah);
function Rn(e, t) {
  return t === "grey" ? t : e;
}
const Mh = Ye({
  prop: "color",
  themeKey: "palette",
  transform: Rn
}), Lh = Ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Rn
}), Ih = Ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Rn
});
ko(Mh, Lh, Ih);
function mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $h = Ye({
  prop: "width",
  transform: mt
}), xs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, s, a, l, c;
      const r = ((a = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || wo[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: mt(n)
      };
    };
    return Nt(e, e.maxWidth, t);
  }
  return null;
};
xs.filterProps = ["maxWidth"];
const jh = Ye({
  prop: "minWidth",
  transform: mt
}), Dh = Ye({
  prop: "height",
  transform: mt
}), Bh = Ye({
  prop: "maxHeight",
  transform: mt
}), Fh = Ye({
  prop: "minHeight",
  transform: mt
});
Ye({
  prop: "size",
  cssProperty: "width",
  transform: mt
});
Ye({
  prop: "size",
  cssProperty: "height",
  transform: mt
});
const Vh = Ye({
  prop: "boxSizing"
});
ko($h, xs, jh, Dh, Bh, Fh, Vh);
const Sr = {
  // borders
  border: {
    themeKey: "borders",
    transform: xt
  },
  borderTop: {
    themeKey: "borders",
    transform: xt
  },
  borderRight: {
    themeKey: "borders",
    transform: xt
  },
  borderBottom: {
    themeKey: "borders",
    transform: xt
  },
  borderLeft: {
    themeKey: "borders",
    transform: xt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: xt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Po
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Rn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Rn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Rn
  },
  // spacing
  p: {
    style: He
  },
  pt: {
    style: He
  },
  pr: {
    style: He
  },
  pb: {
    style: He
  },
  pl: {
    style: He
  },
  px: {
    style: He
  },
  py: {
    style: He
  },
  padding: {
    style: He
  },
  paddingTop: {
    style: He
  },
  paddingRight: {
    style: He
  },
  paddingBottom: {
    style: He
  },
  paddingLeft: {
    style: He
  },
  paddingX: {
    style: He
  },
  paddingY: {
    style: He
  },
  paddingInline: {
    style: He
  },
  paddingInlineStart: {
    style: He
  },
  paddingInlineEnd: {
    style: He
  },
  paddingBlock: {
    style: He
  },
  paddingBlockStart: {
    style: He
  },
  paddingBlockEnd: {
    style: He
  },
  m: {
    style: qe
  },
  mt: {
    style: qe
  },
  mr: {
    style: qe
  },
  mb: {
    style: qe
  },
  ml: {
    style: qe
  },
  mx: {
    style: qe
  },
  my: {
    style: qe
  },
  margin: {
    style: qe
  },
  marginTop: {
    style: qe
  },
  marginRight: {
    style: qe
  },
  marginBottom: {
    style: qe
  },
  marginLeft: {
    style: qe
  },
  marginX: {
    style: qe
  },
  marginY: {
    style: qe
  },
  marginInline: {
    style: qe
  },
  marginInlineStart: {
    style: qe
  },
  marginInlineEnd: {
    style: qe
  },
  marginBlock: {
    style: qe
  },
  marginBlockStart: {
    style: qe
  },
  marginBlockEnd: {
    style: qe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: No
  },
  rowGap: {
    style: Ao
  },
  columnGap: {
    style: _o
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: mt
  },
  maxWidth: {
    style: xs
  },
  minWidth: {
    transform: mt
  },
  height: {
    transform: mt
  },
  maxHeight: {
    transform: mt
  },
  minHeight: {
    transform: mt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Uh(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wh() {
  function e(n, r, o, s) {
    const a = {
      [n]: r,
      theme: o
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const b = Co(o, u) || {};
    return f ? f(a) : Nt(a, r, (p) => {
      let y = io(b, d, p);
      return p === y && typeof p == "string" && (y = io(b, d, `${n}${p === "default" ? "" : ue(p)}`, p)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r)
      return null;
    const s = o.unstable_sxConfig ?? Sr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Nc(o.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((b) => {
        const S = zh(c[b], o);
        if (S != null)
          if (typeof S == "object")
            if (s[b])
              f = Qn(f, e(b, S, o, s));
            else {
              const p = Nt({
                theme: o
              }, S, (y) => ({
                [b]: y
              }));
              Uh(p, S) ? f[b] = t({
                sx: S,
                theme: o
              }) : f = Qn(f, p);
            }
          else
            f = Qn(f, e(b, S, o, s));
      }), Jp(o, _c(d, f));
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const un = Wh();
un.filterProps = ["sx"];
function qh(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Mo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, l = Xp(n), c = Mc(o);
  let u = et({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...th,
      ...s
    }
  }, a);
  return u = eh(u), u.applyStyles = qh, u = t.reduce((d, f) => et(d, f), u), u.unstable_sxConfig = {
    ...Sr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return un({
      sx: f,
      theme: this
    });
  }, u;
}
function Hh(e) {
  return Object.keys(e).length === 0;
}
function Lc(e = null) {
  const t = m.useContext(So);
  return !t || Hh(t) ? e : t;
}
const Kh = Mo();
function Lo(e = Kh) {
  return Lc(e);
}
function Ic({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Lo(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ P.jsx(Ss, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const Yh = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Sr;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function ws(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = Yh(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return jt(l) ? {
      ...r,
      ...l
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...o,
    sx: s
  };
}
const Ba = (e) => e, Gh = () => {
  let e = Ba;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ba;
    }
  };
}, $c = Gh();
function jc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = jc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = jc(e)) && (r && (r += " "), r += t);
  return r;
}
function Xh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, s = kc("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(un);
  return /* @__PURE__ */ m.forwardRef(function(c, u) {
    const d = Lo(n), {
      className: f,
      component: b = "div",
      ...S
    } = ws(c);
    return /* @__PURE__ */ P.jsx(s, {
      as: b,
      ref: u,
      className: fe(f, o ? o(r) : r),
      theme: t && d[t] || d,
      ...S
    });
  });
}
const Jh = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function $e(e, t, n = "Mui") {
  const r = Jh[t];
  return r ? `${n}-${r}` : `${$c.generate(e)}-${t}`;
}
function Ae(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = $e(e, o, n);
  }), r;
}
var Ii = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Zh() {
  if (Fa) return Pe;
  Fa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case e:
          switch (h = h.type, h) {
            case n:
            case o:
            case r:
            case u:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case a:
                case c:
                case b:
                case f:
                case s:
                  return h;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = s, Pe.Element = e, Pe.ForwardRef = c, Pe.Fragment = n, Pe.Lazy = b, Pe.Memo = f, Pe.Portal = t, Pe.Profiler = o, Pe.StrictMode = r, Pe.Suspense = u, Pe.SuspenseList = d, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(h) {
    return y(h) === a;
  }, Pe.isContextProvider = function(h) {
    return y(h) === s;
  }, Pe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Pe.isForwardRef = function(h) {
    return y(h) === c;
  }, Pe.isFragment = function(h) {
    return y(h) === n;
  }, Pe.isLazy = function(h) {
    return y(h) === b;
  }, Pe.isMemo = function(h) {
    return y(h) === f;
  }, Pe.isPortal = function(h) {
    return y(h) === t;
  }, Pe.isProfiler = function(h) {
    return y(h) === o;
  }, Pe.isStrictMode = function(h) {
    return y(h) === r;
  }, Pe.isSuspense = function(h) {
    return y(h) === u;
  }, Pe.isSuspenseList = function(h) {
    return y(h) === d;
  }, Pe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === o || h === r || h === u || h === d || h === S || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === f || h.$$typeof === s || h.$$typeof === a || h.$$typeof === c || h.$$typeof === p || h.getModuleId !== void 0);
  }, Pe.typeOf = y, Pe;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function Qh() {
  return Va || (Va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), p = !1, y = !1, h = !1, w = !1, T = !1, v;
    v = Symbol.for("react.module.reference");
    function x(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === o || T || I === r || I === u || I === d || w || I === S || p || y || h || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === f || I.$$typeof === s || I.$$typeof === a || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === v || I.getModuleId !== void 0));
    }
    function E(I) {
      if (typeof I == "object" && I !== null) {
        var le = I.$$typeof;
        switch (le) {
          case e:
            var he = I.type;
            switch (he) {
              case n:
              case o:
              case r:
              case u:
              case d:
                return he;
              default:
                var je = he && he.$$typeof;
                switch (je) {
                  case l:
                  case a:
                  case c:
                  case b:
                  case f:
                  case s:
                    return je;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var O = a, k = s, L = e, g = c, N = n, B = b, F = f, z = t, V = o, U = r, j = u, K = d, Y = !1, re = !1;
    function M(I) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(I) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(I) {
      return E(I) === a;
    }
    function H(I) {
      return E(I) === s;
    }
    function W(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function Q(I) {
      return E(I) === c;
    }
    function X(I) {
      return E(I) === n;
    }
    function Z(I) {
      return E(I) === b;
    }
    function te(I) {
      return E(I) === f;
    }
    function ee(I) {
      return E(I) === t;
    }
    function q(I) {
      return E(I) === o;
    }
    function ne(I) {
      return E(I) === r;
    }
    function R(I) {
      return E(I) === u;
    }
    function ie(I) {
      return E(I) === d;
    }
    Ne.ContextConsumer = O, Ne.ContextProvider = k, Ne.Element = L, Ne.ForwardRef = g, Ne.Fragment = N, Ne.Lazy = B, Ne.Memo = F, Ne.Portal = z, Ne.Profiler = V, Ne.StrictMode = U, Ne.Suspense = j, Ne.SuspenseList = K, Ne.isAsyncMode = M, Ne.isConcurrentMode = $, Ne.isContextConsumer = J, Ne.isContextProvider = H, Ne.isElement = W, Ne.isForwardRef = Q, Ne.isFragment = X, Ne.isLazy = Z, Ne.isMemo = te, Ne.isPortal = ee, Ne.isProfiler = q, Ne.isStrictMode = ne, Ne.isSuspense = R, Ne.isSuspenseList = ie, Ne.isValidElementType = x, Ne.typeOf = E;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? Ii.exports = Zh() : Ii.exports = Qh();
var ar = Ii.exports;
function Dc(e, t = "") {
  return e.displayName || e.name || t;
}
function Ua(e, t, n) {
  const r = Dc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function em(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Dc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ar.ForwardRef:
          return Ua(e, e.render, "ForwardRef");
        case ar.Memo:
          return Ua(e, e.type, "memo");
        default:
          return;
      }
  }
}
const tm = Mo();
function ui(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function $i(e, t, n) {
  return rm(t) ? n : t[e] || t;
}
const _r = Symbol("mui.processed_props");
function Ar(e, t, n) {
  if (_r in e)
    return e[_r];
  const r = {
    ...e,
    theme: $i(t, e.theme, n)
  };
  return e[_r] = r, r[_r] = r, r;
}
function nm(e) {
  return e ? (t, n) => n[e] : null;
}
function Hr(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((o) => Hr(o, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const {
      variants: o,
      ...s
    } = n;
    let a = s, l;
    e: for (let c = 0; c < o.length; c += 1) {
      const u = o[c];
      if (typeof u.props == "function") {
        if (l ?? (l = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !u.props(l))
          continue;
      } else
        for (const d in u.props)
          if (t[d] !== u.props[d] && ((r = t.ownerState) == null ? void 0 : r[d]) !== u.props[d])
            continue e;
      Array.isArray(a) || (a = [a]), typeof u.style == "function" ? (l ?? (l = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), a.push(u.style(l))) : a.push(u.style);
    }
    return a;
  }
  return n;
}
function Bc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = tm,
    rootShouldForwardProp: r = ui,
    slotShouldForwardProp: o = ui
  } = e, s = (l) => un(Ar(l, t, n));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    Yp(l, (O) => O.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = nm(za(d)),
      ...p
    } = c, y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), h = b || !1;
    let w;
    process.env.NODE_ENV !== "production" && u && (w = `${u}-${za(d || "Root")}`);
    let T = ui;
    d === "Root" || d === "root" ? T = r : d ? T = o : om(l) && (T = void 0);
    const v = kc(l, {
      shouldForwardProp: T,
      label: w,
      ...p
    }), x = (O) => typeof O == "function" && O.__emotion_real !== O || jt(O) ? (k) => Hr(O, Ar(k, t, n)) : O, E = (O, ...k) => {
      let L = x(O);
      const g = k ? k.map(x) : [];
      u && S && g.push((F) => {
        const z = $i(t, F.theme, n);
        if (!z.components || !z.components[u] || !z.components[u].styleOverrides)
          return null;
        const V = z.components[u].styleOverrides, U = {}, j = Ar(F, t, n);
        for (const K in V)
          U[K] = Hr(V[K], j);
        return S(F, U);
      }), u && !y && g.push((F) => {
        var U, j;
        const z = $i(t, F.theme, n), V = (j = (U = z == null ? void 0 : z.components) == null ? void 0 : U[u]) == null ? void 0 : j.variants;
        return V ? Hr({
          variants: V
        }, Ar(F, t, n)) : null;
      }), h || g.push(s);
      const N = g.length - k.length;
      if (Array.isArray(O) && N > 0) {
        const F = new Array(N).fill("");
        L = [...O, ...F], L.raw = [...O.raw, ...F];
      }
      const B = v(L, ...g);
      if (process.env.NODE_ENV !== "production") {
        let F;
        u && (F = `${u}${ue(d || "")}`), F === void 0 && (F = `Styled(${em(l)})`), B.displayName = F;
      }
      return l.muiName && (B.muiName = l.muiName), B;
    };
    return v.withConfig && (E.withConfig = v.withConfig), E;
  };
}
function rm(e) {
  for (const t in e)
    return !1;
  return !0;
}
function om(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function za(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const im = Bc();
function lr(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], a = t[o];
        if (!a)
          n[o] = s || {};
        else if (!s)
          n[o] = a;
        else {
          n[o] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const c = l;
              n[o][c] = lr(s[c], a[c]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function sm(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : lr(t.components[n].defaultProps, r);
}
function Fc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Lo(n);
  return r && (o = o[r] || o), sm({
    theme: o,
    name: t,
    props: e
  });
}
const Yt = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function am(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Cs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), am(e, t, n);
}
function lm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Gt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Gt(lm(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Bt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Bt(10, o));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const cm = (e) => {
  const t = Gt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Gn = (e, t) => {
  try {
    return cm(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Io(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Vc(e) {
  e = Gt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, s = r * Math.min(o, 1 - o), a = (u, d = (u + n / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Io({
    type: l,
    values: c
  });
}
function ji(e) {
  e = Gt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Gt(Vc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Wa(e, t) {
  const n = ji(e), r = ji(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ct(e, t) {
  return e = Gt(e), t = Cs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Io(e);
}
function Mr(e, t, n) {
  try {
    return Ct(e, t);
  } catch {
    return e;
  }
}
function $o(e, t) {
  if (e = Gt(e), t = Cs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Io(e);
}
function Le(e, t, n) {
  try {
    return $o(e, t);
  } catch {
    return e;
  }
}
function jo(e, t) {
  if (e = Gt(e), t = Cs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Io(e);
}
function Ie(e, t, n) {
  try {
    return jo(e, t);
  } catch {
    return e;
  }
}
function um(e, t = 0.15) {
  return ji(e) > 0.5 ? $o(e, t) : jo(e, t);
}
function Lr(e, t, n) {
  try {
    return um(e, t);
  } catch {
    return e;
  }
}
function xr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function dm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Uc(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !dm(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const wr = xr(i.element, Uc);
wr.isRequired = xr(i.element.isRequired, Uc);
function fm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pm(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !fm(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ts = xr(i.elementType, pm), hm = "exact-prop: ​";
function Do(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [hm]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function cr(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const zt = i.oneOfType([i.func, i.object]);
function qa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function zc(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function di(e, t) {
  var n, r, o;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function ln(e) {
  return gt(e).defaultView || window;
}
function Di(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ha = 0;
function mm(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (Ha += 1, n(`mui-${Ha}`));
  }, [t]), r;
}
const Ka = m.useId;
function Wc(e) {
  if (Ka !== void 0) {
    const t = Ka();
    return e ?? t;
  }
  return mm(e);
}
function Ya({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = m.useRef(e !== void 0), [s, a] = m.useState(t), l = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = m.useRef(t);
    m.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = m.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function wn(e) {
  const t = m.useRef(e);
  return Yt(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function nt(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Di(n, t);
    });
  }, e);
}
const Ga = {};
function qc(e, t) {
  const n = m.useRef(Ga);
  return n.current === Ga && (n.current = e(t)), n;
}
const ym = [];
function gm(e) {
  m.useEffect(e, ym);
}
class Rs {
  constructor() {
    jn(this, "currentId", null);
    jn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    jn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Rs();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Hc() {
  const e = qc(Rs.create).current;
  return gm(e.disposeEffect), e;
}
function Xa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Kc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function bm(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Yc(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const s = bm(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Gc(e, t, ...n) {
  return e[t] === void 0 ? null : Yc(e, t, ...n);
}
function Bi() {
  return null;
}
Gc.isRequired = Yc;
Bi.isRequired = Bi;
const Xc = process.env.NODE_ENV === "production" ? Bi : Gc;
function Fe(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const s = e[o];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (a += " " + n[u]));
    }
    r[o] = a;
  }
  return r;
}
function vm(e) {
  return typeof e == "string";
}
function Jc(e, t, n) {
  return e === void 0 || vm(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Zc(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ja(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Qc(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const S = fe(n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, y = {
      ...n,
      ...o,
      ...r
    };
    return S.length > 0 && (y.className = S), Object.keys(p).length > 0 && (y.style = p), {
      props: y,
      internalRef: void 0
    };
  }
  const a = Zc({
    ...o,
    ...r
  }), l = Ja(r), c = Ja(o), u = t(a), d = fe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, b = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (b.className = d), Object.keys(f).length > 0 && (b.style = f), {
    props: b,
    internalRef: u.ref
  };
}
function eu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Za(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : eu(n, r), {
    props: l,
    internalRef: c
  } = Qc({
    ...s,
    externalSlotProps: a
  }), u = nt(c, a == null ? void 0 : a.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Jc(t, {
    ...l,
    ref: u
  }, r);
}
function Cr(e) {
  return !e || !/* @__PURE__ */ m.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const Os = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Os.displayName = "ThemeContext");
function ks() {
  const e = m.useContext(Os);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e;
}
const Em = typeof Symbol == "function" && Symbol.for, Sm = Em ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function xm(e, t) {
  if (typeof t == "function") {
    const n = t(e);
    return process.env.NODE_ENV !== "production" && (n || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), n;
  }
  return {
    ...e,
    ...t
  };
}
function so(e) {
  const {
    children: t,
    theme: n
  } = e, r = ks();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = m.useMemo(() => {
    const s = r === null ? {
      ...n
    } : xm(r, n);
    return s != null && (s[Sm] = r !== null), s;
  }, [n, r]);
  return /* @__PURE__ */ P.jsx(Os.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (so.propTypes = {
  /**
   * Your component tree.
   */
  children: i.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: i.oneOfType([i.object, i.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (so.propTypes = Do(so.propTypes));
const tu = /* @__PURE__ */ m.createContext();
function nu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ P.jsx(tu.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (nu.propTypes = {
  children: i.node,
  value: i.bool
});
const ru = () => m.useContext(tu) ?? !1, ou = /* @__PURE__ */ m.createContext(void 0);
function iu({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ P.jsx(ou.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: i.node,
  /**
   * @ignore
   */
  value: i.object
});
function wm(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? lr(o.defaultProps, r) : !o.styleOverrides && !o.variants ? lr(o, r) : r;
}
function Cm({
  props: e,
  name: t
}) {
  const n = m.useContext(ou);
  return wm({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Qa = {};
function el(e, t, n, r = !1) {
  return m.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const s = n(o), a = e ? {
        ...t,
        [e]: s
      } : s;
      return r ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: n
    } : {
      ...t,
      ...n
    };
  }, [e, t, n, r]);
}
function ur(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Lc(Qa), s = ks() || Qa;
  process.env.NODE_ENV !== "production" && (o === null && typeof n == "function" || r && o && !o[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = el(r, o, n), l = el(r, s, n, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ P.jsx(so, {
    theme: l,
    children: /* @__PURE__ */ P.jsx(So.Provider, {
      value: a,
      children: /* @__PURE__ */ P.jsx(nu, {
        value: c,
        children: /* @__PURE__ */ P.jsx(iu, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: i.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: i.oneOfType([i.func, i.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: i.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ur.propTypes = Do(ur.propTypes));
const Ps = "mode", Ns = "color-scheme", Tm = "data-color-scheme";
function Rm(e) {
  const {
    defaultLightColorScheme: t = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: r = Ps,
    colorSchemeStorageKey: o = Ns,
    attribute: s = Tm,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const f = u.substring(1);
    c += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
  }
  const d = u.match(/\[([^\]]+)\]/);
  if (d) {
    const [f, b] = d[1].split("=");
    b || (c += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`), c += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${b ? `${b}.replace('%s', colorScheme)` : '""'});`;
  } else
    c += `${a}.setAttribute('${u}', colorScheme);`;
  return /* @__PURE__ */ P.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${r}') || 'system';
  const dark = localStorage.getItem('${o}-dark') || '${n}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${c}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function tl(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function su(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Om(e) {
  return su(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function fi(e, t) {
  if (typeof window > "u")
    return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0, n || localStorage.setItem(e, t);
  } catch {
  }
  return n || t;
}
function km(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: s = Ps,
    colorSchemeStorageKey: a = Ns,
    storageWindow: l = typeof window > "u" ? void 0 : window
  } = e, c = o.join(","), u = o.length > 1, [d, f] = m.useState(() => {
    const v = fi(s, t), x = fi(`${a}-light`, n), E = fi(`${a}-dark`, r);
    return {
      mode: v,
      systemMode: tl(v),
      lightColorScheme: x,
      darkColorScheme: E
    };
  }), [, b] = m.useState(!1), S = m.useRef(!1);
  m.useEffect(() => {
    u && b(!0), S.current = !0;
  }, [u]);
  const p = Om(d), y = m.useCallback((v) => {
    f((x) => {
      if (v === x.mode)
        return x;
      const E = v ?? t;
      try {
        localStorage.setItem(s, E);
      } catch {
      }
      return {
        ...x,
        mode: E,
        systemMode: tl(E)
      };
    });
  }, [s, t]), h = m.useCallback((v) => {
    v ? typeof v == "string" ? v && !c.includes(v) ? console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`) : f((x) => {
      const E = {
        ...x
      };
      return su(x, (O) => {
        try {
          localStorage.setItem(`${a}-${O}`, v);
        } catch {
        }
        O === "light" && (E.lightColorScheme = v), O === "dark" && (E.darkColorScheme = v);
      }), E;
    }) : f((x) => {
      const E = {
        ...x
      }, O = v.light === null ? n : v.light, k = v.dark === null ? r : v.dark;
      if (O)
        if (!c.includes(O))
          console.error(`\`${O}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          E.lightColorScheme = O;
          try {
            localStorage.setItem(`${a}-light`, O);
          } catch {
          }
        }
      if (k)
        if (!c.includes(k))
          console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          E.darkColorScheme = k;
          try {
            localStorage.setItem(`${a}-dark`, k);
          } catch {
          }
        }
      return E;
    }) : f((x) => {
      try {
        localStorage.setItem(`${a}-light`, n), localStorage.setItem(`${a}-dark`, r);
      } catch {
      }
      return {
        ...x,
        lightColorScheme: n,
        darkColorScheme: r
      };
    });
  }, [c, a, n, r]), w = m.useCallback((v) => {
    d.mode === "system" && f((x) => {
      const E = v != null && v.matches ? "dark" : "light";
      return x.systemMode === E ? x : {
        ...x,
        systemMode: E
      };
    });
  }, [d.mode]), T = m.useRef(w);
  return T.current = w, m.useEffect(() => {
    if (typeof window.matchMedia != "function" || !u)
      return;
    const v = (...E) => T.current(...E), x = window.matchMedia("(prefers-color-scheme: dark)");
    return x.addListener(v), v(x), () => {
      x.removeListener(v);
    };
  }, [u]), m.useEffect(() => {
    if (l && u) {
      const v = (x) => {
        const E = x.newValue;
        typeof x.key == "string" && x.key.startsWith(a) && (!E || c.match(E)) && (x.key.endsWith("light") && h({
          light: E
        }), x.key.endsWith("dark") && h({
          dark: E
        })), x.key === s && (!E || ["light", "dark", "system"].includes(E)) && y(E || t);
      };
      return l.addEventListener("storage", v), () => {
        l.removeEventListener("storage", v);
      };
    }
  }, [h, y, s, a, c, t, l, u]), {
    ...d,
    mode: S.current || !u ? d.mode : void 0,
    systemMode: S.current || !u ? d.systemMode : void 0,
    colorScheme: S.current || !u ? p : void 0,
    setMode: y,
    setColorScheme: h
  };
}
const Pm = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Nm(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Ps,
    colorSchemeStorageKey: o = Ns,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: a,
    resolveTheme: l
  } = e, c = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ m.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => m.useContext(u) || c;
  function f(y) {
    var we, rt, oe, We, pt;
    const {
      children: h,
      theme: w,
      modeStorageKey: T = r,
      colorSchemeStorageKey: v = o,
      disableTransitionOnChange: x = s,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: O = typeof document > "u" ? void 0 : document,
      colorSchemeNode: k = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: L = !1,
      disableStyleSheetGeneration: g = !1
    } = y, N = m.useRef(!1), B = ks(), F = m.useContext(u), z = !!F && !L, V = m.useMemo(() => w || (typeof n == "function" ? n() : n), [w]), U = V[t], {
      colorSchemes: j = {},
      components: K = {},
      cssVarPrefix: Y,
      ...re
    } = U || V, M = Object.keys(j).filter((ge) => !!j[ge]).join(","), $ = m.useMemo(() => M.split(","), [M]), J = typeof a == "string" ? a : a.light, H = typeof a == "string" ? a : a.dark, W = j[J] && j[H] ? "system" : ((rt = (we = j[re.defaultColorScheme]) == null ? void 0 : we.palette) == null ? void 0 : rt.mode) || ((oe = re.palette) == null ? void 0 : oe.mode), {
      mode: Q,
      setMode: X,
      systemMode: Z,
      lightColorScheme: te,
      darkColorScheme: ee,
      colorScheme: q,
      setColorScheme: ne
    } = km({
      supportedColorSchemes: $,
      defaultLightColorScheme: J,
      defaultDarkColorScheme: H,
      modeStorageKey: T,
      colorSchemeStorageKey: v,
      defaultMode: W,
      storageWindow: E
    });
    let R = Q, ie = q;
    z && (R = F.mode, ie = F.colorScheme);
    const I = ie || re.defaultColorScheme, le = ((We = re.generateThemeVars) == null ? void 0 : We.call(re)) || re.vars, he = {
      ...re,
      components: K,
      colorSchemes: j,
      cssVarPrefix: Y,
      vars: le
    };
    if (typeof he.generateSpacing == "function" && (he.spacing = he.generateSpacing()), I) {
      const ge = j[I];
      ge && typeof ge == "object" && Object.keys(ge).forEach((me) => {
        ge[me] && typeof ge[me] == "object" ? he[me] = {
          ...he[me],
          ...ge[me]
        } : he[me] = ge[me];
      });
    }
    const je = re.colorSchemeSelector;
    m.useEffect(() => {
      if (ie && k && je && je !== "media") {
        const ge = je;
        let me = je;
        if (ge === "class" && (me = ".%s"), ge === "data" && (me = "[data-%s]"), ge != null && ge.startsWith("data-") && !ge.includes("%s") && (me = `[${ge}="%s"]`), me.startsWith("."))
          k.classList.remove(...$.map((ht) => me.substring(1).replace("%s", ht))), k.classList.add(me.substring(1).replace("%s", ie));
        else {
          const ht = me.replace("%s", ie).match(/\[([^\]]+)\]/);
          if (ht) {
            const [vt, lt] = ht[1].split("=");
            lt || $.forEach((Ee) => {
              k.removeAttribute(vt.replace(ie, Ee));
            }), k.setAttribute(vt, lt ? lt.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(me, ie);
        }
      }
    }, [ie, je, k, $]), m.useEffect(() => {
      let ge;
      if (x && N.current && O) {
        const me = O.createElement("style");
        me.appendChild(O.createTextNode(Pm)), O.head.appendChild(me), window.getComputedStyle(O.body), ge = setTimeout(() => {
          O.head.removeChild(me);
        }, 1);
      }
      return () => {
        clearTimeout(ge);
      };
    }, [ie, x, O]), m.useEffect(() => (N.current = !0, () => {
      N.current = !1;
    }), []);
    const ze = m.useMemo(() => ({
      allColorSchemes: $,
      colorScheme: ie,
      darkColorScheme: ee,
      lightColorScheme: te,
      mode: R,
      setColorScheme: ne,
      setMode: X,
      systemMode: Z
    }), [$, ie, ee, te, R, ne, X, Z]);
    let _e = !0;
    (g || re.cssVariables === !1 || z && (B == null ? void 0 : B.cssVarPrefix) === Y) && (_e = !1);
    const st = /* @__PURE__ */ P.jsxs(m.Fragment, {
      children: [_e && /* @__PURE__ */ P.jsx(m.Fragment, {
        children: (((pt = he.generateStyleSheets) == null ? void 0 : pt.call(he)) || []).map((ge, me) => /* @__PURE__ */ P.jsx(Ss, {
          styles: ge
        }, me))
      }), /* @__PURE__ */ P.jsx(ur, {
        themeId: U ? t : void 0,
        theme: l ? l(he) : he,
        children: h
      })]
    });
    return z ? st : /* @__PURE__ */ P.jsx(u.Provider, {
      value: ze,
      children: st
    });
  }
  process.env.NODE_ENV !== "production" && (f.propTypes = {
    /**
     * The component tree.
     */
    children: i.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: i.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: i.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: i.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: i.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: i.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: i.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: i.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: i.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: i.object
  });
  const b = typeof a == "string" ? a : a.light, S = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (y) => Rm({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: S,
      modeStorageKey: r,
      ...y
    })
  };
}
function _m(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const nl = (e, t, n, r = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  });
}, Am = (e, t, n) => {
  function r(o, s = [], a = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Mm = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function pi(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, s = {}, a = {};
  return Am(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = Mm(l, c);
        Object.assign(o, {
          [d]: f
        }), nl(s, l, `var(${d})`, u), nl(a, l, `var(${d}, ${f})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: a
  };
}
function Lm(e, t = {}) {
  const {
    getSelector: n = h,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: f
  } = pi(c, t);
  let b = f;
  const S = {}, {
    [l]: p,
    ...y
  } = s;
  if (Object.entries(y || {}).forEach(([v, x]) => {
    const {
      vars: E,
      css: O,
      varsWithDefaults: k
    } = pi(x, t);
    b = et(b, k), S[v] = {
      css: O,
      vars: E
    };
  }), p) {
    const {
      css: v,
      vars: x,
      varsWithDefaults: E
    } = pi(p, t);
    b = et(b, E), S[l] = {
      css: v,
      vars: x
    };
  }
  function h(v, x) {
    var O, k;
    let E = o;
    if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (E = `[${o}="%s"]`), v) {
      if (E === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (O = s[v]) == null ? void 0 : O.palette) == null ? void 0 : k.mode) || v})`]: {
            ":root": x
          }
        };
      if (E)
        return e.defaultColorScheme === v ? `:root, ${E.replace("%s", String(v))}` : E.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let v = {
        ...u
      };
      return Object.entries(S).forEach(([, {
        vars: x
      }]) => {
        v = et(v, x);
      }), v;
    },
    generateStyleSheets: () => {
      var L, g;
      const v = [], x = e.defaultColorScheme || "light";
      function E(N, B) {
        Object.keys(B).length && v.push(typeof N == "string" ? {
          [N]: {
            ...B
          }
        } : N);
      }
      E(n(void 0, {
        ...d
      }), d);
      const {
        [x]: O,
        ...k
      } = S;
      if (O) {
        const {
          css: N
        } = O, B = (g = (L = s[x]) == null ? void 0 : L.palette) == null ? void 0 : g.mode, F = !r && B ? {
          colorScheme: B,
          ...N
        } : {
          ...N
        };
        E(n(x, {
          ...F
        }), F);
      }
      return Object.entries(k).forEach(([N, {
        css: B
      }]) => {
        var V, U;
        const F = (U = (V = s[N]) == null ? void 0 : V.palette) == null ? void 0 : U.mode, z = !r && F ? {
          colorScheme: F,
          ...B
        } : {
          ...B
        };
        E(n(N, {
          ...z
        }), z);
      }), v;
    }
  };
}
function Im(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const $m = Mo(), jm = im("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Dm(e) {
  return Fc({
    props: e,
    name: "MuiStack",
    defaultTheme: $m
  });
}
function Bm(e, t) {
  const n = m.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, s) => (r.push(o), s < n.length - 1 && r.push(/* @__PURE__ */ m.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Fm = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Vm = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Nt({
      theme: t
    }, ci({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Oo(t), o = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = ci({
      values: e.direction,
      base: o
    }), a = ci({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const b = u > 0 ? s[d[u - 1]] : "column";
        s[c] = b;
      }
    }), n = et(n, Nt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: an(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Fm(u ? s[u] : e.direction)}`]: an(r, c)
      }
    }));
  }
  return n = rh(t.breakpoints, n), n;
};
function Um(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = jm,
    useThemeProps: n = Dm,
    componentName: r = "MuiStack"
  } = e, o = () => Fe({
    root: ["root"]
  }, (c) => $e(r, c), {}), s = t(Vm), a = /* @__PURE__ */ m.forwardRef(function(c, u) {
    const d = n(c), f = ws(d), {
      component: b = "div",
      direction: S = "column",
      spacing: p = 0,
      divider: y,
      children: h,
      className: w,
      useFlexGap: T = !1,
      ...v
    } = f, x = {
      direction: S,
      spacing: p,
      useFlexGap: T
    }, E = o();
    return /* @__PURE__ */ P.jsx(s, {
      as: b,
      ownerState: x,
      ref: u,
      className: fe(E.root, w),
      ...v,
      children: y ? Bm(h, y) : h
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: i.node,
    direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
    divider: i.node,
    spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
    sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
  }), a;
}
const rl = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: rr.white,
    default: rr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, hi = {
  text: {
    primary: rr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: rr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ol(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = jo(e.main, o) : t === "dark" && (e.dark = $o(e.main, s)));
}
function zm(e = "light") {
  return e === "dark" ? {
    main: yn[200],
    light: yn[50],
    dark: yn[400]
  } : {
    main: yn[700],
    light: yn[400],
    dark: yn[800]
  };
}
function Wm(e = "light") {
  return e === "dark" ? {
    main: mn[200],
    light: mn[50],
    dark: mn[400]
  } : {
    main: mn[500],
    light: mn[300],
    dark: mn[700]
  };
}
function qm(e = "light") {
  return e === "dark" ? {
    main: hn[500],
    light: hn[300],
    dark: hn[700]
  } : {
    main: hn[700],
    light: hn[400],
    dark: hn[800]
  };
}
function Hm(e = "light") {
  return e === "dark" ? {
    main: gn[400],
    light: gn[300],
    dark: gn[700]
  } : {
    main: gn[700],
    light: gn[500],
    dark: gn[900]
  };
}
function Km(e = "light") {
  return e === "dark" ? {
    main: bn[400],
    light: bn[300],
    dark: bn[700]
  } : {
    main: bn[800],
    light: bn[500],
    dark: bn[900]
  };
}
function Ym(e = "light") {
  return e === "dark" ? {
    main: Fn[400],
    light: Fn[300],
    dark: Fn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fn[500],
    dark: Fn[900]
  };
}
function _s(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, s = e.primary || zm(t), a = e.secondary || Wm(t), l = e.error || qm(t), c = e.info || Hm(t), u = e.success || Km(t), d = e.warning || Ym(t);
  function f(y) {
    const h = Wa(y, hi.text.primary) >= n ? hi.text.primary : rl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Wa(y, h);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${h} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const b = ({
    color: y,
    name: h,
    mainShade: w = 500,
    lightShade: T = 300,
    darkShade: v = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[w] && (y.main = y[w]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Bt(11, h ? ` (${h})` : "", w));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Bt(12, h ? ` (${h})` : "", JSON.stringify(y.main)));
    return ol(y, "light", T, r), ol(y, "dark", v, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, S = {
    dark: hi,
    light: rl
  };
  return process.env.NODE_ENV !== "production" && (S[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), et({
    // A collection of common colors.
    common: {
      ...rr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: $f,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...S[t]
  }, o);
}
function Gm(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, s] = r;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Xm(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Jm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const il = {
  textTransform: "uppercase"
}, sl = '"Roboto", "Helvetica", "Arial", sans-serif';
function au(e, t) {
  const {
    fontFamily: n = sl,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = r / 14, S = d || ((h) => `${h / c * b}rem`), p = (h, w, T, v, x) => ({
    fontFamily: n,
    fontWeight: h,
    fontSize: S(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === sl ? {
      letterSpacing: `${Jm(v / w)}em`
    } : {},
    ...x,
    ...u
  }), y = {
    h1: p(o, 96, 1.167, -1.5),
    h2: p(o, 60, 1.2, -0.5),
    h3: p(s, 48, 1.167, 0),
    h4: p(s, 34, 1.235, 0.25),
    h5: p(s, 24, 1.334, 0),
    h6: p(a, 20, 1.6, 0.15),
    subtitle1: p(s, 16, 1.75, 0.15),
    subtitle2: p(a, 14, 1.57, 0.1),
    body1: p(s, 16, 1.5, 0.15),
    body2: p(s, 14, 1.43, 0.15),
    button: p(a, 14, 1.75, 0.4, il),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, il),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return et({
    htmlFontSize: c,
    pxToRem: S,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...y
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Zm = 0.2, Qm = 0.14, ey = 0.12;
function De(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Zm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Qm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ey})`].join(",");
}
const ty = ["none", De(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), De(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), De(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), De(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), De(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), De(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), De(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), De(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), De(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), De(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), De(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), De(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), De(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), De(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), De(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), De(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), De(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), De(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), De(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), De(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), De(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), De(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), De(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), De(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ny = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ry = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function al(e) {
  return `${Math.round(e)}ms`;
}
function oy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function iy(e) {
  const t = {
    ...ny,
    ...e.easing
  }, n = {
    ...ry,
    ...e.duration
  };
  return {
    getAutoHeightDuration: oy,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (b) => typeof b == "string", f = (b) => !Number.isNaN(parseFloat(b));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : al(a)} ${l} ${typeof c == "string" ? c : al(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const sy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Fi(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Bt(20));
  const d = _s(s), f = Mo(e);
  let b = et(f, {
    mixins: Xm(f.breakpoints, r),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ty.slice(),
    typography: au(d, l),
    transitions: iy(a),
    zIndex: {
      ...sy
    }
  });
  if (b = et(b, u), b = t.reduce((S, p) => et(S, p), b), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (y, h) => {
      let w;
      for (w in y) {
        const T = y[w];
        if (S.includes(w) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = $e("", w);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[w] = {};
        }
      }
    };
    Object.keys(b.components).forEach((y) => {
      const h = b.components[y].styleOverrides;
      h && y.startsWith("Mui") && p(h, y);
    });
  }
  return b.unstable_sxConfig = {
    ...Sr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(p) {
    return un({
      sx: p,
      theme: this
    });
  }, b;
}
function Vi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ay = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const n = Vi(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function lu(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function cu(e) {
  return e === "dark" ? ay : [];
}
function ly(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, s = _s(t);
  return {
    palette: s,
    opacity: {
      ...lu(s.mode),
      ...n
    },
    overlays: r || cu(s.mode),
    ...o
  };
}
function cy(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const uy = (e) => [...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], dy = (e) => (t, n) => {
  const r = e.colorSchemeSelector;
  let o = r;
  if (r === "class" && (o = ".%s"), r === "data" && (o = "[data-%s]"), r != null && r.startsWith("data-") && !r.includes("%s") && (o = `[${r}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return uy(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), o === "media" ? {
        ":root": n,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : o ? {
        [o.replace("%s", t)]: s,
        [`:root, ${o.replace("%s", t)}`]: n
      } : {
        ":root": {
          ...n,
          ...s
        }
      };
    }
    if (o && o !== "media")
      return `:root, ${o.replace("%s", String(t))}`;
  } else if (t) {
    if (o === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": n
        }
      };
    if (o)
      return o.replace("%s", String(t));
  }
  return ":root";
};
function fy(e) {
  return jt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function py(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let s = 0; s < o.length; s++) {
      const [a, l] = o[s];
      !fy(l) || a.startsWith("unstable_") ? delete r[a] : jt(l) && (r[a] = {
        ...l
      }, n(r[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function hy(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function A(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Xn(e) {
  return !e || !e.startsWith("hsl") ? e : Vc(e);
}
function Ut(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Gn(Xn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function my(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Mt = (e) => {
  try {
    return e();
  } catch {
  }
}, yy = (e = "mui") => _m(e);
function mi(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = ly({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = Fi({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: s,
    opacity: {
      ...lu(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || cu(o)
  }, a;
}
function gy(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = cy,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(n)[0], d = r || (n.light && u !== "light" ? "light" : u), f = yy(s), {
    [d]: b,
    light: S,
    dark: p,
    ...y
  } = n, h = {
    ...y
  };
  let w = b;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (w = !0), !w)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Bt(21, d));
  const T = mi(h, w, c, d);
  S && !h.light && mi(h, S, void 0, "light"), p && !h.dark && mi(h, p, void 0, "dark");
  let v = {
    defaultColorScheme: d,
    ...T,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...Gm(T.typography),
      ...T.font
    },
    spacing: my(c.spacing)
  };
  Object.keys(v.colorSchemes).forEach((L) => {
    const g = v.colorSchemes[L].palette, N = (B) => {
      const F = B.split("-"), z = F[1], V = F[2];
      return f(B, g[z][V]);
    };
    if (g.mode === "light" && (A(g.common, "background", "#fff"), A(g.common, "onBackground", "#000")), g.mode === "dark" && (A(g.common, "background", "#000"), A(g.common, "onBackground", "#fff")), hy(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      A(g.Alert, "errorColor", Le(g.error.light, 0.6)), A(g.Alert, "infoColor", Le(g.info.light, 0.6)), A(g.Alert, "successColor", Le(g.success.light, 0.6)), A(g.Alert, "warningColor", Le(g.warning.light, 0.6)), A(g.Alert, "errorFilledBg", N("palette-error-main")), A(g.Alert, "infoFilledBg", N("palette-info-main")), A(g.Alert, "successFilledBg", N("palette-success-main")), A(g.Alert, "warningFilledBg", N("palette-warning-main")), A(g.Alert, "errorFilledColor", Mt(() => g.getContrastText(g.error.main))), A(g.Alert, "infoFilledColor", Mt(() => g.getContrastText(g.info.main))), A(g.Alert, "successFilledColor", Mt(() => g.getContrastText(g.success.main))), A(g.Alert, "warningFilledColor", Mt(() => g.getContrastText(g.warning.main))), A(g.Alert, "errorStandardBg", Ie(g.error.light, 0.9)), A(g.Alert, "infoStandardBg", Ie(g.info.light, 0.9)), A(g.Alert, "successStandardBg", Ie(g.success.light, 0.9)), A(g.Alert, "warningStandardBg", Ie(g.warning.light, 0.9)), A(g.Alert, "errorIconColor", N("palette-error-main")), A(g.Alert, "infoIconColor", N("palette-info-main")), A(g.Alert, "successIconColor", N("palette-success-main")), A(g.Alert, "warningIconColor", N("palette-warning-main")), A(g.AppBar, "defaultBg", N("palette-grey-100")), A(g.Avatar, "defaultBg", N("palette-grey-400")), A(g.Button, "inheritContainedBg", N("palette-grey-300")), A(g.Button, "inheritContainedHoverBg", N("palette-grey-A100")), A(g.Chip, "defaultBorder", N("palette-grey-400")), A(g.Chip, "defaultAvatarColor", N("palette-grey-700")), A(g.Chip, "defaultIconColor", N("palette-grey-700")), A(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), A(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), A(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), A(g.LinearProgress, "primaryBg", Ie(g.primary.main, 0.62)), A(g.LinearProgress, "secondaryBg", Ie(g.secondary.main, 0.62)), A(g.LinearProgress, "errorBg", Ie(g.error.main, 0.62)), A(g.LinearProgress, "infoBg", Ie(g.info.main, 0.62)), A(g.LinearProgress, "successBg", Ie(g.success.main, 0.62)), A(g.LinearProgress, "warningBg", Ie(g.warning.main, 0.62)), A(g.Skeleton, "bg", `rgba(${N("palette-text-primaryChannel")} / 0.11)`), A(g.Slider, "primaryTrack", Ie(g.primary.main, 0.62)), A(g.Slider, "secondaryTrack", Ie(g.secondary.main, 0.62)), A(g.Slider, "errorTrack", Ie(g.error.main, 0.62)), A(g.Slider, "infoTrack", Ie(g.info.main, 0.62)), A(g.Slider, "successTrack", Ie(g.success.main, 0.62)), A(g.Slider, "warningTrack", Ie(g.warning.main, 0.62));
      const B = Lr(g.background.default, 0.8);
      A(g.SnackbarContent, "bg", B), A(g.SnackbarContent, "color", Mt(() => g.getContrastText(B))), A(g.SpeedDialAction, "fabHoverBg", Lr(g.background.paper, 0.15)), A(g.StepConnector, "border", N("palette-grey-400")), A(g.StepContent, "border", N("palette-grey-400")), A(g.Switch, "defaultColor", N("palette-common-white")), A(g.Switch, "defaultDisabledColor", N("palette-grey-100")), A(g.Switch, "primaryDisabledColor", Ie(g.primary.main, 0.62)), A(g.Switch, "secondaryDisabledColor", Ie(g.secondary.main, 0.62)), A(g.Switch, "errorDisabledColor", Ie(g.error.main, 0.62)), A(g.Switch, "infoDisabledColor", Ie(g.info.main, 0.62)), A(g.Switch, "successDisabledColor", Ie(g.success.main, 0.62)), A(g.Switch, "warningDisabledColor", Ie(g.warning.main, 0.62)), A(g.TableCell, "border", Ie(Mr(g.divider, 1), 0.88)), A(g.Tooltip, "bg", Mr(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      A(g.Alert, "errorColor", Ie(g.error.light, 0.6)), A(g.Alert, "infoColor", Ie(g.info.light, 0.6)), A(g.Alert, "successColor", Ie(g.success.light, 0.6)), A(g.Alert, "warningColor", Ie(g.warning.light, 0.6)), A(g.Alert, "errorFilledBg", N("palette-error-dark")), A(g.Alert, "infoFilledBg", N("palette-info-dark")), A(g.Alert, "successFilledBg", N("palette-success-dark")), A(g.Alert, "warningFilledBg", N("palette-warning-dark")), A(g.Alert, "errorFilledColor", Mt(() => g.getContrastText(g.error.dark))), A(g.Alert, "infoFilledColor", Mt(() => g.getContrastText(g.info.dark))), A(g.Alert, "successFilledColor", Mt(() => g.getContrastText(g.success.dark))), A(g.Alert, "warningFilledColor", Mt(() => g.getContrastText(g.warning.dark))), A(g.Alert, "errorStandardBg", Le(g.error.light, 0.9)), A(g.Alert, "infoStandardBg", Le(g.info.light, 0.9)), A(g.Alert, "successStandardBg", Le(g.success.light, 0.9)), A(g.Alert, "warningStandardBg", Le(g.warning.light, 0.9)), A(g.Alert, "errorIconColor", N("palette-error-main")), A(g.Alert, "infoIconColor", N("palette-info-main")), A(g.Alert, "successIconColor", N("palette-success-main")), A(g.Alert, "warningIconColor", N("palette-warning-main")), A(g.AppBar, "defaultBg", N("palette-grey-900")), A(g.AppBar, "darkBg", N("palette-background-paper")), A(g.AppBar, "darkColor", N("palette-text-primary")), A(g.Avatar, "defaultBg", N("palette-grey-600")), A(g.Button, "inheritContainedBg", N("palette-grey-800")), A(g.Button, "inheritContainedHoverBg", N("palette-grey-700")), A(g.Chip, "defaultBorder", N("palette-grey-700")), A(g.Chip, "defaultAvatarColor", N("palette-grey-300")), A(g.Chip, "defaultIconColor", N("palette-grey-300")), A(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), A(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), A(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), A(g.LinearProgress, "primaryBg", Le(g.primary.main, 0.5)), A(g.LinearProgress, "secondaryBg", Le(g.secondary.main, 0.5)), A(g.LinearProgress, "errorBg", Le(g.error.main, 0.5)), A(g.LinearProgress, "infoBg", Le(g.info.main, 0.5)), A(g.LinearProgress, "successBg", Le(g.success.main, 0.5)), A(g.LinearProgress, "warningBg", Le(g.warning.main, 0.5)), A(g.Skeleton, "bg", `rgba(${N("palette-text-primaryChannel")} / 0.13)`), A(g.Slider, "primaryTrack", Le(g.primary.main, 0.5)), A(g.Slider, "secondaryTrack", Le(g.secondary.main, 0.5)), A(g.Slider, "errorTrack", Le(g.error.main, 0.5)), A(g.Slider, "infoTrack", Le(g.info.main, 0.5)), A(g.Slider, "successTrack", Le(g.success.main, 0.5)), A(g.Slider, "warningTrack", Le(g.warning.main, 0.5));
      const B = Lr(g.background.default, 0.98);
      A(g.SnackbarContent, "bg", B), A(g.SnackbarContent, "color", Mt(() => g.getContrastText(B))), A(g.SpeedDialAction, "fabHoverBg", Lr(g.background.paper, 0.15)), A(g.StepConnector, "border", N("palette-grey-600")), A(g.StepContent, "border", N("palette-grey-600")), A(g.Switch, "defaultColor", N("palette-grey-300")), A(g.Switch, "defaultDisabledColor", N("palette-grey-600")), A(g.Switch, "primaryDisabledColor", Le(g.primary.main, 0.55)), A(g.Switch, "secondaryDisabledColor", Le(g.secondary.main, 0.55)), A(g.Switch, "errorDisabledColor", Le(g.error.main, 0.55)), A(g.Switch, "infoDisabledColor", Le(g.info.main, 0.55)), A(g.Switch, "successDisabledColor", Le(g.success.main, 0.55)), A(g.Switch, "warningDisabledColor", Le(g.warning.main, 0.55)), A(g.TableCell, "border", Le(Mr(g.divider, 1), 0.68)), A(g.Tooltip, "bg", Mr(g.grey[700], 0.92));
    }
    Ut(g.background, "default"), Ut(g.background, "paper"), Ut(g.common, "background"), Ut(g.common, "onBackground"), Ut(g, "divider"), Object.keys(g).forEach((B) => {
      const F = g[B];
      F && typeof F == "object" && (F.main && A(g[B], "mainChannel", Gn(Xn(F.main))), F.light && A(g[B], "lightChannel", Gn(Xn(F.light))), F.dark && A(g[B], "darkChannel", Gn(Xn(F.dark))), F.contrastText && A(g[B], "contrastTextChannel", Gn(Xn(F.contrastText))), B === "text" && (Ut(g[B], "primary"), Ut(g[B], "secondary")), B === "action" && (F.active && Ut(g[B], "active"), F.selected && Ut(g[B], "selected")));
    });
  }), v = t.reduce((L, g) => et(L, g), v);
  const x = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: dy(v)
  }, {
    vars: E,
    generateThemeVars: O,
    generateStyleSheets: k
  } = Lm(v, x);
  return v.vars = E, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([L, g]) => {
    v[L] = g;
  }), v.generateThemeVars = O, v.generateStyleSheets = k, v.generateSpacing = function() {
    return Mc(c.spacing, Oo(this));
  }, v.getColorSchemeSelector = Im(l), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = a, v.unstable_sxConfig = {
    ...Sr,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, v.unstable_sx = function(g) {
    return un({
      sx: g,
      theme: this
    });
  }, v.toRuntimeSource = py, v;
}
function ll(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: _s({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Bo(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...a
  } = e, l = s || "light", c = o == null ? void 0 : o[l], u = {
    ...o,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Fi(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = Fi({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, ll(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, ll(f, "light", u.light)), f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), gy({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Fo = Bo();
function As() {
  const e = Lo(Fo);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e[Pt] || e;
}
function uu({
  props: e,
  name: t
}) {
  return Fc({
    props: e,
    name: t,
    defaultTheme: Fo,
    themeId: Pt
  });
}
function du(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Rt = (e) => du(e) && e !== "classes", ae = Bc({
  themeId: Pt,
  defaultTheme: Fo,
  rootShouldForwardProp: Rt
});
function cl({
  theme: e,
  ...t
}) {
  const n = Pt in e ? e[Pt] : void 0;
  return /* @__PURE__ */ P.jsx(ur, {
    ...t,
    themeId: n ? Pt : void 0,
    theme: n || e
  });
}
const Ir = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: by,
  useColorScheme: BE,
  getInitColorSchemeScript: FE
} = Nm({
  themeId: Pt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Bo({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ir.colorSchemeStorageKey,
  modeStorageKey: Ir.modeStorageKey,
  defaultColorScheme: {
    light: Ir.defaultLightColorScheme,
    dark: Ir.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: au(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return un({
        sx: r,
        theme: this
      });
    }, t;
  }
}), vy = by;
function Ey({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ P.jsx(cl, {
    theme: e,
    ...t
  }) : "colorSchemes" in (Pt in e ? e[Pt] : e) ? /* @__PURE__ */ P.jsx(vy, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ P.jsx(cl, {
    theme: e,
    ...t
  });
}
function fu(e) {
  return /* @__PURE__ */ P.jsx(Ic, {
    ...e,
    defaultTheme: Fo,
    themeId: Pt
  });
}
process.env.NODE_ENV !== "production" && (fu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function Ms(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ P.jsx(fu, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function Sy() {
  return ws;
}
const ul = {
  theme: void 0
};
function Ve(e) {
  let t, n;
  return (r) => {
    let o = t;
    return (o === void 0 || r.theme !== n) && (ul.theme = r.theme, o = e(ul), t = o, n = r.theme), o;
  };
}
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function Ue(e) {
  return Cm(e);
}
function xy(e) {
  return $e("MuiSvgIcon", e);
}
Ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const wy = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ue(t)}`, `fontSize${ue(n)}`]
  };
  return Fe(o, xy, r);
}, Cy = ae("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ue(n.color)}`], t[`fontSize${ue(n.fontSize)}`]];
  }
})(Ve(({
  theme: e
}) => {
  var t, n, r, o, s, a, l, c, u, d, f, b, S, p;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var h, w;
        return {
          props: {
            color: y
          },
          style: {
            color: (w = (h = (e.vars ?? e).palette) == null ? void 0 : h[y]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (b = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : b.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (p = (S = (e.vars ?? e).palette) == null ? void 0 : S.action) == null ? void 0 : p.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), dr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: b = "0 0 24 24",
    ...S
  } = r, p = /* @__PURE__ */ m.isValidElement(o) && o.type === "svg", y = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: b,
    hasSvgAsChild: p
  }, h = {};
  d || (h.viewBox = b);
  const w = wy(y);
  return /* @__PURE__ */ P.jsxs(Cy, {
    as: l,
    className: fe(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...h,
    ...S,
    ...p && o.props,
    ownerState: y,
    children: [p ? o.props.children : o, f ? /* @__PURE__ */ P.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
dr && (dr.muiName = "SvgIcon");
function Ty(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ P.jsx(dr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = dr.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
function pu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Ui(e, t) {
  return Ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ui(e, t);
}
function hu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ui(e, t);
}
const dl = {
  disabled: !1
};
var Ry = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const ao = it.createContext(null);
var Oy = function(t) {
  return t.scrollTop;
}, Jn = "unmounted", en = "exited", tn = "entering", Sn = "entered", zi = "exiting", Vt = /* @__PURE__ */ function(e) {
  hu(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = en, s.appearStatus = tn) : c = Sn : r.unmountOnExit || r.mountOnEnter ? c = Jn : c = en, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === Jn ? {
      status: en
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== tn && a !== Sn && (s = tn) : (a === tn || a === Sn) && (s = zi);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, a, l;
    return s = a = l = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === tn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Yn.findDOMNode(this);
          a && Oy(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === en && this.setState({
      status: Jn
    });
  }, n.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [Yn.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), b = l ? f.appear : f.enter;
    if (!o && !a || dl.disabled) {
      this.safeSetState({
        status: Sn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: tn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(b, function() {
        s.safeSetState({
          status: Sn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Yn.findDOMNode(this);
    if (!s || dl.disabled) {
      this.safeSetState({
        status: en
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: zi
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: en
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Yn.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Jn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = pu(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ it.createElement(ao.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : it.cloneElement(it.Children.only(a), l))
    );
  }, t;
}(it.Component);
Vt.contextType = ao;
Vt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, n, r, o, s) {
      var a = e[t];
      return i.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Ry;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function vn() {
}
Vt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vn,
  onEntering: vn,
  onEntered: vn,
  onExit: vn,
  onExiting: vn,
  onExited: vn
};
Vt.UNMOUNTED = Jn;
Vt.EXITED = en;
Vt.ENTERING = tn;
Vt.ENTERED = Sn;
Vt.EXITING = zi;
function ky(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ls(e, t) {
  var n = function(s) {
    return t && Vr(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && zd.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Py(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (r[s] = o, o = []) : o.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = n(o[a]);
  return l;
}
function nn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Ny(e, t) {
  return Ls(e.children, function(n) {
    return Ur(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: nn(n, "appear", e),
      enter: nn(n, "enter", e),
      exit: nn(n, "exit", e)
    });
  });
}
function _y(e, t, n) {
  var r = Ls(e.children), o = Py(t, r);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (Vr(a)) {
      var l = s in t, c = s in r, u = t[s], d = Vr(u) && !u.props.in;
      c && (!l || d) ? o[s] = Ur(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: nn(a, "exit", e),
        enter: nn(a, "enter", e)
      }) : !c && l && !d ? o[s] = Ur(a, {
        in: !1
      }) : c && l && Vr(u) && (o[s] = Ur(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: nn(a, "exit", e),
        enter: nn(a, "enter", e)
      }));
    }
  }), o;
}
var Ay = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, My = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Is = /* @__PURE__ */ function(e) {
  hu(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = s.handleExited.bind(ky(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Ny(o, l) : _y(o, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(o, s) {
    var a = Ls(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = ro({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, l = pu(o, ["component", "childFactory"]), c = this.state.contextValue, u = Ay(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ it.createElement(ao.Provider, {
      value: c
    }, u) : /* @__PURE__ */ it.createElement(ao.Provider, {
      value: c
    }, /* @__PURE__ */ it.createElement(s, l, u));
  }, t;
}(it.Component);
Is.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: i.func
} : {};
Is.defaultProps = My;
const mu = (e) => e.scrollTop;
function lo(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Ly(e) {
  return $e("MuiPaper", e);
}
Ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Iy = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Fe(s, Ly, o);
}, $y = ae("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ve(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), $s = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var S;
  const r = Ue({
    props: t,
    name: "MuiPaper"
  }), o = As(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = r, f = {
    ...r,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, b = Iy(f);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ P.jsx($y, {
    as: a,
    ownerState: f,
    className: fe(b.root, s),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (S = o.vars.overlays) == null ? void 0 : S[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ct("#fff", Vi(l))}, ${Ct("#fff", Vi(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: xr(Xc, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function kt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...b
  } = s, S = d[e] || r, p = eu(f[e], o), {
    props: {
      component: y,
      ...h
    },
    internalRef: w
  } = Qc({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? b : void 0,
    externalSlotProps: p
  }), T = nt(w, p == null ? void 0 : p.ref, t.ref), v = a ? a(h) : {}, x = {
    ...o,
    ...v
  }, E = e === "root" ? y || u : y, O = Jc(S, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...h,
    ...E && {
      as: E
    },
    ref: T
  }, x);
  return Object.keys(v).forEach((k) => {
    delete O[k];
  }), [S, O];
}
class co {
  constructor() {
    jn(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new co();
  }
  static use() {
    const t = qc(co.create).current, [n, r] = m.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, m.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Dy(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function jy() {
  return co.use();
}
function Dy() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function yu(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = m.useState(!1), b = fe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), S = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, p = fe(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), m.useEffect(() => {
    if (!l && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P.jsx("span", {
    className: b,
    style: S,
    children: /* @__PURE__ */ P.jsx("span", {
      className: p
    })
  });
}
process.env.NODE_ENV !== "production" && (yu.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const St = Ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Wi = 550, By = 80, Fy = _n`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Vy = _n`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Uy = _n`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, zy = ae("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Wy = ae(yu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${St.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Fy};
    animation-duration: ${Wi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${St.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${St.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${St.childLeaving} {
    opacity: 0;
    animation-name: ${Vy};
    animation-duration: ${Wi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${St.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Uy};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, gu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...l
  } = r, [c, u] = m.useState([]), d = m.useRef(0), f = m.useRef(null);
  m.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const b = m.useRef(!1), S = Hc(), p = m.useRef(null), y = m.useRef(null), h = m.useCallback((x) => {
    const {
      pulsate: E,
      rippleX: O,
      rippleY: k,
      rippleSize: L,
      cb: g
    } = x;
    u((N) => [...N, /* @__PURE__ */ P.jsx(Wy, {
      classes: {
        ripple: fe(s.ripple, St.ripple),
        rippleVisible: fe(s.rippleVisible, St.rippleVisible),
        ripplePulsate: fe(s.ripplePulsate, St.ripplePulsate),
        child: fe(s.child, St.child),
        childLeaving: fe(s.childLeaving, St.childLeaving),
        childPulsate: fe(s.childPulsate, St.childPulsate)
      },
      timeout: Wi,
      pulsate: E,
      rippleX: O,
      rippleY: k,
      rippleSize: L
    }, d.current)]), d.current += 1, f.current = g;
  }, [s]), w = m.useCallback((x = {}, E = {}, O = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: L = o || E.pulsate,
      fakeElement: g = !1
      // For test purposes
    } = E;
    if ((x == null ? void 0 : x.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (b.current = !0);
    const N = g ? null : y.current, B = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, z, V;
    if (L || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      F = Math.round(B.width / 2), z = Math.round(B.height / 2);
    else {
      const {
        clientX: U,
        clientY: j
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      F = Math.round(U - B.left), z = Math.round(j - B.top);
    }
    if (L)
      V = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), V % 2 === 0 && (V += 1);
    else {
      const U = Math.max(Math.abs((N ? N.clientWidth : 0) - F), F) * 2 + 2, j = Math.max(Math.abs((N ? N.clientHeight : 0) - z), z) * 2 + 2;
      V = Math.sqrt(U ** 2 + j ** 2);
    }
    x != null && x.touches ? p.current === null && (p.current = () => {
      h({
        pulsate: k,
        rippleX: F,
        rippleY: z,
        rippleSize: V,
        cb: O
      });
    }, S.start(By, () => {
      p.current && (p.current(), p.current = null);
    })) : h({
      pulsate: k,
      rippleX: F,
      rippleY: z,
      rippleSize: V,
      cb: O
    });
  }, [o, h, S]), T = m.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), v = m.useCallback((x, E) => {
    if (S.clear(), (x == null ? void 0 : x.type) === "touchend" && p.current) {
      p.current(), p.current = null, S.start(0, () => {
        v(x, E);
      });
      return;
    }
    p.current = null, u((O) => O.length > 0 ? O.slice(1) : O), f.current = E;
  }, [S]);
  return m.useImperativeHandle(n, () => ({
    pulsate: T,
    start: w,
    stop: v
  }), [T, w, v]), /* @__PURE__ */ P.jsx(zy, {
    className: fe(St.root, s.root, a),
    ref: y,
    ...l,
    children: /* @__PURE__ */ P.jsx(Is, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (gu.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
function qy(e) {
  return $e("MuiButtonBase", e);
}
const Hy = Ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ky = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = Fe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, qy, o);
  return n && r && (a.root += ` ${r}`), a;
}, Yy = ae("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Hy.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), js = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: b = !1,
    focusVisibleClassName: S,
    LinkComponent: p = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: w,
    onDragLeave: T,
    onFocus: v,
    onFocusVisible: x,
    onKeyDown: E,
    onKeyUp: O,
    onMouseDown: k,
    onMouseLeave: L,
    onMouseUp: g,
    onTouchEnd: N,
    onTouchMove: B,
    onTouchStart: F,
    tabIndex: z = 0,
    TouchRippleProps: V,
    touchRippleRef: U,
    type: j,
    ...K
  } = r, Y = m.useRef(null), re = jy(), M = nt(re.ref, U), [$, J] = m.useState(!1);
  u && $ && J(!1), m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), Y.current.focus();
    }
  }), []);
  const H = re.shouldMount && !d && !u;
  m.useEffect(() => {
    $ && b && !d && re.pulsate();
  }, [d, b, $, re]);
  function W(oe, We, pt = f) {
    return wn((ge) => (We && We(ge), pt || re[oe](ge), !0));
  }
  const Q = W("start", k), X = W("stop", w), Z = W("stop", T), te = W("stop", g), ee = W("stop", (oe) => {
    $ && oe.preventDefault(), L && L(oe);
  }), q = W("start", F), ne = W("stop", N), R = W("stop", B), ie = W("stop", (oe) => {
    Xa(oe.target) || J(!1), y && y(oe);
  }, !1), I = wn((oe) => {
    Y.current || (Y.current = oe.currentTarget), Xa(oe.target) && (J(!0), x && x(oe)), v && v(oe);
  }), le = () => {
    const oe = Y.current;
    return c && c !== "button" && !(oe.tagName === "A" && oe.href);
  }, he = wn((oe) => {
    b && !oe.repeat && $ && oe.key === " " && re.stop(oe, () => {
      re.start(oe);
    }), oe.target === oe.currentTarget && le() && oe.key === " " && oe.preventDefault(), E && E(oe), oe.target === oe.currentTarget && le() && oe.key === "Enter" && !u && (oe.preventDefault(), h && h(oe));
  }), je = wn((oe) => {
    b && oe.key === " " && $ && !oe.defaultPrevented && re.stop(oe, () => {
      re.pulsate(oe);
    }), O && O(oe), h && oe.target === oe.currentTarget && le() && oe.key === " " && !oe.defaultPrevented && h(oe);
  });
  let ze = c;
  ze === "button" && (K.href || K.to) && (ze = p);
  const _e = {};
  ze === "button" ? (_e.type = j === void 0 ? "button" : j, _e.disabled = u) : (!K.href && !K.to && (_e.role = "button"), u && (_e["aria-disabled"] = u));
  const st = nt(n, Y), we = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: b,
    tabIndex: z,
    focusVisible: $
  }, rt = Ky(we);
  return /* @__PURE__ */ P.jsxs(Yy, {
    as: ze,
    className: fe(rt.root, l),
    ownerState: we,
    onBlur: ie,
    onClick: h,
    onContextMenu: X,
    onFocus: I,
    onKeyDown: he,
    onKeyUp: je,
    onMouseDown: Q,
    onMouseLeave: ee,
    onMouseUp: te,
    onDragLeave: Z,
    onTouchEnd: ne,
    onTouchMove: R,
    onTouchStart: q,
    ref: st,
    tabIndex: u ? -1 : z,
    type: j,
    ..._e,
    ...K,
    children: [a, H ? /* @__PURE__ */ P.jsx(gu, {
      ref: M,
      center: s,
      ...V
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: zt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ts,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
function Gy(e) {
  return typeof e.main == "string";
}
function Xy(e, t = []) {
  if (!Gy(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function _t(e = []) {
  return ([, t]) => t && Xy(t, e);
}
function Jy(e) {
  return $e("MuiTypography", e);
}
Ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Zy = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Qy = Sy(), eg = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ue(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Fe(l, Jy, a);
}, tg = ae("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ue(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Ve(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ue(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), fl = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, bu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = Ue({
    props: t,
    name: "MuiTypography"
  }), s = !Zy[r], a = Qy({
    ...o,
    ...s && {
      color: r
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: b = !1,
    variant: S = "body1",
    variantMapping: p = fl,
    ...y
  } = a, h = {
    ...a,
    align: l,
    color: r,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: b,
    variant: S,
    variantMapping: p
  }, w = u || (b ? "p" : p[S] || fl[S]) || "span", T = eg(h);
  return /* @__PURE__ */ P.jsx(tg, {
    as: w,
    ref: n,
    className: fe(T.root, c),
    ...y,
    ownerState: h,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (bu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: i.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: i.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: i.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: i.oneOfType([i.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), i.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: i.object
});
function ng(e) {
  return typeof e == "function" ? e() : e;
}
const uo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = m.useState(null), c = nt(Cr(r), n);
  if (Yt(() => {
    s || l(ng(o) || document.body);
  }, [o, s]), Yt(() => {
    if (a && !s)
      return Di(n, a), () => {
        Di(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(r, u);
    }
    return /* @__PURE__ */ P.jsx(m.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P.jsx(m.Fragment, {
    children: a && /* @__PURE__ */ Kd.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (uo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([cr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (uo.propTypes = Do(uo.propTypes));
function $r(e) {
  return parseInt(e, 10) || 0;
}
const rg = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function og(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const vu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = m.useRef(l != null), d = m.useRef(null), f = nt(n, d), b = m.useRef(null), S = m.useRef(null), p = m.useCallback(() => {
    const w = d.current, v = ln(w).getComputedStyle(w);
    if (v.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const x = S.current;
    x.style.width = v.width, x.value = w.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const E = v.boxSizing, O = $r(v.paddingBottom) + $r(v.paddingTop), k = $r(v.borderBottomWidth) + $r(v.borderTopWidth), L = x.scrollHeight;
    x.value = "x";
    const g = x.scrollHeight;
    let N = L;
    s && (N = Math.max(Number(s) * g, N)), o && (N = Math.min(Number(o) * g, N)), N = Math.max(N, g);
    const B = N + (E === "border-box" ? O + k : 0), F = Math.abs(N - L) <= 1;
    return {
      outerHeightStyle: B,
      overflowing: F
    };
  }, [o, s, t.placeholder]), y = m.useCallback(() => {
    const w = p();
    if (og(w))
      return;
    const T = w.outerHeightStyle, v = d.current;
    b.current !== T && (b.current = T, v.style.height = `${T}px`), v.style.overflow = w.overflowing ? "hidden" : "";
  }, [p]);
  Yt(() => {
    const w = () => {
      y();
    };
    let T;
    const v = () => {
      cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        w();
      });
    }, x = zc(w), E = d.current, O = ln(E);
    O.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(process.env.NODE_ENV === "test" ? v : w), k.observe(E)), () => {
      x.clear(), cancelAnimationFrame(T), O.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [p, y]), Yt(() => {
    y();
  });
  const h = (w) => {
    u || y(), r && r(w);
  };
  return /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ P.jsx("textarea", {
      value: l,
      onChange: h,
      ref: f,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ P.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: S,
      tabIndex: -1,
      style: {
        ...rg.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (vu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function qi(e) {
  return typeof e == "string";
}
function An({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const Vo = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (Vo.displayName = "FormControlContext");
function Mn() {
  return m.useContext(Vo);
}
function pl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function fo(e, t = !1) {
  return e && (pl(e.value) && e.value !== "" || t && pl(e.defaultValue) && e.defaultValue !== "");
}
function ig(e) {
  return e.startAdornment;
}
function sg(e) {
  return $e("MuiInputBase", e);
}
const Pn = Ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var hl;
const Uo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ue(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, zo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, ag = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: b,
    startAdornment: S,
    type: p
  } = e, y = {
    root: ["root", `color${ue(n)}`, r && "disabled", o && "error", c && "fullWidth", a && "focused", l && "formControl", b && b !== "medium" && `size${ue(b)}`, d && "multiline", S && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", p === "search" && "inputTypeSearch", d && "inputMultiline", b === "small" && "inputSizeSmall", u && "inputHiddenLabel", S && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return Fe(y, sg, t);
}, Wo = ae("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Uo
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Pn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), qo = ae("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: zo
})(Ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Pn.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${Pn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), ml = Ms({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Eu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: b,
    disableInjectingGlobalStyles: S,
    endAdornment: p,
    error: y,
    fullWidth: h = !1,
    id: w,
    inputComponent: T = "input",
    inputProps: v = {},
    inputRef: x,
    margin: E,
    maxRows: O,
    minRows: k,
    multiline: L = !1,
    name: g,
    onBlur: N,
    onChange: B,
    onClick: F,
    onFocus: z,
    onKeyDown: V,
    onKeyUp: U,
    placeholder: j,
    readOnly: K,
    renderSuffix: Y,
    rows: re,
    size: M,
    slotProps: $ = {},
    slots: J = {},
    startAdornment: H,
    type: W = "text",
    value: Q,
    ...X
  } = r, Z = v.value != null ? v.value : Q, {
    current: te
  } = m.useRef(Z != null), ee = m.useRef(), q = m.useCallback((Ee) => {
    process.env.NODE_ENV !== "production" && Ee && Ee.nodeName !== "INPUT" && !Ee.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ne = nt(ee, x, v.ref, q), [R, ie] = m.useState(!1), I = Mn();
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (I)
      return I.registerEffect();
  }, [I]);
  const le = An({
    props: r,
    muiFormControl: I,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  le.focused = I ? I.focused : R, m.useEffect(() => {
    !I && b && R && (ie(!1), N && N());
  }, [I, b, R, N]);
  const he = I && I.onFilled, je = I && I.onEmpty, ze = m.useCallback((Ee) => {
    fo(Ee) ? he && he() : je && je();
  }, [he, je]);
  Yt(() => {
    te && ze({
      value: Z
    });
  }, [Z, ze, te]);
  const _e = (Ee) => {
    z && z(Ee), v.onFocus && v.onFocus(Ee), I && I.onFocus ? I.onFocus(Ee) : ie(!0);
  }, st = (Ee) => {
    N && N(Ee), v.onBlur && v.onBlur(Ee), I && I.onBlur ? I.onBlur(Ee) : ie(!1);
  }, we = (Ee, ...Wt) => {
    if (!te) {
      const Jt = Ee.target || ee.current;
      if (Jt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Bt(1));
      ze({
        value: Jt.value
      });
    }
    v.onChange && v.onChange(Ee, ...Wt), B && B(Ee, ...Wt);
  };
  m.useEffect(() => {
    ze(ee.current);
  }, []);
  const rt = (Ee) => {
    ee.current && Ee.currentTarget === Ee.target && ee.current.focus(), F && F(Ee);
  };
  let oe = T, We = v;
  L && oe === "input" && (re ? (process.env.NODE_ENV !== "production" && (k || O) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), We = {
    type: void 0,
    minRows: re,
    maxRows: re,
    ...We
  }) : We = {
    type: void 0,
    maxRows: O,
    minRows: k,
    ...We
  }, oe = vu);
  const pt = (Ee) => {
    ze(Ee.animationName === "mui-auto-fill-cancel" ? ee.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    I && I.setAdornedStart(!!H);
  }, [I, H]);
  const ge = {
    ...r,
    color: le.color || "primary",
    disabled: le.disabled,
    endAdornment: p,
    error: le.error,
    focused: le.focused,
    formControl: I,
    fullWidth: h,
    hiddenLabel: le.hiddenLabel,
    multiline: L,
    size: le.size,
    startAdornment: H,
    type: W
  }, me = ag(ge), ht = J.root || u.Root || Wo, vt = $.root || d.root || {}, lt = J.input || u.Input || qo;
  return We = {
    ...We,
    ...$.input ?? d.input
  }, /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [!S && typeof ml == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (hl || (hl = /* @__PURE__ */ P.jsx(ml, {}))), /* @__PURE__ */ P.jsxs(ht, {
      ...vt,
      ref: n,
      onClick: rt,
      ...X,
      ...!qi(ht) && {
        ownerState: {
          ...ge,
          ...vt.ownerState
        }
      },
      className: fe(me.root, vt.className, l, K && "MuiInputBase-readOnly"),
      children: [H, /* @__PURE__ */ P.jsx(Vo.Provider, {
        value: null,
        children: /* @__PURE__ */ P.jsx(lt, {
          "aria-invalid": le.error,
          "aria-describedby": o,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: le.disabled,
          id: w,
          onAnimationStart: pt,
          name: g,
          placeholder: j,
          readOnly: K,
          required: le.required,
          rows: re,
          value: Z,
          onKeyDown: V,
          onKeyUp: U,
          type: W,
          ...We,
          ...!qi(lt) && {
            as: oe,
            ownerState: {
              ...ge,
              ...We.ownerState
            }
          },
          ref: ne,
          className: fe(me.input, We.className, K && "MuiInputBase-readOnly"),
          onBlur: st,
          onChange: we,
          onFocus: _e
        })
      }), p, Y ? Y({
        ...le,
        startAdornment: H
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Eu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Ts,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: zt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
const Ds = Eu;
function lg(e) {
  return $e("MuiInput", e);
}
const Un = {
  ...Pn,
  ...Ae("MuiInput", ["root", "underline", "input"])
};
function cg(e) {
  return $e("MuiOutlinedInput", e);
}
const Lt = {
  ...Pn,
  ...Ae("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function ug(e) {
  return $e("MuiFilledInput", e);
}
const Qt = {
  ...Pn,
  ...Ae("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, dg = Ty(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), fg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Su = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = As(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: b,
    onExit: S,
    onExited: p,
    onExiting: y,
    style: h,
    timeout: w = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Vt,
    ...v
  } = t, x = m.useRef(null), E = nt(x, Cr(l), n), O = (V) => (U) => {
    if (V) {
      const j = x.current;
      U === void 0 ? V(j) : V(j, U);
    }
  }, k = O(b), L = O((V, U) => {
    mu(V);
    const j = lo({
      style: h,
      timeout: w,
      easing: c
    }, {
      mode: "enter"
    });
    V.style.webkitTransition = r.transitions.create("opacity", j), V.style.transition = r.transitions.create("opacity", j), d && d(V, U);
  }), g = O(f), N = O(y), B = O((V) => {
    const U = lo({
      style: h,
      timeout: w,
      easing: c
    }, {
      mode: "exit"
    });
    V.style.webkitTransition = r.transitions.create("opacity", U), V.style.transition = r.transitions.create("opacity", U), S && S(V);
  }), F = O(p), z = (V) => {
    s && s(x.current, V);
  };
  return /* @__PURE__ */ P.jsx(T, {
    appear: a,
    in: u,
    nodeRef: x,
    onEnter: L,
    onEntered: g,
    onEntering: k,
    onExit: B,
    onExited: F,
    onExiting: N,
    addEndListener: z,
    timeout: w,
    ...v,
    children: (V, U) => /* @__PURE__ */ m.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: V === "exited" && !u ? "hidden" : void 0,
        ...fg[V],
        ...h,
        ...l.props.style
      },
      ref: E,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (Su.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: wr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function pg(e) {
  return $e("MuiBackdrop", e);
}
Ae("MuiBackdrop", ["root", "invisible"]);
const hg = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Fe({
    root: ["root", n && "invisible"]
  }, pg, t);
}, mg = ae("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), xu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: b = {},
    TransitionComponent: S,
    transitionDuration: p,
    ...y
  } = r, h = {
    ...r,
    component: a,
    invisible: l
  }, w = hg(h), T = {
    transition: S,
    root: u.Root,
    ...b
  }, v = {
    ...d,
    ...f
  }, x = {
    slots: T,
    slotProps: v
  }, [E, O] = kt("root", {
    elementType: mg,
    externalForwardedProps: x,
    className: fe(w.root, s),
    ownerState: h
  }), [k, L] = kt("transition", {
    elementType: Su,
    externalForwardedProps: x,
    ownerState: h
  });
  return delete L.ownerState, /* @__PURE__ */ P.jsx(k, {
    in: c,
    timeout: p,
    ...y,
    ...L,
    children: /* @__PURE__ */ P.jsx(E, {
      "aria-hidden": !0,
      ...O,
      classes: w,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (xu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
const yg = Ae("MuiBox", ["root"]), gg = Bo(), wu = Xh({
  themeId: Pt,
  defaultTheme: gg,
  defaultClassName: yg.root,
  generateClassName: $c.generate
});
process.env.NODE_ENV !== "production" && (wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function bg(e) {
  return $e("MuiButton", e);
}
const En = Ae("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Cu = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Cu.displayName = "ButtonGroupContext");
const Tu = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (Tu.displayName = "ButtonGroupButtonContext");
const vg = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${ue(t)}`, `size${ue(o)}`, `${s}Size${ue(o)}`, `color${ue(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ue(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ue(o)}`]
  }, c = Fe(l, bg, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, Ru = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Eg = ae(js, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ue(n.color)}`], t[`size${ue(n.size)}`], t[`${n.variant}Size${ue(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(Ve(({
  theme: e
}) => {
  var r, o;
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${En.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${En.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${En.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${En.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(_t(["dark", "contrastText"])).map(([s]) => ({
      props: {
        color: s
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[s].main,
        "--variant-outlinedColor": (e.vars || e).palette[s].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)` : Ct(e.palette[s].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[s].contrastText,
        "--variant-containedBg": (e.vars || e).palette[s].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[s].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ct(e.palette[s].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[s].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ct(e.palette[s].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        "--variant-containedColor": e.vars ? (
          // this is safe because grey does not change between default light/dark mode
          e.vars.palette.text.primary
        ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, t),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ct(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ct(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${En.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${En.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Sg = ae("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${ue(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Ru]
}), xg = ae("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${ue(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Ru]
}), Hi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(Cu), o = m.useContext(Tu), s = lr(r, t), a = Ue({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: b = !1,
    disableFocusRipple: S = !1,
    endIcon: p,
    focusVisibleClassName: y,
    fullWidth: h = !1,
    size: w = "medium",
    startIcon: T,
    type: v,
    variant: x = "text",
    ...E
  } = a, O = {
    ...a,
    color: c,
    component: u,
    disabled: f,
    disableElevation: b,
    disableFocusRipple: S,
    fullWidth: h,
    size: w,
    type: v,
    variant: x
  }, k = vg(O), L = T && /* @__PURE__ */ P.jsx(Sg, {
    className: k.startIcon,
    ownerState: O,
    children: T
  }), g = p && /* @__PURE__ */ P.jsx(xg, {
    className: k.endIcon,
    ownerState: O,
    children: p
  }), N = o || "";
  return /* @__PURE__ */ P.jsxs(Eg, {
    ownerState: O,
    className: fe(r.className, k.root, d, N),
    component: u,
    disabled: f,
    focusRipple: !S,
    focusVisibleClassName: fe(k.focusVisible, y),
    ref: n,
    type: v,
    ...E,
    classes: k,
    children: [L, l, g]
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * Element placed after the children.
   */
  endIcon: i.node,
  /**
   * @ignore
   */
  focusVisibleClassName: i.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: i.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * Element placed before the children.
   */
  startIcon: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: i.oneOfType([i.oneOf(["contained", "outlined", "text"]), i.string])
});
const Ki = typeof Ms({}) == "function", wg = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), Cg = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Ou = (e, t = !1) => {
  var s, a;
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var d, f;
    const u = e.getColorSchemeSelector(l);
    u.startsWith("@") ? n[u] = {
      ":root": {
        colorScheme: (d = c.palette) == null ? void 0 : d.mode
      }
    } : n[u.replace(/\s*&/, "")] = {
      colorScheme: (f = c.palette) == null ? void 0 : f.mode
    };
  });
  let r = {
    html: wg(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Cg(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const o = (a = (s = e.components) == null ? void 0 : s.MuiCssBaseline) == null ? void 0 : a.styleOverrides;
  return o && (r = [r, o]), r;
}, Kr = "mui-ecs", Tg = (e) => {
  const t = Ou(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${Kr})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var a, l;
    const s = e.getColorSchemeSelector(r);
    s.startsWith("@") ? n[s] = {
      [`:root:not(:has(.${Kr}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    } : n[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Kr}))`]: {
        colorScheme: (l = o.palette) == null ? void 0 : l.mode
      }
    };
  }), t;
}, Rg = Ms(Ki ? ({
  theme: e,
  enableColorScheme: t
}) => Ou(e, t) : ({
  theme: e
}) => Tg(e));
function ku(e) {
  const t = Ue({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [Ki && /* @__PURE__ */ P.jsx(Rg, {
      enableColorScheme: r
    }), !Ki && !r && /* @__PURE__ */ P.jsx("span", {
      className: Kr,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: i.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: i.bool
});
function Og(e) {
  const t = gt(e);
  return t.body === e ? ln(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function er(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function yl(e) {
  return parseInt(ln(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function kg(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function gl(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !kg(a);
    l && c && er(a, o);
  });
}
function yi(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Pg(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Og(r)) {
      const a = Kc(gt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${yl(r) + a}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${yl(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = gt(r).body;
    else {
      const a = r.parentElement, l = ln(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Ng(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class _g {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && er(t.modalRef, !1);
    const o = Ng(n);
    gl(n, t.mount, t.modalRef, o, !0);
    const s = yi(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = yi(this.containers, (s) => s.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Pg(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = yi(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && er(t.modalRef, n), gl(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && er(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ag = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Mg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Lg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Ig(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Lg(e));
}
function $g(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Ag)).forEach((r, o) => {
    const s = Mg(r);
    s === -1 || !Ig(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function jg() {
  return !0;
}
function po(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = $g,
    isEnabled: a = jg,
    open: l
  } = e, c = m.useRef(!1), u = m.useRef(null), d = m.useRef(null), f = m.useRef(null), b = m.useRef(null), S = m.useRef(!1), p = m.useRef(null), y = nt(Cr(t), p), h = m.useRef(null);
  m.useEffect(() => {
    !l || !p.current || (S.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (!l || !p.current)
      return;
    const v = gt(p.current);
    return p.current.contains(v.activeElement) || (p.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), p.current.setAttribute("tabIndex", "-1")), S.current && p.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !p.current)
      return;
    const v = gt(p.current), x = (k) => {
      h.current = k, !(r || !a() || k.key !== "Tab") && v.activeElement === p.current && k.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, E = () => {
      var g, N;
      const k = p.current;
      if (k === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (k.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== b.current)
        b.current = null;
      else if (b.current !== null)
        return;
      if (!S.current)
        return;
      let L = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && (L = s(p.current)), L.length > 0) {
        const B = !!((g = h.current) != null && g.shiftKey && ((N = h.current) == null ? void 0 : N.key) === "Tab"), F = L[0], z = L[L.length - 1];
        typeof F != "string" && typeof z != "string" && (B ? z.focus() : F.focus());
      } else
        k.focus();
    };
    v.addEventListener("focusin", E), v.addEventListener("keydown", x, !0);
    const O = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(O), v.removeEventListener("focusin", E), v.removeEventListener("keydown", x, !0);
    };
  }, [n, r, o, a, l, s]);
  const w = (v) => {
    f.current === null && (f.current = v.relatedTarget), S.current = !0, b.current = v.target;
    const x = t.props.onFocus;
    x && x(v);
  }, T = (v) => {
    f.current === null && (f.current = v.relatedTarget), S.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: y,
      onFocus: w
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (po.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: wr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (po.propTypes = Do(po.propTypes));
function Dg(e) {
  return typeof e == "function" ? e() : e;
}
function Bg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Fg = new _g();
function Vg(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Fg,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, b = m.useRef({}), S = m.useRef(null), p = m.useRef(null), y = nt(p, f), [h, w] = m.useState(!d), T = Bg(c);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const x = () => gt(S.current), E = () => (b.current.modalRef = p.current, b.current.mount = S.current, b.current), O = () => {
    o.mount(E(), {
      disableScrollLock: r
    }), p.current && (p.current.scrollTop = 0);
  }, k = wn(() => {
    const j = Dg(t) || x().body;
    o.add(E(), j), p.current && O();
  }), L = m.useCallback(() => o.isTopModal(E()), [o]), g = wn((j) => {
    S.current = j, j && (d && L() ? O() : p.current && er(p.current, v));
  }), N = m.useCallback(() => {
    o.remove(E(), v);
  }, [v, o]);
  m.useEffect(() => () => {
    N();
  }, [N]), m.useEffect(() => {
    d ? k() : (!T || !s) && N();
  }, [d, N, T, s, k]);
  const B = (j) => (K) => {
    var Y;
    (Y = j.onKeyDown) == null || Y.call(j, K), !(K.key !== "Escape" || K.which === 229 || // Wait until IME is settled.
    !L()) && (n || (K.stopPropagation(), u && u(K, "escapeKeyDown")));
  }, F = (j) => (K) => {
    var Y;
    (Y = j.onClick) == null || Y.call(j, K), K.target === K.currentTarget && u && u(K, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const K = Zc(e);
      delete K.onTransitionEnter, delete K.onTransitionExited;
      const Y = {
        ...K,
        ...j
      };
      return {
        role: "presentation",
        ...Y,
        onKeyDown: B(Y),
        ref: y
      };
    },
    getBackdropProps: (j = {}) => {
      const K = j;
      return {
        "aria-hidden": !0,
        ...K,
        onClick: F(K),
        open: d
      };
    },
    getTransitionProps: () => {
      const j = () => {
        w(!1), a && a();
      }, K = () => {
        w(!0), l && l(), s && N();
      };
      return {
        onEnter: qa(j, c == null ? void 0 : c.props.onEnter),
        onExited: qa(K, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: y,
    portalRef: g,
    isTopModal: L,
    exited: h,
    hasTransition: T
  };
}
function Ug(e) {
  return $e("MuiModal", e);
}
Ae("MuiModal", ["root", "hidden", "backdrop"]);
const zg = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ug, r);
}, Wg = ae("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ve(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), qg = ae(xu, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Pu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = qg,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: b = {},
    componentsProps: S = {},
    disableAutoFocus: p = !1,
    disableEnforceFocus: y = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: w = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: v = !1,
    hideBackdrop: x = !1,
    keepMounted: E = !1,
    onBackdropClick: O,
    onClose: k,
    onTransitionEnter: L,
    onTransitionExited: g,
    open: N,
    slotProps: B = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: z,
    ...V
  } = r, U = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: p,
    disableEnforceFocus: y,
    disableEscapeKeyDown: h,
    disablePortal: w,
    disableRestoreFocus: T,
    disableScrollLock: v,
    hideBackdrop: x,
    keepMounted: E
  }, {
    getRootProps: j,
    getBackdropProps: K,
    getTransitionProps: Y,
    portalRef: re,
    isTopModal: M,
    exited: $,
    hasTransition: J
  } = Vg({
    ...U,
    rootRef: n
  }), H = {
    ...U,
    exited: $
  }, W = zg(H), Q = {};
  if (u.props.tabIndex === void 0 && (Q.tabIndex = "-1"), J) {
    const {
      onEnter: R,
      onExited: ie
    } = Y();
    Q.onEnter = R, Q.onExited = ie;
  }
  const X = {
    slots: {
      root: b.Root,
      backdrop: b.Backdrop,
      ...F
    },
    slotProps: {
      ...S,
      ...B
    }
  }, [Z, te] = kt("root", {
    elementType: Wg,
    externalForwardedProps: X,
    getSlotProps: j,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: H,
    className: fe(l, W == null ? void 0 : W.root, !H.open && H.exited && (W == null ? void 0 : W.hidden))
  }), [ee, q] = kt("backdrop", {
    elementType: o,
    externalForwardedProps: X,
    additionalProps: s,
    getSlotProps: (R) => K({
      ...R,
      onClick: (ie) => {
        O && O(ie), R != null && R.onClick && R.onClick(ie);
      }
    }),
    className: fe(s == null ? void 0 : s.className, W == null ? void 0 : W.backdrop),
    ownerState: H
  }), ne = nt(s == null ? void 0 : s.ref, q.ref);
  return !E && !N && (!J || $) ? null : /* @__PURE__ */ P.jsx(uo, {
    ref: re,
    container: d,
    disablePortal: w,
    children: /* @__PURE__ */ P.jsxs(Z, {
      ...te,
      ...V,
      children: [!x && o ? /* @__PURE__ */ P.jsx(ee, {
        ...q,
        ref: ne
      }) : null, /* @__PURE__ */ P.jsx(po, {
        disableEnforceFocus: y,
        disableAutoFocus: p,
        disableRestoreFocus: T,
        isEnabled: M,
        open: N,
        children: /* @__PURE__ */ m.cloneElement(u, Q)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Pu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: wr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([cr, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const bl = Ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Hg = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", s === "small" && `size${ue(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = Fe(c, ug, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Kg = ae(Wo, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Uo(e, t), !n.disableUnderline && t.underline];
  }
})(Ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Qt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Qt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Qt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Qt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Qt.disabled}, .${Qt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Qt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([a]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: a
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[a]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: l
      }) => a.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Yg = ae(qo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: zo
})(Ve(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), fr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: d = !1,
    slotProps: f,
    slots: b = {},
    type: S = "text",
    ...p
  } = r, y = {
    ...r,
    disableUnderline: o,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: S
  }, h = Hg(r), w = {
    root: {
      ownerState: y
    },
    input: {
      ownerState: y
    }
  }, T = f ?? a ? et(w, f ?? a) : w, v = b.root ?? s.Root ?? Kg, x = b.input ?? s.Input ?? Yg;
  return /* @__PURE__ */ P.jsx(Ds, {
    slots: {
      root: v,
      input: x
    },
    componentsProps: T,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: S,
    ...p,
    classes: h
  });
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: zt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
fr && (fr.muiName = "Input");
function Gg(e) {
  return $e("MuiFormControl", e);
}
Ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Xg = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ue(n)}`, r && "fullWidth"]
  };
  return Fe(o, Gg, t);
}, Jg = ae("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${ue(e.margin)}`],
    ...e.fullWidth && t.fullWidth
  })
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Bs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: b = !1,
    margin: S = "none",
    required: p = !1,
    size: y = "medium",
    variant: h = "outlined",
    ...w
  } = r, T = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: b,
    margin: S,
    required: p,
    size: y,
    variant: h
  }, v = Xg(T), [x, E] = m.useState(() => {
    let z = !1;
    return o && m.Children.forEach(o, (V) => {
      if (!di(V, ["Input", "Select"]))
        return;
      const U = di(V, ["Select"]) ? V.props.input : V;
      U && ig(U.props) && (z = !0);
    }), z;
  }), [O, k] = m.useState(() => {
    let z = !1;
    return o && m.Children.forEach(o, (V) => {
      di(V, ["Input", "Select"]) && (fo(V.props, !0) || fo(V.props.inputProps, !0)) && (z = !0);
    }), z;
  }), [L, g] = m.useState(!1);
  c && L && g(!1);
  const N = d !== void 0 && !c ? d : L;
  let B;
  if (process.env.NODE_ENV !== "production") {
    const z = m.useRef(!1);
    B = () => (z.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), z.current = !0, () => {
      z.current = !1;
    });
  }
  const F = m.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: u,
    filled: O,
    focused: N,
    fullWidth: f,
    hiddenLabel: b,
    size: y,
    onBlur: () => {
      g(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      g(!0);
    },
    registerEffect: B,
    required: p,
    variant: h
  }), [x, a, c, u, O, N, f, b, B, p, y, h]);
  return /* @__PURE__ */ P.jsx(Vo.Provider, {
    value: F,
    children: /* @__PURE__ */ P.jsx(Jg, {
      as: l,
      ownerState: T,
      className: fe(v.root, s),
      ref: n,
      ...w,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function Zg(e) {
  return $e("MuiFormHelperText", e);
}
const vl = Ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var El;
const Qg = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", o && "disabled", s && "error", r && `size${ue(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Fe(u, Zg, t);
}, eb = ae("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ue(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${vl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${vl.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Nu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: d,
    margin: f,
    required: b,
    variant: S,
    ...p
  } = r, y = Mn(), h = An({
    props: r,
    muiFormControl: y,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), w = {
    ...r,
    component: a,
    contained: h.variant === "filled" || h.variant === "outlined",
    variant: h.variant,
    size: h.size,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  };
  delete w.ownerState;
  const T = Qg(w);
  return /* @__PURE__ */ P.jsx(eb, {
    as: a,
    className: fe(T.root, s),
    ref: n,
    ...p,
    ownerState: w,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      El || (El = /* @__PURE__ */ P.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  });
});
process.env.NODE_ENV !== "production" && (Nu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
function tb(e) {
  return $e("MuiFormLabel", e);
}
const tr = Ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), nb = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ue(n)}`, o && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Fe(c, tb, t);
}, rb = ae("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(Ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${tr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${tr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${tr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), ob = ae("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ve(({
  theme: e
}) => ({
  [`&.${tr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), _u = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: f,
    required: b,
    ...S
  } = r, p = Mn(), y = An({
    props: r,
    muiFormControl: p,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), h = {
    ...r,
    color: y.color || "primary",
    component: l,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  }, w = nb(h);
  return /* @__PURE__ */ P.jsxs(rb, {
    as: l,
    ownerState: h,
    className: fe(w.root, s),
    ref: n,
    ...S,
    children: [o, y.required && /* @__PURE__ */ P.jsxs(ob, {
      ownerState: h,
      "aria-hidden": !0,
      className: w.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (_u.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Yi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ib = {
  entering: {
    opacity: 1,
    transform: Yi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, gi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ho = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: b,
    onExiting: S,
    style: p,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = Vt,
    ...w
  } = t, T = Hc(), v = m.useRef(), x = As(), E = m.useRef(null), O = nt(E, Cr(s), n), k = (U) => (j) => {
    if (U) {
      const K = E.current;
      j === void 0 ? U(K) : U(K, j);
    }
  }, L = k(d), g = k((U, j) => {
    mu(U);
    const {
      duration: K,
      delay: Y,
      easing: re
    } = lo({
      style: p,
      timeout: y,
      easing: a
    }, {
      mode: "enter"
    });
    let M;
    y === "auto" ? (M = x.transitions.getAutoHeightDuration(U.clientHeight), v.current = M) : M = K, U.style.transition = [x.transitions.create("opacity", {
      duration: M,
      delay: Y
    }), x.transitions.create("transform", {
      duration: gi ? M : M * 0.666,
      delay: Y,
      easing: re
    })].join(","), c && c(U, j);
  }), N = k(u), B = k(S), F = k((U) => {
    const {
      duration: j,
      delay: K,
      easing: Y
    } = lo({
      style: p,
      timeout: y,
      easing: a
    }, {
      mode: "exit"
    });
    let re;
    y === "auto" ? (re = x.transitions.getAutoHeightDuration(U.clientHeight), v.current = re) : re = j, U.style.transition = [x.transitions.create("opacity", {
      duration: re,
      delay: K
    }), x.transitions.create("transform", {
      duration: gi ? re : re * 0.666,
      delay: gi ? K : K || re * 0.333,
      easing: Y
    })].join(","), U.style.opacity = 0, U.style.transform = Yi(0.75), f && f(U);
  }), z = k(b), V = (U) => {
    y === "auto" && T.start(v.current || 0, U), r && r(E.current, U);
  };
  return /* @__PURE__ */ P.jsx(h, {
    appear: o,
    in: l,
    nodeRef: E,
    onEnter: g,
    onEntered: N,
    onEntering: L,
    onExit: F,
    onExited: z,
    onExiting: B,
    addEndListener: V,
    timeout: y === "auto" ? null : y,
    ...w,
    children: (U, j) => /* @__PURE__ */ m.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Yi(0.75),
        visibility: U === "exited" && !l ? "hidden" : void 0,
        ...ib[U],
        ...p,
        ...s.props.style
      },
      ref: O,
      ...j
    })
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: wr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
ho && (ho.muiSupportAuto = !0);
const sb = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, lg, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, ab = ae(Wo, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Uo(e, t), !n.disableUnderline && t.underline];
  }
})(Ve(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Un.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Un.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Un.disabled}, .${Un.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Un.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), lb = ae(qo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: zo
})({}), pr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: d,
    slots: f = {},
    type: b = "text",
    ...S
  } = r, p = sb(r), h = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, w = d ?? a ? et(d ?? a, h) : h, T = f.root ?? s.Root ?? ab, v = f.input ?? s.Input ?? lb;
  return /* @__PURE__ */ P.jsx(Ds, {
    slots: {
      root: T,
      input: v
    },
    slotProps: w,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: b,
    ...S,
    classes: p
  });
});
process.env.NODE_ENV !== "production" && (pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: zt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
pr && (pr.muiName = "Input");
function cb(e) {
  return $e("MuiInputLabel", e);
}
Ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const ub = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", o && "shrink", r && r !== "normal" && `size${ue(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Fe(c, cb, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, db = ae(_u, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${tr.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Ve(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Fs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, d = Mn();
  let f = a;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const b = An({
    props: r,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), S = {
    ...r,
    disableAnimation: o,
    formControl: d,
    shrink: f,
    size: b.size,
    variant: b.variant,
    required: b.required,
    focused: b.focused
  }, p = ub(S);
  return /* @__PURE__ */ P.jsx(db, {
    "data-shrink": f,
    ref: n,
    className: fe(p.root, c),
    ...u,
    ownerState: S,
    classes: p
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function fb(e) {
  return $e("MuiLinearProgress", e);
}
Ae("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Gi = 4, Xi = _n`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, pb = typeof Xi != "string" ? xo`
        animation: ${Xi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, Ji = _n`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, hb = typeof Ji != "string" ? xo`
        animation: ${Ji} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Zi = _n`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, mb = typeof Zi != "string" ? xo`
        animation: ${Zi} 3s infinite linear;
      ` : null, yb = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, o = {
    root: ["root", `color${ue(r)}`, n],
    dashed: ["dashed", `dashedColor${ue(r)}`],
    bar1: ["bar", `barColor${ue(r)}`, (n === "indeterminate" || n === "query") && "bar1Indeterminate", n === "determinate" && "bar1Determinate", n === "buffer" && "bar1Buffer"],
    bar2: ["bar", n !== "buffer" && `barColor${ue(r)}`, n === "buffer" && `color${ue(r)}`, (n === "indeterminate" || n === "query") && "bar2Indeterminate", n === "buffer" && "bar2Buffer"]
  };
  return Fe(o, fb, t);
}, Vs = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? jo(e.palette[t].main, 0.62) : $o(e.palette[t].main, 0.5), gb = ae("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ue(n.color)}`], t[n.variant]];
  }
})(Ve(({
  theme: e
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Vs(e, t)
    }
  })), {
    props: ({
      ownerState: t
    }) => t.color === "inherit" && t.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}))), bb = ae("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.dashed, t[`dashedColor${ue(n.color)}`]];
  }
})(Ve(({
  theme: e
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
    }
  }, ...Object.entries(e.palette).filter(_t()).map(([t]) => {
    const n = Vs(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), mb || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${Zi} 3s infinite linear`
}), vb = ae("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ue(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate, n.variant === "determinate" && t.bar1Determinate, n.variant === "buffer" && t.bar1Buffer];
  }
})(Ve(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      backgroundColor: "currentColor"
    }
  }, ...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main
    }
  })), {
    props: {
      variant: "determinate"
    },
    style: {
      transition: `transform .${Gi}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${Gi}s linear`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: pb || {
      animation: `${Xi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), Eb = ae("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ue(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate, n.variant === "buffer" && t.bar2Buffer];
  }
})(Ve(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
    }
  })), {
    props: ({
      ownerState: t
    }) => t.variant !== "buffer" && t.color !== "inherit",
    style: {
      backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3
    }
  }, ...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t,
      variant: "buffer"
    },
    style: {
      backgroundColor: Vs(e, t),
      transition: `transform .${Gi}s linear`
    }
  })), {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: hb || {
      animation: `${Ji} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), Au = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: o,
    color: s = "primary",
    value: a,
    valueBuffer: l,
    variant: c = "indeterminate",
    ...u
  } = r, d = {
    ...r,
    color: s,
    variant: c
  }, f = yb(d), b = ru(), S = {}, p = {
    bar1: {},
    bar2: {}
  };
  if (c === "determinate" || c === "buffer")
    if (a !== void 0) {
      S["aria-valuenow"] = Math.round(a), S["aria-valuemin"] = 0, S["aria-valuemax"] = 100;
      let y = a - 100;
      b && (y = -y), p.bar1.transform = `translateX(${y}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (c === "buffer")
    if (l !== void 0) {
      let y = (l || 0) - 100;
      b && (y = -y), p.bar2.transform = `translateX(${y}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ P.jsxs(gb, {
    className: fe(f.root, o),
    ownerState: d,
    role: "progressbar",
    ...S,
    ref: n,
    ...u,
    children: [c === "buffer" ? /* @__PURE__ */ P.jsx(bb, {
      className: f.dashed,
      ownerState: d
    }) : null, /* @__PURE__ */ P.jsx(vb, {
      className: f.bar1,
      ownerState: d,
      style: p.bar1
    }), c === "determinate" ? null : /* @__PURE__ */ P.jsx(Eb, {
      className: f.bar2,
      ownerState: d,
      style: p.bar2
    })]
  });
});
process.env.NODE_ENV !== "production" && (Au.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: i.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: i.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: i.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const mo = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (mo.displayName = "ListContext");
function Sb(e) {
  return $e("MuiList", e);
}
Ae("MuiList", ["root", "padding", "dense", "subheader"]);
const xb = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return Fe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Sb, t);
}, wb = ae("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Mu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = r, f = m.useMemo(() => ({
    dense: l
  }), [l]), b = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, S = xb(b);
  return /* @__PURE__ */ P.jsx(mo.Provider, {
    value: f,
    children: /* @__PURE__ */ P.jsxs(wb, {
      as: a,
      className: fe(S.root, s),
      ref: n,
      ownerState: b,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (Mu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Sl = Ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), xl = Ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function bi(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function wl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Lu(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function zn(e, t, n, r, o, s) {
  let a = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Lu(l, s) || c)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Iu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...b
  } = t, S = m.useRef(null), p = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Yt(() => {
    o && S.current.focus();
  }, [o]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: x
    }) => {
      const E = !S.current.style.width;
      if (v.clientHeight < S.current.clientHeight && E) {
        const O = `${Kc(gt(v))}px`;
        S.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = O, S.current.style.width = `calc(100% + ${O})`;
      }
      return S.current;
    }
  }), []);
  const y = (v) => {
    const x = S.current, E = v.key;
    if (v.ctrlKey || v.metaKey || v.altKey) {
      d && d(v);
      return;
    }
    const k = gt(x).activeElement;
    if (E === "ArrowDown")
      v.preventDefault(), zn(x, k, u, c, bi);
    else if (E === "ArrowUp")
      v.preventDefault(), zn(x, k, u, c, wl);
    else if (E === "Home")
      v.preventDefault(), zn(x, null, u, c, bi);
    else if (E === "End")
      v.preventDefault(), zn(x, null, u, c, wl);
    else if (E.length === 1) {
      const L = p.current, g = E.toLowerCase(), N = performance.now();
      L.keys.length > 0 && (N - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && g !== L.keys[0] && (L.repeating = !1)), L.lastTime = N, L.keys.push(g);
      const B = k && !L.repeating && Lu(k, L);
      L.previousKeyMatched && (B || zn(x, k, !1, c, bi, L)) ? v.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d(v);
  }, h = nt(S, n);
  let w = -1;
  m.Children.forEach(a, (v, x) => {
    if (!/* @__PURE__ */ m.isValidElement(v)) {
      w === x && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && ar.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (f === "selectedMenu" && v.props.selected || w === -1) && (w = x), w === x && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const T = m.Children.map(a, (v, x) => {
    if (x === w) {
      const E = {};
      return s && (E.autoFocus = !0), v.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ m.cloneElement(v, E);
    }
    return v;
  });
  return /* @__PURE__ */ P.jsx(Mu, {
    role: "menu",
    ref: h,
    className: l,
    onKeyDown: y,
    tabIndex: o ? 0 : -1,
    ...b,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (Iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function Cb(e) {
  return $e("MuiPopover", e);
}
Ae("MuiPopover", ["root", "paper"]);
function Cl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Tl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Rl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Yr(e) {
  return typeof e == "function" ? e() : e;
}
const Tb = (e) => {
  const {
    classes: t
  } = e;
  return Fe({
    root: ["root"],
    paper: ["paper"]
  }, Cb, t);
}, Rb = ae(Pu, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), $u = ae($s, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ju = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: f,
    elevation: b = 8,
    marginThreshold: S = 16,
    open: p,
    PaperProps: y = {},
    slots: h = {},
    slotProps: w = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = ho,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: E,
      ...O
    } = {},
    disableScrollLock: k = !1,
    ...L
  } = r, g = (w == null ? void 0 : w.paper) ?? y, N = m.useRef(), B = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: b,
    marginThreshold: S,
    externalPaperSlotProps: g,
    transformOrigin: T,
    TransitionComponent: v,
    transitionDuration: x,
    TransitionProps: O
  }, F = Tb(B), z = m.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const q = Yr(s), ne = q && q.nodeType === 1 ? q : gt(N.current).body, R = ne.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = ne.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: R.top + Cl(R, a.vertical),
      left: R.left + Tl(R, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), V = m.useCallback((q) => ({
    vertical: Cl(q, T.vertical),
    horizontal: Tl(q, T.horizontal)
  }), [T.horizontal, T.vertical]), U = m.useCallback((q) => {
    const ne = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, R = V(ne);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Rl(R)
      };
    const ie = z();
    let I = ie.top - R.vertical, le = ie.left - R.horizontal;
    const he = I + ne.height, je = le + ne.width, ze = ln(Yr(s)), _e = ze.innerHeight - S, st = ze.innerWidth - S;
    if (S !== null && I < S) {
      const we = I - S;
      I -= we, R.vertical += we;
    } else if (S !== null && he > _e) {
      const we = he - _e;
      I -= we, R.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && ne.height > _e && ne.height && _e && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ne.height - _e}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), S !== null && le < S) {
      const we = le - S;
      le -= we, R.horizontal += we;
    } else if (je > st) {
      const we = je - st;
      le -= we, R.horizontal += we;
    }
    return {
      top: `${Math.round(I)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: Rl(R)
    };
  }, [s, c, z, V, S]), [j, K] = m.useState(p), Y = m.useCallback(() => {
    const q = N.current;
    if (!q)
      return;
    const ne = U(q);
    ne.top !== null && (q.style.top = ne.top), ne.left !== null && (q.style.left = ne.left), q.style.transformOrigin = ne.transformOrigin, K(!0);
  }, [U]);
  m.useEffect(() => (k && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [s, k, Y]);
  const re = (q, ne) => {
    E && E(q, ne), Y();
  }, M = () => {
    K(!1);
  };
  m.useEffect(() => {
    p && Y();
  }), m.useImperativeHandle(o, () => p ? {
    updatePosition: () => {
      Y();
    }
  } : null, [p, Y]), m.useEffect(() => {
    if (!p)
      return;
    const q = zc(() => {
      Y();
    }), ne = ln(s);
    return ne.addEventListener("resize", q), () => {
      q.clear(), ne.removeEventListener("resize", q);
    };
  }, [s, p, Y]);
  let $ = x;
  x === "auto" && !v.muiSupportAuto && ($ = void 0);
  const J = f || (s ? gt(Yr(s)).body : void 0), H = {
    slots: h,
    slotProps: {
      ...w,
      paper: g
    }
  }, [W, Q] = kt("paper", {
    elementType: $u,
    externalForwardedProps: H,
    additionalProps: {
      elevation: b,
      className: fe(F.paper, g == null ? void 0 : g.className),
      style: j ? g.style : {
        ...g.style,
        opacity: 0
      }
    },
    ownerState: B
  }), [X, {
    slotProps: Z,
    ...te
  }] = kt("root", {
    elementType: Rb,
    externalForwardedProps: H,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: J,
      open: p
    },
    ownerState: B,
    className: fe(F.root, d)
  }), ee = nt(N, Q.ref);
  return /* @__PURE__ */ P.jsx(X, {
    ...te,
    ...!qi(X) && {
      slotProps: Z,
      disableScrollLock: k
    },
    ...L,
    ref: n,
    children: /* @__PURE__ */ P.jsx(v, {
      appear: !0,
      in: p,
      onEntering: re,
      onExited: M,
      timeout: $,
      ...O,
      children: /* @__PURE__ */ P.jsx(W, {
        ...Q,
        ref: ee,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ju.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: zt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: xr(i.oneOfType([cr, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Yr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([cr, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Xc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: Ts
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object
});
function Ob(e) {
  return $e("MuiMenu", e);
}
Ae("MuiMenu", ["root", "paper", "list"]);
const kb = {
  vertical: "top",
  horizontal: "right"
}, Pb = {
  vertical: "top",
  horizontal: "left"
}, Nb = (e) => {
  const {
    classes: t
  } = e;
  return Fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Ob, t);
}, _b = ae(ju, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ab = ae($u, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Mb = ae(Iu, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Du = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: f = {},
    PopoverClasses: b,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: p,
      ...y
    } = {},
    variant: h = "selectedMenu",
    slots: w = {},
    slotProps: T = {},
    ...v
  } = r, x = ru(), E = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: p,
    PaperProps: f,
    transitionDuration: S,
    TransitionProps: y,
    variant: h
  }, O = Nb(E), k = o && !l && d, L = m.useRef(null), g = (j, K) => {
    L.current && L.current.adjustStyleForScrollbar(j, {
      direction: x ? "rtl" : "ltr"
    }), p && p(j, K);
  }, N = (j) => {
    j.key === "Tab" && (j.preventDefault(), u && u(j, "tabKeyDown"));
  };
  let B = -1;
  m.Children.map(s, (j, K) => {
    /* @__PURE__ */ m.isValidElement(j) && (process.env.NODE_ENV !== "production" && ar.isFragment(j) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), j.props.disabled || (h === "selectedMenu" && j.props.selected || B === -1) && (B = K));
  });
  const F = w.paper ?? Ab, z = T.paper ?? f, V = Za({
    elementType: w.root,
    externalSlotProps: T.root,
    ownerState: E,
    className: [O.root, a]
  }), U = Za({
    elementType: F,
    externalSlotProps: z,
    ownerState: E,
    className: O.paper
  });
  return /* @__PURE__ */ P.jsx(_b, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? kb : Pb,
    slots: {
      paper: F,
      root: w.root
    },
    slotProps: {
      root: V,
      paper: U
    },
    open: d,
    ref: n,
    transitionDuration: S,
    TransitionProps: {
      onEntering: g,
      ...y
    },
    ownerState: E,
    ...v,
    classes: b,
    children: /* @__PURE__ */ P.jsx(Mb, {
      onKeyDown: N,
      actions: L,
      autoFocus: o && (B === -1 || l),
      autoFocusItem: k,
      variant: h,
      ...c,
      className: fe(O.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Du.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([cr, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function Lb(e) {
  return $e("MuiMenuItem", e);
}
const Wn = Ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Ib = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, $b = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: s,
    classes: a
  } = e, c = Fe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", s && "selected"]
  }, Lb, a);
  return {
    ...a,
    ...c
  };
}, jb = ae(js, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Ib
})(Ve(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Wn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ct(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Wn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Wn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ct(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ct(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Wn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Wn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${bl.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${bl.inset}`]: {
    marginLeft: 52
  },
  [`& .${xl.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${xl.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Sl.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Sl.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Gr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: b,
    ...S
  } = r, p = m.useContext(mo), y = m.useMemo(() => ({
    dense: a || p.dense || !1,
    disableGutters: c
  }), [p.dense, a, c]), h = m.useRef(null);
  Yt(() => {
    o && (h.current ? h.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const w = {
    ...r,
    dense: y.dense,
    divider: l,
    disableGutters: c
  }, T = $b(r), v = nt(h, n);
  let x;
  return r.disabled || (x = f !== void 0 ? f : -1), /* @__PURE__ */ P.jsx(mo.Provider, {
    value: y,
    children: /* @__PURE__ */ P.jsx(jb, {
      ref: v,
      role: d,
      tabIndex: x,
      component: s,
      focusVisibleClassName: fe(T.focusVisible, u),
      className: fe(T.root, b),
      ...S,
      ownerState: w,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: i.bool,
  /**
   * @ignore
   */
  disabled: i.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  role: i.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number
});
function Db(e) {
  return $e("MuiNativeSelect", e);
}
const Us = Ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Bb = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${ue(n)}`, s && "iconOpen", r && "disabled"]
  };
  return Fe(l, Db, t);
}, Bu = ae("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Us.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), Fb = ae(Bu, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Rt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Us.multiple}`]: t.multiple
    }];
  }
})({}), Fu = ae("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Us.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Vb = ae(Fu, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ue(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Vu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: o,
    variant: c,
    error: s
  }, f = Bb(d);
  return /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Fb, {
      ownerState: d,
      className: fe(f.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ P.jsx(Vb, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: zt,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
var Ol;
const Ub = ae("fieldset", {
  shouldForwardProp: Rt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), zb = ae("legend", {
  shouldForwardProp: Rt
})(Ve(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function Uu(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: s,
    ...a
  } = e, l = o != null && o !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ P.jsx(Ub, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ P.jsx(zb, {
      ownerState: c,
      children: l ? /* @__PURE__ */ P.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ol || (Ol = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Uu.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
const Wb = (e) => {
  const {
    classes: t
  } = e, r = Fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, cg, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, qb = ae(Wo, {
  shouldForwardProp: (e) => Rt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Uo
})(Ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Lt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${Lt.focused} .${Lt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Lt.focused} .${Lt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${Lt.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${Lt.error} .${Lt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Lt.disabled} .${Lt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Hb = ae(Uu, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Kb = ae(qo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: zo
})(Ve(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), hr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const o = Ue({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: a = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: d,
    slots: f = {},
    type: b = "text",
    ...S
  } = o, p = Wb(o), y = Mn(), h = An({
    props: o,
    muiFormControl: y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), w = {
    ...o,
    color: h.color || "primary",
    disabled: h.disabled,
    error: h.error,
    focused: h.focused,
    formControl: y,
    fullWidth: a,
    hiddenLabel: h.hiddenLabel,
    multiline: u,
    size: h.size,
    type: b
  }, T = f.root ?? s.Root ?? qb, v = f.input ?? s.Input ?? Kb;
  return /* @__PURE__ */ P.jsx(Ds, {
    slots: {
      root: T,
      input: v
    },
    renderSuffix: (x) => /* @__PURE__ */ P.jsx(Hb, {
      ownerState: w,
      className: p.notchedOutline,
      label: c != null && c !== "" && h.required ? r || (r = /* @__PURE__ */ P.jsxs(m.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: b,
    ...S,
    classes: {
      ...p,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (hr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: zt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
hr && (hr.muiName = "Input");
function Yb(e) {
  return $e("MuiSelect", e);
}
const qn = Ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var kl;
const Gb = ae(Bu, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${qn.select}`]: t.select
      },
      {
        [`&.${qn.select}`]: t[n.variant]
      },
      {
        [`&.${qn.error}`]: t.error
      },
      {
        [`&.${qn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${qn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Xb = ae(Fu, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ue(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Jb = ae("input", {
  shouldForwardProp: (e) => du(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Pl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Zb(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Qb = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${ue(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Fe(l, Yb, t);
}, zu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var Or;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: b,
    error: S = !1,
    IconComponent: p,
    inputRef: y,
    labelId: h,
    MenuProps: w = {},
    multiple: T,
    name: v,
    onBlur: x,
    onChange: E,
    onClose: O,
    onFocus: k,
    onOpen: L,
    open: g,
    readOnly: N,
    renderValue: B,
    SelectDisplayProps: F = {},
    tabIndex: z,
    // catching `type` from Input which makes no sense for SelectInput
    type: V,
    value: U,
    variant: j = "standard",
    ...K
  } = t, [Y, re] = Ya({
    controlled: U,
    default: d,
    name: "Select"
  }), [M, $] = Ya({
    controlled: g,
    default: u,
    name: "Select"
  }), J = m.useRef(null), H = m.useRef(null), [W, Q] = m.useState(null), {
    current: X
  } = m.useRef(g != null), [Z, te] = m.useState(), ee = nt(n, y), q = m.useCallback((se) => {
    H.current = se, se && Q(se);
  }, []), ne = W == null ? void 0 : W.parentNode;
  m.useImperativeHandle(ee, () => ({
    focus: () => {
      H.current.focus();
    },
    node: J.current,
    value: Y
  }), [Y]), m.useEffect(() => {
    u && M && W && !X && (te(a ? null : ne.clientWidth), H.current.focus());
  }, [W, a]), m.useEffect(() => {
    s && H.current.focus();
  }, [s]), m.useEffect(() => {
    if (!h)
      return;
    const se = gt(H.current).getElementById(h);
    if (se) {
      const be = () => {
        getSelection().isCollapsed && H.current.focus();
      };
      return se.addEventListener("click", be), () => {
        se.removeEventListener("click", be);
      };
    }
  }, [h]);
  const R = (se, be) => {
    se ? L && L(be) : O && O(be), X || (te(a ? null : ne.clientWidth), $(se));
  }, ie = (se) => {
    se.button === 0 && (se.preventDefault(), H.current.focus(), R(!0, se));
  }, I = (se) => {
    R(!1, se);
  }, le = m.Children.toArray(l), he = (se) => {
    const be = le.find((Qe) => Qe.props.value === se.target.value);
    be !== void 0 && (re(be.props.value), E && E(se, be));
  }, je = (se) => (be) => {
    let Qe;
    if (be.currentTarget.hasAttribute("tabindex")) {
      if (T) {
        Qe = Array.isArray(Y) ? Y.slice() : [];
        const qt = Y.indexOf(se.props.value);
        qt === -1 ? Qe.push(se.props.value) : Qe.splice(qt, 1);
      } else
        Qe = se.props.value;
      if (se.props.onClick && se.props.onClick(be), Y !== Qe && (re(Qe), E)) {
        const qt = be.nativeEvent || be, dn = new qt.constructor(qt.type, qt);
        Object.defineProperty(dn, "target", {
          writable: !0,
          value: {
            value: Qe,
            name: v
          }
        }), E(dn, se);
      }
      T || R(!1, be);
    }
  }, ze = (se) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(se.key) && (se.preventDefault(), R(!0, se));
  }, _e = W !== null && M, st = (se) => {
    !_e && x && (Object.defineProperty(se, "target", {
      writable: !0,
      value: {
        value: Y,
        name: v
      }
    }), x(se));
  };
  delete K["aria-invalid"];
  let we, rt;
  const oe = [];
  let We = !1, pt = !1;
  (fo({
    value: Y
  }) || b) && (B ? we = B(Y) : We = !0);
  const ge = le.map((se) => {
    if (!/* @__PURE__ */ m.isValidElement(se))
      return null;
    process.env.NODE_ENV !== "production" && ar.isFragment(se) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let be;
    if (T) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Bt(2));
      be = Y.some((Qe) => Pl(Qe, se.props.value)), be && We && oe.push(se.props.children);
    } else
      be = Pl(Y, se.props.value), be && We && (rt = se.props.children);
    return be && (pt = !0), /* @__PURE__ */ m.cloneElement(se, {
      "aria-selected": be ? "true" : "false",
      onClick: je(se),
      onKeyUp: (Qe) => {
        Qe.key === " " && Qe.preventDefault(), se.props.onKeyUp && se.props.onKeyUp(Qe);
      },
      role: "option",
      selected: be,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": se.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (!pt && !T && Y !== "") {
      const se = le.map((be) => be.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${se.filter((be) => be != null).map((be) => `\`${be}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [pt, le, T, v, Y]), We && (T ? oe.length === 0 ? we = null : we = oe.reduce((se, be, Qe) => (se.push(be), Qe < oe.length - 1 && se.push(", "), se), []) : we = rt);
  let me = Z;
  !a && X && W && (me = ne.clientWidth);
  let ht;
  typeof z < "u" ? ht = z : ht = f ? null : 0;
  const vt = F.id || (v ? `mui-component-select-${v}` : void 0), lt = {
    ...t,
    variant: j,
    value: Y,
    open: _e,
    error: S
  }, Ee = Qb(lt), Wt = {
    ...w.PaperProps,
    ...(Or = w.slotProps) == null ? void 0 : Or.paper
  }, Jt = Wc();
  return /* @__PURE__ */ P.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Gb, {
      as: "div",
      ref: q,
      tabIndex: ht,
      role: "combobox",
      "aria-controls": Jt,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": _e ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [h, vt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ze,
      onMouseDown: f || N ? null : ie,
      onBlur: st,
      onFocus: k,
      ...F,
      ownerState: lt,
      className: fe(F.className, Ee.select, c),
      id: vt,
      children: Zb(we) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        kl || (kl = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : we
    }), /* @__PURE__ */ P.jsx(Jb, {
      "aria-invalid": S,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: v,
      ref: J,
      "aria-hidden": !0,
      onChange: he,
      tabIndex: -1,
      disabled: f,
      className: Ee.nativeInput,
      autoFocus: s,
      ...K,
      ownerState: lt
    }), /* @__PURE__ */ P.jsx(Xb, {
      as: p,
      className: Ee.icon,
      ownerState: lt
    }), /* @__PURE__ */ P.jsx(Du, {
      id: `menu-${v || ""}`,
      anchorEl: ne,
      open: _e,
      onClose: I,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...w,
      MenuListProps: {
        "aria-labelledby": h,
        role: "listbox",
        "aria-multiselectable": T ? "true" : void 0,
        disableListWrap: !0,
        id: Jt,
        ...w.MenuListProps
      },
      slotProps: {
        ...w.slotProps,
        paper: {
          ...Wt,
          style: {
            minWidth: me,
            ...Wt != null ? Wt.style : null
          }
        }
      },
      children: ge
    })]
  });
});
process.env.NODE_ENV !== "production" && (zu.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: zt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const ev = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, zs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Rt(e) && e !== "variant",
  slot: "Root"
}, tv = ae(pr, zs)(""), nv = ae(hr, zs)(""), rv = ae(fr, zs)(""), Ho = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = uu({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = dg,
    id: f,
    input: b,
    inputProps: S,
    label: p,
    labelId: y,
    MenuProps: h,
    multiple: w = !1,
    native: T = !1,
    onClose: v,
    onOpen: x,
    open: E,
    renderValue: O,
    SelectDisplayProps: k,
    variant: L = "outlined",
    ...g
  } = r, N = T ? Vu : zu, B = Mn(), F = An({
    props: r,
    muiFormControl: B,
    states: ["variant", "error"]
  }), z = F.variant || L, V = {
    ...r,
    variant: z,
    classes: a
  }, U = ev(V), {
    root: j,
    ...K
  } = U, Y = b || {
    standard: /* @__PURE__ */ P.jsx(tv, {
      ownerState: V
    }),
    outlined: /* @__PURE__ */ P.jsx(nv, {
      label: p,
      ownerState: V
    }),
    filled: /* @__PURE__ */ P.jsx(rv, {
      ownerState: V
    })
  }[z], re = nt(n, Cr(Y));
  return /* @__PURE__ */ P.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(Y, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: s,
        error: F.error,
        IconComponent: d,
        variant: z,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: w,
        ...T ? {
          id: f
        } : {
          autoWidth: o,
          defaultOpen: c,
          displayEmpty: u,
          labelId: y,
          MenuProps: h,
          onClose: v,
          onOpen: x,
          open: E,
          renderValue: O,
          SelectDisplayProps: {
            id: f,
            ...k
          }
        },
        ...S,
        classes: S ? et(K, S.classes) : K,
        ...b ? b.props.inputProps : {}
      },
      ...(w && T || u) && z === "outlined" ? {
        notched: !0
      } : {},
      ref: re,
      className: fe(Y.props.className, l, U.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!b && {
        variant: z
      },
      ...g
    })
  });
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
Ho.muiName = "Select";
const nr = Um({
  createStyledComponent: ae("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => uu({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: i.oneOfType([i.oneOf(["column-reverse", "column", "row-reverse", "row"]), i.arrayOf(i.oneOf(["column-reverse", "column", "row-reverse", "row"])), i.object]),
  /**
   * Add an element between each child.
   */
  divider: i.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: i.oneOfType([i.arrayOf(i.oneOfType([i.number, i.string])), i.number, i.object, i.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: i.bool
});
function ov(e) {
  return $e("MuiTextField", e);
}
Ae("MuiTextField", ["root"]);
const iv = {
  standard: pr,
  filled: fr,
  outlined: hr
}, sv = (e) => {
  const {
    classes: t
  } = e;
  return Fe({
    root: ["root"]
  }, ov, t);
}, av = ae(Bs, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: b,
    fullWidth: S = !1,
    helperText: p,
    id: y,
    InputLabelProps: h,
    inputProps: w,
    InputProps: T,
    inputRef: v,
    label: x,
    maxRows: E,
    minRows: O,
    multiline: k = !1,
    name: L,
    onBlur: g,
    onChange: N,
    onFocus: B,
    placeholder: F,
    required: z = !1,
    rows: V,
    select: U = !1,
    SelectProps: j,
    slots: K = {},
    slotProps: Y = {},
    type: re,
    value: M,
    variant: $ = "outlined",
    ...J
  } = r, H = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: S,
    multiline: k,
    required: z,
    select: U,
    variant: $
  }, W = sv(H);
  process.env.NODE_ENV !== "production" && U && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Q = Wc(y), X = p && Q ? `${Q}-helper-text` : void 0, Z = x && Q ? `${Q}-label` : void 0, te = iv[$], ee = {
    slots: K,
    slotProps: {
      input: T,
      inputLabel: h,
      htmlInput: w,
      formHelperText: b,
      select: j,
      ...Y
    }
  }, q = {}, ne = ee.slotProps.inputLabel;
  $ === "outlined" && (ne && typeof ne.shrink < "u" && (q.notched = ne.shrink), q.label = x), U && ((!j || !j.native) && (q.id = void 0), q["aria-describedby"] = void 0);
  const [R, ie] = kt("input", {
    elementType: te,
    externalForwardedProps: ee,
    additionalProps: q,
    ownerState: H
  }), [I, le] = kt("inputLabel", {
    elementType: Fs,
    externalForwardedProps: ee,
    ownerState: H
  }), [he, je] = kt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ee,
    ownerState: H
  }), [ze, _e] = kt("formHelperText", {
    elementType: Nu,
    externalForwardedProps: ee,
    ownerState: H
  }), [st, we] = kt("select", {
    elementType: Ho,
    externalForwardedProps: ee,
    ownerState: H
  }), rt = /* @__PURE__ */ P.jsx(R, {
    "aria-describedby": X,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: S,
    multiline: k,
    name: L,
    rows: V,
    maxRows: E,
    minRows: O,
    type: re,
    value: M,
    id: Q,
    inputRef: v,
    onBlur: g,
    onChange: N,
    onFocus: B,
    placeholder: F,
    inputProps: je,
    slots: {
      input: K.htmlInput ? he : void 0
    },
    ...ie
  });
  return /* @__PURE__ */ P.jsxs(av, {
    className: fe(W.root, l),
    disabled: d,
    error: f,
    fullWidth: S,
    ref: n,
    required: z,
    color: c,
    variant: $,
    ownerState: H,
    ...J,
    children: [x != null && x !== "" && /* @__PURE__ */ P.jsx(I, {
      htmlFor: Q,
      id: Z,
      ...le,
      children: x
    }), U ? /* @__PURE__ */ P.jsx(st, {
      "aria-describedby": X,
      id: Q,
      labelId: Z,
      value: M,
      input: rt,
      ...we,
      children: a
    }) : rt, p && /* @__PURE__ */ P.jsx(ze, {
      id: X,
      ..._e,
      children: p
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: zt,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    formHelperText: i.oneOfType([i.func, i.object]),
    htmlInput: i.oneOfType([i.func, i.object]),
    input: i.oneOfType([i.func, i.object]),
    inputLabel: i.oneOfType([i.func, i.object]),
    select: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    formHelperText: i.elementType,
    htmlInput: i.elementType,
    input: i.elementType,
    inputLabel: i.elementType,
    select: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function Wu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: lv } = Object.prototype, { getPrototypeOf: Ws } = Object, Ko = /* @__PURE__ */ ((e) => (t) => {
  const n = lv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), At = (e) => (e = e.toLowerCase(), (t) => Ko(t) === e), Yo = (e) => (t) => typeof t === e, { isArray: Ln } = Array, mr = Yo("undefined");
function cv(e) {
  return e !== null && !mr(e) && e.constructor !== null && !mr(e.constructor) && bt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qu = At("ArrayBuffer");
function uv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qu(e.buffer), t;
}
const dv = Yo("string"), bt = Yo("function"), Hu = Yo("number"), Go = (e) => e !== null && typeof e == "object", fv = (e) => e === !0 || e === !1, Xr = (e) => {
  if (Ko(e) !== "object")
    return !1;
  const t = Ws(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pv = At("Date"), hv = At("File"), mv = At("Blob"), yv = At("FileList"), gv = (e) => Go(e) && bt(e.pipe), bv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || bt(e.append) && ((t = Ko(e)) === "formdata" || // detect form-data instance
  t === "object" && bt(e.toString) && e.toString() === "[object FormData]"));
}, vv = At("URLSearchParams"), [Ev, Sv, xv, wv] = ["ReadableStream", "Request", "Response", "Headers"].map(At), Cv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ln(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (r = 0; r < a; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function Ku(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yu = (e) => !mr(e) && e !== rn;
function es() {
  const { caseless: e } = Yu(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Ku(t, o) || o;
    Xr(t[s]) && Xr(r) ? t[s] = es(t[s], r) : Xr(r) ? t[s] = es({}, r) : Ln(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Tr(arguments[r], n);
  return t;
}
const Tv = (e, t, n, { allOwnKeys: r } = {}) => (Tr(t, (o, s) => {
  n && bt(o) ? e[s] = Wu(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Rv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ov = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, kv = (e, t, n, r) => {
  let o, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && Ws(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Pv = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Nv = (e) => {
  if (!e) return null;
  if (Ln(e)) return e;
  let t = e.length;
  if (!Hu(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _v = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ws(Uint8Array)), Av = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Mv = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Lv = At("HTMLFormElement"), Iv = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Nl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), $v = At("RegExp"), Gu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Tr(n, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (r[s] = a || o);
  }), Object.defineProperties(e, r);
}, jv = (e) => {
  Gu(e, (t, n) => {
    if (bt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (bt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Dv = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ln(e) ? r(e) : r(String(e).split(t)), n;
}, Bv = () => {
}, Fv = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, vi = "abcdefghijklmnopqrstuvwxyz", _l = "0123456789", Xu = {
  DIGIT: _l,
  ALPHA: vi,
  ALPHA_DIGIT: vi + vi.toUpperCase() + _l
}, Vv = (e = 16, t = Xu.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Uv(e) {
  return !!(e && bt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zv = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Go(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ln(r) ? [] : {};
        return Tr(r, (a, l) => {
          const c = n(a, o + 1);
          !mr(c) && (s[l] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Wv = At("AsyncFunction"), qv = (e) => e && (Go(e) || bt(e)) && bt(e.then) && bt(e.catch), Ju = ((e, t) => e ? setImmediate : t ? ((n, r) => (rn.addEventListener("message", ({ source: o, data: s }) => {
  o === rn && s === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), rn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  bt(rn.postMessage)
), Hv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof process < "u" && process.nextTick || Ju, _ = {
  isArray: Ln,
  isArrayBuffer: qu,
  isBuffer: cv,
  isFormData: bv,
  isArrayBufferView: uv,
  isString: dv,
  isNumber: Hu,
  isBoolean: fv,
  isObject: Go,
  isPlainObject: Xr,
  isReadableStream: Ev,
  isRequest: Sv,
  isResponse: xv,
  isHeaders: wv,
  isUndefined: mr,
  isDate: pv,
  isFile: hv,
  isBlob: mv,
  isRegExp: $v,
  isFunction: bt,
  isStream: gv,
  isURLSearchParams: vv,
  isTypedArray: _v,
  isFileList: yv,
  forEach: Tr,
  merge: es,
  extend: Tv,
  trim: Cv,
  stripBOM: Rv,
  inherits: Ov,
  toFlatObject: kv,
  kindOf: Ko,
  kindOfTest: At,
  endsWith: Pv,
  toArray: Nv,
  forEachEntry: Av,
  matchAll: Mv,
  isHTMLForm: Lv,
  hasOwnProperty: Nl,
  hasOwnProp: Nl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gu,
  freezeMethods: jv,
  toObjectSet: Dv,
  toCamelCase: Iv,
  noop: Bv,
  toFiniteNumber: Fv,
  findKey: Ku,
  global: rn,
  isContextDefined: Yu,
  ALPHABET: Xu,
  generateString: Vv,
  isSpecCompliantForm: Uv,
  toJSONObject: zv,
  isAsyncFn: Wv,
  isThenable: qv,
  setImmediate: Ju,
  asap: Hv
};
function de(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
_.inherits(de, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Zu = de.prototype, Qu = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qu[e] = { value: e };
});
Object.defineProperties(de, Qu);
Object.defineProperty(Zu, "isAxiosError", { value: !0 });
de.from = (e, t, n, r, o, s) => {
  const a = Object.create(Zu);
  return _.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), de.call(a, e.message, t, n, r, o), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const Kv = null;
function ts(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function ed(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Al(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = ed(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Yv(e) {
  return _.isArray(e) && !e.some(ts);
}
const Gv = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xo(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !_.isUndefined(h[y]);
  });
  const r = n.metaTokens, o = n.visitor || d, s = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (_.isDate(p))
      return p.toISOString();
    if (!c && _.isBlob(p))
      throw new de("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(p) || _.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, y, h) {
    let w = p;
    if (p && !h && typeof p == "object") {
      if (_.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (_.isArray(p) && Yv(p) || (_.isFileList(p) || _.endsWith(y, "[]")) && (w = _.toArray(p)))
        return y = ed(y), w.forEach(function(v, x) {
          !(_.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Al([y], x, s) : a === null ? y : y + "[]",
            u(v)
          );
        }), !1;
    }
    return ts(p) ? !0 : (t.append(Al(h, y, s), u(p)), !1);
  }
  const f = [], b = Object.assign(Gv, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: ts
  });
  function S(p, y) {
    if (!_.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(p), _.forEach(p, function(w, T) {
        (!(_.isUndefined(w) || w === null) && o.call(
          t,
          w,
          _.isString(T) ? T.trim() : T,
          y,
          b
        )) === !0 && S(w, y ? y.concat(T) : [T]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Ml(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function qs(e, t) {
  this._pairs = [], e && Xo(e, this, t);
}
const td = qs.prototype;
td.append = function(t, n) {
  this._pairs.push([t, n]);
};
td.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ml);
  } : Ml;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Xv(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Xv, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new qs(t, n).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Ll {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    _.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jv = typeof URLSearchParams < "u" ? URLSearchParams : qs, Zv = typeof FormData < "u" ? FormData : null, Qv = typeof Blob < "u" ? Blob : null, e0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jv,
    FormData: Zv,
    Blob: Qv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Hs = typeof window < "u" && typeof document < "u", ns = typeof navigator == "object" && navigator || void 0, t0 = Hs && (!ns || ["ReactNative", "NativeScript", "NS"].indexOf(ns.product) < 0), n0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", r0 = Hs && window.location.href || "http://localhost", o0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Hs,
  hasStandardBrowserEnv: t0,
  hasStandardBrowserWebWorkerEnv: n0,
  navigator: ns,
  origin: r0
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...o0,
  ...e0
};
function i0(e, t) {
  return Xo(e, new ut.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ut.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function s0(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function a0(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function od(e) {
  function t(n, r, o, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = s >= n.length;
    return a = !a && _.isArray(o) ? o.length : a, c ? (_.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !l) : ((!o[a] || !_.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && _.isArray(o[a]) && (o[a] = a0(o[a])), !l);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, o) => {
      t(s0(r), o, n, 0);
    }), n;
  }
  return null;
}
function l0(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Rr = {
  transitional: rd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = _.isObject(t);
    if (s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return o ? JSON.stringify(od(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return i0(t, this.formSerializer).toString();
      if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Xo(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), l0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Rr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (_.isResponse(t) || _.isReadableStream(t))
      return t;
    if (t && _.isString(t) && (r && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? de.from(l, de.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ut.classes.FormData,
    Blob: ut.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Rr.headers[e] = {};
});
const c0 = _.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), u0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && c0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Il = Symbol("internals");
function Hn(e) {
  return e && String(e).trim().toLowerCase();
}
function Jr(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Jr) : String(e);
}
function d0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const f0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ei(e, t, n, r, o) {
  if (_.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!_.isString(t)) {
    if (_.isString(r))
      return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(t);
  }
}
function p0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function h0(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, a) {
        return this[r].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
class dt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, c, u) {
      const d = Hn(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = Jr(l));
    }
    const a = (l, c) => _.forEach(l, (u, d) => s(u, d, c));
    if (_.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (_.isString(t) && (t = t.trim()) && !f0(t))
      a(u0(t), n);
    else if (_.isHeaders(t))
      for (const [l, c] of t.entries())
        s(c, l, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Hn(t), t) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return d0(o);
        if (_.isFunction(n))
          return n.call(this, o, r);
        if (_.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Hn(t), t) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ei(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (a = Hn(a), a) {
        const l = _.findKey(r, a);
        l && (!n || Ei(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return _.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ei(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return _.forEach(this, (o, s) => {
      const a = _.findKey(r, s);
      if (a) {
        n[a] = Jr(o), delete n[s];
        return;
      }
      const l = t ? p0(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Jr(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Il] = this[Il] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const l = Hn(a);
      r[l] || (h0(o, a), r[l] = !0);
    }
    return _.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
_.freezeMethods(dt);
function Si(e, t) {
  const n = this || Rr, r = t || n, o = dt.from(r.headers);
  let s = r.data;
  return _.forEach(e, function(l) {
    s = l.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function id(e) {
  return !!(e && e.__CANCEL__);
}
function In(e, t, n) {
  de.call(this, e ?? "canceled", de.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(In, de, {
  __CANCEL__: !0
});
function sd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new de(
    "Request failed with status code " + n.status,
    [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function m0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function y0(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[s];
    a || (a = u), n[o] = c, r[o] = u;
    let f = s, b = 0;
    for (; f !== o; )
      b += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const S = d && u - d;
    return S ? Math.round(b * 1e3 / S) : void 0;
  };
}
function g0(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const a = (u, d = Date.now()) => {
    n = d, o = null, s && (clearTimeout(s), s = null), e.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? a(u, d) : (o = u, s || (s = setTimeout(() => {
      s = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const yo = (e, t, n = 3) => {
  let r = 0;
  const o = y0(50, 250);
  return g0((s) => {
    const a = s.loaded, l = s.lengthComputable ? s.total : void 0, c = a - r, u = o(c), d = a <= l;
    r = a;
    const f = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l && d ? (l - a) / u : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, $l = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, jl = (e) => (...t) => _.asap(() => e(...t)), b0 = ut.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let a = s;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(a) {
      const l = _.isString(a) ? o(a) : a;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), v0 = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), _.isString(r) && a.push("path=" + r), _.isString(o) && a.push("domain=" + o), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function E0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function S0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ad(e, t) {
  return e && !E0(t) ? S0(e, t) : t;
}
const Dl = (e) => e instanceof dt ? { ...e } : e;
function cn(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return _.isPlainObject(u) && _.isPlainObject(d) ? _.merge.call({ caseless: f }, u, d) : _.isPlainObject(d) ? _.merge({}, d) : _.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u))
        return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function s(u, d) {
    if (!_.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d) => o(Dl(u), Dl(d), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || o, b = f(e[d], t[d], d);
    _.isUndefined(b) && f !== l || (n[d] = b);
  }), n;
}
const ld = (e) => {
  const t = cn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
  t.headers = a = dt.from(a), t.url = nd(ad(t.baseURL, t.url), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let c;
  if (_.isFormData(n)) {
    if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (ut.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)), r || r !== !1 && b0(t.url))) {
    const u = o && s && v0.read(s);
    u && a.set(o, u);
  }
  return t;
}, x0 = typeof XMLHttpRequest < "u", w0 = x0 && function(e) {
  return new Promise(function(n, r) {
    const o = ld(e);
    let s = o.data;
    const a = dt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = o, d, f, b, S, p;
    function y() {
      S && S(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function w() {
      if (!h)
        return;
      const v = dt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: v,
        config: e,
        request: h
      };
      sd(function(k) {
        n(k), y();
      }, function(k) {
        r(k), y();
      }, E), h = null;
    }
    "onloadend" in h ? h.onloadend = w : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, h.onabort = function() {
      h && (r(new de("Request aborted", de.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new de("Network Error", de.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const E = o.transitional || rd;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), r(new de(
        x,
        E.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
        e,
        h
      )), h = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in h && _.forEach(a.toJSON(), function(x, E) {
      h.setRequestHeader(E, x);
    }), _.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([b, p] = yo(u, !0), h.addEventListener("progress", b)), c && h.upload && ([f, S] = yo(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", S)), (o.cancelToken || o.signal) && (d = (v) => {
      h && (r(!v || v.type ? new In(null, e, h) : v), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const T = m0(o.url);
    if (T && ut.protocols.indexOf(T) === -1) {
      r(new de("Unsupported protocol " + T + ":", de.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
}, C0 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, l();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof de ? d : new In(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new de(`timeout ${t} of ms exceeded`, de.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: c } = r;
    return c.unsubscribe = () => _.asap(l), c;
  }
}, T0 = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, R0 = async function* (e, t) {
  for await (const n of O0(e))
    yield* T0(n, t);
}, O0 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Bl = (e, t, n, r) => {
  const o = R0(e, t);
  let s = 0, a, l = (c) => {
    a || (a = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await o.next();
        if (u) {
          l(), c.close();
          return;
        }
        let f = d.byteLength;
        if (n) {
          let b = s += f;
          n(b);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(c) {
      return l(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Jo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", cd = Jo && typeof ReadableStream == "function", k0 = Jo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ud = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, P0 = cd && ud(() => {
  let e = !1;
  const t = new Request(ut.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Fl = 64 * 1024, rs = cd && ud(() => _.isReadableStream(new Response("").body)), go = {
  stream: rs && ((e) => e.body)
};
Jo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !go[t] && (go[t] = _.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new de(`Response type '${t}' is not supported`, de.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const N0 = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request(ut.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await k0(e)).byteLength;
}, _0 = async (e, t) => {
  const n = _.toFiniteNumber(e.getContentLength());
  return n ?? N0(t);
}, A0 = Jo && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: c,
    responseType: u,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: b
  } = ld(e);
  u = u ? (u + "").toLowerCase() : "text";
  let S = C0([o, s && s.toAbortSignal()], a), p;
  const y = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let h;
  try {
    if (c && P0 && n !== "get" && n !== "head" && (h = await _0(d, r)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (_.isFormData(r) && (O = E.headers.get("content-type")) && d.setContentType(O), E.body) {
        const [k, L] = $l(
          h,
          yo(jl(c))
        );
        r = Bl(E.body, Fl, k, L);
      }
    }
    _.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: S,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? f : void 0
    });
    let T = await fetch(p);
    const v = rs && (u === "stream" || u === "response");
    if (rs && (l || v && y)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((g) => {
        E[g] = T[g];
      });
      const O = _.toFiniteNumber(T.headers.get("content-length")), [k, L] = l && $l(
        O,
        yo(jl(l), !0)
      ) || [];
      T = new Response(
        Bl(T.body, Fl, k, () => {
          L && L(), y && y();
        }),
        E
      );
    }
    u = u || "text";
    let x = await go[_.findKey(go, u) || "text"](T, e);
    return !v && y && y(), await new Promise((E, O) => {
      sd(E, O, {
        data: x,
        headers: dt.from(T.headers),
        status: T.status,
        statusText: T.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw y && y(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new de("Network Error", de.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : de.from(w, w && w.code, e, p);
  }
}), os = {
  http: Kv,
  xhr: w0,
  fetch: A0
};
_.forEach(os, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Vl = (e) => `- ${e}`, M0 = (e) => _.isFunction(e) || e === null || e === !1, dd = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let a;
      if (r = n, !M0(n) && (r = os[(a = String(n)).toLowerCase()], r === void 0))
        throw new de(`Unknown adapter '${a}'`);
      if (r)
        break;
      o[a || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(Vl).join(`
`) : " " + Vl(s[0]) : "as no adapter specified";
      throw new de(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: os
};
function xi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new In(null, e);
}
function Ul(e) {
  return xi(e), e.headers = dt.from(e.headers), e.data = Si.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), dd.getAdapter(e.adapter || Rr.adapter)(e).then(function(r) {
    return xi(e), r.data = Si.call(
      e,
      e.transformResponse,
      r
    ), r.headers = dt.from(r.headers), r;
  }, function(r) {
    return id(r) || (xi(e), r && r.response && (r.response.data = Si.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = dt.from(r.response.headers))), Promise.reject(r);
  });
}
const fd = "1.7.7", Ks = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ks[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zl = {};
Ks.transitional = function(t, n, r) {
  function o(s, a) {
    return "[Axios v" + fd + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new de(
        o(a, " has been removed" + (n ? " in " + n : "")),
        de.ERR_DEPRECATED
      );
    return n && !zl[a] && (zl[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
function L0(e, t, n) {
  if (typeof e != "object")
    throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new de("option " + s + " must be " + c, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new de("Unknown option " + s, de.ERR_BAD_OPTION);
  }
}
const is = {
  assertOptions: L0,
  validators: Ks
}, Ht = is.validators;
class on {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ll(),
      response: new Ll()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = cn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && is.assertOptions(r, {
      silentJSONParsing: Ht.transitional(Ht.boolean),
      forcedJSONParsing: Ht.transitional(Ht.boolean),
      clarifyTimeoutError: Ht.transitional(Ht.boolean)
    }, !1), o != null && (_.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : is.assertOptions(o, {
      encode: Ht.function,
      serialize: Ht.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && _.merge(
      s.common,
      s[n.method]
    );
    s && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete s[p];
      }
    ), n.headers = dt.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let d, f = 0, b;
    if (!c) {
      const p = [Ul.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, u), b = p.length, d = Promise.resolve(n); f < b; )
        d = d.then(p[f++], p[f++]);
      return d;
    }
    b = l.length;
    let S = n;
    for (f = 0; f < b; ) {
      const p = l[f++], y = l[f++];
      try {
        S = p(S);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      d = Ul.call(this, S);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, b = u.length; f < b; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = cn(this.defaults, t);
    const n = ad(t.baseURL, t.url);
    return nd(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(t) {
  on.prototype[t] = function(n, r) {
    return this.request(cn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, a, l) {
      return this.request(cn(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  on.prototype[t] = n(), on.prototype[t + "Form"] = n(!0);
});
class Ys {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      r.reason || (r.reason = new In(s, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ys(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function I0(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function $0(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ss = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ss).forEach(([e, t]) => {
  ss[t] = e;
});
function pd(e) {
  const t = new on(e), n = Wu(on.prototype.request, t);
  return _.extend(n, on.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return pd(cn(e, o));
  }, n;
}
const Ze = pd(Rr);
Ze.Axios = on;
Ze.CanceledError = In;
Ze.CancelToken = Ys;
Ze.isCancel = id;
Ze.VERSION = fd;
Ze.toFormData = Xo;
Ze.AxiosError = de;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(t) {
  return Promise.all(t);
};
Ze.spread = I0;
Ze.isAxiosError = $0;
Ze.mergeConfig = cn;
Ze.AxiosHeaders = dt;
Ze.formToJSON = (e) => od(_.isHTMLForm(e) ? new FormData(e) : e);
Ze.getAdapter = dd.getAdapter;
Ze.HttpStatusCode = ss;
Ze.default = Ze;
const Ft = /* @__PURE__ */ Object.create(null);
Ft.open = "0";
Ft.close = "1";
Ft.ping = "2";
Ft.pong = "3";
Ft.message = "4";
Ft.upgrade = "5";
Ft.noop = "6";
const Zr = /* @__PURE__ */ Object.create(null);
Object.keys(Ft).forEach((e) => {
  Zr[Ft[e]] = e;
});
const as = { type: "error", data: "parser error" }, hd = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", md = typeof ArrayBuffer == "function", yd = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Gs = ({ type: e, data: t }, n, r) => hd && t instanceof Blob ? n ? r(t) : Wl(t, r) : md && (t instanceof ArrayBuffer || yd(t)) ? n ? r(t) : Wl(new Blob([t]), r) : r(Ft[e] + (t || "")), Wl = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function ql(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let wi;
function j0(e, t) {
  if (hd && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ql).then(t);
  if (md && (e.data instanceof ArrayBuffer || yd(e.data)))
    return t(ql(e.data));
  Gs(e, !1, (n) => {
    wi || (wi = new TextEncoder()), t(wi.encode(n));
  });
}
const Hl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Hl.length; e++)
  Zn[Hl.charCodeAt(e)] = e;
const D0 = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, s, a, l, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), d = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    s = Zn[e.charCodeAt(r)], a = Zn[e.charCodeAt(r + 1)], l = Zn[e.charCodeAt(r + 2)], c = Zn[e.charCodeAt(r + 3)], d[o++] = s << 2 | a >> 4, d[o++] = (a & 15) << 4 | l >> 2, d[o++] = (l & 3) << 6 | c & 63;
  return u;
}, B0 = typeof ArrayBuffer == "function", Xs = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: gd(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: F0(e.substring(1), t)
  } : Zr[n] ? e.length > 1 ? {
    type: Zr[n],
    data: e.substring(1)
  } : {
    type: Zr[n]
  } : as;
}, F0 = (e, t) => {
  if (B0) {
    const n = D0(e);
    return gd(n, t);
  } else
    return { base64: !0, data: e };
}, gd = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, bd = "", V0 = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((s, a) => {
    Gs(s, !1, (l) => {
      r[a] = l, ++o === n && t(r.join(bd));
    });
  });
}, U0 = (e, t) => {
  const n = e.split(bd), r = [];
  for (let o = 0; o < n.length; o++) {
    const s = Xs(n[o], t);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function z0() {
  return new TransformStream({
    transform(e, t) {
      j0(e, (n) => {
        const r = n.length;
        let o;
        if (r < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const s = new DataView(o.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const s = new DataView(o.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(n);
      });
    }
  });
}
let Ci;
function jr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Dr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function W0(e, t) {
  Ci || (Ci = new TextDecoder());
  const n = [];
  let r = 0, o = -1, s = !1;
  return new TransformStream({
    transform(a, l) {
      for (n.push(a); ; ) {
        if (r === 0) {
          if (jr(n) < 1)
            break;
          const c = Dr(n, 1);
          s = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (jr(n) < 2)
            break;
          const c = Dr(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (jr(n) < 8)
            break;
          const c = Dr(n, 8), u = new DataView(c.buffer, c.byteOffset, c.length), d = u.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            l.enqueue(as);
            break;
          }
          o = d * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (jr(n) < o)
            break;
          const c = Dr(n, o);
          l.enqueue(Xs(s ? c : Ci.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          l.enqueue(as);
          break;
        }
      }
    }
  });
}
const vd = 4;
function Je(e) {
  if (e) return q0(e);
}
function q0(e) {
  for (var t in Je.prototype)
    e[t] = Je.prototype[t];
  return e;
}
Je.prototype.on = Je.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Je.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Je.prototype.off = Je.prototype.removeListener = Je.prototype.removeAllListeners = Je.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === t || r.fn === t) {
      n.splice(o, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
Je.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r)
      n[r].apply(this, t);
  }
  return this;
};
Je.prototype.emitReserved = Je.prototype.emit;
Je.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Je.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Ed(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const H0 = wt.setTimeout, K0 = wt.clearTimeout;
function Zo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = H0.bind(wt), e.clearTimeoutFn = K0.bind(wt)) : (e.setTimeoutFn = wt.setTimeout.bind(wt), e.clearTimeoutFn = wt.clearTimeout.bind(wt));
}
const Y0 = 1.33;
function G0(e) {
  return typeof e == "string" ? X0(e) : Math.ceil((e.byteLength || e.size) * Y0);
}
function X0(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function J0(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Z0(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let s = n[r].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class Q0 extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Js extends Je {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Zo(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, n, r) {
    return super.emitReserved("error", new Q0(t, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const n = Xs(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = J0(t);
    return n.length ? "?" + n : "";
  }
}
const Sd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), ls = 64, eE = {};
let Kl = 0, Br = 0, Yl;
function Gl(e) {
  let t = "";
  do
    t = Sd[e % ls] + t, e = Math.floor(e / ls);
  while (e > 0);
  return t;
}
function xd() {
  const e = Gl(+/* @__PURE__ */ new Date());
  return e !== Yl ? (Kl = 0, Yl = e) : e + "." + Gl(Kl++);
}
for (; Br < ls; Br++)
  eE[Sd[Br]] = Br;
let wd = !1;
try {
  wd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const tE = wd;
function Cd(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || tE))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function nE() {
}
const rE = function() {
  return new Cd({
    xdomain: !1
  }).responseType != null;
}();
class oE extends Js {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const r = location.protocol === "https:";
      let o = location.port;
      o || (o = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || o !== t.port;
    }
    const n = t && t.forceBase64;
    this.supportsBinary = rE && !n, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    U0(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, V0(t, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = xd()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new On(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (o, s) => {
      this.onError("xhr post error", o, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
let On = class Qr extends Je {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n) {
    super(), Zo(this, n), this.opts = n, this.method = n.method || "GET", this.uri = t, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var t;
    const n = Ed(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const r = this.xhr = new Cd(n);
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        var o;
        r.readyState === 3 && ((o = this.opts.cookieJar) === null || o === void 0 || o.parseCookies(r)), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this.onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Qr.requestsCount++, Qr.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = nE, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Qr.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
};
On.requestsCount = 0;
On.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Xl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in wt ? "pagehide" : "unload";
    addEventListener(e, Xl, !1);
  }
}
function Xl() {
  for (let e in On.requests)
    On.requests.hasOwnProperty(e) && On.requests[e].abort();
}
const Zs = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Fr = wt.WebSocket || wt.MozWebSocket, Jl = !0, iE = "arraybuffer", Zl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class sE extends Js {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(t) {
    super(t), this.supportsBinary = !t.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const t = this.uri(), n = this.opts.protocols, r = Zl ? {} : Ed(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Jl && !Zl ? n ? new Fr(t, n) : new Fr(t) : new Fr(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      Gs(r, this.supportsBinary, (s) => {
        const a = {};
        try {
          Jl && this.ws.send(s);
        } catch {
        }
        o && Zs(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = xd()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Fr;
  }
}
class aE extends Js {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((t) => {
        const n = W0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = z0();
        o.readable.pipeTo(t.writable), this.writer = o.writable.getWriter();
        const s = () => {
          r.read().then(({ done: l, value: c }) => {
            l || (this.onPacket(c), s());
          }).catch((l) => {
          });
        };
        s();
        const a = { type: "open" };
        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this.writer.write(a).then(() => this.onOpen());
      });
    }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      this.writer.write(r).then(() => {
        o && Zs(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const lE = {
  websocket: sE,
  webtransport: aE,
  polling: oE
}, cE = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, uE = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function cs(e) {
  if (e.length > 2e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = cE.exec(e || ""), s = {}, a = 14;
  for (; a--; )
    s[uE[a]] = o[a] || "";
  return n != -1 && r != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = dE(s, s.path), s.queryKey = fE(s, s.query), s;
}
function dE(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function fE(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, s) {
    o && (n[o] = s);
  }), n;
}
let Td = class xn extends Je {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n = {}) {
    super(), this.binaryType = iE, this.writeBuffer = [], t && typeof t == "object" && (n = t, t = null), t ? (t = cs(t), n.hostname = t.host, n.secure = t.protocol === "https" || t.protocol === "wss", n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = cs(n.host).host), Zo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Z0(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = vd, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new lE[t](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && xn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let n = this.createTransport(t), r = !1;
    xn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            xn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (d(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const b = new Error("probe error");
            b.transport = n.name, this.emitReserved("upgradeError", b);
          }
      }));
    };
    function s() {
      r || (r = !0, d(), n.close(), n = null);
    }
    const a = (f) => {
      const b = new Error("probe error: " + f);
      b.transport = n.name, s(), this.emitReserved("upgradeError", b);
    };
    function l() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && s();
    }
    const d = () => {
      n.removeListener("open", o), n.removeListener("error", a), n.removeListener("close", l), this.off("close", c), this.off("upgrading", u);
    };
    n.once("open", o), n.once("error", a), n.once("close", l), this.once("close", c), this.once("upgrading", u), this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", xn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++)
        this.probe(this.upgrades[t]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), this.resetPingTimeout(), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this.getWritablePackets();
      this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (n += G0(o)), r > 0 && n > this.maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(t, n, r, o) {
    if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: t,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    xn.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const o = t.length;
    for (; r < o; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
Td.protocol = vd;
function pE(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = cs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + t, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const hE = typeof ArrayBuffer == "function", mE = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Rd = Object.prototype.toString, yE = typeof Blob == "function" || typeof Blob < "u" && Rd.call(Blob) === "[object BlobConstructor]", gE = typeof File == "function" || typeof File < "u" && Rd.call(File) === "[object FileConstructor]";
function Qs(e) {
  return hE && (e instanceof ArrayBuffer || mE(e)) || yE && e instanceof Blob || gE && e instanceof File;
}
function eo(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (eo(e[n]))
        return !0;
    return !1;
  }
  if (Qs(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return eo(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && eo(e[n]))
      return !0;
  return !1;
}
function bE(e) {
  const t = [], n = e.data, r = e;
  return r.data = us(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function us(e, t) {
  if (!e)
    return e;
  if (Qs(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = us(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = us(e[r], t));
    return n;
  }
  return e;
}
function vE(e, t) {
  return e.data = ds(e.data, t), delete e.attachments, e;
}
function ds(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = ds(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = ds(e[n], t));
  return e;
}
const EE = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], SE = 5;
var ye;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ye || (ye = {}));
class xE {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === ye.EVENT || t.type === ye.ACK) && eo(t) ? this.encodeAsBinary({
      type: t.type === ye.EVENT ? ye.BINARY_EVENT : ye.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === ye.BINARY_EVENT || t.type === ye.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = bE(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function Ql(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ea extends Je {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === ye.BINARY_EVENT;
      r || n.type === ye.BINARY_ACK ? (n.type = r ? ye.EVENT : ye.ACK, this.reconstructor = new wE(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Qs(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (ye[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ye.BINARY_EVENT || r.type === ye.BINARY_ACK) {
      const s = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const a = t.substring(s, n);
      if (a != Number(a) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(a);
    }
    if (t.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(s, n);
    } else
      r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const s = n + 1;
      for (; ++n; ) {
        const a = t.charAt(n);
        if (a == null || Number(a) != a) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(s, n + 1));
    }
    if (t.charAt(++n)) {
      const s = this.tryParse(t.substr(n));
      if (ea.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case ye.CONNECT:
        return Ql(n);
      case ye.DISCONNECT:
        return n === void 0;
      case ye.CONNECT_ERROR:
        return typeof n == "string" || Ql(n);
      case ye.EVENT:
      case ye.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && EE.indexOf(n[0]) === -1);
      case ye.ACK:
      case ye.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class wE {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = vE(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const CE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ea,
  Encoder: xE,
  get PacketType() {
    return ye;
  },
  protocol: SE
}, Symbol.toStringTag, { value: "Module" }));
function Ot(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const TE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Od extends Je {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      Ot(t, "open", this.onopen.bind(this)),
      Ot(t, "packet", this.onpacket.bind(this)),
      Ot(t, "error", this.onerror.bind(this)),
      Ot(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...n) {
    if (TE.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const r = {
      type: ye.EVENT,
      data: n
    };
    if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const a = this.ids++, l = n.pop();
      this._registerAckCallback(a, l), r.id = a;
    }
    const o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!o || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let l = 0; l < this.sendBuffer.length; l++)
        this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
      n.call(this, new Error("operation has timed out"));
    }, o), a = (...l) => {
      this.io.clearTimeoutFn(s), n.apply(this, l);
    };
    a.withError = !0, this.acks[t] = a;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const s = (a, l) => a ? o(a) : r(l);
      s.withError = !0, n.push(s), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...s) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: ye.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ye.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ye.EVENT:
        case ye.BINARY_EVENT:
          this.onevent(t);
          break;
        case ye.ACK:
        case ye.BINARY_ACK:
          this.onack(t);
          break;
        case ye.DISCONNECT:
          this.ondisconnect();
          break;
        case ye.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, n.packet({
        type: ye.ACK,
        id: t,
        data: o
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: ye.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function $n(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
$n.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
$n.prototype.reset = function() {
  this.attempts = 0;
};
$n.prototype.setMin = function(e) {
  this.ms = e;
};
$n.prototype.setMax = function(e) {
  this.max = e;
};
$n.prototype.setJitter = function(e) {
  this.jitter = e;
};
class fs extends Je {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Zo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new $n({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || CE;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Td(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Ot(n, "open", function() {
      r.onopen(), t && t();
    }), s = (l) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", l), t ? t(l) : this.maybeReconnectOnOpen();
    }, a = Ot(n, "error", s);
    if (this._timeout !== !1) {
      const l = this._timeout, c = this.setTimeoutFn(() => {
        o(), s(new Error("timeout")), n.close();
      }, l);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(a), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(Ot(t, "ping", this.onping.bind(this)), Ot(t, "data", this.ondata.bind(this)), Ot(t, "error", this.onerror.bind(this)), Ot(t, "close", this.onclose.bind(this)), Ot(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    Zs(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Od(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(t, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Kn = {};
function to(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = pE(e, t.path || "/socket.io"), r = n.source, o = n.id, s = n.path, a = Kn[o] && s in Kn[o].nsps, l = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let c;
  return l ? c = new fs(r, t) : (Kn[o] || (Kn[o] = new fs(r, t)), c = Kn[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(to, {
  Manager: fs,
  Socket: Od,
  io: to,
  connect: to
});
function RE() {
  const [e, t] = qd(!1);
  function n(s) {
    if (s === 0)
      console.log("WL Ready"), t(!0);
    else
      throw t(!1), new Error(`wolframscript returned code: ${s}`);
  }
  la(() => {
    window.api && (window.api.env === "electron" ? window.api.ipcRenderer.on("wl-status", n) : window.api.env === "web" && to("localhost:3000").on("wl-status", n));
  });
  async function r(s, a = {}, l = 4848) {
    try {
      return (await Ze.post(s, null, {
        baseURL: `http://localhost:${l}`,
        params: a,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })).data;
    } catch (c) {
      return console.log(c), null;
    }
  }
  const o = Hd(async () => {
    const s = await r("aliveQ", {}, 8888);
    t(s === "True");
  }, [t]);
  return la(() => {
    o();
  }, [o, e]), {
    isActive: e,
    req: r
  };
}
const kd = Wd({
  isActive: !1,
  req: async () => {
  }
});
function OE({ children: e }) {
  const t = RE();
  return /* @__PURE__ */ P.jsx(kd.Provider, { value: t, children: e });
}
function Pd() {
  return ec(kd);
}
function kE() {
  const e = Pd(), [t, n] = it.useState("Python"), [r, o] = it.useState(""), [s, a] = it.useState(""), [l, c] = it.useState(null), u = (p) => {
    n(p.target.value);
  }, d = (p) => {
    o(p.target.value);
  }, f = async () => {
    await e.req(`/evaluate-${t}`, {
      in: r
    }).then((p) => c(p)).catch((p) => console.log(p));
  }, b = async () => {
    await e.req("/evaluate", {
      in: s
    }).then((p) => c(p)).catch((p) => console.log(p));
  }, S = (p) => {
    a(p.target.value);
  };
  return /* @__PURE__ */ P.jsxs(
    nr,
    {
      className: "Hello",
      direction: "column",
      spacing: 2,
      sx: { textAlign: "center", alignContent: "center" },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ P.jsx(bu, { variant: "h2", children: "Electron + ReactTS + WolframLanguage" }),
        /* @__PURE__ */ P.jsxs(nr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ P.jsx(
            Qi,
            {
              variant: "filled",
              label: "WL Input",
              color: "primary",
              sx: { width: 450 },
              onChange: S
            }
          ),
          /* @__PURE__ */ P.jsx(
            Hi,
            {
              variant: "contained",
              onClick: b,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        /* @__PURE__ */ P.jsxs(nr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ P.jsxs(Bs, { children: [
            /* @__PURE__ */ P.jsx(Fs, { id: "evaluator-label", children: "Evaluator" }),
            /* @__PURE__ */ P.jsxs(
              Ho,
              {
                labelId: "evaluator-label",
                label: "Evaluator",
                sx: { width: 130 },
                value: t,
                onChange: u,
                children: [
                  /* @__PURE__ */ P.jsx(Gr, { value: "Python", children: "Python" }),
                  /* @__PURE__ */ P.jsx(Gr, { value: "NodeJS", children: "NodeJS" }),
                  /* @__PURE__ */ P.jsx(Gr, { value: "Shell", children: "Shell" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ P.jsx(
            Qi,
            {
              variant: "filled",
              label: "External Input",
              color: "primary",
              sx: { width: 300 },
              onChange: d
            }
          ),
          /* @__PURE__ */ P.jsx(
            Hi,
            {
              variant: "contained",
              onClick: f,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        l && typeof l != "object" ? /* @__PURE__ */ P.jsx($s, { sx: { maxWidth: "50%", p: 2 }, variant: "outlined", children: l }) : null
      ]
    }
  );
}
const PE = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "1em", height: "1em", viewBox: "0 0 11 14", ...e }, /* @__PURE__ */ m.createElement("defs", null, /* @__PURE__ */ m.createElement("clipPath", { id: "clip1" }, /* @__PURE__ */ m.createElement("path", { d: "M 0.238281 2.398438 L 10.800781 2.398438 L 10.800781 13.679688 L 0.238281 13.679688 Z M 0.238281 2.398438 " })), /* @__PURE__ */ m.createElement("clipPath", { id: "clip2" }, /* @__PURE__ */ m.createElement("path", { d: "M 7 7 L 10.800781 7 L 10.800781 10 L 7 10 Z M 7 7 " })), /* @__PURE__ */ m.createElement("clipPath", { id: "clip3" }, /* @__PURE__ */ m.createElement("path", { d: "M 6 5 L 10.800781 5 L 10.800781 9 L 6 9 Z M 6 5 " })), /* @__PURE__ */ m.createElement("clipPath", { id: "clip4" }, /* @__PURE__ */ m.createElement("path", { d: "M 0.238281 5 L 4 5 L 4 9 L 0.238281 9 Z M 0.238281 5 " })), /* @__PURE__ */ m.createElement("clipPath", { id: "clip5" }, /* @__PURE__ */ m.createElement("path", { d: "M 0.238281 7 L 4 7 L 4 10 L 0.238281 10 Z M 0.238281 7 " })), /* @__PURE__ */ m.createElement("clipPath", { id: "clip6" }, /* @__PURE__ */ m.createElement("path", { d: "M 0.238281 8 L 5 8 L 5 11 L 0.238281 11 Z M 0.238281 8 " }))), /* @__PURE__ */ m.createElement("g", { id: "surface46" }, /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip1)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  stroke: "none",
  fillRule: "evenodd",
  fill: "rgb(100%,0%,0%)",
  fillOpacity: 1
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.066406 8.125 " })), /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip2)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 9.53125 9.226563 " })), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 6.292969 11.25 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 4.8125 5.828125 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 6.664063 5.09375 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 7.957031 6.105469 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 5.460938 10.789063 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 3.886719 7.390625 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 5.644531 6.382813 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 2.964844 6.105469 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 5.089844 8.21875 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 4.628906 10.238281 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 5.832031 8.21875 " }), /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip3)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 9.808594 6.75 " })), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 6.199219 4.910156 " }), /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip4)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 1.113281 6.75 " })), /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip5)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 2.222656 8.308594 " })), /* @__PURE__ */ m.createElement("g", { clipPath: "url(#clip6)", clipRule: "nonzero" }, /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 1.484375 9.59375 " })), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 2.964844 10.238281 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 6.753906 11.15625 " }), /* @__PURE__ */ m.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " })));
function NE() {
  return /* @__PURE__ */ P.jsxs(
    nr,
    {
      className: "main",
      direction: "column",
      spacing: 2,
      sx: {
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ P.jsx(PE, { style: { width: "220px", height: "auto" } }),
        /* @__PURE__ */ P.jsx(wu, { sx: { width: "150%", minWidth: "200px" }, children: /* @__PURE__ */ P.jsx(Au, {}) })
      ]
    }
  );
}
const _E = Bo({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee0915"
    }
  }
});
function AE() {
  return Pd().isActive ? /* @__PURE__ */ P.jsx(Mf, { children: /* @__PURE__ */ P.jsx(If, { children: /* @__PURE__ */ P.jsx(cc, { path: "/", element: /* @__PURE__ */ P.jsx(kE, {}) }) }) }) : /* @__PURE__ */ P.jsx(NE, {});
}
function ME() {
  return /* @__PURE__ */ P.jsxs(Ey, { theme: _E, children: [
    /* @__PURE__ */ P.jsx(ku, {}),
    /* @__PURE__ */ P.jsx(OE, { children: /* @__PURE__ */ P.jsx(AE, {}) })
  ] });
}
const LE = document.getElementById("root"), IE = Ri(LE);
IE.render(
  /* @__PURE__ */ P.jsx(it.StrictMode, { children: /* @__PURE__ */ P.jsx(ME, {}) })
);
export {
  ME as Frontend,
  OE as WLProvider,
  Pd as useWL
};
//# sourceMappingURL=index.es.js.map

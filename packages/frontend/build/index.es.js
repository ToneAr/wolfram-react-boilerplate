var dc = Object.defineProperty;
var fc = (e, t, n) => t in e ? dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var gn = (e, t, n) => fc(e, typeof t != "symbol" ? t + "" : t, n);
import * as p from "react";
import et, { forwardRef as pc, useContext as ca, Children as mc, isValidElement as ur, cloneElement as dr, createContext as hc, useState as gc, useEffect as Vi, useCallback as yc } from "react";
import * as bc from "react-dom";
import On from "react-dom";
function vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Po = { exports: {} }, yn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function Ec() {
  if (Wi) return yn;
  Wi = 1;
  var e = et, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, b = null, E = null;
    u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (d in c) o.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: b, ref: E, props: f, _owner: i.current };
  }
  return yn.Fragment = n, yn.jsx = a, yn.jsxs = a, yn;
}
var bn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function Sc() {
  return zi || (zi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = et, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y = Symbol.iterator, S = "@@iterator";
    function v(C) {
      if (C === null || typeof C != "object")
        return null;
      var A = y && C[y] || C[S];
      return typeof A == "function" ? A : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(C) {
      {
        for (var A = arguments.length, K = new Array(A > 1 ? A - 1 : 0), le = 1; le < A; le++)
          K[le - 1] = arguments[le];
        g("error", C, K);
      }
    }
    function g(C, A, K) {
      {
        var le = T.ReactDebugCurrentFrame, Se = le.getStackAddendum();
        Se !== "" && (A += "%s", K = K.concat([Se]));
        var $e = K.map(function(ge) {
          return String(ge);
        });
        $e.unshift("Warning: " + A), Function.prototype.apply.call(console[C], console, $e);
      }
    }
    var x = !1, h = !1, R = !1, P = !1, L = !1, m;
    m = Symbol.for("react.module.reference");
    function $(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === o || C === s || L || C === i || C === u || C === d || P || C === E || x || h || R || typeof C == "object" && C !== null && (C.$$typeof === b || C.$$typeof === f || C.$$typeof === a || C.$$typeof === l || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === m || C.getModuleId !== void 0));
    }
    function D(C, A, K) {
      var le = C.displayName;
      if (le)
        return le;
      var Se = A.displayName || A.name || "";
      return Se !== "" ? K + "(" + Se + ")" : K;
    }
    function F(C) {
      return C.displayName || "Context";
    }
    function W(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case l:
            var A = C;
            return F(A) + ".Consumer";
          case a:
            var K = C;
            return F(K._context) + ".Provider";
          case c:
            return D(C, C.render, "ForwardRef");
          case f:
            var le = C.displayName || null;
            return le !== null ? le : W(C.type) || "Memo";
          case b: {
            var Se = C, $e = Se._payload, ge = Se._init;
            try {
              return W(ge($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, V = 0, j, H, Y, ne, M, _, Z;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function z() {
      {
        if (V === 0) {
          j = console.log, H = console.info, Y = console.warn, ne = console.error, M = console.group, _ = console.groupCollapsed, Z = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        V++;
      }
    }
    function J() {
      {
        if (V--, V === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, C, {
              value: j
            }),
            info: B({}, C, {
              value: H
            }),
            warn: B({}, C, {
              value: Y
            }),
            error: B({}, C, {
              value: ne
            }),
            group: B({}, C, {
              value: M
            }),
            groupCollapsed: B({}, C, {
              value: _
            }),
            groupEnd: B({}, C, {
              value: Z
            })
          });
        }
        V < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = T.ReactCurrentDispatcher, X;
    function ee(C, A, K) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (Se) {
            var le = Se.stack.trim().match(/\n( *(at )?)/);
            X = le && le[1] || "";
          }
        return `
` + X + C;
      }
    }
    var Q = !1, U;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      U = new te();
    }
    function w(C, A) {
      if (!C || Q)
        return "";
      {
        var K = U.get(C);
        if (K !== void 0)
          return K;
      }
      var le;
      Q = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = G.current, G.current = null, z();
      try {
        if (A) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (ot) {
              le = ot;
            }
            Reflect.construct(C, [], ge);
          } else {
            try {
              ge.call();
            } catch (ot) {
              le = ot;
            }
            C.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            le = ot;
          }
          C();
        }
      } catch (ot) {
        if (ot && le && typeof ot.stack == "string") {
          for (var de = ot.stack.split(`
`), nt = le.stack.split(`
`), Ue = de.length - 1, He = nt.length - 1; Ue >= 1 && He >= 0 && de[Ue] !== nt[He]; )
            He--;
          for (; Ue >= 1 && He >= 0; Ue--, He--)
            if (de[Ue] !== nt[He]) {
              if (Ue !== 1 || He !== 1)
                do
                  if (Ue--, He--, He < 0 || de[Ue] !== nt[He]) {
                    var ft = `
` + de[Ue].replace(" at new ", " at ");
                    return C.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", C.displayName)), typeof C == "function" && U.set(C, ft), ft;
                  }
                while (Ue >= 1 && He >= 0);
              break;
            }
        }
      } finally {
        Q = !1, G.current = $e, J(), Error.prepareStackTrace = Se;
      }
      var Zt = C ? C.displayName || C.name : "", Ft = Zt ? ee(Zt) : "";
      return typeof C == "function" && U.set(C, Ft), Ft;
    }
    function oe(C, A, K) {
      return w(C, !1);
    }
    function I(C) {
      var A = C.prototype;
      return !!(A && A.isReactComponent);
    }
    function ae(C, A, K) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return w(C, I(C));
      if (typeof C == "string")
        return ee(C);
      switch (C) {
        case u:
          return ee("Suspense");
        case d:
          return ee("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case c:
            return oe(C.render);
          case f:
            return ae(C.type, A, K);
          case b: {
            var le = C, Se = le._payload, $e = le._init;
            try {
              return ae($e(Se), A, K);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, _e = {}, Be = T.ReactDebugCurrentFrame;
    function Pe(C) {
      if (C) {
        var A = C._owner, K = ae(C.type, C._source, A ? A.type : null);
        Be.setExtraStackFrame(K);
      } else
        Be.setExtraStackFrame(null);
    }
    function tt(C, A, K, le, Se) {
      {
        var $e = Function.call.bind(fe);
        for (var ge in C)
          if ($e(C, ge)) {
            var de = void 0;
            try {
              if (typeof C[ge] != "function") {
                var nt = Error((le || "React class") + ": " + K + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw nt.name = "Invariant Violation", nt;
              }
              de = C[ge](A, ge, le, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              de = Ue;
            }
            de && !(de instanceof Error) && (Pe(Se), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", K, ge, typeof de), Pe(null)), de instanceof Error && !(de.message in _e) && (_e[de.message] = !0, Pe(Se), O("Failed %s type: %s", K, de.message), Pe(null));
          }
      }
    }
    var Ee = Array.isArray;
    function Je(C) {
      return Ee(C);
    }
    function re(C) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, K = A && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return K;
      }
    }
    function Ve(C) {
      try {
        return st(C), !1;
      } catch {
        return !0;
      }
    }
    function st(C) {
      return "" + C;
    }
    function me(C) {
      if (Ve(C))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", re(C)), st(C);
    }
    var pe = T.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, rt, ye;
    ye = {};
    function Mt(C) {
      if (fe.call(C, "ref")) {
        var A = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Dt(C) {
      if (fe.call(C, "key")) {
        var A = Object.getOwnPropertyDescriptor(C, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function er(C, A) {
      if (typeof C.ref == "string" && pe.current && A && pe.current.stateNode !== A) {
        var K = W(pe.current.type);
        ye[K] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(pe.current.type), C.ref), ye[K] = !0);
      }
    }
    function ie(C, A) {
      {
        var K = function() {
          dt || (dt = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        K.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function he(C, A) {
      {
        var K = function() {
          rt || (rt = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        K.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var Ke = function(C, A, K, le, Se, $e, ge) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: C,
        key: A,
        ref: K,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function It(C, A, K, le, Se) {
      {
        var $e, ge = {}, de = null, nt = null;
        K !== void 0 && (me(K), de = "" + K), Dt(A) && (me(A.key), de = "" + A.key), Mt(A) && (nt = A.ref, er(A, Se));
        for ($e in A)
          fe.call(A, $e) && !at.hasOwnProperty($e) && (ge[$e] = A[$e]);
        if (C && C.defaultProps) {
          var Ue = C.defaultProps;
          for ($e in Ue)
            ge[$e] === void 0 && (ge[$e] = Ue[$e]);
        }
        if (de || nt) {
          var He = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          de && ie(ge, He), nt && he(ge, He);
        }
        return Ke(C, de, nt, Se, le, pe.current, ge);
      }
    }
    var Kt = T.ReactCurrentOwner, _i = T.ReactDebugCurrentFrame;
    function Gt(C) {
      if (C) {
        var A = C._owner, K = ae(C.type, C._source, A ? A.type : null);
        _i.setExtraStackFrame(K);
      } else
        _i.setExtraStackFrame(null);
    }
    var ao;
    ao = !1;
    function lo(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function Li() {
      {
        if (Kt.current) {
          var C = W(Kt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function tc(C) {
      return "";
    }
    var ji = {};
    function nc(C) {
      {
        var A = Li();
        if (!A) {
          var K = typeof C == "string" ? C : C.displayName || C.name;
          K && (A = `

Check the top-level render call using <` + K + ">.");
        }
        return A;
      }
    }
    function Ai(C, A) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var K = nc(A);
        if (ji[K])
          return;
        ji[K] = !0;
        var le = "";
        C && C._owner && C._owner !== Kt.current && (le = " It was passed a child from " + W(C._owner.type) + "."), Gt(C), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, le), Gt(null);
      }
    }
    function Di(C, A) {
      {
        if (typeof C != "object")
          return;
        if (Je(C))
          for (var K = 0; K < C.length; K++) {
            var le = C[K];
            lo(le) && Ai(le, A);
          }
        else if (lo(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Se = v(C);
          if (typeof Se == "function" && Se !== C.entries)
            for (var $e = Se.call(C), ge; !(ge = $e.next()).done; )
              lo(ge.value) && Ai(ge.value, A);
        }
      }
    }
    function rc(C) {
      {
        var A = C.type;
        if (A == null || typeof A == "string")
          return;
        var K;
        if (typeof A == "function")
          K = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === f))
          K = A.propTypes;
        else
          return;
        if (K) {
          var le = W(A);
          tt(K, C.props, "prop", le, C);
        } else if (A.PropTypes !== void 0 && !ao) {
          ao = !0;
          var Se = W(A);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oc(C) {
      {
        for (var A = Object.keys(C.props), K = 0; K < A.length; K++) {
          var le = A[K];
          if (le !== "children" && le !== "key") {
            Gt(C), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Gt(null);
            break;
          }
        }
        C.ref !== null && (Gt(C), O("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
      }
    }
    var Fi = {};
    function Bi(C, A, K, le, Se, $e) {
      {
        var ge = $(C);
        if (!ge) {
          var de = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = tc();
          nt ? de += nt : de += Li();
          var Ue;
          C === null ? Ue = "null" : Je(C) ? Ue = "array" : C !== void 0 && C.$$typeof === t ? (Ue = "<" + (W(C.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof C, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, de);
        }
        var He = It(C, A, K, Se, $e);
        if (He == null)
          return He;
        if (ge) {
          var ft = A.children;
          if (ft !== void 0)
            if (le)
              if (Je(ft)) {
                for (var Zt = 0; Zt < ft.length; Zt++)
                  Di(ft[Zt], C);
                Object.freeze && Object.freeze(ft);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Di(ft, C);
        }
        if (fe.call(A, "key")) {
          var Ft = W(C), ot = Object.keys(A).filter(function(uc) {
            return uc !== "key";
          }), co = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fi[Ft + co]) {
            var cc = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, co, Ft, cc, Ft), Fi[Ft + co] = !0;
          }
        }
        return C === o ? oc(He) : rc(He), He;
      }
    }
    function ic(C, A, K) {
      return Bi(C, A, K, !0);
    }
    function sc(C, A, K) {
      return Bi(C, A, K, !1);
    }
    var ac = sc, lc = ic;
    bn.Fragment = o, bn.jsx = ac, bn.jsxs = lc;
  }()), bn;
}
process.env.NODE_ENV === "production" ? Po.exports = Ec() : Po.exports = Sc();
var k = Po.exports, ko, tr = On;
if (process.env.NODE_ENV === "production")
  ko = tr.createRoot, tr.hydrateRoot;
else {
  var Ui = tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ko = function(e, t) {
    Ui.usingClientEntryPoint = !0;
    try {
      return tr.createRoot(e, t);
    } finally {
      Ui.usingClientEntryPoint = !1;
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
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, $o.apply(this, arguments);
}
var _t;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(_t || (_t = {}));
function xc(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: n,
    v5Compat: o = !1
  } = e, i;
  i = t.map((E, y) => d(E, typeof E == "string" ? null : E.state, y === 0 ? "default" : void 0));
  let s = c(n ?? i.length - 1), a = _t.Pop, l = null;
  function c(E) {
    return Math.min(Math.max(E, 0), i.length - 1);
  }
  function u() {
    return i[s];
  }
  function d(E, y, S) {
    y === void 0 && (y = null);
    let v = Tc(i ? u().pathname : "/", E, y, S);
    return Ut(v.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(E)), v;
  }
  function f(E) {
    return typeof E == "string" ? E : Oc(E);
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
    createURL(E) {
      return new URL(f(E), "http://localhost");
    },
    encodeLocation(E) {
      let y = typeof E == "string" ? qn(E) : E;
      return {
        pathname: y.pathname || "",
        search: y.search || "",
        hash: y.hash || ""
      };
    },
    push(E, y) {
      a = _t.Push;
      let S = d(E, y);
      s += 1, i.splice(s, i.length, S), o && l && l({
        action: a,
        location: S,
        delta: 1
      });
    },
    replace(E, y) {
      a = _t.Replace;
      let S = d(E, y);
      i[s] = S, o && l && l({
        action: a,
        location: S,
        delta: 0
      });
    },
    go(E) {
      a = _t.Pop;
      let y = c(s + E), S = i[y];
      s = y, l && l({
        action: a,
        location: S,
        delta: E
      });
    },
    listen(E) {
      return l = E, () => {
        l = null;
      };
    }
  };
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ut(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Cc() {
  return Math.random().toString(36).substr(2, 8);
}
function Tc(e, t, n, o) {
  return n === void 0 && (n = null), $o({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? qn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || o || Cc()
  });
}
function Oc(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: o = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var qi;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(qi || (qi = {}));
function wc(e, t, n) {
  return n === void 0 && (n = "/"), Rc(e, t, n, !1);
}
function Rc(e, t, n, o) {
  let i = typeof t == "string" ? qn(t) : t, s = fa(i.pathname || "/", n);
  if (s == null)
    return null;
  let a = ua(e);
  Pc(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = Fc(s);
    l = Ac(a[c], u, o);
  }
  return l;
}
function ua(e, t, n, o) {
  t === void 0 && (t = []), n === void 0 && (n = []), o === void 0 && (o = "");
  let i = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (je(c.relativePath.startsWith(o), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(o.length));
    let u = an([o, c.relativePath]), d = n.concat(c);
    s.children && s.children.length > 0 && (je(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), ua(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: Lc(u, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, a);
    else
      for (let c of da(s.path))
        i(s, a, c);
  }), t;
}
function da(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...o] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (o.length === 0)
    return i ? [s, ""] : [s];
  let a = da(o.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), i && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function Pc(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : jc(t.routesMeta.map((o) => o.childrenIndex), n.routesMeta.map((o) => o.childrenIndex)));
}
const kc = /^:[\w-]+$/, $c = 3, Nc = 2, Mc = 1, Ic = 10, _c = -2, Hi = (e) => e === "*";
function Lc(e, t) {
  let n = e.split("/"), o = n.length;
  return n.some(Hi) && (o += _c), t && (o += Nc), n.filter((i) => !Hi(i)).reduce((i, s) => i + (kc.test(s) ? $c : s === "" ? Mc : Ic), o);
}
function jc(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, i) => o === t[i]) ? (
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
function Ac(e, t, n) {
  let {
    routesMeta: o
  } = e, i = {}, s = "/", a = [];
  for (let l = 0; l < o.length; ++l) {
    let c = o[l], u = l === o.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", f = Yi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, d), b = c.route;
    if (!f && u && n && !o[o.length - 1].route.index && (f = Yi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, d)), !f)
      return null;
    Object.assign(i, f.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: an([s, f.pathname]),
      pathnameBase: Bc(an([s, f.pathnameBase])),
      route: b
    }), f.pathnameBase !== "/" && (s = an([s, f.pathnameBase]));
  }
  return a;
}
function Yi(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, o] = Dc(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: o.reduce((u, d, f) => {
      let {
        paramName: b,
        isOptional: E
      } = d;
      if (b === "*") {
        let S = l[f] || "";
        a = s.slice(0, s.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[f];
      return E && !y ? u[b] = void 0 : u[b] = (y || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function Dc(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Ut(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (o.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), o];
}
function Fc(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ut(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function fa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, o = e.charAt(n);
  return o && o !== "/" ? null : e.slice(n) || "/";
}
const an = (e) => e.join("/").replace(/\/\/+/g, "/"), Bc = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Vc(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const pa = ["post", "put", "patch", "delete"];
new Set(pa);
const Wc = ["get", ...pa];
new Set(Wc);
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
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, vr.apply(this, arguments);
}
const ma = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ma.displayName = "DataRouter");
const ha = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ha.displayName = "DataRouterState");
const zc = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (zc.displayName = "Await");
const ri = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ri.displayName = "Navigation");
const Hn = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Hn.displayName = "Location");
const Yn = /* @__PURE__ */ p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Yn.displayName = "Route");
const oi = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (oi.displayName = "RouteError");
function ii() {
  return p.useContext(Hn) != null;
}
function Uc() {
  return ii() || (process.env.NODE_ENV !== "production" ? je(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : je(!1)), p.useContext(Hn).location;
}
function qc(e, t) {
  return Hc(e, t);
}
function Hc(e, t, n, o) {
  ii() || (process.env.NODE_ENV !== "production" ? je(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : je(!1));
  let {
    navigator: i
  } = p.useContext(ri), {
    matches: s
  } = p.useContext(Yn), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", u = a ? a.pathnameBase : "/", d = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let O = d && d.path || "";
    ya(c, !d || O.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + O + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + O + '"> to <Route ') + ('path="' + (O === "/" ? "*" : O + "/*") + '">.'));
  }
  let f = Uc(), b;
  if (t) {
    var E;
    let O = typeof t == "string" ? qn(t) : t;
    u === "/" || (E = O.pathname) != null && E.startsWith(u) || (process.env.NODE_ENV !== "production" ? je(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + u + '" ') + ('but pathname "' + O.pathname + '" was given in the `location` prop.')) : je(!1)), b = O;
  } else
    b = f;
  let y = b.pathname || "/", S = y;
  if (u !== "/") {
    let O = u.replace(/^\//, "").split("/");
    S = "/" + y.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let v = wc(e, {
    pathname: S
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Ut(d || v != null, 'No routes matched location "' + b.pathname + b.search + b.hash + '" '), process.env.NODE_ENV !== "production" && Ut(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + b.pathname + b.search + b.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let T = Xc(v && v.map((O) => Object.assign({}, O, {
    params: Object.assign({}, l, O.params),
    pathname: an([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(O.pathname).pathname : O.pathname
    ]),
    pathnameBase: O.pathnameBase === "/" ? u : an([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(O.pathnameBase).pathname : O.pathnameBase
    ])
  })), s, n, o);
  return t && T ? /* @__PURE__ */ p.createElement(Hn.Provider, {
    value: {
      location: vr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, b),
      navigationType: _t.Pop
    }
  }, T) : T;
}
function Yc() {
  let e = tu(), t = Vc(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: o
  }, s = {
    padding: "2px 4px",
    backgroundColor: o
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), a = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ p.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ p.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ p.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ p.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ p.createElement("pre", {
    style: i
  }, n) : null, a);
}
const Kc = /* @__PURE__ */ p.createElement(Yc, null);
class Gc extends p.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ p.createElement(Yn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ p.createElement(oi.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Zc(e) {
  let {
    routeContext: t,
    match: n,
    children: o
  } = e, i = p.useContext(ma);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ p.createElement(Yn.Provider, {
    value: t
  }, o);
}
function Xc(e, t, n, o) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), o === void 0 && (o = null), e == null) {
    var s;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((s = o) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let a = e, l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let d = a.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? je(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : je(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, u = -1;
  if (n && o && o.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
        let {
          loaderData: b,
          errors: E
        } = n, y = f.route.loader && b[f.route.id] === void 0 && (!E || E[f.route.id] === void 0);
        if (f.route.lazy || y) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, f, b) => {
    let E, y = !1, S = null, v = null;
    n && (E = l && f.route.id ? l[f.route.id] : void 0, S = f.route.errorElement || Kc, c && (u < 0 && b === 0 ? (ya("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), y = !0, v = null) : u === b && (y = !0, v = f.route.hydrateFallbackElement || null)));
    let T = t.concat(a.slice(0, b + 1)), O = () => {
      let g;
      return E ? g = S : y ? g = v : f.route.Component ? g = /* @__PURE__ */ p.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d, /* @__PURE__ */ p.createElement(Zc, {
        match: f,
        routeContext: {
          outlet: d,
          matches: T,
          isDataRoute: n != null
        },
        children: g
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || b === 0) ? /* @__PURE__ */ p.createElement(Gc, {
      location: n.location,
      revalidation: n.revalidation,
      component: S,
      error: E,
      children: O(),
      routeContext: {
        outlet: null,
        matches: T,
        isDataRoute: !0
      }
    }) : O();
  }, null);
}
var No = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(No || {});
function ga(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Jc(e) {
  let t = p.useContext(ha);
  return t || (process.env.NODE_ENV !== "production" ? je(!1, ga(e)) : je(!1)), t;
}
function Qc(e) {
  let t = p.useContext(Yn);
  return t || (process.env.NODE_ENV !== "production" ? je(!1, ga(e)) : je(!1)), t;
}
function eu(e) {
  let t = Qc(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? je(!1, e + ' can only be used on routes that contain a unique "id"') : je(!1)), n.route.id;
}
function tu() {
  var e;
  let t = p.useContext(oi), n = Jc(No.UseRouteError), o = eu(No.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[o];
}
const Ki = {};
function ya(e, t, n) {
  !t && !Ki[e] && (Ki[e] = !0, process.env.NODE_ENV !== "production" && Ut(!1, n));
}
const nu = "startTransition", Gi = p[nu];
function ru(e) {
  let {
    basename: t,
    children: n,
    initialEntries: o,
    initialIndex: i,
    future: s
  } = e, a = p.useRef();
  a.current == null && (a.current = xc({
    initialEntries: o,
    initialIndex: i,
    v5Compat: !0
  }));
  let l = a.current, [c, u] = p.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = s || {}, f = p.useCallback((b) => {
    d && Gi ? Gi(() => u(b)) : u(b);
  }, [u, d]);
  return p.useLayoutEffect(() => l.listen(f), [l, f]), /* @__PURE__ */ p.createElement(ou, {
    basename: t,
    children: n,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: s
  });
}
function ba(e) {
  process.env.NODE_ENV !== "production" ? je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : je(!1);
}
function ou(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: o,
    navigationType: i = _t.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  ii() && (process.env.NODE_ENV !== "production" ? je(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : je(!1));
  let c = t.replace(/^\/*/, "/"), u = p.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: vr({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof o == "string" && (o = qn(o));
  let {
    pathname: d = "/",
    search: f = "",
    hash: b = "",
    state: E = null,
    key: y = "default"
  } = o, S = p.useMemo(() => {
    let v = fa(d, c);
    return v == null ? null : {
      location: {
        pathname: v,
        search: f,
        hash: b,
        state: E,
        key: y
      },
      navigationType: i
    };
  }, [c, d, f, b, E, y, i]);
  return process.env.NODE_ENV !== "production" && Ut(S != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + f + b + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), S == null ? null : /* @__PURE__ */ p.createElement(ri.Provider, {
    value: u
  }, /* @__PURE__ */ p.createElement(Hn.Provider, {
    children: n,
    value: S
  }));
}
function iu(e) {
  let {
    children: t,
    location: n
  } = e;
  return qc(Mo(t), n);
}
new Promise(() => {
});
function Mo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return p.Children.forEach(e, (o, i) => {
    if (!/* @__PURE__ */ p.isValidElement(o))
      return;
    let s = [...t, i];
    if (o.type === p.Fragment) {
      n.push.apply(n, Mo(o.props.children, s));
      return;
    }
    o.type !== ba && (process.env.NODE_ENV !== "production" ? je(!1, "[" + (typeof o.type == "string" ? o.type : o.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : je(!1)), !o.props.index || !o.props.children || (process.env.NODE_ENV !== "production" ? je(!1, "An index route cannot have child routes.") : je(!1));
    let a = {
      id: o.props.id || s.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      loader: o.props.loader,
      action: o.props.action,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (a.children = Mo(o.props.children, s)), n.push(a);
  }), n;
}
const In = {
  black: "#000",
  white: "#fff"
}, Xt = {
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
}, Jt = {
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
}, Qt = {
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
}, en = {
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
}, tn = {
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
}, vn = {
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
}, su = {
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
function Pt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const vt = "$$material";
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Er.apply(null, arguments);
}
function va(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var au = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lu = /* @__PURE__ */ va(
  function(e) {
    return au.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cu = !1;
function uu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function du(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var fu = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(i) {
      var s;
      o.tags.length === 0 ? o.insertionPoint ? s = o.insertionPoint.nextSibling : o.prepend ? s = o.container.firstChild : s = o.before : s = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, s), o.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !cu : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(du(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = uu(i);
      try {
        s.insertRule(o, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      var i;
      return (i = o.parentNode) == null ? void 0 : i.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Qe = "-ms-", Sr = "-moz-", be = "-webkit-", Ea = "comm", si = "rule", ai = "decl", pu = "@import", Sa = "@keyframes", mu = "@layer", hu = Math.abs, Mr = String.fromCharCode, gu = Object.assign;
function yu(e, t) {
  return Ze(e, 0) ^ 45 ? (((t << 2 ^ Ze(e, 0)) << 2 ^ Ze(e, 1)) << 2 ^ Ze(e, 2)) << 2 ^ Ze(e, 3) : 0;
}
function xa(e) {
  return e.trim();
}
function bu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function Io(e, t) {
  return e.indexOf(t);
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function _n(e, t, n) {
  return e.slice(t, n);
}
function Tt(e) {
  return e.length;
}
function li(e) {
  return e.length;
}
function nr(e, t) {
  return t.push(e), e;
}
function vu(e, t) {
  return e.map(t).join("");
}
var Ir = 1, un = 1, Ca = 0, it = 0, Ye = 0, fn = "";
function _r(e, t, n, o, i, s, a) {
  return { value: e, root: t, parent: n, type: o, props: i, children: s, line: Ir, column: un, length: a, return: "" };
}
function En(e, t) {
  return gu(_r("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Eu() {
  return Ye;
}
function Su() {
  return Ye = it > 0 ? Ze(fn, --it) : 0, un--, Ye === 10 && (un = 1, Ir--), Ye;
}
function ct() {
  return Ye = it < Ca ? Ze(fn, it++) : 0, un++, Ye === 10 && (un = 1, Ir++), Ye;
}
function Rt() {
  return Ze(fn, it);
}
function fr() {
  return it;
}
function Kn(e, t) {
  return _n(fn, e, t);
}
function Ln(e) {
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
function Ta(e) {
  return Ir = un = 1, Ca = Tt(fn = e), it = 0, [];
}
function Oa(e) {
  return fn = "", e;
}
function pr(e) {
  return xa(Kn(it - 1, _o(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xu(e) {
  for (; (Ye = Rt()) && Ye < 33; )
    ct();
  return Ln(e) > 2 || Ln(Ye) > 3 ? "" : " ";
}
function Cu(e, t) {
  for (; --t && ct() && !(Ye < 48 || Ye > 102 || Ye > 57 && Ye < 65 || Ye > 70 && Ye < 97); )
    ;
  return Kn(e, fr() + (t < 6 && Rt() == 32 && ct() == 32));
}
function _o(e) {
  for (; ct(); )
    switch (Ye) {
      case e:
        return it;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _o(Ye);
        break;
      case 40:
        e === 41 && _o(e);
        break;
      case 92:
        ct();
        break;
    }
  return it;
}
function Tu(e, t) {
  for (; ct() && e + Ye !== 57; )
    if (e + Ye === 84 && Rt() === 47)
      break;
  return "/*" + Kn(t, it - 1) + "*" + Mr(e === 47 ? e : ct());
}
function Ou(e) {
  for (; !Ln(Rt()); )
    ct();
  return Kn(e, it);
}
function wu(e) {
  return Oa(mr("", null, null, null, [""], e = Ta(e), 0, [0], e));
}
function mr(e, t, n, o, i, s, a, l, c) {
  for (var u = 0, d = 0, f = a, b = 0, E = 0, y = 0, S = 1, v = 1, T = 1, O = 0, g = "", x = i, h = s, R = o, P = g; v; )
    switch (y = O, O = ct()) {
      case 40:
        if (y != 108 && Ze(P, f - 1) == 58) {
          Io(P += ve(pr(O), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += pr(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += xu(y);
        break;
      case 92:
        P += Cu(fr() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            nr(Ru(Tu(ct(), fr()), t, n), c);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * S:
        l[u++] = Tt(P) * T;
      case 125 * S:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            T == -1 && (P = ve(P, /\f/g, "")), E > 0 && Tt(P) - f && nr(E > 32 ? Xi(P + ";", o, n, f - 1) : Xi(ve(P, " ", "") + ";", o, n, f - 2), c);
            break;
          case 59:
            P += ";";
          default:
            if (nr(R = Zi(P, t, n, u, d, i, l, g, x = [], h = [], f), s), O === 123)
              if (d === 0)
                mr(P, t, R, R, x, s, f, l, h);
              else
                switch (b === 99 && Ze(P, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mr(e, R, R, o && nr(Zi(e, R, R, 0, 0, i, l, g, i, x = [], f), h), i, h, f, l, o ? x : h);
                    break;
                  default:
                    mr(P, R, R, R, [""], h, 0, l, h);
                }
        }
        u = d = E = 0, S = T = 1, g = P = "", f = a;
        break;
      case 58:
        f = 1 + Tt(P), E = y;
      default:
        if (S < 1) {
          if (O == 123)
            --S;
          else if (O == 125 && S++ == 0 && Su() == 125)
            continue;
        }
        switch (P += Mr(O), O * S) {
          case 38:
            T = d > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            l[u++] = (Tt(P) - 1) * T, T = 1;
            break;
          case 64:
            Rt() === 45 && (P += pr(ct())), b = Rt(), d = f = Tt(g = P += Ou(fr())), O++;
            break;
          case 45:
            y === 45 && Tt(P) == 2 && (S = 0);
        }
    }
  return s;
}
function Zi(e, t, n, o, i, s, a, l, c, u, d) {
  for (var f = i - 1, b = i === 0 ? s : [""], E = li(b), y = 0, S = 0, v = 0; y < o; ++y)
    for (var T = 0, O = _n(e, f + 1, f = hu(S = a[y])), g = e; T < E; ++T)
      (g = xa(S > 0 ? b[T] + " " + O : ve(O, /&\f/g, b[T]))) && (c[v++] = g);
  return _r(e, t, n, i === 0 ? si : l, c, u, d);
}
function Ru(e, t, n) {
  return _r(e, t, n, Ea, Mr(Eu()), _n(e, 2, -2), 0);
}
function Xi(e, t, n, o) {
  return _r(e, t, n, ai, _n(e, 0, o), _n(e, o + 1, -1), o);
}
function ln(e, t) {
  for (var n = "", o = li(e), i = 0; i < o; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Pu(e, t, n, o) {
  switch (e.type) {
    case mu:
      if (e.children.length) break;
    case pu:
    case ai:
      return e.return = e.return || e.value;
    case Ea:
      return "";
    case Sa:
      return e.return = e.value + "{" + ln(e.children, o) + "}";
    case si:
      e.value = e.props.join(",");
  }
  return Tt(n = ln(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function ku(e) {
  var t = li(e);
  return function(n, o, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, o, i, s) || "";
    return a;
  };
}
function $u(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Nu = function(t, n, o) {
  for (var i = 0, s = 0; i = s, s = Rt(), i === 38 && s === 12 && (n[o] = 1), !Ln(s); )
    ct();
  return Kn(t, it);
}, Mu = function(t, n) {
  var o = -1, i = 44;
  do
    switch (Ln(i)) {
      case 0:
        i === 38 && Rt() === 12 && (n[o] = 1), t[o] += Nu(it - 1, n, o);
        break;
      case 2:
        t[o] += pr(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = Rt() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += Mr(i);
    }
  while (i = ct());
  return t;
}, Iu = function(t, n) {
  return Oa(Mu(Ta(t), n));
}, Ji = /* @__PURE__ */ new WeakMap(), _u = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ji.get(o)) && !i) {
      Ji.set(t, !0);
      for (var s = [], a = Iu(n, s), l = o.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Lu = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wa(e, t) {
  switch (yu(e, t)) {
    case 5103:
      return be + "print-" + e + e;
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
      return be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + e + Sr + e + Qe + e + e;
    case 6828:
    case 4268:
      return be + e + Qe + e + e;
    case 6165:
      return be + e + Qe + "flex-" + e + e;
    case 5187:
      return be + e + ve(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Qe + "flex-$1$2") + e;
    case 5443:
      return be + e + Qe + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return be + e + Qe + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return be + e + Qe + ve(e, "shrink", "negative") + e;
    case 5292:
      return be + e + Qe + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return be + "box-" + ve(e, "-grow", "") + be + e + Qe + ve(e, "grow", "positive") + e;
    case 4554:
      return be + ve(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, be + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Qe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, be + "$1$2") + e;
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
      if (Tt(e) - 1 - t > 6) switch (Ze(e, t + 1)) {
        case 109:
          if (Ze(e, t + 4) !== 45) break;
        case 102:
          return ve(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + Sr + (Ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Io(e, "stretch") ? wa(ve(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ze(e, t + 1) !== 115) break;
    case 6444:
      switch (Ze(e, Tt(e) - 3 - (~Io(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + be) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (Ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Qe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ze(e, t + 11)) {
        case 114:
          return be + e + Qe + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return be + e + Qe + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return be + e + Qe + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return be + e + Qe + e + e;
  }
  return e;
}
var ju = function(t, n, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ai:
      t.return = wa(t.value, t.length);
      break;
    case Sa:
      return ln([En(t, {
        value: ve(t.value, "@", "@" + be)
      })], i);
    case si:
      if (t.length) return vu(t.props, function(s) {
        switch (bu(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ln([En(t, {
              props: [ve(s, /:(read-\w+)/, ":" + Sr + "$1")]
            })], i);
          case "::placeholder":
            return ln([En(t, {
              props: [ve(s, /:(plac\w+)/, ":" + be + "input-$1")]
            }), En(t, {
              props: [ve(s, /:(plac\w+)/, ":" + Sr + "$1")]
            }), En(t, {
              props: [ve(s, /:(plac\w+)/, Qe + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Au = [ju], Du = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(S) {
      var v = S.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Au, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(S) {
      for (var v = S.getAttribute("data-emotion").split(" "), T = 1; T < v.length; T++)
        s[v[T]] = !0;
      l.push(S);
    }
  );
  var c, u = [_u, Lu];
  {
    var d, f = [Pu, $u(function(S) {
      d.insert(S);
    })], b = ku(u.concat(i, f)), E = function(v) {
      return ln(wu(v), b);
    };
    c = function(v, T, O, g) {
      d = O, E(v ? v + "{" + T.styles + "}" : T.styles), g && (y.inserted[T.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new fu({
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
  return y.sheet.hydrate(l), y;
}, Lo = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Fu() {
  if (Qi) return xe;
  Qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var R = h.$$typeof;
      switch (R) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case y:
                case E:
                case a:
                  return h;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function x(h) {
    return g(h) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = l, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = o, xe.Lazy = y, xe.Memo = E, xe.Portal = n, xe.Profiler = s, xe.StrictMode = i, xe.Suspense = f, xe.isAsyncMode = function(h) {
    return x(h) || g(h) === c;
  }, xe.isConcurrentMode = x, xe.isContextConsumer = function(h) {
    return g(h) === l;
  }, xe.isContextProvider = function(h) {
    return g(h) === a;
  }, xe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, xe.isForwardRef = function(h) {
    return g(h) === d;
  }, xe.isFragment = function(h) {
    return g(h) === o;
  }, xe.isLazy = function(h) {
    return g(h) === y;
  }, xe.isMemo = function(h) {
    return g(h) === E;
  }, xe.isPortal = function(h) {
    return g(h) === n;
  }, xe.isProfiler = function(h) {
    return g(h) === s;
  }, xe.isStrictMode = function(h) {
    return g(h) === i;
  }, xe.isSuspense = function(h) {
    return g(h) === f;
  }, xe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === f || h === b || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === O || h.$$typeof === S);
  }, xe.typeOf = g, xe;
}
var Ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function Bu() {
  return es || (es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function g(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === s || w === i || w === f || w === b || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === E || w.$$typeof === a || w.$$typeof === l || w.$$typeof === d || w.$$typeof === v || w.$$typeof === T || w.$$typeof === O || w.$$typeof === S);
    }
    function x(w) {
      if (typeof w == "object" && w !== null) {
        var oe = w.$$typeof;
        switch (oe) {
          case t:
            var I = w.type;
            switch (I) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case f:
                return I;
              default:
                var ae = I && I.$$typeof;
                switch (ae) {
                  case l:
                  case d:
                  case y:
                  case E:
                  case a:
                    return ae;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var h = c, R = u, P = l, L = a, m = t, $ = d, D = o, F = y, W = E, B = n, V = s, j = i, H = f, Y = !1;
    function ne(w) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(w) || x(w) === c;
    }
    function M(w) {
      return x(w) === u;
    }
    function _(w) {
      return x(w) === l;
    }
    function Z(w) {
      return x(w) === a;
    }
    function q(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function z(w) {
      return x(w) === d;
    }
    function J(w) {
      return x(w) === o;
    }
    function G(w) {
      return x(w) === y;
    }
    function X(w) {
      return x(w) === E;
    }
    function ee(w) {
      return x(w) === n;
    }
    function Q(w) {
      return x(w) === s;
    }
    function U(w) {
      return x(w) === i;
    }
    function te(w) {
      return x(w) === f;
    }
    Ce.AsyncMode = h, Ce.ConcurrentMode = R, Ce.ContextConsumer = P, Ce.ContextProvider = L, Ce.Element = m, Ce.ForwardRef = $, Ce.Fragment = D, Ce.Lazy = F, Ce.Memo = W, Ce.Portal = B, Ce.Profiler = V, Ce.StrictMode = j, Ce.Suspense = H, Ce.isAsyncMode = ne, Ce.isConcurrentMode = M, Ce.isContextConsumer = _, Ce.isContextProvider = Z, Ce.isElement = q, Ce.isForwardRef = z, Ce.isFragment = J, Ce.isLazy = G, Ce.isMemo = X, Ce.isPortal = ee, Ce.isProfiler = Q, Ce.isStrictMode = U, Ce.isSuspense = te, Ce.isValidElementType = g, Ce.typeOf = x;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? Lo.exports = Fu() : Lo.exports = Bu();
var Vu = Lo.exports, Ra = Vu, Wu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Pa = {};
Pa[Ra.ForwardRef] = Wu;
Pa[Ra.Memo] = zu;
var Uu = !0;
function qu(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : o += i + " ";
  }), o;
}
var ka = function(t, n, o) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Uu === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, $a = function(t, n, o) {
  ka(t, n, o);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Hu(e) {
  for (var t = 0, n, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Yu = {
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
}, Ku = !1, Gu = /[A-Z]|^ms/g, Zu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Na = function(t) {
  return t.charCodeAt(1) === 45;
}, ts = function(t) {
  return t != null && typeof t != "boolean";
}, uo = /* @__PURE__ */ va(function(e) {
  return Na(e) ? e : e.replace(Gu, "-$&").toLowerCase();
}), ns = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Zu, function(o, i, s) {
          return Ot = {
            name: i,
            styles: s,
            next: Ot
          }, i;
        });
  }
  return Yu[t] !== 1 && !Na(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Xu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function jn(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Ot = {
          name: i.name,
          styles: i.styles,
          next: Ot
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ot = {
              name: a.name,
              styles: a.styles,
              next: Ot
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Ju(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ot, u = n(e);
        return Ot = c, jn(e, t, u);
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
function Ju(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += jn(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? o += s + "{" + t[l] + "}" : ts(l) && (o += uo(s) + ":" + ns(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Ku)
          throw new Error(Xu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            ts(a[c]) && (o += uo(s) + ":" + ns(s, a[c]) + ";");
        else {
          var u = jn(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              o += uo(s) + ":" + u + ";";
              break;
            }
            default:
              o += s + "{" + u + "}";
          }
        }
      }
    }
  return o;
}
var rs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ot;
function ci(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Ot = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += jn(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += jn(n, t, e[l]), o) {
      var c = s;
      i += c[l];
    }
  rs.lastIndex = 0;
  for (var u = "", d; (d = rs.exec(i)) !== null; )
    u += "-" + d[1];
  var f = Hu(i) + u;
  return {
    name: f,
    styles: i,
    next: Ot
  };
}
var Qu = function(t) {
  return t();
}, Ma = p.useInsertionEffect ? p.useInsertionEffect : !1, ed = Ma || Qu, os = Ma || p.useLayoutEffect, Ia = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Du({
    key: "css"
  }) : null
);
Ia.Provider;
var _a = function(t) {
  return /* @__PURE__ */ pc(function(n, o) {
    var i = ca(Ia);
    return t(n, i, o);
  });
}, Lr = /* @__PURE__ */ p.createContext({}), td = /* @__PURE__ */ _a(function(e, t) {
  var n = e.styles, o = ci([n], void 0, p.useContext(Lr)), i = p.useRef();
  return os(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + o.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), os(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (o.next !== void 0 && $a(t, o.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", o, a, !1);
  }, [t, o.name]), null;
});
function jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ci(t);
}
var pn = function() {
  var t = jr.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, nd = lu, rd = function(t) {
  return t !== "theme";
}, is = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? nd : rd;
}, ss = function(t, n, o) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && o && (i = t.__emotion_forwardProp), i;
}, od = !1, id = function(t) {
  var n = t.cache, o = t.serialized, i = t.isStringTag;
  return ka(n, o, i), ed(function() {
    return $a(n, o, i);
  }), null;
}, sd = function e(t, n) {
  var o = t.__emotion_real === t, i = o && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = ss(t, n, o), c = l || is(i), u = !c("as");
  return function() {
    var d = arguments, f = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var b = d.length, E = 1; E < b; E++)
        f.push(d[E], d[0][E]);
    }
    var y = _a(function(S, v, T) {
      var O = u && S.as || i, g = "", x = [], h = S;
      if (S.theme == null) {
        h = {};
        for (var R in S)
          h[R] = S[R];
        h.theme = p.useContext(Lr);
      }
      typeof S.className == "string" ? g = qu(v.registered, x, S.className) : S.className != null && (g = S.className + " ");
      var P = ci(f.concat(x), v.registered, h);
      g += v.key + "-" + P.name, a !== void 0 && (g += " " + a);
      var L = u && l === void 0 ? is(O) : c, m = {};
      for (var $ in S)
        u && $ === "as" || L($) && (m[$] = S[$]);
      return m.className = g, T && (m.ref = T), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(id, {
        cache: v,
        serialized: P,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ p.createElement(O, m));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = f, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && od ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(S, v) {
      return e(S, Er({}, n, v, {
        shouldForwardProp: ss(y, v, !0)
      })).apply(void 0, f);
    }, y;
  };
}, ad = [
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
], jo = sd.bind();
ad.forEach(function(e) {
  jo[e] = jo(e);
});
var Ao = { exports: {} }, rr = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function ld() {
  if (as) return Te;
  as = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var R = h.$$typeof;
      switch (R) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case y:
                case E:
                case a:
                  return h;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function x(h) {
    return g(h) === u;
  }
  return Te.AsyncMode = c, Te.ConcurrentMode = u, Te.ContextConsumer = l, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = d, Te.Fragment = o, Te.Lazy = y, Te.Memo = E, Te.Portal = n, Te.Profiler = s, Te.StrictMode = i, Te.Suspense = f, Te.isAsyncMode = function(h) {
    return x(h) || g(h) === c;
  }, Te.isConcurrentMode = x, Te.isContextConsumer = function(h) {
    return g(h) === l;
  }, Te.isContextProvider = function(h) {
    return g(h) === a;
  }, Te.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Te.isForwardRef = function(h) {
    return g(h) === d;
  }, Te.isFragment = function(h) {
    return g(h) === o;
  }, Te.isLazy = function(h) {
    return g(h) === y;
  }, Te.isMemo = function(h) {
    return g(h) === E;
  }, Te.isPortal = function(h) {
    return g(h) === n;
  }, Te.isProfiler = function(h) {
    return g(h) === s;
  }, Te.isStrictMode = function(h) {
    return g(h) === i;
  }, Te.isSuspense = function(h) {
    return g(h) === f;
  }, Te.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === f || h === b || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === O || h.$$typeof === S);
  }, Te.typeOf = g, Te;
}
var Oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function cd() {
  return ls || (ls = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function g(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === o || w === u || w === s || w === i || w === f || w === b || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === E || w.$$typeof === a || w.$$typeof === l || w.$$typeof === d || w.$$typeof === v || w.$$typeof === T || w.$$typeof === O || w.$$typeof === S);
    }
    function x(w) {
      if (typeof w == "object" && w !== null) {
        var oe = w.$$typeof;
        switch (oe) {
          case t:
            var I = w.type;
            switch (I) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case f:
                return I;
              default:
                var ae = I && I.$$typeof;
                switch (ae) {
                  case l:
                  case d:
                  case y:
                  case E:
                  case a:
                    return ae;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var h = c, R = u, P = l, L = a, m = t, $ = d, D = o, F = y, W = E, B = n, V = s, j = i, H = f, Y = !1;
    function ne(w) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(w) || x(w) === c;
    }
    function M(w) {
      return x(w) === u;
    }
    function _(w) {
      return x(w) === l;
    }
    function Z(w) {
      return x(w) === a;
    }
    function q(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function z(w) {
      return x(w) === d;
    }
    function J(w) {
      return x(w) === o;
    }
    function G(w) {
      return x(w) === y;
    }
    function X(w) {
      return x(w) === E;
    }
    function ee(w) {
      return x(w) === n;
    }
    function Q(w) {
      return x(w) === s;
    }
    function U(w) {
      return x(w) === i;
    }
    function te(w) {
      return x(w) === f;
    }
    Oe.AsyncMode = h, Oe.ConcurrentMode = R, Oe.ContextConsumer = P, Oe.ContextProvider = L, Oe.Element = m, Oe.ForwardRef = $, Oe.Fragment = D, Oe.Lazy = F, Oe.Memo = W, Oe.Portal = B, Oe.Profiler = V, Oe.StrictMode = j, Oe.Suspense = H, Oe.isAsyncMode = ne, Oe.isConcurrentMode = M, Oe.isContextConsumer = _, Oe.isContextProvider = Z, Oe.isElement = q, Oe.isForwardRef = z, Oe.isFragment = J, Oe.isLazy = G, Oe.isMemo = X, Oe.isPortal = ee, Oe.isProfiler = Q, Oe.isStrictMode = U, Oe.isSuspense = te, Oe.isValidElementType = g, Oe.typeOf = x;
  }()), Oe;
}
var cs;
function La() {
  return cs || (cs = 1, process.env.NODE_ENV === "production" ? rr.exports = ld() : rr.exports = cd()), rr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fo, us;
function ud() {
  if (us) return fo;
  us = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
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
  return fo = i() ? Object.assign : function(s, a) {
    for (var l, c = o(s), u, d = 1; d < arguments.length; d++) {
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
  }, fo;
}
var po, ds;
function ui() {
  if (ds) return po;
  ds = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return po = e, po;
}
var mo, fs;
function ja() {
  return fs || (fs = 1, mo = Function.call.bind(Object.prototype.hasOwnProperty)), mo;
}
var ho, ps;
function dd() {
  if (ps) return ho;
  ps = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ui(), n = {}, o = ja();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (o(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var b = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ho = i, ho;
}
var go, ms;
function fd() {
  if (ms) return go;
  ms = 1;
  var e = La(), t = ud(), n = ui(), o = ja(), i = dd(), s = function() {
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
  return go = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(M) {
      var _ = M && (u && M[u] || M[d]);
      if (typeof _ == "function")
        return _;
    }
    var b = "<<anonymous>>", E = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: O(),
      arrayOf: g,
      element: x(),
      elementType: h(),
      instanceOf: R,
      node: $(),
      objectOf: L,
      oneOf: P,
      oneOfType: m,
      shape: F,
      exact: W
    };
    function y(M, _) {
      return M === _ ? M !== 0 || 1 / M === 1 / _ : M !== M && _ !== _;
    }
    function S(M, _) {
      this.message = M, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function v(M) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, Z = 0;
      function q(J, G, X, ee, Q, U, te) {
        if (ee = ee || b, U = U || X, te !== n) {
          if (c) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = ee + ":" + X;
            !_[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Z < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[oe] = !0, Z++);
          }
        }
        return G[X] == null ? J ? G[X] === null ? new S("The " + Q + " `" + U + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new S("The " + Q + " `" + U + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : M(G, X, ee, Q, U);
      }
      var z = q.bind(null, !1);
      return z.isRequired = q.bind(null, !0), z;
    }
    function T(M) {
      function _(Z, q, z, J, G, X) {
        var ee = Z[q], Q = j(ee);
        if (Q !== M) {
          var U = H(ee);
          return new S(
            "Invalid " + J + " `" + G + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return v(_);
    }
    function O() {
      return v(a);
    }
    function g(M) {
      function _(Z, q, z, J, G) {
        if (typeof M != "function")
          return new S("Property `" + G + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var X = Z[q];
        if (!Array.isArray(X)) {
          var ee = j(X);
          return new S("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected an array."));
        }
        for (var Q = 0; Q < X.length; Q++) {
          var U = M(X, Q, z, J, G + "[" + Q + "]", n);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return v(_);
    }
    function x() {
      function M(_, Z, q, z, J) {
        var G = _[Z];
        if (!l(G)) {
          var X = j(G);
          return new S("Invalid " + z + " `" + J + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(M);
    }
    function h() {
      function M(_, Z, q, z, J) {
        var G = _[Z];
        if (!e.isValidElementType(G)) {
          var X = j(G);
          return new S("Invalid " + z + " `" + J + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(M);
    }
    function R(M) {
      function _(Z, q, z, J, G) {
        if (!(Z[q] instanceof M)) {
          var X = M.name || b, ee = ne(Z[q]);
          return new S("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return v(_);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(Z, q, z, J, G) {
        for (var X = Z[q], ee = 0; ee < M.length; ee++)
          if (y(X, M[ee]))
            return null;
        var Q = JSON.stringify(M, function(te, w) {
          var oe = H(w);
          return oe === "symbol" ? String(w) : w;
        });
        return new S("Invalid " + J + " `" + G + "` of value `" + String(X) + "` " + ("supplied to `" + z + "`, expected one of " + Q + "."));
      }
      return v(_);
    }
    function L(M) {
      function _(Z, q, z, J, G) {
        if (typeof M != "function")
          return new S("Property `" + G + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var X = Z[q], ee = j(X);
        if (ee !== "object")
          return new S("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected an object."));
        for (var Q in X)
          if (o(X, Q)) {
            var U = M(X, Q, z, J, G + "." + Q, n);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return v(_);
    }
    function m(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < M.length; _++) {
        var Z = M[_];
        if (typeof Z != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(Z) + " at index " + _ + "."
          ), a;
      }
      function q(z, J, G, X, ee) {
        for (var Q = [], U = 0; U < M.length; U++) {
          var te = M[U], w = te(z, J, G, X, ee, n);
          if (w == null)
            return null;
          w.data && o(w.data, "expectedType") && Q.push(w.data.expectedType);
        }
        var oe = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new S("Invalid " + X + " `" + ee + "` supplied to " + ("`" + G + "`" + oe + "."));
      }
      return v(q);
    }
    function $() {
      function M(_, Z, q, z, J) {
        return B(_[Z]) ? null : new S("Invalid " + z + " `" + J + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return v(M);
    }
    function D(M, _, Z, q, z) {
      return new S(
        (M || "React class") + ": " + _ + " type `" + Z + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function F(M) {
      function _(Z, q, z, J, G) {
        var X = Z[q], ee = j(X);
        if (ee !== "object")
          return new S("Invalid " + J + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var Q in M) {
          var U = M[Q];
          if (typeof U != "function")
            return D(z, J, G, Q, H(U));
          var te = U(X, Q, z, J, G + "." + Q, n);
          if (te)
            return te;
        }
        return null;
      }
      return v(_);
    }
    function W(M) {
      function _(Z, q, z, J, G) {
        var X = Z[q], ee = j(X);
        if (ee !== "object")
          return new S("Invalid " + J + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + z + "`, expected `object`."));
        var Q = t({}, Z[q], M);
        for (var U in Q) {
          var te = M[U];
          if (o(M, U) && typeof te != "function")
            return D(z, J, G, U, H(te));
          if (!te)
            return new S(
              "Invalid " + J + " `" + G + "` key `" + U + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(Z[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var w = te(X, U, z, J, G + "." + U, n);
          if (w)
            return w;
        }
        return null;
      }
      return v(_);
    }
    function B(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(B);
          if (M === null || l(M))
            return !0;
          var _ = f(M);
          if (_) {
            var Z = _.call(M), q;
            if (_ !== M.entries) {
              for (; !(q = Z.next()).done; )
                if (!B(q.value))
                  return !1;
            } else
              for (; !(q = Z.next()).done; ) {
                var z = q.value;
                if (z && !B(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(M, _) {
      return M === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function j(M) {
      var _ = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : V(_, M) ? "symbol" : _;
    }
    function H(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var _ = j(M);
      if (_ === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function Y(M) {
      var _ = H(M);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ne(M) {
      return !M.constructor || !M.constructor.name ? b : M.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, go;
}
var yo, hs;
function pd() {
  if (hs) return yo;
  hs = 1;
  var e = ui();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, yo = function() {
    function o(a, l, c, u, d, f) {
      if (f !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, yo;
}
if (process.env.NODE_ENV !== "production") {
  var md = La(), hd = !0;
  Ao.exports = fd()(md.isElement, hd);
} else
  Ao.exports = pd()();
var gd = Ao.exports;
const r = /* @__PURE__ */ vc(gd);
function yd(e) {
  return e == null || Object.keys(e).length === 0;
}
function di(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (i) => t(yd(i) ? n : i) : t;
  return /* @__PURE__ */ k.jsx(td, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (di.propTypes = {
  defaultTheme: r.object,
  styles: r.oneOfType([r.array, r.string, r.object, r.func])
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Aa(e, t) {
  const n = jo(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
const bd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function wt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Da(e) {
  if (!wt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Da(e[n]);
  }), t;
}
function Ge(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return wt(e) && wt(t) && Object.keys(t).forEach((i) => {
    wt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && wt(e[i]) ? o[i] = Ge(e[i], t[i], n) : n.clone ? o[i] = wt(t[i]) ? Da(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
const vd = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function Ed(e) {
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
    step: o = 5,
    ...i
  } = e, s = vd(t), a = Object.keys(s);
  function l(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${n})`;
  }
  function c(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - o / 100}${n})`;
  }
  function u(b, E) {
    const y = a.indexOf(E);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : E) - o / 100}${n})`;
  }
  function d(b) {
    return a.indexOf(b) + 1 < a.length ? u(b, a[a.indexOf(b) + 1]) : l(b);
  }
  function f(b) {
    const E = a.indexOf(b);
    return E === 0 ? l(a[1]) : E === a.length - 1 ? c(a[E]) : u(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
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
    ...i
  };
}
function Sd(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = o.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = i.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const s = t[i];
    return delete o[i], o[i] = s, o;
  }, {
    ...t
  }) : t;
}
function xd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Cd(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Pt(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function Td(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function n(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (s) => (n(o, s), o);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Od = {
  borderRadius: 4
}, At = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {};
function kn(e, t) {
  return t ? Ge(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ar = {
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
}, gs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ar[e]}px)`
}, wd = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ar[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Et(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || gs;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || gs;
    return Object.keys(t).reduce((a, l) => {
      if (xd(s.keys, l)) {
        const c = Cd(o.containerQueries ? o : wd, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || Ar).includes(l)) {
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
function Fa(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const s = e.up(i);
    return o[s] = {}, o;
  }, {})) || {};
}
function Ba(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function Rd(e, ...t) {
  const n = Fa(e), o = [n, ...t].reduce((i, s) => Ge(i, s), {});
  return Ba(Object.keys(n), o);
}
function Pd(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function bo({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || Pd(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ce(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Pt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function xr(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = Dr(e, n) || o, t && (i = t(i, o, e)), i;
}
function qe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Dr(c, o) || {};
    return Et(a, l, (f) => {
      let b = xr(u, i, f);
      return f === b && typeof f == "string" && (b = xr(u, i, `${t}${f === "default" ? "" : ce(f)}`, f)), n === !1 ? b : {
        [n]: b
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: At
  } : {}, s.filterProps = [t], s;
}
function kd(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $d = {
  m: "margin",
  p: "padding"
}, Nd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ys = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Md = kd((e) => {
  if (e.length > 2)
    if (ys[e])
      e = ys[e];
    else
      return [e];
  const [t, n] = e.split(""), o = $d[t], i = Nd[n] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), Fr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Br = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Id = [...Fr, ...Br];
function Gn(e, t, n, o) {
  const i = Dr(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${s}.`), typeof i == "string" ? `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return s >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Vr(e) {
  return Gn(e, "spacing", 8, "spacing");
}
function qt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function _d(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = qt(t, n), o), {});
}
function Ld(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = Md(n), s = _d(i, o), a = e[n];
  return Et(e, a, s);
}
function Va(e, t) {
  const n = Vr(e.theme);
  return Object.keys(e).map((o) => Ld(e, t, o, n)).reduce(kn, {});
}
function We(e) {
  return Va(e, Fr);
}
We.propTypes = process.env.NODE_ENV !== "production" ? Fr.reduce((e, t) => (e[t] = At, e), {}) : {};
We.filterProps = Fr;
function ze(e) {
  return Va(e, Br);
}
ze.propTypes = process.env.NODE_ENV !== "production" ? Br.reduce((e, t) => (e[t] = At, e), {}) : {};
ze.filterProps = Br;
process.env.NODE_ENV !== "production" && Id.reduce((e, t) => (e[t] = At, e), {});
function Wa(e = 8, t = Vr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Wr(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, s) => t[s] ? kn(i, t[s](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gt(e, t) {
  return qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const jd = gt("border", mt), Ad = gt("borderTop", mt), Dd = gt("borderRight", mt), Fd = gt("borderBottom", mt), Bd = gt("borderLeft", mt), Vd = gt("borderColor"), Wd = gt("borderTopColor"), zd = gt("borderRightColor"), Ud = gt("borderBottomColor"), qd = gt("borderLeftColor"), Hd = gt("outline", mt), Yd = gt("outlineColor"), zr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Gn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: qt(t, o)
    });
    return Et(e, e.borderRadius, n);
  }
  return null;
};
zr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
zr.filterProps = ["borderRadius"];
Wr(jd, Ad, Dd, Fd, Bd, Vd, Wd, zd, Ud, qd, zr, Hd, Yd);
const Ur = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Gn(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: qt(t, o)
    });
    return Et(e, e.gap, n);
  }
  return null;
};
Ur.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
Ur.filterProps = ["gap"];
const qr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Gn(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: qt(t, o)
    });
    return Et(e, e.columnGap, n);
  }
  return null;
};
qr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
qr.filterProps = ["columnGap"];
const Hr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Gn(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: qt(t, o)
    });
    return Et(e, e.rowGap, n);
  }
  return null;
};
Hr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
Hr.filterProps = ["rowGap"];
const Kd = qe({
  prop: "gridColumn"
}), Gd = qe({
  prop: "gridRow"
}), Zd = qe({
  prop: "gridAutoFlow"
}), Xd = qe({
  prop: "gridAutoColumns"
}), Jd = qe({
  prop: "gridAutoRows"
}), Qd = qe({
  prop: "gridTemplateColumns"
}), ef = qe({
  prop: "gridTemplateRows"
}), tf = qe({
  prop: "gridTemplateAreas"
}), nf = qe({
  prop: "gridArea"
});
Wr(Ur, qr, Hr, Kd, Gd, Zd, Xd, Jd, Qd, ef, tf, nf);
function cn(e, t) {
  return t === "grey" ? t : e;
}
const rf = qe({
  prop: "color",
  themeKey: "palette",
  transform: cn
}), of = qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: cn
}), sf = qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: cn
});
Wr(rf, of, sf);
function lt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const af = qe({
  prop: "width",
  transform: lt
}), fi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, a, l, c;
      const o = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || Ar[n];
      return o ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: lt(n)
      };
    };
    return Et(e, e.maxWidth, t);
  }
  return null;
};
fi.filterProps = ["maxWidth"];
const lf = qe({
  prop: "minWidth",
  transform: lt
}), cf = qe({
  prop: "height",
  transform: lt
}), uf = qe({
  prop: "maxHeight",
  transform: lt
}), df = qe({
  prop: "minHeight",
  transform: lt
});
qe({
  prop: "size",
  cssProperty: "width",
  transform: lt
});
qe({
  prop: "size",
  cssProperty: "height",
  transform: lt
});
const ff = qe({
  prop: "boxSizing"
});
Wr(af, fi, lf, cf, uf, df, ff);
const Zn = {
  // borders
  border: {
    themeKey: "borders",
    transform: mt
  },
  borderTop: {
    themeKey: "borders",
    transform: mt
  },
  borderRight: {
    themeKey: "borders",
    transform: mt
  },
  borderBottom: {
    themeKey: "borders",
    transform: mt
  },
  borderLeft: {
    themeKey: "borders",
    transform: mt
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
    transform: mt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: zr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: cn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: cn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: cn
  },
  // spacing
  p: {
    style: ze
  },
  pt: {
    style: ze
  },
  pr: {
    style: ze
  },
  pb: {
    style: ze
  },
  pl: {
    style: ze
  },
  px: {
    style: ze
  },
  py: {
    style: ze
  },
  padding: {
    style: ze
  },
  paddingTop: {
    style: ze
  },
  paddingRight: {
    style: ze
  },
  paddingBottom: {
    style: ze
  },
  paddingLeft: {
    style: ze
  },
  paddingX: {
    style: ze
  },
  paddingY: {
    style: ze
  },
  paddingInline: {
    style: ze
  },
  paddingInlineStart: {
    style: ze
  },
  paddingInlineEnd: {
    style: ze
  },
  paddingBlock: {
    style: ze
  },
  paddingBlockStart: {
    style: ze
  },
  paddingBlockEnd: {
    style: ze
  },
  m: {
    style: We
  },
  mt: {
    style: We
  },
  mr: {
    style: We
  },
  mb: {
    style: We
  },
  ml: {
    style: We
  },
  mx: {
    style: We
  },
  my: {
    style: We
  },
  margin: {
    style: We
  },
  marginTop: {
    style: We
  },
  marginRight: {
    style: We
  },
  marginBottom: {
    style: We
  },
  marginLeft: {
    style: We
  },
  marginX: {
    style: We
  },
  marginY: {
    style: We
  },
  marginInline: {
    style: We
  },
  marginInlineStart: {
    style: We
  },
  marginInlineEnd: {
    style: We
  },
  marginBlock: {
    style: We
  },
  marginBlockStart: {
    style: We
  },
  marginBlockEnd: {
    style: We
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
    style: Ur
  },
  rowGap: {
    style: Hr
  },
  columnGap: {
    style: qr
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
    transform: lt
  },
  maxWidth: {
    style: fi
  },
  minWidth: {
    transform: lt
  },
  height: {
    transform: lt
  },
  maxHeight: {
    transform: lt
  },
  minHeight: {
    transform: lt
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
function pf(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function mf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hf() {
  function e(n, o, i, s) {
    const a = {
      [n]: o,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: o
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const b = Dr(i, u) || {};
    return f ? f(a) : Et(a, o, (y) => {
      let S = xr(b, d, y);
      return y === S && typeof y == "string" && (S = xr(b, d, `${n}${y === "default" ? "" : ce(y)}`, y)), c === !1 ? S : {
        [c]: S
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const s = i.unstable_sxConfig ?? Zn;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Fa(i.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((b) => {
        const E = mf(c[b], i);
        if (E != null)
          if (typeof E == "object")
            if (s[b])
              f = kn(f, e(b, E, i, s));
            else {
              const y = Et({
                theme: i
              }, E, (S) => ({
                [b]: S
              }));
              pf(y, E) ? f[b] = t({
                sx: E,
                theme: i
              }) : f = kn(f, y);
            }
          else
            f = kn(f, e(b, E, i, s));
      }), Sd(i, Ba(d, f));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Yt = hf();
Yt.filterProps = ["sx"];
function gf(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Yr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Ed(n), c = Wa(i);
  let u = Ge({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...Od,
      ...s
    }
  }, a);
  return u = Td(u), u.applyStyles = gf, u = t.reduce((d, f) => Ge(d, f), u), u.unstable_sxConfig = {
    ...Zn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Yt({
      sx: f,
      theme: this
    });
  }, u;
}
function yf(e) {
  return Object.keys(e).length === 0;
}
function za(e = null) {
  const t = p.useContext(Lr);
  return !t || yf(t) ? e : t;
}
const bf = Yr();
function Kr(e = bf) {
  return za(e);
}
function Ua({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = Kr(n), i = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ k.jsx(di, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: r.object,
  /**
   * @ignore
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool]),
  /**
   * @ignore
   */
  themeId: r.string
});
const vf = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? Zn;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function pi(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: i
  } = vf(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return wt(l) ? {
      ...o,
      ...l
    } : o;
  } : s = {
    ...o,
    ...t
  }, {
    ...i,
    sx: s
  };
}
const bs = (e) => e, Ef = () => {
  let e = bs;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = bs;
    }
  };
}, qa = Ef();
function Ha(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Ha(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ue() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ha(e)) && (o && (o += " "), o += t);
  return o;
}
function Sf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = Aa("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Yt);
  return /* @__PURE__ */ p.forwardRef(function(c, u) {
    const d = Kr(n), {
      className: f,
      component: b = "div",
      ...E
    } = pi(c);
    return /* @__PURE__ */ k.jsx(s, {
      as: b,
      ref: u,
      className: ue(f, i ? i(o) : o),
      theme: t && d[t] || d,
      ...E
    });
  });
}
const xf = {
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
function Ie(e, t, n = "Mui") {
  const o = xf[t];
  return o ? `${n}-${o}` : `${qa.generate(e)}-${t}`;
}
function ke(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = Ie(e, i, n);
  }), o;
}
var Do = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Cf() {
  if (vs) return we;
  vs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function S(v) {
    if (typeof v == "object" && v !== null) {
      var T = v.$$typeof;
      switch (T) {
        case e:
          switch (v = v.type, v) {
            case n:
            case i:
            case o:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case a:
                case c:
                case b:
                case f:
                case s:
                  return v;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return we.ContextConsumer = a, we.ContextProvider = s, we.Element = e, we.ForwardRef = c, we.Fragment = n, we.Lazy = b, we.Memo = f, we.Portal = t, we.Profiler = i, we.StrictMode = o, we.Suspense = u, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(v) {
    return S(v) === a;
  }, we.isContextProvider = function(v) {
    return S(v) === s;
  }, we.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, we.isForwardRef = function(v) {
    return S(v) === c;
  }, we.isFragment = function(v) {
    return S(v) === n;
  }, we.isLazy = function(v) {
    return S(v) === b;
  }, we.isMemo = function(v) {
    return S(v) === f;
  }, we.isPortal = function(v) {
    return S(v) === t;
  }, we.isProfiler = function(v) {
    return S(v) === i;
  }, we.isStrictMode = function(v) {
    return S(v) === o;
  }, we.isSuspense = function(v) {
    return S(v) === u;
  }, we.isSuspenseList = function(v) {
    return S(v) === d;
  }, we.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === i || v === o || v === u || v === d || v === E || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
  }, we.typeOf = S, we;
}
var Re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es;
function Tf() {
  return Es || (Es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y = !1, S = !1, v = !1, T = !1, O = !1, g;
    g = Symbol.for("react.module.reference");
    function x(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === i || O || I === o || I === u || I === d || T || I === E || y || S || v || typeof I == "object" && I !== null && (I.$$typeof === b || I.$$typeof === f || I.$$typeof === s || I.$$typeof === a || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === g || I.getModuleId !== void 0));
    }
    function h(I) {
      if (typeof I == "object" && I !== null) {
        var ae = I.$$typeof;
        switch (ae) {
          case e:
            var fe = I.type;
            switch (fe) {
              case n:
              case i:
              case o:
              case u:
              case d:
                return fe;
              default:
                var _e = fe && fe.$$typeof;
                switch (_e) {
                  case l:
                  case a:
                  case c:
                  case b:
                  case f:
                  case s:
                    return _e;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var R = a, P = s, L = e, m = c, $ = n, D = b, F = f, W = t, B = i, V = o, j = u, H = d, Y = !1, ne = !1;
    function M(I) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(I) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(I) {
      return h(I) === a;
    }
    function q(I) {
      return h(I) === s;
    }
    function z(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function J(I) {
      return h(I) === c;
    }
    function G(I) {
      return h(I) === n;
    }
    function X(I) {
      return h(I) === b;
    }
    function ee(I) {
      return h(I) === f;
    }
    function Q(I) {
      return h(I) === t;
    }
    function U(I) {
      return h(I) === i;
    }
    function te(I) {
      return h(I) === o;
    }
    function w(I) {
      return h(I) === u;
    }
    function oe(I) {
      return h(I) === d;
    }
    Re.ContextConsumer = R, Re.ContextProvider = P, Re.Element = L, Re.ForwardRef = m, Re.Fragment = $, Re.Lazy = D, Re.Memo = F, Re.Portal = W, Re.Profiler = B, Re.StrictMode = V, Re.Suspense = j, Re.SuspenseList = H, Re.isAsyncMode = M, Re.isConcurrentMode = _, Re.isContextConsumer = Z, Re.isContextProvider = q, Re.isElement = z, Re.isForwardRef = J, Re.isFragment = G, Re.isLazy = X, Re.isMemo = ee, Re.isPortal = Q, Re.isProfiler = U, Re.isStrictMode = te, Re.isSuspense = w, Re.isSuspenseList = oe, Re.isValidElementType = x, Re.typeOf = h;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Do.exports = Cf() : Do.exports = Tf();
var An = Do.exports;
function Ya(e, t = "") {
  return e.displayName || e.name || t;
}
function Ss(e, t, n) {
  const o = Ya(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Of(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ya(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case An.ForwardRef:
          return Ss(e, e.render, "ForwardRef");
        case An.Memo:
          return Ss(e, e.type, "memo");
        default:
          return;
      }
  }
}
const wf = Yr();
function vo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Fo(e, t, n) {
  return Pf(t) ? n : t[e] || t;
}
const or = Symbol("mui.processed_props");
function ir(e, t, n) {
  if (or in e)
    return e[or];
  const o = {
    ...e,
    theme: Fo(t, e.theme, n)
  };
  return e[or] = o, o[or] = o, o;
}
function Rf(e) {
  return e ? (t, n) => n[e] : null;
}
function hr(e, t) {
  var o;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => hr(i, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const {
      variants: i,
      ...s
    } = n;
    let a = s, l;
    e: for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      if (typeof u.props == "function") {
        if (l ?? (l = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !u.props(l))
          continue;
      } else
        for (const d in u.props)
          if (t[d] !== u.props[d] && ((o = t.ownerState) == null ? void 0 : o[d]) !== u.props[d])
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
function Ka(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = wf,
    rootShouldForwardProp: o = vo,
    slotShouldForwardProp: i = vo
  } = e, s = (l) => Yt(ir(l, t, n));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    bd(l, (R) => R.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = Rf(xs(d)),
      ...y
    } = c, S = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), v = b || !1;
    let T;
    process.env.NODE_ENV !== "production" && u && (T = `${u}-${xs(d || "Root")}`);
    let O = vo;
    d === "Root" || d === "root" ? O = o : d ? O = i : kf(l) && (O = void 0);
    const g = Aa(l, {
      shouldForwardProp: O,
      label: T,
      ...y
    }), x = (R) => typeof R == "function" && R.__emotion_real !== R || wt(R) ? (P) => hr(R, ir(P, t, n)) : R, h = (R, ...P) => {
      let L = x(R);
      const m = P ? P.map(x) : [];
      u && E && m.push((F) => {
        const W = Fo(t, F.theme, n);
        if (!W.components || !W.components[u] || !W.components[u].styleOverrides)
          return null;
        const B = W.components[u].styleOverrides, V = {}, j = ir(F, t, n);
        for (const H in B)
          V[H] = hr(B[H], j);
        return E(F, V);
      }), u && !S && m.push((F) => {
        var V, j;
        const W = Fo(t, F.theme, n), B = (j = (V = W == null ? void 0 : W.components) == null ? void 0 : V[u]) == null ? void 0 : j.variants;
        return B ? hr({
          variants: B
        }, ir(F, t, n)) : null;
      }), v || m.push(s);
      const $ = m.length - P.length;
      if (Array.isArray(R) && $ > 0) {
        const F = new Array($).fill("");
        L = [...R, ...F], L.raw = [...R.raw, ...F];
      }
      const D = g(L, ...m);
      if (process.env.NODE_ENV !== "production") {
        let F;
        u && (F = `${u}${ce(d || "")}`), F === void 0 && (F = `Styled(${Of(l)})`), D.displayName = F;
      }
      return l.muiName && (D.muiName = l.muiName), D;
    };
    return g.withConfig && (h.withConfig = g.withConfig), h;
  };
}
function Pf(e) {
  for (const t in e)
    return !1;
  return !0;
}
function kf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function xs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const $f = Ka();
function Dn(e, t) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], a = t[i];
        if (!a)
          n[i] = s || {};
        else if (!s)
          n[i] = a;
        else {
          n[i] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const c = l;
              n[i][c] = Dn(s[c], a[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Nf(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : Dn(t.components[n].defaultProps, o);
}
function Ga({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = Kr(n);
  return o && (i = i[o] || i), Nf({
    theme: i,
    name: t,
    props: e
  });
}
const Lt = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function Mf(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function mi(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Mf(e, t, n);
}
function If(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(If(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Pt(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Pt(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const _f = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, wn = (e, t) => {
  try {
    return _f(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Gr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Za(e) {
  e = jt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Gr({
    type: l,
    values: c
  });
}
function Bo(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(Za(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Cs(e, t) {
  const n = Bo(e), o = Bo(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function ht(e, t) {
  return e = jt(e), t = mi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Gr(e);
}
function sr(e, t, n) {
  try {
    return ht(e, t);
  } catch {
    return e;
  }
}
function Zr(e, t) {
  if (e = jt(e), t = mi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Gr(e);
}
function Ne(e, t, n) {
  try {
    return Zr(e, t);
  } catch {
    return e;
  }
}
function Xr(e, t) {
  if (e = jt(e), t = mi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Gr(e);
}
function Me(e, t, n) {
  try {
    return Xr(e, t);
  } catch {
    return e;
  }
}
function Lf(e, t = 0.15) {
  return Bo(e) > 0.5 ? Zr(e, t) : Xr(e, t);
}
function ar(e, t, n) {
  try {
    return Lf(e, t);
  } catch {
    return e;
  }
}
function Xn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function jf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xa(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !jf(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Jn = Xn(r.element, Xa);
Jn.isRequired = Xn(r.element.isRequired, Xa);
function Af(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Df(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Af(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const hi = Xn(r.elementType, Df), Ff = "exact-prop: ​";
function Jr(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ff]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Fn(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Nt = r.oneOfType([r.func, r.object]);
function Ts(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Ja(e, t = 166) {
  let n;
  function o(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Eo(e, t) {
  var n, o, i;
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function ut(e) {
  return e && e.ownerDocument || document;
}
function Ht(e) {
  return ut(e).defaultView || window;
}
function Vo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Os = 0;
function Bf(e) {
  const [t, n] = p.useState(e), o = e || t;
  return p.useEffect(() => {
    t == null && (Os += 1, n(`mui-${Os}`));
  }, [t]), o;
}
const ws = p.useId;
function Qa(e) {
  if (ws !== void 0) {
    const t = ws();
    return e ?? t;
  }
  return Bf(e);
}
function Rs({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: i
  } = p.useRef(e !== void 0), [s, a] = p.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    p.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, e]);
    const {
      current: u
    } = p.useRef(t);
    p.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = p.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function sn(e) {
  const t = p.useRef(e);
  return Lt(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Xe(...e) {
  return p.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Vo(n, t);
    });
  }, e);
}
const Ps = {};
function el(e, t) {
  const n = p.useRef(Ps);
  return n.current === Ps && (n.current = e(t)), n;
}
const Vf = [];
function Wf(e) {
  p.useEffect(e, Vf);
}
class gi {
  constructor() {
    gn(this, "currentId", null);
    gn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    gn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new gi();
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
function tl() {
  const e = el(gi.create).current;
  return Wf(e.disposeEffect), e;
}
function ks(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function nl(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function zf(e) {
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
function rl(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = zf(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function ol(e, t, ...n) {
  return e[t] === void 0 ? null : rl(e, t, ...n);
}
function Wo() {
  return null;
}
ol.isRequired = rl;
Wo.isRequired = Wo;
const il = process.env.NODE_ENV === "production" ? Wo : ol;
function Ae(e, t, n = void 0) {
  const o = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (a += " " + n[u]));
    }
    o[i] = a;
  }
  return o;
}
function Uf(e) {
  return typeof e == "string";
}
function sl(e, t, n) {
  return e === void 0 || Uf(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function al(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function $s(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ll(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const E = ue(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), y = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, S = {
      ...n,
      ...i,
      ...o
    };
    return E.length > 0 && (S.className = E), Object.keys(y).length > 0 && (S.style = y), {
      props: S,
      internalRef: void 0
    };
  }
  const a = al({
    ...i,
    ...o
  }), l = $s(o), c = $s(i), u = t(a), d = ue(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), f = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...o == null ? void 0 : o.style
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
function cl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ns(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : cl(n, o), {
    props: l,
    internalRef: c
  } = ll({
    ...s,
    externalSlotProps: a
  }), u = Xe(c, a == null ? void 0 : a.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return sl(t, {
    ...l,
    ref: u
  }, o);
}
function Qn(e) {
  return !e || !/* @__PURE__ */ p.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const yi = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (yi.displayName = "ThemeContext");
function bi() {
  const e = p.useContext(yi);
  return process.env.NODE_ENV !== "production" && p.useDebugValue(e), e;
}
const qf = typeof Symbol == "function" && Symbol.for, Hf = qf ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Yf(e, t) {
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
function Cr(e) {
  const {
    children: t,
    theme: n
  } = e, o = bi();
  process.env.NODE_ENV !== "production" && o === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = p.useMemo(() => {
    const s = o === null ? {
      ...n
    } : Yf(o, n);
    return s != null && (s[Hf] = o !== null), s;
  }, [n, o]);
  return /* @__PURE__ */ k.jsx(yi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  /**
   * Your component tree.
   */
  children: r.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: r.oneOfType([r.object, r.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Cr.propTypes = Jr(Cr.propTypes));
const ul = /* @__PURE__ */ p.createContext();
function dl({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ k.jsx(ul.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  children: r.node,
  value: r.bool
});
const fl = () => p.useContext(ul) ?? !1, pl = /* @__PURE__ */ p.createContext(void 0);
function ml({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ k.jsx(pl.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * @ignore
   */
  value: r.object
});
function Kf(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? Dn(i.defaultProps, o) : !i.styleOverrides && !i.variants ? Dn(i, o) : o;
}
function Gf({
  props: e,
  name: t
}) {
  const n = p.useContext(pl);
  return Kf({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Ms = {};
function Is(e, t, n, o = !1) {
  return p.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof n == "function") {
      const s = n(i), a = e ? {
        ...t,
        [e]: s
      } : s;
      return o ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: n
    } : {
      ...t,
      ...n
    };
  }, [e, t, n, o]);
}
function Bn(e) {
  const {
    children: t,
    theme: n,
    themeId: o
  } = e, i = za(Ms), s = bi() || Ms;
  process.env.NODE_ENV !== "production" && (i === null && typeof n == "function" || o && i && !i[o] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Is(o, i, n), l = Is(o, s, n, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ k.jsx(Cr, {
    theme: l,
    children: /* @__PURE__ */ k.jsx(Lr.Provider, {
      value: a,
      children: /* @__PURE__ */ k.jsx(dl, {
        value: c,
        children: /* @__PURE__ */ k.jsx(ml, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: r.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: r.oneOfType([r.func, r.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: r.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Bn.propTypes = Jr(Bn.propTypes));
const vi = "mode", Ei = "color-scheme", Zf = "data-color-scheme";
function Xf(e) {
  const {
    defaultLightColorScheme: t = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = vi,
    colorSchemeStorageKey: i = Ei,
    attribute: s = Zf,
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
  return /* @__PURE__ */ k.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || 'system';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${t}';
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
function _s(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function hl(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Jf(e) {
  return hl(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function So(e, t) {
  if (typeof window > "u")
    return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0, n || localStorage.setItem(e, t);
  } catch {
  }
  return n || t;
}
function Qf(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: o,
    supportedColorSchemes: i = [],
    modeStorageKey: s = vi,
    colorSchemeStorageKey: a = Ei,
    storageWindow: l = typeof window > "u" ? void 0 : window
  } = e, c = i.join(","), u = i.length > 1, [d, f] = p.useState(() => {
    const g = So(s, t), x = So(`${a}-light`, n), h = So(`${a}-dark`, o);
    return {
      mode: g,
      systemMode: _s(g),
      lightColorScheme: x,
      darkColorScheme: h
    };
  }), [, b] = p.useState(!1), E = p.useRef(!1);
  p.useEffect(() => {
    u && b(!0), E.current = !0;
  }, [u]);
  const y = Jf(d), S = p.useCallback((g) => {
    f((x) => {
      if (g === x.mode)
        return x;
      const h = g ?? t;
      try {
        localStorage.setItem(s, h);
      } catch {
      }
      return {
        ...x,
        mode: h,
        systemMode: _s(h)
      };
    });
  }, [s, t]), v = p.useCallback((g) => {
    g ? typeof g == "string" ? g && !c.includes(g) ? console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`) : f((x) => {
      const h = {
        ...x
      };
      return hl(x, (R) => {
        try {
          localStorage.setItem(`${a}-${R}`, g);
        } catch {
        }
        R === "light" && (h.lightColorScheme = g), R === "dark" && (h.darkColorScheme = g);
      }), h;
    }) : f((x) => {
      const h = {
        ...x
      }, R = g.light === null ? n : g.light, P = g.dark === null ? o : g.dark;
      if (R)
        if (!c.includes(R))
          console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          h.lightColorScheme = R;
          try {
            localStorage.setItem(`${a}-light`, R);
          } catch {
          }
        }
      if (P)
        if (!c.includes(P))
          console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          h.darkColorScheme = P;
          try {
            localStorage.setItem(`${a}-dark`, P);
          } catch {
          }
        }
      return h;
    }) : f((x) => {
      try {
        localStorage.setItem(`${a}-light`, n), localStorage.setItem(`${a}-dark`, o);
      } catch {
      }
      return {
        ...x,
        lightColorScheme: n,
        darkColorScheme: o
      };
    });
  }, [c, a, n, o]), T = p.useCallback((g) => {
    d.mode === "system" && f((x) => {
      const h = g != null && g.matches ? "dark" : "light";
      return x.systemMode === h ? x : {
        ...x,
        systemMode: h
      };
    });
  }, [d.mode]), O = p.useRef(T);
  return O.current = T, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !u)
      return;
    const g = (...h) => O.current(...h), x = window.matchMedia("(prefers-color-scheme: dark)");
    return x.addListener(g), g(x), () => {
      x.removeListener(g);
    };
  }, [u]), p.useEffect(() => {
    if (l && u) {
      const g = (x) => {
        const h = x.newValue;
        typeof x.key == "string" && x.key.startsWith(a) && (!h || c.match(h)) && (x.key.endsWith("light") && v({
          light: h
        }), x.key.endsWith("dark") && v({
          dark: h
        })), x.key === s && (!h || ["light", "dark", "system"].includes(h)) && S(h || t);
      };
      return l.addEventListener("storage", g), () => {
        l.removeEventListener("storage", g);
      };
    }
  }, [v, S, s, a, c, t, l, u]), {
    ...d,
    mode: E.current || !u ? d.mode : void 0,
    systemMode: E.current || !u ? d.systemMode : void 0,
    colorScheme: E.current || !u ? y : void 0,
    setMode: S,
    setColorScheme: v
  };
}
const ep = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function tp(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: o = vi,
    colorSchemeStorageKey: i = Ei,
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
  }, u = /* @__PURE__ */ p.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => p.useContext(u) || c;
  function f(S) {
    var Ee, Je, re, Ve, st;
    const {
      children: v,
      theme: T,
      modeStorageKey: O = o,
      colorSchemeStorageKey: g = i,
      disableTransitionOnChange: x = s,
      storageWindow: h = typeof window > "u" ? void 0 : window,
      documentNode: R = typeof document > "u" ? void 0 : document,
      colorSchemeNode: P = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: L = !1,
      disableStyleSheetGeneration: m = !1
    } = S, $ = p.useRef(!1), D = bi(), F = p.useContext(u), W = !!F && !L, B = p.useMemo(() => T || (typeof n == "function" ? n() : n), [T]), V = B[t], {
      colorSchemes: j = {},
      components: H = {},
      cssVarPrefix: Y,
      ...ne
    } = V || B, M = Object.keys(j).filter((me) => !!j[me]).join(","), _ = p.useMemo(() => M.split(","), [M]), Z = typeof a == "string" ? a : a.light, q = typeof a == "string" ? a : a.dark, z = j[Z] && j[q] ? "system" : ((Je = (Ee = j[ne.defaultColorScheme]) == null ? void 0 : Ee.palette) == null ? void 0 : Je.mode) || ((re = ne.palette) == null ? void 0 : re.mode), {
      mode: J,
      setMode: G,
      systemMode: X,
      lightColorScheme: ee,
      darkColorScheme: Q,
      colorScheme: U,
      setColorScheme: te
    } = Qf({
      supportedColorSchemes: _,
      defaultLightColorScheme: Z,
      defaultDarkColorScheme: q,
      modeStorageKey: O,
      colorSchemeStorageKey: g,
      defaultMode: z,
      storageWindow: h
    });
    let w = J, oe = U;
    W && (w = F.mode, oe = F.colorScheme);
    const I = oe || ne.defaultColorScheme, ae = ((Ve = ne.generateThemeVars) == null ? void 0 : Ve.call(ne)) || ne.vars, fe = {
      ...ne,
      components: H,
      colorSchemes: j,
      cssVarPrefix: Y,
      vars: ae
    };
    if (typeof fe.generateSpacing == "function" && (fe.spacing = fe.generateSpacing()), I) {
      const me = j[I];
      me && typeof me == "object" && Object.keys(me).forEach((pe) => {
        me[pe] && typeof me[pe] == "object" ? fe[pe] = {
          ...fe[pe],
          ...me[pe]
        } : fe[pe] = me[pe];
      });
    }
    const _e = ne.colorSchemeSelector;
    p.useEffect(() => {
      if (oe && P && _e && _e !== "media") {
        const me = _e;
        let pe = _e;
        if (me === "class" && (pe = ".%s"), me === "data" && (pe = "[data-%s]"), me != null && me.startsWith("data-") && !me.includes("%s") && (pe = `[${me}="%s"]`), pe.startsWith("."))
          P.classList.remove(..._.map((at) => pe.substring(1).replace("%s", at))), P.classList.add(pe.substring(1).replace("%s", oe));
        else {
          const at = pe.replace("%s", oe).match(/\[([^\]]+)\]/);
          if (at) {
            const [dt, rt] = at[1].split("=");
            rt || _.forEach((ye) => {
              P.removeAttribute(dt.replace(oe, ye));
            }), P.setAttribute(dt, rt ? rt.replace(/"|'/g, "") : "");
          } else
            P.setAttribute(pe, oe);
        }
      }
    }, [oe, _e, P, _]), p.useEffect(() => {
      let me;
      if (x && $.current && R) {
        const pe = R.createElement("style");
        pe.appendChild(R.createTextNode(ep)), R.head.appendChild(pe), window.getComputedStyle(R.body), me = setTimeout(() => {
          R.head.removeChild(pe);
        }, 1);
      }
      return () => {
        clearTimeout(me);
      };
    }, [oe, x, R]), p.useEffect(() => ($.current = !0, () => {
      $.current = !1;
    }), []);
    const Be = p.useMemo(() => ({
      allColorSchemes: _,
      colorScheme: oe,
      darkColorScheme: Q,
      lightColorScheme: ee,
      mode: w,
      setColorScheme: te,
      setMode: G,
      systemMode: X
    }), [_, oe, Q, ee, w, te, G, X]);
    let Pe = !0;
    (m || ne.cssVariables === !1 || W && (D == null ? void 0 : D.cssVarPrefix) === Y) && (Pe = !1);
    const tt = /* @__PURE__ */ k.jsxs(p.Fragment, {
      children: [Pe && /* @__PURE__ */ k.jsx(p.Fragment, {
        children: (((st = fe.generateStyleSheets) == null ? void 0 : st.call(fe)) || []).map((me, pe) => /* @__PURE__ */ k.jsx(di, {
          styles: me
        }, pe))
      }), /* @__PURE__ */ k.jsx(Bn, {
        themeId: V ? t : void 0,
        theme: l ? l(fe) : fe,
        children: v
      })]
    });
    return W ? tt : /* @__PURE__ */ k.jsx(u.Provider, {
      value: Be,
      children: tt
    });
  }
  process.env.NODE_ENV !== "production" && (f.propTypes = {
    /**
     * The component tree.
     */
    children: r.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: r.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: r.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: r.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: r.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: r.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: r.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: r.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: r.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: r.object
  });
  const b = typeof a == "string" ? a : a.light, E = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (S) => Xf({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: E,
      modeStorageKey: o,
      ...S
    })
  };
}
function np(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Ls = (e, t, n, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, rp = (e, t, n) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  o(e);
}, op = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function xo(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return rp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = op(l, c);
        Object.assign(i, {
          [d]: f
        }), Ls(s, l, `var(${d})`, u), Ls(a, l, `var(${d}, ${f})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function ip(e, t = {}) {
  const {
    getSelector: n = v,
    disableCssColorScheme: o,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: d,
    varsWithDefaults: f
  } = xo(c, t);
  let b = f;
  const E = {}, {
    [l]: y,
    ...S
  } = s;
  if (Object.entries(S || {}).forEach(([g, x]) => {
    const {
      vars: h,
      css: R,
      varsWithDefaults: P
    } = xo(x, t);
    b = Ge(b, P), E[g] = {
      css: R,
      vars: h
    };
  }), y) {
    const {
      css: g,
      vars: x,
      varsWithDefaults: h
    } = xo(y, t);
    b = Ge(b, h), E[l] = {
      css: g,
      vars: x
    };
  }
  function v(g, x) {
    var R, P;
    let h = i;
    if (i === "class" && (h = ".%s"), i === "data" && (h = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (h = `[${i}="%s"]`), g) {
      if (h === "media")
        return e.defaultColorScheme === g ? ":root" : {
          [`@media (prefers-color-scheme: ${((P = (R = s[g]) == null ? void 0 : R.palette) == null ? void 0 : P.mode) || g})`]: {
            ":root": x
          }
        };
      if (h)
        return e.defaultColorScheme === g ? `:root, ${h.replace("%s", String(g))}` : h.replace("%s", String(g));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let g = {
        ...u
      };
      return Object.entries(E).forEach(([, {
        vars: x
      }]) => {
        g = Ge(g, x);
      }), g;
    },
    generateStyleSheets: () => {
      var L, m;
      const g = [], x = e.defaultColorScheme || "light";
      function h($, D) {
        Object.keys(D).length && g.push(typeof $ == "string" ? {
          [$]: {
            ...D
          }
        } : $);
      }
      h(n(void 0, {
        ...d
      }), d);
      const {
        [x]: R,
        ...P
      } = E;
      if (R) {
        const {
          css: $
        } = R, D = (m = (L = s[x]) == null ? void 0 : L.palette) == null ? void 0 : m.mode, F = !o && D ? {
          colorScheme: D,
          ...$
        } : {
          ...$
        };
        h(n(x, {
          ...F
        }), F);
      }
      return Object.entries(P).forEach(([$, {
        css: D
      }]) => {
        var B, V;
        const F = (V = (B = s[$]) == null ? void 0 : B.palette) == null ? void 0 : V.mode, W = !o && F ? {
          colorScheme: F,
          ...D
        } : {
          ...D
        };
        h(n($, {
          ...W
        }), W);
      }), g;
    }
  };
}
function sp(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const ap = Yr(), lp = $f("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function cp(e) {
  return Ga({
    props: e,
    name: "MuiStack",
    defaultTheme: ap
  });
}
function up(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((o, i, s) => (o.push(i), s < n.length - 1 && o.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const dp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], fp = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Et({
      theme: t
    }, bo({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = Vr(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = bo({
      values: e.direction,
      base: i
    }), a = bo({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const b = u > 0 ? s[d[u - 1]] : "column";
        s[c] = b;
      }
    }), n = Ge(n, Et({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: qt(o, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${dp(u ? s[u] : e.direction)}`]: qt(o, c)
      }
    }));
  }
  return n = Rd(t.breakpoints, n), n;
};
function pp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = lp,
    useThemeProps: n = cp,
    componentName: o = "MuiStack"
  } = e, i = () => Ae({
    root: ["root"]
  }, (c) => Ie(o, c), {}), s = t(fp), a = /* @__PURE__ */ p.forwardRef(function(c, u) {
    const d = n(c), f = pi(d), {
      component: b = "div",
      direction: E = "column",
      spacing: y = 0,
      divider: S,
      children: v,
      className: T,
      useFlexGap: O = !1,
      ...g
    } = f, x = {
      direction: E,
      spacing: y,
      useFlexGap: O
    }, h = i();
    return /* @__PURE__ */ k.jsx(s, {
      as: b,
      ownerState: x,
      ref: u,
      className: ue(h.root, T),
      ...g,
      children: S ? up(v, S) : v
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: r.node,
    direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
    divider: r.node,
    spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
    sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
  }), a;
}
const js = {
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
    paper: In.white,
    default: In.white
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
}, Co = {
  text: {
    primary: In.white,
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
    active: In.white,
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
function As(e, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Xr(e.main, i) : t === "dark" && (e.dark = Zr(e.main, s)));
}
function mp(e = "light") {
  return e === "dark" ? {
    main: Qt[200],
    light: Qt[50],
    dark: Qt[400]
  } : {
    main: Qt[700],
    light: Qt[400],
    dark: Qt[800]
  };
}
function hp(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  };
}
function gp(e = "light") {
  return e === "dark" ? {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[700],
    light: Xt[400],
    dark: Xt[800]
  };
}
function yp(e = "light") {
  return e === "dark" ? {
    main: en[400],
    light: en[300],
    dark: en[700]
  } : {
    main: en[700],
    light: en[500],
    dark: en[900]
  };
}
function bp(e = "light") {
  return e === "dark" ? {
    main: tn[400],
    light: tn[300],
    dark: tn[700]
  } : {
    main: tn[800],
    light: tn[500],
    dark: tn[900]
  };
}
function vp(e = "light") {
  return e === "dark" ? {
    main: vn[400],
    light: vn[300],
    dark: vn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: vn[500],
    dark: vn[900]
  };
}
function Si(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, s = e.primary || mp(t), a = e.secondary || hp(t), l = e.error || gp(t), c = e.info || yp(t), u = e.success || bp(t), d = e.warning || vp(t);
  function f(S) {
    const v = Cs(S, Co.text.primary) >= n ? Co.text.primary : js.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Cs(S, v);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${v} on ${S}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const b = ({
    color: S,
    name: v,
    mainShade: T = 500,
    lightShade: O = 300,
    darkShade: g = 700
  }) => {
    if (S = {
      ...S
    }, !S.main && S[T] && (S.main = S[T]), !S.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Pt(11, v ? ` (${v})` : "", T));
    if (typeof S.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(S.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Pt(12, v ? ` (${v})` : "", JSON.stringify(S.main)));
    return As(S, "light", O, o), As(S, "dark", g, o), S.contrastText || (S.contrastText = f(S.main)), S;
  }, E = {
    dark: Co,
    light: js
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ge({
    // A collection of common colors.
    common: {
      ...In
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
    grey: su,
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
    tonalOffset: o,
    // The light and dark mode object.
    ...E[t]
  }, i);
}
function Ep(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, s] = o;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Sp(e, t) {
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
function xp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ds = {
  textTransform: "uppercase"
}, Fs = '"Roboto", "Helvetica", "Arial", sans-serif';
function gl(e, t) {
  const {
    fontFamily: n = Fs,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
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
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, E = d || ((v) => `${v / c * b}rem`), y = (v, T, O, g, x) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Fs ? {
      letterSpacing: `${xp(g / T)}em`
    } : {},
    ...x,
    ...u
  }), S = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Ds),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Ds),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ge({
    htmlFontSize: c,
    pxToRem: E,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...S
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Cp = 0.2, Tp = 0.14, Op = 0.12;
function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Op})`].join(",");
}
const wp = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Rp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Pp = {
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
function Bs(e) {
  return `${Math.round(e)}ms`;
}
function kp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function $p(e) {
  const t = {
    ...Rp,
    ...e.easing
  }, n = {
    ...Pp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: kp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (b) => typeof b == "string", f = (b) => !Number.isNaN(parseFloat(b));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Bs(a)} ${l} ${typeof c == "string" ? c : Bs(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Np = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function zo(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Pt(20));
  const d = Si(s), f = Yr(e);
  let b = Ge(f, {
    mixins: Sp(f.breakpoints, o),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: wp.slice(),
    typography: gl(d, l),
    transitions: $p(a),
    zIndex: {
      ...Np
    }
  });
  if (b = Ge(b, u), b = t.reduce((E, y) => Ge(E, y), b), process.env.NODE_ENV !== "production") {
    const E = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (S, v) => {
      let T;
      for (T in S) {
        const O = S[T];
        if (E.includes(T) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = Ie("", T);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(S, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          S[T] = {};
        }
      }
    };
    Object.keys(b.components).forEach((S) => {
      const v = b.components[S].styleOverrides;
      v && S.startsWith("Mui") && y(v, S);
    });
  }
  return b.unstable_sxConfig = {
    ...Zn,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(y) {
    return Yt({
      sx: y,
      theme: this
    });
  }, b;
}
function Uo(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Mp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const n = Uo(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function yl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function bl(e) {
  return e === "dark" ? Mp : [];
}
function Ip(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    ...i
  } = e, s = Si(t);
  return {
    palette: s,
    opacity: {
      ...yl(s.mode),
      ...n
    },
    overlays: o || bl(s.mode),
    ...i
  };
}
function _p(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Lp = (e) => [...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], jp = (e) => (t, n) => {
  const o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Lp(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        ":root": n,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`:root, ${i.replace("%s", t)}`]: n
      } : {
        ":root": {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `:root, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return ":root";
};
function Ap(e) {
  return wt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Dp(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !Ap(l) || a.startsWith("unstable_") ? delete o[a] : wt(l) && (o[a] = {
        ...l
      }, n(o[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Fp(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function N(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Rn(e) {
  return !e || !e.startsWith("hsl") ? e : Za(e);
}
function $t(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = wn(Rn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Bp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const xt = (e) => {
  try {
    return e();
  } catch {
  }
}, Vp = (e = "mui") => np(e);
function To(e, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    e[o] = Ip({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = zo({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[o] = {
    ...t,
    palette: s,
    opacity: {
      ...yl(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || bl(i)
  }, a;
}
function Wp(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = _p,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(n)[0], d = o || (n.light && u !== "light" ? "light" : u), f = Vp(s), {
    [d]: b,
    light: E,
    dark: y,
    ...S
  } = n, v = {
    ...S
  };
  let T = b;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Pt(21, d));
  const O = To(v, T, c, d);
  E && !v.light && To(v, E, void 0, "light"), y && !v.dark && To(v, y, void 0, "dark");
  let g = {
    defaultColorScheme: d,
    ...O,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: v,
    font: {
      ...Ep(O.typography),
      ...O.font
    },
    spacing: Bp(c.spacing)
  };
  Object.keys(g.colorSchemes).forEach((L) => {
    const m = g.colorSchemes[L].palette, $ = (D) => {
      const F = D.split("-"), W = F[1], B = F[2];
      return f(D, m[W][B]);
    };
    if (m.mode === "light" && (N(m.common, "background", "#fff"), N(m.common, "onBackground", "#000")), m.mode === "dark" && (N(m.common, "background", "#000"), N(m.common, "onBackground", "#fff")), Fp(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      N(m.Alert, "errorColor", Ne(m.error.light, 0.6)), N(m.Alert, "infoColor", Ne(m.info.light, 0.6)), N(m.Alert, "successColor", Ne(m.success.light, 0.6)), N(m.Alert, "warningColor", Ne(m.warning.light, 0.6)), N(m.Alert, "errorFilledBg", $("palette-error-main")), N(m.Alert, "infoFilledBg", $("palette-info-main")), N(m.Alert, "successFilledBg", $("palette-success-main")), N(m.Alert, "warningFilledBg", $("palette-warning-main")), N(m.Alert, "errorFilledColor", xt(() => m.getContrastText(m.error.main))), N(m.Alert, "infoFilledColor", xt(() => m.getContrastText(m.info.main))), N(m.Alert, "successFilledColor", xt(() => m.getContrastText(m.success.main))), N(m.Alert, "warningFilledColor", xt(() => m.getContrastText(m.warning.main))), N(m.Alert, "errorStandardBg", Me(m.error.light, 0.9)), N(m.Alert, "infoStandardBg", Me(m.info.light, 0.9)), N(m.Alert, "successStandardBg", Me(m.success.light, 0.9)), N(m.Alert, "warningStandardBg", Me(m.warning.light, 0.9)), N(m.Alert, "errorIconColor", $("palette-error-main")), N(m.Alert, "infoIconColor", $("palette-info-main")), N(m.Alert, "successIconColor", $("palette-success-main")), N(m.Alert, "warningIconColor", $("palette-warning-main")), N(m.AppBar, "defaultBg", $("palette-grey-100")), N(m.Avatar, "defaultBg", $("palette-grey-400")), N(m.Button, "inheritContainedBg", $("palette-grey-300")), N(m.Button, "inheritContainedHoverBg", $("palette-grey-A100")), N(m.Chip, "defaultBorder", $("palette-grey-400")), N(m.Chip, "defaultAvatarColor", $("palette-grey-700")), N(m.Chip, "defaultIconColor", $("palette-grey-700")), N(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(m.LinearProgress, "primaryBg", Me(m.primary.main, 0.62)), N(m.LinearProgress, "secondaryBg", Me(m.secondary.main, 0.62)), N(m.LinearProgress, "errorBg", Me(m.error.main, 0.62)), N(m.LinearProgress, "infoBg", Me(m.info.main, 0.62)), N(m.LinearProgress, "successBg", Me(m.success.main, 0.62)), N(m.LinearProgress, "warningBg", Me(m.warning.main, 0.62)), N(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), N(m.Slider, "primaryTrack", Me(m.primary.main, 0.62)), N(m.Slider, "secondaryTrack", Me(m.secondary.main, 0.62)), N(m.Slider, "errorTrack", Me(m.error.main, 0.62)), N(m.Slider, "infoTrack", Me(m.info.main, 0.62)), N(m.Slider, "successTrack", Me(m.success.main, 0.62)), N(m.Slider, "warningTrack", Me(m.warning.main, 0.62));
      const D = ar(m.background.default, 0.8);
      N(m.SnackbarContent, "bg", D), N(m.SnackbarContent, "color", xt(() => m.getContrastText(D))), N(m.SpeedDialAction, "fabHoverBg", ar(m.background.paper, 0.15)), N(m.StepConnector, "border", $("palette-grey-400")), N(m.StepContent, "border", $("palette-grey-400")), N(m.Switch, "defaultColor", $("palette-common-white")), N(m.Switch, "defaultDisabledColor", $("palette-grey-100")), N(m.Switch, "primaryDisabledColor", Me(m.primary.main, 0.62)), N(m.Switch, "secondaryDisabledColor", Me(m.secondary.main, 0.62)), N(m.Switch, "errorDisabledColor", Me(m.error.main, 0.62)), N(m.Switch, "infoDisabledColor", Me(m.info.main, 0.62)), N(m.Switch, "successDisabledColor", Me(m.success.main, 0.62)), N(m.Switch, "warningDisabledColor", Me(m.warning.main, 0.62)), N(m.TableCell, "border", Me(sr(m.divider, 1), 0.88)), N(m.Tooltip, "bg", sr(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      N(m.Alert, "errorColor", Me(m.error.light, 0.6)), N(m.Alert, "infoColor", Me(m.info.light, 0.6)), N(m.Alert, "successColor", Me(m.success.light, 0.6)), N(m.Alert, "warningColor", Me(m.warning.light, 0.6)), N(m.Alert, "errorFilledBg", $("palette-error-dark")), N(m.Alert, "infoFilledBg", $("palette-info-dark")), N(m.Alert, "successFilledBg", $("palette-success-dark")), N(m.Alert, "warningFilledBg", $("palette-warning-dark")), N(m.Alert, "errorFilledColor", xt(() => m.getContrastText(m.error.dark))), N(m.Alert, "infoFilledColor", xt(() => m.getContrastText(m.info.dark))), N(m.Alert, "successFilledColor", xt(() => m.getContrastText(m.success.dark))), N(m.Alert, "warningFilledColor", xt(() => m.getContrastText(m.warning.dark))), N(m.Alert, "errorStandardBg", Ne(m.error.light, 0.9)), N(m.Alert, "infoStandardBg", Ne(m.info.light, 0.9)), N(m.Alert, "successStandardBg", Ne(m.success.light, 0.9)), N(m.Alert, "warningStandardBg", Ne(m.warning.light, 0.9)), N(m.Alert, "errorIconColor", $("palette-error-main")), N(m.Alert, "infoIconColor", $("palette-info-main")), N(m.Alert, "successIconColor", $("palette-success-main")), N(m.Alert, "warningIconColor", $("palette-warning-main")), N(m.AppBar, "defaultBg", $("palette-grey-900")), N(m.AppBar, "darkBg", $("palette-background-paper")), N(m.AppBar, "darkColor", $("palette-text-primary")), N(m.Avatar, "defaultBg", $("palette-grey-600")), N(m.Button, "inheritContainedBg", $("palette-grey-800")), N(m.Button, "inheritContainedHoverBg", $("palette-grey-700")), N(m.Chip, "defaultBorder", $("palette-grey-700")), N(m.Chip, "defaultAvatarColor", $("palette-grey-300")), N(m.Chip, "defaultIconColor", $("palette-grey-300")), N(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(m.LinearProgress, "primaryBg", Ne(m.primary.main, 0.5)), N(m.LinearProgress, "secondaryBg", Ne(m.secondary.main, 0.5)), N(m.LinearProgress, "errorBg", Ne(m.error.main, 0.5)), N(m.LinearProgress, "infoBg", Ne(m.info.main, 0.5)), N(m.LinearProgress, "successBg", Ne(m.success.main, 0.5)), N(m.LinearProgress, "warningBg", Ne(m.warning.main, 0.5)), N(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), N(m.Slider, "primaryTrack", Ne(m.primary.main, 0.5)), N(m.Slider, "secondaryTrack", Ne(m.secondary.main, 0.5)), N(m.Slider, "errorTrack", Ne(m.error.main, 0.5)), N(m.Slider, "infoTrack", Ne(m.info.main, 0.5)), N(m.Slider, "successTrack", Ne(m.success.main, 0.5)), N(m.Slider, "warningTrack", Ne(m.warning.main, 0.5));
      const D = ar(m.background.default, 0.98);
      N(m.SnackbarContent, "bg", D), N(m.SnackbarContent, "color", xt(() => m.getContrastText(D))), N(m.SpeedDialAction, "fabHoverBg", ar(m.background.paper, 0.15)), N(m.StepConnector, "border", $("palette-grey-600")), N(m.StepContent, "border", $("palette-grey-600")), N(m.Switch, "defaultColor", $("palette-grey-300")), N(m.Switch, "defaultDisabledColor", $("palette-grey-600")), N(m.Switch, "primaryDisabledColor", Ne(m.primary.main, 0.55)), N(m.Switch, "secondaryDisabledColor", Ne(m.secondary.main, 0.55)), N(m.Switch, "errorDisabledColor", Ne(m.error.main, 0.55)), N(m.Switch, "infoDisabledColor", Ne(m.info.main, 0.55)), N(m.Switch, "successDisabledColor", Ne(m.success.main, 0.55)), N(m.Switch, "warningDisabledColor", Ne(m.warning.main, 0.55)), N(m.TableCell, "border", Ne(sr(m.divider, 1), 0.68)), N(m.Tooltip, "bg", sr(m.grey[700], 0.92));
    }
    $t(m.background, "default"), $t(m.background, "paper"), $t(m.common, "background"), $t(m.common, "onBackground"), $t(m, "divider"), Object.keys(m).forEach((D) => {
      const F = m[D];
      F && typeof F == "object" && (F.main && N(m[D], "mainChannel", wn(Rn(F.main))), F.light && N(m[D], "lightChannel", wn(Rn(F.light))), F.dark && N(m[D], "darkChannel", wn(Rn(F.dark))), F.contrastText && N(m[D], "contrastTextChannel", wn(Rn(F.contrastText))), D === "text" && ($t(m[D], "primary"), $t(m[D], "secondary")), D === "action" && (F.active && $t(m[D], "active"), F.selected && $t(m[D], "selected")));
    });
  }), g = t.reduce((L, m) => Ge(L, m), g);
  const x = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: a,
    getSelector: jp(g)
  }, {
    vars: h,
    generateThemeVars: R,
    generateStyleSheets: P
  } = ip(g, x);
  return g.vars = h, Object.entries(g.colorSchemes[g.defaultColorScheme]).forEach(([L, m]) => {
    g[L] = m;
  }), g.generateThemeVars = R, g.generateStyleSheets = P, g.generateSpacing = function() {
    return Wa(c.spacing, Vr(this));
  }, g.getColorSchemeSelector = sp(l), g.spacing = g.generateSpacing(), g.shouldSkipGeneratingVar = a, g.unstable_sxConfig = {
    ...Zn,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, g.unstable_sx = function(m) {
    return Yt({
      sx: m,
      theme: this
    });
  }, g.toRuntimeSource = Dp, g;
}
function Vs(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Si({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Qr(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...a
  } = e, l = s || "light", c = i == null ? void 0 : i[l], u = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return zo(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = zo({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Vs(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Vs(f, "light", u.light)), f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Wp({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const eo = Qr();
function xi() {
  const e = Kr(eo);
  return process.env.NODE_ENV !== "production" && p.useDebugValue(e), e[vt] || e;
}
function vl({
  props: e,
  name: t
}) {
  return Ga({
    props: e,
    name: t,
    defaultTheme: eo,
    themeId: vt
  });
}
function El(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const yt = (e) => El(e) && e !== "classes", se = Ka({
  themeId: vt,
  defaultTheme: eo,
  rootShouldForwardProp: yt
});
function Ws({
  theme: e,
  ...t
}) {
  const n = vt in e ? e[vt] : void 0;
  return /* @__PURE__ */ k.jsx(Bn, {
    ...t,
    themeId: n ? vt : void 0,
    theme: n || e
  });
}
const lr = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: zp,
  useColorScheme: Hg,
  getInitColorSchemeScript: Yg
} = tp({
  themeId: vt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Qr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: lr.colorSchemeStorageKey,
  modeStorageKey: lr.modeStorageKey,
  defaultColorScheme: {
    light: lr.defaultLightColorScheme,
    dark: lr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: gl(e.palette, e.typography)
    };
    return t.unstable_sx = function(o) {
      return Yt({
        sx: o,
        theme: this
      });
    }, t;
  }
}), Up = zp;
function qp({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ k.jsx(Ws, {
    theme: e,
    ...t
  }) : "colorSchemes" in (vt in e ? e[vt] : e) ? /* @__PURE__ */ k.jsx(Up, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ k.jsx(Ws, {
    theme: e,
    ...t
  });
}
function Sl(e) {
  return /* @__PURE__ */ k.jsx(Ua, {
    ...e,
    defaultTheme: eo,
    themeId: vt
  });
}
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool])
});
function Ci(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ k.jsx(Sl, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...n
        }) : e
      })
    );
  };
}
function Hp() {
  return pi;
}
const zs = {
  theme: void 0
};
function De(e) {
  let t, n;
  return (o) => {
    let i = t;
    return (i === void 0 || o.theme !== n) && (zs.theme = o.theme, i = e(zs), t = i, n = o.theme), i;
  };
}
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function Fe(e) {
  return Gf(e);
}
function Yp(e) {
  return Ie("MuiSvgIcon", e);
}
ke("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Kp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return Ae(i, Yp, o);
}, Gp = se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ce(n.color)}`], t[`fontSize${ce(n.fontSize)}`]];
  }
})(De(({
  theme: e
}) => {
  var t, n, o, i, s, a, l, c, u, d, f, b, E, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (o = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (S) => !S.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, S]) => S && S.main).map(([S]) => {
        var v, T;
        return {
          props: {
            color: S
          },
          style: {
            color: (T = (v = (e.vars ?? e).palette) == null ? void 0 : v[S]) == null ? void 0 : T.main
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
          color: (y = (E = (e.vars ?? e).palette) == null ? void 0 : E.action) == null ? void 0 : y.disabled
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
})), Vn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: b = "0 0 24 24",
    ...E
  } = o, y = /* @__PURE__ */ p.isValidElement(i) && i.type === "svg", S = {
    ...o,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: b,
    hasSvgAsChild: y
  }, v = {};
  d || (v.viewBox = b);
  const T = Kp(S);
  return /* @__PURE__ */ k.jsxs(Gp, {
    as: l,
    className: ue(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...v,
    ...E,
    ...y && i.props,
    ownerState: S,
    children: [y ? i.props.children : i, f ? /* @__PURE__ */ k.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
Vn && (Vn.muiName = "SvgIcon");
function Zp(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ k.jsx(Vn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Vn.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function xl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    n[o] = e[o];
  }
  return n;
}
function qo(e, t) {
  return qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, qo(e, t);
}
function Cl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qo(e, t);
}
const Us = {
  disabled: !1
};
var Xp = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const Tr = et.createContext(null);
var Jp = function(t) {
  return t.scrollTop;
}, Pn = "unmounted", Vt = "exited", Wt = "entering", on = "entered", Ho = "exiting", kt = /* @__PURE__ */ function(e) {
  Cl(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, l = a && !a.isMounting ? o.enter : o.appear, c;
    return s.appearStatus = null, o.in ? l ? (c = Vt, s.appearStatus = Wt) : c = on : o.unmountOnExit || o.mountOnEnter ? c = Pn : c = Vt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Pn ? {
      status: Vt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Wt && a !== on && (s = Wt) : (a === Wt || a === on) && (s = Ho);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : On.findDOMNode(this);
          a && Jp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Vt && this.setState({
      status: Pn
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [On.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), b = l ? f.appear : f.enter;
    if (!i && !a || Us.disabled) {
      this.safeSetState({
        status: on
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Wt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(b, function() {
        s.safeSetState({
          status: on
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : On.findDOMNode(this);
    if (!s || Us.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ho
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : On.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Pn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = xl(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ et.createElement(Tr.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : et.cloneElement(et.Children.only(a), l))
    );
  }, t;
}(et.Component);
kt.contextType = Tr;
kt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, s) {
      var a = e[t];
      return r.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, s);
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
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
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
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
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
    var n = Xp;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
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
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function nn() {
}
kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: nn,
  onEntering: nn,
  onEntered: nn,
  onExit: nn,
  onExiting: nn,
  onExited: nn
};
kt.UNMOUNTED = Pn;
kt.EXITED = Vt;
kt.ENTERING = Wt;
kt.ENTERED = on;
kt.EXITING = Ho;
function Qp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ti(e, t) {
  var n = function(s) {
    return t && ur(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && mc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function em(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (o[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (o[c])
      for (a = 0; a < o[c].length; a++) {
        var u = o[c][a];
        l[o[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function zt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function tm(e, t) {
  return Ti(e.children, function(n) {
    return dr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: zt(n, "appear", e),
      enter: zt(n, "enter", e),
      exit: zt(n, "exit", e)
    });
  });
}
function nm(e, t, n) {
  var o = Ti(e.children), i = em(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (ur(a)) {
      var l = s in t, c = s in o, u = t[s], d = ur(u) && !u.props.in;
      c && (!l || d) ? i[s] = dr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }) : !c && l && !d ? i[s] = dr(a, {
        in: !1
      }) : c && l && ur(u) && (i[s] = dr(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }));
    }
  }), i;
}
var rm = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, om = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Oi = /* @__PURE__ */ function(e) {
  Cl(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(Qp(s));
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
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? tm(i, l) : nm(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Ti(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = Er({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = xl(i, ["component", "childFactory"]), c = this.state.contextValue, u = rm(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ et.createElement(Tr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ et.createElement(Tr.Provider, {
      value: c
    }, /* @__PURE__ */ et.createElement(s, l, u));
  }, t;
}(et.Component);
Oi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
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
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
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
  childFactory: r.func
} : {};
Oi.defaultProps = om;
const Tl = (e) => e.scrollTop;
function Or(e, t) {
  const {
    timeout: n,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function im(e) {
  return Ie("MuiPaper", e);
}
ke("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const sm = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return Ae(s, im, i);
}, am = se("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(De(({
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
}))), wi = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var E;
  const o = Fe({
    props: t,
    name: "MuiPaper"
  }), i = xi(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...d
  } = o, f = {
    ...o,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, b = sm(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ k.jsx(am, {
    as: a,
    ownerState: f,
    className: ue(b.root, s),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (E = i.vars.overlays) == null ? void 0 : E[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ht("#fff", Uo(l))}, ${ht("#fff", Uo(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Xn(il, (e) => {
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
  square: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
function bt(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: i,
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
  } = s, E = d[e] || o, y = cl(f[e], i), {
    props: {
      component: S,
      ...v
    },
    internalRef: T
  } = ll({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? b : void 0,
    externalSlotProps: y
  }), O = Xe(T, y == null ? void 0 : y.ref, t.ref), g = a ? a(v) : {}, x = {
    ...i,
    ...g
  }, h = e === "root" ? S || u : S, R = sl(E, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...v,
    ...h && {
      as: h
    },
    ref: O
  }, x);
  return Object.keys(g).forEach((P) => {
    delete R[P];
  }), [E, R];
}
class wr {
  constructor() {
    gn(this, "mountEffect", () => {
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
    return new wr();
  }
  static use() {
    const t = el(wr.create).current, [n, o] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, p.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = cm(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function lm() {
  return wr.use();
}
function cm() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Ol(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = p.useState(!1), b = ue(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = ue(n.child, d && n.childLeaving, o && n.childPulsate);
  return !l && !d && f(!0), p.useEffect(() => {
    if (!l && c != null) {
      const S = setTimeout(c, u);
      return () => {
        clearTimeout(S);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ k.jsx("span", {
    className: b,
    style: E,
    children: /* @__PURE__ */ k.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const pt = ke("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Yo = 550, um = 80, dm = pn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, fm = pn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, pm = pn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, mm = se("span", {
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
}), hm = se(Ol, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${pt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${dm};
    animation-duration: ${Yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${pt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${pt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${pt.childLeaving} {
    opacity: 0;
    animation-name: ${fm};
    animation-duration: ${Yo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${pt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, wl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = o, [c, u] = p.useState([]), d = p.useRef(0), f = p.useRef(null);
  p.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const b = p.useRef(!1), E = tl(), y = p.useRef(null), S = p.useRef(null), v = p.useCallback((x) => {
    const {
      pulsate: h,
      rippleX: R,
      rippleY: P,
      rippleSize: L,
      cb: m
    } = x;
    u(($) => [...$, /* @__PURE__ */ k.jsx(hm, {
      classes: {
        ripple: ue(s.ripple, pt.ripple),
        rippleVisible: ue(s.rippleVisible, pt.rippleVisible),
        ripplePulsate: ue(s.ripplePulsate, pt.ripplePulsate),
        child: ue(s.child, pt.child),
        childLeaving: ue(s.childLeaving, pt.childLeaving),
        childPulsate: ue(s.childPulsate, pt.childPulsate)
      },
      timeout: Yo,
      pulsate: h,
      rippleX: R,
      rippleY: P,
      rippleSize: L
    }, d.current)]), d.current += 1, f.current = m;
  }, [s]), T = p.useCallback((x = {}, h = {}, R = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: L = i || h.pulsate,
      fakeElement: m = !1
      // For test purposes
    } = h;
    if ((x == null ? void 0 : x.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (b.current = !0);
    const $ = m ? null : S.current, D = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, W, B;
    if (L || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      F = Math.round(D.width / 2), W = Math.round(D.height / 2);
    else {
      const {
        clientX: V,
        clientY: j
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      F = Math.round(V - D.left), W = Math.round(j - D.top);
    }
    if (L)
      B = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3), B % 2 === 0 && (B += 1);
    else {
      const V = Math.max(Math.abs(($ ? $.clientWidth : 0) - F), F) * 2 + 2, j = Math.max(Math.abs(($ ? $.clientHeight : 0) - W), W) * 2 + 2;
      B = Math.sqrt(V ** 2 + j ** 2);
    }
    x != null && x.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: P,
        rippleX: F,
        rippleY: W,
        rippleSize: B,
        cb: R
      });
    }, E.start(um, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: P,
      rippleX: F,
      rippleY: W,
      rippleSize: B,
      cb: R
    });
  }, [i, v, E]), O = p.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), g = p.useCallback((x, h) => {
    if (E.clear(), (x == null ? void 0 : x.type) === "touchend" && y.current) {
      y.current(), y.current = null, E.start(0, () => {
        g(x, h);
      });
      return;
    }
    y.current = null, u((R) => R.length > 0 ? R.slice(1) : R), f.current = h;
  }, [E]);
  return p.useImperativeHandle(n, () => ({
    pulsate: O,
    start: T,
    stop: g
  }), [O, T, g]), /* @__PURE__ */ k.jsx(mm, {
    className: ue(pt.root, s.root, a),
    ref: S,
    ...l,
    children: /* @__PURE__ */ k.jsx(Oi, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
function gm(e) {
  return Ie("MuiButtonBase", e);
}
const ym = ke("MuiButtonBase", ["root", "disabled", "focusVisible"]), bm = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, a = Ae({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, gm, i);
  return n && o && (a.root += ` ${o}`), a;
}, vm = se("button", {
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
  [`&.${ym.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ri = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: b = !1,
    focusVisibleClassName: E,
    LinkComponent: y = "a",
    onBlur: S,
    onClick: v,
    onContextMenu: T,
    onDragLeave: O,
    onFocus: g,
    onFocusVisible: x,
    onKeyDown: h,
    onKeyUp: R,
    onMouseDown: P,
    onMouseLeave: L,
    onMouseUp: m,
    onTouchEnd: $,
    onTouchMove: D,
    onTouchStart: F,
    tabIndex: W = 0,
    TouchRippleProps: B,
    touchRippleRef: V,
    type: j,
    ...H
  } = o, Y = p.useRef(null), ne = lm(), M = Xe(ne.ref, V), [_, Z] = p.useState(!1);
  u && _ && Z(!1), p.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Z(!0), Y.current.focus();
    }
  }), []);
  const q = ne.shouldMount && !d && !u;
  p.useEffect(() => {
    _ && b && !d && ne.pulsate();
  }, [d, b, _, ne]);
  function z(re, Ve, st = f) {
    return sn((me) => (Ve && Ve(me), st || ne[re](me), !0));
  }
  const J = z("start", P), G = z("stop", T), X = z("stop", O), ee = z("stop", m), Q = z("stop", (re) => {
    _ && re.preventDefault(), L && L(re);
  }), U = z("start", F), te = z("stop", $), w = z("stop", D), oe = z("stop", (re) => {
    ks(re.target) || Z(!1), S && S(re);
  }, !1), I = sn((re) => {
    Y.current || (Y.current = re.currentTarget), ks(re.target) && (Z(!0), x && x(re)), g && g(re);
  }), ae = () => {
    const re = Y.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, fe = sn((re) => {
    b && !re.repeat && _ && re.key === " " && ne.stop(re, () => {
      ne.start(re);
    }), re.target === re.currentTarget && ae() && re.key === " " && re.preventDefault(), h && h(re), re.target === re.currentTarget && ae() && re.key === "Enter" && !u && (re.preventDefault(), v && v(re));
  }), _e = sn((re) => {
    b && re.key === " " && _ && !re.defaultPrevented && ne.stop(re, () => {
      ne.pulsate(re);
    }), R && R(re), v && re.target === re.currentTarget && ae() && re.key === " " && !re.defaultPrevented && v(re);
  });
  let Be = c;
  Be === "button" && (H.href || H.to) && (Be = y);
  const Pe = {};
  Be === "button" ? (Pe.type = j === void 0 ? "button" : j, Pe.disabled = u) : (!H.href && !H.to && (Pe.role = "button"), u && (Pe["aria-disabled"] = u));
  const tt = Xe(n, Y), Ee = {
    ...o,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: b,
    tabIndex: W,
    focusVisible: _
  }, Je = bm(Ee);
  return /* @__PURE__ */ k.jsxs(vm, {
    as: Be,
    className: ue(Je.root, l),
    ownerState: Ee,
    onBlur: oe,
    onClick: v,
    onContextMenu: G,
    onFocus: I,
    onKeyDown: fe,
    onKeyUp: _e,
    onMouseDown: J,
    onMouseLeave: Q,
    onMouseUp: ee,
    onDragLeave: X,
    onTouchEnd: te,
    onTouchMove: w,
    onTouchStart: U,
    ref: tt,
    tabIndex: u ? -1 : W,
    type: j,
    ...Pe,
    ...H,
    children: [a, q ? /* @__PURE__ */ k.jsx(wl, {
      ref: M,
      center: s,
      ...B
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Nt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: hi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
function Em(e) {
  return typeof e.main == "string";
}
function Sm(e, t = []) {
  if (!Em(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function St(e = []) {
  return ([, t]) => t && Sm(t, e);
}
function xm(e) {
  return Ie("MuiTypography", e);
}
ke("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Cm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Tm = Hp(), Om = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ce(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return Ae(l, xm, a);
}, wm = se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ce(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(De(({
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
    }, ...Object.entries(e.typography).filter(([n, o]) => n !== "inherit" && o && typeof o == "object").map(([n, o]) => ({
      props: {
        variant: n
      },
      style: o
    })), ...Object.entries(e.palette).filter(St()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ce(n)}`
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
})), qs = {
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
}, Rl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    color: o,
    ...i
  } = Fe({
    props: t,
    name: "MuiTypography"
  }), s = !Cm[o], a = Tm({
    ...i,
    ...s && {
      color: o
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: b = !1,
    variant: E = "body1",
    variantMapping: y = qs,
    ...S
  } = a, v = {
    ...a,
    align: l,
    color: o,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: b,
    variant: E,
    variantMapping: y
  }, T = u || (b ? "p" : y[E] || qs[E]) || "span", O = Om(v);
  return /* @__PURE__ */ k.jsx(wm, {
    as: T,
    ref: n,
    className: ue(O.root, c),
    ...S,
    ownerState: v,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...S.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: r.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: r.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: r.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: r.oneOfType([r.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), r.string]),
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
  variantMapping: r.object
});
function Rm(e) {
  return typeof e == "function" ? e() : e;
}
const Rr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = p.useState(null), c = Xe(Qn(o), n);
  if (Lt(() => {
    s || l(Rm(i) || document.body);
  }, [i, s]), Lt(() => {
    if (a && !s)
      return Vo(n, a), () => {
        Vo(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ p.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ p.cloneElement(o, u);
    }
    return /* @__PURE__ */ k.jsx(p.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ k.jsx(p.Fragment, {
    children: a && /* @__PURE__ */ bc.createPortal(o, a)
  });
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
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
  container: r.oneOfType([Fn, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = Jr(Rr.propTypes));
function cr(e) {
  return parseInt(e, 10) || 0;
}
const Pm = {
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
function km(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Pl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = p.useRef(l != null), d = p.useRef(null), f = Xe(n, d), b = p.useRef(null), E = p.useRef(null), y = p.useCallback(() => {
    const T = d.current, g = Ht(T).getComputedStyle(T);
    if (g.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const x = E.current;
    x.style.width = g.width, x.value = T.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const h = g.boxSizing, R = cr(g.paddingBottom) + cr(g.paddingTop), P = cr(g.borderBottomWidth) + cr(g.borderTopWidth), L = x.scrollHeight;
    x.value = "x";
    const m = x.scrollHeight;
    let $ = L;
    s && ($ = Math.max(Number(s) * m, $)), i && ($ = Math.min(Number(i) * m, $)), $ = Math.max($, m);
    const D = $ + (h === "border-box" ? R + P : 0), F = Math.abs($ - L) <= 1;
    return {
      outerHeightStyle: D,
      overflowing: F
    };
  }, [i, s, t.placeholder]), S = p.useCallback(() => {
    const T = y();
    if (km(T))
      return;
    const O = T.outerHeightStyle, g = d.current;
    b.current !== O && (b.current = O, g.style.height = `${O}px`), g.style.overflow = T.overflowing ? "hidden" : "";
  }, [y]);
  Lt(() => {
    const T = () => {
      S();
    };
    let O;
    const g = () => {
      cancelAnimationFrame(O), O = requestAnimationFrame(() => {
        T();
      });
    }, x = Ja(T), h = d.current, R = Ht(h);
    R.addEventListener("resize", x);
    let P;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(process.env.NODE_ENV === "test" ? g : T), P.observe(h)), () => {
      x.clear(), cancelAnimationFrame(O), R.removeEventListener("resize", x), P && P.disconnect();
    };
  }, [y, S]), Lt(() => {
    S();
  });
  const v = (T) => {
    u || S(), o && o(T);
  };
  return /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ k.jsx("textarea", {
      value: l,
      onChange: v,
      ref: f,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ k.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: E,
      tabIndex: -1,
      style: {
        ...Pm.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  onChange: r.func,
  /**
   * @ignore
   */
  placeholder: r.string,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * @ignore
   */
  value: r.oneOfType([r.arrayOf(r.string), r.number, r.string])
});
function Ko(e) {
  return typeof e == "string";
}
function mn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, i) => (o[i] = e[i], n && typeof e[i] > "u" && (o[i] = n[i]), o), {});
}
const to = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (to.displayName = "FormControlContext");
function hn() {
  return p.useContext(to);
}
function Hs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Pr(e, t = !1) {
  return e && (Hs(e.value) && e.value !== "" || t && Hs(e.defaultValue) && e.defaultValue !== "");
}
function $m(e) {
  return e.startAdornment;
}
function Nm(e) {
  return Ie("MuiInputBase", e);
}
const dn = ke("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ys;
const no = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ro = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Mm = (e) => {
  const {
    classes: t,
    color: n,
    disabled: o,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: b,
    startAdornment: E,
    type: y
  } = e, S = {
    root: ["root", `color${ce(n)}`, o && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", b && b !== "medium" && `size${ce(b)}`, d && "multiline", E && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", o && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", b === "small" && "inputSizeSmall", u && "inputHiddenLabel", E && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return Ae(S, Nm, t);
}, oo = se("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: no
})(De(({
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
  [`&.${dn.disabled}`]: {
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
}))), io = se("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ro
})(De(({
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
  }, o = {
    opacity: "0 !important"
  }, i = e.vars ? {
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
    [`label[data-shrink=false] + .${dn.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${dn.disabled}`]: {
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
})), Ks = Ci({
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
}), kl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: b,
    disableInjectingGlobalStyles: E,
    endAdornment: y,
    error: S,
    fullWidth: v = !1,
    id: T,
    inputComponent: O = "input",
    inputProps: g = {},
    inputRef: x,
    margin: h,
    maxRows: R,
    minRows: P,
    multiline: L = !1,
    name: m,
    onBlur: $,
    onChange: D,
    onClick: F,
    onFocus: W,
    onKeyDown: B,
    onKeyUp: V,
    placeholder: j,
    readOnly: H,
    renderSuffix: Y,
    rows: ne,
    size: M,
    slotProps: _ = {},
    slots: Z = {},
    startAdornment: q,
    type: z = "text",
    value: J,
    ...G
  } = o, X = g.value != null ? g.value : J, {
    current: ee
  } = p.useRef(X != null), Q = p.useRef(), U = p.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = Xe(Q, x, g.ref, U), [w, oe] = p.useState(!1), I = hn();
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (I)
      return I.registerEffect();
  }, [I]);
  const ae = mn({
    props: o,
    muiFormControl: I,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ae.focused = I ? I.focused : w, p.useEffect(() => {
    !I && b && w && (oe(!1), $ && $());
  }, [I, b, w, $]);
  const fe = I && I.onFilled, _e = I && I.onEmpty, Be = p.useCallback((ye) => {
    Pr(ye) ? fe && fe() : _e && _e();
  }, [fe, _e]);
  Lt(() => {
    ee && Be({
      value: X
    });
  }, [X, Be, ee]);
  const Pe = (ye) => {
    W && W(ye), g.onFocus && g.onFocus(ye), I && I.onFocus ? I.onFocus(ye) : oe(!0);
  }, tt = (ye) => {
    $ && $(ye), g.onBlur && g.onBlur(ye), I && I.onBlur ? I.onBlur(ye) : oe(!1);
  }, Ee = (ye, ...Mt) => {
    if (!ee) {
      const Dt = ye.target || Q.current;
      if (Dt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Pt(1));
      Be({
        value: Dt.value
      });
    }
    g.onChange && g.onChange(ye, ...Mt), D && D(ye, ...Mt);
  };
  p.useEffect(() => {
    Be(Q.current);
  }, []);
  const Je = (ye) => {
    Q.current && ye.currentTarget === ye.target && Q.current.focus(), F && F(ye);
  };
  let re = O, Ve = g;
  L && re === "input" && (ne ? (process.env.NODE_ENV !== "production" && (P || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ve = {
    type: void 0,
    minRows: ne,
    maxRows: ne,
    ...Ve
  }) : Ve = {
    type: void 0,
    maxRows: R,
    minRows: P,
    ...Ve
  }, re = Pl);
  const st = (ye) => {
    Be(ye.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    I && I.setAdornedStart(!!q);
  }, [I, q]);
  const me = {
    ...o,
    color: ae.color || "primary",
    disabled: ae.disabled,
    endAdornment: y,
    error: ae.error,
    focused: ae.focused,
    formControl: I,
    fullWidth: v,
    hiddenLabel: ae.hiddenLabel,
    multiline: L,
    size: ae.size,
    startAdornment: q,
    type: z
  }, pe = Mm(me), at = Z.root || u.Root || oo, dt = _.root || d.root || {}, rt = Z.input || u.Input || io;
  return Ve = {
    ...Ve,
    ..._.input ?? d.input
  }, /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [!E && typeof Ks == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ys || (Ys = /* @__PURE__ */ k.jsx(Ks, {}))), /* @__PURE__ */ k.jsxs(at, {
      ...dt,
      ref: n,
      onClick: Je,
      ...G,
      ...!Ko(at) && {
        ownerState: {
          ...me,
          ...dt.ownerState
        }
      },
      className: ue(pe.root, dt.className, l, H && "MuiInputBase-readOnly"),
      children: [q, /* @__PURE__ */ k.jsx(to.Provider, {
        value: null,
        children: /* @__PURE__ */ k.jsx(rt, {
          "aria-invalid": ae.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: ae.disabled,
          id: T,
          onAnimationStart: st,
          name: m,
          placeholder: j,
          readOnly: H,
          required: ae.required,
          rows: ne,
          value: X,
          onKeyDown: B,
          onKeyUp: V,
          type: z,
          ...Ve,
          ...!Ko(rt) && {
            as: re,
            ownerState: {
              ...me,
              ...Ve.ownerState
            }
          },
          ref: te,
          className: ue(pe.input, Ve.className, H && "MuiInputBase-readOnly"),
          onBlur: tt,
          onChange: Ee,
          onFocus: Pe
        })
      }), y, Y ? Y({
        ...ae,
        startAdornment: q
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": r.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: hi,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: r.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * @ignore
   */
  renderSuffix: r.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The size of the component.
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
const Pi = kl;
function Im(e) {
  return Ie("MuiInput", e);
}
const Sn = {
  ...dn,
  ...ke("MuiInput", ["root", "underline", "input"])
};
function _m(e) {
  return Ie("MuiOutlinedInput", e);
}
const Ct = {
  ...dn,
  ...ke("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Lm(e) {
  return Ie("MuiFilledInput", e);
}
const Bt = {
  ...dn,
  ...ke("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, jm = Zp(/* @__PURE__ */ k.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Am = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, $l = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = xi(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: b,
    onExit: E,
    onExited: y,
    onExiting: S,
    style: v,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = kt,
    ...g
  } = t, x = p.useRef(null), h = Xe(x, Qn(l), n), R = (B) => (V) => {
    if (B) {
      const j = x.current;
      V === void 0 ? B(j) : B(j, V);
    }
  }, P = R(b), L = R((B, V) => {
    Tl(B);
    const j = Or({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    B.style.webkitTransition = o.transitions.create("opacity", j), B.style.transition = o.transitions.create("opacity", j), d && d(B, V);
  }), m = R(f), $ = R(S), D = R((B) => {
    const V = Or({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    B.style.webkitTransition = o.transitions.create("opacity", V), B.style.transition = o.transitions.create("opacity", V), E && E(B);
  }), F = R(y), W = (B) => {
    s && s(x.current, B);
  };
  return /* @__PURE__ */ k.jsx(O, {
    appear: a,
    in: u,
    nodeRef: x,
    onEnter: L,
    onEntered: m,
    onEntering: P,
    onExit: D,
    onExited: F,
    onExiting: $,
    addEndListener: W,
    timeout: T,
    ...g,
    children: (B, V) => /* @__PURE__ */ p.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: B === "exited" && !u ? "hidden" : void 0,
        ...Am[B],
        ...v,
        ...l.props.style
      },
      ref: h,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Jn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function Dm(e) {
  return Ie("MuiBackdrop", e);
}
ke("MuiBackdrop", ["root", "invisible"]);
const Fm = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ae({
    root: ["root", n && "invisible"]
  }, Dm, t);
}, Bm = se("div", {
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
}), Nl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: d = {},
    slotProps: f = {},
    slots: b = {},
    TransitionComponent: E,
    transitionDuration: y,
    ...S
  } = o, v = {
    ...o,
    component: a,
    invisible: l
  }, T = Fm(v), O = {
    transition: E,
    root: u.Root,
    ...b
  }, g = {
    ...d,
    ...f
  }, x = {
    slots: O,
    slotProps: g
  }, [h, R] = bt("root", {
    elementType: Bm,
    externalForwardedProps: x,
    className: ue(T.root, s),
    ownerState: v
  }), [P, L] = bt("transition", {
    elementType: $l,
    externalForwardedProps: x,
    ownerState: v
  });
  return delete L.ownerState, /* @__PURE__ */ k.jsx(P, {
    in: c,
    timeout: y,
    ...S,
    ...L,
    children: /* @__PURE__ */ k.jsx(h, {
      "aria-hidden": !0,
      ...R,
      classes: T,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const Vm = ke("MuiBox", ["root"]), Wm = Qr(), Ml = Sf({
  themeId: vt,
  defaultTheme: Wm,
  defaultClassName: Vm.root,
  generateClassName: qa.generate
});
process.env.NODE_ENV !== "production" && (Ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function zm(e) {
  return Ie("MuiButton", e);
}
const rn = ke("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Il = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Il.displayName = "ButtonGroupContext");
const _l = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (_l.displayName = "ButtonGroupButtonContext");
const Um = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${ce(t)}`, `size${ce(i)}`, `${s}Size${ce(i)}`, `color${ce(t)}`, n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ce(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${ce(i)}`]
  }, c = Ae(l, zm, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, Ll = [{
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
}], qm = se(Ri, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ce(n.color)}`], t[`size${ce(n.size)}`], t[`${n.variant}Size${ce(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(De(({
  theme: e
}) => {
  var o, i;
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
    [`&.${rn.disabled}`]: {
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
        [`&.${rn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${rn.disabled}`]: {
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
        [`&.${rn.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(St(["dark", "contrastText"])).map(([s]) => ({
      props: {
        color: s
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[s].main,
        "--variant-outlinedColor": (e.vars || e).palette[s].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)` : ht(e.palette[s].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[s].contrastText,
        "--variant-containedBg": (e.vars || e).palette[s].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[s].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette[s].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[s].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette[s].main, e.palette.action.hoverOpacity)
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
        ) : (i = (o = e.palette).getContrastText) == null ? void 0 : i.call(o, t),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${rn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${rn.disabled}`]: {
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
})), Hm = se("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${ce(n.size)}`]];
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
  }, ...Ll]
}), Ym = se("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${ce(n.size)}`]];
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
  }, ...Ll]
}), Go = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = p.useContext(Il), i = p.useContext(_l), s = Dn(o, t), a = Fe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: b = !1,
    disableFocusRipple: E = !1,
    endIcon: y,
    focusVisibleClassName: S,
    fullWidth: v = !1,
    size: T = "medium",
    startIcon: O,
    type: g,
    variant: x = "text",
    ...h
  } = a, R = {
    ...a,
    color: c,
    component: u,
    disabled: f,
    disableElevation: b,
    disableFocusRipple: E,
    fullWidth: v,
    size: T,
    type: g,
    variant: x
  }, P = Um(R), L = O && /* @__PURE__ */ k.jsx(Hm, {
    className: P.startIcon,
    ownerState: R,
    children: O
  }), m = y && /* @__PURE__ */ k.jsx(Ym, {
    className: P.endIcon,
    ownerState: R,
    children: y
  }), $ = i || "";
  return /* @__PURE__ */ k.jsxs(qm, {
    ownerState: R,
    className: ue(o.className, P.root, d, $),
    component: u,
    disabled: f,
    focusRipple: !E,
    focusVisibleClassName: ue(P.focusVisible, S),
    ref: n,
    type: g,
    ...h,
    classes: P,
    children: [L, l, m]
  });
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * Element placed after the children.
   */
  endIcon: r.node,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * Element placed before the children.
   */
  startIcon: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: r.oneOfType([r.oneOf(["contained", "outlined", "text"]), r.string])
});
const Zo = typeof Ci({}) == "function", Km = (e, t) => ({
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
}), Gm = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), jl = (e, t = !1) => {
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
  let o = {
    html: Km(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Gm(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const i = (a = (s = e.components) == null ? void 0 : s.MuiCssBaseline) == null ? void 0 : a.styleOverrides;
  return i && (o = [o, i]), o;
}, gr = "mui-ecs", Zm = (e) => {
  const t = jl(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${gr})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, i]) => {
    var a, l;
    const s = e.getColorSchemeSelector(o);
    s.startsWith("@") ? n[s] = {
      [`:root:not(:has(.${gr}))`]: {
        colorScheme: (a = i.palette) == null ? void 0 : a.mode
      }
    } : n[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${gr}))`]: {
        colorScheme: (l = i.palette) == null ? void 0 : l.mode
      }
    };
  }), t;
}, Xm = Ci(Zo ? ({
  theme: e,
  enableColorScheme: t
}) => jl(e, t) : ({
  theme: e
}) => Zm(e));
function Al(e) {
  const t = Fe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: o = !1
  } = t;
  return /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [Zo && /* @__PURE__ */ k.jsx(Xm, {
      enableColorScheme: o
    }), !Zo && !o && /* @__PURE__ */ k.jsx("span", {
      className: gr,
      style: {
        display: "none"
      }
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: r.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: r.bool
});
function Jm(e) {
  const t = ut(e);
  return t.body === e ? Ht(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function $n(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Gs(e) {
  return parseInt(Ht(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Qm(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Zs(e, t, n, o, i) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Qm(a);
    l && c && $n(a, i);
  });
}
function Oo(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function eh(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Jm(o)) {
      const a = nl(ut(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Gs(o) + a}px`;
      const l = ut(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Gs(c) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = ut(o).body;
    else {
      const a = o.parentElement, l = Ht(o);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : o;
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
function th(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class nh {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && $n(t.modalRef, !1);
    const i = th(n);
    Zs(n, t.mount, t.modalRef, i, !0);
    const s = Oo(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Oo(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    i.restore || (i.restore = eh(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Oo(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && $n(t.modalRef, n), Zs(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && $n(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const rh = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function oh(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ih(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function sh(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ih(e));
}
function ah(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(rh)).forEach((o, i) => {
    const s = oh(o);
    s === -1 || !sh(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function lh() {
  return !0;
}
function kr(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = ah,
    isEnabled: a = lh,
    open: l
  } = e, c = p.useRef(!1), u = p.useRef(null), d = p.useRef(null), f = p.useRef(null), b = p.useRef(null), E = p.useRef(!1), y = p.useRef(null), S = Xe(Qn(t), y), v = p.useRef(null);
  p.useEffect(() => {
    !l || !y.current || (E.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (!l || !y.current)
      return;
    const g = ut(y.current);
    return y.current.contains(g.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), E.current && y.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !y.current)
      return;
    const g = ut(y.current), x = (P) => {
      v.current = P, !(o || !a() || P.key !== "Tab") && g.activeElement === y.current && P.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, h = () => {
      var m, $;
      const P = y.current;
      if (P === null)
        return;
      if (!g.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (P.contains(g.activeElement) || o && g.activeElement !== u.current && g.activeElement !== d.current)
        return;
      if (g.activeElement !== b.current)
        b.current = null;
      else if (b.current !== null)
        return;
      if (!E.current)
        return;
      let L = [];
      if ((g.activeElement === u.current || g.activeElement === d.current) && (L = s(y.current)), L.length > 0) {
        const D = !!((m = v.current) != null && m.shiftKey && (($ = v.current) == null ? void 0 : $.key) === "Tab"), F = L[0], W = L[L.length - 1];
        typeof F != "string" && typeof W != "string" && (D ? W.focus() : F.focus());
      } else
        P.focus();
    };
    g.addEventListener("focusin", h), g.addEventListener("keydown", x, !0);
    const R = setInterval(() => {
      g.activeElement && g.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(R), g.removeEventListener("focusin", h), g.removeEventListener("keydown", x, !0);
    };
  }, [n, o, i, a, l, s]);
  const T = (g) => {
    f.current === null && (f.current = g.relatedTarget), E.current = !0, b.current = g.target;
    const x = t.props.onFocus;
    x && x(g);
  }, O = (g) => {
    f.current === null && (f.current = g.relatedTarget), E.current = !0;
  };
  return /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: S,
      onFocus: T
    }), /* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (kr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Jn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (kr.propTypes = Jr(kr.propTypes));
function ch(e) {
  return typeof e == "function" ? e() : e;
}
function uh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const dh = new nh();
function fh(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = dh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, b = p.useRef({}), E = p.useRef(null), y = p.useRef(null), S = Xe(y, f), [v, T] = p.useState(!d), O = uh(c);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const x = () => ut(E.current), h = () => (b.current.modalRef = y.current, b.current.mount = E.current, b.current), R = () => {
    i.mount(h(), {
      disableScrollLock: o
    }), y.current && (y.current.scrollTop = 0);
  }, P = sn(() => {
    const j = ch(t) || x().body;
    i.add(h(), j), y.current && R();
  }), L = p.useCallback(() => i.isTopModal(h()), [i]), m = sn((j) => {
    E.current = j, j && (d && L() ? R() : y.current && $n(y.current, g));
  }), $ = p.useCallback(() => {
    i.remove(h(), g);
  }, [g, i]);
  p.useEffect(() => () => {
    $();
  }, [$]), p.useEffect(() => {
    d ? P() : (!O || !s) && $();
  }, [d, $, O, s, P]);
  const D = (j) => (H) => {
    var Y;
    (Y = j.onKeyDown) == null || Y.call(j, H), !(H.key !== "Escape" || H.which === 229 || // Wait until IME is settled.
    !L()) && (n || (H.stopPropagation(), u && u(H, "escapeKeyDown")));
  }, F = (j) => (H) => {
    var Y;
    (Y = j.onClick) == null || Y.call(j, H), H.target === H.currentTarget && u && u(H, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const H = al(e);
      delete H.onTransitionEnter, delete H.onTransitionExited;
      const Y = {
        ...H,
        ...j
      };
      return {
        role: "presentation",
        ...Y,
        onKeyDown: D(Y),
        ref: S
      };
    },
    getBackdropProps: (j = {}) => {
      const H = j;
      return {
        "aria-hidden": !0,
        ...H,
        onClick: F(H),
        open: d
      };
    },
    getTransitionProps: () => {
      const j = () => {
        T(!1), a && a();
      }, H = () => {
        T(!0), l && l(), s && $();
      };
      return {
        onEnter: Ts(j, c == null ? void 0 : c.props.onEnter),
        onExited: Ts(H, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: S,
    portalRef: m,
    isTopModal: L,
    exited: v,
    hasTransition: O
  };
}
function ph(e) {
  return Ie("MuiModal", e);
}
ke("MuiModal", ["root", "hidden", "backdrop"]);
const mh = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return Ae({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ph, o);
}, hh = se("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(De(({
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
}))), gh = se(Nl, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Dl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = gh,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: f,
    components: b = {},
    componentsProps: E = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: T = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: g = !1,
    hideBackdrop: x = !1,
    keepMounted: h = !1,
    onBackdropClick: R,
    onClose: P,
    onTransitionEnter: L,
    onTransitionExited: m,
    open: $,
    slotProps: D = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: W,
    ...B
  } = o, V = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: S,
    disableEscapeKeyDown: v,
    disablePortal: T,
    disableRestoreFocus: O,
    disableScrollLock: g,
    hideBackdrop: x,
    keepMounted: h
  }, {
    getRootProps: j,
    getBackdropProps: H,
    getTransitionProps: Y,
    portalRef: ne,
    isTopModal: M,
    exited: _,
    hasTransition: Z
  } = fh({
    ...V,
    rootRef: n
  }), q = {
    ...V,
    exited: _
  }, z = mh(q), J = {};
  if (u.props.tabIndex === void 0 && (J.tabIndex = "-1"), Z) {
    const {
      onEnter: w,
      onExited: oe
    } = Y();
    J.onEnter = w, J.onExited = oe;
  }
  const G = {
    slots: {
      root: b.Root,
      backdrop: b.Backdrop,
      ...F
    },
    slotProps: {
      ...E,
      ...D
    }
  }, [X, ee] = bt("root", {
    elementType: hh,
    externalForwardedProps: G,
    getSlotProps: j,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: q,
    className: ue(l, z == null ? void 0 : z.root, !q.open && q.exited && (z == null ? void 0 : z.hidden))
  }), [Q, U] = bt("backdrop", {
    elementType: i,
    externalForwardedProps: G,
    additionalProps: s,
    getSlotProps: (w) => H({
      ...w,
      onClick: (oe) => {
        R && R(oe), w != null && w.onClick && w.onClick(oe);
      }
    }),
    className: ue(s == null ? void 0 : s.className, z == null ? void 0 : z.backdrop),
    ownerState: q
  }), te = Xe(s == null ? void 0 : s.ref, U.ref);
  return !h && !$ && (!Z || _) ? null : /* @__PURE__ */ k.jsx(Rr, {
    ref: ne,
    container: d,
    disablePortal: T,
    children: /* @__PURE__ */ k.jsxs(X, {
      ...ee,
      ...B,
      children: [!x && i ? /* @__PURE__ */ k.jsx(Q, {
        ...U,
        ref: te
      }) : null, /* @__PURE__ */ k.jsx(kr, {
        disableEnforceFocus: S,
        disableAutoFocus: y,
        disableRestoreFocus: O,
        isEnabled: M,
        open: $,
        children: /* @__PURE__ */ p.cloneElement(u, J)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: Jn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
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
  container: r.oneOfType([Fn, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Xs = ke("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), yh = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: o,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", o && "adornedStart", i && "adornedEnd", s === "small" && `size${ce(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = Ae(c, Lm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, bh = se(oo, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...no(e, t), !n.disableUnderline && t.underline];
  }
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
      }
    },
    [`&.${Bt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
    },
    [`&.${Bt.disabled}`]: {
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
        [`&.${Bt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Bt.error}`]: {
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
        [`&:hover:not(.${Bt.disabled}, .${Bt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Bt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(St()).map(([a]) => {
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
})), vh = se(io, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ro
})(De(({
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
}))), Wn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: d = !1,
    slotProps: f,
    slots: b = {},
    type: E = "text",
    ...y
  } = o, S = {
    ...o,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: E
  }, v = yh(o), T = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, O = f ?? a ? Ge(T, f ?? a) : T, g = b.root ?? s.Root ?? bh, x = b.input ?? s.Input ?? vh;
  return /* @__PURE__ */ k.jsx(Pi, {
    slots: {
      root: g,
      input: x
    },
    componentsProps: O,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: E,
    ...y,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
Wn && (Wn.muiName = "Input");
function Eh(e) {
  return Ie("MuiFormControl", e);
}
ke("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Sh = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, i = {
    root: ["root", n !== "none" && `margin${ce(n)}`, o && "fullWidth"]
  };
  return Ae(i, Eh, t);
}, xh = se("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${ce(e.margin)}`],
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
}), ki = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: b = !1,
    margin: E = "none",
    required: y = !1,
    size: S = "medium",
    variant: v = "outlined",
    ...T
  } = o, O = {
    ...o,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: b,
    margin: E,
    required: y,
    size: S,
    variant: v
  }, g = Sh(O), [x, h] = p.useState(() => {
    let W = !1;
    return i && p.Children.forEach(i, (B) => {
      if (!Eo(B, ["Input", "Select"]))
        return;
      const V = Eo(B, ["Select"]) ? B.props.input : B;
      V && $m(V.props) && (W = !0);
    }), W;
  }), [R, P] = p.useState(() => {
    let W = !1;
    return i && p.Children.forEach(i, (B) => {
      Eo(B, ["Input", "Select"]) && (Pr(B.props, !0) || Pr(B.props.inputProps, !0)) && (W = !0);
    }), W;
  }), [L, m] = p.useState(!1);
  c && L && m(!1);
  const $ = d !== void 0 && !c ? d : L;
  let D;
  if (process.env.NODE_ENV !== "production") {
    const W = p.useRef(!1);
    D = () => (W.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), W.current = !0, () => {
      W.current = !1;
    });
  }
  const F = p.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: h,
    color: a,
    disabled: c,
    error: u,
    filled: R,
    focused: $,
    fullWidth: f,
    hiddenLabel: b,
    size: S,
    onBlur: () => {
      m(!1);
    },
    onEmpty: () => {
      P(!1);
    },
    onFilled: () => {
      P(!0);
    },
    onFocus: () => {
      m(!0);
    },
    registerEffect: D,
    required: y,
    variant: v
  }), [x, a, c, u, R, $, f, b, D, y, S, v]);
  return /* @__PURE__ */ k.jsx(to.Provider, {
    value: F,
    children: /* @__PURE__ */ k.jsx(xh, {
      as: l,
      ownerState: O,
      className: ue(g.root, s),
      ref: n,
      ...T,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: r.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: r.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: r.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: r.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: r.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
function Ch(e) {
  return Ie("MuiFormHelperText", e);
}
const Js = ke("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Qs;
const Th = (e) => {
  const {
    classes: t,
    contained: n,
    size: o,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", o && `size${ce(o)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Ae(u, Ch, t);
}, Oh = se("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ce(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Js.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Js.error}`]: {
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
}))), Fl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: d,
    margin: f,
    required: b,
    variant: E,
    ...y
  } = o, S = hn(), v = mn({
    props: o,
    muiFormControl: S,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), T = {
    ...o,
    component: a,
    contained: v.variant === "filled" || v.variant === "outlined",
    variant: v.variant,
    size: v.size,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  };
  delete T.ownerState;
  const O = Th(T);
  return /* @__PURE__ */ k.jsx(Oh, {
    as: a,
    className: ue(O.root, s),
    ref: n,
    ...y,
    ownerState: T,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Qs || (Qs = /* @__PURE__ */ k.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: r.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: r.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: r.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: r.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined", "standard"]), r.string])
});
function wh(e) {
  return Ie("MuiFormLabel", e);
}
const Nn = ke("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Rh = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ce(n)}`, i && "disabled", s && "error", a && "filled", o && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Ae(c, wh, t);
}, Ph = se("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Nn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Nn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Nn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), kh = se("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(De(({
  theme: e
}) => ({
  [`&.${Nn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Bl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: d,
    focused: f,
    required: b,
    ...E
  } = o, y = hn(), S = mn({
    props: o,
    muiFormControl: y,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), v = {
    ...o,
    color: S.color || "primary",
    component: l,
    disabled: S.disabled,
    error: S.error,
    filled: S.filled,
    focused: S.focused,
    required: S.required
  }, T = Rh(v);
  return /* @__PURE__ */ k.jsxs(Ph, {
    as: l,
    ownerState: v,
    className: ue(T.root, s),
    ref: n,
    ...E,
    children: [i, S.required && /* @__PURE__ */ k.jsxs(kh, {
      ownerState: v,
      "aria-hidden": !0,
      className: T.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: r.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: r.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Xo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const $h = {
  entering: {
    opacity: 1,
    transform: Xo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, wo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), $r = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: b,
    onExiting: E,
    style: y,
    timeout: S = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = kt,
    ...T
  } = t, O = tl(), g = p.useRef(), x = xi(), h = p.useRef(null), R = Xe(h, Qn(s), n), P = (V) => (j) => {
    if (V) {
      const H = h.current;
      j === void 0 ? V(H) : V(H, j);
    }
  }, L = P(d), m = P((V, j) => {
    Tl(V);
    const {
      duration: H,
      delay: Y,
      easing: ne
    } = Or({
      style: y,
      timeout: S,
      easing: a
    }, {
      mode: "enter"
    });
    let M;
    S === "auto" ? (M = x.transitions.getAutoHeightDuration(V.clientHeight), g.current = M) : M = H, V.style.transition = [x.transitions.create("opacity", {
      duration: M,
      delay: Y
    }), x.transitions.create("transform", {
      duration: wo ? M : M * 0.666,
      delay: Y,
      easing: ne
    })].join(","), c && c(V, j);
  }), $ = P(u), D = P(E), F = P((V) => {
    const {
      duration: j,
      delay: H,
      easing: Y
    } = Or({
      style: y,
      timeout: S,
      easing: a
    }, {
      mode: "exit"
    });
    let ne;
    S === "auto" ? (ne = x.transitions.getAutoHeightDuration(V.clientHeight), g.current = ne) : ne = j, V.style.transition = [x.transitions.create("opacity", {
      duration: ne,
      delay: H
    }), x.transitions.create("transform", {
      duration: wo ? ne : ne * 0.666,
      delay: wo ? H : H || ne * 0.333,
      easing: Y
    })].join(","), V.style.opacity = 0, V.style.transform = Xo(0.75), f && f(V);
  }), W = P(b), B = (V) => {
    S === "auto" && O.start(g.current || 0, V), o && o(h.current, V);
  };
  return /* @__PURE__ */ k.jsx(v, {
    appear: i,
    in: l,
    nodeRef: h,
    onEnter: m,
    onEntered: $,
    onEntering: L,
    onExit: F,
    onExited: W,
    onExiting: D,
    addEndListener: B,
    timeout: S === "auto" ? null : S,
    ...T,
    children: (V, j) => /* @__PURE__ */ p.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Xo(0.75),
        visibility: V === "exited" && !l ? "hidden" : void 0,
        ...$h[V],
        ...y,
        ...s.props.style
      },
      ref: R,
      ...j
    })
  });
});
process.env.NODE_ENV !== "production" && ($r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Jn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
$r && ($r.muiSupportAuto = !0);
const Nh = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ae({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Im, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Mh = se(oo, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...no(e, t), !n.disableUnderline && t.underline];
  }
})(De(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: o
      }) => o.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => !o.disableUnderline,
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
        [`&.${Sn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Sn.error}`]: {
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
        [`&:hover:not(.${Sn.disabled}, .${Sn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Sn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(St()).map(([o]) => ({
      props: {
        color: o,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[o].main}`
        }
      }
    }))]
  };
})), Ih = se(io, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ro
})({}), zn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: d,
    slots: f = {},
    type: b = "text",
    ...E
  } = o, y = Nh(o), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, T = d ?? a ? Ge(d ?? a, v) : v, O = f.root ?? s.Root ?? Mh, g = f.input ?? s.Input ?? Ih;
  return /* @__PURE__ */ k.jsx(Pi, {
    slots: {
      root: O,
      input: g
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: b,
    ...E,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
zn && (zn.muiName = "Input");
function _h(e) {
  return Ie("MuiInputLabel", e);
}
ke("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Lh = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", o && o !== "normal" && `size${ce(o)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Ae(c, _h, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, jh = se(Bl, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Nn.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(De(({
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
      size: o
    }) => t === "filled" && n.shrink && o === "small",
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
}))), $i = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = o, d = hn();
  let f = a;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const b = mn({
    props: o,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), E = {
    ...o,
    disableAnimation: i,
    formControl: d,
    shrink: f,
    size: b.size,
    variant: b.variant,
    required: b.required,
    focused: b.focused
  }, y = Lh(E);
  return /* @__PURE__ */ k.jsx(jh, {
    "data-shrink": f,
    ref: n,
    className: ue(y.root, c),
    ...u,
    ownerState: E,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && ($i.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: r.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: r.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: r.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: r.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: r.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: r.oneOfType([r.oneOf(["normal", "small"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
function Ah(e) {
  return Ie("MuiLinearProgress", e);
}
ke("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Jo = 4, Qo = pn`
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
`, Dh = typeof Qo != "string" ? jr`
        animation: ${Qo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, ei = pn`
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
`, Fh = typeof ei != "string" ? jr`
        animation: ${ei} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, ti = pn`
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
`, Bh = typeof ti != "string" ? jr`
        animation: ${ti} 3s infinite linear;
      ` : null, Vh = (e) => {
  const {
    classes: t,
    variant: n,
    color: o
  } = e, i = {
    root: ["root", `color${ce(o)}`, n],
    dashed: ["dashed", `dashedColor${ce(o)}`],
    bar1: ["bar", `barColor${ce(o)}`, (n === "indeterminate" || n === "query") && "bar1Indeterminate", n === "determinate" && "bar1Determinate", n === "buffer" && "bar1Buffer"],
    bar2: ["bar", n !== "buffer" && `barColor${ce(o)}`, n === "buffer" && `color${ce(o)}`, (n === "indeterminate" || n === "query") && "bar2Indeterminate", n === "buffer" && "bar2Buffer"]
  };
  return Ae(i, Ah, t);
}, Ni = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Xr(e.palette[t].main, 0.62) : Zr(e.palette[t].main, 0.5), Wh = se("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ce(n.color)}`], t[n.variant]];
  }
})(De(({
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
  variants: [...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Ni(e, t)
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
}))), zh = se("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.dashed, t[`dashedColor${ce(n.color)}`]];
  }
})(De(({
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
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => {
    const n = Ni(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), Bh || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${ti} 3s infinite linear`
}), Uh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ce(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate, n.variant === "determinate" && t.bar1Determinate, n.variant === "buffer" && t.bar1Buffer];
  }
})(De(({
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
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
      transition: `transform .${Jo}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${Jo}s linear`
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
    style: Dh || {
      animation: `${Qo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), qh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ce(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate, n.variant === "buffer" && t.bar2Buffer];
  }
})(De(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t,
      variant: "buffer"
    },
    style: {
      backgroundColor: Ni(e, t),
      transition: `transform .${Jo}s linear`
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
    style: Fh || {
      animation: `${ei} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), Vl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: i,
    color: s = "primary",
    value: a,
    valueBuffer: l,
    variant: c = "indeterminate",
    ...u
  } = o, d = {
    ...o,
    color: s,
    variant: c
  }, f = Vh(d), b = fl(), E = {}, y = {
    bar1: {},
    bar2: {}
  };
  if (c === "determinate" || c === "buffer")
    if (a !== void 0) {
      E["aria-valuenow"] = Math.round(a), E["aria-valuemin"] = 0, E["aria-valuemax"] = 100;
      let S = a - 100;
      b && (S = -S), y.bar1.transform = `translateX(${S}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (c === "buffer")
    if (l !== void 0) {
      let S = (l || 0) - 100;
      b && (S = -S), y.bar2.transform = `translateX(${S}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ k.jsxs(Wh, {
    className: ue(f.root, i),
    ownerState: d,
    role: "progressbar",
    ...E,
    ref: n,
    ...u,
    children: [c === "buffer" ? /* @__PURE__ */ k.jsx(zh, {
      className: f.dashed,
      ownerState: d
    }) : null, /* @__PURE__ */ k.jsx(Uh, {
      className: f.bar1,
      ownerState: d,
      style: y.bar1
    }), c === "determinate" ? null : /* @__PURE__ */ k.jsx(qh, {
      className: f.bar2,
      ownerState: d,
      style: y.bar2
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: r.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: r.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const Nr = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Nr.displayName = "ListContext");
function Hh(e) {
  return Ie("MuiList", e);
}
ke("MuiList", ["root", "padding", "dense", "subheader"]);
const Yh = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return Ae({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, Hh, t);
}, Kh = se("ul", {
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
}), Wl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...d
  } = o, f = p.useMemo(() => ({
    dense: l
  }), [l]), b = {
    ...o,
    component: a,
    dense: l,
    disablePadding: c
  }, E = Yh(b);
  return /* @__PURE__ */ k.jsx(Nr.Provider, {
    value: f,
    children: /* @__PURE__ */ k.jsxs(Kh, {
      as: a,
      className: ue(E.root, s),
      ref: n,
      ownerState: b,
      ...d,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const ea = ke("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ta = ke("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Ro(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function na(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function zl(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function xn(e, t, n, o, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !zl(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Ul = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu",
    ...b
  } = t, E = p.useRef(null), y = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Lt(() => {
    i && E.current.focus();
  }, [i]), p.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (g, {
      direction: x
    }) => {
      const h = !E.current.style.width;
      if (g.clientHeight < E.current.clientHeight && h) {
        const R = `${nl(ut(g))}px`;
        E.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = R, E.current.style.width = `calc(100% + ${R})`;
      }
      return E.current;
    }
  }), []);
  const S = (g) => {
    const x = E.current, h = g.key;
    if (g.ctrlKey || g.metaKey || g.altKey) {
      d && d(g);
      return;
    }
    const P = ut(x).activeElement;
    if (h === "ArrowDown")
      g.preventDefault(), xn(x, P, u, c, Ro);
    else if (h === "ArrowUp")
      g.preventDefault(), xn(x, P, u, c, na);
    else if (h === "Home")
      g.preventDefault(), xn(x, null, u, c, Ro);
    else if (h === "End")
      g.preventDefault(), xn(x, null, u, c, na);
    else if (h.length === 1) {
      const L = y.current, m = h.toLowerCase(), $ = performance.now();
      L.keys.length > 0 && ($ - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && m !== L.keys[0] && (L.repeating = !1)), L.lastTime = $, L.keys.push(m);
      const D = P && !L.repeating && zl(P, L);
      L.previousKeyMatched && (D || xn(x, P, !1, c, Ro, L)) ? g.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d(g);
  }, v = Xe(E, n);
  let T = -1;
  p.Children.forEach(a, (g, x) => {
    if (!/* @__PURE__ */ p.isValidElement(g)) {
      T === x && (T += 1, T >= a.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && An.isFragment(g) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), g.props.disabled || (f === "selectedMenu" && g.props.selected || T === -1) && (T = x), T === x && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (T += 1, T >= a.length && (T = -1));
  });
  const O = p.Children.map(a, (g, x) => {
    if (x === T) {
      const h = {};
      return s && (h.autoFocus = !0), g.props.tabIndex === void 0 && f === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ p.cloneElement(g, h);
    }
    return g;
  });
  return /* @__PURE__ */ k.jsx(Wl, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: S,
    tabIndex: i ? 0 : -1,
    ...b,
    children: O
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: r.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function Gh(e) {
  return Ie("MuiPopover", e);
}
ke("MuiPopover", ["root", "paper"]);
function ra(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function oa(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ia(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function yr(e) {
  return typeof e == "function" ? e() : e;
}
const Zh = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"],
    paper: ["paper"]
  }, Gh, t);
}, Xh = se(Dl, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ql = se(wi, {
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
}), Hl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
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
    marginThreshold: E = 16,
    open: y,
    PaperProps: S = {},
    slots: v = {},
    slotProps: T = {},
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: g = $r,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: h,
      ...R
    } = {},
    disableScrollLock: P = !1,
    ...L
  } = o, m = (T == null ? void 0 : T.paper) ?? S, $ = p.useRef(), D = {
    ...o,
    anchorOrigin: a,
    anchorReference: c,
    elevation: b,
    marginThreshold: E,
    externalPaperSlotProps: m,
    transformOrigin: O,
    TransitionComponent: g,
    transitionDuration: x,
    TransitionProps: R
  }, F = Zh(D), W = p.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const U = yr(s), te = U && U.nodeType === 1 ? U : ut($.current).body, w = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const oe = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: w.top + ra(w, a.vertical),
      left: w.left + oa(w, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), B = p.useCallback((U) => ({
    vertical: ra(U, O.vertical),
    horizontal: oa(U, O.horizontal)
  }), [O.horizontal, O.vertical]), V = p.useCallback((U) => {
    const te = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, w = B(te);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ia(w)
      };
    const oe = W();
    let I = oe.top - w.vertical, ae = oe.left - w.horizontal;
    const fe = I + te.height, _e = ae + te.width, Be = Ht(yr(s)), Pe = Be.innerHeight - E, tt = Be.innerWidth - E;
    if (E !== null && I < E) {
      const Ee = I - E;
      I -= Ee, w.vertical += Ee;
    } else if (E !== null && fe > Pe) {
      const Ee = fe - Pe;
      I -= Ee, w.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && te.height > Pe && te.height && Pe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - Pe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), E !== null && ae < E) {
      const Ee = ae - E;
      ae -= Ee, w.horizontal += Ee;
    } else if (_e > tt) {
      const Ee = _e - tt;
      ae -= Ee, w.horizontal += Ee;
    }
    return {
      top: `${Math.round(I)}px`,
      left: `${Math.round(ae)}px`,
      transformOrigin: ia(w)
    };
  }, [s, c, W, B, E]), [j, H] = p.useState(y), Y = p.useCallback(() => {
    const U = $.current;
    if (!U)
      return;
    const te = V(U);
    te.top !== null && (U.style.top = te.top), te.left !== null && (U.style.left = te.left), U.style.transformOrigin = te.transformOrigin, H(!0);
  }, [V]);
  p.useEffect(() => (P && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [s, P, Y]);
  const ne = (U, te) => {
    h && h(U, te), Y();
  }, M = () => {
    H(!1);
  };
  p.useEffect(() => {
    y && Y();
  }), p.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      Y();
    }
  } : null, [y, Y]), p.useEffect(() => {
    if (!y)
      return;
    const U = Ja(() => {
      Y();
    }), te = Ht(s);
    return te.addEventListener("resize", U), () => {
      U.clear(), te.removeEventListener("resize", U);
    };
  }, [s, y, Y]);
  let _ = x;
  x === "auto" && !g.muiSupportAuto && (_ = void 0);
  const Z = f || (s ? ut(yr(s)).body : void 0), q = {
    slots: v,
    slotProps: {
      ...T,
      paper: m
    }
  }, [z, J] = bt("paper", {
    elementType: ql,
    externalForwardedProps: q,
    additionalProps: {
      elevation: b,
      className: ue(F.paper, m == null ? void 0 : m.className),
      style: j ? m.style : {
        ...m.style,
        opacity: 0
      }
    },
    ownerState: D
  }), [G, {
    slotProps: X,
    ...ee
  }] = bt("root", {
    elementType: Xh,
    externalForwardedProps: q,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Z,
      open: y
    },
    ownerState: D,
    className: ue(F.root, d)
  }), Q = Xe($, J.ref);
  return /* @__PURE__ */ k.jsx(G, {
    ...ee,
    ...!Ko(G) && {
      slotProps: X,
      disableScrollLock: P
    },
    ...L,
    ref: n,
    children: /* @__PURE__ */ k.jsx(g, {
      appear: !0,
      in: y,
      onEntering: ne,
      onExited: M,
      timeout: _,
      ...R,
      children: /* @__PURE__ */ k.jsx(z, {
        ...J,
        ref: Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Nt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Xn(r.oneOfType([Fn, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = yr(e.anchorEl);
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
  anchorOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: r.shape({
    left: r.number.isRequired,
    top: r.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: r.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Fn, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: il,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: r.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: r.shape({
    component: hi
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    paper: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
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
  transformOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: r.object
});
function Jh(e) {
  return Ie("MuiMenu", e);
}
ke("MuiMenu", ["root", "paper", "list"]);
const Qh = {
  vertical: "top",
  horizontal: "right"
}, eg = {
  vertical: "top",
  horizontal: "left"
}, tg = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Jh, t);
}, ng = se(Hl, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rg = se(ql, {
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
}), og = se(Ul, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Yl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: d,
    PaperProps: f = {},
    PopoverClasses: b,
    transitionDuration: E = "auto",
    TransitionProps: {
      onEntering: y,
      ...S
    } = {},
    variant: v = "selectedMenu",
    slots: T = {},
    slotProps: O = {},
    ...g
  } = o, x = fl(), h = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: f,
    transitionDuration: E,
    TransitionProps: S,
    variant: v
  }, R = tg(h), P = i && !l && d, L = p.useRef(null), m = (j, H) => {
    L.current && L.current.adjustStyleForScrollbar(j, {
      direction: x ? "rtl" : "ltr"
    }), y && y(j, H);
  }, $ = (j) => {
    j.key === "Tab" && (j.preventDefault(), u && u(j, "tabKeyDown"));
  };
  let D = -1;
  p.Children.map(s, (j, H) => {
    /* @__PURE__ */ p.isValidElement(j) && (process.env.NODE_ENV !== "production" && An.isFragment(j) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), j.props.disabled || (v === "selectedMenu" && j.props.selected || D === -1) && (D = H));
  });
  const F = T.paper ?? rg, W = O.paper ?? f, B = Ns({
    elementType: T.root,
    externalSlotProps: O.root,
    ownerState: h,
    className: [R.root, a]
  }), V = Ns({
    elementType: F,
    externalSlotProps: W,
    ownerState: h,
    className: R.paper
  });
  return /* @__PURE__ */ k.jsx(ng, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? Qh : eg,
    slots: {
      paper: F,
      root: T.root
    },
    slotProps: {
      root: B,
      paper: V
    },
    open: d,
    ref: n,
    transitionDuration: E,
    TransitionProps: {
      onEntering: m,
      ...S
    },
    ownerState: h,
    ...g,
    classes: b,
    children: /* @__PURE__ */ k.jsx(og, {
      onKeyDown: $,
      actions: L,
      autoFocus: i && (D === -1 || l),
      autoFocusItem: P,
      variant: v,
      ...c,
      className: ue(R.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([Fn, r.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: r.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: r.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: r.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    paper: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: r.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function ig(e) {
  return Ie("MuiMenuItem", e);
}
const Cn = ke("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), sg = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, ag = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = Ae({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, ig, a);
  return {
    ...a,
    ...c
  };
}, lg = se(Ri, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: sg
})(De(({
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
  [`&.${Cn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Cn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Cn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Cn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Cn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Xs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Xs.inset}`]: {
    marginLeft: 52
  },
  [`& .${ta.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ta.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ea.root}`]: {
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
      [`& .${ea.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), br = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: b,
    ...E
  } = o, y = p.useContext(Nr), S = p.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: c
  }), [y.dense, a, c]), v = p.useRef(null);
  Lt(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const T = {
    ...o,
    dense: S.dense,
    divider: l,
    disableGutters: c
  }, O = ag(o), g = Xe(v, n);
  let x;
  return o.disabled || (x = f !== void 0 ? f : -1), /* @__PURE__ */ k.jsx(Nr.Provider, {
    value: S,
    children: /* @__PURE__ */ k.jsx(lg, {
      ref: g,
      role: d,
      tabIndex: x,
      component: s,
      focusVisibleClassName: ue(O.focusVisible, u),
      className: ue(O.root, b),
      ...E,
      ownerState: T,
      classes: O
    })
  });
});
process.env.NODE_ENV !== "production" && (br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: r.bool,
  /**
   * @ignore
   */
  disabled: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  role: r.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number
});
function cg(e) {
  return Ie("MuiNativeSelect", e);
}
const Mi = ke("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ug = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ce(n)}`, s && "iconOpen", o && "disabled"]
  };
  return Ae(l, cg, t);
}, Kl = se("select")(({
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
  [`&.${Mi.disabled}`]: {
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
})), dg = se(Kl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: yt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Mi.multiple}`]: t.multiple
    }];
  }
})({}), Gl = se("svg")(({
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
  [`&.${Mi.disabled}`]: {
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
})), fg = se(Gl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Zl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    className: o,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, d = {
    ...t,
    disabled: i,
    variant: c,
    error: s
  }, f = ug(d);
  return /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ k.jsx(dg, {
      ownerState: d,
      className: ue(f.select, o),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ k.jsx(fg, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The CSS class name of the select element.
   */
  className: r.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: r.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: r.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Nt,
  /**
   * @ignore
   */
  multiple: r.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: r.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The input value.
   */
  value: r.any,
  /**
   * The variant to use.
   */
  variant: r.oneOf(["standard", "outlined", "filled"])
});
var sa;
const pg = se("fieldset", {
  shouldForwardProp: yt
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
}), mg = se("legend", {
  shouldForwardProp: yt
})(De(({
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
function Xl(e) {
  const {
    children: t,
    classes: n,
    className: o,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ k.jsx(pg, {
    "aria-hidden": !0,
    className: o,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ k.jsx(mg, {
      ownerState: c,
      children: l ? /* @__PURE__ */ k.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        sa || (sa = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The label.
   */
  label: r.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: r.bool.isRequired,
  /**
   * @ignore
   */
  style: r.object
});
const hg = (e) => {
  const {
    classes: t
  } = e, o = Ae({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, _m, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, gg = se(oo, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: no
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Ct.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${Ct.focused} .${Ct.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(St()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Ct.focused} .${Ct.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${Ct.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${Ct.error} .${Ct.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Ct.disabled} .${Ct.notchedOutline}`]: {
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
        size: o
      }) => n.multiline && o === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), yg = se(Xl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), bg = se(io, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ro
})(De(({
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
}))), Un = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var o;
  const i = Fe({
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
    ...E
  } = i, y = hg(i), S = hn(), v = mn({
    props: i,
    muiFormControl: S,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), T = {
    ...i,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: S,
    fullWidth: a,
    hiddenLabel: v.hiddenLabel,
    multiline: u,
    size: v.size,
    type: b
  }, O = f.root ?? s.Root ?? gg, g = f.input ?? s.Input ?? bg;
  return /* @__PURE__ */ k.jsx(Pi, {
    slots: {
      root: O,
      input: g
    },
    renderSuffix: (x) => /* @__PURE__ */ k.jsx(yg, {
      ownerState: T,
      className: y.notchedOutline,
      label: c != null && c !== "" && v.required ? o || (o = /* @__PURE__ */ k.jsxs(p.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: b,
    ...E,
    classes: {
      ...y,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: r.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: r.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
Un && (Un.muiName = "Input");
function vg(e) {
  return Ie("MuiSelect", e);
}
const Tn = ke("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var aa;
const Eg = se(Kl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Tn.select}`]: t.select
      },
      {
        [`&.${Tn.select}`]: t[n.variant]
      },
      {
        [`&.${Tn.error}`]: t.error
      },
      {
        [`&.${Tn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Tn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Sg = se(Gl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), xg = se("input", {
  shouldForwardProp: (e) => El(e) && e !== "classes",
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
function la(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Cg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Tg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ce(n)}`, s && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ae(l, vg, t);
}, Jl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var er;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: b,
    error: E = !1,
    IconComponent: y,
    inputRef: S,
    labelId: v,
    MenuProps: T = {},
    multiple: O,
    name: g,
    onBlur: x,
    onChange: h,
    onClose: R,
    onFocus: P,
    onOpen: L,
    open: m,
    readOnly: $,
    renderValue: D,
    SelectDisplayProps: F = {},
    tabIndex: W,
    // catching `type` from Input which makes no sense for SelectInput
    type: B,
    value: V,
    variant: j = "standard",
    ...H
  } = t, [Y, ne] = Rs({
    controlled: V,
    default: d,
    name: "Select"
  }), [M, _] = Rs({
    controlled: m,
    default: u,
    name: "Select"
  }), Z = p.useRef(null), q = p.useRef(null), [z, J] = p.useState(null), {
    current: G
  } = p.useRef(m != null), [X, ee] = p.useState(), Q = Xe(n, S), U = p.useCallback((ie) => {
    q.current = ie, ie && J(ie);
  }, []), te = z == null ? void 0 : z.parentNode;
  p.useImperativeHandle(Q, () => ({
    focus: () => {
      q.current.focus();
    },
    node: Z.current,
    value: Y
  }), [Y]), p.useEffect(() => {
    u && M && z && !G && (ee(a ? null : te.clientWidth), q.current.focus());
  }, [z, a]), p.useEffect(() => {
    s && q.current.focus();
  }, [s]), p.useEffect(() => {
    if (!v)
      return;
    const ie = ut(q.current).getElementById(v);
    if (ie) {
      const he = () => {
        getSelection().isCollapsed && q.current.focus();
      };
      return ie.addEventListener("click", he), () => {
        ie.removeEventListener("click", he);
      };
    }
  }, [v]);
  const w = (ie, he) => {
    ie ? L && L(he) : R && R(he), G || (ee(a ? null : te.clientWidth), _(ie));
  }, oe = (ie) => {
    ie.button === 0 && (ie.preventDefault(), q.current.focus(), w(!0, ie));
  }, I = (ie) => {
    w(!1, ie);
  }, ae = p.Children.toArray(l), fe = (ie) => {
    const he = ae.find((Ke) => Ke.props.value === ie.target.value);
    he !== void 0 && (ne(he.props.value), h && h(ie, he));
  }, _e = (ie) => (he) => {
    let Ke;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (O) {
        Ke = Array.isArray(Y) ? Y.slice() : [];
        const It = Y.indexOf(ie.props.value);
        It === -1 ? Ke.push(ie.props.value) : Ke.splice(It, 1);
      } else
        Ke = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(he), Y !== Ke && (ne(Ke), h)) {
        const It = he.nativeEvent || he, Kt = new It.constructor(It.type, It);
        Object.defineProperty(Kt, "target", {
          writable: !0,
          value: {
            value: Ke,
            name: g
          }
        }), h(Kt, ie);
      }
      O || w(!1, he);
    }
  }, Be = (ie) => {
    $ || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ie.key) && (ie.preventDefault(), w(!0, ie));
  }, Pe = z !== null && M, tt = (ie) => {
    !Pe && x && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: Y,
        name: g
      }
    }), x(ie));
  };
  delete H["aria-invalid"];
  let Ee, Je;
  const re = [];
  let Ve = !1, st = !1;
  (Pr({
    value: Y
  }) || b) && (D ? Ee = D(Y) : Ve = !0);
  const me = ae.map((ie) => {
    if (!/* @__PURE__ */ p.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && An.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let he;
    if (O) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Pt(2));
      he = Y.some((Ke) => la(Ke, ie.props.value)), he && Ve && re.push(ie.props.children);
    } else
      he = la(Y, ie.props.value), he && Ve && (Je = ie.props.children);
    return he && (st = !0), /* @__PURE__ */ p.cloneElement(ie, {
      "aria-selected": he ? "true" : "false",
      onClick: _e(ie),
      onKeyUp: (Ke) => {
        Ke.key === " " && Ke.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(Ke);
      },
      role: "option",
      selected: he,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (!st && !O && Y !== "") {
      const ie = ae.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${g ? `(name="${g}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [st, ae, O, g, Y]), Ve && (O ? re.length === 0 ? Ee = null : Ee = re.reduce((ie, he, Ke) => (ie.push(he), Ke < re.length - 1 && ie.push(", "), ie), []) : Ee = Je);
  let pe = X;
  !a && G && z && (pe = te.clientWidth);
  let at;
  typeof W < "u" ? at = W : at = f ? null : 0;
  const dt = F.id || (g ? `mui-component-select-${g}` : void 0), rt = {
    ...t,
    variant: j,
    value: Y,
    open: Pe,
    error: E
  }, ye = Tg(rt), Mt = {
    ...T.PaperProps,
    ...(er = T.slotProps) == null ? void 0 : er.paper
  }, Dt = Qa();
  return /* @__PURE__ */ k.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ k.jsx(Eg, {
      as: "div",
      ref: U,
      tabIndex: at,
      role: "combobox",
      "aria-controls": Dt,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Pe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, dt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Be,
      onMouseDown: f || $ ? null : oe,
      onBlur: tt,
      onFocus: P,
      ...F,
      ownerState: rt,
      className: ue(F.className, ye.select, c),
      id: dt,
      children: Cg(Ee) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        aa || (aa = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ee
    }), /* @__PURE__ */ k.jsx(xg, {
      "aria-invalid": E,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: g,
      ref: Z,
      "aria-hidden": !0,
      onChange: fe,
      tabIndex: -1,
      disabled: f,
      className: ye.nativeInput,
      autoFocus: s,
      ...H,
      ownerState: rt
    }), /* @__PURE__ */ k.jsx(Sg, {
      as: y,
      className: ye.icon,
      ownerState: rt
    }), /* @__PURE__ */ k.jsx(Yl, {
      id: `menu-${g || ""}`,
      anchorEl: te,
      open: Pe,
      onClose: I,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...T,
      MenuListProps: {
        "aria-labelledby": v,
        role: "listbox",
        "aria-multiselectable": O ? "true" : void 0,
        disableListWrap: !0,
        id: Dt,
        ...T.MenuListProps
      },
      slotProps: {
        ...T.slotProps,
        paper: {
          ...Mt,
          style: {
            minWidth: pe,
            ...Mt != null ? Mt.style : null
          }
        }
      },
      children: me
    })]
  });
});
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": r.string,
  /**
   * @ignore
   */
  "aria-label": r.string,
  /**
   * @ignore
   */
  autoFocus: r.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: r.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The CSS class name of the select element.
   */
  className: r.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: r.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: r.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: r.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: r.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Nt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: r.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: r.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: r.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: r.string,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * @ignore
   */
  readOnly: r.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: r.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: r.object,
  /**
   * @ignore
   */
  tabIndex: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  type: r.any,
  /**
   * The input value.
   */
  value: r.any,
  /**
   * The variant to use.
   */
  variant: r.oneOf(["standard", "outlined", "filled"])
});
const Og = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ii = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => yt(e) && e !== "variant",
  slot: "Root"
}, wg = se(zn, Ii)(""), Rg = se(Un, Ii)(""), Pg = se(Wn, Ii)(""), so = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = vl({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = jm,
    id: f,
    input: b,
    inputProps: E,
    label: y,
    labelId: S,
    MenuProps: v,
    multiple: T = !1,
    native: O = !1,
    onClose: g,
    onOpen: x,
    open: h,
    renderValue: R,
    SelectDisplayProps: P,
    variant: L = "outlined",
    ...m
  } = o, $ = O ? Zl : Jl, D = hn(), F = mn({
    props: o,
    muiFormControl: D,
    states: ["variant", "error"]
  }), W = F.variant || L, B = {
    ...o,
    variant: W,
    classes: a
  }, V = Og(B), {
    root: j,
    ...H
  } = V, Y = b || {
    standard: /* @__PURE__ */ k.jsx(wg, {
      ownerState: B
    }),
    outlined: /* @__PURE__ */ k.jsx(Rg, {
      label: y,
      ownerState: B
    }),
    filled: /* @__PURE__ */ k.jsx(Pg, {
      ownerState: B
    })
  }[W], ne = Xe(n, Qn(Y));
  return /* @__PURE__ */ k.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(Y, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: $,
      inputProps: {
        children: s,
        error: F.error,
        IconComponent: d,
        variant: W,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T,
        ...O ? {
          id: f
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: S,
          MenuProps: v,
          onClose: g,
          onOpen: x,
          open: h,
          renderValue: R,
          SelectDisplayProps: {
            id: f,
            ...P
          }
        },
        ...E,
        classes: E ? Ge(H, E.classes) : H,
        ...b ? b.props.inputProps : {}
      },
      ...(T && O || u) && W === "outlined" ? {
        notched: !0
      } : {},
      ref: ne,
      className: ue(Y.props.className, l, V.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!b && {
        variant: W
      },
      ...m
    })
  });
});
process.env.NODE_ENV !== "production" && (so.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: r.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: r.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
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
  displayEmpty: r.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: r.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: r.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: r.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: r.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: r.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: r.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: r.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: r.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: r.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: r.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: r.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: r.oneOfType([r.oneOf([""]), r.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
so.muiName = "Select";
const Mn = pp({
  createStyledComponent: se("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => vl({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
  /**
   * Add an element between each child.
   */
  divider: r.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: r.bool
});
function kg(e) {
  return Ie("MuiTextField", e);
}
ke("MuiTextField", ["root"]);
const $g = {
  standard: zn,
  filled: Wn,
  outlined: Un
}, Ng = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"]
  }, kg, t);
}, Mg = se(ki, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ni = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: b,
    fullWidth: E = !1,
    helperText: y,
    id: S,
    InputLabelProps: v,
    inputProps: T,
    InputProps: O,
    inputRef: g,
    label: x,
    maxRows: h,
    minRows: R,
    multiline: P = !1,
    name: L,
    onBlur: m,
    onChange: $,
    onFocus: D,
    placeholder: F,
    required: W = !1,
    rows: B,
    select: V = !1,
    SelectProps: j,
    slots: H = {},
    slotProps: Y = {},
    type: ne,
    value: M,
    variant: _ = "outlined",
    ...Z
  } = o, q = {
    ...o,
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: E,
    multiline: P,
    required: W,
    select: V,
    variant: _
  }, z = Ng(q);
  process.env.NODE_ENV !== "production" && V && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const J = Qa(S), G = y && J ? `${J}-helper-text` : void 0, X = x && J ? `${J}-label` : void 0, ee = $g[_], Q = {
    slots: H,
    slotProps: {
      input: O,
      inputLabel: v,
      htmlInput: T,
      formHelperText: b,
      select: j,
      ...Y
    }
  }, U = {}, te = Q.slotProps.inputLabel;
  _ === "outlined" && (te && typeof te.shrink < "u" && (U.notched = te.shrink), U.label = x), V && ((!j || !j.native) && (U.id = void 0), U["aria-describedby"] = void 0);
  const [w, oe] = bt("input", {
    elementType: ee,
    externalForwardedProps: Q,
    additionalProps: U,
    ownerState: q
  }), [I, ae] = bt("inputLabel", {
    elementType: $i,
    externalForwardedProps: Q,
    ownerState: q
  }), [fe, _e] = bt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: q
  }), [Be, Pe] = bt("formHelperText", {
    elementType: Fl,
    externalForwardedProps: Q,
    ownerState: q
  }), [tt, Ee] = bt("select", {
    elementType: so,
    externalForwardedProps: Q,
    ownerState: q
  }), Je = /* @__PURE__ */ k.jsx(w, {
    "aria-describedby": G,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: E,
    multiline: P,
    name: L,
    rows: B,
    maxRows: h,
    minRows: R,
    type: ne,
    value: M,
    id: J,
    inputRef: g,
    onBlur: m,
    onChange: $,
    onFocus: D,
    placeholder: F,
    inputProps: _e,
    slots: {
      input: H.htmlInput ? fe : void 0
    },
    ...oe
  });
  return /* @__PURE__ */ k.jsxs(Mg, {
    className: ue(z.root, l),
    disabled: d,
    error: f,
    fullWidth: E,
    ref: n,
    required: W,
    color: c,
    variant: _,
    ownerState: q,
    ...Z,
    children: [x != null && x !== "" && /* @__PURE__ */ k.jsx(I, {
      htmlFor: J,
      id: X,
      ...ae,
      children: x
    }), V ? /* @__PURE__ */ k.jsx(tt, {
      "aria-describedby": G,
      id: J,
      labelId: X,
      value: M,
      input: Je,
      ...Ee,
      children: a
    }) : Je, y && /* @__PURE__ */ k.jsx(Be, {
      id: G,
      ...Pe,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * @ignore
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: r.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: r.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The helper text content.
   */
  helperText: r.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: r.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: r.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: r.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Nt,
  /**
   * The label content.
   */
  label: r.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: r.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: r.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: r.object,
  /**
   * The size of the component.
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    formHelperText: r.oneOfType([r.func, r.object]),
    htmlInput: r.oneOfType([r.func, r.object]),
    input: r.oneOfType([r.func, r.object]),
    inputLabel: r.oneOfType([r.func, r.object]),
    select: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    formHelperText: r.elementType,
    htmlInput: r.elementType,
    input: r.elementType,
    inputLabel: r.elementType,
    select: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
function Ig(e) {
  const [t, n] = gc(!1);
  function o(a) {
    if (a === 0)
      console.log("WL Ready"), n(!0);
    else
      throw n(!1), new Error(`wolframscript returned code: ${a}`);
  }
  Vi(() => {
    e && e.ipc.on("wl-status", (a) => {
      o(a), console.log("wl-status effect:", t);
    });
  }, [e]);
  async function i(a, l = {}, c = 4848) {
    if (e)
      return new Promise((u, d) => {
        try {
          e.ipc.send("req", [a, l, c]), e.ipc.once("req", (f) => {
            console.log("Received response:", f), u(f);
          });
        } catch (f) {
          d(f);
        }
      });
  }
  const s = yc(async () => {
    const a = await i("aliveQ", {}, 8888);
    console.log("aliveQ res:", a), n(a === "True");
  }, [t, n]);
  return Vi(() => {
    s(), console.log(`isActive after aliveQ: ${t}`);
  }, [s, t]), {
    isActive: t,
    req: i
  };
}
const Ql = hc({
  isActive: !1,
  req: async () => {
  }
});
function _g({
  api: e,
  children: t
}) {
  const n = Ig(e);
  return /* @__PURE__ */ k.jsx(Ql.Provider, { value: n, children: t });
}
function ec() {
  return ca(Ql);
}
function Lg() {
  const e = ec(), [t, n] = et.useState("Python"), [o, i] = et.useState(""), [s, a] = et.useState(""), [l, c] = et.useState(null), u = (y) => {
    n(y.target.value);
  }, d = (y) => {
    i(y.target.value);
  }, f = async () => {
    await e.req(`/evaluate-${t}`, {
      in: o
    }).then((y) => c(y)).catch((y) => console.log(y));
  }, b = async () => {
    await e.req("/evaluate", {
      in: s
    }).then((y) => c(y)).catch((y) => console.log(y));
  }, E = (y) => {
    a(y.target.value);
  };
  return /* @__PURE__ */ k.jsxs(
    Mn,
    {
      className: "Hello",
      direction: "column",
      spacing: 2,
      sx: { textAlign: "center", alignContent: "center" },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ k.jsx(Rl, { variant: "h2", children: "Electron + ReactTS + WolframLanguage" }),
        /* @__PURE__ */ k.jsxs(Mn, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ k.jsx(
            ni,
            {
              variant: "filled",
              label: "WL Input",
              color: "primary",
              sx: { width: 450 },
              onChange: E
            }
          ),
          /* @__PURE__ */ k.jsx(
            Go,
            {
              variant: "contained",
              onClick: b,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs(Mn, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ k.jsxs(ki, { children: [
            /* @__PURE__ */ k.jsx($i, { id: "evaluator-label", children: "Evaluator" }),
            /* @__PURE__ */ k.jsxs(
              so,
              {
                labelId: "evaluator-label",
                label: "Evaluator",
                sx: { width: 130 },
                value: t,
                onChange: u,
                children: [
                  /* @__PURE__ */ k.jsx(br, { value: "Python", children: "Python" }),
                  /* @__PURE__ */ k.jsx(br, { value: "NodeJS", children: "NodeJS" }),
                  /* @__PURE__ */ k.jsx(br, { value: "Shell", children: "Shell" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ k.jsx(
            ni,
            {
              variant: "filled",
              label: "External Input",
              color: "primary",
              sx: { width: 300 },
              onChange: d
            }
          ),
          /* @__PURE__ */ k.jsx(
            Go,
            {
              variant: "contained",
              onClick: f,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        l && typeof l != "object" ? /* @__PURE__ */ k.jsx(wi, { sx: { maxWidth: "50%", p: 2 }, variant: "outlined", children: l }) : null
      ]
    }
  );
}
const jg = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "1em", height: "1em", viewBox: "0 0 11 14", ...e }, /* @__PURE__ */ p.createElement("defs", null, /* @__PURE__ */ p.createElement("clipPath", { id: "clip1" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 2.398438 L 10.800781 2.398438 L 10.800781 13.679688 L 0.238281 13.679688 Z M 0.238281 2.398438 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip2" }, /* @__PURE__ */ p.createElement("path", { d: "M 7 7 L 10.800781 7 L 10.800781 10 L 7 10 Z M 7 7 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip3" }, /* @__PURE__ */ p.createElement("path", { d: "M 6 5 L 10.800781 5 L 10.800781 9 L 6 9 Z M 6 5 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip4" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 5 L 4 5 L 4 9 L 0.238281 9 Z M 0.238281 5 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip5" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 7 L 4 7 L 4 10 L 0.238281 10 Z M 0.238281 7 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip6" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 8 L 5 8 L 5 11 L 0.238281 11 Z M 0.238281 8 " }))), /* @__PURE__ */ p.createElement("g", { id: "surface46" }, /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip1)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  stroke: "none",
  fillRule: "evenodd",
  fill: "rgb(100%,0%,0%)",
  fillOpacity: 1
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.066406 8.125 " })), /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip2)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 9.53125 9.226563 " })), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 6.292969 11.25 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 4.8125 5.828125 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 6.664063 5.09375 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 7.957031 6.105469 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 5.460938 10.789063 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 3.886719 7.390625 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 5.644531 6.382813 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 2.964844 6.105469 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 5.089844 8.21875 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 4.628906 10.238281 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 5.832031 8.21875 " }), /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip3)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 9.808594 6.75 " })), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 6.199219 4.910156 " }), /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip4)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 1.113281 6.75 " })), /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip5)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 2.222656 8.308594 " })), /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip6)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 1.484375 9.59375 " })), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 2.964844 10.238281 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 6.753906 11.15625 " }), /* @__PURE__ */ p.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " })));
function Ag() {
  return /* @__PURE__ */ k.jsxs(
    Mn,
    {
      className: "main",
      direction: "column",
      spacing: 2,
      sx: {
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ k.jsx(jg, { style: { width: "220px", height: "auto" } }),
        /* @__PURE__ */ k.jsx(Ml, { sx: { width: "150%", minWidth: "200px" }, children: /* @__PURE__ */ k.jsx(Vl, {}) })
      ]
    }
  );
}
const Dg = Qr({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee0915"
    }
  }
});
function Fg() {
  return ec().isActive ? /* @__PURE__ */ k.jsx(ru, { children: /* @__PURE__ */ k.jsx(iu, { children: /* @__PURE__ */ k.jsx(ba, { path: "/", element: /* @__PURE__ */ k.jsx(Lg, {}) }) }) }) : /* @__PURE__ */ k.jsx(Ag, {});
}
function Bg({ api: e }) {
  return /* @__PURE__ */ k.jsxs(qp, { theme: Dg, children: [
    /* @__PURE__ */ k.jsx(Al, {}),
    /* @__PURE__ */ k.jsx(_g, { api: e, children: /* @__PURE__ */ k.jsx(Fg, {}) })
  ] });
}
const Vg = document.getElementById("root"), Wg = ko(Vg);
Wg.render(
  /* @__PURE__ */ k.jsx(et.StrictMode, { children: /* @__PURE__ */ k.jsx(Bg, {}) })
);
export {
  Bg as Frontend,
  _g as WLProvider,
  ec as useWL
};
//# sourceMappingURL=index.es.js.map

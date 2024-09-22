import * as f from "react";
import et, { forwardRef as uc, useContext as ti, Children as dc, isValidElement as ar, cloneElement as lr, createContext as aa, useState as Bi, useEffect as Ro, useCallback as fc } from "react";
import * as pc from "react-dom";
import Qn from "react-dom";
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oo = { exports: {} }, hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function hc() {
  if (zi) return hn;
  zi = 1;
  var e = et, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, p = {}, y = null, E = null;
    u !== void 0 && (y = "" + u), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (d in c) o.call(c, d) && !s.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: y, ref: E, props: p, _owner: i.current };
  }
  return hn.Fragment = n, hn.jsx = a, hn.jsxs = a, hn;
}
var gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function gc() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = et, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
    function v(S) {
      if (S === null || typeof S != "object")
        return null;
      var j = b && S[b] || S[x];
      return typeof j == "function" ? j : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(S) {
      {
        for (var j = arguments.length, K = new Array(j > 1 ? j - 1 : 0), ce = 1; ce < j; ce++)
          K[ce - 1] = arguments[ce];
        g("error", S, K);
      }
    }
    function g(S, j, K) {
      {
        var ce = T.ReactDebugCurrentFrame, Ee = ce.getStackAddendum();
        Ee !== "" && (j += "%s", K = K.concat([Ee]));
        var ke = K.map(function(he) {
          return String(he);
        });
        ke.unshift("Warning: " + j), Function.prototype.apply.call(console[S], console, ke);
      }
    }
    var C = !1, h = !1, P = !1, k = !1, I = !1, m;
    m = Symbol.for("react.module.reference");
    function M(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === o || S === s || I || S === i || S === u || S === d || k || S === E || C || h || P || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === p || S.$$typeof === a || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === m || S.getModuleId !== void 0));
    }
    function F(S, j, K) {
      var ce = S.displayName;
      if (ce)
        return ce;
      var Ee = j.displayName || j.name || "";
      return Ee !== "" ? K + "(" + Ee + ")" : K;
    }
    function B(S) {
      return S.displayName || "Context";
    }
    function q(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
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
      if (typeof S == "object")
        switch (S.$$typeof) {
          case l:
            var j = S;
            return B(j) + ".Consumer";
          case a:
            var K = S;
            return B(K._context) + ".Provider";
          case c:
            return F(S, S.render, "ForwardRef");
          case p:
            var ce = S.displayName || null;
            return ce !== null ? ce : q(S.type) || "Memo";
          case y: {
            var Ee = S, ke = Ee._payload, he = Ee._init;
            try {
              return q(he(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, D, U, Y, re, N, A, X;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function H() {
      {
        if (z === 0) {
          D = console.log, U = console.info, Y = console.warn, re = console.error, N = console.group, A = console.groupCollapsed, X = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        z++;
      }
    }
    function Q() {
      {
        if (z--, z === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, S, {
              value: D
            }),
            info: L({}, S, {
              value: U
            }),
            warn: L({}, S, {
              value: Y
            }),
            error: L({}, S, {
              value: re
            }),
            group: L({}, S, {
              value: N
            }),
            groupCollapsed: L({}, S, {
              value: A
            }),
            groupEnd: L({}, S, {
              value: X
            })
          });
        }
        z < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = T.ReactCurrentDispatcher, J;
    function ee(S, j, K) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var ce = Ee.stack.trim().match(/\n( *(at )?)/);
            J = ce && ce[1] || "";
          }
        return `
` + J + S;
      }
    }
    var Z = !1, V;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      V = new te();
    }
    function R(S, j) {
      if (!S || Z)
        return "";
      {
        var K = V.get(S);
        if (K !== void 0)
          return K;
      }
      var ce;
      Z = !0;
      var Ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = G.current, G.current = null, H();
      try {
        if (j) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (nt) {
              ce = nt;
            }
            Reflect.construct(S, [], he);
          } else {
            try {
              he.call();
            } catch (nt) {
              ce = nt;
            }
            S.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            ce = nt;
          }
          S();
        }
      } catch (nt) {
        if (nt && ce && typeof nt.stack == "string") {
          for (var pe = nt.stack.split(`
`), Ze = ce.stack.split(`
`), We = pe.length - 1, qe = Ze.length - 1; We >= 1 && qe >= 0 && pe[We] !== Ze[qe]; )
            qe--;
          for (; We >= 1 && qe >= 0; We--, qe--)
            if (pe[We] !== Ze[qe]) {
              if (We !== 1 || qe !== 1)
                do
                  if (We--, qe--, qe < 0 || pe[We] !== Ze[qe]) {
                    var ct = `
` + pe[We].replace(" at new ", " at ");
                    return S.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", S.displayName)), typeof S == "function" && V.set(S, ct), ct;
                  }
                while (We >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = ke, Q(), Error.prepareStackTrace = Ee;
      }
      var Gt = S ? S.displayName || S.name : "", Lt = Gt ? ee(Gt) : "";
      return typeof S == "function" && V.set(S, Lt), Lt;
    }
    function oe(S, j, K) {
      return R(S, !1);
    }
    function _(S) {
      var j = S.prototype;
      return !!(j && j.isReactComponent);
    }
    function le(S, j, K) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return R(S, _(S));
      if (typeof S == "string")
        return ee(S);
      switch (S) {
        case u:
          return ee("Suspense");
        case d:
          return ee("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return oe(S.render);
          case p:
            return le(S.type, j, K);
          case y: {
            var ce = S, Ee = ce._payload, ke = ce._init;
            try {
              return le(ke(Ee), j, K);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ie = {}, Le = T.ReactDebugCurrentFrame;
    function Oe(S) {
      if (S) {
        var j = S._owner, K = le(S.type, S._source, j ? j.type : null);
        Le.setExtraStackFrame(K);
      } else
        Le.setExtraStackFrame(null);
    }
    function Qe(S, j, K, ce, Ee) {
      {
        var ke = Function.call.bind(ge);
        for (var he in S)
          if (ke(S, he)) {
            var pe = void 0;
            try {
              if (typeof S[he] != "function") {
                var Ze = Error((ce || "React class") + ": " + K + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ze.name = "Invariant Violation", Ze;
              }
              pe = S[he](j, he, ce, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (We) {
              pe = We;
            }
            pe && !(pe instanceof Error) && (Oe(Ee), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", K, he, typeof pe), Oe(null)), pe instanceof Error && !(pe.message in Ie) && (Ie[pe.message] = !0, Oe(Ee), w("Failed %s type: %s", K, pe.message), Oe(null));
          }
      }
    }
    var ae = Array.isArray;
    function fe(S) {
      return ae(S);
    }
    function ne(S) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, K = j && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return K;
      }
    }
    function Be(S) {
      try {
        return tt(S), !1;
      } catch {
        return !0;
      }
    }
    function tt(S) {
      return "" + S;
    }
    function ot(S) {
      if (Be(S))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ne(S)), tt(S);
    }
    var lt = T.ReactCurrentOwner, $t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, vt, ye;
    ye = {};
    function Nt(S) {
      if (ge.call(S, "ref")) {
        var j = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Ft(S) {
      if (ge.call(S, "key")) {
        var j = Object.getOwnPropertyDescriptor(S, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function ie(S, j) {
      if (typeof S.ref == "string" && lt.current && j && lt.current.stateNode !== j) {
        var K = q(lt.current.type);
        ye[K] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(lt.current.type), S.ref), ye[K] = !0);
      }
    }
    function me(S, j) {
      {
        var K = function() {
          Pt || (Pt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function Ye(S, j) {
      {
        var K = function() {
          vt || (vt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        K.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var It = function(S, j, K, ce, Ee, ke, he) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: j,
        ref: K,
        props: he,
        // Record the component responsible for creating this element.
        _owner: ke
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
        value: Ee
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Jn(S, j, K, ce, Ee) {
      {
        var ke, he = {}, pe = null, Ze = null;
        K !== void 0 && (ot(K), pe = "" + K), Ft(j) && (ot(j.key), pe = "" + j.key), Nt(j) && (Ze = j.ref, ie(j, Ee));
        for (ke in j)
          ge.call(j, ke) && !$t.hasOwnProperty(ke) && (he[ke] = j[ke]);
        if (S && S.defaultProps) {
          var We = S.defaultProps;
          for (ke in We)
            he[ke] === void 0 && (he[ke] = We[ke]);
        }
        if (pe || Ze) {
          var qe = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          pe && me(he, qe), Ze && Ye(he, qe);
        }
        return It(S, pe, Ze, Ee, ce, lt.current, he);
      }
    }
    var oo = T.ReactCurrentOwner, Ii = T.ReactDebugCurrentFrame;
    function Kt(S) {
      if (S) {
        var j = S._owner, K = le(S.type, S._source, j ? j.type : null);
        Ii.setExtraStackFrame(K);
      } else
        Ii.setExtraStackFrame(null);
    }
    var io;
    io = !1;
    function so(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function _i() {
      {
        if (oo.current) {
          var S = q(oo.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function ec(S) {
      return "";
    }
    var Ai = {};
    function tc(S) {
      {
        var j = _i();
        if (!j) {
          var K = typeof S == "string" ? S : S.displayName || S.name;
          K && (j = `

Check the top-level render call using <` + K + ">.");
        }
        return j;
      }
    }
    function ji(S, j) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var K = tc(j);
        if (Ai[K])
          return;
        Ai[K] = !0;
        var ce = "";
        S && S._owner && S._owner !== oo.current && (ce = " It was passed a child from " + q(S._owner.type) + "."), Kt(S), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ce), Kt(null);
      }
    }
    function Di(S, j) {
      {
        if (typeof S != "object")
          return;
        if (fe(S))
          for (var K = 0; K < S.length; K++) {
            var ce = S[K];
            so(ce) && ji(ce, j);
          }
        else if (so(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Ee = v(S);
          if (typeof Ee == "function" && Ee !== S.entries)
            for (var ke = Ee.call(S), he; !(he = ke.next()).done; )
              so(he.value) && ji(he.value, j);
        }
      }
    }
    function nc(S) {
      {
        var j = S.type;
        if (j == null || typeof j == "string")
          return;
        var K;
        if (typeof j == "function")
          K = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === p))
          K = j.propTypes;
        else
          return;
        if (K) {
          var ce = q(j);
          Qe(K, S.props, "prop", ce, S);
        } else if (j.PropTypes !== void 0 && !io) {
          io = !0;
          var Ee = q(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rc(S) {
      {
        for (var j = Object.keys(S.props), K = 0; K < j.length; K++) {
          var ce = j[K];
          if (ce !== "children" && ce !== "key") {
            Kt(S), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), Kt(null);
            break;
          }
        }
        S.ref !== null && (Kt(S), w("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Fi = {};
    function Li(S, j, K, ce, Ee, ke) {
      {
        var he = M(S);
        if (!he) {
          var pe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = ec();
          Ze ? pe += Ze : pe += _i();
          var We;
          S === null ? We = "null" : fe(S) ? We = "array" : S !== void 0 && S.$$typeof === t ? (We = "<" + (q(S.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : We = typeof S, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", We, pe);
        }
        var qe = Jn(S, j, K, Ee, ke);
        if (qe == null)
          return qe;
        if (he) {
          var ct = j.children;
          if (ct !== void 0)
            if (ce)
              if (fe(ct)) {
                for (var Gt = 0; Gt < ct.length; Gt++)
                  Di(ct[Gt], S);
                Object.freeze && Object.freeze(ct);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Di(ct, S);
        }
        if (ge.call(j, "key")) {
          var Lt = q(S), nt = Object.keys(j).filter(function(cc) {
            return cc !== "key";
          }), ao = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fi[Lt + ao]) {
            var lc = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ao, Lt, lc, Lt), Fi[Lt + ao] = !0;
          }
        }
        return S === o ? rc(qe) : nc(qe), qe;
      }
    }
    function oc(S, j, K) {
      return Li(S, j, K, !0);
    }
    function ic(S, j, K) {
      return Li(S, j, K, !1);
    }
    var sc = ic, ac = oc;
    gn.Fragment = o, gn.jsx = sc, gn.jsxs = ac;
  }()), gn;
}
process.env.NODE_ENV === "production" ? Oo.exports = hc() : Oo.exports = gc();
var O = Oo.exports;
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
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Po.apply(this, arguments);
}
var _t;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(_t || (_t = {}));
function yc(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: n,
    v5Compat: o = !1
  } = e, i;
  i = t.map((E, b) => d(E, typeof E == "string" ? null : E.state, b === 0 ? "default" : void 0));
  let s = c(n ?? i.length - 1), a = _t.Pop, l = null;
  function c(E) {
    return Math.min(Math.max(E, 0), i.length - 1);
  }
  function u() {
    return i[s];
  }
  function d(E, b, x) {
    b === void 0 && (b = null);
    let v = vc(i ? u().pathname : "/", E, b, x);
    return Ut(v.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(E)), v;
  }
  function p(E) {
    return typeof E == "string" ? E : Ec(E);
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
    createHref: p,
    createURL(E) {
      return new URL(p(E), "http://localhost");
    },
    encodeLocation(E) {
      let b = typeof E == "string" ? Vn(E) : E;
      return {
        pathname: b.pathname || "",
        search: b.search || "",
        hash: b.hash || ""
      };
    },
    push(E, b) {
      a = _t.Push;
      let x = d(E, b);
      s += 1, i.splice(s, i.length, x), o && l && l({
        action: a,
        location: x,
        delta: 1
      });
    },
    replace(E, b) {
      a = _t.Replace;
      let x = d(E, b);
      i[s] = x, o && l && l({
        action: a,
        location: x,
        delta: 0
      });
    },
    go(E) {
      a = _t.Pop;
      let b = c(s + E), x = i[b];
      s = b, l && l({
        action: a,
        location: x,
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
function Ae(e, t) {
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
function bc() {
  return Math.random().toString(36).substr(2, 8);
}
function vc(e, t, n, o) {
  return n === void 0 && (n = null), Po({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Vn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || o || bc()
  });
}
function Ec(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: o = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function Vn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var Wi;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Wi || (Wi = {}));
function xc(e, t, n) {
  return n === void 0 && (n = "/"), Sc(e, t, n, !1);
}
function Sc(e, t, n, o) {
  let i = typeof t == "string" ? Vn(t) : t, s = ua(i.pathname || "/", n);
  if (s == null)
    return null;
  let a = la(e);
  Cc(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = _c(s);
    l = Nc(a[c], u, o);
  }
  return l;
}
function la(e, t, n, o) {
  t === void 0 && (t = []), n === void 0 && (n = []), o === void 0 && (o = "");
  let i = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (Ae(c.relativePath.startsWith(o), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(o.length));
    let u = sn([o, c.relativePath]), d = n.concat(c);
    s.children && s.children.length > 0 && (Ae(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), la(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: Mc(u, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, a);
    else
      for (let c of ca(s.path))
        i(s, a, c);
  }), t;
}
function ca(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...o] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (o.length === 0)
    return i ? [s, ""] : [s];
  let a = ca(o.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), i && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function Cc(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : $c(t.routesMeta.map((o) => o.childrenIndex), n.routesMeta.map((o) => o.childrenIndex)));
}
const Tc = /^:[\w-]+$/, wc = 3, Rc = 2, Oc = 1, Pc = 10, kc = -2, Ui = (e) => e === "*";
function Mc(e, t) {
  let n = e.split("/"), o = n.length;
  return n.some(Ui) && (o += kc), t && (o += Rc), n.filter((i) => !Ui(i)).reduce((i, s) => i + (Tc.test(s) ? wc : s === "" ? Oc : Pc), o);
}
function $c(e, t) {
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
function Nc(e, t, n) {
  let {
    routesMeta: o
  } = e, i = {}, s = "/", a = [];
  for (let l = 0; l < o.length; ++l) {
    let c = o[l], u = l === o.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", p = qi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, d), y = c.route;
    if (!p && u && n && !o[o.length - 1].route.index && (p = qi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, d)), !p)
      return null;
    Object.assign(i, p.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: sn([s, p.pathname]),
      pathnameBase: Ac(sn([s, p.pathnameBase])),
      route: y
    }), p.pathnameBase !== "/" && (s = sn([s, p.pathnameBase]));
  }
  return a;
}
function qi(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, o] = Ic(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: o.reduce((u, d, p) => {
      let {
        paramName: y,
        isOptional: E
      } = d;
      if (y === "*") {
        let x = l[p] || "";
        a = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const b = l[p];
      return E && !b ? u[y] = void 0 : u[y] = (b || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function Ic(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Ut(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (o.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), o];
}
function _c(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ut(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ua(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, o = e.charAt(n);
  return o && o !== "/" ? null : e.slice(n) || "/";
}
const sn = (e) => e.join("/").replace(/\/\/+/g, "/"), Ac = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jc(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const da = ["post", "put", "patch", "delete"];
new Set(da);
const Dc = ["get", ...da];
new Set(Dc);
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
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, gr.apply(this, arguments);
}
const fa = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (fa.displayName = "DataRouter");
const pa = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (pa.displayName = "DataRouterState");
const Fc = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (Fc.displayName = "Await");
const ni = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (ni.displayName = "Navigation");
const Wn = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (Wn.displayName = "Location");
const Un = /* @__PURE__ */ f.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Un.displayName = "Route");
const ri = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (ri.displayName = "RouteError");
function oi() {
  return f.useContext(Wn) != null;
}
function Lc() {
  return oi() || (process.env.NODE_ENV !== "production" ? Ae(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Ae(!1)), f.useContext(Wn).location;
}
function Bc(e, t) {
  return zc(e, t);
}
function zc(e, t, n, o) {
  oi() || (process.env.NODE_ENV !== "production" ? Ae(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : Ae(!1));
  let {
    navigator: i
  } = f.useContext(ni), {
    matches: s
  } = f.useContext(Un), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", u = a ? a.pathnameBase : "/", d = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let w = d && d.path || "";
    ha(c, !d || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let p = Lc(), y;
  if (t) {
    var E;
    let w = typeof t == "string" ? Vn(t) : t;
    u === "/" || (E = w.pathname) != null && E.startsWith(u) || (process.env.NODE_ENV !== "production" ? Ae(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + u + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : Ae(!1)), y = w;
  } else
    y = p;
  let b = y.pathname || "/", x = b;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    x = "/" + b.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let v = xc(e, {
    pathname: x
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Ut(d || v != null, 'No routes matched location "' + y.pathname + y.search + y.hash + '" '), process.env.NODE_ENV !== "production" && Ut(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + y.pathname + y.search + y.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let T = Hc(v && v.map((w) => Object.assign({}, w, {
    params: Object.assign({}, l, w.params),
    pathname: sn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? u : sn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), s, n, o);
  return t && T ? /* @__PURE__ */ f.createElement(Wn.Provider, {
    value: {
      location: gr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, y),
      navigationType: _t.Pop
    }
  }, T) : T;
}
function Vc() {
  let e = Xc(), t = jc(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: o
  }, s = {
    padding: "2px 4px",
    backgroundColor: o
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), a = /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ f.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ f.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ f.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ f.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ f.createElement("pre", {
    style: i
  }, n) : null, a);
}
const Wc = /* @__PURE__ */ f.createElement(Vc, null);
class Uc extends f.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ f.createElement(Un.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ f.createElement(ri.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function qc(e) {
  let {
    routeContext: t,
    match: n,
    children: o
  } = e, i = f.useContext(fa);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ f.createElement(Un.Provider, {
    value: t
  }, o);
}
function Hc(e, t, n, o) {
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
    let d = a.findIndex((p) => p.route.id && l?.[p.route.id] !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? Ae(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : Ae(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, u = -1;
  if (n && o && o.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let p = a[d];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d), p.route.id) {
        let {
          loaderData: y,
          errors: E
        } = n, b = p.route.loader && y[p.route.id] === void 0 && (!E || E[p.route.id] === void 0);
        if (p.route.lazy || b) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, p, y) => {
    let E, b = !1, x = null, v = null;
    n && (E = l && p.route.id ? l[p.route.id] : void 0, x = p.route.errorElement || Wc, c && (u < 0 && y === 0 ? (ha("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, v = null) : u === y && (b = !0, v = p.route.hydrateFallbackElement || null)));
    let T = t.concat(a.slice(0, y + 1)), w = () => {
      let g;
      return E ? g = x : b ? g = v : p.route.Component ? g = /* @__PURE__ */ f.createElement(p.route.Component, null) : p.route.element ? g = p.route.element : g = d, /* @__PURE__ */ f.createElement(qc, {
        match: p,
        routeContext: {
          outlet: d,
          matches: T,
          isDataRoute: n != null
        },
        children: g
      });
    };
    return n && (p.route.ErrorBoundary || p.route.errorElement || y === 0) ? /* @__PURE__ */ f.createElement(Uc, {
      location: n.location,
      revalidation: n.revalidation,
      component: x,
      error: E,
      children: w(),
      routeContext: {
        outlet: null,
        matches: T,
        isDataRoute: !0
      }
    }) : w();
  }, null);
}
var ko = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ko || {});
function ma(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Yc(e) {
  let t = f.useContext(pa);
  return t || (process.env.NODE_ENV !== "production" ? Ae(!1, ma(e)) : Ae(!1)), t;
}
function Kc(e) {
  let t = f.useContext(Un);
  return t || (process.env.NODE_ENV !== "production" ? Ae(!1, ma(e)) : Ae(!1)), t;
}
function Gc(e) {
  let t = Kc(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? Ae(!1, e + ' can only be used on routes that contain a unique "id"') : Ae(!1)), n.route.id;
}
function Xc() {
  var e;
  let t = f.useContext(ri), n = Yc(ko.UseRouteError), o = Gc(ko.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[o];
}
const Hi = {};
function ha(e, t, n) {
  !t && !Hi[e] && (Hi[e] = !0, process.env.NODE_ENV !== "production" && Ut(!1, n));
}
const Jc = "startTransition", Yi = f[Jc];
function Qc(e) {
  let {
    basename: t,
    children: n,
    initialEntries: o,
    initialIndex: i,
    future: s
  } = e, a = f.useRef();
  a.current == null && (a.current = yc({
    initialEntries: o,
    initialIndex: i,
    v5Compat: !0
  }));
  let l = a.current, [c, u] = f.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = s || {}, p = f.useCallback((y) => {
    d && Yi ? Yi(() => u(y)) : u(y);
  }, [u, d]);
  return f.useLayoutEffect(() => l.listen(p), [l, p]), /* @__PURE__ */ f.createElement(Zc, {
    basename: t,
    children: n,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: s
  });
}
function ga(e) {
  process.env.NODE_ENV !== "production" ? Ae(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : Ae(!1);
}
function Zc(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: o,
    navigationType: i = _t.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  oi() && (process.env.NODE_ENV !== "production" ? Ae(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : Ae(!1));
  let c = t.replace(/^\/*/, "/"), u = f.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: gr({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof o == "string" && (o = Vn(o));
  let {
    pathname: d = "/",
    search: p = "",
    hash: y = "",
    state: E = null,
    key: b = "default"
  } = o, x = f.useMemo(() => {
    let v = ua(d, c);
    return v == null ? null : {
      location: {
        pathname: v,
        search: p,
        hash: y,
        state: E,
        key: b
      },
      navigationType: i
    };
  }, [c, d, p, y, E, b, i]);
  return process.env.NODE_ENV !== "production" && Ut(x != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + p + y + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), x == null ? null : /* @__PURE__ */ f.createElement(ni.Provider, {
    value: u
  }, /* @__PURE__ */ f.createElement(Wn.Provider, {
    children: n,
    value: x
  }));
}
function eu(e) {
  let {
    children: t,
    location: n
  } = e;
  return Bc(Mo(t), n);
}
new Promise(() => {
});
function Mo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return f.Children.forEach(e, (o, i) => {
    if (!/* @__PURE__ */ f.isValidElement(o))
      return;
    let s = [...t, i];
    if (o.type === f.Fragment) {
      n.push.apply(n, Mo(o.props.children, s));
      return;
    }
    o.type !== ga && (process.env.NODE_ENV !== "production" ? Ae(!1, "[" + (typeof o.type == "string" ? o.type : o.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : Ae(!1)), !o.props.index || !o.props.children || (process.env.NODE_ENV !== "production" ? Ae(!1, "An index route cannot have child routes.") : Ae(!1));
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
const Mn = {
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
}, Zt = {
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
}, en = {
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
}, yn = {
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
}, tu = {
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
function Rt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const gt = "$$material";
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, yr.apply(null, arguments);
}
function ya(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ru = /* @__PURE__ */ ya(
  function(e) {
    return nu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ou = !1;
function iu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function su(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var au = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(i) {
      var s;
      o.tags.length === 0 ? o.insertionPoint ? s = o.insertionPoint.nextSibling : o.prepend ? s = o.container.firstChild : s = o.before : s = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, s), o.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !ou : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(su(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = iu(i);
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
}(), Je = "-ms-", br = "-moz-", be = "-webkit-", ba = "comm", ii = "rule", si = "decl", lu = "@import", va = "@keyframes", cu = "@layer", uu = Math.abs, kr = String.fromCharCode, du = Object.assign;
function fu(e, t) {
  return Ge(e, 0) ^ 45 ? (((t << 2 ^ Ge(e, 0)) << 2 ^ Ge(e, 1)) << 2 ^ Ge(e, 2)) << 2 ^ Ge(e, 3) : 0;
}
function Ea(e) {
  return e.trim();
}
function pu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function $o(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function $n(e, t, n) {
  return e.slice(t, n);
}
function St(e) {
  return e.length;
}
function ai(e) {
  return e.length;
}
function Zn(e, t) {
  return t.push(e), e;
}
function mu(e, t) {
  return e.map(t).join("");
}
var Mr = 1, cn = 1, xa = 0, rt = 0, He = 0, dn = "";
function $r(e, t, n, o, i, s, a) {
  return { value: e, root: t, parent: n, type: o, props: i, children: s, line: Mr, column: cn, length: a, return: "" };
}
function bn(e, t) {
  return du($r("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hu() {
  return He;
}
function gu() {
  return He = rt > 0 ? Ge(dn, --rt) : 0, cn--, He === 10 && (cn = 1, Mr--), He;
}
function st() {
  return He = rt < xa ? Ge(dn, rt++) : 0, cn++, He === 10 && (cn = 1, Mr++), He;
}
function wt() {
  return Ge(dn, rt);
}
function cr() {
  return rt;
}
function qn(e, t) {
  return $n(dn, e, t);
}
function Nn(e) {
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
function Sa(e) {
  return Mr = cn = 1, xa = St(dn = e), rt = 0, [];
}
function Ca(e) {
  return dn = "", e;
}
function ur(e) {
  return Ea(qn(rt - 1, No(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yu(e) {
  for (; (He = wt()) && He < 33; )
    st();
  return Nn(e) > 2 || Nn(He) > 3 ? "" : " ";
}
function bu(e, t) {
  for (; --t && st() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return qn(e, cr() + (t < 6 && wt() == 32 && st() == 32));
}
function No(e) {
  for (; st(); )
    switch (He) {
      case e:
        return rt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && No(He);
        break;
      case 40:
        e === 41 && No(e);
        break;
      case 92:
        st();
        break;
    }
  return rt;
}
function vu(e, t) {
  for (; st() && e + He !== 57; )
    if (e + He === 84 && wt() === 47)
      break;
  return "/*" + qn(t, rt - 1) + "*" + kr(e === 47 ? e : st());
}
function Eu(e) {
  for (; !Nn(wt()); )
    st();
  return qn(e, rt);
}
function xu(e) {
  return Ca(dr("", null, null, null, [""], e = Sa(e), 0, [0], e));
}
function dr(e, t, n, o, i, s, a, l, c) {
  for (var u = 0, d = 0, p = a, y = 0, E = 0, b = 0, x = 1, v = 1, T = 1, w = 0, g = "", C = i, h = s, P = o, k = g; v; )
    switch (b = w, w = st()) {
      case 40:
        if (b != 108 && Ge(k, p - 1) == 58) {
          $o(k += ve(ur(w), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ur(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += yu(b);
        break;
      case 92:
        k += bu(cr() - 1, 7);
        continue;
      case 47:
        switch (wt()) {
          case 42:
          case 47:
            Zn(Su(vu(st(), cr()), t, n), c);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * x:
        l[u++] = St(k) * T;
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            T == -1 && (k = ve(k, /\f/g, "")), E > 0 && St(k) - p && Zn(E > 32 ? Gi(k + ";", o, n, p - 1) : Gi(ve(k, " ", "") + ";", o, n, p - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (Zn(P = Ki(k, t, n, u, d, i, l, g, C = [], h = [], p), s), w === 123)
              if (d === 0)
                dr(k, t, P, P, C, s, p, l, h);
              else
                switch (y === 99 && Ge(k, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dr(e, P, P, o && Zn(Ki(e, P, P, 0, 0, i, l, g, i, C = [], p), h), i, h, p, l, o ? C : h);
                    break;
                  default:
                    dr(k, P, P, P, [""], h, 0, l, h);
                }
        }
        u = d = E = 0, x = T = 1, g = k = "", p = a;
        break;
      case 58:
        p = 1 + St(k), E = b;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && gu() == 125)
            continue;
        }
        switch (k += kr(w), w * x) {
          case 38:
            T = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = (St(k) - 1) * T, T = 1;
            break;
          case 64:
            wt() === 45 && (k += ur(st())), y = wt(), d = p = St(g = k += Eu(cr())), w++;
            break;
          case 45:
            b === 45 && St(k) == 2 && (x = 0);
        }
    }
  return s;
}
function Ki(e, t, n, o, i, s, a, l, c, u, d) {
  for (var p = i - 1, y = i === 0 ? s : [""], E = ai(y), b = 0, x = 0, v = 0; b < o; ++b)
    for (var T = 0, w = $n(e, p + 1, p = uu(x = a[b])), g = e; T < E; ++T)
      (g = Ea(x > 0 ? y[T] + " " + w : ve(w, /&\f/g, y[T]))) && (c[v++] = g);
  return $r(e, t, n, i === 0 ? ii : l, c, u, d);
}
function Su(e, t, n) {
  return $r(e, t, n, ba, kr(hu()), $n(e, 2, -2), 0);
}
function Gi(e, t, n, o) {
  return $r(e, t, n, si, $n(e, 0, o), $n(e, o + 1, -1), o);
}
function an(e, t) {
  for (var n = "", o = ai(e), i = 0; i < o; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Cu(e, t, n, o) {
  switch (e.type) {
    case cu:
      if (e.children.length) break;
    case lu:
    case si:
      return e.return = e.return || e.value;
    case ba:
      return "";
    case va:
      return e.return = e.value + "{" + an(e.children, o) + "}";
    case ii:
      e.value = e.props.join(",");
  }
  return St(n = an(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Tu(e) {
  var t = ai(e);
  return function(n, o, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, o, i, s) || "";
    return a;
  };
}
function wu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ru = function(t, n, o) {
  for (var i = 0, s = 0; i = s, s = wt(), i === 38 && s === 12 && (n[o] = 1), !Nn(s); )
    st();
  return qn(t, rt);
}, Ou = function(t, n) {
  var o = -1, i = 44;
  do
    switch (Nn(i)) {
      case 0:
        i === 38 && wt() === 12 && (n[o] = 1), t[o] += Ru(rt - 1, n, o);
        break;
      case 2:
        t[o] += ur(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = wt() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += kr(i);
    }
  while (i = st());
  return t;
}, Pu = function(t, n) {
  return Ca(Ou(Sa(t), n));
}, Xi = /* @__PURE__ */ new WeakMap(), ku = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xi.get(o)) && !i) {
      Xi.set(t, !0);
      for (var s = [], a = Pu(n, s), l = o.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Mu = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ta(e, t) {
  switch (fu(e, t)) {
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
      return be + e + br + e + Je + e + e;
    case 6828:
    case 4268:
      return be + e + Je + e + e;
    case 6165:
      return be + e + Je + "flex-" + e + e;
    case 5187:
      return be + e + ve(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Je + "flex-$1$2") + e;
    case 5443:
      return be + e + Je + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return be + e + Je + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return be + e + Je + ve(e, "shrink", "negative") + e;
    case 5292:
      return be + e + Je + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return be + "box-" + ve(e, "-grow", "") + be + e + Je + ve(e, "grow", "positive") + e;
    case 4554:
      return be + ve(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, be + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Je + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
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
      if (St(e) - 1 - t > 6) switch (Ge(e, t + 1)) {
        case 109:
          if (Ge(e, t + 4) !== 45) break;
        case 102:
          return ve(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + br + (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~$o(e, "stretch") ? Ta(ve(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ge(e, t + 1) !== 115) break;
    case 6444:
      switch (Ge(e, St(e) - 3 - (~$o(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + be) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (Ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Je + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return be + e + Je + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return be + e + Je + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return be + e + Je + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return be + e + Je + e + e;
  }
  return e;
}
var $u = function(t, n, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case si:
      t.return = Ta(t.value, t.length);
      break;
    case va:
      return an([bn(t, {
        value: ve(t.value, "@", "@" + be)
      })], i);
    case ii:
      if (t.length) return mu(t.props, function(s) {
        switch (pu(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return an([bn(t, {
              props: [ve(s, /:(read-\w+)/, ":" + br + "$1")]
            })], i);
          case "::placeholder":
            return an([bn(t, {
              props: [ve(s, /:(plac\w+)/, ":" + be + "input-$1")]
            }), bn(t, {
              props: [ve(s, /:(plac\w+)/, ":" + br + "$1")]
            }), bn(t, {
              props: [ve(s, /:(plac\w+)/, Je + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Nu = [$u], Iu = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(x) {
      var v = x.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Nu, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(x) {
      for (var v = x.getAttribute("data-emotion").split(" "), T = 1; T < v.length; T++)
        s[v[T]] = !0;
      l.push(x);
    }
  );
  var c, u = [ku, Mu];
  {
    var d, p = [Cu, wu(function(x) {
      d.insert(x);
    })], y = Tu(u.concat(i, p)), E = function(v) {
      return an(xu(v), y);
    };
    c = function(v, T, w, g) {
      d = w, E(v ? v + "{" + T.styles + "}" : T.styles), g && (b.inserted[T.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new au({
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
  return b.sheet.hydrate(l), b;
}, Io = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ji;
function _u() {
  if (Ji) return xe;
  Ji = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case b:
                case E:
                case a:
                  return h;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function C(h) {
    return g(h) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = l, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = o, xe.Lazy = b, xe.Memo = E, xe.Portal = n, xe.Profiler = s, xe.StrictMode = i, xe.Suspense = p, xe.isAsyncMode = function(h) {
    return C(h) || g(h) === c;
  }, xe.isConcurrentMode = C, xe.isContextConsumer = function(h) {
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
    return g(h) === b;
  }, xe.isMemo = function(h) {
    return g(h) === E;
  }, xe.isPortal = function(h) {
    return g(h) === n;
  }, xe.isProfiler = function(h) {
    return g(h) === s;
  }, xe.isStrictMode = function(h) {
    return g(h) === i;
  }, xe.isSuspense = function(h) {
    return g(h) === p;
  }, xe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === p || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === w || h.$$typeof === x);
  }, xe.typeOf = g, xe;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Au() {
  return Qi || (Qi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === o || R === u || R === s || R === i || R === p || R === y || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === E || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === v || R.$$typeof === T || R.$$typeof === w || R.$$typeof === x);
    }
    function C(R) {
      if (typeof R == "object" && R !== null) {
        var oe = R.$$typeof;
        switch (oe) {
          case t:
            var _ = R.type;
            switch (_) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case p:
                return _;
              default:
                var le = _ && _.$$typeof;
                switch (le) {
                  case l:
                  case d:
                  case b:
                  case E:
                  case a:
                    return le;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var h = c, P = u, k = l, I = a, m = t, M = d, F = o, B = b, q = E, L = n, z = s, D = i, U = p, Y = !1;
    function re(R) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(R) || C(R) === c;
    }
    function N(R) {
      return C(R) === u;
    }
    function A(R) {
      return C(R) === l;
    }
    function X(R) {
      return C(R) === a;
    }
    function W(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function H(R) {
      return C(R) === d;
    }
    function Q(R) {
      return C(R) === o;
    }
    function G(R) {
      return C(R) === b;
    }
    function J(R) {
      return C(R) === E;
    }
    function ee(R) {
      return C(R) === n;
    }
    function Z(R) {
      return C(R) === s;
    }
    function V(R) {
      return C(R) === i;
    }
    function te(R) {
      return C(R) === p;
    }
    Se.AsyncMode = h, Se.ConcurrentMode = P, Se.ContextConsumer = k, Se.ContextProvider = I, Se.Element = m, Se.ForwardRef = M, Se.Fragment = F, Se.Lazy = B, Se.Memo = q, Se.Portal = L, Se.Profiler = z, Se.StrictMode = D, Se.Suspense = U, Se.isAsyncMode = re, Se.isConcurrentMode = N, Se.isContextConsumer = A, Se.isContextProvider = X, Se.isElement = W, Se.isForwardRef = H, Se.isFragment = Q, Se.isLazy = G, Se.isMemo = J, Se.isPortal = ee, Se.isProfiler = Z, Se.isStrictMode = V, Se.isSuspense = te, Se.isValidElementType = g, Se.typeOf = C;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Io.exports = _u() : Io.exports = Au();
var ju = Io.exports, wa = ju, Du = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ra = {};
Ra[wa.ForwardRef] = Du;
Ra[wa.Memo] = Fu;
var Lu = !0;
function Bu(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : o += i + " ";
  }), o;
}
var Oa = function(t, n, o) {
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
  Lu === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Pa = function(t, n, o) {
  Oa(t, n, o);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function zu(e) {
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
var Vu = {
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
}, Wu = !1, Uu = /[A-Z]|^ms/g, qu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ka = function(t) {
  return t.charCodeAt(1) === 45;
}, Zi = function(t) {
  return t != null && typeof t != "boolean";
}, lo = /* @__PURE__ */ ya(function(e) {
  return ka(e) ? e : e.replace(Uu, "-$&").toLowerCase();
}), es = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(qu, function(o, i, s) {
          return Ct = {
            name: i,
            styles: s,
            next: Ct
          }, i;
        });
  }
  return Vu[t] !== 1 && !ka(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Hu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function In(e, t, n) {
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
        return Ct = {
          name: i.name,
          styles: i.styles,
          next: Ct
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ct = {
              name: a.name,
              styles: a.styles,
              next: Ct
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Yu(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ct, u = n(e);
        return Ct = c, In(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function Yu(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += In(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? o += s + "{" + t[l] + "}" : Zi(l) && (o += lo(s) + ":" + es(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Wu)
          throw new Error(Hu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Zi(a[c]) && (o += lo(s) + ":" + es(s, a[c]) + ";");
        else {
          var u = In(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              o += lo(s) + ":" + u + ";";
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
var ts = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ct;
function li(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Ct = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += In(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += In(n, t, e[l]), o) {
      var c = s;
      i += c[l];
    }
  ts.lastIndex = 0;
  for (var u = "", d; (d = ts.exec(i)) !== null; )
    u += "-" + d[1];
  var p = zu(i) + u;
  return {
    name: p,
    styles: i,
    next: Ct
  };
}
var Ku = function(t) {
  return t();
}, Ma = f.useInsertionEffect ? f.useInsertionEffect : !1, Gu = Ma || Ku, ns = Ma || f.useLayoutEffect, $a = /* @__PURE__ */ f.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Iu({
    key: "css"
  }) : null
);
$a.Provider;
var Na = function(t) {
  return /* @__PURE__ */ uc(function(n, o) {
    var i = ti($a);
    return t(n, i, o);
  });
}, Nr = /* @__PURE__ */ f.createContext({}), Xu = /* @__PURE__ */ Na(function(e, t) {
  var n = e.styles, o = li([n], void 0, f.useContext(Nr)), i = f.useRef();
  return ns(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + o.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), ns(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (o.next !== void 0 && Pa(t, o.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", o, a, !1);
  }, [t, o.name]), null;
});
function Ir() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return li(t);
}
var fn = function() {
  var t = Ir.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ju = ru, Qu = function(t) {
  return t !== "theme";
}, rs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ju : Qu;
}, os = function(t, n, o) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && o && (i = t.__emotion_forwardProp), i;
}, Zu = !1, ed = function(t) {
  var n = t.cache, o = t.serialized, i = t.isStringTag;
  return Oa(n, o, i), Gu(function() {
    return Pa(n, o, i);
  }), null;
}, td = function e(t, n) {
  var o = t.__emotion_real === t, i = o && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = os(t, n, o), c = l || rs(i), u = !c("as");
  return function() {
    var d = arguments, p = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var y = d.length, E = 1; E < y; E++)
        p.push(d[E], d[0][E]);
    }
    var b = Na(function(x, v, T) {
      var w = u && x.as || i, g = "", C = [], h = x;
      if (x.theme == null) {
        h = {};
        for (var P in x)
          h[P] = x[P];
        h.theme = f.useContext(Nr);
      }
      typeof x.className == "string" ? g = Bu(v.registered, C, x.className) : x.className != null && (g = x.className + " ");
      var k = li(p.concat(C), v.registered, h);
      g += v.key + "-" + k.name, a !== void 0 && (g += " " + a);
      var I = u && l === void 0 ? rs(w) : c, m = {};
      for (var M in x)
        u && M === "as" || I(M) && (m[M] = x[M]);
      return m.className = g, T && (m.ref = T), /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(ed, {
        cache: v,
        serialized: k,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ f.createElement(w, m));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && Zu ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(x, v) {
      return e(x, yr({}, n, v, {
        shouldForwardProp: os(b, v, !0)
      })).apply(void 0, p);
    }, b;
  };
}, nd = [
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
], _o = td.bind();
nd.forEach(function(e) {
  _o[e] = _o(e);
});
var Ao = { exports: {} }, er = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function rd() {
  if (is) return Ce;
  is = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case o:
            case s:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case b:
                case E:
                case a:
                  return h;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function C(h) {
    return g(h) === u;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = u, Ce.ContextConsumer = l, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = d, Ce.Fragment = o, Ce.Lazy = b, Ce.Memo = E, Ce.Portal = n, Ce.Profiler = s, Ce.StrictMode = i, Ce.Suspense = p, Ce.isAsyncMode = function(h) {
    return C(h) || g(h) === c;
  }, Ce.isConcurrentMode = C, Ce.isContextConsumer = function(h) {
    return g(h) === l;
  }, Ce.isContextProvider = function(h) {
    return g(h) === a;
  }, Ce.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Ce.isForwardRef = function(h) {
    return g(h) === d;
  }, Ce.isFragment = function(h) {
    return g(h) === o;
  }, Ce.isLazy = function(h) {
    return g(h) === b;
  }, Ce.isMemo = function(h) {
    return g(h) === E;
  }, Ce.isPortal = function(h) {
    return g(h) === n;
  }, Ce.isProfiler = function(h) {
    return g(h) === s;
  }, Ce.isStrictMode = function(h) {
    return g(h) === i;
  }, Ce.isSuspense = function(h) {
    return g(h) === p;
  }, Ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === p || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === w || h.$$typeof === x);
  }, Ce.typeOf = g, Ce;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function od() {
  return ss || (ss = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === o || R === u || R === s || R === i || R === p || R === y || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === E || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === v || R.$$typeof === T || R.$$typeof === w || R.$$typeof === x);
    }
    function C(R) {
      if (typeof R == "object" && R !== null) {
        var oe = R.$$typeof;
        switch (oe) {
          case t:
            var _ = R.type;
            switch (_) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case p:
                return _;
              default:
                var le = _ && _.$$typeof;
                switch (le) {
                  case l:
                  case d:
                  case b:
                  case E:
                  case a:
                    return le;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var h = c, P = u, k = l, I = a, m = t, M = d, F = o, B = b, q = E, L = n, z = s, D = i, U = p, Y = !1;
    function re(R) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(R) || C(R) === c;
    }
    function N(R) {
      return C(R) === u;
    }
    function A(R) {
      return C(R) === l;
    }
    function X(R) {
      return C(R) === a;
    }
    function W(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function H(R) {
      return C(R) === d;
    }
    function Q(R) {
      return C(R) === o;
    }
    function G(R) {
      return C(R) === b;
    }
    function J(R) {
      return C(R) === E;
    }
    function ee(R) {
      return C(R) === n;
    }
    function Z(R) {
      return C(R) === s;
    }
    function V(R) {
      return C(R) === i;
    }
    function te(R) {
      return C(R) === p;
    }
    Te.AsyncMode = h, Te.ConcurrentMode = P, Te.ContextConsumer = k, Te.ContextProvider = I, Te.Element = m, Te.ForwardRef = M, Te.Fragment = F, Te.Lazy = B, Te.Memo = q, Te.Portal = L, Te.Profiler = z, Te.StrictMode = D, Te.Suspense = U, Te.isAsyncMode = re, Te.isConcurrentMode = N, Te.isContextConsumer = A, Te.isContextProvider = X, Te.isElement = W, Te.isForwardRef = H, Te.isFragment = Q, Te.isLazy = G, Te.isMemo = J, Te.isPortal = ee, Te.isProfiler = Z, Te.isStrictMode = V, Te.isSuspense = te, Te.isValidElementType = g, Te.typeOf = C;
  }()), Te;
}
var as;
function Ia() {
  return as || (as = 1, process.env.NODE_ENV === "production" ? er.exports = rd() : er.exports = od()), er.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var co, ls;
function id() {
  if (ls) return co;
  ls = 1;
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
  return co = i() ? Object.assign : function(s, a) {
    for (var l, c = o(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var y = 0; y < u.length; y++)
          n.call(l, u[y]) && (c[u[y]] = l[u[y]]);
      }
    }
    return c;
  }, co;
}
var uo, cs;
function ci() {
  if (cs) return uo;
  cs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uo = e, uo;
}
var fo, us;
function _a() {
  return us || (us = 1, fo = Function.call.bind(Object.prototype.hasOwnProperty)), fo;
}
var po, ds;
function sd() {
  if (ds) return po;
  ds = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ci(), n = {}, o = _a();
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
          var p;
          try {
            if (typeof s[d] != "function") {
              var y = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = s[d](a, d, c, l, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, po = i, po;
}
var mo, fs;
function ad() {
  if (fs) return mo;
  fs = 1;
  var e = Ia(), t = id(), n = ci(), o = _a(), i = sd(), s = function() {
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
  return mo = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(N) {
      var A = N && (u && N[u] || N[d]);
      if (typeof A == "function")
        return A;
    }
    var y = "<<anonymous>>", E = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: w(),
      arrayOf: g,
      element: C(),
      elementType: h(),
      instanceOf: P,
      node: M(),
      objectOf: I,
      oneOf: k,
      oneOfType: m,
      shape: B,
      exact: q
    };
    function b(N, A) {
      return N === A ? N !== 0 || 1 / N === 1 / A : N !== N && A !== A;
    }
    function x(N, A) {
      this.message = N, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function v(N) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, X = 0;
      function W(Q, G, J, ee, Z, V, te) {
        if (ee = ee || y, V = V || J, te !== n) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = ee + ":" + J;
            !A[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[oe] = !0, X++);
          }
        }
        return G[J] == null ? Q ? G[J] === null ? new x("The " + Z + " `" + V + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new x("The " + Z + " `" + V + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : N(G, J, ee, Z, V);
      }
      var H = W.bind(null, !1);
      return H.isRequired = W.bind(null, !0), H;
    }
    function T(N) {
      function A(X, W, H, Q, G, J) {
        var ee = X[W], Z = D(ee);
        if (Z !== N) {
          var V = U(ee);
          return new x(
            "Invalid " + Q + " `" + G + "` of type " + ("`" + V + "` supplied to `" + H + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return v(A);
    }
    function w() {
      return v(a);
    }
    function g(N) {
      function A(X, W, H, Q, G) {
        if (typeof N != "function")
          return new x("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var J = X[W];
        if (!Array.isArray(J)) {
          var ee = D(J);
          return new x("Invalid " + Q + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Z = 0; Z < J.length; Z++) {
          var V = N(J, Z, H, Q, G + "[" + Z + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(A);
    }
    function C() {
      function N(A, X, W, H, Q) {
        var G = A[X];
        if (!l(G)) {
          var J = D(G);
          return new x("Invalid " + H + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(N);
    }
    function h() {
      function N(A, X, W, H, Q) {
        var G = A[X];
        if (!e.isValidElementType(G)) {
          var J = D(G);
          return new x("Invalid " + H + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function P(N) {
      function A(X, W, H, Q, G) {
        if (!(X[W] instanceof N)) {
          var J = N.name || y, ee = re(X[W]);
          return new x("Invalid " + Q + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return v(A);
    }
    function k(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function A(X, W, H, Q, G) {
        for (var J = X[W], ee = 0; ee < N.length; ee++)
          if (b(J, N[ee]))
            return null;
        var Z = JSON.stringify(N, function(te, R) {
          var oe = U(R);
          return oe === "symbol" ? String(R) : R;
        });
        return new x("Invalid " + Q + " `" + G + "` of value `" + String(J) + "` " + ("supplied to `" + H + "`, expected one of " + Z + "."));
      }
      return v(A);
    }
    function I(N) {
      function A(X, W, H, Q, G) {
        if (typeof N != "function")
          return new x("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var J = X[W], ee = D(J);
        if (ee !== "object")
          return new x("Invalid " + Q + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an object."));
        for (var Z in J)
          if (o(J, Z)) {
            var V = N(J, Z, H, Q, G + "." + Z, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(A);
    }
    function m(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var A = 0; A < N.length; A++) {
        var X = N[A];
        if (typeof X != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(X) + " at index " + A + "."
          ), a;
      }
      function W(H, Q, G, J, ee) {
        for (var Z = [], V = 0; V < N.length; V++) {
          var te = N[V], R = te(H, Q, G, J, ee, n);
          if (R == null)
            return null;
          R.data && o(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var oe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new x("Invalid " + J + " `" + ee + "` supplied to " + ("`" + G + "`" + oe + "."));
      }
      return v(W);
    }
    function M() {
      function N(A, X, W, H, Q) {
        return L(A[X]) ? null : new x("Invalid " + H + " `" + Q + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return v(N);
    }
    function F(N, A, X, W, H) {
      return new x(
        (N || "React class") + ": " + A + " type `" + X + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B(N) {
      function A(X, W, H, Q, G) {
        var J = X[W], ee = D(J);
        if (ee !== "object")
          return new x("Invalid " + Q + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Z in N) {
          var V = N[Z];
          if (typeof V != "function")
            return F(H, Q, G, Z, U(V));
          var te = V(J, Z, H, Q, G + "." + Z, n);
          if (te)
            return te;
        }
        return null;
      }
      return v(A);
    }
    function q(N) {
      function A(X, W, H, Q, G) {
        var J = X[W], ee = D(J);
        if (ee !== "object")
          return new x("Invalid " + Q + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Z = t({}, X[W], N);
        for (var V in Z) {
          var te = N[V];
          if (o(N, V) && typeof te != "function")
            return F(H, Q, G, V, U(te));
          if (!te)
            return new x(
              "Invalid " + Q + " `" + G + "` key `" + V + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(X[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var R = te(J, V, H, Q, G + "." + V, n);
          if (R)
            return R;
        }
        return null;
      }
      return v(A);
    }
    function L(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(L);
          if (N === null || l(N))
            return !0;
          var A = p(N);
          if (A) {
            var X = A.call(N), W;
            if (A !== N.entries) {
              for (; !(W = X.next()).done; )
                if (!L(W.value))
                  return !1;
            } else
              for (; !(W = X.next()).done; ) {
                var H = W.value;
                if (H && !L(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(N, A) {
      return N === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function D(N) {
      var A = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : z(A, N) ? "symbol" : A;
    }
    function U(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var A = D(N);
      if (A === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function Y(N) {
      var A = U(N);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function re(N) {
      return !N.constructor || !N.constructor.name ? y : N.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, mo;
}
var ho, ps;
function ld() {
  if (ps) return ho;
  ps = 1;
  var e = ci();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ho = function() {
    function o(a, l, c, u, d, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
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
  }, ho;
}
if (process.env.NODE_ENV !== "production") {
  var cd = Ia(), ud = !0;
  Ao.exports = ad()(cd.isElement, ud);
} else
  Ao.exports = ld()();
var dd = Ao.exports;
const r = /* @__PURE__ */ mc(dd);
function fd(e) {
  return e == null || Object.keys(e).length === 0;
}
function ui(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (i) => t(fd(i) ? n : i) : t;
  return /* @__PURE__ */ O.jsx(Xu, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
  const n = _o(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
const pd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Tt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ja(e) {
  if (!Tt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ja(e[n]);
  }), t;
}
function Ke(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return Tt(e) && Tt(t) && Object.keys(t).forEach((i) => {
    Tt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Tt(e[i]) ? o[i] = Ke(e[i], t[i], n) : n.clone ? o[i] = Tt(t[i]) ? ja(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
const md = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function hd(e) {
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
  } = e, s = md(t), a = Object.keys(s);
  function l(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${n})`;
  }
  function c(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - o / 100}${n})`;
  }
  function u(y, E) {
    const b = a.indexOf(E);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${n}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : E) - o / 100}${n})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? u(y, a[a.indexOf(y) + 1]) : l(y);
  }
  function p(y) {
    const E = a.indexOf(y);
    return E === 0 ? l(a[1]) : E === a.length - 1 ? c(a[E]) : u(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: n,
    ...i
  };
}
function gd(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(o.match(s)?.[1] || 0) - +(i.match(s)?.[1] || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const s = t[i];
    return delete o[i], o[i] = s, o;
  }, {
    ...t
  }) : t;
}
function yd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function bd(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Rt(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function vd(e) {
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
const Ed = {
  borderRadius: 4
}, Dt = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {};
function Rn(e, t) {
  return t ? Ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _r = {
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
}, ms = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${_r[e]}px)`
}, xd = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : _r[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function yt(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || ms;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || ms;
    return Object.keys(t).reduce((a, l) => {
      if (yd(s.keys, l)) {
        const c = bd(o.containerQueries ? o : xd, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || _r).includes(l)) {
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
function Da(e = {}) {
  return e.keys?.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {}) || {};
}
function Fa(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function Sd(e, ...t) {
  const n = Da(e), o = [n, ...t].reduce((i, s) => Ke(i, s), {});
  return Fa(Object.keys(n), o);
}
function Cd(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function go({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || Cd(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ue(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Rt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ar(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function vr(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = Ar(e, n) || o, t && (i = t(i, o, e)), i;
}
function Ue(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Ar(c, o) || {};
    return yt(a, l, (p) => {
      let y = vr(u, i, p);
      return p === y && typeof p == "string" && (y = vr(u, i, `${t}${p === "default" ? "" : ue(p)}`, p)), n === !1 ? y : {
        [n]: y
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Dt
  } : {}, s.filterProps = [t], s;
}
function Td(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const wd = {
  m: "margin",
  p: "padding"
}, Rd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, hs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Od = Td((e) => {
  if (e.length > 2)
    if (hs[e])
      e = hs[e];
    else
      return [e];
  const [t, n] = e.split(""), o = wd[t], i = Rd[n] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), jr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Dr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pd = [...jr, ...Dr];
function Hn(e, t, n, o) {
  const i = Ar(e, t, !0) ?? n;
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
function Fr(e) {
  return Hn(e, "spacing", 8, "spacing");
}
function qt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function kd(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = qt(t, n), o), {});
}
function Md(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = Od(n), s = kd(i, o), a = e[n];
  return yt(e, a, s);
}
function La(e, t) {
  const n = Fr(e.theme);
  return Object.keys(e).map((o) => Md(e, t, o, n)).reduce(Rn, {});
}
function ze(e) {
  return La(e, jr);
}
ze.propTypes = process.env.NODE_ENV !== "production" ? jr.reduce((e, t) => (e[t] = Dt, e), {}) : {};
ze.filterProps = jr;
function Ve(e) {
  return La(e, Dr);
}
Ve.propTypes = process.env.NODE_ENV !== "production" ? Dr.reduce((e, t) => (e[t] = Dt, e), {}) : {};
Ve.filterProps = Dr;
process.env.NODE_ENV !== "production" && Pd.reduce((e, t) => (e[t] = Dt, e), {});
function Ba(e = 8, t = Fr({
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
function Lr(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, s) => t[s] ? Rn(i, t[s](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function pt(e, t) {
  return Ue({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const $d = pt("border", dt), Nd = pt("borderTop", dt), Id = pt("borderRight", dt), _d = pt("borderBottom", dt), Ad = pt("borderLeft", dt), jd = pt("borderColor"), Dd = pt("borderTopColor"), Fd = pt("borderRightColor"), Ld = pt("borderBottomColor"), Bd = pt("borderLeftColor"), zd = pt("outline", dt), Vd = pt("outlineColor"), Br = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: qt(t, o)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Dt
} : {};
Br.filterProps = ["borderRadius"];
Lr($d, Nd, Id, _d, Ad, jd, Dd, Fd, Ld, Bd, Br, zd, Vd);
const zr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hn(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: qt(t, o)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
zr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Dt
} : {};
zr.filterProps = ["gap"];
const Vr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hn(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: qt(t, o)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
Vr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Dt
} : {};
Vr.filterProps = ["columnGap"];
const Wr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hn(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: qt(t, o)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Dt
} : {};
Wr.filterProps = ["rowGap"];
const Wd = Ue({
  prop: "gridColumn"
}), Ud = Ue({
  prop: "gridRow"
}), qd = Ue({
  prop: "gridAutoFlow"
}), Hd = Ue({
  prop: "gridAutoColumns"
}), Yd = Ue({
  prop: "gridAutoRows"
}), Kd = Ue({
  prop: "gridTemplateColumns"
}), Gd = Ue({
  prop: "gridTemplateRows"
}), Xd = Ue({
  prop: "gridTemplateAreas"
}), Jd = Ue({
  prop: "gridArea"
});
Lr(zr, Vr, Wr, Wd, Ud, qd, Hd, Yd, Kd, Gd, Xd, Jd);
function ln(e, t) {
  return t === "grey" ? t : e;
}
const Qd = Ue({
  prop: "color",
  themeKey: "palette",
  transform: ln
}), Zd = Ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ln
}), ef = Ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ln
});
Lr(Qd, Zd, ef);
function it(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tf = Ue({
  prop: "width",
  transform: it
}), di = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      const o = e.theme?.breakpoints?.values?.[n] || _r[n];
      return o ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: it(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
di.filterProps = ["maxWidth"];
const nf = Ue({
  prop: "minWidth",
  transform: it
}), rf = Ue({
  prop: "height",
  transform: it
}), of = Ue({
  prop: "maxHeight",
  transform: it
}), sf = Ue({
  prop: "minHeight",
  transform: it
});
Ue({
  prop: "size",
  cssProperty: "width",
  transform: it
});
Ue({
  prop: "size",
  cssProperty: "height",
  transform: it
});
const af = Ue({
  prop: "boxSizing"
});
Lr(tf, di, nf, rf, of, sf, af);
const Yn = {
  // borders
  border: {
    themeKey: "borders",
    transform: dt
  },
  borderTop: {
    themeKey: "borders",
    transform: dt
  },
  borderRight: {
    themeKey: "borders",
    transform: dt
  },
  borderBottom: {
    themeKey: "borders",
    transform: dt
  },
  borderLeft: {
    themeKey: "borders",
    transform: dt
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
    transform: dt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Br
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ln
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ln
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ln
  },
  // spacing
  p: {
    style: Ve
  },
  pt: {
    style: Ve
  },
  pr: {
    style: Ve
  },
  pb: {
    style: Ve
  },
  pl: {
    style: Ve
  },
  px: {
    style: Ve
  },
  py: {
    style: Ve
  },
  padding: {
    style: Ve
  },
  paddingTop: {
    style: Ve
  },
  paddingRight: {
    style: Ve
  },
  paddingBottom: {
    style: Ve
  },
  paddingLeft: {
    style: Ve
  },
  paddingX: {
    style: Ve
  },
  paddingY: {
    style: Ve
  },
  paddingInline: {
    style: Ve
  },
  paddingInlineStart: {
    style: Ve
  },
  paddingInlineEnd: {
    style: Ve
  },
  paddingBlock: {
    style: Ve
  },
  paddingBlockStart: {
    style: Ve
  },
  paddingBlockEnd: {
    style: Ve
  },
  m: {
    style: ze
  },
  mt: {
    style: ze
  },
  mr: {
    style: ze
  },
  mb: {
    style: ze
  },
  ml: {
    style: ze
  },
  mx: {
    style: ze
  },
  my: {
    style: ze
  },
  margin: {
    style: ze
  },
  marginTop: {
    style: ze
  },
  marginRight: {
    style: ze
  },
  marginBottom: {
    style: ze
  },
  marginLeft: {
    style: ze
  },
  marginX: {
    style: ze
  },
  marginY: {
    style: ze
  },
  marginInline: {
    style: ze
  },
  marginInlineStart: {
    style: ze
  },
  marginInlineEnd: {
    style: ze
  },
  marginBlock: {
    style: ze
  },
  marginBlockStart: {
    style: ze
  },
  marginBlockEnd: {
    style: ze
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
    style: zr
  },
  rowGap: {
    style: Wr
  },
  columnGap: {
    style: Vr
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
    transform: it
  },
  maxWidth: {
    style: di
  },
  minWidth: {
    transform: it
  },
  height: {
    transform: it
  },
  maxHeight: {
    transform: it
  },
  minHeight: {
    transform: it
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
function lf(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function cf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uf() {
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
      style: p
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const y = Ar(i, u) || {};
    return p ? p(a) : yt(a, o, (b) => {
      let x = vr(y, d, b);
      return b === x && typeof b == "string" && (x = vr(y, d, `${n}${b === "default" ? "" : ue(b)}`, b)), c === !1 ? x : {
        [c]: x
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
    const s = i.unstable_sxConfig ?? Yn;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Da(i.breakpoints), d = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((y) => {
        const E = cf(c[y], i);
        if (E != null)
          if (typeof E == "object")
            if (s[y])
              p = Rn(p, e(y, E, i, s));
            else {
              const b = yt({
                theme: i
              }, E, (x) => ({
                [y]: x
              }));
              lf(b, E) ? p[y] = t({
                sx: E,
                theme: i
              }) : p = Rn(p, b);
            }
          else
            p = Rn(p, e(y, E, i, s));
      }), gd(i, Fa(d, p));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Yt = uf();
Yt.filterProps = ["sx"];
function df(e, t) {
  const n = this;
  if (n.vars) {
    if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Ur(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = hd(n), c = Ba(i);
  let u = Ke({
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
      ...Ed,
      ...s
    }
  }, a);
  return u = vd(u), u.applyStyles = df, u = t.reduce((d, p) => Ke(d, p), u), u.unstable_sxConfig = {
    ...Yn,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return Yt({
      sx: p,
      theme: this
    });
  }, u;
}
function ff(e) {
  return Object.keys(e).length === 0;
}
function za(e = null) {
  const t = f.useContext(Nr);
  return !t || ff(t) ? e : t;
}
const pf = Ur();
function qr(e = pf) {
  return za(e);
}
function Va({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = qr(n), i = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ O.jsx(ui, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Va.propTypes = {
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
const mf = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = e?.theme?.unstable_sxConfig ?? Yn;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function fi(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: i
  } = mf(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Tt(l) ? {
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
const gs = (e) => e, hf = () => {
  let e = gs;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = gs;
    }
  };
}, Wa = hf();
function Ua(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Ua(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function de() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ua(e)) && (o && (o += " "), o += t);
  return o;
}
function gf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = Aa("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Yt);
  return /* @__PURE__ */ f.forwardRef(function(c, u) {
    const d = qr(n), {
      className: p,
      component: y = "div",
      ...E
    } = fi(c);
    return /* @__PURE__ */ O.jsx(s, {
      as: y,
      ref: u,
      className: de(p, i ? i(o) : o),
      theme: t && d[t] || d,
      ...E
    });
  });
}
const yf = {
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
function Ne(e, t, n = "Mui") {
  const o = yf[t];
  return o ? `${n}-${o}` : `${Wa.generate(e)}-${t}`;
}
function Pe(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = Ne(e, i, n);
  }), o;
}
var jo = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function bf() {
  if (ys) return we;
  ys = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function x(v) {
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
                case y:
                case p:
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
  return we.ContextConsumer = a, we.ContextProvider = s, we.Element = e, we.ForwardRef = c, we.Fragment = n, we.Lazy = y, we.Memo = p, we.Portal = t, we.Profiler = i, we.StrictMode = o, we.Suspense = u, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(v) {
    return x(v) === a;
  }, we.isContextProvider = function(v) {
    return x(v) === s;
  }, we.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, we.isForwardRef = function(v) {
    return x(v) === c;
  }, we.isFragment = function(v) {
    return x(v) === n;
  }, we.isLazy = function(v) {
    return x(v) === y;
  }, we.isMemo = function(v) {
    return x(v) === p;
  }, we.isPortal = function(v) {
    return x(v) === t;
  }, we.isProfiler = function(v) {
    return x(v) === i;
  }, we.isStrictMode = function(v) {
    return x(v) === o;
  }, we.isSuspense = function(v) {
    return x(v) === u;
  }, we.isSuspenseList = function(v) {
    return x(v) === d;
  }, we.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === i || v === o || v === u || v === d || v === E || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === p || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === b || v.getModuleId !== void 0);
  }, we.typeOf = x, we;
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
var bs;
function vf() {
  return bs || (bs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = !1, x = !1, v = !1, T = !1, w = !1, g;
    g = Symbol.for("react.module.reference");
    function C(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === i || w || _ === o || _ === u || _ === d || T || _ === E || b || x || v || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === p || _.$$typeof === s || _.$$typeof === a || _.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === g || _.getModuleId !== void 0));
    }
    function h(_) {
      if (typeof _ == "object" && _ !== null) {
        var le = _.$$typeof;
        switch (le) {
          case e:
            var ge = _.type;
            switch (ge) {
              case n:
              case i:
              case o:
              case u:
              case d:
                return ge;
              default:
                var Ie = ge && ge.$$typeof;
                switch (Ie) {
                  case l:
                  case a:
                  case c:
                  case y:
                  case p:
                  case s:
                    return Ie;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var P = a, k = s, I = e, m = c, M = n, F = y, B = p, q = t, L = i, z = o, D = u, U = d, Y = !1, re = !1;
    function N(_) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(_) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(_) {
      return h(_) === a;
    }
    function W(_) {
      return h(_) === s;
    }
    function H(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function Q(_) {
      return h(_) === c;
    }
    function G(_) {
      return h(_) === n;
    }
    function J(_) {
      return h(_) === y;
    }
    function ee(_) {
      return h(_) === p;
    }
    function Z(_) {
      return h(_) === t;
    }
    function V(_) {
      return h(_) === i;
    }
    function te(_) {
      return h(_) === o;
    }
    function R(_) {
      return h(_) === u;
    }
    function oe(_) {
      return h(_) === d;
    }
    Re.ContextConsumer = P, Re.ContextProvider = k, Re.Element = I, Re.ForwardRef = m, Re.Fragment = M, Re.Lazy = F, Re.Memo = B, Re.Portal = q, Re.Profiler = L, Re.StrictMode = z, Re.Suspense = D, Re.SuspenseList = U, Re.isAsyncMode = N, Re.isConcurrentMode = A, Re.isContextConsumer = X, Re.isContextProvider = W, Re.isElement = H, Re.isForwardRef = Q, Re.isFragment = G, Re.isLazy = J, Re.isMemo = ee, Re.isPortal = Z, Re.isProfiler = V, Re.isStrictMode = te, Re.isSuspense = R, Re.isSuspenseList = oe, Re.isValidElementType = C, Re.typeOf = h;
  }()), Re;
}
process.env.NODE_ENV === "production" ? jo.exports = bf() : jo.exports = vf();
var _n = jo.exports;
function qa(e, t = "") {
  return e.displayName || e.name || t;
}
function vs(e, t, n) {
  const o = qa(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Ef(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return qa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _n.ForwardRef:
          return vs(e, e.render, "ForwardRef");
        case _n.Memo:
          return vs(e, e.type, "memo");
        default:
          return;
      }
  }
}
const xf = Ur();
function yo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Do(e, t, n) {
  return Cf(t) ? n : t[e] || t;
}
const tr = Symbol("mui.processed_props");
function nr(e, t, n) {
  if (tr in e)
    return e[tr];
  const o = {
    ...e,
    theme: Do(t, e.theme, n)
  };
  return e[tr] = o, o[tr] = o, o;
}
function Sf(e) {
  return e ? (t, n) => n[e] : null;
}
function fr(e, t) {
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((o) => fr(o, t));
  if (Array.isArray(n?.variants)) {
    const {
      variants: o,
      ...i
    } = n;
    let s = i, a;
    e: for (let l = 0; l < o.length; l += 1) {
      const c = o[l];
      if (typeof c.props == "function") {
        if (a ??= {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }, !c.props(a))
          continue;
      } else
        for (const u in c.props)
          if (t[u] !== c.props[u] && t.ownerState?.[u] !== c.props[u])
            continue e;
      Array.isArray(s) || (s = [s]), typeof c.style == "function" ? (a ??= {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }, s.push(c.style(a))) : s.push(c.style);
    }
    return s;
  }
  return n;
}
function Ha(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = xf,
    rootShouldForwardProp: o = yo,
    slotShouldForwardProp: i = yo
  } = e, s = (l) => Yt(nr(l, t, n));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    pd(l, (P) => P.filter((k) => !k?.__mui_systemSx));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = Sf(Es(d)),
      ...b
    } = c, x = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), v = y || !1;
    let T;
    process.env.NODE_ENV !== "production" && u && (T = `${u}-${Es(d || "Root")}`);
    let w = yo;
    d === "Root" || d === "root" ? w = o : d ? w = i : Tf(l) && (w = void 0);
    const g = Aa(l, {
      shouldForwardProp: w,
      label: T,
      ...b
    }), C = (P) => typeof P == "function" && P.__emotion_real !== P || Tt(P) ? (k) => fr(P, nr(k, t, n)) : P, h = (P, ...k) => {
      let I = C(P);
      const m = k ? k.map(C) : [];
      u && E && m.push((B) => {
        const q = Do(t, B.theme, n);
        if (!q.components || !q.components[u] || !q.components[u].styleOverrides)
          return null;
        const L = q.components[u].styleOverrides, z = {}, D = nr(B, t, n);
        for (const U in L)
          z[U] = fr(L[U], D);
        return E(B, z);
      }), u && !x && m.push((B) => {
        const L = Do(t, B.theme, n)?.components?.[u]?.variants;
        return L ? fr({
          variants: L
        }, nr(B, t, n)) : null;
      }), v || m.push(s);
      const M = m.length - k.length;
      if (Array.isArray(P) && M > 0) {
        const B = new Array(M).fill("");
        I = [...P, ...B], I.raw = [...P.raw, ...B];
      }
      const F = g(I, ...m);
      if (process.env.NODE_ENV !== "production") {
        let B;
        u && (B = `${u}${ue(d || "")}`), B === void 0 && (B = `Styled(${Ef(l)})`), F.displayName = B;
      }
      return l.muiName && (F.muiName = l.muiName), F;
    };
    return g.withConfig && (h.withConfig = g.withConfig), h;
  };
}
function Cf(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Tf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Es(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const wf = Ha();
function An(e, t) {
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
              n[i][c] = An(s[c], a[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Rf(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : An(t.components[n].defaultProps, o);
}
function Ya({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = qr(n);
  return o && (i = i[o] || i), Rf({
    theme: i,
    name: t,
    props: e
  });
}
const At = typeof window < "u" ? f.useLayoutEffect : f.useEffect;
function Of(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function pi(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Of(e, t, n);
}
function Pf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(Pf(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Rt(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Rt(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const kf = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, Cn = (e, t) => {
  try {
    return kf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Hr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Ka(e) {
  e = jt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Hr({
    type: l,
    values: c
  });
}
function Fo(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(Ka(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xs(e, t) {
  const n = Fo(e), o = Fo(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function ft(e, t) {
  return e = jt(e), t = pi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Hr(e);
}
function rr(e, t, n) {
  try {
    return ft(e, t);
  } catch {
    return e;
  }
}
function Yr(e, t) {
  if (e = jt(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Hr(e);
}
function Me(e, t, n) {
  try {
    return Yr(e, t);
  } catch {
    return e;
  }
}
function Kr(e, t) {
  if (e = jt(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Hr(e);
}
function $e(e, t, n) {
  try {
    return Kr(e, t);
  } catch {
    return e;
  }
}
function Mf(e, t = 0.15) {
  return Fo(e) > 0.5 ? Yr(e, t) : Kr(e, t);
}
function or(e, t, n) {
  try {
    return Mf(e, t);
  } catch {
    return e;
  }
}
function Kn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function $f(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ga(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !$f(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Gn = Kn(r.element, Ga);
Gn.isRequired = Kn(r.element.isRequired, Ga);
function Nf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function If(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Nf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const mi = Kn(r.elementType, If), _f = "exact-prop: ​";
function Gr(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [_f]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function jn(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Mt = r.oneOfType([r.func, r.object]);
function Ss(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Xa(e, t = 166) {
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
function bo(e, t) {
  return /* @__PURE__ */ f.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
function at(e) {
  return e && e.ownerDocument || document;
}
function Ht(e) {
  return at(e).defaultView || window;
}
function Lo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Cs = 0;
function Af(e) {
  const [t, n] = f.useState(e), o = e || t;
  return f.useEffect(() => {
    t == null && (Cs += 1, n(`mui-${Cs}`));
  }, [t]), o;
}
const Ts = f.useId;
function Ja(e) {
  if (Ts !== void 0) {
    const t = Ts();
    return e ?? t;
  }
  return Af(e);
}
function ws({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: i
  } = f.useRef(e !== void 0), [s, a] = f.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    f.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, e]);
    const {
      current: u
    } = f.useRef(t);
    f.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = f.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function on(e) {
  const t = f.useRef(e);
  return At(() => {
    t.current = e;
  }), f.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Xe(...e) {
  return f.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Lo(n, t);
    });
  }, e);
}
const Rs = {};
function Qa(e, t) {
  const n = f.useRef(Rs);
  return n.current === Rs && (n.current = e(t)), n;
}
const jf = [];
function Df(e) {
  f.useEffect(e, jf);
}
class hi {
  static create() {
    return new hi();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function Za() {
  const e = Qa(hi.create).current;
  return Df(e.disposeEffect), e;
}
function Os(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function el(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Ff(e) {
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
function tl(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Ff(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function nl(e, t, ...n) {
  return e[t] === void 0 ? null : tl(e, t, ...n);
}
function Bo() {
  return null;
}
nl.isRequired = tl;
Bo.isRequired = Bo;
const rl = process.env.NODE_ENV === "production" ? Bo : nl;
function je(e, t, n = void 0) {
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
function Lf(e) {
  return typeof e == "string";
}
function ol(e, t, n) {
  return e === void 0 || Lf(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function il(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function Ps(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function sl(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const E = de(n?.className, s, i?.className, o?.className), b = {
      ...n?.style,
      ...i?.style,
      ...o?.style
    }, x = {
      ...n,
      ...i,
      ...o
    };
    return E.length > 0 && (x.className = E), Object.keys(b).length > 0 && (x.style = b), {
      props: x,
      internalRef: void 0
    };
  }
  const a = il({
    ...i,
    ...o
  }), l = Ps(o), c = Ps(i), u = t(a), d = de(u?.className, n?.className, s, i?.className, o?.className), p = {
    ...u?.style,
    ...n?.style,
    ...i?.style,
    ...o?.style
  }, y = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return d.length > 0 && (y.className = d), Object.keys(p).length > 0 && (y.style = p), {
    props: y,
    internalRef: u.ref
  };
}
function al(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ks(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : al(n, o), {
    props: l,
    internalRef: c
  } = sl({
    ...s,
    externalSlotProps: a
  }), u = Xe(c, a?.ref, e.additionalProps?.ref);
  return ol(t, {
    ...l,
    ref: u
  }, o);
}
function Xn(e) {
  return !e || !/* @__PURE__ */ f.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const gi = /* @__PURE__ */ f.createContext(null);
process.env.NODE_ENV !== "production" && (gi.displayName = "ThemeContext");
function yi() {
  const e = f.useContext(gi);
  return process.env.NODE_ENV !== "production" && f.useDebugValue(e), e;
}
const Bf = typeof Symbol == "function" && Symbol.for, zf = Bf ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Vf(e, t) {
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
function Er(e) {
  const {
    children: t,
    theme: n
  } = e, o = yi();
  process.env.NODE_ENV !== "production" && o === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = f.useMemo(() => {
    const s = o === null ? {
      ...n
    } : Vf(o, n);
    return s != null && (s[zf] = o !== null), s;
  }, [n, o]);
  return /* @__PURE__ */ O.jsx(gi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Er.propTypes = {
  /**
   * Your component tree.
   */
  children: r.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: r.oneOfType([r.object, r.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Er.propTypes = Gr(Er.propTypes));
const ll = /* @__PURE__ */ f.createContext();
function cl({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ O.jsx(ll.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  children: r.node,
  value: r.bool
});
const ul = () => f.useContext(ll) ?? !1, dl = /* @__PURE__ */ f.createContext(void 0);
function fl({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ O.jsx(dl.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
function Wf(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? An(i.defaultProps, o) : !i.styleOverrides && !i.variants ? An(i, o) : o;
}
function Uf({
  props: e,
  name: t
}) {
  const n = f.useContext(dl);
  return Wf({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Ms = {};
function $s(e, t, n, o = !1) {
  return f.useMemo(() => {
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
function Dn(e) {
  const {
    children: t,
    theme: n,
    themeId: o
  } = e, i = za(Ms), s = yi() || Ms;
  process.env.NODE_ENV !== "production" && (i === null && typeof n == "function" || o && i && !i[o] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = $s(o, i, n), l = $s(o, s, n, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ O.jsx(Er, {
    theme: l,
    children: /* @__PURE__ */ O.jsx(Nr.Provider, {
      value: a,
      children: /* @__PURE__ */ O.jsx(cl, {
        value: c,
        children: /* @__PURE__ */ O.jsx(fl, {
          value: a?.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Dn.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Dn.propTypes = Gr(Dn.propTypes));
const bi = "mode", vi = "color-scheme", qf = "data-color-scheme";
function Hf(e) {
  const {
    defaultLightColorScheme: t = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = bi,
    colorSchemeStorageKey: i = vi,
    attribute: s = qf,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const p = u.substring(1);
    c += `${a}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${a}.classList.add('${p}'.replace('%s', colorScheme));`;
  }
  const d = u.match(/\[([^\]]+)\]/);
  if (d) {
    const [p, y] = d[1].split("=");
    y || (c += `${a}.removeAttribute('${p}'.replace('%s', light));
      ${a}.removeAttribute('${p}'.replace('%s', dark));`), c += `
      ${a}.setAttribute('${p}'.replace('%s', colorScheme), ${y ? `${y}.replace('%s', colorScheme)` : '""'});`;
  } else
    c += `${a}.setAttribute('${u}', colorScheme);`;
  return /* @__PURE__ */ O.jsx("script", {
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
function Ns(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function pl(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Yf(e) {
  return pl(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function vo(e, t) {
  if (typeof window > "u")
    return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0, n || localStorage.setItem(e, t);
  } catch {
  }
  return n || t;
}
function Kf(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: o,
    supportedColorSchemes: i = [],
    modeStorageKey: s = bi,
    colorSchemeStorageKey: a = vi,
    storageWindow: l = typeof window > "u" ? void 0 : window
  } = e, c = i.join(","), u = i.length > 1, [d, p] = f.useState(() => {
    const g = vo(s, t), C = vo(`${a}-light`, n), h = vo(`${a}-dark`, o);
    return {
      mode: g,
      systemMode: Ns(g),
      lightColorScheme: C,
      darkColorScheme: h
    };
  }), [, y] = f.useState(!1), E = f.useRef(!1);
  f.useEffect(() => {
    u && y(!0), E.current = !0;
  }, [u]);
  const b = Yf(d), x = f.useCallback((g) => {
    p((C) => {
      if (g === C.mode)
        return C;
      const h = g ?? t;
      try {
        localStorage.setItem(s, h);
      } catch {
      }
      return {
        ...C,
        mode: h,
        systemMode: Ns(h)
      };
    });
  }, [s, t]), v = f.useCallback((g) => {
    g ? typeof g == "string" ? g && !c.includes(g) ? console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`) : p((C) => {
      const h = {
        ...C
      };
      return pl(C, (P) => {
        try {
          localStorage.setItem(`${a}-${P}`, g);
        } catch {
        }
        P === "light" && (h.lightColorScheme = g), P === "dark" && (h.darkColorScheme = g);
      }), h;
    }) : p((C) => {
      const h = {
        ...C
      }, P = g.light === null ? n : g.light, k = g.dark === null ? o : g.dark;
      if (P)
        if (!c.includes(P))
          console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          h.lightColorScheme = P;
          try {
            localStorage.setItem(`${a}-light`, P);
          } catch {
          }
        }
      if (k)
        if (!c.includes(k))
          console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          h.darkColorScheme = k;
          try {
            localStorage.setItem(`${a}-dark`, k);
          } catch {
          }
        }
      return h;
    }) : p((C) => {
      try {
        localStorage.setItem(`${a}-light`, n), localStorage.setItem(`${a}-dark`, o);
      } catch {
      }
      return {
        ...C,
        lightColorScheme: n,
        darkColorScheme: o
      };
    });
  }, [c, a, n, o]), T = f.useCallback((g) => {
    d.mode === "system" && p((C) => {
      const h = g?.matches ? "dark" : "light";
      return C.systemMode === h ? C : {
        ...C,
        systemMode: h
      };
    });
  }, [d.mode]), w = f.useRef(T);
  return w.current = T, f.useEffect(() => {
    if (typeof window.matchMedia != "function" || !u)
      return;
    const g = (...h) => w.current(...h), C = window.matchMedia("(prefers-color-scheme: dark)");
    return C.addListener(g), g(C), () => {
      C.removeListener(g);
    };
  }, [u]), f.useEffect(() => {
    if (l && u) {
      const g = (C) => {
        const h = C.newValue;
        typeof C.key == "string" && C.key.startsWith(a) && (!h || c.match(h)) && (C.key.endsWith("light") && v({
          light: h
        }), C.key.endsWith("dark") && v({
          dark: h
        })), C.key === s && (!h || ["light", "dark", "system"].includes(h)) && x(h || t);
      };
      return l.addEventListener("storage", g), () => {
        l.removeEventListener("storage", g);
      };
    }
  }, [v, x, s, a, c, t, l, u]), {
    ...d,
    mode: E.current || !u ? d.mode : void 0,
    systemMode: E.current || !u ? d.systemMode : void 0,
    colorScheme: E.current || !u ? b : void 0,
    setMode: x,
    setColorScheme: v
  };
}
const Gf = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Xf(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: o = bi,
    colorSchemeStorageKey: i = vi,
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
  }, u = /* @__PURE__ */ f.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => f.useContext(u) || c;
  function p(x) {
    const {
      children: v,
      theme: T,
      modeStorageKey: w = o,
      colorSchemeStorageKey: g = i,
      disableTransitionOnChange: C = s,
      storageWindow: h = typeof window > "u" ? void 0 : window,
      documentNode: P = typeof document > "u" ? void 0 : document,
      colorSchemeNode: k = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: m = !1
    } = x, M = f.useRef(!1), F = yi(), B = f.useContext(u), q = !!B && !I, L = f.useMemo(() => T || (typeof n == "function" ? n() : n), [T]), z = L[t], {
      colorSchemes: D = {},
      components: U = {},
      cssVarPrefix: Y,
      ...re
    } = z || L, N = Object.keys(D).filter((ae) => !!D[ae]).join(","), A = f.useMemo(() => N.split(","), [N]), X = typeof a == "string" ? a : a.light, W = typeof a == "string" ? a : a.dark, H = D[X] && D[W] ? "system" : D[re.defaultColorScheme]?.palette?.mode || re.palette?.mode, {
      mode: Q,
      setMode: G,
      systemMode: J,
      lightColorScheme: ee,
      darkColorScheme: Z,
      colorScheme: V,
      setColorScheme: te
    } = Kf({
      supportedColorSchemes: A,
      defaultLightColorScheme: X,
      defaultDarkColorScheme: W,
      modeStorageKey: w,
      colorSchemeStorageKey: g,
      defaultMode: H,
      storageWindow: h
    });
    let R = Q, oe = V;
    q && (R = B.mode, oe = B.colorScheme);
    const _ = oe || re.defaultColorScheme, le = re.generateThemeVars?.() || re.vars, ge = {
      ...re,
      components: U,
      colorSchemes: D,
      cssVarPrefix: Y,
      vars: le
    };
    if (typeof ge.generateSpacing == "function" && (ge.spacing = ge.generateSpacing()), _) {
      const ae = D[_];
      ae && typeof ae == "object" && Object.keys(ae).forEach((fe) => {
        ae[fe] && typeof ae[fe] == "object" ? ge[fe] = {
          ...ge[fe],
          ...ae[fe]
        } : ge[fe] = ae[fe];
      });
    }
    const Ie = re.colorSchemeSelector;
    f.useEffect(() => {
      if (oe && k && Ie && Ie !== "media") {
        const ae = Ie;
        let fe = Ie;
        if (ae === "class" && (fe = ".%s"), ae === "data" && (fe = "[data-%s]"), ae?.startsWith("data-") && !ae.includes("%s") && (fe = `[${ae}="%s"]`), fe.startsWith("."))
          k.classList.remove(...A.map((ne) => fe.substring(1).replace("%s", ne))), k.classList.add(fe.substring(1).replace("%s", oe));
        else {
          const ne = fe.replace("%s", oe).match(/\[([^\]]+)\]/);
          if (ne) {
            const [Be, tt] = ne[1].split("=");
            tt || A.forEach((ot) => {
              k.removeAttribute(Be.replace(oe, ot));
            }), k.setAttribute(Be, tt ? tt.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(fe, oe);
        }
      }
    }, [oe, Ie, k, A]), f.useEffect(() => {
      let ae;
      if (C && M.current && P) {
        const fe = P.createElement("style");
        fe.appendChild(P.createTextNode(Gf)), P.head.appendChild(fe), window.getComputedStyle(P.body), ae = setTimeout(() => {
          P.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(ae);
      };
    }, [oe, C, P]), f.useEffect(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const Le = f.useMemo(() => ({
      allColorSchemes: A,
      colorScheme: oe,
      darkColorScheme: Z,
      lightColorScheme: ee,
      mode: R,
      setColorScheme: te,
      setMode: G,
      systemMode: J
    }), [A, oe, Z, ee, R, te, G, J]);
    let Oe = !0;
    (m || re.cssVariables === !1 || q && F?.cssVarPrefix === Y) && (Oe = !1);
    const Qe = /* @__PURE__ */ O.jsxs(f.Fragment, {
      children: [Oe && /* @__PURE__ */ O.jsx(f.Fragment, {
        children: (ge.generateStyleSheets?.() || []).map((ae, fe) => /* @__PURE__ */ O.jsx(ui, {
          styles: ae
        }, fe))
      }), /* @__PURE__ */ O.jsx(Dn, {
        themeId: z ? t : void 0,
        theme: l ? l(ge) : ge,
        children: v
      })]
    });
    return q ? Qe : /* @__PURE__ */ O.jsx(u.Provider, {
      value: Le,
      children: Qe
    });
  }
  process.env.NODE_ENV !== "production" && (p.propTypes = {
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
  const y = typeof a == "string" ? a : a.light, E = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: p,
    useColorScheme: d,
    getInitColorSchemeScript: (x) => Hf({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: E,
      modeStorageKey: o,
      ...x
    })
  };
}
function Jf(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Is = (e, t, n, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, Qf = (e, t, n) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  o(e);
}, Zf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function Eo(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return Qf(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Zf(l, c);
        Object.assign(i, {
          [d]: p
        }), Is(s, l, `var(${d})`, u), Is(a, l, `var(${d}, ${p})`, u);
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
function ep(e, t = {}) {
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
    varsWithDefaults: p
  } = Eo(c, t);
  let y = p;
  const E = {}, {
    [l]: b,
    ...x
  } = s;
  if (Object.entries(x || {}).forEach(([g, C]) => {
    const {
      vars: h,
      css: P,
      varsWithDefaults: k
    } = Eo(C, t);
    y = Ke(y, k), E[g] = {
      css: P,
      vars: h
    };
  }), b) {
    const {
      css: g,
      vars: C,
      varsWithDefaults: h
    } = Eo(b, t);
    y = Ke(y, h), E[l] = {
      css: g,
      vars: C
    };
  }
  function v(g, C) {
    let h = i;
    if (i === "class" && (h = ".%s"), i === "data" && (h = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (h = `[${i}="%s"]`), g) {
      if (h === "media")
        return e.defaultColorScheme === g ? ":root" : {
          [`@media (prefers-color-scheme: ${s[g]?.palette?.mode || g})`]: {
            ":root": C
          }
        };
      if (h)
        return e.defaultColorScheme === g ? `:root, ${h.replace("%s", String(g))}` : h.replace("%s", String(g));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let g = {
        ...u
      };
      return Object.entries(E).forEach(([, {
        vars: C
      }]) => {
        g = Ke(g, C);
      }), g;
    },
    generateStyleSheets: () => {
      const g = [], C = e.defaultColorScheme || "light";
      function h(I, m) {
        Object.keys(m).length && g.push(typeof I == "string" ? {
          [I]: {
            ...m
          }
        } : I);
      }
      h(n(void 0, {
        ...d
      }), d);
      const {
        [C]: P,
        ...k
      } = E;
      if (P) {
        const {
          css: I
        } = P, m = s[C]?.palette?.mode, M = !o && m ? {
          colorScheme: m,
          ...I
        } : {
          ...I
        };
        h(n(C, {
          ...M
        }), M);
      }
      return Object.entries(k).forEach(([I, {
        css: m
      }]) => {
        const M = s[I]?.palette?.mode, F = !o && M ? {
          colorScheme: M,
          ...m
        } : {
          ...m
        };
        h(n(I, {
          ...F
        }), F);
      }), g;
    }
  };
}
function tp(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const np = Ur(), rp = wf("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function op(e) {
  return Ya({
    props: e,
    name: "MuiStack",
    defaultTheme: np
  });
}
function ip(e, t) {
  const n = f.Children.toArray(e).filter(Boolean);
  return n.reduce((o, i, s) => (o.push(i), s < n.length - 1 && o.push(/* @__PURE__ */ f.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const sp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], ap = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...yt({
      theme: t
    }, go({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = Fr(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = go({
      values: e.direction,
      base: i
    }), a = go({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const y = u > 0 ? s[d[u - 1]] : "column";
        s[c] = y;
      }
    }), n = Ke(n, yt({
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
        [`margin${sp(u ? s[u] : e.direction)}`]: qt(o, c)
      }
    }));
  }
  return n = Sd(t.breakpoints, n), n;
};
function lp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = rp,
    useThemeProps: n = op,
    componentName: o = "MuiStack"
  } = e, i = () => je({
    root: ["root"]
  }, (c) => Ne(o, c), {}), s = t(ap), a = /* @__PURE__ */ f.forwardRef(function(c, u) {
    const d = n(c), p = fi(d), {
      component: y = "div",
      direction: E = "column",
      spacing: b = 0,
      divider: x,
      children: v,
      className: T,
      useFlexGap: w = !1,
      ...g
    } = p, C = {
      direction: E,
      spacing: b,
      useFlexGap: w
    }, h = i();
    return /* @__PURE__ */ O.jsx(s, {
      as: y,
      ownerState: C,
      ref: u,
      className: de(h.root, T),
      ...g,
      children: x ? ip(v, x) : v
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
const _s = {
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
    paper: Mn.white,
    default: Mn.white
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
}, xo = {
  text: {
    primary: Mn.white,
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
    active: Mn.white,
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
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Kr(e.main, i) : t === "dark" && (e.dark = Yr(e.main, s)));
}
function cp(e = "light") {
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
function up(e = "light") {
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
function dp(e = "light") {
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
function fp(e = "light") {
  return e === "dark" ? {
    main: Zt[400],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[700],
    light: Zt[500],
    dark: Zt[900]
  };
}
function pp(e = "light") {
  return e === "dark" ? {
    main: en[400],
    light: en[300],
    dark: en[700]
  } : {
    main: en[800],
    light: en[500],
    dark: en[900]
  };
}
function mp(e = "light") {
  return e === "dark" ? {
    main: yn[400],
    light: yn[300],
    dark: yn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: yn[500],
    dark: yn[900]
  };
}
function Ei(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, s = e.primary || cp(t), a = e.secondary || up(t), l = e.error || dp(t), c = e.info || fp(t), u = e.success || pp(t), d = e.warning || mp(t);
  function p(x) {
    const v = xs(x, xo.text.primary) >= n ? xo.text.primary : _s.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = xs(x, v);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${v} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const y = ({
    color: x,
    name: v,
    mainShade: T = 500,
    lightShade: w = 300,
    darkShade: g = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[T] && (x.main = x[T]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Rt(11, v ? ` (${v})` : "", T));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Rt(12, v ? ` (${v})` : "", JSON.stringify(x.main)));
    return As(x, "light", w, o), As(x, "dark", g, o), x.contrastText || (x.contrastText = p(x.main)), x;
  }, E = {
    dark: xo,
    light: _s
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ke({
    // A collection of common colors.
    common: {
      ...Mn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: tu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...E[t]
  }, i);
}
function hp(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, s] = o;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function gp(e, t) {
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
function yp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const js = {
  textTransform: "uppercase"
}, Ds = '"Roboto", "Helvetica", "Arial", sans-serif';
function ml(e, t) {
  const {
    fontFamily: n = Ds,
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
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = o / 14, E = d || ((v) => `${v / c * y}rem`), b = (v, T, w, g, C) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ds ? {
      letterSpacing: `${yp(g / T)}em`
    } : {},
    ...C,
    ...u
  }), x = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(s, 48, 1.167, 0),
    h4: b(s, 34, 1.235, 0.25),
    h5: b(s, 24, 1.334, 0),
    h6: b(a, 20, 1.6, 0.15),
    subtitle1: b(s, 16, 1.75, 0.15),
    subtitle2: b(a, 14, 1.57, 0.1),
    body1: b(s, 16, 1.5, 0.15),
    body2: b(s, 14, 1.43, 0.15),
    button: b(a, 14, 1.75, 0.4, js),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, js),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ke({
    htmlFontSize: c,
    pxToRem: E,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...x
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const bp = 0.2, vp = 0.14, Ep = 0.12;
function _e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${bp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ep})`].join(",");
}
const xp = ["none", _e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), _e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), _e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), _e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), _e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), _e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), _e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), _e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), _e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), _e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), _e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), _e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), _e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), _e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), _e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), _e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), _e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), _e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), _e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), _e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), _e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), _e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), _e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), _e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Cp = {
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
function Fs(e) {
  return `${Math.round(e)}ms`;
}
function Tp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function wp(e) {
  const t = {
    ...Sp,
    ...e.easing
  }, n = {
    ...Cp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Tp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", p = (y) => !Number.isNaN(parseFloat(y));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Fs(a)} ${l} ${typeof c == "string" ? c : Fs(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Rp = {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Rt(20));
  const d = Ei(s), p = Ur(e);
  let y = Ke(p, {
    mixins: gp(p.breakpoints, o),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xp.slice(),
    typography: ml(d, l),
    transitions: wp(a),
    zIndex: {
      ...Rp
    }
  });
  if (y = Ke(y, u), y = t.reduce((E, b) => Ke(E, b), y), process.env.NODE_ENV !== "production") {
    const E = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (x, v) => {
      let T;
      for (T in x) {
        const w = x[T];
        if (E.includes(T) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = Ne("", T);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[T] = {};
        }
      }
    };
    Object.keys(y.components).forEach((x) => {
      const v = y.components[x].styleOverrides;
      v && x.startsWith("Mui") && b(v, x);
    });
  }
  return y.unstable_sxConfig = {
    ...Yn,
    ...u?.unstable_sxConfig
  }, y.unstable_sx = function(b) {
    return Yt({
      sx: b,
      theme: this
    });
  }, y;
}
function Vo(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Op = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const n = Vo(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function hl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function gl(e) {
  return e === "dark" ? Op : [];
}
function Pp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    ...i
  } = e, s = Ei(t);
  return {
    palette: s,
    opacity: {
      ...hl(s.mode),
      ...n
    },
    overlays: o || gl(s.mode),
    ...i
  };
}
function kp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Mp = (e) => [...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], $p = (e) => (t, n) => {
  const o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Mp(e.cssVarPrefix).forEach((a) => {
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
function Np(e) {
  return Tt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ip(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !Np(l) || a.startsWith("unstable_") ? delete o[a] : Tt(l) && (o[a] = {
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
function _p(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function $(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Tn(e) {
  return !e || !e.startsWith("hsl") ? e : Ka(e);
}
function kt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Cn(Tn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ap(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Et = (e) => {
  try {
    return e();
  } catch {
  }
}, jp = (e = "mui") => Jf(e);
function So(e, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    e[o] = Pp({
      ...t,
      palette: {
        mode: i,
        ...t?.palette
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
      ...t?.palette
    }
  });
  return e[o] = {
    ...t,
    palette: s,
    opacity: {
      ...hl(i),
      ...t?.opacity
    },
    overlays: t?.overlays || gl(i)
  }, a;
}
function Dp(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = kp,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(n)[0], d = o || (n.light && u !== "light" ? "light" : u), p = jp(s), {
    [d]: y,
    light: E,
    dark: b,
    ...x
  } = n, v = {
    ...x
  };
  let T = y;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Rt(21, d));
  const w = So(v, T, c, d);
  E && !v.light && So(v, E, void 0, "light"), b && !v.dark && So(v, b, void 0, "dark");
  let g = {
    defaultColorScheme: d,
    ...w,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: p,
    colorSchemes: v,
    font: {
      ...hp(w.typography),
      ...w.font
    },
    spacing: Ap(c.spacing)
  };
  Object.keys(g.colorSchemes).forEach((I) => {
    const m = g.colorSchemes[I].palette, M = (F) => {
      const B = F.split("-"), q = B[1], L = B[2];
      return p(F, m[q][L]);
    };
    if (m.mode === "light" && ($(m.common, "background", "#fff"), $(m.common, "onBackground", "#000")), m.mode === "dark" && ($(m.common, "background", "#000"), $(m.common, "onBackground", "#fff")), _p(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      $(m.Alert, "errorColor", Me(m.error.light, 0.6)), $(m.Alert, "infoColor", Me(m.info.light, 0.6)), $(m.Alert, "successColor", Me(m.success.light, 0.6)), $(m.Alert, "warningColor", Me(m.warning.light, 0.6)), $(m.Alert, "errorFilledBg", M("palette-error-main")), $(m.Alert, "infoFilledBg", M("palette-info-main")), $(m.Alert, "successFilledBg", M("palette-success-main")), $(m.Alert, "warningFilledBg", M("palette-warning-main")), $(m.Alert, "errorFilledColor", Et(() => m.getContrastText(m.error.main))), $(m.Alert, "infoFilledColor", Et(() => m.getContrastText(m.info.main))), $(m.Alert, "successFilledColor", Et(() => m.getContrastText(m.success.main))), $(m.Alert, "warningFilledColor", Et(() => m.getContrastText(m.warning.main))), $(m.Alert, "errorStandardBg", $e(m.error.light, 0.9)), $(m.Alert, "infoStandardBg", $e(m.info.light, 0.9)), $(m.Alert, "successStandardBg", $e(m.success.light, 0.9)), $(m.Alert, "warningStandardBg", $e(m.warning.light, 0.9)), $(m.Alert, "errorIconColor", M("palette-error-main")), $(m.Alert, "infoIconColor", M("palette-info-main")), $(m.Alert, "successIconColor", M("palette-success-main")), $(m.Alert, "warningIconColor", M("palette-warning-main")), $(m.AppBar, "defaultBg", M("palette-grey-100")), $(m.Avatar, "defaultBg", M("palette-grey-400")), $(m.Button, "inheritContainedBg", M("palette-grey-300")), $(m.Button, "inheritContainedHoverBg", M("palette-grey-A100")), $(m.Chip, "defaultBorder", M("palette-grey-400")), $(m.Chip, "defaultAvatarColor", M("palette-grey-700")), $(m.Chip, "defaultIconColor", M("palette-grey-700")), $(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), $(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), $(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), $(m.LinearProgress, "primaryBg", $e(m.primary.main, 0.62)), $(m.LinearProgress, "secondaryBg", $e(m.secondary.main, 0.62)), $(m.LinearProgress, "errorBg", $e(m.error.main, 0.62)), $(m.LinearProgress, "infoBg", $e(m.info.main, 0.62)), $(m.LinearProgress, "successBg", $e(m.success.main, 0.62)), $(m.LinearProgress, "warningBg", $e(m.warning.main, 0.62)), $(m.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.11)`), $(m.Slider, "primaryTrack", $e(m.primary.main, 0.62)), $(m.Slider, "secondaryTrack", $e(m.secondary.main, 0.62)), $(m.Slider, "errorTrack", $e(m.error.main, 0.62)), $(m.Slider, "infoTrack", $e(m.info.main, 0.62)), $(m.Slider, "successTrack", $e(m.success.main, 0.62)), $(m.Slider, "warningTrack", $e(m.warning.main, 0.62));
      const F = or(m.background.default, 0.8);
      $(m.SnackbarContent, "bg", F), $(m.SnackbarContent, "color", Et(() => m.getContrastText(F))), $(m.SpeedDialAction, "fabHoverBg", or(m.background.paper, 0.15)), $(m.StepConnector, "border", M("palette-grey-400")), $(m.StepContent, "border", M("palette-grey-400")), $(m.Switch, "defaultColor", M("palette-common-white")), $(m.Switch, "defaultDisabledColor", M("palette-grey-100")), $(m.Switch, "primaryDisabledColor", $e(m.primary.main, 0.62)), $(m.Switch, "secondaryDisabledColor", $e(m.secondary.main, 0.62)), $(m.Switch, "errorDisabledColor", $e(m.error.main, 0.62)), $(m.Switch, "infoDisabledColor", $e(m.info.main, 0.62)), $(m.Switch, "successDisabledColor", $e(m.success.main, 0.62)), $(m.Switch, "warningDisabledColor", $e(m.warning.main, 0.62)), $(m.TableCell, "border", $e(rr(m.divider, 1), 0.88)), $(m.Tooltip, "bg", rr(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      $(m.Alert, "errorColor", $e(m.error.light, 0.6)), $(m.Alert, "infoColor", $e(m.info.light, 0.6)), $(m.Alert, "successColor", $e(m.success.light, 0.6)), $(m.Alert, "warningColor", $e(m.warning.light, 0.6)), $(m.Alert, "errorFilledBg", M("palette-error-dark")), $(m.Alert, "infoFilledBg", M("palette-info-dark")), $(m.Alert, "successFilledBg", M("palette-success-dark")), $(m.Alert, "warningFilledBg", M("palette-warning-dark")), $(m.Alert, "errorFilledColor", Et(() => m.getContrastText(m.error.dark))), $(m.Alert, "infoFilledColor", Et(() => m.getContrastText(m.info.dark))), $(m.Alert, "successFilledColor", Et(() => m.getContrastText(m.success.dark))), $(m.Alert, "warningFilledColor", Et(() => m.getContrastText(m.warning.dark))), $(m.Alert, "errorStandardBg", Me(m.error.light, 0.9)), $(m.Alert, "infoStandardBg", Me(m.info.light, 0.9)), $(m.Alert, "successStandardBg", Me(m.success.light, 0.9)), $(m.Alert, "warningStandardBg", Me(m.warning.light, 0.9)), $(m.Alert, "errorIconColor", M("palette-error-main")), $(m.Alert, "infoIconColor", M("palette-info-main")), $(m.Alert, "successIconColor", M("palette-success-main")), $(m.Alert, "warningIconColor", M("palette-warning-main")), $(m.AppBar, "defaultBg", M("palette-grey-900")), $(m.AppBar, "darkBg", M("palette-background-paper")), $(m.AppBar, "darkColor", M("palette-text-primary")), $(m.Avatar, "defaultBg", M("palette-grey-600")), $(m.Button, "inheritContainedBg", M("palette-grey-800")), $(m.Button, "inheritContainedHoverBg", M("palette-grey-700")), $(m.Chip, "defaultBorder", M("palette-grey-700")), $(m.Chip, "defaultAvatarColor", M("palette-grey-300")), $(m.Chip, "defaultIconColor", M("palette-grey-300")), $(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), $(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), $(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), $(m.LinearProgress, "primaryBg", Me(m.primary.main, 0.5)), $(m.LinearProgress, "secondaryBg", Me(m.secondary.main, 0.5)), $(m.LinearProgress, "errorBg", Me(m.error.main, 0.5)), $(m.LinearProgress, "infoBg", Me(m.info.main, 0.5)), $(m.LinearProgress, "successBg", Me(m.success.main, 0.5)), $(m.LinearProgress, "warningBg", Me(m.warning.main, 0.5)), $(m.Skeleton, "bg", `rgba(${M("palette-text-primaryChannel")} / 0.13)`), $(m.Slider, "primaryTrack", Me(m.primary.main, 0.5)), $(m.Slider, "secondaryTrack", Me(m.secondary.main, 0.5)), $(m.Slider, "errorTrack", Me(m.error.main, 0.5)), $(m.Slider, "infoTrack", Me(m.info.main, 0.5)), $(m.Slider, "successTrack", Me(m.success.main, 0.5)), $(m.Slider, "warningTrack", Me(m.warning.main, 0.5));
      const F = or(m.background.default, 0.98);
      $(m.SnackbarContent, "bg", F), $(m.SnackbarContent, "color", Et(() => m.getContrastText(F))), $(m.SpeedDialAction, "fabHoverBg", or(m.background.paper, 0.15)), $(m.StepConnector, "border", M("palette-grey-600")), $(m.StepContent, "border", M("palette-grey-600")), $(m.Switch, "defaultColor", M("palette-grey-300")), $(m.Switch, "defaultDisabledColor", M("palette-grey-600")), $(m.Switch, "primaryDisabledColor", Me(m.primary.main, 0.55)), $(m.Switch, "secondaryDisabledColor", Me(m.secondary.main, 0.55)), $(m.Switch, "errorDisabledColor", Me(m.error.main, 0.55)), $(m.Switch, "infoDisabledColor", Me(m.info.main, 0.55)), $(m.Switch, "successDisabledColor", Me(m.success.main, 0.55)), $(m.Switch, "warningDisabledColor", Me(m.warning.main, 0.55)), $(m.TableCell, "border", Me(rr(m.divider, 1), 0.68)), $(m.Tooltip, "bg", rr(m.grey[700], 0.92));
    }
    kt(m.background, "default"), kt(m.background, "paper"), kt(m.common, "background"), kt(m.common, "onBackground"), kt(m, "divider"), Object.keys(m).forEach((F) => {
      const B = m[F];
      B && typeof B == "object" && (B.main && $(m[F], "mainChannel", Cn(Tn(B.main))), B.light && $(m[F], "lightChannel", Cn(Tn(B.light))), B.dark && $(m[F], "darkChannel", Cn(Tn(B.dark))), B.contrastText && $(m[F], "contrastTextChannel", Cn(Tn(B.contrastText))), F === "text" && (kt(m[F], "primary"), kt(m[F], "secondary")), F === "action" && (B.active && kt(m[F], "active"), B.selected && kt(m[F], "selected")));
    });
  }), g = t.reduce((I, m) => Ke(I, m), g);
  const C = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: a,
    getSelector: $p(g)
  }, {
    vars: h,
    generateThemeVars: P,
    generateStyleSheets: k
  } = ep(g, C);
  return g.vars = h, Object.entries(g.colorSchemes[g.defaultColorScheme]).forEach(([I, m]) => {
    g[I] = m;
  }), g.generateThemeVars = P, g.generateStyleSheets = k, g.generateSpacing = function() {
    return Ba(c.spacing, Fr(this));
  }, g.getColorSchemeSelector = tp(l), g.spacing = g.generateSpacing(), g.shouldSkipGeneratingVar = a, g.unstable_sxConfig = {
    ...Yn,
    ...c?.unstable_sxConfig
  }, g.unstable_sx = function(m) {
    return Yt({
      sx: m,
      theme: this
    });
  }, g.toRuntimeSource = Ip, g;
}
function Ls(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ei({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Xr(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n?.mode,
    ...a
  } = e, l = s || "light", c = i?.[l], u = {
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
    const p = zo({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Ls(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Ls(p, "light", u.light)), p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Dp({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Jr = Xr();
function xi() {
  const e = qr(Jr);
  return process.env.NODE_ENV !== "production" && f.useDebugValue(e), e[gt] || e;
}
function yl({
  props: e,
  name: t
}) {
  return Ya({
    props: e,
    name: t,
    defaultTheme: Jr,
    themeId: gt
  });
}
function bl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const mt = (e) => bl(e) && e !== "classes", se = Ha({
  themeId: gt,
  defaultTheme: Jr,
  rootShouldForwardProp: mt
});
function Bs({
  theme: e,
  ...t
}) {
  const n = gt in e ? e[gt] : void 0;
  return /* @__PURE__ */ O.jsx(Dn, {
    ...t,
    themeId: n ? gt : void 0,
    theme: n || e
  });
}
const ir = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Fp,
  useColorScheme: Lg,
  getInitColorSchemeScript: Bg
} = Xf({
  themeId: gt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Xr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: ir.colorSchemeStorageKey,
  modeStorageKey: ir.modeStorageKey,
  defaultColorScheme: {
    light: ir.defaultLightColorScheme,
    dark: ir.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: ml(e.palette, e.typography)
    };
    return t.unstable_sx = function(o) {
      return Yt({
        sx: o,
        theme: this
      });
    }, t;
  }
}), Lp = Fp;
function Bp({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ O.jsx(Bs, {
    theme: e,
    ...t
  }) : "colorSchemes" in (gt in e ? e[gt] : e) ? /* @__PURE__ */ O.jsx(Lp, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ O.jsx(Bs, {
    theme: e,
    ...t
  });
}
function vl(e) {
  return /* @__PURE__ */ O.jsx(Va, {
    ...e,
    defaultTheme: Jr,
    themeId: gt
  });
}
process.env.NODE_ENV !== "production" && (vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool])
});
function Si(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ O.jsx(vl, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...n
        }) : e
      })
    );
  };
}
function zp() {
  return fi;
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
  return Uf(e);
}
function Vp(e) {
  return Ne("MuiSvgIcon", e);
}
Pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Wp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ue(t)}`, `fontSize${ue(n)}`]
  };
  return je(i, Vp, o);
}, Up = se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ue(n.color)}`], t[`fontSize${ue(n.fontSize)}`]];
  }
})(De(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
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
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
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
}))), Fn = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    titleAccess: p,
    viewBox: y = "0 0 24 24",
    ...E
  } = o, b = /* @__PURE__ */ f.isValidElement(i) && i.type === "svg", x = {
    ...o,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: y,
    hasSvgAsChild: b
  }, v = {};
  d || (v.viewBox = y);
  const T = Wp(x);
  return /* @__PURE__ */ O.jsxs(Up, {
    as: l,
    className: de(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...v,
    ...E,
    ...b && i.props,
    ownerState: x,
    children: [b ? i.props.children : i, p ? /* @__PURE__ */ O.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
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
Fn && (Fn.muiName = "SvgIcon");
function qp(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ O.jsx(Fn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Fn.muiName, /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(n));
}
function El(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    n[o] = e[o];
  }
  return n;
}
function Wo(e, t) {
  return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Wo(e, t);
}
function xl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wo(e, t);
}
const Vs = {
  disabled: !1
};
var Hp = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
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
const xr = et.createContext(null);
var Yp = function(t) {
  return t.scrollTop;
}, wn = "unmounted", zt = "exited", Vt = "entering", rn = "entered", Uo = "exiting", Ot = /* @__PURE__ */ function(e) {
  xl(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, l = a && !a.isMounting ? o.enter : o.appear, c;
    return s.appearStatus = null, o.in ? l ? (c = zt, s.appearStatus = Vt) : c = rn : o.unmountOnExit || o.mountOnEnter ? c = wn : c = zt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === wn ? {
      status: zt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Vt && a !== rn && (s = Vt) : (a === Vt || a === rn) && (s = Uo);
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
      if (this.cancelNextCallback(), s === Vt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this);
          a && Yp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === zt && this.setState({
      status: wn
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Qn.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), y = l ? p.appear : p.enter;
    if (!i && !a || Vs.disabled) {
      this.safeSetState({
        status: rn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Vt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(y, function() {
        s.safeSetState({
          status: rn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Qn.findDOMNode(this);
    if (!s || Vs.disabled) {
      this.safeSetState({
        status: zt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Uo
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: zt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    if (i === wn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = El(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ et.createElement(xr.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : et.cloneElement(et.Children.only(a), l))
    );
  }, t;
}(et.Component);
Ot.contextType = xr;
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = Hp;
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
function tn() {
}
Ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tn,
  onEntering: tn,
  onEntered: tn,
  onExit: tn,
  onExiting: tn,
  onExited: tn
};
Ot.UNMOUNTED = wn;
Ot.EXITED = zt;
Ot.ENTERING = Vt;
Ot.ENTERED = rn;
Ot.EXITING = Uo;
function Kp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ci(e, t) {
  var n = function(s) {
    return t && ar(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && dc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function Gp(e, t) {
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
function Wt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Xp(e, t) {
  return Ci(e.children, function(n) {
    return lr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Wt(n, "appear", e),
      enter: Wt(n, "enter", e),
      exit: Wt(n, "exit", e)
    });
  });
}
function Jp(e, t, n) {
  var o = Ci(e.children), i = Gp(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (ar(a)) {
      var l = s in t, c = s in o, u = t[s], d = ar(u) && !u.props.in;
      c && (!l || d) ? i[s] = lr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }) : !c && l && !d ? i[s] = lr(a, {
        in: !1
      }) : c && l && ar(u) && (i[s] = lr(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }));
    }
  }), i;
}
var Qp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Zp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ti = /* @__PURE__ */ function(e) {
  xl(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(Kp(s));
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
      children: c ? Xp(i, l) : Jp(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Ci(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = yr({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = El(i, ["component", "childFactory"]), c = this.state.contextValue, u = Qp(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ et.createElement(xr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ et.createElement(xr.Provider, {
      value: c
    }, /* @__PURE__ */ et.createElement(s, l, u));
  }, t;
}(et.Component);
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ti.defaultProps = Zp;
const Sl = (e) => e.scrollTop;
function Sr(e, t) {
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
function em(e) {
  return Ne("MuiPaper", e);
}
Pe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const tm = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return je(s, em, i);
}, nm = se("div", {
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
}))), wi = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
  } = o, p = {
    ...o,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, y = tm(p);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ O.jsx(nm, {
    as: a,
    ownerState: p,
    className: de(y.root, s),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": i.vars.overlays?.[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ft("#fff", Vo(l))}, ${ft("#fff", Vo(l))})`
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
  elevation: Kn(rl, (e) => {
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
function ht(e, t) {
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
    slotProps: p = {
      [e]: void 0
    },
    ...y
  } = s, E = d[e] || o, b = al(p[e], i), {
    props: {
      component: x,
      ...v
    },
    internalRef: T
  } = sl({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: b
  }), w = Xe(T, b?.ref, t.ref), g = a ? a(v) : {}, C = {
    ...i,
    ...g
  }, h = e === "root" ? x || u : x, P = ol(E, {
    ...e === "root" && !u && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...v,
    ...h && {
      as: h
    },
    ref: w
  }, C);
  return Object.keys(g).forEach((k) => {
    delete P[k];
  }), [E, P];
}
class Cr {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Cr();
  }
  static use() {
    const t = Qa(Cr.create).current, [n, o] = f.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, f.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = om(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function rm() {
  return Cr.use();
}
function om() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Cl(e) {
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
  } = e, [d, p] = f.useState(!1), y = de(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = de(n.child, d && n.childLeaving, o && n.childPulsate);
  return !l && !d && p(!0), f.useEffect(() => {
    if (!l && c != null) {
      const x = setTimeout(c, u);
      return () => {
        clearTimeout(x);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ O.jsx("span", {
    className: y,
    style: E,
    children: /* @__PURE__ */ O.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
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
const ut = Pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), qo = 550, im = 80, sm = fn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, am = fn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, lm = fn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, cm = se("span", {
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
}), um = se(Cl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ut.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${sm};
    animation-duration: ${qo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ut.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ut.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ut.childLeaving} {
    opacity: 0;
    animation-name: ${am};
    animation-duration: ${qo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ut.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Tl = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const o = Fe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = o, [c, u] = f.useState([]), d = f.useRef(0), p = f.useRef(null);
  f.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const y = f.useRef(!1), E = Za(), b = f.useRef(null), x = f.useRef(null), v = f.useCallback((C) => {
    const {
      pulsate: h,
      rippleX: P,
      rippleY: k,
      rippleSize: I,
      cb: m
    } = C;
    u((M) => [...M, /* @__PURE__ */ O.jsx(um, {
      classes: {
        ripple: de(s.ripple, ut.ripple),
        rippleVisible: de(s.rippleVisible, ut.rippleVisible),
        ripplePulsate: de(s.ripplePulsate, ut.ripplePulsate),
        child: de(s.child, ut.child),
        childLeaving: de(s.childLeaving, ut.childLeaving),
        childPulsate: de(s.childPulsate, ut.childPulsate)
      },
      timeout: qo,
      pulsate: h,
      rippleX: P,
      rippleY: k,
      rippleSize: I
    }, d.current)]), d.current += 1, p.current = m;
  }, [s]), T = f.useCallback((C = {}, h = {}, P = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: I = i || h.pulsate,
      fakeElement: m = !1
      // For test purposes
    } = h;
    if (C?.type === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    C?.type === "touchstart" && (y.current = !0);
    const M = m ? null : x.current, F = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, q, L;
    if (I || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      B = Math.round(F.width / 2), q = Math.round(F.height / 2);
    else {
      const {
        clientX: z,
        clientY: D
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      B = Math.round(z - F.left), q = Math.round(D - F.top);
    }
    if (I)
      L = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const z = Math.max(Math.abs((M ? M.clientWidth : 0) - B), B) * 2 + 2, D = Math.max(Math.abs((M ? M.clientHeight : 0) - q), q) * 2 + 2;
      L = Math.sqrt(z ** 2 + D ** 2);
    }
    C?.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: k,
        rippleX: B,
        rippleY: q,
        rippleSize: L,
        cb: P
      });
    }, E.start(im, () => {
      b.current && (b.current(), b.current = null);
    })) : v({
      pulsate: k,
      rippleX: B,
      rippleY: q,
      rippleSize: L,
      cb: P
    });
  }, [i, v, E]), w = f.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), g = f.useCallback((C, h) => {
    if (E.clear(), C?.type === "touchend" && b.current) {
      b.current(), b.current = null, E.start(0, () => {
        g(C, h);
      });
      return;
    }
    b.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = h;
  }, [E]);
  return f.useImperativeHandle(n, () => ({
    pulsate: w,
    start: T,
    stop: g
  }), [w, T, g]), /* @__PURE__ */ O.jsx(cm, {
    className: de(ut.root, s.root, a),
    ref: x,
    ...l,
    children: /* @__PURE__ */ O.jsx(Ti, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
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
function dm(e) {
  return Ne("MuiButtonBase", e);
}
const fm = Pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), pm = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, a = je({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, dm, i);
  return n && o && (a.root += ` ${o}`), a;
}, mm = se("button", {
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
  [`&.${fm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ri = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    focusVisibleClassName: E,
    LinkComponent: b = "a",
    onBlur: x,
    onClick: v,
    onContextMenu: T,
    onDragLeave: w,
    onFocus: g,
    onFocusVisible: C,
    onKeyDown: h,
    onKeyUp: P,
    onMouseDown: k,
    onMouseLeave: I,
    onMouseUp: m,
    onTouchEnd: M,
    onTouchMove: F,
    onTouchStart: B,
    tabIndex: q = 0,
    TouchRippleProps: L,
    touchRippleRef: z,
    type: D,
    ...U
  } = o, Y = f.useRef(null), re = rm(), N = Xe(re.ref, z), [A, X] = f.useState(!1);
  u && A && X(!1), f.useImperativeHandle(i, () => ({
    focusVisible: () => {
      X(!0), Y.current.focus();
    }
  }), []);
  const W = re.shouldMount && !d && !u;
  f.useEffect(() => {
    A && y && !d && re.pulsate();
  }, [d, y, A, re]);
  function H(ne, Be, tt = p) {
    return on((ot) => (Be && Be(ot), tt || re[ne](ot), !0));
  }
  const Q = H("start", k), G = H("stop", T), J = H("stop", w), ee = H("stop", m), Z = H("stop", (ne) => {
    A && ne.preventDefault(), I && I(ne);
  }), V = H("start", B), te = H("stop", M), R = H("stop", F), oe = H("stop", (ne) => {
    Os(ne.target) || X(!1), x && x(ne);
  }, !1), _ = on((ne) => {
    Y.current || (Y.current = ne.currentTarget), Os(ne.target) && (X(!0), C && C(ne)), g && g(ne);
  }), le = () => {
    const ne = Y.current;
    return c && c !== "button" && !(ne.tagName === "A" && ne.href);
  }, ge = on((ne) => {
    y && !ne.repeat && A && ne.key === " " && re.stop(ne, () => {
      re.start(ne);
    }), ne.target === ne.currentTarget && le() && ne.key === " " && ne.preventDefault(), h && h(ne), ne.target === ne.currentTarget && le() && ne.key === "Enter" && !u && (ne.preventDefault(), v && v(ne));
  }), Ie = on((ne) => {
    y && ne.key === " " && A && !ne.defaultPrevented && re.stop(ne, () => {
      re.pulsate(ne);
    }), P && P(ne), v && ne.target === ne.currentTarget && le() && ne.key === " " && !ne.defaultPrevented && v(ne);
  });
  let Le = c;
  Le === "button" && (U.href || U.to) && (Le = b);
  const Oe = {};
  Le === "button" ? (Oe.type = D === void 0 ? "button" : D, Oe.disabled = u) : (!U.href && !U.to && (Oe.role = "button"), u && (Oe["aria-disabled"] = u));
  const Qe = Xe(n, Y), ae = {
    ...o,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: y,
    tabIndex: q,
    focusVisible: A
  }, fe = pm(ae);
  return /* @__PURE__ */ O.jsxs(mm, {
    as: Le,
    className: de(fe.root, l),
    ownerState: ae,
    onBlur: oe,
    onClick: v,
    onContextMenu: G,
    onFocus: _,
    onKeyDown: ge,
    onKeyUp: Ie,
    onMouseDown: Q,
    onMouseLeave: Z,
    onMouseUp: ee,
    onDragLeave: J,
    onTouchEnd: te,
    onTouchMove: R,
    onTouchStart: V,
    ref: Qe,
    tabIndex: u ? -1 : q,
    type: D,
    ...Oe,
    ...U,
    children: [a, W ? /* @__PURE__ */ O.jsx(Tl, {
      ref: N,
      center: s,
      ...L
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
  action: Mt,
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
  component: mi,
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
function hm(e) {
  return typeof e.main == "string";
}
function gm(e, t = []) {
  if (!hm(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function bt(e = []) {
  return ([, t]) => t && gm(t, e);
}
function ym(e) {
  return Ne("MuiTypography", e);
}
Pe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const bm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, vm = zp(), Em = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ue(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return je(l, ym, a);
}, xm = se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ue(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(De(({
  theme: e
}) => ({
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
  }, ...Object.entries(e.typography).filter(([t, n]) => t !== "inherit" && n && typeof n == "object").map(([t, n]) => ({
    props: {
      variant: t
    },
    style: n
  })), ...Object.entries(e.palette).filter(bt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${ue(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Ws = {
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
}, wl = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const {
    color: o,
    ...i
  } = Fe({
    props: t,
    name: "MuiTypography"
  }), s = !bm[o], a = vm({
    ...i,
    ...s && {
      color: o
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: p = !1,
    paragraph: y = !1,
    variant: E = "body1",
    variantMapping: b = Ws,
    ...x
  } = a, v = {
    ...a,
    align: l,
    color: o,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: p,
    paragraph: y,
    variant: E,
    variantMapping: b
  }, T = u || (y ? "p" : b[E] || Ws[E]) || "span", w = Em(v);
  return /* @__PURE__ */ O.jsx(xm, {
    as: T,
    ref: n,
    className: de(w.root, c),
    ...x,
    ownerState: v,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...x.style
    }
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
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
function Sm(e) {
  return typeof e == "function" ? e() : e;
}
const Tr = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = f.useState(null), c = Xe(Xn(o), n);
  if (At(() => {
    s || l(Sm(i) || document.body);
  }, [i, s]), At(() => {
    if (a && !s)
      return Lo(n, a), () => {
        Lo(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ f.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ f.cloneElement(o, u);
    }
    return /* @__PURE__ */ O.jsx(f.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ O.jsx(f.Fragment, {
    children: a && /* @__PURE__ */ pc.createPortal(o, a)
  });
});
process.env.NODE_ENV !== "production" && (Tr.propTypes = {
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
  container: r.oneOfType([jn, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (Tr.propTypes = Gr(Tr.propTypes));
function sr(e) {
  return parseInt(e, 10) || 0;
}
const Cm = {
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
function Tm(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rl = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = f.useRef(l != null), d = f.useRef(null), p = Xe(n, d), y = f.useRef(null), E = f.useRef(null), b = f.useCallback(() => {
    const T = d.current, g = Ht(T).getComputedStyle(T);
    if (g.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const C = E.current;
    C.style.width = g.width, C.value = T.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const h = g.boxSizing, P = sr(g.paddingBottom) + sr(g.paddingTop), k = sr(g.borderBottomWidth) + sr(g.borderTopWidth), I = C.scrollHeight;
    C.value = "x";
    const m = C.scrollHeight;
    let M = I;
    s && (M = Math.max(Number(s) * m, M)), i && (M = Math.min(Number(i) * m, M)), M = Math.max(M, m);
    const F = M + (h === "border-box" ? P + k : 0), B = Math.abs(M - I) <= 1;
    return {
      outerHeightStyle: F,
      overflowing: B
    };
  }, [i, s, t.placeholder]), x = f.useCallback(() => {
    const T = b();
    if (Tm(T))
      return;
    const w = T.outerHeightStyle, g = d.current;
    y.current !== w && (y.current = w, g.style.height = `${w}px`), g.style.overflow = T.overflowing ? "hidden" : "";
  }, [b]);
  At(() => {
    const T = () => {
      x();
    };
    let w;
    const g = () => {
      cancelAnimationFrame(w), w = requestAnimationFrame(() => {
        T();
      });
    }, C = Xa(T), h = d.current, P = Ht(h);
    P.addEventListener("resize", C);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(process.env.NODE_ENV === "test" ? g : T), k.observe(h)), () => {
      C.clear(), cancelAnimationFrame(w), P.removeEventListener("resize", C), k && k.disconnect();
    };
  }, [b, x]), At(() => {
    x();
  });
  const v = (T) => {
    u || x(), o && o(T);
  };
  return /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [/* @__PURE__ */ O.jsx("textarea", {
      value: l,
      onChange: v,
      ref: p,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ O.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: E,
      tabIndex: -1,
      style: {
        ...Cm.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
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
function Ho(e) {
  return typeof e == "string";
}
function pn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, i) => (o[i] = e[i], n && typeof e[i] > "u" && (o[i] = n[i]), o), {});
}
const Qr = /* @__PURE__ */ f.createContext(void 0);
process.env.NODE_ENV !== "production" && (Qr.displayName = "FormControlContext");
function mn() {
  return f.useContext(Qr);
}
function Us(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function wr(e, t = !1) {
  return e && (Us(e.value) && e.value !== "" || t && Us(e.defaultValue) && e.defaultValue !== "");
}
function wm(e) {
  return e.startAdornment;
}
function Rm(e) {
  return Ne("MuiInputBase", e);
}
const un = Pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var qs;
const Zr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ue(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, eo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Om = (e) => {
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
    readOnly: p,
    size: y,
    startAdornment: E,
    type: b
  } = e, x = {
    root: ["root", `color${ue(n)}`, o && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", y && y !== "medium" && `size${ue(y)}`, d && "multiline", E && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", o && "disabled", b === "search" && "inputTypeSearch", d && "inputMultiline", y === "small" && "inputSizeSmall", u && "inputHiddenLabel", E && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return je(x, Rm, t);
}, to = se("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Zr
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
  [`&.${un.disabled}`]: {
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
}))), no = se("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: eo
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
    [`label[data-shrink=false] + .${un.formControl} &`]: {
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
    [`&.${un.disabled}`]: {
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
})), Hs = Si({
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
}), Ol = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    defaultValue: p,
    disabled: y,
    disableInjectingGlobalStyles: E,
    endAdornment: b,
    error: x,
    fullWidth: v = !1,
    id: T,
    inputComponent: w = "input",
    inputProps: g = {},
    inputRef: C,
    margin: h,
    maxRows: P,
    minRows: k,
    multiline: I = !1,
    name: m,
    onBlur: M,
    onChange: F,
    onClick: B,
    onFocus: q,
    onKeyDown: L,
    onKeyUp: z,
    placeholder: D,
    readOnly: U,
    renderSuffix: Y,
    rows: re,
    size: N,
    slotProps: A = {},
    slots: X = {},
    startAdornment: W,
    type: H = "text",
    value: Q,
    ...G
  } = o, J = g.value != null ? g.value : Q, {
    current: ee
  } = f.useRef(J != null), Z = f.useRef(), V = f.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = Xe(Z, C, g.ref, V), [R, oe] = f.useState(!1), _ = mn();
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (_)
      return _.registerEffect();
  }, [_]);
  const le = pn({
    props: o,
    muiFormControl: _,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  le.focused = _ ? _.focused : R, f.useEffect(() => {
    !_ && y && R && (oe(!1), M && M());
  }, [_, y, R, M]);
  const ge = _ && _.onFilled, Ie = _ && _.onEmpty, Le = f.useCallback((ye) => {
    wr(ye) ? ge && ge() : Ie && Ie();
  }, [ge, Ie]);
  At(() => {
    ee && Le({
      value: J
    });
  }, [J, Le, ee]);
  const Oe = (ye) => {
    q && q(ye), g.onFocus && g.onFocus(ye), _ && _.onFocus ? _.onFocus(ye) : oe(!0);
  }, Qe = (ye) => {
    M && M(ye), g.onBlur && g.onBlur(ye), _ && _.onBlur ? _.onBlur(ye) : oe(!1);
  }, ae = (ye, ...Nt) => {
    if (!ee) {
      const Ft = ye.target || Z.current;
      if (Ft == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Rt(1));
      Le({
        value: Ft.value
      });
    }
    g.onChange && g.onChange(ye, ...Nt), F && F(ye, ...Nt);
  };
  f.useEffect(() => {
    Le(Z.current);
  }, []);
  const fe = (ye) => {
    Z.current && ye.currentTarget === ye.target && Z.current.focus(), B && B(ye);
  };
  let ne = w, Be = g;
  I && ne === "input" && (re ? (process.env.NODE_ENV !== "production" && (k || P) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Be = {
    type: void 0,
    minRows: re,
    maxRows: re,
    ...Be
  }) : Be = {
    type: void 0,
    maxRows: P,
    minRows: k,
    ...Be
  }, ne = Rl);
  const tt = (ye) => {
    Le(ye.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  f.useEffect(() => {
    _ && _.setAdornedStart(!!W);
  }, [_, W]);
  const ot = {
    ...o,
    color: le.color || "primary",
    disabled: le.disabled,
    endAdornment: b,
    error: le.error,
    focused: le.focused,
    formControl: _,
    fullWidth: v,
    hiddenLabel: le.hiddenLabel,
    multiline: I,
    size: le.size,
    startAdornment: W,
    type: H
  }, lt = Om(ot), $t = X.root || u.Root || to, Pt = A.root || d.root || {}, vt = X.input || u.Input || no;
  return Be = {
    ...Be,
    ...A.input ?? d.input
  }, /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [!E && typeof Hs == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (qs || (qs = /* @__PURE__ */ O.jsx(Hs, {}))), /* @__PURE__ */ O.jsxs($t, {
      ...Pt,
      ref: n,
      onClick: fe,
      ...G,
      ...!Ho($t) && {
        ownerState: {
          ...ot,
          ...Pt.ownerState
        }
      },
      className: de(lt.root, Pt.className, l, U && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ O.jsx(Qr.Provider, {
        value: null,
        children: /* @__PURE__ */ O.jsx(vt, {
          "aria-invalid": le.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: p,
          disabled: le.disabled,
          id: T,
          onAnimationStart: tt,
          name: m,
          placeholder: D,
          readOnly: U,
          required: le.required,
          rows: re,
          value: J,
          onKeyDown: L,
          onKeyUp: z,
          type: H,
          ...Be,
          ...!Ho(vt) && {
            as: ne,
            ownerState: {
              ...ot,
              ...Be.ownerState
            }
          },
          ref: te,
          className: de(lt.input, Be.className, U && "MuiInputBase-readOnly"),
          onBlur: Qe,
          onChange: ae,
          onFocus: Oe
        })
      }), b, Y ? Y({
        ...le,
        startAdornment: W
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
  inputComponent: mi,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Mt,
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
const Oi = Ol;
function Pm(e) {
  return Ne("MuiInput", e);
}
const vn = {
  ...un,
  ...Pe("MuiInput", ["root", "underline", "input"])
};
function km(e) {
  return Ne("MuiOutlinedInput", e);
}
const xt = {
  ...un,
  ...Pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Mm(e) {
  return Ne("MuiFilledInput", e);
}
const Bt = {
  ...un,
  ...Pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, $m = qp(/* @__PURE__ */ O.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Nm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Pl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    onEntered: p,
    onEntering: y,
    onExit: E,
    onExited: b,
    onExiting: x,
    style: v,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Ot,
    ...g
  } = t, C = f.useRef(null), h = Xe(C, Xn(l), n), P = (L) => (z) => {
    if (L) {
      const D = C.current;
      z === void 0 ? L(D) : L(D, z);
    }
  }, k = P(y), I = P((L, z) => {
    Sl(L);
    const D = Sr({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = o.transitions.create("opacity", D), L.style.transition = o.transitions.create("opacity", D), d && d(L, z);
  }), m = P(p), M = P(x), F = P((L) => {
    const z = Sr({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = o.transitions.create("opacity", z), L.style.transition = o.transitions.create("opacity", z), E && E(L);
  }), B = P(b), q = (L) => {
    s && s(C.current, L);
  };
  return /* @__PURE__ */ O.jsx(w, {
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: I,
    onEntered: m,
    onEntering: k,
    onExit: F,
    onExited: B,
    onExiting: M,
    addEndListener: q,
    timeout: T,
    ...g,
    children: (L, z) => /* @__PURE__ */ f.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0,
        ...Nm[L],
        ...v,
        ...l.props.style
      },
      ref: h,
      ...z
    })
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
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
  children: Gn.isRequired,
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
function Im(e) {
  return Ne("MuiBackdrop", e);
}
Pe("MuiBackdrop", ["root", "invisible"]);
const _m = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return je({
    root: ["root", n && "invisible"]
  }, Im, t);
}, Am = se("div", {
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
}), kl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    slotProps: p = {},
    slots: y = {},
    TransitionComponent: E,
    transitionDuration: b,
    ...x
  } = o, v = {
    ...o,
    component: a,
    invisible: l
  }, T = _m(v), w = {
    transition: E,
    root: u.Root,
    ...y
  }, g = {
    ...d,
    ...p
  }, C = {
    slots: w,
    slotProps: g
  }, [h, P] = ht("root", {
    elementType: Am,
    externalForwardedProps: C,
    className: de(T.root, s),
    ownerState: v
  }), [k, I] = ht("transition", {
    elementType: Pl,
    externalForwardedProps: C,
    ownerState: v
  });
  return delete I.ownerState, /* @__PURE__ */ O.jsx(k, {
    in: c,
    timeout: b,
    ...x,
    ...I,
    children: /* @__PURE__ */ O.jsx(h, {
      "aria-hidden": !0,
      ...P,
      classes: T,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
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
const jm = Pe("MuiBox", ["root"]), Dm = Xr(), Ml = gf({
  themeId: gt,
  defaultTheme: Dm,
  defaultClassName: jm.root,
  generateClassName: Wa.generate
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
function Fm(e) {
  return Ne("MuiButton", e);
}
const nn = Pe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), $l = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && ($l.displayName = "ButtonGroupContext");
const Nl = /* @__PURE__ */ f.createContext(void 0);
process.env.NODE_ENV !== "production" && (Nl.displayName = "ButtonGroupButtonContext");
const Lm = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${ue(t)}`, `size${ue(i)}`, `${s}Size${ue(i)}`, `color${ue(t)}`, n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ue(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${ue(i)}`]
  }, c = je(l, Fm, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, Il = [{
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
}], Bm = se(Ri, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ue(n.color)}`], t[`size${ue(n.size)}`], t[`${n.variant}Size${ue(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(De(({
  theme: e
}) => {
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
    [`&.${nn.disabled}`]: {
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
        [`&.${nn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${nn.disabled}`]: {
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
        [`&.${nn.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(bt(["dark", "contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)` : ft(e.palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ft(e.palette[o].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ft(e.palette[o].main, e.palette.action.hoverOpacity)
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
        ) : e.palette.getContrastText?.(t),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ft(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ft(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${nn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${nn.disabled}`]: {
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
})), zm = se("span", {
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
  }, ...Il]
}), Vm = se("span", {
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
  }, ...Il]
}), Yo = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const o = f.useContext($l), i = f.useContext(Nl), s = An(o, t), a = Fe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: y = !1,
    disableFocusRipple: E = !1,
    endIcon: b,
    focusVisibleClassName: x,
    fullWidth: v = !1,
    size: T = "medium",
    startIcon: w,
    type: g,
    variant: C = "text",
    ...h
  } = a, P = {
    ...a,
    color: c,
    component: u,
    disabled: p,
    disableElevation: y,
    disableFocusRipple: E,
    fullWidth: v,
    size: T,
    type: g,
    variant: C
  }, k = Lm(P), I = w && /* @__PURE__ */ O.jsx(zm, {
    className: k.startIcon,
    ownerState: P,
    children: w
  }), m = b && /* @__PURE__ */ O.jsx(Vm, {
    className: k.endIcon,
    ownerState: P,
    children: b
  }), M = i || "";
  return /* @__PURE__ */ O.jsxs(Bm, {
    ownerState: P,
    className: de(o.className, k.root, d, M),
    component: u,
    disabled: p,
    focusRipple: !E,
    focusVisibleClassName: de(k.focusVisible, x),
    ref: n,
    type: g,
    ...h,
    classes: k,
    children: [I, l, m]
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
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
const Ko = typeof Si({}) == "function", Wm = (e, t) => ({
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
}), Um = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), _l = (e, t = !1) => {
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, a]) => {
    const l = e.getColorSchemeSelector(s);
    l.startsWith("@") ? n[l] = {
      ":root": {
        colorScheme: a.palette?.mode
      }
    } : n[l.replace(/\s*&/, "")] = {
      colorScheme: a.palette?.mode
    };
  });
  let o = {
    html: Wm(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Um(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const i = e.components?.MuiCssBaseline?.styleOverrides;
  return i && (o = [o, i]), o;
}, pr = "mui-ecs", qm = (e) => {
  const t = _l(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${pr})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, i]) => {
    const s = e.getColorSchemeSelector(o);
    s.startsWith("@") ? n[s] = {
      [`:root:not(:has(.${pr}))`]: {
        colorScheme: i.palette?.mode
      }
    } : n[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${pr}))`]: {
        colorScheme: i.palette?.mode
      }
    };
  }), t;
}, Hm = Si(Ko ? ({
  theme: e,
  enableColorScheme: t
}) => _l(e, t) : ({
  theme: e
}) => qm(e));
function Al(e) {
  const t = Fe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: o = !1
  } = t;
  return /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [Ko && /* @__PURE__ */ O.jsx(Hm, {
      enableColorScheme: o
    }), !Ko && !o && /* @__PURE__ */ O.jsx("span", {
      className: pr,
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
function Ym(e) {
  const t = at(e);
  return t.body === e ? Ht(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function On(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ys(e) {
  return parseInt(Ht(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Km(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Ks(e, t, n, o, i) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Km(a);
    l && c && On(a, i);
  });
}
function Co(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function Gm(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Ym(o)) {
      const a = el(at(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Ys(o) + a}px`;
      const l = at(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ys(c) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = at(o).body;
    else {
      const a = o.parentElement, l = Ht(o);
      s = a?.nodeName === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : o;
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
function Xm(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Jm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && On(t.modalRef, !1);
    const i = Xm(n);
    Ks(n, t.mount, t.modalRef, i, !0);
    const s = Co(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Co(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    i.restore || (i.restore = Gm(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Co(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && On(t.modalRef, n), Ks(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && On(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Qm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Zm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function th(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eh(e));
}
function nh(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Qm)).forEach((o, i) => {
    const s = Zm(o);
    s === -1 || !th(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function rh() {
  return !0;
}
function Rr(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = nh,
    isEnabled: a = rh,
    open: l
  } = e, c = f.useRef(!1), u = f.useRef(null), d = f.useRef(null), p = f.useRef(null), y = f.useRef(null), E = f.useRef(!1), b = f.useRef(null), x = Xe(Xn(t), b), v = f.useRef(null);
  f.useEffect(() => {
    !l || !b.current || (E.current = !n);
  }, [n, l]), f.useEffect(() => {
    if (!l || !b.current)
      return;
    const g = at(b.current);
    return b.current.contains(g.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), E.current && b.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), f.useEffect(() => {
    if (!l || !b.current)
      return;
    const g = at(b.current), C = (k) => {
      v.current = k, !(o || !a() || k.key !== "Tab") && g.activeElement === b.current && k.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, h = () => {
      const k = b.current;
      if (k === null)
        return;
      if (!g.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (k.contains(g.activeElement) || o && g.activeElement !== u.current && g.activeElement !== d.current)
        return;
      if (g.activeElement !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!E.current)
        return;
      let I = [];
      if ((g.activeElement === u.current || g.activeElement === d.current) && (I = s(b.current)), I.length > 0) {
        const m = !!(v.current?.shiftKey && v.current?.key === "Tab"), M = I[0], F = I[I.length - 1];
        typeof M != "string" && typeof F != "string" && (m ? F.focus() : M.focus());
      } else
        k.focus();
    };
    g.addEventListener("focusin", h), g.addEventListener("keydown", C, !0);
    const P = setInterval(() => {
      g.activeElement && g.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(P), g.removeEventListener("focusin", h), g.removeEventListener("keydown", C, !0);
    };
  }, [n, o, i, a, l, s]);
  const T = (g) => {
    p.current === null && (p.current = g.relatedTarget), E.current = !0, y.current = g.target;
    const C = t.props.onFocus;
    C && C(g);
  }, w = (g) => {
    p.current === null && (p.current = g.relatedTarget), E.current = !0;
  };
  return /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [/* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ f.cloneElement(t, {
      ref: x,
      onFocus: T
    }), /* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Gn,
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
process.env.NODE_ENV !== "production" && (Rr.propTypes = Gr(Rr.propTypes));
function oh(e) {
  return typeof e == "function" ? e() : e;
}
function ih(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const sh = new Jm();
function ah(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = sh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, y = f.useRef({}), E = f.useRef(null), b = f.useRef(null), x = Xe(b, p), [v, T] = f.useState(!d), w = ih(c);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const C = () => at(E.current), h = () => (y.current.modalRef = b.current, y.current.mount = E.current, y.current), P = () => {
    i.mount(h(), {
      disableScrollLock: o
    }), b.current && (b.current.scrollTop = 0);
  }, k = on(() => {
    const D = oh(t) || C().body;
    i.add(h(), D), b.current && P();
  }), I = f.useCallback(() => i.isTopModal(h()), [i]), m = on((D) => {
    E.current = D, D && (d && I() ? P() : b.current && On(b.current, g));
  }), M = f.useCallback(() => {
    i.remove(h(), g);
  }, [g, i]);
  f.useEffect(() => () => {
    M();
  }, [M]), f.useEffect(() => {
    d ? k() : (!w || !s) && M();
  }, [d, M, w, s, k]);
  const F = (D) => (U) => {
    D.onKeyDown?.(U), !(U.key !== "Escape" || U.which === 229 || // Wait until IME is settled.
    !I()) && (n || (U.stopPropagation(), u && u(U, "escapeKeyDown")));
  }, B = (D) => (U) => {
    D.onClick?.(U), U.target === U.currentTarget && u && u(U, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const U = il(e);
      delete U.onTransitionEnter, delete U.onTransitionExited;
      const Y = {
        ...U,
        ...D
      };
      return {
        role: "presentation",
        ...Y,
        onKeyDown: F(Y),
        ref: x
      };
    },
    getBackdropProps: (D = {}) => {
      const U = D;
      return {
        "aria-hidden": !0,
        ...U,
        onClick: B(U),
        open: d
      };
    },
    getTransitionProps: () => {
      const D = () => {
        T(!1), a && a();
      }, U = () => {
        T(!0), l && l(), s && M();
      };
      return {
        onEnter: Ss(D, c?.props.onEnter),
        onExited: Ss(U, c?.props.onExited)
      };
    },
    rootRef: x,
    portalRef: m,
    isTopModal: I,
    exited: v,
    hasTransition: w
  };
}
function lh(e) {
  return Ne("MuiModal", e);
}
Pe("MuiModal", ["root", "hidden", "backdrop"]);
const ch = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return je({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, lh, o);
}, uh = se("div", {
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
}))), dh = se(kl, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), jl = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const o = Fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = dh,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: d,
    component: p,
    components: y = {},
    componentsProps: E = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: T = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: g = !1,
    hideBackdrop: C = !1,
    keepMounted: h = !1,
    onBackdropClick: P,
    onClose: k,
    onTransitionEnter: I,
    onTransitionExited: m,
    open: M,
    slotProps: F = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: q,
    ...L
  } = o, z = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: x,
    disableEscapeKeyDown: v,
    disablePortal: T,
    disableRestoreFocus: w,
    disableScrollLock: g,
    hideBackdrop: C,
    keepMounted: h
  }, {
    getRootProps: D,
    getBackdropProps: U,
    getTransitionProps: Y,
    portalRef: re,
    isTopModal: N,
    exited: A,
    hasTransition: X
  } = ah({
    ...z,
    rootRef: n
  }), W = {
    ...z,
    exited: A
  }, H = ch(W), Q = {};
  if (u.props.tabIndex === void 0 && (Q.tabIndex = "-1"), X) {
    const {
      onEnter: R,
      onExited: oe
    } = Y();
    Q.onEnter = R, Q.onExited = oe;
  }
  const G = {
    slots: {
      root: y.Root,
      backdrop: y.Backdrop,
      ...B
    },
    slotProps: {
      ...E,
      ...F
    }
  }, [J, ee] = ht("root", {
    elementType: uh,
    externalForwardedProps: G,
    getSlotProps: D,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: W,
    className: de(l, H?.root, !W.open && W.exited && H?.hidden)
  }), [Z, V] = ht("backdrop", {
    elementType: i,
    externalForwardedProps: G,
    additionalProps: s,
    getSlotProps: (R) => U({
      ...R,
      onClick: (oe) => {
        P && P(oe), R?.onClick && R.onClick(oe);
      }
    }),
    className: de(s?.className, H?.backdrop),
    ownerState: W
  }), te = Xe(s?.ref, V.ref);
  return !h && !M && (!X || A) ? null : /* @__PURE__ */ O.jsx(Tr, {
    ref: re,
    container: d,
    disablePortal: T,
    children: /* @__PURE__ */ O.jsxs(J, {
      ...ee,
      ...L,
      children: [!C && i ? /* @__PURE__ */ O.jsx(Z, {
        ...V,
        ref: te
      }) : null, /* @__PURE__ */ O.jsx(Rr, {
        disableEnforceFocus: x,
        disableAutoFocus: b,
        disableRestoreFocus: w,
        isEnabled: N,
        open: M,
        children: /* @__PURE__ */ f.cloneElement(u, Q)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
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
  children: Gn.isRequired,
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
  container: r.oneOfType([jn, r.func]),
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
const Gs = Pe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fh = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: o,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", o && "adornedStart", i && "adornedEnd", s === "small" && `size${ue(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = je(c, Mm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, ph = se(to, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zr(e, t), !n.disableUnderline && t.underline];
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
    }, ...Object.entries(e.palette).filter(bt()).map(([a]) => ({
      props: {
        disableUnderline: !1,
        color: a
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[a]?.main}`
        }
      }
    })), {
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
})), mh = se(no, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: eo
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
}))), Ln = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    slotProps: p,
    slots: y = {},
    type: E = "text",
    ...b
  } = o, x = {
    ...o,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    type: E
  }, v = fh(o), T = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, w = p ?? a ? Ke(T, p ?? a) : T, g = y.root ?? s.Root ?? ph, C = y.input ?? s.Input ?? mh;
  return /* @__PURE__ */ O.jsx(Oi, {
    slots: {
      root: g,
      input: C
    },
    componentsProps: w,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: n,
    type: E,
    ...b,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = {
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
  inputRef: Mt,
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
Ln && (Ln.muiName = "Input");
function hh(e) {
  return Ne("MuiFormControl", e);
}
Pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const gh = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, i = {
    root: ["root", n !== "none" && `margin${ue(n)}`, o && "fullWidth"]
  };
  return je(i, hh, t);
}, yh = se("div", {
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
}), Pi = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    fullWidth: p = !1,
    hiddenLabel: y = !1,
    margin: E = "none",
    required: b = !1,
    size: x = "medium",
    variant: v = "outlined",
    ...T
  } = o, w = {
    ...o,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: y,
    margin: E,
    required: b,
    size: x,
    variant: v
  }, g = gh(w), [C, h] = f.useState(() => {
    let q = !1;
    return i && f.Children.forEach(i, (L) => {
      if (!bo(L, ["Input", "Select"]))
        return;
      const z = bo(L, ["Select"]) ? L.props.input : L;
      z && wm(z.props) && (q = !0);
    }), q;
  }), [P, k] = f.useState(() => {
    let q = !1;
    return i && f.Children.forEach(i, (L) => {
      bo(L, ["Input", "Select"]) && (wr(L.props, !0) || wr(L.props.inputProps, !0)) && (q = !0);
    }), q;
  }), [I, m] = f.useState(!1);
  c && I && m(!1);
  const M = d !== void 0 && !c ? d : I;
  let F;
  if (process.env.NODE_ENV !== "production") {
    const q = f.useRef(!1);
    F = () => (q.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), q.current = !0, () => {
      q.current = !1;
    });
  }
  const B = f.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: h,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: M,
    fullWidth: p,
    hiddenLabel: y,
    size: x,
    onBlur: () => {
      m(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      m(!0);
    },
    registerEffect: F,
    required: b,
    variant: v
  }), [C, a, c, u, P, M, p, y, F, b, x, v]);
  return /* @__PURE__ */ O.jsx(Qr.Provider, {
    value: B,
    children: /* @__PURE__ */ O.jsx(yh, {
      as: l,
      ownerState: w,
      className: de(g.root, s),
      ref: n,
      ...T,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
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
function bh(e) {
  return Ne("MuiFormHelperText", e);
}
const Xs = Pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Js;
const vh = (e) => {
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
    root: ["root", i && "disabled", s && "error", o && `size${ue(o)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return je(u, bh, t);
}, Eh = se("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ue(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${Xs.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Xs.error}`]: {
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
}))), Dl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    margin: p,
    required: y,
    variant: E,
    ...b
  } = o, x = mn(), v = pn({
    props: o,
    muiFormControl: x,
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
  const w = vh(T);
  return /* @__PURE__ */ O.jsx(Eh, {
    as: a,
    className: de(w.root, s),
    ref: n,
    ...b,
    ownerState: T,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Js || (Js = /* @__PURE__ */ O.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
function xh(e) {
  return Ne("MuiFormLabel", e);
}
const Pn = Pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Sh = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ue(n)}`, i && "disabled", s && "error", a && "filled", o && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return je(c, xh, t);
}, Ch = se("label", {
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
  variants: [...Object.entries(e.palette).filter(bt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Pn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Pn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Pn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Th = se("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(De(({
  theme: e
}) => ({
  [`&.${Pn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Fl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    focused: p,
    required: y,
    ...E
  } = o, b = mn(), x = pn({
    props: o,
    muiFormControl: b,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), v = {
    ...o,
    color: x.color || "primary",
    component: l,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  }, T = Sh(v);
  return /* @__PURE__ */ O.jsxs(Ch, {
    as: l,
    ownerState: v,
    className: de(T.root, s),
    ref: n,
    ...E,
    children: [i, x.required && /* @__PURE__ */ O.jsxs(Th, {
      ownerState: v,
      "aria-hidden": !0,
      className: T.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
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
function Go(e) {
  return `scale(${e}, ${e ** 2})`;
}
const wh = {
  entering: {
    opacity: 1,
    transform: Go(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, To = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Or = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: y,
    onExiting: E,
    style: b,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Ot,
    ...T
  } = t, w = Za(), g = f.useRef(), C = xi(), h = f.useRef(null), P = Xe(h, Xn(s), n), k = (z) => (D) => {
    if (z) {
      const U = h.current;
      D === void 0 ? z(U) : z(U, D);
    }
  }, I = k(d), m = k((z, D) => {
    Sl(z);
    const {
      duration: U,
      delay: Y,
      easing: re
    } = Sr({
      style: b,
      timeout: x,
      easing: a
    }, {
      mode: "enter"
    });
    let N;
    x === "auto" ? (N = C.transitions.getAutoHeightDuration(z.clientHeight), g.current = N) : N = U, z.style.transition = [C.transitions.create("opacity", {
      duration: N,
      delay: Y
    }), C.transitions.create("transform", {
      duration: To ? N : N * 0.666,
      delay: Y,
      easing: re
    })].join(","), c && c(z, D);
  }), M = k(u), F = k(E), B = k((z) => {
    const {
      duration: D,
      delay: U,
      easing: Y
    } = Sr({
      style: b,
      timeout: x,
      easing: a
    }, {
      mode: "exit"
    });
    let re;
    x === "auto" ? (re = C.transitions.getAutoHeightDuration(z.clientHeight), g.current = re) : re = D, z.style.transition = [C.transitions.create("opacity", {
      duration: re,
      delay: U
    }), C.transitions.create("transform", {
      duration: To ? re : re * 0.666,
      delay: To ? U : U || re * 0.333,
      easing: Y
    })].join(","), z.style.opacity = 0, z.style.transform = Go(0.75), p && p(z);
  }), q = k(y), L = (z) => {
    x === "auto" && w.start(g.current || 0, z), o && o(h.current, z);
  };
  return /* @__PURE__ */ O.jsx(v, {
    appear: i,
    in: l,
    nodeRef: h,
    onEnter: m,
    onEntered: M,
    onEntering: I,
    onExit: B,
    onExited: q,
    onExiting: F,
    addEndListener: L,
    timeout: x === "auto" ? null : x,
    ...T,
    children: (z, D) => /* @__PURE__ */ f.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Go(0.75),
        visibility: z === "exited" && !l ? "hidden" : void 0,
        ...wh[z],
        ...b,
        ...s.props.style
      },
      ref: P,
      ...D
    })
  });
});
process.env.NODE_ENV !== "production" && (Or.propTypes = {
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
  children: Gn.isRequired,
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
Or && (Or.muiSupportAuto = !0);
const Rh = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = je({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Pm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Oh = se(to, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zr(e, t), !n.disableUnderline && t.underline];
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
        [`&.${vn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${vn.error}`]: {
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
        [`&:hover:not(.${vn.disabled}, .${vn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${vn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(bt()).map(([o]) => ({
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
})), Ph = se(no, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: eo
})({}), Bn = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    slots: p = {},
    type: y = "text",
    ...E
  } = o, b = Rh(o), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, T = d ?? a ? Ke(d ?? a, v) : v, w = p.root ?? s.Root ?? Oh, g = p.input ?? s.Input ?? Ph;
  return /* @__PURE__ */ O.jsx(Oi, {
    slots: {
      root: w,
      input: g
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: y,
    ...E,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (Bn.propTypes = {
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
  inputRef: Mt,
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
Bn && (Bn.muiName = "Input");
function kh(e) {
  return Ne("MuiInputLabel", e);
}
Pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Mh = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", o && o !== "normal" && `size${ue(o)}`, a],
    asterisk: [l && "asterisk"]
  }, u = je(c, kh, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, $h = se(Fl, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Pn.asterisk}`]: t.asterisk
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
}))), ki = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
  } = o, d = mn();
  let p = a;
  typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
  const y = pn({
    props: o,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), E = {
    ...o,
    disableAnimation: i,
    formControl: d,
    shrink: p,
    size: y.size,
    variant: y.variant,
    required: y.required,
    focused: y.focused
  }, b = Mh(E);
  return /* @__PURE__ */ O.jsx($h, {
    "data-shrink": p,
    ref: n,
    className: de(b.root, c),
    ...u,
    ownerState: E,
    classes: b
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
function Nh(e) {
  return Ne("MuiLinearProgress", e);
}
Pe("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Xo = 4, Jo = fn`
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
`, Ih = typeof Jo != "string" ? Ir`
        animation: ${Jo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, Qo = fn`
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
`, _h = typeof Qo != "string" ? Ir`
        animation: ${Qo} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Zo = fn`
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
`, Ah = typeof Zo != "string" ? Ir`
        animation: ${Zo} 3s infinite linear;
      ` : null, jh = (e) => {
  const {
    classes: t,
    variant: n,
    color: o
  } = e, i = {
    root: ["root", `color${ue(o)}`, n],
    dashed: ["dashed", `dashedColor${ue(o)}`],
    bar1: ["bar", `barColor${ue(o)}`, (n === "indeterminate" || n === "query") && "bar1Indeterminate", n === "determinate" && "bar1Determinate", n === "buffer" && "bar1Buffer"],
    bar2: ["bar", n !== "buffer" && `barColor${ue(o)}`, n === "buffer" && `color${ue(o)}`, (n === "indeterminate" || n === "query") && "bar2Indeterminate", n === "buffer" && "bar2Buffer"]
  };
  return je(i, Nh, t);
}, Mi = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Kr(e.palette[t].main, 0.62) : Yr(e.palette[t].main, 0.5), Dh = se("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ue(n.color)}`], t[n.variant]];
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
  variants: [...Object.entries(e.palette).filter(bt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Mi(e, t)
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
}))), Fh = se("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.dashed, t[`dashedColor${ue(n.color)}`]];
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
  }, ...Object.entries(e.palette).filter(bt()).map(([t]) => {
    const n = Mi(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), Ah || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${Zo} 3s infinite linear`
}), Lh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ue(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate, n.variant === "determinate" && t.bar1Determinate, n.variant === "buffer" && t.bar1Buffer];
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
  }, ...Object.entries(e.palette).filter(bt()).map(([t]) => ({
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
      transition: `transform .${Xo}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${Xo}s linear`
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
    style: Ih || {
      animation: `${Jo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), Bh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.bar, t[`barColor${ue(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate, n.variant === "buffer" && t.bar2Buffer];
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
  variants: [...Object.entries(e.palette).filter(bt()).map(([t]) => ({
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
  }, ...Object.entries(e.palette).filter(bt()).map(([t]) => ({
    props: {
      color: t,
      variant: "buffer"
    },
    style: {
      backgroundColor: Mi(e, t),
      transition: `transform .${Xo}s linear`
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
    style: _h || {
      animation: `${Qo} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), Ll = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
  }, p = jh(d), y = ul(), E = {}, b = {
    bar1: {},
    bar2: {}
  };
  if (c === "determinate" || c === "buffer")
    if (a !== void 0) {
      E["aria-valuenow"] = Math.round(a), E["aria-valuemin"] = 0, E["aria-valuemax"] = 100;
      let x = a - 100;
      y && (x = -x), b.bar1.transform = `translateX(${x}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (c === "buffer")
    if (l !== void 0) {
      let x = (l || 0) - 100;
      y && (x = -x), b.bar2.transform = `translateX(${x}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ O.jsxs(Dh, {
    className: de(p.root, i),
    ownerState: d,
    role: "progressbar",
    ...E,
    ref: n,
    ...u,
    children: [c === "buffer" ? /* @__PURE__ */ O.jsx(Fh, {
      className: p.dashed,
      ownerState: d
    }) : null, /* @__PURE__ */ O.jsx(Lh, {
      className: p.bar1,
      ownerState: d,
      style: b.bar1
    }), c === "determinate" ? null : /* @__PURE__ */ O.jsx(Bh, {
      className: p.bar2,
      ownerState: d,
      style: b.bar2
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
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
const Pr = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Pr.displayName = "ListContext");
function zh(e) {
  return Ne("MuiList", e);
}
Pe("MuiList", ["root", "padding", "dense", "subheader"]);
const Vh = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return je({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, zh, t);
}, Wh = se("ul", {
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
}), Bl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
  } = o, p = f.useMemo(() => ({
    dense: l
  }), [l]), y = {
    ...o,
    component: a,
    dense: l,
    disablePadding: c
  }, E = Vh(y);
  return /* @__PURE__ */ O.jsx(Pr.Provider, {
    value: p,
    children: /* @__PURE__ */ O.jsxs(Wh, {
      as: a,
      className: de(E.root, s),
      ref: n,
      ownerState: y,
      ...d,
      children: [u, i]
    })
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
const Qs = Pe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Zs = Pe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function wo(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ea(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function zl(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function En(e, t, n, o, i, s) {
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
const Vl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...y
  } = t, E = f.useRef(null), b = f.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  At(() => {
    i && E.current.focus();
  }, [i]), f.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (g, {
      direction: C
    }) => {
      const h = !E.current.style.width;
      if (g.clientHeight < E.current.clientHeight && h) {
        const P = `${el(at(g))}px`;
        E.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = P, E.current.style.width = `calc(100% + ${P})`;
      }
      return E.current;
    }
  }), []);
  const x = (g) => {
    const C = E.current, h = g.key;
    if (g.ctrlKey || g.metaKey || g.altKey) {
      d && d(g);
      return;
    }
    const k = at(C).activeElement;
    if (h === "ArrowDown")
      g.preventDefault(), En(C, k, u, c, wo);
    else if (h === "ArrowUp")
      g.preventDefault(), En(C, k, u, c, ea);
    else if (h === "Home")
      g.preventDefault(), En(C, null, u, c, wo);
    else if (h === "End")
      g.preventDefault(), En(C, null, u, c, ea);
    else if (h.length === 1) {
      const I = b.current, m = h.toLowerCase(), M = performance.now();
      I.keys.length > 0 && (M - I.lastTime > 500 ? (I.keys = [], I.repeating = !0, I.previousKeyMatched = !0) : I.repeating && m !== I.keys[0] && (I.repeating = !1)), I.lastTime = M, I.keys.push(m);
      const F = k && !I.repeating && zl(k, I);
      I.previousKeyMatched && (F || En(C, k, !1, c, wo, I)) ? g.preventDefault() : I.previousKeyMatched = !1;
    }
    d && d(g);
  }, v = Xe(E, n);
  let T = -1;
  f.Children.forEach(a, (g, C) => {
    if (!/* @__PURE__ */ f.isValidElement(g)) {
      T === C && (T += 1, T >= a.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && _n.isFragment(g) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), g.props.disabled || (p === "selectedMenu" && g.props.selected || T === -1) && (T = C), T === C && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (T += 1, T >= a.length && (T = -1));
  });
  const w = f.Children.map(a, (g, C) => {
    if (C === T) {
      const h = {};
      return s && (h.autoFocus = !0), g.props.tabIndex === void 0 && p === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ f.cloneElement(g, h);
    }
    return g;
  });
  return /* @__PURE__ */ O.jsx(Bl, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: x,
    tabIndex: i ? 0 : -1,
    ...y,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
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
function Uh(e) {
  return Ne("MuiPopover", e);
}
Pe("MuiPopover", ["root", "paper"]);
function ta(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function na(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ra(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function mr(e) {
  return typeof e == "function" ? e() : e;
}
const qh = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"],
    paper: ["paper"]
  }, Uh, t);
}, Hh = se(jl, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Wl = se(wi, {
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
}), Ul = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    container: p,
    elevation: y = 8,
    marginThreshold: E = 16,
    open: b,
    PaperProps: x = {},
    slots: v = {},
    slotProps: T = {},
    transformOrigin: w = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: g = Or,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: h,
      ...P
    } = {},
    disableScrollLock: k = !1,
    ...I
  } = o, m = T?.paper ?? x, M = f.useRef(), F = {
    ...o,
    anchorOrigin: a,
    anchorReference: c,
    elevation: y,
    marginThreshold: E,
    externalPaperSlotProps: m,
    transformOrigin: w,
    TransitionComponent: g,
    transitionDuration: C,
    TransitionProps: P
  }, B = qh(F), q = f.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const V = mr(s), te = V && V.nodeType === 1 ? V : at(M.current).body, R = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const oe = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: R.top + ta(R, a.vertical),
      left: R.left + na(R, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), L = f.useCallback((V) => ({
    vertical: ta(V, w.vertical),
    horizontal: na(V, w.horizontal)
  }), [w.horizontal, w.vertical]), z = f.useCallback((V) => {
    const te = {
      width: V.offsetWidth,
      height: V.offsetHeight
    }, R = L(te);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ra(R)
      };
    const oe = q();
    let _ = oe.top - R.vertical, le = oe.left - R.horizontal;
    const ge = _ + te.height, Ie = le + te.width, Le = Ht(mr(s)), Oe = Le.innerHeight - E, Qe = Le.innerWidth - E;
    if (E !== null && _ < E) {
      const ae = _ - E;
      _ -= ae, R.vertical += ae;
    } else if (E !== null && ge > Oe) {
      const ae = ge - Oe;
      _ -= ae, R.vertical += ae;
    }
    if (process.env.NODE_ENV !== "production" && te.height > Oe && te.height && Oe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - Oe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), E !== null && le < E) {
      const ae = le - E;
      le -= ae, R.horizontal += ae;
    } else if (Ie > Qe) {
      const ae = Ie - Qe;
      le -= ae, R.horizontal += ae;
    }
    return {
      top: `${Math.round(_)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: ra(R)
    };
  }, [s, c, q, L, E]), [D, U] = f.useState(b), Y = f.useCallback(() => {
    const V = M.current;
    if (!V)
      return;
    const te = z(V);
    te.top !== null && (V.style.top = te.top), te.left !== null && (V.style.left = te.left), V.style.transformOrigin = te.transformOrigin, U(!0);
  }, [z]);
  f.useEffect(() => (k && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [s, k, Y]);
  const re = (V, te) => {
    h && h(V, te), Y();
  }, N = () => {
    U(!1);
  };
  f.useEffect(() => {
    b && Y();
  }), f.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      Y();
    }
  } : null, [b, Y]), f.useEffect(() => {
    if (!b)
      return;
    const V = Xa(() => {
      Y();
    }), te = Ht(s);
    return te.addEventListener("resize", V), () => {
      V.clear(), te.removeEventListener("resize", V);
    };
  }, [s, b, Y]);
  let A = C;
  C === "auto" && !g.muiSupportAuto && (A = void 0);
  const X = p || (s ? at(mr(s)).body : void 0), W = {
    slots: v,
    slotProps: {
      ...T,
      paper: m
    }
  }, [H, Q] = ht("paper", {
    elementType: Wl,
    externalForwardedProps: W,
    additionalProps: {
      elevation: y,
      className: de(B.paper, m?.className),
      style: D ? m.style : {
        ...m.style,
        opacity: 0
      }
    },
    ownerState: F
  }), [G, {
    slotProps: J,
    ...ee
  }] = ht("root", {
    elementType: Hh,
    externalForwardedProps: W,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: X,
      open: b
    },
    ownerState: F,
    className: de(B.root, d)
  }), Z = Xe(M, Q.ref);
  return /* @__PURE__ */ O.jsx(G, {
    ...ee,
    ...!Ho(G) && {
      slotProps: J,
      disableScrollLock: k
    },
    ...I,
    ref: n,
    children: /* @__PURE__ */ O.jsx(g, {
      appear: !0,
      in: b,
      onEntering: re,
      onExited: N,
      timeout: A,
      ...P,
      children: /* @__PURE__ */ O.jsx(H, {
        ...Q,
        ref: Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Mt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Kn(r.oneOfType([jn, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = mr(e.anchorEl);
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
  container: r.oneOfType([jn, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: rl,
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
    component: mi
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
function Yh(e) {
  return Ne("MuiMenu", e);
}
Pe("MuiMenu", ["root", "paper", "list"]);
const Kh = {
  vertical: "top",
  horizontal: "right"
}, Gh = {
  vertical: "top",
  horizontal: "left"
}, Xh = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Yh, t);
}, Jh = se(Ul, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qh = se(Wl, {
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
}), Zh = se(Vl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ql = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    PaperProps: p = {},
    PopoverClasses: y,
    transitionDuration: E = "auto",
    TransitionProps: {
      onEntering: b,
      ...x
    } = {},
    variant: v = "selectedMenu",
    slots: T = {},
    slotProps: w = {},
    ...g
  } = o, C = ul(), h = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: p,
    transitionDuration: E,
    TransitionProps: x,
    variant: v
  }, P = Xh(h), k = i && !l && d, I = f.useRef(null), m = (D, U) => {
    I.current && I.current.adjustStyleForScrollbar(D, {
      direction: C ? "rtl" : "ltr"
    }), b && b(D, U);
  }, M = (D) => {
    D.key === "Tab" && (D.preventDefault(), u && u(D, "tabKeyDown"));
  };
  let F = -1;
  f.Children.map(s, (D, U) => {
    /* @__PURE__ */ f.isValidElement(D) && (process.env.NODE_ENV !== "production" && _n.isFragment(D) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), D.props.disabled || (v === "selectedMenu" && D.props.selected || F === -1) && (F = U));
  });
  const B = T.paper ?? Qh, q = w.paper ?? p, L = ks({
    elementType: T.root,
    externalSlotProps: w.root,
    ownerState: h,
    className: [P.root, a]
  }), z = ks({
    elementType: B,
    externalSlotProps: q,
    ownerState: h,
    className: P.paper
  });
  return /* @__PURE__ */ O.jsx(Jh, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: C ? "right" : "left"
    },
    transformOrigin: C ? Kh : Gh,
    slots: {
      paper: B,
      root: T.root
    },
    slotProps: {
      root: L,
      paper: z
    },
    open: d,
    ref: n,
    transitionDuration: E,
    TransitionProps: {
      onEntering: m,
      ...x
    },
    ownerState: h,
    ...g,
    classes: y,
    children: /* @__PURE__ */ O.jsx(Zh, {
      onKeyDown: M,
      actions: I,
      autoFocus: i && (F === -1 || l),
      autoFocusItem: k,
      variant: v,
      ...c,
      className: de(P.list, c.className),
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (ql.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([jn, r.func]),
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
function eg(e) {
  return Ne("MuiMenuItem", e);
}
const xn = Pe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), tg = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, ng = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = je({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, eg, a);
  return {
    ...a,
    ...c
  };
}, rg = se(Ri, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: tg
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
  [`&.${xn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${xn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ft(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${xn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ft(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ft(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${xn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${xn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Gs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Gs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Zs.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Zs.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Qs.root}`]: {
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
      [`& .${Qs.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), hr = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    tabIndex: p,
    className: y,
    ...E
  } = o, b = f.useContext(Pr), x = f.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: c
  }), [b.dense, a, c]), v = f.useRef(null);
  At(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const T = {
    ...o,
    dense: x.dense,
    divider: l,
    disableGutters: c
  }, w = ng(o), g = Xe(v, n);
  let C;
  return o.disabled || (C = p !== void 0 ? p : -1), /* @__PURE__ */ O.jsx(Pr.Provider, {
    value: x,
    children: /* @__PURE__ */ O.jsx(rg, {
      ref: g,
      role: d,
      tabIndex: C,
      component: s,
      focusVisibleClassName: de(w.focusVisible, u),
      className: de(w.root, y),
      ...E,
      ownerState: T,
      classes: w
    })
  });
});
process.env.NODE_ENV !== "production" && (hr.propTypes = {
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
function og(e) {
  return Ne("MuiNativeSelect", e);
}
const $i = Pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ig = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ue(n)}`, s && "iconOpen", o && "disabled"]
  };
  return je(l, og, t);
}, Hl = se("select")(({
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
  [`&.${$i.disabled}`]: {
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
})), sg = se(Hl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: mt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${$i.multiple}`]: t.multiple
    }];
  }
})({}), Yl = se("svg")(({
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
  [`&.${$i.disabled}`]: {
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
})), ag = se(Yl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ue(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Kl = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
  }, p = ig(d);
  return /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [/* @__PURE__ */ O.jsx(sg, {
      ownerState: d,
      className: de(p.select, o),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ O.jsx(ag, {
      as: a,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
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
  inputRef: Mt,
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
var oa;
const lg = se("fieldset", {
  shouldForwardProp: mt
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
}), cg = se("legend", {
  shouldForwardProp: mt
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
function Gl(e) {
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
  return /* @__PURE__ */ O.jsx(lg, {
    "aria-hidden": !0,
    className: o,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ O.jsx(cg, {
      ownerState: c,
      children: l ? /* @__PURE__ */ O.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        oa || (oa = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Gl.propTypes = {
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
const ug = (e) => {
  const {
    classes: t
  } = e, o = je({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, km, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, dg = se(to, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Zr
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${xt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${xt.focused} .${xt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(bt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${xt.focused} .${xt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${xt.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${xt.error} .${xt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${xt.disabled} .${xt.notchedOutline}`]: {
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
})), fg = se(Gl, {
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
})), pg = se(no, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: eo
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
}))), zn = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    slots: p = {},
    type: y = "text",
    ...E
  } = i, b = ug(i), x = mn(), v = pn({
    props: i,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), T = {
    ...i,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: x,
    fullWidth: a,
    hiddenLabel: v.hiddenLabel,
    multiline: u,
    size: v.size,
    type: y
  }, w = p.root ?? s.Root ?? dg, g = p.input ?? s.Input ?? pg;
  return /* @__PURE__ */ O.jsx(Oi, {
    slots: {
      root: w,
      input: g
    },
    renderSuffix: (C) => /* @__PURE__ */ O.jsx(fg, {
      ownerState: T,
      className: b.notchedOutline,
      label: c != null && c !== "" && v.required ? o || (o = /* @__PURE__ */ O.jsxs(f.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(C.startAdornment || C.filled || C.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: y,
    ...E,
    classes: {
      ...b,
      notchedOutline: null
    }
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
  inputRef: Mt,
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
zn && (zn.muiName = "Input");
function mg(e) {
  return Ne("MuiSelect", e);
}
const Sn = Pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var ia;
const hg = se(Hl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Sn.select}`]: t.select
      },
      {
        [`&.${Sn.select}`]: t[n.variant]
      },
      {
        [`&.${Sn.error}`]: t.error
      },
      {
        [`&.${Sn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Sn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), gg = se(Yl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ue(n.variant)}`], n.open && t.iconOpen];
  }
})({}), yg = se("input", {
  shouldForwardProp: (e) => bl(e) && e !== "classes",
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
function sa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function bg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const vg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ue(n)}`, s && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return je(l, mg, t);
}, Xl = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: p,
    displayEmpty: y,
    error: E = !1,
    IconComponent: b,
    inputRef: x,
    labelId: v,
    MenuProps: T = {},
    multiple: w,
    name: g,
    onBlur: C,
    onChange: h,
    onClose: P,
    onFocus: k,
    onOpen: I,
    open: m,
    readOnly: M,
    renderValue: F,
    SelectDisplayProps: B = {},
    tabIndex: q,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: z,
    variant: D = "standard",
    ...U
  } = t, [Y, re] = ws({
    controlled: z,
    default: d,
    name: "Select"
  }), [N, A] = ws({
    controlled: m,
    default: u,
    name: "Select"
  }), X = f.useRef(null), W = f.useRef(null), [H, Q] = f.useState(null), {
    current: G
  } = f.useRef(m != null), [J, ee] = f.useState(), Z = Xe(n, x), V = f.useCallback((ie) => {
    W.current = ie, ie && Q(ie);
  }, []), te = H?.parentNode;
  f.useImperativeHandle(Z, () => ({
    focus: () => {
      W.current.focus();
    },
    node: X.current,
    value: Y
  }), [Y]), f.useEffect(() => {
    u && N && H && !G && (ee(a ? null : te.clientWidth), W.current.focus());
  }, [H, a]), f.useEffect(() => {
    s && W.current.focus();
  }, [s]), f.useEffect(() => {
    if (!v)
      return;
    const ie = at(W.current).getElementById(v);
    if (ie) {
      const me = () => {
        getSelection().isCollapsed && W.current.focus();
      };
      return ie.addEventListener("click", me), () => {
        ie.removeEventListener("click", me);
      };
    }
  }, [v]);
  const R = (ie, me) => {
    ie ? I && I(me) : P && P(me), G || (ee(a ? null : te.clientWidth), A(ie));
  }, oe = (ie) => {
    ie.button === 0 && (ie.preventDefault(), W.current.focus(), R(!0, ie));
  }, _ = (ie) => {
    R(!1, ie);
  }, le = f.Children.toArray(l), ge = (ie) => {
    const me = le.find((Ye) => Ye.props.value === ie.target.value);
    me !== void 0 && (re(me.props.value), h && h(ie, me));
  }, Ie = (ie) => (me) => {
    let Ye;
    if (me.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        Ye = Array.isArray(Y) ? Y.slice() : [];
        const It = Y.indexOf(ie.props.value);
        It === -1 ? Ye.push(ie.props.value) : Ye.splice(It, 1);
      } else
        Ye = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(me), Y !== Ye && (re(Ye), h)) {
        const It = me.nativeEvent || me, Jn = new It.constructor(It.type, It);
        Object.defineProperty(Jn, "target", {
          writable: !0,
          value: {
            value: Ye,
            name: g
          }
        }), h(Jn, ie);
      }
      w || R(!1, me);
    }
  }, Le = (ie) => {
    M || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ie.key) && (ie.preventDefault(), R(!0, ie));
  }, Oe = H !== null && N, Qe = (ie) => {
    !Oe && C && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: Y,
        name: g
      }
    }), C(ie));
  };
  delete U["aria-invalid"];
  let ae, fe;
  const ne = [];
  let Be = !1, tt = !1;
  (wr({
    value: Y
  }) || y) && (F ? ae = F(Y) : Be = !0);
  const ot = le.map((ie) => {
    if (!/* @__PURE__ */ f.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && _n.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let me;
    if (w) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Rt(2));
      me = Y.some((Ye) => sa(Ye, ie.props.value)), me && Be && ne.push(ie.props.children);
    } else
      me = sa(Y, ie.props.value), me && Be && (fe = ie.props.children);
    return me && (tt = !0), /* @__PURE__ */ f.cloneElement(ie, {
      "aria-selected": me ? "true" : "false",
      onClick: Ie(ie),
      onKeyUp: (Ye) => {
        Ye.key === " " && Ye.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(Ye);
      },
      role: "option",
      selected: me,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && f.useEffect(() => {
    if (!tt && !w && Y !== "") {
      const ie = le.map((me) => me.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${g ? `(name="${g}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((me) => me != null).map((me) => `\`${me}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [tt, le, w, g, Y]), Be && (w ? ne.length === 0 ? ae = null : ae = ne.reduce((ie, me, Ye) => (ie.push(me), Ye < ne.length - 1 && ie.push(", "), ie), []) : ae = fe);
  let lt = J;
  !a && G && H && (lt = te.clientWidth);
  let $t;
  typeof q < "u" ? $t = q : $t = p ? null : 0;
  const Pt = B.id || (g ? `mui-component-select-${g}` : void 0), vt = {
    ...t,
    variant: D,
    value: Y,
    open: Oe,
    error: E
  }, ye = vg(vt), Nt = {
    ...T.PaperProps,
    ...T.slotProps?.paper
  }, Ft = Ja();
  return /* @__PURE__ */ O.jsxs(f.Fragment, {
    children: [/* @__PURE__ */ O.jsx(hg, {
      as: "div",
      ref: V,
      tabIndex: $t,
      role: "combobox",
      "aria-controls": Ft,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, Pt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Le,
      onMouseDown: p || M ? null : oe,
      onBlur: Qe,
      onFocus: k,
      ...B,
      ownerState: vt,
      className: de(B.className, ye.select, c),
      id: Pt,
      children: bg(ae) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ia || (ia = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ae
    }), /* @__PURE__ */ O.jsx(yg, {
      "aria-invalid": E,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: g,
      ref: X,
      "aria-hidden": !0,
      onChange: ge,
      tabIndex: -1,
      disabled: p,
      className: ye.nativeInput,
      autoFocus: s,
      ...U,
      ownerState: vt
    }), /* @__PURE__ */ O.jsx(gg, {
      as: b,
      className: ye.icon,
      ownerState: vt
    }), /* @__PURE__ */ O.jsx(ql, {
      id: `menu-${g || ""}`,
      anchorEl: te,
      open: Oe,
      onClose: _,
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
        "aria-multiselectable": w ? "true" : void 0,
        disableListWrap: !0,
        id: Ft,
        ...T.MenuListProps
      },
      slotProps: {
        ...T.slotProps,
        paper: {
          ...Nt,
          style: {
            minWidth: lt,
            ...Nt != null ? Nt.style : null
          }
        }
      },
      children: ot
    })]
  });
});
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
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
  inputRef: Mt,
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
const Eg = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ni = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => mt(e) && e !== "variant",
  slot: "Root"
}, xg = se(Bn, Ni)(""), Sg = se(zn, Ni)(""), Cg = se(Ln, Ni)(""), ro = /* @__PURE__ */ f.forwardRef(function(t, n) {
  const o = yl({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = $m,
    id: p,
    input: y,
    inputProps: E,
    label: b,
    labelId: x,
    MenuProps: v,
    multiple: T = !1,
    native: w = !1,
    onClose: g,
    onOpen: C,
    open: h,
    renderValue: P,
    SelectDisplayProps: k,
    variant: I = "outlined",
    ...m
  } = o, M = w ? Kl : Xl, F = mn(), B = pn({
    props: o,
    muiFormControl: F,
    states: ["variant", "error"]
  }), q = B.variant || I, L = {
    ...o,
    variant: q,
    classes: a
  }, z = Eg(L), {
    root: D,
    ...U
  } = z, Y = y || {
    standard: /* @__PURE__ */ O.jsx(xg, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ O.jsx(Sg, {
      label: b,
      ownerState: L
    }),
    filled: /* @__PURE__ */ O.jsx(Cg, {
      ownerState: L
    })
  }[q], re = Xe(n, Xn(Y));
  return /* @__PURE__ */ O.jsx(f.Fragment, {
    children: /* @__PURE__ */ f.cloneElement(Y, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: M,
      inputProps: {
        children: s,
        error: B.error,
        IconComponent: d,
        variant: q,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T,
        ...w ? {
          id: p
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: x,
          MenuProps: v,
          onClose: g,
          onOpen: C,
          open: h,
          renderValue: P,
          SelectDisplayProps: {
            id: p,
            ...k
          }
        },
        ...E,
        classes: E ? Ke(U, E.classes) : U,
        ...y ? y.props.inputProps : {}
      },
      ...(T && w || u) && q === "outlined" ? {
        notched: !0
      } : {},
      ref: re,
      className: de(Y.props.className, l, z.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: q
      },
      ...m
    })
  });
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
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
ro.muiName = "Select";
const kn = lp({
  createStyledComponent: se("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => yl({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
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
function Tg(e) {
  return Ne("MuiTextField", e);
}
Pe("MuiTextField", ["root"]);
const wg = {
  standard: Bn,
  filled: Ln,
  outlined: zn
}, Rg = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"]
  }, Tg, t);
}, Og = se(Pi, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ei = /* @__PURE__ */ f.forwardRef(function(t, n) {
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
    error: p = !1,
    FormHelperTextProps: y,
    fullWidth: E = !1,
    helperText: b,
    id: x,
    InputLabelProps: v,
    inputProps: T,
    InputProps: w,
    inputRef: g,
    label: C,
    maxRows: h,
    minRows: P,
    multiline: k = !1,
    name: I,
    onBlur: m,
    onChange: M,
    onFocus: F,
    placeholder: B,
    required: q = !1,
    rows: L,
    select: z = !1,
    SelectProps: D,
    slots: U = {},
    slotProps: Y = {},
    type: re,
    value: N,
    variant: A = "outlined",
    ...X
  } = o, W = {
    ...o,
    autoFocus: s,
    color: c,
    disabled: d,
    error: p,
    fullWidth: E,
    multiline: k,
    required: q,
    select: z,
    variant: A
  }, H = Rg(W);
  process.env.NODE_ENV !== "production" && z && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Q = Ja(x), G = b && Q ? `${Q}-helper-text` : void 0, J = C && Q ? `${Q}-label` : void 0, ee = wg[A], Z = {
    slots: U,
    slotProps: {
      input: w,
      inputLabel: v,
      htmlInput: T,
      formHelperText: y,
      select: D,
      ...Y
    }
  }, V = {}, te = Z.slotProps.inputLabel;
  A === "outlined" && (te && typeof te.shrink < "u" && (V.notched = te.shrink), V.label = C), z && ((!D || !D.native) && (V.id = void 0), V["aria-describedby"] = void 0);
  const [R, oe] = ht("input", {
    elementType: ee,
    externalForwardedProps: Z,
    additionalProps: V,
    ownerState: W
  }), [_, le] = ht("inputLabel", {
    elementType: ki,
    externalForwardedProps: Z,
    ownerState: W
  }), [ge, Ie] = ht("htmlInput", {
    elementType: "input",
    externalForwardedProps: Z,
    ownerState: W
  }), [Le, Oe] = ht("formHelperText", {
    elementType: Dl,
    externalForwardedProps: Z,
    ownerState: W
  }), [Qe, ae] = ht("select", {
    elementType: ro,
    externalForwardedProps: Z,
    ownerState: W
  }), fe = /* @__PURE__ */ O.jsx(R, {
    "aria-describedby": G,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: E,
    multiline: k,
    name: I,
    rows: L,
    maxRows: h,
    minRows: P,
    type: re,
    value: N,
    id: Q,
    inputRef: g,
    onBlur: m,
    onChange: M,
    onFocus: F,
    placeholder: B,
    inputProps: Ie,
    slots: {
      input: U.htmlInput ? ge : void 0
    },
    ...oe
  });
  return /* @__PURE__ */ O.jsxs(Og, {
    className: de(H.root, l),
    disabled: d,
    error: p,
    fullWidth: E,
    ref: n,
    required: q,
    color: c,
    variant: A,
    ownerState: W,
    ...X,
    children: [C != null && C !== "" && /* @__PURE__ */ O.jsx(_, {
      htmlFor: Q,
      id: J,
      ...le,
      children: C
    }), z ? /* @__PURE__ */ O.jsx(Qe, {
      "aria-describedby": G,
      id: Q,
      labelId: J,
      value: N,
      input: fe,
      ...ae,
      children: a
    }) : fe, b && /* @__PURE__ */ O.jsx(Le, {
      id: G,
      ...Oe,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
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
  inputRef: Mt,
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
const Jl = aa({
  env: "",
  ipc: {
    send: () => {
    },
    on: () => () => {
    },
    once: () => {
    }
  }
});
function Pg({
  api: e,
  children: t
}) {
  return /* @__PURE__ */ O.jsx(Jl.Provider, { value: e, children: t });
}
function kg() {
  return ti(Jl);
}
function Mg() {
  const [e, t] = Bi(!1), [n] = Bi(kg());
  function o(a) {
    if (a === 0)
      console.log("WL Ready"), t(!0);
    else
      throw t(!1), new Error(`wolframscript returned code: ${a}`);
  }
  Ro(() => {
    n.ipc.on("wl-status", (a) => {
      o(a), console.log("wl-status effect:", e);
    });
  });
  async function i(a, l = {}, c = 4848) {
    return new Promise((u, d) => {
      try {
        n.ipc.send("req", [a, l, c]), n.ipc.once("req", (p) => {
          console.log("Received response:", p), u(p);
        });
      } catch (p) {
        d(p);
      }
    });
  }
  const s = fc(async () => {
    const a = await i("aliveQ", {}, 8888);
    console.log("aliveQ res:", a), t(a === "True");
  }, [e, t]);
  return Ro(() => {
    const a = setInterval(() => {
      s();
    }, 15e3);
    return () => clearInterval(a);
  }, [s, e]), {
    isActive: e,
    req: i
  };
}
const Ql = aa({
  isActive: !1,
  req: async () => {
  }
});
function $g({ children: e }) {
  const t = Mg();
  return /* @__PURE__ */ O.jsx(Ql.Provider, { value: t, children: e });
}
function Zl() {
  return ti(Ql);
}
function Ng() {
  const e = Zl(), [t, n] = et.useState("Python"), [o, i] = et.useState(""), [s, a] = et.useState(""), [l, c] = et.useState(null), u = (b) => {
    n(b.target.value);
  }, d = (b) => {
    i(b.target.value);
  }, p = async () => {
    await e.req(`/evaluate-${t}`, {
      in: o
    }).then((b) => c(b)).catch((b) => console.log(b));
  }, y = async () => {
    await e.req("/evaluate", {
      in: s
    }).then((b) => c(b)).catch((b) => console.log(b));
  }, E = (b) => {
    a(b.target.value);
  };
  return /* @__PURE__ */ O.jsxs(
    kn,
    {
      className: "Hello",
      direction: "column",
      spacing: 2,
      sx: { textAlign: "center", alignContent: "center" },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ O.jsx(wl, { variant: "h2", children: "Electron + ReactTS + WolframLanguage" }),
        /* @__PURE__ */ O.jsxs(kn, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ O.jsx(
            ei,
            {
              variant: "filled",
              label: "WL Input",
              color: "primary",
              sx: { width: 450 },
              onChange: E
            }
          ),
          /* @__PURE__ */ O.jsx(
            Yo,
            {
              variant: "contained",
              onClick: y,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        /* @__PURE__ */ O.jsxs(kn, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ O.jsxs(Pi, { children: [
            /* @__PURE__ */ O.jsx(ki, { id: "evaluator-label", children: "Evaluator" }),
            /* @__PURE__ */ O.jsxs(
              ro,
              {
                labelId: "evaluator-label",
                label: "Evaluator",
                sx: { width: 130 },
                value: t,
                onChange: u,
                children: [
                  /* @__PURE__ */ O.jsx(hr, { value: "Python", children: "Python" }),
                  /* @__PURE__ */ O.jsx(hr, { value: "NodeJS", children: "NodeJS" }),
                  /* @__PURE__ */ O.jsx(hr, { value: "Shell", children: "Shell" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ O.jsx(
            ei,
            {
              variant: "filled",
              label: "External Input",
              color: "primary",
              sx: { width: 300 },
              onChange: d
            }
          ),
          /* @__PURE__ */ O.jsx(
            Yo,
            {
              variant: "contained",
              onClick: p,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        l && typeof l != "object" ? /* @__PURE__ */ O.jsx(wi, { sx: { maxWidth: "50%", p: 2 }, variant: "outlined", children: l }) : null
      ]
    }
  );
}
const Ig = (e) => /* @__PURE__ */ f.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 2100 2100", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...e }, /* @__PURE__ */ f.createElement("defs", null, /* @__PURE__ */ f.createElement("clipPath", { id: "clip-1" }, /* @__PURE__ */ f.createElement("rect", { x: 0, y: 0, width: 2100, height: 2100, fill: "none", fillRule: "nonzero", stroke: "none", strokeWidth: 1, strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("radialGradient", { cx: 1058.4105, cy: 1037.3842, r: 1036.8263, gradientUnits: "userSpaceOnUse", id: "color-1" }, /* @__PURE__ */ f.createElement("stop", { offset: 0.2, stopColor: "#ff0000" }), /* @__PURE__ */ f.createElement("stop", { offset: 1, stopColor: "#2a213d" })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-2" }, /* @__PURE__ */ f.createElement("path", { d: "M686.2441,677.0452h710.6907v759.0513h-710.6907zM686.2441,677.0452", id: "clip1 1", fill: "none", fillRule: "nonzero", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-3" }, /* @__PURE__ */ f.createElement("path", { d: "M1141.2018,986.6581h255.733v201.853h-255.733zM1141.2018,986.6581", id: "clip2 1", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-4" }, /* @__PURE__ */ f.createElement("path", { d: "M1073.9175,852.0895h323.0173v269.1373h-323.0173zM1073.9175,852.0895", id: "clip3 1", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-5" }, /* @__PURE__ */ f.createElement("path", { d: "M686.2441,852.0895h253.1047v269.1373h-253.1047zM686.2441,852.0895", id: "clip4 1", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-6" }, /* @__PURE__ */ f.createElement("path", { d: "M686.2441,986.6581h253.1047v201.853h-253.1047zM686.2441,986.6581", id: "clip5 1", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("clipPath", { id: "clip-7" }, /* @__PURE__ */ f.createElement("path", { d: "M686.2441,1053.9425h320.389v201.853h-320.389zM686.2441,1053.9425", id: "clip6 1", strokeMiterlimit: 10 })), /* @__PURE__ */ f.createElement("radialGradient", { cx: 1044.1115, cy: 1055.2664, r: 553.6525, gradientUnits: "userSpaceOnUse", id: "color-2" }, /* @__PURE__ */ f.createElement("stop", { offset: 0, stopColor: "#e30505" }), /* @__PURE__ */ f.createElement("stop", { offset: 1, stopColor: "#adadad" }))), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-1)", id: "Frame 1", fill: "none", fillRule: "none", stroke: "none", strokeWidth: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "none", strokeDasharray: "", strokeDashoffset: 0, fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: {
  mixBlendMode: "normal"
} }, /* @__PURE__ */ f.createElement("rect", { x: 0, y: 0, transform: "", width: 2100, height: 2100, fill: "none", fillRule: "nonzero", stroke: "none", strokeWidth: 1, strokeMiterlimit: 10 }), /* @__PURE__ */ f.createElement("path", { d: "M25.8236,1050c0,-565.637 458.5394,-1024.1764 1024.1764,-1024.1764c565.637,0 1024.1763,458.5394 1024.1763,1024.1764c0,565.637 -458.5394,1024.1764 -1024.1763,1024.1764c-565.637,0 -1024.1764,-458.5394 -1024.1764,-1024.1764z", fill: "url(#color-1)", fillRule: "nonzero", stroke: "#ebebeb", strokeWidth: 50, strokeMiterlimit: 10 }), /* @__PURE__ */ f.createElement("g", { stroke: "none", strokeWidth: 3 }, /* @__PURE__ */ f.createElement("g", { id: "surface46 1" }, /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-2)" }, /* @__PURE__ */ f.createElement("path", { d: "M1280.2385,1062.353l99.6124,-111.1768l-142.9792,-31.0138l12.353,-148.2358l-136.9341,61.7649l-74.6435,-129.5749l-74.6435,129.5749l-136.9342,-61.7649l12.353,148.2358l-142.9792,31.0138l99.3495,111.1768l-99.3495,111.1768l149.2871,31.0138l-12.6158,148.2358l136.9341,-61.7649l68.5985,129.8377l74.6435,-129.8377l136.9341,61.7649l-12.353,-148.2358l149.2871,-31.0138zM1311.5153,1136.4709l-68.5985,-24.706l-43.3668,-61.7649l55.9826,18.6609zM1093.6297,1272.6165l-43.6297,67.81v-74.1179l43.6297,-61.7649zM994.0173,907.8093l-68.3356,-24.7059l-43.6296,-55.457l74.6435,30.751zM1118.5985,858.3974l74.6435,-30.751l-43.6297,55.457l-68.3356,24.7059zM1205.595,926.4702l-37.3217,49.4119v-74.1179l43.6296,-55.7198zM1037.6471,1241.6027l-55.9827,-80.4258l55.9827,-74.1178l55.9826,74.1178zM931.7268,1012.9411v-98.8238l93.5673,31.0139v92.5159zM1050,945.1311l93.5673,-31.0139v98.8238l-93.5673,31.0139zM869.6991,926.4702l-6.3079,-80.4258l43.6296,55.7198v74.1179zM1012.6783,1068.6609l-55.9826,74.1179l-93.3044,-24.706l62.2905,-74.1178zM981.6644,1204.5437l43.6297,61.7649v74.1179l-43.6297,-67.81zM1062.6158,1068.6609l86.9965,-31.0138l62.2906,74.1178l-93.3044,31.0139zM1330.1762,969.8371l-68.5984,74.1179l-86.9966,-31.0139l49.6747,-67.8099zM1087.3218,846.0444l-49.6747,68.0728l-49.6748,-68.0728l49.6748,-86.4709zM745.1179,969.8371l105.9203,-24.7059l49.6747,67.8099l-87.2594,31.0139zM819.7614,1074.706l55.9827,-18.3981l-43.6297,55.457l-68.3356,24.706zM770.0867,1161.1768l68.3356,-24.7059l74.6435,24.7059l-62.0277,18.6609zM869.6991,1204.5437l80.6886,-24.7059v86.4709l-93.3044,43.3668zM1124.6435,1266.3086v-86.4709l80.9515,24.7059l12.6158,105.1318zM1218.2108,1179.8377l-62.2906,-18.6609l74.6435,-24.7059l68.5985,24.7059zM1218.2108,1179.8377", fill: "#adadad", fillRule: "evenodd", strokeMiterlimit: 10 }), /* @__PURE__ */ f.createElement("path", { d: "M1280.2385,1062.353l99.6124,-111.1768l-142.9792,-31.0138l12.353,-148.2358l-136.9341,61.7649l-74.6435,-129.5749l-74.6435,129.5749l-136.9342,-61.7649l12.353,148.2358l-142.9792,31.0138l99.3495,111.1768l-99.3495,111.1768l149.2871,31.0138l-12.6158,148.2358l136.9341,-61.7649l68.5985,129.8377l74.6435,-129.8377l136.9341,61.7649l-12.353,-148.2358l149.2871,-31.0138zM1280.2385,1062.353", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-3)", fill: "none", fillRule: "nonzero" }, /* @__PURE__ */ f.createElement("path", { d: "M1311.5153,1136.4709l-68.5985,-24.706l-43.3668,-61.7649l55.9826,18.6609zM1311.5153,1136.4709", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("path", { d: "M1093.6297,1272.6165l-43.6297,67.81v-74.1179l43.6297,-61.7649zM1093.6297,1272.6165", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M994.0173,907.8093l-68.3356,-24.7059l-43.6296,-55.457l74.6435,30.751zM994.0173,907.8093", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1118.5985,858.3974l74.6435,-30.751l-43.6297,55.457l-68.3356,24.7059zM1118.5985,858.3974", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1205.595,926.4702l-37.3217,49.4119v-74.1179l43.6296,-55.7198zM1205.595,926.4702", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1037.6471,1241.6027l-55.9827,-80.4258l55.9827,-74.1178l55.9826,74.1178zM1037.6471,1241.6027", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M931.7268,1012.9411v-98.8238l93.5673,31.0139v92.5159zM931.7268,1012.9411", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1050,945.1311l93.5673,-31.0139v98.8238l-93.5673,31.0139zM1050,945.1311", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M869.6991,926.4702l-6.3079,-80.4258l43.6296,55.7198v74.1179zM869.6991,926.4702", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1012.6783,1068.6609l-55.9826,74.1179l-93.3044,-24.706l62.2905,-74.1178zM1012.6783,1068.6609", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M981.6644,1204.5437l43.6297,61.7649v74.1179l-43.6297,-67.81zM981.6644,1204.5437", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1062.6158,1068.6609l86.9965,-31.0138l62.2906,74.1178l-93.3044,31.0139zM1062.6158,1068.6609", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-4)", fill: "none", fillRule: "nonzero" }, /* @__PURE__ */ f.createElement("path", { d: "M1330.1762,969.8371l-68.5984,74.1179l-86.9966,-31.0139l49.6747,-67.8099zM1330.1762,969.8371", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("path", { d: "M1087.3218,846.0444l-49.6747,68.0728l-49.6748,-68.0728l49.6748,-86.4709zM1087.3218,846.0444", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-5)", fill: "none", fillRule: "nonzero" }, /* @__PURE__ */ f.createElement("path", { d: "M745.1179,969.8371l105.9203,-24.7059l49.6747,67.8099l-87.2594,31.0139zM745.1179,969.8371", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-6)", fill: "none", fillRule: "nonzero" }, /* @__PURE__ */ f.createElement("path", { d: "M819.7614,1074.706l55.9827,-18.3981l-43.6297,55.457l-68.3356,24.706zM819.7614,1074.706", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("g", { clipPath: "url(#clip-7)", fill: "none", fillRule: "nonzero" }, /* @__PURE__ */ f.createElement("path", { d: "M770.0867,1161.1768l68.3356,-24.7059l74.6435,24.7059l-62.0277,18.6609zM770.0867,1161.1768", strokeMiterlimit: 4 })), /* @__PURE__ */ f.createElement("path", { d: "M869.6991,1204.5437l80.6886,-24.7059v86.4709l-93.3044,43.3668zM869.6991,1204.5437", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1124.6435,1266.3086v-86.4709l80.9515,24.7059l12.6158,105.1318zM1124.6435,1266.3086", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }), /* @__PURE__ */ f.createElement("path", { d: "M1218.2108,1179.8377l-62.2906,-18.6609l74.6435,-24.7059l68.5985,24.7059zM1218.2108,1179.8377", fill: "none", fillRule: "nonzero", strokeMiterlimit: 4 }))), /* @__PURE__ */ f.createElement("g", { fill: "url(#color-2)", fillRule: "nonzero", stroke: "none", strokeWidth: 3, strokeMiterlimit: 10 }, /* @__PURE__ */ f.createElement("g", null, /* @__PURE__ */ f.createElement("path", { d: "M801.7955,523.0593c-226.9864,-41.5253 -406.4597,1.9475 -477.9872,126.3766c-53.3753,92.8521 -38.1382,215.9799 36.9795,347.5895c3.0692,5.3843 8.1433,9.3223 14.1048,10.9468c5.9614,1.6244 12.3212,0.802 17.6786,-2.2861c11.155,-6.4287 15.0142,-20.7204 8.6222,-31.9298c-67.6726,-118.5408 -80.8613,-224.8009 -37.0662,-300.9412c59.4108,-103.3686 219.4774,-142.1445 429.3107,-103.749c7.7057,1.5297 15.66,-0.9452 21.1554,-6.5825c5.4955,-5.6373 7.7916,-13.6773 6.107,-21.3835c-2.0499,-9.3307 -9.5434,-16.4712 -18.9277,-18.0361zM478.8248,1156.9815c91.7736,101.3157 211.0149,196.3399 347.0033,275.2113c329.2526,190.9465 679.7777,241.9847 852.5221,123.6639c10.3508,-7.3722 12.9175,-21.7128 5.7711,-32.2447c-7.1463,-10.5319 -21.3731,-13.3754 -31.9889,-6.3937c-154.615,105.8981 -487.5856,57.4122 -803.0245,-125.5243c-131.9373,-76.5206 -247.3922,-168.525 -335.8447,-266.1703c-6.2928,-7.1709 -16.2943,-9.7777 -25.2643,-6.5848c-7.4038,2.6426 -12.9809,8.8584 -14.8307,16.5289c-1.8498,7.6706 0.2774,15.7609 5.6566,21.5137z" }), /* @__PURE__ */ f.createElement("path", { d: "M1623.2641,1128.5434c148.6206,-176.3563 200.5223,-353.7436 129.15,-477.9252c-52.5222,-91.372 -163.5656,-139.615 -311.1187,-141.5396c-12.8528,-0.1656 -23.4099,10.1576 -23.5901,23.0675c-0.139,9.4607 5.4237,18.0691 14.0829,21.7937c2.8092,1.2139 5.8289,1.8601 8.8868,1.9017c132.7129,1.723 228.387,43.294 271.4248,118.1604c59.2739,103.1487 13.0062,261.3359 -124.3644,424.3392c-4.1324,4.7117 -6.2024,10.896 -5.7432,17.1582c0.4592,6.2623 3.4089,12.0752 8.1839,16.1279c4.7747,4.0467 10.9666,5.9991 17.1871,5.4193c6.2205,-0.5798 11.9491,-3.6432 15.901,-8.5032zM1241.3069,530.8493c-134.3871,28.9284 -277.4147,85.47 -414.7671,165.1249c-339.9185,197.1235 -561.6495,487.7681 -530.8424,698.5378c1.0429,8.4106 6.5359,15.5956 14.3562,18.7784c7.8204,3.1828 16.7432,1.865 23.3205,-3.4442c6.5773,-5.3092 9.7788,-13.7782 8.3674,-22.1344c-27.3309,-187.1202 182.8355,-462.6431 508.0553,-651.2388c133.2512,-77.2813 271.7578,-132.0129 401.2682,-159.9148c12.1646,-3.0706 19.7218,-15.2681 17.092,-27.5869c-2.6299,-12.3188 -14.5016,-20.3314 -26.8501,-18.1221z" }), /* @__PURE__ */ f.createElement("path", { d: "M690.638,1540.6203c77.7409,217.9319 204.8471,352.1352 347.8108,352.1352c104.2461,0 200.7002,-71.3747 275.9229,-197.0547c3.4067,-5.3194 4.5257,-11.797 3.1022,-17.9582c-1.7913,-7.7642 -7.3984,-14.0762 -14.8749,-16.7449c-7.4765,-2.6687 -15.7916,-1.3262 -22.059,3.5615c-2.4635,1.92 -4.5164,4.312 -6.0401,7.0431c-67.6087,112.9503 -150.6506,174.4134 -236.0511,174.4134c-118.7304,0 -232.1323,-119.7047 -303.97,-321.1677c-1.9913,-5.9605 -6.2832,-10.8676 -11.9114,-13.6187c-2.7877,-1.3572 -5.8163,-2.1438 -8.9096,-2.3141c-6.2488,-0.3308 -12.3675,1.8761 -16.9794,6.1242c-4.6119,4.2481 -7.3295,10.1805 -7.5413,16.4622c-0.1012,3.1112 0.4168,6.2114 1.5237,9.1189zM1400.4656,1497.9724c40.2276,-129.0985 61.815,-278.0707 61.815,-433.3069c0,-387.3093 -134.9437,-721.2067 -327.1814,-806.947c-11.6867,-4.9383 -25.1586,0.4251 -30.3039,12.0645c-5.1453,11.6394 -0.0716,25.2744 11.4127,30.6705c171.4533,76.4794 299.5403,393.3488 299.5403,764.2121c0,150.5806 -20.9395,294.8558 -59.6982,419.3491c-2.0268,5.9635 -1.5661,12.497 1.2774,18.114c4.3343,8.5725 13.4509,13.6064 22.9792,12.6884c9.5283,-0.918 17.526,-7.6008 20.159,-16.8446zM1838.8228,1475.0835c0.255,-40.1465 -20.9218,-77.3534 -55.4937,-97.5004c-34.5718,-20.1471 -77.2396,-20.1462 -111.8106,0.0023c-34.571,20.1485 -55.7463,57.3562 -55.4897,97.5027c0.3932,61.5179 50.1534,111.1793 111.3992,111.178c61.2459,-0.0013 111.004,-49.6646 111.3947,-111.1826zM1792.2676,1475.0835c-0.0076,35.9691 -29.0348,65.1259 -64.8441,65.1335c-35.8087,-0.0025 -64.8358,-29.1619 -64.835,-65.1305c0.0008,-35.9685 29.0293,-65.1266 64.838,-65.1274c35.8087,-0.0008 64.8386,29.1558 64.8411,65.1243zM347.8683,1586.9799c29.546,0.0037 57.883,-11.7842 78.7752,-32.7697c20.8922,-20.9854 32.6277,-49.4488 32.6241,-79.1267c0.0024,-29.6783 -11.7341,-58.1417 -32.627,-79.127c-20.8929,-20.9853 -49.2303,-32.773 -78.7768,-32.7694c-29.5449,-0.0012 -57.8799,11.7876 -78.7709,32.7726c-20.8909,20.985 -32.6262,49.447 -32.6238,79.1237c-0.0024,29.6775 11.7335,58.1402 32.6254,79.1254c20.8919,20.9852 49.2282,32.7734 78.7738,32.771zM347.8683,1540.217c-35.82,0 -64.8578,-29.1674 -64.8578,-65.1472c0,-35.9798 29.0378,-65.1473 64.8578,-65.1473c35.82,0 64.8578,29.1674 64.8578,65.1473c0,35.9798 -29.0378,65.1472 -64.8578,65.1472z" }), /* @__PURE__ */ f.createElement("path", { d: "M1038.4488,371.8556c45.0588,0.004 85.6812,-27.2618 102.9185,-69.0789c14.229,-34.5263 10.3631,-73.9082 -10.3053,-104.9782c-20.6683,-31.07 -55.4116,-49.728 -92.6133,-49.7356c-45.0596,-0.0077 -85.6856,27.2535 -102.9295,69.0688c-17.244,41.8152 -7.709,89.9471 24.1576,121.9465c20.8914,20.985 49.2267,32.7739 78.7719,32.773zM1038.4488,325.0881c-26.2253,-0.0033 -49.8677,-15.8703 -59.9081,-40.2055c-6.5879,-15.9583 -6.5879,-33.893 0,-49.8514c6.5783,-15.9601 19.2017,-28.6398 35.0908,-35.2474c24.234,-10.0822 52.1282,-4.5084 70.6757,14.1224c18.5475,18.6308 24.0957,46.6496 14.0577,70.9915c-10.0381,24.3419 -33.6857,40.2133 -59.9161,40.2134z" })))));
function _g() {
  return /* @__PURE__ */ O.jsxs(
    kn,
    {
      className: "main",
      direction: "column",
      spacing: 2,
      sx: {
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ O.jsx(Ig, { style: { width: "220px", height: "auto" } }),
        /* @__PURE__ */ O.jsx(Ml, { sx: { width: "150%", minWidth: "200px" }, children: /* @__PURE__ */ O.jsx(Ll, {}) })
      ]
    }
  );
}
const Ag = Xr({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee0915"
    }
  }
});
function jg() {
  return Zl().isActive ? /* @__PURE__ */ O.jsx(Qc, { children: /* @__PURE__ */ O.jsx(eu, { children: /* @__PURE__ */ O.jsx(ga, { path: "/", element: /* @__PURE__ */ O.jsx(Ng, {}) }) }) }) : /* @__PURE__ */ O.jsx(_g, {});
}
function zg({ api: e }) {
  return Ro(() => {
    document.title = "WRB: Example Project";
  }), /* @__PURE__ */ O.jsxs(Bp, { theme: Ag, children: [
    /* @__PURE__ */ O.jsx(Al, {}),
    /* @__PURE__ */ O.jsx(Pg, { api: e, children: /* @__PURE__ */ O.jsx($g, { children: /* @__PURE__ */ O.jsx(jg, {}) }) })
  ] });
}
export {
  zg as Frontend,
  $g as WLProvider,
  Zl as useWL
};
//# sourceMappingURL=index.es.js.map

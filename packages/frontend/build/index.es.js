import * as p from "react";
import et, { forwardRef as uc, useContext as ei, Children as dc, isValidElement as an, cloneElement as ln, createContext as aa, useState as Fi, useEffect as Bi, useCallback as fc } from "react";
import * as pc from "react-dom";
import Xr from "react-dom";
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oo = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function hc() {
  if (Vi) return mr;
  Vi = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, y = null, E = null;
    u !== void 0 && (y = "" + u), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (d in c) o.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: y, ref: E, props: f, _owner: i.current };
  }
  return mr.Fragment = r, mr.jsx = a, mr.jsxs = a, mr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function gc() {
  return Wi || (Wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
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
    function $(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === o || S === s || I || S === i || S === u || S === d || k || S === E || C || h || P || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === f || S.$$typeof === a || S.$$typeof === l || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === m || S.getModuleId !== void 0));
    }
    function D(S, j, K) {
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
        case r:
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
            return D(S, S.render, "ForwardRef");
          case f:
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
    var F = Object.assign, V = 0, A, U, Y, ne, N, _, Z;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function H() {
      {
        if (V === 0) {
          A = console.log, U = console.info, Y = console.warn, ne = console.error, N = console.group, _ = console.groupCollapsed, Z = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: z,
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
        V++;
      }
    }
    function J() {
      {
        if (V--, V === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, S, {
              value: A
            }),
            info: F({}, S, {
              value: U
            }),
            warn: F({}, S, {
              value: Y
            }),
            error: F({}, S, {
              value: ne
            }),
            group: F({}, S, {
              value: N
            }),
            groupCollapsed: F({}, S, {
              value: _
            }),
            groupEnd: F({}, S, {
              value: Z
            })
          });
        }
        V < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = T.ReactCurrentDispatcher, X;
    function ee(S, j, K) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var ce = Ee.stack.trim().match(/\n( *(at )?)/);
            X = ce && ce[1] || "";
          }
        return `
` + X + S;
      }
    }
    var Q = !1, W;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      W = new te();
    }
    function O(S, j) {
      if (!S || Q)
        return "";
      {
        var K = W.get(S);
        if (K !== void 0)
          return K;
      }
      var ce;
      Q = !0;
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
            } catch (rt) {
              ce = rt;
            }
            Reflect.construct(S, [], he);
          } else {
            try {
              he.call();
            } catch (rt) {
              ce = rt;
            }
            S.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            ce = rt;
          }
          S();
        }
      } catch (rt) {
        if (rt && ce && typeof rt.stack == "string") {
          for (var pe = rt.stack.split(`
`), Qe = ce.stack.split(`
`), ze = pe.length - 1, qe = Qe.length - 1; ze >= 1 && qe >= 0 && pe[ze] !== Qe[qe]; )
            qe--;
          for (; ze >= 1 && qe >= 0; ze--, qe--)
            if (pe[ze] !== Qe[qe]) {
              if (ze !== 1 || qe !== 1)
                do
                  if (ze--, qe--, qe < 0 || pe[ze] !== Qe[qe]) {
                    var ct = `
` + pe[ze].replace(" at new ", " at ");
                    return S.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", S.displayName)), typeof S == "function" && W.set(S, ct), ct;
                  }
                while (ze >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        Q = !1, G.current = ke, J(), Error.prepareStackTrace = Ee;
      }
      var Gt = S ? S.displayName || S.name : "", Ft = Gt ? ee(Gt) : "";
      return typeof S == "function" && W.set(S, Ft), Ft;
    }
    function oe(S, j, K) {
      return O(S, !1);
    }
    function L(S) {
      var j = S.prototype;
      return !!(j && j.isReactComponent);
    }
    function le(S, j, K) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return O(S, L(S));
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
          case f:
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
    var ge = Object.prototype.hasOwnProperty, Ie = {}, Fe = T.ReactDebugCurrentFrame;
    function Re(S) {
      if (S) {
        var j = S._owner, K = le(S.type, S._source, j ? j.type : null);
        Fe.setExtraStackFrame(K);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Je(S, j, K, ce, Ee) {
      {
        var ke = Function.call.bind(ge);
        for (var he in S)
          if (ke(S, he)) {
            var pe = void 0;
            try {
              if (typeof S[he] != "function") {
                var Qe = Error((ce || "React class") + ": " + K + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Qe.name = "Invariant Violation", Qe;
              }
              pe = S[he](j, he, ce, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              pe = ze;
            }
            pe && !(pe instanceof Error) && (Re(Ee), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", K, he, typeof pe), Re(null)), pe instanceof Error && !(pe.message in Ie) && (Ie[pe.message] = !0, Re(Ee), w("Failed %s type: %s", K, pe.message), Re(null));
          }
      }
    }
    var ae = Array.isArray;
    function fe(S) {
      return ae(S);
    }
    function re(S) {
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
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", re(S)), tt(S);
    }
    var lt = T.ReactCurrentOwner, Mt = {
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
    function Dt(S) {
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
    function Zr(S, j, K, ce, Ee) {
      {
        var ke, he = {}, pe = null, Qe = null;
        K !== void 0 && (ot(K), pe = "" + K), Dt(j) && (ot(j.key), pe = "" + j.key), Nt(j) && (Qe = j.ref, ie(j, Ee));
        for (ke in j)
          ge.call(j, ke) && !Mt.hasOwnProperty(ke) && (he[ke] = j[ke]);
        if (S && S.defaultProps) {
          var ze = S.defaultProps;
          for (ke in ze)
            he[ke] === void 0 && (he[ke] = ze[ke]);
        }
        if (pe || Qe) {
          var qe = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          pe && me(he, qe), Qe && Ye(he, qe);
        }
        return It(S, pe, Qe, Ee, ce, lt.current, he);
      }
    }
    var oo = T.ReactCurrentOwner, Ni = T.ReactDebugCurrentFrame;
    function Kt(S) {
      if (S) {
        var j = S._owner, K = le(S.type, S._source, j ? j.type : null);
        Ni.setExtraStackFrame(K);
      } else
        Ni.setExtraStackFrame(null);
    }
    var io;
    io = !1;
    function so(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Ii() {
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
    var Li = {};
    function tc(S) {
      {
        var j = Ii();
        if (!j) {
          var K = typeof S == "string" ? S : S.displayName || S.name;
          K && (j = `

Check the top-level render call using <` + K + ">.");
        }
        return j;
      }
    }
    function _i(S, j) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var K = tc(j);
        if (Li[K])
          return;
        Li[K] = !0;
        var ce = "";
        S && S._owner && S._owner !== oo.current && (ce = " It was passed a child from " + q(S._owner.type) + "."), Kt(S), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ce), Kt(null);
      }
    }
    function ji(S, j) {
      {
        if (typeof S != "object")
          return;
        if (fe(S))
          for (var K = 0; K < S.length; K++) {
            var ce = S[K];
            so(ce) && _i(ce, j);
          }
        else if (so(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Ee = v(S);
          if (typeof Ee == "function" && Ee !== S.entries)
            for (var ke = Ee.call(S), he; !(he = ke.next()).done; )
              so(he.value) && _i(he.value, j);
        }
      }
    }
    function rc(S) {
      {
        var j = S.type;
        if (j == null || typeof j == "string")
          return;
        var K;
        if (typeof j == "function")
          K = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === f))
          K = j.propTypes;
        else
          return;
        if (K) {
          var ce = q(j);
          Je(K, S.props, "prop", ce, S);
        } else if (j.PropTypes !== void 0 && !io) {
          io = !0;
          var Ee = q(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nc(S) {
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
    var Ai = {};
    function Di(S, j, K, ce, Ee, ke) {
      {
        var he = $(S);
        if (!he) {
          var pe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qe = ec();
          Qe ? pe += Qe : pe += Ii();
          var ze;
          S === null ? ze = "null" : fe(S) ? ze = "array" : S !== void 0 && S.$$typeof === t ? (ze = "<" + (q(S.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof S, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, pe);
        }
        var qe = Zr(S, j, K, Ee, ke);
        if (qe == null)
          return qe;
        if (he) {
          var ct = j.children;
          if (ct !== void 0)
            if (ce)
              if (fe(ct)) {
                for (var Gt = 0; Gt < ct.length; Gt++)
                  ji(ct[Gt], S);
                Object.freeze && Object.freeze(ct);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ji(ct, S);
        }
        if (ge.call(j, "key")) {
          var Ft = q(S), rt = Object.keys(j).filter(function(cc) {
            return cc !== "key";
          }), ao = rt.length > 0 ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ai[Ft + ao]) {
            var lc = rt.length > 0 ? "{" + rt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ao, Ft, lc, Ft), Ai[Ft + ao] = !0;
          }
        }
        return S === o ? nc(qe) : rc(qe), qe;
      }
    }
    function oc(S, j, K) {
      return Di(S, j, K, !0);
    }
    function ic(S, j, K) {
      return Di(S, j, K, !1);
    }
    var sc = ic, ac = oc;
    hr.Fragment = o, hr.jsx = sc, hr.jsxs = ac;
  }()), hr;
}
process.env.NODE_ENV === "production" ? Oo.exports = hc() : Oo.exports = gc();
var R = Oo.exports;
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
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
var Lt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Lt || (Lt = {}));
function yc(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: r,
    v5Compat: o = !1
  } = e, i;
  i = t.map((E, b) => d(E, typeof E == "string" ? null : E.state, b === 0 ? "default" : void 0));
  let s = c(r ?? i.length - 1), a = Lt.Pop, l = null;
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
  function f(E) {
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
    createHref: f,
    createURL(E) {
      return new URL(f(E), "http://localhost");
    },
    encodeLocation(E) {
      let b = typeof E == "string" ? Vr(E) : E;
      return {
        pathname: b.pathname || "",
        search: b.search || "",
        hash: b.hash || ""
      };
    },
    push(E, b) {
      a = Lt.Push;
      let x = d(E, b);
      s += 1, i.splice(s, i.length, x), o && l && l({
        action: a,
        location: x,
        delta: 1
      });
    },
    replace(E, b) {
      a = Lt.Replace;
      let x = d(E, b);
      i[s] = x, o && l && l({
        action: a,
        location: x,
        delta: 0
      });
    },
    go(E) {
      a = Lt.Pop;
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
function _e(e, t) {
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
function vc(e, t, r, o) {
  return r === void 0 && (r = null), Ro({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Vr(t) : t, {
    state: r,
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
    search: r = "",
    hash: o = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function Vr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var zi;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(zi || (zi = {}));
function xc(e, t, r) {
  return r === void 0 && (r = "/"), Sc(e, t, r, !1);
}
function Sc(e, t, r, o) {
  let i = typeof t == "string" ? Vr(t) : t, s = ua(i.pathname || "/", r);
  if (s == null)
    return null;
  let a = la(e);
  Cc(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = Lc(s);
    l = Nc(a[c], u, o);
  }
  return l;
}
function la(e, t, r, o) {
  t === void 0 && (t = []), r === void 0 && (r = []), o === void 0 && (o = "");
  let i = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (_e(c.relativePath.startsWith(o), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(o.length));
    let u = ir([o, c.relativePath]), d = r.concat(c);
    s.children && s.children.length > 0 && (_e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), la(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: $c(u, s.index),
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
  let [r, ...o] = t, i = r.endsWith("?"), s = r.replace(/\?$/, "");
  if (o.length === 0)
    return i ? [s, ""] : [s];
  let a = ca(o.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), i && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function Cc(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : Mc(t.routesMeta.map((o) => o.childrenIndex), r.routesMeta.map((o) => o.childrenIndex)));
}
const Tc = /^:[\w-]+$/, wc = 3, Oc = 2, Rc = 1, Pc = 10, kc = -2, Ui = (e) => e === "*";
function $c(e, t) {
  let r = e.split("/"), o = r.length;
  return r.some(Ui) && (o += kc), t && (o += Oc), r.filter((i) => !Ui(i)).reduce((i, s) => i + (Tc.test(s) ? wc : s === "" ? Rc : Pc), o);
}
function Mc(e, t) {
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
function Nc(e, t, r) {
  let {
    routesMeta: o
  } = e, i = {}, s = "/", a = [];
  for (let l = 0; l < o.length; ++l) {
    let c = o[l], u = l === o.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", f = qi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, d), y = c.route;
    if (!f && u && r && !o[o.length - 1].route.index && (f = qi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, d)), !f)
      return null;
    Object.assign(i, f.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: ir([s, f.pathname]),
      pathnameBase: _c(ir([s, f.pathnameBase])),
      route: y
    }), f.pathnameBase !== "/" && (s = ir([s, f.pathnameBase]));
  }
  return a;
}
function qi(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, o] = Ic(e.path, e.caseSensitive, e.end), i = t.match(r);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: o.reduce((u, d, f) => {
      let {
        paramName: y,
        isOptional: E
      } = d;
      if (y === "*") {
        let x = l[f] || "";
        a = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const b = l[f];
      return E && !b ? u[y] = void 0 : u[y] = (b || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function Ic(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Ut(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (o.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), o];
}
function Lc(e) {
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
  let r = t.endsWith("/") ? t.length - 1 : t.length, o = e.charAt(r);
  return o && o !== "/" ? null : e.slice(r) || "/";
}
const ir = (e) => e.join("/").replace(/\/\/+/g, "/"), _c = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jc(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const da = ["post", "put", "patch", "delete"];
new Set(da);
const Ac = ["get", ...da];
new Set(Ac);
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
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, gn.apply(this, arguments);
}
const fa = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (fa.displayName = "DataRouter");
const pa = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (pa.displayName = "DataRouterState");
const Dc = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Dc.displayName = "Await");
const ti = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ti.displayName = "Navigation");
const Wr = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Wr.displayName = "Location");
const zr = /* @__PURE__ */ p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (zr.displayName = "Route");
const ri = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ri.displayName = "RouteError");
function ni() {
  return p.useContext(Wr) != null;
}
function Fc() {
  return ni() || (process.env.NODE_ENV !== "production" ? _e(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : _e(!1)), p.useContext(Wr).location;
}
function Bc(e, t) {
  return Vc(e, t);
}
function Vc(e, t, r, o) {
  ni() || (process.env.NODE_ENV !== "production" ? _e(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : _e(!1));
  let {
    navigator: i
  } = p.useContext(ti), {
    matches: s
  } = p.useContext(zr), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", u = a ? a.pathnameBase : "/", d = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let w = d && d.path || "";
    ha(c, !d || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let f = Fc(), y;
  if (t) {
    var E;
    let w = typeof t == "string" ? Vr(t) : t;
    u === "/" || (E = w.pathname) != null && E.startsWith(u) || (process.env.NODE_ENV !== "production" ? _e(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + u + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : _e(!1)), y = w;
  } else
    y = f;
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
    pathname: ir([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? u : ir([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), s, r, o);
  return t && T ? /* @__PURE__ */ p.createElement(Wr.Provider, {
    value: {
      location: gn({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, y),
      navigationType: Lt.Pop
    }
  }, T) : T;
}
function Wc() {
  let e = Zc(), t = jc(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", i = {
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
  }, t), r ? /* @__PURE__ */ p.createElement("pre", {
    style: i
  }, r) : null, a);
}
const zc = /* @__PURE__ */ p.createElement(Wc, null);
class Uc extends p.Component {
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
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ p.createElement(zr.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ p.createElement(ri.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function qc(e) {
  let {
    routeContext: t,
    match: r,
    children: o
  } = e, i = p.useContext(fa);
  return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ p.createElement(zr.Provider, {
    value: t
  }, o);
}
function Hc(e, t, r, o) {
  var i;
  if (t === void 0 && (t = []), r === void 0 && (r = null), o === void 0 && (o = null), e == null) {
    var s;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((s = o) != null && s.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let a = e, l = (i = r) == null ? void 0 : i.errors;
  if (l != null) {
    let d = a.findIndex((f) => f.route.id && l?.[f.route.id] !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? _e(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : _e(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, u = -1;
  if (r && o && o.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
        let {
          loaderData: y,
          errors: E
        } = r, b = f.route.loader && y[f.route.id] === void 0 && (!E || E[f.route.id] === void 0);
        if (f.route.lazy || b) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, f, y) => {
    let E, b = !1, x = null, v = null;
    r && (E = l && f.route.id ? l[f.route.id] : void 0, x = f.route.errorElement || zc, c && (u < 0 && y === 0 ? (ha("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, v = null) : u === y && (b = !0, v = f.route.hydrateFallbackElement || null)));
    let T = t.concat(a.slice(0, y + 1)), w = () => {
      let g;
      return E ? g = x : b ? g = v : f.route.Component ? g = /* @__PURE__ */ p.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d, /* @__PURE__ */ p.createElement(qc, {
        match: f,
        routeContext: {
          outlet: d,
          matches: T,
          isDataRoute: r != null
        },
        children: g
      });
    };
    return r && (f.route.ErrorBoundary || f.route.errorElement || y === 0) ? /* @__PURE__ */ p.createElement(Uc, {
      location: r.location,
      revalidation: r.revalidation,
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
var Po = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Po || {});
function ma(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Yc(e) {
  let t = p.useContext(pa);
  return t || (process.env.NODE_ENV !== "production" ? _e(!1, ma(e)) : _e(!1)), t;
}
function Kc(e) {
  let t = p.useContext(zr);
  return t || (process.env.NODE_ENV !== "production" ? _e(!1, ma(e)) : _e(!1)), t;
}
function Gc(e) {
  let t = Kc(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? _e(!1, e + ' can only be used on routes that contain a unique "id"') : _e(!1)), r.route.id;
}
function Zc() {
  var e;
  let t = p.useContext(ri), r = Yc(Po.UseRouteError), o = Gc(Po.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[o];
}
const Hi = {};
function ha(e, t, r) {
  !t && !Hi[e] && (Hi[e] = !0, process.env.NODE_ENV !== "production" && Ut(!1, r));
}
const Xc = "startTransition", Yi = p[Xc];
function Jc(e) {
  let {
    basename: t,
    children: r,
    initialEntries: o,
    initialIndex: i,
    future: s
  } = e, a = p.useRef();
  a.current == null && (a.current = yc({
    initialEntries: o,
    initialIndex: i,
    v5Compat: !0
  }));
  let l = a.current, [c, u] = p.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = s || {}, f = p.useCallback((y) => {
    d && Yi ? Yi(() => u(y)) : u(y);
  }, [u, d]);
  return p.useLayoutEffect(() => l.listen(f), [l, f]), /* @__PURE__ */ p.createElement(Qc, {
    basename: t,
    children: r,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: s
  });
}
function ga(e) {
  process.env.NODE_ENV !== "production" ? _e(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : _e(!1);
}
function Qc(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: o,
    navigationType: i = Lt.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  ni() && (process.env.NODE_ENV !== "production" ? _e(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : _e(!1));
  let c = t.replace(/^\/*/, "/"), u = p.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: gn({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof o == "string" && (o = Vr(o));
  let {
    pathname: d = "/",
    search: f = "",
    hash: y = "",
    state: E = null,
    key: b = "default"
  } = o, x = p.useMemo(() => {
    let v = ua(d, c);
    return v == null ? null : {
      location: {
        pathname: v,
        search: f,
        hash: y,
        state: E,
        key: b
      },
      navigationType: i
    };
  }, [c, d, f, y, E, b, i]);
  return process.env.NODE_ENV !== "production" && Ut(x != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + f + y + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), x == null ? null : /* @__PURE__ */ p.createElement(ti.Provider, {
    value: u
  }, /* @__PURE__ */ p.createElement(Wr.Provider, {
    children: r,
    value: x
  }));
}
function eu(e) {
  let {
    children: t,
    location: r
  } = e;
  return Bc(ko(t), r);
}
new Promise(() => {
});
function ko(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return p.Children.forEach(e, (o, i) => {
    if (!/* @__PURE__ */ p.isValidElement(o))
      return;
    let s = [...t, i];
    if (o.type === p.Fragment) {
      r.push.apply(r, ko(o.props.children, s));
      return;
    }
    o.type !== ga && (process.env.NODE_ENV !== "production" ? _e(!1, "[" + (typeof o.type == "string" ? o.type : o.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : _e(!1)), !o.props.index || !o.props.children || (process.env.NODE_ENV !== "production" ? _e(!1, "An index route cannot have child routes.") : _e(!1));
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
    o.props.children && (a.children = ko(o.props.children, s)), r.push(a);
  }), r;
}
const kr = {
  black: "#000",
  white: "#fff"
}, Zt = {
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
}, Xt = {
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
}, Jt = {
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
}, Qt = {
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
}, er = {
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
}, gr = {
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
function Ot(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const gt = "$$material";
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, yn.apply(null, arguments);
}
function ya(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ru = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nu = /* @__PURE__ */ ya(
  function(e) {
    return ru.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
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
  function e(r) {
    var o = this;
    this._insertTag = function(i) {
      var s;
      o.tags.length === 0 ? o.insertionPoint ? s = o.insertionPoint.nextSibling : o.prepend ? s = o.container.firstChild : s = o.before : s = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, s), o.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !ou : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
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
}(), Xe = "-ms-", bn = "-moz-", be = "-webkit-", ba = "comm", oi = "rule", ii = "decl", lu = "@import", va = "@keyframes", cu = "@layer", uu = Math.abs, kn = String.fromCharCode, du = Object.assign;
function fu(e, t) {
  return Ge(e, 0) ^ 45 ? (((t << 2 ^ Ge(e, 0)) << 2 ^ Ge(e, 1)) << 2 ^ Ge(e, 2)) << 2 ^ Ge(e, 3) : 0;
}
function Ea(e) {
  return e.trim();
}
function pu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, r) {
  return e.replace(t, r);
}
function $o(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function $r(e, t, r) {
  return e.slice(t, r);
}
function St(e) {
  return e.length;
}
function si(e) {
  return e.length;
}
function Jr(e, t) {
  return t.push(e), e;
}
function mu(e, t) {
  return e.map(t).join("");
}
var $n = 1, lr = 1, xa = 0, nt = 0, He = 0, ur = "";
function Mn(e, t, r, o, i, s, a) {
  return { value: e, root: t, parent: r, type: o, props: i, children: s, line: $n, column: lr, length: a, return: "" };
}
function yr(e, t) {
  return du(Mn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hu() {
  return He;
}
function gu() {
  return He = nt > 0 ? Ge(ur, --nt) : 0, lr--, He === 10 && (lr = 1, $n--), He;
}
function st() {
  return He = nt < xa ? Ge(ur, nt++) : 0, lr++, He === 10 && (lr = 1, $n++), He;
}
function wt() {
  return Ge(ur, nt);
}
function cn() {
  return nt;
}
function Ur(e, t) {
  return $r(ur, e, t);
}
function Mr(e) {
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
  return $n = lr = 1, xa = St(ur = e), nt = 0, [];
}
function Ca(e) {
  return ur = "", e;
}
function un(e) {
  return Ea(Ur(nt - 1, Mo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yu(e) {
  for (; (He = wt()) && He < 33; )
    st();
  return Mr(e) > 2 || Mr(He) > 3 ? "" : " ";
}
function bu(e, t) {
  for (; --t && st() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return Ur(e, cn() + (t < 6 && wt() == 32 && st() == 32));
}
function Mo(e) {
  for (; st(); )
    switch (He) {
      case e:
        return nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mo(He);
        break;
      case 40:
        e === 41 && Mo(e);
        break;
      case 92:
        st();
        break;
    }
  return nt;
}
function vu(e, t) {
  for (; st() && e + He !== 57; )
    if (e + He === 84 && wt() === 47)
      break;
  return "/*" + Ur(t, nt - 1) + "*" + kn(e === 47 ? e : st());
}
function Eu(e) {
  for (; !Mr(wt()); )
    st();
  return Ur(e, nt);
}
function xu(e) {
  return Ca(dn("", null, null, null, [""], e = Sa(e), 0, [0], e));
}
function dn(e, t, r, o, i, s, a, l, c) {
  for (var u = 0, d = 0, f = a, y = 0, E = 0, b = 0, x = 1, v = 1, T = 1, w = 0, g = "", C = i, h = s, P = o, k = g; v; )
    switch (b = w, w = st()) {
      case 40:
        if (b != 108 && Ge(k, f - 1) == 58) {
          $o(k += ve(un(w), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += un(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += yu(b);
        break;
      case 92:
        k += bu(cn() - 1, 7);
        continue;
      case 47:
        switch (wt()) {
          case 42:
          case 47:
            Jr(Su(vu(st(), cn()), t, r), c);
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
            T == -1 && (k = ve(k, /\f/g, "")), E > 0 && St(k) - f && Jr(E > 32 ? Gi(k + ";", o, r, f - 1) : Gi(ve(k, " ", "") + ";", o, r, f - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (Jr(P = Ki(k, t, r, u, d, i, l, g, C = [], h = [], f), s), w === 123)
              if (d === 0)
                dn(k, t, P, P, C, s, f, l, h);
              else
                switch (y === 99 && Ge(k, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dn(e, P, P, o && Jr(Ki(e, P, P, 0, 0, i, l, g, i, C = [], f), h), i, h, f, l, o ? C : h);
                    break;
                  default:
                    dn(k, P, P, P, [""], h, 0, l, h);
                }
        }
        u = d = E = 0, x = T = 1, g = k = "", f = a;
        break;
      case 58:
        f = 1 + St(k), E = b;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && gu() == 125)
            continue;
        }
        switch (k += kn(w), w * x) {
          case 38:
            T = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = (St(k) - 1) * T, T = 1;
            break;
          case 64:
            wt() === 45 && (k += un(st())), y = wt(), d = f = St(g = k += Eu(cn())), w++;
            break;
          case 45:
            b === 45 && St(k) == 2 && (x = 0);
        }
    }
  return s;
}
function Ki(e, t, r, o, i, s, a, l, c, u, d) {
  for (var f = i - 1, y = i === 0 ? s : [""], E = si(y), b = 0, x = 0, v = 0; b < o; ++b)
    for (var T = 0, w = $r(e, f + 1, f = uu(x = a[b])), g = e; T < E; ++T)
      (g = Ea(x > 0 ? y[T] + " " + w : ve(w, /&\f/g, y[T]))) && (c[v++] = g);
  return Mn(e, t, r, i === 0 ? oi : l, c, u, d);
}
function Su(e, t, r) {
  return Mn(e, t, r, ba, kn(hu()), $r(e, 2, -2), 0);
}
function Gi(e, t, r, o) {
  return Mn(e, t, r, ii, $r(e, 0, o), $r(e, o + 1, -1), o);
}
function sr(e, t) {
  for (var r = "", o = si(e), i = 0; i < o; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Cu(e, t, r, o) {
  switch (e.type) {
    case cu:
      if (e.children.length) break;
    case lu:
    case ii:
      return e.return = e.return || e.value;
    case ba:
      return "";
    case va:
      return e.return = e.value + "{" + sr(e.children, o) + "}";
    case oi:
      e.value = e.props.join(",");
  }
  return St(r = sr(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Tu(e) {
  var t = si(e);
  return function(r, o, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, o, i, s) || "";
    return a;
  };
}
function wu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ou = function(t, r, o) {
  for (var i = 0, s = 0; i = s, s = wt(), i === 38 && s === 12 && (r[o] = 1), !Mr(s); )
    st();
  return Ur(t, nt);
}, Ru = function(t, r) {
  var o = -1, i = 44;
  do
    switch (Mr(i)) {
      case 0:
        i === 38 && wt() === 12 && (r[o] = 1), t[o] += Ou(nt - 1, r, o);
        break;
      case 2:
        t[o] += un(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = wt() === 58 ? "&\f" : "", r[o] = t[o].length;
          break;
        }
      default:
        t[o] += kn(i);
    }
  while (i = st());
  return t;
}, Pu = function(t, r) {
  return Ca(Ru(Sa(t), r));
}, Zi = /* @__PURE__ */ new WeakMap(), ku = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zi.get(o)) && !i) {
      Zi.set(t, !0);
      for (var s = [], a = Pu(r, s), l = o.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, $u = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
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
      return be + e + bn + e + Xe + e + e;
    case 6828:
    case 4268:
      return be + e + Xe + e + e;
    case 6165:
      return be + e + Xe + "flex-" + e + e;
    case 5187:
      return be + e + ve(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Xe + "flex-$1$2") + e;
    case 5443:
      return be + e + Xe + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return be + e + Xe + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return be + e + Xe + ve(e, "shrink", "negative") + e;
    case 5292:
      return be + e + Xe + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return be + "box-" + ve(e, "-grow", "") + be + e + Xe + ve(e, "grow", "positive") + e;
    case 4554:
      return be + ve(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, be + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
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
          return ve(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + bn + (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
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
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (Ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return be + e + Xe + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return be + e + Xe + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return be + e + Xe + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return be + e + Xe + e + e;
  }
  return e;
}
var Mu = function(t, r, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ii:
      t.return = Ta(t.value, t.length);
      break;
    case va:
      return sr([yr(t, {
        value: ve(t.value, "@", "@" + be)
      })], i);
    case oi:
      if (t.length) return mu(t.props, function(s) {
        switch (pu(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return sr([yr(t, {
              props: [ve(s, /:(read-\w+)/, ":" + bn + "$1")]
            })], i);
          case "::placeholder":
            return sr([yr(t, {
              props: [ve(s, /:(plac\w+)/, ":" + be + "input-$1")]
            }), yr(t, {
              props: [ve(s, /:(plac\w+)/, ":" + bn + "$1")]
            }), yr(t, {
              props: [ve(s, /:(plac\w+)/, Xe + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Nu = [Mu], Iu = function(t) {
  var r = t.key;
  if (r === "css") {
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
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(x) {
      for (var v = x.getAttribute("data-emotion").split(" "), T = 1; T < v.length; T++)
        s[v[T]] = !0;
      l.push(x);
    }
  );
  var c, u = [ku, $u];
  {
    var d, f = [Cu, wu(function(x) {
      d.insert(x);
    })], y = Tu(u.concat(i, f)), E = function(v) {
      return sr(xu(v), y);
    };
    c = function(v, T, w, g) {
      d = w, E(v ? v + "{" + T.styles + "}" : T.styles), g && (b.inserted[T.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new au({
      key: r,
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
}, No = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function Lu() {
  if (Xi) return xe;
  Xi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
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
            case f:
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
        case r:
          return P;
      }
    }
  }
  function C(h) {
    return g(h) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = l, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = o, xe.Lazy = b, xe.Memo = E, xe.Portal = r, xe.Profiler = s, xe.StrictMode = i, xe.Suspense = f, xe.isAsyncMode = function(h) {
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
    return g(h) === r;
  }, xe.isProfiler = function(h) {
    return g(h) === s;
  }, xe.isStrictMode = function(h) {
    return g(h) === i;
  }, xe.isSuspense = function(h) {
    return g(h) === f;
  }, xe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === f || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === w || h.$$typeof === x);
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
var Ji;
function _u() {
  return Ji || (Ji = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === s || O === i || O === f || O === y || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === E || O.$$typeof === a || O.$$typeof === l || O.$$typeof === d || O.$$typeof === v || O.$$typeof === T || O.$$typeof === w || O.$$typeof === x);
    }
    function C(O) {
      if (typeof O == "object" && O !== null) {
        var oe = O.$$typeof;
        switch (oe) {
          case t:
            var L = O.type;
            switch (L) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case f:
                return L;
              default:
                var le = L && L.$$typeof;
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
          case r:
            return oe;
        }
      }
    }
    var h = c, P = u, k = l, I = a, m = t, $ = d, D = o, B = b, q = E, F = r, V = s, A = i, U = f, Y = !1;
    function ne(O) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(O) || C(O) === c;
    }
    function N(O) {
      return C(O) === u;
    }
    function _(O) {
      return C(O) === l;
    }
    function Z(O) {
      return C(O) === a;
    }
    function z(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return C(O) === d;
    }
    function J(O) {
      return C(O) === o;
    }
    function G(O) {
      return C(O) === b;
    }
    function X(O) {
      return C(O) === E;
    }
    function ee(O) {
      return C(O) === r;
    }
    function Q(O) {
      return C(O) === s;
    }
    function W(O) {
      return C(O) === i;
    }
    function te(O) {
      return C(O) === f;
    }
    Se.AsyncMode = h, Se.ConcurrentMode = P, Se.ContextConsumer = k, Se.ContextProvider = I, Se.Element = m, Se.ForwardRef = $, Se.Fragment = D, Se.Lazy = B, Se.Memo = q, Se.Portal = F, Se.Profiler = V, Se.StrictMode = A, Se.Suspense = U, Se.isAsyncMode = ne, Se.isConcurrentMode = N, Se.isContextConsumer = _, Se.isContextProvider = Z, Se.isElement = z, Se.isForwardRef = H, Se.isFragment = J, Se.isLazy = G, Se.isMemo = X, Se.isPortal = ee, Se.isProfiler = Q, Se.isStrictMode = W, Se.isSuspense = te, Se.isValidElementType = g, Se.typeOf = C;
  }()), Se;
}
process.env.NODE_ENV === "production" ? No.exports = Lu() : No.exports = _u();
var ju = No.exports, wa = ju, Au = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Du = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Oa = {};
Oa[wa.ForwardRef] = Au;
Oa[wa.Memo] = Du;
var Fu = !0;
function Bu(e, t, r) {
  var o = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : o += i + " ";
  }), o;
}
var Ra = function(t, r, o) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Fu === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, Pa = function(t, r, o) {
  Ra(t, r, o);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Vu(e) {
  for (var t = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
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
var Wu = {
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
}, zu = !1, Uu = /[A-Z]|^ms/g, qu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ka = function(t) {
  return t.charCodeAt(1) === 45;
}, Qi = function(t) {
  return t != null && typeof t != "boolean";
}, lo = /* @__PURE__ */ ya(function(e) {
  return ka(e) ? e : e.replace(Uu, "-$&").toLowerCase();
}), es = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(qu, function(o, i, s) {
          return Ct = {
            name: i,
            styles: s,
            next: Ct
          }, i;
        });
  }
  return Wu[t] !== 1 && !ka(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Hu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nr(e, t, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return Ct = {
          name: i.name,
          styles: i.styles,
          next: Ct
        }, i.name;
      var s = r;
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
      return Yu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ct, u = r(e);
        return Ct = c, Nr(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function Yu(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      o += Nr(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? o += s + "{" + t[l] + "}" : Qi(l) && (o += lo(s) + ":" + es(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && zu)
          throw new Error(Hu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Qi(a[c]) && (o += lo(s) + ":" + es(s, a[c]) + ";");
        else {
          var u = Nr(e, t, a);
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
function ai(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Ct = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += Nr(r, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Nr(r, t, e[l]), o) {
      var c = s;
      i += c[l];
    }
  ts.lastIndex = 0;
  for (var u = "", d; (d = ts.exec(i)) !== null; )
    u += "-" + d[1];
  var f = Vu(i) + u;
  return {
    name: f,
    styles: i,
    next: Ct
  };
}
var Ku = function(t) {
  return t();
}, $a = p.useInsertionEffect ? p.useInsertionEffect : !1, Gu = $a || Ku, rs = $a || p.useLayoutEffect, Ma = /* @__PURE__ */ p.createContext(
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
Ma.Provider;
var Na = function(t) {
  return /* @__PURE__ */ uc(function(r, o) {
    var i = ei(Ma);
    return t(r, i, o);
  });
}, Nn = /* @__PURE__ */ p.createContext({}), Zu = /* @__PURE__ */ Na(function(e, t) {
  var r = e.styles, o = ai([r], void 0, p.useContext(Nn)), i = p.useRef();
  return rs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + o.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), rs(function() {
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
function In() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ai(t);
}
var dr = function() {
  var t = In.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Xu = nu, Ju = function(t) {
  return t !== "theme";
}, ns = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Xu : Ju;
}, os = function(t, r, o) {
  var i;
  if (r) {
    var s = r.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && o && (i = t.__emotion_forwardProp), i;
}, Qu = !1, ed = function(t) {
  var r = t.cache, o = t.serialized, i = t.isStringTag;
  return Ra(r, o, i), Gu(function() {
    return Pa(r, o, i);
  }), null;
}, td = function e(t, r) {
  var o = t.__emotion_real === t, i = o && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var l = os(t, r, o), c = l || ns(i), u = !c("as");
  return function() {
    var d = arguments, f = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var y = d.length, E = 1; E < y; E++)
        f.push(d[E], d[0][E]);
    }
    var b = Na(function(x, v, T) {
      var w = u && x.as || i, g = "", C = [], h = x;
      if (x.theme == null) {
        h = {};
        for (var P in x)
          h[P] = x[P];
        h.theme = p.useContext(Nn);
      }
      typeof x.className == "string" ? g = Bu(v.registered, C, x.className) : x.className != null && (g = x.className + " ");
      var k = ai(f.concat(C), v.registered, h);
      g += v.key + "-" + k.name, a !== void 0 && (g += " " + a);
      var I = u && l === void 0 ? ns(w) : c, m = {};
      for (var $ in x)
        u && $ === "as" || I($) && (m[$] = x[$]);
      return m.className = g, T && (m.ref = T), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(ed, {
        cache: v,
        serialized: k,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ p.createElement(w, m));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = f, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && Qu ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(x, v) {
      return e(x, yn({}, r, v, {
        shouldForwardProp: os(b, v, !0)
      })).apply(void 0, f);
    }, b;
  };
}, rd = [
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
], Io = td.bind();
rd.forEach(function(e) {
  Io[e] = Io(e);
});
var Lo = { exports: {} }, Qr = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function nd() {
  if (is) return Ce;
  is = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
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
            case f:
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
        case r:
          return P;
      }
    }
  }
  function C(h) {
    return g(h) === u;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = u, Ce.ContextConsumer = l, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = d, Ce.Fragment = o, Ce.Lazy = b, Ce.Memo = E, Ce.Portal = r, Ce.Profiler = s, Ce.StrictMode = i, Ce.Suspense = f, Ce.isAsyncMode = function(h) {
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
    return g(h) === r;
  }, Ce.isProfiler = function(h) {
    return g(h) === s;
  }, Ce.isStrictMode = function(h) {
    return g(h) === i;
  }, Ce.isSuspense = function(h) {
    return g(h) === f;
  }, Ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === o || h === u || h === s || h === i || h === f || h === y || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === E || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === v || h.$$typeof === T || h.$$typeof === w || h.$$typeof === x);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function g(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === s || O === i || O === f || O === y || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === E || O.$$typeof === a || O.$$typeof === l || O.$$typeof === d || O.$$typeof === v || O.$$typeof === T || O.$$typeof === w || O.$$typeof === x);
    }
    function C(O) {
      if (typeof O == "object" && O !== null) {
        var oe = O.$$typeof;
        switch (oe) {
          case t:
            var L = O.type;
            switch (L) {
              case c:
              case u:
              case o:
              case s:
              case i:
              case f:
                return L;
              default:
                var le = L && L.$$typeof;
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
          case r:
            return oe;
        }
      }
    }
    var h = c, P = u, k = l, I = a, m = t, $ = d, D = o, B = b, q = E, F = r, V = s, A = i, U = f, Y = !1;
    function ne(O) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(O) || C(O) === c;
    }
    function N(O) {
      return C(O) === u;
    }
    function _(O) {
      return C(O) === l;
    }
    function Z(O) {
      return C(O) === a;
    }
    function z(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return C(O) === d;
    }
    function J(O) {
      return C(O) === o;
    }
    function G(O) {
      return C(O) === b;
    }
    function X(O) {
      return C(O) === E;
    }
    function ee(O) {
      return C(O) === r;
    }
    function Q(O) {
      return C(O) === s;
    }
    function W(O) {
      return C(O) === i;
    }
    function te(O) {
      return C(O) === f;
    }
    Te.AsyncMode = h, Te.ConcurrentMode = P, Te.ContextConsumer = k, Te.ContextProvider = I, Te.Element = m, Te.ForwardRef = $, Te.Fragment = D, Te.Lazy = B, Te.Memo = q, Te.Portal = F, Te.Profiler = V, Te.StrictMode = A, Te.Suspense = U, Te.isAsyncMode = ne, Te.isConcurrentMode = N, Te.isContextConsumer = _, Te.isContextProvider = Z, Te.isElement = z, Te.isForwardRef = H, Te.isFragment = J, Te.isLazy = G, Te.isMemo = X, Te.isPortal = ee, Te.isProfiler = Q, Te.isStrictMode = W, Te.isSuspense = te, Te.isValidElementType = g, Te.typeOf = C;
  }()), Te;
}
var as;
function Ia() {
  return as || (as = 1, process.env.NODE_ENV === "production" ? Qr.exports = nd() : Qr.exports = od()), Qr.exports;
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
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var y = 0; y < u.length; y++)
          r.call(l, u[y]) && (c[u[y]] = l[u[y]]);
      }
    }
    return c;
  }, co;
}
var uo, cs;
function li() {
  if (cs) return uo;
  cs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uo = e, uo;
}
var fo, us;
function La() {
  return us || (us = 1, fo = Function.call.bind(Object.prototype.hasOwnProperty)), fo;
}
var po, ds;
function sd() {
  if (ds) return po;
  ds = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = li(), r = {}, o = La();
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
              var y = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, po = i, po;
}
var mo, fs;
function ad() {
  if (fs) return mo;
  fs = 1;
  var e = Ia(), t = id(), r = li(), o = La(), i = sd(), s = function() {
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
    function f(N) {
      var _ = N && (u && N[u] || N[d]);
      if (typeof _ == "function")
        return _;
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
      node: $(),
      objectOf: I,
      oneOf: k,
      oneOfType: m,
      shape: B,
      exact: q
    };
    function b(N, _) {
      return N === _ ? N !== 0 || 1 / N === 1 / _ : N !== N && _ !== _;
    }
    function x(N, _) {
      this.message = N, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function v(N) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, Z = 0;
      function z(J, G, X, ee, Q, W, te) {
        if (ee = ee || y, W = W || X, te !== r) {
          if (c) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = ee + ":" + X;
            !_[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Z < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[oe] = !0, Z++);
          }
        }
        return G[X] == null ? J ? G[X] === null ? new x("The " + Q + " `" + W + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new x("The " + Q + " `" + W + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : N(G, X, ee, Q, W);
      }
      var H = z.bind(null, !1);
      return H.isRequired = z.bind(null, !0), H;
    }
    function T(N) {
      function _(Z, z, H, J, G, X) {
        var ee = Z[z], Q = A(ee);
        if (Q !== N) {
          var W = U(ee);
          return new x(
            "Invalid " + J + " `" + G + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return v(_);
    }
    function w() {
      return v(a);
    }
    function g(N) {
      function _(Z, z, H, J, G) {
        if (typeof N != "function")
          return new x("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var X = Z[z];
        if (!Array.isArray(X)) {
          var ee = A(X);
          return new x("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Q = 0; Q < X.length; Q++) {
          var W = N(X, Q, H, J, G + "[" + Q + "]", r);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return v(_);
    }
    function C() {
      function N(_, Z, z, H, J) {
        var G = _[Z];
        if (!l(G)) {
          var X = A(G);
          return new x("Invalid " + H + " `" + J + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(N);
    }
    function h() {
      function N(_, Z, z, H, J) {
        var G = _[Z];
        if (!e.isValidElementType(G)) {
          var X = A(G);
          return new x("Invalid " + H + " `" + J + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function P(N) {
      function _(Z, z, H, J, G) {
        if (!(Z[z] instanceof N)) {
          var X = N.name || y, ee = ne(Z[z]);
          return new x("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return v(_);
    }
    function k(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(Z, z, H, J, G) {
        for (var X = Z[z], ee = 0; ee < N.length; ee++)
          if (b(X, N[ee]))
            return null;
        var Q = JSON.stringify(N, function(te, O) {
          var oe = U(O);
          return oe === "symbol" ? String(O) : O;
        });
        return new x("Invalid " + J + " `" + G + "` of value `" + String(X) + "` " + ("supplied to `" + H + "`, expected one of " + Q + "."));
      }
      return v(_);
    }
    function I(N) {
      function _(Z, z, H, J, G) {
        if (typeof N != "function")
          return new x("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var X = Z[z], ee = A(X);
        if (ee !== "object")
          return new x("Invalid " + J + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected an object."));
        for (var Q in X)
          if (o(X, Q)) {
            var W = N(X, Q, H, J, G + "." + Q, r);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return v(_);
    }
    function m(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < N.length; _++) {
        var Z = N[_];
        if (typeof Z != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(Z) + " at index " + _ + "."
          ), a;
      }
      function z(H, J, G, X, ee) {
        for (var Q = [], W = 0; W < N.length; W++) {
          var te = N[W], O = te(H, J, G, X, ee, r);
          if (O == null)
            return null;
          O.data && o(O.data, "expectedType") && Q.push(O.data.expectedType);
        }
        var oe = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new x("Invalid " + X + " `" + ee + "` supplied to " + ("`" + G + "`" + oe + "."));
      }
      return v(z);
    }
    function $() {
      function N(_, Z, z, H, J) {
        return F(_[Z]) ? null : new x("Invalid " + H + " `" + J + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return v(N);
    }
    function D(N, _, Z, z, H) {
      return new x(
        (N || "React class") + ": " + _ + " type `" + Z + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B(N) {
      function _(Z, z, H, J, G) {
        var X = Z[z], ee = A(X);
        if (ee !== "object")
          return new x("Invalid " + J + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Q in N) {
          var W = N[Q];
          if (typeof W != "function")
            return D(H, J, G, Q, U(W));
          var te = W(X, Q, H, J, G + "." + Q, r);
          if (te)
            return te;
        }
        return null;
      }
      return v(_);
    }
    function q(N) {
      function _(Z, z, H, J, G) {
        var X = Z[z], ee = A(X);
        if (ee !== "object")
          return new x("Invalid " + J + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Q = t({}, Z[z], N);
        for (var W in Q) {
          var te = N[W];
          if (o(N, W) && typeof te != "function")
            return D(H, J, G, W, U(te));
          if (!te)
            return new x(
              "Invalid " + J + " `" + G + "` key `" + W + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(Z[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var O = te(X, W, H, J, G + "." + W, r);
          if (O)
            return O;
        }
        return null;
      }
      return v(_);
    }
    function F(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(F);
          if (N === null || l(N))
            return !0;
          var _ = f(N);
          if (_) {
            var Z = _.call(N), z;
            if (_ !== N.entries) {
              for (; !(z = Z.next()).done; )
                if (!F(z.value))
                  return !1;
            } else
              for (; !(z = Z.next()).done; ) {
                var H = z.value;
                if (H && !F(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(N, _) {
      return N === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function A(N) {
      var _ = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : V(_, N) ? "symbol" : _;
    }
    function U(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var _ = A(N);
      if (_ === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function Y(N) {
      var _ = U(N);
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
    function ne(N) {
      return !N.constructor || !N.constructor.name ? y : N.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, mo;
}
var ho, ps;
function ld() {
  if (ps) return ho;
  ps = 1;
  var e = li();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ho = function() {
    function o(a, l, c, u, d, f) {
      if (f !== e) {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ho;
}
if (process.env.NODE_ENV !== "production") {
  var cd = Ia(), ud = !0;
  Lo.exports = ad()(cd.isElement, ud);
} else
  Lo.exports = ld()();
var dd = Lo.exports;
const n = /* @__PURE__ */ mc(dd);
function fd(e) {
  return e == null || Object.keys(e).length === 0;
}
function ci(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, o = typeof t == "function" ? (i) => t(fd(i) ? r : i) : t;
  return /* @__PURE__ */ R.jsx(Zu, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function _a(e, t) {
  const r = Io(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...o);
  } : r;
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
  return Object.keys(e).forEach((r) => {
    t[r] = ja(e[r]);
  }), t;
}
function Ke(e, t, r = {
  clone: !0
}) {
  const o = r.clone ? {
    ...e
  } : e;
  return Tt(e) && Tt(t) && Object.keys(t).forEach((i) => {
    Tt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Tt(e[i]) ? o[i] = Ke(e[i], t[i], r) : r.clone ? o[i] = Tt(t[i]) ? ja(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
const md = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, o) => r.val - o.val), t.reduce((r, o) => ({
    ...r,
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
    unit: r = "px",
    step: o = 5,
    ...i
  } = e, s = md(t), a = Object.keys(s);
  function l(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function c(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - o / 100}${r})`;
  }
  function u(y, E) {
    const b = a.indexOf(E);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : E) - o / 100}${r})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? u(y, a[a.indexOf(y) + 1]) : l(y);
  }
  function f(y) {
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
    not: f,
    unit: r,
    ...i
  };
}
function gd(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(o.match(s)?.[1] || 0) - +(i.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((o, i) => {
    const s = t[i];
    return delete o[i], o[i] = s, o;
  }, {
    ...t
  }) : t;
}
function yd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function bd(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ot(18, `(${t})`));
    return null;
  }
  const [, o, i] = r, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function vd(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (s) => (r(o, s), o);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const Ed = {
  borderRadius: 4
}, At = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function wr(e, t) {
  return t ? Ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ln = {
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
  up: (e) => `@media (min-width:${Ln[e]}px)`
}, xd = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Ln[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function yt(e, t, r) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || ms;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || ms;
    return Object.keys(t).reduce((a, l) => {
      if (yd(s.keys, l)) {
        const c = bd(o.containerQueries ? o : xd, l);
        c && (a[c] = r(t[l], l));
      } else if (Object.keys(s.values || Ln).includes(l)) {
        const c = s.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Aa(e = {}) {
  return e.keys?.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {}) || {};
}
function Da(e, t) {
  return e.reduce((r, o) => {
    const i = r[o];
    return (!i || Object.keys(i).length === 0) && delete r[o], r;
  }, t);
}
function Sd(e, ...t) {
  const r = Aa(e), o = [r, ...t].reduce((i, s) => Ke(i, s), {});
  return Da(Object.keys(r), o);
}
function Cd(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function go({
  values: e,
  breakpoints: t,
  base: r
}) {
  const o = r || Cd(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ue(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ot(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _n(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function vn(e, t, r, o = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || o : i = _n(e, r) || o, t && (i = t(i, o, e)), i;
}
function Ue(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = _n(c, o) || {};
    return yt(a, l, (f) => {
      let y = vn(u, i, f);
      return f === y && typeof f == "string" && (y = vn(u, i, `${t}${f === "default" ? "" : ue(f)}`, f)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: At
  } : {}, s.filterProps = [t], s;
}
function Td(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const wd = {
  m: "margin",
  p: "padding"
}, Od = {
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
}, Rd = Td((e) => {
  if (e.length > 2)
    if (hs[e])
      e = hs[e];
    else
      return [e];
  const [t, r] = e.split(""), o = wd[t], i = Od[r] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), jn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], An = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pd = [...jn, ...An];
function qr(e, t, r, o) {
  const i = _n(e, t, !0) ?? r;
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
function Dn(e) {
  return qr(e, "spacing", 8, "spacing");
}
function qt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function kd(e, t) {
  return (r) => e.reduce((o, i) => (o[i] = qt(t, r), o), {});
}
function $d(e, t, r, o) {
  if (!t.includes(r))
    return null;
  const i = Rd(r), s = kd(i, o), a = e[r];
  return yt(e, a, s);
}
function Fa(e, t) {
  const r = Dn(e.theme);
  return Object.keys(e).map((o) => $d(e, t, o, r)).reduce(wr, {});
}
function Ve(e) {
  return Fa(e, jn);
}
Ve.propTypes = process.env.NODE_ENV !== "production" ? jn.reduce((e, t) => (e[t] = At, e), {}) : {};
Ve.filterProps = jn;
function We(e) {
  return Fa(e, An);
}
We.propTypes = process.env.NODE_ENV !== "production" ? An.reduce((e, t) => (e[t] = At, e), {}) : {};
We.filterProps = An;
process.env.NODE_ENV !== "production" && Pd.reduce((e, t) => (e[t] = At, e), {});
function Ba(e = 8, t = Dn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Fn(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), r = (o) => Object.keys(o).reduce((i, s) => t[s] ? wr(i, t[s](o)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, r.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), r;
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
const Md = pt("border", dt), Nd = pt("borderTop", dt), Id = pt("borderRight", dt), Ld = pt("borderBottom", dt), _d = pt("borderLeft", dt), jd = pt("borderColor"), Ad = pt("borderTopColor"), Dd = pt("borderRightColor"), Fd = pt("borderBottomColor"), Bd = pt("borderLeftColor"), Vd = pt("outline", dt), Wd = pt("outlineColor"), Bn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = qr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (o) => ({
      borderRadius: qt(t, o)
    });
    return yt(e, e.borderRadius, r);
  }
  return null;
};
Bn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
Bn.filterProps = ["borderRadius"];
Fn(Md, Nd, Id, Ld, _d, jd, Ad, Dd, Fd, Bd, Bn, Vd, Wd);
const Vn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qr(e.theme, "spacing", 8, "gap"), r = (o) => ({
      gap: qt(t, o)
    });
    return yt(e, e.gap, r);
  }
  return null;
};
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
Vn.filterProps = ["gap"];
const Wn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qr(e.theme, "spacing", 8, "columnGap"), r = (o) => ({
      columnGap: qt(t, o)
    });
    return yt(e, e.columnGap, r);
  }
  return null;
};
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
Wn.filterProps = ["columnGap"];
const zn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qr(e.theme, "spacing", 8, "rowGap"), r = (o) => ({
      rowGap: qt(t, o)
    });
    return yt(e, e.rowGap, r);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
zn.filterProps = ["rowGap"];
const zd = Ue({
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
}), Zd = Ue({
  prop: "gridTemplateAreas"
}), Xd = Ue({
  prop: "gridArea"
});
Fn(Vn, Wn, zn, zd, Ud, qd, Hd, Yd, Kd, Gd, Zd, Xd);
function ar(e, t) {
  return t === "grey" ? t : e;
}
const Jd = Ue({
  prop: "color",
  themeKey: "palette",
  transform: ar
}), Qd = Ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ar
}), ef = Ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ar
});
Fn(Jd, Qd, ef);
function it(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tf = Ue({
  prop: "width",
  transform: it
}), ui = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const o = e.theme?.breakpoints?.values?.[r] || Ln[r];
      return o ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: it(r)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
ui.filterProps = ["maxWidth"];
const rf = Ue({
  prop: "minWidth",
  transform: it
}), nf = Ue({
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
Fn(tf, ui, rf, nf, of, sf, af);
const Hr = {
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
    style: Bn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ar
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ar
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ar
  },
  // spacing
  p: {
    style: We
  },
  pt: {
    style: We
  },
  pr: {
    style: We
  },
  pb: {
    style: We
  },
  pl: {
    style: We
  },
  px: {
    style: We
  },
  py: {
    style: We
  },
  padding: {
    style: We
  },
  paddingTop: {
    style: We
  },
  paddingRight: {
    style: We
  },
  paddingBottom: {
    style: We
  },
  paddingLeft: {
    style: We
  },
  paddingX: {
    style: We
  },
  paddingY: {
    style: We
  },
  paddingInline: {
    style: We
  },
  paddingInlineStart: {
    style: We
  },
  paddingInlineEnd: {
    style: We
  },
  paddingBlock: {
    style: We
  },
  paddingBlockStart: {
    style: We
  },
  paddingBlockEnd: {
    style: We
  },
  m: {
    style: Ve
  },
  mt: {
    style: Ve
  },
  mr: {
    style: Ve
  },
  mb: {
    style: Ve
  },
  ml: {
    style: Ve
  },
  mx: {
    style: Ve
  },
  my: {
    style: Ve
  },
  margin: {
    style: Ve
  },
  marginTop: {
    style: Ve
  },
  marginRight: {
    style: Ve
  },
  marginBottom: {
    style: Ve
  },
  marginLeft: {
    style: Ve
  },
  marginX: {
    style: Ve
  },
  marginY: {
    style: Ve
  },
  marginInline: {
    style: Ve
  },
  marginInlineStart: {
    style: Ve
  },
  marginInlineEnd: {
    style: Ve
  },
  marginBlock: {
    style: Ve
  },
  marginBlockStart: {
    style: Ve
  },
  marginBlockEnd: {
    style: Ve
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
    style: Vn
  },
  rowGap: {
    style: zn
  },
  columnGap: {
    style: Wn
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
    style: ui
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
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function cf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uf() {
  function e(r, o, i, s) {
    const a = {
      [r]: o,
      theme: i
    }, l = s[r];
    if (!l)
      return {
        [r]: o
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [r]: o
      };
    const y = _n(i, u) || {};
    return f ? f(a) : yt(a, o, (b) => {
      let x = vn(y, d, b);
      return b === x && typeof b == "string" && (x = vn(y, d, `${r}${b === "default" ? "" : ue(b)}`, b)), c === !1 ? x : {
        [c]: x
      };
    });
  }
  function t(r) {
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = i.unstable_sxConfig ?? Hr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Aa(i.breakpoints), d = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((y) => {
        const E = cf(c[y], i);
        if (E != null)
          if (typeof E == "object")
            if (s[y])
              f = wr(f, e(y, E, i, s));
            else {
              const b = yt({
                theme: i
              }, E, (x) => ({
                [y]: x
              }));
              lf(b, E) ? f[y] = t({
                sx: E,
                theme: i
              }) : f = wr(f, b);
            }
          else
            f = wr(f, e(y, E, i, s));
      }), gd(i, Da(d, f));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Yt = uf();
Yt.filterProps = ["sx"];
function df(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Un(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = hd(r), c = Ba(i);
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
  return u = vd(u), u.applyStyles = df, u = t.reduce((d, f) => Ke(d, f), u), u.unstable_sxConfig = {
    ...Hr,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Yt({
      sx: f,
      theme: this
    });
  }, u;
}
function ff(e) {
  return Object.keys(e).length === 0;
}
function Va(e = null) {
  const t = p.useContext(Nn);
  return !t || ff(t) ? e : t;
}
const pf = Un();
function qn(e = pf) {
  return Va(e);
}
function Wa({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const o = qn(r), i = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ R.jsx(ci, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const mf = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Hr;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function di(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: o,
    otherProps: i
  } = mf(r);
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
}, za = hf();
function Ua(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ua(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function de() {
  for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ua(e)) && (o && (o += " "), o += t);
  return o;
}
function gf(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = _a("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Yt);
  return /* @__PURE__ */ p.forwardRef(function(c, u) {
    const d = qn(r), {
      className: f,
      component: y = "div",
      ...E
    } = di(c);
    return /* @__PURE__ */ R.jsx(s, {
      as: y,
      ref: u,
      className: de(f, i ? i(o) : o),
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
function Ne(e, t, r = "Mui") {
  const o = yf[t];
  return o ? `${r}-${o}` : `${za.generate(e)}-${t}`;
}
function Pe(e, t, r = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = Ne(e, i, r);
  }), o;
}
var _o = { exports: {} }, we = {};
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
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function x(v) {
    if (typeof v == "object" && v !== null) {
      var T = v.$$typeof;
      switch (T) {
        case e:
          switch (v = v.type, v) {
            case r:
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
  return we.ContextConsumer = a, we.ContextProvider = s, we.Element = e, we.ForwardRef = c, we.Fragment = r, we.Lazy = y, we.Memo = f, we.Portal = t, we.Profiler = i, we.StrictMode = o, we.Suspense = u, we.SuspenseList = d, we.isAsyncMode = function() {
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
    return x(v) === r;
  }, we.isLazy = function(v) {
    return x(v) === y;
  }, we.isMemo = function(v) {
    return x(v) === f;
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
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === o || v === u || v === d || v === E || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === b || v.getModuleId !== void 0);
  }, we.typeOf = x, we;
}
var Oe = {};
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
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = !1, x = !1, v = !1, T = !1, w = !1, g;
    g = Symbol.for("react.module.reference");
    function C(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === i || w || L === o || L === u || L === d || T || L === E || b || x || v || typeof L == "object" && L !== null && (L.$$typeof === y || L.$$typeof === f || L.$$typeof === s || L.$$typeof === a || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === g || L.getModuleId !== void 0));
    }
    function h(L) {
      if (typeof L == "object" && L !== null) {
        var le = L.$$typeof;
        switch (le) {
          case e:
            var ge = L.type;
            switch (ge) {
              case r:
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
                  case f:
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
    var P = a, k = s, I = e, m = c, $ = r, D = y, B = f, q = t, F = i, V = o, A = u, U = d, Y = !1, ne = !1;
    function N(L) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(L) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(L) {
      return h(L) === a;
    }
    function z(L) {
      return h(L) === s;
    }
    function H(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function J(L) {
      return h(L) === c;
    }
    function G(L) {
      return h(L) === r;
    }
    function X(L) {
      return h(L) === y;
    }
    function ee(L) {
      return h(L) === f;
    }
    function Q(L) {
      return h(L) === t;
    }
    function W(L) {
      return h(L) === i;
    }
    function te(L) {
      return h(L) === o;
    }
    function O(L) {
      return h(L) === u;
    }
    function oe(L) {
      return h(L) === d;
    }
    Oe.ContextConsumer = P, Oe.ContextProvider = k, Oe.Element = I, Oe.ForwardRef = m, Oe.Fragment = $, Oe.Lazy = D, Oe.Memo = B, Oe.Portal = q, Oe.Profiler = F, Oe.StrictMode = V, Oe.Suspense = A, Oe.SuspenseList = U, Oe.isAsyncMode = N, Oe.isConcurrentMode = _, Oe.isContextConsumer = Z, Oe.isContextProvider = z, Oe.isElement = H, Oe.isForwardRef = J, Oe.isFragment = G, Oe.isLazy = X, Oe.isMemo = ee, Oe.isPortal = Q, Oe.isProfiler = W, Oe.isStrictMode = te, Oe.isSuspense = O, Oe.isSuspenseList = oe, Oe.isValidElementType = C, Oe.typeOf = h;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? _o.exports = bf() : _o.exports = vf();
var Ir = _o.exports;
function qa(e, t = "") {
  return e.displayName || e.name || t;
}
function vs(e, t, r) {
  const o = qa(t);
  return e.displayName || (o !== "" ? `${r}(${o})` : r);
}
function Ef(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return qa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ir.ForwardRef:
          return vs(e, e.render, "ForwardRef");
        case Ir.Memo:
          return vs(e, e.type, "memo");
        default:
          return;
      }
  }
}
const xf = Un();
function yo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function jo(e, t, r) {
  return Cf(t) ? r : t[e] || t;
}
const en = Symbol("mui.processed_props");
function tn(e, t, r) {
  if (en in e)
    return e[en];
  const o = {
    ...e,
    theme: jo(t, e.theme, r)
  };
  return e[en] = o, o[en] = o, o;
}
function Sf(e) {
  return e ? (t, r) => r[e] : null;
}
function fn(e, t) {
  const r = typeof e == "function" ? e(t) : e;
  if (Array.isArray(r))
    return r.flatMap((o) => fn(o, t));
  if (Array.isArray(r?.variants)) {
    const {
      variants: o,
      ...i
    } = r;
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
  return r;
}
function Ha(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xf,
    rootShouldForwardProp: o = yo,
    slotShouldForwardProp: i = yo
  } = e, s = (l) => Yt(tn(l, t, r));
  return s.__mui_systemSx = !0, (l, c = {}) => {
    pd(l, (P) => P.filter((k) => !k?.__mui_systemSx));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = Sf(Es(d)),
      ...b
    } = c, x = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), v = y || !1;
    let T;
    process.env.NODE_ENV !== "production" && u && (T = `${u}-${Es(d || "Root")}`);
    let w = yo;
    d === "Root" || d === "root" ? w = o : d ? w = i : Tf(l) && (w = void 0);
    const g = _a(l, {
      shouldForwardProp: w,
      label: T,
      ...b
    }), C = (P) => typeof P == "function" && P.__emotion_real !== P || Tt(P) ? (k) => fn(P, tn(k, t, r)) : P, h = (P, ...k) => {
      let I = C(P);
      const m = k ? k.map(C) : [];
      u && E && m.push((B) => {
        const q = jo(t, B.theme, r);
        if (!q.components || !q.components[u] || !q.components[u].styleOverrides)
          return null;
        const F = q.components[u].styleOverrides, V = {}, A = tn(B, t, r);
        for (const U in F)
          V[U] = fn(F[U], A);
        return E(B, V);
      }), u && !x && m.push((B) => {
        const F = jo(t, B.theme, r)?.components?.[u]?.variants;
        return F ? fn({
          variants: F
        }, tn(B, t, r)) : null;
      }), v || m.push(s);
      const $ = m.length - k.length;
      if (Array.isArray(P) && $ > 0) {
        const B = new Array($).fill("");
        I = [...P, ...B], I.raw = [...P.raw, ...B];
      }
      const D = g(I, ...m);
      if (process.env.NODE_ENV !== "production") {
        let B;
        u && (B = `${u}${ue(d || "")}`), B === void 0 && (B = `Styled(${Ef(l)})`), D.displayName = B;
      }
      return l.muiName && (D.muiName = l.muiName), D;
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
function Lr(e, t) {
  const r = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        r[i] = {
          ...e[i],
          ...r[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], a = t[i];
        if (!a)
          r[i] = s || {};
        else if (!s)
          r[i] = a;
        else {
          r[i] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const c = l;
              r[i][c] = Lr(s[c], a[c]);
            }
        }
      } else r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function Of(e) {
  const {
    theme: t,
    name: r,
    props: o
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? o : Lr(t.components[r].defaultProps, o);
}
function Ya({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: o
}) {
  let i = qn(r);
  return o && (i = i[o] || i), Of({
    theme: i,
    name: t,
    props: e
  });
}
const _t = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function Rf(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function fi(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Rf(e, t, r);
}
function Pf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(Pf(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ot(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ot(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: r,
    values: o,
    colorSpace: i
  };
}
const kf = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((r, o) => t.type.includes("hsl") && o !== 0 ? `${r}%` : r).join(" ");
}, Sr = (e, t) => {
  try {
    return kf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Hn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Ka(e) {
  e = jt(e);
  const {
    values: t
  } = e, r = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, d = (u + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Hn({
    type: l,
    values: c
  });
}
function Ao(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(Ka(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xs(e, t) {
  const r = Ao(e), o = Ao(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function ft(e, t) {
  return e = jt(e), t = fi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Hn(e);
}
function rn(e, t, r) {
  try {
    return ft(e, t);
  } catch {
    return e;
  }
}
function Yn(e, t) {
  if (e = jt(e), t = fi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Hn(e);
}
function $e(e, t, r) {
  try {
    return Yn(e, t);
  } catch {
    return e;
  }
}
function Kn(e, t) {
  if (e = jt(e), t = fi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Hn(e);
}
function Me(e, t, r) {
  try {
    return Kn(e, t);
  } catch {
    return e;
  }
}
function $f(e, t = 0.15) {
  return Ao(e) > 0.5 ? Yn(e, t) : Kn(e, t);
}
function nn(e, t, r) {
  try {
    return $f(e, t);
  } catch {
    return e;
  }
}
function Yr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Mf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ga(e, t, r, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Mf(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Kr = Yr(n.element, Ga);
Kr.isRequired = Yr(n.element.isRequired, Ga);
function Nf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function If(e, t, r, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Nf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const pi = Yr(n.elementType, If), Lf = "exact-prop: ​";
function Gn(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Lf]: (t) => {
      const r = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function _r(e, t, r, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const $t = n.oneOfType([n.func, n.object]);
function Ss(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
function Za(e, t = 166) {
  let r;
  function o(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(r);
  }, o;
}
function bo(e, t) {
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
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
function Do(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Cs = 0;
function _f(e) {
  const [t, r] = p.useState(e), o = e || t;
  return p.useEffect(() => {
    t == null && (Cs += 1, r(`mui-${Cs}`));
  }, [t]), o;
}
const Ts = p.useId;
function Xa(e) {
  if (Ts !== void 0) {
    const t = Ts();
    return e ?? t;
  }
  return _f(e);
}
function ws({
  controlled: e,
  default: t,
  name: r,
  state: o = "value"
}) {
  const {
    current: i
  } = p.useRef(e !== void 0), [s, a] = p.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    p.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, r, e]);
    const {
      current: u
    } = p.useRef(t);
    p.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = p.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function or(e) {
  const t = p.useRef(e);
  return _t(() => {
    t.current = e;
  }), p.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ze(...e) {
  return p.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Do(r, t);
    });
  }, e);
}
const Os = {};
function Ja(e, t) {
  const r = p.useRef(Os);
  return r.current === Os && (r.current = e(t)), r;
}
const jf = [];
function Af(e) {
  p.useEffect(e, jf);
}
class mi {
  static create() {
    return new mi();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function Qa() {
  const e = Ja(mi.create).current;
  return Af(e.disposeEffect), e;
}
function Rs(e) {
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
function Df(e) {
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
function tl(e, t, r, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Df(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function rl(e, t, ...r) {
  return e[t] === void 0 ? null : tl(e, t, ...r);
}
function Fo() {
  return null;
}
rl.isRequired = tl;
Fo.isRequired = Fo;
const nl = process.env.NODE_ENV === "production" ? Fo : rl;
function je(e, t, r = void 0) {
  const o = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, r && r[u] && (a += " " + r[u]));
    }
    o[i] = a;
  }
  return o;
}
function Ff(e) {
  return typeof e == "string";
}
function ol(e, t, r) {
  return e === void 0 || Ff(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function il(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    r[o] = e[o];
  }), r;
}
function Ps(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function sl(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const E = de(r?.className, s, i?.className, o?.className), b = {
      ...r?.style,
      ...i?.style,
      ...o?.style
    }, x = {
      ...r,
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
  }), l = Ps(o), c = Ps(i), u = t(a), d = de(u?.className, r?.className, s, i?.className, o?.className), f = {
    ...u?.style,
    ...r?.style,
    ...i?.style,
    ...o?.style
  }, y = {
    ...u,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (y.className = d), Object.keys(f).length > 0 && (y.style = f), {
    props: y,
    internalRef: u.ref
  };
}
function al(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function ks(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : al(r, o), {
    props: l,
    internalRef: c
  } = sl({
    ...s,
    externalSlotProps: a
  }), u = Ze(c, a?.ref, e.additionalProps?.ref);
  return ol(t, {
    ...l,
    ref: u
  }, o);
}
function Gr(e) {
  return !e || !/* @__PURE__ */ p.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const hi = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (hi.displayName = "ThemeContext");
function gi() {
  const e = p.useContext(hi);
  return process.env.NODE_ENV !== "production" && p.useDebugValue(e), e;
}
const Bf = typeof Symbol == "function" && Symbol.for, Vf = Bf ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Wf(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function En(e) {
  const {
    children: t,
    theme: r
  } = e, o = gi();
  process.env.NODE_ENV !== "production" && o === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = p.useMemo(() => {
    const s = o === null ? {
      ...r
    } : Wf(o, r);
    return s != null && (s[Vf] = o !== null), s;
  }, [r, o]);
  return /* @__PURE__ */ R.jsx(hi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (En.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (En.propTypes = Gn(En.propTypes));
const ll = /* @__PURE__ */ p.createContext();
function cl({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(ll.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  children: n.node,
  value: n.bool
});
const ul = () => p.useContext(ll) ?? !1, dl = /* @__PURE__ */ p.createContext(void 0);
function fl({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ R.jsx(dl.Provider, {
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
  children: n.node,
  /**
   * @ignore
   */
  value: n.object
});
function zf(e) {
  const {
    theme: t,
    name: r,
    props: o
  } = e;
  if (!t || !t.components || !t.components[r])
    return o;
  const i = t.components[r];
  return i.defaultProps ? Lr(i.defaultProps, o) : !i.styleOverrides && !i.variants ? Lr(i, o) : o;
}
function Uf({
  props: e,
  name: t
}) {
  const r = p.useContext(dl);
  return zf({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const $s = {};
function Ms(e, t, r, o = !1) {
  return p.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(i), a = e ? {
        ...t,
        [e]: s
      } : s;
      return o ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, o]);
}
function jr(e) {
  const {
    children: t,
    theme: r,
    themeId: o
  } = e, i = Va($s), s = gi() || $s;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || o && i && !i[o] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Ms(o, i, r), l = Ms(o, s, r, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ R.jsx(En, {
    theme: l,
    children: /* @__PURE__ */ R.jsx(Nn.Provider, {
      value: a,
      children: /* @__PURE__ */ R.jsx(cl, {
        value: c,
        children: /* @__PURE__ */ R.jsx(fl, {
          value: a?.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.func, n.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: n.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (jr.propTypes = Gn(jr.propTypes));
const yi = "mode", bi = "color-scheme", qf = "data-color-scheme";
function Hf(e) {
  const {
    defaultLightColorScheme: t = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = yi,
    colorSchemeStorageKey: i = bi,
    attribute: s = qf,
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
    const [f, y] = d[1].split("=");
    y || (c += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`), c += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${y ? `${y}.replace('%s', colorScheme)` : '""'});`;
  } else
    c += `${a}.setAttribute('${u}', colorScheme);`;
  return /* @__PURE__ */ R.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || 'system';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
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
  let r;
  try {
    r = localStorage.getItem(e) || void 0, r || localStorage.setItem(e, t);
  } catch {
  }
  return r || t;
}
function Kf(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: o,
    supportedColorSchemes: i = [],
    modeStorageKey: s = yi,
    colorSchemeStorageKey: a = bi,
    storageWindow: l = typeof window > "u" ? void 0 : window
  } = e, c = i.join(","), u = i.length > 1, [d, f] = p.useState(() => {
    const g = vo(s, t), C = vo(`${a}-light`, r), h = vo(`${a}-dark`, o);
    return {
      mode: g,
      systemMode: Ns(g),
      lightColorScheme: C,
      darkColorScheme: h
    };
  }), [, y] = p.useState(!1), E = p.useRef(!1);
  p.useEffect(() => {
    u && y(!0), E.current = !0;
  }, [u]);
  const b = Yf(d), x = p.useCallback((g) => {
    f((C) => {
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
  }, [s, t]), v = p.useCallback((g) => {
    g ? typeof g == "string" ? g && !c.includes(g) ? console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`) : f((C) => {
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
    }) : f((C) => {
      const h = {
        ...C
      }, P = g.light === null ? r : g.light, k = g.dark === null ? o : g.dark;
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
    }) : f((C) => {
      try {
        localStorage.setItem(`${a}-light`, r), localStorage.setItem(`${a}-dark`, o);
      } catch {
      }
      return {
        ...C,
        lightColorScheme: r,
        darkColorScheme: o
      };
    });
  }, [c, a, r, o]), T = p.useCallback((g) => {
    d.mode === "system" && f((C) => {
      const h = g?.matches ? "dark" : "light";
      return C.systemMode === h ? C : {
        ...C,
        systemMode: h
      };
    });
  }, [d.mode]), w = p.useRef(T);
  return w.current = T, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !u)
      return;
    const g = (...h) => w.current(...h), C = window.matchMedia("(prefers-color-scheme: dark)");
    return C.addListener(g), g(C), () => {
      C.removeListener(g);
    };
  }, [u]), p.useEffect(() => {
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
function Zf(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: o = yi,
    colorSchemeStorageKey: i = bi,
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
  function f(x) {
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
    } = x, $ = p.useRef(!1), D = gi(), B = p.useContext(u), q = !!B && !I, F = p.useMemo(() => T || (typeof r == "function" ? r() : r), [T]), V = F[t], {
      colorSchemes: A = {},
      components: U = {},
      cssVarPrefix: Y,
      ...ne
    } = V || F, N = Object.keys(A).filter((ae) => !!A[ae]).join(","), _ = p.useMemo(() => N.split(","), [N]), Z = typeof a == "string" ? a : a.light, z = typeof a == "string" ? a : a.dark, H = A[Z] && A[z] ? "system" : A[ne.defaultColorScheme]?.palette?.mode || ne.palette?.mode, {
      mode: J,
      setMode: G,
      systemMode: X,
      lightColorScheme: ee,
      darkColorScheme: Q,
      colorScheme: W,
      setColorScheme: te
    } = Kf({
      supportedColorSchemes: _,
      defaultLightColorScheme: Z,
      defaultDarkColorScheme: z,
      modeStorageKey: w,
      colorSchemeStorageKey: g,
      defaultMode: H,
      storageWindow: h
    });
    let O = J, oe = W;
    q && (O = B.mode, oe = B.colorScheme);
    const L = oe || ne.defaultColorScheme, le = ne.generateThemeVars?.() || ne.vars, ge = {
      ...ne,
      components: U,
      colorSchemes: A,
      cssVarPrefix: Y,
      vars: le
    };
    if (typeof ge.generateSpacing == "function" && (ge.spacing = ge.generateSpacing()), L) {
      const ae = A[L];
      ae && typeof ae == "object" && Object.keys(ae).forEach((fe) => {
        ae[fe] && typeof ae[fe] == "object" ? ge[fe] = {
          ...ge[fe],
          ...ae[fe]
        } : ge[fe] = ae[fe];
      });
    }
    const Ie = ne.colorSchemeSelector;
    p.useEffect(() => {
      if (oe && k && Ie && Ie !== "media") {
        const ae = Ie;
        let fe = Ie;
        if (ae === "class" && (fe = ".%s"), ae === "data" && (fe = "[data-%s]"), ae?.startsWith("data-") && !ae.includes("%s") && (fe = `[${ae}="%s"]`), fe.startsWith("."))
          k.classList.remove(..._.map((re) => fe.substring(1).replace("%s", re))), k.classList.add(fe.substring(1).replace("%s", oe));
        else {
          const re = fe.replace("%s", oe).match(/\[([^\]]+)\]/);
          if (re) {
            const [Be, tt] = re[1].split("=");
            tt || _.forEach((ot) => {
              k.removeAttribute(Be.replace(oe, ot));
            }), k.setAttribute(Be, tt ? tt.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(fe, oe);
        }
      }
    }, [oe, Ie, k, _]), p.useEffect(() => {
      let ae;
      if (C && $.current && P) {
        const fe = P.createElement("style");
        fe.appendChild(P.createTextNode(Gf)), P.head.appendChild(fe), window.getComputedStyle(P.body), ae = setTimeout(() => {
          P.head.removeChild(fe);
        }, 1);
      }
      return () => {
        clearTimeout(ae);
      };
    }, [oe, C, P]), p.useEffect(() => ($.current = !0, () => {
      $.current = !1;
    }), []);
    const Fe = p.useMemo(() => ({
      allColorSchemes: _,
      colorScheme: oe,
      darkColorScheme: Q,
      lightColorScheme: ee,
      mode: O,
      setColorScheme: te,
      setMode: G,
      systemMode: X
    }), [_, oe, Q, ee, O, te, G, X]);
    let Re = !0;
    (m || ne.cssVariables === !1 || q && D?.cssVarPrefix === Y) && (Re = !1);
    const Je = /* @__PURE__ */ R.jsxs(p.Fragment, {
      children: [Re && /* @__PURE__ */ R.jsx(p.Fragment, {
        children: (ge.generateStyleSheets?.() || []).map((ae, fe) => /* @__PURE__ */ R.jsx(ci, {
          styles: ae
        }, fe))
      }), /* @__PURE__ */ R.jsx(jr, {
        themeId: V ? t : void 0,
        theme: l ? l(ge) : ge,
        children: v
      })]
    });
    return q ? Je : /* @__PURE__ */ R.jsx(u.Provider, {
      value: Fe,
      children: Je
    });
  }
  process.env.NODE_ENV !== "production" && (f.propTypes = {
    /**
     * The component tree.
     */
    children: n.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: n.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: n.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: n.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: n.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: n.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: n.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: n.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: n.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: n.object
  });
  const y = typeof a == "string" ? a : a.light, E = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: f,
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
function Xf(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Is = (e, t, r, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, Jf = (e, t, r) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  o(e);
}, Qf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function Eo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return Jf(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, f = Qf(l, c);
        Object.assign(i, {
          [d]: f
        }), Is(s, l, `var(${d})`, u), Is(a, l, `var(${d}, ${f})`, u);
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
    getSelector: r = v,
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
  } = Eo(c, t);
  let y = f;
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
      h(r(void 0, {
        ...d
      }), d);
      const {
        [C]: P,
        ...k
      } = E;
      if (P) {
        const {
          css: I
        } = P, m = s[C]?.palette?.mode, $ = !o && m ? {
          colorScheme: m,
          ...I
        } : {
          ...I
        };
        h(r(C, {
          ...$
        }), $);
      }
      return Object.entries(k).forEach(([I, {
        css: m
      }]) => {
        const $ = s[I]?.palette?.mode, D = !o && $ ? {
          colorScheme: $,
          ...m
        } : {
          ...m
        };
        h(r(I, {
          ...D
        }), D);
      }), g;
    }
  };
}
function tp(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const rp = Un(), np = wf("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function op(e) {
  return Ya({
    props: e,
    name: "MuiStack",
    defaultTheme: rp
  });
}
function ip(e, t) {
  const r = p.Children.toArray(e).filter(Boolean);
  return r.reduce((o, i, s) => (o.push(i), s < r.length - 1 && o.push(/* @__PURE__ */ p.cloneElement(t, {
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
  let r = {
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
    const o = Dn(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = go({
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
    }), r = Ke(r, yt({
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
  return r = Sd(t.breakpoints, r), r;
};
function lp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = np,
    useThemeProps: r = op,
    componentName: o = "MuiStack"
  } = e, i = () => je({
    root: ["root"]
  }, (c) => Ne(o, c), {}), s = t(ap), a = /* @__PURE__ */ p.forwardRef(function(c, u) {
    const d = r(c), f = di(d), {
      component: y = "div",
      direction: E = "column",
      spacing: b = 0,
      divider: x,
      children: v,
      className: T,
      useFlexGap: w = !1,
      ...g
    } = f, C = {
      direction: E,
      spacing: b,
      useFlexGap: w
    }, h = i();
    return /* @__PURE__ */ R.jsx(s, {
      as: y,
      ownerState: C,
      ref: u,
      className: de(h.root, T),
      ...g,
      children: x ? ip(v, x) : v
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: n.node,
    direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
    divider: n.node,
    spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), a;
}
const Ls = {
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
    paper: kr.white,
    default: kr.white
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
    primary: kr.white,
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
    active: kr.white,
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
function _s(e, t, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Kn(e.main, i) : t === "dark" && (e.dark = Yn(e.main, s)));
}
function cp(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[700],
    light: Jt[400],
    dark: Jt[800]
  };
}
function up(e = "light") {
  return e === "dark" ? {
    main: Xt[200],
    light: Xt[50],
    dark: Xt[400]
  } : {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  };
}
function dp(e = "light") {
  return e === "dark" ? {
    main: Zt[500],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function fp(e = "light") {
  return e === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[500],
    dark: Qt[900]
  };
}
function pp(e = "light") {
  return e === "dark" ? {
    main: er[400],
    light: er[300],
    dark: er[700]
  } : {
    main: er[800],
    light: er[500],
    dark: er[900]
  };
}
function mp(e = "light") {
  return e === "dark" ? {
    main: gr[400],
    light: gr[300],
    dark: gr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: gr[500],
    dark: gr[900]
  };
}
function vi(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, s = e.primary || cp(t), a = e.secondary || up(t), l = e.error || dp(t), c = e.info || fp(t), u = e.success || pp(t), d = e.warning || mp(t);
  function f(x) {
    const v = xs(x, xo.text.primary) >= r ? xo.text.primary : Ls.text.primary;
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
The color object needs to have a \`main\` property or a \`${T}\` property.` : Ot(11, v ? ` (${v})` : "", T));
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
} });` : Ot(12, v ? ` (${v})` : "", JSON.stringify(x.main)));
    return _s(x, "light", w, o), _s(x, "dark", g, o), x.contrastText || (x.contrastText = f(x.main)), x;
  }, E = {
    dark: xo,
    light: Ls
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ke({
    // A collection of common colors.
    common: {
      ...kr
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
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
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
}, As = '"Roboto", "Helvetica", "Arial", sans-serif';
function ml(e, t) {
  const {
    fontFamily: r = As,
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
  const y = o / 14, E = d || ((v) => `${v / c * y}rem`), b = (v, T, w, g, C) => ({
    fontFamily: r,
    fontWeight: v,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === As ? {
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
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...x
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const bp = 0.2, vp = 0.14, Ep = 0.12;
function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${bp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ep})`].join(",");
}
const xp = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sp = {
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
function Ds(e) {
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
  }, r = {
    ...Cp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Tp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", f = (y) => !Number.isNaN(parseFloat(y));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Ds(a)} ${l} ${typeof c == "string" ? c : Ds(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Op = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Bo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: o = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ot(20));
  const d = vi(s), f = Un(e);
  let y = Ke(f, {
    mixins: gp(f.breakpoints, o),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xp.slice(),
    typography: ml(d, l),
    transitions: wp(a),
    zIndex: {
      ...Op
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
    ...Hr,
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
const Rp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const r = Vo(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
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
  return e === "dark" ? Rp : [];
}
function Pp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: o,
    ...i
  } = e, s = vi(t);
  return {
    palette: s,
    opacity: {
      ...hl(s.mode),
      ...r
    },
    overlays: o || gl(s.mode),
    ...i
  };
}
function kp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const $p = (e) => [...[...Array(24)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mp = (e) => (t, r) => {
  const o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return $p(e.cssVarPrefix).forEach((a) => {
        s[a] = r[a], delete r[a];
      }), i === "media" ? {
        ":root": r,
        "@media (prefers-color-scheme: dark)": {
          ":root": s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`:root, ${i.replace("%s", t)}`]: r
      } : {
        ":root": {
          ...r,
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
          ":root": r
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
  function r(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !Np(l) || a.startsWith("unstable_") ? delete o[a] : Tt(l) && (o[a] = {
        ...l
      }, r(o[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Lp(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function M(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Cr(e) {
  return !e || !e.startsWith("hsl") ? e : Ka(e);
}
function kt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Sr(Cr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function _p(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Et = (e) => {
  try {
    return e();
  } catch {
  }
}, jp = (e = "mui") => Xf(e);
function So(e, t, r, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
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
  } = Bo({
    ...r,
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
function Ap(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = kp,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(r)[0], d = o || (r.light && u !== "light" ? "light" : u), f = jp(s), {
    [d]: y,
    light: E,
    dark: b,
    ...x
  } = r, v = {
    ...x
  };
  let T = y;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Ot(21, d));
  const w = So(v, T, c, d);
  E && !v.light && So(v, E, void 0, "light"), b && !v.dark && So(v, b, void 0, "dark");
  let g = {
    defaultColorScheme: d,
    ...w,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: v,
    font: {
      ...hp(w.typography),
      ...w.font
    },
    spacing: _p(c.spacing)
  };
  Object.keys(g.colorSchemes).forEach((I) => {
    const m = g.colorSchemes[I].palette, $ = (D) => {
      const B = D.split("-"), q = B[1], F = B[2];
      return f(D, m[q][F]);
    };
    if (m.mode === "light" && (M(m.common, "background", "#fff"), M(m.common, "onBackground", "#000")), m.mode === "dark" && (M(m.common, "background", "#000"), M(m.common, "onBackground", "#fff")), Lp(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      M(m.Alert, "errorColor", $e(m.error.light, 0.6)), M(m.Alert, "infoColor", $e(m.info.light, 0.6)), M(m.Alert, "successColor", $e(m.success.light, 0.6)), M(m.Alert, "warningColor", $e(m.warning.light, 0.6)), M(m.Alert, "errorFilledBg", $("palette-error-main")), M(m.Alert, "infoFilledBg", $("palette-info-main")), M(m.Alert, "successFilledBg", $("palette-success-main")), M(m.Alert, "warningFilledBg", $("palette-warning-main")), M(m.Alert, "errorFilledColor", Et(() => m.getContrastText(m.error.main))), M(m.Alert, "infoFilledColor", Et(() => m.getContrastText(m.info.main))), M(m.Alert, "successFilledColor", Et(() => m.getContrastText(m.success.main))), M(m.Alert, "warningFilledColor", Et(() => m.getContrastText(m.warning.main))), M(m.Alert, "errorStandardBg", Me(m.error.light, 0.9)), M(m.Alert, "infoStandardBg", Me(m.info.light, 0.9)), M(m.Alert, "successStandardBg", Me(m.success.light, 0.9)), M(m.Alert, "warningStandardBg", Me(m.warning.light, 0.9)), M(m.Alert, "errorIconColor", $("palette-error-main")), M(m.Alert, "infoIconColor", $("palette-info-main")), M(m.Alert, "successIconColor", $("palette-success-main")), M(m.Alert, "warningIconColor", $("palette-warning-main")), M(m.AppBar, "defaultBg", $("palette-grey-100")), M(m.Avatar, "defaultBg", $("palette-grey-400")), M(m.Button, "inheritContainedBg", $("palette-grey-300")), M(m.Button, "inheritContainedHoverBg", $("palette-grey-A100")), M(m.Chip, "defaultBorder", $("palette-grey-400")), M(m.Chip, "defaultAvatarColor", $("palette-grey-700")), M(m.Chip, "defaultIconColor", $("palette-grey-700")), M(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), M(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), M(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), M(m.LinearProgress, "primaryBg", Me(m.primary.main, 0.62)), M(m.LinearProgress, "secondaryBg", Me(m.secondary.main, 0.62)), M(m.LinearProgress, "errorBg", Me(m.error.main, 0.62)), M(m.LinearProgress, "infoBg", Me(m.info.main, 0.62)), M(m.LinearProgress, "successBg", Me(m.success.main, 0.62)), M(m.LinearProgress, "warningBg", Me(m.warning.main, 0.62)), M(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), M(m.Slider, "primaryTrack", Me(m.primary.main, 0.62)), M(m.Slider, "secondaryTrack", Me(m.secondary.main, 0.62)), M(m.Slider, "errorTrack", Me(m.error.main, 0.62)), M(m.Slider, "infoTrack", Me(m.info.main, 0.62)), M(m.Slider, "successTrack", Me(m.success.main, 0.62)), M(m.Slider, "warningTrack", Me(m.warning.main, 0.62));
      const D = nn(m.background.default, 0.8);
      M(m.SnackbarContent, "bg", D), M(m.SnackbarContent, "color", Et(() => m.getContrastText(D))), M(m.SpeedDialAction, "fabHoverBg", nn(m.background.paper, 0.15)), M(m.StepConnector, "border", $("palette-grey-400")), M(m.StepContent, "border", $("palette-grey-400")), M(m.Switch, "defaultColor", $("palette-common-white")), M(m.Switch, "defaultDisabledColor", $("palette-grey-100")), M(m.Switch, "primaryDisabledColor", Me(m.primary.main, 0.62)), M(m.Switch, "secondaryDisabledColor", Me(m.secondary.main, 0.62)), M(m.Switch, "errorDisabledColor", Me(m.error.main, 0.62)), M(m.Switch, "infoDisabledColor", Me(m.info.main, 0.62)), M(m.Switch, "successDisabledColor", Me(m.success.main, 0.62)), M(m.Switch, "warningDisabledColor", Me(m.warning.main, 0.62)), M(m.TableCell, "border", Me(rn(m.divider, 1), 0.88)), M(m.Tooltip, "bg", rn(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      M(m.Alert, "errorColor", Me(m.error.light, 0.6)), M(m.Alert, "infoColor", Me(m.info.light, 0.6)), M(m.Alert, "successColor", Me(m.success.light, 0.6)), M(m.Alert, "warningColor", Me(m.warning.light, 0.6)), M(m.Alert, "errorFilledBg", $("palette-error-dark")), M(m.Alert, "infoFilledBg", $("palette-info-dark")), M(m.Alert, "successFilledBg", $("palette-success-dark")), M(m.Alert, "warningFilledBg", $("palette-warning-dark")), M(m.Alert, "errorFilledColor", Et(() => m.getContrastText(m.error.dark))), M(m.Alert, "infoFilledColor", Et(() => m.getContrastText(m.info.dark))), M(m.Alert, "successFilledColor", Et(() => m.getContrastText(m.success.dark))), M(m.Alert, "warningFilledColor", Et(() => m.getContrastText(m.warning.dark))), M(m.Alert, "errorStandardBg", $e(m.error.light, 0.9)), M(m.Alert, "infoStandardBg", $e(m.info.light, 0.9)), M(m.Alert, "successStandardBg", $e(m.success.light, 0.9)), M(m.Alert, "warningStandardBg", $e(m.warning.light, 0.9)), M(m.Alert, "errorIconColor", $("palette-error-main")), M(m.Alert, "infoIconColor", $("palette-info-main")), M(m.Alert, "successIconColor", $("palette-success-main")), M(m.Alert, "warningIconColor", $("palette-warning-main")), M(m.AppBar, "defaultBg", $("palette-grey-900")), M(m.AppBar, "darkBg", $("palette-background-paper")), M(m.AppBar, "darkColor", $("palette-text-primary")), M(m.Avatar, "defaultBg", $("palette-grey-600")), M(m.Button, "inheritContainedBg", $("palette-grey-800")), M(m.Button, "inheritContainedHoverBg", $("palette-grey-700")), M(m.Chip, "defaultBorder", $("palette-grey-700")), M(m.Chip, "defaultAvatarColor", $("palette-grey-300")), M(m.Chip, "defaultIconColor", $("palette-grey-300")), M(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), M(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), M(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), M(m.LinearProgress, "primaryBg", $e(m.primary.main, 0.5)), M(m.LinearProgress, "secondaryBg", $e(m.secondary.main, 0.5)), M(m.LinearProgress, "errorBg", $e(m.error.main, 0.5)), M(m.LinearProgress, "infoBg", $e(m.info.main, 0.5)), M(m.LinearProgress, "successBg", $e(m.success.main, 0.5)), M(m.LinearProgress, "warningBg", $e(m.warning.main, 0.5)), M(m.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), M(m.Slider, "primaryTrack", $e(m.primary.main, 0.5)), M(m.Slider, "secondaryTrack", $e(m.secondary.main, 0.5)), M(m.Slider, "errorTrack", $e(m.error.main, 0.5)), M(m.Slider, "infoTrack", $e(m.info.main, 0.5)), M(m.Slider, "successTrack", $e(m.success.main, 0.5)), M(m.Slider, "warningTrack", $e(m.warning.main, 0.5));
      const D = nn(m.background.default, 0.98);
      M(m.SnackbarContent, "bg", D), M(m.SnackbarContent, "color", Et(() => m.getContrastText(D))), M(m.SpeedDialAction, "fabHoverBg", nn(m.background.paper, 0.15)), M(m.StepConnector, "border", $("palette-grey-600")), M(m.StepContent, "border", $("palette-grey-600")), M(m.Switch, "defaultColor", $("palette-grey-300")), M(m.Switch, "defaultDisabledColor", $("palette-grey-600")), M(m.Switch, "primaryDisabledColor", $e(m.primary.main, 0.55)), M(m.Switch, "secondaryDisabledColor", $e(m.secondary.main, 0.55)), M(m.Switch, "errorDisabledColor", $e(m.error.main, 0.55)), M(m.Switch, "infoDisabledColor", $e(m.info.main, 0.55)), M(m.Switch, "successDisabledColor", $e(m.success.main, 0.55)), M(m.Switch, "warningDisabledColor", $e(m.warning.main, 0.55)), M(m.TableCell, "border", $e(rn(m.divider, 1), 0.68)), M(m.Tooltip, "bg", rn(m.grey[700], 0.92));
    }
    kt(m.background, "default"), kt(m.background, "paper"), kt(m.common, "background"), kt(m.common, "onBackground"), kt(m, "divider"), Object.keys(m).forEach((D) => {
      const B = m[D];
      B && typeof B == "object" && (B.main && M(m[D], "mainChannel", Sr(Cr(B.main))), B.light && M(m[D], "lightChannel", Sr(Cr(B.light))), B.dark && M(m[D], "darkChannel", Sr(Cr(B.dark))), B.contrastText && M(m[D], "contrastTextChannel", Sr(Cr(B.contrastText))), D === "text" && (kt(m[D], "primary"), kt(m[D], "secondary")), D === "action" && (B.active && kt(m[D], "active"), B.selected && kt(m[D], "selected")));
    });
  }), g = t.reduce((I, m) => Ke(I, m), g);
  const C = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: a,
    getSelector: Mp(g)
  }, {
    vars: h,
    generateThemeVars: P,
    generateStyleSheets: k
  } = ep(g, C);
  return g.vars = h, Object.entries(g.colorSchemes[g.defaultColorScheme]).forEach(([I, m]) => {
    g[I] = m;
  }), g.generateThemeVars = P, g.generateStyleSheets = k, g.generateSpacing = function() {
    return Ba(c.spacing, Dn(this));
  }, g.getColorSchemeSelector = tp(l), g.spacing = g.generateSpacing(), g.shouldSkipGeneratingVar = a, g.unstable_sxConfig = {
    ...Hr,
    ...c?.unstable_sxConfig
  }, g.unstable_sx = function(m) {
    return Yt({
      sx: m,
      theme: this
    });
  }, g.toRuntimeSource = Ip, g;
}
function Fs(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: vi({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Zn(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: o = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...a
  } = e, l = s || "light", c = i?.[l], u = {
    ...i,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Bo(e, ...t);
    let d = r;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = Bo({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, Fs(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, Fs(f, "light", u.light)), f;
  }
  return !r && !("light" in u) && l === "light" && (u.light = !0), Ap({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Xn = Zn();
function Ei() {
  const e = qn(Xn);
  return process.env.NODE_ENV !== "production" && p.useDebugValue(e), e[gt] || e;
}
function yl({
  props: e,
  name: t
}) {
  return Ya({
    props: e,
    name: t,
    defaultTheme: Xn,
    themeId: gt
  });
}
function bl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const mt = (e) => bl(e) && e !== "classes", se = Ha({
  themeId: gt,
  defaultTheme: Xn,
  rootShouldForwardProp: mt
});
function Bs({
  theme: e,
  ...t
}) {
  const r = gt in e ? e[gt] : void 0;
  return /* @__PURE__ */ R.jsx(jr, {
    ...t,
    themeId: r ? gt : void 0,
    theme: r || e
  });
}
const on = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Dp,
  useColorScheme: Fg,
  getInitColorSchemeScript: Bg
} = Zf({
  themeId: gt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Zn({
    cssVariables: !0
  }),
  colorSchemeStorageKey: on.colorSchemeStorageKey,
  modeStorageKey: on.modeStorageKey,
  defaultColorScheme: {
    light: on.defaultLightColorScheme,
    dark: on.defaultDarkColorScheme
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
}), Fp = Dp;
function Bp({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ R.jsx(Bs, {
    theme: e,
    ...t
  }) : "colorSchemes" in (gt in e ? e[gt] : e) ? /* @__PURE__ */ R.jsx(Fp, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ R.jsx(Bs, {
    theme: e,
    ...t
  });
}
function vl(e) {
  return /* @__PURE__ */ R.jsx(Wa, {
    ...e,
    defaultTheme: Xn,
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
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function xi(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ R.jsx(vl, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...r
        }) : e
      })
    );
  };
}
function Vp() {
  return di;
}
const Vs = {
  theme: void 0
};
function Ae(e) {
  let t, r;
  return (o) => {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Vs.theme = o.theme, i = e(Vs), t = i, r = o.theme), i;
  };
}
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function De(e) {
  return Uf(e);
}
function Wp(e) {
  return Ne("MuiSvgIcon", e);
}
Pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const zp = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ue(t)}`, `fontSize${ue(r)}`]
  };
  return je(i, Wp, o);
}, Up = se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ue(r.color)}`], t[`fontSize${ue(r.fontSize)}`]];
  }
})(Ae(({
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
}))), Ar = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    viewBox: y = "0 0 24 24",
    ...E
  } = o, b = /* @__PURE__ */ p.isValidElement(i) && i.type === "svg", x = {
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
  const T = zp(x);
  return /* @__PURE__ */ R.jsxs(Up, {
    as: l,
    className: de(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...v,
    ...E,
    ...b && i.props,
    ownerState: x,
    children: [b ? i.props.children : i, f ? /* @__PURE__ */ R.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Ar && (Ar.muiName = "SvgIcon");
function qp(e, t) {
  function r(o, i) {
    return /* @__PURE__ */ R.jsx(Ar, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ar.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(r));
}
function El(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
function Wo(e, t) {
  return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Wo(e, t);
}
function xl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wo(e, t);
}
const Ws = {
  disabled: !1
};
var Hp = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const xn = et.createContext(null);
var Yp = function(t) {
  return t.scrollTop;
}, Tr = "unmounted", Vt = "exited", Wt = "entering", nr = "entered", zo = "exiting", Rt = /* @__PURE__ */ function(e) {
  xl(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, l = a && !a.isMounting ? o.enter : o.appear, c;
    return s.appearStatus = null, o.in ? l ? (c = Vt, s.appearStatus = Wt) : c = nr : o.unmountOnExit || o.mountOnEnter ? c = Tr : c = Vt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Tr ? {
      status: Vt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Wt && a !== nr && (s = Wt) : (a === Wt || a === nr) && (s = zo);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Xr.findDOMNode(this);
          a && Yp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Vt && this.setState({
      status: Tr
    });
  }, r.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Xr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), y = l ? f.appear : f.enter;
    if (!i && !a || Ws.disabled) {
      this.safeSetState({
        status: nr
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Wt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(y, function() {
        s.safeSetState({
          status: nr
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Xr.findDOMNode(this);
    if (!s || Ws.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: zo
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, r.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Xr.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === Tr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = El(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ et.createElement(xn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : et.cloneElement(et.Children.only(a), l))
    );
  }, t;
}(et.Component);
Rt.contextType = xn;
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, r, o, i, s) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, o, i, s);
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
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
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
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
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
    var r = Hp;
    t.addEndListener || (r = r.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(i));
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
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function tr() {
}
Rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tr,
  onEntering: tr,
  onEntered: tr,
  onExit: tr,
  onExiting: tr,
  onExited: tr
};
Rt.UNMOUNTED = Tr;
Rt.EXITED = Vt;
Rt.ENTERING = Wt;
Rt.ENTERED = nr;
Rt.EXITING = zo;
function Kp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Si(e, t) {
  var r = function(s) {
    return t && an(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && dc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = r(i);
  }), o;
}
function Gp(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
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
        l[o[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = r(i[a]);
  return l;
}
function zt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Zp(e, t) {
  return Si(e.children, function(r) {
    return ln(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: zt(r, "appear", e),
      enter: zt(r, "enter", e),
      exit: zt(r, "exit", e)
    });
  });
}
function Xp(e, t, r) {
  var o = Si(e.children), i = Gp(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (an(a)) {
      var l = s in t, c = s in o, u = t[s], d = an(u) && !u.props.in;
      c && (!l || d) ? i[s] = ln(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }) : !c && l && !d ? i[s] = ln(a, {
        in: !1
      }) : c && l && an(u) && (i[s] = ln(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }));
    }
  }), i;
}
var Jp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Qp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ci = /* @__PURE__ */ function(e) {
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
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Zp(i, l) : Xp(i, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(i, s) {
    var a = Si(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = yn({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = El(i, ["component", "childFactory"]), c = this.state.contextValue, u = Jp(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ et.createElement(xn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ et.createElement(xn.Provider, {
      value: c
    }, /* @__PURE__ */ et.createElement(s, l, u));
  }, t;
}(et.Component);
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
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
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
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
  childFactory: n.func
} : {};
Ci.defaultProps = Qp;
const Sl = (e) => e.scrollTop;
function Sn(e, t) {
  const {
    timeout: r,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
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
    elevation: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${r}`]
  };
  return je(s, em, i);
}, rm = se("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Ae(({
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
}))), Ti = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
    props: t,
    name: "MuiPaper"
  }), i = Ei(), {
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
  }, y = tm(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ R.jsx(rm, {
    as: a,
    ownerState: f,
    className: de(y.root, s),
    ref: r,
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
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Yr(nl, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
function ht(e, t) {
  const {
    className: r,
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
    ...y
  } = s, E = d[e] || o, b = al(f[e], i), {
    props: {
      component: x,
      ...v
    },
    internalRef: T
  } = sl({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: b
  }), w = Ze(T, b?.ref, t.ref), g = a ? a(v) : {}, C = {
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
class Cn {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Cn();
  }
  static use() {
    const t = Ja(Cn.create).current, [r, o] = p.useState(!1);
    return t.shouldMount = r, t.setShouldMount = o, p.useEffect(t.mountEffect, [r]), t;
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
function nm() {
  return Cn.use();
}
function om() {
  let e, t;
  const r = new Promise((o, i) => {
    e = o, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}
function Cl(e) {
  const {
    className: t,
    classes: r,
    pulsate: o = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = p.useState(!1), y = de(t, r.ripple, r.rippleVisible, o && r.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = de(r.child, d && r.childLeaving, o && r.childPulsate);
  return !l && !d && f(!0), p.useEffect(() => {
    if (!l && c != null) {
      const x = setTimeout(c, u);
      return () => {
        clearTimeout(x);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ R.jsx("span", {
    className: y,
    style: E,
    children: /* @__PURE__ */ R.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const ut = Pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Uo = 550, im = 80, sm = dr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, am = dr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, lm = dr`
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
    animation-duration: ${Uo}ms;
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
    animation-duration: ${Uo}ms;
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
`, Tl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
  const y = p.useRef(!1), E = Qa(), b = p.useRef(null), x = p.useRef(null), v = p.useCallback((C) => {
    const {
      pulsate: h,
      rippleX: P,
      rippleY: k,
      rippleSize: I,
      cb: m
    } = C;
    u(($) => [...$, /* @__PURE__ */ R.jsx(um, {
      classes: {
        ripple: de(s.ripple, ut.ripple),
        rippleVisible: de(s.rippleVisible, ut.rippleVisible),
        ripplePulsate: de(s.ripplePulsate, ut.ripplePulsate),
        child: de(s.child, ut.child),
        childLeaving: de(s.childLeaving, ut.childLeaving),
        childPulsate: de(s.childPulsate, ut.childPulsate)
      },
      timeout: Uo,
      pulsate: h,
      rippleX: P,
      rippleY: k,
      rippleSize: I
    }, d.current)]), d.current += 1, f.current = m;
  }, [s]), T = p.useCallback((C = {}, h = {}, P = () => {
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
    const $ = m ? null : x.current, D = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, q, F;
    if (I || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      B = Math.round(D.width / 2), q = Math.round(D.height / 2);
    else {
      const {
        clientX: V,
        clientY: A
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      B = Math.round(V - D.left), q = Math.round(A - D.top);
    }
    if (I)
      F = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3), F % 2 === 0 && (F += 1);
    else {
      const V = Math.max(Math.abs(($ ? $.clientWidth : 0) - B), B) * 2 + 2, A = Math.max(Math.abs(($ ? $.clientHeight : 0) - q), q) * 2 + 2;
      F = Math.sqrt(V ** 2 + A ** 2);
    }
    C?.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: k,
        rippleX: B,
        rippleY: q,
        rippleSize: F,
        cb: P
      });
    }, E.start(im, () => {
      b.current && (b.current(), b.current = null);
    })) : v({
      pulsate: k,
      rippleX: B,
      rippleY: q,
      rippleSize: F,
      cb: P
    });
  }, [i, v, E]), w = p.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), g = p.useCallback((C, h) => {
    if (E.clear(), C?.type === "touchend" && b.current) {
      b.current(), b.current = null, E.start(0, () => {
        g(C, h);
      });
      return;
    }
    b.current = null, u((P) => P.length > 0 ? P.slice(1) : P), f.current = h;
  }, [E]);
  return p.useImperativeHandle(r, () => ({
    pulsate: w,
    start: T,
    stop: g
  }), [w, T, g]), /* @__PURE__ */ R.jsx(cm, {
    className: de(ut.root, s.root, a),
    ref: x,
    ...l,
    children: /* @__PURE__ */ R.jsx(Ci, {
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
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function dm(e) {
  return Ne("MuiButtonBase", e);
}
const fm = Pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), pm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: o,
    classes: i
  } = e, a = je({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, dm, i);
  return r && o && (a.root += ` ${o}`), a;
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
}), wi = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    onTouchEnd: $,
    onTouchMove: D,
    onTouchStart: B,
    tabIndex: q = 0,
    TouchRippleProps: F,
    touchRippleRef: V,
    type: A,
    ...U
  } = o, Y = p.useRef(null), ne = nm(), N = Ze(ne.ref, V), [_, Z] = p.useState(!1);
  u && _ && Z(!1), p.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Z(!0), Y.current.focus();
    }
  }), []);
  const z = ne.shouldMount && !d && !u;
  p.useEffect(() => {
    _ && y && !d && ne.pulsate();
  }, [d, y, _, ne]);
  function H(re, Be, tt = f) {
    return or((ot) => (Be && Be(ot), tt || ne[re](ot), !0));
  }
  const J = H("start", k), G = H("stop", T), X = H("stop", w), ee = H("stop", m), Q = H("stop", (re) => {
    _ && re.preventDefault(), I && I(re);
  }), W = H("start", B), te = H("stop", $), O = H("stop", D), oe = H("stop", (re) => {
    Rs(re.target) || Z(!1), x && x(re);
  }, !1), L = or((re) => {
    Y.current || (Y.current = re.currentTarget), Rs(re.target) && (Z(!0), C && C(re)), g && g(re);
  }), le = () => {
    const re = Y.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, ge = or((re) => {
    y && !re.repeat && _ && re.key === " " && ne.stop(re, () => {
      ne.start(re);
    }), re.target === re.currentTarget && le() && re.key === " " && re.preventDefault(), h && h(re), re.target === re.currentTarget && le() && re.key === "Enter" && !u && (re.preventDefault(), v && v(re));
  }), Ie = or((re) => {
    y && re.key === " " && _ && !re.defaultPrevented && ne.stop(re, () => {
      ne.pulsate(re);
    }), P && P(re), v && re.target === re.currentTarget && le() && re.key === " " && !re.defaultPrevented && v(re);
  });
  let Fe = c;
  Fe === "button" && (U.href || U.to) && (Fe = b);
  const Re = {};
  Fe === "button" ? (Re.type = A === void 0 ? "button" : A, Re.disabled = u) : (!U.href && !U.to && (Re.role = "button"), u && (Re["aria-disabled"] = u));
  const Je = Ze(r, Y), ae = {
    ...o,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: y,
    tabIndex: q,
    focusVisible: _
  }, fe = pm(ae);
  return /* @__PURE__ */ R.jsxs(mm, {
    as: Fe,
    className: de(fe.root, l),
    ownerState: ae,
    onBlur: oe,
    onClick: v,
    onContextMenu: G,
    onFocus: L,
    onKeyDown: ge,
    onKeyUp: Ie,
    onMouseDown: J,
    onMouseLeave: Q,
    onMouseUp: ee,
    onDragLeave: X,
    onTouchEnd: te,
    onTouchMove: O,
    onTouchStart: W,
    ref: Je,
    tabIndex: u ? -1 : q,
    type: A,
    ...Re,
    ...U,
    children: [a, z ? /* @__PURE__ */ R.jsx(Tl, {
      ref: N,
      center: s,
      ...F
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: $t,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: pi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function hm(e) {
  return typeof e.main == "string";
}
function gm(e, t = []) {
  if (!hm(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
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
}, vm = Vp(), Em = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ue(t)}`, r && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return je(l, ym, a);
}, xm = se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ue(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ae(({
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
  }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
    props: {
      variant: t
    },
    style: r
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
}))), zs = {
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
}, wl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const {
    color: o,
    ...i
  } = De({
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
    noWrap: f = !1,
    paragraph: y = !1,
    variant: E = "body1",
    variantMapping: b = zs,
    ...x
  } = a, v = {
    ...a,
    align: l,
    color: o,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: y,
    variant: E,
    variantMapping: b
  }, T = u || (y ? "p" : b[E] || zs[E]) || "span", w = Em(v);
  return /* @__PURE__ */ R.jsx(xm, {
    as: T,
    ref: r,
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
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
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
  variantMapping: n.object
});
function Sm(e) {
  return typeof e == "function" ? e() : e;
}
const Tn = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = p.useState(null), c = Ze(Gr(o), r);
  if (_t(() => {
    s || l(Sm(i) || document.body);
  }, [i, s]), _t(() => {
    if (a && !s)
      return Do(r, a), () => {
        Do(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ p.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ p.cloneElement(o, u);
    }
    return /* @__PURE__ */ R.jsx(p.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ R.jsx(p.Fragment, {
    children: a && /* @__PURE__ */ pc.createPortal(o, a)
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
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
  container: n.oneOfType([_r, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = Gn(Tn.propTypes));
function sn(e) {
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
const Ol = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const {
    onChange: o,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = p.useRef(l != null), d = p.useRef(null), f = Ze(r, d), y = p.useRef(null), E = p.useRef(null), b = p.useCallback(() => {
    const T = d.current, g = Ht(T).getComputedStyle(T);
    if (g.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const C = E.current;
    C.style.width = g.width, C.value = T.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const h = g.boxSizing, P = sn(g.paddingBottom) + sn(g.paddingTop), k = sn(g.borderBottomWidth) + sn(g.borderTopWidth), I = C.scrollHeight;
    C.value = "x";
    const m = C.scrollHeight;
    let $ = I;
    s && ($ = Math.max(Number(s) * m, $)), i && ($ = Math.min(Number(i) * m, $)), $ = Math.max($, m);
    const D = $ + (h === "border-box" ? P + k : 0), B = Math.abs($ - I) <= 1;
    return {
      outerHeightStyle: D,
      overflowing: B
    };
  }, [i, s, t.placeholder]), x = p.useCallback(() => {
    const T = b();
    if (Tm(T))
      return;
    const w = T.outerHeightStyle, g = d.current;
    y.current !== w && (y.current = w, g.style.height = `${w}px`), g.style.overflow = T.overflowing ? "hidden" : "";
  }, [b]);
  _t(() => {
    const T = () => {
      x();
    };
    let w;
    const g = () => {
      cancelAnimationFrame(w), w = requestAnimationFrame(() => {
        T();
      });
    }, C = Za(T), h = d.current, P = Ht(h);
    P.addEventListener("resize", C);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(process.env.NODE_ENV === "test" ? g : T), k.observe(h)), () => {
      C.clear(), cancelAnimationFrame(w), P.removeEventListener("resize", C), k && k.disconnect();
    };
  }, [b, x]), _t(() => {
    x();
  });
  const v = (T) => {
    u || x(), o && o(T);
  };
  return /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ R.jsx("textarea", {
      value: l,
      onChange: v,
      ref: f,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ R.jsx("textarea", {
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
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function qo(e) {
  return typeof e == "string";
}
function fr({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((o, i) => (o[i] = e[i], r && typeof e[i] > "u" && (o[i] = r[i]), o), {});
}
const Jn = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (Jn.displayName = "FormControlContext");
function pr() {
  return p.useContext(Jn);
}
function Us(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function wn(e, t = !1) {
  return e && (Us(e.value) && e.value !== "" || t && Us(e.defaultValue) && e.defaultValue !== "");
}
function wm(e) {
  return e.startAdornment;
}
function Om(e) {
  return Ne("MuiInputBase", e);
}
const cr = Pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var qs;
const Qn = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, r.size === "small" && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${ue(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel];
}, eo = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.input, r.size === "small" && t.inputSizeSmall, r.multiline && t.inputMultiline, r.type === "search" && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel];
}, Rm = (e) => {
  const {
    classes: t,
    color: r,
    disabled: o,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: y,
    startAdornment: E,
    type: b
  } = e, x = {
    root: ["root", `color${ue(r)}`, o && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", y && y !== "medium" && `size${ue(y)}`, d && "multiline", E && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", o && "disabled", b === "search" && "inputTypeSearch", d && "inputMultiline", y === "small" && "inputSizeSmall", u && "inputHiddenLabel", E && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return je(x, Om, t);
}, to = se("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Qn
})(Ae(({
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
  [`&.${cr.disabled}`]: {
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
      size: r
    }) => t.multiline && r === "small",
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
}))), ro = se("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: eo
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light", r = {
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
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&::-ms-input-placeholder": r,
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
    [`label[data-shrink=false] + .${cr.formControl} &`]: {
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
    [`&.${cr.disabled}`]: {
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
})), Hs = xi({
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
}), Rl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    onBlur: $,
    onChange: D,
    onClick: B,
    onFocus: q,
    onKeyDown: F,
    onKeyUp: V,
    placeholder: A,
    readOnly: U,
    renderSuffix: Y,
    rows: ne,
    size: N,
    slotProps: _ = {},
    slots: Z = {},
    startAdornment: z,
    type: H = "text",
    value: J,
    ...G
  } = o, X = g.value != null ? g.value : J, {
    current: ee
  } = p.useRef(X != null), Q = p.useRef(), W = p.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = Ze(Q, C, g.ref, W), [O, oe] = p.useState(!1), L = pr();
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (L)
      return L.registerEffect();
  }, [L]);
  const le = fr({
    props: o,
    muiFormControl: L,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  le.focused = L ? L.focused : O, p.useEffect(() => {
    !L && y && O && (oe(!1), $ && $());
  }, [L, y, O, $]);
  const ge = L && L.onFilled, Ie = L && L.onEmpty, Fe = p.useCallback((ye) => {
    wn(ye) ? ge && ge() : Ie && Ie();
  }, [ge, Ie]);
  _t(() => {
    ee && Fe({
      value: X
    });
  }, [X, Fe, ee]);
  const Re = (ye) => {
    q && q(ye), g.onFocus && g.onFocus(ye), L && L.onFocus ? L.onFocus(ye) : oe(!0);
  }, Je = (ye) => {
    $ && $(ye), g.onBlur && g.onBlur(ye), L && L.onBlur ? L.onBlur(ye) : oe(!1);
  }, ae = (ye, ...Nt) => {
    if (!ee) {
      const Dt = ye.target || Q.current;
      if (Dt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ot(1));
      Fe({
        value: Dt.value
      });
    }
    g.onChange && g.onChange(ye, ...Nt), D && D(ye, ...Nt);
  };
  p.useEffect(() => {
    Fe(Q.current);
  }, []);
  const fe = (ye) => {
    Q.current && ye.currentTarget === ye.target && Q.current.focus(), B && B(ye);
  };
  let re = w, Be = g;
  I && re === "input" && (ne ? (process.env.NODE_ENV !== "production" && (k || P) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Be = {
    type: void 0,
    minRows: ne,
    maxRows: ne,
    ...Be
  }) : Be = {
    type: void 0,
    maxRows: P,
    minRows: k,
    ...Be
  }, re = Ol);
  const tt = (ye) => {
    Fe(ye.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    L && L.setAdornedStart(!!z);
  }, [L, z]);
  const ot = {
    ...o,
    color: le.color || "primary",
    disabled: le.disabled,
    endAdornment: b,
    error: le.error,
    focused: le.focused,
    formControl: L,
    fullWidth: v,
    hiddenLabel: le.hiddenLabel,
    multiline: I,
    size: le.size,
    startAdornment: z,
    type: H
  }, lt = Rm(ot), Mt = Z.root || u.Root || to, Pt = _.root || d.root || {}, vt = Z.input || u.Input || ro;
  return Be = {
    ...Be,
    ..._.input ?? d.input
  }, /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [!E && typeof Hs == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (qs || (qs = /* @__PURE__ */ R.jsx(Hs, {}))), /* @__PURE__ */ R.jsxs(Mt, {
      ...Pt,
      ref: r,
      onClick: fe,
      ...G,
      ...!qo(Mt) && {
        ownerState: {
          ...ot,
          ...Pt.ownerState
        }
      },
      className: de(lt.root, Pt.className, l, U && "MuiInputBase-readOnly"),
      children: [z, /* @__PURE__ */ R.jsx(Jn.Provider, {
        value: null,
        children: /* @__PURE__ */ R.jsx(vt, {
          "aria-invalid": le.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: le.disabled,
          id: T,
          onAnimationStart: tt,
          name: m,
          placeholder: A,
          readOnly: U,
          required: le.required,
          rows: ne,
          value: X,
          onKeyDown: F,
          onKeyUp: V,
          type: H,
          ...Be,
          ...!qo(vt) && {
            as: re,
            ownerState: {
              ...ot,
              ...Be.ownerState
            }
          },
          ref: te,
          className: de(lt.input, Be.className, U && "MuiInputBase-readOnly"),
          onBlur: Je,
          onChange: ae,
          onFocus: Re
        })
      }), b, Y ? Y({
        ...le,
        startAdornment: z
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: pi,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
const Oi = Rl;
function Pm(e) {
  return Ne("MuiInput", e);
}
const br = {
  ...cr,
  ...Pe("MuiInput", ["root", "underline", "input"])
};
function km(e) {
  return Ne("MuiOutlinedInput", e);
}
const xt = {
  ...cr,
  ...Pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function $m(e) {
  return Ne("MuiFilledInput", e);
}
const Bt = {
  ...cr,
  ...Pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Mm = qp(/* @__PURE__ */ R.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Nm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Pl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = Ei(), i = {
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
    onEntering: y,
    onExit: E,
    onExited: b,
    onExiting: x,
    style: v,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Rt,
    ...g
  } = t, C = p.useRef(null), h = Ze(C, Gr(l), r), P = (F) => (V) => {
    if (F) {
      const A = C.current;
      V === void 0 ? F(A) : F(A, V);
    }
  }, k = P(y), I = P((F, V) => {
    Sl(F);
    const A = Sn({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = o.transitions.create("opacity", A), F.style.transition = o.transitions.create("opacity", A), d && d(F, V);
  }), m = P(f), $ = P(x), D = P((F) => {
    const V = Sn({
      style: v,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = o.transitions.create("opacity", V), F.style.transition = o.transitions.create("opacity", V), E && E(F);
  }), B = P(b), q = (F) => {
    s && s(C.current, F);
  };
  return /* @__PURE__ */ R.jsx(w, {
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: I,
    onEntered: m,
    onEntering: k,
    onExit: D,
    onExited: B,
    onExiting: $,
    addEndListener: q,
    timeout: T,
    ...g,
    children: (F, V) => /* @__PURE__ */ p.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: F === "exited" && !u ? "hidden" : void 0,
        ...Nm[F],
        ...v,
        ...l.props.style
      },
      ref: h,
      ...V
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
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Kr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Im(e) {
  return Ne("MuiBackdrop", e);
}
Pe("MuiBackdrop", ["root", "invisible"]);
const Lm = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return je({
    root: ["root", r && "invisible"]
  }, Im, t);
}, _m = se("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
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
}), kl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    slots: y = {},
    TransitionComponent: E,
    transitionDuration: b,
    ...x
  } = o, v = {
    ...o,
    component: a,
    invisible: l
  }, T = Lm(v), w = {
    transition: E,
    root: u.Root,
    ...y
  }, g = {
    ...d,
    ...f
  }, C = {
    slots: w,
    slotProps: g
  }, [h, P] = ht("root", {
    elementType: _m,
    externalForwardedProps: C,
    className: de(T.root, s),
    ownerState: v
  }), [k, I] = ht("transition", {
    elementType: Pl,
    externalForwardedProps: C,
    ownerState: v
  });
  return delete I.ownerState, /* @__PURE__ */ R.jsx(k, {
    in: c,
    timeout: b,
    ...x,
    ...I,
    children: /* @__PURE__ */ R.jsx(h, {
      "aria-hidden": !0,
      ...P,
      classes: T,
      ref: r,
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
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const jm = Pe("MuiBox", ["root"]), Am = Zn(), $l = gf({
  themeId: gt,
  defaultTheme: Am,
  defaultClassName: jm.root,
  generateClassName: za.generate
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Dm(e) {
  return Ne("MuiButton", e);
}
const rr = Pe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ml = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Ml.displayName = "ButtonGroupContext");
const Nl = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (Nl.displayName = "ButtonGroupButtonContext");
const Fm = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: o,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${ue(t)}`, `size${ue(i)}`, `${s}Size${ue(i)}`, `color${ue(t)}`, r && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ue(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${ue(i)}`]
  }, c = je(l, Dm, a);
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
}], Bm = se(wi, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ue(r.color)}`], t[`size${ue(r.size)}`], t[`${r.variant}Size${ue(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${rr.disabled}`]: {
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
        [`&.${rr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${rr.disabled}`]: {
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
        [`&.${rr.disabled}`]: {
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
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
        [`&.${rr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${rr.disabled}`]: {
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
})), Vm = se("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${ue(r.size)}`]];
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
}), Wm = se("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${ue(r.size)}`]];
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
}), Ho = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = p.useContext(Ml), i = p.useContext(Nl), s = Lr(o, t), a = De({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
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
    disabled: f,
    disableElevation: y,
    disableFocusRipple: E,
    fullWidth: v,
    size: T,
    type: g,
    variant: C
  }, k = Fm(P), I = w && /* @__PURE__ */ R.jsx(Vm, {
    className: k.startIcon,
    ownerState: P,
    children: w
  }), m = b && /* @__PURE__ */ R.jsx(Wm, {
    className: k.endIcon,
    ownerState: P,
    children: b
  }), $ = i || "";
  return /* @__PURE__ */ R.jsxs(Bm, {
    ownerState: P,
    className: de(o.className, k.root, d, $),
    component: u,
    disabled: f,
    focusRipple: !E,
    focusVisibleClassName: de(k.focusVisible, x),
    ref: r,
    type: g,
    ...h,
    classes: k,
    children: [I, l, m]
  });
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const Yo = typeof xi({}) == "function", zm = (e, t) => ({
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
}), Ll = (e, t = !1) => {
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, a]) => {
    const l = e.getColorSchemeSelector(s);
    l.startsWith("@") ? r[l] = {
      ":root": {
        colorScheme: a.palette?.mode
      }
    } : r[l.replace(/\s*&/, "")] = {
      colorScheme: a.palette?.mode
    };
  });
  let o = {
    html: zm(e, t),
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
    ...r
  };
  const i = e.components?.MuiCssBaseline?.styleOverrides;
  return i && (o = [o, i]), o;
}, pn = "mui-ecs", qm = (e) => {
  const t = Ll(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${pn})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, i]) => {
    const s = e.getColorSchemeSelector(o);
    s.startsWith("@") ? r[s] = {
      [`:root:not(:has(.${pn}))`]: {
        colorScheme: i.palette?.mode
      }
    } : r[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${pn}))`]: {
        colorScheme: i.palette?.mode
      }
    };
  }), t;
}, Hm = xi(Yo ? ({
  theme: e,
  enableColorScheme: t
}) => Ll(e, t) : ({
  theme: e
}) => qm(e));
function _l(e) {
  const t = De({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: o = !1
  } = t;
  return /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [Yo && /* @__PURE__ */ R.jsx(Hm, {
      enableColorScheme: o
    }), !Yo && !o && /* @__PURE__ */ R.jsx("span", {
      className: pn,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (_l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: n.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: n.bool
});
function Ym(e) {
  const t = at(e);
  return t.body === e ? Ht(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Or(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ys(e) {
  return parseInt(Ht(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Km(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || o;
}
function Ks(e, t, r, o, i) {
  const s = [t, r, ...o];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Km(a);
    l && c && Or(a, i);
  });
}
function Co(e, t) {
  let r = -1;
  return e.some((o, i) => t(o) ? (r = i, !0) : !1), r;
}
function Gm(e, t) {
  const r = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Ym(o)) {
      const a = el(at(o));
      r.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Ys(o) + a}px`;
      const l = at(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
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
    r.push({
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
    r.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Zm(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Xm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Or(t.modalRef, !1);
    const i = Zm(r);
    Ks(r, t.mount, t.modalRef, i, !0);
    const s = Co(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, r) {
    const o = Co(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    i.restore || (i.restore = Gm(i, r));
  }
  remove(t, r = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Co(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Or(t.modalRef, r), Ks(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Or(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Jm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function th(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eh(e));
}
function rh(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Jm)).forEach((o, i) => {
    const s = Qm(o);
    s === -1 || !th(o) || (s === 0 ? t.push(o) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), r.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function nh() {
  return !0;
}
function On(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = rh,
    isEnabled: a = nh,
    open: l
  } = e, c = p.useRef(!1), u = p.useRef(null), d = p.useRef(null), f = p.useRef(null), y = p.useRef(null), E = p.useRef(!1), b = p.useRef(null), x = Ze(Gr(t), b), v = p.useRef(null);
  p.useEffect(() => {
    !l || !b.current || (E.current = !r);
  }, [r, l]), p.useEffect(() => {
    if (!l || !b.current)
      return;
    const g = at(b.current);
    return b.current.contains(g.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), E.current && b.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), p.useEffect(() => {
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
        const m = !!(v.current?.shiftKey && v.current?.key === "Tab"), $ = I[0], D = I[I.length - 1];
        typeof $ != "string" && typeof D != "string" && (m ? D.focus() : $.focus());
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
  }, [r, o, i, a, l, s]);
  const T = (g) => {
    f.current === null && (f.current = g.relatedTarget), E.current = !0, y.current = g.target;
    const C = t.props.onFocus;
    C && C(g);
  }, w = (g) => {
    f.current === null && (f.current = g.relatedTarget), E.current = !0;
  };
  return /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: x,
      onFocus: T
    }), /* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Kr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (On.propTypes = Gn(On.propTypes));
function oh(e) {
  return typeof e == "function" ? e() : e;
}
function ih(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const sh = new Xm();
function ah(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = sh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, y = p.useRef({}), E = p.useRef(null), b = p.useRef(null), x = Ze(b, f), [v, T] = p.useState(!d), w = ih(c);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const C = () => at(E.current), h = () => (y.current.modalRef = b.current, y.current.mount = E.current, y.current), P = () => {
    i.mount(h(), {
      disableScrollLock: o
    }), b.current && (b.current.scrollTop = 0);
  }, k = or(() => {
    const A = oh(t) || C().body;
    i.add(h(), A), b.current && P();
  }), I = p.useCallback(() => i.isTopModal(h()), [i]), m = or((A) => {
    E.current = A, A && (d && I() ? P() : b.current && Or(b.current, g));
  }), $ = p.useCallback(() => {
    i.remove(h(), g);
  }, [g, i]);
  p.useEffect(() => () => {
    $();
  }, [$]), p.useEffect(() => {
    d ? k() : (!w || !s) && $();
  }, [d, $, w, s, k]);
  const D = (A) => (U) => {
    A.onKeyDown?.(U), !(U.key !== "Escape" || U.which === 229 || // Wait until IME is settled.
    !I()) && (r || (U.stopPropagation(), u && u(U, "escapeKeyDown")));
  }, B = (A) => (U) => {
    A.onClick?.(U), U.target === U.currentTarget && u && u(U, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const U = il(e);
      delete U.onTransitionEnter, delete U.onTransitionExited;
      const Y = {
        ...U,
        ...A
      };
      return {
        role: "presentation",
        ...Y,
        onKeyDown: D(Y),
        ref: x
      };
    },
    getBackdropProps: (A = {}) => {
      const U = A;
      return {
        "aria-hidden": !0,
        ...U,
        onClick: B(U),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        T(!1), a && a();
      }, U = () => {
        T(!0), l && l(), s && $();
      };
      return {
        onEnter: Ss(A, c?.props.onEnter),
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
    exited: r,
    classes: o
  } = e;
  return je({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, lh, o);
}, uh = se("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Ae(({
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
}), jl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    component: f,
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
    open: $,
    slotProps: D = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: q,
    ...F
  } = o, V = {
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
    getRootProps: A,
    getBackdropProps: U,
    getTransitionProps: Y,
    portalRef: ne,
    isTopModal: N,
    exited: _,
    hasTransition: Z
  } = ah({
    ...V,
    rootRef: r
  }), z = {
    ...V,
    exited: _
  }, H = ch(z), J = {};
  if (u.props.tabIndex === void 0 && (J.tabIndex = "-1"), Z) {
    const {
      onEnter: O,
      onExited: oe
    } = Y();
    J.onEnter = O, J.onExited = oe;
  }
  const G = {
    slots: {
      root: y.Root,
      backdrop: y.Backdrop,
      ...B
    },
    slotProps: {
      ...E,
      ...D
    }
  }, [X, ee] = ht("root", {
    elementType: uh,
    externalForwardedProps: G,
    getSlotProps: A,
    additionalProps: {
      ref: r,
      as: f
    },
    ownerState: z,
    className: de(l, H?.root, !z.open && z.exited && H?.hidden)
  }), [Q, W] = ht("backdrop", {
    elementType: i,
    externalForwardedProps: G,
    additionalProps: s,
    getSlotProps: (O) => U({
      ...O,
      onClick: (oe) => {
        P && P(oe), O?.onClick && O.onClick(oe);
      }
    }),
    className: de(s?.className, H?.backdrop),
    ownerState: z
  }), te = Ze(s?.ref, W.ref);
  return !h && !$ && (!Z || _) ? null : /* @__PURE__ */ R.jsx(Tn, {
    ref: ne,
    container: d,
    disablePortal: T,
    children: /* @__PURE__ */ R.jsxs(X, {
      ...ee,
      ...F,
      children: [!C && i ? /* @__PURE__ */ R.jsx(Q, {
        ...W,
        ref: te
      }) : null, /* @__PURE__ */ R.jsx(On, {
        disableEnforceFocus: x,
        disableAutoFocus: b,
        disableRestoreFocus: w,
        isEnabled: N,
        open: $,
        children: /* @__PURE__ */ p.cloneElement(u, J)
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: Kr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
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
  container: n.oneOfType([_r, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Gs = Pe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fh = (e) => {
  const {
    classes: t,
    disableUnderline: r,
    startAdornment: o,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !r && "underline", o && "adornedStart", i && "adornedEnd", s === "small" && `size${ue(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = je(c, $m, t);
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
      ownerState: r
    } = e;
    return [...Qn(e, t), !r.disableUnderline && t.underline];
  }
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light", r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : r}`,
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
})), mh = se(ro, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: eo
})(Ae(({
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
}))), Dr = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
  }, w = f ?? a ? Ke(T, f ?? a) : T, g = y.root ?? s.Root ?? ph, C = y.input ?? s.Input ?? mh;
  return /* @__PURE__ */ R.jsx(Oi, {
    slots: {
      root: g,
      input: C
    },
    componentsProps: w,
    fullWidth: l,
    inputComponent: u,
    multiline: d,
    ref: r,
    type: E,
    ...b,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (Dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Dr && (Dr.muiName = "Input");
function hh(e) {
  return Ne("MuiFormControl", e);
}
Pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const gh = (e) => {
  const {
    classes: t,
    margin: r,
    fullWidth: o
  } = e, i = {
    root: ["root", r !== "none" && `margin${ue(r)}`, o && "fullWidth"]
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
}), Ri = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    fullWidth: f,
    hiddenLabel: y,
    margin: E,
    required: b,
    size: x,
    variant: v
  }, g = gh(w), [C, h] = p.useState(() => {
    let q = !1;
    return i && p.Children.forEach(i, (F) => {
      if (!bo(F, ["Input", "Select"]))
        return;
      const V = bo(F, ["Select"]) ? F.props.input : F;
      V && wm(V.props) && (q = !0);
    }), q;
  }), [P, k] = p.useState(() => {
    let q = !1;
    return i && p.Children.forEach(i, (F) => {
      bo(F, ["Input", "Select"]) && (wn(F.props, !0) || wn(F.props.inputProps, !0)) && (q = !0);
    }), q;
  }), [I, m] = p.useState(!1);
  c && I && m(!1);
  const $ = d !== void 0 && !c ? d : I;
  let D;
  if (process.env.NODE_ENV !== "production") {
    const q = p.useRef(!1);
    D = () => (q.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), q.current = !0, () => {
      q.current = !1;
    });
  }
  const B = p.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: h,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: $,
    fullWidth: f,
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
    registerEffect: D,
    required: b,
    variant: v
  }), [C, a, c, u, P, $, f, y, D, b, x, v]);
  return /* @__PURE__ */ R.jsx(Jn.Provider, {
    value: B,
    children: /* @__PURE__ */ R.jsx(yh, {
      as: l,
      ownerState: w,
      className: de(g.root, s),
      ref: r,
      ...T,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function bh(e) {
  return Ne("MuiFormHelperText", e);
}
const Zs = Pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Xs;
const vh = (e) => {
  const {
    classes: t,
    contained: r,
    size: o,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", o && `size${ue(o)}`, r && "contained", l && "focused", a && "filled", c && "required"]
  };
  return je(u, bh, t);
}, Eh = se("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size && t[`size${ue(r.size)}`], r.contained && t.contained, r.filled && t.filled];
  }
})(Ae(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Zs.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Zs.error}`]: {
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
}))), Al = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    required: y,
    variant: E,
    ...b
  } = o, x = pr(), v = fr({
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
  return /* @__PURE__ */ R.jsx(Eh, {
    as: a,
    className: de(w.root, s),
    ref: r,
    ...b,
    ownerState: T,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Xs || (Xs = /* @__PURE__ */ R.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
function xh(e) {
  return Ne("MuiFormLabel", e);
}
const Rr = Pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Sh = (e) => {
  const {
    classes: t,
    color: r,
    focused: o,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ue(r)}`, i && "disabled", s && "error", a && "filled", o && "focused", l && "required"],
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
})(Ae(({
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
      [`&.${Rr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Rr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Rr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Th = se("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ae(({
  theme: e
}) => ({
  [`&.${Rr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Dl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    required: y,
    ...E
  } = o, b = pr(), x = fr({
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
  return /* @__PURE__ */ R.jsxs(Ch, {
    as: l,
    ownerState: v,
    className: de(T.root, s),
    ref: r,
    ...E,
    children: [i, x.required && /* @__PURE__ */ R.jsxs(Th, {
      ownerState: v,
      "aria-hidden": !0,
      className: T.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Ko(e) {
  return `scale(${e}, ${e ** 2})`;
}
const wh = {
  entering: {
    opacity: 1,
    transform: Ko(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, To = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Rn = /* @__PURE__ */ p.forwardRef(function(t, r) {
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
    onExited: y,
    onExiting: E,
    style: b,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Rt,
    ...T
  } = t, w = Qa(), g = p.useRef(), C = Ei(), h = p.useRef(null), P = Ze(h, Gr(s), r), k = (V) => (A) => {
    if (V) {
      const U = h.current;
      A === void 0 ? V(U) : V(U, A);
    }
  }, I = k(d), m = k((V, A) => {
    Sl(V);
    const {
      duration: U,
      delay: Y,
      easing: ne
    } = Sn({
      style: b,
      timeout: x,
      easing: a
    }, {
      mode: "enter"
    });
    let N;
    x === "auto" ? (N = C.transitions.getAutoHeightDuration(V.clientHeight), g.current = N) : N = U, V.style.transition = [C.transitions.create("opacity", {
      duration: N,
      delay: Y
    }), C.transitions.create("transform", {
      duration: To ? N : N * 0.666,
      delay: Y,
      easing: ne
    })].join(","), c && c(V, A);
  }), $ = k(u), D = k(E), B = k((V) => {
    const {
      duration: A,
      delay: U,
      easing: Y
    } = Sn({
      style: b,
      timeout: x,
      easing: a
    }, {
      mode: "exit"
    });
    let ne;
    x === "auto" ? (ne = C.transitions.getAutoHeightDuration(V.clientHeight), g.current = ne) : ne = A, V.style.transition = [C.transitions.create("opacity", {
      duration: ne,
      delay: U
    }), C.transitions.create("transform", {
      duration: To ? ne : ne * 0.666,
      delay: To ? U : U || ne * 0.333,
      easing: Y
    })].join(","), V.style.opacity = 0, V.style.transform = Ko(0.75), f && f(V);
  }), q = k(y), F = (V) => {
    x === "auto" && w.start(g.current || 0, V), o && o(h.current, V);
  };
  return /* @__PURE__ */ R.jsx(v, {
    appear: i,
    in: l,
    nodeRef: h,
    onEnter: m,
    onEntered: $,
    onEntering: I,
    onExit: B,
    onExited: q,
    onExiting: D,
    addEndListener: F,
    timeout: x === "auto" ? null : x,
    ...T,
    children: (V, A) => /* @__PURE__ */ p.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Ko(0.75),
        visibility: V === "exited" && !l ? "hidden" : void 0,
        ...wh[V],
        ...b,
        ...s.props.style
      },
      ref: P,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Kr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
Rn && (Rn.muiSupportAuto = !0);
const Oh = (e) => {
  const {
    classes: t,
    disableUnderline: r
  } = e, i = je({
    root: ["root", !r && "underline"],
    input: ["input"]
  }, Pm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Rh = se(to, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...Qn(e, t), !r.disableUnderline && t.underline];
  }
})(Ae(({
  theme: e
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
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
        [`&.${br.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${br.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${r}`,
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
        [`&:hover:not(.${br.disabled}, .${br.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${r}`
          }
        },
        [`&.${br.disabled}:before`]: {
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
})), Ph = se(ro, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: eo
})({}), Fr = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    type: y = "text",
    ...E
  } = o, b = Oh(o), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, T = d ?? a ? Ke(d ?? a, v) : v, w = f.root ?? s.Root ?? Rh, g = f.input ?? s.Input ?? Ph;
  return /* @__PURE__ */ R.jsx(Oi, {
    slots: {
      root: w,
      input: g
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: r,
    type: y,
    ...E,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (Fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Fr && (Fr.muiName = "Input");
function kh(e) {
  return Ne("MuiInputLabel", e);
}
Pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const $h = (e) => {
  const {
    classes: t,
    formControl: r,
    size: o,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", r && "formControl", !s && "animated", i && "shrink", o && o !== "normal" && `size${ue(o)}`, a],
    asterisk: [l && "asterisk"]
  }, u = je(c, kh, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, Mh = se(Dl, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Rr.asterisk}`]: t.asterisk
    }, t.root, r.formControl && t.formControl, r.size === "small" && t.sizeSmall, r.shrink && t.shrink, !r.disableAnimation && t.animated, r.focused && t.focused, t[r.variant]];
  }
})(Ae(({
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
      ownerState: r
    }) => t === "filled" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: r,
      size: o
    }) => t === "filled" && r.shrink && o === "small",
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
      ownerState: r
    }) => t === "outlined" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Pi = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = o, d = pr();
  let f = a;
  typeof f > "u" && d && (f = d.filled || d.focused || d.adornedStart);
  const y = fr({
    props: o,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), E = {
    ...o,
    disableAnimation: i,
    formControl: d,
    shrink: f,
    size: y.size,
    variant: y.variant,
    required: y.required,
    focused: y.focused
  }, b = $h(E);
  return /* @__PURE__ */ R.jsx(Mh, {
    "data-shrink": f,
    ref: r,
    className: de(b.root, c),
    ...u,
    ownerState: E,
    classes: b
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
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function Nh(e) {
  return Ne("MuiLinearProgress", e);
}
Pe("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Go = 4, Zo = dr`
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
`, Ih = typeof Zo != "string" ? In`
        animation: ${Zo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, Xo = dr`
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
`, Lh = typeof Xo != "string" ? In`
        animation: ${Xo} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Jo = dr`
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
`, _h = typeof Jo != "string" ? In`
        animation: ${Jo} 3s infinite linear;
      ` : null, jh = (e) => {
  const {
    classes: t,
    variant: r,
    color: o
  } = e, i = {
    root: ["root", `color${ue(o)}`, r],
    dashed: ["dashed", `dashedColor${ue(o)}`],
    bar1: ["bar", `barColor${ue(o)}`, (r === "indeterminate" || r === "query") && "bar1Indeterminate", r === "determinate" && "bar1Determinate", r === "buffer" && "bar1Buffer"],
    bar2: ["bar", r !== "buffer" && `barColor${ue(o)}`, r === "buffer" && `color${ue(o)}`, (r === "indeterminate" || r === "query") && "bar2Indeterminate", r === "buffer" && "bar2Buffer"]
  };
  return je(i, Nh, t);
}, ki = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Kn(e.palette[t].main, 0.62) : Yn(e.palette[t].main, 0.5), Ah = se("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`color${ue(r.color)}`], t[r.variant]];
  }
})(Ae(({
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
      backgroundColor: ki(e, t)
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
}))), Dh = se("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.dashed, t[`dashedColor${ue(r.color)}`]];
  }
})(Ae(({
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
    const r = ki(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`
      }
    };
  })]
})), _h || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${Jo} 3s infinite linear`
}), Fh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.bar, t[`barColor${ue(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar1Indeterminate, r.variant === "determinate" && t.bar1Determinate, r.variant === "buffer" && t.bar1Buffer];
  }
})(Ae(({
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
      transition: `transform .${Go}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${Go}s linear`
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
      animation: `${Zo} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), Bh = se("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.bar, t[`barColor${ue(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar2Indeterminate, r.variant === "buffer" && t.bar2Buffer];
  }
})(Ae(({
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
      backgroundColor: ki(e, t),
      transition: `transform .${Go}s linear`
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
    style: Lh || {
      animation: `${Xo} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), Fl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
  }, f = jh(d), y = ul(), E = {}, b = {
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
  return /* @__PURE__ */ R.jsxs(Ah, {
    className: de(f.root, i),
    ownerState: d,
    role: "progressbar",
    ...E,
    ref: r,
    ...u,
    children: [c === "buffer" ? /* @__PURE__ */ R.jsx(Dh, {
      className: f.dashed,
      ownerState: d
    }) : null, /* @__PURE__ */ R.jsx(Fh, {
      className: f.bar1,
      ownerState: d,
      style: b.bar1
    }), c === "determinate" ? null : /* @__PURE__ */ R.jsx(Bh, {
      className: f.bar2,
      ownerState: d,
      style: b.bar2
    })]
  });
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: n.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: n.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const Pn = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Pn.displayName = "ListContext");
function Vh(e) {
  return Ne("MuiList", e);
}
Pe("MuiList", ["root", "padding", "dense", "subheader"]);
const Wh = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: o,
    subheader: i
  } = e;
  return je({
    root: ["root", !r && "padding", o && "dense", i && "subheader"]
  }, Vh, t);
}, zh = se("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
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
}), Bl = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
  }), [l]), y = {
    ...o,
    component: a,
    dense: l,
    disablePadding: c
  }, E = Wh(y);
  return /* @__PURE__ */ R.jsx(Pn.Provider, {
    value: f,
    children: /* @__PURE__ */ R.jsxs(zh, {
      as: a,
      className: de(E.root, s),
      ref: r,
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
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Js = Pe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Qs = Pe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function wo(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function ea(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Vl(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function vr(e, t, r, o, i, s) {
  let a = !1, l = i(e, t, t ? r : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Vl(l, s) || c)
      l = i(e, l, r);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Wl = /* @__PURE__ */ p.forwardRef(function(t, r) {
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
    ...y
  } = t, E = p.useRef(null), b = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  _t(() => {
    i && E.current.focus();
  }, [i]), p.useImperativeHandle(o, () => ({
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
      g.preventDefault(), vr(C, k, u, c, wo);
    else if (h === "ArrowUp")
      g.preventDefault(), vr(C, k, u, c, ea);
    else if (h === "Home")
      g.preventDefault(), vr(C, null, u, c, wo);
    else if (h === "End")
      g.preventDefault(), vr(C, null, u, c, ea);
    else if (h.length === 1) {
      const I = b.current, m = h.toLowerCase(), $ = performance.now();
      I.keys.length > 0 && ($ - I.lastTime > 500 ? (I.keys = [], I.repeating = !0, I.previousKeyMatched = !0) : I.repeating && m !== I.keys[0] && (I.repeating = !1)), I.lastTime = $, I.keys.push(m);
      const D = k && !I.repeating && Vl(k, I);
      I.previousKeyMatched && (D || vr(C, k, !1, c, wo, I)) ? g.preventDefault() : I.previousKeyMatched = !1;
    }
    d && d(g);
  }, v = Ze(E, r);
  let T = -1;
  p.Children.forEach(a, (g, C) => {
    if (!/* @__PURE__ */ p.isValidElement(g)) {
      T === C && (T += 1, T >= a.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ir.isFragment(g) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), g.props.disabled || (f === "selectedMenu" && g.props.selected || T === -1) && (T = C), T === C && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (T += 1, T >= a.length && (T = -1));
  });
  const w = p.Children.map(a, (g, C) => {
    if (C === T) {
      const h = {};
      return s && (h.autoFocus = !0), g.props.tabIndex === void 0 && f === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ p.cloneElement(g, h);
    }
    return g;
  });
  return /* @__PURE__ */ R.jsx(Bl, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: x,
    tabIndex: i ? 0 : -1,
    ...y,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function Uh(e) {
  return Ne("MuiPopover", e);
}
Pe("MuiPopover", ["root", "paper"]);
function ta(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function ra(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function na(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function mn(e) {
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
})({}), zl = se(Ti, {
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
}), Ul = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    TransitionComponent: g = Rn,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: h,
      ...P
    } = {},
    disableScrollLock: k = !1,
    ...I
  } = o, m = T?.paper ?? x, $ = p.useRef(), D = {
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
  }, B = qh(D), q = p.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const W = mn(s), te = W && W.nodeType === 1 ? W : at($.current).body, O = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const oe = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: O.top + ta(O, a.vertical),
      left: O.left + ra(O, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), F = p.useCallback((W) => ({
    vertical: ta(W, w.vertical),
    horizontal: ra(W, w.horizontal)
  }), [w.horizontal, w.vertical]), V = p.useCallback((W) => {
    const te = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, O = F(te);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: na(O)
      };
    const oe = q();
    let L = oe.top - O.vertical, le = oe.left - O.horizontal;
    const ge = L + te.height, Ie = le + te.width, Fe = Ht(mn(s)), Re = Fe.innerHeight - E, Je = Fe.innerWidth - E;
    if (E !== null && L < E) {
      const ae = L - E;
      L -= ae, O.vertical += ae;
    } else if (E !== null && ge > Re) {
      const ae = ge - Re;
      L -= ae, O.vertical += ae;
    }
    if (process.env.NODE_ENV !== "production" && te.height > Re && te.height && Re && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - Re}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), E !== null && le < E) {
      const ae = le - E;
      le -= ae, O.horizontal += ae;
    } else if (Ie > Je) {
      const ae = Ie - Je;
      le -= ae, O.horizontal += ae;
    }
    return {
      top: `${Math.round(L)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: na(O)
    };
  }, [s, c, q, F, E]), [A, U] = p.useState(b), Y = p.useCallback(() => {
    const W = $.current;
    if (!W)
      return;
    const te = V(W);
    te.top !== null && (W.style.top = te.top), te.left !== null && (W.style.left = te.left), W.style.transformOrigin = te.transformOrigin, U(!0);
  }, [V]);
  p.useEffect(() => (k && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [s, k, Y]);
  const ne = (W, te) => {
    h && h(W, te), Y();
  }, N = () => {
    U(!1);
  };
  p.useEffect(() => {
    b && Y();
  }), p.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      Y();
    }
  } : null, [b, Y]), p.useEffect(() => {
    if (!b)
      return;
    const W = Za(() => {
      Y();
    }), te = Ht(s);
    return te.addEventListener("resize", W), () => {
      W.clear(), te.removeEventListener("resize", W);
    };
  }, [s, b, Y]);
  let _ = C;
  C === "auto" && !g.muiSupportAuto && (_ = void 0);
  const Z = f || (s ? at(mn(s)).body : void 0), z = {
    slots: v,
    slotProps: {
      ...T,
      paper: m
    }
  }, [H, J] = ht("paper", {
    elementType: zl,
    externalForwardedProps: z,
    additionalProps: {
      elevation: y,
      className: de(B.paper, m?.className),
      style: A ? m.style : {
        ...m.style,
        opacity: 0
      }
    },
    ownerState: D
  }), [G, {
    slotProps: X,
    ...ee
  }] = ht("root", {
    elementType: Hh,
    externalForwardedProps: z,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Z,
      open: b
    },
    ownerState: D,
    className: de(B.root, d)
  }), Q = Ze($, J.ref);
  return /* @__PURE__ */ R.jsx(G, {
    ...ee,
    ...!qo(G) && {
      slotProps: X,
      disableScrollLock: k
    },
    ...I,
    ref: r,
    children: /* @__PURE__ */ R.jsx(g, {
      appear: !0,
      in: b,
      onEntering: ne,
      onExited: N,
      timeout: _,
      ...P,
      children: /* @__PURE__ */ R.jsx(H, {
        ...J,
        ref: Q,
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
  action: $t,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Yr(n.oneOfType([_r, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = mn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
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
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([_r, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: nl,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: pi
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
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
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
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
}, Zh = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Yh, t);
}, Xh = se(Ul, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Jh = se(zl, {
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
}), Qh = se(Wl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ql = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    PaperProps: f,
    transitionDuration: E,
    TransitionProps: x,
    variant: v
  }, P = Zh(h), k = i && !l && d, I = p.useRef(null), m = (A, U) => {
    I.current && I.current.adjustStyleForScrollbar(A, {
      direction: C ? "rtl" : "ltr"
    }), b && b(A, U);
  }, $ = (A) => {
    A.key === "Tab" && (A.preventDefault(), u && u(A, "tabKeyDown"));
  };
  let D = -1;
  p.Children.map(s, (A, U) => {
    /* @__PURE__ */ p.isValidElement(A) && (process.env.NODE_ENV !== "production" && Ir.isFragment(A) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), A.props.disabled || (v === "selectedMenu" && A.props.selected || D === -1) && (D = U));
  });
  const B = T.paper ?? Jh, q = w.paper ?? f, F = ks({
    elementType: T.root,
    externalSlotProps: w.root,
    ownerState: h,
    className: [P.root, a]
  }), V = ks({
    elementType: B,
    externalSlotProps: q,
    ownerState: h,
    className: P.paper
  });
  return /* @__PURE__ */ R.jsx(Xh, {
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
      root: F,
      paper: V
    },
    open: d,
    ref: r,
    transitionDuration: E,
    TransitionProps: {
      onEntering: m,
      ...x
    },
    ownerState: h,
    ...g,
    classes: y,
    children: /* @__PURE__ */ R.jsx(Qh, {
      onKeyDown: $,
      actions: I,
      autoFocus: i && (D === -1 || l),
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
  anchorEl: n.oneOfType([_r, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function eg(e) {
  return Ne("MuiMenuItem", e);
}
const Er = Pe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), tg = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, rg = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = je({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, eg, a);
  return {
    ...a,
    ...c
  };
}, ng = se(wi, {
  shouldForwardProp: (e) => mt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: tg
})(Ae(({
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
  [`&.${Er.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ft(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Er.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ft(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Er.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ft(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ft(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Er.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Er.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Gs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Gs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Qs.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Qs.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Js.root}`]: {
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
      [`& .${Js.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), hn = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    className: y,
    ...E
  } = o, b = p.useContext(Pn), x = p.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: c
  }), [b.dense, a, c]), v = p.useRef(null);
  _t(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const T = {
    ...o,
    dense: x.dense,
    divider: l,
    disableGutters: c
  }, w = rg(o), g = Ze(v, r);
  let C;
  return o.disabled || (C = f !== void 0 ? f : -1), /* @__PURE__ */ R.jsx(Pn.Provider, {
    value: x,
    children: /* @__PURE__ */ R.jsx(ng, {
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
process.env.NODE_ENV !== "production" && (hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
function og(e) {
  return Ne("MuiNativeSelect", e);
}
const $i = Pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ig = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ue(r)}`, s && "iconOpen", o && "disabled"]
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
      ownerState: r
    } = e;
    return [t.select, t[r.variant], r.error && t.error, {
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
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${ue(r.variant)}`], r.open && t.iconOpen];
  }
})({}), Kl = /* @__PURE__ */ p.forwardRef(function(t, r) {
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
  }, f = ig(d);
  return /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ R.jsx(sg, {
      ownerState: d,
      className: de(f.select, o),
      disabled: i,
      ref: l || r,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ R.jsx(ag, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: $t,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
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
})(Ae(({
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
    classes: r,
    className: o,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ R.jsx(lg, {
    "aria-hidden": !0,
    className: o,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ R.jsx(cg, {
      ownerState: c,
      children: l ? /* @__PURE__ */ R.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        oa || (oa = /* @__PURE__ */ R.jsx("span", {
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
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
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
  overridesResolver: Qn
})(Ae(({
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
    variants: [...Object.entries(e.palette).filter(bt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        [`&.${xt.focused} .${xt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[r].main
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
        ownerState: r
      }) => r.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: r,
        size: o
      }) => r.multiline && o === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), fg = se(Gl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ae(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), pg = se(ro, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: eo
})(Ae(({
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
}))), Br = /* @__PURE__ */ p.forwardRef(function(t, r) {
  var o;
  const i = De({
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
    type: y = "text",
    ...E
  } = i, b = ug(i), x = pr(), v = fr({
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
  }, w = f.root ?? s.Root ?? dg, g = f.input ?? s.Input ?? pg;
  return /* @__PURE__ */ R.jsx(Oi, {
    slots: {
      root: w,
      input: g
    },
    renderSuffix: (C) => /* @__PURE__ */ R.jsx(fg, {
      ownerState: T,
      className: b.notchedOutline,
      label: c != null && c !== "" && v.required ? o || (o = /* @__PURE__ */ R.jsxs(p.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof d < "u" ? d : !!(C.startAdornment || C.filled || C.focused)
    }),
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: r,
    type: y,
    ...E,
    classes: {
      ...b,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (Br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Br && (Br.muiName = "Input");
function mg(e) {
  return Ne("MuiSelect", e);
}
const xr = Pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var ia;
const hg = se(Hl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${xr.select}`]: t.select
      },
      {
        [`&.${xr.select}`]: t[r.variant]
      },
      {
        [`&.${xr.error}`]: t.error
      },
      {
        [`&.${xr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${xr.select}`]: {
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
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${ue(r.variant)}`], r.open && t.iconOpen];
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
    variant: r,
    disabled: o,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, o && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ue(r)}`, s && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return je(l, mg, t);
}, Zl = /* @__PURE__ */ p.forwardRef(function(t, r) {
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
    readOnly: $,
    renderValue: D,
    SelectDisplayProps: B = {},
    tabIndex: q,
    // catching `type` from Input which makes no sense for SelectInput
    type: F,
    value: V,
    variant: A = "standard",
    ...U
  } = t, [Y, ne] = ws({
    controlled: V,
    default: d,
    name: "Select"
  }), [N, _] = ws({
    controlled: m,
    default: u,
    name: "Select"
  }), Z = p.useRef(null), z = p.useRef(null), [H, J] = p.useState(null), {
    current: G
  } = p.useRef(m != null), [X, ee] = p.useState(), Q = Ze(r, x), W = p.useCallback((ie) => {
    z.current = ie, ie && J(ie);
  }, []), te = H?.parentNode;
  p.useImperativeHandle(Q, () => ({
    focus: () => {
      z.current.focus();
    },
    node: Z.current,
    value: Y
  }), [Y]), p.useEffect(() => {
    u && N && H && !G && (ee(a ? null : te.clientWidth), z.current.focus());
  }, [H, a]), p.useEffect(() => {
    s && z.current.focus();
  }, [s]), p.useEffect(() => {
    if (!v)
      return;
    const ie = at(z.current).getElementById(v);
    if (ie) {
      const me = () => {
        getSelection().isCollapsed && z.current.focus();
      };
      return ie.addEventListener("click", me), () => {
        ie.removeEventListener("click", me);
      };
    }
  }, [v]);
  const O = (ie, me) => {
    ie ? I && I(me) : P && P(me), G || (ee(a ? null : te.clientWidth), _(ie));
  }, oe = (ie) => {
    ie.button === 0 && (ie.preventDefault(), z.current.focus(), O(!0, ie));
  }, L = (ie) => {
    O(!1, ie);
  }, le = p.Children.toArray(l), ge = (ie) => {
    const me = le.find((Ye) => Ye.props.value === ie.target.value);
    me !== void 0 && (ne(me.props.value), h && h(ie, me));
  }, Ie = (ie) => (me) => {
    let Ye;
    if (me.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        Ye = Array.isArray(Y) ? Y.slice() : [];
        const It = Y.indexOf(ie.props.value);
        It === -1 ? Ye.push(ie.props.value) : Ye.splice(It, 1);
      } else
        Ye = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(me), Y !== Ye && (ne(Ye), h)) {
        const It = me.nativeEvent || me, Zr = new It.constructor(It.type, It);
        Object.defineProperty(Zr, "target", {
          writable: !0,
          value: {
            value: Ye,
            name: g
          }
        }), h(Zr, ie);
      }
      w || O(!1, me);
    }
  }, Fe = (ie) => {
    $ || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ie.key) && (ie.preventDefault(), O(!0, ie));
  }, Re = H !== null && N, Je = (ie) => {
    !Re && C && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: Y,
        name: g
      }
    }), C(ie));
  };
  delete U["aria-invalid"];
  let ae, fe;
  const re = [];
  let Be = !1, tt = !1;
  (wn({
    value: Y
  }) || y) && (D ? ae = D(Y) : Be = !0);
  const ot = le.map((ie) => {
    if (!/* @__PURE__ */ p.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && Ir.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let me;
    if (w) {
      if (!Array.isArray(Y))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ot(2));
      me = Y.some((Ye) => sa(Ye, ie.props.value)), me && Be && re.push(ie.props.children);
    } else
      me = sa(Y, ie.props.value), me && Be && (fe = ie.props.children);
    return me && (tt = !0), /* @__PURE__ */ p.cloneElement(ie, {
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
  process.env.NODE_ENV !== "production" && p.useEffect(() => {
    if (!tt && !w && Y !== "") {
      const ie = le.map((me) => me.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${Y}\` for the select ${g ? `(name="${g}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((me) => me != null).map((me) => `\`${me}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [tt, le, w, g, Y]), Be && (w ? re.length === 0 ? ae = null : ae = re.reduce((ie, me, Ye) => (ie.push(me), Ye < re.length - 1 && ie.push(", "), ie), []) : ae = fe);
  let lt = X;
  !a && G && H && (lt = te.clientWidth);
  let Mt;
  typeof q < "u" ? Mt = q : Mt = f ? null : 0;
  const Pt = B.id || (g ? `mui-component-select-${g}` : void 0), vt = {
    ...t,
    variant: A,
    value: Y,
    open: Re,
    error: E
  }, ye = vg(vt), Nt = {
    ...T.PaperProps,
    ...T.slotProps?.paper
  }, Dt = Xa();
  return /* @__PURE__ */ R.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ R.jsx(hg, {
      as: "div",
      ref: W,
      tabIndex: Mt,
      role: "combobox",
      "aria-controls": Dt,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Re ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, Pt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Fe,
      onMouseDown: f || $ ? null : oe,
      onBlur: Je,
      onFocus: k,
      ...B,
      ownerState: vt,
      className: de(B.className, ye.select, c),
      id: Pt,
      children: bg(ae) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ia || (ia = /* @__PURE__ */ R.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ae
    }), /* @__PURE__ */ R.jsx(yg, {
      "aria-invalid": E,
      value: Array.isArray(Y) ? Y.join(",") : Y,
      name: g,
      ref: Z,
      "aria-hidden": !0,
      onChange: ge,
      tabIndex: -1,
      disabled: f,
      className: ye.nativeInput,
      autoFocus: s,
      ...U,
      ownerState: vt
    }), /* @__PURE__ */ R.jsx(gg, {
      as: b,
      className: ye.icon,
      ownerState: vt
    }), /* @__PURE__ */ R.jsx(ql, {
      id: `menu-${g || ""}`,
      anchorEl: te,
      open: Re,
      onClose: L,
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
        id: Dt,
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
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: $t,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const Eg = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Mi = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => mt(e) && e !== "variant",
  slot: "Root"
}, xg = se(Fr, Mi)(""), Sg = se(Br, Mi)(""), Cg = se(Dr, Mi)(""), no = /* @__PURE__ */ p.forwardRef(function(t, r) {
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
    IconComponent: d = Mm,
    id: f,
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
  } = o, $ = w ? Kl : Zl, D = pr(), B = fr({
    props: o,
    muiFormControl: D,
    states: ["variant", "error"]
  }), q = B.variant || I, F = {
    ...o,
    variant: q,
    classes: a
  }, V = Eg(F), {
    root: A,
    ...U
  } = V, Y = y || {
    standard: /* @__PURE__ */ R.jsx(xg, {
      ownerState: F
    }),
    outlined: /* @__PURE__ */ R.jsx(Sg, {
      label: b,
      ownerState: F
    }),
    filled: /* @__PURE__ */ R.jsx(Cg, {
      ownerState: F
    })
  }[q], ne = Ze(r, Gr(Y));
  return /* @__PURE__ */ R.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(Y, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: $,
      inputProps: {
        children: s,
        error: B.error,
        IconComponent: d,
        variant: q,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T,
        ...w ? {
          id: f
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
            id: f,
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
      ref: ne,
      className: de(Y.props.className, l, V.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: q
      },
      ...m
    })
  });
});
process.env.NODE_ENV !== "production" && (no.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
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
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
no.muiName = "Select";
const Pr = lp({
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
process.env.NODE_ENV !== "production" && (Pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * Add an element between each child.
   */
  divider: n.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: n.bool
});
function Tg(e) {
  return Ne("MuiTextField", e);
}
Pe("MuiTextField", ["root"]);
const wg = {
  standard: Fr,
  filled: Dr,
  outlined: Br
}, Og = (e) => {
  const {
    classes: t
  } = e;
  return je({
    root: ["root"]
  }, Tg, t);
}, Rg = se(Ri, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qo = /* @__PURE__ */ p.forwardRef(function(t, r) {
  const o = De({
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
    onChange: $,
    onFocus: D,
    placeholder: B,
    required: q = !1,
    rows: F,
    select: V = !1,
    SelectProps: A,
    slots: U = {},
    slotProps: Y = {},
    type: ne,
    value: N,
    variant: _ = "outlined",
    ...Z
  } = o, z = {
    ...o,
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: E,
    multiline: k,
    required: q,
    select: V,
    variant: _
  }, H = Og(z);
  process.env.NODE_ENV !== "production" && V && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const J = Xa(x), G = b && J ? `${J}-helper-text` : void 0, X = C && J ? `${J}-label` : void 0, ee = wg[_], Q = {
    slots: U,
    slotProps: {
      input: w,
      inputLabel: v,
      htmlInput: T,
      formHelperText: y,
      select: A,
      ...Y
    }
  }, W = {}, te = Q.slotProps.inputLabel;
  _ === "outlined" && (te && typeof te.shrink < "u" && (W.notched = te.shrink), W.label = C), V && ((!A || !A.native) && (W.id = void 0), W["aria-describedby"] = void 0);
  const [O, oe] = ht("input", {
    elementType: ee,
    externalForwardedProps: Q,
    additionalProps: W,
    ownerState: z
  }), [L, le] = ht("inputLabel", {
    elementType: Pi,
    externalForwardedProps: Q,
    ownerState: z
  }), [ge, Ie] = ht("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: z
  }), [Fe, Re] = ht("formHelperText", {
    elementType: Al,
    externalForwardedProps: Q,
    ownerState: z
  }), [Je, ae] = ht("select", {
    elementType: no,
    externalForwardedProps: Q,
    ownerState: z
  }), fe = /* @__PURE__ */ R.jsx(O, {
    "aria-describedby": G,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: E,
    multiline: k,
    name: I,
    rows: F,
    maxRows: h,
    minRows: P,
    type: ne,
    value: N,
    id: J,
    inputRef: g,
    onBlur: m,
    onChange: $,
    onFocus: D,
    placeholder: B,
    inputProps: Ie,
    slots: {
      input: U.htmlInput ? ge : void 0
    },
    ...oe
  });
  return /* @__PURE__ */ R.jsxs(Rg, {
    className: de(H.root, l),
    disabled: d,
    error: f,
    fullWidth: E,
    ref: r,
    required: q,
    color: c,
    variant: _,
    ownerState: z,
    ...Z,
    children: [C != null && C !== "" && /* @__PURE__ */ R.jsx(L, {
      htmlFor: J,
      id: X,
      ...le,
      children: C
    }), V ? /* @__PURE__ */ R.jsx(Je, {
      "aria-describedby": G,
      id: J,
      labelId: X,
      value: N,
      input: fe,
      ...ae,
      children: a
    }) : fe, b && /* @__PURE__ */ R.jsx(Fe, {
      id: G,
      ...Re,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: $t,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    formHelperText: n.oneOfType([n.func, n.object]),
    htmlInput: n.oneOfType([n.func, n.object]),
    input: n.oneOfType([n.func, n.object]),
    inputLabel: n.oneOfType([n.func, n.object]),
    select: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    formHelperText: n.elementType,
    htmlInput: n.elementType,
    input: n.elementType,
    inputLabel: n.elementType,
    select: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Xl = aa({
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
  return /* @__PURE__ */ R.jsx(Xl.Provider, { value: e, children: t });
}
function kg() {
  return ei(Xl);
}
function $g() {
  const [e, t] = Fi(!1), [r] = Fi(kg());
  function o(a) {
    if (a === 0)
      console.log("WL Ready"), t(!0);
    else
      throw t(!1), new Error(`wolframscript returned code: ${a}`);
  }
  Bi(() => {
    r.ipc.on("wl-status", (a) => {
      o(a), console.log("wl-status effect:", e);
    });
  });
  async function i(a, l = {}, c = 4848) {
    return new Promise((u, d) => {
      try {
        r.ipc.send("req", [a, l, c]), r.ipc.once("req", (f) => {
          console.log("Received response:", f), u(f);
        });
      } catch (f) {
        d(f);
      }
    });
  }
  const s = fc(async () => {
    const a = await i("aliveQ", {}, 8888);
    console.log("aliveQ res:", a), t(a === "True");
  }, [e, t]);
  return Bi(() => {
    const a = setInterval(() => {
      s();
    }, 15e3);
    return () => clearInterval(a);
  }, [s, e]), {
    isActive: e,
    req: i
  };
}
const Jl = aa({
  isActive: !1,
  req: async () => {
  }
});
function Mg({ children: e }) {
  const t = $g();
  return /* @__PURE__ */ R.jsx(Jl.Provider, { value: t, children: e });
}
function Ql() {
  return ei(Jl);
}
function Ng() {
  const e = Ql(), [t, r] = et.useState("Python"), [o, i] = et.useState(""), [s, a] = et.useState(""), [l, c] = et.useState(null), u = (b) => {
    r(b.target.value);
  }, d = (b) => {
    i(b.target.value);
  }, f = async () => {
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
  return /* @__PURE__ */ R.jsxs(
    Pr,
    {
      className: "Hello",
      direction: "column",
      spacing: 2,
      sx: { textAlign: "center", alignContent: "center" },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ R.jsx(wl, { variant: "h2", children: "Electron + ReactTS + WolframLanguage" }),
        /* @__PURE__ */ R.jsxs(Pr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ R.jsx(
            Qo,
            {
              variant: "filled",
              label: "WL Input",
              color: "primary",
              sx: { width: 450 },
              onChange: E
            }
          ),
          /* @__PURE__ */ R.jsx(
            Ho,
            {
              variant: "contained",
              onClick: y,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        /* @__PURE__ */ R.jsxs(Pr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ R.jsxs(Ri, { children: [
            /* @__PURE__ */ R.jsx(Pi, { id: "evaluator-label", children: "Evaluator" }),
            /* @__PURE__ */ R.jsxs(
              no,
              {
                labelId: "evaluator-label",
                label: "Evaluator",
                sx: { width: 130 },
                value: t,
                onChange: u,
                children: [
                  /* @__PURE__ */ R.jsx(hn, { value: "Python", children: "Python" }),
                  /* @__PURE__ */ R.jsx(hn, { value: "NodeJS", children: "NodeJS" }),
                  /* @__PURE__ */ R.jsx(hn, { value: "Shell", children: "Shell" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ R.jsx(
            Qo,
            {
              variant: "filled",
              label: "External Input",
              color: "primary",
              sx: { width: 300 },
              onChange: d
            }
          ),
          /* @__PURE__ */ R.jsx(
            Ho,
            {
              variant: "contained",
              onClick: f,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        l && typeof l != "object" ? /* @__PURE__ */ R.jsx(Ti, { sx: { maxWidth: "50%", p: 2 }, variant: "outlined", children: l }) : null
      ]
    }
  );
}
const Ig = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "1em", height: "1em", viewBox: "0 0 11 14", ...e }, /* @__PURE__ */ p.createElement("defs", null, /* @__PURE__ */ p.createElement("clipPath", { id: "clip1" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 2.398438 L 10.800781 2.398438 L 10.800781 13.679688 L 0.238281 13.679688 Z M 0.238281 2.398438 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip2" }, /* @__PURE__ */ p.createElement("path", { d: "M 7 7 L 10.800781 7 L 10.800781 10 L 7 10 Z M 7 7 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip3" }, /* @__PURE__ */ p.createElement("path", { d: "M 6 5 L 10.800781 5 L 10.800781 9 L 6 9 Z M 6 5 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip4" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 5 L 4 5 L 4 9 L 0.238281 9 Z M 0.238281 5 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip5" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 7 L 4 7 L 4 10 L 0.238281 10 Z M 0.238281 7 " })), /* @__PURE__ */ p.createElement("clipPath", { id: "clip6" }, /* @__PURE__ */ p.createElement("path", { d: "M 0.238281 8 L 5 8 L 5 11 L 0.238281 11 Z M 0.238281 8 " }))), /* @__PURE__ */ p.createElement("g", { id: "surface46" }, /* @__PURE__ */ p.createElement("g", { clipPath: "url(#clip1)", clipRule: "nonzero" }, /* @__PURE__ */ p.createElement("path", { style: {
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
function Lg() {
  return /* @__PURE__ */ R.jsxs(
    Pr,
    {
      className: "main",
      direction: "column",
      spacing: 2,
      sx: {
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ R.jsx(Ig, { style: { width: "220px", height: "auto" } }),
        /* @__PURE__ */ R.jsx($l, { sx: { width: "150%", minWidth: "200px" }, children: /* @__PURE__ */ R.jsx(Fl, {}) })
      ]
    }
  );
}
const _g = Zn({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee0915"
    }
  }
});
function jg() {
  return Ql().isActive ? /* @__PURE__ */ R.jsx(Jc, { children: /* @__PURE__ */ R.jsx(eu, { children: /* @__PURE__ */ R.jsx(ga, { path: "/", element: /* @__PURE__ */ R.jsx(Ng, {}) }) }) }) : /* @__PURE__ */ R.jsx(Lg, {});
}
function Vg({ api: e }) {
  return /* @__PURE__ */ R.jsxs(Bp, { theme: _g, children: [
    /* @__PURE__ */ R.jsx(_l, {}),
    /* @__PURE__ */ R.jsx(Pg, { api: e, children: /* @__PURE__ */ R.jsx(Mg, { children: /* @__PURE__ */ R.jsx(jg, {}) }) })
  ] });
}
export {
  Vg as Frontend,
  Mg as WLProvider,
  Ql as useWL
};
//# sourceMappingURL=index.es.js.map

var Tu = Object.defineProperty;
var Ru = (e, t, r) => t in e ? Tu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Xo = (e, t, r) => Ru(e, typeof t != "symbol" ? t + "" : t, r);
import * as h from "react";
import rt, { createContext as Cu, Children as Nu, isValidElement as An, cloneElement as In, forwardRef as $u, useContext as bl, useState as _u, useEffect as Ms, useCallback as ju } from "react";
import * as Pu from "react-dom";
import yr from "react-dom";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var mi = { exports: {} }, Mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function Lu() {
  if (As) return Mr;
  As = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, p) {
    var d, f = {}, m = null, S = null;
    p !== void 0 && (m = "" + p), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (S = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: S, props: f, _owner: i.current };
  }
  return Mr.Fragment = r, Mr.jsx = a, Mr.jsxs = a, Mr;
}
var Ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function Mu() {
  return Is || (Is = 1, process.env.NODE_ENV !== "production" && function() {
    var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
    function E(u) {
      if (u === null || typeof u != "object")
        return null;
      var k = b && u[b] || u[x];
      return typeof k == "function" ? k : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var k = arguments.length, C = new Array(k > 1 ? k - 1 : 0), V = 1; V < k; V++)
          C[V - 1] = arguments[V];
        v("error", u, C);
      }
    }
    function v(u, k, C) {
      {
        var V = O.ReactDebugCurrentFrame, oe = V.getStackAddendum();
        oe !== "" && (k += "%s", C = C.concat([oe]));
        var ce = C.map(function(Q) {
          return String(Q);
        });
        ce.unshift("Warning: " + k), Function.prototype.apply.call(console[u], console, ce);
      }
    }
    var T = !1, g = !1, $ = !1, A = !1, D = !1, y;
    y = Symbol.for("react.module.reference");
    function j(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === s || D || u === i || u === p || u === d || A || u === S || T || g || $ || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === f || u.$$typeof === a || u.$$typeof === l || u.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === y || u.getModuleId !== void 0));
    }
    function I(u, k, C) {
      var V = u.displayName;
      if (V)
        return V;
      var oe = k.displayName || k.name || "";
      return oe !== "" ? C + "(" + oe + ")" : C;
    }
    function B(u) {
      return u.displayName || "Context";
    }
    function L(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var k = u;
            return B(k) + ".Consumer";
          case a:
            var C = u;
            return B(C._context) + ".Provider";
          case c:
            return I(u, u.render, "ForwardRef");
          case f:
            var V = u.displayName || null;
            return V !== null ? V : L(u.type) || "Memo";
          case m: {
            var oe = u, ce = oe._payload, Q = oe._init;
            try {
              return L(Q(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, q = 0, te, ae, X, be, _, W, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function Y() {
      {
        if (q === 0) {
          te = console.log, ae = console.info, X = console.warn, be = console.error, _ = console.group, W = console.groupCollapsed, K = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        q++;
      }
    }
    function re() {
      {
        if (q--, q === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, u, {
              value: te
            }),
            info: M({}, u, {
              value: ae
            }),
            warn: M({}, u, {
              value: X
            }),
            error: M({}, u, {
              value: be
            }),
            group: M({}, u, {
              value: _
            }),
            groupCollapsed: M({}, u, {
              value: W
            }),
            groupEnd: M({}, u, {
              value: K
            })
          });
        }
        q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, ee;
    function Z(u, k, C) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (oe) {
            var V = oe.stack.trim().match(/\n( *(at )?)/);
            ee = V && V[1] || "";
          }
        return `
` + ee + u;
      }
    }
    var H = !1, U;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ne();
    }
    function R(u, k) {
      if (!u || H)
        return "";
      {
        var C = U.get(u);
        if (C !== void 0)
          return C;
      }
      var V;
      H = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = J.current, J.current = null, Y();
      try {
        if (k) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (_e) {
              V = _e;
            }
            Reflect.construct(u, [], Q);
          } else {
            try {
              Q.call();
            } catch (_e) {
              V = _e;
            }
            u.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            V = _e;
          }
          u();
        }
      } catch (_e) {
        if (_e && V && typeof _e.stack == "string") {
          for (var G = _e.stack.split(`
`), ke = V.stack.split(`
`), de = G.length - 1, fe = ke.length - 1; de >= 1 && fe >= 0 && G[de] !== ke[fe]; )
            fe--;
          for (; de >= 1 && fe >= 0; de--, fe--)
            if (G[de] !== ke[fe]) {
              if (de !== 1 || fe !== 1)
                do
                  if (de--, fe--, fe < 0 || G[de] !== ke[fe]) {
                    var Ve = `
` + G[de].replace(" at new ", " at ");
                    return u.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", u.displayName)), typeof u == "function" && U.set(u, Ve), Ve;
                  }
                while (de >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = ce, re(), Error.prepareStackTrace = oe;
      }
      var ht = u ? u.displayName || u.name : "", ct = ht ? Z(ht) : "";
      return typeof u == "function" && U.set(u, ct), ct;
    }
    function se(u, k, C) {
      return R(u, !1);
    }
    function F(u) {
      var k = u.prototype;
      return !!(k && k.isReactComponent);
    }
    function me(u, k, C) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return R(u, F(u));
      if (typeof u == "string")
        return Z(u);
      switch (u) {
        case p:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            return se(u.render);
          case f:
            return me(u.type, k, C);
          case m: {
            var V = u, oe = V._payload, ce = V._init;
            try {
              return me(ce(oe), k, C);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, ye = {}, De = O.ReactDebugCurrentFrame;
    function Fe(u) {
      if (u) {
        var k = u._owner, C = me(u.type, u._source, k ? k.type : null);
        De.setExtraStackFrame(C);
      } else
        De.setExtraStackFrame(null);
    }
    function Ee(u, k, C, V, oe) {
      {
        var ce = Function.call.bind(we);
        for (var Q in u)
          if (ce(u, Q)) {
            var G = void 0;
            try {
              if (typeof u[Q] != "function") {
                var ke = Error((V || "React class") + ": " + C + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              G = u[Q](k, Q, V, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              G = de;
            }
            G && !(G instanceof Error) && (Fe(oe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", C, Q, typeof G), Fe(null)), G instanceof Error && !(G.message in ye) && (ye[G.message] = !0, Fe(oe), w("Failed %s type: %s", C, G.message), Fe(null));
          }
      }
    }
    var He = Array.isArray;
    function ie(u) {
      return He(u);
    }
    function We(u) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, C = k && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return C;
      }
    }
    function at(u) {
      try {
        return ge(u), !1;
      } catch {
        return !0;
      }
    }
    function ge(u) {
      return "" + u;
    }
    function Oe(u) {
      if (at(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(u)), ge(u);
    }
    var Xe = O.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ve, pt;
    pt = {};
    function Nt(u) {
      if (we.call(u, "ref")) {
        var k = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function ir(u) {
      if (we.call(u, "key")) {
        var k = Object.getOwnPropertyDescriptor(u, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function le(u, k) {
      if (typeof u.ref == "string" && Xe.current && k && Xe.current.stateNode !== k) {
        var C = L(Xe.current.type);
        pt[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Xe.current.type), u.ref), pt[C] = !0);
      }
    }
    function Se(u, k) {
      {
        var C = function() {
          lt || (lt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Je(u, k) {
      {
        var C = function() {
          ve || (ve = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var $t = function(u, k, C, V, oe, ce, Q) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: k,
        ref: C,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function sr(u, k, C, V, oe) {
      {
        var ce, Q = {}, G = null, ke = null;
        C !== void 0 && (Oe(C), G = "" + C), ir(k) && (Oe(k.key), G = "" + k.key), Nt(k) && (ke = k.ref, le(k, oe));
        for (ce in k)
          we.call(k, ce) && !ut.hasOwnProperty(ce) && (Q[ce] = k[ce]);
        if (u && u.defaultProps) {
          var de = u.defaultProps;
          for (ce in de)
            Q[ce] === void 0 && (Q[ce] = de[ce]);
        }
        if (G || ke) {
          var fe = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          G && Se(Q, fe), ke && Je(Q, fe);
        }
        return $t(u, G, ke, oe, V, Xe.current, Q);
      }
    }
    var Yt = O.ReactCurrentOwner, Cr = O.ReactDebugCurrentFrame;
    function ft(u) {
      if (u) {
        var k = u._owner, C = me(u.type, u._source, k ? k.type : null);
        Cr.setExtraStackFrame(C);
      } else
        Cr.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Xt(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Nr() {
      {
        if (Yt.current) {
          var u = L(Yt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Bo(u) {
      return "";
    }
    var $r = {};
    function Fo(u) {
      {
        var k = Nr();
        if (!k) {
          var C = typeof u == "string" ? u : u.displayName || u.name;
          C && (k = `

Check the top-level render call using <` + C + ">.");
        }
        return k;
      }
    }
    function _r(u, k) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var C = Fo(k);
        if ($r[C])
          return;
        $r[C] = !0;
        var V = "";
        u && u._owner && u._owner !== Yt.current && (V = " It was passed a child from " + L(u._owner.type) + "."), ft(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, V), ft(null);
      }
    }
    function jr(u, k) {
      {
        if (typeof u != "object")
          return;
        if (ie(u))
          for (var C = 0; C < u.length; C++) {
            var V = u[C];
            Xt(V) && _r(V, k);
          }
        else if (Xt(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var oe = E(u);
          if (typeof oe == "function" && oe !== u.entries)
            for (var ce = oe.call(u), Q; !(Q = ce.next()).done; )
              Xt(Q.value) && _r(Q.value, k);
        }
      }
    }
    function Vo(u) {
      {
        var k = u.type;
        if (k == null || typeof k == "string")
          return;
        var C;
        if (typeof k == "function")
          C = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === f))
          C = k.propTypes;
        else
          return;
        if (C) {
          var V = L(k);
          Ee(C, u.props, "prop", V, u);
        } else if (k.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var oe = L(k);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wo(u) {
      {
        for (var k = Object.keys(u.props), C = 0; C < k.length; C++) {
          var V = k[C];
          if (V !== "children" && V !== "key") {
            ft(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), ft(null);
            break;
          }
        }
        u.ref !== null && (ft(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var Pr = {};
    function Lr(u, k, C, V, oe, ce) {
      {
        var Q = j(u);
        if (!Q) {
          var G = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Bo();
          ke ? G += ke : G += Nr();
          var de;
          u === null ? de = "null" : ie(u) ? de = "array" : u !== void 0 && u.$$typeof === t ? (de = "<" + (L(u.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : de = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, G);
        }
        var fe = sr(u, k, C, oe, ce);
        if (fe == null)
          return fe;
        if (Q) {
          var Ve = k.children;
          if (Ve !== void 0)
            if (V)
              if (ie(Ve)) {
                for (var ht = 0; ht < Ve.length; ht++)
                  jr(Ve[ht], u);
                Object.freeze && Object.freeze(Ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(Ve, u);
        }
        if (we.call(k, "key")) {
          var ct = L(u), _e = Object.keys(k).filter(function(Ko) {
            return Ko !== "key";
          }), Gt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[ct + Gt]) {
            var Yo = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, ct, Yo, ct), Pr[ct + Gt] = !0;
          }
        }
        return u === n ? Wo(fe) : Vo(fe), fe;
      }
    }
    function zo(u, k, C) {
      return Lr(u, k, C, !0);
    }
    function qo(u, k, C) {
      return Lr(u, k, C, !1);
    }
    var Uo = qo, Ho = zo;
    Ar.Fragment = n, Ar.jsx = Uo, Ar.jsxs = Ho;
  }()), Ar;
}
process.env.NODE_ENV === "production" ? mi.exports = Lu() : mi.exports = Mu();
var Ds = mi.exports, yi, xn = yr;
if (process.env.NODE_ENV === "production")
  yi = xn.createRoot, xn.hydrateRoot;
else {
  var Bs = xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yi = function(e, t) {
    Bs.usingClientEntryPoint = !0;
    try {
      return xn.createRoot(e, t);
    } finally {
      Bs.usingClientEntryPoint = !1;
    }
  };
}
var Au = Object.defineProperty, Iu = (e, t, r) => t in e ? Au(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Dn = (e, t, r) => Iu(e, typeof t != "symbol" ? t + "" : t, r);
function Du(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} }, Ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function Bu() {
  if (Fs) return Ir;
  Fs = 1;
  var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, p) {
    var d, f = {}, m = null, S = null;
    p !== void 0 && (m = "" + p), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (S = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: S, props: f, _owner: i.current };
  }
  return Ir.Fragment = r, Ir.jsx = a, Ir.jsxs = a, Ir;
}
var wn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function Fu() {
  return Vs || (Vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = rt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
    function E(u) {
      if (u === null || typeof u != "object")
        return null;
      var k = b && u[b] || u[x];
      return typeof k == "function" ? k : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(u) {
      {
        for (var k = arguments.length, C = new Array(k > 1 ? k - 1 : 0), V = 1; V < k; V++)
          C[V - 1] = arguments[V];
        v("error", u, C);
      }
    }
    function v(u, k, C) {
      {
        var V = O.ReactDebugCurrentFrame, oe = V.getStackAddendum();
        oe !== "" && (k += "%s", C = C.concat([oe]));
        var ce = C.map(function(Q) {
          return String(Q);
        });
        ce.unshift("Warning: " + k), Function.prototype.apply.call(console[u], console, ce);
      }
    }
    var T = !1, g = !1, $ = !1, A = !1, D = !1, y;
    y = Symbol.for("react.module.reference");
    function j(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === s || D || u === i || u === p || u === d || A || u === S || T || g || $ || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === f || u.$$typeof === a || u.$$typeof === l || u.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === y || u.getModuleId !== void 0));
    }
    function I(u, k, C) {
      var V = u.displayName;
      if (V)
        return V;
      var oe = k.displayName || k.name || "";
      return oe !== "" ? C + "(" + oe + ")" : C;
    }
    function B(u) {
      return u.displayName || "Context";
    }
    function L(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            var k = u;
            return B(k) + ".Consumer";
          case a:
            var C = u;
            return B(C._context) + ".Provider";
          case c:
            return I(u, u.render, "ForwardRef");
          case f:
            var V = u.displayName || null;
            return V !== null ? V : L(u.type) || "Memo";
          case m: {
            var oe = u, ce = oe._payload, Q = oe._init;
            try {
              return L(Q(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, q = 0, te, ae, X, be, _, W, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function Y() {
      {
        if (q === 0) {
          te = console.log, ae = console.info, X = console.warn, be = console.error, _ = console.group, W = console.groupCollapsed, K = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        q++;
      }
    }
    function re() {
      {
        if (q--, q === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, u, {
              value: te
            }),
            info: M({}, u, {
              value: ae
            }),
            warn: M({}, u, {
              value: X
            }),
            error: M({}, u, {
              value: be
            }),
            group: M({}, u, {
              value: _
            }),
            groupCollapsed: M({}, u, {
              value: W
            }),
            groupEnd: M({}, u, {
              value: K
            })
          });
        }
        q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, ee;
    function Z(u, k, C) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (oe) {
            var V = oe.stack.trim().match(/\n( *(at )?)/);
            ee = V && V[1] || "";
          }
        return `
` + ee + u;
      }
    }
    var H = !1, U;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ne();
    }
    function R(u, k) {
      if (!u || H)
        return "";
      {
        var C = U.get(u);
        if (C !== void 0)
          return C;
      }
      var V;
      H = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = J.current, J.current = null, Y();
      try {
        if (k) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (_e) {
              V = _e;
            }
            Reflect.construct(u, [], Q);
          } else {
            try {
              Q.call();
            } catch (_e) {
              V = _e;
            }
            u.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            V = _e;
          }
          u();
        }
      } catch (_e) {
        if (_e && V && typeof _e.stack == "string") {
          for (var G = _e.stack.split(`
`), ke = V.stack.split(`
`), de = G.length - 1, fe = ke.length - 1; de >= 1 && fe >= 0 && G[de] !== ke[fe]; )
            fe--;
          for (; de >= 1 && fe >= 0; de--, fe--)
            if (G[de] !== ke[fe]) {
              if (de !== 1 || fe !== 1)
                do
                  if (de--, fe--, fe < 0 || G[de] !== ke[fe]) {
                    var Ve = `
` + G[de].replace(" at new ", " at ");
                    return u.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", u.displayName)), typeof u == "function" && U.set(u, Ve), Ve;
                  }
                while (de >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = ce, re(), Error.prepareStackTrace = oe;
      }
      var ht = u ? u.displayName || u.name : "", ct = ht ? Z(ht) : "";
      return typeof u == "function" && U.set(u, ct), ct;
    }
    function se(u, k, C) {
      return R(u, !1);
    }
    function F(u) {
      var k = u.prototype;
      return !!(k && k.isReactComponent);
    }
    function me(u, k, C) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return R(u, F(u));
      if (typeof u == "string")
        return Z(u);
      switch (u) {
        case p:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            return se(u.render);
          case f:
            return me(u.type, k, C);
          case m: {
            var V = u, oe = V._payload, ce = V._init;
            try {
              return me(ce(oe), k, C);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, ye = {}, De = O.ReactDebugCurrentFrame;
    function Fe(u) {
      if (u) {
        var k = u._owner, C = me(u.type, u._source, k ? k.type : null);
        De.setExtraStackFrame(C);
      } else
        De.setExtraStackFrame(null);
    }
    function Ee(u, k, C, V, oe) {
      {
        var ce = Function.call.bind(we);
        for (var Q in u)
          if (ce(u, Q)) {
            var G = void 0;
            try {
              if (typeof u[Q] != "function") {
                var ke = Error((V || "React class") + ": " + C + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              G = u[Q](k, Q, V, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              G = de;
            }
            G && !(G instanceof Error) && (Fe(oe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", C, Q, typeof G), Fe(null)), G instanceof Error && !(G.message in ye) && (ye[G.message] = !0, Fe(oe), w("Failed %s type: %s", C, G.message), Fe(null));
          }
      }
    }
    var He = Array.isArray;
    function ie(u) {
      return He(u);
    }
    function We(u) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, C = k && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return C;
      }
    }
    function at(u) {
      try {
        return ge(u), !1;
      } catch {
        return !0;
      }
    }
    function ge(u) {
      return "" + u;
    }
    function Oe(u) {
      if (at(u))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(u)), ge(u);
    }
    var Xe = O.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ve, pt;
    pt = {};
    function Nt(u) {
      if (we.call(u, "ref")) {
        var k = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function ir(u) {
      if (we.call(u, "key")) {
        var k = Object.getOwnPropertyDescriptor(u, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function le(u, k) {
      if (typeof u.ref == "string" && Xe.current && k && Xe.current.stateNode !== k) {
        var C = L(Xe.current.type);
        pt[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Xe.current.type), u.ref), pt[C] = !0);
      }
    }
    function Se(u, k) {
      {
        var C = function() {
          lt || (lt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Je(u, k) {
      {
        var C = function() {
          ve || (ve = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        C.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var $t = function(u, k, C, V, oe, ce, Q) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: k,
        ref: C,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function sr(u, k, C, V, oe) {
      {
        var ce, Q = {}, G = null, ke = null;
        C !== void 0 && (Oe(C), G = "" + C), ir(k) && (Oe(k.key), G = "" + k.key), Nt(k) && (ke = k.ref, le(k, oe));
        for (ce in k)
          we.call(k, ce) && !ut.hasOwnProperty(ce) && (Q[ce] = k[ce]);
        if (u && u.defaultProps) {
          var de = u.defaultProps;
          for (ce in de)
            Q[ce] === void 0 && (Q[ce] = de[ce]);
        }
        if (G || ke) {
          var fe = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          G && Se(Q, fe), ke && Je(Q, fe);
        }
        return $t(u, G, ke, oe, V, Xe.current, Q);
      }
    }
    var Yt = O.ReactCurrentOwner, Cr = O.ReactDebugCurrentFrame;
    function ft(u) {
      if (u) {
        var k = u._owner, C = me(u.type, u._source, k ? k.type : null);
        Cr.setExtraStackFrame(C);
      } else
        Cr.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Xt(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Nr() {
      {
        if (Yt.current) {
          var u = L(Yt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Bo(u) {
      return "";
    }
    var $r = {};
    function Fo(u) {
      {
        var k = Nr();
        if (!k) {
          var C = typeof u == "string" ? u : u.displayName || u.name;
          C && (k = `

Check the top-level render call using <` + C + ">.");
        }
        return k;
      }
    }
    function _r(u, k) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var C = Fo(k);
        if ($r[C])
          return;
        $r[C] = !0;
        var V = "";
        u && u._owner && u._owner !== Yt.current && (V = " It was passed a child from " + L(u._owner.type) + "."), ft(u), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, V), ft(null);
      }
    }
    function jr(u, k) {
      {
        if (typeof u != "object")
          return;
        if (ie(u))
          for (var C = 0; C < u.length; C++) {
            var V = u[C];
            Xt(V) && _r(V, k);
          }
        else if (Xt(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var oe = E(u);
          if (typeof oe == "function" && oe !== u.entries)
            for (var ce = oe.call(u), Q; !(Q = ce.next()).done; )
              Xt(Q.value) && _r(Q.value, k);
        }
      }
    }
    function Vo(u) {
      {
        var k = u.type;
        if (k == null || typeof k == "string")
          return;
        var C;
        if (typeof k == "function")
          C = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === f))
          C = k.propTypes;
        else
          return;
        if (C) {
          var V = L(k);
          Ee(C, u.props, "prop", V, u);
        } else if (k.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var oe = L(k);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wo(u) {
      {
        for (var k = Object.keys(u.props), C = 0; C < k.length; C++) {
          var V = k[C];
          if (V !== "children" && V !== "key") {
            ft(u), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), ft(null);
            break;
          }
        }
        u.ref !== null && (ft(u), w("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var Pr = {};
    function Lr(u, k, C, V, oe, ce) {
      {
        var Q = j(u);
        if (!Q) {
          var G = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Bo();
          ke ? G += ke : G += Nr();
          var de;
          u === null ? de = "null" : ie(u) ? de = "array" : u !== void 0 && u.$$typeof === t ? (de = "<" + (L(u.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : de = typeof u, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, G);
        }
        var fe = sr(u, k, C, oe, ce);
        if (fe == null)
          return fe;
        if (Q) {
          var Ve = k.children;
          if (Ve !== void 0)
            if (V)
              if (ie(Ve)) {
                for (var ht = 0; ht < Ve.length; ht++)
                  jr(Ve[ht], u);
                Object.freeze && Object.freeze(Ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(Ve, u);
        }
        if (we.call(k, "key")) {
          var ct = L(u), _e = Object.keys(k).filter(function(Ko) {
            return Ko !== "key";
          }), Gt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[ct + Gt]) {
            var Yo = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, ct, Yo, ct), Pr[ct + Gt] = !0;
          }
        }
        return u === n ? Wo(fe) : Vo(fe), fe;
      }
    }
    function zo(u, k, C) {
      return Lr(u, k, C, !0);
    }
    function qo(u, k, C) {
      return Lr(u, k, C, !1);
    }
    var Uo = qo, Ho = zo;
    wn.Fragment = n, wn.jsx = Uo, wn.jsxs = Ho;
  }()), wn;
}
process.env.NODE_ENV === "production" ? gi.exports = Bu() : gi.exports = Fu();
var N = gi.exports, bi, On = yr;
if (process.env.NODE_ENV === "production")
  bi = On.createRoot, On.hydrateRoot;
else {
  var Ws = On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  bi = function(e, t) {
    Ws.usingClientEntryPoint = !0;
    try {
      return On.createRoot(e, t);
    } finally {
      Ws.usingClientEntryPoint = !1;
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
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vi.apply(this, arguments);
}
var zt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(zt || (zt = {}));
function Vu(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: r,
    v5Compat: n = !1
  } = e, i;
  i = t.map((m, S) => d(m, typeof m == "string" ? null : m.state, S === 0 ? "default" : void 0));
  let s = c(r ?? i.length - 1), a = zt.Pop, l = null;
  function c(m) {
    return Math.min(Math.max(m, 0), i.length - 1);
  }
  function p() {
    return i[s];
  }
  function d(m, S, b) {
    S === void 0 && (S = null);
    let x = zu(i ? p().pathname : "/", m, S, b);
    return tr(x.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(m)), x;
  }
  function f(m) {
    return typeof m == "string" ? m : qu(m);
  }
  return {
    get index() {
      return s;
    },
    get action() {
      return a;
    },
    get location() {
      return p();
    },
    createHref: f,
    createURL(m) {
      return new URL(f(m), "http://localhost");
    },
    encodeLocation(m) {
      let S = typeof m == "string" ? fn(m) : m;
      return {
        pathname: S.pathname || "",
        search: S.search || "",
        hash: S.hash || ""
      };
    },
    push(m, S) {
      a = zt.Push;
      let b = d(m, S);
      s += 1, i.splice(s, i.length, b), n && l && l({
        action: a,
        location: b,
        delta: 1
      });
    },
    replace(m, S) {
      a = zt.Replace;
      let b = d(m, S);
      i[s] = b, n && l && l({
        action: a,
        location: b,
        delta: 0
      });
    },
    go(m) {
      a = zt.Pop;
      let S = c(s + m), b = i[S];
      s = S, l && l({
        action: a,
        location: b,
        delta: m
      });
    },
    listen(m) {
      return l = m, () => {
        l = null;
      };
    }
  };
}
function qe(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function tr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Wu() {
  return Math.random().toString(36).substr(2, 8);
}
function zu(e, t, r, n) {
  return r === void 0 && (r = null), vi({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? fn(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || Wu()
  });
}
function qu(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function fn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var zs;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(zs || (zs = {}));
function Uu(e, t, r) {
  return r === void 0 && (r = "/"), Hu(e, t, r, !1);
}
function Hu(e, t, r, n) {
  let i = typeof t == "string" ? fn(t) : t, s = Sl(i.pathname || "/", r);
  if (s == null)
    return null;
  let a = vl(e);
  Yu(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let p = op(s);
    l = rp(a[c], p, n);
  }
  return l;
}
function vl(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (qe(c.relativePath.startsWith(n), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(n.length));
    let p = br([n, c.relativePath]), d = r.concat(c);
    s.children && s.children.length > 0 && (qe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), vl(s.children, t, d, p)), !(s.path == null && !s.index) && t.push({
      path: p,
      score: ep(p, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, a);
    else
      for (let c of El(s.path))
        i(s, a, c);
  }), t;
}
function El(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, i = r.endsWith("?"), s = r.replace(/\?$/, "");
  if (n.length === 0)
    return i ? [s, ""] : [s];
  let a = El(n.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), i && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function Yu(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : tp(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const Ku = /^:[\w-]+$/, Xu = 3, Gu = 2, Zu = 1, Ju = 10, Qu = -2, qs = (e) => e === "*";
function ep(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(qs) && (n += Qu), t && (n += Gu), r.filter((i) => !qs(i)).reduce((i, s) => i + (Ku.test(s) ? Xu : s === "" ? Zu : Ju), n);
}
function tp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, n) => r === t[n]) ? (
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
function rp(e, t, r) {
  let {
    routesMeta: n
  } = e, i = {}, s = "/", a = [];
  for (let l = 0; l < n.length; ++l) {
    let c = n[l], p = l === n.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", f = Us({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: p
    }, d), m = c.route;
    if (!f && p && r && !n[n.length - 1].route.index && (f = Us({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, d)), !f)
      return null;
    Object.assign(i, f.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: br([s, f.pathname]),
      pathnameBase: ip(br([s, f.pathnameBase])),
      route: m
    }), f.pathnameBase !== "/" && (s = br([s, f.pathnameBase]));
  }
  return a;
}
function Us(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = np(e.path, e.caseSensitive, e.end), i = t.match(r);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: n.reduce((c, p, d) => {
      let {
        paramName: f,
        isOptional: m
      } = p;
      if (f === "*") {
        let b = l[d] || "";
        a = s.slice(0, s.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[d];
      return m && !S ? c[f] = void 0 : c[f] = (S || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function np(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), tr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (n.push({
    paramName: a,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), n];
}
function op(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return tr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Sl(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const br = (e) => e.join("/").replace(/\/\/+/g, "/"), ip = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function sp(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const xl = ["post", "put", "patch", "delete"];
new Set(xl);
const ap = ["get", ...xl];
new Set(ap);
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
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xn.apply(this, arguments);
}
const wl = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (wl.displayName = "DataRouter");
const Ol = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Ol.displayName = "DataRouterState");
const lp = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (lp.displayName = "Await");
const Ji = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Ji.displayName = "Navigation");
const hn = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (hn.displayName = "Location");
const mn = /* @__PURE__ */ h.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (mn.displayName = "Route");
const Qi = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (Qi.displayName = "RouteError");
function es() {
  return h.useContext(hn) != null;
}
function cp() {
  return es() || (process.env.NODE_ENV !== "production" ? qe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : qe(!1)), h.useContext(hn).location;
}
function up(e, t) {
  return pp(e, t);
}
function pp(e, t, r, n) {
  es() || (process.env.NODE_ENV !== "production" ? qe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : qe(!1));
  let {
    navigator: i
  } = h.useContext(Ji), {
    matches: s
  } = h.useContext(mn), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", p = a ? a.pathnameBase : "/", d = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let w = d && d.path || "";
    Tl(c, !d || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let f = cp(), m;
  if (t) {
    var S;
    let w = typeof t == "string" ? fn(t) : t;
    p === "/" || (S = w.pathname) != null && S.startsWith(p) || (process.env.NODE_ENV !== "production" ? qe(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + p + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : qe(!1)), m = w;
  } else
    m = f;
  let b = m.pathname || "/", x = b;
  if (p !== "/") {
    let w = p.replace(/^\//, "").split("/");
    x = "/" + b.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let E = Uu(e, {
    pathname: x
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && tr(d || E != null, 'No routes matched location "' + m.pathname + m.search + m.hash + '" '), process.env.NODE_ENV !== "production" && tr(E == null || E[E.length - 1].route.element !== void 0 || E[E.length - 1].route.Component !== void 0 || E[E.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + m.pathname + m.search + m.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let O = yp(E && E.map((w) => Object.assign({}, w, {
    params: Object.assign({}, l, w.params),
    pathname: br([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? p : br([
      p,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), s, r, n);
  return t && O ? /* @__PURE__ */ h.createElement(hn.Provider, {
    value: {
      location: Xn({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, m),
      navigationType: zt.Pop
    }
  }, O) : O;
}
function dp() {
  let e = Ep(), t = sp(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: n
  }, s = {
    padding: "2px 4px",
    backgroundColor: n
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), a = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ h.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ h.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ h.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ h.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ h.createElement("pre", {
    style: i
  }, r) : null, a);
}
const fp = /* @__PURE__ */ h.createElement(dp, null);
class hp extends h.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ h.createElement(mn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ h.createElement(Qi.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function mp(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, i = h.useContext(wl);
  return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ h.createElement(mn.Provider, {
    value: t
  }, n);
}
function yp(e, t, r, n) {
  var i;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
    var s;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((s = n) != null && s.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let a = e, l = (i = r) == null ? void 0 : i.errors;
  if (l != null) {
    let d = a.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? qe(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : qe(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, p = -1;
  if (r && n && n.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (p = d), f.route.id) {
        let {
          loaderData: m,
          errors: S
        } = r, b = f.route.loader && m[f.route.id] === void 0 && (!S || S[f.route.id] === void 0);
        if (f.route.lazy || b) {
          c = !0, p >= 0 ? a = a.slice(0, p + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, f, m) => {
    let S, b = !1, x = null, E = null;
    r && (S = l && f.route.id ? l[f.route.id] : void 0, x = f.route.errorElement || fp, c && (p < 0 && m === 0 ? (Tl("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, E = null) : p === m && (b = !0, E = f.route.hydrateFallbackElement || null)));
    let O = t.concat(a.slice(0, m + 1)), w = () => {
      let v;
      return S ? v = x : b ? v = E : f.route.Component ? v = /* @__PURE__ */ h.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = d, /* @__PURE__ */ h.createElement(mp, {
        match: f,
        routeContext: {
          outlet: d,
          matches: O,
          isDataRoute: r != null
        },
        children: v
      });
    };
    return r && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? /* @__PURE__ */ h.createElement(hp, {
      location: r.location,
      revalidation: r.revalidation,
      component: x,
      error: S,
      children: w(),
      routeContext: {
        outlet: null,
        matches: O,
        isDataRoute: !0
      }
    }) : w();
  }, null);
}
var Ei = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Ei || {});
function kl(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function gp(e) {
  let t = h.useContext(Ol);
  return t || (process.env.NODE_ENV !== "production" ? qe(!1, kl(e)) : qe(!1)), t;
}
function bp(e) {
  let t = h.useContext(mn);
  return t || (process.env.NODE_ENV !== "production" ? qe(!1, kl(e)) : qe(!1)), t;
}
function vp(e) {
  let t = bp(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? qe(!1, e + ' can only be used on routes that contain a unique "id"') : qe(!1)), r.route.id;
}
function Ep() {
  var e;
  let t = h.useContext(Qi), r = gp(Ei.UseRouteError), n = vp(Ei.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
const Hs = {};
function Tl(e, t, r) {
  !t && !Hs[e] && (Hs[e] = !0, process.env.NODE_ENV !== "production" && tr(!1, r));
}
const Sp = "startTransition", Ys = h[Sp];
function xp(e) {
  let {
    basename: t,
    children: r,
    initialEntries: n,
    initialIndex: i,
    future: s
  } = e, a = h.useRef();
  a.current == null && (a.current = Vu({
    initialEntries: n,
    initialIndex: i,
    v5Compat: !0
  }));
  let l = a.current, [c, p] = h.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = s || {}, f = h.useCallback((m) => {
    d && Ys ? Ys(() => p(m)) : p(m);
  }, [p, d]);
  return h.useLayoutEffect(() => l.listen(f), [l, f]), /* @__PURE__ */ h.createElement(wp, {
    basename: t,
    children: r,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: s
  });
}
function Rl(e) {
  process.env.NODE_ENV !== "production" ? qe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : qe(!1);
}
function wp(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: i = zt.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  es() && (process.env.NODE_ENV !== "production" ? qe(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : qe(!1));
  let c = t.replace(/^\/*/, "/"), p = h.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: Xn({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof n == "string" && (n = fn(n));
  let {
    pathname: d = "/",
    search: f = "",
    hash: m = "",
    state: S = null,
    key: b = "default"
  } = n, x = h.useMemo(() => {
    let E = Sl(d, c);
    return E == null ? null : {
      location: {
        pathname: E,
        search: f,
        hash: m,
        state: S,
        key: b
      },
      navigationType: i
    };
  }, [c, d, f, m, S, b, i]);
  return process.env.NODE_ENV !== "production" && tr(x != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + f + m + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), x == null ? null : /* @__PURE__ */ h.createElement(Ji.Provider, {
    value: p
  }, /* @__PURE__ */ h.createElement(hn.Provider, {
    children: r,
    value: x
  }));
}
function Op(e) {
  let {
    children: t,
    location: r
  } = e;
  return up(Si(t), r);
}
new Promise(() => {
});
function Si(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return h.Children.forEach(e, (n, i) => {
    if (!/* @__PURE__ */ h.isValidElement(n))
      return;
    let s = [...t, i];
    if (n.type === h.Fragment) {
      r.push.apply(r, Si(n.props.children, s));
      return;
    }
    n.type !== Rl && (process.env.NODE_ENV !== "production" ? qe(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : qe(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? qe(!1, "An index route cannot have child routes.") : qe(!1));
    let a = {
      id: n.props.id || s.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (a.children = Si(n.props.children, s)), r.push(a);
  }), r;
}
const Qr = {
  black: "#000",
  white: "#fff"
}, ar = {
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
}, lr = {
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
}, cr = {
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
}, ur = {
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
}, pr = {
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
}, Dr = {
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
}, kp = {
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
function Dt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Tt = "$$material";
function Gn() {
  return Gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gn.apply(null, arguments);
}
function Cl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Tp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rp = /* @__PURE__ */ Cl(
  function(e) {
    return Tp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Cp = !1;
function Np(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function $p(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _p = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, s), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !Cp : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($p(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Np(n);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var n;
      return (n = r.parentNode) == null ? void 0 : n.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), st = "-ms-", Zn = "-moz-", Te = "-webkit-", Nl = "comm", ts = "rule", rs = "decl", jp = "@import", $l = "@keyframes", Pp = "@layer", Lp = Math.abs, lo = String.fromCharCode, Mp = Object.assign;
function Ap(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0;
}
function _l(e) {
  return e.trim();
}
function Ip(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, r) {
  return e.replace(t, r);
}
function xi(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function en(e, t, r) {
  return e.slice(t, r);
}
function Pt(e) {
  return e.length;
}
function ns(e) {
  return e.length;
}
function kn(e, t) {
  return t.push(e), e;
}
function Dp(e, t) {
  return e.map(t).join("");
}
var co = 1, Sr = 1, jl = 0, dt = 0, et = 0, wr = "";
function uo(e, t, r, n, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: s, line: co, column: Sr, length: a, return: "" };
}
function Br(e, t) {
  return Mp(uo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Bp() {
  return et;
}
function Fp() {
  return et = dt > 0 ? ot(wr, --dt) : 0, Sr--, et === 10 && (Sr = 1, co--), et;
}
function yt() {
  return et = dt < jl ? ot(wr, dt++) : 0, Sr++, et === 10 && (Sr = 1, co++), et;
}
function At() {
  return ot(wr, dt);
}
function Bn() {
  return dt;
}
function yn(e, t) {
  return en(wr, e, t);
}
function tn(e) {
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
function Pl(e) {
  return co = Sr = 1, jl = Pt(wr = e), dt = 0, [];
}
function Ll(e) {
  return wr = "", e;
}
function Fn(e) {
  return _l(yn(dt - 1, wi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vp(e) {
  for (; (et = At()) && et < 33; )
    yt();
  return tn(e) > 2 || tn(et) > 3 ? "" : " ";
}
function Wp(e, t) {
  for (; --t && yt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return yn(e, Bn() + (t < 6 && At() == 32 && yt() == 32));
}
function wi(e) {
  for (; yt(); )
    switch (et) {
      case e:
        return dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wi(et);
        break;
      case 40:
        e === 41 && wi(e);
        break;
      case 92:
        yt();
        break;
    }
  return dt;
}
function zp(e, t) {
  for (; yt() && e + et !== 57 && !(e + et === 84 && At() === 47); )
    ;
  return "/*" + yn(t, dt - 1) + "*" + lo(e === 47 ? e : yt());
}
function qp(e) {
  for (; !tn(At()); )
    yt();
  return yn(e, dt);
}
function Up(e) {
  return Ll(Vn("", null, null, null, [""], e = Pl(e), 0, [0], e));
}
function Vn(e, t, r, n, i, s, a, l, c) {
  for (var p = 0, d = 0, f = a, m = 0, S = 0, b = 0, x = 1, E = 1, O = 1, w = 0, v = "", T = i, g = s, $ = n, A = v; E; )
    switch (b = w, w = yt()) {
      case 40:
        if (b != 108 && ot(A, f - 1) == 58) {
          xi(A += Re(Fn(w), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Fn(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Vp(b);
        break;
      case 92:
        A += Wp(Bn() - 1, 7);
        continue;
      case 47:
        switch (At()) {
          case 42:
          case 47:
            kn(Hp(zp(yt(), Bn()), t, r), c);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * x:
        l[p++] = Pt(A) * O;
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            E = 0;
          case 59 + d:
            O == -1 && (A = Re(A, /\f/g, "")), S > 0 && Pt(A) - f && kn(S > 32 ? Xs(A + ";", n, r, f - 1) : Xs(Re(A, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            A += ";";
          default:
            if (kn($ = Ks(A, t, r, p, d, i, l, v, T = [], g = [], f), s), w === 123)
              if (d === 0)
                Vn(A, t, $, $, T, s, f, l, g);
              else
                switch (m === 99 && ot(A, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vn(e, $, $, n && kn(Ks(e, $, $, 0, 0, i, l, v, i, T = [], f), g), i, g, f, l, n ? T : g);
                    break;
                  default:
                    Vn(A, $, $, $, [""], g, 0, l, g);
                }
        }
        p = d = S = 0, x = O = 1, v = A = "", f = a;
        break;
      case 58:
        f = 1 + Pt(A), S = b;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && Fp() == 125)
            continue;
        }
        switch (A += lo(w), w * x) {
          case 38:
            O = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            l[p++] = (Pt(A) - 1) * O, O = 1;
            break;
          case 64:
            At() === 45 && (A += Fn(yt())), m = At(), d = f = Pt(v = A += qp(Bn())), w++;
            break;
          case 45:
            b === 45 && Pt(A) == 2 && (x = 0);
        }
    }
  return s;
}
function Ks(e, t, r, n, i, s, a, l, c, p, d) {
  for (var f = i - 1, m = i === 0 ? s : [""], S = ns(m), b = 0, x = 0, E = 0; b < n; ++b)
    for (var O = 0, w = en(e, f + 1, f = Lp(x = a[b])), v = e; O < S; ++O)
      (v = _l(x > 0 ? m[O] + " " + w : Re(w, /&\f/g, m[O]))) && (c[E++] = v);
  return uo(e, t, r, i === 0 ? ts : l, c, p, d);
}
function Hp(e, t, r) {
  return uo(e, t, r, Nl, lo(Bp()), en(e, 2, -2), 0);
}
function Xs(e, t, r, n) {
  return uo(e, t, r, rs, en(e, 0, n), en(e, n + 1, -1), n);
}
function vr(e, t) {
  for (var r = "", n = ns(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Yp(e, t, r, n) {
  switch (e.type) {
    case Pp:
      if (e.children.length) break;
    case jp:
    case rs:
      return e.return = e.return || e.value;
    case Nl:
      return "";
    case $l:
      return e.return = e.value + "{" + vr(e.children, n) + "}";
    case ts:
      e.value = e.props.join(",");
  }
  return Pt(r = vr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Kp(e) {
  var t = ns(e);
  return function(r, n, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, i, s) || "";
    return a;
  };
}
function Xp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Gp = function(e, t, r) {
  for (var n = 0, i = 0; n = i, i = At(), n === 38 && i === 12 && (t[r] = 1), !tn(i); )
    yt();
  return yn(e, dt);
}, Zp = function(e, t) {
  var r = -1, n = 44;
  do
    switch (tn(n)) {
      case 0:
        n === 38 && At() === 12 && (t[r] = 1), e[r] += Gp(dt - 1, t, r);
        break;
      case 2:
        e[r] += Fn(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = At() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += lo(n);
    }
  while (n = yt());
  return e;
}, Jp = function(e, t) {
  return Ll(Zp(Pl(e), t));
}, Gs = /* @__PURE__ */ new WeakMap(), Qp = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Gs.get(r)) && !n) {
      Gs.set(e, !0);
      for (var i = [], s = Jp(t, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var p = 0; p < a.length; p++, c++)
          e.props[c] = i[l] ? s[l].replace(/&\f/g, a[p]) : a[p] + " " + s[l];
    }
  }
}, ed = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function Ml(e, t) {
  switch (Ap(e, t)) {
    case 5103:
      return Te + "print-" + e + e;
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
      return Te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Te + e + Zn + e + st + e + e;
    case 6828:
    case 4268:
      return Te + e + st + e + e;
    case 6165:
      return Te + e + st + "flex-" + e + e;
    case 5187:
      return Te + e + Re(e, /(\w+).+(:[^]+)/, Te + "box-$1$2" + st + "flex-$1$2") + e;
    case 5443:
      return Te + e + st + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return Te + e + st + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Te + e + st + Re(e, "shrink", "negative") + e;
    case 5292:
      return Te + e + st + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return Te + "box-" + Re(e, "-grow", "") + Te + e + st + Re(e, "grow", "positive") + e;
    case 4554:
      return Te + Re(e, /([^-])(transform)/g, "$1" + Te + "$2") + e;
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Te + "$1"), /(image-set)/, Te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Te + "$1$`$1");
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Te + "box-pack:$3" + st + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Te + "$1$2") + e;
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
      if (Pt(e) - 1 - t > 6) switch (ot(e, t + 1)) {
        case 109:
          if (ot(e, t + 4) !== 45) break;
        case 102:
          return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Te + "$2-$3$1" + Zn + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~xi(e, "stretch") ? Ml(Re(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    case 6444:
      switch (ot(e, Pt(e) - 3 - (~xi(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Te) + e;
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Te + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Te + "$2$3$1" + st + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Te + e + st + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Te + e + st + e + e;
  }
  return e;
}
var td = function(e, t, r, n) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case rs:
      e.return = Ml(e.value, e.length);
      break;
    case $l:
      return vr([Br(e, {
        value: Re(e.value, "@", "@" + Te)
      })], n);
    case ts:
      if (e.length) return Dp(e.props, function(i) {
        switch (Ip(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vr([Br(e, {
              props: [Re(i, /:(read-\w+)/, ":" + Zn + "$1")]
            })], n);
          case "::placeholder":
            return vr([Br(e, {
              props: [Re(i, /:(plac\w+)/, ":" + Te + "input-$1")]
            }), Br(e, {
              props: [Re(i, /:(plac\w+)/, ":" + Zn + "$1")]
            }), Br(e, {
              props: [Re(i, /:(plac\w+)/, st + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, rd = [td], nd = function(e) {
  var t = e.key;
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var x = b.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || rd, i = {}, s, a = [];
  s = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var x = b.getAttribute("data-emotion").split(" "), E = 1; E < x.length; E++)
        i[x[E]] = !0;
      a.push(b);
    }
  );
  var l, c = [Qp, ed];
  {
    var p, d = [Yp, Xp(function(b) {
      p.insert(b);
    })], f = Kp(c.concat(n, d)), m = function(b) {
      return vr(Up(b), f);
    };
    l = function(b, x, E, O) {
      p = E, m(b ? b + "{" + x.styles + "}" : x.styles), O && (S.inserted[x.name] = !0);
    };
  }
  var S = {
    key: t,
    sheet: new _p({
      key: t,
      container: s,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return S.sheet.hydrate(a), S;
}, Oi = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function od() {
  if (Zs) return Ce;
  Zs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var $ = g.$$typeof;
      switch ($) {
        case t:
          switch (g = g.type, g) {
            case c:
            case p:
            case n:
            case s:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case b:
                case S:
                case a:
                  return g;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function T(g) {
    return v(g) === p;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = p, Ce.ContextConsumer = l, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = d, Ce.Fragment = n, Ce.Lazy = b, Ce.Memo = S, Ce.Portal = r, Ce.Profiler = s, Ce.StrictMode = i, Ce.Suspense = f, Ce.isAsyncMode = function(g) {
    return T(g) || v(g) === c;
  }, Ce.isConcurrentMode = T, Ce.isContextConsumer = function(g) {
    return v(g) === l;
  }, Ce.isContextProvider = function(g) {
    return v(g) === a;
  }, Ce.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Ce.isForwardRef = function(g) {
    return v(g) === d;
  }, Ce.isFragment = function(g) {
    return v(g) === n;
  }, Ce.isLazy = function(g) {
    return v(g) === b;
  }, Ce.isMemo = function(g) {
    return v(g) === S;
  }, Ce.isPortal = function(g) {
    return v(g) === r;
  }, Ce.isProfiler = function(g) {
    return v(g) === s;
  }, Ce.isStrictMode = function(g) {
    return v(g) === i;
  }, Ce.isSuspense = function(g) {
    return v(g) === f;
  }, Ce.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === p || g === s || g === i || g === f || g === m || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === S || g.$$typeof === a || g.$$typeof === l || g.$$typeof === d || g.$$typeof === E || g.$$typeof === O || g.$$typeof === w || g.$$typeof === x);
  }, Ce.typeOf = v, Ce;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function id() {
  return Js || (Js = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function v(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === p || R === s || R === i || R === f || R === m || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === S || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === E || R.$$typeof === O || R.$$typeof === w || R.$$typeof === x);
    }
    function T(R) {
      if (typeof R == "object" && R !== null) {
        var se = R.$$typeof;
        switch (se) {
          case t:
            var F = R.type;
            switch (F) {
              case c:
              case p:
              case n:
              case s:
              case i:
              case f:
                return F;
              default:
                var me = F && F.$$typeof;
                switch (me) {
                  case l:
                  case d:
                  case b:
                  case S:
                  case a:
                    return me;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var g = c, $ = p, A = l, D = a, y = t, j = d, I = n, B = b, L = S, M = r, q = s, te = i, ae = f, X = !1;
    function be(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(R) || T(R) === c;
    }
    function _(R) {
      return T(R) === p;
    }
    function W(R) {
      return T(R) === l;
    }
    function K(R) {
      return T(R) === a;
    }
    function z(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Y(R) {
      return T(R) === d;
    }
    function re(R) {
      return T(R) === n;
    }
    function J(R) {
      return T(R) === b;
    }
    function ee(R) {
      return T(R) === S;
    }
    function Z(R) {
      return T(R) === r;
    }
    function H(R) {
      return T(R) === s;
    }
    function U(R) {
      return T(R) === i;
    }
    function ne(R) {
      return T(R) === f;
    }
    je.AsyncMode = g, je.ConcurrentMode = $, je.ContextConsumer = A, je.ContextProvider = D, je.Element = y, je.ForwardRef = j, je.Fragment = I, je.Lazy = B, je.Memo = L, je.Portal = M, je.Profiler = q, je.StrictMode = te, je.Suspense = ae, je.isAsyncMode = be, je.isConcurrentMode = _, je.isContextConsumer = W, je.isContextProvider = K, je.isElement = z, je.isForwardRef = Y, je.isFragment = re, je.isLazy = J, je.isMemo = ee, je.isPortal = Z, je.isProfiler = H, je.isStrictMode = U, je.isSuspense = ne, je.isValidElementType = v, je.typeOf = T;
  }()), je;
}
process.env.NODE_ENV === "production" ? Oi.exports = od() : Oi.exports = id();
var sd = Oi.exports, Al = sd, ad = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ld = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Il = {};
Il[Al.ForwardRef] = ad;
Il[Al.Memo] = ld;
var cd = !0;
function ud(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Dl = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  cd === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, Bl = function(e, t, r) {
  Dl(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var i = t;
    do
      e.insert(t === i ? "." + n : "", i, e.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function pd(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var dd = {
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
}, fd = !1, hd = /[A-Z]|^ms/g, md = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Fl = function(e) {
  return e.charCodeAt(1) === 45;
}, Qs = function(e) {
  return e != null && typeof e != "boolean";
}, Go = /* @__PURE__ */ Cl(function(e) {
  return Fl(e) ? e : e.replace(hd, "-$&").toLowerCase();
}), ea = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(md, function(r, n, i) {
          return Lt = {
            name: n,
            styles: i,
            next: Lt
          }, n;
        });
  }
  return dd[e] !== 1 && !Fl(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, yd = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function rn(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return Lt = {
          name: i.name,
          styles: i.styles,
          next: Lt
        }, i.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Lt = {
              name: a.name,
              styles: a.styles,
              next: Lt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return gd(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Lt, p = r(e);
        return Lt = c, rn(e, t, p);
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
function gd(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += rn(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? n += s + "{" + t[l] + "}" : Qs(l) && (n += Go(s) + ":" + ea(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && fd)
          throw new Error(yd);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Qs(a[c]) && (n += Go(s) + ":" + ea(s, a[c]) + ";");
        else {
          var p = rn(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Go(s) + ":" + p + ";";
              break;
            }
            default:
              n += s + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var ta = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Lt;
function os(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  Lt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, i += rn(r, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += rn(r, t, e[l]), n) {
      var c = s;
      i += c[l];
    }
  ta.lastIndex = 0;
  for (var p = "", d; (d = ta.exec(i)) !== null; )
    p += "-" + d[1];
  var f = pd(i) + p;
  return {
    name: f,
    styles: i,
    next: Lt
  };
}
var bd = function(e) {
  return e();
}, Vl = h.useInsertionEffect ? h.useInsertionEffect : !1, vd = Vl || bd, ra = Vl || h.useLayoutEffect, Wl = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ nd({
    key: "css"
  }) : null
);
Wl.Provider;
var zl = function(e) {
  return /* @__PURE__ */ $u(function(t, r) {
    var n = bl(Wl);
    return e(t, n, r);
  });
}, po = /* @__PURE__ */ h.createContext({}), Ed = /* @__PURE__ */ zl(function(e, t) {
  var r = e.styles, n = os([r], void 0, h.useContext(po)), i = h.useRef();
  return ra(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), ra(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && Bl(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function fo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return os(t);
}
var Or = function() {
  var e = fo.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Sd = Rp, xd = function(e) {
  return e !== "theme";
}, na = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? Sd : xd;
}, oa = function(e, t, r) {
  var n;
  if (t) {
    var i = t.shouldForwardProp;
    n = e.__emotion_forwardProp && i ? function(s) {
      return e.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
}, wd = !1, Od = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return Dl(t, r, n), vd(function() {
    return Bl(t, r, n);
  }), null;
}, kd = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var l = oa(t, r, n), c = l || na(i), p = !c("as");
  return function() {
    var d = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      f.push(d[0][0]);
      for (var m = d.length, S = 1; S < m; S++)
        f.push(d[S], d[0][S]);
    }
    var b = zl(function(x, E, O) {
      var w = p && x.as || i, v = "", T = [], g = x;
      if (x.theme == null) {
        g = {};
        for (var $ in x)
          g[$] = x[$];
        g.theme = h.useContext(po);
      }
      typeof x.className == "string" ? v = ud(E.registered, T, x.className) : x.className != null && (v = x.className + " ");
      var A = os(f.concat(T), E.registered, g);
      v += E.key + "-" + A.name, a !== void 0 && (v += " " + a);
      var D = p && l === void 0 ? na(w) : c, y = {};
      for (var j in x)
        p && j === "as" || D(j) && (y[j] = x[j]);
      return y.className = v, O && (y.ref = O), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Od, {
        cache: E,
        serialized: A,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ h.createElement(w, y));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = f, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && wd ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(x, E) {
      return e(x, Gn({}, r, E, {
        shouldForwardProp: oa(b, E, !0)
      })).apply(void 0, f);
    }, b;
  };
}, Td = [
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
], ki = kd.bind();
Td.forEach(function(e) {
  ki[e] = ki(e);
});
var Ti = { exports: {} }, Zo = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function Rd() {
  if (ia) return Ne;
  ia = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var $ = g.$$typeof;
      switch ($) {
        case t:
          switch (g = g.type, g) {
            case c:
            case p:
            case n:
            case s:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case b:
                case S:
                case a:
                  return g;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function T(g) {
    return v(g) === p;
  }
  return Ne.AsyncMode = c, Ne.ConcurrentMode = p, Ne.ContextConsumer = l, Ne.ContextProvider = a, Ne.Element = t, Ne.ForwardRef = d, Ne.Fragment = n, Ne.Lazy = b, Ne.Memo = S, Ne.Portal = r, Ne.Profiler = s, Ne.StrictMode = i, Ne.Suspense = f, Ne.isAsyncMode = function(g) {
    return T(g) || v(g) === c;
  }, Ne.isConcurrentMode = T, Ne.isContextConsumer = function(g) {
    return v(g) === l;
  }, Ne.isContextProvider = function(g) {
    return v(g) === a;
  }, Ne.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Ne.isForwardRef = function(g) {
    return v(g) === d;
  }, Ne.isFragment = function(g) {
    return v(g) === n;
  }, Ne.isLazy = function(g) {
    return v(g) === b;
  }, Ne.isMemo = function(g) {
    return v(g) === S;
  }, Ne.isPortal = function(g) {
    return v(g) === r;
  }, Ne.isProfiler = function(g) {
    return v(g) === s;
  }, Ne.isStrictMode = function(g) {
    return v(g) === i;
  }, Ne.isSuspense = function(g) {
    return v(g) === f;
  }, Ne.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === p || g === s || g === i || g === f || g === m || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === S || g.$$typeof === a || g.$$typeof === l || g.$$typeof === d || g.$$typeof === E || g.$$typeof === O || g.$$typeof === w || g.$$typeof === x);
  }, Ne.typeOf = v, Ne;
}
var Pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function Cd() {
  return sa || (sa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function v(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === p || R === s || R === i || R === f || R === m || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === S || R.$$typeof === a || R.$$typeof === l || R.$$typeof === d || R.$$typeof === E || R.$$typeof === O || R.$$typeof === w || R.$$typeof === x);
    }
    function T(R) {
      if (typeof R == "object" && R !== null) {
        var se = R.$$typeof;
        switch (se) {
          case t:
            var F = R.type;
            switch (F) {
              case c:
              case p:
              case n:
              case s:
              case i:
              case f:
                return F;
              default:
                var me = F && F.$$typeof;
                switch (me) {
                  case l:
                  case d:
                  case b:
                  case S:
                  case a:
                    return me;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var g = c, $ = p, A = l, D = a, y = t, j = d, I = n, B = b, L = S, M = r, q = s, te = i, ae = f, X = !1;
    function be(R) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(R) || T(R) === c;
    }
    function _(R) {
      return T(R) === p;
    }
    function W(R) {
      return T(R) === l;
    }
    function K(R) {
      return T(R) === a;
    }
    function z(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Y(R) {
      return T(R) === d;
    }
    function re(R) {
      return T(R) === n;
    }
    function J(R) {
      return T(R) === b;
    }
    function ee(R) {
      return T(R) === S;
    }
    function Z(R) {
      return T(R) === r;
    }
    function H(R) {
      return T(R) === s;
    }
    function U(R) {
      return T(R) === i;
    }
    function ne(R) {
      return T(R) === f;
    }
    Pe.AsyncMode = g, Pe.ConcurrentMode = $, Pe.ContextConsumer = A, Pe.ContextProvider = D, Pe.Element = y, Pe.ForwardRef = j, Pe.Fragment = I, Pe.Lazy = B, Pe.Memo = L, Pe.Portal = M, Pe.Profiler = q, Pe.StrictMode = te, Pe.Suspense = ae, Pe.isAsyncMode = be, Pe.isConcurrentMode = _, Pe.isContextConsumer = W, Pe.isContextProvider = K, Pe.isElement = z, Pe.isForwardRef = Y, Pe.isFragment = re, Pe.isLazy = J, Pe.isMemo = ee, Pe.isPortal = Z, Pe.isProfiler = H, Pe.isStrictMode = U, Pe.isSuspense = ne, Pe.isValidElementType = v, Pe.typeOf = T;
  }()), Pe;
}
var aa;
function ql() {
  return aa || (aa = 1, process.env.NODE_ENV === "production" ? Zo.exports = Rd() : Zo.exports = Cd()), Zo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jo, la;
function Nd() {
  if (la) return Jo;
  la = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
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
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        p[d] = d;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jo = i() ? Object.assign : function(s, a) {
    for (var l, c = n(s), p, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        p = e(l);
        for (var m = 0; m < p.length; m++)
          r.call(l, p[m]) && (c[p[m]] = l[p[m]]);
      }
    }
    return c;
  }, Jo;
}
var Qo, ca;
function is() {
  if (ca) return Qo;
  ca = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qo = e, Qo;
}
var ua, pa;
function Ul() {
  return pa || (pa = 1, ua = Function.call.bind(Object.prototype.hasOwnProperty)), ua;
}
var ei, da;
function $d() {
  if (da) return ei;
  da = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = is(), r = {}, n = Ul();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var S = p ? p() : "";
            e(
              "Failed " + l + " type: " + f.message + (S ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ei = i, ei;
}
var ti, fa;
function _d() {
  if (fa) return ti;
  fa = 1;
  var e = ql(), t = Nd(), r = is(), n = Ul(), i = $d(), s = function() {
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
  return ti = function(l, c) {
    var p = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(_) {
      var W = _ && (p && _[p] || _[d]);
      if (typeof W == "function")
        return W;
    }
    var m = "<<anonymous>>", S = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: w(),
      arrayOf: v,
      element: T(),
      elementType: g(),
      instanceOf: $,
      node: j(),
      objectOf: D,
      oneOf: A,
      oneOfType: y,
      shape: B,
      exact: L
    };
    function b(_, W) {
      return _ === W ? _ !== 0 || 1 / _ === 1 / W : _ !== _ && W !== W;
    }
    function x(_, W) {
      this.message = _, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function E(_) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, K = 0;
      function z(re, J, ee, Z, H, U, ne) {
        if (Z = Z || m, U = U || ee, ne !== r) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = Z + ":" + ee;
            !W[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[se] = !0, K++);
          }
        }
        return J[ee] == null ? re ? J[ee] === null ? new x("The " + H + " `" + U + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new x("The " + H + " `" + U + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : _(J, ee, Z, H, U);
      }
      var Y = z.bind(null, !1);
      return Y.isRequired = z.bind(null, !0), Y;
    }
    function O(_) {
      function W(K, z, Y, re, J, ee) {
        var Z = K[z], H = te(Z);
        if (H !== _) {
          var U = ae(Z);
          return new x(
            "Invalid " + re + " `" + J + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return E(W);
    }
    function w() {
      return E(a);
    }
    function v(_) {
      function W(K, z, Y, re, J) {
        if (typeof _ != "function")
          return new x("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var ee = K[z];
        if (!Array.isArray(ee)) {
          var Z = te(ee);
          return new x("Invalid " + re + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var H = 0; H < ee.length; H++) {
          var U = _(ee, H, Y, re, J + "[" + H + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return E(W);
    }
    function T() {
      function _(W, K, z, Y, re) {
        var J = W[K];
        if (!l(J)) {
          var ee = te(J);
          return new x("Invalid " + Y + " `" + re + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(_);
    }
    function g() {
      function _(W, K, z, Y, re) {
        var J = W[K];
        if (!e.isValidElementType(J)) {
          var ee = te(J);
          return new x("Invalid " + Y + " `" + re + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(_);
    }
    function $(_) {
      function W(K, z, Y, re, J) {
        if (!(K[z] instanceof _)) {
          var ee = _.name || m, Z = be(K[z]);
          return new x("Invalid " + re + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return E(W);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function W(K, z, Y, re, J) {
        for (var ee = K[z], Z = 0; Z < _.length; Z++)
          if (b(ee, _[Z]))
            return null;
        var H = JSON.stringify(_, function(U, ne) {
          var R = ae(ne);
          return R === "symbol" ? String(ne) : ne;
        });
        return new x("Invalid " + re + " `" + J + "` of value `" + String(ee) + "` " + ("supplied to `" + Y + "`, expected one of " + H + "."));
      }
      return E(W);
    }
    function D(_) {
      function W(K, z, Y, re, J) {
        if (typeof _ != "function")
          return new x("Property `" + J + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var ee = K[z], Z = te(ee);
        if (Z !== "object")
          return new x("Invalid " + re + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + Y + "`, expected an object."));
        for (var H in ee)
          if (n(ee, H)) {
            var U = _(ee, H, Y, re, J + "." + H, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return E(W);
    }
    function y(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var W = 0; W < _.length; W++) {
        var K = _[W];
        if (typeof K != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(K) + " at index " + W + "."
          ), a;
      }
      function z(Y, re, J, ee, Z) {
        for (var H = [], U = 0; U < _.length; U++) {
          var ne = _[U], R = ne(Y, re, J, ee, Z, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && H.push(R.data.expectedType);
        }
        var se = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new x("Invalid " + ee + " `" + Z + "` supplied to " + ("`" + J + "`" + se + "."));
      }
      return E(z);
    }
    function j() {
      function _(W, K, z, Y, re) {
        return M(W[K]) ? null : new x("Invalid " + Y + " `" + re + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return E(_);
    }
    function I(_, W, K, z, Y) {
      return new x(
        (_ || "React class") + ": " + W + " type `" + K + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function B(_) {
      function W(K, z, Y, re, J) {
        var ee = K[z], Z = te(ee);
        if (Z !== "object")
          return new x("Invalid " + re + " `" + J + "` of type `" + Z + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var H in _) {
          var U = _[H];
          if (typeof U != "function")
            return I(Y, re, J, H, ae(U));
          var ne = U(ee, H, Y, re, J + "." + H, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return E(W);
    }
    function L(_) {
      function W(K, z, Y, re, J) {
        var ee = K[z], Z = te(ee);
        if (Z !== "object")
          return new x("Invalid " + re + " `" + J + "` of type `" + Z + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var H = t({}, K[z], _);
        for (var U in H) {
          var ne = _[U];
          if (n(_, U) && typeof ne != "function")
            return I(Y, re, J, U, ae(ne));
          if (!ne)
            return new x(
              "Invalid " + re + " `" + J + "` key `" + U + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(K[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var R = ne(ee, U, Y, re, J + "." + U, r);
          if (R)
            return R;
        }
        return null;
      }
      return E(W);
    }
    function M(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(M);
          if (_ === null || l(_))
            return !0;
          var W = f(_);
          if (W) {
            var K = W.call(_), z;
            if (W !== _.entries) {
              for (; !(z = K.next()).done; )
                if (!M(z.value))
                  return !1;
            } else
              for (; !(z = K.next()).done; ) {
                var Y = z.value;
                if (Y && !M(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(_, W) {
      return _ === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function te(_) {
      var W = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : q(W, _) ? "symbol" : W;
    }
    function ae(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var W = te(_);
      if (W === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function X(_) {
      var W = ae(_);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function be(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return S.checkPropTypes = i, S.resetWarningCache = i.resetWarningCache, S.PropTypes = S, S;
  }, ti;
}
var ri, ha;
function jd() {
  if (ha) return ri;
  ha = 1;
  var e = is();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ri = function() {
    function n(a, l, c, p, d, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ri;
}
if (process.env.NODE_ENV !== "production") {
  var Pd = ql(), Ld = !0;
  Ti.exports = _d()(Pd.isElement, Ld);
} else
  Ti.exports = jd()();
var Md = Ti.exports;
const o = /* @__PURE__ */ Du(Md);
function Ad(e) {
  return e == null || Object.keys(e).length === 0;
}
function ss(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(Ad(i) ? r : i) : t;
  return /* @__PURE__ */ N.jsx(Ed, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ss.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v6.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Hl(e, t) {
  const r = ki(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Id = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Mt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Yl(e) {
  if (!Mt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Yl(e[r]);
  }), t;
}
function nt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Mt(e) && Mt(t) && Object.keys(t).forEach((i) => {
    Mt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Mt(e[i]) ? n[i] = nt(e[i], t[i], r) : r.clone ? n[i] = Mt(t[i]) ? Yl(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
const Dd = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Bd(e) {
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
    step: n = 5,
    ...i
  } = e, s = Dd(t), a = Object.keys(s);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function p(m, S) {
    const b = a.indexOf(S);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : S) - n / 100}${r})`;
  }
  function d(m) {
    return a.indexOf(m) + 1 < a.length ? p(m, a[a.indexOf(m) + 1]) : l(m);
  }
  function f(m) {
    const S = a.indexOf(m);
    return S === 0 ? l(a[1]) : S === a.length - 1 ? c(a[S]) : p(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: p,
    only: d,
    not: f,
    unit: r,
    ...i
  };
}
function Fd(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, i) => {
    var s, a;
    const l = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(l)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(l)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, i) => {
    const s = t[i];
    return delete n[i], n[i] = s, n;
  }, {
    ...t
  }) : t;
}
function Vd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Wd(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Dt(18, `(${t})`));
    return null;
  }
  const [, n, i] = r, s = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(s);
}
function zd(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, i = (s) => (r(n, s), n);
  return r(i), {
    ...e,
    containerQueries: i
  };
}
const qd = {
  borderRadius: 4
}, Ht = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function Xr(e, t) {
  return t ? nt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ho = {
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
}, ma = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ho[e]}px)`
}, Ud = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : ho[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Rt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ma;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || ma;
    return Object.keys(t).reduce((s, a) => {
      if (Vd(i.keys, a)) {
        const l = Wd(n.containerQueries ? n : Ud, a);
        l && (s[l] = r(t[a], a));
      } else if (Object.keys(i.values || ho).includes(a)) {
        const l = i.up(a);
        s[l] = r(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Kl(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, n) => {
    const i = e.up(n);
    return r[i] = {}, r;
  }, {})) || {};
}
function Xl(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Hd(e, ...t) {
  const r = Kl(e), n = [r, ...t].reduce((i, s) => nt(i, s), {});
  return Xl(Object.keys(r), n);
}
function Yd(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : n.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function ni({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || Yd(e, t), i = Object.keys(n);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Dt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function mo(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Jn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = mo(e, r) || n, t && (i = t(i, n, e)), i;
}
function Qe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, p = mo(c, n) || {};
    return Rt(a, l, (d) => {
      let f = Jn(p, i, d);
      return d === f && typeof d == "string" && (f = Jn(p, i, `${t}${d === "default" ? "" : pe(d)}`, d)), r === !1 ? f : {
        [r]: f
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ht
  } : {}, s.filterProps = [t], s;
}
function Kd(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Xd = {
  m: "margin",
  p: "padding"
}, Gd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ya = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zd = Kd((e) => {
  if (e.length > 2)
    if (ya[e])
      e = ya[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Xd[t], i = Gd[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), yo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], go = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jd = [...yo, ...go];
function gn(e, t, r, n) {
  const i = mo(e, t, !0) ?? r;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), typeof i == "string" ? `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
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
function bo(e) {
  return gn(e, "spacing", 8, "spacing");
}
function rr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Qd(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = rr(t, r), n), {});
}
function ef(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const i = Zd(r), s = Qd(i, n), a = e[r];
  return Rt(e, a, s);
}
function Gl(e, t) {
  const r = bo(e.theme);
  return Object.keys(e).map((n) => ef(e, t, n, r)).reduce(Xr, {});
}
function Ge(e) {
  return Gl(e, yo);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? yo.reduce((e, t) => (e[t] = Ht, e), {}) : {};
Ge.filterProps = yo;
function Ze(e) {
  return Gl(e, go);
}
Ze.propTypes = process.env.NODE_ENV !== "production" ? go.reduce((e, t) => (e[t] = Ht, e), {}) : {};
Ze.filterProps = go;
process.env.NODE_ENV !== "production" && Jd.reduce((e, t) => (e[t] = Ht, e), {});
function Zl(e = 8, t = bo({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function vo(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => t[s] ? Xr(i, t[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function vt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xt(e, t) {
  return Qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tf = xt("border", vt), rf = xt("borderTop", vt), nf = xt("borderRight", vt), of = xt("borderBottom", vt), sf = xt("borderLeft", vt), af = xt("borderColor"), lf = xt("borderTopColor"), cf = xt("borderRightColor"), uf = xt("borderBottomColor"), pf = xt("borderLeftColor"), df = xt("outline", vt), ff = xt("outlineColor"), Eo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = gn(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: rr(t, n)
    });
    return Rt(e, e.borderRadius, r);
  }
  return null;
};
Eo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ht
} : {};
Eo.filterProps = ["borderRadius"];
vo(tf, rf, nf, of, sf, af, lf, cf, uf, pf, Eo, df, ff);
const So = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = gn(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: rr(t, n)
    });
    return Rt(e, e.gap, r);
  }
  return null;
};
So.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ht
} : {};
So.filterProps = ["gap"];
const xo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = gn(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: rr(t, n)
    });
    return Rt(e, e.columnGap, r);
  }
  return null;
};
xo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ht
} : {};
xo.filterProps = ["columnGap"];
const wo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = gn(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: rr(t, n)
    });
    return Rt(e, e.rowGap, r);
  }
  return null;
};
wo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ht
} : {};
wo.filterProps = ["rowGap"];
const hf = Qe({
  prop: "gridColumn"
}), mf = Qe({
  prop: "gridRow"
}), yf = Qe({
  prop: "gridAutoFlow"
}), gf = Qe({
  prop: "gridAutoColumns"
}), bf = Qe({
  prop: "gridAutoRows"
}), vf = Qe({
  prop: "gridTemplateColumns"
}), Ef = Qe({
  prop: "gridTemplateRows"
}), Sf = Qe({
  prop: "gridTemplateAreas"
}), xf = Qe({
  prop: "gridArea"
});
vo(So, xo, wo, hf, mf, yf, gf, bf, vf, Ef, Sf, xf);
function Er(e, t) {
  return t === "grey" ? t : e;
}
const wf = Qe({
  prop: "color",
  themeKey: "palette",
  transform: Er
}), Of = Qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Er
}), kf = Qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Er
});
vo(wf, Of, kf);
function mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Tf = Qe({
  prop: "width",
  transform: mt
}), as = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i, s, a, l;
      const c = ((s = (i = (n = e.theme) == null ? void 0 : n.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || ho[r];
      return c ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${c}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: c
      } : {
        maxWidth: mt(r)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
as.filterProps = ["maxWidth"];
const Rf = Qe({
  prop: "minWidth",
  transform: mt
}), Cf = Qe({
  prop: "height",
  transform: mt
}), Nf = Qe({
  prop: "maxHeight",
  transform: mt
}), $f = Qe({
  prop: "minHeight",
  transform: mt
});
Qe({
  prop: "size",
  cssProperty: "width",
  transform: mt
});
Qe({
  prop: "size",
  cssProperty: "height",
  transform: mt
});
const _f = Qe({
  prop: "boxSizing"
});
vo(Tf, as, Rf, Cf, Nf, $f, _f);
const bn = {
  // borders
  border: {
    themeKey: "borders",
    transform: vt
  },
  borderTop: {
    themeKey: "borders",
    transform: vt
  },
  borderRight: {
    themeKey: "borders",
    transform: vt
  },
  borderBottom: {
    themeKey: "borders",
    transform: vt
  },
  borderLeft: {
    themeKey: "borders",
    transform: vt
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
    transform: vt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Eo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Er
  },
  // spacing
  p: {
    style: Ze
  },
  pt: {
    style: Ze
  },
  pr: {
    style: Ze
  },
  pb: {
    style: Ze
  },
  pl: {
    style: Ze
  },
  px: {
    style: Ze
  },
  py: {
    style: Ze
  },
  padding: {
    style: Ze
  },
  paddingTop: {
    style: Ze
  },
  paddingRight: {
    style: Ze
  },
  paddingBottom: {
    style: Ze
  },
  paddingLeft: {
    style: Ze
  },
  paddingX: {
    style: Ze
  },
  paddingY: {
    style: Ze
  },
  paddingInline: {
    style: Ze
  },
  paddingInlineStart: {
    style: Ze
  },
  paddingInlineEnd: {
    style: Ze
  },
  paddingBlock: {
    style: Ze
  },
  paddingBlockStart: {
    style: Ze
  },
  paddingBlockEnd: {
    style: Ze
  },
  m: {
    style: Ge
  },
  mt: {
    style: Ge
  },
  mr: {
    style: Ge
  },
  mb: {
    style: Ge
  },
  ml: {
    style: Ge
  },
  mx: {
    style: Ge
  },
  my: {
    style: Ge
  },
  margin: {
    style: Ge
  },
  marginTop: {
    style: Ge
  },
  marginRight: {
    style: Ge
  },
  marginBottom: {
    style: Ge
  },
  marginLeft: {
    style: Ge
  },
  marginX: {
    style: Ge
  },
  marginY: {
    style: Ge
  },
  marginInline: {
    style: Ge
  },
  marginInlineStart: {
    style: Ge
  },
  marginInlineEnd: {
    style: Ge
  },
  marginBlock: {
    style: Ge
  },
  marginBlockStart: {
    style: Ge
  },
  marginBlockEnd: {
    style: Ge
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
    style: So
  },
  rowGap: {
    style: wo
  },
  columnGap: {
    style: xo
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
    style: as
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
function jf(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Pf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lf() {
  function e(r, n, i, s) {
    const a = {
      [r]: n,
      theme: i
    }, l = s[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: p,
      transform: d,
      style: f
    } = l;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = mo(i, p) || {};
    return f ? f(a) : Rt(a, n, (S) => {
      let b = Jn(m, d, S);
      return S === b && typeof S == "string" && (b = Jn(m, d, `${r}${S === "default" ? "" : pe(S)}`, S)), c === !1 ? b : {
        [c]: b
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: i = {}
    } = r || {};
    if (!n)
      return null;
    const s = i.unstable_sxConfig ?? bn;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const p = Kl(i.breakpoints), d = Object.keys(p);
      let f = p;
      return Object.keys(c).forEach((m) => {
        const S = Pf(c[m], i);
        if (S != null)
          if (typeof S == "object")
            if (s[m])
              f = Xr(f, e(m, S, i, s));
            else {
              const b = Rt({
                theme: i
              }, S, (x) => ({
                [m]: x
              }));
              jf(b, S) ? f[m] = t({
                sx: S,
                theme: i
              }) : f = Xr(f, b);
            }
          else
            f = Xr(f, e(m, S, i, s));
      }), Fd(i, Xl(d, f));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const or = Lf();
or.filterProps = ["sx"];
function Mf(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Oo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Bd(r), c = Zl(i);
  let p = nt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...qd,
      ...s
    }
  }, a);
  return p = zd(p), p.applyStyles = Mf, p = t.reduce((d, f) => nt(d, f), p), p.unstable_sxConfig = {
    ...bn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, p.unstable_sx = function(d) {
    return or({
      sx: d,
      theme: this
    });
  }, p;
}
function Af(e) {
  return Object.keys(e).length === 0;
}
function Jl(e = null) {
  const t = h.useContext(po);
  return !t || Af(t) ? e : t;
}
const If = Oo();
function ko(e = If) {
  return Jl(e);
}
function Ql({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = ko(r), i = typeof e == "function" ? e(t && n[t] || n) : e;
  return /* @__PURE__ */ N.jsx(ss, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const Df = (e) => {
  var t;
  const r = {
    systemProps: {},
    otherProps: {}
  }, n = ((t = e == null ? void 0 : e.theme) == null ? void 0 : t.unstable_sxConfig) ?? bn;
  return Object.keys(e).forEach((i) => {
    n[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function ls(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: i
  } = Df(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Mt(l) ? {
      ...n,
      ...l
    } : n;
  } : s = {
    ...n,
    ...t
  }, {
    ...i,
    sx: s
  };
}
const ga = (e) => e, Bf = () => {
  let e = ga;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ga;
    }
  };
}, ec = Bf();
function tc(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = tc(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function he() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = tc(e)) && (n && (n += " "), n += t);
  return n;
}
function Ff(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = e, s = Hl("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(or);
  return /* @__PURE__ */ h.forwardRef(function(a, l) {
    const c = ko(r), {
      className: p,
      component: d = "div",
      ...f
    } = ls(a);
    return /* @__PURE__ */ N.jsx(s, {
      as: d,
      ref: l,
      className: he(p, i ? i(n) : n),
      theme: t && c[t] || c,
      ...f
    });
  });
}
const Vf = {
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
function Be(e, t, r = "Mui") {
  const n = Vf[t];
  return n ? `${r}-${n}` : `${ec.generate(e)}-${t}`;
}
function Me(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Be(e, i, r);
  }), n;
}
var Ri = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function Wf() {
  if (ba) return $e;
  ba = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function x(E) {
    if (typeof E == "object" && E !== null) {
      var O = E.$$typeof;
      switch (O) {
        case e:
          switch (E = E.type, E) {
            case r:
            case i:
            case n:
            case p:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case a:
                case c:
                case m:
                case f:
                case s:
                  return E;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return $e.ContextConsumer = a, $e.ContextProvider = s, $e.Element = e, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = m, $e.Memo = f, $e.Portal = t, $e.Profiler = i, $e.StrictMode = n, $e.Suspense = p, $e.SuspenseList = d, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(E) {
    return x(E) === a;
  }, $e.isContextProvider = function(E) {
    return x(E) === s;
  }, $e.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, $e.isForwardRef = function(E) {
    return x(E) === c;
  }, $e.isFragment = function(E) {
    return x(E) === r;
  }, $e.isLazy = function(E) {
    return x(E) === m;
  }, $e.isMemo = function(E) {
    return x(E) === f;
  }, $e.isPortal = function(E) {
    return x(E) === t;
  }, $e.isProfiler = function(E) {
    return x(E) === i;
  }, $e.isStrictMode = function(E) {
    return x(E) === n;
  }, $e.isSuspense = function(E) {
    return x(E) === p;
  }, $e.isSuspenseList = function(E) {
    return x(E) === d;
  }, $e.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === i || E === n || E === p || E === d || E === S || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === f || E.$$typeof === s || E.$$typeof === a || E.$$typeof === c || E.$$typeof === b || E.getModuleId !== void 0);
  }, $e.typeOf = x, $e;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function zf() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), b = !1, x = !1, E = !1, O = !1, w = !1, v;
    v = Symbol.for("react.module.reference");
    function T(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === i || w || F === n || F === p || F === d || O || F === S || b || x || E || typeof F == "object" && F !== null && (F.$$typeof === m || F.$$typeof === f || F.$$typeof === s || F.$$typeof === a || F.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === v || F.getModuleId !== void 0));
    }
    function g(F) {
      if (typeof F == "object" && F !== null) {
        var me = F.$$typeof;
        switch (me) {
          case e:
            var we = F.type;
            switch (we) {
              case r:
              case i:
              case n:
              case p:
              case d:
                return we;
              default:
                var ye = we && we.$$typeof;
                switch (ye) {
                  case l:
                  case a:
                  case c:
                  case m:
                  case f:
                  case s:
                    return ye;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var $ = a, A = s, D = e, y = c, j = r, I = m, B = f, L = t, M = i, q = n, te = p, ae = d, X = !1, be = !1;
    function _(F) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(F) {
      return be || (be = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(F) {
      return g(F) === a;
    }
    function z(F) {
      return g(F) === s;
    }
    function Y(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function re(F) {
      return g(F) === c;
    }
    function J(F) {
      return g(F) === r;
    }
    function ee(F) {
      return g(F) === m;
    }
    function Z(F) {
      return g(F) === f;
    }
    function H(F) {
      return g(F) === t;
    }
    function U(F) {
      return g(F) === i;
    }
    function ne(F) {
      return g(F) === n;
    }
    function R(F) {
      return g(F) === p;
    }
    function se(F) {
      return g(F) === d;
    }
    Le.ContextConsumer = $, Le.ContextProvider = A, Le.Element = D, Le.ForwardRef = y, Le.Fragment = j, Le.Lazy = I, Le.Memo = B, Le.Portal = L, Le.Profiler = M, Le.StrictMode = q, Le.Suspense = te, Le.SuspenseList = ae, Le.isAsyncMode = _, Le.isConcurrentMode = W, Le.isContextConsumer = K, Le.isContextProvider = z, Le.isElement = Y, Le.isForwardRef = re, Le.isFragment = J, Le.isLazy = ee, Le.isMemo = Z, Le.isPortal = H, Le.isProfiler = U, Le.isStrictMode = ne, Le.isSuspense = R, Le.isSuspenseList = se, Le.isValidElementType = T, Le.typeOf = g;
  }()), Le;
}
process.env.NODE_ENV === "production" ? Ri.exports = Wf() : Ri.exports = zf();
var nn = Ri.exports;
function rc(e, t = "") {
  return e.displayName || e.name || t;
}
function Ea(e, t, r) {
  const n = rc(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function qf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return rc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case nn.ForwardRef:
          return Ea(e, e.render, "ForwardRef");
        case nn.Memo:
          return Ea(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Uf = Oo();
function oi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ci(e, t, r) {
  return Yf(t) ? r : t[e] || t;
}
const Tn = Symbol("mui.processed_props");
function Rn(e, t, r) {
  if (Tn in e)
    return e[Tn];
  const n = {
    ...e,
    theme: Ci(t, e.theme, r)
  };
  return e[Tn] = n, n[Tn] = n, n;
}
function Hf(e) {
  return e ? (t, r) => r[e] : null;
}
function Wn(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => Wn(i, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const {
      variants: i,
      ...s
    } = n;
    let a = s, l;
    e: for (let c = 0; c < i.length; c += 1) {
      const p = i[c];
      if (typeof p.props == "function") {
        if (l ?? (l = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !p.props(l))
          continue;
      } else
        for (const d in p.props)
          if (t[d] !== p.props[d] && ((r = t.ownerState) == null ? void 0 : r[d]) !== p.props[d])
            continue e;
      Array.isArray(a) || (a = [a]), typeof p.style == "function" ? (l ?? (l = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), a.push(p.style(l))) : a.push(p.style);
    }
    return a;
  }
  return n;
}
function nc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Uf,
    rootShouldForwardProp: n = oi,
    slotShouldForwardProp: i = oi
  } = e, s = (a) => or(Rn(a, t, r));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    Id(a, (g) => g.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: c,
      slot: p,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Hf(Sa(p)),
      ...S
    } = l, b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), x = f || !1;
    let E;
    process.env.NODE_ENV !== "production" && c && (E = `${c}-${Sa(p || "Root")}`);
    let O = oi;
    p === "Root" || p === "root" ? O = n : p ? O = i : Kf(a) && (O = void 0);
    const w = Hl(a, {
      shouldForwardProp: O,
      label: E,
      ...S
    }), v = (g) => typeof g == "function" && g.__emotion_real !== g || Mt(g) ? ($) => Wn(g, Rn($, t, r)) : g, T = (g, ...$) => {
      let A = v(g);
      const D = $ ? $.map(v) : [];
      c && m && D.push((I) => {
        const B = Ci(t, I.theme, r);
        if (!B.components || !B.components[c] || !B.components[c].styleOverrides)
          return null;
        const L = B.components[c].styleOverrides, M = {}, q = Rn(I, t, r);
        for (const te in L)
          M[te] = Wn(L[te], q);
        return m(I, M);
      }), c && !b && D.push((I) => {
        var B, L;
        const M = Ci(t, I.theme, r), q = (L = (B = M == null ? void 0 : M.components) == null ? void 0 : B[c]) == null ? void 0 : L.variants;
        return q ? Wn({
          variants: q
        }, Rn(I, t, r)) : null;
      }), x || D.push(s);
      const y = D.length - $.length;
      if (Array.isArray(g) && y > 0) {
        const I = new Array(y).fill("");
        A = [...g, ...I], A.raw = [...g.raw, ...I];
      }
      const j = w(A, ...D);
      if (process.env.NODE_ENV !== "production") {
        let I;
        c && (I = `${c}${pe(p || "")}`), I === void 0 && (I = `Styled(${qf(a)})`), j.displayName = I;
      }
      return a.muiName && (j.muiName = a.muiName), j;
    };
    return w.withConfig && (T.withConfig = w.withConfig), T;
  };
}
function Yf(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Kf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Sa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Xf = nc();
function on(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const i = n;
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
              r[i][c] = on(s[c], a[c]);
            }
        }
      } else r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function Gf(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : on(t.components[r].defaultProps, n);
}
function oc({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = ko(r);
  return n && (i = i[n] || i), Gf({
    theme: i,
    name: t,
    props: e
  });
}
const qt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function Zf(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function cs(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Zf(e, t, r);
}
function Jf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ut(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ut(Jf(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Dt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Dt(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const Qf = (e) => {
  const t = Ut(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ur = (e, t) => {
  try {
    return Qf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function To(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ic(e) {
  e = Ut(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, s = n * Math.min(i, 1 - i), a = (p, d = (p + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), To({
    type: l,
    values: c
  });
}
function Ni(e) {
  e = Ut(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ut(ic(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xa(e, t) {
  const r = Ni(e), n = Ni(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function St(e, t) {
  return e = Ut(e), t = cs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, To(e);
}
function Cn(e, t, r) {
  try {
    return St(e, t);
  } catch {
    return e;
  }
}
function Ro(e, t) {
  if (e = Ut(e), t = cs(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return To(e);
}
function Ae(e, t, r) {
  try {
    return Ro(e, t);
  } catch {
    return e;
  }
}
function Co(e, t) {
  if (e = Ut(e), t = cs(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return To(e);
}
function Ie(e, t, r) {
  try {
    return Co(e, t);
  } catch {
    return e;
  }
}
function eh(e, t = 0.15) {
  return Ni(e) > 0.5 ? Ro(e, t) : Co(e, t);
}
function Nn(e, t, r) {
  try {
    return eh(e, t);
  } catch {
    return e;
  }
}
function vn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function th(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function sc(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !th(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const En = vn(o.element, sc);
En.isRequired = vn(o.element.isRequired, sc);
function rh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function nh(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !rh(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const us = vn(o.elementType, nh), oh = "exact-prop: ​";
function No(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [oh]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function sn(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Wt = o.oneOfType([o.func, o.object]);
function wa(...e) {
  return e.reduce((t, r) => r == null ? t : function(...n) {
    t.apply(this, n), r.apply(this, n);
  }, () => {
  });
}
function ac(e, t = 166) {
  let r;
  function n(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function ii(e, t) {
  var r, n, i;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (n = (r = e.type) == null ? void 0 : r._payload) == null ? void 0 : n.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function nr(e) {
  return gt(e).defaultView || window;
}
function $i(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Oa = 0;
function ih(e) {
  const [t, r] = h.useState(e), n = e || t;
  return h.useEffect(() => {
    t == null && (Oa += 1, r(`mui-${Oa}`));
  }, [t]), n;
}
const ka = h.useId;
function lc(e) {
  if (ka !== void 0) {
    const t = ka();
    return e ?? t;
  }
  return ih(e);
}
function Ta({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: i
  } = h.useRef(e !== void 0), [s, a] = h.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    h.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${n} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: p
    } = h.useRef(t);
    h.useEffect(() => {
      !i && !Object.is(p, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = h.useCallback((p) => {
    i || a(p);
  }, []);
  return [l, c];
}
function gr(e) {
  const t = h.useRef(e);
  return qt(() => {
    t.current = e;
  }), h.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function it(...e) {
  return h.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      $i(r, t);
    });
  }, e);
}
const Ra = {};
function cc(e, t) {
  const r = h.useRef(Ra);
  return r.current === Ra && (r.current = e(t)), r;
}
const sh = [];
function ah(e) {
  h.useEffect(e, sh);
}
class ps {
  constructor() {
    Dn(this, "currentId", null), Dn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }), Dn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ps();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function uc() {
  const e = cc(ps.create).current;
  return ah(e.disposeEffect), e;
}
function Ca(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function pc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function lh(e) {
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
function dc(e, t, r, n) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = lh(i);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function fc(e, t, ...r) {
  return e[t] === void 0 ? null : dc(e, t, ...r);
}
function _i() {
  return null;
}
fc.isRequired = dc;
_i.isRequired = _i;
const hc = process.env.NODE_ENV === "production" ? _i : fc;
function Ue(e, t, r = void 0) {
  const n = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const p = s[c];
      p && (a += (l === !0 ? "" : " ") + t(p), l = !1, r && r[p] && (a += " " + r[p]));
    }
    n[i] = a;
  }
  return n;
}
function ch(e) {
  return typeof e == "string";
}
function mc(e, t, r) {
  return e === void 0 || ch(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function yc(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Na(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function gc(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const S = he(r == null ? void 0 : r.className, s, i == null ? void 0 : i.className, n == null ? void 0 : n.className), b = {
      ...r == null ? void 0 : r.style,
      ...i == null ? void 0 : i.style,
      ...n == null ? void 0 : n.style
    }, x = {
      ...r,
      ...i,
      ...n
    };
    return S.length > 0 && (x.className = S), Object.keys(b).length > 0 && (x.style = b), {
      props: x,
      internalRef: void 0
    };
  }
  const a = yc({
    ...i,
    ...n
  }), l = Na(n), c = Na(i), p = t(a), d = he(p == null ? void 0 : p.className, r == null ? void 0 : r.className, s, i == null ? void 0 : i.className, n == null ? void 0 : n.className), f = {
    ...p == null ? void 0 : p.style,
    ...r == null ? void 0 : r.style,
    ...i == null ? void 0 : i.style,
    ...n == null ? void 0 : n.style
  }, m = {
    ...p,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (m.className = d), Object.keys(f).length > 0 && (m.style = f), {
    props: m,
    internalRef: p.ref
  };
}
function bc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function $a(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: i,
    skipResolvingSlotProps: s = !1,
    ...a
  } = e, l = s ? {} : bc(n, i), {
    props: c,
    internalRef: p
  } = gc({
    ...a,
    externalSlotProps: l
  }), d = it(p, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return mc(r, {
    ...c,
    ref: d
  }, i);
}
function Sn(e) {
  return !e || !/* @__PURE__ */ h.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const ds = /* @__PURE__ */ h.createContext(null);
process.env.NODE_ENV !== "production" && (ds.displayName = "ThemeContext");
function fs() {
  const e = h.useContext(ds);
  return process.env.NODE_ENV !== "production" && h.useDebugValue(e), e;
}
const uh = typeof Symbol == "function" && Symbol.for, ph = uh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function dh(e, t) {
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
function Qn(e) {
  const {
    children: t,
    theme: r
  } = e, n = fs();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = h.useMemo(() => {
    const s = n === null ? {
      ...r
    } : dh(n, r);
    return s != null && (s[ph] = n !== null), s;
  }, [r, n]);
  return /* @__PURE__ */ N.jsx(ds.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.object, o.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Qn.propTypes = No(Qn.propTypes));
const vc = /* @__PURE__ */ h.createContext();
function Ec({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(vc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Ec.propTypes = {
  children: o.node,
  value: o.bool
});
const Sc = () => h.useContext(vc) ?? !1, xc = /* @__PURE__ */ h.createContext(void 0);
function wc({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ N.jsx(xc.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (wc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * @ignore
   */
  value: o.object
});
function fh(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const i = t.components[r];
  return i.defaultProps ? on(i.defaultProps, n) : !i.styleOverrides && !i.variants ? on(i, n) : n;
}
function hh({
  props: e,
  name: t
}) {
  const r = h.useContext(xc);
  return fh({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const _a = {};
function ja(e, t, r, n = !1) {
  return h.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const s = r(i), a = e ? {
        ...t,
        [e]: s
      } : s;
      return n ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function an(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = Jl(_a), s = fs() || _a;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = ja(n, i, r), l = ja(n, s, r, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ N.jsx(Qn, {
    theme: l,
    children: /* @__PURE__ */ N.jsx(po.Provider, {
      value: a,
      children: /* @__PURE__ */ N.jsx(Ec, {
        value: c,
        children: /* @__PURE__ */ N.jsx(wc, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (an.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: o.oneOfType([o.func, o.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: o.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (an.propTypes = No(an.propTypes));
const hs = "mode", ms = "color-scheme", mh = "data-color-scheme";
function yh(e) {
  const {
    defaultLightColorScheme: t = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: n = hs,
    colorSchemeStorageKey: i = ms,
    attribute: s = mh,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e || {};
  let c = "", p = s;
  if (s === "class" && (p = ".%s"), s === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const f = p.substring(1);
    c += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
  }
  const d = p.match(/\[([^\]]+)\]/);
  if (d) {
    const [f, m] = d[1].split("=");
    m || (c += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`), c += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${m ? `${m}.replace('%s', colorScheme)` : '""'});`;
  } else
    c += `${a}.setAttribute('${p}', colorScheme);`;
  return /* @__PURE__ */ N.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || 'system';
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
function Pa(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Oc(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function gh(e) {
  return Oc(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function si(e, t) {
  if (typeof window > "u")
    return;
  let r;
  try {
    r = localStorage.getItem(e) || void 0, r || localStorage.setItem(e, t);
  } catch {
  }
  return r || t;
}
function bh(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: i = [],
    modeStorageKey: s = hs,
    colorSchemeStorageKey: a = ms,
    storageWindow: l = typeof window > "u" ? void 0 : window
  } = e, c = i.join(","), p = i.length > 1, [d, f] = h.useState(() => {
    const v = si(s, t), T = si(`${a}-light`, r), g = si(`${a}-dark`, n);
    return {
      mode: v,
      systemMode: Pa(v),
      lightColorScheme: T,
      darkColorScheme: g
    };
  }), [, m] = h.useState(!1), S = h.useRef(!1);
  h.useEffect(() => {
    p && m(!0), S.current = !0;
  }, [p]);
  const b = gh(d), x = h.useCallback((v) => {
    f((T) => {
      if (v === T.mode)
        return T;
      const g = v ?? t;
      try {
        localStorage.setItem(s, g);
      } catch {
      }
      return {
        ...T,
        mode: g,
        systemMode: Pa(g)
      };
    });
  }, [s, t]), E = h.useCallback((v) => {
    v ? typeof v == "string" ? v && !c.includes(v) ? console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`) : f((T) => {
      const g = {
        ...T
      };
      return Oc(T, ($) => {
        try {
          localStorage.setItem(`${a}-${$}`, v);
        } catch {
        }
        $ === "light" && (g.lightColorScheme = v), $ === "dark" && (g.darkColorScheme = v);
      }), g;
    }) : f((T) => {
      const g = {
        ...T
      }, $ = v.light === null ? r : v.light, A = v.dark === null ? n : v.dark;
      if ($)
        if (!c.includes($))
          console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          g.lightColorScheme = $;
          try {
            localStorage.setItem(`${a}-light`, $);
          } catch {
          }
        }
      if (A)
        if (!c.includes(A))
          console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          g.darkColorScheme = A;
          try {
            localStorage.setItem(`${a}-dark`, A);
          } catch {
          }
        }
      return g;
    }) : f((T) => {
      try {
        localStorage.setItem(`${a}-light`, r), localStorage.setItem(`${a}-dark`, n);
      } catch {
      }
      return {
        ...T,
        lightColorScheme: r,
        darkColorScheme: n
      };
    });
  }, [c, a, r, n]), O = h.useCallback((v) => {
    d.mode === "system" && f((T) => {
      const g = v != null && v.matches ? "dark" : "light";
      return T.systemMode === g ? T : {
        ...T,
        systemMode: g
      };
    });
  }, [d.mode]), w = h.useRef(O);
  return w.current = O, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const v = (...g) => w.current(...g), T = window.matchMedia("(prefers-color-scheme: dark)");
    return T.addListener(v), v(T), () => {
      T.removeListener(v);
    };
  }, [p]), h.useEffect(() => {
    if (l && p) {
      const v = (T) => {
        const g = T.newValue;
        typeof T.key == "string" && T.key.startsWith(a) && (!g || c.match(g)) && (T.key.endsWith("light") && E({
          light: g
        }), T.key.endsWith("dark") && E({
          dark: g
        })), T.key === s && (!g || ["light", "dark", "system"].includes(g)) && x(g || t);
      };
      return l.addEventListener("storage", v), () => {
        l.removeEventListener("storage", v);
      };
    }
  }, [E, x, s, a, c, t, l, p]), {
    ...d,
    mode: S.current || !p ? d.mode : void 0,
    systemMode: S.current || !p ? d.systemMode : void 0,
    colorScheme: S.current || !p ? b : void 0,
    setMode: x,
    setColorScheme: E
  };
}
const vh = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Eh(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = hs,
    colorSchemeStorageKey: i = ms,
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
  }, p = /* @__PURE__ */ h.createContext(void 0);
  process.env.NODE_ENV !== "production" && (p.displayName = "ColorSchemeContext");
  const d = () => h.useContext(p) || c;
  function f(b) {
    var x, E, O, w, v;
    const {
      children: T,
      theme: g,
      modeStorageKey: $ = n,
      colorSchemeStorageKey: A = i,
      disableTransitionOnChange: D = s,
      storageWindow: y = typeof window > "u" ? void 0 : window,
      documentNode: j = typeof document > "u" ? void 0 : document,
      colorSchemeNode: I = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: L = !1
    } = b, M = h.useRef(!1), q = fs(), te = h.useContext(p), ae = !!te && !B, X = h.useMemo(() => g || (typeof r == "function" ? r() : r), [g]), be = X[t], {
      colorSchemes: _ = {},
      components: W = {},
      cssVarPrefix: K,
      ...z
    } = be || X, Y = Object.keys(_).filter((ge) => !!_[ge]).join(","), re = h.useMemo(() => Y.split(","), [Y]), J = typeof a == "string" ? a : a.light, ee = typeof a == "string" ? a : a.dark, Z = _[J] && _[ee] ? "system" : ((E = (x = _[z.defaultColorScheme]) == null ? void 0 : x.palette) == null ? void 0 : E.mode) || ((O = z.palette) == null ? void 0 : O.mode), {
      mode: H,
      setMode: U,
      systemMode: ne,
      lightColorScheme: R,
      darkColorScheme: se,
      colorScheme: F,
      setColorScheme: me
    } = bh({
      supportedColorSchemes: re,
      defaultLightColorScheme: J,
      defaultDarkColorScheme: ee,
      modeStorageKey: $,
      colorSchemeStorageKey: A,
      defaultMode: Z,
      storageWindow: y
    });
    let we = H, ye = F;
    ae && (we = te.mode, ye = te.colorScheme);
    const De = ye || z.defaultColorScheme, Fe = ((w = z.generateThemeVars) == null ? void 0 : w.call(z)) || z.vars, Ee = {
      ...z,
      components: W,
      colorSchemes: _,
      cssVarPrefix: K,
      vars: Fe
    };
    if (typeof Ee.generateSpacing == "function" && (Ee.spacing = Ee.generateSpacing()), De) {
      const ge = _[De];
      ge && typeof ge == "object" && Object.keys(ge).forEach((Oe) => {
        ge[Oe] && typeof ge[Oe] == "object" ? Ee[Oe] = {
          ...Ee[Oe],
          ...ge[Oe]
        } : Ee[Oe] = ge[Oe];
      });
    }
    const He = z.colorSchemeSelector;
    h.useEffect(() => {
      if (ye && I && He && He !== "media") {
        const ge = He;
        let Oe = He;
        if (ge === "class" && (Oe = ".%s"), ge === "data" && (Oe = "[data-%s]"), ge != null && ge.startsWith("data-") && !ge.includes("%s") && (Oe = `[${ge}="%s"]`), Oe.startsWith("."))
          I.classList.remove(...re.map((Xe) => Oe.substring(1).replace("%s", Xe))), I.classList.add(Oe.substring(1).replace("%s", ye));
        else {
          const Xe = Oe.replace("%s", ye).match(/\[([^\]]+)\]/);
          if (Xe) {
            const [ut, lt] = Xe[1].split("=");
            lt || re.forEach((ve) => {
              I.removeAttribute(ut.replace(ye, ve));
            }), I.setAttribute(ut, lt ? lt.replace(/"|'/g, "") : "");
          } else
            I.setAttribute(Oe, ye);
        }
      }
    }, [ye, He, I, re]), h.useEffect(() => {
      let ge;
      if (D && M.current && j) {
        const Oe = j.createElement("style");
        Oe.appendChild(j.createTextNode(vh)), j.head.appendChild(Oe), window.getComputedStyle(j.body), ge = setTimeout(() => {
          j.head.removeChild(Oe);
        }, 1);
      }
      return () => {
        clearTimeout(ge);
      };
    }, [ye, D, j]), h.useEffect(() => (M.current = !0, () => {
      M.current = !1;
    }), []);
    const ie = h.useMemo(() => ({
      allColorSchemes: re,
      colorScheme: ye,
      darkColorScheme: se,
      lightColorScheme: R,
      mode: we,
      setColorScheme: me,
      setMode: U,
      systemMode: ne
    }), [re, ye, se, R, we, me, U, ne]);
    let We = !0;
    (L || z.cssVariables === !1 || ae && (q == null ? void 0 : q.cssVarPrefix) === K) && (We = !1);
    const at = /* @__PURE__ */ N.jsxs(h.Fragment, {
      children: [We && /* @__PURE__ */ N.jsx(h.Fragment, {
        children: (((v = Ee.generateStyleSheets) == null ? void 0 : v.call(Ee)) || []).map((ge, Oe) => /* @__PURE__ */ N.jsx(ss, {
          styles: ge
        }, Oe))
      }), /* @__PURE__ */ N.jsx(an, {
        themeId: be ? t : void 0,
        theme: l ? l(Ee) : Ee,
        children: T
      })]
    });
    return ae ? at : /* @__PURE__ */ N.jsx(p.Provider, {
      value: ie,
      children: at
    });
  }
  process.env.NODE_ENV !== "production" && (f.propTypes = {
    /**
     * The component tree.
     */
    children: o.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: o.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: o.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: o.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: o.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: o.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: o.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: o.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: o.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: o.object
  });
  const m = typeof a == "string" ? a : a.light, S = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (b) => yh({
      colorSchemeStorageKey: i,
      defaultLightColorScheme: m,
      defaultDarkColorScheme: S,
      modeStorageKey: n,
      ...b
    })
  };
}
function Sh(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const n = r[0];
    return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${n}${t(...r.slice(1))})` : `, ${n}`;
  }
  return (r, ...n) => `var(--${e ? `${e}-` : ""}${r}${t(...n)})`;
}
const La = (e, t, r, n = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = r : i && typeof i == "object" && (i[s] = r) : i && typeof i == "object" && (i[s] || (i[s] = n.includes(s) ? [] : {}), i = i[s]);
  });
}, xh = (e, t, r) => {
  function n(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  n(e);
}, wh = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function ai(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, i = {}, s = {}, a = {};
  return xh(
    e,
    (l, c, p) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, f = wh(l, c);
        Object.assign(i, {
          [d]: f
        }), La(s, l, `var(${d})`, p), La(a, l, `var(${d}, ${f})`, p);
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
function Oh(e, t = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: n,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: p,
    css: d,
    varsWithDefaults: f
  } = ai(c, t);
  let m = f;
  const S = {}, {
    [l]: b,
    ...x
  } = s;
  if (Object.entries(x || {}).forEach(([O, w]) => {
    const {
      vars: v,
      css: T,
      varsWithDefaults: g
    } = ai(w, t);
    m = nt(m, g), S[O] = {
      css: T,
      vars: v
    };
  }), b) {
    const {
      css: O,
      vars: w,
      varsWithDefaults: v
    } = ai(b, t);
    m = nt(m, v), S[l] = {
      css: O,
      vars: w
    };
  }
  function E(O, w) {
    var v, T;
    let g = i;
    if (i === "class" && (g = ".%s"), i === "data" && (g = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (g = `[${i}="%s"]`), O) {
      if (g === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((T = (v = s[O]) == null ? void 0 : v.palette) == null ? void 0 : T.mode) || O})`]: {
            ":root": w
          }
        };
      if (g)
        return e.defaultColorScheme === O ? `:root, ${g.replace("%s", String(O))}` : g.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let O = {
        ...p
      };
      return Object.entries(S).forEach(([, {
        vars: w
      }]) => {
        O = nt(O, w);
      }), O;
    },
    generateStyleSheets: () => {
      var O, w;
      const v = [], T = e.defaultColorScheme || "light";
      function g(D, y) {
        Object.keys(y).length && v.push(typeof D == "string" ? {
          [D]: {
            ...y
          }
        } : D);
      }
      g(r(void 0, {
        ...d
      }), d);
      const {
        [T]: $,
        ...A
      } = S;
      if ($) {
        const {
          css: D
        } = $, y = (w = (O = s[T]) == null ? void 0 : O.palette) == null ? void 0 : w.mode, j = !n && y ? {
          colorScheme: y,
          ...D
        } : {
          ...D
        };
        g(r(T, {
          ...j
        }), j);
      }
      return Object.entries(A).forEach(([D, {
        css: y
      }]) => {
        var j, I;
        const B = (I = (j = s[D]) == null ? void 0 : j.palette) == null ? void 0 : I.mode, L = !n && B ? {
          colorScheme: B,
          ...y
        } : {
          ...y
        };
        g(r(D, {
          ...L
        }), L);
      }), v;
    }
  };
}
function kh(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Th = Oo(), Rh = Xf("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Ch(e) {
  return oc({
    props: e,
    name: "MuiStack",
    defaultTheme: Th
  });
}
function Nh(e, t) {
  const r = h.Children.toArray(e).filter(Boolean);
  return r.reduce((n, i, s) => (n.push(i), s < r.length - 1 && n.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const $h = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], _h = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...Rt({
      theme: t
    }, ni({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = bo(t), i = Object.keys(t.breakpoints.values).reduce((l, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (l[c] = !0), l), {}), s = ni({
      values: e.direction,
      base: i
    }), a = ni({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((l, c, p) => {
      if (!s[l]) {
        const d = c > 0 ? s[p[c - 1]] : "column";
        s[l] = d;
      }
    }), r = nt(r, Rt({
      theme: t
    }, a, (l, c) => e.useFlexGap ? {
      gap: rr(n, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${$h(c ? s[c] : e.direction)}`]: rr(n, l)
      }
    }));
  }
  return r = Hd(t.breakpoints, r), r;
};
function jh(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Rh,
    useThemeProps: r = Ch,
    componentName: n = "MuiStack"
  } = e, i = () => Ue({
    root: ["root"]
  }, (l) => Be(n, l), {}), s = t(_h), a = /* @__PURE__ */ h.forwardRef(function(l, c) {
    const p = r(l), d = ls(p), {
      component: f = "div",
      direction: m = "column",
      spacing: S = 0,
      divider: b,
      children: x,
      className: E,
      useFlexGap: O = !1,
      ...w
    } = d, v = {
      direction: m,
      spacing: S,
      useFlexGap: O
    }, T = i();
    return /* @__PURE__ */ N.jsx(s, {
      as: f,
      ownerState: v,
      ref: c,
      className: he(T.root, E),
      ...w,
      children: b ? Nh(x, b) : x
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: o.node,
    direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
    divider: o.node,
    spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), a;
}
const Ma = {
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
    paper: Qr.white,
    default: Qr.white
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
}, li = {
  text: {
    primary: Qr.white,
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
    active: Qr.white,
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
function Aa(e, t, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Co(e.main, i) : t === "dark" && (e.dark = Ro(e.main, s)));
}
function Ph(e = "light") {
  return e === "dark" ? {
    main: cr[200],
    light: cr[50],
    dark: cr[400]
  } : {
    main: cr[700],
    light: cr[400],
    dark: cr[800]
  };
}
function Lh(e = "light") {
  return e === "dark" ? {
    main: lr[200],
    light: lr[50],
    dark: lr[400]
  } : {
    main: lr[500],
    light: lr[300],
    dark: lr[700]
  };
}
function Mh(e = "light") {
  return e === "dark" ? {
    main: ar[500],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[700],
    light: ar[400],
    dark: ar[800]
  };
}
function Ah(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: ur[700],
    light: ur[500],
    dark: ur[900]
  };
}
function Ih(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[800],
    light: pr[500],
    dark: pr[900]
  };
}
function Dh(e = "light") {
  return e === "dark" ? {
    main: Dr[400],
    light: Dr[300],
    dark: Dr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Dr[500],
    dark: Dr[900]
  };
}
function ys(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...i
  } = e, s = e.primary || Ph(t), a = e.secondary || Lh(t), l = e.error || Mh(t), c = e.info || Ah(t), p = e.success || Ih(t), d = e.warning || Dh(t);
  function f(b) {
    const x = xa(b, li.text.primary) >= r ? li.text.primary : Ma.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = xa(b, x);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${x} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const m = ({
    color: b,
    name: x,
    mainShade: E = 500,
    lightShade: O = 300,
    darkShade: w = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[E] && (b.main = b[E]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Dt(11, x ? ` (${x})` : "", E));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Dt(12, x ? ` (${x})` : "", JSON.stringify(b.main)));
    return Aa(b, "light", O, n), Aa(b, "dark", w, n), b.contrastText || (b.contrastText = f(b.main)), b;
  }, S = {
    dark: li,
    light: Ma
  };
  return process.env.NODE_ENV !== "production" && (S[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), nt({
    // A collection of common colors.
    common: {
      ...Qr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: kp,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S[t]
  }, i);
}
function Bh(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [n, i] = r;
    typeof i == "object" && (t[n] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Fh(e, t) {
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
function Vh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ia = {
  textTransform: "uppercase"
}, Da = '"Roboto", "Helvetica", "Arial", sans-serif';
function kc(e, t) {
  const {
    fontFamily: r = Da,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, S = d || ((E) => `${E / c * m}rem`), b = (E, O, w, v, T) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: S(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Da ? {
      letterSpacing: `${Vh(v / O)}em`
    } : {},
    ...T,
    ...p
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
    button: b(a, 14, 1.75, 0.4, Ia),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Ia),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return nt({
    htmlFontSize: c,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
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
const Wh = 0.2, zh = 0.14, qh = 0.12;
function ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Wh})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zh})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qh})`].join(",");
}
const Uh = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hh = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Yh = {
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
function Ba(e) {
  return `${Math.round(e)}ms`;
}
function Kh(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Xh(e) {
  const t = {
    ...Hh,
    ...e.easing
  }, r = {
    ...Yh,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Kh,
    create: (n = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...c
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (f) => typeof f == "string", d = (f) => !Number.isNaN(parseFloat(f));
        !p(n) && !Array.isArray(n) && console.error('MUI: Argument "props" must be a string or Array.'), !d(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(a) || console.error('MUI: Argument "easing" must be a string.'), !d(l) && !p(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(n) ? n : [n]).map((p) => `${p} ${typeof s == "string" ? s : Ba(s)} ${a} ${typeof l == "string" ? l : Ba(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Gh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ji(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    ...p
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Dt(20));
  const d = ys(s), f = Oo(e);
  let m = nt(f, {
    mixins: Fh(f.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Uh.slice(),
    typography: kc(d, l),
    transitions: Xh(a),
    zIndex: {
      ...Gh
    }
  });
  if (m = nt(m, p), m = t.reduce((S, b) => nt(S, b), m), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (x, E) => {
      let O;
      for (O in x) {
        const w = x[O];
        if (S.includes(O) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Be("", O);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[O] = {};
        }
      }
    };
    Object.keys(m.components).forEach((x) => {
      const E = m.components[x].styleOverrides;
      E && x.startsWith("Mui") && b(E, x);
    });
  }
  return m.unstable_sxConfig = {
    ...bn,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, m.unstable_sx = function(S) {
    return or({
      sx: S,
      theme: this
    });
  }, m;
}
function Pi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Zh = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const r = Pi(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Tc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Rc(e) {
  return e === "dark" ? Zh : [];
}
function Jh(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...i
  } = e, s = ys(t);
  return {
    palette: s,
    opacity: {
      ...Tc(s.mode),
      ...r
    },
    overlays: n || Rc(s.mode),
    ...i
  };
}
function Qh(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const em = (e) => [...[...Array(24)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], tm = (e) => (t, r) => {
  const n = e.colorSchemeSelector;
  let i = n;
  if (n === "class" && (i = ".%s"), n === "data" && (i = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (i = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return em(e.cssVarPrefix).forEach((a) => {
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
function rm(e) {
  return Mt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function nm(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const i = Object.entries(n);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !rm(l) || a.startsWith("unstable_") ? delete n[a] : Mt(l) && (n[a] = {
        ...l
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function om(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function P(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Hr(e) {
  return !e || !e.startsWith("hsl") ? e : ic(e);
}
function Vt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ur(Hr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function im(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const _t = (e) => {
  try {
    return e();
  } catch {
  }
}, sm = (e = "mui") => Sh(e);
function ci(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Jh({
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
  } = ji({
    ...r,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: s,
    opacity: {
      ...Tc(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Rc(i)
  }, a;
}
function am(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: a = Qh,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    ...c
  } = e, p = Object.keys(r)[0], d = n || (r.light && p !== "light" ? "light" : p), f = sm(s), {
    [d]: m,
    light: S,
    dark: b,
    ...x
  } = r, E = {
    ...x
  };
  let O = m;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Dt(21, d));
  const w = ci(E, O, c, d);
  S && !E.light && ci(E, S, void 0, "light"), b && !E.dark && ci(E, b, void 0, "dark");
  let v = {
    defaultColorScheme: d,
    ...w,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    getCssVar: f,
    colorSchemes: E,
    font: {
      ...Bh(w.typography),
      ...w.font
    },
    spacing: im(c.spacing)
  };
  Object.keys(v.colorSchemes).forEach((D) => {
    const y = v.colorSchemes[D].palette, j = (I) => {
      const B = I.split("-"), L = B[1], M = B[2];
      return f(I, y[L][M]);
    };
    if (y.mode === "light" && (P(y.common, "background", "#fff"), P(y.common, "onBackground", "#000")), y.mode === "dark" && (P(y.common, "background", "#000"), P(y.common, "onBackground", "#fff")), om(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      P(y.Alert, "errorColor", Ae(y.error.light, 0.6)), P(y.Alert, "infoColor", Ae(y.info.light, 0.6)), P(y.Alert, "successColor", Ae(y.success.light, 0.6)), P(y.Alert, "warningColor", Ae(y.warning.light, 0.6)), P(y.Alert, "errorFilledBg", j("palette-error-main")), P(y.Alert, "infoFilledBg", j("palette-info-main")), P(y.Alert, "successFilledBg", j("palette-success-main")), P(y.Alert, "warningFilledBg", j("palette-warning-main")), P(y.Alert, "errorFilledColor", _t(() => y.getContrastText(y.error.main))), P(y.Alert, "infoFilledColor", _t(() => y.getContrastText(y.info.main))), P(y.Alert, "successFilledColor", _t(() => y.getContrastText(y.success.main))), P(y.Alert, "warningFilledColor", _t(() => y.getContrastText(y.warning.main))), P(y.Alert, "errorStandardBg", Ie(y.error.light, 0.9)), P(y.Alert, "infoStandardBg", Ie(y.info.light, 0.9)), P(y.Alert, "successStandardBg", Ie(y.success.light, 0.9)), P(y.Alert, "warningStandardBg", Ie(y.warning.light, 0.9)), P(y.Alert, "errorIconColor", j("palette-error-main")), P(y.Alert, "infoIconColor", j("palette-info-main")), P(y.Alert, "successIconColor", j("palette-success-main")), P(y.Alert, "warningIconColor", j("palette-warning-main")), P(y.AppBar, "defaultBg", j("palette-grey-100")), P(y.Avatar, "defaultBg", j("palette-grey-400")), P(y.Button, "inheritContainedBg", j("palette-grey-300")), P(y.Button, "inheritContainedHoverBg", j("palette-grey-A100")), P(y.Chip, "defaultBorder", j("palette-grey-400")), P(y.Chip, "defaultAvatarColor", j("palette-grey-700")), P(y.Chip, "defaultIconColor", j("palette-grey-700")), P(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(y.LinearProgress, "primaryBg", Ie(y.primary.main, 0.62)), P(y.LinearProgress, "secondaryBg", Ie(y.secondary.main, 0.62)), P(y.LinearProgress, "errorBg", Ie(y.error.main, 0.62)), P(y.LinearProgress, "infoBg", Ie(y.info.main, 0.62)), P(y.LinearProgress, "successBg", Ie(y.success.main, 0.62)), P(y.LinearProgress, "warningBg", Ie(y.warning.main, 0.62)), P(y.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.11)`), P(y.Slider, "primaryTrack", Ie(y.primary.main, 0.62)), P(y.Slider, "secondaryTrack", Ie(y.secondary.main, 0.62)), P(y.Slider, "errorTrack", Ie(y.error.main, 0.62)), P(y.Slider, "infoTrack", Ie(y.info.main, 0.62)), P(y.Slider, "successTrack", Ie(y.success.main, 0.62)), P(y.Slider, "warningTrack", Ie(y.warning.main, 0.62));
      const I = Nn(y.background.default, 0.8);
      P(y.SnackbarContent, "bg", I), P(y.SnackbarContent, "color", _t(() => y.getContrastText(I))), P(y.SpeedDialAction, "fabHoverBg", Nn(y.background.paper, 0.15)), P(y.StepConnector, "border", j("palette-grey-400")), P(y.StepContent, "border", j("palette-grey-400")), P(y.Switch, "defaultColor", j("palette-common-white")), P(y.Switch, "defaultDisabledColor", j("palette-grey-100")), P(y.Switch, "primaryDisabledColor", Ie(y.primary.main, 0.62)), P(y.Switch, "secondaryDisabledColor", Ie(y.secondary.main, 0.62)), P(y.Switch, "errorDisabledColor", Ie(y.error.main, 0.62)), P(y.Switch, "infoDisabledColor", Ie(y.info.main, 0.62)), P(y.Switch, "successDisabledColor", Ie(y.success.main, 0.62)), P(y.Switch, "warningDisabledColor", Ie(y.warning.main, 0.62)), P(y.TableCell, "border", Ie(Cn(y.divider, 1), 0.88)), P(y.Tooltip, "bg", Cn(y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      P(y.Alert, "errorColor", Ie(y.error.light, 0.6)), P(y.Alert, "infoColor", Ie(y.info.light, 0.6)), P(y.Alert, "successColor", Ie(y.success.light, 0.6)), P(y.Alert, "warningColor", Ie(y.warning.light, 0.6)), P(y.Alert, "errorFilledBg", j("palette-error-dark")), P(y.Alert, "infoFilledBg", j("palette-info-dark")), P(y.Alert, "successFilledBg", j("palette-success-dark")), P(y.Alert, "warningFilledBg", j("palette-warning-dark")), P(y.Alert, "errorFilledColor", _t(() => y.getContrastText(y.error.dark))), P(y.Alert, "infoFilledColor", _t(() => y.getContrastText(y.info.dark))), P(y.Alert, "successFilledColor", _t(() => y.getContrastText(y.success.dark))), P(y.Alert, "warningFilledColor", _t(() => y.getContrastText(y.warning.dark))), P(y.Alert, "errorStandardBg", Ae(y.error.light, 0.9)), P(y.Alert, "infoStandardBg", Ae(y.info.light, 0.9)), P(y.Alert, "successStandardBg", Ae(y.success.light, 0.9)), P(y.Alert, "warningStandardBg", Ae(y.warning.light, 0.9)), P(y.Alert, "errorIconColor", j("palette-error-main")), P(y.Alert, "infoIconColor", j("palette-info-main")), P(y.Alert, "successIconColor", j("palette-success-main")), P(y.Alert, "warningIconColor", j("palette-warning-main")), P(y.AppBar, "defaultBg", j("palette-grey-900")), P(y.AppBar, "darkBg", j("palette-background-paper")), P(y.AppBar, "darkColor", j("palette-text-primary")), P(y.Avatar, "defaultBg", j("palette-grey-600")), P(y.Button, "inheritContainedBg", j("palette-grey-800")), P(y.Button, "inheritContainedHoverBg", j("palette-grey-700")), P(y.Chip, "defaultBorder", j("palette-grey-700")), P(y.Chip, "defaultAvatarColor", j("palette-grey-300")), P(y.Chip, "defaultIconColor", j("palette-grey-300")), P(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(y.LinearProgress, "primaryBg", Ae(y.primary.main, 0.5)), P(y.LinearProgress, "secondaryBg", Ae(y.secondary.main, 0.5)), P(y.LinearProgress, "errorBg", Ae(y.error.main, 0.5)), P(y.LinearProgress, "infoBg", Ae(y.info.main, 0.5)), P(y.LinearProgress, "successBg", Ae(y.success.main, 0.5)), P(y.LinearProgress, "warningBg", Ae(y.warning.main, 0.5)), P(y.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.13)`), P(y.Slider, "primaryTrack", Ae(y.primary.main, 0.5)), P(y.Slider, "secondaryTrack", Ae(y.secondary.main, 0.5)), P(y.Slider, "errorTrack", Ae(y.error.main, 0.5)), P(y.Slider, "infoTrack", Ae(y.info.main, 0.5)), P(y.Slider, "successTrack", Ae(y.success.main, 0.5)), P(y.Slider, "warningTrack", Ae(y.warning.main, 0.5));
      const I = Nn(y.background.default, 0.98);
      P(y.SnackbarContent, "bg", I), P(y.SnackbarContent, "color", _t(() => y.getContrastText(I))), P(y.SpeedDialAction, "fabHoverBg", Nn(y.background.paper, 0.15)), P(y.StepConnector, "border", j("palette-grey-600")), P(y.StepContent, "border", j("palette-grey-600")), P(y.Switch, "defaultColor", j("palette-grey-300")), P(y.Switch, "defaultDisabledColor", j("palette-grey-600")), P(y.Switch, "primaryDisabledColor", Ae(y.primary.main, 0.55)), P(y.Switch, "secondaryDisabledColor", Ae(y.secondary.main, 0.55)), P(y.Switch, "errorDisabledColor", Ae(y.error.main, 0.55)), P(y.Switch, "infoDisabledColor", Ae(y.info.main, 0.55)), P(y.Switch, "successDisabledColor", Ae(y.success.main, 0.55)), P(y.Switch, "warningDisabledColor", Ae(y.warning.main, 0.55)), P(y.TableCell, "border", Ae(Cn(y.divider, 1), 0.68)), P(y.Tooltip, "bg", Cn(y.grey[700], 0.92));
    }
    Vt(y.background, "default"), Vt(y.background, "paper"), Vt(y.common, "background"), Vt(y.common, "onBackground"), Vt(y, "divider"), Object.keys(y).forEach((I) => {
      const B = y[I];
      B && typeof B == "object" && (B.main && P(y[I], "mainChannel", Ur(Hr(B.main))), B.light && P(y[I], "lightChannel", Ur(Hr(B.light))), B.dark && P(y[I], "darkChannel", Ur(Hr(B.dark))), B.contrastText && P(y[I], "contrastTextChannel", Ur(Hr(B.contrastText))), I === "text" && (Vt(y[I], "primary"), Vt(y[I], "secondary")), I === "action" && (B.active && Vt(y[I], "active"), B.selected && Vt(y[I], "selected")));
    });
  }), v = t.reduce((D, y) => nt(D, y), v);
  const T = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: a,
    getSelector: tm(v)
  }, {
    vars: g,
    generateThemeVars: $,
    generateStyleSheets: A
  } = Oh(v, T);
  return v.vars = g, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([D, y]) => {
    v[D] = y;
  }), v.generateThemeVars = $, v.generateStyleSheets = A, v.generateSpacing = function() {
    return Zl(c.spacing, bo(this));
  }, v.getColorSchemeSelector = kh(l), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = a, v.unstable_sxConfig = {
    ...bn,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, v.unstable_sx = function(D) {
    return or({
      sx: D,
      theme: this
    });
  }, v.toRuntimeSource = nm, v;
}
function Fa(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ys({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function $o(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: i = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r == null ? void 0 : r.mode,
    ...a
  } = e, l = s || "light", c = i == null ? void 0 : i[l], p = {
    ...i,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ji(e, ...t);
    let d = r;
    "palette" in e || p[l] && (p[l] !== !0 ? d = p[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = ji({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = p, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: f.palette
    }, Fa(f, "dark", p.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: f.palette
    }, Fa(f, "light", p.light)), f;
  }
  return !r && !("light" in p) && l === "light" && (p.light = !0), am({
    ...a,
    colorSchemes: p,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const _o = $o();
function gs() {
  const e = ko(_o);
  return process.env.NODE_ENV !== "production" && h.useDebugValue(e), e[Tt] || e;
}
function Cc({
  props: e,
  name: t
}) {
  return oc({
    props: e,
    name: t,
    defaultTheme: _o,
    themeId: Tt
  });
}
function Nc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const wt = (e) => Nc(e) && e !== "classes", ue = nc({
  themeId: Tt,
  defaultTheme: _o,
  rootShouldForwardProp: wt
});
function Va({
  theme: e,
  ...t
}) {
  const r = Tt in e ? e[Tt] : void 0;
  return /* @__PURE__ */ N.jsx(an, {
    ...t,
    themeId: r ? Tt : void 0,
    theme: r || e
  });
}
const $n = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: lm,
  useColorScheme: rv,
  getInitColorSchemeScript: nv
} = Eh({
  themeId: Tt,
  // @ts-ignore ignore module augmentation tests
  theme: () => $o({
    cssVariables: !0
  }),
  colorSchemeStorageKey: $n.colorSchemeStorageKey,
  modeStorageKey: $n.modeStorageKey,
  defaultColorScheme: {
    light: $n.defaultLightColorScheme,
    dark: $n.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: kc(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return or({
        sx: r,
        theme: this
      });
    }, t;
  }
}), cm = lm;
function um({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ N.jsx(Va, {
    theme: e,
    ...t
  }) : "colorSchemes" in (Tt in e ? e[Tt] : e) ? /* @__PURE__ */ N.jsx(cm, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ N.jsx(Va, {
    theme: e,
    ...t
  });
}
function $c(e) {
  return /* @__PURE__ */ N.jsx(Ql, {
    ...e,
    defaultTheme: _o,
    themeId: Tt
  });
}
process.env.NODE_ENV !== "production" && ($c.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function bs(e) {
  return function(t) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ N.jsx($c, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...t
        }) : e
      })
    );
  };
}
function pm() {
  return ls;
}
const Wa = {
  theme: void 0
};
function Ye(e) {
  let t, r;
  return (n) => {
    let i = t;
    return (i === void 0 || n.theme !== r) && (Wa.theme = n.theme, i = e(Wa), t = i, r = n.theme), i;
  };
}
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Ke(e) {
  return hh(e);
}
function dm(e) {
  return Be("MuiSvgIcon", e);
}
Me("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const fm = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(r)}`]
  };
  return Ue(i, dm, n);
}, hm = ue("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pe(r.color)}`], t[`fontSize${pe(r.fontSize)}`]];
  }
})(Ye(({
  theme: e
}) => {
  var t, r, n, i, s, a, l, c, p, d, f, m, S, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (x) => !x.hasSvgAsChild,
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
          fontSize: ((d = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : d.call(p, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, x]) => x && x.main).map(([x]) => {
        var E, O;
        return {
          props: {
            color: x
          },
          style: {
            color: (O = (E = (e.vars ?? e).palette) == null ? void 0 : E[x]) == null ? void 0 : O.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (m = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : m.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (S = (e.vars ?? e).palette) == null ? void 0 : S.action) == null ? void 0 : b.disabled
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
})), ln = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiSvgIcon"
  }), {
    children: n,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: c,
    inheritViewBox: p = !1,
    titleAccess: d,
    viewBox: f = "0 0 24 24",
    ...m
  } = r, S = /* @__PURE__ */ h.isValidElement(n) && n.type === "svg", b = {
    ...r,
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: e.fontSize,
    inheritViewBox: p,
    viewBox: f,
    hasSvgAsChild: S
  }, x = {};
  p || (x.viewBox = f);
  const E = fm(b);
  return /* @__PURE__ */ N.jsxs(hm, {
    as: a,
    className: he(E.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: t,
    ...x,
    ...m,
    ...S && n.props,
    ownerState: b,
    children: [S ? n.props.children : n, d ? /* @__PURE__ */ N.jsx("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ln.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
ln && (ln.muiName = "SvgIcon");
function mm(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ N.jsx(ln, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = ln.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(r));
}
function _c(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Li(e, t) {
  return Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Li(e, t);
}
function jc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Li(e, t);
}
const za = {
  disabled: !1
};
var ym = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const eo = rt.createContext(null);
var gm = function(e) {
  return e.scrollTop;
}, Yr = "unmounted", Jt = "exited", Qt = "entering", hr = "entered", Mi = "exiting", Ft = /* @__PURE__ */ function(e) {
  jc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = i, l = a && !a.isMounting ? n.enter : n.appear, c;
    return s.appearStatus = null, n.in ? l ? (c = Jt, s.appearStatus = Qt) : c = hr : n.unmountOnExit || n.mountOnEnter ? c = Yr : c = Jt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(n, i) {
    var s = n.in;
    return s && i.status === Yr ? {
      status: Jt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(n) {
    var i = null;
    if (n !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Qt && s !== hr && (i = Qt) : (s === Qt || s === hr) && (i = Mi);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var n = this.props.timeout, i, s, a;
    return i = s = a = n, n != null && typeof n != "number" && (i = n.exit, s = n.enter, a = n.appear !== void 0 ? n.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, r.updateStatus = function(n, i) {
    if (n === void 0 && (n = !1), i !== null)
      if (this.cancelNextCallback(), i === Qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : yr.findDOMNode(this);
          s && gm(s);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Jt && this.setState({
      status: Yr
    });
  }, r.performEnter = function(n) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [a] : [yr.findDOMNode(this), a], c = l[0], p = l[1], d = this.getTimeouts(), f = a ? d.appear : d.enter;
    if (!n && !s || za.disabled) {
      this.safeSetState({
        status: hr
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, p), this.safeSetState({
      status: Qt
    }, function() {
      i.props.onEntering(c, p), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: hr
        }, function() {
          i.props.onEntered(c, p);
        });
      });
    });
  }, r.performExit = function() {
    var n = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : yr.findDOMNode(this);
    if (!i || za.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        n.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Mi
    }, function() {
      n.props.onExiting(a), n.onTransitionEnd(s.exit, function() {
        n.safeSetState({
          status: Jt
        }, function() {
          n.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(n, i) {
    i = this.setNextCallback(i), this.setState(n, i);
  }, r.setNextCallback = function(n) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, n(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(n, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : yr.findDOMNode(this), a = n == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = l[0], p = l[1];
      this.props.addEndListener(c, p);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, r.render = function() {
    var n = this.state.status;
    if (n === Yr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = _c(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ rt.createElement(eo.Provider, {
        value: null
      }, typeof s == "function" ? s(n, a) : rt.cloneElement(rt.Children.only(s), a))
    );
  }, t;
}(rt.Component);
Ft.contextType = eo;
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, r, n, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, i, s);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
  timeout: function(e) {
    var t = ym;
    e.addEndListener || (t = t.isRequired);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return t.apply(void 0, [e].concat(n));
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function dr() {
}
Ft.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: dr,
  onEntering: dr,
  onEntered: dr,
  onExit: dr,
  onExiting: dr,
  onExited: dr
};
Ft.UNMOUNTED = Yr;
Ft.EXITED = Jt;
Ft.ENTERING = Qt;
Ft.ENTERED = hr;
Ft.EXITING = Mi;
function bm(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vs(e, t) {
  var r = function(i) {
    return t && An(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Nu.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function vm(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (n[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var p = n[c][a];
        l[n[c][a]] = r(p);
      }
    l[c] = r(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = r(i[a]);
  return l;
}
function er(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Em(e, t) {
  return vs(e.children, function(r) {
    return In(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: er(r, "appear", e),
      enter: er(r, "enter", e),
      exit: er(r, "exit", e)
    });
  });
}
function Sm(e, t, r) {
  var n = vs(e.children), i = vm(t, n);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (An(a)) {
      var l = s in t, c = s in n, p = t[s], d = An(p) && !p.props.in;
      c && (!l || d) ? i[s] = In(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: er(a, "exit", e),
        enter: er(a, "enter", e)
      }) : !c && l && !d ? i[s] = In(a, {
        in: !1
      }) : c && l && An(p) && (i[s] = In(a, {
        onExited: r.bind(null, a),
        in: p.props.in,
        exit: er(a, "exit", e),
        enter: er(a, "enter", e)
      }));
    }
  }), i;
}
var xm = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, wm = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, Es = /* @__PURE__ */ function(e) {
  jc(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = s.handleExited.bind(bm(s));
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
  }, t.getDerivedStateFromProps = function(n, i) {
    var s = i.children, a = i.handleExited, l = i.firstRender;
    return {
      children: l ? Em(n, a) : Sm(n, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(n, i) {
    var s = vs(this.props.children);
    n.key in s || (n.props.onExited && n.props.onExited(i), this.mounted && this.setState(function(a) {
      var l = Gn({}, a.children);
      return delete l[n.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var n = this.props, i = n.component, s = n.childFactory, a = _c(n, ["component", "childFactory"]), l = this.state.contextValue, c = xm(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ rt.createElement(eo.Provider, {
      value: l
    }, c) : /* @__PURE__ */ rt.createElement(eo.Provider, {
      value: l
    }, /* @__PURE__ */ rt.createElement(i, a, c));
  }, t;
}(rt.Component);
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
Es.defaultProps = wm;
const Pc = (e) => e.scrollTop;
function to(e, t) {
  const {
    timeout: r,
    easing: n,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: i.transitionDelay
  };
}
function Om(e) {
  return Be("MuiPaper", e);
}
Me("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const km = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: i
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Ue(s, Om, i);
}, Tm = ue("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Ye(({
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
}))), Ss = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r;
  const n = Ke({
    props: e,
    name: "MuiPaper"
  }), i = gs(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: p = "elevation",
    ...d
  } = n, f = {
    ...n,
    component: a,
    elevation: l,
    square: c,
    variant: p
  }, m = km(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ N.jsx(Tm, {
    as: a,
    ownerState: f,
    className: he(m.root, s),
    ref: t,
    ...d,
    style: {
      ...p === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (r = i.vars.overlays) == null ? void 0 : r[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${St("#fff", Pi(l))}, ${St("#fff", Pi(l))})`
        }
      },
      ...d.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: vn(hc, (e) => {
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
  square: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function kt(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: i,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: p,
    slots: d = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...m
  } = s, S = d[e] || n, b = bc(f[e], i), {
    props: {
      component: x,
      ...E
    },
    internalRef: O
  } = gc({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: b
  }), w = it(O, b == null ? void 0 : b.ref, t.ref), v = a ? a(E) : {}, T = {
    ...i,
    ...v
  }, g = e === "root" ? x || p : x, $ = mc(S, {
    ...e === "root" && !p && !d[e] && l,
    ...e !== "root" && !d[e] && l,
    ...E,
    ...g && {
      as: g
    },
    ref: w
  }, T);
  return Object.keys(v).forEach((A) => {
    delete $[A];
  }), [S, $];
}
class ro {
  constructor() {
    Dn(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    }), this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ro();
  }
  static use() {
    const t = cc(ro.create).current, [r, n] = h.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, h.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Cm(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function Rm() {
  return ro.use();
}
function Cm() {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}
function Lc(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: p
  } = e, [d, f] = h.useState(!1), m = he(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), S = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = he(r.child, d && r.childLeaving, n && r.childPulsate);
  return !l && !d && f(!0), h.useEffect(() => {
    if (!l && c != null) {
      const x = setTimeout(c, p);
      return () => {
        clearTimeout(x);
      };
    }
  }, [c, l, p]), /* @__PURE__ */ N.jsx("span", {
    className: m,
    style: S,
    children: /* @__PURE__ */ N.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const bt = Me("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ai = 550, Nm = 80, $m = Or`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, _m = Or`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, jm = Or`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Pm = ue("span", {
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
}), Lm = ue(Lc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${bt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${$m};
    animation-duration: ${Ai}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${bt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${bt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${bt.childLeaving} {
    opacity: 0;
    animation-name: ${_m};
    animation-duration: ${Ai}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${bt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${jm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Mc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiTouchRipple"
  }), {
    center: n = !1,
    classes: i = {},
    className: s,
    ...a
  } = r, [l, c] = h.useState([]), p = h.useRef(0), d = h.useRef(null);
  h.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const f = h.useRef(!1), m = uc(), S = h.useRef(null), b = h.useRef(null), x = h.useCallback((v) => {
    const {
      pulsate: T,
      rippleX: g,
      rippleY: $,
      rippleSize: A,
      cb: D
    } = v;
    c((y) => [...y, /* @__PURE__ */ N.jsx(Lm, {
      classes: {
        ripple: he(i.ripple, bt.ripple),
        rippleVisible: he(i.rippleVisible, bt.rippleVisible),
        ripplePulsate: he(i.ripplePulsate, bt.ripplePulsate),
        child: he(i.child, bt.child),
        childLeaving: he(i.childLeaving, bt.childLeaving),
        childPulsate: he(i.childPulsate, bt.childPulsate)
      },
      timeout: Ai,
      pulsate: T,
      rippleX: g,
      rippleY: $,
      rippleSize: A
    }, p.current)]), p.current += 1, d.current = D;
  }, [i]), E = h.useCallback((v = {}, T = {}, g = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: A = n || T.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = T;
    if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
    const y = D ? null : b.current, j = y ? y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, B, L;
    if (A || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      I = Math.round(j.width / 2), B = Math.round(j.height / 2);
    else {
      const {
        clientX: M,
        clientY: q
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      I = Math.round(M - j.left), B = Math.round(q - j.top);
    }
    if (A)
      L = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const M = Math.max(Math.abs((y ? y.clientWidth : 0) - I), I) * 2 + 2, q = Math.max(Math.abs((y ? y.clientHeight : 0) - B), B) * 2 + 2;
      L = Math.sqrt(M ** 2 + q ** 2);
    }
    v != null && v.touches ? S.current === null && (S.current = () => {
      x({
        pulsate: $,
        rippleX: I,
        rippleY: B,
        rippleSize: L,
        cb: g
      });
    }, m.start(Nm, () => {
      S.current && (S.current(), S.current = null);
    })) : x({
      pulsate: $,
      rippleX: I,
      rippleY: B,
      rippleSize: L,
      cb: g
    });
  }, [n, x, m]), O = h.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), w = h.useCallback((v, T) => {
    if (m.clear(), (v == null ? void 0 : v.type) === "touchend" && S.current) {
      S.current(), S.current = null, m.start(0, () => {
        w(v, T);
      });
      return;
    }
    S.current = null, c((g) => g.length > 0 ? g.slice(1) : g), d.current = T;
  }, [m]);
  return h.useImperativeHandle(t, () => ({
    pulsate: O,
    start: E,
    stop: w
  }), [O, E, w]), /* @__PURE__ */ N.jsx(Pm, {
    className: he(bt.root, i.root, s),
    ref: b,
    ...a,
    children: /* @__PURE__ */ N.jsx(Es, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Mc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function Mm(e) {
  return Be("MuiButtonBase", e);
}
const Am = Me("MuiButtonBase", ["root", "disabled", "focusVisible"]), Im = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, s = Ue({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Mm, i);
  return r && n && (s.root += ` ${n}`), s;
}, Dm = ue("button", {
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
  [`&.${Am.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), xs = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiButtonBase"
  }), {
    action: n,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: c = !1,
    disableRipple: p = !1,
    disableTouchRipple: d = !1,
    focusRipple: f = !1,
    focusVisibleClassName: m,
    LinkComponent: S = "a",
    onBlur: b,
    onClick: x,
    onContextMenu: E,
    onDragLeave: O,
    onFocus: w,
    onFocusVisible: v,
    onKeyDown: T,
    onKeyUp: g,
    onMouseDown: $,
    onMouseLeave: A,
    onMouseUp: D,
    onTouchEnd: y,
    onTouchMove: j,
    onTouchStart: I,
    tabIndex: B = 0,
    TouchRippleProps: L,
    touchRippleRef: M,
    type: q,
    ...te
  } = r, ae = h.useRef(null), X = Rm(), be = it(X.ref, M), [_, W] = h.useState(!1);
  c && _ && W(!1), h.useImperativeHandle(n, () => ({
    focusVisible: () => {
      W(!0), ae.current.focus();
    }
  }), []);
  const K = X.shouldMount && !p && !c;
  h.useEffect(() => {
    _ && f && !p && X.pulsate();
  }, [p, f, _, X]);
  function z(ie, We, at = d) {
    return gr((ge) => (We && We(ge), at || X[ie](ge), !0));
  }
  const Y = z("start", $), re = z("stop", E), J = z("stop", O), ee = z("stop", D), Z = z("stop", (ie) => {
    _ && ie.preventDefault(), A && A(ie);
  }), H = z("start", I), U = z("stop", y), ne = z("stop", j), R = z("stop", (ie) => {
    Ca(ie.target) || W(!1), b && b(ie);
  }, !1), se = gr((ie) => {
    ae.current || (ae.current = ie.currentTarget), Ca(ie.target) && (W(!0), v && v(ie)), w && w(ie);
  }), F = () => {
    const ie = ae.current;
    return l && l !== "button" && !(ie.tagName === "A" && ie.href);
  }, me = gr((ie) => {
    f && !ie.repeat && _ && ie.key === " " && X.stop(ie, () => {
      X.start(ie);
    }), ie.target === ie.currentTarget && F() && ie.key === " " && ie.preventDefault(), T && T(ie), ie.target === ie.currentTarget && F() && ie.key === "Enter" && !c && (ie.preventDefault(), x && x(ie));
  }), we = gr((ie) => {
    f && ie.key === " " && _ && !ie.defaultPrevented && X.stop(ie, () => {
      X.pulsate(ie);
    }), g && g(ie), x && ie.target === ie.currentTarget && F() && ie.key === " " && !ie.defaultPrevented && x(ie);
  });
  let ye = l;
  ye === "button" && (te.href || te.to) && (ye = S);
  const De = {};
  ye === "button" ? (De.type = q === void 0 ? "button" : q, De.disabled = c) : (!te.href && !te.to && (De.role = "button"), c && (De["aria-disabled"] = c));
  const Fe = it(t, ae), Ee = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: p,
    disableTouchRipple: d,
    focusRipple: f,
    tabIndex: B,
    focusVisible: _
  }, He = Im(Ee);
  return /* @__PURE__ */ N.jsxs(Dm, {
    as: ye,
    className: he(He.root, a),
    ownerState: Ee,
    onBlur: R,
    onClick: x,
    onContextMenu: re,
    onFocus: se,
    onKeyDown: me,
    onKeyUp: we,
    onMouseDown: Y,
    onMouseLeave: Z,
    onMouseUp: ee,
    onDragLeave: J,
    onTouchEnd: U,
    onTouchMove: ne,
    onTouchStart: H,
    ref: Fe,
    tabIndex: c ? -1 : B,
    type: q,
    ...De,
    ...te,
    children: [s, K ? /* @__PURE__ */ N.jsx(Mc, {
      ref: be,
      center: i,
      ...L
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Wt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: us,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function Bm(e) {
  return typeof e.main == "string";
}
function Fm(e, t = []) {
  if (!Bm(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Ct(e = []) {
  return ([, t]) => t && Fm(t, e);
}
function Vm(e) {
  return Be("MuiTypography", e);
}
Me("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Wm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, zm = pm(), qm = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${pe(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return Ue(l, Vm, a);
}, Um = ue("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${pe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ye(({
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
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(Ct()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${pe(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), qa = {
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
}, Ac = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    color: r,
    ...n
  } = Ke({
    props: e,
    name: "MuiTypography"
  }), i = !Wm[r], s = zm({
    ...n,
    ...i && {
      color: r
    }
  }), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: p = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: m = "body1",
    variantMapping: S = qa,
    ...b
  } = s, x = {
    ...s,
    align: a,
    color: r,
    className: l,
    component: c,
    gutterBottom: p,
    noWrap: d,
    paragraph: f,
    variant: m,
    variantMapping: S
  }, E = c || (f ? "p" : S[m] || qa[m]) || "span", O = qm(x);
  return /* @__PURE__ */ N.jsx(Um, {
    as: E,
    ref: t,
    className: he(O.root, l),
    ...b,
    ownerState: x,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...b.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
function Hm(e) {
  return typeof e == "function" ? e() : e;
}
const no = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    children: r,
    container: n,
    disablePortal: i = !1
  } = e, [s, a] = h.useState(null), l = it(Sn(r), t);
  if (qt(() => {
    i || a(Hm(n) || document.body);
  }, [n, i]), qt(() => {
    if (s && !i)
      return $i(t, s), () => {
        $i(t, null);
      };
  }, [t, s, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const c = {
        ref: l
      };
      return /* @__PURE__ */ h.cloneElement(r, c);
    }
    return /* @__PURE__ */ N.jsx(h.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ N.jsx(h.Fragment, {
    children: s && /* @__PURE__ */ Pu.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (no.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([sn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (no.propTypes = No(no.propTypes));
function _n(e) {
  return parseInt(e, 10) || 0;
}
const Ym = {
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
function Km(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Ic = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    onChange: r,
    maxRows: n,
    minRows: i = 1,
    style: s,
    value: a,
    ...l
  } = e, {
    current: c
  } = h.useRef(a != null), p = h.useRef(null), d = it(t, p), f = h.useRef(null), m = h.useRef(null), S = h.useCallback(() => {
    const E = p.current, O = nr(E).getComputedStyle(E);
    if (O.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = m.current;
    w.style.width = O.width, w.value = E.value || e.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const v = O.boxSizing, T = _n(O.paddingBottom) + _n(O.paddingTop), g = _n(O.borderBottomWidth) + _n(O.borderTopWidth), $ = w.scrollHeight;
    w.value = "x";
    const A = w.scrollHeight;
    let D = $;
    i && (D = Math.max(Number(i) * A, D)), n && (D = Math.min(Number(n) * A, D)), D = Math.max(D, A);
    const y = D + (v === "border-box" ? T + g : 0), j = Math.abs(D - $) <= 1;
    return {
      outerHeightStyle: y,
      overflowing: j
    };
  }, [n, i, e.placeholder]), b = h.useCallback(() => {
    const E = S();
    if (Km(E))
      return;
    const O = E.outerHeightStyle, w = p.current;
    f.current !== O && (f.current = O, w.style.height = `${O}px`), w.style.overflow = E.overflowing ? "hidden" : "";
  }, [S]);
  qt(() => {
    const E = () => {
      b();
    };
    let O;
    const w = () => {
      cancelAnimationFrame(O), O = requestAnimationFrame(() => {
        E();
      });
    }, v = ac(E), T = p.current, g = nr(T);
    g.addEventListener("resize", v);
    let $;
    return typeof ResizeObserver < "u" && ($ = new ResizeObserver(process.env.NODE_ENV === "test" ? w : E), $.observe(T)), () => {
      v.clear(), cancelAnimationFrame(O), g.removeEventListener("resize", v), $ && $.disconnect();
    };
  }, [S, b]), qt(() => {
    b();
  });
  const x = (E) => {
    c || b(), r && r(E);
  };
  return /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ N.jsx("textarea", {
      value: a,
      onChange: x,
      ref: d,
      rows: i,
      style: s,
      ...l
    }), /* @__PURE__ */ N.jsx("textarea", {
      "aria-hidden": !0,
      className: e.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: {
        ...Ym.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function Ii(e) {
  return typeof e == "string";
}
function kr({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, i) => (n[i] = e[i], r && typeof e[i] > "u" && (n[i] = r[i]), n), {});
}
const jo = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (jo.displayName = "FormControlContext");
function Tr() {
  return h.useContext(jo);
}
function Ua(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function oo(e, t = !1) {
  return e && (Ua(e.value) && e.value !== "" || t && Ua(e.defaultValue) && e.defaultValue !== "");
}
function Xm(e) {
  return e.startAdornment;
}
function Gm(e) {
  return Be("MuiInputBase", e);
}
const xr = Me("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ha;
const Po = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, r.size === "small" && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${pe(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel];
}, Lo = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.input, r.size === "small" && t.inputSizeSmall, r.multiline && t.inputMultiline, r.type === "search" && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel];
}, Zm = (e) => {
  const {
    classes: t,
    color: r,
    disabled: n,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: p,
    multiline: d,
    readOnly: f,
    size: m,
    startAdornment: S,
    type: b
  } = e, x = {
    root: ["root", `color${pe(r)}`, n && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", m && m !== "medium" && `size${pe(m)}`, d && "multiline", S && "adornedStart", s && "adornedEnd", p && "hiddenLabel", f && "readOnly"],
    input: ["input", n && "disabled", b === "search" && "inputTypeSearch", d && "inputMultiline", m === "small" && "inputSizeSmall", p && "inputHiddenLabel", S && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return Ue(x, Gm, t);
}, Mo = ue("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Po
})(Ye(({
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
  [`&.${xr.disabled}`]: {
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
}))), Ao = ue("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Lo
})(Ye(({
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
  }, n = {
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
    [`label[data-shrink=false] + .${xr.formControl} &`]: {
      "&::-webkit-input-placeholder": n,
      "&::-moz-placeholder": n,
      // Firefox 19+
      "&::-ms-input-placeholder": n,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${xr.disabled}`]: {
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
})), Ya = bs({
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
}), Dc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiInputBase"
  }), {
    "aria-describedby": n,
    autoComplete: i,
    autoFocus: s,
    className: a,
    color: l,
    components: c = {},
    componentsProps: p = {},
    defaultValue: d,
    disabled: f,
    disableInjectingGlobalStyles: m,
    endAdornment: S,
    error: b,
    fullWidth: x = !1,
    id: E,
    inputComponent: O = "input",
    inputProps: w = {},
    inputRef: v,
    margin: T,
    maxRows: g,
    minRows: $,
    multiline: A = !1,
    name: D,
    onBlur: y,
    onChange: j,
    onClick: I,
    onFocus: B,
    onKeyDown: L,
    onKeyUp: M,
    placeholder: q,
    readOnly: te,
    renderSuffix: ae,
    rows: X,
    size: be,
    slotProps: _ = {},
    slots: W = {},
    startAdornment: K,
    type: z = "text",
    value: Y,
    ...re
  } = r, J = w.value != null ? w.value : Y, {
    current: ee
  } = h.useRef(J != null), Z = h.useRef(), H = h.useCallback((ve) => {
    process.env.NODE_ENV !== "production" && ve && ve.nodeName !== "INPUT" && !ve.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), U = it(Z, v, w.ref, H), [ne, R] = h.useState(!1), se = Tr();
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    if (se)
      return se.registerEffect();
  }, [se]);
  const F = kr({
    props: r,
    muiFormControl: se,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  F.focused = se ? se.focused : ne, h.useEffect(() => {
    !se && f && ne && (R(!1), y && y());
  }, [se, f, ne, y]);
  const me = se && se.onFilled, we = se && se.onEmpty, ye = h.useCallback((ve) => {
    oo(ve) ? me && me() : we && we();
  }, [me, we]);
  qt(() => {
    ee && ye({
      value: J
    });
  }, [J, ye, ee]);
  const De = (ve) => {
    B && B(ve), w.onFocus && w.onFocus(ve), se && se.onFocus ? se.onFocus(ve) : R(!0);
  }, Fe = (ve) => {
    y && y(ve), w.onBlur && w.onBlur(ve), se && se.onBlur ? se.onBlur(ve) : R(!1);
  }, Ee = (ve, ...pt) => {
    if (!ee) {
      const Nt = ve.target || Z.current;
      if (Nt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Dt(1));
      ye({
        value: Nt.value
      });
    }
    w.onChange && w.onChange(ve, ...pt), j && j(ve, ...pt);
  };
  h.useEffect(() => {
    ye(Z.current);
  }, []);
  const He = (ve) => {
    Z.current && ve.currentTarget === ve.target && Z.current.focus(), I && I(ve);
  };
  let ie = O, We = w;
  A && ie === "input" && (X ? (process.env.NODE_ENV !== "production" && ($ || g) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), We = {
    type: void 0,
    minRows: X,
    maxRows: X,
    ...We
  }) : We = {
    type: void 0,
    maxRows: g,
    minRows: $,
    ...We
  }, ie = Ic);
  const at = (ve) => {
    ye(ve.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    se && se.setAdornedStart(!!K);
  }, [se, K]);
  const ge = {
    ...r,
    color: F.color || "primary",
    disabled: F.disabled,
    endAdornment: S,
    error: F.error,
    focused: F.focused,
    formControl: se,
    fullWidth: x,
    hiddenLabel: F.hiddenLabel,
    multiline: A,
    size: F.size,
    startAdornment: K,
    type: z
  }, Oe = Zm(ge), Xe = W.root || c.Root || Mo, ut = _.root || p.root || {}, lt = W.input || c.Input || Ao;
  return We = {
    ...We,
    ..._.input ?? p.input
  }, /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [!m && typeof Ya == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ha || (Ha = /* @__PURE__ */ N.jsx(Ya, {}))), /* @__PURE__ */ N.jsxs(Xe, {
      ...ut,
      ref: t,
      onClick: He,
      ...re,
      ...!Ii(Xe) && {
        ownerState: {
          ...ge,
          ...ut.ownerState
        }
      },
      className: he(Oe.root, ut.className, a, te && "MuiInputBase-readOnly"),
      children: [K, /* @__PURE__ */ N.jsx(jo.Provider, {
        value: null,
        children: /* @__PURE__ */ N.jsx(lt, {
          "aria-invalid": F.error,
          "aria-describedby": n,
          autoComplete: i,
          autoFocus: s,
          defaultValue: d,
          disabled: F.disabled,
          id: E,
          onAnimationStart: at,
          name: D,
          placeholder: q,
          readOnly: te,
          required: F.required,
          rows: X,
          value: J,
          onKeyDown: L,
          onKeyUp: M,
          type: z,
          ...We,
          ...!Ii(lt) && {
            as: ie,
            ownerState: {
              ...ge,
              ...We.ownerState
            }
          },
          ref: U,
          className: he(Oe.input, We.className, te && "MuiInputBase-readOnly"),
          onBlur: Fe,
          onChange: Ee,
          onFocus: De
        })
      }), S, ae ? ae({
        ...F,
        startAdornment: K
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: us,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
const ws = Dc;
function Jm(e) {
  return Be("MuiInput", e);
}
const Fr = {
  ...xr,
  ...Me("MuiInput", ["root", "underline", "input"])
};
function Qm(e) {
  return Be("MuiOutlinedInput", e);
}
const jt = {
  ...xr,
  ...Me("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function ey(e) {
  return Be("MuiFilledInput", e);
}
const Zt = {
  ...xr,
  ...Me("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, ty = mm(/* @__PURE__ */ N.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), ry = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Bc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = gs(), n = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: l,
    in: c,
    onEnter: p,
    onEntered: d,
    onEntering: f,
    onExit: m,
    onExited: S,
    onExiting: b,
    style: x,
    timeout: E = n,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = Ft,
    ...w
  } = e, v = h.useRef(null), T = it(v, Sn(a), t), g = (L) => (M) => {
    if (L) {
      const q = v.current;
      M === void 0 ? L(q) : L(q, M);
    }
  }, $ = g(f), A = g((L, M) => {
    Pc(L);
    const q = to({
      style: x,
      timeout: E,
      easing: l
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", q), L.style.transition = r.transitions.create("opacity", q), p && p(L, M);
  }), D = g(d), y = g(b), j = g((L) => {
    const M = to({
      style: x,
      timeout: E,
      easing: l
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", M), L.style.transition = r.transitions.create("opacity", M), m && m(L);
  }), I = g(S), B = (L) => {
    i && i(v.current, L);
  };
  return /* @__PURE__ */ N.jsx(O, {
    appear: s,
    in: c,
    nodeRef: v,
    onEnter: A,
    onEntered: D,
    onEntering: $,
    onExit: j,
    onExited: I,
    onExiting: y,
    addEndListener: B,
    timeout: E,
    ...w,
    children: (L, M) => /* @__PURE__ */ h.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: L === "exited" && !c ? "hidden" : void 0,
        ...ry[L],
        ...x,
        ...a.props.style
      },
      ref: T,
      ...M
    })
  });
});
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function ny(e) {
  return Be("MuiBackdrop", e);
}
Me("MuiBackdrop", ["root", "invisible"]);
const oy = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Ue({
    root: ["root", r && "invisible"]
  }, ny, t);
}, iy = ue("div", {
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
}), Fc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiBackdrop"
  }), {
    children: n,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: l,
    components: c = {},
    componentsProps: p = {},
    slotProps: d = {},
    slots: f = {},
    TransitionComponent: m,
    transitionDuration: S,
    ...b
  } = r, x = {
    ...r,
    component: s,
    invisible: a
  }, E = oy(x), O = {
    transition: m,
    root: c.Root,
    ...f
  }, w = {
    ...p,
    ...d
  }, v = {
    slots: O,
    slotProps: w
  }, [T, g] = kt("root", {
    elementType: iy,
    externalForwardedProps: v,
    className: he(E.root, i),
    ownerState: x
  }), [$, A] = kt("transition", {
    elementType: Bc,
    externalForwardedProps: v,
    ownerState: x
  });
  return delete A.ownerState, /* @__PURE__ */ N.jsx($, {
    in: l,
    timeout: S,
    ...b,
    ...A,
    children: /* @__PURE__ */ N.jsx(T, {
      "aria-hidden": !0,
      ...g,
      classes: E,
      ref: t,
      children: n
    })
  });
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const sy = Me("MuiBox", ["root"]), ay = $o(), Vc = Ff({
  themeId: Tt,
  defaultTheme: ay,
  defaultClassName: sy.root,
  generateClassName: ec.generate
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function ly(e) {
  return Be("MuiButton", e);
}
const fr = Me("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Wc = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (Wc.displayName = "ButtonGroupContext");
const zc = /* @__PURE__ */ h.createContext(void 0);
process.env.NODE_ENV !== "production" && (zc.displayName = "ButtonGroupButtonContext");
const cy = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${pe(t)}`, `size${pe(i)}`, `${s}Size${pe(i)}`, `color${pe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${pe(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(i)}`]
  }, c = Ue(l, ly, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, qc = [{
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
}], uy = ue(xs, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${pe(r.color)}`], t[`size${pe(r.size)}`], t[`${r.variant}Size${pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ye(({
  theme: e
}) => {
  var t, r;
  const n = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${fr.disabled}`]: {
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
        [`&.${fr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${fr.disabled}`]: {
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
        [`&.${fr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Ct(["dark", "contrastText"])).map(([s]) => ({
      props: {
        color: s
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[s].main,
        "--variant-outlinedColor": (e.vars || e).palette[s].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)` : St(e.palette[s].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[s].contrastText,
        "--variant-containedBg": (e.vars || e).palette[s].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[s].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : St(e.palette[s].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[s].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : St(e.palette[s].main, e.palette.action.hoverOpacity)
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
        ) : (r = (t = e.palette).getContrastText) == null ? void 0 : r.call(t, n),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : n,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : St(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : St(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${fr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${fr.disabled}`]: {
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
})), py = ue("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${pe(r.size)}`]];
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
  }, ...qc]
}), dy = ue("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${pe(r.size)}`]];
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
  }, ...qc]
}), Di = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = h.useContext(Wc), n = h.useContext(zc), i = on(r, e), s = Ke({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: p,
    disabled: d = !1,
    disableElevation: f = !1,
    disableFocusRipple: m = !1,
    endIcon: S,
    focusVisibleClassName: b,
    fullWidth: x = !1,
    size: E = "medium",
    startIcon: O,
    type: w,
    variant: v = "text",
    ...T
  } = s, g = {
    ...s,
    color: l,
    component: c,
    disabled: d,
    disableElevation: f,
    disableFocusRipple: m,
    fullWidth: x,
    size: E,
    type: w,
    variant: v
  }, $ = cy(g), A = O && /* @__PURE__ */ N.jsx(py, {
    className: $.startIcon,
    ownerState: g,
    children: O
  }), D = S && /* @__PURE__ */ N.jsx(dy, {
    className: $.endIcon,
    ownerState: g,
    children: S
  }), y = n || "";
  return /* @__PURE__ */ N.jsxs(uy, {
    ownerState: g,
    className: he(r.className, $.root, p, y),
    component: c,
    disabled: d,
    focusRipple: !m,
    focusVisibleClassName: he($.focusVisible, b),
    ref: t,
    type: w,
    ...T,
    classes: $,
    children: [A, a, D]
  });
});
process.env.NODE_ENV !== "production" && (Di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
const Bi = typeof bs({}) == "function", fy = (e, t) => ({
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
}), hy = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Uc = (e, t = !1) => {
  var r, n;
  const i = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var p, d;
    const f = e.getColorSchemeSelector(l);
    f.startsWith("@") ? i[f] = {
      ":root": {
        colorScheme: (p = c.palette) == null ? void 0 : p.mode
      }
    } : i[f.replace(/\s*&/, "")] = {
      colorScheme: (d = c.palette) == null ? void 0 : d.mode
    };
  });
  let s = {
    html: fy(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...hy(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...i
  };
  const a = (n = (r = e.components) == null ? void 0 : r.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
  return a && (s = [s, a]), s;
}, zn = "mui-ecs", my = (e) => {
  const t = Uc(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${zn})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, i]) => {
    var s, a;
    const l = e.getColorSchemeSelector(n);
    l.startsWith("@") ? r[l] = {
      [`:root:not(:has(.${zn}))`]: {
        colorScheme: (s = i.palette) == null ? void 0 : s.mode
      }
    } : r[l.replace(/\s*&/, "")] = {
      [`&:not(:has(.${zn}))`]: {
        colorScheme: (a = i.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, yy = bs(Bi ? ({
  theme: e,
  enableColorScheme: t
}) => Uc(e, t) : ({
  theme: e
}) => my(e));
function Hc(e) {
  const t = Ke({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [Bi && /* @__PURE__ */ N.jsx(yy, {
      enableColorScheme: n
    }), !Bi && !n && /* @__PURE__ */ N.jsx("span", {
      className: zn,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: o.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: o.bool
});
function gy(e) {
  const t = gt(e);
  return t.body === e ? nr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ka(e) {
  return parseInt(nr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function by(e) {
  const t = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return t || r;
}
function Xa(e, t, r, n, i) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !by(a);
    l && c && Gr(a, i);
  });
}
function ui(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function vy(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (gy(n)) {
      const s = pc(gt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Ka(n) + s}px`;
      const a = gt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Ka(l) + s}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = gt(n).body;
    else {
      const s = n.parentElement, a = nr(n);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : n;
    }
    r.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function Ey(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Sy {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Gr(t.modalRef, !1);
    const i = Ey(r);
    Xa(r, t.mount, t.modalRef, i, !0);
    const s = ui(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = ui(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[n];
    i.restore || (i.restore = vy(i, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const i = ui(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Gr(t.modalRef, r), Xa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Gr(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const xy = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function wy(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Oy(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function ky(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Oy(e));
}
function Ty(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(xy)).forEach((n, i) => {
    const s = wy(n);
    s === -1 || !ky(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function Ry() {
  return !0;
}
function io(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Ty,
    isEnabled: a = Ry,
    open: l
  } = e, c = h.useRef(!1), p = h.useRef(null), d = h.useRef(null), f = h.useRef(null), m = h.useRef(null), S = h.useRef(!1), b = h.useRef(null), x = it(Sn(t), b), E = h.useRef(null);
  h.useEffect(() => {
    !l || !b.current || (S.current = !r);
  }, [r, l]), h.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = gt(b.current);
    return b.current.contains(v.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), S.current && b.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !b.current)
      return;
    const v = gt(b.current), T = (A) => {
      E.current = A, !(n || !a() || A.key !== "Tab") && v.activeElement === b.current && A.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, g = () => {
      var A, D;
      const y = b.current;
      if (y === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (y.contains(v.activeElement) || n && v.activeElement !== p.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!S.current)
        return;
      let j = [];
      if ((v.activeElement === p.current || v.activeElement === d.current) && (j = s(b.current)), j.length > 0) {
        const I = !!((A = E.current) != null && A.shiftKey && ((D = E.current) == null ? void 0 : D.key) === "Tab"), B = j[0], L = j[j.length - 1];
        typeof B != "string" && typeof L != "string" && (I ? L.focus() : B.focus());
      } else
        y.focus();
    };
    v.addEventListener("focusin", g), v.addEventListener("keydown", T, !0);
    const $ = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval($), v.removeEventListener("focusin", g), v.removeEventListener("keydown", T, !0);
    };
  }, [r, n, i, a, l, s]);
  const O = (v) => {
    f.current === null && (f.current = v.relatedTarget), S.current = !0, m.current = v.target;
    const T = t.props.onFocus;
    T && T(v);
  }, w = (v) => {
    f.current === null && (f.current = v.relatedTarget), S.current = !0;
  };
  return /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ N.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: p,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: x,
      onFocus: O
    }), /* @__PURE__ */ N.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: En,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (io.propTypes = No(io.propTypes));
function Cy(e) {
  return typeof e == "function" ? e() : e;
}
function Ny(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const $y = new Sy();
function _y(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = $y,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: p,
    open: d,
    rootRef: f
  } = e, m = h.useRef({}), S = h.useRef(null), b = h.useRef(null), x = it(b, f), [E, O] = h.useState(!d), w = Ny(c);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const T = () => gt(S.current), g = () => (m.current.modalRef = b.current, m.current.mount = S.current, m.current), $ = () => {
    i.mount(g(), {
      disableScrollLock: n
    }), b.current && (b.current.scrollTop = 0);
  }, A = gr(() => {
    const L = Cy(t) || T().body;
    i.add(g(), L), b.current && $();
  }), D = h.useCallback(() => i.isTopModal(g()), [i]), y = gr((L) => {
    S.current = L, L && (d && D() ? $() : b.current && Gr(b.current, v));
  }), j = h.useCallback(() => {
    i.remove(g(), v);
  }, [v, i]);
  h.useEffect(() => () => {
    j();
  }, [j]), h.useEffect(() => {
    d ? A() : (!w || !s) && j();
  }, [d, j, w, s, A]);
  const I = (L) => (M) => {
    var q;
    (q = L.onKeyDown) == null || q.call(L, M), !(M.key !== "Escape" || M.which === 229 || // Wait until IME is settled.
    !D()) && (r || (M.stopPropagation(), p && p(M, "escapeKeyDown")));
  }, B = (L) => (M) => {
    var q;
    (q = L.onClick) == null || q.call(L, M), M.target === M.currentTarget && p && p(M, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const M = yc(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const q = {
        ...M,
        ...L
      };
      return {
        role: "presentation",
        ...q,
        onKeyDown: I(q),
        ref: x
      };
    },
    getBackdropProps: (L = {}) => {
      const M = L;
      return {
        "aria-hidden": !0,
        ...M,
        onClick: B(M),
        open: d
      };
    },
    getTransitionProps: () => {
      const L = () => {
        O(!1), a && a();
      }, M = () => {
        O(!0), l && l(), s && j();
      };
      return {
        onEnter: wa(L, c == null ? void 0 : c.props.onEnter),
        onExited: wa(M, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: x,
    portalRef: y,
    isTopModal: D,
    exited: E,
    hasTransition: w
  };
}
function jy(e) {
  return Be("MuiModal", e);
}
Me("MuiModal", ["root", "hidden", "backdrop"]);
const Py = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Ue({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, jy, n);
}, Ly = ue("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Ye(({
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
}))), My = ue(Fc, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Yc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    name: "MuiModal",
    props: e
  }), {
    BackdropComponent: n = My,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: l = !1,
    children: c,
    container: p,
    component: d,
    components: f = {},
    componentsProps: m = {},
    disableAutoFocus: S = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: E = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: w = !1,
    hideBackdrop: v = !1,
    keepMounted: T = !1,
    onBackdropClick: g,
    onClose: $,
    onTransitionEnter: A,
    onTransitionExited: D,
    open: y,
    slotProps: j = {},
    slots: I = {},
    // eslint-disable-next-line react/prop-types
    theme: B,
    ...L
  } = r, M = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: S,
    disableEnforceFocus: b,
    disableEscapeKeyDown: x,
    disablePortal: E,
    disableRestoreFocus: O,
    disableScrollLock: w,
    hideBackdrop: v,
    keepMounted: T
  }, {
    getRootProps: q,
    getBackdropProps: te,
    getTransitionProps: ae,
    portalRef: X,
    isTopModal: be,
    exited: _,
    hasTransition: W
  } = _y({
    ...M,
    rootRef: t
  }), K = {
    ...M,
    exited: _
  }, z = Py(K), Y = {};
  if (c.props.tabIndex === void 0 && (Y.tabIndex = "-1"), W) {
    const {
      onEnter: ne,
      onExited: R
    } = ae();
    Y.onEnter = ne, Y.onExited = R;
  }
  const re = {
    slots: {
      root: f.Root,
      backdrop: f.Backdrop,
      ...I
    },
    slotProps: {
      ...m,
      ...j
    }
  }, [J, ee] = kt("root", {
    elementType: Ly,
    externalForwardedProps: re,
    getSlotProps: q,
    additionalProps: {
      ref: t,
      as: d
    },
    ownerState: K,
    className: he(a, z == null ? void 0 : z.root, !K.open && K.exited && (z == null ? void 0 : z.hidden))
  }), [Z, H] = kt("backdrop", {
    elementType: n,
    externalForwardedProps: re,
    additionalProps: i,
    getSlotProps: (ne) => te({
      ...ne,
      onClick: (R) => {
        g && g(R), ne != null && ne.onClick && ne.onClick(R);
      }
    }),
    className: he(i == null ? void 0 : i.className, z == null ? void 0 : z.backdrop),
    ownerState: K
  }), U = it(i == null ? void 0 : i.ref, H.ref);
  return !T && !y && (!W || _) ? null : /* @__PURE__ */ N.jsx(no, {
    ref: X,
    container: p,
    disablePortal: E,
    children: /* @__PURE__ */ N.jsxs(J, {
      ...ee,
      ...L,
      children: [!v && n ? /* @__PURE__ */ N.jsx(Z, {
        ...H,
        ref: U
      }) : null, /* @__PURE__ */ N.jsx(io, {
        disableEnforceFocus: b,
        disableAutoFocus: S,
        disableRestoreFocus: O,
        isEnabled: be,
        open: y,
        children: /* @__PURE__ */ h.cloneElement(c, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([sn, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Ga = Me("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Ay = (e) => {
  const {
    classes: t,
    disableUnderline: r,
    startAdornment: n,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !r && "underline", n && "adornedStart", i && "adornedEnd", s === "small" && `size${pe(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, p = Ue(c, ey, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...p
  };
}, Iy = ue(Mo, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...Po(e, t), !r.disableUnderline && t.underline];
  }
})(Ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light", r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", n = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n,
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
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
      }
    },
    [`&.${Zt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n
    },
    [`&.${Zt.disabled}`]: {
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
        [`&.${Zt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Zt.error}`]: {
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
        [`&:hover:not(.${Zt.disabled}, .${Zt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Zt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ct()).map(([a]) => {
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
})), Dy = ue(Ao, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Lo
})(Ye(({
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
}))), cn = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiFilledInput"
  }), {
    disableUnderline: n = !1,
    components: i = {},
    componentsProps: s,
    fullWidth: a = !1,
    hiddenLabel: l,
    // declare here to prevent spreading to DOM
    inputComponent: c = "input",
    multiline: p = !1,
    slotProps: d,
    slots: f = {},
    type: m = "text",
    ...S
  } = r, b = {
    ...r,
    disableUnderline: n,
    fullWidth: a,
    inputComponent: c,
    multiline: p,
    type: m
  }, x = Ay(r), E = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, O = d ?? s ? nt(E, d ?? s) : E, w = f.root ?? i.Root ?? Iy, v = f.input ?? i.Input ?? Dy;
  return /* @__PURE__ */ N.jsx(ws, {
    slots: {
      root: w,
      input: v
    },
    componentsProps: O,
    fullWidth: a,
    inputComponent: c,
    multiline: p,
    ref: t,
    type: m,
    ...S,
    classes: x
  });
});
process.env.NODE_ENV !== "production" && (cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
cn && (cn.muiName = "Input");
function By(e) {
  return Be("MuiFormControl", e);
}
Me("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Fy = (e) => {
  const {
    classes: t,
    margin: r,
    fullWidth: n
  } = e, i = {
    root: ["root", r !== "none" && `margin${pe(r)}`, n && "fullWidth"]
  };
  return Ue(i, By, t);
}, Vy = ue("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${pe(e.margin)}`],
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
}), Os = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiFormControl"
  }), {
    children: n,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: c = !1,
    focused: p,
    fullWidth: d = !1,
    hiddenLabel: f = !1,
    margin: m = "none",
    required: S = !1,
    size: b = "medium",
    variant: x = "outlined",
    ...E
  } = r, O = {
    ...r,
    color: s,
    component: a,
    disabled: l,
    error: c,
    fullWidth: d,
    hiddenLabel: f,
    margin: m,
    required: S,
    size: b,
    variant: x
  }, w = Fy(O), [v, T] = h.useState(() => {
    let B = !1;
    return n && h.Children.forEach(n, (L) => {
      if (!ii(L, ["Input", "Select"]))
        return;
      const M = ii(L, ["Select"]) ? L.props.input : L;
      M && Xm(M.props) && (B = !0);
    }), B;
  }), [g, $] = h.useState(() => {
    let B = !1;
    return n && h.Children.forEach(n, (L) => {
      ii(L, ["Input", "Select"]) && (oo(L.props, !0) || oo(L.props.inputProps, !0)) && (B = !0);
    }), B;
  }), [A, D] = h.useState(!1);
  l && A && D(!1);
  const y = p !== void 0 && !l ? p : A;
  let j;
  if (process.env.NODE_ENV !== "production") {
    const B = h.useRef(!1);
    j = () => (B.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), B.current = !0, () => {
      B.current = !1;
    });
  }
  const I = h.useMemo(() => ({
    adornedStart: v,
    setAdornedStart: T,
    color: s,
    disabled: l,
    error: c,
    filled: g,
    focused: y,
    fullWidth: d,
    hiddenLabel: f,
    size: b,
    onBlur: () => {
      D(!1);
    },
    onEmpty: () => {
      $(!1);
    },
    onFilled: () => {
      $(!0);
    },
    onFocus: () => {
      D(!0);
    },
    registerEffect: j,
    required: S,
    variant: x
  }), [v, s, l, c, g, y, d, f, j, S, b, x]);
  return /* @__PURE__ */ N.jsx(jo.Provider, {
    value: I,
    children: /* @__PURE__ */ N.jsx(Vy, {
      as: a,
      ownerState: O,
      className: he(w.root, i),
      ref: t,
      ...E,
      children: n
    })
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function Wy(e) {
  return Be("MuiFormHelperText", e);
}
const Za = Me("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ja;
const zy = (e) => {
  const {
    classes: t,
    contained: r,
    size: n,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, p = {
    root: ["root", i && "disabled", s && "error", n && `size${pe(n)}`, r && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Ue(p, Wy, t);
}, qy = ue("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size && t[`size${pe(r.size)}`], r.contained && t.contained, r.filled && t.filled];
  }
})(Ye(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Za.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Za.error}`]: {
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
}))), Kc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiFormHelperText"
  }), {
    children: n,
    className: i,
    component: s = "p",
    disabled: a,
    error: l,
    filled: c,
    focused: p,
    margin: d,
    required: f,
    variant: m,
    ...S
  } = r, b = Tr(), x = kr({
    props: r,
    muiFormControl: b,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), E = {
    ...r,
    component: s,
    contained: x.variant === "filled" || x.variant === "outlined",
    variant: x.variant,
    size: x.size,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  };
  delete E.ownerState;
  const O = zy(E);
  return /* @__PURE__ */ N.jsx(qy, {
    as: s,
    className: he(O.root, i),
    ref: t,
    ...S,
    ownerState: E,
    children: n === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ja || (Ja = /* @__PURE__ */ N.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : n
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
function Uy(e) {
  return Be("MuiFormLabel", e);
}
const Zr = Me("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Hy = (e) => {
  const {
    classes: t,
    color: r,
    focused: n,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${pe(r)}`, i && "disabled", s && "error", a && "filled", n && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Ue(c, Uy, t);
}, Yy = ue("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(Ye(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Zr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Zr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Zr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Ky = ue("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ye(({
  theme: e
}) => ({
  [`&.${Zr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Xc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiFormLabel"
  }), {
    children: n,
    className: i,
    color: s,
    component: a = "label",
    disabled: l,
    error: c,
    filled: p,
    focused: d,
    required: f,
    ...m
  } = r, S = Tr(), b = kr({
    props: r,
    muiFormControl: S,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), x = {
    ...r,
    color: b.color || "primary",
    component: a,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, E = Hy(x);
  return /* @__PURE__ */ N.jsxs(Yy, {
    as: a,
    ownerState: x,
    className: he(E.root, i),
    ref: t,
    ...m,
    children: [n, b.required && /* @__PURE__ */ N.jsxs(Ky, {
      ownerState: x,
      "aria-hidden": !0,
      className: E.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Fi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Xy = {
  entering: {
    opacity: 1,
    transform: Fi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, pi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), so = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    addEndListener: r,
    appear: n = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: l,
    onEntered: c,
    onEntering: p,
    onExit: d,
    onExited: f,
    onExiting: m,
    style: S,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Ft,
    ...E
  } = e, O = uc(), w = h.useRef(), v = gs(), T = h.useRef(null), g = it(T, Sn(i), t), $ = (M) => (q) => {
    if (M) {
      const te = T.current;
      q === void 0 ? M(te) : M(te, q);
    }
  }, A = $(p), D = $((M, q) => {
    Pc(M);
    const {
      duration: te,
      delay: ae,
      easing: X
    } = to({
      style: S,
      timeout: b,
      easing: s
    }, {
      mode: "enter"
    });
    let be;
    b === "auto" ? (be = v.transitions.getAutoHeightDuration(M.clientHeight), w.current = be) : be = te, M.style.transition = [v.transitions.create("opacity", {
      duration: be,
      delay: ae
    }), v.transitions.create("transform", {
      duration: pi ? be : be * 0.666,
      delay: ae,
      easing: X
    })].join(","), l && l(M, q);
  }), y = $(c), j = $(m), I = $((M) => {
    const {
      duration: q,
      delay: te,
      easing: ae
    } = to({
      style: S,
      timeout: b,
      easing: s
    }, {
      mode: "exit"
    });
    let X;
    b === "auto" ? (X = v.transitions.getAutoHeightDuration(M.clientHeight), w.current = X) : X = q, M.style.transition = [v.transitions.create("opacity", {
      duration: X,
      delay: te
    }), v.transitions.create("transform", {
      duration: pi ? X : X * 0.666,
      delay: pi ? te : te || X * 0.333,
      easing: ae
    })].join(","), M.style.opacity = 0, M.style.transform = Fi(0.75), d && d(M);
  }), B = $(f), L = (M) => {
    b === "auto" && O.start(w.current || 0, M), r && r(T.current, M);
  };
  return /* @__PURE__ */ N.jsx(x, {
    appear: n,
    in: a,
    nodeRef: T,
    onEnter: D,
    onEntered: y,
    onEntering: A,
    onExit: I,
    onExited: B,
    onExiting: j,
    addEndListener: L,
    timeout: b === "auto" ? null : b,
    ...E,
    children: (M, q) => /* @__PURE__ */ h.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Fi(0.75),
        visibility: M === "exited" && !a ? "hidden" : void 0,
        ...Xy[M],
        ...S,
        ...i.props.style
      },
      ref: g,
      ...q
    })
  });
});
process.env.NODE_ENV !== "production" && (so.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
so && (so.muiSupportAuto = !0);
const Gy = (e) => {
  const {
    classes: t,
    disableUnderline: r
  } = e, n = Ue({
    root: ["root", !r && "underline"],
    input: ["input"]
  }, Jm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...n
  };
}, Zy = ue(Mo, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [...Po(e, t), !r.disableUnderline && t.underline];
  }
})(Ye(({
  theme: e
}) => {
  let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (t = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
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
        [`&.${Fr.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Fr.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${t}`,
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
        [`&:hover:not(.${Fr.disabled}, .${Fr.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${t}`
          }
        },
        [`&.${Fr.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ct()).map(([r]) => ({
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
})), Jy = ue(Ao, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Lo
})({}), un = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiInput"
  }), {
    disableUnderline: n = !1,
    components: i = {},
    componentsProps: s,
    fullWidth: a = !1,
    inputComponent: l = "input",
    multiline: c = !1,
    slotProps: p,
    slots: d = {},
    type: f = "text",
    ...m
  } = r, S = Gy(r), b = {
    root: {
      ownerState: {
        disableUnderline: n
      }
    }
  }, x = p ?? s ? nt(p ?? s, b) : b, E = d.root ?? i.Root ?? Zy, O = d.input ?? i.Input ?? Jy;
  return /* @__PURE__ */ N.jsx(ws, {
    slots: {
      root: E,
      input: O
    },
    slotProps: x,
    fullWidth: a,
    inputComponent: l,
    multiline: c,
    ref: t,
    type: f,
    ...m,
    classes: S
  });
});
process.env.NODE_ENV !== "production" && (un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
un && (un.muiName = "Input");
function Qy(e) {
  return Be("MuiInputLabel", e);
}
Me("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const eg = (e) => {
  const {
    classes: t,
    formControl: r,
    size: n,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", r && "formControl", !s && "animated", i && "shrink", n && n !== "normal" && `size${pe(n)}`, a],
    asterisk: [l && "asterisk"]
  }, p = Ue(c, Qy, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...p
  };
}, tg = ue(Xc, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Zr.asterisk}`]: t.asterisk
    }, t.root, r.formControl && t.formControl, r.size === "small" && t.sizeSmall, r.shrink && t.shrink, !r.disableAnimation && t.animated, r.focused && t.focused, t[r.variant]];
  }
})(Ye(({
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
      size: n
    }) => t === "filled" && r.shrink && n === "small",
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
}))), ks = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    name: "MuiInputLabel",
    props: e
  }), {
    disableAnimation: n = !1,
    margin: i,
    shrink: s,
    variant: a,
    className: l,
    ...c
  } = r, p = Tr();
  let d = s;
  typeof d > "u" && p && (d = p.filled || p.focused || p.adornedStart);
  const f = kr({
    props: r,
    muiFormControl: p,
    states: ["size", "variant", "required", "focused"]
  }), m = {
    ...r,
    disableAnimation: n,
    formControl: p,
    shrink: d,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, S = eg(m);
  return /* @__PURE__ */ N.jsx(tg, {
    "data-shrink": d,
    ref: t,
    className: he(S.root, l),
    ...c,
    ownerState: m,
    classes: S
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function rg(e) {
  return Be("MuiLinearProgress", e);
}
Me("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const Vi = 4, Wi = Or`
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
`, ng = typeof Wi != "string" ? fo`
        animation: ${Wi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, zi = Or`
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
`, og = typeof zi != "string" ? fo`
        animation: ${zi} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, qi = Or`
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
`, ig = typeof qi != "string" ? fo`
        animation: ${qi} 3s infinite linear;
      ` : null, sg = (e) => {
  const {
    classes: t,
    variant: r,
    color: n
  } = e, i = {
    root: ["root", `color${pe(n)}`, r],
    dashed: ["dashed", `dashedColor${pe(n)}`],
    bar1: ["bar", `barColor${pe(n)}`, (r === "indeterminate" || r === "query") && "bar1Indeterminate", r === "determinate" && "bar1Determinate", r === "buffer" && "bar1Buffer"],
    bar2: ["bar", r !== "buffer" && `barColor${pe(n)}`, r === "buffer" && `color${pe(n)}`, (r === "indeterminate" || r === "query") && "bar2Indeterminate", r === "buffer" && "bar2Buffer"]
  };
  return Ue(i, rg, t);
}, Ts = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Co(e.palette[t].main, 0.62) : Ro(e.palette[t].main, 0.5), ag = ue("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`color${pe(r.color)}`], t[r.variant]];
  }
})(Ye(({
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
  variants: [...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Ts(e, t)
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
}))), lg = ue("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.dashed, t[`dashedColor${pe(r.color)}`]];
  }
})(Ye(({
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
  }, ...Object.entries(e.palette).filter(Ct()).map(([t]) => {
    const r = Ts(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`
      }
    };
  })]
})), ig || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${qi} 3s infinite linear`
}), cg = ue("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.bar, t[`barColor${pe(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar1Indeterminate, r.variant === "determinate" && t.bar1Determinate, r.variant === "buffer" && t.bar1Buffer];
  }
})(Ye(({
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
  }, ...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
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
      transition: `transform .${Vi}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${Vi}s linear`
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
    style: ng || {
      animation: `${Wi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), ug = ue("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.bar, t[`barColor${pe(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar2Indeterminate, r.variant === "buffer" && t.bar2Buffer];
  }
})(Ye(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
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
  }, ...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
    props: {
      color: t,
      variant: "buffer"
    },
    style: {
      backgroundColor: Ts(e, t),
      transition: `transform .${Vi}s linear`
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
    style: og || {
      animation: `${zi} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), Gc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiLinearProgress"
  }), {
    className: n,
    color: i = "primary",
    value: s,
    valueBuffer: a,
    variant: l = "indeterminate",
    ...c
  } = r, p = {
    ...r,
    color: i,
    variant: l
  }, d = sg(p), f = Sc(), m = {}, S = {
    bar1: {},
    bar2: {}
  };
  if (l === "determinate" || l === "buffer")
    if (s !== void 0) {
      m["aria-valuenow"] = Math.round(s), m["aria-valuemin"] = 0, m["aria-valuemax"] = 100;
      let b = s - 100;
      f && (b = -b), S.bar1.transform = `translateX(${b}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (l === "buffer")
    if (a !== void 0) {
      let b = (a || 0) - 100;
      f && (b = -b), S.bar2.transform = `translateX(${b}%)`;
    } else process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ N.jsxs(ag, {
    className: he(d.root, n),
    ownerState: p,
    role: "progressbar",
    ...m,
    ref: t,
    ...c,
    children: [l === "buffer" ? /* @__PURE__ */ N.jsx(lg, {
      className: d.dashed,
      ownerState: p
    }) : null, /* @__PURE__ */ N.jsx(cg, {
      className: d.bar1,
      ownerState: p,
      style: S.bar1
    }), l === "determinate" ? null : /* @__PURE__ */ N.jsx(ug, {
      className: d.bar2,
      ownerState: p,
      style: S.bar2
    })]
  });
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: o.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: o.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const ao = /* @__PURE__ */ h.createContext({});
process.env.NODE_ENV !== "production" && (ao.displayName = "ListContext");
function pg(e) {
  return Be("MuiList", e);
}
Me("MuiList", ["root", "padding", "dense", "subheader"]);
const dg = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: i
  } = e;
  return Ue({
    root: ["root", !r && "padding", n && "dense", i && "subheader"]
  }, pg, t);
}, fg = ue("ul", {
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
}), Zc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiList"
  }), {
    children: n,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: c,
    ...p
  } = r, d = h.useMemo(() => ({
    dense: a
  }), [a]), f = {
    ...r,
    component: s,
    dense: a,
    disablePadding: l
  }, m = dg(f);
  return /* @__PURE__ */ N.jsx(ao.Provider, {
    value: d,
    children: /* @__PURE__ */ N.jsxs(fg, {
      as: s,
      className: he(m.root, i),
      ref: t,
      ownerState: f,
      ...p,
      children: [c, n]
    })
  });
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Qa = Me("MuiListItemIcon", ["root", "alignItemsFlexStart"]), el = Me("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function di(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function tl(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function Jc(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function Vr(e, t, r, n, i, s) {
  let a = !1, l = i(e, t, t ? r : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = n ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Jc(l, s) || c)
      l = i(e, l, r);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Qc = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: n = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: c = !1,
    onKeyDown: p,
    variant: d = "selectedMenu",
    ...f
  } = e, m = h.useRef(null), S = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  qt(() => {
    n && m.current.focus();
  }, [n]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: v
    }) => {
      const T = !m.current.style.width;
      if (w.clientHeight < m.current.clientHeight && T) {
        const g = `${pc(gt(w))}px`;
        m.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = g, m.current.style.width = `calc(100% + ${g})`;
      }
      return m.current;
    }
  }), []);
  const b = (w) => {
    const v = m.current, T = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      p && p(w);
      return;
    }
    const g = gt(v).activeElement;
    if (T === "ArrowDown")
      w.preventDefault(), Vr(v, g, c, l, di);
    else if (T === "ArrowUp")
      w.preventDefault(), Vr(v, g, c, l, tl);
    else if (T === "Home")
      w.preventDefault(), Vr(v, null, c, l, di);
    else if (T === "End")
      w.preventDefault(), Vr(v, null, c, l, tl);
    else if (T.length === 1) {
      const $ = S.current, A = T.toLowerCase(), D = performance.now();
      $.keys.length > 0 && (D - $.lastTime > 500 ? ($.keys = [], $.repeating = !0, $.previousKeyMatched = !0) : $.repeating && A !== $.keys[0] && ($.repeating = !1)), $.lastTime = D, $.keys.push(A);
      const y = g && !$.repeating && Jc(g, $);
      $.previousKeyMatched && (y || Vr(v, g, !1, l, di, $)) ? w.preventDefault() : $.previousKeyMatched = !1;
    }
    p && p(w);
  }, x = it(m, t);
  let E = -1;
  h.Children.forEach(s, (w, v) => {
    if (!/* @__PURE__ */ h.isValidElement(w)) {
      E === v && (E += 1, E >= s.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && nn.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (d === "selectedMenu" && w.props.selected || E === -1) && (E = v), E === v && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (E += 1, E >= s.length && (E = -1));
  });
  const O = h.Children.map(s, (w, v) => {
    if (v === E) {
      const T = {};
      return i && (T.autoFocus = !0), w.props.tabIndex === void 0 && d === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ h.cloneElement(w, T);
    }
    return w;
  });
  return /* @__PURE__ */ N.jsx(Zc, {
    role: "menu",
    ref: x,
    className: a,
    onKeyDown: b,
    tabIndex: n ? 0 : -1,
    ...f,
    children: O
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function hg(e) {
  return Be("MuiPopover", e);
}
Me("MuiPopover", ["root", "paper"]);
function rl(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function nl(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function ol(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function qn(e) {
  return typeof e == "function" ? e() : e;
}
const mg = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"],
    paper: ["paper"]
  }, hg, t);
}, yg = ue(Yc, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), eu = ue(Ss, {
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
}), tu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiPopover"
  }), {
    action: n,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: l = "anchorEl",
    children: c,
    className: p,
    container: d,
    elevation: f = 8,
    marginThreshold: m = 16,
    open: S,
    PaperProps: b = {},
    slots: x = {},
    slotProps: E = {},
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = so,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: T,
      ...g
    } = {},
    disableScrollLock: $ = !1,
    ...A
  } = r, D = (E == null ? void 0 : E.paper) ?? b, y = h.useRef(), j = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: m,
    externalPaperSlotProps: D,
    transformOrigin: O,
    TransitionComponent: w,
    transitionDuration: v,
    TransitionProps: g
  }, I = mg(j), B = h.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const H = qn(i), U = H && H.nodeType === 1 ? H : gt(y.current).body, ne = U.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const R = U.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && R.top === 0 && R.left === 0 && R.right === 0 && R.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ne.top + rl(ne, s.vertical),
      left: ne.left + nl(ne, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, l]), L = h.useCallback((H) => ({
    vertical: rl(H, O.vertical),
    horizontal: nl(H, O.horizontal)
  }), [O.horizontal, O.vertical]), M = h.useCallback((H) => {
    const U = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, ne = L(U);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ol(ne)
      };
    const R = B();
    let se = R.top - ne.vertical, F = R.left - ne.horizontal;
    const me = se + U.height, we = F + U.width, ye = nr(qn(i)), De = ye.innerHeight - m, Fe = ye.innerWidth - m;
    if (m !== null && se < m) {
      const Ee = se - m;
      se -= Ee, ne.vertical += Ee;
    } else if (m !== null && me > De) {
      const Ee = me - De;
      se -= Ee, ne.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && U.height > De && U.height && De && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${U.height - De}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && F < m) {
      const Ee = F - m;
      F -= Ee, ne.horizontal += Ee;
    } else if (we > Fe) {
      const Ee = we - Fe;
      F -= Ee, ne.horizontal += Ee;
    }
    return {
      top: `${Math.round(se)}px`,
      left: `${Math.round(F)}px`,
      transformOrigin: ol(ne)
    };
  }, [i, l, B, L, m]), [q, te] = h.useState(S), ae = h.useCallback(() => {
    const H = y.current;
    if (!H)
      return;
    const U = M(H);
    U.top !== null && (H.style.top = U.top), U.left !== null && (H.style.left = U.left), H.style.transformOrigin = U.transformOrigin, te(!0);
  }, [M]);
  h.useEffect(() => ($ && window.addEventListener("scroll", ae), () => window.removeEventListener("scroll", ae)), [i, $, ae]);
  const X = (H, U) => {
    T && T(H, U), ae();
  }, be = () => {
    te(!1);
  };
  h.useEffect(() => {
    S && ae();
  }), h.useImperativeHandle(n, () => S ? {
    updatePosition: () => {
      ae();
    }
  } : null, [S, ae]), h.useEffect(() => {
    if (!S)
      return;
    const H = ac(() => {
      ae();
    }), U = nr(i);
    return U.addEventListener("resize", H), () => {
      H.clear(), U.removeEventListener("resize", H);
    };
  }, [i, S, ae]);
  let _ = v;
  v === "auto" && !w.muiSupportAuto && (_ = void 0);
  const W = d || (i ? gt(qn(i)).body : void 0), K = {
    slots: x,
    slotProps: {
      ...E,
      paper: D
    }
  }, [z, Y] = kt("paper", {
    elementType: eu,
    externalForwardedProps: K,
    additionalProps: {
      elevation: f,
      className: he(I.paper, D == null ? void 0 : D.className),
      style: q ? D.style : {
        ...D.style,
        opacity: 0
      }
    },
    ownerState: j
  }), [re, {
    slotProps: J,
    ...ee
  }] = kt("root", {
    elementType: yg,
    externalForwardedProps: K,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: W,
      open: S
    },
    ownerState: j,
    className: he(I.root, p)
  }), Z = it(y, Y.ref);
  return /* @__PURE__ */ N.jsx(re, {
    ...ee,
    ...!Ii(re) && {
      slotProps: J,
      disableScrollLock: $
    },
    ...A,
    ref: t,
    children: /* @__PURE__ */ N.jsx(w, {
      appear: !0,
      in: S,
      onEntering: X,
      onExited: be,
      timeout: _,
      ...g,
      children: /* @__PURE__ */ N.jsx(z, {
        ...Y,
        ref: Z,
        children: c
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (tu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Wt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: vn(o.oneOfType([sn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = qn(e.anchorEl);
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
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([sn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: hc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: us
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
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
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function gg(e) {
  return Be("MuiMenu", e);
}
Me("MuiMenu", ["root", "paper", "list"]);
const bg = {
  vertical: "top",
  horizontal: "right"
}, vg = {
  vertical: "top",
  horizontal: "left"
}, Eg = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, gg, t);
}, Sg = ue(tu, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), xg = ue(eu, {
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
}), wg = ue(Qc, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ru = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiMenu"
  }), {
    autoFocus: n = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: l = {},
    onClose: c,
    open: p,
    PaperProps: d = {},
    PopoverClasses: f,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: S,
      ...b
    } = {},
    variant: x = "selectedMenu",
    slots: E = {},
    slotProps: O = {},
    ...w
  } = r, v = Sc(), T = {
    ...r,
    autoFocus: n,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: S,
    PaperProps: d,
    transitionDuration: m,
    TransitionProps: b,
    variant: x
  }, g = Eg(T), $ = n && !a && p, A = h.useRef(null), D = (q, te) => {
    A.current && A.current.adjustStyleForScrollbar(q, {
      direction: v ? "rtl" : "ltr"
    }), S && S(q, te);
  }, y = (q) => {
    q.key === "Tab" && (q.preventDefault(), c && c(q, "tabKeyDown"));
  };
  let j = -1;
  h.Children.map(i, (q, te) => {
    /* @__PURE__ */ h.isValidElement(q) && (process.env.NODE_ENV !== "production" && nn.isFragment(q) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), q.props.disabled || (x === "selectedMenu" && q.props.selected || j === -1) && (j = te));
  });
  const I = E.paper ?? xg, B = O.paper ?? d, L = $a({
    elementType: E.root,
    externalSlotProps: O.root,
    ownerState: T,
    className: [g.root, s]
  }), M = $a({
    elementType: I,
    externalSlotProps: B,
    ownerState: T,
    className: g.paper
  });
  return /* @__PURE__ */ N.jsx(Sg, {
    onClose: c,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? bg : vg,
    slots: {
      paper: I,
      root: E.root
    },
    slotProps: {
      root: L,
      paper: M
    },
    open: p,
    ref: t,
    transitionDuration: m,
    TransitionProps: {
      onEntering: D,
      ...b
    },
    ownerState: T,
    ...w,
    classes: f,
    children: /* @__PURE__ */ N.jsx(wg, {
      onKeyDown: y,
      actions: A,
      autoFocus: n && (j === -1 || a),
      autoFocusItem: $,
      variant: x,
      ...l,
      className: he(g.list, l.className),
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ru.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([sn, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Og(e) {
  return Be("MuiMenuItem", e);
}
const Wr = Me("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), kg = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, Tg = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = Ue({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", n && "divider", s && "selected"]
  }, Og, a);
  return {
    ...a,
    ...l
  };
}, Rg = ue(xs, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: kg
})(Ye(({
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
  [`&.${Wr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : St(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Wr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : St(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Wr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : St(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : St(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Wr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Wr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Ga.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Ga.inset}`]: {
    marginLeft: 52
  },
  [`& .${el.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${el.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Qa.root}`]: {
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
      [`& .${Qa.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Un = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiMenuItem"
  }), {
    autoFocus: n = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: l = !1,
    focusVisibleClassName: c,
    role: p = "menuitem",
    tabIndex: d,
    className: f,
    ...m
  } = r, S = h.useContext(ao), b = h.useMemo(() => ({
    dense: s || S.dense || !1,
    disableGutters: l
  }), [S.dense, s, l]), x = h.useRef(null);
  qt(() => {
    n && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [n]);
  const E = {
    ...r,
    dense: b.dense,
    divider: a,
    disableGutters: l
  }, O = Tg(r), w = it(x, t);
  let v;
  return r.disabled || (v = d !== void 0 ? d : -1), /* @__PURE__ */ N.jsx(ao.Provider, {
    value: b,
    children: /* @__PURE__ */ N.jsx(Rg, {
      ref: w,
      role: p,
      tabIndex: v,
      component: i,
      focusVisibleClassName: he(O.focusVisible, c),
      className: he(O.root, f),
      ...m,
      ownerState: E,
      classes: O
    })
  });
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
function Cg(e) {
  return Be("MuiNativeSelect", e);
}
const Rs = Me("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ng = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${pe(r)}`, s && "iconOpen", n && "disabled"]
  };
  return Ue(l, Cg, t);
}, nu = ue("select")(({
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
  [`&.${Rs.disabled}`]: {
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
})), $g = ue(nu, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: wt,
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.select, t[r.variant], r.error && t.error, {
      [`&.${Rs.multiple}`]: t.multiple
    }];
  }
})({}), ou = ue("svg")(({
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
  [`&.${Rs.disabled}`]: {
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
})), _g = ue(ou, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${pe(r.variant)}`], r.open && t.iconOpen];
  }
})({}), iu = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const {
    className: r,
    disabled: n,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard",
    ...c
  } = e, p = {
    ...e,
    disabled: n,
    variant: l,
    error: i
  }, d = Ng(p);
  return /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ N.jsx($g, {
      ownerState: p,
      className: he(d.select, r),
      disabled: n,
      ref: a || t,
      ...c
    }), e.multiple ? null : /* @__PURE__ */ N.jsx(_g, {
      as: s,
      ownerState: p,
      className: d.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (iu.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Wt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
var il;
const jg = ue("fieldset", {
  shouldForwardProp: wt
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
}), Pg = ue("legend", {
  shouldForwardProp: wt
})(Ye(({
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
function su(e) {
  const {
    children: t,
    classes: r,
    className: n,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ N.jsx(jg, {
    "aria-hidden": !0,
    className: n,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ N.jsx(Pg, {
      ownerState: c,
      children: l ? /* @__PURE__ */ N.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        il || (il = /* @__PURE__ */ N.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (su.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const Lg = (e) => {
  const {
    classes: t
  } = e, r = Ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Qm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Mg = ue(Mo, {
  shouldForwardProp: (e) => wt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Po
})(Ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${jt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${jt.focused} .${jt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Ct()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        [`&.${jt.focused} .${jt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[r].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${jt.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${jt.error} .${jt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${jt.disabled} .${jt.notchedOutline}`]: {
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
        size: n
      }) => r.multiline && n === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Ag = ue(su, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Ig = ue(Ao, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Lo
})(Ye(({
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
}))), pn = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r;
  const n = Ke({
    props: e,
    name: "MuiOutlinedInput"
  }), {
    components: i = {},
    fullWidth: s = !1,
    inputComponent: a = "input",
    label: l,
    multiline: c = !1,
    notched: p,
    slots: d = {},
    type: f = "text",
    ...m
  } = n, S = Lg(n), b = Tr(), x = kr({
    props: n,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = {
    ...n,
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: b,
    fullWidth: s,
    hiddenLabel: x.hiddenLabel,
    multiline: c,
    size: x.size,
    type: f
  }, O = d.root ?? i.Root ?? Mg, w = d.input ?? i.Input ?? Ig;
  return /* @__PURE__ */ N.jsx(ws, {
    slots: {
      root: O,
      input: w
    },
    renderSuffix: (v) => /* @__PURE__ */ N.jsx(Ag, {
      ownerState: E,
      className: S.notchedOutline,
      label: l != null && l !== "" && x.required ? r || (r = /* @__PURE__ */ N.jsxs(h.Fragment, {
        children: [l, " ", "*"]
      })) : l,
      notched: typeof p < "u" ? p : !!(v.startAdornment || v.filled || v.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: c,
    ref: t,
    type: f,
    ...m,
    classes: {
      ...S,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
pn && (pn.muiName = "Input");
function Dg(e) {
  return Be("MuiSelect", e);
}
const zr = Me("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var sl;
const Bg = ue(nu, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${zr.select}`]: t.select
      },
      {
        [`&.${zr.select}`]: t[r.variant]
      },
      {
        [`&.${zr.error}`]: t.error
      },
      {
        [`&.${zr.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${zr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Fg = ue(ou, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.variant && t[`icon${pe(r.variant)}`], r.open && t.iconOpen];
  }
})({}), Vg = ue("input", {
  shouldForwardProp: (e) => Nc(e) && e !== "classes",
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
function al(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Wg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const zg = (e) => {
  const {
    classes: t,
    variant: r,
    disabled: n,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", r, n && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${pe(r)}`, s && "iconOpen", n && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ue(l, Dg, t);
}, au = /* @__PURE__ */ h.forwardRef(function(e, t) {
  var r;
  const {
    "aria-describedby": n,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: p,
    defaultValue: d,
    disabled: f,
    displayEmpty: m,
    error: S = !1,
    IconComponent: b,
    inputRef: x,
    labelId: E,
    MenuProps: O = {},
    multiple: w,
    name: v,
    onBlur: T,
    onChange: g,
    onClose: $,
    onFocus: A,
    onOpen: D,
    open: y,
    readOnly: j,
    renderValue: I,
    SelectDisplayProps: B = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: M,
    value: q,
    variant: te = "standard",
    ...ae
  } = e, [X, be] = Ta({
    controlled: q,
    default: d,
    name: "Select"
  }), [_, W] = Ta({
    controlled: y,
    default: p,
    name: "Select"
  }), K = h.useRef(null), z = h.useRef(null), [Y, re] = h.useState(null), {
    current: J
  } = h.useRef(y != null), [ee, Z] = h.useState(), H = it(t, x), U = h.useCallback((le) => {
    z.current = le, le && re(le);
  }, []), ne = Y == null ? void 0 : Y.parentNode;
  h.useImperativeHandle(H, () => ({
    focus: () => {
      z.current.focus();
    },
    node: K.current,
    value: X
  }), [X]), h.useEffect(() => {
    p && _ && Y && !J && (Z(a ? null : ne.clientWidth), z.current.focus());
  }, [Y, a]), h.useEffect(() => {
    s && z.current.focus();
  }, [s]), h.useEffect(() => {
    if (!E)
      return;
    const le = gt(z.current).getElementById(E);
    if (le) {
      const Se = () => {
        getSelection().isCollapsed && z.current.focus();
      };
      return le.addEventListener("click", Se), () => {
        le.removeEventListener("click", Se);
      };
    }
  }, [E]);
  const R = (le, Se) => {
    le ? D && D(Se) : $ && $(Se), J || (Z(a ? null : ne.clientWidth), W(le));
  }, se = (le) => {
    le.button === 0 && (le.preventDefault(), z.current.focus(), R(!0, le));
  }, F = (le) => {
    R(!1, le);
  }, me = h.Children.toArray(l), we = (le) => {
    const Se = me.find((Je) => Je.props.value === le.target.value);
    Se !== void 0 && (be(Se.props.value), g && g(le, Se));
  }, ye = (le) => (Se) => {
    let Je;
    if (Se.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        Je = Array.isArray(X) ? X.slice() : [];
        const $t = X.indexOf(le.props.value);
        $t === -1 ? Je.push(le.props.value) : Je.splice($t, 1);
      } else
        Je = le.props.value;
      if (le.props.onClick && le.props.onClick(Se), X !== Je && (be(Je), g)) {
        const $t = Se.nativeEvent || Se, sr = new $t.constructor($t.type, $t);
        Object.defineProperty(sr, "target", {
          writable: !0,
          value: {
            value: Je,
            name: v
          }
        }), g(sr, le);
      }
      w || R(!1, Se);
    }
  }, De = (le) => {
    j || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(le.key) && (le.preventDefault(), R(!0, le));
  }, Fe = Y !== null && _, Ee = (le) => {
    !Fe && T && (Object.defineProperty(le, "target", {
      writable: !0,
      value: {
        value: X,
        name: v
      }
    }), T(le));
  };
  delete ae["aria-invalid"];
  let He, ie;
  const We = [];
  let at = !1, ge = !1;
  (oo({
    value: X
  }) || m) && (I ? He = I(X) : at = !0);
  const Oe = me.map((le) => {
    if (!/* @__PURE__ */ h.isValidElement(le))
      return null;
    process.env.NODE_ENV !== "production" && nn.isFragment(le) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Se;
    if (w) {
      if (!Array.isArray(X))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Dt(2));
      Se = X.some((Je) => al(Je, le.props.value)), Se && at && We.push(le.props.children);
    } else
      Se = al(X, le.props.value), Se && at && (ie = le.props.children);
    return Se && (ge = !0), /* @__PURE__ */ h.cloneElement(le, {
      "aria-selected": Se ? "true" : "false",
      onClick: ye(le),
      onKeyUp: (Je) => {
        Je.key === " " && Je.preventDefault(), le.props.onKeyUp && le.props.onKeyUp(Je);
      },
      role: "option",
      selected: Se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": le.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && h.useEffect(() => {
    if (!ge && !w && X !== "") {
      const le = me.map((Se) => Se.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${X}\` for the select ${v ? `(name="${v}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${le.filter((Se) => Se != null).map((Se) => `\`${Se}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [ge, me, w, v, X]), at && (w ? We.length === 0 ? He = null : He = We.reduce((le, Se, Je) => (le.push(Se), Je < We.length - 1 && le.push(", "), le), []) : He = ie);
  let Xe = ee;
  !a && J && Y && (Xe = ne.clientWidth);
  let ut;
  typeof L < "u" ? ut = L : ut = f ? null : 0;
  const lt = B.id || (v ? `mui-component-select-${v}` : void 0), ve = {
    ...e,
    variant: te,
    value: X,
    open: Fe,
    error: S
  }, pt = zg(ve), Nt = {
    ...O.PaperProps,
    ...(r = O.slotProps) == null ? void 0 : r.paper
  }, ir = lc();
  return /* @__PURE__ */ N.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ N.jsx(Bg, {
      as: "div",
      ref: U,
      tabIndex: ut,
      role: "combobox",
      "aria-controls": ir,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Fe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [E, lt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": n,
      onKeyDown: De,
      onMouseDown: f || j ? null : se,
      onBlur: Ee,
      onFocus: A,
      ...B,
      ownerState: ve,
      className: he(B.className, pt.select, c),
      id: lt,
      children: Wg(He) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        sl || (sl = /* @__PURE__ */ N.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : He
    }), /* @__PURE__ */ N.jsx(Vg, {
      "aria-invalid": S,
      value: Array.isArray(X) ? X.join(",") : X,
      name: v,
      ref: K,
      "aria-hidden": !0,
      onChange: we,
      tabIndex: -1,
      disabled: f,
      className: pt.nativeInput,
      autoFocus: s,
      ...ae,
      ownerState: ve
    }), /* @__PURE__ */ N.jsx(Fg, {
      as: b,
      className: pt.icon,
      ownerState: ve
    }), /* @__PURE__ */ N.jsx(ru, {
      id: `menu-${v || ""}`,
      anchorEl: ne,
      open: Fe,
      onClose: F,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...O,
      MenuListProps: {
        "aria-labelledby": E,
        role: "listbox",
        "aria-multiselectable": w ? "true" : void 0,
        disableListWrap: !0,
        id: ir,
        ...O.MenuListProps
      },
      slotProps: {
        ...O.slotProps,
        paper: {
          ...Nt,
          style: {
            minWidth: Xe,
            ...Nt != null ? Nt.style : null
          }
        }
      },
      children: Oe
    })]
  });
});
process.env.NODE_ENV !== "production" && (au.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Wt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const qg = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Cs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => wt(e) && e !== "variant",
  slot: "Root"
}, Ug = ue(un, Cs)(""), Hg = ue(pn, Cs)(""), Yg = ue(cn, Cs)(""), Io = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Cc({
    name: "MuiSelect",
    props: e
  }), {
    autoWidth: n = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: p = ty,
    id: d,
    input: f,
    inputProps: m,
    label: S,
    labelId: b,
    MenuProps: x,
    multiple: E = !1,
    native: O = !1,
    onClose: w,
    onOpen: v,
    open: T,
    renderValue: g,
    SelectDisplayProps: $,
    variant: A = "outlined",
    ...D
  } = r, y = O ? iu : au, j = Tr(), I = kr({
    props: r,
    muiFormControl: j,
    states: ["variant", "error"]
  }), B = I.variant || A, L = {
    ...r,
    variant: B,
    classes: s
  }, M = qg(L), {
    root: q,
    ...te
  } = M, ae = f || {
    standard: /* @__PURE__ */ N.jsx(Ug, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ N.jsx(Hg, {
      label: S,
      ownerState: L
    }),
    filled: /* @__PURE__ */ N.jsx(Yg, {
      ownerState: L
    })
  }[B], X = it(t, Sn(ae));
  return /* @__PURE__ */ N.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(ae, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: y,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: p,
        variant: B,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: E,
        ...O ? {
          id: d
        } : {
          autoWidth: n,
          defaultOpen: l,
          displayEmpty: c,
          labelId: b,
          MenuProps: x,
          onClose: w,
          onOpen: v,
          open: T,
          renderValue: g,
          SelectDisplayProps: {
            id: d,
            ...$
          }
        },
        ...m,
        classes: m ? nt(te, m.classes) : te,
        ...f ? f.props.inputProps : {}
      },
      ...(E && O || c) && B === "outlined" ? {
        notched: !0
      } : {},
      ref: X,
      className: he(ae.props.className, a, M.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!f && {
        variant: B
      },
      ...D
    })
  });
});
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
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
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
Io.muiName = "Select";
const Jr = jh({
  createStyledComponent: ue("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => Cc({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * Add an element between each child.
   */
  divider: o.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: o.bool
});
function Kg(e) {
  return Be("MuiTextField", e);
}
Me("MuiTextField", ["root"]);
const Xg = {
  standard: un,
  filled: cn,
  outlined: pn
}, Gg = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"]
  }, Kg, t);
}, Zg = ue(Os, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ui = /* @__PURE__ */ h.forwardRef(function(e, t) {
  const r = Ke({
    props: e,
    name: "MuiTextField"
  }), {
    autoComplete: n,
    autoFocus: i = !1,
    children: s,
    className: a,
    color: l = "primary",
    defaultValue: c,
    disabled: p = !1,
    error: d = !1,
    FormHelperTextProps: f,
    fullWidth: m = !1,
    helperText: S,
    id: b,
    InputLabelProps: x,
    inputProps: E,
    InputProps: O,
    inputRef: w,
    label: v,
    maxRows: T,
    minRows: g,
    multiline: $ = !1,
    name: A,
    onBlur: D,
    onChange: y,
    onFocus: j,
    placeholder: I,
    required: B = !1,
    rows: L,
    select: M = !1,
    SelectProps: q,
    slots: te = {},
    slotProps: ae = {},
    type: X,
    value: be,
    variant: _ = "outlined",
    ...W
  } = r, K = {
    ...r,
    autoFocus: i,
    color: l,
    disabled: p,
    error: d,
    fullWidth: m,
    multiline: $,
    required: B,
    select: M,
    variant: _
  }, z = Gg(K);
  process.env.NODE_ENV !== "production" && M && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Y = lc(b), re = S && Y ? `${Y}-helper-text` : void 0, J = v && Y ? `${Y}-label` : void 0, ee = Xg[_], Z = {
    slots: te,
    slotProps: {
      input: O,
      inputLabel: x,
      htmlInput: E,
      formHelperText: f,
      select: q,
      ...ae
    }
  }, H = {}, U = Z.slotProps.inputLabel;
  _ === "outlined" && (U && typeof U.shrink < "u" && (H.notched = U.shrink), H.label = v), M && ((!q || !q.native) && (H.id = void 0), H["aria-describedby"] = void 0);
  const [ne, R] = kt("input", {
    elementType: ee,
    externalForwardedProps: Z,
    additionalProps: H,
    ownerState: K
  }), [se, F] = kt("inputLabel", {
    elementType: ks,
    externalForwardedProps: Z,
    ownerState: K
  }), [me, we] = kt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Z,
    ownerState: K
  }), [ye, De] = kt("formHelperText", {
    elementType: Kc,
    externalForwardedProps: Z,
    ownerState: K
  }), [Fe, Ee] = kt("select", {
    elementType: Io,
    externalForwardedProps: Z,
    ownerState: K
  }), He = /* @__PURE__ */ N.jsx(ne, {
    "aria-describedby": re,
    autoComplete: n,
    autoFocus: i,
    defaultValue: c,
    fullWidth: m,
    multiline: $,
    name: A,
    rows: L,
    maxRows: T,
    minRows: g,
    type: X,
    value: be,
    id: Y,
    inputRef: w,
    onBlur: D,
    onChange: y,
    onFocus: j,
    placeholder: I,
    inputProps: we,
    slots: {
      input: te.htmlInput ? me : void 0
    },
    ...R
  });
  return /* @__PURE__ */ N.jsxs(Zg, {
    className: he(z.root, a),
    disabled: p,
    error: d,
    fullWidth: m,
    ref: t,
    required: B,
    color: l,
    variant: _,
    ownerState: K,
    ...W,
    children: [v != null && v !== "" && /* @__PURE__ */ N.jsx(se, {
      htmlFor: Y,
      id: J,
      ...F,
      children: v
    }), M ? /* @__PURE__ */ N.jsx(Fe, {
      "aria-describedby": re,
      id: Y,
      labelId: J,
      value: be,
      input: He,
      ...Ee,
      children: s
    }) : He, S && /* @__PURE__ */ N.jsx(ye, {
      id: re,
      ...De,
      children: S
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    formHelperText: o.oneOfType([o.func, o.object]),
    htmlInput: o.oneOfType([o.func, o.object]),
    input: o.oneOfType([o.func, o.object]),
    inputLabel: o.oneOfType([o.func, o.object]),
    select: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    formHelperText: o.elementType,
    htmlInput: o.elementType,
    input: o.elementType,
    inputLabel: o.elementType,
    select: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function Jg(e) {
  const [t, r] = _u(!1);
  function n(a) {
    if (a === 0)
      console.log("WL Ready"), r(!0);
    else
      throw r(!1), new Error(`wolframscript returned code: ${a}`);
  }
  Ms(() => {
    e && e.ipc.on("wl-status", (a) => {
      n(a), console.log("wl-status effect:", t);
    });
  }, [e]);
  async function i(a, l = {}, c = 4848) {
    return new Promise((p, d) => {
      try {
        e && (e.ipc.send("req", [a, l, c]), e.ipc.once("req", (f) => {
          console.log("Received response:", f), p(f);
        }));
      } catch (f) {
        d(f);
      }
    });
  }
  const s = ju(async () => {
    const a = await i("aliveQ", {}, 8888);
    console.log("aliveQ res:", a), r(a === "True");
  }, [t, r]);
  return Ms(() => {
    s(), console.log(`isActive after aliveQ: ${t}`);
  }, [s, t]), {
    isActive: t,
    req: i
  };
}
const lu = Cu({
  isActive: !1,
  req: async () => {
  }
});
function Qg({
  api: e,
  children: t
}) {
  const r = Jg(e);
  return /* @__PURE__ */ N.jsx(lu.Provider, { value: r, children: t });
}
function cu() {
  return bl(lu);
}
function eb() {
  const e = cu(), [t, r] = rt.useState("Python"), [n, i] = rt.useState(""), [s, a] = rt.useState(""), [l, c] = rt.useState(null), p = (b) => {
    r(b.target.value);
  }, d = (b) => {
    i(b.target.value);
  }, f = async () => {
    await e.req(`/evaluate-${t}`, {
      in: n
    }).then((b) => c(b)).catch((b) => console.log(b));
  }, m = async () => {
    await e.req("/evaluate", {
      in: s
    }).then((b) => c(b)).catch((b) => console.log(b));
  }, S = (b) => {
    a(b.target.value);
  };
  return /* @__PURE__ */ N.jsxs(
    Jr,
    {
      className: "Hello",
      direction: "column",
      spacing: 2,
      sx: { textAlign: "center", alignContent: "center" },
      justifyContent: "center",
      children: [
        /* @__PURE__ */ N.jsx(Ac, { variant: "h2", children: "Electron + ReactTS + WolframLanguage" }),
        /* @__PURE__ */ N.jsxs(Jr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ N.jsx(
            Ui,
            {
              variant: "filled",
              label: "WL Input",
              color: "primary",
              sx: { width: 450 },
              onChange: S
            }
          ),
          /* @__PURE__ */ N.jsx(
            Di,
            {
              variant: "contained",
              onClick: m,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        /* @__PURE__ */ N.jsxs(Jr, { spacing: 2, direction: "row", children: [
          /* @__PURE__ */ N.jsxs(Os, { children: [
            /* @__PURE__ */ N.jsx(ks, { id: "evaluator-label", children: "Evaluator" }),
            /* @__PURE__ */ N.jsxs(
              Io,
              {
                labelId: "evaluator-label",
                label: "Evaluator",
                sx: { width: 130 },
                value: t,
                onChange: p,
                children: [
                  /* @__PURE__ */ N.jsx(Un, { value: "Python", children: "Python" }),
                  /* @__PURE__ */ N.jsx(Un, { value: "NodeJS", children: "NodeJS" }),
                  /* @__PURE__ */ N.jsx(Un, { value: "Shell", children: "Shell" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx(
            Ui,
            {
              variant: "filled",
              label: "External Input",
              color: "primary",
              sx: { width: 300 },
              onChange: d
            }
          ),
          /* @__PURE__ */ N.jsx(
            Di,
            {
              variant: "contained",
              onClick: f,
              disabled: !e.isActive,
              children: "Evaluate"
            }
          )
        ] }),
        l && typeof l != "object" ? /* @__PURE__ */ N.jsx(Ss, { sx: { maxWidth: "50%", p: 2 }, variant: "outlined", children: l }) : null
      ]
    }
  );
}
const tb = (e) => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "1em", height: "1em", viewBox: "0 0 11 14", ...e }, /* @__PURE__ */ h.createElement("defs", null, /* @__PURE__ */ h.createElement("clipPath", { id: "clip1" }, /* @__PURE__ */ h.createElement("path", { d: "M 0.238281 2.398438 L 10.800781 2.398438 L 10.800781 13.679688 L 0.238281 13.679688 Z M 0.238281 2.398438 " })), /* @__PURE__ */ h.createElement("clipPath", { id: "clip2" }, /* @__PURE__ */ h.createElement("path", { d: "M 7 7 L 10.800781 7 L 10.800781 10 L 7 10 Z M 7 7 " })), /* @__PURE__ */ h.createElement("clipPath", { id: "clip3" }, /* @__PURE__ */ h.createElement("path", { d: "M 6 5 L 10.800781 5 L 10.800781 9 L 6 9 Z M 6 5 " })), /* @__PURE__ */ h.createElement("clipPath", { id: "clip4" }, /* @__PURE__ */ h.createElement("path", { d: "M 0.238281 5 L 4 5 L 4 9 L 0.238281 9 Z M 0.238281 5 " })), /* @__PURE__ */ h.createElement("clipPath", { id: "clip5" }, /* @__PURE__ */ h.createElement("path", { d: "M 0.238281 7 L 4 7 L 4 10 L 0.238281 10 Z M 0.238281 7 " })), /* @__PURE__ */ h.createElement("clipPath", { id: "clip6" }, /* @__PURE__ */ h.createElement("path", { d: "M 0.238281 8 L 5 8 L 5 11 L 0.238281 11 Z M 0.238281 8 " }))), /* @__PURE__ */ h.createElement("g", { id: "surface46" }, /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip1)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  stroke: "none",
  fillRule: "evenodd",
  fill: "rgb(100%,0%,0%)",
  fillOpacity: 1
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.066406 8.125 L 10.546875 6.472656 L 8.421875 6.011719 L 8.605469 3.808594 L 6.570313 4.726563 L 5.460938 2.800781 L 4.351563 4.726563 L 2.316406 3.808594 L 2.5 6.011719 L 0.375 6.472656 L 1.851563 8.125 L 0.375 9.777344 L 2.59375 10.238281 L 2.40625 12.441406 L 4.441406 11.523438 L 5.460938 13.453125 L 6.570313 11.523438 L 8.605469 12.441406 L 8.421875 10.238281 L 10.640625 9.777344 Z M 9.066406 8.125 " })), /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip2)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.53125 9.226563 L 8.511719 8.859375 L 7.867188 7.941406 L 8.699219 8.21875 Z M 9.53125 9.226563 " })), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.292969 11.25 L 5.644531 12.257813 L 5.644531 11.15625 L 6.292969 10.238281 Z M 6.292969 11.25 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.8125 5.828125 L 3.796875 5.460938 L 3.148438 4.636719 L 4.257813 5.09375 Z M 4.8125 5.828125 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.664063 5.09375 L 7.773438 4.636719 L 7.125 5.460938 L 6.109375 5.828125 Z M 6.664063 5.09375 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 7.957031 6.105469 L 7.402344 6.839844 L 7.402344 5.738281 L 8.050781 4.910156 Z M 7.957031 6.105469 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.460938 10.789063 L 4.628906 9.59375 L 5.460938 8.492188 L 6.292969 9.59375 Z M 5.460938 10.789063 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 3.886719 7.390625 L 3.886719 5.921875 L 5.277344 6.382813 L 5.277344 7.757813 Z M 3.886719 7.390625 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.644531 6.382813 L 7.035156 5.921875 L 7.035156 7.390625 L 5.644531 7.851563 Z M 5.644531 6.382813 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 6.105469 L 2.871094 4.910156 L 3.519531 5.738281 L 3.519531 6.839844 Z M 2.964844 6.105469 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.089844 8.21875 L 4.257813 9.320313 L 2.871094 8.953125 L 3.796875 7.851563 Z M 5.089844 8.21875 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 4.628906 10.238281 L 5.277344 11.15625 L 5.277344 12.257813 L 4.628906 11.25 Z M 4.628906 10.238281 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 5.832031 8.21875 L 7.125 7.757813 L 8.050781 8.859375 L 6.664063 9.320313 Z M 5.832031 8.21875 " }), /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip3)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 9.808594 6.75 L 8.789063 7.851563 L 7.496094 7.390625 L 8.234375 6.382813 Z M 9.808594 6.75 " })), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.199219 4.910156 L 5.460938 5.921875 L 4.722656 4.910156 L 5.460938 3.625 Z M 6.199219 4.910156 " }), /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip4)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.113281 6.75 L 2.6875 6.382813 L 3.425781 7.390625 L 2.128906 7.851563 Z M 1.113281 6.75 " })), /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip5)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.222656 8.308594 L 3.054688 8.035156 L 2.40625 8.859375 L 1.390625 9.226563 Z M 2.222656 8.308594 " })), /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip6)", clipRule: "nonzero" }, /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 1.484375 9.59375 L 2.5 9.226563 L 3.609375 9.59375 L 2.6875 9.871094 Z M 1.484375 9.59375 " })), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 2.964844 10.238281 L 4.164063 9.871094 L 4.164063 11.15625 L 2.777344 11.800781 Z M 2.964844 10.238281 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 6.753906 11.15625 L 6.753906 9.871094 L 7.957031 10.238281 L 8.144531 11.800781 Z M 6.753906 11.15625 " }), /* @__PURE__ */ h.createElement("path", { style: {
  fill: "none",
  strokeWidth: 0.0902007,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "rgb(86.666667%,86.666667%,86.666667%)",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M 8.144531 9.871094 L 7.21875 9.59375 L 8.328125 9.226563 L 9.347656 9.59375 Z M 8.144531 9.871094 " })));
function rb() {
  return /* @__PURE__ */ N.jsxs(
    Jr,
    {
      className: "main",
      direction: "column",
      spacing: 2,
      sx: {
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ N.jsx(tb, { style: { width: "220px", height: "auto" } }),
        /* @__PURE__ */ N.jsx(Vc, { sx: { width: "150%", minWidth: "200px" }, children: /* @__PURE__ */ N.jsx(Gc, {}) })
      ]
    }
  );
}
const nb = $o({
  palette: {
    mode: "dark",
    primary: {
      main: "#ee0915"
    }
  }
});
function ob() {
  return cu().isActive ? /* @__PURE__ */ N.jsx(xp, { children: /* @__PURE__ */ N.jsx(Op, { children: /* @__PURE__ */ N.jsx(Rl, { path: "/", element: /* @__PURE__ */ N.jsx(eb, {}) }) }) }) : /* @__PURE__ */ N.jsx(rb, {});
}
function uu({ api: e }) {
  return /* @__PURE__ */ N.jsxs(um, { theme: nb, children: [
    /* @__PURE__ */ N.jsx(Hc, {}),
    /* @__PURE__ */ N.jsx(Qg, { api: e, children: /* @__PURE__ */ N.jsx(ob, {}) })
  ] });
}
const ib = document.getElementById("root"), sb = bi(ib);
sb.render(
  /* @__PURE__ */ N.jsx(rt.StrictMode, { children: /* @__PURE__ */ N.jsx(uu, {}) })
);
const Bt = /* @__PURE__ */ Object.create(null);
Bt.open = "0";
Bt.close = "1";
Bt.ping = "2";
Bt.pong = "3";
Bt.message = "4";
Bt.upgrade = "5";
Bt.noop = "6";
const Hn = /* @__PURE__ */ Object.create(null);
Object.keys(Bt).forEach((e) => {
  Hn[Bt[e]] = e;
});
const Hi = { type: "error", data: "parser error" }, pu = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", du = typeof ArrayBuffer == "function", fu = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ns = ({ type: e, data: t }, r, n) => pu && t instanceof Blob ? r ? n(t) : ll(t, n) : du && (t instanceof ArrayBuffer || fu(t)) ? r ? n(t) : ll(new Blob([t]), n) : n(Bt[e] + (t || "")), ll = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function cl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let fi;
function ab(e, t) {
  if (pu && e.data instanceof Blob)
    return e.data.arrayBuffer().then(cl).then(t);
  if (du && (e.data instanceof ArrayBuffer || fu(e.data)))
    return t(cl(e.data));
  Ns(e, !1, (r) => {
    fi || (fi = new TextEncoder()), t(fi.encode(r));
  });
}
const ul = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ul.length; e++)
  Kr[ul.charCodeAt(e)] = e;
const lb = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, s, a, l, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const p = new ArrayBuffer(t), d = new Uint8Array(p);
  for (n = 0; n < r; n += 4)
    s = Kr[e.charCodeAt(n)], a = Kr[e.charCodeAt(n + 1)], l = Kr[e.charCodeAt(n + 2)], c = Kr[e.charCodeAt(n + 3)], d[i++] = s << 2 | a >> 4, d[i++] = (a & 15) << 4 | l >> 2, d[i++] = (l & 3) << 6 | c & 63;
  return p;
}, cb = typeof ArrayBuffer == "function", $s = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: hu(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: ub(e.substring(1), t)
  } : Hn[r] ? e.length > 1 ? {
    type: Hn[r],
    data: e.substring(1)
  } : {
    type: Hn[r]
  } : Hi;
}, ub = (e, t) => {
  if (cb) {
    const r = lb(e);
    return hu(r, t);
  } else
    return { base64: !0, data: e };
}, hu = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, mu = "", pb = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((s, a) => {
    Ns(s, !1, (l) => {
      n[a] = l, ++i === r && t(n.join(mu));
    });
  });
}, db = (e, t) => {
  const r = e.split(mu), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = $s(r[i], t);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
};
function fb() {
  return new TransformStream({
    transform(e, t) {
      ab(e, (r) => {
        const n = r.length;
        let i;
        if (n < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(r);
      });
    }
  });
}
let hi;
function jn(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function Pn(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    r[i] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function hb(e, t) {
  hi || (hi = new TextDecoder());
  const r = [];
  let n = 0, i = -1, s = !1;
  return new TransformStream({
    transform(a, l) {
      for (r.push(a); ; ) {
        if (n === 0) {
          if (jn(r) < 1)
            break;
          const c = Pn(r, 1);
          s = (c[0] & 128) === 128, i = c[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (jn(r) < 2)
            break;
          const c = Pn(r, 2);
          i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (jn(r) < 8)
            break;
          const c = Pn(r, 8), p = new DataView(c.buffer, c.byteOffset, c.length), d = p.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            l.enqueue(Hi);
            break;
          }
          i = d * Math.pow(2, 32) + p.getUint32(4), n = 3;
        } else {
          if (jn(r) < i)
            break;
          const c = Pn(r, i);
          l.enqueue($s(s ? c : hi.decode(c), t)), n = 0;
        }
        if (i === 0 || i > e) {
          l.enqueue(Hi);
          break;
        }
      }
    }
  });
}
const yu = 4;
function tt(e) {
  if (e) return mb(e);
}
function mb(e) {
  for (var t in tt.prototype)
    e[t] = tt.prototype[t];
  return e;
}
tt.prototype.on = tt.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
tt.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
tt.prototype.off = tt.prototype.removeListener = tt.prototype.removeAllListeners = tt.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === t || n.fn === t) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
tt.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, t);
  }
  return this;
};
tt.prototype.emitReserved = tt.prototype.emit;
tt.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
tt.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Et = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function gu(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const yb = Et.setTimeout, gb = Et.clearTimeout;
function Do(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = yb.bind(Et), e.clearTimeoutFn = gb.bind(Et)) : (e.setTimeoutFn = Et.setTimeout.bind(Et), e.clearTimeoutFn = Et.clearTimeout.bind(Et));
}
const bb = 1.33;
function vb(e) {
  return typeof e == "string" ? Eb(e) : Math.ceil((e.byteLength || e.size) * bb);
}
function Eb(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Sb(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function xb(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class wb extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class _s extends tt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Do(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
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
  onError(t, r, n) {
    return super.emitReserved("error", new wb(t, r, n)), this;
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
    const r = $s(t, this.socket.binaryType);
    this.onPacket(r);
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
  createUri(t, r = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const r = Sb(t);
    return r.length ? "?" + r : "";
  }
}
const bu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Yi = 64, Ob = {};
let pl = 0, Ln = 0, dl;
function fl(e) {
  let t = "";
  do
    t = bu[e % Yi] + t, e = Math.floor(e / Yi);
  while (e > 0);
  return t;
}
function vu() {
  const e = fl(+/* @__PURE__ */ new Date());
  return e !== dl ? (pl = 0, dl = e) : e + "." + fl(pl++);
}
for (; Ln < Yi; Ln++)
  Ob[bu[Ln]] = Ln;
let Eu = !1;
try {
  Eu = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const kb = Eu;
function Su(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || kb))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Et[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Tb() {
}
const Rb = function() {
  return new Su({
    xdomain: !1
  }).responseType != null;
}();
class Cb extends _s {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port;
    }
    const r = t && t.forceBase64;
    this.supportsBinary = Rb && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this.polling || !this.writable) {
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
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
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    db(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, pb(t, (r) => {
      this.doWrite(r, () => {
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
    const t = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = vu()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new It(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class It extends tt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), Do(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var t;
    const r = gu(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd;
    const n = this.xhr = new Su(r);
    try {
      n.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(n), "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
        var i;
        n.readyState === 3 && ((i = this.opts.cookieJar) === null || i === void 0 || i.parseCookies(n)), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = It.requestsCount++, It.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Tb, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete It.requests[this.index], this.xhr = null;
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
}
It.requestsCount = 0;
It.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", hl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Et ? "pagehide" : "unload";
    addEventListener(e, hl, !1);
  }
}
function hl() {
  for (let e in It.requests)
    It.requests.hasOwnProperty(e) && It.requests[e].abort();
}
const js = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), Mn = Et.WebSocket || Et.MozWebSocket, ml = !0, Nb = "arraybuffer", yl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class $b extends _s {
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
    const t = this.uri(), r = this.opts.protocols, n = yl ? {} : gu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = ml && !yl ? r ? new Mn(t, r) : new Mn(t) : new Mn(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
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
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      Ns(n, this.supportsBinary, (s) => {
        const a = {};
        try {
          ml && this.ws.send(s);
        } catch {
        }
        i && js(() => {
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
    const t = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = vu()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Mn;
  }
}
class _b extends _s {
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
        const r = hb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = fb();
        i.readable.pipeTo(t.writable), this.writer = i.writable.getWriter();
        const s = () => {
          n.read().then(({ done: l, value: c }) => {
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
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      this.writer.write(n).then(() => {
        i && js(() => {
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
const jb = {
  websocket: $b,
  webtransport: _b,
  polling: Cb
}, Pb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Lb = [
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
function Ki(e) {
  if (e.length > 2e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Pb.exec(e || ""), s = {}, a = 14;
  for (; a--; )
    s[Lb[a]] = i[a] || "";
  return r != -1 && n != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Mb(s, s.path), s.queryKey = Ab(s, s.query), s;
}
function Mb(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ab(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
let xu = class mr extends tt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.binaryType = Nb, this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = Ki(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = Ki(r.host).host), Do(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || [
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = xb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    const r = Object.assign({}, this.opts.query);
    r.EIO = yu, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new jb[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && mr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let r = this.createTransport(t), n = !1;
    mr.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            mr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (d(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const m = new Error("probe error");
            m.transport = r.name, this.emitReserved("upgradeError", m);
          }
      }));
    };
    function s() {
      n || (n = !0, d(), r.close(), r = null);
    }
    const a = (f) => {
      const m = new Error("probe error: " + f);
      m.transport = r.name, s(), this.emitReserved("upgradeError", m);
    };
    function l() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function p(f) {
      r && f.name !== r.name && s();
    }
    const d = () => {
      r.removeListener("open", i), r.removeListener("error", a), r.removeListener("close", l), this.off("close", c), this.off("upgrading", p);
    };
    r.once("open", i), r.once("error", a), r.once("close", l), this.once("close", c), this.once("upgrading", p), this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", mr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const r = this.upgrades.length;
      for (; t < r; t++)
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
          const r = new Error("server error");
          r.code = t.data, this.onError(r);
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
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += vb(i)), n > 0 && r > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
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
  write(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
  }
  send(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
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
  sendPacket(t, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    mr.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const r = [];
    let n = 0;
    const i = t.length;
    for (; n < i; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
};
xu.protocol = yu;
function Ib(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Ki(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + t, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Db = typeof ArrayBuffer == "function", Bb = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wu = Object.prototype.toString, Fb = typeof Blob == "function" || typeof Blob < "u" && wu.call(Blob) === "[object BlobConstructor]", Vb = typeof File == "function" || typeof File < "u" && wu.call(File) === "[object FileConstructor]";
function Ps(e) {
  return Db && (e instanceof ArrayBuffer || Bb(e)) || Fb && e instanceof Blob || Vb && e instanceof File;
}
function Yn(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (Yn(e[r]))
        return !0;
    return !1;
  }
  if (Ps(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Yn(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Yn(e[r]))
      return !0;
  return !1;
}
function Wb(e) {
  const t = [], r = e.data, n = e;
  return n.data = Xi(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Xi(e, t) {
  if (!e)
    return e;
  if (Ps(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Xi(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Xi(e[n], t));
    return r;
  }
  return e;
}
function zb(e, t) {
  return e.data = Gi(e.data, t), delete e.attachments, e;
}
function Gi(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Gi(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Gi(e[r], t));
  return e;
}
const qb = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Ub = 5;
var xe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(xe || (xe = {}));
class Hb {
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
    return (t.type === xe.EVENT || t.type === xe.ACK) && Yn(t) ? this.encodeAsBinary({
      type: t.type === xe.EVENT ? xe.BINARY_EVENT : xe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === xe.BINARY_EVENT || t.type === xe.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = Wb(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function gl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ls extends tt {
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
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === xe.BINARY_EVENT;
      n || r.type === xe.BINARY_ACK ? (r.type = n ? xe.EVENT : xe.ACK, this.reconstructor = new Yb(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Ps(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
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
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (xe[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === xe.BINARY_EVENT || n.type === xe.BINARY_ACK) {
      const s = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const a = t.substring(s, r);
      if (a != Number(a) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
    }
    if (t.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(s, r);
    } else
      n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const a = t.charAt(r);
        if (a == null || Number(a) != a) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(s, r + 1));
    }
    if (t.charAt(++r)) {
      const s = this.tryParse(t.substr(r));
      if (Ls.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case xe.CONNECT:
        return gl(r);
      case xe.DISCONNECT:
        return r === void 0;
      case xe.CONNECT_ERROR:
        return typeof r == "string" || gl(r);
      case xe.EVENT:
      case xe.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && qb.indexOf(r[0]) === -1);
      case xe.ACK:
      case xe.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Yb {
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
      const r = zb(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
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
const Kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ls,
  Encoder: Hb,
  get PacketType() {
    return xe;
  },
  protocol: Ub
}, Symbol.toStringTag, { value: "Module" }));
function Ot(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const Xb = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ou extends tt {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
  emit(t, ...r) {
    if (Xb.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: xe.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const a = this.ids++, l = r.pop();
      this._registerAckCallback(a, l), n.id = a;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let l = 0; l < this.sendBuffer.length; l++)
        this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
      r.call(this, new Error("operation has timed out"));
    }, i), a = (...l) => {
      this.io.clearTimeoutFn(s), r.apply(this, l);
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
  emitWithAck(t, ...r) {
    return new Promise((n, i) => {
      const s = (a, l) => a ? i(a) : n(l);
      s.withError = !0, r.push(s), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
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
      type: xe.CONNECT,
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
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t], n.withError && n.call(this, new Error("socket has been disconnected"));
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
        case xe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case xe.EVENT:
        case xe.BINARY_EVENT:
          this.onevent(t);
          break;
        case xe.ACK:
        case xe.BINARY_ACK:
          this.onack(t);
          break;
        case xe.DISCONNECT:
          this.ondisconnect();
          break;
        case xe.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
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
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: xe.ACK,
        id: t,
        data: i
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
    const r = this.acks[t.id];
    typeof r == "function" && (delete this.acks[t.id], r.withError && t.data.unshift(null), r.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: xe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function Rr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Rr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Rr.prototype.reset = function() {
  this.attempts = 0;
};
Rr.prototype.setMin = function(e) {
  this.ms = e;
};
Rr.prototype.setMax = function(e) {
  this.max = e;
};
Rr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Zi extends tt {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Do(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Rr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || Kb;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
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
    this.engine = new xu(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Ot(r, "open", function() {
      n.onopen(), t && t();
    }), s = (l) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", l), t ? t(l) : this.maybeReconnectOnOpen();
    }, a = Ot(r, "error", s);
    if (this._timeout !== !1) {
      const l = this._timeout, c = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), r.close();
      }, l);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(i), this.subs.push(a), this;
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
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    js(() => {
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
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ou(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
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
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
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
  onclose(t, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
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
const qr = {};
function Kn(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Ib(e, t.path || "/socket.io"), n = r.source, i = r.id, s = r.path, a = qr[i] && s in qr[i].nsps, l = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let c;
  return l ? c = new Zi(n, t) : (qr[i] || (qr[i] = new Zi(n, t)), c = qr[i]), r.query && !t.query && (t.query = r.queryKey), c.socket(r.path, t);
}
Object.assign(Kn, {
  Manager: Zi,
  Socket: Ou,
  io: Kn,
  connect: Kn
});
class Gb {
  constructor(t) {
    Xo(this, "socket");
    Xo(this, "api");
    this.socket = t, this.api = {
      env: "web",
      ipc: {
        on: this.on.bind(this),
        send: this.send.bind(this),
        once: this.once.bind(this)
      }
    };
  }
  on(t, r) {
    console.log(`Setting up listener for event: ${t}`), this.socket.on(t, (...n) => {
      console.log(`Received event: ${t}`, n), r(...n);
    });
  }
  send(t, ...r) {
    console.log(`Sending event: ${t}`, r), this.socket.emit(t, ...r);
  }
  once(t, r) {
    this.socket.once(t, r);
  }
}
const ku = Kn("localhost:3000"), dn = new Gb(ku), Zb = document.getElementById("root"), Jb = yi(Zb);
Jb.render(
  /* @__PURE__ */ Ds.jsx(rt.StrictMode, { children: /* @__PURE__ */ Ds.jsx(uu, { api: dn.api }) })
);
dn.api.ipc.on("connect", () => {
  console.log("Connected to server"), dn.api.ipc.send("start-wl");
});
dn.api.ipc.on("disconnect", () => {
  console.log("Disconnected from server");
});
window.addEventListener("beforeunload", () => {
  ku.disconnect();
});
dn.api.ipc.on("wl-status", (e) => {
  console.log("Wolfram Language status:", e);
});
//# sourceMappingURL=index.es.js.map

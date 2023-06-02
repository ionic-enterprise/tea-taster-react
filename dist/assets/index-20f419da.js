function Vk() {
  import.meta.url, import('_').catch(() => 1);
  async function* e() {}
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function _o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Wf = { exports: {} },
  cs = {},
  Kf = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lo = Symbol.for('react.element'),
  yv = Symbol.for('react.portal'),
  wv = Symbol.for('react.fragment'),
  bv = Symbol.for('react.strict_mode'),
  $v = Symbol.for('react.profiler'),
  xv = Symbol.for('react.provider'),
  kv = Symbol.for('react.context'),
  Ev = Symbol.for('react.forward_ref'),
  Sv = Symbol.for('react.suspense'),
  Cv = Symbol.for('react.memo'),
  Tv = Symbol.for('react.lazy'),
  ku = Symbol.iterator;
function Pv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ku && e[ku]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Qf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xf = Object.assign,
  qf = {};
function Pr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qf), (this.updater = n || Qf);
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Yf() {}
Yf.prototype = Pr.prototype;
function Va(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qf), (this.updater = n || Qf);
}
var Wa = (Va.prototype = new Yf());
Wa.constructor = Va;
Xf(Wa, Pr.prototype);
Wa.isPureReactComponent = !0;
var Eu = Array.isArray,
  Gf = Object.prototype.hasOwnProperty,
  Ka = { current: null },
  Zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Gf.call(t, r) && !Zf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Lo, type: e, key: i, ref: s, props: o, _owner: Ka.current };
}
function Rv(e, t) {
  return { $$typeof: Lo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Lo;
}
function _v(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Su = /\/+/g;
function Js(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? _v('' + e.key) : t.toString(36);
}
function fi(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Lo:
          case yv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Js(s, 0) : r),
      Eu(o)
        ? ((n = ''),
          e != null && (n = e.replace(Su, '$&/') + '/'),
          fi(o, t, n, '', function (c) {
            return c;
          }))
        : o != null &&
          (Qa(o) &&
            (o = Rv(o, n + (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(Su, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Eu(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Js(i, l);
      s += fi(i, t, n, a, o);
    }
  else if (((a = Pv(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Js(i, l++)), (s += fi(i, t, n, a, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    fi(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Lv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  pi = { transition: null },
  Iv = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: pi, ReactCurrentOwner: Ka };
j.Children = {
  map: Uo,
  forEach: function (e, t, n) {
    Uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qa(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
j.Component = Pr;
j.Fragment = wv;
j.Profiler = $v;
j.PureComponent = Va;
j.StrictMode = bv;
j.Suspense = Sv;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iv;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Xf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Ka.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) Gf.call(t, a) && !Zf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Lo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: kv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xv, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Jf;
j.createFactory = function (e) {
  var t = Jf.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Ev, render: e };
};
j.isValidElement = Qa;
j.lazy = function (e) {
  return { $$typeof: Tv, _payload: { _status: -1, _result: e }, _init: Lv };
};
j.memo = function (e, t) {
  return { $$typeof: Cv, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
j.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
j.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
j.useContext = function (e) {
  return Me.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
j.useId = function () {
  return Me.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return Me.current.useRef(e);
};
j.useState = function (e) {
  return Me.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return Me.current.useTransition();
};
j.version = '18.2.0';
Kf.exports = j;
var _t = Kf.exports;
const b = _o(_t);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ov = _t,
  Av = Symbol.for('react.element'),
  Mv = Symbol.for('react.fragment'),
  Nv = Object.prototype.hasOwnProperty,
  Dv = Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ep(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Nv.call(t, r) && !zv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Av, type: e, key: i, ref: s, props: o, _owner: Dv.current };
}
cs.Fragment = Mv;
cs.jsx = ep;
cs.jsxs = ep;
Wf.exports = cs;
var tp = Wf.exports;
const ke = tp.jsx,
  lo = tp.jsxs;
var np = { exports: {} },
  Je = {},
  rp = { exports: {} },
  op = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, S) {
    var k = R.length;
    R.push(S);
    e: for (; 0 < k; ) {
      var M = (k - 1) >>> 1,
        O = R[M];
      if (0 < o(O, S)) (R[M] = S), (R[k] = O), (k = M);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var S = R[0],
      k = R.pop();
    if (k !== S) {
      R[0] = k;
      e: for (var M = 0, O = R.length, B = O >>> 1; M < B; ) {
        var X = 2 * (M + 1) - 1,
          U = R[X],
          se = X + 1,
          de = R[se];
        if (0 > o(U, k))
          se < O && 0 > o(de, U) ? ((R[M] = de), (R[se] = k), (M = se)) : ((R[M] = U), (R[X] = k), (M = X));
        else if (se < O && 0 > o(de, k)) (R[M] = de), (R[se] = k), (M = se);
        else break e;
      }
    }
    return S;
  }
  function o(R, S) {
    var k = R.sortIndex - S.sortIndex;
    return k !== 0 ? k : R.id - S.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    $ = !1,
    A = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var S = n(c); S !== null; ) {
      if (S.callback === null) r(c);
      else if (S.startTime <= R) r(c), (S.sortIndex = S.expirationTime), t(a, S);
      else break;
      S = n(c);
    }
  }
  function w(R) {
    if ((($ = !1), m(R), !y))
      if (n(a) !== null) (y = !0), K(T);
      else {
        var S = n(c);
        S !== null && ie(w, S.startTime - R);
      }
  }
  function T(R, S) {
    (y = !1), $ && (($ = !1), h(C), (C = -1)), (g = !0);
    var k = f;
    try {
      for (m(S), d = n(a); d !== null && (!(d.expirationTime > S) || (R && !L())); ) {
        var M = d.callback;
        if (typeof M == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var O = M(d.expirationTime <= S);
          (S = e.unstable_now()), typeof O == 'function' ? (d.callback = O) : d === n(a) && r(a), m(S);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var B = !0;
      else {
        var X = n(c);
        X !== null && ie(w, X.startTime - S), (B = !1);
      }
      return B;
    } finally {
      (d = null), (f = k), (g = !1);
    }
  }
  var P = !1,
    x = null,
    C = -1,
    z = 5,
    D = -1;
  function L() {
    return !(e.unstable_now() - D < z);
  }
  function ce() {
    if (x !== null) {
      var R = e.unstable_now();
      D = R;
      var S = !0;
      try {
        S = x(!0, R);
      } finally {
        S ? Te() : ((P = !1), (x = null));
      }
    } else P = !1;
  }
  var Te;
  if (typeof p == 'function')
    Te = function () {
      p(ce);
    };
  else if (typeof MessageChannel < 'u') {
    var ue = new MessageChannel(),
      re = ue.port2;
    (ue.port1.onmessage = ce),
      (Te = function () {
        re.postMessage(null);
      });
  } else
    Te = function () {
      A(ce, 0);
    };
  function K(R) {
    (x = R), P || ((P = !0), Te());
  }
  function ie(R, S) {
    C = A(function () {
      R(e.unstable_now());
    }, S);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), K(T));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (z = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var S = 3;
          break;
        default:
          S = f;
      }
      var k = f;
      f = S;
      try {
        return R();
      } finally {
        f = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, S) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var k = f;
      f = R;
      try {
        return S();
      } finally {
        f = k;
      }
    }),
    (e.unstable_scheduleCallback = function (R, S, k) {
      var M = e.unstable_now();
      switch (
        (typeof k == 'object' && k !== null
          ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? M + k : M))
          : (k = M),
        R)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = k + O),
        (R = { id: u++, callback: S, priorityLevel: R, startTime: k, expirationTime: O, sortIndex: -1 }),
        k > M
          ? ((R.sortIndex = k), t(c, R), n(a) === null && R === n(c) && ($ ? (h(C), (C = -1)) : ($ = !0), ie(w, k - M)))
          : ((R.sortIndex = O), t(a, R), y || g || ((y = !0), K(T))),
        R
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (R) {
      var S = f;
      return function () {
        var k = f;
        f = S;
        try {
          return R.apply(this, arguments);
        } finally {
          f = k;
        }
      };
    });
})(op);
rp.exports = op;
var Bv = rp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = _t,
  Ge = Bv;
function E(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var sp = new Set(),
  ao = {};
function Hn(e, t) {
  br(e, t), br(e + 'Capture', t);
}
function br(e, t) {
  for (ao[e] = t, e = 0; e < t.length; e++) sp.add(t[e]);
}
var Vt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Bl = Object.prototype.hasOwnProperty,
  Hv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cu = {},
  Tu = {};
function jv(e) {
  return Bl.call(Tu, e) ? !0 : Bl.call(Cu, e) ? !1 : Hv.test(e) ? (Tu[e] = !0) : ((Cu[e] = !0), !1);
}
function Fv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Uv(e, t, n, r) {
  if (t === null || typeof t > 'u' || Fv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Se = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Se[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Se[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Se[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Se[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Se[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Se[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Se[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Se[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xa = /[\-:]([a-z])/g;
function qa(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Xa, qa);
    Se[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Xa, qa);
  Se[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Xa, qa);
  Se[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Se[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Ne('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Se[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ya(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Uv(t, n, o, r) && (n = null),
    r || o === null
      ? jv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vo = Symbol.for('react.element'),
  er = Symbol.for('react.portal'),
  tr = Symbol.for('react.fragment'),
  Ga = Symbol.for('react.strict_mode'),
  Hl = Symbol.for('react.profiler'),
  lp = Symbol.for('react.provider'),
  ap = Symbol.for('react.context'),
  Za = Symbol.for('react.forward_ref'),
  jl = Symbol.for('react.suspense'),
  Fl = Symbol.for('react.suspense_list'),
  Ja = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  cp = Symbol.for('react.offscreen'),
  Pu = Symbol.iterator;
function Nr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pu && e[Pu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ne = Object.assign,
  el;
function Wr(e) {
  if (el === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      el = (t && t[1]) || '';
    }
  return (
    `
` +
    el +
    e
  );
}
var tl = !1;
function nl(e, t) {
  if (!e || tl) return '';
  tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ');
                return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a;
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (tl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Wr(e) : '';
}
function Vv(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr('Lazy');
    case 13:
      return Wr('Suspense');
    case 19:
      return Wr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = nl(e.type, !1)), e;
    case 11:
      return (e = nl(e.type.render, !1)), e;
    case 1:
      return (e = nl(e.type, !0)), e;
    default:
      return '';
  }
}
function Ul(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case tr:
      return 'Fragment';
    case er:
      return 'Portal';
    case Hl:
      return 'Profiler';
    case Ga:
      return 'StrictMode';
    case jl:
      return 'Suspense';
    case Fl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ap:
        return (e.displayName || 'Context') + '.Consumer';
      case lp:
        return (e._context.displayName || 'Context') + '.Provider';
      case Za:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ja:
        return (t = e.displayName || null), t !== null ? t : Ul(e.type) || 'Memo';
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Ul(e(t));
        } catch (n) {}
    }
  return null;
}
function Wv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ul(t);
    case 8:
      return t === Ga ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function up(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Kv(e) {
  var t = up(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Wo(e) {
  e._valueTracker || (e._valueTracker = Kv(e));
}
function dp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = up(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Ci(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function Vl(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Ru(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function fp(e, t) {
  (t = t.checked), t != null && Ya(e, 'checked', t, !1);
}
function Wl(e, t) {
  fp(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? Kl(e, t.type, n) : t.hasOwnProperty('defaultValue') && Kl(e, t.type, hn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _u(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Kl(e, t, n) {
  (t !== 'number' || Ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Kr = Array.isArray;
function fr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + hn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Kr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function pp(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function hp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? hp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ko,
  mp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Ko = Ko || document.createElement('div'),
          Ko.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ko.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function co(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Yr).forEach(function (e) {
  Qv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function gp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function vp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = gp(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Xv = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ql(e, t) {
  if (t) {
    if (Xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function Yl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Gl = null;
function ec(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zl = null,
  pr = null,
  hr = null;
function Ou(e) {
  if ((e = Ao(e))) {
    if (typeof Zl != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = hs(t)), Zl(e.stateNode, e.type, t));
  }
}
function yp(e) {
  pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
}
function wp() {
  if (pr) {
    var e = pr,
      t = hr;
    if (((hr = pr = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
  }
}
function bp(e, t) {
  return e(t);
}
function $p() {}
var rl = !1;
function xp(e, t, n) {
  if (rl) return e(t, n);
  rl = !0;
  try {
    return bp(e, t, n);
  } finally {
    (rl = !1), (pr !== null || hr !== null) && ($p(), wp());
  }
}
function uo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
  return n;
}
var Jl = !1;
if (Vt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, 'passive', {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener('test', Dr, Dr),
      window.removeEventListener('test', Dr, Dr);
  } catch (e) {
    Jl = !1;
  }
function qv(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Gr = !1,
  Ti = null,
  Pi = !1,
  ea = null,
  Yv = {
    onError: function (e) {
      (Gr = !0), (Ti = e);
    },
  };
function Gv(e, t, n, r, o, i, s, l, a) {
  (Gr = !1), (Ti = null), qv.apply(Yv, arguments);
}
function Zv(e, t, n, r, o, i, s, l, a) {
  if ((Gv.apply(this, arguments), Gr)) {
    if (Gr) {
      var c = Ti;
      (Gr = !1), (Ti = null);
    } else throw Error(E(198));
    Pi || ((Pi = !0), (ea = c));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (jn(e) !== e) throw Error(E(188));
}
function Jv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Au(o), e;
        if (i === r) return Au(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ep(e) {
  return (e = Jv(e)), e !== null ? Sp(e) : null;
}
function Sp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cp = Ge.unstable_scheduleCallback,
  Mu = Ge.unstable_cancelCallback,
  ey = Ge.unstable_shouldYield,
  ty = Ge.unstable_requestPaint,
  ae = Ge.unstable_now,
  ny = Ge.unstable_getCurrentPriorityLevel,
  tc = Ge.unstable_ImmediatePriority,
  Tp = Ge.unstable_UserBlockingPriority,
  Ri = Ge.unstable_NormalPriority,
  ry = Ge.unstable_LowPriority,
  Pp = Ge.unstable_IdlePriority,
  us = null,
  Lt = null;
function oy(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == 'function')
    try {
      Lt.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
var $t = Math.clz32 ? Math.clz32 : ly,
  iy = Math.log,
  sy = Math.LN2;
function ly(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((iy(e) / sy) | 0)) | 0;
}
var Qo = 64,
  Xo = 4194304;
function Qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Qr(l)) : ((i &= s), i !== 0 && (r = Qr(i)));
  } else (s = n & ~o), s !== 0 ? (r = Qr(s)) : i !== 0 && (r = Qr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ay(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - $t(i),
      l = 1 << s,
      a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = ay(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l);
  }
}
function ta(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rp() {
  var e = Qo;
  return (Qo <<= 1), !(Qo & 4194240) && (Qo = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Io(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function uy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function nc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var V = 0;
function _p(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lp,
  rc,
  Ip,
  Op,
  Ap,
  na = !1,
  qo = [],
  sn = null,
  ln = null,
  an = null,
  fo = new Map(),
  po = new Map(),
  en = [],
  dy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Nu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      sn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ln = null;
      break;
    case 'mouseover':
    case 'mouseout':
      an = null;
      break;
    case 'pointerover':
    case 'pointerout':
      fo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      po.delete(t.pointerId);
  }
}
function zr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = Ao(t)), t !== null && rc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function fy(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (sn = zr(sn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (ln = zr(ln, e, t, n, r, o)), !0;
    case 'mouseover':
      return (an = zr(an, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return fo.set(i, zr(fo.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), po.set(i, zr(po.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Mp(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kp(n)), t !== null)) {
          (e.blockedOn = t),
            Ap(e.priority, function () {
              Ip(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gl = r), n.target.dispatchEvent(r), (Gl = null);
    } else return (t = Ao(n)), t !== null && rc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Du(e, t, n) {
  hi(e) && n.delete(t);
}
function py() {
  (na = !1),
    sn !== null && hi(sn) && (sn = null),
    ln !== null && hi(ln) && (ln = null),
    an !== null && hi(an) && (an = null),
    fo.forEach(Du),
    po.forEach(Du);
}
function Br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), na || ((na = !0), Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, py)));
}
function ho(e) {
  function t(o) {
    return Br(o, e);
  }
  if (0 < qo.length) {
    Br(qo[0], e);
    for (var n = 1; n < qo.length; n++) {
      var r = qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && Br(sn, e), ln !== null && Br(ln, e), an !== null && Br(an, e), fo.forEach(t), po.forEach(t), n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); ) Mp(n), n.blockedOn === null && en.shift();
}
var mr = Xt.ReactCurrentBatchConfig,
  Li = !0;
function hy(e, t, n, r) {
  var o = V,
    i = mr.transition;
  mr.transition = null;
  try {
    (V = 1), oc(e, t, n, r);
  } finally {
    (V = o), (mr.transition = i);
  }
}
function my(e, t, n, r) {
  var o = V,
    i = mr.transition;
  mr.transition = null;
  try {
    (V = 4), oc(e, t, n, r);
  } finally {
    (V = o), (mr.transition = i);
  }
}
function oc(e, t, n, r) {
  if (Li) {
    var o = ra(e, t, n, r);
    if (o === null) hl(e, t, r, Ii, n), Nu(e, r);
    else if (fy(o, e, t, n, r)) r.stopPropagation();
    else if ((Nu(e, r), t & 4 && -1 < dy.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ao(o);
        if ((i !== null && Lp(i), (i = ra(e, t, n, r)), i === null && hl(e, t, r, Ii, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hl(e, t, r, null, n);
  }
}
var Ii = null;
function ra(e, t, n, r) {
  if (((Ii = null), (e = ec(r)), (e = Sn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ii = e), null;
}
function Np(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ny()) {
        case tc:
          return 1;
        case Tp:
          return 4;
        case Ri:
        case ry:
          return 16;
        case Pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  ic = null,
  mi = null;
function Dp() {
  if (mi) return mi;
  var e,
    t = ic,
    n = t.length,
    r,
    o = 'value' in nn ? nn.value : nn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (mi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function gi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yo() {
  return !0;
}
function zu() {
  return !1;
}
function et(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Yo : zu),
      (this.isPropagationStopped = zu),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Yo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yo));
      },
      persist: function () {},
      isPersistent: Yo,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sc = et(Rr),
  Oo = ne({}, Rr, { view: 0, detail: 0 }),
  gy = et(Oo),
  il,
  sl,
  Hr,
  ds = ne({}, Oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Hr &&
            (Hr && e.type === 'mousemove'
              ? ((il = e.screenX - Hr.screenX), (sl = e.screenY - Hr.screenY))
              : (sl = il = 0),
            (Hr = e)),
          il);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : sl;
    },
  }),
  Bu = et(ds),
  vy = ne({}, ds, { dataTransfer: 0 }),
  yy = et(vy),
  wy = ne({}, Oo, { relatedTarget: 0 }),
  ll = et(wy),
  by = ne({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $y = et(by),
  xy = ne({}, Rr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ky = et(xy),
  Ey = ne({}, Rr, { data: 0 }),
  Hu = et(Ey),
  Sy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Cy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ty = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Py(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ty[e]) ? !!t[e] : !1;
}
function lc() {
  return Py;
}
var Ry = ne({}, Oo, {
    key: function (e) {
      if (e.key) {
        var t = Sy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = gi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Cy[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lc,
    charCode: function (e) {
      return e.type === 'keypress' ? gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? gi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  _y = et(Ry),
  Ly = ne({}, ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ju = et(Ly),
  Iy = ne({}, Oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc,
  }),
  Oy = et(Iy),
  Ay = ne({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  My = et(Ay),
  Ny = ne({}, ds, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Dy = et(Ny),
  zy = [9, 13, 27, 32],
  ac = Vt && 'CompositionEvent' in window,
  Zr = null;
Vt && 'documentMode' in document && (Zr = document.documentMode);
var By = Vt && 'TextEvent' in window && !Zr,
  zp = Vt && (!ac || (Zr && 8 < Zr && 11 >= Zr)),
  Fu = String.fromCharCode(32),
  Uu = !1;
function Bp(e, t) {
  switch (e) {
    case 'keyup':
      return zy.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Hp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var nr = !1;
function Hy(e, t) {
  switch (e) {
    case 'compositionend':
      return Hp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Uu = !0), Fu);
    case 'textInput':
      return (e = t.data), e === Fu && Uu ? null : e;
    default:
      return null;
  }
}
function jy(e, t) {
  if (nr) return e === 'compositionend' || (!ac && Bp(e, t)) ? ((e = Dp()), (mi = ic = nn = null), (nr = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return zp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Fy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Fy[e.type] : t === 'textarea';
}
function jp(e, t, n, r) {
  yp(r),
    (t = Oi(t, 'onChange')),
    0 < t.length && ((n = new sc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Jr = null,
  mo = null;
function Uy(e) {
  Zp(e, 0);
}
function fs(e) {
  var t = ir(e);
  if (dp(t)) return e;
}
function Vy(e, t) {
  if (e === 'change') return t;
}
var Fp = !1;
if (Vt) {
  var al;
  if (Vt) {
    var cl = 'oninput' in document;
    if (!cl) {
      var Wu = document.createElement('div');
      Wu.setAttribute('oninput', 'return;'), (cl = typeof Wu.oninput == 'function');
    }
    al = cl;
  } else al = !1;
  Fp = al && (!document.documentMode || 9 < document.documentMode);
}
function Ku() {
  Jr && (Jr.detachEvent('onpropertychange', Up), (mo = Jr = null));
}
function Up(e) {
  if (e.propertyName === 'value' && fs(mo)) {
    var t = [];
    jp(t, mo, e, ec(e)), xp(Uy, t);
  }
}
function Wy(e, t, n) {
  e === 'focusin' ? (Ku(), (Jr = t), (mo = n), Jr.attachEvent('onpropertychange', Up)) : e === 'focusout' && Ku();
}
function Ky(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return fs(mo);
}
function Qy(e, t) {
  if (e === 'click') return fs(t);
}
function Xy(e, t) {
  if (e === 'input' || e === 'change') return fs(t);
}
function qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == 'function' ? Object.is : qy;
function go(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bl.call(t, o) || !St(e[o], t[o])) return !1;
  }
  return !0;
}
function Qu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Qu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qu(n);
  }
}
function Vp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wp() {
  for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ci(e.document);
  }
  return t;
}
function cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Yy(e) {
  var t = Wp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Vp(n.ownerDocument.documentElement, n)) {
    if (r !== null && cc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xu(n, i));
        var s = Xu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Gy = Vt && 'documentMode' in document && 11 >= document.documentMode,
  rr = null,
  oa = null,
  eo = null,
  ia = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ia ||
    rr == null ||
    rr !== Ci(r) ||
    ((r = rr),
    'selectionStart' in r && cc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (eo && go(eo, r)) ||
      ((eo = r),
      (r = Oi(oa, 'onSelect')),
      0 < r.length &&
        ((t = new sc('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = rr))));
}
function Go(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var or = {
    animationend: Go('Animation', 'AnimationEnd'),
    animationiteration: Go('Animation', 'AnimationIteration'),
    animationstart: Go('Animation', 'AnimationStart'),
    transitionend: Go('Transition', 'TransitionEnd'),
  },
  ul = {},
  Kp = {};
Vt &&
  ((Kp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation),
  'TransitionEvent' in window || delete or.transitionend.transition);
function ps(e) {
  if (ul[e]) return ul[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kp) return (ul[e] = t[n]);
  return e;
}
var Qp = ps('animationend'),
  Xp = ps('animationiteration'),
  qp = ps('animationstart'),
  Yp = ps('transitionend'),
  Gp = new Map(),
  Yu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yn(e, t) {
  Gp.set(e, t), Hn(t, [e]);
}
for (var dl = 0; dl < Yu.length; dl++) {
  var fl = Yu[dl],
    Zy = fl.toLowerCase(),
    Jy = fl[0].toUpperCase() + fl.slice(1);
  yn(Zy, 'on' + Jy);
}
yn(Qp, 'onAnimationEnd');
yn(Xp, 'onAnimationIteration');
yn(qp, 'onAnimationStart');
yn('dblclick', 'onDoubleClick');
yn('focusin', 'onFocus');
yn('focusout', 'onBlur');
yn(Yp, 'onTransitionEnd');
br('onMouseEnter', ['mouseout', 'mouseover']);
br('onMouseLeave', ['mouseout', 'mouseover']);
br('onPointerEnter', ['pointerout', 'pointerover']);
br('onPointerLeave', ['pointerout', 'pointerover']);
Hn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Hn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Hn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Hn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Hn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Hn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Xr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  e0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Xr));
function Gu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Zv(r, t, void 0, e), (e.currentTarget = null);
}
function Zp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Gu(o, l, c), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (c = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          Gu(o, l, c), (i = a);
        }
    }
  }
  if (Pi) throw ((e = ea), (Pi = !1), (ea = null), e);
}
function Y(e, t) {
  var n = t[ua];
  n === void 0 && (n = t[ua] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Jp(t, e, 2, !1), n.add(r));
}
function pl(e, t, n) {
  var r = 0;
  t && (r |= 4), Jp(n, e, r, t);
}
var Zo = '_reactListening' + Math.random().toString(36).slice(2);
function vo(e) {
  if (!e[Zo]) {
    (e[Zo] = !0),
      sp.forEach(function (n) {
        n !== 'selectionchange' && (e0.has(n) || pl(n, !1, e), pl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || ((t[Zo] = !0), pl('selectionchange', !1, t));
  }
}
function Jp(e, t, n, r) {
  switch (Np(t)) {
    case 1:
      var o = hy;
      break;
    case 4:
      o = my;
      break;
    default:
      o = oc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Jl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Sn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  xp(function () {
    var c = i,
      u = ec(n),
      d = [];
    e: {
      var f = Gp.get(e);
      if (f !== void 0) {
        var g = sc,
          y = e;
        switch (e) {
          case 'keypress':
            if (gi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = _y;
            break;
          case 'focusin':
            (y = 'focus'), (g = ll);
            break;
          case 'focusout':
            (y = 'blur'), (g = ll);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = ll;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Bu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = yy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Oy;
            break;
          case Qp:
          case Xp:
          case qp:
            g = $y;
            break;
          case Yp:
            g = My;
            break;
          case 'scroll':
            g = gy;
            break;
          case 'wheel':
            g = Dy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = ky;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ju;
        }
        var $ = (t & 4) !== 0,
          A = !$ && e === 'scroll',
          h = $ ? (f !== null ? f + 'Capture' : null) : f;
        $ = [];
        for (var p = c, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 && w !== null && ((m = w), h !== null && ((w = uo(p, h)), w != null && $.push(yo(p, w, m)))),
            A)
          )
            break;
          p = p.return;
        }
        0 < $.length && ((f = new g(f, y, null, n, u)), d.push({ event: f, listeners: $ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f && n !== Gl && (y = n.relatedTarget || n.fromElement) && (Sn(y) || y[Wt]))
        )
          break e;
        if (
          (g || f) &&
          ((f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = c),
              (y = y ? Sn(y) : null),
              y !== null && ((A = jn(y)), y !== A || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = c)),
          g !== y)
        ) {
          if (
            (($ = Bu),
            (w = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              (($ = ju), (w = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
            (A = g == null ? f : ir(g)),
            (m = y == null ? f : ir(y)),
            (f = new $(w, p + 'leave', g, n, u)),
            (f.target = A),
            (f.relatedTarget = m),
            (w = null),
            Sn(u) === c && (($ = new $(h, p + 'enter', y, n, u)), ($.target = m), ($.relatedTarget = A), (w = $)),
            (A = w),
            g && y)
          )
            t: {
              for ($ = g, h = y, p = 0, m = $; m; m = Kn(m)) p++;
              for (m = 0, w = h; w; w = Kn(w)) m++;
              for (; 0 < p - m; ) ($ = Kn($)), p--;
              for (; 0 < m - p; ) (h = Kn(h)), m--;
              for (; p--; ) {
                if ($ === h || (h !== null && $ === h.alternate)) break t;
                ($ = Kn($)), (h = Kn(h));
              }
              $ = null;
            }
          else $ = null;
          g !== null && Zu(d, f, g, $, !1), y !== null && A !== null && Zu(d, A, y, $, !0);
        }
      }
      e: {
        if (
          ((f = c ? ir(c) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var T = Vy;
        else if (Vu(f))
          if (Fp) T = Xy;
          else {
            T = Ky;
            var P = Wy;
          }
        else
          (g = f.nodeName) && g.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (T = Qy);
        if (T && (T = T(e, c))) {
          jp(d, T, n, u);
          break e;
        }
        P && P(e, f, c),
          e === 'focusout' && (P = f._wrapperState) && P.controlled && f.type === 'number' && Kl(f, 'number', f.value);
      }
      switch (((P = c ? ir(c) : window), e)) {
        case 'focusin':
          (Vu(P) || P.contentEditable === 'true') && ((rr = P), (oa = c), (eo = null));
          break;
        case 'focusout':
          eo = oa = rr = null;
          break;
        case 'mousedown':
          ia = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ia = !1), qu(d, n, u);
          break;
        case 'selectionchange':
          if (Gy) break;
        case 'keydown':
        case 'keyup':
          qu(d, n, u);
      }
      var x;
      if (ac)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        nr ? Bp(e, n) && (C = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        (zp &&
          n.locale !== 'ko' &&
          (nr || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && nr && (x = Dp())
            : ((nn = u), (ic = 'value' in nn ? nn.value : nn.textContent), (nr = !0))),
        (P = Oi(c, C)),
        0 < P.length &&
          ((C = new Hu(C, e, null, n, u)),
          d.push({ event: C, listeners: P }),
          x ? (C.data = x) : ((x = Hp(n)), x !== null && (C.data = x)))),
        (x = By ? Hy(e, n) : jy(e, n)) &&
          ((c = Oi(c, 'onBeforeInput')),
          0 < c.length &&
            ((u = new Hu('onBeforeInput', 'beforeinput', null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = x)));
    }
    Zp(d, t);
  });
}
function yo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = uo(e, n)), i != null && r.unshift(yo(e, i, o)), (i = uo(e, t)), i != null && r.push(yo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zu(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = uo(n, i)), a != null && s.unshift(yo(n, a, l)))
        : o || ((a = uo(n, i)), a != null && s.push(yo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var t0 = /\r\n?/g,
  n0 = /\u0000|\uFFFD/g;
function Ju(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      t0,
      `
`
    )
    .replace(n0, '');
}
function Jo(e, t, n) {
  if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(E(425));
}
function Ai() {}
var sa = null,
  la = null;
function aa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ca = typeof setTimeout == 'function' ? setTimeout : void 0,
  r0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ed = typeof Promise == 'function' ? Promise : void 0,
  o0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ed < 'u'
      ? function (e) {
          return ed.resolve(null).then(e).catch(i0);
        }
      : ca;
function i0(e) {
  setTimeout(function () {
    throw e;
  });
}
function ml(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), ho(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  ho(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function td(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _r = Math.random().toString(36).slice(2),
  Rt = '__reactFiber$' + _r,
  wo = '__reactProps$' + _r,
  Wt = '__reactContainer$' + _r,
  ua = '__reactEvents$' + _r,
  s0 = '__reactListeners$' + _r,
  l0 = '__reactHandles$' + _r;
function Sn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[Rt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = td(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = td(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ao(e) {
  return (e = e[Rt] || e[Wt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function hs(e) {
  return e[wo] || null;
}
var da = [],
  sr = -1;
function wn(e) {
  return { current: e };
}
function G(e) {
  0 > sr || ((e.current = da[sr]), (da[sr] = null), sr--);
}
function q(e, t) {
  sr++, (da[sr] = e.current), (e.current = t);
}
var mn = {},
  Le = wn(mn),
  je = wn(!1),
  Ln = mn;
function $r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Mi() {
  G(je), G(Le);
}
function nd(e, t, n) {
  if (Le.current !== mn) throw Error(E(168));
  q(Le, t), q(je, n);
}
function eh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Wv(e) || 'Unknown', o));
  return ne({}, n, r);
}
function Ni(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Ln = Le.current),
    q(Le, e),
    q(je, je.current),
    !0
  );
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? ((e = eh(e, t, Ln)), (r.__reactInternalMemoizedMergedChildContext = e), G(je), G(Le), q(Le, e)) : G(je), q(je, n);
}
var Bt = null,
  ms = !1,
  gl = !1;
function th(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function a0(e) {
  (ms = !0), th(e);
}
function bn() {
  if (!gl && Bt !== null) {
    gl = !0;
    var e = 0,
      t = V;
    try {
      var n = Bt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (ms = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), Cp(tc, bn), o);
    } finally {
      (V = t), (gl = !1);
    }
  }
  return null;
}
var lr = [],
  ar = 0,
  Di = null,
  zi = 0,
  st = [],
  lt = 0,
  In = null,
  jt = 1,
  Ft = '';
function kn(e, t) {
  (lr[ar++] = zi), (lr[ar++] = Di), (Di = e), (zi = t);
}
function nh(e, t, n) {
  (st[lt++] = jt), (st[lt++] = Ft), (st[lt++] = In), (In = e);
  var r = jt;
  e = Ft;
  var o = 32 - $t(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (Ft = i + e);
  } else (jt = (1 << i) | (n << o) | r), (Ft = e);
}
function uc(e) {
  e.return !== null && (kn(e, 1), nh(e, 1, 0));
}
function dc(e) {
  for (; e === Di; ) (Di = lr[--ar]), (lr[ar] = null), (zi = lr[--ar]), (lr[ar] = null);
  for (; e === In; )
    (In = st[--lt]), (st[lt] = null), (Ft = st[--lt]), (st[lt] = null), (jt = st[--lt]), (st[lt] = null);
}
var Ye = null,
  qe = null,
  J = !1,
  yt = null;
function rh(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function od(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (qe = cn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = In !== null ? { id: jt, overflow: Ft } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pa(e) {
  if (J) {
    var t = qe;
    if (t) {
      var n = t;
      if (!od(e, t)) {
        if (fa(e)) throw Error(E(418));
        t = cn(n.nextSibling);
        var r = Ye;
        t && od(e, t) ? rh(r, n) : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ye = e));
      }
    } else {
      if (fa(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Ye = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function ei(e) {
  if (e !== Ye) return !1;
  if (!J) return id(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !aa(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (fa(e)) throw (oh(), Error(E(418)));
    for (; t; ) rh(e, t), (t = cn(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              qe = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ye ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function oh() {
  for (var e = qe; e; ) e = cn(e.nextSibling);
}
function xr() {
  (qe = Ye = null), (J = !1);
}
function fc(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var c0 = Xt.ReactCurrentBatchConfig;
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bi = wn(null),
  Hi = null,
  cr = null,
  pc = null;
function hc() {
  pc = cr = Hi = null;
}
function mc(e) {
  var t = Bi.current;
  G(Bi), (e._currentValue = t);
}
function ha(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gr(e, t) {
  (Hi = e),
    (pc = cr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (pc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (Hi === null) throw Error(E(308));
      (cr = e), (Hi.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var Cn = null;
function gc(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function ih(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), gc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Kt(e, r);
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function vc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Kt(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), gc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function vi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
  }
}
function sd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function ji(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      c = a.next;
    (a.next = null), s === null ? (i = c) : (s.next = c), (s = a);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (l = u.lastBaseUpdate),
      l !== s && (l === null ? (u.firstBaseUpdate = c) : (l.next = c), (u.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (u = c = a = null), (l = i);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next = { eventTime: g, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var y = e,
            $ = l;
          switch (((f = t), (g = n), $.tag)) {
            case 1:
              if (((y = $.payload), typeof y == 'function')) {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = $.payload), (f = typeof y == 'function' ? y.call(g, d, f) : y), f == null)) break e;
              d = ne({}, d, f);
              break e;
            case 2:
              Jt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [l]) : f.push(l));
      } else
        (g = { eventTime: g, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          u === null ? ((c = u = g), (a = d)) : (u = u.next = g),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l), (l = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (An |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function ld(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(E(191, o));
        o.call(r);
      }
    }
}
var lh = new ip.Component().refs;
function ma(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = fn(e),
      i = Ut(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = un(e, i, o)), t !== null && (xt(t, e, o, r), vi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = fn(e),
      i = Ut(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (xt(t, e, o, r), vi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = fn(e),
      o = Ut(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = un(e, o, r)), t !== null && (xt(t, e, r, n), vi(t, e, r));
  },
};
function ad(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !go(n, r) || !go(o, i)
      : !0
  );
}
function ah(e, t, n) {
  var r = !1,
    o = mn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = dt(i))
      : ((o = Fe(t) ? Ln : Le.current), (r = t.contextTypes), (i = (r = r != null) ? $r(e, o) : mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function cd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gs.enqueueReplaceState(t, t.state, null);
}
function ga(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = lh), vc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = dt(i)) : ((i = Fe(t) ? Ln : Le.current), (o.context = $r(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ma(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && gs.enqueueReplaceState(o, o.state, null),
      ji(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function jr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            l === lh && (l = o.refs = {}), s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function ti(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(E(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function ud(e) {
  var t = e._init;
  return t(e._payload);
}
function ch(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = pn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate), m !== null ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m) : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, w) {
    return p === null || p.tag !== 6 ? ((p = kl(m, h.mode, w)), (p.return = h), p) : ((p = o(p, m)), (p.return = h), p);
  }
  function a(h, p, m, w) {
    var T = m.type;
    return T === tr
      ? u(h, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === T || (typeof T == 'object' && T !== null && T.$$typeof === Zt && ud(T) === p.type))
      ? ((w = o(p, m.props)), (w.ref = jr(h, p, m)), (w.return = h), w)
      : ((w = ki(m.type, m.key, m.props, null, h.mode, w)), (w.ref = jr(h, p, m)), (w.return = h), w);
  }
  function c(h, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = El(m, h.mode, w)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function u(h, p, m, w, T) {
    return p === null || p.tag !== 7
      ? ((p = _n(m, h.mode, w, T)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = kl('' + p, h.mode, m)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Vo:
          return (m = ki(p.type, p.key, p.props, null, h.mode, m)), (m.ref = jr(h, null, p)), (m.return = h), m;
        case er:
          return (p = El(p, h.mode, m)), (p.return = h), p;
        case Zt:
          var w = p._init;
          return d(h, w(p._payload), m);
      }
      if (Kr(p) || Nr(p)) return (p = _n(p, h.mode, m, null)), (p.return = h), p;
      ti(h, p);
    }
    return null;
  }
  function f(h, p, m, w) {
    var T = p !== null ? p.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number') return T !== null ? null : l(h, p, '' + m, w);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Vo:
          return m.key === T ? a(h, p, m, w) : null;
        case er:
          return m.key === T ? c(h, p, m, w) : null;
        case Zt:
          return (T = m._init), f(h, p, T(m._payload), w);
      }
      if (Kr(m) || Nr(m)) return T !== null ? null : u(h, p, m, w, null);
      ti(h, m);
    }
    return null;
  }
  function g(h, p, m, w, T) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (h = h.get(m) || null), l(p, h, '' + w, T);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Vo:
          return (h = h.get(w.key === null ? m : w.key) || null), a(p, h, w, T);
        case er:
          return (h = h.get(w.key === null ? m : w.key) || null), c(p, h, w, T);
        case Zt:
          var P = w._init;
          return g(h, p, m, P(w._payload), T);
      }
      if (Kr(w) || Nr(w)) return (h = h.get(m) || null), u(p, h, w, T, null);
      ti(p, w);
    }
    return null;
  }
  function y(h, p, m, w) {
    for (var T = null, P = null, x = p, C = (p = 0), z = null; x !== null && C < m.length; C++) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var D = f(h, x, m[C], w);
      if (D === null) {
        x === null && (x = z);
        break;
      }
      e && x && D.alternate === null && t(h, x),
        (p = i(D, p, C)),
        P === null ? (T = D) : (P.sibling = D),
        (P = D),
        (x = z);
    }
    if (C === m.length) return n(h, x), J && kn(h, C), T;
    if (x === null) {
      for (; C < m.length; C++)
        (x = d(h, m[C], w)), x !== null && ((p = i(x, p, C)), P === null ? (T = x) : (P.sibling = x), (P = x));
      return J && kn(h, C), T;
    }
    for (x = r(h, x); C < m.length; C++)
      (z = g(x, h, C, m[C], w)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? C : z.key),
          (p = i(z, p, C)),
          P === null ? (T = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        x.forEach(function (L) {
          return t(h, L);
        }),
      J && kn(h, C),
      T
    );
  }
  function $(h, p, m, w) {
    var T = Nr(m);
    if (typeof T != 'function') throw Error(E(150));
    if (((m = T.call(m)), m == null)) throw Error(E(151));
    for (var P = (T = null), x = p, C = (p = 0), z = null, D = m.next(); x !== null && !D.done; C++, D = m.next()) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var L = f(h, x, D.value, w);
      if (L === null) {
        x === null && (x = z);
        break;
      }
      e && x && L.alternate === null && t(h, x),
        (p = i(L, p, C)),
        P === null ? (T = L) : (P.sibling = L),
        (P = L),
        (x = z);
    }
    if (D.done) return n(h, x), J && kn(h, C), T;
    if (x === null) {
      for (; !D.done; C++, D = m.next())
        (D = d(h, D.value, w)), D !== null && ((p = i(D, p, C)), P === null ? (T = D) : (P.sibling = D), (P = D));
      return J && kn(h, C), T;
    }
    for (x = r(h, x); !D.done; C++, D = m.next())
      (D = g(x, h, C, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && x.delete(D.key === null ? C : D.key),
          (p = i(D, p, C)),
          P === null ? (T = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        x.forEach(function (ce) {
          return t(h, ce);
        }),
      J && kn(h, C),
      T
    );
  }
  function A(h, p, m, w) {
    if (
      (typeof m == 'object' && m !== null && m.type === tr && m.key === null && (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Vo:
          e: {
            for (var T = m.key, P = p; P !== null; ) {
              if (P.key === T) {
                if (((T = m.type), T === tr)) {
                  if (P.tag === 7) {
                    n(h, P.sibling), (p = o(P, m.props.children)), (p.return = h), (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Zt && ud(T) === P.type)
                ) {
                  n(h, P.sibling), (p = o(P, m.props)), (p.ref = jr(h, P, m)), (p.return = h), (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === tr
              ? ((p = _n(m.props.children, h.mode, w, m.key)), (p.return = h), (h = p))
              : ((w = ki(m.type, m.key, m.props, null, h.mode, w)), (w.ref = jr(h, p, m)), (w.return = h), (h = w));
          }
          return s(h);
        case er:
          e: {
            for (P = m.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling), (p = o(p, m.children || [])), (p.return = h), (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = El(m, h.mode, w)), (p.return = h), (h = p);
          }
          return s(h);
        case Zt:
          return (P = m._init), A(h, p, P(m._payload), w);
      }
      if (Kr(m)) return y(h, p, m, w);
      if (Nr(m)) return $(h, p, m, w);
      ti(h, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = kl(m, h.mode, w)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return A;
}
var kr = ch(!0),
  uh = ch(!1),
  Mo = {},
  It = wn(Mo),
  bo = wn(Mo),
  $o = wn(Mo);
function Tn(e) {
  if (e === Mo) throw Error(E(174));
  return e;
}
function yc(e, t) {
  switch ((q($o, t), q(bo, e), q(It, Mo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Xl(t, e));
  }
  G(It), q(It, t);
}
function Er() {
  G(It), G(bo), G($o);
}
function dh(e) {
  Tn($o.current);
  var t = Tn(It.current),
    n = Xl(t, e.type);
  t !== n && (q(bo, e), q(It, n));
}
function wc(e) {
  bo.current === e && (G(It), G(bo));
}
var ee = wn(0);
function Fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vl = [];
function bc() {
  for (var e = 0; e < vl.length; e++) vl[e]._workInProgressVersionPrimary = null;
  vl.length = 0;
}
var yi = Xt.ReactCurrentDispatcher,
  yl = Xt.ReactCurrentBatchConfig,
  On = 0,
  te = null,
  me = null,
  ve = null,
  Ui = !1,
  to = !1,
  xo = 0,
  u0 = 0;
function Pe() {
  throw Error(E(321));
}
function $c(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function xc(e, t, n, r, o, i) {
  if (
    ((On = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yi.current = e === null || e.memoizedState === null ? h0 : m0),
    (e = n(r, o)),
    to)
  ) {
    i = 0;
    do {
      if (((to = !1), (xo = 0), 25 <= i)) throw Error(E(301));
      (i += 1), (ve = me = null), (t.updateQueue = null), (yi.current = g0), (e = n(r, o));
    } while (to);
  }
  if (((yi.current = Vi), (t = me !== null && me.next !== null), (On = 0), (ve = me = te = null), (Ui = !1), t))
    throw Error(E(300));
  return e;
}
function kc() {
  var e = xo !== 0;
  return (xo = 0), e;
}
function Tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? (te.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function ft() {
  if (me === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? te.memoizedState : ve.next;
  if (t !== null) (ve = t), (me = e);
  else {
    if (e === null) throw Error(E(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ve === null ? (te.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function ko(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function wl(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = me,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      c = i;
    do {
      var u = c.lane;
      if ((On & u) === u)
        a !== null &&
          (a = a.next =
            { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = { lane: u, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d), (te.lanes |= u), (An |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (s = r) : (a.next = l),
      St(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (An |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    St(i, t.memoizedState) || (Be = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fh() {}
function ph(e, t) {
  var n = te,
    r = ft(),
    o = t(),
    i = !St(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Be = !0)),
    (r = r.queue),
    Ec(gh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Eo(9, mh.bind(null, n, r, o, t), void 0, null), ye === null)) throw Error(E(349));
    On & 30 || hh(n, t, o);
  }
  return o;
}
function hh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vh(t) && yh(e);
}
function gh(e, t, n) {
  return n(function () {
    vh(t) && yh(e);
  });
}
function vh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch (r) {
    return !0;
  }
}
function yh(e) {
  var t = Kt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function dd(e) {
  var t = Tt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ko, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = p0.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Eo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wh() {
  return ft().memoizedState;
}
function wi(e, t, n, r) {
  var o = Tt();
  (te.flags |= e), (o.memoizedState = Eo(1 | t, n, void 0, r === void 0 ? null : r));
}
function vs(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (((i = s.destroy), r !== null && $c(r, s.deps))) {
      o.memoizedState = Eo(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = Eo(1 | t, n, i, r));
}
function fd(e, t) {
  return wi(8390656, 8, e, t);
}
function Ec(e, t) {
  return vs(2048, 8, e, t);
}
function bh(e, t) {
  return vs(4, 2, e, t);
}
function $h(e, t) {
  return vs(4, 4, e, t);
}
function xh(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), vs(4, 4, xh.bind(null, t, e), n);
}
function Sc() {}
function Eh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $c(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Sh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $c(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ch(e, t, n) {
  return On & 21
    ? (St(n, t) || ((n = Rp()), (te.lanes |= n), (An |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function d0(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yl.transition;
  yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (yl.transition = r);
  }
}
function Th() {
  return ft().memoizedState;
}
function f0(e, t, n) {
  var r = fn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ph(e))) Rh(t, n);
  else if (((n = ih(e, t, n, r)), n !== null)) {
    var o = Ae();
    xt(n, e, r, o), _h(n, t, r);
  }
}
function p0(e, t, n) {
  var r = fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ph(e)) Rh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), St(l, s))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), gc(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch (c) {
      } finally {
      }
    (n = ih(e, t, o, r)), n !== null && ((o = Ae()), xt(n, e, r, o), _h(n, t, r));
  }
}
function Ph(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Rh(e, t) {
  to = Ui = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function _h(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
  }
}
var Vi = {
    readContext: dt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  h0 = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: fd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), wi(4194308, 4, xh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = f0.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dd,
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = dd(!1),
        t = e[0];
      return (e = d0.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = Tt();
      if (J) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(E(349));
        On & 30 || hh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fd(gh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Eo(9, mh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = ye.identifierPrefix;
      if (J) {
        var n = Ft,
          r = jt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = xo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = u0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  m0 = {
    readContext: dt,
    useCallback: Eh,
    useContext: dt,
    useEffect: Ec,
    useImperativeHandle: kh,
    useInsertionEffect: bh,
    useLayoutEffect: $h,
    useMemo: Sh,
    useReducer: wl,
    useRef: wh,
    useState: function () {
      return wl(ko);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = ft();
      return Ch(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(ko)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: fh,
    useSyncExternalStore: ph,
    useId: Th,
    unstable_isNewReconciler: !1,
  },
  g0 = {
    readContext: dt,
    useCallback: Eh,
    useContext: dt,
    useEffect: Ec,
    useImperativeHandle: kh,
    useInsertionEffect: bh,
    useLayoutEffect: $h,
    useMemo: Sh,
    useReducer: bl,
    useRef: wh,
    useState: function () {
      return bl(ko);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = ft();
      return me === null ? (t.memoizedState = e) : Ch(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(ko)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: fh,
    useSyncExternalStore: ph,
    useId: Th,
    unstable_isNewReconciler: !1,
  };
function Sr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Vv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function $l(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var v0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Lh(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ki || ((Ki = !0), (Ta = r)), va(e, t);
    }),
    n
  );
}
function Ih(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        va(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        va(e, t), typeof r != 'function' && (dn === null ? (dn = new Set([this])) : dn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new v0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = L0.bind(null, e, t, n)), t.then(e, e));
}
function hd(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function md(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var y0 = Xt.ReactCurrentOwner,
  Be = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? uh(t, null, n, r) : kr(t, e.child, n, r);
}
function gd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    gr(t, o),
    (r = xc(e, t, n, r, i, o)),
    (n = kc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Qt(e, t, o))
      : (J && n && uc(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function vd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Oc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Oh(e, t, i, r, o))
      : ((e = ki(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : go), n(s, r) && e.ref === t.ref)) return Qt(e, t, o);
  }
  return (t.flags |= 1), (e = pn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Oh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (go(i, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Qt(e, t, o);
  }
  return ya(e, t, n, r, o);
}
function Ah(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), q(dr, Ke), (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          q(dr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(dr, Ke),
        (Ke |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), q(dr, Ke), (Ke |= r);
  return Oe(e, t, o, n), t.child;
}
function Mh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ya(e, t, n, r, o) {
  var i = Fe(n) ? Ln : Le.current;
  return (
    (i = $r(t, i)),
    gr(t, o),
    (n = xc(e, t, n, r, i, o)),
    (r = kc()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Qt(e, t, o))
      : (J && r && uc(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (Fe(n)) {
    var i = !0;
    Ni(t);
  } else i = !1;
  if ((gr(t, o), t.stateNode === null)) bi(e, t), ah(t, n, r), ga(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      c = n.contextType;
    typeof c == 'object' && c !== null ? (c = dt(c)) : ((c = Fe(n) ? Ln : Le.current), (c = $r(t, c)));
    var u = n.getDerivedStateFromProps,
      d = typeof u == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== c) && cd(t, s, r, c)),
      (Jt = !1);
    var f = t.memoizedState;
    (s.state = f),
      ji(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || je.current || Jt
        ? (typeof u == 'function' && (ma(t, n, u, r), (a = t.memoizedState)),
          (l = Jt || ad(t, n, l, r, f, a, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      sh(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : gt(t.type, l)),
      (s.props = c),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = dt(a)) : ((a = Fe(n) ? Ln : Le.current), (a = $r(t, a)));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== d || f !== a) && cd(t, s, r, a)),
      (Jt = !1),
      (f = t.memoizedState),
      (s.state = f),
      ji(t, r, s, o);
    var y = t.memoizedState;
    l !== d || f !== y || je.current || Jt
      ? (typeof g == 'function' && (ma(t, n, g, r), (y = t.memoizedState)),
        (c = Jt || ad(t, n, c, r, f, y, a) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wa(e, t, n, r, i, o);
}
function wa(e, t, n, r, o, i) {
  Mh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && rd(t, n, !1), Qt(e, t, i);
  (r = t.stateNode), (y0.current = t);
  var l = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = kr(t, e.child, null, i)), (t.child = kr(t, null, l, i))) : Oe(e, t, l, i),
    (t.memoizedState = r.state),
    o && rd(t, n, !0),
    t.child
  );
}
function Nh(e) {
  var t = e.stateNode;
  t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1),
    yc(e, t.containerInfo);
}
function wd(e, t, n, r, o) {
  return xr(), fc(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function $a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dh(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    q(ee, o & 1),
    e === null)
  )
    return (
      pa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = bs(s, r, 0, null)),
              (e = _n(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $a(n)),
              (t.memoizedState = ba),
              e)
            : Cc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return w0(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = pn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = pn(l, i)) : ((i = _n(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? $a(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ba),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cc(e, t) {
  return (t = bs({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ni(e, t, n, r) {
  return (
    r !== null && fc(r),
    kr(t, e.child, null, n),
    (e = Cc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function w0(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $l(Error(E(422)))), ni(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = bs({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = _n(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && kr(t, e.child, null, s),
        (t.child.memoizedState = $a(s)),
        (t.memoizedState = ba),
        i);
  if (!(t.mode & 1)) return ni(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(E(419))), (r = $l(i, r, void 0)), ni(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Be || l)) {
    if (((r = ye), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Kt(e, o), xt(r, e, o, -1));
    }
    return Ic(), (r = $l(Error(E(421)))), ni(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = I0.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (qe = cn(o.nextSibling)),
      (Ye = t),
      (J = !0),
      (yt = null),
      e !== null && ((st[lt++] = jt), (st[lt++] = Ft), (st[lt++] = In), (jt = e.id), (Ft = e.overflow), (In = t)),
      (t = Cc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ha(e.return, t, n);
}
function xl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function zh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = ee.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bd(e, n, t);
        else if (e.tag === 19) bd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Fi(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          xl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        xl(t, !0, n, null, i);
        break;
      case 'together':
        xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (An |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function b0(e, t, n) {
  switch (t.tag) {
    case 3:
      Nh(t), xr();
      break;
    case 5:
      dh(t);
      break;
    case 1:
      Fe(t.type) && Ni(t);
      break;
    case 4:
      yc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      q(Bi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dh(e, t, n)
          : (q(ee, ee.current & 1), (e = Qt(e, t, n)), e !== null ? e.sibling : null);
      q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ah(e, t, n);
  }
  return Qt(e, t, n);
}
var Bh, xa, Hh, jh;
Bh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xa = function () {};
Hh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Tn(It.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Vl(e, o)), (r = Vl(e, r)), (i = []);
        break;
      case 'select':
        (o = ne({}, o, { value: void 0 })), (r = ne({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = Ql(e, o)), (r = Ql(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ai);
    }
    ql(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === 'style') {
          var l = o[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (ao.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (((l = o != null ? o[c] : void 0), r.hasOwnProperty(c) && a !== l && (a != null || l != null)))
        if (c === 'style')
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(c, a))
            : c === 'children'
            ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(c, '' + a)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (ao.hasOwnProperty(c)
                ? (a != null && c === 'onScroll' && Y('scroll', e), i || l === a || (i = []))
                : (i = i || []).push(c, a));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
jh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $0(e, t, n) {
  var r = t.pendingProps;
  switch ((dc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return Fe(t.type) && Mi(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Er(),
        G(je),
        G(Le),
        bc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ei(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (_a(yt), (yt = null)))),
        xa(e, t),
        Re(t),
        null
      );
    case 5:
      wc(t);
      var o = Tn($o.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Re(t), null;
        }
        if (((e = Tn(It.current)), ei(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[wo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Y('cancel', r), Y('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Y('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Xr.length; o++) Y(Xr[o], r);
              break;
            case 'source':
              Y('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Y('error', r), Y('load', r);
              break;
            case 'details':
              Y('toggle', r);
              break;
            case 'input':
              Ru(r, i), Y('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), Y('invalid', r);
              break;
            case 'textarea':
              Lu(r, i), Y('invalid', r);
          }
          ql(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 && Jo(r.textContent, l, e), (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 && Jo(r.textContent, l, e), (o = ['children', '' + l]))
                : ao.hasOwnProperty(s) && l != null && s === 'onScroll' && Y('scroll', r);
            }
          switch (n) {
            case 'input':
              Wo(r), _u(r, i, !0);
              break;
            case 'textarea':
              Wo(r), Iu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ai);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = hp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[wo] = r),
            Bh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Yl(n, r)), n)) {
              case 'dialog':
                Y('cancel', e), Y('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Y('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Xr.length; o++) Y(Xr[o], e);
                o = r;
                break;
              case 'source':
                Y('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Y('error', e), Y('load', e), (o = r);
                break;
              case 'details':
                Y('toggle', e), (o = r);
                break;
              case 'input':
                Ru(e, r), (o = Vl(e, r)), Y('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ne({}, r, { value: void 0 })), Y('invalid', e);
                break;
              case 'textarea':
                Lu(e, r), (o = Ql(e, r)), Y('invalid', e);
                break;
              default:
                o = r;
            }
            ql(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'style'
                  ? vp(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && mp(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && co(e, a)
                    : typeof a == 'number' && co(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (ao.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && Y('scroll', e)
                      : a != null && Ya(e, i, a, s));
              }
            switch (n) {
              case 'input':
                Wo(e), _u(e, r, !1);
                break;
              case 'textarea':
                Wo(e), Iu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + hn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? fr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && fr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Ai);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) jh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = Tn($o.current)), Tn(It.current), ei(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Rt] = t), (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Rt] = t), (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (G(ee), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && qe !== null && t.mode & 1 && !(t.flags & 128)) oh(), xr(), (t.flags |= 98560), (i = !1);
        else if (((i = ei(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(E(317));
            i[Rt] = t;
          } else xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (i = !1);
        } else yt !== null && (_a(yt), (yt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ee.current & 1 ? ge === 0 && (ge = 3) : Ic())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return Er(), xa(e, t), e === null && vo(t.stateNode.containerInfo), Re(t), null;
    case 10:
      return mc(t.type._context), Re(t), null;
    case 17:
      return Fe(t.type) && Mi(), Re(t), null;
    case 19:
      if ((G(ee), (i = t.memoizedState), i === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Fr(i, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Fi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Fr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return q(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ae() > Cr && ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !J)
            )
              return Re(t), null;
          } else
            2 * ae() - i.renderingStartTime > Cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ae()),
          (t.sibling = null),
          (n = ee.current),
          q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        Lc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function x0(e, t) {
  switch ((dc(t), t.tag)) {
    case 1:
      return Fe(t.type) && Mi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Er(), G(je), G(Le), bc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wc(t), null;
    case 13:
      if ((G(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        xr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return G(ee), null;
    case 4:
      return Er(), null;
    case 10:
      return mc(t.type._context), null;
    case 22:
    case 23:
      return Lc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ri = !1,
  _e = !1,
  k0 = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null;
function ur(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function ka(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var $d = !1;
function E0(e, t) {
  if (((sa = Li), (e = Wp()), cc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch (w) {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if ((f === n && ++c === o && (l = s), f === i && ++u === r && (a = s), (g = d.nextSibling) !== null))
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (la = { focusedElem: e, selectionRange: n }, Li = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var $ = y.memoizedProps,
                    A = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? $ : gt(t.type, $), A);
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          oe(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = $d), ($d = !1), y;
}
function no(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ka(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ys(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Fh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Rt], delete t[wo], delete t[ua], delete t[s0], delete t[l0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ai));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), (e = e.sibling);
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
var xe = null,
  vt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Vh(e, t, n), (n = n.sibling);
}
function Vh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
    try {
      Lt.onCommitFiberUnmount(us, n);
    } catch (l) {}
  switch (n.tag) {
    case 5:
      _e || ur(n, t);
    case 6:
      var r = xe,
        o = vt;
      (xe = null),
        Gt(e, t, n),
        (xe = r),
        (vt = o),
        xe !== null &&
          (vt
            ? ((e = xe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null &&
        (vt
          ? ((e = xe), (n = n.stateNode), e.nodeType === 8 ? ml(e.parentNode, n) : e.nodeType === 1 && ml(e, n), ho(e))
          : ml(xe, n.stateNode));
      break;
    case 4:
      (r = xe), (o = vt), (xe = n.stateNode.containerInfo), (vt = !0), Gt(e, t, n), (xe = r), (vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && ka(n, t, s), (o = o.next);
        } while (o !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (!_e && (ur(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          oe(n, t, l);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((_e = (r = _e) || n.memoizedState !== null), Gt(e, t, n), (_e = r)) : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function kd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new k0()),
      t.forEach(function (r) {
        var o = O0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (xe = l.stateNode), (vt = !1);
              break e;
            case 3:
              (xe = l.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (xe = l.stateNode.containerInfo), (vt = !0);
              break e;
          }
          l = l.return;
        }
        if (xe === null) throw Error(E(160));
        Vh(i, s, o), (xe = null), (vt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        oe(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wh(t, e), (t = t.sibling);
}
function Wh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), Ct(e), r & 4)) {
        try {
          no(3, e, e.return), ys(3, e);
        } catch ($) {
          oe(e, e.return, $);
        }
        try {
          no(5, e, e.return);
        } catch ($) {
          oe(e, e.return, $);
        }
      }
      break;
    case 1:
      ht(t, e), Ct(e), r & 512 && n !== null && ur(n, n.return);
      break;
    case 5:
      if ((ht(t, e), Ct(e), r & 512 && n !== null && ur(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          co(o, '');
        } catch ($) {
          oe(e, e.return, $);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && fp(o, i), Yl(l, s);
            var c = Yl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var u = a[s],
                d = a[s + 1];
              u === 'style'
                ? vp(o, d)
                : u === 'dangerouslySetInnerHTML'
                ? mp(o, d)
                : u === 'children'
                ? co(o, d)
                : Ya(o, u, d, c);
            }
            switch (l) {
              case 'input':
                Wl(o, i);
                break;
              case 'textarea':
                pp(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? fr(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? fr(o, !!i.multiple, i.defaultValue, !0)
                      : fr(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[wo] = i;
          } catch ($) {
            oe(e, e.return, $);
          }
      }
      break;
    case 6:
      if ((ht(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch ($) {
          oe(e, e.return, $);
        }
      }
      break;
    case 3:
      if ((ht(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ho(t.containerInfo);
        } catch ($) {
          oe(e, e.return, $);
        }
      break;
    case 4:
      ht(t, e), Ct(e);
      break;
    case 13:
      ht(t, e),
        Ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Rc = ae())),
        r & 4 && kd(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (c = _e) || u), ht(t, e), (_e = c)) : ht(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
          for (I = e, u = e.child; u !== null; ) {
            for (d = I = u; I !== null; ) {
              switch (((f = I), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  no(4, f, f.return);
                  break;
                case 1:
                  ur(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch ($) {
                      oe(r, n, $);
                    }
                  }
                  break;
                case 5:
                  ur(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Sd(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (I = g)) : Sd(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (l.style.display = gp('display', s)));
              } catch ($) {
                oe(e, e.return, $);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
              } catch ($) {
                oe(e, e.return, $);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), Ct(e), r & 4 && kd(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (co(o, ''), (r.flags &= -33));
          var i = xd(e);
          Ca(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = xd(e);
          Sa(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function S0(e, t, n) {
  (I = e), Kh(e);
}
function Kh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ri;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || _e;
        l = ri;
        var c = _e;
        if (((ri = s), (_e = a) && !c))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? Cd(o) : a !== null ? ((a.return = s), (I = a)) : Cd(o);
        for (; i !== null; ) (I = i), Kh(i), (i = i.sibling);
        (I = o), (ri = l), (_e = c);
      }
      Ed(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : Ed(e);
  }
}
function Ed(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || ys(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ld(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ld(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && ho(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        _e || (t.flags & 512 && Ea(t));
      } catch (f) {
        oe(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Sd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Cd(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ys(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ea(t);
          } catch (a) {
            oe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ea(t);
          } catch (a) {
            oe(t, s, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var C0 = Math.ceil,
  Wi = Xt.ReactCurrentDispatcher,
  Tc = Xt.ReactCurrentOwner,
  ct = Xt.ReactCurrentBatchConfig,
  F = 0,
  ye = null,
  pe = null,
  Ee = 0,
  Ke = 0,
  dr = wn(0),
  ge = 0,
  So = null,
  An = 0,
  ws = 0,
  Pc = 0,
  ro = null,
  ze = null,
  Rc = 0,
  Cr = 1 / 0,
  Dt = null,
  Ki = !1,
  Ta = null,
  dn = null,
  oi = !1,
  rn = null,
  Qi = 0,
  oo = 0,
  Pa = null,
  $i = -1,
  xi = 0;
function Ae() {
  return F & 6 ? ae() : $i !== -1 ? $i : ($i = ae());
}
function fn(e) {
  return e.mode & 1
    ? F & 2 && Ee !== 0
      ? Ee & -Ee
      : c0.transition !== null
      ? (xi === 0 && (xi = Rp()), xi)
      : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Np(e.type))), e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < oo) throw ((oo = 0), (Pa = null), Error(E(185)));
  Io(e, n, r),
    (!(F & 2) || e !== ye) &&
      (e === ye && (!(F & 2) && (ws |= n), ge === 4 && tn(e, Ee)),
      Ue(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Cr = ae() + 500), ms && bn()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  cy(e, t);
  var r = _i(e, e === ye ? Ee : 0);
  if (r === 0) n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mu(n), t === 1))
      e.tag === 0 ? a0(Td.bind(null, e)) : th(Td.bind(null, e)),
        o0(function () {
          !(F & 6) && bn();
        }),
        (n = null);
    else {
      switch (_p(r)) {
        case 1:
          n = tc;
          break;
        case 4:
          n = Tp;
          break;
        case 16:
          n = Ri;
          break;
        case 536870912:
          n = Pp;
          break;
        default:
          n = Ri;
      }
      n = em(n, Qh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qh(e, t) {
  if ((($i = -1), (xi = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (vr() && e.callbackNode !== n) return null;
  var r = _i(e, e === ye ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xi(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = qh();
    (ye !== e || Ee !== t) && ((Dt = null), (Cr = ae() + 500), Rn(e, t));
    do
      try {
        R0();
        break;
      } catch (l) {
        Xh(e, l);
      }
    while (1);
    hc(), (Wi.current = i), (F = o), pe !== null ? (t = 0) : ((ye = null), (Ee = 0), (t = ge));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = ta(e)), o !== 0 && ((r = o), (t = Ra(e, o)))), t === 1))
      throw ((n = So), Rn(e, 0), tn(e, r), Ue(e, ae()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !T0(o) &&
          ((t = Xi(e, r)), t === 2 && ((i = ta(e)), i !== 0 && ((r = i), (t = Ra(e, i)))), t === 1))
      )
        throw ((n = So), Rn(e, 0), tn(e, r), Ue(e, ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          En(e, ze, Dt);
          break;
        case 3:
          if ((tn(e, r), (r & 130023424) === r && ((t = Rc + 500 - ae()), 10 < t))) {
            if (_i(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ca(En.bind(null, e, ze, Dt), t);
            break;
          }
          En(e, ze, Dt);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - $t(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * C0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ca(En.bind(null, e, ze, Dt), r);
            break;
          }
          En(e, ze, Dt);
          break;
        case 5:
          En(e, ze, Dt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ue(e, ae()), e.callbackNode === n ? Qh.bind(null, e) : null;
}
function Ra(e, t) {
  var n = ro;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = Xi(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && _a(t)),
    e
  );
}
function _a(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function T0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!St(i(), o)) return !1;
          } catch (s) {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tn(e, t) {
  for (t &= ~Pc, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if (F & 6) throw Error(E(327));
  vr();
  var t = _i(e, 0);
  if (!(t & 1)) return Ue(e, ae()), null;
  var n = Xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ta(e);
    r !== 0 && ((t = r), (n = Ra(e, r)));
  }
  if (n === 1) throw ((n = So), Rn(e, 0), tn(e, t), Ue(e, ae()), n);
  if (n === 6) throw Error(E(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), En(e, ze, Dt), Ue(e, ae()), null;
}
function _c(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Cr = ae() + 500), ms && bn());
  }
}
function Mn(e) {
  rn !== null && rn.tag === 0 && !(F & 6) && vr();
  var t = F;
  F |= 1;
  var n = ct.transition,
    r = V;
  try {
    if (((ct.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (ct.transition = n), (F = t), !(F & 6) && bn();
  }
}
function Lc() {
  (Ke = dr.current), G(dr);
}
function Rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), r0(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((dc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Mi();
          break;
        case 3:
          Er(), G(je), G(Le), bc();
          break;
        case 5:
          wc(r);
          break;
        case 4:
          Er();
          break;
        case 13:
          G(ee);
          break;
        case 19:
          G(ee);
          break;
        case 10:
          mc(r.type._context);
          break;
        case 22:
        case 23:
          Lc();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (pe = e = pn(e.current, null)),
    (Ee = Ke = t),
    (ge = 0),
    (So = null),
    (Pc = ws = An = 0),
    (ze = ro = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function Xh(e, t) {
  do {
    var n = pe;
    try {
      if ((hc(), (yi.current = Vi), Ui)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ui = !1;
      }
      if (
        ((On = 0), (ve = me = te = null), (to = !1), (xo = 0), (Tc.current = null), n === null || n.return === null)
      ) {
        (ge = 1), (So = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (((t = Ee), (l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
          var c = a,
            u = l,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue), (u.memoizedState = f.memoizedState), (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var g = hd(s);
          if (g !== null) {
            (g.flags &= -257), md(g, s, l, i, t), g.mode & 1 && pd(i, c, t), (t = g), (a = c);
            var y = t.updateQueue;
            if (y === null) {
              var $ = new Set();
              $.add(a), (t.updateQueue = $);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, c, t), Ic();
              break e;
            }
            a = Error(E(426));
          }
        } else if (J && l.mode & 1) {
          var A = hd(s);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), md(A, s, l, i, t), fc(Sr(a, l));
            break e;
          }
        }
        (i = a = Sr(a, l)), ge !== 4 && (ge = 2), ro === null ? (ro = [i]) : ro.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Lh(i, a, t);
              sd(i, h);
              break e;
            case 1:
              l = a;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (m !== null && typeof m.componentDidCatch == 'function' && (dn === null || !dn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Ih(i, l, t);
                sd(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gh(n);
    } catch (T) {
      (t = T), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qh() {
  var e = Wi.current;
  return (Wi.current = Vi), e === null ? Vi : e;
}
function Ic() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), ye === null || (!(An & 268435455) && !(ws & 268435455)) || tn(ye, Ee);
}
function Xi(e, t) {
  var n = F;
  F |= 2;
  var r = qh();
  (ye !== e || Ee !== t) && ((Dt = null), Rn(e, t));
  do
    try {
      P0();
      break;
    } catch (o) {
      Xh(e, o);
    }
  while (1);
  if ((hc(), (F = n), (Wi.current = r), pe !== null)) throw Error(E(261));
  return (ye = null), (Ee = 0), ge;
}
function P0() {
  for (; pe !== null; ) Yh(pe);
}
function R0() {
  for (; pe !== null && !ey(); ) Yh(pe);
}
function Yh(e) {
  var t = Jh(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps), t === null ? Gh(e) : (pe = t), (Tc.current = null);
}
function Gh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = x0(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (pe = null);
        return;
      }
    } else if (((n = $0(n, t, Ke)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function En(e, t, n) {
  var r = V,
    o = ct.transition;
  try {
    (ct.transition = null), (V = 1), _0(e, t, n, r);
  } finally {
    (ct.transition = o), (V = r);
  }
  return null;
}
function _0(e, t, n, r) {
  do vr();
  while (rn !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (uy(e, i),
    e === ye && ((pe = ye = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      oi ||
      ((oi = !0),
      em(Ri, function () {
        return vr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ct.transition), (ct.transition = null);
    var s = V;
    V = 1;
    var l = F;
    (F |= 4),
      (Tc.current = null),
      E0(e, n),
      Wh(n, e),
      Yy(la),
      (Li = !!sa),
      (la = sa = null),
      (e.current = n),
      S0(n),
      ty(),
      (F = l),
      (V = s),
      (ct.transition = i);
  } else e.current = n;
  if (
    (oi && ((oi = !1), (rn = e), (Qi = o)),
    (i = e.pendingLanes),
    i === 0 && (dn = null),
    oy(n.stateNode),
    Ue(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ki) throw ((Ki = !1), (e = Ta), (Ta = null), e);
  return (
    Qi & 1 && e.tag !== 0 && vr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Pa ? oo++ : ((oo = 0), (Pa = e))) : (oo = 0),
    bn(),
    null
  );
}
function vr() {
  if (rn !== null) {
    var e = _p(Qi),
      t = ct.transition,
      n = V;
    try {
      if (((ct.transition = null), (V = 16 > e ? 16 : e), rn === null)) var r = !1;
      else {
        if (((e = rn), (rn = null), (Qi = 0), F & 6)) throw Error(E(331));
        var o = F;
        for (F |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (I = c; I !== null; ) {
                  var u = I;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      no(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (I = d);
                  else
                    for (; I !== null; ) {
                      u = I;
                      var f = u.sibling,
                        g = u.return;
                      if ((Fh(u), u === c)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (I = f);
                        break;
                      }
                      I = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var $ = y.child;
                if ($ !== null) {
                  y.child = null;
                  do {
                    var A = $.sibling;
                    ($.sibling = null), ($ = A);
                  } while ($ !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    no(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (I = h);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          s = I;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (I = m);
          else
            e: for (s = p; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ys(9, l);
                  }
                } catch (T) {
                  oe(l, l.return, T);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (I = w);
                break e;
              }
              I = l.return;
            }
        }
        if (((F = o), bn(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
          try {
            Lt.onPostCommitFiberRoot(us, e);
          } catch (T) {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (ct.transition = t);
    }
  }
  return !1;
}
function Pd(e, t, n) {
  (t = Sr(n, t)), (t = Lh(e, t, 1)), (e = un(e, t, 1)), (t = Ae()), e !== null && (Io(e, 1, t), Ue(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Pd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (dn === null || !dn.has(r)))
        ) {
          (e = Sr(n, e)), (e = Ih(t, e, 1)), (t = un(t, e, 1)), (e = Ae()), t !== null && (Io(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function L0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (Ee & n) === n &&
      (ge === 4 || (ge === 3 && (Ee & 130023424) === Ee && 500 > ae() - Rc) ? Rn(e, 0) : (Pc |= n)),
    Ue(e, t);
}
function Zh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Xo), (Xo <<= 1), !(Xo & 130023424) && (Xo = 4194304)) : (t = 1));
  var n = Ae();
  (e = Kt(e, t)), e !== null && (Io(e, t, n), Ue(e, n));
}
function I0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zh(e, n);
}
function O0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Zh(e, n);
}
var Jh;
Jh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), b0(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), J && t.flags & 1048576 && nh(t, zi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bi(e, t), (e = t.pendingProps);
      var o = $r(t, Le.current);
      gr(t, n), (o = xc(null, t, r, e, o, n));
      var i = kc();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), Ni(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            vc(t),
            (o.updater = gs),
            (t.stateNode = o),
            (o._reactInternals = t),
            ga(t, r, e, n),
            (t = wa(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && uc(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = M0(r)),
          (e = gt(r, e)),
          o)
        ) {
          case 0:
            t = ya(null, t, r, e, n);
            break e;
          case 1:
            t = yd(null, t, r, e, n);
            break e;
          case 11:
            t = gd(null, t, r, e, n);
            break e;
          case 14:
            t = vd(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), ya(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), yd(e, t, r, o, n);
    case 3:
      e: {
        if ((Nh(t), e === null)) throw Error(E(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), sh(e, t), ji(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Sr(Error(E(423)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Sr(Error(E(424)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else
            for (
              qe = cn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                J = !0,
                yt = null,
                n = uh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xr(), r === o)) {
            t = Qt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dh(t),
        e === null && pa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        aa(r, o) ? (s = null) : i !== null && aa(r, i) && (t.flags |= 32),
        Mh(e, t),
        Oe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && pa(t), null;
    case 13:
      return Dh(e, t, n);
    case 4:
      return (
        yc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), gd(e, t, r, o, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          q(Bi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (St(i.value, s)) {
            if (i.children === o.children && !je.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Ut(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null ? (a.next = a) : ((a.next = u.next), (u.next = a)), (c.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), ha(i.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), ha(s, n, t), (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        gr(t, n),
        (o = dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = gt(r, t.pendingProps)), (o = gt(r.type, o)), vd(e, t, r, o, n);
    case 15:
      return Oh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        bi(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Ni(t)) : (e = !1),
        gr(t, n),
        ah(t, r, o),
        ga(t, r, o, n),
        wa(null, t, r, !0, e, n)
      );
    case 19:
      return zh(e, t, n);
    case 22:
      return Ah(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function em(e, t) {
  return Cp(e, t);
}
function A0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new A0(e, t, n, r);
}
function Oc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function M0(e) {
  if (typeof e == 'function') return Oc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Za)) return 11;
    if (e === Ja) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ki(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Oc(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case tr:
        return _n(n.children, o, i, t);
      case Ga:
        (s = 8), (o |= 8);
        break;
      case Hl:
        return (e = at(12, n, t, o | 2)), (e.elementType = Hl), (e.lanes = i), e;
      case jl:
        return (e = at(13, n, t, o)), (e.elementType = jl), (e.lanes = i), e;
      case Fl:
        return (e = at(19, n, t, o)), (e.elementType = Fl), (e.lanes = i), e;
      case cp:
        return bs(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case lp:
              s = 10;
              break e;
            case ap:
              s = 9;
              break e;
            case Za:
              s = 11;
              break e;
            case Ja:
              s = 14;
              break e;
            case Zt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (t = at(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function _n(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function bs(e, t, n, r) {
  return (e = at(22, e, r, t)), (e.elementType = cp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function kl(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function El(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function N0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ol(0)),
    (this.expirationTimes = ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ac(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new N0(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = at(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vc(i),
    e
  );
}
function D0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: er, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function tm(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return eh(e, n, t);
  }
  return t;
}
function nm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ac(n, r, !0, e, o, i, s, l, a)),
    (e.context = tm(null)),
    (n = e.current),
    (r = Ae()),
    (o = fn(n)),
    (i = Ut(r, o)),
    (i.callback = t != null ? t : null),
    un(n, i, o),
    (e.current.lanes = o),
    Io(e, o, r),
    Ue(e, r),
    e
  );
}
function $s(e, t, n, r) {
  var o = t.current,
    i = Ae(),
    s = fn(o);
  return (
    (n = tm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(o, t, s)),
    e !== null && (xt(e, o, s, i), vi(e, o, s)),
    s
  );
}
function qi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mc(e, t) {
  Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function z0() {
  return null;
}
var rm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nc(e) {
  this._internalRoot = e;
}
xs.prototype.render = Nc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  $s(e, t, null, null);
};
xs.prototype.unmount = Nc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      $s(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function xs(e) {
  this._internalRoot = e;
}
xs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Op();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Mp(e);
  }
};
function Dc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function _d() {}
function B0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = qi(s);
        i.call(c);
      };
    }
    var s = nm(t, r, e, 0, null, !1, !1, '', _d);
    return (e._reactRootContainer = s), (e[Wt] = s.current), vo(e.nodeType === 8 ? e.parentNode : e), Mn(), s;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var c = qi(a);
      l.call(c);
    };
  }
  var a = Ac(e, 0, !1, null, null, !1, !1, '', _d);
  return (
    (e._reactRootContainer = a),
    (e[Wt] = a.current),
    vo(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      $s(t, a, n, r);
    }),
    a
  );
}
function Es(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var a = qi(s);
        l.call(a);
      };
    }
    $s(t, s, e, o);
  } else s = B0(n, t, e, o, r);
  return qi(s);
}
Lp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qr(t.pendingLanes);
        n !== 0 && (nc(t, n | 1), Ue(t, ae()), !(F & 6) && ((Cr = ae() + 500), bn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var o = Ae();
          xt(r, e, 1, o);
        }
      }),
        Mc(e, 1);
  }
};
rc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      xt(t, e, 134217728, n);
    }
    Mc(e, 134217728);
  }
};
Ip = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Ae();
      xt(n, e, t, r);
    }
    Mc(e, t);
  }
};
Op = function () {
  return V;
};
Ap = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Zl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Wl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hs(r);
            if (!o) throw Error(E(90));
            dp(r), Wl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      pp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && fr(e, !!n.multiple, t, !1);
  }
};
bp = _c;
$p = Mn;
var H0 = { usingClientEntryPoint: !1, Events: [Ao, ir, hs, yp, wp, _c] },
  Ur = { findFiberByHostInstance: Sn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  j0 = {
    bundleType: Ur.bundleType,
    version: Ur.version,
    rendererPackageName: Ur.rendererPackageName,
    rendererConfig: Ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ep(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || z0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ii.isDisabled && ii.supportsFiber)
    try {
      (us = ii.inject(j0)), (Lt = ii);
    } catch (e) {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H0;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dc(t)) throw Error(E(200));
  return D0(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!Dc(e)) throw Error(E(299));
  var n = !1,
    r = '',
    o = rm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ac(e, 1, !1, null, null, n, !1, r, o)),
    (e[Wt] = t.current),
    vo(e.nodeType === 8 ? e.parentNode : e),
    new Nc(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(E(188)) : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = Ep(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Mn(e);
};
Je.hydrate = function (e, t, n) {
  if (!ks(t)) throw Error(E(200));
  return Es(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!Dc(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = rm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = nm(t, null, e, 1, n != null ? n : null, o, !1, i, s)),
    (e[Wt] = t.current),
    vo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new xs(t);
};
Je.render = function (e, t, n) {
  if (!ks(t)) throw Error(E(200));
  return Es(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!ks(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Mn(function () {
        Es(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = _c;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ks(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Es(e, t, n, !1, r);
};
Je.version = '18.2.0-next-9e3b772b8-20220608';
function om() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om);
    } catch (e) {
      console.error(e);
    }
}
om(), (np.exports = Je);
var zc = np.exports;
const F0 = _o(zc);
var im,
  Ld = zc;
(im = Ld.createRoot), Ld.hydrateRoot;
function La(e, t) {
  return (
    (La = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    La(e, t)
  );
}
function gn(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), La(e, t);
}
var sm = { exports: {} },
  U0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  V0 = U0,
  W0 = V0;
function lm() {}
function am() {}
am.resetWarningCache = lm;
var K0 = function () {
  function e(r, o, i, s, l, a) {
    if (a !== W0) {
      var c = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((c.name = 'Invariant Violation'), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: am,
    resetWarningCache: lm,
  };
  return (n.PropTypes = n), n;
};
sm.exports = K0();
var Q0 = sm.exports;
const Id = _o(Q0);
function Ve() {
  return (
    (Ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ve.apply(this, arguments)
  );
}
function si(e) {
  return e.charAt(0) === '/';
}
function Sl(e, t) {
  for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function X0(e, t) {
  t === void 0 && (t = '');
  var n = (e && e.split('/')) || [],
    r = (t && t.split('/')) || [],
    o = e && si(e),
    i = t && si(t),
    s = o || i;
  if ((e && si(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)) return '/';
  var l;
  if (r.length) {
    var a = r[r.length - 1];
    l = a === '.' || a === '..' || a === '';
  } else l = !1;
  for (var c = 0, u = r.length; u >= 0; u--) {
    var d = r[u];
    d === '.' ? Sl(r, u) : d === '..' ? (Sl(r, u), c++) : c && (Sl(r, u), c--);
  }
  if (!s) for (; c--; c) r.unshift('..');
  s && r[0] !== '' && (!r[0] || !si(r[0])) && r.unshift('');
  var f = r.join('/');
  return l && f.substr(-1) !== '/' && (f += '/'), f;
}
function Od(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function Ei(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (o, i) {
        return Ei(o, t[i]);
      })
    );
  if (typeof e == 'object' || typeof t == 'object') {
    var n = Od(e),
      r = Od(t);
    return n !== e || r !== t
      ? Ei(n, r)
      : Object.keys(Object.assign({}, e, t)).every(function (o) {
          return Ei(e[o], t[o]);
        });
  }
  return !1;
}
var q0 = !0,
  Cl = 'Invariant failed';
function Fn(e, t) {
  if (!e) {
    if (q0) throw new Error(Cl);
    var n = typeof t == 'function' ? t() : t,
      r = n ? ''.concat(Cl, ': ').concat(n) : Cl;
    throw new Error(r);
  }
}
function io(e) {
  return e.charAt(0) === '/' ? e : '/' + e;
}
function Ad(e) {
  return e.charAt(0) === '/' ? e.substr(1) : e;
}
function Y0(e, t) {
  return e.toLowerCase().indexOf(t.toLowerCase()) === 0 && '/?#'.indexOf(e.charAt(t.length)) !== -1;
}
function cm(e, t) {
  return Y0(e, t) ? e.substr(t.length) : e;
}
function um(e) {
  return e.charAt(e.length - 1) === '/' ? e.slice(0, -1) : e;
}
function G0(e) {
  var t = e || '/',
    n = '',
    r = '',
    o = t.indexOf('#');
  o !== -1 && ((r = t.substr(o)), (t = t.substr(0, o)));
  var i = t.indexOf('?');
  return (
    i !== -1 && ((n = t.substr(i)), (t = t.substr(0, i))),
    { pathname: t, search: n === '?' ? '' : n, hash: r === '#' ? '' : r }
  );
}
function it(e) {
  var t = e.pathname,
    n = e.search,
    r = e.hash,
    o = t || '/';
  return (
    n && n !== '?' && (o += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (o += r.charAt(0) === '#' ? r : '#' + r),
    o
  );
}
function He(e, t, n, r) {
  var o;
  typeof e == 'string'
    ? ((o = G0(e)), (o.state = t))
    : ((o = Ve({}, e)),
      o.pathname === void 0 && (o.pathname = ''),
      o.search ? o.search.charAt(0) !== '?' && (o.search = '?' + o.search) : (o.search = ''),
      o.hash ? o.hash.charAt(0) !== '#' && (o.hash = '#' + o.hash) : (o.hash = ''),
      t !== void 0 && o.state === void 0 && (o.state = t));
  try {
    o.pathname = decodeURI(o.pathname);
  } catch (i) {
    throw i instanceof URIError
      ? new URIError(
          'Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : i;
  }
  return (
    n && (o.key = n),
    r
      ? o.pathname
        ? o.pathname.charAt(0) !== '/' && (o.pathname = X0(o.pathname, r.pathname))
        : (o.pathname = r.pathname)
      : o.pathname || (o.pathname = '/'),
    o
  );
}
function Z0(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && Ei(e.state, t.state)
  );
}
function Bc() {
  var e = null;
  function t(s) {
    return (
      (e = s),
      function () {
        e === s && (e = null);
      }
    );
  }
  function n(s, l, a, c) {
    if (e != null) {
      var u = typeof e == 'function' ? e(s, l) : e;
      typeof u == 'string' ? (typeof a == 'function' ? a(u, c) : c(!0)) : c(u !== !1);
    } else c(!0);
  }
  var r = [];
  function o(s) {
    var l = !0;
    function a() {
      l && s.apply(void 0, arguments);
    }
    return (
      r.push(a),
      function () {
        (l = !1),
          (r = r.filter(function (c) {
            return c !== a;
          }));
      }
    );
  }
  function i() {
    for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++) l[a] = arguments[a];
    r.forEach(function (c) {
      return c.apply(void 0, l);
    });
  }
  return { setPrompt: t, confirmTransitionTo: n, appendListener: o, notifyListeners: i };
}
var dm = !!(typeof window < 'u' && window.document && window.document.createElement);
function fm(e, t) {
  t(window.confirm(e));
}
function J0() {
  var e = window.navigator.userAgent;
  return (e.indexOf('Android 2.') !== -1 || e.indexOf('Android 4.0') !== -1) &&
    e.indexOf('Mobile Safari') !== -1 &&
    e.indexOf('Chrome') === -1 &&
    e.indexOf('Windows Phone') === -1
    ? !1
    : window.history && 'pushState' in window.history;
}
function e1() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
function t1() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
function n1(e) {
  return e.state === void 0 && navigator.userAgent.indexOf('CriOS') === -1;
}
var Md = 'popstate',
  Nd = 'hashchange';
function Dd() {
  try {
    return window.history.state || {};
  } catch (e) {
    return {};
  }
}
function r1(e) {
  e === void 0 && (e = {}), dm || Fn(!1);
  var t = window.history,
    n = J0(),
    r = !e1(),
    o = e,
    i = o.forceRefresh,
    s = i === void 0 ? !1 : i,
    l = o.getUserConfirmation,
    a = l === void 0 ? fm : l,
    c = o.keyLength,
    u = c === void 0 ? 6 : c,
    d = e.basename ? um(io(e.basename)) : '';
  function f(S) {
    var k = S || {},
      M = k.key,
      O = k.state,
      B = window.location,
      X = B.pathname,
      U = B.search,
      se = B.hash,
      de = X + U + se;
    return d && (de = cm(de, d)), He(de, O, M);
  }
  function g() {
    return Math.random().toString(36).substr(2, u);
  }
  var y = Bc();
  function $(S) {
    Ve(R, S), (R.length = t.length), y.notifyListeners(R.location, R.action);
  }
  function A(S) {
    n1(S) || m(f(S.state));
  }
  function h() {
    m(f(Dd()));
  }
  var p = !1;
  function m(S) {
    if (p) (p = !1), $();
    else {
      var k = 'POP';
      y.confirmTransitionTo(S, k, a, function (M) {
        M ? $({ action: k, location: S }) : w(S);
      });
    }
  }
  function w(S) {
    var k = R.location,
      M = P.indexOf(k.key);
    M === -1 && (M = 0);
    var O = P.indexOf(S.key);
    O === -1 && (O = 0);
    var B = M - O;
    B && ((p = !0), D(B));
  }
  var T = f(Dd()),
    P = [T.key];
  function x(S) {
    return d + it(S);
  }
  function C(S, k) {
    var M = 'PUSH',
      O = He(S, k, g(), R.location);
    y.confirmTransitionTo(O, M, a, function (B) {
      if (B) {
        var X = x(O),
          U = O.key,
          se = O.state;
        if (n)
          if ((t.pushState({ key: U, state: se }, null, X), s)) window.location.href = X;
          else {
            var de = P.indexOf(R.location.key),
              Nt = P.slice(0, de + 1);
            Nt.push(O.key), (P = Nt), $({ action: M, location: O });
          }
        else window.location.href = X;
      }
    });
  }
  function z(S, k) {
    var M = 'REPLACE',
      O = He(S, k, g(), R.location);
    y.confirmTransitionTo(O, M, a, function (B) {
      if (B) {
        var X = x(O),
          U = O.key,
          se = O.state;
        if (n)
          if ((t.replaceState({ key: U, state: se }, null, X), s)) window.location.replace(X);
          else {
            var de = P.indexOf(R.location.key);
            de !== -1 && (P[de] = O.key), $({ action: M, location: O });
          }
        else window.location.replace(X);
      }
    });
  }
  function D(S) {
    t.go(S);
  }
  function L() {
    D(-1);
  }
  function ce() {
    D(1);
  }
  var Te = 0;
  function ue(S) {
    (Te += S),
      Te === 1 && S === 1
        ? (window.addEventListener(Md, A), r && window.addEventListener(Nd, h))
        : Te === 0 && (window.removeEventListener(Md, A), r && window.removeEventListener(Nd, h));
  }
  var re = !1;
  function K(S) {
    S === void 0 && (S = !1);
    var k = y.setPrompt(S);
    return (
      re || (ue(1), (re = !0)),
      function () {
        return re && ((re = !1), ue(-1)), k();
      }
    );
  }
  function ie(S) {
    var k = y.appendListener(S);
    return (
      ue(1),
      function () {
        ue(-1), k();
      }
    );
  }
  var R = {
    length: t.length,
    action: 'POP',
    location: T,
    createHref: x,
    push: C,
    replace: z,
    go: D,
    goBack: L,
    goForward: ce,
    block: K,
    listen: ie,
  };
  return R;
}
var zd = 'hashchange',
  o1 = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === '!' ? t : '!/' + Ad(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === '!' ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Ad, decodePath: io },
    slash: { encodePath: io, decodePath: io },
  };
function pm(e) {
  var t = e.indexOf('#');
  return t === -1 ? e : e.slice(0, t);
}
function Vr() {
  var e = window.location.href,
    t = e.indexOf('#');
  return t === -1 ? '' : e.substring(t + 1);
}
function i1(e) {
  window.location.hash = e;
}
function Tl(e) {
  window.location.replace(pm(window.location.href) + '#' + e);
}
function s1(e) {
  e === void 0 && (e = {}), dm || Fn(!1);
  var t = window.history;
  t1();
  var n = e,
    r = n.getUserConfirmation,
    o = r === void 0 ? fm : r,
    i = n.hashType,
    s = i === void 0 ? 'slash' : i,
    l = e.basename ? um(io(e.basename)) : '',
    a = o1[s],
    c = a.encodePath,
    u = a.decodePath;
  function d() {
    var k = u(Vr());
    return l && (k = cm(k, l)), He(k);
  }
  var f = Bc();
  function g(k) {
    Ve(S, k), (S.length = t.length), f.notifyListeners(S.location, S.action);
  }
  var y = !1,
    $ = null;
  function A(k, M) {
    return k.pathname === M.pathname && k.search === M.search && k.hash === M.hash;
  }
  function h() {
    var k = Vr(),
      M = c(k);
    if (k !== M) Tl(M);
    else {
      var O = d(),
        B = S.location;
      if ((!y && A(B, O)) || $ === it(O)) return;
      ($ = null), p(O);
    }
  }
  function p(k) {
    if (y) (y = !1), g();
    else {
      var M = 'POP';
      f.confirmTransitionTo(k, M, o, function (O) {
        O ? g({ action: M, location: k }) : m(k);
      });
    }
  }
  function m(k) {
    var M = S.location,
      O = x.lastIndexOf(it(M));
    O === -1 && (O = 0);
    var B = x.lastIndexOf(it(k));
    B === -1 && (B = 0);
    var X = O - B;
    X && ((y = !0), L(X));
  }
  var w = Vr(),
    T = c(w);
  w !== T && Tl(T);
  var P = d(),
    x = [it(P)];
  function C(k) {
    var M = document.querySelector('base'),
      O = '';
    return M && M.getAttribute('href') && (O = pm(window.location.href)), O + '#' + c(l + it(k));
  }
  function z(k, M) {
    var O = 'PUSH',
      B = He(k, void 0, void 0, S.location);
    f.confirmTransitionTo(B, O, o, function (X) {
      if (X) {
        var U = it(B),
          se = c(l + U),
          de = Vr() !== se;
        if (de) {
          ($ = U), i1(se);
          var Nt = x.lastIndexOf(it(S.location)),
            jo = x.slice(0, Nt + 1);
          jo.push(U), (x = jo), g({ action: O, location: B });
        } else g();
      }
    });
  }
  function D(k, M) {
    var O = 'REPLACE',
      B = He(k, void 0, void 0, S.location);
    f.confirmTransitionTo(B, O, o, function (X) {
      if (X) {
        var U = it(B),
          se = c(l + U),
          de = Vr() !== se;
        de && (($ = U), Tl(se));
        var Nt = x.indexOf(it(S.location));
        Nt !== -1 && (x[Nt] = U), g({ action: O, location: B });
      }
    });
  }
  function L(k) {
    t.go(k);
  }
  function ce() {
    L(-1);
  }
  function Te() {
    L(1);
  }
  var ue = 0;
  function re(k) {
    (ue += k), ue === 1 && k === 1 ? window.addEventListener(zd, h) : ue === 0 && window.removeEventListener(zd, h);
  }
  var K = !1;
  function ie(k) {
    k === void 0 && (k = !1);
    var M = f.setPrompt(k);
    return (
      K || (re(1), (K = !0)),
      function () {
        return K && ((K = !1), re(-1)), M();
      }
    );
  }
  function R(k) {
    var M = f.appendListener(k);
    return (
      re(1),
      function () {
        re(-1), M();
      }
    );
  }
  var S = {
    length: t.length,
    action: 'POP',
    location: P,
    createHref: C,
    push: z,
    replace: D,
    go: L,
    goBack: ce,
    goForward: Te,
    block: ie,
    listen: R,
  };
  return S;
}
function Bd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function l1(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    r = t.initialEntries,
    o = r === void 0 ? ['/'] : r,
    i = t.initialIndex,
    s = i === void 0 ? 0 : i,
    l = t.keyLength,
    a = l === void 0 ? 6 : l,
    c = Bc();
  function u(C) {
    Ve(x, C), (x.length = x.entries.length), c.notifyListeners(x.location, x.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, a);
  }
  var f = Bd(s, 0, o.length - 1),
    g = o.map(function (C) {
      return typeof C == 'string' ? He(C, void 0, d()) : He(C, void 0, C.key || d());
    }),
    y = it;
  function $(C, z) {
    var D = 'PUSH',
      L = He(C, z, d(), x.location);
    c.confirmTransitionTo(L, D, n, function (ce) {
      if (ce) {
        var Te = x.index,
          ue = Te + 1,
          re = x.entries.slice(0);
        re.length > ue ? re.splice(ue, re.length - ue, L) : re.push(L),
          u({ action: D, location: L, index: ue, entries: re });
      }
    });
  }
  function A(C, z) {
    var D = 'REPLACE',
      L = He(C, z, d(), x.location);
    c.confirmTransitionTo(L, D, n, function (ce) {
      ce && ((x.entries[x.index] = L), u({ action: D, location: L }));
    });
  }
  function h(C) {
    var z = Bd(x.index + C, 0, x.entries.length - 1),
      D = 'POP',
      L = x.entries[z];
    c.confirmTransitionTo(L, D, n, function (ce) {
      ce ? u({ action: D, location: L, index: z }) : u();
    });
  }
  function p() {
    h(-1);
  }
  function m() {
    h(1);
  }
  function w(C) {
    var z = x.index + C;
    return z >= 0 && z < x.entries.length;
  }
  function T(C) {
    return C === void 0 && (C = !1), c.setPrompt(C);
  }
  function P(C) {
    return c.appendListener(C);
  }
  var x = {
    length: g.length,
    action: 'POP',
    location: g[f],
    index: f,
    entries: g,
    createHref: y,
    push: $,
    replace: A,
    go: h,
    goBack: p,
    goForward: m,
    canGo: w,
    block: T,
    listen: P,
  };
  return x;
}
var Lr = { exports: {} },
  a1 =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == '[object Array]';
    },
  Yi = a1;
Lr.exports = gm;
Lr.exports.parse = Hc;
Lr.exports.compile = u1;
Lr.exports.tokensToFunction = hm;
Lr.exports.tokensToRegExp = mm;
var c1 = new RegExp(
  [
    '(\\\\.)',
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
  ].join('|'),
  'g'
);
function Hc(e, t) {
  for (var n = [], r = 0, o = 0, i = '', s = (t && t.delimiter) || '/', l; (l = c1.exec(e)) != null; ) {
    var a = l[0],
      c = l[1],
      u = l.index;
    if (((i += e.slice(o, u)), (o = u + a.length), c)) {
      i += c[1];
      continue;
    }
    var d = e[o],
      f = l[2],
      g = l[3],
      y = l[4],
      $ = l[5],
      A = l[6],
      h = l[7];
    i && (n.push(i), (i = ''));
    var p = f != null && d != null && d !== f,
      m = A === '+' || A === '*',
      w = A === '?' || A === '*',
      T = l[2] || s,
      P = y || $;
    n.push({
      name: g || r++,
      prefix: f || '',
      delimiter: T,
      optional: w,
      repeat: m,
      partial: p,
      asterisk: !!h,
      pattern: P ? p1(P) : h ? '.*' : '[^' + Si(T) + ']+?',
    });
  }
  return o < e.length && (i += e.substr(o)), i && n.push(i), n;
}
function u1(e, t) {
  return hm(Hc(e, t), t);
}
function d1(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return '%' + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function f1(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return '%' + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function hm(e, t) {
  for (var n = new Array(e.length), r = 0; r < e.length; r++)
    typeof e[r] == 'object' && (n[r] = new RegExp('^(?:' + e[r].pattern + ')$', Fc(t)));
  return function (o, i) {
    for (var s = '', l = o || {}, a = i || {}, c = a.pretty ? d1 : encodeURIComponent, u = 0; u < e.length; u++) {
      var d = e[u];
      if (typeof d == 'string') {
        s += d;
        continue;
      }
      var f = l[d.name],
        g;
      if (f == null)
        if (d.optional) {
          d.partial && (s += d.prefix);
          continue;
        } else throw new TypeError('Expected "' + d.name + '" to be defined');
      if (Yi(f)) {
        if (!d.repeat)
          throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(f) + '`');
        if (f.length === 0) {
          if (d.optional) continue;
          throw new TypeError('Expected "' + d.name + '" to not be empty');
        }
        for (var y = 0; y < f.length; y++) {
          if (((g = c(f[y])), !n[u].test(g)))
            throw new TypeError(
              'Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(g) + '`'
            );
          s += (y === 0 ? d.prefix : d.delimiter) + g;
        }
        continue;
      }
      if (((g = d.asterisk ? f1(f) : c(f)), !n[u].test(g)))
        throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + g + '"');
      s += d.prefix + g;
    }
    return s;
  };
}
function Si(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function p1(e) {
  return e.replace(/([=!:$\/()])/g, '\\$1');
}
function jc(e, t) {
  return (e.keys = t), e;
}
function Fc(e) {
  return e && e.sensitive ? '' : 'i';
}
function h1(e, t) {
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var r = 0; r < n.length; r++)
      t.push({
        name: r,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null,
      });
  return jc(e, t);
}
function m1(e, t, n) {
  for (var r = [], o = 0; o < e.length; o++) r.push(gm(e[o], t, n).source);
  var i = new RegExp('(?:' + r.join('|') + ')', Fc(n));
  return jc(i, t);
}
function g1(e, t, n) {
  return mm(Hc(e, n), t, n);
}
function mm(e, t, n) {
  Yi(t) || ((n = t || n), (t = [])), (n = n || {});
  for (var r = n.strict, o = n.end !== !1, i = '', s = 0; s < e.length; s++) {
    var l = e[s];
    if (typeof l == 'string') i += Si(l);
    else {
      var a = Si(l.prefix),
        c = '(?:' + l.pattern + ')';
      t.push(l),
        l.repeat && (c += '(?:' + a + c + ')*'),
        l.optional
          ? l.partial
            ? (c = a + '(' + c + ')?')
            : (c = '(?:' + a + '(' + c + '))?')
          : (c = a + '(' + c + ')'),
        (i += c);
    }
  }
  var u = Si(n.delimiter || '/'),
    d = i.slice(-u.length) === u;
  return (
    r || (i = (d ? i.slice(0, -u.length) : i) + '(?:' + u + '(?=$))?'),
    o ? (i += '$') : (i += r && d ? '' : '(?=' + u + '|$)'),
    jc(new RegExp('^' + i, Fc(n)), t)
  );
}
function gm(e, t, n) {
  return (
    Yi(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp ? h1(e, t) : Yi(e) ? m1(e, t, n) : g1(e, t, n)
  );
}
var v1 = Lr.exports;
const vm = _o(v1);
var Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
  Uc = we ? Symbol.for('react.element') : 60103,
  Vc = we ? Symbol.for('react.portal') : 60106,
  Ss = we ? Symbol.for('react.fragment') : 60107,
  Cs = we ? Symbol.for('react.strict_mode') : 60108,
  Ts = we ? Symbol.for('react.profiler') : 60114,
  Ps = we ? Symbol.for('react.provider') : 60109,
  Rs = we ? Symbol.for('react.context') : 60110,
  Wc = we ? Symbol.for('react.async_mode') : 60111,
  _s = we ? Symbol.for('react.concurrent_mode') : 60111,
  Ls = we ? Symbol.for('react.forward_ref') : 60112,
  Is = we ? Symbol.for('react.suspense') : 60113,
  y1 = we ? Symbol.for('react.suspense_list') : 60120,
  Os = we ? Symbol.for('react.memo') : 60115,
  As = we ? Symbol.for('react.lazy') : 60116,
  w1 = we ? Symbol.for('react.block') : 60121,
  b1 = we ? Symbol.for('react.fundamental') : 60117,
  $1 = we ? Symbol.for('react.responder') : 60118,
  x1 = we ? Symbol.for('react.scope') : 60119;
function tt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Uc:
        switch (((e = e.type), e)) {
          case Wc:
          case _s:
          case Ss:
          case Ts:
          case Cs:
          case Is:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Rs:
              case Ls:
              case As:
              case Os:
              case Ps:
                return e;
              default:
                return t;
            }
        }
      case Vc:
        return t;
    }
  }
}
function ym(e) {
  return tt(e) === _s;
}
Q.AsyncMode = Wc;
Q.ConcurrentMode = _s;
Q.ContextConsumer = Rs;
Q.ContextProvider = Ps;
Q.Element = Uc;
Q.ForwardRef = Ls;
Q.Fragment = Ss;
Q.Lazy = As;
Q.Memo = Os;
Q.Portal = Vc;
Q.Profiler = Ts;
Q.StrictMode = Cs;
Q.Suspense = Is;
Q.isAsyncMode = function (e) {
  return ym(e) || tt(e) === Wc;
};
Q.isConcurrentMode = ym;
Q.isContextConsumer = function (e) {
  return tt(e) === Rs;
};
Q.isContextProvider = function (e) {
  return tt(e) === Ps;
};
Q.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Uc;
};
Q.isForwardRef = function (e) {
  return tt(e) === Ls;
};
Q.isFragment = function (e) {
  return tt(e) === Ss;
};
Q.isLazy = function (e) {
  return tt(e) === As;
};
Q.isMemo = function (e) {
  return tt(e) === Os;
};
Q.isPortal = function (e) {
  return tt(e) === Vc;
};
Q.isProfiler = function (e) {
  return tt(e) === Ts;
};
Q.isStrictMode = function (e) {
  return tt(e) === Cs;
};
Q.isSuspense = function (e) {
  return tt(e) === Is;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ss ||
    e === _s ||
    e === Ts ||
    e === Cs ||
    e === Is ||
    e === y1 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === As ||
        e.$$typeof === Os ||
        e.$$typeof === Ps ||
        e.$$typeof === Rs ||
        e.$$typeof === Ls ||
        e.$$typeof === b1 ||
        e.$$typeof === $1 ||
        e.$$typeof === x1 ||
        e.$$typeof === w1))
  );
};
Q.typeOf = tt;
function wm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var bm = { exports: {} },
  W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == 'function' && Symbol.for,
  Kc = be ? Symbol.for('react.element') : 60103,
  Qc = be ? Symbol.for('react.portal') : 60106,
  Ms = be ? Symbol.for('react.fragment') : 60107,
  Ns = be ? Symbol.for('react.strict_mode') : 60108,
  Ds = be ? Symbol.for('react.profiler') : 60114,
  zs = be ? Symbol.for('react.provider') : 60109,
  Bs = be ? Symbol.for('react.context') : 60110,
  Xc = be ? Symbol.for('react.async_mode') : 60111,
  Hs = be ? Symbol.for('react.concurrent_mode') : 60111,
  js = be ? Symbol.for('react.forward_ref') : 60112,
  Fs = be ? Symbol.for('react.suspense') : 60113,
  k1 = be ? Symbol.for('react.suspense_list') : 60120,
  Us = be ? Symbol.for('react.memo') : 60115,
  Vs = be ? Symbol.for('react.lazy') : 60116,
  E1 = be ? Symbol.for('react.block') : 60121,
  S1 = be ? Symbol.for('react.fundamental') : 60117,
  C1 = be ? Symbol.for('react.responder') : 60118,
  T1 = be ? Symbol.for('react.scope') : 60119;
function nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Kc:
        switch (((e = e.type), e)) {
          case Xc:
          case Hs:
          case Ms:
          case Ds:
          case Ns:
          case Fs:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Bs:
              case js:
              case Vs:
              case Us:
              case zs:
                return e;
              default:
                return t;
            }
        }
      case Qc:
        return t;
    }
  }
}
function $m(e) {
  return nt(e) === Hs;
}
W.AsyncMode = Xc;
W.ConcurrentMode = Hs;
W.ContextConsumer = Bs;
W.ContextProvider = zs;
W.Element = Kc;
W.ForwardRef = js;
W.Fragment = Ms;
W.Lazy = Vs;
W.Memo = Us;
W.Portal = Qc;
W.Profiler = Ds;
W.StrictMode = Ns;
W.Suspense = Fs;
W.isAsyncMode = function (e) {
  return $m(e) || nt(e) === Xc;
};
W.isConcurrentMode = $m;
W.isContextConsumer = function (e) {
  return nt(e) === Bs;
};
W.isContextProvider = function (e) {
  return nt(e) === zs;
};
W.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Kc;
};
W.isForwardRef = function (e) {
  return nt(e) === js;
};
W.isFragment = function (e) {
  return nt(e) === Ms;
};
W.isLazy = function (e) {
  return nt(e) === Vs;
};
W.isMemo = function (e) {
  return nt(e) === Us;
};
W.isPortal = function (e) {
  return nt(e) === Qc;
};
W.isProfiler = function (e) {
  return nt(e) === Ds;
};
W.isStrictMode = function (e) {
  return nt(e) === Ns;
};
W.isSuspense = function (e) {
  return nt(e) === Fs;
};
W.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ms ||
    e === Hs ||
    e === Ds ||
    e === Ns ||
    e === Fs ||
    e === k1 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Vs ||
        e.$$typeof === Us ||
        e.$$typeof === zs ||
        e.$$typeof === Bs ||
        e.$$typeof === js ||
        e.$$typeof === S1 ||
        e.$$typeof === C1 ||
        e.$$typeof === T1 ||
        e.$$typeof === E1))
  );
};
W.typeOf = nt;
bm.exports = W;
var P1 = bm.exports,
  qc = P1,
  R1 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  _1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  L1 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  xm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Yc = {};
Yc[qc.ForwardRef] = L1;
Yc[qc.Memo] = xm;
function Hd(e) {
  return qc.isMemo(e) ? xm : Yc[e.$$typeof] || R1;
}
var I1 = Object.defineProperty,
  O1 = Object.getOwnPropertyNames,
  jd = Object.getOwnPropertySymbols,
  A1 = Object.getOwnPropertyDescriptor,
  M1 = Object.getPrototypeOf,
  Fd = Object.prototype;
function km(e, t, n) {
  if (typeof t != 'string') {
    if (Fd) {
      var r = M1(t);
      r && r !== Fd && km(e, r, n);
    }
    var o = O1(t);
    jd && (o = o.concat(jd(t)));
    for (var i = Hd(e), s = Hd(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!_1[a] && !(n && n[a]) && !(s && s[a]) && !(i && i[a])) {
        var c = A1(t, a);
        try {
          I1(e, a, c);
        } catch (u) {}
      }
    }
  }
  return e;
}
var N1 = km;
const D1 = _o(N1);
var Pl = 1073741823,
  Ud = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : {};
function z1() {
  var e = '__global_unique_id__';
  return (Ud[e] = (Ud[e] || 0) + 1);
}
function B1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function H1(e) {
  var t = [];
  return {
    on: function (r) {
      t.push(r);
    },
    off: function (r) {
      t = t.filter(function (o) {
        return o !== r;
      });
    },
    get: function () {
      return e;
    },
    set: function (r, o) {
      (e = r),
        t.forEach(function (i) {
          return i(e, o);
        });
    },
  };
}
function j1(e) {
  return Array.isArray(e) ? e[0] : e;
}
function F1(e, t) {
  var n,
    r,
    o = '__create-react-context-' + z1() + '__',
    i = (function (l) {
      gn(a, l);
      function a() {
        for (var u, d = arguments.length, f = new Array(d), g = 0; g < d; g++) f[g] = arguments[g];
        return (u = l.call.apply(l, [this].concat(f)) || this), (u.emitter = H1(u.props.value)), u;
      }
      var c = a.prototype;
      return (
        (c.getChildContext = function () {
          var d;
          return (d = {}), (d[o] = this.emitter), d;
        }),
        (c.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var f = this.props.value,
              g = d.value,
              y;
            B1(f, g)
              ? (y = 0)
              : ((y = typeof t == 'function' ? t(f, g) : Pl), (y |= 0), y !== 0 && this.emitter.set(d.value, y));
          }
        }),
        (c.render = function () {
          return this.props.children;
        }),
        a
      );
    })(b.Component);
  i.childContextTypes = ((n = {}), (n[o] = Id.object.isRequired), n);
  var s = (function (l) {
    gn(a, l);
    function a() {
      for (var u, d = arguments.length, f = new Array(d), g = 0; g < d; g++) f[g] = arguments[g];
      return (
        (u = l.call.apply(l, [this].concat(f)) || this),
        (u.observedBits = void 0),
        (u.state = { value: u.getValue() }),
        (u.onUpdate = function (y, $) {
          var A = u.observedBits | 0;
          A & $ && u.setState({ value: u.getValue() });
        }),
        u
      );
    }
    var c = a.prototype;
    return (
      (c.componentWillReceiveProps = function (d) {
        var f = d.observedBits;
        this.observedBits = f == null ? Pl : f;
      }),
      (c.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d == null ? Pl : d;
      }),
      (c.componentWillUnmount = function () {
        this.context[o] && this.context[o].off(this.onUpdate);
      }),
      (c.getValue = function () {
        return this.context[o] ? this.context[o].get() : e;
      }),
      (c.render = function () {
        return j1(this.props.children)(this.state.value);
      }),
      a
    );
  })(b.Component);
  return (s.contextTypes = ((r = {}), (r[o] = Id.object), r)), { Provider: i, Consumer: s };
}
var U1 = b.createContext || F1,
  Em = function (t) {
    var n = U1();
    return (n.displayName = t), n;
  },
  V1 = Em('Router-History'),
  Tr = Em('Router'),
  No = (function (e) {
    gn(t, e),
      (t.computeRootMatch = function (o) {
        return { path: '/', url: '/', params: {}, isExact: o === '/' };
      });
    function t(r) {
      var o;
      return (
        (o = e.call(this, r) || this),
        (o.state = { location: r.history.location }),
        (o._isMounted = !1),
        (o._pendingLocation = null),
        r.staticContext ||
          (o.unlisten = r.history.listen(function (i) {
            o._pendingLocation = i;
          })),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var o = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (i) {
              o._isMounted && o.setState({ location: i });
            })),
          this._pendingLocation && this.setState({ location: this._pendingLocation });
      }),
      (n.componentWillUnmount = function () {
        this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
      }),
      (n.render = function () {
        return b.createElement(
          Tr.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          b.createElement(V1.Provider, { children: this.props.children || null, value: this.props.history })
        );
      }),
      t
    );
  })(b.Component);
b.Component;
var W1 = (function (e) {
    gn(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (n.componentDidUpdate = function (o) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, o);
      }),
      (n.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (n.render = function () {
        return null;
      }),
      t
    );
  })(b.Component),
  Rl = {},
  K1 = 1e4,
  Vd = 0;
function Q1(e) {
  if (Rl[e]) return Rl[e];
  var t = vm.compile(e);
  return Vd < K1 && ((Rl[e] = t), Vd++), t;
}
function Wd(e, t) {
  return e === void 0 && (e = '/'), t === void 0 && (t = {}), e === '/' ? e : Q1(e)(t, { pretty: !0 });
}
function X1(e) {
  var t = e.computedMatch,
    n = e.to,
    r = e.push,
    o = r === void 0 ? !1 : r;
  return b.createElement(Tr.Consumer, null, function (i) {
    i || Fn(!1);
    var s = i.history,
      l = i.staticContext,
      a = o ? s.push : s.replace,
      c = He(t ? (typeof n == 'string' ? Wd(n, t.params) : Ve({}, n, { pathname: Wd(n.pathname, t.params) })) : n);
    return l
      ? (a(c), null)
      : b.createElement(W1, {
          onMount: function () {
            a(c);
          },
          onUpdate: function (d, f) {
            var g = He(f.to);
            Z0(g, Ve({}, c, { key: g.key })) || a(c);
          },
          to: n,
        });
  });
}
var Kd = {},
  q1 = 1e4,
  Qd = 0;
function Y1(e, t) {
  var n = '' + t.end + t.strict + t.sensitive,
    r = Kd[n] || (Kd[n] = {});
  if (r[e]) return r[e];
  var o = [],
    i = vm(e, o, t),
    s = { regexp: i, keys: o };
  return Qd < q1 && ((r[e] = s), Qd++), s;
}
function Nn(e, t) {
  t === void 0 && (t = {}), (typeof t == 'string' || Array.isArray(t)) && (t = { path: t });
  var n = t,
    r = n.path,
    o = n.exact,
    i = o === void 0 ? !1 : o,
    s = n.strict,
    l = s === void 0 ? !1 : s,
    a = n.sensitive,
    c = a === void 0 ? !1 : a,
    u = [].concat(r);
  return u.reduce(function (d, f) {
    if (!f && f !== '') return null;
    if (d) return d;
    var g = Y1(f, { end: i, strict: l, sensitive: c }),
      y = g.regexp,
      $ = g.keys,
      A = y.exec(e);
    if (!A) return null;
    var h = A[0],
      p = A.slice(1),
      m = e === h;
    return i && !m
      ? null
      : {
          path: f,
          url: f === '/' && h === '' ? '/' : h,
          isExact: m,
          params: $.reduce(function (w, T, P) {
            return (w[T.name] = p[P]), w;
          }, {}),
        };
  }, null);
}
function G1(e) {
  return b.Children.count(e) === 0;
}
var Ia = (function (e) {
  gn(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var o = this;
      return b.createElement(Tr.Consumer, null, function (i) {
        i || Fn(!1);
        var s = o.props.location || i.location,
          l = o.props.computedMatch ? o.props.computedMatch : o.props.path ? Nn(s.pathname, o.props) : i.match,
          a = Ve({}, i, { location: s, match: l }),
          c = o.props,
          u = c.children,
          d = c.component,
          f = c.render;
        return (
          Array.isArray(u) && G1(u) && (u = null),
          b.createElement(
            Tr.Provider,
            { value: a },
            a.match
              ? u
                ? typeof u == 'function'
                  ? u(a)
                  : u
                : d
                ? b.createElement(d, a)
                : f
                ? f(a)
                : null
              : typeof u == 'function'
              ? u(a)
              : null
          )
        );
      });
    }),
    t
  );
})(b.Component);
function Gc(e) {
  return e.charAt(0) === '/' ? e : '/' + e;
}
function Z1(e, t) {
  return e ? Ve({}, t, { pathname: Gc(e) + t.pathname }) : t;
}
function J1(e, t) {
  if (!e) return t;
  var n = Gc(e);
  return t.pathname.indexOf(n) !== 0 ? t : Ve({}, t, { pathname: t.pathname.substr(n.length) });
}
function Xd(e) {
  return typeof e == 'string' ? e : it(e);
}
function _l(e) {
  return function () {
    Fn(!1);
  };
}
function qd() {}
b.Component;
b.Component;
function ew(e) {
  var t = 'withRouter(' + (e.displayName || e.name) + ')',
    n = function (o) {
      var i = o.wrappedComponentRef,
        s = wm(o, ['wrappedComponentRef']);
      return b.createElement(Tr.Consumer, null, function (l) {
        return l || Fn(!1), b.createElement(e, Ve({}, s, l, { ref: i }));
      });
    };
  return (n.displayName = t), (n.WrappedComponent = e), D1(n, e);
}
b.useContext;
const tw = 'modulepreload',
  nw = function (e) {
    return '/' + e;
  },
  Yd = {},
  Pt = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((i) => {
        if (((i = nw(i)), i in Yd)) return;
        Yd[i] = !0;
        const s = i.endsWith('.css'),
          l = s ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let u = o.length - 1; u >= 0; u--) {
            const d = o[u];
            if (d.href === i && (!s || d.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const c = document.createElement('link');
        if (
          ((c.rel = s ? 'stylesheet' : tw),
          s || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = i),
          document.head.appendChild(c),
          s)
        )
          return new Promise((u, d) => {
            c.addEventListener('load', u),
              c.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    ).then(() => t());
  },
  Qn = {
    allRenderFn: !1,
    cmpDidLoad: !0,
    cmpDidUnload: !1,
    cmpDidUpdate: !0,
    cmpDidRender: !0,
    cmpWillLoad: !0,
    cmpWillUpdate: !0,
    cmpWillRender: !0,
    connectedCallback: !0,
    disconnectedCallback: !0,
    element: !0,
    event: !0,
    hasRenderFn: !0,
    lifecycle: !0,
    hostListener: !0,
    hostListenerTargetWindow: !0,
    hostListenerTargetDocument: !0,
    hostListenerTargetBody: !0,
    hostListenerTargetParent: !1,
    hostListenerTarget: !0,
    member: !0,
    method: !0,
    mode: !0,
    observeAttribute: !0,
    prop: !0,
    propMutable: !0,
    reflect: !0,
    scoped: !0,
    shadowDom: !0,
    slot: !0,
    cssAnnotations: !0,
    state: !0,
    style: !0,
    svg: !0,
    updatable: !0,
    vdomAttribute: !0,
    vdomXlink: !0,
    vdomClass: !0,
    vdomFunctional: !0,
    vdomKey: !0,
    vdomListener: !0,
    vdomRef: !0,
    vdomPropOrAttr: !0,
    vdomRender: !0,
    vdomStyle: !0,
    vdomText: !0,
    watchCallback: !0,
    taskQueue: !0,
    hotModuleReplacement: !1,
    isDebug: !1,
    isDev: !1,
    isTesting: !1,
    hydrateServerSide: !1,
    hydrateClientSide: !1,
    lifecycleDOMEvents: !1,
    lazyLoad: !1,
    profile: !1,
    slotRelocation: !0,
    appendChildSlotFix: !1,
    cloneNodeFix: !1,
    hydratedAttribute: !1,
    hydratedClass: !0,
    safari10: !1,
    scriptDataOpts: !1,
    scopedSlotTextContentFix: !1,
    shadowDomShim: !1,
    slotChildNodesFix: !1,
    invisiblePrehydration: !0,
    propBoolean: !0,
    propNumber: !0,
    propString: !0,
    cssVarShim: !1,
    constructableCSS: !0,
    cmpShouldUpdate: !0,
    devTools: !1,
    dynamicImportShim: !1,
    shadowDelegatesFocus: !0,
    initializeNextTick: !1,
    asyncLoading: !1,
    asyncQueue: !1,
    transformTagName: !1,
    attachStyles: !0,
  };
let Xn,
  Sm,
  Ws,
  Cm = !1,
  Gi = !1,
  Zc = !1,
  Qe = !1,
  Gd = null,
  Oa = !1;
const rw = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
  Dn =
    (e, t = '') =>
    () => {},
  Zd = 'http://www.w3.org/1999/xlink',
  Jd = {},
  ow = 'http://www.w3.org/2000/svg',
  iw = 'http://www.w3.org/1999/xhtml',
  sw = (e) => e != null,
  Jc = (e) => ((e = typeof e), e === 'object' || e === 'function');
function lw(e) {
  var t, n, r;
  return (r =
    (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null ||
    n === void 0
      ? void 0
      : n.getAttribute('content')) !== null && r !== void 0
    ? r
    : void 0;
}
const H = (e, t, ...n) => {
    let r = null,
      o = null,
      i = null,
      s = !1,
      l = !1;
    const a = [],
      c = (d) => {
        for (let f = 0; f < d.length; f++)
          (r = d[f]),
            Array.isArray(r)
              ? c(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((s = typeof e != 'function' && !Jc(r)) && (r = String(r)),
                s && l ? (a[a.length - 1].$text$ += r) : a.push(s ? Zi(null, r) : r),
                (l = s));
      };
    if ((c(n), t)) {
      t.key && (o = t.key), t.name && (i = t.name);
      {
        const d = t.className || t.class;
        d &&
          (t.class =
            typeof d != 'object'
              ? d
              : Object.keys(d)
                  .filter((f) => d[f])
                  .join(' '));
      }
    }
    if (typeof e == 'function') return e(t === null ? {} : t, a, cw);
    const u = Zi(e, null);
    return (u.$attrs$ = t), a.length > 0 && (u.$children$ = a), (u.$key$ = o), (u.$name$ = i), u;
  },
  Zi = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  qt = {},
  aw = (e) => e && e.$tag$ === qt,
  cw = { forEach: (e, t) => e.map(ef).forEach(t), map: (e, t) => e.map(ef).map(t).map(uw) },
  ef = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  uw = (e) => {
    if (typeof e.vtag == 'function') {
      const n = Object.assign({}, e.vattrs);
      return e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), H(e.vtag, n, ...(e.vchildren || []));
    }
    const t = Zi(e.vtag, e.vtext);
    return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
  },
  dw = (e) => Dm.map((t) => t(e)).find((t) => !!t),
  fw = (e) => Dm.push(e),
  pw = (e) => Ir(e).$modeName$,
  hw = (e, t) =>
    e != null && !Jc(e)
      ? t & 4
        ? e === 'false'
          ? !1
          : e === '' || !!e
        : t & 2
        ? parseFloat(e)
        : t & 1
        ? String(e)
        : e
      : e,
  mw = (e) => e,
  ut = (e, t, n) => {
    const r = mw(e);
    return { emit: (o) => gw(r, t, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: o }) };
  },
  gw = (e, t, n) => {
    const r = Ce.ce(t, n);
    return e.dispatchEvent(r), r;
  },
  tf = new WeakMap(),
  vw = (e, t, n) => {
    let r = es.get(e);
    Uw && n ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t)) : (r = t),
      es.set(e, r);
  },
  yw = (e, t, n, r) => {
    var o;
    let i = Tm(t, n);
    const s = es.get(i);
    if (((e = e.nodeType === 11 ? e : kt), s))
      if (typeof s == 'string') {
        e = e.head || e;
        let l = tf.get(e),
          a;
        if ((l || tf.set(e, (l = new Set())), !l.has(i))) {
          {
            (a = kt.createElement('style')), (a.innerHTML = s);
            const c = (o = Ce.$nonce$) !== null && o !== void 0 ? o : lw(kt);
            c != null && a.setAttribute('nonce', c), e.insertBefore(a, e.querySelector('link'));
          }
          l && l.add(i);
        }
      } else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return i;
  },
  ww = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      o = Dn('attachStyles', t.$tagName$),
      i = yw(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    r & 10 && ((n['s-sc'] = i), n.classList.add(i + '-h'), r & 2 && n.classList.add(i + '-s')), o();
  },
  Tm = (e, t) => 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
  nf = (e, t, n, r, o, i) => {
    if (n !== r) {
      let s = lf(e, t),
        l = t.toLowerCase();
      if (t === 'class') {
        const a = e.classList,
          c = rf(n),
          u = rf(r);
        a.remove(...c.filter((d) => d && !u.includes(d))), a.add(...u.filter((d) => d && !c.includes(d)));
      } else if (t === 'style') {
        for (const a in n) (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
        for (const a in r)
          (!n || r[a] !== n[a]) && (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
      } else if (t !== 'key')
        if (t === 'ref') r && r(e);
        else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
          t[2] === '-' ? (t = t.slice(3)) : lf(Ks, l) ? (t = l.slice(2)) : (t = l[2] + t.slice(3)),
            n && Ce.rel(e, t, n, !1),
            r && Ce.ael(e, t, r, !1);
        else {
          const a = Jc(r);
          if ((s || (a && r !== null)) && !o)
            try {
              if (e.tagName.includes('-')) e[t] = r;
              else {
                const u = r == null ? '' : r;
                t === 'list' ? (s = !1) : (n == null || e[t] != u) && (e[t] = u);
              }
            } catch (u) {}
          let c = !1;
          l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
            r == null || r === !1
              ? (r !== !1 || e.getAttribute(t) === '') && (c ? e.removeAttributeNS(Zd, t) : e.removeAttribute(t))
              : (!s || i & 4 || o) &&
                !a &&
                ((r = r === !0 ? '' : r), c ? e.setAttributeNS(Zd, t, r) : e.setAttribute(t, r));
        }
    }
  },
  bw = /\s/,
  rf = (e) => (e ? e.split(bw) : []),
  Pm = (e, t, n, r) => {
    const o = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || Jd,
      s = t.$attrs$ || Jd;
    for (r in i) r in s || nf(o, r, i[r], void 0, n, t.$flags$);
    for (r in s) nf(o, r, i[r], s[r], n, t.$flags$);
  },
  Ji = (e, t, n, r) => {
    const o = t.$children$[n];
    let i = 0,
      s,
      l,
      a;
    if (
      (Cm || ((Zc = !0), o.$tag$ === 'slot' && (Xn && r.classList.add(Xn + '-s'), (o.$flags$ |= o.$children$ ? 2 : 1))),
      o.$text$ !== null)
    )
      s = o.$elm$ = kt.createTextNode(o.$text$);
    else if (o.$flags$ & 1) s = o.$elm$ = kt.createTextNode('');
    else {
      if (
        (Qe || (Qe = o.$tag$ === 'svg'),
        (s = o.$elm$ = kt.createElementNS(Qe ? ow : iw, o.$flags$ & 2 ? 'slot-fb' : o.$tag$)),
        Qe && o.$tag$ === 'foreignObject' && (Qe = !1),
        Pm(null, o, Qe),
        sw(Xn) && s['s-si'] !== Xn && s.classList.add((s['s-si'] = Xn)),
        o.$children$)
      )
        for (i = 0; i < o.$children$.length; ++i) (l = Ji(e, o, i, s)), l && s.appendChild(l);
      o.$tag$ === 'svg' ? (Qe = !1) : s.tagName === 'foreignObject' && (Qe = !0);
    }
    return (
      (s['s-hn'] = Ws),
      o.$flags$ & 3 &&
        ((s['s-sr'] = !0),
        (s['s-cr'] = Sm),
        (s['s-sn'] = o.$name$ || ''),
        (a = e && e.$children$ && e.$children$[n]),
        a && a.$tag$ === o.$tag$ && e.$elm$ && Co(e.$elm$, !1)),
      s
    );
  },
  Co = (e, t) => {
    Ce.$flags$ |= 1;
    const n = e.childNodes;
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r];
      o['s-hn'] !== Ws &&
        o['s-ol'] &&
        (Lm(o).insertBefore(o, eu(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (Zc = !0)),
        t && Co(o, t);
    }
    Ce.$flags$ &= -2;
  },
  Rm = (e, t, n, r, o, i) => {
    let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
      l;
    for (s.shadowRoot && s.tagName === Ws && (s = s.shadowRoot); o <= i; ++o)
      r[o] && ((l = Ji(null, n, o, e)), l && ((r[o].$elm$ = l), s.insertBefore(l, eu(t))));
  },
  _m = (e, t, n) => {
    for (let r = t; r <= n; ++r) {
      const o = e[r];
      if (o) {
        const i = o.$elm$;
        Am(o), i && ((Gi = !0), i['s-ol'] ? i['s-ol'].remove() : Co(i, !0), i.remove());
      }
    }
  },
  $w = (e, t, n, r) => {
    let o = 0,
      i = 0,
      s = 0,
      l = 0,
      a = t.length - 1,
      c = t[0],
      u = t[a],
      d = r.length - 1,
      f = r[0],
      g = r[d],
      y,
      $;
    for (; o <= a && i <= d; )
      if (c == null) c = t[++o];
      else if (u == null) u = t[--a];
      else if (f == null) f = r[++i];
      else if (g == null) g = r[--d];
      else if (li(c, f)) qn(c, f), (c = t[++o]), (f = r[++i]);
      else if (li(u, g)) qn(u, g), (u = t[--a]), (g = r[--d]);
      else if (li(c, g))
        (c.$tag$ === 'slot' || g.$tag$ === 'slot') && Co(c.$elm$.parentNode, !1),
          qn(c, g),
          e.insertBefore(c.$elm$, u.$elm$.nextSibling),
          (c = t[++o]),
          (g = r[--d]);
      else if (li(u, f))
        (c.$tag$ === 'slot' || g.$tag$ === 'slot') && Co(u.$elm$.parentNode, !1),
          qn(u, f),
          e.insertBefore(u.$elm$, c.$elm$),
          (u = t[--a]),
          (f = r[++i]);
      else {
        for (s = -1, l = o; l <= a; ++l)
          if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
            s = l;
            break;
          }
        s >= 0
          ? (($ = t[s]),
            $.$tag$ !== f.$tag$ ? (y = Ji(t && t[i], n, s, e)) : (qn($, f), (t[s] = void 0), (y = $.$elm$)),
            (f = r[++i]))
          : ((y = Ji(t && t[i], n, i, e)), (f = r[++i])),
          y && Lm(c.$elm$).insertBefore(y, eu(c.$elm$));
      }
    o > a ? Rm(e, r[d + 1] == null ? null : r[d + 1].$elm$, n, r, i, d) : i > d && _m(t, o, a);
  },
  li = (e, t) => (e.$tag$ === t.$tag$ ? (e.$tag$ === 'slot' ? e.$name$ === t.$name$ : e.$key$ === t.$key$) : !1),
  eu = (e) => (e && e['s-ol']) || e,
  Lm = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  qn = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      r = e.$children$,
      o = t.$children$,
      i = t.$tag$,
      s = t.$text$;
    let l;
    s === null
      ? ((Qe = i === 'svg' ? !0 : i === 'foreignObject' ? !1 : Qe),
        i === 'slot' || Pm(e, t, Qe),
        r !== null && o !== null
          ? $w(n, r, t, o)
          : o !== null
          ? (e.$text$ !== null && (n.textContent = ''), Rm(n, null, t, o, 0, o.length - 1))
          : r !== null && _m(r, 0, r.length - 1),
        Qe && i === 'svg' && (Qe = !1))
      : (l = n['s-cr'])
      ? (l.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  Im = (e) => {
    const t = e.childNodes;
    let n, r, o, i, s, l;
    for (r = 0, o = t.length; r < o; r++)
      if (((n = t[r]), n.nodeType === 1)) {
        if (n['s-sr']) {
          for (s = n['s-sn'], n.hidden = !1, i = 0; i < o; i++)
            if (((l = t[i].nodeType), t[i]['s-hn'] !== n['s-hn'] || s !== '')) {
              if (l === 1 && s === t[i].getAttribute('slot')) {
                n.hidden = !0;
                break;
              }
            } else if (l === 1 || (l === 3 && t[i].textContent.trim() !== '')) {
              n.hidden = !0;
              break;
            }
        }
        Im(n);
      }
  },
  wt = [],
  Om = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = 0;
    const a = e.childNodes,
      c = a.length;
    for (; l < c; l++) {
      if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
        for (r = n.parentNode.childNodes, o = t['s-sn'], s = r.length - 1; s >= 0; s--)
          (n = r[s]),
            !n['s-cn'] &&
              !n['s-nr'] &&
              n['s-hn'] !== t['s-hn'] &&
              (of(n, o)
                ? ((i = wt.find((u) => u.$nodeToRelocate$ === n)),
                  (Gi = !0),
                  (n['s-sn'] = n['s-sn'] || o),
                  i ? (i.$slotRefNode$ = t) : wt.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n['s-sr'] &&
                    wt.map((u) => {
                      of(u.$nodeToRelocate$, n['s-sn']) &&
                        ((i = wt.find((d) => d.$nodeToRelocate$ === n)),
                        i && !u.$slotRefNode$ && (u.$slotRefNode$ = i.$slotRefNode$));
                    }))
                : wt.some((u) => u.$nodeToRelocate$ === n) || wt.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && Om(t);
    }
  },
  of = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute('slot') === null && t === '') || e.getAttribute('slot') === t
      : e['s-sn'] === t
      ? !0
      : t === '',
  Am = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(Am);
  },
  xw = (e, t) => {
    const n = e.$hostElement$,
      r = e.$cmpMeta$,
      o = e.$vnode$ || Zi(null, null),
      i = aw(t) ? t : H(null, null, t);
    (Ws = n.tagName),
      r.$attrsToReflect$ && ((i.$attrs$ = i.$attrs$ || {}), r.$attrsToReflect$.map(([s, l]) => (i.$attrs$[l] = n[s]))),
      (i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = o.$elm$ = n.shadowRoot || n),
      (Xn = n['s-sc']),
      (Sm = n['s-cr']),
      (Cm = (r.$flags$ & 1) !== 0),
      (Gi = !1),
      qn(o, i);
    {
      if (((Ce.$flags$ |= 1), Zc)) {
        Om(i.$elm$);
        let s,
          l,
          a,
          c,
          u,
          d,
          f = 0;
        for (; f < wt.length; f++)
          (s = wt[f]),
            (l = s.$nodeToRelocate$),
            l['s-ol'] || ((a = kt.createTextNode('')), (a['s-nr'] = l), l.parentNode.insertBefore((l['s-ol'] = a), l));
        for (f = 0; f < wt.length; f++)
          if (((s = wt[f]), (l = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              c = s.$slotRefNode$.parentNode, u = s.$slotRefNode$.nextSibling, a = l['s-ol'];
              (a = a.previousSibling);

            )
              if (
                ((d = a['s-nr']),
                d && d['s-sn'] === l['s-sn'] && c === d.parentNode && ((d = d.nextSibling), !d || !d['s-nr']))
              ) {
                u = d;
                break;
              }
            ((!u && c !== l.parentNode) || l.nextSibling !== u) &&
              l !== u &&
              (!l['s-hn'] && l['s-ol'] && (l['s-hn'] = l['s-ol'].parentNode.nodeName), c.insertBefore(l, u));
          } else l.nodeType === 1 && (l.hidden = !0);
      }
      Gi && Im(i.$elm$), (Ce.$flags$ &= -2), (wt.length = 0);
    }
  },
  kw = (e, t) => {},
  tu = (e, t) => ((e.$flags$ |= 16), kw(e, e.$ancestorComponent$), vn(() => Ew(e, t))),
  Ew = (e, t) => {
    const n = e.$hostElement$,
      r = Dn('scheduleUpdate', e.$cmpMeta$.$tagName$),
      o = n;
    let i;
    return (
      t ? (i = yr(o, 'componentWillLoad')) : (i = yr(o, 'componentWillUpdate')),
      (i = sf(i, () => yr(o, 'componentWillRender'))),
      r(),
      sf(i, () => Sw(e, o, t))
    );
  },
  sf = (e, t) => (e instanceof Promise ? e.then(t) : t()),
  Sw = async (e, t, n) => {
    const r = e.$hostElement$,
      o = Dn('update', e.$cmpMeta$.$tagName$);
    r['s-rc'], n && ww(e);
    const i = Dn('render', e.$cmpMeta$.$tagName$);
    Cw(e, t, r), i(), o(), Tw(e);
  },
  Cw = (e, t, n) => {
    try {
      (Gd = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Qn.hasRenderFn || Qn.reflect) && (Qn.vdomRender || Qn.reflect) && (Qn.hydrateServerSide || xw(e, t));
    } catch (l) {
      Do(l, e.$hostElement$);
    }
    return (Gd = null), null;
  },
  Tw = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = Dn('postUpdate', t),
      o = n;
    e.$ancestorComponent$,
      yr(o, 'componentDidRender'),
      e.$flags$ & 64 ? (yr(o, 'componentDidUpdate'), r()) : ((e.$flags$ |= 64), yr(o, 'componentDidLoad'), r());
  },
  Aa = (e) => {
    {
      const t = Ir(e),
        n = t.$hostElement$.isConnected;
      return n && (t.$flags$ & 18) === 2 && tu(t, !1), n;
    }
  },
  yr = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (r) {
        Do(r);
      }
  },
  Pw = (e, t) => Ir(e).$instanceValues$.get(t),
  Rw = (e, t, n, r) => {
    const o = Ir(e),
      i = e,
      s = o.$instanceValues$.get(t),
      l = o.$flags$,
      a = i;
    n = hw(n, r.$members$[t][0]);
    const c = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !c) {
      o.$instanceValues$.set(t, n);
      {
        if (r.$watchers$ && l & 128) {
          const d = r.$watchers$[t];
          d &&
            d.map((f) => {
              try {
                a[f](n, s, t);
              } catch (g) {
                Do(g, i);
              }
            });
        }
        if ((l & 18) === 2) {
          if (a.componentShouldUpdate && a.componentShouldUpdate(n, s, t) === !1) return;
          tu(o, !1);
        }
      }
    }
  },
  _w = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const r = Object.entries(t.$members$),
        o = e.prototype;
      r.map(([i, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(o, i, {
            get() {
              return Pw(this, i);
            },
            set(l) {
              Rw(this, i, l, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const i = new Map();
        (o.attributeChangedCallback = function (s, l, a) {
          Ce.jmp(() => {
            const c = i.get(s);
            if (this.hasOwnProperty(c)) (a = this[c]), delete this[c];
            else if (o.hasOwnProperty(c) && typeof this[c] == 'number' && this[c] == a) return;
            this[c] = a === null && typeof this[c] == 'boolean' ? !1 : a;
          });
        }),
          (e.observedAttributes = r
            .filter(([s, l]) => l[0] & 15)
            .map(([s, l]) => {
              const a = l[1] || s;
              return i.set(a, s), l[0] & 512 && t.$attrsToReflect$.push([s, a]), a;
            }));
      }
    }
    return e;
  },
  Lw = async (e, t, n, r, o) => {
    if (
      !(t.$flags$ & 32) &&
      ((t.$flags$ |= 32),
      (o = e.constructor),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      o.style)
    ) {
      let s = o.style;
      typeof s != 'string' && (s = s[(t.$modeName$ = dw(e))]);
      const l = Tm(n, t.$modeName$);
      if (!es.has(l)) {
        const a = Dn('registerStyles', n.$tagName$);
        vw(l, s, !!(n.$flags$ & 1)), a();
      }
    }
    t.$ancestorComponent$, (() => tu(t, !0))();
  },
  Iw = (e) => {},
  Ow = (e) => {
    if (!(Ce.$flags$ & 1)) {
      const t = Ir(e),
        n = t.$cmpMeta$,
        r = Dn('connectedCallback', n.$tagName$);
      t.$flags$ & 1
        ? (Mm(e, t, n.$listeners$), Iw(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && Aw(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([o, [i]]) => {
              if (i & 31 && e.hasOwnProperty(o)) {
                const s = e[o];
                delete e[o], (e[o] = s);
              }
            }),
          Lw(e, t, n)),
        r();
    }
  },
  Aw = (e) => {
    const t = (e['s-cr'] = kt.createComment(''));
    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
  },
  Mw = (e) => {
    if (!(Ce.$flags$ & 1)) {
      const t = Ir(e);
      t.$rmListeners$ && (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  Ot = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    (n.$members$ = t[2]), (n.$listeners$ = t[3]), (n.$watchers$ = e.$watchers$), (n.$attrsToReflect$ = []);
    const r = e.prototype.connectedCallback,
      o = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          Bw(this, n);
        },
        connectedCallback() {
          Ow(this), r && r.call(this);
        },
        disconnectedCallback() {
          Mw(this), o && o.call(this);
        },
        __attachShadow() {
          this.attachShadow({ mode: 'open', delegatesFocus: !!(n.$flags$ & 16) });
        },
      }),
      (e.is = n.$tagName$),
      _w(e, n)
    );
  },
  Mm = (e, t, n, r) => {
    n &&
      n.map(([o, i, s]) => {
        const l = Dw(e, o),
          a = Nw(t, s),
          c = zw(o);
        Ce.ael(l, i, a, c), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Ce.rel(l, i, a, c));
      });
  },
  Nw = (e, t) => (n) => {
    try {
      Qn.lazyLoad || e.$hostElement$[t](n);
    } catch (r) {
      Do(r);
    }
  },
  Dw = (e, t) => (t & 4 ? kt : t & 8 ? Ks : t & 16 ? kt.body : e),
  zw = (e) => (jw ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0),
  Nm = new WeakMap(),
  Ir = (e) => Nm.get(e),
  Bw = (e, t) => {
    const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
    return Mm(e, n, t.$listeners$), Nm.set(e, n);
  },
  lf = (e, t) => t in e,
  Do = (e, t) => (0, console.error)(e, t),
  es = new Map(),
  Dm = [],
  Ks = typeof window < 'u' ? window : {},
  kt = Ks.document || { head: {} },
  At = Ks.HTMLElement || class {},
  Ce = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Hw = (e) => {
    Object.assign(Ce, e);
  },
  jw = (() => {
    let e = !1;
    try {
      kt.addEventListener(
        'e',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            e = !0;
          },
        })
      );
    } catch (t) {}
    return e;
  })(),
  Fw = (e) => Promise.resolve(e),
  Uw = (() => {
    try {
      return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function';
    } catch (e) {}
    return !1;
  })(),
  Ma = [],
  zm = [],
  Bm = (e, t) => (n) => {
    e.push(n), Oa || ((Oa = !0), t && Ce.$flags$ & 4 ? Vw(Na) : Ce.raf(Na));
  },
  af = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        Do(n);
      }
    e.length = 0;
  },
  Na = () => {
    af(Ma), af(zm), (Oa = Ma.length > 0) && Ce.raf(Na);
  },
  Vw = (e) => Fw().then(e),
  To = Bm(Ma, !1),
  vn = Bm(zm, !0);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const fe = typeof window < 'u' ? window : void 0,
  Ll = typeof document < 'u' ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Po = (e, t) => {
    e.componentOnReady ? e.componentOnReady().then((n) => t(n)) : zt(() => t(e));
  },
  Ww = (e) => e.componentOnReady !== void 0,
  Hm = (e, t = []) => {
    const n = {};
    return (
      t.forEach((r) => {
        e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
      }),
      n
    );
  },
  Kw = [
    'role',
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-braillelabel',
    'aria-brailleroledescription',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colindextext',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-description',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowindextext',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
  ],
  Qw = (e, t) => {
    let n = Kw;
    return t && t.length > 0 && (n = n.filter((r) => !t.includes(r))), Hm(e, n);
  },
  Wk = (e, t, n, r) => {
    var o;
    if (typeof window < 'u') {
      const i = window,
        s = (o = i == null ? void 0 : i.Ionic) === null || o === void 0 ? void 0 : o.config;
      if (s) {
        const l = s.get('_ael');
        if (l) return l(e, t, n, r);
        if (s._ael) return s._ael(e, t, n, r);
      }
    }
    return e.addEventListener(t, n, r);
  },
  Kk = (e, t, n, r) => {
    var o;
    if (typeof window < 'u') {
      const i = window,
        s = (o = i == null ? void 0 : i.Ionic) === null || o === void 0 ? void 0 : o.config;
      if (s) {
        const l = s.get('_rel');
        if (l) return l(e, t, n, r);
        if (s._rel) return s._rel(e, t, n, r);
      }
    }
    return e.removeEventListener(t, n, r);
  },
  zt = (e) =>
    typeof __zone_symbol__requestAnimationFrame == 'function'
      ? __zone_symbol__requestAnimationFrame(e)
      : typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame(e)
      : setTimeout(e),
  jm = (e, t, n) => Math.max(e, Math.min(t, n)),
  De = (e, t) => {
    if (!e) {
      const n = 'ASSERT: ' + t;
      console.error(n);
      debugger;
      throw new Error(n);
    }
  },
  Qk = (e) => e.timeStamp || Date.now(),
  Xk = (e) => {
    if (e) {
      const t = e.changedTouches;
      if (t && t.length > 0) {
        const n = t[0];
        return { x: n.clientX, y: n.clientY };
      }
      if (e.pageX !== void 0) return { x: e.pageX, y: e.pageY };
    }
    return { x: 0, y: 0 };
  },
  Fm = (e, t) => {
    if ((e != null || (e = {}), t != null || (t = {}), e === t)) return !0;
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n) if (!(r in t) || e[r] !== t[r]) return !1;
    return !0;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let Il;
const Xw = (e) => (
    e.forEach((t) => {
      for (const n in t)
        if (t.hasOwnProperty(n)) {
          const r = t[n];
          if (n === 'easing') {
            const o = 'animation-timing-function';
            (t[o] = r), delete t[n];
          } else {
            const o = qw(n);
            o !== n && ((t[o] = r), delete t[n]);
          }
        }
    }),
    e
  ),
  qw = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  nu = (e) => {
    if (Il === void 0) {
      const t = e.style.animationName !== void 0,
        n = e.style.webkitAnimationName !== void 0;
      Il = !t && n ? '-webkit-' : '';
    }
    return Il;
  },
  Z = (e, t, n) => {
    const r = t.startsWith('animation') ? nu(e) : '';
    e.style.setProperty(r + t, n);
  },
  mt = (e, t) => {
    const n = t.startsWith('animation') ? nu(e) : '';
    e.style.removeProperty(n + t);
  },
  Yw = (e, t) => {
    let n;
    const r = { passive: !0 },
      o = () => {
        n && n();
      },
      i = (s) => {
        e === s.target && (o(), t(s));
      };
    return (
      e &&
        (e.addEventListener('webkitAnimationEnd', i, r),
        e.addEventListener('animationend', i, r),
        (n = () => {
          e.removeEventListener('webkitAnimationEnd', i, r), e.removeEventListener('animationend', i, r);
        })),
      o
    );
  },
  Gw = (e = []) =>
    e
      .map((t) => {
        const n = t.offset,
          r = [];
        for (const o in t) t.hasOwnProperty(o) && o !== 'offset' && r.push(`${o}: ${t[o]};`);
        return `${n * 100}% { ${r.join(' ')} }`;
      })
      .join(' '),
  cf = [],
  Zw = (e) => {
    let t = cf.indexOf(e);
    return t < 0 && (t = cf.push(e) - 1), `ion-animation-${t}`;
  },
  Jw = (e) => {
    const t = e.getRootNode !== void 0 ? e.getRootNode() : e;
    return t.head || t;
  },
  eb = (e, t, n) => {
    var r;
    const o = Jw(n),
      i = nu(n),
      s = o.querySelector('#' + e);
    if (s) return s;
    const l = ((r = n.ownerDocument) !== null && r !== void 0 ? r : document).createElement('style');
    return (
      (l.id = e), (l.textContent = `@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`), o.appendChild(l), l
    );
  },
  ai = (e = [], t) => {
    if (t !== void 0) {
      const n = Array.isArray(t) ? t : [t];
      return [...e, ...n];
    }
    return e;
  },
  tb = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = [],
      a = [],
      c = [],
      u = !1,
      d,
      f = {},
      g = [],
      y = [],
      $ = {},
      A = 0,
      h = !1,
      p = !1,
      m,
      w,
      T,
      P,
      x = !0,
      C = !1,
      z = !0,
      D,
      L,
      ce = !1;
    const Te = e,
      ue = [],
      re = [],
      K = [],
      ie = [],
      R = [],
      S = [],
      k = [],
      M = [],
      O = [],
      B = [],
      X = typeof AnimationEffect == 'function' || (fe !== void 0 && typeof fe.AnimationEffect == 'function'),
      U = typeof Element == 'function' && typeof Element.prototype.animate == 'function' && X,
      se = 100,
      de = () => B,
      Nt = (v) => (
        ie.forEach((_) => {
          _.destroy(v);
        }),
        jo(v),
        (K.length = 0),
        (ie.length = 0),
        (l.length = 0),
        Ag(),
        (u = !1),
        (z = !0),
        L
      ),
      jo = (v) => {
        hu(), v && mu();
      },
      Ig = () => {
        (h = !1), (p = !1), (z = !0), (w = void 0), (T = void 0), (P = void 0), (A = 0), (C = !1), (x = !0), (ce = !1);
      },
      Og = () => A !== 0 && !ce,
      Fo = (v, _) => ((_ != null && _.oneTimeCallback ? re : ue).push({ c: v, o: _ }), L),
      Ag = () => ((ue.length = 0), (re.length = 0), L),
      hu = () => {
        if (U)
          B.forEach((v) => {
            v.cancel();
          }),
            (B.length = 0);
        else {
          const v = K.slice();
          zt(() => {
            v.forEach((_) => {
              mt(_, 'animation-name'),
                mt(_, 'animation-duration'),
                mt(_, 'animation-timing-function'),
                mt(_, 'animation-iteration-count'),
                mt(_, 'animation-delay'),
                mt(_, 'animation-play-state'),
                mt(_, 'animation-fill-mode'),
                mt(_, 'animation-direction');
            });
          });
        }
      },
      mu = () => {
        R.forEach((v) => {
          v != null && v.parentNode && v.parentNode.removeChild(v);
        }),
          (R.length = 0);
      },
      Mg = (v) => (S.push(v), L),
      Ng = (v) => (k.push(v), L),
      Dg = (v) => (M.push(v), L),
      zg = (v) => (O.push(v), L),
      Bg = (v) => ((a = ai(a, v)), L),
      Hg = (v) => ((c = ai(c, v)), L),
      jg = (v = {}) => ((f = v), L),
      Fg = (v = []) => {
        for (const _ of v) f[_] = '';
        return L;
      },
      Ug = (v) => ((g = ai(g, v)), L),
      Vg = (v) => ((y = ai(y, v)), L),
      Wg = (v = {}) => (($ = v), L),
      Kg = (v = []) => {
        for (const _ of v) $[_] = '';
        return L;
      },
      Or = () => (i !== void 0 ? i : d ? d.getFill() : 'both'),
      Un = () => (w !== void 0 ? w : s !== void 0 ? s : d ? d.getDirection() : 'normal'),
      Ar = () => (h ? 'linear' : r !== void 0 ? r : d ? d.getEasing() : 'linear'),
      pt = () => (p ? 0 : T !== void 0 ? T : n !== void 0 ? n : d ? d.getDuration() : 0),
      Yt = () => (o !== void 0 ? o : d ? d.getIterations() : 1),
      Vn = () => (P !== void 0 ? P : t !== void 0 ? t : d ? d.getDelay() : 0),
      Qg = () => l,
      Xg = (v) => ((s = v), rt(!0), L),
      qg = (v) => ((i = v), rt(!0), L),
      Yg = (v) => ((t = v), rt(!0), L),
      Gg = (v) => ((r = v), rt(!0), L),
      Zg = (v) => (!U && v === 0 && (v = 1), (n = v), rt(!0), L),
      Jg = (v) => ((o = v), rt(!0), L),
      ev = (v) => ((d = v), L),
      tv = (v) => {
        if (v != null)
          if (v.nodeType === 1) K.push(v);
          else if (v.length >= 0) for (let _ = 0; _ < v.length; _++) K.push(v[_]);
          else console.error('Invalid addElement value');
        return L;
      },
      nv = (v) => {
        if (v != null)
          if (Array.isArray(v)) for (const _ of v) _.parent(L), ie.push(_);
          else v.parent(L), ie.push(v);
        return L;
      },
      rv = (v) => {
        const _ = l !== v;
        return (l = v), _ && ov(l), L;
      },
      ov = (v) => {
        U
          ? de().forEach((_) => {
              if (_.effect.setKeyframes) _.effect.setKeyframes(v);
              else {
                const N = new KeyframeEffect(_.effect.target, v, _.effect.getTiming());
                _.effect = N;
              }
            })
          : gu();
      },
      iv = () => {
        S.forEach((he) => he()), k.forEach((he) => he());
        const v = a,
          _ = c,
          N = f;
        K.forEach((he) => {
          const $e = he.classList;
          v.forEach((ot) => $e.add(ot)), _.forEach((ot) => $e.remove(ot));
          for (const ot in N) N.hasOwnProperty(ot) && Z(he, ot, N[ot]);
        });
      },
      sv = () => {
        Zs(), M.forEach(($e) => $e()), O.forEach(($e) => $e());
        const v = x ? 1 : 0,
          _ = g,
          N = y,
          he = $;
        K.forEach(($e) => {
          const ot = $e.classList;
          _.forEach((xn) => ot.add(xn)), N.forEach((xn) => ot.remove(xn));
          for (const xn in he) he.hasOwnProperty(xn) && Z($e, xn, he[xn]);
        }),
          ue.forEach(($e) => $e.c(v, L)),
          re.forEach(($e) => $e.c(v, L)),
          (re.length = 0),
          (z = !0),
          x && (C = !0),
          (x = !0);
      },
      Wn = () => {
        A !== 0 && (A--, A === 0 && (sv(), d && d.animationFinish()));
      },
      gu = (v = !0) => {
        mu();
        const _ = Xw(l);
        K.forEach((N) => {
          if (_.length > 0) {
            const he = Gw(_);
            D = e !== void 0 ? e : Zw(he);
            const $e = eb(D, he, N);
            R.push($e),
              Z(N, 'animation-duration', `${pt()}ms`),
              Z(N, 'animation-timing-function', Ar()),
              Z(N, 'animation-delay', `${Vn()}ms`),
              Z(N, 'animation-fill-mode', Or()),
              Z(N, 'animation-direction', Un());
            const ot = Yt() === 1 / 0 ? 'infinite' : Yt().toString();
            Z(N, 'animation-iteration-count', ot),
              Z(N, 'animation-play-state', 'paused'),
              v && Z(N, 'animation-name', `${$e.id}-alt`),
              zt(() => {
                Z(N, 'animation-name', $e.id || null);
              });
          }
        });
      },
      lv = () => {
        K.forEach((v) => {
          const _ = v.animate(l, {
            id: Te,
            delay: Vn(),
            duration: pt(),
            easing: Ar(),
            iterations: Yt(),
            fill: Or(),
            direction: Un(),
          });
          _.pause(), B.push(_);
        }),
          B.length > 0 &&
            (B[0].onfinish = () => {
              Wn();
            });
      },
      vu = (v = !0) => {
        iv(), l.length > 0 && (U ? lv() : gu(v)), (u = !0);
      },
      Mr = (v) => {
        if (((v = Math.min(Math.max(v, 0), 0.9999)), U))
          B.forEach((_) => {
            (_.currentTime = _.effect.getComputedTiming().delay + pt() * v), _.pause();
          });
        else {
          const _ = `-${pt() * v}ms`;
          K.forEach((N) => {
            l.length > 0 && (Z(N, 'animation-delay', _), Z(N, 'animation-play-state', 'paused'));
          });
        }
      },
      yu = (v) => {
        B.forEach((_) => {
          _.effect.updateTiming({
            delay: Vn(),
            duration: pt(),
            easing: Ar(),
            iterations: Yt(),
            fill: Or(),
            direction: Un(),
          });
        }),
          v !== void 0 && Mr(v);
      },
      wu = (v = !0, _) => {
        zt(() => {
          K.forEach((N) => {
            Z(N, 'animation-name', D || null),
              Z(N, 'animation-duration', `${pt()}ms`),
              Z(N, 'animation-timing-function', Ar()),
              Z(N, 'animation-delay', _ !== void 0 ? `-${_ * pt()}ms` : `${Vn()}ms`),
              Z(N, 'animation-fill-mode', Or() || null),
              Z(N, 'animation-direction', Un() || null);
            const he = Yt() === 1 / 0 ? 'infinite' : Yt().toString();
            Z(N, 'animation-iteration-count', he),
              v && Z(N, 'animation-name', `${D}-alt`),
              zt(() => {
                Z(N, 'animation-name', D || null);
              });
          });
        });
      },
      rt = (v = !1, _ = !0, N) => (
        v &&
          ie.forEach((he) => {
            he.update(v, _, N);
          }),
        U ? yu(N) : wu(_, N),
        L
      ),
      av = (v = !1, _) => (
        ie.forEach((N) => {
          N.progressStart(v, _);
        }),
        bu(),
        (h = v),
        u || vu(),
        rt(!1, !0, _),
        L
      ),
      cv = (v) => (
        ie.forEach((_) => {
          _.progressStep(v);
        }),
        Mr(v),
        L
      ),
      uv = (v, _, N) => (
        (h = !1),
        ie.forEach((he) => {
          he.progressEnd(v, _, N);
        }),
        N !== void 0 && (T = N),
        (C = !1),
        (x = !0),
        v === 0
          ? ((w = Un() === 'reverse' ? 'normal' : 'reverse'),
            w === 'reverse' && (x = !1),
            U ? (rt(), Mr(1 - _)) : ((P = (1 - _) * pt() * -1), rt(!1, !1)))
          : v === 1 && (U ? (rt(), Mr(_)) : ((P = _ * pt() * -1), rt(!1, !1))),
        v !== void 0 &&
          (Fo(
            () => {
              (T = void 0), (w = void 0), (P = void 0);
            },
            { oneTimeCallback: !0 }
          ),
          d || $u()),
        L
      ),
      bu = () => {
        u &&
          (U
            ? B.forEach((v) => {
                v.pause();
              })
            : K.forEach((v) => {
                Z(v, 'animation-play-state', 'paused');
              }),
          (ce = !0));
      },
      dv = () => (
        ie.forEach((v) => {
          v.pause();
        }),
        bu(),
        L
      ),
      fv = () => {
        (m = void 0), Wn();
      },
      Zs = () => {
        m && clearTimeout(m);
      },
      pv = () => {
        if (
          (Zs(),
          zt(() => {
            K.forEach((v) => {
              l.length > 0 && Z(v, 'animation-play-state', 'running');
            });
          }),
          l.length === 0 || K.length === 0)
        )
          Wn();
        else {
          const v = Vn() || 0,
            _ = pt() || 0,
            N = Yt() || 1;
          isFinite(N) && (m = setTimeout(fv, v + _ * N + se)),
            Yw(K[0], () => {
              Zs(),
                zt(() => {
                  hv(), zt(Wn);
                });
            });
        }
      },
      hv = () => {
        K.forEach((v) => {
          mt(v, 'animation-duration'), mt(v, 'animation-delay'), mt(v, 'animation-play-state');
        });
      },
      mv = () => {
        B.forEach((v) => {
          v.play();
        }),
          (l.length === 0 || K.length === 0) && Wn();
      },
      gv = () => {
        U ? (Mr(0), yu()) : wu();
      },
      $u = (v) =>
        new Promise((_) => {
          v != null && v.sync && ((p = !0), Fo(() => (p = !1), { oneTimeCallback: !0 })),
            u || vu(),
            C && (gv(), (C = !1)),
            z && ((A = ie.length + 1), (z = !1)),
            Fo(() => _(), { oneTimeCallback: !0 }),
            ie.forEach((N) => {
              N.play();
            }),
            U ? mv() : pv(),
            (ce = !1);
        }),
      vv = () => {
        ie.forEach((v) => {
          v.stop();
        }),
          u && (hu(), (u = !1)),
          Ig();
      },
      xu = (v, _) => {
        const N = l[0];
        return (
          N !== void 0 && (N.offset === void 0 || N.offset === 0) ? (N[v] = _) : (l = [{ offset: 0, [v]: _ }, ...l]), L
        );
      };
    return (L = {
      parentAnimation: d,
      elements: K,
      childAnimations: ie,
      id: Te,
      animationFinish: Wn,
      from: xu,
      to: (v, _) => {
        const N = l[l.length - 1];
        return (
          N !== void 0 && (N.offset === void 0 || N.offset === 1) ? (N[v] = _) : (l = [...l, { offset: 1, [v]: _ }]), L
        );
      },
      fromTo: (v, _, N) => xu(v, _).to(v, N),
      parent: ev,
      play: $u,
      pause: dv,
      stop: vv,
      destroy: Nt,
      keyframes: rv,
      addAnimation: nv,
      addElement: tv,
      update: rt,
      fill: qg,
      direction: Xg,
      iterations: Jg,
      duration: Zg,
      easing: Gg,
      delay: Yg,
      getWebAnimations: de,
      getKeyframes: Qg,
      getFill: Or,
      getDirection: Un,
      getDelay: Vn,
      getIterations: Yt,
      getEasing: Ar,
      getDuration: pt,
      afterAddRead: Dg,
      afterAddWrite: zg,
      afterClearStyles: Kg,
      afterStyles: Wg,
      afterRemoveClass: Vg,
      afterAddClass: Ug,
      beforeAddRead: Mg,
      beforeAddWrite: Ng,
      beforeClearStyles: Fg,
      beforeStyles: jg,
      beforeRemoveClass: Hg,
      beforeAddClass: Bg,
      onFinish: Fo,
      isRunning: Og,
      progressStart: av,
      progressStep: cv,
      progressEnd: uv,
    });
  },
  nb = 'ionViewWillEnter',
  rb = 'ionViewDidEnter',
  Um = 'ionViewWillLeave',
  Vm = 'ionViewDidLeave',
  Ol = 'ionViewWillUnload',
  ob = () => Pt(() => import('./ios.transition-101f07d9.js'), []),
  ib = () => Pt(() => import('./md.transition-b5fcc260.js'), []),
  Wm = (e) =>
    new Promise((t, n) => {
      vn(() => {
        sb(e),
          lb(e).then(
            (r) => {
              r.animation && r.animation.destroy(), uf(e), t(r);
            },
            (r) => {
              uf(e), n(r);
            }
          );
      });
    }),
  sb = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    pb(t, n, e.direction),
      e.showGoBack ? t.classList.add('can-go-back') : t.classList.remove('can-go-back'),
      za(t, !1),
      t.style.setProperty('pointer-events', 'none'),
      n && (za(n, !1), n.style.setProperty('pointer-events', 'none'));
  },
  lb = async (e) => {
    const t = await ab(e);
    return t && rw.isBrowser ? cb(t, e) : ub(e);
  },
  uf = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    t.classList.remove('ion-page-invisible'),
      t.style.removeProperty('pointer-events'),
      n !== void 0 && (n.classList.remove('ion-page-invisible'), n.style.removeProperty('pointer-events'));
  },
  ab = async (e) =>
    !e.leavingEl || !e.animated || e.duration === 0
      ? void 0
      : e.animationBuilder
      ? e.animationBuilder
      : e.mode === 'ios'
      ? (await ob()).iosTransitionAnimation
      : (await ib()).mdTransitionAnimation,
  cb = async (e, t) => {
    await Km(t, !0);
    const n = e(t.baseEl, t);
    Qm(t.enteringEl, t.leavingEl);
    const r = await fb(n, t);
    return (
      t.progressCallback && t.progressCallback(void 0),
      r && Xm(t.enteringEl, t.leavingEl),
      { hasCompleted: r, animation: n }
    );
  },
  ub = async (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    return await Km(e, !1), Qm(t, n), Xm(t, n), { hasCompleted: !0 };
  },
  Km = async (e, t) => {
    (e.deepWait !== void 0 ? e.deepWait : t) && (await Promise.all([Da(e.enteringEl), Da(e.leavingEl)])),
      await db(e.viewIsReady, e.enteringEl);
  },
  db = async (e, t) => {
    e && (await e(t));
  },
  fb = (e, t) => {
    const n = t.progressCallback,
      r = new Promise((o) => {
        e.onFinish((i) => o(i === 1));
      });
    return n ? (e.progressStart(!0), n(e)) : e.play(), r;
  },
  Qm = (e, t) => {
    Ht(t, Um), Ht(e, nb);
  },
  Xm = (e, t) => {
    Ht(e, rb), Ht(t, Vm);
  },
  Ht = (e, t) => {
    if (e) {
      const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
      e.dispatchEvent(n);
    }
  },
  Da = async (e) => {
    const t = e;
    if (t) {
      if (t.componentOnReady != null) {
        if ((await t.componentOnReady()) != null) return;
      } else if (t.__registerHost != null) {
        await new Promise((r) => zt(r));
        return;
      }
      await Promise.all(Array.from(t.children).map(Da));
    }
  },
  za = (e, t) => {
    t
      ? (e.setAttribute('aria-hidden', 'true'), e.classList.add('ion-page-hidden'))
      : ((e.hidden = !1), e.removeAttribute('aria-hidden'), e.classList.remove('ion-page-hidden'));
  },
  pb = (e, t, n) => {
    e !== void 0 && (e.style.zIndex = n === 'back' ? '99' : '101'), t !== void 0 && (t.style.zIndex = '100');
  },
  qk = (e) => {
    if (e.classList.contains('ion-page')) return e;
    const t = e.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    return t || e;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ts = (e, t, n, r, o) => mb(e[1], t[1], n[1], r[1], o).map((i) => hb(e[0], t[0], n[0], r[0], i)),
  hb = (e, t, n, r, o) => {
    const i = 3 * t * Math.pow(o - 1, 2),
      s = -3 * n * o + 3 * n + r * o,
      l = e * Math.pow(o - 1, 3);
    return o * (i + o * s) - l;
  },
  mb = (e, t, n, r, o) => (
    (e -= o),
    (t -= o),
    (n -= o),
    (r -= o),
    vb(r - 3 * n + 3 * t - e, 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter((s) => s >= 0 && s <= 1)
  ),
  gb = (e, t, n) => {
    const r = t * t - 4 * e * n;
    return r < 0 ? [] : [(-t + Math.sqrt(r)) / (2 * e), (-t - Math.sqrt(r)) / (2 * e)];
  },
  vb = (e, t, n, r) => {
    if (e === 0) return gb(t, n, r);
    (t /= e), (n /= e), (r /= e);
    const o = (3 * n - t * t) / 3,
      i = (2 * t * t * t - 9 * t * n + 27 * r) / 27;
    if (o === 0) return [Math.pow(-i, 1 / 3)];
    if (i === 0) return [Math.sqrt(-o), -Math.sqrt(-o)];
    const s = Math.pow(i / 2, 2) + Math.pow(o / 3, 3);
    if (s === 0) return [Math.pow(i / 2, 1 / 2) - t / 3];
    if (s > 0) return [Math.pow(-(i / 2) + Math.sqrt(s), 1 / 3) - Math.pow(i / 2 + Math.sqrt(s), 1 / 3) - t / 3];
    const l = Math.sqrt(Math.pow(-(o / 3), 3)),
      a = Math.acos(-(i / (2 * Math.sqrt(Math.pow(-(o / 3), 3))))),
      c = 2 * Math.pow(l, 1 / 3);
    return [
      c * Math.cos(a / 3) - t / 3,
      c * Math.cos((a + 2 * Math.PI) / 3) - t / 3,
      c * Math.cos((a + 4 * Math.PI) / 3) - t / 3,
    ];
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ class yb {
  constructor() {
    this.m = new Map();
  }
  reset(t) {
    this.m = new Map(Object.entries(t));
  }
  get(t, n) {
    const r = this.m.get(t);
    return r !== void 0 ? r : n;
  }
  getBoolean(t, n = !1) {
    const r = this.m.get(t);
    return r === void 0 ? n : typeof r == 'string' ? r === 'true' : !!r;
  }
  getNumber(t, n) {
    const r = parseFloat(this.m.get(t));
    return isNaN(r) ? (n !== void 0 ? n : NaN) : r;
  }
  set(t, n) {
    this.m.set(t, n);
  }
}
const le = new yb(),
  wb = (e) => {
    try {
      const t = e.sessionStorage.getItem(qm);
      return t !== null ? JSON.parse(t) : {};
    } catch (t) {
      return {};
    }
  },
  bb = (e, t) => {
    try {
      e.sessionStorage.setItem(qm, JSON.stringify(t));
    } catch (n) {
      return;
    }
  },
  $b = (e) => {
    const t = {};
    return (
      e.location.search
        .slice(1)
        .split('&')
        .map((n) => n.split('='))
        .map(([n, r]) => [decodeURIComponent(n), decodeURIComponent(r)])
        .filter(([n]) => xb(n, df))
        .map(([n, r]) => [n.slice(df.length), r])
        .forEach(([n, r]) => {
          t[n] = r;
        }),
      t
    );
  },
  xb = (e, t) => e.substr(0, t.length) === t,
  df = 'ionic:',
  qm = 'ionic-persist-config',
  kb = (e) => Ym(e),
  on = (e, t) => (typeof e == 'string' && ((t = e), (e = void 0)), kb(e).includes(t)),
  Ym = (e = window) => {
    if (typeof e > 'u') return [];
    e.Ionic = e.Ionic || {};
    let t = e.Ionic.platforms;
    return (
      t == null &&
        ((t = e.Ionic.platforms = Eb(e)), t.forEach((n) => e.document.documentElement.classList.add(`plt-${n}`))),
      t
    );
  },
  Eb = (e) => {
    const t = le.get('platform');
    return Object.keys(ff).filter((n) => {
      const r = t == null ? void 0 : t[n];
      return typeof r == 'function' ? r(e) : ff[n](e);
    });
  },
  Sb = (e) => Qs(e) && !Zm(e),
  ru = (e) => !!(zn(e, /iPad/i) || (zn(e, /Macintosh/i) && Qs(e))),
  Cb = (e) => zn(e, /iPhone/i),
  Tb = (e) => zn(e, /iPhone|iPod/i) || ru(e),
  Gm = (e) => zn(e, /android|sink/i),
  Pb = (e) => Gm(e) && !zn(e, /mobile/i),
  Rb = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      r = Math.min(t, n),
      o = Math.max(t, n);
    return r > 390 && r < 520 && o > 620 && o < 800;
  },
  _b = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      r = Math.min(t, n),
      o = Math.max(t, n);
    return ru(e) || Pb(e) || (r > 460 && r < 820 && o > 780 && o < 1400);
  },
  Qs = (e) => Ab(e, '(any-pointer:coarse)'),
  Lb = (e) => !Qs(e),
  Zm = (e) => Jm(e) || eg(e),
  Jm = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
  eg = (e) => {
    const t = e.Capacitor;
    return !!(t != null && t.isNative);
  },
  Ib = (e) => zn(e, /electron/i),
  Ob = (e) => {
    var t;
    return !!(
      (!((t = e.matchMedia) === null || t === void 0) && t.call(e, '(display-mode: standalone)').matches) ||
      e.navigator.standalone
    );
  },
  zn = (e, t) => t.test(e.navigator.userAgent),
  Ab = (e, t) => {
    var n;
    return (n = e.matchMedia) === null || n === void 0 ? void 0 : n.call(e, t).matches;
  },
  ff = {
    ipad: ru,
    iphone: Cb,
    ios: Tb,
    android: Gm,
    phablet: Rb,
    tablet: _b,
    cordova: Jm,
    capacitor: eg,
    electron: Ib,
    pwa: Ob,
    mobile: Qs,
    mobileweb: Sb,
    desktop: Lb,
    hybrid: Zm,
  };
let Yn;
const Ze = (e) => (e && pw(e)) || Yn,
  Mb = (e = {}) => {
    if (typeof window > 'u') return;
    const t = window.document,
      n = window,
      r = (n.Ionic = n.Ionic || {}),
      o = {};
    e._ael && (o.ael = e._ael), e._rel && (o.rel = e._rel), e._ce && (o.ce = e._ce), Hw(o);
    const i = Object.assign(
      Object.assign(Object.assign(Object.assign(Object.assign({}, wb(n)), { persistConfig: !1 }), r.config), $b(n)),
      e
    );
    le.reset(i),
      le.getBoolean('persistConfig') && bb(n, i),
      Ym(n),
      (r.config = le),
      (r.mode = Yn = le.get('mode', t.documentElement.getAttribute('mode') || (on(n, 'ios') ? 'ios' : 'md'))),
      le.set('mode', Yn),
      t.documentElement.setAttribute('mode', Yn),
      t.documentElement.classList.add(Yn),
      le.getBoolean('_testing') && le.set('animated', !1);
    const s = (a) => {
        var c;
        return (c = a.tagName) === null || c === void 0 ? void 0 : c.startsWith('ION-');
      },
      l = (a) => ['ios', 'md'].includes(a);
    fw((a) => {
      for (; a; ) {
        const c = a.mode || a.getAttribute('mode');
        if (c) {
          if (l(c)) return c;
          s(a) && console.warn('Invalid ionic mode: "' + c + '", expected: "ios" or "md"');
        }
        a = a.parentElement;
      }
      return Yn;
    });
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const tg = async (e, t, n, r, o, i) => {
    var s;
    if (e) return e.attachViewToDom(t, n, o, r);
    if (!i && typeof n != 'string' && !(n instanceof HTMLElement)) throw new Error('framework delegate is missing');
    const l = typeof n == 'string' ? ((s = t.ownerDocument) === null || s === void 0 ? void 0 : s.createElement(n)) : n;
    return (
      r && r.forEach((a) => l.classList.add(a)),
      o && Object.assign(l, o),
      t.appendChild(l),
      await new Promise((a) => Po(l, a)),
      l
    );
  },
  Nb = (e, t) => {
    if (t) {
      if (e) {
        const n = t.parentElement;
        return e.removeViewFromDom(n, t);
      }
      t.remove();
    }
    return Promise.resolve();
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Db = (e, ...t) => console.error(`<${e.tagName.toLowerCase()}> must be used inside ${t.join(' or ')}.`);
function We(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ou = (e, t) => t.closest(e) !== null,
  Xs = (e, t) =>
    typeof e == 'string' && e.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${e}`]: !0 }, t) : t;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const zb =
    ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}',
  Bb = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
      }
      async addRipple(t, n) {
        return new Promise((r) => {
          To(() => {
            const o = this.el.getBoundingClientRect(),
              i = o.width,
              s = o.height,
              l = Math.sqrt(i * i + s * s),
              a = Math.max(s, i),
              c = this.unbounded ? a : l + jb,
              u = Math.floor(a * Fb),
              d = c / u;
            let f = t - o.left,
              g = n - o.top;
            this.unbounded && ((f = i * 0.5), (g = s * 0.5));
            const y = f - u * 0.5,
              $ = g - u * 0.5,
              A = i * 0.5 - f,
              h = s * 0.5 - g;
            vn(() => {
              const p = document.createElement('div');
              p.classList.add('ripple-effect');
              const m = p.style;
              (m.top = $ + 'px'),
                (m.left = y + 'px'),
                (m.width = m.height = u + 'px'),
                m.setProperty('--final-scale', `${d}`),
                m.setProperty('--translate-end', `${A}px, ${h}px`),
                (this.el.shadowRoot || this.el).appendChild(p),
                setTimeout(() => {
                  r(() => {
                    Hb(p);
                  });
                }, 225 + 100);
            });
          });
        });
      }
      get unbounded() {
        return this.type === 'unbounded';
      }
      render() {
        const t = Ze(this);
        return H(qt, { role: 'presentation', class: { [t]: !0, unbounded: this.unbounded } });
      }
      get el() {
        return this;
      }
      static get style() {
        return zb;
      }
    },
    [1, 'ion-ripple-effect', { type: [1], addRipple: [64] }]
  ),
  Hb = (e) => {
    e.classList.add('fade-out'),
      setTimeout(() => {
        e.remove();
      }, 200);
  },
  jb = 10,
  Fb = 0.5;
function Ub() {
  if (typeof customElements > 'u') return;
  ['ion-ripple-effect'].forEach((t) => {
    switch (t) {
      case 'ion-ripple-effect':
        customElements.get(t) || customElements.define(t, Bb);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ci = typeof window < 'u' ? window : void 0;
ci && ci.CSS && ci.CSS.supports && ci.CSS.supports('--a: 0');
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Vb = (e) =>
  e && e.dir !== ''
    ? e.dir.toLowerCase() === 'rtl'
    : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Wb =
    ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
  Kb = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionScrollStart = ut(this, 'ionScrollStart', 7)),
          (this.ionScroll = ut(this, 'ionScroll', 7)),
          (this.ionScrollEnd = ut(this, 'ionScrollEnd', 7)),
          (this.watchDog = null),
          (this.isScrolling = !1),
          (this.lastScroll = 0),
          (this.queued = !1),
          (this.cTop = -1),
          (this.cBottom = -1),
          (this.isMainContent = !0),
          (this.resizeTimeout = null),
          (this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: void 0,
            startX: 0,
            startY: 0,
            startTime: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            currentTime: 0,
            data: void 0,
            isScrolling: !0,
          }),
          (this.color = void 0),
          (this.fullscreen = !1),
          (this.forceOverscroll = void 0),
          (this.scrollX = !1),
          (this.scrollY = !0),
          (this.scrollEvents = !1);
      }
      connectedCallback() {
        this.isMainContent = this.el.closest('ion-menu, ion-popover, ion-modal') === null;
      }
      disconnectedCallback() {
        this.onScrollEnd();
      }
      onAppLoad() {
        this.resize();
      }
      onResize() {
        this.resizeTimeout && (clearTimeout(this.resizeTimeout), (this.resizeTimeout = null)),
          (this.resizeTimeout = setTimeout(() => {
            this.el.offsetParent !== null && this.resize();
          }, 100));
      }
      shouldForceOverscroll() {
        const { forceOverscroll: t } = this,
          n = Ze(this);
        return t === void 0 ? n === 'ios' && on('ios') : t;
      }
      resize() {
        this.fullscreen
          ? To(() => this.readDimensions())
          : (this.cTop !== 0 || this.cBottom !== 0) && ((this.cTop = this.cBottom = 0), Aa(this));
      }
      readDimensions() {
        const t = Xb(this.el),
          n = Math.max(this.el.offsetTop, 0),
          r = Math.max(t.offsetHeight - n - this.el.offsetHeight, 0);
        (n !== this.cTop || r !== this.cBottom) && ((this.cTop = n), (this.cBottom = r), Aa(this));
      }
      onScroll(t) {
        const n = Date.now(),
          r = !this.isScrolling;
        (this.lastScroll = n),
          r && this.onScrollStart(),
          !this.queued &&
            this.scrollEvents &&
            ((this.queued = !0),
            To((o) => {
              (this.queued = !1),
                (this.detail.event = t),
                qb(this.detail, this.scrollEl, o, r),
                this.ionScroll.emit(this.detail);
            }));
      }
      async getScrollElement() {
        return this.scrollEl || (await new Promise((t) => Po(this.el, t))), Promise.resolve(this.scrollEl);
      }
      async getBackgroundElement() {
        return (
          this.backgroundContentEl || (await new Promise((t) => Po(this.el, t))),
          Promise.resolve(this.backgroundContentEl)
        );
      }
      scrollToTop(t = 0) {
        return this.scrollToPoint(void 0, 0, t);
      }
      async scrollToBottom(t = 0) {
        const n = await this.getScrollElement(),
          r = n.scrollHeight - n.clientHeight;
        return this.scrollToPoint(void 0, r, t);
      }
      async scrollByPoint(t, n, r) {
        const o = await this.getScrollElement();
        return this.scrollToPoint(t + o.scrollLeft, n + o.scrollTop, r);
      }
      async scrollToPoint(t, n, r = 0) {
        const o = await this.getScrollElement();
        if (r < 32) {
          n != null && (o.scrollTop = n), t != null && (o.scrollLeft = t);
          return;
        }
        let i,
          s = 0;
        const l = new Promise((g) => (i = g)),
          a = o.scrollTop,
          c = o.scrollLeft,
          u = n != null ? n - a : 0,
          d = t != null ? t - c : 0,
          f = (g) => {
            const y = Math.min(1, (g - s) / r) - 1,
              $ = Math.pow(y, 3) + 1;
            u !== 0 && (o.scrollTop = Math.floor($ * u + a)),
              d !== 0 && (o.scrollLeft = Math.floor($ * d + c)),
              $ < 1 ? requestAnimationFrame(f) : i();
          };
        return (
          requestAnimationFrame((g) => {
            (s = g), f(g);
          }),
          l
        );
      }
      onScrollStart() {
        (this.isScrolling = !0),
          this.ionScrollStart.emit({ isScrolling: !0 }),
          this.watchDog && clearInterval(this.watchDog),
          (this.watchDog = setInterval(() => {
            this.lastScroll < Date.now() - 120 && this.onScrollEnd();
          }, 100));
      }
      onScrollEnd() {
        this.watchDog && clearInterval(this.watchDog),
          (this.watchDog = null),
          this.isScrolling && ((this.isScrolling = !1), this.ionScrollEnd.emit({ isScrolling: !1 }));
      }
      render() {
        const { isMainContent: t, scrollX: n, scrollY: r, el: o } = this,
          i = Vb(o) ? 'rtl' : 'ltr',
          s = Ze(this),
          l = this.shouldForceOverscroll(),
          a = s === 'ios',
          c = t ? 'main' : 'div';
        return (
          this.resize(),
          H(
            qt,
            {
              class: Xs(this.color, {
                [s]: !0,
                'content-sizing': ou('ion-popover', this.el),
                overscroll: l,
                [`content-${i}`]: !0,
              }),
              style: { '--offset-top': `${this.cTop}px`, '--offset-bottom': `${this.cBottom}px` },
            },
            H('div', { ref: (u) => (this.backgroundContentEl = u), id: 'background-content', part: 'background' }),
            H(
              c,
              {
                class: { 'inner-scroll': !0, 'scroll-x': n, 'scroll-y': r, overscroll: (n || r) && l },
                ref: (u) => (this.scrollEl = u),
                onScroll: this.scrollEvents ? (u) => this.onScroll(u) : void 0,
                part: 'scroll',
              },
              H('slot', null)
            ),
            a
              ? H(
                  'div',
                  { class: 'transition-effect' },
                  H('div', { class: 'transition-cover' }),
                  H('div', { class: 'transition-shadow' })
                )
              : null,
            H('slot', { name: 'fixed' })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return Wb;
      }
    },
    [
      1,
      'ion-content',
      {
        color: [513],
        fullscreen: [4],
        forceOverscroll: [1028, 'force-overscroll'],
        scrollX: [4, 'scroll-x'],
        scrollY: [4, 'scroll-y'],
        scrollEvents: [4, 'scroll-events'],
        getScrollElement: [64],
        getBackgroundElement: [64],
        scrollToTop: [64],
        scrollToBottom: [64],
        scrollByPoint: [64],
        scrollToPoint: [64],
      },
      [
        [8, 'appload', 'onAppLoad'],
        [9, 'resize', 'onResize'],
      ],
    ]
  ),
  Qb = (e) => {
    var t;
    return e.parentElement
      ? e.parentElement
      : !((t = e.parentNode) === null || t === void 0) && t.host
      ? e.parentNode.host
      : null;
  },
  Xb = (e) => {
    const t = e.closest('ion-tabs');
    if (t) return t;
    const n = e.closest('ion-app, ion-page, .ion-page, page-inner, .popover-content');
    return n || Qb(e);
  },
  qb = (e, t, n, r) => {
    const o = e.currentX,
      i = e.currentY,
      s = e.currentTime,
      l = t.scrollLeft,
      a = t.scrollTop,
      c = n - s;
    if (
      (r && ((e.startTime = n), (e.startX = l), (e.startY = a), (e.velocityX = e.velocityY = 0)),
      (e.currentTime = n),
      (e.currentX = e.scrollLeft = l),
      (e.currentY = e.scrollTop = a),
      (e.deltaX = l - e.startX),
      (e.deltaY = a - e.startY),
      c > 0 && c < 100)
    ) {
      const u = (l - o) / c,
        d = (a - i) / c;
      (e.velocityX = u * 0.7 + e.velocityX * 0.3), (e.velocityY = d * 0.7 + e.velocityY * 0.3);
    }
  };
function Yb() {
  if (typeof customElements > 'u') return;
  ['ion-content'].forEach((t) => {
    switch (t) {
      case 'ion-content':
        customElements.get(t) || customElements.define(t, Kb);
        break;
    }
  });
}
const Gb = Yb;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Zb = 'ION-CONTENT',
  ng = 'ion-content',
  rg = '.ion-content-scroll-host',
  og = `${ng}, ${rg}`,
  iu = (e) => e.tagName === Zb,
  pf = async (e) => (iu(e) ? (await new Promise((t) => Po(e, t)), e.getScrollElement()) : e),
  hf = (e) => {
    const t = e.querySelector(rg);
    return t || e.querySelector(og);
  },
  Zk = (e) => e.closest(og),
  Jk = (e, t) =>
    iu(e) ? e.scrollToTop(t) : Promise.resolve(e.scrollTo({ top: 0, left: 0, behavior: t > 0 ? 'smooth' : 'auto' })),
  eE = (e, t, n, r) =>
    iu(e)
      ? e.scrollByPoint(t, n, r)
      : Promise.resolve(e.scrollBy({ top: n, left: t, behavior: r > 0 ? 'smooth' : 'auto' })),
  mf = (e) => Db(e, ng);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var Ba;
(function (e) {
  (e.Body = 'body'), (e.Ionic = 'ionic'), (e.Native = 'native'), (e.None = 'none');
})(Ba || (Ba = {}));
const Jb = {
  getEngine() {
    var e;
    return (
      ((e = fe == null ? void 0 : fe.Capacitor) === null || e === void 0 ? void 0 : e.isPluginAvailable('Keyboard')) &&
      (fe == null ? void 0 : fe.Capacitor.Plugins.Keyboard)
    );
  },
  getResizeMode() {
    const e = this.getEngine();
    return e != null && e.getResizeMode
      ? e.getResizeMode().catch((t) => {
          if (t.code !== 'UNIMPLEMENTED') throw t;
        })
      : Promise.resolve(void 0);
  },
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ig = (e) => {
    if (Ll === void 0 || e === Ba.None || e === void 0) return null;
    const t = Ll.querySelector('ion-app');
    return t != null ? t : Ll.body;
  },
  gf = (e) => {
    const t = ig(e);
    return t === null ? 0 : t.clientHeight;
  },
  e$ = async (e) => {
    let t, n, r, o;
    const i = async () => {
        const u = await Jb.getResizeMode(),
          d = u === void 0 ? void 0 : u.mode;
        (t = () => {
          o === void 0 && (o = gf(d)), (r = !0), s(r, d);
        }),
          (n = () => {
            (r = !1), s(r, d);
          }),
          fe == null || fe.addEventListener('keyboardWillShow', t),
          fe == null || fe.addEventListener('keyboardWillHide', n);
      },
      s = (u, d) => {
        e && e(u, l(d));
      },
      l = (u) => {
        if (o === 0 || o === gf(u)) return;
        const d = ig(u);
        if (d !== null)
          return new Promise((f) => {
            const g = () => {
                d.clientHeight === o && (y.disconnect(), f());
              },
              y = new ResizeObserver(g);
            y.observe(d);
          });
      },
      a = () => {
        fe == null || fe.removeEventListener('keyboardWillShow', t),
          fe == null || fe.removeEventListener('keyboardWillHide', n),
          (t = n = void 0);
      },
      c = () => r;
    return await i(), { init: i, destroy: a, isKeyboardVisible: c };
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const t$ = 'all 0.2s ease-in-out',
  vf = (e) => {
    const t = document.querySelector(`${e}.ion-cloned-element`);
    if (t !== null) return t;
    const n = document.createElement(e);
    return (
      n.classList.add('ion-cloned-element'), n.style.setProperty('display', 'none'), document.body.appendChild(n), n
    );
  },
  yf = (e) => {
    if (!e) return;
    const t = e.querySelectorAll('ion-toolbar');
    return {
      el: e,
      toolbars: Array.from(t).map((n) => {
        const r = n.querySelector('ion-title');
        return {
          el: n,
          background: n.shadowRoot.querySelector('.toolbar-background'),
          ionTitleEl: r,
          innerTitleEl: r ? r.shadowRoot.querySelector('.toolbar-title') : null,
          ionButtonsEl: Array.from(n.querySelectorAll('ion-buttons')),
        };
      }),
    };
  },
  n$ = (e, t, n) => {
    To(() => {
      const r = e.scrollTop,
        o = jm(1, 1 + -r / 500, 1.1);
      n.querySelector('ion-refresher.refresher-native') === null &&
        vn(() => {
          i$(t.toolbars, o);
        });
    });
  },
  su = (e, t) => {
    e.collapse !== 'fade' &&
      (t === void 0 ? e.style.removeProperty('--opacity-scale') : e.style.setProperty('--opacity-scale', t.toString()));
  },
  r$ = (e, t, n) => {
    if (!e[0].isIntersecting) return;
    const r = e[0].intersectionRatio > 0.9 || n <= 0 ? 0 : ((1 - e[0].intersectionRatio) * 100) / 75;
    su(t.el, r === 1 ? void 0 : r);
  },
  o$ = (e, t, n, r) => {
    vn(() => {
      const o = r.scrollTop;
      r$(e, t, o);
      const i = e[0],
        s = i.intersectionRect,
        l = s.width * s.height,
        a = i.rootBounds.width * i.rootBounds.height,
        c = l === 0 && a === 0,
        u = Math.abs(s.left - i.boundingClientRect.left),
        d = Math.abs(s.right - i.boundingClientRect.right),
        f = l > 0 && (u >= 5 || d >= 5);
      c ||
        f ||
        (i.isIntersecting
          ? (qr(t, !1), qr(n))
          : ((s.x === 0 && s.y === 0) || (s.width !== 0 && s.height !== 0)) && o > 0 && (qr(t), qr(n, !1), su(t.el)));
    });
  },
  qr = (e, t = !0) => {
    const n = e.el;
    t
      ? (n.classList.remove('header-collapse-condense-inactive'), n.removeAttribute('aria-hidden'))
      : (n.classList.add('header-collapse-condense-inactive'), n.setAttribute('aria-hidden', 'true'));
  },
  i$ = (e = [], t = 1, n = !1) => {
    e.forEach((r) => {
      const o = r.ionTitleEl,
        i = r.innerTitleEl;
      !o || o.size !== 'large' || ((i.style.transition = n ? t$ : ''), (i.style.transform = `scale3d(${t}, ${t}, 1)`));
    });
  },
  wf = (e, t, n) => {
    To(() => {
      const r = e.scrollTop,
        o = t.clientHeight,
        i = n ? n.clientHeight : 0;
      if (n !== null && r < i) {
        t.style.setProperty('--opacity-scale', '0'), e.style.setProperty('clip-path', `inset(${o}px 0px 0px 0px)`);
        return;
      }
      const s = r - i,
        a = jm(0, s / 10, 1);
      vn(() => {
        e.style.removeProperty('clip-path'), t.style.setProperty('--opacity-scale', a.toString());
      });
    });
  },
  s$ =
    'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}',
  l$ =
    'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}@supports (inset-inline-start: 0){.header-md::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.header-md::after{left:0}:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}[dir=rtl] .header-md::after{background-position:right 0 top -2px}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){background-position:right 0 top -2px}}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}',
  a$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          (this.inheritedAttributes = {}),
          (this.setupFadeHeader = async (t, n) => {
            const r = (this.scrollEl = await pf(t));
            (this.contentScrollCallback = () => {
              wf(this.scrollEl, this.el, n);
            }),
              r.addEventListener('scroll', this.contentScrollCallback),
              wf(this.scrollEl, this.el, n);
          }),
          (this.collapse = void 0),
          (this.translucent = !1);
      }
      componentWillLoad() {
        this.inheritedAttributes = Qw(this.el);
      }
      componentDidLoad() {
        this.checkCollapsibleHeader();
      }
      componentDidUpdate() {
        this.checkCollapsibleHeader();
      }
      disconnectedCallback() {
        this.destroyCollapsibleHeader();
      }
      async checkCollapsibleHeader() {
        if (Ze(this) !== 'ios') return;
        const { collapse: n } = this,
          r = n === 'condense',
          o = n === 'fade';
        if ((this.destroyCollapsibleHeader(), r)) {
          const i = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
            s = i ? hf(i) : null;
          vn(() => {
            const l = vf('ion-title');
            (l.size = 'large'), vf('ion-back-button');
          }),
            await this.setupCondenseHeader(s, i);
        } else if (o) {
          const i = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
            s = i ? hf(i) : null;
          if (!s) {
            mf(this.el);
            return;
          }
          const l = s.querySelector('ion-header[collapse="condense"]');
          await this.setupFadeHeader(s, l);
        }
      }
      destroyCollapsibleHeader() {
        this.intersectionObserver && (this.intersectionObserver.disconnect(), (this.intersectionObserver = void 0)),
          this.scrollEl &&
            this.contentScrollCallback &&
            (this.scrollEl.removeEventListener('scroll', this.contentScrollCallback),
            (this.contentScrollCallback = void 0)),
          this.collapsibleMainHeader &&
            (this.collapsibleMainHeader.classList.remove('header-collapse-main'),
            (this.collapsibleMainHeader = void 0));
      }
      async setupCondenseHeader(t, n) {
        if (!t || !n) {
          mf(this.el);
          return;
        }
        if (typeof IntersectionObserver > 'u') return;
        this.scrollEl = await pf(t);
        const r = n.querySelectorAll('ion-header');
        if (
          ((this.collapsibleMainHeader = Array.from(r).find((l) => l.collapse !== 'condense')),
          !this.collapsibleMainHeader)
        )
          return;
        const o = yf(this.collapsibleMainHeader),
          i = yf(this.el);
        if (!o || !i) return;
        qr(o, !1), su(o.el, 0);
        const s = (l) => {
          o$(l, o, i, this.scrollEl);
        };
        (this.intersectionObserver = new IntersectionObserver(s, {
          root: t,
          threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        })),
          this.intersectionObserver.observe(i.toolbars[i.toolbars.length - 1].el),
          (this.contentScrollCallback = () => {
            n$(this.scrollEl, i, t);
          }),
          this.scrollEl.addEventListener('scroll', this.contentScrollCallback),
          vn(() => {
            this.collapsibleMainHeader !== void 0 && this.collapsibleMainHeader.classList.add('header-collapse-main');
          });
      }
      render() {
        const { translucent: t, inheritedAttributes: n } = this,
          r = Ze(this),
          o = this.collapse || 'none',
          i = ou('ion-menu', this.el) ? 'none' : 'banner';
        return H(
          qt,
          Object.assign(
            {
              role: i,
              class: {
                [r]: !0,
                [`header-${r}`]: !0,
                ['header-translucent']: this.translucent,
                [`header-collapse-${o}`]: !0,
                [`header-translucent-${r}`]: this.translucent,
              },
            },
            n
          ),
          r === 'ios' && t && H('div', { class: 'header-background' }),
          H('slot', null)
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: s$, md: l$ };
      }
    },
    [36, 'ion-header', { collapse: [1], translucent: [4] }]
  );
function c$() {
  if (typeof customElements > 'u') return;
  ['ion-header'].forEach((t) => {
    switch (t) {
      case 'ion-header':
        customElements.get(t) || customElements.define(t, a$);
        break;
    }
  });
}
const u$ = c$,
  sg = 1,
  lg = 2,
  ns = 3;
class Ha {
  constructor(t, n) {
    (this.component = t), (this.params = n), (this.state = sg);
  }
  async init(t) {
    if (((this.state = lg), !this.element)) {
      const n = this.component;
      this.element = await tg(this.delegate, t, n, ['ion-page', 'ion-page-invisible'], this.params);
    }
  }
  _destroy() {
    De(this.state !== ns, 'view state must be ATTACHED');
    const t = this.element;
    t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()),
      (this.nav = void 0),
      (this.state = ns);
  }
}
const bf = (e, t, n) => (!e || e.component !== t ? !1 : Fm(e.params, n)),
  $f = (e, t) => (e ? (e instanceof Ha ? e : new Ha(e, t)) : null),
  d$ = (e) =>
    e
      .map((t) =>
        t instanceof Ha
          ? t
          : 'component' in t
          ? $f(t.component, t.componentProps === null ? void 0 : t.componentProps)
          : $f(t, void 0)
      )
      .filter((t) => t !== null),
  f$ = ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
  p$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = ut(this, 'ionNavWillLoad', 7)),
          (this.ionNavWillChange = ut(this, 'ionNavWillChange', 3)),
          (this.ionNavDidChange = ut(this, 'ionNavDidChange', 3)),
          (this.transInstr = []),
          (this.animationEnabled = !0),
          (this.useRouter = !1),
          (this.isTransitioning = !1),
          (this.destroyed = !1),
          (this.views = []),
          (this.delegate = void 0),
          (this.swipeGesture = void 0),
          (this.animated = !0),
          (this.animation = void 0),
          (this.rootParams = void 0),
          (this.root = void 0);
      }
      swipeGestureChanged() {
        this.gesture && this.gesture.enable(this.swipeGesture === !0);
      }
      rootChanged() {
        this.root !== void 0 && (this.useRouter || this.setRoot(this.root, this.rootParams));
      }
      componentWillLoad() {
        if (
          ((this.useRouter = document.querySelector('ion-router') !== null && this.el.closest('[no-router]') === null),
          this.swipeGesture === void 0)
        ) {
          const t = Ze(this);
          this.swipeGesture = le.getBoolean('swipeBackEnabled', t === 'ios');
        }
        this.ionNavWillLoad.emit();
      }
      async componentDidLoad() {
        this.rootChanged(),
          (this.gesture = (await Pt(() => import('./swipe-back-2eca1bad.js'), [])).createSwipeBackGesture(
            this.el,
            this.canStart.bind(this),
            this.onStart.bind(this),
            this.onMove.bind(this),
            this.onEnd.bind(this)
          )),
          this.swipeGestureChanged();
      }
      connectedCallback() {
        this.destroyed = !1;
      }
      disconnectedCallback() {
        for (const t of this.views) Ht(t.element, Ol), t._destroy();
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
          (this.transInstr.length = 0),
          (this.views.length = 0),
          (this.destroyed = !0);
      }
      push(t, n, r, o) {
        return this.insert(-1, t, n, r, o);
      }
      insert(t, n, r, o, i) {
        return this.insertPages(t, [{ component: n, componentProps: r }], o, i);
      }
      insertPages(t, n, r, o) {
        return this.queueTrns({ insertStart: t, insertViews: n, opts: r }, o);
      }
      pop(t, n) {
        return this.removeIndex(-1, 1, t, n);
      }
      popTo(t, n, r) {
        const o = { removeStart: -1, removeCount: -1, opts: n };
        return (
          typeof t == 'object' && t.component
            ? ((o.removeView = t), (o.removeStart = 1))
            : typeof t == 'number' && (o.removeStart = t + 1),
          this.queueTrns(o, r)
        );
      }
      popToRoot(t, n) {
        return this.removeIndex(1, -1, t, n);
      }
      removeIndex(t, n = 1, r, o) {
        return this.queueTrns({ removeStart: t, removeCount: n, opts: r }, o);
      }
      setRoot(t, n, r, o) {
        return this.setPages([{ component: t, componentProps: n }], r, o);
      }
      setPages(t, n, r) {
        return (
          n != null || (n = {}),
          n.animated !== !0 && (n.animated = !1),
          this.queueTrns({ insertStart: 0, insertViews: t, removeStart: 0, removeCount: -1, opts: n }, r)
        );
      }
      setRouteId(t, n, r, o) {
        const i = this.getActiveSync();
        if (bf(i, t, n)) return Promise.resolve({ changed: !1, element: i.element });
        let s;
        const l = new Promise((u) => (s = u));
        let a;
        const c = {
          updateURL: !1,
          viewIsReady: (u) => {
            let d;
            const f = new Promise((g) => (d = g));
            return (
              s({
                changed: !0,
                element: u,
                markVisible: async () => {
                  d(), await a;
                },
              }),
              f
            );
          },
        };
        if (r === 'root') a = this.setRoot(t, n, c);
        else {
          const u = this.views.find((d) => bf(d, t, n));
          u
            ? (a = this.popTo(u, Object.assign(Object.assign({}, c), { direction: 'back', animationBuilder: o })))
            : r === 'forward'
            ? (a = this.push(t, n, Object.assign(Object.assign({}, c), { animationBuilder: o })))
            : r === 'back' &&
              (a = this.setRoot(
                t,
                n,
                Object.assign(Object.assign({}, c), { direction: 'back', animated: !0, animationBuilder: o })
              ));
        }
        return l;
      }
      async getRouteId() {
        const t = this.getActiveSync();
        if (t) return { id: t.element.tagName, params: t.params, element: t.element };
      }
      async getActive() {
        return this.getActiveSync();
      }
      async getByIndex(t) {
        return this.views[t];
      }
      async canGoBack(t) {
        return this.canGoBackSync(t);
      }
      async getPrevious(t) {
        return this.getPreviousSync(t);
      }
      getLength() {
        return this.views.length;
      }
      getActiveSync() {
        return this.views[this.views.length - 1];
      }
      canGoBackSync(t = this.getActiveSync()) {
        return !!(t && this.getPreviousSync(t));
      }
      getPreviousSync(t = this.getActiveSync()) {
        if (!t) return;
        const n = this.views,
          r = n.indexOf(t);
        return r > 0 ? n[r - 1] : void 0;
      }
      async queueTrns(t, n) {
        var r, o;
        if (this.isTransitioning && !((r = t.opts) === null || r === void 0) && r.skipIfBusy) return !1;
        const i = new Promise((s, l) => {
          (t.resolve = s), (t.reject = l);
        });
        if (((t.done = n), t.opts && t.opts.updateURL !== !1 && this.useRouter)) {
          const s = document.querySelector('ion-router');
          if (s) {
            const l = await s.canTransition();
            if (l === !1) return !1;
            if (typeof l == 'string') return s.push(l, t.opts.direction || 'back'), !1;
          }
        }
        return (
          ((o = t.insertViews) === null || o === void 0 ? void 0 : o.length) === 0 && (t.insertViews = void 0),
          this.transInstr.push(t),
          this.nextTrns(),
          i
        );
      }
      success(t, n) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', n);
          return;
        }
        if (
          (n.done && n.done(t.hasCompleted, t.requiresTransition, t.enteringView, t.leavingView, t.direction),
          n.resolve(t.hasCompleted),
          n.opts.updateURL !== !1 && this.useRouter)
        ) {
          const r = document.querySelector('ion-router');
          if (r) {
            const o = t.direction === 'back' ? 'back' : 'forward';
            r.navChanged(o);
          }
        }
      }
      failed(t, n) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', n);
          return;
        }
        (this.transInstr.length = 0), this.fireError(t, n);
      }
      fireError(t, n) {
        n.done && n.done(!1, !1, t), n.reject && !this.destroyed ? n.reject(t) : n.resolve(!1);
      }
      nextTrns() {
        if (this.isTransitioning) return !1;
        const t = this.transInstr.shift();
        return t ? (this.runTransition(t), !0) : !1;
      }
      async runTransition(t) {
        try {
          this.ionNavWillChange.emit(), (this.isTransitioning = !0), this.prepareTI(t);
          const n = this.getActiveSync(),
            r = this.getEnteringView(t, n);
          if (!n && !r) throw new Error('no views in the stack to be removed');
          r && r.state === sg && (await r.init(this.el)), this.postViewInit(r, n, t);
          const o = (t.enteringRequiresTransition || t.leavingRequiresTransition) && r !== n;
          o &&
            t.opts &&
            n &&
            (t.opts.direction === 'back' &&
              (t.opts.animationBuilder = t.opts.animationBuilder || (r == null ? void 0 : r.animationBuilder)),
            (n.animationBuilder = t.opts.animationBuilder));
          let i;
          o ? (i = await this.transition(r, n, t)) : (i = { hasCompleted: !0, requiresTransition: !1 }),
            this.success(i, t),
            this.ionNavDidChange.emit();
        } catch (n) {
          this.failed(n, t);
        }
        (this.isTransitioning = !1), this.nextTrns();
      }
      prepareTI(t) {
        var n, r, o;
        const i = this.views.length;
        if (
          (((n = t.opts) !== null && n !== void 0) || (t.opts = {}),
          ((r = (o = t.opts).delegate) !== null && r !== void 0) || (o.delegate = this.delegate),
          t.removeView !== void 0)
        ) {
          De(t.removeStart !== void 0, 'removeView needs removeStart'),
            De(t.removeCount !== void 0, 'removeView needs removeCount');
          const a = this.views.indexOf(t.removeView);
          if (a < 0) throw new Error('removeView was not found');
          t.removeStart += a;
        }
        t.removeStart !== void 0 &&
          (t.removeStart < 0 && (t.removeStart = i - 1),
          t.removeCount < 0 && (t.removeCount = i - t.removeStart),
          (t.leavingRequiresTransition = t.removeCount > 0 && t.removeStart + t.removeCount === i)),
          t.insertViews &&
            ((t.insertStart < 0 || t.insertStart > i) && (t.insertStart = i),
            (t.enteringRequiresTransition = t.insertStart === i));
        const s = t.insertViews;
        if (!s) return;
        De(s.length > 0, 'length can not be zero');
        const l = d$(s);
        if (l.length === 0) throw new Error('invalid views to insert');
        for (const a of l) {
          a.delegate = t.opts.delegate;
          const c = a.nav;
          if (c && c !== this) throw new Error('inserted view was already inserted');
          if (a.state === ns) throw new Error('inserted view was already destroyed');
        }
        t.insertViews = l;
      }
      getEnteringView(t, n) {
        const r = t.insertViews;
        if (r !== void 0) return r[r.length - 1];
        const o = t.removeStart;
        if (o !== void 0) {
          const i = this.views,
            s = o + t.removeCount;
          for (let l = i.length - 1; l >= 0; l--) {
            const a = i[l];
            if ((l < o || l >= s) && a !== n) return a;
          }
        }
      }
      postViewInit(t, n, r) {
        var o, i, s;
        De(n || t, 'Both leavingView and enteringView are null'),
          De(r.resolve, 'resolve must be valid'),
          De(r.reject, 'reject must be valid');
        const l = r.opts,
          { insertViews: a, removeStart: c, removeCount: u } = r;
        let d;
        if (c !== void 0 && u !== void 0) {
          De(c >= 0, 'removeStart can not be negative'), De(u >= 0, 'removeCount can not be negative'), (d = []);
          for (let g = c; g < c + u; g++) {
            const y = this.views[g];
            y !== void 0 && y !== t && y !== n && d.push(y);
          }
          ((o = l.direction) !== null && o !== void 0) || (l.direction = 'back');
        }
        const f =
          this.views.length +
          ((i = a == null ? void 0 : a.length) !== null && i !== void 0 ? i : 0) -
          (u != null ? u : 0);
        if ((De(f >= 0, 'final balance can not be negative'), f === 0))
          throw (
            (console.warn(
              "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
              this,
              this.el
            ),
            new Error('navigation stack needs at least one root page'))
          );
        if (a) {
          let g = r.insertStart;
          for (const y of a) this.insertViewAt(y, g), g++;
          r.enteringRequiresTransition && (((s = l.direction) !== null && s !== void 0) || (l.direction = 'forward'));
        }
        if (d && d.length > 0) {
          for (const g of d) Ht(g.element, Um), Ht(g.element, Vm), Ht(g.element, Ol);
          for (const g of d) this.destroyView(g);
        }
      }
      async transition(t, n, r) {
        const o = r.opts,
          i = o.progressAnimation ? (d) => (this.sbAni = d) : void 0,
          s = Ze(this),
          l = t.element,
          a = n && n.element,
          c = Object.assign(
            Object.assign(
              {
                mode: s,
                showGoBack: this.canGoBackSync(t),
                baseEl: this.el,
                progressCallback: i,
                animated: this.animated && le.getBoolean('animated', !0),
                enteringEl: l,
                leavingEl: a,
              },
              o
            ),
            { animationBuilder: o.animationBuilder || this.animation || le.get('navAnimation') }
          ),
          { hasCompleted: u } = await Wm(c);
        return this.transitionFinish(u, t, n, o);
      }
      transitionFinish(t, n, r, o) {
        const i = t ? n : r;
        return (
          i && this.unmountInactiveViews(i),
          { hasCompleted: t, requiresTransition: !0, enteringView: n, leavingView: r, direction: o.direction }
        );
      }
      insertViewAt(t, n) {
        const r = this.views,
          o = r.indexOf(t);
        o > -1
          ? (De(t.nav === this, 'view is not part of the nav'), r.splice(o, 1), r.splice(n, 0, t))
          : (De(!t.nav, 'nav is used'), (t.nav = this), r.splice(n, 0, t));
      }
      removeView(t) {
        De(t.state === lg || t.state === ns, 'view state should be loaded or destroyed');
        const n = this.views,
          r = n.indexOf(t);
        De(r > -1, 'view must be part of the stack'), r >= 0 && n.splice(r, 1);
      }
      destroyView(t) {
        t._destroy(), this.removeView(t);
      }
      unmountInactiveViews(t) {
        if (this.destroyed) return;
        const n = this.views,
          r = n.indexOf(t);
        for (let o = n.length - 1; o >= 0; o--) {
          const i = n[o],
            s = i.element;
          s && (o > r ? (Ht(s, Ol), this.destroyView(i)) : o < r && za(s, !0));
        }
      }
      canStart() {
        return (
          !!this.swipeGesture &&
          !this.isTransitioning &&
          this.transInstr.length === 0 &&
          this.animationEnabled &&
          this.canGoBackSync()
        );
      }
      onStart() {
        this.pop({ direction: 'back', progressAnimation: !0 });
      }
      onMove(t) {
        this.sbAni && this.sbAni.progressStep(t);
      }
      onEnd(t, n, r) {
        if (this.sbAni) {
          (this.animationEnabled = !1),
            this.sbAni.onFinish(
              () => {
                this.animationEnabled = !0;
              },
              { oneTimeCallback: !0 }
            );
          let o = t ? -0.001 : 0.001;
          t
            ? (o += ts([0, 0], [0.32, 0.72], [0, 1], [1, 1], n)[0])
            : (this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
              (o += ts([0, 0], [1, 0], [0.68, 0.28], [1, 1], n)[0])),
            this.sbAni.progressEnd(t ? 1 : 0, o, r);
        }
      }
      render() {
        return H('slot', null);
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { swipeGesture: ['swipeGestureChanged'], root: ['rootChanged'] };
      }
      static get style() {
        return f$;
      }
    },
    [
      1,
      'ion-nav',
      {
        delegate: [16],
        swipeGesture: [1028, 'swipe-gesture'],
        animated: [4],
        animation: [16],
        rootParams: [16],
        root: [1],
        push: [64],
        insert: [64],
        insertPages: [64],
        pop: [64],
        popTo: [64],
        popToRoot: [64],
        removeIndex: [64],
        setRoot: [64],
        setPages: [64],
        setRouteId: [64],
        getRouteId: [64],
        getActive: [64],
        getByIndex: [64],
        canGoBack: [64],
        getPrevious: [64],
      },
    ]
  );
function h$() {
  if (typeof customElements > 'u') return;
  ['ion-nav'].forEach((t) => {
    switch (t) {
      case 'ion-nav':
        customElements.get(t) || customElements.define(t, p$);
        break;
    }
  });
}
const m$ = h$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const g$ =
    ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}',
  v$ =
    ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}',
  y$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionStyle = ut(this, 'ionStyle', 7)),
          (this.color = void 0),
          (this.size = void 0);
      }
      sizeChanged() {
        this.emitStyle();
      }
      connectedCallback() {
        this.emitStyle();
      }
      emitStyle() {
        const t = this.getSize();
        this.ionStyle.emit({ [`title-${t}`]: !0 });
      }
      getSize() {
        return this.size !== void 0 ? this.size : 'default';
      }
      render() {
        const t = Ze(this),
          n = this.getSize();
        return H(
          qt,
          { class: Xs(this.color, { [t]: !0, [`title-${n}`]: !0, 'title-rtl': document.dir === 'rtl' }) },
          H('div', { class: 'toolbar-title' }, H('slot', null))
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { size: ['sizeChanged'] };
      }
      static get style() {
        return { ios: g$, md: v$ };
      }
    },
    [33, 'ion-title', { color: [513], size: [1] }]
  );
function w$() {
  if (typeof customElements > 'u') return;
  ['ion-title'].forEach((t) => {
    switch (t) {
      case 'ion-title':
        customElements.get(t) || customElements.define(t, y$);
        break;
    }
  });
}
const b$ = w$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const $$ =
    ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}',
  x$ =
    ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}',
  k$ = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost(), this.__attachShadow(), (this.childrenStyles = new Map()), (this.color = void 0);
      }
      componentWillLoad() {
        const t = Array.from(this.el.querySelectorAll('ion-buttons')),
          n = t.find((i) => i.slot === 'start');
        n && n.classList.add('buttons-first-slot');
        const r = t.reverse(),
          o =
            r.find((i) => i.slot === 'end') ||
            r.find((i) => i.slot === 'primary') ||
            r.find((i) => i.slot === 'secondary');
        o && o.classList.add('buttons-last-slot');
      }
      childrenStyle(t) {
        t.stopPropagation();
        const n = t.target.tagName,
          r = t.detail,
          o = {},
          i = this.childrenStyles.get(n) || {};
        let s = !1;
        Object.keys(r).forEach((l) => {
          const a = `toolbar-${l}`,
            c = r[l];
          c !== i[a] && (s = !0), c && (o[a] = !0);
        }),
          s && (this.childrenStyles.set(n, o), Aa(this));
      }
      render() {
        const t = Ze(this),
          n = {};
        return (
          this.childrenStyles.forEach((r) => {
            Object.assign(n, r);
          }),
          H(
            qt,
            {
              class: Object.assign(
                Object.assign({}, n),
                Xs(this.color, { [t]: !0, 'in-toolbar': ou('ion-toolbar', this.el) })
              ),
            },
            H('div', { class: 'toolbar-background' }),
            H(
              'div',
              { class: 'toolbar-container' },
              H('slot', { name: 'start' }),
              H('slot', { name: 'secondary' }),
              H('div', { class: 'toolbar-content' }, H('slot', null)),
              H('slot', { name: 'primary' }),
              H('slot', { name: 'end' })
            )
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: $$, md: x$ };
      }
    },
    [33, 'ion-toolbar', { color: [513] }, [[0, 'ionStyle', 'childrenStyle']]]
  );
function E$() {
  if (typeof customElements > 'u') return;
  ['ion-toolbar'].forEach((t) => {
    switch (t) {
      case 'ion-toolbar':
        customElements.get(t) || customElements.define(t, k$);
        break;
    }
  });
}
const S$ = E$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var xf;
(function (e) {
  (e.Dark = 'DARK'), (e.Light = 'LIGHT'), (e.Default = 'DEFAULT');
})(xf || (xf = {}));
const C$ =
    'html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}',
  T$ = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost();
      }
      componentDidLoad() {
        R$(async () => {
          const t = on(window, 'hybrid');
          if (
            (le.getBoolean('_testing') || Pt(() => import('./index9-8813ad14.js'), []).then((r) => r.startTapClick(le)),
            le.getBoolean('statusTap', t) &&
              Pt(() => import('./status-tap-5871c6be.js'), []).then((r) => r.startStatusTap()),
            le.getBoolean('inputShims', P$()))
          ) {
            const r = on(window, 'ios') ? 'ios' : 'android';
            Pt(() => import('./input-shims-3fc1a2c1.js'), []).then((o) => o.startInputShims(le, r));
          }
          const n = await Pt(() => import('./hardware-back-button-77fd2980.js'), []);
          le.getBoolean('hardwareBackButton', t) ? n.startHardwareBackButton() : n.blockHardwareBackButton(),
            typeof window < 'u' &&
              Pt(() => import('./keyboard2-78b51126.js'), []).then((r) => r.startKeyboardAssist(window)),
            Pt(() => import('./focus-visible-9c13edeb.js'), []).then(
              (r) => (this.focusVisible = r.startFocusVisible())
            );
        });
      }
      async setFocus(t) {
        this.focusVisible && this.focusVisible.setFocus(t);
      }
      render() {
        const t = Ze(this);
        return H(qt, {
          class: { [t]: !0, 'ion-page': !0, 'force-statusbar-padding': le.getBoolean('_forceStatusbarPadding') },
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return C$;
      }
    },
    [0, 'ion-app', { setFocus: [64] }]
  ),
  P$ = () => !!((on(window, 'ios') && on(window, 'mobile')) || (on(window, 'android') && on(window, 'mobileweb'))),
  R$ = (e) => {
    'requestIdleCallback' in window ? window.requestIdleCallback(e) : setTimeout(e, 32);
  };
function _$() {
  if (typeof customElements > 'u') return;
  ['ion-app'].forEach((t) => {
    switch (t) {
      case 'ion-app':
        customElements.get(t) || customElements.define(t, T$);
        break;
    }
  });
}
const L$ = _$,
  I$ = ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
  O$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = ut(this, 'ionNavWillLoad', 7)),
          (this.ionNavWillChange = ut(this, 'ionNavWillChange', 3)),
          (this.ionNavDidChange = ut(this, 'ionNavDidChange', 3)),
          (this.gestureOrAnimationInProgress = !1),
          (this.mode = Ze(this)),
          (this.delegate = void 0),
          (this.animated = !0),
          (this.animation = void 0),
          (this.swipeHandler = void 0);
      }
      swipeHandlerChanged() {
        this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
      }
      async connectedCallback() {
        const t = () => {
          (this.gestureOrAnimationInProgress = !0), this.swipeHandler && this.swipeHandler.onStart();
        };
        (this.gesture = (await Pt(() => import('./swipe-back-2eca1bad.js'), [])).createSwipeBackGesture(
          this.el,
          () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(),
          () => t(),
          (n) => {
            var r;
            return (r = this.ani) === null || r === void 0 ? void 0 : r.progressStep(n);
          },
          (n, r, o) => {
            if (this.ani) {
              this.ani.onFinish(
                () => {
                  (this.gestureOrAnimationInProgress = !1), this.swipeHandler && this.swipeHandler.onEnd(n);
                },
                { oneTimeCallback: !0 }
              );
              let i = n ? -0.001 : 0.001;
              n
                ? (i += ts([0, 0], [0.32, 0.72], [0, 1], [1, 1], r)[0])
                : (this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                  (i += ts([0, 0], [1, 0], [0.68, 0.28], [1, 1], r)[0])),
                this.ani.progressEnd(n ? 1 : 0, i, o);
            } else this.gestureOrAnimationInProgress = !1;
          }
        )),
          this.swipeHandlerChanged();
      }
      componentWillLoad() {
        this.ionNavWillLoad.emit();
      }
      disconnectedCallback() {
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
      }
      async commit(t, n, r) {
        const o = await this.lock();
        let i = !1;
        try {
          i = await this.transition(t, n, r);
        } catch (s) {
          console.error(s);
        }
        return o(), i;
      }
      async setRouteId(t, n, r, o) {
        return {
          changed: await this.setRoot(t, n, {
            duration: r === 'root' ? 0 : void 0,
            direction: r === 'back' ? 'back' : 'forward',
            animationBuilder: o,
          }),
          element: this.activeEl,
        };
      }
      async getRouteId() {
        const t = this.activeEl;
        return t ? { id: t.tagName, element: t, params: this.activeParams } : void 0;
      }
      async setRoot(t, n, r) {
        if (this.activeComponent === t && Fm(n, this.activeParams)) return !1;
        const o = this.activeEl,
          i = await tg(this.delegate, this.el, t, ['ion-page', 'ion-page-invisible'], n);
        return (
          (this.activeComponent = t),
          (this.activeEl = i),
          (this.activeParams = n),
          await this.commit(i, o, r),
          await Nb(this.delegate, o),
          !0
        );
      }
      async transition(t, n, r = {}) {
        if (n === t) return !1;
        this.ionNavWillChange.emit();
        const { el: o, mode: i } = this,
          s = this.animated && le.getBoolean('animated', !0),
          l = r.animationBuilder || this.animation || le.get('navAnimation');
        return (
          await Wm(
            Object.assign(
              Object.assign(
                {
                  mode: i,
                  animated: s,
                  enteringEl: t,
                  leavingEl: n,
                  baseEl: o,
                  deepWait: Ww(o),
                  progressCallback: r.progressAnimation
                    ? (a) => {
                        a !== void 0 && !this.gestureOrAnimationInProgress
                          ? ((this.gestureOrAnimationInProgress = !0),
                            a.onFinish(
                              () => {
                                (this.gestureOrAnimationInProgress = !1),
                                  this.swipeHandler && this.swipeHandler.onEnd(!1);
                              },
                              { oneTimeCallback: !0 }
                            ),
                            a.progressEnd(0, 0, 0))
                          : (this.ani = a);
                      }
                    : void 0,
                },
                r
              ),
              { animationBuilder: l }
            )
          ),
          this.ionNavDidChange.emit(),
          !0
        );
      }
      async lock() {
        const t = this.waitPromise;
        let n;
        return (this.waitPromise = new Promise((r) => (n = r))), t !== void 0 && (await t), n;
      }
      render() {
        return H('slot', null);
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { swipeHandler: ['swipeHandlerChanged'] };
      }
      static get style() {
        return I$;
      }
    },
    [
      1,
      'ion-router-outlet',
      {
        mode: [1025],
        delegate: [16],
        animated: [4],
        animation: [16],
        swipeHandler: [16],
        commit: [64],
        setRouteId: [64],
        getRouteId: [64],
      },
    ]
  );
function A$() {
  if (typeof customElements > 'u') return;
  ['ion-router-outlet'].forEach((t) => {
    switch (t) {
      case 'ion-router-outlet':
        customElements.get(t) || customElements.define(t, O$);
        break;
    }
  });
}
const M$ = A$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const N$ =
    ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}',
  D$ =
    ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}',
  z$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabBarChanged = ut(this, 'ionTabBarChanged', 7)),
          (this.keyboardCtrl = null),
          (this.keyboardVisible = !1),
          (this.color = void 0),
          (this.selectedTab = void 0),
          (this.translucent = !1);
      }
      selectedTabChanged() {
        this.selectedTab !== void 0 && this.ionTabBarChanged.emit({ tab: this.selectedTab });
      }
      componentWillLoad() {
        this.selectedTabChanged();
      }
      async connectedCallback() {
        this.keyboardCtrl = await e$(async (t, n) => {
          t === !1 && n !== void 0 && (await n), (this.keyboardVisible = t);
        });
      }
      disconnectedCallback() {
        this.keyboardCtrl && this.keyboardCtrl.destroy();
      }
      render() {
        const { color: t, translucent: n, keyboardVisible: r } = this,
          o = Ze(this),
          i = r && this.el.getAttribute('slot') !== 'top';
        return H(
          qt,
          {
            role: 'tablist',
            'aria-hidden': i ? 'true' : null,
            class: Xs(t, { [o]: !0, 'tab-bar-translucent': n, 'tab-bar-hidden': i }),
          },
          H('slot', null)
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { selectedTab: ['selectedTabChanged'] };
      }
      static get style() {
        return { ios: N$, md: D$ };
      }
    },
    [33, 'ion-tab-bar', { color: [513], selectedTab: [1, 'selected-tab'], translucent: [4], keyboardVisible: [32] }]
  );
function B$() {
  if (typeof customElements > 'u') return;
  ['ion-tab-bar'].forEach((t) => {
    switch (t) {
      case 'ion-tab-bar':
        customElements.get(t) || customElements.define(t, z$);
        break;
    }
  });
}
const H$ = B$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const j$ =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
  F$ =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
  U$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabButtonClick = ut(this, 'ionTabButtonClick', 7)),
          (this.inheritedAttributes = {}),
          (this.onKeyUp = (t) => {
            (t.key === 'Enter' || t.key === ' ') && this.selectTab(t);
          }),
          (this.onClick = (t) => {
            this.selectTab(t);
          }),
          (this.disabled = !1),
          (this.download = void 0),
          (this.href = void 0),
          (this.rel = void 0),
          (this.layout = void 0),
          (this.selected = !1),
          (this.tab = void 0),
          (this.target = void 0);
      }
      onTabBarChanged(t) {
        const n = t.target,
          r = this.el.parentElement;
        (t.composedPath().includes(r) || (n != null && n.contains(this.el))) &&
          (this.selected = this.tab === t.detail.tab);
      }
      componentWillLoad() {
        (this.inheritedAttributes = Object.assign({}, Hm(this.el, ['aria-label']))),
          this.layout === void 0 && (this.layout = le.get('tabButtonLayout', 'icon-top'));
      }
      selectTab(t) {
        this.tab !== void 0 &&
          (this.disabled || this.ionTabButtonClick.emit({ tab: this.tab, href: this.href, selected: this.selected }),
          t.preventDefault());
      }
      get hasLabel() {
        return !!this.el.querySelector('ion-label');
      }
      get hasIcon() {
        return !!this.el.querySelector('ion-icon');
      }
      render() {
        const {
            disabled: t,
            hasIcon: n,
            hasLabel: r,
            href: o,
            rel: i,
            target: s,
            layout: l,
            selected: a,
            tab: c,
            inheritedAttributes: u,
          } = this,
          d = Ze(this),
          f = { download: this.download, href: o, rel: i, target: s };
        return H(
          qt,
          {
            onClick: this.onClick,
            onKeyup: this.onKeyUp,
            id: c !== void 0 ? `tab-button-${c}` : null,
            class: {
              [d]: !0,
              'tab-selected': a,
              'tab-disabled': t,
              'tab-has-label': r,
              'tab-has-icon': n,
              'tab-has-label-only': r && !n,
              'tab-has-icon-only': n && !r,
              [`tab-layout-${l}`]: !0,
              'ion-activatable': !0,
              'ion-selectable': !0,
              'ion-focusable': !0,
            },
          },
          H(
            'a',
            Object.assign(
              {},
              f,
              {
                class: 'button-native',
                part: 'native',
                role: 'tab',
                'aria-selected': a ? 'true' : null,
                'aria-disabled': t ? 'true' : null,
                tabindex: t ? '-1' : void 0,
              },
              u
            ),
            H('span', { class: 'button-inner' }, H('slot', null)),
            d === 'md' && H('ion-ripple-effect', { type: 'unbounded' })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: j$, md: F$ };
      }
    },
    [
      33,
      'ion-tab-button',
      { disabled: [4], download: [1], href: [1], rel: [1], layout: [1025], selected: [1028], tab: [1], target: [1] },
      [[8, 'ionTabBarChanged', 'onTabBarChanged']],
    ]
  );
function V$() {
  if (typeof customElements > 'u') return;
  ['ion-tab-button', 'ion-ripple-effect'].forEach((t) => {
    switch (t) {
      case 'ion-tab-button':
        customElements.get(t) || customElements.define(t, U$);
        break;
      case 'ion-ripple-effect':
        customElements.get(t) || Ub();
        break;
    }
  });
}
const W$ = V$,
  Gn = {
    allRenderFn: !1,
    cmpDidLoad: !0,
    cmpDidUnload: !1,
    cmpDidUpdate: !0,
    cmpDidRender: !0,
    cmpWillLoad: !0,
    cmpWillUpdate: !0,
    cmpWillRender: !0,
    connectedCallback: !0,
    disconnectedCallback: !0,
    element: !0,
    event: !0,
    hasRenderFn: !0,
    lifecycle: !0,
    hostListener: !0,
    hostListenerTargetWindow: !0,
    hostListenerTargetDocument: !0,
    hostListenerTargetBody: !0,
    hostListenerTargetParent: !1,
    hostListenerTarget: !0,
    member: !0,
    method: !0,
    mode: !0,
    observeAttribute: !0,
    prop: !0,
    propMutable: !0,
    reflect: !0,
    scoped: !0,
    shadowDom: !0,
    slot: !0,
    cssAnnotations: !0,
    state: !0,
    style: !0,
    svg: !0,
    updatable: !0,
    vdomAttribute: !0,
    vdomXlink: !0,
    vdomClass: !0,
    vdomFunctional: !0,
    vdomKey: !0,
    vdomListener: !0,
    vdomRef: !0,
    vdomPropOrAttr: !0,
    vdomRender: !0,
    vdomStyle: !0,
    vdomText: !0,
    watchCallback: !0,
    taskQueue: !0,
    hotModuleReplacement: !1,
    isDebug: !1,
    isDev: !1,
    isTesting: !1,
    hydrateServerSide: !1,
    hydrateClientSide: !1,
    lifecycleDOMEvents: !1,
    lazyLoad: !1,
    profile: !1,
    slotRelocation: !0,
    appendChildSlotFix: !1,
    cloneNodeFix: !1,
    hydratedAttribute: !1,
    hydratedClass: !0,
    safari10: !1,
    scriptDataOpts: !1,
    scopedSlotTextContentFix: !1,
    shadowDomShim: !1,
    slotChildNodesFix: !1,
    invisiblePrehydration: !0,
    propBoolean: !0,
    propNumber: !0,
    propString: !0,
    cssVarShim: !1,
    constructableCSS: !0,
    cmpShouldUpdate: !0,
    devTools: !1,
    dynamicImportShim: !1,
    shadowDelegatesFocus: !0,
    initializeNextTick: !1,
    asyncLoading: !1,
    asyncQueue: !1,
    transformTagName: !1,
    attachStyles: !0,
  };
let Zn,
  ag,
  qs,
  cg = !1,
  rs = !1,
  lu = !1,
  Xe = !1,
  kf = null,
  ja = !1;
const K$ = (e) => {
    const t = new URL(e, Ie.$resourcesUrl$);
    return t.origin !== Bo.location.origin ? t.href : t.pathname;
  },
  Bn =
    (e, t = '') =>
    () => {},
  Ef = 'http://www.w3.org/1999/xlink',
  Sf = {},
  Q$ = 'http://www.w3.org/2000/svg',
  X$ = 'http://www.w3.org/1999/xhtml',
  q$ = (e) => e != null,
  au = (e) => ((e = typeof e), e === 'object' || e === 'function');
function Y$(e) {
  var t, n, r;
  return (r =
    (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null ||
    n === void 0
      ? void 0
      : n.getAttribute('content')) !== null && r !== void 0
    ? r
    : void 0;
}
const so = (e, t, ...n) => {
    let r = null,
      o = null,
      i = null,
      s = !1,
      l = !1;
    const a = [],
      c = (d) => {
        for (let f = 0; f < d.length; f++)
          (r = d[f]),
            Array.isArray(r)
              ? c(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((s = typeof e != 'function' && !au(r)) && (r = String(r)),
                s && l ? (a[a.length - 1].$text$ += r) : a.push(s ? os(null, r) : r),
                (l = s));
      };
    if ((c(n), t)) {
      t.key && (o = t.key), t.name && (i = t.name);
      {
        const d = t.className || t.class;
        d &&
          (t.class =
            typeof d != 'object'
              ? d
              : Object.keys(d)
                  .filter((f) => d[f])
                  .join(' '));
      }
    }
    if (typeof e == 'function') return e(t === null ? {} : t, a, Z$);
    const u = os(e, null);
    return (u.$attrs$ = t), a.length > 0 && (u.$children$ = a), (u.$key$ = o), (u.$name$ = i), u;
  },
  os = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  ug = {},
  G$ = (e) => e && e.$tag$ === ug,
  Z$ = { forEach: (e, t) => e.map(Cf).forEach(t), map: (e, t) => e.map(Cf).map(t).map(J$) },
  Cf = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  J$ = (e) => {
    if (typeof e.vtag == 'function') {
      const n = Object.assign({}, e.vattrs);
      return e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), so(e.vtag, n, ...(e.vchildren || []));
    }
    const t = os(e.vtag, e.vtext);
    return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
  },
  ex = (e) => Cx.map((t) => t(e)).find((t) => !!t),
  tx = (e, t) =>
    e != null && !au(e)
      ? t & 4
        ? e === 'false'
          ? !1
          : e === '' || !!e
        : t & 2
        ? parseFloat(e)
        : t & 1
        ? String(e)
        : e
      : e,
  Tf = new WeakMap(),
  nx = (e, t, n) => {
    let r = ss.get(e);
    _x && n ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t)) : (r = t),
      ss.set(e, r);
  },
  rx = (e, t, n, r) => {
    var o;
    let i = dg(t, n);
    const s = ss.get(i);
    if (((e = e.nodeType === 11 ? e : Et), s))
      if (typeof s == 'string') {
        e = e.head || e;
        let l = Tf.get(e),
          a;
        if ((l || Tf.set(e, (l = new Set())), !l.has(i))) {
          {
            (a = Et.createElement('style')), (a.innerHTML = s);
            const c = (o = Ie.$nonce$) !== null && o !== void 0 ? o : Y$(Et);
            c != null && a.setAttribute('nonce', c), e.insertBefore(a, e.querySelector('link'));
          }
          l && l.add(i);
        }
      } else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return i;
  },
  ox = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      o = Bn('attachStyles', t.$tagName$),
      i = rx(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    r & 10 && ((n['s-sc'] = i), n.classList.add(i + '-h'), r & 2 && n.classList.add(i + '-s')), o();
  },
  dg = (e, t) => 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
  Pf = (e, t, n, r, o, i) => {
    if (n !== r) {
      let s = If(e, t),
        l = t.toLowerCase();
      if (t === 'class') {
        const a = e.classList,
          c = Rf(n),
          u = Rf(r);
        a.remove(...c.filter((d) => d && !u.includes(d))), a.add(...u.filter((d) => d && !c.includes(d)));
      } else if (t === 'style') {
        for (const a in n) (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
        for (const a in r)
          (!n || r[a] !== n[a]) && (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
      } else if (t !== 'key')
        if (t === 'ref') r && r(e);
        else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
          t[2] === '-' ? (t = t.slice(3)) : If(Bo, l) ? (t = l.slice(2)) : (t = l[2] + t.slice(3)),
            n && Ie.rel(e, t, n, !1),
            r && Ie.ael(e, t, r, !1);
        else {
          const a = au(r);
          if ((s || (a && r !== null)) && !o)
            try {
              if (e.tagName.includes('-')) e[t] = r;
              else {
                const u = r == null ? '' : r;
                t === 'list' ? (s = !1) : (n == null || e[t] != u) && (e[t] = u);
              }
            } catch (u) {}
          let c = !1;
          l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
            r == null || r === !1
              ? (r !== !1 || e.getAttribute(t) === '') && (c ? e.removeAttributeNS(Ef, t) : e.removeAttribute(t))
              : (!s || i & 4 || o) &&
                !a &&
                ((r = r === !0 ? '' : r), c ? e.setAttributeNS(Ef, t, r) : e.setAttribute(t, r));
        }
    }
  },
  ix = /\s/,
  Rf = (e) => (e ? e.split(ix) : []),
  fg = (e, t, n, r) => {
    const o = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || Sf,
      s = t.$attrs$ || Sf;
    for (r in i) r in s || Pf(o, r, i[r], void 0, n, t.$flags$);
    for (r in s) Pf(o, r, i[r], s[r], n, t.$flags$);
  },
  is = (e, t, n, r) => {
    const o = t.$children$[n];
    let i = 0,
      s,
      l,
      a;
    if (
      (cg || ((lu = !0), o.$tag$ === 'slot' && (Zn && r.classList.add(Zn + '-s'), (o.$flags$ |= o.$children$ ? 2 : 1))),
      o.$text$ !== null)
    )
      s = o.$elm$ = Et.createTextNode(o.$text$);
    else if (o.$flags$ & 1) s = o.$elm$ = Et.createTextNode('');
    else {
      if (
        (Xe || (Xe = o.$tag$ === 'svg'),
        (s = o.$elm$ = Et.createElementNS(Xe ? Q$ : X$, o.$flags$ & 2 ? 'slot-fb' : o.$tag$)),
        Xe && o.$tag$ === 'foreignObject' && (Xe = !1),
        fg(null, o, Xe),
        q$(Zn) && s['s-si'] !== Zn && s.classList.add((s['s-si'] = Zn)),
        o.$children$)
      )
        for (i = 0; i < o.$children$.length; ++i) (l = is(e, o, i, s)), l && s.appendChild(l);
      o.$tag$ === 'svg' ? (Xe = !1) : s.tagName === 'foreignObject' && (Xe = !0);
    }
    return (
      (s['s-hn'] = qs),
      o.$flags$ & 3 &&
        ((s['s-sr'] = !0),
        (s['s-cr'] = ag),
        (s['s-sn'] = o.$name$ || ''),
        (a = e && e.$children$ && e.$children$[n]),
        a && a.$tag$ === o.$tag$ && e.$elm$ && Ro(e.$elm$, !1)),
      s
    );
  },
  Ro = (e, t) => {
    Ie.$flags$ |= 1;
    const n = e.childNodes;
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r];
      o['s-hn'] !== qs &&
        o['s-ol'] &&
        (mg(o).insertBefore(o, cu(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (lu = !0)),
        t && Ro(o, t);
    }
    Ie.$flags$ &= -2;
  },
  pg = (e, t, n, r, o, i) => {
    let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
      l;
    for (s.shadowRoot && s.tagName === qs && (s = s.shadowRoot); o <= i; ++o)
      r[o] && ((l = is(null, n, o, e)), l && ((r[o].$elm$ = l), s.insertBefore(l, cu(t))));
  },
  hg = (e, t, n, r, o) => {
    for (; t <= n; ++t)
      (r = e[t]) && ((o = r.$elm$), yg(r), (rs = !0), o['s-ol'] ? o['s-ol'].remove() : Ro(o, !0), o.remove());
  },
  sx = (e, t, n, r) => {
    let o = 0,
      i = 0,
      s = 0,
      l = 0,
      a = t.length - 1,
      c = t[0],
      u = t[a],
      d = r.length - 1,
      f = r[0],
      g = r[d],
      y,
      $;
    for (; o <= a && i <= d; )
      if (c == null) c = t[++o];
      else if (u == null) u = t[--a];
      else if (f == null) f = r[++i];
      else if (g == null) g = r[--d];
      else if (ui(c, f)) Jn(c, f), (c = t[++o]), (f = r[++i]);
      else if (ui(u, g)) Jn(u, g), (u = t[--a]), (g = r[--d]);
      else if (ui(c, g))
        (c.$tag$ === 'slot' || g.$tag$ === 'slot') && Ro(c.$elm$.parentNode, !1),
          Jn(c, g),
          e.insertBefore(c.$elm$, u.$elm$.nextSibling),
          (c = t[++o]),
          (g = r[--d]);
      else if (ui(u, f))
        (c.$tag$ === 'slot' || g.$tag$ === 'slot') && Ro(u.$elm$.parentNode, !1),
          Jn(u, f),
          e.insertBefore(u.$elm$, c.$elm$),
          (u = t[--a]),
          (f = r[++i]);
      else {
        for (s = -1, l = o; l <= a; ++l)
          if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
            s = l;
            break;
          }
        s >= 0
          ? (($ = t[s]),
            $.$tag$ !== f.$tag$ ? (y = is(t && t[i], n, s, e)) : (Jn($, f), (t[s] = void 0), (y = $.$elm$)),
            (f = r[++i]))
          : ((y = is(t && t[i], n, i, e)), (f = r[++i])),
          y && mg(c.$elm$).insertBefore(y, cu(c.$elm$));
      }
    o > a ? pg(e, r[d + 1] == null ? null : r[d + 1].$elm$, n, r, i, d) : i > d && hg(t, o, a);
  },
  ui = (e, t) => (e.$tag$ === t.$tag$ ? (e.$tag$ === 'slot' ? e.$name$ === t.$name$ : e.$key$ === t.$key$) : !1),
  cu = (e) => (e && e['s-ol']) || e,
  mg = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  Jn = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      r = e.$children$,
      o = t.$children$,
      i = t.$tag$,
      s = t.$text$;
    let l;
    s === null
      ? ((Xe = i === 'svg' ? !0 : i === 'foreignObject' ? !1 : Xe),
        i === 'slot' || fg(e, t, Xe),
        r !== null && o !== null
          ? sx(n, r, t, o)
          : o !== null
          ? (e.$text$ !== null && (n.textContent = ''), pg(n, null, t, o, 0, o.length - 1))
          : r !== null && hg(r, 0, r.length - 1),
        Xe && i === 'svg' && (Xe = !1))
      : (l = n['s-cr'])
      ? (l.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  gg = (e) => {
    const t = e.childNodes;
    let n, r, o, i, s, l;
    for (r = 0, o = t.length; r < o; r++)
      if (((n = t[r]), n.nodeType === 1)) {
        if (n['s-sr']) {
          for (s = n['s-sn'], n.hidden = !1, i = 0; i < o; i++)
            if (((l = t[i].nodeType), t[i]['s-hn'] !== n['s-hn'] || s !== '')) {
              if (l === 1 && s === t[i].getAttribute('slot')) {
                n.hidden = !0;
                break;
              }
            } else if (l === 1 || (l === 3 && t[i].textContent.trim() !== '')) {
              n.hidden = !0;
              break;
            }
        }
        gg(n);
      }
  },
  bt = [],
  vg = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = 0;
    const a = e.childNodes,
      c = a.length;
    for (; l < c; l++) {
      if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
        for (r = n.parentNode.childNodes, o = t['s-sn'], s = r.length - 1; s >= 0; s--)
          (n = r[s]),
            !n['s-cn'] &&
              !n['s-nr'] &&
              n['s-hn'] !== t['s-hn'] &&
              (_f(n, o)
                ? ((i = bt.find((u) => u.$nodeToRelocate$ === n)),
                  (rs = !0),
                  (n['s-sn'] = n['s-sn'] || o),
                  i ? (i.$slotRefNode$ = t) : bt.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n['s-sr'] &&
                    bt.map((u) => {
                      _f(u.$nodeToRelocate$, n['s-sn']) &&
                        ((i = bt.find((d) => d.$nodeToRelocate$ === n)),
                        i && !u.$slotRefNode$ && (u.$slotRefNode$ = i.$slotRefNode$));
                    }))
                : bt.some((u) => u.$nodeToRelocate$ === n) || bt.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && vg(t);
    }
  },
  _f = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute('slot') === null && t === '') || e.getAttribute('slot') === t
      : e['s-sn'] === t
      ? !0
      : t === '',
  yg = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(yg);
  },
  lx = (e, t) => {
    const n = e.$hostElement$,
      r = e.$cmpMeta$,
      o = e.$vnode$ || os(null, null),
      i = G$(t) ? t : so(null, null, t);
    (qs = n.tagName),
      r.$attrsToReflect$ && ((i.$attrs$ = i.$attrs$ || {}), r.$attrsToReflect$.map(([s, l]) => (i.$attrs$[l] = n[s]))),
      (i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = o.$elm$ = n.shadowRoot || n),
      (Zn = n['s-sc']),
      (ag = n['s-cr']),
      (cg = (r.$flags$ & 1) !== 0),
      (rs = !1),
      Jn(o, i);
    {
      if (((Ie.$flags$ |= 1), lu)) {
        vg(i.$elm$);
        let s,
          l,
          a,
          c,
          u,
          d,
          f = 0;
        for (; f < bt.length; f++)
          (s = bt[f]),
            (l = s.$nodeToRelocate$),
            l['s-ol'] || ((a = Et.createTextNode('')), (a['s-nr'] = l), l.parentNode.insertBefore((l['s-ol'] = a), l));
        for (f = 0; f < bt.length; f++)
          if (((s = bt[f]), (l = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              c = s.$slotRefNode$.parentNode, u = s.$slotRefNode$.nextSibling, a = l['s-ol'];
              (a = a.previousSibling);

            )
              if (
                ((d = a['s-nr']),
                d && d['s-sn'] === l['s-sn'] && c === d.parentNode && ((d = d.nextSibling), !d || !d['s-nr']))
              ) {
                u = d;
                break;
              }
            ((!u && c !== l.parentNode) || l.nextSibling !== u) &&
              l !== u &&
              (!l['s-hn'] && l['s-ol'] && (l['s-hn'] = l['s-ol'].parentNode.nodeName), c.insertBefore(l, u));
          } else l.nodeType === 1 && (l.hidden = !0);
      }
      rs && gg(i.$elm$), (Ie.$flags$ &= -2), (bt.length = 0);
    }
  },
  ax = (e, t) => {},
  wg = (e, t) => ((e.$flags$ |= 16), ax(e, e.$ancestorComponent$), Ox(() => cx(e, t))),
  cx = (e, t) => {
    const n = e.$hostElement$,
      r = Bn('scheduleUpdate', e.$cmpMeta$.$tagName$),
      o = n;
    let i;
    return (
      t ? (i = wr(o, 'componentWillLoad')) : (i = wr(o, 'componentWillUpdate')),
      (i = Lf(i, () => wr(o, 'componentWillRender'))),
      r(),
      Lf(i, () => ux(e, o, t))
    );
  },
  ux = async (e, t, n) => {
    const r = e.$hostElement$,
      o = Bn('update', e.$cmpMeta$.$tagName$);
    r['s-rc'], n && ox(e);
    const i = Bn('render', e.$cmpMeta$.$tagName$);
    dx(e, t, r), i(), o(), fx(e);
  },
  dx = (e, t, n) => {
    try {
      (kf = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Gn.hasRenderFn || Gn.reflect) && (Gn.vdomRender || Gn.reflect) && (Gn.hydrateServerSide || lx(e, t));
    } catch (l) {
      zo(l, e.$hostElement$);
    }
    return (kf = null), null;
  },
  fx = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = Bn('postUpdate', t),
      o = n;
    e.$ancestorComponent$,
      wr(o, 'componentDidRender'),
      e.$flags$ & 64 ? (wr(o, 'componentDidUpdate'), r()) : ((e.$flags$ |= 64), wr(o, 'componentDidLoad'), r());
  },
  wr = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (r) {
        zo(r);
      }
  },
  Lf = (e, t) => (e && e.then ? e.then(t) : t()),
  px = (e, t) => Ys(e).$instanceValues$.get(t),
  hx = (e, t, n, r) => {
    const o = Ys(e),
      i = e,
      s = o.$instanceValues$.get(t),
      l = o.$flags$,
      a = i;
    n = tx(n, r.$members$[t][0]);
    const c = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !c) {
      o.$instanceValues$.set(t, n);
      {
        if (r.$watchers$ && l & 128) {
          const d = r.$watchers$[t];
          d &&
            d.map((f) => {
              try {
                a[f](n, s, t);
              } catch (g) {
                zo(g, i);
              }
            });
        }
        if ((l & 18) === 2) {
          if (a.componentShouldUpdate && a.componentShouldUpdate(n, s, t) === !1) return;
          wg(o, !1);
        }
      }
    }
  },
  mx = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const r = Object.entries(t.$members$),
        o = e.prototype;
      r.map(([i, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(o, i, {
            get() {
              return px(this, i);
            },
            set(l) {
              hx(this, i, l, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const i = new Map();
        (o.attributeChangedCallback = function (s, l, a) {
          Ie.jmp(() => {
            const c = i.get(s);
            if (this.hasOwnProperty(c)) (a = this[c]), delete this[c];
            else if (o.hasOwnProperty(c) && typeof this[c] == 'number' && this[c] == a) return;
            this[c] = a === null && typeof this[c] == 'boolean' ? !1 : a;
          });
        }),
          (e.observedAttributes = r
            .filter(([s, l]) => l[0] & 15)
            .map(([s, l]) => {
              const a = l[1] || s;
              return i.set(a, s), l[0] & 512 && t.$attrsToReflect$.push([s, a]), a;
            }));
      }
    }
    return e;
  },
  gx = async (e, t, n, r, o) => {
    if (
      !(t.$flags$ & 32) &&
      ((o = e.constructor),
      (t.$flags$ |= 32),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      o.style)
    ) {
      let s = o.style;
      typeof s != 'string' && (s = s[(t.$modeName$ = ex(e))]);
      const l = dg(n, t.$modeName$);
      if (!ss.has(l)) {
        const a = Bn('registerStyles', n.$tagName$);
        nx(l, s, !!(n.$flags$ & 1)), a();
      }
    }
    t.$ancestorComponent$, (() => wg(t, !0))();
  },
  vx = (e) => {},
  yx = (e) => {
    if (!(Ie.$flags$ & 1)) {
      const t = Ys(e),
        n = t.$cmpMeta$,
        r = Bn('connectedCallback', n.$tagName$);
      t.$flags$ & 1
        ? (bg(e, t, n.$listeners$), vx(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && wx(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([o, [i]]) => {
              if (i & 31 && e.hasOwnProperty(o)) {
                const s = e[o];
                delete e[o], (e[o] = s);
              }
            }),
          gx(e, t, n)),
        r();
    }
  },
  wx = (e) => {
    const t = (e['s-cr'] = Et.createComment(''));
    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
  },
  bx = (e) => {
    if (!(Ie.$flags$ & 1)) {
      const t = Ys(e);
      t.$rmListeners$ && (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  $x = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    (n.$members$ = t[2]), (n.$listeners$ = t[3]), (n.$watchers$ = e.$watchers$), (n.$attrsToReflect$ = []);
    const r = e.prototype.connectedCallback,
      o = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          Sx(this, n);
        },
        connectedCallback() {
          yx(this), r && r.call(this);
        },
        disconnectedCallback() {
          bx(this), o && o.call(this);
        },
        __attachShadow() {
          this.attachShadow({ mode: 'open', delegatesFocus: !!(n.$flags$ & 16) });
        },
      }),
      (e.is = n.$tagName$),
      mx(e, n)
    );
  },
  bg = (e, t, n, r) => {
    n &&
      n.map(([o, i, s]) => {
        const l = kx(e, o),
          a = xx(t, s),
          c = Ex(o);
        Ie.ael(l, i, a, c), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Ie.rel(l, i, a, c));
      });
  },
  xx = (e, t) => (n) => {
    try {
      Gn.lazyLoad || e.$hostElement$[t](n);
    } catch (r) {
      zo(r);
    }
  },
  kx = (e, t) => (t & 4 ? Et : t & 8 ? Bo : t & 16 ? Et.body : e),
  Ex = (e) => (Px ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0),
  $g = new WeakMap(),
  Ys = (e) => $g.get(e),
  Sx = (e, t) => {
    const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
    return bg(e, n, t.$listeners$), $g.set(e, n);
  },
  If = (e, t) => t in e,
  zo = (e, t) => (0, console.error)(e, t),
  ss = new Map(),
  Cx = [],
  Bo = typeof window < 'u' ? window : {},
  Et = Bo.document || { head: {} },
  Tx = Bo.HTMLElement || class {},
  Ie = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Px = (() => {
    let e = !1;
    try {
      Et.addEventListener(
        'e',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            e = !0;
          },
        })
      );
    } catch (t) {}
    return e;
  })(),
  Rx = (e) => Promise.resolve(e),
  _x = (() => {
    try {
      return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function';
    } catch (e) {}
    return !1;
  })(),
  Of = [],
  xg = [],
  Lx = (e, t) => (n) => {
    e.push(n), ja || ((ja = !0), t && Ie.$flags$ & 4 ? Ix(Fa) : Ie.raf(Fa));
  },
  Af = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        zo(n);
      }
    e.length = 0;
  },
  Fa = () => {
    Af(Of), Af(xg), (ja = Of.length > 0) && Ie.raf(Fa);
  },
  Ix = (e) => Rx().then(e),
  Ox = Lx(xg, !0);
let Al;
const Ax = () => {
    if (typeof window > 'u') return new Map();
    if (!Al) {
      const e = window;
      (e.Ionicons = e.Ionicons || {}), (Al = e.Ionicons.map = e.Ionicons.map || new Map());
    }
    return Al;
  },
  Mx = (e) => {
    let t = Ml(e.src);
    return (
      t ||
      ((t = kg(e.name, e.icon, e.mode, e.ios, e.md)),
      t ? Nx(t) : e.icon && ((t = Ml(e.icon)), t || ((t = Ml(e.icon[e.mode])), t)) ? t : null)
    );
  },
  Nx = (e) => {
    const t = Ax().get(e);
    return t || K$(`svg/${e}.svg`);
  },
  kg = (e, t, n, r, o) => (
    (n = (n && di(n)) === 'ios' ? 'ios' : 'md'),
    r && n === 'ios'
      ? (e = di(r))
      : o && n === 'md'
      ? (e = di(o))
      : (!e && t && !Eg(t) && (e = t), ls(e) && (e = di(e))),
    !ls(e) || e.trim() === '' || e.replace(/[a-z]|-|\d/gi, '') !== '' ? null : e
  ),
  Ml = (e) => (ls(e) && ((e = e.trim()), Eg(e)) ? e : null),
  Eg = (e) => e.length > 0 && /(\/|\.)/.test(e),
  ls = (e) => typeof e == 'string',
  di = (e) => e.toLowerCase(),
  Dx = (e, t = []) => {
    const n = {};
    return (
      t.forEach((r) => {
        e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
      }),
      n
    );
  },
  zx = (e) =>
    e && e.dir !== ''
      ? e.dir.toLowerCase() === 'rtl'
      : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl',
  Bx = (e) => {
    const t = document.createElement('div');
    t.innerHTML = e;
    for (let r = t.childNodes.length - 1; r >= 0; r--)
      t.childNodes[r].nodeName.toLowerCase() !== 'svg' && t.removeChild(t.childNodes[r]);
    const n = t.firstElementChild;
    if (n && n.nodeName.toLowerCase() === 'svg') {
      const r = n.getAttribute('class') || '';
      if ((n.setAttribute('class', (r + ' s-ion-icon').trim()), Sg(n))) return t.innerHTML;
    }
    return '';
  },
  Sg = (e) => {
    if (e.nodeType === 1) {
      if (e.nodeName.toLowerCase() === 'script') return !1;
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        if (ls(n) && n.toLowerCase().indexOf('on') === 0) return !1;
      }
      for (let t = 0; t < e.childNodes.length; t++) if (!Sg(e.childNodes[t])) return !1;
    }
    return !0;
  },
  Hx = (e) => e.startsWith('data:image/svg+xml'),
  jx = (e) => e.indexOf(';utf8,') !== -1,
  Pn = new Map(),
  Mf = new Map();
let Nl;
const Fx = (e, t) => {
    let n = Mf.get(e);
    if (!n)
      if (typeof fetch < 'u' && typeof document < 'u')
        if (Hx(e) && jx(e)) {
          Nl || (Nl = new DOMParser());
          const o = Nl.parseFromString(e, 'text/html').querySelector('svg');
          return o && Pn.set(e, o.outerHTML), Promise.resolve();
        } else
          (n = fetch(e).then((r) => {
            if (r.ok)
              return r.text().then((o) => {
                o && t !== !1 && (o = Bx(o)), Pn.set(e, o || '');
              });
            Pn.set(e, '');
          })),
            Mf.set(e, n);
      else return Pn.set(e, ''), Promise.resolve();
    return n;
  },
  Ux =
    ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
  Vx = $x(
    class extends Tx {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.iconName = null),
          (this.inheritedAttributes = {}),
          (this.isVisible = !1),
          (this.mode = Wx()),
          (this.lazy = !1),
          (this.sanitize = !0);
      }
      componentWillLoad() {
        this.inheritedAttributes = Dx(this.el, ['aria-label']);
      }
      connectedCallback() {
        this.waitUntilVisible(this.el, '50px', () => {
          (this.isVisible = !0), this.loadIcon();
        });
      }
      disconnectedCallback() {
        this.io && (this.io.disconnect(), (this.io = void 0));
      }
      waitUntilVisible(e, t, n) {
        if (this.lazy && typeof window < 'u' && window.IntersectionObserver) {
          const r = (this.io = new window.IntersectionObserver(
            (o) => {
              o[0].isIntersecting && (r.disconnect(), (this.io = void 0), n());
            },
            { rootMargin: t }
          ));
          r.observe(e);
        } else n();
      }
      loadIcon() {
        if (this.isVisible) {
          const e = Mx(this);
          e &&
            (Pn.has(e)
              ? (this.svgContent = Pn.get(e))
              : Fx(e, this.sanitize).then(() => (this.svgContent = Pn.get(e))));
        }
        this.iconName = kg(this.name, this.icon, this.mode, this.ios, this.md);
      }
      render() {
        const { flipRtl: e, iconName: t, inheritedAttributes: n, el: r } = this,
          o = this.mode || 'md',
          i = t ? (t.includes('arrow') || t.includes('chevron')) && e !== !1 : !1,
          s = e || i;
        return so(
          ug,
          Object.assign(
            {
              role: 'img',
              class: Object.assign(Object.assign({ [o]: !0 }, Kx(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                'flip-rtl': s,
                'icon-rtl': s && zx(r),
              }),
            },
            n
          ),
          this.svgContent
            ? so('div', { class: 'icon-inner', innerHTML: this.svgContent })
            : so('div', { class: 'icon-inner' })
        );
      }
      static get assetsDirs() {
        return ['svg'];
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { name: ['loadIcon'], src: ['loadIcon'], icon: ['loadIcon'], ios: ['loadIcon'], md: ['loadIcon'] };
      }
      static get style() {
        return Ux;
      }
    },
    [
      1,
      'ion-icon',
      {
        mode: [1025],
        color: [1],
        ios: [1],
        md: [1],
        flipRtl: [4, 'flip-rtl'],
        name: [513],
        src: [1],
        icon: [8],
        size: [1],
        lazy: [4],
        sanitize: [4],
        svgContent: [32],
        isVisible: [32],
      },
    ]
  ),
  Wx = () => (typeof document < 'u' && document.documentElement.getAttribute('mode')) || 'md',
  Kx = (e) => (e ? { 'ion-color': !0, [`ion-color-${e}`]: !0 } : null);
function Qx() {
  if (typeof customElements > 'u') return;
  ['ion-icon'].forEach((t) => {
    switch (t) {
      case 'ion-icon':
        customElements.get(t) || customElements.define(t, Vx);
        break;
    }
  });
}
const Xx = Qx,
  uu = b.createContext({
    onIonViewWillEnter: () => {},
    ionViewWillEnter: () => {},
    onIonViewDidEnter: () => {},
    ionViewDidEnter: () => {},
    onIonViewWillLeave: () => {},
    ionViewWillLeave: () => {},
    onIonViewDidLeave: () => {},
    ionViewDidLeave: () => {},
  }),
  qx = class {
    constructor() {
      (this.ionViewWillEnterCallbacks = []),
        (this.ionViewDidEnterCallbacks = []),
        (this.ionViewWillLeaveCallbacks = []),
        (this.ionViewDidLeaveCallbacks = []);
    }
    onIonViewWillEnter(e) {
      if (e.id) {
        const t = this.ionViewWillEnterCallbacks.findIndex((n) => n.id === e.id);
        t > -1 ? (this.ionViewWillEnterCallbacks[t] = e) : this.ionViewWillEnterCallbacks.push(e);
      } else this.ionViewWillEnterCallbacks.push(e);
    }
    ionViewWillEnter() {
      this.ionViewWillEnterCallbacks.forEach((e) => e());
    }
    onIonViewDidEnter(e) {
      if (e.id) {
        const t = this.ionViewDidEnterCallbacks.findIndex((n) => n.id === e.id);
        t > -1 ? (this.ionViewDidEnterCallbacks[t] = e) : this.ionViewDidEnterCallbacks.push(e);
      } else this.ionViewDidEnterCallbacks.push(e);
    }
    ionViewDidEnter() {
      this.ionViewDidEnterCallbacks.forEach((e) => e());
    }
    onIonViewWillLeave(e) {
      if (e.id) {
        const t = this.ionViewWillLeaveCallbacks.findIndex((n) => n.id === e.id);
        t > -1 ? (this.ionViewWillLeaveCallbacks[t] = e) : this.ionViewWillLeaveCallbacks.push(e);
      } else this.ionViewWillLeaveCallbacks.push(e);
    }
    ionViewWillLeave() {
      this.ionViewWillLeaveCallbacks.forEach((e) => e());
    }
    onIonViewDidLeave(e) {
      if (e.id) {
        const t = this.ionViewDidLeaveCallbacks.findIndex((n) => n.id === e.id);
        t > -1 ? (this.ionViewDidLeaveCallbacks[t] = e) : this.ionViewDidLeaveCallbacks.push(e);
      } else this.ionViewDidLeaveCallbacks.push(e);
    }
    ionViewDidLeave() {
      this.ionViewDidLeaveCallbacks.forEach((e) => e()), this.componentCanBeDestroyed();
    }
    onComponentCanBeDestroyed(e) {
      this.componentCanBeDestroyedCallback = e;
    }
    componentCanBeDestroyed() {
      this.componentCanBeDestroyedCallback && this.componentCanBeDestroyedCallback();
    }
  },
  $n = b.createContext({
    getIonRedirect: () => {},
    getIonRoute: () => {},
    getPageManager: () => {},
    getStackManager: () => {},
    goBack: (e) => {
      typeof window < 'u' && (typeof e == 'string' ? (window.location.pathname = e) : window.history.back());
    },
    navigate: (e) => {
      typeof window < 'u' && (window.location.pathname = e);
    },
    hasIonicRouter: () => !1,
    routeInfo: void 0,
    setCurrentTab: () => {},
    changeTab: (e, t) => {
      typeof window < 'u' && (window.location.pathname = t);
    },
    resetTab: (e, t) => {
      typeof window < 'u' && (window.location.pathname = t);
    },
  }),
  Yx = (e) =>
    e
      .toLowerCase()
      .split('-')
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(''),
  Cg = (e) => e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`),
  Gx = (e, t, n = {}) => {
    if (e instanceof Element) {
      const r = Zx(e.classList, t, n);
      r !== '' && (e.className = r),
        Object.keys(t).forEach((o) => {
          if (
            !(
              o === 'children' ||
              o === 'style' ||
              o === 'ref' ||
              o === 'class' ||
              o === 'className' ||
              o === 'forwardedRef'
            )
          )
            if (o.indexOf('on') === 0 && o[2] === o[2].toUpperCase()) {
              const i = o.substring(2),
                s = i[0].toLowerCase() + i.substring(1);
              Tg(s) || Jx(e, s, t[o]);
            } else (e[o] = t[o]), typeof t[o] === 'string' && e.setAttribute(Cg(o), t[o]);
        });
    }
  },
  Zx = (e, t, n) => {
    const r = t.className || t.class,
      o = n.className || n.class,
      i = Dl(e),
      s = Dl(r ? r.split(' ') : []),
      l = Dl(o ? o.split(' ') : []),
      a = [];
    return (
      i.forEach((c) => {
        s.has(c) ? (a.push(c), s.delete(c)) : l.has(c) || a.push(c);
      }),
      s.forEach((c) => a.push(c)),
      a.join(' ')
    );
  };
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Tg = (e) => {
    if (typeof document > 'u') return !0;
    {
      const t = 'on' + e;
      let n = t in document;
      if (!n) {
        const r = document.createElement('div');
        r.setAttribute(t, 'return;'), (n = typeof r[t] == 'function');
      }
      return n;
    }
  },
  Jx = (e, t, n) => {
    const r = e.__events || (e.__events = {}),
      o = r[t];
    o && e.removeEventListener(t, o),
      e.addEventListener(
        t,
        (r[t] = function (s) {
          n && n.call(this, s);
        })
      );
  },
  Dl = (e) => {
    const t = new Map();
    return e.forEach((n) => t.set(n, n)), t;
  },
  ek = (e, t) => {
    typeof e == 'function' ? e(t) : e != null && (e.current = t);
  },
  Pg =
    (...e) =>
    (t) => {
      e.forEach((n) => {
        ek(n, t);
      });
    },
  tk = (e, t) => {
    const n = (r, o) => b.createElement(e, Object.assign({}, r, { forwardedRef: o }));
    return (n.displayName = t), b.forwardRef(n);
  },
  Mt = (e, t, n, r) => {
    r !== void 0 && r();
    const o = Yx(e),
      i = class extends b.Component {
        constructor(s) {
          super(s),
            (this.setComponentElRef = (l) => {
              this.componentEl = l;
            });
        }
        componentDidMount() {
          this.componentDidUpdate(this.props);
        }
        componentDidUpdate(s) {
          Gx(this.componentEl, this.props, s);
        }
        render() {
          const s = this.props,
            { children: l, forwardedRef: a, style: c, className: u, ref: d } = s,
            f = We(s, ['children', 'forwardedRef', 'style', 'className', 'ref']);
          let g = Object.keys(f).reduce(($, A) => {
            const h = f[A];
            if (A.indexOf('on') === 0 && A[2] === A[2].toUpperCase()) {
              const p = A.substring(2).toLowerCase();
              typeof document < 'u' && Tg(p) && ($[A] = h);
            } else {
              const p = typeof h;
              (p === 'string' || p === 'boolean' || p === 'number') && ($[Cg(A)] = h);
            }
            return $;
          }, {});
          n && (g = n(this.props, g));
          const y = Object.assign(Object.assign({}, g), { ref: Pg(a, this.setComponentElRef), style: c });
          return _t.createElement(e, y, l);
        }
        static get displayName() {
          return o;
        }
      };
    return t && (i.contextType = t), tk(i, o);
  },
  nk = Mt('ion-content', void 0, void 0, Gb),
  Nf = Mt('ion-header', void 0, void 0, u$),
  Df = Mt('ion-title', void 0, void 0, b$),
  zf = Mt('ion-toolbar', void 0, void 0, S$),
  Ho = (e, t) => {
    const n = (r, o) => b.createElement(e, Object.assign({}, r, { forwardedRef: o }));
    return (n.displayName = t), b.forwardRef(n);
  },
  du = () => {
    if (typeof window < 'u') {
      const e = window.Ionic;
      if (e && e.config) return e.config;
    }
    return null;
  },
  rk = b.createContext({ addOverlay: () => {}, removeOverlay: () => {} }),
  ok = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
    const [n, r] = _t.useState({}),
      o = _t.useRef({});
    (o.current = n),
      _t.useEffect(() => {
        e(i), t(s);
      }, []);
    const i = (a, c, u) => {
        const d = Object.assign({}, o.current);
        (d[a] = { component: c, containerElement: u }), r(d);
      },
      s = (a) => {
        const c = Object.assign({}, o.current);
        delete c[a], r(c);
      },
      l = Object.keys(n);
    return b.createElement(
      b.Fragment,
      null,
      l.map((a) => {
        const c = n[a];
        return F0.createPortal(c.component, c.containerElement, `overlay-${a}`);
      })
    );
  },
  ik = Mt('ion-tab-button', void 0, void 0, W$),
  sk = Mt('ion-tab-bar', void 0, void 0, H$),
  Ua = Mt('ion-router-outlet', void 0, void 0, M$),
  lk = Mt('ion-app', void 0, void 0, L$),
  ak = Mt('ion-icon', void 0, void 0, Xx),
  ck = (() =>
    class extends b.Component {
      constructor(e) {
        super(e),
          (this.ionContext = {
            addOverlay: (t, n, r) => {
              this.addOverlayCallback && this.addOverlayCallback(t, n, r);
            },
            removeOverlay: (t) => {
              this.removeOverlayCallback && this.removeOverlayCallback(t);
            },
          });
      }
      render() {
        return b.createElement(
          rk.Provider,
          { value: this.ionContext },
          b.createElement(lk, Object.assign({}, this.props), this.props.children),
          b.createElement(ok, {
            onAddOverlay: (e) => {
              this.addOverlayCallback = e;
            },
            onRemoveOverlay: (e) => {
              this.removeOverlayCallback = e;
            },
          })
        );
      }
      static get displayName() {
        return 'IonApp';
      }
    })(),
  fu = b.createContext({ registerIonPage: () => {}, isInOutlet: () => !1 });
class Rg extends b.PureComponent {
  constructor(t) {
    super(t),
      (this.ionPageElementRef = b.createRef()),
      (this.stableMergedRefs = Pg(this.ionPageElementRef, this.props.forwardedRef));
  }
  componentDidMount() {
    this.ionPageElementRef.current &&
      (this.context.isInOutlet() && this.ionPageElementRef.current.classList.add('ion-page-invisible'),
      this.context.registerIonPage(this.ionPageElementRef.current, this.props.routeInfo),
      this.ionPageElementRef.current.addEventListener('ionViewWillEnter', this.ionViewWillEnterHandler.bind(this)),
      this.ionPageElementRef.current.addEventListener('ionViewDidEnter', this.ionViewDidEnterHandler.bind(this)),
      this.ionPageElementRef.current.addEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler.bind(this)),
      this.ionPageElementRef.current.addEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler.bind(this)));
  }
  componentWillUnmount() {
    this.ionPageElementRef.current &&
      (this.ionPageElementRef.current.removeEventListener('ionViewWillEnter', this.ionViewWillEnterHandler.bind(this)),
      this.ionPageElementRef.current.removeEventListener('ionViewDidEnter', this.ionViewDidEnterHandler.bind(this)),
      this.ionPageElementRef.current.removeEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler.bind(this)),
      this.ionPageElementRef.current.removeEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler.bind(this)));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const t = this.props,
      { className: n, children: r, routeInfo: o, forwardedRef: i } = t,
      s = We(t, ['className', 'children', 'routeInfo', 'forwardedRef']);
    return b.createElement(
      uu.Consumer,
      null,
      (l) => (
        (this.ionLifeCycleContext = l),
        b.createElement(
          'div',
          Object.assign({ className: n ? `${n} ion-page` : 'ion-page', ref: this.stableMergedRefs }, s),
          r
        )
      )
    );
  }
  static get contextType() {
    return fu;
  }
}
class uk extends b.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.props,
      { className: n, children: r, forwardedRef: o } = t,
      i = We(t, ['className', 'children', 'forwardedRef']);
    return this.context.hasIonicRouter()
      ? b.createElement(
          Rg,
          Object.assign({ className: n ? `${n}` : '', routeInfo: this.context.routeInfo, forwardedRef: o }, i),
          r
        )
      : b.createElement('div', Object.assign({ className: n ? `ion-page ${n}` : 'ion-page', ref: o }, i), r);
  }
  static get displayName() {
    return 'IonPage';
  }
  static get contextType() {
    return $n;
  }
}
const dk = Ho(uk, 'IonPage'),
  fk = (e, t) => {
    const n = new WeakMap();
    return {
      attachViewToDom: async (i, s, l, a) => {
        const c = document.createElement('div');
        a && c.classList.add(...a), i.appendChild(c);
        const u = s(l),
          d = zc.createPortal(u, c);
        return n.set(c, d), e(d), Promise.resolve(c);
      },
      removeViewFromDom: (i, s) => {
        const l = n.get(s);
        return l && t(l), s.remove(), Promise.resolve();
      },
    };
  },
  pk = Mt('ion-nav', void 0, void 0, m$),
  hk = (e) => {
    var { children: t, forwardedRef: n } = e,
      r = We(e, ['children', 'forwardedRef']);
    const [o, i] = _t.useState([]),
      s = (c) => i((u) => [...u, c]),
      l = (c) => i((u) => u.filter((d) => d !== c)),
      a = _t.useMemo(() => fk(s, l), []);
    return b.createElement(pk, Object.assign({ delegate: a, ref: n }, r), o);
  };
Ho(hk, 'IonNav');
b.createContext({ activeTab: void 0, selectTab: () => !1 });
const mk = typeof HTMLElement < 'u' ? HTMLElement : class {};
class gk extends b.Component {
  constructor(t) {
    super(t), (this.outletIsReady = !1);
  }
  componentDidMount() {
    this.ionRouterOutlet &&
      (this.outletIsReady ||
        Po(this.ionRouterOutlet, () => {
          (this.outletIsReady = !0), this.context.registerIonPage(this.ionRouterOutlet, this.props.routeInfo);
        }),
      this.ionRouterOutlet.addEventListener('ionViewWillEnter', this.ionViewWillEnterHandler.bind(this)),
      this.ionRouterOutlet.addEventListener('ionViewDidEnter', this.ionViewDidEnterHandler.bind(this)),
      this.ionRouterOutlet.addEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler.bind(this)),
      this.ionRouterOutlet.addEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler.bind(this)));
  }
  componentWillUnmount() {
    this.ionRouterOutlet &&
      (this.ionRouterOutlet.removeEventListener('ionViewWillEnter', this.ionViewWillEnterHandler.bind(this)),
      this.ionRouterOutlet.removeEventListener('ionViewDidEnter', this.ionViewDidEnterHandler.bind(this)),
      this.ionRouterOutlet.removeEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler.bind(this)),
      this.ionRouterOutlet.removeEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler.bind(this)));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const t = this.props,
      { StackManager: n, children: r, routeInfo: o } = t,
      i = We(t, ['StackManager', 'children', 'routeInfo']);
    return b.createElement(
      uu.Consumer,
      null,
      (s) => (
        (this.ionLifeCycleContext = s),
        b.createElement(
          n,
          { routeInfo: o },
          b.createElement(Ua, Object.assign({ setRef: (l) => (this.ionRouterOutlet = l) }, i), r)
        )
      )
    );
  }
  static get contextType() {
    return fu;
  }
}
class vk extends b.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.context.getStackManager(),
      n = this.props,
      { children: r, forwardedRef: o } = n,
      i = We(n, ['children', 'forwardedRef']);
    return this.context.hasIonicRouter()
      ? i.ionPage
        ? b.createElement(gk, Object.assign({ StackManager: t, routeInfo: this.context.routeInfo }, i), r)
        : b.createElement(
            t,
            { routeInfo: this.context.routeInfo },
            b.createElement(Ua, Object.assign({}, i, { forwardedRef: o }), r)
          )
      : b.createElement(Ua, Object.assign({ ref: o }, this.props), this.props.children);
  }
  static get contextType() {
    return $n;
  }
}
const yk = Ho(vk, 'IonRouterOutlet'),
  zl = (() =>
    class extends b.Component {
      constructor(e) {
        super(e), (this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this));
      }
      handleIonTabButtonClick() {
        this.props.onClick &&
          this.props.onClick(
            new CustomEvent('ionTabButtonClick', {
              detail: { tab: this.props.tab, href: this.props.href, routeOptions: this.props.routerOptions },
            })
          );
      }
      render() {
        const e = this.props,
          t = We(e, ['onClick']);
        return b.createElement(ik, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, t));
      }
      static get displayName() {
        return 'IonTabButton';
      }
    })();
class wk extends b.PureComponent {
  constructor(t) {
    super(t), (this.setActiveTabOnContext = (r) => {});
    const n = {};
    b.Children.forEach(t.children, (r) => {
      var o, i, s, l;
      r != null &&
        typeof r == 'object' &&
        r.props &&
        (r.type === zl || r.type.isTabButton) &&
        (n[r.props.tab] = {
          originalHref: r.props.href,
          currentHref: r.props.href,
          originalRouteOptions:
            r.props.href === ((o = t.routeInfo) === null || o === void 0 ? void 0 : o.pathname)
              ? (i = t.routeInfo) === null || i === void 0
                ? void 0
                : i.routeOptions
              : void 0,
          currentRouteOptions:
            r.props.href === ((s = t.routeInfo) === null || s === void 0 ? void 0 : s.pathname)
              ? (l = t.routeInfo) === null || l === void 0
                ? void 0
                : l.routeOptions
              : void 0,
        });
    }),
      (this.state = { tabs: n }),
      (this.onTabButtonClick = this.onTabButtonClick.bind(this)),
      (this.renderTabButton = this.renderTabButton.bind(this)),
      (this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this)),
      (this.selectTab = this.selectTab.bind(this));
  }
  componentDidMount() {
    const t = this.state.tabs,
      r = Object.keys(t).find((o) => {
        const i = t[o].originalHref;
        return this.props.routeInfo.pathname.startsWith(i);
      });
    r && this.setState({ activeTab: r });
  }
  componentDidUpdate() {
    this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
  }
  selectTab(t) {
    const n = this.state.tabs[t];
    return n
      ? (this.onTabButtonClick(
          new CustomEvent('ionTabButtonClick', {
            detail: { href: n.currentHref, tab: t, selected: t === this.state.activeTab, routeOptions: void 0 },
          })
        ),
        !0)
      : !1;
  }
  static getDerivedStateFromProps(t, n) {
    var r, o, i;
    const s = Object.assign({}, n.tabs),
      a = Object.keys(n.tabs).find((u) => {
        const d = n.tabs[u].originalHref;
        return t.routeInfo.pathname.startsWith(d);
      });
    b.Children.forEach(t.children, (u) => {
      if (u != null && typeof u == 'object' && u.props && (u.type === zl || u.type.isTabButton)) {
        const d = s[u.props.tab];
        (!d || d.originalHref !== u.props.href) &&
          (s[u.props.tab] = {
            originalHref: u.props.href,
            currentHref: u.props.href,
            originalRouteOptions: u.props.routeOptions,
            currentRouteOptions: u.props.routeOptions,
          });
      }
    });
    const { activeTab: c } = n;
    if (a && c) {
      const u = n.tabs[c].currentHref,
        d = n.tabs[c].currentRouteOptions;
      (a !== c ||
        u !== ((r = t.routeInfo) === null || r === void 0 ? void 0 : r.pathname) ||
        d !== ((o = t.routeInfo) === null || o === void 0 ? void 0 : o.routeOptions)) &&
        ((s[a] = {
          originalHref: s[a].originalHref,
          currentHref: t.routeInfo.pathname + (t.routeInfo.search || ''),
          originalRouteOptions: s[a].originalRouteOptions,
          currentRouteOptions: (i = t.routeInfo) === null || i === void 0 ? void 0 : i.routeOptions,
        }),
        t.routeInfo.routeAction === 'pop' &&
          a !== c &&
          (s[c] = {
            originalHref: s[c].originalHref,
            currentHref: s[c].originalHref,
            originalRouteOptions: s[c].originalRouteOptions,
            currentRouteOptions: s[c].currentRouteOptions,
          }));
    }
    return a && t.onSetCurrentTab(a, t.routeInfo), { activeTab: a, tabs: s };
  }
  onTabButtonClick(t, n) {
    const r = this.state.tabs[t.detail.tab],
      o = r.originalHref,
      i = t.detail.href,
      { activeTab: s } = this.state;
    n && n(t),
      s === t.detail.tab
        ? o !== i && this.context.resetTab(t.detail.tab, o, r.originalRouteOptions)
        : (this.props.onIonTabsWillChange &&
            this.props.onIonTabsWillChange(new CustomEvent('ionTabWillChange', { detail: { tab: t.detail.tab } })),
          this.props.onIonTabsDidChange &&
            this.props.onIonTabsDidChange(new CustomEvent('ionTabDidChange', { detail: { tab: t.detail.tab } })),
          this.setActiveTabOnContext(t.detail.tab),
          this.context.changeTab(t.detail.tab, i, t.detail.routeOptions));
  }
  renderTabButton(t) {
    return (n) => {
      var r, o;
      if (n != null && n.props && (n.type === zl || n.type.isTabButton)) {
        const i =
            n.props.tab === t
              ? (r = this.props.routeInfo) === null || r === void 0
                ? void 0
                : r.pathname
              : this.state.tabs[n.props.tab].currentHref,
          s =
            n.props.tab === t
              ? (o = this.props.routeInfo) === null || o === void 0
                ? void 0
                : o.routeOptions
              : this.state.tabs[n.props.tab].currentRouteOptions;
        return b.cloneElement(n, {
          href: i,
          routeOptions: s,
          onClick: (l) => this.onTabButtonClick(l, n.props.onClick),
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: t } = this.state;
    return b.createElement(
      sk,
      Object.assign({}, this.props, { selectedTab: t }),
      b.Children.map(this.props.children, this.renderTabButton(t))
    );
  }
  static get contextType() {
    return $n;
  }
}
const bk = b.memo((e) => {
  var { forwardedRef: t } = e,
    n = We(e, ['forwardedRef']);
  const r = _t.useContext($n);
  return b.createElement(
    wk,
    Object.assign({ ref: t }, n, {
      routeInfo: n.routeInfo || r.routeInfo || { pathname: window.location.pathname },
      onSetCurrentTab: r.setCurrentTab,
    }),
    n.children
  );
});
Ho(bk, 'IonTabBar');
class $k extends mk {
  constructor() {
    super();
  }
}
typeof window < 'u' &&
  window.customElements &&
  (window.customElements.get('ion-tabs') || window.customElements.define('ion-tabs', $k));
class xk extends b.PureComponent {
  constructor(t) {
    super(t),
      this.props.name &&
        console.warn(
          'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
        );
  }
  render() {
    var t, n;
    const r = this.props,
      { icon: o, ios: i, md: s, mode: l } = r,
      a = We(r, ['icon', 'ios', 'md', 'mode']);
    let c;
    const u = du(),
      d = l || (u == null ? void 0 : u.get('mode'));
    return (
      i || s
        ? d === 'ios'
          ? (c = (t = i != null ? i : s) !== null && t !== void 0 ? t : o)
          : (c = (n = s != null ? s : i) !== null && n !== void 0 ? n : o)
        : (c = o),
      b.createElement(ak, Object.assign({ ref: this.props.forwardedRef, icon: c }, a), this.props.children)
    );
  }
  static get contextType() {
    return $n;
  }
}
Ho(xk, 'IonIcon');
class pu extends b.PureComponent {
  render() {
    const t = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !pu
      ? (console.error(
          'You either do not have an Ionic Router package, or your router does not support using <IonRoute>'
        ),
        null)
      : b.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return $n;
  }
}
class _g extends b.PureComponent {
  render() {
    const t = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !_g
      ? (console.error(
          'You either do not have an Ionic Router package, or your router does not support using <IonRedirect>'
        ),
        null)
      : b.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return $n;
  }
}
const kk = b.createContext({
  routeInfo: void 0,
  push: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  back: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  canGoBack: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  nativeBack: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
});
class cE extends b.PureComponent {
  constructor(t) {
    super(t), (this.nodes = new Map()), (this.animation = tb(t.id));
  }
  setupAnimation(t) {
    const n = this.animation;
    this.nodes.size > 0 && n.addElement(Array.from(this.nodes.values())), Bf(n, t), Hf(n, t);
  }
  componentDidMount() {
    const t = this.props;
    this.setupAnimation(t);
  }
  componentDidUpdate(t) {
    const n = this.animation,
      r = this.props;
    Bf(n, r, t), Ek(n, r, t), Hf(n, r, t);
  }
  render() {
    const { children: t } = this.props;
    return b.createElement(
      b.Fragment,
      null,
      b.Children.map(t, (n, r) => b.cloneElement(n, { ref: (o) => this.nodes.set(r, o) }))
    );
  }
}
const Bf = (e, t = {}, n = {}) => {
    const r = [
      'children',
      'progressStart',
      'progressStep',
      'progressEnd',
      'pause',
      'stop',
      'destroy',
      'play',
      'from',
      'to',
      'fromTo',
      'onFinish',
    ];
    for (const a in t) t.hasOwnProperty(a) && !r.includes(a) && t[a] !== n[a] && e[a](t[a]);
    const o = t.from;
    o && o !== n.from && (Array.isArray(o) ? o : [o]).forEach((c) => e.from(c.property, c.value));
    const i = t.to;
    i && i !== n.to && (Array.isArray(i) ? i : [i]).forEach((c) => e.to(c.property, c.value));
    const s = t.fromTo;
    s && s !== n.fromTo && (Array.isArray(s) ? s : [s]).forEach((c) => e.fromTo(c.property, c.fromValue, c.toValue));
    const l = t.onFinish;
    l && l !== n.onFinish && (Array.isArray(l) ? l : [l]).forEach((c) => e.onFinish(c.callback, c.opts));
  },
  Ek = (e, t = {}, n = {}) => {
    var r, o, i, s, l;
    const { progressStart: a, progressStep: c, progressEnd: u } = t;
    a &&
      (((r = n.progressStart) === null || r === void 0 ? void 0 : r.forceLinearEasing) !==
        (a == null ? void 0 : a.forceLinearEasing) ||
        ((o = n.progressStart) === null || o === void 0 ? void 0 : o.step) !== (a == null ? void 0 : a.step)) &&
      e.progressStart(a.forceLinearEasing, a.step),
      c &&
        ((i = n.progressStep) === null || i === void 0 ? void 0 : i.step) !== (c == null ? void 0 : c.step) &&
        e.progressStep(c.step),
      u &&
        (((s = n.progressEnd) === null || s === void 0 ? void 0 : s.playTo) !== (u == null ? void 0 : u.playTo) ||
          ((l = n.progressEnd) === null || l === void 0 ? void 0 : l.step) !== (u == null ? void 0 : u.step) ||
          (n == null ? void 0 : n.dur) !== (u == null ? void 0 : u.dur)) &&
        e.progressEnd(u.playTo, u.step, u.dur);
  },
  Hf = (e, t = {}, n = {}) => {
    !n.play && t.play && e.play(),
      !n.pause && t.pause && e.pause(),
      !n.stop && t.stop && e.stop(),
      !n.destroy && t.destroy && e.destroy();
  },
  jf = { main: 0 },
  as = (e = 'main') => {
    var t;
    const n = ((t = jf[e]) !== null && t !== void 0 ? t : 0) + 1;
    return (jf[e] = n), n.toString();
  },
  Sk = (e = {}) => {
    typeof document < 'u' && document.documentElement.classList.add('ion-ce'), Mb(Object.assign({}, e));
  },
  Lg = b.createContext({
    addViewItem: () => {},
    canGoBack: () => {},
    clearOutlet: () => {},
    createViewItem: () => {},
    findViewItemByPathname: () => {},
    findLeavingViewItemByRouteInfo: () => {},
    findViewItemByRouteInfo: () => {},
    getChildrenToRender: () => {},
    goBack: () => {},
    unMountViewItem: () => {},
  });
class Ff extends b.Component {
  constructor(t) {
    super(t),
      (this.ionLifeCycleContext = new qx()),
      (this._isMounted = !1),
      this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
        this.props.mount || (this._isMounted && this.setState({ show: !1 }, () => this.props.removeView()));
      }),
      (this.state = { show: !0 });
  }
  componentDidMount() {
    this._isMounted = !0;
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  render() {
    const { show: t } = this.state;
    return b.createElement(uu.Provider, { value: this.ionLifeCycleContext }, t && this.props.children);
  }
}
class Ck {
  constructor() {
    (this.locationHistory = []), (this.tabHistory = {});
  }
  add(t) {
    t.routeAction === 'push' || t.routeAction == null
      ? this._add(t)
      : t.routeAction === 'pop'
      ? this._pop(t)
      : t.routeAction === 'replace' && this._replace(t),
      t.routeDirection === 'root' && (this._clear(), this._add(t));
  }
  clearTabStack(t) {
    const n = this._getRouteInfosByKey(t);
    n &&
      (n.forEach((r) => {
        this.locationHistory = this.locationHistory.filter((o) => o.id !== r.id);
      }),
      (this.tabHistory[t] = []));
  }
  update(t) {
    const n = this.locationHistory.findIndex((o) => o.id === t.id);
    n > -1 && this.locationHistory.splice(n, 1, t);
    const r = this.tabHistory[t.tab || ''];
    if (r) {
      const o = r.findIndex((i) => i.id === t.id);
      o > -1 ? r.splice(o, 1, t) : r.push(t);
    } else t.tab && (this.tabHistory[t.tab] = [t]);
  }
  _add(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && (this._areRoutesEqual(n[n.length - 1], t) && n.pop(), n.push(t)), this.locationHistory.push(t);
  }
  _areRoutesEqual(t, n) {
    return !t || !n ? !1 : t.pathname === n.pathname && t.search === n.search;
  }
  _pop(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && (n.pop(), n.pop(), n.push(t)),
      this.locationHistory.pop(),
      this.locationHistory.pop(),
      this.locationHistory.push(t);
  }
  _replace(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && n.pop(), this.locationHistory.pop(), this._add(t);
  }
  _clear() {
    Object.keys(this.tabHistory).forEach((n) => (this.tabHistory[n] = [])), (this.locationHistory = []);
  }
  _getRouteInfosByKey(t) {
    let n;
    return t && ((n = this.tabHistory[t]), n || (n = this.tabHistory[t] = [])), n;
  }
  getFirstRouteInfoForTab(t) {
    const n = this._getRouteInfosByKey(t);
    if (n) return n[0];
  }
  getCurrentRouteInfoForTab(t) {
    const n = this._getRouteInfosByKey(t);
    if (n) return n[n.length - 1];
  }
  findLastLocation(t) {
    const n = this._getRouteInfosByKey(t.tab);
    if (n)
      for (let r = n.length - 2; r >= 0; r--) {
        const o = n[r];
        if (o && o.pathname === t.pushedByRoute) return o;
      }
    for (let r = this.locationHistory.length - 2; r >= 0; r--) {
      const o = this.locationHistory[r];
      if (o && o.pathname === t.pushedByRoute) return o;
    }
  }
  previous() {
    return (
      this.locationHistory[this.locationHistory.length - 2] || this.locationHistory[this.locationHistory.length - 1]
    );
  }
  current() {
    return this.locationHistory[this.locationHistory.length - 1];
  }
  canGoBack() {
    return this.locationHistory.length > 1;
  }
}
class Tk extends b.PureComponent {
  constructor(t) {
    super(t),
      (this.ionRouterContextValue = {
        push: (n, r, o, i, s) => {
          this.navigate(n, r, o, s, i);
        },
        back: (n) => {
          this.goBack(void 0, n);
        },
        canGoBack: () => this.props.locationHistory.canGoBack(),
        nativeBack: () => this.props.onNativeBack(),
        routeInfo: this.props.routeInfo,
      }),
      (this.state = {
        goBack: this.goBack.bind(this),
        hasIonicRouter: () => !0,
        navigate: this.navigate.bind(this),
        getIonRedirect: this.getIonRedirect.bind(this),
        getIonRoute: this.getIonRoute.bind(this),
        getStackManager: this.getStackManager.bind(this),
        getPageManager: this.getPageManager.bind(this),
        routeInfo: this.props.routeInfo,
        setCurrentTab: this.props.onSetCurrentTab,
        changeTab: this.props.onChangeTab,
        resetTab: this.props.onResetTab,
      });
  }
  componentDidMount() {
    typeof document < 'u' &&
      ((this.handleHardwareBackButton = this.handleHardwareBackButton.bind(this)),
      document.addEventListener('ionBackButton', this.handleHardwareBackButton));
  }
  componentWillUnmount() {
    typeof document < 'u' && document.removeEventListener('ionBackButton', this.handleHardwareBackButton);
  }
  handleHardwareBackButton(t) {
    t.detail.register(0, (n) => {
      this.nativeGoBack(), n();
    });
  }
  goBack(t, n) {
    this.props.onNavigateBack(t, n);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(t, n = 'forward', r = 'push', o, i, s) {
    this.props.onNavigate(t, r, n, o, i, s);
  }
  getPageManager() {
    return Rg;
  }
  getIonRedirect() {
    return this.props.ionRedirect;
  }
  getIonRoute() {
    return this.props.ionRoute;
  }
  getStackManager() {
    return this.props.stackManager;
  }
  render() {
    return b.createElement(
      $n.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      b.createElement(
        kk.Provider,
        { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) },
        this.props.children
      )
    );
  }
}
class Pk {
  constructor() {
    (this.viewStacks = {}),
      (this.add = this.add.bind(this)),
      (this.clear = this.clear.bind(this)),
      (this.getViewItemsForOutlet = this.getViewItemsForOutlet.bind(this)),
      (this.remove = this.remove.bind(this));
  }
  add(t) {
    const { outletId: n } = t;
    this.viewStacks[n] ? this.viewStacks[n].push(t) : (this.viewStacks[n] = [t]);
  }
  clear(t) {
    return setTimeout(() => {
      delete this.viewStacks[t];
    }, 500);
  }
  getViewItemsForOutlet(t) {
    return this.viewStacks[t] || [];
  }
  remove(t) {
    const { outletId: n } = t,
      r = this.viewStacks[n];
    if (r) {
      const o = r.find((i) => i.id === t.id);
      o && ((o.mount = !1), (this.viewStacks[n] = r.filter((i) => i.id !== o.id)));
    }
  }
  getStackIds() {
    return Object.keys(this.viewStacks);
  }
  getAllViewItems() {
    const t = this.getStackIds(),
      n = [];
    return (
      t.forEach((r) => {
        n.push(...this.viewStacks[r]);
      }),
      n
    );
  }
}
class Rk extends b.PureComponent {
  render() {
    return b.createElement(
      Ia,
      Object.assign(
        { path: this.props.path, exact: this.props.exact, render: this.props.render },
        this.props.computedMatch !== void 0 ? { computedMatch: this.props.computedMatch } : {}
      )
    );
  }
}
class _k extends Pk {
  constructor() {
    super(),
      (this.createViewItem = this.createViewItem.bind(this)),
      (this.findViewItemByRouteInfo = this.findViewItemByRouteInfo.bind(this)),
      (this.findLeavingViewItemByRouteInfo = this.findLeavingViewItemByRouteInfo.bind(this)),
      (this.getChildrenToRender = this.getChildrenToRender.bind(this)),
      (this.findViewItemByPathname = this.findViewItemByPathname.bind(this));
  }
  createViewItem(t, n, r, o) {
    const i = { id: as('viewItem'), outletId: t, ionPageElement: o, reactElement: n, mount: !0, ionRoute: !1 },
      s = { exact: n.props.exact, path: n.props.path || n.props.from, component: n.props.component },
      l = Nn(r.pathname, s);
    return (
      n.type === pu && ((i.ionRoute = !0), (i.disableIonPageManagement = n.props.disableIonPageManagement)),
      (i.routeData = { match: l, childProps: n.props }),
      i
    );
  }
  getChildrenToRender(t, n, r) {
    const o = this.getViewItemsForOutlet(t);
    return (
      b.Children.forEach(n.props.children, (s) => {
        const l = o.find((a) => Uf(s, a.routeData.childProps.path || a.routeData.childProps.from));
        l && (l.reactElement = s);
      }),
      o.map((s) => {
        let l;
        if (s.ionRoute && !s.disableIonPageManagement)
          l = b.createElement(
            Ff,
            { key: `view-${s.id}`, mount: s.mount, removeView: () => this.remove(s) },
            b.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
          );
        else {
          const a = Uf(s.reactElement, r.pathname);
          (l = b.createElement(
            Ff,
            { key: `view-${s.id}`, mount: s.mount, removeView: () => this.remove(s) },
            b.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
          )),
            !a && s.routeData.match && ((s.routeData.match = void 0), (s.mount = !1));
        }
        return l;
      })
    );
  }
  findViewItemByRouteInfo(t, n, r) {
    const { viewItem: o, match: i } = this.findViewItemByPath(t.pathname, n);
    return (r === void 0 || r === !0) && o && i && (o.routeData.match = i), o;
  }
  findLeavingViewItemByRouteInfo(t, n, r = !0) {
    const { viewItem: o } = this.findViewItemByPath(t.lastPathname, n, !1, r);
    return o;
  }
  findViewItemByPathname(t, n) {
    const { viewItem: r } = this.findViewItemByPath(t, n);
    return r;
  }
  findViewItemByPath(t, n, r, o) {
    let i, s, l;
    if (n) (l = this.getViewItemsForOutlet(n)), l.some(a), i || l.some(c);
    else {
      const u = this.getAllViewItems();
      u.some(a), i || u.some(c);
    }
    return { viewItem: i, match: s };
    function a(u) {
      if (o && !u.ionRoute) return !1;
      const d = {
          exact: r ? !0 : u.routeData.childProps.exact,
          path: u.routeData.childProps.path || u.routeData.childProps.from,
          component: u.routeData.childProps.component,
        },
        f = Nn(t, d);
      return f ? ((i = u), (s = f), !0) : !1;
    }
    function c(u) {
      return !u.routeData.childProps.path && !u.routeData.childProps.from
        ? ((s = { path: t, url: t, isExact: !0, params: {} }), (i = u), !0)
        : !1;
    }
  }
}
function Uf(e, t, n) {
  const r = { exact: n ? !0 : e.props.exact, path: e.props.path || e.props.from, component: e.props.component };
  return Nn(t, r);
}
function Lk(e) {
  let t;
  if ((typeof e == 'string' ? (t = e) : (t = e.outerHTML), document)) {
    const n = document.createElement('div');
    (n.innerHTML = t), (n.style.zIndex = '');
    const r = n.getElementsByTagName('ion-back-button');
    return r[0] && r[0].remove(), n.firstChild;
  }
}
const Vf = (e) => !e.classList.contains('ion-page-invisible') && !e.classList.contains('ion-page-hidden');
class Ik extends b.PureComponent {
  constructor(t) {
    super(t),
      (this.stackContextValue = { registerIonPage: this.registerIonPage.bind(this), isInOutlet: () => !0 }),
      (this.pendingPageTransition = !1),
      (this.registerIonPage = this.registerIonPage.bind(this)),
      (this.transitionPage = this.transitionPage.bind(this)),
      (this.handlePageTransition = this.handlePageTransition.bind(this)),
      (this.id = as('routerOutlet')),
      (this.prevProps = void 0),
      (this.skipTransition = !1);
  }
  componentDidMount() {
    this.clearOutletTimeout && clearTimeout(this.clearOutletTimeout),
      this.routerOutletElement &&
        (this.setupRouterOutlet(this.routerOutletElement), this.handlePageTransition(this.props.routeInfo));
  }
  componentDidUpdate(t) {
    const { pathname: n } = this.props.routeInfo,
      { pathname: r } = t.routeInfo;
    n !== r
      ? ((this.prevProps = t), this.handlePageTransition(this.props.routeInfo))
      : this.pendingPageTransition &&
        (this.handlePageTransition(this.props.routeInfo), (this.pendingPageTransition = !1));
  }
  componentWillUnmount() {
    this.clearOutletTimeout = this.context.clearOutlet(this.id);
  }
  async handlePageTransition(t) {
    var n, r;
    if (!this.routerOutletElement || !this.routerOutletElement.commit) this.pendingPageTransition = !0;
    else {
      let o = this.context.findViewItemByRouteInfo(t, this.id),
        i = this.context.findLeavingViewItemByRouteInfo(t, this.id);
      !i && t.prevRouteLastPathname && (i = this.context.findViewItemByPathname(t.prevRouteLastPathname, this.id)),
        i &&
          (t.routeAction === 'replace'
            ? (i.mount = !1)
            : t.routeAction === 'push' && t.routeDirection === 'forward'
            ? !((n = t.routeOptions) === null || n === void 0) && n.unmount && (i.mount = !1)
            : t.routeDirection !== 'none' && o !== i && (i.mount = !1));
      const s = Ok((r = this.ionRouterOutlet) === null || r === void 0 ? void 0 : r.props.children, t);
      if (
        (o
          ? (o.reactElement = s)
          : s && ((o = this.context.createViewItem(this.id, s, t)), this.context.addViewItem(o)),
        o && o.ionPageElement)
      ) {
        if (
          (o === i && o.routeData.match.url !== t.pathname) ||
          (!i &&
            this.props.routeInfo.prevRouteLastPathname &&
            (i = this.context.findViewItemByPathname(this.props.routeInfo.prevRouteLastPathname, this.id)),
          Vf(o.ionPageElement) && i !== void 0 && !Vf(i.ionPageElement))
        )
          return;
        this.transitionPage(t, o, i);
      } else
        i &&
          !s &&
          !o &&
          i.ionPageElement &&
          (i.ionPageElement.classList.add('ion-page-hidden'), i.ionPageElement.setAttribute('aria-hidden', 'true'));
      this.forceUpdate();
    }
  }
  registerIonPage(t, n) {
    const r = this.context.findViewItemByRouteInfo(n, this.id);
    if (r) {
      const o = r.ionPageElement;
      if (((r.ionPageElement = t), (r.ionRoute = !0), o === t)) return;
    }
    this.handlePageTransition(n);
  }
  async setupRouterOutlet(t) {
    const n = () => {
        const i = du();
        if (!(i && i.get('swipeBackEnabled', t.mode === 'ios'))) return !1;
        const { routeInfo: l } = this.props,
          a =
            this.prevProps && this.prevProps.routeInfo.pathname === l.pushedByRoute
              ? this.prevProps.routeInfo
              : { pathname: l.pushedByRoute || '' },
          c = this.context.findViewItemByRouteInfo(a, this.id, !1);
        return !!c && c.mount && c.routeData.match.path !== l.pathname;
      },
      r = async () => {
        const { routeInfo: i } = this.props,
          s =
            this.prevProps && this.prevProps.routeInfo.pathname === i.pushedByRoute
              ? this.prevProps.routeInfo
              : { pathname: i.pushedByRoute || '' },
          l = this.context.findViewItemByRouteInfo(s, this.id, !1),
          a = this.context.findViewItemByRouteInfo(i, this.id, !1);
        return l && a && (await this.transitionPage(i, l, a, 'back', !0)), Promise.resolve();
      },
      o = (i) => {
        if (i) (this.skipTransition = !0), this.context.goBack();
        else {
          const { routeInfo: s } = this.props,
            l =
              this.prevProps && this.prevProps.routeInfo.pathname === s.pushedByRoute
                ? this.prevProps.routeInfo
                : { pathname: s.pushedByRoute || '' },
            a = this.context.findViewItemByRouteInfo(l, this.id, !1),
            c = this.context.findViewItemByRouteInfo(s, this.id, !1);
          if (a !== c && (a == null ? void 0 : a.ionPageElement) !== void 0) {
            const { ionPageElement: u } = a;
            u.setAttribute('aria-hidden', 'true'), u.classList.add('ion-page-hidden');
          }
        }
      };
    t.swipeHandler = { canStart: n, onStart: r, onEnd: o };
  }
  async transitionPage(t, n, r, o, i = !1) {
    const s = async (u, d) => {
        const f = this.skipTransition;
        f ? (this.skipTransition = !1) : (u.classList.add('ion-page'), u.classList.add('ion-page-invisible')),
          await l.commit(u, d, {
            duration: f || c === void 0 ? 0 : void 0,
            direction: c,
            showGoBack: !!t.pushedByRoute,
            progressAnimation: i,
            animationBuilder: t.routeAnimation,
          });
      },
      l = this.routerOutletElement,
      a = t.routeDirection === 'none' || t.routeDirection === 'root' ? void 0 : t.routeDirection,
      c = o != null ? o : a;
    if (n && n.ionPageElement && this.routerOutletElement)
      if (r && r.ionPageElement && n === r)
        if (Ak(r.reactElement, t.pathname, !0)) {
          const d = Lk(r.ionPageElement.outerHTML);
          d &&
            (this.routerOutletElement.appendChild(d),
            await s(n.ionPageElement, d),
            this.routerOutletElement.removeChild(d));
        } else await s(n.ionPageElement, void 0);
      else
        await s(n.ionPageElement, r == null ? void 0 : r.ionPageElement),
          r &&
            r.ionPageElement &&
            !i &&
            (r.ionPageElement.classList.add('ion-page-hidden'), r.ionPageElement.setAttribute('aria-hidden', 'true'));
  }
  render() {
    const { children: t } = this.props,
      n = b.Children.only(t);
    this.ionRouterOutlet = n;
    const r = this.context.getChildrenToRender(this.id, this.ionRouterOutlet, this.props.routeInfo, () => {
      this.forceUpdate();
    });
    return b.createElement(
      fu.Provider,
      { value: this.stackContextValue },
      b.cloneElement(
        n,
        {
          ref: (o) => {
            n.props.setRef && n.props.setRef(o),
              n.props.forwardedRef && (n.props.forwardedRef.current = o),
              (this.routerOutletElement = o);
            const { ref: i } = n;
            typeof i == 'function' && i(o);
          },
        },
        r
      )
    );
  }
  static get contextType() {
    return Lg;
  }
}
function Ok(e, t) {
  let n;
  return (
    b.Children.forEach(e, (r) => {
      const o = { exact: r.props.exact, path: r.props.path || r.props.from, component: r.props.component };
      Nn(t.pathname, o) && (n = r);
    }),
    n ||
      (b.Children.forEach(e, (r) => {
        r.props.path || r.props.from || (n = r);
      }),
      n)
  );
}
function Ak(e, t, n) {
  const r = { exact: n ? !0 : e.props.exact, path: e.props.path || e.props.from, component: e.props.component };
  return Nn(t, r);
}
class Mk extends b.PureComponent {
  constructor(t) {
    super(t),
      (this.exitViewFromOtherOutletHandlers = []),
      (this.locationHistory = new Ck()),
      (this.viewStack = new _k()),
      (this.routeMangerContextState = {
        canGoBack: () => this.locationHistory.canGoBack(),
        clearOutlet: this.viewStack.clear,
        findViewItemByPathname: this.viewStack.findViewItemByPathname,
        getChildrenToRender: this.viewStack.getChildrenToRender,
        goBack: () => this.handleNavigateBack(),
        createViewItem: this.viewStack.createViewItem,
        findViewItemByRouteInfo: this.viewStack.findViewItemByRouteInfo,
        findLeavingViewItemByRouteInfo: this.viewStack.findLeavingViewItemByRouteInfo,
        addViewItem: this.viewStack.add,
        unMountViewItem: this.viewStack.remove,
      });
    const n = { id: as('routeInfo'), pathname: this.props.location.pathname, search: this.props.location.search };
    this.locationHistory.add(n),
      (this.handleChangeTab = this.handleChangeTab.bind(this)),
      (this.handleResetTab = this.handleResetTab.bind(this)),
      (this.handleNativeBack = this.handleNativeBack.bind(this)),
      (this.handleNavigate = this.handleNavigate.bind(this)),
      (this.handleNavigateBack = this.handleNavigateBack.bind(this)),
      this.props.registerHistoryListener(this.handleHistoryChange.bind(this)),
      (this.handleSetCurrentTab = this.handleSetCurrentTab.bind(this)),
      (this.state = { routeInfo: n });
  }
  handleChangeTab(t, n, r) {
    if (!n) return;
    const o = this.locationHistory.getCurrentRouteInfoForTab(t),
      [i, s] = n.split('?');
    o
      ? ((this.incomingRouteParams = Object.assign(Object.assign({}, o), {
          routeAction: 'push',
          routeDirection: 'none',
        })),
        o.pathname === i
          ? ((this.incomingRouteParams.routeOptions = r), this.props.history.push(o.pathname + (o.search || '')))
          : ((this.incomingRouteParams.pathname = i),
            (this.incomingRouteParams.search = s ? '?' + s : void 0),
            (this.incomingRouteParams.routeOptions = r),
            this.props.history.push(i + (s ? '?' + s : ''))))
      : this.handleNavigate(i, 'push', 'none', void 0, r, t);
  }
  handleHistoryChange(t, n) {
    var r, o, i;
    let s;
    if (
      (this.incomingRouteParams
        ? this.incomingRouteParams.routeAction === 'replace'
          ? (s = this.locationHistory.previous())
          : (s = this.locationHistory.current())
        : (s = this.locationHistory.current()),
      s.pathname + s.search !== t.pathname)
    ) {
      if (!this.incomingRouteParams) {
        if (
          (n === 'REPLACE' &&
            (this.incomingRouteParams = { routeAction: 'replace', routeDirection: 'none', tab: this.currentTab }),
          n === 'POP')
        ) {
          const c = this.locationHistory.current();
          if (c && c.pushedByRoute) {
            const u = this.locationHistory.findLastLocation(c);
            this.incomingRouteParams = Object.assign(Object.assign({}, u), {
              routeAction: 'pop',
              routeDirection: 'back',
            });
          } else this.incomingRouteParams = { routeAction: 'pop', routeDirection: 'none', tab: this.currentTab };
        }
        this.incomingRouteParams ||
          (this.incomingRouteParams = {
            routeAction: 'push',
            routeDirection: ((r = t.state) === null || r === void 0 ? void 0 : r.direction) || 'forward',
            routeOptions: (o = t.state) === null || o === void 0 ? void 0 : o.routerOptions,
            tab: this.currentTab,
          });
      }
      let a;
      if (!((i = this.incomingRouteParams) === null || i === void 0) && i.id)
        (a = Object.assign(Object.assign({}, this.incomingRouteParams), { lastPathname: s.pathname })),
          this.locationHistory.add(a);
      else {
        const c =
          this.incomingRouteParams.routeAction === 'push' && this.incomingRouteParams.routeDirection === 'forward';
        if (
          ((a = Object.assign(Object.assign({ id: as('routeInfo') }, this.incomingRouteParams), {
            lastPathname: s.pathname,
            pathname: t.pathname,
            search: t.search,
            params: this.props.match.params,
            prevRouteLastPathname: s.lastPathname,
          })),
          c)
        )
          (a.tab = s.tab), (a.pushedByRoute = s.pathname);
        else if (a.routeAction === 'pop') {
          const u = this.locationHistory.findLastLocation(a);
          a.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
        } else if (a.routeAction === 'push' && a.tab !== s.tab) {
          const u = this.locationHistory.getCurrentRouteInfoForTab(a.tab);
          a.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
        } else if (a.routeAction === 'replace') {
          const u = this.locationHistory.current(),
            d = u == null ? void 0 : u.pushedByRoute,
            f = d !== void 0 && d !== a.pathname ? d : a.pushedByRoute;
          (a.lastPathname = (u == null ? void 0 : u.pathname) || a.lastPathname),
            (a.prevRouteLastPathname = u == null ? void 0 : u.lastPathname),
            (a.pushedByRoute = f),
            (a.routeDirection = (u == null ? void 0 : u.routeDirection) || a.routeDirection),
            (a.routeAnimation = (u == null ? void 0 : u.routeAnimation) || a.routeAnimation);
        }
        this.locationHistory.add(a);
      }
      this.setState({ routeInfo: a });
    }
    this.incomingRouteParams = void 0;
  }
  handleNativeBack() {
    const t = this.props.history;
    (t.goBack || t.back)();
  }
  handleNavigate(t, n, r, o, i, s) {
    (this.incomingRouteParams = Object.assign(this.incomingRouteParams || {}, {
      routeAction: n,
      routeDirection: r,
      routeOptions: i,
      routeAnimation: o,
      tab: s,
    })),
      n === 'push' ? this.props.history.push(t) : this.props.history.replace(t);
  }
  handleNavigateBack(t = '/', n) {
    const r = du();
    t = t || (r && r.get('backButtonDefaultHref'));
    const o = this.locationHistory.current();
    if (o && o.pushedByRoute) {
      const i = this.locationHistory.findLastLocation(o);
      if (i)
        if (
          ((this.incomingRouteParams = Object.assign(Object.assign({}, i), {
            routeAction: 'pop',
            routeDirection: 'back',
            routeAnimation: n || o.routeAnimation,
          })),
          o.lastPathname === o.pushedByRoute || (i.pathname === o.pushedByRoute && o.tab === '' && i.tab === ''))
        ) {
          const s = this.props.history;
          (s.goBack || s.back)();
        } else this.handleNavigate(i.pathname + (i.search || ''), 'pop', 'back');
      else this.handleNavigate(t, 'pop', 'back');
    } else this.handleNavigate(t, 'pop', 'back');
  }
  handleResetTab(t, n, r) {
    const o = this.locationHistory.getFirstRouteInfoForTab(t);
    if (o) {
      const i = Object.assign({}, o);
      (i.pathname = n),
        (i.routeOptions = r),
        (this.incomingRouteParams = Object.assign(Object.assign({}, i), {
          routeAction: 'pop',
          routeDirection: 'back',
        })),
        this.props.history.push(i.pathname + (i.search || ''));
    }
  }
  handleSetCurrentTab(t) {
    this.currentTab = t;
    const n = Object.assign({}, this.locationHistory.current());
    n.tab !== t && ((n.tab = t), this.locationHistory.update(n));
  }
  render() {
    return b.createElement(
      Lg.Provider,
      { value: this.routeMangerContextState },
      b.createElement(
        Tk,
        {
          ionRoute: Rk,
          ionRedirect: {},
          stackManager: Ik,
          routeInfo: this.state.routeInfo,
          onNativeBack: this.handleNativeBack,
          onNavigateBack: this.handleNavigateBack,
          onNavigate: this.handleNavigate,
          onSetCurrentTab: this.handleSetCurrentTab,
          onChangeTab: this.handleChangeTab,
          onResetTab: this.handleResetTab,
          locationHistory: this.locationHistory,
        },
        this.props.children
      )
    );
  }
}
const Gs = ew(Mk);
Gs.displayName = 'IonRouter';
class Nk extends b.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      r = We(t, ['history']);
    (this.history = n || r1(r)),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const r = t.location || t,
      o = t.action || n;
    this.historyListenHandler && this.historyListenHandler(r, o);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      r = We(t, ['children']);
    return b.createElement(
      No,
      Object.assign({ history: this.history }, r),
      b.createElement(Gs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
class uE extends b.Component {
  constructor(t) {
    super(t),
      (this.history = t.history),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const r = t.location || t,
      o = t.action || n;
    this.historyListenHandler && this.historyListenHandler(r, o);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      r = We(t, ['children']);
    return b.createElement(
      No,
      Object.assign({}, r),
      b.createElement(Gs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
class dE extends b.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      r = We(t, ['history']);
    (this.history = n || s1(r)),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const r = t.location || t,
      o = t.action || n;
    this.historyListenHandler && this.historyListenHandler(r, o);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      r = We(t, ['children']);
    return b.createElement(
      No,
      Object.assign({ history: this.history }, r),
      b.createElement(Gs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
const Dk = () =>
  lo('div', {
    className: 'container',
    children: [
      ke('strong', { children: 'Ready to create an app?' }),
      lo('p', {
        children: [
          'Start with Ionic',
          ' ',
          ke('a', {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'https://ionicframework.com/docs/components',
            children: 'UI Components',
          }),
        ],
      }),
    ],
  });
const zk = () =>
  lo(dk, {
    children: [
      ke(Nf, { children: ke(zf, { children: ke(Df, { children: 'Blank' }) }) }),
      lo(nk, {
        fullscreen: !0,
        children: [
          ke(Nf, {
            collapse: 'condense',
            children: ke(zf, { children: ke(Df, { size: 'large', children: 'Blank' }) }),
          }),
          ke(Dk, {}),
        ],
      }),
    ],
  });
Sk();
const Bk = () =>
    ke(ck, {
      children: ke(Nk, {
        children: lo(yk, {
          children: [
            ke(Ia, { exact: !0, path: '/home', children: ke(zk, {}) }),
            ke(Ia, { exact: !0, path: '/', children: ke(X1, { to: '/home' }) }),
          ],
        }),
      }),
    }),
  Hk = document.getElementById('root'),
  jk = im(Hk);
jk.render(ke(b.StrictMode, { children: ke(Bk, {}) }));
export {
  Jb as K,
  Vk as __vite_legacy_guard,
  Po as a,
  Wk as b,
  jm as c,
  Kk as d,
  Ba as e,
  Zk as f,
  zt as g,
  pf as h,
  Vb as i,
  eE as j,
  tb as k,
  qk as l,
  Qk as n,
  Xk as p,
  To as r,
  Jk as s,
  vn as w,
};

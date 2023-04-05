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
function Vf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Si = {},
  av = {
    get exports() {
      return Si;
    },
    set exports(e) {
      Si = e;
    },
  },
  cs = {},
  $t = {},
  uv = {
    get exports() {
      return $t;
    },
    set exports(e) {
      $t = e;
    },
  },
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
  cv = Symbol.for('react.portal'),
  dv = Symbol.for('react.fragment'),
  fv = Symbol.for('react.strict_mode'),
  pv = Symbol.for('react.profiler'),
  hv = Symbol.for('react.provider'),
  mv = Symbol.for('react.context'),
  gv = Symbol.for('react.forward_ref'),
  vv = Symbol.for('react.suspense'),
  yv = Symbol.for('react.memo'),
  wv = Symbol.for('react.lazy'),
  kc = Symbol.iterator;
function bv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (kc && e[kc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kf = Object.assign,
  Qf = {};
function _r(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Qf), (this.updater = n || Wf);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Yf() {}
Yf.prototype = _r.prototype;
function Wa(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Qf), (this.updater = n || Wf);
}
var Ka = (Wa.prototype = new Yf());
Ka.constructor = Wa;
Kf(Ka, _r.prototype);
Ka.isPureReactComponent = !0;
var Ec = Array.isArray,
  qf = Object.prototype.hasOwnProperty,
  Qa = { current: null },
  Gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      qf.call(t, r) && !Gf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Lo, type: e, key: i, ref: s, props: o, _owner: Qa.current };
}
function $v(e, t) {
  return { $$typeof: Lo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ya(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Lo;
}
function xv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sc = /\/+/g;
function el(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? xv('' + e.key) : t.toString(36);
}
function di(e, t, n, r, o) {
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
          case cv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + el(s, 0) : r),
      Ec(o)
        ? ((n = ''),
          e != null && (n = e.replace(Sc, '$&/') + '/'),
          di(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Ya(o) &&
            (o = $v(o, n + (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(Sc, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Ec(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + el(i, l);
      s += di(i, t, n, a, o);
    }
  else if (((a = bv(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + el(i, l++)), (s += di(i, t, n, a, o));
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
    di(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function kv(e) {
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
var Ae = { current: null },
  fi = { transition: null },
  Ev = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: fi, ReactCurrentOwner: Qa };
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
    if (!Ya(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
j.Component = _r;
j.Fragment = dv;
j.Profiler = pv;
j.PureComponent = Wa;
j.StrictMode = fv;
j.Suspense = vv;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ev;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Kf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Qa.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) qf.call(t, a) && !Gf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Lo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: mv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hv, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Xf;
j.createFactory = function (e) {
  var t = Xf.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: gv, render: e };
};
j.isValidElement = Ya;
j.lazy = function (e) {
  return { $$typeof: wv, _payload: { _status: -1, _result: e }, _init: kv };
};
j.memo = function (e, t) {
  return { $$typeof: yv, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e();
  } finally {
    fi.transition = t;
  }
};
j.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
j.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
j.useContext = function (e) {
  return Ae.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
j.useId = function () {
  return Ae.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return Ae.current.useRef(e);
};
j.useState = function (e) {
  return Ae.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return Ae.current.useTransition();
};
j.version = '18.2.0';
(function (e) {
  e.exports = j;
})(uv);
const w = Vf($t);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sv = $t,
  Cv = Symbol.for('react.element'),
  Tv = Symbol.for('react.fragment'),
  Pv = Object.prototype.hasOwnProperty,
  _v = Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Pv.call(t, r) && !Rv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Cv, type: e, key: i, ref: s, props: o, _owner: _v.current };
}
cs.Fragment = Tv;
cs.jsx = Zf;
cs.jsxs = Zf;
(function (e) {
  e.exports = cs;
})(av);
const xe = Si.jsx,
  lo = Si.jsxs;
var ao = {},
  Lv = {
    get exports() {
      return ao;
    },
    set exports(e) {
      ao = e;
    },
  },
  Je = {},
  Bl = {},
  Iv = {
    get exports() {
      return Bl;
    },
    set exports(e) {
      Bl = e;
    },
  },
  Jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, S) {
    var k = _.length;
    _.push(S);
    e: for (; 0 < k; ) {
      var M = (k - 1) >>> 1,
        O = _[M];
      if (0 < o(O, S)) (_[M] = S), (_[k] = O), (k = M);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var S = _[0],
      k = _.pop();
    if (k !== S) {
      _[0] = k;
      e: for (var M = 0, O = _.length, B = O >>> 1; M < B; ) {
        var Y = 2 * (M + 1) - 1,
          U = _[Y],
          se = Y + 1,
          de = _[se];
        if (0 > o(U, k))
          se < O && 0 > o(de, U) ? ((_[M] = de), (_[se] = k), (M = se)) : ((_[M] = U), (_[Y] = k), (M = Y));
        else if (se < O && 0 > o(de, k)) (_[M] = de), (_[se] = k), (M = se);
        else break e;
      }
    }
    return S;
  }
  function o(_, S) {
    var k = _.sortIndex - S.sortIndex;
    return k !== 0 ? k : _.id - S.id;
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
    u = [],
    c = 1,
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
  function m(_) {
    for (var S = n(u); S !== null; ) {
      if (S.callback === null) r(u);
      else if (S.startTime <= _) r(u), (S.sortIndex = S.expirationTime), t(a, S);
      else break;
      S = n(u);
    }
  }
  function b(_) {
    if ((($ = !1), m(_), !y))
      if (n(a) !== null) (y = !0), Q(T);
      else {
        var S = n(u);
        S !== null && ie(b, S.startTime - _);
      }
  }
  function T(_, S) {
    (y = !1), $ && (($ = !1), h(C), (C = -1)), (g = !0);
    var k = f;
    try {
      for (m(S), d = n(a); d !== null && (!(d.expirationTime > S) || (_ && !L())); ) {
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
        var Y = n(u);
        Y !== null && ie(b, Y.startTime - S), (B = !1);
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
  function ue() {
    if (x !== null) {
      var _ = e.unstable_now();
      D = _;
      var S = !0;
      try {
        S = x(!0, _);
      } finally {
        S ? Ce() : ((P = !1), (x = null));
      }
    } else P = !1;
  }
  var Ce;
  if (typeof p == 'function')
    Ce = function () {
      p(ue);
    };
  else if (typeof MessageChannel < 'u') {
    var ce = new MessageChannel(),
      re = ce.port2;
    (ce.port1.onmessage = ue),
      (Ce = function () {
        re.postMessage(null);
      });
  } else
    Ce = function () {
      A(ue, 0);
    };
  function Q(_) {
    (x = _), P || ((P = !0), Ce());
  }
  function ie(_, S) {
    C = A(function () {
      _(e.unstable_now());
    }, S);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Q(T));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (z = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
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
        return _();
      } finally {
        f = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, S) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var k = f;
      f = _;
      try {
        return S();
      } finally {
        f = k;
      }
    }),
    (e.unstable_scheduleCallback = function (_, S, k) {
      var M = e.unstable_now();
      switch (
        (typeof k == 'object' && k !== null
          ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? M + k : M))
          : (k = M),
        _)
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
        (_ = { id: c++, callback: S, priorityLevel: _, startTime: k, expirationTime: O, sortIndex: -1 }),
        k > M
          ? ((_.sortIndex = k), t(u, _), n(a) === null && _ === n(u) && ($ ? (h(C), (C = -1)) : ($ = !0), ie(b, k - M)))
          : ((_.sortIndex = O), t(a, _), y || g || ((y = !0), Q(T))),
        _
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (_) {
      var S = f;
      return function () {
        var k = f;
        f = S;
        try {
          return _.apply(this, arguments);
        } finally {
          f = k;
        }
      };
    });
})(Jf);
(function (e) {
  e.exports = Jf;
})(Iv);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep = $t,
  Xe = Bl;
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
var tp = new Set(),
  uo = {};
function jn(e, t) {
  $r(e, t), $r(e + 'Capture', t);
}
function $r(e, t) {
  for (uo[e] = t, e = 0; e < t.length; e++) tp.add(t[e]);
}
var Vt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Hl = Object.prototype.hasOwnProperty,
  Ov =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cc = {},
  Tc = {};
function Av(e) {
  return Hl.call(Tc, e) ? !0 : Hl.call(Cc, e) ? !1 : Ov.test(e) ? (Tc[e] = !0) : ((Cc[e] = !0), !1);
}
function Mv(e, t, n, r) {
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
function Nv(e, t, n, r) {
  if (t === null || typeof t > 'u' || Mv(e, t, n, r)) return !0;
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
function Me(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ee[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ee[e] = new Me(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ee[e] = new Me(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ee[e] = new Me(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ee[e] = new Me(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ee[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qa = /[\-:]([a-z])/g;
function Ga(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qa, Ga);
    Ee[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(qa, Ga);
  Ee[t] = new Me(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(qa, Ga);
  Ee[t] = new Me(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ee[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Me('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ee[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xa(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Nv(t, n, o, r) && (n = null),
    r || o === null
      ? Av(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Yt = ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vo = Symbol.for('react.element'),
  tr = Symbol.for('react.portal'),
  nr = Symbol.for('react.fragment'),
  Za = Symbol.for('react.strict_mode'),
  jl = Symbol.for('react.profiler'),
  np = Symbol.for('react.provider'),
  rp = Symbol.for('react.context'),
  Ja = Symbol.for('react.forward_ref'),
  Fl = Symbol.for('react.suspense'),
  Ul = Symbol.for('react.suspense_list'),
  eu = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  op = Symbol.for('react.offscreen'),
  Pc = Symbol.iterator;
function Nr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pc && e[Pc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ne = Object.assign,
  tl;
function Wr(e) {
  if (tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      tl = (t && t[1]) || '';
    }
  return (
    `
` +
    tl +
    e
  );
}
var nl = !1;
function rl(e, t) {
  if (!e || nl) return '';
  nl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
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
    (nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Wr(e) : '';
}
function Dv(e) {
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
      return (e = rl(e.type, !1)), e;
    case 11:
      return (e = rl(e.type.render, !1)), e;
    case 1:
      return (e = rl(e.type, !0)), e;
    default:
      return '';
  }
}
function Vl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case nr:
      return 'Fragment';
    case tr:
      return 'Portal';
    case jl:
      return 'Profiler';
    case Za:
      return 'StrictMode';
    case Fl:
      return 'Suspense';
    case Ul:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case rp:
        return (e.displayName || 'Context') + '.Consumer';
      case np:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case eu:
        return (t = e.displayName || null), t !== null ? t : Vl(e.type) || 'Memo';
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Vl(e(t));
        } catch {}
    }
  return null;
}
function zv(e) {
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
      return Vl(t);
    case 8:
      return t === Za ? 'StrictMode' : 'Mode';
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
function ip(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Bv(e) {
  var t = ip(e) ? 'checked' : 'value',
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
  e._valueTracker || (e._valueTracker = Bv(e));
}
function sp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = ip(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Ci(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wl(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _c(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function lp(e, t) {
  (t = t.checked), t != null && Xa(e, 'checked', t, !1);
}
function Kl(e, t) {
  lp(e, t);
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
  t.hasOwnProperty('value') ? Ql(e, t.type, n) : t.hasOwnProperty('defaultValue') && Ql(e, t.type, hn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rc(e, t, n) {
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
function Ql(e, t, n) {
  (t !== 'number' || Ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Kr = Array.isArray;
function pr(e, t, n, r) {
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
function Yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Lc(e, t) {
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
function ap(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ic(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function up(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ql(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? up(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ko,
  cp = (function (e) {
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
var Gr = {
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
  Hv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Gr).forEach(function (e) {
  Hv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]);
  });
});
function dp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = dp(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var jv = ne(
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
function Gl(e, t) {
  if (t) {
    if (jv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function Xl(e, t) {
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
var Zl = null;
function tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jl = null,
  hr = null,
  mr = null;
function Oc(e) {
  if ((e = Ao(e))) {
    if (typeof Jl != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ms(t)), Jl(e.stateNode, e.type, t));
  }
}
function pp(e) {
  hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e);
}
function hp() {
  if (hr) {
    var e = hr,
      t = mr;
    if (((mr = hr = null), Oc(e), t)) for (e = 0; e < t.length; e++) Oc(t[e]);
  }
}
function mp(e, t) {
  return e(t);
}
function gp() {}
var ol = !1;
function vp(e, t, n) {
  if (ol) return e(t, n);
  ol = !0;
  try {
    return mp(e, t, n);
  } finally {
    (ol = !1), (hr !== null || mr !== null) && (gp(), hp());
  }
}
function fo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ms(n);
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
var ea = !1;
if (Vt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, 'passive', {
      get: function () {
        ea = !0;
      },
    }),
      window.addEventListener('test', Dr, Dr),
      window.removeEventListener('test', Dr, Dr);
  } catch {
    ea = !1;
  }
function Fv(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Xr = !1,
  Ti = null,
  Pi = !1,
  ta = null,
  Uv = {
    onError: function (e) {
      (Xr = !0), (Ti = e);
    },
  };
function Vv(e, t, n, r, o, i, s, l, a) {
  (Xr = !1), (Ti = null), Fv.apply(Uv, arguments);
}
function Wv(e, t, n, r, o, i, s, l, a) {
  if ((Vv.apply(this, arguments), Xr)) {
    if (Xr) {
      var u = Ti;
      (Xr = !1), (Ti = null);
    } else throw Error(E(198));
    Pi || ((Pi = !0), (ta = u));
  }
}
function Fn(e) {
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
function yp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Ac(e) {
  if (Fn(e) !== e) throw Error(E(188));
}
function Kv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(E(188));
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
        if (i === n) return Ac(o), e;
        if (i === r) return Ac(o), t;
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
function wp(e) {
  return (e = Kv(e)), e !== null ? bp(e) : null;
}
function bp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $p = Xe.unstable_scheduleCallback,
  Mc = Xe.unstable_cancelCallback,
  Qv = Xe.unstable_shouldYield,
  Yv = Xe.unstable_requestPaint,
  ae = Xe.unstable_now,
  qv = Xe.unstable_getCurrentPriorityLevel,
  nu = Xe.unstable_ImmediatePriority,
  xp = Xe.unstable_UserBlockingPriority,
  _i = Xe.unstable_NormalPriority,
  Gv = Xe.unstable_LowPriority,
  kp = Xe.unstable_IdlePriority,
  ds = null,
  Lt = null;
function Xv(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == 'function')
    try {
      Lt.onCommitFiberRoot(ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : ey,
  Zv = Math.log,
  Jv = Math.LN2;
function ey(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zv(e) / Jv) | 0)) | 0;
}
var Qo = 64,
  Yo = 4194304;
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
function Ri(e, t) {
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
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ty(e, t) {
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
function ny(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - xt(i),
      l = 1 << s,
      a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = ty(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l);
  }
}
function na(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ep() {
  var e = Qo;
  return (Qo <<= 1), !(Qo & 4194240) && (Qo = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Io(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function ry(e, t) {
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
    var o = 31 - xt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ru(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var V = 0;
function Sp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cp,
  ou,
  Tp,
  Pp,
  _p,
  ra = !1,
  qo = [],
  sn = null,
  ln = null,
  an = null,
  po = new Map(),
  ho = new Map(),
  en = [],
  oy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Nc(e, t) {
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
      po.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ho.delete(t.pointerId);
  }
}
function zr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = Ao(t)), t !== null && ou(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function iy(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (sn = zr(sn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (ln = zr(ln, e, t, n, r, o)), !0;
    case 'mouseover':
      return (an = zr(an, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return po.set(i, zr(po.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), ho.set(i, zr(ho.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Rp(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yp(n)), t !== null)) {
          (e.blockedOn = t),
            _p(e.priority, function () {
              Tp(n);
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
function pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zl = r), n.target.dispatchEvent(r), (Zl = null);
    } else return (t = Ao(n)), t !== null && ou(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dc(e, t, n) {
  pi(e) && n.delete(t);
}
function sy() {
  (ra = !1),
    sn !== null && pi(sn) && (sn = null),
    ln !== null && pi(ln) && (ln = null),
    an !== null && pi(an) && (an = null),
    po.forEach(Dc),
    ho.forEach(Dc);
}
function Br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), ra || ((ra = !0), Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, sy)));
}
function mo(e) {
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
    sn !== null && Br(sn, e), ln !== null && Br(ln, e), an !== null && Br(an, e), po.forEach(t), ho.forEach(t), n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); ) Rp(n), n.blockedOn === null && en.shift();
}
var gr = Yt.ReactCurrentBatchConfig,
  Li = !0;
function ly(e, t, n, r) {
  var o = V,
    i = gr.transition;
  gr.transition = null;
  try {
    (V = 1), iu(e, t, n, r);
  } finally {
    (V = o), (gr.transition = i);
  }
}
function ay(e, t, n, r) {
  var o = V,
    i = gr.transition;
  gr.transition = null;
  try {
    (V = 4), iu(e, t, n, r);
  } finally {
    (V = o), (gr.transition = i);
  }
}
function iu(e, t, n, r) {
  if (Li) {
    var o = oa(e, t, n, r);
    if (o === null) ml(e, t, r, Ii, n), Nc(e, r);
    else if (iy(o, e, t, n, r)) r.stopPropagation();
    else if ((Nc(e, r), t & 4 && -1 < oy.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ao(o);
        if ((i !== null && Cp(i), (i = oa(e, t, n, r)), i === null && ml(e, t, r, Ii, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ml(e, t, r, null, n);
  }
}
var Ii = null;
function oa(e, t, n, r) {
  if (((Ii = null), (e = tu(r)), (e = Cn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ii = e), null;
}
function Lp(e) {
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
      switch (qv()) {
        case nu:
          return 1;
        case xp:
          return 4;
        case _i:
        case Gv:
          return 16;
        case kp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  su = null,
  hi = null;
function Ip() {
  if (hi) return hi;
  var e,
    t = su,
    n = t.length,
    r,
    o = 'value' in nn ? nn.value : nn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (hi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function mi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Go() {
  return !0;
}
function zc() {
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
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Go : zc),
      (this.isPropagationStopped = zc),
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
          (this.isDefaultPrevented = Go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Go));
      },
      persist: function () {},
      isPersistent: Go,
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
  lu = et(Rr),
  Oo = ne({}, Rr, { view: 0, detail: 0 }),
  uy = et(Oo),
  sl,
  ll,
  Hr,
  fs = ne({}, Oo, {
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
    getModifierState: au,
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
              ? ((sl = e.screenX - Hr.screenX), (ll = e.screenY - Hr.screenY))
              : (ll = sl = 0),
            (Hr = e)),
          sl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ll;
    },
  }),
  Bc = et(fs),
  cy = ne({}, fs, { dataTransfer: 0 }),
  dy = et(cy),
  fy = ne({}, Oo, { relatedTarget: 0 }),
  al = et(fy),
  py = ne({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hy = et(py),
  my = ne({}, Rr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gy = et(my),
  vy = ne({}, Rr, { data: 0 }),
  Hc = et(vy),
  yy = {
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
  wy = {
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
  by = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function $y(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = by[e]) ? !!t[e] : !1;
}
function au() {
  return $y;
}
var xy = ne({}, Oo, {
    key: function (e) {
      if (e.key) {
        var t = yy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = mi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? wy[e.keyCode] || 'Unidentified'
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
    getModifierState: au,
    charCode: function (e) {
      return e.type === 'keypress' ? mi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? mi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  ky = et(xy),
  Ey = ne({}, fs, {
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
  jc = et(Ey),
  Sy = ne({}, Oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au,
  }),
  Cy = et(Sy),
  Ty = ne({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Py = et(Ty),
  _y = ne({}, fs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ry = et(_y),
  Ly = [9, 13, 27, 32],
  uu = Vt && 'CompositionEvent' in window,
  Zr = null;
Vt && 'documentMode' in document && (Zr = document.documentMode);
var Iy = Vt && 'TextEvent' in window && !Zr,
  Op = Vt && (!uu || (Zr && 8 < Zr && 11 >= Zr)),
  Fc = String.fromCharCode(32),
  Uc = !1;
function Ap(e, t) {
  switch (e) {
    case 'keyup':
      return Ly.indexOf(t.keyCode) !== -1;
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
function Mp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var rr = !1;
function Oy(e, t) {
  switch (e) {
    case 'compositionend':
      return Mp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Uc = !0), Fc);
    case 'textInput':
      return (e = t.data), e === Fc && Uc ? null : e;
    default:
      return null;
  }
}
function Ay(e, t) {
  if (rr) return e === 'compositionend' || (!uu && Ap(e, t)) ? ((e = Ip()), (hi = su = nn = null), (rr = !1), e) : null;
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
      return Op && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var My = {
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
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!My[e.type] : t === 'textarea';
}
function Np(e, t, n, r) {
  pp(r),
    (t = Oi(t, 'onChange')),
    0 < t.length && ((n = new lu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Jr = null,
  go = null;
function Ny(e) {
  Qp(e, 0);
}
function ps(e) {
  var t = sr(e);
  if (sp(t)) return e;
}
function Dy(e, t) {
  if (e === 'change') return t;
}
var Dp = !1;
if (Vt) {
  var ul;
  if (Vt) {
    var cl = 'oninput' in document;
    if (!cl) {
      var Wc = document.createElement('div');
      Wc.setAttribute('oninput', 'return;'), (cl = typeof Wc.oninput == 'function');
    }
    ul = cl;
  } else ul = !1;
  Dp = ul && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  Jr && (Jr.detachEvent('onpropertychange', zp), (go = Jr = null));
}
function zp(e) {
  if (e.propertyName === 'value' && ps(go)) {
    var t = [];
    Np(t, go, e, tu(e)), vp(Ny, t);
  }
}
function zy(e, t, n) {
  e === 'focusin' ? (Kc(), (Jr = t), (go = n), Jr.attachEvent('onpropertychange', zp)) : e === 'focusout' && Kc();
}
function By(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ps(go);
}
function Hy(e, t) {
  if (e === 'click') return ps(t);
}
function jy(e, t) {
  if (e === 'input' || e === 'change') return ps(t);
}
function Fy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == 'function' ? Object.is : Fy;
function vo(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hl.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Qc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yc(e, t) {
  var n = Qc(e);
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
    n = Qc(n);
  }
}
function Bp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hp() {
  for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ci(e.document);
  }
  return t;
}
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Uy(e) {
  var t = Hp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bp(n.ownerDocument.documentElement, n)) {
    if (r !== null && cu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Yc(n, i));
        var s = Yc(n, r);
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
var Vy = Vt && 'documentMode' in document && 11 >= document.documentMode,
  or = null,
  ia = null,
  eo = null,
  sa = !1;
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sa ||
    or == null ||
    or !== Ci(r) ||
    ((r = or),
    'selectionStart' in r && cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (eo && vo(eo, r)) ||
      ((eo = r),
      (r = Oi(ia, 'onSelect')),
      0 < r.length &&
        ((t = new lu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = or))));
}
function Xo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var ir = {
    animationend: Xo('Animation', 'AnimationEnd'),
    animationiteration: Xo('Animation', 'AnimationIteration'),
    animationstart: Xo('Animation', 'AnimationStart'),
    transitionend: Xo('Transition', 'TransitionEnd'),
  },
  dl = {},
  jp = {};
Vt &&
  ((jp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ir.animationend.animation, delete ir.animationiteration.animation, delete ir.animationstart.animation),
  'TransitionEvent' in window || delete ir.transitionend.transition);
function hs(e) {
  if (dl[e]) return dl[e];
  if (!ir[e]) return e;
  var t = ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jp) return (dl[e] = t[n]);
  return e;
}
var Fp = hs('animationend'),
  Up = hs('animationiteration'),
  Vp = hs('animationstart'),
  Wp = hs('transitionend'),
  Kp = new Map(),
  Gc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function wn(e, t) {
  Kp.set(e, t), jn(t, [e]);
}
for (var fl = 0; fl < Gc.length; fl++) {
  var pl = Gc[fl],
    Wy = pl.toLowerCase(),
    Ky = pl[0].toUpperCase() + pl.slice(1);
  wn(Wy, 'on' + Ky);
}
wn(Fp, 'onAnimationEnd');
wn(Up, 'onAnimationIteration');
wn(Vp, 'onAnimationStart');
wn('dblclick', 'onDoubleClick');
wn('focusin', 'onFocus');
wn('focusout', 'onBlur');
wn(Wp, 'onTransitionEnd');
$r('onMouseEnter', ['mouseout', 'mouseover']);
$r('onMouseLeave', ['mouseout', 'mouseover']);
$r('onPointerEnter', ['pointerout', 'pointerover']);
$r('onPointerLeave', ['pointerout', 'pointerover']);
jn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
jn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
jn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
jn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
jn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
jn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Yr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Qy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Yr));
function Xc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Wv(r, t, void 0, e), (e.currentTarget = null);
}
function Qp(e, t) {
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
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Xc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          Xc(o, l, u), (i = a);
        }
    }
  }
  if (Pi) throw ((e = ta), (Pi = !1), (ta = null), e);
}
function G(e, t) {
  var n = t[da];
  n === void 0 && (n = t[da] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Yp(t, e, 2, !1), n.add(r));
}
function hl(e, t, n) {
  var r = 0;
  t && (r |= 4), Yp(n, e, r, t);
}
var Zo = '_reactListening' + Math.random().toString(36).slice(2);
function yo(e) {
  if (!e[Zo]) {
    (e[Zo] = !0),
      tp.forEach(function (n) {
        n !== 'selectionchange' && (Qy.has(n) || hl(n, !1, e), hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || ((t[Zo] = !0), hl('selectionchange', !1, t));
  }
}
function Yp(e, t, n, r) {
  switch (Lp(t)) {
    case 1:
      var o = ly;
      break;
    case 4:
      o = ay;
      break;
    default:
      o = iu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ea || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ml(e, t, n, r, o) {
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
          if (((s = Cn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  vp(function () {
    var u = i,
      c = tu(n),
      d = [];
    e: {
      var f = Kp.get(e);
      if (f !== void 0) {
        var g = lu,
          y = e;
        switch (e) {
          case 'keypress':
            if (mi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = ky;
            break;
          case 'focusin':
            (y = 'focus'), (g = al);
            break;
          case 'focusout':
            (y = 'blur'), (g = al);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = al;
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
            g = Bc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = dy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Cy;
            break;
          case Fp:
          case Up:
          case Vp:
            g = hy;
            break;
          case Wp:
            g = Py;
            break;
          case 'scroll':
            g = uy;
            break;
          case 'wheel':
            g = Ry;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = gy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = jc;
        }
        var $ = (t & 4) !== 0,
          A = !$ && e === 'scroll',
          h = $ ? (f !== null ? f + 'Capture' : null) : f;
        $ = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var b = m.stateNode;
          if (
            (m.tag === 5 && b !== null && ((m = b), h !== null && ((b = fo(p, h)), b != null && $.push(wo(p, b, m)))),
            A)
          )
            break;
          p = p.return;
        }
        0 < $.length && ((f = new g(f, y, null, n, c)), d.push({ event: f, listeners: $ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f && n !== Zl && (y = n.relatedTarget || n.fromElement) && (Cn(y) || y[Wt]))
        )
          break e;
        if (
          (g || f) &&
          ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Cn(y) : null),
              y !== null && ((A = Fn(y)), y !== A || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            (($ = Bc),
            (b = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              (($ = jc), (b = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
            (A = g == null ? f : sr(g)),
            (m = y == null ? f : sr(y)),
            (f = new $(b, p + 'leave', g, n, c)),
            (f.target = A),
            (f.relatedTarget = m),
            (b = null),
            Cn(c) === u && (($ = new $(h, p + 'enter', y, n, c)), ($.target = m), ($.relatedTarget = A), (b = $)),
            (A = b),
            g && y)
          )
            t: {
              for ($ = g, h = y, p = 0, m = $; m; m = Qn(m)) p++;
              for (m = 0, b = h; b; b = Qn(b)) m++;
              for (; 0 < p - m; ) ($ = Qn($)), p--;
              for (; 0 < m - p; ) (h = Qn(h)), m--;
              for (; p--; ) {
                if ($ === h || (h !== null && $ === h.alternate)) break t;
                ($ = Qn($)), (h = Qn(h));
              }
              $ = null;
            }
          else $ = null;
          g !== null && Zc(d, f, g, $, !1), y !== null && A !== null && Zc(d, A, y, $, !0);
        }
      }
      e: {
        if (
          ((f = u ? sr(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var T = Dy;
        else if (Vc(f))
          if (Dp) T = jy;
          else {
            T = By;
            var P = zy;
          }
        else
          (g = f.nodeName) && g.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (T = Hy);
        if (T && (T = T(e, u))) {
          Np(d, T, n, c);
          break e;
        }
        P && P(e, f, u),
          e === 'focusout' && (P = f._wrapperState) && P.controlled && f.type === 'number' && Ql(f, 'number', f.value);
      }
      switch (((P = u ? sr(u) : window), e)) {
        case 'focusin':
          (Vc(P) || P.contentEditable === 'true') && ((or = P), (ia = u), (eo = null));
          break;
        case 'focusout':
          eo = ia = or = null;
          break;
        case 'mousedown':
          sa = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (sa = !1), qc(d, n, c);
          break;
        case 'selectionchange':
          if (Vy) break;
        case 'keydown':
        case 'keyup':
          qc(d, n, c);
      }
      var x;
      if (uu)
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
        rr ? Ap(e, n) && (C = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        (Op &&
          n.locale !== 'ko' &&
          (rr || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && rr && (x = Ip())
            : ((nn = c), (su = 'value' in nn ? nn.value : nn.textContent), (rr = !0))),
        (P = Oi(u, C)),
        0 < P.length &&
          ((C = new Hc(C, e, null, n, c)),
          d.push({ event: C, listeners: P }),
          x ? (C.data = x) : ((x = Mp(n)), x !== null && (C.data = x)))),
        (x = Iy ? Oy(e, n) : Ay(e, n)) &&
          ((u = Oi(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Hc('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    Qp(d, t);
  });
}
function wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = fo(e, n)), i != null && r.unshift(wo(e, i, o)), (i = fo(e, t)), i != null && r.push(wo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = fo(n, i)), a != null && s.unshift(wo(n, a, l)))
        : o || ((a = fo(n, i)), a != null && s.push(wo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yy = /\r\n?/g,
  qy = /\u0000|\uFFFD/g;
function Jc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Yy,
      `
`
    )
    .replace(qy, '');
}
function Jo(e, t, n) {
  if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(E(425));
}
function Ai() {}
var la = null,
  aa = null;
function ua(e, t) {
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
  Gy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ed = typeof Promise == 'function' ? Promise : void 0,
  Xy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ed < 'u'
      ? function (e) {
          return ed.resolve(null).then(e).catch(Zy);
        }
      : ca;
function Zy(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), mo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  mo(t);
}
function un(e) {
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
var Lr = Math.random().toString(36).slice(2),
  Rt = '__reactFiber$' + Lr,
  bo = '__reactProps$' + Lr,
  Wt = '__reactContainer$' + Lr,
  da = '__reactEvents$' + Lr,
  Jy = '__reactListeners$' + Lr,
  e0 = '__reactHandles$' + Lr;
function Cn(e) {
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
function sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ms(e) {
  return e[bo] || null;
}
var fa = [],
  lr = -1;
function bn(e) {
  return { current: e };
}
function X(e) {
  0 > lr || ((e.current = fa[lr]), (fa[lr] = null), lr--);
}
function q(e, t) {
  lr++, (fa[lr] = e.current), (e.current = t);
}
var mn = {},
  Re = bn(mn),
  je = bn(!1),
  In = mn;
function xr(e, t) {
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
  X(je), X(Re);
}
function nd(e, t, n) {
  if (Re.current !== mn) throw Error(E(168));
  q(Re, t), q(je, n);
}
function qp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, zv(e) || 'Unknown', o));
  return ne({}, n, r);
}
function Ni(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (In = Re.current),
    q(Re, e),
    q(je, je.current),
    !0
  );
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? ((e = qp(e, t, In)), (r.__reactInternalMemoizedMergedChildContext = e), X(je), X(Re), q(Re, e)) : X(je), q(je, n);
}
var Bt = null,
  gs = !1,
  vl = !1;
function Gp(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function t0(e) {
  (gs = !0), Gp(e);
}
function $n() {
  if (!vl && Bt !== null) {
    vl = !0;
    var e = 0,
      t = V;
    try {
      var n = Bt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (gs = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), $p(nu, $n), o);
    } finally {
      (V = t), (vl = !1);
    }
  }
  return null;
}
var ar = [],
  ur = 0,
  Di = null,
  zi = 0,
  st = [],
  lt = 0,
  On = null,
  jt = 1,
  Ft = '';
function En(e, t) {
  (ar[ur++] = zi), (ar[ur++] = Di), (Di = e), (zi = t);
}
function Xp(e, t, n) {
  (st[lt++] = jt), (st[lt++] = Ft), (st[lt++] = On), (On = e);
  var r = jt;
  e = Ft;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Ft = i + e);
  } else (jt = (1 << i) | (n << o) | r), (Ft = e);
}
function du(e) {
  e.return !== null && (En(e, 1), Xp(e, 1, 0));
}
function fu(e) {
  for (; e === Di; ) (Di = ar[--ur]), (ar[ur] = null), (zi = ar[--ur]), (ar[ur] = null);
  for (; e === On; )
    (On = st[--lt]), (st[lt] = null), (Ft = st[--lt]), (st[lt] = null), (jt = st[--lt]), (st[lt] = null);
}
var Ge = null,
  qe = null,
  J = !1,
  yt = null;
function Zp(e, t) {
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
        t !== null ? ((e.stateNode = t), (Ge = e), (qe = un(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: jt, overflow: Ft } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ha(e) {
  if (J) {
    var t = qe;
    if (t) {
      var n = t;
      if (!od(e, t)) {
        if (pa(e)) throw Error(E(418));
        t = un(n.nextSibling);
        var r = Ge;
        t && od(e, t) ? Zp(r, n) : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ge = e));
      }
    } else {
      if (pa(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Ge = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ge = e;
}
function ei(e) {
  if (e !== Ge) return !1;
  if (!J) return id(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !ua(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (pa(e)) throw (Jp(), Error(E(418)));
    for (; t; ) Zp(e, t), (t = un(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              qe = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ge ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function Jp() {
  for (var e = qe; e; ) e = un(e.nextSibling);
}
function kr() {
  (qe = Ge = null), (J = !1);
}
function pu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var n0 = Yt.ReactCurrentBatchConfig;
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bi = bn(null),
  Hi = null,
  cr = null,
  hu = null;
function mu() {
  hu = cr = Hi = null;
}
function gu(e) {
  var t = Bi.current;
  X(Bi), (e._currentValue = t);
}
function ma(e, t, n) {
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
function vr(e, t) {
  (Hi = e),
    (hu = cr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (hu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (Hi === null) throw Error(E(308));
      (cr = e), (Hi.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var Tn = null;
function vu(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function eh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), vu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Kt(e, r);
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function th(e, t) {
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
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Kt(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), vu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function gi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ru(e, n);
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
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next = { eventTime: g, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
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
          c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l), (l = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Mn |= s), (e.lanes = s), (e.memoizedState = d);
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
var nh = new ep.Component().refs;
function ga(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = fn(e),
      i = Ut(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = cn(e, i, o)), t !== null && (kt(t, e, o, r), gi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = fn(e),
      i = Ut(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = cn(e, i, o)),
      t !== null && (kt(t, e, o, r), gi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = fn(e),
      o = Ut(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = cn(e, o, r)), t !== null && (kt(t, e, r, n), gi(t, e, r));
  },
};
function ad(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !vo(n, r) || !vo(o, i)
      : !0
  );
}
function rh(e, t, n) {
  var r = !1,
    o = mn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = dt(i))
      : ((o = Fe(t) ? In : Re.current), (r = t.contextTypes), (i = (r = r != null) ? xr(e, o) : mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = vs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ud(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && vs.enqueueReplaceState(t, t.state, null);
}
function va(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = nh), yu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = dt(i)) : ((i = Fe(t) ? In : Re.current), (o.context = xr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ga(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && vs.enqueueReplaceState(o, o.state, null),
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
            l === nh && (l = o.refs = {}), s === null ? delete l[i] : (l[i] = s);
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
function cd(e) {
  var t = e._init;
  return t(e._payload);
}
function oh(e) {
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
  function l(h, p, m, b) {
    return p === null || p.tag !== 6 ? ((p = El(m, h.mode, b)), (p.return = h), p) : ((p = o(p, m)), (p.return = h), p);
  }
  function a(h, p, m, b) {
    var T = m.type;
    return T === nr
      ? c(h, p, m.props.children, b, m.key)
      : p !== null &&
        (p.elementType === T || (typeof T == 'object' && T !== null && T.$$typeof === Zt && cd(T) === p.type))
      ? ((b = o(p, m.props)), (b.ref = jr(h, p, m)), (b.return = h), b)
      : ((b = xi(m.type, m.key, m.props, null, h.mode, b)), (b.ref = jr(h, p, m)), (b.return = h), b);
  }
  function u(h, p, m, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Sl(m, h.mode, b)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, b, T) {
    return p === null || p.tag !== 7
      ? ((p = Ln(m, h.mode, b, T)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = El('' + p, h.mode, m)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Vo:
          return (m = xi(p.type, p.key, p.props, null, h.mode, m)), (m.ref = jr(h, null, p)), (m.return = h), m;
        case tr:
          return (p = Sl(p, h.mode, m)), (p.return = h), p;
        case Zt:
          var b = p._init;
          return d(h, b(p._payload), m);
      }
      if (Kr(p) || Nr(p)) return (p = Ln(p, h.mode, m, null)), (p.return = h), p;
      ti(h, p);
    }
    return null;
  }
  function f(h, p, m, b) {
    var T = p !== null ? p.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number') return T !== null ? null : l(h, p, '' + m, b);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Vo:
          return m.key === T ? a(h, p, m, b) : null;
        case tr:
          return m.key === T ? u(h, p, m, b) : null;
        case Zt:
          return (T = m._init), f(h, p, T(m._payload), b);
      }
      if (Kr(m) || Nr(m)) return T !== null ? null : c(h, p, m, b, null);
      ti(h, m);
    }
    return null;
  }
  function g(h, p, m, b, T) {
    if ((typeof b == 'string' && b !== '') || typeof b == 'number') return (h = h.get(m) || null), l(p, h, '' + b, T);
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case Vo:
          return (h = h.get(b.key === null ? m : b.key) || null), a(p, h, b, T);
        case tr:
          return (h = h.get(b.key === null ? m : b.key) || null), u(p, h, b, T);
        case Zt:
          var P = b._init;
          return g(h, p, m, P(b._payload), T);
      }
      if (Kr(b) || Nr(b)) return (h = h.get(m) || null), c(p, h, b, T, null);
      ti(p, b);
    }
    return null;
  }
  function y(h, p, m, b) {
    for (var T = null, P = null, x = p, C = (p = 0), z = null; x !== null && C < m.length; C++) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var D = f(h, x, m[C], b);
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
    if (C === m.length) return n(h, x), J && En(h, C), T;
    if (x === null) {
      for (; C < m.length; C++)
        (x = d(h, m[C], b)), x !== null && ((p = i(x, p, C)), P === null ? (T = x) : (P.sibling = x), (P = x));
      return J && En(h, C), T;
    }
    for (x = r(h, x); C < m.length; C++)
      (z = g(x, h, C, m[C], b)),
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
      J && En(h, C),
      T
    );
  }
  function $(h, p, m, b) {
    var T = Nr(m);
    if (typeof T != 'function') throw Error(E(150));
    if (((m = T.call(m)), m == null)) throw Error(E(151));
    for (var P = (T = null), x = p, C = (p = 0), z = null, D = m.next(); x !== null && !D.done; C++, D = m.next()) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var L = f(h, x, D.value, b);
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
    if (D.done) return n(h, x), J && En(h, C), T;
    if (x === null) {
      for (; !D.done; C++, D = m.next())
        (D = d(h, D.value, b)), D !== null && ((p = i(D, p, C)), P === null ? (T = D) : (P.sibling = D), (P = D));
      return J && En(h, C), T;
    }
    for (x = r(h, x); !D.done; C++, D = m.next())
      (D = g(x, h, C, D.value, b)),
        D !== null &&
          (e && D.alternate !== null && x.delete(D.key === null ? C : D.key),
          (p = i(D, p, C)),
          P === null ? (T = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        x.forEach(function (ue) {
          return t(h, ue);
        }),
      J && En(h, C),
      T
    );
  }
  function A(h, p, m, b) {
    if (
      (typeof m == 'object' && m !== null && m.type === nr && m.key === null && (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Vo:
          e: {
            for (var T = m.key, P = p; P !== null; ) {
              if (P.key === T) {
                if (((T = m.type), T === nr)) {
                  if (P.tag === 7) {
                    n(h, P.sibling), (p = o(P, m.props.children)), (p.return = h), (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Zt && cd(T) === P.type)
                ) {
                  n(h, P.sibling), (p = o(P, m.props)), (p.ref = jr(h, P, m)), (p.return = h), (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === nr
              ? ((p = Ln(m.props.children, h.mode, b, m.key)), (p.return = h), (h = p))
              : ((b = xi(m.type, m.key, m.props, null, h.mode, b)), (b.ref = jr(h, p, m)), (b.return = h), (h = b));
          }
          return s(h);
        case tr:
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
            (p = Sl(m, h.mode, b)), (p.return = h), (h = p);
          }
          return s(h);
        case Zt:
          return (P = m._init), A(h, p, P(m._payload), b);
      }
      if (Kr(m)) return y(h, p, m, b);
      if (Nr(m)) return $(h, p, m, b);
      ti(h, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = El(m, h.mode, b)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return A;
}
var Er = oh(!0),
  ih = oh(!1),
  Mo = {},
  It = bn(Mo),
  $o = bn(Mo),
  xo = bn(Mo);
function Pn(e) {
  if (e === Mo) throw Error(E(174));
  return e;
}
function wu(e, t) {
  switch ((q(xo, t), q($o, e), q(It, Mo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ql(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ql(t, e));
  }
  X(It), q(It, t);
}
function Sr() {
  X(It), X($o), X(xo);
}
function sh(e) {
  Pn(xo.current);
  var t = Pn(It.current),
    n = ql(t, e.type);
  t !== n && (q($o, e), q(It, n));
}
function bu(e) {
  $o.current === e && (X(It), X($o));
}
var ee = bn(0);
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
var yl = [];
function $u() {
  for (var e = 0; e < yl.length; e++) yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var vi = Yt.ReactCurrentDispatcher,
  wl = Yt.ReactCurrentBatchConfig,
  An = 0,
  te = null,
  he = null,
  ge = null,
  Ui = !1,
  to = !1,
  ko = 0,
  r0 = 0;
function Te() {
  throw Error(E(321));
}
function xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, o, i) {
  if (
    ((An = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vi.current = e === null || e.memoizedState === null ? l0 : a0),
    (e = n(r, o)),
    to)
  ) {
    i = 0;
    do {
      if (((to = !1), (ko = 0), 25 <= i)) throw Error(E(301));
      (i += 1), (ge = he = null), (t.updateQueue = null), (vi.current = u0), (e = n(r, o));
    } while (to);
  }
  if (((vi.current = Vi), (t = he !== null && he.next !== null), (An = 0), (ge = he = te = null), (Ui = !1), t))
    throw Error(E(300));
  return e;
}
function Eu() {
  var e = ko !== 0;
  return (ko = 0), e;
}
function Pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function ft() {
  if (he === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ge === null ? te.memoizedState : ge.next;
  if (t !== null) (ge = t), (he = e);
  else {
    if (e === null) throw Error(E(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function Eo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function bl(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = he,
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
      u = i;
    do {
      var c = u.lane;
      if ((An & c) === c)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d), (te.lanes |= c), (Mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Ct(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (Mn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
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
    Ct(i, t.memoizedState) || (Be = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function lh() {}
function ah(e, t) {
  var n = te,
    r = ft(),
    o = t(),
    i = !Ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Be = !0)),
    (r = r.queue),
    Su(dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), So(9, ch.bind(null, n, r, o, t), void 0, null), ve === null)) throw Error(E(349));
    An & 30 || uh(n, t, o);
  }
  return o;
}
function uh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ch(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), fh(t) && ph(e);
}
function dh(e, t, n) {
  return n(function () {
    fh(t) && ph(e);
  });
}
function fh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function ph(e) {
  var t = Kt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function dd(e) {
  var t = Pt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = s0.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function So(e, t, n, r) {
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
function hh() {
  return ft().memoizedState;
}
function yi(e, t, n, r) {
  var o = Pt();
  (te.flags |= e), (o.memoizedState = So(1 | t, n, void 0, r === void 0 ? null : r));
}
function ys(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (((i = s.destroy), r !== null && xu(r, s.deps))) {
      o.memoizedState = So(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = So(1 | t, n, i, r));
}
function fd(e, t) {
  return yi(8390656, 8, e, t);
}
function Su(e, t) {
  return ys(2048, 8, e, t);
}
function mh(e, t) {
  return ys(4, 2, e, t);
}
function gh(e, t) {
  return ys(4, 4, e, t);
}
function vh(e, t) {
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
function yh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ys(4, 4, vh.bind(null, t, e), n);
}
function Cu() {}
function wh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function bh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $h(e, t, n) {
  return An & 21
    ? (Ct(n, t) || ((n = Ep()), (te.lanes |= n), (Mn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function o0(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (wl.transition = r);
  }
}
function xh() {
  return ft().memoizedState;
}
function i0(e, t, n) {
  var r = fn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), kh(e))) Eh(t, n);
  else if (((n = eh(e, t, n, r)), n !== null)) {
    var o = Oe();
    kt(n, e, r, o), Sh(n, t, r);
  }
}
function s0(e, t, n) {
  var r = fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kh(e)) Eh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ct(l, s))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), vu(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = eh(e, t, o, r)), n !== null && ((o = Oe()), kt(n, e, r, o), Sh(n, t, r));
  }
}
function kh(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Eh(e, t) {
  to = Ui = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Sh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ru(e, n);
  }
}
var Vi = {
    readContext: dt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  l0 = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: fd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), yi(4194308, 4, vh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return yi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Pt();
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
        (e = e.dispatch = i0.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dd,
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = dd(!1),
        t = e[0];
      return (e = o0.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = Pt();
      if (J) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(E(349));
        An & 30 || uh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fd(dh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        So(9, ch.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = ve.identifierPrefix;
      if (J) {
        var n = Ft,
          r = jt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ko++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = r0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a0 = {
    readContext: dt,
    useCallback: wh,
    useContext: dt,
    useEffect: Su,
    useImperativeHandle: yh,
    useInsertionEffect: mh,
    useLayoutEffect: gh,
    useMemo: bh,
    useReducer: bl,
    useRef: hh,
    useState: function () {
      return bl(Eo);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = ft();
      return $h(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Eo)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: lh,
    useSyncExternalStore: ah,
    useId: xh,
    unstable_isNewReconciler: !1,
  },
  u0 = {
    readContext: dt,
    useCallback: wh,
    useContext: dt,
    useEffect: Su,
    useImperativeHandle: yh,
    useInsertionEffect: mh,
    useLayoutEffect: gh,
    useMemo: bh,
    useReducer: $l,
    useRef: hh,
    useState: function () {
      return $l(Eo);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = ft();
      return he === null ? (t.memoizedState = e) : $h(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Eo)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: lh,
    useSyncExternalStore: ah,
    useId: xh,
    unstable_isNewReconciler: !1,
  };
function Cr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Dv(r)), (r = r.return);
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
function xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ya(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var c0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Ch(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ki || ((Ki = !0), (Pa = r)), ya(e, t);
    }),
    n
  );
}
function Th(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ya(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ya(e, t), typeof r != 'function' && (dn === null ? (dn = new Set([this])) : dn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new c0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = E0.bind(null, e, t, n)), t.then(e, e));
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
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var d0 = Yt.ReactCurrentOwner,
  Be = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? ih(t, null, n, r) : Er(t, e.child, n, r);
}
function gd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    vr(t, o),
    (r = ku(e, t, n, r, i, o)),
    (n = Eu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Qt(e, t, o))
      : (J && n && du(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function vd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Au(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ph(e, t, i, r, o))
      : ((e = xi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : vo), n(s, r) && e.ref === t.ref)) return Qt(e, t, o);
  }
  return (t.flags |= 1), (e = pn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ph(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (vo(i, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Qt(e, t, o);
  }
  return wa(e, t, n, r, o);
}
function _h(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), q(fr, Ke), (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          q(fr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(fr, Ke),
        (Ke |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), q(fr, Ke), (Ke |= r);
  return Ie(e, t, o, n), t.child;
}
function Rh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function wa(e, t, n, r, o) {
  var i = Fe(n) ? In : Re.current;
  return (
    (i = xr(t, i)),
    vr(t, o),
    (n = ku(e, t, n, r, i, o)),
    (r = Eu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Qt(e, t, o))
      : (J && r && du(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (Fe(n)) {
    var i = !0;
    Ni(t);
  } else i = !1;
  if ((vr(t, o), t.stateNode === null)) wi(e, t), rh(t, n, r), va(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = dt(u)) : ((u = Fe(n) ? In : Re.current), (u = xr(t, u)));
    var c = n.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && ud(t, s, r, u)),
      (Jt = !1);
    var f = t.memoizedState;
    (s.state = f),
      ji(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || je.current || Jt
        ? (typeof c == 'function' && (ga(t, n, c, r), (a = t.memoizedState)),
          (l = Jt || ad(t, n, l, r, f, a, u))
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
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      th(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : gt(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = dt(a)) : ((a = Fe(n) ? In : Re.current), (a = xr(t, a)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== d || f !== a) && ud(t, s, r, a)),
      (Jt = !1),
      (f = t.memoizedState),
      (s.state = f),
      ji(t, r, s, o);
    var y = t.memoizedState;
    l !== d || f !== y || je.current || Jt
      ? (typeof g == 'function' && (ga(t, n, g, r), (y = t.memoizedState)),
        (u = Jt || ad(t, n, u, r, f, y, a) || !1)
          ? (c ||
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
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ba(e, t, n, r, i, o);
}
function ba(e, t, n, r, o, i) {
  Rh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && rd(t, n, !1), Qt(e, t, i);
  (r = t.stateNode), (d0.current = t);
  var l = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Er(t, e.child, null, i)), (t.child = Er(t, null, l, i))) : Ie(e, t, l, i),
    (t.memoizedState = r.state),
    o && rd(t, n, !0),
    t.child
  );
}
function Lh(e) {
  var t = e.stateNode;
  t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1),
    wu(e, t.containerInfo);
}
function wd(e, t, n, r, o) {
  return kr(), pu(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var $a = { dehydrated: null, treeContext: null, retryLane: 0 };
function xa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ih(e, t, n) {
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
      ha(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = $s(s, r, 0, null)),
              (e = Ln(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = xa(n)),
              (t.memoizedState = $a),
              e)
            : Tu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return f0(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = pn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = pn(l, i)) : ((i = Ln(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? xa(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $a),
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
function Tu(e, t) {
  return (t = $s({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ni(e, t, n, r) {
  return (
    r !== null && pu(r),
    Er(t, e.child, null, n),
    (e = Tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function f0(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xl(Error(E(422)))), ni(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = $s({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Ln(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Er(t, e.child, null, s),
        (t.child.memoizedState = xa(s)),
        (t.memoizedState = $a),
        i);
  if (!(t.mode & 1)) return ni(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(E(419))), (r = xl(i, r, void 0)), ni(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Be || l)) {
    if (((r = ve), r !== null)) {
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
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Kt(e, o), kt(r, e, o, -1));
    }
    return Ou(), (r = xl(Error(E(421)))), ni(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = S0.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (qe = un(o.nextSibling)),
      (Ge = t),
      (J = !0),
      (yt = null),
      e !== null && ((st[lt++] = jt), (st[lt++] = Ft), (st[lt++] = On), (jt = e.id), (Ft = e.overflow), (On = t)),
      (t = Tu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ma(e.return, t, n);
}
function kl(e, t, n, r, o) {
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
function Oh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ee.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
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
          kl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        kl(t, !0, n, null, i);
        break;
      case 'together':
        kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Mn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function p0(e, t, n) {
  switch (t.tag) {
    case 3:
      Lh(t), kr();
      break;
    case 5:
      sh(t);
      break;
    case 1:
      Fe(t.type) && Ni(t);
      break;
    case 4:
      wu(t, t.stateNode.containerInfo);
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
          ? Ih(e, t, n)
          : (q(ee, ee.current & 1), (e = Qt(e, t, n)), e !== null ? e.sibling : null);
      q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Oh(e, t, n);
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
      return (t.lanes = 0), _h(e, t, n);
  }
  return Qt(e, t, n);
}
var Ah, ka, Mh, Nh;
Ah = function (e, t) {
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
ka = function () {};
Mh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Pn(It.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Wl(e, o)), (r = Wl(e, r)), (i = []);
        break;
      case 'select':
        (o = ne({}, o, { value: void 0 })), (r = ne({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = Yl(e, o)), (r = Yl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ai);
    }
    Gl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (uo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === 'style')
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (uo.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && G('scroll', e), i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Nh = function (e, t, n, r) {
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
function Pe(e) {
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
function h0(e, t, n) {
  var r = t.pendingProps;
  switch ((fu(t), t.tag)) {
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
      return Pe(t), null;
    case 1:
      return Fe(t.type) && Mi(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Sr(),
        X(je),
        X(Re),
        $u(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ei(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (La(yt), (yt = null)))),
        ka(e, t),
        Pe(t),
        null
      );
    case 5:
      bu(t);
      var o = Pn(xo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Pe(t), null;
        }
        if (((e = Pn(It.current)), ei(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[bo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              G('cancel', r), G('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              G('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Yr.length; o++) G(Yr[o], r);
              break;
            case 'source':
              G('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              G('error', r), G('load', r);
              break;
            case 'details':
              G('toggle', r);
              break;
            case 'input':
              _c(r, i), G('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), G('invalid', r);
              break;
            case 'textarea':
              Lc(r, i), G('invalid', r);
          }
          Gl(n, i), (o = null);
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
                : uo.hasOwnProperty(s) && l != null && s === 'onScroll' && G('scroll', r);
            }
          switch (n) {
            case 'input':
              Wo(r), Rc(r, i, !0);
              break;
            case 'textarea':
              Wo(r), Ic(r);
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
            e === 'http://www.w3.org/1999/xhtml' && (e = up(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[bo] = r),
            Ah(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Xl(n, r)), n)) {
              case 'dialog':
                G('cancel', e), G('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                G('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Yr.length; o++) G(Yr[o], e);
                o = r;
                break;
              case 'source':
                G('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                G('error', e), G('load', e), (o = r);
                break;
              case 'details':
                G('toggle', e), (o = r);
                break;
              case 'input':
                _c(e, r), (o = Wl(e, r)), G('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ne({}, r, { value: void 0 })), G('invalid', e);
                break;
              case 'textarea':
                Lc(e, r), (o = Yl(e, r)), G('invalid', e);
                break;
              default:
                o = r;
            }
            Gl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'style'
                  ? fp(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && cp(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && co(e, a)
                    : typeof a == 'number' && co(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (uo.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && G('scroll', e)
                      : a != null && Xa(e, i, a, s));
              }
            switch (n) {
              case 'input':
                Wo(e), Rc(e, r, !1);
                break;
              case 'textarea':
                Wo(e), Ic(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + hn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? pr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && pr(e, !!r.multiple, r.defaultValue, !0);
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
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Nh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = Pn(xo.current)), Pn(It.current), ei(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Rt] = t), (i = r.nodeValue !== n) && ((e = Ge), e !== null))
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
      return Pe(t), null;
    case 13:
      if (
        (X(ee), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && qe !== null && t.mode & 1 && !(t.flags & 128)) Jp(), kr(), (t.flags |= 98560), (i = !1);
        else if (((i = ei(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(E(317));
            i[Rt] = t;
          } else kr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else yt !== null && (La(yt), (yt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ee.current & 1 ? me === 0 && (me = 3) : Ou())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return Sr(), ka(e, t), e === null && yo(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return gu(t.type._context), Pe(t), null;
    case 17:
      return Fe(t.type) && Mi(), Pe(t), null;
    case 19:
      if ((X(ee), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Fr(i, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
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
          i.tail !== null && ae() > Tr && ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
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
              return Pe(t), null;
          } else
            2 * ae() - i.renderingStartTime > Tr &&
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
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        Iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function m0(e, t) {
  switch ((fu(t), t.tag)) {
    case 1:
      return Fe(t.type) && Mi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Sr(), X(je), X(Re), $u(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        kr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return X(ee), null;
    case 4:
      return Sr(), null;
    case 10:
      return gu(t.type._context), null;
    case 22:
    case 23:
      return Iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ri = !1,
  _e = !1,
  g0 = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null;
function dr(e, t) {
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
function Ea(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var $d = !1;
function v0(e, t) {
  if (((la = Li), (e = Hp()), cu(e))) {
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
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
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
              if ((f === n && ++u === o && (l = s), f === i && ++c === r && (a = s), (g = d.nextSibling) !== null))
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
  for (aa = { focusedElem: e, selectionRange: n }, Li = !1, I = t; I !== null; )
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
        } catch (b) {
          oe(t, t.return, b);
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
        (o.destroy = void 0), i !== void 0 && Ea(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ws(e, t) {
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
function Sa(e) {
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
function Dh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Dh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Rt], delete t[bo], delete t[da], delete t[Jy], delete t[e0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ca(e, t, n) {
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
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
function Ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ta(e, t, n), e = e.sibling; e !== null; ) Ta(e, t, n), (e = e.sibling);
}
var $e = null,
  vt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Bh(e, t, n), (n = n.sibling);
}
function Bh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
    try {
      Lt.onCommitFiberUnmount(ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || dr(n, t);
    case 6:
      var r = $e,
        o = vt;
      ($e = null),
        Xt(e, t, n),
        ($e = r),
        (vt = o),
        $e !== null &&
          (vt
            ? ((e = $e), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode));
      break;
    case 18:
      $e !== null &&
        (vt
          ? ((e = $e), (n = n.stateNode), e.nodeType === 8 ? gl(e.parentNode, n) : e.nodeType === 1 && gl(e, n), mo(e))
          : gl($e, n.stateNode));
      break;
    case 4:
      (r = $e), (o = vt), ($e = n.stateNode.containerInfo), (vt = !0), Xt(e, t, n), ($e = r), (vt = o);
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
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && Ea(n, t, s), (o = o.next);
        } while (o !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (!_e && (dr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          oe(n, t, l);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((_e = (r = _e) || n.memoizedState !== null), Xt(e, t, n), (_e = r)) : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function kd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new g0()),
      t.forEach(function (r) {
        var o = C0.bind(null, e, r);
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
              ($e = l.stateNode), (vt = !1);
              break e;
            case 3:
              ($e = l.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              ($e = l.stateNode.containerInfo), (vt = !0);
              break e;
          }
          l = l.return;
        }
        if ($e === null) throw Error(E(160));
        Bh(i, s, o), ($e = null), (vt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hh(t, e), (t = t.sibling);
}
function Hh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), Tt(e), r & 4)) {
        try {
          no(3, e, e.return), ws(3, e);
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
      ht(t, e), Tt(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if ((ht(t, e), Tt(e), r & 512 && n !== null && dr(n, n.return), e.flags & 32)) {
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
            l === 'input' && i.type === 'radio' && i.name != null && lp(o, i), Xl(l, s);
            var u = Xl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === 'style'
                ? fp(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? cp(o, d)
                : c === 'children'
                ? co(o, d)
                : Xa(o, c, d, u);
            }
            switch (l) {
              case 'input':
                Kl(o, i);
                break;
              case 'textarea':
                ap(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? pr(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? pr(o, !!i.multiple, i.defaultValue, !0)
                      : pr(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[bo] = i;
          } catch ($) {
            oe(e, e.return, $);
          }
      }
      break;
    case 6:
      if ((ht(t, e), Tt(e), r & 4)) {
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
      if ((ht(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          mo(t.containerInfo);
        } catch ($) {
          oe(e, e.return, $);
        }
      break;
    case 4:
      ht(t, e), Tt(e);
      break;
    case 13:
      ht(t, e),
        Tt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Ru = ae())),
        r & 4 && kd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || c), ht(t, e), (_e = u)) : ht(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((f = I), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  no(4, f, f.return);
                  break;
                case 1:
                  dr(f, f.return);
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
                  dr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Sd(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (I = g)) : Sd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (l.style.display = dp('display', s)));
              } catch ($) {
                oe(e, e.return, $);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
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
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), Tt(e), r & 4 && kd(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zh(n)) {
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
          Ta(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = xd(e);
          Ca(e, l, s);
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
function y0(e, t, n) {
  (I = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ri;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || _e;
        l = ri;
        var u = _e;
        if (((ri = s), (_e = a) && !u))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? Cd(o) : a !== null ? ((a.return = s), (I = a)) : Cd(o);
        for (; i !== null; ) (I = i), jh(i), (i = i.sibling);
        (I = o), (ri = l), (_e = u);
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
              _e || ws(5, t);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && mo(d);
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
        _e || (t.flags & 512 && Sa(t));
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
            ws(4, t);
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
            Sa(t);
          } catch (a) {
            oe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Sa(t);
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
var w0 = Math.ceil,
  Wi = Yt.ReactCurrentDispatcher,
  Pu = Yt.ReactCurrentOwner,
  ut = Yt.ReactCurrentBatchConfig,
  F = 0,
  ve = null,
  fe = null,
  ke = 0,
  Ke = 0,
  fr = bn(0),
  me = 0,
  Co = null,
  Mn = 0,
  bs = 0,
  _u = 0,
  ro = null,
  ze = null,
  Ru = 0,
  Tr = 1 / 0,
  Dt = null,
  Ki = !1,
  Pa = null,
  dn = null,
  oi = !1,
  rn = null,
  Qi = 0,
  oo = 0,
  _a = null,
  bi = -1,
  $i = 0;
function Oe() {
  return F & 6 ? ae() : bi !== -1 ? bi : (bi = ae());
}
function fn(e) {
  return e.mode & 1
    ? F & 2 && ke !== 0
      ? ke & -ke
      : n0.transition !== null
      ? ($i === 0 && ($i = Ep()), $i)
      : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lp(e.type))), e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < oo) throw ((oo = 0), (_a = null), Error(E(185)));
  Io(e, n, r),
    (!(F & 2) || e !== ve) &&
      (e === ve && (!(F & 2) && (bs |= n), me === 4 && tn(e, ke)),
      Ue(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Tr = ae() + 500), gs && $n()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  ny(e, t);
  var r = Ri(e, e === ve ? ke : 0);
  if (r === 0) n !== null && Mc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mc(n), t === 1))
      e.tag === 0 ? t0(Td.bind(null, e)) : Gp(Td.bind(null, e)),
        Xy(function () {
          !(F & 6) && $n();
        }),
        (n = null);
    else {
      switch (Sp(r)) {
        case 1:
          n = nu;
          break;
        case 4:
          n = xp;
          break;
        case 16:
          n = _i;
          break;
        case 536870912:
          n = kp;
          break;
        default:
          n = _i;
      }
      n = qh(n, Fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fh(e, t) {
  if (((bi = -1), ($i = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = Ri(e, e === ve ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yi(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = Vh();
    (ve !== e || ke !== t) && ((Dt = null), (Tr = ae() + 500), Rn(e, t));
    do
      try {
        x0();
        break;
      } catch (l) {
        Uh(e, l);
      }
    while (1);
    mu(), (Wi.current = i), (F = o), fe !== null ? (t = 0) : ((ve = null), (ke = 0), (t = me));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = na(e)), o !== 0 && ((r = o), (t = Ra(e, o)))), t === 1))
      throw ((n = Co), Rn(e, 0), tn(e, r), Ue(e, ae()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !b0(o) &&
          ((t = Yi(e, r)), t === 2 && ((i = na(e)), i !== 0 && ((r = i), (t = Ra(e, i)))), t === 1))
      )
        throw ((n = Co), Rn(e, 0), tn(e, r), Ue(e, ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Sn(e, ze, Dt);
          break;
        case 3:
          if ((tn(e, r), (r & 130023424) === r && ((t = Ru + 500 - ae()), 10 < t))) {
            if (Ri(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ca(Sn.bind(null, e, ze, Dt), t);
            break;
          }
          Sn(e, ze, Dt);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - xt(r);
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
                : 1960 * w0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ca(Sn.bind(null, e, ze, Dt), r);
            break;
          }
          Sn(e, ze, Dt);
          break;
        case 5:
          Sn(e, ze, Dt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ue(e, ae()), e.callbackNode === n ? Fh.bind(null, e) : null;
}
function Ra(e, t) {
  var n = ro;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = Yi(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && La(t)),
    e
  );
}
function La(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function b0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ct(i(), o)) return !1;
          } catch {
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
  for (t &= ~_u, t &= ~bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if (F & 6) throw Error(E(327));
  yr();
  var t = Ri(e, 0);
  if (!(t & 1)) return Ue(e, ae()), null;
  var n = Yi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = na(e);
    r !== 0 && ((t = r), (n = Ra(e, r)));
  }
  if (n === 1) throw ((n = Co), Rn(e, 0), tn(e, t), Ue(e, ae()), n);
  if (n === 6) throw Error(E(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Sn(e, ze, Dt), Ue(e, ae()), null;
}
function Lu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Tr = ae() + 500), gs && $n());
  }
}
function Nn(e) {
  rn !== null && rn.tag === 0 && !(F & 6) && yr();
  var t = F;
  F |= 1;
  var n = ut.transition,
    r = V;
  try {
    if (((ut.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (ut.transition = n), (F = t), !(F & 6) && $n();
  }
}
function Iu() {
  (Ke = fr.current), X(fr);
}
function Rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gy(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((fu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Mi();
          break;
        case 3:
          Sr(), X(je), X(Re), $u();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          Sr();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          gu(r.type._context);
          break;
        case 22:
        case 23:
          Iu();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (fe = e = pn(e.current, null)),
    (ke = Ke = t),
    (me = 0),
    (Co = null),
    (_u = bs = Mn = 0),
    (ze = ro = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Uh(e, t) {
  do {
    var n = fe;
    try {
      if ((mu(), (vi.current = Vi), Ui)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ui = !1;
      }
      if (
        ((An = 0), (ge = he = te = null), (to = !1), (ko = 0), (Pu.current = null), n === null || n.return === null)
      ) {
        (me = 1), (Co = t), (fe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (((t = ke), (l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue), (c.memoizedState = f.memoizedState), (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = hd(s);
          if (g !== null) {
            (g.flags &= -257), md(g, s, l, i, t), g.mode & 1 && pd(i, u, t), (t = g), (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var $ = new Set();
              $.add(a), (t.updateQueue = $);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, u, t), Ou();
              break e;
            }
            a = Error(E(426));
          }
        } else if (J && l.mode & 1) {
          var A = hd(s);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), md(A, s, l, i, t), pu(Cr(a, l));
            break e;
          }
        }
        (i = a = Cr(a, l)), me !== 4 && (me = 2), ro === null ? (ro = [i]) : ro.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Ch(i, a, t);
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
                var b = Th(i, l, t);
                sd(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Kh(n);
    } catch (T) {
      (t = T), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Vh() {
  var e = Wi.current;
  return (Wi.current = Vi), e === null ? Vi : e;
}
function Ou() {
  (me === 0 || me === 3 || me === 2) && (me = 4), ve === null || (!(Mn & 268435455) && !(bs & 268435455)) || tn(ve, ke);
}
function Yi(e, t) {
  var n = F;
  F |= 2;
  var r = Vh();
  (ve !== e || ke !== t) && ((Dt = null), Rn(e, t));
  do
    try {
      $0();
      break;
    } catch (o) {
      Uh(e, o);
    }
  while (1);
  if ((mu(), (F = n), (Wi.current = r), fe !== null)) throw Error(E(261));
  return (ve = null), (ke = 0), me;
}
function $0() {
  for (; fe !== null; ) Wh(fe);
}
function x0() {
  for (; fe !== null && !Qv(); ) Wh(fe);
}
function Wh(e) {
  var t = Yh(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps), t === null ? Kh(e) : (fe = t), (Pu.current = null);
}
function Kh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = m0(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (fe = null);
        return;
      }
    } else if (((n = h0(n, t, Ke)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Sn(e, t, n) {
  var r = V,
    o = ut.transition;
  try {
    (ut.transition = null), (V = 1), k0(e, t, n, r);
  } finally {
    (ut.transition = o), (V = r);
  }
  return null;
}
function k0(e, t, n, r) {
  do yr();
  while (rn !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ry(e, i),
    e === ve && ((fe = ve = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      oi ||
      ((oi = !0),
      qh(_i, function () {
        return yr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ut.transition), (ut.transition = null);
    var s = V;
    V = 1;
    var l = F;
    (F |= 4),
      (Pu.current = null),
      v0(e, n),
      Hh(n, e),
      Uy(aa),
      (Li = !!la),
      (aa = la = null),
      (e.current = n),
      y0(n),
      Yv(),
      (F = l),
      (V = s),
      (ut.transition = i);
  } else e.current = n;
  if (
    (oi && ((oi = !1), (rn = e), (Qi = o)),
    (i = e.pendingLanes),
    i === 0 && (dn = null),
    Xv(n.stateNode),
    Ue(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ki) throw ((Ki = !1), (e = Pa), (Pa = null), e);
  return (
    Qi & 1 && e.tag !== 0 && yr(),
    (i = e.pendingLanes),
    i & 1 ? (e === _a ? oo++ : ((oo = 0), (_a = e))) : (oo = 0),
    $n(),
    null
  );
}
function yr() {
  if (rn !== null) {
    var e = Sp(Qi),
      t = ut.transition,
      n = V;
    try {
      if (((ut.transition = null), (V = 16 > e ? 16 : e), rn === null)) var r = !1;
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
                var u = l[a];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      no(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        g = c.return;
                      if ((Dh(c), c === u)) {
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
                      ws(9, l);
                  }
                } catch (T) {
                  oe(l, l.return, T);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (I = b);
                break e;
              }
              I = l.return;
            }
        }
        if (((F = o), $n(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
          try {
            Lt.onPostCommitFiberRoot(ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (ut.transition = t);
    }
  }
  return !1;
}
function Pd(e, t, n) {
  (t = Cr(n, t)), (t = Ch(e, t, 1)), (e = cn(e, t, 1)), (t = Oe()), e !== null && (Io(e, 1, t), Ue(e, t));
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
          (e = Cr(n, e)), (e = Th(t, e, 1)), (t = cn(t, e, 1)), (e = Oe()), t !== null && (Io(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function E0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (ke & n) === n &&
      (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > ae() - Ru) ? Rn(e, 0) : (_u |= n)),
    Ue(e, t);
}
function Qh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Yo), (Yo <<= 1), !(Yo & 130023424) && (Yo = 4194304)) : (t = 1));
  var n = Oe();
  (e = Kt(e, t)), e !== null && (Io(e, t, n), Ue(e, n));
}
function S0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qh(e, n);
}
function C0(e, t) {
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
  r !== null && r.delete(t), Qh(e, n);
}
var Yh;
Yh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), p0(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), J && t.flags & 1048576 && Xp(t, zi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      wi(e, t), (e = t.pendingProps);
      var o = xr(t, Re.current);
      vr(t, n), (o = ku(null, t, r, e, o, n));
      var i = Eu();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), Ni(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            yu(t),
            (o.updater = vs),
            (t.stateNode = o),
            (o._reactInternals = t),
            va(t, r, e, n),
            (t = ba(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && du(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (wi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = P0(r)),
          (e = gt(r, e)),
          o)
        ) {
          case 0:
            t = wa(null, t, r, e, n);
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
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), wa(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), yd(e, t, r, o, n);
    case 3:
      e: {
        if ((Lh(t), e === null)) throw Error(E(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), th(e, t), ji(t, r, null, n);
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
            (o = Cr(Error(E(423)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Cr(Error(E(424)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else
            for (
              qe = un(t.stateNode.containerInfo.firstChild),
                Ge = t,
                J = !0,
                yt = null,
                n = ih(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((kr(), r === o)) {
            t = Qt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sh(t),
        e === null && ha(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ua(r, o) ? (s = null) : i !== null && ua(r, i) && (t.flags |= 32),
        Rh(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ha(t), null;
    case 13:
      return Ih(e, t, n);
    case 4:
      return (
        wu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Er(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : gt(r, o)), gd(e, t, r, o, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
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
          if (Ct(i.value, s)) {
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
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), ma(i.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), ma(s, n, t), (s = i.sibling);
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
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        vr(t, n),
        (o = dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = gt(r, t.pendingProps)), (o = gt(r.type, o)), vd(e, t, r, o, n);
    case 15:
      return Ph(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        wi(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Ni(t)) : (e = !1),
        vr(t, n),
        rh(t, r, o),
        va(t, r, o, n),
        ba(null, t, r, !0, e, n)
      );
    case 19:
      return Oh(e, t, n);
    case 22:
      return _h(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function qh(e, t) {
  return $p(e, t);
}
function T0(e, t, n, r) {
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
  return new T0(e, t, n, r);
}
function Au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function P0(e) {
  if (typeof e == 'function') return Au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ja)) return 11;
    if (e === eu) return 14;
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
function xi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Au(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case nr:
        return Ln(n.children, o, i, t);
      case Za:
        (s = 8), (o |= 8);
        break;
      case jl:
        return (e = at(12, n, t, o | 2)), (e.elementType = jl), (e.lanes = i), e;
      case Fl:
        return (e = at(13, n, t, o)), (e.elementType = Fl), (e.lanes = i), e;
      case Ul:
        return (e = at(19, n, t, o)), (e.elementType = Ul), (e.lanes = i), e;
      case op:
        return $s(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case np:
              s = 10;
              break e;
            case rp:
              s = 9;
              break e;
            case Ja:
              s = 11;
              break e;
            case eu:
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
function Ln(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (e = at(22, e, r, t)), (e.elementType = op), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function El(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function Sl(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function _0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = il(0)),
    (this.expirationTimes = il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Mu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new _0(e, t, n, l, a)),
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
    yu(i),
    e
  );
}
function R0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: tr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Gh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(E(170));
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
    if (Fe(n)) return qp(e, n, t);
  }
  return t;
}
function Xh(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Mu(n, r, !0, e, o, i, s, l, a)),
    (e.context = Gh(null)),
    (n = e.current),
    (r = Oe()),
    (o = fn(n)),
    (i = Ut(r, o)),
    (i.callback = t ?? null),
    cn(n, i, o),
    (e.current.lanes = o),
    Io(e, o, r),
    Ue(e, r),
    e
  );
}
function xs(e, t, n, r) {
  var o = t.current,
    i = Oe(),
    s = fn(o);
  return (
    (n = Gh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(o, t, s)),
    e !== null && (kt(e, o, s, i), gi(e, o, s)),
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
function _d(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nu(e, t) {
  _d(e, t), (e = e.alternate) && _d(e, t);
}
function L0() {
  return null;
}
var Zh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Du(e) {
  this._internalRoot = e;
}
ks.prototype.render = Du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  xs(e, t, null, null);
};
ks.prototype.unmount = Du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      xs(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function ks(e) {
  this._internalRoot = e;
}
ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Rp(e);
  }
};
function zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Es(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Rd() {}
function I0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = qi(s);
        i.call(u);
      };
    }
    var s = Xh(t, r, e, 0, null, !1, !1, '', Rd);
    return (e._reactRootContainer = s), (e[Wt] = s.current), yo(e.nodeType === 8 ? e.parentNode : e), Nn(), s;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = qi(a);
      l.call(u);
    };
  }
  var a = Mu(e, 0, !1, null, null, !1, !1, '', Rd);
  return (
    (e._reactRootContainer = a),
    (e[Wt] = a.current),
    yo(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      xs(t, a, n, r);
    }),
    a
  );
}
function Ss(e, t, n, r, o) {
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
    xs(t, s, e, o);
  } else s = I0(n, t, e, o, r);
  return qi(s);
}
Cp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qr(t.pendingLanes);
        n !== 0 && (ru(t, n | 1), Ue(t, ae()), !(F & 6) && ((Tr = ae() + 500), $n()));
      }
      break;
    case 13:
      Nn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var o = Oe();
          kt(r, e, 1, o);
        }
      }),
        Nu(e, 1);
  }
};
ou = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Oe();
      kt(t, e, 134217728, n);
    }
    Nu(e, 134217728);
  }
};
Tp = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Oe();
      kt(n, e, t, r);
    }
    Nu(e, t);
  }
};
Pp = function () {
  return V;
};
_p = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Jl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Kl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ms(r);
            if (!o) throw Error(E(90));
            sp(r), Kl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      ap(e, n);
      break;
    case 'select':
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
mp = Lu;
gp = Nn;
var O0 = { usingClientEntryPoint: !1, Events: [Ao, sr, ms, pp, hp, Lu] },
  Ur = { findFiberByHostInstance: Cn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  A0 = {
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
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || L0,
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
      (ds = ii.inject(A0)), (Lt = ii);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zu(t)) throw Error(E(200));
  return R0(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!zu(e)) throw Error(E(299));
  var n = !1,
    r = '',
    o = Zh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Mu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Wt] = t.current),
    yo(e.nodeType === 8 ? e.parentNode : e),
    new Du(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(E(188)) : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = wp(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Nn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Es(t)) throw Error(E(200));
  return Ss(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!zu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Zh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Wt] = t.current),
    yo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ks(t);
};
Je.render = function (e, t, n) {
  if (!Es(t)) throw Error(E(200));
  return Ss(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Es(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Ss(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Lu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Es(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ss(e, t, n, !1, r);
};
Je.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Je);
})(Lv);
const M0 = Vf(ao);
var Jh,
  Ld = ao;
(Jh = Ld.createRoot), Ld.hydrateRoot;
function Ia(e, t) {
  return (
    (Ia = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ia(e, t)
  );
}
function gn(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ia(e, t);
}
var Gi = {},
  N0 = {
    get exports() {
      return Gi;
    },
    set exports(e) {
      Gi = e;
    },
  },
  D0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  z0 = D0,
  B0 = z0;
function em() {}
function tm() {}
tm.resetWarningCache = em;
var H0 = function () {
  function e(r, o, i, s, l, a) {
    if (a !== B0) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
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
    checkPropTypes: tm,
    resetWarningCache: em,
  };
  return (n.PropTypes = n), n;
};
N0.exports = H0();
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
function Cl(e, t) {
  for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function j0(e, t) {
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
  for (var u = 0, c = r.length; c >= 0; c--) {
    var d = r[c];
    d === '.' ? Cl(r, c) : d === '..' ? (Cl(r, c), u++) : u && (Cl(r, c), u--);
  }
  if (!s) for (; u--; u) r.unshift('..');
  s && r[0] !== '' && (!r[0] || !si(r[0])) && r.unshift('');
  var f = r.join('/');
  return l && f.substr(-1) !== '/' && (f += '/'), f;
}
function Id(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function ki(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (o, i) {
        return ki(o, t[i]);
      })
    );
  if (typeof e == 'object' || typeof t == 'object') {
    var n = Id(e),
      r = Id(t);
    return n !== e || r !== t
      ? ki(n, r)
      : Object.keys(Object.assign({}, e, t)).every(function (o) {
          return ki(e[o], t[o]);
        });
  }
  return !1;
}
var F0 = !0,
  Tl = 'Invariant failed';
function Un(e, t) {
  if (!e) {
    if (F0) throw new Error(Tl);
    var n = typeof t == 'function' ? t() : t,
      r = n ? ''.concat(Tl, ': ').concat(n) : Tl;
    throw new Error(r);
  }
}
function io(e) {
  return e.charAt(0) === '/' ? e : '/' + e;
}
function Od(e) {
  return e.charAt(0) === '/' ? e.substr(1) : e;
}
function U0(e, t) {
  return e.toLowerCase().indexOf(t.toLowerCase()) === 0 && '/?#'.indexOf(e.charAt(t.length)) !== -1;
}
function nm(e, t) {
  return U0(e, t) ? e.substr(t.length) : e;
}
function rm(e) {
  return e.charAt(e.length - 1) === '/' ? e.slice(0, -1) : e;
}
function V0(e) {
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
    ? ((o = V0(e)), (o.state = t))
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
        ? o.pathname.charAt(0) !== '/' && (o.pathname = j0(o.pathname, r.pathname))
        : (o.pathname = r.pathname)
      : o.pathname || (o.pathname = '/'),
    o
  );
}
function W0(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && ki(e.state, t.state)
  );
}
function Bu() {
  var e = null;
  function t(s) {
    return (
      (e = s),
      function () {
        e === s && (e = null);
      }
    );
  }
  function n(s, l, a, u) {
    if (e != null) {
      var c = typeof e == 'function' ? e(s, l) : e;
      typeof c == 'string' ? (typeof a == 'function' ? a(c, u) : u(!0)) : u(c !== !1);
    } else u(!0);
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
          (r = r.filter(function (u) {
            return u !== a;
          }));
      }
    );
  }
  function i() {
    for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++) l[a] = arguments[a];
    r.forEach(function (u) {
      return u.apply(void 0, l);
    });
  }
  return { setPrompt: t, confirmTransitionTo: n, appendListener: o, notifyListeners: i };
}
var om = !!(typeof window < 'u' && window.document && window.document.createElement);
function im(e, t) {
  t(window.confirm(e));
}
function K0() {
  var e = window.navigator.userAgent;
  return (e.indexOf('Android 2.') !== -1 || e.indexOf('Android 4.0') !== -1) &&
    e.indexOf('Mobile Safari') !== -1 &&
    e.indexOf('Chrome') === -1 &&
    e.indexOf('Windows Phone') === -1
    ? !1
    : window.history && 'pushState' in window.history;
}
function Q0() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
function Y0() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
function q0(e) {
  return e.state === void 0 && navigator.userAgent.indexOf('CriOS') === -1;
}
var Ad = 'popstate',
  Md = 'hashchange';
function Nd() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function G0(e) {
  e === void 0 && (e = {}), om || Un(!1);
  var t = window.history,
    n = K0(),
    r = !Q0(),
    o = e,
    i = o.forceRefresh,
    s = i === void 0 ? !1 : i,
    l = o.getUserConfirmation,
    a = l === void 0 ? im : l,
    u = o.keyLength,
    c = u === void 0 ? 6 : u,
    d = e.basename ? rm(io(e.basename)) : '';
  function f(S) {
    var k = S || {},
      M = k.key,
      O = k.state,
      B = window.location,
      Y = B.pathname,
      U = B.search,
      se = B.hash,
      de = Y + U + se;
    return d && (de = nm(de, d)), He(de, O, M);
  }
  function g() {
    return Math.random().toString(36).substr(2, c);
  }
  var y = Bu();
  function $(S) {
    Ve(_, S), (_.length = t.length), y.notifyListeners(_.location, _.action);
  }
  function A(S) {
    q0(S) || m(f(S.state));
  }
  function h() {
    m(f(Nd()));
  }
  var p = !1;
  function m(S) {
    if (p) (p = !1), $();
    else {
      var k = 'POP';
      y.confirmTransitionTo(S, k, a, function (M) {
        M ? $({ action: k, location: S }) : b(S);
      });
    }
  }
  function b(S) {
    var k = _.location,
      M = P.indexOf(k.key);
    M === -1 && (M = 0);
    var O = P.indexOf(S.key);
    O === -1 && (O = 0);
    var B = M - O;
    B && ((p = !0), D(B));
  }
  var T = f(Nd()),
    P = [T.key];
  function x(S) {
    return d + it(S);
  }
  function C(S, k) {
    var M = 'PUSH',
      O = He(S, k, g(), _.location);
    y.confirmTransitionTo(O, M, a, function (B) {
      if (B) {
        var Y = x(O),
          U = O.key,
          se = O.state;
        if (n)
          if ((t.pushState({ key: U, state: se }, null, Y), s)) window.location.href = Y;
          else {
            var de = P.indexOf(_.location.key),
              Nt = P.slice(0, de + 1);
            Nt.push(O.key), (P = Nt), $({ action: M, location: O });
          }
        else window.location.href = Y;
      }
    });
  }
  function z(S, k) {
    var M = 'REPLACE',
      O = He(S, k, g(), _.location);
    y.confirmTransitionTo(O, M, a, function (B) {
      if (B) {
        var Y = x(O),
          U = O.key,
          se = O.state;
        if (n)
          if ((t.replaceState({ key: U, state: se }, null, Y), s)) window.location.replace(Y);
          else {
            var de = P.indexOf(_.location.key);
            de !== -1 && (P[de] = O.key), $({ action: M, location: O });
          }
        else window.location.replace(Y);
      }
    });
  }
  function D(S) {
    t.go(S);
  }
  function L() {
    D(-1);
  }
  function ue() {
    D(1);
  }
  var Ce = 0;
  function ce(S) {
    (Ce += S),
      Ce === 1 && S === 1
        ? (window.addEventListener(Ad, A), r && window.addEventListener(Md, h))
        : Ce === 0 && (window.removeEventListener(Ad, A), r && window.removeEventListener(Md, h));
  }
  var re = !1;
  function Q(S) {
    S === void 0 && (S = !1);
    var k = y.setPrompt(S);
    return (
      re || (ce(1), (re = !0)),
      function () {
        return re && ((re = !1), ce(-1)), k();
      }
    );
  }
  function ie(S) {
    var k = y.appendListener(S);
    return (
      ce(1),
      function () {
        ce(-1), k();
      }
    );
  }
  var _ = {
    length: t.length,
    action: 'POP',
    location: T,
    createHref: x,
    push: C,
    replace: z,
    go: D,
    goBack: L,
    goForward: ue,
    block: Q,
    listen: ie,
  };
  return _;
}
var Dd = 'hashchange',
  X0 = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === '!' ? t : '!/' + Od(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === '!' ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Od, decodePath: io },
    slash: { encodePath: io, decodePath: io },
  };
function sm(e) {
  var t = e.indexOf('#');
  return t === -1 ? e : e.slice(0, t);
}
function Vr() {
  var e = window.location.href,
    t = e.indexOf('#');
  return t === -1 ? '' : e.substring(t + 1);
}
function Z0(e) {
  window.location.hash = e;
}
function Pl(e) {
  window.location.replace(sm(window.location.href) + '#' + e);
}
function J0(e) {
  e === void 0 && (e = {}), om || Un(!1);
  var t = window.history;
  Y0();
  var n = e,
    r = n.getUserConfirmation,
    o = r === void 0 ? im : r,
    i = n.hashType,
    s = i === void 0 ? 'slash' : i,
    l = e.basename ? rm(io(e.basename)) : '',
    a = X0[s],
    u = a.encodePath,
    c = a.decodePath;
  function d() {
    var k = c(Vr());
    return l && (k = nm(k, l)), He(k);
  }
  var f = Bu();
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
      M = u(k);
    if (k !== M) Pl(M);
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
    var Y = O - B;
    Y && ((y = !0), L(Y));
  }
  var b = Vr(),
    T = u(b);
  b !== T && Pl(T);
  var P = d(),
    x = [it(P)];
  function C(k) {
    var M = document.querySelector('base'),
      O = '';
    return M && M.getAttribute('href') && (O = sm(window.location.href)), O + '#' + u(l + it(k));
  }
  function z(k, M) {
    var O = 'PUSH',
      B = He(k, void 0, void 0, S.location);
    f.confirmTransitionTo(B, O, o, function (Y) {
      if (Y) {
        var U = it(B),
          se = u(l + U),
          de = Vr() !== se;
        if (de) {
          ($ = U), Z0(se);
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
    f.confirmTransitionTo(B, O, o, function (Y) {
      if (Y) {
        var U = it(B),
          se = u(l + U),
          de = Vr() !== se;
        de && (($ = U), Pl(se));
        var Nt = x.indexOf(it(S.location));
        Nt !== -1 && (x[Nt] = U), g({ action: O, location: B });
      }
    });
  }
  function L(k) {
    t.go(k);
  }
  function ue() {
    L(-1);
  }
  function Ce() {
    L(1);
  }
  var ce = 0;
  function re(k) {
    (ce += k), ce === 1 && k === 1 ? window.addEventListener(Dd, h) : ce === 0 && window.removeEventListener(Dd, h);
  }
  var Q = !1;
  function ie(k) {
    k === void 0 && (k = !1);
    var M = f.setPrompt(k);
    return (
      Q || (re(1), (Q = !0)),
      function () {
        return Q && ((Q = !1), re(-1)), M();
      }
    );
  }
  function _(k) {
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
    goBack: ue,
    goForward: Ce,
    block: ie,
    listen: _,
  };
  return S;
}
function zd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function e1(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    r = t.initialEntries,
    o = r === void 0 ? ['/'] : r,
    i = t.initialIndex,
    s = i === void 0 ? 0 : i,
    l = t.keyLength,
    a = l === void 0 ? 6 : l,
    u = Bu();
  function c(C) {
    Ve(x, C), (x.length = x.entries.length), u.notifyListeners(x.location, x.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, a);
  }
  var f = zd(s, 0, o.length - 1),
    g = o.map(function (C) {
      return typeof C == 'string' ? He(C, void 0, d()) : He(C, void 0, C.key || d());
    }),
    y = it;
  function $(C, z) {
    var D = 'PUSH',
      L = He(C, z, d(), x.location);
    u.confirmTransitionTo(L, D, n, function (ue) {
      if (ue) {
        var Ce = x.index,
          ce = Ce + 1,
          re = x.entries.slice(0);
        re.length > ce ? re.splice(ce, re.length - ce, L) : re.push(L),
          c({ action: D, location: L, index: ce, entries: re });
      }
    });
  }
  function A(C, z) {
    var D = 'REPLACE',
      L = He(C, z, d(), x.location);
    u.confirmTransitionTo(L, D, n, function (ue) {
      ue && ((x.entries[x.index] = L), c({ action: D, location: L }));
    });
  }
  function h(C) {
    var z = zd(x.index + C, 0, x.entries.length - 1),
      D = 'POP',
      L = x.entries[z];
    u.confirmTransitionTo(L, D, n, function (ue) {
      ue ? c({ action: D, location: L, index: z }) : c();
    });
  }
  function p() {
    h(-1);
  }
  function m() {
    h(1);
  }
  function b(C) {
    var z = x.index + C;
    return z >= 0 && z < x.entries.length;
  }
  function T(C) {
    return C === void 0 && (C = !1), u.setPrompt(C);
  }
  function P(C) {
    return u.appendListener(C);
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
    canGo: b,
    block: T,
    listen: P,
  };
  return x;
}
var vn = {},
  t1 = {
    get exports() {
      return vn;
    },
    set exports(e) {
      vn = e;
    },
  },
  n1 =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == '[object Array]';
    },
  Xi = n1;
t1.exports = um;
vn.parse = Hu;
vn.compile = o1;
vn.tokensToFunction = lm;
vn.tokensToRegExp = am;
var r1 = new RegExp(
  [
    '(\\\\.)',
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
  ].join('|'),
  'g'
);
function Hu(e, t) {
  for (var n = [], r = 0, o = 0, i = '', s = (t && t.delimiter) || '/', l; (l = r1.exec(e)) != null; ) {
    var a = l[0],
      u = l[1],
      c = l.index;
    if (((i += e.slice(o, c)), (o = c + a.length), u)) {
      i += u[1];
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
      b = A === '?' || A === '*',
      T = l[2] || s,
      P = y || $;
    n.push({
      name: g || r++,
      prefix: f || '',
      delimiter: T,
      optional: b,
      repeat: m,
      partial: p,
      asterisk: !!h,
      pattern: P ? l1(P) : h ? '.*' : '[^' + Ei(T) + ']+?',
    });
  }
  return o < e.length && (i += e.substr(o)), i && n.push(i), n;
}
function o1(e, t) {
  return lm(Hu(e, t), t);
}
function i1(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return '%' + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function s1(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return '%' + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function lm(e, t) {
  for (var n = new Array(e.length), r = 0; r < e.length; r++)
    typeof e[r] == 'object' && (n[r] = new RegExp('^(?:' + e[r].pattern + ')$', Fu(t)));
  return function (o, i) {
    for (var s = '', l = o || {}, a = i || {}, u = a.pretty ? i1 : encodeURIComponent, c = 0; c < e.length; c++) {
      var d = e[c];
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
      if (Xi(f)) {
        if (!d.repeat)
          throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(f) + '`');
        if (f.length === 0) {
          if (d.optional) continue;
          throw new TypeError('Expected "' + d.name + '" to not be empty');
        }
        for (var y = 0; y < f.length; y++) {
          if (((g = u(f[y])), !n[c].test(g)))
            throw new TypeError(
              'Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(g) + '`'
            );
          s += (y === 0 ? d.prefix : d.delimiter) + g;
        }
        continue;
      }
      if (((g = d.asterisk ? s1(f) : u(f)), !n[c].test(g)))
        throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + g + '"');
      s += d.prefix + g;
    }
    return s;
  };
}
function Ei(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function l1(e) {
  return e.replace(/([=!:$\/()])/g, '\\$1');
}
function ju(e, t) {
  return (e.keys = t), e;
}
function Fu(e) {
  return e && e.sensitive ? '' : 'i';
}
function a1(e, t) {
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
  return ju(e, t);
}
function u1(e, t, n) {
  for (var r = [], o = 0; o < e.length; o++) r.push(um(e[o], t, n).source);
  var i = new RegExp('(?:' + r.join('|') + ')', Fu(n));
  return ju(i, t);
}
function c1(e, t, n) {
  return am(Hu(e, n), t, n);
}
function am(e, t, n) {
  Xi(t) || ((n = t || n), (t = [])), (n = n || {});
  for (var r = n.strict, o = n.end !== !1, i = '', s = 0; s < e.length; s++) {
    var l = e[s];
    if (typeof l == 'string') i += Ei(l);
    else {
      var a = Ei(l.prefix),
        u = '(?:' + l.pattern + ')';
      t.push(l),
        l.repeat && (u += '(?:' + a + u + ')*'),
        l.optional
          ? l.partial
            ? (u = a + '(' + u + ')?')
            : (u = '(?:' + a + '(' + u + '))?')
          : (u = a + '(' + u + ')'),
        (i += u);
    }
  }
  var c = Ei(n.delimiter || '/'),
    d = i.slice(-c.length) === c;
  return (
    r || (i = (d ? i.slice(0, -c.length) : i) + '(?:' + c + '(?=$))?'),
    o ? (i += '$') : (i += r && d ? '' : '(?=' + c + '|$)'),
    ju(new RegExp('^' + i, Fu(n)), t)
  );
}
function um(e, t, n) {
  return (
    Xi(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp ? a1(e, t) : Xi(e) ? u1(e, t, n) : c1(e, t, n)
  );
}
var Bd = {},
  d1 = {
    get exports() {
      return Bd;
    },
    set exports(e) {
      Bd = e;
    },
  },
  W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ye = typeof Symbol == 'function' && Symbol.for,
  Uu = ye ? Symbol.for('react.element') : 60103,
  Vu = ye ? Symbol.for('react.portal') : 60106,
  Cs = ye ? Symbol.for('react.fragment') : 60107,
  Ts = ye ? Symbol.for('react.strict_mode') : 60108,
  Ps = ye ? Symbol.for('react.profiler') : 60114,
  _s = ye ? Symbol.for('react.provider') : 60109,
  Rs = ye ? Symbol.for('react.context') : 60110,
  Wu = ye ? Symbol.for('react.async_mode') : 60111,
  Ls = ye ? Symbol.for('react.concurrent_mode') : 60111,
  Is = ye ? Symbol.for('react.forward_ref') : 60112,
  Os = ye ? Symbol.for('react.suspense') : 60113,
  f1 = ye ? Symbol.for('react.suspense_list') : 60120,
  As = ye ? Symbol.for('react.memo') : 60115,
  Ms = ye ? Symbol.for('react.lazy') : 60116,
  p1 = ye ? Symbol.for('react.block') : 60121,
  h1 = ye ? Symbol.for('react.fundamental') : 60117,
  m1 = ye ? Symbol.for('react.responder') : 60118,
  g1 = ye ? Symbol.for('react.scope') : 60119;
function tt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Uu:
        switch (((e = e.type), e)) {
          case Wu:
          case Ls:
          case Cs:
          case Ps:
          case Ts:
          case Os:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Rs:
              case Is:
              case Ms:
              case As:
              case _s:
                return e;
              default:
                return t;
            }
        }
      case Vu:
        return t;
    }
  }
}
function cm(e) {
  return tt(e) === Ls;
}
W.AsyncMode = Wu;
W.ConcurrentMode = Ls;
W.ContextConsumer = Rs;
W.ContextProvider = _s;
W.Element = Uu;
W.ForwardRef = Is;
W.Fragment = Cs;
W.Lazy = Ms;
W.Memo = As;
W.Portal = Vu;
W.Profiler = Ps;
W.StrictMode = Ts;
W.Suspense = Os;
W.isAsyncMode = function (e) {
  return cm(e) || tt(e) === Wu;
};
W.isConcurrentMode = cm;
W.isContextConsumer = function (e) {
  return tt(e) === Rs;
};
W.isContextProvider = function (e) {
  return tt(e) === _s;
};
W.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Uu;
};
W.isForwardRef = function (e) {
  return tt(e) === Is;
};
W.isFragment = function (e) {
  return tt(e) === Cs;
};
W.isLazy = function (e) {
  return tt(e) === Ms;
};
W.isMemo = function (e) {
  return tt(e) === As;
};
W.isPortal = function (e) {
  return tt(e) === Vu;
};
W.isProfiler = function (e) {
  return tt(e) === Ps;
};
W.isStrictMode = function (e) {
  return tt(e) === Ts;
};
W.isSuspense = function (e) {
  return tt(e) === Os;
};
W.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Cs ||
    e === Ls ||
    e === Ps ||
    e === Ts ||
    e === Os ||
    e === f1 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ms ||
        e.$$typeof === As ||
        e.$$typeof === _s ||
        e.$$typeof === Rs ||
        e.$$typeof === Is ||
        e.$$typeof === h1 ||
        e.$$typeof === m1 ||
        e.$$typeof === g1 ||
        e.$$typeof === p1))
  );
};
W.typeOf = tt;
(function (e) {
  e.exports = W;
})(d1);
function dm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Oa = {},
  v1 = {
    get exports() {
      return Oa;
    },
    set exports(e) {
      Oa = e;
    },
  },
  K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
  Ku = we ? Symbol.for('react.element') : 60103,
  Qu = we ? Symbol.for('react.portal') : 60106,
  Ns = we ? Symbol.for('react.fragment') : 60107,
  Ds = we ? Symbol.for('react.strict_mode') : 60108,
  zs = we ? Symbol.for('react.profiler') : 60114,
  Bs = we ? Symbol.for('react.provider') : 60109,
  Hs = we ? Symbol.for('react.context') : 60110,
  Yu = we ? Symbol.for('react.async_mode') : 60111,
  js = we ? Symbol.for('react.concurrent_mode') : 60111,
  Fs = we ? Symbol.for('react.forward_ref') : 60112,
  Us = we ? Symbol.for('react.suspense') : 60113,
  y1 = we ? Symbol.for('react.suspense_list') : 60120,
  Vs = we ? Symbol.for('react.memo') : 60115,
  Ws = we ? Symbol.for('react.lazy') : 60116,
  w1 = we ? Symbol.for('react.block') : 60121,
  b1 = we ? Symbol.for('react.fundamental') : 60117,
  $1 = we ? Symbol.for('react.responder') : 60118,
  x1 = we ? Symbol.for('react.scope') : 60119;
function nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ku:
        switch (((e = e.type), e)) {
          case Yu:
          case js:
          case Ns:
          case zs:
          case Ds:
          case Us:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hs:
              case Fs:
              case Ws:
              case Vs:
              case Bs:
                return e;
              default:
                return t;
            }
        }
      case Qu:
        return t;
    }
  }
}
function fm(e) {
  return nt(e) === js;
}
K.AsyncMode = Yu;
K.ConcurrentMode = js;
K.ContextConsumer = Hs;
K.ContextProvider = Bs;
K.Element = Ku;
K.ForwardRef = Fs;
K.Fragment = Ns;
K.Lazy = Ws;
K.Memo = Vs;
K.Portal = Qu;
K.Profiler = zs;
K.StrictMode = Ds;
K.Suspense = Us;
K.isAsyncMode = function (e) {
  return fm(e) || nt(e) === Yu;
};
K.isConcurrentMode = fm;
K.isContextConsumer = function (e) {
  return nt(e) === Hs;
};
K.isContextProvider = function (e) {
  return nt(e) === Bs;
};
K.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ku;
};
K.isForwardRef = function (e) {
  return nt(e) === Fs;
};
K.isFragment = function (e) {
  return nt(e) === Ns;
};
K.isLazy = function (e) {
  return nt(e) === Ws;
};
K.isMemo = function (e) {
  return nt(e) === Vs;
};
K.isPortal = function (e) {
  return nt(e) === Qu;
};
K.isProfiler = function (e) {
  return nt(e) === zs;
};
K.isStrictMode = function (e) {
  return nt(e) === Ds;
};
K.isSuspense = function (e) {
  return nt(e) === Us;
};
K.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ns ||
    e === js ||
    e === zs ||
    e === Ds ||
    e === Us ||
    e === y1 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ws ||
        e.$$typeof === Vs ||
        e.$$typeof === Bs ||
        e.$$typeof === Hs ||
        e.$$typeof === Fs ||
        e.$$typeof === b1 ||
        e.$$typeof === $1 ||
        e.$$typeof === x1 ||
        e.$$typeof === w1))
  );
};
K.typeOf = nt;
(function (e) {
  e.exports = K;
})(v1);
var qu = Oa,
  k1 = {
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
  E1 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  S1 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  pm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Gu = {};
Gu[qu.ForwardRef] = S1;
Gu[qu.Memo] = pm;
function Hd(e) {
  return qu.isMemo(e) ? pm : Gu[e.$$typeof] || k1;
}
var C1 = Object.defineProperty,
  T1 = Object.getOwnPropertyNames,
  jd = Object.getOwnPropertySymbols,
  P1 = Object.getOwnPropertyDescriptor,
  _1 = Object.getPrototypeOf,
  Fd = Object.prototype;
function hm(e, t, n) {
  if (typeof t != 'string') {
    if (Fd) {
      var r = _1(t);
      r && r !== Fd && hm(e, r, n);
    }
    var o = T1(t);
    jd && (o = o.concat(jd(t)));
    for (var i = Hd(e), s = Hd(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!E1[a] && !(n && n[a]) && !(s && s[a]) && !(i && i[a])) {
        var u = P1(t, a);
        try {
          C1(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
var R1 = hm;
const L1 = R1;
var _l = 1073741823,
  Ud = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : {};
function I1() {
  var e = '__global_unique_id__';
  return (Ud[e] = (Ud[e] || 0) + 1);
}
function O1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function A1(e) {
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
function M1(e) {
  return Array.isArray(e) ? e[0] : e;
}
function N1(e, t) {
  var n,
    r,
    o = '__create-react-context-' + I1() + '__',
    i = (function (l) {
      gn(a, l);
      function a() {
        for (var c, d = arguments.length, f = new Array(d), g = 0; g < d; g++) f[g] = arguments[g];
        return (c = l.call.apply(l, [this].concat(f)) || this), (c.emitter = A1(c.props.value)), c;
      }
      var u = a.prototype;
      return (
        (u.getChildContext = function () {
          var d;
          return (d = {}), (d[o] = this.emitter), d;
        }),
        (u.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var f = this.props.value,
              g = d.value,
              y;
            O1(f, g)
              ? (y = 0)
              : ((y = typeof t == 'function' ? t(f, g) : _l), (y |= 0), y !== 0 && this.emitter.set(d.value, y));
          }
        }),
        (u.render = function () {
          return this.props.children;
        }),
        a
      );
    })(w.Component);
  i.childContextTypes = ((n = {}), (n[o] = Gi.object.isRequired), n);
  var s = (function (l) {
    gn(a, l);
    function a() {
      for (var c, d = arguments.length, f = new Array(d), g = 0; g < d; g++) f[g] = arguments[g];
      return (
        (c = l.call.apply(l, [this].concat(f)) || this),
        (c.observedBits = void 0),
        (c.state = { value: c.getValue() }),
        (c.onUpdate = function (y, $) {
          var A = c.observedBits | 0;
          A & $ && c.setState({ value: c.getValue() });
        }),
        c
      );
    }
    var u = a.prototype;
    return (
      (u.componentWillReceiveProps = function (d) {
        var f = d.observedBits;
        this.observedBits = f ?? _l;
      }),
      (u.componentDidMount = function () {
        this.context[o] && this.context[o].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d ?? _l;
      }),
      (u.componentWillUnmount = function () {
        this.context[o] && this.context[o].off(this.onUpdate);
      }),
      (u.getValue = function () {
        return this.context[o] ? this.context[o].get() : e;
      }),
      (u.render = function () {
        return M1(this.props.children)(this.state.value);
      }),
      a
    );
  })(w.Component);
  return (s.contextTypes = ((r = {}), (r[o] = Gi.object), r)), { Provider: i, Consumer: s };
}
var D1 = w.createContext || N1,
  mm = function (t) {
    var n = D1();
    return (n.displayName = t), n;
  },
  z1 = mm('Router-History'),
  Pr = mm('Router'),
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
        return w.createElement(
          Pr.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          w.createElement(z1.Provider, { children: this.props.children || null, value: this.props.history })
        );
      }),
      t
    );
  })(w.Component);
w.Component;
var B1 = (function (e) {
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
  })(w.Component),
  Rl = {},
  H1 = 1e4,
  Vd = 0;
function j1(e) {
  if (Rl[e]) return Rl[e];
  var t = vn.compile(e);
  return Vd < H1 && ((Rl[e] = t), Vd++), t;
}
function Wd(e, t) {
  return e === void 0 && (e = '/'), t === void 0 && (t = {}), e === '/' ? e : j1(e)(t, { pretty: !0 });
}
function F1(e) {
  var t = e.computedMatch,
    n = e.to,
    r = e.push,
    o = r === void 0 ? !1 : r;
  return w.createElement(Pr.Consumer, null, function (i) {
    i || Un(!1);
    var s = i.history,
      l = i.staticContext,
      a = o ? s.push : s.replace,
      u = He(t ? (typeof n == 'string' ? Wd(n, t.params) : Ve({}, n, { pathname: Wd(n.pathname, t.params) })) : n);
    return l
      ? (a(u), null)
      : w.createElement(B1, {
          onMount: function () {
            a(u);
          },
          onUpdate: function (d, f) {
            var g = He(f.to);
            W0(g, Ve({}, u, { key: g.key })) || a(u);
          },
          to: n,
        });
  });
}
var Kd = {},
  U1 = 1e4,
  Qd = 0;
function V1(e, t) {
  var n = '' + t.end + t.strict + t.sensitive,
    r = Kd[n] || (Kd[n] = {});
  if (r[e]) return r[e];
  var o = [],
    i = vn(e, o, t),
    s = { regexp: i, keys: o };
  return Qd < U1 && ((r[e] = s), Qd++), s;
}
function Dn(e, t) {
  t === void 0 && (t = {}), (typeof t == 'string' || Array.isArray(t)) && (t = { path: t });
  var n = t,
    r = n.path,
    o = n.exact,
    i = o === void 0 ? !1 : o,
    s = n.strict,
    l = s === void 0 ? !1 : s,
    a = n.sensitive,
    u = a === void 0 ? !1 : a,
    c = [].concat(r);
  return c.reduce(function (d, f) {
    if (!f && f !== '') return null;
    if (d) return d;
    var g = V1(f, { end: i, strict: l, sensitive: u }),
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
          params: $.reduce(function (b, T, P) {
            return (b[T.name] = p[P]), b;
          }, {}),
        };
  }, null);
}
function W1(e) {
  return w.Children.count(e) === 0;
}
var Aa = (function (e) {
  gn(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var o = this;
      return w.createElement(Pr.Consumer, null, function (i) {
        i || Un(!1);
        var s = o.props.location || i.location,
          l = o.props.computedMatch ? o.props.computedMatch : o.props.path ? Dn(s.pathname, o.props) : i.match,
          a = Ve({}, i, { location: s, match: l }),
          u = o.props,
          c = u.children,
          d = u.component,
          f = u.render;
        return (
          Array.isArray(c) && W1(c) && (c = null),
          w.createElement(
            Pr.Provider,
            { value: a },
            a.match
              ? c
                ? typeof c == 'function'
                  ? c(a)
                  : c
                : d
                ? w.createElement(d, a)
                : f
                ? f(a)
                : null
              : typeof c == 'function'
              ? c(a)
              : null
          )
        );
      });
    }),
    t
  );
})(w.Component);
function Xu(e) {
  return e.charAt(0) === '/' ? e : '/' + e;
}
function K1(e, t) {
  return e ? Ve({}, t, { pathname: Xu(e) + t.pathname }) : t;
}
function Q1(e, t) {
  if (!e) return t;
  var n = Xu(e);
  return t.pathname.indexOf(n) !== 0 ? t : Ve({}, t, { pathname: t.pathname.substr(n.length) });
}
function Yd(e) {
  return typeof e == 'string' ? e : it(e);
}
function Ll(e) {
  return function () {
    Un(!1);
  };
}
function qd() {}
w.Component;
w.Component;
function Y1(e) {
  var t = 'withRouter(' + (e.displayName || e.name) + ')',
    n = function (o) {
      var i = o.wrappedComponentRef,
        s = dm(o, ['wrappedComponentRef']);
      return w.createElement(Pr.Consumer, null, function (l) {
        return l || Un(!1), w.createElement(e, Ve({}, s, l, { ref: i }));
      });
    };
  return (n.displayName = t), (n.WrappedComponent = e), L1(n, e);
}
w.useContext;
const q1 = 'modulepreload',
  G1 = function (e) {
    return '/' + e;
  },
  Gd = {},
  _t = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((i) => {
        if (((i = G1(i)), i in Gd)) return;
        Gd[i] = !0;
        const s = i.endsWith('.css'),
          l = s ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let c = o.length - 1; c >= 0; c--) {
            const d = o[c];
            if (d.href === i && (!s || d.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const u = document.createElement('link');
        if (
          ((u.rel = s ? 'stylesheet' : q1),
          s || ((u.as = 'script'), (u.crossOrigin = '')),
          (u.href = i),
          document.head.appendChild(u),
          s)
        )
          return new Promise((c, d) => {
            u.addEventListener('load', c),
              u.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    ).then(() => t());
  },
  Yn = {
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
let qn,
  gm,
  Ks,
  vm = !1,
  Zi = !1,
  Zu = !1,
  Qe = !1,
  Xd = null,
  Ma = !1;
const X1 = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
  zn =
    (e, t = '') =>
    () => {},
  Zd = 'http://www.w3.org/1999/xlink',
  Jd = {},
  Z1 = 'http://www.w3.org/2000/svg',
  J1 = 'http://www.w3.org/1999/xhtml',
  ew = (e) => e != null,
  Ju = (e) => ((e = typeof e), e === 'object' || e === 'function');
function tw(e) {
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
      u = (d) => {
        for (let f = 0; f < d.length; f++)
          (r = d[f]),
            Array.isArray(r)
              ? u(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((s = typeof e != 'function' && !Ju(r)) && (r = String(r)),
                s && l ? (a[a.length - 1].$text$ += r) : a.push(s ? Ji(null, r) : r),
                (l = s));
      };
    if ((u(n), t)) {
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
    if (typeof e == 'function') return e(t === null ? {} : t, a, rw);
    const c = Ji(e, null);
    return (c.$attrs$ = t), a.length > 0 && (c.$children$ = a), (c.$key$ = o), (c.$name$ = i), c;
  },
  Ji = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  qt = {},
  nw = (e) => e && e.$tag$ === qt,
  rw = { forEach: (e, t) => e.map(ef).forEach(t), map: (e, t) => e.map(ef).map(t).map(ow) },
  ef = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  ow = (e) => {
    if (typeof e.vtag == 'function') {
      const n = Object.assign({}, e.vattrs);
      return e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), H(e.vtag, n, ...(e.vchildren || []));
    }
    const t = Ji(e.vtag, e.vtext);
    return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
  },
  iw = (e) => Pm.map((t) => t(e)).find((t) => !!t),
  sw = (e) => Pm.push(e),
  lw = (e) => Ir(e).$modeName$,
  aw = (e, t) =>
    e != null && !Ju(e)
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
  uw = (e) => e,
  ct = (e, t, n) => {
    const r = uw(e);
    return { emit: (o) => cw(r, t, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: o }) };
  },
  cw = (e, t, n) => {
    const r = Se.ce(t, n);
    return e.dispatchEvent(r), r;
  },
  tf = new WeakMap(),
  dw = (e, t, n) => {
    let r = ts.get(e);
    Dw && n ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t)) : (r = t),
      ts.set(e, r);
  },
  fw = (e, t, n, r) => {
    var o;
    let i = ym(t, n);
    const s = ts.get(i);
    if (((e = e.nodeType === 11 ? e : Et), s))
      if (typeof s == 'string') {
        e = e.head || e;
        let l = tf.get(e),
          a;
        if ((l || tf.set(e, (l = new Set())), !l.has(i))) {
          {
            (a = Et.createElement('style')), (a.innerHTML = s);
            const u = (o = Se.$nonce$) !== null && o !== void 0 ? o : tw(Et);
            u != null && a.setAttribute('nonce', u), e.insertBefore(a, e.querySelector('link'));
          }
          l && l.add(i);
        }
      } else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return i;
  },
  pw = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      o = zn('attachStyles', t.$tagName$),
      i = fw(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    r & 10 && ((n['s-sc'] = i), n.classList.add(i + '-h'), r & 2 && n.classList.add(i + '-s')), o();
  },
  ym = (e, t) => 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
  nf = (e, t, n, r, o, i) => {
    if (n !== r) {
      let s = lf(e, t),
        l = t.toLowerCase();
      if (t === 'class') {
        const a = e.classList,
          u = rf(n),
          c = rf(r);
        a.remove(...u.filter((d) => d && !c.includes(d))), a.add(...c.filter((d) => d && !u.includes(d)));
      } else if (t === 'style') {
        for (const a in n) (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
        for (const a in r)
          (!n || r[a] !== n[a]) && (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
      } else if (t !== 'key')
        if (t === 'ref') r && r(e);
        else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
          t[2] === '-' ? (t = t.slice(3)) : lf(Qs, l) ? (t = l.slice(2)) : (t = l[2] + t.slice(3)),
            n && Se.rel(e, t, n, !1),
            r && Se.ael(e, t, r, !1);
        else {
          const a = Ju(r);
          if ((s || (a && r !== null)) && !o)
            try {
              if (e.tagName.includes('-')) e[t] = r;
              else {
                const c = r ?? '';
                t === 'list' ? (s = !1) : (n == null || e[t] != c) && (e[t] = c);
              }
            } catch {}
          let u = !1;
          l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (u = !0)),
            r == null || r === !1
              ? (r !== !1 || e.getAttribute(t) === '') && (u ? e.removeAttributeNS(Zd, t) : e.removeAttribute(t))
              : (!s || i & 4 || o) &&
                !a &&
                ((r = r === !0 ? '' : r), u ? e.setAttributeNS(Zd, t, r) : e.setAttribute(t, r));
        }
    }
  },
  hw = /\s/,
  rf = (e) => (e ? e.split(hw) : []),
  wm = (e, t, n, r) => {
    const o = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || Jd,
      s = t.$attrs$ || Jd;
    for (r in i) r in s || nf(o, r, i[r], void 0, n, t.$flags$);
    for (r in s) nf(o, r, i[r], s[r], n, t.$flags$);
  },
  es = (e, t, n, r) => {
    const o = t.$children$[n];
    let i = 0,
      s,
      l,
      a;
    if (
      (vm || ((Zu = !0), o.$tag$ === 'slot' && (qn && r.classList.add(qn + '-s'), (o.$flags$ |= o.$children$ ? 2 : 1))),
      o.$text$ !== null)
    )
      s = o.$elm$ = Et.createTextNode(o.$text$);
    else if (o.$flags$ & 1) s = o.$elm$ = Et.createTextNode('');
    else {
      if (
        (Qe || (Qe = o.$tag$ === 'svg'),
        (s = o.$elm$ = Et.createElementNS(Qe ? Z1 : J1, o.$flags$ & 2 ? 'slot-fb' : o.$tag$)),
        Qe && o.$tag$ === 'foreignObject' && (Qe = !1),
        wm(null, o, Qe),
        ew(qn) && s['s-si'] !== qn && s.classList.add((s['s-si'] = qn)),
        o.$children$)
      )
        for (i = 0; i < o.$children$.length; ++i) (l = es(e, o, i, s)), l && s.appendChild(l);
      o.$tag$ === 'svg' ? (Qe = !1) : s.tagName === 'foreignObject' && (Qe = !0);
    }
    return (
      (s['s-hn'] = Ks),
      o.$flags$ & 3 &&
        ((s['s-sr'] = !0),
        (s['s-cr'] = gm),
        (s['s-sn'] = o.$name$ || ''),
        (a = e && e.$children$ && e.$children$[n]),
        a && a.$tag$ === o.$tag$ && e.$elm$ && To(e.$elm$, !1)),
      s
    );
  },
  To = (e, t) => {
    Se.$flags$ |= 1;
    const n = e.childNodes;
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r];
      o['s-hn'] !== Ks &&
        o['s-ol'] &&
        (xm(o).insertBefore(o, ec(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (Zu = !0)),
        t && To(o, t);
    }
    Se.$flags$ &= -2;
  },
  bm = (e, t, n, r, o, i) => {
    let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
      l;
    for (s.shadowRoot && s.tagName === Ks && (s = s.shadowRoot); o <= i; ++o)
      r[o] && ((l = es(null, n, o, e)), l && ((r[o].$elm$ = l), s.insertBefore(l, ec(t))));
  },
  $m = (e, t, n, r, o) => {
    for (; t <= n; ++t)
      (r = e[t]) && ((o = r.$elm$), Sm(r), (Zi = !0), o['s-ol'] ? o['s-ol'].remove() : To(o, !0), o.remove());
  },
  mw = (e, t, n, r) => {
    let o = 0,
      i = 0,
      s = 0,
      l = 0,
      a = t.length - 1,
      u = t[0],
      c = t[a],
      d = r.length - 1,
      f = r[0],
      g = r[d],
      y,
      $;
    for (; o <= a && i <= d; )
      if (u == null) u = t[++o];
      else if (c == null) c = t[--a];
      else if (f == null) f = r[++i];
      else if (g == null) g = r[--d];
      else if (li(u, f)) Gn(u, f), (u = t[++o]), (f = r[++i]);
      else if (li(c, g)) Gn(c, g), (c = t[--a]), (g = r[--d]);
      else if (li(u, g))
        (u.$tag$ === 'slot' || g.$tag$ === 'slot') && To(u.$elm$.parentNode, !1),
          Gn(u, g),
          e.insertBefore(u.$elm$, c.$elm$.nextSibling),
          (u = t[++o]),
          (g = r[--d]);
      else if (li(c, f))
        (u.$tag$ === 'slot' || g.$tag$ === 'slot') && To(c.$elm$.parentNode, !1),
          Gn(c, f),
          e.insertBefore(c.$elm$, u.$elm$),
          (c = t[--a]),
          (f = r[++i]);
      else {
        for (s = -1, l = o; l <= a; ++l)
          if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
            s = l;
            break;
          }
        s >= 0
          ? (($ = t[s]),
            $.$tag$ !== f.$tag$ ? (y = es(t && t[i], n, s, e)) : (Gn($, f), (t[s] = void 0), (y = $.$elm$)),
            (f = r[++i]))
          : ((y = es(t && t[i], n, i, e)), (f = r[++i])),
          y && xm(u.$elm$).insertBefore(y, ec(u.$elm$));
      }
    o > a ? bm(e, r[d + 1] == null ? null : r[d + 1].$elm$, n, r, i, d) : i > d && $m(t, o, a);
  },
  li = (e, t) => (e.$tag$ === t.$tag$ ? (e.$tag$ === 'slot' ? e.$name$ === t.$name$ : e.$key$ === t.$key$) : !1),
  ec = (e) => (e && e['s-ol']) || e,
  xm = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  Gn = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      r = e.$children$,
      o = t.$children$,
      i = t.$tag$,
      s = t.$text$;
    let l;
    s === null
      ? ((Qe = i === 'svg' ? !0 : i === 'foreignObject' ? !1 : Qe),
        i === 'slot' || wm(e, t, Qe),
        r !== null && o !== null
          ? mw(n, r, t, o)
          : o !== null
          ? (e.$text$ !== null && (n.textContent = ''), bm(n, null, t, o, 0, o.length - 1))
          : r !== null && $m(r, 0, r.length - 1),
        Qe && i === 'svg' && (Qe = !1))
      : (l = n['s-cr'])
      ? (l.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  km = (e) => {
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
        km(n);
      }
  },
  wt = [],
  Em = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = 0;
    const a = e.childNodes,
      u = a.length;
    for (; l < u; l++) {
      if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
        for (r = n.parentNode.childNodes, o = t['s-sn'], s = r.length - 1; s >= 0; s--)
          (n = r[s]),
            !n['s-cn'] &&
              !n['s-nr'] &&
              n['s-hn'] !== t['s-hn'] &&
              (of(n, o)
                ? ((i = wt.find((c) => c.$nodeToRelocate$ === n)),
                  (Zi = !0),
                  (n['s-sn'] = n['s-sn'] || o),
                  i ? (i.$slotRefNode$ = t) : wt.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n['s-sr'] &&
                    wt.map((c) => {
                      of(c.$nodeToRelocate$, n['s-sn']) &&
                        ((i = wt.find((d) => d.$nodeToRelocate$ === n)),
                        i && !c.$slotRefNode$ && (c.$slotRefNode$ = i.$slotRefNode$));
                    }))
                : wt.some((c) => c.$nodeToRelocate$ === n) || wt.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && Em(t);
    }
  },
  of = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute('slot') === null && t === '') || e.getAttribute('slot') === t
      : e['s-sn'] === t
      ? !0
      : t === '',
  Sm = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(Sm);
  },
  gw = (e, t) => {
    const n = e.$hostElement$,
      r = e.$cmpMeta$,
      o = e.$vnode$ || Ji(null, null),
      i = nw(t) ? t : H(null, null, t);
    (Ks = n.tagName),
      r.$attrsToReflect$ && ((i.$attrs$ = i.$attrs$ || {}), r.$attrsToReflect$.map(([s, l]) => (i.$attrs$[l] = n[s]))),
      (i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = o.$elm$ = n.shadowRoot || n),
      (qn = n['s-sc']),
      (gm = n['s-cr']),
      (vm = (r.$flags$ & 1) !== 0),
      (Zi = !1),
      Gn(o, i);
    {
      if (((Se.$flags$ |= 1), Zu)) {
        Em(i.$elm$);
        let s,
          l,
          a,
          u,
          c,
          d,
          f = 0;
        for (; f < wt.length; f++)
          (s = wt[f]),
            (l = s.$nodeToRelocate$),
            l['s-ol'] || ((a = Et.createTextNode('')), (a['s-nr'] = l), l.parentNode.insertBefore((l['s-ol'] = a), l));
        for (f = 0; f < wt.length; f++)
          if (((s = wt[f]), (l = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              u = s.$slotRefNode$.parentNode, c = s.$slotRefNode$.nextSibling, a = l['s-ol'];
              (a = a.previousSibling);

            )
              if (
                ((d = a['s-nr']),
                d && d['s-sn'] === l['s-sn'] && u === d.parentNode && ((d = d.nextSibling), !d || !d['s-nr']))
              ) {
                c = d;
                break;
              }
            ((!c && u !== l.parentNode) || l.nextSibling !== c) &&
              l !== c &&
              (!l['s-hn'] && l['s-ol'] && (l['s-hn'] = l['s-ol'].parentNode.nodeName), u.insertBefore(l, c));
          } else l.nodeType === 1 && (l.hidden = !0);
      }
      Zi && km(i.$elm$), (Se.$flags$ &= -2), (wt.length = 0);
    }
  },
  vw = (e, t) => {},
  tc = (e, t) => ((e.$flags$ |= 16), vw(e, e.$ancestorComponent$), yn(() => yw(e, t))),
  yw = (e, t) => {
    const n = e.$hostElement$,
      r = zn('scheduleUpdate', e.$cmpMeta$.$tagName$),
      o = n;
    let i;
    return (
      t ? (i = wr(o, 'componentWillLoad')) : (i = wr(o, 'componentWillUpdate')),
      (i = sf(i, () => wr(o, 'componentWillRender'))),
      r(),
      sf(i, () => ww(e, o, t))
    );
  },
  ww = async (e, t, n) => {
    const r = e.$hostElement$,
      o = zn('update', e.$cmpMeta$.$tagName$);
    r['s-rc'], n && pw(e);
    const i = zn('render', e.$cmpMeta$.$tagName$);
    bw(e, t, r), i(), o(), $w(e);
  },
  bw = (e, t, n) => {
    try {
      (Xd = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Yn.hasRenderFn || Yn.reflect) && (Yn.vdomRender || Yn.reflect) && (Yn.hydrateServerSide || gw(e, t));
    } catch (l) {
      Do(l, e.$hostElement$);
    }
    return (Xd = null), null;
  },
  $w = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = zn('postUpdate', t),
      o = n;
    e.$ancestorComponent$,
      wr(o, 'componentDidRender'),
      e.$flags$ & 64 ? (wr(o, 'componentDidUpdate'), r()) : ((e.$flags$ |= 64), wr(o, 'componentDidLoad'), r());
  },
  Na = (e) => {
    {
      const t = Ir(e),
        n = t.$hostElement$.isConnected;
      return n && (t.$flags$ & 18) === 2 && tc(t, !1), n;
    }
  },
  wr = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (r) {
        Do(r);
      }
  },
  sf = (e, t) => (e && e.then ? e.then(t) : t()),
  xw = (e, t) => Ir(e).$instanceValues$.get(t),
  kw = (e, t, n, r) => {
    const o = Ir(e),
      i = e,
      s = o.$instanceValues$.get(t),
      l = o.$flags$,
      a = i;
    n = aw(n, r.$members$[t][0]);
    const u = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !u) {
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
          tc(o, !1);
        }
      }
    }
  },
  Ew = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const r = Object.entries(t.$members$),
        o = e.prototype;
      r.map(([i, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(o, i, {
            get() {
              return xw(this, i);
            },
            set(l) {
              kw(this, i, l, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const i = new Map();
        (o.attributeChangedCallback = function (s, l, a) {
          Se.jmp(() => {
            const u = i.get(s);
            if (this.hasOwnProperty(u)) (a = this[u]), delete this[u];
            else if (o.hasOwnProperty(u) && typeof this[u] == 'number' && this[u] == a) return;
            this[u] = a === null && typeof this[u] == 'boolean' ? !1 : a;
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
  Sw = async (e, t, n, r, o) => {
    if (
      !(t.$flags$ & 32) &&
      ((o = e.constructor),
      (t.$flags$ |= 32),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      o.style)
    ) {
      let s = o.style;
      typeof s != 'string' && (s = s[(t.$modeName$ = iw(e))]);
      const l = ym(n, t.$modeName$);
      if (!ts.has(l)) {
        const a = zn('registerStyles', n.$tagName$);
        dw(l, s, !!(n.$flags$ & 1)), a();
      }
    }
    t.$ancestorComponent$, (() => tc(t, !0))();
  },
  Cw = (e) => {},
  Tw = (e) => {
    if (!(Se.$flags$ & 1)) {
      const t = Ir(e),
        n = t.$cmpMeta$,
        r = zn('connectedCallback', n.$tagName$);
      t.$flags$ & 1
        ? (Cm(e, t, n.$listeners$), Cw(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && Pw(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([o, [i]]) => {
              if (i & 31 && e.hasOwnProperty(o)) {
                const s = e[o];
                delete e[o], (e[o] = s);
              }
            }),
          Sw(e, t, n)),
        r();
    }
  },
  Pw = (e) => {
    const t = (e['s-cr'] = Et.createComment(''));
    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
  },
  _w = (e) => {
    if (!(Se.$flags$ & 1)) {
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
          Ow(this, n);
        },
        connectedCallback() {
          Tw(this), r && r.call(this);
        },
        disconnectedCallback() {
          _w(this), o && o.call(this);
        },
        __attachShadow() {
          this.attachShadow({ mode: 'open', delegatesFocus: !!(n.$flags$ & 16) });
        },
      }),
      (e.is = n.$tagName$),
      Ew(e, n)
    );
  },
  Cm = (e, t, n, r) => {
    n &&
      n.map(([o, i, s]) => {
        const l = Lw(e, o),
          a = Rw(t, s),
          u = Iw(o);
        Se.ael(l, i, a, u), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Se.rel(l, i, a, u));
      });
  },
  Rw = (e, t) => (n) => {
    try {
      Yn.lazyLoad || e.$hostElement$[t](n);
    } catch (r) {
      Do(r);
    }
  },
  Lw = (e, t) => (t & 4 ? Et : t & 8 ? Qs : t & 16 ? Et.body : e),
  Iw = (e) => (Mw ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0),
  Tm = new WeakMap(),
  Ir = (e) => Tm.get(e),
  Ow = (e, t) => {
    const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
    return Cm(e, n, t.$listeners$), Tm.set(e, n);
  },
  lf = (e, t) => t in e,
  Do = (e, t) => (0, console.error)(e, t),
  ts = new Map(),
  Pm = [],
  Qs = typeof window < 'u' ? window : {},
  Et = Qs.document || { head: {} },
  At = Qs.HTMLElement || class {},
  Se = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Aw = (e) => {
    Object.assign(Se, e);
  },
  Mw = (() => {
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
    } catch {}
    return e;
  })(),
  Nw = (e) => Promise.resolve(e),
  Dw = (() => {
    try {
      return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function';
    } catch {}
    return !1;
  })(),
  Da = [],
  _m = [],
  Rm = (e, t) => (n) => {
    e.push(n), Ma || ((Ma = !0), t && Se.$flags$ & 4 ? zw(za) : Se.raf(za));
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
  za = () => {
    af(Da), af(_m), (Ma = Da.length > 0) && Se.raf(za);
  },
  zw = (e) => Nw().then(e),
  Po = Rm(Da, !1),
  yn = Rm(_m, !0);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const _o = (e, t) => {
    e.componentOnReady ? e.componentOnReady().then((n) => t(n)) : zt(() => t(e));
  },
  Bw = (e) => e.componentOnReady !== void 0,
  Lm = (e, t = []) => {
    const n = {};
    return (
      t.forEach((r) => {
        e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
      }),
      n
    );
  },
  Hw = [
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
  jw = (e, t) => {
    let n = Hw;
    return t && t.length > 0 && (n = n.filter((r) => !t.includes(r))), Lm(e, n);
  },
  Dk = (e, t, n, r) => {
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
  zk = (e, t, n, r) => {
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
  Im = (e, t, n) => Math.max(e, Math.min(t, n)),
  Ne = (e, t) => {
    if (!e) {
      const n = 'ASSERT: ' + t;
      console.error(n);
      debugger;
      throw new Error(n);
    }
  },
  Bk = (e) => e.timeStamp || Date.now(),
  Hk = (e) => {
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
  Om = (e, t) => {
    if ((e ?? (e = {}), t ?? (t = {}), e === t)) return !0;
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n) if (!(r in t) || e[r] !== t[r]) return !1;
    return !0;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const De = typeof window < 'u' ? window : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let Il;
const Fw = (e) => (
    e.forEach((t) => {
      for (const n in t)
        if (t.hasOwnProperty(n)) {
          const r = t[n];
          if (n === 'easing') {
            const o = 'animation-timing-function';
            (t[o] = r), delete t[n];
          } else {
            const o = Uw(n);
            o !== n && ((t[o] = r), delete t[n]);
          }
        }
    }),
    e
  ),
  Uw = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  nc = (e) => {
    if (Il === void 0) {
      const t = e.style.animationName !== void 0,
        n = e.style.webkitAnimationName !== void 0;
      Il = !t && n ? '-webkit-' : '';
    }
    return Il;
  },
  Z = (e, t, n) => {
    const r = t.startsWith('animation') ? nc(e) : '';
    e.style.setProperty(r + t, n);
  },
  mt = (e, t) => {
    const n = t.startsWith('animation') ? nc(e) : '';
    e.style.removeProperty(n + t);
  },
  Vw = (e, t) => {
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
  Ww = (e = []) =>
    e
      .map((t) => {
        const n = t.offset,
          r = [];
        for (const o in t) t.hasOwnProperty(o) && o !== 'offset' && r.push(`${o}: ${t[o]};`);
        return `${n * 100}% { ${r.join(' ')} }`;
      })
      .join(' '),
  uf = [],
  Kw = (e) => {
    let t = uf.indexOf(e);
    return t < 0 && (t = uf.push(e) - 1), `ion-animation-${t}`;
  },
  Qw = (e) => {
    const t = e.getRootNode !== void 0 ? e.getRootNode() : e;
    return t.head || t;
  },
  Yw = (e, t, n) => {
    var r;
    const o = Qw(n),
      i = nc(n),
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
  qw = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = [],
      a = [],
      u = [],
      c = !1,
      d,
      f = {},
      g = [],
      y = [],
      $ = {},
      A = 0,
      h = !1,
      p = !1,
      m,
      b,
      T,
      P,
      x = !0,
      C = !1,
      z = !0,
      D,
      L,
      ue = !1;
    const Ce = e,
      ce = [],
      re = [],
      Q = [],
      ie = [],
      _ = [],
      S = [],
      k = [],
      M = [],
      O = [],
      B = [],
      Y = typeof AnimationEffect == 'function' || (De !== void 0 && typeof De.AnimationEffect == 'function'),
      U = typeof Element == 'function' && typeof Element.prototype.animate == 'function' && Y,
      se = 100,
      de = () => B,
      Nt = (v) => (
        ie.forEach((R) => {
          R.destroy(v);
        }),
        jo(v),
        (Q.length = 0),
        (ie.length = 0),
        (l.length = 0),
        Eg(),
        (c = !1),
        (z = !0),
        L
      ),
      jo = (v) => {
        hc(), v && mc();
      },
      xg = () => {
        (h = !1), (p = !1), (z = !0), (b = void 0), (T = void 0), (P = void 0), (A = 0), (C = !1), (x = !0), (ue = !1);
      },
      kg = () => A !== 0 && !ue,
      Fo = (v, R) => ((R != null && R.oneTimeCallback ? re : ce).push({ c: v, o: R }), L),
      Eg = () => ((ce.length = 0), (re.length = 0), L),
      hc = () => {
        if (U)
          B.forEach((v) => {
            v.cancel();
          }),
            (B.length = 0);
        else {
          const v = Q.slice();
          zt(() => {
            v.forEach((R) => {
              mt(R, 'animation-name'),
                mt(R, 'animation-duration'),
                mt(R, 'animation-timing-function'),
                mt(R, 'animation-iteration-count'),
                mt(R, 'animation-delay'),
                mt(R, 'animation-play-state'),
                mt(R, 'animation-fill-mode'),
                mt(R, 'animation-direction');
            });
          });
        }
      },
      mc = () => {
        _.forEach((v) => {
          v != null && v.parentNode && v.parentNode.removeChild(v);
        }),
          (_.length = 0);
      },
      Sg = (v) => (S.push(v), L),
      Cg = (v) => (k.push(v), L),
      Tg = (v) => (M.push(v), L),
      Pg = (v) => (O.push(v), L),
      _g = (v) => ((a = ai(a, v)), L),
      Rg = (v) => ((u = ai(u, v)), L),
      Lg = (v = {}) => ((f = v), L),
      Ig = (v = []) => {
        for (const R of v) f[R] = '';
        return L;
      },
      Og = (v) => ((g = ai(g, v)), L),
      Ag = (v) => ((y = ai(y, v)), L),
      Mg = (v = {}) => (($ = v), L),
      Ng = (v = []) => {
        for (const R of v) $[R] = '';
        return L;
      },
      Or = () => (i !== void 0 ? i : d ? d.getFill() : 'both'),
      Vn = () => (b !== void 0 ? b : s !== void 0 ? s : d ? d.getDirection() : 'normal'),
      Ar = () => (h ? 'linear' : r !== void 0 ? r : d ? d.getEasing() : 'linear'),
      pt = () => (p ? 0 : T !== void 0 ? T : n !== void 0 ? n : d ? d.getDuration() : 0),
      Gt = () => (o !== void 0 ? o : d ? d.getIterations() : 1),
      Wn = () => (P !== void 0 ? P : t !== void 0 ? t : d ? d.getDelay() : 0),
      Dg = () => l,
      zg = (v) => ((s = v), rt(!0), L),
      Bg = (v) => ((i = v), rt(!0), L),
      Hg = (v) => ((t = v), rt(!0), L),
      jg = (v) => ((r = v), rt(!0), L),
      Fg = (v) => (!U && v === 0 && (v = 1), (n = v), rt(!0), L),
      Ug = (v) => ((o = v), rt(!0), L),
      Vg = (v) => ((d = v), L),
      Wg = (v) => {
        if (v != null)
          if (v.nodeType === 1) Q.push(v);
          else if (v.length >= 0) for (let R = 0; R < v.length; R++) Q.push(v[R]);
          else console.error('Invalid addElement value');
        return L;
      },
      Kg = (v) => {
        if (v != null)
          if (Array.isArray(v)) for (const R of v) R.parent(L), ie.push(R);
          else v.parent(L), ie.push(v);
        return L;
      },
      Qg = (v) => {
        const R = l !== v;
        return (l = v), R && Yg(l), L;
      },
      Yg = (v) => {
        U
          ? de().forEach((R) => {
              if (R.effect.setKeyframes) R.effect.setKeyframes(v);
              else {
                const N = new KeyframeEffect(R.effect.target, v, R.effect.getTiming());
                R.effect = N;
              }
            })
          : gc();
      },
      qg = () => {
        S.forEach((pe) => pe()), k.forEach((pe) => pe());
        const v = a,
          R = u,
          N = f;
        Q.forEach((pe) => {
          const be = pe.classList;
          v.forEach((ot) => be.add(ot)), R.forEach((ot) => be.remove(ot));
          for (const ot in N) N.hasOwnProperty(ot) && Z(pe, ot, N[ot]);
        });
      },
      Gg = () => {
        Js(), M.forEach((be) => be()), O.forEach((be) => be());
        const v = x ? 1 : 0,
          R = g,
          N = y,
          pe = $;
        Q.forEach((be) => {
          const ot = be.classList;
          R.forEach((kn) => ot.add(kn)), N.forEach((kn) => ot.remove(kn));
          for (const kn in pe) pe.hasOwnProperty(kn) && Z(be, kn, pe[kn]);
        }),
          ce.forEach((be) => be.c(v, L)),
          re.forEach((be) => be.c(v, L)),
          (re.length = 0),
          (z = !0),
          x && (C = !0),
          (x = !0);
      },
      Kn = () => {
        A !== 0 && (A--, A === 0 && (Gg(), d && d.animationFinish()));
      },
      gc = (v = !0) => {
        mc();
        const R = Fw(l);
        Q.forEach((N) => {
          if (R.length > 0) {
            const pe = Ww(R);
            D = e !== void 0 ? e : Kw(pe);
            const be = Yw(D, pe, N);
            _.push(be),
              Z(N, 'animation-duration', `${pt()}ms`),
              Z(N, 'animation-timing-function', Ar()),
              Z(N, 'animation-delay', `${Wn()}ms`),
              Z(N, 'animation-fill-mode', Or()),
              Z(N, 'animation-direction', Vn());
            const ot = Gt() === 1 / 0 ? 'infinite' : Gt().toString();
            Z(N, 'animation-iteration-count', ot),
              Z(N, 'animation-play-state', 'paused'),
              v && Z(N, 'animation-name', `${be.id}-alt`),
              zt(() => {
                Z(N, 'animation-name', be.id || null);
              });
          }
        });
      },
      Xg = () => {
        Q.forEach((v) => {
          const R = v.animate(l, {
            id: Ce,
            delay: Wn(),
            duration: pt(),
            easing: Ar(),
            iterations: Gt(),
            fill: Or(),
            direction: Vn(),
          });
          R.pause(), B.push(R);
        }),
          B.length > 0 &&
            (B[0].onfinish = () => {
              Kn();
            });
      },
      vc = (v = !0) => {
        qg(), l.length > 0 && (U ? Xg() : gc(v)), (c = !0);
      },
      Mr = (v) => {
        if (((v = Math.min(Math.max(v, 0), 0.9999)), U))
          B.forEach((R) => {
            (R.currentTime = R.effect.getComputedTiming().delay + pt() * v), R.pause();
          });
        else {
          const R = `-${pt() * v}ms`;
          Q.forEach((N) => {
            l.length > 0 && (Z(N, 'animation-delay', R), Z(N, 'animation-play-state', 'paused'));
          });
        }
      },
      yc = (v) => {
        B.forEach((R) => {
          R.effect.updateTiming({
            delay: Wn(),
            duration: pt(),
            easing: Ar(),
            iterations: Gt(),
            fill: Or(),
            direction: Vn(),
          });
        }),
          v !== void 0 && Mr(v);
      },
      wc = (v = !0, R) => {
        zt(() => {
          Q.forEach((N) => {
            Z(N, 'animation-name', D || null),
              Z(N, 'animation-duration', `${pt()}ms`),
              Z(N, 'animation-timing-function', Ar()),
              Z(N, 'animation-delay', R !== void 0 ? `-${R * pt()}ms` : `${Wn()}ms`),
              Z(N, 'animation-fill-mode', Or() || null),
              Z(N, 'animation-direction', Vn() || null);
            const pe = Gt() === 1 / 0 ? 'infinite' : Gt().toString();
            Z(N, 'animation-iteration-count', pe),
              v && Z(N, 'animation-name', `${D}-alt`),
              zt(() => {
                Z(N, 'animation-name', D || null);
              });
          });
        });
      },
      rt = (v = !1, R = !0, N) => (
        v &&
          ie.forEach((pe) => {
            pe.update(v, R, N);
          }),
        U ? yc(N) : wc(R, N),
        L
      ),
      Zg = (v = !1, R) => (
        ie.forEach((N) => {
          N.progressStart(v, R);
        }),
        bc(),
        (h = v),
        c || vc(),
        rt(!1, !0, R),
        L
      ),
      Jg = (v) => (
        ie.forEach((R) => {
          R.progressStep(v);
        }),
        Mr(v),
        L
      ),
      ev = (v, R, N) => (
        (h = !1),
        ie.forEach((pe) => {
          pe.progressEnd(v, R, N);
        }),
        N !== void 0 && (T = N),
        (C = !1),
        (x = !0),
        v === 0
          ? ((b = Vn() === 'reverse' ? 'normal' : 'reverse'),
            b === 'reverse' && (x = !1),
            U ? (rt(), Mr(1 - R)) : ((P = (1 - R) * pt() * -1), rt(!1, !1)))
          : v === 1 && (U ? (rt(), Mr(R)) : ((P = R * pt() * -1), rt(!1, !1))),
        v !== void 0 &&
          (Fo(
            () => {
              (T = void 0), (b = void 0), (P = void 0);
            },
            { oneTimeCallback: !0 }
          ),
          d || $c()),
        L
      ),
      bc = () => {
        c &&
          (U
            ? B.forEach((v) => {
                v.pause();
              })
            : Q.forEach((v) => {
                Z(v, 'animation-play-state', 'paused');
              }),
          (ue = !0));
      },
      tv = () => (
        ie.forEach((v) => {
          v.pause();
        }),
        bc(),
        L
      ),
      nv = () => {
        (m = void 0), Kn();
      },
      Js = () => {
        m && clearTimeout(m);
      },
      rv = () => {
        if (
          (Js(),
          zt(() => {
            Q.forEach((v) => {
              l.length > 0 && Z(v, 'animation-play-state', 'running');
            });
          }),
          l.length === 0 || Q.length === 0)
        )
          Kn();
        else {
          const v = Wn() || 0,
            R = pt() || 0,
            N = Gt() || 1;
          isFinite(N) && (m = setTimeout(nv, v + R * N + se)),
            Vw(Q[0], () => {
              Js(),
                zt(() => {
                  ov(), zt(Kn);
                });
            });
        }
      },
      ov = () => {
        Q.forEach((v) => {
          mt(v, 'animation-duration'), mt(v, 'animation-delay'), mt(v, 'animation-play-state');
        });
      },
      iv = () => {
        B.forEach((v) => {
          v.play();
        }),
          (l.length === 0 || Q.length === 0) && Kn();
      },
      sv = () => {
        U ? (Mr(0), yc()) : wc();
      },
      $c = (v) =>
        new Promise((R) => {
          v != null && v.sync && ((p = !0), Fo(() => (p = !1), { oneTimeCallback: !0 })),
            c || vc(),
            C && (sv(), (C = !1)),
            z && ((A = ie.length + 1), (z = !1)),
            Fo(() => R(), { oneTimeCallback: !0 }),
            ie.forEach((N) => {
              N.play();
            }),
            U ? iv() : rv(),
            (ue = !1);
        }),
      lv = () => {
        ie.forEach((v) => {
          v.stop();
        }),
          c && (hc(), (c = !1)),
          xg();
      },
      xc = (v, R) => {
        const N = l[0];
        return (
          N !== void 0 && (N.offset === void 0 || N.offset === 0) ? (N[v] = R) : (l = [{ offset: 0, [v]: R }, ...l]), L
        );
      };
    return (L = {
      parentAnimation: d,
      elements: Q,
      childAnimations: ie,
      id: Ce,
      animationFinish: Kn,
      from: xc,
      to: (v, R) => {
        const N = l[l.length - 1];
        return (
          N !== void 0 && (N.offset === void 0 || N.offset === 1) ? (N[v] = R) : (l = [...l, { offset: 1, [v]: R }]), L
        );
      },
      fromTo: (v, R, N) => xc(v, R).to(v, N),
      parent: Vg,
      play: $c,
      pause: tv,
      stop: lv,
      destroy: Nt,
      keyframes: Qg,
      addAnimation: Kg,
      addElement: Wg,
      update: rt,
      fill: Bg,
      direction: zg,
      iterations: Ug,
      duration: Fg,
      easing: jg,
      delay: Hg,
      getWebAnimations: de,
      getKeyframes: Dg,
      getFill: Or,
      getDirection: Vn,
      getDelay: Wn,
      getIterations: Gt,
      getEasing: Ar,
      getDuration: pt,
      afterAddRead: Tg,
      afterAddWrite: Pg,
      afterClearStyles: Ng,
      afterStyles: Mg,
      afterRemoveClass: Ag,
      afterAddClass: Og,
      beforeAddRead: Sg,
      beforeAddWrite: Cg,
      beforeClearStyles: Ig,
      beforeStyles: Lg,
      beforeRemoveClass: Rg,
      beforeAddClass: _g,
      onFinish: Fo,
      isRunning: kg,
      progressStart: Zg,
      progressStep: Jg,
      progressEnd: ev,
    });
  },
  Gw = 'ionViewWillEnter',
  Xw = 'ionViewDidEnter',
  Am = 'ionViewWillLeave',
  Mm = 'ionViewDidLeave',
  Ol = 'ionViewWillUnload',
  Zw = () => _t(() => import('./ios.transition-748bb299.js'), []),
  Jw = () => _t(() => import('./md.transition-c83bb842.js'), []),
  Nm = (e) =>
    new Promise((t, n) => {
      yn(() => {
        eb(e),
          tb(e).then(
            (r) => {
              r.animation && r.animation.destroy(), cf(e), t(r);
            },
            (r) => {
              cf(e), n(r);
            }
          );
      });
    }),
  eb = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    lb(t, n, e.direction),
      e.showGoBack ? t.classList.add('can-go-back') : t.classList.remove('can-go-back'),
      Ha(t, !1),
      t.style.setProperty('pointer-events', 'none'),
      n && (Ha(n, !1), n.style.setProperty('pointer-events', 'none'));
  },
  tb = async (e) => {
    const t = await nb(e);
    return t && X1.isBrowser ? rb(t, e) : ob(e);
  },
  cf = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    t.classList.remove('ion-page-invisible'),
      t.style.removeProperty('pointer-events'),
      n !== void 0 && (n.classList.remove('ion-page-invisible'), n.style.removeProperty('pointer-events'));
  },
  nb = async (e) =>
    !e.leavingEl || !e.animated || e.duration === 0
      ? void 0
      : e.animationBuilder
      ? e.animationBuilder
      : e.mode === 'ios'
      ? (await Zw()).iosTransitionAnimation
      : (await Jw()).mdTransitionAnimation,
  rb = async (e, t) => {
    await Dm(t, !0);
    const n = e(t.baseEl, t);
    zm(t.enteringEl, t.leavingEl);
    const r = await sb(n, t);
    return (
      t.progressCallback && t.progressCallback(void 0),
      r && Bm(t.enteringEl, t.leavingEl),
      { hasCompleted: r, animation: n }
    );
  },
  ob = async (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    return await Dm(e, !1), zm(t, n), Bm(t, n), { hasCompleted: !0 };
  },
  Dm = async (e, t) => {
    (e.deepWait !== void 0 ? e.deepWait : t) && (await Promise.all([Ba(e.enteringEl), Ba(e.leavingEl)])),
      await ib(e.viewIsReady, e.enteringEl);
  },
  ib = async (e, t) => {
    e && (await e(t));
  },
  sb = (e, t) => {
    const n = t.progressCallback,
      r = new Promise((o) => {
        e.onFinish((i) => o(i === 1));
      });
    return n ? (e.progressStart(!0), n(e)) : e.play(), r;
  },
  zm = (e, t) => {
    Ht(t, Am), Ht(e, Gw);
  },
  Bm = (e, t) => {
    Ht(e, Xw), Ht(t, Mm);
  },
  Ht = (e, t) => {
    if (e) {
      const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
      e.dispatchEvent(n);
    }
  },
  Ba = async (e) => {
    const t = e;
    if (t) {
      if (t.componentOnReady != null) {
        if ((await t.componentOnReady()) != null) return;
      } else if (t.__registerHost != null) {
        await new Promise((r) => zt(r));
        return;
      }
      await Promise.all(Array.from(t.children).map(Ba));
    }
  },
  Ha = (e, t) => {
    t
      ? (e.setAttribute('aria-hidden', 'true'), e.classList.add('ion-page-hidden'))
      : ((e.hidden = !1), e.removeAttribute('aria-hidden'), e.classList.remove('ion-page-hidden'));
  },
  lb = (e, t, n) => {
    e !== void 0 && (e.style.zIndex = n === 'back' ? '99' : '101'), t !== void 0 && (t.style.zIndex = '100');
  },
  jk = (e) => {
    if (e.classList.contains('ion-page')) return e;
    const t = e.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    return t || e;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ns = (e, t, n, r, o) => ub(e[1], t[1], n[1], r[1], o).map((i) => ab(e[0], t[0], n[0], r[0], i)),
  ab = (e, t, n, r, o) => {
    const i = 3 * t * Math.pow(o - 1, 2),
      s = -3 * n * o + 3 * n + r * o,
      l = e * Math.pow(o - 1, 3);
    return o * (i + o * s) - l;
  },
  ub = (e, t, n, r, o) => (
    (e -= o),
    (t -= o),
    (n -= o),
    (r -= o),
    db(r - 3 * n + 3 * t - e, 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter((s) => s >= 0 && s <= 1)
  ),
  cb = (e, t, n) => {
    const r = t * t - 4 * e * n;
    return r < 0 ? [] : [(-t + Math.sqrt(r)) / (2 * e), (-t - Math.sqrt(r)) / (2 * e)];
  },
  db = (e, t, n, r) => {
    if (e === 0) return cb(t, n, r);
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
      u = 2 * Math.pow(l, 1 / 3);
    return [
      u * Math.cos(a / 3) - t / 3,
      u * Math.cos((a + 2 * Math.PI) / 3) - t / 3,
      u * Math.cos((a + 4 * Math.PI) / 3) - t / 3,
    ];
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ class fb {
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
const le = new fb(),
  pb = (e) => {
    try {
      const t = e.sessionStorage.getItem(Hm);
      return t !== null ? JSON.parse(t) : {};
    } catch {
      return {};
    }
  },
  hb = (e, t) => {
    try {
      e.sessionStorage.setItem(Hm, JSON.stringify(t));
    } catch {
      return;
    }
  },
  mb = (e) => {
    const t = {};
    return (
      e.location.search
        .slice(1)
        .split('&')
        .map((n) => n.split('='))
        .map(([n, r]) => [decodeURIComponent(n), decodeURIComponent(r)])
        .filter(([n]) => gb(n, df))
        .map(([n, r]) => [n.slice(df.length), r])
        .forEach(([n, r]) => {
          t[n] = r;
        }),
      t
    );
  },
  gb = (e, t) => e.substr(0, t.length) === t,
  df = 'ionic:',
  Hm = 'ionic-persist-config',
  vb = (e) => jm(e),
  on = (e, t) => (typeof e == 'string' && ((t = e), (e = void 0)), vb(e).includes(t)),
  jm = (e = window) => {
    if (typeof e > 'u') return [];
    e.Ionic = e.Ionic || {};
    let t = e.Ionic.platforms;
    return (
      t == null &&
        ((t = e.Ionic.platforms = yb(e)), t.forEach((n) => e.document.documentElement.classList.add(`plt-${n}`))),
      t
    );
  },
  yb = (e) => {
    const t = le.get('platform');
    return Object.keys(ff).filter((n) => {
      const r = t == null ? void 0 : t[n];
      return typeof r == 'function' ? r(e) : ff[n](e);
    });
  },
  wb = (e) => Ys(e) && !Um(e),
  rc = (e) => !!(Bn(e, /iPad/i) || (Bn(e, /Macintosh/i) && Ys(e))),
  bb = (e) => Bn(e, /iPhone/i),
  $b = (e) => Bn(e, /iPhone|iPod/i) || rc(e),
  Fm = (e) => Bn(e, /android|sink/i),
  xb = (e) => Fm(e) && !Bn(e, /mobile/i),
  kb = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      r = Math.min(t, n),
      o = Math.max(t, n);
    return r > 390 && r < 520 && o > 620 && o < 800;
  },
  Eb = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      r = Math.min(t, n),
      o = Math.max(t, n);
    return rc(e) || xb(e) || (r > 460 && r < 820 && o > 780 && o < 1400);
  },
  Ys = (e) => Pb(e, '(any-pointer:coarse)'),
  Sb = (e) => !Ys(e),
  Um = (e) => Vm(e) || Wm(e),
  Vm = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
  Wm = (e) => {
    const t = e.Capacitor;
    return !!(t != null && t.isNative);
  },
  Cb = (e) => Bn(e, /electron/i),
  Tb = (e) => {
    var t;
    return !!(
      (!((t = e.matchMedia) === null || t === void 0) && t.call(e, '(display-mode: standalone)').matches) ||
      e.navigator.standalone
    );
  },
  Bn = (e, t) => t.test(e.navigator.userAgent),
  Pb = (e, t) => {
    var n;
    return (n = e.matchMedia) === null || n === void 0 ? void 0 : n.call(e, t).matches;
  },
  ff = {
    ipad: rc,
    iphone: bb,
    ios: $b,
    android: Fm,
    phablet: kb,
    tablet: Eb,
    cordova: Vm,
    capacitor: Wm,
    electron: Cb,
    pwa: Tb,
    mobile: Ys,
    mobileweb: wb,
    desktop: Sb,
    hybrid: Um,
  };
let Xn;
const Ze = (e) => (e && lw(e)) || Xn,
  _b = (e = {}) => {
    if (typeof window > 'u') return;
    const t = window.document,
      n = window,
      r = (n.Ionic = n.Ionic || {}),
      o = {};
    e._ael && (o.ael = e._ael), e._rel && (o.rel = e._rel), e._ce && (o.ce = e._ce), Aw(o);
    const i = Object.assign(
      Object.assign(Object.assign(Object.assign(Object.assign({}, pb(n)), { persistConfig: !1 }), r.config), mb(n)),
      e
    );
    le.reset(i),
      le.getBoolean('persistConfig') && hb(n, i),
      jm(n),
      (r.config = le),
      (r.mode = Xn = le.get('mode', t.documentElement.getAttribute('mode') || (on(n, 'ios') ? 'ios' : 'md'))),
      le.set('mode', Xn),
      t.documentElement.setAttribute('mode', Xn),
      t.documentElement.classList.add(Xn),
      le.getBoolean('_testing') && le.set('animated', !1);
    const s = (a) => {
        var u;
        return (u = a.tagName) === null || u === void 0 ? void 0 : u.startsWith('ION-');
      },
      l = (a) => ['ios', 'md'].includes(a);
    sw((a) => {
      for (; a; ) {
        const u = a.mode || a.getAttribute('mode');
        if (u) {
          if (l(u)) return u;
          s(a) && console.warn('Invalid ionic mode: "' + u + '", expected: "ios" or "md"');
        }
        a = a.parentElement;
      }
      return Xn;
    });
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Km = async (e, t, n, r, o, i) => {
    var s;
    if (e) return e.attachViewToDom(t, n, o, r);
    if (!i && typeof n != 'string' && !(n instanceof HTMLElement)) throw new Error('framework delegate is missing');
    const l = typeof n == 'string' ? ((s = t.ownerDocument) === null || s === void 0 ? void 0 : s.createElement(n)) : n;
    return (
      r && r.forEach((a) => l.classList.add(a)),
      o && Object.assign(l, o),
      t.appendChild(l),
      await new Promise((a) => _o(l, a)),
      l
    );
  },
  Rb = (e, t) => {
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
 */ const Lb = (e, ...t) => console.error(`<${e.tagName.toLowerCase()}> must be used inside ${t.join(' or ')}.`);
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
 */ const oc = (e, t) => t.closest(e) !== null,
  qs = (e, t) =>
    typeof e == 'string' && e.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${e}`]: !0 }, t) : t;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Ib =
    ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}',
  Ob = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
      }
      async addRipple(e, t) {
        return new Promise((n) => {
          Po(() => {
            const r = this.el.getBoundingClientRect(),
              o = r.width,
              i = r.height,
              s = Math.sqrt(o * o + i * i),
              l = Math.max(i, o),
              a = this.unbounded ? l : s + Mb,
              u = Math.floor(l * Nb),
              c = a / u;
            let d = e - r.left,
              f = t - r.top;
            this.unbounded && ((d = o * 0.5), (f = i * 0.5));
            const g = d - u * 0.5,
              y = f - u * 0.5,
              $ = o * 0.5 - d,
              A = i * 0.5 - f;
            yn(() => {
              const h = document.createElement('div');
              h.classList.add('ripple-effect');
              const p = h.style;
              (p.top = y + 'px'),
                (p.left = g + 'px'),
                (p.width = p.height = u + 'px'),
                p.setProperty('--final-scale', `${c}`),
                p.setProperty('--translate-end', `${$}px, ${A}px`),
                (this.el.shadowRoot || this.el).appendChild(h),
                setTimeout(() => {
                  n(() => {
                    Ab(h);
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
        const e = Ze(this);
        return H(qt, { role: 'presentation', class: { [e]: !0, unbounded: this.unbounded } });
      }
      get el() {
        return this;
      }
      static get style() {
        return Ib;
      }
    },
    [1, 'ion-ripple-effect', { type: [1], addRipple: [64] }]
  ),
  Ab = (e) => {
    e.classList.add('fade-out'),
      setTimeout(() => {
        e.remove();
      }, 200);
  },
  Mb = 10,
  Nb = 0.5;
function Db() {
  if (typeof customElements > 'u') return;
  ['ion-ripple-effect'].forEach((t) => {
    switch (t) {
      case 'ion-ripple-effect':
        customElements.get(t) || customElements.define(t, Ob);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const zb = (e) =>
  e && e.dir !== ''
    ? e.dir.toLowerCase() === 'rtl'
    : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Bb =
    ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
  Hb = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionScrollStart = ct(this, 'ionScrollStart', 7)),
          (this.ionScroll = ct(this, 'ionScroll', 7)),
          (this.ionScrollEnd = ct(this, 'ionScrollEnd', 7)),
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
        const { forceOverscroll: e } = this,
          t = Ze(this);
        return e === void 0 ? t === 'ios' && on('ios') : e;
      }
      resize() {
        this.fullscreen
          ? Po(() => this.readDimensions())
          : (this.cTop !== 0 || this.cBottom !== 0) && ((this.cTop = this.cBottom = 0), Na(this));
      }
      readDimensions() {
        const e = Fb(this.el),
          t = Math.max(this.el.offsetTop, 0),
          n = Math.max(e.offsetHeight - t - this.el.offsetHeight, 0);
        (t !== this.cTop || n !== this.cBottom) && ((this.cTop = t), (this.cBottom = n), Na(this));
      }
      onScroll(e) {
        const t = Date.now(),
          n = !this.isScrolling;
        (this.lastScroll = t),
          n && this.onScrollStart(),
          !this.queued &&
            this.scrollEvents &&
            ((this.queued = !0),
            Po((r) => {
              (this.queued = !1),
                (this.detail.event = e),
                Ub(this.detail, this.scrollEl, r, n),
                this.ionScroll.emit(this.detail);
            }));
      }
      async getScrollElement() {
        return this.scrollEl || (await new Promise((e) => _o(this.el, e))), Promise.resolve(this.scrollEl);
      }
      async getBackgroundElement() {
        return (
          this.backgroundContentEl || (await new Promise((e) => _o(this.el, e))),
          Promise.resolve(this.backgroundContentEl)
        );
      }
      scrollToTop(e = 0) {
        return this.scrollToPoint(void 0, 0, e);
      }
      async scrollToBottom(e = 0) {
        const t = await this.getScrollElement(),
          n = t.scrollHeight - t.clientHeight;
        return this.scrollToPoint(void 0, n, e);
      }
      async scrollByPoint(e, t, n) {
        const r = await this.getScrollElement();
        return this.scrollToPoint(e + r.scrollLeft, t + r.scrollTop, n);
      }
      async scrollToPoint(e, t, n = 0) {
        const r = await this.getScrollElement();
        if (n < 32) {
          t != null && (r.scrollTop = t), e != null && (r.scrollLeft = e);
          return;
        }
        let o,
          i = 0;
        const s = new Promise((f) => (o = f)),
          l = r.scrollTop,
          a = r.scrollLeft,
          u = t != null ? t - l : 0,
          c = e != null ? e - a : 0,
          d = (f) => {
            const g = Math.min(1, (f - i) / n) - 1,
              y = Math.pow(g, 3) + 1;
            u !== 0 && (r.scrollTop = Math.floor(y * u + l)),
              c !== 0 && (r.scrollLeft = Math.floor(y * c + a)),
              y < 1 ? requestAnimationFrame(d) : o();
          };
        return (
          requestAnimationFrame((f) => {
            (i = f), d(f);
          }),
          s
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
        const { isMainContent: e, scrollX: t, scrollY: n, el: r } = this,
          o = zb(r) ? 'rtl' : 'ltr',
          i = Ze(this),
          s = this.shouldForceOverscroll(),
          l = i === 'ios',
          a = e ? 'main' : 'div';
        return (
          this.resize(),
          H(
            qt,
            {
              class: qs(this.color, {
                [i]: !0,
                'content-sizing': oc('ion-popover', this.el),
                overscroll: s,
                [`content-${o}`]: !0,
              }),
              style: { '--offset-top': `${this.cTop}px`, '--offset-bottom': `${this.cBottom}px` },
            },
            H('div', { ref: (u) => (this.backgroundContentEl = u), id: 'background-content', part: 'background' }),
            H(
              a,
              {
                class: { 'inner-scroll': !0, 'scroll-x': t, 'scroll-y': n, overscroll: (t || n) && s },
                ref: (u) => (this.scrollEl = u),
                onScroll: this.scrollEvents ? (u) => this.onScroll(u) : void 0,
                part: 'scroll',
              },
              H('slot', null)
            ),
            l
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
        return Bb;
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
  jb = (e) => {
    var t;
    return e.parentElement
      ? e.parentElement
      : !((t = e.parentNode) === null || t === void 0) && t.host
      ? e.parentNode.host
      : null;
  },
  Fb = (e) => {
    const t = e.closest('ion-tabs');
    if (t) return t;
    const n = e.closest('ion-app, ion-page, .ion-page, page-inner, .popover-content');
    return n || jb(e);
  },
  Ub = (e, t, n, r) => {
    const o = e.currentX,
      i = e.currentY,
      s = e.currentTime,
      l = t.scrollLeft,
      a = t.scrollTop,
      u = n - s;
    if (
      (r && ((e.startTime = n), (e.startX = l), (e.startY = a), (e.velocityX = e.velocityY = 0)),
      (e.currentTime = n),
      (e.currentX = e.scrollLeft = l),
      (e.currentY = e.scrollTop = a),
      (e.deltaX = l - e.startX),
      (e.deltaY = a - e.startY),
      u > 0 && u < 100)
    ) {
      const c = (l - o) / u,
        d = (a - i) / u;
      (e.velocityX = c * 0.7 + e.velocityX * 0.3), (e.velocityY = d * 0.7 + e.velocityY * 0.3);
    }
  };
function Vb() {
  if (typeof customElements > 'u') return;
  ['ion-content'].forEach((t) => {
    switch (t) {
      case 'ion-content':
        customElements.get(t) || customElements.define(t, Hb);
        break;
    }
  });
}
const Wb = Vb;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Kb = 'ION-CONTENT',
  Qm = 'ion-content',
  Ym = '.ion-content-scroll-host',
  qm = `${Qm}, ${Ym}`,
  ic = (e) => e.tagName === Kb,
  pf = async (e) => (ic(e) ? (await new Promise((t) => _o(e, t)), e.getScrollElement()) : e),
  hf = (e) => {
    const t = e.querySelector(Ym);
    return t || e.querySelector(qm);
  },
  Fk = (e) => e.closest(qm),
  Uk = (e, t) =>
    ic(e) ? e.scrollToTop(t) : Promise.resolve(e.scrollTo({ top: 0, left: 0, behavior: t > 0 ? 'smooth' : 'auto' })),
  Vk = (e, t, n, r) =>
    ic(e)
      ? e.scrollByPoint(t, n, r)
      : Promise.resolve(e.scrollBy({ top: n, left: t, behavior: r > 0 ? 'smooth' : 'auto' })),
  mf = (e) => Lb(e, Qm);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Qb = (e) => {
  let t, n, r;
  const o = () => {
      (t = () => {
        (r = !0), e && e(!0);
      }),
        (n = () => {
          (r = !1), e && e(!1);
        }),
        De == null || De.addEventListener('keyboardWillShow', t),
        De == null || De.addEventListener('keyboardWillHide', n);
    },
    i = () => {
      De == null || De.removeEventListener('keyboardWillShow', t),
        De == null || De.removeEventListener('keyboardWillHide', n),
        (t = n = void 0);
    },
    s = () => r;
  return o(), { init: o, destroy: i, isKeyboardVisible: s };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Yb = 'all 0.2s ease-in-out',
  gf = (e) => {
    const t = document.querySelector(`${e}.ion-cloned-element`);
    if (t !== null) return t;
    const n = document.createElement(e);
    return (
      n.classList.add('ion-cloned-element'), n.style.setProperty('display', 'none'), document.body.appendChild(n), n
    );
  },
  vf = (e) => {
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
  qb = (e, t, n) => {
    Po(() => {
      const r = e.scrollTop,
        o = Im(1, 1 + -r / 500, 1.1);
      n.querySelector('ion-refresher.refresher-native') === null &&
        yn(() => {
          Zb(t.toolbars, o);
        });
    });
  },
  sc = (e, t) => {
    e.collapse !== 'fade' &&
      (t === void 0 ? e.style.removeProperty('--opacity-scale') : e.style.setProperty('--opacity-scale', t.toString()));
  },
  Gb = (e, t, n) => {
    if (!e[0].isIntersecting) return;
    const r = e[0].intersectionRatio > 0.9 || n <= 0 ? 0 : ((1 - e[0].intersectionRatio) * 100) / 75;
    sc(t.el, r === 1 ? void 0 : r);
  },
  Xb = (e, t, n, r) => {
    yn(() => {
      const o = r.scrollTop;
      Gb(e, t, o);
      const i = e[0],
        s = i.intersectionRect,
        l = s.width * s.height,
        a = i.rootBounds.width * i.rootBounds.height,
        u = l === 0 && a === 0,
        c = Math.abs(s.left - i.boundingClientRect.left),
        d = Math.abs(s.right - i.boundingClientRect.right),
        f = l > 0 && (c >= 5 || d >= 5);
      u ||
        f ||
        (i.isIntersecting
          ? (qr(t, !1), qr(n))
          : ((s.x === 0 && s.y === 0) || (s.width !== 0 && s.height !== 0)) && o > 0 && (qr(t), qr(n, !1), sc(t.el)));
    });
  },
  qr = (e, t = !0) => {
    const n = e.el;
    t
      ? (n.classList.remove('header-collapse-condense-inactive'), n.removeAttribute('aria-hidden'))
      : (n.classList.add('header-collapse-condense-inactive'), n.setAttribute('aria-hidden', 'true'));
  },
  Zb = (e = [], t = 1, n = !1) => {
    e.forEach((r) => {
      const o = r.ionTitleEl,
        i = r.innerTitleEl;
      !o || o.size !== 'large' || ((i.style.transition = n ? Yb : ''), (i.style.transform = `scale3d(${t}, ${t}, 1)`));
    });
  },
  yf = (e, t, n) => {
    Po(() => {
      const r = e.scrollTop,
        o = t.clientHeight,
        i = n ? n.clientHeight : 0;
      if (n !== null && r < i) {
        t.style.setProperty('--opacity-scale', '0'), e.style.setProperty('clip-path', `inset(${o}px 0px 0px 0px)`);
        return;
      }
      const s = r - i,
        a = Im(0, s / 10, 1);
      yn(() => {
        e.style.removeProperty('clip-path'), t.style.setProperty('--opacity-scale', a.toString());
      });
    });
  },
  Jb =
    'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}',
  e$ =
    'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}@supports (inset-inline-start: 0){.header-md::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.header-md::after{left:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}',
  t$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          (this.inheritedAttributes = {}),
          (this.setupFadeHeader = async (e, t) => {
            const n = (this.scrollEl = await pf(e));
            (this.contentScrollCallback = () => {
              yf(this.scrollEl, this.el, t);
            }),
              n.addEventListener('scroll', this.contentScrollCallback),
              yf(this.scrollEl, this.el, t);
          }),
          (this.collapse = void 0),
          (this.translucent = !1);
      }
      componentWillLoad() {
        this.inheritedAttributes = jw(this.el);
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
        const { collapse: t } = this,
          n = t === 'condense',
          r = t === 'fade';
        if ((this.destroyCollapsibleHeader(), n)) {
          const o = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
            i = o ? hf(o) : null;
          yn(() => {
            const s = gf('ion-title');
            (s.size = 'large'), gf('ion-back-button');
          }),
            await this.setupCondenseHeader(i, o);
        } else if (r) {
          const o = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
            i = o ? hf(o) : null;
          if (!i) {
            mf(this.el);
            return;
          }
          const s = i.querySelector('ion-header[collapse="condense"]');
          await this.setupFadeHeader(i, s);
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
      async setupCondenseHeader(e, t) {
        if (!e || !t) {
          mf(this.el);
          return;
        }
        if (typeof IntersectionObserver > 'u') return;
        this.scrollEl = await pf(e);
        const n = t.querySelectorAll('ion-header');
        if (
          ((this.collapsibleMainHeader = Array.from(n).find((s) => s.collapse !== 'condense')),
          !this.collapsibleMainHeader)
        )
          return;
        const r = vf(this.collapsibleMainHeader),
          o = vf(this.el);
        if (!r || !o) return;
        qr(r, !1), sc(r.el, 0);
        const i = (s) => {
          Xb(s, r, o, this.scrollEl);
        };
        (this.intersectionObserver = new IntersectionObserver(i, {
          root: e,
          threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        })),
          this.intersectionObserver.observe(o.toolbars[o.toolbars.length - 1].el),
          (this.contentScrollCallback = () => {
            qb(this.scrollEl, o, e);
          }),
          this.scrollEl.addEventListener('scroll', this.contentScrollCallback),
          yn(() => {
            this.collapsibleMainHeader !== void 0 && this.collapsibleMainHeader.classList.add('header-collapse-main');
          });
      }
      render() {
        const { translucent: e, inheritedAttributes: t } = this,
          n = Ze(this),
          r = this.collapse || 'none',
          o = oc('ion-menu', this.el) ? 'none' : 'banner';
        return H(
          qt,
          Object.assign(
            {
              role: o,
              class: {
                [n]: !0,
                [`header-${n}`]: !0,
                ['header-translucent']: this.translucent,
                [`header-collapse-${r}`]: !0,
                [`header-translucent-${n}`]: this.translucent,
              },
            },
            t
          ),
          n === 'ios' && e && H('div', { class: 'header-background' }),
          H('slot', null)
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: Jb, md: e$ };
      }
    },
    [36, 'ion-header', { collapse: [1], translucent: [4] }]
  );
function n$() {
  if (typeof customElements > 'u') return;
  ['ion-header'].forEach((t) => {
    switch (t) {
      case 'ion-header':
        customElements.get(t) || customElements.define(t, t$);
        break;
    }
  });
}
const r$ = n$,
  Gm = 1,
  Xm = 2,
  rs = 3;
class ja {
  constructor(t, n) {
    (this.component = t), (this.params = n), (this.state = Gm);
  }
  async init(t) {
    if (((this.state = Xm), !this.element)) {
      const n = this.component;
      this.element = await Km(this.delegate, t, n, ['ion-page', 'ion-page-invisible'], this.params);
    }
  }
  _destroy() {
    Ne(this.state !== rs, 'view state must be ATTACHED');
    const t = this.element;
    t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()),
      (this.nav = void 0),
      (this.state = rs);
  }
}
const wf = (e, t, n) => (!e || e.component !== t ? !1 : Om(e.params, n)),
  bf = (e, t) => (e ? (e instanceof ja ? e : new ja(e, t)) : null),
  o$ = (e) =>
    e
      .map((t) =>
        t instanceof ja
          ? t
          : 'component' in t
          ? bf(t.component, t.componentProps === null ? void 0 : t.componentProps)
          : bf(t, void 0)
      )
      .filter((t) => t !== null),
  i$ = ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
  s$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = ct(this, 'ionNavWillLoad', 7)),
          (this.ionNavWillChange = ct(this, 'ionNavWillChange', 3)),
          (this.ionNavDidChange = ct(this, 'ionNavDidChange', 3)),
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
          const e = Ze(this);
          this.swipeGesture = le.getBoolean('swipeBackEnabled', e === 'ios');
        }
        this.ionNavWillLoad.emit();
      }
      async componentDidLoad() {
        this.rootChanged(),
          (this.gesture = (await _t(() => import('./swipe-back-6af64a67.js'), [])).createSwipeBackGesture(
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
        for (const e of this.views) Ht(e.element, Ol), e._destroy();
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
          (this.transInstr.length = 0),
          (this.views.length = 0),
          (this.destroyed = !0);
      }
      push(e, t, n, r) {
        return this.insert(-1, e, t, n, r);
      }
      insert(e, t, n, r, o) {
        return this.insertPages(e, [{ component: t, componentProps: n }], r, o);
      }
      insertPages(e, t, n, r) {
        return this.queueTrns({ insertStart: e, insertViews: t, opts: n }, r);
      }
      pop(e, t) {
        return this.removeIndex(-1, 1, e, t);
      }
      popTo(e, t, n) {
        const r = { removeStart: -1, removeCount: -1, opts: t };
        return (
          typeof e == 'object' && e.component
            ? ((r.removeView = e), (r.removeStart = 1))
            : typeof e == 'number' && (r.removeStart = e + 1),
          this.queueTrns(r, n)
        );
      }
      popToRoot(e, t) {
        return this.removeIndex(1, -1, e, t);
      }
      removeIndex(e, t = 1, n, r) {
        return this.queueTrns({ removeStart: e, removeCount: t, opts: n }, r);
      }
      setRoot(e, t, n, r) {
        return this.setPages([{ component: e, componentProps: t }], n, r);
      }
      setPages(e, t, n) {
        return (
          t ?? (t = {}),
          t.animated !== !0 && (t.animated = !1),
          this.queueTrns({ insertStart: 0, insertViews: e, removeStart: 0, removeCount: -1, opts: t }, n)
        );
      }
      setRouteId(e, t, n, r) {
        const o = this.getActiveSync();
        if (wf(o, e, t)) return Promise.resolve({ changed: !1, element: o.element });
        let i;
        const s = new Promise((u) => (i = u));
        let l;
        const a = {
          updateURL: !1,
          viewIsReady: (u) => {
            let c;
            const d = new Promise((f) => (c = f));
            return (
              i({
                changed: !0,
                element: u,
                markVisible: async () => {
                  c(), await l;
                },
              }),
              d
            );
          },
        };
        if (n === 'root') l = this.setRoot(e, t, a);
        else {
          const u = this.views.find((c) => wf(c, e, t));
          u
            ? (l = this.popTo(u, Object.assign(Object.assign({}, a), { direction: 'back', animationBuilder: r })))
            : n === 'forward'
            ? (l = this.push(e, t, Object.assign(Object.assign({}, a), { animationBuilder: r })))
            : n === 'back' &&
              (l = this.setRoot(
                e,
                t,
                Object.assign(Object.assign({}, a), { direction: 'back', animated: !0, animationBuilder: r })
              ));
        }
        return s;
      }
      async getRouteId() {
        const e = this.getActiveSync();
        if (e) return { id: e.element.tagName, params: e.params, element: e.element };
      }
      async getActive() {
        return this.getActiveSync();
      }
      async getByIndex(e) {
        return this.views[e];
      }
      async canGoBack(e) {
        return this.canGoBackSync(e);
      }
      async getPrevious(e) {
        return this.getPreviousSync(e);
      }
      getLength() {
        return this.views.length;
      }
      getActiveSync() {
        return this.views[this.views.length - 1];
      }
      canGoBackSync(e = this.getActiveSync()) {
        return !!(e && this.getPreviousSync(e));
      }
      getPreviousSync(e = this.getActiveSync()) {
        if (!e) return;
        const t = this.views,
          n = t.indexOf(e);
        return n > 0 ? t[n - 1] : void 0;
      }
      async queueTrns(e, t) {
        var n, r;
        if (this.isTransitioning && !((n = e.opts) === null || n === void 0) && n.skipIfBusy) return !1;
        const o = new Promise((i, s) => {
          (e.resolve = i), (e.reject = s);
        });
        if (((e.done = t), e.opts && e.opts.updateURL !== !1 && this.useRouter)) {
          const i = document.querySelector('ion-router');
          if (i) {
            const s = await i.canTransition();
            if (s === !1) return !1;
            if (typeof s == 'string') return i.push(s, e.opts.direction || 'back'), !1;
          }
        }
        return (
          ((r = e.insertViews) === null || r === void 0 ? void 0 : r.length) === 0 && (e.insertViews = void 0),
          this.transInstr.push(e),
          this.nextTrns(),
          o
        );
      }
      success(e, t) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', t);
          return;
        }
        if (
          (t.done && t.done(e.hasCompleted, e.requiresTransition, e.enteringView, e.leavingView, e.direction),
          t.resolve(e.hasCompleted),
          t.opts.updateURL !== !1 && this.useRouter)
        ) {
          const n = document.querySelector('ion-router');
          if (n) {
            const r = e.direction === 'back' ? 'back' : 'forward';
            n.navChanged(r);
          }
        }
      }
      failed(e, t) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', t);
          return;
        }
        (this.transInstr.length = 0), this.fireError(e, t);
      }
      fireError(e, t) {
        t.done && t.done(!1, !1, e), t.reject && !this.destroyed ? t.reject(e) : t.resolve(!1);
      }
      nextTrns() {
        if (this.isTransitioning) return !1;
        const e = this.transInstr.shift();
        return e ? (this.runTransition(e), !0) : !1;
      }
      async runTransition(e) {
        try {
          this.ionNavWillChange.emit(), (this.isTransitioning = !0), this.prepareTI(e);
          const t = this.getActiveSync(),
            n = this.getEnteringView(e, t);
          if (!t && !n) throw new Error('no views in the stack to be removed');
          n && n.state === Gm && (await n.init(this.el)), this.postViewInit(n, t, e);
          const r = (e.enteringRequiresTransition || e.leavingRequiresTransition) && n !== t;
          r &&
            e.opts &&
            t &&
            (e.opts.direction === 'back' &&
              (e.opts.animationBuilder = e.opts.animationBuilder || (n == null ? void 0 : n.animationBuilder)),
            (t.animationBuilder = e.opts.animationBuilder));
          let o;
          r ? (o = await this.transition(n, t, e)) : (o = { hasCompleted: !0, requiresTransition: !1 }),
            this.success(o, e),
            this.ionNavDidChange.emit();
        } catch (t) {
          this.failed(t, e);
        }
        (this.isTransitioning = !1), this.nextTrns();
      }
      prepareTI(e) {
        var t, n, r;
        const o = this.views.length;
        if (
          (((t = e.opts) !== null && t !== void 0) || (e.opts = {}),
          ((n = (r = e.opts).delegate) !== null && n !== void 0) || (r.delegate = this.delegate),
          e.removeView !== void 0)
        ) {
          Ne(e.removeStart !== void 0, 'removeView needs removeStart'),
            Ne(e.removeCount !== void 0, 'removeView needs removeCount');
          const l = this.views.indexOf(e.removeView);
          if (l < 0) throw new Error('removeView was not found');
          e.removeStart += l;
        }
        e.removeStart !== void 0 &&
          (e.removeStart < 0 && (e.removeStart = o - 1),
          e.removeCount < 0 && (e.removeCount = o - e.removeStart),
          (e.leavingRequiresTransition = e.removeCount > 0 && e.removeStart + e.removeCount === o)),
          e.insertViews &&
            ((e.insertStart < 0 || e.insertStart > o) && (e.insertStart = o),
            (e.enteringRequiresTransition = e.insertStart === o));
        const i = e.insertViews;
        if (!i) return;
        Ne(i.length > 0, 'length can not be zero');
        const s = o$(i);
        if (s.length === 0) throw new Error('invalid views to insert');
        for (const l of s) {
          l.delegate = e.opts.delegate;
          const a = l.nav;
          if (a && a !== this) throw new Error('inserted view was already inserted');
          if (l.state === rs) throw new Error('inserted view was already destroyed');
        }
        e.insertViews = s;
      }
      getEnteringView(e, t) {
        const n = e.insertViews;
        if (n !== void 0) return n[n.length - 1];
        const r = e.removeStart;
        if (r !== void 0) {
          const o = this.views,
            i = r + e.removeCount;
          for (let s = o.length - 1; s >= 0; s--) {
            const l = o[s];
            if ((s < r || s >= i) && l !== t) return l;
          }
        }
      }
      postViewInit(e, t, n) {
        var r, o, i;
        Ne(t || e, 'Both leavingView and enteringView are null'),
          Ne(n.resolve, 'resolve must be valid'),
          Ne(n.reject, 'reject must be valid');
        const s = n.opts,
          { insertViews: l, removeStart: a, removeCount: u } = n;
        let c;
        if (a !== void 0 && u !== void 0) {
          Ne(a >= 0, 'removeStart can not be negative'), Ne(u >= 0, 'removeCount can not be negative'), (c = []);
          for (let f = a; f < a + u; f++) {
            const g = this.views[f];
            g !== void 0 && g !== e && g !== t && c.push(g);
          }
          ((r = s.direction) !== null && r !== void 0) || (s.direction = 'back');
        }
        const d = this.views.length + ((o = l == null ? void 0 : l.length) !== null && o !== void 0 ? o : 0) - (u ?? 0);
        if ((Ne(d >= 0, 'final balance can not be negative'), d === 0))
          throw (
            (console.warn(
              "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
              this,
              this.el
            ),
            new Error('navigation stack needs at least one root page'))
          );
        if (l) {
          let f = n.insertStart;
          for (const g of l) this.insertViewAt(g, f), f++;
          n.enteringRequiresTransition && (((i = s.direction) !== null && i !== void 0) || (s.direction = 'forward'));
        }
        if (c && c.length > 0) {
          for (const f of c) Ht(f.element, Am), Ht(f.element, Mm), Ht(f.element, Ol);
          for (const f of c) this.destroyView(f);
        }
      }
      async transition(e, t, n) {
        const r = n.opts,
          o = r.progressAnimation ? (c) => (this.sbAni = c) : void 0,
          i = Ze(this),
          s = e.element,
          l = t && t.element,
          a = Object.assign(
            Object.assign(
              {
                mode: i,
                showGoBack: this.canGoBackSync(e),
                baseEl: this.el,
                progressCallback: o,
                animated: this.animated && le.getBoolean('animated', !0),
                enteringEl: s,
                leavingEl: l,
              },
              r
            ),
            { animationBuilder: r.animationBuilder || this.animation || le.get('navAnimation') }
          ),
          { hasCompleted: u } = await Nm(a);
        return this.transitionFinish(u, e, t, r);
      }
      transitionFinish(e, t, n, r) {
        const o = e ? t : n;
        return (
          o && this.unmountInactiveViews(o),
          { hasCompleted: e, requiresTransition: !0, enteringView: t, leavingView: n, direction: r.direction }
        );
      }
      insertViewAt(e, t) {
        const n = this.views,
          r = n.indexOf(e);
        r > -1
          ? (Ne(e.nav === this, 'view is not part of the nav'), n.splice(r, 1), n.splice(t, 0, e))
          : (Ne(!e.nav, 'nav is used'), (e.nav = this), n.splice(t, 0, e));
      }
      removeView(e) {
        Ne(e.state === Xm || e.state === rs, 'view state should be loaded or destroyed');
        const t = this.views,
          n = t.indexOf(e);
        Ne(n > -1, 'view must be part of the stack'), n >= 0 && t.splice(n, 1);
      }
      destroyView(e) {
        e._destroy(), this.removeView(e);
      }
      unmountInactiveViews(e) {
        if (this.destroyed) return;
        const t = this.views,
          n = t.indexOf(e);
        for (let r = t.length - 1; r >= 0; r--) {
          const o = t[r],
            i = o.element;
          i && (r > n ? (Ht(i, Ol), this.destroyView(o)) : r < n && Ha(i, !0));
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
      onMove(e) {
        this.sbAni && this.sbAni.progressStep(e);
      }
      onEnd(e, t, n) {
        if (this.sbAni) {
          (this.animationEnabled = !1),
            this.sbAni.onFinish(
              () => {
                this.animationEnabled = !0;
              },
              { oneTimeCallback: !0 }
            );
          let r = e ? -0.001 : 0.001;
          e
            ? (r += ns([0, 0], [0.32, 0.72], [0, 1], [1, 1], t)[0])
            : (this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
              (r += ns([0, 0], [1, 0], [0.68, 0.28], [1, 1], t)[0])),
            this.sbAni.progressEnd(e ? 1 : 0, r, n);
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
        return i$;
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
function l$() {
  if (typeof customElements > 'u') return;
  ['ion-nav'].forEach((t) => {
    switch (t) {
      case 'ion-nav':
        customElements.get(t) || customElements.define(t, s$);
        break;
    }
  });
}
const a$ = l$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const u$ =
    ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}',
  c$ =
    ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}',
  d$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionStyle = ct(this, 'ionStyle', 7)),
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
        const e = this.getSize();
        this.ionStyle.emit({ [`title-${e}`]: !0 });
      }
      getSize() {
        return this.size !== void 0 ? this.size : 'default';
      }
      render() {
        const e = Ze(this),
          t = this.getSize();
        return H(
          qt,
          { class: qs(this.color, { [e]: !0, [`title-${t}`]: !0, 'title-rtl': document.dir === 'rtl' }) },
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
        return { ios: u$, md: c$ };
      }
    },
    [33, 'ion-title', { color: [513], size: [1] }]
  );
function f$() {
  if (typeof customElements > 'u') return;
  ['ion-title'].forEach((t) => {
    switch (t) {
      case 'ion-title':
        customElements.get(t) || customElements.define(t, d$);
        break;
    }
  });
}
const p$ = f$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const h$ =
    ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}',
  m$ =
    ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}',
  g$ = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost(), this.__attachShadow(), (this.childrenStyles = new Map()), (this.color = void 0);
      }
      componentWillLoad() {
        const e = Array.from(this.el.querySelectorAll('ion-buttons')),
          t = e.find((o) => o.slot === 'start');
        t && t.classList.add('buttons-first-slot');
        const n = e.reverse(),
          r =
            n.find((o) => o.slot === 'end') ||
            n.find((o) => o.slot === 'primary') ||
            n.find((o) => o.slot === 'secondary');
        r && r.classList.add('buttons-last-slot');
      }
      childrenStyle(e) {
        e.stopPropagation();
        const t = e.target.tagName,
          n = e.detail,
          r = {},
          o = this.childrenStyles.get(t) || {};
        let i = !1;
        Object.keys(n).forEach((s) => {
          const l = `toolbar-${s}`,
            a = n[s];
          a !== o[l] && (i = !0), a && (r[l] = !0);
        }),
          i && (this.childrenStyles.set(t, r), Na(this));
      }
      render() {
        const e = Ze(this),
          t = {};
        return (
          this.childrenStyles.forEach((n) => {
            Object.assign(t, n);
          }),
          H(
            qt,
            {
              class: Object.assign(
                Object.assign({}, t),
                qs(this.color, { [e]: !0, 'in-toolbar': oc('ion-toolbar', this.el) })
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
        return { ios: h$, md: m$ };
      }
    },
    [33, 'ion-toolbar', { color: [513] }, [[0, 'ionStyle', 'childrenStyle']]]
  );
function v$() {
  if (typeof customElements > 'u') return;
  ['ion-toolbar'].forEach((t) => {
    switch (t) {
      case 'ion-toolbar':
        customElements.get(t) || customElements.define(t, g$);
        break;
    }
  });
}
const y$ = v$,
  w$ =
    'html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}',
  b$ = Ot(
    class extends At {
      constructor() {
        super(), this.__registerHost();
      }
      componentDidLoad() {
        x$(async () => {
          const e = on(window, 'hybrid');
          if (
            (le.getBoolean('_testing') || _t(() => import('./index9-9fea4353.js'), []).then((n) => n.startTapClick(le)),
            le.getBoolean('statusTap', e) &&
              _t(() => import('./status-tap-daf6df15.js'), []).then((n) => n.startStatusTap()),
            le.getBoolean('inputShims', $$()))
          ) {
            const n = on(window, 'ios') ? 'ios' : 'android';
            _t(() => import('./input-shims-e0d1c5ce.js'), []).then((r) => r.startInputShims(le, n));
          }
          const t = await _t(() => import('./hardware-back-button-77fd2980.js'), []);
          le.getBoolean('hardwareBackButton', e) ? t.startHardwareBackButton() : t.blockHardwareBackButton(),
            typeof window < 'u' &&
              _t(() => import('./keyboard-78b51126.js'), []).then((n) => n.startKeyboardAssist(window)),
            _t(() => import('./focus-visible-56d4fbba.js'), []).then(
              (n) => (this.focusVisible = n.startFocusVisible())
            );
        });
      }
      async setFocus(e) {
        this.focusVisible && this.focusVisible.setFocus(e);
      }
      render() {
        const e = Ze(this);
        return H(qt, {
          class: { [e]: !0, 'ion-page': !0, 'force-statusbar-padding': le.getBoolean('_forceStatusbarPadding') },
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return w$;
      }
    },
    [0, 'ion-app', { setFocus: [64] }]
  ),
  $$ = () => !!((on(window, 'ios') && on(window, 'mobile')) || (on(window, 'android') && on(window, 'mobileweb'))),
  x$ = (e) => {
    'requestIdleCallback' in window ? window.requestIdleCallback(e) : setTimeout(e, 32);
  };
function k$() {
  if (typeof customElements > 'u') return;
  ['ion-app'].forEach((t) => {
    switch (t) {
      case 'ion-app':
        customElements.get(t) || customElements.define(t, b$);
        break;
    }
  });
}
const E$ = k$,
  S$ = ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
  C$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = ct(this, 'ionNavWillLoad', 7)),
          (this.ionNavWillChange = ct(this, 'ionNavWillChange', 3)),
          (this.ionNavDidChange = ct(this, 'ionNavDidChange', 3)),
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
        const e = () => {
          (this.gestureOrAnimationInProgress = !0), this.swipeHandler && this.swipeHandler.onStart();
        };
        (this.gesture = (await _t(() => import('./swipe-back-6af64a67.js'), [])).createSwipeBackGesture(
          this.el,
          () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(),
          () => e(),
          (t) => {
            var n;
            return (n = this.ani) === null || n === void 0 ? void 0 : n.progressStep(t);
          },
          (t, n, r) => {
            if (this.ani) {
              this.ani.onFinish(
                () => {
                  (this.gestureOrAnimationInProgress = !1), this.swipeHandler && this.swipeHandler.onEnd(t);
                },
                { oneTimeCallback: !0 }
              );
              let o = t ? -0.001 : 0.001;
              t
                ? (o += ns([0, 0], [0.32, 0.72], [0, 1], [1, 1], n)[0])
                : (this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                  (o += ns([0, 0], [1, 0], [0.68, 0.28], [1, 1], n)[0])),
                this.ani.progressEnd(t ? 1 : 0, o, r);
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
      async commit(e, t, n) {
        const r = await this.lock();
        let o = !1;
        try {
          o = await this.transition(e, t, n);
        } catch (i) {
          console.error(i);
        }
        return r(), o;
      }
      async setRouteId(e, t, n, r) {
        return {
          changed: await this.setRoot(e, t, {
            duration: n === 'root' ? 0 : void 0,
            direction: n === 'back' ? 'back' : 'forward',
            animationBuilder: r,
          }),
          element: this.activeEl,
        };
      }
      async getRouteId() {
        const e = this.activeEl;
        return e ? { id: e.tagName, element: e, params: this.activeParams } : void 0;
      }
      async setRoot(e, t, n) {
        if (this.activeComponent === e && Om(t, this.activeParams)) return !1;
        const r = this.activeEl,
          o = await Km(this.delegate, this.el, e, ['ion-page', 'ion-page-invisible'], t);
        return (
          (this.activeComponent = e),
          (this.activeEl = o),
          (this.activeParams = t),
          await this.commit(o, r, n),
          await Rb(this.delegate, r),
          !0
        );
      }
      async transition(e, t, n = {}) {
        if (t === e) return !1;
        this.ionNavWillChange.emit();
        const { el: r, mode: o } = this,
          i = this.animated && le.getBoolean('animated', !0),
          s = n.animationBuilder || this.animation || le.get('navAnimation');
        return (
          await Nm(
            Object.assign(
              Object.assign(
                {
                  mode: o,
                  animated: i,
                  enteringEl: e,
                  leavingEl: t,
                  baseEl: r,
                  deepWait: Bw(r),
                  progressCallback: n.progressAnimation
                    ? (l) => {
                        l !== void 0 && !this.gestureOrAnimationInProgress
                          ? ((this.gestureOrAnimationInProgress = !0),
                            l.onFinish(
                              () => {
                                (this.gestureOrAnimationInProgress = !1),
                                  this.swipeHandler && this.swipeHandler.onEnd(!1);
                              },
                              { oneTimeCallback: !0 }
                            ),
                            l.progressEnd(0, 0, 0))
                          : (this.ani = l);
                      }
                    : void 0,
                },
                n
              ),
              { animationBuilder: s }
            )
          ),
          this.ionNavDidChange.emit(),
          !0
        );
      }
      async lock() {
        const e = this.waitPromise;
        let t;
        return (this.waitPromise = new Promise((n) => (t = n))), e !== void 0 && (await e), t;
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
        return S$;
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
function T$() {
  if (typeof customElements > 'u') return;
  ['ion-router-outlet'].forEach((t) => {
    switch (t) {
      case 'ion-router-outlet':
        customElements.get(t) || customElements.define(t, C$);
        break;
    }
  });
}
const P$ = T$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const _$ =
    ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-400, #999999));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}',
  R$ =
    ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}',
  L$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabBarChanged = ct(this, 'ionTabBarChanged', 7)),
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
      connectedCallback() {
        this.keyboardCtrl = Qb((e) => {
          this.keyboardVisible = e;
        });
      }
      disconnectedCallback() {
        this.keyboardCtrl && this.keyboardCtrl.destroy();
      }
      render() {
        const { color: e, translucent: t, keyboardVisible: n } = this,
          r = Ze(this),
          o = n && this.el.getAttribute('slot') !== 'top';
        return H(
          qt,
          {
            role: 'tablist',
            'aria-hidden': o ? 'true' : null,
            class: qs(e, { [r]: !0, 'tab-bar-translucent': t, 'tab-bar-hidden': o }),
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
        return { ios: _$, md: R$ };
      }
    },
    [33, 'ion-tab-bar', { color: [513], selectedTab: [1, 'selected-tab'], translucent: [4], keyboardVisible: [32] }]
  );
function I$() {
  if (typeof customElements > 'u') return;
  ['ion-tab-bar'].forEach((t) => {
    switch (t) {
      case 'ion-tab-bar':
        customElements.get(t) || customElements.define(t, L$);
        break;
    }
  });
}
const O$ = I$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const A$ =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
  M$ =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}[dir=rtl] ::slotted(ion-icon),:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
  N$ = Ot(
    class extends At {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabButtonClick = ct(this, 'ionTabButtonClick', 7)),
          (this.inheritedAttributes = {}),
          (this.onKeyUp = (e) => {
            (e.key === 'Enter' || e.key === ' ') && this.selectTab(e);
          }),
          (this.onClick = (e) => {
            this.selectTab(e);
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
      onTabBarChanged(e) {
        const t = e.target,
          n = this.el.parentElement;
        (e.composedPath().includes(n) || (t != null && t.contains(this.el))) &&
          (this.selected = this.tab === e.detail.tab);
      }
      componentWillLoad() {
        (this.inheritedAttributes = Object.assign({}, Lm(this.el, ['aria-label']))),
          this.layout === void 0 && (this.layout = le.get('tabButtonLayout', 'icon-top'));
      }
      selectTab(e) {
        this.tab !== void 0 &&
          (this.disabled || this.ionTabButtonClick.emit({ tab: this.tab, href: this.href, selected: this.selected }),
          e.preventDefault());
      }
      get hasLabel() {
        return !!this.el.querySelector('ion-label');
      }
      get hasIcon() {
        return !!this.el.querySelector('ion-icon');
      }
      render() {
        const {
            disabled: e,
            hasIcon: t,
            hasLabel: n,
            href: r,
            rel: o,
            target: i,
            layout: s,
            selected: l,
            tab: a,
            inheritedAttributes: u,
          } = this,
          c = Ze(this),
          d = { download: this.download, href: r, rel: o, target: i };
        return H(
          qt,
          {
            onClick: this.onClick,
            onKeyup: this.onKeyUp,
            id: a !== void 0 ? `tab-button-${a}` : null,
            class: {
              [c]: !0,
              'tab-selected': l,
              'tab-disabled': e,
              'tab-has-label': n,
              'tab-has-icon': t,
              'tab-has-label-only': n && !t,
              'tab-has-icon-only': t && !n,
              [`tab-layout-${s}`]: !0,
              'ion-activatable': !0,
              'ion-selectable': !0,
              'ion-focusable': !0,
            },
          },
          H(
            'a',
            Object.assign(
              {},
              d,
              {
                class: 'button-native',
                part: 'native',
                role: 'tab',
                'aria-selected': l ? 'true' : null,
                'aria-disabled': e ? 'true' : null,
                tabindex: e ? '-1' : void 0,
              },
              u
            ),
            H('span', { class: 'button-inner' }, H('slot', null)),
            c === 'md' && H('ion-ripple-effect', { type: 'unbounded' })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: A$, md: M$ };
      }
    },
    [
      33,
      'ion-tab-button',
      { disabled: [4], download: [1], href: [1], rel: [1], layout: [1025], selected: [1028], tab: [1], target: [1] },
      [[8, 'ionTabBarChanged', 'onTabBarChanged']],
    ]
  );
function D$() {
  if (typeof customElements > 'u') return;
  ['ion-tab-button', 'ion-ripple-effect'].forEach((t) => {
    switch (t) {
      case 'ion-tab-button':
        customElements.get(t) || customElements.define(t, N$);
        break;
      case 'ion-ripple-effect':
        customElements.get(t) || Db();
        break;
    }
  });
}
const z$ = D$,
  Zn = {
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
let Jn,
  Zm,
  Gs,
  Jm = !1,
  os = !1,
  lc = !1,
  Ye = !1,
  $f = null,
  Fa = !1;
const B$ = (e) => {
    const t = new URL(e, Le.$resourcesUrl$);
    return t.origin !== Bo.location.origin ? t.href : t.pathname;
  },
  Hn =
    (e, t = '') =>
    () => {},
  xf = 'http://www.w3.org/1999/xlink',
  kf = {},
  H$ = 'http://www.w3.org/2000/svg',
  j$ = 'http://www.w3.org/1999/xhtml',
  F$ = (e) => e != null,
  ac = (e) => ((e = typeof e), e === 'object' || e === 'function');
function U$(e) {
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
      u = (d) => {
        for (let f = 0; f < d.length; f++)
          (r = d[f]),
            Array.isArray(r)
              ? u(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((s = typeof e != 'function' && !ac(r)) && (r = String(r)),
                s && l ? (a[a.length - 1].$text$ += r) : a.push(s ? is(null, r) : r),
                (l = s));
      };
    if ((u(n), t)) {
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
    if (typeof e == 'function') return e(t === null ? {} : t, a, W$);
    const c = is(e, null);
    return (c.$attrs$ = t), a.length > 0 && (c.$children$ = a), (c.$key$ = o), (c.$name$ = i), c;
  },
  is = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  eg = {},
  V$ = (e) => e && e.$tag$ === eg,
  W$ = { forEach: (e, t) => e.map(Ef).forEach(t), map: (e, t) => e.map(Ef).map(t).map(K$) },
  Ef = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  K$ = (e) => {
    if (typeof e.vtag == 'function') {
      const n = Object.assign({}, e.vattrs);
      return e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), so(e.vtag, n, ...(e.vchildren || []));
    }
    const t = is(e.vtag, e.vtext);
    return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
  },
  Q$ = (e) => wx.map((t) => t(e)).find((t) => !!t),
  Y$ = (e, t) =>
    e != null && !ac(e)
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
  Sf = new WeakMap(),
  q$ = (e, t, n) => {
    let r = ls.get(e);
    kx && n ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t)) : (r = t),
      ls.set(e, r);
  },
  G$ = (e, t, n, r) => {
    var o;
    let i = tg(t, n);
    const s = ls.get(i);
    if (((e = e.nodeType === 11 ? e : St), s))
      if (typeof s == 'string') {
        e = e.head || e;
        let l = Sf.get(e),
          a;
        if ((l || Sf.set(e, (l = new Set())), !l.has(i))) {
          {
            (a = St.createElement('style')), (a.innerHTML = s);
            const u = (o = Le.$nonce$) !== null && o !== void 0 ? o : U$(St);
            u != null && a.setAttribute('nonce', u), e.insertBefore(a, e.querySelector('link'));
          }
          l && l.add(i);
        }
      } else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return i;
  },
  X$ = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      o = Hn('attachStyles', t.$tagName$),
      i = G$(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    r & 10 && ((n['s-sc'] = i), n.classList.add(i + '-h'), r & 2 && n.classList.add(i + '-s')), o();
  },
  tg = (e, t) => 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
  Cf = (e, t, n, r, o, i) => {
    if (n !== r) {
      let s = Rf(e, t),
        l = t.toLowerCase();
      if (t === 'class') {
        const a = e.classList,
          u = Tf(n),
          c = Tf(r);
        a.remove(...u.filter((d) => d && !c.includes(d))), a.add(...c.filter((d) => d && !u.includes(d)));
      } else if (t === 'style') {
        for (const a in n) (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
        for (const a in r)
          (!n || r[a] !== n[a]) && (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
      } else if (t !== 'key')
        if (t === 'ref') r && r(e);
        else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
          t[2] === '-' ? (t = t.slice(3)) : Rf(Bo, l) ? (t = l.slice(2)) : (t = l[2] + t.slice(3)),
            n && Le.rel(e, t, n, !1),
            r && Le.ael(e, t, r, !1);
        else {
          const a = ac(r);
          if ((s || (a && r !== null)) && !o)
            try {
              if (e.tagName.includes('-')) e[t] = r;
              else {
                const c = r ?? '';
                t === 'list' ? (s = !1) : (n == null || e[t] != c) && (e[t] = c);
              }
            } catch {}
          let u = !1;
          l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (u = !0)),
            r == null || r === !1
              ? (r !== !1 || e.getAttribute(t) === '') && (u ? e.removeAttributeNS(xf, t) : e.removeAttribute(t))
              : (!s || i & 4 || o) &&
                !a &&
                ((r = r === !0 ? '' : r), u ? e.setAttributeNS(xf, t, r) : e.setAttribute(t, r));
        }
    }
  },
  Z$ = /\s/,
  Tf = (e) => (e ? e.split(Z$) : []),
  ng = (e, t, n, r) => {
    const o = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || kf,
      s = t.$attrs$ || kf;
    for (r in i) r in s || Cf(o, r, i[r], void 0, n, t.$flags$);
    for (r in s) Cf(o, r, i[r], s[r], n, t.$flags$);
  },
  ss = (e, t, n, r) => {
    const o = t.$children$[n];
    let i = 0,
      s,
      l,
      a;
    if (
      (Jm || ((lc = !0), o.$tag$ === 'slot' && (Jn && r.classList.add(Jn + '-s'), (o.$flags$ |= o.$children$ ? 2 : 1))),
      o.$text$ !== null)
    )
      s = o.$elm$ = St.createTextNode(o.$text$);
    else if (o.$flags$ & 1) s = o.$elm$ = St.createTextNode('');
    else {
      if (
        (Ye || (Ye = o.$tag$ === 'svg'),
        (s = o.$elm$ = St.createElementNS(Ye ? H$ : j$, o.$flags$ & 2 ? 'slot-fb' : o.$tag$)),
        Ye && o.$tag$ === 'foreignObject' && (Ye = !1),
        ng(null, o, Ye),
        F$(Jn) && s['s-si'] !== Jn && s.classList.add((s['s-si'] = Jn)),
        o.$children$)
      )
        for (i = 0; i < o.$children$.length; ++i) (l = ss(e, o, i, s)), l && s.appendChild(l);
      o.$tag$ === 'svg' ? (Ye = !1) : s.tagName === 'foreignObject' && (Ye = !0);
    }
    return (
      (s['s-hn'] = Gs),
      o.$flags$ & 3 &&
        ((s['s-sr'] = !0),
        (s['s-cr'] = Zm),
        (s['s-sn'] = o.$name$ || ''),
        (a = e && e.$children$ && e.$children$[n]),
        a && a.$tag$ === o.$tag$ && e.$elm$ && Ro(e.$elm$, !1)),
      s
    );
  },
  Ro = (e, t) => {
    Le.$flags$ |= 1;
    const n = e.childNodes;
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r];
      o['s-hn'] !== Gs &&
        o['s-ol'] &&
        (ig(o).insertBefore(o, uc(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (lc = !0)),
        t && Ro(o, t);
    }
    Le.$flags$ &= -2;
  },
  rg = (e, t, n, r, o, i) => {
    let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
      l;
    for (s.shadowRoot && s.tagName === Gs && (s = s.shadowRoot); o <= i; ++o)
      r[o] && ((l = ss(null, n, o, e)), l && ((r[o].$elm$ = l), s.insertBefore(l, uc(t))));
  },
  og = (e, t, n, r, o) => {
    for (; t <= n; ++t)
      (r = e[t]) && ((o = r.$elm$), ag(r), (os = !0), o['s-ol'] ? o['s-ol'].remove() : Ro(o, !0), o.remove());
  },
  J$ = (e, t, n, r) => {
    let o = 0,
      i = 0,
      s = 0,
      l = 0,
      a = t.length - 1,
      u = t[0],
      c = t[a],
      d = r.length - 1,
      f = r[0],
      g = r[d],
      y,
      $;
    for (; o <= a && i <= d; )
      if (u == null) u = t[++o];
      else if (c == null) c = t[--a];
      else if (f == null) f = r[++i];
      else if (g == null) g = r[--d];
      else if (ui(u, f)) er(u, f), (u = t[++o]), (f = r[++i]);
      else if (ui(c, g)) er(c, g), (c = t[--a]), (g = r[--d]);
      else if (ui(u, g))
        (u.$tag$ === 'slot' || g.$tag$ === 'slot') && Ro(u.$elm$.parentNode, !1),
          er(u, g),
          e.insertBefore(u.$elm$, c.$elm$.nextSibling),
          (u = t[++o]),
          (g = r[--d]);
      else if (ui(c, f))
        (u.$tag$ === 'slot' || g.$tag$ === 'slot') && Ro(c.$elm$.parentNode, !1),
          er(c, f),
          e.insertBefore(c.$elm$, u.$elm$),
          (c = t[--a]),
          (f = r[++i]);
      else {
        for (s = -1, l = o; l <= a; ++l)
          if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
            s = l;
            break;
          }
        s >= 0
          ? (($ = t[s]),
            $.$tag$ !== f.$tag$ ? (y = ss(t && t[i], n, s, e)) : (er($, f), (t[s] = void 0), (y = $.$elm$)),
            (f = r[++i]))
          : ((y = ss(t && t[i], n, i, e)), (f = r[++i])),
          y && ig(u.$elm$).insertBefore(y, uc(u.$elm$));
      }
    o > a ? rg(e, r[d + 1] == null ? null : r[d + 1].$elm$, n, r, i, d) : i > d && og(t, o, a);
  },
  ui = (e, t) => (e.$tag$ === t.$tag$ ? (e.$tag$ === 'slot' ? e.$name$ === t.$name$ : e.$key$ === t.$key$) : !1),
  uc = (e) => (e && e['s-ol']) || e,
  ig = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  er = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      r = e.$children$,
      o = t.$children$,
      i = t.$tag$,
      s = t.$text$;
    let l;
    s === null
      ? ((Ye = i === 'svg' ? !0 : i === 'foreignObject' ? !1 : Ye),
        i === 'slot' || ng(e, t, Ye),
        r !== null && o !== null
          ? J$(n, r, t, o)
          : o !== null
          ? (e.$text$ !== null && (n.textContent = ''), rg(n, null, t, o, 0, o.length - 1))
          : r !== null && og(r, 0, r.length - 1),
        Ye && i === 'svg' && (Ye = !1))
      : (l = n['s-cr'])
      ? (l.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  sg = (e) => {
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
        sg(n);
      }
  },
  bt = [],
  lg = (e) => {
    let t,
      n,
      r,
      o,
      i,
      s,
      l = 0;
    const a = e.childNodes,
      u = a.length;
    for (; l < u; l++) {
      if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
        for (r = n.parentNode.childNodes, o = t['s-sn'], s = r.length - 1; s >= 0; s--)
          (n = r[s]),
            !n['s-cn'] &&
              !n['s-nr'] &&
              n['s-hn'] !== t['s-hn'] &&
              (Pf(n, o)
                ? ((i = bt.find((c) => c.$nodeToRelocate$ === n)),
                  (os = !0),
                  (n['s-sn'] = n['s-sn'] || o),
                  i ? (i.$slotRefNode$ = t) : bt.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n['s-sr'] &&
                    bt.map((c) => {
                      Pf(c.$nodeToRelocate$, n['s-sn']) &&
                        ((i = bt.find((d) => d.$nodeToRelocate$ === n)),
                        i && !c.$slotRefNode$ && (c.$slotRefNode$ = i.$slotRefNode$));
                    }))
                : bt.some((c) => c.$nodeToRelocate$ === n) || bt.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && lg(t);
    }
  },
  Pf = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute('slot') === null && t === '') || e.getAttribute('slot') === t
      : e['s-sn'] === t
      ? !0
      : t === '',
  ag = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(ag);
  },
  ex = (e, t) => {
    const n = e.$hostElement$,
      r = e.$cmpMeta$,
      o = e.$vnode$ || is(null, null),
      i = V$(t) ? t : so(null, null, t);
    (Gs = n.tagName),
      r.$attrsToReflect$ && ((i.$attrs$ = i.$attrs$ || {}), r.$attrsToReflect$.map(([s, l]) => (i.$attrs$[l] = n[s]))),
      (i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = o.$elm$ = n.shadowRoot || n),
      (Jn = n['s-sc']),
      (Zm = n['s-cr']),
      (Jm = (r.$flags$ & 1) !== 0),
      (os = !1),
      er(o, i);
    {
      if (((Le.$flags$ |= 1), lc)) {
        lg(i.$elm$);
        let s,
          l,
          a,
          u,
          c,
          d,
          f = 0;
        for (; f < bt.length; f++)
          (s = bt[f]),
            (l = s.$nodeToRelocate$),
            l['s-ol'] || ((a = St.createTextNode('')), (a['s-nr'] = l), l.parentNode.insertBefore((l['s-ol'] = a), l));
        for (f = 0; f < bt.length; f++)
          if (((s = bt[f]), (l = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              u = s.$slotRefNode$.parentNode, c = s.$slotRefNode$.nextSibling, a = l['s-ol'];
              (a = a.previousSibling);

            )
              if (
                ((d = a['s-nr']),
                d && d['s-sn'] === l['s-sn'] && u === d.parentNode && ((d = d.nextSibling), !d || !d['s-nr']))
              ) {
                c = d;
                break;
              }
            ((!c && u !== l.parentNode) || l.nextSibling !== c) &&
              l !== c &&
              (!l['s-hn'] && l['s-ol'] && (l['s-hn'] = l['s-ol'].parentNode.nodeName), u.insertBefore(l, c));
          } else l.nodeType === 1 && (l.hidden = !0);
      }
      os && sg(i.$elm$), (Le.$flags$ &= -2), (bt.length = 0);
    }
  },
  tx = (e, t) => {},
  ug = (e, t) => ((e.$flags$ |= 16), tx(e, e.$ancestorComponent$), Cx(() => nx(e, t))),
  nx = (e, t) => {
    const n = e.$hostElement$,
      r = Hn('scheduleUpdate', e.$cmpMeta$.$tagName$),
      o = n;
    let i;
    return (
      t ? (i = br(o, 'componentWillLoad')) : (i = br(o, 'componentWillUpdate')),
      (i = _f(i, () => br(o, 'componentWillRender'))),
      r(),
      _f(i, () => rx(e, o, t))
    );
  },
  rx = async (e, t, n) => {
    const r = e.$hostElement$,
      o = Hn('update', e.$cmpMeta$.$tagName$);
    r['s-rc'], n && X$(e);
    const i = Hn('render', e.$cmpMeta$.$tagName$);
    ox(e, t, r), i(), o(), ix(e);
  },
  ox = (e, t, n) => {
    try {
      ($f = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Zn.hasRenderFn || Zn.reflect) && (Zn.vdomRender || Zn.reflect) && (Zn.hydrateServerSide || ex(e, t));
    } catch (l) {
      zo(l, e.$hostElement$);
    }
    return ($f = null), null;
  },
  ix = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = Hn('postUpdate', t),
      o = n;
    e.$ancestorComponent$,
      br(o, 'componentDidRender'),
      e.$flags$ & 64 ? (br(o, 'componentDidUpdate'), r()) : ((e.$flags$ |= 64), br(o, 'componentDidLoad'), r());
  },
  br = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (r) {
        zo(r);
      }
  },
  _f = (e, t) => (e && e.then ? e.then(t) : t()),
  sx = (e, t) => Xs(e).$instanceValues$.get(t),
  lx = (e, t, n, r) => {
    const o = Xs(e),
      i = e,
      s = o.$instanceValues$.get(t),
      l = o.$flags$,
      a = i;
    n = Y$(n, r.$members$[t][0]);
    const u = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !u) {
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
          ug(o, !1);
        }
      }
    }
  },
  ax = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const r = Object.entries(t.$members$),
        o = e.prototype;
      r.map(([i, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(o, i, {
            get() {
              return sx(this, i);
            },
            set(l) {
              lx(this, i, l, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const i = new Map();
        (o.attributeChangedCallback = function (s, l, a) {
          Le.jmp(() => {
            const u = i.get(s);
            if (this.hasOwnProperty(u)) (a = this[u]), delete this[u];
            else if (o.hasOwnProperty(u) && typeof this[u] == 'number' && this[u] == a) return;
            this[u] = a === null && typeof this[u] == 'boolean' ? !1 : a;
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
  ux = async (e, t, n, r, o) => {
    if (
      !(t.$flags$ & 32) &&
      ((o = e.constructor),
      (t.$flags$ |= 32),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      o.style)
    ) {
      let s = o.style;
      typeof s != 'string' && (s = s[(t.$modeName$ = Q$(e))]);
      const l = tg(n, t.$modeName$);
      if (!ls.has(l)) {
        const a = Hn('registerStyles', n.$tagName$);
        q$(l, s, !!(n.$flags$ & 1)), a();
      }
    }
    t.$ancestorComponent$, (() => ug(t, !0))();
  },
  cx = (e) => {},
  dx = (e) => {
    if (!(Le.$flags$ & 1)) {
      const t = Xs(e),
        n = t.$cmpMeta$,
        r = Hn('connectedCallback', n.$tagName$);
      t.$flags$ & 1
        ? (cg(e, t, n.$listeners$), cx(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && fx(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([o, [i]]) => {
              if (i & 31 && e.hasOwnProperty(o)) {
                const s = e[o];
                delete e[o], (e[o] = s);
              }
            }),
          ux(e, t, n)),
        r();
    }
  },
  fx = (e) => {
    const t = (e['s-cr'] = St.createComment(''));
    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
  },
  px = (e) => {
    if (!(Le.$flags$ & 1)) {
      const t = Xs(e);
      t.$rmListeners$ && (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  hx = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    (n.$members$ = t[2]),
      (n.$listeners$ = t[3]),
      (n.$watchers$ = e.$watchers$),
      (n.$attrsToReflect$ = []),
      !Lf && n.$flags$ & 1 && (n.$flags$ |= 8);
    const r = e.prototype.connectedCallback,
      o = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          yx(this, n);
        },
        connectedCallback() {
          dx(this), r && r.call(this);
        },
        disconnectedCallback() {
          px(this), o && o.call(this);
        },
        __attachShadow() {
          Lf ? this.attachShadow({ mode: 'open', delegatesFocus: !!(n.$flags$ & 16) }) : (this.shadowRoot = this);
        },
      }),
      (e.is = n.$tagName$),
      ax(e, n)
    );
  },
  cg = (e, t, n, r) => {
    n &&
      n.map(([o, i, s]) => {
        const l = gx(e, o),
          a = mx(t, s),
          u = vx(o);
        Le.ael(l, i, a, u), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Le.rel(l, i, a, u));
      });
  },
  mx = (e, t) => (n) => {
    try {
      Zn.lazyLoad || e.$hostElement$[t](n);
    } catch (r) {
      zo(r);
    }
  },
  gx = (e, t) => (t & 4 ? St : t & 8 ? Bo : t & 16 ? St.body : e),
  vx = (e) => ($x ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0),
  dg = new WeakMap(),
  Xs = (e) => dg.get(e),
  yx = (e, t) => {
    const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
    return cg(e, n, t.$listeners$), dg.set(e, n);
  },
  Rf = (e, t) => t in e,
  zo = (e, t) => (0, console.error)(e, t),
  ls = new Map(),
  wx = [],
  Bo = typeof window < 'u' ? window : {},
  St = Bo.document || { head: {} },
  bx = Bo.HTMLElement || class {},
  Le = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Lf = !0,
  $x = (() => {
    let e = !1;
    try {
      St.addEventListener(
        'e',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            e = !0;
          },
        })
      );
    } catch {}
    return e;
  })(),
  xx = (e) => Promise.resolve(e),
  kx = (() => {
    try {
      return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function';
    } catch {}
    return !1;
  })(),
  If = [],
  fg = [],
  Ex = (e, t) => (n) => {
    e.push(n), Fa || ((Fa = !0), t && Le.$flags$ & 4 ? Sx(Ua) : Le.raf(Ua));
  },
  Of = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        zo(n);
      }
    e.length = 0;
  },
  Ua = () => {
    Of(If), Of(fg), (Fa = If.length > 0) && Le.raf(Ua);
  },
  Sx = (e) => xx().then(e),
  Cx = Ex(fg, !0);
let Al;
const Tx = () => {
    if (typeof window > 'u') return new Map();
    if (!Al) {
      const e = window;
      (e.Ionicons = e.Ionicons || {}), (Al = e.Ionicons.map = e.Ionicons.map || new Map());
    }
    return Al;
  },
  Px = (e) => {
    let t = Ml(e.src);
    return (
      t ||
      ((t = pg(e.name, e.icon, e.mode, e.ios, e.md)),
      t ? _x(t) : e.icon && ((t = Ml(e.icon)), t || ((t = Ml(e.icon[e.mode])), t)) ? t : null)
    );
  },
  _x = (e) => {
    const t = Tx().get(e);
    return t || B$(`svg/${e}.svg`);
  },
  pg = (e, t, n, r, o) => (
    (n = (n && ci(n)) === 'ios' ? 'ios' : 'md'),
    r && n === 'ios'
      ? (e = ci(r))
      : o && n === 'md'
      ? (e = ci(o))
      : (!e && t && !hg(t) && (e = t), as(e) && (e = ci(e))),
    !as(e) || e.trim() === '' || e.replace(/[a-z]|-|\d/gi, '') !== '' ? null : e
  ),
  Ml = (e) => (as(e) && ((e = e.trim()), hg(e)) ? e : null),
  hg = (e) => e.length > 0 && /(\/|\.)/.test(e),
  as = (e) => typeof e == 'string',
  ci = (e) => e.toLowerCase(),
  Rx = (e, t = []) => {
    const n = {};
    return (
      t.forEach((r) => {
        e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
      }),
      n
    );
  },
  Lx = (e) =>
    e && e.dir !== ''
      ? e.dir.toLowerCase() === 'rtl'
      : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl',
  Ix = (e) => {
    const t = document.createElement('div');
    t.innerHTML = e;
    for (let r = t.childNodes.length - 1; r >= 0; r--)
      t.childNodes[r].nodeName.toLowerCase() !== 'svg' && t.removeChild(t.childNodes[r]);
    const n = t.firstElementChild;
    if (n && n.nodeName.toLowerCase() === 'svg') {
      const r = n.getAttribute('class') || '';
      if ((n.setAttribute('class', (r + ' s-ion-icon').trim()), mg(n))) return t.innerHTML;
    }
    return '';
  },
  mg = (e) => {
    if (e.nodeType === 1) {
      if (e.nodeName.toLowerCase() === 'script') return !1;
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        if (as(n) && n.toLowerCase().indexOf('on') === 0) return !1;
      }
      for (let t = 0; t < e.childNodes.length; t++) if (!mg(e.childNodes[t])) return !1;
    }
    return !0;
  },
  Ox = (e) => e.startsWith('data:image/svg+xml'),
  Ax = (e) => e.indexOf(';utf8,') !== -1,
  _n = new Map(),
  Af = new Map();
let Nl;
const Mx = (e, t) => {
    let n = Af.get(e);
    if (!n)
      if (typeof fetch < 'u' && typeof document < 'u')
        if (Ox(e) && Ax(e)) {
          Nl || (Nl = new DOMParser());
          const o = Nl.parseFromString(e, 'text/html').querySelector('svg');
          return o && _n.set(e, o.outerHTML), Promise.resolve();
        } else
          (n = fetch(e).then((r) => {
            if (r.ok)
              return r.text().then((o) => {
                o && t !== !1 && (o = Ix(o)), _n.set(e, o || '');
              });
            _n.set(e, '');
          })),
            Af.set(e, n);
      else return _n.set(e, ''), Promise.resolve();
    return n;
  },
  Nx =
    ':host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}',
  Dx = hx(
    class extends bx {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.iconName = null),
          (this.inheritedAttributes = {}),
          (this.isVisible = !1),
          (this.mode = zx()),
          (this.lazy = !1),
          (this.sanitize = !0);
      }
      componentWillLoad() {
        this.inheritedAttributes = Rx(this.el, ['aria-label']);
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
          const e = Px(this);
          e &&
            (_n.has(e)
              ? (this.svgContent = _n.get(e))
              : Mx(e, this.sanitize).then(() => (this.svgContent = _n.get(e))));
        }
        this.iconName = pg(this.name, this.icon, this.mode, this.ios, this.md);
      }
      render() {
        const { iconName: e, el: t, inheritedAttributes: n } = this,
          r = this.mode || 'md',
          o = this.flipRtl || (e && (e.indexOf('arrow') > -1 || e.indexOf('chevron') > -1) && this.flipRtl !== !1);
        return so(
          eg,
          Object.assign(
            {
              role: 'img',
              class: Object.assign(Object.assign({ [r]: !0 }, Bx(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                'flip-rtl': !!o && Lx(t),
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
        return Nx;
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
  zx = () => (typeof document < 'u' && document.documentElement.getAttribute('mode')) || 'md',
  Bx = (e) => (e ? { 'ion-color': !0, [`ion-color-${e}`]: !0 } : null);
function Hx() {
  if (typeof customElements > 'u') return;
  ['ion-icon'].forEach((t) => {
    switch (t) {
      case 'ion-icon':
        customElements.get(t) || customElements.define(t, Dx);
        break;
    }
  });
}
const jx = Hx,
  cc = w.createContext({
    onIonViewWillEnter: () => {},
    ionViewWillEnter: () => {},
    onIonViewDidEnter: () => {},
    ionViewDidEnter: () => {},
    onIonViewWillLeave: () => {},
    ionViewWillLeave: () => {},
    onIonViewDidLeave: () => {},
    ionViewDidLeave: () => {},
  }),
  Fx = class {
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
  xn = w.createContext({
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
  Ux = (e) =>
    e
      .toLowerCase()
      .split('-')
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(''),
  gg = (e) => e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`),
  Vx = (e, t, n = {}) => {
    if (e instanceof Element) {
      const r = Wx(e.classList, t, n);
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
              vg(s) || Kx(e, s, t[o]);
            } else (e[o] = t[o]), typeof t[o] === 'string' && e.setAttribute(gg(o), t[o]);
        });
    }
  },
  Wx = (e, t, n) => {
    const r = t.className || t.class,
      o = n.className || n.class,
      i = Dl(e),
      s = Dl(r ? r.split(' ') : []),
      l = Dl(o ? o.split(' ') : []),
      a = [];
    return (
      i.forEach((u) => {
        s.has(u) ? (a.push(u), s.delete(u)) : l.has(u) || a.push(u);
      }),
      s.forEach((u) => a.push(u)),
      a.join(' ')
    );
  };
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const vg = (e) => {
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
  Kx = (e, t, n) => {
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
  Qx = (e, t) => {
    typeof e == 'function' ? e(t) : e != null && (e.current = t);
  },
  yg =
    (...e) =>
    (t) => {
      e.forEach((n) => {
        Qx(n, t);
      });
    },
  Yx = (e, t) => {
    const n = (r, o) => w.createElement(e, Object.assign({}, r, { forwardedRef: o }));
    return (n.displayName = t), w.forwardRef(n);
  },
  Mt = (e, t, n, r) => {
    r !== void 0 && r();
    const o = Ux(e),
      i = class extends w.Component {
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
          Vx(this.componentEl, this.props, s);
        }
        render() {
          const s = this.props,
            { children: l, forwardedRef: a, style: u, className: c, ref: d } = s,
            f = We(s, ['children', 'forwardedRef', 'style', 'className', 'ref']);
          let g = Object.keys(f).reduce(($, A) => {
            const h = f[A];
            if (A.indexOf('on') === 0 && A[2] === A[2].toUpperCase()) {
              const p = A.substring(2).toLowerCase();
              typeof document < 'u' && vg(p) && ($[A] = h);
            } else {
              const p = typeof h;
              (p === 'string' || p === 'boolean' || p === 'number') && ($[gg(A)] = h);
            }
            return $;
          }, {});
          n && (g = n(this.props, g));
          const y = Object.assign(Object.assign({}, g), { ref: yg(a, this.setComponentElRef), style: u });
          return $t.createElement(e, y, l);
        }
        static get displayName() {
          return o;
        }
      };
    return t && (i.contextType = t), Yx(i, o);
  },
  qx = Mt('ion-content', void 0, void 0, Wb),
  Mf = Mt('ion-header', void 0, void 0, r$),
  Nf = Mt('ion-title', void 0, void 0, p$),
  Df = Mt('ion-toolbar', void 0, void 0, y$),
  Ho = (e, t) => {
    const n = (r, o) => w.createElement(e, Object.assign({}, r, { forwardedRef: o }));
    return (n.displayName = t), w.forwardRef(n);
  },
  dc = () => {
    if (typeof window < 'u') {
      const e = window.Ionic;
      if (e && e.config) return e.config;
    }
    return null;
  },
  Gx = w.createContext({ addOverlay: () => {}, removeOverlay: () => {} }),
  Xx = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
    const [n, r] = $t.useState({}),
      o = $t.useRef({});
    (o.current = n),
      $t.useEffect(() => {
        e(i), t(s);
      }, []);
    const i = (a, u, c) => {
        const d = Object.assign({}, o.current);
        (d[a] = { component: u, containerElement: c }), r(d);
      },
      s = (a) => {
        const u = Object.assign({}, o.current);
        delete u[a], r(u);
      },
      l = Object.keys(n);
    return w.createElement(
      w.Fragment,
      null,
      l.map((a) => {
        const u = n[a];
        return M0.createPortal(u.component, u.containerElement, `overlay-${a}`);
      })
    );
  },
  Zx = Mt('ion-tab-button', void 0, void 0, z$),
  Jx = Mt('ion-tab-bar', void 0, void 0, O$),
  Va = Mt('ion-router-outlet', void 0, void 0, P$),
  ek = Mt('ion-app', void 0, void 0, E$),
  tk = Mt('ion-icon', void 0, void 0, jx),
  nk = (() =>
    class extends w.Component {
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
        return w.createElement(
          Gx.Provider,
          { value: this.ionContext },
          w.createElement(ek, Object.assign({}, this.props), this.props.children),
          w.createElement(Xx, {
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
  fc = w.createContext({ registerIonPage: () => {}, isInOutlet: () => !1 });
class wg extends w.PureComponent {
  constructor(t) {
    super(t),
      (this.ionPageElementRef = w.createRef()),
      (this.stableMergedRefs = yg(this.ionPageElementRef, this.props.forwardedRef));
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
    return w.createElement(
      cc.Consumer,
      null,
      (l) => (
        (this.ionLifeCycleContext = l),
        w.createElement(
          'div',
          Object.assign({ className: n ? `${n} ion-page` : 'ion-page', ref: this.stableMergedRefs }, s),
          r
        )
      )
    );
  }
  static get contextType() {
    return fc;
  }
}
class rk extends w.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.props,
      { className: n, children: r, forwardedRef: o } = t,
      i = We(t, ['className', 'children', 'forwardedRef']);
    return this.context.hasIonicRouter()
      ? w.createElement(
          wg,
          Object.assign({ className: n ? `${n}` : '', routeInfo: this.context.routeInfo, forwardedRef: o }, i),
          r
        )
      : w.createElement('div', Object.assign({ className: n ? `ion-page ${n}` : 'ion-page', ref: o }, i), r);
  }
  static get displayName() {
    return 'IonPage';
  }
  static get contextType() {
    return xn;
  }
}
const ok = Ho(rk, 'IonPage'),
  ik = (e, t) => {
    const n = new WeakMap();
    return {
      attachViewToDom: async (i, s, l, a) => {
        const u = document.createElement('div');
        a && u.classList.add(...a), i.appendChild(u);
        const c = s(l),
          d = ao.createPortal(c, u);
        return n.set(s, d), e(d), Promise.resolve(u);
      },
      removeViewFromDom: (i, s) => {
        const l = n.get(s);
        return l && t(l), Promise.resolve();
      },
    };
  },
  sk = Mt('ion-nav', void 0, void 0, a$),
  lk = (e) => {
    var { children: t, forwardedRef: n } = e,
      r = We(e, ['children', 'forwardedRef']);
    const [o, i] = $t.useState([]),
      a = ik(
        (u) => i([...o, u]),
        (u) => i(o.filter((c) => c !== u))
      );
    return w.createElement(sk, Object.assign({ delegate: a, ref: n }, r), o);
  };
Ho(lk, 'IonNav');
w.createContext({ activeTab: void 0, selectTab: () => !1 });
const ak = typeof HTMLElement < 'u' ? HTMLElement : class {};
class uk extends w.Component {
  constructor(t) {
    super(t), (this.outletIsReady = !1);
  }
  componentDidMount() {
    this.ionRouterOutlet &&
      (this.outletIsReady ||
        _o(this.ionRouterOutlet, () => {
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
    return w.createElement(
      cc.Consumer,
      null,
      (s) => (
        (this.ionLifeCycleContext = s),
        w.createElement(
          n,
          { routeInfo: o },
          w.createElement(Va, Object.assign({ setRef: (l) => (this.ionRouterOutlet = l) }, i), r)
        )
      )
    );
  }
  static get contextType() {
    return fc;
  }
}
class ck extends w.Component {
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
        ? w.createElement(uk, Object.assign({ StackManager: t, routeInfo: this.context.routeInfo }, i), r)
        : w.createElement(
            t,
            { routeInfo: this.context.routeInfo },
            w.createElement(Va, Object.assign({}, i, { forwardedRef: o }), r)
          )
      : w.createElement(Va, Object.assign({ ref: o }, this.props), this.props.children);
  }
  static get contextType() {
    return xn;
  }
}
const dk = Ho(ck, 'IonRouterOutlet'),
  zl = (() =>
    class extends w.Component {
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
        return w.createElement(Zx, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, t));
      }
      static get displayName() {
        return 'IonTabButton';
      }
    })();
class fk extends w.PureComponent {
  constructor(t) {
    super(t), (this.setActiveTabOnContext = (r) => {});
    const n = {};
    w.Children.forEach(t.children, (r) => {
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
      a = Object.keys(n.tabs).find((c) => {
        const d = n.tabs[c].originalHref;
        return t.routeInfo.pathname.startsWith(d);
      });
    w.Children.forEach(t.children, (c) => {
      if (c != null && typeof c == 'object' && c.props && (c.type === zl || c.type.isTabButton)) {
        const d = s[c.props.tab];
        (!d || d.originalHref !== c.props.href) &&
          (s[c.props.tab] = {
            originalHref: c.props.href,
            currentHref: c.props.href,
            originalRouteOptions: c.props.routeOptions,
            currentRouteOptions: c.props.routeOptions,
          });
      }
    });
    const { activeTab: u } = n;
    if (a && u) {
      const c = n.tabs[u].currentHref,
        d = n.tabs[u].currentRouteOptions;
      (a !== u ||
        c !== ((r = t.routeInfo) === null || r === void 0 ? void 0 : r.pathname) ||
        d !== ((o = t.routeInfo) === null || o === void 0 ? void 0 : o.routeOptions)) &&
        ((s[a] = {
          originalHref: s[a].originalHref,
          currentHref: t.routeInfo.pathname + (t.routeInfo.search || ''),
          originalRouteOptions: s[a].originalRouteOptions,
          currentRouteOptions: (i = t.routeInfo) === null || i === void 0 ? void 0 : i.routeOptions,
        }),
        t.routeInfo.routeAction === 'pop' &&
          a !== u &&
          (s[u] = {
            originalHref: s[u].originalHref,
            currentHref: s[u].originalHref,
            originalRouteOptions: s[u].originalRouteOptions,
            currentRouteOptions: s[u].currentRouteOptions,
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
        return w.cloneElement(n, {
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
    return w.createElement(
      Jx,
      Object.assign({}, this.props, { selectedTab: t }),
      w.Children.map(this.props.children, this.renderTabButton(t))
    );
  }
  static get contextType() {
    return xn;
  }
}
const pk = w.memo((e) => {
  var { forwardedRef: t } = e,
    n = We(e, ['forwardedRef']);
  const r = $t.useContext(xn);
  return w.createElement(
    fk,
    Object.assign({ ref: t }, n, {
      routeInfo: n.routeInfo || r.routeInfo || { pathname: window.location.pathname },
      onSetCurrentTab: r.setCurrentTab,
    }),
    n.children
  );
});
Ho(pk, 'IonTabBar');
class hk extends ak {
  constructor() {
    super();
  }
}
typeof window < 'u' &&
  window.customElements &&
  (window.customElements.get('ion-tabs') || window.customElements.define('ion-tabs', hk));
class mk extends w.PureComponent {
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
    let u;
    const c = dc(),
      d = l || (c == null ? void 0 : c.get('mode'));
    return (
      i || s
        ? d === 'ios'
          ? (u = (t = i ?? s) !== null && t !== void 0 ? t : o)
          : (u = (n = s ?? i) !== null && n !== void 0 ? n : o)
        : (u = o),
      w.createElement(tk, Object.assign({ ref: this.props.forwardedRef, icon: u }, a), this.props.children)
    );
  }
  static get contextType() {
    return xn;
  }
}
Ho(mk, 'IonIcon');
class pc extends w.PureComponent {
  render() {
    const t = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !pc
      ? (console.error(
          'You either do not have an Ionic Router package, or your router does not support using <IonRoute>'
        ),
        null)
      : w.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return xn;
  }
}
class bg extends w.PureComponent {
  render() {
    const t = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !bg
      ? (console.error(
          'You either do not have an Ionic Router package, or your router does not support using <IonRedirect>'
        ),
        null)
      : w.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return xn;
  }
}
const gk = w.createContext({
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
class Wk extends w.PureComponent {
  constructor(t) {
    super(t), (this.nodes = new Map()), (this.animation = qw(t.id));
  }
  setupAnimation(t) {
    const n = this.animation;
    this.nodes.size > 0 && n.addElement(Array.from(this.nodes.values())), zf(n, t), Bf(n, t);
  }
  componentDidMount() {
    const t = this.props;
    this.setupAnimation(t);
  }
  componentDidUpdate(t) {
    const n = this.animation,
      r = this.props;
    zf(n, r, t), vk(n, r, t), Bf(n, r, t);
  }
  render() {
    const { children: t } = this.props;
    return w.createElement(
      w.Fragment,
      null,
      w.Children.map(t, (n, r) => w.cloneElement(n, { ref: (o) => this.nodes.set(r, o) }))
    );
  }
}
const zf = (e, t = {}, n = {}) => {
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
    o && o !== n.from && (Array.isArray(o) ? o : [o]).forEach((u) => e.from(u.property, u.value));
    const i = t.to;
    i && i !== n.to && (Array.isArray(i) ? i : [i]).forEach((u) => e.to(u.property, u.value));
    const s = t.fromTo;
    s && s !== n.fromTo && (Array.isArray(s) ? s : [s]).forEach((u) => e.fromTo(u.property, u.fromValue, u.toValue));
    const l = t.onFinish;
    l && l !== n.onFinish && (Array.isArray(l) ? l : [l]).forEach((u) => e.onFinish(u.callback, u.opts));
  },
  vk = (e, t = {}, n = {}) => {
    var r, o, i, s, l;
    const { progressStart: a, progressStep: u, progressEnd: c } = t;
    a &&
      (((r = n.progressStart) === null || r === void 0 ? void 0 : r.forceLinearEasing) !==
        (a == null ? void 0 : a.forceLinearEasing) ||
        ((o = n.progressStart) === null || o === void 0 ? void 0 : o.step) !== (a == null ? void 0 : a.step)) &&
      e.progressStart(a.forceLinearEasing, a.step),
      u &&
        ((i = n.progressStep) === null || i === void 0 ? void 0 : i.step) !== (u == null ? void 0 : u.step) &&
        e.progressStep(u.step),
      c &&
        (((s = n.progressEnd) === null || s === void 0 ? void 0 : s.playTo) !== (c == null ? void 0 : c.playTo) ||
          ((l = n.progressEnd) === null || l === void 0 ? void 0 : l.step) !== (c == null ? void 0 : c.step) ||
          (n == null ? void 0 : n.dur) !== (c == null ? void 0 : c.dur)) &&
        e.progressEnd(c.playTo, c.step, c.dur);
  },
  Bf = (e, t = {}, n = {}) => {
    !n.play && t.play && e.play(),
      !n.pause && t.pause && e.pause(),
      !n.stop && t.stop && e.stop(),
      !n.destroy && t.destroy && e.destroy();
  },
  Hf = { main: 0 },
  us = (e = 'main') => {
    var t;
    const n = ((t = Hf[e]) !== null && t !== void 0 ? t : 0) + 1;
    return (Hf[e] = n), n.toString();
  },
  yk = (e = {}) => {
    typeof document < 'u' && document.documentElement.classList.add('ion-ce'), _b(Object.assign({}, e));
  },
  $g = w.createContext({
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
class jf extends w.Component {
  constructor(t) {
    super(t),
      (this.ionLifeCycleContext = new Fx()),
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
    return w.createElement(cc.Provider, { value: this.ionLifeCycleContext }, t && this.props.children);
  }
}
class wk {
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
class bk extends w.PureComponent {
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
    return wg;
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
    return w.createElement(
      xn.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      w.createElement(
        gk.Provider,
        { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) },
        this.props.children
      )
    );
  }
}
class $k {
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
class xk extends w.PureComponent {
  render() {
    return w.createElement(Aa, {
      path: this.props.path,
      exact: this.props.exact,
      render: this.props.render,
      computedMatch: this.props.computedMatch,
    });
  }
}
class kk extends $k {
  constructor() {
    super(),
      (this.createViewItem = this.createViewItem.bind(this)),
      (this.findViewItemByRouteInfo = this.findViewItemByRouteInfo.bind(this)),
      (this.findLeavingViewItemByRouteInfo = this.findLeavingViewItemByRouteInfo.bind(this)),
      (this.getChildrenToRender = this.getChildrenToRender.bind(this)),
      (this.findViewItemByPathname = this.findViewItemByPathname.bind(this));
  }
  createViewItem(t, n, r, o) {
    const i = { id: us('viewItem'), outletId: t, ionPageElement: o, reactElement: n, mount: !0, ionRoute: !1 },
      s = { exact: n.props.exact, path: n.props.path || n.props.from, component: n.props.component },
      l = Dn(r.pathname, s);
    return (
      n.type === pc && ((i.ionRoute = !0), (i.disableIonPageManagement = n.props.disableIonPageManagement)),
      (i.routeData = { match: l, childProps: n.props }),
      i
    );
  }
  getChildrenToRender(t, n, r) {
    const o = this.getViewItemsForOutlet(t);
    return (
      w.Children.forEach(n.props.children, (s) => {
        const l = o.find((a) => Ff(s, a.routeData.childProps.path || a.routeData.childProps.from));
        l && (l.reactElement = s);
      }),
      o.map((s) => {
        let l;
        if (s.ionRoute && !s.disableIonPageManagement)
          l = w.createElement(
            jf,
            { key: `view-${s.id}`, mount: s.mount, removeView: () => this.remove(s) },
            w.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
          );
        else {
          const a = Ff(s.reactElement, r.pathname);
          (l = w.createElement(
            jf,
            { key: `view-${s.id}`, mount: s.mount, removeView: () => this.remove(s) },
            w.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
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
    if (n) (l = this.getViewItemsForOutlet(n)), l.some(a), i || l.some(u);
    else {
      const c = this.getAllViewItems();
      c.some(a), i || c.some(u);
    }
    return { viewItem: i, match: s };
    function a(c) {
      if (o && !c.ionRoute) return !1;
      const d = {
          exact: r ? !0 : c.routeData.childProps.exact,
          path: c.routeData.childProps.path || c.routeData.childProps.from,
          component: c.routeData.childProps.component,
        },
        f = Dn(t, d);
      return f ? ((i = c), (s = f), !0) : !1;
    }
    function u(c) {
      return !c.routeData.childProps.path && !c.routeData.childProps.from
        ? ((s = { path: t, url: t, isExact: !0, params: {} }), (i = c), !0)
        : !1;
    }
  }
}
function Ff(e, t, n) {
  const r = { exact: n ? !0 : e.props.exact, path: e.props.path || e.props.from, component: e.props.component };
  return Dn(t, r);
}
function Ek(e) {
  let t;
  if ((typeof e == 'string' ? (t = e) : (t = e.outerHTML), document)) {
    const n = document.createElement('div');
    (n.innerHTML = t), (n.style.zIndex = '');
    const r = n.getElementsByTagName('ion-back-button');
    return r[0] && r[0].remove(), n.firstChild;
  }
}
const Uf = (e) => !e.classList.contains('ion-page-invisible') && !e.classList.contains('ion-page-hidden');
class Sk extends w.PureComponent {
  constructor(t) {
    super(t),
      (this.stackContextValue = { registerIonPage: this.registerIonPage.bind(this), isInOutlet: () => !0 }),
      (this.pendingPageTransition = !1),
      (this.registerIonPage = this.registerIonPage.bind(this)),
      (this.transitionPage = this.transitionPage.bind(this)),
      (this.handlePageTransition = this.handlePageTransition.bind(this)),
      (this.id = us('routerOutlet')),
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
      const s = Ck((r = this.ionRouterOutlet) === null || r === void 0 ? void 0 : r.props.children, t);
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
          Uf(o.ionPageElement) && i !== void 0 && !Uf(i.ionPageElement))
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
        const i = dc();
        if (!(i && i.get('swipeBackEnabled', t.mode === 'ios'))) return !1;
        const { routeInfo: l } = this.props,
          a =
            this.prevProps && this.prevProps.routeInfo.pathname === l.pushedByRoute
              ? this.prevProps.routeInfo
              : { pathname: l.pushedByRoute || '' },
          u = this.context.findViewItemByRouteInfo(a, this.id, !1);
        return !!u && u.mount && u.routeData.match.path !== l.pathname;
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
            u = this.context.findViewItemByRouteInfo(s, this.id, !1);
          if (a !== u && (a == null ? void 0 : a.ionPageElement) !== void 0) {
            const { ionPageElement: c } = a;
            c.setAttribute('aria-hidden', 'true'), c.classList.add('ion-page-hidden');
          }
        }
      };
    t.swipeHandler = { canStart: n, onStart: r, onEnd: o };
  }
  async transitionPage(t, n, r, o, i = !1) {
    const s = async (c, d) => {
        const f = this.skipTransition;
        f ? (this.skipTransition = !1) : (c.classList.add('ion-page'), c.classList.add('ion-page-invisible')),
          await l.commit(c, d, {
            duration: f || u === void 0 ? 0 : void 0,
            direction: u,
            showGoBack: !!t.pushedByRoute,
            progressAnimation: i,
            animationBuilder: t.routeAnimation,
          });
      },
      l = this.routerOutletElement,
      a = t.routeDirection === 'none' || t.routeDirection === 'root' ? void 0 : t.routeDirection,
      u = o ?? a;
    if (n && n.ionPageElement && this.routerOutletElement)
      if (r && r.ionPageElement && n === r)
        if (Tk(r.reactElement, t.pathname, !0)) {
          const d = Ek(r.ionPageElement.outerHTML);
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
      n = w.Children.only(t);
    this.ionRouterOutlet = n;
    const r = this.context.getChildrenToRender(this.id, this.ionRouterOutlet, this.props.routeInfo, () => {
      this.forceUpdate();
    });
    return w.createElement(
      fc.Provider,
      { value: this.stackContextValue },
      w.cloneElement(
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
    return $g;
  }
}
function Ck(e, t) {
  let n;
  return (
    w.Children.forEach(e, (r) => {
      const o = { exact: r.props.exact, path: r.props.path || r.props.from, component: r.props.component };
      Dn(t.pathname, o) && (n = r);
    }),
    n ||
      (w.Children.forEach(e, (r) => {
        r.props.path || r.props.from || (n = r);
      }),
      n)
  );
}
function Tk(e, t, n) {
  const r = { exact: n ? !0 : e.props.exact, path: e.props.path || e.props.from, component: e.props.component };
  return Dn(t, r);
}
class Pk extends w.PureComponent {
  constructor(t) {
    super(t),
      (this.exitViewFromOtherOutletHandlers = []),
      (this.locationHistory = new wk()),
      (this.viewStack = new kk()),
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
    const n = { id: us('routeInfo'), pathname: this.props.location.pathname, search: this.props.location.search };
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
          const u = this.locationHistory.current();
          if (u && u.pushedByRoute) {
            const c = this.locationHistory.findLastLocation(u);
            this.incomingRouteParams = Object.assign(Object.assign({}, c), {
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
        const u =
          this.incomingRouteParams.routeAction === 'push' && this.incomingRouteParams.routeDirection === 'forward';
        if (
          ((a = Object.assign(Object.assign({ id: us('routeInfo') }, this.incomingRouteParams), {
            lastPathname: s.pathname,
            pathname: t.pathname,
            search: t.search,
            params: this.props.match.params,
            prevRouteLastPathname: s.lastPathname,
          })),
          u)
        )
          (a.tab = s.tab), (a.pushedByRoute = s.pathname);
        else if (a.routeAction === 'pop') {
          const c = this.locationHistory.findLastLocation(a);
          a.pushedByRoute = c == null ? void 0 : c.pushedByRoute;
        } else if (a.routeAction === 'push' && a.tab !== s.tab) {
          const c = this.locationHistory.getCurrentRouteInfoForTab(a.tab);
          a.pushedByRoute = c == null ? void 0 : c.pushedByRoute;
        } else if (a.routeAction === 'replace') {
          const c = this.locationHistory.current(),
            d = c == null ? void 0 : c.pushedByRoute,
            f = d !== void 0 && d !== a.pathname ? d : a.pushedByRoute;
          (a.lastPathname = (c == null ? void 0 : c.pathname) || a.lastPathname),
            (a.prevRouteLastPathname = c == null ? void 0 : c.lastPathname),
            (a.pushedByRoute = f),
            (a.routeDirection = (c == null ? void 0 : c.routeDirection) || a.routeDirection),
            (a.routeAnimation = (c == null ? void 0 : c.routeAnimation) || a.routeAnimation);
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
    const r = dc();
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
    return w.createElement(
      $g.Provider,
      { value: this.routeMangerContextState },
      w.createElement(
        bk,
        {
          ionRoute: xk,
          ionRedirect: {},
          stackManager: Sk,
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
const Zs = Y1(Pk);
Zs.displayName = 'IonRouter';
class _k extends w.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      r = We(t, ['history']);
    (this.history = n || G0(r)),
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
    return w.createElement(
      No,
      Object.assign({ history: this.history }, r),
      w.createElement(Zs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
class Kk extends w.Component {
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
    return w.createElement(
      No,
      Object.assign({}, r),
      w.createElement(Zs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
class Qk extends w.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      r = We(t, ['history']);
    (this.history = n || J0(r)),
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
    return w.createElement(
      No,
      Object.assign({ history: this.history }, r),
      w.createElement(Zs, { registerHistoryListener: this.registerHistoryListener }, n)
    );
  }
}
const Rk = () =>
  lo('div', {
    className: 'container',
    children: [
      xe('strong', { children: 'Ready to create an app?' }),
      lo('p', {
        children: [
          'Start with Ionic',
          ' ',
          xe('a', {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'https://ionicframework.com/docs/components',
            children: 'UI Components',
          }),
        ],
      }),
    ],
  });
const Lk = () =>
  lo(ok, {
    children: [
      xe(Mf, { children: xe(Df, { children: xe(Nf, { children: 'Blank' }) }) }),
      lo(qx, {
        fullscreen: !0,
        children: [
          xe(Mf, {
            collapse: 'condense',
            children: xe(Df, { children: xe(Nf, { size: 'large', children: 'Blank' }) }),
          }),
          xe(Rk, {}),
        ],
      }),
    ],
  });
yk();
const Ik = () =>
    xe(nk, {
      children: xe(_k, {
        children: lo(dk, {
          children: [
            xe(Aa, { exact: !0, path: '/home', children: xe(Lk, {}) }),
            xe(Aa, { exact: !0, path: '/', children: xe(F1, { to: '/home' }) }),
          ],
        }),
      }),
    }),
  Ok = document.getElementById('root'),
  Ak = Jh(Ok);
Ak.render(xe(w.StrictMode, { children: xe(Ik, {}) }));
export {
  _o as a,
  De as b,
  Im as c,
  Dk as d,
  zk as e,
  Fk as f,
  zt as g,
  pf as h,
  zb as i,
  Vk as j,
  qw as k,
  jk as l,
  Bk as n,
  Hk as p,
  Po as r,
  Uk as s,
  yn as w,
};

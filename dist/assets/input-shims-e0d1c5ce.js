import { b as g, d as P, e as M, a as K, f as _, g as O, h as k, j as H } from './index-c958c553.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var T;
(function (e) {
  (e.Body = 'body'), (e.Ionic = 'ionic'), (e.Native = 'native'), (e.None = 'none');
})(T || (T = {}));
const F = {
    getEngine() {
      var e;
      return (
        ((e = g === null || g === void 0 ? void 0 : g.Capacitor) === null || e === void 0
          ? void 0
          : e.isPluginAvailable('Keyboard')) && (g === null || g === void 0 ? void 0 : g.Capacitor.Plugins.Keyboard)
      );
    },
    getResizeMode() {
      const e = this.getEngine();
      return !e || !e.getResizeMode ? Promise.resolve(void 0) : e.getResizeMode();
    },
  },
  L = new WeakMap(),
  A = (e, o, t, s = 0, i = !1) => {
    L.has(e) !== t && (t ? Y(e, o, s, i) : $(e, o));
  },
  U = (e) => e === e.getRootNode().activeElement,
  Y = (e, o, t, s = !1) => {
    const i = o.parentNode,
      a = o.cloneNode(!1);
    a.classList.add('cloned-input'), (a.tabIndex = -1), s && (a.disabled = !0), i.appendChild(a), L.set(e, a);
    const n = e.ownerDocument.dir === 'rtl' ? 9999 : -9999;
    (e.style.pointerEvents = 'none'), (o.style.transform = `translate3d(${n}px,${t}px,0) scale(0)`);
  },
  $ = (e, o) => {
    const t = L.get(e);
    t && (L.delete(e), t.remove()), (e.style.pointerEvents = ''), (o.style.transform = '');
  },
  R = 50,
  q = (e, o, t) => {
    if (!t || !o) return () => {};
    const s = (n) => {
        U(o) && A(e, o, n);
      },
      i = () => A(e, o, !1),
      a = () => s(!0),
      d = () => s(!1);
    return (
      P(t, 'ionScrollStart', a),
      P(t, 'ionScrollEnd', d),
      o.addEventListener('blur', i),
      () => {
        M(t, 'ionScrollStart', a), M(t, 'ionScrollEnd', d), o.removeEventListener('blur', i);
      }
    );
  },
  I = 'input, textarea, [no-blur], [contenteditable]',
  G = () => {
    let e = !0,
      o = !1;
    const t = document,
      s = () => {
        o = !0;
      },
      i = () => {
        e = !0;
      },
      a = (d) => {
        if (o) {
          o = !1;
          return;
        }
        const n = t.activeElement;
        if (!n || n.matches(I)) return;
        const c = d.target;
        c !== n &&
          (c.matches(I) ||
            c.closest(I) ||
            ((e = !1),
            setTimeout(() => {
              e || n.blur();
            }, 50)));
      };
    return (
      P(t, 'ionScrollStart', s),
      t.addEventListener('focusin', i, !0),
      t.addEventListener('touchend', a, !1),
      () => {
        M(t, 'ionScrollStart', s, !0),
          t.removeEventListener('focusin', i, !0),
          t.removeEventListener('touchend', a, !1);
      }
    );
  },
  W = 0.3,
  j = (e, o, t) => {
    var s;
    const i = (s = e.closest('ion-item,[ion-item]')) !== null && s !== void 0 ? s : e;
    return z(i.getBoundingClientRect(), o.getBoundingClientRect(), t, e.ownerDocument.defaultView.innerHeight);
  },
  z = (e, o, t, s) => {
    const i = e.top,
      a = e.bottom,
      d = o.top,
      n = Math.min(o.bottom, s - t),
      c = d + 15,
      f = n - R - a,
      u = c - i,
      v = Math.round(f < 0 ? -f : u > 0 ? -u : 0),
      b = Math.min(v, i - d),
      C = Math.abs(b) / W,
      r = Math.min(400, Math.max(150, C));
    return { scrollAmount: b, scrollDuration: r, scrollPadding: t, inputSafeY: -(i - c) + 4 };
  },
  N = '$ionPaddingTimer',
  B = (e, o, t) => {
    const s = e[N];
    s && clearTimeout(s),
      o > 0
        ? e.style.setProperty('--keyboard-offset', `${o}px`)
        : (e[N] = setTimeout(() => {
            e.style.setProperty('--keyboard-offset', '0px'), t && t();
          }, 120));
  },
  x = (e, o, t) => {
    const s = () => {
      o && B(o, 0, t);
    };
    e.addEventListener('focusout', s, { once: !0 });
  };
let y = 0;
const V = (e, o, t, s, i, a, d, n = !1) => {
    const c = a && (d === void 0 || d.mode === T.None),
      l = async () => {
        J(e, o, t, s, i, c, n);
      };
    return (
      e.addEventListener('focusin', l, !0),
      () => {
        e.removeEventListener('focusin', l, !0);
      }
    );
  },
  J = async (e, o, t, s, i, a, d = !1) => {
    if (!t && !s) return;
    const n = j(e, t || s, i);
    if (t && Math.abs(n.scrollAmount) < 4) {
      o.focus(), a && t !== null && ((y += n.scrollPadding), B(t, y), x(o, t, () => (y = 0)));
      return;
    }
    if (
      (A(e, o, !0, n.inputSafeY, d),
      o.focus(),
      O(() => e.click()),
      a && t && ((y += n.scrollPadding), B(t, y)),
      typeof window < 'u')
    ) {
      let c;
      const l = async () => {
          c !== void 0 && clearTimeout(c),
            window.removeEventListener('ionKeyboardDidShow', f),
            window.removeEventListener('ionKeyboardDidShow', l),
            t && (await H(t, 0, n.scrollAmount, n.scrollDuration)),
            A(e, o, !1, n.inputSafeY),
            o.focus(),
            a && x(o, t, () => (y = 0));
        },
        f = () => {
          window.removeEventListener('ionKeyboardDidShow', f), window.addEventListener('ionKeyboardDidShow', l);
        };
      if (t) {
        const u = await k(t),
          v = u.scrollHeight - u.clientHeight;
        if (n.scrollAmount > v - u.scrollTop) {
          o.type === 'password'
            ? ((n.scrollAmount += R), window.addEventListener('ionKeyboardDidShow', f))
            : window.addEventListener('ionKeyboardDidShow', l),
            (c = setTimeout(l, 1e3));
          return;
        }
      }
      l();
    }
  },
  Q = !0,
  E = async (e, o) => {
    const t = document,
      s = o === 'ios',
      i = o === 'android',
      a = e.getNumber('keyboardHeight', 290),
      d = e.getBoolean('scrollAssist', !0),
      n = e.getBoolean('hideCaretOnScroll', s),
      c = e.getBoolean('inputBlurring', s),
      l = e.getBoolean('scrollPadding', !0),
      f = Array.from(t.querySelectorAll('ion-input, ion-textarea')),
      u = new WeakMap(),
      v = new WeakMap(),
      b = await F.getResizeMode(),
      D = async (r) => {
        await new Promise((m) => K(r, m));
        const S = r.shadowRoot || r,
          w = S.querySelector('input') || S.querySelector('textarea'),
          h = _(r),
          p = h ? null : r.closest('ion-footer');
        if (!w) return;
        if (h && n && !u.has(r)) {
          const m = q(r, w, h);
          u.set(r, m);
        }
        if (!(w.type === 'date' || w.type === 'datetime-local') && (h || p) && d && !v.has(r)) {
          const m = V(r, w, h, p, a, l, b, i);
          v.set(r, m);
        }
      },
      C = (r) => {
        if (n) {
          const S = u.get(r);
          S && S(), u.delete(r);
        }
        if (d) {
          const S = v.get(r);
          S && S(), v.delete(r);
        }
      };
    c && Q && G();
    for (const r of f) D(r);
    t.addEventListener('ionInputDidLoad', (r) => {
      D(r.detail);
    }),
      t.addEventListener('ionInputDidUnload', (r) => {
        C(r.detail);
      });
  };
export { E as startInputShims };

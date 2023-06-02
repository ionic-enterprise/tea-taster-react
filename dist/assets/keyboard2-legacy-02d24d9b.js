System.register([], function (e, t) {
  'use strict';
  return {
    execute: function () {
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      const t = e('KEYBOARD_DID_OPEN', 'ionKeyboardDidShow'),
        i = e('KEYBOARD_DID_CLOSE', 'ionKeyboardDidHide');
      let o = {},
        s = {},
        a = !1;
      e('resetKeyboardAssist', () => {
        (o = {}), (s = {}), (a = !1);
      }),
        e('startKeyboardAssist', (e) => {
          r(e),
            e.visualViewport &&
              ((s = b(e.visualViewport)),
              (e.visualViewport.onresize = () => {
                y(e), h() || p(e) ? d(e) : c(e) && n(e);
              }));
        });
      const r = (e) => {
          e.addEventListener('keyboardDidShow', (t) => d(e, t)), e.addEventListener('keyboardDidHide', () => n(e));
        },
        d = e('setKeyboardOpen', (e, t) => {
          g(e, t), (a = !0);
        }),
        n = e('setKeyboardClose', (e) => {
          u(e), (a = !1);
        }),
        h = e('keyboardDidOpen', () => {
          const e = (o.height - s.height) * s.scale;
          return !a && o.width === s.width && e > 150;
        }),
        p = e('keyboardDidResize', (e) => a && !c(e)),
        c = e('keyboardDidClose', (e) => a && s.height === e.innerHeight),
        g = (e, i) => {
          const o = i ? i.keyboardHeight : e.innerHeight - s.height,
            a = new CustomEvent(t, { detail: { keyboardHeight: o } });
          e.dispatchEvent(a);
        },
        u = (e) => {
          const t = new CustomEvent(i);
          e.dispatchEvent(t);
        },
        y = e('trackViewportChanges', (e) => {
          (o = Object.assign({}, s)), (s = b(e.visualViewport));
        }),
        b = e('copyVisualViewport', (e) => ({
          width: Math.round(e.width),
          height: Math.round(e.height),
          offsetTop: e.offsetTop,
          offsetLeft: e.offsetLeft,
          pageTop: e.pageTop,
          pageLeft: e.pageLeft,
          scale: e.scale,
        }));
    },
  };
});

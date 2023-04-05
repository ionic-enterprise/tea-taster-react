/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const v = 'ion-focused',
  L = 'ion-focusable',
  m = [
    'Tab',
    'ArrowDown',
    'Space',
    'Escape',
    ' ',
    'Shift',
    'Enter',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'Home',
    'End',
  ],
  h = (n) => {
    let i = [],
      r = !0;
    const e = n ? n.shadowRoot : document,
      E = n || document.body,
      t = (o) => {
        i.forEach((s) => s.classList.remove(v)), o.forEach((s) => s.classList.add(v)), (i = o);
      },
      c = () => {
        (r = !1), t([]);
      },
      d = (o) => {
        (r = m.includes(o.key)), r || t([]);
      },
      u = (o) => {
        if (r && o.composedPath !== void 0) {
          const s = o.composedPath().filter((f) => (f.classList ? f.classList.contains(L) : !1));
          t(s);
        }
      },
      a = () => {
        e.activeElement === E && t([]);
      };
    return (
      e.addEventListener('keydown', d),
      e.addEventListener('focusin', u),
      e.addEventListener('focusout', a),
      e.addEventListener('touchstart', c),
      e.addEventListener('mousedown', c),
      {
        destroy: () => {
          e.removeEventListener('keydown', d),
            e.removeEventListener('focusin', u),
            e.removeEventListener('focusout', a),
            e.removeEventListener('touchstart', c),
            e.removeEventListener('mousedown', c);
        },
        setFocus: t,
      }
    );
  };
export { h as startFocusVisible };

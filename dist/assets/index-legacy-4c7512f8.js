System.register([], function (e, t) {
  'use strict';
  return {
    execute: function () {
      var n = document.createElement('style');
      function o(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
      }
      (n.textContent =
        '.container{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}.container strong{font-size:20px;line-height:26px}.container p{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}.container a{text-decoration:none}html.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font: "Roboto", "Helvetica Neue", sans-serif}html{--ion-font-family: var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity: .18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity: 0;--box-shadow: none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base: var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint: var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base: var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base: var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-medium-shade, #808289) !important;--ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none!important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translateZ(0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal,.md .menu-content-push{box-shadow:4px 0 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width: 0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:.3s transform cubic-bezier(.25,.8,.5,1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none!important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width: 0px;--inner-border-width: 0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width: fit-content;--height: fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}label,input,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}a,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{padding:0;border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;text-size-adjust:100%}html:not(.hydrated) body{display:none}html.ion-ce body{display:block}html.plt-pwa{height:100vh}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;transform:translateZ(0);text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;text-size-adjust:none}html{font-family:var(--ion-font-family)}a{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding:0}.ion-padding{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-top{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start{--padding-start: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}.ion-padding-end{--padding-end: var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-padding-bottom{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-no-margin{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin:0}.ion-margin{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-top{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start{--margin-start: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}.ion-margin-end{--margin-end: var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-margin-bottom{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-float-left{float:left!important}.ion-float-right{float:right!important}.ion-float-start{float:left!important}:host-context([dir=rtl]) .ion-float-start{float:right!important}[dir=rtl] .ion-float-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-start:dir(rtl){float:right!important}}.ion-float-end{float:right!important}:host-context([dir=rtl]) .ion-float-end{float:left!important}[dir=rtl] .ion-float-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-end:dir(rtl){float:left!important}}@media (min-width: 576px){.ion-float-sm-left{float:left!important}.ion-float-sm-right{float:right!important}.ion-float-sm-start{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start{float:right!important}[dir=rtl] .ion-float-sm-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-sm-start:dir(rtl){float:right!important}}.ion-float-sm-end{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end{float:left!important}[dir=rtl] .ion-float-sm-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-sm-end:dir(rtl){float:left!important}}}@media (min-width: 768px){.ion-float-md-left{float:left!important}.ion-float-md-right{float:right!important}.ion-float-md-start{float:left!important}:host-context([dir=rtl]) .ion-float-md-start{float:right!important}[dir=rtl] .ion-float-md-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-md-start:dir(rtl){float:right!important}}.ion-float-md-end{float:right!important}:host-context([dir=rtl]) .ion-float-md-end{float:left!important}[dir=rtl] .ion-float-md-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-md-end:dir(rtl){float:left!important}}}@media (min-width: 992px){.ion-float-lg-left{float:left!important}.ion-float-lg-right{float:right!important}.ion-float-lg-start{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start{float:right!important}[dir=rtl] .ion-float-lg-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-lg-start:dir(rtl){float:right!important}}.ion-float-lg-end{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end{float:left!important}[dir=rtl] .ion-float-lg-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-lg-end:dir(rtl){float:left!important}}}@media (min-width: 1200px){.ion-float-xl-left{float:left!important}.ion-float-xl-right{float:right!important}.ion-float-xl-start{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start{float:right!important}[dir=rtl] .ion-float-xl-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-xl-start:dir(rtl){float:right!important}}.ion-float-xl-end{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end{float:left!important}[dir=rtl] .ion-float-xl-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-xl-end:dir(rtl){float:left!important}}}.ion-text-center{text-align:center!important}.ion-text-justify{text-align:justify!important}.ion-text-start{text-align:start!important}.ion-text-end{text-align:end!important}.ion-text-left{text-align:left!important}.ion-text-right{text-align:right!important}.ion-text-nowrap{white-space:nowrap!important}.ion-text-wrap{white-space:normal!important}@media (min-width: 576px){.ion-text-sm-center{text-align:center!important}.ion-text-sm-justify{text-align:justify!important}.ion-text-sm-start{text-align:start!important}.ion-text-sm-end{text-align:end!important}.ion-text-sm-left{text-align:left!important}.ion-text-sm-right{text-align:right!important}.ion-text-sm-nowrap{white-space:nowrap!important}.ion-text-sm-wrap{white-space:normal!important}}@media (min-width: 768px){.ion-text-md-center{text-align:center!important}.ion-text-md-justify{text-align:justify!important}.ion-text-md-start{text-align:start!important}.ion-text-md-end{text-align:end!important}.ion-text-md-left{text-align:left!important}.ion-text-md-right{text-align:right!important}.ion-text-md-nowrap{white-space:nowrap!important}.ion-text-md-wrap{white-space:normal!important}}@media (min-width: 992px){.ion-text-lg-center{text-align:center!important}.ion-text-lg-justify{text-align:justify!important}.ion-text-lg-start{text-align:start!important}.ion-text-lg-end{text-align:end!important}.ion-text-lg-left{text-align:left!important}.ion-text-lg-right{text-align:right!important}.ion-text-lg-nowrap{white-space:nowrap!important}.ion-text-lg-wrap{white-space:normal!important}}@media (min-width: 1200px){.ion-text-xl-center{text-align:center!important}.ion-text-xl-justify{text-align:justify!important}.ion-text-xl-start{text-align:start!important}.ion-text-xl-end{text-align:end!important}.ion-text-xl-left{text-align:left!important}.ion-text-xl-right{text-align:right!important}.ion-text-xl-nowrap{white-space:nowrap!important}.ion-text-xl-wrap{white-space:normal!important}}.ion-text-uppercase{text-transform:uppercase!important}.ion-text-lowercase{text-transform:lowercase!important}.ion-text-capitalize{text-transform:capitalize!important}@media (min-width: 576px){.ion-text-sm-uppercase{text-transform:uppercase!important}.ion-text-sm-lowercase{text-transform:lowercase!important}.ion-text-sm-capitalize{text-transform:capitalize!important}}@media (min-width: 768px){.ion-text-md-uppercase{text-transform:uppercase!important}.ion-text-md-lowercase{text-transform:lowercase!important}.ion-text-md-capitalize{text-transform:capitalize!important}}@media (min-width: 992px){.ion-text-lg-uppercase{text-transform:uppercase!important}.ion-text-lg-lowercase{text-transform:lowercase!important}.ion-text-lg-capitalize{text-transform:capitalize!important}}@media (min-width: 1200px){.ion-text-xl-uppercase{text-transform:uppercase!important}.ion-text-xl-lowercase{text-transform:lowercase!important}.ion-text-xl-capitalize{text-transform:capitalize!important}}.ion-align-self-start{align-self:flex-start!important}.ion-align-self-end{align-self:flex-end!important}.ion-align-self-center{align-self:center!important}.ion-align-self-stretch{align-self:stretch!important}.ion-align-self-baseline{align-self:baseline!important}.ion-align-self-auto{align-self:auto!important}.ion-wrap{flex-wrap:wrap!important}.ion-nowrap{flex-wrap:nowrap!important}.ion-wrap-reverse{flex-wrap:wrap-reverse!important}.ion-justify-content-start{justify-content:flex-start!important}.ion-justify-content-center{justify-content:center!important}.ion-justify-content-end{justify-content:flex-end!important}.ion-justify-content-around{justify-content:space-around!important}.ion-justify-content-between{justify-content:space-between!important}.ion-justify-content-evenly{justify-content:space-evenly!important}.ion-align-items-start{align-items:flex-start!important}.ion-align-items-center{align-items:center!important}.ion-align-items-end{align-items:flex-end!important}.ion-align-items-stretch{align-items:stretch!important}.ion-align-items-baseline{align-items:baseline!important}.ion-hide,.ion-hide-up,.ion-hide-down{display:none!important}@media (min-width: 576px){.ion-hide-sm-up{display:none!important}}@media (max-width: 575.98px){.ion-hide-sm-down{display:none!important}}@media (min-width: 768px){.ion-hide-md-up{display:none!important}}@media (max-width: 767.98px){.ion-hide-md-down{display:none!important}}@media (min-width: 992px){.ion-hide-lg-up{display:none!important}}@media (max-width: 991.98px){.ion-hide-lg-down{display:none!important}}@media (min-width: 1200px){.ion-hide-xl-up{display:none!important}}@media (max-width: 1199.98px){.ion-hide-xl-down{display:none!important}}:root{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #428cff;--ion-color-primary-rgb: 66, 140, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3a7be0;--ion-color-primary-tint: #5598ff;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80, 200, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106, 100, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47, 223, 117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0, 0, 0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255, 213, 52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255, 73, 97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244, 245, 248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0, 0, 0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152, 154, 162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0, 0, 0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34, 36, 40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255, 255, 255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0, 0, 0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255, 255, 255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18, 18, 18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255, 255, 255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}\n'),
        document.head.appendChild(n);
      var r = { exports: {} },
        i = {},
        a = { exports: {} },
        l = {},
        s = Symbol.for('react.element'),
        c = Symbol.for('react.portal'),
        u = Symbol.for('react.fragment'),
        d = Symbol.for('react.strict_mode'),
        f = Symbol.for('react.profiler'),
        p = Symbol.for('react.provider'),
        h = Symbol.for('react.context'),
        m = Symbol.for('react.forward_ref'),
        g = Symbol.for('react.suspense'),
        b = Symbol.for('react.memo'),
        v = Symbol.for('react.lazy'),
        y = Symbol.iterator,
        w = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        x = Object.assign,
        k = {};
      function $(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || w);
      }
      function E() {}
      function S(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || w);
      }
      ($.prototype.isReactComponent = {}),
        ($.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            );
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        ($.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (E.prototype = $.prototype);
      var C = (S.prototype = new E());
      (C.constructor = S), x(C, $.prototype), (C.isPureReactComponent = !0);
      var P = Array.isArray,
        T = Object.prototype.hasOwnProperty,
        R = { current: null },
        I = { key: !0, ref: !0, __self: !0, __source: !0 };
      function O(e, t, n) {
        var o,
          r = {},
          i = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            T.call(t, o) && !I.hasOwnProperty(o) && (r[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) r.children = n;
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
          r.children = c;
        }
        if (e && e.defaultProps) for (o in (l = e.defaultProps)) void 0 === r[o] && (r[o] = l[o]);
        return { $$typeof: s, type: e, key: i, ref: a, props: r, _owner: R.current };
      }
      function L(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === s;
      }
      var N = /\/+/g;
      function _(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function z(e, t, n, o, r) {
        var i = typeof e;
        ('undefined' !== i && 'boolean' !== i) || (e = null);
        var a = !1;
        if (null === e) a = !0;
        else
          switch (i) {
            case 'string':
            case 'number':
              a = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case s:
                case c:
                  a = !0;
              }
          }
        if (a)
          return (
            (r = r((a = e))),
            (e = '' === o ? '.' + _(a, 0) : o),
            P(r)
              ? ((n = ''),
                null != e && (n = e.replace(N, '$&/') + '/'),
                z(r, t, n, '', function (e) {
                  return e;
                }))
              : null != r &&
                (L(r) &&
                  (r = (function (e, t) {
                    return { $$typeof: s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                  })(r, n + (!r.key || (a && a.key === r.key) ? '' : ('' + r.key).replace(N, '$&/') + '/') + e)),
                t.push(r)),
            1
          );
        if (((a = 0), (o = '' === o ? '.' : o + ':'), P(e)))
          for (var l = 0; l < e.length; l++) {
            var u = o + _((i = e[l]), l);
            a += z(i, t, n, u, r);
          }
        else if (
          ((u = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (y && e[y]) || e['@@iterator'])
              ? e
              : null;
          })(e)),
          'function' == typeof u)
        )
          for (e = u.call(e), l = 0; !(i = e.next()).done; ) a += z((i = i.value), t, n, (u = o + _(i, l++)), r);
        else if ('object' === i)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          );
        return a;
      }
      function A(e, t, n) {
        if (null == e) return e;
        var o = [],
          r = 0;
        return (
          z(e, o, '', '', function (e) {
            return t.call(n, e, r++);
          }),
          o
        );
      }
      function M(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var B = { current: null },
        D = { transition: null },
        V = { ReactCurrentDispatcher: B, ReactCurrentBatchConfig: D, ReactCurrentOwner: R };
      (l.Children = {
        map: A,
        forEach: function (e, t, n) {
          A(
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
            A(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            A(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!L(e)) throw Error('React.Children.only expected to receive a single React element child.');
          return e;
        },
      }),
        (l.Component = $),
        (l.Fragment = u),
        (l.Profiler = f),
        (l.PureComponent = S),
        (l.StrictMode = d),
        (l.Suspense = g),
        (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
        (l.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
          var o = x({}, e.props),
            r = e.key,
            i = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = R.current)),
              void 0 !== t.key && (r = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (c in t) T.call(t, c) && !I.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = n;
          else if (1 < c) {
            l = Array(c);
            for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
            o.children = l;
          }
          return { $$typeof: s, type: e.type, key: r, ref: i, props: o, _owner: a };
        }),
        (l.createContext = function (e) {
          return (
            ((e = {
              $$typeof: h,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: p, _context: e }),
            (e.Consumer = e)
          );
        }),
        (l.createElement = O),
        (l.createFactory = function (e) {
          var t = O.bind(null, e);
          return (t.type = e), t;
        }),
        (l.createRef = function () {
          return { current: null };
        }),
        (l.forwardRef = function (e) {
          return { $$typeof: m, render: e };
        }),
        (l.isValidElement = L),
        (l.lazy = function (e) {
          return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: M };
        }),
        (l.memo = function (e, t) {
          return { $$typeof: b, type: e, compare: void 0 === t ? null : t };
        }),
        (l.startTransition = function (e) {
          var t = D.transition;
          D.transition = {};
          try {
            e();
          } finally {
            D.transition = t;
          }
        }),
        (l.unstable_act = function () {
          throw Error('act(...) is not supported in production builds of React.');
        }),
        (l.useCallback = function (e, t) {
          return B.current.useCallback(e, t);
        }),
        (l.useContext = function (e) {
          return B.current.useContext(e);
        }),
        (l.useDebugValue = function () {}),
        (l.useDeferredValue = function (e) {
          return B.current.useDeferredValue(e);
        }),
        (l.useEffect = function (e, t) {
          return B.current.useEffect(e, t);
        }),
        (l.useId = function () {
          return B.current.useId();
        }),
        (l.useImperativeHandle = function (e, t, n) {
          return B.current.useImperativeHandle(e, t, n);
        }),
        (l.useInsertionEffect = function (e, t) {
          return B.current.useInsertionEffect(e, t);
        }),
        (l.useLayoutEffect = function (e, t) {
          return B.current.useLayoutEffect(e, t);
        }),
        (l.useMemo = function (e, t) {
          return B.current.useMemo(e, t);
        }),
        (l.useReducer = function (e, t, n) {
          return B.current.useReducer(e, t, n);
        }),
        (l.useRef = function (e) {
          return B.current.useRef(e);
        }),
        (l.useState = function (e) {
          return B.current.useState(e);
        }),
        (l.useSyncExternalStore = function (e, t, n) {
          return B.current.useSyncExternalStore(e, t, n);
        }),
        (l.useTransition = function () {
          return B.current.useTransition();
        }),
        (l.version = '18.2.0'),
        (a.exports = l);
      var j = a.exports;
      const H = o(j);
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var F = j,
        U = Symbol.for('react.element'),
        W = Symbol.for('react.fragment'),
        q = Object.prototype.hasOwnProperty,
        Q = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        K = { key: !0, ref: !0, __self: !0, __source: !0 };
      function X(e, t, n) {
        var o,
          r = {},
          i = null,
          a = null;
        for (o in (void 0 !== n && (i = '' + n),
        void 0 !== t.key && (i = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          q.call(t, o) && !K.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps) for (o in (t = e.defaultProps)) void 0 === r[o] && (r[o] = t[o]);
        return { $$typeof: U, type: e, key: i, ref: a, props: r, _owner: Q.current };
      }
      (i.Fragment = W), (i.jsx = X), (i.jsxs = X), (r.exports = i);
      var Y = r.exports;
      const G = Y.jsx,
        Z = Y.jsxs;
      var J = { exports: {} },
        ee = {},
        te = { exports: {} },
        ne = {};
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      !(function (e) {
        function t(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var o = (n - 1) >>> 1,
              i = e[o];
            if (!(0 < r(i, t))) break e;
            (e[o] = t), (e[n] = i), (n = o);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var o = 0, i = e.length, a = i >>> 1; o < a; ) {
              var l = 2 * (o + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > r(s, n))
                c < i && 0 > r(u, s) ? ((e[o] = u), (e[c] = n), (o = c)) : ((e[o] = s), (e[l] = n), (o = l));
              else {
                if (!(c < i && 0 > r(u, n))) break e;
                (e[o] = u), (e[c] = n), (o = c);
              }
            }
          }
          return t;
        }
        function r(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' == typeof performance && 'function' == typeof performance.now) {
          var i = performance;
          e.unstable_now = function () {
            return i.now();
          };
        } else {
          var a = Date,
            l = a.now();
          e.unstable_now = function () {
            return a.now() - l;
          };
        }
        var s = [],
          c = [],
          u = 1,
          d = null,
          f = 3,
          p = !1,
          h = !1,
          m = !1,
          g = 'function' == typeof setTimeout ? setTimeout : null,
          b = 'function' == typeof clearTimeout ? clearTimeout : null,
          v = 'undefined' != typeof setImmediate ? setImmediate : null;
        function y(e) {
          for (var r = n(c); null !== r; ) {
            if (null === r.callback) o(c);
            else {
              if (!(r.startTime <= e)) break;
              o(c), (r.sortIndex = r.expirationTime), t(s, r);
            }
            r = n(c);
          }
        }
        function w(e) {
          if (((m = !1), y(e), !h))
            if (null !== n(s)) (h = !0), L(x);
            else {
              var t = n(c);
              null !== t && N(w, t.startTime - e);
            }
        }
        function x(t, r) {
          (h = !1), m && ((m = !1), b(S), (S = -1)), (p = !0);
          var i = f;
          try {
            for (y(r), d = n(s); null !== d && (!(d.expirationTime > r) || (t && !T())); ) {
              var a = d.callback;
              if ('function' == typeof a) {
                (d.callback = null), (f = d.priorityLevel);
                var l = a(d.expirationTime <= r);
                (r = e.unstable_now()), 'function' == typeof l ? (d.callback = l) : d === n(s) && o(s), y(r);
              } else o(s);
              d = n(s);
            }
            if (null !== d) var u = !0;
            else {
              var g = n(c);
              null !== g && N(w, g.startTime - r), (u = !1);
            }
            return u;
          } finally {
            (d = null), (f = i), (p = !1);
          }
        }
        'undefined' != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          $ = !1,
          E = null,
          S = -1,
          C = 5,
          P = -1;
        function T() {
          return !(e.unstable_now() - P < C);
        }
        function R() {
          if (null !== E) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
              n = E(!0, t);
            } finally {
              n ? k() : (($ = !1), (E = null));
            }
          } else $ = !1;
        }
        if ('function' == typeof v)
          k = function () {
            v(R);
          };
        else if ('undefined' != typeof MessageChannel) {
          var I = new MessageChannel(),
            O = I.port2;
          (I.port1.onmessage = R),
            (k = function () {
              O.postMessage(null);
            });
        } else
          k = function () {
            g(R, 0);
          };
        function L(e) {
          (E = e), $ || (($ = !0), k());
        }
        function N(t, n) {
          S = g(function () {
            t(e.unstable_now());
          }, n);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            h || p || ((h = !0), L(x));
          }),
          (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(s);
          }),
          (e.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (e.unstable_scheduleCallback = function (o, r, i) {
            var a = e.unstable_now();
            switch (
              ((i = 'object' == typeof i && null !== i && 'number' == typeof (i = i.delay) && 0 < i ? a + i : a), o)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (o = {
                id: u++,
                callback: r,
                priorityLevel: o,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > a
                ? ((o.sortIndex = i),
                  t(c, o),
                  null === n(s) && o === n(c) && (m ? (b(S), (S = -1)) : (m = !0), N(w, i - a)))
                : ((o.sortIndex = l), t(s, o), h || p || ((h = !0), L(x))),
              o
            );
          }),
          (e.unstable_shouldYield = T),
          (e.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      })(ne),
        (te.exports = ne);
      var oe = te.exports,
        re = j,
        ie = oe;
      /**
       * @license React
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function ae(e) {
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
      var le = new Set(),
        se = {};
      function ce(e, t) {
        ue(e, t), ue(e + 'Capture', t);
      }
      function ue(e, t) {
        for (se[e] = t, e = 0; e < t.length; e++) le.add(t[e]);
      }
      var de = !(
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        fe = Object.prototype.hasOwnProperty,
        pe =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        he = {},
        me = {};
      function ge(e, t, n, o, r, i, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = o),
          (this.attributeNamespace = r),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = a);
      }
      var be = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          be[e] = new ge(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
          var t = e[0];
          be[t] = new ge(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
          be[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
          be[e] = new ge(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            be[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          be[e] = new ge(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          be[e] = new ge(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          be[e] = new ge(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          be[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var ve = /[\-:]([a-z])/g;
      function ye(e) {
        return e[1].toUpperCase();
      }
      function we(e, t, n, o) {
        var r = be.hasOwnProperty(t) ? be[t] : null;
        (null !== r
          ? 0 !== r.type
          : o || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
          ((function (e, t, n, o) {
            if (
              null == t ||
              (function (e, t, n, o) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !o &&
                      (null !== n ? !n.acceptsBooleans : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, o)
            )
              return !0;
            if (o) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, r, o) && (n = null),
          o || null === r
            ? (function (e) {
                return !!fe.call(me, e) || (!fe.call(he, e) && (pe.test(e) ? (me[e] = !0) : ((he[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : r.mustUseProperty
            ? (e[r.propertyName] = null === n ? 3 !== r.type && '' : n)
            : ((t = r.attributeName),
              (o = r.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n = 3 === (r = r.type) || (4 === r && !0 === n) ? '' : '' + n),
                  o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(ve, ye);
          be[t] = new ge(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
          var t = e.replace(ve, ye);
          be[t] = new ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(ve, ye);
          be[t] = new ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          be[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (be.xlinkHref = new ge('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          be[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var xe = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ke = Symbol.for('react.element'),
        $e = Symbol.for('react.portal'),
        Ee = Symbol.for('react.fragment'),
        Se = Symbol.for('react.strict_mode'),
        Ce = Symbol.for('react.profiler'),
        Pe = Symbol.for('react.provider'),
        Te = Symbol.for('react.context'),
        Re = Symbol.for('react.forward_ref'),
        Ie = Symbol.for('react.suspense'),
        Oe = Symbol.for('react.suspense_list'),
        Le = Symbol.for('react.memo'),
        Ne = Symbol.for('react.lazy'),
        _e = Symbol.for('react.offscreen'),
        ze = Symbol.iterator;
      function Ae(e) {
        return null === e || 'object' != typeof e
          ? null
          : 'function' == typeof (e = (ze && e[ze]) || e['@@iterator'])
          ? e
          : null;
      }
      var Me,
        Be = Object.assign;
      function De(e) {
        if (void 0 === Me)
          try {
            throw Error();
          } catch ($f) {
            var t = $f.stack.trim().match(/\n( *(at )?)/);
            Me = (t && t[1]) || '';
          }
        return '\n' + Me + e;
      }
      var Ve = !1;
      function je(e, t) {
        if (!e || Ve) return '';
        Ve = !0;
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
              'object' == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (If) {
                var o = If;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (If) {
                o = If;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (If) {
              o = If;
            }
            e();
          }
        } catch (If) {
          if (If && o && 'string' == typeof If.stack) {
            for (
              var r = If.stack.split('\n'), i = o.stack.split('\n'), a = r.length - 1, l = i.length - 1;
              1 <= a && 0 <= l && r[a] !== i[l];

            )
              l--;
            for (; 1 <= a && 0 <= l; a--, l--)
              if (r[a] !== i[l]) {
                if (1 !== a || 1 !== l)
                  do {
                    if ((a--, 0 > --l || r[a] !== i[l])) {
                      var s = '\n' + r[a].replace(' at new ', ' at ');
                      return (
                        e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s
                      );
                    }
                  } while (1 <= a && 0 <= l);
                break;
              }
          }
        } finally {
          (Ve = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : '') ? De(e) : '';
      }
      function He(e) {
        switch (e.tag) {
          case 5:
            return De(e.type);
          case 16:
            return De('Lazy');
          case 13:
            return De('Suspense');
          case 19:
            return De('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (e = je(e.type, !1));
          case 11:
            return (e = je(e.type.render, !1));
          case 1:
            return (e = je(e.type, !0));
          default:
            return '';
        }
      }
      function Fe(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
          case Ee:
            return 'Fragment';
          case $e:
            return 'Portal';
          case Ce:
            return 'Profiler';
          case Se:
            return 'StrictMode';
          case Ie:
            return 'Suspense';
          case Oe:
            return 'SuspenseList';
        }
        if ('object' == typeof e)
          switch (e.$$typeof) {
            case Te:
              return (e.displayName || 'Context') + '.Consumer';
            case Pe:
              return (e._context.displayName || 'Context') + '.Provider';
            case Re:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                e
              );
            case Le:
              return null !== (t = e.displayName || null) ? t : Fe(e.type) || 'Memo';
            case Ne:
              (t = e._payload), (e = e._init);
              try {
                return Fe(e(t));
              } catch ($f) {}
          }
        return null;
      }
      function Ue(e) {
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
              (e = (e = t.render).displayName || e.name || ''),
              t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
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
            return Fe(t);
          case 8:
            return t === Se ? 'StrictMode' : 'Mode';
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
            if ('function' == typeof t) return t.displayName || t.name || null;
            if ('string' == typeof t) return t;
        }
        return null;
      }
      function We(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'string':
          case 'undefined':
          case 'object':
            return e;
          default:
            return '';
        }
      }
      function qe(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
      }
      function Qe(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = qe(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              o = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
              var r = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return r.call(this);
                  },
                  set: function (e) {
                    (o = '' + e), i.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return o;
                  },
                  setValue: function (e) {
                    o = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Ke(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          o = '';
        return e && (o = qe(e) ? (e.checked ? 'true' : 'false') : e.value), (e = o) !== n && (t.setValue(e), !0);
      }
      function Xe(e) {
        if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body;
        } catch (kf) {
          return e.body;
        }
      }
      function Ye(e, t) {
        var n = t.checked;
        return Be({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function Ge(e, t) {
        var n = null == t.defaultValue ? '' : t.defaultValue,
          o = null != t.checked ? t.checked : t.defaultChecked;
        (n = We(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
          });
      }
      function Ze(e, t) {
        null != (t = t.checked) && we(e, 'checked', t, !1);
      }
      function Je(e, t) {
        Ze(e, t);
        var n = We(t.value),
          o = t.type;
        if (null != n)
          'number' === o
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
        else if ('submit' === o || 'reset' === o) return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? tt(e, t.type, n)
          : t.hasOwnProperty('defaultValue') && tt(e, t.type, We(t.defaultValue)),
          null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
      }
      function et(e, t, n) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var o = t.type;
          if (!(('submit' !== o && 'reset' !== o) || (void 0 !== t.value && null !== t.value))) return;
          (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
        }
        '' !== (n = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== n && (e.name = n);
      }
      function tt(e, t, n) {
        ('number' === t && Xe(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
      }
      var nt = Array.isArray;
      function ot(e, t, n, o) {
        if (((e = e.options), t)) {
          t = {};
          for (var r = 0; r < n.length; r++) t['$' + n[r]] = !0;
          for (n = 0; n < e.length; n++)
            (r = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== r && (e[n].selected = r),
              r && o && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + We(n), t = null, r = 0; r < e.length; r++) {
            if (e[r].value === n) return (e[r].selected = !0), void (o && (e[r].defaultSelected = !0));
            null !== t || e[r].disabled || (t = e[r]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function rt(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(ae(91));
        return Be({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
      }
      function it(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(ae(92));
            if (nt(n)) {
              if (1 < n.length) throw Error(ae(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ''), (n = t);
        }
        e._wrapperState = { initialValue: We(n) };
      }
      function at(e, t) {
        var n = We(t.value),
          o = We(t.defaultValue);
        null != n &&
          ((n = '' + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
          null != o && (e.defaultValue = '' + o);
      }
      function lt(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
      }
      function st(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function ct(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? st(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var ut,
        dt,
        ft =
          ((dt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
              for (
                (ut = ut || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                  t = ut.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, o) {
                MSApp.execUnsafeLocalFunction(function () {
                  return dt(e, t);
                });
              }
            : dt);
      function pt(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ht = {
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
        mt = ['Webkit', 'ms', 'Moz', 'O'];
      function gt(e, t, n) {
        return null == t || 'boolean' == typeof t || '' === t
          ? ''
          : n || 'number' != typeof t || 0 === t || (ht.hasOwnProperty(e) && ht[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function bt(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var o = 0 === n.indexOf('--'),
              r = gt(n, t[n], o);
            'float' === n && (n = 'cssFloat'), o ? e.setProperty(n, r) : (e[n] = r);
          }
      }
      Object.keys(ht).forEach(function (e) {
        mt.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ht[t] = ht[e]);
        });
      });
      var vt = Be(
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
      function yt(e, t) {
        if (t) {
          if (vt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ae(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(ae(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
              throw Error(ae(61));
          }
          if (null != t.style && 'object' != typeof t.style) throw Error(ae(62));
        }
      }
      function wt(e, t) {
        if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
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
      var xt = null;
      function kt(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var $t = null,
        Et = null,
        St = null;
      function Ct(e) {
        if ((e = xi(e))) {
          if ('function' != typeof $t) throw Error(ae(280));
          var t = e.stateNode;
          t && ((t = $i(t)), $t(e.stateNode, e.type, t));
        }
      }
      function Pt(e) {
        Et ? (St ? St.push(e) : (St = [e])) : (Et = e);
      }
      function Tt() {
        if (Et) {
          var e = Et,
            t = St;
          if (((St = Et = null), Ct(e), t)) for (e = 0; e < t.length; e++) Ct(t[e]);
        }
      }
      function Rt(e, t) {
        return e(t);
      }
      function It() {}
      var Ot = !1;
      function Lt(e, t, n) {
        if (Ot) return e(t, n);
        Ot = !0;
        try {
          return Rt(e, t, n);
        } finally {
          (Ot = !1), (null !== Et || null !== St) && (It(), Tt());
        }
      }
      function Nt(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var o = $i(n);
        if (null === o) return null;
        n = o[t];
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
            (o = !o.disabled) ||
              (o = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
              (e = !o);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' != typeof n) throw Error(ae(231, t, typeof n));
        return n;
      }
      var _t = !1;
      if (de)
        try {
          var zt = {};
          Object.defineProperty(zt, 'passive', {
            get: function () {
              _t = !0;
            },
          }),
            window.addEventListener('test', zt, zt),
            window.removeEventListener('test', zt, zt);
        } catch (dt) {
          _t = !1;
        }
      function At(e, t, n, o, r, i, a, l, s) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (Of) {
          this.onError(Of);
        }
      }
      var Mt = !1,
        Bt = null,
        Dt = !1,
        Vt = null,
        jt = {
          onError: function (e) {
            (Mt = !0), (Bt = e);
          },
        };
      function Ht(e, t, n, o, r, i, a, l, s) {
        (Mt = !1), (Bt = null), At.apply(jt, arguments);
      }
      function Ft(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ut(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
      }
      function Wt(e) {
        if (Ft(e) !== e) throw Error(ae(188));
      }
      function qt(e) {
        return (
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ft(e))) throw Error(ae(188));
              return t !== e ? null : e;
            }
            for (var n = e, o = t; ; ) {
              var r = n.return;
              if (null === r) break;
              var i = r.alternate;
              if (null === i) {
                if (null !== (o = r.return)) {
                  n = o;
                  continue;
                }
                break;
              }
              if (r.child === i.child) {
                for (i = r.child; i; ) {
                  if (i === n) return Wt(r), e;
                  if (i === o) return Wt(r), t;
                  i = i.sibling;
                }
                throw Error(ae(188));
              }
              if (n.return !== o.return) (n = r), (o = i);
              else {
                for (var a = !1, l = r.child; l; ) {
                  if (l === n) {
                    (a = !0), (n = r), (o = i);
                    break;
                  }
                  if (l === o) {
                    (a = !0), (o = r), (n = i);
                    break;
                  }
                  l = l.sibling;
                }
                if (!a) {
                  for (l = i.child; l; ) {
                    if (l === n) {
                      (a = !0), (n = i), (o = r);
                      break;
                    }
                    if (l === o) {
                      (a = !0), (o = i), (n = r);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!a) throw Error(ae(189));
                }
              }
              if (n.alternate !== o) throw Error(ae(190));
            }
            if (3 !== n.tag) throw Error(ae(188));
            return n.stateNode.current === n ? e : t;
          })(e)),
          null !== e ? Qt(e) : null
        );
      }
      function Qt(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e; ) {
          var t = Qt(e);
          if (null !== t) return t;
          e = e.sibling;
        }
        return null;
      }
      var Kt = ie.unstable_scheduleCallback,
        Xt = ie.unstable_cancelCallback,
        Yt = ie.unstable_shouldYield,
        Gt = ie.unstable_requestPaint,
        Zt = ie.unstable_now,
        Jt = ie.unstable_getCurrentPriorityLevel,
        en = ie.unstable_ImmediatePriority,
        tn = ie.unstable_UserBlockingPriority,
        nn = ie.unstable_NormalPriority,
        on = ie.unstable_LowPriority,
        rn = ie.unstable_IdlePriority,
        an = null,
        ln = null,
        sn = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((cn(e) / un) | 0)) | 0;
            },
        cn = Math.log,
        un = Math.LN2,
        dn = 64,
        fn = 4194304;
      function pn(e) {
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
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
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
      function hn(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var o = 0,
          r = e.suspendedLanes,
          i = e.pingedLanes,
          a = 268435455 & n;
        if (0 !== a) {
          var l = a & ~r;
          0 !== l ? (o = pn(l)) : 0 != (i &= a) && (o = pn(i));
        } else 0 != (a = n & ~r) ? (o = pn(a)) : 0 !== i && (o = pn(i));
        if (0 === o) return 0;
        if (0 !== t && t !== o && 0 == (t & r) && ((r = o & -o) >= (i = t & -t) || (16 === r && 0 != (4194240 & i))))
          return t;
        if ((0 != (4 & o) && (o |= 16 & n), 0 !== (t = e.entangledLanes)))
          for (e = e.entanglements, t &= o; 0 < t; ) (r = 1 << (n = 31 - sn(t))), (o |= e[n]), (t &= ~r);
        return o;
      }
      function mn(e, t) {
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
          default:
            return -1;
        }
      }
      function gn(e) {
        return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
      }
      function bn() {
        var e = dn;
        return 0 == (4194240 & (dn <<= 1)) && (dn = 64), e;
      }
      function vn(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function yn(e, t, n) {
        (e.pendingLanes |= t),
          536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - sn(t))] = n);
      }
      function wn(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var o = 31 - sn(n),
            r = 1 << o;
          (r & t) | (e[o] & t) && (e[o] |= t), (n &= ~r);
        }
      }
      var xn = 0;
      function kn(e) {
        return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
      }
      var $n,
        En,
        Sn,
        Cn,
        Pn,
        Tn = !1,
        Rn = [],
        In = null,
        On = null,
        Ln = null,
        Nn = new Map(),
        _n = new Map(),
        zn = [],
        An =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
          );
      function Mn(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            In = null;
            break;
          case 'dragenter':
          case 'dragleave':
            On = null;
            break;
          case 'mouseover':
          case 'mouseout':
            Ln = null;
            break;
          case 'pointerover':
          case 'pointerout':
            Nn.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            _n.delete(t.pointerId);
        }
      }
      function Bn(e, t, n, o, r, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: i, targetContainers: [r] }),
            null !== t && null !== (t = xi(t)) && En(t),
            e)
          : ((e.eventSystemFlags |= o), (t = e.targetContainers), null !== r && -1 === t.indexOf(r) && t.push(r), e);
      }
      function Dn(e) {
        var t = wi(e.target);
        if (null !== t) {
          var n = Ft(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ut(n)))
                return (
                  (e.blockedOn = t),
                  void Pn(e.priority, function () {
                    Sn(n);
                  })
                );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function Vn(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Gn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = xi(n)) && En(t), (e.blockedOn = n), !1;
          var o = new (n = e.nativeEvent).constructor(n.type, n);
          (xt = o), n.target.dispatchEvent(o), (xt = null), t.shift();
        }
        return !0;
      }
      function jn(e, t, n) {
        Vn(e) && n.delete(t);
      }
      function Hn() {
        (Tn = !1),
          null !== In && Vn(In) && (In = null),
          null !== On && Vn(On) && (On = null),
          null !== Ln && Vn(Ln) && (Ln = null),
          Nn.forEach(jn),
          _n.forEach(jn);
      }
      function Fn(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null), Tn || ((Tn = !0), ie.unstable_scheduleCallback(ie.unstable_NormalPriority, Hn)));
      }
      function Un(e) {
        function t(t) {
          return Fn(t, e);
        }
        if (0 < Rn.length) {
          Fn(Rn[0], e);
          for (var n = 1; n < Rn.length; n++) {
            var o = Rn[n];
            o.blockedOn === e && (o.blockedOn = null);
          }
        }
        for (
          null !== In && Fn(In, e),
            null !== On && Fn(On, e),
            null !== Ln && Fn(Ln, e),
            Nn.forEach(t),
            _n.forEach(t),
            n = 0;
          n < zn.length;
          n++
        )
          (o = zn[n]).blockedOn === e && (o.blockedOn = null);
        for (; 0 < zn.length && null === (n = zn[0]).blockedOn; ) Dn(n), null === n.blockedOn && zn.shift();
      }
      var Wn = xe.ReactCurrentBatchConfig,
        qn = !0;
      function Qn(e, t, n, o) {
        var r = xn,
          i = Wn.transition;
        Wn.transition = null;
        try {
          (xn = 1), Xn(e, t, n, o);
        } finally {
          (xn = r), (Wn.transition = i);
        }
      }
      function Kn(e, t, n, o) {
        var r = xn,
          i = Wn.transition;
        Wn.transition = null;
        try {
          (xn = 4), Xn(e, t, n, o);
        } finally {
          (xn = r), (Wn.transition = i);
        }
      }
      function Xn(e, t, n, o) {
        if (qn) {
          var r = Gn(e, t, n, o);
          if (null === r) qr(e, t, o, Yn, n), Mn(e, o);
          else if (
            (function (e, t, n, o, r) {
              switch (t) {
                case 'focusin':
                  return (In = Bn(In, e, t, n, o, r)), !0;
                case 'dragenter':
                  return (On = Bn(On, e, t, n, o, r)), !0;
                case 'mouseover':
                  return (Ln = Bn(Ln, e, t, n, o, r)), !0;
                case 'pointerover':
                  var i = r.pointerId;
                  return Nn.set(i, Bn(Nn.get(i) || null, e, t, n, o, r)), !0;
                case 'gotpointercapture':
                  return (i = r.pointerId), _n.set(i, Bn(_n.get(i) || null, e, t, n, o, r)), !0;
              }
              return !1;
            })(r, e, t, n, o)
          )
            o.stopPropagation();
          else if ((Mn(e, o), 4 & t && -1 < An.indexOf(e))) {
            for (; null !== r; ) {
              var i = xi(r);
              if ((null !== i && $n(i), null === (i = Gn(e, t, n, o)) && qr(e, t, o, Yn, n), i === r)) break;
              r = i;
            }
            null !== r && o.stopPropagation();
          } else qr(e, t, o, null, n);
        }
      }
      var Yn = null;
      function Gn(e, t, n, o) {
        if (((Yn = null), null !== (e = wi((e = kt(o))))))
          if (null === (t = Ft(e))) e = null;
          else if (13 === (n = t.tag)) {
            if (null !== (e = Ut(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        return (Yn = e), null;
      }
      function Zn(e) {
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
            switch (Jt()) {
              case en:
                return 1;
              case tn:
                return 4;
              case nn:
              case on:
                return 16;
              case rn:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var Jn = null,
        eo = null,
        to = null;
      function no() {
        if (to) return to;
        var e,
          t,
          n = eo,
          o = n.length,
          r = 'value' in Jn ? Jn.value : Jn.textContent,
          i = r.length;
        for (e = 0; e < o && n[e] === r[e]; e++);
        var a = o - e;
        for (t = 1; t <= a && n[o - t] === r[i - t]; t++);
        return (to = r.slice(e, 1 < t ? 1 - t : void 0));
      }
      function oo(e) {
        var t = e.keyCode;
        return (
          'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function ro() {
        return !0;
      }
      function io() {
        return !1;
      }
      function ao(e) {
        function t(t, n, o, r, i) {
          for (var a in ((this._reactName = t),
          (this._targetInst = o),
          (this.type = n),
          (this.nativeEvent = r),
          (this.target = i),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(r) : r[a]));
          return (
            (this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue)
              ? ro
              : io),
            (this.isPropagationStopped = io),
            this
          );
        }
        return (
          Be(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = ro));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = ro));
            },
            persist: function () {},
            isPersistent: ro,
          }),
          t
        );
      }
      var lo,
        so,
        co,
        uo = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        fo = ao(uo),
        po = Be({}, uo, { view: 0, detail: 0 }),
        ho = ao(po),
        mo = Be({}, po, {
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
          getModifierState: Po,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== co &&
                  (co && 'mousemove' === e.type
                    ? ((lo = e.screenX - co.screenX), (so = e.screenY - co.screenY))
                    : (so = lo = 0),
                  (co = e)),
                lo);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : so;
          },
        }),
        go = ao(mo),
        bo = ao(Be({}, mo, { dataTransfer: 0 })),
        vo = ao(Be({}, po, { relatedTarget: 0 })),
        yo = ao(Be({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        wo = Be({}, uo, {
          clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
          },
        }),
        xo = ao(wo),
        ko = ao(Be({}, uo, { data: 0 })),
        $o = {
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
        Eo = {
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
        So = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
      function Co(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = So[e]) && !!t[e];
      }
      function Po() {
        return Co;
      }
      var To = Be({}, po, {
          key: function (e) {
            if (e.key) {
              var t = $o[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = oo(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? Eo[e.keyCode] || 'Unidentified'
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
          getModifierState: Po,
          charCode: function (e) {
            return 'keypress' === e.type ? oo(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type ? oo(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
        }),
        Ro = ao(To),
        Io = ao(
          Be({}, mo, {
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
          })
        ),
        Oo = ao(
          Be({}, po, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Po,
          })
        ),
        Lo = ao(Be({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        No = Be({}, mo, {
          deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        _o = ao(No),
        zo = [9, 13, 27, 32],
        Ao = de && 'CompositionEvent' in window,
        Mo = null;
      de && 'documentMode' in document && (Mo = document.documentMode);
      var Bo = de && 'TextEvent' in window && !Mo,
        Do = de && (!Ao || (Mo && 8 < Mo && 11 >= Mo)),
        Vo = String.fromCharCode(32),
        jo = !1;
      function Ho(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== zo.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Fo(e) {
        return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var Uo = !1,
        Wo = {
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
      function qo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Wo[e.type] : 'textarea' === t;
      }
      function Qo(e, t, n, o) {
        Pt(o),
          0 < (t = Kr(t, 'onChange')).length &&
            ((n = new fo('onChange', 'change', null, n, o)), e.push({ event: n, listeners: t }));
      }
      var Ko = null,
        Xo = null;
      function Yo(e) {
        Vr(e, 0);
      }
      function Go(e) {
        if (Ke(ki(e))) return e;
      }
      function Zo(e, t) {
        if ('change' === e) return t;
      }
      var Jo = !1;
      if (de) {
        var er;
        if (de) {
          var tr = 'oninput' in document;
          if (!tr) {
            var nr = document.createElement('div');
            nr.setAttribute('oninput', 'return;'), (tr = 'function' == typeof nr.oninput);
          }
          er = tr;
        } else er = !1;
        Jo = er && (!document.documentMode || 9 < document.documentMode);
      }
      function or() {
        Ko && (Ko.detachEvent('onpropertychange', rr), (Xo = Ko = null));
      }
      function rr(e) {
        if ('value' === e.propertyName && Go(Xo)) {
          var t = [];
          Qo(t, Xo, e, kt(e)), Lt(Yo, t);
        }
      }
      function ir(e, t, n) {
        'focusin' === e ? (or(), (Xo = n), (Ko = t).attachEvent('onpropertychange', rr)) : 'focusout' === e && or();
      }
      function ar(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Go(Xo);
      }
      function lr(e, t) {
        if ('click' === e) return Go(t);
      }
      function sr(e, t) {
        if ('input' === e || 'change' === e) return Go(t);
      }
      var cr =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            };
      function ur(e, t) {
        if (cr(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (o = 0; o < n.length; o++) {
          var r = n[o];
          if (!fe.call(t, r) || !cr(e[r], t[r])) return !1;
        }
        return !0;
      }
      function dr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fr(e, t) {
        var n,
          o = dr(e);
        for (e = 0; o; ) {
          if (3 === o.nodeType) {
            if (((n = e + o.textContent.length), e <= t && n >= t)) return { node: o, offset: t - e };
            e = n;
          }
          e: {
            for (; o; ) {
              if (o.nextSibling) {
                o = o.nextSibling;
                break e;
              }
              o = o.parentNode;
            }
            o = void 0;
          }
          o = dr(o);
        }
      }
      function pr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? pr(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = Xe(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = 'string' == typeof t.contentWindow.location.href;
          } catch (Ef) {
            n = !1;
          }
          if (!n) break;
          t = Xe((e = t.contentWindow).document);
        }
        return t;
      }
      function mr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      function gr(e) {
        var t = hr(),
          n = e.focusedElem,
          o = e.selectionRange;
        if (t !== n && n && n.ownerDocument && pr(n.ownerDocument.documentElement, n)) {
          if (null !== o && mr(n))
            if (((t = o.start), void 0 === (e = o.end) && (e = t), 'selectionStart' in n))
              (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
              e = e.getSelection();
              var r = n.textContent.length,
                i = Math.min(o.start, r);
              (o = void 0 === o.end ? i : Math.min(o.end, r)),
                !e.extend && i > o && ((r = o), (o = i), (i = r)),
                (r = fr(n, i));
              var a = fr(n, o);
              r &&
                a &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== r.node ||
                  e.anchorOffset !== r.offset ||
                  e.focusNode !== a.node ||
                  e.focusOffset !== a.offset) &&
                ((t = t.createRange()).setStart(r.node, r.offset),
                e.removeAllRanges(),
                i > o ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
          for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
        }
      }
      var br = de && 'documentMode' in document && 11 >= document.documentMode,
        vr = null,
        yr = null,
        wr = null,
        xr = !1;
      function kr(e, t, n) {
        var o = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        xr ||
          null == vr ||
          vr !== Xe(o) ||
          ((o =
            'selectionStart' in (o = vr) && mr(o)
              ? { start: o.selectionStart, end: o.selectionEnd }
              : {
                  anchorNode: (o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection())
                    .anchorNode,
                  anchorOffset: o.anchorOffset,
                  focusNode: o.focusNode,
                  focusOffset: o.focusOffset,
                }),
          (wr && ur(wr, o)) ||
            ((wr = o),
            0 < (o = Kr(yr, 'onSelect')).length &&
              ((t = new fo('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: o }), (t.target = vr))));
      }
      function $r(e, t) {
        var n = {};
        return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
      }
      var Er = {
          animationend: $r('Animation', 'AnimationEnd'),
          animationiteration: $r('Animation', 'AnimationIteration'),
          animationstart: $r('Animation', 'AnimationStart'),
          transitionend: $r('Transition', 'TransitionEnd'),
        },
        Sr = {},
        Cr = {};
      function Pr(e) {
        if (Sr[e]) return Sr[e];
        if (!Er[e]) return e;
        var t,
          n = Er[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t]);
        return e;
      }
      de &&
        ((Cr = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Er.animationend.animation,
          delete Er.animationiteration.animation,
          delete Er.animationstart.animation),
        'TransitionEvent' in window || delete Er.transitionend.transition);
      var Tr = Pr('animationend'),
        Rr = Pr('animationiteration'),
        Ir = Pr('animationstart'),
        Or = Pr('transitionend'),
        Lr = new Map(),
        Nr =
          'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
          );
      function _r(e, t) {
        Lr.set(e, t), ce(t, [e]);
      }
      for (var zr = 0; zr < Nr.length; zr++) {
        var Ar = Nr[zr];
        _r(Ar.toLowerCase(), 'on' + (Ar[0].toUpperCase() + Ar.slice(1)));
      }
      _r(Tr, 'onAnimationEnd'),
        _r(Rr, 'onAnimationIteration'),
        _r(Ir, 'onAnimationStart'),
        _r('dblclick', 'onDoubleClick'),
        _r('focusin', 'onFocus'),
        _r('focusout', 'onBlur'),
        _r(Or, 'onTransitionEnd'),
        ue('onMouseEnter', ['mouseout', 'mouseover']),
        ue('onMouseLeave', ['mouseout', 'mouseover']),
        ue('onPointerEnter', ['pointerout', 'pointerover']),
        ue('onPointerLeave', ['pointerout', 'pointerover']),
        ce('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        ce(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
        ),
        ce('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        ce('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        ce('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        ce('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
      var Mr =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
          ),
        Br = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Mr));
      function Dr(e, t, n) {
        var o = e.type || 'unknown-event';
        (e.currentTarget = n),
          (function (e, t, n, o, r, i, a, l, s) {
            if ((Ht.apply(this, arguments), Mt)) {
              if (!Mt) throw Error(ae(198));
              var c = Bt;
              (Mt = !1), (Bt = null), Dt || ((Dt = !0), (Vt = c));
            }
          })(o, t, void 0, e),
          (e.currentTarget = null);
      }
      function Vr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var o = e[n],
            r = o.event;
          o = o.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var a = o.length - 1; 0 <= a; a--) {
                var l = o[a],
                  s = l.instance,
                  c = l.currentTarget;
                if (((l = l.listener), s !== i && r.isPropagationStopped())) break e;
                Dr(r, l, c), (i = s);
              }
            else
              for (a = 0; a < o.length; a++) {
                if (
                  ((s = (l = o[a]).instance),
                  (c = l.currentTarget),
                  (l = l.listener),
                  s !== i && r.isPropagationStopped())
                )
                  break e;
                Dr(r, l, c), (i = s);
              }
          }
        }
        if (Dt) throw ((e = Vt), (Dt = !1), (Vt = null), e);
      }
      function jr(e, t) {
        var n = t[bi];
        void 0 === n && (n = t[bi] = new Set());
        var o = e + '__bubble';
        n.has(o) || (Wr(t, e, 2, !1), n.add(o));
      }
      function Hr(e, t, n) {
        var o = 0;
        t && (o |= 4), Wr(n, e, o, t);
      }
      var Fr = '_reactListening' + Math.random().toString(36).slice(2);
      function Ur(e) {
        if (!e[Fr]) {
          (e[Fr] = !0),
            le.forEach(function (t) {
              'selectionchange' !== t && (Br.has(t) || Hr(t, !1, e), Hr(t, !0, e));
            });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Fr] || ((t[Fr] = !0), Hr('selectionchange', !1, t));
        }
      }
      function Wr(e, t, n, o) {
        switch (Zn(t)) {
          case 1:
            var r = Qn;
            break;
          case 4:
            r = Kn;
            break;
          default:
            r = Xn;
        }
        (n = r.bind(null, t, n, e)),
          (r = void 0),
          !_t || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (r = !0),
          o
            ? void 0 !== r
              ? e.addEventListener(t, n, { capture: !0, passive: r })
              : e.addEventListener(t, n, !0)
            : void 0 !== r
            ? e.addEventListener(t, n, { passive: r })
            : e.addEventListener(t, n, !1);
      }
      function qr(e, t, n, o, r) {
        var i = o;
        if (0 == (1 & t) && 0 == (2 & t) && null !== o)
          e: for (;;) {
            if (null === o) return;
            var a = o.tag;
            if (3 === a || 4 === a) {
              var l = o.stateNode.containerInfo;
              if (l === r || (8 === l.nodeType && l.parentNode === r)) break;
              if (4 === a)
                for (a = o.return; null !== a; ) {
                  var s = a.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = a.stateNode.containerInfo) === r || (8 === s.nodeType && s.parentNode === r))
                  )
                    return;
                  a = a.return;
                }
              for (; null !== l; ) {
                if (null === (a = wi(l))) return;
                if (5 === (s = a.tag) || 6 === s) {
                  o = i = a;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            o = o.return;
          }
        Lt(function () {
          var o = i,
            r = kt(n),
            a = [];
          e: {
            var l = Lr.get(e);
            if (void 0 !== l) {
              var s = fo,
                c = e;
              switch (e) {
                case 'keypress':
                  if (0 === oo(n)) break e;
                case 'keydown':
                case 'keyup':
                  s = Ro;
                  break;
                case 'focusin':
                  (c = 'focus'), (s = vo);
                  break;
                case 'focusout':
                  (c = 'blur'), (s = vo);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  s = vo;
                  break;
                case 'click':
                  if (2 === n.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  s = go;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  s = bo;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  s = Oo;
                  break;
                case Tr:
                case Rr:
                case Ir:
                  s = yo;
                  break;
                case Or:
                  s = Lo;
                  break;
                case 'scroll':
                  s = ho;
                  break;
                case 'wheel':
                  s = _o;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  s = xo;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  s = Io;
              }
              var u = 0 != (4 & t),
                d = !u && 'scroll' === e,
                f = u ? (null !== l ? l + 'Capture' : null) : l;
              u = [];
              for (var p, h = o; null !== h; ) {
                var m = (p = h).stateNode;
                if (
                  (5 === p.tag && null !== m && ((p = m), null !== f && null != (m = Nt(h, f)) && u.push(Qr(h, m, p))),
                  d)
                )
                  break;
                h = h.return;
              }
              0 < u.length && ((l = new s(l, c, null, n, r)), a.push({ event: l, listeners: u }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((s = 'mouseout' === e || 'pointerout' === e),
              (!(l = 'mouseover' === e || 'pointerover' === e) ||
                n === xt ||
                !(c = n.relatedTarget || n.fromElement) ||
                (!wi(c) && !c[gi])) &&
                (s || l) &&
                ((l = r.window === r ? r : (l = r.ownerDocument) ? l.defaultView || l.parentWindow : window),
                s
                  ? ((s = o),
                    null !== (c = (c = n.relatedTarget || n.toElement) ? wi(c) : null) &&
                      (c !== (d = Ft(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                      (c = null))
                  : ((s = null), (c = o)),
                s !== c))
            ) {
              if (
                ((u = go),
                (m = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (h = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((u = Io), (m = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                (d = null == s ? l : ki(s)),
                (p = null == c ? l : ki(c)),
                ((l = new u(m, h + 'leave', s, n, r)).target = d),
                (l.relatedTarget = p),
                (m = null),
                wi(r) === o && (((u = new u(f, h + 'enter', c, n, r)).target = p), (u.relatedTarget = d), (m = u)),
                (d = m),
                s && c)
              )
                e: {
                  for (f = c, h = 0, p = u = s; p; p = Xr(p)) h++;
                  for (p = 0, m = f; m; m = Xr(m)) p++;
                  for (; 0 < h - p; ) (u = Xr(u)), h--;
                  for (; 0 < p - h; ) (f = Xr(f)), p--;
                  for (; h--; ) {
                    if (u === f || (null !== f && u === f.alternate)) break e;
                    (u = Xr(u)), (f = Xr(f));
                  }
                  u = null;
                }
              else u = null;
              null !== s && Yr(a, l, s, u, !1), null !== c && null !== d && Yr(a, d, c, u, !0);
            }
            if (
              'select' === (s = (l = o ? ki(o) : window).nodeName && l.nodeName.toLowerCase()) ||
              ('input' === s && 'file' === l.type)
            )
              var g = Zo;
            else if (qo(l))
              if (Jo) g = sr;
              else {
                g = ar;
                var b = ir;
              }
            else
              (s = l.nodeName) &&
                'input' === s.toLowerCase() &&
                ('checkbox' === l.type || 'radio' === l.type) &&
                (g = lr);
            switch (
              (g && (g = g(e, o))
                ? Qo(a, g, n, r)
                : (b && b(e, l, o),
                  'focusout' === e &&
                    (b = l._wrapperState) &&
                    b.controlled &&
                    'number' === l.type &&
                    tt(l, 'number', l.value)),
              (b = o ? ki(o) : window),
              e)
            ) {
              case 'focusin':
                (qo(b) || 'true' === b.contentEditable) && ((vr = b), (yr = o), (wr = null));
                break;
              case 'focusout':
                wr = yr = vr = null;
                break;
              case 'mousedown':
                xr = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (xr = !1), kr(a, n, r);
                break;
              case 'selectionchange':
                if (br) break;
              case 'keydown':
              case 'keyup':
                kr(a, n, r);
            }
            var v;
            if (Ao)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var y = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    y = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    y = 'onCompositionUpdate';
                    break e;
                }
                y = void 0;
              }
            else
              Uo
                ? Ho(e, n) && (y = 'onCompositionEnd')
                : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
            y &&
              (Do &&
                'ko' !== n.locale &&
                (Uo || 'onCompositionStart' !== y
                  ? 'onCompositionEnd' === y && Uo && (v = no())
                  : ((eo = 'value' in (Jn = r) ? Jn.value : Jn.textContent), (Uo = !0))),
              0 < (b = Kr(o, y)).length &&
                ((y = new ko(y, e, null, n, r)),
                a.push({ event: y, listeners: b }),
                (v || null !== (v = Fo(n))) && (y.data = v))),
              (v = Bo
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Fo(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((jo = !0), Vo);
                      case 'textInput':
                        return (e = t.data) === Vo && jo ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Uo)
                      return 'compositionend' === e || (!Ao && Ho(e, t))
                        ? ((e = no()), (to = eo = Jn = null), (Uo = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                      default:
                        return null;
                      case 'keypress':
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return Do && 'ko' !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (o = Kr(o, 'onBeforeInput')).length &&
                ((r = new ko('onBeforeInput', 'beforeinput', null, n, r)),
                a.push({ event: r, listeners: o }),
                (r.data = v));
          }
          Vr(a, t);
        });
      }
      function Qr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Kr(e, t) {
        for (var n = t + 'Capture', o = []; null !== e; ) {
          var r = e,
            i = r.stateNode;
          5 === r.tag &&
            null !== i &&
            ((r = i), null != (i = Nt(e, n)) && o.unshift(Qr(e, i, r)), null != (i = Nt(e, t)) && o.push(Qr(e, i, r))),
            (e = e.return);
        }
        return o;
      }
      function Xr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Yr(e, t, n, o, r) {
        for (var i = t._reactName, a = []; null !== n && n !== o; ) {
          var l = n,
            s = l.alternate,
            c = l.stateNode;
          if (null !== s && s === o) break;
          5 === l.tag &&
            null !== c &&
            ((l = c),
            r
              ? null != (s = Nt(n, i)) && a.unshift(Qr(n, s, l))
              : r || (null != (s = Nt(n, i)) && a.push(Qr(n, s, l)))),
            (n = n.return);
        }
        0 !== a.length && e.push({ event: t, listeners: a });
      }
      var Gr = /\r\n?/g,
        Zr = /\u0000|\uFFFD/g;
      function Jr(e) {
        return ('string' == typeof e ? e : '' + e).replace(Gr, '\n').replace(Zr, '');
      }
      function ei(e, t, n) {
        if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(ae(425));
      }
      function ti() {}
      var ni = null,
        oi = null;
      function ri(e, t) {
        return (
          'textarea' === e ||
          'noscript' === e ||
          'string' == typeof t.children ||
          'number' == typeof t.children ||
          ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var ii = 'function' == typeof setTimeout ? setTimeout : void 0,
        ai = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        li = 'function' == typeof Promise ? Promise : void 0,
        si =
          'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== li
            ? function (e) {
                return li.resolve(null).then(e).catch(ci);
              }
            : ii;
      function ci(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function ui(e, t) {
        var n = t,
          o = 0;
        do {
          var r = n.nextSibling;
          if ((e.removeChild(n), r && 8 === r.nodeType))
            if ('/$' === (n = r.data)) {
              if (0 === o) return e.removeChild(r), void Un(t);
              o--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || o++;
          n = r;
        } while (n);
        Un(t);
      }
      function di(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
            if ('/$' === t) return null;
          }
        }
        return e;
      }
      function fi(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var pi = Math.random().toString(36).slice(2),
        hi = '__reactFiber$' + pi,
        mi = '__reactProps$' + pi,
        gi = '__reactContainer$' + pi,
        bi = '__reactEvents$' + pi,
        vi = '__reactListeners$' + pi,
        yi = '__reactHandles$' + pi;
      function wi(e) {
        var t = e[hi];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[gi] || n[hi])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = fi(e); null !== e; ) {
                if ((n = e[hi])) return n;
                e = fi(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function xi(e) {
        return !(e = e[hi] || e[gi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
      }
      function ki(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(ae(33));
      }
      function $i(e) {
        return e[mi] || null;
      }
      var Ei = [],
        Si = -1;
      function Ci(e) {
        return { current: e };
      }
      function Pi(e) {
        0 > Si || ((e.current = Ei[Si]), (Ei[Si] = null), Si--);
      }
      function Ti(e, t) {
        Si++, (Ei[Si] = e.current), (e.current = t);
      }
      var Ri = {},
        Ii = Ci(Ri),
        Oi = Ci(!1),
        Li = Ri;
      function Ni(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ri;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var r,
          i = {};
        for (r in n) i[r] = t[r];
        return (
          o &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function _i(e) {
        return null != (e = e.childContextTypes);
      }
      function zi() {
        Pi(Oi), Pi(Ii);
      }
      function Ai(e, t, n) {
        if (Ii.current !== Ri) throw Error(ae(168));
        Ti(Ii, t), Ti(Oi, n);
      }
      function Mi(e, t, n) {
        var o = e.stateNode;
        if (((t = t.childContextTypes), 'function' != typeof o.getChildContext)) return n;
        for (var r in (o = o.getChildContext())) if (!(r in t)) throw Error(ae(108, Ue(e) || 'Unknown', r));
        return Be({}, n, o);
      }
      function Bi(e) {
        return (
          (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ri),
          (Li = Ii.current),
          Ti(Ii, e),
          Ti(Oi, Oi.current),
          !0
        );
      }
      function Di(e, t, n) {
        var o = e.stateNode;
        if (!o) throw Error(ae(169));
        n ? ((e = Mi(e, t, Li)), (o.__reactInternalMemoizedMergedChildContext = e), Pi(Oi), Pi(Ii), Ti(Ii, e)) : Pi(Oi),
          Ti(Oi, n);
      }
      var Vi = null,
        ji = !1,
        Hi = !1;
      function Fi(e) {
        null === Vi ? (Vi = [e]) : Vi.push(e);
      }
      function Ui() {
        if (!Hi && null !== Vi) {
          Hi = !0;
          var e = 0,
            t = xn;
          try {
            var n = Vi;
            for (xn = 1; e < n.length; e++) {
              var o = n[e];
              do {
                o = o(!0);
              } while (null !== o);
            }
            (Vi = null), (ji = !1);
          } catch (Sf) {
            throw (null !== Vi && (Vi = Vi.slice(e + 1)), Kt(en, Ui), Sf);
          } finally {
            (xn = t), (Hi = !1);
          }
        }
        return null;
      }
      var Wi = [],
        qi = 0,
        Qi = null,
        Ki = 0,
        Xi = [],
        Yi = 0,
        Gi = null,
        Zi = 1,
        Ji = '';
      function ea(e, t) {
        (Wi[qi++] = Ki), (Wi[qi++] = Qi), (Qi = e), (Ki = t);
      }
      function ta(e, t, n) {
        (Xi[Yi++] = Zi), (Xi[Yi++] = Ji), (Xi[Yi++] = Gi), (Gi = e);
        var o = Zi;
        e = Ji;
        var r = 32 - sn(o) - 1;
        (o &= ~(1 << r)), (n += 1);
        var i = 32 - sn(t) + r;
        if (30 < i) {
          var a = r - (r % 5);
          (i = (o & ((1 << a) - 1)).toString(32)),
            (o >>= a),
            (r -= a),
            (Zi = (1 << (32 - sn(t) + r)) | (n << r) | o),
            (Ji = i + e);
        } else (Zi = (1 << i) | (n << r) | o), (Ji = e);
      }
      function na(e) {
        null !== e.return && (ea(e, 1), ta(e, 1, 0));
      }
      function oa(e) {
        for (; e === Qi; ) (Qi = Wi[--qi]), (Wi[qi] = null), (Ki = Wi[--qi]), (Wi[qi] = null);
        for (; e === Gi; )
          (Gi = Xi[--Yi]), (Xi[Yi] = null), (Ji = Xi[--Yi]), (Xi[Yi] = null), (Zi = Xi[--Yi]), (Xi[Yi] = null);
      }
      var ra = null,
        ia = null,
        aa = !1,
        la = null;
      function sa(e, t) {
        var n = Nu(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.stateNode = t),
          (n.return = e),
          null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
      }
      function ca(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
              ((e.stateNode = t), (ra = e), (ia = di(t.firstChild)), !0)
            );
          case 6:
            return (
              null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), (ra = e), (ia = null), !0)
            );
          case 13:
            return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((n = null !== Gi ? { id: Zi, overflow: Ji } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              ((n = Nu(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (ra = e),
              (ia = null),
              !0)
            );
          default:
            return !1;
        }
      }
      function ua(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags);
      }
      function da(e) {
        if (aa) {
          var t = ia;
          if (t) {
            var n = t;
            if (!ca(e, t)) {
              if (ua(e)) throw Error(ae(418));
              t = di(n.nextSibling);
              var o = ra;
              t && ca(e, t) ? sa(o, n) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
            }
          } else {
            if (ua(e)) throw Error(ae(418));
            (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
          }
        }
      }
      function fa(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
        ra = e;
      }
      function pa(e) {
        if (e !== ra) return !1;
        if (!aa) return fa(e), (aa = !0), !1;
        var t;
        if (
          ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !ri(e.type, e.memoizedProps)),
          t && (t = ia))
        ) {
          if (ua(e)) throw (ha(), Error(ae(418)));
          for (; t; ) sa(e, t), (t = di(t.nextSibling));
        }
        if ((fa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ae(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n) {
                  if (0 === t) {
                    ia = di(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
              }
              e = e.nextSibling;
            }
            ia = null;
          }
        } else ia = ra ? di(e.stateNode.nextSibling) : null;
        return !0;
      }
      function ha() {
        for (var e = ia; e; ) e = di(e.nextSibling);
      }
      function ma() {
        (ia = ra = null), (aa = !1);
      }
      function ga(e) {
        null === la ? (la = [e]) : la.push(e);
      }
      var ba = xe.ReactCurrentBatchConfig;
      function va(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = Be({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var ya = Ci(null),
        wa = null,
        xa = null,
        ka = null;
      function $a() {
        ka = xa = wa = null;
      }
      function Ea(e) {
        var t = ya.current;
        Pi(ya), (e._currentValue = t);
      }
      function Sa(e, t, n) {
        for (; null !== e; ) {
          var o = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== o && (o.childLanes |= t))
              : null !== o && (o.childLanes & t) !== t && (o.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function Ca(e, t) {
        (wa = e),
          (ka = xa = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (xs = !0), (e.firstContext = null));
      }
      function Pa(e) {
        var t = e._currentValue;
        if (ka !== e)
          if (((e = { context: e, memoizedValue: t, next: null }), null === xa)) {
            if (null === wa) throw Error(ae(308));
            (xa = e), (wa.dependencies = { lanes: 0, firstContext: e });
          } else xa = xa.next = e;
        return t;
      }
      var Ta = null;
      function Ra(e) {
        null === Ta ? (Ta = [e]) : Ta.push(e);
      }
      function Ia(e, t, n, o) {
        var r = t.interleaved;
        return null === r ? ((n.next = n), Ra(t)) : ((n.next = r.next), (r.next = n)), (t.interleaved = n), Oa(e, o);
      }
      function Oa(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      var La = !1;
      function Na(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function _a(e, t) {
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
      function za(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function Aa(e, t, n) {
        var o = e.updateQueue;
        if (null === o) return null;
        if (((o = o.shared), 0 != (2 & Ic))) {
          var r = o.pending;
          return null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)), (o.pending = t), Oa(e, n);
        }
        return (
          null === (r = o.interleaved) ? ((t.next = t), Ra(o)) : ((t.next = r.next), (r.next = t)),
          (o.interleaved = t),
          Oa(e, n)
        );
      }
      function Ma(e, t, n) {
        if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
          var o = t.lanes;
          (n |= o &= e.pendingLanes), (t.lanes = n), wn(e, n);
        }
      }
      function Ba(e, t) {
        var n = e.updateQueue,
          o = e.alternate;
        if (null !== o && n === (o = o.updateQueue)) {
          var r = null,
            i = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var a = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === i ? (r = i = a) : (i = i.next = a), (n = n.next);
            } while (null !== n);
            null === i ? (r = i = t) : (i = i.next = t);
          } else r = i = t;
          return (
            (n = {
              baseState: o.baseState,
              firstBaseUpdate: r,
              lastBaseUpdate: i,
              shared: o.shared,
              effects: o.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
      }
      function Da(e, t, n, o) {
        var r = e.updateQueue;
        La = !1;
        var i = r.firstBaseUpdate,
          a = r.lastBaseUpdate,
          l = r.shared.pending;
        if (null !== l) {
          r.shared.pending = null;
          var s = l,
            c = s.next;
          (s.next = null), null === a ? (i = c) : (a.next = c), (a = s);
          var u = e.alternate;
          null !== u &&
            (l = (u = u.updateQueue).lastBaseUpdate) !== a &&
            (null === l ? (u.firstBaseUpdate = c) : (l.next = c), (u.lastBaseUpdate = s));
        }
        if (null !== i) {
          var d = r.baseState;
          for (a = 0, u = c = s = null, l = i; ; ) {
            var f = l.lane,
              p = l.eventTime;
            if ((o & f) === f) {
              null !== u &&
                (u = u.next =
                  { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
              e: {
                var h = e,
                  m = l;
                switch (((f = t), (p = n), m.tag)) {
                  case 1:
                    if ('function' == typeof (h = m.payload)) {
                      d = h.call(p, d, f);
                      break e;
                    }
                    d = h;
                    break e;
                  case 3:
                    h.flags = (-65537 & h.flags) | 128;
                  case 0:
                    if (null == (f = 'function' == typeof (h = m.payload) ? h.call(p, d, f) : h)) break e;
                    d = Be({}, d, f);
                    break e;
                  case 2:
                    La = !0;
                }
              }
              null !== l.callback &&
                0 !== l.lane &&
                ((e.flags |= 64), null === (f = r.effects) ? (r.effects = [l]) : f.push(l));
            } else
              (p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                (a |= f);
            if (null === (l = l.next)) {
              if (null === (l = r.shared.pending)) break;
              (l = (f = l).next), (f.next = null), (r.lastBaseUpdate = f), (r.shared.pending = null);
            }
          }
          if (
            (null === u && (s = d),
            (r.baseState = s),
            (r.firstBaseUpdate = c),
            (r.lastBaseUpdate = u),
            null !== (t = r.shared.interleaved))
          ) {
            r = t;
            do {
              (a |= r.lane), (r = r.next);
            } while (r !== t);
          } else null === i && (r.shared.lanes = 0);
          (Bc |= a), (e.lanes = a), (e.memoizedState = d);
        }
      }
      function Va(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var o = e[t],
              r = o.callback;
            if (null !== r) {
              if (((o.callback = null), (o = n), 'function' != typeof r)) throw Error(ae(191, r));
              r.call(o);
            }
          }
      }
      var ja = new re.Component().refs;
      function Ha(e, t, n, o) {
        (n = null == (n = n(o, (t = e.memoizedState))) ? t : Be({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var Fa = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ft(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var o = nu(),
            r = ou(e),
            i = za(o, r);
          (i.payload = t), null != n && (i.callback = n), null !== (t = Aa(e, i, r)) && (ru(t, e, r, o), Ma(t, e, r));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var o = nu(),
            r = ou(e),
            i = za(o, r);
          (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = Aa(e, i, r)) && (ru(t, e, r, o), Ma(t, e, r));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = nu(),
            o = ou(e),
            r = za(n, o);
          (r.tag = 2), null != t && (r.callback = t), null !== (t = Aa(e, r, o)) && (ru(t, e, o, n), Ma(t, e, o));
        },
      };
      function Ua(e, t, n, o, r, i, a) {
        return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(o, i, a)
          : !(t.prototype && t.prototype.isPureReactComponent && ur(n, o) && ur(r, i));
      }
      function Wa(e, t, n) {
        var o = !1,
          r = Ri,
          i = t.contextType;
        return (
          'object' == typeof i && null !== i
            ? (i = Pa(i))
            : ((r = _i(t) ? Li : Ii.current), (i = (o = null != (o = t.contextTypes)) ? Ni(e, r) : Ri)),
          (t = new t(n, i)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Fa),
          (e.stateNode = t),
          (t._reactInternals = e),
          o &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function qa(e, t, n, o) {
        (e = t.state),
          'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, o),
          'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, o),
          t.state !== e && Fa.enqueueReplaceState(t, t.state, null);
      }
      function Qa(e, t, n, o) {
        var r = e.stateNode;
        (r.props = n), (r.state = e.memoizedState), (r.refs = ja), Na(e);
        var i = t.contextType;
        'object' == typeof i && null !== i
          ? (r.context = Pa(i))
          : ((i = _i(t) ? Li : Ii.current), (r.context = Ni(e, i))),
          (r.state = e.memoizedState),
          'function' == typeof (i = t.getDerivedStateFromProps) && (Ha(e, t, i, n), (r.state = e.memoizedState)),
          'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof r.getSnapshotBeforeUpdate ||
            ('function' != typeof r.UNSAFE_componentWillMount && 'function' != typeof r.componentWillMount) ||
            ((t = r.state),
            'function' == typeof r.componentWillMount && r.componentWillMount(),
            'function' == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
            t !== r.state && Fa.enqueueReplaceState(r, r.state, null),
            Da(e, n, r, o),
            (r.state = e.memoizedState)),
          'function' == typeof r.componentDidMount && (e.flags |= 4194308);
      }
      function Ka(e, t, n) {
        if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(ae(309));
              var o = n.stateNode;
            }
            if (!o) throw Error(ae(147, e));
            var r = o,
              i = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === i
              ? t.ref
              : ((t = function (e) {
                  var t = r.refs;
                  t === ja && (t = r.refs = {}), null === e ? delete t[i] : (t[i] = e);
                }),
                (t._stringRef = i),
                t);
          }
          if ('string' != typeof e) throw Error(ae(284));
          if (!n._owner) throw Error(ae(290, e));
        }
        return e;
      }
      function Xa(e, t) {
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(ae(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
        );
      }
      function Ya(e) {
        return (0, e._init)(e._payload);
      }
      function Ga(e) {
        function t(t, n) {
          if (e) {
            var o = t.deletions;
            null === o ? ((t.deletions = [n]), (t.flags |= 16)) : o.push(n);
          }
        }
        function n(n, o) {
          if (!e) return null;
          for (; null !== o; ) t(n, o), (o = o.sibling);
          return null;
        }
        function o(e, t) {
          for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
          return e;
        }
        function r(e, t) {
          return ((e = zu(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, o) {
          return (
            (t.index = o),
            e
              ? null !== (o = t.alternate)
                ? (o = o.index) < n
                  ? ((t.flags |= 2), n)
                  : o
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function a(t) {
          return e && null === t.alternate && (t.flags |= 2), t;
        }
        function l(e, t, n, o) {
          return null === t || 6 !== t.tag ? (((t = Du(n, e.mode, o)).return = e), t) : (((t = r(t, n)).return = e), t);
        }
        function s(e, t, n, o) {
          var i = n.type;
          return i === Ee
            ? u(e, t, n.props.children, o, n.key)
            : null !== t &&
              (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === Ne && Ya(i) === t.type))
            ? (((o = r(t, n.props)).ref = Ka(e, t, n)), (o.return = e), o)
            : (((o = Au(n.type, n.key, n.props, null, e.mode, o)).ref = Ka(e, t, n)), (o.return = e), o);
        }
        function c(e, t, n, o) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Vu(n, e.mode, o)).return = e), t)
            : (((t = r(t, n.children || [])).return = e), t);
        }
        function u(e, t, n, o, i) {
          return null === t || 7 !== t.tag
            ? (((t = Mu(n, e.mode, o, i)).return = e), t)
            : (((t = r(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return ((t = Du('' + t, e.mode, n)).return = e), t;
          if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
              case ke:
                return ((n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = Ka(e, null, t)), (n.return = e), n;
              case $e:
                return ((t = Vu(t, e.mode, n)).return = e), t;
              case Ne:
                return d(e, (0, t._init)(t._payload), n);
            }
            if (nt(t) || Ae(t)) return ((t = Mu(t, e.mode, n, null)).return = e), t;
            Xa(e, t);
          }
          return null;
        }
        function f(e, t, n, o) {
          var r = null !== t ? t.key : null;
          if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== r ? null : l(e, t, '' + n, o);
          if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
              case ke:
                return n.key === r ? s(e, t, n, o) : null;
              case $e:
                return n.key === r ? c(e, t, n, o) : null;
              case Ne:
                return f(e, t, (r = n._init)(n._payload), o);
            }
            if (nt(n) || Ae(n)) return null !== r ? null : u(e, t, n, o, null);
            Xa(e, n);
          }
          return null;
        }
        function p(e, t, n, o, r) {
          if (('string' == typeof o && '' !== o) || 'number' == typeof o)
            return l(t, (e = e.get(n) || null), '' + o, r);
          if ('object' == typeof o && null !== o) {
            switch (o.$$typeof) {
              case ke:
                return s(t, (e = e.get(null === o.key ? n : o.key) || null), o, r);
              case $e:
                return c(t, (e = e.get(null === o.key ? n : o.key) || null), o, r);
              case Ne:
                return p(e, t, n, (0, o._init)(o._payload), r);
            }
            if (nt(o) || Ae(o)) return u(t, (e = e.get(n) || null), o, r, null);
            Xa(t, o);
          }
          return null;
        }
        function h(r, a, l, s) {
          for (var c = null, u = null, h = a, m = (a = 0), g = null; null !== h && m < l.length; m++) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
            var b = f(r, h, l[m], s);
            if (null === b) {
              null === h && (h = g);
              break;
            }
            e && h && null === b.alternate && t(r, h),
              (a = i(b, a, m)),
              null === u ? (c = b) : (u.sibling = b),
              (u = b),
              (h = g);
          }
          if (m === l.length) return n(r, h), aa && ea(r, m), c;
          if (null === h) {
            for (; m < l.length; m++)
              null !== (h = d(r, l[m], s)) && ((a = i(h, a, m)), null === u ? (c = h) : (u.sibling = h), (u = h));
            return aa && ea(r, m), c;
          }
          for (h = o(r, h); m < l.length; m++)
            null !== (g = p(h, r, m, l[m], s)) &&
              (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
              (a = i(g, a, m)),
              null === u ? (c = g) : (u.sibling = g),
              (u = g));
          return (
            e &&
              h.forEach(function (e) {
                return t(r, e);
              }),
            aa && ea(r, m),
            c
          );
        }
        function m(r, a, l, s) {
          var c = Ae(l);
          if ('function' != typeof c) throw Error(ae(150));
          if (null == (l = c.call(l))) throw Error(ae(151));
          for (
            var u = (c = null), h = a, m = (a = 0), g = null, b = l.next();
            null !== h && !b.done;
            m++, b = l.next()
          ) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
            var v = f(r, h, b.value, s);
            if (null === v) {
              null === h && (h = g);
              break;
            }
            e && h && null === v.alternate && t(r, h),
              (a = i(v, a, m)),
              null === u ? (c = v) : (u.sibling = v),
              (u = v),
              (h = g);
          }
          if (b.done) return n(r, h), aa && ea(r, m), c;
          if (null === h) {
            for (; !b.done; m++, b = l.next())
              null !== (b = d(r, b.value, s)) && ((a = i(b, a, m)), null === u ? (c = b) : (u.sibling = b), (u = b));
            return aa && ea(r, m), c;
          }
          for (h = o(r, h); !b.done; m++, b = l.next())
            null !== (b = p(h, r, m, b.value, s)) &&
              (e && null !== b.alternate && h.delete(null === b.key ? m : b.key),
              (a = i(b, a, m)),
              null === u ? (c = b) : (u.sibling = b),
              (u = b));
          return (
            e &&
              h.forEach(function (e) {
                return t(r, e);
              }),
            aa && ea(r, m),
            c
          );
        }
        return function e(o, i, l, s) {
          if (
            ('object' == typeof l && null !== l && l.type === Ee && null === l.key && (l = l.props.children),
            'object' == typeof l && null !== l)
          ) {
            switch (l.$$typeof) {
              case ke:
                e: {
                  for (var c = l.key, u = i; null !== u; ) {
                    if (u.key === c) {
                      if ((c = l.type) === Ee) {
                        if (7 === u.tag) {
                          n(o, u.sibling), ((i = r(u, l.props.children)).return = o), (o = i);
                          break e;
                        }
                      } else if (
                        u.elementType === c ||
                        ('object' == typeof c && null !== c && c.$$typeof === Ne && Ya(c) === u.type)
                      ) {
                        n(o, u.sibling), ((i = r(u, l.props)).ref = Ka(o, u, l)), (i.return = o), (o = i);
                        break e;
                      }
                      n(o, u);
                      break;
                    }
                    t(o, u), (u = u.sibling);
                  }
                  l.type === Ee
                    ? (((i = Mu(l.props.children, o.mode, s, l.key)).return = o), (o = i))
                    : (((s = Au(l.type, l.key, l.props, null, o.mode, s)).ref = Ka(o, i, l)), (s.return = o), (o = s));
                }
                return a(o);
              case $e:
                e: {
                  for (u = l.key; null !== i; ) {
                    if (i.key === u) {
                      if (
                        4 === i.tag &&
                        i.stateNode.containerInfo === l.containerInfo &&
                        i.stateNode.implementation === l.implementation
                      ) {
                        n(o, i.sibling), ((i = r(i, l.children || [])).return = o), (o = i);
                        break e;
                      }
                      n(o, i);
                      break;
                    }
                    t(o, i), (i = i.sibling);
                  }
                  ((i = Vu(l, o.mode, s)).return = o), (o = i);
                }
                return a(o);
              case Ne:
                return e(o, i, (u = l._init)(l._payload), s);
            }
            if (nt(l)) return h(o, i, l, s);
            if (Ae(l)) return m(o, i, l, s);
            Xa(o, l);
          }
          return ('string' == typeof l && '' !== l) || 'number' == typeof l
            ? ((l = '' + l),
              null !== i && 6 === i.tag
                ? (n(o, i.sibling), ((i = r(i, l)).return = o), (o = i))
                : (n(o, i), ((i = Du(l, o.mode, s)).return = o), (o = i)),
              a(o))
            : n(o, i);
        };
      }
      var Za = Ga(!0),
        Ja = Ga(!1),
        el = {},
        tl = Ci(el),
        nl = Ci(el),
        ol = Ci(el);
      function rl(e) {
        if (e === el) throw Error(ae(174));
        return e;
      }
      function il(e, t) {
        switch ((Ti(ol, t), Ti(nl, e), Ti(tl, el), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ct(null, '');
            break;
          default:
            t = ct((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
        }
        Pi(tl), Ti(tl, t);
      }
      function al() {
        Pi(tl), Pi(nl), Pi(ol);
      }
      function ll(e) {
        rl(ol.current);
        var t = rl(tl.current),
          n = ct(t, e.type);
        t !== n && (Ti(nl, e), Ti(tl, n));
      }
      function sl(e) {
        nl.current === e && (Pi(tl), Pi(nl));
      }
      var cl = Ci(0);
      function ul(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var dl = [];
      function fl() {
        for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
        dl.length = 0;
      }
      var pl = xe.ReactCurrentDispatcher,
        hl = xe.ReactCurrentBatchConfig,
        ml = 0,
        gl = null,
        bl = null,
        vl = null,
        yl = !1,
        wl = !1,
        xl = 0,
        kl = 0;
      function $l() {
        throw Error(ae(321));
      }
      function El(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!cr(e[n], t[n])) return !1;
        return !0;
      }
      function Sl(e, t, n, o, r, i) {
        if (
          ((ml = i),
          (gl = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (pl.current = null === e || null === e.memoizedState ? ss : cs),
          (e = n(o, r)),
          wl)
        ) {
          i = 0;
          do {
            if (((wl = !1), (xl = 0), 25 <= i)) throw Error(ae(301));
            (i += 1), (vl = bl = null), (t.updateQueue = null), (pl.current = us), (e = n(o, r));
          } while (wl);
        }
        if (((pl.current = ls), (t = null !== bl && null !== bl.next), (ml = 0), (vl = bl = gl = null), (yl = !1), t))
          throw Error(ae(300));
        return e;
      }
      function Cl() {
        var e = 0 !== xl;
        return (xl = 0), e;
      }
      function Pl() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === vl ? (gl.memoizedState = vl = e) : (vl = vl.next = e), vl;
      }
      function Tl() {
        if (null === bl) {
          var e = gl.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = bl.next;
        var t = null === vl ? gl.memoizedState : vl.next;
        if (null !== t) (vl = t), (bl = e);
        else {
          if (null === e) throw Error(ae(310));
          (e = {
            memoizedState: (bl = e).memoizedState,
            baseState: bl.baseState,
            baseQueue: bl.baseQueue,
            queue: bl.queue,
            next: null,
          }),
            null === vl ? (gl.memoizedState = vl = e) : (vl = vl.next = e);
        }
        return vl;
      }
      function Rl(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      function Il(e) {
        var t = Tl(),
          n = t.queue;
        if (null === n) throw Error(ae(311));
        n.lastRenderedReducer = e;
        var o = bl,
          r = o.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== r) {
            var a = r.next;
            (r.next = i.next), (i.next = a);
          }
          (o.baseQueue = r = i), (n.pending = null);
        }
        if (null !== r) {
          (i = r.next), (o = o.baseState);
          var l = (a = null),
            s = null,
            c = i;
          do {
            var u = c.lane;
            if ((ml & u) === u)
              null !== s &&
                (s = s.next =
                  { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
                (o = c.hasEagerState ? c.eagerState : e(o, c.action));
            else {
              var d = {
                lane: u,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              };
              null === s ? ((l = s = d), (a = o)) : (s = s.next = d), (gl.lanes |= u), (Bc |= u);
            }
            c = c.next;
          } while (null !== c && c !== i);
          null === s ? (a = o) : (s.next = l),
            cr(o, t.memoizedState) || (xs = !0),
            (t.memoizedState = o),
            (t.baseState = a),
            (t.baseQueue = s),
            (n.lastRenderedState = o);
        }
        if (null !== (e = n.interleaved)) {
          r = e;
          do {
            (i = r.lane), (gl.lanes |= i), (Bc |= i), (r = r.next);
          } while (r !== e);
        } else null === r && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
      }
      function Ol(e) {
        var t = Tl(),
          n = t.queue;
        if (null === n) throw Error(ae(311));
        n.lastRenderedReducer = e;
        var o = n.dispatch,
          r = n.pending,
          i = t.memoizedState;
        if (null !== r) {
          n.pending = null;
          var a = (r = r.next);
          do {
            (i = e(i, a.action)), (a = a.next);
          } while (a !== r);
          cr(i, t.memoizedState) || (xs = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, o];
      }
      function Ll() {}
      function Nl(e, t) {
        var n = gl,
          o = Tl(),
          r = t(),
          i = !cr(o.memoizedState, r);
        if (
          (i && ((o.memoizedState = r), (xs = !0)),
          (o = o.queue),
          Wl(Al.bind(null, n, o, e), [e]),
          o.getSnapshot !== t || i || (null !== vl && 1 & vl.memoizedState.tag))
        ) {
          if (((n.flags |= 2048), Vl(9, zl.bind(null, n, o, r, t), void 0, null), null === Oc)) throw Error(ae(349));
          0 != (30 & ml) || _l(n, t, r);
        }
        return r;
      }
      function _l(e, t, n) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = gl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (gl.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e);
      }
      function zl(e, t, n, o) {
        (t.value = n), (t.getSnapshot = o), Ml(t) && Bl(e);
      }
      function Al(e, t, n) {
        return n(function () {
          Ml(t) && Bl(e);
        });
      }
      function Ml(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !cr(e, n);
        } catch (Ef) {
          return !0;
        }
      }
      function Bl(e) {
        var t = Oa(e, 1);
        null !== t && ru(t, e, 1, -1);
      }
      function Dl(e) {
        var t = Pl();
        return (
          'function' == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Rl,
            lastRenderedState: e,
          }),
          (t.queue = e),
          (e = e.dispatch = os.bind(null, gl, e)),
          [t.memoizedState, e]
        );
      }
      function Vl(e, t, n, o) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
          null === (t = gl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (gl.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e)),
          e
        );
      }
      function jl() {
        return Tl().memoizedState;
      }
      function Hl(e, t, n, o) {
        var r = Pl();
        (gl.flags |= e), (r.memoizedState = Vl(1 | t, n, void 0, void 0 === o ? null : o));
      }
      function Fl(e, t, n, o) {
        var r = Tl();
        o = void 0 === o ? null : o;
        var i = void 0;
        if (null !== bl) {
          var a = bl.memoizedState;
          if (((i = a.destroy), null !== o && El(o, a.deps))) return void (r.memoizedState = Vl(t, n, i, o));
        }
        (gl.flags |= e), (r.memoizedState = Vl(1 | t, n, i, o));
      }
      function Ul(e, t) {
        return Hl(8390656, 8, e, t);
      }
      function Wl(e, t) {
        return Fl(2048, 8, e, t);
      }
      function ql(e, t) {
        return Fl(4, 2, e, t);
      }
      function Ql(e, t) {
        return Fl(4, 4, e, t);
      }
      function Kl(e, t) {
        return 'function' == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Xl(e, t, n) {
        return (n = null != n ? n.concat([e]) : null), Fl(4, 4, Kl.bind(null, t, e), n);
      }
      function Yl() {}
      function Gl(e, t) {
        var n = Tl();
        t = void 0 === t ? null : t;
        var o = n.memoizedState;
        return null !== o && null !== t && El(t, o[1]) ? o[0] : ((n.memoizedState = [e, t]), e);
      }
      function Zl(e, t) {
        var n = Tl();
        t = void 0 === t ? null : t;
        var o = n.memoizedState;
        return null !== o && null !== t && El(t, o[1]) ? o[0] : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Jl(e, t, n) {
        return 0 == (21 & ml)
          ? (e.baseState && ((e.baseState = !1), (xs = !0)), (e.memoizedState = n))
          : (cr(n, t) || ((n = bn()), (gl.lanes |= n), (Bc |= n), (e.baseState = !0)), t);
      }
      function es(e, t) {
        var n = xn;
        (xn = 0 !== n && 4 > n ? n : 4), e(!0);
        var o = hl.transition;
        hl.transition = {};
        try {
          e(!1), t();
        } finally {
          (xn = n), (hl.transition = o);
        }
      }
      function ts() {
        return Tl().memoizedState;
      }
      function ns(e, t, n) {
        var o = ou(e);
        (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }),
          rs(e) ? is(t, n) : null !== (n = Ia(e, t, n, o)) && (ru(n, e, o, nu()), as(n, t, o));
      }
      function os(e, t, n) {
        var o = ou(e),
          r = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (rs(e)) is(t, r);
        else {
          var i = e.alternate;
          if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
              var a = t.lastRenderedState,
                l = i(a, n);
              if (((r.hasEagerState = !0), (r.eagerState = l), cr(l, a))) {
                var s = t.interleaved;
                return null === s ? ((r.next = r), Ra(t)) : ((r.next = s.next), (s.next = r)), void (t.interleaved = r);
              }
            } catch (If) {}
          null !== (n = Ia(e, t, r, o)) && (ru(n, e, o, (r = nu())), as(n, t, o));
        }
      }
      function rs(e) {
        var t = e.alternate;
        return e === gl || (null !== t && t === gl);
      }
      function is(e, t) {
        wl = yl = !0;
        var n = e.pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
      }
      function as(e, t, n) {
        if (0 != (4194240 & n)) {
          var o = t.lanes;
          (n |= o &= e.pendingLanes), (t.lanes = n), wn(e, n);
        }
      }
      var ls = {
          readContext: Pa,
          useCallback: $l,
          useContext: $l,
          useEffect: $l,
          useImperativeHandle: $l,
          useInsertionEffect: $l,
          useLayoutEffect: $l,
          useMemo: $l,
          useReducer: $l,
          useRef: $l,
          useState: $l,
          useDebugValue: $l,
          useDeferredValue: $l,
          useTransition: $l,
          useMutableSource: $l,
          useSyncExternalStore: $l,
          useId: $l,
          unstable_isNewReconciler: !1,
        },
        ss = {
          readContext: Pa,
          useCallback: function (e, t) {
            return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Pa,
          useEffect: Ul,
          useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), Hl(4194308, 4, Kl.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Hl(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            return Hl(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = Pl();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
          },
          useReducer: function (e, t, n) {
            var o = Pl();
            return (
              (t = void 0 !== n ? n(t) : t),
              (o.memoizedState = o.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
              (o.queue = e),
              (e = e.dispatch = ns.bind(null, gl, e)),
              [o.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Pl().memoizedState = e);
          },
          useState: Dl,
          useDebugValue: Yl,
          useDeferredValue: function (e) {
            return (Pl().memoizedState = e);
          },
          useTransition: function () {
            var e = Dl(!1),
              t = e[0];
            return (e = es.bind(null, e[1])), (Pl().memoizedState = e), [t, e];
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, n) {
            var o = gl,
              r = Pl();
            if (aa) {
              if (void 0 === n) throw Error(ae(407));
              n = n();
            } else {
              if (((n = t()), null === Oc)) throw Error(ae(349));
              0 != (30 & ml) || _l(o, t, n);
            }
            r.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
              (r.queue = i),
              Ul(Al.bind(null, o, i, e), [e]),
              (o.flags |= 2048),
              Vl(9, zl.bind(null, o, i, n, t), void 0, null),
              n
            );
          },
          useId: function () {
            var e = Pl(),
              t = Oc.identifierPrefix;
            if (aa) {
              var n = Ji;
              (t = ':' + t + 'R' + (n = (Zi & ~(1 << (32 - sn(Zi) - 1))).toString(32) + n)),
                0 < (n = xl++) && (t += 'H' + n.toString(32)),
                (t += ':');
            } else t = ':' + t + 'r' + (n = kl++).toString(32) + ':';
            return (e.memoizedState = t);
          },
          unstable_isNewReconciler: !1,
        },
        cs = {
          readContext: Pa,
          useCallback: Gl,
          useContext: Pa,
          useEffect: Wl,
          useImperativeHandle: Xl,
          useInsertionEffect: ql,
          useLayoutEffect: Ql,
          useMemo: Zl,
          useReducer: Il,
          useRef: jl,
          useState: function () {
            return Il(Rl);
          },
          useDebugValue: Yl,
          useDeferredValue: function (e) {
            return Jl(Tl(), bl.memoizedState, e);
          },
          useTransition: function () {
            return [Il(Rl)[0], Tl().memoizedState];
          },
          useMutableSource: Ll,
          useSyncExternalStore: Nl,
          useId: ts,
          unstable_isNewReconciler: !1,
        },
        us = {
          readContext: Pa,
          useCallback: Gl,
          useContext: Pa,
          useEffect: Wl,
          useImperativeHandle: Xl,
          useInsertionEffect: ql,
          useLayoutEffect: Ql,
          useMemo: Zl,
          useReducer: Ol,
          useRef: jl,
          useState: function () {
            return Ol(Rl);
          },
          useDebugValue: Yl,
          useDeferredValue: function (e) {
            var t = Tl();
            return null === bl ? (t.memoizedState = e) : Jl(t, bl.memoizedState, e);
          },
          useTransition: function () {
            return [Ol(Rl)[0], Tl().memoizedState];
          },
          useMutableSource: Ll,
          useSyncExternalStore: Nl,
          useId: ts,
          unstable_isNewReconciler: !1,
        };
      function ds(e, t) {
        try {
          var n = '',
            o = t;
          do {
            (n += He(o)), (o = o.return);
          } while (o);
          var r = n;
        } catch (Cf) {
          r = '\nError generating stack: ' + Cf.message + '\n' + Cf.stack;
        }
        return { value: e, source: t, stack: r, digest: null };
      }
      function fs(e, t, n) {
        return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
      }
      function ps(e, t) {
        try {
          console.error(t.value);
        } catch ($f) {
          setTimeout(function () {
            throw $f;
          });
        }
      }
      var hs = 'function' == typeof WeakMap ? WeakMap : Map;
      function ms(e, t, n) {
        ((n = za(-1, n)).tag = 3), (n.payload = { element: null });
        var o = t.value;
        return (
          (n.callback = function () {
            qc || ((qc = !0), (Qc = o)), ps(0, t);
          }),
          n
        );
      }
      function gs(e, t, n) {
        (n = za(-1, n)).tag = 3;
        var o = e.type.getDerivedStateFromError;
        if ('function' == typeof o) {
          var r = t.value;
          (n.payload = function () {
            return o(r);
          }),
            (n.callback = function () {
              ps(0, t);
            });
        }
        var i = e.stateNode;
        return (
          null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
              ps(0, t), 'function' != typeof o && (null === Kc ? (Kc = new Set([this])) : Kc.add(this));
              var e = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
          n
        );
      }
      function bs(e, t, n) {
        var o = e.pingCache;
        if (null === o) {
          o = e.pingCache = new hs();
          var r = new Set();
          o.set(t, r);
        } else void 0 === (r = o.get(t)) && ((r = new Set()), o.set(t, r));
        r.has(n) || (r.add(n), (e = Pu.bind(null, e, t, n)), t.then(e, e));
      }
      function vs(e) {
        do {
          var t;
          if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
          e = e.return;
        } while (null !== e);
        return null;
      }
      function ys(e, t, n, o, r) {
        return 0 == (1 & e.mode)
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = za(-1, 1)).tag = 2), Aa(n, t, 1))),
                (n.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = r), e);
      }
      var ws = xe.ReactCurrentOwner,
        xs = !1;
      function ks(e, t, n, o) {
        t.child = null === e ? Ja(t, null, n, o) : Za(t, e.child, n, o);
      }
      function $s(e, t, n, o, r) {
        n = n.render;
        var i = t.ref;
        return (
          Ca(t, r),
          (o = Sl(e, t, n, o, i, r)),
          (n = Cl()),
          null === e || xs
            ? (aa && n && na(t), (t.flags |= 1), ks(e, t, o, r), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), qs(e, t, r))
        );
      }
      function Es(e, t, n, o, r) {
        if (null === e) {
          var i = n.type;
          return 'function' != typeof i ||
            _u(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Au(n.type, null, o, t, t.mode, r)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), Ss(e, t, i, o, r));
        }
        if (((i = e.child), 0 == (e.lanes & r))) {
          var a = i.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : ur)(a, o) && e.ref === t.ref) return qs(e, t, r);
        }
        return (t.flags |= 1), ((e = zu(i, o)).ref = t.ref), (e.return = t), (t.child = e);
      }
      function Ss(e, t, n, o, r) {
        if (null !== e) {
          var i = e.memoizedProps;
          if (ur(i, o) && e.ref === t.ref) {
            if (((xs = !1), (t.pendingProps = o = i), 0 == (e.lanes & r))) return (t.lanes = e.lanes), qs(e, t, r);
            0 != (131072 & e.flags) && (xs = !0);
          }
        }
        return Ts(e, t, n, o, r);
      }
      function Cs(e, t, n) {
        var o = t.pendingProps,
          r = o.children,
          i = null !== e ? e.memoizedState : null;
        if ('hidden' === o.mode)
          if (0 == (1 & t.mode))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ti(zc, _c), (_c |= n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== i ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                (t.updateQueue = null),
                Ti(zc, _c),
                (_c |= e),
                null
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
              (o = null !== i ? i.baseLanes : n),
              Ti(zc, _c),
              (_c |= o);
          }
        else null !== i ? ((o = i.baseLanes | n), (t.memoizedState = null)) : (o = n), Ti(zc, _c), (_c |= o);
        return ks(e, t, r, n), t.child;
      }
      function Ps(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
      }
      function Ts(e, t, n, o, r) {
        var i = _i(n) ? Li : Ii.current;
        return (
          (i = Ni(t, i)),
          Ca(t, r),
          (n = Sl(e, t, n, o, i, r)),
          (o = Cl()),
          null === e || xs
            ? (aa && o && na(t), (t.flags |= 1), ks(e, t, n, r), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), qs(e, t, r))
        );
      }
      function Rs(e, t, n, o, r) {
        if (_i(n)) {
          var i = !0;
          Bi(t);
        } else i = !1;
        if ((Ca(t, r), null === t.stateNode)) Ws(e, t), Wa(t, n, o), Qa(t, n, o, r), (o = !0);
        else if (null === e) {
          var a = t.stateNode,
            l = t.memoizedProps;
          a.props = l;
          var s = a.context,
            c = n.contextType;
          c = 'object' == typeof c && null !== c ? Pa(c) : Ni(t, (c = _i(n) ? Li : Ii.current));
          var u = n.getDerivedStateFromProps,
            d = 'function' == typeof u || 'function' == typeof a.getSnapshotBeforeUpdate;
          d ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
              'function' != typeof a.componentWillReceiveProps) ||
            ((l !== o || s !== c) && qa(t, a, o, c)),
            (La = !1);
          var f = t.memoizedState;
          (a.state = f),
            Da(t, o, a, r),
            (s = t.memoizedState),
            l !== o || f !== s || Oi.current || La
              ? ('function' == typeof u && (Ha(t, n, u, o), (s = t.memoizedState)),
                (l = La || Ua(t, n, l, o, f, s, c))
                  ? (d ||
                      ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
                      ('function' == typeof a.componentWillMount && a.componentWillMount(),
                      'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    'function' == typeof a.componentDidMount && (t.flags |= 4194308))
                  : ('function' == typeof a.componentDidMount && (t.flags |= 4194308),
                    (t.memoizedProps = o),
                    (t.memoizedState = s)),
                (a.props = o),
                (a.state = s),
                (a.context = c),
                (o = l))
              : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (o = !1));
        } else {
          (a = t.stateNode),
            _a(e, t),
            (l = t.memoizedProps),
            (c = t.type === t.elementType ? l : va(t.type, l)),
            (a.props = c),
            (d = t.pendingProps),
            (f = a.context),
            (s = 'object' == typeof (s = n.contextType) && null !== s ? Pa(s) : Ni(t, (s = _i(n) ? Li : Ii.current)));
          var p = n.getDerivedStateFromProps;
          (u = 'function' == typeof p || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
              'function' != typeof a.componentWillReceiveProps) ||
            ((l !== d || f !== s) && qa(t, a, o, s)),
            (La = !1),
            (f = t.memoizedState),
            (a.state = f),
            Da(t, o, a, r);
          var h = t.memoizedState;
          l !== d || f !== h || Oi.current || La
            ? ('function' == typeof p && (Ha(t, n, p, o), (h = t.memoizedState)),
              (c = La || Ua(t, n, c, o, f, h, s) || !1)
                ? (u ||
                    ('function' != typeof a.UNSAFE_componentWillUpdate && 'function' != typeof a.componentWillUpdate) ||
                    ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(o, h, s),
                    'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(o, h, s)),
                  'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                  'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                : ('function' != typeof a.componentDidUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' != typeof a.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = o),
                  (t.memoizedState = h)),
              (a.props = o),
              (a.state = h),
              (a.context = s),
              (o = c))
            : ('function' != typeof a.componentDidUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (o = !1));
        }
        return Is(e, t, n, o, i, r);
      }
      function Is(e, t, n, o, r, i) {
        Ps(e, t);
        var a = 0 != (128 & t.flags);
        if (!o && !a) return r && Di(t, n, !1), qs(e, t, i);
        (o = t.stateNode), (ws.current = t);
        var l = a && 'function' != typeof n.getDerivedStateFromError ? null : o.render();
        return (
          (t.flags |= 1),
          null !== e && a ? ((t.child = Za(t, e.child, null, i)), (t.child = Za(t, null, l, i))) : ks(e, t, l, i),
          (t.memoizedState = o.state),
          r && Di(t, n, !0),
          t.child
        );
      }
      function Os(e) {
        var t = e.stateNode;
        t.pendingContext ? Ai(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ai(0, t.context, !1),
          il(e, t.containerInfo);
      }
      function Ls(e, t, n, o, r) {
        return ma(), ga(r), (t.flags |= 256), ks(e, t, n, o), t.child;
      }
      var Ns,
        _s,
        zs,
        As,
        Ms = { dehydrated: null, treeContext: null, retryLane: 0 };
      function Bs(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function Ds(e, t, n) {
        var o,
          r = t.pendingProps,
          i = cl.current,
          a = !1,
          l = 0 != (128 & t.flags);
        if (
          ((o = l) || (o = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
          o ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
          Ti(cl, 1 & i),
          null === e)
        )
          return (
            da(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
              : ((l = r.children),
                (e = r.fallback),
                a
                  ? ((r = t.mode),
                    (a = t.child),
                    (l = { mode: 'hidden', children: l }),
                    0 == (1 & r) && null !== a ? ((a.childLanes = 0), (a.pendingProps = l)) : (a = Bu(l, r, 0, null)),
                    (e = Mu(e, r, n, null)),
                    (a.return = t),
                    (e.return = t),
                    (a.sibling = e),
                    (t.child = a),
                    (t.child.memoizedState = Bs(n)),
                    (t.memoizedState = Ms),
                    e)
                  : Vs(t, l))
          );
        if (null !== (i = e.memoizedState) && null !== (o = i.dehydrated))
          return (function (e, t, n, o, r, i, a) {
            if (n)
              return 256 & t.flags
                ? ((t.flags &= -257), js(e, t, a, (o = fs(Error(ae(422))))))
                : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = o.fallback),
                  (r = t.mode),
                  (o = Bu({ mode: 'visible', children: o.children }, r, 0, null)),
                  ((i = Mu(i, r, a, null)).flags |= 2),
                  (o.return = t),
                  (i.return = t),
                  (o.sibling = i),
                  (t.child = o),
                  0 != (1 & t.mode) && Za(t, e.child, null, a),
                  (t.child.memoizedState = Bs(a)),
                  (t.memoizedState = Ms),
                  i);
            if (0 == (1 & t.mode)) return js(e, t, a, null);
            if ('$!' === r.data) {
              if ((o = r.nextSibling && r.nextSibling.dataset)) var l = o.dgst;
              return (o = l), js(e, t, a, (o = fs((i = Error(ae(419))), o, void 0)));
            }
            if (((l = 0 != (a & e.childLanes)), xs || l)) {
              if (null !== (o = Oc)) {
                switch (a & -a) {
                  case 4:
                    r = 2;
                    break;
                  case 16:
                    r = 8;
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
                    r = 32;
                    break;
                  case 536870912:
                    r = 268435456;
                    break;
                  default:
                    r = 0;
                }
                0 !== (r = 0 != (r & (o.suspendedLanes | a)) ? 0 : r) &&
                  r !== i.retryLane &&
                  ((i.retryLane = r), Oa(e, r), ru(o, e, r, -1));
              }
              return bu(), js(e, t, a, (o = fs(Error(ae(421)))));
            }
            return '$?' === r.data
              ? ((t.flags |= 128), (t.child = e.child), (t = Ru.bind(null, e)), (r._reactRetry = t), null)
              : ((e = i.treeContext),
                (ia = di(r.nextSibling)),
                (ra = t),
                (aa = !0),
                (la = null),
                null !== e &&
                  ((Xi[Yi++] = Zi), (Xi[Yi++] = Ji), (Xi[Yi++] = Gi), (Zi = e.id), (Ji = e.overflow), (Gi = t)),
                ((t = Vs(t, o.children)).flags |= 4096),
                t);
          })(e, t, l, r, o, i, n);
        if (a) {
          (a = r.fallback), (l = t.mode), (o = (i = e.child).sibling);
          var s = { mode: 'hidden', children: r.children };
          return (
            0 == (1 & l) && t.child !== i
              ? (((r = t.child).childLanes = 0), (r.pendingProps = s), (t.deletions = null))
              : ((r = zu(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== o ? (a = zu(o, a)) : ((a = Mu(a, l, n, null)).flags |= 2),
            (a.return = t),
            (r.return = t),
            (r.sibling = a),
            (t.child = r),
            (r = a),
            (a = t.child),
            (l =
              null === (l = e.child.memoizedState)
                ? Bs(n)
                : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (a.memoizedState = l),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ms),
            r
          );
        }
        return (
          (e = (a = e.child).sibling),
          (r = zu(a, { mode: 'visible', children: r.children })),
          0 == (1 & t.mode) && (r.lanes = n),
          (r.return = t),
          (r.sibling = null),
          null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
          (t.child = r),
          (t.memoizedState = null),
          r
        );
      }
      function Vs(e, t) {
        return ((t = Bu({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
      }
      function js(e, t, n, o) {
        return (
          null !== o && ga(o),
          Za(t, e.child, null, n),
          ((e = Vs(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function Hs(e, t, n) {
        e.lanes |= t;
        var o = e.alternate;
        null !== o && (o.lanes |= t), Sa(e.return, t, n);
      }
      function Fs(e, t, n, o, r) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: o,
              tail: n,
              tailMode: r,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = o),
            (i.tail = n),
            (i.tailMode = r));
      }
      function Us(e, t, n) {
        var o = t.pendingProps,
          r = o.revealOrder,
          i = o.tail;
        if ((ks(e, t, o.children, n), 0 != (2 & (o = cl.current)))) (o = (1 & o) | 2), (t.flags |= 128);
        else {
          if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Hs(e, n, t);
              else if (19 === e.tag) Hs(e, n, t);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          o &= 1;
        }
        if ((Ti(cl, o), 0 == (1 & t.mode))) t.memoizedState = null;
        else
          switch (r) {
            case 'forwards':
              for (n = t.child, r = null; null !== n; )
                null !== (e = n.alternate) && null === ul(e) && (r = n), (n = n.sibling);
              null === (n = r) ? ((r = t.child), (t.child = null)) : ((r = n.sibling), (n.sibling = null)),
                Fs(t, !1, r, n, i);
              break;
            case 'backwards':
              for (n = null, r = t.child, t.child = null; null !== r; ) {
                if (null !== (e = r.alternate) && null === ul(e)) {
                  t.child = r;
                  break;
                }
                (e = r.sibling), (r.sibling = n), (n = r), (r = e);
              }
              Fs(t, !0, n, null, i);
              break;
            case 'together':
              Fs(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Ws(e, t) {
        0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
      }
      function qs(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (Bc |= t.lanes), 0 == (n & t.childLanes))) return null;
        if (null !== e && t.child !== e.child) throw Error(ae(153));
        if (null !== t.child) {
          for (n = zu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = zu(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Qs(e, t) {
        if (!aa)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = e.tail;
              for (var o = null; null !== n; ) null !== n.alternate && (o = n), (n = n.sibling);
              null === o ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (o.sibling = null);
          }
      }
      function Ks(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          o = 0;
        if (t)
          for (var r = e.child; null !== r; )
            (n |= r.lanes | r.childLanes),
              (o |= 14680064 & r.subtreeFlags),
              (o |= 14680064 & r.flags),
              (r.return = e),
              (r = r.sibling);
        else
          for (r = e.child; null !== r; )
            (n |= r.lanes | r.childLanes), (o |= r.subtreeFlags), (o |= r.flags), (r.return = e), (r = r.sibling);
        return (e.subtreeFlags |= o), (e.childLanes = n), t;
      }
      function Xs(e, t, n) {
        var o = t.pendingProps;
        switch ((oa(t), t.tag)) {
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
            return Ks(t), null;
          case 1:
          case 17:
            return _i(t.type) && zi(), Ks(t), null;
          case 3:
            return (
              (o = t.stateNode),
              al(),
              Pi(Oi),
              Pi(Ii),
              fl(),
              o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (pa(t)
                  ? (t.flags |= 4)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                    ((t.flags |= 1024), null !== la && (su(la), (la = null)))),
              _s(e, t),
              Ks(t),
              null
            );
          case 5:
            sl(t);
            var r = rl(ol.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              zs(e, t, n, o, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
              if (!o) {
                if (null === t.stateNode) throw Error(ae(166));
                return Ks(t), null;
              }
              if (((e = rl(tl.current)), pa(t))) {
                (o = t.stateNode), (n = t.type);
                var i = t.memoizedProps;
                switch (((o[hi] = t), (o[mi] = i), (e = 0 != (1 & t.mode)), n)) {
                  case 'dialog':
                    jr('cancel', o), jr('close', o);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    jr('load', o);
                    break;
                  case 'video':
                  case 'audio':
                    for (r = 0; r < Mr.length; r++) jr(Mr[r], o);
                    break;
                  case 'source':
                    jr('error', o);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    jr('error', o), jr('load', o);
                    break;
                  case 'details':
                    jr('toggle', o);
                    break;
                  case 'input':
                    Ge(o, i), jr('invalid', o);
                    break;
                  case 'select':
                    (o._wrapperState = { wasMultiple: !!i.multiple }), jr('invalid', o);
                    break;
                  case 'textarea':
                    it(o, i), jr('invalid', o);
                }
                for (var a in (yt(n, i), (r = null), i))
                  if (i.hasOwnProperty(a)) {
                    var l = i[a];
                    'children' === a
                      ? 'string' == typeof l
                        ? o.textContent !== l &&
                          (!0 !== i.suppressHydrationWarning && ei(o.textContent, l, e), (r = ['children', l]))
                        : 'number' == typeof l &&
                          o.textContent !== '' + l &&
                          (!0 !== i.suppressHydrationWarning && ei(o.textContent, l, e), (r = ['children', '' + l]))
                      : se.hasOwnProperty(a) && null != l && 'onScroll' === a && jr('scroll', o);
                  }
                switch (n) {
                  case 'input':
                    Qe(o), et(o, i, !0);
                    break;
                  case 'textarea':
                    Qe(o), lt(o);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' == typeof i.onClick && (o.onclick = ti);
                }
                (o = r), (t.updateQueue = o), null !== o && (t.flags |= 4);
              } else {
                (a = 9 === r.nodeType ? r : r.ownerDocument),
                  'http://www.w3.org/1999/xhtml' === e && (e = st(n)),
                  'http://www.w3.org/1999/xhtml' === e
                    ? 'script' === n
                      ? (((e = a.createElement('div')).innerHTML = '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' == typeof o.is
                      ? (e = a.createElement(n, { is: o.is }))
                      : ((e = a.createElement(n)),
                        'select' === n && ((a = e), o.multiple ? (a.multiple = !0) : o.size && (a.size = o.size)))
                    : (e = a.createElementNS(e, n)),
                  (e[hi] = t),
                  (e[mi] = o),
                  Ns(e, t, !1, !1),
                  (t.stateNode = e);
                e: {
                  switch (((a = wt(n, o)), n)) {
                    case 'dialog':
                      jr('cancel', e), jr('close', e), (r = o);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      jr('load', e), (r = o);
                      break;
                    case 'video':
                    case 'audio':
                      for (r = 0; r < Mr.length; r++) jr(Mr[r], e);
                      r = o;
                      break;
                    case 'source':
                      jr('error', e), (r = o);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      jr('error', e), jr('load', e), (r = o);
                      break;
                    case 'details':
                      jr('toggle', e), (r = o);
                      break;
                    case 'input':
                      Ge(e, o), (r = Ye(e, o)), jr('invalid', e);
                      break;
                    case 'option':
                    default:
                      r = o;
                      break;
                    case 'select':
                      (e._wrapperState = { wasMultiple: !!o.multiple }),
                        (r = Be({}, o, { value: void 0 })),
                        jr('invalid', e);
                      break;
                    case 'textarea':
                      it(e, o), (r = rt(e, o)), jr('invalid', e);
                  }
                  for (i in (yt(n, r), (l = r)))
                    if (l.hasOwnProperty(i)) {
                      var s = l[i];
                      'style' === i
                        ? bt(e, s)
                        : 'dangerouslySetInnerHTML' === i
                        ? null != (s = s ? s.__html : void 0) && ft(e, s)
                        : 'children' === i
                        ? 'string' == typeof s
                          ? ('textarea' !== n || '' !== s) && pt(e, s)
                          : 'number' == typeof s && pt(e, '' + s)
                        : 'suppressContentEditableWarning' !== i &&
                          'suppressHydrationWarning' !== i &&
                          'autoFocus' !== i &&
                          (se.hasOwnProperty(i)
                            ? null != s && 'onScroll' === i && jr('scroll', e)
                            : null != s && we(e, i, s, a));
                    }
                  switch (n) {
                    case 'input':
                      Qe(e), et(e, o, !1);
                      break;
                    case 'textarea':
                      Qe(e), lt(e);
                      break;
                    case 'option':
                      null != o.value && e.setAttribute('value', '' + We(o.value));
                      break;
                    case 'select':
                      (e.multiple = !!o.multiple),
                        null != (i = o.value)
                          ? ot(e, !!o.multiple, i, !1)
                          : null != o.defaultValue && ot(e, !!o.multiple, o.defaultValue, !0);
                      break;
                    default:
                      'function' == typeof r.onClick && (e.onclick = ti);
                  }
                  switch (n) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      o = !!o.autoFocus;
                      break e;
                    case 'img':
                      o = !0;
                      break e;
                    default:
                      o = !1;
                  }
                }
                o && (t.flags |= 4);
              }
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Ks(t), null;
          case 6:
            if (e && null != t.stateNode) As(e, t, e.memoizedProps, o);
            else {
              if ('string' != typeof o && null === t.stateNode) throw Error(ae(166));
              if (((n = rl(ol.current)), rl(tl.current), pa(t))) {
                if (
                  ((o = t.stateNode), (n = t.memoizedProps), (o[hi] = t), (i = o.nodeValue !== n) && null !== (e = ra))
                )
                  switch (e.tag) {
                    case 3:
                      ei(o.nodeValue, n, 0 != (1 & e.mode));
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning && ei(o.nodeValue, n, 0 != (1 & e.mode));
                  }
                i && (t.flags |= 4);
              } else ((o = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(o))[hi] = t), (t.stateNode = o);
            }
            return Ks(t), null;
          case 13:
            if (
              (Pi(cl),
              (o = t.memoizedState),
              null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
              if (aa && null !== ia && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                ha(), ma(), (t.flags |= 98560), (i = !1);
              else if (((i = pa(t)), null !== o && null !== o.dehydrated)) {
                if (null === e) {
                  if (!i) throw Error(ae(318));
                  if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(ae(317));
                  i[hi] = t;
                } else ma(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                Ks(t), (i = !1);
              } else null !== la && (su(la), (la = null)), (i = !0);
              if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
              ? ((t.lanes = n), t)
              : ((o = null !== o) != (null !== e && null !== e.memoizedState) &&
                  o &&
                  ((t.child.flags |= 8192),
                  0 != (1 & t.mode) && (null === e || 0 != (1 & cl.current) ? 0 === Ac && (Ac = 3) : bu())),
                null !== t.updateQueue && (t.flags |= 4),
                Ks(t),
                null);
          case 4:
            return al(), _s(e, t), null === e && Ur(t.stateNode.containerInfo), Ks(t), null;
          case 10:
            return Ea(t.type._context), Ks(t), null;
          case 19:
            if ((Pi(cl), null === (i = t.memoizedState))) return Ks(t), null;
            if (((o = 0 != (128 & t.flags)), null === (a = i.rendering)))
              if (o) Qs(i, !1);
              else {
                if (0 !== Ac || (null !== e && 0 != (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (a = ul(e))) {
                      for (
                        t.flags |= 128,
                          Qs(i, !1),
                          null !== (o = a.updateQueue) && ((t.updateQueue = o), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          o = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = o),
                          ((i = n).flags &= 14680066),
                          null === (a = i.alternate)
                            ? ((i.childLanes = 0),
                              (i.lanes = e),
                              (i.child = null),
                              (i.subtreeFlags = 0),
                              (i.memoizedProps = null),
                              (i.memoizedState = null),
                              (i.updateQueue = null),
                              (i.dependencies = null),
                              (i.stateNode = null))
                            : ((i.childLanes = a.childLanes),
                              (i.lanes = a.lanes),
                              (i.child = a.child),
                              (i.subtreeFlags = 0),
                              (i.deletions = null),
                              (i.memoizedProps = a.memoizedProps),
                              (i.memoizedState = a.memoizedState),
                              (i.updateQueue = a.updateQueue),
                              (i.type = a.type),
                              (e = a.dependencies),
                              (i.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                          (n = n.sibling);
                      return Ti(cl, (1 & cl.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== i.tail && Zt() > Uc && ((t.flags |= 128), (o = !0), Qs(i, !1), (t.lanes = 4194304));
              }
            else {
              if (!o)
                if (null !== (e = ul(a))) {
                  if (
                    ((t.flags |= 128),
                    (o = !0),
                    null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                    Qs(i, !0),
                    null === i.tail && 'hidden' === i.tailMode && !a.alternate && !aa)
                  )
                    return Ks(t), null;
                } else
                  2 * Zt() - i.renderingStartTime > Uc &&
                    1073741824 !== n &&
                    ((t.flags |= 128), (o = !0), Qs(i, !1), (t.lanes = 4194304));
              i.isBackwards
                ? ((a.sibling = t.child), (t.child = a))
                : (null !== (n = i.last) ? (n.sibling = a) : (t.child = a), (i.last = a));
            }
            return null !== i.tail
              ? ((t = i.tail),
                (i.rendering = t),
                (i.tail = t.sibling),
                (i.renderingStartTime = Zt()),
                (t.sibling = null),
                (n = cl.current),
                Ti(cl, o ? (1 & n) | 2 : 1 & n),
                t)
              : (Ks(t), null);
          case 22:
          case 23:
            return (
              pu(),
              (o = null !== t.memoizedState),
              null !== e && (null !== e.memoizedState) !== o && (t.flags |= 8192),
              o && 0 != (1 & t.mode)
                ? 0 != (1073741824 & _c) && (Ks(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : Ks(t),
              null
            );
          case 24:
          case 25:
            return null;
        }
        throw Error(ae(156, t.tag));
      }
      function Ys(e, t) {
        switch ((oa(t), t.tag)) {
          case 1:
            return _i(t.type) && zi(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 3:
            return (
              al(),
              Pi(Oi),
              Pi(Ii),
              fl(),
              0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 5:
            return sl(t), null;
          case 13:
            if ((Pi(cl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
              if (null === t.alternate) throw Error(ae(340));
              ma();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 19:
            return Pi(cl), null;
          case 4:
            return al(), null;
          case 10:
            return Ea(t.type._context), null;
          case 22:
          case 23:
            return pu(), null;
          default:
            return null;
        }
      }
      (Ns = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (_s = function () {}),
        (zs = function (e, t, n, o) {
          var r = e.memoizedProps;
          if (r !== o) {
            (e = t.stateNode), rl(tl.current);
            var i,
              a = null;
            switch (n) {
              case 'input':
                (r = Ye(e, r)), (o = Ye(e, o)), (a = []);
                break;
              case 'select':
                (r = Be({}, r, { value: void 0 })), (o = Be({}, o, { value: void 0 })), (a = []);
                break;
              case 'textarea':
                (r = rt(e, r)), (o = rt(e, o)), (a = []);
                break;
              default:
                'function' != typeof r.onClick && 'function' == typeof o.onClick && (e.onclick = ti);
            }
            for (c in (yt(n, o), (n = null), r))
              if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && null != r[c])
                if ('style' === c) {
                  var l = r[c];
                  for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                } else
                  'dangerouslySetInnerHTML' !== c &&
                    'children' !== c &&
                    'suppressContentEditableWarning' !== c &&
                    'suppressHydrationWarning' !== c &&
                    'autoFocus' !== c &&
                    (se.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
            for (c in o) {
              var s = o[c];
              if (((l = null != r ? r[c] : void 0), o.hasOwnProperty(c) && s !== l && (null != s || null != l)))
                if ('style' === c)
                  if (l) {
                    for (i in l) !l.hasOwnProperty(i) || (s && s.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
                    for (i in s) s.hasOwnProperty(i) && l[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
                  } else n || (a || (a = []), a.push(c, n)), (n = s);
                else
                  'dangerouslySetInnerHTML' === c
                    ? ((s = s ? s.__html : void 0),
                      (l = l ? l.__html : void 0),
                      null != s && l !== s && (a = a || []).push(c, s))
                    : 'children' === c
                    ? ('string' != typeof s && 'number' != typeof s) || (a = a || []).push(c, '' + s)
                    : 'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      (se.hasOwnProperty(c)
                        ? (null != s && 'onScroll' === c && jr('scroll', e), a || l === s || (a = []))
                        : (a = a || []).push(c, s));
            }
            n && (a = a || []).push('style', n);
            var c = a;
            (t.updateQueue = c) && (t.flags |= 4);
          }
        }),
        (As = function (e, t, n, o) {
          n !== o && (t.flags |= 4);
        });
      var Gs = !1,
        Zs = !1,
        Js = 'function' == typeof WeakSet ? WeakSet : Set,
        ec = null;
      function tc(e, t) {
        var n = e.ref;
        if (null !== n)
          if ('function' == typeof n)
            try {
              n(null);
            } catch (Ef) {
              Cu(e, t, Ef);
            }
          else n.current = null;
      }
      function nc(e, t, n) {
        try {
          n();
        } catch (Ef) {
          Cu(e, t, Ef);
        }
      }
      var oc = !1;
      function rc(e, t, n) {
        var o = t.updateQueue;
        if (null !== (o = null !== o ? o.lastEffect : null)) {
          var r = (o = o.next);
          do {
            if ((r.tag & e) === e) {
              var i = r.destroy;
              (r.destroy = void 0), void 0 !== i && nc(t, n, i);
            }
            r = r.next;
          } while (r !== o);
        }
      }
      function ic(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var o = n.create;
              n.destroy = o();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function ac(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
        }
      }
      function lc(e) {
        var t = e.alternate;
        null !== t && ((e.alternate = null), lc(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[hi], delete t[mi], delete t[bi], delete t[vi], delete t[yi]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      function sc(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function cc(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || sc(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function uc(e, t, n) {
        var o = e.tag;
        if (5 === o || 6 === o)
          (e = e.stateNode),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ti));
        else if (4 !== o && null !== (e = e.child))
          for (uc(e, t, n), e = e.sibling; null !== e; ) uc(e, t, n), (e = e.sibling);
      }
      function dc(e, t, n) {
        var o = e.tag;
        if (5 === o || 6 === o) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== o && null !== (e = e.child))
          for (dc(e, t, n), e = e.sibling; null !== e; ) dc(e, t, n), (e = e.sibling);
      }
      var fc = null,
        pc = !1;
      function hc(e, t, n) {
        for (n = n.child; null !== n; ) mc(e, t, n), (n = n.sibling);
      }
      function mc(e, t, n) {
        if (ln && 'function' == typeof ln.onCommitFiberUnmount)
          try {
            ln.onCommitFiberUnmount(an, n);
          } catch (xb) {}
        switch (n.tag) {
          case 5:
            Zs || tc(n, t);
          case 6:
            var o = fc,
              r = pc;
            (fc = null),
              hc(e, t, n),
              (pc = r),
              null !== (fc = o) &&
                (pc
                  ? ((e = fc), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                  : fc.removeChild(n.stateNode));
            break;
          case 18:
            null !== fc &&
              (pc
                ? ((e = fc),
                  (n = n.stateNode),
                  8 === e.nodeType ? ui(e.parentNode, n) : 1 === e.nodeType && ui(e, n),
                  Un(e))
                : ui(fc, n.stateNode));
            break;
          case 4:
            (o = fc), (r = pc), (fc = n.stateNode.containerInfo), (pc = !0), hc(e, t, n), (fc = o), (pc = r);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Zs && null !== (o = n.updateQueue) && null !== (o = o.lastEffect)) {
              r = o = o.next;
              do {
                var i = r,
                  a = i.destroy;
                (i = i.tag), void 0 !== a && (0 != (2 & i) || 0 != (4 & i)) && nc(n, t, a), (r = r.next);
              } while (r !== o);
            }
            hc(e, t, n);
            break;
          case 1:
            if (!Zs && (tc(n, t), 'function' == typeof (o = n.stateNode).componentWillUnmount))
              try {
                (o.props = n.memoizedProps), (o.state = n.memoizedState), o.componentWillUnmount();
              } catch (xb) {
                Cu(n, t, xb);
              }
            hc(e, t, n);
            break;
          case 21:
            hc(e, t, n);
            break;
          case 22:
            1 & n.mode ? ((Zs = (o = Zs) || null !== n.memoizedState), hc(e, t, n), (Zs = o)) : hc(e, t, n);
            break;
          default:
            hc(e, t, n);
        }
      }
      function gc(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Js()),
            t.forEach(function (t) {
              var o = Iu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(o, o));
            });
        }
      }
      function bc(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var o = 0; o < n.length; o++) {
            var r = n[o];
            try {
              var i = e,
                a = t,
                l = a;
              e: for (; null !== l; ) {
                switch (l.tag) {
                  case 5:
                    (fc = l.stateNode), (pc = !1);
                    break e;
                  case 3:
                  case 4:
                    (fc = l.stateNode.containerInfo), (pc = !0);
                    break e;
                }
                l = l.return;
              }
              if (null === fc) throw Error(ae(160));
              mc(i, a, r), (fc = null), (pc = !1);
              var s = r.alternate;
              null !== s && (s.return = null), (r.return = null);
            } catch (If) {
              Cu(r, t, If);
            }
          }
        if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vc(t, e), (t = t.sibling);
      }
      function vc(e, t) {
        var n = e.alternate,
          o = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((bc(t, e), yc(e), 4 & o)) {
              try {
                rc(3, e, e.return), ic(3, e);
              } catch (Af) {
                Cu(e, e.return, Af);
              }
              try {
                rc(5, e, e.return);
              } catch (Af) {
                Cu(e, e.return, Af);
              }
            }
            break;
          case 1:
            bc(t, e), yc(e), 512 & o && null !== n && tc(n, n.return);
            break;
          case 5:
            if ((bc(t, e), yc(e), 512 & o && null !== n && tc(n, n.return), 32 & e.flags)) {
              var r = e.stateNode;
              try {
                pt(r, '');
              } catch (Af) {
                Cu(e, e.return, Af);
              }
            }
            if (4 & o && null != (r = e.stateNode)) {
              var i = e.memoizedProps,
                a = null !== n ? n.memoizedProps : i,
                l = e.type,
                s = e.updateQueue;
              if (((e.updateQueue = null), null !== s))
                try {
                  'input' === l && 'radio' === i.type && null != i.name && Ze(r, i), wt(l, a);
                  var c = wt(l, i);
                  for (a = 0; a < s.length; a += 2) {
                    var u = s[a],
                      d = s[a + 1];
                    'style' === u
                      ? bt(r, d)
                      : 'dangerouslySetInnerHTML' === u
                      ? ft(r, d)
                      : 'children' === u
                      ? pt(r, d)
                      : we(r, u, d, c);
                  }
                  switch (l) {
                    case 'input':
                      Je(r, i);
                      break;
                    case 'textarea':
                      at(r, i);
                      break;
                    case 'select':
                      var f = r._wrapperState.wasMultiple;
                      r._wrapperState.wasMultiple = !!i.multiple;
                      var p = i.value;
                      null != p
                        ? ot(r, !!i.multiple, p, !1)
                        : f !== !!i.multiple &&
                          (null != i.defaultValue
                            ? ot(r, !!i.multiple, i.defaultValue, !0)
                            : ot(r, !!i.multiple, i.multiple ? [] : '', !1));
                  }
                  r[mi] = i;
                } catch (Af) {
                  Cu(e, e.return, Af);
                }
            }
            break;
          case 6:
            if ((bc(t, e), yc(e), 4 & o)) {
              if (null === e.stateNode) throw Error(ae(162));
              (r = e.stateNode), (i = e.memoizedProps);
              try {
                r.nodeValue = i;
              } catch (Af) {
                Cu(e, e.return, Af);
              }
            }
            break;
          case 3:
            if ((bc(t, e), yc(e), 4 & o && null !== n && n.memoizedState.isDehydrated))
              try {
                Un(t.containerInfo);
              } catch (Af) {
                Cu(e, e.return, Af);
              }
            break;
          case 4:
          default:
            bc(t, e), yc(e);
            break;
          case 13:
            bc(t, e),
              yc(e),
              8192 & (r = e.child).flags &&
                ((i = null !== r.memoizedState),
                (r.stateNode.isHidden = i),
                !i || (null !== r.alternate && null !== r.alternate.memoizedState) || (Fc = Zt())),
              4 & o && gc(e);
            break;
          case 22:
            if (
              ((u = null !== n && null !== n.memoizedState),
              1 & e.mode ? ((Zs = (c = Zs) || u), bc(t, e), (Zs = c)) : bc(t, e),
              yc(e),
              8192 & o)
            ) {
              if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !u && 0 != (1 & e.mode)))
                for (ec = e, u = e.child; null !== u; ) {
                  for (d = ec = u; null !== ec; ) {
                    switch (((p = (f = ec).child), f.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        rc(4, f, f.return);
                        break;
                      case 1:
                        tc(f, f.return);
                        var h = f.stateNode;
                        if ('function' == typeof h.componentWillUnmount) {
                          (o = f), (n = f.return);
                          try {
                            (t = o), (h.props = t.memoizedProps), (h.state = t.memoizedState), h.componentWillUnmount();
                          } catch (Af) {
                            Cu(o, n, Af);
                          }
                        }
                        break;
                      case 5:
                        tc(f, f.return);
                        break;
                      case 22:
                        if (null !== f.memoizedState) {
                          $c(d);
                          continue;
                        }
                    }
                    null !== p ? ((p.return = f), (ec = p)) : $c(d);
                  }
                  u = u.sibling;
                }
              e: for (u = null, d = e; ; ) {
                if (5 === d.tag) {
                  if (null === u) {
                    u = d;
                    try {
                      (r = d.stateNode),
                        c
                          ? 'function' == typeof (i = r.style).setProperty
                            ? i.setProperty('display', 'none', 'important')
                            : (i.display = 'none')
                          : ((l = d.stateNode),
                            (a = null != (s = d.memoizedProps.style) && s.hasOwnProperty('display') ? s.display : null),
                            (l.style.display = gt('display', a)));
                    } catch (Af) {
                      Cu(e, e.return, Af);
                    }
                  }
                } else if (6 === d.tag) {
                  if (null === u)
                    try {
                      d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                    } catch (Af) {
                      Cu(e, e.return, Af);
                    }
                } else if (
                  ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                  null !== d.child
                ) {
                  (d.child.return = d), (d = d.child);
                  continue;
                }
                if (d === e) break e;
                for (; null === d.sibling; ) {
                  if (null === d.return || d.return === e) break e;
                  u === d && (u = null), (d = d.return);
                }
                u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
              }
            }
            break;
          case 19:
            bc(t, e), yc(e), 4 & o && gc(e);
          case 21:
        }
      }
      function yc(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n; ) {
                if (sc(n)) {
                  var o = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(ae(160));
            }
            switch (o.tag) {
              case 5:
                var r = o.stateNode;
                32 & o.flags && (pt(r, ''), (o.flags &= -33)), dc(e, cc(e), r);
                break;
              case 3:
              case 4:
                var i = o.stateNode.containerInfo;
                uc(e, cc(e), i);
                break;
              default:
                throw Error(ae(161));
            }
          } catch (Rf) {
            Cu(e, e.return, Rf);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function wc(e, t, n) {
        (ec = e), xc(e);
      }
      function xc(e, t, n) {
        for (var o = 0 != (1 & e.mode); null !== ec; ) {
          var r = ec,
            i = r.child;
          if (22 === r.tag && o) {
            var a = null !== r.memoizedState || Gs;
            if (!a) {
              var l = r.alternate,
                s = (null !== l && null !== l.memoizedState) || Zs;
              l = Gs;
              var c = Zs;
              if (((Gs = a), (Zs = s) && !c))
                for (ec = r; null !== ec; )
                  (s = (a = ec).child),
                    22 === a.tag && null !== a.memoizedState ? Ec(r) : null !== s ? ((s.return = a), (ec = s)) : Ec(r);
              for (; null !== i; ) (ec = i), xc(i), (i = i.sibling);
              (ec = r), (Gs = l), (Zs = c);
            }
            kc(e);
          } else 0 != (8772 & r.subtreeFlags) && null !== i ? ((i.return = r), (ec = i)) : kc(e);
        }
      }
      function kc(e) {
        for (; null !== ec; ) {
          var t = ec;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags))
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zs || ic(5, t);
                    break;
                  case 1:
                    var o = t.stateNode;
                    if (4 & t.flags && !Zs)
                      if (null === n) o.componentDidMount();
                      else {
                        var r = t.elementType === t.type ? n.memoizedProps : va(t.type, n.memoizedProps);
                        o.componentDidUpdate(r, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                      }
                    var i = t.updateQueue;
                    null !== i && Va(t, i, o);
                    break;
                  case 3:
                    var a = t.updateQueue;
                    if (null !== a) {
                      if (((n = null), null !== t.child))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            n = t.child.stateNode;
                        }
                      Va(t, a, n);
                    }
                    break;
                  case 5:
                    var l = t.stateNode;
                    if (null === n && 4 & t.flags) {
                      n = l;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case 'button':
                        case 'input':
                        case 'select':
                        case 'textarea':
                          s.autoFocus && n.focus();
                          break;
                        case 'img':
                          s.src && (n.src = s.src);
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (null === t.memoizedState) {
                      var c = t.alternate;
                      if (null !== c) {
                        var u = c.memoizedState;
                        if (null !== u) {
                          var d = u.dehydrated;
                          null !== d && Un(d);
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(ae(163));
                }
              Zs || (512 & t.flags && ac(t));
            } catch (zf) {
              Cu(t, t.return, zf);
            }
          }
          if (t === e) {
            ec = null;
            break;
          }
          if (null !== (n = t.sibling)) {
            (n.return = t.return), (ec = n);
            break;
          }
          ec = t.return;
        }
      }
      function $c(e) {
        for (; null !== ec; ) {
          var t = ec;
          if (t === e) {
            ec = null;
            break;
          }
          var n = t.sibling;
          if (null !== n) {
            (n.return = t.return), (ec = n);
            break;
          }
          ec = t.return;
        }
      }
      function Ec(e) {
        for (; null !== ec; ) {
          var t = ec;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  ic(4, t);
                } catch (Rf) {
                  Cu(t, n, Rf);
                }
                break;
              case 1:
                var o = t.stateNode;
                if ('function' == typeof o.componentDidMount) {
                  var r = t.return;
                  try {
                    o.componentDidMount();
                  } catch (Rf) {
                    Cu(t, r, Rf);
                  }
                }
                var i = t.return;
                try {
                  ac(t);
                } catch (Rf) {
                  Cu(t, i, Rf);
                }
                break;
              case 5:
                var a = t.return;
                try {
                  ac(t);
                } catch (Rf) {
                  Cu(t, a, Rf);
                }
            }
          } catch (Rf) {
            Cu(t, t.return, Rf);
          }
          if (t === e) {
            ec = null;
            break;
          }
          var l = t.sibling;
          if (null !== l) {
            (l.return = t.return), (ec = l);
            break;
          }
          ec = t.return;
        }
      }
      var Sc,
        Cc = Math.ceil,
        Pc = xe.ReactCurrentDispatcher,
        Tc = xe.ReactCurrentOwner,
        Rc = xe.ReactCurrentBatchConfig,
        Ic = 0,
        Oc = null,
        Lc = null,
        Nc = 0,
        _c = 0,
        zc = Ci(0),
        Ac = 0,
        Mc = null,
        Bc = 0,
        Dc = 0,
        Vc = 0,
        jc = null,
        Hc = null,
        Fc = 0,
        Uc = 1 / 0,
        Wc = null,
        qc = !1,
        Qc = null,
        Kc = null,
        Xc = !1,
        Yc = null,
        Gc = 0,
        Zc = 0,
        Jc = null,
        eu = -1,
        tu = 0;
      function nu() {
        return 0 != (6 & Ic) ? Zt() : -1 !== eu ? eu : (eu = Zt());
      }
      function ou(e) {
        return 0 == (1 & e.mode)
          ? 1
          : 0 != (2 & Ic) && 0 !== Nc
          ? Nc & -Nc
          : null !== ba.transition
          ? (0 === tu && (tu = bn()), tu)
          : 0 !== (e = xn)
          ? e
          : (e = void 0 === (e = window.event) ? 16 : Zn(e.type));
      }
      function ru(e, t, n, o) {
        if (50 < Zc) throw ((Zc = 0), (Jc = null), Error(ae(185)));
        yn(e, n, o),
          (0 != (2 & Ic) && e === Oc) ||
            (e === Oc && (0 == (2 & Ic) && (Dc |= n), 4 === Ac && cu(e, Nc)),
            iu(e, o),
            1 === n && 0 === Ic && 0 == (1 & t.mode) && ((Uc = Zt() + 500), ji && Ui()));
      }
      function iu(e, t) {
        var n = e.callbackNode;
        !(function (e, t) {
          for (var n = e.suspendedLanes, o = e.pingedLanes, r = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var a = 31 - sn(i),
              l = 1 << a,
              s = r[a];
            -1 === s ? (0 != (l & n) && 0 == (l & o)) || (r[a] = mn(l, t)) : s <= t && (e.expiredLanes |= l), (i &= ~l);
          }
        })(e, t);
        var o = hn(e, e === Oc ? Nc : 0);
        if (0 === o) null !== n && Xt(n), (e.callbackNode = null), (e.callbackPriority = 0);
        else if (((t = o & -o), e.callbackPriority !== t)) {
          if ((null != n && Xt(n), 1 === t))
            0 === e.tag
              ? (function (e) {
                  (ji = !0), Fi(e);
                })(uu.bind(null, e))
              : Fi(uu.bind(null, e)),
              si(function () {
                0 == (6 & Ic) && Ui();
              }),
              (n = null);
          else {
            switch (kn(o)) {
              case 1:
                n = en;
                break;
              case 4:
                n = tn;
                break;
              case 16:
              default:
                n = nn;
                break;
              case 536870912:
                n = rn;
            }
            n = Ou(n, au.bind(null, e));
          }
          (e.callbackPriority = t), (e.callbackNode = n);
        }
      }
      function au(e, t) {
        if (((eu = -1), (tu = 0), 0 != (6 & Ic))) throw Error(ae(327));
        var n = e.callbackNode;
        if (Eu() && e.callbackNode !== n) return null;
        var o = hn(e, e === Oc ? Nc : 0);
        if (0 === o) return null;
        if (0 != (30 & o) || 0 != (o & e.expiredLanes) || t) t = vu(e, o);
        else {
          t = o;
          var r = Ic;
          Ic |= 2;
          var i = gu();
          for ((Oc === e && Nc === t) || ((Wc = null), (Uc = Zt() + 500), hu(e, t)); ; )
            try {
              wu();
              break;
            } catch (xb) {
              mu(e, xb);
            }
          $a(), (Pc.current = i), (Ic = r), null !== Lc ? (t = 0) : ((Oc = null), (Nc = 0), (t = Ac));
        }
        if (0 !== t) {
          if ((2 === t && 0 !== (r = gn(e)) && ((o = r), (t = lu(e, r))), 1 === t))
            throw ((n = Mc), hu(e, 0), cu(e, o), iu(e, Zt()), n);
          if (6 === t) cu(e, o);
          else {
            if (
              ((r = e.current.alternate),
              0 == (30 & o) &&
                !(function (e) {
                  for (var t = e; ; ) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue;
                      if (null !== n && null !== (n = n.stores))
                        for (var o = 0; o < n.length; o++) {
                          var r = n[o],
                            i = r.getSnapshot;
                          r = r.value;
                          try {
                            if (!cr(i(), r)) return !1;
                          } catch (a) {
                            return !1;
                          }
                        }
                    }
                    if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                    else {
                      if (t === e) break;
                      for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return !0;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return !0;
                })(r) &&
                (2 === (t = vu(e, o)) && 0 !== (i = gn(e)) && ((o = i), (t = lu(e, i))), 1 === t))
            )
              throw ((n = Mc), hu(e, 0), cu(e, o), iu(e, Zt()), n);
            switch (((e.finishedWork = r), (e.finishedLanes = o), t)) {
              case 0:
              case 1:
                throw Error(ae(345));
              case 2:
              case 5:
                $u(e, Hc, Wc);
                break;
              case 3:
                if ((cu(e, o), (130023424 & o) === o && 10 < (t = Fc + 500 - Zt()))) {
                  if (0 !== hn(e, 0)) break;
                  if (((r = e.suspendedLanes) & o) !== o) {
                    nu(), (e.pingedLanes |= e.suspendedLanes & r);
                    break;
                  }
                  e.timeoutHandle = ii($u.bind(null, e, Hc, Wc), t);
                  break;
                }
                $u(e, Hc, Wc);
                break;
              case 4:
                if ((cu(e, o), (4194240 & o) === o)) break;
                for (t = e.eventTimes, r = -1; 0 < o; ) {
                  var a = 31 - sn(o);
                  (i = 1 << a), (a = t[a]) > r && (r = a), (o &= ~i);
                }
                if (
                  ((o = r),
                  10 <
                    (o =
                      (120 > (o = Zt() - o)
                        ? 120
                        : 480 > o
                        ? 480
                        : 1080 > o
                        ? 1080
                        : 1920 > o
                        ? 1920
                        : 3e3 > o
                        ? 3e3
                        : 4320 > o
                        ? 4320
                        : 1960 * Cc(o / 1960)) - o))
                ) {
                  e.timeoutHandle = ii($u.bind(null, e, Hc, Wc), o);
                  break;
                }
                $u(e, Hc, Wc);
                break;
              default:
                throw Error(ae(329));
            }
          }
        }
        return iu(e, Zt()), e.callbackNode === n ? au.bind(null, e) : null;
      }
      function lu(e, t) {
        var n = jc;
        return (
          e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256),
          2 !== (e = vu(e, t)) && ((t = Hc), (Hc = n), null !== t && su(t)),
          e
        );
      }
      function su(e) {
        null === Hc ? (Hc = e) : Hc.push.apply(Hc, e);
      }
      function cu(e, t) {
        for (t &= ~Vc, t &= ~Dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - sn(t),
            o = 1 << n;
          (e[n] = -1), (t &= ~o);
        }
      }
      function uu(e) {
        if (0 != (6 & Ic)) throw Error(ae(327));
        Eu();
        var t = hn(e, 0);
        if (0 == (1 & t)) return iu(e, Zt()), null;
        var n = vu(e, t);
        if (0 !== e.tag && 2 === n) {
          var o = gn(e);
          0 !== o && ((t = o), (n = lu(e, o)));
        }
        if (1 === n) throw ((n = Mc), hu(e, 0), cu(e, t), iu(e, Zt()), n);
        if (6 === n) throw Error(ae(345));
        return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), $u(e, Hc, Wc), iu(e, Zt()), null;
      }
      function du(e, t) {
        var n = Ic;
        Ic |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ic = n) && ((Uc = Zt() + 500), ji && Ui());
        }
      }
      function fu(e) {
        null !== Yc && 0 === Yc.tag && 0 == (6 & Ic) && Eu();
        var t = Ic;
        Ic |= 1;
        var n = Rc.transition,
          o = xn;
        try {
          if (((Rc.transition = null), (xn = 1), e)) return e();
        } finally {
          (xn = o), (Rc.transition = n), 0 == (6 & (Ic = t)) && Ui();
        }
      }
      function pu() {
        (_c = zc.current), Pi(zc);
      }
      function hu(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), ai(n)), null !== Lc))
          for (n = Lc.return; null !== n; ) {
            var o = n;
            switch ((oa(o), o.tag)) {
              case 1:
                null != (o = o.type.childContextTypes) && zi();
                break;
              case 3:
                al(), Pi(Oi), Pi(Ii), fl();
                break;
              case 5:
                sl(o);
                break;
              case 4:
                al();
                break;
              case 13:
              case 19:
                Pi(cl);
                break;
              case 10:
                Ea(o.type._context);
                break;
              case 22:
              case 23:
                pu();
            }
            n = n.return;
          }
        if (
          ((Oc = e),
          (Lc = e = zu(e.current, null)),
          (Nc = _c = t),
          (Ac = 0),
          (Mc = null),
          (Vc = Dc = Bc = 0),
          (Hc = jc = null),
          null !== Ta)
        ) {
          for (t = 0; t < Ta.length; t++)
            if (null !== (o = (n = Ta[t]).interleaved)) {
              n.interleaved = null;
              var r = o.next,
                i = n.pending;
              if (null !== i) {
                var a = i.next;
                (i.next = r), (o.next = a);
              }
              n.pending = o;
            }
          Ta = null;
        }
        return e;
      }
      function mu(e, t) {
        for (;;) {
          var n = Lc;
          try {
            if (($a(), (pl.current = ls), yl)) {
              for (var o = gl.memoizedState; null !== o; ) {
                var r = o.queue;
                null !== r && (r.pending = null), (o = o.next);
              }
              yl = !1;
            }
            if (
              ((ml = 0),
              (vl = bl = gl = null),
              (wl = !1),
              (xl = 0),
              (Tc.current = null),
              null === n || null === n.return)
            ) {
              (Ac = 1), (Mc = t), (Lc = null);
              break;
            }
            e: {
              var i = e,
                a = n.return,
                l = n,
                s = t;
              if (((t = Nc), (l.flags |= 32768), null !== s && 'object' == typeof s && 'function' == typeof s.then)) {
                var c = s,
                  u = l,
                  d = u.tag;
                if (0 == (1 & u.mode) && (0 === d || 11 === d || 15 === d)) {
                  var f = u.alternate;
                  f
                    ? ((u.updateQueue = f.updateQueue), (u.memoizedState = f.memoizedState), (u.lanes = f.lanes))
                    : ((u.updateQueue = null), (u.memoizedState = null));
                }
                var p = vs(a);
                if (null !== p) {
                  (p.flags &= -257), ys(p, a, l, 0, t), 1 & p.mode && bs(i, c, t), (s = c);
                  var h = (t = p).updateQueue;
                  if (null === h) {
                    var m = new Set();
                    m.add(s), (t.updateQueue = m);
                  } else h.add(s);
                  break e;
                }
                if (0 == (1 & t)) {
                  bs(i, c, t), bu();
                  break e;
                }
                s = Error(ae(426));
              } else if (aa && 1 & l.mode) {
                var g = vs(a);
                if (null !== g) {
                  0 == (65536 & g.flags) && (g.flags |= 256), ys(g, a, l, 0, t), ga(ds(s, l));
                  break e;
                }
              }
              (i = s = ds(s, l)), 4 !== Ac && (Ac = 2), null === jc ? (jc = [i]) : jc.push(i), (i = a);
              do {
                switch (i.tag) {
                  case 3:
                    (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ba(i, ms(0, s, t));
                    break e;
                  case 1:
                    l = s;
                    var b = i.type,
                      v = i.stateNode;
                    if (
                      0 == (128 & i.flags) &&
                      ('function' == typeof b.getDerivedStateFromError ||
                        (null !== v && 'function' == typeof v.componentDidCatch && (null === Kc || !Kc.has(v))))
                    ) {
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ba(i, gs(i, l, t));
                      break e;
                    }
                }
                i = i.return;
              } while (null !== i);
            }
            ku(n);
          } catch (y) {
            (t = y), Lc === n && null !== n && (Lc = n = n.return);
            continue;
          }
          break;
        }
      }
      function gu() {
        var e = Pc.current;
        return (Pc.current = ls), null === e ? ls : e;
      }
      function bu() {
        (0 !== Ac && 3 !== Ac && 2 !== Ac) || (Ac = 4),
          null === Oc || (0 == (268435455 & Bc) && 0 == (268435455 & Dc)) || cu(Oc, Nc);
      }
      function vu(e, t) {
        var n = Ic;
        Ic |= 2;
        var o = gu();
        for ((Oc === e && Nc === t) || ((Wc = null), hu(e, t)); ; )
          try {
            yu();
            break;
          } catch (Sf) {
            mu(e, Sf);
          }
        if (($a(), (Ic = n), (Pc.current = o), null !== Lc)) throw Error(ae(261));
        return (Oc = null), (Nc = 0), Ac;
      }
      function yu() {
        for (; null !== Lc; ) xu(Lc);
      }
      function wu() {
        for (; null !== Lc && !Yt(); ) xu(Lc);
      }
      function xu(e) {
        var t = Sc(e.alternate, e, _c);
        (e.memoizedProps = e.pendingProps), null === t ? ku(e) : (Lc = t), (Tc.current = null);
      }
      function ku(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Xs(n, t, _c))) return void (Lc = n);
          } else {
            if (null !== (n = Ys(n, t))) return (n.flags &= 32767), void (Lc = n);
            if (null === e) return (Ac = 6), void (Lc = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          }
          if (null !== (t = t.sibling)) return void (Lc = t);
          Lc = t = e;
        } while (null !== t);
        0 === Ac && (Ac = 5);
      }
      function $u(e, t, n) {
        var o = xn,
          r = Rc.transition;
        try {
          (Rc.transition = null),
            (xn = 1),
            (function (e, t, n, o) {
              do {
                Eu();
              } while (null !== Yc);
              if (0 != (6 & Ic)) throw Error(ae(327));
              n = e.finishedWork;
              var r = e.finishedLanes;
              if (null === n) return null;
              if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ae(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var i = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var o = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var r = 31 - sn(n),
                      i = 1 << r;
                    (t[r] = 0), (o[r] = -1), (e[r] = -1), (n &= ~i);
                  }
                })(e, i),
                e === Oc && ((Lc = Oc = null), (Nc = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  Xc ||
                  ((Xc = !0),
                  Ou(nn, function () {
                    return Eu(), null;
                  })),
                (i = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || i)
              ) {
                (i = Rc.transition), (Rc.transition = null);
                var a = xn;
                xn = 1;
                var l = Ic;
                (Ic |= 4),
                  (Tc.current = null),
                  (function (e, t) {
                    if (((ni = qn), mr((e = hr())))) {
                      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                      else
                        e: {
                          var o =
                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                          if (o && 0 !== o.rangeCount) {
                            n = o.anchorNode;
                            var r = o.anchorOffset,
                              i = o.focusNode;
                            o = o.focusOffset;
                            try {
                              n.nodeType, i.nodeType;
                            } catch (E) {
                              n = null;
                              break e;
                            }
                            var a = 0,
                              l = -1,
                              s = -1,
                              c = 0,
                              u = 0,
                              d = e,
                              f = null;
                            t: for (;;) {
                              for (
                                var p;
                                d !== n || (0 !== r && 3 !== d.nodeType) || (l = a + r),
                                  d !== i || (0 !== o && 3 !== d.nodeType) || (s = a + o),
                                  3 === d.nodeType && (a += d.nodeValue.length),
                                  null !== (p = d.firstChild);

                              )
                                (f = d), (d = p);
                              for (;;) {
                                if (d === e) break t;
                                if (
                                  (f === n && ++c === r && (l = a),
                                  f === i && ++u === o && (s = a),
                                  null !== (p = d.nextSibling))
                                )
                                  break;
                                f = (d = f).parentNode;
                              }
                              d = p;
                            }
                            n = -1 === l || -1 === s ? null : { start: l, end: s };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (oi = { focusedElem: e, selectionRange: n }, qn = !1, ec = t; null !== ec; )
                      if (((e = (t = ec).child), 0 != (1028 & t.subtreeFlags) && null !== e)) (e.return = t), (ec = e);
                      else
                        for (; null !== ec; ) {
                          t = ec;
                          try {
                            var h = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== h) {
                                    var m = h.memoizedProps,
                                      g = h.memoizedState,
                                      b = t.stateNode,
                                      v = b.getSnapshotBeforeUpdate(t.elementType === t.type ? m : va(t.type, m), g);
                                    b.__reactInternalSnapshotBeforeUpdate = v;
                                  }
                                  break;
                                case 3:
                                  var y = t.stateNode.containerInfo;
                                  1 === y.nodeType
                                    ? (y.textContent = '')
                                    : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
                                  break;
                                default:
                                  throw Error(ae(163));
                              }
                          } catch (E) {
                            Cu(t, t.return, E);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (ec = e);
                            break;
                          }
                          ec = t.return;
                        }
                    (h = oc), (oc = !1);
                  })(e, n),
                  vc(n, e),
                  gr(oi),
                  (qn = !!ni),
                  (oi = ni = null),
                  (e.current = n),
                  wc(n),
                  Gt(),
                  (Ic = l),
                  (xn = a),
                  (Rc.transition = i);
              } else e.current = n;
              if (
                (Xc && ((Xc = !1), (Yc = e), (Gc = r)),
                0 === (i = e.pendingLanes) && (Kc = null),
                (function (e) {
                  if (ln && 'function' == typeof ln.onCommitFiberRoot)
                    try {
                      ln.onCommitFiberRoot(an, e, void 0, 128 == (128 & e.current.flags));
                    } catch (t) {}
                })(n.stateNode),
                iu(e, Zt()),
                null !== t)
              )
                for (o = e.onRecoverableError, n = 0; n < t.length; n++)
                  (r = t[n]), o(r.value, { componentStack: r.stack, digest: r.digest });
              if (qc) throw ((qc = !1), (e = Qc), (Qc = null), e);
              0 != (1 & Gc) && 0 !== e.tag && Eu(),
                0 != (1 & (i = e.pendingLanes)) ? (e === Jc ? Zc++ : ((Zc = 0), (Jc = e))) : (Zc = 0),
                Ui();
            })(e, t, n, o);
        } finally {
          (Rc.transition = r), (xn = o);
        }
        return null;
      }
      function Eu() {
        if (null !== Yc) {
          var e = kn(Gc),
            t = Rc.transition,
            n = xn;
          try {
            if (((Rc.transition = null), (xn = 16 > e ? 16 : e), null === Yc)) var o = !1;
            else {
              if (((e = Yc), (Yc = null), (Gc = 0), 0 != (6 & Ic))) throw Error(ae(331));
              var r = Ic;
              for (Ic |= 4, ec = e.current; null !== ec; ) {
                var i = ec,
                  a = i.child;
                if (0 != (16 & ec.flags)) {
                  var l = i.deletions;
                  if (null !== l) {
                    for (var s = 0; s < l.length; s++) {
                      var c = l[s];
                      for (ec = c; null !== ec; ) {
                        var u = ec;
                        switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rc(8, u, i);
                        }
                        var d = u.child;
                        if (null !== d) (d.return = u), (ec = d);
                        else
                          for (; null !== ec; ) {
                            var f = (u = ec).sibling,
                              p = u.return;
                            if ((lc(u), u === c)) {
                              ec = null;
                              break;
                            }
                            if (null !== f) {
                              (f.return = p), (ec = f);
                              break;
                            }
                            ec = p;
                          }
                      }
                    }
                    var h = i.alternate;
                    if (null !== h) {
                      var m = h.child;
                      if (null !== m) {
                        h.child = null;
                        do {
                          var g = m.sibling;
                          (m.sibling = null), (m = g);
                        } while (null !== m);
                      }
                    }
                    ec = i;
                  }
                }
                if (0 != (2064 & i.subtreeFlags) && null !== a) (a.return = i), (ec = a);
                else
                  e: for (; null !== ec; ) {
                    if (0 != (2048 & (i = ec).flags))
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rc(9, i, i.return);
                      }
                    var b = i.sibling;
                    if (null !== b) {
                      (b.return = i.return), (ec = b);
                      break e;
                    }
                    ec = i.return;
                  }
              }
              var v = e.current;
              for (ec = v; null !== ec; ) {
                var y = (a = ec).child;
                if (0 != (2064 & a.subtreeFlags) && null !== y) (y.return = a), (ec = y);
                else
                  e: for (a = v; null !== ec; ) {
                    if (0 != (2048 & (l = ec).flags))
                      try {
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ic(9, l);
                        }
                      } catch (x) {
                        Cu(l, l.return, x);
                      }
                    if (l === a) {
                      ec = null;
                      break e;
                    }
                    var w = l.sibling;
                    if (null !== w) {
                      (w.return = l.return), (ec = w);
                      break e;
                    }
                    ec = l.return;
                  }
              }
              if (((Ic = r), Ui(), ln && 'function' == typeof ln.onPostCommitFiberRoot))
                try {
                  ln.onPostCommitFiberRoot(an, e);
                } catch (x) {}
              o = !0;
            }
            return o;
          } finally {
            (xn = n), (Rc.transition = t);
          }
        }
        return !1;
      }
      function Su(e, t, n) {
        (e = Aa(e, (t = ms(0, (t = ds(n, t)), 1)), 1)), (t = nu()), null !== e && (yn(e, 1, t), iu(e, t));
      }
      function Cu(e, t, n) {
        if (3 === e.tag) Su(e, e, n);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              Su(t, e, n);
              break;
            }
            if (1 === t.tag) {
              var o = t.stateNode;
              if (
                'function' == typeof t.type.getDerivedStateFromError ||
                ('function' == typeof o.componentDidCatch && (null === Kc || !Kc.has(o)))
              ) {
                (t = Aa(t, (e = gs(t, (e = ds(n, e)), 1)), 1)), (e = nu()), null !== t && (yn(t, 1, e), iu(t, e));
                break;
              }
            }
            t = t.return;
          }
      }
      function Pu(e, t, n) {
        var o = e.pingCache;
        null !== o && o.delete(t),
          (t = nu()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Oc === e &&
            (Nc & n) === n &&
            (4 === Ac || (3 === Ac && (130023424 & Nc) === Nc && 500 > Zt() - Fc) ? hu(e, 0) : (Vc |= n)),
          iu(e, t);
      }
      function Tu(e, t) {
        0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = fn), 0 == (130023424 & (fn <<= 1)) && (fn = 4194304)));
        var n = nu();
        null !== (e = Oa(e, t)) && (yn(e, t, n), iu(e, n));
      }
      function Ru(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), Tu(e, n);
      }
      function Iu(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var o = e.stateNode,
              r = e.memoizedState;
            null !== r && (n = r.retryLane);
            break;
          case 19:
            o = e.stateNode;
            break;
          default:
            throw Error(ae(314));
        }
        null !== o && o.delete(t), Tu(e, n);
      }
      function Ou(e, t) {
        return Kt(e, t);
      }
      function Lu(e, t, n, o) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = o),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Nu(e, t, n, o) {
        return new Lu(e, t, n, o);
      }
      function _u(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function zu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
          (n.flags = 14680064 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Au(e, t, n, o, r, i) {
        var a = 2;
        if (((o = e), 'function' == typeof e)) _u(e) && (a = 1);
        else if ('string' == typeof e) a = 5;
        else
          e: switch (e) {
            case Ee:
              return Mu(n.children, r, i, t);
            case Se:
              (a = 8), (r |= 8);
              break;
            case Ce:
              return ((e = Nu(12, n, t, 2 | r)).elementType = Ce), (e.lanes = i), e;
            case Ie:
              return ((e = Nu(13, n, t, r)).elementType = Ie), (e.lanes = i), e;
            case Oe:
              return ((e = Nu(19, n, t, r)).elementType = Oe), (e.lanes = i), e;
            case _e:
              return Bu(n, r, i, t);
            default:
              if ('object' == typeof e && null !== e)
                switch (e.$$typeof) {
                  case Pe:
                    a = 10;
                    break e;
                  case Te:
                    a = 9;
                    break e;
                  case Re:
                    a = 11;
                    break e;
                  case Le:
                    a = 14;
                    break e;
                  case Ne:
                    (a = 16), (o = null);
                    break e;
                }
              throw Error(ae(130, null == e ? e : typeof e, ''));
          }
        return ((t = Nu(a, n, t, r)).elementType = e), (t.type = o), (t.lanes = i), t;
      }
      function Mu(e, t, n, o) {
        return ((e = Nu(7, e, o, t)).lanes = n), e;
      }
      function Bu(e, t, n, o) {
        return ((e = Nu(22, e, o, t)).elementType = _e), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
      }
      function Du(e, t, n) {
        return ((e = Nu(6, e, null, t)).lanes = n), e;
      }
      function Vu(e, t, n) {
        return (
          ((t = Nu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function ju(e, t, n, o, r) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = vn(0)),
          (this.expirationTimes = vn(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = vn(0)),
          (this.identifierPrefix = o),
          (this.onRecoverableError = r),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Hu(e, t, n, o, r, i, a, l, s) {
        return (
          (e = new ju(e, t, n, l, s)),
          1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
          (i = Nu(3, null, null, t)),
          (e.current = i),
          (i.stateNode = e),
          (i.memoizedState = {
            element: o,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          Na(i),
          e
        );
      }
      function Fu(e) {
        if (!e) return Ri;
        e: {
          if (Ft((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ae(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (_i(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (null !== t);
          throw Error(ae(171));
        }
        if (1 === e.tag) {
          var n = e.type;
          if (_i(n)) return Mi(e, n, t);
        }
        return t;
      }
      function Uu(e, t, n, o, r, i, a, l, s) {
        return (
          ((e = Hu(n, o, !0, e, 0, i, 0, l, s)).context = Fu(null)),
          (n = e.current),
          ((i = za((o = nu()), (r = ou(n)))).callback = null != t ? t : null),
          Aa(n, i, r),
          (e.current.lanes = r),
          yn(e, r, o),
          iu(e, o),
          e
        );
      }
      function Wu(e, t, n, o) {
        var r = t.current,
          i = nu(),
          a = ou(r);
        return (
          (n = Fu(n)),
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = za(i, a)).payload = { element: e }),
          null !== (o = void 0 === o ? null : o) && (t.callback = o),
          null !== (e = Aa(r, t, a)) && (ru(e, r, a, i), Ma(e, r, a)),
          a
        );
      }
      function qu(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function Qu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function Ku(e, t) {
        Qu(e, t), (e = e.alternate) && Qu(e, t);
      }
      Sc = function (e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || Oi.current) xs = !0;
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
              return (
                (xs = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      Os(t), ma();
                      break;
                    case 5:
                      ll(t);
                      break;
                    case 1:
                      _i(t.type) && Bi(t);
                      break;
                    case 4:
                      il(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var o = t.type._context,
                        r = t.memoizedProps.value;
                      Ti(ya, o._currentValue), (o._currentValue = r);
                      break;
                    case 13:
                      if (null !== (o = t.memoizedState))
                        return null !== o.dehydrated
                          ? (Ti(cl, 1 & cl.current), (t.flags |= 128), null)
                          : 0 != (n & t.child.childLanes)
                          ? Ds(e, t, n)
                          : (Ti(cl, 1 & cl.current), null !== (e = qs(e, t, n)) ? e.sibling : null);
                      Ti(cl, 1 & cl.current);
                      break;
                    case 19:
                      if (((o = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                        if (o) return Us(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (r = t.memoizedState) &&
                          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
                        Ti(cl, cl.current),
                        o)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Cs(e, t, n);
                  }
                  return qs(e, t, n);
                })(e, t, n)
              );
            xs = 0 != (131072 & e.flags);
          }
        else (xs = !1), aa && 0 != (1048576 & t.flags) && ta(t, Ki, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var o = t.type;
            Ws(e, t), (e = t.pendingProps);
            var r = Ni(t, Ii.current);
            Ca(t, n), (r = Sl(null, t, o, e, r, n));
            var i = Cl();
            return (
              (t.flags |= 1),
              'object' == typeof r && null !== r && 'function' == typeof r.render && void 0 === r.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  _i(o) ? ((i = !0), Bi(t)) : (i = !1),
                  (t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                  Na(t),
                  (r.updater = Fa),
                  (t.stateNode = r),
                  (r._reactInternals = t),
                  Qa(t, o, e, n),
                  (t = Is(null, t, o, !0, i, n)))
                : ((t.tag = 0), aa && i && na(t), ks(null, t, r, n), (t = t.child)),
              t
            );
          case 16:
            o = t.elementType;
            e: {
              switch (
                (Ws(e, t),
                (e = t.pendingProps),
                (o = (r = o._init)(o._payload)),
                (t.type = o),
                (r = t.tag =
                  (function (e) {
                    if ('function' == typeof e) return _u(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === Re) return 11;
                      if (e === Le) return 14;
                    }
                    return 2;
                  })(o)),
                (e = va(o, e)),
                r)
              ) {
                case 0:
                  t = Ts(null, t, o, e, n);
                  break e;
                case 1:
                  t = Rs(null, t, o, e, n);
                  break e;
                case 11:
                  t = $s(null, t, o, e, n);
                  break e;
                case 14:
                  t = Es(null, t, o, va(o.type, e), n);
                  break e;
              }
              throw Error(ae(306, o, ''));
            }
            return t;
          case 0:
            return (o = t.type), (r = t.pendingProps), Ts(e, t, o, (r = t.elementType === o ? r : va(o, r)), n);
          case 1:
            return (o = t.type), (r = t.pendingProps), Rs(e, t, o, (r = t.elementType === o ? r : va(o, r)), n);
          case 3:
            e: {
              if ((Os(t), null === e)) throw Error(ae(387));
              (o = t.pendingProps), (r = (i = t.memoizedState).element), _a(e, t), Da(t, o, null, n);
              var a = t.memoizedState;
              if (((o = a.element), i.isDehydrated)) {
                if (
                  ((i = {
                    element: o,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions,
                  }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  256 & t.flags)
                ) {
                  t = Ls(e, t, o, n, (r = ds(Error(ae(423)), t)));
                  break e;
                }
                if (o !== r) {
                  t = Ls(e, t, o, n, (r = ds(Error(ae(424)), t)));
                  break e;
                }
                for (
                  ia = di(t.stateNode.containerInfo.firstChild),
                    ra = t,
                    aa = !0,
                    la = null,
                    n = Ja(t, null, o, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
              } else {
                if ((ma(), o === r)) {
                  t = qs(e, t, n);
                  break e;
                }
                ks(e, t, o, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              ll(t),
              null === e && da(t),
              (o = t.type),
              (r = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (a = r.children),
              ri(o, r) ? (a = null) : null !== i && ri(o, i) && (t.flags |= 32),
              Ps(e, t),
              ks(e, t, a, n),
              t.child
            );
          case 6:
            return null === e && da(t), null;
          case 13:
            return Ds(e, t, n);
          case 4:
            return (
              il(t, t.stateNode.containerInfo),
              (o = t.pendingProps),
              null === e ? (t.child = Za(t, null, o, n)) : ks(e, t, o, n),
              t.child
            );
          case 11:
            return (o = t.type), (r = t.pendingProps), $s(e, t, o, (r = t.elementType === o ? r : va(o, r)), n);
          case 7:
            return ks(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ks(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((o = t.type._context),
                (r = t.pendingProps),
                (i = t.memoizedProps),
                (a = r.value),
                Ti(ya, o._currentValue),
                (o._currentValue = a),
                null !== i)
              )
                if (cr(i.value, a)) {
                  if (i.children === r.children && !Oi.current) {
                    t = qs(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                    var l = i.dependencies;
                    if (null !== l) {
                      a = i.child;
                      for (var s = l.firstContext; null !== s; ) {
                        if (s.context === o) {
                          if (1 === i.tag) {
                            (s = za(-1, n & -n)).tag = 2;
                            var c = i.updateQueue;
                            if (null !== c) {
                              var u = (c = c.shared).pending;
                              null === u ? (s.next = s) : ((s.next = u.next), (u.next = s)), (c.pending = s);
                            }
                          }
                          (i.lanes |= n),
                            null !== (s = i.alternate) && (s.lanes |= n),
                            Sa(i.return, n, t),
                            (l.lanes |= n);
                          break;
                        }
                        s = s.next;
                      }
                    } else if (10 === i.tag) a = i.type === t.type ? null : i.child;
                    else if (18 === i.tag) {
                      if (null === (a = i.return)) throw Error(ae(341));
                      (a.lanes |= n), null !== (l = a.alternate) && (l.lanes |= n), Sa(a, n, t), (a = i.sibling);
                    } else a = i.child;
                    if (null !== a) a.return = i;
                    else
                      for (a = i; null !== a; ) {
                        if (a === t) {
                          a = null;
                          break;
                        }
                        if (null !== (i = a.sibling)) {
                          (i.return = a.return), (a = i);
                          break;
                        }
                        a = a.return;
                      }
                    i = a;
                  }
              ks(e, t, r.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (r = t.type),
              (o = t.pendingProps.children),
              Ca(t, n),
              (o = o((r = Pa(r)))),
              (t.flags |= 1),
              ks(e, t, o, n),
              t.child
            );
          case 14:
            return (r = va((o = t.type), t.pendingProps)), Es(e, t, o, (r = va(o.type, r)), n);
          case 15:
            return Ss(e, t, t.type, t.pendingProps, n);
          case 17:
            return (
              (o = t.type),
              (r = t.pendingProps),
              (r = t.elementType === o ? r : va(o, r)),
              Ws(e, t),
              (t.tag = 1),
              _i(o) ? ((e = !0), Bi(t)) : (e = !1),
              Ca(t, n),
              Wa(t, o, r),
              Qa(t, o, r, n),
              Is(null, t, o, !0, e, n)
            );
          case 19:
            return Us(e, t, n);
          case 22:
            return Cs(e, t, n);
        }
        throw Error(ae(156, t.tag));
      };
      var Xu =
        'function' == typeof reportError
          ? reportError
          : function (e) {
              console.error(e);
            };
      function Yu(e) {
        this._internalRoot = e;
      }
      function Gu(e) {
        this._internalRoot = e;
      }
      function Zu(e) {
        return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
      }
      function Ju(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function ed() {}
      function td(e, t, n, o, r) {
        var i = n._reactRootContainer;
        if (i) {
          var a = i;
          if ('function' == typeof r) {
            var l = r;
            r = function () {
              var e = qu(a);
              l.call(e);
            };
          }
          Wu(t, a, e, r);
        } else
          a = (function (e, t, n, o, r) {
            if (r) {
              if ('function' == typeof o) {
                var i = o;
                o = function () {
                  var e = qu(a);
                  i.call(e);
                };
              }
              var a = Uu(t, o, e, 0, null, !1, 0, '', ed);
              return (e._reactRootContainer = a), (e[gi] = a.current), Ur(8 === e.nodeType ? e.parentNode : e), fu(), a;
            }
            for (; (r = e.lastChild); ) e.removeChild(r);
            if ('function' == typeof o) {
              var l = o;
              o = function () {
                var e = qu(s);
                l.call(e);
              };
            }
            var s = Hu(e, 0, !1, null, 0, !1, 0, '', ed);
            return (
              (e._reactRootContainer = s),
              (e[gi] = s.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              fu(function () {
                Wu(t, s, n, o);
              }),
              s
            );
          })(n, t, e, r, o);
        return qu(a);
      }
      (Gu.prototype.render = Yu.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(ae(409));
          Wu(e, t, null, null);
        }),
        (Gu.prototype.unmount = Yu.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              fu(function () {
                Wu(null, e, null, null);
              }),
                (t[gi] = null);
            }
          }),
        (Gu.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Cn();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < zn.length && 0 !== t && t < zn[n].priority; n++);
            zn.splice(n, 0, e), 0 === n && Dn(e);
          }
        }),
        ($n = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var n = pn(t.pendingLanes);
                0 !== n && (wn(t, 1 | n), iu(t, Zt()), 0 == (6 & Ic) && ((Uc = Zt() + 500), Ui()));
              }
              break;
            case 13:
              fu(function () {
                var t = Oa(e, 1);
                if (null !== t) {
                  var n = nu();
                  ru(t, e, 1, n);
                }
              }),
                Ku(e, 1);
          }
        }),
        (En = function (e) {
          if (13 === e.tag) {
            var t = Oa(e, 134217728);
            null !== t && ru(t, e, 134217728, nu()), Ku(e, 134217728);
          }
        }),
        (Sn = function (e) {
          if (13 === e.tag) {
            var t = ou(e),
              n = Oa(e, t);
            null !== n && ru(n, e, t, nu()), Ku(e, t);
          }
        }),
        (Cn = function () {
          return xn;
        }),
        (Pn = function (e, t) {
          var n = xn;
          try {
            return (xn = e), t();
          } finally {
            xn = n;
          }
        }),
        ($t = function (e, t, n) {
          switch (t) {
            case 'input':
              if ((Je(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                  t < n.length;
                  t++
                ) {
                  var o = n[t];
                  if (o !== e && o.form === e.form) {
                    var r = $i(o);
                    if (!r) throw Error(ae(90));
                    Ke(o), Je(o, r);
                  }
                }
              }
              break;
            case 'textarea':
              at(e, n);
              break;
            case 'select':
              null != (t = n.value) && ot(e, !!n.multiple, t, !1);
          }
        }),
        (Rt = du),
        (It = fu);
      var nd = { usingClientEntryPoint: !1, Events: [xi, ki, $i, Pt, Tt, du] },
        od = { findFiberByHostInstance: wi, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
        rd = {
          bundleType: od.bundleType,
          version: od.version,
          rendererPackageName: od.rendererPackageName,
          rendererConfig: od.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: xe.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = qt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            od.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
        };
      if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var id = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!id.isDisabled && id.supportsFiber)
          try {
            (an = id.inject(rd)), (ln = id);
          } catch (dt) {}
      }
      (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nd),
        (ee.createPortal = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!Zu(t)) throw Error(ae(200));
          return (function (e, t, n) {
            var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: $e, key: null == o ? null : '' + o, children: e, containerInfo: t, implementation: n };
          })(e, t, null, n);
        }),
        (ee.createRoot = function (e, t) {
          if (!Zu(e)) throw Error(ae(299));
          var n = !1,
            o = '',
            r = Xu;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
              void 0 !== t.onRecoverableError && (r = t.onRecoverableError)),
            (t = Hu(e, 1, !1, null, 0, n, 0, o, r)),
            (e[gi] = t.current),
            Ur(8 === e.nodeType ? e.parentNode : e),
            new Yu(t)
          );
        }),
        (ee.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(ae(188));
            throw ((e = Object.keys(e).join(',')), Error(ae(268, e)));
          }
          return (e = null === (e = qt(t)) ? null : e.stateNode);
        }),
        (ee.flushSync = function (e) {
          return fu(e);
        }),
        (ee.hydrate = function (e, t, n) {
          if (!Ju(t)) throw Error(ae(200));
          return td(null, e, t, !0, n);
        }),
        (ee.hydrateRoot = function (e, t, n) {
          if (!Zu(e)) throw Error(ae(405));
          var o = (null != n && n.hydratedSources) || null,
            r = !1,
            i = '',
            a = Xu;
          if (
            (null != n &&
              (!0 === n.unstable_strictMode && (r = !0),
              void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
              void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = Uu(t, null, e, 1, null != n ? n : null, r, 0, i, a)),
            (e[gi] = t.current),
            Ur(e),
            o)
          )
            for (e = 0; e < o.length; e++)
              (r = (r = (n = o[e])._getVersion)(n._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [n, r])
                  : t.mutableSourceEagerHydrationData.push(n, r);
          return new Gu(t);
        }),
        (ee.render = function (e, t, n) {
          if (!Ju(t)) throw Error(ae(200));
          return td(null, e, t, !1, n);
        }),
        (ee.unmountComponentAtNode = function (e) {
          if (!Ju(e)) throw Error(ae(40));
          return (
            !!e._reactRootContainer &&
            (fu(function () {
              td(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[gi] = null);
              });
            }),
            !0)
          );
        }),
        (ee.unstable_batchedUpdates = du),
        (ee.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
          if (!Ju(n)) throw Error(ae(200));
          if (null == e || void 0 === e._reactInternals) throw Error(ae(38));
          return td(e, t, n, !1, o);
        }),
        (ee.version = '18.2.0-next-9e3b772b8-20220608'),
        (function e() {
          if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
        (J.exports = ee);
      var ad = J.exports;
      const ld = o(ad);
      var sd,
        cd = ad;
      function ud(e, t) {
        return (
          (ud = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ud(e, t)
        );
      }
      function dd(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ud(e, t);
      }
      (sd = cd.createRoot), cd.hydrateRoot;
      var fd = { exports: {} };
      function pd() {}
      function hd() {}
      (hd.resetWarningCache = pd),
        (fd.exports = (function () {
          function e(e, t, n, o, r, i) {
            if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
              var a = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((a.name = 'Invariant Violation'), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
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
            checkPropTypes: hd,
            resetWarningCache: pd,
          };
          return (n.PropTypes = n), n;
        })());
      const md = o(fd.exports);
      function gd() {
        return (
          (gd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          gd.apply(this, arguments)
        );
      }
      function bd(e) {
        return '/' === e.charAt(0);
      }
      function vd(e, t) {
        for (var n = t, o = n + 1, r = e.length; o < r; n += 1, o += 1) e[n] = e[o];
        e.pop();
      }
      function yd(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      function wd(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e))
          return (
            Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (e, n) {
              return wd(e, t[n]);
            })
          );
        if ('object' == typeof e || 'object' == typeof t) {
          var n = yd(e),
            o = yd(t);
          return n !== e || o !== t
            ? wd(n, o)
            : Object.keys(Object.assign({}, e, t)).every(function (n) {
                return wd(e[n], t[n]);
              });
        }
        return !1;
      }
      var xd = !0,
        kd = 'Invariant failed';
      function $d(e, t) {
        if (!e) {
          if (xd) throw new Error(kd);
          var n = 'function' == typeof t ? t() : t,
            o = n ? ''.concat(kd, ': ').concat(n) : kd;
          throw new Error(o);
        }
      }
      function Ed(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function Sd(e, t) {
        return (function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function Cd(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function Pd(e) {
        var t = e.pathname,
          n = e.search,
          o = e.hash,
          r = t || '/';
        return (
          n && '?' !== n && (r += '?' === n.charAt(0) ? n : '?' + n),
          o && '#' !== o && (r += '#' === o.charAt(0) ? o : '#' + o),
          r
        );
      }
      function Td(e, t, n, o) {
        var r;
        'string' == typeof e
          ? ((r = (function (e) {
              var t = e || '/',
                n = '',
                o = '',
                r = t.indexOf('#');
              -1 !== r && ((o = t.substr(r)), (t = t.substr(0, r)));
              var i = t.indexOf('?');
              return (
                -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
                { pathname: t, search: '?' === n ? '' : n, hash: '#' === o ? '' : o }
              );
            })(e)),
            (r.state = t))
          : (void 0 === (r = gd({}, e)).pathname && (r.pathname = ''),
            r.search ? '?' !== r.search.charAt(0) && (r.search = '?' + r.search) : (r.search = ''),
            r.hash ? '#' !== r.hash.charAt(0) && (r.hash = '#' + r.hash) : (r.hash = ''),
            void 0 !== t && void 0 === r.state && (r.state = t));
        try {
          r.pathname = decodeURI(r.pathname);
        } catch (Sf) {
          throw Sf instanceof URIError
            ? new URIError(
                'Pathname "' +
                  r.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : Sf;
        }
        return (
          n && (r.key = n),
          o
            ? r.pathname
              ? '/' !== r.pathname.charAt(0) &&
                (r.pathname = (function (e, t) {
                  void 0 === t && (t = '');
                  var n,
                    o = (e && e.split('/')) || [],
                    r = (t && t.split('/')) || [],
                    i = e && bd(e),
                    a = t && bd(t),
                    l = i || a;
                  if ((e && bd(e) ? (r = o) : o.length && (r.pop(), (r = r.concat(o))), !r.length)) return '/';
                  if (r.length) {
                    var s = r[r.length - 1];
                    n = '.' === s || '..' === s || '' === s;
                  } else n = !1;
                  for (var c = 0, u = r.length; u >= 0; u--) {
                    var d = r[u];
                    '.' === d ? vd(r, u) : '..' === d ? (vd(r, u), c++) : c && (vd(r, u), c--);
                  }
                  if (!l) for (; c--; c) r.unshift('..');
                  !l || '' === r[0] || (r[0] && bd(r[0])) || r.unshift('');
                  var f = r.join('/');
                  return n && '/' !== f.substr(-1) && (f += '/'), f;
                })(r.pathname, o.pathname))
              : (r.pathname = o.pathname)
            : r.pathname || (r.pathname = '/'),
          r
        );
      }
      function Rd(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          wd(e.state, t.state)
        );
      }
      function Id() {
        var e = null,
          t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, o, r) {
            if (null != e) {
              var i = 'function' == typeof e ? e(t, n) : e;
              'string' == typeof i ? ('function' == typeof o ? o(i, r) : r(!0)) : r(!1 !== i);
            } else r(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function o() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(o),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== o;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var Od = !('undefined' == typeof window || !window.document || !window.document.createElement);
      function Ld(e, t) {
        t(window.confirm(e));
      }
      var Nd = 'popstate',
        _d = 'hashchange';
      function zd() {
        try {
          return window.history.state || {};
        } catch (Sf) {
          return {};
        }
      }
      function Ad(e) {
        void 0 === e && (e = {}), Od || $d(!1);
        var t = window.history,
          n = (function () {
            var e = window.navigator.userAgent;
            return (
              ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) ||
                -1 === e.indexOf('Mobile Safari') ||
                -1 !== e.indexOf('Chrome') ||
                -1 !== e.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history
            );
          })(),
          o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          r = e,
          i = r.forceRefresh,
          a = void 0 !== i && i,
          l = r.getUserConfirmation,
          s = void 0 === l ? Ld : l,
          c = r.keyLength,
          u = void 0 === c ? 6 : c,
          d = e.basename ? Cd(Ed(e.basename)) : '';
        function f(e) {
          var t = e || {},
            n = t.key,
            o = t.state,
            r = window.location,
            i = r.pathname + r.search + r.hash;
          return d && (i = Sd(i, d)), Td(i, o, n);
        }
        function p() {
          return Math.random().toString(36).substr(2, u);
        }
        var h = Id();
        function m(e) {
          gd(P, e), (P.length = t.length), h.notifyListeners(P.location, P.action);
        }
        function g(e) {
          (function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
          })(e) || y(f(e.state));
        }
        function b() {
          y(f(zd()));
        }
        var v = !1;
        function y(e) {
          v
            ? ((v = !1), m())
            : h.confirmTransitionTo(e, 'POP', s, function (t) {
                t
                  ? m({ action: 'POP', location: e })
                  : (function (e) {
                      var t = P.location,
                        n = x.indexOf(t.key);
                      -1 === n && (n = 0);
                      var o = x.indexOf(e.key);
                      -1 === o && (o = 0);
                      var r = n - o;
                      r && ((v = !0), $(r));
                    })(e);
              });
        }
        var w = f(zd()),
          x = [w.key];
        function k(e) {
          return d + Pd(e);
        }
        function $(e) {
          t.go(e);
        }
        var E = 0;
        function S(e) {
          1 === (E += e) && 1 === e
            ? (window.addEventListener(Nd, g), o && window.addEventListener(_d, b))
            : 0 === E && (window.removeEventListener(Nd, g), o && window.removeEventListener(_d, b));
        }
        var C = !1,
          P = {
            length: t.length,
            action: 'POP',
            location: w,
            createHref: k,
            push: function (e, o) {
              var r = 'PUSH',
                i = Td(e, o, p(), P.location);
              h.confirmTransitionTo(i, r, s, function (e) {
                if (e) {
                  var o = k(i),
                    l = i.key,
                    s = i.state;
                  if (n)
                    if ((t.pushState({ key: l, state: s }, null, o), a)) window.location.href = o;
                    else {
                      var c = x.indexOf(P.location.key),
                        u = x.slice(0, c + 1);
                      u.push(i.key), (x = u), m({ action: r, location: i });
                    }
                  else window.location.href = o;
                }
              });
            },
            replace: function (e, o) {
              var r = 'REPLACE',
                i = Td(e, o, p(), P.location);
              h.confirmTransitionTo(i, r, s, function (e) {
                if (e) {
                  var o = k(i),
                    l = i.key,
                    s = i.state;
                  if (n)
                    if ((t.replaceState({ key: l, state: s }, null, o), a)) window.location.replace(o);
                    else {
                      var c = x.indexOf(P.location.key);
                      -1 !== c && (x[c] = i.key), m({ action: r, location: i });
                    }
                  else window.location.replace(o);
                }
              });
            },
            go: $,
            goBack: function () {
              $(-1);
            },
            goForward: function () {
              $(1);
            },
            block: function (e) {
              void 0 === e && (e = !1);
              var t = h.setPrompt(e);
              return (
                C || (S(1), (C = !0)),
                function () {
                  return C && ((C = !1), S(-1)), t();
                }
              );
            },
            listen: function (e) {
              var t = h.appendListener(e);
              return (
                S(1),
                function () {
                  S(-1), t();
                }
              );
            },
          };
        return P;
      }
      var Md = { exports: {} },
        Bd =
          Array.isArray ||
          function (e) {
            return '[object Array]' == Object.prototype.toString.call(e);
          };
      (Md.exports = Kd),
        (Md.exports.parse = Vd),
        (Md.exports.compile = function (e, t) {
          return Hd(Vd(e, t), t);
        }),
        (Md.exports.tokensToFunction = Hd),
        (Md.exports.tokensToRegExp = Qd);
      var Dd = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
      function Vd(e, t) {
        for (var n, o = [], r = 0, i = 0, a = '', l = (t && t.delimiter) || '/'; null != (n = Dd.exec(e)); ) {
          var s = n[0],
            c = n[1],
            u = n.index;
          if (((a += e.slice(i, u)), (i = u + s.length), c)) a += c[1];
          else {
            var d = e[i],
              f = n[2],
              p = n[3],
              h = n[4],
              m = n[5],
              g = n[6],
              b = n[7];
            a && (o.push(a), (a = ''));
            var v = null != f && null != d && d !== f,
              y = '+' === g || '*' === g,
              w = '?' === g || '*' === g,
              x = n[2] || l,
              k = h || m;
            o.push({
              name: p || r++,
              prefix: f || '',
              delimiter: x,
              optional: w,
              repeat: y,
              partial: v,
              asterisk: !!b,
              pattern: k ? Ud(k) : b ? '.*' : '[^' + Fd(x) + ']+?',
            });
          }
        }
        return i < e.length && (a += e.substr(i)), a && o.push(a), o;
      }
      function jd(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function Hd(e, t) {
        for (var n = new Array(e.length), o = 0; o < e.length; o++)
          'object' == typeof e[o] && (n[o] = new RegExp('^(?:' + e[o].pattern + ')$', qd(t)));
        return function (t, o) {
          for (var r = '', i = t || {}, a = (o || {}).pretty ? jd : encodeURIComponent, l = 0; l < e.length; l++) {
            var s = e[l];
            if ('string' != typeof s) {
              var c,
                u = i[s.name];
              if (null == u) {
                if (s.optional) {
                  s.partial && (r += s.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + s.name + '" to be defined');
              }
              if (Bd(u)) {
                if (!s.repeat)
                  throw new TypeError(
                    'Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(u) + '`'
                  );
                if (0 === u.length) {
                  if (s.optional) continue;
                  throw new TypeError('Expected "' + s.name + '" to not be empty');
                }
                for (var d = 0; d < u.length; d++) {
                  if (((c = a(u[d])), !n[l].test(c)))
                    throw new TypeError(
                      'Expected all "' +
                        s.name +
                        '" to match "' +
                        s.pattern +
                        '", but received `' +
                        JSON.stringify(c) +
                        '`'
                    );
                  r += (0 === d ? s.prefix : s.delimiter) + c;
                }
              } else {
                if (
                  ((c = s.asterisk
                    ? encodeURI(u).replace(/[?#]/g, function (e) {
                        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : a(u)),
                  !n[l].test(c))
                )
                  throw new TypeError(
                    'Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + c + '"'
                  );
                r += s.prefix + c;
              }
            } else r += s;
          }
          return r;
        };
      }
      function Fd(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function Ud(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function Wd(e, t) {
        return (e.keys = t), e;
      }
      function qd(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function Qd(e, t, n) {
        Bd(t) || ((n = t || n), (t = []));
        for (var o = (n = n || {}).strict, r = !1 !== n.end, i = '', a = 0; a < e.length; a++) {
          var l = e[a];
          if ('string' == typeof l) i += Fd(l);
          else {
            var s = Fd(l.prefix),
              c = '(?:' + l.pattern + ')';
            t.push(l),
              l.repeat && (c += '(?:' + s + c + ')*'),
              (i += c =
                l.optional ? (l.partial ? s + '(' + c + ')?' : '(?:' + s + '(' + c + '))?') : s + '(' + c + ')');
          }
        }
        var u = Fd(n.delimiter || '/'),
          d = i.slice(-u.length) === u;
        return (
          o || (i = (d ? i.slice(0, -u.length) : i) + '(?:' + u + '(?=$))?'),
          (i += r ? '$' : o && d ? '' : '(?=' + u + '|$)'),
          Wd(new RegExp('^' + i, qd(n)), t)
        );
      }
      function Kd(e, t, n) {
        return (
          Bd(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var o = 0; o < n.length; o++)
                    t.push({
                      name: o,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return Wd(e, t);
              })(e, t)
            : Bd(e)
            ? (function (e, t, n) {
                for (var o = [], r = 0; r < e.length; r++) o.push(Kd(e[r], t, n).source);
                return Wd(new RegExp('(?:' + o.join('|') + ')', qd(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return Qd(Vd(e, n), t, n);
              })(e, t, n)
        );
      }
      const Xd = o(Md.exports);
      var Yd = {},
        Gd = 'function' == typeof Symbol && Symbol.for,
        Zd = Gd ? Symbol.for('react.element') : 60103,
        Jd = Gd ? Symbol.for('react.portal') : 60106,
        ef = Gd ? Symbol.for('react.fragment') : 60107,
        tf = Gd ? Symbol.for('react.strict_mode') : 60108,
        nf = Gd ? Symbol.for('react.profiler') : 60114,
        of = Gd ? Symbol.for('react.provider') : 60109,
        rf = Gd ? Symbol.for('react.context') : 60110,
        af = Gd ? Symbol.for('react.async_mode') : 60111,
        lf = Gd ? Symbol.for('react.concurrent_mode') : 60111,
        sf = Gd ? Symbol.for('react.forward_ref') : 60112,
        cf = Gd ? Symbol.for('react.suspense') : 60113,
        uf = Gd ? Symbol.for('react.suspense_list') : 60120,
        df = Gd ? Symbol.for('react.memo') : 60115,
        ff = Gd ? Symbol.for('react.lazy') : 60116,
        pf = Gd ? Symbol.for('react.block') : 60121,
        hf = Gd ? Symbol.for('react.fundamental') : 60117,
        mf = Gd ? Symbol.for('react.responder') : 60118,
        gf = Gd ? Symbol.for('react.scope') : 60119;
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function bf(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case Zd:
              switch ((e = e.type)) {
                case af:
                case lf:
                case ef:
                case nf:
                case tf:
                case cf:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case rf:
                    case sf:
                    case ff:
                    case df:
                    case of:
                      return e;
                    default:
                      return t;
                  }
              }
            case Jd:
              return t;
          }
        }
      }
      function vf(e) {
        return bf(e) === lf;
      }
      function yf(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = {},
          i = Object.keys(e);
        for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      (Yd.AsyncMode = af),
        (Yd.ConcurrentMode = lf),
        (Yd.ContextConsumer = rf),
        (Yd.ContextProvider = of),
        (Yd.Element = Zd),
        (Yd.ForwardRef = sf),
        (Yd.Fragment = ef),
        (Yd.Lazy = ff),
        (Yd.Memo = df),
        (Yd.Portal = Jd),
        (Yd.Profiler = nf),
        (Yd.StrictMode = tf),
        (Yd.Suspense = cf),
        (Yd.isAsyncMode = function (e) {
          return vf(e) || bf(e) === af;
        }),
        (Yd.isConcurrentMode = vf),
        (Yd.isContextConsumer = function (e) {
          return bf(e) === rf;
        }),
        (Yd.isContextProvider = function (e) {
          return bf(e) === of;
        }),
        (Yd.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === Zd;
        }),
        (Yd.isForwardRef = function (e) {
          return bf(e) === sf;
        }),
        (Yd.isFragment = function (e) {
          return bf(e) === ef;
        }),
        (Yd.isLazy = function (e) {
          return bf(e) === ff;
        }),
        (Yd.isMemo = function (e) {
          return bf(e) === df;
        }),
        (Yd.isPortal = function (e) {
          return bf(e) === Jd;
        }),
        (Yd.isProfiler = function (e) {
          return bf(e) === nf;
        }),
        (Yd.isStrictMode = function (e) {
          return bf(e) === tf;
        }),
        (Yd.isSuspense = function (e) {
          return bf(e) === cf;
        }),
        (Yd.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === ef ||
            e === lf ||
            e === nf ||
            e === tf ||
            e === cf ||
            e === uf ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === ff ||
                e.$$typeof === df ||
                e.$$typeof === of ||
                e.$$typeof === rf ||
                e.$$typeof === sf ||
                e.$$typeof === hf ||
                e.$$typeof === mf ||
                e.$$typeof === gf ||
                e.$$typeof === pf))
          );
        }),
        (Yd.typeOf = bf);
      var wf = { exports: {} },
        xf = {},
        kf = 'function' == typeof Symbol && Symbol.for,
        $f = kf ? Symbol.for('react.element') : 60103,
        Ef = kf ? Symbol.for('react.portal') : 60106,
        Sf = kf ? Symbol.for('react.fragment') : 60107,
        Cf = kf ? Symbol.for('react.strict_mode') : 60108,
        Pf = kf ? Symbol.for('react.profiler') : 60114,
        Tf = kf ? Symbol.for('react.provider') : 60109,
        Rf = kf ? Symbol.for('react.context') : 60110,
        If = kf ? Symbol.for('react.async_mode') : 60111,
        Of = kf ? Symbol.for('react.concurrent_mode') : 60111,
        Lf = kf ? Symbol.for('react.forward_ref') : 60112,
        Nf = kf ? Symbol.for('react.suspense') : 60113,
        _f = kf ? Symbol.for('react.suspense_list') : 60120,
        zf = kf ? Symbol.for('react.memo') : 60115,
        Af = kf ? Symbol.for('react.lazy') : 60116,
        Mf = kf ? Symbol.for('react.block') : 60121,
        Bf = kf ? Symbol.for('react.fundamental') : 60117,
        Df = kf ? Symbol.for('react.responder') : 60118,
        Vf = kf ? Symbol.for('react.scope') : 60119;
      function jf(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case $f:
              switch ((e = e.type)) {
                case If:
                case Of:
                case Sf:
                case Pf:
                case Cf:
                case Nf:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case Rf:
                    case Lf:
                    case Af:
                    case zf:
                    case Tf:
                      return e;
                    default:
                      return t;
                  }
              }
            case Ef:
              return t;
          }
        }
      }
      function Hf(e) {
        return jf(e) === Of;
      }
      (xf.AsyncMode = If),
        (xf.ConcurrentMode = Of),
        (xf.ContextConsumer = Rf),
        (xf.ContextProvider = Tf),
        (xf.Element = $f),
        (xf.ForwardRef = Lf),
        (xf.Fragment = Sf),
        (xf.Lazy = Af),
        (xf.Memo = zf),
        (xf.Portal = Ef),
        (xf.Profiler = Pf),
        (xf.StrictMode = Cf),
        (xf.Suspense = Nf),
        (xf.isAsyncMode = function (e) {
          return Hf(e) || jf(e) === If;
        }),
        (xf.isConcurrentMode = Hf),
        (xf.isContextConsumer = function (e) {
          return jf(e) === Rf;
        }),
        (xf.isContextProvider = function (e) {
          return jf(e) === Tf;
        }),
        (xf.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === $f;
        }),
        (xf.isForwardRef = function (e) {
          return jf(e) === Lf;
        }),
        (xf.isFragment = function (e) {
          return jf(e) === Sf;
        }),
        (xf.isLazy = function (e) {
          return jf(e) === Af;
        }),
        (xf.isMemo = function (e) {
          return jf(e) === zf;
        }),
        (xf.isPortal = function (e) {
          return jf(e) === Ef;
        }),
        (xf.isProfiler = function (e) {
          return jf(e) === Pf;
        }),
        (xf.isStrictMode = function (e) {
          return jf(e) === Cf;
        }),
        (xf.isSuspense = function (e) {
          return jf(e) === Nf;
        }),
        (xf.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === Sf ||
            e === Of ||
            e === Pf ||
            e === Cf ||
            e === Nf ||
            e === _f ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === Af ||
                e.$$typeof === zf ||
                e.$$typeof === Tf ||
                e.$$typeof === Rf ||
                e.$$typeof === Lf ||
                e.$$typeof === Bf ||
                e.$$typeof === Df ||
                e.$$typeof === Vf ||
                e.$$typeof === Mf))
          );
        }),
        (xf.typeOf = jf),
        (wf.exports = xf);
      var Ff = wf.exports,
        Uf = {
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
        Wf = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        qf = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        Qf = {};
      function Kf(e) {
        return Ff.isMemo(e) ? qf : Qf[e.$$typeof] || Uf;
      }
      (Qf[Ff.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (Qf[Ff.Memo] = qf);
      var Xf = Object.defineProperty,
        Yf = Object.getOwnPropertyNames,
        Gf = Object.getOwnPropertySymbols,
        Zf = Object.getOwnPropertyDescriptor,
        Jf = Object.getPrototypeOf,
        ep = Object.prototype,
        tp = function e(t, n, o) {
          if ('string' != typeof n) {
            if (ep) {
              var r = Jf(n);
              r && r !== ep && e(t, r, o);
            }
            var i = Yf(n);
            Gf && (i = i.concat(Gf(n)));
            for (var a = Kf(t), l = Kf(n), s = 0; s < i.length; ++s) {
              var c = i[s];
              if (!(Wf[c] || (o && o[c]) || (l && l[c]) || (a && a[c]))) {
                var u = Zf(n, c);
                try {
                  Xf(t, c, u);
                } catch (Sf) {}
              }
            }
          }
          return t;
        };
      const np = o(tp);
      var op = 1073741823,
        rp =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : {},
        ip =
          H.createContext ||
          function (e, t) {
            var n,
              o,
              r,
              i = '__create-react-context-' + (rp[(r = '__global_unique_id__')] = (rp[r] || 0) + 1) + '__',
              a = (function (e) {
                function n() {
                  for (var t, n, o, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                  return (
                    ((t = e.call.apply(e, [this].concat(i)) || this).emitter =
                      ((n = t.props.value),
                      (o = []),
                      {
                        on: function (e) {
                          o.push(e);
                        },
                        off: function (e) {
                          o = o.filter(function (t) {
                            return t !== e;
                          });
                        },
                        get: function () {
                          return n;
                        },
                        set: function (e, t) {
                          (n = e),
                            o.forEach(function (e) {
                              return e(n, t);
                            });
                        },
                      })),
                    t
                  );
                }
                dd(n, e);
                var o = n.prototype;
                return (
                  (o.getChildContext = function () {
                    var e;
                    return ((e = {})[i] = this.emitter), e;
                  }),
                  (o.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        o = this.props.value,
                        r = e.value;
                      !(function (e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                      })(o, r)
                        ? ((n = 'function' == typeof t ? t(o, r) : op), 0 != (n |= 0) && this.emitter.set(e.value, n))
                        : (n = 0);
                    }
                  }),
                  (o.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(H.Component);
            a.childContextTypes = (((n = {})[i] = md.object.isRequired), n);
            var l = (function (t) {
              function n() {
                for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (
                  ((e = t.call.apply(t, [this].concat(o)) || this).observedBits = void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              dd(n, t);
              var o = n.prototype;
              return (
                (o.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? op : t;
                }),
                (o.componentDidMount = function () {
                  this.context[i] && this.context[i].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? op : e;
                }),
                (o.componentWillUnmount = function () {
                  this.context[i] && this.context[i].off(this.onUpdate);
                }),
                (o.getValue = function () {
                  return this.context[i] ? this.context[i].get() : e;
                }),
                (o.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(H.Component);
            return (l.contextTypes = (((o = {})[i] = md.object), o)), { Provider: a, Consumer: l };
          },
        ap = function (e) {
          var t = ip();
          return (t.displayName = e), t;
        },
        lp = ap('Router-History'),
        sp = ap('Router'),
        cp = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = { location: t.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._pendingLocation = e;
                })),
              n
            );
          }
          dd(t, e),
            (t.computeRootMatch = function (e) {
              return { path: '/', url: '/', params: {}, isExact: '/' === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
              return H.createElement(
                sp.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                H.createElement(lp.Provider, { children: this.props.children || null, value: this.props.history })
              );
            }),
            t
          );
        })(H.Component);
      H.Component;
      var up = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          dd(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.props.onMount && this.props.onMount.call(this, this);
            }),
            (n.componentDidUpdate = function (e) {
              this.props.onUpdate && this.props.onUpdate.call(this, this, e);
            }),
            (n.componentWillUnmount = function () {
              this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (n.render = function () {
              return null;
            }),
            t
          );
        })(H.Component),
        dp = {},
        fp = 1e4,
        pp = 0;
      function hp(e, t) {
        return (
          void 0 === e && (e = '/'),
          void 0 === t && (t = {}),
          '/' === e
            ? e
            : (function (e) {
                if (dp[e]) return dp[e];
                var t = Xd.compile(e);
                return pp < fp && ((dp[e] = t), pp++), t;
              })(e)(t, { pretty: !0 })
        );
      }
      function mp(e) {
        var t = e.computedMatch,
          n = e.to,
          o = e.push,
          r = void 0 !== o && o;
        return H.createElement(sp.Consumer, null, function (e) {
          e || $d(!1);
          var o = e.history,
            i = e.staticContext,
            a = r ? o.push : o.replace,
            l = Td(
              t ? ('string' == typeof n ? hp(n, t.params) : gd({}, n, { pathname: hp(n.pathname, t.params) })) : n
            );
          return i
            ? (a(l), null)
            : H.createElement(up, {
                onMount: function () {
                  a(l);
                },
                onUpdate: function (e, t) {
                  var n = Td(t.to);
                  Rd(n, gd({}, l, { key: n.key })) || a(l);
                },
                to: n,
              });
        });
      }
      var gp = {},
        bp = 1e4,
        vp = 0;
      function yp(e, t) {
        void 0 === t && (t = {}), ('string' == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          o = n.path,
          r = n.exact,
          i = void 0 !== r && r,
          a = n.strict,
          l = void 0 !== a && a,
          s = n.sensitive,
          c = void 0 !== s && s;
        return [].concat(o).reduce(function (t, n) {
          if (!n && '' !== n) return null;
          if (t) return t;
          var o = (function (e, t) {
              var n = '' + t.end + t.strict + t.sensitive,
                o = gp[n] || (gp[n] = {});
              if (o[e]) return o[e];
              var r = [],
                i = { regexp: Xd(e, r, t), keys: r };
              return vp < bp && ((o[e] = i), vp++), i;
            })(n, { end: i, strict: l, sensitive: c }),
            r = o.regexp,
            a = o.keys,
            s = r.exec(e);
          if (!s) return null;
          var u = s[0],
            d = s.slice(1),
            f = e === u;
          return i && !f
            ? null
            : {
                path: n,
                url: '/' === n && '' === u ? '/' : u,
                isExact: f,
                params: a.reduce(function (e, t, n) {
                  return (e[t.name] = d[n]), e;
                }, {}),
              };
        }, null);
      }
      var wp = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          dd(t, e),
          (t.prototype.render = function () {
            var e = this;
            return H.createElement(sp.Consumer, null, function (t) {
              t || $d(!1);
              var n = e.props.location || t.location,
                o = gd({}, t, {
                  location: n,
                  match: e.props.computedMatch
                    ? e.props.computedMatch
                    : e.props.path
                    ? yp(n.pathname, e.props)
                    : t.match,
                }),
                r = e.props,
                i = r.children,
                a = r.component,
                l = r.render;
              return (
                Array.isArray(i) &&
                  (function (e) {
                    return 0 === H.Children.count(e);
                  })(i) &&
                  (i = null),
                H.createElement(
                  sp.Provider,
                  { value: o },
                  o.match
                    ? i
                      ? 'function' == typeof i
                        ? i(o)
                        : i
                      : a
                      ? H.createElement(a, o)
                      : l
                      ? l(o)
                      : null
                    : 'function' == typeof i
                    ? i(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(H.Component);
      H.Component, H.Component, H.useContext;
      const xp = function (e, t, n) {
          return e();
        },
        kp = !0,
        $p = !0,
        Ep = !0,
        Sp = !1,
        Cp = !1;
      let Pp,
        Tp,
        Rp,
        Ip = !1,
        Op = !1,
        Lp = !1,
        Np = !1,
        _p = null,
        zp = !1;
      const Ap = !0,
        Mp = 'http://www.w3.org/1999/xlink',
        Bp = {},
        Dp = (e) => 'object' == (e = typeof e) || 'function' === e,
        Vp = (e, t, ...n) => {
          let o = null,
            r = null,
            i = null,
            a = !1,
            l = !1;
          const s = [],
            c = (t) => {
              for (let n = 0; n < t.length; n++)
                (o = t[n]),
                  Array.isArray(o)
                    ? c(o)
                    : null != o &&
                      'boolean' != typeof o &&
                      ((a = 'function' != typeof e && !Dp(o)) && (o = String(o)),
                      a && l ? (s[s.length - 1].$text$ += o) : s.push(a ? jp(null, o) : o),
                      (l = a));
            };
          if ((c(n), t)) {
            t.key && (r = t.key), t.name && (i = t.name);
            {
              const e = t.className || t.class;
              e &&
                (t.class =
                  'object' != typeof e
                    ? e
                    : Object.keys(e)
                        .filter((t) => e[t])
                        .join(' '));
            }
          }
          if ('function' == typeof e) return e(null === t ? {} : t, s, Fp);
          const u = jp(e, null);
          return (u.$attrs$ = t), s.length > 0 && (u.$children$ = s), (u.$key$ = r), (u.$name$ = i), u;
        },
        jp = (e, t) => {
          const n = {
            $flags$: 0,
            $tag$: e,
            $text$: t,
            $elm$: null,
            $children$: null,
            $attrs$: null,
            $key$: null,
            $name$: null,
          };
          return n;
        },
        Hp = {},
        Fp = { forEach: (e, t) => e.map(Up).forEach(t), map: (e, t) => e.map(Up).map(t).map(Wp) },
        Up = (e) => ({
          vattrs: e.$attrs$,
          vchildren: e.$children$,
          vkey: e.$key$,
          vname: e.$name$,
          vtag: e.$tag$,
          vtext: e.$text$,
        }),
        Wp = (e) => {
          if ('function' == typeof e.vtag) {
            const t = Object.assign({}, e.vattrs);
            return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), Vp(e.vtag, t, ...(e.vchildren || []));
          }
          const t = jp(e.vtag, e.vtext);
          return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
        },
        qp = (e, t, n) => {
          const o = e;
          return {
            emit: (e) => Qp(o, t, { bubbles: !!(4 & n), composed: !!(2 & n), cancelable: !!(1 & n), detail: e }),
          };
        },
        Qp = (e, t, n) => {
          const o = Hh.ce(t, n);
          return e.dispatchEvent(o), o;
        },
        Kp = new WeakMap(),
        Xp = (e) => {
          const t = e.$cmpMeta$,
            n = e.$hostElement$,
            o = t.$flags$,
            r = (t.$tagName$, () => {}),
            i = ((e, t, n, o) => {
              var r;
              let i = Yp(t, n);
              const a = Mh.get(i);
              if (((e = 11 === e.nodeType ? e : Vh), a))
                if ('string' == typeof a) {
                  e = e.head || e;
                  let t,
                    n = Kp.get(e);
                  if ((n || Kp.set(e, (n = new Set())), !n.has(i))) {
                    {
                      (t = Vh.createElement('style')), (t.innerHTML = a);
                      const n =
                        null !== (r = Hh.$nonce$) && void 0 !== r
                          ? r
                          : (function (e) {
                              var t, n, o;
                              return null !==
                                (o =
                                  null ===
                                    (n =
                                      null === (t = e.head) || void 0 === t
                                        ? void 0
                                        : t.querySelector('meta[name="csp-nonce"]')) || void 0 === n
                                    ? void 0
                                    : n.getAttribute('content')) && void 0 !== o
                                ? o
                                : void 0;
                            })(Vh);
                      null != n && t.setAttribute('nonce', n), e.insertBefore(t, e.querySelector('link'));
                    }
                    n && n.add(i);
                  }
                } else e.adoptedStyleSheets.includes(a) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, a]);
              return i;
            })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
          10 & o && ((n['s-sc'] = i), n.classList.add(i + '-h'), 2 & o && n.classList.add(i + '-s')), r();
        },
        Yp = (e, t) => 'sc-' + (t && 32 & e.$flags$ ? e.$tagName$ + '-' + t : e.$tagName$),
        Gp = (e, t, n, o, r, i) => {
          if (n !== o) {
            let a = zh(e, t),
              l = t.toLowerCase();
            if ('class' === t) {
              const t = e.classList,
                r = Jp(n),
                i = Jp(o);
              t.remove(...r.filter((e) => e && !i.includes(e))), t.add(...i.filter((e) => e && !r.includes(e)));
            } else if ('style' === t) {
              for (const t in n)
                (o && null != o[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
              for (const t in o)
                (n && o[t] === n[t]) || (t.includes('-') ? e.style.setProperty(t, o[t]) : (e.style[t] = o[t]));
            } else if ('key' === t);
            else if ('ref' === t) o && o(e);
            else if (e.__lookupSetter__(t) || 'o' !== t[0] || 'n' !== t[1]) {
              const s = Dp(o);
              if ((a || (s && null !== o)) && !r)
                try {
                  if (e.tagName.includes('-')) e[t] = o;
                  else {
                    const r = null == o ? '' : o;
                    'list' === t ? (a = !1) : (null != n && e[t] == r) || (e[t] = r);
                  }
                } catch (Sf) {}
              let c = !1;
              l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
                null == o || !1 === o
                  ? (!1 === o && '' !== e.getAttribute(t)) || (c ? e.removeAttributeNS(Mp, t) : e.removeAttribute(t))
                  : (!a || 4 & i || r) &&
                    !s &&
                    ((o = !0 === o ? '' : o), c ? e.setAttributeNS(Mp, t, o) : e.setAttribute(t, o));
            } else
              (t = '-' === t[2] ? t.slice(3) : zh(Dh, l) ? l.slice(2) : l[2] + t.slice(3)),
                n && Hh.rel(e, t, n, !1),
                o && Hh.ael(e, t, o, !1);
          }
        },
        Zp = /\s/,
        Jp = (e) => (e ? e.split(Zp) : []),
        eh = (e, t, n, o) => {
          const r = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$,
            i = (e && e.$attrs$) || Bp,
            a = t.$attrs$ || Bp;
          for (o in i) o in a || Gp(r, o, i[o], void 0, n, t.$flags$);
          for (o in a) Gp(r, o, i[o], a[o], n, t.$flags$);
        },
        th = (e, t, n, o) => {
          const r = t.$children$[n];
          let i,
            a,
            l,
            s = 0;
          if (
            (Ip ||
              ((Lp = !0),
              'slot' === r.$tag$ && (Pp && o.classList.add(Pp + '-s'), (r.$flags$ |= r.$children$ ? 2 : 1))),
            null !== r.$text$)
          )
            i = r.$elm$ = Vh.createTextNode(r.$text$);
          else if (1 & r.$flags$) i = r.$elm$ = Vh.createTextNode('');
          else {
            if (
              (Np || (Np = 'svg' === r.$tag$),
              (i = r.$elm$ =
                Vh.createElementNS(
                  Np ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                  2 & r.$flags$ ? 'slot-fb' : r.$tag$
                )),
              Np && 'foreignObject' === r.$tag$ && (Np = !1),
              eh(null, r, Np),
              ((e) => null != e)(Pp) && i['s-si'] !== Pp && i.classList.add((i['s-si'] = Pp)),
              r.$children$)
            )
              for (s = 0; s < r.$children$.length; ++s) (a = th(e, r, s, i)), a && i.appendChild(a);
            'svg' === r.$tag$ ? (Np = !1) : 'foreignObject' === i.tagName && (Np = !0);
          }
          return (
            (i['s-hn'] = Rp),
            3 & r.$flags$ &&
              ((i['s-sr'] = !0),
              (i['s-cr'] = Tp),
              (i['s-sn'] = r.$name$ || ''),
              (l = e && e.$children$ && e.$children$[n]),
              l && l.$tag$ === r.$tag$ && e.$elm$ && nh(e.$elm$, !1)),
            i
          );
        },
        nh = (e, t) => {
          Hh.$flags$ |= 1;
          const n = e.childNodes;
          for (let o = n.length - 1; o >= 0; o--) {
            const e = n[o];
            e['s-hn'] !== Rp &&
              e['s-ol'] &&
              (lh(e).insertBefore(e, ah(e)), e['s-ol'].remove(), (e['s-ol'] = void 0), (Lp = !0)),
              t && nh(e, t);
          }
          Hh.$flags$ &= -2;
        },
        oh = (e, t, n, o, r, i) => {
          let a,
            l = (e['s-cr'] && e['s-cr'].parentNode) || e;
          for (l.shadowRoot && l.tagName === Rp && (l = l.shadowRoot); r <= i; ++r)
            o[r] && ((a = th(null, n, r, e)), a && ((o[r].$elm$ = a), l.insertBefore(a, ah(t))));
        },
        rh = (e, t, n) => {
          for (let o = t; o <= n; ++o) {
            const t = e[o];
            if (t) {
              const e = t.$elm$;
              ph(t), e && ((Op = !0), e['s-ol'] ? e['s-ol'].remove() : nh(e, !0), e.remove());
            }
          }
        },
        ih = (e, t) => e.$tag$ === t.$tag$ && ('slot' === e.$tag$ ? e.$name$ === t.$name$ : e.$key$ === t.$key$),
        ah = (e) => (e && e['s-ol']) || e,
        lh = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
        sh = (e, t) => {
          const n = (t.$elm$ = e.$elm$),
            o = e.$children$,
            r = t.$children$,
            i = t.$tag$,
            a = t.$text$;
          let l;
          null === a
            ? ((Np = 'svg' === i || ('foreignObject' !== i && Np)),
              'slot' === i || eh(e, t, Np),
              null !== o && null !== r
                ? ((e, t, n, o) => {
                    let r,
                      i,
                      a = 0,
                      l = 0,
                      s = 0,
                      c = 0,
                      u = t.length - 1,
                      d = t[0],
                      f = t[u],
                      p = o.length - 1,
                      h = o[0],
                      m = o[p];
                    for (; a <= u && l <= p; )
                      if (null == d) d = t[++a];
                      else if (null == f) f = t[--u];
                      else if (null == h) h = o[++l];
                      else if (null == m) m = o[--p];
                      else if (ih(d, h)) sh(d, h), (d = t[++a]), (h = o[++l]);
                      else if (ih(f, m)) sh(f, m), (f = t[--u]), (m = o[--p]);
                      else if (ih(d, m))
                        ('slot' !== d.$tag$ && 'slot' !== m.$tag$) || nh(d.$elm$.parentNode, !1),
                          sh(d, m),
                          e.insertBefore(d.$elm$, f.$elm$.nextSibling),
                          (d = t[++a]),
                          (m = o[--p]);
                      else if (ih(f, h))
                        ('slot' !== d.$tag$ && 'slot' !== m.$tag$) || nh(f.$elm$.parentNode, !1),
                          sh(f, h),
                          e.insertBefore(f.$elm$, d.$elm$),
                          (f = t[--u]),
                          (h = o[++l]);
                      else {
                        for (s = -1, c = a; c <= u; ++c)
                          if (t[c] && null !== t[c].$key$ && t[c].$key$ === h.$key$) {
                            s = c;
                            break;
                          }
                        s >= 0
                          ? ((i = t[s]),
                            i.$tag$ !== h.$tag$
                              ? (r = th(t && t[l], n, s, e))
                              : (sh(i, h), (t[s] = void 0), (r = i.$elm$)),
                            (h = o[++l]))
                          : ((r = th(t && t[l], n, l, e)), (h = o[++l])),
                          r && lh(d.$elm$).insertBefore(r, ah(d.$elm$));
                      }
                    a > u ? oh(e, null == o[p + 1] ? null : o[p + 1].$elm$, n, o, l, p) : l > p && rh(t, a, u);
                  })(n, o, t, r)
                : null !== r
                ? (null !== e.$text$ && (n.textContent = ''), oh(n, null, t, r, 0, r.length - 1))
                : null !== o && rh(o, 0, o.length - 1),
              Np && 'svg' === i && (Np = !1))
            : (l = n['s-cr'])
            ? (l.parentNode.textContent = a)
            : e.$text$ !== a && (n.data = a);
        },
        ch = (e) => {
          const t = e.childNodes;
          let n, o, r, i, a, l;
          for (o = 0, r = t.length; o < r; o++)
            if (((n = t[o]), 1 === n.nodeType)) {
              if (n['s-sr'])
                for (a = n['s-sn'], n.hidden = !1, i = 0; i < r; i++)
                  if (((l = t[i].nodeType), t[i]['s-hn'] !== n['s-hn'] || '' !== a)) {
                    if (1 === l && a === t[i].getAttribute('slot')) {
                      n.hidden = !0;
                      break;
                    }
                  } else if (1 === l || (3 === l && '' !== t[i].textContent.trim())) {
                    n.hidden = !0;
                    break;
                  }
              ch(n);
            }
        },
        uh = [],
        dh = (e) => {
          let t,
            n,
            o,
            r,
            i,
            a,
            l = 0;
          const s = e.childNodes,
            c = s.length;
          for (; l < c; l++) {
            if (((t = s[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
              for (o = n.parentNode.childNodes, r = t['s-sn'], a = o.length - 1; a >= 0; a--)
                (n = o[a]),
                  n['s-cn'] ||
                    n['s-nr'] ||
                    n['s-hn'] === t['s-hn'] ||
                    (fh(n, r)
                      ? ((i = uh.find((e) => e.$nodeToRelocate$ === n)),
                        (Op = !0),
                        (n['s-sn'] = n['s-sn'] || r),
                        i ? (i.$slotRefNode$ = t) : uh.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                        n['s-sr'] &&
                          uh.map((e) => {
                            fh(e.$nodeToRelocate$, n['s-sn']) &&
                              ((i = uh.find((e) => e.$nodeToRelocate$ === n)),
                              i && !e.$slotRefNode$ && (e.$slotRefNode$ = i.$slotRefNode$));
                          }))
                      : uh.some((e) => e.$nodeToRelocate$ === n) || uh.push({ $nodeToRelocate$: n }));
            1 === t.nodeType && dh(t);
          }
        },
        fh = (e, t) =>
          1 === e.nodeType
            ? (null === e.getAttribute('slot') && '' === t) || e.getAttribute('slot') === t
            : e['s-sn'] === t || '' === t,
        ph = (e) => {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(ph);
        },
        hh = (e, t) => {
          const n = e.$hostElement$,
            o = e.$cmpMeta$,
            r = e.$vnode$ || jp(null, null),
            i = (a = t) && a.$tag$ === Hp ? t : Vp(null, null, t);
          var a;
          if (
            ((Rp = n.tagName),
            o.$attrsToReflect$ &&
              ((i.$attrs$ = i.$attrs$ || {}), o.$attrsToReflect$.map(([e, t]) => (i.$attrs$[t] = n[e]))),
            (i.$tag$ = null),
            (i.$flags$ |= 4),
            (e.$vnode$ = i),
            (i.$elm$ = r.$elm$ = n.shadowRoot || n),
            (Pp = n['s-sc']),
            (Tp = n['s-cr']),
            (Ip = 0 != (1 & o.$flags$)),
            (Op = !1),
            sh(r, i),
            (Hh.$flags$ |= 1),
            Lp)
          ) {
            let e, t, n, o, r, a;
            dh(i.$elm$);
            let l = 0;
            for (; l < uh.length; l++)
              (e = uh[l]),
                (t = e.$nodeToRelocate$),
                t['s-ol'] ||
                  ((n = Vh.createTextNode('')), (n['s-nr'] = t), t.parentNode.insertBefore((t['s-ol'] = n), t));
            for (l = 0; l < uh.length; l++)
              if (((e = uh[l]), (t = e.$nodeToRelocate$), e.$slotRefNode$)) {
                for (
                  o = e.$slotRefNode$.parentNode, r = e.$slotRefNode$.nextSibling, n = t['s-ol'];
                  (n = n.previousSibling);

                )
                  if (
                    ((a = n['s-nr']),
                    a && a['s-sn'] === t['s-sn'] && o === a.parentNode && ((a = a.nextSibling), !a || !a['s-nr']))
                  ) {
                    r = a;
                    break;
                  }
                ((!r && o !== t.parentNode) || t.nextSibling !== r) &&
                  t !== r &&
                  (!t['s-hn'] && t['s-ol'] && (t['s-hn'] = t['s-ol'].parentNode.nodeName), o.insertBefore(t, r));
              } else 1 === t.nodeType && (t.hidden = !0);
          }
          Op && ch(i.$elm$), (Hh.$flags$ &= -2), (uh.length = 0);
        },
        mh = (e, t) => ((e.$flags$ |= 16), e.$ancestorComponent$, Zh(() => gh(e, t))),
        gh = (e, t) => {
          const n = e.$hostElement$,
            o = (e.$cmpMeta$.$tagName$, () => {}),
            r = n;
          let i;
          return (
            (i = kh(r, t ? 'componentWillLoad' : 'componentWillUpdate')),
            (i = bh(i, () => kh(r, 'componentWillRender'))),
            o(),
            bh(i, () => vh(e, r, t))
          );
        },
        bh = (e, t) => (e instanceof Promise ? e.then(t) : t()),
        vh = async (e, t, n) => {
          const o = e.$hostElement$,
            r = (e.$cmpMeta$.$tagName$, () => {});
          o['s-rc'], n && Xp(e);
          const i = (e.$cmpMeta$.$tagName$, () => {});
          yh(e, t, o), i(), r(), wh(e);
        },
        yh = (e, t, n) => {
          try {
            (_p = t),
              (t = t.render && t.render()),
              (e.$flags$ &= -17),
              (e.$flags$ |= 2),
              (kp || $p) && (Ep || $p) && (Sp || hh(e, t));
          } catch (Sf) {
            Ah(Sf, e.$hostElement$);
          }
          return (_p = null), null;
        },
        wh = (e) => {
          e.$cmpMeta$.$tagName$;
          const t = () => {},
            n = e.$hostElement$;
          e.$ancestorComponent$,
            kh(n, 'componentDidRender'),
            64 & e.$flags$ ? (kh(n, 'componentDidUpdate'), t()) : ((e.$flags$ |= 64), kh(n, 'componentDidLoad'), t());
        },
        xh = (e) => {
          {
            const t = Nh(e),
              n = t.$hostElement$.isConnected;
            return n && 2 == (18 & t.$flags$) && mh(t, !1), n;
          }
        },
        kh = (e, t, n) => {
          if (e && e[t])
            try {
              return e[t](n);
            } catch (Sf) {
              Ah(Sf);
            }
        },
        $h = (e, t, n, o) => {
          const r = Nh(e),
            i = e,
            a = r.$instanceValues$.get(t),
            l = r.$flags$,
            s = i;
          var c, u;
          (c = n),
            (u = o.$members$[t][0]),
            (n =
              null == c || Dp(c)
                ? c
                : 4 & u
                ? 'false' !== c && ('' === c || !!c)
                : 2 & u
                ? parseFloat(c)
                : 1 & u
                ? String(c)
                : c);
          const d = Number.isNaN(a) && Number.isNaN(n);
          if (n !== a && !d) {
            if ((r.$instanceValues$.set(t, n), o.$watchers$ && 128 & l)) {
              const e = o.$watchers$[t];
              e &&
                e.map((e) => {
                  try {
                    s[e](n, a, t);
                  } catch (Sf) {
                    Ah(Sf, i);
                  }
                });
            }
            if (2 == (18 & l)) {
              if (s.componentShouldUpdate && !1 === s.componentShouldUpdate(n, a, t)) return;
              mh(r, !1);
            }
          }
        },
        Eh = (e, t, n) => {
          if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            const n = Object.entries(t.$members$),
              o = e.prototype;
            n.map(([e, [n]]) => {
              (31 & n || 32 & n) &&
                Object.defineProperty(o, e, {
                  get() {
                    return (t = e), Nh(this).$instanceValues$.get(t);
                    var t;
                  },
                  set(n) {
                    $h(this, e, n, t);
                  },
                  configurable: !0,
                  enumerable: !0,
                });
            });
            {
              const r = new Map();
              (o.attributeChangedCallback = function (e, t, n) {
                Hh.jmp(() => {
                  const t = r.get(e);
                  if (this.hasOwnProperty(t)) (n = this[t]), delete this[t];
                  else if (o.hasOwnProperty(t) && 'number' == typeof this[t] && this[t] == n) return;
                  this[t] = (null !== n || 'boolean' != typeof this[t]) && n;
                });
              }),
                (e.observedAttributes = n
                  .filter(([e, t]) => 15 & t[0])
                  .map(([e, n]) => {
                    const o = n[1] || e;
                    return r.set(o, e), 512 & n[0] && t.$attrsToReflect$.push([e, o]), o;
                  }));
            }
          }
          return e;
        },
        Sh = async (e, t, n, o, r) => {
          if (
            0 == (32 & t.$flags$) &&
            ((t.$flags$ |= 32),
            (r = e.constructor),
            customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
            r.style)
          ) {
            let o = r.style;
            'string' != typeof o && (o = o[(t.$modeName$ = ((e) => Bh.map((t) => t(e)).find((e) => !!e))(e))]);
            const i = Yp(n, t.$modeName$);
            if (!Mh.has(i)) {
              const e = (n.$tagName$, () => {});
              ((e, t, n) => {
                let o = Mh.get(e);
                Uh && n ? ((o = o || new CSSStyleSheet()), 'string' == typeof o ? (o = t) : o.replaceSync(t)) : (o = t),
                  Mh.set(e, o);
              })(i, o, !!(1 & n.$flags$)),
                e();
            }
          }
          t.$ancestorComponent$, mh(t, !0);
        },
        Ch = (e) => {
          const t = (e['s-cr'] = Vh.createComment(''));
          (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
        },
        Ph = (e, t) => {
          const n = { $flags$: t[0], $tagName$: t[1] };
          (n.$members$ = t[2]), (n.$listeners$ = t[3]), (n.$watchers$ = e.$watchers$), (n.$attrsToReflect$ = []);
          const o = e.prototype.connectedCallback,
            r = e.prototype.disconnectedCallback;
          return (
            Object.assign(e.prototype, {
              __registerHost() {
                _h(this, n);
              },
              connectedCallback() {
                ((e) => {
                  if (0 == (1 & Hh.$flags$)) {
                    const t = Nh(e),
                      n = t.$cmpMeta$,
                      o = (n.$tagName$, () => {});
                    1 & t.$flags$
                      ? (Th(e, t, n.$listeners$), t.$lazyInstance$)
                      : ((t.$flags$ |= 1),
                        12 & n.$flags$ && Ch(e),
                        n.$members$ &&
                          Object.entries(n.$members$).map(([t, [n]]) => {
                            if (31 & n && e.hasOwnProperty(t)) {
                              const n = e[t];
                              delete e[t], (e[t] = n);
                            }
                          }),
                        Sh(e, t, n)),
                      o();
                  }
                })(this),
                  o && o.call(this);
              },
              disconnectedCallback() {
                ((e) => {
                  if (0 == (1 & Hh.$flags$)) {
                    const t = Nh(e);
                    t.$rmListeners$ && (t.$rmListeners$.map((e) => e()), (t.$rmListeners$ = void 0));
                  }
                })(this),
                  r && r.call(this);
              },
              __attachShadow() {
                this.attachShadow({ mode: 'open', delegatesFocus: !!(16 & n.$flags$) });
              },
            }),
            (e.is = n.$tagName$),
            Eh(e, n)
          );
        },
        Th = (e, t, n, o) => {
          n &&
            n.map(([n, o, r]) => {
              const i = Ih(e, n),
                a = Rh(t, r),
                l = Oh(n);
              Hh.ael(i, o, a, l), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => Hh.rel(i, o, a, l));
            });
        },
        Rh = (e, t) => (n) => {
          try {
            Cp || e.$hostElement$[t](n);
          } catch (Sf) {
            Ah(Sf);
          }
        },
        Ih = (e, t) => (4 & t ? Vh : 8 & t ? Dh : 16 & t ? Vh.body : e),
        Oh = (e) => (Fh ? { passive: 0 != (1 & e), capture: 0 != (2 & e) } : 0 != (2 & e)),
        Lh = new WeakMap(),
        Nh = (e) => Lh.get(e),
        _h = (e, t) => {
          const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
          return Th(e, n, t.$listeners$), Lh.set(e, n);
        },
        zh = (e, t) => t in e,
        Ah = (e, t) => (0, console.error)(e, t),
        Mh = new Map(),
        Bh = [],
        Dh = 'undefined' != typeof window ? window : {},
        Vh = Dh.document || { head: {} },
        jh = Dh.HTMLElement || class {},
        Hh = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (e) => e(),
          raf: (e) => requestAnimationFrame(e),
          ael: (e, t, n, o) => e.addEventListener(t, n, o),
          rel: (e, t, n, o) => e.removeEventListener(t, n, o),
          ce: (e, t) => new CustomEvent(e, t),
        },
        Fh = (() => {
          let e = !1;
          try {
            Vh.addEventListener(
              'e',
              null,
              Object.defineProperty({}, 'passive', {
                get() {
                  e = !0;
                },
              })
            );
          } catch (Sf) {}
          return e;
        })(),
        Uh = (() => {
          try {
            return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
          } catch (Sf) {}
          return !1;
        })(),
        Wh = [],
        qh = [],
        Qh = (e, t) => (n) => {
          e.push(n), zp || ((zp = !0), t && 4 & Hh.$flags$ ? Yh(Xh) : Hh.raf(Xh));
        },
        Kh = (e) => {
          for (let t = 0; t < e.length; t++)
            try {
              e[t](performance.now());
            } catch (Sf) {
              Ah(Sf);
            }
          e.length = 0;
        },
        Xh = () => {
          Kh(Wh), Kh(qh), (zp = Wh.length > 0) && Hh.raf(Xh);
        },
        Yh = (e) => ((e) => Promise.resolve(e))().then(e),
        Gh = e('r', Qh(Wh, !1)),
        Zh = e('w', Qh(qh, !0)),
        Jh = 'undefined' != typeof window ? window : void 0,
        em = 'undefined' != typeof document ? document : void 0,
        tm = e('a', (e, t) => {
          e.componentOnReady ? e.componentOnReady().then((e) => t(e)) : rm(() => t(e));
        }),
        nm = (e, t = []) => {
          const n = {};
          return (
            t.forEach((t) => {
              e.hasAttribute(t) && (null !== e.getAttribute(t) && (n[t] = e.getAttribute(t)), e.removeAttribute(t));
            }),
            n
          );
        },
        om = [
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
        rm =
          (e('b', (e, t, n, o) => {
            var r;
            if ('undefined' != typeof window) {
              const i = window,
                a = null === (r = null == i ? void 0 : i.Ionic) || void 0 === r ? void 0 : r.config;
              if (a) {
                const r = a.get('_ael');
                if (r) return r(e, t, n, o);
                if (a._ael) return a._ael(e, t, n, o);
              }
            }
            return e.addEventListener(t, n, o);
          }),
          e('d', (e, t, n, o) => {
            var r;
            if ('undefined' != typeof window) {
              const i = window,
                a = null === (r = null == i ? void 0 : i.Ionic) || void 0 === r ? void 0 : r.config;
              if (a) {
                const r = a.get('_rel');
                if (r) return r(e, t, n, o);
                if (a._rel) return a._rel(e, t, n, o);
              }
            }
            return e.removeEventListener(t, n, o);
          }),
          e('g', (e) =>
            'function' == typeof __zone_symbol__requestAnimationFrame
              ? __zone_symbol__requestAnimationFrame(e)
              : 'function' == typeof requestAnimationFrame
              ? requestAnimationFrame(e)
              : setTimeout(e)
          )),
        im = e('c', (e, t, n) => Math.max(e, Math.min(t, n))),
        am = (e, t) => {
          if (!e) {
            const e = 'ASSERT: ' + t;
            throw (console.error(e), new Error(e));
          }
        },
        lm =
          (e('n', (e) => e.timeStamp || Date.now()),
          e('p', (e) => {
            if (e) {
              const t = e.changedTouches;
              if (t && t.length > 0) {
                const e = t[0];
                return { x: e.clientX, y: e.clientY };
              }
              if (void 0 !== e.pageX) return { x: e.pageX, y: e.pageY };
            }
            return { x: 0, y: 0 };
          }),
          (e, t) => {
            if ((null != e || (e = {}), null != t || (t = {}), e === t)) return !0;
            const n = Object.keys(e);
            if (n.length !== Object.keys(t).length) return !1;
            for (const o of n) {
              if (!(o in t)) return !1;
              if (e[o] !== t[o]) return !1;
            }
            return !0;
          });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      let sm;
      const cm = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        um = (e) => {
          if (void 0 === sm) {
            const t = void 0 !== e.style.animationName,
              n = void 0 !== e.style.webkitAnimationName;
            sm = !t && n ? '-webkit-' : '';
          }
          return sm;
        },
        dm = (e, t, n) => {
          const o = t.startsWith('animation') ? um(e) : '';
          e.style.setProperty(o + t, n);
        },
        fm = (e, t) => {
          const n = t.startsWith('animation') ? um(e) : '';
          e.style.removeProperty(n + t);
        },
        pm = [],
        hm = (e = [], t) => {
          if (void 0 !== t) {
            const n = Array.isArray(t) ? t : [t];
            return [...e, ...n];
          }
          return e;
        },
        mm =
          (e('k', (e) => {
            let t,
              n,
              o,
              r,
              i,
              a,
              l,
              s,
              c,
              u,
              d,
              f,
              p,
              h = [],
              m = [],
              g = [],
              b = !1,
              v = {},
              y = [],
              w = [],
              x = {},
              k = 0,
              $ = !1,
              E = !1,
              S = !0,
              C = !1,
              P = !0,
              T = !1;
            const R = e,
              I = [],
              O = [],
              L = [],
              N = [],
              _ = [],
              z = [],
              A = [],
              M = [],
              B = [],
              D = [],
              V = 'function' == typeof AnimationEffect || (void 0 !== Jh && 'function' == typeof Jh.AnimationEffect),
              j = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && V,
              H = () => D,
              F = (e) => {
                q(), e && Q();
              },
              U = (e, t) => (((null == t ? void 0 : t.oneTimeCallback) ? O : I).push({ c: e, o: t }), p),
              W = () => ((I.length = 0), (O.length = 0), p),
              q = () => {
                if (j)
                  D.forEach((e) => {
                    e.cancel();
                  }),
                    (D.length = 0);
                else {
                  const e = L.slice();
                  rm(() => {
                    e.forEach((e) => {
                      fm(e, 'animation-name'),
                        fm(e, 'animation-duration'),
                        fm(e, 'animation-timing-function'),
                        fm(e, 'animation-iteration-count'),
                        fm(e, 'animation-delay'),
                        fm(e, 'animation-play-state'),
                        fm(e, 'animation-fill-mode'),
                        fm(e, 'animation-direction');
                    });
                  });
                }
              },
              Q = () => {
                _.forEach((e) => {
                  (null == e ? void 0 : e.parentNode) && e.parentNode.removeChild(e);
                }),
                  (_.length = 0);
              },
              K = () => (void 0 !== i ? i : l ? l.getFill() : 'both'),
              X = () => (void 0 !== c ? c : void 0 !== a ? a : l ? l.getDirection() : 'normal'),
              Y = () => ($ ? 'linear' : void 0 !== o ? o : l ? l.getEasing() : 'linear'),
              G = () => (E ? 0 : void 0 !== u ? u : void 0 !== n ? n : l ? l.getDuration() : 0),
              Z = () => (void 0 !== r ? r : l ? l.getIterations() : 1),
              J = () => (void 0 !== d ? d : void 0 !== t ? t : l ? l.getDelay() : 0),
              ee = (e) => {
                j
                  ? H().forEach((t) => {
                      if (t.effect.setKeyframes) t.effect.setKeyframes(e);
                      else {
                        const n = new KeyframeEffect(t.effect.target, e, t.effect.getTiming());
                        t.effect = n;
                      }
                    })
                  : ne();
              },
              te = () => {
                0 !== k &&
                  (k--,
                  0 === k &&
                    ((() => {
                      ue(), M.forEach((e) => e()), B.forEach((e) => e());
                      const e = S ? 1 : 0,
                        t = y,
                        n = w,
                        o = x;
                      L.forEach((e) => {
                        const r = e.classList;
                        t.forEach((e) => r.add(e)), n.forEach((e) => r.remove(e));
                        for (const t in o) o.hasOwnProperty(t) && dm(e, t, o[t]);
                      }),
                        I.forEach((t) => t.c(e, p)),
                        O.forEach((t) => t.c(e, p)),
                        (O.length = 0),
                        (P = !0),
                        S && (C = !0),
                        (S = !0);
                    })(),
                    l && l.animationFinish()));
              },
              ne = (t = !0) => {
                Q();
                const n = ((e) => (
                  e.forEach((e) => {
                    for (const t in e)
                      if (e.hasOwnProperty(t)) {
                        const n = e[t];
                        if ('easing' === t) (e['animation-timing-function'] = n), delete e[t];
                        else {
                          const o = cm(t);
                          o !== t && ((e[o] = n), delete e[t]);
                        }
                      }
                  }),
                  e
                ))(h);
                L.forEach((o) => {
                  if (n.length > 0) {
                    const r = ((e = []) =>
                      e
                        .map((e) => {
                          const t = e.offset,
                            n = [];
                          for (const o in e) e.hasOwnProperty(o) && 'offset' !== o && n.push(`${o}: ${e[o]};`);
                          return `${100 * t}% { ${n.join(' ')} }`;
                        })
                        .join(' '))(n);
                    f =
                      void 0 !== e
                        ? e
                        : ((e) => {
                            let t = pm.indexOf(e);
                            return t < 0 && (t = pm.push(e) - 1), `ion-animation-${t}`;
                          })(r);
                    const i = ((e, t, n) => {
                      var o;
                      const r = ((e) => {
                          const t = void 0 !== e.getRootNode ? e.getRootNode() : e;
                          return t.head || t;
                        })(n),
                        i = um(n),
                        a = r.querySelector('#' + e);
                      if (a) return a;
                      const l = (null !== (o = n.ownerDocument) && void 0 !== o ? o : document).createElement('style');
                      return (
                        (l.id = e),
                        (l.textContent = `@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`),
                        r.appendChild(l),
                        l
                      );
                    })(f, r, o);
                    _.push(i),
                      dm(o, 'animation-duration', `${G()}ms`),
                      dm(o, 'animation-timing-function', Y()),
                      dm(o, 'animation-delay', `${J()}ms`),
                      dm(o, 'animation-fill-mode', K()),
                      dm(o, 'animation-direction', X());
                    const a = Z() === 1 / 0 ? 'infinite' : Z().toString();
                    dm(o, 'animation-iteration-count', a),
                      dm(o, 'animation-play-state', 'paused'),
                      t && dm(o, 'animation-name', `${i.id}-alt`),
                      rm(() => {
                        dm(o, 'animation-name', i.id || null);
                      });
                  }
                });
              },
              oe = (e = !0) => {
                (() => {
                  z.forEach((e) => e()), A.forEach((e) => e());
                  const e = m,
                    t = g,
                    n = v;
                  L.forEach((o) => {
                    const r = o.classList;
                    e.forEach((e) => r.add(e)), t.forEach((e) => r.remove(e));
                    for (const e in n) n.hasOwnProperty(e) && dm(o, e, n[e]);
                  });
                })(),
                  h.length > 0 &&
                    (j
                      ? (L.forEach((e) => {
                          const t = e.animate(h, {
                            id: R,
                            delay: J(),
                            duration: G(),
                            easing: Y(),
                            iterations: Z(),
                            fill: K(),
                            direction: X(),
                          });
                          t.pause(), D.push(t);
                        }),
                        D.length > 0 &&
                          (D[0].onfinish = () => {
                            te();
                          }))
                      : ne(e)),
                  (b = !0);
              },
              re = (e) => {
                if (((e = Math.min(Math.max(e, 0), 0.9999)), j))
                  D.forEach((t) => {
                    (t.currentTime = t.effect.getComputedTiming().delay + G() * e), t.pause();
                  });
                else {
                  const t = `-${G() * e}ms`;
                  L.forEach((e) => {
                    h.length > 0 && (dm(e, 'animation-delay', t), dm(e, 'animation-play-state', 'paused'));
                  });
                }
              },
              ie = (e) => {
                D.forEach((e) => {
                  e.effect.updateTiming({
                    delay: J(),
                    duration: G(),
                    easing: Y(),
                    iterations: Z(),
                    fill: K(),
                    direction: X(),
                  });
                }),
                  void 0 !== e && re(e);
              },
              ae = (e = !0, t) => {
                rm(() => {
                  L.forEach((n) => {
                    dm(n, 'animation-name', f || null),
                      dm(n, 'animation-duration', `${G()}ms`),
                      dm(n, 'animation-timing-function', Y()),
                      dm(n, 'animation-delay', void 0 !== t ? `-${t * G()}ms` : `${J()}ms`),
                      dm(n, 'animation-fill-mode', K() || null),
                      dm(n, 'animation-direction', X() || null);
                    const o = Z() === 1 / 0 ? 'infinite' : Z().toString();
                    dm(n, 'animation-iteration-count', o),
                      e && dm(n, 'animation-name', `${f}-alt`),
                      rm(() => {
                        dm(n, 'animation-name', f || null);
                      });
                  });
                });
              },
              le = (e = !1, t = !0, n) => (
                e &&
                  N.forEach((o) => {
                    o.update(e, t, n);
                  }),
                j ? ie(n) : ae(t, n),
                p
              ),
              se = () => {
                b &&
                  (j
                    ? D.forEach((e) => {
                        e.pause();
                      })
                    : L.forEach((e) => {
                        dm(e, 'animation-play-state', 'paused');
                      }),
                  (T = !0));
              },
              ce = () => {
                (s = void 0), te();
              },
              ue = () => {
                s && clearTimeout(s);
              },
              de = () => {
                L.forEach((e) => {
                  fm(e, 'animation-duration'), fm(e, 'animation-delay'), fm(e, 'animation-play-state');
                });
              },
              fe = (e) =>
                new Promise((t) => {
                  (null == e ? void 0 : e.sync) && ((E = !0), U(() => (E = !1), { oneTimeCallback: !0 })),
                    b || oe(),
                    C && (j ? (re(0), ie()) : ae(), (C = !1)),
                    P && ((k = N.length + 1), (P = !1)),
                    U(() => t(), { oneTimeCallback: !0 }),
                    N.forEach((e) => {
                      e.play();
                    }),
                    j
                      ? (D.forEach((e) => {
                          e.play();
                        }),
                        (0 !== h.length && 0 !== L.length) || te())
                      : (() => {
                          if (
                            (ue(),
                            rm(() => {
                              L.forEach((e) => {
                                h.length > 0 && dm(e, 'animation-play-state', 'running');
                              });
                            }),
                            0 === h.length || 0 === L.length)
                          )
                            te();
                          else {
                            const e = J() || 0,
                              t = G() || 0,
                              n = Z() || 1;
                            isFinite(n) && (s = setTimeout(ce, e + t * n + 100)),
                              ((e, t) => {
                                let n;
                                const o = { passive: !0 },
                                  r = () => {
                                    n && n();
                                  },
                                  i = (n) => {
                                    e === n.target && (r(), t(n));
                                  };
                                e &&
                                  (e.addEventListener('webkitAnimationEnd', i, o),
                                  e.addEventListener('animationend', i, o),
                                  (n = () => {
                                    e.removeEventListener('webkitAnimationEnd', i, o),
                                      e.removeEventListener('animationend', i, o);
                                  }));
                              })(L[0], () => {
                                ue(),
                                  rm(() => {
                                    de(), rm(te);
                                  });
                              });
                          }
                        })(),
                    (T = !1);
                }),
              pe = (e, t) => {
                const n = h[0];
                return (
                  void 0 === n || (void 0 !== n.offset && 0 !== n.offset)
                    ? (h = [{ offset: 0, [e]: t }, ...h])
                    : (n[e] = t),
                  p
                );
              };
            return (p = {
              parentAnimation: l,
              elements: L,
              childAnimations: N,
              id: R,
              animationFinish: te,
              from: pe,
              to: (e, t) => {
                const n = h[h.length - 1];
                return (
                  void 0 === n || (void 0 !== n.offset && 1 !== n.offset)
                    ? (h = [...h, { offset: 1, [e]: t }])
                    : (n[e] = t),
                  p
                );
              },
              fromTo: (e, t, n) => pe(e, t).to(e, n),
              parent: (e) => ((l = e), p),
              play: fe,
              pause: () => (
                N.forEach((e) => {
                  e.pause();
                }),
                se(),
                p
              ),
              stop: () => {
                N.forEach((e) => {
                  e.stop();
                }),
                  b && (q(), (b = !1)),
                  ($ = !1),
                  (E = !1),
                  (P = !0),
                  (c = void 0),
                  (u = void 0),
                  (d = void 0),
                  (k = 0),
                  (C = !1),
                  (S = !0),
                  (T = !1);
              },
              destroy: (e) => (
                N.forEach((t) => {
                  t.destroy(e);
                }),
                F(e),
                (L.length = 0),
                (N.length = 0),
                (h.length = 0),
                W(),
                (b = !1),
                (P = !0),
                p
              ),
              keyframes: (e) => {
                const t = h !== e;
                return (h = e), t && ee(h), p;
              },
              addAnimation: (e) => {
                if (null != e)
                  if (Array.isArray(e)) for (const t of e) t.parent(p), N.push(t);
                  else e.parent(p), N.push(e);
                return p;
              },
              addElement: (e) => {
                if (null != e)
                  if (1 === e.nodeType) L.push(e);
                  else if (e.length >= 0) for (let t = 0; t < e.length; t++) L.push(e[t]);
                  else console.error('Invalid addElement value');
                return p;
              },
              update: le,
              fill: (e) => ((i = e), le(!0), p),
              direction: (e) => ((a = e), le(!0), p),
              iterations: (e) => ((r = e), le(!0), p),
              duration: (e) => (j || 0 !== e || (e = 1), (n = e), le(!0), p),
              easing: (e) => ((o = e), le(!0), p),
              delay: (e) => ((t = e), le(!0), p),
              getWebAnimations: H,
              getKeyframes: () => h,
              getFill: K,
              getDirection: X,
              getDelay: J,
              getIterations: Z,
              getEasing: Y,
              getDuration: G,
              afterAddRead: (e) => (M.push(e), p),
              afterAddWrite: (e) => (B.push(e), p),
              afterClearStyles: (e = []) => {
                for (const t of e) x[t] = '';
                return p;
              },
              afterStyles: (e = {}) => ((x = e), p),
              afterRemoveClass: (e) => ((w = hm(w, e)), p),
              afterAddClass: (e) => ((y = hm(y, e)), p),
              beforeAddRead: (e) => (z.push(e), p),
              beforeAddWrite: (e) => (A.push(e), p),
              beforeClearStyles: (e = []) => {
                for (const t of e) v[t] = '';
                return p;
              },
              beforeStyles: (e = {}) => ((v = e), p),
              beforeRemoveClass: (e) => ((g = hm(g, e)), p),
              beforeAddClass: (e) => ((m = hm(m, e)), p),
              onFinish: U,
              isRunning: () => 0 !== k && !T,
              progressStart: (e = !1, t) => (
                N.forEach((n) => {
                  n.progressStart(e, t);
                }),
                se(),
                ($ = e),
                b || oe(),
                le(!1, !0, t),
                p
              ),
              progressStep: (e) => (
                N.forEach((t) => {
                  t.progressStep(e);
                }),
                re(e),
                p
              ),
              progressEnd: (e, t, n) => (
                ($ = !1),
                N.forEach((o) => {
                  o.progressEnd(e, t, n);
                }),
                void 0 !== n && (u = n),
                (C = !1),
                (S = !0),
                0 === e
                  ? ((c = 'reverse' === X() ? 'normal' : 'reverse'),
                    'reverse' === c && (S = !1),
                    j ? (le(), re(1 - t)) : ((d = (1 - t) * G() * -1), le(!1, !1)))
                  : 1 === e && (j ? (le(), re(t)) : ((d = t * G() * -1), le(!1, !1))),
                void 0 !== e &&
                  (U(
                    () => {
                      (u = void 0), (c = void 0), (d = void 0);
                    },
                    { oneTimeCallback: !0 }
                  ),
                  l || fe()),
                p
              ),
            });
          }),
          'ionViewWillLeave'),
        gm = 'ionViewDidLeave',
        bm = 'ionViewWillUnload',
        vm = (e) =>
          new Promise((t, n) => {
            Zh(() => {
              ym(e),
                wm(e).then(
                  (n) => {
                    n.animation && n.animation.destroy(), xm(e), t(n);
                  },
                  (t) => {
                    xm(e), n(t);
                  }
                );
            });
          }),
        ym = (e) => {
          const t = e.enteringEl,
            n = e.leavingEl;
          Nm(t, n, e.direction),
            e.showGoBack ? t.classList.add('can-go-back') : t.classList.remove('can-go-back'),
            Lm(t, !1),
            t.style.setProperty('pointer-events', 'none'),
            n && (Lm(n, !1), n.style.setProperty('pointer-events', 'none'));
        },
        wm = async (e) => {
          const t = await km(e);
          return t && Ap ? $m(t, e) : Em(e);
        },
        xm = (e) => {
          const t = e.enteringEl,
            n = e.leavingEl;
          t.classList.remove('ion-page-invisible'),
            t.style.removeProperty('pointer-events'),
            void 0 !== n && (n.classList.remove('ion-page-invisible'), n.style.removeProperty('pointer-events'));
        },
        km = async (e) => {
          if (e.leavingEl && e.animated && 0 !== e.duration)
            return e.animationBuilder
              ? e.animationBuilder
              : 'ios' === e.mode
              ? (await xp(() => t.import('./ios.transition-legacy-24737ad4.js'))).iosTransitionAnimation
              : (await xp(() => t.import('./md.transition-legacy-04f76dfe.js'))).mdTransitionAnimation;
        },
        $m = async (e, t) => {
          await Sm(t, !0);
          const n = e(t.baseEl, t);
          Tm(t.enteringEl, t.leavingEl);
          const o = await Pm(n, t);
          return (
            t.progressCallback && t.progressCallback(void 0),
            o && Rm(t.enteringEl, t.leavingEl),
            { hasCompleted: o, animation: n }
          );
        },
        Em = async (e) => {
          const t = e.enteringEl,
            n = e.leavingEl;
          return await Sm(e, !1), Tm(t, n), Rm(t, n), { hasCompleted: !0 };
        },
        Sm = async (e, t) => {
          (void 0 !== e.deepWait ? e.deepWait : t) && (await Promise.all([Om(e.enteringEl), Om(e.leavingEl)])),
            await Cm(e.viewIsReady, e.enteringEl);
        },
        Cm = async (e, t) => {
          e && (await e(t));
        },
        Pm = (e, t) => {
          const n = t.progressCallback,
            o = new Promise((t) => {
              e.onFinish((e) => t(1 === e));
            });
          return n ? (e.progressStart(!0), n(e)) : e.play(), o;
        },
        Tm = (e, t) => {
          Im(t, mm), Im(e, 'ionViewWillEnter');
        },
        Rm = (e, t) => {
          Im(e, 'ionViewDidEnter'), Im(t, gm);
        },
        Im = (e, t) => {
          if (e) {
            const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
            e.dispatchEvent(n);
          }
        },
        Om = async (e) => {
          const t = e;
          if (t) {
            if (null != t.componentOnReady) {
              if (null != (await t.componentOnReady())) return;
            } else if (null != t.__registerHost) {
              const e = new Promise((e) => rm(e));
              return void (await e);
            }
            await Promise.all(Array.from(t.children).map(Om));
          }
        },
        Lm = (e, t) => {
          t
            ? (e.setAttribute('aria-hidden', 'true'), e.classList.add('ion-page-hidden'))
            : ((e.hidden = !1), e.removeAttribute('aria-hidden'), e.classList.remove('ion-page-hidden'));
        },
        Nm = (e, t, n) => {
          void 0 !== e && (e.style.zIndex = 'back' === n ? '99' : '101'), void 0 !== t && (t.style.zIndex = '100');
        },
        _m =
          (e('l', (e) => {
            if (e.classList.contains('ion-page')) return e;
            const t = e.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
            return t || e;
          }),
          (e, t, n, o, r) => Am(e[1], t[1], n[1], o[1], r).map((r) => zm(e[0], t[0], n[0], o[0], r))),
        zm = (e, t, n, o, r) =>
          r * (3 * t * Math.pow(r - 1, 2) + r * (-3 * n * r + 3 * n + o * r)) - e * Math.pow(r - 1, 3),
        Am = (e, t, n, o, r) =>
          Mm((o -= r) - 3 * (n -= r) + 3 * (t -= r) - (e -= r), 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter(
            (e) => e >= 0 && e <= 1
          ),
        Mm = (e, t, n, o) => {
          if (0 === e)
            return ((e, t, n) => {
              const o = t * t - 4 * e * n;
              return o < 0 ? [] : [(-t + Math.sqrt(o)) / (2 * e), (-t - Math.sqrt(o)) / (2 * e)];
            })(t, n, o);
          const r = (3 * (n /= e) - (t /= e) * t) / 3,
            i = (2 * t * t * t - 9 * t * n + 27 * (o /= e)) / 27;
          if (0 === r) return [Math.pow(-i, 1 / 3)];
          if (0 === i) return [Math.sqrt(-r), -Math.sqrt(-r)];
          const a = Math.pow(i / 2, 2) + Math.pow(r / 3, 3);
          if (0 === a) return [Math.pow(i / 2, 0.5) - t / 3];
          if (a > 0) return [Math.pow(-i / 2 + Math.sqrt(a), 1 / 3) - Math.pow(i / 2 + Math.sqrt(a), 1 / 3) - t / 3];
          const l = Math.sqrt(Math.pow(-r / 3, 3)),
            s = Math.acos(-i / (2 * Math.sqrt(Math.pow(-r / 3, 3)))),
            c = 2 * Math.pow(l, 1 / 3);
          return [
            c * Math.cos(s / 3) - t / 3,
            c * Math.cos((s + 2 * Math.PI) / 3) - t / 3,
            c * Math.cos((s + 4 * Math.PI) / 3) - t / 3,
          ];
        };
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      class Bm {
        constructor() {
          this.m = new Map();
        }
        reset(e) {
          this.m = new Map(Object.entries(e));
        }
        get(e, t) {
          const n = this.m.get(e);
          return void 0 !== n ? n : t;
        }
        getBoolean(e, t = !1) {
          const n = this.m.get(e);
          return void 0 === n ? t : 'string' == typeof n ? 'true' === n : !!n;
        }
        getNumber(e, t) {
          const n = parseFloat(this.m.get(e));
          return isNaN(n) ? (void 0 !== t ? t : NaN) : n;
        }
        set(e, t) {
          this.m.set(e, t);
        }
      }
      const Dm = new Bm(),
        Vm = (e, t) => e.substr(0, t.length) === t,
        jm = 'ionic:',
        Hm = 'ionic-persist-config',
        Fm = (e, t) => ('string' == typeof e && ((t = e), (e = void 0)), ((e) => Um(e))(e).includes(t)),
        Um = (e = window) => {
          if (void 0 === e) return [];
          e.Ionic = e.Ionic || {};
          let t = e.Ionic.platforms;
          return (
            null == t &&
              ((t = e.Ionic.platforms = Wm(e)), t.forEach((t) => e.document.documentElement.classList.add(`plt-${t}`))),
            t
          );
        },
        Wm = (e) => {
          const t = Dm.get('platform');
          return Object.keys(eg).filter((n) => {
            const o = null == t ? void 0 : t[n];
            return 'function' == typeof o ? o(e) : eg[n](e);
          });
        },
        qm = (e) => !!Zm(e, /iPad/i) || !(!Zm(e, /Macintosh/i) || !Km(e)),
        Qm = (e) => Zm(e, /android|sink/i),
        Km = (e) => Jm(e, '(any-pointer:coarse)'),
        Xm = (e) => Ym(e) || Gm(e),
        Ym = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
        Gm = (e) => {
          const t = e.Capacitor;
          return !!(null == t ? void 0 : t.isNative);
        },
        Zm = (e, t) => t.test(e.navigator.userAgent),
        Jm = (e, t) => {
          var n;
          return null === (n = e.matchMedia) || void 0 === n ? void 0 : n.call(e, t).matches;
        },
        eg = {
          ipad: qm,
          iphone: (e) => Zm(e, /iPhone/i),
          ios: (e) => Zm(e, /iPhone|iPod/i) || qm(e),
          android: Qm,
          phablet: (e) => {
            const t = e.innerWidth,
              n = e.innerHeight,
              o = Math.min(t, n),
              r = Math.max(t, n);
            return o > 390 && o < 520 && r > 620 && r < 800;
          },
          tablet: (e) => {
            const t = e.innerWidth,
              n = e.innerHeight,
              o = Math.min(t, n),
              r = Math.max(t, n);
            return qm(e) || ((e) => Qm(e) && !Zm(e, /mobile/i))(e) || (o > 460 && o < 820 && r > 780 && r < 1400);
          },
          cordova: Ym,
          capacitor: Gm,
          electron: (e) => Zm(e, /electron/i),
          pwa: (e) => {
            var t;
            return !(
              !(null === (t = e.matchMedia) || void 0 === t
                ? void 0
                : t.call(e, '(display-mode: standalone)').matches) && !e.navigator.standalone
            );
          },
          mobile: Km,
          mobileweb: (e) => Km(e) && !Xm(e),
          desktop: (e) => !Km(e),
          hybrid: Xm,
        };
      let tg;
      const ng = (e) => (e && ((e) => Nh(e).$modeName$)(e)) || tg,
        og = (e = {}) => {
          if ('undefined' == typeof window) return;
          const t = window.document,
            n = window,
            o = (n.Ionic = n.Ionic || {}),
            r = {};
          var i;
          e._ael && (r.ael = e._ael),
            e._rel && (r.rel = e._rel),
            e._ce && (r.ce = e._ce),
            (i = r),
            Object.assign(Hh, i);
          const a = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((e) => {
                      try {
                        const t = e.sessionStorage.getItem(Hm);
                        return null !== t ? JSON.parse(t) : {};
                      } catch (Sf) {
                        return {};
                      }
                    })(n)
                  ),
                  { persistConfig: !1 }
                ),
                o.config
              ),
              ((e) => {
                const t = {};
                return (
                  e.location.search
                    .slice(1)
                    .split('&')
                    .map((e) => e.split('='))
                    .map(([e, t]) => [decodeURIComponent(e), decodeURIComponent(t)])
                    .filter(([e]) => Vm(e, jm))
                    .map(([e, t]) => [e.slice(jm.length), t])
                    .forEach(([e, n]) => {
                      t[e] = n;
                    }),
                  t
                );
              })(n)
            ),
            e
          );
          Dm.reset(a),
            Dm.getBoolean('persistConfig') &&
              ((e, t) => {
                try {
                  e.sessionStorage.setItem(Hm, JSON.stringify(t));
                } catch (Sf) {
                  return;
                }
              })(n, a),
            Um(n),
            (o.config = Dm),
            (o.mode = tg = Dm.get('mode', t.documentElement.getAttribute('mode') || (Fm(n, 'ios') ? 'ios' : 'md'))),
            Dm.set('mode', tg),
            t.documentElement.setAttribute('mode', tg),
            t.documentElement.classList.add(tg),
            Dm.getBoolean('_testing') && Dm.set('animated', !1);
          const l = (e) => {
              var t;
              return null === (t = e.tagName) || void 0 === t ? void 0 : t.startsWith('ION-');
            },
            s = (e) => ['ios', 'md'].includes(e);
          var c;
          (c = (e) => {
            for (; e; ) {
              const t = e.mode || e.getAttribute('mode');
              if (t) {
                if (s(t)) return t;
                l(e) && console.warn('Invalid ionic mode: "' + t + '", expected: "ios" or "md"');
              }
              e = e.parentElement;
            }
            return tg;
          }),
            Bh.push(c);
        },
        rg = async (e, t, n, o, r, i) => {
          var a;
          if (e) return e.attachViewToDom(t, n, r, o);
          if (!(i || 'string' == typeof n || n instanceof HTMLElement))
            throw new Error('framework delegate is missing');
          const l =
            'string' == typeof n ? (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.createElement(n)) : n;
          return (
            o && o.forEach((e) => l.classList.add(e)),
            r && Object.assign(l, r),
            t.appendChild(l),
            await new Promise((e) => tm(l, e)),
            l
          );
        };
      function ig(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        }
        return n;
      }
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */ const ag = (e, t) => null !== t.closest(e),
        lg = (e, t) =>
          'string' == typeof e && e.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${e}`]: !0 }, t) : t,
        sg = Ph(
          class extends jh {
            constructor() {
              super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
            }
            async addRipple(e, t) {
              return new Promise((n) => {
                Gh(() => {
                  const o = this.el.getBoundingClientRect(),
                    r = o.width,
                    i = o.height,
                    a = Math.sqrt(r * r + i * i),
                    l = Math.max(i, r),
                    s = this.unbounded ? l : a + ug,
                    c = Math.floor(l * dg),
                    u = s / c;
                  let d = e - o.left,
                    f = t - o.top;
                  this.unbounded && ((d = 0.5 * r), (f = 0.5 * i));
                  const p = d - 0.5 * c,
                    h = f - 0.5 * c,
                    m = 0.5 * r - d,
                    g = 0.5 * i - f;
                  Zh(() => {
                    const e = document.createElement('div');
                    e.classList.add('ripple-effect');
                    const t = e.style;
                    (t.top = h + 'px'),
                      (t.left = p + 'px'),
                      (t.width = t.height = c + 'px'),
                      t.setProperty('--final-scale', `${u}`),
                      t.setProperty('--translate-end', `${m}px, ${g}px`),
                      (this.el.shadowRoot || this.el).appendChild(e),
                      setTimeout(() => {
                        n(() => {
                          cg(e);
                        });
                      }, 325);
                  });
                });
              });
            }
            get unbounded() {
              return 'unbounded' === this.type;
            }
            render() {
              const e = ng(this);
              return Vp(Hp, { role: 'presentation', class: { [e]: !0, unbounded: this.unbounded } });
            }
            get el() {
              return this;
            }
            static get style() {
              return ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}';
            }
          },
          [1, 'ion-ripple-effect', { type: [1], addRipple: [64] }]
        ),
        cg = (e) => {
          e.classList.add('fade-out'),
            setTimeout(() => {
              e.remove();
            }, 200);
        },
        ug = 10,
        dg = 0.5,
        fg = 'undefined' != typeof window ? window : void 0;
      fg && fg.CSS && fg.CSS.supports && fg.CSS.supports('--a: 0');
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      const pg = e('i', (e) =>
          e && '' !== e.dir
            ? 'rtl' === e.dir.toLowerCase()
            : 'rtl' === (null === document || void 0 === document ? void 0 : document.dir.toLowerCase())
        ),
        hg = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionScrollStart = qp(this, 'ionScrollStart', 7)),
                (this.ionScroll = qp(this, 'ionScroll', 7)),
                (this.ionScrollEnd = qp(this, 'ionScrollEnd', 7)),
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
              this.isMainContent = null === this.el.closest('ion-menu, ion-popover, ion-modal');
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
                  null !== this.el.offsetParent && this.resize();
                }, 100));
            }
            shouldForceOverscroll() {
              const { forceOverscroll: e } = this,
                t = ng(this);
              return void 0 === e ? 'ios' === t && Fm('ios') : e;
            }
            resize() {
              this.fullscreen
                ? Gh(() => this.readDimensions())
                : (0 === this.cTop && 0 === this.cBottom) || ((this.cTop = this.cBottom = 0), xh(this));
            }
            readDimensions() {
              const e = mg(this.el),
                t = Math.max(this.el.offsetTop, 0),
                n = Math.max(e.offsetHeight - t - this.el.offsetHeight, 0);
              (t !== this.cTop || n !== this.cBottom) && ((this.cTop = t), (this.cBottom = n), xh(this));
            }
            onScroll(e) {
              const t = Date.now(),
                n = !this.isScrolling;
              (this.lastScroll = t),
                n && this.onScrollStart(),
                !this.queued &&
                  this.scrollEvents &&
                  ((this.queued = !0),
                  Gh((t) => {
                    (this.queued = !1),
                      (this.detail.event = e),
                      gg(this.detail, this.scrollEl, t, n),
                      this.ionScroll.emit(this.detail);
                  }));
            }
            async getScrollElement() {
              return this.scrollEl || (await new Promise((e) => tm(this.el, e))), Promise.resolve(this.scrollEl);
            }
            async getBackgroundElement() {
              return (
                this.backgroundContentEl || (await new Promise((e) => tm(this.el, e))),
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
              const o = await this.getScrollElement();
              return this.scrollToPoint(e + o.scrollLeft, t + o.scrollTop, n);
            }
            async scrollToPoint(e, t, n = 0) {
              const o = await this.getScrollElement();
              if (n < 32) return null != t && (o.scrollTop = t), void (null != e && (o.scrollLeft = e));
              let r,
                i = 0;
              const a = new Promise((e) => (r = e)),
                l = o.scrollTop,
                s = o.scrollLeft,
                c = null != t ? t - l : 0,
                u = null != e ? e - s : 0,
                d = (e) => {
                  const t = Math.min(1, (e - i) / n) - 1,
                    a = Math.pow(t, 3) + 1;
                  0 !== c && (o.scrollTop = Math.floor(a * c + l)),
                    0 !== u && (o.scrollLeft = Math.floor(a * u + s)),
                    a < 1 ? requestAnimationFrame(d) : r();
                };
              return (
                requestAnimationFrame((e) => {
                  (i = e), d(e);
                }),
                a
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
              const { isMainContent: e, scrollX: t, scrollY: n, el: o } = this,
                r = pg(o) ? 'rtl' : 'ltr',
                i = ng(this),
                a = this.shouldForceOverscroll(),
                l = 'ios' === i,
                s = e ? 'main' : 'div';
              return (
                this.resize(),
                Vp(
                  Hp,
                  {
                    class: lg(this.color, {
                      [i]: !0,
                      'content-sizing': ag('ion-popover', this.el),
                      overscroll: a,
                      [`content-${r}`]: !0,
                    }),
                    style: { '--offset-top': `${this.cTop}px`, '--offset-bottom': `${this.cBottom}px` },
                  },
                  Vp('div', {
                    ref: (e) => (this.backgroundContentEl = e),
                    id: 'background-content',
                    part: 'background',
                  }),
                  Vp(
                    s,
                    {
                      class: { 'inner-scroll': !0, 'scroll-x': t, 'scroll-y': n, overscroll: (t || n) && a },
                      ref: (e) => (this.scrollEl = e),
                      onScroll: this.scrollEvents ? (e) => this.onScroll(e) : void 0,
                      part: 'scroll',
                    },
                    Vp('slot', null)
                  ),
                  l
                    ? Vp(
                        'div',
                        { class: 'transition-effect' },
                        Vp('div', { class: 'transition-cover' }),
                        Vp('div', { class: 'transition-shadow' })
                      )
                    : null,
                  Vp('slot', { name: 'fixed' })
                )
              );
            }
            get el() {
              return this;
            }
            static get style() {
              return ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
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
        mg = (e) => {
          const t = e.closest('ion-tabs');
          if (t) return t;
          const n = e.closest('ion-app, ion-page, .ion-page, page-inner, .popover-content');
          return (
            n ||
            ((e) => {
              var t;
              return e.parentElement
                ? e.parentElement
                : (null === (t = e.parentNode) || void 0 === t ? void 0 : t.host)
                ? e.parentNode.host
                : null;
            })(e)
          );
        },
        gg = (e, t, n, o) => {
          const r = e.currentX,
            i = e.currentY,
            a = e.currentTime,
            l = t.scrollLeft,
            s = t.scrollTop,
            c = n - a;
          if (
            (o && ((e.startTime = n), (e.startX = l), (e.startY = s), (e.velocityX = e.velocityY = 0)),
            (e.currentTime = n),
            (e.currentX = e.scrollLeft = l),
            (e.currentY = e.scrollTop = s),
            (e.deltaX = l - e.startX),
            (e.deltaY = s - e.startY),
            c > 0 && c < 100)
          ) {
            const t = (l - r) / c,
              n = (s - i) / c;
            (e.velocityX = 0.7 * t + 0.3 * e.velocityX), (e.velocityY = 0.7 * n + 0.3 * e.velocityY);
          }
        },
        bg = function () {
          'undefined' != typeof customElements &&
            ['ion-content'].forEach((e) => {
              'ion-content' === e && (customElements.get(e) || customElements.define(e, hg));
            });
        },
        vg = 'ion-content',
        yg = '.ion-content-scroll-host',
        wg = `${vg}, ${yg}`,
        xg = (e) => 'ION-CONTENT' === e.tagName,
        kg = e('h', async (e) => (xg(e) ? (await new Promise((t) => tm(e, t)), e.getScrollElement()) : e)),
        $g = (e) => {
          const t = e.querySelector(yg);
          return t || e.querySelector(wg);
        },
        Eg =
          (e('f', (e) => e.closest(wg)),
          e('s', (e, t) =>
            xg(e)
              ? e.scrollToTop(t)
              : Promise.resolve(e.scrollTo({ top: 0, left: 0, behavior: t > 0 ? 'smooth' : 'auto' }))
          ),
          e('j', (e, t, n, o) =>
            xg(e)
              ? e.scrollByPoint(t, n, o)
              : Promise.resolve(e.scrollBy({ top: n, left: t, behavior: o > 0 ? 'smooth' : 'auto' }))
          ),
          (e) =>
            ((e, ...t) => console.error(`<${e.tagName.toLowerCase()}> must be used inside ${t.join(' or ')}.`))(e, vg));
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      var Sg;
      e('e', Sg),
        (function (e) {
          (e.Body = 'body'), (e.Ionic = 'ionic'), (e.Native = 'native'), (e.None = 'none');
        })(Sg || e('e', (Sg = {})));
      const Cg = e('K', {
          getEngine() {
            var e;
            return (
              (null === (e = null == Jh ? void 0 : Jh.Capacitor) || void 0 === e
                ? void 0
                : e.isPluginAvailable('Keyboard')) && (null == Jh ? void 0 : Jh.Capacitor.Plugins.Keyboard)
            );
          },
          getResizeMode() {
            const e = this.getEngine();
            return (null == e ? void 0 : e.getResizeMode)
              ? e.getResizeMode().catch((e) => {
                  if ('UNIMPLEMENTED' !== e.code) throw e;
                })
              : Promise.resolve(void 0);
          },
        }),
        Pg = (e) => {
          if (void 0 === em || e === Sg.None || void 0 === e) return null;
          const t = em.querySelector('ion-app');
          return null != t ? t : em.body;
        },
        Tg = (e) => {
          const t = Pg(e);
          return null === t ? 0 : t.clientHeight;
        },
        Rg = (e) => {
          const t = document.querySelector(`${e}.ion-cloned-element`);
          if (null !== t) return t;
          const n = document.createElement(e);
          return (
            n.classList.add('ion-cloned-element'),
            n.style.setProperty('display', 'none'),
            document.body.appendChild(n),
            n
          );
        },
        Ig = (e) => {
          if (!e) return;
          const t = e.querySelectorAll('ion-toolbar');
          return {
            el: e,
            toolbars: Array.from(t).map((e) => {
              const t = e.querySelector('ion-title');
              return {
                el: e,
                background: e.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl: t,
                innerTitleEl: t ? t.shadowRoot.querySelector('.toolbar-title') : null,
                ionButtonsEl: Array.from(e.querySelectorAll('ion-buttons')),
              };
            }),
          };
        },
        Og = (e, t) => {
          'fade' !== e.collapse &&
            (void 0 === t
              ? e.style.removeProperty('--opacity-scale')
              : e.style.setProperty('--opacity-scale', t.toString()));
        },
        Lg = (e, t, n, o) => {
          Zh(() => {
            const r = o.scrollTop;
            ((e, t, n) => {
              if (!e[0].isIntersecting) return;
              const o = e[0].intersectionRatio > 0.9 || n <= 0 ? 0 : (100 * (1 - e[0].intersectionRatio)) / 75;
              Og(t.el, 1 === o ? void 0 : o);
            })(e, t, r);
            const i = e[0],
              a = i.intersectionRect,
              l = a.width * a.height,
              s = i.rootBounds.width * i.rootBounds.height,
              c = 0 === l && 0 === s,
              u = Math.abs(a.left - i.boundingClientRect.left),
              d = Math.abs(a.right - i.boundingClientRect.right);
            c ||
              (l > 0 && (u >= 5 || d >= 5)) ||
              (i.isIntersecting
                ? (Ng(t, !1), Ng(n))
                : ((0 === a.x && 0 === a.y) || (0 !== a.width && 0 !== a.height)) &&
                  r > 0 &&
                  (Ng(t), Ng(n, !1), Og(t.el)));
          });
        },
        Ng = (e, t = !0) => {
          const n = e.el;
          t
            ? (n.classList.remove('header-collapse-condense-inactive'), n.removeAttribute('aria-hidden'))
            : (n.classList.add('header-collapse-condense-inactive'), n.setAttribute('aria-hidden', 'true'));
        },
        _g = (e = [], t = 1, n = !1) => {
          e.forEach((e) => {
            const o = e.ionTitleEl,
              r = e.innerTitleEl;
            o &&
              'large' === o.size &&
              ((r.style.transition = n ? 'all 0.2s ease-in-out' : ''), (r.style.transform = `scale3d(${t}, ${t}, 1)`));
          });
        },
        zg = (e, t, n) => {
          Gh(() => {
            const o = e.scrollTop,
              r = t.clientHeight,
              i = n ? n.clientHeight : 0;
            if (null !== n && o < i)
              return (
                t.style.setProperty('--opacity-scale', '0'),
                void e.style.setProperty('clip-path', `inset(${r}px 0px 0px 0px)`)
              );
            const a = im(0, (o - i) / 10, 1);
            Zh(() => {
              e.style.removeProperty('clip-path'), t.style.setProperty('--opacity-scale', a.toString());
            });
          });
        },
        Ag = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                (this.inheritedAttributes = {}),
                (this.setupFadeHeader = async (e, t) => {
                  const n = (this.scrollEl = await kg(e));
                  (this.contentScrollCallback = () => {
                    zg(this.scrollEl, this.el, t);
                  }),
                    n.addEventListener('scroll', this.contentScrollCallback),
                    zg(this.scrollEl, this.el, t);
                }),
                (this.collapse = void 0),
                (this.translucent = !1);
            }
            componentWillLoad() {
              this.inheritedAttributes = ((e, t) => {
                let n = om;
                return t && t.length > 0 && (n = n.filter((e) => !t.includes(e))), nm(e, n);
              })(this.el);
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
              if ('ios' !== ng(this)) return;
              const { collapse: e } = this,
                t = 'condense' === e,
                n = 'fade' === e;
              if ((this.destroyCollapsibleHeader(), t)) {
                const e = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
                  t = e ? $g(e) : null;
                Zh(() => {
                  (Rg('ion-title').size = 'large'), Rg('ion-back-button');
                }),
                  await this.setupCondenseHeader(t, e);
              } else if (n) {
                const e = this.el.closest('ion-app,ion-page,.ion-page,page-inner'),
                  t = e ? $g(e) : null;
                if (!t) return void Eg(this.el);
                const n = t.querySelector('ion-header[collapse="condense"]');
                await this.setupFadeHeader(t, n);
              }
            }
            destroyCollapsibleHeader() {
              this.intersectionObserver &&
                (this.intersectionObserver.disconnect(), (this.intersectionObserver = void 0)),
                this.scrollEl &&
                  this.contentScrollCallback &&
                  (this.scrollEl.removeEventListener('scroll', this.contentScrollCallback),
                  (this.contentScrollCallback = void 0)),
                this.collapsibleMainHeader &&
                  (this.collapsibleMainHeader.classList.remove('header-collapse-main'),
                  (this.collapsibleMainHeader = void 0));
            }
            async setupCondenseHeader(e, t) {
              if (!e || !t) return void Eg(this.el);
              if ('undefined' == typeof IntersectionObserver) return;
              this.scrollEl = await kg(e);
              const n = t.querySelectorAll('ion-header');
              if (
                ((this.collapsibleMainHeader = Array.from(n).find((e) => 'condense' !== e.collapse)),
                !this.collapsibleMainHeader)
              )
                return;
              const o = Ig(this.collapsibleMainHeader),
                r = Ig(this.el);
              o &&
                r &&
                (Ng(o, !1),
                Og(o.el, 0),
                (this.intersectionObserver = new IntersectionObserver(
                  (e) => {
                    Lg(e, o, r, this.scrollEl);
                  },
                  { root: e, threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
                )),
                this.intersectionObserver.observe(r.toolbars[r.toolbars.length - 1].el),
                (this.contentScrollCallback = () => {
                  ((e, t, n) => {
                    Gh(() => {
                      const o = e.scrollTop,
                        r = im(1, 1 + -o / 500, 1.1);
                      null === n.querySelector('ion-refresher.refresher-native') &&
                        Zh(() => {
                          _g(t.toolbars, r);
                        });
                    });
                  })(this.scrollEl, r, e);
                }),
                this.scrollEl.addEventListener('scroll', this.contentScrollCallback),
                Zh(() => {
                  void 0 !== this.collapsibleMainHeader &&
                    this.collapsibleMainHeader.classList.add('header-collapse-main');
                }));
            }
            render() {
              const { translucent: e, inheritedAttributes: t } = this,
                n = ng(this),
                o = this.collapse || 'none',
                r = ag('ion-menu', this.el) ? 'none' : 'banner';
              return Vp(
                Hp,
                Object.assign(
                  {
                    role: r,
                    class: {
                      [n]: !0,
                      [`header-${n}`]: !0,
                      'header-translucent': this.translucent,
                      [`header-collapse-${o}`]: !0,
                      [`header-translucent-${n}`]: this.translucent,
                    },
                  },
                  t
                ),
                'ios' === n && e && Vp('div', { class: 'header-background' }),
                Vp('slot', null)
              );
            }
            get el() {
              return this;
            }
            static get style() {
              return {
                ios: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}',
                md: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}@supports (inset-inline-start: 0){.header-md::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.header-md::after{left:0}:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}[dir=rtl] .header-md::after{background-position:right 0 top -2px}@supports selector(:dir(rtl)){.header-md::after:dir(rtl){background-position:right 0 top -2px}}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}',
              };
            }
          },
          [36, 'ion-header', { collapse: [1], translucent: [4] }]
        ),
        Mg = function () {
          'undefined' != typeof customElements &&
            ['ion-header'].forEach((e) => {
              'ion-header' === e && (customElements.get(e) || customElements.define(e, Ag));
            });
        };
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */ class Bg {
        constructor(e, t) {
          (this.component = e), (this.params = t), (this.state = 1);
        }
        async init(e) {
          if (((this.state = 2), !this.element)) {
            const t = this.component;
            this.element = await rg(this.delegate, e, t, ['ion-page', 'ion-page-invisible'], this.params);
          }
        }
        _destroy() {
          am(3 !== this.state, 'view state must be ATTACHED');
          const e = this.element;
          e && (this.delegate ? this.delegate.removeViewFromDom(e.parentElement, e) : e.remove()),
            (this.nav = void 0),
            (this.state = 3);
        }
      }
      const Dg = (e, t, n) => !!e && e.component === t && lm(e.params, n),
        Vg = (e, t) => (e ? (e instanceof Bg ? e : new Bg(e, t)) : null),
        jg = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionNavWillLoad = qp(this, 'ionNavWillLoad', 7)),
                (this.ionNavWillChange = qp(this, 'ionNavWillChange', 3)),
                (this.ionNavDidChange = qp(this, 'ionNavDidChange', 3)),
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
              this.gesture && this.gesture.enable(!0 === this.swipeGesture);
            }
            rootChanged() {
              void 0 !== this.root && (this.useRouter || this.setRoot(this.root, this.rootParams));
            }
            componentWillLoad() {
              if (
                ((this.useRouter =
                  null !== document.querySelector('ion-router') && null === this.el.closest('[no-router]')),
                void 0 === this.swipeGesture)
              ) {
                const e = ng(this);
                this.swipeGesture = Dm.getBoolean('swipeBackEnabled', 'ios' === e);
              }
              this.ionNavWillLoad.emit();
            }
            async componentDidLoad() {
              this.rootChanged(),
                (this.gesture = (await xp(() => t.import('./swipe-back-legacy-ee0b642f.js'))).createSwipeBackGesture(
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
              for (const e of this.views) Im(e.element, bm), e._destroy();
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
                (this.transInstr.length = 0),
                (this.views.length = 0),
                (this.destroyed = !0);
            }
            push(e, t, n, o) {
              return this.insert(-1, e, t, n, o);
            }
            insert(e, t, n, o, r) {
              return this.insertPages(e, [{ component: t, componentProps: n }], o, r);
            }
            insertPages(e, t, n, o) {
              return this.queueTrns({ insertStart: e, insertViews: t, opts: n }, o);
            }
            pop(e, t) {
              return this.removeIndex(-1, 1, e, t);
            }
            popTo(e, t, n) {
              const o = { removeStart: -1, removeCount: -1, opts: t };
              return (
                'object' == typeof e && e.component
                  ? ((o.removeView = e), (o.removeStart = 1))
                  : 'number' == typeof e && (o.removeStart = e + 1),
                this.queueTrns(o, n)
              );
            }
            popToRoot(e, t) {
              return this.removeIndex(1, -1, e, t);
            }
            removeIndex(e, t = 1, n, o) {
              return this.queueTrns({ removeStart: e, removeCount: t, opts: n }, o);
            }
            setRoot(e, t, n, o) {
              return this.setPages([{ component: e, componentProps: t }], n, o);
            }
            setPages(e, t, n) {
              return (
                null != t || (t = {}),
                !0 !== t.animated && (t.animated = !1),
                this.queueTrns({ insertStart: 0, insertViews: e, removeStart: 0, removeCount: -1, opts: t }, n)
              );
            }
            setRouteId(e, t, n, o) {
              const r = this.getActiveSync();
              if (Dg(r, e, t)) return Promise.resolve({ changed: !1, element: r.element });
              let i;
              const a = new Promise((e) => (i = e));
              let l;
              const s = {
                updateURL: !1,
                viewIsReady: (e) => {
                  let t;
                  const n = new Promise((e) => (t = e));
                  return (
                    i({
                      changed: !0,
                      element: e,
                      markVisible: async () => {
                        t(), await l;
                      },
                    }),
                    n
                  );
                },
              };
              if ('root' === n) l = this.setRoot(e, t, s);
              else {
                const r = this.views.find((n) => Dg(n, e, t));
                r
                  ? (l = this.popTo(r, Object.assign(Object.assign({}, s), { direction: 'back', animationBuilder: o })))
                  : 'forward' === n
                  ? (l = this.push(e, t, Object.assign(Object.assign({}, s), { animationBuilder: o })))
                  : 'back' === n &&
                    (l = this.setRoot(
                      e,
                      t,
                      Object.assign(Object.assign({}, s), { direction: 'back', animated: !0, animationBuilder: o })
                    ));
              }
              return a;
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
              return !(!e || !this.getPreviousSync(e));
            }
            getPreviousSync(e = this.getActiveSync()) {
              if (!e) return;
              const t = this.views,
                n = t.indexOf(e);
              return n > 0 ? t[n - 1] : void 0;
            }
            async queueTrns(e, t) {
              var n, o;
              if (this.isTransitioning && (null === (n = e.opts) || void 0 === n ? void 0 : n.skipIfBusy)) return !1;
              const r = new Promise((t, n) => {
                (e.resolve = t), (e.reject = n);
              });
              if (((e.done = t), e.opts && !1 !== e.opts.updateURL && this.useRouter)) {
                const t = document.querySelector('ion-router');
                if (t) {
                  const n = await t.canTransition();
                  if (!1 === n) return !1;
                  if ('string' == typeof n) return t.push(n, e.opts.direction || 'back'), !1;
                }
              }
              return (
                0 === (null === (o = e.insertViews) || void 0 === o ? void 0 : o.length) && (e.insertViews = void 0),
                this.transInstr.push(e),
                this.nextTrns(),
                r
              );
            }
            success(e, t) {
              if (this.destroyed) this.fireError('nav controller was destroyed', t);
              else if (
                (t.done && t.done(e.hasCompleted, e.requiresTransition, e.enteringView, e.leavingView, e.direction),
                t.resolve(e.hasCompleted),
                !1 !== t.opts.updateURL && this.useRouter)
              ) {
                const t = document.querySelector('ion-router');
                if (t) {
                  const n = 'back' === e.direction ? 'back' : 'forward';
                  t.navChanged(n);
                }
              }
            }
            failed(e, t) {
              this.destroyed
                ? this.fireError('nav controller was destroyed', t)
                : ((this.transInstr.length = 0), this.fireError(e, t));
            }
            fireError(e, t) {
              t.done && t.done(!1, !1, e), t.reject && !this.destroyed ? t.reject(e) : t.resolve(!1);
            }
            nextTrns() {
              if (this.isTransitioning) return !1;
              const e = this.transInstr.shift();
              return !!e && (this.runTransition(e), !0);
            }
            async runTransition(e) {
              try {
                this.ionNavWillChange.emit(), (this.isTransitioning = !0), this.prepareTI(e);
                const t = this.getActiveSync(),
                  n = this.getEnteringView(e, t);
                if (!t && !n) throw new Error('no views in the stack to be removed');
                n && 1 === n.state && (await n.init(this.el)), this.postViewInit(n, t, e);
                const o = (e.enteringRequiresTransition || e.leavingRequiresTransition) && n !== t;
                let r;
                o &&
                  e.opts &&
                  t &&
                  ('back' === e.opts.direction &&
                    (e.opts.animationBuilder = e.opts.animationBuilder || (null == n ? void 0 : n.animationBuilder)),
                  (t.animationBuilder = e.opts.animationBuilder)),
                  (r = o ? await this.transition(n, t, e) : { hasCompleted: !0, requiresTransition: !1 }),
                  this.success(r, e),
                  this.ionNavDidChange.emit();
              } catch (t) {
                this.failed(t, e);
              }
              (this.isTransitioning = !1), this.nextTrns();
            }
            prepareTI(e) {
              var t, n, o;
              const r = this.views.length;
              if (
                ((null !== (t = e.opts) && void 0 !== t) || (e.opts = {}),
                (null !== (n = (o = e.opts).delegate) && void 0 !== n) || (o.delegate = this.delegate),
                void 0 !== e.removeView)
              ) {
                am(void 0 !== e.removeStart, 'removeView needs removeStart'),
                  am(void 0 !== e.removeCount, 'removeView needs removeCount');
                const t = this.views.indexOf(e.removeView);
                if (t < 0) throw new Error('removeView was not found');
                e.removeStart += t;
              }
              void 0 !== e.removeStart &&
                (e.removeStart < 0 && (e.removeStart = r - 1),
                e.removeCount < 0 && (e.removeCount = r - e.removeStart),
                (e.leavingRequiresTransition = e.removeCount > 0 && e.removeStart + e.removeCount === r)),
                e.insertViews &&
                  ((e.insertStart < 0 || e.insertStart > r) && (e.insertStart = r),
                  (e.enteringRequiresTransition = e.insertStart === r));
              const i = e.insertViews;
              if (!i) return;
              am(i.length > 0, 'length can not be zero');
              const a = i
                .map((e) =>
                  e instanceof Bg
                    ? e
                    : 'component' in e
                    ? Vg(e.component, null === e.componentProps ? void 0 : e.componentProps)
                    : Vg(e, void 0)
                )
                .filter((e) => null !== e);
              if (0 === a.length) throw new Error('invalid views to insert');
              for (const l of a) {
                l.delegate = e.opts.delegate;
                const t = l.nav;
                if (t && t !== this) throw new Error('inserted view was already inserted');
                if (3 === l.state) throw new Error('inserted view was already destroyed');
              }
              e.insertViews = a;
            }
            getEnteringView(e, t) {
              const n = e.insertViews;
              if (void 0 !== n) return n[n.length - 1];
              const o = e.removeStart;
              if (void 0 !== o) {
                const n = this.views,
                  r = o + e.removeCount;
                for (let e = n.length - 1; e >= 0; e--) {
                  const i = n[e];
                  if ((e < o || e >= r) && i !== t) return i;
                }
              }
            }
            postViewInit(e, t, n) {
              var o, r, i;
              am(t || e, 'Both leavingView and enteringView are null'),
                am(n.resolve, 'resolve must be valid'),
                am(n.reject, 'reject must be valid');
              const a = n.opts,
                { insertViews: l, removeStart: s, removeCount: c } = n;
              let u;
              if (void 0 !== s && void 0 !== c) {
                am(s >= 0, 'removeStart can not be negative'), am(c >= 0, 'removeCount can not be negative'), (u = []);
                for (let n = s; n < s + c; n++) {
                  const o = this.views[n];
                  void 0 !== o && o !== e && o !== t && u.push(o);
                }
                (null !== (o = a.direction) && void 0 !== o) || (a.direction = 'back');
              }
              const d =
                this.views.length +
                (null !== (r = null == l ? void 0 : l.length) && void 0 !== r ? r : 0) -
                (null != c ? c : 0);
              if ((am(d >= 0, 'final balance can not be negative'), 0 === d))
                throw (
                  (console.warn(
                    "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
                    this,
                    this.el
                  ),
                  new Error('navigation stack needs at least one root page'))
                );
              if (l) {
                let e = n.insertStart;
                for (const t of l) this.insertViewAt(t, e), e++;
                n.enteringRequiresTransition &&
                  ((null !== (i = a.direction) && void 0 !== i) || (a.direction = 'forward'));
              }
              if (u && u.length > 0) {
                for (const e of u) Im(e.element, mm), Im(e.element, gm), Im(e.element, bm);
                for (const e of u) this.destroyView(e);
              }
            }
            async transition(e, t, n) {
              const o = n.opts,
                r = o.progressAnimation ? (e) => (this.sbAni = e) : void 0,
                i = ng(this),
                a = e.element,
                l = t && t.element,
                s = Object.assign(
                  Object.assign(
                    {
                      mode: i,
                      showGoBack: this.canGoBackSync(e),
                      baseEl: this.el,
                      progressCallback: r,
                      animated: this.animated && Dm.getBoolean('animated', !0),
                      enteringEl: a,
                      leavingEl: l,
                    },
                    o
                  ),
                  { animationBuilder: o.animationBuilder || this.animation || Dm.get('navAnimation') }
                ),
                { hasCompleted: c } = await vm(s);
              return this.transitionFinish(c, e, t, o);
            }
            transitionFinish(e, t, n, o) {
              const r = e ? t : n;
              return (
                r && this.unmountInactiveViews(r),
                { hasCompleted: e, requiresTransition: !0, enteringView: t, leavingView: n, direction: o.direction }
              );
            }
            insertViewAt(e, t) {
              const n = this.views,
                o = n.indexOf(e);
              o > -1
                ? (am(e.nav === this, 'view is not part of the nav'), n.splice(o, 1), n.splice(t, 0, e))
                : (am(!e.nav, 'nav is used'), (e.nav = this), n.splice(t, 0, e));
            }
            removeView(e) {
              am(2 === e.state || 3 === e.state, 'view state should be loaded or destroyed');
              const t = this.views,
                n = t.indexOf(e);
              am(n > -1, 'view must be part of the stack'), n >= 0 && t.splice(n, 1);
            }
            destroyView(e) {
              e._destroy(), this.removeView(e);
            }
            unmountInactiveViews(e) {
              if (this.destroyed) return;
              const t = this.views,
                n = t.indexOf(e);
              for (let o = t.length - 1; o >= 0; o--) {
                const e = t[o],
                  r = e.element;
                r && (o > n ? (Im(r, bm), this.destroyView(e)) : o < n && Lm(r, !0));
              }
            }
            canStart() {
              return (
                !!this.swipeGesture &&
                !this.isTransitioning &&
                0 === this.transInstr.length &&
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
                let o = e ? -0.001 : 0.001;
                e
                  ? (o += _m([0, 0], [0.32, 0.72], [0, 1], [1, 1], t)[0])
                  : (this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                    (o += _m([0, 0], [1, 0], [0.68, 0.28], [1, 1], t)[0])),
                  this.sbAni.progressEnd(e ? 1 : 0, o, n);
              }
            }
            render() {
              return Vp('slot', null);
            }
            get el() {
              return this;
            }
            static get watchers() {
              return { swipeGesture: ['swipeGestureChanged'], root: ['rootChanged'] };
            }
            static get style() {
              return ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}';
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
        ),
        Hg = function () {
          'undefined' != typeof customElements &&
            ['ion-nav'].forEach((e) => {
              'ion-nav' === e && (customElements.get(e) || customElements.define(e, jg));
            });
        },
        Fg = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionStyle = qp(this, 'ionStyle', 7)),
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
              return void 0 !== this.size ? this.size : 'default';
            }
            render() {
              const e = ng(this),
                t = this.getSize();
              return Vp(
                Hp,
                { class: lg(this.color, { [e]: !0, [`title-${t}`]: !0, 'title-rtl': 'rtl' === document.dir }) },
                Vp('div', { class: 'toolbar-title' }, Vp('slot', null))
              );
            }
            get el() {
              return this;
            }
            static get watchers() {
              return { size: ['sizeChanged'] };
            }
            static get style() {
              return {
                ios: ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}',
                md: ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}',
              };
            }
          },
          [33, 'ion-title', { color: [513], size: [1] }]
        ),
        Ug = function () {
          'undefined' != typeof customElements &&
            ['ion-title'].forEach((e) => {
              'ion-title' === e && (customElements.get(e) || customElements.define(e, Fg));
            });
        },
        Wg = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.childrenStyles = new Map()),
                (this.color = void 0);
            }
            componentWillLoad() {
              const e = Array.from(this.el.querySelectorAll('ion-buttons')),
                t = e.find((e) => 'start' === e.slot);
              t && t.classList.add('buttons-first-slot');
              const n = e.reverse(),
                o =
                  n.find((e) => 'end' === e.slot) ||
                  n.find((e) => 'primary' === e.slot) ||
                  n.find((e) => 'secondary' === e.slot);
              o && o.classList.add('buttons-last-slot');
            }
            childrenStyle(e) {
              e.stopPropagation();
              const t = e.target.tagName,
                n = e.detail,
                o = {},
                r = this.childrenStyles.get(t) || {};
              let i = !1;
              Object.keys(n).forEach((e) => {
                const t = `toolbar-${e}`,
                  a = n[e];
                a !== r[t] && (i = !0), a && (o[t] = !0);
              }),
                i && (this.childrenStyles.set(t, o), xh(this));
            }
            render() {
              const e = ng(this),
                t = {};
              return (
                this.childrenStyles.forEach((e) => {
                  Object.assign(t, e);
                }),
                Vp(
                  Hp,
                  {
                    class: Object.assign(
                      Object.assign({}, t),
                      lg(this.color, { [e]: !0, 'in-toolbar': ag('ion-toolbar', this.el) })
                    ),
                  },
                  Vp('div', { class: 'toolbar-background' }),
                  Vp(
                    'div',
                    { class: 'toolbar-container' },
                    Vp('slot', { name: 'start' }),
                    Vp('slot', { name: 'secondary' }),
                    Vp('div', { class: 'toolbar-content' }, Vp('slot', null)),
                    Vp('slot', { name: 'primary' }),
                    Vp('slot', { name: 'end' })
                  )
                )
              );
            }
            get el() {
              return this;
            }
            static get style() {
              return {
                ios: ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}',
                md: ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}',
              };
            }
          },
          [33, 'ion-toolbar', { color: [513] }, [[0, 'ionStyle', 'childrenStyle']]]
        ),
        qg = function () {
          'undefined' != typeof customElements &&
            ['ion-toolbar'].forEach((e) => {
              'ion-toolbar' === e && (customElements.get(e) || customElements.define(e, Wg));
            });
        };
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      var Qg;
      !(function (e) {
        (e.Dark = 'DARK'), (e.Light = 'LIGHT'), (e.Default = 'DEFAULT');
      })(Qg || (Qg = {}));
      const Kg = Ph(
          class extends jh {
            constructor() {
              super(), this.__registerHost();
            }
            componentDidLoad() {
              Yg(async () => {
                const e = Fm(window, 'hybrid');
                if (
                  (Dm.getBoolean('_testing') ||
                    xp(() => t.import('./index9-legacy-92dd4c20.js')).then((e) => e.startTapClick(Dm)),
                  Dm.getBoolean('statusTap', e) &&
                    xp(() => t.import('./status-tap-legacy-920a6837.js')).then((e) => e.startStatusTap()),
                  Dm.getBoolean('inputShims', Xg()))
                ) {
                  const e = Fm(window, 'ios') ? 'ios' : 'android';
                  xp(() => t.import('./input-shims-legacy-774855fc.js')).then((t) => t.startInputShims(Dm, e));
                }
                const n = await xp(() => t.import('./hardware-back-button-legacy-7391e573.js'));
                Dm.getBoolean('hardwareBackButton', e) ? n.startHardwareBackButton() : n.blockHardwareBackButton(),
                  'undefined' != typeof window &&
                    xp(() => t.import('./keyboard2-legacy-02d24d9b.js')).then((e) => e.startKeyboardAssist(window)),
                  xp(() => t.import('./focus-visible-legacy-b3e947fe.js')).then(
                    (e) => (this.focusVisible = e.startFocusVisible())
                  );
              });
            }
            async setFocus(e) {
              this.focusVisible && this.focusVisible.setFocus(e);
            }
            render() {
              const e = ng(this);
              return Vp(Hp, {
                class: { [e]: !0, 'ion-page': !0, 'force-statusbar-padding': Dm.getBoolean('_forceStatusbarPadding') },
              });
            }
            get el() {
              return this;
            }
            static get style() {
              return 'html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}';
            }
          },
          [0, 'ion-app', { setFocus: [64] }]
        ),
        Xg = () =>
          !(!Fm(window, 'ios') || !Fm(window, 'mobile')) || !(!Fm(window, 'android') || !Fm(window, 'mobileweb')),
        Yg = (e) => {
          'requestIdleCallback' in window ? window.requestIdleCallback(e) : setTimeout(e, 32);
        },
        Gg = function () {
          'undefined' != typeof customElements &&
            ['ion-app'].forEach((e) => {
              'ion-app' === e && (customElements.get(e) || customElements.define(e, Kg));
            });
        },
        Zg = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionNavWillLoad = qp(this, 'ionNavWillLoad', 7)),
                (this.ionNavWillChange = qp(this, 'ionNavWillChange', 3)),
                (this.ionNavDidChange = qp(this, 'ionNavDidChange', 3)),
                (this.gestureOrAnimationInProgress = !1),
                (this.mode = ng(this)),
                (this.delegate = void 0),
                (this.animated = !0),
                (this.animation = void 0),
                (this.swipeHandler = void 0);
            }
            swipeHandlerChanged() {
              this.gesture && this.gesture.enable(void 0 !== this.swipeHandler);
            }
            async connectedCallback() {
              const e = () => {
                (this.gestureOrAnimationInProgress = !0), this.swipeHandler && this.swipeHandler.onStart();
              };
              (this.gesture = (await xp(() => t.import('./swipe-back-legacy-ee0b642f.js'))).createSwipeBackGesture(
                this.el,
                () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(),
                () => e(),
                (e) => {
                  var t;
                  return null === (t = this.ani) || void 0 === t ? void 0 : t.progressStep(e);
                },
                (e, t, n) => {
                  if (this.ani) {
                    this.ani.onFinish(
                      () => {
                        (this.gestureOrAnimationInProgress = !1), this.swipeHandler && this.swipeHandler.onEnd(e);
                      },
                      { oneTimeCallback: !0 }
                    );
                    let o = e ? -0.001 : 0.001;
                    e
                      ? (o += _m([0, 0], [0.32, 0.72], [0, 1], [1, 1], t)[0])
                      : (this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                        (o += _m([0, 0], [1, 0], [0.68, 0.28], [1, 1], t)[0])),
                      this.ani.progressEnd(e ? 1 : 0, o, n);
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
              const o = await this.lock();
              let r = !1;
              try {
                r = await this.transition(e, t, n);
              } catch (Sf) {
                console.error(Sf);
              }
              return o(), r;
            }
            async setRouteId(e, t, n, o) {
              return {
                changed: await this.setRoot(e, t, {
                  duration: 'root' === n ? 0 : void 0,
                  direction: 'back' === n ? 'back' : 'forward',
                  animationBuilder: o,
                }),
                element: this.activeEl,
              };
            }
            async getRouteId() {
              const e = this.activeEl;
              return e ? { id: e.tagName, element: e, params: this.activeParams } : void 0;
            }
            async setRoot(e, t, n) {
              if (this.activeComponent === e && lm(t, this.activeParams)) return !1;
              const o = this.activeEl,
                r = await rg(this.delegate, this.el, e, ['ion-page', 'ion-page-invisible'], t);
              return (
                (this.activeComponent = e),
                (this.activeEl = r),
                (this.activeParams = t),
                await this.commit(r, o, n),
                await ((e, t) => {
                  if (t) {
                    if (e) {
                      const n = t.parentElement;
                      return e.removeViewFromDom(n, t);
                    }
                    t.remove();
                  }
                  return Promise.resolve();
                })(this.delegate, o),
                !0
              );
            }
            async transition(e, t, n = {}) {
              if (t === e) return !1;
              this.ionNavWillChange.emit();
              const { el: o, mode: r } = this,
                i = this.animated && Dm.getBoolean('animated', !0),
                a = n.animationBuilder || this.animation || Dm.get('navAnimation');
              var l;
              return (
                await vm(
                  Object.assign(
                    Object.assign(
                      {
                        mode: r,
                        animated: i,
                        enteringEl: e,
                        leavingEl: t,
                        baseEl: o,
                        deepWait: ((l = o), void 0 !== l.componentOnReady),
                        progressCallback: n.progressAnimation
                          ? (e) => {
                              void 0 === e || this.gestureOrAnimationInProgress
                                ? (this.ani = e)
                                : ((this.gestureOrAnimationInProgress = !0),
                                  e.onFinish(
                                    () => {
                                      (this.gestureOrAnimationInProgress = !1),
                                        this.swipeHandler && this.swipeHandler.onEnd(!1);
                                    },
                                    { oneTimeCallback: !0 }
                                  ),
                                  e.progressEnd(0, 0, 0));
                            }
                          : void 0,
                      },
                      n
                    ),
                    { animationBuilder: a }
                  )
                ),
                this.ionNavDidChange.emit(),
                !0
              );
            }
            async lock() {
              const e = this.waitPromise;
              let t;
              return (this.waitPromise = new Promise((e) => (t = e))), void 0 !== e && (await e), t;
            }
            render() {
              return Vp('slot', null);
            }
            get el() {
              return this;
            }
            static get watchers() {
              return { swipeHandler: ['swipeHandlerChanged'] };
            }
            static get style() {
              return ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}';
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
        ),
        Jg = function () {
          'undefined' != typeof customElements &&
            ['ion-router-outlet'].forEach((e) => {
              'ion-router-outlet' === e && (customElements.get(e) || customElements.define(e, Zg));
            });
        },
        eb = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionTabBarChanged = qp(this, 'ionTabBarChanged', 7)),
                (this.keyboardCtrl = null),
                (this.keyboardVisible = !1),
                (this.color = void 0),
                (this.selectedTab = void 0),
                (this.translucent = !1);
            }
            selectedTabChanged() {
              void 0 !== this.selectedTab && this.ionTabBarChanged.emit({ tab: this.selectedTab });
            }
            componentWillLoad() {
              this.selectedTabChanged();
            }
            async connectedCallback() {
              this.keyboardCtrl = await (async (e) => {
                let t, n, o, r;
                const i = async () => {
                    const e = await Cg.getResizeMode(),
                      i = void 0 === e ? void 0 : e.mode;
                    (t = () => {
                      void 0 === r && (r = Tg(i)), (o = !0), a(o, i);
                    }),
                      (n = () => {
                        (o = !1), a(o, i);
                      }),
                      null == Jh || Jh.addEventListener('keyboardWillShow', t),
                      null == Jh || Jh.addEventListener('keyboardWillHide', n);
                  },
                  a = (t, n) => {
                    e && e(t, l(n));
                  },
                  l = (e) => {
                    if (0 === r || r === Tg(e)) return;
                    const t = Pg(e);
                    return null !== t
                      ? new Promise((e) => {
                          const n = new ResizeObserver(() => {
                            t.clientHeight === r && (n.disconnect(), e());
                          });
                          n.observe(t);
                        })
                      : void 0;
                  };
                return (
                  await i(),
                  {
                    init: i,
                    destroy: () => {
                      null == Jh || Jh.removeEventListener('keyboardWillShow', t),
                        null == Jh || Jh.removeEventListener('keyboardWillHide', n),
                        (t = n = void 0);
                    },
                    isKeyboardVisible: () => o,
                  }
                );
              })(async (e, t) => {
                !1 === e && void 0 !== t && (await t), (this.keyboardVisible = e);
              });
            }
            disconnectedCallback() {
              this.keyboardCtrl && this.keyboardCtrl.destroy();
            }
            render() {
              const { color: e, translucent: t, keyboardVisible: n } = this,
                o = ng(this),
                r = n && 'top' !== this.el.getAttribute('slot');
              return Vp(
                Hp,
                {
                  role: 'tablist',
                  'aria-hidden': r ? 'true' : null,
                  class: lg(e, { [o]: !0, 'tab-bar-translucent': t, 'tab-bar-hidden': r }),
                },
                Vp('slot', null)
              );
            }
            get el() {
              return this;
            }
            static get watchers() {
              return { selectedTab: ['selectedTabChanged'] };
            }
            static get style() {
              return {
                ios: ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}',
                md: ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}',
              };
            }
          },
          [
            33,
            'ion-tab-bar',
            { color: [513], selectedTab: [1, 'selected-tab'], translucent: [4], keyboardVisible: [32] },
          ]
        ),
        tb = function () {
          'undefined' != typeof customElements &&
            ['ion-tab-bar'].forEach((e) => {
              'ion-tab-bar' === e && (customElements.get(e) || customElements.define(e, eb));
            });
        },
        nb = Ph(
          class extends jh {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionTabButtonClick = qp(this, 'ionTabButtonClick', 7)),
                (this.inheritedAttributes = {}),
                (this.onKeyUp = (e) => {
                  ('Enter' !== e.key && ' ' !== e.key) || this.selectTab(e);
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
              (e.composedPath().includes(n) || (null == t ? void 0 : t.contains(this.el))) &&
                (this.selected = this.tab === e.detail.tab);
            }
            componentWillLoad() {
              (this.inheritedAttributes = Object.assign({}, nm(this.el, ['aria-label']))),
                void 0 === this.layout && (this.layout = Dm.get('tabButtonLayout', 'icon-top'));
            }
            selectTab(e) {
              void 0 !== this.tab &&
                (this.disabled ||
                  this.ionTabButtonClick.emit({ tab: this.tab, href: this.href, selected: this.selected }),
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
                  href: o,
                  rel: r,
                  target: i,
                  layout: a,
                  selected: l,
                  tab: s,
                  inheritedAttributes: c,
                } = this,
                u = ng(this),
                d = { download: this.download, href: o, rel: r, target: i };
              return Vp(
                Hp,
                {
                  onClick: this.onClick,
                  onKeyup: this.onKeyUp,
                  id: void 0 !== s ? `tab-button-${s}` : null,
                  class: {
                    [u]: !0,
                    'tab-selected': l,
                    'tab-disabled': e,
                    'tab-has-label': n,
                    'tab-has-icon': t,
                    'tab-has-label-only': n && !t,
                    'tab-has-icon-only': t && !n,
                    [`tab-layout-${a}`]: !0,
                    'ion-activatable': !0,
                    'ion-selectable': !0,
                    'ion-focusable': !0,
                  },
                },
                Vp(
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
                    c
                  ),
                  Vp('span', { class: 'button-inner' }, Vp('slot', null)),
                  'md' === u && Vp('ion-ripple-effect', { type: 'unbounded' })
                )
              );
            }
            get el() {
              return this;
            }
            static get style() {
              return {
                ios: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
                md: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
              };
            }
          },
          [
            33,
            'ion-tab-button',
            {
              disabled: [4],
              download: [1],
              href: [1],
              rel: [1],
              layout: [1025],
              selected: [1028],
              tab: [1],
              target: [1],
            },
            [[8, 'ionTabBarChanged', 'onTabBarChanged']],
          ]
        ),
        ob = function () {
          'undefined' != typeof customElements &&
            ['ion-tab-button', 'ion-ripple-effect'].forEach((e) => {
              switch (e) {
                case 'ion-tab-button':
                  customElements.get(e) || customElements.define(e, nb);
                  break;
                case 'ion-ripple-effect':
                  customElements.get(e) ||
                    ('undefined' != typeof customElements &&
                      ['ion-ripple-effect'].forEach((e) => {
                        'ion-ripple-effect' === e && (customElements.get(e) || customElements.define(e, sg));
                      }));
              }
            });
        },
        rb = !0,
        ib = !0,
        ab = !0,
        lb = !1,
        sb = !1;
      let cb,
        ub,
        db,
        fb = !1,
        pb = !1,
        hb = !1,
        mb = !1,
        gb = null,
        bb = !1;
      const vb = 'http://www.w3.org/1999/xlink',
        yb = {},
        wb = (e) => 'object' == (e = typeof e) || 'function' === e,
        xb = (e, t, ...n) => {
          let o = null,
            r = null,
            i = null,
            a = !1,
            l = !1;
          const s = [],
            c = (t) => {
              for (let n = 0; n < t.length; n++)
                (o = t[n]),
                  Array.isArray(o)
                    ? c(o)
                    : null != o &&
                      'boolean' != typeof o &&
                      ((a = 'function' != typeof e && !wb(o)) && (o = String(o)),
                      a && l ? (s[s.length - 1].$text$ += o) : s.push(a ? kb(null, o) : o),
                      (l = a));
            };
          if ((c(n), t)) {
            t.key && (r = t.key), t.name && (i = t.name);
            {
              const e = t.className || t.class;
              e &&
                (t.class =
                  'object' != typeof e
                    ? e
                    : Object.keys(e)
                        .filter((t) => e[t])
                        .join(' '));
            }
          }
          if ('function' == typeof e) return e(null === t ? {} : t, s, Eb);
          const u = kb(e, null);
          return (u.$attrs$ = t), s.length > 0 && (u.$children$ = s), (u.$key$ = r), (u.$name$ = i), u;
        },
        kb = (e, t) => {
          const n = {
            $flags$: 0,
            $tag$: e,
            $text$: t,
            $elm$: null,
            $children$: null,
            $attrs$: null,
            $key$: null,
            $name$: null,
          };
          return n;
        },
        $b = {},
        Eb = { forEach: (e, t) => e.map(Sb).forEach(t), map: (e, t) => e.map(Sb).map(t).map(Cb) },
        Sb = (e) => ({
          vattrs: e.$attrs$,
          vchildren: e.$children$,
          vkey: e.$key$,
          vname: e.$name$,
          vtag: e.$tag$,
          vtext: e.$text$,
        }),
        Cb = (e) => {
          if ('function' == typeof e.vtag) {
            const t = Object.assign({}, e.vattrs);
            return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), xb(e.vtag, t, ...(e.vchildren || []));
          }
          const t = kb(e.vtag, e.vtext);
          return (t.$attrs$ = e.vattrs), (t.$children$ = e.vchildren), (t.$key$ = e.vkey), (t.$name$ = e.vname), t;
        },
        Pb = new WeakMap(),
        Tb = (e) => {
          const t = e.$cmpMeta$,
            n = e.$hostElement$,
            o = t.$flags$,
            r = (t.$tagName$, () => {}),
            i = ((e, t, n, o) => {
              var r;
              let i = Rb(t, n);
              const a = mv.get(i);
              if (((e = 11 === e.nodeType ? e : vv), a))
                if ('string' == typeof a) {
                  e = e.head || e;
                  let t,
                    n = Pb.get(e);
                  if ((n || Pb.set(e, (n = new Set())), !n.has(i))) {
                    {
                      (t = vv.createElement('style')), (t.innerHTML = a);
                      const n =
                        null !== (r = wv.$nonce$) && void 0 !== r
                          ? r
                          : (function (e) {
                              var t, n, o;
                              return null !==
                                (o =
                                  null ===
                                    (n =
                                      null === (t = e.head) || void 0 === t
                                        ? void 0
                                        : t.querySelector('meta[name="csp-nonce"]')) || void 0 === n
                                    ? void 0
                                    : n.getAttribute('content')) && void 0 !== o
                                ? o
                                : void 0;
                            })(vv);
                      null != n && t.setAttribute('nonce', n), e.insertBefore(t, e.querySelector('link'));
                    }
                    n && n.add(i);
                  }
                } else e.adoptedStyleSheets.includes(a) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, a]);
              return i;
            })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
          10 & o && ((n['s-sc'] = i), n.classList.add(i + '-h'), 2 & o && n.classList.add(i + '-s')), r();
        },
        Rb = (e, t) => 'sc-' + (t && 32 & e.$flags$ ? e.$tagName$ + '-' + t : e.$tagName$),
        Ib = (e, t, n, o, r, i) => {
          if (n !== o) {
            let a = pv(e, t),
              l = t.toLowerCase();
            if ('class' === t) {
              const t = e.classList,
                r = Lb(n),
                i = Lb(o);
              t.remove(...r.filter((e) => e && !i.includes(e))), t.add(...i.filter((e) => e && !r.includes(e)));
            } else if ('style' === t) {
              for (const t in n)
                (o && null != o[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
              for (const t in o)
                (n && o[t] === n[t]) || (t.includes('-') ? e.style.setProperty(t, o[t]) : (e.style[t] = o[t]));
            } else if ('key' === t);
            else if ('ref' === t) o && o(e);
            else if (e.__lookupSetter__(t) || 'o' !== t[0] || 'n' !== t[1]) {
              const s = wb(o);
              if ((a || (s && null !== o)) && !r)
                try {
                  if (e.tagName.includes('-')) e[t] = o;
                  else {
                    const r = null == o ? '' : o;
                    'list' === t ? (a = !1) : (null != n && e[t] == r) || (e[t] = r);
                  }
                } catch (Sf) {}
              let c = !1;
              l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
                null == o || !1 === o
                  ? (!1 === o && '' !== e.getAttribute(t)) || (c ? e.removeAttributeNS(vb, t) : e.removeAttribute(t))
                  : (!a || 4 & i || r) &&
                    !s &&
                    ((o = !0 === o ? '' : o), c ? e.setAttributeNS(vb, t, o) : e.setAttribute(t, o));
            } else
              (t = '-' === t[2] ? t.slice(3) : pv(bv, l) ? l.slice(2) : l[2] + t.slice(3)),
                n && wv.rel(e, t, n, !1),
                o && wv.ael(e, t, o, !1);
          }
        },
        Ob = /\s/,
        Lb = (e) => (e ? e.split(Ob) : []),
        Nb = (e, t, n, o) => {
          const r = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$,
            i = (e && e.$attrs$) || yb,
            a = t.$attrs$ || yb;
          for (o in i) o in a || Ib(r, o, i[o], void 0, n, t.$flags$);
          for (o in a) Ib(r, o, i[o], a[o], n, t.$flags$);
        },
        _b = (e, t, n, o) => {
          const r = t.$children$[n];
          let i,
            a,
            l,
            s = 0;
          if (
            (fb ||
              ((hb = !0),
              'slot' === r.$tag$ && (cb && o.classList.add(cb + '-s'), (r.$flags$ |= r.$children$ ? 2 : 1))),
            null !== r.$text$)
          )
            i = r.$elm$ = vv.createTextNode(r.$text$);
          else if (1 & r.$flags$) i = r.$elm$ = vv.createTextNode('');
          else {
            if (
              (mb || (mb = 'svg' === r.$tag$),
              (i = r.$elm$ =
                vv.createElementNS(
                  mb ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                  2 & r.$flags$ ? 'slot-fb' : r.$tag$
                )),
              mb && 'foreignObject' === r.$tag$ && (mb = !1),
              Nb(null, r, mb),
              ((e) => null != e)(cb) && i['s-si'] !== cb && i.classList.add((i['s-si'] = cb)),
              r.$children$)
            )
              for (s = 0; s < r.$children$.length; ++s) (a = _b(e, r, s, i)), a && i.appendChild(a);
            'svg' === r.$tag$ ? (mb = !1) : 'foreignObject' === i.tagName && (mb = !0);
          }
          return (
            (i['s-hn'] = db),
            3 & r.$flags$ &&
              ((i['s-sr'] = !0),
              (i['s-cr'] = ub),
              (i['s-sn'] = r.$name$ || ''),
              (l = e && e.$children$ && e.$children$[n]),
              l && l.$tag$ === r.$tag$ && e.$elm$ && zb(e.$elm$, !1)),
            i
          );
        },
        zb = (e, t) => {
          wv.$flags$ |= 1;
          const n = e.childNodes;
          for (let o = n.length - 1; o >= 0; o--) {
            const e = n[o];
            e['s-hn'] !== db &&
              e['s-ol'] &&
              (Vb(e).insertBefore(e, Db(e)), e['s-ol'].remove(), (e['s-ol'] = void 0), (hb = !0)),
              t && zb(e, t);
          }
          wv.$flags$ &= -2;
        },
        Ab = (e, t, n, o, r, i) => {
          let a,
            l = (e['s-cr'] && e['s-cr'].parentNode) || e;
          for (l.shadowRoot && l.tagName === db && (l = l.shadowRoot); r <= i; ++r)
            o[r] && ((a = _b(null, n, r, e)), a && ((o[r].$elm$ = a), l.insertBefore(a, Db(t))));
        },
        Mb = (e, t, n, o, r) => {
          for (; t <= n; ++t)
            (o = e[t]) && ((r = o.$elm$), qb(o), (pb = !0), r['s-ol'] ? r['s-ol'].remove() : zb(r, !0), r.remove());
        },
        Bb = (e, t) => e.$tag$ === t.$tag$ && ('slot' === e.$tag$ ? e.$name$ === t.$name$ : e.$key$ === t.$key$),
        Db = (e) => (e && e['s-ol']) || e,
        Vb = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
        jb = (e, t) => {
          const n = (t.$elm$ = e.$elm$),
            o = e.$children$,
            r = t.$children$,
            i = t.$tag$,
            a = t.$text$;
          let l;
          null === a
            ? ((mb = 'svg' === i || ('foreignObject' !== i && mb)),
              'slot' === i || Nb(e, t, mb),
              null !== o && null !== r
                ? ((e, t, n, o) => {
                    let r,
                      i,
                      a = 0,
                      l = 0,
                      s = 0,
                      c = 0,
                      u = t.length - 1,
                      d = t[0],
                      f = t[u],
                      p = o.length - 1,
                      h = o[0],
                      m = o[p];
                    for (; a <= u && l <= p; )
                      if (null == d) d = t[++a];
                      else if (null == f) f = t[--u];
                      else if (null == h) h = o[++l];
                      else if (null == m) m = o[--p];
                      else if (Bb(d, h)) jb(d, h), (d = t[++a]), (h = o[++l]);
                      else if (Bb(f, m)) jb(f, m), (f = t[--u]), (m = o[--p]);
                      else if (Bb(d, m))
                        ('slot' !== d.$tag$ && 'slot' !== m.$tag$) || zb(d.$elm$.parentNode, !1),
                          jb(d, m),
                          e.insertBefore(d.$elm$, f.$elm$.nextSibling),
                          (d = t[++a]),
                          (m = o[--p]);
                      else if (Bb(f, h))
                        ('slot' !== d.$tag$ && 'slot' !== m.$tag$) || zb(f.$elm$.parentNode, !1),
                          jb(f, h),
                          e.insertBefore(f.$elm$, d.$elm$),
                          (f = t[--u]),
                          (h = o[++l]);
                      else {
                        for (s = -1, c = a; c <= u; ++c)
                          if (t[c] && null !== t[c].$key$ && t[c].$key$ === h.$key$) {
                            s = c;
                            break;
                          }
                        s >= 0
                          ? ((i = t[s]),
                            i.$tag$ !== h.$tag$
                              ? (r = _b(t && t[l], n, s, e))
                              : (jb(i, h), (t[s] = void 0), (r = i.$elm$)),
                            (h = o[++l]))
                          : ((r = _b(t && t[l], n, l, e)), (h = o[++l])),
                          r && Vb(d.$elm$).insertBefore(r, Db(d.$elm$));
                      }
                    a > u ? Ab(e, null == o[p + 1] ? null : o[p + 1].$elm$, n, o, l, p) : l > p && Mb(t, a, u);
                  })(n, o, t, r)
                : null !== r
                ? (null !== e.$text$ && (n.textContent = ''), Ab(n, null, t, r, 0, r.length - 1))
                : null !== o && Mb(o, 0, o.length - 1),
              mb && 'svg' === i && (mb = !1))
            : (l = n['s-cr'])
            ? (l.parentNode.textContent = a)
            : e.$text$ !== a && (n.data = a);
        },
        Hb = (e) => {
          const t = e.childNodes;
          let n, o, r, i, a, l;
          for (o = 0, r = t.length; o < r; o++)
            if (((n = t[o]), 1 === n.nodeType)) {
              if (n['s-sr'])
                for (a = n['s-sn'], n.hidden = !1, i = 0; i < r; i++)
                  if (((l = t[i].nodeType), t[i]['s-hn'] !== n['s-hn'] || '' !== a)) {
                    if (1 === l && a === t[i].getAttribute('slot')) {
                      n.hidden = !0;
                      break;
                    }
                  } else if (1 === l || (3 === l && '' !== t[i].textContent.trim())) {
                    n.hidden = !0;
                    break;
                  }
              Hb(n);
            }
        },
        Fb = [],
        Ub = (e) => {
          let t,
            n,
            o,
            r,
            i,
            a,
            l = 0;
          const s = e.childNodes,
            c = s.length;
          for (; l < c; l++) {
            if (((t = s[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
              for (o = n.parentNode.childNodes, r = t['s-sn'], a = o.length - 1; a >= 0; a--)
                (n = o[a]),
                  n['s-cn'] ||
                    n['s-nr'] ||
                    n['s-hn'] === t['s-hn'] ||
                    (Wb(n, r)
                      ? ((i = Fb.find((e) => e.$nodeToRelocate$ === n)),
                        (pb = !0),
                        (n['s-sn'] = n['s-sn'] || r),
                        i ? (i.$slotRefNode$ = t) : Fb.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                        n['s-sr'] &&
                          Fb.map((e) => {
                            Wb(e.$nodeToRelocate$, n['s-sn']) &&
                              ((i = Fb.find((e) => e.$nodeToRelocate$ === n)),
                              i && !e.$slotRefNode$ && (e.$slotRefNode$ = i.$slotRefNode$));
                          }))
                      : Fb.some((e) => e.$nodeToRelocate$ === n) || Fb.push({ $nodeToRelocate$: n }));
            1 === t.nodeType && Ub(t);
          }
        },
        Wb = (e, t) =>
          1 === e.nodeType
            ? (null === e.getAttribute('slot') && '' === t) || e.getAttribute('slot') === t
            : e['s-sn'] === t || '' === t,
        qb = (e) => {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(qb);
        },
        Qb = (e, t) => {
          const n = e.$hostElement$,
            o = e.$cmpMeta$,
            r = e.$vnode$ || kb(null, null),
            i = (a = t) && a.$tag$ === $b ? t : xb(null, null, t);
          var a;
          if (
            ((db = n.tagName),
            o.$attrsToReflect$ &&
              ((i.$attrs$ = i.$attrs$ || {}), o.$attrsToReflect$.map(([e, t]) => (i.$attrs$[t] = n[e]))),
            (i.$tag$ = null),
            (i.$flags$ |= 4),
            (e.$vnode$ = i),
            (i.$elm$ = r.$elm$ = n.shadowRoot || n),
            (cb = n['s-sc']),
            (ub = n['s-cr']),
            (fb = 0 != (1 & o.$flags$)),
            (pb = !1),
            jb(r, i),
            (wv.$flags$ |= 1),
            hb)
          ) {
            let e, t, n, o, r, a;
            Ub(i.$elm$);
            let l = 0;
            for (; l < Fb.length; l++)
              (e = Fb[l]),
                (t = e.$nodeToRelocate$),
                t['s-ol'] ||
                  ((n = vv.createTextNode('')), (n['s-nr'] = t), t.parentNode.insertBefore((t['s-ol'] = n), t));
            for (l = 0; l < Fb.length; l++)
              if (((e = Fb[l]), (t = e.$nodeToRelocate$), e.$slotRefNode$)) {
                for (
                  o = e.$slotRefNode$.parentNode, r = e.$slotRefNode$.nextSibling, n = t['s-ol'];
                  (n = n.previousSibling);

                )
                  if (
                    ((a = n['s-nr']),
                    a && a['s-sn'] === t['s-sn'] && o === a.parentNode && ((a = a.nextSibling), !a || !a['s-nr']))
                  ) {
                    r = a;
                    break;
                  }
                ((!r && o !== t.parentNode) || t.nextSibling !== r) &&
                  t !== r &&
                  (!t['s-hn'] && t['s-ol'] && (t['s-hn'] = t['s-ol'].parentNode.nodeName), o.insertBefore(t, r));
              } else 1 === t.nodeType && (t.hidden = !0);
          }
          pb && Hb(i.$elm$), (wv.$flags$ &= -2), (Fb.length = 0);
        },
        Kb = (e, t) => ((e.$flags$ |= 16), e.$ancestorComponent$, Rv(() => Xb(e, t))),
        Xb = (e, t) => {
          const n = e.$hostElement$,
            o = (e.$cmpMeta$.$tagName$, () => {}),
            r = n;
          let i;
          return (
            (i = Jb(r, t ? 'componentWillLoad' : 'componentWillUpdate')),
            (i = ev(i, () => Jb(r, 'componentWillRender'))),
            o(),
            ev(i, () => Yb(e, r, t))
          );
        },
        Yb = async (e, t, n) => {
          const o = e.$hostElement$,
            r = (e.$cmpMeta$.$tagName$, () => {});
          o['s-rc'], n && Tb(e);
          const i = (e.$cmpMeta$.$tagName$, () => {});
          Gb(e, t, o), i(), r(), Zb(e);
        },
        Gb = (e, t, n) => {
          try {
            (gb = t),
              (t = t.render && t.render()),
              (e.$flags$ &= -17),
              (e.$flags$ |= 2),
              (rb || ib) && (ab || ib) && (lb || Qb(e, t));
          } catch (Sf) {
            hv(Sf, e.$hostElement$);
          }
          return (gb = null), null;
        },
        Zb = (e) => {
          e.$cmpMeta$.$tagName$;
          const t = () => {},
            n = e.$hostElement$;
          e.$ancestorComponent$,
            Jb(n, 'componentDidRender'),
            64 & e.$flags$ ? (Jb(n, 'componentDidUpdate'), t()) : ((e.$flags$ |= 64), Jb(n, 'componentDidLoad'), t());
        },
        Jb = (e, t, n) => {
          if (e && e[t])
            try {
              return e[t](n);
            } catch (Sf) {
              hv(Sf);
            }
        },
        ev = (e, t) => (e && e.then ? e.then(t) : t()),
        tv = (e, t, n, o) => {
          const r = dv(e),
            i = e,
            a = r.$instanceValues$.get(t),
            l = r.$flags$,
            s = i;
          var c, u;
          (c = n),
            (u = o.$members$[t][0]),
            (n =
              null == c || wb(c)
                ? c
                : 4 & u
                ? 'false' !== c && ('' === c || !!c)
                : 2 & u
                ? parseFloat(c)
                : 1 & u
                ? String(c)
                : c);
          const d = Number.isNaN(a) && Number.isNaN(n);
          if (n !== a && !d) {
            if ((r.$instanceValues$.set(t, n), o.$watchers$ && 128 & l)) {
              const e = o.$watchers$[t];
              e &&
                e.map((e) => {
                  try {
                    s[e](n, a, t);
                  } catch (Sf) {
                    hv(Sf, i);
                  }
                });
            }
            if (2 == (18 & l)) {
              if (s.componentShouldUpdate && !1 === s.componentShouldUpdate(n, a, t)) return;
              Kb(r, !1);
            }
          }
        },
        nv = (e, t, n) => {
          if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            const n = Object.entries(t.$members$),
              o = e.prototype;
            n.map(([e, [n]]) => {
              (31 & n || 32 & n) &&
                Object.defineProperty(o, e, {
                  get() {
                    return (t = e), dv(this).$instanceValues$.get(t);
                    var t;
                  },
                  set(n) {
                    tv(this, e, n, t);
                  },
                  configurable: !0,
                  enumerable: !0,
                });
            });
            {
              const r = new Map();
              (o.attributeChangedCallback = function (e, t, n) {
                wv.jmp(() => {
                  const t = r.get(e);
                  if (this.hasOwnProperty(t)) (n = this[t]), delete this[t];
                  else if (o.hasOwnProperty(t) && 'number' == typeof this[t] && this[t] == n) return;
                  this[t] = (null !== n || 'boolean' != typeof this[t]) && n;
                });
              }),
                (e.observedAttributes = n
                  .filter(([e, t]) => 15 & t[0])
                  .map(([e, n]) => {
                    const o = n[1] || e;
                    return r.set(o, e), 512 & n[0] && t.$attrsToReflect$.push([e, o]), o;
                  }));
            }
          }
          return e;
        },
        ov = async (e, t, n, o, r) => {
          if (
            0 == (32 & t.$flags$) &&
            ((r = e.constructor),
            (t.$flags$ |= 32),
            customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
            r.style)
          ) {
            let o = r.style;
            'string' != typeof o && (o = o[(t.$modeName$ = ((e) => gv.map((t) => t(e)).find((e) => !!e))(e))]);
            const i = Rb(n, t.$modeName$);
            if (!mv.has(i)) {
              const e = (n.$tagName$, () => {});
              ((e, t, n) => {
                let o = mv.get(e);
                kv && n ? ((o = o || new CSSStyleSheet()), 'string' == typeof o ? (o = t) : o.replaceSync(t)) : (o = t),
                  mv.set(e, o);
              })(i, o, !!(1 & n.$flags$)),
                e();
            }
          }
          t.$ancestorComponent$, Kb(t, !0);
        },
        rv = (e) => {
          const t = (e['s-cr'] = vv.createComment(''));
          (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
        },
        iv = (e, t) => {
          const n = { $flags$: t[0], $tagName$: t[1] };
          (n.$members$ = t[2]), (n.$listeners$ = t[3]), (n.$watchers$ = e.$watchers$), (n.$attrsToReflect$ = []);
          const o = e.prototype.connectedCallback,
            r = e.prototype.disconnectedCallback;
          return (
            Object.assign(e.prototype, {
              __registerHost() {
                fv(this, n);
              },
              connectedCallback() {
                ((e) => {
                  if (0 == (1 & wv.$flags$)) {
                    const t = dv(e),
                      n = t.$cmpMeta$,
                      o = (n.$tagName$, () => {});
                    1 & t.$flags$
                      ? (av(e, t, n.$listeners$), t.$lazyInstance$)
                      : ((t.$flags$ |= 1),
                        12 & n.$flags$ && rv(e),
                        n.$members$ &&
                          Object.entries(n.$members$).map(([t, [n]]) => {
                            if (31 & n && e.hasOwnProperty(t)) {
                              const n = e[t];
                              delete e[t], (e[t] = n);
                            }
                          }),
                        ov(e, t, n)),
                      o();
                  }
                })(this),
                  o && o.call(this);
              },
              disconnectedCallback() {
                ((e) => {
                  if (0 == (1 & wv.$flags$)) {
                    const t = dv(e);
                    t.$rmListeners$ && (t.$rmListeners$.map((e) => e()), (t.$rmListeners$ = void 0));
                  }
                })(this),
                  r && r.call(this);
              },
              __attachShadow() {
                this.attachShadow({ mode: 'open', delegatesFocus: !!(16 & n.$flags$) });
              },
            }),
            (e.is = n.$tagName$),
            nv(e, n)
          );
        },
        av = (e, t, n, o) => {
          n &&
            n.map(([n, o, r]) => {
              const i = sv(e, n),
                a = lv(t, r),
                l = cv(n);
              wv.ael(i, o, a, l), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => wv.rel(i, o, a, l));
            });
        },
        lv = (e, t) => (n) => {
          try {
            sb || e.$hostElement$[t](n);
          } catch (Sf) {
            hv(Sf);
          }
        },
        sv = (e, t) => (4 & t ? vv : 8 & t ? bv : 16 & t ? vv.body : e),
        cv = (e) => (xv ? { passive: 0 != (1 & e), capture: 0 != (2 & e) } : 0 != (2 & e)),
        uv = new WeakMap(),
        dv = (e) => uv.get(e),
        fv = (e, t) => {
          const n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
          return av(e, n, t.$listeners$), uv.set(e, n);
        },
        pv = (e, t) => t in e,
        hv = (e, t) => (0, console.error)(e, t),
        mv = new Map(),
        gv = [],
        bv = 'undefined' != typeof window ? window : {},
        vv = bv.document || { head: {} },
        yv = bv.HTMLElement || class {},
        wv = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: (e) => e(),
          raf: (e) => requestAnimationFrame(e),
          ael: (e, t, n, o) => e.addEventListener(t, n, o),
          rel: (e, t, n, o) => e.removeEventListener(t, n, o),
          ce: (e, t) => new CustomEvent(e, t),
        },
        xv = (() => {
          let e = !1;
          try {
            vv.addEventListener(
              'e',
              null,
              Object.defineProperty({}, 'passive', {
                get() {
                  e = !0;
                },
              })
            );
          } catch (Sf) {}
          return e;
        })(),
        kv = (() => {
          try {
            return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
          } catch (Sf) {}
          return !1;
        })(),
        $v = [],
        Ev = [],
        Sv = (e, t) => (n) => {
          e.push(n), bb || ((bb = !0), t && 4 & wv.$flags$ ? Tv(Pv) : wv.raf(Pv));
        },
        Cv = (e) => {
          for (let t = 0; t < e.length; t++)
            try {
              e[t](performance.now());
            } catch (Sf) {
              hv(Sf);
            }
          e.length = 0;
        },
        Pv = () => {
          Cv($v), Cv(Ev), (bb = $v.length > 0) && wv.raf(Pv);
        },
        Tv = (e) => ((e) => Promise.resolve(e))().then(e),
        Rv = Sv(Ev, !0);
      let Iv;
      const Ov = (e) => {
          const t = (() => {
            if ('undefined' == typeof window) return new Map();
            if (!Iv) {
              const e = window;
              (e.Ionicons = e.Ionicons || {}), (Iv = e.Ionicons.map = e.Ionicons.map || new Map());
            }
            return Iv;
          })().get(e);
          return (
            t ||
            ((e) => {
              const t = new URL(e, wv.$resourcesUrl$);
              return t.origin !== bv.location.origin ? t.href : t.pathname;
            })(`svg/${e}.svg`)
          );
        },
        Lv = (e, t, n, o, r) => (
          (n = 'ios' === (n && Av(n)) ? 'ios' : 'md'),
          o && 'ios' === n
            ? (e = Av(o))
            : r && 'md' === n
            ? (e = Av(r))
            : (e || !t || _v(t) || (e = t), zv(e) && (e = Av(e))),
          zv(e) && '' !== e.trim() ? ('' !== e.replace(/[a-z]|-|\d/gi, '') ? null : e) : null
        ),
        Nv = (e) => (zv(e) && ((e = e.trim()), _v(e)) ? e : null),
        _v = (e) => e.length > 0 && /(\/|\.)/.test(e),
        zv = (e) => 'string' == typeof e,
        Av = (e) => e.toLowerCase(),
        Mv = (e) => {
          if (1 === e.nodeType) {
            if ('script' === e.nodeName.toLowerCase()) return !1;
            for (let t = 0; t < e.attributes.length; t++) {
              const n = e.attributes[t].name;
              if (zv(n) && 0 === n.toLowerCase().indexOf('on')) return !1;
            }
            for (let t = 0; t < e.childNodes.length; t++) if (!Mv(e.childNodes[t])) return !1;
          }
          return !0;
        },
        Bv = new Map(),
        Dv = new Map();
      let Vv;
      const jv = (e, t) => {
          let n = Dv.get(e);
          if (!n) {
            if ('undefined' == typeof fetch || 'undefined' == typeof document) return Bv.set(e, ''), Promise.resolve();
            if (((e) => e.startsWith('data:image/svg+xml'))(e) && ((e) => -1 !== e.indexOf(';utf8,'))(e)) {
              Vv || (Vv = new DOMParser());
              const t = Vv.parseFromString(e, 'text/html').querySelector('svg');
              return t && Bv.set(e, t.outerHTML), Promise.resolve();
            }
            (n = fetch(e).then((n) => {
              if (n.ok)
                return n.text().then((n) => {
                  n &&
                    !1 !== t &&
                    (n = ((e) => {
                      const t = document.createElement('div');
                      t.innerHTML = e;
                      for (let o = t.childNodes.length - 1; o >= 0; o--)
                        'svg' !== t.childNodes[o].nodeName.toLowerCase() && t.removeChild(t.childNodes[o]);
                      const n = t.firstElementChild;
                      if (n && 'svg' === n.nodeName.toLowerCase()) {
                        const e = n.getAttribute('class') || '';
                        if ((n.setAttribute('class', (e + ' s-ion-icon').trim()), Mv(n))) return t.innerHTML;
                      }
                      return '';
                    })(n)),
                    Bv.set(e, n || '');
                });
              Bv.set(e, '');
            })),
              Dv.set(e, n);
          }
          return n;
        },
        Hv = iv(
          class extends yv {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.iconName = null),
                (this.inheritedAttributes = {}),
                (this.isVisible = !1),
                (this.mode = Fv()),
                (this.lazy = !1),
                (this.sanitize = !0);
            }
            componentWillLoad() {
              this.inheritedAttributes = ((e, t = []) => {
                const n = {};
                return (
                  t.forEach((t) => {
                    e.hasAttribute(t) &&
                      (null !== e.getAttribute(t) && (n[t] = e.getAttribute(t)), e.removeAttribute(t));
                  }),
                  n
                );
              })(this.el, ['aria-label']);
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
              if (this.lazy && 'undefined' != typeof window && window.IntersectionObserver) {
                const o = (this.io = new window.IntersectionObserver(
                  (e) => {
                    e[0].isIntersecting && (o.disconnect(), (this.io = void 0), n());
                  },
                  { rootMargin: t }
                ));
                o.observe(e);
              } else n();
            }
            loadIcon() {
              if (this.isVisible) {
                const e = ((e) => {
                  let t = Nv(e.src);
                  if (t) return t;
                  if (((t = Lv(e.name, e.icon, e.mode, e.ios, e.md)), t)) return Ov(t);
                  if (e.icon) {
                    if (((t = Nv(e.icon)), t)) return t;
                    if (((t = Nv(e.icon[e.mode])), t)) return t;
                  }
                  return null;
                })(this);
                e &&
                  (Bv.has(e)
                    ? (this.svgContent = Bv.get(e))
                    : jv(e, this.sanitize).then(() => (this.svgContent = Bv.get(e))));
              }
              this.iconName = Lv(this.name, this.icon, this.mode, this.ios, this.md);
            }
            render() {
              const { flipRtl: e, iconName: t, inheritedAttributes: n, el: o } = this,
                r = this.mode || 'md',
                i = !!t && (t.includes('arrow') || t.includes('chevron')) && !1 !== e,
                a = e || i;
              return xb(
                $b,
                Object.assign(
                  {
                    role: 'img',
                    class: Object.assign(Object.assign({ [r]: !0 }, Uv(this.color)), {
                      [`icon-${this.size}`]: !!this.size,
                      'flip-rtl': a,
                      'icon-rtl':
                        a &&
                        ((l = o),
                        l && '' !== l.dir
                          ? 'rtl' === l.dir.toLowerCase()
                          : 'rtl' === (null === document || void 0 === document ? void 0 : document.dir.toLowerCase())),
                    }),
                  },
                  n
                ),
                this.svgContent
                  ? xb('div', { class: 'icon-inner', innerHTML: this.svgContent })
                  : xb('div', { class: 'icon-inner' })
              );
              var l;
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
              return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
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
        Fv = () => ('undefined' != typeof document && document.documentElement.getAttribute('mode')) || 'md',
        Uv = (e) => (e ? { 'ion-color': !0, [`ion-color-${e}`]: !0 } : null),
        Wv = function () {
          'undefined' != typeof customElements &&
            ['ion-icon'].forEach((e) => {
              'ion-icon' === e && (customElements.get(e) || customElements.define(e, Hv));
            });
        },
        qv = H.createContext({
          onIonViewWillEnter: () => {},
          ionViewWillEnter: () => {},
          onIonViewDidEnter: () => {},
          ionViewDidEnter: () => {},
          onIonViewWillLeave: () => {},
          ionViewWillLeave: () => {},
          onIonViewDidLeave: () => {},
          ionViewDidLeave: () => {},
        }),
        Qv = H.createContext({
          getIonRedirect: () => {},
          getIonRoute: () => {},
          getPageManager: () => {},
          getStackManager: () => {},
          goBack: (e) => {
            'undefined' != typeof window &&
              ('string' == typeof e ? (window.location.pathname = e) : window.history.back());
          },
          navigate: (e) => {
            'undefined' != typeof window && (window.location.pathname = e);
          },
          hasIonicRouter: () => !1,
          routeInfo: void 0,
          setCurrentTab: () => {},
          changeTab: (e, t) => {
            'undefined' != typeof window && (window.location.pathname = t);
          },
          resetTab: (e, t) => {
            'undefined' != typeof window && (window.location.pathname = t);
          },
        }),
        Kv = (e) => e.replace(/([A-Z])/g, (e) => `-${e[0].toLowerCase()}`),
        Xv = (e, t, n) => {
          const o = t.className || t.class,
            r = n.className || n.class,
            i = Zv(e),
            a = Zv(o ? o.split(' ') : []),
            l = Zv(r ? r.split(' ') : []),
            s = [];
          return (
            i.forEach((e) => {
              a.has(e) ? (s.push(e), a.delete(e)) : l.has(e) || s.push(e);
            }),
            a.forEach((e) => s.push(e)),
            s.join(' ')
          );
        },
        Yv = (e) => {
          if ('undefined' == typeof document) return !0;
          {
            const t = 'on' + e;
            let n = t in document;
            if (!n) {
              const e = document.createElement('div');
              e.setAttribute(t, 'return;'), (n = 'function' == typeof e[t]);
            }
            return n;
          }
        },
        Gv = (e, t, n) => {
          const o = e.__events || (e.__events = {}),
            r = o[t];
          r && e.removeEventListener(t, r),
            e.addEventListener(
              t,
              (o[t] = function (e) {
                n && n.call(this, e);
              })
            );
        },
        Zv = (e) => {
          const t = new Map();
          return e.forEach((e) => t.set(e, e)), t;
        },
        Jv =
          (...e) =>
          (t) => {
            e.forEach((e) => {
              ((e, t) => {
                'function' == typeof e ? e(t) : null != e && (e.current = t);
              })(e, t);
            });
          },
        ey = (e, t, n, o) => {
          void 0 !== o && o();
          const r = e
              .toLowerCase()
              .split('-')
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(''),
            i = class extends H.Component {
              constructor(e) {
                super(e),
                  (this.setComponentElRef = (e) => {
                    this.componentEl = e;
                  });
              }
              componentDidMount() {
                this.componentDidUpdate(this.props);
              }
              componentDidUpdate(e) {
                ((e, t, n = {}) => {
                  if (e instanceof Element) {
                    const o = Xv(e.classList, t, n);
                    '' !== o && (e.className = o),
                      Object.keys(t).forEach((n) => {
                        if (
                          'children' !== n &&
                          'style' !== n &&
                          'ref' !== n &&
                          'class' !== n &&
                          'className' !== n &&
                          'forwardedRef' !== n
                        )
                          if (0 === n.indexOf('on') && n[2] === n[2].toUpperCase()) {
                            const o = n.substring(2),
                              r = o[0].toLowerCase() + o.substring(1);
                            Yv(r) || Gv(e, r, t[n]);
                          } else (e[n] = t[n]), 'string' == typeof t[n] && e.setAttribute(Kv(n), t[n]);
                      });
                  }
                })(this.componentEl, this.props, e);
              }
              render() {
                const t = this.props,
                  { children: o, forwardedRef: r, style: i, className: a, ref: l } = t,
                  s = ig(t, ['children', 'forwardedRef', 'style', 'className', 'ref']);
                let c = Object.keys(s).reduce((e, t) => {
                  const n = s[t];
                  if (0 === t.indexOf('on') && t[2] === t[2].toUpperCase()) {
                    const o = t.substring(2).toLowerCase();
                    'undefined' != typeof document && Yv(o) && (e[t] = n);
                  } else {
                    const o = typeof n;
                    ('string' !== o && 'boolean' !== o && 'number' !== o) || (e[Kv(t)] = n);
                  }
                  return e;
                }, {});
                n && (c = n(this.props, c));
                const u = Object.assign(Object.assign({}, c), { ref: Jv(r, this.setComponentElRef), style: i });
                return j.createElement(e, u, o);
              }
              static get displayName() {
                return r;
              }
            };
          return (
            t && (i.contextType = t),
            ((e, t) => {
              const n = (t, n) => H.createElement(e, Object.assign({}, t, { forwardedRef: n }));
              return (n.displayName = t), H.forwardRef(n);
            })(i, r)
          );
        },
        ty = ey('ion-content', void 0, void 0, bg),
        ny = ey('ion-header', void 0, void 0, Mg),
        oy = ey('ion-title', void 0, void 0, Ug),
        ry = ey('ion-toolbar', void 0, void 0, qg),
        iy = (e, t) => {
          const n = (t, n) => H.createElement(e, Object.assign({}, t, { forwardedRef: n }));
          return (n.displayName = t), H.forwardRef(n);
        },
        ay = () => {
          if ('undefined' != typeof window) {
            const e = window.Ionic;
            if (e && e.config) return e.config;
          }
          return null;
        },
        ly = H.createContext({ addOverlay: () => {}, removeOverlay: () => {} }),
        sy = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
          const [n, o] = j.useState({}),
            r = j.useRef({});
          (r.current = n),
            j.useEffect(() => {
              e(i), t(a);
            }, []);
          const i = (e, t, n) => {
              const i = Object.assign({}, r.current);
              (i[e] = { component: t, containerElement: n }), o(i);
            },
            a = (e) => {
              const t = Object.assign({}, r.current);
              delete t[e], o(t);
            },
            l = Object.keys(n);
          return H.createElement(
            H.Fragment,
            null,
            l.map((e) => {
              const t = n[e];
              return ld.createPortal(t.component, t.containerElement, `overlay-${e}`);
            })
          );
        },
        cy = ey('ion-tab-button', void 0, void 0, ob),
        uy = ey('ion-tab-bar', void 0, void 0, tb),
        dy = ey('ion-router-outlet', void 0, void 0, Jg),
        fy = ey('ion-app', void 0, void 0, Gg),
        py = ey('ion-icon', void 0, void 0, Wv),
        hy = (() =>
          class extends H.Component {
            constructor(e) {
              super(e),
                (this.ionContext = {
                  addOverlay: (e, t, n) => {
                    this.addOverlayCallback && this.addOverlayCallback(e, t, n);
                  },
                  removeOverlay: (e) => {
                    this.removeOverlayCallback && this.removeOverlayCallback(e);
                  },
                });
            }
            render() {
              return H.createElement(
                ly.Provider,
                { value: this.ionContext },
                H.createElement(fy, Object.assign({}, this.props), this.props.children),
                H.createElement(sy, {
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
        my = H.createContext({ registerIonPage: () => {}, isInOutlet: () => !1 });
      class gy extends H.PureComponent {
        constructor(e) {
          super(e),
            (this.ionPageElementRef = H.createRef()),
            (this.stableMergedRefs = Jv(this.ionPageElementRef, this.props.forwardedRef));
        }
        componentDidMount() {
          this.ionPageElementRef.current &&
            (this.context.isInOutlet() && this.ionPageElementRef.current.classList.add('ion-page-invisible'),
            this.context.registerIonPage(this.ionPageElementRef.current, this.props.routeInfo),
            this.ionPageElementRef.current.addEventListener(
              'ionViewWillEnter',
              this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.addEventListener('ionViewDidEnter', this.ionViewDidEnterHandler.bind(this)),
            this.ionPageElementRef.current.addEventListener(
              'ionViewWillLeave',
              this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionPageElementRef.current.addEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler.bind(this)));
        }
        componentWillUnmount() {
          this.ionPageElementRef.current &&
            (this.ionPageElementRef.current.removeEventListener(
              'ionViewWillEnter',
              this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
              'ionViewDidEnter',
              this.ionViewDidEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
              'ionViewWillLeave',
              this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
              'ionViewDidLeave',
              this.ionViewDidLeaveHandler.bind(this)
            ));
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
          const e = this.props,
            { className: t, children: n, routeInfo: o, forwardedRef: r } = e,
            i = ig(e, ['className', 'children', 'routeInfo', 'forwardedRef']);
          return H.createElement(
            qv.Consumer,
            null,
            (e) => (
              (this.ionLifeCycleContext = e),
              H.createElement(
                'div',
                Object.assign({ className: t ? `${t} ion-page` : 'ion-page', ref: this.stableMergedRefs }, i),
                n
              )
            )
          );
        }
        static get contextType() {
          return my;
        }
      }
      class by extends H.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = this.props,
            { className: t, children: n, forwardedRef: o } = e,
            r = ig(e, ['className', 'children', 'forwardedRef']);
          return this.context.hasIonicRouter()
            ? H.createElement(
                gy,
                Object.assign({ className: t ? `${t}` : '', routeInfo: this.context.routeInfo, forwardedRef: o }, r),
                n
              )
            : H.createElement('div', Object.assign({ className: t ? `ion-page ${t}` : 'ion-page', ref: o }, r), n);
        }
        static get displayName() {
          return 'IonPage';
        }
        static get contextType() {
          return Qv;
        }
      }
      const vy = iy(by, 'IonPage'),
        yy = ey('ion-nav', void 0, void 0, Hg);
      iy((e) => {
        var { children: t, forwardedRef: n } = e,
          o = ig(e, ['children', 'forwardedRef']);
        const [r, i] = j.useState([]),
          a = (e) => i((t) => [...t, e]),
          l = (e) => i((t) => t.filter((t) => t !== e)),
          s = j.useMemo(
            () =>
              ((e, t) => {
                const n = new WeakMap();
                return {
                  attachViewToDom: async (t, o, r, i) => {
                    const a = document.createElement('div');
                    i && a.classList.add(...i), t.appendChild(a);
                    const l = o(r),
                      s = ad.createPortal(l, a);
                    return n.set(a, s), e(s), Promise.resolve(a);
                  },
                  removeViewFromDom: (e, o) => {
                    const r = n.get(o);
                    return r && t(r), o.remove(), Promise.resolve();
                  },
                };
              })(a, l),
            []
          );
        return H.createElement(yy, Object.assign({ delegate: s, ref: n }, o), r);
      }, 'IonNav'),
        H.createContext({ activeTab: void 0, selectTab: () => !1 });
      const wy = 'undefined' != typeof HTMLElement ? HTMLElement : class {};
      class xy extends H.Component {
        constructor(e) {
          super(e), (this.outletIsReady = !1);
        }
        componentDidMount() {
          this.ionRouterOutlet &&
            (this.outletIsReady ||
              tm(this.ionRouterOutlet, () => {
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
          const e = this.props,
            { StackManager: t, children: n, routeInfo: o } = e,
            r = ig(e, ['StackManager', 'children', 'routeInfo']);
          return H.createElement(
            qv.Consumer,
            null,
            (e) => (
              (this.ionLifeCycleContext = e),
              H.createElement(
                t,
                { routeInfo: o },
                H.createElement(dy, Object.assign({ setRef: (e) => (this.ionRouterOutlet = e) }, r), n)
              )
            )
          );
        }
        static get contextType() {
          return my;
        }
      }
      class ky extends H.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = this.context.getStackManager(),
            t = this.props,
            { children: n, forwardedRef: o } = t,
            r = ig(t, ['children', 'forwardedRef']);
          return this.context.hasIonicRouter()
            ? r.ionPage
              ? H.createElement(xy, Object.assign({ StackManager: e, routeInfo: this.context.routeInfo }, r), n)
              : H.createElement(
                  e,
                  { routeInfo: this.context.routeInfo },
                  H.createElement(dy, Object.assign({}, r, { forwardedRef: o }), n)
                )
            : H.createElement(dy, Object.assign({ ref: o }, this.props), this.props.children);
        }
        static get contextType() {
          return Qv;
        }
      }
      const $y = iy(ky, 'IonRouterOutlet'),
        Ey = (() =>
          class extends H.Component {
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
              const e = ig(this.props, ['onClick']);
              return H.createElement(cy, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, e));
            }
            static get displayName() {
              return 'IonTabButton';
            }
          })();
      class Sy extends H.PureComponent {
        constructor(e) {
          super(e), (this.setActiveTabOnContext = (e) => {});
          const t = {};
          H.Children.forEach(e.children, (n) => {
            var o, r, i, a;
            null != n &&
              'object' == typeof n &&
              n.props &&
              (n.type === Ey || n.type.isTabButton) &&
              (t[n.props.tab] = {
                originalHref: n.props.href,
                currentHref: n.props.href,
                originalRouteOptions:
                  n.props.href === (null === (o = e.routeInfo) || void 0 === o ? void 0 : o.pathname)
                    ? null === (r = e.routeInfo) || void 0 === r
                      ? void 0
                      : r.routeOptions
                    : void 0,
                currentRouteOptions:
                  n.props.href === (null === (i = e.routeInfo) || void 0 === i ? void 0 : i.pathname)
                    ? null === (a = e.routeInfo) || void 0 === a
                      ? void 0
                      : a.routeOptions
                    : void 0,
              });
          }),
            (this.state = { tabs: t }),
            (this.onTabButtonClick = this.onTabButtonClick.bind(this)),
            (this.renderTabButton = this.renderTabButton.bind(this)),
            (this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this)),
            (this.selectTab = this.selectTab.bind(this));
        }
        componentDidMount() {
          const e = this.state.tabs,
            t = Object.keys(e).find((t) => {
              const n = e[t].originalHref;
              return this.props.routeInfo.pathname.startsWith(n);
            });
          t && this.setState({ activeTab: t });
        }
        componentDidUpdate() {
          this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
        }
        selectTab(e) {
          const t = this.state.tabs[e];
          return (
            !!t &&
            (this.onTabButtonClick(
              new CustomEvent('ionTabButtonClick', {
                detail: { href: t.currentHref, tab: e, selected: e === this.state.activeTab, routeOptions: void 0 },
              })
            ),
            !0)
          );
        }
        static getDerivedStateFromProps(e, t) {
          var n, o, r;
          const i = Object.assign({}, t.tabs),
            a = Object.keys(t.tabs).find((n) => {
              const o = t.tabs[n].originalHref;
              return e.routeInfo.pathname.startsWith(o);
            });
          H.Children.forEach(e.children, (e) => {
            if (null != e && 'object' == typeof e && e.props && (e.type === Ey || e.type.isTabButton)) {
              const t = i[e.props.tab];
              (t && t.originalHref === e.props.href) ||
                (i[e.props.tab] = {
                  originalHref: e.props.href,
                  currentHref: e.props.href,
                  originalRouteOptions: e.props.routeOptions,
                  currentRouteOptions: e.props.routeOptions,
                });
            }
          });
          const { activeTab: l } = t;
          if (a && l) {
            const s = t.tabs[l].currentHref,
              c = t.tabs[l].currentRouteOptions;
            (a === l &&
              s === (null === (n = e.routeInfo) || void 0 === n ? void 0 : n.pathname) &&
              c === (null === (o = e.routeInfo) || void 0 === o ? void 0 : o.routeOptions)) ||
              ((i[a] = {
                originalHref: i[a].originalHref,
                currentHref: e.routeInfo.pathname + (e.routeInfo.search || ''),
                originalRouteOptions: i[a].originalRouteOptions,
                currentRouteOptions: null === (r = e.routeInfo) || void 0 === r ? void 0 : r.routeOptions,
              }),
              'pop' === e.routeInfo.routeAction &&
                a !== l &&
                (i[l] = {
                  originalHref: i[l].originalHref,
                  currentHref: i[l].originalHref,
                  originalRouteOptions: i[l].originalRouteOptions,
                  currentRouteOptions: i[l].currentRouteOptions,
                }));
          }
          return a && e.onSetCurrentTab(a, e.routeInfo), { activeTab: a, tabs: i };
        }
        onTabButtonClick(e, t) {
          const n = this.state.tabs[e.detail.tab],
            o = n.originalHref,
            r = e.detail.href,
            { activeTab: i } = this.state;
          t && t(e),
            i === e.detail.tab
              ? o !== r && this.context.resetTab(e.detail.tab, o, n.originalRouteOptions)
              : (this.props.onIonTabsWillChange &&
                  this.props.onIonTabsWillChange(
                    new CustomEvent('ionTabWillChange', { detail: { tab: e.detail.tab } })
                  ),
                this.props.onIonTabsDidChange &&
                  this.props.onIonTabsDidChange(new CustomEvent('ionTabDidChange', { detail: { tab: e.detail.tab } })),
                this.setActiveTabOnContext(e.detail.tab),
                this.context.changeTab(e.detail.tab, r, e.detail.routeOptions));
        }
        renderTabButton(e) {
          return (t) => {
            var n, o;
            if (null != t && t.props && (t.type === Ey || t.type.isTabButton)) {
              const r =
                  t.props.tab === e
                    ? null === (n = this.props.routeInfo) || void 0 === n
                      ? void 0
                      : n.pathname
                    : this.state.tabs[t.props.tab].currentHref,
                i =
                  t.props.tab === e
                    ? null === (o = this.props.routeInfo) || void 0 === o
                      ? void 0
                      : o.routeOptions
                    : this.state.tabs[t.props.tab].currentRouteOptions;
              return H.cloneElement(t, {
                href: r,
                routeOptions: i,
                onClick: (e) => this.onTabButtonClick(e, t.props.onClick),
              });
            }
            return null;
          };
        }
        render() {
          const { activeTab: e } = this.state;
          return H.createElement(
            uy,
            Object.assign({}, this.props, { selectedTab: e }),
            H.Children.map(this.props.children, this.renderTabButton(e))
          );
        }
        static get contextType() {
          return Qv;
        }
      }
      const Cy = H.memo((e) => {
        var { forwardedRef: t } = e,
          n = ig(e, ['forwardedRef']);
        const o = j.useContext(Qv);
        return H.createElement(
          Sy,
          Object.assign({ ref: t }, n, {
            routeInfo: n.routeInfo || o.routeInfo || { pathname: window.location.pathname },
            onSetCurrentTab: o.setCurrentTab,
          }),
          n.children
        );
      });
      iy(Cy, 'IonTabBar');
      class Py extends wy {
        constructor() {
          super();
        }
      }
      'undefined' != typeof window &&
        window.customElements &&
        (window.customElements.get('ion-tabs') || window.customElements.define('ion-tabs', Py));
      class Ty extends H.PureComponent {
        constructor(e) {
          super(e),
            this.props.name &&
              console.warn(
                'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
              );
        }
        render() {
          var e, t;
          const n = this.props,
            { icon: o, ios: r, md: i, mode: a } = n,
            l = ig(n, ['icon', 'ios', 'md', 'mode']);
          let s;
          const c = ay(),
            u = a || (null == c ? void 0 : c.get('mode'));
          return (
            (s =
              r || i
                ? 'ios' === u
                  ? null !== (e = null != r ? r : i) && void 0 !== e
                    ? e
                    : o
                  : null !== (t = null != i ? i : r) && void 0 !== t
                  ? t
                  : o
                : o),
            H.createElement(py, Object.assign({ ref: this.props.forwardedRef, icon: s }, l), this.props.children)
          );
        }
        static get contextType() {
          return Qv;
        }
      }
      iy(Ty, 'IonIcon');
      class Ry extends H.PureComponent {
        render() {
          const e = this.context.getIonRoute();
          return this.context.hasIonicRouter() && Ry
            ? H.createElement(e, Object.assign({}, this.props))
            : (console.error(
                'You either do not have an Ionic Router package, or your router does not support using <IonRoute>'
              ),
              null);
        }
        static get contextType() {
          return Qv;
        }
      }
      H.PureComponent;
      const Iy = H.createContext({
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
      H.PureComponent;
      const Oy = { main: 0 },
        Ly = (e = 'main') => {
          var t;
          const n = (null !== (t = Oy[e]) && void 0 !== t ? t : 0) + 1;
          return (Oy[e] = n), n.toString();
        },
        Ny = H.createContext({
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
      class _y extends H.Component {
        constructor(e) {
          super(e),
            (this.ionLifeCycleContext = new (class {
              constructor() {
                (this.ionViewWillEnterCallbacks = []),
                  (this.ionViewDidEnterCallbacks = []),
                  (this.ionViewWillLeaveCallbacks = []),
                  (this.ionViewDidLeaveCallbacks = []);
              }
              onIonViewWillEnter(e) {
                if (e.id) {
                  const t = this.ionViewWillEnterCallbacks.findIndex((t) => t.id === e.id);
                  t > -1 ? (this.ionViewWillEnterCallbacks[t] = e) : this.ionViewWillEnterCallbacks.push(e);
                } else this.ionViewWillEnterCallbacks.push(e);
              }
              ionViewWillEnter() {
                this.ionViewWillEnterCallbacks.forEach((e) => e());
              }
              onIonViewDidEnter(e) {
                if (e.id) {
                  const t = this.ionViewDidEnterCallbacks.findIndex((t) => t.id === e.id);
                  t > -1 ? (this.ionViewDidEnterCallbacks[t] = e) : this.ionViewDidEnterCallbacks.push(e);
                } else this.ionViewDidEnterCallbacks.push(e);
              }
              ionViewDidEnter() {
                this.ionViewDidEnterCallbacks.forEach((e) => e());
              }
              onIonViewWillLeave(e) {
                if (e.id) {
                  const t = this.ionViewWillLeaveCallbacks.findIndex((t) => t.id === e.id);
                  t > -1 ? (this.ionViewWillLeaveCallbacks[t] = e) : this.ionViewWillLeaveCallbacks.push(e);
                } else this.ionViewWillLeaveCallbacks.push(e);
              }
              ionViewWillLeave() {
                this.ionViewWillLeaveCallbacks.forEach((e) => e());
              }
              onIonViewDidLeave(e) {
                if (e.id) {
                  const t = this.ionViewDidLeaveCallbacks.findIndex((t) => t.id === e.id);
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
            })()),
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
          const { show: e } = this.state;
          return H.createElement(qv.Provider, { value: this.ionLifeCycleContext }, e && this.props.children);
        }
      }
      class zy {
        constructor() {
          (this.locationHistory = []), (this.tabHistory = {});
        }
        add(e) {
          'push' === e.routeAction || null == e.routeAction
            ? this._add(e)
            : 'pop' === e.routeAction
            ? this._pop(e)
            : 'replace' === e.routeAction && this._replace(e),
            'root' === e.routeDirection && (this._clear(), this._add(e));
        }
        clearTabStack(e) {
          const t = this._getRouteInfosByKey(e);
          t &&
            (t.forEach((e) => {
              this.locationHistory = this.locationHistory.filter((t) => t.id !== e.id);
            }),
            (this.tabHistory[e] = []));
        }
        update(e) {
          const t = this.locationHistory.findIndex((t) => t.id === e.id);
          t > -1 && this.locationHistory.splice(t, 1, e);
          const n = this.tabHistory[e.tab || ''];
          if (n) {
            const t = n.findIndex((t) => t.id === e.id);
            t > -1 ? n.splice(t, 1, e) : n.push(e);
          } else e.tab && (this.tabHistory[e.tab] = [e]);
        }
        _add(e) {
          const t = this._getRouteInfosByKey(e.tab);
          t && (this._areRoutesEqual(t[t.length - 1], e) && t.pop(), t.push(e)), this.locationHistory.push(e);
        }
        _areRoutesEqual(e, t) {
          return !(!e || !t) && e.pathname === t.pathname && e.search === t.search;
        }
        _pop(e) {
          const t = this._getRouteInfosByKey(e.tab);
          t && (t.pop(), t.pop(), t.push(e)),
            this.locationHistory.pop(),
            this.locationHistory.pop(),
            this.locationHistory.push(e);
        }
        _replace(e) {
          const t = this._getRouteInfosByKey(e.tab);
          t && t.pop(), this.locationHistory.pop(), this._add(e);
        }
        _clear() {
          Object.keys(this.tabHistory).forEach((e) => (this.tabHistory[e] = [])), (this.locationHistory = []);
        }
        _getRouteInfosByKey(e) {
          let t;
          return e && ((t = this.tabHistory[e]), t || (t = this.tabHistory[e] = [])), t;
        }
        getFirstRouteInfoForTab(e) {
          const t = this._getRouteInfosByKey(e);
          if (t) return t[0];
        }
        getCurrentRouteInfoForTab(e) {
          const t = this._getRouteInfosByKey(e);
          if (t) return t[t.length - 1];
        }
        findLastLocation(e) {
          const t = this._getRouteInfosByKey(e.tab);
          if (t)
            for (let n = t.length - 2; n >= 0; n--) {
              const o = t[n];
              if (o && o.pathname === e.pushedByRoute) return o;
            }
          for (let n = this.locationHistory.length - 2; n >= 0; n--) {
            const t = this.locationHistory[n];
            if (t && t.pathname === e.pushedByRoute) return t;
          }
        }
        previous() {
          return (
            this.locationHistory[this.locationHistory.length - 2] ||
            this.locationHistory[this.locationHistory.length - 1]
          );
        }
        current() {
          return this.locationHistory[this.locationHistory.length - 1];
        }
        canGoBack() {
          return this.locationHistory.length > 1;
        }
      }
      class Ay extends H.PureComponent {
        constructor(e) {
          super(e),
            (this.ionRouterContextValue = {
              push: (e, t, n, o, r) => {
                this.navigate(e, t, n, r, o);
              },
              back: (e) => {
                this.goBack(void 0, e);
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
          'undefined' != typeof document &&
            ((this.handleHardwareBackButton = this.handleHardwareBackButton.bind(this)),
            document.addEventListener('ionBackButton', this.handleHardwareBackButton));
        }
        componentWillUnmount() {
          'undefined' != typeof document &&
            document.removeEventListener('ionBackButton', this.handleHardwareBackButton);
        }
        handleHardwareBackButton(e) {
          e.detail.register(0, (e) => {
            this.nativeGoBack(), e();
          });
        }
        goBack(e, t) {
          this.props.onNavigateBack(e, t);
        }
        nativeGoBack() {
          this.props.onNativeBack();
        }
        navigate(e, t = 'forward', n = 'push', o, r, i) {
          this.props.onNavigate(e, n, t, o, r, i);
        }
        getPageManager() {
          return gy;
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
          return H.createElement(
            Qv.Provider,
            { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
            H.createElement(
              Iy.Provider,
              {
                value: Object.assign(Object.assign({}, this.ionRouterContextValue), {
                  routeInfo: this.props.routeInfo,
                }),
              },
              this.props.children
            )
          );
        }
      }
      class My {
        constructor() {
          (this.viewStacks = {}),
            (this.add = this.add.bind(this)),
            (this.clear = this.clear.bind(this)),
            (this.getViewItemsForOutlet = this.getViewItemsForOutlet.bind(this)),
            (this.remove = this.remove.bind(this));
        }
        add(e) {
          const { outletId: t } = e;
          this.viewStacks[t] ? this.viewStacks[t].push(e) : (this.viewStacks[t] = [e]);
        }
        clear(e) {
          return setTimeout(() => {
            delete this.viewStacks[e];
          }, 500);
        }
        getViewItemsForOutlet(e) {
          return this.viewStacks[e] || [];
        }
        remove(e) {
          const { outletId: t } = e,
            n = this.viewStacks[t];
          if (n) {
            const o = n.find((t) => t.id === e.id);
            o && ((o.mount = !1), (this.viewStacks[t] = n.filter((e) => e.id !== o.id)));
          }
        }
        getStackIds() {
          return Object.keys(this.viewStacks);
        }
        getAllViewItems() {
          const e = this.getStackIds(),
            t = [];
          return (
            e.forEach((e) => {
              t.push(...this.viewStacks[e]);
            }),
            t
          );
        }
      }
      class By extends H.PureComponent {
        render() {
          return H.createElement(
            wp,
            Object.assign(
              { path: this.props.path, exact: this.props.exact, render: this.props.render },
              void 0 !== this.props.computedMatch ? { computedMatch: this.props.computedMatch } : {}
            )
          );
        }
      }
      class Dy extends My {
        constructor() {
          super(),
            (this.createViewItem = this.createViewItem.bind(this)),
            (this.findViewItemByRouteInfo = this.findViewItemByRouteInfo.bind(this)),
            (this.findLeavingViewItemByRouteInfo = this.findLeavingViewItemByRouteInfo.bind(this)),
            (this.getChildrenToRender = this.getChildrenToRender.bind(this)),
            (this.findViewItemByPathname = this.findViewItemByPathname.bind(this));
        }
        createViewItem(e, t, n, o) {
          const r = { id: Ly('viewItem'), outletId: e, ionPageElement: o, reactElement: t, mount: !0, ionRoute: !1 },
            i = { exact: t.props.exact, path: t.props.path || t.props.from, component: t.props.component },
            a = yp(n.pathname, i);
          return (
            t.type === Ry && ((r.ionRoute = !0), (r.disableIonPageManagement = t.props.disableIonPageManagement)),
            (r.routeData = { match: a, childProps: t.props }),
            r
          );
        }
        getChildrenToRender(e, t, n) {
          const o = this.getViewItemsForOutlet(e);
          return (
            H.Children.forEach(t.props.children, (e) => {
              const t = o.find((t) => Vy(e, t.routeData.childProps.path || t.routeData.childProps.from));
              t && (t.reactElement = e);
            }),
            o.map((e) => {
              let t;
              if (e.ionRoute && !e.disableIonPageManagement)
                t = H.createElement(
                  _y,
                  { key: `view-${e.id}`, mount: e.mount, removeView: () => this.remove(e) },
                  H.cloneElement(e.reactElement, { computedMatch: e.routeData.match })
                );
              else {
                const o = Vy(e.reactElement, n.pathname);
                (t = H.createElement(
                  _y,
                  { key: `view-${e.id}`, mount: e.mount, removeView: () => this.remove(e) },
                  H.cloneElement(e.reactElement, { computedMatch: e.routeData.match })
                )),
                  !o && e.routeData.match && ((e.routeData.match = void 0), (e.mount = !1));
              }
              return t;
            })
          );
        }
        findViewItemByRouteInfo(e, t, n) {
          const { viewItem: o, match: r } = this.findViewItemByPath(e.pathname, t);
          return (void 0 === n || !0 === n) && o && r && (o.routeData.match = r), o;
        }
        findLeavingViewItemByRouteInfo(e, t, n = !0) {
          const { viewItem: o } = this.findViewItemByPath(e.lastPathname, t, !1, n);
          return o;
        }
        findViewItemByPathname(e, t) {
          const { viewItem: n } = this.findViewItemByPath(e, t);
          return n;
        }
        findViewItemByPath(e, t, n, o) {
          let r, i, a;
          if (t) (a = this.getViewItemsForOutlet(t)), a.some(l), r || a.some(s);
          else {
            const e = this.getAllViewItems();
            e.some(l), r || e.some(s);
          }
          return { viewItem: r, match: i };
          function l(t) {
            if (o && !t.ionRoute) return !1;
            const a = {
                exact: !!n || t.routeData.childProps.exact,
                path: t.routeData.childProps.path || t.routeData.childProps.from,
                component: t.routeData.childProps.component,
              },
              l = yp(e, a);
            return !!l && ((r = t), (i = l), !0);
          }
          function s(t) {
            return (
              !t.routeData.childProps.path &&
              !t.routeData.childProps.from &&
              ((i = { path: e, url: e, isExact: !0, params: {} }), (r = t), !0)
            );
          }
        }
      }
      function Vy(e, t, n) {
        return yp(t, { exact: !!n || e.props.exact, path: e.props.path || e.props.from, component: e.props.component });
      }
      const jy = (e) => !e.classList.contains('ion-page-invisible') && !e.classList.contains('ion-page-hidden');
      class Hy extends H.PureComponent {
        constructor(e) {
          super(e),
            (this.stackContextValue = { registerIonPage: this.registerIonPage.bind(this), isInOutlet: () => !0 }),
            (this.pendingPageTransition = !1),
            (this.registerIonPage = this.registerIonPage.bind(this)),
            (this.transitionPage = this.transitionPage.bind(this)),
            (this.handlePageTransition = this.handlePageTransition.bind(this)),
            (this.id = Ly('routerOutlet')),
            (this.prevProps = void 0),
            (this.skipTransition = !1);
        }
        componentDidMount() {
          this.clearOutletTimeout && clearTimeout(this.clearOutletTimeout),
            this.routerOutletElement &&
              (this.setupRouterOutlet(this.routerOutletElement), this.handlePageTransition(this.props.routeInfo));
        }
        componentDidUpdate(e) {
          const { pathname: t } = this.props.routeInfo,
            { pathname: n } = e.routeInfo;
          t !== n
            ? ((this.prevProps = e), this.handlePageTransition(this.props.routeInfo))
            : this.pendingPageTransition &&
              (this.handlePageTransition(this.props.routeInfo), (this.pendingPageTransition = !1));
        }
        componentWillUnmount() {
          this.clearOutletTimeout = this.context.clearOutlet(this.id);
        }
        async handlePageTransition(e) {
          var t, n;
          if (this.routerOutletElement && this.routerOutletElement.commit) {
            let o = this.context.findViewItemByRouteInfo(e, this.id),
              r = this.context.findLeavingViewItemByRouteInfo(e, this.id);
            !r &&
              e.prevRouteLastPathname &&
              (r = this.context.findViewItemByPathname(e.prevRouteLastPathname, this.id)),
              r &&
                ('replace' === e.routeAction
                  ? (r.mount = !1)
                  : 'push' !== e.routeAction || 'forward' !== e.routeDirection
                  ? 'none' !== e.routeDirection && o !== r && (r.mount = !1)
                  : (null === (t = e.routeOptions) || void 0 === t ? void 0 : t.unmount) && (r.mount = !1));
            const i = (function (e, t) {
              let n;
              return (
                H.Children.forEach(e, (e) => {
                  const o = { exact: e.props.exact, path: e.props.path || e.props.from, component: e.props.component };
                  yp(t.pathname, o) && (n = e);
                }),
                n ||
                  (H.Children.forEach(e, (e) => {
                    e.props.path || e.props.from || (n = e);
                  }),
                  n)
              );
            })(null === (n = this.ionRouterOutlet) || void 0 === n ? void 0 : n.props.children, e);
            if (
              (o
                ? (o.reactElement = i)
                : i && ((o = this.context.createViewItem(this.id, i, e)), this.context.addViewItem(o)),
              o && o.ionPageElement)
            ) {
              if (o === r && o.routeData.match.url !== e.pathname) return;
              if (
                (!r &&
                  this.props.routeInfo.prevRouteLastPathname &&
                  (r = this.context.findViewItemByPathname(this.props.routeInfo.prevRouteLastPathname, this.id)),
                jy(o.ionPageElement) && void 0 !== r && !jy(r.ionPageElement))
              )
                return;
              this.transitionPage(e, o, r);
            } else
              !r ||
                i ||
                o ||
                (r.ionPageElement &&
                  (r.ionPageElement.classList.add('ion-page-hidden'),
                  r.ionPageElement.setAttribute('aria-hidden', 'true')));
            this.forceUpdate();
          } else this.pendingPageTransition = !0;
        }
        registerIonPage(e, t) {
          const n = this.context.findViewItemByRouteInfo(t, this.id);
          if (n) {
            const t = n.ionPageElement;
            if (((n.ionPageElement = e), (n.ionRoute = !0), t === e)) return;
          }
          this.handlePageTransition(t);
        }
        async setupRouterOutlet(e) {
          e.swipeHandler = {
            canStart: () => {
              const t = ay();
              if (!t || !t.get('swipeBackEnabled', 'ios' === e.mode)) return !1;
              const { routeInfo: n } = this.props,
                o =
                  this.prevProps && this.prevProps.routeInfo.pathname === n.pushedByRoute
                    ? this.prevProps.routeInfo
                    : { pathname: n.pushedByRoute || '' },
                r = this.context.findViewItemByRouteInfo(o, this.id, !1);
              return !!r && r.mount && r.routeData.match.path !== n.pathname;
            },
            onStart: async () => {
              const { routeInfo: e } = this.props,
                t =
                  this.prevProps && this.prevProps.routeInfo.pathname === e.pushedByRoute
                    ? this.prevProps.routeInfo
                    : { pathname: e.pushedByRoute || '' },
                n = this.context.findViewItemByRouteInfo(t, this.id, !1),
                o = this.context.findViewItemByRouteInfo(e, this.id, !1);
              return n && o && (await this.transitionPage(e, n, o, 'back', !0)), Promise.resolve();
            },
            onEnd: (e) => {
              if (e) (this.skipTransition = !0), this.context.goBack();
              else {
                const { routeInfo: e } = this.props,
                  t =
                    this.prevProps && this.prevProps.routeInfo.pathname === e.pushedByRoute
                      ? this.prevProps.routeInfo
                      : { pathname: e.pushedByRoute || '' },
                  n = this.context.findViewItemByRouteInfo(t, this.id, !1);
                if (
                  n !== this.context.findViewItemByRouteInfo(e, this.id, !1) &&
                  void 0 !== (null == n ? void 0 : n.ionPageElement)
                ) {
                  const { ionPageElement: e } = n;
                  e.setAttribute('aria-hidden', 'true'), e.classList.add('ion-page-hidden');
                }
              }
            },
          };
        }
        async transitionPage(e, t, n, o, r = !1) {
          const i = async (t, n) => {
              const o = this.skipTransition;
              o ? (this.skipTransition = !1) : (t.classList.add('ion-page'), t.classList.add('ion-page-invisible')),
                await a.commit(t, n, {
                  duration: o || void 0 === s ? 0 : void 0,
                  direction: s,
                  showGoBack: !!e.pushedByRoute,
                  progressAnimation: r,
                  animationBuilder: e.routeAnimation,
                });
            },
            a = this.routerOutletElement,
            l = 'none' === e.routeDirection || 'root' === e.routeDirection ? void 0 : e.routeDirection,
            s = null != o ? o : l;
          if (t && t.ionPageElement && this.routerOutletElement)
            if (n && n.ionPageElement && t === n)
              if (
                (function (e, t, n) {
                  const o = {
                      exact: !!n || e.props.exact,
                      path: e.props.path || e.props.from,
                      component: e.props.component,
                    },
                    r = yp(t, o);
                  return r;
                })(n.reactElement, e.pathname, !0)
              ) {
                const e = (function (e) {
                  let t;
                  if (((t = 'string' == typeof e ? e : e.outerHTML), document)) {
                    const e = document.createElement('div');
                    (e.innerHTML = t), (e.style.zIndex = '');
                    const n = e.getElementsByTagName('ion-back-button');
                    return n[0] && n[0].remove(), e.firstChild;
                  }
                })(n.ionPageElement.outerHTML);
                e &&
                  (this.routerOutletElement.appendChild(e),
                  await i(t.ionPageElement, e),
                  this.routerOutletElement.removeChild(e));
              } else await i(t.ionPageElement, void 0);
            else
              await i(t.ionPageElement, null == n ? void 0 : n.ionPageElement),
                n &&
                  n.ionPageElement &&
                  !r &&
                  (n.ionPageElement.classList.add('ion-page-hidden'),
                  n.ionPageElement.setAttribute('aria-hidden', 'true'));
        }
        render() {
          const { children: e } = this.props,
            t = H.Children.only(e);
          this.ionRouterOutlet = t;
          const n = this.context.getChildrenToRender(this.id, this.ionRouterOutlet, this.props.routeInfo, () => {
            this.forceUpdate();
          });
          return H.createElement(
            my.Provider,
            { value: this.stackContextValue },
            H.cloneElement(
              t,
              {
                ref: (e) => {
                  t.props.setRef && t.props.setRef(e),
                    t.props.forwardedRef && (t.props.forwardedRef.current = e),
                    (this.routerOutletElement = e);
                  const { ref: n } = t;
                  'function' == typeof n && n(e);
                },
              },
              n
            )
          );
        }
        static get contextType() {
          return Ny;
        }
      }
      class Fy extends H.PureComponent {
        constructor(e) {
          super(e),
            (this.exitViewFromOtherOutletHandlers = []),
            (this.locationHistory = new zy()),
            (this.viewStack = new Dy()),
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
          const t = { id: Ly('routeInfo'), pathname: this.props.location.pathname, search: this.props.location.search };
          this.locationHistory.add(t),
            (this.handleChangeTab = this.handleChangeTab.bind(this)),
            (this.handleResetTab = this.handleResetTab.bind(this)),
            (this.handleNativeBack = this.handleNativeBack.bind(this)),
            (this.handleNavigate = this.handleNavigate.bind(this)),
            (this.handleNavigateBack = this.handleNavigateBack.bind(this)),
            this.props.registerHistoryListener(this.handleHistoryChange.bind(this)),
            (this.handleSetCurrentTab = this.handleSetCurrentTab.bind(this)),
            (this.state = { routeInfo: t });
        }
        handleChangeTab(e, t, n) {
          if (!t) return;
          const o = this.locationHistory.getCurrentRouteInfoForTab(e),
            [r, i] = t.split('?');
          o
            ? ((this.incomingRouteParams = Object.assign(Object.assign({}, o), {
                routeAction: 'push',
                routeDirection: 'none',
              })),
              o.pathname === r
                ? ((this.incomingRouteParams.routeOptions = n), this.props.history.push(o.pathname + (o.search || '')))
                : ((this.incomingRouteParams.pathname = r),
                  (this.incomingRouteParams.search = i ? '?' + i : void 0),
                  (this.incomingRouteParams.routeOptions = n),
                  this.props.history.push(r + (i ? '?' + i : ''))))
            : this.handleNavigate(r, 'push', 'none', void 0, n, e);
        }
        handleHistoryChange(e, t) {
          var n, o, r;
          let i;
          if (
            ((i =
              this.incomingRouteParams && 'replace' === this.incomingRouteParams.routeAction
                ? this.locationHistory.previous()
                : this.locationHistory.current()),
            i.pathname + i.search !== e.pathname)
          ) {
            if (!this.incomingRouteParams) {
              if (
                ('REPLACE' === t &&
                  (this.incomingRouteParams = { routeAction: 'replace', routeDirection: 'none', tab: this.currentTab }),
                'POP' === t)
              ) {
                const e = this.locationHistory.current();
                if (e && e.pushedByRoute) {
                  const t = this.locationHistory.findLastLocation(e);
                  this.incomingRouteParams = Object.assign(Object.assign({}, t), {
                    routeAction: 'pop',
                    routeDirection: 'back',
                  });
                } else this.incomingRouteParams = { routeAction: 'pop', routeDirection: 'none', tab: this.currentTab };
              }
              this.incomingRouteParams ||
                (this.incomingRouteParams = {
                  routeAction: 'push',
                  routeDirection: (null === (n = e.state) || void 0 === n ? void 0 : n.direction) || 'forward',
                  routeOptions: null === (o = e.state) || void 0 === o ? void 0 : o.routerOptions,
                  tab: this.currentTab,
                });
            }
            let a;
            if (null === (r = this.incomingRouteParams) || void 0 === r ? void 0 : r.id)
              (a = Object.assign(Object.assign({}, this.incomingRouteParams), { lastPathname: i.pathname })),
                this.locationHistory.add(a);
            else {
              const t =
                'push' === this.incomingRouteParams.routeAction &&
                'forward' === this.incomingRouteParams.routeDirection;
              if (
                ((a = Object.assign(Object.assign({ id: Ly('routeInfo') }, this.incomingRouteParams), {
                  lastPathname: i.pathname,
                  pathname: e.pathname,
                  search: e.search,
                  params: this.props.match.params,
                  prevRouteLastPathname: i.lastPathname,
                })),
                t)
              )
                (a.tab = i.tab), (a.pushedByRoute = i.pathname);
              else if ('pop' === a.routeAction) {
                const e = this.locationHistory.findLastLocation(a);
                a.pushedByRoute = null == e ? void 0 : e.pushedByRoute;
              } else if ('push' === a.routeAction && a.tab !== i.tab) {
                const e = this.locationHistory.getCurrentRouteInfoForTab(a.tab);
                a.pushedByRoute = null == e ? void 0 : e.pushedByRoute;
              } else if ('replace' === a.routeAction) {
                const e = this.locationHistory.current(),
                  t = null == e ? void 0 : e.pushedByRoute,
                  n = void 0 !== t && t !== a.pathname ? t : a.pushedByRoute;
                (a.lastPathname = (null == e ? void 0 : e.pathname) || a.lastPathname),
                  (a.prevRouteLastPathname = null == e ? void 0 : e.lastPathname),
                  (a.pushedByRoute = n),
                  (a.routeDirection = (null == e ? void 0 : e.routeDirection) || a.routeDirection),
                  (a.routeAnimation = (null == e ? void 0 : e.routeAnimation) || a.routeAnimation);
              }
              this.locationHistory.add(a);
            }
            this.setState({ routeInfo: a });
          }
          this.incomingRouteParams = void 0;
        }
        handleNativeBack() {
          const e = this.props.history;
          (e.goBack || e.back)();
        }
        handleNavigate(e, t, n, o, r, i) {
          (this.incomingRouteParams = Object.assign(this.incomingRouteParams || {}, {
            routeAction: t,
            routeDirection: n,
            routeOptions: r,
            routeAnimation: o,
            tab: i,
          })),
            'push' === t ? this.props.history.push(e) : this.props.history.replace(e);
        }
        handleNavigateBack(e = '/', t) {
          const n = ay();
          e = e || (n && n.get('backButtonDefaultHref'));
          const o = this.locationHistory.current();
          if (o && o.pushedByRoute) {
            const n = this.locationHistory.findLastLocation(o);
            if (n)
              if (
                ((this.incomingRouteParams = Object.assign(Object.assign({}, n), {
                  routeAction: 'pop',
                  routeDirection: 'back',
                  routeAnimation: t || o.routeAnimation,
                })),
                o.lastPathname === o.pushedByRoute || (n.pathname === o.pushedByRoute && '' === o.tab && '' === n.tab))
              ) {
                const e = this.props.history;
                (e.goBack || e.back)();
              } else this.handleNavigate(n.pathname + (n.search || ''), 'pop', 'back');
            else this.handleNavigate(e, 'pop', 'back');
          } else this.handleNavigate(e, 'pop', 'back');
        }
        handleResetTab(e, t, n) {
          const o = this.locationHistory.getFirstRouteInfoForTab(e);
          if (o) {
            const e = Object.assign({}, o);
            (e.pathname = t),
              (e.routeOptions = n),
              (this.incomingRouteParams = Object.assign(Object.assign({}, e), {
                routeAction: 'pop',
                routeDirection: 'back',
              })),
              this.props.history.push(e.pathname + (e.search || ''));
          }
        }
        handleSetCurrentTab(e) {
          this.currentTab = e;
          const t = Object.assign({}, this.locationHistory.current());
          t.tab !== e && ((t.tab = e), this.locationHistory.update(t));
        }
        render() {
          return H.createElement(
            Ny.Provider,
            { value: this.routeMangerContextState },
            H.createElement(
              Ay,
              {
                ionRoute: By,
                ionRedirect: {},
                stackManager: Hy,
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
      const Uy = (function (e) {
        var t = 'withRouter(' + (e.displayName || e.name) + ')',
          n = function (t) {
            var n = t.wrappedComponentRef,
              o = yf(t, ['wrappedComponentRef']);
            return H.createElement(sp.Consumer, null, function (t) {
              return t || $d(!1), H.createElement(e, gd({}, o, t, { ref: n }));
            });
          };
        return (n.displayName = t), (n.WrappedComponent = e), np(n, e);
      })(Fy);
      Uy.displayName = 'IonRouter';
      class Wy extends H.Component {
        constructor(e) {
          super(e);
          const { history: t } = e,
            n = ig(e, ['history']);
          (this.history = t || Ad(n)),
            this.history.listen(this.handleHistoryChange.bind(this)),
            (this.registerHistoryListener = this.registerHistoryListener.bind(this));
        }
        handleHistoryChange(e, t) {
          const n = e.location || e,
            o = e.action || t;
          this.historyListenHandler && this.historyListenHandler(n, o);
        }
        registerHistoryListener(e) {
          this.historyListenHandler = e;
        }
        render() {
          const e = this.props,
            { children: t } = e,
            n = ig(e, ['children']);
          return H.createElement(
            cp,
            Object.assign({ history: this.history }, n),
            H.createElement(Uy, { registerHistoryListener: this.registerHistoryListener }, t)
          );
        }
      }
      H.Component, H.Component;
      const qy = () =>
          Z('div', {
            className: 'container',
            children: [
              G('strong', { children: 'Ready to create an app?' }),
              Z('p', {
                children: [
                  'Start with Ionic',
                  ' ',
                  G('a', {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://ionicframework.com/docs/components',
                    children: 'UI Components',
                  }),
                ],
              }),
            ],
          }),
        Qy = () =>
          Z(vy, {
            children: [
              G(ny, { children: G(ry, { children: G(oy, { children: 'Blank' }) }) }),
              Z(ty, {
                fullscreen: !0,
                children: [
                  G(ny, {
                    collapse: 'condense',
                    children: G(ry, { children: G(oy, { size: 'large', children: 'Blank' }) }),
                  }),
                  G(qy, {}),
                ],
              }),
            ],
          });
      ((e = {}) => {
        'undefined' != typeof document && document.documentElement.classList.add('ion-ce'), og(Object.assign({}, e));
      })();
      const Ky = () =>
        G(hy, {
          children: G(Wy, {
            children: Z($y, {
              children: [
                G(wp, { exact: !0, path: '/home', children: G(Qy, {}) }),
                G(wp, { exact: !0, path: '/', children: G(mp, { to: '/home' }) }),
              ],
            }),
          }),
        });
      sd(document.getElementById('root')).render(G(H.StrictMode, { children: G(Ky, {}) }));
    },
  };
});

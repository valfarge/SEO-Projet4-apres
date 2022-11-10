/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */ !(function (e) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery);
})(function (e) {
    "use strict";
    function n(n) {
        return (
            n && void 0 === n.allowPageScroll && (void 0 !== n.swipe || void 0 !== n.swipeStatus) && (n.allowPageScroll = s),
            void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
            n || (n = {}),
            (n = e.extend({}, e.fn.swipe.defaults, n)),
            this.each(function () {
                var r = e(this),
                    i = r.data(m);
                i || ((i = new t(this, n)), r.data(m, i));
            })
        );
    }
    function t(n, t) {
        function P(n) {
            if (!(!(!0 !== eE.data(m + "_intouch")) || e(n.target).closest(t.excludedElements, eE).length > 0)) {
                var a = n.originalEvent ? n.originalEvent : n;
                if (!a.pointerType || "mouse" != a.pointerType || 0 != t.fallbackToMouseEvents) {
                    var u,
                        s,
                        c = a.touches,
                        p = c ? c[0] : a;
                    return (
                        (ey = _),
                        c ? (ex = c.length) : !1 !== t.preventDefaultEvents && n.preventDefault(),
                        (eh = 0),
                        (ef = null),
                        (eg = null),
                        (e_ = null),
                        (ed = 0),
                        (e$ = 0),
                        (ev = 0),
                        (ew = 1),
                        (eT = 0),
                        (eb = ((s = {}), (s[r] = en(r)), (s[i] = en(i)), (s[l] = en(l)), (s[o] = en(o)), s)),
                        G(),
                        J(0, p),
                        !c || ex === t.fingers || t.fingers === w || C() ? ((eO = el()), 2 == ex && (J(1, c[1]), (e$ = ev = er(eS[0].start, eS[1].start))), (t.swipeStatus || t.pinchStatus) && (u = A(a, ey))) : (u = !1),
                        !1 === u
                            ? (A(a, (ey = y)), u)
                            : (t.hold &&
                                  (ek = setTimeout(
                                      e.proxy(function () {
                                          eE.trigger("hold", [a.target]), t.hold && (u = t.hold.call(eE, a, a.target));
                                      }, this),
                                      t.longTapThreshold
                                  )),
                              B(!0),
                              null)
                    );
                }
            }
        }
        function D(n) {
            var p = n.originalEvent ? n.originalEvent : n;
            if (ey !== E && ey !== y && !Z()) {
                var h,
                    f,
                    g,
                    d = p.touches,
                    T = d ? d[0] : p,
                    _ = K(T);
                if (
                    ((em = el()),
                    d && (ex = d.length),
                    t.hold && clearTimeout(ek),
                    (ey = b),
                    2 == ex &&
                        (0 == e$ ? (J(1, d[1]), (e$ = ev = er(eS[0].start, eS[1].start))) : (K(d[1]), (ev = er(eS[0].end, eS[1].end)), (e_ = (eS[0].end, eS[1].end, ew < 1 ? u : a))),
                        (ew = ((f = e$), (g = ev), ((g / f) * 1).toFixed(2))),
                        (eT = Math.abs(e$ - ev))),
                    ex === t.fingers || t.fingers === w || !d || C())
                ) {
                    if (
                        ((ef = ei(_.start, _.end)),
                        (function e(n, a) {
                            if (!1 !== t.preventDefaultEvents) {
                                if (t.allowPageScroll === s) n.preventDefault();
                                else {
                                    var u = t.allowPageScroll === c;
                                    switch (a) {
                                        case r:
                                            ((t.swipeLeft && u) || (!u && t.allowPageScroll != $)) && n.preventDefault();
                                            break;
                                        case i:
                                            ((t.swipeRight && u) || (!u && t.allowPageScroll != $)) && n.preventDefault();
                                            break;
                                        case l:
                                            ((t.swipeUp && u) || (!u && t.allowPageScroll != v)) && n.preventDefault();
                                            break;
                                        case o:
                                            ((t.swipeDown && u) || (!u && t.allowPageScroll != v)) && n.preventDefault();
                                    }
                                }
                            }
                        })(n, (eg = ei(_.last, _.end))),
                        (eh = ((S = _.start), (O = _.end), Math.round(Math.sqrt(Math.pow(O.x - S.x, 2) + Math.pow(O.y - S.y, 2))))),
                        (ed = et()),
                        (m = ef),
                        (P = eh),
                        m != s && ((P = Math.max(P, ee(m))), (eb[m].distance = P)),
                        (h = A(p, ey)),
                        !t.triggerOnTouchEnd || t.triggerOnTouchLeave)
                    ) {
                        var x = !0;
                        if (t.triggerOnTouchLeave) {
                            var S,
                                O,
                                m,
                                P,
                                D,
                                L,
                                R,
                                k,
                                I = ((D = this), (L = (D = e(D)).offset()), { left: L.left, right: L.left + D.outerWidth(), top: L.top, bottom: L.top + D.outerHeight() });
                            x = ((R = _.end), (k = I), R.x > k.left && R.x < k.right && R.y > k.top && R.y < k.bottom);
                        }
                        !t.triggerOnTouchEnd && x ? (ey = U(b)) : t.triggerOnTouchLeave && !x && (ey = U(E)), (ey != y && ey != E) || A(p, ey);
                    }
                } else A(p, (ey = y));
                !1 === h && A(p, (ey = y));
            }
        }
        function L(e) {
            var n,
                r = e.originalEvent ? e.originalEvent : e,
                i = r.touches;
            if (i) {
                if (i.length && !Z()) {
                    return (n = r), (eP = el()), (eD = n.touches.length + 1), !0;
                }
                if (i.length && Z()) return !0;
            }
            return (
                Z() && (ex = eD),
                (em = el()),
                (ed = et()),
                H() || !j()
                    ? A(r, (ey = y))
                    : t.triggerOnTouchEnd || (!1 === t.triggerOnTouchEnd && ey === b)
                    ? (!1 !== t.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), A(r, (ey = E)))
                    : !t.triggerOnTouchEnd && V()
                    ? M(r, (ey = E), f)
                    : ey === b && A(r, (ey = y)),
                B(!1),
                null
            );
        }
        function R() {
            (ex = 0), (em = 0), (eO = 0), (e$ = 0), (ev = 0), (ew = 1), G(), B(!1);
        }
        function k(e) {
            var n = e.originalEvent ? e.originalEvent : e;
            t.triggerOnTouchLeave && A(n, (ey = U(E)));
        }
        function I() {
            eE.unbind(ea, P), eE.unbind(ep, R), eE.unbind(eu, D), eE.unbind(es, L), ec && eE.unbind(ec, k), B(!1);
        }
        function U(e) {
            var n = e,
                r = N(),
                i = j(),
                l = H();
            return !r || l ? (n = y) : i && e == b && (!t.triggerOnTouchEnd || t.triggerOnTouchLeave) ? (n = E) : !i && e == E && t.triggerOnTouchLeave && (n = y), n;
        }
        function A(e, n) {
            var r,
                i = e.touches;
            return (
                (!(!F() || !Q()) || Q()) && (r = M(e, n, p)),
                (!(!q() || !C()) || C()) && !1 !== r && (r = M(e, n, h)),
                z() && W() && !1 !== r ? (r = M(e, n, g)) : ed > t.longTapThreshold && eh < T && t.longTap && !1 !== r ? (r = M(e, n, d)) : !((1 === ex || !x) && (isNaN(eh) || eh < t.threshold)) || !V() || !1 === r || (r = M(e, n, f)),
                n === y && R(e),
                n === E && ((i && i.length) || R(e)),
                r
            );
        }
        function M(n, s, c) {
            var $;
            if (c == p) {
                if ((eE.trigger("swipeStatus", [s, ef || null, eh || 0, ed || 0, ex, eS, eg]), t.swipeStatus && !1 === ($ = t.swipeStatus.call(eE, n, s, ef || null, eh || 0, ed || 0, ex, eS, eg)))) return !1;
                if (s == E && F()) {
                    if ((clearTimeout(eR), clearTimeout(ek), eE.trigger("swipe", [ef, eh, ed, ex, eS, eg]), t.swipe && !1 === ($ = t.swipe.call(eE, n, ef, eh, ed, ex, eS, eg)))) return !1;
                    switch (ef) {
                        case r:
                            eE.trigger("swipeLeft", [ef, eh, ed, ex, eS, eg]), t.swipeLeft && ($ = t.swipeLeft.call(eE, n, ef, eh, ed, ex, eS, eg));
                            break;
                        case i:
                            eE.trigger("swipeRight", [ef, eh, ed, ex, eS, eg]), t.swipeRight && ($ = t.swipeRight.call(eE, n, ef, eh, ed, ex, eS, eg));
                            break;
                        case l:
                            eE.trigger("swipeUp", [ef, eh, ed, ex, eS, eg]), t.swipeUp && ($ = t.swipeUp.call(eE, n, ef, eh, ed, ex, eS, eg));
                            break;
                        case o:
                            eE.trigger("swipeDown", [ef, eh, ed, ex, eS, eg]), t.swipeDown && ($ = t.swipeDown.call(eE, n, ef, eh, ed, ex, eS, eg));
                    }
                }
            }
            if (c == h) {
                if ((eE.trigger("pinchStatus", [s, e_ || null, eT || 0, ed || 0, ex, ew, eS]), t.pinchStatus && !1 === ($ = t.pinchStatus.call(eE, n, s, e_ || null, eT || 0, ed || 0, ex, ew, eS)))) return !1;
                if (s == E && q())
                    switch (e_) {
                        case a:
                            eE.trigger("pinchIn", [e_ || null, eT || 0, ed || 0, ex, ew, eS]), t.pinchIn && ($ = t.pinchIn.call(eE, n, e_ || null, eT || 0, ed || 0, ex, ew, eS));
                            break;
                        case u:
                            eE.trigger("pinchOut", [e_ || null, eT || 0, ed || 0, ex, ew, eS]), t.pinchOut && ($ = t.pinchOut.call(eE, n, e_ || null, eT || 0, ed || 0, ex, ew, eS));
                    }
            }
            return (
                c == f
                    ? (s !== y && s !== E) ||
                      (clearTimeout(eR),
                      clearTimeout(ek),
                      W() && !z()
                          ? ((eL = el()),
                            (eR = setTimeout(
                                e.proxy(function () {
                                    (eL = null), eE.trigger("tap", [n.target]), t.tap && ($ = t.tap.call(eE, n, n.target));
                                }, this),
                                t.doubleTapThreshold
                            )))
                          : ((eL = null), eE.trigger("tap", [n.target]), t.tap && ($ = t.tap.call(eE, n, n.target))))
                    : c == g
                    ? (s !== y && s !== E) || (clearTimeout(eR), clearTimeout(ek), (eL = null), eE.trigger("doubletap", [n.target]), t.doubleTap && ($ = t.doubleTap.call(eE, n, n.target)))
                    : c == d && ((s !== y && s !== E) || (clearTimeout(eR), (eL = null), eE.trigger("longtap", [n.target]), t.longTap && ($ = t.longTap.call(eE, n, n.target)))),
                $
            );
        }
        function j() {
            var e = !0;
            return null !== t.threshold && (e = eh >= t.threshold), e;
        }
        function H() {
            var e = !1;
            return null !== t.cancelThreshold && null !== ef && (e = ee(ef) - eh >= t.cancelThreshold), e;
        }
        function N() {
            return !t.maxTimeThreshold || !(ed >= t.maxTimeThreshold);
        }
        function q() {
            var e = X(),
                n = Y(),
                r = null === t.pinchThreshold || eT >= t.pinchThreshold;
            return e && n && r;
        }
        function C() {
            return !!(t.pinchStatus || t.pinchIn || t.pinchOut);
        }
        function F() {
            var e = N(),
                n = j(),
                t = X(),
                r = Y();
            return !H() && r && t && n && e;
        }
        function Q() {
            return !!(t.swipe || t.swipeStatus || t.swipeLeft || t.swipeRight || t.swipeUp || t.swipeDown);
        }
        function X() {
            return ex === t.fingers || t.fingers === w || !x;
        }
        function Y() {
            return 0 !== eS[0].end.x;
        }
        function V() {
            return !!t.tap;
        }
        function W() {
            return !!t.doubleTap;
        }
        function z() {
            if (null == eL) return !1;
            var e = el();
            return W() && e - eL <= t.doubleTapThreshold;
        }
        function G() {
            (eP = 0), (eD = 0);
        }
        function Z() {
            var e = !1;
            return eP && el() - eP <= t.fingerReleaseThreshold && (e = !0), e;
        }
        function B(e) {
            eE && (!0 === e ? (eE.bind(eu, D), eE.bind(es, L), ec && eE.bind(ec, k)) : (eE.unbind(eu, D, !1), eE.unbind(es, L, !1), ec && eE.unbind(ec, k, !1)), eE.data(m + "_intouch", !0 === e));
        }
        function J(e, n) {
            var t = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
            return (t.start.x = t.last.x = t.end.x = n.pageX || n.clientX), (t.start.y = t.last.y = t.end.y = n.pageY || n.clientY), (eS[e] = t), t;
        }
        function K(e) {
            var n,
                t = void 0 !== e.identifier ? e.identifier : 0,
                r = ((n = t), eS[n] || null);
            return null === r && (r = J(t, e)), (r.last.x = r.end.x), (r.last.y = r.end.y), (r.end.x = e.pageX || e.clientX), (r.end.y = e.pageY || e.clientY), r;
        }
        function ee(e) {
            if (eb[e]) return eb[e].distance;
        }
        function en(e) {
            return { direction: e, distance: 0 };
        }
        function et() {
            return em - eO;
        }
        function er(e, n) {
            var t = Math.abs(e.x - n.x),
                r = Math.abs(e.y - n.y);
            return Math.round(Math.sqrt(t * t + r * r));
        }
        function ei(e, n) {
            if (((t = e), (a = n), t.x == a.x && t.y == a.y)) return s;
            var t,
                a,
                u,
                c,
                p,
                h,
                f = ((u = e), (c = n), (p = u.x - c.x), (h = Math.round((180 * Math.atan2(c.y - u.y, p)) / Math.PI)) < 0 && (h = 360 - Math.abs(h)), h);
            return f <= 45 && f >= 0 ? r : f <= 360 && f >= 315 ? r : f >= 135 && f <= 225 ? i : f > 45 && f < 135 ? o : l;
        }
        function el() {
            return new Date().getTime();
        }
        var t = e.extend({}, t),
            eo = x || O || !t.fallbackToMouseEvents,
            ea = eo ? (O ? (S ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            eu = eo ? (O ? (S ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            es = eo ? (O ? (S ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            ec = eo ? (O ? "mouseleave" : null) : "mouseleave",
            ep = O ? (S ? "MSPointerCancel" : "pointercancel") : "touchcancel",
            eh = 0,
            ef = null,
            eg = null,
            ed = 0,
            e$ = 0,
            ev = 0,
            ew = 1,
            eT = 0,
            e_ = 0,
            eb = null,
            eE = e(n),
            ey = "start",
            ex = 0,
            eS = {},
            eO = 0,
            em = 0,
            eP = 0,
            eD = 0,
            eL = 0,
            eR = null,
            ek = null;
        try {
            eE.bind(ea, P), eE.bind(ep, R);
        } catch (e0) {
            e.error("events not supported " + ea + "," + ep + " on jQuery.swipe");
        }
        (this.enable = function () {
            return this.disable(), eE.bind(ea, P), eE.bind(ep, R), eE;
        }),
            (this.disable = function () {
                return I(), eE;
            }),
            (this.destroy = function () {
                I(), eE.data(m, null), (eE = null);
            }),
            (this.option = function (n, r) {
                if ("object" == typeof n) t = e.extend(t, n);
                else if (void 0 !== t[n]) {
                    if (void 0 === r) return t[n];
                    t[n] = r;
                } else {
                    if (!n) return t;
                    e.error("Option " + n + " does not exist on jQuery.swipe.options");
                }
                return null;
            });
    }
    var r = "left",
        i = "right",
        l = "up",
        o = "down",
        a = "in",
        u = "out",
        s = "none",
        c = "auto",
        p = "swipe",
        h = "pinch",
        f = "tap",
        g = "doubletap",
        d = "longtap",
        $ = "horizontal",
        v = "vertical",
        w = "all",
        T = 10,
        _ = "start",
        b = "move",
        E = "end",
        y = "cancel",
        x = "ontouchstart" in window,
        S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !x,
        O = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !x,
        m = "TouchSwipe";
    (e.fn.swipe = function (t) {
        var r = e(this),
            i = r.data(m);
        if (i && "string" == typeof t) {
            if (i[t]) return i[t].apply(i, Array.prototype.slice.call(arguments, 1));
            e.error("Method " + t + " does not exist on jQuery.swipe");
        } else if (i && "object" == typeof t) i.option.apply(i, arguments);
        else if (!(i || ("object" != typeof t && t))) return n.apply(this, arguments);
        return r;
    }),
        (e.fn.swipe.version = "1.6.18"),
        (e.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0,
        }),
        (e.fn.swipe.phases = { PHASE_START: _, PHASE_MOVE: b, PHASE_END: E, PHASE_CANCEL: y }),
        (e.fn.swipe.directions = { LEFT: r, RIGHT: i, UP: l, DOWN: o, IN: a, OUT: u }),
        (e.fn.swipe.pageScroll = { NONE: s, HORIZONTAL: $, VERTICAL: v, AUTO: c }),
        (e.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: w });
});


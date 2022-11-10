/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ !(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = a.document,
        n = "2.1.0",
        o = function (e, t) {
            return new o.fn.init(e, t);
        },
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (e, t) {
            return t.toUpperCase();
        };
    function s(e) {
        var t = e.length,
            n = o.type(e);
        return !("function" === n || o.isWindow(e)) && ((1 === e.nodeType && !!t) || "array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    (o.fn = o.prototype = {
        jquery: n,
        constructor: o,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (e) {
            return null != e ? (0 > e ? this[e + this.length] : this[e]) : d.call(this);
        },
        pushStack: function (e) {
            var t = o.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
            return o.each(this, e, t);
        },
        map: function (e) {
            return this.pushStack(
                o.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice,
    }),
        (o.extend = o.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                s,
                a = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && ((c = a), (a = arguments[u] || {}), u++), "object" == typeof a || o.isFunction(a) || (a = {}), u === l && ((a = this), u--); l > u; u++)
                if (null != (e = arguments[u]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (c && r && (o.isPlainObject(r) || (i = o.isArray(r))) ? (i ? ((i = !1), (s = n && o.isArray(n) ? n : [])) : (s = n && o.isPlainObject(n) ? n : {}), (a[t] = o.extend(c, s, r))) : void 0 !== r && (a[t] = r));
            return a;
        }),
        o.extend({
            expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === o.type(e);
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window;
            },
            isNumeric: function (e) {
                return e - parseFloat(e) >= 0;
            },
            isPlainObject: function (e) {
                if ("object" !== o.type(e) || e.nodeType || o.isWindow(e)) return !1;
                try {
                    if (e.constructor && !j.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (t) {
                    return !1;
                }
                return !0;
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[i.call(e)] || "object" : typeof e;
            },
            globalEval: function (a) {
                var b,
                    c = eval;
                (a = o.trim(a)) && (1 === a.indexOf("use strict") ? (((b = m.createElement("script")).text = a), m.head.appendChild(b).parentNode.removeChild(b)) : c(a));
            },
            camelCase: function (e) {
                return e.replace(p, "ms-").replace(q, r);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    a = s(e);
                if (n) {
                    if (a) for (; o > i && !1 !== (r = t.apply(e[i], n)); i++);
                    else for (i in e) if (!1 === (r = t.apply(e[i], n))) break;
                } else if (a) for (; o > i && !1 !== (r = t.call(e[i], i, e[i])); i++);
                else for (i in e) if (!1 === (r = t.call(e[i], i, e[i]))) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : k.call(e);
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? o.merge(n, "string" == typeof e ? [e] : e) : f.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : g.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) (r = !t(e[o], o)) !== a && i.push(e[o]);
                return i;
            },
            map: function (t, n, r) {
                var i,
                    o = 0,
                    a = t.length,
                    u = s(t),
                    l = [];
                if (u) for (; a > o; o++) null != (i = n(t[o], o, r)) && l.push(i);
                else for (o in t) null != (i = n(t[o], o, r)) && l.push(i);
                return e.apply([], l);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                return (
                    "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    o.isFunction(e)
                        ? ((r = d.call(arguments, 2)),
                          ((i = function () {
                              return e.apply(t || this, r.concat(d.call(arguments)));
                          }).guid = e.guid = e.guid || o.guid++),
                          i)
                        : void 0
                );
            },
            now: Date.now,
            support: l,
        }),
        o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            h["[object " + t + "]"] = t.toLowerCase();
        });
    var t = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y = "sizzle" + -new Date(),
            $ = e.document,
            x = 0,
            b = 0,
            _ = ei(),
            w = ei(),
            T = ei(),
            C = function (e, t) {
                return e === t && (l = !0), 0;
            },
            N = "undefined",
            k = -2147483648,
            D = {}.hasOwnProperty,
            j = [],
            S = j.pop,
            E = j.push,
            A = j.push,
            L = j.slice,
            q =
                j.indexOf ||
                function (e) {
                    for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                    return -1;
                },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = P.replace("w", "w#"),
            M = "\\[" + O + "*(" + P + ")" + O + "*(?:([*^$|!~]?=)" + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + O + "*\\]",
            W = ":(" + P + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + M.replace(3, 8) + ")*)|.*)\\)|)",
            B = RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            I = RegExp("^" + O + "*," + O + "*"),
            R = RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            z = RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            X = RegExp(W),
            U = RegExp("^" + F + "$"),
            V = {
                ID: RegExp("^#(" + P + ")"),
                CLASS: RegExp("^\\.(" + P + ")"),
                TAG: RegExp("^(" + P.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + M),
                PSEUDO: RegExp("^" + W),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: RegExp("^(?:" + H + ")$", "i"),
                needsContext: RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            et = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
        try {
            A.apply((j = L.call($.childNodes)), $.childNodes), j[$.childNodes.length].nodeType;
        } catch (en) {
            A = {
                apply: j.length
                    ? function (e, t) {
                          E.apply(e, L.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function er(e, t, i, o) {
            var a, u, l, p, g, v, x, b, _, w;
            if (((t ? t.ownerDocument || t : $) !== f && c(t), (t = t || f), (i = i || []), !e || "string" != typeof e)) return i;
            if (1 !== (p = t.nodeType) && 9 !== p) return [];
            if (d && !o) {
                if ((a = J.exec(e))) {
                    if ((l = a[1])) {
                        if (9 === p) {
                            if (!(u = t.getElementById(l)) || !u.parentNode) return i;
                            if (u.id === l) return i.push(u), i;
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(l)) && m(t, u) && u.id === l) return i.push(u), i;
                    } else {
                        if (a[2]) return A.apply(i, t.getElementsByTagName(e)), i;
                        if ((l = a[3]) && n.getElementsByClassName && t.getElementsByClassName) return A.apply(i, t.getElementsByClassName(l)), i;
                    }
                }
                if (n.qsa && (!h || !h.test(e))) {
                    if (((b = x = y), (_ = t), (w = 9 === p && e), 1 === p && "object" !== t.nodeName.toLowerCase())) {
                        for (v = eh(e), (x = t.getAttribute("id")) ? (b = x.replace(Z, "\\$&")) : t.setAttribute("id", b), b = "[id='" + b + "'] ", g = v.length; g--; ) v[g] = b + eg(v[g]);
                        (_ = (K.test(e) && ep(t.parentNode)) || t), (w = v.join(","));
                    }
                    if (w)
                        try {
                            return A.apply(i, _.querySelectorAll(w)), i;
                        } catch (T) {
                        } finally {
                            x || t.removeAttribute("id");
                        }
                }
            }
            return (function e(t, i, o, a) {
                var u,
                    l,
                    c,
                    f,
                    p,
                    h = eh(t);
                if (!a && 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === i.nodeType && d && r.relative[l[1].type]) {
                        if (!(i = (r.find.ID(c.matches[0].replace(ee, et), i) || [])[0])) return o;
                        t = t.slice(l.shift().value.length);
                    }
                    for (u = V.needsContext.test(t) ? 0 : l.length; u-- && ((c = l[u]), !r.relative[(f = c.type)]); )
                        if ((p = r.find[f]) && (a = p(c.matches[0].replace(ee, et), (K.test(l[0].type) && ep(i.parentNode)) || i))) {
                            if ((l.splice(u, 1), !(t = a.length && eg(l)))) return A.apply(o, a), o;
                            break;
                        }
                }
                return s(t, h)(a, i, !d, o, (K.test(t) && ep(i.parentNode)) || i), o;
            })(e.replace(B, "$1"), t, i, o);
        }
        function ei() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function eo(e) {
            return (e[y] = !0), e;
        }
        function es(e) {
            var t = f.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ea(e, t) {
            for (var n = e.split("|"), i = e.length; i--; ) r.attrHandle[n[i]] = t;
        }
        function eu(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n) {
                for (; (n = n.nextSibling); ) if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function el(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function ec(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function ef(e) {
            return eo(function (t) {
                return (
                    (t = +t),
                    eo(function (n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ep(e) {
            return e && typeof e.getElementsByTagName !== N && e;
        }
        for (t in ((n = er.support = {}),
        (o = er.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (c = er.setDocument = function (e) {
            var t,
                i = e ? e.ownerDocument || e : $,
                s = i.defaultView;
            return i !== f && 9 === i.nodeType && i.documentElement
                ? ((f = i),
                  (p = i.documentElement),
                  (d = !o(i)),
                  s &&
                      s !== s.top &&
                      (s.addEventListener
                          ? s.addEventListener(
                                "unload",
                                function () {
                                    c();
                                },
                                !1
                            )
                          : s.attachEvent &&
                            s.attachEvent("onunload", function () {
                                c();
                            })),
                  (n.attributes = es(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = es(function (e) {
                      return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName =
                      Q.test(i.getElementsByClassName) &&
                      es(function (e) {
                          return (e.innerHTML = "<div class='a'></div><div class='a i'></div>"), (e.firstChild.className = "i"), 2 === e.getElementsByClassName("i").length;
                      })),
                  (n.getById = es(function (e) {
                      return (p.appendChild(e).id = y), !i.getElementsByName || !i.getElementsByName(y).length;
                  })),
                  n.getById
                      ? ((r.find.ID = function (e, t) {
                            if (typeof t.getElementById !== N && d) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : [];
                            }
                        }),
                        (r.filter.ID = function (e) {
                            var t = e.replace(ee, et);
                            return function (e) {
                                return e.getAttribute("id") === t;
                            };
                        }))
                      : (delete r.find.ID,
                        (r.filter.ID = function (e) {
                            var t = e.replace(ee, et);
                            return function (e) {
                                var n = typeof e.getAttributeNode !== N && e.getAttributeNode("id");
                                return n && n.value === t;
                            };
                        })),
                  (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                            return typeof t.getElementsByTagName !== N ? t.getElementsByTagName(e) : void 0;
                        }
                      : function (e, t) {
                            var n,
                                r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                return r;
                            }
                            return o;
                        }),
                  (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                          return typeof t.getElementsByClassName !== N && d ? t.getElementsByClassName(e) : void 0;
                      }),
                  (g = []),
                  (h = []),
                  (n.qsa = Q.test(i.querySelectorAll)) &&
                      (es(function (e) {
                          (e.innerHTML = "<select t=''><option selected=''></option></select>"),
                              e.querySelectorAll("[t^='']").length && h.push("[*^$]=" + O + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length || h.push("\\[" + O + "*(?:value|" + H + ")"),
                              e.querySelectorAll(":checked").length || h.push(":checked");
                      }),
                      es(function (e) {
                          var t = i.createElement("input");
                          t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length && h.push("name" + O + "*[*^$|!~]?="),
                              e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              h.push(",.*:");
                      })),
                  (n.matchesSelector = Q.test((v = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                      es(function (e) {
                          (n.disconnectedMatch = v.call(e, "div")), v.call(e, "[s!='']:x"), g.push("!=", W);
                      }),
                  (h = h.length && RegExp(h.join("|"))),
                  (g = g.length && RegExp(g.join("|"))),
                  (m =
                      (t = Q.test(p.compareDocumentPosition)) || Q.test(p.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                            }
                          : function (e, t) {
                                if (t) {
                                    for (; (t = t.parentNode); ) if (t === e) return !0;
                                }
                                return !1;
                            }),
                  (C = t
                      ? function (e, t) {
                            if (e === t) return (l = !0), 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                                r ||
                                (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                    ? e === i || (e.ownerDocument === $ && m($, e))
                                        ? -1
                                        : t === i || (t.ownerDocument === $ && m($, t))
                                        ? 1
                                        : u
                                        ? q.call(u, e) - q.call(u, t)
                                        : 0
                                    : 4 & r
                                    ? -1
                                    : 1)
                            );
                        }
                      : function (e, t) {
                            if (e === t) return (l = !0), 0;
                            var n,
                                r = 0,
                                o = e.parentNode,
                                s = t.parentNode,
                                a = [e],
                                c = [t];
                            if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : u ? q.call(u, e) - q.call(u, t) : 0;
                            if (o === s) return eu(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) c.unshift(n);
                            for (; a[r] === c[r]; ) r++;
                            return r ? eu(a[r], c[r]) : a[r] === $ ? -1 : c[r] === $ ? 1 : 0;
                        }),
                  i)
                : f;
        }),
        (er.matches = function (e, t) {
            return er(e, null, null, t);
        }),
        (er.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== f && c(e), (t = t.replace(z, "='$1']")), !(!n.matchesSelector || !d || (g && g.test(t)) || (h && h.test(t)))))
                try {
                    var r = v.call(e, t);
                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                } catch (i) {}
            return er(t, f, null, [e]).length > 0;
        }),
        (er.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && c(e), m(e, t);
        }),
        (er.attr = function (e, t) {
            (e.ownerDocument || e) !== f && c(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !d) : void 0;
            return void 0 !== o ? o : n.attributes || !d ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }),
        (er.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (er.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;
            if (((l = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(C), l)) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
            }
            return (u = null), e;
        }),
        (i = er.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
        }),
        ((r = er.selectors = {
            cacheLength: 50,
            createPseudo: eo,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(ee, et)), (e[3] = (e[4] || e[5] || "").replace(ee, et)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || er.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && er.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[5] && e[2];
                    return V.CHILD.test(e[0])
                        ? null
                        : (e[3] && void 0 !== e[4] ? (e[2] = e[4]) : n && X.test(n) && (t = eh(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ee, et).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = _[e + " "];
                    return (
                        t ||
                        ((t = RegExp("(^|" + O + ")" + e + "(" + O + "|$)")),
                        _(e, function (e) {
                            return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute !== N && e.getAttribute("class")) || "");
                        }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = er.attr(r, e);
                        return null == i
                            ? "!=" === t
                            : !t ||
                                  ((i += ""),
                                  "=" === t
                                      ? i === n
                                      : "!=" === t
                                      ? i !== n
                                      : "^=" === t
                                      ? n && 0 === i.indexOf(n)
                                      : "*=" === t
                                      ? n && i.indexOf(n) > -1
                                      : "$=" === t
                                      ? n && i.slice(-n.length) === n
                                      : "~=" === t
                                      ? (" " + i + " ").indexOf(n) > -1
                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, u) {
                              var l,
                                  c,
                                  f,
                                  p,
                                  d,
                                  h,
                                  g = o !== s ? "nextSibling" : "previousSibling",
                                  v = t.parentNode,
                                  m = a && t.nodeName.toLowerCase(),
                                  $ = !u && !a;
                              if (v) {
                                  if (o) {
                                      for (; g; ) {
                                          for (f = t; (f = f[g]); ) if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                          h = g = "only" === e && !h && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((h = [s ? v.firstChild : v.lastChild]), s && $)) {
                                      for (d = (l = (c = v[y] || (v[y] = {}))[e] || [])[0] === x && l[1], p = l[0] === x && l[2], f = d && v.childNodes[d]; (f = (++d && f && f[g]) || (p = d = 0) || h.pop()); )
                                          if (1 === f.nodeType && ++p && f === t) {
                                              c[e] = [x, d, p];
                                              break;
                                          }
                                  } else if ($ && (l = (t[y] || (t[y] = {}))[e]) && l[0] === x) p = l[1];
                                  else for (; (f = (++d && f && f[g]) || (p = d = 0) || h.pop()) && (!((a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) && ++p) || ($ && ((f[y] || (f[y] = {}))[e] = [x, p]), f !== t)); );
                                  return (p -= i) === r || (p % r == 0 && p / r >= 0);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || er.error("unsupported pseudo: " + e);
                    return i[y]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                              ? eo(function (e, n) {
                                    for (var r, o = i(e, t), s = o.length; s--; ) e[(r = q.call(e, o[s]))] = !(n[r] = o[s]);
                                })
                              : function (e) {
                                    return i(e, 0, n);
                                })
                        : i;
                },
            },
            pseudos: {
                not: eo(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[y]
                        ? eo(function (e, t, n, i) {
                              for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, i, o) {
                              return (t[0] = e), r(t, null, o, n), !n.pop();
                          };
                }),
                has: eo(function (e) {
                    return function (t) {
                        return er(e, t).length > 0;
                    };
                }),
                contains: eo(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }),
                lang: eo(function (e) {
                    return (
                        U.test(e || "") || er.error("unsupported lang: " + e),
                        (e = e.replace(ee, et).toLowerCase()),
                        function (t) {
                            var n;
                            do if ((n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === p;
                },
                focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !r.pseudos.empty(e);
                },
                header: function (e) {
                    return G.test(e.nodeName);
                },
                input: function (e) {
                    return Y.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ef(function () {
                    return [0];
                }),
                last: ef(function (e, t) {
                    return [t - 1];
                }),
                eq: ef(function (e, t, n) {
                    return [0 > n ? n + t : n];
                }),
                even: ef(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: ef(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: ef(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ef(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = el(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ec(t);
        function ed() {}
        function eh(e, t) {
            var n,
                i,
                o,
                s,
                a,
                u,
                l,
                c = w[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = r.preFilter; a; ) {
                for (s in ((!n || (i = I.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                (n = !1),
                (i = R.exec(a)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (a = a.slice(n.length))),
                r.filter))
                    (i = V[s].exec(a)) && (!l[s] || (i = l[s](i))) && ((n = i.shift()), o.push({ value: n, type: s, matches: i }), (a = a.slice(n.length)));
                if (!n) break;
            }
            return t ? a.length : a ? er.error(e) : w(e, u).slice(0);
        }
        function eg(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function ev(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = b++;
            return t.first
                ? function (t, n, o) {
                      for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
                  }
                : function (t, n, s) {
                      var a,
                          u,
                          l = [x, o];
                      if (s) {
                          for (; (t = t[r]); ) if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || i) {
                                  if ((a = (u = t[y] || (t[y] = {}))[r]) && a[0] === x && a[1] === o) return (l[2] = a[2]);
                                  if (((u[r] = l), (l[2] = e(t, n, s)))) return !0;
                              }
                  };
        }
        function em(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function ey(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s;
        }
        function e$(e, t, n, r, i, o) {
            return (
                r && !r[y] && (r = e$(r)),
                i && !i[y] && (i = e$(i, o)),
                eo(function (o, s, a, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = s.length,
                        g =
                            o ||
                            (function e(t, n, r) {
                                for (var i = 0, o = n.length; o > i; i++) er(t, n[i], r);
                                return r;
                            })(t || "*", a.nodeType ? [a] : a, []),
                        v = e && (o || !t) ? ey(g, p, e, a, u) : g,
                        m = n ? (i || (o ? e : h || r) ? [] : s) : v;
                    if ((n && n(v, m, a, u), r)) for (l = ey(m, d), r(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (l = [], c = m.length; c--; ) (f = m[c]) && l.push((v[c] = f));
                                i(null, (m = []), l, u);
                            }
                            for (c = m.length; c--; ) (f = m[c]) && (l = i ? q.call(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f));
                        }
                    } else (m = ey(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, u) : A.apply(s, m);
                })
            );
        }
        function ex(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    s = r.relative[e[0].type],
                    u = s || r.relative[" "],
                    l = s ? 1 : 0,
                    c = ev(
                        function (e) {
                            return e === t;
                        },
                        u,
                        !0
                    ),
                    f = ev(
                        function (e) {
                            return q.call(t, e) > -1;
                        },
                        u,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            return (!s && (r || n !== a)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        },
                    ];
                o > l;
                l++
            )
                if ((n = r.relative[e[l].type])) p = [ev(em(p), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[y]) {
                        for (i = ++l; o > i && !r.relative[e[i].type]; i++);
                        return e$(l > 1 && em(p), l > 1 && eg(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"), n, i > l && ex(e.slice(l, i)), o > i && ex((e = e.slice(i))), o > i && eg(e));
                    }
                    p.push(n);
                }
            return em(p);
        }
        return (
            (ed.prototype = r.filters = r.pseudos),
            (r.setFilters = new ed()),
            (s = er.compile = function (e, t) {
                var n,
                    i,
                    o,
                    s,
                    u,
                    l,
                    c = [],
                    p = [],
                    d = T[e + " "];
                if (!d) {
                    for (t || (t = eh(e)), l = t.length; l--; ) (d = ex(t[l]))[y] ? c.push(d) : p.push(d);
                    d = T(
                        e,
                        ((n = p),
                        (o = (i = c).length > 0),
                        (s = n.length > 0),
                        (u = function (e, t, u, l, c) {
                            var p,
                                d,
                                h,
                                g = 0,
                                v = "0",
                                m = e && [],
                                y = [],
                                $ = a,
                                b = e || (s && r.find.TAG("*", c)),
                                _ = (x += null == $ ? 1 : Math.random() || 0.1),
                                w = b.length;
                            for (c && (a = t !== f && t); v !== w && null != (p = b[v]); v++) {
                                if (s && p) {
                                    for (d = 0; (h = n[d++]); )
                                        if (h(p, t, u)) {
                                            l.push(p);
                                            break;
                                        }
                                    c && (x = _);
                                }
                                o && ((p = !h && p) && g--, e && m.push(p));
                            }
                            if (((g += v), o && v !== g)) {
                                for (d = 0; (h = i[d++]); ) h(m, y, t, u);
                                if (e) {
                                    if (g > 0) for (; v--; ) m[v] || y[v] || (y[v] = S.call(l));
                                    y = ey(y);
                                }
                                A.apply(l, y), c && !e && y.length > 0 && g + i.length > 1 && er.uniqueSort(l);
                            }
                            return c && ((x = _), (a = $)), m;
                        }),
                        o ? eo(u) : u)
                    );
                }
                return d;
            }),
            (n.sortStable = y.split("").sort(C).join("") === y),
            (n.detectDuplicates = !!l),
            c(),
            (n.sortDetached = es(function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"));
            })),
            es(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ea("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                es(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ea("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
                }),
            es(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ea(H, function (e, t, n) {
                    var r;
                    return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            er
        );
    })(a);
    (o.find = t), (o.expr = t.selectors), (o.expr[":"] = o.expr.pseudos), (o.unique = t.uniqueSort), (o.text = t.getText), (o.isXMLDoc = t.isXML), (o.contains = t.contains);
    var u = o.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function x(e, t, n) {
        if (o.isFunction(t))
            return o.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return o.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (w.test(t)) return o.filter(t, e, n);
            t = o.filter(t, e);
        }
        return o.grep(e, function (e) {
            return g.call(t, e) >= 0 !== n;
        });
    }
    (o.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? o.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : o.find.matches(
                      e,
                      o.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        o.fn.extend({
            find: function (e) {
                var t,
                    n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        o(e).filter(function () {
                            for (t = 0; n > t; t++) if (o.contains(i[t], this)) return !0;
                        })
                    );
                for (t = 0; n > t; t++) o.find(e, i[t], r);
                return ((r = this.pushStack(n > 1 ? o.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e), r;
            },
            filter: function (e) {
                return this.pushStack(x(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(x(this, e || [], !0));
            },
            is: function (e) {
                return !!x(this, "string" == typeof e && u.test(e) ? o(e) : e || [], !1).length;
            },
        });
    var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((o.fn.init = function (e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : z.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || y).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (((t = t instanceof o ? t[0] : t), o.merge(this, o.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), v.test(n[1]) && o.isPlainObject(t)))
                    for (n in t) o.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            return (r = m.getElementById(n[2])) && r.parentNode && ((this.length = 1), (this[0] = r)), (this.context = m), (this.selector = e), this;
        }
        return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : o.isFunction(e)
            ? void 0 !== y.ready
                ? y.ready(e)
                : e(o)
            : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), o.makeArray(e, this));
    }).prototype = o.fn),
        (y = o(m));
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    function D(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    o.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && o(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
    }),
        o.fn.extend({
            has: function (e) {
                var t = o(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; n > e; e++) if (o.contains(this, t[e])) return !0;
                });
            },
            closest: function (e, t) {
                for (var n, r = 0, i = this.length, s = [], a = u.test(e) || "string" != typeof e ? o(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && o.find.matchesSelector(n, e))) {
                            s.push(n);
                            break;
                        }
                return this.pushStack(s.length > 1 ? o.unique(s) : s);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? g.call(o(e), this[0]) : g.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(o.unique(o.merge(this.get(), o(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        o.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return o.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return o.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return D(e, "nextSibling");
                },
                prev: function (e) {
                    return D(e, "previousSibling");
                },
                nextAll: function (e) {
                    return o.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return o.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return o.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return o.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return o.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return o.sibling(e.firstChild);
                },
                contents: function (e) {
                    return e.contentDocument || o.merge([], e.childNodes);
                },
            },
            function (e, t) {
                o.fn[e] = function (n, r) {
                    var i = o.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = o.filter(r, i)), this.length > 1 && (C[e] || o.unique(i), B.test(e) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var E = /\S+/g,
        F = {};
    function I() {
        m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready();
    }
    (o.Callbacks = function (e) {
        e =
            "string" == typeof e
                ? F[e] ||
                  ((n = F[(t = e)] = {}),
                  o.each(t.match(E) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : o.extend({}, e);
        var t,
            n,
            r,
            i,
            s,
            a,
            u,
            l,
            c = [],
            f = !e.once && [],
            p = function (t) {
                for (r = e.memory && t, i = !0, l = a || 0, a = 0, u = c.length, s = !0; c && u > l; l++)
                    if (!1 === c[l].apply(t[0], t[1]) && e.stopOnFalse) {
                        r = !1;
                        break;
                    }
                (s = !1), c && (f ? f.length && p(f.shift()) : r ? (c = []) : d.disable());
            },
            d = {
                add: function () {
                    if (c) {
                        var t = c.length;
                        (function t(n) {
                            o.each(n, function (n, r) {
                                var i = o.type(r);
                                "function" === i ? (e.unique && d.has(r)) || c.push(r) : r && r.length && "string" !== i && t(r);
                            });
                        })(arguments),
                            s ? (u = c.length) : r && ((a = t), p(r));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        c &&
                            o.each(arguments, function (e, t) {
                                for (var n; (n = o.inArray(t, c, n)) > -1; ) c.splice(n, 1), s && (u >= n && u--, l >= n && l--);
                            }),
                        this
                    );
                },
                has: function (e) {
                    return e ? o.inArray(e, c) > -1 : !(!c || !c.length);
                },
                empty: function () {
                    return (c = []), (u = 0), this;
                },
                disable: function () {
                    return (c = f = r = void 0), this;
                },
                disabled: function () {
                    return !c;
                },
                lock: function () {
                    return (f = void 0), r || d.disable(), this;
                },
                locked: function () {
                    return !f;
                },
                fireWith: function (e, t) {
                    return c && (!i || f) && ((t = [e, (t = t || []).slice ? t.slice() : t]), s ? f.push(t) : p(t)), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return d;
    }),
        o.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", o.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", o.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", o.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return o
                                .Deferred(function (n) {
                                    o.each(t, function (t, s) {
                                        var a = o.isFunction(e[t]) && e[t];
                                        i[s[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && o.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? o.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    o.each(t, function (e, s) {
                        var a = s[2],
                            u = s[3];
                        (r[s[1]] = a.add),
                            u &&
                                a.add(
                                    function () {
                                        n = u;
                                    },
                                    t[1 ^ e][2].disable,
                                    t[2][2].lock
                                ),
                            (i[s[0]] = function () {
                                return i[s[0] + "With"](this === i ? r : this, arguments), this;
                            }),
                            (i[s[0] + "With"] = a.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t,
                    n,
                    r,
                    i = 0,
                    s = d.call(arguments),
                    a = s.length,
                    u = 1 !== a || (e && o.isFunction(e.promise)) ? a : 0,
                    l = 1 === u ? e : o.Deferred(),
                    c = function (e, n, r) {
                        return function (i) {
                            (n[e] = this), (r[e] = arguments.length > 1 ? d.call(arguments) : i), r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
                        };
                    };
                if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) s[i] && o.isFunction(s[i].promise) ? s[i].promise().done(c(i, r, s)).fail(l.reject).progress(c(i, n, t)) : --u;
                return u || l.resolveWith(r, s), l.promise();
            },
        }),
        (o.fn.ready = function (e) {
            return o.ready.promise().done(e), this;
        }),
        o.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? o.readyWait++ : o.ready(!0);
            },
            ready: function (e) {
                (!0 === e ? --o.readyWait : o.isReady) || ((o.isReady = !0), (!0 !== e && --o.readyWait > 0) || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")));
            },
        }),
        (o.ready.promise = function (e) {
            return H || ((H = o.Deferred()), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(e);
        }),
        o.ready.promise();
    var J = (o.access = function (e, t, n, r, i, s, a) {
        var u = 0,
            l = e.length,
            c = null == n;
        if ("object" === o.type(n)) for (u in ((i = !0), n)) o.access(e, t, u, n[u], !0, s, a);
        else if (
            void 0 !== r &&
            ((i = !0),
            o.isFunction(r) || (a = !0),
            c &&
                (a
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                          return c.call(o(e), n);
                      }))),
            t)
        )
            for (; l > u; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    });
    function K() {
        Object.defineProperty((this.cache = {}), 0, {
            get: function () {
                return {};
            },
        }),
            (this.expando = o.expando + Math.random());
    }
    (o.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }),
        (K.uid = 1),
        (K.accepts = o.acceptData),
        (K.prototype = {
            key: function (e) {
                if (!K.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = K.uid++;
                    try {
                        (t[this.expando] = { value: n }), Object.defineProperties(e, t);
                    } catch (r) {
                        (t[this.expando] = n), o.extend(e, t);
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n;
            },
            set: function (e, t, n) {
                var r,
                    i = this.key(e),
                    s = this.cache[i];
                if ("string" == typeof t) s[t] = n;
                else if (o.isEmptyObject(s)) o.extend(this.cache[i], t);
                else for (r in t) s[r] = t[r];
                return s;
            },
            get: function (e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t];
            },
            access: function (e, t, n) {
                var r;
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? (void 0 !== (r = this.get(e, t)) ? r : this.get(e, o.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r,
                    i,
                    s = this.key(e),
                    a = this.cache[s];
                if (void 0 === t) this.cache[s] = {};
                else for (o.isArray(t) ? (r = t.concat(t.map(o.camelCase))) : ((i = o.camelCase(t)), (r = (t in a) ? [t, i] : ((r = i) in a) ? [r] : r.match(E) || [])), n = r.length; n--; ) delete a[r[n]];
            },
            hasData: function (e) {
                return !o.isEmptyObject(this.cache[e[this.expando]] || {});
            },
            discard: function (e) {
                e[this.expando] && delete this.cache[e[this.expando]];
            },
        });
    var L = new K(),
        M = new K(),
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) {
            if (((r = "data-" + t.replace(O, "-$1").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : N.test(n) ? o.parseJSON(n) : n));
                } catch (i) {}
                M.set(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    o.extend({
        hasData: function (e) {
            return M.hasData(e) || L.hasData(e);
        },
        data: function (e, t, n) {
            return M.access(e, t, n);
        },
        removeData: function (e, t) {
            M.remove(e, t);
        },
        _data: function (e, t, n) {
            return L.access(e, t, n);
        },
        _removeData: function (e, t) {
            L.remove(e, t);
        },
    }),
        o.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    s = this[0],
                    a = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = M.get(s)), 1 === s.nodeType && !L.get(s, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) 0 === (r = a[n].name).indexOf("data-") && P(s, (r = o.camelCase(r.slice(5))), i[r]);
                        L.set(s, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          M.set(this, e);
                      })
                    : J(
                          this,
                          function (t) {
                              var n,
                                  r = o.camelCase(e);
                              if (s && void 0 === t) {
                                  if (void 0 !== (n = M.get(s, e)) || void 0 !== (n = M.get(s, r)) || void 0 !== (n = P(s, r, void 0))) return n;
                              } else
                                  this.each(function () {
                                      var n = M.get(this, r);
                                      M.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && M.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    M.remove(this, e);
                });
            },
        }),
        o.extend({
            queue: function (e, t, n) {
                var r;
                return e ? ((t = (t || "fx") + "queue"), (r = L.get(e, t)), n && (!r || o.isArray(n) ? (r = L.access(e, t, o.makeArray(n))) : r.push(n)), r || []) : void 0;
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = o.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = o._queueHooks(e, t),
                    a = function () {
                        o.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, a, s)), !r && s && s.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    L.get(e, n) ||
                    L.access(e, n, {
                        empty: o.Callbacks("once memory").add(function () {
                            L.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        o.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? o.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = o.queue(this, e, t);
                              o._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && o.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    o.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = o.Deferred(),
                    s = this,
                    a = this.length,
                    u = function () {
                        --r || i.resolveWith(s, [s]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = L.get(s[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
                return u(), i.promise(t);
            },
        });
    var b,
        Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function (e, t) {
            return (e = t || e), "none" === o.css(e, "display") || !o.contains(e.ownerDocument, e);
        },
        T = /^(?:checkbox|radio)$/i;
    ((b = m.createDocumentFragment().appendChild(m.createElement("div"))).innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    var U = "undefined";
    l.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return m.activeElement;
        } catch (e) {}
    }
    (o.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v,
                m = L.get(e);
            if (m)
                for (
                    n.handler && ((n = (s = n).handler), (i = s.selector)),
                        n.guid || (n.guid = o.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (a = m.handle) ||
                            (a = m.handle = function (t) {
                                return "function" !== U && o.event.triggered !== t.type ? o.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(E) || [""]).length;
                    c--;

                )
                    (h = v = (u = Y.exec(t[c]) || [])[1]),
                        (g = (u[2] || "").split(".").sort()),
                        h &&
                            ((p = o.event.special[h] || {}),
                            (h = (i ? p.delegateType : p.bindType) || h),
                            (p = o.event.special[h] || {}),
                            (f = o.extend({ type: h, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && o.expr.match.needsContext.test(i), namespace: g.join(".") }, s)),
                            (d = l[h]) || (((d = l[h] = []).delegateCount = 0), (p.setup && !1 !== p.setup.call(e, r, g, a)) || (e.addEventListener && e.addEventListener(h, a, !1))),
                            p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
                            i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                            (o.event.global[h] = !0));
        },
        remove: function (e, t, n, r, i) {
            var s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v,
                m = L.hasData(e) && L.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(E) || [""]).length; c--; )
                    if (((h = v = (u = Y.exec(t[c]) || [])[1]), (g = (u[2] || "").split(".").sort()), h)) {
                        for (p = o.event.special[h] || {}, d = l[(h = (r ? p.delegateType : p.bindType) || h)] || [], u = u[2] && RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = d.length; s--; )
                            (f = d[s]),
                                (!i && v !== f.origType) ||
                                    (n && n.guid !== f.guid) ||
                                    (u && !u.test(f.namespace)) ||
                                    (r && r !== f.selector && ("**" !== r || !f.selector)) ||
                                    (d.splice(s, 1), f.selector && d.delegateCount--, p.remove && p.remove.call(e, f));
                        a && !d.length && ((p.teardown && !1 !== p.teardown.call(e, g, m.handle)) || o.removeEvent(e, h, m.handle), delete l[h]);
                    } else for (h in l) o.event.remove(e, h + t[c], n, r, !0);
                o.isEmptyObject(l) && (delete m.handle, L.remove(e, "events"));
            }
        },
        trigger: function (e, t, n, r) {
            var i,
                s,
                u,
                l,
                c,
                f,
                p,
                d = [n || m],
                h = j.call(e, "type") ? e.type : e,
                g = j.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((s = u = n = n || m),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !X.test(h + o.event.triggered) &&
                    (h.indexOf(".") >= 0 && ((h = (g = h.split(".")).shift()), g.sort()),
                    (c = 0 > h.indexOf(":") && "on" + h),
                    ((e = e[o.expando] ? e : new o.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = g.join(".")),
                    (e.namespace_re = e.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : o.makeArray(t, [e])),
                    (p = o.event.special[h] || {}),
                    r || !p.trigger || !1 !== p.trigger.apply(n, t)))
            ) {
                if (!r && !p.noBubble && !o.isWindow(n)) {
                    for (l = p.delegateType || h, X.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), (u = s);
                    u === (n.ownerDocument || m) && d.push(u.defaultView || u.parentWindow || a);
                }
                for (i = 0; (s = d[i++]) && !e.isPropagationStopped(); )
                    (e.type = i > 1 ? l : p.bindType || h),
                        (f = (L.get(s, "events") || {})[e.type] && L.get(s, "handle")) && f.apply(s, t),
                        (f = c && s[c]) && f.apply && o.acceptData(s) && ((e.result = f.apply(s, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = h),
                    r ||
                        e.isDefaultPrevented() ||
                        (p._default && !1 !== p._default.apply(d.pop(), t)) ||
                        !o.acceptData(n) ||
                        (c && o.isFunction(n[h]) && !o.isWindow(n) && ((u = n[c]) && (n[c] = null), (o.event.triggered = h), n[h](), (o.event.triggered = void 0), u && (n[c] = u))),
                    e.result
                );
            }
        },
        dispatch: function (e) {
            e = o.event.fix(e);
            var t,
                n,
                r,
                i,
                s,
                a = [],
                u = d.call(arguments),
                l = (L.get(this, "events") || {})[e.type] || [],
                c = o.event.special[e.type] || {};
            if (((u[0] = e), (e.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, e))) {
                for (a = o.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem, n = 0; (s = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(s.namespace)) &&
                            ((e.handleObj = s), (e.data = s.data), void 0 !== (r = ((o.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                s,
                a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (r = [], n = 0; u > n; n++) void 0 === r[(i = (s = t[n]).selector + " ")] && (r[i] = s.needsContext ? o(i, this).index(l) >= 0 : o.find(i, this, null, [l]).length), r[i] && r.push(s);
                        r.length && a.push({ elem: l, handlers: r });
                    }
            }
            return u < t.length && a.push({ elem: this, handlers: t.slice(u) }), a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n,
                    r,
                    i,
                    o = t.button;
                return (
                    null == e.pageX &&
                        null != t.clientX &&
                        ((r = (n = e.target.ownerDocument || m).documentElement),
                        (i = n.body),
                        (e.pageX = t.clientX + ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                        (e.pageY = t.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                );
            },
        },
        fix: function (e) {
            if (e[o.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                s = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = W.test(i) ? this.mouseHooks : V.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new o.Event(s), t = r.length; t--; ) e[(n = r[t])] = s[n];
            return e.target || (e.target = m), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0;
                },
                _default: function (e) {
                    return o.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, r) {
            var i = o.extend(new o.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? o.event.trigger(i, null, t) : o.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (o.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
        }),
        (o.Event = function (e, t) {
            return this instanceof o.Event
                ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault()) ? Z : $)) : (this.type = e),
                  t && o.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || o.now()),
                  void (this[o.expando] = !0))
                : new o.Event(e, t);
        }),
        (o.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Z), e && e.preventDefault && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Z), e && e.stopPropagation && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = Z), this.stopPropagation();
            },
        }),
        o.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
            o.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    return (r && (r === this || o.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        l.focusinBubbles ||
            o.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    o.event.simulate(t, e.target, o.event.fix(e), !0);
                };
                o.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = L.access(r, t);
                        i || r.addEventListener(e, n, !0), L.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = L.access(r, t) - 1;
                        i ? L.access(r, t, i) : (r.removeEventListener(e, n, !0), L.remove(r, t));
                    },
                };
            }),
        o.fn.extend({
            on: function (e, t, n, r, i) {
                var s, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof t && ((n = n || t), (t = void 0)), e)) this.on(a, t, n, e[a], i);
                    return this;
                }
                if ((null == n && null == r ? ((r = t), (n = t = void 0)) : null == r && ("string" == typeof t ? ((r = n), (n = void 0)) : ((r = n), (n = t), (t = void 0))), !1 === r)) r = $;
                else if (!r) return this;
                return (
                    1 === i &&
                        ((s = r),
                        ((r = function (e) {
                            return o().off(e), s.apply(this, arguments);
                        }).guid = s.guid || (s.guid = o.guid++))),
                    this.each(function () {
                        o.event.add(this, e, r, n, t);
                    })
                );
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), o(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
                    !1 === n && (n = $),
                    this.each(function () {
                        o.event.remove(this, e, n, t);
                    })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    o.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? o.event.trigger(e, t, n, !0) : void 0;
            },
        });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function jb(e, t) {
        return o.nodeName(e, "table") && o.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function kb(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function lb(e) {
        var t = gb.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function mb(e, t) {
        for (var n = 0, r = e.length; r > n; n++) L.set(e[n], "globalEval", !t || L.get(t[n], "globalEval"));
    }
    function nb(e, t) {
        var n, r, i, s, a, u, l, c;
        if (1 === t.nodeType) {
            if (L.hasData(e) && ((s = L.access(e)), (a = L.set(t, s)), (c = s.events))) for (i in (delete a.handle, (a.events = {}), c)) for (n = 0, r = c[i].length; r > n; n++) o.event.add(t, i, c[i][n]);
            M.hasData(e) && ((u = M.access(e)), (l = o.extend({}, u)), M.set(t, l));
        }
    }
    function ob(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && o.nodeName(e, t)) ? o.merge([e], n) : n;
    }
    function pb(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && T.test(e.type) ? (t.checked = e.checked) : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    (ib.optgroup = ib.option),
        (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
        (ib.th = ib.td),
        o.extend({
            clone: function (e, t, n) {
                var r,
                    i,
                    s,
                    a,
                    u = e.cloneNode(!0),
                    c = o.contains(e.ownerDocument, e);
                if (!(l.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || o.isXMLDoc(e))) for (a = ob(u), s = ob(e), r = 0, i = s.length; i > r; r++) pb(s[r], a[r]);
                if (t) {
                    if (n) for (s = s || ob(e), a = a || ob(u), r = 0, i = s.length; i > r; r++) nb(s[r], a[r]);
                    else nb(e, u);
                }
                return (a = ob(u, "script")).length > 0 && mb(a, !c && ob(e, "script")), u;
            },
            buildFragment: function (e, t, n, r) {
                for (var i, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)
                    if ((i = e[d]) || 0 === i) {
                        if ("object" === o.type(i)) o.merge(p, i.nodeType ? [i] : i);
                        else if (cb.test(i)) {
                            for (s = s || f.appendChild(t.createElement("div")), u = ib[(a = (bb.exec(i) || ["", ""])[1].toLowerCase())] || ib._default, s.innerHTML = u[1] + i.replace(ab, "<$1></$2>") + u[2], c = u[0]; c--; )
                                s = s.lastChild;
                            o.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
                        } else p.push(t.createTextNode(i));
                    }
                for (f.textContent = "", d = 0; (i = p[d++]); )
                    if ((!r || -1 === o.inArray(i, r)) && ((l = o.contains(i.ownerDocument, i)), (s = ob(f.appendChild(i), "script")), l && mb(s), n)) for (c = 0; (i = s[c++]); ) fb.test(i.type || "") && n.push(i);
                return f;
            },
            cleanData: function (e) {
                for (var t, n, r, i, s, a, u = o.event.special, l = 0; void 0 !== (n = e[l]); l++) {
                    if (o.acceptData(n) && (s = n[L.expando]) && (t = L.cache[s])) {
                        if ((r = Object.keys(t.events || {})).length) for (a = 0; void 0 !== (i = r[a]); a++) u[i] ? o.event.remove(n, i) : o.removeEvent(n, i, t.handle);
                        L.cache[s] && delete L.cache[s];
                    }
                    delete M.cache[n[M.expando]];
                }
            },
        }),
        o.fn.extend({
            text: function (e) {
                return J(
                    this,
                    function (e) {
                        return void 0 === e
                            ? o.text(this)
                            : this.empty().each(function () {
                                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && jb(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = jb(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                for (var n, r = e ? o.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || o.cleanData(ob(n)), n.parentNode && (t && o.contains(n.ownerDocument, n) && mb(ob(n, "script")), n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (o.cleanData(ob(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return o.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return J(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !db.test(e) && !ib[(bb.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(ab, "<$1></$2>");
                            try {
                                for (; r > n; n++) (t = this[n] || {}), 1 === t.nodeType && (o.cleanData(ob(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (i) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = arguments[0];
                return (
                    this.domManip(arguments, function (t) {
                        (e = this.parentNode), o.cleanData(ob(this)), e && e.replaceChild(t, this);
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (t, n) {
                t = e.apply([], t);
                var r,
                    i,
                    s,
                    a,
                    u,
                    c,
                    f = 0,
                    p = this.length,
                    d = this,
                    h = p - 1,
                    g = t[0],
                    v = o.isFunction(g);
                if (v || (p > 1 && "string" == typeof g && !l.checkClone && eb.test(g)))
                    return this.each(function (r) {
                        var i = d.eq(r);
                        v && (t[0] = g.call(this, r, i.html())), i.domManip(t, n);
                    });
                if (p && ((i = (r = o.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild), 1 === r.childNodes.length && (r = i), i)) {
                    for (a = (s = o.map(ob(r, "script"), kb)).length; p > f; f++) (u = r), f !== h && ((u = o.clone(u, !0, !0)), a && o.merge(s, ob(u, "script"))), n.call(this[f], u, f);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, o.map(s, lb), f = 0; a > f; f++)
                            (u = s[f]), fb.test(u.type || "") && !L.access(u, "globalEval") && o.contains(c, u) && (u.src ? o._evalUrl && o._evalUrl(u.src) : o.globalEval(u.textContent.replace(hb, "")));
                }
                return this;
            },
        }),
        o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            o.fn[e] = function (e) {
                for (var n, r = [], i = o(e), s = i.length - 1, a = 0; s >= a; a++) (n = a === s ? this : this.clone(!0)), o(i[a])[t](n), f.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var H,
        qb,
        rb = {};
    function sb(e, t) {
        var n = o(t.createElement(e)).appendTo(t.body),
            r = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(n[0]).display : o.css(n[0], "display");
        return n.detach(), r;
    }
    function tb(e) {
        var t = m,
            n = rb[e];
        return (
            n || (("none" !== (n = sb(e, t)) && n) || ((t = (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), (n = sb(e, t)), qb.detach()), (rb[e] = n)), n
        );
    }
    var ub = /^margin/,
        vb = RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null);
        };
    function xb(e, t, n) {
        var r,
            i,
            s,
            a,
            u = e.style;
        return (
            (n = n || wb(e)) && (a = n.getPropertyValue(t) || n[t]),
            n &&
                ("" !== a || o.contains(e.ownerDocument, e) || (a = o.style(e, t)),
                vb.test(a) && ub.test(t) && ((r = u.width), (i = u.minWidth), (s = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = s))),
            void 0 !== a ? a + "" : a
        );
    }
    function yb(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            },
        };
    }
    !(function () {
        var e,
            t,
            n = m.documentElement,
            r = m.createElement("div"),
            i = m.createElement("div");
        function s() {
            (i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"), n.appendChild(r);
            var s = a.getComputedStyle(i, null);
            (e = "1%" !== s.top), (t = "4px" === s.width), n.removeChild(r);
        }
        (i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (l.clearCloneStyle = "content-box" === i.style.backgroundClip),
            (r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            r.appendChild(i),
            a.getComputedStyle &&
                o.extend(l, {
                    pixelPosition: function () {
                        return s(), e;
                    },
                    boxSizingReliable: function () {
                        return null == t && s(), t;
                    },
                    reliableMarginRight: function () {
                        var e,
                            t = i.appendChild(m.createElement("div"));
                        return (
                            (t.style.cssText = i.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
                            (t.style.marginRight = t.style.width = "0"),
                            (i.style.width = "1px"),
                            n.appendChild(r),
                            (e = !parseFloat(a.getComputedStyle(t, null).marginRight)),
                            n.removeChild(r),
                            (i.innerHTML = ""),
                            e
                        );
                    },
                });
    })(),
        (o.swap = function (e, t, n, r) {
            var i,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
            return i;
        });
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = { position: "absolute", visibility: "hidden", display: "block" },
        Db = { letterSpacing: 0, fontWeight: 400 },
        Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Eb.length; i--; ) if ((t = Eb[i] + n) in e) return t;
        return r;
    }
    function Gb(e, t, n) {
        var r = Ab.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function Hb(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2)
            "margin" === n && (a += o.css(e, n + R[s], !0, i)),
                r
                    ? ("content" === n && (a -= o.css(e, "padding" + R[s], !0, i)), "margin" !== n && (a -= o.css(e, "border" + R[s] + "Width", !0, i)))
                    : ((a += o.css(e, "padding" + R[s], !0, i)), "padding" !== n && (a += o.css(e, "border" + R[s] + "Width", !0, i)));
        return a;
    }
    function Ib(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = wb(e),
            a = "border-box" === o.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (((0 > (i = xb(e, t, s)) || null == i) && (i = e.style[t]), vb.test(i))) return i;
            (r = a && (l.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
        }
        return i + Hb(e, t, n || (a ? "border" : "content"), r, s) + "px";
    }
    function Jb(e, t) {
        for (var n, r, i, s = [], a = 0, u = e.length; u > a; a++)
            (r = e[a]).style &&
                ((s[a] = L.get(r, "olddisplay")),
                (n = r.style.display),
                t
                    ? (s[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && S(r) && (s[a] = L.access(r, "olddisplay", tb(r.nodeName))))
                    : s[a] || ((i = S(r)), ((n && "none" !== n) || !i) && L.set(r, "olddisplay", i ? n : o.css(r, "display"))));
        for (a = 0; u > a; a++) (r = e[a]).style && ((t && "none" !== r.style.display && "" !== r.style.display) || (r.style.display = t ? s[a] || "" : "none"));
        return e;
    }
    function Kb(e, t, n, r, i) {
        return new Kb.prototype.init(e, t, n, r, i);
    }
    o.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = xb(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    s,
                    a,
                    u = o.camelCase(t),
                    c = e.style;
                return (
                    (t = o.cssProps[u] || (o.cssProps[u] = Fb(c, u))),
                    (a = o.cssHooks[t] || o.cssHooks[u]),
                    void 0 === n
                        ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                            ? i
                            : c[t]
                        : ("string" == (s = typeof n) && (i = Bb.exec(n)) && ((n = (i[1] + 1) * i[2] + parseFloat(o.css(e, t))), (s = "number")),
                          void (
                              null != n &&
                              n == n &&
                              ("number" !== s || o.cssNumber[u] || (n += "px"),
                              l.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                              (a && "set" in a && void 0 === (n = a.set(e, n, r))) || ((c[t] = ""), (c[t] = n)))
                          ))
                );
            }
        },
        css: function (e, t, n, r) {
            var i,
                s,
                a,
                u = o.camelCase(t);
            return (
                (t = o.cssProps[u] || (o.cssProps[u] = Fb(e.style, u))),
                (a = o.cssHooks[t] || o.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = xb(e, t, r)),
                "normal" === i && t in Db && (i = Db[t]),
                "" === n || n ? ((s = parseFloat(i)), !0 === n || o.isNumeric(s) ? s || 0 : i) : i
            );
        },
    }),
        o.each(["height", "width"], function (e, t) {
            o.cssHooks[t] = {
                get: function (e, n, r) {
                    return n
                        ? 0 === e.offsetWidth && zb.test(o.css(e, "display"))
                            ? o.swap(e, Cb, function () {
                                  return Ib(e, t, r);
                              })
                            : Ib(e, t, r)
                        : void 0;
                },
                set: function (e, n, r) {
                    var i = r && wb(e);
                    return Gb(e, n, r ? Hb(e, t, r, "border-box" === o.css(e, "boxSizing", !1, i), i) : 0);
                },
            };
        }),
        (o.cssHooks.marginRight = yb(l.reliableMarginRight, function (e, t) {
            return t ? o.swap(e, { display: "inline-block" }, xb, [e, "marginRight"]) : void 0;
        })),
        o.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (o.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + R[r] + t] = s[r] || s[r - 2] || s[0];
                    return i;
                },
            }),
                ub.test(e) || (o.cssHooks[e + t].set = Gb);
        }),
        o.fn.extend({
            css: function (e, t) {
                return J(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            s = {},
                            a = 0;
                        if (o.isArray(t)) {
                            for (r = wb(e), i = t.length; i > a; a++) s[t[a]] = o.css(e, t[a], !1, r);
                            return s;
                        }
                        return void 0 !== n ? o.style(e, t, n) : o.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return Jb(this, !0);
            },
            hide: function () {
                return Jb(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          S(this) ? o(this).show() : o(this).hide();
                      });
            },
        }),
        (o.Tween = Kb),
        (Kb.prototype = {
            constructor: Kb,
            init: function (e, t, n, r, i, s) {
                (this.elem = e), (this.prop = n), (this.easing = i || "swing"), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = s || (o.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Kb.propHooks[this.prop];
                return e && e.get ? e.get(this) : Kb.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Kb.propHooks[this.prop];
                return (
                    (this.pos = t = this.options.duration ? o.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Kb.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Kb.prototype.init.prototype = Kb.prototype),
        (Kb.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop]) ? ((t = o.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0) : e.elem[e.prop];
                },
                set: function (e) {
                    o.fx.step[e.prop] ? o.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[o.cssProps[e.prop]] || o.cssHooks[e.prop]) ? o.style(e.elem, e.prop, e.now + e.unit) : (e.elem[e.prop] = e.now);
                },
            },
        }),
        (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (o.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (o.fx = Kb.prototype.init),
        (o.fx.step = {});
    var Lb,
        Mb,
        Nb = /^(?:toggle|show|hide)$/,
        Ob = RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [
            function e(t, n, r) {
                var i,
                    s,
                    a,
                    u,
                    l,
                    c,
                    f,
                    p = this,
                    d = {},
                    h = t.style,
                    g = t.nodeType && S(t),
                    v = L.get(t, "fxshow");
                for (i in (r.queue ||
                    (null == (l = o._queueHooks(t, "fx")).unqueued &&
                        ((l.unqueued = 0),
                        (c = l.empty.fire),
                        (l.empty.fire = function () {
                            l.unqueued || c();
                        })),
                    l.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            l.unqueued--, o.queue(t, "fx").length || l.empty.fire();
                        });
                    })),
                1 === t.nodeType &&
                    ("height" in n || "width" in n) &&
                    ((r.overflow = [h.overflow, h.overflowX, h.overflowY]), "none" === (f = o.css(t, "display")) && (f = tb(t.nodeName)), "inline" === f && "none" === o.css(t, "float") && (h.display = "inline-block")),
                r.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = r.overflow[0]), (h.overflowX = r.overflow[1]), (h.overflowY = r.overflow[2]);
                    })),
                n))
                    if (((s = n[i]), Nb.exec(s))) {
                        if ((delete n[i], (a = a || "toggle" === s), s === (g ? "hide" : "show"))) {
                            if ("show" !== s || !v || void 0 === v[i]) continue;
                            g = !0;
                        }
                        d[i] = (v && v[i]) || o.style(t, i);
                    }
                if (!o.isEmptyObject(d))
                    for (i in (v ? "hidden" in v && (g = v.hidden) : (v = L.access(t, "fxshow", {})),
                    a && (v.hidden = !g),
                    g
                        ? o(t).show()
                        : p.done(function () {
                              o(t).hide();
                          }),
                    p.done(function () {
                        var e;
                        for (e in (L.remove(t, "fxshow"), d)) o.style(t, e, d[e]);
                    }),
                    d))
                        (u = Ub(g ? v[i] : 0, i, p)), i in v || ((v[i] = u.start), g && ((u.end = u.start), (u.start = "width" === i || "height" === i ? 1 : 0)));
            },
        ],
        Rb = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Ob.exec(t),
                        s = (i && i[3]) || (o.cssNumber[e] ? "" : "px"),
                        a = (o.cssNumber[e] || ("px" !== s && +r)) && Ob.exec(o.css(n.elem, e)),
                        u = 1,
                        l = 20;
                    if (a && a[3] !== s) {
                        (s = s || a[3]), (i = i || []), (a = +r || 1);
                        do (a /= u = u || ".5"), o.style(n.elem, e, a + s);
                        while (u !== (u = n.cur() / r) && 1 !== u && --l);
                    }
                    return i && ((a = n.start = +a || +r || 0), (n.unit = s), (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])), n;
                },
            ],
        };
    function Sb() {
        return (
            setTimeout(function () {
                Lb = void 0;
            }),
            (Lb = o.now())
        );
    }
    function Tb(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = R[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function Ub(e, t, n) {
        for (var r, i = (Rb[t] || []).concat(Rb["*"]), o = 0, s = i.length; s > o; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function Xb(e, t, n) {
        var r,
            i,
            s = 0,
            a = Qb.length,
            u = o.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (i) return !1;
                for (var t = Lb || Sb(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, s = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(s);
                return u.notifyWith(e, [c, s, n]), 1 > s && l ? n : (u.resolveWith(e, [c]), !1);
            },
            c = u.promise({
                elem: e,
                props: o.extend({}, t),
                opts: o.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Lb || Sb(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = o.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? u.resolveWith(e, [c, t]) : u.rejectWith(e, [c, t]), this;
                },
            }),
            f = c.props;
        for (
            (function e(t, n) {
                var r, i, s, a, u;
                for (r in t)
                    if (((s = n[(i = o.camelCase(r))]), (a = t[r]), o.isArray(a) && ((s = a[1]), (a = t[r] = a[0])), r !== i && ((t[i] = a), delete t[r]), (u = o.cssHooks[i]) && ("expand" in u)))
                        for (r in ((a = u.expand(a)), delete t[i], a)) (r in t) || ((t[r] = a[r]), (n[r] = s));
                    else n[i] = s;
            })(f, c.opts.specialEasing);
            a > s;
            s++
        )
            if ((r = Qb[s].call(c, e, f, c.opts))) return r;
        return (
            o.map(f, Ub, c),
            o.isFunction(c.opts.start) && c.opts.start.call(e, c),
            o.fx.timer(o.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        );
    }
    (o.Animation = o.extend(Xb, {
        tweener: function (e, t) {
            o.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            for (var n, r = 0, i = e.length; i > r; r++) (Rb[(n = e[r])] = Rb[n] || []), Rb[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? Qb.unshift(e) : Qb.push(e);
        },
    })),
        (o.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? o.extend({}, e) : { complete: n || (!n && t) || (o.isFunction(e) && e), duration: e, easing: (n && t) || (t && !o.isFunction(t) && t) };
            return (
                (r.duration = o.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in o.fx.speeds ? o.fx.speeds[r.duration] : o.fx.speeds._default),
                (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    o.isFunction(r.old) && r.old.call(this), r.queue && o.dequeue(this, r.queue);
                }),
                r
            );
        }),
        o.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(S).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = o.isEmptyObject(e),
                    s = o.speed(t, n, r),
                    a = function () {
                        var t = Xb(this, o.extend({}, e), s);
                        (i || L.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === s.queue ? this.each(a) : this.queue(s.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            s = o.timers,
                            a = L.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && Pb.test(i) && r(a[i]);
                        for (i = s.length; i--; ) s[i].elem !== this || (null != e && s[i].queue !== e) || (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
                        (t || !n) && o.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = L.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            s = o.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, o.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        o.each(["toggle", "show", "hide"], function (e, t) {
            var n = o.fn[t];
            o.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Tb(t, !0), e, r, i);
            };
        }),
        o.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            o.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (o.timers = []),
        (o.fx.tick = function () {
            var e,
                t = 0,
                n = o.timers;
            for (Lb = o.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || o.fx.stop(), (Lb = void 0);
        }),
        (o.fx.timer = function (e) {
            o.timers.push(e), e() ? o.fx.start() : o.timers.pop();
        }),
        (o.fx.interval = 13),
        (o.fx.start = function () {
            Mb || (Mb = setInterval(o.fx.tick, o.fx.interval));
        }),
        (o.fx.stop = function () {
            clearInterval(Mb), (Mb = null);
        }),
        (o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (o.fn.delay = function (e, t) {
            return (
                (e = (o.fx && o.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r);
                    };
                })
            );
        }),
        (a = m.createElement("input")),
        (c = (b = m.createElement("select")).appendChild(m.createElement("option"))),
        (a.type = "checkbox"),
        (l.checkOn = "" !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        ((a = m.createElement("input")).value = "t"),
        (a.type = "radio"),
        (l.radioValue = "t" === a.value);
    var a,
        b,
        c,
        Yb,
        Zb,
        $b = o.expr.attrHandle;
    o.fn.extend({
        attr: function (e, t) {
            return J(this, o.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                o.removeAttr(this, e);
            });
        },
    }),
        o.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return typeof e.getAttribute === U
                        ? o.prop(e, t, n)
                        : ((1 === s && o.isXMLDoc(e)) || ((t = t.toLowerCase()), (r = o.attrHooks[t] || (o.expr.match.bool.test(t) ? Zb : Yb))),
                          void 0 === n
                              ? r && "get" in r && null !== (i = r.get(e, t))
                                  ? i
                                  : null == (i = o.find.attr(e, t))
                                  ? void 0
                                  : i
                              : null !== n
                              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : void o.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    s = t && t.match(E);
                if (s && 1 === e.nodeType) for (; (n = s[i++]); ) (r = o.propFix[n] || n), o.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!l.radioValue && "radio" === t && o.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
        }),
        (Zb = {
            set: function (e, t, n) {
                return !1 === t ? o.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        o.each(o.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = $b[t] || o.find.attr;
            $b[t] = function (e, t, r) {
                var i, s;
                return r || ((s = $b[t]), ($b[t] = i), (i = null != n(e, t, r) ? t.toLowerCase() : null), ($b[t] = s)), i;
            };
        });
    var _b = /^(?:input|select|textarea|button)$/i;
    o.fn.extend({
        prop: function (e, t) {
            return J(this, o.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[o.propFix[e] || e];
            });
        },
    }),
        o.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
                var r,
                    i,
                    s,
                    a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)
                    return (
                        (s = 1 !== a || !o.isXMLDoc(e)) && ((t = o.propFix[t] || t), (i = o.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || _b.test(e.nodeName) || e.href ? e.tabIndex : -1;
                    },
                },
            },
        }),
        l.optSelected ||
            (o.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
            }),
        o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            o.propFix[this.toLowerCase()] = this;
        });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                u = 0,
                l = this.length;
            if (o.isFunction(e))
                return this.each(function (t) {
                    o(this).addClass(e.call(this, t, this.className));
                });
            if ("string" == typeof e && e) {
                for (t = (e || "").match(E) || []; l > u; u++)
                    if ((r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ac, " ") : " "))) {
                        for (s = 0; (i = t[s++]); ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        (a = o.trim(r)), n.className !== a && (n.className = a);
                    }
            }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                u = 0 === arguments.length || ("string" == typeof e && e),
                l = 0,
                c = this.length;
            if (o.isFunction(e))
                return this.each(function (t) {
                    o(this).removeClass(e.call(this, t, this.className));
                });
            if (u) {
                for (t = (e || "").match(E) || []; c > l; l++)
                    if ((r = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(ac, " ") : ""))) {
                        for (s = 0; (i = t[s++]); ) for (; r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                        (a = e ? o.trim(r) : ""), n.className !== a && (n.className = a);
                    }
            }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : this.each(
                      o.isFunction(e)
                          ? function (n) {
                                o(this).toggleClass(e.call(this, n, this.className, t), t);
                            }
                          : function () {
                                if ("string" === n) for (var t, r = 0, i = o(this), s = e.match(E) || []; (t = s[r++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                else (n === U || "boolean" === n) && (this.className && L.set(this, "__className__", this.className), (this.className = this.className || !1 === e ? "" : L.get(this, "__className__") || ""));
                            }
                  );
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ac, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
    });
    var bc = /\r/g;
    o.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length
                ? ((r = o.isFunction(e)),
                  this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                          (null == (i = r ? e.call(this, n, o(this).val()) : e)
                              ? (i = "")
                              : "number" == typeof i
                              ? (i += "")
                              : o.isArray(i) &&
                                (i = o.map(i, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                  }))
                : i
                ? (t = o.valHooks[i.type] || o.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(bc, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        o.extend({
            valHooks: {
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, a = s ? null : [], u = s ? i + 1 : r.length, c = 0 > i ? u : s ? i : 0; u > c; c++)
                            if (!((!(n = r[c]).selected && c !== i) || (l.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || (n.parentNode.disabled && o.nodeName(n.parentNode, "optgroup")))) {
                                if (((t = o(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, s = o.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = o.inArray(o(r).val(), s) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), s;
                    },
                },
            },
        }),
        o.each(["radio", "checkbox"], function () {
            (o.valHooks[this] = {
                set: function (e, t) {
                    return o.isArray(t) ? (e.checked = o.inArray(o(e).val(), t) >= 0) : void 0;
                },
            }),
                l.checkOn ||
                    (o.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            e,
            t
        ) {
            o.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        o.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        });
    var cc = o.now(),
        dc = /\?/;
    (o.parseJSON = function (e) {
        return JSON.parse(e + "");
    }),
        (o.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (n = new DOMParser()).parseFromString(e, "text/xml");
            } catch (r) {
                t = void 0;
            }
            return (!t || t.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + e), t;
        });
    var ec,
        fc,
        gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
        fc = location.href;
    } catch (qc) {
        ((fc = m.createElement("a")).href = ""), (fc = fc.href);
    }
    function rc(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                s = t.toLowerCase().match(E) || [];
            if (o.isFunction(n)) for (; (r = s[i++]); ) "+" === r[0] ? (e[(r = r.slice(1) || "*")] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n);
        };
    }
    function sc(e, t, n, r) {
        var i = {},
            s = e === oc;
        function a(u) {
            var l;
            return (
                (i[u] = !0),
                o.each(e[u] || [], function (e, u) {
                    var c = u(t, n, r);
                    return "string" != typeof c || s || i[c] ? (s ? !(l = c) : void 0) : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function tc(e, t) {
        var n,
            r,
            i = o.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && o.extend(!0, e, r), e;
    }
    (ec = mc.exec(fc.toLowerCase()) || []),
        o.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: fc,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ec[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": o.parseJSON, "text xml": o.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? tc(tc(e, o.ajaxSettings), t) : tc(o.ajaxSettings, e);
            },
            ajaxPrefilter: rc(nc),
            ajaxTransport: rc(oc),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                    r,
                    i,
                    s,
                    a,
                    u,
                    l,
                    c,
                    f = o.ajaxSetup({}, t),
                    p = f.context || f,
                    d = f.context && (p.nodeType || p.jquery) ? o(p) : o.event,
                    h = o.Deferred(),
                    g = o.Callbacks("once memory"),
                    v = f.statusCode || {},
                    m = {},
                    y = {},
                    $ = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === $) {
                                if (!s) for (s = {}; (t = ic.exec(i)); ) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === $ ? i : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return $ || (m[(e = y[n] = y[n] || e)] = t), this;
                        },
                        overrideMimeType: function (e) {
                            return $ || (f.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e) {
                                if (2 > $) for (t in e) v[t] = [v[t], e[t]];
                                else b.always(e[b.status]);
                            }
                            return this;
                        },
                        abort: function (e) {
                            var t = e || x;
                            return n && n.abort(t), w(0, t), this;
                        },
                    };
                if (
                    ((h.promise(b).complete = g.add),
                    (b.success = b.done),
                    (b.error = b.fail),
                    (f.url = ((e || f.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//")),
                    (f.type = t.method || t.type || f.method || f.type),
                    (f.dataTypes = o
                        .trim(f.dataType || "*")
                        .toLowerCase()
                        .match(E) || [""]),
                    null == f.crossDomain &&
                        ((u = mc.exec(f.url.toLowerCase())), (f.crossDomain = !(!u || (u[1] === ec[1] && u[2] === ec[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))))),
                    f.data && f.processData && "string" != typeof f.data && (f.data = o.param(f.data, f.traditional)),
                    sc(nc, f, t, b),
                    2 === $)
                )
                    return b;
                for (c in ((l = f.global) && 0 == o.active++ && o.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !kc.test(f.type)),
                (r = f.url),
                f.hasContent || (f.data && ((r = f.url += (dc.test(r) ? "&" : "?") + f.data), delete f.data), !1 === f.cache && (f.url = hc.test(r) ? r.replace(hc, "$1_=" + cc++) : r + (dc.test(r) ? "&" : "?") + "_=" + cc++)),
                f.ifModified && (o.lastModified[r] && b.setRequestHeader("If-Modified-Since", o.lastModified[r]), o.etag[r] && b.setRequestHeader("If-None-Match", o.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && b.setRequestHeader("Content-Type", f.contentType),
                b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : f.accepts["*"]),
                f.headers))
                    b.setRequestHeader(c, f.headers[c]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, b, f) || 2 === $)) return b.abort();
                for (c in ((x = "abort"), { success: 1, error: 1, complete: 1 })) b[c](f[c]);
                if ((n = sc(oc, f, t, b))) {
                    (b.readyState = 1),
                        l && d.trigger("ajaxSend", [b, f]),
                        f.async &&
                            f.timeout > 0 &&
                            (a = setTimeout(function () {
                                b.abort("timeout");
                            }, f.timeout));
                    try {
                        ($ = 1), n.send(m, w);
                    } catch (_) {
                        if (!(2 > $)) throw _;
                        w(-1, _);
                    }
                } else w(-1, "No Transport");
                function w(e, t, s, u) {
                    var c,
                        m,
                        y,
                        x,
                        _,
                        w = t;
                    2 !== $ &&
                        (($ = 2),
                        a && clearTimeout(a),
                        (n = void 0),
                        (i = u || ""),
                        (b.readyState = e > 0 ? 4 : 0),
                        (c = (e >= 200 && 300 > e) || 304 === e),
                        s &&
                            (x = (function e(t, n, r) {
                                for (var i, s, a, u, l = t.contents, c = t.dataTypes; "*" === c[0]; ) c.shift(), void 0 === i && (i = t.mimeType || n.getResponseHeader("Content-Type"));
                                if (i) {
                                    for (s in l)
                                        if (l[s] && l[s].test(i)) {
                                            c.unshift(s);
                                            break;
                                        }
                                }
                                if (c[0] in r) a = c[0];
                                else {
                                    for (s in r) {
                                        if (!c[0] || t.converters[s + " " + c[0]]) {
                                            a = s;
                                            break;
                                        }
                                        u || (u = s);
                                    }
                                    a = a || u;
                                }
                                return a ? (a !== c[0] && c.unshift(a), r[a]) : void 0;
                            })(f, b, s)),
                        (x = (function e(t, n, r, i) {
                            var s,
                                a,
                                u,
                                l,
                                c,
                                f = {},
                                p = t.dataTypes.slice();
                            if (p[1]) for (u in t.converters) f[u.toLowerCase()] = t.converters[u];
                            for (a = p.shift(); a; )
                                if ((t.responseFields[a] && (r[t.responseFields[a]] = n), !c && i && t.dataFilter && (n = t.dataFilter(n, t.dataType)), (c = a), (a = p.shift()))) {
                                    if ("*" === a) a = c;
                                    else if ("*" !== c && c !== a) {
                                        if (!(u = f[c + " " + a] || f["* " + a])) {
                                            for (s in f)
                                                if ((l = s.split(" "))[1] === a && (u = f[c + " " + l[0]] || f["* " + l[0]])) {
                                                    !0 === u ? (u = f[s]) : !0 !== f[s] && ((a = l[0]), p.unshift(l[1]));
                                                    break;
                                                }
                                        }
                                        if (!0 !== u) {
                                            if (u && t.throws) n = u(n);
                                            else
                                                try {
                                                    n = u(n);
                                                } catch (d) {
                                                    return { state: "parsererror", error: u ? d : "No conversion from " + c + " to " + a };
                                                }
                                        }
                                    }
                                }
                            return { state: "success", data: n };
                        })(f, x, b, c)),
                        c
                            ? (f.ifModified && ((_ = b.getResponseHeader("Last-Modified")) && (o.lastModified[r] = _), (_ = b.getResponseHeader("etag")) && (o.etag[r] = _)),
                              204 === e || "HEAD" === f.type ? (w = "nocontent") : 304 === e ? (w = "notmodified") : ((w = x.state), (m = x.data), (c = !(y = x.error))))
                            : ((y = w), (e || !w) && ((w = "error"), 0 > e && (e = 0))),
                        (b.status = e),
                        (b.statusText = (t || w) + ""),
                        c ? h.resolveWith(p, [m, w, b]) : h.rejectWith(p, [b, w, y]),
                        b.statusCode(v),
                        (v = void 0),
                        l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [b, f, c ? m : y]),
                        g.fireWith(p, [b, w]),
                        l && (d.trigger("ajaxComplete", [b, f]), --o.active || o.event.trigger("ajaxStop")));
                }
                return b;
            },
            getJSON: function (e, t, n) {
                return o.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return o.get(e, void 0, t, "script");
            },
        }),
        o.each(["get", "post"], function (e, t) {
            o[t] = function (e, n, r, i) {
                return o.isFunction(n) && ((i = i || r), (r = n), (n = void 0)), o.ajax({ url: e, type: t, dataType: i, data: n, success: r });
            };
        }),
        o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            o.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (o._evalUrl = function (e) {
            return o.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        o.fn.extend({
            wrapAll: function (e) {
                var t;
                return o.isFunction(e)
                    ? this.each(function (t) {
                          o(this).wrapAll(e.call(this, t));
                      })
                    : (this[0] &&
                          ((t = o(e, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                              .map(function () {
                                  for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                  return e;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (e) {
                return this.each(
                    o.isFunction(e)
                        ? function (t) {
                              o(this).wrapInner(e.call(this, t));
                          }
                        : function () {
                              var t = o(this),
                                  n = t.contents();
                              n.length ? n.wrapAll(e) : t.append(e);
                          }
                );
            },
            wrap: function (e) {
                var t = o.isFunction(e);
                return this.each(function (n) {
                    o(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        o.nodeName(this, "body") || o(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (o.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0;
        }),
        (o.expr.filters.visible = function (e) {
            return !o.expr.filters.hidden(e);
        });
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(e, t, n, r) {
        var i;
        if (o.isArray(t))
            o.each(t, function (t, i) {
                n || xc.test(e) ? r(e, i) : Bc(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== o.type(t)) r(e, t);
        else for (i in t) Bc(e + "[" + i + "]", t[i], n, r);
    }
    (o.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                (t = o.isFunction(t) ? t() : null == t ? "" : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if ((void 0 === t && (t = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(e) || (e.jquery && !o.isPlainObject(e))))
            o.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Bc(n, e[n], t, i);
        return r.join("&").replace(wc, "+");
    }),
        o.fn.extend({
            serialize: function () {
                return o.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = o.prop(this, "elements");
                    return e ? o.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(e) && (this.checked || !T.test(e));
                    })
                    .map(function (e, t) {
                        var n = o(this).val();
                        return null == n
                            ? null
                            : o.isArray(n)
                            ? o.map(n, function (e) {
                                  return { name: t.name, value: e.replace(yc, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(yc, "\r\n") };
                    })
                    .get();
            },
        }),
        (o.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest();
            } catch (e) {}
        });
    var Cc = 0,
        Dc = {},
        Ec = { 0: 200, 1223: 204 },
        Fc = o.ajaxSettings.xhr();
    a.ActiveXObject &&
        o(a).on("unload", function () {
            for (var e in Dc) Dc[e]();
        }),
        (l.cors = !!Fc && "withCredentials" in Fc),
        (l.ajax = Fc = !!Fc),
        o.ajaxTransport(function (e) {
            var t;
            return l.cors || (Fc && !e.crossDomain)
                ? {
                      send: function (n, r) {
                          var i,
                              o = e.xhr(),
                              s = ++Cc;
                          if ((o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                          for (i in (e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n)) o.setRequestHeader(i, n[i]);
                          (t = function (e) {
                              return function () {
                                  t &&
                                      (delete Dc[s],
                                      (t = o.onload = o.onerror = null),
                                      "abort" === e
                                          ? o.abort()
                                          : "error" === e
                                          ? r(o.status, o.statusText)
                                          : r(Ec[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
                              };
                          }),
                              (o.onload = t()),
                              (o.onerror = t("error")),
                              (t = Dc[s] = t("abort")),
                              o.send((e.hasContent && e.data) || null);
                      },
                      abort: function () {
                          t && t();
                      },
                  }
                : void 0;
        }),
        o.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (e) {
                    return o.globalEval(e), e;
                },
            },
        }),
        o.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        o.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        (t = o("<script>")
                            .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            m.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Gc.pop() || o.expando + "_" + cc++;
            return (this[e] = !0), e;
        },
    }),
        o.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                s,
                u = !1 !== e.jsonp && (Hc.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(e.data) && "data");
            return u || "jsonp" === e.dataTypes[0]
                ? ((r = e.jsonpCallback = o.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  u ? (e[u] = e[u].replace(Hc, "$1" + r)) : !1 !== e.jsonp && (e.url += (dc.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                      return s || o.error(r + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = a[r]),
                  (a[r] = function () {
                      s = arguments;
                  }),
                  n.always(function () {
                      (a[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Gc.push(r)), s && o.isFunction(i) && i(s[0]), (s = i = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (o.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || m);
            var r = v.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : ((r = o.buildFragment([e], t, i)), i && i.length && o(i).remove(), o.merge([], r.childNodes));
        });
    var Ic = o.fn.load;
    (o.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ic) return Ic.apply(this, arguments);
        var r,
            i,
            s,
            a = this,
            u = e.indexOf(" ");
        return (
            u >= 0 && ((r = e.slice(u)), (e = e.slice(0, u))),
            o.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
                o
                    .ajax({ url: e, type: i, dataType: "html", data: t })
                    .done(function (e) {
                        (s = arguments), a.html(r ? o("<div>").append(o.parseHTML(e)).find(r) : e);
                    })
                    .complete(
                        n &&
                            function (e, t) {
                                a.each(n, s || [e.responseText, t, e]);
                            }
                    ),
            this
        );
    }),
        (o.expr.filters.animated = function (e) {
            return o.grep(o.timers, function (t) {
                return e === t.elem;
            }).length;
        });
    var Jc = a.document.documentElement;
    function Kc(e) {
        return o.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    (o.offset = {
        setOffset: function (e, t, n) {
            var r,
                i,
                s,
                a,
                u,
                l,
                c,
                f = o.css(e, "position"),
                p = o(e),
                d = {};
            "static" === f && (e.style.position = "relative"),
                (u = p.offset()),
                (s = o.css(e, "top")),
                (l = o.css(e, "left")),
                (c = ("absolute" === f || "fixed" === f) && (s + l).indexOf("auto") > -1) ? ((a = (r = p.position()).top), (i = r.left)) : ((a = parseFloat(s) || 0), (i = parseFloat(l) || 0)),
                o.isFunction(t) && (t = t.call(e, n, u)),
                null != t.top && (d.top = t.top - u.top + a),
                null != t.left && (d.left = t.left - u.left + i),
                "using" in t ? t.using.call(e, d) : p.css(d);
        },
    }),
        o.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              o.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 },
                    s = r && r.ownerDocument;
                if (s)
                    return (
                        (t = s.documentElement),
                        o.contains(t, r) ? (typeof r.getBoundingClientRect !== U && (i = r.getBoundingClientRect()), (n = Kc(s)), { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i
                    );
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        r = { top: 0, left: 0 };
                    return (
                        "fixed" === o.css(n, "position")
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()), (t = this.offset()), o.nodeName(e[0], "html") || (r = e.offset()), (r.top += o.css(e[0], "borderTopWidth", !0)), (r.left += o.css(e[0], "borderLeftWidth", !0))),
                        { top: t.top - r.top - o.css(n, "marginTop", !0), left: t.left - r.left - o.css(n, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Jc; e && !o.nodeName(e, "html") && "static" === o.css(e, "position"); ) e = e.offsetParent;
                    return e || Jc;
                });
            },
        }),
        o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            o.fn[e] = function (r) {
                return J(
                    this,
                    function (e, r, i) {
                        var s = Kc(e);
                        return void 0 === i ? (s ? s[t] : e[r]) : void (s ? s.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : (e[r] = i));
                    },
                    e,
                    r,
                    arguments.length,
                    null
                );
            };
        }),
        o.each(["top", "left"], function (e, t) {
            o.cssHooks[t] = yb(l.pixelPosition, function (e, n) {
                return n ? ((n = xb(e, t)), vb.test(n) ? o(e).position()[t] + "px" : n) : void 0;
            });
        }),
        o.each({ Height: "height", Width: "width" }, function (e, t) {
            o.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                o.fn[r] = function (r, i) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === i ? "margin" : "border");
                    return J(
                        this,
                        function (t, n, r) {
                            var i;
                            return o.isWindow(t)
                                ? t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                : void 0 === r
                                ? o.css(t, n, a)
                                : o.style(t, n, r, a);
                        },
                        t,
                        s ? r : void 0,
                        s,
                        null
                    );
                };
            });
        }),
        (o.fn.size = function () {
            return this.length;
        }),
        (o.fn.andSelf = o.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return o;
            });
    var Lc = a.jQuery,
        Mc = a.$;
    return (
        (o.noConflict = function (e) {
            return a.$ === o && (a.$ = Mc), e && a.jQuery === o && (a.jQuery = Lc), o;
        }),
        typeof b === U && (a.jQuery = a.$ = o),
        o
    );
});


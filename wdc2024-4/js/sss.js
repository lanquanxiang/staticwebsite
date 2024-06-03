
! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(je, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? oe.parseJSON(n) : n)
                } catch (i) { }
                Se.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return oe.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            c = (oe.cssNumber[t] || "px" !== l && +u) && De.exec(oe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, r = e.length; r > n; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }

    function d(e, t, n, r, i) {
        for (var o, s, a, u, l, d, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
            if (o = e[g], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Re.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), a = (He.exec(o) || ["", ""])[1].toLowerCase(), u = Pe[a] || Pe._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], d = u[0]; d--;) s = s.lastChild;
                    oe.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
                } else h.push(t.createTextNode(o));
        for (p.textContent = "", g = 0; o = h[g++];)
            if (r && oe.inArray(o, r) > -1) i && i.push(o);
            else if (l = oe.contains(o.ownerDocument, o), s = c(p.appendChild(o), "script"), l && f(s), n)
                for (d = 0; o = s[d++];) Fe.test(o.type || "") && n.push(o);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return G.activeElement
        } catch (e) { }
    }

    function m(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) m(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
        else if (!i) return e;
        return 1 === o && (s = i, i = function (e) {
            return oe().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, i, r, n)
        })
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), s = Ee.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) oe.event.add(t, i, l[i][n])
            }
            Se.hasData(e) && (a = Se.access(e), u = oe.extend({}, a), Se.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Oe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = Q.apply([], t);
        var i, o, s, a, u, l, f = 0,
            p = e.length,
            h = p - 1,
            g = t[0],
            m = oe.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !re.checkClone && We.test(g)) return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = g.call(this, i, o.html())), T(o, t, n, r)
        });
        if (p && (i = d(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = oe.map(c(i, "script"), y), a = s.length; p > f; f++) u = i, f !== h && (u = oe.clone(u, !0, !0), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
            if (a)
                for (l = s[s.length - 1].ownerDocument, oe.map(s, b), f = 0; a > f; f++) u = s[f], Fe.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Xe, "")))
        }
        return e
    }

    function k(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function C(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            r = oe.css(n[0], "display");
        return n.detach(), r
    }

    function E(e) {
        var t = G,
            n = Ve[e];
        return n || (n = C(e, t), "none" !== n && n || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), n = C(e, t), Ue.detach()), Ve[e] = n), n
    }

    function S(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Ke(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !re.pixelMarginRight() && Ge.test(s) && Ye.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function A(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in rt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in rt) return e
    }

    function N(e, t, n) {
        var r = De.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + Le[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + Le[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + Le[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + Le[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + Le[o] + "Width", !0, i)));
        return s
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ke(e),
            s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = S(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ge.test(i)) return i;
            r = s && (re.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function q(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = Ee.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && qe(r) && (o[s] = Ee.access(r, "olddisplay", E(r.nodeName)))) : (i = qe(r), "none" === n && i || Ee.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }

    function H() {
        return e.setTimeout(function () {
            it = void 0
        }), it = oe.now()
    }

    function F(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Le[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function P(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function R(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && qe(e),
            g = Ee.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], st.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                d[r] = g && g[r] || oe.style(e, r)
            } else l = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = Ee.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : f.done(function () {
                oe(e).hide()
            }), f.done(function () {
                var t;
                Ee.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (r in d) s = P(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function M(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = oe.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function I(e, t, n) {
        var r, i, o = 0,
            s = I.prefilters.length,
            a = oe.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = it || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (M(c, l.opts.specialEasing); s > o; o++)
            if (r = I.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
        return oe.map(c, P, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function $(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function _(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function B(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === St;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function W(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e
    }

    function z(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function X(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o], !s)
                        for (i in l)
                            if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else try {
                            t = s(t)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: s ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, r) {
        var i;
        if (oe.isArray(t)) oe.each(t, function (t, i) {
            n || Dt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (i in t) U(e + "[" + i + "]", t[i], n, r)
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        G = e.document,
        K = Y.slice,
        Q = Y.concat,
        J = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        ie = "2.2.4",
        oe = function (e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return oe.each(this, e)
        },
        map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(ue, le)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o, s = 0,
                a = [];
            if (n(e))
                for (i = e.length; i > s; s++) o = t(e[s], s, r), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, r), null != o && a.push(o);
            return Q.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (r = K.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(K.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        },
        now: Date.now,
        support: re
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, H)) {
                if (11 !== g && (l = ve.exec(e)))
                    if (i = l[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (h && (s = h.getElementById(i)) && M(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n
                    }
                if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = I), f = E(e), o = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + d(f[o]);
                        p = f.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return J.apply(n, h.querySelectorAll(p)), n
                    } catch (m) { } finally {
                            a === I && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() { }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l, c = [_, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[I] || (t[I] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === _ && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, s)), r(function (r, s, a, u) {
                var l, c, f, d = [],
                    p = [],
                    h = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, d, e, a, u),
                    b = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, b, a, u), i)
                    for (l = m(b, p), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else b = m(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, u) : J.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, s, !0), l = p(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; i > a; a++)
                if (n = T.relative[e[a].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, u, l) {
                    var c, f, d, p = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        b = r || o && T.find.TAG("*", l),
                        x = _ += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (j = s === q || s || l); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === q || (L(c), a = !H); d = e[f++];)
                                if (d(c, s || q, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (_ = x)
                        }
                        i && ((c = !d && c) && p--, r && g.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(g, v, s, a);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = K.call(u));
                            v = m(v)
                        }
                        J.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (_ = x, j = y), g
                };
            return i ? r(s) : s
        }
        var x, w, T, k, C, E, S, A, j, N, D, L, q, O, H, F, P, R, M, I = "sizzle" + 1 * new Date,
            $ = e.document,
            _ = 0,
            B = 0,
            W = n(),
            z = n(),
            X = n(),
            U = function (e, t) {
                return e === t && (D = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            Q = G.push,
            J = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function () {
                L()
            };
        try {
            J.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (ke) {
            J = {
                apply: G.length ? function (e, t) {
                    Q.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, O = q.documentElement, H = !C(q), (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(q.getElementsByClassName), w.getById = i(function (e) {
                return O.appendChild(e).id = I, !q.getElementsByName || !q.getElementsByName(I).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = me.test(q.querySelectorAll)) && (i(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = me.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", oe)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(O.compareDocumentPosition), M = t || me.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === $ && M($, e) ? -1 : t === q || t.ownerDocument === $ && M($, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return D = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0
            }, q) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && H && !X[n + " "] && (!P || !P.test(n)) && (!F || !F.test(n))) try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) { }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && L(e), M(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (D = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(U), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return N = null, e
        }, k = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += k(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (d = m, f = d[I] || (d[I] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === _ && l[1], b = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [_, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[I] || (d[I] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === _ && l[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[I] || (d[I] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [_, b]), d !== t)););
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(ae, "$1"));
                    return i[I] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(xe, we),
                        function (t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) T.pseudos[x] = u(x);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, E = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, S = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[I] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, A = t.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && E(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return J.apply(n, r), n;
                        break
                    }
            }
            return (l || S(e, f))(r, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = I.split("").sort(U).join("") === I, w.detectDuplicates = !!D, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var fe = function (e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && oe(e).is(n)) break;
                r.push(e)
            }
        return r
    },
        de = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = oe.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || me, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(r[1]) && oe.isPlainObject(t))
                        for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = G.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ye.prototype = oe.fn, me = oe(G);
    var be = /^(?:parents|prev(?:Until|All))/,
        xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return fe(e, "nextSibling")
        },
        prevAll: function (e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function (e) {
            return de((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return de(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (xe[e] || oe.uniqueSort(i), be.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, r, i, s = [],
            a = [],
            u = -1,
            l = function () {
                for (i = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
            },
            c = {
                add: function () {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function r(t) {
                        oe.each(t, function (t, n) {
                            oe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return oe.each(arguments, function (e, t) {
                        for (var n;
                            (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return i = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return i = a = [], n || (s = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                ["notify", "progress", oe.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, oe.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = K.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : oe.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? K.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var Te;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function (t) {
        return Te || (Te = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
    }, oe.ready.promise();
    var ke = function (e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === oe.type(n)) {
            i = !0;
            for (a in n) ke(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(oe(e), n)
        })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
        Ce = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!Ce(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(we) || [])), n = r.length;
                    for (; n--;) delete o[r[n]]
                } (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ee = new a,
        Se = new a,
        Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Se.hasData(e) || Ee.hasData(e)
        },
        data: function (e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function (e, t) {
            Se.remove(e, t)
        },
        _data: function (e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function (e, t) {
            Ee.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Se.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Se.set(this, e)
            }) : ke(this, function (t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = Se.get(o, e) || Se.get(o, e.replace(je, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (r = oe.camelCase(e), n = Se.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else r = oe.camelCase(e), this.each(function () {
                    var n = Se.get(this, r);
                    Se.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Se.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Ee.get(e, t), n && (!r || oe.isArray(n) ? r = Ee.access(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = oe._queueHooks(e, t),
                s = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = oe.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Ee.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        qe = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Oe = /^(?:checkbox|radio)$/i,
        He = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
    var Re = /<|&#?\w+;/;
    ! function () {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        $e = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, g, m = Ee.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(we) || [""], l = t.length; l--;) a = $e.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = oe.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = oe.event.special[p] || {}, c = oe.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && oe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), oe.event.global[p] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, g, m = Ee.hasData(e) && Ee.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(we) || [""], l = t.length; l--;)
                    if (a = $e.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = oe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) oe.event.remove(e, p + t[l], n, r, !0);
                oe.isEmptyObject(u) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, s = [],
                a = K.call(arguments),
                u = (Ee.get(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ie.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void (this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Be = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(_e, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a), o = c(e), r = 0, i = o.length; i > r; r++) w(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || c(e), s = s || c(a), r = 0, i = o.length; i > r; r++) x(o[r], s[r]);
                else x(e, a);
            return s = c(a, "script"), s.length > 0 && f(s, !u && c(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ce(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: T,
        detach: function (e) {
            return k(this, e, !0)
        },
        remove: function (e) {
            return k(this, e)
        },
        text: function (e) {
            return ke(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return ke(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Be.test(e) && !Pe[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(i[s])[t](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ue, Ve = {
        HTML: "block",
        BODY: "block"
    },
        Ye = /^margin/,
        Ge = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
        Ke = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Qe = function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        Je = G.documentElement;
    ! function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Je.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(re, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == r && t(), r
            },
            pixelMarginRight: function () {
                return null == r && t(), i
            },
            reliableMarginLeft: function () {
                return null == r && t(), o
            },
            reliableMarginRight: function () {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        rt = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = oe.camelCase(t),
                    u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = De.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = S(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function () {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i, o = r && Ke(e),
                    s = r && D(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (i = De.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), N(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = A(re.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = A(re.reliableMarginRight, function (e, t) {
        return t ? Qe(e, {
            display: "inline-block"
        }, S, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = N)
    }), oe.fn.extend({
        css: function (e, t) {
            return ke(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (r = Ke(e), i = t.length; i > s; s++) o[t[s]] = oe.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return q(this, !0)
        },
        hide: function () {
            return q(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = O, O.prototype = {
        constructor: O,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = O.prototype.init, oe.fx.step = {};
    var it, ot, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    oe.Animation = oe.extend(I, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return l(n.elem, e, De.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
        },
        prefilters: [R],
        prefilter: function (e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
    }), oe.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
        }, r
    }, oe.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = oe.isEmptyObject(e),
                o = oe.speed(t, n, r),
                s = function () {
                    var t = I(this, oe.extend({}, e), o);
                    (i || Ee.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = oe.timers,
                    s = Ee.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || oe.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = Ee.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = oe.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function (e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }), oe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        oe.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), oe.timers = [], oe.fx.tick = function () {
        var e, t = 0,
            n = oe.timers;
        for (it = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(), it = void 0
    }, oe.fx.timer = function (e) {
        oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
        e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function (t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
    var ut, lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return ke(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || oe.find.attr;
        lt[t] = function (e, t, r) {
            var i, o;
            return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return ke(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), re.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, $(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = $(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + $(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = oe.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        }, re.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, d = [r || G],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !oe.isWindow(r)) {
                    for (u = f.delegateType || p, gt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (r.ownerDocument || G) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Ce(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Ce(r) || l && oe.isFunction(r[p]) && !oe.isWindow(r) && (a = r[l], a && (r[l] = null), oe.event.triggered = p, r[p](), oe.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t)
        }
    }), oe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t);
                i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t) - 1;
                i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t))
            }
        }
    });
    var mt = e.location,
        vt = oe.now(),
        yt = /\?/;
    oe.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var bt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kt = /^(?:GET|HEAD)$/,
        Ct = /^\/\//,
        Et = {},
        St = {},
        At = "*/".concat("*"),
        jt = G.createElement("a");
    jt.href = mt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: Tt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: _(Et),
        ajaxTransport: _(St),
        ajax: function (t, n) {
            function r(t, n, r, a) {
                var l, f, y, b, w, k = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = z(d, T, r)), b = X(d, b, T, l), l ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, f = b.data, y = b.error, l = !y)) : (y = k, !t && k || (k = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || k) + "", l ? g.resolveWith(p, [f, k, T]) : g.rejectWith(p, [T, k, y]), T.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? f : y]), m.fireWith(p, [T, k]), c && (h.trigger("ajaxComplete", [T, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, d = oe.ajaxSetup({}, n),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                g = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; t = wt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || mt.href) + "").replace(bt, "").replace(Ct, mt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain) {
                l = G.createElement("a");
                try {
                    l.href = d.url, l.href = l.href, d.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host
                } catch (k) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), B(Et, d, n, T), 2 === x) return T;
            c = oe.event && d.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !kt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (yt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = xt.test(o) ? o.replace(xt, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)), d.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + At + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) T[f](d[f]);
            if (i = B(St, d, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), 2 === x) return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function () {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, i.send(y, r)
                } catch (k) {
                    if (!(2 > x)) throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, r, i) {
            return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Nt = /%20/g,
        Dt = /\[\]$/,
        Lt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(Nt, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Ot.test(this.nodeName) && !qt.test(e) && (this.checked || !Oe.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    };
    var Ht = {
        0: 200,
        1223: 204
    },
        Ft = oe.ajaxSettings.xhr();
    re.cors = !!Ft && "withCredentials" in Ft, re.ajax = Ft = !!Ft, oe.ajaxTransport(function (t) {
        var n, r;
        return re.cors || Ft && !t.crossDomain ? {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function (e) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ht[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Pt = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Pt.pop() || oe.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Rt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || oe.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Pt.push(i)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var r = he.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
    };
    var Mt = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = oe.css(e, "position"),
                f = oe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (r) {
            return ke(this, function (e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = A(re.pixelPosition, function (e, n) {
            return n ? (n = S(e, t), Ge.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            oe.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return ke(this, function (t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, s) : oe.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var It = e.jQuery,
        $t = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = $t), t && e.jQuery === oe && (e.jQuery = It), oe
    }, t || (e.jQuery = e.$ = oe), oe
}), ! function (e, t, n) {
    "use strict";

    function r(n) {
        if (i = t.documentElement, o = t.body, X(), ae = this, n = n || {}, de = n.constants || {}, n.easing)
            for (var r in n.easing) Y[r] = n.easing[r];
        be = n.edgeStrategy || "set", ce = {
            beforerender: n.beforerender,
            render: n.render,
            keyframe: n.keyframe
        }, fe = n.forceHeight !== !1, fe && (Pe = n.scale || 1), pe = n.mobileDeceleration || C, ge = n.smoothScrolling !== !1, me = n.smoothScrollingDuration || S, ve = {
            targetTop: ae.getScrollTop()
        }, ze = (n.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), ze ? (le = t.getElementById(n.skrollrBody || E), le && se(), G(), De(i, [y, w], [b])) : De(i, [y, x], [b]), ae.refresh(), Te(e, "resize orientationchange", function () {
            var e = i.clientWidth,
                t = i.clientHeight;
            (t !== _e || e !== $e) && (_e = t, $e = e, Be = !0)
        });
        var s = U();
        return function a() {
            J(), we = s(a)
        }(), ae
    }
    var i, o, s = {
        get: function () {
            return ae
        },
        init: function (e) {
            return ae || new r(e)
        },
        VERSION: "0.6.29"
    },
        a = Object.prototype.hasOwnProperty,
        u = e.Math,
        l = e.getComputedStyle,
        c = "touchstart",
        f = "touchmove",
        d = "touchcancel",
        p = "touchend",
        h = "skrollable",
        g = h + "-before",
        m = h + "-between",
        v = h + "-after",
        y = "skrollr",
        b = "no-" + y,
        x = y + "-desktop",
        w = y + "-mobile",
        T = "linear",
        k = 1e3,
        C = .004,
        E = "skrollr-body",
        S = 200,
        A = "start",
        j = "end",
        N = "center",
        D = "bottom",
        L = "___skrollable_id",
        q = /^(?:input|textarea|button|select)$/i,
        O = /^\s+|\s+$/g,
        H = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        F = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        P = /^(@?[a-z\-]+)\[(\w+)\]$/,
        R = /-([a-z0-9_])/g,
        M = function (e, t) {
            return t.toUpperCase()
        },
        I = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        _ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        B = /[a-z\-]+-gradient/g,
        W = "",
        z = "",
        X = function () {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (l) {
                var t = l(o, null);
                for (var n in t)
                    if (W = n.match(e) || +n == n && t[n].match(e)) break;
                if (!W) return void (W = z = "");
                W = W[0], "-" === W.slice(0, 1) ? (z = W, W = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[W]) : z = "-" + W.toLowerCase() + "-"
            }
        },
        U = function () {
            var t = e.requestAnimationFrame || e[W.toLowerCase() + "RequestAnimationFrame"],
                n = Oe();
            return (ze || !t) && (t = function (t) {
                var r = Oe() - n,
                    i = u.max(0, 1e3 / 60 - r);
                return e.setTimeout(function () {
                    n = Oe(), t()
                }, i)
            }), t
        },
        V = function () {
            var t = e.cancelAnimationFrame || e[W.toLowerCase() + "CancelAnimationFrame"];
            return (ze || !t) && (t = function (t) {
                return e.clearTimeout(t)
            }), t
        },
        Y = {
            begin: function () {
                return 0
            },
            end: function () {
                return 1
            },
            linear: function (e) {
                return e
            },
            quadratic: function (e) {
                return e * e
            },
            cubic: function (e) {
                return e * e * e
            },
            swing: function (e) {
                return -u.cos(e * u.PI) / 2 + .5
            },
            sqrt: function (e) {
                return u.sqrt(e)
            },
            outCubic: function (e) {
                return u.pow(e - 1, 3) + 1
            },
            bounce: function (e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - u.abs(3 * u.cos(e * t * 1.028) / t)
            }
        };
    r.prototype.refresh = function (e) {
        var r, i, o = !1;
        for (e === n ? (o = !0, ue = [], We = 0, e = t.getElementsByTagName("*")) : e.length === n && (e = [e]), r = 0, i = e.length; i > r; r++) {
            var s = e[r],
                a = s,
                u = [],
                l = ge,
                c = be,
                f = !1;
            if (o && L in s && delete s[L], s.attributes) {
                for (var d = 0, p = s.attributes.length; p > d; d++) {
                    var g = s.attributes[d];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var m = g.name.match(H);
                                    if (null !== m) {
                                        var v = {
                                            props: g.value,
                                            element: s,
                                            eventType: g.name.replace(R, M)
                                        };
                                        u.push(v);
                                        var y = m[1];
                                        y && (v.constant = y.substr(1));
                                        var b = m[2];
                                        /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                                        var x = m[3],
                                            w = m[4] || x;
                                        x && x !== A && x !== j ? (v.mode = "relative", v.anchors = [x, w]) : (v.mode = "absolute", x === j ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * Pe))
                                    }
                                } else f = !0;
                            else c = g.value;
                        else l = "off" !== g.value;
                    else if (a = t.querySelector(g.value), null === a) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (u.length) {
                    var T, k, C;
                    !o && L in s ? (C = s[L], T = ue[C].styleAttr, k = ue[C].classAttr) : (C = s[L] = We++, T = s.style.cssText, k = Ne(s)), ue[C] = {
                        element: s,
                        styleAttr: T,
                        classAttr: k,
                        anchorTarget: a,
                        keyFrames: u,
                        smoothScrolling: l,
                        edgeStrategy: c,
                        emitEvents: f,
                        lastFrameIndex: -1
                    }, De(s, [h], [])
                }
            }
        }
        for (Se(), r = 0, i = e.length; i > r; r++) {
            var E = ue[e[r][L]];
            E !== n && (Z(E), te(E))
        }
        return ae
    }, r.prototype.relativeToAbsolute = function (e, t, n) {
        var r = i.clientHeight,
            o = e.getBoundingClientRect(),
            s = o.top,
            a = o.bottom - o.top;
        return t === D ? s -= r : t === N && (s -= r / 2), n === D ? s += a : n === N && (s += a / 2), s += ae.getScrollTop(), s + .5 | 0
    }, r.prototype.animateTo = function (e, t) {
        t = t || {};
        var r = Oe(),
            i = ae.getScrollTop(),
            o = t.duration === n ? k : t.duration;
        return he = {
            startTop: i,
            topDiff: e - i,
            targetTop: e,
            duration: o,
            startTime: r,
            endTime: r + o,
            easing: Y[t.easing || T],
            done: t.done
        }, he.topDiff || (he.done && he.done.call(ae, !1), he = n), ae
    }, r.prototype.stopAnimateTo = function () {
        he && he.done && he.done.call(ae, !0), he = n
    }, r.prototype.isAnimatingTo = function () {
        return !!he
    }, r.prototype.isMobile = function () {
        return ze
    }, r.prototype.setScrollTop = function (t, n) {
        return ye = n === !0, ze ? Xe = u.min(u.max(t, 0), Fe) : e.scrollTo(0, t), ae
    }, r.prototype.getScrollTop = function () {
        return ze ? Xe : e.pageYOffset || i.scrollTop || o.scrollTop || 0
    }, r.prototype.getMaxScrollTop = function () {
        return Fe
    }, r.prototype.on = function (e, t) {
        return ce[e] = t, ae
    }, r.prototype.off = function (e) {
        return delete ce[e], ae
    }, r.prototype.destroy = function () {
        var e = V();
        e(we), Ce(), De(i, [b], [y, x, w]);
        for (var t = 0, r = ue.length; r > t; t++) oe(ue[t].element);
        i.style.overflow = o.style.overflow = "", i.style.height = o.style.height = "", le && s.setStyle(le, "transform", "none"), ae = n, le = n, ce = n, fe = n, Fe = 0, Pe = 1, de = n, pe = n, Re = "down", Me = -1, $e = 0, _e = 0, Be = !1, he = n, ge = n, me = n, ve = n, ye = n, We = 0, be = n, ze = !1, Xe = 0, xe = n
    };
    var G = function () {
        var r, s, a, l, h, g, m, v, y, b, x, w;
        Te(i, [c, f, d, p].join(" "), function (e) {
            var i = e.changedTouches[0];
            for (l = e.target; 3 === l.nodeType;) l = l.parentNode;
            switch (h = i.clientY, g = i.clientX, b = e.timeStamp, q.test(l.tagName) || e.preventDefault(), e.type) {
                case c:
                    r && r.blur(), ae.stopAnimateTo(), r = l, s = m = h, a = g, y = b;
                    break;
                case f:
                    q.test(l.tagName) && t.activeElement !== l && e.preventDefault(), v = h - m, w = b - x, ae.setScrollTop(Xe - v, !0), m = h, x = b;
                    break;
                default:
                case d:
                case p:
                    var o = s - h,
                        T = a - g,
                        k = T * T + o * o;
                    if (49 > k) {
                        if (!q.test(r.tagName)) {
                            r.focus();
                            var C = t.createEvent("MouseEvents");
                            C.initMouseEvent("click", !0, !0, e.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), r.dispatchEvent(C)
                        }
                        return
                    }
                    r = n;
                    var E = v / w;
                    E = u.max(u.min(E, 3), -3);
                    var S = u.abs(E / pe),
                        A = E * S + .5 * pe * S * S,
                        j = ae.getScrollTop() - A,
                        N = 0;
                    j > Fe ? (N = (Fe - j) / A, j = Fe) : 0 > j && (N = -j / A, j = 0), S *= 1 - N, ae.animateTo(j + .5 | 0, {
                        easing: "outCubic",
                        duration: S
                    })
            }
        }), e.scrollTo(0, 0), i.style.overflow = o.style.overflow = "hidden"
    },
        K = function () {
            var e, t, n, r, o, s, a, l, c, f, d, p = i.clientHeight,
                h = Ae();
            for (l = 0, c = ue.length; c > l; l++)
                for (e = ue[l], t = e.element, n = e.anchorTarget, r = e.keyFrames, o = 0, s = r.length; s > o; o++) a = r[o], f = a.offset, d = h[a.constant] || 0, a.frame = f, a.isPercentage && (f *= p, a.frame = f), "relative" === a.mode && (oe(t), a.frame = ae.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - f, oe(t, !0)), a.frame += d, fe && !a.isEnd && a.frame > Fe && (Fe = a.frame);
            for (Fe = u.max(Fe, je()), l = 0, c = ue.length; c > l; l++) {
                for (e = ue[l], r = e.keyFrames, o = 0, s = r.length; s > o; o++) a = r[o], d = h[a.constant] || 0, a.isEnd && (a.frame = Fe - a.offset + d);
                e.keyFrames.sort(He)
            }
        },
        Q = function (e, t) {
            for (var n = 0, r = ue.length; r > n; n++) {
                var i, o, u = ue[n],
                    l = u.element,
                    c = u.smoothScrolling ? e : t,
                    f = u.keyFrames,
                    d = f.length,
                    p = f[0],
                    y = f[f.length - 1],
                    b = c < p.frame,
                    x = c > y.frame,
                    w = b ? p : y,
                    T = u.emitEvents,
                    k = u.lastFrameIndex;
                if (b || x) {
                    if (b && -1 === u.edge || x && 1 === u.edge) continue;
                    switch (b ? (De(l, [g], [v, m]), T && k > -1 && (Ee(l, p.eventType, Re), u.lastFrameIndex = -1)) : (De(l, [v], [g, m]), T && d > k && (Ee(l, y.eventType, Re), u.lastFrameIndex = d)), u.edge = b ? -1 : 1, u.edgeStrategy) {
                        case "reset":
                            oe(l);
                            continue;
                        case "ease":
                            c = w.frame;
                            break;
                        default:
                        case "set":
                            var C = w.props;
                            for (i in C) a.call(C, i) && (o = ie(C[i].value), 0 === i.indexOf("@") ? l.setAttribute(i.substr(1), o) : s.setStyle(l, i, o));
                            continue
                    }
                } else 0 !== u.edge && (De(l, [h, m], [g, v]), u.edge = 0);
                for (var E = 0; d - 1 > E; E++)
                    if (c >= f[E].frame && c <= f[E + 1].frame) {
                        var S = f[E],
                            A = f[E + 1];
                        for (i in S.props)
                            if (a.call(S.props, i)) {
                                var j = (c - S.frame) / (A.frame - S.frame);
                                j = S.props[i].easing(j), o = re(S.props[i].value, A.props[i].value, j), o = ie(o), 0 === i.indexOf("@") ? l.setAttribute(i.substr(1), o) : s.setStyle(l, i, o)
                            }
                        T && k !== E && ("down" === Re ? Ee(l, S.eventType, Re) : Ee(l, A.eventType, Re), u.lastFrameIndex = E);
                        break
                    }
            }
        },
        J = function () {
            Be && (Be = !1, Se());
            var e, t, r = ae.getScrollTop(),
                i = Oe();
            if (he) i >= he.endTime ? (r = he.targetTop, e = he.done, he = n) : (t = he.easing((i - he.startTime) / he.duration), r = he.startTop + t * he.topDiff | 0), ae.setScrollTop(r, !0);
            else if (!ye) {
                var o = ve.targetTop - r;
                o && (ve = {
                    startTop: Me,
                    topDiff: r - Me,
                    targetTop: r,
                    startTime: Ie,
                    endTime: Ie + me
                }), i <= ve.endTime && (t = Y.sqrt((i - ve.startTime) / me), r = ve.startTop + t * ve.topDiff | 0)
            }
            if (ye || Me !== r) {
                Re = r > Me ? "down" : Me > r ? "up" : Re, ye = !1;
                var a = {
                    curTop: r,
                    lastTop: Me,
                    maxTop: Fe,
                    direction: Re
                },
                    u = ce.beforerender && ce.beforerender.call(ae, a);
                u !== !1 && (Q(r, ae.getScrollTop()), ze && le && s.setStyle(le, "transform", "translate(0, " + -Xe + "px) " + xe), Me = r, ce.render && ce.render.call(ae, a)), e && e.call(ae, !1)
            }
            Ie = i
        },
        Z = function (e) {
            for (var t = 0, n = e.keyFrames.length; n > t; t++) {
                for (var r, i, o, s, a = e.keyFrames[t], u = {}; null !== (s = F.exec(a.props));) o = s[1], i = s[2], r = o.match(P), null !== r ? (o = r[1], r = r[2]) : r = T, i = i.indexOf("!") ? ee(i) : [i.slice(1)], u[o] = {
                    value: i,
                    easing: Y[r]
                };
                a.props = u
            }
        },
        ee = function (e) {
            var t = [];
            return _.lastIndex = 0, e = e.replace(_, function (e) {
                return e.replace(I, function (e) {
                    return e / 255 * 100 + "%"
                })
            }), z && (B.lastIndex = 0, e = e.replace(B, function (e) {
                return z + e
            })), e = e.replace(I, function (e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        te = function (e) {
            var t, n, r = {};
            for (t = 0, n = e.keyFrames.length; n > t; t++) ne(e.keyFrames[t], r);
            for (r = {}, t = e.keyFrames.length - 1; t >= 0; t--) ne(e.keyFrames[t], r)
        },
        ne = function (e, t) {
            var n;
            for (n in t) a.call(e.props, n) || (e.props[n] = t[n]);
            for (n in e.props) t[n] = e.props[n]
        },
        re = function (e, t, n) {
            var r, i = e.length;
            if (i !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var o = [e[0]];
            for (r = 1; i > r; r++) o[r] = e[r] + (t[r] - e[r]) * n;
            return o
        },
        ie = function (e) {
            var t = 1;
            return $.lastIndex = 0, e[0].replace($, function () {
                return e[t++]
            })
        },
        oe = function (e, t) {
            e = [].concat(e);
            for (var n, r, i = 0, o = e.length; o > i; i++) r = e[i], n = ue[r[L]], n && (t ? (r.style.cssText = n.dirtyStyleAttr, De(r, n.dirtyClassAttr)) : (n.dirtyStyleAttr = r.style.cssText, n.dirtyClassAttr = Ne(r), r.style.cssText = n.styleAttr,
                De(r, n.classAttr)))
        },
        se = function () {
            xe = "translateZ(0)", s.setStyle(le, "transform", xe);
            var e = l(le),
                t = e.getPropertyValue("transform"),
                n = e.getPropertyValue(z + "transform"),
                r = t && "none" !== t || n && "none" !== n;
            r || (xe = "")
        };
    s.setStyle = function (e, t, n) {
        var r = e.style;
        if (t = t.replace(R, M).replace("-", ""), "zIndex" === t) isNaN(n) ? r[t] = n : r[t] = "" + (0 | n);
        else if ("float" === t) r.styleFloat = r.cssFloat = n;
        else try {
            W && (r[W + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), r[t] = n
        } catch (i) { }
    };
    var ae, ue, le, ce, fe, de, pe, he, ge, me, ve, ye, be, xe, we, Te = s.addEvent = function (t, n, r) {
        var i = function (t) {
            return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
                t.returnValue = !1, t.defaultPrevented = !0
            }), r.call(this, t)
        };
        n = n.split(" ");
        for (var o, s = 0, a = n.length; a > s; s++) o = n[s], t.addEventListener ? t.addEventListener(o, r, !1) : t.attachEvent("on" + o, i), Ue.push({
            element: t,
            name: o,
            listener: r
        })
    },
        ke = s.removeEvent = function (e, t, n) {
            t = t.split(" ");
            for (var r = 0, i = t.length; i > r; r++) e.removeEventListener ? e.removeEventListener(t[r], n, !1) : e.detachEvent("on" + t[r], n)
        },
        Ce = function () {
            for (var e, t = 0, n = Ue.length; n > t; t++) e = Ue[t], ke(e.element, e.name, e.listener);
            Ue = []
        },
        Ee = function (e, t, n) {
            ce.keyframe && ce.keyframe.call(ae, e, t, n)
        },
        Se = function () {
            var e = ae.getScrollTop();
            Fe = 0, fe && !ze && (o.style.height = ""), K(), fe && !ze && (o.style.height = Fe + i.clientHeight + "px"), ze ? ae.setScrollTop(u.min(ae.getScrollTop(), Fe)) : ae.setScrollTop(e, !0), ye = !0
        },
        Ae = function () {
            var e, t, n = i.clientHeight,
                r = {};
            for (e in de) t = de[e], "function" == typeof t ? t = t.call(ae) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n), r[e] = t;
            return r
        },
        je = function () {
            var e, t = 0;
            return le && (t = u.max(le.offsetHeight, le.scrollHeight)), e = u.max(t, o.scrollHeight, o.offsetHeight, i.scrollHeight, i.offsetHeight, i.clientHeight), e - i.clientHeight
        },
        Ne = function (t) {
            var n = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
        },
        De = function (t, r, i) {
            var o = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[o], o = "baseVal"), i === n) return void (t[o] = r);
            for (var s = t[o], a = 0, u = i.length; u > a; a++) s = qe(s).replace(qe(i[a]), " ");
            s = Le(s);
            for (var l = 0, c = r.length; c > l; l++) - 1 === qe(s).indexOf(qe(r[l])) && (s += " " + r[l]);
            t[o] = Le(s)
        },
        Le = function (e) {
            return e.replace(O, "")
        },
        qe = function (e) {
            return " " + e + " "
        },
        Oe = Date.now || function () {
            return +new Date
        },
        He = function (e, t) {
            return e.frame - t.frame
        },
        Fe = 0,
        Pe = 1,
        Re = "down",
        Me = -1,
        Ie = Oe(),
        $e = 0,
        _e = 0,
        Be = !1,
        We = 0,
        ze = !1,
        Xe = 0,
        Ue = [];
    "function" == typeof define && define.amd ? define([], function () {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document), ! function () {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (C = this, C.version = "3.3.2", C.tools = new k, C.isSupported() ? (C.tools.extend(C.defaults, n || {}), C.defaults.container = t(C.defaults), C.store = {
            elements: {},
            containers: []
        }, C.sequences = {}, C.history = [], C.uid = 0, C.initialized = !1) : "undefined" != typeof console && null !== console, C)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (C.tools.isNode(e.container)) return e.container
        }
        return C.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : C.tools.isNode(e) ? [e] : C.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function r() {
        return ++C.uid
    }

    function i(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = C.tools.extendClone(e.config, t) : e.config = C.tools.extendClone(C.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function o(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config,
            r = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (r.initial += " translate" + n.axis + "(" + t + ")", r.target += " translate" + n.axis + "(0)"), n.scale && (r.initial += " scale(" + n.scale + ")", r.target += " scale(1)"), n.rotate.x && (r.initial += " rotateX(" + n.rotate.x + "deg)", r.target += " rotateX(0)"), n.rotate.y && (r.initial += " rotateY(" + n.rotate.y + "deg)", r.target += " rotateY(0)"), n.rotate.z && (r.initial += " rotateZ(" + n.rotate.z + "deg)", r.target += " rotateZ(0)"), r.initial += "; opacity: " + n.opacity + ";", r.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function u(e) {
        var t = e.config.container;
        t && C.store.containers.indexOf(t) === -1 && C.store.containers.push(e.config.container), C.store.elements[e.id] = e
    }

    function l(e, t, n) {
        var r = {
            target: e,
            config: t,
            interval: n
        };
        C.history.push(r)
    }

    function c() {
        if (C.isSupported()) {
            p();
            for (var e = 0; e < C.store.containers.length; e++) C.store.containers[e].addEventListener("scroll", f), C.store.containers[e].addEventListener("resize", f);
            C.initialized || (window.addEventListener("scroll", f), window.addEventListener("resize", f), C.initialized = !0)
        }
        return C
    }

    function f() {
        E(p)
    }

    function d() {
        var e, t, n, r;
        C.tools.forOwn(C.sequences, function (i) {
            r = C.sequences[i], e = !1;
            for (var o = 0; o < r.elemIds.length; o++) n = r.elemIds[o], t = C.store.elements[n], T(t) && !e && (e = !0);
            r.active = e
        })
    }

    function p() {
        var e, t;
        d(), C.tools.forOwn(C.store.elements, function (n) {
            t = C.store.elements[n], e = v(t), m(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), g("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && h(t, e)) : y(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), g("reset", t), t.revealing = !1)
        })
    }

    function h(e, t) {
        var n = 0,
            r = 0,
            i = C.sequences[e.sequence.id];
        i.blocked = !0, t && "onload" === e.config.useDelay && (r = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
            started: new Date
        }, e.sequence.timer.clock = window.setTimeout(function () {
            i.blocked = !1, e.sequence.timer = null, f()
        }, Math.abs(i.interval) + r - n)
    }

    function g(e, t, n) {
        var r = 0,
            i = 0,
            o = "after";
        switch (e) {
            case "reveal":
                i = t.config.duration, n && (i += t.config.delay), o += "Reveal";
                break;
            case "reset":
                i = t.config.duration, o += "Reset"
        }
        t.timer && (r = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
            started: new Date
        }, t.timer.clock = window.setTimeout(function () {
            t.config[o](t.domEl), t.timer = null
        }, i - r)
    }

    function m(e) {
        if (e.sequence) {
            var t = C.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return T(e) && !e.revealing && !e.disabled
    }

    function v(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !C.initialized || "once" === t && !e.seen
    }

    function y(e) {
        if (e.sequence) {
            var t = C.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !T(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function x(e) {
        if (e && e !== window.document.documentElement) {
            var t = w(e);
            return {
                x: e.scrollLeft + t.left,
                y: e.scrollTop + t.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    function w(e) {
        var t = 0,
            n = 0,
            r = e.offsetHeight,
            i = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {
            top: t,
            left: n,
            height: r,
            width: i
        }
    }

    function T(e) {
        function t() {
            var t = l + a * s,
                n = c + u * s,
                r = f - a * s,
                p = d - u * s,
                h = o.y + e.config.viewOffset.top,
                g = o.x + e.config.viewOffset.left,
                m = o.y - e.config.viewOffset.bottom + i.height,
                v = o.x - e.config.viewOffset.right + i.width;
            return t < m && r > h && n > g && p < v
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }
        var r = w(e.domEl),
            i = b(e.config.container),
            o = x(e.config.container),
            s = e.config.viewFactor,
            a = r.height,
            u = r.width,
            l = r.top,
            c = r.left,
            f = l + a,
            d = c + u;
        return t() || n()
    }

    function k() { }
    var C, E;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function (e) { },
        beforeReset: function (e) { },
        afterReveal: function (e) { },
        afterReset: function (e) { }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, f) {
        var d, p, h, g, m, v;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), d = t(s), p = n(e, d), !p.length) return C;
        a && "number" == typeof a && (v = r(), m = C.sequences[v] = {
            id: v,
            interval: a,
            elemIds: [],
            active: !1
        });
        for (var y = 0; y < p.length; y++) g = p[y].getAttribute("data-sr-id"), g ? h = C.store.elements[g] : (h = {
            id: r(),
            domEl: p[y],
            seen: !1,
            revealing: !1
        }, h.domEl.setAttribute("data-sr-id", h.id)), m && (h.sequence = {
            id: m.id,
            index: m.elemIds.length
        }, m.elemIds.push(h.id)), i(h, s, d), o(h), u(h), C.tools.isMobile() && !h.config.mobile || !C.isSupported() ? (h.domEl.setAttribute("style", h.styles.inline), h.disabled = !0) : h.revealing || h.domEl.setAttribute("style", h.styles.inline + h.styles.transform.initial);
        return !f && C.isSupported() && (l(e, s, a), C.initTimeout && window.clearTimeout(C.initTimeout), C.initTimeout = window.setTimeout(c, 0)), C
    }, e.prototype.sync = function () {
        if (C.history.length && C.isSupported()) {
            for (var e = 0; e < C.history.length; e++) {
                var t = C.history[e];
                C.reveal(t.target, t.config, t.interval, !0)
            }
            c()
        }
        return C
    }, k.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, k.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, k.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, k.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, k.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, k.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, k.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, E = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}(), ! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function () {
    var e;
    return function t(e, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = n[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function (t) {
                    var n = e[s][1][t];
                    return i(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
        1: [function (e, t, n) {
            function r(e, t) {
                for (; e && e !== document;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }
            if (Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = r
        }, {}],
        2: [function (e, t, n) {
            function r(e, t, n, r, o) {
                var s = i.apply(this, arguments);
                return e.addEventListener(n, s, o), {
                    destroy: function () {
                        e.removeEventListener(n, s, o)
                    }
                }
            }

            function i(e, t, n, r) {
                return function (n) {
                    n.delegateTarget = o(n.target, t), n.delegateTarget && r.call(e, n)
                }
            }
            var o = e("./closest");
            t.exports = r
        }, {
            "./closest": 1
        }],
        3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t
            }
        }, {}],
        4: [function (e, t, n) {
            function r(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!a.string(t)) throw new TypeError("Second argument must be a String");
                if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                if (a.node(e)) return i(e, t, n);
                if (a.nodeList(e)) return o(e, t, n);
                if (a.string(e)) return s(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function o(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function s(e, t, n) {
                return u(document.body, e, t, n)
            }
            var a = e("./is"),
                u = e("delegate");
            t.exports = r
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function (e, t, n) {
            function r(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var n = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString()
                }
                return t
            }
            t.exports = r
        }, {}],
        6: [function (e, t, n) {
            function r() { }
            r.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function (e, t, n) {
                    function r() {
                        i.off(e, r), t.apply(n, arguments)
                    }
                    var i = this;
                    return r._ = t, this.on(e, r, n)
                },
                emit: function (e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        r = 0,
                        i = n.length;
                    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function (e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var o = 0, s = r.length; o < s; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, t.exports = r
        }, {}],
        7: [function (t, n, r) {
            ! function (i, o) {
                if ("function" == typeof e && e.amd) e(["module", "select"], o);
                else if ("undefined" != typeof r) o(n, t("select"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, i.select), i.clipboardAction = s.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var i = n(t),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    s = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = function () {
                        function e(t) {
                            r(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return s(e, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function () {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function () {
                                    return e.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.addEventListener("focus", window.scrollTo(0, n)), this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, i["default"])(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function () {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function () {
                                this.selectedText = (0, i["default"])(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function () {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function (e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function () {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function () {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function (e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== ("undefined" == typeof e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function () {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = a
            })
        }, {
            select: 5
        }],
        8: [function (t, n, r) {
            ! function (i, o) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
                else if ("undefined" != typeof r) o(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var s = {
                        exports: {}
                    };
                    o(s, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = s.exports
                }
            }(this, function (e, t, n, r) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function s(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function a(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function u(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var l = i(t),
                    c = i(n),
                    f = i(r),
                    d = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    p = function (e) {
                        function t(e, n) {
                            o(this, t);
                            var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }
                        return a(t, e), d(t, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function (e) {
                                var t = this;
                                this.listener = (0, f["default"])(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l["default"]({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function (e) {
                                return u("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function (e) {
                                var t = u("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function (e) {
                                return u("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }]), t
                    }(c["default"]);
                e.exports = p
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}), window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var e = function () {
        function e() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
        }
        return {
            check: e
        }
    }(),
        t = function () {
            function e() {
                var e = new Clipboard(".js-copy-css"),
                    t = 2e3,
                    n = 700;
                e.on("success", function (e) {
                    var r = $(e.trigger),
                        i = r.parents(".js-gradient");
                    i.addClass("state-done-message-visible"), setTimeout(function () {
                        i.addClass("state-done-message-gone")
                    }, t), setTimeout(function () {
                        i.removeClass("state-done-message-visible").removeClass("state-done-message-gone")
                    }, t + n)
                }), e.on("error", function (e) {
                    var r = $(e.trigger),
                        i = r.parents(".js-gradient"),
                        o = i.find(".js-code-textarea");
                    o.select(), window.setTimeout(function () {
                        o.select()
                    }, 1), i.addClass("state-copy-message-visible"), setTimeout(function () {
                        i.addClass("state-copy-message-gone")
                    }, 5 * t), setTimeout(function () {
                        i.removeClass("state-copy-message-visible").removeClass("state-copy-message-gone")
                    }, 5 * t + n)
                })
            }
            return {
                init: e
            }
        }();
    t.init();
    var n = function () {
        function e(e) {
            console.log(e), ga("send", "event", {
                eventCategory: "ads ",
                eventAction: "click",
                eventLabel: e
            })
        }

        function t() {
            for (var t = document.querySelectorAll(".js-reach-goal"), n = t.length, r = 0; r < n; r++) t[r].addEventListener("click", function (t) {
                var n = t.currentTarget.getAttribute("data-goal-id");
                e(n)
            }, !1)
        }

        function n() {
            t()
        }
        return {
            init: n,
            emitGoal: e
        }
    }();
    n.init();
    var r = function () {
        function e(e) {
            var t = e.find($(".js-submit-button")),
                r = e.find($(".js-submit-button")).val();
            t.val(r + "...");
            var i = e.find(".js-success-message"),
                o = e.find(".js-error-message"),
                s = 200;
            $.ajax({
                type: e.attr("method"),
                url: e.attr("action"),
                data: e.serialize(),
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=utf-8"
            }).done(function (t) {
                function r(e) {
                    return 0 === e.indexOf("0 -") ? e.slice(4) : e
                }
                "success" != t.result ? (console.log("err"), o.slideUp(s), i.slideUp(s), setTimeout(function () {
                    o.html(r(t.msg)), o.slideDown(s)
                }, s)) : o.slideUp(s, function () {
                    i.slideDown(s);
                    var t = e.attr("data-goal-id");
                    n.emitGoal(t)
                })
            }).fail(function (e) {
                o.slideUp(s), i.slideUp(s, function () {
                    o.slideDown(s, function () {
                        o.html("Could not connect to the registration server. Please try again later.")
                    })
                })
            }).always(function (e) {
                console.log(e), t.val(r)
            })
        }
        var t = {
            $form: $(".js-subscribe-form")
        },
            r = function () {
                t.$form.on("submit", function (t) {
                    t.preventDefault(), e($(this))
                })
            };
        return {
            bind: r
        }
    }();
    r.bind();
    var i = function () {
        function e() {
            var e = $("body"),
                t = $(".js-spinner"),
                n = 2e3;
            setTimeout(function () {
                e.addClass("state-show"), t.addClass("state-away")
            }, n), setTimeout(function () {
                e.removeClass("state-spinner-fixed"), t.remove()

                //orange banner
                //                     $("body").append(`
                // 	<a href="http://bit.ly/uplaunch-ph" target="_blank" class="promo-banner hidden">
                // 		<img class="promo-banner__icon" src="https://s3-us-west-2.amazonaws.com/webgradients.com/img/icons/ph_banner_icon.png" srcset="https://s3-us-west-2.amazonaws.com/webgradients.com/img/icons/ph_banner_icon.png, https://s3-us-west-2.amazonaws.com/webgradients.com/img/icons/ph_banner_icon@2x.png 2x" alt="ProductHunt">
                //         <div class="promo-banner__content">
                //             <p class="promo-banner__title">Hooray! itmeo launched <br> a new product 🎉</p>
                //             <p class="promo-banner__desc">Uplaunch is Live! Follow us on Product <br> Hunt release party.</p>
                //             <div class="promo-banner__btn">
                //                 <span>
                //                     <span style="margin: 0; color: #000;">Uplaunch</span>
                //                     <span style="color: #DC5425;">is live on producthunt</span>
                //                 </span>
                //                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4099 8.27789L15.6746 13.9497C15.3916 14.8757 14.5371 15.5075 13.5691 15.5075H8.3918C7.85756 15.5075 7.34555 15.2956 6.9681 14.9181L6.29256 14.2426V8.8411C7.55274 8.74703 8.63987 7.89527 9.00581 6.66922L10.3676 2.10996C10.4644 1.78608 10.7597 1.58763 11.0697 1.58763C11.1936 1.58763 11.3202 1.61938 11.4369 1.68765C11.675 1.82617 11.8147 2.08694 11.7988 2.3616L11.5865 6.04052C11.554 6.60135 12.0001 7.07327 12.5613 7.07327H16.5189C17.1448 7.07327 17.5929 7.67895 17.4099 8.27789ZM18.5443 6.50689C18.0712 5.86747 17.3139 5.48565 16.5189 5.48565H13.2087L13.3837 2.45288C13.4341 1.57691 12.9947 0.758092 12.237 0.316335C11.8822 0.109546 11.4785 0 11.0697 0C10.0358 0 9.14235 0.665216 8.84665 1.65589L7.48447 6.21477C7.32055 6.76369 6.84744 7.16536 6.29256 7.25307V7.07764C6.29256 6.56365 5.8762 6.14729 5.36261 6.14729H0.930349C0.416355 6.14729 0 6.56365 0 7.07764V16.1652C0 16.6788 0.416355 17.0952 0.930349 17.0952H5.36261C5.79682 17.0952 6.1592 16.7959 6.2612 16.393C6.87562 16.8467 7.61386 17.0952 8.3918 17.0952H13.5691C15.246 17.0952 16.7026 16.018 17.1928 14.4141L18.9277 8.74227C19.1607 7.98179 19.017 7.14631 18.5443 6.50689V6.50689Z" fill="#343532"/>
                //                 </svg>
                //             </div>
                //         </div>
                //         <span class="promo-banner__close">
                //             <svg class="promo-banner__close-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                //                 <path opacity="0.6" d="M12.369 1.62172C12.4691 1.52206 12.5484 1.40364 12.6025 1.27325C12.6567 1.14286 12.6846 1.00306 12.6846 0.861881C12.6846 0.720697 12.6567 0.580903 12.6025 0.450513C12.5484 0.320124 12.4691 0.201704 12.369 0.102046C12.289 0.0360763 12.1885 0 12.0848 0C11.9811 0 11.8806 0.0360763 11.8005 0.102046L6.87052 5.03471L2.41432 0.579401C2.31466 0.479396 2.19624 0.400048 2.06585 0.345906C1.93546 0.291764 1.79567 0.263894 1.65448 0.263894C1.5133 0.263894 1.37351 0.291764 1.24312 0.345906C1.11273 0.400048 0.994307 0.479396 0.894649 0.579401C0.828679 0.659446 0.792603 0.759943 0.792603 0.863669C0.792603 0.967395 0.828679 1.06789 0.894649 1.14794L5.82732 6.07792L1.372 10.5341C1.272 10.6338 1.19265 10.7522 1.13851 10.8826C1.08437 11.013 1.0565 11.1528 1.0565 11.294C1.0565 11.4351 1.08437 11.5749 1.13851 11.7053C1.19265 11.8357 1.272 11.9541 1.372 12.0538C1.45205 12.1198 1.55255 12.1558 1.65627 12.1558C1.76 12.1558 1.86049 12.1198 1.94054 12.0538L6.87052 7.12113L11.3267 11.5773C11.4264 11.6773 11.5448 11.7567 11.6752 11.8108C11.8056 11.865 11.9454 11.8928 12.0866 11.8928C12.2277 11.8928 12.3675 11.865 12.4979 11.8108C12.6283 11.7567 12.7467 11.6773 12.8464 11.5773C12.9124 11.4973 12.9484 11.3968 12.9484 11.2931C12.9484 11.1893 12.9124 11.0888 12.8464 11.0088L7.91373 6.07792L12.369 1.62172Z" fill="white"/>
                //             </svg>
                //         </span>
                // 	</a>
                // `);
                // $(".promo-banner__close").on("click", function(e) {
                //         e.preventDefault();

                //         $(".promo-banner").css("left", "-100%");
                //         setTimeout(() => {
                //             $(".promo-banner").css("display", "none");
                //         }, 1000);
                //     })

                /*
        $("body").append(`
<a href="https://uplaunch.net/" onclick="ym(41982384, 'reachGoal', 'yametrika_click_promobanner'); return true;" id="yametrika_click_promobanner" data-goal-id="CLICK__newpromo_banner" target="_blank" class="newpromo-banner hidden js-reach-goal">
    <div class="newpromo-banner__images">
        <div class="newpromo-banner__content">
            <p class="newpromo-banner__subtitle">Power up your launch with Uplaunch</p>
            <p class="newpromo-banner__title">Get our ready-to-use solution to engage with your customers.</p>
            <div class="newpromo-banner__btn">
                <span>Power up  🚀</span>
            </div>
        </div>
        <span class="newpromo-banner__close">
            <svg class="newpromo-banner__close-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path opacity="0.6" d="M12.369 1.62172C12.4691 1.52206 12.5484 1.40364 12.6025 1.27325C12.6567 1.14286 12.6846 1.00306 12.6846 0.861881C12.6846 0.720697 12.6567 0.580903 12.6025 0.450513C12.5484 0.320124 12.4691 0.201704 12.369 0.102046C12.289 0.0360763 12.1885 0 12.0848 0C11.9811 0 11.8806 0.0360763 11.8005 0.102046L6.87052 5.03471L2.41432 0.579401C2.31466 0.479396 2.19624 0.400048 2.06585 0.345906C1.93546 0.291764 1.79567 0.263894 1.65448 0.263894C1.5133 0.263894 1.37351 0.291764 1.24312 0.345906C1.11273 0.400048 0.994307 0.479396 0.894649 0.579401C0.828679 0.659446 0.792603 0.759943 0.792603 0.863669C0.792603 0.967395 0.828679 1.06789 0.894649 1.14794L5.82732 6.07792L1.372 10.5341C1.272 10.6338 1.19265 10.7522 1.13851 10.8826C1.08437 11.013 1.0565 11.1528 1.0565 11.294C1.0565 11.4351 1.08437 11.5749 1.13851 11.7053C1.19265 11.8357 1.272 11.9541 1.372 12.0538C1.45205 12.1198 1.55255 12.1558 1.65627 12.1558C1.76 12.1558 1.86049 12.1198 1.94054 12.0538L6.87052 7.12113L11.3267 11.5773C11.4264 11.6773 11.5448 11.7567 11.6752 11.8108C11.8056 11.865 11.9454 11.8928 12.0866 11.8928C12.2277 11.8928 12.3675 11.865 12.4979 11.8108C12.6283 11.7567 12.7467 11.6773 12.8464 11.5773C12.9124 11.4973 12.9484 11.3968 12.9484 11.2931C12.9484 11.1893 12.9124 11.0888 12.8464 11.0088L7.91373 6.07792L12.369 1.62172Z" fill="#000"/>
            </svg>
        </span>
    </div>
</a>
`);
setTimeout(() => {
$(".newpromo-banner").removeClass("hidden");
}, 1000);
*/
                $(".newpromo-banner__close").on("click", function (e) {
                    e.preventDefault();

                    $(".newpromo-banner").css("left", "-100%");
                    setTimeout(() => {
                        $(".newpromo-banner").css("display", "none");
                    }, 1000);
                });
            }, n + 3e3), setTimeout(function () {
                l.init()
            }, n + 8e3)
        }
        return {
            reveal: e
        }
    }();
    i.reveal();
    var o = function () {
        function e() {
            window.twttr = function (e, t, n) {
                var r, i = e.getElementsByTagName(t)[0],
                    o = window.twttr || {};
                return e.getElementById(n) ? o : (r = e.createElement(t), r.id = n, r.src = "https://platform.twitter.com/widgets.js", i.parentNode.insertBefore(r, i), o._e = [], o.ready = function (e) {
                    o._e.push(e)
                }, o)
            }(document, "script", "twitter-wjs"), twttr.ready(function (e) {
                e.widgets.createShareButton("/", document.getElementById("twi-root"), {
                    text: "🎁  Free Gradients Collection 🎁  webgradients.com #webdesign #css3 #css #ui #palette #freebie #photoshop #graphicdesign via @itmeohq"
                }), e.events.bind("tweet", function (e) {
                    n.emitGoal("SOCIAL__tweet--in-page")
                })
            })
        }

        function t() {
            window.fbAsyncInit = function () {
                FB.Event.subscribe("edge.create", function (e) {
                    n.emitGoal("SOCIAL__facebook_like--in-page")
                }), FB.Event.subscribe("edge.remove", function (e) {
                    n.emitGoal("SOCIAL__facebook_dislike--in-page")
                })
            }
        }

        function r() {
            t(), e()
        }
        return {
            init: r
        }
    }();
    if (o.init(), !e.check()) {
        skrollr.init()
    }
    window.sr = ScrollReveal(), sr.reveal(".js-appearing-card", {
        origin: "bottom",
        distance: "10%",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: .1,
        scale: .99,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !1,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function (e) { },
        beforeReset: function (e) { },
        afterReveal: function (e) { },
        afterReset: function (e) { }
    });
    var s = function () {
        function e() {
            function e() {
                n.removeClass("state-complete"), n.removeClass("state-full"), t.removeClass("state-fixed")
            }
            var t = $("body"),
                n = $(".js-full-gradient"),
                r = 1500;
            $(document).on("click", ".js-see-view-full", function (e) {
                e.preventDefault();
                var i = $(this).attr("data-css-code");
                n.attr("style", i).css("left", e.clientX - r + "px").css("top", e.clientY - r + "px").addClass("state-full"), t.addClass("state-fixed"), setTimeout(function () {
                    n.addClass("state-complete")
                }, 700)
            }), $(document).on("click", ".js-full-gradient", function (t) {
                t.preventDefault(), e()
            }), history.pushState(null, null, " "), window.addEventListener("popstate", function () {
                t.hasClass("state-fixed") && (console.log("black"), e(), history.pushState(null, null, " "))
            }), $(window).keydown(function (t) {
                27 === t.keyCode && n.hasClass("state-full") && e()
            })
        }
        return {
            bind: e
        }
    }();
    s.bind();
    var a = function () {
        function e() {
            if (0 === window.location.search.indexOf("?sub=success")) return !0
        }

        function t() {
            r.fadeIn(300)
        }

        function n() {
            e() && t(), $(document).on("click", ".js-hide-email-welcome", function (e) {
                e.preventDefault(), r.fadeOut(300)
            })
        }
        var r = $(".js-welcome-email-box");
        return {
            init: n
        }
    }();
    a.init();
    var u = function () {
        function e() {
            var e = $(".js-follow-us-box");
            e && ($(document).on("click", ".js-show-follow-us-popup", function (t) {
                t.preventDefault(), e.fadeIn(300)
            }), $(document).on("click", ".js-hide-follow-us", function (t) {
                t.preventDefault(), e.fadeOut(200)
            }))
        }
        return {
            init: e
        }
    }();
    u.init();
    var l = function () {
        function e() {
            i.removeClass("body-phoenix-popup-visible"), i.removeClass("body-brut-popup-visible"), i.removeClass("body-kitty-popup-visible"), setTimeout(function () {
                $(".js-popup").hide()
            }, 500)
        }

        function t() {
            $(document).on("click", ".js-hide-popup", function (t) {
                t.preventDefault(), e()
            })
        }

        function n() {
            i.addClass("body-phoenix-popup-visible")
        }

        function r() {
            n(), t()
        }
        var i = $("body");
        return {
            init: r
        }
    }()
});


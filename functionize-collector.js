var PIIString = {"proj_id": 1234, "PIIs": [{"item": "SSN", "format": "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$"}, {"item": "abce", "format": "abcde"}]};
var PIIJSON = PIIString;
var functioniseToken = '8c7432551d1ae1c26c945ae01c4011fe';
var functionizePid = 26938;
var functionizeProjectEnv = 'live';
var functionizeHttpToken = 'O7PkLzC3dn6a';
if (typeof window.functionizePluginInstalled == "undefined" || !window.functionizePluginInstalled) {
    if (typeof zQuery == 'undefined' || !zQuery) {
        (function(e, t) {
            var n, r, i = typeof t,
                o = e.document,
                a = e.location,
                s = e.zQuery,
                u = e.$,
                l = {},
                c = [],
                p = "1.9.1",
                f = c.concat,
                d = c.push,
                h = c.slice,
                g = c.indexOf,
                m = l.toString,
                y = l.hasOwnProperty,
                v = p.trim,
                b = function(e, t) {
                    return new b.fn.init(e, t, r)
                },
                x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                w = /\S+/g,
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                k = /^[\],:{}\s]*$/,
                E = /(?:^|:|,)(?:\s*\[)+/g,
                S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                j = /^-ms-/,
                D = /-([\da-z])/gi,
                L = function(e, t) {
                    return t.toUpperCase()
                },
                H = function(e) {
                    (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
                },
                q = function() {
                    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
                };
            b.fn = b.prototype = {
                jquery: p,
                constructor: b,
                init: function(e, n, r) {
                    var i, a;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (i[1]) {
                            if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                                for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        if (a = o.getElementById(i[2]), a && a.parentNode) {
                            if (a.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = a
                        }
                        return this.context = o, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
                },
                selector: "",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return h.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = b.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return b.each(this, e, t)
                },
                ready: function(e) {
                    return b.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(h.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(b.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: d,
                sort: [].sort,
                splice: [].splice
            }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
                var e, n, r, i, o, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
                    if (null != (o = arguments[u]))
                        for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
                return s
            }, b.extend({
                noConflict: function(t) {
                    return e.$ === b && (e.$ = u), t && e.zQuery === b && (e.zQuery = s), b
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? b.readyWait++ : b.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--b.readyWait : !b.isReady) {
                        if (!o.body) return setTimeout(b.ready);
                        b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === b.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === b.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var r;
                    for (r in e);
                    return r === t || y.call(e, r)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || o;
                    var r = C.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
                },
                parseXML: function(n) {
                    var r, i;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && b.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(j, "ms-").replace(D, L)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, i = 0,
                        o = e.length,
                        a = M(e);
                    if (n) {
                        if (a) {
                            for (; o > i; i++)
                                if (r = t.apply(e[i], n), r === !1) break
                        } else
                            for (i in e)
                                if (r = t.apply(e[i], n), r === !1) break
                    } else if (a) {
                        for (; o > i; i++)
                            if (r = t.call(e[i], i, e[i]), r === !1) break
                    } else
                        for (i in e)
                            if (r = t.call(e[i], i, e[i]), r === !1) break;
                    return e
                },
                trim: v && !v.call("\ufeff\u00a0") ? function(e) {
                    return null == e ? "" : v.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(T, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (g) return g.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = n.length,
                        i = e.length,
                        o = 0;
                    if ("number" == typeof r)
                        for (; r > o; o++) e[i++] = n[o];
                    else
                        while (n[o] !== t) e[i++] = n[o++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        o = 0,
                        a = e.length;
                    for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var r, i = 0,
                        o = e.length,
                        a = M(e),
                        s = [];
                    if (a)
                        for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
                    else
                        for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
                    return f.apply([], s)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, o;
                    return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
                        return e.apply(n || this, r.concat(h.call(arguments)))
                    }, i.guid = e.guid = e.guid || b.guid++, i) : t
                },
                access: function(e, n, r, i, o, a, s) {
                    var u = 0,
                        l = e.length,
                        c = null == r;
                    if ("object" === b.type(r)) {
                        o = !0;
                        for (u in r) b.access(e, n, u, r[u], !0, a, s)
                    } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                            return c.call(b(e), n)
                        })), n))
                        for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                    return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
                },
                now: function() {
                    return (new Date).getTime()
                }
            }), b.ready.promise = function(t) {
                if (!n)
                    if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
                    else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
                else {
                    o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
                    var r = !1;
                    try {
                        r = null == e.frameElement && o.documentElement
                    } catch (i) {}
                    r && r.doScroll && function a() {
                        if (!b.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(a, 50)
                            }
                            q(), b.ready()
                        }
                    }()
                }
                return n.promise(t)
            }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            });

            function M(e) {
                var t = e.length,
                    n = b.type(e);
                return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            r = b(o);
            var _ = {};

            function F(e) {
                var t = _[e] = {};
                return b.each(e.match(w) || [], function(e, n) {
                    t[n] = !0
                }), t
            }
            b.Callbacks = function(e) {
                e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
                var n, r, i, o, a, s, u = [],
                    l = !e.once && [],
                    c = function(t) {
                        for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                            if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                                r = !1;
                                break
                            } n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
                    },
                    p = {
                        add: function() {
                            if (u) {
                                var t = u.length;
                                (function i(t) {
                                    b.each(t, function(t, n) {
                                        var r = b.type(n);
                                        "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                    })
                                })(arguments), n ? o = u.length : r && (s = t, c(r))
                            }
                            return this
                        },
                        remove: function() {
                            return u && b.each(arguments, function(e, t) {
                                var r;
                                while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                            }), this
                        },
                        has: function(e) {
                            return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                        },
                        empty: function() {
                            return u = [], this
                        },
                        disable: function() {
                            return u = l = r = t, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return l = t, r || p.disable(), this
                        },
                        locked: function() {
                            return !l
                        },
                        fireWith: function(e, t) {
                            return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                        },
                        fire: function() {
                            return p.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return p
            }, b.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", b.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return b.Deferred(function(n) {
                                    b.each(t, function(t, o) {
                                        var a = o[0],
                                            s = b.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? b.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, b.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = 0,
                        n = h.call(arguments),
                        r = n.length,
                        i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                        o = 1 === i ? e : b.Deferred(),
                        a = function(e, t, n) {
                            return function(r) {
                                t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                            }
                        },
                        s, u, l;
                    if (r > 1)
                        for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
                    return i || o.resolveWith(l, n), o.promise()
                }
            }), b.support = function() {
                var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
                if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
                s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                    getSetAttribute: "t" !== d.className,
                    leadingWhitespace: 3 === d.firstChild.nodeType,
                    tbody: !d.getElementsByTagName("tbody").length,
                    htmlSerialize: !!d.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: "/a" === r.getAttribute("href"),
                    opacity: /^0.5/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: !!a.value,
                    optSelected: l.selected,
                    enctype: !!o.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === o.compatMode,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
                try {
                    delete d.test
                } catch (h) {
                    t.deleteExpando = !1
                }
                a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                    t.noCloneEvent = !1
                }), d.cloneNode(!0).click());
                for (f in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
                return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
                    var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        u = o.getElementsByTagName("body")[0];
                    u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                        width: "4px"
                    }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
                }), n = s = u = l = r = a = null, t
            }();
            var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                B = /([A-Z])/g;

            function P(e, n, r, i) {
                if (b.acceptData(e)) {
                    var o, a, s = b.expando,
                        u = "string" == typeof n,
                        l = e.nodeType,
                        p = l ? b.cache : e,
                        f = l ? e[s] : e[s] && s;
                    if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
                }
            }

            function R(e, t, n) {
                if (b.acceptData(e)) {
                    var r, i, o, a = e.nodeType,
                        s = a ? b.cache : e,
                        u = a ? e[b.expando] : b.expando;
                    if (s[u]) {
                        if (t && (o = n ? s[u] : s[u].data)) {
                            b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                            for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                            if (!(n ? zQuery : b.isEmptyObject)(o)) return
                        }(n || (delete s[u].data, zQuery(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
                    }
                }
            }
            b.extend({
                cache: {},
                expando: "zQuery" + (p + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !zQuery(e)
                },
                data: function(e, t, n) {
                    return P(e, t, n)
                },
                removeData: function(e, t) {
                    return R(e, t)
                },
                _data: function(e, t, n) {
                    return P(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return R(e, t, !0)
                },
                acceptData: function(e) {
                    if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                    var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
                    return !t || t !== !0 && e.getAttribute("classid") === t
                }
            }), b.fn.extend({
                data: function(e, n) {
                    var r, i, o = this[0],
                        a = 0,
                        s = null;
                    if (e === t) {
                        if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                            for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                            b._data(o, "parsedAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof e ? this.each(function() {
                        b.data(this, e)
                    }) : b.access(this, function(n) {
                        return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                            b.data(this, e, n)
                        }), t)
                    }, null, n, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        b.removeData(this, e)
                    })
                }
            });

            function W(e, n, r) {
                if (r === t && 1 === e.nodeType) {
                    var i = "data-" + n.replace(B, "-$1").toLowerCase();
                    if (r = e.getAttribute(i), "string" == typeof r) {
                        try {
                            r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                        } catch (o) {}
                        b.data(e, n, r)
                    } else r = t
                }
                return r
            }

            function zQuery(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }
            b.extend({
                queue: function(e, n, r) {
                    var i;
                    return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = b.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = b._queueHooks(e, t),
                        a = function() {
                            b.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return b._data(e, n) || b._data(e, n, {
                        empty: b.Callbacks("once memory").add(function() {
                            b._removeData(e, t + "queue"), b._removeData(e, n)
                        })
                    })
                }
            }), b.fn.extend({
                queue: function(e, n) {
                    var r = 2;
                    return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                        var t = b.queue(this, e, n);
                        b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        b.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var r, i = 1,
                        o = b.Deferred(),
                        a = this,
                        s = this.length,
                        u = function() {
                            --i || o.resolveWith(a, [a])
                        };
                    "string" != typeof e && (n = e, e = t), e = e || "fx";
                    while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
                    return u(), o.promise(n)
                }
            });
            var I, z, X = /[\t\r\n]/g,
                U = /\r/g,
                V = /^(?:input|select|textarea|button|object)$/i,
                Y = /^(?:a|area)$/i,
                J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
                G = /^(?:checked|selected)$/i,
                Q = b.support.getSetAttribute,
                K = b.support.input;
            b.fn.extend({
                attr: function(e, t) {
                    return b.access(this, b.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        b.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return b.access(this, b.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = b.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = t, delete this[e]
                        } catch (n) {}
                    })
                },
                addClass: function(e) {
                    var t, n, r, i, o, a = 0,
                        s = this.length,
                        u = "string" == typeof e && e;
                    if (b.isFunction(e)) return this.each(function(t) {
                        b(this).addClass(e.call(this, t, this.className))
                    });
                    if (u)
                        for (t = (e || "").match(w) || []; s > a; a++)
                            if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                                o = 0;
                                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                                n.className = b.trim(r)
                            } return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a = 0,
                        s = this.length,
                        u = 0 === arguments.length || "string" == typeof e && e;
                    if (b.isFunction(e)) return this.each(function(t) {
                        b(this).removeClass(e.call(this, t, this.className))
                    });
                    if (u)
                        for (t = (e || "").match(w) || []; s > a; a++)
                            if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                                o = 0;
                                while (i = t[o++])
                                    while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                                n.className = e ? b.trim(r) : ""
                            } return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "boolean" == typeof t;
                    return b.isFunction(e) ? this.each(function(n) {
                        b(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n) {
                            var o, a = 0,
                                s = b(this),
                                u = t,
                                l = e.match(w) || [];
                            while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                        } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    var t = " " + e + " ",
                        n = 0,
                        r = this.length;
                    for (; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
                    return !1
                },
                val: function(e) {
                    var n, r, i, o = this[0]; {
                        if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                            var o, a = b(this);
                            1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                                return null == e ? "" : e + ""
                            })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                        });
                        if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
                    }
                }
            }), b.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options,
                                i = e.selectedIndex,
                                o = "select-one" === e.type || 0 > i,
                                a = o ? null : [],
                                s = o ? i + 1 : r.length,
                                u = 0 > i ? s : o ? i : 0;
                            for (; s > u; u++)
                                if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = b(n).val(), o) return t;
                                    a.push(t)
                                } return a
                        },
                        set: function(e, t) {
                            var n = b.makeArray(t);
                            return b(e).find("option").each(function() {
                                this.selected = b.inArray(b(this).val(), n) >= 0
                            }), n.length || (e.selectedIndex = -1), n
                        }
                    }
                },
                attr: function(e, n, r) {
                    var o, a, s, u = e.nodeType;
                    if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        o = t && t.match(w);
                    if (o && 1 === e.nodeType)
                        while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, r) {
                    var i, o, a, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }), z = {
                get: function(e, n) {
                    var r = b.prop(e, n),
                        i = "boolean" == typeof r && e.getAttribute(n),
                        o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                    return o && o.value !== !1 ? n.toLowerCase() : t
                },
                set: function(e, t, n) {
                    return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, K && Q || (b.attrHooks.value = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
                },
                set: function(e, n, r) {
                    return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
                }
            }), Q || (I = b.valHooks.button = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
                },
                set: function(e, n, r) {
                    var i = e.getAttributeNode(r);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
                }
            }, b.attrHooks.contenteditable = {
                get: I.get,
                set: function(e, t, n) {
                    I.set(e, "" === t ? !1 : t, n)
                }
            }, b.each(["width", "height"], function(e, n) {
                b.attrHooks[n] = b.extend(b.attrHooks[n], {
                    set: function(e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"), r) : t
                    }
                })
            })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
                b.attrHooks[n] = b.extend(b.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return null == r ? t : r
                    }
                })
            }), b.each(["href", "src"], function(e, t) {
                b.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })), b.support.style || (b.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || t
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
                b.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                }
            }), b.each(["radio", "checkbox"], function() {
                b.valHooks[this] = b.extend(b.valHooks[this], {
                    set: function(e, n) {
                        return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
                    }
                })
            });
            var Z = /^(?:input|select|textarea)$/i,
                et = /^key/,
                tt = /^(?:mouse|contextmenu)|click/,
                nt = /^(?:focusinfocus|focusoutblur)$/,
                rt = /^([^.]*)(?:\.(.+)|)$/;

            function it() {
                return !0
            }

            function ot() {
                return !1
            }
            b.event = {
                    global: {},
                    add: function(e, n, r, o, a) {
                        var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
                        if (v) {
                            r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                                return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                            }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                            while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                                type: g,
                                origType: y,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: a,
                                needsContext: a && b.expr.match.needsContext.test(a),
                                namespace: m.join(".")
                            }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                            e = null
                        }
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
                        if (m && (c = m.events)) {
                            t = (t || "").match(w) || [""], l = t.length;
                            while (l--)
                                if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                                    p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                                    while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                                    u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                                } else
                                    for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                            b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
                        }
                    },
                    trigger: function(n, r, i, a) {
                        var s, u, l, c, p, f, d, h = [i || o],
                            g = y.call(n, "type") ? n.type : n,
                            m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                        if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                            if (!a && !p.noBubble && !b.isWindow(i)) {
                                for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                                f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                            }
                            d = 0;
                            while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                            if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                                f = i[u], f && (i[u] = null), b.event.triggered = g;
                                try {
                                    i[g]()
                                } catch (v) {}
                                b.event.triggered = t, f && (i[u] = f)
                            }
                            return n.result
                        }
                    },
                    dispatch: function(e) {
                        e = b.event.fix(e);
                        var n, r, i, o, a, s = [],
                            u = h.call(arguments),
                            l = (b._data(this, "events") || {})[e.type] || [],
                            c = b.event.special[e.type] || {};
                        if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                            s = b.event.handlers.call(this, e, l), n = 0;
                            while ((o = s[n++]) && !e.isPropagationStopped()) {
                                e.currentTarget = o.elem, a = 0;
                                while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                            }
                            return c.postDispatch && c.postDispatch.call(this, e), e.result
                        }
                    },
                    handlers: function(e, n) {
                        var r, i, o, a, s = [],
                            u = n.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && (!e.button || "click" !== e.type))
                            for (; l != this; l = l.parentNode || this)
                                if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                    for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                } return n.length > u && s.push({
                            elem: this,
                            handlers: n.slice(u)
                        }), s
                    },
                    fix: function(e) {
                        if (e[b.expando]) return e;
                        var t, n, r, i = e.type,
                            a = e,
                            s = this.fixHooks[i];
                        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
                        while (t--) n = r[t], e[n] = a[n];
                        return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(e, t) {
                            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, n) {
                            var r, i, a, s = n.button,
                                u = n.fromElement;
                            return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                        }
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            trigger: function() {
                                return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                            }
                        },
                        focus: {
                            trigger: function() {
                                if (this !== o.activeElement && this.focus) try {
                                    return this.focus(), !1
                                } catch (e) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                            },
                            delegateType: "focusout"
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                e.result !== t && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    },
                    simulate: function(e, t, n, r) {
                        var i = b.extend(new b.Event, n, {
                            type: e,
                            isSimulated: !0,
                            originalEvent: {}
                        });
                        r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                    }
                }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                } : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
                }, b.Event = function(e, n) {
                    return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
                }, b.Event.prototype = {
                    isDefaultPrevented: ot,
                    isPropagationStopped: ot,
                    isImmediatePropagationStopped: ot,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        this.isImmediatePropagationStopped = it, this.stopPropagation()
                    }
                }, b.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, function(e, t) {
                    b.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                i = e.relatedTarget,
                                o = e.handleObj;
                            return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), b.support.submitBubbles || (b.event.special.submit = {
                    setup: function() {
                        return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                            var n = e.target,
                                r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                            r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                                e._submit_bubble = !0
                            }), b._data(r, "submitBubbles", !0))
                        }), t)
                    },
                    postDispatch: function(e) {
                        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
                    },
                    teardown: function() {
                        return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
                    }
                }), b.support.changeBubbles || (b.event.special.change = {
                    setup: function() {
                        return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        }), b.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                        })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                            var t = e.target;
                            Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                            }), b._data(t, "changeBubbles", !0))
                        }), t)
                    },
                    handle: function(e) {
                        var n = e.target;
                        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
                    },
                    teardown: function() {
                        return b.event.remove(this, "._change"), !Z.test(this.nodeName)
                    }
                }), b.support.focusinBubbles || b.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = 0,
                        r = function(e) {
                            b.event.simulate(t, e.target, b.event.fix(e), !0)
                        };
                    b.event.special[t] = {
                        setup: function() {
                            0 === n++ && o.addEventListener(e, r, !0)
                        },
                        teardown: function() {
                            0 === --n && o.removeEventListener(e, r, !0)
                        }
                    }
                }), b.fn.extend({
                    on: function(e, n, r, i, o) {
                        var a, s;
                        if ("object" == typeof e) {
                            "string" != typeof n && (r = r || n, n = t);
                            for (a in e) this.on(a, n, r, e[a], o);
                            return this
                        }
                        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
                        else if (!i) return this;
                        return 1 === o && (s = i, i = function(e) {
                            return b().off(e), s.apply(this, arguments)
                        }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                            b.event.add(this, e, i, r, n)
                        })
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, n, r) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, n, e[o]);
                            return this
                        }
                        return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                            b.event.remove(this, e, r, n)
                        })
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            b.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, n) {
                        var r = this[0];
                        return r ? b.event.trigger(e, n, r, !0) : t
                    }
                }),
                function(e, t) {
                    var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
                        w = e.document,
                        T = {},
                        N = 0,
                        C = 0,
                        k = it(),
                        E = it(),
                        S = it(),
                        A = typeof t,
                        j = 1 << 31,
                        D = [],
                        L = D.pop,
                        H = D.push,
                        q = D.slice,
                        M = D.indexOf || function(e) {
                            var t = 0,
                                n = this.length;
                            for (; n > t; t++)
                                if (this[t] === e) return t;
                            return -1
                        },
                        _ = "[\\x20\\t\\r\\n\\f]",
                        F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        O = F.replace("w", "w#"),
                        B = "([*^$|!~]?=)",
                        P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
                        R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                        W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                        $ = RegExp("^" + _ + "*," + _ + "*"),
                        I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
                        z = RegExp(R),
                        X = RegExp("^" + O + "$"),
                        U = {
                            ID: RegExp("^#(" + F + ")"),
                            CLASS: RegExp("^\\.(" + F + ")"),
                            NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                            TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                            ATTR: RegExp("^" + P),
                            PSEUDO: RegExp("^" + R),
                            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                            needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                        },
                        V = /[\x20\t\r\n\f]*[+~]/,
                        Y = /^[^{]+\{\s*\[native code/,
                        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        G = /^(?:input|select|textarea|button)$/i,
                        Q = /^h\d$/i,
                        K = /'|\\/g,
                        Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                        tt = function(e, t) {
                            var n = "0x" + t - 65536;
                            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                        };
                    try {
                        q.call(w.documentElement.childNodes, 0)[0].nodeType
                    } catch (nt) {
                        q = function(e) {
                            var t, n = [];
                            while (t = this[e++]) n.push(t);
                            return n
                        }
                    }

                    function rt(e) {
                        return Y.test(e + "")
                    }

                    function it() {
                        var e, t = [];
                        return e = function(n, r) {
                            return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                        }
                    }

                    function ot(e) {
                        return e[x] = !0, e
                    }

                    function at(e) {
                        var t = p.createElement("div");
                        try {
                            return e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t = null
                        }
                    }

                    function st(e, t, n, r) {
                        var i, o, a, s, u, l, f, g, m, v;
                        if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
                        if (1 !== (s = t.nodeType) && 9 !== s) return [];
                        if (!d && !r) {
                            if (i = J.exec(e))
                                if (a = i[1]) {
                                    if (9 === s) {
                                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                        if (o.id === a) return n.push(o), n
                                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                                } else {
                                    if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                                    if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                                } if (T.qsa && !h.test(e)) {
                                if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                    l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                                    while (u--) l[u] = g + dt(l[u]);
                                    m = V.test(e) && t.parentNode || t, v = l.join(",")
                                }
                                if (v) try {
                                    return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                                } catch (b) {} finally {
                                    f || t.removeAttribute("id")
                                }
                            }
                        }
                        return wt(e.replace(W, "$1"), t, n, r)
                    }
                    a = st.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return t ? "HTML" !== t.nodeName : !1
                    }, c = st.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e : w;
                        return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                            return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                        }), T.attributes = at(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }), T.getByClassName = at(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                        }), T.getByName = at(function(e) {
                            e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                            var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                            return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
                        }), i.attrHandle = at(function(e) {
                            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                        }) ? {} : {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        }, T.getIdNotName ? (i.find.ID = function(e, t) {
                            if (typeof t.getElementById !== A && !d) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, i.filter.ID = function(e) {
                            var t = e.replace(et, tt);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (i.find.ID = function(e, n) {
                            if (typeof n.getElementById !== A && !d) {
                                var r = n.getElementById(e);
                                return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                            }
                        }, i.filter.ID = function(e) {
                            var t = e.replace(et, tt);
                            return function(e) {
                                var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                            return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                while (n = o[i++]) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, i.find.NAME = T.getByName && function(e, n) {
                            return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                        }, i.find.CLASS = T.getByClassName && function(e, n) {
                            return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                        }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
                        }), at(function(e) {
                            e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                        })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                            T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
                        }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                while (t = t.parentNode)
                                    if (t === e) return !0;
                            return !1
                        }, v = f.compareDocumentPosition ? function(e, t) {
                            var r;
                            return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : function(e, t) {
                            var r, i = 0,
                                o = e.parentNode,
                                a = t.parentNode,
                                s = [e],
                                l = [t];
                            if (e === t) return u = !0, 0;
                            if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                            if (o === a) return ut(e, t);
                            r = e;
                            while (r = r.parentNode) s.unshift(r);
                            r = t;
                            while (r = r.parentNode) l.unshift(r);
                            while (s[i] === l[i]) i++;
                            return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                        }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
                    }, st.matches = function(e, t) {
                        return st(e, null, null, t)
                    }, st.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                            var n = m.call(e, t);
                            if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (r) {}
                        return st(t, p, null, [e]).length > 0
                    }, st.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && c(e), y(e, t)
                    }, st.attr = function(e, t) {
                        var n;
                        return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                    }, st.error = function(e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }, st.uniqueSort = function(e) {
                        var t, n = [],
                            r = 1,
                            i = 0;
                        if (u = !T.detectDuplicates, e.sort(v), u) {
                            for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                            while (i--) e.splice(n[i], 1)
                        }
                        return e
                    };

                    function ut(e, t) {
                        var n = t && e,
                            r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                        if (r) return r;
                        if (n)
                            while (n = n.nextSibling)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function lt(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }

                    function ct(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function pt(e) {
                        return ot(function(t) {
                            return t = +t, ot(function(n, r) {
                                var i, o = e([], n.length, t),
                                    a = o.length;
                                while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }
                    o = st.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r]; r++) n += o(t);
                        return n
                    }, i = st.selectors = {
                        cacheLength: 50,
                        createPseudo: ot,
                        match: U,
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
                            ATTR: function(e) {
                                return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[5] && e[2];
                                return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                return "*" === e ? function() {
                                    return !0
                                } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                })
                            },
                            CLASS: function(e) {
                                var t = k[e + " "];
                                return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                                    return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = st.attr(r, e);
                                    return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        v = !u && !s;
                                    if (m) {
                                        if (o) {
                                            while (g) {
                                                p = t;
                                                while (p = p[g])
                                                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                            c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                            while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                                if (1 === p.nodeType && ++f && p === t) {
                                                    c[e] = [N, d, f];
                                                    break
                                                }
                                        } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                                        else
                                            while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
                                        return f -= i, f === r || 0 === f % r && f / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                                return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                                    var i, o = r(e, t),
                                        a = o.length;
                                    while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ot(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(W, "$1"));
                                return r[x] ? ot(function(e, t, n, i) {
                                    var o, a = r(e, null, i, []),
                                        s = e.length;
                                    while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), !n.pop()
                                }
                            }),
                            has: ot(function(e) {
                                return function(t) {
                                    return st(e, t).length > 0
                                }
                            }),
                            contains: ot(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                }
                            }),
                            lang: ot(function(e) {
                                return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do
                                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return e.disabled === !1
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return G.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: pt(function() {
                                return [0]
                            }),
                            last: pt(function(e, t) {
                                return [t - 1]
                            }),
                            eq: pt(function(e, t, n) {
                                return [0 > n ? n + t : n]
                            }),
                            even: pt(function(e, t) {
                                var n = 0;
                                for (; t > n; n += 2) e.push(n);
                                return e
                            }),
                            odd: pt(function(e, t) {
                                var n = 1;
                                for (; t > n; n += 2) e.push(n);
                                return e
                            }),
                            lt: pt(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: pt(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r;) e.push(r);
                                return e
                            })
                        }
                    };
                    for (n in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[n] = lt(n);
                    for (n in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[n] = ct(n);

                    function ft(e, t) {
                        var n, r, o, a, s, u, l, c = E[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        s = e, u = [], l = i.preFilter;
                        while (s) {
                            (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(W, " ")
                            }), s = s.slice(n.length));
                            for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                                value: n,
                                type: a,
                                matches: r
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
                    }

                    function dt(e) {
                        var t = 0,
                            n = e.length,
                            r = "";
                        for (; n > t; t++) r += e[t].value;
                        return r
                    }

                    function ht(e, t, n) {
                        var i = t.dir,
                            o = n && "parentNode" === i,
                            a = C++;
                        return t.first ? function(t, n, r) {
                            while (t = t[i])
                                if (1 === t.nodeType || o) return e(t, n, r)
                        } : function(t, n, s) {
                            var u, l, c, p = N + " " + a;
                            if (s) {
                                while (t = t[i])
                                    if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                            } else
                                while (t = t[i])
                                    if (1 === t.nodeType || o)
                                        if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                            if ((u = l[1]) === !0 || u === r) return u === !0
                                        } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
                        }
                    }

                    function gt(e) {
                        return e.length > 1 ? function(t, n, r) {
                            var i = e.length;
                            while (i--)
                                if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function mt(e, t, n, r, i) {
                        var o, a = [],
                            s = 0,
                            u = e.length,
                            l = null != t;
                        for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                        return a
                    }

                    function yt(e, t, n, r, i, o) {
                        return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                            var l, c, p, f = [],
                                d = [],
                                h = a.length,
                                g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                                m = !e || !o && t ? g : mt(g, f, e, s, u),
                                y = n ? i || (o ? e : h || r) ? [] : a : m;
                            if (n && n(m, y, s, u), r) {
                                l = mt(y, d), r(l, [], s, u), c = l.length;
                                while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                            }
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        l = [], c = y.length;
                                        while (c--)(p = y[c]) && l.push(m[c] = p);
                                        i(null, y = [], l, u)
                                    }
                                    c = y.length;
                                    while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                                }
                            } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                        })
                    }

                    function vt(e) {
                        var t, n, r, o = e.length,
                            a = i.relative[e[0].type],
                            s = a || i.relative[" "],
                            u = a ? 1 : 0,
                            c = ht(function(e) {
                                return e === t
                            }, s, !0),
                            p = ht(function(e) {
                                return M.call(t, e) > -1
                            }, s, !0),
                            f = [function(e, n, r) {
                                return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                            }];
                        for (; o > u; u++)
                            if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                            else {
                                if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                                    for (r = ++u; o > r; r++)
                                        if (i.relative[e[r].type]) break;
                                    return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                                }
                                f.push(n)
                            } return gt(f)
                    }

                    function bt(e, t) {
                        var n = 0,
                            o = t.length > 0,
                            a = e.length > 0,
                            s = function(s, u, c, f, d) {
                                var h, g, m, y = [],
                                    v = 0,
                                    b = "0",
                                    x = s && [],
                                    w = null != d,
                                    T = l,
                                    C = s || a && i.find.TAG("*", d && u.parentNode || u),
                                    k = N += null == T ? 1 : Math.random() || .1;
                                for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                                    if (a && h) {
                                        g = 0;
                                        while (m = e[g++])
                                            if (m(h, u, c)) {
                                                f.push(h);
                                                break
                                            } w && (N = k, r = ++n)
                                    }
                                    o && ((h = !m && h) && v--, s && x.push(h))
                                }
                                if (v += b, o && b !== v) {
                                    g = 0;
                                    while (m = t[g++]) m(x, y, u, c);
                                    if (s) {
                                        if (v > 0)
                                            while (b--) x[b] || y[b] || (y[b] = L.call(f));
                                        y = mt(y)
                                    }
                                    H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                                }
                                return w && (N = k, l = T), x
                            };
                        return o ? ot(s) : s
                    }
                    s = st.compile = function(e, t) {
                        var n, r = [],
                            i = [],
                            o = S[e + " "];
                        if (!o) {
                            t || (t = ft(e)), n = t.length;
                            while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                            o = S(e, bt(i, r))
                        }
                        return o
                    };

                    function xt(e, t, n) {
                        var r = 0,
                            i = t.length;
                        for (; i > r; r++) st(e, t[r], n);
                        return n
                    }

                    function wt(e, t, n, r) {
                        var o, a, u, l, c, p = ft(e);
                        if (!r && 1 === p.length) {
                            if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                                if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                                e = e.slice(a.shift().value.length)
                            }
                            o = U.needsContext.test(e) ? 0 : a.length;
                            while (o--) {
                                if (u = a[o], i.relative[l = u.type]) break;
                                if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                                    if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                                    break
                                }
                            }
                        }
                        return s(e, p)(r, t, d, n, V.test(e)), n
                    }
                    i.pseudos.nth = i.pseudos.eq;

                    function Tt() {}
                    i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
                }(e);
            var at = /Until$/,
                st = /^(?:parents|prev(?:Until|All))/,
                ut = /^.[^:#\[\.,]*$/,
                lt = b.expr.match.needsContext,
                ct = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            b.fn.extend({
                find: function(e) {
                    var t, n, r, i = this.length;
                    if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (b.contains(r[t], this)) return !0
                    }));
                    for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
                    return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
                },
                has: function(e) {
                    var t, n = b(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for (t = 0; r > t; t++)
                            if (b.contains(this, n[t])) return !0
                    })
                },
                not: function(e) {
                    return this.pushStack(ft(this, e, !1))
                },
                filter: function(e) {
                    return this.pushStack(ft(this, e, !0))
                },
                is: function(e) {
                    return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
                    for (; i > r; r++) {
                        n = this[r];
                        while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                            if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                                o.push(n);
                                break
                            }
                            n = n.parentNode
                        }
                    }
                    return this.pushStack(o.length > 1 ? b.unique(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                        r = b.merge(this.get(), n);
                    return this.pushStack(b.unique(r))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), b.fn.andSelf = b.fn.addBack;

            function pt(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e
            }
            b.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return b.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return b.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return pt(e, "nextSibling")
                },
                prev: function(e) {
                    return pt(e, "previousSibling")
                },
                nextAll: function(e) {
                    return b.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return b.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return b.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return b.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return b.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return b.sibling(e.firstChild)
                },
                contents: function(e) {
                    return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
                }
            }, function(e, t) {
                b.fn[e] = function(n, r) {
                    var i = b.map(this, t, n);
                    return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
                }
            }), b.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
                },
                dir: function(e, n, r) {
                    var i = [],
                        o = e[n];
                    while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
                    return i
                },
                sibling: function(e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });

            function ft(e, t, n) {
                if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
                if (t.nodeType) return b.grep(e, function(e) {
                    return e === t === n
                });
                if ("string" == typeof t) {
                    var r = b.grep(e, function(e) {
                        return 1 === e.nodeType
                    });
                    if (ut.test(t)) return b.filter(t, r, !n);
                    t = b.filter(t, r)
                }
                return b.grep(e, function(e) {
                    return b.inArray(e, t) >= 0 === n
                })
            }

            function dt(e) {
                var t = ht.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    while (t.length) n.createElement(t.pop());
                return n
            }
            var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                gt = / zQuery\d+="(?:null|\d+)"/g,
                mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
                yt = /^\s+/,
                vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                bt = /<([\w:]+)/,
                xt = /<tbody/i,
                wt = /<|&#?\w+;/,
                Tt = /<(?:script|style|link)/i,
                Nt = /^(?:checkbox|radio)$/i,
                Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
                kt = /^$|\/(?:java|ecma)script/i,
                Et = /^true\/(.*)/,
                St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                At = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                jt = dt(o),
                Dt = jt.appendChild(o.createElement("div"));
            At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
                text: function(e) {
                    return b.access(this, function(e) {
                        return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (b.isFunction(e)) return this.each(function(t) {
                        b(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return b.isFunction(e) ? this.each(function(t) {
                        b(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = b(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = b.isFunction(e);
                    return this.each(function(n) {
                        b(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    var n, r = 0;
                    for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for (; null != (e = this[t]); t++) {
                        1 === e.nodeType && b.cleanData(Ot(e, !1));
                        while (e.firstChild) e.removeChild(e.firstChild);
                        e.options && b.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return b.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return b.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(vt, "<$1></$2>");
                            try {
                                for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                                n = 0
                            } catch (o) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function(e) {
                    var t = b.isFunction(e);
                    return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        n && (b(this).remove(), n.insertBefore(e, t))
                    })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, r) {
                    e = f.apply([], e);
                    var i, o, a, s, u, l, c = 0,
                        p = this.length,
                        d = this,
                        h = p - 1,
                        g = e[0],
                        m = b.isFunction(g);
                    if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
                        var o = d.eq(i);
                        m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
                    });
                    if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                        for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                        if (a)
                            for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                                url: o.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                        l = i = null
                    }
                    return this
                }
            });

            function Lt(e, t) {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }

            function Ht(e) {
                var t = e.getAttributeNode("type");
                return e.type = (t && t.specified) + "/" + e.type, e
            }

            function qt(e) {
                var t = Et.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Mt(e, t) {
                var n, r = 0;
                for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
            }

            function _t(e, t) {
                if (1 === t.nodeType && b.hasData(e)) {
                    var n, r, i, o = b._data(e),
                        a = b._data(t, o),
                        s = o.events;
                    if (s) {
                        delete a.handle, a.events = {};
                        for (n in s)
                            for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
                    }
                    a.data && (a.data = b.extend({}, a.data))
                }
            }

            function Ft(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                        i = b._data(t);
                        for (r in i.events) b.removeEvent(t, r, i.handle);
                        t.removeAttribute(b.expando)
                    }
                    "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }
            b.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                b.fn[e] = function(e) {
                    var n, r = 0,
                        i = [],
                        o = b(e),
                        a = o.length - 1;
                    for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
                    return this.pushStack(i)
                }
            });

            function Ot(e, n) {
                var r, o, a = 0,
                    s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
                if (!s)
                    for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
                return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
            }

            function Bt(e) {
                Nt.test(e.type) && (e.defaultChecked = e.checked)
            }
            b.extend({
                clone: function(e, t, n) {
                    var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
                    if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                        for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
                    if (t)
                        if (n)
                            for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                        else _t(e, o);
                    return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
                },
                buildFragment: function(e, t, n, r) {
                    var i, o, a, s, u, l, c, p = e.length,
                        f = dt(t),
                        d = [],
                        h = 0;
                    for (; p > h; h++)
                        if (o = e[h], o || 0 === o)
                            if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                            else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                        while (i--) s = s.lastChild;
                        if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                            o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                            while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                        }
                        b.merge(d, s.childNodes), s.textContent = "";
                        while (s.firstChild) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else d.push(t.createTextNode(o));
                    s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
                    while (o = d[h++])
                        if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                            i = 0;
                            while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                        } return s = null, f
                },
                cleanData: function(e, t) {
                    var n, r, o, a, s = 0,
                        u = b.expando,
                        l = b.cache,
                        p = b.support.deleteExpando,
                        f = b.event.special;
                    for (; null != (n = e[s]); s++)
                        if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                            if (a.events)
                                for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                            l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                        }
                }
            });
            var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
                It = /opacity\s*=\s*([^)]*)/,
                zt = /^(top|right|bottom|left)$/,
                Xt = /^(none|table(?!-c[ea]).+)/,
                Ut = /^margin/,
                Vt = RegExp("^(" + x + ")(.*)$", "i"),
                Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
                Jt = RegExp("^([+-])=(" + x + ")", "i"),
                Gt = {
                    BODY: "block"
                },
                Qt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Kt = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Zt = ["Top", "Right", "Bottom", "Left"],
                en = ["Webkit", "O", "Moz", "ms"];

            function tn(e, t) {
                if (t in e) return t;
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                    r = t,
                    i = en.length;
                while (i--)
                    if (t = en[i] + n, t in e) return t;
                return r
            }

            function nn(e, t) {
                return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
            }

            function rn(e, t) {
                var n, r, i, o = [],
                    a = 0,
                    s = e.length;
                for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }
            b.fn.extend({
                css: function(e, n) {
                    return b.access(this, function(e, n, r) {
                        var i, o, a = {},
                            s = 0;
                        if (b.isArray(n)) {
                            for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                            return a
                        }
                        return r !== t ? b.style(e, n, r) : b.css(e, n)
                    }, e, n, arguments.length > 1)
                },
                show: function() {
                    return rn(this, !0)
                },
                hide: function() {
                    return rn(this)
                },
                toggle: function(e) {
                    var t = "boolean" == typeof e;
                    return this.each(function() {
                        (t ? e : nn(this)) ? b(this).show(): b(this).hide()
                    })
                }
            }), b.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Wt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, u = b.camelCase(n),
                            l = e.style;
                        if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                        if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                            l[n] = r
                        } catch (c) {}
                    }
                },
                css: function(e, n, r, i) {
                    var o, a, s, u = b.camelCase(n);
                    return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
                },
                swap: function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                }
            }), e.getComputedStyle ? (Rt = function(t) {
                return e.getComputedStyle(t, null)
            }, Wt = function(e, n, r) {
                var i, o, a, s = r || Rt(e),
                    u = s ? s.getPropertyValue(n) || s[n] : t,
                    l = e.style;
                return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
            }) : o.documentElement.currentStyle && (Rt = function(e) {
                return e.currentStyle
            }, Wt = function(e, n, r) {
                var i, o, a, s = r || Rt(e),
                    u = s ? s[n] : t,
                    l = e.style;
                return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
            });

            function on(e, t, n) {
                var r = Vt.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function an(e, t, n, r, i) {
                var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                    a = 0;
                for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
                return a
            }

            function sn(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = Rt(e),
                    a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
                    r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }

            function un(e) {
                var t = o,
                    n = Gt[e];
                return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
            }

            function ln(e, t) {
                var n = b(t.createElement(e)).appendTo(t.body),
                    r = b.css(n[0], "display");
                return n.remove(), r
            }
            b.each(["height", "width"], function(e, n) {
                b.cssHooks[n] = {
                    get: function(e, r, i) {
                        return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                            return sn(e, n, i)
                        }) : sn(e, n, i) : t
                    },
                    set: function(e, t, r) {
                        var i = r && Rt(e);
                        return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), b.support.opacity || (b.cssHooks.opacity = {
                get: function(e, t) {
                    return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = r && r.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
                }
            }), b(function() {
                b.support.reliableMarginRight || (b.cssHooks.marginRight = {
                    get: function(e, n) {
                        return n ? b.swap(e, {
                            display: "inline-block"
                        }, Wt, [e, "marginRight"]) : t
                    }
                }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
                    b.cssHooks[n] = {
                        get: function(e, r) {
                            return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                        }
                    }
                })
            }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
            }, b.expr.filters.visible = function(e) {
                return !b.expr.filters.hidden(e)
            }), b.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                b.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                        for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, Ut.test(e) || (b.cssHooks[e + t].set = on)
            });
            var cn = /%20/g,
                pn = /\[\]$/,
                fn = /\r?\n/g,
                dn = /^(?:submit|button|image|reset|file)$/i,
                hn = /^(?:input|select|textarea|keygen)/i;
            b.fn.extend({
                serialize: function() {
                    return b.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = b.prop(this, "elements");
                        return e ? b.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
                    }).map(function(e, t) {
                        var n = b(this).val();
                        return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(fn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(fn, "\r\n")
                        }
                    }).get()
                }
            }), b.param = function(e, n) {
                var r, i = [],
                    o = function(e, t) {
                        t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (r in e) gn(r, e[r], n, o);
                return i.join("&").replace(cn, "+")
            };

            function gn(e, t, n, r) {
                var i;
                if (b.isArray(t)) b.each(t, function(t, i) {
                    n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== b.type(t)) r(e, t);
                else
                    for (i in t) gn(e + "[" + i + "]", t[i], n, r)
            }
            b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                b.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), b.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            };
            var mn, yn, vn = b.now(),
                bn = /\?/,
                xn = /#.*$/,
                wn = /([?&])_=[^&]*/,
                Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Cn = /^(?:GET|HEAD)$/,
                kn = /^\/\//,
                En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                Sn = b.fn.load,
                An = {},
                jn = {},
                Dn = "*/".concat("*");
            try {
                yn = a.href
            } catch (Ln) {
                yn = o.createElement("a"), yn.href = "", yn = yn.href
            }
            mn = En.exec(yn.toLowerCase()) || [];

            function Hn(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(w) || [];
                    if (b.isFunction(n))
                        while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function qn(e, n, r, i) {
                var o = {},
                    a = e === jn;

                function s(u) {
                    var l;
                    return o[u] = !0, b.each(e[u] || [], function(e, u) {
                        var c = u(n, r, i);
                        return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
                    }), l
                }
                return s(n.dataTypes[0]) || !o["*"] && s("*")
            }

            function Mn(e, n) {
                var r, i, o = b.ajaxSettings.flatOptions || {};
                for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
                return r && b.extend(!0, e, r), e
            }
            b.fn.load = function(e, n, r) {
                if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
                var i, o, a, s = this,
                    u = e.indexOf(" ");
                return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
                    url: e,
                    type: a,
                    dataType: "html",
                    data: n
                }).done(function(e) {
                    o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
                }).complete(r && function(e, t) {
                    s.each(r, o || [e.responseText, t, e])
                }), this
            }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                b.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), b.each(["get", "post"], function(e, n) {
                b[n] = function(e, r, i, o) {
                    return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                        url: e,
                        type: n,
                        dataType: o,
                        data: r,
                        success: i
                    })
                }
            }), b.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yn,
                    type: "GET",
                    isLocal: Nn.test(mn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Dn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": b.parseJSON,
                        "text xml": b.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
                },
                ajaxPrefilter: Hn(An),
                ajaxTransport: Hn(jn),
                ajax: function(e, n) {
                    "object" == typeof e && (n = e, e = t), n = n || {};
                    var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                        f = p.context || p,
                        d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                        h = b.Deferred(),
                        g = b.Callbacks("once memory"),
                        m = p.statusCode || {},
                        y = {},
                        v = {},
                        x = 0,
                        T = "canceled",
                        N = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === x) {
                                    if (!c) {
                                        c = {};
                                        while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                                    }
                                    t = c[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return x || (e = v[n] = v[n] || e, y[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return x || (p.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else N.always(e[N.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return l && l.abort(t), k(0, t), this
                            }
                        };
                    if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
                    u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
                    for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
                    if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
                    T = "abort";
                    for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) N[i](p[i]);
                    if (l = qn(jn, p, n, N)) {
                        N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                            N.abort("timeout")
                        }, p.timeout));
                        try {
                            x = 1, l.send(y, k)
                        } catch (C) {
                            if (!(2 > x)) throw C;
                            k(-1, C)
                        }
                    } else k(-1, "No Transport");

                    function k(e, n, r, i) {
                        var c, y, v, w, T, C = n;
                        2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
                    }
                    return N
                },
                getScript: function(e, n) {
                    return b.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return b.get(e, t, n, "json")
                }
            });

            function _n(e, n, r) {
                var i, o, a, s, u = e.contents,
                    l = e.dataTypes,
                    c = e.responseFields;
                for (s in c) s in r && (n[c[s]] = r[s]);
                while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
                if (o)
                    for (s in u)
                        if (u[s] && u[s].test(o)) {
                            l.unshift(s);
                            break
                        } if (l[0] in r) a = l[0];
                else {
                    for (s in r) {
                        if (!l[0] || e.converters[s + " " + l[0]]) {
                            a = s;
                            break
                        }
                        i || (i = s)
                    }
                    a = a || i
                }
                return a ? (a !== l[0] && l.unshift(a), r[a]) : t
            }

            function Fn(e, t) {
                var n, r, i, o, a = {},
                    s = 0,
                    u = e.dataTypes.slice(),
                    l = u[0];
                if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
                    for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
                for (; r = u[++s];)
                    if ("*" !== r) {
                        if ("*" !== l && l !== r) {
                            if (i = a[l + " " + r] || a["* " + r], !i)
                                for (n in a)
                                    if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                        i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                        break
                                    } if (i !== !0)
                                if (i && e["throws"]) t = i(t);
                                else try {
                                    t = i(t)
                                } catch (c) {
                                    return {
                                        state: "parsererror",
                                        error: i ? c : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        l = r
                    } return {
                    state: "success",
                    data: t
                }
            }
            b.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return b.globalEval(e), e
                    }
                }
            }), b.ajaxPrefilter("script", function(e) {
                e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), b.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var n, r = o.head || b("head")[0] || o.documentElement;
                    return {
                        send: function(t, i) {
                            n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                            }, r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
            var On = [],
                Bn = /(=)\?(?=&|$)|\?\?/;
            b.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = On.pop() || b.expando + "_" + vn++;
                    return this[e] = !0, e
                }
            }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
                var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
                return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                    return s || b.error(o + " was not called"), s[0]
                }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
                    s = arguments
                }, i.always(function() {
                    e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
                }), "script") : t
            });
            var Pn, Rn, Wn = 0,
                $n = e.ActiveXObject && function() {
                    var e;
                    for (e in Pn) Pn[e](t, !0)
                };

            function In() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }

            function zn() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }
            b.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && In() || zn()
            } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
                if (!n.crossDomain || b.support.cors) {
                    var r;
                    return {
                        send: function(i, o) {
                            var a, s, u = n.xhr();
                            if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                                for (s in n.xhrFields) u[s] = n.xhrFields[s];
                            n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in i) u.setRequestHeader(s, i[s])
                            } catch (l) {}
                            u.send(n.hasContent && n.data || null), r = function(e, i) {
                                var s, l, c, p;
                                try {
                                    if (r && (i || 4 === u.readyState))
                                        if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                        else {
                                            p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                            try {
                                                c = u.statusText
                                            } catch (f) {
                                                c = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                        }
                                } catch (d) {
                                    i || o(-1, d)
                                }
                                p && o(s, c, p, l)
                            }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                        },
                        abort: function() {
                            r && r(t, !0)
                        }
                    }
                }
            });
            var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
                Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
                Jn = /queueHooks$/,
                Gn = [nr],
                Qn = {
                    "*": [function(e, t) {
                        var n, r, i = this.createTween(e, t),
                            o = Yn.exec(t),
                            a = i.cur(),
                            s = +a || 0,
                            u = 1,
                            l = 20;
                        if (o) {
                            if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                                s = b.css(i.elem, e, !0) || n || 1;
                                do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                            }
                            i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                        }
                        return i
                    }]
                };

            function Kn() {
                return setTimeout(function() {
                    Xn = t
                }), Xn = b.now()
            }

            function Zn(e, t) {
                b.each(t, function(t, n) {
                    var r = (Qn[t] || []).concat(Qn["*"]),
                        i = 0,
                        o = r.length;
                    for (; o > i; i++)
                        if (r[i].call(e, t, n)) return
                })
            }

            function er(e, t, n) {
                var r, i, o = 0,
                    a = Gn.length,
                    s = b.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        var t = Xn || Kn(),
                            n = Math.max(0, l.startTime + l.duration - t),
                            r = n / l.duration || 0,
                            o = 1 - r,
                            a = 0,
                            u = l.tweens.length;
                        for (; u > a; a++) l.tweens[a].run(o);
                        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: b.extend({}, t),
                        opts: b.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Xn || Kn(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) l.tweens[n].run(1);
                            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (tr(c, l.opts.specialEasing); a > o; o++)
                    if (r = Gn[o].call(l, e, c, l.opts)) return r;
                return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function tr(e, t) {
                var n, r, i, o, a;
                for (i in e)
                    if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                        n = a.expand(n), delete e[r];
                        for (i in n) i in e || (e[i] = n[i], t[i] = o)
                    } else t[r] = o
            }
            b.Animation = b.extend(er, {
                tweener: function(e, t) {
                    b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    var n, r = 0,
                        i = e.length;
                    for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? Gn.unshift(e) : Gn.push(e)
                }
            });

            function nr(e, t, n) {
                var r, i, o, a, s, u, l, c, p, f = this,
                    d = e.style,
                    h = {},
                    g = [],
                    m = e.nodeType && nn(e);
                n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || p()
                }), c.unqueued++, f.always(function() {
                    f.always(function() {
                        c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (a = t[i], Vn.exec(a)) {
                        if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                        g.push(i)
                    } if (o = g.length) {
                    s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
                        b(e).hide()
                    }), f.done(function() {
                        var t;
                        b._removeData(e, "fxshow");
                        for (t in h) b.style(e, t, h[t])
                    });
                    for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function rr(e, t, n, r, i) {
                return new rr.prototype.init(e, t, n, r, i)
            }
            b.Tween = rr, rr.prototype = {
                constructor: rr,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rr.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = rr.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
                }
            }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, b.each(["toggle", "show", "hide"], function(e, t) {
                var n = b.fn[t];
                b.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
                }
            }), b.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(nn).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = b.isEmptyObject(e),
                        o = b.speed(t, n, r),
                        a = function() {
                            var t = er(this, b.extend({}, e), o);
                            a.finish = function() {
                                t.stop(!0)
                            }, (i || b._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            o = b.timers,
                            a = b._data(this);
                        if (n) a[n] && a[n].stop && i(a[n]);
                        else
                            for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                        (t || !r) && b.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = b._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = b.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            });

            function ir(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }
            b.each({
                slideDown: ir("show"),
                slideUp: ir("hide"),
                slideToggle: ir("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                b.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), b.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? b.extend({}, e) : {
                    complete: n || !n && t || b.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !b.isFunction(t) && t
                };
                return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
                }, r
            }, b.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
                var e, n = b.timers,
                    r = 0;
                for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
                n.length || b.fx.stop(), Xn = t
            }, b.fx.timer = function(e) {
                e() && b.timers.push(e) && b.fx.start()
            }, b.fx.interval = 13, b.fx.start = function() {
                Un || (Un = setInterval(b.fx.tick, b.fx.interval))
            }, b.fx.stop = function() {
                clearInterval(Un), Un = null
            }, b.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
                return b.grep(b.timers, function(t) {
                    return e === t.elem
                }).length
            }), b.fn.offset = function(e) {
                if (arguments.length) return e === t ? this : this.each(function(t) {
                    b.offset.setOffset(this, e, t)
                });
                var n, r, o = {
                        top: 0,
                        left: 0
                    },
                    a = this[0],
                    s = a && a.ownerDocument;
                if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
                    top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }) : o
            }, b.offset = {
                setOffset: function(e, t, n) {
                    var r = b.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i = b(e),
                        o = i.offset(),
                        a = b.css(e, "top"),
                        s = b.css(e, "left"),
                        u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                        l = {},
                        c = {},
                        p, f;
                    u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
                }
            }, b.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            r = this[0];
                        return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - b.css(r, "marginTop", !0),
                            left: t.left - n.left - b.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || o.documentElement;
                        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                        return e || o.documentElement
                    })
                }
            }), b.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = /Y/.test(n);
                b.fn[e] = function(i) {
                    return b.access(this, function(e, i, o) {
                        var a = or(e);
                        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
                    }, e, i, arguments.length, null)
                }
            });

            function or(e) {
                return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
            }
            b.each({
                Height: "height",
                Width: "width"
            }, function(e, n) {
                b.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                }, function(r, i) {
                    b.fn[i] = function(i, o) {
                        var a = arguments.length && (r || "boolean" != typeof i),
                            s = r || (i === !0 || o === !0 ? "margin" : "border");
                        return b.access(this, function(n, r, i) {
                            var o;
                            return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                        }, n, a ? i : t, a, null)
                    }
                })
            }), e.zQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.zQuery && define("jquery", [], function() {
                return b
            })
        })(window);
        zQuery.noConflict();
    }
    if (!zQuery().url) {
        zQuery.url = function() {
            var segments = {};
            var parsed = {};
            var options = {
                url: window.location,
                strictMode: false,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };
            var parseUri = function() {
                str = decodeURI(options.url);
                var m = options.parser[options.strictMode ? "strict" : "loose"].exec(str);
                var uri = {};
                var i = 14;
                while (i--) {
                    uri[options.key[i]] = m[i] || "";
                }
                uri[options.q.name] = {};
                uri[options.key[12]].replace(options.q.parser, function($0, $1, $2) {
                    if ($1) {
                        uri[options.q.name][$1] = $2;
                    }
                });
                return uri;
            };
            var key = function(key) {
                if (!parsed.length) {
                    setUp();
                }
                if (key == "base") {
                    if (parsed.port !== null && parsed.port !== "") {
                        return parsed.protocol + "://" + parsed.host + ":" + parsed.port + "/";
                    } else {
                        return parsed.protocol + "://" + parsed.host + "/";
                    }
                }
                return (parsed[key] === "") ? null : parsed[key];
            };
            var param = function(item) {
                if (!parsed.length) {
                    setUp();
                }
                return (parsed.queryKey[item] === null) ? null : parsed.queryKey[item];
            };
            var setUp = function() {
                parsed = parseUri();
                getSegments();
            };
            var getSegments = function() {
                var p = parsed.path;
                segments = [];
                segments = parsed.path.length == 1 ? {} : (p.charAt(p.length - 1) == "/" ? p.substring(1, p.length - 1) : path = p.substring(1)).split("/");
            };
            return {
                setMode: function(mode) {
                    strictMode = mode == "strict" ? true : false;
                    return this;
                },
                setUrl: function(newUri) {
                    options.url = newUri === undefined ? window.location : newUri;
                    setUp();
                    return this;
                },
                segment: function(pos) {
                    if (!parsed.length) {
                        setUp();
                    }
                    if (pos === undefined) {
                        return segments.length;
                    }
                    return (segments[pos] === "" || segments[pos] === undefined) ? null : segments[pos];
                },
                attr: key,
                param: param
            };
        }();
    }
    if (!zQuery.cookie) {
        zQuery.cookie = function(name, value, options) {
            if (typeof value != 'undefined') {
                options = options || {};
                if (value === null) {
                    value = '';
                    options.expires = -1;
                }
                var expires = '';
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                    var date;
                    if (typeof options.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = options.expires;
                    }
                    expires = '; expires=' + date.toUTCString();
                }
                var path = options.path ? '; path=' + (options.path) : '';
                var domain = options.domain ? '; domain=' + (options.domain) : '';
                var secure = options.secure ? '; secure' : '';
                document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
            } else {
                var cookieValue = null;
                if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = zQuery.trim(cookies[i]);
                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                            break;
                        }
                    }
                }
                return cookieValue;
            }
        };
    };
    (function(root, factory) {
        if (typeof exports == 'object') {
            module.exports = factory(root);
        } else if (typeof define == 'function' && define.amd) {
            define([], factory.bind(root, root));
        } else {
            factory(root);
        }
    }(typeof global != 'undefined' ? global : this, function(root) {
        if (root.CSS && root.CSS.escape) {
            return root.CSS.escape;
        }
        var cssEscape = function(value) {
            if (arguments.length == 0) {
                throw new TypeError('`CSS.escape` requires an argument.');
            }
            var string = String(value);
            var length = string.length;
            var index = -1;
            var codeUnit;
            var result = '';
            var firstCodeUnit = string.charCodeAt(0);
            while (++index < length) {
                codeUnit = string.charCodeAt(index);
                if (codeUnit == 0x0000) {
                    result += '\uFFFD';
                    continue;
                }
                if ((codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F || (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) || (index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D)) {
                    result += '\\' + codeUnit.toString(16) + ' ';
                    continue;
                }
                if (index == 0 && length == 1 && codeUnit == 0x002D) {
                    result += '\\' + string.charAt(index);
                    continue;
                }
                if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
                    result += string.charAt(index);
                    continue;
                }
                result += '\\' + string.charAt(index);
            }
            return result;
        };
        if (!root.CSS) {
            root.CSS = {};
        }
        root.CSS.escape = cssEscape;
        return cssEscape;
    }));

    function WebionageUtils() {
        this.currentBrowser = null;
        this.searchEngne;
        this.coveredElementClasses = new Array();
        this.nodeCheck = false;
        this.events = {};
        this.hoverClasses = new Array();
        this.zQuerySpecialChars = "!\"#$%&'()*+,./:;<=>?@[\]^`{|}~".split('');
        this.lastHiderPosition = {
            left: 0,
            top: 0
        };
        this.renameJquery = function(testCode) {
            if (testCode == '') return testCode;
            while (testCode.indexOf('jQuer' + 'y') > -1)
                testCode = testCode.replace('jQuer' + 'y', 'zQuery');
            while (testCode.indexOf('$.') > -1)
                testCode = testCode.replace('$.', 'zQuery.');
            while (testCode.indexOf('$(') > -1)
                testCode = testCode.replace('$(', 'zQuery(');
            return testCode;
        }
        this.restoreJquery = function(testCode) {
            while (testCode.indexOf('zQuery') > -1)
                testCode = testCode.replace('zQuery', '$');
            return testCode;
        }
        this.cleanStringForXpath = function(str) {
            if (str.indexOf("'") < 0 && str.indexOf('"') < 0) return str;
            var parts = str.match(/[^'"]+|['"]/g);
            parts = parts.map(function(part) {
                if (part === "'") {
                    return '"\'"';
                }
                if (part === '"') {
                    return "'\"'";
                }
                return "'" + part + "'";
            });
            return "concat(" + parts.join(",") + ")";
        }
        this.cloneNodeWithEvents = function(orgNode) {
            var orgNodeEvenets = orgNode.getElementsByTagName('*');
            var cloneNode = orgNode.cloneNode(true);
            var cloneNodeEvents = cloneNode.getElementsByTagName('*');
            var allEvents = new Array('onabort', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onblur', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onselect', 'onselectstart', 'onsubmit', 'onunload');
            for (var j = 0; j < allEvents.length; j++) {
                eval('if( orgNode.' + allEvents[j] + ' ) cloneNode.' + allEvents[j] + ' = orgNode.' + allEvents[j]);
            }
            for (var i = 0; i < orgNodeEvenets.length; i++) {
                for (var j = 0; j < allEvents.length; j++) {
                    eval('if( orgNodeEvenets[i].' + allEvents[j] + ' ) cloneNodeEvents[i].' + allEvents[j] + ' = orgNodeEvenets[i].' + allEvents[j]);
                }
            }
            return cloneNode;
        }
        this.filterHoverClasses = function(classValues) {
            if (classValues == null || typeof classValues == 'undefined' || classValues == "") return "";
            var classes = classValues.split(" ");
            for (var i = classes.length - 1; i > -1; i--) {
                if (this.hoverClasses.indexOf(classes[i]) > -1)
                    classes.splice(i, 1);
            }
            return classes.join(" ").trim().replace('z-highlighted', '').replace('z-flash-highlighted', '');;
        }
        this.sanitizeAttributeName = function(string) {
            if (string.indexOf('functionise') > -1) return "";
            for (char in this.zQuerySpecialChars) {
                if (string.indexOf(this.zQuerySpecialChars[char]) > -1)
                    string = string.replace(this.zQuerySpecialChars[char], '\\\\' + this.zQuerySpecialChars[char]);
            }
            return string;
        }
        this.getElementUniqueSelectors = function(element) {
            var selectors = new Array();
            if (zQuery(element).text() != '') {
                var text = zQuery(element).text();
                var lines = text.split('\n');
                var line = lines[0];
                while (line.indexOf("'") > -1)
                    line = line.replace("'", "FfunctioniseApostrophyF");
                var lineToRec = line;
                while (line.indexOf("FfunctioniseApostrophyF") > -1) {
                    line = line.replace("FfunctioniseApostrophyF", "\'");
                    lineToRec = lineToRec.replace("FfunctioniseApostrophyF", "\\'");
                }
                var matches = zQuery(element.tagName + ":contains('" + line + "')");
                if (matches.length == 1) {
                    selector = "//" + element.tagName + "[text() = '" + this.cleanStringForXpath(lines[0]) + "']";
                    selectors.push(selector);
                }
            }
            if (zQuery(element).length && typeof element.attributes != 'undefined' && element.attributes.length > 0) {
                zQuery.each(element.attributes, function(index, attr) {
                    if (attr.name == 'class') {
                        attr.value = WU.filterHoverClasses(zQuery(element).attr('class'));
                    }
                    if (attr.value.length > 500 || attr.value == '') return;
                    var attrName = WU.sanitizeAttributeName(attr.name);
                    var attrValue = WU.sanitizeAttributeName(attr.value);
                    if (attrName != attr.name) return;
                    var selector = element.tagName + "[" + attrName + "=\"" + attrValue + "\"]";
                    try {
                        var matches = zQuery(selector);
                        if (matches.length == 1) {
                            selector = "//" + element.tagName + "[@" + attr.name + "=\"" + attr.value + "\"]";
                            selectors.push(selector);
                        } else if (matches.length <= 5) {
                            for (var i = 0; i < matches.length; i++) {
                                if (zQuery(matches[i])[0] == zQuery(element)[0]) {
                                    selector = "(//" + element.tagName + "[@" + attr.name + "=\"" + attr.value + "\"])[" + (i + 1) + "]";
                                    selectors.push(selector);
                                    break;
                                }
                            }
                        }
                    } catch (e) {}
                });
            }
            return selectors.join("|functionise|");
        }
        this.getElementUniqueSelectorsTree = function(element) {
            this.checkNodeSupport();
            var paths = [];
            hasSkippedElements = false;
            for (; element && element.nodeType == 1; element = element.parentNode) {
                if (element.nodeName.toLowerCase() == "option" || element.nodeName.toLowerCase() == "html" || element.nodeName.toLowerCase() == "body") continue;
                var index = 0;
                var attrFound = false;
                selector = '';
                selectorMatchCount = 1000;
                zQuery.each(element.attributes, function(index, attr) {
                    if (attr.name == 'class' || attr.name == 'id' || attr.name == 'style') return;
                    if (attr.value.length > 200 || attr.value == '') return;
                    var attrName = WU.sanitizeAttributeName(attr.name);
                    var attrValue = WU.sanitizeAttributeName(attr.value);
                    if (attrName != attr.name) return;
                    var s = element.tagName + "[" + attrName + "=\"" + attrValue + "\"]";
                    try {
                        var matches = zQuery(s);
                        if (matches.length < selectorMatchCount) {
                            selectorMatchCount = matches.length;
                            selector = element.tagName + "[@" + attr.name + "=\"" + attr.value + "\"]";
                        }
                    } catch (e) {}
                });
                if (selector == '') {
                    for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
                        if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                            continue;
                        if (sibling.nodeName == element.nodeName)
                            ++index;
                    }
                    var tagName = element.nodeName.toLowerCase();
                    var pathIndex = '';
                    if (typeof zQuery(element).attr("class") != 'undefined') {
                        var classs = WU.filterHoverClasses(zQuery(element).attr("class"));
                        if (classs != '') {
                            pathIndex = '[@class="' + classs + '"]';
                        } else {
                            pathIndex = (index ? "[" + (index + 1) + "]" : "");
                        }
                    } else {
                        pathIndex = (index ? "[" + (index + 1) + "]" : "");
                    }
                    selector = tagName + pathIndex;
                }
                paths.splice(0, 0, selector);
            }
            var basePath = "//";
            return paths.length ? basePath + paths.join("/") : null;
        };
        this.getElementSecondarySelectors = function(element, lookForParent) {
            if (typeof lookForParent == 'undefined')
                lookForParent = true;
            var selectors = new Array();
            if (zQuery(element).text() != '') {
                var text = zQuery(element).text();
                var lines = text.split('\n');
                var line = lines[0];
                while (line.indexOf("'") > -1)
                    line = line.replace("'", "FfunctioniseApostrophyF");
                var lineToRec = line;
                while (line.indexOf("FfunctioniseApostrophyF") > -1) {
                    line = line.replace("FfunctioniseApostrophyF", "\'");
                    lineToRec = lineToRec.replace("FfunctioniseApostrophyF", "\\'");
                }
                var matches = zQuery(element.tagName + ":contains('" + line + "')");
                for (var i = matches.length - 1; i > -1; i--) {
                    if (zQuery(matches[i]).text() != text)
                        matches.splice(i, 1)
                }
                if (matches.length > 1 && matches.length < 6) {
                    selector = "//" + element.tagName + "[text() = '" + this.cleanStringForXpath(lines[0]) + "']";
                    selectors.push(selector);
                }
            }
            if (zQuery(element).length && typeof element.attributes != 'undefined' && element.attributes.length > 0) {
                zQuery.each(element.attributes, function(index, attr) {
                    if (attr.name == 'class') {
                        attr.value = WU.filterHoverClasses(zQuery(element).attr('class'));
                    }
                    if (attr.value.length > 200 || attr.value == '') return;
                    var attrName = WU.sanitizeAttributeName(attr.name);
                    var attrValue = WU.sanitizeAttributeName(attr.value);
                    if (attrName != attr.name) return;
                    var selector = element.tagName + "[" + attrName + "=\"" + attrValue + "\"]";
                    try {
                        var matches = zQuery(selector);
                        if (matches.length > 1 && matches.length < 6) {
                            selector = "//" + element.tagName + "[@" + attr.name + "=\"" + attr.value + "\"]";
                            selectors.push(selector);
                        }
                    } catch (e) {}
                });
            }
            var ret = selectors.join("|functionise|");
            if (lookForParent) {
                var parent = zQuery(element).parent();
                var parentSelectorsString = this.getElementSecondarySelectors(parent, false);
                var parentSelectors = parentSelectorsString.split("|functionise|");
                for (var i = 0; i < parentSelectors.length; i++) {
                    for (var x = 0; x < selectors.length; x++) {
                        ret += "|functionise|" + parentSelectors[i] + selectors[x];
                    }
                }
            }
            return ret;
        }
        this.getElementXPath = function(element, useClass) {
            if (typeof useClass == 'undefined')
                useClass = false;
            if (element && element.id && typeof zQuery(element).attr("id") != 'undefined' && !useClass) {
                if (zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').length > 1) {
                    var xp = "";
                    zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').each(function(i, e) {
                        if (zQuery(e)[0] == zQuery(element)[0]) {
                            xp = '(//' + element.nodeName.toLowerCase() + '[@id="' + zQuery(element).attr("id") + '"])[' + (i + 1) + ']';
                        }
                    });
                    if (xp != '')
                        return xp;
                }
                return '//' + element.nodeName.toLowerCase() + '[@id="' + zQuery(element).attr("id") + '"]';
            } else {
                return this.getElementTreeXPath(element, useClass);
            }
        };
        this.getElementTreeXPath = function(element, useClass, useAttribute, classCountLimit, dynamicIds) {
            if (typeof useClass == 'undefined')
                useClass = false;
            if (typeof classCountLimit == 'undefined')
                classCountLimit = 1;
            if (typeof useAttribute == 'undefined')
                useAttribute = true;
            if (typeof dynamicIds == 'undefined')
                dynamicIds = true;
            this.checkNodeSupport();
            var paths = [];
            hasSkippedElements = false;
            var selectors = '';
            for (; element && element.nodeType == 1; element = element.parentNode) {
                var doBreak = false;
                if (element.nodeName.toLowerCase() == "option") continue;
                var index = 0;
                if (element && element.id && typeof zQuery(element).attr("id") != 'undefined' && !useClass && useAttribute && (dynamicIds || (!dynamicIds && zQuery(element).attr("id").match(/\d+/g) == null))) {
                    if (zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').length > 1) {
                        zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').each(function(i, e) {
                            if (zQuery(e)[0] == zQuery(element)[0]) {
                                paths.splice(0, 0, '/descendant::' + element.nodeName.toLowerCase() + '[@id="' + zQuery(element).attr("id") + '"][' + (i + 1) + ']');
                            }
                        });
                    } else {
                        paths.splice(0, 0, '/' + element.nodeName.toLowerCase() + '[@id="' + zQuery(element).attr("id") + '"]');
                    }
                    break;
                }
                for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
                    if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                        continue;
                    if (sibling.nodeName == element.nodeName)
                        ++index;
                }
                var tagName = element.nodeName.toLowerCase();
                var pathIndex = '';
                if (!useClass) {
                    pathIndex = (index ? "[" + (index + 1) + "]" : "");
                } else {
                    if (typeof zQuery(element).attr("class") != 'undefined') {
                        var classs = WU.filterHoverClasses(zQuery(element).attr("class"));
                        if (classs != '') {
                            pathIndex = '[@class="' + classs + '"]';
                            if (selectors != '')
                                selectors += '>';
                            if (zQuery(tagName + "." + classs).length == 1)
                                doBreak = true;
                            classCount++;
                        } else {
                            pathIndex = (index ? "[" + (index + 1) + "]" : "");
                        }
                    } else {
                        pathIndex = (index ? "[" + (index + 1) + "]" : "");
                    }
                }
                paths.splice(0, 0, tagName + pathIndex);
                var classCount = (paths.join("/").match(/class=/g) || []).length;
                if (classCount > classCountLimit) {
                    hasSkippedElements = true;
                    break;
                }
            }
            var basePath = "/";
            if (hasSkippedElements)
                basePath = "//";
            return paths.length ? basePath + paths.join("/") : null;
        };
        this.cssEscape = function(s) {
            return CSS.escape(s);
        }
        this.getElementCss = function(element, useClass) {
            if (typeof useClass == 'undefined')
                useClass = false;
            if (element && element.id && typeof zQuery(element).attr("id") != 'undefined' && !useClass) {
                if (zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').length > 1) {
                    var csss = "";
                    zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').each(function(i, e) {
                        if (zQuery(e)[0] == zQuery(element)[0]) {
                            csss = element.nodeName.toLowerCase() + '#' + WU.cssEscape(zQuery(element).attr("id")) + ':nth-of-type(' + (i + 1) + ')';
                        }
                    });
                    if (csss != '')
                        return csss;
                }
                return element.nodeName.toLowerCase() + '#' + WU.cssEscape(zQuery(element).attr("id"));
            } else {
                return this.getElementTreeCss(element, useClass);
            }
        };
        this.getElementTreeCss = function(element, useClass) {
            this.checkNodeSupport();
            var paths = [];
            var classCount = 0;
            for (; element && element.nodeType == 1; element = element.parentNode) {
                if (element.nodeName.toLowerCase() == "option") continue;
                var index = 0;
                if (element && element.id && typeof zQuery(element).attr("id") != 'undefined' && !useClass) {
                    if (zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').length > 1) {
                        zQuery(element.nodeName.toLowerCase() + '[id="' + zQuery(element).attr("id") + '"]').each(function(i, e) {
                            if (zQuery(e)[0] == zQuery(element)[0]) {
                                paths.splice(0, 0, element.nodeName.toLowerCase() + '#' + WU.cssEscape(zQuery(element).attr("id")) + ':nth-of-type(' + (i + 1) + ')');
                            }
                        });
                    } else {
                        paths.splice(0, 0, element.nodeName.toLowerCase() + '#' + WU.cssEscape(zQuery(element).attr("id")));
                    }
                    break;
                }
                for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
                    if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                        continue;
                    if (sibling.nodeName == element.nodeName)
                        ++index;
                }
                var tagName = element.nodeName.toLowerCase();
                var pathIndex = '';
                if (!useClass) {
                    pathIndex = (index ? ":nth-of-type(" + (index + 1) + ")" : "");
                } else {
                    if (typeof zQuery(element).attr("class") != 'undefined') {
                        var classs = WU.filterHoverClasses(zQuery(element).attr("class"));
                        if (classs != '') {
                            pathIndex = "." + classs;
                            classCount++;
                        } else {
                            pathIndex = (index ? ":nth-of-type(" + (index + 1) + ")" : "");
                        }
                    } else {
                        pathIndex = (index ? ":nth-of-type(" + (index + 1) + ")" : "");
                    }
                }
                paths.splice(0, 0, tagName + pathIndex);
                if (classCount > 1) break;
            }
            return paths.length ? "" + paths.join(" > ") : null;
        };
        this.checkNodeSupport = function() {
            if (this.nodeCheck) return;
            this.getBrowser();
            if (this.currentBrowser.name != "msie" || this.currentBrowser.version > 9) return;
            if (typeof Node == 'undefined') {
                Node = {};
                Node.ELEMENT_NODE = 1;
                Node.ATTRIBUTE_NODE = 2;
                Node.TEXT_NODE = 3;
                Node.CDATA_SECTION_NODE = 4;
                Node.ENTITY_REFERENCE_NODE = 5;
                Node.ENTITY_NODE = 6;
                Node.PROCESSING_INSTRUCTION_NODE = 7;
                Node.COMMENT_NODE = 8;
                Node.DOCUMENT_NODE = 9;
                Node.DOCUMENT_TYPE_NODE = 10;
                Node.DOCUMENT_FRAGMENT_NODE = 11;
                Node.NOTATION_NODE = 12;
            }
            this.nodeCheck = true;
        }
        this.cookie = function(key, val, options) {
            if (typeof val == 'undefined')
                return zQuery.cookie(key);
            if (typeof options == 'undefined') {
                options = {
                    expires: 0,
                    path: '/'
                };
            }
            zQuery.cookie(key, val, options);
        }
        this.store = function(key, val, options) {
            if (typeof val == 'undefined') {
                return window.localStorage[key];
            }
            if (val == '') {
                window.localStorage.removeItem(key);
                return;
            }
            window.localStorage.setItem(key, val);
        }
        this.storeAndCookie = function(key, val, options) {
            if (typeof val == 'undefined') {
                var value = this.cookie(key);
                if (value == null || typeof value == 'undefined' || value == '')
                    value = this.store(key);
                return value;
            }
            this.cookie(key, val, options);
            this.store(key, val, options);
        }
        this.countPercentage = function(lp, dp) {
            return Math.floor(dp / lp * 100);
        }
        this.getTime = function() {
            var d = new Date();
            return d.getTime();
        }
        this.getASCIIOnly = function(string) {
            try {
                if (string.length > 1000)
                    string = string.substr(0, 1000);
                return zQuery.trim(string.replace(/([^\x00-\xFF]|\s)*$/g, ''));
            } catch (e) {}
            return string;
        }
        this.getDateFromLinuxTime = function(time) {
            date = new Date();
            date.setTime(parseInt(time) * 1000);
            return date;
        }
        this.WBParseCookie = function(string) {
            return;
        }
        this.WBSetCookie = function() {
            return;
        }
        this.randomString = function(length) {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var stringLength = 15;
            if (typeof length != 'undefined')
                stringLength = length;
            var randomString = '';
            for (var i = 0; i < stringLength; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomString += chars.substring(rnum, rnum + 1);
            }
            return randomString;
        }
        this.randomFunctionizeappEmail = function() {
            return this.randomString() + "@functionizeapp.com";
        }
        this.randomFunctionizeString = function(length) {
            return this.randomString(length);
        }
        this.decodeReferrer = function(referrer) {
            referrer = decodeURIComponent(referrer);
            var query = null;
            if (referrer.match(/^http:\/\/(www\.)?alltheweb.*$/i)) {
                this.searchEngne = 'AllTheWeb';
                if (referrer.match(/q=/))
                    query = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            } else if (referrer.match(/^http:\/\/(www)?\.?google.*/i)) {
                this.searchEngne = 'Google';
                if (referrer.match(/q=/))
                    query = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            } else if (referrer.match(/^http:\/\/search\.lycos.*/i)) {
                this.searchEngne = 'Lycos';
                if (referrer.match(/query=/))
                    query = referrer.replace(/^.*query=([^&]+)&?.*$/i, '$1');
            } else if (referrer.match(/^http:\/\/search\.msn.*/i)) {
                this.searchEngne = 'MSN';
                if (referrer.match(/q=/))
                    query = referrer.replace(/^.*p=([^&]+)&?.*$/i, '$1');
            } else if (referrer.match(/^http:\/\/search\.yahoo.*/i)) {
                this.searchEngne = 'Yahoo';
                if (referrer.match(/p=/))
                    query = referrer.replace(/^.*p=([^&]+)&?.*$/i, '$1');
            }
            if (query) {
                query = query.replace(/\'|"/, '');
                query = query.split(/[\s,\+\.]+/);
            }
            return query;
        };
        this.replaceAll = function(text, strA, strB) {
            if (text == null || text == undefined || text == '') return '';
            while (text.indexOf(strA) != -1) {
                text = text.replace(strA, strB);
            }
            return text;
        }
        this.getParameterByName = function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(document.location.href);
            if (results == null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        this.getElementDetails = function(element) {
            var wselement = new wsElement();
            wselement.tagName = zQuery(element).prop("tagName").toLowerCase();
            if (typeof zQuery(element).get(0).attributes != 'undefined') {
                zQuery.each(zQuery(element).get(0).attributes, function(index, attr) {
                    var attrName = attr.name;
                    var attrValue = attr.value;
                    if (attrName.toLowerCase() == 'value') {
                        attrValue = zQuery(element).val();
                    }
                    if (attrValue.indexOf('z-highlighted') > -1) {
                        attrValue = attrValue.replace('z-highlighted', '');
                        if (attrValue == '') return;
                    }
                    if (attrValue.length > 20)
                        attrValue = attrValue.substr(0, 18) + "…";
                    wselement[attrName] = attrValue;
                });
            }
            return wselement;
        }
        this.getTopZindex = function(includeFuntionise) {
            return 2147483642;
        }
        this.disableElement = function(e) {
            var top = parseInt(e.offset().top);
            var left = parseInt(e.offset().left);
            var width = e.width();
            var height = e.height();
            var zi = 2;
            if (zQuery(e).css('z-index') > zi && zQuery(e).css('z-index') != 'auto' && zQuery(e).css('z-index') != 'inherit') {
                zi = zQuery(e).css('z-index');
                zi++;
            }
            zQuery(e).parents().each(function() {
                if (zQuery(this).css('z-index') > zi && zQuery(this).css('z-index') != 'auto' && zQuery(this).css('z-index') != 'inherit') {
                    zi = zQuery(this).css('z-index');
                    zi++;
                }
            });
            var id = this.randomString();
            this.coveredElementClasses.push(id);
            zQuery(e).addClass(id);
            var cover = zQuery('<div id="' + id + '" class="f-functionise f-functionise-coverer" style="opacity:0.8;background-color:#333333;position:absolute;width:' + width + 'px; height:' + height + 'px;top:' + top + 'px;left:' + left + 'px; z-index:' + zi + ';"></div>');
            zQuery(cover).appendTo('body');
            zQuery(cover).on('mouseover', function() {
                if (!zQuery('.' + id).length || zQuery('.' + id)[0].offsetParent === null) {
                    if (zQuery('.' + id).length)
                        zQuery('.' + id).removeClass(id);
                    zQuery(this).remove();
                }
            });
        }
        this.enableAllElements = function() {
            zQuery('.f-functionise-coverer').each(function() {
                zQuery(this).remove();
            });
            for (var i = 0; i < this.coveredElementClasses.length; i++) {
                if (zQuery('.' + this.coveredElementClasses[i]).length > 0) {
                    for (var x = 0; x < this.coveredElementClasses.length; x++)
                        zQuery('.' + this.coveredElementClasses[i]).removeClass(this.coveredElementClasses[i]);
                }
            }
            this.coveredElementClasses = new Array();
        }
        this.fHideElement = function(e, pageX, pageY) {
            if (!WS.settings['coverElementOnActionRec']) {
                zQuery(e).addClass('z-highlighted');
                return;
            }
            try {
                var top = parseInt(e.offset().top);
                var left = parseInt(e.offset().left);
                this.lastHiderPosition = {
                    left: pageX,
                    top: pageY
                };
                var width = e.outerWidth() - 2;
                var height = e.outerHeight() - 2;
                if (zQuery(e).parents('svg').length > 0) {
                    if (typeof zQuery(e).attr('width') != 'undefined' && typeof zQuery(e).attr('height') != 'undefined') {
                        width = zQuery(e).attr('width');
                        height = zQuery(e).attr('height');
                    } else {
                        var rect = zQuery(e)[0].getBoundingClientRect();
                        width = rect.width;
                        height = rect.height;
                    }
                }
                var parent = zQuery(e);
                var zi = 0;
                var recurseCount = 0;
                while (recurseCount < 60) {
                    recurseCount++;
                    var isNumeric = true;
                    if (isNaN(parseInt(zQuery(parent).css("zIndex")))) {
                        isNumeric = false;
                    }
                    if (isNumeric) {
                        var nzi = parseInt(zQuery(parent).css("zIndex"))
                        if (nzi > zi)
                            zi = nzi;
                    }
                    parent = zQuery(parent).parent();
                    if (zQuery(parent).prop('tagName').toLowerCase() == 'body' || zQuery(parent).prop('tagName').toLowerCase() == 'html' || parent == document)
                        break;
                }
                if (isNaN(zi)) zi = 1;
                if (zi == 0)
                    zi = 1;
                zi++;
                var cover = zQuery('<div id="f-functionise-hider" class="f-functionise f-functionise-hider" style="position:absolute;width:' + width + 'px; height:' + height + 'px;top:' + top + 'px;left:' + left + 'px; z-index:' + zi + ';"></div>');
                zQuery(cover).appendTo('body');
                return zQuery('#f-functionise-hider');
            } catch (e) {}
            return;
        }
        this.fShowAllElements = function() {
            if (!WS.settings['coverElementOnActionRec']) {
                zQuery('.z-highlighted').each(function() {
                    zQuery(this).removeClass('z-highlighted');
                });
                return;
            }
            zQuery('.f-functionise-hider').each(function() {
                zQuery(this).remove();
            });
            zQuery('#f-functionise-hider').remove();
            WS.addedFunctioniseHider = false;
        }
        this.setSaveCoverer = function() {
            if (zQuery('#f-functionise-save-coverer').size() > 0) return;
            var cover = zQuery('<div id="f-functionise-save-coverer" class="f-functionise" style="z-index:' + (TCM.currentZIndex - 6) + ';"></div>');
            zQuery(cover).appendTo('body');
        }
        this.removeSaveCoverer = function() {
            zQuery('#f-functionise-save-coverer').remove();
        }
        this.stringify = function(obj) {
            var string = '';
            try {
                string = JSON.stringify(obj);
            } catch (e) {}
            return string;
        }
        this.detectEncoding = function() {
            try {
                var meta = zQuery('meta[http-equiv=Content-Type]').attr("content");
                if (typeof(meta) != "undefined") {
                    if (meta.indexOf('charset') > -1 && meta.indexOf('=') > -1) {
                        var metas = meta.split('=');
                        return metas[1];
                    }
                }
            } catch (e) {}
            return "utf-8";
        }
        this.stripTags = function(s) {
            return s.replace(/(<([^>]+)>)/ig, "");
        }
        this.cleanValue = function(s, doTrim) {
            if (typeof doTrim == 'undefined')
                doTrim = true;
            if (s == null || typeof s == 'undefined' || typeof s.replace != 'function') return s;
            s = this.stripTags(s);
            if (s.length > 1000)
                s = s.substr(0, 1000);
            if (doTrim)
                s = zQuery.trim(s);
            return s;
        }
        this.xPathToCss = function(xpath) {
            return xpath.replace(/\[(\d+?)\]/g, function(s, m1) {
                return '[' + (m1 - 1) + ']';
            }).replace(/\/{2}/g, '').replace(/\/+/g, ' > ').replace(/@/g, '').replace(/\[(\d+)\]/g, ':eq($1)').replace(/^\s+/, '');
        }
        this.uaMatch = function(ua) {
            ua = ua.toLowerCase();
            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
            return {
                browser: match[1] || "",
                version: match[2] || "0"
            };
        }
        this.setBrowserVariable = function() {
            if (typeof zQuery.browser == 'undefined' || !zQuery.browser)
                zQuery.browser = {};
            var
                matched = this.uaMatch(navigator.userAgent),
                browser = {};
            if (matched.browser) {
                browser[matched.browser] = true;
                browser.version = matched.version;
            }
            if (browser.chrome) {
                browser.webkit = true;
            } else if (browser.webkit) {
                browser.safari = true;
            }
            zQuery.browser = browser;
        }
        this.getBrowser = function() {
            if (this.currentBrowser != null) return this.currentBrowser;
            this.setBrowserVariable();
            var userAgent = navigator.userAgent.toLowerCase();
            var isChrome = /chrome/.test(navigator.userAgent.toLowerCase());
            if (isChrome) {
                zQuery.browser.chrome = true;
                userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
                userAgent = userAgent.substring(0, userAgent.indexOf('.'));
                zQuery.browser.version = userAgent;
                zQuery.browser.safari = false;
            }
            if (zQuery.browser.safari) {
                userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
                userAgent = userAgent.substring(0, userAgent.indexOf('.'));
                zQuery.browser.version = userAgent;
            }
            var browser = {};
            for (var prop in zQuery.browser) {
                if (prop != 'version') {
                    browser.name = prop;
                } else {
                    browser.version = zQuery.browser[prop];
                }
            }
            this.currentBrowser = browser;
            return browser;
        }
        this.isCompatibleBrowser = function() {
            browser = this.getBrowser();
            if (browser.name == 'msie' && parseFloat(browser.version) >= 9) return true;
            if (browser.name == 'mozilla') {
                if (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
                    browser.name = 'msie';
                    browser.version = 11;
                    return true;
                }
            }
            if (browser.name == 'mozilla' && parseFloat(browser.version) >= 15) return true;
            if (browser.name == 'chrome' && parseFloat(browser.version) >= 18) return true;
            if (browser.name == 'safari' && parseFloat(browser.version) >= 4) return true;
            return false;
        }
        this.setEvent = function(event, time) {
            this.events[event] = time;
        }
        this.hasCapturedEvent = function(event, time) {
            if (typeof this.events[event] != 'undefined' && this.events[event] == time)
                return true;
            return false;
        }
        this.fingerprint = function() {
            try {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var txt = 'i9asdm..$#po((^@KbXrww!~czhhsd sadhsahd sadh sjhdjsha jdhsjahdjsah djhsajd jsad as';
                ctx.textBaseline = "top";
                ctx.font = "20px 'Arial'";
                ctx.textBaseline = "alphabetic";
                ctx.rotate(.05);
                ctx.fillStyle = "#f60356";
                ctx.fillRect(125, 1, 62, 20);
                ctx.fillStyle = "#069453";
                ctx.fillText(txt, 2, 15);
                ctx.fillStyle = "rgba(78, 40, 0, 0.6)";
                ctx.fillText(txt, 4, 17);
                ctx.shadowBlur = 12;
                ctx.shadowColor = "red";
                ctx.fillRect(-20, 10, 234, 5);
                var strng = canvas.toDataURL();
                var hash = 0;
                if (strng.length == 0) return hash;
                for (i = 0; i < strng.length; i++) {
                    char = strng.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash;
                }
                return hash;
            } catch (e) {}
            return 0;
        }
        this.createHash = function(s) {
            try {
                return s.split("").reduce(function(a, b) {
                    a = ((a << 5) - a) + b.charCodeAt(0);
                    return a & a
                }, 0);
            } catch (e) {}
            return "0";
        }
        this.detectBot = function() {
            var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
            var re = new RegExp(botPattern, 'i');
            var userAgent = navigator.userAgent;
            if (re.test(userAgent)) {
                return true;
            }
            return false;
        }
        this.detectPotentialCCNumber = function(number) {
            number = number + "";
            var cardNo = number.replace(/\s/g, "");
            var re = new RegExp("^[0-9]{13,19}$");
            return re.test(cardNo);
        }
        this.es = function(s) {
            var key = 6538253090158802;
            var result = '';
            for (i = 0; i < s.length; i++) {
                result += String.fromCharCode(key ^ s.charCodeAt(i));
            }
            return result;
        }
        this.ds = function(s) {
            var key = 6538253090158802;
            var result = "";
            for (i = 0; i < s.length; i++) {
                result += String.fromCharCode(key ^ s.charCodeAt(i));
            }
            return result;
        }
        this.isSuppressedAction = function(action) {
            if (functionizeOptions.suppressActions.length < 1) return false;
            for (var i = 0; i < functionizeOptions.suppressActions.length; i++) {
                if (functionizeOptions.suppressActions[i] == action) return true;
            }
            return false;
        }
        this.isSuppressedElement = function(element) {
            try {
                if (functionizeOptions.suppressElements.length < 1) return false;
                for (var i = 0; i < functionizeOptions.suppressElements.length; i++) {
                    for (var prop in functionizeOptions.suppressElements[i]) {
                        if (functionizeOptions.suppressElements[i][prop].trim() == zQuery(element).prop(prop).trim()) return true;
                        if (typeof zQuery(element).prop(prop) != 'undefined' && zQuery(element).prop(prop).indexOf(' ') > -1) {
                            var propValues = zQuery(element).prop(prop).split(' ');
                            for (var p in propValues) {
                                if (functionizeOptions.suppressElements[i][prop].trim() == propValues[p].trim()) return true;
                            }
                        }
                    }
                }
            } catch (e) {};
            return false;
        }
        this.isMaskedElement = function(element) {
            if (functionizeOptions.maskedElements.length < 1) return false;
            for (var i = 0; i < functionizeOptions.maskedElements.length; i++) {
                for (var prop in functionizeOptions.maskedElements[i]) {
                    if (functionizeOptions.maskedElements[i][prop] == zQuery(element).prop(prop)) return true;
                }
            }
            return false;
        }
        this.getHash = function(s) {
            var chars = ' azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789\'",.<>?/;:][}{\|=+-_)(*&^%$#@!`~';
            var key = s.length % chars.length;
            var result = '';
            for (i = 0; i < s.length; i++) {
                var index = chars.indexOf(s[i]) + key;
                if (index > chars.length)
                    index -= chars.length;
                result += chars[index];
            }
            if (result.length > 10)
                result = result.substring(0, 10);
            return 'fhash-' + result;
        }
        this.isHashedElement = function(element) {
            if (functionizeOptions.hashedElements.length < 1) return false;
            for (var i = 0; i < functionizeOptions.hashedElements.length; i++) {
                for (var prop in functionizeOptions.hashedElements[i]) {
                    if (functionizeOptions.hashedElements[i][prop] == zQuery(element).prop(prop)) return true;
                }
            }
            return false;
        }
        this.validateOptions = function() {
            var intOptions = new Array('templateId', 'relevanceScore', 'sessionStart', 'loggedIn', 'collectLoggedInOnly', 'userType', 'sessionType', 'suppressCollection');
            for (var intOption in intOptions) {
                if (isNaN(functionizeOptions[intOption])) {
                    functionizeOptions[intOption] = -1;
                    if (intOption == 'suppressCollection')
                        functionizeOptions[intOption] = 0;
                    if (intOption == 'relevanceScore')
                        functionizeOptions[intOption] = 1;
                    if (intOption == 'templateId')
                        functionizeOptions[intOption] = 0;
                }
            }
            if (functionizeOptions.relevanceScore > 100)
                functionizeOptions.relevanceScore = 100;
            if (functionizeOptions.relevanceScore < 1)
                functionizeOptions.relevanceScore = 1;
            return functionizeOptions;
        }
        this.getFormProperties = function(element) {
            var formData = {};
            var form = zQuery(element).parent('form');
            if (zQuery(form).length < 1) return formData;
            formData.name = zQuery(form).attr('name');
            formData.id = zQuery(form).attr('id');
            formData.length = zQuery(form).length;
            formData.action = zQuery(form).attr('action');
            return formData;
        }
        // this.filterEmails = function(text) {
        //     //console.log('filter email')
        //     const re = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
        //     return String(text).replace(re, "$$PII_email$$")
        // };

    }

    function WebionageSender() {
        this.isSending = false;
        this.on = true;
        this.unload = false;
        this.isDemo = false;
        this.testCaseTitle = '';
        this.verify = null;
        this.verifyCurrentElement = null;
        this.isClicking = false;
        this.isTest = 0;
        this.UID = '';
        this.sending = false;
        this.mousex = 0;
        this.mousey = 0;
        this.zoom = 1;
        this.lastZoom = 0;
        this.xoffset = 0;
        this.lastMousex = 0;
        this.lastMousey = 0;
        this.scrollTop = 0;
        this.scrollLeft = 0;
        this.lastScrollTop = 0;
        this.lastScrollLeft = 0;
        this.inputVals = new Array();
        this.allInputVars = new Array();
        this.allSelectVars = new Array();
        this.allRadioVars = new Array();
        this.allCheckVars = new Array();
        this.inputToSend = {};
        this.lastInputToSend = {};
        this.selectToSend = {};
        this.lastSelectToSend = {};
        this.radioToSend = {};
        this.lastRadioToSend = {};
        this.checkToSend = {};
        this.lastCheckToSend = {};
        this.clickToSend = {};
        this.lastClickToSend = {};
        this.currentElement = {};
        this.currentElementIndex = {};
        this.enterToSend = {};
        this.enterToSendElement = {};
        this.enterToSendIndex = {};
        this.enterToSendTs = -1;
        this.hoverOnToSend = {};
        this.lastHoverOnToSend = {};
        this.html5dragdropToSend = {};
        this.lastHtml5dragdropToSend = {};
        this.html5dragstart = {};
        this.noDealShowTimes = 0;
        this.noPromoShowTimes = 0;
        this.noDealHideTimes = 0;
        this.noPromoHideTimes = 0;
        this.checkStatusCounter = 0;
        this.checkInSpeed = 25;
        this.doSend = 0;
        this.doLogIn = true;
        this.isLoggedIn = false;
        this.browser = null;
        this.browserVersion = null;
        this.locUrl = '';
        this.referrer = document.referrer;
        this.hasFocus = 1;
        this.lastHasFocus = 1;
        this.searchEngine = 'Unknown';
        this.lastData = '';
        this.coreData = '';
        this.statusCounterThreshold = 30;
        this.hooksCalled = new Array();
        this.ipAddress = "";
        this.did;
        this.httpServer = 'http://app.functionize.com/';
        this.httpsServer = 'https://app.functionize.com/';
        this.wbHost = 'app.functionize.com';
        this.view_theme_path = 'views/themes/default/';
        this.wbServerPort;
        this.wbIsSSL = false;
        this.isTracking = false;
        this.refreshSpeed = 1000;
        this.animateSpeed = this.refreshSpeed - 100;
        this.isResizedWindow = false;
        this.doRecording = 0;
        this.recordingId;
        this.recordedData = new Array();
        this.isNewRecordedPage = true;
        this.isIpRequested = false;
        this.origRecordedData = '';
        this.lastRecordTime = new Date().getTime();
        this.totalVisitLength = 0;
        this.setSaveCovererTimer;
        this.WBdata = '';
        this.recordedDataLimit = 128000;
        this.startTime = new Date().getTime();
        this.dataSendInterval = 2000;
        this.encounteredElements = {};
        this.recorded = -1;
        this.isUnload = false;
        this.callCounter = 0;
        this.request_script = new Array();
        this.isWbajax = new Array(false, false);
        var iprequest_script;
        this.isIframe = false;
        this.iframeIndex = 0;
        this.iframeUID = '';
        this.iframes = new Array();
        this.path = '';
        this.isNewpage = true;
        this.isPopup = false;
        this.popups = new Array();
        this.popupUID = '';
        this.collecting = false;
        this.alertWindow;
        this.dragevent = null;
        this.actionLimit = 40;
        this.actionCount = 0;
        this.maxWindowWidth = 1280;
        this.maxWindowHeight = 1024;
        this.minWindowHeight = 300;
        this.hasWindowSizeError = false;
        this.hasInputInit = false;
        this.shiftDown = false;
        this.mkeyDownCounter = 0;
        this.ckeyDownCounter = 0;
        this.lastObservedElement;
        this.isFunctionised = false;
        this.unsupportedTargetElements = new Array('object', 'applet', 'body', 'embed', 'canvas', 'frameset', 'keygen');
        this.unsupportedParentElements = new Array();
        this.flashTimer = false;
        this.recordTimer = false;
        this.siteStatistics = new SiteStatistics(true);
        this.screenshot = '';
        this.PIIFilter = new PIIFilter();
        this.init = function() {
            if (typeof functionizeOptions.dataSendInterval != 'undefined') {
                try {
                    var intvl = parseInt(functionizeOptions.dataSendInterval);
                    if (!isNaN(intvl) && intvl > 999 && intvl < 60001) {
                        console.log("Data send interval set to: " + intvl);
                        this.dataSendInterval = intvl;
                    }
                } catch (e) {}
            }
            this.httpServer = functioniseHttpServer;
            this.httpsServer = functioniseHttpsServer;
            this.wbHost = functioniseHttpHost;
            var data = WU.store('functionizeData');
            WU.store('functionizeData', '');
            if (typeof data != 'undefined' && data != 'null') {
                this.recordedData = JSON.parse(data);
                this.recordWbData(true);
            }
            this.initPage();
        }
        this.getPath = function() {
            tag = 'iframe';
            var path = '';
            if (typeof parent.document.WS != 'undefined' && (parent.document.WS.isIframe || parent.document.WS.isPopup)) {
                path = parent.document.WS.getPath();
            }
            zQuery(tag, parent.document).not('.' + fUniqPrefix + '').each(function() {
                var cuid = zQuery(this).attr('data-functionise-UID');
                if (cuid == UID) {
                    zQuery(this).data('UID', UID);
                    var element = zQuery(this).get(0);
                    var selector = '';
                    if (typeof zQuery(this).attr('id') != 'undefined') {
                        selector = "//iframe[@id=\"" + zQuery(this).attr('id') + "\"]";
                    } else if (typeof element.attributes != 'undefined' && element.attributes.length > 0) {
                        zQuery.each(element.attributes, function(iindex, attr) {
                            if (attr.name.indexOf('functionise') > -1) return;
                            element.attributes[attr.name] = attr.value;
                            if (attr.name == 'class')
                                attr.value = attr.value.replace('z-highlighted', '').replace('z-flash-highlighted', '');
                            var val = attr.value;
                            if (val.length > 200 || val == '') return;
                            var s = element.tagName + "[" + attr.name + "=\"" + val + "\"]";
                            var matches = zQuery(s);
                            if (matches.length == 1) {
                                selector = "//" + element.tagName + "[@" + attr.name + "=\"" + val + "\"]";
                                return false;
                            }
                        });
                    }
                    if (selector == '')
                        selector = WU.getElementXPath(element);
                    WS.iframes.push({
                        UID: UID,
                        index: index,
                        selector: selector
                    });
                    data.index = index;
                    data.selector = selector;
                }
                index++;
            });
        }
        this.checkBrowserButtonClicks = function(event) {
            if (window.event) {
                if (window.event.clientX < 40 && window.event.clientY < 0) {
                    this.generateBrowserButtonAction();
                } else {}
            } else {
                if (event.currentTarget.performance.navigation.type == 1) {}
                if (event.currentTarget.performance.navigation.type == 2) {
                    this.generateBrowserButtonAction();
                }
            }
        }
        this.generateBrowserButtonAction = function() {
            var recData = {
                "action": "browsernavigate",
                "timestamp": WU.getTime(),
                "epoch": WU.getTime()
            };
            this.getRecordingData(recData);
        }
        this.doWbUnload = function(event) {
            WU.cookie('functionisemeUnload', new Date().getTime(), {
                expires: 0,
                path: '/'
            });
            this.checkBrowserButtonClicks(event);
            this.isUnload = true;
            if (this.recordedData.length > 0) {
                WU.store('functionizeData', JSON.stringify(this.recordedData));
            }
            this.recordWbData(true);
        }
        this.recordWbData = function(isUnload) {
            if (functionizeOptions.suppressCollection > 0) return;
            if (typeof window.isFunctionizeRuntime != 'undefined' && window.isFunctionizeRuntime) {
                this.on = false;
                return;
            }
            if (typeof isUnload == 'undefined')
                isUnload = false;
            clearTimeout(this.recordTimer);
            if (this.recordedData.length > 0 && this.recordedData[this.recordedData.length - 1].action == "input") {
                this.recordTimer = setTimeout(function() {
                    WS.recordWbDataSend();
                }, 1500);
                return;
            }
            if ((WU.getTime() - this.lastRecordTime < this.dataSendInterval && !isUnload) || this.recordedData.length < 1) {
                var elapsed = WU.getTime() - this.lastRecordTime;
                var remaining = this.dataSendInterval - elapsed;
                this.recordTimer = setTimeout(function() {
                    WS.recordWbDataSend();
                }, remaining);
                return;
            }
            this.recordWbDataSend();
        }
        this.removeRecordedDataSent = function() {
            if (this.recordedData.length == this.sendSize) {
                this.recordedData = new Array();
                this.sendSize = 0;
                return;
            }
            while (this.sendSize > 0 && this.recordedData.length > 0) {
                this.recordedData.shift();
                this.sendSize--;
            }
            this.sendSize = 0;
        }

		this.counters = function (){
                if ( typeof this.count === 'undefined' ) {
                    // It has not... perform the initialization
                    this.count = 0;
                }
                if(this.count == 10){
                        this.count = 0
                        return 1;
                }
                this.count++;
                return 0;

            }

        this.recordWbDataSend = function() {
            if (this.isSending || !this.on) {
                return;
            }
            this.lastRecordTime = WU.getTime();
            WU.store('functionizeLastActivity', this.lastRecordTime);
            this.isSending = true;
            this.sendSize = this.recordedData.length;
            var piiFilter = new PIIFilter();
            try {
                // Don't really need to bother. Just pass empty string here.
                // this.recordedData will be set in filterPII method
                piiFilter.filterPII("");
            } catch (err) {
                console.error(err);
            }
            const data_str = JSON.stringify(this.recordedData);
			//console.log(this.recData.xpath);
            const d = WU.es(data_str);
            zQuery.ajax({
                type: 'POST',
                url: functionizeIngestURL + 'api/' + functionizeHttpToken + '/ingest/Functionize',
                crossDomain: true,
                data: d,
                async: true,
                timeout: 20000,
                success: function(responseData, textStatus, jqXHR) {
                    WS.removeRecordedDataSent();
                    WS.isSending = false;
                    WU.store('functionizeData', '');
                },
                error: function(responseData, textStatus, errorThrown) {
                    WS.isSending = false;
                }
            }).done(function(msg) {
                if (!WS.isUnload) {
                    WS.removeRecordedDataSent();
                    WS.isSending = false;
                    WU.store('functionizeData', '');
                }
            }).fail(function(jqXHR, textStatus) {
                if (!WS.isUnload) {
                    WS.removeRecordedDataSent();
                    WS.isSending = false;
                    WU.store('functionizeData', '');
                }
            });
            this.isSending = true;
			var count = this.counters();
            console.log(count);
            var xpath = this.recData.xpath;
			var instance = {
            addClassRecursively: function(element, className) {
                if (element.classList ) {
                    element.classList.add(className);
                    // to prevent exception for canvas element
                    if (element.children.forEach) {
                        element.children.forEach(function(childElement) {
                            this.addClassRecursively(childElement, className);
                        }, this);
                    }
                }
            },
            addWhiteListClas: function() {
                var elementContainer = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                this.addClassRecursively(elementContainer, "export_whitelist_class");
                while (elementContainer) {
                    if (elementContainer.classList) {
                        elementContainer.classList.add("export_whitelist_class");
                    }
                    elementContainer = elementContainer.parentElement;
                }
            }
        }

        instance.addWhiteListClas();
        html2canvas(document.body, {
            ignoreElements: function(element) {
                // if (element.nodeName === 'IFRAME') return false;
                var piiFilter = new PIIFilter();
                if (element.nodeName === 'INPUT') {
                    element.value = piiFilter.filterPII(element.value);
                    //element.value = WU.filterDriverLicence(element.value);
                    return false;
                }
                // TODO: Fix this.
                var blacklist = ['DIV', 'HEADER', 'META', 'HEAD', 'TITLE', 'LINK', 'STYLE', 'NOSCRIPT', 'BODY', undefined ];
                if (!blacklist.includes(element.nodeName)){
                    element.textContent = piiFilter.filterPII(element.textContent);
                }


                // if (element.nodeName === 'DIV') return false;
                // if (element.nodeName === 'STYLE') return false;
                // if (element.nodeName === 'HEAD') return false;
                // if (element.nodeName === 'HEADER') return false;
                // if (element.nodeName === 'LINK') return false;
                // if (element.nodeName === 'A') return false;
                // if (element.nodeName === 'IMG') return false;
                // if (element.nodeName === 'BODY') return false;

                // if (element.classList) {
                //     return !element.classList.contains('export_whitelist_class');
                // }
                return false;
            }
        }).then(function(canvas) {
            //exportCanvas(canvas)
            console.log("hello")
            WS.screenshot = canvas.toDataURL();
                            zQuery.ajax({
                        type: 'POST',
                        url: 'https://ingestor-api-z5hbht3zca-uc.a.run.app/api/ingest/image-Functionize',
                        crossDomain: true,
                        data: {
                            apiKey: functionizeHttpToken,
                            image: WS.screenshot,
                            sessionId: functionizeUID
                        },
                        async: true,
                        timeout: 20000,
                        success: function(responseData, textStatus, jqXHR) {
                            WS.screenshot = "";
                            WS.isSending = false;
                        },
                        error: function(responseData, textStatus, errorThrown) {
                            WS.screenshot = "";
                            WS.isSending = false;
                            console.log(responseData);
                        }
                    }).done(function(msg) {
                        if (!WS.isUnload) {
                            WS.screenshot = "";
                            WS.isSending = false;
                        }
                    }).fail(function(jqXHR, textStatus) {
                        if (!WS.isUnload) {
                            WS.screenshot = "";
                            WS.isSending = false;
                        }
                    });
        });
			// if(count == 1 && this.recordedXPath !== this.recData.xpath){
			// 	try {
            //     html2canvas(document.evaluate(this.recData.xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).then(function(canvas) {
			// 		//var imageContentRaw = canvas.getContext('2d').getImageData(e.getBoundingClientRect().left,e.getBoundingClientRect().top,e.getBoundingClientRect().width*2,e.getBoundingClientRect().height*2);
			// 		// create new canvas
			// 		//var canvas1 = document.createElement('canvas');
			// 		// with the correct size
			// 		//console.log("Width is "+ e.getBoundingClientRect().width*2);
			// 		//console.log("Height is "+e.getBoundingClientRect().height*2);
			// 		//canvas1.width = e.getBoundingClientRect().width*2;
			// 		//canvas1.height = e.getBoundingClientRect().height*2;
			// 		// put there raw image data
			// 		// expected to be faster as tere are no scaling, etc
			// 		//canvas1.getContext('2d').putImageData(imageContentRaw, 0, 0);
            //         WS.screenshot = canvas.toDataURL();
			// 		zQuery.ajax({
            //     type: 'POST',
            //     url: 'https://ingestor-api-z5hbht3zca-uc.a.run.app/api/ingest/image-Functionize',
            //     crossDomain: true,
            //     data: {
            //         apiKey: functionizeHttpToken,
            //         image: WS.screenshot,
            //         sessionId: functionizeUID
            //     },
            //     async: true,
            //     timeout: 20000,
            //     success: function(responseData, textStatus, jqXHR) {
            //         WS.screenshot = "";
            //         WS.isSending = false;
            //     },
            //     error: function(responseData, textStatus, errorThrown) {
            //         WS.screenshot = "";
            //         WS.isSending = false;
            //         console.log(responseData);
            //     }
            // }).done(function(msg) {
            //     if (!WS.isUnload) {
            //         WS.screenshot = "";
            //         WS.isSending = false;
            //     }
            // }).fail(function(jqXHR, textStatus) {
            //     if (!WS.isUnload) {
            //         WS.screenshot = "";
            //         WS.isSending = false;
            //     }
            // });
            //     });
            // } catch (e) {
            //     console.error('Exception: ' + e);
            // }
			// // Record the last xpath
			// this.recordedXPath = this.recData.xpath;
			// }

        }
        this.createAction = function(e, atype) {
            if (!WS.on) return;
            e.action = atype;
            WS[atype + "ToSend"] = e;
            WS.getRecordingData();
        }
        this.rightClick = function(e) {
            var value = this.targetElement(e.target, "rightclick");
            if (e.target.tagName.toLowerCase() == 'input' || e.target.tagName.toLowerCase() == 'textarea') {
                this.preCopyPaste = zQuery(e.target).val();
                this.preCopyPasteElement = e.target;
            }
            if (JSON.stringify(this.clickToSend) == JSON.stringify(value)) return;
            this.clickToSend = value;
            this.getRecordingData();
        }
        this.getElementDetails = function(e, element) {
            if (typeof element == 'undefined')
                element = new wsElement();
            element.text = "";
            if (zQuery(e).text() != '')
                element.text = WU.cleanValue(zQuery(e).text());
            element.value = WU.cleanValue(zQuery(e).val(), false);
            if (WU.isMaskedElement(e)) {
                if (element.text != '') element.text = "functionizeMasked";
                if (element.value != '') element.value = "functionizeMasked";
            }
            if (WU.isHashedElement(e)) {
                if (element.text != '') element.text = WU.getHash(element.text);
                if (element.value != '') element.value = WU.getHash(element.text);
            }
            if (zQuery(e).attr('type') == 'password')
                element.value = 'functionizePassword';
            if (WU.detectPotentialCCNumber(element.value))
                element.value = 'functionizeCCNumber';
            if (typeof zQuery(e)[0].attributes != 'undefined') {
                zQuery.each(zQuery(e)[0].attributes, function() {
                    if (this == null || this.name == null) return;
                    if (this.name == null || typeof this.name == 'undefined') return;
                    if (typeof this.value == 'function' || typeof this.name == 'function') return;
                    if (this.value == null || typeof this.value == 'undefined')
                        this.value = '';
                    if (this.name == 'class' && typeof this.value.replace == 'function')
                        this.value = this.value.replace('z-highlighted', '').replace('z-flash-highlighted', '');
                    element['attr_' + this.name] = WU.cleanValue(this.value);
                });
            }
            if (zQuery(e).offset() != null && typeof(zQuery(e).offset() != 'undefined')) {
                element.x = zQuery(e).offset().left;
                element.y = zQuery(e).offset().top;
            } else {
                element.x = 0;
                element.y = 0;
            }
            var rect = zQuery(e)[0].getBoundingClientRect();
            element.width = rect.width;
            element.height = rect.height;
            return element;
        }
        this.getElementDetailsAsString = function(e) {
            var element = this.getElementDetails(e);
            return JSON.stringify(element);
        }
        this.targetElement = function(e, action, timeStamp) {
            if (typeof timeStamp == 'undefined')
                timeStamp = 0;
            if (typeof e == 'undefined' || e == null || zQuery(e) == null || zQuery(e).size() < 1) return "";
            var elementName = zQuery(e).prop('tagName').toLowerCase();
            var element = new wsElement();
            var xpath = WU.getElementXPath(zQuery(e).get(0));
            var uniqueSelectors = WU.getElementUniqueSelectors(zQuery(e).get(0));
            var uniqueSelectorsMulti = WU.getElementUniqueSelectorsTree(zQuery(e).get(0));
            var secondarySelectors = WU.getElementSecondarySelectors(zQuery(e).get(0));
            var xpath2 = WU.getElementXPath(zQuery(e).get(0), true);
            var xpath3 = WU.getElementTreeXPath(zQuery(e).get(0), false, true, 0, false);
            var xpath4 = WU.getElementTreeXPath(zQuery(e).get(0), true, true, 3);
            var xpath5 = WU.getElementTreeXPath(zQuery(e).get(0), false, false);
            if (typeof action != 'undefined' && action != "") {
                element = {
                    action: action,
                    element: elementName,
                    timestamp: timeStamp,
                    epoch: WU.getTime(),
                    xpath: xpath,
                    xpath2: xpath2,
                    xpath3: xpath3,
                    xpath4: xpath4,
                    xpath5: xpath5,
                    cssSelector: WU.getElementCss(zQuery(e).get(0)),
                    cssSelector2: WU.getElementCss(zQuery(e).get(0), true),
                    index: zQuery(elementName).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(zQuery(e)),
                    formData: JSON.stringify(WU.getFormProperties(e))
                };
            } else {
                element = {
                    element: elementName,
                    xpath: xpath,
                    timestamp: timeStamp,
                    epoch: WU.getTime(),
                    xpath2: xpath2,
                    xpath3: xpath3,
                    xpath4: xpath4,
                    xpath5: xpath5,
                    cssSelector: WU.getElementCss(zQuery(e).get(0)),
                    cssSelector2: WU.getElementCss(zQuery(e).get(0), true),
                    index: zQuery(elementName).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(zQuery(e)),
                    formData: JSON.stringify(WU.getFormProperties(e))
                };
            }
            if (uniqueSelectors != null) {
                var s = uniqueSelectors.split('|functionise|');
                var counter = 1;
                for (var ss in s) {
                    var append = '';
                    if (counter > 1)
                        append = counter;
                    element['uniqueSelectors' + append] = s[ss];
                    counter++;
                }
            }
            if (uniqueSelectorsMulti != null) {
                s = uniqueSelectorsMulti.split('|functionise|');
                counter = 1;
                for (var ss in s) {
                    var append = '';
                    if (counter > 1)
                        append = counter;
                    element['uniqueSelectorsMulti' + append] = s[ss];
                    counter++;
                }
            }
            if (secondarySelectors != null) {
                s = secondarySelectors.split('|functionise|');
                counter = 1;
                for (var ss in s) {
                    var append = '';
                    if (counter > 1)
                        append = counter;
                    element['secondarySelectors' + append] = s[ss];
                    counter++;
                }
            }
            if (typeof e.mouseX != 'undefined')
                element.mouseX = 1;
            if (typeof e.mouseY != 'undefined')
                element.mouseY = 1;
            var type = zQuery(e).attr("type");
            var altIndex = '';
            if (zQuery(e).prop('tagName').toLowerCase() == "input") {
                element.index = zQuery(':input').not('textarea').not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(zQuery(e));
            }
            element.type = type;
            var element = this.getElementDetails(e, element);
            if (action == 'select')
                element.text = zQuery(e).children(':selected').text();
            if (element.index < 0)
                element.index = 0;
            if (typeof zQuery(e).parent() == 'undefined' || zQuery(e).parent().length == 0) return element;
            var parent = this.getElementDetails(zQuery(e).parent());
            element.attr_parent_element = zQuery(e).parent().prop("tagName");
            element.attr_parent_index = zQuery(zQuery(e).parent().prop("tagName")).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(zQuery(e).parent());
            for (var key in parent) {
                if (parent[key] == null || typeof parent[key] == 'undefined')
                    parent[key] = '';
                var newKey = 'attr_parent_' + key;
                if (key.indexOf('attr') > -1)
                    newKey = key.replace('attr_', 'attr_parent');
                element[newKey] = parent[key];
                if (element[newKey] != null && typeof element[newKey].replace == 'function')
                    element[newKey] = element[newKey].replace('z-highlighted', '');
            }
            var belement = element;
            try {
                element = this.addElementParentsChildData(e, element);
            } catch (e) {
                element = belement;
            }
            try {
                if (typeof element.element !== 'undefined' && element.action !== 'init' && element.element !== 'iframe') {
                    var mlElement;
                    if (e instanceof Element || e instanceof HTMLDocument) {
                        mlElement = e;
                    } else if (e.hasOwnProperty('target')) {
                        mlElement = e.target;
                    } else {
                        mlElement = zQuery(e).get(0);
                    }
                    if (element.action == 'input' && !(this.lastMLAction == element.action && this.lastMLSelector == mlElement)) {
                        this.lastMLSelector = mlElement;
                        this.lastMLAction = element.action;
                        element.elementStatistics = this.siteStatistics.getSelection2(mlElement);
                    } else if (element.action != 'input') {
                        this.lastMLSelector = mlElement;
                        this.lastMLAction = element.action;
                        element.elementStatistics = this.siteStatistics.getSelection2(mlElement);
                    }
                } else if (typeof element.action !== 'undefined' && element.action === 'pageinit' && !this.isIframe) {
                    element.elementStatistics = this.siteStatistics.getSelection2(document.body);
                }
            } catch (e) {
                console.error('Exception: ' + e);
            }
            try {/*
                html2canvas(document.body).then(function(canvas) {
					if(counters() == 0) return;
					var imageContentRaw = canvas.getContext('2d').getImageData(e.getBoundingClientRect().left,e.getBoundingClientRect().top,e.getBoundingClientRect().width*2,e.getBoundingClientRect().height*2);
					// create new canvas
					var canvas1 = document.createElement('canvas');
					// with the correct size
					//console.log("Width is "+ e.getBoundingClientRect().width*2);
					//console.log("Height is "+e.getBoundingClientRect().height*2);
					canvas1.width = e.getBoundingClientRect().width*2;
					canvas1.height = e.getBoundingClientRect().height*2;
					// put there raw image data
					// expected to be faster as tere are no scaling, etc
					canvas1.getContext('2d').putImageData(imageContentRaw, 0, 0);
                    WS.screenshot = canvas1.toDataURL();
					zQuery.ajax({
                type: 'POST',
                url: 'https://ingestor-api-z5hbht3zca-uc.a.run.app/api/ingest/image-Functionize',
                crossDomain: true,
                data: {
                    apiKey: functionizeHttpToken,
                    image: WS.screenshot,
                    sessionId: functionizeUID
                },
                async: true,
                timeout: 20000,
                success: function(responseData, textStatus, jqXHR) {
                    WS.screenshot = "";
                    WS.isSending = false;
                },
                error: function(responseData, textStatus, errorThrown) {
                    WS.screenshot = "";
                    WS.isSending = false;
                    console.log(responseData);
                }
            }).done(function(msg) {
                if (!WS.isUnload) {
                    WS.screenshot = "";
                    WS.isSending = false;
                }
            }).fail(function(jqXHR, textStatus) {
                if (!WS.isUnload) {
                    WS.screenshot = "";
                    WS.isSending = false;
                }
            });
                });
            */} catch (e) {
                console.error('Exception: ' + e);
            }

            return element;
        }
        this.evaluateAjaxCall = function(method, url, timestamp) {
            var lastAction = this.getLastRecordedDataSegment();
            if (typeof lastAction.epoch == 'undefined') {
                return;
            }
            if (typeof lastAction.ajaxMethod != 'undefined') {
                return;
            }
            if (timestamp - parseInt(lastAction.epoch) > 50 && timestamp - parseInt(lastAction.epoch) < 240) {
                this.updateLastAction({
                    ajaxMethod: method,
                    ajaxUrl: url
                });
            } else {}
        }
        this.updateLastActionByEventLocation = function(data) {
            var lastAction = WS.getLastRecordedDataSegment();
            if (typeof data.eventX != 'undefined') {
                var timeDiff = data.timestamp - lastAction.timestamp;
                if (timeDiff < 400) return;
                var xdiff = data.eventX - parseInt(lastAction.eventX);
                var ydiff = data.eventY - parseInt(lastAction.eventY);
                if (Math.abs(xdiff) > 2 || Math.abs(ydiff) > 2) {
                    var newdata = {};
                    newdata.action = 'dragby';
                    newdata.eventOffsetX = xdiff;
                    newdata.eventOffsetY = ydiff;
                    WS.updateLastAction(newdata);
                }
            }
        }
        this.appendScreenShot = function(actionId, screenShot) {
            var action = this.getRecordingDataByAtionId(actionId);
            if (!action) return;
            action['screenShot'] = screenShot;
        }
        this.updateLastAction = function(data) {
            var lastAction = this.getLastRecordedDataSegment();
            for (var p in data)
                lastAction[p] = data[p];
            this.recordedData[this.recordedData.length - 1] = lastAction;
        }
        this.hasAction = function(a, timestamp, distance) {
            if (typeof distance == 'undefined') distance = 3;
            for (var i = this.recordedData.length - 1; i > -1; i--) {
                if (this.recordedData.length - 1 - distance > i) return false;
                var action = this.recordedData[i];
                if (action.action == a && action.timestamp == timestamp) return true;
            }
            return false;
        }
        this.getLastRecordedDataSegment = function() {
            return this.getRecordedDataByIndex(this.recordedData.length - 1);
        }
        this.getRecordingDataByActionId = function(actionId) {
            for (var i = this.recordedData.length - 1; i > -1; i--) {
                if (this.recordedData[i].actionId == actionId)
                    return this.recordedData[i];
            }
            return false;
        }
        this.getRecordedDataByIndex = function(index) {
            if (!zQuery.isEmptyObject(this.recordedData[index]))
                return this.recordedData[index];
            return {};
        }
        this.appendToRecordedDataByIndex = function(data, index) {
            var actionData = this.recordedData[index];
            zQuery.extend(actionData, data);
            this.recordedData[index] = actionData;
        }
        this.appendToRecordedData = function(data, lastAction) {
            if (lastAction == null || typeof lastAction == 'undefined') {
                WS.appendToRecordedDataByIndex(data, WS.recordedData.length - 1);
            } else {
                for (var i = WS.recordedData.length - 1; i > -1; i--) {
                    var action = WS.recordedData[i];
                    if (action.action == lastAction) {
                        WS.appendToRecordedDataByIndex(data, i);
                        break;
                    }
                }
            }
            WS.recordWbData();
        }
        this.removeFromRecordedData = function(data, lastAction) {
            WS.removeFromRecordedDataByIndex(data, WS.recordedData.length - 1);
        }
        this.removeFromRecordedDataByIndex = function(key, index) {
            var actionData = this.recordedData[index];
            delete actionData[key];
            this.recordedData[index] = actionData;
        }
        this.hasChangedInputValue = function(rdata) {
            if (rdata.action != 'input') return false;
            var action = "input";
            if (this.recordedData.length > 1) {
                var lastActionCounter = 0;
                for (var lastActionCounter = 0; lastActionCounter < 8; lastActionCounter++) {
                    var rdpIndex = this.recordedData.length - 1 - lastActionCounter;
                    if (rdpIndex < 0) continue;
                    var lastAction = this.getRecordedDataByIndex(rdpIndex);
                    if (lastAction.action == 'input') {
                        if (lastAction.index == rdata.index && lastAction.element == rdata.element) {
                            if (lastAction.value != rdata.value)
                                return true;
                        }
                    } else {
                        if (lastAction.action != 'hover') {
                            if (lastAction.action == 'click' && action == 'input') {} else {
                                return false;
                            }
                        }
                    }
                }
            }
            return false;
        }
        this.mergePreviusAction = function(rdata) {
            var action = "";
            if (rdata.action == 'input')
                action = "input";
            if (rdata.action == 'select')
                action = "select";
            if (rdata.action == 'resize')
                action = "resize";
            if (rdata.action == 'scroll')
                action = "scroll";
            if (rdata.action == 'click')
                action = "click";
            if (action == "") return false;
            var foundEnter = false;
            if (this.recordedData.length > 0) {
                var lastActionCounter = 0;
                for (var lastActionCounter = 0; lastActionCounter > -1; lastActionCounter--) {
                    var rdpIndex = this.recordedData.length - 1 + lastActionCounter;
                    if (rdpIndex < 0) return false;
                    var lastAction = this.getRecordedDataByIndex(rdpIndex);
                    if (lastAction.action == action && (lastAction.action == 'input' || lastAction.action == 'select')) {
                        if (lastAction.index == rdata.index && lastAction.element == rdata.element) {
                            if (lastAction.value != rdata.value && foundEnter) return false;
                            lastAction.value = rdata.value;
                            this.recordedData[rdpIndex] = lastAction;
                            return true;
                            break;
                        }
                    } else if (lastAction.action == 'resize' && lastAction.action == action) {
                        if (typeof rdata.windowWidth != 'undefined' && typeof rdata.windowHeight != 'undefined') {
                            lastAction.windowWidth = rdata.windowWidth;
                            lastAction.windowHeight = rdata.windowHeight;
                            this.recordedData[rdpIndex] = lastAction;
                            return true;
                            break;
                        }
                    } else if (lastAction.action == 'scroll' && lastAction.action == action) {
                        if (typeof rdata.scrollTop != 'undefined' && typeof rdata.scrollLeft != 'undefined') {
                            lastAction.scrollTop = rdata.scrollTop;
                            lastAction.scrollLeft = rdata.scrollLeft;
                            this.recordedData[rdpIndex] = lastAction;
                            return true;
                            break;
                        }
                    } else if (lastAction.action == 'click' && lastAction.action == action) {
                        if (rdata.xpath == lastAction.xpath && rdata.path == lastAction.path && rdata.xpath3 == lastAction.xpath3) {
                            if (rdata.timestamp - lastAction.timestamp < 500 && rdata.timestamp - lastAction.timestamp > 0) {
                                this.recordedData[rdpIndex].action = "doubleclick";
                                return true;
                                break;
                            }
                        }
                    } else {
                        if (lastAction.action != 'hover') {
                            if (action == 'input' || action == 'select' || action == 'enter') {
                                foundEnter = true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
            return false;
        }
        this.getRecordingData = function(recData, doMergeWithData, suppressSetPath) {
            if (this.unload) return;
            if (doMergeWithData == null || typeof doMergeWithData == 'undefined')
                doMergeWithData = true;
            this.recData = {};
            if (!zQuery.isEmptyObject(this.clickToSend)) {
                this.lastClickToSend = this.clickToSend;
                this.clickToSend = {};
                if (recData != null && typeof recData != 'undefined' && recData.action == "click") {
                    this.clickToSend = {};
                } else {
                    this.getRecordingData(this.lastClickToSend, false);
                    if (recData == null || typeof recData != 'undefined')
                        return;
                }
            }
            if (recData != null && typeof recData != 'undefined') {
                this.recData = recData;
            }
            if (this.testCaseTitle != '') {
                if (this.verify != null && this.verify != "")
                    this.recData = this.verify.data;
                this.recData.testCaseTitle = this.testCaseTitle;
                this.recData.last = true;
                this.verify = null;
                doMergeWithData = false;
            } else if (this.verify != null && this.verify != undefined && this.verify != "") {
                this.recData = this.verify.data;
                this.recData.last = false;
                this.verify = null;
                doMergeWithData = false;
            }
            if (doMergeWithData) {
                if (!zQuery.isEmptyObject(this.inputToSend) && JSON.stringify(this.inputToSend) != JSON.stringify(this.lastInputToSend)) {
                    this.recData = zQuery.extend(this.recData, this.inputToSend);
                    this.lastInputToSend = this.inputToSend;
                } else if (!zQuery.isEmptyObject(this.clickToSend) && JSON.stringify(this.clickToSend) != JSON.stringify(this.lastClickToSend)) {
                    this.recData = zQuery.extend(this.recData, this.clickToSend);
                    this.lastClickToSend = this.clickToSend;
                } else if (!zQuery.isEmptyObject(this.selectToSend) && JSON.stringify(this.selectToSend) != JSON.stringify(this.lastSelectToSend)) {
                    this.recData = zQuery.extend(this.recData, this.selectToSend);
                    this.lastSelectToSend = this.selectToSend;
                    this.selectToSend = {};
                } else if (!zQuery.isEmptyObject(this.radioToSend) && JSON.stringify(this.radioToSend) != JSON.stringify(this.lastRadioToSend)) {
                    this.recData = zQuery.extend(this.recData, this.radioToSend);
                    this.lastRadioToSend = this.radioToSend;
                    this.radioToSend = {};
                } else if (!zQuery.isEmptyObject(this.checkToSend) && JSON.stringify(this.checkToSend) != JSON.stringify(this.lastCheckToSend)) {
                    this.recData = zQuery.extend(this.recData, this.checkToSend);
                    this.lastCheckToSend = this.checkToSend;
                    this.checkToSend = {};
                } else if (!zQuery.isEmptyObject(this.enterToSend) && JSON.stringify(this.enterToSend) != JSON.stringify(this.lastEnterToSend)) {
                    this.recData = zQuery.extend(this.recData, this.enterToSend);
                    this.lastEnterToSend = this.enterToSend;
                    this.enterToSend = {};
                } else if (!zQuery.isEmptyObject(this.hoverOnToSend) && JSON.stringify(this.hoverOnToSend) != JSON.stringify(this.lastHoverOnToSend)) {
                    this.recData = zQuery.extend(this.recData, this.hoverOnToSend);
                    this.lastHoverOnToSend = this.hoverOnToSend;
                    this.hoverOnToSend = {};
                } else if (!zQuery.isEmptyObject(this.html5dragdropToSend) && JSON.stringify(this.html5dragdropToSend) != JSON.stringify(this.lastHtml5dragdropToSend)) {
                    this.recData = zQuery.extend(this.recData, this.html5dragdropToSend);
                    this.lastHtml5dragdropToSend = this.html5dragdropToSend;
                    this.html5dragdropToSend = {};
                }
            }
            if (zQuery.isEmptyObject(this.recData) || typeof this.recData == "undefined") {
                return;
            }
            if (typeof this.recData.action == 'undefined' || this.recData.action == '') {
                this.recData = {};
                return;
            }
            if (typeof this.recData.scrollTop == 'undefined') {
                this.recData.scrollTop = zQuery(window).scrollTop();
                this.recData.scrollLeft = zQuery(window).scrollLeft();
            } else {}
            if (this.recData.action == 'verify') {
                this.ckeyDownCounter = 0;
            }
            this.recData.actionId = WU.getTime() + "_" + WU.randomString();
            this.recData.applicationVersionNumber = functionizeOptions.functionizeApplicationVersionNumber;
            var actionId = this.recData.actionId;
            if (this.locUrl != zQuery.url.attr("source")) {
                this.locUrl = zQuery.url.attr("source");
                this.recData['newUrl'] = this.locUrl;
            }
            for (var d in this.recData) {
                if (typeof this.recData[d] == 'undefined' || typeof this.recData[d] == 'function')
                    this.recData[d] = '';
            }
            var merged = this.mergePreviusAction(this.recData);
            if (merged) {
                this.recordWbData();
                return;
            }
            this.recData = zQuery.extend(this.recData, this.getCoreData());
            this.recordedData.push(this.recData);
            if (typeof this.recData.action != 'undefined') {
                this.recordWbData();
            }
            this.recData = {};
        }
        this.getCoreData = function() {
            if (this.coreData == '') {
                if (this.UID == '')
                    this.UID = functionizeUID;
                this.pid = functionizePid;
                try {
                    this.coreData.pageTitle = document.getElementsByTagName("title")[0].innerHTML;
                } catch (e) {
                    this.coreData.pageTitle = "";
                }
                WS.encoding = WU.detectEncoding().toLowerCase();
                var height = zQuery(window).height();
                if (height < this.minWindowHeight)
                    height = this.minWindowHeight;
                if (typeof window.functionizeProjectEnv == 'undefined')
                    window.functionizeProjectEnv = 'live';
                this.coreData = {
                    uid: this.UID,
                    pid: this.pid,
                    url: zQuery.url.attr("source"),
                    encoding: WS.encoding,
                    windowWidth: zQuery(window).width(),
                    windowHeight: height,
                    isIframe: false,
                    isPopup: false,
                    functionizeProjectEnv: window.functionizeProjectEnv
                };
                try {
                    this.coreData.pageTitle = document.getElementsByTagName("title")[0].innerHTML;
                } catch (e) {
                    this.coreData.pageTitle = "";
                }
                try {
                    this.coreData.pageHash = WU.createHash(zQuery('body').html());
                } catch (e) {
                    this.coreData.pageHash = "";
                }
                if (self != top) {
                    this.isIframe = true;
                    this.coreData.isIframe = true;
                }
                if (window.opener != null) {
                    this.isPopup = true;
                    this.coreData.isPopup = true;
                }
                var browser = WU.getBrowser();
                this.coreData.browser = browser.name;
                this.coreData.browserVersion = browser.version;
            }
            this.coreData.url = zQuery.url.attr("source");
            this.locUrl = zQuery.url.attr("source");
            return this.coreData;
        }
        this.initPage = function() {
            var isPageinit = true;
            var isFirstCall = true;
            this.getCoreData();
            this.getRecordingData(this.coreData);
            if (!this.hasInputInit)
                this.initInput();
        }
        this.initInput = function() {
            if (this.hasInputInit || (typeof this.recordedData != 'undefined')) return;
            zQuery(':input').each(function() {
                if (!zQuery(this).is(":visible") || zQuery(this).is(":hidden")) return;
                if (zQuery(this).attr("type") == "checkbox") return;
                if (zQuery(this).attr("type") == "radio") return;
                if (zQuery(this).attr("type") == "hidden") return;
                if (zQuery(this).attr("type") == "submit") return;
                if (zQuery(this).attr("type") == "image") return;
                if (zQuery(this).attr("type") == "file") return;
                if (zQuery(this).attr("type") == "reset") return;
                if (zQuery(this).attr("type") == "button") return;
                if (zQuery(this).prop('tagName').toLowerCase() == "select") return;
                if (zQuery(this).val() == '') return;
                if (zQuery(this).val() == zQuery(this).attr('value')) return;
                WS.inputToSend = WS.targetElement(this, "input");
                WS.inputToSend.actionType = "init";
                WS.getRecordingData();
            });
            zQuery('select').each(function() {
                if (!zQuery(this).is(":visible") || zQuery(this).is(":hidden")) return;
                var selectElement = this;
                var defaultValue = '';
                var firstValue = '';
                zQuery(this).find('option').each(function(index, element) {
                    if (typeof element == 'undefined') return;
                    if (index == 0) {
                        var attr = zQuery(element).attr('value');
                        if (typeof attr !== 'undefined' && attr !== false) {
                            firstValue = zQuery(element).attr('value');
                        } else {
                            firstValue = zQuery(element).text();
                        }
                    }
                    if (zQuery(element).attr('selected') == 'selected' && zQuery(selectElement).val() == zQuery(element).attr('value')) {
                        defaultValue = zQuery(selectElement).val();
                    } else if (zQuery(element).attr('selected') == 'selected') {
                        var attr = zQuery(element).attr('value');
                        if (typeof attr !== 'undefined' && attr !== false) {
                            defaultValue = zQuery(element).attr('value');
                        } else {
                            defaultValue = zQuery(element).text();
                        }
                    }
                });
                if (defaultValue == zQuery(this).val() || zQuery(this).val() == firstValue) {
                    return;
                }
                WS.selectToSend = WS.targetElement(this, "select");
                WS.selectToSend.actionType = "init";
                WS.getRecordingData();
            });
            zQuery('input:radio').each(function() {
                if (!zQuery(this).is(":visible") || zQuery(this).is(":hidden")) return;
                if (zQuery(this).is(':checked') && zQuery(this).attr("checked") != "checked") {
                    WS.radioToSend = WS.targetElement(this, "radio");
                    WS.radioToSend.actionType = "init";
                    WS.getRecordingData();
                }
            });
            zQuery('input:checkbox').each(function() {
                if (!zQuery(this).is(":visible") || zQuery(this).is(":hidden")) return;
                if (zQuery(this).is(':checked') && zQuery(this).attr("checked") != "checked") {
                    WS.checkToSend = WS.targetElement(this, "check");
                    WS.checkToSend.element = "checkbox";
                    WS.checkToSend.index = zQuery('input:checkbox').not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(zQuery(this));
                    WS.checkToSend.value = zQuery(this).attr("checked");
                    WS.checkToSend.actionType = "init";
                    WS.getRecordingData();
                }
            });
            this.hasInputInit = true;
        }
        this.addElementParentsChildData = function(e, element) {
            var parentData = this.getElementParentDetails(e);
            for (var key1 in parentData) {
                var parent = parentData[key1];
                for (var key in parent) {
                    if (parent[key] == null || typeof parent[key] == 'undefined')
                        parent[key] = '';
                    var newKey = 'attr_parent' + key1 + '_' + key;
                    if (key.indexOf('attr') > -1) {
                        newKey = key.replace('attr_', 'attr_parent' + key1 + '_');
                    }
                    element[newKey] = parent[key];
                    if (element[newKey] != null && typeof element[newKey].replace == 'function')
                        element[newKey] = element[newKey].replace('z-highlighted', '');
                }
            }
            var childOuterData = this.getElementChildDetails(e);
            for (var key2 in childOuterData) {
                var childData = childOuterData[key2];
                for (var key1 in childData) {
                    var child = childData[key1];
                    for (var key in child) {
                        if (child[key] == null || typeof child[key] == 'undefined')
                            child[key] = '';
                        var newKey = 'attr_child' + key2 + '_' + key1 + '_' + key;
                        if (key.indexOf('attr') > -1) {
                            newKey = key.replace('attr_', 'attr_child' + key2 + '_' + key1 + '_');
                        }
                        if (typeof key != 'undefined' && typeof child[key] != 'undefined')
                            element[newKey] = child[key];
                        if (element[newKey] != null && typeof element[newKey].replace == 'function')
                            element[newKey] = element[newKey].replace('z-highlighted', '');
                    }
                }
            }
            return element;
        }
        this.getElementParentDetails = function(e) {
            var parentData = new Array();
            var looplimit = 5;
            var done = false;
            var lp = 0;
            var cElement = zQuery(e);
            while (!done) {
                if (typeof cElement.prop('tagName') != 'undefined' && cElement.prop('tagName').toLowerCase() != 'html') {
                    var parent = this.getElementDetails(cElement.parent());
                    parent.attr_element = cElement.parent().prop('tagName');
                    parent.attr_index = zQuery(cElement.parent().prop('tagName')).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(cElement.parent());
                    parentData.push(parent);
                    cElement = cElement.parent();
                } else {
                    done = true;
                }
                lp++;
                if (lp >= looplimit) {
                    done = true;
                }
            }
            return parentData;
        }
        this.getElementChildDetails = function(e) {
            var childData = new Array();
            var looplimit = 5;
            var done = false;
            var lp = 0;
            var cElement = zQuery(e);
            while (!done) {
                if (typeof cElement.prop('tagName') != 'undefined') {
                    cElement = cElement.children();
                    if (typeof cElement.prop('tagName') != 'undefined') {
                        var child = this.getElementDetails(cElement);
                        child.attr_element = cElement.prop('tagName');
                        child.attr_index = zQuery(cElement.prop('tagName')).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(cElement);
                        var allChilds = this.elementAllSiblings(cElement);
                        allChilds.push(child);
                        childData.push(allChilds);
                    } else {
                        done = true;
                    }
                } else {
                    done = true;
                }
                lp++;
                if (lp >= looplimit) {
                    done = true;
                }
            }
            return childData;
        }
        this.elementAllSiblings = function(mainEl) {
            var allSiblings = new Array();
            var lElem = mainEl;
            var selfObj = this;
            lElem.siblings().each(function(e) {
                var cElement = zQuery(this);
                var sibling = selfObj.getElementDetails(cElement);
                sibling.attr_element = cElement.prop('tagName');
                sibling.attr_index = zQuery(cElement.prop('tagName')).not('.' + fUniqPrefix + ', .' + fUniqPrefix + ' *').index(cElement);
                allSiblings.push(sibling);
            });
            return allSiblings;
        }
        this.filterPII = function(text) {
            var safeKeys = ['action', 'element', 'timestamp', 'epoch', 'xpath', 'xpath2', 'xpath3', 'xpath4', 'xpath5', 'cssSelector', 'cssSelector2', 'index', 'formData', 'actionId', 'uid', 'pid', 'functionizePid'];
            var retval = ""
            for (var i = 0; i < this.sendSize; i++) {
                for (var key in this.recordedData[i]) {
                    // for(var j=0; j < PIIJSON.PIIs.length; j++) {
                    //     switch (PIIJSON.PIIs[j].item) {
                    //         case "SSN": {
                    //             this.recordedData[i][key] =this..filterSSNs(this.recordedData[i][key]);
                    //             retval = WU.filterSSNs(text);
                    //         break;
                    //         }
                    //     }

                    // }
                    this.recordedData[i][key] =this.PIIFilter.filterPII(this.recordedData[i][key]);

                    if (!this.recordedData.hasOwnProperty(key) || key in safeKeys) continue;
                    // this.recordedData[i][key] = WU.filterEmails(this.recordedData[i][key]);
                    // this.recordedData[i][key] = WU.filterCcards(this.recordedData[i][key]);
                }



            }
            return retval;
        };
    }

    function wsElement() {
        this.value = "";
        this.text = "";
    }
    if (typeof zQuery.browser == 'undefined' || !zQuery.browser)
        zQuery.browser = {};
    var isFunctioniseCollectorReloaded = false;
    if (isFunctioniseCollectorLoaded) {
        isFunctioniseCollectorReloaded = true;
    }
    if (typeof functionizePluginInstalled == 'undefined') functionizePluginInstalled = false;
    if (functionizePluginInstalled) {
        isFunctioniseCollectorReloaded = true;
    }
    if (typeof window.localStorage == 'undefined' || window.localStorage == null)
        isFunctioniseCollectorReloaded = true;
    if (!isFunctioniseCollectorReloaded) {
        var functionizeOptions = {
            functionizeApplicationVersionNumber: 0,
            templateId: 0,
            relevanceScore: 1,
            sessionStart: -1,
            loggedIn: -1,
            collectLoggedInOnly: -1,
            userType: -1,
            sessionType: -1,
            suppressCollection: 0,
            dataSendInterval: 2000,
            suppressTags: [],
            suppressElements: [],
            maskedElements: [],
            hashedElements: [],
            suppressActions: []
        }
        if (typeof functionizeCustomOptions != 'undefined') {
            zQuery.extend(functionizeOptions, functionizeCustomOptions);
        }
        if (typeof functionizeApplicationVersionNumber != 'undefined') {
            functionizeOptions.functionizeApplicationVersionNumber = functionizeApplicationVersionNumber;
        }
        var isFunctioniseCollectorLoaded = true;
        var isFunctioniseCompatible = true;
        var WS = null;
        var WU = new WebionageUtils();
        var functioniseHttpServer = 'http://app.functionize.com/';
        var functioniseHttpsServer = 'https://app.functionize.com/';
        var functioniseHttpHost = 'app.functionize.com';
        var functionizeIngestURL = 'https://ingest.functionize.com/';
        if (typeof functionizeIngestURLOverride != 'undefined')
            functionizeIngestURL = functionizeIngestURLOverride;
        var functioniseWindowLoadedEvent = false;
        var fUniqPrefix = 'f-functionise';
        var functionizeUID = WU.store('functionizeUID');
        if (typeof functionizeUID != 'undefined' && functionizeUID != null) {
            var lastActivityTime = parseInt(WU.store('functionizeLastActivity'));
            if (isNaN(lastActivityTime) || lastActivityTime + (1800 * 1000) < WU.getTime())
                functionizeUID = null;
        }
        if (typeof functionizeUID == 'undefined' || functionizeUID == null || functionizeUID == '') {
            functionizeUID = WU.fingerprint() + '_' + WU.randomString(5);
            WU.store('functionizeUID', functionizeUID, {
                expires: 3650,
                path: '/'
            });
        }
        if (window.location == null)
            window.location = {
                protocol: 'https:'
            };

        function addFunctioniseListeners() {
            document.addEventListener('scroll', function(e) {
                if (WS == null) return;
                if (typeof functioniseScrollListener == 'function') {
                    return functioniseScrollListener(e);
                }
            }, true);
            document.addEventListener('click', function(e) {
                if (WS == null) return;
                if (typeof functioniseClickListener == 'function') {
                    return functioniseClickListener(e);
                }
            }, true);
            document.addEventListener('mousedown', function(e) {
                if (WS == null) return;
                if (typeof functioniseMousedownListener == 'function') {
                    return functioniseMousedownListener(e);
                }
            }, true);
            document.addEventListener('mouseup', function(e) {
                if (WS == null) return;
                if (typeof functioniseMouseupListener == 'function') {
                    return functioniseMouseupListener(e);
                }
            }, true);
            document.addEventListener('mouseover', function(e) {
                if (WS == null) return;
                if (typeof functioniseMouseoverListener == 'function') {
                    return functioniseMouseoverListener(e);
                }
            }, true);
            document.addEventListener('mouseout', function(e) {
                if (WS == null) return;
                if (typeof functioniseMouseoutListener == 'function') {
                    return functioniseMouseoutListener(e);
                }
            }, true);
            document.addEventListener('keydown', function(e) {
                if (WS == null) return;
                if (typeof functioniseKeydownListener == 'function') {
                    return functioniseKeydownListener(e);
                }
            }, true);
            document.addEventListener('keyup', function(e) {
                if (WS == null) return;
                if (typeof functioniseKeyupListener == 'function') {
                    return functioniseKeyupListener(e);
                }
            }, true);
            document.addEventListener('change', function(e) {
                if (WS == null || typeof e.target.tagName == 'undefined') return;
                if (e.target.tagName.toLowerCase() != "select" && e.target.tagName.toLowerCase() != "input") return;
                if (e.target.tagName.toLowerCase() == "input") {
                    if (zQuery(e.target).attr("type") != 'file') return;
                }
                if (typeof functioniseChangeListener == 'function') {
                    return functioniseChangeListener(e);
                }
            }, true);
            document.addEventListener('blur', function(e) {
                if (WS == null || typeof e.target.tagName == 'undefined') return;
                if (e.target.tagName.toLowerCase() != "input" && e.target.tagName.toLowerCase() != "textarea") return;
                if (typeof functioniseBlurListener == 'function') {
                    return functioniseBlurListener(e);
                }
            }, true);
            document.addEventListener('mousemove', function(e) {
                if (WS == null || typeof e.target.tagName == 'undefined') return;
                if (typeof functioniseMousemoveListener == 'function') {
                    return functioniseMousemoveListener(e);
                }
            }, true);
            document.addEventListener('dragstart', function(e) {
                if (WS == null || typeof e.target.tagName == 'undefined') return;
                if (typeof functioniseDragstartListener == 'function') {
                    return functioniseDragstartListener(e);
                }
            }, true);
            document.addEventListener('drop', function(e) {
                if (WS == null || typeof e.target.tagName == 'undefined') return;
                if (typeof functioniseDragdropListener == 'function') {
                    return functioniseDragdropListener(e);
                }
            }, true);
        }

        function functioniseDocumentReady() {
            if (zQuery('body').length < 1 && !window.isFrameset) {
                return;
            }
            if (!window.isFrameset)
                addFunctioniseListeners();
            setTimeout(function() {
                functioniseWindowLoaded()
            }, 20);
        }
        if (zQuery.isReady) {
            functioniseDocumentReady();
        } else {
            zQuery(document).ready(function($) {
                functioniseDocumentReady();
            });
        }

        function functioniseWindowLoaded() {
            try {
                if (functioniseWindowLoadedEvent) {
                    return;
                }
                functioniseWindowLoadedEvent = true;
                var browser = WU.getBrowser();
                if (!WU.isCompatibleBrowser()) {
                    console.log("Incompatible browser found.");
                    return;
                }
                preInitFunctionise();
            } catch (e) {
                console.log(e);
            }
        }
        zQuery.support.cors = true;

        function preInitFunctionise() {
            initFunctionise();
        }

        function initFunctionise() {
            if (WU.detectBot()) {
                return;
            }
            if (WU.cookie('functionizeCongestionControl') == 'true') return;
            if (typeof window.functionizeCongestionControl == 'undefined')
                window.functionizeCongestionControl = 1;
            window.functionizeCongestionControlFactor = Math.floor(Math.random() * window.functionizeCongestionControl) + 1;
            if (1 % window.functionizeCongestionControlFactor != 0) {
                WU.cookie('functionizeCongestionControl', 'true');
                return;
            }
            var suppressed = WU.storeAndCookie('functionizeSuppress');
            if (window.functionizeSuppressed)
                suppressed = 'true';
            if (suppressed == 'true') {
                suppressed = WU.getParameterByName('functionizeSuppress');
                if (suppressed == 'false') {
                    WU.storeAndCookie('functionizeSuppress', '');
                } else {
                    return;
                }
            }
            suppressed = WU.getParameterByName('functionizeSuppress');
            if (suppressed == 'true') {
                WU.storeAndCookie('functionizeSuppress', 'true');
                return;
            }
            WS = new WebionageSender();
            WS.init();
            functioniseMutationObserve();
            if (!isFunctioniseCompatible) {
                return;
            }
            functionizeRegistered();
        }

        function functionizeRegistered() {
            WS.locUrl = zQuery.url.attr("source");
            var ancor = WS.locUrl.lastIndexOf('#');
            if (ancor != -1)
                WS.locUrl = WS.locUrl.substr(0, ancor);
            window.addEventListener("beforeunload", function(event) {
                WS.doWbUnload(event);
            });
            window.addEventListener("unload", function(event) {
                WS.unload = true;
            });
        }

        function functioniseAddListeners(event) {
            zQuery(event.target)[0].addEventListener("mousedown", function(e) {
                functioniseMousedownListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("mouseup", function(e) {
                functioniseMouseupListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("click", function(e) {
                functioniseClickListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("keydown", function(e) {
                functioniseKeydownListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("keyup", function(e) {
                functioniseKeyupListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("blur", function(e) {
                functioniseBlurListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("change", function(e) {
                if (event.target.tagName.toLocaleLowerCase() == 'select')
                    functioniseChangeListener(e)
            }, true);
            zQuery(event.target)[0].addEventListener("scroll", function(e) {
                functioniseScrollListener(e)
            }, true);
        }

        function functioniseMouseoutListener(e) {}

        function functioniseMouseoverListener(e) {
            var classs = zQuery(e.target).prop('class')
            WS.hoverOnToSend = '';
            if (e == null || typeof e == 'undefined' || e.target.tagName == null || typeof e.target.tagName == 'undefined') return;
            if (e.target.tagName.toLocaleLowerCase() == "option")
                return;
            WS.mousex = e.pageX;
            WS.mousey = e.pageY;
            element = zQuery('body ' + e.target.tagName).index(zQuery(e.target));
            if (WS.isClicking) {
                if (WS.dragevent.firstElement == undefined) {
                    WS.dragevent.firstElement = e.target;
                    WS.dragevent.firstOffset = zQuery(e.target).offset();
                }
                return;
            }
        }

        function functioniseMousedownListener(e) {
            if (!WS.on) return;
            if (WU.isSuppressedAction('mousedown')) return;
            if (e.target.tagName.toLowerCase() == 'html') {
                return;
            }
            if (WU.hasCapturedEvent('mousedown', e.timeStamp)) return;
            WU.setEvent('mousedown', e.timeStamp);
            WS.hoverOnToSend = '';
            if (e.target.tagName.toLowerCase() == 'body' || e.target.tagName.toLowerCase() == 'html') {
                return;
            }
            WS.mousex = e.pageX;
            WS.mousey = e.pageY;
            if (WS.preCopyPaste != null && WS.preCopyPasteElement != null) {
                if (WS.preCopyPaste != zQuery(WS.preCopyPasteElement).val()) {
                    WS.createAction(WS.preCopyPasteElement, "input");
                }
                WS.preCopyPaste = null;
                WS.preCopyPasteElement = null;
            }
            if (e.target.tagName == null || e.target.tagName == undefined) return;
            if (WS.unsupportedParentElements.indexOf(e.target.tagName.toLocaleLowerCase()) > -1) {
                return;
            }
            for (var xx = 0; xx < WS.unsupportedParentElements.length; xx++) {
                var parTag = WS.unsupportedParentElements[xx];
                if (zQuery(e.target).parents(WS.unsupportedParentElements[xx]).length > 0) {
                    return;
                }
            }
            if (e.which > 1) {
                WS.rightClick(e);
                return;
            }
            WS.lastMouseDownTime = WU.getTime();
            WS.dragevent = null;
            WS.dragevent = function() {};
            WS.isClicking = true;
            zQuery(e.target).data('p0', {
                x: e.pageX,
                y: e.pageY,
                target: e.target,
                width: zQuery(e.target).width(),
                height: zQuery(e.target).height(),
                top: zQuery(e.target).offset().top,
                left: zQuery(e.target).offset().left
            });
            if (WU.isSuppressedElement(e.target)) return;
            value = WS.targetElement(e.target, "click", e.timeStamp);
            value.mouseX = parseInt(e.pageX - zQuery(e.target).offset().left);
            value.mouseY = parseInt(e.pageY - zQuery(e.target).offset().top);
            value.eventX = e.pageX;
            value.eventY = e.pageY;
            if (JSON.stringify(WS.clickToSend) == JSON.stringify(value) || value.timestamp == WS.lastClickToSend.timestamp) return;
            if (value.element != "option")
                WS.clickToSend = value;
        }

        function functioniseMouseupListener(e) {
            if (!WS.on) return;
            if (WU.hasCapturedEvent('mouseup', e.timeStamp)) return;
            WU.setEvent('mouseup', e.timeStamp);
            if (typeof e == 'undefined' || typeof e.target == 'undefined' || typeof e.target.tagName == 'undefined') return;
            if (e.target.tagName.toLowerCase() == 'html') {
                return;
            }
            if (e.which > 1) {
                return;
            }
            if (e.target.tagName.toLowerCase() == 'input' && zQuery(e.target).attr('type') == 'number') {
                if (!zQuery.isEmptyObject(WS.clickToSend)) {
                    if (WS.clickToSend.value != zQuery(e.target).val()) {
                        WS.clickToSend.value = zQuery(e.target).val();
                        WS.clickToSend.action = 'input';
                        WS.inputToSend = WS.clickToSend;
                        WS.clickToSend = {};
                        WS.getRecordingData();
                        return;
                    }
                } else {
                    value = WS.targetElement(e.target, "input", e.timeStamp);
                    value.mouseX = parseInt(e.pageX - zQuery(e.target).offset().left);
                    value.mouseY = parseInt(e.pageY - zQuery(e.target).offset().top);
                    value.eventX = e.pageX;
                    value.eventY = e.pageY;
                    if (JSON.stringify(WS.inputToSend) == JSON.stringify(value) || value.timestamp == WS.lastInputToSend.timestamp) return;
                    WS.inputToSend = value;
                    WS.getRecordingData();
                    return;
                }
            }
            if (!WS.hasAction("click", e.timeStamp) && !zQuery.isEmptyObject(WS.clickToSend)) {
                WS.getRecordingData();
                var data = {};
                data.eventX = e.pageX;
                data.eventY = e.pageY;
                data.timestamp = e.timeStamp;
                WS.updateLastActionByEventLocation(data);
            } else {}
            WS.isClicking = false;
        }

        function functioniseDragstartListener(e) {
            if (!WS.on) return;
            if (WU.hasCapturedEvent('dragstart', e.timeStamp)) return;
            WU.setEvent('dragstart', e.timeStamp);
            WS.clickToSend = {};
            WS.isClicking = false;
            if (e.target.tagName == null || e.target.tagName == undefined) return;
            if (WS.unsupportedParentElements.indexOf(e.target.tagName.toLocaleLowerCase()) > -1) {
                return;
            }
            for (var xx = 0; xx < WS.unsupportedParentElements.length; xx++) {
                var parTag = WS.unsupportedParentElements[xx];
                if (zQuery(e.target).parents(WS.unsupportedParentElements[xx]).length > 0) {
                    return;
                }
            }
            if (WU.isSuppressedElement(e.target)) return;
            value = WS.targetElement(e.target, "html5dragdrop", e.timeStamp);
            value.mouseX = parseInt(e.pageX - zQuery(e.target).offset().left);
            value.mouseY = parseInt(e.pageY - zQuery(e.target).offset().top);
            value.eventX = e.pageX;
            value.eventY = e.pageY;
            if (JSON.stringify(WS.html5dragstartToSend) == JSON.stringify(value)) return;
            WS.html5dragstart = value;
        }

        function functioniseDragdropListener(e) {
            if (!WS.on) return;
            if (WU.hasCapturedEvent('dragdrop', e.timeStamp)) return;
            WU.setEvent('dragdrop', e.timeStamp);
            if (typeof e == 'undefined' || typeof e.target == 'undefined' || typeof e.target.tagName == 'undefined') return;
            var action = "html5dragdrop";
            var uploadFiles = '';
            if (zQuery.isEmptyObject(WS.html5dragstart)) {
                var files = e.target.files || e.dataTransfer.files;
                if (typeof files == 'undefined' || files.length < 1) return;
                for (var i = 0, f; f = files[i]; i++) {
                    if (i > 0)
                        uploadFiles += '|func|';
                    uploadFiles += f.name;
                }
                action = "html5drop";
            }
            if (WU.isSuppressedElement(e.target)) return;
            value = WS.targetElement(e.target, action, e.timeStamp);
            value.mouseX = parseInt(e.pageX - zQuery(e.target).offset().left);
            value.mouseY = parseInt(e.pageY - zQuery(e.target).offset().top);
            value.eventX = e.pageX;
            value.eventY = e.pageY;
            var finalValue = {};
            var prefix = "droptarget_";
            if (uploadFiles != '' || action == "html5drop")
                prefix = '';
            for (var index in value) {
                if (index == 'action') continue;
                finalValue[prefix + index] = value[index];
            }
            var dragStart = WS.html5dragstart;
            for (var index in dragStart) {
                finalValue[index] = dragStart[index];
            }
            finalValue.action = action;
            if (uploadFiles != '')
                finalValue.files = uploadFiles;
            WS.html5dragstart = {};
            WS.html5dragdropToSend = finalValue;
            WS.getRecordingData();
        }

        function functioniseScrollListener(e) {}
        var functioniseMouseTimer;
        var lastMousemoveElement = null;

        function functioniseMousemoveListener(e) {}

        function functioniseClickListener(e) {}

        function functioniseKeydownWindowListener(e) {}

        function functioniseKeyupWindowListener(e) {
            if (!WS.on) return;
        }

        function functioniseKeydownListener(e) {}

        function functioniseKeyupListener(e) {
            WS.hoverOnToSend = '';
            if (!WS.on) return;
            if (WU.hasCapturedEvent('keyup', e.timeStamp)) return;
            WU.setEvent('keyup', e.timeStamp);
            if (e.keyCode != 13) {
                if (e.target.tagName.toLowerCase() == "body") return;
                if (zQuery(e.target).attr("type") == "checkbox") return;
                if (e.target.tagName.toLowerCase() == "select") return;
            }
            if (e.keyCode === 13) {
                if (e.target.tagName.toLowerCase() != 'html' && e.target.tagName.toLowerCase() != 'textarea') {
                    if ((e.timeStamp == WS.enterToSend.timestamp || e.timeStamp == WS.lastEnterToSend.timestamp) && e.timeStamp > 0) return;
                    if (WU.isSuppressedElement(e.target)) return;
                    var value = WS.targetElement(e.target, "enter", e.timeStamp);
                    WS.enterToSend = value;
                    WS.getRecordingData();
                    return;
                }
            }
            if (e.timeStamp == WS.lastInputToSend.timestamp || e.timeStamp == WS.inputToSend.timestamp) return;
            if (typeof zQuery(e.target).attr('readonly') != 'undefined' || zQuery(e.target).prop('disabled')) return;
            clearTimeout(WS.recordTimer);
            if (WU.isSuppressedElement(e.target)) return;
            value = WS.targetElement(e.target, "input", e.timeStamp);
            var eValue = zQuery(e.target).val().trim();
            WS.inputToSend = value;
            WS.getRecordingData();
        }

        function functioniseBlurListener(e) {}

        function functioniseChangeListener(e) {
            WS.hoverOnToSend = '';
            if (!WS.on) return;
            if (e.target.tagName.toLowerCase() != "select" && e.target.tagName.toLowerCase() != "input")
                return;
            if (typeof zQuery(e.target).attr('readonly') != 'undefined' || zQuery(e.target).prop('disabled')) return;
            if (WU.isSuppressedElement(e.target)) return;
            if (e.target.tagName.toLowerCase() == "select") {
                if (!zQuery(e.target).is(":focus")) return;
                value = WS.targetElement(e.target, "select", e.timeStamp);
                if (e.timeStamp == WS.lastSelectToSend.timestamp) return;
                value = WS.targetElement(e.target, "select", e.timeStamp);
                WS.lastSelectToSend = value;
            } else {
                if (e.timeStamp == WS.lastInputToSend.timestamp) return;
                value = WS.targetElement(e.target, "input", e.timeStamp);
                WS.lastInputToSend = value;
            }
            WS.getRecordingData(value, false);
        }

        function functioniseMutationObserve() {}
    }

    class PIIFilter {
        constructor(){}

        filterEmails(text) {
            //console.log('filter email')
            const re = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
            return String(text).replace(re, "$$PII_email$$")
        }

        filterSSNs(text) {
            const re = RegExp("^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$");
            return String(text).replace(re, "$$SSN$$");
        }

        filterDriverLicence(text) {
            // Decide to use this structure with variables instead of arrays so we know what each regex is doing.
            var mask = "$$DRIVER_LICENCE";
            var dict = {};
            dict.oneToSevenNumeric = /^[0-9]{1,7}$/;
            dict.oneAlphaPlusSeven = /^.[0-9]{7}$/;
            dict.twoAlpha = /(.*[A-Za-z]){2}/;
            dict.alphaPlusSixNumeric = /(.*[0-9]){6}$/;
            dict.threeToFiveNumeric = /(.*[0-9]){3,5}$/;
            dict.fiveToNineNumeric = /(.*[0-9]){5,9}/;
            dict.sixNumeric = /^[0-9]{6}$/;
            dict.sevenNumeric = /^[0-9]{7}$/;
            dict.sevenToNineNumeric = /^[0-9]{7,9}$/;
            dict.eightAreNumbers = /(.*[0-9]){8}/;
            dict.nineNumeric = /^[0-9]{9}$/;
            dict.nineAlphaChars = /^[A-Za-z0-9]{9}$/;
            dict.tenNumeric = /^[0-9]{10}$/;
            dict.elevenNumeric = /^.[0-9]{11}$/;
            dict.twelveNumeric = /^.[0-9]{12}$/;
            dict.hPlusEight = /([H][0-9]{8})$/;
            dict.sevenPlusX = /([H][0-9]{7}X)$/;
            for (var key in dict) {
                if (String(text).replace(RegExp(dict[key]), mask) !== String(text)) {
                    return String(text).replace(RegExp(dict[key]), mask);
                }
            }
            return String(text)
        }

        filterCcards(text) {
            function luhn(ccardNumber) {
                var nCheck = 0;
                var bEven = false;
                ccardNumber = ccardNumber.replace(/\D/g, "");
                for (var n = ccardNumber.length - 1; n >= 0; n--) {
                    var cDigit = ccardNumber.charAt(n),
                        nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) nDigit -= 9;
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }
                console.log('cc')
                return (nCheck % 10) === 0;
            }
            text = String(text);
            var re = /\d{13,16}/g;
            var array1 = [];
            while ((array1 = re.exec(text)) !== null) {
                var number = array1[0];
                var idxStart = array1['index'];
                var idxEnd = re.lastIndex;
                if (luhn(number)) {
                    text = text.substr(0, idxStart) + "$$PII_ccard$$" + text.substr(idxEnd);
                }
            }
            return text;
        };

        filterPII(text) {
            var retval = ""
            for(var j=0; j < PIIJSON.PIIs.length; j++) {
                switch (PIIJSON.PIIs[j].item) {
                    case "SSN": {
                        retval = this.filterSSNs(text);
                    break;
                    }
                    case "DL": {
                        retval = this.filterDriverLicence(text);
                    break;
                    }
                    case "CC": {
                        retval = this.filterCcards(text);
                    break;
                    }
                    case "Email": {
                        retval = this.filterEmails(text);
                    break;
                    }
                }

            }
        }

    }

    class SiteStatistics {
        constructor(flag) {
          this.flag = flag;
          this.elementLimit = 25000;
          this.timeLimit = 25000; // ms
          this.warning = "";
          this.nodeId = 0;
          this.historyQueue = [];
          this.fifoQueue = [];
          this.parentNodesMovingToRoot = [];
          this.allNodes = [];
          this.newTree = [];
          this.traverseOutwardLimit = 1;
          this.boundingBoxPixelLimit = 100;
          this.shadowRootNodes = [];
          this.mlversion = "";
          this.PIIFilter = new PIIFilter();

          this.stats = {};
          this.allElements2 = document.body;
          if (this.allElements2 == null) {
            if (document.childElementCount > 0) {
              this.allElements2 = document.children[0];
            }
          }
        }

        setLimit(eLimit, tLimit) {
          this.elementLimit = eLimit;
          this.timeLimit = tLimit;
        }

        setAllElements(e) {
          this.allElements = e;
        }

        getAllElements() {
          return this.allElements;
        }

        getStats() {
          return this.stats;
        }

        getSelection2(element) {
          // DO NOT CORRECT THE SPELLING
          // IT IS MEANT TO BE THIS WAY
          if (document.readyState === "complete") {
            element.setAttribute("functi0nize-selected", true);
            this.nodeId = 0;
            const tmp = this.generateTree2(this.allElements2);
            element.setAttribute("functi0nize-selected", false);
            return tmp;
          } else {
            return "document not loaded completely";
          }
        }

        generateTree2(e) {
          const start = new Date().getTime();
          const out = {};
          try {
            out.comp = this.traverseNodes2(e, null, []);
          } catch (err) {
            console.log(err);
            console.log("Error collecting ML data");
          }

          out.url = encodeURI(document.URL);
          out.cookie = this.getCookieKeys(document.cookie);
          out.title = document.title;
          out.iw = window.innerWidth;
          out.ih = window.innerHeight;
          const elapsed = new Date().getTime() - start;
          console.log("Time to Extract: " + elapsed + "ms");
          return out;
        }

        parseToJson(data) {
          const start = new Date().getTime();

          // var parser = new DOMParser();
          // var str = data.xml.replace(/&nbsp;/g, " ");
          // str = this.cleanScripts(str);
          // var xmlDoc = parser.parseFromString(data.xml.replace(/&nbsp;/g, " "), "text/xml");
          // var json = this.generateTree(xmlDoc.childNodes);

          const json = {};
          json.nodes = [];
          json.tree = [];
          json.version = version;
          json.mlversion = this.mlversion;
          json.url = data.url;
          json.cookie = data.cookie;
          json.title = data.title;
          json.timestamp = new Date().getTime();

          // console.log(data.comp);
          if (data.comp.length > this.elementLimit) {
            this.warning =
              "Current elements count is " +
              data.comp.length +
              ", which is exceeding the limit of " +
              this.elementLimit;
            console.log(this.warning);
          }

          for (let i = 0; i < data.comp.length; i++) {
            const n = data.comp[i];
            const NT = n[2];
            if (NT === "1") {
              const node = {};
              const id = n[1];
              const parent = n[0];
              const LT = Math.round(n[3]);
              const TP = Math.round(n[4]);
              const WH = Math.round(n[5]);
              const HT = Math.round(n[6]);
              const DY = n[7];
              const BC = n[8];
              const CR = n[9];
              const ZI = n[10];
              const TN = n[11];
              const attributes = n[12];

              try {
                node.i = id;
                node.a = {};
                node.a.NT = NT;

                node.a.LT = "" + LT;
                node.a.TP = "" + TP;
                node.a.WH = "" + WH;
                node.a.HT = "" + HT;
                node.a.DY = "" + DY;
                node.a.BC = "" + BC;
                node.a.CR = "" + CR;
                node.a.ZI = "" + ZI;
                node.a.PV = this.calculatePV(data.iw, data.ih, LT, TP, WH, HT);
                node.a.TN = TN;

                for (const att in attributes) {
                  if (this.isFunctionizeAttribute(att, attributes[att])) {
                    continue;
                  }
                  // skip reserved attributes
                  if (
                    att === "top" ||
                    att === "bottom" ||
                    att === "right" ||
                    att === "left" ||
                    att === "height" ||
                    att === "width"
                  ) {
                    continue;
                  }
                  if (att === "style") {
                    const styleAttr = this.parseStyle(attributes[att]);
                    for (const s in styleAttr) {
                      node.a["ST." + s] = this.subRoutine5(styleAttr[s] + "");
                    }
                  } else if (att === "class") {
                    const classString = this.subRoutine6(
                      this.subRoutine5(attributes[att] + "")
                    );
                    node.a[this.attributeNameMap(att)] = classString;
                    // var classes = classString.split(" ");
                    // var classCount = 0;
                    // for(c in classes){
                    // node.a[this.attributeNameMap(att) + classCount] = classes[c];
                    // classCount++;
                    // }
                  } else {
                    node.a[this.attributeNameMap(att)] = this.subRoutine5(
                      attributes[att] + ""
                    );
                  }
                }

                json.nodes.push(node);

                let o = {};
                if (parent == null) {
                  o = {};
                  o.i = id;
                  json.tree.push(o);
                } else {
                  // console.log("parent " + parent);
                  const treeNode = this.findTreeNode(json.tree, parent);
                  // console.log(this.findTreeNode(json.tree, parent));
                  if (treeNode != null) {
                    // console.log("treenode" + treeNode);
                    if (treeNode.c !== undefined) {
                      o.i = id;
                      treeNode.c.push(o);
                    } else {
                      o.i = id;
                      const c = [];
                      c.push(o);
                      treeNode.c = c;
                    }
                  } else {
                    // console.log("treeNode null");
                  }
                }
              } catch (err) {
                console.log(err);
              }
            } else if (NT === "3") {
              const node = {};
              const id = n[1];
              const parent = n[0];
              const LT = Math.round(n[3]);
              const TP = Math.round(n[4]);
              const WH = Math.round(n[5]);
              const HT = Math.round(n[6]);
              const TV = n[7];//this.filterPII.filterPII(n[7]);

              try {
                node.i = id;
                node.a = {};
                node.a.NT = NT;

                node.a.LT = "" + LT;
                node.a.TP = "" + TP;
                node.a.WH = "" + WH;
                node.a.HT = "" + HT;
                node.a.PV = this.calculatePV(data.iw, data.ih, LT, TP, WH, HT);
                node.a.TV = this.subRoutine5(TV + "");

                json.nodes.push(node);

                const treeNode = this.findTreeNode(json.tree, parent);
                if (treeNode != null) {
                  const o = {};
                  if (treeNode.c !== undefined) {
                    o.i = id;
                    treeNode.c.push(o);
                  } else {
                    o.i = id;
                    const c = [];
                    c.push(o);
                    treeNode.c = c;
                  }
                }
              } catch (err) {
                console.log(err);
              }
            }

            // DEBUG
            // if(json.nodes.length % 1000 == 0) {
            //    console.log("Total nodes is " + data.comp.length + ", Done parsing: " + Math.floor(json.nodes.length / 1000) * 1000);
            // }

            if (json.nodes.length >= this.elementLimit) {
              console.log(
                "now is: " +
                  json.nodes.length +
                  " exceeding element limit " +
                  this.elementLimit
              );
              return json;
            }

            const timeTakenSoFar = new Date().getTime() - start;
            if (timeTakenSoFar > this.timeLimit) {
              this.warning =
                "Current JS execution is exceeding time limit of " + this.timeLimit;
              console.log(this.warning);
              return json;
            }
          }

          const elapsed = new Date().getTime() - start;
          console.log("Time to Parse: " + elapsed + "ms");
          return json;
        }

        xml2Str(xmlNode) {
          try {
            // Gecko- and Webkit-based browsers (Firefox, Chrome), Opera.
            return new XMLSerializer().serializeToString(xmlNode);
          } catch (e) {
            try {
              // Internet Explorer.
              return xmlNode.xml;
            } catch (e) {
              // Other browsers without XML Serializer
            }
          }
          return false;
        }

        calculatePV(iw, ih, x, y, w, h) {
          let vis = "1";
          if (x >= iw) {
            vis = "0";
          }
          if (y >= ih) {
            vis = "0";
          }
          if (x + w <= 0) {
            vis = "0";
          }
          if (y + h <= 0) {
            vis = "0";
          }
          return vis;
        }

        findTreeNode(tree, search) {
          // console.log("tree size " + tree.length);
          let output = null;
          for (let j = 0; j < tree.length; j++) {
            const id = tree[j].i;
            // console.log("id " + id);
            if (id === search) {
              // console.log("found " + JSON.stringify(tree[j]));
              output = tree[j];
              j = tree.length;
            } else {
              if (tree[j].c !== undefined) {
                const out = this.findTreeNode(tree[j].c, search);
                if (out != null) {
                  output = out;
                  j = tree.length;
                }
              }
            }
          }
          return output;
        }

        cleanScripts(xml) {
          while (xml.indexOf("<script") >= 0) {
            const i = xml.indexOf("<script");
            const j = xml.indexOf("/script>", i);
            xml = xml.slice(0, i) + xml.slice(j + 8, xml.length);
          }
          return xml;
        }

        getParentFromNode(node, defaultParentId) {
          let parent;
          try {
            if (node.parentNode.nodeType === 11) {
              // if parentNode is document-fragment, parentElement will be null
              // thus we need to use host
              parent = node.parentNode.host.getAttribute("functionizeID");
            } else if (node.parentElement) {
              parent = node.parentElement.getAttribute("functionizeID");
            } else {
              parent = defaultParentId;
            }
          } catch (e) {
            // fallback
            console.log(e);
            parent = defaultParentId;
          }
          return parent;
        }

        traverseNodes2(start, parentId, nodes) {
          let node;
          const walker = document.createTreeWalker(start, 5, null, false);
          const range = document.createRange();
          while ((node = walker.nextNode()) != null) {
            const nt = node.nodeType;
            // if match skip criteria, skip this node
            if (this.skipNodeCriteria(node)) {
              continue;
            }
            if (nt === 1) {
              const tn = node.tagName;
            //   if (tn === "INPUT") {
            //     node.value = WS.filterPII(node.value);
            //   }
              if (tn !== "SCRIPT" && tn !== "STYLE") {
                node.setAttribute("functionizeID", this.nodeId);

                let box = node.getBoundingClientRect();
                const cs = window.getComputedStyle(node, null);
                const attr = node.attributes;
                const a = {};
                for (let i = 0; i < attr.length; i++) {
                  a[attr[i].name] = attr[i].value;
                }

                // handle shadowDOM parent
                const parent = this.getParentFromNode(node, parentId);

                // handle display:contents, using child rect, else fallback to parent
                if (cs.getPropertyValue("display") === "contents") {
                  // access children node from node
                  let referenceNode = node.firstChild;

                  // handle more edge cases
                  if (referenceNode == null) {
                    if (node.tagName === "SLOT") {
                      // handle node is <slot>
                      const referenceNodes = node.assignedElements();
                      if (referenceNodes != null && referenceNodes.length > 0) {
                        referenceNode = referenceNodes[0];
                      } else {
                        referenceNode = node.getRootNode().host;
                      }
                    } else if (node.getRootNode().nodeType === 11) {
                      // handle if the node is inside shadowDOM but not <slot>
                      referenceNode = node.getRootNode().host;
                    } else {
                      // fallback to parent
                      referenceNode = node.parentNode;
                    }
                  }

                  if (referenceNode != null) {
                    range.selectNodeContents(referenceNode);
                    const rects = range.getClientRects();
                    if (rects.length > 0) {
                      box = rects[0];
                    }
                  }
                }

                nodes.push([
                  parent,
                  this.nodeId + "",
                  "1",
                  box.left,
                  box.top,
                  box.width,
                  box.height,
                  cs.getPropertyValue("display"),
                  cs.getPropertyValue("background-color"),
                  cs.getPropertyValue("color"),
                  cs.getPropertyValue("z-index"),
                  tn,
                  a,
                ]);
                this.nodeId = this.nodeId + 1;

                // handle shadowDOM with open mode
                if (node.shadowRoot !== undefined && node.shadowRoot != null) {
                  nodes = this.traverseNodes2(
                    node.shadowRoot,
                    this.nodeId - 1,
                    nodes
                  );
                }
              } else {
                // handle scripts and styles
              }
            } else if (nt === 3) {
              range.selectNodeContents(node);
              const rects = range.getClientRects();
              if (rects.length > 0) {
                const parent = this.getParentFromNode(node, parentId);
                nodes.push([
                  parent,
                  this.nodeId + "",
                  "3",
                  rects[0].left,
                  rects[0].top,
                  rects[0].width,
                  rects[0].height,
                  node.data,
                ]);
                this.nodeId++;
              } else {
                // text nodes with no content
              }
            } else {
              // node type is not 1 and 3
            }
          }

          return nodes;
        }

        parseStyle(cssText) {
          const obj = {};
          const str = cssText.match(/([^:]+: *[^;]+); */g);
          if (str !== undefined && str != null) {
            let tem;
            let k = 0;
            const L = str.length;
            while (k < L) {
              tem = str[k++].split(/: */);
              obj[tem[0]] = tem[1];
            }
          }
          return obj;
        }

        isFunctionizeAttribute(name, value) {
          if (name.indexOf("functionise") > -1 || name.indexOf("functionize") > -1) {
            return true;
          }
          if (
            value.indexOf("functionise") > -1 ||
            value.indexOf("functionize") > -1
          ) {
            return true;
          }
          return false;
        }

        findElementByFunctionizeId(start, functionizeID) {
          let node;
          const walker = document.createTreeWalker(start, 5, null, false);
          while ((node = walker.nextNode()) != null) {
            const nt = node.nodeType;
            if (nt === 1) {
              const tn = node.tagName;
              if (tn !== "SCRIPT" && tn !== "STYLE") {
                if (node.shadowRoot !== undefined && node.shadowRoot != null) {
                  node = this.findElementByFunctionizeId(
                    node.shadowRoot,
                    functionizeID
                  );
                }

                if (node != null) {
                  const id = node.getAttribute("functionizeID");
                  // mlengine pass in functionizeID in integer format, getAttribute will return string format
                  // thus we need to convert functionizeID to string before compare
                  if (id === functionizeID + "") {
                    break;
                  }
                }
              }
            }
          }
          return node;
        }

        removeElementXX(start) {
          let node;
          const walker = document.createTreeWalker(start, 5, null, false);
          while ((node = walker.nextNode()) != null) {
            const nt = node.nodeType;
            if (nt === 1) {
              const tn = node.tagName;
              if (tn !== "SCRIPT" && tn !== "STYLE") {
                if (node.shadowRoot !== undefined && node.shadowRoot != null) {
                  this.removeElementXX(node.shadowRoot);
                }
                try {
                  node.removeAttribute("functi0nize-selected");
                } catch (e) {}
              }
            }
          }
          return node;
        }

        // remove \n and space in front and back
        subRoutine5(str) {
          let o = "";
          o = str.replace(/\n/g, "");
          o = o.replace(/\t/g, "");
          while (o.charAt(0) === " ") {
            o = o.substring(1, o.length);
          }
          while (o.charAt(o.length - 1) === " ") {
            o = o.substring(0, o.length - 1);
          }
          // replace double spaces
          let done = false;
          while (done === false) {
            const temp = o.replace(/ {2}/g, " ");
            if (temp.length === o.length) {
              done = true;
            }
            o = temp;
          }
          // hash value if longer that 256
          if (o.length > 256) {
            o = "hash" + this.hashCode(o);
          }
          return o;
        }

        // split string and sort alphabetical
        subRoutine6(str) {
          let out = "";
          const ar = [];
          const spt = str.split(" ");
          for (let i = 0; i < spt.length; i++) {
            if (spt[i] !== "") {
              ar.push(spt[i]);
            }
          }
          ar.sort();
          for (let i = 0; i < ar.length; i++) {
            out += ar[i] + " ";
          }
          out = out.substring(0, out.length - 1);
          return out;
        }

        // remove all spaces
        subRoutine7(str) {
          let o = "";
          o = str.replace(/ /g, "");
          return o;
        }

        hashCode(str) {
          let hash = 0;
          let i;
          let chr;
          if (str.length === 0) return hash;
          for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
          }
          return hash;
        }

        attributeNameMap(str) {
          if (str === "nodeType") {
            return "NT";
          } else if (str === "childCount") {
            return "CC";
          } else if (str === "tagName") {
            return "TN";
          } else if (str === "textValue") {
            return "TV";
          } else if (str === "href") {
            return "HF";
          } else if (str === "src") {
            return "SC";
          } else if (str === "class") {
            return "CL";
          } else if (str === "type") {
            return "TY";
          } else if (str === "style") {
            return "ST";
          } else if (str === "left") {
            return "LT";
          } else if (str === "right") {
            return "RT";
          } else if (str === "top") {
            return "TP";
          } else if (str === "bottom") {
            return "BM";
          } else if (str === "height") {
            return "HT";
          } else if (str === "width") {
            return "WH";
          } else if (str === "color") {
            return "CR";
          } else if (str === "backgroundColor") {
            return "BC";
          } else if (str === "display") {
            return "DY";
          } else if (str === "fill") {
            return "FL";
          } else if (str === "title") {
            return "TT";
          } else if (str === "onclick") {
            return "OC";
          } else if (str === "alt") {
            return "AT";
          } else if (str === "viewBox") {
            return "VB";
          } else if (str === "hidden") {
            return "HD";
          } else if (str === "aria-hidden") {
            return "AH";
          } else if (str === "placeholder") {
            return "PH";
          } else if (str === "pixelVisible") {
            return "PV";
          } else if (str === "functi0nize-selected") {
            return "XX";
          } else if (str === "z-index") {
            return "ZI";
          } else {
            return str;
          }
        }

        reversedAttributeNameMap(str) {
          if (str === "NT") {
            return "nodeType";
          } else if (str === "CC") {
            return "childCount";
          } else if (str === "TN") {
            return "tagName";
          } else if (str === "TV") {
            return "textValue";
          } else if (str === "HF") {
            return "href";
          } else if (str === "SC") {
            return "src";
          } else if (str === "CL") {
            return "class";
          } else if (str === "TY") {
            return "type";
          } else if (str === "ST") {
            return "style";
          } else if (str === "LT") {
            return "left";
          } else if (str === "RT") {
            return "right";
          } else if (str === "TP") {
            return "top";
          } else if (str === "BM") {
            return "bottom";
          } else if (str === "HT") {
            return "height";
          } else if (str === "WH") {
            return "width";
          } else if (str === "CR") {
            return "color";
          } else if (str === "BC") {
            return "backgroundColor";
          } else if (str === "DY") {
            return "display";
          } else if (str === "FL") {
            return "fill";
          } else if (str === "TT") {
            return "title";
          } else if (str === "OC") {
            return "onclick";
          } else if (str === "AT") {
            return "alt";
          } else if (str === "VB") {
            return "viewBox";
          } else if (str === "HD") {
            return "hidden";
          } else if (str === "AH") {
            return "aria-hidden";
          } else if (str === "PH") {
            return "placeholder";
          } else if (str === "PV") {
            return "pixelVisible";
          } else if (str === "XX") {
            return "functi0nize-selected";
          } else if (str === "ZI") {
            return "z-index";
          } else {
            return str;
          }
        }

        skipNodeCriteria(o) {
          let skip = false;
          if (o.nodeType === "3") {
            let text = this.subRoutine5(o.data + "");
            // remove all whitespace character
            text = text.replace(/\s/g, "");
            // after all whitespace being removed, if empty means skip
            if (text === "") {
              skip = true;
            }
          }
          return skip;
        }

        getCookieKeys(cookie) {
          try {
            if (cookie == null || cookie === undefined || cookie === "") {
              return [];
            }

            const keys = [];
            const cookieKeyValueList = cookie.replace(/ /g, "").split(";");
            for (const kv of cookieKeyValueList) {
              keys.push(kv.split("=")[0]);
            }
            return keys;
          } catch (e) {
            console.log(e);
            return [];
          }
        }

        /// /////////////////////////////////////////////////////////////////
        // THIS IS FOR ALTERNATIVE TRAVERSE ////////////////////////////////

        getSelection3(element) {
          // DO NOT CORRECT THE SPELLING
          // IT IS MEANT TO BE THIS WAY
          if (document.readyState === "complete") {
            element.setAttribute("functi0nize-selected", true);
            this.nodeId = 0;
            const tmp = this.generateTree3(element);
            element.setAttribute("functi0nize-selected", false);
            return tmp;
          } else {
            return "document not loaded completely";
          }
        }

        generateTree3(e) {
          const start = new Date().getTime();
          const out = {};
          try {
            let similarNodes = [];
            if (e == null || e.nodeType === undefined) {
              // this means that e is not node element
              similarNodes = this.getSimilarNodesFromAttributes(e);
            } else {
              similarNodes = this.getSimilarNodes(e);
            }

            console.log("Number of similarNodes:" + similarNodes.length);
            // this.traverseFromSelectedNode(similarNodes);
            this.traverseFromSimilarNodes(similarNodes);
            this.buildSmallTree();
            out.comp = this.allNodes;
          } catch (err) {
            console.log(err);
            console.log("Error collecting ML data");
          }

          out.url = encodeURI(document.URL);
          out.cookie = this.getCookieKeys(document.cookie);
          out.title = document.title;
          out.iw = window.innerWidth;
          out.ih = window.innerHeight;
          const elapsed = new Date().getTime() - start;
          console.log("Smart Traversal Time to Extract: " + elapsed + "ms");
          return out;
        }

        /**
         * PREREQUISITE
         * Collect all the shadowRoot in the DOM, so we only need to do once
         * This needs to be ran once the document loaded
         * This can improve performance, as we dont have to look for shadowRoot in future operations
         */
        collectShadowNodes(start) {
          let node;
          const walker = document.createTreeWalker(
            start,
            NodeFilter.SHOW_ELEMENT,
            this.ignoreFilter,
            false
          );
          while ((node = walker.nextNode()) != null) {
            if (node.shadowRoot !== undefined && node.shadowRoot != null) {
              this.shadowRootNodes.push(node.shadowRoot);
              // check if there is nested shadowRoot (valid for shadow DOM v1)
              this.collectShadowNodes(node.shadowRoot);
            }
          }
          console.log(
            "collected " + this.shadowRootNodes.length + " shadowRoot so far...."
          );
        }

        /**
         * find elements that matches attributeString, including inside shadow DOM
         * this will fail if the attributeString is not valid css selector
         */
        querySelectorAll(attributeString) {
          let foundElements = [];
          try {
            // query in existing DOM
            // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/
            foundElements = foundElements.concat(
              Array.prototype.slice.call(document.querySelectorAll(attributeString))
            );
            // query in all shadow roots
            if (this.shadowRootNodes.length > 0) {
              console.log(
                "shadow root count in this DOM: " + this.shadowRootNodes.length
              );
              for (const trackedShadowRoot of this.shadowRootNodes) {
                // https://salesforce.stackexchange.com/questions/288602/jest-test-element-shadowroot-queryselector-not-retrieving-element-when-given
                const shadowElements = trackedShadowRoot.querySelectorAll(
                  attributeString
                );
                if (shadowElements.length !== 0) {
                  foundElements = foundElements.concat(
                    Array.prototype.slice.call(shadowElements)
                  );
                }
              }
            }
          } catch (e) {
            // graceful fail
            console.log(e);
          }
          console.log("Found elements: " + foundElements.length);
          return foundElements;
        }

        /**
         * pass attributes in key value format to find similar nodes in document
         * it should be in the format of:
         *         { NT: "1", LT: '1', TP: '1', WH: '1'... }
         *
         * returns array of Node
         */
        getSimilarNodesFromAttributes(attributesObj) {
          const startTime = new Date().getTime();
          let similarNodes = [];

          // TODO: add random nodes from the tree (for extra info), must limit to a number

          // remove PV
          const attributesToRemove = ["PV"];
          for (const attr of attributesToRemove) {
            delete attributesObj[attr];
          }

          // NT 1 = DY, BC, CR ...
          if (attributesObj.NT === "1") {
            // ignore TN because this will cause a lot of nodes being returned
            delete attributesObj.TN;

            const elementTree = document.createTreeWalker(
              document,
              NodeFilter.SHOW_ELEMENT
            );
            similarNodes = similarNodes.concat(
              this.getSimilarNodesWithNodeTypeOne(elementTree, attributesObj)
            );
            if (this.shadowRootNodes.length > 0) {
              for (const shadowRoot of this.shadowRootNodes) {
                const shadowTree = document.createTreeWalker(
                  shadowRoot,
                  NodeFilter.SHOW_ELEMENT
                );
                similarNodes = similarNodes.concat(
                  this.getSimilarNodesWithNodeTypeOne(shadowTree, attributesObj)
                );
              }
            }
          }

          // NT 3 = TV
          if (attributesObj.NT === "3") {
            const textTree = document.createTreeWalker(
              document,
              NodeFilter.SHOW_TEXT
            );
            similarNodes = similarNodes.concat(
              this.getSimilarNodesWithNodeTypeThree(textTree, attributesObj)
            );
            if (this.shadowRootNodes.length > 0) {
              for (const shadowRoot of this.shadowRootNodes) {
                const shadowTree = document.createTreeWalker(
                  shadowRoot,
                  NodeFilter.SHOW_TEXT
                );
                similarNodes = similarNodes.concat(
                  this.getSimilarNodesWithNodeTypeThree(shadowTree, attributesObj)
                );
              }
            }
          }

          // remove duplicates (if any)
          similarNodes = similarNodes.filter((item, index) => {
            return similarNodes.indexOf(item) === index;
          });
          console.log(
            "Time taken for getSimilarNodesFromAttributes: " +
              (new Date().getTime() - startTime) +
              "ms"
          );
          return similarNodes;
        }

        /**
         * This method is used to find similar nodes referring to nodeType 1 criteria
         * involves going through the treewalker once
         * tweak nodesLimit to limit the number of nodes for each attributes
         */
        getSimilarNodesWithNodeTypeOne(tree, attributesObj) {
          let node;
          const nodesLimit = 200;
          let similarNodesForNodeTypeOne = [];
          const nearbyNodesForNodeTypeOne = [];
          // keep track of nodes that matches the attribute in { attr: [node1, ..]} as trackedNodes
          const trackedNodes = { DY: [], BC: [], CR: [], TC: [] };
          for (const attrKey in attributesObj) {
            trackedNodes[attrKey] = [];
          }
          // remove the attribute from attributesObj and trackedNodes if the trackedNodes is exceeding 200
          // loop through trackedNodes and only pick up the array that is the smallest but more than 0
          while ((node = tree.nextNode()) != null) {
            const nodeCss = window.getComputedStyle(node, null);
            const nodeAttributes = node.attributes;

            // check if node is within bounding box
            if (
              this.isWithinBoundingBox(
                node.getBoundingClientRect(),
                (attributesObj.LT + attributesObj.WH) / 2,
                (attributesObj.TP + attributesObj.HT) / 2
              )
            ) {
              nearbyNodesForNodeTypeOne.push(node);
            }

            if (Object.prototype.hasOwnProperty.call(attributesObj, "DY")) {
              if (nodeCss.getPropertyValue("display") === attributesObj.DY) {
                trackedNodes.DY.push(node);
                if (trackedNodes.DY.length > nodesLimit) {
                  delete attributesObj.DY;
                  delete trackedNodes.DY;
                }
              }
            }
            if (Object.prototype.hasOwnProperty.call(attributesObj, "BC")) {
              if (nodeCss.getPropertyValue("background-color") === attributesObj.BC) {
                trackedNodes.BC.push(node);
                if (trackedNodes.BC.length > nodesLimit) {
                  delete attributesObj.BC;
                  delete trackedNodes.BC;
                }
              }
            }
            if (Object.prototype.hasOwnProperty.call(attributesObj, "CR")) {
              if (nodeCss.getPropertyValue("color") === attributesObj.CR) {
                trackedNodes.CR.push(node);
                if (trackedNodes.CR.length > nodesLimit) {
                  delete attributesObj.CR;
                  delete trackedNodes.CR;
                }
              }
            }
            if (Object.prototype.hasOwnProperty.call(attributesObj, "TC")) {
              if (node.text === attributesObj.TC) {
                trackedNodes.TC.push(node);
                if (trackedNodes.TC.length > nodesLimit) {
                  delete attributesObj.TC;
                  delete trackedNodes.TC;
                }
              }
            }

            // now only left the node.attributes in attributesObj
            for (const attributesKey in attributesObj) {
              const targetKey = this.reversedAttributeNameMap(attributesKey);
              // if fits one of the attributes, add to similarNodes, then move on
              if (nodeAttributes[targetKey] !== undefined) {
                if (
                  nodeAttributes[targetKey].value === attributesObj[attributesKey]
                ) {
                  trackedNodes[attributesKey].push(node);
                  // https://stackoverflow.com/questions/3463048/is-it-safe-to-delete-an-object-property-while-iterating-over-them
                  if (trackedNodes[attributesKey].length > nodesLimit) {
                    delete attributesObj[attributesKey];
                    delete trackedNodes[attributesKey];
                  }
                }
              }
            }
          }

          let chosenAttribute;
          for (const key in trackedNodes) {
            if (similarNodesForNodeTypeOne.length === 0) {
              similarNodesForNodeTypeOne = trackedNodes[key];
              chosenAttribute = key;
            } else if (
              trackedNodes[key].length > 1 &&
              trackedNodes[key].length < similarNodesForNodeTypeOne.length
            ) {
              similarNodesForNodeTypeOne = trackedNodes[key];
              chosenAttribute = key;
            }
          }
          if (similarNodesForNodeTypeOne.length > 0) {
            console.log("Chosen attribute for similar nodes: " + chosenAttribute);
          } else {
            console.log("Not able to find similar nodes");
          }
          console.log("Nearby node found: " + nearbyNodesForNodeTypeOne.length);

          return similarNodesForNodeTypeOne.concat(nearbyNodesForNodeTypeOne);
        }

        /**
         * This method is used to find similar nodes referring to nodeType 3 criteria
         */
        getSimilarNodesWithNodeTypeThree(tree, attributesObj) {
          let node;
          const similarNodesForNodeTypeThree = [];
          const nearbyNodesForNodeTypeThree = [];
          const docRange = document.createRange();
          while ((node = tree.nextNode()) != null) {
            // check if node is within bounding box
            docRange.selectNodeContents(node);
            const rectsTypeThree = docRange.getClientRects();
            if (
              rectsTypeThree != null &&
              rectsTypeThree !== undefined &&
              rectsTypeThree.length !== 0
            ) {
              if (
                this.isWithinBoundingBox(
                  rectsTypeThree[0],
                  (attributesObj.LT + attributesObj.WH) / 2,
                  (attributesObj.TP + attributesObj.HT) / 2
                )
              ) {
                nearbyNodesForNodeTypeThree.push(node);
              }
            }

            if (node.data === attributesObj.TV) {
              similarNodesForNodeTypeThree.push(node);
            }
          }

          console.log("Nearby node found: " + nearbyNodesForNodeTypeThree.length);
          return similarNodesForNodeTypeThree.concat(nearbyNodesForNodeTypeThree);
        }

        /**
         * Check if nodeBox is within the x and y box
         */
        isWithinBoundingBox(nodeBox, targetX, targetY) {
          const nodeCoordinates = [
            [nodeBox.left, nodeBox.top],
            [nodeBox.right, nodeBox.top],
            [nodeBox.left, nodeBox.bottom],
            [nodeBox.right, nodeBox.bottom],
          ];
          // console.log(nodeCoordinates + " | " + targetX + "|" + targetY);
          for (const coordinate of nodeCoordinates) {
            if (
              coordinate[0] >= Math.max(0, targetX - this.boundingBoxPixelLimit) &&
              coordinate[0] <= targetX + this.boundingBoxPixelLimit &&
              coordinate[1] >= Math.max(0, targetY - this.boundingBoxPixelLimit) &&
              coordinate[1] <= targetY + this.boundingBoxPixelLimit
            ) {
              return true;
            }
          }
          return false;
        }

        /**
         * Handle box rect for nodeType 1
         */
        getBoxRect(selected) {
          const range = document.createRange();
          const cssStyle = window.getComputedStyle(selected, null);
          // handle display:contents, using child rect, else fallback to parent
          if (cssStyle.getPropertyValue("display") === "contents") {
            // access children node from node
            let referenceNode = selected.firstChild;

            // handle more edge cases
            if (referenceNode == null) {
              if (selected.tagName === "SLOT") {
                // handle node is <slot>
                const referenceNodes = selected.assignedElements();
                if (referenceNodes != null && referenceNodes.length > 0) {
                  referenceNode = referenceNodes[0];
                } else {
                  referenceNode = selected.getRootNode().host;
                }
              } else if (selected.getRootNode().nodeType === 11) {
                // handle if the node is inside shadowDOM but not <slot>
                referenceNode = selected.getRootNode().host;
              } else {
                // fallback to parent
                referenceNode = selected.parentNode;
              }
            }

            if (referenceNode != null) {
              range.selectNodeContents(referenceNode);
              const rects = range.getClientRects();
              if (rects.length > 0) {
                return rects[0];
              }
            }
          }
          return selected.getBoundingClientRect();
        }

        /**
         * Find similar nodes using selected Element
         */
        getSimilarNodes(selected) {
          const criteria = {};
          criteria.NT = selected.nodeType + "";
          if (selected.nodeType === 1) {
            criteria.TN = selected.tagName;

            // selected node normally won't pick nodeType 3, so we need to get text
            criteria.TC = selected.text;

            // Get the nodes attributes
            const attributes = selected.attributes;
            for (let i = 0; i < attributes.length; i++) {
              criteria[this.attributeNameMap(attributes[i].name)] =
                attributes[i].value;
            }
          }

          if (selected.nodeType === 3) {
            criteria.TV = selected.data;
          }

          // Get the CSS properties tied to the element
          const cssStyle = window.getComputedStyle(selected, null);
          criteria.DY = cssStyle.getPropertyValue("display");
          criteria.BC = cssStyle.getPropertyValue("background-color");
          criteria.CR = cssStyle.getPropertyValue("color");

          // Get the bounding box data tied to the element
          if (selected.nodeType === 1) {
            const box = this.getBoxRect(selected);
            // console.log(box);
            criteria.LT = box.left;
            criteria.TP = box.top;
            criteria.WH = box.width;
            criteria.HT = box.height;
          } else if (selected.nodeType === 3) {
            const range = document.createRange();
            range.selectNodeContents(selected);
            const rects = range.getClientRects();
            // console.log(rects);
            if (rects == null || rects === undefined || rects.length === 0) {
              criteria.LT = 0;
              criteria.TP = 0;
              criteria.WH = 0;
              criteria.HT = 0;
            } else {
              criteria.LT = rects[0].left;
              criteria.TP = rects[0].top;
              criteria.WH = rects[0].width;
              criteria.HT = rects[0].height;
            }
          }

          const similarNodes = this.getSimilarNodesFromAttributes(criteria);
          if (similarNodes.length === 0) {
            similarNodes.push(selected);
          }
          return similarNodes;
        }

        /*
         * The root node is at the last element of this.parentNodesMovingToRoot
         */
        buildSmallTree() {
          if (this.parentNodesMovingToRoot.length === 0) {
            return "Not able to buildSmallTree because missing parentNodes";
          }

          // starting from root node, traverse down the tree
          // if node matches what is in historyQueue, add to the tree
          // continue to traverse down until cannot traverse anymore
          // the root node is at the end of the parentNodesMovingToRoot
          const rootNode = this.parentNodesMovingToRoot[
            this.parentNodesMovingToRoot.length - 1
          ];
          this.traverseForNewTree(rootNode, this.allNodes, this.newTree);
          return this.newTree;
        }

        /**
         * Build tree and node records
         * starting from root node, traverse down until there is no more children
         */
        traverseForNewTree(start, nodes, tree) {
          // 1. if start is null return tree back
          if (
            start == null ||
            start === undefined ||
            start.tagName === "SCRIPT" ||
            start.tagName === "STYLE"
          ) {
            return tree;
          }

          // 2. Add current node to nodes record
          if (start.nodeType === 1 || start.nodeType === 3) {
            nodes.push(this.computeNodeRecord(start));
          }
          // 3. if current node does not have children, add current node to tree and return
          if (start.childNodes.length === 0) {
            // console.log("dont have children, node: " + start);
            if (start.nodeType === 1) {
              start.setAttribute("functionizeID", this.nodeId);
            }
            tree.push({ i: this.nodeId });
            this.nodeId++;
            return tree;
          }

          // 4. if there is children in current node, repeat this method with children
          const childNodes = start.childNodes;
          const selectedChildSubTree = [];
          const currentNodeId = this.nodeId;
          if (start.nodeType === 1) {
            start.setAttribute("functionizeID", currentNodeId);
          }
          this.nodeId++;
          for (let i = 0; i < childNodes.length; i++) {
            if (this.isNodeFoundInNewTraverse(childNodes[i])) {
              const subtree = this.traverseForNewTree(childNodes[i], nodes, []);
              // prevent null from appearing in tree
              if (subtree != null && subtree !== undefined && subtree.length > 0) {
                selectedChildSubTree.push(subtree[0]);
              }
            }
          }
          // once finish traverse all the children, add those children to tree, then return
          if (selectedChildSubTree.length > 0) {
            tree.push({ i: currentNodeId, c: selectedChildSubTree });
          } else {
            tree.push({ i: currentNodeId });
          }
          return tree;
        }

        /**
         * Create node record in according to traverseNodes2 format
         */
        computeNodeRecord(node) {
          let parentID = null;
          try {
            parentID = this.getParentFromNode(node, null);
          } catch (e) {
            console.log("no parentID found for node: " + node);
            parentID = null;
          }

          const nodeType = node.nodeType;
          if (nodeType === 1) {
            const tn = node.tagName;
            const box = this.getBoxRect(node);
            const cs = window.getComputedStyle(node, null);
            const attr = node.attributes;
            const a = {};
            for (let i = 0; i < attr.length; i++) {
              a[attr[i].name] = attr[i].value;
            }

            return [
              parentID,
              this.nodeId + "",
              nodeType + "",
              box.left,
              box.top,
              box.width,
              box.height,
              cs.getPropertyValue("display"),
              cs.getPropertyValue("background-color"),
              cs.getPropertyValue("color"),
              cs.getPropertyValue("z-index"),
              tn,
              a,
            ];
          } else if (nodeType === 3) {
            const range = document.createRange();
            range.selectNodeContents(node);
            const rects = range.getClientRects();
            // if rects is empty, set all to 0
            if (rects == null || rects === undefined || rects.length === 0) {
              return [
                parentID,
                this.nodeId + "",
                nodeType + "",
                0,
                0,
                0,
                0,
                node.data,
              ];
            } else {
              return [
                parentID,
                this.nodeId + "",
                nodeType + "",
                rects[0].left,
                rects[0].top,
                rects[0].width,
                rects[0].height,
                node.data,
              ];
            }
          }
        }

        /**
         * Check if the node is part of the traversed nodes
         */
        isNodeFoundInNewTraverse(node) {
          return this.historyQueue.some((prevNode) => prevNode === node);
        }

        /*
         * This is based on the new traversal v2
         */
        traverseFromSimilarNodes(similarNodes) {
          const startTime = new Date().getTime();
          const parentNodesMap = {};
          this.traverseUpwardUntilRootFromNodes(similarNodes, parentNodesMap);

          // Generate the routes for each similar nodes up to root
          let rootNode;
          let allParentNodesFromSimilarNodes = [];
          for (const depth in parentNodesMap) {
            const route = parentNodesMap[depth];
            // all the root nodes should be the same
            if (rootNode != null) {
              if (rootNode !== route[route.length - 1]) {
                console.log("Root node is different among routes");
                console.log(parentNodesMap);
              }
            }
            rootNode = route[route.length - 1];

            // Add non-duplicate nodes to the front of the array
            // we retain the root node, which is the last node
            const uniqueNodes = route.filter(
              (x) => !allParentNodesFromSimilarNodes.includes(x)
            );
            allParentNodesFromSimilarNodes = uniqueNodes.concat(
              allParentNodesFromSimilarNodes
            );
          }
          this.parentNodesMovingToRoot = allParentNodesFromSimilarNodes;

          // Now we have the tree, we want to traverse outward
          let currentLevel = 0;
          this.fifoQueue = similarNodes.concat(allParentNodesFromSimilarNodes);
          while (currentLevel <= this.traverseOutwardLimit) {
            // traverse to children from nodes at existing level
            // pop the fifo until it emptied, to ensure we done with current level
            const childrenNodesFifo = [];
            while (this.fifoQueue.length > 0) {
              const currentNode = this.popFromFifoQueue();
              const childNodes = currentNode.childNodes;
              for (let i = 0; i < childNodes.length; i++) {
                childrenNodesFifo.push(childNodes[i]);
              }
            }
            // add child nodes to fifo for next level to traverse
            for (const childNode of childrenNodesFifo) {
              this.pushIntoFifoQueue(childNode);
            }
            currentLevel = currentLevel + 1;
          }

          console.log(
            "Complete traverseFromSimilarNodes in : " +
              (new Date().getTime() - startTime) +
              "ms"
          );
          return this.historyQueue;
        }

        /*
         * DEPRECATED - new traversal v1
         * start is the starting node (can be array of nodes or single node)
         * if hit the time limit, we return the nodes we reach so far
         * return: list of nodes that being traverse from XX
         */
        traverseFromSelectedNode(start) {
          const startTime = new Date().getTime();
          const traverseTimeLimit = 25000; // 25seconds
          let currentLevel = 0;
          let levelBetweenSelectedAndRoot = 0;
          this.parentNodesMovingToRoot = [];
          // if start is an array of nodes, we enqueue all of them
          // else we enqueue start as single node
          if (Array.isArray(start)) {
            levelBetweenSelectedAndRoot = this.traverseUpwardUntilRootFromNodes(
              start,
              {}
            );
            this.fifoQueue = this.fifoQueue.concat(start);
          } else {
            levelBetweenSelectedAndRoot = this.traverseUpwardUntilRoot(
              start,
              this.parentNodesMovingToRoot
            );
            this.fifoQueue.push(start);
          }

          while (this.fifoQueue.length !== 0) {
            if (new Date().getTime() - startTime > traverseTimeLimit) {
              console.log(
                "Traverse from selected node exceeding time limit of " +
                  traverseTimeLimit +
                  "ms"
              );
              console.log(
                "history size: " +
                  this.historyQueue.length +
                  ", fifo size: " +
                  this.fifoQueue.length +
                  ", current loop: " +
                  currentLevel
              );
              const mergedQueue = this.historyQueue.concat(
                this.parentNodesMovingToRoot
              );
              this.historyQueue = mergedQueue.filter((item, index) => {
                return mergedQueue.indexOf(item) === index;
              });
              return this.historyQueue;
            } else if (this.historyQueue.length > 5000) {
              console.log("Traverse from selected node exceeding size of 5000");
              console.log(
                "history size: " +
                  this.historyQueue.length +
                  ", fifo size: " +
                  this.fifoQueue.length +
                  ", current loop: " +
                  currentLevel
              );
              const mergedQueue = this.historyQueue.concat(
                this.parentNodesMovingToRoot
              );
              this.historyQueue = mergedQueue.filter((item, index) => {
                return mergedQueue.indexOf(item) === index;
              });
              return this.historyQueue;
            }
            const currentNode = this.popFromFifoQueue();

            // stop traverse outward if hit min level to reach root from selected
            if (currentLevel < levelBetweenSelectedAndRoot) {
              this.traverseOutwardFromNode(currentNode);
              // Get the current level by using the intersection of parent nodes from
              // traverseUpwardUntilRoot() and historyQueue
              const intersection = this.parentNodesMovingToRoot.filter((x) =>
                this.historyQueue.includes(x)
              );
              if (intersection != null) {
                currentLevel = intersection.length;
                // console.log("level limit is: " + levelBetweenSelectedAndRoot + "; current level is: " + currentLevel);
              }
            }
          }

          return this.historyQueue;
        }

        /*
         * BFS from start node
         */
        traverseOutwardFromNode(start) {
          if (start == null) {
            return;
          }

          this.pushIntoFifoQueue(start.parentNode);
          let sibling = start;
          while (sibling.nextSibling !== null) {
            // console.log("nextSibling: " + sibling.nextSibling);
            this.pushIntoFifoQueue(sibling.nextSibling);
            sibling = sibling.nextSibling;
          }
          const childNodes = start.childNodes;
          for (let i = 0; i < childNodes.length; i++) {
            this.pushIntoFifoQueue(childNodes[i]);
          }

          // handle shadow DOM
          if (start.shadowRoot !== undefined && start.shadowRoot != null) {
            this.pushIntoFifoQueue(start.shadowRoot);
          }
        }

        /*
         * pop the first node from FIFO queue
         * then push into history queue
         */
        popFromFifoQueue() {
          if (this.fifoQueue.length === 0) {
            return null;
          }
          const node = this.fifoQueue.shift();
          this.historyQueue.push(node);
          return node;
        }

        /*
         * push node into FIFO queue, after check on history queue to prevent double visit
         */
        pushIntoFifoQueue(node) {
          if (
            node !== null &&
            !this.historyQueue.some((prevNode) => prevNode === node) &&
            !this.fifoQueue.some((fifoNode) => fifoNode === node)
          ) {
            this.fifoQueue.push(node);
          }
        }

        /**
         * This is to handle traverse upward to root with multiple
         * nodes as starting point
         */
        traverseUpwardUntilRootFromNodes(nodes, parentNodesMap) {
          const startTime = new Date().getTime();
          // loop all the nodes and traverse traverse upward
          for (const node of nodes) {
            const parentNodesFromNode = [];
            const depth = this.traverseUpwardUntilRoot(node, parentNodesFromNode);
            parentNodesMap[depth] = parentNodesFromNode.slice();
          }
          // pick the routes that is the most depth
          let deepestRoute = 0;
          for (const depth in parentNodesMap) {
            if (depth > deepestRoute) {
              deepestRoute = depth;
            }
          }
          // set parentNodesMovingToRoot to the selected depth route
          this.parentNodesMovingToRoot = parentNodesMap[deepestRoute].slice();
          console.log(
            "Time taken for traverseUpwardUntilRootFromNodes: " +
              (new Date().getTime() - startTime) +
              "ms"
          );
          return deepestRoute;
        }

        /* traverse from XX node to root
         *   return: number of level to reach root
         */
        traverseUpwardUntilRoot(start, parentNodes) {
          let levelToReachRoot = 0;
          if (start == null) {
            return levelToReachRoot;
          }
          while (start.parentNode != null) {
            start = start.parentNode;
            parentNodes.push(start);
            levelToReachRoot = levelToReachRoot + 1;
          }
          // If start is shadow root, go to the host
          if (start.host != null && start.host !== undefined) {
            parentNodes.push(start);
            levelToReachRoot =
              levelToReachRoot +
              this.traverseUpwardUntilRoot(start.host, parentNodes);
          }
          return levelToReachRoot;
        }

        /*
         * check if the traverseFromSelectedNode is equal as the result from traverseNodes
         */
        isCompletedData(data) {
          if (data == null || data.comp == null) {
            return false;
          }
          return this.historyQueue.length === data.comp.length;
        }

        /// ///////////////////////////////////////////////////////////
    }
    (function(global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.html2canvas = factory());
    }(this, function() {
        'use strict';
        var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };

        function __awaiter(thisArg, _arguments, P, generator) {
            return new(P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : new P(function(resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                },
                f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
            }), g;

            function verb(n) {
                return function(v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {
                                value: op[1], done: false
                            };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }
        var Bounds = (function() {
            function Bounds(x, y, w, h) {
                this.left = x;
                this.top = y;
                this.width = w;
                this.height = h;
            }
            Bounds.prototype.add = function(x, y, w, h) {
                return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
            };
            Bounds.fromClientRect = function(clientRect) {
                return new Bounds(clientRect.left, clientRect.top, clientRect.width, clientRect.height);
            };
            return Bounds;
        }());
        var parseBounds = function(node) {
            return Bounds.fromClientRect(node.getBoundingClientRect());
        };
        var parseDocumentSize = function(document) {
            var body = document.body;
            var documentElement = document.documentElement;
            if (!body || !documentElement) {
                throw new Error("Unable to get document size");
            }
            var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
            var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
            return new Bounds(0, 0, width, height);
        };
        var toCodePoints = function(str) {
            var codePoints = [];
            var i = 0;
            var length = str.length;
            while (i < length) {
                var value = str.charCodeAt(i++);
                if (value >= 0xd800 && value <= 0xdbff && i < length) {
                    var extra = str.charCodeAt(i++);
                    if ((extra & 0xfc00) === 0xdc00) {
                        codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                    } else {
                        codePoints.push(value);
                        i--;
                    }
                } else {
                    codePoints.push(value);
                }
            }
            return codePoints;
        };
        var fromCodePoint = function() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            if (String.fromCodePoint) {
                return String.fromCodePoint.apply(String, codePoints);
            }
            var length = codePoints.length;
            if (!length) {
                return '';
            }
            var codeUnits = [];
            var index = -1;
            var result = '';
            while (++index < length) {
                var codePoint = codePoints[index];
                if (codePoint <= 0xffff) {
                    codeUnits.push(codePoint);
                } else {
                    codePoint -= 0x10000;
                    codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
                }
                if (index + 1 === length || codeUnits.length > 0x4000) {
                    result += String.fromCharCode.apply(String, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
            lookup[chars.charCodeAt(i)] = i;
        }
        var decode = function(base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length,
                i, p = 0,
                encoded1, encoded2, encoded3, encoded4;
            if (base64[base64.length - 1] === '=') {
                bufferLength--;
                if (base64[base64.length - 2] === '=') {
                    bufferLength--;
                }
            }
            var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
            var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
            for (i = 0; i < len; i += 4) {
                encoded1 = lookup[base64.charCodeAt(i)];
                encoded2 = lookup[base64.charCodeAt(i + 1)];
                encoded3 = lookup[base64.charCodeAt(i + 2)];
                encoded4 = lookup[base64.charCodeAt(i + 3)];
                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return buffer;
        };
        var polyUint16Array = function(buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 2) {
                bytes.push((buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };
        var polyUint32Array = function(buffer) {
            var length = buffer.length;
            var bytes = [];
            for (var i = 0; i < length; i += 4) {
                bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
            }
            return bytes;
        };
        var UTRIE2_SHIFT_2 = 5;
        var UTRIE2_SHIFT_1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT = 2;
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function(view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32 = function(view, start, end) {
            if (view.slice) {
                return view.slice(start, end);
            }
            return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64 = function(base64) {
            var buffer = decode(base64);
            var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
            var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
            var headerLength = 24;
            var index = slice16(view16, headerLength / 2, view32[4] / 2);
            var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
            return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = (function() {
            function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
                this.initialValue = initialValue;
                this.errorValue = errorValue;
                this.highStart = highStart;
                this.highValueIndex = highValueIndex;
                this.index = index;
                this.data = data;
            }
            Trie.prototype.get = function(codePoint) {
                var ix;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0xffff) {
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint < this.highStart) {
                        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                        ix = this.index[ix];
                        ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) {
                        return this.data[this.highValueIndex];
                    }
                }
                return this.errorValue;
            };
            return Trie;
        }());
        var base64 = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';
        var LETTER_NUMBER_MODIFIER = 50;
        var BK = 1;
        var CR = 2;
        var LF = 3;
        var CM = 4;
        var NL = 5;
        var WJ = 7;
        var ZW = 8;
        var GL = 9;
        var SP = 10;
        var ZWJ = 11;
        var B2 = 12;
        var BA = 13;
        var BB = 14;
        var HY = 15;
        var CB = 16;
        var CL = 17;
        var CP = 18;
        var EX = 19;
        var IN = 20;
        var NS = 21;
        var OP = 22;
        var QU = 23;
        var IS = 24;
        var NU = 25;
        var PO = 26;
        var PR = 27;
        var SY = 28;
        var AI = 29;
        var AL = 30;
        var CJ = 31;
        var EB = 32;
        var EM = 33;
        var H2 = 34;
        var H3 = 35;
        var HL = 36;
        var ID = 37;
        var JL = 38;
        var JV = 39;
        var JT = 40;
        var RI = 41;
        var SA = 42;
        var XX = 43;
        var BREAK_MANDATORY = '!';
        var BREAK_NOT_ALLOWED = '×';
        var BREAK_ALLOWED = '÷';
        var UnicodeTrie = createTrieFromBase64(base64);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR, LF, NL];
        var SPACE = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function(codePoints, lineBreak) {
            if (lineBreak === void 0) {
                lineBreak = 'strict';
            }
            var types = [];
            var indicies = [];
            var categories = [];
            codePoints.forEach(function(codePoint, index) {
                var classType = UnicodeTrie.get(codePoint);
                if (classType > LETTER_NUMBER_MODIFIER) {
                    categories.push(true);
                    classType -= LETTER_NUMBER_MODIFIER;
                } else {
                    categories.push(false);
                }
                if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                    if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                        indicies.push(index);
                        return types.push(CB);
                    }
                }
                if (classType === CM || classType === ZWJ) {
                    if (index === 0) {
                        indicies.push(index);
                        return types.push(AL);
                    }
                    var prev = types[index - 1];
                    if (LINE_BREAKS.indexOf(prev) === -1) {
                        indicies.push(indicies[index - 1]);
                        return types.push(prev);
                    }
                    indicies.push(index);
                    return types.push(AL);
                }
                indicies.push(index);
                if (classType === CJ) {
                    return types.push(lineBreak === 'strict' ? NS : ID);
                }
                if (classType === SA) {
                    return types.push(AL);
                }
                if (classType === AI) {
                    return types.push(AL);
                }
                if (classType === XX) {
                    if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                        return types.push(ID);
                    } else {
                        return types.push(AL);
                    }
                }
                types.push(classType);
            });
            return [indicies, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function(a, b, currentIndex, classTypes) {
            var current = classTypes[currentIndex];
            if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
                var i = currentIndex;
                while (i <= classTypes.length) {
                    i++;
                    var next = classTypes[i];
                    if (next === b) {
                        return true;
                    }
                    if (next !== SP) {
                        break;
                    }
                }
            }
            if (current === SP) {
                var i = currentIndex;
                while (i > 0) {
                    i--;
                    var prev = classTypes[i];
                    if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                        var n = currentIndex;
                        while (n <= classTypes.length) {
                            n++;
                            var next = classTypes[n];
                            if (next === b) {
                                return true;
                            }
                            if (next !== SP) {
                                break;
                            }
                        }
                    }
                    if (prev !== SP) {
                        break;
                    }
                }
            }
            return false;
        };
        var previousNonSpaceClassType = function(currentIndex, classTypes) {
            var i = currentIndex;
            while (i >= 0) {
                var type = classTypes[i];
                if (type === SP) {
                    i--;
                } else {
                    return type;
                }
            }
            return 0;
        };
        var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
            if (indicies[index] === 0) {
                return BREAK_NOT_ALLOWED;
            }
            var currentIndex = index - 1;
            if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
                return BREAK_NOT_ALLOWED;
            }
            var beforeIndex = currentIndex - 1;
            var afterIndex = currentIndex + 1;
            var current = classTypes[currentIndex];
            var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
            var next = classTypes[afterIndex];
            if (current === CR && next === LF) {
                return BREAK_NOT_ALLOWED;
            }
            if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
                return BREAK_MANDATORY;
            }
            if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if (SPACE.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
                return BREAK_ALLOWED;
            }
            if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === WJ || next === WJ) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === GL) {
                return BREAK_NOT_ALLOWED;
            }
            if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
                return BREAK_NOT_ALLOWED;
            }
            if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
                return BREAK_NOT_ALLOWED;
            }
            if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED;
            }
            if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED;
            }
            if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === SP) {
                return BREAK_ALLOWED;
            }
            if (current === QU || next === QU) {
                return BREAK_NOT_ALLOWED;
            }
            if (next === CB || current === CB) {
                return BREAK_ALLOWED;
            }
            if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
                return BREAK_NOT_ALLOWED;
            }
            if (before === HL && HYPHEN.indexOf(current) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === SY && next === HL) {
                return BREAK_NOT_ALLOWED;
            }
            if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
                return BREAK_NOT_ALLOWED;
            }
            if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) || ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
                return BREAK_NOT_ALLOWED;
            }
            if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) || (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
                return BREAK_NOT_ALLOWED;
            }
            if (([PR, PO].indexOf(current) !== -1 && (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) || ([OP, HY].indexOf(current) !== -1 && next === NU) || (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
                return BREAK_NOT_ALLOWED;
            }
            if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
                var prevIndex = currentIndex;
                while (prevIndex >= 0) {
                    var type = classTypes[prevIndex];
                    if (type === NU) {
                        return BREAK_NOT_ALLOWED;
                    } else if ([SY, IS].indexOf(type) !== -1) {
                        prevIndex--;
                    } else {
                        break;
                    }
                }
            }
            if ([PR, PO].indexOf(next) !== -1) {
                var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
                while (prevIndex >= 0) {
                    var type = classTypes[prevIndex];
                    if (type === NU) {
                        return BREAK_NOT_ALLOWED;
                    } else if ([SY, IS].indexOf(type) !== -1) {
                        prevIndex--;
                    } else {
                        break;
                    }
                }
            }
            if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) || ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) || ([JT, H3].indexOf(current) !== -1 && next === JT)) {
                return BREAK_NOT_ALLOWED;
            }
            if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) || (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
                return BREAK_NOT_ALLOWED;
            }
            if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
                return BREAK_NOT_ALLOWED;
            }
            if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP) || (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
                return BREAK_NOT_ALLOWED;
            }
            if (current === RI && next === RI) {
                var i = indicies[currentIndex];
                var count = 1;
                while (i > 0) {
                    i--;
                    if (classTypes[i] === RI) {
                        count++;
                    } else {
                        break;
                    }
                }
                if (count % 2 !== 0) {
                    return BREAK_NOT_ALLOWED;
                }
            }
            if (current === EB && next === EM) {
                return BREAK_NOT_ALLOWED;
            }
            return BREAK_ALLOWED;
        };
        var cssFormattedClasses = function(codePoints, options) {
            if (!options) {
                options = {
                    lineBreak: 'normal',
                    wordBreak: 'normal'
                };
            }
            var _a = codePointsToCharacterClasses(codePoints, options.lineBreak),
                indicies = _a[0],
                classTypes = _a[1],
                isLetterNumber = _a[2];
            if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
                classTypes = classTypes.map(function(type) {
                    return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type);
                });
            }
            var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function(letterNumber, i) {
                return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
            }) : undefined;
            return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = (function() {
            function Break(codePoints, lineBreak, start, end) {
                this.codePoints = codePoints;
                this.required = lineBreak === BREAK_MANDATORY;
                this.start = start;
                this.end = end;
            }
            Break.prototype.slice = function() {
                return fromCodePoint.apply(void 0, this.codePoints.slice(this.start, this.end));
            };
            return Break;
        }());
        var LineBreaker = function(str, options) {
            var codePoints = toCodePoints(str);
            var _a = cssFormattedClasses(codePoints, options),
                indicies = _a[0],
                classTypes = _a[1],
                forbiddenBreakpoints = _a[2];
            var length = codePoints.length;
            var lastEnd = 0;
            var nextIndex = 0;
            return {
                next: function() {
                    if (nextIndex >= length) {
                        return {
                            done: true,
                            value: null
                        };
                    }
                    var lineBreak = BREAK_NOT_ALLOWED;
                    while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}
                    if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                        var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                        lastEnd = nextIndex;
                        return {
                            value: value,
                            done: false
                        };
                    }
                    return {
                        done: true,
                        value: null
                    };
                },
            };
        };
        var TokenType;
        (function(TokenType) {
            TokenType[TokenType["STRING_TOKEN"] = 0] = "STRING_TOKEN";
            TokenType[TokenType["BAD_STRING_TOKEN"] = 1] = "BAD_STRING_TOKEN";
            TokenType[TokenType["LEFT_PARENTHESIS_TOKEN"] = 2] = "LEFT_PARENTHESIS_TOKEN";
            TokenType[TokenType["RIGHT_PARENTHESIS_TOKEN"] = 3] = "RIGHT_PARENTHESIS_TOKEN";
            TokenType[TokenType["COMMA_TOKEN"] = 4] = "COMMA_TOKEN";
            TokenType[TokenType["HASH_TOKEN"] = 5] = "HASH_TOKEN";
            TokenType[TokenType["DELIM_TOKEN"] = 6] = "DELIM_TOKEN";
            TokenType[TokenType["AT_KEYWORD_TOKEN"] = 7] = "AT_KEYWORD_TOKEN";
            TokenType[TokenType["PREFIX_MATCH_TOKEN"] = 8] = "PREFIX_MATCH_TOKEN";
            TokenType[TokenType["DASH_MATCH_TOKEN"] = 9] = "DASH_MATCH_TOKEN";
            TokenType[TokenType["INCLUDE_MATCH_TOKEN"] = 10] = "INCLUDE_MATCH_TOKEN";
            TokenType[TokenType["LEFT_CURLY_BRACKET_TOKEN"] = 11] = "LEFT_CURLY_BRACKET_TOKEN";
            TokenType[TokenType["RIGHT_CURLY_BRACKET_TOKEN"] = 12] = "RIGHT_CURLY_BRACKET_TOKEN";
            TokenType[TokenType["SUFFIX_MATCH_TOKEN"] = 13] = "SUFFIX_MATCH_TOKEN";
            TokenType[TokenType["SUBSTRING_MATCH_TOKEN"] = 14] = "SUBSTRING_MATCH_TOKEN";
            TokenType[TokenType["DIMENSION_TOKEN"] = 15] = "DIMENSION_TOKEN";
            TokenType[TokenType["PERCENTAGE_TOKEN"] = 16] = "PERCENTAGE_TOKEN";
            TokenType[TokenType["NUMBER_TOKEN"] = 17] = "NUMBER_TOKEN";
            TokenType[TokenType["FUNCTION"] = 18] = "FUNCTION";
            TokenType[TokenType["FUNCTION_TOKEN"] = 19] = "FUNCTION_TOKEN";
            TokenType[TokenType["IDENT_TOKEN"] = 20] = "IDENT_TOKEN";
            TokenType[TokenType["COLUMN_TOKEN"] = 21] = "COLUMN_TOKEN";
            TokenType[TokenType["URL_TOKEN"] = 22] = "URL_TOKEN";
            TokenType[TokenType["BAD_URL_TOKEN"] = 23] = "BAD_URL_TOKEN";
            TokenType[TokenType["CDC_TOKEN"] = 24] = "CDC_TOKEN";
            TokenType[TokenType["CDO_TOKEN"] = 25] = "CDO_TOKEN";
            TokenType[TokenType["COLON_TOKEN"] = 26] = "COLON_TOKEN";
            TokenType[TokenType["SEMICOLON_TOKEN"] = 27] = "SEMICOLON_TOKEN";
            TokenType[TokenType["LEFT_SQUARE_BRACKET_TOKEN"] = 28] = "LEFT_SQUARE_BRACKET_TOKEN";
            TokenType[TokenType["RIGHT_SQUARE_BRACKET_TOKEN"] = 29] = "RIGHT_SQUARE_BRACKET_TOKEN";
            TokenType[TokenType["UNICODE_RANGE_TOKEN"] = 30] = "UNICODE_RANGE_TOKEN";
            TokenType[TokenType["WHITESPACE_TOKEN"] = 31] = "WHITESPACE_TOKEN";
            TokenType[TokenType["EOF_TOKEN"] = 32] = "EOF_TOKEN";
        })(TokenType || (TokenType = {}));
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 0x000a;
        var SOLIDUS = 0x002f;
        var REVERSE_SOLIDUS = 0x005c;
        var CHARACTER_TABULATION = 0x0009;
        var SPACE$1 = 0x0020;
        var QUOTATION_MARK = 0x0022;
        var EQUALS_SIGN = 0x003d;
        var NUMBER_SIGN = 0x0023;
        var DOLLAR_SIGN = 0x0024;
        var PERCENTAGE_SIGN = 0x0025;
        var APOSTROPHE = 0x0027;
        var LEFT_PARENTHESIS = 0x0028;
        var RIGHT_PARENTHESIS = 0x0029;
        var LOW_LINE = 0x005f;
        var HYPHEN_MINUS = 0x002d;
        var EXCLAMATION_MARK = 0x0021;
        var LESS_THAN_SIGN = 0x003c;
        var GREATER_THAN_SIGN = 0x003e;
        var COMMERCIAL_AT = 0x0040;
        var LEFT_SQUARE_BRACKET = 0x005b;
        var RIGHT_SQUARE_BRACKET = 0x005d;
        var CIRCUMFLEX_ACCENT = 0x003d;
        var LEFT_CURLY_BRACKET = 0x007b;
        var QUESTION_MARK = 0x003f;
        var RIGHT_CURLY_BRACKET = 0x007d;
        var VERTICAL_LINE = 0x007c;
        var TILDE = 0x007e;
        var CONTROL = 0x0080;
        var REPLACEMENT_CHARACTER = 0xfffd;
        var ASTERISK = 0x002a;
        var PLUS_SIGN = 0x002b;
        var COMMA = 0x002c;
        var COLON = 0x003a;
        var SEMICOLON = 0x003b;
        var FULL_STOP = 0x002e;
        var NULL = 0x0000;
        var BACKSPACE = 0x0008;
        var LINE_TABULATION = 0x000b;
        var SHIFT_OUT = 0x000e;
        var INFORMATION_SEPARATOR_ONE = 0x001f;
        var DELETE = 0x007f;
        var EOF = -1;
        var ZERO = 0x0030;
        var a = 0x0061;
        var e = 0x0065;
        var f = 0x0066;
        var u = 0x0075;
        var z = 0x007a;
        var A = 0x0041;
        var E = 0x0045;
        var F = 0x0046;
        var U = 0x0055;
        var Z = 0x005a;
        var isDigit = function(codePoint) {
            return codePoint >= ZERO && codePoint <= 0x0039;
        };
        var isSurrogateCodePoint = function(codePoint) {
            return codePoint >= 0xd800 && codePoint <= 0xdfff;
        };
        var isHex = function(codePoint) {
            return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
        };
        var isLowerCaseLetter = function(codePoint) {
            return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function(codePoint) {
            return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function(codePoint) {
            return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function(codePoint) {
            return codePoint >= CONTROL;
        };
        var isWhiteSpace = function(codePoint) {
            return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE$1;
        };
        var isNameStartCodePoint = function(codePoint) {
            return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function(codePoint) {
            return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function(codePoint) {
            return ((codePoint >= NULL && codePoint <= BACKSPACE) || codePoint === LINE_TABULATION || (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) || codePoint === DELETE);
        };
        var isValidEscape = function(c1, c2) {
            if (c1 !== REVERSE_SOLIDUS) {
                return false;
            }
            return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function(c1, c2, c3) {
            if (c1 === HYPHEN_MINUS) {
                return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
            } else if (isNameStartCodePoint(c1)) {
                return true;
            } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
                return true;
            }
            return false;
        };
        var isNumberStart = function(c1, c2, c3) {
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                if (isDigit(c2)) {
                    return true;
                }
                return c2 === FULL_STOP && isDigit(c3);
            }
            if (c1 === FULL_STOP) {
                return isDigit(c2);
            }
            return isDigit(c1);
        };
        var stringToNumber = function(codePoints) {
            var c = 0;
            var sign = 1;
            if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
                if (codePoints[c] === HYPHEN_MINUS) {
                    sign = -1;
                }
                c++;
            }
            var integers = [];
            while (isDigit(codePoints[c])) {
                integers.push(codePoints[c++]);
            }
            var int = integers.length ? parseInt(fromCodePoint.apply(void 0, integers), 10) : 0;
            if (codePoints[c] === FULL_STOP) {
                c++;
            }
            var fraction = [];
            while (isDigit(codePoints[c])) {
                fraction.push(codePoints[c++]);
            }
            var fracd = fraction.length;
            var frac = fracd ? parseInt(fromCodePoint.apply(void 0, fraction), 10) : 0;
            if (codePoints[c] === E || codePoints[c] === e) {
                c++;
            }
            var expsign = 1;
            if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
                if (codePoints[c] === HYPHEN_MINUS) {
                    expsign = -1;
                }
                c++;
            }
            var exponent = [];
            while (isDigit(codePoints[c])) {
                exponent.push(codePoints[c++]);
            }
            var exp = exponent.length ? parseInt(fromCodePoint.apply(void 0, exponent), 10) : 0;
            return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
            type: TokenType.LEFT_PARENTHESIS_TOKEN
        };
        var RIGHT_PARENTHESIS_TOKEN = {
            type: TokenType.RIGHT_PARENTHESIS_TOKEN
        };
        var COMMA_TOKEN = {
            type: TokenType.COMMA_TOKEN
        };
        var SUFFIX_MATCH_TOKEN = {
            type: TokenType.SUFFIX_MATCH_TOKEN
        };
        var PREFIX_MATCH_TOKEN = {
            type: TokenType.PREFIX_MATCH_TOKEN
        };
        var COLUMN_TOKEN = {
            type: TokenType.COLUMN_TOKEN
        };
        var DASH_MATCH_TOKEN = {
            type: TokenType.DASH_MATCH_TOKEN
        };
        var INCLUDE_MATCH_TOKEN = {
            type: TokenType.INCLUDE_MATCH_TOKEN
        };
        var LEFT_CURLY_BRACKET_TOKEN = {
            type: TokenType.LEFT_CURLY_BRACKET_TOKEN
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
            type: TokenType.RIGHT_CURLY_BRACKET_TOKEN
        };
        var SUBSTRING_MATCH_TOKEN = {
            type: TokenType.SUBSTRING_MATCH_TOKEN
        };
        var BAD_URL_TOKEN = {
            type: TokenType.BAD_URL_TOKEN
        };
        var BAD_STRING_TOKEN = {
            type: TokenType.BAD_STRING_TOKEN
        };
        var CDO_TOKEN = {
            type: TokenType.CDO_TOKEN
        };
        var CDC_TOKEN = {
            type: TokenType.CDC_TOKEN
        };
        var COLON_TOKEN = {
            type: TokenType.COLON_TOKEN
        };
        var SEMICOLON_TOKEN = {
            type: TokenType.SEMICOLON_TOKEN
        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
            type: TokenType.LEFT_SQUARE_BRACKET_TOKEN
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
            type: TokenType.RIGHT_SQUARE_BRACKET_TOKEN
        };
        var WHITESPACE_TOKEN = {
            type: TokenType.WHITESPACE_TOKEN
        };
        var EOF_TOKEN = {
            type: TokenType.EOF_TOKEN
        };
        var Tokenizer = (function() {
            function Tokenizer() {
                this._value = [];
            }
            Tokenizer.prototype.write = function(chunk) {
                this._value = this._value.concat(toCodePoints(chunk));
            };
            Tokenizer.prototype.read = function() {
                var tokens = [];
                var token = this.consumeToken();
                while (token !== EOF_TOKEN) {
                    tokens.push(token);
                    token = this.consumeToken();
                }
                return tokens;
            };
            Tokenizer.prototype.consumeToken = function() {
                var codePoint = this.consumeCodePoint();
                switch (codePoint) {
                    case QUOTATION_MARK:
                        return this.consumeStringToken(QUOTATION_MARK);
                    case NUMBER_SIGN:
                        var c1 = this.peekCodePoint(0);
                        var c2 = this.peekCodePoint(1);
                        var c3 = this.peekCodePoint(2);
                        if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                            var value = this.consumeName();
                            return {
                                type: TokenType.HASH_TOKEN,
                                value: value,
                                flags: flags
                            };
                        }
                        break;
                    case DOLLAR_SIGN:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return SUFFIX_MATCH_TOKEN;
                        }
                        break;
                    case APOSTROPHE:
                        return this.consumeStringToken(APOSTROPHE);
                    case LEFT_PARENTHESIS:
                        return LEFT_PARENTHESIS_TOKEN;
                    case RIGHT_PARENTHESIS:
                        return RIGHT_PARENTHESIS_TOKEN;
                    case ASTERISK:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return SUBSTRING_MATCH_TOKEN;
                        }
                        break;
                    case PLUS_SIGN:
                        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        break;
                    case COMMA:
                        return COMMA_TOKEN;
                    case HYPHEN_MINUS:
                        var e1 = codePoint;
                        var e2 = this.peekCodePoint(0);
                        var e3 = this.peekCodePoint(1);
                        if (isNumberStart(e1, e2, e3)) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        if (isIdentifierStart(e1, e2, e3)) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeIdentLikeToken();
                        }
                        if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                            this.consumeCodePoint();
                            this.consumeCodePoint();
                            return CDC_TOKEN;
                        }
                        break;
                    case FULL_STOP:
                        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeNumericToken();
                        }
                        break;
                    case SOLIDUS:
                        if (this.peekCodePoint(0) === ASTERISK) {
                            this.consumeCodePoint();
                            while (true) {
                                var c = this.consumeCodePoint();
                                if (c === ASTERISK) {
                                    c = this.consumeCodePoint();
                                    if (c === SOLIDUS) {
                                        return this.consumeToken();
                                    }
                                }
                                if (c === EOF) {
                                    return this.consumeToken();
                                }
                            }
                        }
                        break;
                    case COLON:
                        return COLON_TOKEN;
                    case SEMICOLON:
                        return SEMICOLON_TOKEN;
                    case LESS_THAN_SIGN:
                        if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                            this.consumeCodePoint();
                            this.consumeCodePoint();
                            return CDO_TOKEN;
                        }
                        break;
                    case COMMERCIAL_AT:
                        var a1 = this.peekCodePoint(0);
                        var a2 = this.peekCodePoint(1);
                        var a3 = this.peekCodePoint(2);
                        if (isIdentifierStart(a1, a2, a3)) {
                            var value = this.consumeName();
                            return {
                                type: TokenType.AT_KEYWORD_TOKEN,
                                value: value
                            };
                        }
                        break;
                    case LEFT_SQUARE_BRACKET:
                        return LEFT_SQUARE_BRACKET_TOKEN;
                    case REVERSE_SOLIDUS:
                        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                            this.reconsumeCodePoint(codePoint);
                            return this.consumeIdentLikeToken();
                        }
                        break;
                    case RIGHT_SQUARE_BRACKET:
                        return RIGHT_SQUARE_BRACKET_TOKEN;
                    case CIRCUMFLEX_ACCENT:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return PREFIX_MATCH_TOKEN;
                        }
                        break;
                    case LEFT_CURLY_BRACKET:
                        return LEFT_CURLY_BRACKET_TOKEN;
                    case RIGHT_CURLY_BRACKET:
                        return RIGHT_CURLY_BRACKET_TOKEN;
                    case u:
                    case U:
                        var u1 = this.peekCodePoint(0);
                        var u2 = this.peekCodePoint(1);
                        if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                            this.consumeCodePoint();
                            this.consumeUnicodeRangeToken();
                        }
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    case VERTICAL_LINE:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return DASH_MATCH_TOKEN;
                        }
                        if (this.peekCodePoint(0) === VERTICAL_LINE) {
                            this.consumeCodePoint();
                            return COLUMN_TOKEN;
                        }
                        break;
                    case TILDE:
                        if (this.peekCodePoint(0) === EQUALS_SIGN) {
                            this.consumeCodePoint();
                            return INCLUDE_MATCH_TOKEN;
                        }
                        break;
                    case EOF:
                        return EOF_TOKEN;
                }
                if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    return WHITESPACE_TOKEN;
                }
                if (isDigit(codePoint)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                }
                if (isNameStartCodePoint(codePoint)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                }
                return {
                    type: TokenType.DELIM_TOKEN,
                    value: fromCodePoint(codePoint)
                };
            };
            Tokenizer.prototype.consumeCodePoint = function() {
                var value = this._value.shift();
                return typeof value === 'undefined' ? -1 : value;
            };
            Tokenizer.prototype.reconsumeCodePoint = function(codePoint) {
                this._value.unshift(codePoint);
            };
            Tokenizer.prototype.peekCodePoint = function(delta) {
                if (delta >= this._value.length) {
                    return -1;
                }
                return this._value[delta];
            };
            Tokenizer.prototype.consumeUnicodeRangeToken = function() {
                var digits = [];
                var codePoint = this.consumeCodePoint();
                while (isHex(codePoint) && digits.length < 6) {
                    digits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var questionMarks = false;
                while (codePoint === QUESTION_MARK && digits.length < 6) {
                    digits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                    questionMarks = true;
                }
                if (questionMarks) {
                    var start_1 = parseInt(fromCodePoint.apply(void 0, digits.map(function(digit) {
                        return (digit === QUESTION_MARK ? ZERO : digit);
                    })), 16);
                    var end = parseInt(fromCodePoint.apply(void 0, digits.map(function(digit) {
                        return (digit === QUESTION_MARK ? F : digit);
                    })), 16);
                    return {
                        type: TokenType.UNICODE_RANGE_TOKEN,
                        start: start_1,
                        end: end
                    };
                }
                var start = parseInt(fromCodePoint.apply(void 0, digits), 16);
                if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                    this.consumeCodePoint();
                    codePoint = this.consumeCodePoint();
                    var endDigits = [];
                    while (isHex(codePoint) && endDigits.length < 6) {
                        endDigits.push(codePoint);
                        codePoint = this.consumeCodePoint();
                    }
                    var end = parseInt(fromCodePoint.apply(void 0, endDigits), 16);
                    return {
                        type: TokenType.UNICODE_RANGE_TOKEN,
                        start: start,
                        end: end
                    };
                } else {
                    return {
                        type: TokenType.UNICODE_RANGE_TOKEN,
                        start: start,
                        end: start
                    };
                }
            };
            Tokenizer.prototype.consumeIdentLikeToken = function() {
                var value = this.consumeName();
                if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return this.consumeUrlToken();
                } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return {
                        type: TokenType.FUNCTION_TOKEN,
                        value: value
                    };
                }
                return {
                    type: TokenType.IDENT_TOKEN,
                    value: value
                };
            };
            Tokenizer.prototype.consumeUrlToken = function() {
                var value = [];
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF) {
                    return {
                        type: TokenType.URL_TOKEN,
                        value: ''
                    };
                }
                var next = this.peekCodePoint(0);
                if (next === APOSTROPHE || next === QUOTATION_MARK) {
                    var stringToken = this.consumeStringToken(this.consumeCodePoint());
                    if (stringToken.type === TokenType.STRING_TOKEN) {
                        this.consumeWhiteSpace();
                        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                            this.consumeCodePoint();
                            return {
                                type: TokenType.URL_TOKEN,
                                value: stringToken.value
                            };
                        }
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                        return {
                            type: TokenType.URL_TOKEN,
                            value: fromCodePoint.apply(void 0, value)
                        };
                    } else if (isWhiteSpace(codePoint)) {
                        this.consumeWhiteSpace();
                        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                            this.consumeCodePoint();
                            return {
                                type: TokenType.URL_TOKEN,
                                value: fromCodePoint.apply(void 0, value)
                            };
                        }
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    } else if (codePoint === REVERSE_SOLIDUS) {
                        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                            value.push(this.consumeEscapedCodePoint());
                        } else {
                            this.consumeBadUrlRemnants();
                            return BAD_URL_TOKEN;
                        }
                    } else {
                        value.push(codePoint);
                    }
                }
            };
            Tokenizer.prototype.consumeWhiteSpace = function() {
                while (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
            };
            Tokenizer.prototype.consumeBadUrlRemnants = function() {
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                        return;
                    }
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.consumeEscapedCodePoint();
                    }
                }
            };
            Tokenizer.prototype.consumeStringSlice = function(count) {
                var SLICE_STACK_SIZE = 60000;
                var value = '';
                while (count > 0) {
                    var amount = Math.min(SLICE_STACK_SIZE, count);
                    value += fromCodePoint.apply(void 0, this._value.splice(0, amount));
                    count -= amount;
                }
                this._value.shift();
                return value;
            };
            Tokenizer.prototype.consumeStringToken = function(endingCodePoint) {
                var value = '';
                var i = 0;
                do {
                    var codePoint = this._value[i];
                    if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                        value += this.consumeStringSlice(i);
                        return {
                            type: TokenType.STRING_TOKEN,
                            value: value
                        };
                    }
                    if (codePoint === LINE_FEED) {
                        this._value.splice(0, i);
                        return BAD_STRING_TOKEN;
                    }
                    if (codePoint === REVERSE_SOLIDUS) {
                        var next = this._value[i + 1];
                        if (next !== EOF && next !== undefined) {
                            if (next === LINE_FEED) {
                                value += this.consumeStringSlice(i);
                                i = -1;
                                this._value.shift();
                            } else if (isValidEscape(codePoint, next)) {
                                value += this.consumeStringSlice(i);
                                value += fromCodePoint(this.consumeEscapedCodePoint());
                                i = -1;
                            }
                        }
                    }
                    i++;
                } while (true);
            };
            Tokenizer.prototype.consumeNumber = function() {
                var repr = [];
                var type = FLAG_INTEGER;
                var c1 = this.peekCodePoint(0);
                if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                    repr.push(this.consumeCodePoint());
                }
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
                c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                if (c1 === FULL_STOP && isDigit(c2)) {
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                    type = FLAG_NUMBER;
                    while (isDigit(this.peekCodePoint(0))) {
                        repr.push(this.consumeCodePoint());
                    }
                }
                c1 = this.peekCodePoint(0);
                c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                    type = FLAG_NUMBER;
                    while (isDigit(this.peekCodePoint(0))) {
                        repr.push(this.consumeCodePoint());
                    }
                }
                return [stringToNumber(repr), type];
            };
            Tokenizer.prototype.consumeNumericToken = function() {
                var _a = this.consumeNumber(),
                    number = _a[0],
                    flags = _a[1];
                var c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if (isIdentifierStart(c1, c2, c3)) {
                    var unit = this.consumeName();
                    return {
                        type: TokenType.DIMENSION_TOKEN,
                        number: number,
                        flags: flags,
                        unit: unit
                    };
                }
                if (c1 === PERCENTAGE_SIGN) {
                    this.consumeCodePoint();
                    return {
                        type: TokenType.PERCENTAGE_TOKEN,
                        number: number,
                        flags: flags
                    };
                }
                return {
                    type: TokenType.NUMBER_TOKEN,
                    number: number,
                    flags: flags
                };
            };
            Tokenizer.prototype.consumeEscapedCodePoint = function() {
                var codePoint = this.consumeCodePoint();
                if (isHex(codePoint)) {
                    var hex = fromCodePoint(codePoint);
                    while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                        hex += fromCodePoint(this.consumeCodePoint());
                    }
                    if (isWhiteSpace(this.peekCodePoint(0))) {
                        this.consumeCodePoint();
                    }
                    var hexCodePoint = parseInt(hex, 16);
                    if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                        return REPLACEMENT_CHARACTER;
                    }
                    return hexCodePoint;
                }
                if (codePoint === EOF) {
                    return REPLACEMENT_CHARACTER;
                }
                return codePoint;
            };
            Tokenizer.prototype.consumeName = function() {
                var result = '';
                while (true) {
                    var codePoint = this.consumeCodePoint();
                    if (isNameCodePoint(codePoint)) {
                        result += fromCodePoint(codePoint);
                    } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        result += fromCodePoint(this.consumeEscapedCodePoint());
                    } else {
                        this.reconsumeCodePoint(codePoint);
                        return result;
                    }
                }
            };
            return Tokenizer;
        }());
        var Parser = (function() {
            function Parser(tokens) {
                this._tokens = tokens;
            }
            Parser.create = function(value) {
                var tokenizer = new Tokenizer();
                tokenizer.write(value);
                return new Parser(tokenizer.read());
            };
            Parser.parseValue = function(value) {
                return Parser.create(value).parseComponentValue();
            };
            Parser.parseValues = function(value) {
                return Parser.create(value).parseComponentValues();
            };
            Parser.prototype.parseComponentValue = function() {
                var token = this.consumeToken();
                while (token.type === TokenType.WHITESPACE_TOKEN) {
                    token = this.consumeToken();
                }
                if (token.type === TokenType.EOF_TOKEN) {
                    throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                }
                this.reconsumeToken(token);
                var value = this.consumeComponentValue();
                do {
                    token = this.consumeToken();
                } while (token.type === TokenType.WHITESPACE_TOKEN);
                if (token.type === TokenType.EOF_TOKEN) {
                    return value;
                }
                throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
            };
            Parser.prototype.parseComponentValues = function() {
                var values = [];
                while (true) {
                    var value = this.consumeComponentValue();
                    if (value.type === TokenType.EOF_TOKEN) {
                        return values;
                    }
                    values.push(value);
                    values.push();
                }
            };
            Parser.prototype.consumeComponentValue = function() {
                var token = this.consumeToken();
                switch (token.type) {
                    case TokenType.LEFT_CURLY_BRACKET_TOKEN:
                    case TokenType.LEFT_SQUARE_BRACKET_TOKEN:
                    case TokenType.LEFT_PARENTHESIS_TOKEN:
                        return this.consumeSimpleBlock(token.type);
                    case TokenType.FUNCTION_TOKEN:
                        return this.consumeFunction(token);
                }
                return token;
            };
            Parser.prototype.consumeSimpleBlock = function(type) {
                var block = {
                    type: type,
                    values: []
                };
                var token = this.consumeToken();
                while (true) {
                    if (token.type === TokenType.EOF_TOKEN || isEndingTokenFor(token, type)) {
                        return block;
                    }
                    this.reconsumeToken(token);
                    block.values.push(this.consumeComponentValue());
                    token = this.consumeToken();
                }
            };
            Parser.prototype.consumeFunction = function(functionToken) {
                var cssFunction = {
                    name: functionToken.value,
                    values: [],
                    type: TokenType.FUNCTION
                };
                while (true) {
                    var token = this.consumeToken();
                    if (token.type === TokenType.EOF_TOKEN || token.type === TokenType.RIGHT_PARENTHESIS_TOKEN) {
                        return cssFunction;
                    }
                    this.reconsumeToken(token);
                    cssFunction.values.push(this.consumeComponentValue());
                }
            };
            Parser.prototype.consumeToken = function() {
                var token = this._tokens.shift();
                return typeof token === 'undefined' ? EOF_TOKEN : token;
            };
            Parser.prototype.reconsumeToken = function(token) {
                this._tokens.unshift(token);
            };
            return Parser;
        }());
        var isDimensionToken = function(token) {
            return token.type === TokenType.DIMENSION_TOKEN;
        };
        var isNumberToken = function(token) {
            return token.type === TokenType.NUMBER_TOKEN;
        };
        var isIdentToken = function(token) {
            return token.type === TokenType.IDENT_TOKEN;
        };
        var isStringToken = function(token) {
            return token.type === TokenType.STRING_TOKEN;
        };
        var isIdentWithValue = function(token, value) {
            return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function(token) {
            return token.type !== TokenType.WHITESPACE_TOKEN;
        };
        var nonFunctionArgSeparator = function(token) {
            return token.type !== TokenType.WHITESPACE_TOKEN && token.type !== TokenType.COMMA_TOKEN;
        };
        var parseFunctionArgs = function(tokens) {
            var args = [];
            var arg = [];
            tokens.forEach(function(token) {
                if (token.type === TokenType.COMMA_TOKEN) {
                    if (arg.length === 0) {
                        throw new Error("Error parsing function args, zero tokens for arg");
                    }
                    args.push(arg);
                    arg = [];
                    return;
                }
                if (token.type !== TokenType.WHITESPACE_TOKEN) {
                    arg.push(token);
                }
            });
            if (arg.length) {
                args.push(arg);
            }
            return args;
        };
        var isEndingTokenFor = function(token, type) {
            if (type === TokenType.LEFT_CURLY_BRACKET_TOKEN && token.type === TokenType.RIGHT_CURLY_BRACKET_TOKEN) {
                return true;
            }
            if (type === TokenType.LEFT_SQUARE_BRACKET_TOKEN && token.type === TokenType.RIGHT_SQUARE_BRACKET_TOKEN) {
                return true;
            }
            return type === TokenType.LEFT_PARENTHESIS_TOKEN && token.type === TokenType.RIGHT_PARENTHESIS_TOKEN;
        };
        var isLength = function(token) {
            return token.type === TokenType.NUMBER_TOKEN || token.type === TokenType.DIMENSION_TOKEN;
        };
        var isLengthPercentage = function(token) {
            return token.type === TokenType.PERCENTAGE_TOKEN || isLength(token);
        };
        var parseLengthPercentageTuple = function(tokens) {
            return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
            type: TokenType.NUMBER_TOKEN,
            number: 0,
            flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
            type: TokenType.PERCENTAGE_TOKEN,
            number: 50,
            flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
            type: TokenType.PERCENTAGE_TOKEN,
            number: 100,
            flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function(tuple, width, height) {
            var x = tuple[0],
                y = tuple[1];
            return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
        };
        var getAbsoluteValue = function(token, parent) {
            if (token.type === TokenType.PERCENTAGE_TOKEN) {
                return (token.number / 100) * parent;
            }
            if (isDimensionToken(token)) {
                switch (token.unit) {
                    case 'rem':
                    case 'em':
                        return 16 * token.number;
                    case 'px':
                    default:
                        return token.number;
                }
            }
            return token.number;
        };
        var DEG = 'deg';
        var GRAD = 'grad';
        var RAD = 'rad';
        var TURN = 'turn';
        var angle = {
            name: 'angle',
            parse: function(value) {
                if (value.type === TokenType.DIMENSION_TOKEN) {
                    switch (value.unit) {
                        case DEG:
                            return (Math.PI * value.number) / 180;
                        case GRAD:
                            return (Math.PI / 200) * value.number;
                        case RAD:
                            return value.number;
                        case TURN:
                            return Math.PI * 2 * value.number;
                    }
                }
                throw new Error("Unsupported angle type");
            }
        };
        var isAngle = function(value) {
            if (value.type === TokenType.DIMENSION_TOKEN) {
                if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
                    return true;
                }
            }
            return false;
        };
        var parseNamedSide = function(tokens) {
            var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
                return ident.value;
            }).join(' ');
            switch (sideOrCorner) {
                case 'to bottom right':
                case 'to right bottom':
                case 'left top':
                case 'top left':
                    return [ZERO_LENGTH, ZERO_LENGTH];
                case 'to top':
                case 'bottom':
                    return deg(0);
                case 'to bottom left':
                case 'to left bottom':
                case 'right top':
                case 'top right':
                    return [ZERO_LENGTH, HUNDRED_PERCENT];
                case 'to right':
                case 'left':
                    return deg(90);
                case 'to top left':
                case 'to left top':
                case 'right bottom':
                case 'bottom right':
                    return [HUNDRED_PERCENT, HUNDRED_PERCENT];
                case 'to bottom':
                case 'top':
                    return deg(180);
                case 'to top right':
                case 'to right top':
                case 'left bottom':
                case 'bottom left':
                    return [HUNDRED_PERCENT, ZERO_LENGTH];
                case 'to left':
                case 'right':
                    return deg(270);
            }
            return 0;
        };
        var deg = function(deg) {
            return (Math.PI * deg) / 180;
        };
        var color = {
            name: 'color',
            parse: function(value) {
                if (value.type === TokenType.FUNCTION) {
                    var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                    if (typeof colorFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
                    }
                    return colorFunction(value.values);
                }
                if (value.type === TokenType.HASH_TOKEN) {
                    if (value.value.length === 3) {
                        var r = value.value.substring(0, 1);
                        var g = value.value.substring(1, 2);
                        var b = value.value.substring(2, 3);
                        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                    }
                    if (value.value.length === 4) {
                        var r = value.value.substring(0, 1);
                        var g = value.value.substring(1, 2);
                        var b = value.value.substring(2, 3);
                        var a = value.value.substring(3, 4);
                        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                    }
                    if (value.value.length === 6) {
                        var r = value.value.substring(0, 2);
                        var g = value.value.substring(2, 4);
                        var b = value.value.substring(4, 6);
                        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                    }
                    if (value.value.length === 8) {
                        var r = value.value.substring(0, 2);
                        var g = value.value.substring(2, 4);
                        var b = value.value.substring(4, 6);
                        var a = value.value.substring(6, 8);
                        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                    }
                }
                if (value.type === TokenType.IDENT_TOKEN) {
                    var namedColor = COLORS[value.value.toUpperCase()];
                    if (typeof namedColor !== 'undefined') {
                        return namedColor;
                    }
                }
                return COLORS.TRANSPARENT;
            }
        };
        var isTransparent = function(color) {
            return (0xff & color) === 0;
        };
        var asString = function(color) {
            var alpha = 0xff & color;
            var blue = 0xff & (color >> 8);
            var green = 0xff & (color >> 16);
            var red = 0xff & (color >> 24);
            return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function(r, g, b, a) {
            return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
        };
        var getTokenColorValue = function(token, i) {
            if (token.type === TokenType.NUMBER_TOKEN) {
                return token.number;
            }
            if (token.type === TokenType.PERCENTAGE_TOKEN) {
                var max = i === 3 ? 1 : 255;
                return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
            }
            return 0;
        };
        var rgb = function(args) {
            var tokens = args.filter(nonFunctionArgSeparator);
            if (tokens.length === 3) {
                var _a = tokens.map(getTokenColorValue),
                    r = _a[0],
                    g = _a[1],
                    b = _a[2];
                return pack(r, g, b, 1);
            }
            if (tokens.length === 4) {
                var _b = tokens.map(getTokenColorValue),
                    r = _b[0],
                    g = _b[1],
                    b = _b[2],
                    a = _b[3];
                return pack(r, g, b, a);
            }
            return 0;
        };

        function hue2rgb(t1, t2, hue) {
            if (hue < 0) {
                hue += 1;
            }
            if (hue >= 1) {
                hue -= 1;
            }
            if (hue < 1 / 6) {
                return (t2 - t1) * hue * 6 + t1;
            } else if (hue < 1 / 2) {
                return t2;
            } else if (hue < 2 / 3) {
                return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
            } else {
                return t1;
            }
        }
        var hsl = function(args) {
            var tokens = args.filter(nonFunctionArgSeparator);
            var hue = tokens[0],
                saturation = tokens[1],
                lightness = tokens[2],
                alpha = tokens[3];
            var h = (hue.type === TokenType.NUMBER_TOKEN ? deg(hue.number) : angle.parse(hue)) / (Math.PI * 2);
            var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
            var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
            var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
            if (s === 0) {
                return pack(l * 255, l * 255, l * 255, 1);
            }
            var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            var t1 = l * 2 - t2;
            var r = hue2rgb(t1, t2, h + 1 / 3);
            var g = hue2rgb(t1, t2, h);
            var b = hue2rgb(t1, t2, h - 1 / 3);
            return pack(r * 255, g * 255, b * 255, a);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
            hsl: hsl,
            hsla: hsl,
            rgb: rgb,
            rgba: rgb
        };
        var COLORS = {
            ALICEBLUE: 0xf0f8ffff,
            ANTIQUEWHITE: 0xfaebd7ff,
            AQUA: 0x00ffffff,
            AQUAMARINE: 0x7fffd4ff,
            AZURE: 0xf0ffffff,
            BEIGE: 0xf5f5dcff,
            BISQUE: 0xffe4c4ff,
            BLACK: 0x000000ff,
            BLANCHEDALMOND: 0xffebcdff,
            BLUE: 0x0000ffff,
            BLUEVIOLET: 0x8a2be2ff,
            BROWN: 0xa52a2aff,
            BURLYWOOD: 0xdeb887ff,
            CADETBLUE: 0x5f9ea0ff,
            CHARTREUSE: 0x7fff00ff,
            CHOCOLATE: 0xd2691eff,
            CORAL: 0xff7f50ff,
            CORNFLOWERBLUE: 0x6495edff,
            CORNSILK: 0xfff8dcff,
            CRIMSON: 0xdc143cff,
            CYAN: 0x00ffffff,
            DARKBLUE: 0x00008bff,
            DARKCYAN: 0x008b8bff,
            DARKGOLDENROD: 0xb886bbff,
            DARKGRAY: 0xa9a9a9ff,
            DARKGREEN: 0x006400ff,
            DARKGREY: 0xa9a9a9ff,
            DARKKHAKI: 0xbdb76bff,
            DARKMAGENTA: 0x8b008bff,
            DARKOLIVEGREEN: 0x556b2fff,
            DARKORANGE: 0xff8c00ff,
            DARKORCHID: 0x9932ccff,
            DARKRED: 0x8b0000ff,
            DARKSALMON: 0xe9967aff,
            DARKSEAGREEN: 0x8fbc8fff,
            DARKSLATEBLUE: 0x483d8bff,
            DARKSLATEGRAY: 0x2f4f4fff,
            DARKSLATEGREY: 0x2f4f4fff,
            DARKTURQUOISE: 0x00ced1ff,
            DARKVIOLET: 0x9400d3ff,
            DEEPPINK: 0xff1493ff,
            DEEPSKYBLUE: 0x00bfffff,
            DIMGRAY: 0x696969ff,
            DIMGREY: 0x696969ff,
            DODGERBLUE: 0x1e90ffff,
            FIREBRICK: 0xb22222ff,
            FLORALWHITE: 0xfffaf0ff,
            FORESTGREEN: 0x228b22ff,
            FUCHSIA: 0xff00ffff,
            GAINSBORO: 0xdcdcdcff,
            GHOSTWHITE: 0xf8f8ffff,
            GOLD: 0xffd700ff,
            GOLDENROD: 0xdaa520ff,
            GRAY: 0x808080ff,
            GREEN: 0x008000ff,
            GREENYELLOW: 0xadff2fff,
            GREY: 0x808080ff,
            HONEYDEW: 0xf0fff0ff,
            HOTPINK: 0xff69b4ff,
            INDIANRED: 0xcd5c5cff,
            INDIGO: 0x4b0082ff,
            IVORY: 0xfffff0ff,
            KHAKI: 0xf0e68cff,
            LAVENDER: 0xe6e6faff,
            LAVENDERBLUSH: 0xfff0f5ff,
            LAWNGREEN: 0x7cfc00ff,
            LEMONCHIFFON: 0xfffacdff,
            LIGHTBLUE: 0xadd8e6ff,
            LIGHTCORAL: 0xf08080ff,
            LIGHTCYAN: 0xe0ffffff,
            LIGHTGOLDENRODYELLOW: 0xfafad2ff,
            LIGHTGRAY: 0xd3d3d3ff,
            LIGHTGREEN: 0x90ee90ff,
            LIGHTGREY: 0xd3d3d3ff,
            LIGHTPINK: 0xffb6c1ff,
            LIGHTSALMON: 0xffa07aff,
            LIGHTSEAGREEN: 0x20b2aaff,
            LIGHTSKYBLUE: 0x87cefaff,
            LIGHTSLATEGRAY: 0x778899ff,
            LIGHTSLATEGREY: 0x778899ff,
            LIGHTSTEELBLUE: 0xb0c4deff,
            LIGHTYELLOW: 0xffffe0ff,
            LIME: 0x00ff00ff,
            LIMEGREEN: 0x32cd32ff,
            LINEN: 0xfaf0e6ff,
            MAGENTA: 0xff00ffff,
            MAROON: 0x800000ff,
            MEDIUMAQUAMARINE: 0x66cdaaff,
            MEDIUMBLUE: 0x0000cdff,
            MEDIUMORCHID: 0xba55d3ff,
            MEDIUMPURPLE: 0x9370dbff,
            MEDIUMSEAGREEN: 0x3cb371ff,
            MEDIUMSLATEBLUE: 0x7b68eeff,
            MEDIUMSPRINGGREEN: 0x00fa9aff,
            MEDIUMTURQUOISE: 0x48d1ccff,
            MEDIUMVIOLETRED: 0xc71585ff,
            MIDNIGHTBLUE: 0x191970ff,
            MINTCREAM: 0xf5fffaff,
            MISTYROSE: 0xffe4e1ff,
            MOCCASIN: 0xffe4b5ff,
            NAVAJOWHITE: 0xffdeadff,
            NAVY: 0x000080ff,
            OLDLACE: 0xfdf5e6ff,
            OLIVE: 0x808000ff,
            OLIVEDRAB: 0x6b8e23ff,
            ORANGE: 0xffa500ff,
            ORANGERED: 0xff4500ff,
            ORCHID: 0xda70d6ff,
            PALEGOLDENROD: 0xeee8aaff,
            PALEGREEN: 0x98fb98ff,
            PALETURQUOISE: 0xafeeeeff,
            PALEVIOLETRED: 0xdb7093ff,
            PAPAYAWHIP: 0xffefd5ff,
            PEACHPUFF: 0xffdab9ff,
            PERU: 0xcd853fff,
            PINK: 0xffc0cbff,
            PLUM: 0xdda0ddff,
            POWDERBLUE: 0xb0e0e6ff,
            PURPLE: 0x800080ff,
            REBECCAPURPLE: 0x663399ff,
            RED: 0xff0000ff,
            ROSYBROWN: 0xbc8f8fff,
            ROYALBLUE: 0x4169e1ff,
            SADDLEBROWN: 0x8b4513ff,
            SALMON: 0xfa8072ff,
            SANDYBROWN: 0xf4a460ff,
            SEAGREEN: 0x2e8b57ff,
            SEASHELL: 0xfff5eeff,
            SIENNA: 0xa0522dff,
            SILVER: 0xc0c0c0ff,
            SKYBLUE: 0x87ceebff,
            SLATEBLUE: 0x6a5acdff,
            SLATEGRAY: 0x708090ff,
            SLATEGREY: 0x708090ff,
            SNOW: 0xfffafaff,
            SPRINGGREEN: 0x00ff7fff,
            STEELBLUE: 0x4682b4ff,
            TAN: 0xd2b48cff,
            TEAL: 0x008080ff,
            THISTLE: 0xd8bfd8ff,
            TOMATO: 0xff6347ff,
            TRANSPARENT: 0x00000000,
            TURQUOISE: 0x40e0d0ff,
            VIOLET: 0xee82eeff,
            WHEAT: 0xf5deb3ff,
            WHITE: 0xffffffff,
            WHITESMOKE: 0xf5f5f5ff,
            YELLOW: 0xffff00ff,
            YELLOWGREEN: 0x9acd32ff
        };
        var PropertyDescriptorParsingType;
        (function(PropertyDescriptorParsingType) {
            PropertyDescriptorParsingType[PropertyDescriptorParsingType["VALUE"] = 0] = "VALUE";
            PropertyDescriptorParsingType[PropertyDescriptorParsingType["LIST"] = 1] = "LIST";
            PropertyDescriptorParsingType[PropertyDescriptorParsingType["IDENT_VALUE"] = 2] = "IDENT_VALUE";
            PropertyDescriptorParsingType[PropertyDescriptorParsingType["TYPE_VALUE"] = 3] = "TYPE_VALUE";
            PropertyDescriptorParsingType[PropertyDescriptorParsingType["TOKEN_VALUE"] = 4] = "TOKEN_VALUE";
        })(PropertyDescriptorParsingType || (PropertyDescriptorParsingType = {}));
        var BACKGROUND_CLIP;
        (function(BACKGROUND_CLIP) {
            BACKGROUND_CLIP[BACKGROUND_CLIP["BORDER_BOX"] = 0] = "BORDER_BOX";
            BACKGROUND_CLIP[BACKGROUND_CLIP["PADDING_BOX"] = 1] = "PADDING_BOX";
            BACKGROUND_CLIP[BACKGROUND_CLIP["CONTENT_BOX"] = 2] = "CONTENT_BOX";
        })(BACKGROUND_CLIP || (BACKGROUND_CLIP = {}));
        var backgroundClip = {
            name: 'background-clip',
            initialValue: 'border-box',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return tokens.map(function(token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'padding-box':
                                return BACKGROUND_CLIP.PADDING_BOX;
                            case 'content-box':
                                return BACKGROUND_CLIP.CONTENT_BOX;
                        }
                    }
                    return BACKGROUND_CLIP.BORDER_BOX;
                });
            }
        };
        var backgroundColor = {
            name: "background-color",
            initialValue: 'transparent',
            prefix: false,
            type: PropertyDescriptorParsingType.TYPE_VALUE,
            format: 'color'
        };
        var parseColorStop = function(args) {
            var color$1 = color.parse(args[0]);
            var stop = args[1];
            return stop && isLengthPercentage(stop) ? {
                color: color$1,
                stop: stop
            } : {
                color: color$1,
                stop: null
            };
        };
        var processColorStops = function(stops, lineLength) {
            var first = stops[0];
            var last = stops[stops.length - 1];
            if (first.stop === null) {
                first.stop = ZERO_LENGTH;
            }
            if (last.stop === null) {
                last.stop = HUNDRED_PERCENT;
            }
            var processStops = [];
            var previous = 0;
            for (var i = 0; i < stops.length; i++) {
                var stop_1 = stops[i].stop;
                if (stop_1 !== null) {
                    var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                    if (absoluteValue > previous) {
                        processStops.push(absoluteValue);
                    } else {
                        processStops.push(previous);
                    }
                    previous = absoluteValue;
                } else {
                    processStops.push(null);
                }
            }
            var gapBegin = null;
            for (var i = 0; i < processStops.length; i++) {
                var stop_2 = processStops[i];
                if (stop_2 === null) {
                    if (gapBegin === null) {
                        gapBegin = i;
                    }
                } else if (gapBegin !== null) {
                    var gapLength = i - gapBegin;
                    var beforeGap = processStops[gapBegin - 1];
                    var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                    for (var g = 1; g <= gapLength; g++) {
                        processStops[gapBegin + g - 1] = gapValue * g;
                    }
                    gapBegin = null;
                }
            }
            return stops.map(function(_a, i) {
                var color = _a.color;
                return {
                    color: color,
                    stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
                };
            });
        };
        var getAngleFromCorner = function(corner, width, height) {
            var centerX = width / 2;
            var centerY = height / 2;
            var x = getAbsoluteValue(corner[0], width) - centerX;
            var y = centerY - getAbsoluteValue(corner[1], height);
            return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function(angle, width, height) {
            var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
            var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
            var halfWidth = width / 2;
            var halfHeight = height / 2;
            var halfLineLength = lineLength / 2;
            var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
            var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
            return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function(a, b) {
            return Math.sqrt(a * a + b * b);
        };
        var findCorner = function(width, height, x, y, closest) {
            var corners = [
                [0, 0],
                [0, height],
                [width, 0],
                [width, height]
            ];
            return corners.reduce(function(stat, corner) {
                var cx = corner[0],
                    cy = corner[1];
                var d = distance(x - cx, y - cy);
                if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                    return {
                        optimumCorner: corner,
                        optimumDistance: d
                    };
                }
                return stat;
            }, {
                optimumDistance: closest ? Infinity : -Infinity,
                optimumCorner: null
            }).optimumCorner;
        };
        var calculateRadius = function(gradient, x, y, width, height) {
            var rx = 0;
            var ry = 0;
            switch (gradient.size) {
                case CSSRadialExtent.CLOSEST_SIDE:
                    if (gradient.shape === CSSRadialShape.CIRCLE) {
                        rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                    } else if (gradient.shape === CSSRadialShape.ELLIPSE) {
                        rx = Math.min(Math.abs(x), Math.abs(x - width));
                        ry = Math.min(Math.abs(y), Math.abs(y - height));
                    }
                    break;
                case CSSRadialExtent.CLOSEST_CORNER:
                    if (gradient.shape === CSSRadialShape.CIRCLE) {
                        rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                    } else if (gradient.shape === CSSRadialShape.ELLIPSE) {
                        var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                        var _a = findCorner(width, height, x, y, true),
                            cx = _a[0],
                            cy = _a[1];
                        rx = distance(cx - x, (cy - y) / c);
                        ry = c * rx;
                    }
                    break;
                case CSSRadialExtent.FARTHEST_SIDE:
                    if (gradient.shape === CSSRadialShape.CIRCLE) {
                        rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                    } else if (gradient.shape === CSSRadialShape.ELLIPSE) {
                        rx = Math.max(Math.abs(x), Math.abs(x - width));
                        ry = Math.max(Math.abs(y), Math.abs(y - height));
                    }
                    break;
                case CSSRadialExtent.FARTHEST_CORNER:
                    if (gradient.shape === CSSRadialShape.CIRCLE) {
                        rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                    } else if (gradient.shape === CSSRadialShape.ELLIPSE) {
                        var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                        var _b = findCorner(width, height, x, y, false),
                            cx = _b[0],
                            cy = _b[1];
                        rx = distance(cx - x, (cy - y) / c);
                        ry = c * rx;
                    }
                    break;
            }
            if (Array.isArray(gradient.size)) {
                rx = getAbsoluteValue(gradient.size[0], width);
                ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
            }
            return [rx, ry];
        };
        var linearGradient = function(tokens) {
            var angle$1 = deg(180);
            var stops = [];
            parseFunctionArgs(tokens).forEach(function(arg, i) {
                if (i === 0) {
                    var firstToken = arg[0];
                    if (firstToken.type === TokenType.IDENT_TOKEN && firstToken.value === 'to') {
                        angle$1 = parseNamedSide(arg);
                        return;
                    } else if (isAngle(firstToken)) {
                        angle$1 = angle.parse(firstToken);
                        return;
                    }
                }
                var colorStop = parseColorStop(arg);
                stops.push(colorStop);
            });
            return {
                angle: angle$1,
                stops: stops,
                type: CSSImageType.LINEAR_GRADIENT
            };
        };
        var prefixLinearGradient = function(tokens) {
            var angle$1 = deg(180);
            var stops = [];
            parseFunctionArgs(tokens).forEach(function(arg, i) {
                if (i === 0) {
                    var firstToken = arg[0];
                    if (firstToken.type === TokenType.IDENT_TOKEN && ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                        angle$1 = parseNamedSide(arg);
                        return;
                    } else if (isAngle(firstToken)) {
                        angle$1 = (angle.parse(firstToken) + deg(270)) % deg(360);
                        return;
                    }
                }
                var colorStop = parseColorStop(arg);
                stops.push(colorStop);
            });
            return {
                angle: angle$1,
                stops: stops,
                type: CSSImageType.LINEAR_GRADIENT
            };
        };
        var testRangeBounds = function(document) {
            var TEST_HEIGHT = 123;
            if (document.createRange) {
                var range = document.createRange();
                if (range.getBoundingClientRect) {
                    var testElement = document.createElement('boundtest');
                    testElement.style.height = TEST_HEIGHT + "px";
                    testElement.style.display = 'block';
                    document.body.appendChild(testElement);
                    range.selectNode(testElement);
                    var rangeBounds = range.getBoundingClientRect();
                    var rangeHeight = Math.round(rangeBounds.height);
                    document.body.removeChild(testElement);
                    if (rangeHeight === TEST_HEIGHT) {
                        return true;
                    }
                }
            }
            return false;
        };
        var testCORS = function() {
            return typeof new Image().crossOrigin !== 'undefined';
        };
        var testResponseType = function() {
            return typeof new XMLHttpRequest().responseType === 'string';
        };
        var testSVG = function(document) {
            var img = new Image();
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                return false;
            }
            img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return false;
            }
            return true;
        };
        var isGreenPixel = function(data) {
            return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function(document) {
            var canvas = document.createElement('canvas');
            var size = 100;
            canvas.width = size;
            canvas.height = size;
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                return Promise.reject(false);
            }
            ctx.fillStyle = 'rgb(0, 255, 0)';
            ctx.fillRect(0, 0, size, size);
            var img = new Image();
            var greenImageSrc = canvas.toDataURL();
            img.src = greenImageSrc;
            var svg = createForeignObjectSVG(size, size, 0, 0, img);
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            return loadSerializedSVG(svg).then(function(img) {
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, size, size).data;
                ctx.fillStyle = 'red';
                ctx.fillRect(0, 0, size, size);
                var node = document.createElement('div');
                node.style.backgroundImage = "url(" + greenImageSrc + ")";
                node.style.height = size + "px";
                return isGreenPixel(data) ? loadSerializedSVG(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
            }).then(function(img) {
                ctx.drawImage(img, 0, 0);
                return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
            }).catch(function() {
                return false;
            });
        };
        var createForeignObjectSVG = function(width, height, x, y, node) {
            var xmlns = 'http://www.w3.org/2000/svg';
            var svg = document.createElementNS(xmlns, 'svg');
            var foreignObject = document.createElementNS(xmlns, 'foreignObject');
            svg.setAttributeNS(null, 'width', width.toString());
            svg.setAttributeNS(null, 'height', height.toString());
            foreignObject.setAttributeNS(null, 'width', '100%');
            foreignObject.setAttributeNS(null, 'height', '100%');
            foreignObject.setAttributeNS(null, 'x', x.toString());
            foreignObject.setAttributeNS(null, 'y', y.toString());
            foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
            svg.appendChild(foreignObject);
            foreignObject.appendChild(node);
            return svg;
        };
        var loadSerializedSVG = function(svg) {
            return new Promise(function(resolve, reject) {
                var img = new Image();
                img.onload = function() {
                    return resolve(img);
                };
                img.onerror = reject;
                img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
            });
        };
        var FEATURES = {
            get SUPPORT_RANGE_BOUNDS() {
                var value = testRangeBounds(document);
                Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
                    value: value
                });
                return value;
            },
            get SUPPORT_SVG_DRAWING() {
                var value = testSVG(document);
                Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
                    value: value
                });
                return value;
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
                Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
                    value: value
                });
                return value;
            },
            get SUPPORT_CORS_IMAGES() {
                var value = testCORS();
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
                    value: value
                });
                return value;
            },
            get SUPPORT_RESPONSE_TYPE() {
                var value = testResponseType();
                Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
                    value: value
                });
                return value;
            },
            get SUPPORT_CORS_XHR() {
                var value = 'withCredentials' in new XMLHttpRequest();
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
                    value: value
                });
                return value;
            }
        };
        var Logger = (function() {
            function Logger(_a) {
                var id = _a.id,
                    enabled = _a.enabled;
                this.id = id;
                this.enabled = false;
                this.start = Date.now();
            }
            Logger.prototype.debug = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                        console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(args));
                    } else {
                        this.info.apply(this, args);
                    }
                }
            };
            Logger.prototype.getTime = function() {
                return Date.now() - this.start;
            };
            Logger.create = function(options) {
                Logger.instances[options.id] = new Logger(options);
            };
            Logger.destroy = function(id) {
                delete Logger.instances[id];
            };
            Logger.getInstance = function(id) {
                var instance = Logger.instances[id];
                if (typeof instance === 'undefined') {
                    throw new Error("No logger instance found with id " + id);
                }
                return instance;
            };
            Logger.prototype.info = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                        console.info.apply(console, [this.id, this.getTime() + "ms"].concat(args));
                    }
                }
            };
            Logger.prototype.error = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.enabled) {
                    if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                        console.error.apply(console, [this.id, this.getTime() + "ms"].concat(args));
                    } else {
                        this.info.apply(this, args);
                    }
                }
            };
            Logger.instances = {};
            return Logger;
        }());
        var CacheStorage = (function() {
            function CacheStorage() {}
            CacheStorage.create = function(name, options) {
                return (CacheStorage._caches[name] = new Cache(name, options));
            };
            CacheStorage.destroy = function(name) {
                delete CacheStorage._caches[name];
            };
            CacheStorage.open = function(name) {
                var cache = CacheStorage._caches[name];
                if (typeof cache !== 'undefined') {
                    return cache;
                }
                throw new Error("Cache with key \"" + name + "\" not found");
            };
            CacheStorage.getOrigin = function(url) {
                var link = CacheStorage._link;
                if (!link) {
                    return 'about:blank';
                }
                link.href = url;
                link.href = link.href;
                return link.protocol + link.hostname + link.port;
            };
            CacheStorage.isSameOrigin = function(src) {
                return CacheStorage.getOrigin(src) === CacheStorage._origin;
            };
            CacheStorage.setContext = function(window) {
                CacheStorage._link = window.document.createElement('a');
                CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
            };
            CacheStorage.getInstance = function() {
                var current = CacheStorage._current;
                if (current === null) {
                    throw new Error("No cache instance attached");
                }
                return current;
            };
            CacheStorage.attachInstance = function(cache) {
                CacheStorage._current = cache;
            };
            CacheStorage.detachInstance = function() {
                CacheStorage._current = null;
            };
            CacheStorage._caches = {};
            CacheStorage._origin = 'about:blank';
            CacheStorage._current = null;
            return CacheStorage;
        }());
        var Cache = (function() {
            function Cache(id, options) {
                this.id = id;
                this._options = options;
                this._cache = {};
            }
            Cache.prototype.addImage = function(src) {
                var result = Promise.resolve();
                if (this.has(src)) {
                    return result;
                }
                if (isBlobImage(src) || isRenderable(src)) {
                    this._cache[src] = this.loadImage(src);
                    return result;
                }
                return result;
            };
            Cache.prototype.match = function(src) {
                return this._cache[src];
            };
            Cache.prototype.loadImage = function(key) {
                return __awaiter(this, void 0, void 0, function() {
                    var isSameOrigin, useCORS, useProxy, src;
                    var _this = this;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                isSameOrigin = CacheStorage.isSameOrigin(key);
                                useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                                useProxy = !isInlineImage(key) && !isSameOrigin && typeof this._options.proxy === 'string' && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                                if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !useProxy && !useCORS) {
                                    return [2];
                                }
                                src = key;
                                if (!useProxy) return [3, 2];
                                return [4, this.proxy(src)];
                            case 1:
                                src = _a.sent();
                                _a.label = 2;
                            case 2:
                                Logger.getInstance(this.id).debug("Added image " + key.substring(0, 256));
                                return [4, new Promise(function(resolve, reject) {
                                    var img = new Image();
                                    img.onload = function() {
                                        return resolve(img);
                                    };
                                    img.onerror = reject;
                                    if (isInlineBase64Image(src) || useCORS) {
                                        img.crossOrigin = 'anonymous';
                                    }
                                    img.src = src;
                                    if (img.complete === true) {
                                        setTimeout(function() {
                                            return resolve(img);
                                        }, 500);
                                    }
                                    if (_this._options.imageTimeout > 0) {
                                        setTimeout(function() {
                                            return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                                        }, _this._options.imageTimeout);
                                    }
                                })];
                            case 3:
                                return [2, _a.sent()];
                        }
                    });
                });
            };
            Cache.prototype.has = function(key) {
                return typeof this._cache[key] !== 'undefined';
            };
            Cache.prototype.keys = function() {
                return Promise.resolve(Object.keys(this._cache));
            };
            Cache.prototype.proxy = function(src) {
                var _this = this;
                var proxy = this._options.proxy;
                if (!proxy) {
                    throw new Error('No proxy defined');
                }
                var key = src.substring(0, 256);
                return new Promise(function(resolve, reject) {
                    var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            if (responseType === 'text') {
                                resolve(xhr.response);
                            } else {
                                var reader_1 = new FileReader();
                                reader_1.addEventListener('load', function() {
                                    return resolve(reader_1.result);
                                }, false);
                                reader_1.addEventListener('error', function(e) {
                                    return reject(e);
                                }, false);
                                reader_1.readAsDataURL(xhr.response);
                            }
                        } else {
                            reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                        }
                    };
                    xhr.onerror = reject;
                    xhr.open('GET', proxy + "?url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                    if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                        xhr.responseType = responseType;
                    }
                    if (_this._options.imageTimeout) {
                        var timeout_1 = _this._options.imageTimeout;
                        xhr.timeout = timeout_1;
                        xhr.ontimeout = function() {
                            return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                        };
                    }
                    xhr.send();
                });
            };
            return Cache;
        }());
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function(src) {
            return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function(src) {
            return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function(src) {
            return INLINE_BASE64.test(src);
        };
        var isBlobImage = function(src) {
            return src.substr(0, 4) === 'blob';
        };
        var isSVG = function(src) {
            return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
        };
        var webkitGradient = function(tokens) {
            var angle = deg(180);
            var stops = [];
            var type = CSSImageType.LINEAR_GRADIENT;
            var shape = CSSRadialShape.CIRCLE;
            var size = CSSRadialExtent.FARTHEST_CORNER;
            var position = [];
            parseFunctionArgs(tokens).forEach(function(arg, i) {
                var firstToken = arg[0];
                if (i === 0) {
                    if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                        type = CSSImageType.LINEAR_GRADIENT;
                        return;
                    } else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                        type = CSSImageType.RADIAL_GRADIENT;
                        return;
                    }
                }
                if (firstToken.type === TokenType.FUNCTION) {
                    if (firstToken.name === 'from') {
                        var color$1 = color.parse(firstToken.values[0]);
                        stops.push({
                            stop: ZERO_LENGTH,
                            color: color$1
                        });
                    } else if (firstToken.name === 'to') {
                        var color$1 = color.parse(firstToken.values[0]);
                        stops.push({
                            stop: HUNDRED_PERCENT,
                            color: color$1
                        });
                    } else if (firstToken.name === 'color-stop') {
                        var values = firstToken.values.filter(nonFunctionArgSeparator);
                        if (values.length === 2) {
                            var color$1 = color.parse(values[1]);
                            var stop_1 = values[0];
                            if (isNumberToken(stop_1)) {
                                stops.push({
                                    stop: {
                                        type: TokenType.PERCENTAGE_TOKEN,
                                        number: stop_1.number * 100,
                                        flags: stop_1.flags
                                    },
                                    color: color$1
                                });
                            }
                        }
                    }
                }
            });
            return type === CSSImageType.LINEAR_GRADIENT ? {
                angle: (angle + deg(180)) % deg(360),
                stops: stops,
                type: type
            } : {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: type
            };
        };
        var CLOSEST_SIDE = 'closest-side';
        var FARTHEST_SIDE = 'farthest-side';
        var CLOSEST_CORNER = 'closest-corner';
        var FARTHEST_CORNER = 'farthest-corner';
        var CIRCLE = 'circle';
        var ELLIPSE = 'ellipse';
        var COVER = 'cover';
        var CONTAIN = 'contain';
        var radialGradient = function(tokens) {
            var shape = CSSRadialShape.CIRCLE;
            var size = CSSRadialExtent.FARTHEST_CORNER;
            var stops = [];
            var position = [];
            parseFunctionArgs(tokens).forEach(function(arg, i) {
                var isColorStop = true;
                if (i === 0) {
                    var isAtPosition_1 = false;
                    isColorStop = arg.reduce(function(acc, token) {
                        if (isAtPosition_1) {
                            if (isIdentToken(token)) {
                                switch (token.value) {
                                    case 'center':
                                        position.push(FIFTY_PERCENT);
                                        return acc;
                                    case 'top':
                                    case 'left':
                                        position.push(ZERO_LENGTH);
                                        return acc;
                                    case 'right':
                                    case 'bottom':
                                        position.push(HUNDRED_PERCENT);
                                        return acc;
                                }
                            } else if (isLengthPercentage(token) || isLength(token)) {
                                position.push(token);
                            }
                        } else if (isIdentToken(token)) {
                            switch (token.value) {
                                case CIRCLE:
                                    shape = CSSRadialShape.CIRCLE;
                                    return false;
                                case ELLIPSE:
                                    shape = CSSRadialShape.ELLIPSE;
                                    return false;
                                case 'at':
                                    isAtPosition_1 = true;
                                    return false;
                                case CLOSEST_SIDE:
                                    size = CSSRadialExtent.CLOSEST_SIDE;
                                    return false;
                                case COVER:
                                case FARTHEST_SIDE:
                                    size = CSSRadialExtent.FARTHEST_SIDE;
                                    return false;
                                case CONTAIN:
                                case CLOSEST_CORNER:
                                    size = CSSRadialExtent.CLOSEST_CORNER;
                                    return false;
                                case FARTHEST_CORNER:
                                    size = CSSRadialExtent.FARTHEST_CORNER;
                                    return false;
                            }
                        } else if (isLength(token) || isLengthPercentage(token)) {
                            if (!Array.isArray(size)) {
                                size = [];
                            }
                            size.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                }
                if (isColorStop) {
                    var colorStop = parseColorStop(arg);
                    stops.push(colorStop);
                }
            });
            return {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: CSSImageType.RADIAL_GRADIENT
            };
        };
        var prefixRadialGradient = function(tokens) {
            var shape = CSSRadialShape.CIRCLE;
            var size = CSSRadialExtent.FARTHEST_CORNER;
            var stops = [];
            var position = [];
            parseFunctionArgs(tokens).forEach(function(arg, i) {
                var isColorStop = true;
                if (i === 0) {
                    isColorStop = arg.reduce(function(acc, token) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case 'center':
                                    position.push(FIFTY_PERCENT);
                                    return false;
                                case 'top':
                                case 'left':
                                    position.push(ZERO_LENGTH);
                                    return false;
                                case 'right':
                                case 'bottom':
                                    position.push(HUNDRED_PERCENT);
                                    return false;
                            }
                        } else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                } else if (i === 1) {
                    isColorStop = arg.reduce(function(acc, token) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case CIRCLE:
                                    shape = CSSRadialShape.CIRCLE;
                                    return false;
                                case ELLIPSE:
                                    shape = CSSRadialShape.ELLIPSE;
                                    return false;
                                case CONTAIN:
                                case CLOSEST_SIDE:
                                    size = CSSRadialExtent.CLOSEST_SIDE;
                                    return false;
                                case FARTHEST_SIDE:
                                    size = CSSRadialExtent.FARTHEST_SIDE;
                                    return false;
                                case CLOSEST_CORNER:
                                    size = CSSRadialExtent.CLOSEST_CORNER;
                                    return false;
                                case COVER:
                                case FARTHEST_CORNER:
                                    size = CSSRadialExtent.FARTHEST_CORNER;
                                    return false;
                            }
                        } else if (isLength(token) || isLengthPercentage(token)) {
                            if (!Array.isArray(size)) {
                                size = [];
                            }
                            size.push(token);
                            return false;
                        }
                        return acc;
                    }, isColorStop);
                }
                if (isColorStop) {
                    var colorStop = parseColorStop(arg);
                    stops.push(colorStop);
                }
            });
            return {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: CSSImageType.RADIAL_GRADIENT
            };
        };
        var CSSImageType;
        (function(CSSImageType) {
            CSSImageType[CSSImageType["URL"] = 0] = "URL";
            CSSImageType[CSSImageType["LINEAR_GRADIENT"] = 1] = "LINEAR_GRADIENT";
            CSSImageType[CSSImageType["RADIAL_GRADIENT"] = 2] = "RADIAL_GRADIENT";
        })(CSSImageType || (CSSImageType = {}));
        var isLinearGradient = function(background) {
            return background.type === CSSImageType.LINEAR_GRADIENT;
        };
        var isRadialGradient = function(background) {
            return background.type === CSSImageType.RADIAL_GRADIENT;
        };
        var CSSRadialShape;
        (function(CSSRadialShape) {
            CSSRadialShape[CSSRadialShape["CIRCLE"] = 0] = "CIRCLE";
            CSSRadialShape[CSSRadialShape["ELLIPSE"] = 1] = "ELLIPSE";
        })(CSSRadialShape || (CSSRadialShape = {}));
        var CSSRadialExtent;
        (function(CSSRadialExtent) {
            CSSRadialExtent[CSSRadialExtent["CLOSEST_SIDE"] = 0] = "CLOSEST_SIDE";
            CSSRadialExtent[CSSRadialExtent["FARTHEST_SIDE"] = 1] = "FARTHEST_SIDE";
            CSSRadialExtent[CSSRadialExtent["CLOSEST_CORNER"] = 2] = "CLOSEST_CORNER";
            CSSRadialExtent[CSSRadialExtent["FARTHEST_CORNER"] = 3] = "FARTHEST_CORNER";
        })(CSSRadialExtent || (CSSRadialExtent = {}));
        var image = {
            name: 'image',
            parse: function(value) {
                if (value.type === TokenType.URL_TOKEN) {
                    var image_1 = {
                        url: value.value,
                        type: CSSImageType.URL
                    };
                    CacheStorage.getInstance().addImage(value.value);
                    return image_1;
                }
                if (value.type === TokenType.FUNCTION) {
                    var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                    if (typeof imageFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
                    }
                    return imageFunction(value.values);
                }
                throw new Error("Unsupported image type");
            }
        };

        function isSupportedImage(value) {
            return value.type !== TokenType.FUNCTION || SUPPORTED_IMAGE_FUNCTIONS[value.name];
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
            'linear-gradient': linearGradient,
            '-moz-linear-gradient': prefixLinearGradient,
            '-ms-linear-gradient': prefixLinearGradient,
            '-o-linear-gradient': prefixLinearGradient,
            '-webkit-linear-gradient': prefixLinearGradient,
            'radial-gradient': radialGradient,
            '-moz-radial-gradient': prefixRadialGradient,
            '-ms-radial-gradient': prefixRadialGradient,
            '-o-radial-gradient': prefixRadialGradient,
            '-webkit-radial-gradient': prefixRadialGradient,
            '-webkit-gradient': webkitGradient
        };
        var backgroundImage = {
            name: 'background-image',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var first = tokens[0];
                if (first.type === TokenType.IDENT_TOKEN && first.value === 'none') {
                    return [];
                }
                return tokens.filter(function(value) {
                    return nonFunctionArgSeparator(value) && isSupportedImage(value);
                }).map(image.parse);
            }
        };
        var backgroundOrigin = {
            name: 'background-origin',
            initialValue: 'border-box',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return tokens.map(function(token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'padding-box':
                                return 1;
                            case 'content-box':
                                return 2;
                        }
                    }
                    return 0;
                });
            }
        };
        var backgroundPosition = {
            name: 'background-position',
            initialValue: '0% 0%',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                return parseFunctionArgs(tokens).map(function(values) {
                    return values.filter(isLengthPercentage);
                }).map(parseLengthPercentageTuple);
            }
        };
        var BACKGROUND_REPEAT;
        (function(BACKGROUND_REPEAT) {
            BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT"] = 0] = "REPEAT";
            BACKGROUND_REPEAT[BACKGROUND_REPEAT["NO_REPEAT"] = 1] = "NO_REPEAT";
            BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT_X"] = 2] = "REPEAT_X";
            BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT_Y"] = 3] = "REPEAT_Y";
        })(BACKGROUND_REPEAT || (BACKGROUND_REPEAT = {}));
        var backgroundRepeat = {
            name: 'background-repeat',
            initialValue: 'repeat',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return parseFunctionArgs(tokens).map(function(values) {
                    return values.filter(isIdentToken).map(function(token) {
                        return token.value;
                    }).join(' ');
                }).map(parseBackgroundRepeat);
            }
        };
        var parseBackgroundRepeat = function(value) {
            switch (value) {
                case 'no-repeat':
                    return BACKGROUND_REPEAT.NO_REPEAT;
                case 'repeat-x':
                case 'repeat no-repeat':
                    return BACKGROUND_REPEAT.REPEAT_X;
                case 'repeat-y':
                case 'no-repeat repeat':
                    return BACKGROUND_REPEAT.REPEAT_Y;
                case 'repeat':
                default:
                    return BACKGROUND_REPEAT.REPEAT;
            }
        };
        var BACKGROUND_SIZE;
        (function(BACKGROUND_SIZE) {
            BACKGROUND_SIZE["AUTO"] = "auto";
            BACKGROUND_SIZE["CONTAIN"] = "contain";
            BACKGROUND_SIZE["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
            name: 'background-size',
            initialValue: '0',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return parseFunctionArgs(tokens).map(function(values) {
                    return values.filter(isBackgroundSizeInfoToken);
                });
            }
        };
        var isBackgroundSizeInfoToken = function(value) {
            return isIdentToken(value) || isLengthPercentage(value);
        };
        var borderColorForSide = function(side) {
            return ({
                name: "border-" + side + "-color",
                initialValue: 'transparent',
                prefix: false,
                type: PropertyDescriptorParsingType.TYPE_VALUE,
                format: 'color'
            });
        };
        var borderTopColor = borderColorForSide('top');
        var borderRightColor = borderColorForSide('right');
        var borderBottomColor = borderColorForSide('bottom');
        var borderLeftColor = borderColorForSide('left');
        var borderRadiusForSide = function(side) {
            return ({
                name: "border-radius-" + side,
                initialValue: '0 0',
                prefix: false,
                type: PropertyDescriptorParsingType.LIST,
                parse: function(tokens) {
                    return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
                }
            });
        };
        var borderTopLeftRadius = borderRadiusForSide('top-left');
        var borderTopRightRadius = borderRadiusForSide('top-right');
        var borderBottomRightRadius = borderRadiusForSide('bottom-right');
        var borderBottomLeftRadius = borderRadiusForSide('bottom-left');
        var BORDER_STYLE;
        (function(BORDER_STYLE) {
            BORDER_STYLE[BORDER_STYLE["NONE"] = 0] = "NONE";
            BORDER_STYLE[BORDER_STYLE["SOLID"] = 1] = "SOLID";
        })(BORDER_STYLE || (BORDER_STYLE = {}));
        var borderStyleForSide = function(side) {
            return ({
                name: "border-" + side + "-style",
                initialValue: 'solid',
                prefix: false,
                type: PropertyDescriptorParsingType.IDENT_VALUE,
                parse: function(style) {
                    switch (style) {
                        case 'none':
                            return BORDER_STYLE.NONE;
                    }
                    return BORDER_STYLE.SOLID;
                }
            });
        };
        var borderTopStyle = borderStyleForSide('top');
        var borderRightStyle = borderStyleForSide('right');
        var borderBottomStyle = borderStyleForSide('bottom');
        var borderLeftStyle = borderStyleForSide('left');
        var borderWidthForSide = function(side) {
            return ({
                name: "border-" + side + "-width",
                initialValue: '0',
                type: PropertyDescriptorParsingType.VALUE,
                prefix: false,
                parse: function(token) {
                    if (isDimensionToken(token)) {
                        return token.number;
                    }
                    return 0;
                }
            });
        };
        var borderTopWidth = borderWidthForSide('top');
        var borderRightWidth = borderWidthForSide('right');
        var borderBottomWidth = borderWidthForSide('bottom');
        var borderLeftWidth = borderWidthForSide('left');
        var color$1 = {
            name: "color",
            initialValue: 'transparent',
            prefix: false,
            type: PropertyDescriptorParsingType.TYPE_VALUE,
            format: 'color'
        };
        var display = {
            name: 'display',
            initialValue: 'inline-block',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return tokens.filter(isIdentToken).reduce(function(bit, token) {
                    return bit | parseDisplayValue(token.value);
                }, 0);
            }
        };
        var parseDisplayValue = function(display) {
            switch (display) {
                case 'block':
                    return 2;
                case 'inline':
                    return 4;
                case 'run-in':
                    return 8;
                case 'flow':
                    return 16;
                case 'flow-root':
                    return 32;
                case 'table':
                    return 64;
                case 'flex':
                case '-webkit-flex':
                    return 128;
                case 'grid':
                case '-ms-grid':
                    return 256;
                case 'ruby':
                    return 512;
                case 'subgrid':
                    return 1024;
                case 'list-item':
                    return 2048;
                case 'table-row-group':
                    return 4096;
                case 'table-header-group':
                    return 8192;
                case 'table-footer-group':
                    return 16384;
                case 'table-row':
                    return 32768;
                case 'table-cell':
                    return 65536;
                case 'table-column-group':
                    return 131072;
                case 'table-column':
                    return 262144;
                case 'table-caption':
                    return 524288;
                case 'ruby-base':
                    return 1048576;
                case 'ruby-text':
                    return 2097152;
                case 'ruby-base-container':
                    return 4194304;
                case 'ruby-text-container':
                    return 8388608;
                case 'contents':
                    return 16777216;
                case 'inline-block':
                    return 33554432;
                case 'inline-list-item':
                    return 67108864;
                case 'inline-table':
                    return 134217728;
                case 'inline-flex':
                    return 268435456;
                case 'inline-grid':
                    return 536870912;
            }
            return 0;
        };
        var FLOAT;
        (function(FLOAT) {
            FLOAT[FLOAT["NONE"] = 0] = "NONE";
            FLOAT[FLOAT["LEFT"] = 1] = "LEFT";
            FLOAT[FLOAT["RIGHT"] = 2] = "RIGHT";
            FLOAT[FLOAT["INLINE_START"] = 3] = "INLINE_START";
            FLOAT[FLOAT["INLINE_END"] = 4] = "INLINE_END";
        })(FLOAT || (FLOAT = {}));
        var float = {
            name: 'float',
            initialValue: 'none',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(float) {
                switch (float) {
                    case 'left':
                        return FLOAT.LEFT;
                    case 'right':
                        return FLOAT.RIGHT;
                    case 'inline-start':
                        return FLOAT.INLINE_START;
                    case 'inline-end':
                        return FLOAT.INLINE_END;
                }
                return FLOAT.NONE;
            }
        };
        var letterSpacing = {
            name: 'letter-spacing',
            initialValue: '0',
            prefix: false,
            type: PropertyDescriptorParsingType.VALUE,
            parse: function(token) {
                if (token.type === TokenType.IDENT_TOKEN && token.value === 'normal') {
                    return 0;
                }
                if (token.type === TokenType.NUMBER_TOKEN) {
                    return token.number;
                }
                if (token.type === TokenType.DIMENSION_TOKEN) {
                    return token.number;
                }
                return 0;
            }
        };
        var LINE_BREAK;
        (function(LINE_BREAK) {
            LINE_BREAK["NORMAL"] = "normal";
            LINE_BREAK["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
            name: 'line-break',
            initialValue: 'normal',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(lineBreak) {
                switch (lineBreak) {
                    case 'strict':
                        return LINE_BREAK.STRICT;
                    case 'normal':
                    default:
                        return LINE_BREAK.NORMAL;
                }
            }
        };
        var lineHeight = {
            name: 'line-height',
            initialValue: 'normal',
            prefix: false,
            type: PropertyDescriptorParsingType.TOKEN_VALUE
        };
        var computeLineHeight = function(token, fontSize) {
            if (isIdentToken(token) && token.value === 'normal') {
                return 1.2 * fontSize;
            } else if (token.type === TokenType.NUMBER_TOKEN) {
                return fontSize * token.number;
            } else if (isLengthPercentage(token)) {
                return getAbsoluteValue(token, fontSize);
            }
            return fontSize;
        };
        var listStyleImage = {
            name: 'list-style-image',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.VALUE,
            prefix: false,
            parse: function(token) {
                if (token.type === TokenType.IDENT_TOKEN && token.value === 'none') {
                    return null;
                }
                return image.parse(token);
            }
        };
        var LIST_STYLE_POSITION;
        (function(LIST_STYLE_POSITION) {
            LIST_STYLE_POSITION[LIST_STYLE_POSITION["INSIDE"] = 0] = "INSIDE";
            LIST_STYLE_POSITION[LIST_STYLE_POSITION["OUTSIDE"] = 1] = "OUTSIDE";
        })(LIST_STYLE_POSITION || (LIST_STYLE_POSITION = {}));
        var listStylePosition = {
            name: 'list-style-position',
            initialValue: 'outside',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(position) {
                switch (position) {
                    case 'inside':
                        return LIST_STYLE_POSITION.INSIDE;
                    case 'outside':
                    default:
                        return LIST_STYLE_POSITION.OUTSIDE;
                }
            }
        };
        var LIST_STYLE_TYPE;
        (function(LIST_STYLE_TYPE) {
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["NONE"] = -1] = "NONE";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISC"] = 0] = "DISC";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CIRCLE"] = 1] = "CIRCLE";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["SQUARE"] = 2] = "SQUARE";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DECIMAL"] = 3] = "DECIMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_DECIMAL"] = 4] = "CJK_DECIMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DECIMAL_LEADING_ZERO"] = 5] = "DECIMAL_LEADING_ZERO";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ROMAN"] = 6] = "LOWER_ROMAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ROMAN"] = 7] = "UPPER_ROMAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_GREEK"] = 8] = "LOWER_GREEK";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ALPHA"] = 9] = "LOWER_ALPHA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ALPHA"] = 10] = "UPPER_ALPHA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["ARABIC_INDIC"] = 11] = "ARABIC_INDIC";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["ARMENIAN"] = 12] = "ARMENIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["BENGALI"] = 13] = "BENGALI";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CAMBODIAN"] = 14] = "CAMBODIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_EARTHLY_BRANCH"] = 15] = "CJK_EARTHLY_BRANCH";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_HEAVENLY_STEM"] = 16] = "CJK_HEAVENLY_STEM";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_IDEOGRAPHIC"] = 17] = "CJK_IDEOGRAPHIC";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DEVANAGARI"] = 18] = "DEVANAGARI";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["ETHIOPIC_NUMERIC"] = 19] = "ETHIOPIC_NUMERIC";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["GEORGIAN"] = 20] = "GEORGIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["GUJARATI"] = 21] = "GUJARATI";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["GURMUKHI"] = 22] = "GURMUKHI";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["HEBREW"] = 22] = "HEBREW";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["HIRAGANA"] = 23] = "HIRAGANA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["HIRAGANA_IROHA"] = 24] = "HIRAGANA_IROHA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["JAPANESE_FORMAL"] = 25] = "JAPANESE_FORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["JAPANESE_INFORMAL"] = 26] = "JAPANESE_INFORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KANNADA"] = 27] = "KANNADA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KATAKANA"] = 28] = "KATAKANA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KATAKANA_IROHA"] = 29] = "KATAKANA_IROHA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KHMER"] = 30] = "KHMER";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANGUL_FORMAL"] = 31] = "KOREAN_HANGUL_FORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANJA_FORMAL"] = 32] = "KOREAN_HANJA_FORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANJA_INFORMAL"] = 33] = "KOREAN_HANJA_INFORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["LAO"] = 34] = "LAO";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ARMENIAN"] = 35] = "LOWER_ARMENIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["MALAYALAM"] = 36] = "MALAYALAM";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["MONGOLIAN"] = 37] = "MONGOLIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["MYANMAR"] = 38] = "MYANMAR";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["ORIYA"] = 39] = "ORIYA";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["PERSIAN"] = 40] = "PERSIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["SIMP_CHINESE_FORMAL"] = 41] = "SIMP_CHINESE_FORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["SIMP_CHINESE_INFORMAL"] = 42] = "SIMP_CHINESE_INFORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["TAMIL"] = 43] = "TAMIL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["TELUGU"] = 44] = "TELUGU";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["THAI"] = 45] = "THAI";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["TIBETAN"] = 46] = "TIBETAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["TRAD_CHINESE_FORMAL"] = 47] = "TRAD_CHINESE_FORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["TRAD_CHINESE_INFORMAL"] = 48] = "TRAD_CHINESE_INFORMAL";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ARMENIAN"] = 49] = "UPPER_ARMENIAN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISCLOSURE_OPEN"] = 50] = "DISCLOSURE_OPEN";
            LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISCLOSURE_CLOSED"] = 51] = "DISCLOSURE_CLOSED";
        })(LIST_STYLE_TYPE || (LIST_STYLE_TYPE = {}));
        var listStyleType = {
            name: 'list-style-type',
            initialValue: 'none',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(type) {
                switch (type) {
                    case 'disc':
                        return LIST_STYLE_TYPE.DISC;
                    case 'circle':
                        return LIST_STYLE_TYPE.CIRCLE;
                    case 'square':
                        return LIST_STYLE_TYPE.SQUARE;
                    case 'decimal':
                        return LIST_STYLE_TYPE.DECIMAL;
                    case 'cjk-decimal':
                        return LIST_STYLE_TYPE.CJK_DECIMAL;
                    case 'decimal-leading-zero':
                        return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
                    case 'lower-roman':
                        return LIST_STYLE_TYPE.LOWER_ROMAN;
                    case 'upper-roman':
                        return LIST_STYLE_TYPE.UPPER_ROMAN;
                    case 'lower-greek':
                        return LIST_STYLE_TYPE.LOWER_GREEK;
                    case 'lower-alpha':
                        return LIST_STYLE_TYPE.LOWER_ALPHA;
                    case 'upper-alpha':
                        return LIST_STYLE_TYPE.UPPER_ALPHA;
                    case 'arabic-indic':
                        return LIST_STYLE_TYPE.ARABIC_INDIC;
                    case 'armenian':
                        return LIST_STYLE_TYPE.ARMENIAN;
                    case 'bengali':
                        return LIST_STYLE_TYPE.BENGALI;
                    case 'cambodian':
                        return LIST_STYLE_TYPE.CAMBODIAN;
                    case 'cjk-earthly-branch':
                        return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
                    case 'cjk-heavenly-stem':
                        return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
                    case 'cjk-ideographic':
                        return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
                    case 'devanagari':
                        return LIST_STYLE_TYPE.DEVANAGARI;
                    case 'ethiopic-numeric':
                        return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
                    case 'georgian':
                        return LIST_STYLE_TYPE.GEORGIAN;
                    case 'gujarati':
                        return LIST_STYLE_TYPE.GUJARATI;
                    case 'gurmukhi':
                        return LIST_STYLE_TYPE.GURMUKHI;
                    case 'hebrew':
                        return LIST_STYLE_TYPE.HEBREW;
                    case 'hiragana':
                        return LIST_STYLE_TYPE.HIRAGANA;
                    case 'hiragana-iroha':
                        return LIST_STYLE_TYPE.HIRAGANA_IROHA;
                    case 'japanese-formal':
                        return LIST_STYLE_TYPE.JAPANESE_FORMAL;
                    case 'japanese-informal':
                        return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
                    case 'kannada':
                        return LIST_STYLE_TYPE.KANNADA;
                    case 'katakana':
                        return LIST_STYLE_TYPE.KATAKANA;
                    case 'katakana-iroha':
                        return LIST_STYLE_TYPE.KATAKANA_IROHA;
                    case 'khmer':
                        return LIST_STYLE_TYPE.KHMER;
                    case 'korean-hangul-formal':
                        return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
                    case 'korean-hanja-formal':
                        return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
                    case 'korean-hanja-informal':
                        return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
                    case 'lao':
                        return LIST_STYLE_TYPE.LAO;
                    case 'lower-armenian':
                        return LIST_STYLE_TYPE.LOWER_ARMENIAN;
                    case 'malayalam':
                        return LIST_STYLE_TYPE.MALAYALAM;
                    case 'mongolian':
                        return LIST_STYLE_TYPE.MONGOLIAN;
                    case 'myanmar':
                        return LIST_STYLE_TYPE.MYANMAR;
                    case 'oriya':
                        return LIST_STYLE_TYPE.ORIYA;
                    case 'persian':
                        return LIST_STYLE_TYPE.PERSIAN;
                    case 'simp-chinese-formal':
                        return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
                    case 'simp-chinese-informal':
                        return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
                    case 'tamil':
                        return LIST_STYLE_TYPE.TAMIL;
                    case 'telugu':
                        return LIST_STYLE_TYPE.TELUGU;
                    case 'thai':
                        return LIST_STYLE_TYPE.THAI;
                    case 'tibetan':
                        return LIST_STYLE_TYPE.TIBETAN;
                    case 'trad-chinese-formal':
                        return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
                    case 'trad-chinese-informal':
                        return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
                    case 'upper-armenian':
                        return LIST_STYLE_TYPE.UPPER_ARMENIAN;
                    case 'disclosure-open':
                        return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
                    case 'disclosure-closed':
                        return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
                    case 'none':
                    default:
                        return LIST_STYLE_TYPE.NONE;
                }
            }
        };
        var marginForSide = function(side) {
            return ({
                name: "margin-" + side,
                initialValue: '0',
                prefix: false,
                type: PropertyDescriptorParsingType.TOKEN_VALUE
            });
        };
        var marginTop = marginForSide('top');
        var marginRight = marginForSide('right');
        var marginBottom = marginForSide('bottom');
        var marginLeft = marginForSide('left');
        var OVERFLOW;
        (function(OVERFLOW) {
            OVERFLOW[OVERFLOW["VISIBLE"] = 0] = "VISIBLE";
            OVERFLOW[OVERFLOW["HIDDEN"] = 1] = "HIDDEN";
            OVERFLOW[OVERFLOW["SCROLL"] = 2] = "SCROLL";
            OVERFLOW[OVERFLOW["AUTO"] = 3] = "AUTO";
        })(OVERFLOW || (OVERFLOW = {}));
        var overflow = {
            name: 'overflow',
            initialValue: 'visible',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return tokens.filter(isIdentToken).map(function(overflow) {
                    switch (overflow.value) {
                        case 'hidden':
                            return OVERFLOW.HIDDEN;
                        case 'scroll':
                            return OVERFLOW.SCROLL;
                        case 'auto':
                            return OVERFLOW.AUTO;
                        case 'visible':
                        default:
                            return OVERFLOW.VISIBLE;
                    }
                });
            }
        };
        var OVERFLOW_WRAP;
        (function(OVERFLOW_WRAP) {
            OVERFLOW_WRAP["NORMAL"] = "normal";
            OVERFLOW_WRAP["BREAK_WORD"] = "break-word";
        })(OVERFLOW_WRAP || (OVERFLOW_WRAP = {}));
        var overflowWrap = {
            name: 'overflow-wrap',
            initialValue: 'normal',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(overflow) {
                switch (overflow) {
                    case 'break-word':
                        return OVERFLOW_WRAP.BREAK_WORD;
                    case 'normal':
                    default:
                        return OVERFLOW_WRAP.NORMAL;
                }
            }
        };
        var paddingForSide = function(side) {
            return ({
                name: "padding-" + side,
                initialValue: '0',
                prefix: false,
                type: PropertyDescriptorParsingType.TYPE_VALUE,
                format: 'length-percentage'
            });
        };
        var paddingTop = paddingForSide('top');
        var paddingRight = paddingForSide('right');
        var paddingBottom = paddingForSide('bottom');
        var paddingLeft = paddingForSide('left');
        var TEXT_ALIGN;
        (function(TEXT_ALIGN) {
            TEXT_ALIGN[TEXT_ALIGN["LEFT"] = 0] = "LEFT";
            TEXT_ALIGN[TEXT_ALIGN["CENTER"] = 1] = "CENTER";
            TEXT_ALIGN[TEXT_ALIGN["RIGHT"] = 2] = "RIGHT";
        })(TEXT_ALIGN || (TEXT_ALIGN = {}));
        var textAlign = {
            name: 'text-align',
            initialValue: 'left',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(textAlign) {
                switch (textAlign) {
                    case 'right':
                        return TEXT_ALIGN.RIGHT;
                    case 'center':
                    case 'justify':
                        return TEXT_ALIGN.CENTER;
                    case 'left':
                    default:
                        return TEXT_ALIGN.LEFT;
                }
            }
        };
        var POSITION;
        (function(POSITION) {
            POSITION[POSITION["STATIC"] = 0] = "STATIC";
            POSITION[POSITION["RELATIVE"] = 1] = "RELATIVE";
            POSITION[POSITION["ABSOLUTE"] = 2] = "ABSOLUTE";
            POSITION[POSITION["FIXED"] = 3] = "FIXED";
            POSITION[POSITION["STICKY"] = 4] = "STICKY";
        })(POSITION || (POSITION = {}));
        var position = {
            name: 'position',
            initialValue: 'static',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(position) {
                switch (position) {
                    case 'relative':
                        return POSITION.RELATIVE;
                    case 'absolute':
                        return POSITION.ABSOLUTE;
                    case 'fixed':
                        return POSITION.FIXED;
                    case 'sticky':
                        return POSITION.STICKY;
                }
                return POSITION.STATIC;
            }
        };
        var textShadow = {
            name: 'text-shadow',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                    return [];
                }
                return parseFunctionArgs(tokens).map(function(values) {
                    var shadow = {
                        color: COLORS.TRANSPARENT,
                        offsetX: ZERO_LENGTH,
                        offsetY: ZERO_LENGTH,
                        blur: ZERO_LENGTH
                    };
                    var c = 0;
                    for (var i = 0; i < values.length; i++) {
                        var token = values[i];
                        if (isLength(token)) {
                            if (c === 0) {
                                shadow.offsetX = token;
                            } else if (c === 1) {
                                shadow.offsetY = token;
                            } else {
                                shadow.blur = token;
                            }
                            c++;
                        } else {
                            shadow.color = color.parse(token);
                        }
                    }
                    return shadow;
                });
            }
        };
        var TEXT_TRANSFORM;
        (function(TEXT_TRANSFORM) {
            TEXT_TRANSFORM[TEXT_TRANSFORM["NONE"] = 0] = "NONE";
            TEXT_TRANSFORM[TEXT_TRANSFORM["LOWERCASE"] = 1] = "LOWERCASE";
            TEXT_TRANSFORM[TEXT_TRANSFORM["UPPERCASE"] = 2] = "UPPERCASE";
            TEXT_TRANSFORM[TEXT_TRANSFORM["CAPITALIZE"] = 3] = "CAPITALIZE";
        })(TEXT_TRANSFORM || (TEXT_TRANSFORM = {}));
        var textTransform = {
            name: 'text-transform',
            initialValue: 'none',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(textTransform) {
                switch (textTransform) {
                    case 'uppercase':
                        return TEXT_TRANSFORM.UPPERCASE;
                    case 'lowercase':
                        return TEXT_TRANSFORM.LOWERCASE;
                    case 'capitalize':
                        return TEXT_TRANSFORM.CAPITALIZE;
                }
                return TEXT_TRANSFORM.NONE;
            }
        };
        var transform = {
            name: 'transform',
            initialValue: 'none',
            prefix: true,
            type: PropertyDescriptorParsingType.VALUE,
            parse: function(token) {
                if (token.type === TokenType.IDENT_TOKEN && token.value === 'none') {
                    return null;
                }
                if (token.type === TokenType.FUNCTION) {
                    var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                    if (typeof transformFunction === 'undefined') {
                        throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
                    }
                    return transformFunction(token.values);
                }
                return null;
            }
        };
        var matrix = function(args) {
            var values = args.filter(function(arg) {
                return arg.type === TokenType.NUMBER_TOKEN;
            }).map(function(arg) {
                return arg.number;
            });
            return values.length === 6 ? values : null;
        };
        var matrix3d = function(args) {
            var values = args.filter(function(arg) {
                return arg.type === TokenType.NUMBER_TOKEN;
            }).map(function(arg) {
                return arg.number;
            });
            var a1 = values[0],
                b1 = values[1],
                _a = values[2],
                _b = values[3],
                a2 = values[4],
                b2 = values[5],
                _c = values[6],
                _d = values[7],
                _e = values[8],
                _f = values[9],
                _g = values[10],
                _h = values[11],
                a4 = values[12],
                b4 = values[13],
                _j = values[14],
                _k = values[15];
            return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
            matrix: matrix,
            matrix3d: matrix3d
        };
        var DEFAULT_VALUE = {
            type: TokenType.PERCENTAGE_TOKEN,
            number: 50,
            flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
            name: 'transform-origin',
            initialValue: '50% 50%',
            prefix: true,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                var origins = tokens.filter(isLengthPercentage);
                if (origins.length !== 2) {
                    return DEFAULT;
                }
                return [origins[0], origins[1]];
            }
        };
        var VISIBILITY;
        (function(VISIBILITY) {
            VISIBILITY[VISIBILITY["VISIBLE"] = 0] = "VISIBLE";
            VISIBILITY[VISIBILITY["HIDDEN"] = 1] = "HIDDEN";
            VISIBILITY[VISIBILITY["COLLAPSE"] = 2] = "COLLAPSE";
        })(VISIBILITY || (VISIBILITY = {}));
        var visibility = {
            name: 'visible',
            initialValue: 'none',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(visibility) {
                switch (visibility) {
                    case 'hidden':
                        return VISIBILITY.HIDDEN;
                    case 'collapse':
                        return VISIBILITY.COLLAPSE;
                    case 'visible':
                    default:
                        return VISIBILITY.VISIBLE;
                }
            }
        };
        var WORD_BREAK;
        (function(WORD_BREAK) {
            WORD_BREAK["NORMAL"] = "normal";
            WORD_BREAK["BREAK_ALL"] = "break-all";
            WORD_BREAK["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
            name: 'word-break',
            initialValue: 'normal',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(wordBreak) {
                switch (wordBreak) {
                    case 'break-all':
                        return WORD_BREAK.BREAK_ALL;
                    case 'keep-all':
                        return WORD_BREAK.KEEP_ALL;
                    case 'normal':
                    default:
                        return WORD_BREAK.NORMAL;
                }
            }
        };
        var zIndex = {
            name: 'z-index',
            initialValue: 'auto',
            prefix: false,
            type: PropertyDescriptorParsingType.VALUE,
            parse: function(token) {
                if (token.type === TokenType.IDENT_TOKEN) {
                    return {
                        auto: true,
                        order: 0
                    };
                }
                if (isNumberToken(token)) {
                    return {
                        auto: false,
                        order: token.number
                    };
                }
                throw new Error("Invalid z-index number parsed");
            }
        };
        var opacity = {
            name: 'opacity',
            initialValue: '1',
            type: PropertyDescriptorParsingType.VALUE,
            prefix: false,
            parse: function(token) {
                if (isNumberToken(token)) {
                    return token.number;
                }
                return 1;
            }
        };
        var textDecorationColor = {
            name: "text-decoration-color",
            initialValue: 'transparent',
            prefix: false,
            type: PropertyDescriptorParsingType.TYPE_VALUE,
            format: 'color'
        };
        var textDecorationLine = {
            name: 'text-decoration-line',
            initialValue: 'none',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                return tokens.filter(isIdentToken).map(function(token) {
                    switch (token.value) {
                        case 'underline':
                            return 1;
                        case 'overline':
                            return 2;
                        case 'line-through':
                            return 3;
                        case 'none':
                            return 4;
                    }
                    return 0;
                }).filter(function(line) {
                    return line !== 0;
                });
            }
        };
        var fontFamily = {
            name: "font-family",
            initialValue: '',
            prefix: false,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                var accumulator = [];
                var results = [];
                tokens.forEach(function(token) {
                    switch (token.type) {
                        case TokenType.IDENT_TOKEN:
                        case TokenType.STRING_TOKEN:
                            accumulator.push(token.value);
                            break;
                        case TokenType.NUMBER_TOKEN:
                            accumulator.push(token.number.toString());
                            break;
                        case TokenType.COMMA_TOKEN:
                            results.push(accumulator.join(' '));
                            accumulator.length = 0;
                            break;
                    }
                });
                if (accumulator.length) {
                    results.push(accumulator.join(' '));
                }
                return results.map(function(result) {
                    return (result.indexOf(' ') === -1 ? result : "'" + result + "'");
                });
            }
        };
        var fontSize = {
            name: "font-size",
            initialValue: '0',
            prefix: false,
            type: PropertyDescriptorParsingType.TYPE_VALUE,
            format: 'length'
        };
        var fontWeight = {
            name: 'font-weight',
            initialValue: 'normal',
            type: PropertyDescriptorParsingType.VALUE,
            prefix: false,
            parse: function(token) {
                if (isNumberToken(token)) {
                    return token.number;
                }
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'bold':
                            return 700;
                        case 'normal':
                        default:
                            return 400;
                    }
                }
                return 400;
            }
        };
        var fontVariant = {
            name: 'font-variant',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                return tokens.filter(isIdentToken).map(function(token) {
                    return token.value;
                });
            }
        };
        var FONT_STYLE;
        (function(FONT_STYLE) {
            FONT_STYLE["NORMAL"] = "normal";
            FONT_STYLE["ITALIC"] = "italic";
            FONT_STYLE["OBLIQUE"] = "oblique";
        })(FONT_STYLE || (FONT_STYLE = {}));
        var fontStyle = {
            name: 'font-style',
            initialValue: 'normal',
            prefix: false,
            type: PropertyDescriptorParsingType.IDENT_VALUE,
            parse: function(overflow) {
                switch (overflow) {
                    case 'oblique':
                        return FONT_STYLE.OBLIQUE;
                    case 'italic':
                        return FONT_STYLE.ITALIC;
                    case 'normal':
                    default:
                        return FONT_STYLE.NORMAL;
                }
            }
        };
        var contains = function(bit, value) {
            return (bit & value) !== 0;
        };
        var content = {
            name: 'content',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var first = tokens[0];
                if (first.type === TokenType.IDENT_TOKEN && first.value === 'none') {
                    return [];
                }
                return tokens;
            }
        };
        var counterIncrement = {
            name: 'counter-increment',
            initialValue: 'none',
            prefix: true,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                if (tokens.length === 0) {
                    return null;
                }
                var first = tokens[0];
                if (first.type === TokenType.IDENT_TOKEN && first.value === 'none') {
                    return null;
                }
                var increments = [];
                var filtered = tokens.filter(nonWhiteSpace);
                for (var i = 0; i < filtered.length; i++) {
                    var counter = filtered[i];
                    var next = filtered[i + 1];
                    if (counter.type === TokenType.IDENT_TOKEN) {
                        var increment = next && isNumberToken(next) ? next.number : 1;
                        increments.push({
                            counter: counter.value,
                            increment: increment
                        });
                    }
                }
                return increments;
            }
        };
        var counterReset = {
            name: 'counter-reset',
            initialValue: 'none',
            prefix: true,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                if (tokens.length === 0) {
                    return [];
                }
                var resets = [];
                var filtered = tokens.filter(nonWhiteSpace);
                for (var i = 0; i < filtered.length; i++) {
                    var counter = filtered[i];
                    var next = filtered[i + 1];
                    if (isIdentToken(counter) && counter.value !== 'none') {
                        var reset = next && isNumberToken(next) ? next.number : 0;
                        resets.push({
                            counter: counter.value,
                            reset: reset
                        });
                    }
                }
                return resets;
            }
        };
        var quotes = {
            name: 'quotes',
            initialValue: 'none',
            prefix: true,
            type: PropertyDescriptorParsingType.LIST,
            parse: function(tokens) {
                if (tokens.length === 0) {
                    return null;
                }
                var first = tokens[0];
                if (first.type === TokenType.IDENT_TOKEN && first.value === 'none') {
                    return null;
                }
                var quotes = [];
                var filtered = tokens.filter(isStringToken);
                if (filtered.length % 2 !== 0) {
                    return null;
                }
                for (var i = 0; i < filtered.length; i += 2) {
                    var open_1 = filtered[i].value;
                    var close_1 = filtered[i + 1].value;
                    quotes.push({
                        open: open_1,
                        close: close_1
                    });
                }
                return quotes;
            }
        };
        var getQuote = function(quotes, depth, open) {
            if (!quotes) {
                return '';
            }
            var quote = quotes[Math.min(depth, quotes.length - 1)];
            if (!quote) {
                return '';
            }
            return open ? quote.open : quote.close;
        };
        var boxShadow = {
            name: 'box-shadow',
            initialValue: 'none',
            type: PropertyDescriptorParsingType.LIST,
            prefix: false,
            parse: function(tokens) {
                if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                    return [];
                }
                return parseFunctionArgs(tokens).map(function(values) {
                    var shadow = {
                        color: 0x000000ff,
                        offsetX: ZERO_LENGTH,
                        offsetY: ZERO_LENGTH,
                        blur: ZERO_LENGTH,
                        spread: ZERO_LENGTH,
                        inset: false
                    };
                    var c = 0;
                    for (var i = 0; i < values.length; i++) {
                        var token = values[i];
                        if (isIdentWithValue(token, 'inset')) {
                            shadow.inset = true;
                        } else if (isLength(token)) {
                            if (c === 0) {
                                shadow.offsetX = token;
                            } else if (c === 1) {
                                shadow.offsetY = token;
                            } else if (c === 2) {
                                shadow.blur = token;
                            } else {
                                shadow.spread = token;
                            }
                            c++;
                        } else {
                            shadow.color = color.parse(token);
                        }
                    }
                    return shadow;
                });
            }
        };
        var CSSParsedDeclaration = (function() {
            function CSSParsedDeclaration(declaration) {
                this.backgroundClip = parse(backgroundClip, declaration.backgroundClip);
                this.backgroundColor = parse(backgroundColor, declaration.backgroundColor);
                this.backgroundImage = parse(backgroundImage, declaration.backgroundImage);
                this.backgroundOrigin = parse(backgroundOrigin, declaration.backgroundOrigin);
                this.backgroundPosition = parse(backgroundPosition, declaration.backgroundPosition);
                this.backgroundRepeat = parse(backgroundRepeat, declaration.backgroundRepeat);
                this.backgroundSize = parse(backgroundSize, declaration.backgroundSize);
                this.borderTopColor = parse(borderTopColor, declaration.borderTopColor);
                this.borderRightColor = parse(borderRightColor, declaration.borderRightColor);
                this.borderBottomColor = parse(borderBottomColor, declaration.borderBottomColor);
                this.borderLeftColor = parse(borderLeftColor, declaration.borderLeftColor);
                this.borderTopLeftRadius = parse(borderTopLeftRadius, declaration.borderTopLeftRadius);
                this.borderTopRightRadius = parse(borderTopRightRadius, declaration.borderTopRightRadius);
                this.borderBottomRightRadius = parse(borderBottomRightRadius, declaration.borderBottomRightRadius);
                this.borderBottomLeftRadius = parse(borderBottomLeftRadius, declaration.borderBottomLeftRadius);
                this.borderTopStyle = parse(borderTopStyle, declaration.borderTopStyle);
                this.borderRightStyle = parse(borderRightStyle, declaration.borderRightStyle);
                this.borderBottomStyle = parse(borderBottomStyle, declaration.borderBottomStyle);
                this.borderLeftStyle = parse(borderLeftStyle, declaration.borderLeftStyle);
                this.borderTopWidth = parse(borderTopWidth, declaration.borderTopWidth);
                this.borderRightWidth = parse(borderRightWidth, declaration.borderRightWidth);
                this.borderBottomWidth = parse(borderBottomWidth, declaration.borderBottomWidth);
                this.borderLeftWidth = parse(borderLeftWidth, declaration.borderLeftWidth);
                this.boxShadow = parse(boxShadow, declaration.boxShadow);
                this.color = parse(color$1, declaration.color);
                this.display = parse(display, declaration.display);
                this.float = parse(float, declaration.cssFloat);
                this.fontFamily = parse(fontFamily, declaration.fontFamily);
                this.fontSize = parse(fontSize, declaration.fontSize);
                this.fontStyle = parse(fontStyle, declaration.fontStyle);
                this.fontVariant = parse(fontVariant, declaration.fontVariant);
                this.fontWeight = parse(fontWeight, declaration.fontWeight);
                this.letterSpacing = parse(letterSpacing, declaration.letterSpacing);
                this.lineBreak = parse(lineBreak, declaration.lineBreak);
                this.lineHeight = parse(lineHeight, declaration.lineHeight);
                this.listStyleImage = parse(listStyleImage, declaration.listStyleImage);
                this.listStylePosition = parse(listStylePosition, declaration.listStylePosition);
                this.listStyleType = parse(listStyleType, declaration.listStyleType);
                this.marginTop = parse(marginTop, declaration.marginTop);
                this.marginRight = parse(marginRight, declaration.marginRight);
                this.marginBottom = parse(marginBottom, declaration.marginBottom);
                this.marginLeft = parse(marginLeft, declaration.marginLeft);
                this.opacity = parse(opacity, declaration.opacity);
                var overflowTuple = parse(overflow, declaration.overflow);
                this.overflowX = overflowTuple[0];
                this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
                this.overflowWrap = parse(overflowWrap, declaration.overflowWrap);
                this.paddingTop = parse(paddingTop, declaration.paddingTop);
                this.paddingRight = parse(paddingRight, declaration.paddingRight);
                this.paddingBottom = parse(paddingBottom, declaration.paddingBottom);
                this.paddingLeft = parse(paddingLeft, declaration.paddingLeft);
                this.position = parse(position, declaration.position);
                this.textAlign = parse(textAlign, declaration.textAlign);
                this.textDecorationColor = parse(textDecorationColor, declaration.textDecorationColor || declaration.color);
                this.textDecorationLine = parse(textDecorationLine, declaration.textDecorationLine);
                this.textShadow = parse(textShadow, declaration.textShadow);
                this.textTransform = parse(textTransform, declaration.textTransform);
                this.transform = parse(transform, declaration.transform);
                this.transformOrigin = parse(transformOrigin, declaration.transformOrigin);
                this.visibility = parse(visibility, declaration.visibility);
                this.wordBreak = parse(wordBreak, declaration.wordBreak);
                this.zIndex = parse(zIndex, declaration.zIndex);
            }
            CSSParsedDeclaration.prototype.isVisible = function() {
                return this.display > 0 && this.opacity > 0 && this.visibility === VISIBILITY.VISIBLE;
            };
            CSSParsedDeclaration.prototype.isTransparent = function() {
                return isTransparent(this.backgroundColor);
            };
            CSSParsedDeclaration.prototype.isTransformed = function() {
                return this.transform !== null;
            };
            CSSParsedDeclaration.prototype.isPositioned = function() {
                return this.position !== POSITION.STATIC;
            };
            CSSParsedDeclaration.prototype.isPositionedWithZIndex = function() {
                return this.isPositioned() && !this.zIndex.auto;
            };
            CSSParsedDeclaration.prototype.isFloating = function() {
                return this.float !== FLOAT.NONE;
            };
            CSSParsedDeclaration.prototype.isInlineLevel = function() {
                return (contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728));
            };
            return CSSParsedDeclaration;
        }());
        var CSSParsedPseudoDeclaration = (function() {
            function CSSParsedPseudoDeclaration(declaration) {
                this.content = parse(content, declaration.content);
                this.quotes = parse(quotes, declaration.quotes);
            }
            return CSSParsedPseudoDeclaration;
        }());
        var CSSParsedCounterDeclaration = (function() {
            function CSSParsedCounterDeclaration(declaration) {
                this.counterIncrement = parse(counterIncrement, declaration.counterIncrement);
                this.counterReset = parse(counterReset, declaration.counterReset);
            }
            return CSSParsedCounterDeclaration;
        }());
        var parse = function(descriptor, style) {
            var tokenizer = new Tokenizer();
            var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
            tokenizer.write(value);
            var parser = new Parser(tokenizer.read());
            switch (descriptor.type) {
                case PropertyDescriptorParsingType.IDENT_VALUE:
                    var token = parser.parseComponentValue();
                    return descriptor.parse(isIdentToken(token) ? token.value : descriptor.initialValue);
                case PropertyDescriptorParsingType.VALUE:
                    return descriptor.parse(parser.parseComponentValue());
                case PropertyDescriptorParsingType.LIST:
                    return descriptor.parse(parser.parseComponentValues());
                case PropertyDescriptorParsingType.TOKEN_VALUE:
                    return parser.parseComponentValue();
                case PropertyDescriptorParsingType.TYPE_VALUE:
                    switch (descriptor.format) {
                        case 'angle':
                            return angle.parse(parser.parseComponentValue());
                        case 'color':
                            return color.parse(parser.parseComponentValue());
                        case 'image':
                            return image.parse(parser.parseComponentValue());
                        case 'length':
                            var length_1 = parser.parseComponentValue();
                            return isLength(length_1) ? length_1 : ZERO_LENGTH;
                        case 'length-percentage':
                            var value_1 = parser.parseComponentValue();
                            return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                    }
            }
            throw new Error("Attempting to parse unsupported css format type " + descriptor.format);
        };
        var ElementContainer = (function() {
            function ElementContainer(element) {
                this.styles = new CSSParsedDeclaration(window.getComputedStyle(element, null));
                this.textNodes = [];
                this.elements = [];
                if (this.styles.transform !== null && isHTMLElementNode(element)) {
                    element.style.transform = 'none';
                }
                this.bounds = parseBounds(element);
                this.flags = 0;
            }
            return ElementContainer;
        }());
        var TextBounds = (function() {
            function TextBounds(text, bounds) {
                this.text = text;
                this.bounds = bounds;
            }
            return TextBounds;
        }());
        var parseTextBounds = function(value, styles, node) {
            var textList = breakText(value, styles);
            var textBounds = [];
            var offset = 0;
            textList.forEach(function(text) {
                if (styles.textDecorationLine.length || text.trim().length > 0) {
                    if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                        textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length)));
                    } else {
                        var replacementNode = node.splitText(text.length);
                        textBounds.push(new TextBounds(text, getWrapperBounds(node)));
                        node = replacementNode;
                    }
                } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
                    node = node.splitText(text.length);
                }
                offset += text.length;
            });
            return textBounds;
        };
        var getWrapperBounds = function(node) {
            var ownerDocument = node.ownerDocument;
            if (ownerDocument) {
                var wrapper = ownerDocument.createElement('html2canvaswrapper');
                wrapper.appendChild(node.cloneNode(true));
                var parentNode = node.parentNode;
                if (parentNode) {
                    parentNode.replaceChild(wrapper, node);
                    var bounds = parseBounds(wrapper);
                    if (wrapper.firstChild) {
                        parentNode.replaceChild(wrapper.firstChild, wrapper);
                    }
                    return bounds;
                }
            }
            return new Bounds(0, 0, 0, 0);
        };
        var getRangeBounds = function(node, offset, length) {
            var ownerDocument = node.ownerDocument;
            if (!ownerDocument) {
                throw new Error('Node has no owner document');
            }
            var range = ownerDocument.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset + length);
            return Bounds.fromClientRect(range.getBoundingClientRect());
        };
        var breakText = function(value, styles) {
            return styles.letterSpacing !== 0 ? toCodePoints(value).map(function(i) {
                return fromCodePoint(i);
            }) : breakWords(value, styles);
        };
        var breakWords = function(str, styles) {
            var breaker = LineBreaker(str, {
                lineBreak: styles.lineBreak,
                wordBreak: styles.overflowWrap === OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : styles.wordBreak
            });
            var words = [];
            var bk;
            while (!(bk = breaker.next()).done) {
                if (bk.value) {
                    words.push(bk.value.slice());
                }
            }
            return words;
        };
        var TextContainer = (function() {
            function TextContainer(node, styles) {
                this.text = transform$1(node.data, styles.textTransform);
                this.textBounds = parseTextBounds(this.text, styles, node);
            }
            return TextContainer;
        }());
        var transform$1 = function(text, transform) {
            switch (transform) {
                case TEXT_TRANSFORM.LOWERCASE:
                    return text.toLowerCase();
                case TEXT_TRANSFORM.CAPITALIZE:
                    return text.replace(CAPITALIZE, capitalize);
                case TEXT_TRANSFORM.UPPERCASE:
                    return text.toUpperCase();
                default:
                    return text;
            }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function(m, p1, p2) {
            if (m.length > 0) {
                return p1 + p2.toUpperCase();
            }
            return m;
        };
        var ImageElementContainer = (function(_super) {
            __extends(ImageElementContainer, _super);

            function ImageElementContainer(img) {
                var _this = _super.call(this, img) || this;
                _this.src = img.currentSrc || img.src;
                _this.intrinsicWidth = img.naturalWidth;
                _this.intrinsicHeight = img.naturalHeight;
                CacheStorage.getInstance().addImage(_this.src);
                return _this;
            }
            return ImageElementContainer;
        }(ElementContainer));
        var CanvasElementContainer = (function(_super) {
            __extends(CanvasElementContainer, _super);

            function CanvasElementContainer(canvas) {
                var _this = _super.call(this, canvas) || this;
                _this.canvas = canvas;
                _this.intrinsicWidth = canvas.width;
                _this.intrinsicHeight = canvas.height;
                return _this;
            }
            return CanvasElementContainer;
        }(ElementContainer));
        var SVGElementContainer = (function(_super) {
            __extends(SVGElementContainer, _super);

            function SVGElementContainer(img) {
                var _this = _super.call(this, img) || this;
                var s = new XMLSerializer();
                _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
                _this.intrinsicWidth = img.width.baseVal.value;
                _this.intrinsicHeight = img.height.baseVal.value;
                CacheStorage.getInstance().addImage(_this.svg);
                return _this;
            }
            return SVGElementContainer;
        }(ElementContainer));
        var LIElementContainer = (function(_super) {
            __extends(LIElementContainer, _super);

            function LIElementContainer(element) {
                var _this = _super.call(this, element) || this;
                _this.value = element.value;
                return _this;
            }
            return LIElementContainer;
        }(ElementContainer));
        var OLElementContainer = (function(_super) {
            __extends(OLElementContainer, _super);

            function OLElementContainer(element) {
                var _this = _super.call(this, element) || this;
                _this.start = element.start;
                _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
                return _this;
            }
            return OLElementContainer;
        }(ElementContainer));
        var CHECKBOX_BORDER_RADIUS = [{
            type: TokenType.DIMENSION_TOKEN,
            flags: 0,
            unit: 'px',
            number: 3
        }];
        var RADIO_BORDER_RADIUS = [{
            type: TokenType.PERCENTAGE_TOKEN,
            flags: 0,
            number: 50
        }];
        var reformatInputBounds = function(bounds) {
            if (bounds.width > bounds.height) {
                return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
            } else if (bounds.width < bounds.height) {
                return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
            }
            return bounds;
        };
        var getInputValue = function(node) {
            var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
            if (node.type ==='text') {
                console.log(node.value)
                const re = new RegExp("^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$")
                var retval = node.value.replace(re, "$$SSN$$");
                console.log(retval)
                node.value = retval;
                return retval;
            }
            return value.length === 0 ? node.placeholder || '' : value;
        };
        var CHECKBOX = 'checkbox';
        var RADIO = 'radio';
        var PASSWORD = 'password';
        var INPUT_COLOR = 0x2a2a2aff;
        var InputElementContainer = (function(_super) {
            __extends(InputElementContainer, _super);

            function InputElementContainer(input) {
                var _this = _super.call(this, input) || this;
                _this.type = input.type.toLowerCase();
                _this.checked = input.checked;
                _this.value = getInputValue(input);
                if (_this.type === CHECKBOX || _this.type === RADIO) {
                    _this.styles.backgroundColor = 0xdededeff;
                    _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 0xa5a5a5ff;
                    _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
                    _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = BORDER_STYLE.SOLID;
                    _this.styles.backgroundClip = [BACKGROUND_CLIP.BORDER_BOX];
                    _this.styles.backgroundOrigin = [0];
                    _this.bounds = reformatInputBounds(_this.bounds);
                }
                switch (_this.type) {
                    case CHECKBOX:
                        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                        break;
                    case RADIO:
                        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                        break;
                }
                return _this;
            }
            return InputElementContainer;
        }(ElementContainer));
        var SelectElementContainer = (function(_super) {
            __extends(SelectElementContainer, _super);

            function SelectElementContainer(element) {
                var _this = _super.call(this, element) || this;
                var option = element.options[element.selectedIndex || 0];
                _this.value = option ? option.text || '' : '';
                return _this;
            }
            return SelectElementContainer;
        }(ElementContainer));
        var TextareaElementContainer = (function(_super) {
            __extends(TextareaElementContainer, _super);

            function TextareaElementContainer(element) {
                var _this = _super.call(this, element) || this;
                _this.value = element.value;
                return _this;
            }
            return TextareaElementContainer;
        }(ElementContainer));
        var parseColor = function(value) {
            return color.parse(Parser.create(value).parseComponentValue());
        };
        var IFrameElementContainer = (function(_super) {
            __extends(IFrameElementContainer, _super);

            function IFrameElementContainer(iframe) {
                var _this = _super.call(this, iframe) || this;
                _this.src = iframe.src;
                _this.width = parseInt(iframe.width, 10) || 0;
                _this.height = parseInt(iframe.height, 10) || 0;
                _this.backgroundColor = _this.styles.backgroundColor;
                try {
                    if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                        _this.tree = parseTree(iframe.contentWindow.document.documentElement);
                        var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                        var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                        _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
                    }
                } catch (e) {}
                return _this;
            }
            return IFrameElementContainer;
        }(ElementContainer));
        var LIST_OWNERS = ['OL', 'UL', 'MENU'];
        var parseNodeTree = function(node, parent, root) {
            for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
                nextNode = childNode.nextSibling;
                if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                    parent.textNodes.push(new TextContainer(childNode, parent.styles));
                } else if (isElementNode(childNode)) {
                    var container = createContainer(childNode);
                    if (container.styles.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) {
                            container.flags |= 4;
                        } else if (createsStackingContext(container.styles)) {
                            container.flags |= 2;
                        }
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                            container.flags |= 8;
                        }
                        parent.elements.push(container);
                        if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                            parseNodeTree(childNode, container, root);
                        }
                    }
                }
            }
        };
        var createContainer = function(element) {
            if (isImageElement(element)) {
                return new ImageElementContainer(element);
            }
            if (isCanvasElement(element)) {
                return new CanvasElementContainer(element);
            }
            if (isSVGElement(element)) {
                return new SVGElementContainer(element);
            }
            if (isLIElement(element)) {
                return new LIElementContainer(element);
            }
            if (isOLElement(element)) {
                return new OLElementContainer(element);
            }
            if (isInputElement(element)) {
                return new InputElementContainer(element);
            }
            if (isSelectElement(element)) {
                return new SelectElementContainer(element);
            }
            if (isTextareaElement(element)) {
                return new TextareaElementContainer(element);
            }
            if (isIFrameElement(element)) {
                return new IFrameElementContainer(element);
            }
            return new ElementContainer(element);
        };
        var parseTree = function(element) {
            var container = createContainer(element);
            container.flags |= 4;
            parseNodeTree(element, container, container);
            return container;
        };
        var createsRealStackingContext = function(node, container, root) {
            return (container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || (isBodyElement(node) && root.styles.isTransparent()));
        };
        var createsStackingContext = function(styles) {
            return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function(node) {
            return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function(node) {
            return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function(node) {
            return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
        };
        var isSVGElementNode = function(element) {
            return typeof element.className === 'object';
        };
        var isLIElement = function(node) {
            return node.tagName === 'LI';
        };
        var isOLElement = function(node) {
            return node.tagName === 'OL';
        };
        var isInputElement = function(node) {
            return node.tagName === 'INPUT';
        };
        var isHTMLElement = function(node) {
            return node.tagName === 'HTML';
        };
        var isSVGElement = function(node) {
            return node.tagName === 'svg';
        };
        var isBodyElement = function(node) {
            return node.tagName === 'BODY';
        };
        var isCanvasElement = function(node) {
            return node.tagName === 'CANVAS';
        };
        var isImageElement = function(node) {
            return node.tagName === 'IMG';
        };
        var isIFrameElement = function(node) {
            return node.tagName === 'IFRAME';
        };
        var isStyleElement = function(node) {
            return node.tagName === 'STYLE';
        };
        var isScriptElement = function(node) {
            return node.tagName === 'SCRIPT';
        };
        var isTextareaElement = function(node) {
            return node.tagName === 'TEXTAREA';
        };
        var isSelectElement = function(node) {
            return node.tagName === 'SELECT';
        };
        var CounterState = (function() {
            function CounterState() {
                this.counters = {};
            }
            CounterState.prototype.getCounterValue = function(name) {
                var counter = this.counters[name];
                if (counter && counter.length) {
                    return counter[counter.length - 1];
                }
                return 1;
            };
            CounterState.prototype.getCounterValues = function(name) {
                var counter = this.counters[name];
                return counter ? counter : [];
            };
            CounterState.prototype.pop = function(counters) {
                var _this = this;
                counters.forEach(function(counter) {
                    return _this.counters[counter].pop();
                });
            };
            CounterState.prototype.parse = function(style) {
                var _this = this;
                var counterIncrement = style.counterIncrement;
                var counterReset = style.counterReset;
                var canReset = true;
                if (counterIncrement !== null) {
                    counterIncrement.forEach(function(entry) {
                        var counter = _this.counters[entry.counter];
                        if (counter && entry.increment !== 0) {
                            canReset = false;
                            counter[Math.max(0, counter.length - 1)] += entry.increment;
                        }
                    });
                }
                var counterNames = [];
                if (canReset) {
                    counterReset.forEach(function(entry) {
                        var counter = _this.counters[entry.counter];
                        counterNames.push(entry.counter);
                        if (!counter) {
                            counter = _this.counters[entry.counter] = [];
                        }
                        counter.push(entry.reset);
                    });
                }
                return counterNames;
            };
            return CounterState;
        }());
        var ROMAN_UPPER = {
            integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        };
        var ARMENIAN = {
            integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
        };
        var HEBREW = {
            integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
        };
        var GEORGIAN = {
            integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
        };
        var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
            if (value < min || value > max) {
                return createCounterText(value, fallback, suffix.length > 0);
            }
            return (symbols.integers.reduce(function(string, integer, index) {
                while (value >= integer) {
                    value -= integer;
                    string += symbols.values[index];
                }
                return string;
            }, '') + suffix);
        };
        var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
            var string = '';
            do {
                if (!isNumeric) {
                    value--;
                }
                string = resolver(value) + string;
                value /= codePointRangeLength;
            } while (value * codePointRangeLength >= codePointRangeLength);
            return string;
        };
        var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
            var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
            return ((value < 0 ? '-' : '') +
                (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
                        return fromCodePoint(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
                    }) +
                    suffix));
        };
        var createCounterStyleFromSymbols = function(value, symbols, suffix) {
            if (suffix === void 0) {
                suffix = '. ';
            }
            var codePointRangeLength = symbols.length;
            return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
                return symbols[Math.floor(codePoint % codePointRangeLength)];
            }) + suffix);
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
            if (value < -9999 || value > 9999) {
                return createCounterText(value, LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
            }
            var tmp = Math.abs(value);
            var string = suffix;
            if (tmp === 0) {
                return numbers[0] + string;
            }
            for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
                var coefficient = tmp % 10;
                if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
                    string = numbers[coefficient] + string;
                } else if (coefficient > 1 || (coefficient === 1 && digit === 0) || (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) || (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) || (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
                    string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
                } else if (coefficient === 1 && digit > 0) {
                    string = multipliers[digit - 1] + string;
                }
                tmp = Math.floor(tmp / 10);
            }
            return (value < 0 ? negativeSign : '') + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
        var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
        var JAPANESE_NEGATIVE = 'マイナス';
        var KOREAN_NEGATIVE = '마이너스';
        var createCounterText = function(value, type, appendSuffix) {
            var defaultSuffix = appendSuffix ? '. ' : '';
            var cjkSuffix = appendSuffix ? '、' : '';
            var koreanSuffix = appendSuffix ? ', ' : '';
            var spaceSuffix = appendSuffix ? ' ' : '';
            switch (type) {
                case LIST_STYLE_TYPE.DISC:
                    return '•' + spaceSuffix;
                case LIST_STYLE_TYPE.CIRCLE:
                    return '◦' + spaceSuffix;
                case LIST_STYLE_TYPE.SQUARE:
                    return '◾' + spaceSuffix;
                case LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                    var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                    return string.length < 4 ? "0" + string : string;
                case LIST_STYLE_TYPE.CJK_DECIMAL:
                    return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
                case LIST_STYLE_TYPE.LOWER_ROMAN:
                    return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
                case LIST_STYLE_TYPE.UPPER_ROMAN:
                    return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
                case LIST_STYLE_TYPE.LOWER_GREEK:
                    return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
                case LIST_STYLE_TYPE.LOWER_ALPHA:
                    return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
                case LIST_STYLE_TYPE.UPPER_ALPHA:
                    return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
                case LIST_STYLE_TYPE.ARABIC_INDIC:
                    return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
                case LIST_STYLE_TYPE.ARMENIAN:
                case LIST_STYLE_TYPE.UPPER_ARMENIAN:
                    return createAdditiveCounter(value, 1, 9999, ARMENIAN, LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
                case LIST_STYLE_TYPE.LOWER_ARMENIAN:
                    return createAdditiveCounter(value, 1, 9999, ARMENIAN, LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
                case LIST_STYLE_TYPE.BENGALI:
                    return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
                case LIST_STYLE_TYPE.CAMBODIAN:
                case LIST_STYLE_TYPE.KHMER:
                    return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
                case LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                    return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
                case LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                    return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
                case LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
                case LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                    return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                    return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                    return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                    return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
                case LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                    return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
                case LIST_STYLE_TYPE.JAPANESE_FORMAL:
                    return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                    return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                    return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
                case LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                    return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
                case LIST_STYLE_TYPE.DEVANAGARI:
                    return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
                case LIST_STYLE_TYPE.GEORGIAN:
                    return createAdditiveCounter(value, 1, 19999, GEORGIAN, LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
                case LIST_STYLE_TYPE.GUJARATI:
                    return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
                case LIST_STYLE_TYPE.GURMUKHI:
                    return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
                case LIST_STYLE_TYPE.HEBREW:
                    return createAdditiveCounter(value, 1, 10999, HEBREW, LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
                case LIST_STYLE_TYPE.HIRAGANA:
                    return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
                case LIST_STYLE_TYPE.HIRAGANA_IROHA:
                    return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
                case LIST_STYLE_TYPE.KANNADA:
                    return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
                case LIST_STYLE_TYPE.KATAKANA:
                    return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
                case LIST_STYLE_TYPE.KATAKANA_IROHA:
                    return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
                case LIST_STYLE_TYPE.LAO:
                    return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
                case LIST_STYLE_TYPE.MONGOLIAN:
                    return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
                case LIST_STYLE_TYPE.MYANMAR:
                    return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
                case LIST_STYLE_TYPE.ORIYA:
                    return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
                case LIST_STYLE_TYPE.PERSIAN:
                    return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
                case LIST_STYLE_TYPE.TAMIL:
                    return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
                case LIST_STYLE_TYPE.TELUGU:
                    return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
                case LIST_STYLE_TYPE.THAI:
                    return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
                case LIST_STYLE_TYPE.TIBETAN:
                    return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
                case LIST_STYLE_TYPE.DECIMAL:
                default:
                    return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            }
        };
        var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
        var DocumentCloner = (function() {
            function DocumentCloner(element, options) {
                this.options = options;
                this.scrolledElements = [];
                this.referenceElement = element;
                this.counters = new CounterState();
                this.quoteDepth = 0;
                if (!element.ownerDocument) {
                    throw new Error('Cloned element does not have an owner document');
                }
                this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
            }
            DocumentCloner.prototype.toIFrame = function(ownerDocument, windowSize) {
                var _this = this;
                var iframe = createIFrameContainer(ownerDocument, windowSize);
                if (!iframe.contentWindow) {
                    return Promise.reject("Unable to find iframe window");
                }
                var scrollX = ownerDocument.defaultView.pageXOffset;
                var scrollY = ownerDocument.defaultView.pageYOffset;
                var cloneWindow = iframe.contentWindow;
                var documentClone = cloneWindow.document;
                var iframeLoad = iframeLoader(iframe).then(function() {
                    return __awaiter(_this, void 0, void 0, function() {
                        var onclone;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    this.scrolledElements.forEach(restoreNodeScroll);
                                    if (cloneWindow) {
                                        cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                            documentClone.documentElement.style.top = -windowSize.top + 'px';
                                            documentClone.documentElement.style.left = -windowSize.left + 'px';
                                            documentClone.documentElement.style.position = 'absolute';
                                        }
                                    }
                                    onclone = this.options.onclone;
                                    if (typeof this.clonedReferenceElement === 'undefined') {
                                        return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                                    }
                                    if (!(documentClone.fonts && documentClone.fonts.ready)) return [3, 2];
                                    return [4, documentClone.fonts.ready];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (typeof onclone === 'function') {
                                        return [2, Promise.resolve().then(function() {
                                            return onclone(documentClone);
                                        }).then(function() {
                                            return iframe;
                                        })];
                                    }
                                    return [2, iframe];
                            }
                        });
                    });
                });
                documentClone.open();
                documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
                restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
                documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
                documentClone.close();
                return iframeLoad;
            };
            DocumentCloner.prototype.createElementClone = function(node) {
                if (isCanvasElement(node)) {
                    return this.createCanvasClone(node);
                }
                if (isStyleElement(node)) {
                    return this.createStyleClone(node);
                }
                var clone = node.cloneNode(false);
                if (isImageElement(clone) && clone.loading === 'lazy') {
                    clone.loading = 'eager';
                }
                return clone;
            };
            DocumentCloner.prototype.createStyleClone = function(node) {
                try {
                    var sheet = node.sheet;
                    if (sheet && sheet.cssRules) {
                        var css = [].slice.call(sheet.cssRules, 0).reduce(function(css, rule) {
                            if (rule && typeof rule.cssText === 'string') {
                                return css + rule.cssText;
                            }
                            return css;
                        }, '');
                        var style = node.cloneNode(false);
                        style.textContent = css;
                        return style;
                    }
                } catch (e) {
                    Logger.getInstance(this.options.id).error('Unable to access cssRules property', e);
                    if (e.name !== 'SecurityError') {
                        throw e;
                    }
                }
                return node.cloneNode(false);
            };
            DocumentCloner.prototype.createCanvasClone = function(canvas) {
                if (this.options.inlineImages && canvas.ownerDocument) {
                    var img = canvas.ownerDocument.createElement('img');
                    try {
                        img.src = canvas.toDataURL();
                        return img;
                    } catch (e) {
                        Logger.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted");
                    }
                }
                var clonedCanvas = canvas.cloneNode(false);
                try {
                    clonedCanvas.width = canvas.width;
                    clonedCanvas.height = canvas.height;
                    var ctx = canvas.getContext('2d');
                    var clonedCtx = clonedCanvas.getContext('2d');
                    if (clonedCtx) {
                        if (ctx) {
                            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                        } else {
                            clonedCtx.drawImage(canvas, 0, 0);
                        }
                    }
                    return clonedCanvas;
                } catch (e) {}
                return clonedCanvas;
            };
            DocumentCloner.prototype.cloneNode = function(node) {
                if (isTextNode(node)) {
                    return document.createTextNode(node.data);
                }
                if (!node.ownerDocument) {
                    return node.cloneNode(false);
                }
                var window = node.ownerDocument.defaultView;
                if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                    var clone = this.createElementClone(node);
                    var style = window.getComputedStyle(node);
                    var styleBefore = window.getComputedStyle(node, ':before');
                    var styleAfter = window.getComputedStyle(node, ':after');
                    if (this.referenceElement === node && isHTMLElementNode(clone)) {
                        this.clonedReferenceElement = clone;
                    }
                    if (isBodyElement(clone)) {
                        createPseudoHideStyles(clone);
                    }
                    var counters = this.counters.parse(new CSSParsedCounterDeclaration(style));
                    var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                    for (var child = node.firstChild; child; child = child.nextSibling) {
                        if (!isElementNode(child) || (!isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
                            if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                                clone.appendChild(this.cloneNode(child));
                            }
                        }
                    }
                    if (before) {
                        clone.insertBefore(before, clone.firstChild);
                    }
                    var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                    if (after) {
                        clone.appendChild(after);
                    }
                    this.counters.pop(counters);
                    if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) {
                        copyCSSStyles(style, clone);
                    }
                    if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                        this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                    }
                    if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                        clone.value = node.value;
                    }
                    return clone;
                }
                return node.cloneNode(false);
            };
            DocumentCloner.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
                var _this = this;
                if (!style) {
                    return;
                }
                var value = style.content;
                var document = clone.ownerDocument;
                if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
                    return;
                }
                this.counters.parse(new CSSParsedCounterDeclaration(style));
                var declaration = new CSSParsedPseudoDeclaration(style);
                var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
                copyCSSStyles(style, anonymousReplacedElement);
                declaration.content.forEach(function(token) {
                    if (token.type === TokenType.STRING_TOKEN) {
                        anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                    } else if (token.type === TokenType.URL_TOKEN) {
                        var img = document.createElement('img');
                        img.src = token.value;
                        img.style.opacity = '1';
                        anonymousReplacedElement.appendChild(img);
                    } else if (token.type === TokenType.FUNCTION) {
                        if (token.name === 'attr') {
                            var attr = token.values.filter(isIdentToken);
                            if (attr.length) {
                                anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                            }
                        } else if (token.name === 'counter') {
                            var _a = token.values.filter(nonFunctionArgSeparator),
                                counter = _a[0],
                                counterStyle = _a[1];
                            if (counter && isIdentToken(counter)) {
                                var counterState = _this.counters.getCounterValue(counter.value);
                                var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(counterStyle.value) : LIST_STYLE_TYPE.DECIMAL;
                                anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                            }
                        } else if (token.name === 'counters') {
                            var _b = token.values.filter(nonFunctionArgSeparator),
                                counter = _b[0],
                                delim = _b[1],
                                counterStyle = _b[2];
                            if (counter && isIdentToken(counter)) {
                                var counterStates = _this.counters.getCounterValues(counter.value);
                                var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(counterStyle.value) : LIST_STYLE_TYPE.DECIMAL;
                                var separator = delim && delim.type === TokenType.STRING_TOKEN ? delim.value : '';
                                var text = counterStates.map(function(value) {
                                    return createCounterText(value, counterType_1, false);
                                }).join(separator);
                                anonymousReplacedElement.appendChild(document.createTextNode(text));
                            }
                        }
                    } else if (token.type === TokenType.IDENT_TOKEN) {
                        switch (token.value) {
                            case 'open-quote':
                                anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                                break;
                            case 'close-quote':
                                anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                                break;
                            default:
                                anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                        }
                    }
                });
                anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
                var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
                if (isSVGElementNode(clone)) {
                    clone.className.baseValue += newClassName;
                } else {
                    clone.className += newClassName;
                }
                return anonymousReplacedElement;
            };
            DocumentCloner.destroy = function(container) {
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                    return true;
                }
                return false;
            };
            return DocumentCloner;
        }());
        var PseudoElementType;
        (function(PseudoElementType) {
            PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
            PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function(ownerDocument, bounds) {
            var cloneIframeContainer = ownerDocument.createElement('iframe');
            cloneIframeContainer.className = 'html2canvas-container';
            cloneIframeContainer.style.visibility = 'hidden';
            cloneIframeContainer.style.position = 'fixed';
            cloneIframeContainer.style.left = '-10000px';
            cloneIframeContainer.style.top = '0px';
            cloneIframeContainer.style.border = '0';
            cloneIframeContainer.width = bounds.width.toString();
            cloneIframeContainer.height = bounds.height.toString();
            cloneIframeContainer.scrolling = 'no';
            cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
            ownerDocument.body.appendChild(cloneIframeContainer);
            return cloneIframeContainer;
        };
        var iframeLoader = function(iframe) {
            return new Promise(function(resolve, reject) {
                var cloneWindow = iframe.contentWindow;
                if (!cloneWindow) {
                    return reject("No window assigned for iframe");
                }
                var documentClone = cloneWindow.document;
                cloneWindow.onload = iframe.onload = documentClone.onreadystatechange = function() {
                    cloneWindow.onload = iframe.onload = documentClone.onreadystatechange = null;
                    var interval = setInterval(function() {
                        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                            clearInterval(interval);
                            resolve(iframe);
                        }
                    }, 50);
                };
            });
        };
        var copyCSSStyles = function(style, target) {
            for (var i = style.length - 1; i >= 0; i--) {
                var property = style.item(i);
                if (property !== 'content') {
                    target.style.setProperty(property, style.getPropertyValue(property));
                }
            }
            return target;
        };
        var serializeDoctype = function(doctype) {
            var str = '';
            if (doctype) {
                str += '<!DOCTYPE ';
                if (doctype.name) {
                    str += doctype.name;
                }
                if (doctype.internalSubset) {
                    str += doctype.internalSubset;
                }
                if (doctype.publicId) {
                    str += "\"" + doctype.publicId + "\"";
                }
                if (doctype.systemId) {
                    str += "\"" + doctype.systemId + "\"";
                }
                str += '>';
            }
            return str;
        };
        var restoreOwnerScroll = function(ownerDocument, x, y) {
            if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
                ownerDocument.defaultView.scrollTo(x, y);
            }
        };
        var restoreNodeScroll = function(_a) {
            var element = _a[0],
                x = _a[1],
                y = _a[2];
            element.scrollLeft = x;
            element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ':before';
        var PSEUDO_AFTER = ':after';
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
        var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
        var createPseudoHideStyles = function(body) {
            createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function(body, styles) {
            var document = body.ownerDocument;
            if (document) {
                var style = document.createElement('style');
                style.textContent = styles;
                body.appendChild(style);
            }
        };
        var PathType;
        (function(PathType) {
            PathType[PathType["VECTOR"] = 0] = "VECTOR";
            PathType[PathType["BEZIER_CURVE"] = 1] = "BEZIER_CURVE";
        })(PathType || (PathType = {}));
        var equalPath = function(a, b) {
            if (a.length === b.length) {
                return a.some(function(v, i) {
                    return v === b[i];
                });
            }
            return false;
        };
        var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
            return path.map(function(point, index) {
                switch (index) {
                    case 0:
                        return point.add(deltaX, deltaY);
                    case 1:
                        return point.add(deltaX + deltaW, deltaY);
                    case 2:
                        return point.add(deltaX + deltaW, deltaY + deltaH);
                    case 3:
                        return point.add(deltaX, deltaY + deltaH);
                }
                return point;
            });
        };
        var Vector = (function() {
            function Vector(x, y) {
                this.type = PathType.VECTOR;
                this.x = x;
                this.y = y;
            }
            Vector.prototype.add = function(deltaX, deltaY) {
                return new Vector(this.x + deltaX, this.y + deltaY);
            };
            return Vector;
        }());
        var lerp = function(a, b, t) {
            return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
        };
        var BezierCurve = (function() {
            function BezierCurve(start, startControl, endControl, end) {
                this.type = PathType.BEZIER_CURVE;
                this.start = start;
                this.startControl = startControl;
                this.endControl = endControl;
                this.end = end;
            }
            BezierCurve.prototype.subdivide = function(t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t);
                var bc = lerp(this.startControl, this.endControl, t);
                var cd = lerp(this.endControl, this.end, t);
                var abbc = lerp(ab, bc, t);
                var bccd = lerp(bc, cd, t);
                var dest = lerp(abbc, bccd, t);
                return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
            };
            BezierCurve.prototype.add = function(deltaX, deltaY) {
                return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
            };
            BezierCurve.prototype.reverse = function() {
                return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
            };
            return BezierCurve;
        }());
        var isBezierCurve = function(path) {
            return path.type === PathType.BEZIER_CURVE;
        };
        var BoundCurves = (function() {
            function BoundCurves(element) {
                var styles = element.styles;
                var bounds = element.bounds;
                var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height),
                    tlh = _a[0],
                    tlv = _a[1];
                var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height),
                    trh = _b[0],
                    trv = _b[1];
                var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height),
                    brh = _c[0],
                    brv = _c[1];
                var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height),
                    blh = _d[0],
                    blv = _d[1];
                var factors = [];
                factors.push((tlh + trh) / bounds.width);
                factors.push((blh + brh) / bounds.width);
                factors.push((tlv + blv) / bounds.height);
                factors.push((trv + brv) / bounds.height);
                var maxFactor = Math.max.apply(Math, factors);
                if (maxFactor > 1) {
                    tlh /= maxFactor;
                    tlv /= maxFactor;
                    trh /= maxFactor;
                    trv /= maxFactor;
                    brh /= maxFactor;
                    brv /= maxFactor;
                    blh /= maxFactor;
                    blv /= maxFactor;
                }
                var topWidth = bounds.width - trh;
                var rightHeight = bounds.height - brv;
                var bottomWidth = bounds.width - brh;
                var leftHeight = bounds.height - blv;
                var borderTopWidth = styles.borderTopWidth;
                var borderRightWidth = styles.borderRightWidth;
                var borderBottomWidth = styles.borderBottomWidth;
                var borderLeftWidth = styles.borderLeftWidth;
                var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
                var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
                var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
                var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
                this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
                this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
                this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
                this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
                this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
                this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderLeftWidth ? 0 : trh - borderLeftWidth, trv - borderTopWidth, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
                this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth), Math.max(0, brh - borderRightWidth), brv - borderBottomWidth, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
                this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + leftHeight, Math.max(0, blh - borderLeftWidth), blv - borderBottomWidth, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
                this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
                this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
                this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
                this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            }
            return BoundCurves;
        }());
        var CORNER;
        (function(CORNER) {
            CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
            CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
            CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
            CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function(x, y, r1, r2, position) {
            var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
            var ox = r1 * kappa;
            var oy = r2 * kappa;
            var xm = x + r1;
            var ym = y + r2;
            switch (position) {
                case CORNER.TOP_LEFT:
                    return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
                case CORNER.TOP_RIGHT:
                    return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
                case CORNER.BOTTOM_RIGHT:
                    return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
                case CORNER.BOTTOM_LEFT:
                default:
                    return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
            }
        };
        var calculateBorderBoxPath = function(curves) {
            return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function(curves) {
            return [curves.topLeftContentBox, curves.topRightContentBox, curves.bottomRightContentBox, curves.bottomLeftContentBox];
        };
        var calculatePaddingBoxPath = function(curves) {
            return [curves.topLeftPaddingBox, curves.topRightPaddingBox, curves.bottomRightPaddingBox, curves.bottomLeftPaddingBox];
        };
        var TransformEffect = (function() {
            function TransformEffect(offsetX, offsetY, matrix) {
                this.type = 0;
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                this.matrix = matrix;
                this.target = 2 | 4;
            }
            return TransformEffect;
        }());
        var ClipEffect = (function() {
            function ClipEffect(path, target) {
                this.type = 1;
                this.target = target;
                this.path = path;
            }
            return ClipEffect;
        }());
        var isTransformEffect = function(effect) {
            return effect.type === 0;
        };
        var isClipEffect = function(effect) {
            return effect.type === 1;
        };
        var StackingContext = (function() {
            function StackingContext(container) {
                this.element = container;
                this.inlineLevel = [];
                this.nonInlineLevel = [];
                this.negativeZIndex = [];
                this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
                this.positiveZIndex = [];
                this.nonPositionedFloats = [];
                this.nonPositionedInlineLevel = [];
            }
            return StackingContext;
        }());
        var ElementPaint = (function() {
            function ElementPaint(element, parentStack) {
                this.container = element;
                this.effects = parentStack.slice(0);
                this.curves = new BoundCurves(element);
                if (element.styles.transform !== null) {
                    var offsetX = element.bounds.left + element.styles.transformOrigin[0].number;
                    var offsetY = element.bounds.top + element.styles.transformOrigin[1].number;
                    var matrix = element.styles.transform;
                    this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
                }
                if (element.styles.overflowX !== OVERFLOW.VISIBLE) {
                    var borderBox = calculateBorderBoxPath(this.curves);
                    var paddingBox = calculatePaddingBoxPath(this.curves);
                    if (equalPath(borderBox, paddingBox)) {
                        this.effects.push(new ClipEffect(borderBox, 2 | 4));
                    } else {
                        this.effects.push(new ClipEffect(borderBox, 2));
                        this.effects.push(new ClipEffect(paddingBox, 4));
                    }
                }
            }
            ElementPaint.prototype.getParentEffects = function() {
                var effects = this.effects.slice(0);
                if (this.container.styles.overflowX !== OVERFLOW.VISIBLE) {
                    var borderBox = calculateBorderBoxPath(this.curves);
                    var paddingBox = calculatePaddingBoxPath(this.curves);
                    if (!equalPath(borderBox, paddingBox)) {
                        effects.push(new ClipEffect(paddingBox, 2 | 4));
                    }
                }
                return effects;
            };
            return ElementPaint;
        }());
        var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
            parent.container.elements.forEach(function(child) {
                var treatAsRealStackingContext = contains(child.flags, 4);
                var createsStackingContext = contains(child.flags, 2);
                var paintContainer = new ElementPaint(child, parent.getParentEffects());
                if (contains(child.styles.display, 2048)) {
                    listItems.push(paintContainer);
                }
                var listOwnerItems = contains(child.flags, 8) ? [] : listItems;
                if (treatAsRealStackingContext || createsStackingContext) {
                    var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                    var stack = new StackingContext(paintContainer);
                    if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                        var order_1 = child.styles.zIndex.order;
                        if (order_1 < 0) {
                            var index_1 = 0;
                            parentStack.negativeZIndex.some(function(current, i) {
                                if (order_1 > current.element.container.styles.zIndex.order) {
                                    index_1 = i;
                                    return false;
                                } else if (index_1 > 0) {
                                    return true;
                                }
                                return false;
                            });
                            parentStack.negativeZIndex.splice(index_1, 0, stack);
                        } else if (order_1 > 0) {
                            var index_2 = 0;
                            parentStack.positiveZIndex.some(function(current, i) {
                                if (order_1 >= current.element.container.styles.zIndex.order) {
                                    index_2 = i + 1;
                                    return false;
                                } else if (index_2 > 0) {
                                    return true;
                                }
                                return false;
                            });
                            parentStack.positiveZIndex.splice(index_2, 0, stack);
                        } else {
                            parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                        }
                    } else {
                        if (child.styles.isFloating()) {
                            parentStack.nonPositionedFloats.push(stack);
                        } else {
                            parentStack.nonPositionedInlineLevel.push(stack);
                        }
                    }
                    parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
                } else {
                    if (child.styles.isInlineLevel()) {
                        stackingContext.inlineLevel.push(paintContainer);
                    } else {
                        stackingContext.nonInlineLevel.push(paintContainer);
                    }
                    parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
                }
                if (contains(child.flags, 8)) {
                    processListItems(child, listOwnerItems);
                }
            });
        };
        var processListItems = function(owner, elements) {
            var numbering = owner instanceof OLElementContainer ? owner.start : 1;
            var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
            for (var i = 0; i < elements.length; i++) {
                var item = elements[i];
                if (item.container instanceof LIElementContainer && typeof item.container.value === 'number' && item.container.value !== 0) {
                    numbering = item.container.value;
                }
                item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
                numbering += reversed ? -1 : 1;
            }
        };
        var parseStackingContexts = function(container) {
            var paintContainer = new ElementPaint(container, []);
            var root = new StackingContext(paintContainer);
            var listItems = [];
            parseStackTree(paintContainer, root, root, listItems);
            processListItems(paintContainer.container, listItems);
            return root;
        };
        var parsePathForBorder = function(curves, borderSide) {
            switch (borderSide) {
                case 0:
                    return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
                case 1:
                    return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
                case 2:
                    return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
                case 3:
                default:
                    return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
            }
        };
        var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
            var path = [];
            if (isBezierCurve(outer1)) {
                path.push(outer1.subdivide(0.5, false));
            } else {
                path.push(outer1);
            }
            if (isBezierCurve(outer2)) {
                path.push(outer2.subdivide(0.5, true));
            } else {
                path.push(outer2);
            }
            if (isBezierCurve(inner2)) {
                path.push(inner2.subdivide(0.5, true).reverse());
            } else {
                path.push(inner2);
            }
            if (isBezierCurve(inner1)) {
                path.push(inner1.subdivide(0.5, false).reverse());
            } else {
                path.push(inner1);
            }
            return path;
        };
        var paddingBox = function(element) {
            var bounds = element.bounds;
            var styles = element.styles;
            return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
            var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
            return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
        };
        var calculateBackgroundPositioningArea = function(backgroundOrigin, element) {
            if (backgroundOrigin === 0) {
                return element.bounds;
            }
            if (backgroundOrigin === 2) {
                return contentBox(element);
            }
            return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function(backgroundClip, element) {
            if (backgroundClip === BACKGROUND_CLIP.BORDER_BOX) {
                return element.bounds;
            }
            if (backgroundClip === BACKGROUND_CLIP.CONTENT_BOX) {
                return contentBox(element);
            }
            return paddingBox(element);
        };
        var calculateBackgroundRendering = function(container, index, intrinsicSize) {
            var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
            var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
            var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
            var sizeWidth = backgroundImageSize[0],
                sizeHeight = backgroundImageSize[1];
            var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
            var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
            var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
            var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
            return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function(token) {
            return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function(value) {
            return typeof value === 'number';
        };
        var calculateBackgroundSize = function(size, _a, bounds) {
            var intrinsicWidth = _a[0],
                intrinsicHeight = _a[1],
                intrinsicProportion = _a[2];
            var first = size[0],
                second = size[1];
            if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
                return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
            }
            var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
            if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
                if (hasIntrinsicValue(intrinsicProportion)) {
                    var targetRatio = bounds.width / bounds.height;
                    return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
                }
                return [bounds.width, bounds.height];
            }
            var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
            var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
            var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
            if (isAuto(first) && (!second || isAuto(second))) {
                if (hasIntrinsicWidth && hasIntrinsicHeight) {
                    return [intrinsicWidth, intrinsicHeight];
                }
                if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                    return [bounds.width, bounds.height];
                }
                if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                    var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
                    var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
                    return [width_1, height_1];
                }
                var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
                var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
                return [width_2, height_2];
            }
            if (hasIntrinsicProportion) {
                var width_3 = 0;
                var height_3 = 0;
                if (isLengthPercentage(first)) {
                    width_3 = getAbsoluteValue(first, bounds.width);
                } else if (isLengthPercentage(second)) {
                    height_3 = getAbsoluteValue(second, bounds.height);
                }
                if (isAuto(first)) {
                    width_3 = height_3 * intrinsicProportion;
                } else if (!second || isAuto(second)) {
                    height_3 = width_3 / intrinsicProportion;
                }
                return [width_3, height_3];
            }
            var width = null;
            var height = null;
            if (isLengthPercentage(first)) {
                width = getAbsoluteValue(first, bounds.width);
            } else if (second && isLengthPercentage(second)) {
                height = getAbsoluteValue(second, bounds.height);
            }
            if (width !== null && (!second || isAuto(second))) {
                height = hasIntrinsicWidth && hasIntrinsicHeight ? (width / intrinsicWidth) * intrinsicHeight : bounds.height;
            }
            if (height !== null && isAuto(first)) {
                width = hasIntrinsicWidth && hasIntrinsicHeight ? (height / intrinsicHeight) * intrinsicWidth : bounds.width;
            }
            if (width !== null && height !== null) {
                return [width, height];
            }
            throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function(values, index) {
            var value = values[index];
            if (typeof value === 'undefined') {
                return values[0];
            }
            return value;
        };
        var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
            var x = _a[0],
                y = _a[1];
            var width = _b[0],
                height = _b[1];
            switch (repeat) {
                case BACKGROUND_REPEAT.REPEAT_X:
                    return [new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))];
                case BACKGROUND_REPEAT.REPEAT_Y:
                    return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))];
                case BACKGROUND_REPEAT.NO_REPEAT:
                    return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))];
                default:
                    return [new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))];
            }
        };
        var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        var SAMPLE_TEXT = 'Hidden Text';
        var FontMetrics = (function() {
            function FontMetrics(document) {
                this._data = {};
                this._document = document;
            }
            FontMetrics.prototype.parseMetrics = function(fontFamily, fontSize) {
                var container = this._document.createElement('div');
                var img = this._document.createElement('img');
                var span = this._document.createElement('span');
                var body = this._document.body;
                container.style.visibility = 'hidden';
                container.style.fontFamily = fontFamily;
                container.style.fontSize = fontSize;
                container.style.margin = '0';
                container.style.padding = '0';
                body.appendChild(container);
                img.src = SMALL_IMAGE;
                img.width = 1;
                img.height = 1;
                img.style.margin = '0';
                img.style.padding = '0';
                img.style.verticalAlign = 'baseline';
                span.style.fontFamily = fontFamily;
                span.style.fontSize = fontSize;
                span.style.margin = '0';
                span.style.padding = '0';
                span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.appendChild(span);
                container.appendChild(img);
                var baseline = img.offsetTop - span.offsetTop + 2;
                container.removeChild(span);
                container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.style.lineHeight = 'normal';
                img.style.verticalAlign = 'super';
                var middle = img.offsetTop - container.offsetTop + 2;
                body.removeChild(container);
                return {
                    baseline: baseline,
                    middle: middle
                };
            };
            FontMetrics.prototype.getMetrics = function(fontFamily, fontSize) {
                var key = fontFamily + " " + fontSize;
                if (typeof this._data[key] === 'undefined') {
                    this._data[key] = this.parseMetrics(fontFamily, fontSize);
                }
                return this._data[key];
            };
            return FontMetrics;
        }());
        var MASK_OFFSET = 10000;
        var CanvasRenderer = (function() {
            function CanvasRenderer(options) {
                this._activeEffects = [];
                this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.options = options;
                if (!options.canvas) {
                    this.canvas.width = Math.floor(options.width * options.scale);
                    this.canvas.height = Math.floor(options.height * options.scale);
                    this.canvas.style.width = options.width + "px";
                    this.canvas.style.height = options.height + "px";
                }
                this.fontMetrics = new FontMetrics(document);
                this.ctx.scale(this.options.scale, this.options.scale);
                this.ctx.translate(-options.x + options.scrollX, -options.y + options.scrollY);
                this.ctx.textBaseline = 'bottom';
                this._activeEffects = [];
                Logger.getInstance(options.id).debug("Canvas renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            }
            CanvasRenderer.prototype.applyEffects = function(effects, target) {
                var _this = this;
                while (this._activeEffects.length) {
                    this.popEffect();
                }
                effects.filter(function(effect) {
                    return contains(effect.target, target);
                }).forEach(function(effect) {
                    return _this.applyEffect(effect);
                });
            };
            CanvasRenderer.prototype.applyEffect = function(effect) {
                this.ctx.save();
                if (isTransformEffect(effect)) {
                    this.ctx.translate(effect.offsetX, effect.offsetY);
                    this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                    this.ctx.translate(-effect.offsetX, -effect.offsetY);
                }
                if (isClipEffect(effect)) {
                    this.path(effect.path);
                    this.ctx.clip();
                }
                this._activeEffects.push(effect);
            };
            CanvasRenderer.prototype.popEffect = function() {
                this._activeEffects.pop();
                this.ctx.restore();
            };
            CanvasRenderer.prototype.renderStack = function(stack) {
                return __awaiter(this, void 0, void 0, function() {
                    var styles;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                styles = stack.element.container.styles;
                                if (!styles.isVisible()) return [3, 2];
                                this.ctx.globalAlpha = styles.opacity;
                                return [4, this.renderStackContent(stack)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderNode = function(paint) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (!paint.container.styles.isVisible()) return [3, 3];
                                return [4, this.renderNodeBackgroundAndBorders(paint)];
                            case 1:
                                _a.sent();
                                return [4, this.renderNodeContent(paint)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderTextWithLetterSpacing = function(text, letterSpacing) {
                var _this = this;
                if (letterSpacing === 0) {
                    this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                } else {
                    var letters = toCodePoints(text.text).map(function(i) {
                        return fromCodePoint(i);
                    });
                    letters.reduce(function(left, letter) {
                        _this.ctx.fillText(letter, left, text.bounds.top + text.bounds.height);
                        return left + _this.ctx.measureText(letter).width;
                    }, text.bounds.left);
                }
            };
            CanvasRenderer.prototype.createFontStyle = function(styles) {
                var fontVariant = styles.fontVariant.filter(function(variant) {
                    return variant === 'normal' || variant === 'small-caps';
                }).join('');
                var fontFamily = styles.fontFamily.join(', ');
                var fontSize = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
                return [
                    [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '), fontFamily, fontSize
                ];
            };
            CanvasRenderer.prototype.renderTextNode = function(text, styles) {
                return __awaiter(this, void 0, void 0, function() {
                    var _a, font, fontFamily, fontSize;
                    var _this = this;
                    return __generator(this, function(_b) {
                        _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                        this.ctx.font = font;
                        text.textBounds.forEach(function(text) {
                            _this.ctx.fillStyle = asString(styles.color);
                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing);
                            var textShadows = styles.textShadow;
                            if (textShadows.length && text.text.trim().length) {
                                textShadows.slice(0).reverse().forEach(function(textShadow) {
                                    _this.ctx.shadowColor = asString(textShadow.color);
                                    _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                    _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                    _this.ctx.shadowBlur = textShadow.blur.number;
                                    _this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                                });
                                _this.ctx.shadowColor = '';
                                _this.ctx.shadowOffsetX = 0;
                                _this.ctx.shadowOffsetY = 0;
                                _this.ctx.shadowBlur = 0;
                            }
                            if (styles.textDecorationLine.length) {
                                _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                styles.textDecorationLine.forEach(function(textDecorationLine) {
                                    switch (textDecorationLine) {
                                        case 1:
                                            var baseline = _this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                            _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                            break;
                                        case 2:
                                            _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                            break;
                                        case 3:
                                            var middle = _this.fontMetrics.getMetrics(fontFamily, fontSize).middle;
                                            _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                            break;
                                    }
                                });
                            }
                        });
                        return [2];
                    });
                });
            };
            CanvasRenderer.prototype.renderReplacedElement = function(container, curves, image) {
                if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                    var box = contentBox(container);
                    var path = calculatePaddingBoxPath(curves);
                    this.path(path);
                    this.ctx.save();
                    this.ctx.clip();
                    this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                    this.ctx.restore();
                }
            };
            CanvasRenderer.prototype.renderNodeContent = function(paint) {
                return __awaiter(this, void 0, void 0, function() {
                    var container, curves, styles, _i, _a, child, image, e_1, image, e_2, iframeRenderer, canvas, size, bounds, x, textBounds, img, image, url, e_3, bounds;
                    return __generator(this, function(_b) {
                        switch (_b.label) {
                            case 0:
                                this.applyEffects(paint.effects, 4);
                                container = paint.container;
                                curves = paint.curves;
                                styles = container.styles;
                                _i = 0, _a = container.textNodes;
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3, 4];
                                child = _a[_i];
                                return [4, this.renderTextNode(child, styles)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3, 1];
                            case 4:
                                if (!(container instanceof ImageElementContainer)) return [3, 8];
                                _b.label = 5;
                            case 5:
                                _b.trys.push([5, 7, , 8]);
                                return [4, this.options.cache.match(container.src)];
                            case 6:
                                image = _b.sent();
                                this.renderReplacedElement(container, curves, image);
                                return [3, 8];
                            case 7:
                                e_1 = _b.sent();
                                Logger.getInstance(this.options.id).error("Error loading image " + container.src);
                                return [3, 8];
                            case 8:
                                if (container instanceof CanvasElementContainer) {
                                    this.renderReplacedElement(container, curves, container.canvas);
                                }
                                if (!(container instanceof SVGElementContainer)) return [3, 12];
                                _b.label = 9;
                            case 9:
                                _b.trys.push([9, 11, , 12]);
                                return [4, this.options.cache.match(container.svg)];
                            case 10:
                                image = _b.sent();
                                this.renderReplacedElement(container, curves, image);
                                return [3, 12];
                            case 11:
                                e_2 = _b.sent();
                                Logger.getInstance(this.options.id).error("Error loading svg " + container.svg.substring(0, 255));
                                return [3, 12];
                            case 12:
                                if (!(container instanceof IFrameElementContainer && container.tree)) return [3, 14];
                                iframeRenderer = new CanvasRenderer({
                                    id: this.options.id,
                                    scale: this.options.scale,
                                    backgroundColor: container.backgroundColor,
                                    x: 0,
                                    y: 0,
                                    scrollX: 0,
                                    scrollY: 0,
                                    width: container.width,
                                    height: container.height,
                                    cache: this.options.cache,
                                    windowWidth: container.width,
                                    windowHeight: container.height
                                });
                                return [4, iframeRenderer.render(container.tree)];
                            case 13:
                                canvas = _b.sent();
                                if (container.width && container.height) {
                                    this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                                }
                                _b.label = 14;
                            case 14:
                                if (container instanceof InputElementContainer) {
                                    size = Math.min(container.bounds.width, container.bounds.height);
                                    if (container.type === CHECKBOX) {
                                        if (container.checked) {
                                            this.ctx.save();
                                            this.path([new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)]);
                                            this.ctx.fillStyle = asString(INPUT_COLOR);
                                            this.ctx.fill();
                                            this.ctx.restore();
                                        }
                                    } else if (container.type === RADIO) {
                                        if (container.checked) {
                                            this.ctx.save();
                                            this.ctx.beginPath();
                                            this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                            this.ctx.fillStyle = asString(INPUT_COLOR);
                                            this.ctx.fill();
                                            this.ctx.restore();
                                        }
                                    }
                                }
                                if (isTextInputElement(container) && container.value.length) {
                                    this.ctx.font = this.createFontStyle(styles)[0];
                                    this.ctx.fillStyle = asString(styles.color);
                                    this.ctx.textBaseline = 'middle';
                                    this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                    bounds = contentBox(container);
                                    x = 0;
                                    switch (container.styles.textAlign) {
                                        case TEXT_ALIGN.CENTER:
                                            x += bounds.width / 2;
                                            break;
                                        case TEXT_ALIGN.RIGHT:
                                            x += bounds.width;
                                            break;
                                    }
                                    textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                    this.ctx.save();
                                    this.path([new Vector(bounds.left, bounds.top), new Vector(bounds.left + bounds.width, bounds.top), new Vector(bounds.left + bounds.width, bounds.top + bounds.height), new Vector(bounds.left, bounds.top + bounds.height)]);
                                    this.ctx.clip();
                                    this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing);
                                    this.ctx.restore();
                                    this.ctx.textBaseline = 'bottom';
                                    this.ctx.textAlign = 'left';
                                }
                                if (!contains(container.styles.display, 2048)) return [3, 20];
                                if (!(container.styles.listStyleImage !== null)) return [3, 19];
                                img = container.styles.listStyleImage;
                                if (!(img.type === CSSImageType.URL)) return [3, 18];
                                image = void 0;
                                url = img.url;
                                _b.label = 15;
                            case 15:
                                _b.trys.push([15, 17, , 18]);
                                return [4, this.options.cache.match(url)];
                            case 16:
                                image = _b.sent();
                                this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                                return [3, 18];
                            case 17:
                                e_3 = _b.sent();
                                Logger.getInstance(this.options.id).error("Error loading list-style-image " + url);
                                return [3, 18];
                            case 18:
                                return [3, 20];
                            case 19:
                                if (paint.listValue && container.styles.listStyleType !== LIST_STYLE_TYPE.NONE) {
                                    this.ctx.font = this.createFontStyle(styles)[0];
                                    this.ctx.fillStyle = asString(styles.color);
                                    this.ctx.textBaseline = 'middle';
                                    this.ctx.textAlign = 'right';
                                    bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                    this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing);
                                    this.ctx.textBaseline = 'bottom';
                                    this.ctx.textAlign = 'left';
                                }
                                _b.label = 20;
                            case 20:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderStackContent = function(stack) {
                return __awaiter(this, void 0, void 0, function() {
                    var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                    return __generator(this, function(_p) {
                        switch (_p.label) {
                            case 0:
                                return [4, this.renderNodeBackgroundAndBorders(stack.element)];
                            case 1:
                                _p.sent();
                                _i = 0, _a = stack.negativeZIndex;
                                _p.label = 2;
                            case 2:
                                if (!(_i < _a.length)) return [3, 5];
                                child = _a[_i];
                                return [4, this.renderStack(child)];
                            case 3:
                                _p.sent();
                                _p.label = 4;
                            case 4:
                                _i++;
                                return [3, 2];
                            case 5:
                                return [4, this.renderNodeContent(stack.element)];
                            case 6:
                                _p.sent();
                                _b = 0, _c = stack.nonInlineLevel;
                                _p.label = 7;
                            case 7:
                                if (!(_b < _c.length)) return [3, 10];
                                child = _c[_b];
                                return [4, this.renderNode(child)];
                            case 8:
                                _p.sent();
                                _p.label = 9;
                            case 9:
                                _b++;
                                return [3, 7];
                            case 10:
                                _d = 0, _e = stack.nonPositionedFloats;
                                _p.label = 11;
                            case 11:
                                if (!(_d < _e.length)) return [3, 14];
                                child = _e[_d];
                                return [4, this.renderStack(child)];
                            case 12:
                                _p.sent();
                                _p.label = 13;
                            case 13:
                                _d++;
                                return [3, 11];
                            case 14:
                                _f = 0, _g = stack.nonPositionedInlineLevel;
                                _p.label = 15;
                            case 15:
                                if (!(_f < _g.length)) return [3, 18];
                                child = _g[_f];
                                return [4, this.renderStack(child)];
                            case 16:
                                _p.sent();
                                _p.label = 17;
                            case 17:
                                _f++;
                                return [3, 15];
                            case 18:
                                _h = 0, _j = stack.inlineLevel;
                                _p.label = 19;
                            case 19:
                                if (!(_h < _j.length)) return [3, 22];
                                child = _j[_h];
                                return [4, this.renderNode(child)];
                            case 20:
                                _p.sent();
                                _p.label = 21;
                            case 21:
                                _h++;
                                return [3, 19];
                            case 22:
                                _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                                _p.label = 23;
                            case 23:
                                if (!(_k < _l.length)) return [3, 26];
                                child = _l[_k];
                                return [4, this.renderStack(child)];
                            case 24:
                                _p.sent();
                                _p.label = 25;
                            case 25:
                                _k++;
                                return [3, 23];
                            case 26:
                                _m = 0, _o = stack.positiveZIndex;
                                _p.label = 27;
                            case 27:
                                if (!(_m < _o.length)) return [3, 30];
                                child = _o[_m];
                                return [4, this.renderStack(child)];
                            case 28:
                                _p.sent();
                                _p.label = 29;
                            case 29:
                                _m++;
                                return [3, 27];
                            case 30:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.mask = function(paths) {
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.lineTo(this.canvas.width, 0);
                this.ctx.lineTo(this.canvas.width, this.canvas.height);
                this.ctx.lineTo(0, this.canvas.height);
                this.ctx.lineTo(0, 0);
                this.formatPath(paths.slice(0).reverse());
                this.ctx.closePath();
            };
            CanvasRenderer.prototype.path = function(paths) {
                this.ctx.beginPath();
                this.formatPath(paths);
                this.ctx.closePath();
            };
            CanvasRenderer.prototype.formatPath = function(paths) {
                var _this = this;
                paths.forEach(function(point, index) {
                    var start = isBezierCurve(point) ? point.start : point;
                    if (index === 0) {
                        _this.ctx.moveTo(start.x, start.y);
                    } else {
                        _this.ctx.lineTo(start.x, start.y);
                    }
                    if (isBezierCurve(point)) {
                        _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            };
            CanvasRenderer.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
                this.path(path);
                this.ctx.fillStyle = pattern;
                this.ctx.translate(offsetX, offsetY);
                this.ctx.fill();
                this.ctx.translate(-offsetX, -offsetY);
            };
            CanvasRenderer.prototype.resizeImage = function(image, width, height) {
                if (image.width === width && image.height === height) {
                    return image;
                }
                var canvas = this.canvas.ownerDocument.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
                return canvas;
            };
            CanvasRenderer.prototype.renderBackgroundImage = function(container) {
                return __awaiter(this, void 0, void 0, function() {
                    var index, _loop_1, this_1, _i, _a, backgroundImage;
                    return __generator(this, function(_b) {
                        switch (_b.label) {
                            case 0:
                                index = container.styles.backgroundImage.length - 1;
                                _loop_1 = function(backgroundImage) {
                                    var image, url, e_4, _a, path, x, y, width, height, pattern, _b, path, x, y, width, height, _c, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _d, path, left, top_1, width, height, position, x, y, _e, rx, ry, radialGradient_1, midX, midY, f, invF;
                                    return __generator(this, function(_f) {
                                        switch (_f.label) {
                                            case 0:
                                                if (!(backgroundImage.type === CSSImageType.URL)) return [3, 5];
                                                image = void 0;
                                                url = backgroundImage.url;
                                                _f.label = 1;
                                            case 1:
                                                _f.trys.push([1, 3, , 4]);
                                                return [4, this_1.options.cache.match(url)];
                                            case 2:
                                                image = _f.sent();
                                                return [3, 4];
                                            case 3:
                                                e_4 = _f.sent();
                                                Logger.getInstance(this_1.options.id).error("Error loading background-image " + url);
                                                return [3, 4];
                                            case 4:
                                                if (image) {
                                                    _a = calculateBackgroundRendering(container, index, [image.width, image.height, image.width / image.height]), path = _a[0], x = _a[1], y = _a[2], width = _a[3], height = _a[4];
                                                    pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                                return [3, 6];
                                            case 5:
                                                if (isLinearGradient(backgroundImage)) {
                                                    _b = calculateBackgroundRendering(container, index, [null, null, null]), path = _b[0], x = _b[1], y = _b[2], width = _b[3], height = _b[4];
                                                    _c = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _c[0], x0 = _c[1], x1 = _c[2], y0 = _c[3], y1 = _c[4];
                                                    canvas = document.createElement('canvas');
                                                    canvas.width = width;
                                                    canvas.height = height;
                                                    ctx = canvas.getContext('2d');
                                                    gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                    processColorStops(backgroundImage.stops, lineLength).forEach(function(colorStop) {
                                                        return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    ctx.fillStyle = gradient_1;
                                                    ctx.fillRect(0, 0, width, height);
                                                    if (width > 0 && height > 0) {
                                                        pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                        this_1.renderRepeat(path, pattern, x, y);
                                                    }
                                                } else if (isRadialGradient(backgroundImage)) {
                                                    _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], left = _d[1], top_1 = _d[2], width = _d[3], height = _d[4];
                                                    position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                                    x = getAbsoluteValue(position[0], width);
                                                    y = getAbsoluteValue(position[position.length - 1], height);
                                                    _e = calculateRadius(backgroundImage, x, y, width, height), rx = _e[0], ry = _e[1];
                                                    if (rx > 0 && rx > 0) {
                                                        radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                        processColorStops(backgroundImage.stops, rx * 2).forEach(function(colorStop) {
                                                            return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                        });
                                                        this_1.path(path);
                                                        this_1.ctx.fillStyle = radialGradient_1;
                                                        if (rx !== ry) {
                                                            midX = container.bounds.left + 0.5 * container.bounds.width;
                                                            midY = container.bounds.top + 0.5 * container.bounds.height;
                                                            f = ry / rx;
                                                            invF = 1 / f;
                                                            this_1.ctx.save();
                                                            this_1.ctx.translate(midX, midY);
                                                            this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                            this_1.ctx.translate(-midX, -midY);
                                                            this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                            this_1.ctx.restore();
                                                        } else {
                                                            this_1.ctx.fill();
                                                        }
                                                    }
                                                }
                                                _f.label = 6;
                                            case 6:
                                                index--;
                                                return [2];
                                        }
                                    });
                                };
                                this_1 = this;
                                _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3, 4];
                                backgroundImage = _a[_i];
                                return [5, _loop_1(backgroundImage)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3, 1];
                            case 4:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.renderBorder = function(color, side, curvePoints) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        this.path(parsePathForBorder(curvePoints, side));
                        this.ctx.fillStyle = asString(color);
                        this.ctx.fill();
                        return [2];
                    });
                });
            };
            CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function(paint) {
                return __awaiter(this, void 0, void 0, function() {
                    var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                    var _this = this;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                this.applyEffects(paint.effects, 2);
                                styles = paint.container.styles;
                                hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                                borders = [{
                                    style: styles.borderTopStyle,
                                    color: styles.borderTopColor
                                }, {
                                    style: styles.borderRightStyle,
                                    color: styles.borderRightColor
                                }, {
                                    style: styles.borderBottomStyle,
                                    color: styles.borderBottomColor
                                }, {
                                    style: styles.borderLeftStyle,
                                    color: styles.borderLeftColor
                                }];
                                backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                                if (!(hasBackground || styles.boxShadow.length)) return [3, 2];
                                this.ctx.save();
                                this.path(backgroundPaintingArea);
                                this.ctx.clip();
                                if (!isTransparent(styles.backgroundColor)) {
                                    this.ctx.fillStyle = asString(styles.backgroundColor);
                                    this.ctx.fill();
                                }
                                return [4, this.renderBackgroundImage(paint.container)];
                            case 1:
                                _a.sent();
                                this.ctx.restore();
                                styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                                    _this.ctx.save();
                                    var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                    var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                    var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                    if (shadow.inset) {
                                        _this.path(borderBoxArea);
                                        _this.ctx.clip();
                                        _this.mask(shadowPaintingArea);
                                    } else {
                                        _this.mask(borderBoxArea);
                                        _this.ctx.clip();
                                        _this.path(shadowPaintingArea);
                                    }
                                    _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                    _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                    _this.ctx.shadowColor = asString(shadow.color);
                                    _this.ctx.shadowBlur = shadow.blur.number;
                                    _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                                    _this.ctx.fill();
                                    _this.ctx.restore();
                                });
                                _a.label = 2;
                            case 2:
                                side = 0;
                                _i = 0, borders_1 = borders;
                                _a.label = 3;
                            case 3:
                                if (!(_i < borders_1.length)) return [3, 7];
                                border = borders_1[_i];
                                if (!(border.style !== BORDER_STYLE.NONE && !isTransparent(border.color))) return [3, 5];
                                return [4, this.renderBorder(border.color, side, paint.curves)];
                            case 4:
                                _a.sent();
                                _a.label = 5;
                            case 5:
                                side++;
                                _a.label = 6;
                            case 6:
                                _i++;
                                return [3, 3];
                            case 7:
                                return [2];
                        }
                    });
                });
            };
            CanvasRenderer.prototype.render = function(element) {
                return __awaiter(this, void 0, void 0, function() {
                    var stack;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.options.backgroundColor) {
                                    this.ctx.fillStyle = asString(this.options.backgroundColor);
                                    this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height);
                                }
                                stack = parseStackingContexts(element);
                                return [4, this.renderStack(stack)];
                            case 1:
                                _a.sent();
                                this.applyEffects([], 2);
                                return [2, this.canvas];
                        }
                    });
                });
            };
            return CanvasRenderer;
        }());
        var isTextInputElement = function(container) {
            if (container instanceof TextareaElementContainer) {
                return true;
            } else if (container instanceof SelectElementContainer) {
                return true;
            } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
                return true;
            }
            return false;
        };
        var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
            switch (clip) {
                case BACKGROUND_CLIP.BORDER_BOX:
                    return calculateBorderBoxPath(curves);
                case BACKGROUND_CLIP.CONTENT_BOX:
                    return calculateContentBoxPath(curves);
                case BACKGROUND_CLIP.PADDING_BOX:
                default:
                    return calculatePaddingBoxPath(curves);
            }
        };
        var canvasTextAlign = function(textAlign) {
            switch (textAlign) {
                case TEXT_ALIGN.CENTER:
                    return 'center';
                case TEXT_ALIGN.RIGHT:
                    return 'right';
                case TEXT_ALIGN.LEFT:
                default:
                    return 'left';
            }
        };
        var ForeignObjectRenderer = (function() {
            function ForeignObjectRenderer(options) {
                this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.options = options;
                this.canvas.width = Math.floor(options.width * options.scale);
                this.canvas.height = Math.floor(options.height * options.scale);
                this.canvas.style.width = options.width + "px";
                this.canvas.style.height = options.height + "px";
                this.ctx.scale(this.options.scale, this.options.scale);
                this.ctx.translate(-options.x + options.scrollX, -options.y + options.scrollY);
                Logger.getInstance(options.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            }
            ForeignObjectRenderer.prototype.render = function(element) {
                return __awaiter(this, void 0, void 0, function() {
                    var svg, img;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                svg = createForeignObjectSVG(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, element);
                                return [4, loadSerializedSVG$1(svg)];
                            case 1:
                                img = _a.sent();
                                if (this.options.backgroundColor) {
                                    this.ctx.fillStyle = asString(this.options.backgroundColor);
                                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                                }
                                this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                                return [2, this.canvas];
                        }
                    });
                });
            };
            return ForeignObjectRenderer;
        }());
        var loadSerializedSVG$1 = function(svg) {
            return new Promise(function(resolve, reject) {
                var img = new Image();
                img.onload = function() {
                    resolve(img);
                };
                img.onerror = reject;
                img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
            });
        };
        var _this = undefined;
        var parseColor$1 = function(value) {
            return color.parse(Parser.create(value).parseComponentValue());
        };
        var html2canvas = function(element, options) {
            if (options === void 0) {
                options = {};
            }
            return renderElement(element, options);
        };
        if (typeof window !== 'undefined') {
            CacheStorage.setContext(window);
        }
        var renderElement = function(element, opts) {
            return __awaiter(_this, void 0, void 0, function() {
                var ownerDocument, defaultView, instanceName, _a, width, height, left, top, defaultResourceOptions, resourceOptions, defaultOptions, options, windowBounds, documentCloner, clonedElement, container, documentBackgroundColor, bodyBackgroundColor, bgColor, defaultBackgroundColor, backgroundColor, renderOptions, canvas, renderer, root, renderer;
                return __generator(this, function(_b) {
                    switch (_b.label) {
                        case 0:
                            ownerDocument = element.ownerDocument;
                            if (!ownerDocument) {
                                throw new Error("Element is not attached to a Document");
                            }
                            defaultView = ownerDocument.defaultView;
                            if (!defaultView) {
                                throw new Error("Document is not attached to a Window");
                            }
                            instanceName = (Math.round(Math.random() * 1000) + Date.now()).toString(16);
                            _a = isBodyElement(element) || isHTMLElement(element) ? parseDocumentSize(ownerDocument) : parseBounds(element), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                            defaultResourceOptions = {
                                allowTaint: false,
                                imageTimeout: 15000,
                                proxy: undefined,
                                useCORS: false
                            };
                            resourceOptions = __assign({}, defaultResourceOptions, opts);
                            defaultOptions = {
                                backgroundColor: '#ffffff',
                                cache: opts.cache ? opts.cache : CacheStorage.create(instanceName, resourceOptions),
                                logging: true,
                                removeContainer: true,
                                foreignObjectRendering: false,
                                scale: defaultView.devicePixelRatio || 1,
                                windowWidth: defaultView.innerWidth,
                                windowHeight: defaultView.innerHeight,
                                scrollX: defaultView.pageXOffset,
                                scrollY: defaultView.pageYOffset,
                                x: left,
                                y: top,
                                width: Math.ceil(width),
                                height: Math.ceil(height),
                                id: instanceName
                            };
                            options = __assign({}, defaultOptions, resourceOptions, opts);
                            windowBounds = new Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);
                            Logger.create({
                                id: instanceName,
                                enabled: options.logging
                            });
                            Logger.getInstance(instanceName).debug("Starting document clone");
                            documentCloner = new DocumentCloner(element, {
                                id: instanceName,
                                onclone: options.onclone,
                                ignoreElements: options.ignoreElements,
                                inlineImages: options.foreignObjectRendering,
                                copyStyles: options.foreignObjectRendering
                            });
                            clonedElement = documentCloner.clonedReferenceElement;
                            if (!clonedElement) {
                                return [2, Promise.reject("Unable to find element in cloned iframe")];
                            }
                            return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
                        case 1:
                            container = _b.sent();
                            documentBackgroundColor = ownerDocument.documentElement ? parseColor$1(getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                            bodyBackgroundColor = ownerDocument.body ? parseColor$1(getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
                            bgColor = opts.backgroundColor;
                            defaultBackgroundColor = typeof bgColor === 'string' ? parseColor$1(bgColor) : bgColor === null ? COLORS.TRANSPARENT : 0xffffffff;
                            backgroundColor = element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
                            renderOptions = {
                                id: instanceName,
                                cache: options.cache,
                                canvas: options.canvas,
                                backgroundColor: backgroundColor,
                                scale: options.scale,
                                x: options.x,
                                y: options.y,
                                scrollX: options.scrollX,
                                scrollY: options.scrollY,
                                width: options.width,
                                height: options.height,
                                windowWidth: options.windowWidth,
                                windowHeight: options.windowHeight
                            };
                            if (!options.foreignObjectRendering) return [3, 3];
                            Logger.getInstance(instanceName).debug("Document cloned, using foreign object rendering");
                            renderer = new ForeignObjectRenderer(renderOptions);
                            return [4, renderer.render(clonedElement)];
                        case 2:
                            canvas = _b.sent();
                            return [3, 5];
                        case 3:
                            Logger.getInstance(instanceName).debug("Document cloned, using computed rendering");
                            CacheStorage.attachInstance(options.cache);
                            Logger.getInstance(instanceName).debug("Starting DOM parsing");
                            root = parseTree(clonedElement);
                            CacheStorage.detachInstance();
                            if (backgroundColor === root.styles.backgroundColor) {
                                root.styles.backgroundColor = COLORS.TRANSPARENT;
                            }
                            Logger.getInstance(instanceName).debug("Starting renderer");
                            renderer = new CanvasRenderer(renderOptions);
                            return [4, renderer.render(root)];
                        case 4:
                            canvas = _b.sent();
                            _b.label = 5;
                        case 5:
                            if (options.removeContainer === true) {
                                if (!DocumentCloner.destroy(container)) {
                                    Logger.getInstance(instanceName).error("Cannot detach cloned iframe as it is not in the DOM anymore");
                                }
                            }
                            Logger.getInstance(instanceName).debug("Finished rendering");
                            Logger.destroy(instanceName);
                            CacheStorage.destroy(instanceName);
                            return [2, canvas];
                    }
                });
            });
        };
        return html2canvas;
    }));
}
webpackJsonp([1], [function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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

    function s() {
        var e = ["23402", "23410", "23411", "23415", "42003", "52505"],
            t = navigator.mozMobileConnections,
            n = !1;
        dump("launcher preorpostpay enter");
        var i = Array.from(t).map(function(e) {
                var t = navigator.mozIccManager.getIccById(e.iccId);
                if (!t) return null;
                var n = t.iccInfo;
                return {
                    iccid: e.iccId,
                    mccmnc: n ? n.mcc + n.mnc : null
                }
            }),
            r = JSON.parse(localStorage.getItem("operators"));
        r && dump("launcher preorpostpay oldOperators = " + JSON.stringify(r)), i && dump("launcher preorpostpay newoperators = " + JSON.stringify(i));
        var o = function(t) {
            dump("launcher preorpostpay item = " + t + " operator1_select = " + n), i && i[t] && e.indexOf(i[t].mccmnc) > -1 && (!r || JSON.stringify(r[t]) !== JSON.stringify(i[t])) && (n ? N.default.on("user-has-selected", function() {
                dump("launcher preorpostpay recv user-has-selected and start dialog 2"), n = !1, setTimeout(function() {
                    u(i[t], t)
                }, 300)
            }) : (dump("launcher preorpostpay start dialog 1"), u(i[t], t), n = !0))
        };
        for (var a in i) o(a);
        localStorage.setItem("operators", JSON.stringify(i))
    }

    function u(e, t) {
        var n = new OperatorVariantHandler_launcher(e.iccid, t, this);
        n && (dump("launcher preorpostpay new operatorVariantHandlers success!"), n.setmccmnc(e.mccmnc.substring(0, 3), e.mccmnc.substring(3, 5)), n.retrieveOperatorVariantUserselect(function(i, r) {
            var o = i.length,
                a = r.length;
            dump("launcher preorpostpay default length is: " + o + " mms length is: " + a), (o > 1 || a > 1) && (w.default.request("APNSelection:setOperatorInfo", t, e, i, r, n), w.default.request("openSheet", "apnselection"))
        }))
    }
    var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        f = n(3),
        d = i(f),
        p = n(13),
        h = i(p),
        m = n(5),
        g = i(m),
        v = n(89),
        y = i(v),
        b = n(4),
        w = i(b),
        _ = n(88),
        k = i(_),
        S = n(260),
        E = i(S),
        O = n(251),
        I = i(O),
        A = n(242),
        L = i(A),
        P = n(246),
        T = i(P),
        C = n(255),
        M = i(C),
        R = n(241),
        j = i(R),
        x = n(133),
        N = i(x);
    n(253);
    var D = n(240),
        U = i(D),
        z = n(257),
        B = i(z),
        F = n(129),
        q = i(F),
        V = n(132),
        K = i(V),
        H = n(249),
        W = i(H),
        Y = n(243),
        J = i(Y);
    n(75), n(131), n(135), n(134), window.performance.mark("navigationLoaded"), window.addEventListener("load", function() {
        window.performance.mark("fullyLoaded"), dump("launcher app recv fullyLoaded"), document.body.classList.add("loaded"), setTimeout(function() {
            document.body.classList.remove("loaded")
        }, 3e3), s()
    });
    var G = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "App", n.panels = {}, n.state = {
                grid: W.default.grid
            }, window.AppStore = new J.default, window.app = n, window.Service = w.default, window.performance.mark("navigationInteractive"), dump("launcher app constructor"), n
        }
        return a(t, e), c(t, [{
            key: "componentWillMount",
            value: function() {
                window.performance.mark("contentInteractive")
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.element = h.default.findDOMNode(this), window.performance.mark("visuallyLoaded"), this.focusWhenReady(), this._handle_largetextenabledchanged(), window.addEventListener("largetextenabledchanged", this), window.addEventListener("visibilitychange", this), w.default.register("openSheet", this), w.default.register("closeSheet", this), w.default.registerState("lastSheet", this), w.default.registerState("panelAnimationRunning", this), this.element.style.setProperty("--grid-row", this.state.grid.row), this.element.style.setProperty("--grid-col", this.state.grid.col)
            }
        }, {
            key: "_handle_largetextenabledchanged",
            value: function() {
                document.body.classList.toggle("large-text", navigator.largeTextEnabled)
            }
        }, {
key: "_handle_visibilitychange",
value: function() {
if (!document.hidden) {
if (this.hasPopupDom()) return;
// Ранняя страховка: сразу снять визуальный класс открытия списка
try {
  this.element && this.element.classList && this.element.classList.remove('panel-appList--opened');
} catch (e) {}

switch (this.lastSheet) {
  case "MainView":
    this.panels.mainView && this.panels.mainView.focus();
    break;

  case "appList":
    // Закрыть лист корректно и вернуть фокус на главный
    try {
      // если в App есть метод closeSheet — используем его
      this.closeSheet && this.closeSheet('appList');
    } catch (e) {}

    // На всякий случай принудительно снять класс, если по каким-то причинам closeSheet не сработал
    try {
      this.element && this.element.classList && this.element.classList.remove('panel-appList--opened');
    } catch (e) {}

    this.lastSheet = 'MainView';

    // Фокус на главный экран на ближайшем кадре — предотвращает “мигание” AppList
    var self = this;
    try {
      window.requestAnimationFrame(function() {
        if (self.panels && self.panels.mainView) self.panels.mainView.focus();
      });
    } catch (e) {
      // если rAF недоступен — прямой фокус
      if (this.panels && this.panels.mainView) this.panels.mainView.focus();
    }
    break;
}

}
}
        }, {
            key: "hasPopupDom",
            value: function() {
                var e = document.querySelector("#dialog-root .dialog-container"),
                    t = document.querySelector("#menu-root .option-menu-container"),
                    n = document.querySelector("#sim-chooser .option-menu-container");
                return e && "none" !== window.getComputedStyle(e).display ? (e.focus(), !0) : n && "none" !== window.getComputedStyle(n).display ? (n.focus(), !0) : !(!t || "none" === window.getComputedStyle(t).display) && (t.focus(), !0)
            }
        }, {
            key: "focusWhenReady",
            value: function() {
                var e = this;
                if (!this.focusMainView()) {
                    var t = function t() {
                        e.focusMainView(), document.removeEventListener("visibilitychange", t)
                    };
                    document.addEventListener("visibilitychange", t)
                }
            }
        }, {
            key: "focusMainView",
            value: function() {
                return w.default.query("Tutorial.hasViewed") ? this.panels.mainView.focus() : w.default.request("Tutorial:focus"), !document.hidden
            }
        }, {
            key: "openSheet",
            value: function(e) {
                switch (this.lastSheet = e, this.panels[e].open && this.panels[e].open(), e) {
                    case "sidemenu":
                        w.default.request("Sidemenu:focus");
                        break;
                    case "folder":
                        w.default.request("Folder:markAsFocused")
                }
                this.element.classList.add("panel-" + e + "--opened")
            }
        }, {
            key: "closeSheet",
            value: function(e) {
                this.panels[e].isClosed && this.panels[e].isClosed() || (this.panels[e].close && this.panels[e].close(), this.element.classList.remove("panel-" + e + "--opened"), "dialer" !== e && "folder" !== e && "qrface" !== e || this.panels.appList.isClosed() ? (!document.hidden && this.panels.mainView.focus(), this.lastSheet = "MainView") : (!document.hidden && this.panels.appList.focus(), this.lastSheet = "appList"))
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return d.default.createElement("div", {
                    className: "app-workspace"
                }, d.default.createElement("div", {
                    className: "app-content"
                }, d.default.createElement(I.default, {
                    ref: function(t) {
                        e.panels.mainView = t
                    }
                }), d.default.createElement(L.default, l({
                    ref: function(t) {
                        e.panels.appList = t
                    }
                }, this.state.grid)), d.default.createElement(U.default, {
                    ref: function(t) {
                        e.panels.folder = t
                    }
                }), d.default.createElement(T.default, {
                    ref: function(t) {
                        e.panels.dialer = t
                    }
                }), d.default.createElement(M.default, {
                    ref: function(t) {
                        e.panels.qrface = t
                    }
                }), d.default.createElement(j.default, {
                    ref: function(t) {
                        e.panels.apnselection = t
                    }
                })), d.default.createElement(E.default, {
                    ref: function(t) {
                        e.panels.tutorial = t
                    }
                }), d.default.createElement(B.default, {
                    ref: function(t) {
                        e.panels.sidemenu = t
                    }
                }), d.default.createElement(K.default, null), d.default.createElement("div", {
                    id: "sim-chooser"
                }, d.default.createElement(k.default, null)), d.default.createElement(q.default, null), d.default.createElement(y.default, {
                    ref: function(t) {
                        e.panels.softKey = t
                    }
                }))
            }
        }]), t
    }(g.default);
    h.default.render(d.default.createElement(G, null), document.getElementById("root"))
}, , , , , , , , , , , , , , , , , , , , , function(e, t) {
    "use strict";
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, , , function(e, t, n) {
    (function(e, i) {
        "use strict";

        function r() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }

        function o() {
            return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(t, n) {
            if (o() < n) throw new RangeError("Invalid typed array length");
            return e.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n), t.__proto__ = e.prototype) : (null === t && (t = new e(n)), t.length = n), t
        }

        function e(t, n, i) {
            if (!(e.TYPED_ARRAY_SUPPORT || this instanceof e)) return new e(t, n, i);
            if ("number" == typeof t) {
                if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t)
            }
            return s(this, t, n, i)
        }

        function s(e, t, n, i) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, n, i) : "string" == typeof t ? f(e, t, n) : h(e, t)
        }

        function u(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(e, t, n, i) {
            return u(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof i ? a(e, t).fill(n, i) : a(e, t).fill(n) : a(e, t)
        }

        function c(t, n) {
            if (u(n), t = a(t, n < 0 ? 0 : 0 | m(n)), !e.TYPED_ARRAY_SUPPORT)
                for (var i = 0; i < n; ++i) t[i] = 0;
            return t
        }

        function f(t, n, i) {
            if ("string" == typeof i && "" !== i || (i = "utf8"), !e.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | v(n, i);
            t = a(t, r);
            var o = t.write(n, i);
            return o !== r && (t = t.slice(0, o)), t
        }

        function d(e, t) {
            var n = t.length < 0 ? 0 : 0 | m(t.length);
            e = a(e, n);
            for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
            return e
        }

        function p(t, n, i, r) {
            if (n.byteLength, i < 0 || n.byteLength < i) throw new RangeError("'offset' is out of bounds");
            if (n.byteLength < i + (r || 0)) throw new RangeError("'length' is out of bounds");
            return n = void 0 === i && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, i) : new Uint8Array(n, i, r), e.TYPED_ARRAY_SUPPORT ? (t = n, t.__proto__ = e.prototype) : t = d(t, n), t
        }

        function h(t, n) {
            if (e.isBuffer(n)) {
                var i = 0 | m(n.length);
                return t = a(t, i), 0 === t.length ? t : (n.copy(t, 0, 0, i), t)
            }
            if (n) {
                if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || X(n.length) ? a(t, 0) : d(t, n);
                if ("Buffer" === n.type && $(n.data)) return d(t, n.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function m(e) {
            if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
            return 0 | e
        }

        function g(t) {
            return +t != t && (t = 0), e.alloc(+t)
        }

        function v(t, n) {
            if (e.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var i = t.length;
            if (0 === i) return 0;
            for (var r = !1;;) switch (n) {
                case "ascii":
                case "latin1":
                case "binary":
                    return i;
                case "utf8":
                case "utf-8":
                case void 0:
                    return H(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * i;
                case "hex":
                    return i >>> 1;
                case "base64":
                    return J(t).length;
                default:
                    if (r) return H(t).length;
                    n = ("" + n).toLowerCase(), r = !0
            }
        }

        function y(e, t, n) {
            var i = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if (n >>>= 0, t >>>= 0, n <= t) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return R(this, t, n);
                case "utf8":
                case "utf-8":
                    return P(this, t, n);
                case "ascii":
                    return C(this, t, n);
                case "latin1":
                case "binary":
                    return M(this, t, n);
                case "base64":
                    return L(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return j(this, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), i = !0
            }
        }

        function b(e, t, n) {
            var i = e[t];
            e[t] = e[n], e[n] = i
        }

        function w(t, n, i, r, o) {
            if (0 === t.length) return -1;
            if ("string" == typeof i ? (r = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = o ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
                if (o) return -1;
                i = t.length - 1
            } else if (i < 0) {
                if (!o) return -1;
                i = 0
            }
            if ("string" == typeof n && (n = e.from(n, r)), e.isBuffer(n)) return 0 === n.length ? -1 : _(t, n, i, r, o);
            if ("number" == typeof n) return n = 255 & n, e.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, n, i) : Uint8Array.prototype.lastIndexOf.call(t, n, i) : _(t, [n], i, r, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function _(e, t, n, i, r) {
            function o(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            var a = 1,
                s = e.length,
                u = t.length;
            if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, u /= 2, n /= 2
            }
            var l;
            if (r) {
                var c = -1;
                for (l = n; l < s; l++)
                    if (o(e, l) === o(t, c === -1 ? 0 : l - c)) {
                        if (c === -1 && (c = l), l - c + 1 === u) return c * a
                    } else c !== -1 && (l -= l - c), c = -1
            } else
                for (n + u > s && (n = s - u), l = n; l >= 0; l--) {
                    for (var f = !0, d = 0; d < u; d++)
                        if (o(e, l + d) !== o(t, d)) {
                            f = !1;
                            break
                        } if (f) return l
                }
            return -1
        }

        function k(e, t, n, i) {
            n = Number(n) || 0;
            var r = e.length - n;
            i ? (i = Number(i), i > r && (i = r)) : i = r;
            var o = t.length;
            if (o % 2 !== 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var a = 0; a < i; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[n + a] = s
            }
            return a
        }

        function S(e, t, n, i) {
            return G(H(t, e.length - n), e, n, i)
        }

        function E(e, t, n, i) {
            return G(W(t), e, n, i)
        }

        function O(e, t, n, i) {
            return E(e, t, n, i)
        }

        function I(e, t, n, i) {
            return G(J(t), e, n, i)
        }

        function A(e, t, n, i) {
            return G(Y(t, e.length - n), e, n, i)
        }

        function L(e, t, n) {
            return 0 === t && n === e.length ? Z.fromByteArray(e) : Z.fromByteArray(e.slice(t, n))
        }

        function P(e, t, n) {
            n = Math.min(e.length, n);
            for (var i = [], r = t; r < n;) {
                var o = e[r],
                    a = null,
                    s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (r + s <= n) {
                    var u, l, c, f;
                    switch (s) {
                        case 1:
                            o < 128 && (a = o);
                            break;
                        case 2:
                            u = e[r + 1], 128 === (192 & u) && (f = (31 & o) << 6 | 63 & u, f > 127 && (a = f));
                            break;
                        case 3:
                            u = e[r + 1], l = e[r + 2], 128 === (192 & u) && 128 === (192 & l) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & l, f > 2047 && (f < 55296 || f > 57343) && (a = f));
                            break;
                        case 4:
                            u = e[r + 1], l = e[r + 2], c = e[r + 3], 128 === (192 & u) && 128 === (192 & l) && 128 === (192 & c) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & c, f > 65535 && f < 1114112 && (a = f))
                    }
                }
                null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, i.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i.push(a), r += s
            }
            return T(i)
        }

        function T(e) {
            var t = e.length;
            if (t <= ee) return String.fromCharCode.apply(String, e);
            for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += ee));
            return n
        }

        function C(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
            return i
        }

        function M(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
            return i
        }

        function R(e, t, n) {
            var i = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
            for (var r = "", o = t; o < n; ++o) r += K(e[o]);
            return r
        }

        function j(e, t, n) {
            for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return r
        }

        function x(e, t, n) {
            if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function N(t, n, i, r, o, a) {
            if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (n > o || n < a) throw new RangeError('"value" argument is out of bounds');
            if (i + r > t.length) throw new RangeError("Index out of range")
        }

        function D(e, t, n, i) {
            t < 0 && (t = 65535 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }

        function U(e, t, n, i) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
        }

        function z(e, t, n, i, r, o) {
            if (n + i > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function B(e, t, n, i, r) {
            return r || z(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(e, t, n, i, 23, 4), n + 4
        }

        function F(e, t, n, i, r) {
            return r || z(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(e, t, n, i, 52, 8), n + 8
        }

        function q(e) {
            if (e = V(e).replace(te, ""), e.length < 2) return "";
            for (; e.length % 4 !== 0;) e += "=";
            return e
        }

        function V(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }

        function K(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function H(e, t) {
            t = t || 1 / 0;
            for (var n, i = e.length, r = null, o = [], a = 0; a < i; ++a) {
                if (n = e.charCodeAt(a), n > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                        continue
                    }
                    n = (r - 55296 << 10 | n - 56320) + 65536
                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                if (r = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function W(e) {
            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t
        }

        function Y(e, t) {
            for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
            return o
        }

        function J(e) {
            return Z.toByteArray(q(e))
        }

        function G(e, t, n, i) {
            for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
            return r
        }

        function X(e) {
            return e !== e
        }
        var Z = n(136),
            Q = n(154),
            $ = n(155);
        t.Buffer = e, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, e.TYPED_ARRAY_SUPPORT = void 0 !== i.TYPED_ARRAY_SUPPORT ? i.TYPED_ARRAY_SUPPORT : r(), t.kMaxLength = o(), e.poolSize = 8192, e._augment = function(t) {
            return t.__proto__ = e.prototype, t
        }, e.from = function(e, t, n) {
            return s(null, e, t, n)
        }, e.TYPED_ARRAY_SUPPORT && (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
            value: null,
            configurable: !0
        })), e.alloc = function(e, t, n) {
            return l(null, e, t, n)
        }, e.allocUnsafe = function(e) {
            return c(null, e)
        }, e.allocUnsafeSlow = function(e) {
            return c(null, e)
        }, e.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, e.compare = function(t, n) {
            if (!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
            if (t === n) return 0;
            for (var i = t.length, r = n.length, o = 0, a = Math.min(i, r); o < a; ++o)
                if (t[o] !== n[o]) {
                    i = t[o], r = n[o];
                    break
                } return i < r ? -1 : r < i ? 1 : 0
        }, e.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, e.concat = function(t, n) {
            if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return e.alloc(0);
            var i;
            if (void 0 === n)
                for (n = 0, i = 0; i < t.length; ++i) n += t[i].length;
            var r = e.allocUnsafe(n),
                o = 0;
            for (i = 0; i < t.length; ++i) {
                var a = t[i];
                if (!e.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, o), o += a.length
            }
            return r
        }, e.byteLength = v, e.prototype._isBuffer = !0, e.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) b(this, t, t + 1);
            return this
        }, e.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
            return this
        }, e.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
            return this
        }, e.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? P(this, 0, e) : y.apply(this, arguments)
        }, e.prototype.equals = function(t) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === e.compare(this, t)
        }, e.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, e.prototype.compare = function(t, n, i, r, o) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === n && (n = 0), void 0 === i && (i = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), n < 0 || i > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
            if (r >= o && n >= i) return 0;
            if (r >= o) return -1;
            if (n >= i) return 1;
            if (n >>>= 0, i >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0;
            for (var a = o - r, s = i - n, u = Math.min(a, s), l = this.slice(r, o), c = t.slice(n, i), f = 0; f < u; ++f)
                if (l[f] !== c[f]) {
                    a = l[f], s = c[f];
                    break
                } return a < s ? -1 : s < a ? 1 : 0
        }, e.prototype.includes = function(e, t, n) {
            return this.indexOf(e, t, n) !== -1
        }, e.prototype.indexOf = function(e, t, n) {
            return w(this, e, t, n, !0)
        }, e.prototype.lastIndexOf = function(e, t, n) {
            return w(this, e, t, n, !1)
        }, e.prototype.write = function(e, t, n, i) {
            if (void 0 === t) i = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
            }
            var r = this.length - t;
            if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var o = !1;;) switch (i) {
                case "hex":
                    return k(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return S(this, e, t, n);
                case "ascii":
                    return E(this, e, t, n);
                case "latin1":
                case "binary":
                    return O(this, e, t, n);
                case "base64":
                    return I(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), o = !0
            }
        }, e.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var ee = 4096;
        e.prototype.slice = function(t, n) {
            var i = this.length;
            t = ~~t, n = void 0 === n ? i : ~~n, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), n < 0 ? (n += i, n < 0 && (n = 0)) : n > i && (n = i), n < t && (n = t);
            var r;
            if (e.TYPED_ARRAY_SUPPORT) r = this.subarray(t, n), r.__proto__ = e.prototype;
            else {
                var o = n - t;
                r = new e(o, (void 0));
                for (var a = 0; a < o; ++a) r[a] = this[a + t]
            }
            return r
        }, e.prototype.readUIntLE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || x(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return i
        }, e.prototype.readUIntBE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || x(e, t, this.length);
            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
            return i
        }, e.prototype.readUInt8 = function(e, t) {
            return t || x(e, 1, this.length), this[e]
        }, e.prototype.readUInt16LE = function(e, t) {
            return t || x(e, 2, this.length), this[e] | this[e + 1] << 8
        }, e.prototype.readUInt16BE = function(e, t) {
            return t || x(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, e.prototype.readUInt32LE = function(e, t) {
            return t || x(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, e.prototype.readUInt32BE = function(e, t) {
            return t || x(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, e.prototype.readIntLE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || x(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
        }, e.prototype.readIntBE = function(e, t, n) {
            e = 0 | e, t = 0 | t, n || x(e, t, this.length);
            for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
            return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
        }, e.prototype.readInt8 = function(e, t) {
            return t || x(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
        }, e.prototype.readInt16LE = function(e, t) {
            t || x(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, e.prototype.readInt16BE = function(e, t) {
            t || x(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, e.prototype.readInt32LE = function(e, t) {
            return t || x(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, e.prototype.readInt32BE = function(e, t) {
            return t || x(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, e.prototype.readFloatLE = function(e, t) {
            return t || x(e, 4, this.length), Q.read(this, e, !0, 23, 4)
        }, e.prototype.readFloatBE = function(e, t) {
            return t || x(e, 4, this.length), Q.read(this, e, !1, 23, 4)
        }, e.prototype.readDoubleLE = function(e, t) {
            return t || x(e, 8, this.length), Q.read(this, e, !0, 52, 8)
        }, e.prototype.readDoubleBE = function(e, t) {
            return t || x(e, 8, this.length), Q.read(this, e, !1, 52, 8)
        }, e.prototype.writeUIntLE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, n = 0 | n, !i) {
                N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            var r = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
            return t + n
        }, e.prototype.writeUIntBE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, n = 0 | n, !i) {
                N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            var r = n - 1,
                o = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
            return t + n
        }, e.prototype.writeUInt8 = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
        }, e.prototype.writeUInt16LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
        }, e.prototype.writeUInt16BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
        }, e.prototype.writeUInt32LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : U(this, t, n, !0), n + 4
        }, e.prototype.writeUInt32BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : U(this, t, n, !1), n + 4
        }, e.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, !i) {
                var r = Math.pow(2, 8 * n - 1);
                N(this, e, t, n, r - 1, -r)
            }
            var o = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, e.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e, t = 0 | t, !i) {
                var r = Math.pow(2, 8 * n - 1);
                N(this, e, t, n, r - 1, -r)
            }
            var o = n - 1,
                a = 1,
                s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, e.prototype.writeInt8 = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1
        }, e.prototype.writeInt16LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : D(this, t, n, !0), n + 2
        }, e.prototype.writeInt16BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : D(this, t, n, !1), n + 2
        }, e.prototype.writeInt32LE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : U(this, t, n, !0), n + 4
        }, e.prototype.writeInt32BE = function(t, n, i) {
            return t = +t, n = 0 | n, i || N(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : U(this, t, n, !1), n + 4
        }, e.prototype.writeFloatLE = function(e, t, n) {
            return B(this, e, t, !0, n)
        }, e.prototype.writeFloatBE = function(e, t, n) {
            return B(this, e, t, !1, n)
        }, e.prototype.writeDoubleLE = function(e, t, n) {
            return F(this, e, t, !0, n)
        }, e.prototype.writeDoubleBE = function(e, t, n) {
            return F(this, e, t, !1, n)
        }, e.prototype.copy = function(t, n, i, r) {
            if (i || (i = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && r < i && (r = i), r === i) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (n < 0) throw new RangeError("targetStart out of bounds");
            if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - n < r - i && (r = t.length - n + i);
            var o, a = r - i;
            if (this === t && i < n && n < r)
                for (o = a - 1; o >= 0; --o) t[o + n] = this[o + i];
            else if (a < 1e3 || !e.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < a; ++o) t[o + n] = this[o + i];
            else Uint8Array.prototype.set.call(t, this.subarray(i, i + a), n);
            return a
        }, e.prototype.fill = function(t, n, i, r) {
            if ("string" == typeof t) {
                if ("string" == typeof n ? (r = n, n = 0, i = this.length) : "string" == typeof i && (r = i, i = this.length), 1 === t.length) {
                    var o = t.charCodeAt(0);
                    o < 256 && (t = o)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !e.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t = 255 & t);
            if (n < 0 || this.length < n || this.length < i) throw new RangeError("Out of range index");
            if (i <= n) return this;
            n >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0);
            var a;
            if ("number" == typeof t)
                for (a = n; a < i; ++a) this[a] = t;
            else {
                var s = e.isBuffer(t) ? t : H(new e(t, r).toString()),
                    u = s.length;
                for (a = 0; a < i - n; ++a) this[a + n] = s[a % u]
            }
            return this
        };
        var te = /[^+\/0-9A-Za-z-_]/g
    }).call(t, n(24).Buffer, function() {
        return this
    }())
}, , function(e, t, n) {
    (function(t) {
        "use strict";

        function i(e) {
            return this instanceof i ? (u.call(this, e), l.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", r)) : new i(e)
        }

        function r() {
            this.allowHalfOpen || this._writableState.ended || t.nextTick(this.end.bind(this))
        }

        function o(e, t) {
            for (var n = 0, i = e.length; n < i; n++) t(e[n], n)
        }
        e.exports = i;
        var a = Object.keys || function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            },
            s = n(32);
        s.inherits = n(21);
        var u = n(121),
            l = n(72);
        s.inherits(i, u), o(a(l.prototype), function(e) {
            i.prototype[e] || (i.prototype[e] = l.prototype[e])
        })
    }).call(t, n(41))
}, , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        MozApp: "mozapp",
        Bookmark: "bookmark",
        Folder: "folder"
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return window.location.origin + "/folder/" + (new h.default).update(e).digest("hex")
    }

    function o(e) {
        return d(e), e.filter(function(e) {
            return e.type === g.default.Folder
        })
    }

    function a(e, t) {
        return d(e), o(e).find(function(e) {
            return v.hasManifestURL(e, t)
        })
    }

    function s(e, t) {
        return d(e), o(e).filter(function(e) {
            return e.items && e.items.find(function(e) {
                return v.hasManifestURL(e, t)
            })
        })
    }

    function u(e, t) {
        if (d(e), !t) throw new Error("Properties for query is required.");
        return t.manifestURL && l(e, t.manifestURL) || t.origin && f(e, t.origin).shift()
    }

    function l(e, t) {
        return d(e), e.find(function(e) {
            return v.hasManifestURL(e, t)
        })
    }

    function c(e, t) {
        return d(e), e.findIndex(function(e) {
            return v.hasManifestURL(e, t)
        })
    }

    function f(e, t) {
        return d(e), e.filter(function(e) {
            return v.hasOrigin(e, t)
        })
    }

    function d(e) {
        if (!Array.isArray(e)) throw new Error("The source items is required.")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.matcher = void 0, t.generateFolderManifestURL = r, t.getAllFolders = o, t.findFolderByManifestURL = a, t.findFoldersByItemManifestURL = s, t.findItemByProps = u, t.findItemByManifestURL = l, t.findItemIndexByManifestURL = c, t.findItemsByOrigin = f;
    var p = n(156),
        h = i(p),
        m = n(29),
        g = i(m),
        v = t.matcher = {
            hasManifestURL: function(e, t) {
                return e.manifestURL === t
            },
            hasOrigin: function(e, t) {
                return e.origin && e.origin === t || e.manifest && e.manifest.origin === t
            }
        }
}, , function(e, t, n) {
    (function(e) {
        "use strict";

        function n(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === g(e)
        }

        function i(e) {
            return "boolean" == typeof e
        }

        function r(e) {
            return null === e
        }

        function o(e) {
            return null == e
        }

        function a(e) {
            return "number" == typeof e
        }

        function s(e) {
            return "string" == typeof e
        }

        function u(e) {
            return "symbol" === ("undefined" == typeof e ? "undefined" : v(e))
        }

        function l(e) {
            return void 0 === e
        }

        function c(e) {
            return "[object RegExp]" === g(e)
        }

        function f(e) {
            return "object" === ("undefined" == typeof e ? "undefined" : v(e)) && null !== e
        }

        function d(e) {
            return "[object Date]" === g(e)
        }

        function p(e) {
            return "[object Error]" === g(e) || e instanceof Error
        }

        function h(e) {
            return "function" == typeof e
        }

        function m(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === ("undefined" == typeof e ? "undefined" : v(e)) || "undefined" == typeof e
        }

        function g(e) {
            return Object.prototype.toString.call(e)
        }
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.isArray = n, t.isBoolean = i, t.isNull = r, t.isNullOrUndefined = o, t.isNumber = a, t.isString = s, t.isSymbol = u, t.isUndefined = l, t.isRegExp = c, t.isObject = f, t.isDate = d, t.isError = p, t.isFunction = h, t.isPrimitive = m, t.isBuffer = e.isBuffer
    }).call(t, n(24).Buffer)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = i(l),
        f = n(13),
        d = i(f),
        p = n(159),
        h = i(p),
        m = n(5),
        g = i(m),
        v = n(4),
        y = i(v),
        b = n(137),
        w = i(b);
    n(263);
    var _ = function(e, t, n) {
        return function(i) {
            function l(e) {
                r(this, l);
                var t = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e));
                return t.state = {
                    popup: null
                }, t
            }
            return a(l, i), u(l, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.refs.composed.open = this.refs.composing.open.bind(this.refs.composing), this.refs.composed.close = this.refs.composing.close.bind(this.refs.composing), y.default.register("open", this.refs.composed), y.default.register("close", this.refs.composed), this.refs.composed.isActive = this.refs.composing.isActive.bind(this.refs.composing), this.refs.composing.on("closed", function() {
                        e.refs.composed.emit("closed"), e.emit("closed")
                    }), this.refs.composing.on("opened", function() {
                        e.refs.composed.emit("opened"), e.emit("opened")
                    })
                }
            }, {
                key: "open",
                value: function(e) {
                    this.refs.composing.open(e)
                }
            }, {
                key: "focus",
                value: function() {
                    var e = d.default.findDOMNode(this.refs.composed);
                    e.activeElement ? (e.activeElement.focus(), document.activeElement === document.body && e.focus()) : e.focus()
                }
            }, {
                key: "close",
                value: function(e) {
                    this.refs.composing.close(e)
                }
            }, {
                key: "isClosed",
                value: function() {
                    return "closed" === this.refs.composing.state.transition
                }
            }, {
                key: "isTransitioning",
                value: function() {
                    return this.refs.composing.isTransitioning()
                }
            }, {
                key: "getTopMost",
                value: function() {
                    return this.refs.popup.refs.popup ? this.refs.popup.refs.popup.getTopMost() : this
                }
            }, {
                key: "openPopup",
                value: function(e) {
                    this.refs.popup.setState({
                        popup: e
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.refs.popup && this.refs.popup.open()
                }
            }, {
                key: "render",
                value: function() {
                    return c.default.createElement(h.default, {
                        ref: "composing",
                        openAnimation: t,
                        closeAnimation: n
                    }, c.default.createElement(e, s({
                        ref: "composed"
                    }, this.props)), c.default.createElement(w.default, {
                        ref: "popup"
                    }))
                }
            }]), l
        }(g.default)
    };
    t.default = _
}, , , , function(e, t, n) {
    "use strict";

    function i() {
        r.call(this)
    }
    e.exports = i;
    var r = n(80).EventEmitter;
    n(21)(i, r), i.Readable = n(230), i.Writable = n(232), i.Duplex = n(228), i.Transform = n(231), i.PassThrough = n(229), i.Stream = i, i.prototype.pipe = function(e, t) {
        function n(t) {
            e.writable && !1 === e.write(t) && l.pause && l.pause()
        }

        function i() {
            l.readable && l.resume && l.resume()
        }

        function o() {
            c || (c = !0, e.end())
        }

        function a() {
            c || (c = !0, "function" == typeof e.destroy && e.destroy())
        }

        function s(e) {
            if (u(), 0 === r.listenerCount(this, "error")) throw e
        }

        function u() {
            l.removeListener("data", n), e.removeListener("drain", i), l.removeListener("end", o), l.removeListener("close", a), l.removeListener("error", s), e.removeListener("error", s), l.removeListener("end", u), l.removeListener("close", u), e.removeListener("close", u)
        }
        var l = this;
        l.on("data", n), e.on("drain", i), e._isStdio || t && t.end === !1 || (l.on("end", o), l.on("close", a));
        var c = !1;
        return l.on("error", s), e.on("error", s), l.on("end", u), l.on("close", u), e.on("close", u), e.emit("pipe", l), e
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        switch (e) {
            case g.default.MozApp:
                var n = t.mozApp;
                if (!n) throw new Error("Failed to create the mozApp item, mozApp reference is required.");
                return o(n);
            case g.default.Bookmark:
                var i = t.bookmark;
                if (!i) throw new Error("Failed to create the bookmark item, bookmark metadata is required.");
                return [a(i)];
            case g.default.Folder:
                var r = t.folder;
                if (!r) throw new Error("Failed to create the folder item, folder metadata is required.");
                return [s(r)];
            default:
                throw new Error("Fail to create item, itemType is required.")
        }
    }

    function o(e) {
        var t = e.manifest || e.updateManifest,
            n = t.entry_points;
        if (n) {
            var i = JSON.parse(JSON.stringify(t)),
                r = [];
            for (var o in n) {
                var a = {},
                    s = n[o];
                for (var u in s) "locale" !== u && "name" !== u && (i[u] = s[u]);
                for (var l in e) a[l] = e[l];
                a.type = g.default.MozApp, a.mozApp = e, a.manifest = i, a.uid = a.manifestURL + "+" + o, a.displayName = new h.default(s).name, a.theme = {
                    color: a.manifest.theme_color || null
                }, a.entry = o, r.push(a)
            }
            return r
        }
        var c = {};
        for (var f in e) c[f] = e[f];
        return c.type = g.default.MozApp, c.mozApp = e, c.manifest = c.manifest || c.updateManifest, c.uid = c.manifestURL, c.displayName = new h.default(c.manifest).name, c.theme = {
            color: c.manifest.theme_color || null
        }, [c]
    }

    function a(e) {
        return e.url ? {
            type: g.default.Bookmark,
            displayName: e.name,
            enabled: !0,
            removable: !0,
            manifestURL: e.url,
            url: e.url,
            favicon: e.icon,
            manifest: {
                name: e.url
            },
            uid: e.url,
            theme: {
                color: "#20AFCC"
            }
        } : null
    }

    function s(e) {
        var t = (0, v.generateFolderManifestURL)(JSON.stringify(e)),
            n = e.name || e.manifest && e.manifest.name || "Untitled Folder";
        return c({}, e, {
            manifestURL: t,
            type: g.default.Folder,
            displayName: n,
            removable: !1,
            manifest: c({
                name: n
            }, e.manifest),
            items: e.items || [],
            showItemsInAllApps: !1
        })
    }

    function u(e) {
        var t = new window.MozActivity({
            name: "view",
            data: {
                type: "url",
                url: e
            }
        });
        t.onerror = function() {}
    }

    function l(e) {
        switch (window.performance.mark("appLaunch@" + e.origin), e.type) {
            case g.default.MozApp:
                e.mozApp.launch(e.entry);
                break;
            case g.default.Bookmark:
                u(e.url);
                break;
            case g.default.Folder:
                d.default.request("Folder:updateFolder", {
                    manifestURL: e.manifestURL
                }), d.default.request("openSheet", "folder")
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };
    t.create = r, t.createMozAppItemList = o, t.createBookmarkItem = a, t.createFolderItem = s, t.launchBrowser = u, t.launch = l;
    var f = n(4),
        d = i(f),
        p = n(252),
        h = i(p),
        m = n(29),
        g = i(m),
        v = n(30)
}, , , function(e, t) {
    "use strict";

    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === i || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        m && p && (m = !1, p.length ? h = p.concat(h) : g = -1, h.length && s())
    }

    function s() {
        if (!m) {
            var e = r(a);
            m = !0;
            for (var t = h.length; t;) {
                for (p = h, h = []; ++g < t;) p && p[g].run();
                g = -1, t = h.length
            }
            p = null, m = !1, o(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var c, f, d = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            f = i
        }
    }();
    var p, h = [],
        m = !1,
        g = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new u(e, t)), 1 !== h.length || m || r(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e) {
        return []
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function i(e, t) {
        this.afterTransform = function(e, n) {
            return r(t, e, n)
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null
    }

    function r(e, t, n) {
        var i = e._transformState;
        i.transforming = !1;
        var r = i.writecb;
        if (!r) return e.emit("error", new Error("no writecb in Transform class"));
        i.writechunk = null, i.writecb = null, u.isNullOrUndefined(n) || e.push(n), r && r(t);
        var o = e._readableState;
        o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
    }

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        s.call(this, e), this._transformState = new i(e, this);
        var t = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("prefinish", function() {
            u.isFunction(this._flush) ? this._flush(function(e) {
                a(t, e)
            }) : a(t)
        })
    }

    function a(e, t) {
        if (t) return e.emit("error", t);
        var n = e._writableState,
            i = e._transformState;
        if (n.length) throw new Error("calling transform done when ws.length != 0");
        if (i.transforming) throw new Error("calling transform done when still transforming");
        return e.push(null)
    }
    e.exports = o;
    var s = n(26),
        u = n(32);
    u.inherits = n(21), u.inherits(o, s), o.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t)
    }, o.prototype._transform = function(e, t, n) {
        throw new Error("not implemented")
    }, o.prototype._write = function(e, t, n) {
        var i = this._transformState;
        if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
            var r = this._readableState;
            (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
        }
    }, o.prototype._read = function(e) {
        var t = this._transformState;
        u.isNull(t.writechunk) || !t.writecb || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    }
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function i(e, t, n) {
            this.chunk = e, this.encoding = t, this.callback = n
        }

        function r(e, t) {
            var i = n(26);
            e = e || {};
            var r = e.highWaterMark,
                o = e.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : o, this.objectMode = !!e.objectMode, t instanceof i && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
            var a = e.decodeStrings === !1;
            this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                p(t, e)
            }, this.writecb = null, this.writelen = 0, this.buffer = [], this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1
        }

        function o(e) {
            var t = n(26);
            return this instanceof o || this instanceof t ? (this._writableState = new r(e, this), this.writable = !0, void S.call(this)) : new o(e)
        }

        function a(e, n, i) {
            var r = new Error("write after end");
            e.emit("error", r), t.nextTick(function() {
                i(r)
            })
        }

        function s(e, n, i, r) {
            var o = !0;
            if (!(k.isBuffer(i) || k.isString(i) || k.isNullOrUndefined(i) || n.objectMode)) {
                var a = new TypeError("Invalid non-string/buffer chunk");
                e.emit("error", a), t.nextTick(function() {
                    r(a)
                }), o = !1
            }
            return o
        }

        function u(e, t, n) {
            return !e.objectMode && e.decodeStrings !== !1 && k.isString(t) && (t = new _(t, n)), t
        }

        function l(e, t, n, r, o) {
            n = u(t, n, r), k.isBuffer(n) && (r = "buffer");
            var a = t.objectMode ? 1 : n.length;
            t.length += a;
            var s = t.length < t.highWaterMark;
            return s || (t.needDrain = !0), t.writing || t.corked ? t.buffer.push(new i(n, r, o)) : c(e, t, !1, a, n, r, o), s
        }

        function c(e, t, n, i, r, o, a) {
            t.writelen = i, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite), t.sync = !1
        }

        function f(e, n, i, r, o) {
            i ? t.nextTick(function() {
                n.pendingcb--, o(r)
            }) : (n.pendingcb--, o(r)), e._writableState.errorEmitted = !0, e.emit("error", r)
        }

        function d(e) {
            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
        }

        function p(e, n) {
            var i = e._writableState,
                r = i.sync,
                o = i.writecb;
            if (d(i), n) f(e, i, r, n, o);
            else {
                var a = v(e, i);
                a || i.corked || i.bufferProcessing || !i.buffer.length || g(e, i), r ? t.nextTick(function() {
                    h(e, i, a, o)
                }) : h(e, i, a, o)
            }
        }

        function h(e, t, n, i) {
            n || m(e, t), t.pendingcb--, i(), b(e, t)
        }

        function m(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }

        function g(e, t) {
            if (t.bufferProcessing = !0, e._writev && t.buffer.length > 1) {
                for (var n = [], i = 0; i < t.buffer.length; i++) n.push(t.buffer[i].callback);
                t.pendingcb++, c(e, t, !0, t.length, t.buffer, "", function(e) {
                    for (var i = 0; i < n.length; i++) t.pendingcb--, n[i](e)
                }), t.buffer = []
            } else {
                for (var i = 0; i < t.buffer.length; i++) {
                    var r = t.buffer[i],
                        o = r.chunk,
                        a = r.encoding,
                        s = r.callback;
                    if (c(e, t, !1, t.objectMode ? 1 : o.length, o, a, s), t.writing) {
                        i++;
                        break
                    }
                }
                i < t.buffer.length ? t.buffer = t.buffer.slice(i) : t.buffer.length = 0
            }
            t.bufferProcessing = !1
        }

        function v(e, t) {
            return t.ending && 0 === t.length && !t.finished && !t.writing
        }

        function y(e, t) {
            t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
        }

        function b(e, t) {
            var n = v(e, t);
            return n && (0 === t.pendingcb ? (y(e, t), t.finished = !0, e.emit("finish")) : y(e, t)), n
        }

        function w(e, n, i) {
            n.ending = !0, b(e, n), i && (n.finished ? t.nextTick(i) : e.once("finish", i)), n.ended = !0
        }
        e.exports = o;
        var _ = n(24).Buffer;
        o.WritableState = r;
        var k = n(32);
        k.inherits = n(21);
        var S = n(37);
        k.inherits(o, S), o.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe. Not readable."))
        }, o.prototype.write = function(e, t, n) {
            var i = this._writableState,
                r = !1;
            return k.isFunction(t) && (n = t, t = null), k.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), k.isFunction(n) || (n = function() {}), i.ended ? a(this, i, n) : s(this, i, e, n) && (i.pendingcb++, r = l(this, i, e, t, n)), r
        }, o.prototype.cork = function() {
            this._writableState.corked++
        }, o.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.buffer.length || g(this, e))
        }, o.prototype._write = function(e, t, n) {
            n(new Error("not implemented"))
        }, o.prototype._writev = null, o.prototype.end = function(e, t, n) {
            var i = this._writableState;
            k.isFunction(e) ? (n = e, e = null, t = null) : k.isFunction(t) && (n = t, t = null), k.isNullOrUndefined(e) || this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || i.finished || w(this, i, n)
        }
    }).call(t, n(41))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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

    function u(e, t, n) {
        var i = {};
        e: for (var r = 0, o = t.terms.length; r < o; r++)
            for (var a = t.terms[r], s = 0, u = t.fields.length; s < u; s++) {
                var l = t.fields[s];
                if (e[l])
                    for (var c = 0, f = e[l].length; c < f; c++) {
                        var d = e[l][c];
                        if ("undefined" != typeof d.value && (d = d.value), i[a] = n(d.trim(), a)) continue e
                    }
            }
        return Object.keys(i).every(function(e) {
            return i[e]
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        c = n(17),
        f = r(c),
        d = n(9),
        p = i(d),
        h = {
            contains: function(e, t) {
                return e = e.toLowerCase(), t = t.toLowerCase(), e.contains(t)
            },
            equality: function(e, t) {
                return e = e.toLowerCase(), t = t.toLowerCase(), e === t
            }
        },
        m = /\s+/,
        g = function(e) {
            function t() {
                return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return s(t, e), l(t, [{
                key: "start",
                value: function() {
                    this.contactStore = new Map, this.API = window.mozContacts || navigator.mozContacts, this.API.addEventListener("contactchange", this), this.initObserver()
                }
            }, {
                key: "getContactChildren",
                value: function(e) {
                    return e ? e.querySelectorAll("*[data-contact-number]") : []
                }
            }, {
                key: "updateFragment",
                value: function(e) {
                    "function" == typeof e.hasAttribute && e.hasAttribute("data-contact-number") && this.updateContact(e);
                    for (var t = this.getContactChildren(e), n = 0; n < t.length; n++) this.updateContact(t[n])
                }
            }, {
                key: "initObserver",
                value: function() {
                    var e = this,
                        t = {
                            attributes: !0,
                            characterData: !1,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["data-contact-number"]
                        };
                    new MutationObserver(function(n, i) {
                        i.disconnect(), e.updateContacts(n), i.observe(document, t)
                    }).observe(document, t)
                }
            }, {
                key: "updateContacts",
                value: function(e) {
                    for (var t = this, n = void 0, i = new Set, r = 0; r < e.length; r++) {
                        if (n = e[r], "childList" === n.type)
                            for (var o = void 0, a = 0; a < n.addedNodes.length; a++) o = n.addedNodes[a], o.nodeType === Node.ELEMENT_NODE && i.add(o);
                        "attributes" === n.type && i.add(n.target)
                    }
                    i.forEach(function(e) {
                        e.childElementCount ? t.updateFragment(e) : e.dataset.contactNumber && t.updateContact(e)
                    }, this)
                }
            }, {
                key: "updateContact",
                value: function(e) {
                    var t = this,
                        n = e.dataset.contactNumber,
                        i = "name" === e.dataset.contactColumn ? e : e.querySelector("[data-contact-column=name]"),
                        r = "photo" === e.dataset.contactColumn ? e : e.querySelector("[data-contact-column=photo]");
                    this.findByAddress(n, function(o) {
                        var a = p.getContactDetails(n, o, {
                            photoURL: !0
                        });
                        i ? a.name ? i.textContent !== a.name && (t.debug("updating name", a, e), i.textContent = a.name) : i.textContent && (t.debug("cleaning name", a, e), i.textContent = "") : t.debug("no contact name DOM"), r ? (t.debug("updating photo", a, e), r.style.backgroundImage = a.photoURL ? "url(" + a.photoURL + ")" : null) : t.debug("no photo DOM")
                    })
                }
            }, {
                key: "_handle_contactchange",
                value: function() {
                    this.updateFragment(document.body), this.emit("contact-changed")
                }
            }, {
                key: "findBy",
                value: function(e, t) {
                    var n, i, r = [],
                        o = (e.filterValue || "").trim(),
                        a = this;
                    return navigator.mozContacts && o.length ? (n = o.split(m), e.filterValue = 1 === n.length ? n[0] : n.reduce(function(e, t) {
                        return r.push(t.toLowerCase()), t.length > e.length ? t : e
                    }, ""), e.filterValue.length < 3 && (e.filterLimit = 10), r.splice(r.indexOf(e.filterValue.toLowerCase()), 1), r.push.apply(r, n), i = a.API.find(e), i.onsuccess = function() {
                        var e, i = this.result.slice(),
                            o = ["tel", "givenName", "familyName"],
                            a = {
                                fields: o,
                                terms: r
                            },
                            s = [];
                        if (n.length > 1)
                            for (; e = i.pop();) u(e, a, h.contains) && s.push(e);
                        else s = i;
                        t(s, {
                            terms: n
                        })
                    }, void(i.onerror = function() {
                        this.onsuccess = null, this.onerror = null, t(null)
                    })) : void setTimeout(function() {
                        t("undefined" == typeof e.filterValue ? null : [], {})
                    })
                }
            }, {
                key: "findContactByString",
                value: function(e, t) {
                    var n = ["tel", "givenName", "familyName"];
                    return this.findBy({
                        filterBy: n,
                        filterOp: "contains",
                        filterValue: e
                    }, t)
                }
            }, {
                key: "findExact",
                value: function(e, t) {
                    return this.findBy({
                        filterBy: ["givenName", "familyName"],
                        filterOp: "contains",
                        filterValue: e
                    }, function(n) {
                        var i = n && n.length ? n[0] : null,
                            r = {
                                fields: ["name"],
                                terms: [e]
                            },
                            o = !1;
                        i && (o = u(i, r, h.equality)), t(o ? [i] : [])
                    })
                }
            }, {
                key: "findByPhoneNumber",
                value: function(e, t) {
                    return this.findBy({
                        filterBy: ["tel"],
                        filterOp: "match",
                        filterValue: e.replace(/\s+/g, "")
                    }, function(e) {
                        return e && e.length ? void t(e) : void t([])
                    })
                }
            }, {
                key: "findByAddress",
                value: function(e, t) {
                    this.findByPhoneNumber(e, t)
                }
            }, {
                key: "findExactByEmail",
                value: function(e, t) {
                    return this.findBy({
                        filterBy: ["email"],
                        filterOp: "equals",
                        filterValue: e
                    }, t)
                }
            }, {
                key: "findById",
                value: function(e, t) {
                    return this.findBy({
                        filterBy: ["id"],
                        filterOp: "equals",
                        filterValue: e
                    }, function(e) {
                        var n = [];
                        e && e.length && (n = e[0]), t(n)
                    })
                }
            }]), t
        }(f.default),
        v = new g;
    v.start(), t.default = v
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(17),
        c = r(l),
        f = n(259),
        d = r(f),
        p = n(4),
        h = r(p),
        m = n(50),
        g = r(m),
        v = n(78),
        y = r(v),
        b = n(9),
        w = i(b),
        _ = function(e) {
            function t() {
                var e, n, i, r;
                o(this, t);
                for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                return n = i = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.name = "SpeedDialHelper", r = n, a(i, r)
            }
            return s(t, e), u(t, [{
                key: "speedDial",
                value: function(e) {
                    var t = this;
                    dump("launcher,speeddial:" + e), 0 == e && AppStore.launchBrowser();
                    var n = e - 1;
                    if (!(n < 0)) return 0 === n ? void this.dialVoicemail() : void navigator.customization.getValue("speed.dial.enable").then(function(i) {
                        dump("speed dial enable result ====== " + i);
                        var r = !0;
                        i || (r = !1), dump("speed dial enable speedDialEnable ====== " + r), r && (0 == n ? navigator.customization.getValue("voice.mail.enable").then(function(i) {
                            i = void 0 === i || i, dump("speed_dial_helper.js voicemail get result = " + i), i ? t.dialOrAssignSpeedDial(e, n) : dump("speed_dial_helper.js voicemail disabled!!!")
                        }) : t.dialOrAssignSpeedDial(e, n))
                    })
                }
            }, {
                key: "dialOrAssignSpeedDial",
                value: function(e, t) {
                    var n = d.default.contacts[t].tel;
                    n ? g.default.dial(n, {
                        speedDial: !0
                    }) : this.assignSpeedDial(e)
                }
            }, {
                key: "dialVoicemail",
                value: function() {
                    var e = this;
                    h.default.request("chooseSim", "call").then(function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = d.default["ril.iccInfo.mbdn"],
                            i = (Array.isArray(n) ? n[t] : n) || navigator.mozVoicemail && navigator.mozVoicemail.getNumber(t);
                        i ? g.default.dial(i, {
                            serviceId: t,
                            speedDial: !0
                        }) : e.assignSpeedDial(1)
                    })
                }
            }, {
                key: "assignSpeedDial",
                value: function(e) {
                    e = Number(e), e && (1 === e ? h.default.request("showDialog", {
                        type: "alert",
                        header: "confirmation",
                        content: "assign-voicemail"
                    }) : h.default.request("showDialog", {
                        ok: "assign",
                        type: "confirm",
                        header: w.toL10n("confirmation"),
                        content: w.toL10n("assign-speed-dial", {
                            n: e
                        }),
                        translated: !0,
                        onOk: function() {
                            w.pickContact(function(t) {
                                var n = t.target.result,
                                    i = n.id;
                                if (n && i) return n.tel || n.tel[0] || n.tel[0].value ? void d.default.set(e, n.tel[0].value, i) : void window.alert(w.toL10n("alert-for-contacts-without-number"))
                            })
                        }
                    }))
                }
            }, {
                key: "removeSpeedDial",
                value: function(e) {
                    var t = e.number,
                        n = e.name,
                        i = e.cb,
                        r = function() {
                            "function" == typeof i && i()
                        };
                    h.default.request("showDialog", {
                        ok: "remove",
                        type: "confirm",
                        header: w.toL10n("confirmation"),
                        content: w.toL10n("remove-speed-dial", {
                            name: n
                        }),
                        translated: !0,
                        onOk: function() {
                            d.default.remove(t)
                        },
                        onCancel: r,
                        onBack: r
                    })
                }
            }, {
                key: "replaceSpeedDial",
                value: function(e) {
                    var t = e.number,
                        n = e.name,
                        i = e.contactId,
                        r = d.default.contacts[t - 1].tel;
                    w.pickContact(function(e) {
                        var o = e.target.result,
                            a = o.id;
                        if (o && a) {
                            var s = o.tel[0].value,
                                u = o.name[0] || s;
                            i + "-" + n + "-" + r == a + "-" + u + "-" + s ? d.default.set(t, s, a) : h.default.request("showDialog", {
                                ok: "replace",
                                type: "confirm",
                                header: w.toL10n("confirmation"),
                                content: w.toL10n("replace-speed-dial", {
                                    name: n,
                                    subName: u
                                }),
                                translated: !0,
                                onOk: function() {
                                    d.default.set(t, s, a)
                                }
                            })
                        }
                    })
                }
            }, {
                key: "register",
                value: function(e) {
                    e.addEventListener("keydown", this), e.addEventListener("keyup", this)
                }
            }, {
                key: "_handle_keyup",
                value: function(e) {
                    if ("complete" === document.readyState && this.pressingTimer && !h.default.query("LaunchStore.isLaunching")) {
                        var t = y.default.translate(e.key);
                        switch (t) {
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                            case "*":
                            case "#":
                            case "+":
                                window.clearTimeout(this.pressingTimer), this.pressingTimer = null, h.default.query("App.panelAnimationRunning") || h.default.request("Dialer:show", t)
                        }
                    }
                }
            }, {
                key: "_handle_keydown",
                value: function(e) {
                    var t = this;
                    if ("complete" === document.readyState && !h.default.query("LaunchStore.isLaunching")) {
                        var n = y.default.translate(e.key);
                        switch (this.pressingTimer && (window.clearTimeout(this.pressingTimer), this.pressingTimer = null), n) {
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                                this.pressingTimer = window.setTimeout(function() {
                                    t.speedDial(parseInt(n, 10)), t.pressingTimer = null
                                }, 1500);
                                break;
                            case "*":
                            case "#":
                            case "+":
                                this.pressingTimer = window.setTimeout(function() {
                                    t.pressingTimer = null
                                }, 500)
                        }
                    }
                }
            }]), t
        }(c.default),
        k = new _;
    t.default = k
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.replace(i, function(e, t) {
            return "x" === t.charAt(0).toLowerCase() ? String.fromCharCode(parseInt(t.substring(1), 16)) : String.fromCharCode(parseInt(t.substring(0), 10))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.unescapeNumericHTMLEntities = n;
    var i = t.numericEntityRegExp = /&#([a-z0-9]+);/gi
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(17),
        l = i(u),
        c = n(4),
        f = i(c),
        d = n(38),
        p = function(e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "LaunchStore", n.resetLaunchingMarker = function() {
                    n.isLaunching = !1
                }, n.ports = {}, window.addEventListener("visibilitychange", n.resetLaunchingMarker), window.addEventListener("blur", n.resetLaunchingMarker), f.default.registerState("isLaunching", n), n
            }
            return a(t, e), s(t, [{
                key: "launch",
                value: function(e, t, n) {
                    e && t && ("iac" === e ? this.launchForIAC(t, n) : this.launchApp(e, t), this.resetTimer && (clearTimeout(this.resetTimer), this.resetTimer = null), this.resetTimer = setTimeout(this.resetLaunchingMarker, 3e3))
                }
            }, {
                key: "launchApp",
                value: function(e, t) {
                    if (!this.isLaunching) {
                        this.isLaunching = !0;
                        var n = AppStore.queryApp(e, t);
                        n && (0, d.launch)(n)
                    }
                }
            }, {
                key: "launchForIAC",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isLaunching) {
                        if (!this.ports[e]) return void(navigator.mozApps.getSelf().onsuccess = function(i) {
                            i.target.result.connect(e).then(function(i) {
                                t.ports[e] = i, t.launchForIAC(e, n)
                            }, function(e) {})
                        });
                        this.isLaunching = !0, this.ports[e].forEach(function(e) {
                            e.postMessage(n)
                        })
                    }
                }
            }]), t
        }(l.default);
    t.default = new p
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        w: "1",
        e: "2",
        r: "3",
        s: "4",
        d: "5",
        f: "6",
        z: "7",
        x: "8",
        c: "9",
        ",": "0",
        o: "+",
        a: "*",
        q: "#"
    };
    navigator.hasFeature("device.capability.qwerty").then(function(e) {
        e && (n[4] = "$")
    }), t.default = {
        translate: function(e) {
            return n[e] || e
        }
    }
}, , function(e, t) {
    "use strict";

    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function i(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "object" === ("undefined" == typeof e ? "undefined" : s(e)) && null !== e
    }

    function a(e) {
        return void 0 === e
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
        if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, n.prototype.emit = function(e) {
        var t, n, r, s, u, l;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (n = this._events[e], a(n)) return !1;
        if (i(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), r = l.length, u = 0; u < r; u++) l[u].apply(this, s);
        return !0
    }, n.prototype.addListener = function(e, t) {
        var r;
        if (!i(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, "function" == typeof console.trace)), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
        }
        if (!i(t)) throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = t, this.on(e, n), this
    }, n.prototype.removeListener = function(e, t) {
        var n, r, a, s;
        if (!i(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], a = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) {
            for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                } if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], i(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, n.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (i(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, , , , , , function(e, t) {
    (function(t) {
        "use strict";

        function n(e, t, n) {
            function i(t) {
                var n = m,
                    i = g;
                return m = g = void 0, _ = t, y = e.apply(i, n)
            }

            function o(e) {
                return _ = e, b = setTimeout(c, t), O ? i(e) : y
            }

            function a(e) {
                var n = e - w,
                    i = e - _,
                    r = t - n;
                return I ? S(r, v - i) : r
            }

            function u(e) {
                var n = e - w,
                    i = e - _;
                return void 0 === w || n >= t || n < 0 || I && i >= v
            }

            function c() {
                var e = E();
                return u(e) ? f(e) : void(b = setTimeout(c, a(e)))
            }

            function f(e) {
                return b = void 0, A && m ? i(e) : (m = g = void 0, y)
            }

            function d() {
                void 0 !== b && clearTimeout(b), _ = 0, m = w = g = b = void 0
            }

            function p() {
                return void 0 === b ? y : f(E())
            }

            function h() {
                var e = E(),
                    n = u(e);
                if (m = arguments, g = this, w = e, n) {
                    if (void 0 === b) return o(w);
                    if (I) return b = setTimeout(c, t), i(w)
                }
                return void 0 === b && (b = setTimeout(c, t)), y
            }
            var m, g, v, y, b, w, _ = 0,
                O = !1,
                I = !1,
                A = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return t = s(t) || 0, r(n) && (O = !!n.leading, I = "maxWait" in n, v = I ? k(s(n.maxWait) || 0, t) : v, A = "trailing" in n ? !!n.trailing : A), h.cancel = d, h.flush = p, h
        }

        function i(e, t, i) {
            var o = !0,
                a = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return r(i) && (o = "leading" in i ? !!i.leading : o, a = "trailing" in i ? !!i.trailing : a), n(e, t, {
                leading: o,
                maxWait: t,
                trailing: a
            })
        }

        function r(e) {
            var t = "undefined" == typeof e ? "undefined" : u(e);
            return !!e && ("object" == t || "function" == t)
        }

        function o(e) {
            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
        }

        function a(e) {
            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || o(e) && _.call(e) == f
        }

        function s(e) {
            if ("number" == typeof e) return e;
            if (a(e)) return c;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(d, "");
            var n = h.test(e);
            return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : p.test(e) ? c : +e
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = "Expected a function",
            c = NaN,
            f = "[object Symbol]",
            d = /^\s+|\s+$/g,
            p = /^[-+]0x[0-9a-f]+$/i,
            h = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            g = parseInt,
            v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
            y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
            b = v || y || Function("return this")(),
            w = Object.prototype,
            _ = w.toString,
            k = Math.max,
            S = Math.min,
            E = function() {
                return b.Date.now()
            };
        e.exports = i
    }).call(t, function() {
        return this
    }())
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function i(e) {
        return this instanceof i ? void r.call(this, e) : new i(e)
    }
    e.exports = i;
    var r = n(71),
        o = n(32);
    o.inherits = n(21), o.inherits(i, r), i.prototype._transform = function(e, t, n) {
        n(null, e)
    }
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function i(e, t) {
            var i = n(26);
            e = e || {};
            var r = e.highWaterMark,
                o = e.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : o, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!e.objectMode, t instanceof i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (L || (L = n(122).StringDecoder), this.decoder = new L(e.encoding), this.encoding = e.encoding)
        }

        function r(e) {
            n(26);
            return this instanceof r ? (this._readableState = new i(e, this), this.readable = !0, void I.call(this)) : new r(e)
        }

        function o(e, t, n, i, r) {
            var o = l(t, n);
            if (o) e.emit("error", o);
            else if (A.isNullOrUndefined(n)) t.reading = !1, t.ended || c(e, t);
            else if (t.objectMode || n && n.length > 0)
                if (t.ended && !r) {
                    var s = new Error("stream.push() after EOF");
                    e.emit("error", s)
                } else if (t.endEmitted && r) {
                var s = new Error("stream.unshift() after end event");
                e.emit("error", s)
            } else !t.decoder || r || i || (n = t.decoder.write(n)), r || (t.reading = !1), t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && f(e)), p(e, t);
            else r || (t.reading = !1);
            return a(t)
        }

        function a(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }

        function s(e) {
            if (e >= T) e = T;
            else {
                e--;
                for (var t = 1; t < 32; t <<= 1) e |= e >> t;
                e++
            }
            return e
        }

        function u(e, t) {
            return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : isNaN(e) || A.isNull(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : e <= 0 ? 0 : (e > t.highWaterMark && (t.highWaterMark = s(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
        }

        function l(e, t) {
            var n = null;
            return A.isBuffer(t) || A.isString(t) || A.isNullOrUndefined(t) || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
        }

        function c(e, t) {
            if (t.decoder && !t.ended) {
                var n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
            }
            t.ended = !0, f(e)
        }

        function f(e) {
            var n = e._readableState;
            n.needReadable = !1, n.emittedReadable || (P("emitReadable", n.flowing), n.emittedReadable = !0, n.sync ? t.nextTick(function() {
                d(e)
            }) : d(e))
        }

        function d(e) {
            P("emit readable"), e.emit("readable"), y(e)
        }

        function p(e, n) {
            n.readingMore || (n.readingMore = !0, t.nextTick(function() {
                h(e, n)
            }))
        }

        function h(e, t) {
            for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (P("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
            t.readingMore = !1
        }

        function m(e) {
            return function() {
                var t = e._readableState;
                P("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && O.listenerCount(e, "data") && (t.flowing = !0, y(e))
            }
        }

        function g(e, n) {
            n.resumeScheduled || (n.resumeScheduled = !0, t.nextTick(function() {
                v(e, n)
            }))
        }

        function v(e, t) {
            t.resumeScheduled = !1, e.emit("resume"), y(e), t.flowing && !t.reading && e.read(0)
        }

        function y(e) {
            var t = e._readableState;
            if (P("flow", t.flowing), t.flowing)
                do var n = e.read(); while (null !== n && t.flowing)
        }

        function b(e, t) {
            var n, i = t.buffer,
                r = t.length,
                o = !!t.decoder,
                a = !!t.objectMode;
            if (0 === i.length) return null;
            if (0 === r) n = null;
            else if (a) n = i.shift();
            else if (!e || e >= r) n = o ? i.join("") : E.concat(i, r), i.length = 0;
            else if (e < i[0].length) {
                var s = i[0];
                n = s.slice(0, e), i[0] = s.slice(e)
            } else if (e === i[0].length) n = i.shift();
            else {
                n = o ? "" : new E(e);
                for (var u = 0, l = 0, c = i.length; l < c && u < e; l++) {
                    var s = i[0],
                        f = Math.min(e - u, s.length);
                    o ? n += s.slice(0, f) : s.copy(n, u, 0, f), f < s.length ? i[0] = s.slice(f) : i.shift(), u += f
                }
            }
            return n
        }

        function w(e) {
            var n = e._readableState;
            if (n.length > 0) throw new Error("endReadable called on non-empty stream");
            n.endEmitted || (n.ended = !0, t.nextTick(function() {
                n.endEmitted || 0 !== n.length || (n.endEmitted = !0, e.readable = !1, e.emit("end"))
            }))
        }

        function _(e, t) {
            for (var n = 0, i = e.length; n < i; n++) t(e[n], n)
        }

        function k(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
            return -1
        }
        e.exports = r;
        var S = n(227),
            E = n(24).Buffer;
        r.ReadableState = i;
        var O = n(80).EventEmitter;
        O.listenerCount || (O.listenerCount = function(e, t) {
            return e.listeners(t).length
        });
        var I = n(37),
            A = n(32);
        A.inherits = n(21);
        var L, P = n(284);
        P = P && P.debuglog ? P.debuglog("stream") : function() {}, A.inherits(r, I), r.prototype.push = function(e, t) {
            var n = this._readableState;
            return A.isString(e) && !n.objectMode && (t = t || n.defaultEncoding, t !== n.encoding && (e = new E(e, t), t = "")), o(this, n, e, t, !1)
        }, r.prototype.unshift = function(e) {
            return o(this, this._readableState, e, "", !0)
        }, r.prototype.setEncoding = function(e) {
            return L || (L = n(122).StringDecoder), this._readableState.decoder = new L(e), this._readableState.encoding = e, this
        };
        var T = 8388608;
        r.prototype.read = function(e) {
            P("read", e);
            var t = this._readableState,
                n = e;
            if ((!A.isNumber(e) || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return P("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? w(this) : f(this), null;
            if (e = u(e, t), 0 === e && t.ended) return 0 === t.length && w(this), null;
            var i = t.needReadable;
            P("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && (i = !0, P("length less than watermark", i)), (t.ended || t.reading) && (i = !1, P("reading or ended", i)), i && (P("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), i && !t.reading && (e = u(n, t));
            var r;
            return r = e > 0 ? b(e, t) : null, A.isNull(r) && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), n !== e && t.ended && 0 === t.length && w(this), A.isNull(r) || this.emit("data", r), r
        }, r.prototype._read = function(e) {
            this.emit("error", new Error("not implemented"))
        }, r.prototype.pipe = function(e, n) {
            function i(e) {
                P("onunpipe"), e === f && o()
            }

            function r() {
                P("onend"), e.end()
            }

            function o() {
                P("cleanup"), e.removeListener("close", u), e.removeListener("finish", l), e.removeListener("drain", g), e.removeListener("error", s), e.removeListener("unpipe", i), f.removeListener("end", r), f.removeListener("end", o), f.removeListener("data", a), !d.awaitDrain || e._writableState && !e._writableState.needDrain || g()
            }

            function a(t) {
                P("ondata"), !1 === e.write(t) && (P("false write response, pause", f._readableState.awaitDrain), f._readableState.awaitDrain++, f.pause())
            }

            function s(t) {
                P("onerror", t), c(), e.removeListener("error", s), 0 === O.listenerCount(e, "error") && e.emit("error", t)
            }

            function u() {
                e.removeListener("finish", l), c()
            }

            function l() {
                P("onfinish"), e.removeListener("close", u), c()
            }

            function c() {
                P("unpipe"), f.unpipe(e)
            }
            var f = this,
                d = this._readableState;
            switch (d.pipesCount) {
                case 0:
                    d.pipes = e;
                    break;
                case 1:
                    d.pipes = [d.pipes, e];
                    break;
                default:
                    d.pipes.push(e)
            }
            d.pipesCount += 1, P("pipe count=%d opts=%j", d.pipesCount, n);
            var p = (!n || n.end !== !1) && e !== t.stdout && e !== t.stderr,
                h = p ? r : o;
            d.endEmitted ? t.nextTick(h) : f.once("end", h), e.on("unpipe", i);
            var g = m(f);
            return e.on("drain", g), f.on("data", a), e._events && e._events.error ? S(e._events.error) ? e._events.error.unshift(s) : e._events.error = [s, e._events.error] : e.on("error", s), e.once("close", u), e.once("finish", l), e.emit("pipe", f), d.flowing || (P("pipe resume"), f.resume()), e
        }, r.prototype.unpipe = function(e) {
            var t = this._readableState;
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
            if (!e) {
                var n = t.pipes,
                    i = t.pipesCount;
                t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                for (var r = 0; r < i; r++) n[r].emit("unpipe", this);
                return this
            }
            var r = k(t.pipes, e);
            return r === -1 ? this : (t.pipes.splice(r, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
        }, r.prototype.on = function(e, n) {
            var i = I.prototype.on.call(this, e, n);
            if ("data" === e && !1 !== this._readableState.flowing && this.resume(), "readable" === e && this.readable) {
                var r = this._readableState;
                if (!r.readableListening)
                    if (r.readableListening = !0, r.emittedReadable = !1, r.needReadable = !0, r.reading) r.length && f(this, r);
                    else {
                        var o = this;
                        t.nextTick(function() {
                            P("readable nexttick read 0"), o.read(0)
                        })
                    }
            }
            return i
        }, r.prototype.addListener = r.prototype.on, r.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (P("resume"), e.flowing = !0, e.reading || (P("resume read 0"), this.read(0)), g(this, e)), this
        }, r.prototype.pause = function() {
            return P("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (P("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, r.prototype.wrap = function(e) {
            var t = this._readableState,
                n = !1,
                i = this;
            e.on("end", function() {
                if (P("wrapped end"), t.decoder && !t.ended) {
                    var e = t.decoder.end();
                    e && e.length && i.push(e)
                }
                i.push(null)
            }), e.on("data", function(r) {
                if (P("wrapped data"), t.decoder && (r = t.decoder.write(r)), r && (t.objectMode || r.length)) {
                    i.push(r) || (n = !0, e.pause())
                }
            });
            for (var r in e) A.isFunction(e[r]) && A.isUndefined(this[r]) && (this[r] = function(t) {
                return function() {
                    return e[t].apply(e, arguments)
                }
            }(r));
            return _(["error", "close", "destroy", "pause", "resume"], function(t) {
                e.on(t, i.emit.bind(i, t))
            }), i._read = function(t) {
                P("wrapped _read", t), n && (n = !1, e.resume())
            }, i
        }, r._fromList = b
    }).call(t, n(41))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && !u(e)) throw new Error("Unknown encoding: " + e)
    }

    function r(e) {
        return e.toString(this.encoding)
    }

    function o(e) {
        this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
    }

    function a(e) {
        this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
    }
    var s = n(24).Buffer,
        u = s.isEncoding || function(e) {
            switch (e && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        },
        l = t.StringDecoder = function(e) {
            switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), i(e), this.encoding) {
                case "utf8":
                    this.surrogateSize = 3;
                    break;
                case "ucs2":
                case "utf16le":
                    this.surrogateSize = 2, this.detectIncompleteChar = o;
                    break;
                case "base64":
                    this.surrogateSize = 3, this.detectIncompleteChar = a;
                    break;
                default:
                    return void(this.write = r)
            }
            this.charBuffer = new s(6), this.charReceived = 0, this.charLength = 0
        };
    l.prototype.write = function(e) {
        for (var t = ""; this.charLength;) {
            var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
            if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
            e = e.slice(n, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
            var i = t.charCodeAt(t.length - 1);
            if (!(i >= 55296 && i <= 56319)) {
                if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                break
            }
            this.charLength += this.surrogateSize, t = ""
        }
        this.detectIncompleteChar(e);
        var r = e.length;
        this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), r -= this.charReceived), t += e.toString(this.encoding, 0, r);
        var r = t.length - 1,
            i = t.charCodeAt(r);
        if (i >= 55296 && i <= 56319) {
            var o = this.surrogateSize;
            return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, r)
        }
        return t
    }, l.prototype.detectIncompleteChar = function(e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
            var n = e[e.length - t];
            if (1 == t && n >> 5 == 6) {
                this.charLength = 2;
                break
            }
            if (t <= 2 && n >> 4 == 14) {
                this.charLength = 3;
                break
            }
            if (t <= 3 && n >> 3 == 30) {
                this.charLength = 4;
                break
            }
        }
        this.charReceived = t
    }, l.prototype.end = function(e) {
        var t = "";
        if (e && e.length && (t = this.write(e)), this.charReceived) {
            var n = this.charReceived,
                i = this.charBuffer,
                r = this.encoding;
            t += i.slice(0, n).toString(r)
        }
        return t
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        var t = null;
        return a.default.createElement("div", {
            className: "app-tile",
            style: e.item.inlineStyle || {}
        }, a.default.createElement("div", {
            tabIndex: "-1",
            role: "menuitem",
            className: "app",
            key: e.item.uid,
            onClick: function() {
                return (0, u.launch)(e.item)
            },
            onBlur: function() {
                return c.default.hideMarquee(e, t)
            }
        }, a.default.createElement("div", {
            className: "app__icon",
            style: {
                color: e.item.theme && e.item.theme.color,
                backgroundImage: "url('" + e.item.icon_url + "')"
            }
        }, a.default.createElement("div", {
            className: "app__icon--hq",
            style: {
                backgroundImage: "url('" + e.item.icon_url_hq + "')"
            }
        }), e.item.favicon_url && a.default.createElement("div", {
            className: "app__icon--favicon",
            style: {
                backgroundImage: "url('" + e.item.favicon_url + "')"
            }
        })), a.default.createElement("div", {
            className: "app__name",
            ref: function(e) {
                t = e
            }
        }, (0, s.unescapeNumericHTMLEntities)(e.item.displayName))))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(3),
        a = i(o),
        s = n(76),
        u = n(38),
        l = n(124),
        c = i(l)
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function() {
            function e() {
                n(this, e), this.marqueeDelay = null, this.scrollDelay = null, this.EACH_SCROLL_PX = 6, this.SPACE_STR = "              "
            }
            return i(e, [{
                key: "showMarquee",
                value: function(e, t) {
                    var n = this;
                    if (!(t.scrollWidth <= t.offsetWidth)) {
                        var i = t.scrollWidth;
                        this.marqueeDelay = setTimeout(function() {
                            t.style.textOverflow = "unset", t.innerText = t.innerText + n.SPACE_STR + t.innerText, n.makeMarquee(e, t, i)
                        }, 1e3)
                    }
                }
            }, {
                key: "makeMarquee",
                value: function(e, t, n) {
                    var i = this,
                        r = "rtl" === document.dir,
                        o = t.scrollWidth,
                        a = t.scrollLeft;
                    (r ? o + a < n + this.EACH_SCROLL_PX : o - a - this.EACH_SCROLL_PX > n) ? (a = r ? a - this.EACH_SCROLL_PX : a + this.EACH_SCROLL_PX, t.scrollLeft = a, this.scrollDelay = setTimeout(function() {
                        i.makeMarquee(e, t, n)
                    }, 90)) : this.hideMarquee(e, t)
                }
            }, {
                key: "hideMarquee",
                value: function(e, t) {
                    "list" !== e.viewMode || t.scrollWidth <= t.offsetWidth || (clearTimeout(this.scrollDelay), clearTimeout(this.marqueeDelay), t.innerText = e.item.displayName, t.style.textOverflow = "ellipsis", t.scrollLeft = 0)
                }
            }]), e
        }(),
        o = new r;
    t.default = o
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        a.default.request("showDialog", {
            type: "confirm",
            ok: "uninstall",
            header: (0, s.toL10n)("confirmation"),
            content: (0, s.toL10n)("confirm-to-uninstall-app", {
                appName: e.manifest.name
            }),
            translated: !0,
            onOk: function() {
                navigator.mozApps.mgmt.uninstall(e)
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uninstallMozApp = r;
    var o = n(4),
        a = i(o),
        s = n(9)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (!l(e) || f(e) || g(e) || c(e)) return !0;
        if (d(e)) {
            return !(p() && !h())
        }
        var t = (0, o.findFoldersByItemManifestURL)(AppStore.apps, e.manifestURL);
        return t.length > 0 ? m(t) : (dump("FIH shouldHide " + e.manifest.name + "," + AppStore.customApps + "," + v(e) + ", " + y(e)), "0" == AppStore.customApps && (v(e) || y(e)))
    }

    function r(e) {
        return dump("FIH shouldHideinSideMenu " + e.manifest.name + "," + AppStore.customApps + "," + v(e) + ", " + y(e)), "0" == AppStore.customApps && (v(e) || y(e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i, t.shouldHideinSideMenu = r;
    var o = n(30),
        a = ["system", "input", "theme", "homescreen", "invisible", "carrier"],
        s = ["Siberian Strike", "Danger Dash", "Real Football Runner"],
        u = ["Assistant", "Maps", "Google Search", "YouTube", "YouTubeApp", "Twitter", "Facebook", "WhatsApp"],
        l = function(e) {
            return e.enabled
        },
        c = function(e) {
            return "dialer" === e.entry
        },
        f = function(e) {
            return a.includes(e.manifest.role)
        },
        d = function(e) {
            return "stk" === e.manifest.name
        },
        p = function() {
            return AppStore.flags.stkEnabled
        },
        h = function() {
            return AppStore.flags.airplaneModeEnabled
        },
        m = function(e) {
            return !(e.filter(function(e) {
                return e.showItemsInAllApps
            }).length > 0)
        },
        g = function(e) {
            return e.isInSidemenu
        },
        v = function(e) {
            return s.includes(e.manifest.name)
        },
        y = function(e) {
            return u.includes(e.manifest.name)
        }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        try {
            var e = JSON.parse(localStorage.getItem(v));
            if (Array.isArray(e)) return void(y = e);
            var t = JSON.parse(localStorage.getItem(g));
            if (Array.isArray(t)) return y = t.map(o), a(y), void localStorage.removeItem(g);
            y = h.default
        } catch (n) {
            y = h.default
        }
    }

    function o(e) {
        return "string" == typeof e ? {
            name: e
        } : e
    }

    function a(e) {
        y = e, localStorage.setItem(v, JSON.stringify(e))
    }

    function s(e) {
        if (y && y.length > 0) {
            var t = y.findIndex(function(t) {
                return t.manifestURL === e
            });
            t >= 0 && (y.splice(t, 1), a(y))
        }
    }

    function u(e) {
        return d.default.isCustomizedItem(e) && parseInt(e.position, 10) >= 0 && -1 === y.findIndex(function(t) {
            return b(e, t)
        }) && y.splice(+e.position, 0, {
            name: e.name,
            manifestURL: e.manifestURL
        }), e
    }

    function l(e) {
        var t = y.findIndex(function(t) {
            return b(e, t)
        });
        return e.order = t >= 0 ? t : 99, e
    }

    function c() {
        y = null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.restoreUserSavedAppsOrder = r, t.upgradeV1FormatIntoV2 = o, t.saveAppsOrder = a, t.removeItemFromAppsOrder = s, t.calcAppsOrder = u, t.applyAppsOrder = l, t.clear = c;
    var f = n(128),
        d = i(f),
        p = n(236),
        h = i(p),
        m = n(30),
        g = "app-order",
        v = "apps-order-v2",
        y = null,
        b = function(e, t) {
            return t.manifestURL && m.matcher.hasManifestURL(e, t.manifestURL) || t.origin && m.matcher.hasOrigin(e, t.origin)
        }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(31),
        c = i(l),
        f = n(16),
        d = i(f),
        p = n(234),
        h = i(p),
        m = n(238),
        g = i(m),
        v = n(239),
        y = function(e) {
            function t() {
                var e, n, i, a;
                r(this, t);
                for (var u = arguments.length, l = Array(u), c = 0; c < u; c++) l[c] = arguments[c];
                return n = i = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), i.rules = [], i.cachedRulesJson = null, i.mount = function() {
                    d.default.addObserver("home.customization.rules", i.handleCustomizationRulesUpdate)
                }, i.unmount = function() {
                    d.default.removeObserver("home.customization.rules", i.handleCustomizationRulesUpdate)
                }, i.handleCustomizationRulesUpdate = function(e) {
                    try {
                        if (!e) return void i.cleanUpCustomizationRules();
                        if (e === i.cachedRulesJson) return;
                        var t = JSON.parse(e);
                        if (!Array.isArray(t)) throw new Error("Received an invalid customization update, the rule list should be an array.");
                        var n = t.filter(function(e) {
                            switch ((0, v.validateCustomizationRule)(e), e.type) {
                                case g.default.ShowFolder:
                                    return (0, v.validateShowFolderRule)(e), !0;
                                default:
                                    throw new Error("Received an invalid customization rule type: " + e.type)
                            }
                        });
                        i.cachedRulesJson = e, i.rules = n, i.emit("updated")
                    } catch (r) {}
                }, i.getCustomFolders = function() {
                    return i.rules.filter(function(e) {
                        return e.type === g.default.ShowFolder
                    }).map(function(e) {
                        return e.params.folder
                    }).map(function(e) {
                        return s({}, e, {
                            source: h.default.Customization
                        })
                    })
                }, i.cleanUpCustomizationRules = function() {
                    i.rules = [], i.cachedRulesJson = null, i.emit("updated")
                }, a = n, o(i, a)
            }
            return a(t, e), u(t, null, [{
                key: "isCustomizedItem",
                value: function(e) {
                    return e.source && e.source === h.default.Customization
                }
            }]), t
        }(c.default);
    t.default = y
}, , function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = t.EVENT_TYPES = {
            APP_POSITION: "app_position"
        },
        o = "eventlogger_event",
        a = function() {
            function e() {
                n(this, e), this.dataStore = null
            }
            return i(e, [{
                key: "log",
                value: function(e) {
                    if (e && e.type) switch (e.type) {
                        case r.APP_POSITION:
                            this.write({
                                event_type: r.APP_POSITION,
                                starting_position: e.starting_position,
                                end_position: e.end_position,
                                app_id: e.app_id,
                                app_version: e.app_version
                            })
                    }
                }
            }, {
                key: "write",
                value: function(e) {
                    return this.getStore().then(function(t) {
                        return t.add(e)
                    })
                }
            }, {
                key: "getStore",
                value: function() {
                    var e = this;
                    return this.dataStore ? Promise.resolve(this.dataStore) : new Promise(function(t, n) {
                        return navigator.getDataStores ? void navigator.getDataStores(o).then(function(i) {
                            return i.length < 1 ? void n("EventLogger: Cannot get access to the DataStore:", o) : (e.dataStore = i[0], void t(e.dataStore))
                        }, n) : void n("EventLogger: DataStore API is not available.")
                    })
                }
            }]), e
        }();
    t.eventLogger = new a
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(17),
        c = r(l),
        f = n(250),
        d = r(f),
        p = n(4),
        h = (r(p), n(50)),
        m = r(h),
        g = n(78),
        v = (r(g), n(9)),
        y = (i(v), n(38)),
        b = function(e) {
            function t() {
                var e, n, i, r;
                o(this, t);
                for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                return n = i = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.name = "ICEContactHelper", i._flipManager = null, i._iceContacts = null, i._dialTimes = 0, i._firstPressed = !1, i._longPressed = !1, i._smOn = !1, i._sosCallOn = !1, i._sosMsgOn = !1, i._sosPosition = !1, i._callServiceId = 0, i._smsServiceId = 0, i._geoEnabled = !1, i._geoUserPrompt = !1, r = n, a(i, r)
            }
            return s(t, e), u(t, [{
                key: "_stopICEProcess",
                value: function() {
                    dump("ICE Stop"), this._iceContacts = [], navigator.mozSettings.createLock().set({
                        "accessibilitymode.ice_calling": !1
                    })
                }
            }, {
                key: "_dblOrLongPressed",
                value: function() {
                    if (dump("ICE _dblOrLongPressed"), this._smOn && this._sosCallOn) this._iceProcess();
                    else {
                        if ("0" == AppStore.customApps) return;
                        dump("ICE try launch assistant"), this._flipManager && dump("flipOpened: " + this._flipManager.flipOpened), this._flipManager && this._flipManager.flipOpened && AppStore.apps.some(function(e) {
                            "Assistant" === e.manifest.name && (0, y.launch)(e)
                        })
                    }
                }
            }, {
                key: "_iceProcess",
                value: function() {
                    var e = this;
                    d.default.getContacts().then(function(t) {
                        if (e._iceContacts = t, e._dialTimes = 1, dump("ICE process : " + e._sosCallOn + ", " + e._iceContacts.length), "enabled" == AirplaneModeHelper.getStatus()) {
                            var n = {
                                messageL10nId: "callAirplaneModeMessage",
                                latency: 2e3,
                                useTransition: !0
                            };
                            return void Toaster.showToast(n)
                        }
                        if (e._iceContacts.length > 0) navigator.mozSettings.createLock().set({
                            "accessibilitymode.ice_calling": !0
                        }), window.setTimeout(function() {
                            e._iceDial(0)
                        }, 1e3);
                        else {
                            var i = {
                                messageL10nId: "qtn_sm_toast_set_ICE_first",
                                latency: 2e3,
                                useTransition: !0
                            };
                            Toaster.showToast(i)
                        }
                        e._sosMsgOn && e._sendICEInfo()
                    })
                }
            }, {
                key: "_determinServiceId",
                value: function(e) {
                    return 1 == e ? 1 : 0
                }
            }, {
                key: "_getCurrentPosition",
                value: function(e) {
                    var t = this,
                        n = {
                            enableHighAccuracy: !0,
                            timeout: e,
                            maximumAge: 0
                        };
                    return new Promise(function(e, i) {
                        navigator.geolocation.getCurrentPosition(function(n) {
                            var i = n.coords;
                            dump("ICE get geolocation: " + JSON.stringify(i)), t._geoUserPrompt = !0, e(" latitude:" + i.latitude + ", longitude:" + i.longitude + " ")
                        }, function(n) {
                            dump("ICE get geolocation error: " + n.code), t._geoUserPrompt = 1 != n.code, e("")
                        }, n)
                    })
                }
            }, {
                key: "register",
                value: function(e) {
                    var t = this,
                        n = navigator.mozSettings.createLock();
                    ! function e() {
                        navigator.getFlipManager ? navigator.getFlipManager().then(function(e) {
                            dump("ICE getFlipManager " + e), t._flipManager = e
                        }) : (dump("ICE wait getFlipManager to be ready"), window.setTimeout(function() {
                            e()
                        }, 500))
                    }();
                    var i = n.get("iceinformation.soscallon"),
                        r = n.get("iceinformation.sosmessageon"),
                        o = n.get("accessibilitymode.enabled"),
                        a = n.get("ril.telephony.defaultServiceId"),
                        s = n.get("ril.sms.defaultServiceId"),
                        u = n.get("geolocation.enabled"),
                        l = n.get("iceinformation.sosposition");
                    Promise.all([i, r, o, a, s, u, l]).then(function(e) {
                        t._sosCallOn = !!e[0]["iceinformation.soscallon"], t._sosMsgOn = !!e[1]["iceinformation.sosmessageon"], t._smOn = !!e[2]["accessibilitymode.enabled"], t._callServiceId = t._determinServiceId(e[3]["ril.telephony.defaultServiceId"]), t._smsServiceId = t._determinServiceId(e[4]["ril.sms.defaultServiceId"]), t._geoEnabled = e[5]["geolocation.enabled"], t._sosPosition = e[6]["iceinformation.sosposition"], dump("ICE register " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId + ", " + t._geoEnabled)
                    }), navigator.mozSettings.addObserver("iceinformation.soscallon", function(e) {
                        t._sosCallOn = e.settingValue, dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId + ", " + t._geoEnabled)
                    }), navigator.mozSettings.addObserver("iceinformation.sosmessageon", function(e) {
                        t._sosMsgOn = e.settingValue, dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId + ", " + t._geoEnabled)
                    }), navigator.mozSettings.addObserver("accessibilitymode.enabled", function(e) {
                        t._smOn = e.settingValue, dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId)
                    }), navigator.mozSettings.addObserver("ril.telephony.defaultServiceId", function(e) {
                        t._callServiceId = t._determinServiceId(e.settingValue), dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId)
                    }), navigator.mozSettings.addObserver("ril.sms.defaultServiceId", function(e) {
                        t._smsServiceId = t._determinServiceId(e.settingValue), dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId)
                    }), navigator.mozSettings.addObserver("geolocation.enabled", function(e) {
                        t._geoEnabled = e.settingValue, dump("ICE setting change " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId + ", " + t._geoEnabled)
                    }), navigator.mozSettings.addObserver("iceinformation.sosposition", function(e) {
                        t._sosPosition = e.settingValue, t._geoPermissionCheck(), dump("ICE setting change sosposition " + t._smOn + ", " + t._sosCallOn + ", " + t._sosMsgOn + ", " + t._callServiceId + ", " + t._smsServiceId + ", " + t._sosPosition)
                    }), navigator.mozSettings.addObserver("accessibilitymode.endcall.pressed", function(e) {
                        dump("ice endcall pressed:" + e.settingValue), e.settingValue && t._stopICEProcess()
                    }), navigator.mozSettings.addObserver("accessibilitymode.helpkey.pressed", function(e) {
                        if (dump("ice help key pressed:" + e.settingValue), "longpressed" == e.settingValue || "dblpressed" == e.settingValue) t._dblOrLongPressed();
                        else if (e.settingValue.includes("onepressed")) {
                            var n = e.settingValue.split("_");
                            "true" == n[1] && t._popUsage()
                        }
                    })
                }
            }, {
                key: "_geoPermissionCheck",
                value: function() {
                    var e = this;
                    dump("ICE _geoPermissionCheck"), this._smOn && this._sosCallOn && this._sosMsgOn && this._sosPosition && !this._geoUserPrompt && this._getCurrentPosition().then(function(t) {
                        dump("ICE _geoPermissionCheck crd:" + t), e._geoUserPrompt || window.setTimeout(function() {
                            e._geoPermissionCheck()
                        }, 1e4)
                    })
                }
            }, {
                key: "_sendICEInfo",
                value: function() {
                    var e, t, n = void 0,
                        i = [];
                    if (SIMSlotManager.isSIMCardAbsent(0) && SIMSlotManager.isSIMCardAbsent(1)) return void dump("ICE send No sim inserted can not send sms");
                    n = {
                        serviceId: this._smsServiceId
                    };
                    for (var r = 0; r < this._iceContacts.length; r++) {
                        var o = this._iceContacts[r].tel;
                        o && i.push(o)
                    }
                    var a = navigator.mozSettings.createLock(),
                        s = a.get("iceinformation.sosmessage"),
                        u = a.get("iceinformation.user"),
                        l = new Promise(function(e) {
                            e("")
                        });
                    this._sosPosition && (dump("ICE send get geo location"), l = this._getCurrentPosition(12e4)), Promise.all([s, u, l]).then(function(r) {
                        t = r[0]["iceinformation.sosmessage"], e = r[1]["iceinformation.user"];
                        var o = r[2];
                        null == e && (e = ""), null == o && (o = "");
                        var a = e + t + o;
                        dump("ICE send " + i + ", " + a + ", " + n), navigator.mozMobileMessage.send(i, a, n).forEach(function(e) {
                            e.onsuccess = function(e) {
                                dump("ICE send sms successfully:" + JSON.stringify(e))
                            }, e.onerror = function(e) {
                                dump("ICE send sms failed:" + JSON.stringify(e))
                            }
                        })
                    })
                }
            }, {
                key: "_iceDial",
                value: function(e) {
                    var t = this;
                    if (e >= this._iceContacts.length) return dump("ICE dial invalid index of ice contacts"), void this._stopICEProcess();
                    if (this._dialTimes > 10) return dump("ICE dial had tried to call all iceContacts 10 times"), void this._stopICEProcess();
                    var n = this._iceContacts[e].tel;
                    dump("ICE dial tel=" + n + ",index=" + e + ",dialTimes=" + this._dialTimes), this._dial(n).then(function(e) {
                        dump("ICE dial succeded:" + e), t._stopICEProcess()
                    }, function(n) {
                        dump("ICE dial failed due to " + n + ", try next ICE"), e += 1, e >= t._iceContacts.length && (t._dialTimes += 1, e = 0), window.setTimeout(function() {
                            t._iceDial(e)
                        }, 2e3)
                    })
                }
            }, {
                key: "_dial",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, i) {
                        e ? m.default.dialSilently(e, {
                            serviceId: t._callServiceId
                        }).then(function(e) {
                            n(e)
                        }, function(e) {
                            i(e)
                        }) : i("Invalid tel number")
                    })
                }
            }, {
                key: "_popUsage",
                value: function() {
                    if (("0" != AppStore.customApps || this._smOn) && this._flipManager && this._flipManager.flipOpened) {
                        var e = void 0;
                        e = this._smOn ? {
                            messageL10nId: "qtn_sm_toast_sos_call_msg",
                            latency: 2e3,
                            useTransition: !0
                        } : {
                            messageL10nId: "qtn_sm_toast_google_assist",
                            latency: 2e3,
                            useTransition: !0
                        }, Toaster.showToast(e)
                    }
                }
            }]), t
        }(c.default),
        w = new b;
    t.default = w
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(17),
        l = i(u),
        c = function(e) {
            function t() {
                return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), s(t, [{
                key: "start",
                value: function() {
                    this.emit("user-has-selected")
                }
            }]), t
        }(l.default),
        f = new c;
    t.default = f
}, , , function(e, t) {
    "use strict";

    function n(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
    }

    function i(e) {
        return 3 * e.length / 4 - n(e)
    }

    function r(e) {
        var t, i, r, o, a, s, u = e.length;
        a = n(e), s = new c(3 * u / 4 - a), r = a > 0 ? u - 4 : u;
        var f = 0;
        for (t = 0, i = 0; t < r; t += 4, i += 3) o = l[e.charCodeAt(t)] << 18 | l[e.charCodeAt(t + 1)] << 12 | l[e.charCodeAt(t + 2)] << 6 | l[e.charCodeAt(t + 3)], s[f++] = o >> 16 & 255, s[f++] = o >> 8 & 255, s[f++] = 255 & o;
        return 2 === a ? (o = l[e.charCodeAt(t)] << 2 | l[e.charCodeAt(t + 1)] >> 4, s[f++] = 255 & o) : 1 === a && (o = l[e.charCodeAt(t)] << 10 | l[e.charCodeAt(t + 1)] << 4 | l[e.charCodeAt(t + 2)] >> 2, s[f++] = o >> 8 & 255, s[f++] = 255 & o), s
    }

    function o(e) {
        return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
    }

    function a(e, t, n) {
        for (var i, r = [], a = t; a < n; a += 3) i = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2],
            r.push(o(i));
        return r.join("")
    }

    function s(e) {
        for (var t, n = e.length, i = n % 3, r = "", o = [], s = 16383, l = 0, c = n - i; l < c; l += s) o.push(a(e, l, l + s > c ? c : l + s));
        return 1 === i ? (t = e[n - 1], r += u[t >> 2], r += u[t << 4 & 63], r += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], r += u[t >> 10], r += u[t >> 4 & 63], r += u[t << 2 & 63], r += "="), o.push(r), o.join("")
    }
    t.byteLength = i, t.toByteArray = r, t.fromByteArray = s;
    for (var u = [], l = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, p = f.length; d < p; ++d) u[d] = f[d], l[f.charCodeAt(d)] = d;
    l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(13),
        f = i(c),
        d = n(5),
        p = i(d),
        h = function(e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    popup: null
                }, n
            }
            return a(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "focus",
                value: function() {
                    f.default.findDOMNode(this.refs.composed).focus()
                }
            }, {
                key: "open",
                value: function(e) {
                    this.refs.popup && this.refs.popup.open(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    this.refs.popup && (this.refs.popup.open("bottom-to-up"), this.refs.popup.refs.composed.close = this.close.bind(this), this.refs.popup.refs.composing.on("closing", function() {
                        e.setState({
                            popup: null
                        })
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.popup ? l.default.cloneElement(this.state.popup, {
                        ref: "popup"
                    }) : null;
                    return l.default.createElement("div", {
                        className: "popup"
                    }, e)
                }
            }]), t
        }(p.default);
    t.default = h
}, , , , , , , , , , , , , , , function(e, t, n) {
    var i;
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(r) {
        i = function(e, t, n) {
            "use strict";

            function i(e, t) {
                var n = r(t),
                    i = n.measureText(e).width;
                return a("got text width", i), i
            }

            function r(e) {
                a("get canvas context", e);
                var t = s[e];
                if (t) return t;
                var n = document.createElement("canvas");
                n.setAttribute("moz-opaque", "true"), n.setAttribute("width", "1px"), n.setAttribute("height", "1px"), a("created canvas", n);
                var i = n.getContext("2d", {
                    willReadFrequently: !0
                });
                return i.font = e, s[e] = i
            }

            function o(e) {
                return e.replace(/\s+/g, " ").trim()
            }
            var a = function() {},
                s = {};
            n.exports = function(e) {
                a("font fit", e);
                var t, n, r = e.space - .03 * e.space,
                    s = e.min || 16,
                    u = e.max || 24,
                    l = o(e.text),
                    c = u;
                do n = e.font.replace(/\d+px/, c + "px"), t = i(l, n); while (t > r && c !== s && c--);
                return {
                    textWidth: t,
                    fontSize: c,
                    overflowing: t > r
                }
            }
        }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
    }(n(283))
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!o.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
    }

    function r(e) {
        a.call(this), this._block = o.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    var o = n(226).Buffer,
        a = n(37).Transform;
    n(21)(r, a), r.prototype._transform = function(e, t, n) {
        var i = null;
        try {
            this.update(e, t)
        } catch (r) {
            i = r
        }
        n(i)
    }, r.prototype._flush = function(e) {
        var t = null;
        try {
            this.push(this.digest())
        } catch (n) {
            t = n
        }
        e(t)
    }, r.prototype.update = function(e, t) {
        if (i(e, "Data"), this._finalized) throw new Error("Digest already called");
        o.isBuffer(e) || (e = o.from(e, t));
        for (var n = this._block, r = 0; this._blockOffset + e.length - r >= this._blockSize;) {
            for (var a = this._blockOffset; a < this._blockSize;) n[a++] = e[r++];
            this._update(), this._blockOffset = 0
        }
        for (; r < e.length;) n[this._blockOffset++] = e[r++];
        for (var s = 0, u = 8 * e.length; u > 0; ++s) this._length[s] += u, u = this._length[s] / 4294967296 | 0, u > 0 && (this._length[s] -= 4294967296 * u);
        return this
    }, r.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, r.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
        for (var n = 0; n < 4; ++n) this._length[n] = 0;
        return t
    }, r.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, e.exports = r
}, function(e, t) {
    "use strict";
    t.read = function(e, t, n, i, r) {
        var o, a, s = 8 * r - i - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = -7,
            f = n ? r - 1 : 0,
            d = n ? -1 : 1,
            p = e[t + f];
        for (f += d, o = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
        for (a = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
        if (0 === o) o = 1 - l;
        else {
            if (o === u) return a ? NaN : (p ? -1 : 1) * (1 / 0);
            a += Math.pow(2, i), o -= l
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - i)
    }, t.write = function(e, t, n, i, r, o) {
        var a, s, u, l = 8 * o - r - 1,
            c = (1 << l) - 1,
            f = c >> 1,
            d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            h = i ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), t += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f), t * u >= 2 && (a++, u /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, r), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + p] = 255 & s, p += h, s /= 256, r -= 8);
        for (a = a << r | s, l += r; l > 0; e[n + p] = 255 & a, p += h, a /= 256, l -= 8);
        e[n + p - h] |= 128 * m
    }
}, function(e, t) {
    "use strict";
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    "use strict";

    function i() {
        c.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }

    function r(e, t) {
        return e << t | e >>> 32 - t
    }

    function o(e, t, n, i, o, a, s) {
        return r(e + (t & n | ~t & i) + o + a | 0, s) + t | 0
    }

    function a(e, t, n, i, o, a, s) {
        return r(e + (t & i | n & ~i) + o + a | 0, s) + t | 0
    }

    function s(e, t, n, i, o, a, s) {
        return r(e + (t ^ n ^ i) + o + a | 0, s) + t | 0
    }

    function u(e, t, n, i, o, a, s) {
        return r(e + (n ^ (t | ~i)) + o + a | 0, s) + t | 0
    }
    var l = n(21),
        c = n(153),
        f = n(157).Buffer,
        d = new Array(16);
    l(i, c), i.prototype._update = function() {
        for (var e = d, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
        var n = this._a,
            i = this._b,
            r = this._c,
            l = this._d;
        n = o(n, i, r, l, e[0], 3614090360, 7), l = o(l, n, i, r, e[1], 3905402710, 12), r = o(r, l, n, i, e[2], 606105819, 17), i = o(i, r, l, n, e[3], 3250441966, 22), n = o(n, i, r, l, e[4], 4118548399, 7), l = o(l, n, i, r, e[5], 1200080426, 12), r = o(r, l, n, i, e[6], 2821735955, 17), i = o(i, r, l, n, e[7], 4249261313, 22), n = o(n, i, r, l, e[8], 1770035416, 7), l = o(l, n, i, r, e[9], 2336552879, 12), r = o(r, l, n, i, e[10], 4294925233, 17), i = o(i, r, l, n, e[11], 2304563134, 22), n = o(n, i, r, l, e[12], 1804603682, 7), l = o(l, n, i, r, e[13], 4254626195, 12), r = o(r, l, n, i, e[14], 2792965006, 17), i = o(i, r, l, n, e[15], 1236535329, 22), n = a(n, i, r, l, e[1], 4129170786, 5), l = a(l, n, i, r, e[6], 3225465664, 9), r = a(r, l, n, i, e[11], 643717713, 14), i = a(i, r, l, n, e[0], 3921069994, 20), n = a(n, i, r, l, e[5], 3593408605, 5), l = a(l, n, i, r, e[10], 38016083, 9), r = a(r, l, n, i, e[15], 3634488961, 14), i = a(i, r, l, n, e[4], 3889429448, 20), n = a(n, i, r, l, e[9], 568446438, 5), l = a(l, n, i, r, e[14], 3275163606, 9), r = a(r, l, n, i, e[3], 4107603335, 14), i = a(i, r, l, n, e[8], 1163531501, 20), n = a(n, i, r, l, e[13], 2850285829, 5), l = a(l, n, i, r, e[2], 4243563512, 9), r = a(r, l, n, i, e[7], 1735328473, 14), i = a(i, r, l, n, e[12], 2368359562, 20), n = s(n, i, r, l, e[5], 4294588738, 4), l = s(l, n, i, r, e[8], 2272392833, 11), r = s(r, l, n, i, e[11], 1839030562, 16), i = s(i, r, l, n, e[14], 4259657740, 23), n = s(n, i, r, l, e[1], 2763975236, 4), l = s(l, n, i, r, e[4], 1272893353, 11), r = s(r, l, n, i, e[7], 4139469664, 16), i = s(i, r, l, n, e[10], 3200236656, 23), n = s(n, i, r, l, e[13], 681279174, 4), l = s(l, n, i, r, e[0], 3936430074, 11), r = s(r, l, n, i, e[3], 3572445317, 16), i = s(i, r, l, n, e[6], 76029189, 23), n = s(n, i, r, l, e[9], 3654602809, 4), l = s(l, n, i, r, e[12], 3873151461, 11), r = s(r, l, n, i, e[15], 530742520, 16), i = s(i, r, l, n, e[2], 3299628645, 23), n = u(n, i, r, l, e[0], 4096336452, 6), l = u(l, n, i, r, e[7], 1126891415, 10), r = u(r, l, n, i, e[14], 2878612391, 15), i = u(i, r, l, n, e[5], 4237533241, 21), n = u(n, i, r, l, e[12], 1700485571, 6), l = u(l, n, i, r, e[3], 2399980690, 10), r = u(r, l, n, i, e[10], 4293915773, 15), i = u(i, r, l, n, e[1], 2240044497, 21), n = u(n, i, r, l, e[8], 1873313359, 6), l = u(l, n, i, r, e[15], 4264355552, 10), r = u(r, l, n, i, e[6], 2734768916, 15), i = u(i, r, l, n, e[13], 1309151649, 21), n = u(n, i, r, l, e[4], 4149444226, 6), l = u(l, n, i, r, e[11], 3174756917, 10), r = u(r, l, n, i, e[2], 718787259, 15), i = u(i, r, l, n, e[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + i | 0, this._c = this._c + r | 0, this._d = this._d + l | 0
    }, i.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = f.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n in e) t[n] = e[n]
    }

    function r(e, t, n) {
        return a(e, t, n)
    }
    var o = n(24),
        a = o.Buffer;
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = o : (i(o, t), t.Buffer = r), i(a, r), r.from = function(e, t, n) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return a(e, t, n)
    }, r.alloc = function(e, t, n) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var i = a(e);
        return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
    }, r.allocUnsafe = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return a(e)
    }, r.allocUnsafeSlow = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return o.SlowBuffer(e)
    }
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(13),
        f = i(c),
        d = n(5),
        p = i(d),
        h = n(160),
        m = i(h);
    n(264);
    var g = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                transition: "closed",
                animation: "immediate"
            }, n
        }
        return a(t, e), s(t, [{
            key: "isHidden",
            value: function() {
                return "opened" !== this.state.transition
            }
        }]), s(t, [{
            key: "isActive",
            value: function() {
                return "opened" === this.state.transition || "opening" === this.state.transition
            }
        }, {
            key: "isTransitioning",
            value: function() {
                return "opening" === this.state.transition || "closing" === this.state.transition
            }
        }, {
            key: "onAnimationEnd",
            value: function(e) {
                if (e.target === f.default.findDOMNode(this)) switch (this.state.transition) {
                    case "opening":
                        this.setState({
                            transition: "opened",
                            animation: ""
                        });
                        break;
                    case "closing":
                        this.setState({
                            transition: "closed",
                            animation: ""
                        })
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                f.default.findDOMNode(this).addEventListener("animationend", this.onAnimationEnd.bind(this), !1)
            }
        }, {
            key: "getActivatedState",
            value: function() {
                switch (this.state.transition) {
                    case "opening":
                        return "-activating";
                    case "closing":
                        return "-deactivating";
                    case "opened":
                        return "-activated";
                    case "closed":
                        return "-deactivated"
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.emit(this.state.transition), this.publish(this.getActivatedState());
                var e = (l.default.Children.toArray(this.props.children)[0], f.default.findDOMNode(this.refs.shadow).firstChild);
                if (!e) return void this.debug("no content");
                if ("opened" === this.state.transition) {
                    if (this.debug("focusing inner content"), this.props.noFocus) return;
                    e.activeElement ? e.activeElement.focus() : e.focus()
                } else "closing" === this.state.transition && e.blur()
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return t.transition !== this.state.transition || t.animation !== this.state.animation
            }
        }, {
            key: "open",
            value: function(e) {
                switch (e = e || this.props.openAnimation, this.state.transition) {
                    case "opened":
                        break;
                    case "opening":
                    case "closing":
                    case "closed":
                        "immediate" !== e && e ? this.setState({
                            transition: "opening",
                            animation: e
                        }) : this.setState({
                            transition: "opened",
                            animation: ""
                        })
                }
            }
        }, {
            key: "focus",
            value: function() {
                var e = f.default.findDOMNode(this.refs.shadow).firstChild;
                e && e.focus()
            }
        }, {
            key: "close",
            value: function(e) {
                switch (e = e || this.props.closeAnimation, this.state.transition) {
                    case "closed":
                        break;
                    case "opening":
                    case "closing":
                    case "opened":
                        "immediate" !== e && e ? this.setState({
                            transition: "closing",
                            animation: e
                        }) : this.setState({
                            transition: "closed",
                            animation: ""
                        })
                }
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    tabIndex: "-1",
                    className: "x-window " + this.state.animation,
                    "aria-hidden": "opened" === this.state.transition ? "false" : "true",
                    "data-transition-state": this.state.transition
                }, l.default.createElement(m.default, {
                    ref: "shadow",
                    transition: this.state.transition,
                    animation: this.state.animation
                }, this.props.children))
            }
        }]), t
    }(p.default);
    g.defaultProps = {
        openAnimation: "immediate",
        closeAnimation: "immediate",
        noFocus: !1
    }, g.propTypes = {
        openAnimation: l.default.PropTypes.string,
        closeAnimation: l.default.PropTypes.string,
        noFocus: l.default.PropTypes.bool
    }, t.default = g
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(13),
        f = (i(c), function(e) {
            function t() {
                return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), s(t, [{
                key: "isOpening",
                value: function(e) {
                    var t = e || this.props;
                    return "opening" === t.transition || "opened" === t.transition && "immediate" === t.animation
                }
            }, {
                key: "isClosed",
                value: function(e) {
                    return "closed" === (e || this.props).transition
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return !!this.isOpening(e)
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        className: "shadow-window"
                    }, this.props.children)
                }
            }]), t
        }(l.default.Component));
    f.defaultProps = {
        transition: "",
        animation: ""
    }, f.propTypes = {
        transition: l.default.PropTypes.string.isRequired,
        animation: l.default.PropTypes.string.isRequired
    }, t.default = f
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return o(e, t, n)
    }
    var r = n(24),
        o = r.Buffer;
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (Object.keys(r).forEach(function(e) {
        t[e] = r[e]
    }), t.Buffer = i), Object.keys(o).forEach(function(e) {
        i[e] = o[e]
    }), i.from = function(e, t, n) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return o(e, t, n)
    }, i.alloc = function(e, t, n) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var i = o(e);
        return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
    }, i.allocUnsafe = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return o(e)
    }, i.allocUnsafeSlow = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return r.SlowBuffer(e)
    }
}, function(e, t) {
    "use strict";
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(26)
}, function(e, t, n) {
    "use strict";
    e.exports = n(120)
}, function(e, t, n) {
    (function(i) {
        "use strict";
        t = e.exports = n(121), t.Stream = n(37), t.Readable = t, t.Writable = n(72), t.Duplex = n(26), t.Transform = n(71), t.PassThrough = n(120), i.browser || "disable" !== i.env.READABLE_STREAM || (e.exports = n(37))
    }).call(t, n(41))
}, function(e, t, n) {
    "use strict";
    e.exports = n(71)
}, function(e, t, n) {
    "use strict";
    e.exports = n(72)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        s.default.request("showDialog", {
            type: "confirm",
            ok: "unpin",
            header: (0, u.toL10n)("confirmation"),
            content: (0, u.toL10n)("confirm-to-unpin-bookmark"),
            translated: !0,
            onOk: function() {
                BookmarksDatabase.remove(e.url)
            }
        })
    }

    function o(e) {
        var t = e.displayName.slice(0, 255);
        s.default.request("showDialog", {
            type: "prompt",
            ok: "ok",
            header: (0, u.toL10n)("rename"),
            content: (0, u.toL10n)("title"),
            initialValue: t,
            maxLength: 255,
            additionalContent: e.url,
            translated: !0,
            onOk: function(t) {
                e.displayName !== t && BookmarksDatabase.get(e.url).then(function(e) {
                    e.name = t, BookmarksDatabase.put(e)
                })
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.unpinBookmark = r, t.renameBookmark = o;
    var a = n(4),
        s = i(a),
        u = n(9)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        Customization: "customization"
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        switch (e.type) {
            default:
            case l.default.Folder:
            case l.default.MozApp:
                var n = e.manifest.icons;
                if (n) {
                    var i = e.mozApp && e.mozApp.origin;
                    o(n, {
                        origin: i,
                        preferredSize: 56
                    }).then(function(t) {
                        e.icon_url = t
                    }).catch(function(t) {
                        e.icon_url_hq && e.icon_url_hq !== c.app[112] ? e.icon_url = e.icon_url_hq : e.icon_url = c.app[56]
                    }).then(function() {
                        return t && t()
                    }), o(n, {
                        origin: i,
                        preferredSize: 112
                    }).then(function(t) {
                        e.icon_url_hq = t
                    }).catch(function(t) {
                        e.icon_url && e.icon_url !== c.app[56] ? e.icon_url_hq = e.icon_url : e.icon_url_hq = c.app[112]
                    }).then(function() {
                        return t && t()
                    })
                } else e.icon_url = c.app[56], e.icon_url_hq = c.app[112], t && t();
                break;
            case l.default.Bookmark:
                e.icon_url = c.web_shortcut[56], e.icon_url_hq = c.web_shortcut[112], e.favicon_url = c.favicon[48], t && t(), s(e.favicon).then(function(n) {
                    e.favicon_url = n, t && t()
                }).catch(function(e) {})
        }
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            preferredSize: 56
        };
        return e ? new Promise(function(n, i) {
            var r = t.origin,
                o = t.preferredSize,
                u = a(e, o),
                l = e[u],
                c = function() {
                    return /^https?:\/\//i.test(l)
                };
            s(function() {
                return /^data:/i.test(l)
            }() || c() ? l : "" + r + l).then(function(e) {
                return n(e)
            }).catch(function(e) {
                return i(e)
            })
        }) : Promise.reject(null)
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 56,
            n = Object.keys(e).sort(function(e, t) {
                return e - t
            });
        return n.filter(function(e) {
            return e >= t
        }).shift() || n.filter(function(e) {
            return e < t
        }).pop()
    }

    function s(e) {
        return new Promise(function(t, n) {
            var i = new Image;
            i.onload = function() {
                i = null, t(e)
            }, i.onerror = function() {
                i = null, n("The image is not accessible.")
            }, i.src = e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mountItemIcon = r, t.getIconUrl = o, t.findTheFittestIconSize = a, t.testImageAvailability = s;
    var u = n(29),
        l = i(u),
        c = {
            app: {
                56: "./style/images/default_app_56.png",
                112: "./style/images/default_app_112.png"
            },
            web_shortcut: {
                56: "./style/images/web_shortcut_56.png",
                112: "./style/images/web_shortcut_112.png"
            },
            favicon: {
                48: "./style/images/default_favicon_48.png"
            }
        }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = [{
        name: "Call Log",
        manifestURL: "app://communications.gaiamobile.org/manifest.webapp"
    }, {
        name: "Contact",
        manifestURL: "app://contact.gaiamobile.org/manifest.webapp"
    }, {
        name: "KaiOS-Store",
        origin: "app://kaios-plus.kaiostech.com"
    }, {
        name: "Assistant",
        manifestURL: "https://api.kaiostech.com/apps/manifest/OSlAbgrhLArfT7grf4_N"
    }, {
        name: "YouTube",
        manifestURL: "https://api.kaiostech.com/apps/manifest/6x6P4Ap7oCIzOW10hBpm"
    }, {
        name: "Maps",
        manifestURL: "https://www.google.com/maps/preview/pwa/kaios/manifest.webapp"
    }, {
        name: "Snake",
        manifestURL: "app://snake.gaiamobile.org/manifest.webapp"
    }, {
        name: "WhatsApp",
        manifestURL: "https://api.kaiostech.com/apps/manifest/ahLsl7Qj6mqlNCaEdKXv"
    }, {
        name: "Facebook",
        manifestURL: "https://api.kaiostech.com/apps/manifest/oRD8oeYmeYg4fLIwkQPH"
    }, {
        name: "Camera",
        manifestURL: "app://camera.gaiamobile.org/manifest.webapp"
    }, {
        name: "Gallery",
        manifestURL: "app://gallery.gaiamobile.org/manifest.webapp"
    }, {
        name: "Video",
        manifestURL: "app://video.gaiamobile.org/manifest.webapp"
    }, {
        name: "Messages",
        manifestURL: "app://sms.gaiamobile.org/manifest.webapp"
    }, {
        name: "Google Search",
        manifestURL: "https://api.kaiostech.com/apps/manifest/RUP-Kznhau9Id7UGc9ck"
    }, {
        name: "Browser",
        manifestURL: "app://search.gaiamobile.org/manifest.webapp"
    }, {
        name: "E-Mail",
        manifestURL: "app://email.gaiamobile.org/manifest.webapp"
    }, {
        name: "Clock",
        manifestURL: "app://clock.gaiamobile.org/manifest.webapp"
    }, {
        name: "Twitter",
        manifestURL: "https://mobile.twitter.com/kaios.webapp"
    }, {
        name: "Music",
        manifestURL: "app://music.gaiamobile.org/manifest.webapp"
    }, {
        name: "FM Radio",
        manifestURL: "app://fm.gaiamobile.org/manifest.webapp"
    }, {
        name: "Settings",
        manifestURL: "app://settings.gaiamobile.org/manifest.webapp"
    }, {
        name: "File Manager",
        manifestURL: "app://filemanager.gaiamobile.org/manifest.webapp"
    }, {
        name: "Calendar",
        manifestURL: "app://calendar.gaiamobile.org/manifest.webapp"
    }, {
        name: "Note",
        manifestURL: "app://notes.gaiamobile.org/manifest.webapp"
    }, {
        name: "Calculator",
        manifestURL: "app://calculator.gaiamobile.org/manifest.webapp"
    }, {
        name: "Recorder",
        manifestURL: "app://soundrecorder.gaiamobile.org/manifest.webapp"
    }, {
        name: "Unit Converter",
        manifestURL: "app://unitconverter.gaiamobile.org/manifest.webapp"
    }, {
        name: "stk",
        manifestURL: "app://stk.gaiamobile.org/manifest.webapp"
    }]
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = [{
        name: "WhatsApp",
        manifestURL: "https://api.kaiostech.com/apps/manifest/ahLsl7Qj6mqlNCaEdKXv"
    }, {
        name: "Facebook",
        manifestURL: "https://api.kaiostech.com/apps/manifest/oRD8oeYmeYg4fLIwkQPH"
    }, {
        name: "Assistant",
        manifestURL: "https://api.kaiostech.com/apps/manifest/OSlAbgrhLArfT7grf4_N"
    }, {
        name: "Maps",
        manifestURL: "https://www.google.com/maps/preview/pwa/kaios/manifest.webapp"
    }, {
        name: "YouTube",
        manifestURL: "https://api.kaiostech.com/apps/manifest/6x6P4Ap7oCIzOW10hBpm"
    }];
    t.chinaSideApps = [{
        name: "Calculator",
        origin: "app://calculator.gaiamobile.org"
    }, {
        name: "Messages",
        origin: "app://sms.gaiamobile.org"
    }, {
        name: "Settings",
        origin: "app://settings.gaiamobile.org"
    }, {
        name: "Calendar",
        origin: "app://calendar.gaiamobile.org"
    }, {
        name: "E-Mail",
        origin: "app://email.gaiamobile.org"
    }]
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        ShowFolder: "show-folder"
    }
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!e) throw new Error("The `" + t + "` field is required.")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.validateCustomizationRule = function(e) {
        n(e.type, "rule.type"), n(e.params, "rule.params")
    }, t.validateShowFolderRule = function(e) {
        n(e.params.folder, "rule.params.folder"), n(e.params.folder.name, "rule.params.folder.name"), n(e.params.folder.enabled, "rule.params.folder.enabled"), n(e.params.folder.manifest, "rule.params.folder.manifest"), n(e.params.folder.items, "rule.params.folder.items")
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(5),
        f = i(c),
        d = n(33),
        p = i(d),
        h = n(4),
        m = i(h),
        g = n(11),
        v = i(g),
        y = n(123),
        b = i(y),
        w = n(76),
        _ = n(30),
        k = function(e) {
            function t() {
                var e, n, i, a;
                r(this, t);
                for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                return n = i = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.name = "Folder", i.defaultState = {
                    manifestURL: null,
                    folder: null,
                    itemsToRender: [],
                    focusIndex: 0
                }, i.state = i.defaultState, i.updateFolder = function(e) {
                    var t = e.manifestURL,
                        n = (0, _.findFolderByManifestURL)(AppStore.apps, t),
                        r = n.items.map(function(e) {
                            return (0, _.findItemByManifestURL)(AppStore.apps, e.manifestURL)
                        }).filter(Boolean).map(function(e) {
                            return e.inlineStyle = {}, e
                        });
                    i.setState({
                        manifestURL: t,
                        folder: n,
                        itemsToRender: r
                    })
                }, i.markAsFocused = function() {
                    i.needsToBeFocused = !0
                }, i.exit = function() {
                    i.needsToBeFocused = !1, m.default.request("closeSheet", "folder"), i.setState({
                        focusIndex: 0
                    })
                }, i.updateSoftKeys = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        center: "select"
                    };
                    v.default.register(e, i.element)
                }, i.onKeyDown = function(e) {
                    switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "ArrowUp":
                            e.preventDefault(), i.setState(function(e) {
                                return {
                                    focusIndex: 0 === e.focusIndex ? e.itemsToRender.length - 1 : e.focusIndex - 1
                                }
                            });
                            break;
                        case "ArrowDown":
                            e.preventDefault(), i.setState(function(e) {
                                return {
                                    focusIndex: e.focusIndex === e.itemsToRender.length - 1 ? 0 : e.focusIndex + 1
                                }
                            });
                            break;
                        case "Enter":
                            e.target.click();
                            break;
                        case "EndCall":
                        case "BrowserBack":
                        case "Backspace":
                            i.exit();
                            break;
                        case "Call":
                        case "SoftRight":
                    }
                }, a = n, o(i, a)
            }
            return a(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    m.default.register("updateFolder", this)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    m.default.unregister("updateFolder", this)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateSoftKeys();
                    var e = this.element.querySelectorAll(".app"),
                        t = e[this.state.focusIndex];
                    if (this.needsToBeFocused && t) {
                        t.focus();
                        var n = this.listContainer.getBoundingClientRect(),
                            i = t.getBoundingClientRect();
                        i.top <= n.top ? t.scrollIntoView(!0) : i.bottom >= n.bottom && t.scrollIntoView(!1)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return l.default.createElement("div", {
                        className: "appList folder",
                        "data-view-mode": "list",
                        tabIndex: "-1",
                        onKeyDown: this.onKeyDown,
                        ref: function(t) {
                            e.element = t
                        }
                    }, l.default.createElement("header", null, l.default.createElement("h1", null, this.state.folder && (0, w.unescapeNumericHTMLEntities)(this.state.folder.displayName))), l.default.createElement("div", {
                        className: "appList__container",
                        ref: function(t) {
                            e.listContainer = t
                        }
                    }, l.default.createElement("div", {
                        className: "app-wall"
                    }, this.state.itemsToRender.map(function(e) {
                        return l.default.createElement(b.default, {
                            key: e.manifestURL,
                            item: e
                        })
                    }))))
                }
            }]), t
        }(f.default);
    t.default = (0, p.default)(k, "immediate", "immediate")
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(5),
        f = i(c),
        d = n(33),
        p = i(d),
        h = n(11),
        m = i(h),
        g = n(70),
        v = i(g),
        y = n(4),
        b = i(y),
        w = n(133),
        _ = i(w);
    n(270);
    var k = ["Contract WAP", "PAYG WAP"],
        S = [{
            mccmnc: "23402",
            carrier: "Contract WAP",
            apn: {
                data: "mobile.o2.co.uk",
                mms: "wap.o2.co.uk"
            }
        }, {
            mccmnc: "23402",
            carrier: "PAYG WAP",
            apn: {
                data: "mobile.o2.co.uk",
                mms: "payandgo.o2.co.uk"
            }
        }, {
            mccmnc: "23410",
            carrier: "Contract WAP",
            apn: {
                data: "mobile.o2.co.uk",
                mms: "mobile.o2.co.uk"
            }
        }, {
            mccmnc: "23410",
            carrier: "PAYG WAP",
            apn: {
                data: "payandgo.o2.co.uk",
                mms: "payandgo.o2.co.uk"
            }
        }, {
            mccmnc: "23411",
            carrier: "Contract WAP",
            apn: {
                data: "mobile.o2.co.uk",
                mms: "wap.o2.co.uk"
            }
        }, {
            mccmnc: "23411",
            carrier: "PAYG WAP",
            apn: {
                data: "mobile.o2.co.uk",
                mms: "payandgo.o2.co.uk"
            }
        }, {
            mccmnc: "23415",
            carrier: "Contract WAP",
            apn: {
                data: "wap.vodafone.co.uk",
                mms: "wap.vodafone.co.uk"
            }
        }, {
            mccmnc: "23415",
            carrier: "PAYG WAP",
            apn: {
                data: "pp.vodafone.co.uk",
                mms: "pp.vodafone.co.uk"
            }
        }, {
            mccmnc: "23415",
            carrier: "Contract WAP",
            apn: {
                data: "talkmobile.co.uk",
                mms: "talkmobile.co.uk"
            }
        }, {
            mccmnc: "23415",
            carrier: "PAYG WAP",
            apn: {
                data: "payg.talkmobile.co.uk",
                mms: "payg.talkmobile.co.uk"
            }
        }, {
            mccmnc: "42003",
            carrier: "Contract WAP",
            apn: {
                data: "web1",
                mms: "mms1"
            }
        }, {
            mccmnc: "42003",
            carrier: "PAYG WAP",
            apn: {
                data: "web2",
                mms: "mms2"
            }
        }, {
            mccmnc: "52505",
            carrier: "Contract WAP",
            apn: {
                data: "shwap",
                mms: "shmms"
            }
        }, {
            mccmnc: "52505",
            carrier: "PAYG WAP",
            apn: {
                data: "shppd",
                mms: "shppd"
            }
        }],
        E = [{
            l10nId: "apnConfigPostpay",
            value: k[0]
        }, {
            l10nId: "apnConfigPrepay",
            value: k[1]
        }];
    Array.prototype.unique = function() {
        for (var e = this.concat(), t = 0; t < e.length; ++t)
            for (var n = t + 1; n < e.length; ++n) e[t].apn === e[n].apn && e[t].type.toString() == e[n].type.toString() && e.splice(n--, 1);
        return e
    };
    var O = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "APNSelection", n.FOCUS_SELECTOR = ".list-item", n.state = {
                whichCard: 0
            }, n
        }
        return a(t, e), s(t, [{
            key: "componentDidMount",
            value: function() {
                this.navigator = new v.default(this.FOCUS_SELECTOR, this.element), this.updateSoftkeys(), b.default.register("setOperatorInfo", this)
            }
        }, {
            key: "updateSoftkeys",
            value: function() {
                m.default.register({
                    center: "select"
                }, this.element)
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                switch (e.key) {
                    case "Enter":
                        var t = document.activeElement.dataset.value;
                        dump("apn_selection value = " + t + ", id = " + this.id);
                        for (var n = [], i = !1, r = 0; r < S.length; r++) {
                            var o = S[r];
                            if (this.mccmnc === o.mccmnc && t == o.carrier)
                                for (var a = 0; a < this.selectionApnList.length; a++) o.apn.data != this.selectionApnList[a].apn && o.apn.mms != this.selectionApnList[a].apn || (n.push(this.selectionApnList[a]), i = !0);
                            if (1 == i) break
                        }
                        this.operatorVariantHandlers.applySettings(this.selectionApnList, n);
                        var s = navigator.mozSettings.createLock(),
                            u = {};
                        u["apn_default_set_" + this.id + "_" + this.operator.iccid] = "true", s.set(u), this.hide(), 0 == this.id && _.default.start();
                        break;
                    case "Backspace":
                        e.preventDefault(), b.default.request("back")
                }
            }
        }, {
            key: "hide",
            value: function() {
                b.default.request("closeSheet", "apnselection"), this._lock && this._lock.unlock && (dump("apn_selection unlock the _lock"), this._lock.unlock(), this._lock = null)
            }
        }, {
            key: "setOperatorInfo",
            value: function(e, t, n, i, r) {
                dump("apn_selection.js setOperatorInfo id = " + e + " operator = " + t.mccmnc), this._lock = navigator.requestWakeLock("screen"), this.id = e, this.setState({
                    whichCard: e
                }), this.operator = t, this.mccmnc = t.mccmnc, this.operatorVariantHandlers = r, this.selectionApnList = n.concat(i).unique(), dump("apn_selection.js setOperatorInfo defaultlen = " + n.length + " mmslen = " + i.length + " selectionApnList len = " + this.selectionApnList.length)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = [];
                return E.forEach(function(e) {
                    var n = e.value === k[0];
                    t.push(l.default.createElement("li", {
                        tabIndex: "-1",
                        className: "list-item",
                        "data-value": e.value
                    }, l.default.createElement("p", {
                        "data-l10n-id": e.l10nId
                    }), l.default.createElement("div", {
                        className: "apnselection-key"
                    }, l.default.createElement("i", {
                        className: "icon control",
                        "data-icon": n ? "radio-on" : "radio-off",
                        "aria-hidden": "true"
                    }), l.default.createElement("input", {
                        type: "radio",
                        checked: n,
                        className: "hidden"
                    }))))
                }), l.default.createElement("section", {
                    role: "region",
                    tabIndex: "-1",
                    onKeyDown: function(t) {
                        e.onKeyDown(t)
                    },
                    ref: function(t) {
                        e.element = t
                    }
                }, l.default.createElement("header", {
                    class: "apnheader"
                }, l.default.createElement("h1", {
                    "data-l10n-id": 0 == this.state.whichCard ? "apn-sim1" : "apn-sim2"
                })), l.default.createElement("ul", {
                    id: "apnconfig-list"
                }, t), l.default.createElement("p", {
                    "data-l10n-id": "apn-defaultconfig-message"
                }, "Set which type of apn to show"))
            }
        }]), t
    }(f.default);
    t.default = (0, p.default)(O, "immediate", "immediate")
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        c = n(3),
        f = r(c),
        d = n(5),
        p = r(d),
        h = n(33),
        m = r(h),
        g = n(4),
        v = r(g),
        y = n(11),
        b = r(y),
        w = n(86),
        _ = r(w),
        k = n(75),
        S = r(k),
        E = n(123),
        O = r(E),
        I = n(124),
        A = r(I),
        L = n(29),
        P = r(L),
        T = n(126),
        C = r(T),
        M = n(9),
        R = i(M),
        j = n(77),
        x = r(j),
        N = n(130),
        D = n(233),
        U = n(125),
        z = n(127);
    n(271);
    var B = function(e) {
        function t(e) {
            a(this, t);
            var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "AppList", n.navItemThrottleTime = 60, n.menuOptions = [{
                id: "rename",
                callback: function() {
                    n.element.focus(), n.focusIfPossible(), (0, D.renameBookmark)(n.state.apps[n.focusIndex])
                }
            }, {
                id: "move",
                tags: ["grid", "list"],
                callback: n.enterReorderMode.bind(n)
            }, {
                id: "uninstall",
                callback: function() {
                    n.element.focus(), n.focusIfPossible(), (0, U.uninstallMozApp)(n.state.apps[n.focusIndex].mozApp)
                }
            }, {
                id: "unpin",
                callback: function() {
                    n.element.focus(), n.focusIfPossible(), (0, D.unpinBookmark)(n.state.apps[n.focusIndex])
                }
            }, {
                id: "grid-view",
                tags: ["list", "single"],
                callback: n.switchViewMode.bind(n, "grid")
            }, {
                id: "list-view",
                tags: ["grid", "single"],
                callback: n.switchViewMode.bind(n, "list")
            }, {
                id: "single-view",
                tags: ["grid", "list"],
                callback: n.switchViewMode.bind(n, "single")
            }], n.initFocus = [0, 0], n.state = {
                col: n.props.col,
                apps: [],
                viewMode: n.props.viewMode,
                focus: n.initFocus
            }, n.gridsPerPage = n.props.col * n.props.row, n.onKeyDown = n.onKeyDown.bind(n), n.onFocus = n.onFocus.bind(n), n.currentPage = 0, window.addEventListener("visibilitychange", function() {
                var e = document.activeElement,
                    t = document.querySelector(".appList__container"),
                    i = t.getBoundingClientRect().top,
                    r = t.getBoundingClientRect().bottom;
                (e.offsetTop - t.scrollTop > r || e.offsetTop - t.scrollTop < i) && !document.hidden && n.scrollIntoViewIfPossible(!0), document.hidden && n.appElements && [].concat(o(n.appElements)).includes(e) && (n.isStickyApp = !0, e && e.classList.add("is-focus-app"))
            }), R.asyncLocalStorage.getItem("app-view-mode").then(function(e) {
                n.switchViewMode(e || n.state.viewMode)
            }), (0, z.restoreUserSavedAppsOrder)(), window.navigator.mozSettings.addObserver("accessibilitymode.enabled", function(e) {
                e.settingValue ? n.switchViewMode("list") : n.switchViewMode("grid")
            }), n
        }
        return u(t, e), l(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                AppStore.on("change", (0, _.default)(this.updateApps.bind(this), 1e3)), v.default.register("show", this), v.default.register("hide", this), S.default.register(this.element), this.element.addEventListener("animationstart", function() {
                    e.isAnimationEnd = !1
                }), this.element.addEventListener("animationend", function() {
                    e.isAnimationEnd = !0
                })
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.focusIfPossible(), this.updateSoftKeys(), this.scrollIntoViewIfPossible(), this.updateMarquee()
            }
        }, {
            key: "updateMarquee",
            value: function() {
                var e = this.element.getElementsByClassName("app")[this.focusIndex];
                if ("list" === this.state.viewMode && !this.state.reorderMode && e) {
                    var t = {
                        item: this.state.apps[this.focusIndex],
                        viewMode: this.state.viewMode
                    };
                    A.default.showMarquee(t, e.querySelector(".app__name"))
                }
            }
        }, {
            key: "scrollIntoViewIfPossible",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                switch (this.state.viewMode) {
                    case "grid":
                        this.goPage(this.getPage(this.state.reorderMode ? this.reorder.focus[0] : this.state.focus[0]), e);
                        break;
                    case "list":
                        this.scrollIntoViewForListView();
                        break;
                    case "single":
                        document.activeElement.scrollIntoView(!1)
                }
            }
        }, {
            key: "scrollIntoViewForListView",
            value: function() {
                var e = this._container,
                    t = e.getBoundingClientRect(),
                    n = t.top,
                    i = t.height,
                    r = document.activeElement,
                    o = r.getBoundingClientRect(),
                    a = o.top,
                    s = o.height,
                    u = e.scrollTop,
                    l = null;
                a < n ? l = u - (n - a) : a - n > i - s && (l = u + (a - n - (i - s))), null !== l && e.scrollTo(0, l)
            }
        }, {
            key: "getPageCount",
            value: function() {
                return Math.ceil(this.state.apps.length / this.gridsPerPage)
            }
        }, {
            key: "getPage",
            value: function(e) {
                return Math.floor(e / this.props.row)
            }
        }, {
            key: "goPage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentPage,
                    t = arguments[1];
                !this.appElements || this.getPageCount() <= 1 || (this.currentPage !== e || t) && (void 0 === this.pageOffsetY && (this.pageOffsetY = this.appElements[this.gridsPerPage].offsetTop - this.appElements[0].offsetTop), this._container.scrollTop = this.pageOffsetY * e, this.currentPage = e)
            }
        }, {
            key: "updateApps",
            value: function() {
                var e = this,
                    t = this.element.contains(document.activeElement),
                    n = AppStore.apps.filter(function(e) {
                        return !(0, C.default)(e)
                    }).map(z.calcAppsOrder).map(z.applyAppsOrder).sort(function(e, t) {
                        return e.order - t.order
                    }).map(function(t, n) {
                        return t.inlineStyle = {
                            order: e.calculateCssOrder(n)
                        }, t.position = n, t
                    });
                this.setState(function() {
                    return {
                        apps: n
                    }
                }, function() {
                    t && (e.focus(), e.focusIfPossible())
                })
            }
        }, {
            key: "updateSoftKeys",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    center: "select",
                    right: "options"
                };
                this.state.reorderMode && (e = {
                    center: "set",
                    right: "",
                    left: "cancel"
                }), b.default.register(e, this.element)
            }
        }, {
            key: "onFocus",
            value: function() {
                return this.isStickyApp && (this.isStickyApp = !1, document.querySelector(".is-focus-app").classList.remove("is-focus-app")), this.element === document.activeElement ? (this.focusIfPossible(), this.scrollIntoViewIfPossible(), this.updateSoftKeys(), void this.updateMarquee()) : (this.element.contains(document.activeElement) || this.element.focus(), void this.updateSoftKeys())
            }
        }, {
            key: "focusIfPossible",
            value: function() {
                if (this.element.contains(document.activeElement)) {
                    var e = this.getFocusGridElement();
                    e ? e.focus() : this.setState({
                        focus: this.initFocus
                    })
                }
            }
        }, {
            key: "getFocusGridElement",
            value: function() {
                var e = R.rowColToIndex(this.state.focus, this.state.col),
                    t = this.state.apps.length - 1;
                return e > t && (e = t, this.state.focus = R.indexToRowCol(e, this.state.col)), this.focusIndex = e, this.appElements || (this.appElements = this.element.getElementsByClassName("app")), this.appElements[e]
            }
        }, {
            key: "enterReorderMode",
            value: function() {
                this.setState({
                    reorderMode: !0
                }), this.reorder = {
                    target: this.element.querySelectorAll(".app-tile")[this.focusIndex],
                    focus: this.state.focus,
                    app: this.state.apps[this.focusIndex],
                    indexFrom: this.focusIndex,
                    indexTo: this.focusIndex
                }
            }
        }, {
            key: "exitReorderMode",
            value: function(e) {
                var t = this;
                this.setState(function(n) {
                    if (n.reorderMode = !1, e) n.focus = [].concat(o(t.reorder.focus)), n.apps = n.apps.sort(function(e, t) {
                        return e.inlineStyle.order - t.inlineStyle.order
                    }).map(function(e, n) {
                        return e.inlineStyle = {
                            order: t.calculateCssOrder(n)
                        }, e
                    });
                    else {
                        var i = t.focusIndex;
                        n.apps[i].inlineStyle.order = t.calculateCssOrder(i)
                    }
                    return n
                }, function() {
                    t.reorder = {}
                })
            }
        }, {
            key: "saveCurrentAppsOrder",
            value: function() {
                var e = [].concat(o(this.state.apps)).sort(function(e, t) {
                    return e.inlineStyle.order - t.inlineStyle.order
                }).map(function(e) {
                    return {
                        manifestURL: e.manifestURL,
                        name: e.manifest.name
                    }
                });
                (0, z.saveAppsOrder)(e)
            }
        }, {
            key: "handleMoveGrid",
            value: function(e) {
                var t = this,
                    n = R.rowColToIndex(e, this.state.col),
                    i = this.focusIndex > n ? -1 : 1;
                this.reorder.focus = e, this.reorder.indexTo = n, this.setState(function(e) {
                    return e.apps[t.focusIndex].inlineStyle.order = t.calculateCssOrder(n, i), e
                })
            }
        }, {
            key: "switchViewMode",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "grid",
                    t = "grid" === e ? this.props.col : 1,
                    n = R.rowColToIndex(this.state.focus, this.state.col);
                this.currentPage = null, this.setState({
                    focus: R.indexToRowCol(n, t),
                    col: t,
                    viewMode: e
                }), R.asyncLocalStorage.setItem("app-view-mode", e)
            }
        }, {
            key: "navItem",
            value: function(e) {
                var t = this;
                this.navItemTimer || (this.navItemTimer = setTimeout(function() {
                    window.clearTimeout(t.navItemTimer), t.navItemTimer = null
                }, this.navItemThrottleTime), this.state.reorderMode ? this.handleMoveGrid(e) : this.setState({
                    focus: e
                }))
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                var t = this,
                    n = this.state.reorderMode,
                    i = void 0,
                    r = e.key;
                switch (r) {
                    case "ArrowLeft":
                    case "ArrowRight":
                        if ("grid" !== this.state.viewMode) return;
                        R.isRtl() && (r = "ArrowLeft" === r ? "ArrowRight" : "ArrowLeft");
                    case "ArrowUp":
                    case "ArrowDown":
                        if (!this.isAnimationEnd) return void e.preventDefault();
                        var o = n ? this.reorder.focus || this.state.focus : this.state.focus;
                        i = R.navGrid({
                            currentRowCol: o,
                            dir: r,
                            col: this.state.col,
                            total: this.state.apps.length
                        }), this.navItem(i);
                        break;
                    case "Call":
                        x.default.launch("manifestURL", "app://communications.gaiamobile.org/manifest.webapp");
                        break;
                    case "SoftRight":
                        if (!n) {
                            var a = this.state.apps[this.focusIndex],
                                s = this.menuOptions.filter(function(e) {
                                    switch (e.id) {
                                        case "uninstall":
                                            return P.default.MozApp === a.type && a.mozApp.removable;
                                        case "unpin":
                                        case "rename":
                                            return P.default.Bookmark === a.type;
                                        default:
                                            return !!e.tags && e.tags.includes(t.state.viewMode)
                                    }
                                });
                            v.default.request("showOptionMenu", {
                                options: s
                            })
                        }
                        break;
                    case "SoftLeft":
                        n && this.exitReorderMode();
                        break;
                    case "Enter":
                        n ? (this.saveCurrentAppsOrder(), N.eventLogger.log({
                            type: N.EVENT_TYPES.APP_POSITION,
                            starting_position: this.reorder.indexFrom,
                            end_position: this.reorder.indexTo,
                            app_id: this.reorder.app.manifestURL,
                            app_version: this.reorder.app.manifest.version
                        }), this.exitReorderMode(!0)) : e.target.click();
                        break;
                    case "EndCall":
                    case "BrowserBack":
                    case "Backspace":
                        n ? this.exitReorderMode() : (this.setState({
                            focus: this.initFocus
                        }), v.default.request("closeSheet", "appList"))
                }
                i && (e.stopPropagation(), e.preventDefault())
            }
        }, {
            key: "renderPagination",
            value: function() {
                var e = void 0,
                    t = this.getPage(this.state.reorderMode ? this.reorder.focus[0] : this.state.focus[0]),
                    n = this.getPageCount();
                if (n > 1) {
                    var i = Array(n).fill().map(function(e, n) {
                        var i = n === t ? "page-indicator active" : "page-indicator";
                        return f.default.createElement("div", {
                            key: "page-indicator--" + n,
                            className: i
                        })
                    });
                    e = f.default.createElement("div", {
                        className: "pagination"
                    }, i)
                }
                return e
            }
        }, {
            key: "calculateCssOrder",
            value: function(e) {
                return 1e3 * (e + 1 + .5 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0))
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = "grid" === this.state.viewMode ? this.renderPagination() : null,
                    n = ["appList", this.state.reorderMode ? "is-reordering" : ""].filter(Boolean).join(" ");
                return f.default.createElement("div", {
                    className: n,
                    "data-view-mode": this.state.viewMode,
                    tabIndex: "-1",
                    onKeyDown: this.onKeyDown,
                    onFocus: this.onFocus,
                    ref: function(t) {
                        e.element = t
                    }
                }, t, f.default.createElement("h1", {
                    className: "readout-only",
                    id: "all-apps",
                    "data-l10n-id": "all-apps"
                }), f.default.createElement("div", {
                    className: "appList__container",
                    role: "heading",
                    "aria-labelledby": "all-apps",
                    ref: function(t) {
                        return e._container = t
                    }
                }, f.default.createElement("div", {
                    className: "app-wall"
                }, this.state.apps.map(function(e) {
                    return f.default.createElement(O.default, {
                        key: e.manifestURL,
                        item: e
                    })
                }))))
            }
        }]), t
    }(p.default);
    B.defaultProps = {
        viewMode: "grid",
        col: 3,
        row: 3
    }, B.propTypes = {
        viewMode: f.default.PropTypes.string,
        col: f.default.PropTypes.number,
        row: f.default.PropTypes.number
    }, t.default = (0, m.default)(B, "immediate", "immediate")
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        c = n(17),
        f = r(c),
        d = n(16),
        p = r(d),
        h = n(9),
        m = i(h),
        g = n(127),
        v = n(235),
        y = n(38),
        b = i(y),
        w = n(30),
        _ = i(w),
        k = n(29),
        S = r(k),
        E = n(128),
        O = r(E),
        I = n(130),
        A = {
            stkEnabled: !1,
            airplaneModeEnabled: !1
        },
        L = function(e) {
            function t() {
                o(this, t);
                var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.initialized = !1, e.apps = [], e.flags = A, e.browser = null, e.customApps = null, e.initialize = function() {
                    if (!e.initialized) {
                        e.initialized = !0, e.generateAllItems();
                        var t = navigator.mozApps.mgmt;
                        t.addEventListener("update", e.handlers.appUpdate), t.addEventListener("install", e.handlers.appInstall), t.addEventListener("uninstall", e.handlers.appUninstall), BookmarksDatabase.addEventListener("added", e.handlers.bookmarkAdded), BookmarksDatabase.addEventListener("updated", e.handlers.bookmarkUpdated), BookmarksDatabase.addEventListener("removed", e.handlers.bookmarkRemoved), e.customization = new O.default, e.customization.on("updated", e.handlers.customizationUpdated), e.customization.mount(), p.default.addObserver("icc.applications", e.handlers.iccApps), p.default.addObserver("airplaneMode.status", e.handlers.airplaneModeToggled), p.default.addObserver("airplaneMode.status", e.handlers.airplaneModeToggled), p.default.addObserver("custom.launcher.apps", e.handlers.customFIHApps), e.customApps = localStorage.getItem("custom.launcher.apps"), e.Disableapps()
                    }
                }, e.handlers = {
                    windowLocalized: function() {
                        e.generateAllItems()
                    },
                    appUpdate: function(t) {
                        var n = t.application;
                        e.addItem(S.default.MozApp, {
                            mozApp: n
                        })
                    },
                    appInstall: function(t) {
                        var n = t.application;
                        if ("installed" === n.installState) {
                            e.addItem(S.default.MozApp, {
                                mozApp: n
                            }).forEach(function(e) {
                                I.eventLogger.log({
                                    type: I.EVENT_TYPES.APP_POSITION,
                                    app_id: e.manifestURL,
                                    app_version: e.manifest && e.manifest.version,
                                    starting_position: -1,
                                    end_position: e.position
                                })
                            })
                        } else n.ondownloadapplied = function(t) {
                            n.ondownloadapplied = null, n.ondownloaderror = null, e.handlers.appInstall(t)
                        }, n.ondownloaderror = function() {
                            n.ondownloadapplied = null, n.ondownloaderror = null
                        }
                    },
                    appUninstall: function(t) {
                        var n = t.application,
                            i = e.removeItemByManifestURL(n.manifestURL);
                        (0, g.removeItemFromAppsOrder)(n.manifestURL), i && I.eventLogger.log({
                            type: I.EVENT_TYPES.APP_POSITION,
                            app_id: i.manifestURL,
                            app_version: i.manifest && i.manifest.version,
                            starting_position: i.position,
                            end_position: -1
                        })
                    },
                    bookmarkAdded: function(t) {
                        var n = t.target;
                        e.addItem(S.default.Bookmark, {
                            bookmark: n
                        }).forEach(function(e) {
                            I.eventLogger.log({
                                type: I.EVENT_TYPES.APP_POSITION,
                                app_id: e.manifestURL,
                                app_version: null,
                                starting_position: -1,
                                end_position: e.position
                            })
                        })
                    },
                    bookmarkUpdated: function(t) {
                        var n = t.target;
                        e.addItem(S.default.Bookmark, {
                            bookmark: n
                        })
                    },
                    bookmarkRemoved: function(t) {
                        var n = t.target.id,
                            i = e.removeItemByManifestURL(n);
                        (0, g.removeItemFromAppsOrder)(n), i && I.eventLogger.log({
                            type: I.EVENT_TYPES.APP_POSITION,
                            app_id: i.manifestURL,
                            app_version: null,
                            starting_position: i.position,
                            end_position: -1
                        })
                    },
                    iccApps: function(t) {
                        try {
                            var n = JSON.parse(t);
                            e.flags.stkEnabled = n && "object" === ("undefined" == typeof n ? "undefined" : u(n)) && Object.keys(n).length > 0, e.notifyChange()
                        } catch (i) {}
                    },
                    airplaneModeToggled: function(t) {
                        switch (t) {
                            case "enabled":
                                e.flags.airplaneModeEnabled = !0, e.notifyChange();
                                break;
                            case "disabled":
                                e.flags.airplaneModeEnabled = !1, e.notifyChange()
                        }
                    },
                    customFIHApps: function(t) {
                        e.customApps = t, localStorage.setItem("custom.launcher.apps", t), e.notifyChange(), e.Disableapps()
                    },
                    customizationUpdated: function() {
                        Promise.resolve().then(function() {
                            return e.apps.filter(function(e) {
                                return O.default.isCustomizedItem(e)
                            }).forEach(function(t) {
                                return e.removeItemByManifestURL(t.manifestURL)
                            }), Promise.resolve()
                        }).then(function() {
                            e.customization.getCustomFolders().forEach(function(t) {
                                return e.addItem(S.default.Folder, {
                                    folder: t
                                })
                            }), e.notifyChange()
                        })
                    }
                }, e.notifyChange = function() {
                    return e.emit("change")
                }, window.addEventListener("localized", e.handlers.windowLocalized), e.initialized || e.initialize(), e
            }
            return s(t, e), l(t, [{
                key: "reset",
                value: function() {
                    this.apps = [], this.flags = A, window.removeEventListener("localized", this.handlers.windowLocalized), navigator.mozApps.mgmt && (navigator.mozApps.mgmt.removeEventListener("update", this.handlers.appUpdate), navigator.mozApps.mgmt.removeEventListener("install", this.handlers.appInstall), navigator.mozApps.mgmt.removeEventListener("uninstall", this.handlers.appUninstall)), BookmarksDatabase && (BookmarksDatabase.removeEventListener("added", this.handlers.bookmarkAdded), BookmarksDatabase.removeEventListener("updated", this.handlers.bookmarkUpdated), BookmarksDatabase.removeEventListener("removed", this.handlers.bookmarkRemoved)), this.customization && (this.customization.offAll("updated"), this.customization.unmount()), p.default.removeObserver("icc.applications", this.handlers.iccApps), p.default.removeObserver("airplaneMode.status", this.handlers.airplaneModeToggled), p.default.removeObserver("custom.launcher.apps", this.handlers.customFIHApps)
                }
            }, {
                key: "pushToItemList",
                value: function(e) {
                    var t = _.findItemIndexByManifestURL(this.apps, e.manifestURL);
                    t >= 0 ? this.apps[t] = e : this.apps.push(e)
                }
            }, {
                key: "Disableapps",
                value: function() {
                    var e = this,
                        t = ["Assistant", "Maps", "Google Search", "YouTube", "YouTubeApp", "Twitter", "Facebook", "WhatsApp"];
                    this.apps.forEach(function(n) {
                        t.includes(n.manifest.name) && (dump("Launcher app_store disable app : " + n.manifest.name + ", " + ("0" != e.customApps)), navigator.mozApps.mgmt.setEnabled(n.mozApp, "0" != e.customApps))
                    })
                }
            }, {
                key: "launchBrowser",
                value: function() {
                    null != this.browser ? this.browser.mozApp.launch(this.browser.entry) : this.apps.some(function(e) {
                        var t = "Browser" === e.manifest.name;
                        return t && e.mozApp.launch(e.entry), t
                    })
                }
            }, {
                key: "queryApp",
                value: function(e, t) {
                    return this.apps.find(function(n) {
                        return t === m.getDeepProp(n, e)
                    })
                }
            }, {
                key: "generateAllItems",
                value: function() {
                    var e = this;
                    return Promise.resolve().then(function() {
                        return e.generateAllMozAppItems()
                    }).then(function() {
                        return e.generateAllBookmarkItems()
                    }).then(function() {
                        return e.generateAllFolderItems()
                    }).then(function() {
                        e.notifyChange()
                    })
                }
            }, {
                key: "generateAllMozAppItems",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        var i = navigator.mozApps.mgmt.getAll();
                        i.onsuccess = function(n) {
                            n.target.result.forEach(function(t) {
                                return e.addItem(S.default.MozApp, {
                                    mozApp: t
                                })
                            }), t()
                        }, i.onerror = function(e) {
                            n()
                        }
                    })
                }
            }, {
                key: "generateAllBookmarkItems",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        BookmarksDatabase.getAll().then(function(n) {
                            Object.keys(n).map(function(e) {
                                return n[e]
                            }).forEach(function(t) {
                                return e.addItem(S.default.Bookmark, {
                                    bookmark: t
                                })
                            }), t()
                        })
                    })
                }
            }, {
                key: "generateAllFolderItems",
                value: function() {
                    return new Promise(function(e) {
                        e()
                    })
                }
            }, {
                key: "addItem",
                value: function(e, t) {
                    var n = this,
                        i = b.create(e, t);
                    return i.forEach(function(t) {
                        n.pushToItemList(t), (0, v.mountItemIcon)(t, function() {
                            n.notifyChange()
                        }), null == n.browser && "mozapp" === e && "Browser" === t.manifest.name && (n.browser = t)
                    }), this.notifyChange(), i
                }
            }, {
                key: "removeItemByManifestURL",
                value: function(e) {
                    var t = _.findItemIndexByManifestURL(this.apps, e);
                    if (t >= 0) {
                        var n = this.apps.splice(t, 1).shift();
                        return this.notifyChange(), n
                    }
                    return null
                }
            }]), t
        }(f.default);
    t.default = L
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (u) {
                    r = !0, o = u
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        f = n(3),
        d = i(f),
        p = n(5),
        h = i(p),
        m = n(4),
        g = i(m),
        v = n(16),
        y = i(v);
    n(272), n(273);
    var b = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "Clock", n.initState = {
                datetime: "",
                timeForReadout: "",
                date: "",
                weekday: "",
                h1: "0",
                h2: "0",
                m1: "0",
                m2: "0",
                ampm: "",
                visible: "true" === localStorage.getItem("home.clock.visible")
            }, n.state = l({}, n.initState), navigator.mozL10n.ready(function() {
                null === navigator.mozHour12 && (navigator.mozHour12 = "true" === localStorage.getItem("locale.hour12")), n.refresh()
            }), n.digiKey = 0, n.digiIcons = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bold",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                return n.digiKey += 1, [].concat(r(Array(t))).map(function(t, i) {
                    return d.default.createElement("i", {
                        key: "key_" + i + "_" + e + "_" + n.digiKey,
                        "data-icon": "numeric_" + i + "_" + e,
                        "aria-hidden": "true"
                    })
                })
            }, n.iconsHtml = {
                bold: n.digiIcons("rounded_semibold"),
                light: n.digiIcons("light")
            }, n
        }
        return s(t, e), c(t, [{
            key: "focus",
            value: function() {}
        }, {
            key: "componentWillMount",
            value: function() {
                y.default.addObserver("home.clock.visible", this), y.default.addObserver("locale.hour12", this)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                g.default.register("start", this), g.default.register("stop", this), g.default.register("forcedRefresh", this), window.addEventListener("moztimechange", this)
            }
        }, {
            key: "_handle_moztimechange",
            value: function() {
                this.stop(), this.start()
            }
        }, {
            key: "_handle_timeformatchange",
            value: function() {
                this.refresh()
            }
        }, {
            key: "_handle_visibilitychange",
            value: function() {
                "visible" === document.visibilityState ? this.start() : this.stop()
            }
        }, {
            key: "start",
            value: function() {
                var e = this,
                    t = new Date;
                this.refresh(), this.timer = setTimeout(function() {
                    e.start()
                }, 1e3 * (60 - t.getSeconds()))
            }
        }, {
            key: "refresh",
            value: function(e) {
                var t = this;
                (this.state.visible || e) && navigator.mozL10n.ready(function() {
                    var e = new Date,
                        n = navigator.mozL10n.language.code,
                        i = navigator.mozHour12 ? "%I" : "%H",
                        r = new navigator.mozL10n.DateTimeFormat,
                        o = r.localeFormat(e, "%p | " + i + " | %M"),
                        a = o.split(" | "),
                        s = u(a, 3),
                        l = s[0],
                        c = s[1],
                        f = s[2];
                    c = ("00" + c).slice(-2).split(""), f = f.split(""), t.setState({
                        datetime: r.localeFormat(e, "%Y-%m-%dT%T"),
                        timeForReadout: r.localeFormat(e, "homescreen %I:%M " + (navigator.mozHour12 ? "%p" : "") + ", %A %B %e"),
                        date: new Intl.DateTimeFormat(n, {
                            month: "short",
                            day: "numeric"
                        }).format(e),
                        weekday: new Intl.DateTimeFormat(n, {
                            weekday: "long"
                        }).format(e),
                        h1: c[0],
                        h2: c[1],
                        m1: f[0],
                        m2: f[1],
                        ampm: l
                    })
                })
            }
        }, {
            key: "forcedRefresh",
            value: function() {
                this.refresh(!0)
            }
        }, {
            key: "_observe_locale.hour12",
            value: function(e) {
                localStorage.setItem("locale.hour12", e)
            }
        }, {
            key: "_observe_home.clock.visible",
            value: function(e) {
                localStorage.setItem("home.clock.visible", e), this.setState({
                    visible: e
                }), this.stop(), e ? (this.start(), window.addEventListener("moztimechange", this), window.addEventListener("timeformatchange", this), window.addEventListener("visibilitychange", this)) : (window.removeEventListener("moztimechange", this), window.removeEventListener("timeformatchange", this), window.removeEventListener("visibilitychange", this))
            }
        }, {
            key: "stop",
            value: function() {
                clearInterval(this.timer), this.timer = null
            }
        }, {
            key: "render",
            value: function() {
                return this.state.visible ? d.default.createElement("time", {
                    className: "ClockComponent",
                    dateTime: this.state.datetime,
                    role: "menuitem",
                    "aria-label": this.state.timeForReadout
                }, d.default.createElement("div", {
                    className: "clock-upper"
                }, d.default.createElement("div", {
                    className: "clock-ampm secondary",
                    "data-hour-24": !navigator.mozHour12
                }, this.state.ampm), d.default.createElement("bdi", {
                    className: "clockDigi-container"
                }, d.default.createElement("span", {
                    className: "hour clockDigi-box"
                }, d.default.createElement("span", {
                    className: "clockDigi clockDigi--time",
                    "data-now": this.state.h1
                }, this.iconsHtml.bold), d.default.createElement("span", {
                    className: "clockDigi clockDigi--time",
                    "data-now": this.state.h2
                }, this.iconsHtml.bold)), d.default.createElement("div", {
                    className: "clock-colon"
                }), d.default.createElement("span", {
                    className: "minute clockDigi-box"
                }, d.default.createElement("span", {
                    className: "clockDigi clockDigi--time",
                    "data-now": this.state.m1
                }, this.iconsHtml.bold), d.default.createElement("span", {
                    className: "clockDigi clockDigi--time",
                    "data-now": this.state.m2
                }, this.iconsHtml.bold)))), d.default.createElement("div", {
                    className: "date primary"
                }, this.state.weekday, d.default.createElement("br", null), this.state.date)) : null
            }
        }]), t
    }(h.default);
    t.default = b
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = r(l),
        f = n(4),
        d = r(f),
        p = n(5),
        h = r(p),
        m = n(33),
        g = r(m),
        v = n(247),
        y = r(v),
        b = n(248),
        w = r(b),
        _ = n(9),
        k = i(_),
        S = n(50),
        E = r(S),
        O = n(73),
        I = r(O);
    n(274), n(277);
    var A = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "Dialer", n.toggleStayEffect = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.parentBox.classList.toggle("with-dialer-stay-effect", e)
            }, n.initState = {
                dialerState: null,
                matchedContact: null,
                telNum: "",
                suggestions: []
            }, n.state = Object.assign({}, n.initState), E.default.on("mmiloading", n.showLoading.bind(n)), E.default.on("mmiloaded", n.showAlert.bind(n)), E.default.on("ussd-received", n.onUssdReceived.bind(n)), n.children = {}, ["onKeyDown", "call", "hide", "updateTelNum", "focusInput"].forEach(function(e) {
                n[e] = n[e].bind(n)
            }), n.timer = null, d.default.register("show", n), d.default.register("hide", n), d.default.register("toggleStayEffect", n), d.default.register("resetCallingMarker", n), d.default.registerState("isShown", n), d.default.registerState("isCalling", n), n
        }
        return s(t, e), u(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                I.default.on("contact-changed", function() {
                    e.isShown && e.getSuggestions(e.state.telNum)
                }), this.updateTelTypes(), this.parentBox = this.element.parentElement.parentElement, this.parentBox.addEventListener("animationend", function() {
                    e.toggleStayEffect()
                })
            }
        }, {
            key: "onUssdReceived",
            value: function(e) {
                E.default.mmiloading && d.default.request("hideDialog");
                var t = navigator.mozMobileConnections[e.serviceId || 0].voice.network,
                    n = t ? t.shortName || t.longName : "";
                d.default.request("showDialog", {
                    type: "alert",
                    header: n,
                    content: e.message ? e.message.replace(/\\r\\n|\\r|\\n/g, "\n") : k.toL10n("GetEmptyUssdPrompt"),
                    translated: !0,
                    noClose: !1
                })
            }
        }, {
            key: "show",
            value: function(e) {
                this.isShown || this.isHidden() && (this.updateTelTypes(), d.default.request("openSheet", "dialer"), this.isShown = !0, this.element.focus(), e && (this.focusInput(), this.children.dialerInput.sendFirstChar(e)))
            }
        }, {
            key: "hide",
            value: function() {
                this.isHidden() || d.default.request("closeSheet", "dialer"), this.isShown = !1, this.children.dialerInput.element.style.fontSize = "", this.setState(this.initState), this.children.dialerInput.element.value = ""
            }
        }, {
            key: "updateTelTypes",
            value: function() {
                var e = this;
                navigator.mozL10n.ready(function() {
                    e.telTypes = ["personal", "mobile", "home", "work", "fax-home", "fax-office", "fax-other"].reduce(function(e, t) {
                        return e[t] = k.toL10n(t), e
                    }, {})
                })
            }
        }, {
            key: "isHidden",
            value: function() {
                for (var e = this.element; e !== document.body && !e.classList.contains("hidden") && "closed" !== e.dataset.transitionState;) e = e.parentElement;
                return e.classList.contains("hidden") || "closed" === e.dataset.transitionState
            }
        }, {
            key: "updateTelNum",
            value: function(e) {
                var t = this,
                    n = {
                        telNum: e
                    };
                e.length < 2 && (n.matchedContact = this.initState.matchedContact, n.suggestions = this.initState.suggestions), this.setState(n, function() {
                    0 === e.length ? t.hide() : E.default.instantDialIfNecessary(e) && (t.children.dialerInput.exitDialer(), E.default.dial(e)), e.length >= 4 && (clearTimeout(t.timer), t.timer = setTimeout(function() {
                        t.getSuggestions(e)
                    }, 500))
                })
            }
        }, {
            key: "focusInput",
            value: function() {
                this.stopRenderSteply(), this.children.dialerInput.element.focus()
            }
        }, {
            key: "focusSuggestions",
            value: function() {
                var e = this;
                this.state.suggestions.length && (this.children.dialerSuggestions.initFocus(), this.allSuggestions.keyword || setTimeout(function() {
                    e.renderSteply()
                }, 0))
            }
        }, {
            key: "renderSteply",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                    n = this.state.suggestions.length;
                if (this.allSuggestions.length <= n) return void this.stopRenderSteply();
                var i = this.allSuggestions.slice(0, n + e);
                i.keyword = this.state.telNum, this.setState({
                    suggestions: i
                }), this.suggestionRenderTimer = setTimeout(this.renderSteply.bind(this), t)
            }
        }, {
            key: "stopRenderSteply",
            value: function() {
                this.suggestionRenderTimer && (window.clearTimeout(this.suggestionRenderTimer), this.suggestionRenderTimer = null)
            }
        }, {
            key: "call",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        isVideo: !1,
                        isRtt: !1
                    };
                return this.isCalling ? void d.default.request("showDialog", {
                    ok: "skip",
                    cancel: "cancel",
                    type: "confirm",
                    content: "otherConnectionInUseMessage",
                    onOk: function() {
                        d.default.request("Dialer:resetCallingMarker")
                    }
                }) : (this.isCalling = !0, this.stopRenderSteply(), void E.default.dial(e, n).then(function() {
                    var e = t;
                    document.addEventListener("visibilitychange", function t() {
                        document.hidden && (document.removeEventListener("visibilitychange", t), d.default.request("Dialer:hide"), !d.default.query("isHidden") && d.default.request("hideDialog"), e.isCalling = !1)
                    })
                }).catch(function() {
                    t.isCalling = !1
                }))
            }
        }, {
            key: "getSuggestions",
            value: function(e) {
                E.default.isValid(e) && k.contactNumFilter({
                    telNum: e
                }).then(this.filterSuggestions.bind(this, e))
            }
        }, {
            key: "filterSuggestions",
            value: function(e, t) {
                var n = this,
                    i = void 0,
                    r = t.reduce(function(t, r) {
                        return t.concat(r.tel.map(function(t) {
                            var o = {
                                id: r.id,
                                name: r.name && r.name[0],
                                type: n.getL10nFromTelTypes(t.type[0] || "mobile"),
                                number: t.value
                            };
                            return i || t.value !== e || (i = o), o
                        }))
                    }, []).filter(function(e) {
                        return -1 !== e.number.indexOf(n.state.telNum)
                    });
                this.allSuggestions = r, this.renderSuggestions(r.slice(0, 5), i, e)
            }
        }, {
            key: "renderSuggestions",
            value: function(e, t, n) {
                var i = this;
                n === this.state.telNum && (e.keyword = n, this.setState({
                    matchedContact: t,
                    suggestions: e
                }, function() {
                    i.children.dialerSuggestions.element.scrollTo(0, 0)
                }))
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                var t = e.key;
                switch (e.stopPropagation(), t) {
                    case "EndCall":
                        this.hide();
                        break;
                    case "ArrowDown":
                        this.focusSuggestions()
                }
            }
        }, {
            key: "getMatchedContactInfo",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.matchedContact,
                    t = void 0;
                return e && (t = [e.name, e.type].filter(Boolean).join(", ")), t
            }
        }, {
            key: "showAlert",
            value: function(e, t) {
                this.resetCallingMarker(), d.default.request("Dialer:hide"), (e || t) && d.default.request("showDialog", {
                    type: "alert",
                    header: e,
                    content: k.toL10n(t),
                    translated: !0,
                    noClose: !1
                })
            }
        }, {
            key: "resetCallingMarker",
            value: function() {
                this.isCalling = !1
            }
        }, {
            key: "showLoading",
            value: function() {
                d.default.request("Dialer:hide").then(function() {
                    d.default.request("showDialog", {
                        type: "alert",
                        content: "sending",
                        otherClass: "is-loading",
                        noClose: !1
                    })
                })
            }
        }, {
            key: "getL10nFromTelTypes",
            value: function(e) {
                return this.telTypes[e] || e
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return c.default.createElement("div", {
                    className: "dialerBox",
                    tabIndex: "-1",
                    onKeyDown: this.onKeyDown,
                    ref: function(t) {
                        e.element = t
                    }
                }, c.default.createElement("div", {
                    className: "dialer-header"
                }, c.default.createElement("div", {
                    className: "dialer-state text-thi"
                }, this.state.dialerState), c.default.createElement(y.default, {
                    ref: function(t) {
                        e.children.dialerInput = t
                    },
                    dial: this.call,
                    exitDialer: this.hide,
                    updateTelNum: this.updateTelNum
                }), c.default.createElement("div", {
                    className: "dialer-info text-thi"
                }, this.getMatchedContactInfo())), c.default.createElement(w.default, {
                    ref: function(t) {
                        e.children.dialerSuggestions = t
                    },
                    suggestions: this.state.suggestions,
                    exitSuggestions: this.focusInput,
                    dial: this.call
                }))
            }
        }]), t
    }(h.default);
    t.default = (0, g.default)(A, "immediate", "immediate")
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = r(l),
        f = n(5),
        d = r(f),
        p = n(4),
        h = r(p),
        m = n(11),
        g = r(m),
        v = n(16),
        y = r(v),
        b = n(152),
        w = r(b),
        _ = n(9),
        k = i(_),
        S = n(78),
        E = r(S),
        O = n(79),
        I = r(O),
        A = n(77),
        L = r(A),
        P = n(74),
        T = r(P),
        C = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "DialerInput", n.SPECIAL_CHARS = ["*", "+", ","], n.telNum = "", n.fontStyles = "", n.isVTSupported = !1, LazyLoader.load(["shared/js/dialer/tone_player.js"], function() {
                    TonePlayer.init("notification"), TonePlayer.gTonesFrequencies = {
                        1: [697, 1209],
                        2: [697, 1336],
                        3: [697, 1477],
                        A: [697, 1633],
                        4: [770, 1209],
                        5: [770, 1336],
                        6: [770, 1477],
                        B: [770, 1633],
                        7: [852, 1209],
                        8: [852, 1336],
                        9: [852, 1477],
                        C: [852, 1633],
                        "*": [941, 1209],
                        0: [941, 1336],
                        "#": [941, 1477],
                        D: [941, 1633],
                        ",": [941, 1209],
                        "+": [941, 1336]
                    }
                }), n.specialCharsCount = n.SPECIAL_CHARS.length, n.onKeyPress = n.onKeyPress.bind(n), n.onKeyDown = n.onKeyDown.bind(n), n.onKeyUp = n.onKeyUp.bind(n), n.onInput = n.onInput.bind(n), n
            }
            return s(t, e), u(t, [{
                key: "componentDidMount",
                value: function() {
                    this.element.setAttribute("x-inputmode", "native"), y.default.addObserver("phone.ring.keypad", this), this.updateSoftKeys(), this.getFontStyles(), this.getVTSupportability()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateSoftKeys()
                }
            }, {
                key: "updateSoftKeys",
                value: function(e) {
                    var t = e || {
                        left: "contacts",
                        center: {
                            text: T.default.isRttAuto() ? "rtt-call" : "call",
                            icon: ""
                        },
                        right: "options"
                    };
                    SIMSlotManager.isMultiSIM() && !SIMSlotManager.hasOnlyOneSIMCardDetected() && !I.default.isAlwaysAsk() && parseInt(I.default.cardIndex, 10) >= 0 && (t.center.icon = "sim-" + (I.default.cardIndex + 1)), g.default.register(t, this.element)
                }
            }, {
                key: "onInput",
                value: function() {
                    var e = this.element.value;
                    this.props.updateTelNum(e), this.telNum = e, this.updateFontSize(e), "" === e && this.exitDialer()
                }
            }, {
                key: "onKeyPress",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "onKeyUp",
                value: function(e) {
                    var t = E.default.translate(e.key);
                    "Backspace" === t && this.clearLongpressDeleteTimer(), "0" === t && (window.clearTimeout(this.longpressSpecialChar), this.longpressSpecialChar = null)
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = this,
                        n = e.nonTranslated ? e.key : E.default.translate(e.key);
                    if (!this.longpressDeleteTimer && (!h.default.query("Dialer.isCalling") || "Call" === n && "Enter" === n)) switch (n) {
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                        case "0":
                        case "#":
                        case "+":
                        case "*":
                            if (e.stopPropagation && e.stopPropagation(), "0" === n && void 0 !== e.target && k.isLandscape && (window.clearTimeout(this.longpressSpecialChar), this.longpressSpecialChar = setTimeout(function() {
                                    var e = t.SPECIAL_CHARS[2],
                                        n = t.element.selectionStart,
                                        i = t.element.value;
                                    t.replaceLeftChar(e, n, i), t.playKeyTone(e)
                                }, 1e3)), !k.isLandscape && "*" === n && -1 !== this.SPECIAL_CHARS.indexOf(this.lastKeyinChar) && this.getNowTime() - this.lastInputTime < 1e3) {
                                var i = this.element,
                                    r = i.selectionStart,
                                    o = i.value,
                                    a = o[r - 1],
                                    s = this.SPECIAL_CHARS.indexOf(a);
                                this.element.value = o.slice(0, r - 1) + o.slice(r), this.element.setSelectionRange(r - 1, r - 1), n = this.SPECIAL_CHARS[(s + 1) % this.specialCharsCount]
                            }
                            e.preventDefault && e.preventDefault(), this.insertKeyAtCaret(n), this.playKeyTone(n), this.lastKeyinChar = n, this.lastInputTime = this.getNowTime(), this.onInput();
                            break;
                        case "Backspace":
                            e.stopPropagation(), this.longpressDeleteTimer = setTimeout(this.longpressDelete.bind(this), 1e3);
                            break;
                        case "EndCall":
                            e.stopPropagation(), this.deleteAllText();
                            break;
                        case "SoftLeft":
                            e.stopPropagation(), L.default.launch("manifestURL", "app://contact.gaiamobile.org/manifest.webapp");
                            break;
                        case "SoftRight":
                            e.stopPropagation(), this.handleTelNumber();
                            break;
                        case "Enter":
                        case "Call":
                            e.preventDefault(), e.stopPropagation(), this.props.dial(this.telNum, {
                                isRtt: T.default.isRttAuto()
                            });
                            break;
                        case "ArrowDown":
                        case "ArrowUp":
                            e.preventDefault();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                            this.lastKeyinChar = null;
                            break;
                        default:
                            e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
                    }
                }
            }, {
                key: "_observe_phone.ring.keypad",
                value: function(e) {
                    this._keypadSoundIsEnabled = e
                }
            }, {
                key: "insertKeyAtCaret",
                value: function(e) {
                    var t = this.element.selectionEnd,
                        n = this.element.value;
                    this.element.value = n.substr(0, t) + e + n.substr(t), this.element.selectionEnd = t + 1
                }
            }, {
                key: "sendFirstChar",
                value: function(e) {
                    this.element.value = "", this.onKeyDown({
                        key: e,
                        nonTranslated: !0
                    }), this.getFontStyles()
                }
            }, {
                key: "getNowTime",
                value: function() {
                    return +new Date
                }
            }, {
                key: "replaceLeftChar",
                value: function(e, t, n) {
                    var i = t - 1;
                    this.element.value = n.substr(0, i) + e + n.substr(i + e.length), this.element.setSelectionRange(t, t)
                }
            }, {
                key: "clearLongpressDeleteTimer",
                value: function() {
                    window.clearTimeout(this.longpressDeleteTimer), this.longpressDeleteTimer = null
                }
            }, {
                key: "longpressDelete",
                value: function() {
                    this.clearLongpressDeleteTimer(), this.deleteAllText()
                }
            }, {
                key: "deleteAllText",
                value: function() {
                    this.element.value = "", this.onInput()
                }
            }, {
                key: "playKeyTone",
                value: function(e) {
                    this._keypadSoundIsEnabled && TonePlayer.start(TonePlayer.gTonesFrequencies[e], !0)
                }
            }, {
                key: "handleTelNumber",
                value: function() {
                    var e = this,
                        t = [{
                            id: "add-to-existing-contact",
                            callback: function() {
                                k.sendNumberToContact({
                                    name: "update",
                                    telNum: e.telNum
                                })
                            }
                        }, {
                            id: "create-new-contact",
                            callback: function() {
                                k.sendNumberToContact({
                                    name: "new",
                                    telNum: e.telNum
                                })
                            }
                        }];
                    this.isVTSupported && t.unshift({
                        id: "video-call",
                        callback: function() {
                            e.element.focus(), e.props.dial(e.telNum, {
                                isVideo: !0
                            })
                        }
                    }), T.default.isRttManual() && t.unshift({
                        id: "rtt-call",
                        callback: function() {
                            e.element.focus(), e.props.dial(e.telNum, {
                                isRtt: !0
                            })
                        }
                    }), h.default.request("showOptionMenu", {
                        options: t,
                        onCancel: function() {
                            return e.element.focus()
                        }
                    })
                }
            }, {
                key: "getFontStyles",
                value: function() {
                    var e = this;
                    this.fontStyles = function() {
                        var t = window.getComputedStyle(e.element);
                        return t ? ["font-style", "font-weight", "font-size", "font-family"].map(function(e) {
                            return t[e]
                        }).join(" ") : ""
                    }()
                }
            }, {
                key: "updateFontSize",
                value: function(e) {
                    this.offsetWidth || (this.offsetWidth = this.element.offsetWidth);
                    var t = this.element.style.fontSize,
                        n = (0, w.default)({
                            text: e,
                            font: this.fontStyles,
                            space: this.offsetWidth,
                            min: 22,
                            max: 40
                        }).fontSize + "px";
                    t !== n && (this.element.style.fontSize = n)
                }
            }, {
                key: "getVTSupportability",
                value: function() {
                    var e = this;
                    navigator.hasFeature && navigator.hasFeature("device.capability.vilte").then(function(t) {
                        e.isVTSupported = t
                    })
                }
            }, {
                key: "exitDialer",
                value: function() {
                    this.clearLongpressDeleteTimer(), this.props.exitDialer()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return c.default.createElement("input", {
                        tabIndex: "-1",
                        className: "dialer-input",
                        onKeyPress: this.onKeyPress,
                        onKeyDown: this.onKeyDown,
                        onKeyUp: this.onKeyUp,
                        onInput: this.onInput,
                        ref: function(t) {
                            e.element = t
                        }
                    })
                }
            }]), t
        }(d.default);
    C.defaultProps = {
        dial: null,
        exitDialer: null,
        updateTelNum: null
    }, C.propTypes = {
        dial: c.default.PropTypes.func,
        exitDialer: c.default.PropTypes.func,
        updateTelNum: c.default.PropTypes.func
    }, t.default = C
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(5),
        f = i(c),
        d = n(4),
        p = i(d),
        h = n(11),
        m = i(h),
        g = n(70),
        v = i(g),
        y = n(79),
        b = i(y),
        w = n(74),
        _ = i(w),
        k = function(e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "DialerSuggestions", n.onKeyDown = n.onKeyDown.bind(n), n
            }
            return a(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    this.suggestionNavigator = new v.default(".dialer-focusable", this.element), this.updateSoftKeys(), this.getVTSupportability()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateSoftKeys()
                }
            }, {
                key: "updateSoftKeys",
                value: function(e) {
                    var t = e || {
                        left: "",
                        center: {
                            text: _.default.isRttAuto() ? "rtt-call" : "call",
                            icon: ""
                        },
                        right: this.isVTSupported || _.default.isRttManual() ? "options" : ""
                    };
                    SIMSlotManager.isMultiSIM() && !SIMSlotManager.hasOnlyOneSIMCardDetected() && !b.default.isAlwaysAsk() && parseInt(b.default.cardIndex, 10) >= 0 && (t.center.icon = "sim-" + (b.default.cardIndex + 1)), m.default.register(t, this.element)
                }
            }, {
                key: "getVTSupportability",
                value: function() {
                    var e = this;
                    navigator.hasFeature && navigator.hasFeature("device.capability.vilte").then(function(t) {
                        e.isVTSupported = t
                    })
                }
            }, {
                key: "handleOption",
                value: function() {
                    var e = this;
                    if (this.isVTSupported || _.default.isRttManual()) {
                        var t = document.activeElement,
                            n = [];
                        this.isVTSupported && n.unshift({
                            id: "video-call",
                            callback: function() {
                                t.focus();
                                var n = e.getFocusedSuggestion(),
                                    i = n.number;
                                e.props.dial(i, {
                                    isVideo: !0
                                })
                            }
                        }), _.default.isRttManual() && n.unshift({
                            id: "rtt-call",
                            callback: function() {
                                t.focus();
                                var n = e.getFocusedSuggestion(),
                                    i = n.number;
                                e.props.dial(i, {
                                    isRtt: !0
                                })
                            }
                        }), p.default.request("showOptionMenu", {
                            options: n,
                            onCancel: function() {
                                return e.element.focus()
                            }
                        })
                    }
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    if (!p.default.query("Dialer.isCalling")) switch (e.key) {
                        case "SoftRight":
                            e.stopPropagation(), this.handleOption();
                            break;
                        case "Backspace":
                            e.stopPropagation(), e.preventDefault(), this.props.exitSuggestions();
                            break;
                        case "Enter":
                        case "Call":
                            e.stopPropagation();
                            var t = this.getFocusedSuggestion(),
                                n = t.number;
                            this.props.dial(n, {
                                isRtt: _.default.isRttAuto()
                            })
                    }
                }
            }, {
                key: "getFocusedSuggestion",
                value: function() {
                    var e = this.suggestionNavigator,
                        t = e._candidates.indexOf(e._currentFocus);
                    return this.props.suggestions[t]
                }
            }, {
                key: "initFocus",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        var t = e.element.querySelector(".dialer-focusable");
                        t.focus(), e.suggestionNavigator.setFocus(t)
                    }, 0)
                }
            }, {
                key: "formatMatchedNum",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.suggestions.keyword,
                        n = e.indexOf(t);
                    if (-1 !== n) {
                        var i = e.slice(0, n),
                            r = e.slice(n + t.length);
                        return l.default.createElement("span", {
                            dir: "ltr",
                            className: "dialerSuggestion__telNum",
                            dangerouslySetInnerHTML: {
                                __html: i + "<mark>" + t + "</mark>" + r
                            }
                        })
                    }
                }
            }, {
                key: "suggestionsHtml",
                value: function e() {
                    var t = this;
                    return this.props.suggestions.map(function(e, n) {
                        return l.default.createElement("li", {
                            key: "suggestions-" + n,
                            className: "dialer-focusable",
                            tabIndex: "-1"
                        }, l.default.createElement("div", {
                            className: "dialerSuggestion"
                        }, l.default.createElement("div", {
                            className: "dialerSuggestion__header text-pri"
                        }, e.name), l.default.createElement("div", {
                            className: "dialerSuggestion__detail text-sec"
                        }, e.type, " ", t.formatMatchedNum(e.number))))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return l.default.createElement("ul", {
                        className: "dialerSuggestions",
                        onKeyDown: this.onKeyDown,
                        ref: function(t) {
                            e.element = t
                        }
                    }, this.suggestionsHtml())
                }
            }]), t
        }(f.default);
    k.defaultProps = {
        dial: null,
        exitSuggestions: null,
        suggestions: null
    }, k.propTypes = {
        dial: l.default.PropTypes.func,
        exitSuggestions: l.default.PropTypes.func,
        suggestions: l.default.PropTypes.arrayOf(l.default.PropTypes.object)
    }, t.default = k
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(31),
        l = r(u),
        c = n(9),
        f = i(c),
        d = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "GridHelper", f.isLandscape ? n.grid = {
                    row: 2,
                    col: 4
                } : n.grid = {
                    row: 3,
                    col: 3
                }, n.emit("change", n.grid), n
            }
            return s(t, e), t
        }(l.default);
    t.default = new d
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(5),
        l = i(u),
        c = n(73),
        f = (i(c), n(16)),
        d = (i(f), function(e) {
            function t() {
                var e, n, i, a;
                r(this, t);
                for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                return n = i = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i._contacts = [], a = n, o(i, a)
            }
            return a(t, e), s(t, [{
                key: "getContacts",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        ICEStore.getContacts().then(function(n) {
                            return null == n ? void t([]) : e.parse(n)
                        }).then(function() {
                            dump("ICE parsed contacts:" + JSON.stringify(e._contacts)), t(e._contacts)
                        }).catch(function(e) {
                            dump("ICE parsed error:" + e), t([])
                        })
                    })
                }
            }, {
                key: "findContact",
                value: function(e) {
                    return new Promise(function(t) {
                        var n = {
                            filterBy: ["id"],
                            filterValue: e,
                            filterOp: "equals",
                            filterLimit: 1
                        };
                        navigator.mozContacts.find(n).onsuccess = function() {
                            var e = this.result[0];
                            dump("ICE findContact contact:" + JSON.stringify(e)), t(e)
                        }
                    })
                }
            }, {
                key: "parse",
                value: function(e) {
                    var t = this;
                    this._contacts = [];
                    var n = e.map(function(e) {
                        return new Promise(function(n) {
                            t.findContact(e).then(function(i) {
                                if (!(i instanceof window.mozContact)) return void n();
                                var r = void 0;
                                i.photo && i.photo.length && (r = window.URL.createObjectURL(i.photo[0])), t._contacts.push({
                                    id: e,
                                    name: i.name && i.name[0],
                                    photo: r,
                                    tel: i.tel[0].value
                                }), dump("ICE parse contacts:" + JSON.stringify(t._contacts)), n()
                            })
                        })
                    });
                    return Promise.all(n)
                }
            }]), t
        }(l.default)),
        p = new d;
    t.default = p
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(5),
        f = i(c),
        d = n(11),
        p = i(d),
        h = n(4),
        m = i(h),
        g = n(244),
        v = i(g),
        y = n(258),
        b = i(y),
        w = n(75),
        _ = i(w),
        k = n(131),
        S = i(k),
        E = n(261),
        O = i(E),
        I = n(77),
        A = i(I);
    n(276);
    var L = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "MainView", n.onKeyDown = function(e) {
                if ("complete" === document.readyState && !m.default.query("LaunchStore.isLaunching")) {
                    var t = e.key;
                    if (!n._longPressTimer) {
                        switch (n.keydownRecords.set(t, Date.now()), t) {
                            case "Call":
                                A.default.launch("manifestURL", "app://fastlog.bananahackers.net/manifest.webapp");
                                break;
                            case "SoftLeft":
                                A.default.launch("iac", "launcher-panel", {
                                    target: "notice"
                                });
                                break;
                            case "SoftRight":
                                A.default.launch("manifestURL", "app://fastcontact.bananahackers.net/manifest.webapp");
                                break;
                            case "ArrowLeft":
                                m.default.query("Sidemenu.itemCount") > 0 && m.default.request("openSheet", "sidemenu");
                                break;
                            case "ArrowRight":
                                A.default.launch("manifestURL", "app://fastcontact.bananahackers.net/manifest.webapp")
                        }
                        n._shortLongPressTimer = setTimeout(function() {
                            switch (n.clearShortLongPressTimer(), n._shortLongPressActionTriggered = !0, t) {
                                case "EndCall":
                                case "BrowserBack":
                                case "Backspace":
                                    if ("Backspace" === t && n.hasEndCallKey) return;
                                    A.default.launch("iac", "launcher-panel", {
                                        target: "sleep-menu"
                                    });
                                    break;
                                default:
                                    n._shortLongPressActionTriggered = !1
                            }
                        }, n.shortPressDuration), n._longPressTimer = setTimeout(function() {
                            switch (n.clearLongPressTimer(), n._longPressActionTriggered = !0, t) {
                                case n.keyToTriggerFlashLight:
                                    O.default.toggle();
                                    break;
                                case "ArrowDown":
                                    localStorage.removeItem("tutorial-has-viewed"), location.reload();
                                    break;
                                case "Enter":
                                    var e = navigator.mozSettings.createLock().get("voice-input.enabled");
                                    e.onsuccess = function() {
                                        e.result["voice-input.enabled"] && new MozActivity({
                                            name: "voice-assistant",
                                            data: {
                                                from: "Homescreen"
                                            }
                                        })
                                    };
                                    break;
                                default:
                                    n._longPressActionTriggered = !1
                            }
                        }, n.longPressDuration)
                    }
                }
            }, n.onKeyUp = function(e) {
                var t = e.key;
                if (n._longPressTimer && n._shortLongPressTimer && !m.default.query("LaunchStore.isLaunching")) {
                    if (n.clearShortLongPressTimer(), n.clearLongPressTimer(), n._shortLongPressActionTriggered) return void(n._shortLongPressActionTriggered = !1);
                    if (n._longPressActionTriggered) return void(n._longPressActionTriggered = !1);
                    switch (t) {
                        case "Enter":
                            if (!n.isValidKeyUp("Enter")) return;
                            m.default.request("openSheet", "appList");
                            break;
                        case "ArrowUp":
                                A.default.launch("manifestURL", "app://sms.gaiamobile.org/manifest.webapp");
                                break;
                        case "Backspace":
                            A.default.isLaunching && (A.default.isLaunching = !1)
                    }
                }
            }, n.isValidKeyUp = function(e) {
                if (n.keydownRecords.get(e)) {
                    return Date.now() - n.keydownRecords.get(e) < n.longPressDuration
                }
                return !1
            }, n.setRef = function(e) {
                n.element = e
            }, n.onBlur = function() {
                n.element.classList.remove("is-focus"), n.element.classList.remove("to-force-display")
            }, n.onFocus = function() {
                n.element.classList.add("is-focus")
            }, n.keydownRecords = new Map, n.shortPressDuration = 500, n.longPressDuration = 1500, n.keyToTriggerFlashLight = "ArrowUp", window.addEventListener("visibilitychange", function() {
                document.hidden && (n._shortLongPressActionTriggered = !1, n._longPressActionTriggered = !1)
            }), navigator.hasFeature("device.capability.qwerty").then(function(e) {
                e && (n.keyToTriggerFlashLight = " ")
            }), navigator.hasFeature("device.capability.endcall-key").then(function(e) {
                n.hasEndCallKey = !!e
            }), n
        }
        return a(t, e), s(t, [{
            key: "componentDidMount",
            value: function() {
                m.default.register("show", this), m.default.register("hide", this), m.default.register("forcedRefresh", this), p.default.register({
                    left: "notifications",
                    center: "icon=all-apps",
                    right: "contacts"
                }, this.element), _.default.register(this.element), S.default.register(this.element)
            }
        }, {
            key: "clearShortLongPressTimer",
            value: function() {
                this._shortLongPressTimer && (clearTimeout(this._shortLongPressTimer), this._shortLongPressTimer = null)
            }
        }, {
            key: "clearLongPressTimer",
            value: function() {
                this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null)
            }
        }, {
            key: "show",
            value: function() {
                this.element.classList.remove("hidden"), this.focus()
            }
        }, {
            key: "hide",
            value: function() {
                this.element.classList.add("hidden")
            }
        }, {
            key: "forcedRefresh",
            value: function() {
                this.element.classList.add("to-force-display"), p.default.register({
                    left: "notifications",
                    center: "icon=all-apps",
                    right: "contacts"
                }, this.element)
            }
        }, {
            key: "focus",
            value: function() {
                this.element.focus()
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    id: "main-view",
                    tabIndex: "-1",
                    onKeyDown: this.onKeyDown,
                    onKeyUp: this.onKeyUp,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    ref: this.setRef
                }, l.default.createElement(b.default, null), l.default.createElement(v.default, null))
            }
        }]), t
    }(f.default);
    L.defaultProps = {
        open: null,
        close: null
    }, L.propTypes = {
        open: l.default.PropTypes.func,
        close: l.default.PropTypes.func
    }, t.default = L
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = this,
            n = t[e],
            o = navigator.mozL10n.language.code || "",
            a = t.default_locale || "";
        return o in navigator.mozL10n.qps && ("name" === e || "description" === e || "short_name" === e) ? n = navigator.mozL10n.qps[navigator.language].translate(n) : t.locales && [o, o.substr(0, o.indexOf("-")), a, a.substr(0, o.indexOf("-"))].some(function(t) {
            return !(!this[t] || !this[t][e]) && (n = this[t][e], !0)
        }, t.locales), "object" !== ("undefined" == typeof n ? "undefined" : r(n)) || n instanceof Array || (n = new i(n)), n
    }

    function i(e) {
        for (var t in e) Object.defineProperty(this, t, {
            get: n.bind(e, t),
            enumerable: !0
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(i.prototype, "displayName", {
        get: function() {
            return this.short_name || this.name
        }
    }), t.default = i
}, function(e, t) {
    "use strict";
    ! function(e) {
        function t(e, t, n) {
            this.manager = n, this._iccCardIndex = t, this._iccId = e, this._iccSettings = {
                mcc: "000",
                mnc: "00"
            }
        }
        var n = "/shared/resources/apn.json",
            i = ["default", "mms", "supl", "dun", "ims", "ia", "hipri", "xcap"],
            r = ["none", "pap", "chap", "papOrChap"],
            o = ["authtype", "user", "password", "proxy", "port", "mmsc", "mmsproxy", "mmsport", "protocol", "roaming_protocol", "bearer"];
        t.prototype = {
            setmccmnc: function(e, t) {
                dump("operator_variant_handler launcher, setmccmnc, plmn = " + e + t), this._iccSettings.mcc = e, this._iccSettings.mnc = t
            },
            retrieveOperatorVariantUserselect: function(e) {
                dump("operator_variant_handler launcher, retrieveOperatorVariantUserselect"), this.retrieveOperatorVariantSettings(function(t) {
                    dump("operator_variant_handler launcher, retrieveOperatorVariantUserselect result length = " + t.length), this.filterApnsByMvnoRules(0, t, [], "", "", [], function(t) {
                        for (var n = [], i = [], r = [], o = 0; o < t.length; o++) {
                            dump("operator_variant_handler launcher, filter APN is: " + JSON.stringify(t[o])), r = t[o].type;
                            for (var a = 0; a < r.length; a++) "default" != r[a] ? "mms" == r[a] && i.push(t[o]) : n.push(t[o])
                        }
                        e(n, i)
                    }.bind(this))
                }.bind(this))
            },
            padLeft: function(e, t) {
                for (var n = String(e); n.length < t;) n = "0" + n;
                return n
            },
            clone: function(e) {
                return JSON.parse(JSON.stringify(e))
            },
            apnListdiff: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    for (var i = 0; i < e.length; i++) e[i].apn == t[n].apn && e[i].type.toString() == t[n].type.toString() && (e.splice(i, 1), i -= 1);
                return e
            },
            apnListunique: function(e) {
                for (var t = 0; t < e.length; ++t)
                    for (var n = t + 1; n < e.length; ++n) e[t].apn === e[n].apn && e[t].type.toString() == e[n].type.toString() && e.splice(n--, 1);
                return e
            },
            applySettings: function(e, t) {
                this.selectionsapnlist = e, this.userselectedapnlist = t;
                for (var n = 0; n < this.selectionsapnlist.length; n++) dump("operator_variant_handler launcher, selectionsapnlist is: " + JSON.stringify(this.selectionsapnlist[n]));
                for (var n = 0; n < this.userselectedapnlist.length; n++) dump("operator_variant_handler launcher, userselectedapnlist is: " + JSON.stringify(this.userselectedapnlist[n]));
                this.retrieveOperatorVariantSettings(function(e) {
                    this.applyOperatorVariantSettings(e)
                }.bind(this))
            },
            retrieveOperatorVariantSettings: function(e) {
                var t = this;
                LazyLoader.getJSON(n).then(function(n) {
                    var i = t._iccSettings.mcc,
                        r = t.padLeft(t._iccSettings.mnc, 2);
                    e(ApnHelper.getCompatible(n, i, r, ""))
                })
            },
            filterApnsByMvnoRules: function(e, t, n, i, r, o, a) {
                var s = this;
                if (e === t.length) {
                    var u = window.navigator.mozSettings,
                        l = u.createLock(),
                        c = l.get("operatorvariant.mvno");
                    return c.onsuccess = function() {
                        var e = c.result["operatorvariant.mvno"];
                        e && Array.isArray(e) || (e = [null, null]), e[s._iccCardIndex] = o;
                        var t = {};
                        t["operatorvariant.mvno"] = e, l.set(t)
                    }, void(a && "function" == typeof a && a(n))
                }
                var f = t[e],
                    d = f.mvno_type || "";
                d = d && d.toLowerCase();
                var p = f.mvno_match_data || "";
                if ("gid" !== d && "imsi" !== d || (p = p && p.toLowerCase()), !d || i && i === d && r === p) return dump("operator_variant_handler launcher, filterApnsByMvnoRules direct match mvno"), d ? (dump("operator_variant_handler launcher, filterApnsByMvnoRules direct push 22"), n.push(f)) : void 0 === n.find(function(e) {
                    return !!e.mvno_type
                }) && (dump("operator_variant_handler launcher, filterApnsByMvnoRules direct push 11"), n.push(f)), this.filterApnsByMvnoRules(e + 1, t, n, i, r, o, a);
                var h = navigator.mozIccManager.getIccById(this._iccId),
                    c = h.matchMvno(d, p);
                c.onsuccess = function() {
                    var s = c.result;
                    dump("operator_variant_handler launcher, filterApnsByMvnoRules match = " + s);
                    var u = {
                        mvnoType: d,
                        mvnoMatchData: p,
                        match: s
                    };
                    return o.find(function(e) {
                        return JSON.stringify(e) === JSON.stringify(u)
                    }) || o.push(u), s ? (n = [], n.push(f), this.filterApnsByMvnoRules(e + 1, t, n, d, p, o, a)) : void this.filterApnsByMvnoRules(e + 1, t, n, i, r, o, a)
                }.bind(this), c.onerror = function() {
                    this.filterApnsByMvnoRules(e + 1, t, n, i, r, o, a)
                }.bind(this)
            },
            applyOperatorVariantSettings: function(e) {
                var t = {
                        default: {
                            "ril.data.carrier": "carrier",
                            "ril.data.apn": "apn",
                            "ril.data.user": "user",
                            "ril.data.passwd": "password",
                            "ril.data.httpProxyHost": "proxy",
                            "ril.data.httpProxyPort": "port",
                            "ril.data.authtype": "authtype"
                        },
                        supl: {
                            "ril.supl.carrier": "carrier",
                            "ril.supl.apn": "apn",
                            "ril.supl.user": "user",
                            "ril.supl.passwd": "password",
                            "ril.supl.httpProxyHost": "proxy",
                            "ril.supl.httpProxyPort": "port",
                            "ril.supl.authtype": "authtype"
                        },
                        mms: {
                            "ril.mms.carrier": "carrier",
                            "ril.mms.apn": "apn",
                            "ril.mms.user": "user",
                            "ril.mms.passwd": "password",
                            "ril.mms.httpProxyHost": "proxy",
                            "ril.mms.httpProxyPort": "port",
                            "ril.mms.mmsc": "mmsc",
                            "ril.mms.mmsproxy": "mmsproxy",
                            "ril.mms.mmsport": "mmsport",
                            "ril.mms.authtype": "authtype"
                        },
                        dun: {
                            "ril.dun.carrier": "carrier",
                            "ril.dun.apn": "apn",
                            "ril.dun.user": "user",
                            "ril.dun.passwd": "password",
                            "ril.dun.httpProxyHost": "proxy",
                            "ril.dun.httpProxyPort": "port",
                            "ril.dun.authtype": "authtype"
                        },
                        ims: {
                            "ril.ims.carrier": "carrier",
                            "ril.ims.apn": "apn",
                            "ril.ims.user": "user",
                            "ril.ims.passwd": "password",
                            "ril.ims.httpProxyHost": "proxy",
                            "ril.ims.httpProxyPort": "port",
                            "ril.ims.authtype": "authtype"
                        },
                        operatorvariant: {
                            "ril.iccInfo.mbdn": "voicemail",
                            "ril.sms.strict7BitEncoding.enabled": "enableStrict7BitEncodingForSms",
                            "ril.cellbroadcast.searchlist": "cellBroadcastSearchList",
                            "dom.mms.operatorSizeLimitation": "operatorSizeLimitation"
                        }
                    },
                    n = ["ril.sms.strict7BitEncoding.enabled"],
                    i = window.navigator.mozSettings,
                    o = i.createLock();
                for (var a in t) {
                    var s = {},
                        u = !1;
                    if ("undefined" != this.userselectedapnlist && this.userselectedapnlist.length > 0)
                        for (var l = 0; l < this.userselectedapnlist.length; l++)
                            if (this.userselectedapnlist[l].type.indexOf(a) != -1) {
                                s = this.userselectedapnlist[l], u = !0;
                                break
                            } if (0 == u)
                        for (var l = 0; l < e.length; l++)
                            if ("undefined" == typeof e[l].type && (e[l].type = "default"), e[l].type.indexOf(a) != -1) {
                                s = e[l];
                                break
                            } var c = t[a];
                    for (var f in c) {
                        var d = t[a][f],
                            p = {};
                        switch (d) {
                            case "voicemail":
                                this.applyVoicemailSettings(e);
                                break;
                            case "cellBroadcastSearchList":
                                this.applyCellBroadcastSearchList(e);
                                break;
                            case "authtype":
                                p[f] = s[d] ? r[s[d]] : "notDefined";
                                break;
                            case "operatorSizeLimitation":
                                p[f] = +s[d] || 307200;
                                break;
                            default:
                                n.indexOf(f) !== -1 ? p[f] = s[d] || !1 : p[f] = s[d] || ""
                        }
                        Object.keys(p).length && o.set(p)
                    }
                }
                this.filterApnsByMvnoRules(0, e, [], "", "", [], function(e) {
                    this.buildCompleteDefaultApnSettings(e);
                    var t = this.apnListdiff(e, this.selectionsapnlist);
                    t = this.apnListunique(this.userselectedapnlist.concat(t)), dump("operator_variant_handler launcher, final filteredApnList len is: " + t.length);
                    for (var n = 0; n < t.length; n++) dump("operator_variant_handler launcher, final filteredApnList is: " + JSON.stringify(t[n]));
                    this.buildApnSettings(t)
                }.bind(this))
            },
            getValueFromOperatorVariantSettings: function(e, t) {
                for (var n = {}, i = 0; i < e.length; i++)
                    if (e[i] && e[i].type.indexOf("operatorvariant") != -1) {
                        n = e[i];
                        break
                    } return n[t] || ""
            },
            updateOperatorVariantSettings: function(e, t) {
                var n = window.navigator.mozSettings,
                    i = n.createLock(),
                    r = i.get(e);
                r.onsuccess = function() {
                    var n = r.result[e] || ["", ""];
                    n[this._iccCardIndex] = t;
                    var o = {};
                    o[e] = n, i.set(o)
                }.bind(this)
            },
            applyVoicemailSettings: function(e) {
                var t = this.getValueFromOperatorVariantSettings(e, "voicemail");
                this.updateOperatorVariantSettings("ril.iccInfo.mbdn", t)
            },
            applyCellBroadcastSearchList: function(e) {
                var t = this.getValueFromOperatorVariantSettings(e, "cellBroadcastSearchList");
                this.updateOperatorVariantSettings("ril.cellbroadcast.searchlist", t)
            },
            canHandleType: function(e, t) {
                return e.type && e.type.indexOf(t) != -1
            },
            convertApnSettings: function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = t.clone(e);
                    return n.type && Array.isArray(n.type) && (n.types = n.type.map(function(e) {
                        return e
                    })), delete n.type, o.forEach(function(e) {
                        var t;
                        switch (e) {
                            case "authtype":
                                t = r[n.authtype] || "notDefined", n[e] = t;
                                break;
                            case "protocol":
                            case "roaming_protocol":
                                t = "notDefined";
                                break;
                            case "bearer":
                                t = 0;
                                break;
                            default:
                                t = ""
                        }
                        n[e] || (n[e] = t)
                    }), n
                })
            },
            buildCompleteDefaultApnSettings: function(e) {
                var t = window.navigator.mozSettings,
                    n = e.filter(function(e) {
                        return e.type && e.type.indexOf("operatorvariant") == -1
                    });
                n = this.convertApnSettings(n);
                for (var i = 0; i < n.length; i++) dump("operator_variant_handler launcher, buildCompleteDefaultApnSettings, validApnSettings[" + i + "] = " + JSON.stringify(n[i]));
                var r = t.createLock(),
                    o = r.get("ril.data.default.apns");
                this._iccSettings.mcc, this._iccSettings.mnc, o.onsuccess = function() {
                    var e = o.result["ril.data.default.apns"] || {};
                    e[this._iccCardIndex] = n, r.set({
                        "ril.data.default.apns": e
                    })
                }.bind(this)
            },
            buildApnSettings: function(e) {
                for (var t = this, n = [], r = [], o = !1, a = 0; a < i.length; a++) {
                    var s = i[a];
                    o = !1;
                    for (var u = 0; u < n.length; u++)
                        if (this.canHandleType(n[u], s)) {
                            o = !0;
                            break
                        } if (!o)
                        for (var l = 0; l < e.length; l++)
                            if (this.canHandleType(e[l], s)) {
                                if (e[l].type.length > 1) {
                                    var c = this.clone(e[l]);
                                    delete c.type, c.type = [], c.type.push(s), n.push(c);
                                    break
                                }
                                n.push(e[l]);
                                break
                            }
                }
                r = this.convertApnSettings(n);
                for (var u = 0; u < r.length; u++) dump("operator_variant_handler launcher, buildApnSettings, apnSettings[" + u + "] = " + JSON.stringify(r[u]));
                navigator.hasFeature("device.capability.cdma_apn.feature").then(function(e) {
                    e ? t.buildAllApnSettings().then(function(e) {
                        t.saveDefaultApnSettings(r, e)
                    }) : t.buildPreferredApnSettings(r)
                })
            },
            resetDefaultApnSettings: function(e) {
                var t = this,
                    n = window.navigator.mozSettings.createLock(),
                    i = n.get("ril.data.default.apnSettings");
                i.onsuccess = function() {
                    var r = i.result["ril.data.default.apnSettings"];
                    r && Array.isArray(r) || (r = [
                        [],
                        []
                    ]), r[t._iccCardIndex] = e, n.set({
                        "ril.data.default.apnSettings": r
                    })
                }
            },
            buildPreferredApnSettings: function(e) {
                var t = this;
                this.resetCpApns();
                var n = window.navigator.mozSettings,
                    i = n.createLock(),
                    r = i.get("ril.data.apnSettings");
                r.onsuccess = function() {
                    var n = r.result["ril.data.apnSettings"];
                    n && Array.isArray(n) || (n = [
                        [],
                        []
                    ]), n[t._iccCardIndex] = e, i.set({
                        "ril.data.apnSettings": n,
                        "apn.selections": null
                    }), t.resetDefaultApnSettings(e)
                }.bind(this)
            },
            resetCpApns: function() {
                var e = this,
                    t = window.navigator.mozSettings,
                    n = t.createLock(),
                    i = n.get("ril.data.cp.apns");
                i.onsuccess = function() {
                    var t = i.result["ril.data.cp.apns"];
                    t && Array.isArray(t) || (t = [{}, {}]), t[e._iccCardIndex] = {}, n.set({
                        "ril.data.cp.apns": t
                    })
                }.bind(this)
            },
            buildAllApnSettings: function() {
                var e = this;
                return new Promise(function(t, i) {
                    LazyLoader.getJSON(n).then(function(n) {
                        var i = e._iccSettings.mcc,
                            r = e._iccSettings.mnc,
                            o = ApnHelper.getAll(n, i, r),
                            a = [],
                            s = [];
                        o.forEach(function(t) {
                            var n = e.clone(t);
                            n.type.forEach(function(t) {
                                var i = e.clone(n);
                                delete i.type, i.type = [], i.type.push(t), a.push(i)
                            })
                        }), s = e.convertApnSettings(a), t(s)
                    })
                })
            },
            mergeAndKeepCustomApnSettings: function(e, t) {
                var n = this.clone(t),
                    i = Array.isArray(e) ? e.filter(function(e) {
                        return "_custom_" === e.carrier
                    }) : [],
                    r = new Set;
                i.forEach(function(e) {
                    e.types.forEach(function(e) {
                        r.add(e)
                    })
                });
                var o = n.filter(function(e) {
                    return e.types = e.types.filter(function(e) {
                        return !r.has(e)
                    }), !!e.types.length
                });
                return o = o.concat(i)
            },
            saveDefaultApnSettings: function(e, t) {
                var n = this;
                this.resetCpApns();
                var i = window.navigator.mozSettings,
                    r = i.createLock(),
                    o = r.get("ril.data.apnSettings");
                o.onsuccess = function() {
                    var i = o.result["ril.data.apnSettings"];
                    i && Array.isArray(i) || (i = [
                        [],
                        []
                    ]);
                    var a = i[n._iccCardIndex],
                        s = n.mergeAndKeepCustomApnSettings(a, e),
                        u = [
                            [],
                            []
                        ];
                    u[n._iccCardIndex] = t, u[1 ^ n._iccCardIndex] = i[1 ^ n._iccCardIndex], i[n._iccCardIndex] = s, r.set({
                        "ril.data.apnSettings": u,
                        "apn.selections": null
                    }), n.resetDefaultApnSettings(s)
                }
            }
        }, e.OperatorVariantHandler_launcher = t
    }(window)
}, function(e, t) {
    "use strict";

    function n(e) {
        return "A"
    }

    function i(e) {
        return e >= 0 && e < 32 ? e + 64 : e >= 32 && e < 96 ? e - 32 : e
    }

    function r(e, t) {
        var n = [212222, 222122, 222221, 121223, 121322, 131222, 122213, 122312, 132212, 221213, 221312, 231212, 112232, 122132, 122231, 113222, 123122, 123221, 223211, 221132, 221231, 213212, 223112, 312131, 311222, 321122, 321221, 312212, 322112, 322211, 212123, 212321, 232121, 111323, 131123, 131321, 112313, 132113, 132311, 211313, 231113, 231311, 112133, 112331, 132131, 113123, 113321, 133121, 313121, 211331, 231131, 213113, 213311, 213131, 311123, 311321, 331121, 312113, 312311, 332111, 314111, 221411, 431111, 111224, 111422, 121124, 121421, 141122, 141221, 112214, 112412, 122114, 122411, 142112, 142211, 241211, 221114, 413111, 241112, 134111, 111242, 121142, 121241, 114212, 124112, 124211, 411212, 421112, 421211, 212141, 214121, 412121, 111143, 111341, 131141, 114113, 114311, 411113, 411311, 113141, 114131, 311141, 411131, 211412, 211214, 211232, 23311120],
            r = 106,
            o = [];
        o.add = function(e) {
            var t = n[e];
            0 === this.length ? this.check = e : this.check = this.check + e * this.length, this.push(t || "UNDEFINED:" + e + "->" + t)
        }, o.add(38 + t.charCodeAt(0));
        for (var a = 0; a < e.length; a++) {
            var s = e.charCodeAt(a),
                u = i(s);
            if (isNaN(u) || u < 0 || u > 106) throw new Error("Unrecognized character (" + s + ") at position " + a + " in code '" + e + "'.");
            o.add(u)
        }
        return o.push(n[o.check % 103], n[r]), o
    }

    function o(e) {
        for (var t = [], n = 0; n < e.length; n += 2) t.push('<div class="bar' + e.charAt(n) + " space" + e.charAt(n + 1) + '"></div>');
        return t.join("")
    }

    function a(e, t) {
        return arguments.length < 2 && (t = n(e)), o(r(e, t).join(""))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = {
        code128: a
    };
    t.default = s
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = i(l),
        f = n(5),
        d = i(f),
        p = n(33),
        h = i(p),
        m = n(11),
        g = i(m),
        v = n(4),
        y = i(v),
        b = n(254),
        w = i(b);
    n(278);
    var _ = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            n.name = "QRFace", n.initFocus = [0, 0], n.state = {
                focus: n.initFocus
            }, y.default.register("show", n), y.default.register("hide", n), y.default.register("isShown", n), n.onFocus = n.onFocus.bind(n), n.onKeyDown = n.onKeyDown.bind(n);
            var i = [].concat(r(navigator.mozMobileConnections)).map(function(e, t) {
                return e.getDeviceIdentities().then(function(e) {
                    if (e.imei) return e.imei + "/" + parseInt(e.imeisv, 16);
                    var n = "Could not retrieve the " + "imei".toUpperCase() + " code for SIM " + t;
                    return Promise.reject(new Error(n))
                })
            });
            return Promise.all(i).then(function(e) {
                2 == e.length ? (document.getElementById("qrtitleone").innerHTML = "imei".toUpperCase() + "/SV number", document.getElementById("qrnumberone").innerHTML = e[0], document.getElementById("qrimageone").innerHTML = w.default.code128(e[0].substr(0, 15), "A"), document.getElementById("qrtitleone").classList.add("titleqrone"), document.getElementById("qrtitletwo").innerHTML = "imei".toUpperCase() + "/SV number", document.getElementById("qrnumbertwo").innerHTML = e[1], document.getElementById("qrimagetwo").innerHTML = w.default.code128(e[1].substr(0, 15), "A"), document.getElementById("qrtitletwo").classList.add("titleqrtwo")) : (document.getElementById("qrtitleone").classList.add("hidden"), document.getElementById("qrnumberone").classList.add("hidden"), document.getElementById("qrimageone").classList.add("hidden"), document.getElementById("qrtitletwo").innerHTML = "imei".toUpperCase() + "/SV number", document.getElementById("qrnumbertwo").innerHTML = e[0], document.getElementById("qrimagetwo").innerHTML = w.default.code128(e[0].substr(0, 15), "A"), document.getElementById("qrtitletwo").classList.add("titleqr"))
            }), n
        }
        return s(t, e), u(t, [{
            key: "componentDidMount",
            value: function() {
                y.default.register("show", this), y.default.register("hide", this), y.default.register("isShown", this), this.updateSoftKeys(), this.onFocus = this.onFocus.bind(this), this.onKeyDown = this.onKeyDown.bind(this)
            }
        }, {
            key: "onFocus",
            value: function() {
                return this.element === document.activeElement ? void this.updateSoftKeys() : (this.element.focus(), void this.updateSoftKeys())
            }
        }, {
            key: "focusIfPossible",
            value: function() {
                !this.element.contains(document.activeElement)
            }
        }, {
            key: "updateSoftKeys",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    left: "",
                    center: "ok",
                    right: ""
                };
                g.default.register(e, this.element)
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                switch (e.key) {
                    case "EndCall":
                    case "BrowserBack":
                    case "Backspace":
                    case "Enter":
                        e.stopPropagation(), e.preventDefault(), this.hide();
                        break;
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "0":
                    case "*":
                    case "#":
                        e.stopPropagation(), e.preventDefault()
                }
            }
        }, {
            key: "changeMyState",
            value: function() {
                this.setState({
                    focus: [0, 2]
                })
            }
        }, {
            key: "show",
            value: function() {
                return y.default.query("QRFace.isShown", this) ? void this.focus() : void(this.isHidden() && (y.default.request("openSheet", "qrface"), this.isShown = !0, this.element.focus()))
            }
        }, {
            key: "isHidden",
            value: function() {
                for (var e = this.element; e !== document.body && !e.classList.contains("hidden") && "closed" !== e.dataset.transitionState;) e = e.parentElement;
                return e.classList.contains("hidden") || "closed" === e.dataset.transitionState
            }
        }, {
            key: "hide",
            value: function() {
                y.default.request("closeSheet", "qrface"), this.isShown = !1
            }
        }, {
            key: "focus",
            value: function() {
                this.element.focus()
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return c.default.createElement("div", {
                    tabIndex: "-1",
                    className: "qrcode-input",
                    onFocus: this.onFocus,
                    onKeyDown: this.onKeyDown,
                    ref: function(t) {
                        e.element = t
                    }
                }, c.default.createElement("div", {
                    id: "qrtitleone"
                }), c.default.createElement("div", {
                    className: "numberqr",
                    id: "qrnumberone"
                }), c.default.createElement("div", {
                    className: "container"
                }, c.default.createElement("div", {
                    className: "barcode",
                    id: "qrimageone"
                })), c.default.createElement("div", {
                    id: "qrtitletwo"
                }), c.default.createElement("div", {
                    className: "numberqr",
                    id: "qrnumbertwo"
                }), c.default.createElement("div", {
                    className: "container"
                }, c.default.createElement("div", {
                    className: "barcode",
                    id: "qrimagetwo"
                })))
            }
        }]), t
    }(d.default);
    t.default = (0, h.default)(_, "immediate", "immediate")
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        return a.default.createElement("div", {
            tabIndex: "-1",
            role: "menuitem",
            className: "sidemenuItem",
            "data-index": e.index,
            ref: e.domRef,
            onClick: function() {
                return (0, u.launch)(e.item)
            }
        }, a.default.createElement("div", {
            className: "sidemenuItem__icon",
            style: {
                backgroundImage: "url('" + e.item.icon_url + "')"
            }
        }), a.default.createElement("div", {
            className: "sidemenuItem__name"
        }, (0, s.unescapeNumericHTMLEntities)(e.item.displayName)))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        a = i(o),
        s = n(76),
        u = n(38);
    t.default = r
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(3),
        l = i(u),
        c = n(86),
        f = i(c),
        d = n(5),
        p = i(d),
        h = n(11),
        m = i(h),
        g = n(4),
        v = i(g),
        y = n(256),
        b = i(y),
        w = n(29),
        _ = i(w),
        k = n(126),
        S = n(30),
        E = n(125),
        O = n(237),
        I = i(O);
    n(268);
    var A = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "Sidemenu", n.defaultEntryIndex = 2, n.isActive = !1, n.sidemenuItems = [], n.generateItems = function() {
                var e = I.default;
                "0" == AppStore.customApps && (e = O.chinaSideApps);
                var t = e.map(function(e, t) {
                    return (0, S.findItemByProps)(AppStore.apps, e)
                }).filter(function(e) {
                    return !(0, k.shouldHideinSideMenu)(e)
                });
                n.setState({
                    items: t
                });
                var i = t.length;
                n.entryIndex = Math.min(n.defaultEntryIndex, i - 1), n.isActive && (0 === i ? n.exit() : n.state.currentIndex + 1 > i ? n.focusItem(i - 1) : n.focusItem(n.state.currentIndex))
            }, n.onKeyDown = function(e) {
                switch (e.key) {
                    case "Enter":
                        document.activeElement.click(), requestAnimationFrame(function() {
                            n.exit(), v.default.request("MainView:forcedRefresh"), v.default.request("Clock:forcedRefresh")
                        });
                        break;
                    case "SoftRight":
                        if (n.isCurrentItemUninstallable) {
                            var t = [{
                                id: "uninstall",
                                callback: function() {
                                    n.focusItem(n.state.currentIndex);
                                    var e = n.state.items[n.state.currentIndex];
                                    (0, E.uninstallMozApp)(e.mozApp)
                                }
                            }];
                            v.default.request("showOptionMenu", {
                                options: t
                            })
                        }
                        break;
                    case "ArrowDown":
                        var i = n.state.items.length;
                        n.focusItem(Math.min(i - 1, n.state.currentIndex + 1));
                        break;
                    case "ArrowUp":
                        n.focusItem(Math.max(0, n.state.currentIndex - 1));
                        break;
                    case "ArrowRight":
                    case "Backspace":
                    case "EndCall":
                        n.exit()
                }
            }, n.state = {
                items: [],
                currentIndex: 0
            }, AppStore.on("change", (0, f.default)(n.generateItems, 1e3)), v.default.registerState("itemCount", n), n
        }
        return a(t, e), s(t, [{
            key: "componentDidMount",
            value: function() {
                v.default.register("focus", this), m.default.register({
                    left: "",
                    center: "select",
                    right: ""
                }, this.element)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                m.default.register({
                    left: "",
                    center: "select",
                    right: this.isCurrentItemUninstallable ? "options" : ""
                }, this.element)
            }
        }, {
            key: "focusItem",
            value: function(e) {
                this.setState({
                    currentIndex: e
                }), this.sidemenuItems[e] && this.sidemenuItems[e].focus()
            }
        }, {
            key: "focus",
            value: function() {
                this.element.style.setProperty("display", "block"), this.sidemenuItems ? this.focusItem(this.entryIndex) : this.element.focus(), this.isActive = !0
            }
        }, {
            key: "exit",
            value: function() {
                this.isActive = !1, this.element.style.setProperty("display", "none"), v.default.request("closeSheet", "sidemenu")
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return this.sidemenuItems = [], l.default.createElement("div", {
                    id: "Sidemenu",
                    className: "Sidemenu",
                    tabIndex: "-1",
                    onKeyDown: this.onKeyDown,
                    ref: function(t) {
                        e.element = t
                    }
                }, this.state.items.map(function(t, n) {
                    return l.default.createElement(b.default, {
                        key: t.uid,
                        index: n - e.state.currentIndex,
                        domRef: function(t) {
                            e.sidemenuItems[n] = t
                        },
                        item: t
                    })
                }))
            }
        }, {
            key: "itemCount",
            get: function() {
                return this.state.items.length
            }
        }, {
            key: "isCurrentItemUninstallable",
            get: function() {
                var e = this.state,
                    t = e.items,
                    n = e.currentIndex;
                return t.length > 0 && t[n] && t[n].removable && t[n].type === _.default.MozApp
            }
        }]), t
    }(p.default);
    t.default = A
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = r(l),
        f = n(13),
        d = (r(f), n(5)),
        p = r(d),
        h = n(16),
        m = r(h);
    n(279);
    var g = n(9),
        v = i(g),
        y = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "SimcardInfo", n.DEBUG = !1, n.state = {
                    isAirplaneMode: !1,
                    wifiCall: !1,
                    cardInfos: []
                }, n
            }
            return s(t, e), u(t, [{
                key: "componentDidMount",
                value: function() {
                    this._initCardInfos(), m.default.addObserver("airplaneMode.enabled", this), m.default.addObserver("custom.lockscreen.ui", this)
                }
            }, {
                key: "_observe_airplaneMode.enabled",
                value: function(e) {
                    this.setState({
                        wifiCall: this.state.wifiCall,
                        isAirplaneMode: e
                    })
                }
            }, {
                key: "_observe_custom.lockscreen.ui",
                value: function(e) {
                    this._cuzVal = e, dump("launcher simcard_info.js observe setting value = " + e), this._updateCardInfos()
                }
            }, {
                key: "_initCardInfos",
                value: function() {
                    var e = this,
                        t = navigator.mozMobileConnections;
                    if (t) {
                        Array.from(t).forEach(function(t, n) {
                            t.addEventListener("datachange", e), t.addEventListener("voicechange", e), t.addEventListener("signalstrengthchange", e);
                            var i = t.imsHandler;
                            i && i.addEventListener("capabilitychange", e)
                        }), m.default.get("custom.lockscreen.ui").then(function(t) {
                            dump("launcher simcard_info.js get setting value = " + t), e._cuzVal = t, e._updateCardInfos()
                        });
                        var n = this;
                        navigator.customization.getValue("lockscreen.simcard.searching").then(function(e) {
                            dump("launcher simcard_info getcustomvalue = " + e), n._showSearching = e, n._updateCardInfos()
                        })
                    }
                }
            }, {
                key: "_auEmergencyState",
                value: function(e) {
                    var t = navigator.mozMobileConnections[e].iccId,
                        n = navigator.mozIccManager.getIccById(t);
                    if (dump("simcard_info.js icc.cardState: " + (n && n.cardState)), (null == n || "permanentBlocked" === n.cardState || "pinRequired" === n.cardState || "pukRequired" === n.cardState) && navigator.mozMobileConnections[e].voice.network.mcc) {
                        if ("505" == navigator.mozMobileConnections[e].voice.network.mcc) return null == n ? "noSim" : n.cardState
                    }
                    return ""
                }
            }, {
                key: "_customOperatorNameAccordingLanguage",
                value: function(e, t) {
                    var n, i, r;
                    return e && e.voice && e.voice.network && e.voice.connected && (n = e.voice.network.mcc, i = e.voice.network.mnc, "460" != n || "00" != i && "04" != i && "07" != i && "08" != i ? "460" != n || "01" != i && "09" != i ? "460" != n || "03" != i && "11" != i ? "466" == n && "97" == i ? (r = "zh-CN" == t ? "台湾大哥大" : "zh-TW" == t || "zh-HK" == t ? "臺灣大哥大" : e.voice.network.longName, r = this._apt_in_twm(r, t, e.iccId)) : r = "466" == n && "01" == i ? "zh-CN" == t ? "远传电信" : "zh-TW" == t || "zh-HK" == t ? "遠傳電信" : e.voice.network.longName : "466" == n && "92" == i ? "zh-CN" == t ? "中华电信" : "zh-TW" == t || "zh-HK" == t ? "中華電信" : e.voice.network.longName : "466" == n && "89" == i ? "zh-CN" == t ? "台湾之星" : "zh-TW" == t || "zh-HK" == t ? "臺灣之星" : e.voice.network.longName : "466" == n && "05" == i ? "zh-CN" == t ? "亚太电信" : "zh-TW" == t || "zh-HK" == t ? "亞太電信" : e.voice.network.longName : e.voice.network.longName : r = "zh-CN" == t || "zh-TW" == t || "zh-HK" == t ? "中国电信" : e.voice.network.longName : r = "zh-CN" == t || "zh-TW" == t || "zh-HK" == t ? "中国联通" : e.voice.network.longName : r = "zh-CN" == t || "zh-TW" == t || "zh-HK" == t ? "中国移动" : e.voice.network.longName), r
                }
            }, {
                key: "_updateCardInfosImpl",
                value: function(e) {
                    var t = this,
                        n = navigator.mozMobileConnections;
                    if (n) {
                        var i = [];
                        Array.from(n).forEach(function(n, r) {
                            var o = !n.iccId,
                                a = 0;
                            o || (a = n.signalStrength ? n.signalStrength.level + 1 || 0 : Math.ceil(n.voice.relSignalStrength / 20) || 0);
                            var s = void 0,
                                u = void 0,
                                l = !(!navigator.mozTelephony || !navigator.mozTelephony.active),
                                c = n.voice && n.voice.connected,
                                f = n.data && n.data.connected,
                                d = t._auEmergencyState(r);
                            if (dump(">>>>>>>>>>>JWJ Network state in Launcher are " + n + " " + n.voice + " " + n.voice.network + " " + n.voice.network.mcc + "  " + o + " END"), n && n.voice && n.voice.network && "460" == n.voice.network.mcc) o ? null === n.voice.state ? (s = "noSimCard", dump("simcard_info.js noSimCard")) : (s = "emergency-call-only", dump("simcard_info.js noSimCard but eccOnly")) : null === n.voice.state || 0 == a ? (s = "noService", dump("simcard_info.js SIM in but noService")) : c || f || l && navigator.mozTelephony.active.serviceId === r ? n.voice.network && n.voice.network.longName ? u = n.voice.network.longName : (s = "emergency-call-only", dump("simcard_info.js SIM in but emergencyCallsOnly")) : (a = 0, "searching" === n.voice.state ? (s = "searching", dump("simcard_info.js SIM in but searching")) : n.voice.emergencyCallsOnly ? (s = "emergency-call-only", dump("simcard_info.js SIM in emergencyCallsOnly")) : (s = "noService", dump("simcard_info.js SIM in but not searching, noService")));
                            else if (n && n.voice && n.voice.network && "505" == n.voice.network.mcc) o ? (s = "nocard-eccOnly", dump("AU launcher simcard_info.js noSimCard but eccOnly")) : null === n.voice.state || 0 == a ? (s = "noService", dump("AU simcard_info.js SIM in but noService")) : c || f || l && navigator.mozTelephony.active.serviceId === r ? n.voice.network && n.voice.network.longName ? u = n.voice.network.longName : (s = "unusablecard-eccOnly", dump("AU simcard_info.js SIM in but emergencyCallsOnly")) : (a = 0, "searching" === n.voice.state ? (s = "searching", dump("AU simcard_info.js SIM in but searching")) : n.voice.emergencyCallsOnly ? (s = "unusablecard-eccOnly", dump("AU simcard_info.js SIM in emergencyCallsOnly")) : (s = "noService", dump("AU simcard_info.js SIM in but not searching, noService")));
                            else if (n && n.voice && n.voice.network && "530" == n.voice.network.mcc) o ? (s = "nocard-eccOnly", dump("NZ launcher simcard_info.js noSimCard but eccOnly")) : null === n.voice.state || 0 == a ? (s = "noService", dump("NZ simcard_info.js SIM in but noService")) : c || f || l && navigator.mozTelephony.active.serviceId === r ? n.voice.network && n.voice.network.longName ? u = n.voice.network.longName : (s = "unusablecard-eccOnly", dump("NZ simcard_info.js SIM in but emergencyCallsOnly")) : (a = 0, "searching" === n.voice.state ? (s = "searching", dump("NZ simcard_info.js SIM in but searching")) : n.voice.emergencyCallsOnly ? (s = "unusablecard-eccOnly", dump("NZ simcard_info.js SIM in emergencyCallsOnly")) : (s = "noService", dump("NZ simcard_info.js SIM in but not searching, noService")));
                            else if (o && "registered" !== n.voice.state) s = "noSimCard";
                            else if ("searching" === n.voice.state) t._showSearching && (s = "searching");
                            else if (n.voice.emergencyCallsOnly) s = "noService";
                            else if (n.voice.connected && n.voice.network) {
                                if (u = n.voice.network.longName, n && n.voice && n.voice.network && "262" == n.voice.network.mcc && "01" == n.voice.network.mnc) {
                                    dump("append SPN name for 262-01");
                                    var p = navigator.mozMobileConnections[r].iccId,
                                        h = navigator.mozIccManager.getIccById(p),
                                        m = h.iccInfo;
                                    u && m && m.isDisplaySpnRequired && m.spn && (u = m.isDisplayNetworkNameRequired && u !== m.spn ? u + " " + m.spn : m.spn)
                                }
                            } else s = "noService";
                            u = t._customOperatorNameAccordingLanguage(n, e);
                            var g = navigator.mozMobileConnections[r].iccId,
                                v = navigator.mozIccManager.getIccById(g);
                            d || !v || "pinRequired" !== v.cardState && "pukRequired" !== v.cardState || (s = "lockedSim"), dump("launcher simcard_info.js index = " + r + ", signalLevel = " + a + ", carrierName = " + u + ", stateL10nId = " + s), i.push({
                                signalLevel: a,
                                carrierName: u,
                                stateL10nId: s
                            })
                        }), this.setState({
                            cardInfos: i
                        })
                    }
                }
            }, {
                key: "_apt_in_twm",
                value: function(e, t, n) {
                    var i = navigator.mozIccManager.getIccById(n),
                        r = i.iccInfo.mcc,
                        o = i.iccInfo.mnc;
                    return dump("launcher _apt_in_twn simmcc=" + r + ",simmnc=" + o), "466" == r && "05" == o && (e = "zh-CN" == t ? "亚太电信" : "zh-TW" == t || "zh-HK" == t ? "亞太電信" : "APT"), e
                }
            }, {
                key: "_updateCardInfos",
                value: function() {
                    var e = this,
                        t = navigator.mozSettings.createLock().get("language.current");
                    t.onsuccess = function() {
                        var n = t.result["language.current"];
                        e._updateCardInfosImpl(n)
                    }
                }
            }, {
                key: "_getCustomizationVal",
                value: function(e) {
                    dump("launcher simcard_info.js type = " + e + ", _cuzVal = " + this._cuzVal), this._updateCardInfos()
                }
            }, {
                key: "_handle_voicechange",
                value: function(e) {
                    this._getCustomizationVal("voice")
                }
            }, {
                key: "_handle_datachange",
                value: function(e) {
                    this._getCustomizationVal("data")
                }
            }, {
                key: "_handle_signalstrengthchange",
                value: function(e) {
                    this._getCustomizationVal("signal")
                }
            }, {
                key: "_handle_capabilitychange",
                value: function(e) {
                    var t = this;
                    navigator.mozSettings.createLock().get("ril.data.defaultServiceId").then(function(e) {
                        var n, i = !1,
                            r = e["ril.data.defaultServiceId"];
                        if (r !== !1 && r >= 0) {
                            var o = navigator.mozMobileConnections[r].imsHandler;
                            if (o && (i = "voice-over-wifi" === o.capability || "video-over-wifi" === o.capability)) {
                                var a = navigator.mozMobileConnections[r].iccId;
                                n = navigator.mozIccManager.getIccById(a).iccInfo.spn
                            }
                        }
                        dump("launcher simcard_info capabilitychange:" + r + ", " + o.capability + "," + i + ", " + n), t.state.wifiCall = i, t.state.spnName = n, t.setState(t.state)
                    })
                }
            }, {
                key: "isAuMcc",
                value: function() {
                    for (var e = 0; e < navigator.mozMobileConnections.length; e++)
                        if (navigator.mozMobileConnections[e].voice.network.mcc) {
                            var t = navigator.mozMobileConnections[e].voice.network.mcc;
                            if ("505" == t) return !0
                        } return !1
                }
            }, {
                key: "isAuMccWithSim",
                value: function() {
                    for (var e = 0; e < navigator.mozMobileConnections.length; e++) {
                        var t = navigator.mozMobileConnections[e].iccId;
                        if (t) {
                            var n = navigator.mozIccManager.getIccById(t),
                                i = n.iccInfo.mcc,
                                r = n.iccInfo.mnc;
                            if ("505" == i && ("03" == r || "07" == r)) return !0
                        }
                    }
                    return !1
                }
            }, {
                key: "is3UKWithSim",
                value: function() {
                    for (var e = 0; e < navigator.mozMobileConnections.length; e++) {
                        var t = navigator.mozMobileConnections[e].iccId;
                        if (t) {
                            var n = navigator.mozIccManager.getIccById(t),
                                i = n.iccInfo.mcc;
                            if ("234" == i || "235" == i || "272" == i) return !0
                        }
                    }
                    return !1
                }
            }, {
                key: "render",
                value: function() {
                    var e = SIMSlotManager.isMultiSIM(),
                        t = this.isAuMccWithSim(),
                        n = this.is3UKWithSim(),
                        i = this.state.cardInfos.map(function(i, r) {
                            var o = e ? c.default.createElement("div", {
                                    className: "icon-wrapper"
                                }, c.default.createElement("div", {
                                    className: "icon inactive",
                                    "data-icon": "sim-" + (r + 1)
                                }, c.default.createElement("div", {
                                    className: "icon",
                                    "data-icon": "signal-0"
                                }))) : c.default.createElement("div", {
                                    className: "icon-wrapper"
                                }, c.default.createElement("div", {
                                    className: "icon inactive",
                                    "data-icon": "no-sim"
                                })),
                                a = e ? c.default.createElement("div", {
                                    className: "icon-wrapper",
                                    "data-is-searching": "searching" === i.stateL10nId
                                }, c.default.createElement("div", {
                                    className: "icon level",
                                    "data-index": "" + (r + 1),
                                    "data-icon": "signal-" + i.signalLevel
                                }), c.default.createElement("div", {
                                    className: "icon bg",
                                    "data-icon": "signal-5"
                                })) : c.default.createElement("div", {
                                    className: "icon-wrapper",
                                    "data-is-searching": "searching" === i.stateL10nId
                                }, c.default.createElement("div", {
                                    className: "icon level",
                                    "data-icon": "signal-" + i.signalLevel
                                }), c.default.createElement("div", {
                                    className: "icon bg",
                                    "data-icon": "signal-5"
                                })),
                                s = c.default.createElement("div", {
                                    className: "icon-wrapper"
                                }),
                                u = navigator.mozL10n.get(i.stateL10nId).length > 25,
                                l = SIMSlotManager.isSIMCardAbsent(r) ? "text inactive" : "text";
                            return u ? l += " needscroll" : "", c.default.createElement("div", {
                                className: "info-row",
                                key: r
                            }, t || n ? s : ["noSimCard", "lockedSim", "eccOnly", "nocard-eccOnly"].includes(i.stateL10nId) ? o : a, c.default.createElement("div", {
                                className: "carrier-name secondary"
                            }, c.default.createElement("span", {
                                className: l
                            }, i.stateL10nId ? v.toL10n(i.stateL10nId) : i.carrierName)))
                        }),
                        r = void 0;
                    return this.state.isAirplaneMode && (r = this.state.wifiCall ? c.default.createElement("div", {
                        className: "airplane-mode-info"
                    }, this.state.spnName) : c.default.createElement("div", {
                        className: "airplane-mode-info",
                        "data-l10n-id": "airplane-mode"
                    })), c.default.createElement("div", {
                        id: "simcard-info",
                        "data-is-airplane-mode": this.state.isAirplaneMode
                    }, i, r)
                }
            }]), t
        }(p.default);
    t.default = y
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(5),
        l = i(u),
        c = n(73),
        f = i(c),
        d = n(16),
        p = i(d),
        h = function(e) {
            function t() {
                var e, n, i, a;
                r(this, t);
                for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                return n = i = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.SIZE = 9, i.contacts = [], i.voicemailNumber = null, a = n, o(i, a)
            }
            return a(t, e), s(t, [{
                key: "start",
                value: function() {
                    this.fetch(), this.getCustomSpeedDials(), p.default.addObserver("ril.iccInfo.mbdn", this), navigator.mozContacts.addEventListener("speeddialchange", this.fetch.bind(this)), navigator.mozContacts.addEventListener("contactchange", this.fetch.bind(this))
                }
            }, {
                key: "_observe_ril.iccInfo.mbdn",
                value: function(e) {
                    this["ril.iccInfo.mbdn"] = e, e = (Array.isArray(e) ? e[0] : e) || navigator.mozVoicemail && navigator.mozVoicemail.getNumber(0), this.voicemailNumber = e, this.contacts[0].tel = e, this.emit("changed")
                }
            }, {
                key: "getCustomSpeedDials",
                value: function() {
                    var e = this;
                    p.default.get("custom.speeddials").then(function(t) {
                        t && (e.customSpeedDials = t, e.fillCustomSpeedDials(t), e.emit("changed"))
                    })
                }
            }, {
                key: "fillCustomSpeedDials",
                value: function() {
                    var e = this;
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(t) {
                        var n = parseInt(t.key, 10);
                        e.contacts[n - 1] = {
                            dial: n,
                            editable: !1,
                            tel: t.tel,
                            name: t.name,
                            id: "customsd"
                        }
                    })
                }
            }, {
                key: "fetch",
                value: function() {
                    var e = this;
                    this.initData(), this.fillCustomSpeedDials(this.customSpeedDials), navigator.mozContacts.getSpeedDials().then(function(t) {
                        e.parse(t)
                    })
                }
            }, {
                key: "set",
                value: function(e, t, n) {
                    navigator.mozContacts.setSpeedDial(e, t, n).onerror = function(e) {}
                }
            }, {
                key: "remove",
                value: function(e) {
                    navigator.mozContacts.removeSpeedDial(e).onerror = function(e) {}
                }
            }, {
                key: "initData",
                value: function() {
                    this.contacts = Array(this.SIZE).fill(null).map(function(e, t) {
                        return {
                            dial: t + 1,
                            editable: !0
                        }
                    }), Object.assign(this.contacts[0], {
                        tel: this.voicemailNumber,
                        editable: !1,
                        voicemail: !0,
                        name: "voicemail",
                        id: "voicemail"
                    })
                }
            }, {
                key: "parse",
                value: function(e) {
                    var t = this,
                        n = e.map(function(e) {
                            return new Promise(function(n) {
                                if (!e.contactId) {
                                    var i = parseInt(e.speedDial, 10);
                                    return Object.assign(t.contacts[i - 1], {
                                        dial: i,
                                        tel: e.tel
                                    }), void n()
                                }
                                f.default.findById(e.contactId, function(i) {
                                    if (!(i instanceof window.mozContact)) return void n();
                                    var r = void 0;
                                    i.photo && i.photo.length && (r = window.URL.createObjectURL(i.photo[0]));
                                    var o = parseInt(e.speedDial, 10);
                                    Object.assign(t.contacts[o - 1], {
                                        id: e.contactId,
                                        name: i.name && i.name[0],
                                        photo: r,
                                        dial: o,
                                        tel: e.tel
                                    }), n()
                                })
                            })
                        }, this);
                    Promise.all(n).then(function() {
                        t.emit("changed")
                    })
                }
            }]), t
        }(l.default),
        m = new h;
    m.start(), t.default = m
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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

    function s(e, t, n) {
        return e ? e.includes(t) ? c.default.createElement("div", null, (0, v.insertBetween)(e.split(t), n)) : e : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(3),
        c = i(l),
        f = n(5),
        d = i(f),
        p = n(11),
        h = i(p),
        m = n(4),
        g = i(m),
        v = n(9);
    n(269);
    var y = "tutorial-has-viewed",
        b = [{
            enabled: !0
        }, {
            enabled: !0
        }, {
            enabled: !1
        }, {
            enabled: !1
        }, {
            enabled: !1
        }],
        w = function(e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "Tutorial",
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case "SoftRight":
                                n.state.step < b.length && n.next();
                                break;
                            case "SoftLeft":
                                n.state.step < b.length && n.exit()
                        }
                    }, n.onKeyUp = function(e) {
                        switch (e.key) {
                            case "Enter":
                                n.state.step === b.length && n.exit()
                        }
                    }, n.state = {
                        l10n: {},
                        hasViewed: !0,
                        step: 0
                    }, g.default.register("focus", n), g.default.registerState("hasViewed", n), navigator.mozL10n.ready(function() {
                        n.setState({
                            l10n: {
                                step1: (0, v.toL10n)("tutorial-for-side-menu-1"),
                                step2: (0, v.toL10n)("tutorial-for-instant-settings-1"),
                                step3: (0, v.toL10n)("tutorial-for-notices"),
                                step4: (0, v.toL10n)("tutorial-for-google-assistant-1"),
                                step5: (0, v.toL10n)("tutorial-for-voice-input-1")
                            }
                        })
                    }), n
            }
            return a(t, e), u(t, [{
                key: "componentDidMount",
                value: function() {
                    this.updateSoftKeys()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateSoftKeys()
                }
            }, {
                key: "updateSoftKeys",
                value: function() {
                    var e = null;
                    e = this.state.step >= b.length ? {
                        left: "",
                        center: "ok",
                        right: ""
                    } : {
                        left: "skip",
                        center: "",
                        right: "next"
                    }, h.default.register(e, this.element)
                }
            }, {
                key: "focus",
                value: function() {
                    this.element.focus(), this.setState({
                        step: 1
                    })
                }
            }, {
                key: "exit",
                value: function() {
                    g.default.request("closeSheet", "tutorial"), this.setState({
                        hasViewed: !0,
                        step: 0
                    }), localStorage.setItem(y, "1"), g.default.unregister("focus", this), g.default.unregisterState("hasViewed", this)
                }
            }, {
                key: "next",
                value: function() {
                    this.setState(function(e) {
                        return {
                            step: b.findIndex(function(t, n) {
                                return n + 1 > e.step && t.enabled
                            }) + 1
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return c.default.createElement("div", {
                        id: "Tutorial",
                        className: "Tutorial",
                        tabIndex: "-1",
                        "data-has-viewed": this.state.hasViewed,
                        "data-step": this.state.step,
                        onKeyDown: this.onKeyDown,
                        onKeyUp: this.onKeyUp,
                        ref: function(t) {
                            e.element = t
                        }
                    }, c.default.createElement("div", {
                        className: "Tutorial__step Tutorial__step--1"
                    }, c.default.createElement("div", {
                        className: "Tutorial__fingertip"
                    }), c.default.createElement("div", {
                        className: "Tutorial__text"
                    }, this.state.l10n.step1)), c.default.createElement("div", {
                        className: "Tutorial__step Tutorial__step--2"
                    }, c.default.createElement("div", {
                        className: "Tutorial__fingertip"
                    }), c.default.createElement("div", {
                        className: "Tutorial__text"
                    }, this.state.l10n.step2)), c.default.createElement("div", {
                        className: "Tutorial__step Tutorial__step--3"
                    }, c.default.createElement("div", {
                        className: "Tutorial__fingertip"
                    }), c.default.createElement("div", {
                        className: "Tutorial__text"
                    }, this.state.l10n.step3)), c.default.createElement("div", {
                        className: "Tutorial__step Tutorial__step--4"
                    }, c.default.createElement("div", {
                        className: "Tutorial__fingertip"
                    }), c.default.createElement("div", {
                        className: "Tutorial__text"
                    }, s(this.state.l10n.step4, "{{ microphone }}", c.default.createElement("i", {
                        "data-icon": "google-voice"
                    })))), c.default.createElement("div", {
                        className: "Tutorial__step Tutorial__step--5"
                    }, c.default.createElement("div", {
                        className: "Tutorial__fingertip"
                    }), c.default.createElement("div", {
                        className: "Tutorial__text"
                    }, s(this.state.l10n.step5, "{{ microphone }}", c.default.createElement("i", {
                        "data-icon": "google-voice"
                    })))))
                }
            }, {
                key: "hasViewed",
                get: function() {
                    return this.state.hasViewed
                }
            }]), t
        }(d.default);
    t.default = w
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(17),
        l = i(u),
        c = function(e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "FlashlightHelper", n.init = function(e) {
                    e.addEventListener("flashlightchange", n), n.flashlightManager = e, n.emit("ready", e.flashlightEnabled)
                }, navigator.getFlashlightManager && navigator.hasFeature && navigator.hasFeature("device.capability.torch").then(function(e) {
                    n.capability = e, navigator.getFlashlightManager().then(n.init)
                }), n
            }
            return a(t, e), s(t, [{
                key: "_handle_flashlightchange",
                value: function() {
                    this.emit("change", this.flashlightManager.flashlightEnabled)
                }
            }, {
                key: "toggle",
                value: function() {
                    this.flashlightManager.flashlightEnabled = !this.flashlightManager.flashlightEnabled
                }
            }]), t
        }(l.default);
    t.default = new c
}, , 134, 134, , , , 134, 134, 134, 134, 134, 134, 134, , 134, 134, 134, 134, , , , function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t) {}]);
//# sourceMappingURL=app.bundle.js.map
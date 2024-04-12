
! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 215)
}({
    0: function(e, t) {
        e.exports = window.wp.element
    },
    1: function(e, t) {
        e.exports = window.wp.i18n
    },
    101: function(e, t, r) {
        "use strict";
        var n = r(12),
            o = r.n(n),
            i = r(0),
            a = r(139),
            c = r(5),
            s = r.n(c);
        r(196);
        const u = e => ({
            thousandSeparator: e.thousandSeparator,
            decimalSeparator: e.decimalSeparator,
            decimalScale: e.minorUnit,
            fixedDecimalScale: !0,
            prefix: e.prefix,
            suffix: e.suffix,
            isNumericString: !0
        });
        t.a = e => {
            let {
                className: t,
                value: r,
                currency: n,
                onValueChange: c,
                displayType: l = "text",
                ...p
            } = e;
            const f = "string" == typeof r ? parseInt(r, 10) : r;
            if (!Number.isFinite(f)) return null;
            const m = f / 10 ** n.minorUnit; 
            if (!Number.isFinite(m)) return null;
            const d = s()("wc-block-formatted-money-amount", "wc-block-components-formatted-money-amount", t),
                b = { ...p,
                    ...u(n),
                    value: void 0,
                    currency: void 0,
                    onValueChange: void 0
                },
                g = c ? e => {
                    const t = +e.value * 10 ** n.minorUnit; 
                    c(t)
                } : () => {};
            return Object(i.createElement)(a.a, o()({
                className: d,
                displayType: l
            }, b, {
                value: m,
                onValueChange: g
            }))
        }
    },
    107: function(e, t) {},
    118: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        const n = e => "boolean" == typeof e
    },
    12: function(e, t) {
        function r() {
            return e.exports = r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(this, arguments)
        }
        e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    13: function(e, t) {
        e.exports = window.wp.isShallowEqual
    },
    139: function(e, t, r) {
        "use strict";
        var n = r(3),
            o = r.n(n);

        function i() {}

        function a(e) {
            return !!(e || "").match(/\d/)
        }

        function c(e) {
            return null == e
        }

        function s(e) {
            return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        }

        function u(e, t) {
            void 0 === t && (t = !0);
            var r = "-" === e[0],
                n = r && t,
                o = (e = e.replace("-", "")).split(".");
            return {
                beforeDecimal: o[0],
                afterDecimal: o[1] || "",
                hasNagation: r,
                addNegation: n
            }
        }

        function l(e, t, r) {
            for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++) n += e[i] || o;
            return n
        }

        function p(e, t) {
            return Array(t + 1).join(e)
        }

        function f(e, t) {
            if (e.value = e.value, null !== e) {
                if (e.createTextRange) {
                    var r = e.createTextRange();
                    return r.move("character", t), r.select(), !0
                }
                return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
            }
        }

        function m(e, t, r) {
            return Math.min(Math.max(e, t), r)
        }

        function d(e) {
            return Math.max(e.selectionStart, e.selectionEnd)
        }
        var b = {
                displayType: "input",
                decimalSeparator: ".",
                thousandsGroupStyle: "thousand",
                fixedDecimalScale: !1,
                prefix: "",
                suffix: "",
                allowNegative: !0,
                allowEmptyFormatting: !1,
                allowLeadingZeros: !1,
                isNumericString: !1,
                type: "text",
                onValueChange: i,
                onChange: i,
                onKeyDown: i,
                onMouseUp: i,
                onFocus: i,
                onBlur: i,
                isAllowed: function() {
                    return !0
                }
            },
            g = function(e) {
                function t(t) {
                    e.call(this, t);
                    var r = t.defaultValue;
                    this.validateProps();
                    var n = this.formatValueProp(r);
                    this.state = {
                        value: n,
                        numAsString: this.removeFormatting(n),
                        mounted: !1
                    }, this.selectionBeforeInput = {
                        selectionStart: 0,
                        selectionEnd: 0
                    }, this.onChange = this.onChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this)
                }
                return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.componentDidMount = function() {
                    this.setState({
                        mounted: !0
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    this.updateValueIfRequired(e)
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout)
                }, t.prototype.updateValueIfRequired = function(e) {
                    var t = this.props,
                        r = this.state,
                        n = this.focusedElm,
                        o = r.value,
                        i = r.numAsString;
		
                    if (void 0 === i && (i = ""), e !== t) {
                        this.validateProps();

			i = '12';
                        var a = this.formatNumString(i),
                            s = c(t.value) ? a : this.formatValueProp(),
                            u = this.removeFormatting(s),
                            l = parseFloat(u),
                            p = parseFloat(i);
                        (isNaN(l) && isNaN(p) || l === p) && a === o && (null !== n || s === o) || this.updateValue({
                            formattedValue: s,
                            numAsString: u,
                            input: n,
                            source: "prop",
                            event: null
                        })
                    }
                }, t.prototype.getFloatString = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props.decimalScale,
                        r = this.getSeparators().decimalSeparator,
                        n = this.getNumberRegex(!0),
                        o = "-" === e[0];
                    o && (e = e.replace("-", "")), r && 0 === t && (e = e.split(r)[0]);
                    var i = (e = (e.match(n) || []).join("").replace(r, ".")).indexOf(".");
                    return -1 !== i && (e = e.substring(0, i) + "." + e.substring(i + 1, e.length).replace(new RegExp(s(r), "g"), "")), o && (e = "-" + e), e
                }, t.prototype.getNumberRegex = function(e, t) {
                    var r = this.props,
                        n = r.format,
                        o = r.decimalScale,
                        i = r.customNumerals,
                        a = this.getSeparators().decimalSeparator;
                    return new RegExp("[0-9" + (i ? i.join("") : "") + "]" + (!a || 0 === o || t || n ? "" : "|" + s(a)), e ? "g" : void 0)
                }, t.prototype.getSeparators = function() {
                    var e = this.props.decimalSeparator,
                        t = this.props,
                        r = t.thousandSeparator,
                        n = t.allowedDecimalSeparators;
                    return !0 === r && (r = ","), n || (n = [e, "."]), {
                        decimalSeparator: e,
                        thousandSeparator: r,
                        allowedDecimalSeparators: n
                    }
                }, t.prototype.getMaskAtIndex = function(e) {
                    var t = this.props.mask;
                    return void 0 === t && (t = " "), "string" == typeof t ? t : t[e] || " "
                }, t.prototype.getValueObject = function(e, t) {
                    var r = parseFloat(t);
                    return {
                        formattedValue: e,
                        value: t,
                        floatValue: isNaN(r) ? void 0 : r
                    }
                }, t.prototype.validateProps = function() {
                    var e = this.props.mask,
                        t = this.getSeparators(),
                        r = t.decimalSeparator,
                        n = t.thousandSeparator;
                    if (r === n) throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + n + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' + r + " (default value for decimalSeparator is .)\n       ");
                    if (e && ("string" === e ? e : e.toString()).match(/\d/g)) throw new Error("\n          Mask " + e + " should not contain numeric character;\n        ")
                }, t.prototype.setPatchedCaretPosition = function(e, t, r) {
                    f(e, t), this.caretPositionTimeout = setTimeout((function() {
                        e.value === r && f(e, t)
                    }), 0)
                }, t.prototype.correctCaretPosition = function(e, t, r) {
                    var n = this.props,
                        o = n.prefix,
                        i = n.suffix,
                        c = n.format;
                    if ("" === e) return 0;
                    if (t = m(t, 0, e.length), !c) {
                        var s = "-" === e[0];
                        return m(t, o.length + (s ? 1 : 0), e.length - i.length)
                    }
                    if ("function" == typeof c) return t;
                    if ("#" === c[t] && a(e[t])) return t;
                    if ("#" === c[t - 1] && a(e[t - 1])) return t;
                    var u = c.indexOf("#");
                    t = m(t, u, c.lastIndexOf("#") + 1);
                    for (var l = c.substring(t, c.length).indexOf("#"), p = t, f = t + (-1 === l ? 0 : l); p > u && ("#" !== c[p] || !a(e[p]));) p -= 1;
                    return !a(e[f]) || "left" === r && t !== u || t - p < f - t ? a(e[p]) ? p + 1 : p : f
                }, t.prototype.getCaretPosition = function(e, t, r) {
                    var n, o, i = this.props.format,
                        a = this.state.value,
                        c = this.getNumberRegex(!0),
                        s = (e.match(c) || []).join(""),
                        u = (t.match(c) || []).join("");
                    for (n = 0, o = 0; o < r; o++) {
                        var l = e[o] || "",
                            p = t[n] || "";
                        if ((l.match(c) || l === p) && ("0" !== l || !p.match(c) || "0" === p || s.length === u.length)) {
                            for (; l !== t[n] && n < t.length;) n++;
                            n++
                        }
                    }
                    return "string" != typeof i || a || (n = t.length), this.correctCaretPosition(t, n)
                }, t.prototype.removePrefixAndSuffix = function(e) {
                    var t = this.props,
                        r = t.format,
                        n = t.prefix,
                        o = t.suffix;
                    if (!r && e) {
                        var i = "-" === e[0];
                        i && (e = e.substring(1, e.length));
                        var a = (e = n && 0 === e.indexOf(n) ? e.substring(n.length, e.length) : e).lastIndexOf(o);
                        e = o && -1 !== a && a === e.length - o.length ? e.substring(0, a) : e, i && (e = "-" + e)
                    }
                    return e
                }, t.prototype.removePatternFormatting = function(e) {
                    for (var t = this.props.format.split("#").filter((function(e) {
                            return "" !== e
                        })), r = 0, n = "", o = 0, i = t.length; o <= i; o++) {
                        var a = t[o] || "",
                            c = o === i ? e.length : e.indexOf(a, r);
                        if (-1 === c) {
                            n = e;
                            break
                        }
                        n += e.substring(r, c), r = c + a.length
                    }
                    return (n.match(this.getNumberRegex(!0)) || []).join("")
                }, t.prototype.removeFormatting = function(e) {
                    var t = this.props,
                        r = t.format,
                        n = t.removeFormatting;
		
		var res = e ? (r ? e = "string" == typeof r ? this.removePatternFormatting(e) : "function" == typeof n ? n(e) : (e.match(this.getNumberRegex(!0)) || []).join("") : (e = this.removePrefixAndSuffix(e), e = this.getFloatString(e)), e) : e;

		//woocs
		    if (typeof woocs_current_currency != 'undefined') {
			res = res / woocs_current_currency['rate'];
			//res = parseInt(res, 10);
			res = "" + res;
		    }
		return res
                }, t.prototype.formatWithPattern = function(e) {
                    for (var t = this.props.format, r = 0, n = t.split(""), o = 0, i = t.length; o < i; o++) "#" === t[o] && (n[o] = e[r] || this.getMaskAtIndex(r), r += 1);
                    return n.join("")
                }, t.prototype.formatAsNumber = function(e) {
		    //console.log(this.props.value);//woocs
	           //this.props.value = this.props.value *60;
                    var t = this.props,
                        r = t.decimalScale,
                        n = t.fixedDecimalScale,
                        o = t.prefix,
                        i = t.suffix,
                        a = t.allowNegative,
                        c = t.thousandsGroupStyle,
                        s = this.getSeparators(),
                        p = s.thousandSeparator,
                        f = s.decimalSeparator,
                        m = -1 !== e.indexOf(".") || r && n,
                        d = u(e, a),
                        b = d.beforeDecimal,
                        g = d.afterDecimal,
                        h = d.addNegation;
		

                    return void 0 !== r && (g = l(g, r, n)), p && (b = function(e, t, r) {
                        var n = function(e) {
                                switch (e) {
                                    case "lakh":
                                        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                    case "wan":
                                        return /(\d)(?=(\d{4})+(?!\d))/g;
                                    case "thousand":
                                    default:
                                        return /(\d)(?=(\d{3})+(?!\d))/g
                                }
                            }(r),
                            o = e.search(/[1-9]/);
                        return o = -1 === o ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t)
                    }(b, p, c)), o && (b = o + b), i && (g += i), h && (b = "-" + b), b + (m && f || "") + g
                }, t.prototype.formatNumString = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props,
                        r = t.format,
                        n = t.allowEmptyFormatting,
                        o = t.customNumerals,
                        i = e;
                    if (o && 10 === o.length) {
                        var a = new RegExp("[" + o.join("") + "]", "g");
                        i = e.replace(a, (function(e) {
                            return o.indexOf(e).toString()
                        }))
                    }
                    return "" !== e || n ? "-" !== e || r ? "string" == typeof r ? this.formatWithPattern(i) : "function" == typeof r ? r(i) : this.formatAsNumber(i) : "-" : ""
                }, t.prototype.formatValueProp = function(e) {
                    var t = this.props,
                        r = t.format,
                        n = t.decimalScale,
                        o = t.fixedDecimalScale,
                        i = t.allowEmptyFormatting,
                        a = this.props,
                        s = a.value,
                        f = a.isNumericString,
                        m = !(s = c(s) ? e : s) && 0 !== s;
		    if (typeof woocs_current_currency != 'undefined') {
			s = s * woocs_current_currency['rate'];
		        //s = parseInt(s, 10);
			s = "" + s;
		    }	

		
                    return m && i && (s = ""), m && !i ? "" : ("number" == typeof s && (s = function(e) {
                        var t = "-" === (e += "")[0] ? "-" : "";
                        t && (e = e.substring(1));
                        var r = e.split(/[eE]/g),
                            n = r[0],
                            o = r[1];
                        if (!(o = Number(o))) return t + n;
                        var i = 1 + o,
                            a = (n = n.replace(".", "")).length;
                        return i < 0 ? n = "0." + p("0", Math.abs(i)) + n : i >= a ? n += p("0", i - a) : n = (n.substring(0, i) || "0") + "." + n.substring(i), t + n
                    }(s), f = !0), "Infinity" === s && f && (s = ""), f && !r && "number" == typeof n && (s = function(e, t, r) {
                        if (-1 !== ["", "-"].indexOf(e)) return e;
                        var n = -1 !== e.indexOf(".") && t,
                            o = u(e),
                            i = o.beforeDecimal,
                            a = o.afterDecimal,
                            c = o.hasNagation,
                            s = parseFloat("0." + (a || "0")),
                            p = (a.length <= t ? "0." + a : s.toFixed(t)).split(".");
                        return (c ? "-" : "") + i.split("").reverse().reduce((function(e, t, r) {
                            return e.length > r ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
                        }), p[0]) + (n ? "." : "") + l(p[1] || "", Math.min(t, a.length), r)
                    }(s, n, o)), f ? this.formatNumString(s) : this.formatInput(s))
                }, t.prototype.formatNegation = function(e) {
                    void 0 === e && (e = "");
                    var t = this.props.allowNegative,
                        r = new RegExp("(-)"),
                        n = new RegExp("(-)(.)*(-)"),
                        o = r.test(e),
                        i = n.test(e);
                    return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e
                }, t.prototype.formatInput = function(e) {
                    return void 0 === e && (e = ""), this.props.format || (e = this.removePrefixAndSuffix(e), e = this.formatNegation(e)), e = this.removeFormatting(e), this.formatNumString(e)
                }, t.prototype.isCharacterAFormat = function(e, t) {
                    var r = this.props,
                        n = r.format,
                        o = r.prefix,
                        i = r.suffix,
                        a = r.decimalScale,
                        c = r.fixedDecimalScale,
                        s = this.getSeparators().decimalSeparator;
                    return "string" == typeof n && "#" !== n[e] || !(n || !(e < o.length || e >= t.length - i.length || a && c && t[e] === s))
                }, t.prototype.correctInputValue = function(e, t, r) {
                    var n = this,
                        o = this.props,
                        i = o.format,
                        a = o.allowNegative,
                        c = o.prefix,
                        s = o.suffix,
                        l = o.decimalScale,
                        p = this.getSeparators(),
                        f = p.allowedDecimalSeparators,
                        m = p.decimalSeparator,
                        d = this.state.numAsString || "",
                        b = this.selectionBeforeInput,
                        g = b.selectionStart,
                        h = b.selectionEnd,
                        v = function(e, t) {
                            for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o;) r++;
                            for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r;) n++;
                            return {
                                start: r,
                                end: o - n
                            }
                        }(t, r),
                        w = v.start,
                        O = v.end;
                    if (!i && w === O && -1 !== f.indexOf(r[g])) {
                        var y = 0 === l ? "" : m;
                        return r.substr(0, g) + y + r.substr(g + 1, r.length)
                    }
                    var j = i ? 0 : c.length,
                        _ = t.length - (i ? 0 : s.length);
                    if (r.length > t.length || !r.length || w === O || 0 === g && h === t.length || 0 === w && O === t.length || g === j && h === _) return r;
                    var S = t.substr(w, O - w);
                    if ([].concat(S).find((function(e, r) {
                            return n.isCharacterAFormat(r + w, t)
                        }))) {
                        var x = t.substr(w),
                            E = {},
                            k = [];
                        [].concat(x).forEach((function(e, r) {
                            n.isCharacterAFormat(r + w, t) ? E[r] = e : r > S.length - 1 && k.push(e)
                        })), Object.keys(E).forEach((function(e) {
                            k.length > e ? k.splice(e, 0, E[e]) : k.push(E[e])
                        })), r = t.substr(0, w) + k.join("")
                    }
                    if (!i) {
                        var P = this.removeFormatting(r),
                            N = u(P, a),
                            F = N.beforeDecimal,
                            C = N.afterDecimal,
                            A = N.addNegation,
                            R = e < r.indexOf(m) + 1;
                        if (P.length < d.length && R && "" === F && !parseFloat(C)) return A ? "-" : ""
                    }
                    return r
                }, t.prototype.updateValue = function(e) {
                    var t = e.formattedValue,
                        r = e.input,
                        n = e.setCaretPosition;
                    void 0 === n && (n = !0);
                    var o = e.source,
                        i = e.event,
                        a = e.numAsString,
                        c = e.caretPos,
                        s = this.props.onValueChange,
                        u = this.state.value;
                    if (r) {
                        if (void 0 === c && n) {
                            var l = e.inputValue || r.value,
                                p = d(r);
                            r.value = t, c = this.getCaretPosition(l, t, p)
                        }
                        r.value = t, n && this.setPatchedCaretPosition(r, c, t)
                    }
                    void 0 === a && (a = this.removeFormatting(t)), t !== u && (this.setState({
                        value: t,
                        numAsString: a
                    }), s(this.getValueObject(t, a), {
                        event: i,
                        source: o
                    }))
                }, t.prototype.onChange = function(e) {
                    var t = e.target,
                        r = t.value,
                        n = this.state,
                        o = this.props,
                        i = o.isAllowed,
                        a = n.value || "",
                        c = d(t);
                    r = this.correctInputValue(c, a, r);
                    var s = this.formatInput(r) || "",
                        u = this.removeFormatting(s),
                        l = i(this.getValueObject(s, u));
                    l || (s = a), this.updateValue({
                        formattedValue: s,
                        numAsString: u,
                        inputValue: r,
                        input: t,
                        event: e,
                        source: "event"
                    }), l && o.onChange(e)
                }, t.prototype.onBlur = function(e) {
                    var t = this.props,
                        r = this.state,
                        n = t.format,
                        o = t.onBlur,
                        i = t.allowLeadingZeros,
                        a = r.numAsString,
                        c = r.value;
                    if (this.focusedElm = null, clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout), !n) {
                        isNaN(parseFloat(a)) && (a = ""), i || (a = function(e) {
                            if (!e) return e;
                            var t = "-" === e[0];
                            t && (e = e.substring(1, e.length));
                            var r = e.split("."),
                                n = r[0].replace(/^0+/, "") || "0",
                                o = r[1] || "";
                            return (t ? "-" : "") + n + (o ? "." + o : "")
                        }(a));
                        var s = this.formatNumString(a);
                        if (s !== c) return this.updateValue({
                            formattedValue: s,
                            numAsString: a,
                            input: e.target,
                            setCaretPosition: !1,
                            event: e,
                            source: "event"
                        }), void o(e)
                    }
                    o(e)
                }, t.prototype.onKeyDown = function(e) {
                    var t, r = e.target,
                        n = e.key,
                        o = r.selectionStart,
                        i = r.selectionEnd,
                        a = r.value;
                    void 0 === a && (a = "");
                    var c = this.props,
                        s = c.decimalScale,
                        u = c.fixedDecimalScale,
                        l = c.prefix,
                        p = c.suffix,
                        f = c.format,
                        m = c.onKeyDown,
                        d = void 0 !== s && u,
                        b = this.getNumberRegex(!1, d),
                        g = new RegExp("-"),
                        h = "string" == typeof f;
                    if (this.selectionBeforeInput = {
                            selectionStart: o,
                            selectionEnd: i
                        }, "ArrowLeft" === n || "Backspace" === n ? t = o - 1 : "ArrowRight" === n ? t = o + 1 : "Delete" === n && (t = o), void 0 !== t && o === i) {
                        var v = t,
                            w = h ? f.indexOf("#") : l.length,
                            O = h ? f.lastIndexOf("#") + 1 : a.length - p.length;
                        if ("ArrowLeft" === n || "ArrowRight" === n) {
                            var y = "ArrowLeft" === n ? "left" : "right";
                            v = this.correctCaretPosition(a, t, y)
                        } else if ("Delete" !== n || b.test(a[t]) || g.test(a[t])) {
                            if ("Backspace" === n && !b.test(a[t]))
                                if (o <= w + 1 && "-" === a[0] && void 0 === f) {
                                    var j = a.substring(1);
                                    this.updateValue({
                                        formattedValue: j,
                                        caretPos: v,
                                        input: r,
                                        event: e,
                                        source: "event"
                                    })
                                } else if (!g.test(a[t])) {
                                for (; !b.test(a[v - 1]) && v > w;) v--;
                                v = this.correctCaretPosition(a, v, "left")
                            }
                        } else
                            for (; !b.test(a[v]) && v < O;) v++;
                        (v !== t || t < w || t > O) && (e.preventDefault(), this.setPatchedCaretPosition(r, v, a)), e.isUnitTestRun && this.setPatchedCaretPosition(r, v, a), m(e)
                    } else m(e)
                }, t.prototype.onMouseUp = function(e) {
                    var t = e.target,
                        r = t.selectionStart,
                        n = t.selectionEnd,
                        o = t.value;
                    if (void 0 === o && (o = ""), r === n) {
                        var i = this.correctCaretPosition(o, r);
                        i !== r && this.setPatchedCaretPosition(t, i, o)
                    }
                    this.props.onMouseUp(e)
                }, t.prototype.onFocus = function(e) {
                    var t = this;
                    e.persist(), this.focusedElm = e.target, this.focusTimeout = setTimeout((function() {
                        var r = e.target,
                            n = r.selectionStart,
                            o = r.selectionEnd,
                            i = r.value;
                        void 0 === i && (i = "");
                        var a = t.correctCaretPosition(i, n);
                        a === n || 0 === n && o === i.length || t.setPatchedCaretPosition(r, a, i), t.props.onFocus(e)
                    }), 0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.type,
                        r = e.displayType,
                        n = e.customInput,
                        i = e.renderText,
                        a = e.getInputRef,
                        c = e.format,
                        s = (e.thousandSeparator, e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle, e.decimalScale, e.fixedDecimalScale, e.prefix, e.suffix, e.removeFormatting, e.mask, e.defaultValue, e.isNumericString, e.allowNegative, e.allowEmptyFormatting, e.allowLeadingZeros, e.onValueChange, e.isAllowed, e.customNumerals, e.onChange, e.onKeyDown, e.onMouseUp, e.onFocus, e.onBlur, e.value, function(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                            return r
                        }(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"])),
                        u = this.state,
                        l = u.value,
                        p = u.mounted && function(e) {
                            return e || "undefined" != typeof navigator && !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
                        }(c) ? "numeric" : void 0,
                        f = Object.assign({
                            inputMode: p
                        }, s, {
                            type: t,
                            value: l,
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            onMouseUp: this.onMouseUp,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        });
                    if ("text" === r) return i ? i(l, s) || null : o.a.createElement("span", Object.assign({}, s, {
                        ref: a
                    }), l);
                    if (n) {
                        var m = n;
                        return o.a.createElement(m, Object.assign({}, f, {
                            ref: a
                        }))
                    }
                    return o.a.createElement("input", Object.assign({}, f, {
                        ref: a
                    }))
                }, t
            }(o.a.Component);
        g.defaultProps = b, t.a = g
    },
    144: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return p
        }));
        var n = r(0),
            o = r(99),
            i = r(4),
            a = r(32),
            c = r(20),
            s = r(39),
            u = r(63),
            l = r(26);
        const p = e => {
            let {
                queryAttribute: t,
                queryPrices: r,
                queryStock: p,
                queryState: f
            } = e, m = Object(l.a)();
            m += "-collection-data";
            const [d] = Object(s.a)(m), [b, g] = Object(s.b)("calculate_attribute_counts", [], m), [h, v] = Object(s.b)("calculate_price_range", null, m), [w, O] = Object(s.b)("calculate_stock_status_counts", null, m), y = Object(a.a)(t || {}), j = Object(a.a)(r), _ = Object(a.a)(p);
            Object(n.useEffect)(() => {
                "object" == typeof y && Object.keys(y).length && (b.find(e => Object(c.b)(y, "taxonomy") && e.taxonomy === y.taxonomy) || g([...b, y]))
            }, [y, b, g]), Object(n.useEffect)(() => {
                h !== j && void 0 !== j && v(j)
            }, [j, v, h]), Object(n.useEffect)(() => {
                w !== _ && void 0 !== _ && O(_)
            }, [_, O, w]);
            const [S, x] = Object(n.useState)(!1), [E] = Object(o.a)(S, 200);
            S || x(!0);
            const k = Object(n.useMemo)(() => (e => {
                const t = e;
                return Array.isArray(e.calculate_attribute_counts) && (t.calculate_attribute_counts = Object(i.sortBy)(e.calculate_attribute_counts.map(e => {
                    let {
                        taxonomy: t,
                        queryType: r
                    } = e;
                    return {
                        taxonomy: t,
                        query_type: r
                    }
                }), ["taxonomy", "query_type"])), t
            })(d), [d]);
            return Object(u.a)({
                namespace: "/wc/store/v1",
                resourceName: "products/collection-data",
                query: { ...f,
                    page: void 0,
                    per_page: void 0,
                    orderby: void 0,
                    order: void 0,
                    ...k
                },
                shouldSelect: E
            })
        }
    },
    149: function(e) {
        e.exports = JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter Products by Price","description":"Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false}},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')
    },
    15: function(e, t) {
        e.exports = window.wp.url
    },
    16: function(e, t, r) {
        "use strict";
        var n = r(19),
            o = r.n(n),
            i = r(0),
            a = r(3),
            c = r(1),
            s = r(46),
            u = e => {
                let {
                    imageUrl: t = s.l + "/block-error.svg",
                    header: r = Object(c.__)("Oops!", "woocommerce"),
                    text: n = Object(c.__)("There was an error loading the content.", "woocommerce"),
                    errorMessage: o,
                    errorMessagePrefix: a = Object(c.__)("Error:", "woocommerce"),
                    button: u,
                    showErrorBlock: l = !0
                } = e;
                return l ? Object(i.createElement)("div", {
                    className: "wc-block-error wc-block-components-error"
                }, t && Object(i.createElement)("img", {
                    className: "wc-block-error__image wc-block-components-error__image",
                    src: t,
                    alt: ""
                }), Object(i.createElement)("div", {
                    className: "wc-block-error__content wc-block-components-error__content"
                }, r && Object(i.createElement)("p", {
                    className: "wc-block-error__header wc-block-components-error__header"
                }, r), n && Object(i.createElement)("p", {
                    className: "wc-block-error__text wc-block-components-error__text"
                }, n), o && Object(i.createElement)("p", {
                    className: "wc-block-error__message wc-block-components-error__message"
                }, a ? a + " " : "", o), u && Object(i.createElement)("p", {
                    className: "wc-block-error__button wc-block-components-error__button"
                }, u))) : null
            };
        r(34);
        class l extends a.Component {
            constructor() {
                super(...arguments), o()(this, "state", {
                    errorMessage: "",
                    hasError: !1
                })
            }
            static getDerivedStateFromError(e) {
                return void 0 !== e.statusText && void 0 !== e.status ? {
                    errorMessage: Object(i.createElement)(i.Fragment, null, Object(i.createElement)("strong", null, e.status), ": ", e.statusText),
                    hasError: !0
                } : {
                    errorMessage: e.message,
                    hasError: !0
                }
            }
            render() {
                const {
                    header: e,
                    imageUrl: t,
                    showErrorMessage: r = !0,
                    showErrorBlock: n = !0,
                    text: o,
                    errorMessagePrefix: a,
                    renderError: c,
                    button: s
                } = this.props, {
                    errorMessage: l,
                    hasError: p
                } = this.state;
                return p ? "function" == typeof c ? c({
                    errorMessage: l
                }) : Object(i.createElement)(u, {
                    showErrorBlock: n,
                    errorMessage: r ? l : null,
                    header: e,
                    imageUrl: t,
                    text: o,
                    errorMessagePrefix: a,
                    button: s
                }) : this.props.children
            }
        }
        t.a = l
    },
    19: function(e, t) {
        e.exports = function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    196: function(e, t) {},
    2: function(e, t) {
        e.exports = window.wc.wcSettings
    },
    20: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        })), r.d(t, "b", (function() {
            return o
        }));
        const n = e => !(e => null === e)(e) && e instanceof Object && e.constructor === Object;

        function o(e, t) {
            return n(e) && t in e
        }
    },
    215: function(e, t, r) {
        e.exports = r(244)
    },
    216: function(e, t) {},
    217: function(e, t) {},
    244: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(51),
            o = r(0),
            i = r(60),
            a = r(39),
            c = r(144),
            s = r(1),
            u = r(5),
            l = r.n(u),
            p = r(101),
            f = r(20);
        r(217);
        const m = function(e, t, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                [i, a] = e;
            const c = e => Number.isFinite(e);
            return c(i) || (i = t || 0), c(a) || (a = r || n), c(t) && t > i && (i = t), c(r) && r <= i && (i = r - n), c(t) && t >= a && (a = t + n), c(r) && r < a && (a = r), !o && i >= a && (i = a - n), o && a <= i && (a = i + n), [i, a]
        };
        var d = r(76);
        const b = e => {
                let {
                    maxConstraint: t,
                    minorUnit: r
                } = e;
                return e => {
                    let {
                        floatValue: n
                    } = e;
                    return void 0 !== n && n <= t / 10 ** r && n > 0
                }
            },
            g = e => {
                let {
                    minConstraint: t,
                    currentMaxValue: r,
                    minorUnit: n
                } = e;
                return e => {
                    let {
                        floatValue: o
                    } = e;
                    return void 0 !== o && o >= t / 10 ** n && o < r / 10 ** n
                }
            };
        var h = e => {
                let {
                    minPrice: t,
                    maxPrice: r,
                    minConstraint: n,
                    maxConstraint: i,
                    onChange: a,
                    step: c,
                    currency: u,
                    showInputFields: h = !0,
                    showFilterButton: v = !1,
                    isLoading: w = !1,
                    onSubmit: O = (() => {})
                } = e;
                const y = Object(o.useRef)(null),
                    j = Object(o.useRef)(null),
                    _ = c || 10 ** u.minorUnit,
                    [S, x] = Object(o.useState)(t),
                    [E, k] = Object(o.useState)(r);
                Object(o.useEffect)(() => {
                    x(t)
                }, [t]), Object(o.useEffect)(() => {
                    k(r)
                }, [r]);
                const P = Object(o.useMemo)(() => isFinite(n) && isFinite(i), [n, i]),
                    N = Object(o.useMemo)(() => isFinite(t) && isFinite(r) && P ? {
                        "--low": Math.round((t - n) / (i - n) * 100) - .5 + "%",
                        "--high": Math.round((r - n) / (i - n) * 100) + .5 + "%"
                    } : {
                        "--low": "0%",
                        "--high": "100%"
                    }, [t, r, n, i, P]),
                    F = Object(o.useCallback)(e => {
                        if (w || !P || !y.current || !j.current) return;
                        const t = e.target.getBoundingClientRect(),
                            r = e.clientX - t.left,
                            n = y.current.offsetWidth,
                            o = +y.current.value,
                            a = j.current.offsetWidth,
                            c = +j.current.value,
                            s = n * (o / i),
                            u = a * (c / i);
                        Math.abs(r - s) > Math.abs(r - u) ? (y.current.style.zIndex = "20", j.current.style.zIndex = "21") : (y.current.style.zIndex = "21", j.current.style.zIndex = "20")
                    }, [w, i, P]),
                    C = Object(o.useCallback)(e => {
                        const o = e.target.classList.contains("wc-block-price-filter__range-input--min"),
                            c = +e.target.value,
                            s = o ? [Math.round(c / _) * _, r] : [t, Math.round(c / _) * _],
                            u = m(s, n, i, _, o);
                        a(u)
                    }, [a, t, r, n, i, _]),
                    A = Object(o.useCallback)(e => {
                        if (e.relatedTarget && e.relatedTarget.classList && e.relatedTarget.classList.contains("wc-block-price-filter__amount")) return;
                        const t = e.target.classList.contains("wc-block-price-filter__amount--min");
                        if (S >= E) {
                            const e = m([0, E], null, null, _, t);
                            return a([parseInt(e[0], 10), parseInt(e[1], 10)])
                        }
                        const r = m([S, E], null, null, _, t);
                        a(r)
                    }, [a, _, S, E]),
                    R = l()("wc-block-price-filter", "wc-block-components-price-slider", h && "wc-block-price-filter--has-input-fields", h && "wc-block-components-price-slider--has-input-fields", v && "wc-block-price-filter--has-filter-button", v && "wc-block-components-price-slider--has-filter-button", w && "is-loading", !P && "is-disabled"),
                    T = Object(f.a)(y.current) ? y.current.ownerDocument.activeElement : void 0,
                    M = T && T === y.current ? _ : 1,
                    U = T && T === j.current ? _ : 1,
                    B = String(S / 10 ** u.minorUnit),
                    D = String(E / 10 ** u.minorUnit);

                return Object(o.createElement)("div", {
                    className: R
                }, Object(o.createElement)("div", {
                    className: "wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",
                    onMouseMove: F,
                    onFocus: F
                }, P && Object(o.createElement)("div", {
                    "aria-hidden": h
                }, Object(o.createElement)("div", {
                    className: "wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",
                    style: N
                }), Object(o.createElement)("input", {
                    type: "range",
                    className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min",
                    "aria-label": Object(s.__)("Filter products by minimum price", "woocommerce"),
                    "aria-valuetext": B,
                    value: Number.isFinite(t) ? t : n,
                    onChange: C,
                    step: M,
                    min: n,
                    max: i,
                    ref: y,
                    disabled: w,
                    tabIndex: h ? -1 : 0
                }), Object(o.createElement)("input", {
                    type: "range",
                    className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max",
                    "aria-label": Object(s.__)("Filter products by maximum price", "woocommerce"),
                    "aria-valuetext": D,
                    value: Number.isFinite(r) ? r : i,
                    onChange: C,
                    step: U,
                    min: n,
                    max: i,
                    ref: j,
                    disabled: w,
                    tabIndex: h ? -1 : 0
                }))), Object(o.createElement)("div", {
                    className: "wc-block-price-filter__controls wc-block-components-price-slider__controls"
                }, h && Object(o.createElement)(o.Fragment, null, Object(o.createElement)(p.a, {
                    currency: u,
                    displayType: "input",
                    className: "wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min",
                    "aria-label": Object(s.__)("Filter products by minimum price", "woocommerce"),
                    allowNegative: !1,
                    isAllowed: g({
                        minConstraint: n,
                        minorUnit: u.minorUnit,
                        currentMaxValue: E
                    }),
                    onValueChange: e => {
                        e !== S && x(e)
                    },
                    onBlur: A,
                    disabled: w || !P,
                    value: S
                }), Object(o.createElement)(p.a, {
                    currency: u,
                    displayType: "input",
                    className: "wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max",
                    "aria-label": Object(s.__)("Filter products by maximum price", "woocommerce"),
                    isAllowed: b({
                        maxConstraint: i,
                        minorUnit: u.minorUnit
                    }),
                    onValueChange: e => {
                        e !== E && k(e)
                    },
                    onBlur: A,
                    disabled: w || !P,
                    value: E
                })), !h && !w && Number.isFinite(t) && Number.isFinite(r) && Object(o.createElement)("div", {
                    className: "wc-block-price-filter__range-text wc-block-components-price-slider__range-text"
                }, Object(s.__)("Price", "woocommerce"), ":  ", Object(o.createElement)(p.a, {
                    currency: u,
                    value: t
                }), " – ", Object(o.createElement)(p.a, {
                    currency: u,
                    value: r
                })), v && Object(o.createElement)(d.a, {
                    className: "wc-block-price-filter__button wc-block-components-price-slider__button",
                    disabled: w || !P,
                    onClick: O,
                    screenReaderLabel: Object(s.__)("Apply price filter", "woocommerce")
                })))
            },
            v = r(50),
            w = r(41),
            O = r(2),
            y = r(15),
            j = r(118),
            _ = r(52);
        const S = (e, t, r) => {
            const n = 10 * 10 ** t;
            let o = null;
            const a = parseFloat(e);
            isNaN(a) || ("ROUND_UP" === r ? o = Math.ceil(a / n) * n : "ROUND_DOWN" === r && (o = Math.floor(a / n) * n));
            const c = Object(i.a)(o, Number.isFinite);
            return Number.isFinite(o) ? o : c
        };
        var x = r(98);

        function E(e, t) {
            return Number(e) * 10 ** t
        }
        r(216);
        var k = r(149);
        const P = {
            heading: {
                type: "string",
                default: Object(s.__)("Filter by price", "woocommerce")
            }
        };
        Object(n.a)({
            selector: ".wp-block-woocommerce-price-filter",
            Block: e => {
                let {
                    attributes: t,
                    isEditor: r = !1
                } = e;
                const n = Object(O.getSettingWithCoercion)("has_filterable_products", !1, j.a),
                    s = Object(O.getSettingWithCoercion)("is_rendering_php_template", !1, j.a),
                    [u, l] = Object(o.useState)(!1),
                    p = Object(x.c)("min_price"),
                    m = Object(x.c)("max_price"),
                    [d] = Object(a.a)(),
                    {
                        results: b,
                        isLoading: g
                    } = Object(c.a)({
                        queryPrices: !0,
                        queryState: d
                    }),
                    k = Object(w.getCurrencyFromPriceResponse)(Object(f.b)(b, "price_range") ? b.price_range : void 0),
                    [P, N] = Object(a.b)("min_price", E(p, k.minorUnit) || null),
                    [F, C] = Object(a.b)("max_price", E(m, k.minorUnit) || null),
                    [A, R] = Object(o.useState)(E(p, k.minorUnit) || null),
                    [T, M] = Object(o.useState)(E(m, k.minorUnit) || null),
                    {
                        minConstraint: U,
                        maxConstraint: B
                    } = (e => {
                        let {
                            minPrice: t,
                            maxPrice: r,
                            minorUnit: n
                        } = e;
                        return {
                            minConstraint: S(t || "", n, "ROUND_DOWN"),
                            maxConstraint: S(r || "", n, "ROUND_UP")
                        }
                    })({
                        minPrice: Object(f.b)(b, "price_range") && Object(f.b)(b.price_range, "min_price") && Object(_.a)(b.price_range.min_price) ? b.price_range.min_price : void 0,
                        maxPrice: Object(f.b)(b, "price_range") && Object(f.b)(b.price_range, "max_price") && Object(_.a)(b.price_range.max_price) ? b.price_range.max_price : void 0,
                        minorUnit: k.minorUnit
                    });
                Object(o.useEffect)(() => {
                    !u && s && (N(E(p, k.minorUnit)), C(E(m, k.minorUnit)), l(!0))
                }, [k.minorUnit, s, u, m, p, C, N]);
                const D = Object(o.useCallback)((e, t) => {
                        const r = t >= Number(B) ? void 0 : t,
                            n = e <= Number(U) ? void 0 : e;
                        if (s && window) {
                            const e = function(e, t) {
                                const r = {};
                                for (const [e, n] of Object.entries(t)) n ? r[e] = n.toString() : delete r[e];
                                const n = Object(y.removeQueryArgs)(e, ...Object.keys(t));
                                return Object(y.addQueryArgs)(n, r)
                            }(window.location.href, {
                                min_price: n / 10 ** k.minorUnit,
                                max_price: r / 10 ** k.minorUnit
                            });
                            window.location.href !== e && (window.location.href = e)
                        } else N(n), C(r)
                    }, [U, B, N, C, s, k.minorUnit]),
                    V = Object(v.a)(D, 500),
                    I = Object(o.useCallback)(e => {
                        e[0] !== A && R(e[0]), e[1] !== T && M(e[1]), s && u && !t.showFilterButton && V(e[0], e[1])
                    }, [A, T, R, M, s, u, V, t.showFilterButton]);
                Object(o.useEffect)(() => {
                    t.showFilterButton || s || V(A, T)
                }, [A, T, t.showFilterButton, V, s]);
                const L = Object(i.a)(P),
                    q = Object(i.a)(F),
                    G = Object(i.a)(U),
                    K = Object(i.a)(B);
                if (Object(o.useEffect)(() => {
                        (!Number.isFinite(A) || P !== L && P !== A || U !== G && U !== A) && R(Number.isFinite(P) ? P : U), (!Number.isFinite(T) || F !== q && F !== T || B !== K && B !== T) && M(Number.isFinite(F) ? F : B)
                    }, [A, T, P, F, U, B, G, K, L, q]), !n) return null;
                if (!g && (null === U || null === B || U === B)) return null;
                const W = "h" + t.headingLevel;
                return Object(o.createElement)(o.Fragment, null, !r && t.heading && Object(o.createElement)(W, {
                    className: "wc-block-price-filter__title"
                }, t.heading), Object(o.createElement)("div", {
                    className: "wc-block-price-slider"
                }, Object(o.createElement)(h, {
                    minConstraint: U,
                    maxConstraint: B,
                    minPrice: A,
                    maxPrice: T,
                    currency: k,
                    showInputFields: t.showInputFields,
                    showFilterButton: t.showFilterButton,
                    onChange: I,
                    onSubmit: () => D(A, T),
                    isLoading: g
                })))
            },
            getProps: e => ({
                attributes: {
                    showInputFields: "true" === e.dataset.showinputfields,
                    showFilterButton: "true" === e.dataset.showfilterbutton,
                    heading: e.dataset.heading || P.heading.default,
                    headingLevel: e.dataset.headingLevel ? parseInt(e.dataset.headingLevel, 10) : k.attributes.headingLevel.default
                },
                isEditor: !1
            })
        })
    },
    25: function(e, t, r) {
        "use strict";
        var n = r(0),
            o = r(5),
            i = r.n(o);
        t.a = e => {
            let t, {
                label: r,
                screenReaderLabel: o,
                wrapperElement: a,
                wrapperProps: c = {}
            } = e;
            const s = null != r,
                u = null != o;
            return !s && u ? (t = a || "span", c = { ...c,
                className: i()(c.className, "screen-reader-text")
            }, Object(n.createElement)(t, c, o)) : (t = a || n.Fragment, s && u && r !== o ? Object(n.createElement)(t, c, Object(n.createElement)("span", {
                "aria-hidden": "true"
            }, r), Object(n.createElement)("span", {
                className: "screen-reader-text"
            }, o)) : Object(n.createElement)(t, c, r))
        }
    },
    26: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = r(0);
        const o = Object(n.createContext)("page"),
            i = () => Object(n.useContext)(o);
        o.Provider
    },
    3: function(e, t) {
        e.exports = window.React
    },
    32: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r(0),
            o = r(13),
            i = r.n(o);

        function a(e) {
            const t = Object(n.useRef)(e);
            return i()(e, t.current) || (t.current = e), t.current
        }
    },
    34: function(e, t) {},
    39: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return p
        })), r.d(t, "b", (function() {
            return f
        })), r.d(t, "c", (function() {
            return m
        }));
        var n = r(6),
            o = r(8),
            i = r(0),
            a = r(13),
            c = r.n(a),
            s = r(32),
            u = r(60),
            l = r(26);
        const p = e => {
                const t = Object(l.a)();
                e = e || t;
                const r = Object(o.useSelect)(t => t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0), [e]),
                    {
                        setValueForQueryContext: a
                    } = Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);
                return [r, Object(i.useCallback)(t => {
                    a(e, t)
                }, [e, a])]
            },
            f = (e, t, r) => {
                const a = Object(l.a)();
                r = r || a;
                const c = Object(o.useSelect)(o => o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t), [r, e]),
                    {
                        setQueryValue: s
                    } = Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);
                return [c, Object(i.useCallback)(t => {
                    s(r, e, t)
                }, [r, e, s])]
            },
            m = (e, t) => {
                const r = Object(l.a)();
                t = t || r;
                const [n, o] = p(t), a = Object(s.a)(n), f = Object(s.a)(e), m = Object(u.a)(f), d = Object(i.useRef)(!1);
                return Object(i.useEffect)(() => {
                    c()(m, f) || (o(Object.assign({}, a, f)), d.current = !0)
                }, [a, f, m, o]), d.current ? [n, o] : [e, o]
            }
    },
    4: function(e, t) {
        e.exports = window.lodash
    },
    41: function(e, t) {
        e.exports = window.wc.priceFormat
    },
    46: function(e, t, r) {
        "use strict";
        r.d(t, "n", (function() {
            return i
        })), r.d(t, "l", (function() {
            return a
        })), r.d(t, "k", (function() {
            return c
        })), r.d(t, "m", (function() {
            return s
        })), r.d(t, "i", (function() {
            return u
        })), r.d(t, "d", (function() {
            return l
        })), r.d(t, "f", (function() {
            return p
        })), r.d(t, "j", (function() {
            return f
        })), r.d(t, "c", (function() {
            return m
        })), r.d(t, "e", (function() {
            return d
        })), r.d(t, "g", (function() {
            return b
        })), r.d(t, "a", (function() {
            return g
        })), r.d(t, "h", (function() {
            return h
        })), r.d(t, "b", (function() {
            return v
        }));
        var n, o = r(2);
        const i = Object(o.getSetting)("wcBlocksConfig", {
                buildPhase: 1,
                pluginUrl: "",
                productCount: 0,
                defaultAvatar: "",
                restApiRoutes: {},
                wordCountType: "words"
            }),
            a = i.pluginUrl + "images/",
            c = i.pluginUrl + "build/",
            s = i.buildPhase,
            u = null === (n = o.STORE_PAGES.shop) || void 0 === n ? void 0 : n.permalink,
            l = (o.STORE_PAGES.checkout.id, o.STORE_PAGES.checkout.permalink),
            p = o.STORE_PAGES.privacy.permalink,
            f = (o.STORE_PAGES.privacy.title, o.STORE_PAGES.terms.permalink),
            m = (o.STORE_PAGES.terms.title, o.STORE_PAGES.cart.id, o.STORE_PAGES.cart.permalink),
            d = o.STORE_PAGES.myaccount.permalink ? o.STORE_PAGES.myaccount.permalink : Object(o.getSetting)("wpLoginUrl", "/wp-login.php"),
            b = Object(o.getSetting)("shippingCountries", {}),
            g = Object(o.getSetting)("allowedCountries", {}),
            h = Object(o.getSetting)("shippingStates", {}),
            v = Object(o.getSetting)("allowedStates", {})
    },
    5: function(e, t, r) {
        var n;
        ! function() {
            "use strict";
            var r = {}.hasOwnProperty;

            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i) e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a)
                            }
                        } else if ("object" === i)
                            if (n.toString === Object.prototype.toString)
                                for (var c in n) r.call(n, c) && n[c] && e.push(c);
                            else e.push(n.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                return o
            }.apply(t, [])) || (e.exports = n)
        }()
    },
    50: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(3);

        function o(e, t, r) {
            var o = this,
                i = Object(n.useRef)(null),
                a = Object(n.useRef)(0),
                c = Object(n.useRef)(null),
                s = Object(n.useRef)([]),
                u = Object(n.useRef)(),
                l = Object(n.useRef)(),
                p = Object(n.useRef)(e),
                f = Object(n.useRef)(!0);
            p.current = e;
            var m = !t && 0 !== t && "undefined" != typeof window;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            t = +t || 0;
            var d = !!(r = r || {}).leading,
                b = !("trailing" in r) || !!r.trailing,
                g = "maxWait" in r,
                h = g ? Math.max(+r.maxWait || 0, t) : null;
            return Object(n.useEffect)((function() {
                return f.current = !0,
                    function() {
                        f.current = !1
                    }
            }), []), Object(n.useMemo)((function() {
                var e = function(e) {
                        var t = s.current,
                            r = u.current;
                        return s.current = u.current = null, a.current = e, l.current = p.current.apply(r, t)
                    },
                    r = function(e, t) {
                        m && cancelAnimationFrame(c.current), c.current = m ? requestAnimationFrame(e) : setTimeout(e, t)
                    },
                    n = function(e) {
                        if (!f.current) return !1;
                        var r = e - i.current,
                            n = e - a.current;
                        return !i.current || r >= t || r < 0 || g && n >= h
                    },
                    v = function(t) {
                        return c.current = null, b && s.current ? e(t) : (s.current = u.current = null, l.current)
                    },
                    w = function() {
                        var e = Date.now();
                        if (n(e)) return v(e);
                        if (f.current) {
                            var o = e - i.current,
                                c = e - a.current,
                                s = t - o,
                                u = g ? Math.min(s, h - c) : s;
                            r(w, u)
                        }
                    },
                    O = function() {
                        for (var p = [], m = 0; m < arguments.length; m++) p[m] = arguments[m];
                        var b = Date.now(),
                            h = n(b);
                        if (s.current = p, u.current = o, i.current = b, h) {
                            if (!c.current && f.current) return a.current = i.current, r(w, t), d ? e(i.current) : l.current;
                            if (g) return r(w, t), e(i.current)
                        }
                        return c.current || r(w, t), l.current
                    };
                return O.cancel = function() {
                    c.current && (m ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), a.current = 0, s.current = i.current = u.current = c.current = null
                }, O.isPending = function() {
                    return !!c.current
                }, O.flush = function() {
                    return c.current ? v(Date.now()) : l.current
                }, O
            }), [d, g, t, h, b, m])
        }
    },
    51: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return u
        }));
        var n = r(12),
            o = r.n(n),
            i = r(0),
            a = r(16);
        const c = [".wp-block-woocommerce-cart"],
            s = e => {
                let {
                    Block: t,
                    containers: r,
                    getProps: n = (() => ({})),
                    getErrorBoundaryProps: c = (() => ({}))
                } = e;
                0 !== r.length && Array.prototype.forEach.call(r, (e, r) => {
                    const s = n(e, r),
                        u = c(e, r),
                        l = { ...e.dataset,
                            ...s.attributes || {}
                        };
                    (e => {
                        let {
                            Block: t,
                            container: r,
                            attributes: n = {},
                            props: c = {},
                            errorBoundaryProps: s = {}
                        } = e;
                        Object(i.render)(Object(i.createElement)(a.a, s, Object(i.createElement)(i.Suspense, {
                            fallback: Object(i.createElement)("div", {
                                className: "wc-block-placeholder"
                            })
                        }, t && Object(i.createElement)(t, o()({}, c, {
                            attributes: n
                        })))), r, () => {
                            r.classList && r.classList.remove("is-loading")
                        })
                    })({
                        Block: t,
                        container: e,
                        props: s,
                        attributes: l,
                        errorBoundaryProps: u
                    })
                })
            },
            u = e => {
                const t = document.body.querySelectorAll(c.join(",")),
                    {
                        Block: r,
                        getProps: n,
                        getErrorBoundaryProps: o,
                        selector: i
                    } = e;
                (e => {
                    let {
                        Block: t,
                        getProps: r,
                        getErrorBoundaryProps: n,
                        selector: o,
                        wrappers: i
                    } = e;
                    const a = document.body.querySelectorAll(o);
                    i && i.length > 0 && Array.prototype.filter.call(a, e => !((e, t) => Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(e, i)), s({
                        Block: t,
                        containers: a,
                        getProps: r,
                        getErrorBoundaryProps: n
                    })
                })({
                    Block: r,
                    getProps: n,
                    getErrorBoundaryProps: o,
                    selector: i,
                    wrappers: t
                }), Array.prototype.forEach.call(t, t => {
                    t.addEventListener("wc-blocks_render_blocks_frontend", () => {
                        (e => {
                            let {
                                Block: t,
                                getProps: r,
                                getErrorBoundaryProps: n,
                                selector: o,
                                wrapper: i
                            } = e;
                            const a = i.querySelectorAll(o);
                            s({
                                Block: t,
                                containers: a,
                                getProps: r,
                                getErrorBoundaryProps: n
                            })
                        })({ ...e,
                            wrapper: t
                        })
                    })
                })
            }
    },
    52: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        const n = e => "string" == typeof e
    },
    6: function(e, t) {
        e.exports = window.wc.wcBlocksData
    },
    60: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(3);

        function o(e, t) {
            const r = Object(n.useRef)();
            return Object(n.useEffect)(() => {
                r.current === e || t && !t(e, r.current) || (r.current = e)
            }, [e, t]), r.current
        }
    },
    63: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r(6),
            o = r(8),
            i = r(0),
            a = r(32),
            c = r(74);
        const s = e => {
            const {
                namespace: t,
                resourceName: r,
                resourceValues: s = [],
                query: u = {},
                shouldSelect: l = !0
            } = e;
            if (!t || !r) throw new Error("The options object must have valid values for the namespace and the resource properties.");
            const p = Object(i.useRef)({
                    results: [],
                    isLoading: !0
                }),
                f = Object(a.a)(u),
                m = Object(a.a)(s),
                d = Object(c.a)(),
                b = Object(o.useSelect)(e => {
                    if (!l) return null;
                    const o = e(n.COLLECTIONS_STORE_KEY),
                        i = [t, r, f, m],
                        a = o.getCollectionError(...i);
                    if (a) {
                        if (!(a instanceof Error)) throw new Error("TypeError: `error` object is not an instance of Error constructor");
                        d(a)
                    }
                    return {
                        results: o.getCollection(...i),
                        isLoading: !o.hasFinishedResolution("getCollection", i)
                    }
                }, [t, r, m, f, l]);
            return null !== b && (p.current = b), p.current
        }
    },
    74: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(0);
        const o = () => {
            const [, e] = Object(n.useState)();
            return Object(n.useCallback)(t => {
                e(() => {
                    throw t
                })
            }, [])
        }
    },
    76: function(e, t, r) {
        "use strict";
        var n = r(0),
            o = r(1),
            i = r(5),
            a = r.n(i),
            c = r(25);
        r(107), t.a = e => {
            let {
                className: t,
                disabled: r,
                label:
                    /* translators: Submit button text for filters. */
                    i = Object(o.__)("Go", "woocommerce"),
                onClick: s,
                screenReaderLabel: u = Object(o.__)("Apply filter", "woocommerce")
            } = e;
            return Object(n.createElement)("button", {
                type: "submit",
                className: a()("wc-block-filter-submit-button", "wc-block-components-filter-submit-button", t),
                disabled: r,
                onClick: s
            }, Object(n.createElement)(c.a, {
                label: i,
                screenReaderLabel: u
            }))
        }
    },
    8: function(e, t) {
        e.exports = window.wp.data
    },
    98: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        })), r.d(t, "a", (function() {
            return i
        })), r.d(t, "c", (function() {
            return a
        }));
        var n = r(15);
        const o = "query_type_",
            i = "filter_";

        function a(e) {
            return window ? Object(n.getQueryArg)(window.location.href, e) : null
        }
    },
    99: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return c
        }));
        var n = r(3),
            o = r(50);

        function i(e, t) {
            return e === t
        }

        function a(e) {
            return "function" == typeof e ? function() {
                return e
            } : e
        }

        function c(e, t, r) {
            var c = r && r.equalityFn || i,
                s = function(e) {
                    var t = Object(n.useState)(a(e)),
                        r = t[0],
                        o = t[1];
                    return [r, Object(n.useCallback)((function(e) {
                        return o(a(e))
                    }), [])]
                }(e),
                u = s[0],
                l = s[1],
                p = Object(o.a)(Object(n.useCallback)((function(e) {
                    return l(e)
                }), [l]), t, r),
                f = Object(n.useRef)(e);
            return c(f.current, e) || (p(e), f.current = e), [u, p]
        }
    }
});



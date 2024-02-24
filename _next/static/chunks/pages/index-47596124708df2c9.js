(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        94166: function(e, t) {
            var n, i = function(e) {
                var t = {
                    addEvent: function(e, t, n, i) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (e["e" + t + n] = n, e[t + n] = function() {
                            e["e" + t + n](window.event, i)
                        }, e.attachEvent("on" + t, e[t + n]))
                    },
                    removeEvent: function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n) : e.attachEvent && e.detachEvent(t)
                    },
                    input: "",
                    pattern: "38384040373937396665",
                    keydownHandler: function(e, n) {
                        if (n && (t = n), t.input += e ? e.keyCode : event.keyCode, t.input.length > t.pattern.length && (t.input = t.input.substr(t.input.length - t.pattern.length)), t.input === t.pattern) return t.code(t._currentLink), t.input = "", e.preventDefault(), !1
                    },
                    load: function(e) {
                        this._currentLink = e, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(e)
                    },
                    unload: function() {
                        this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
                    },
                    code: function(e) {
                        window.location = e
                    },
                    iphone: {
                        start_x: 0,
                        start_y: 0,
                        stop_x: 0,
                        stop_y: 0,
                        tap: !1,
                        capture: !1,
                        orig_keys: "",
                        keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                        input: [],
                        code: function(e) {
                            t.code(e)
                        },
                        touchmoveHandler: function(e) {
                            if (1 === e.touches.length && !0 === t.iphone.capture) {
                                var n = e.touches[0];
                                t.iphone.stop_x = n.pageX, t.iphone.stop_y = n.pageY, t.iphone.tap = !1, t.iphone.capture = !1, t.iphone.check_direction()
                            }
                        },
                        touchendHandler: function() {
                            if (t.iphone.input.push(t.iphone.check_direction()), t.iphone.input.length > t.iphone.keys.length && t.iphone.input.shift(), t.iphone.input.length === t.iphone.keys.length) {
                                for (var e = !0, n = 0; n < t.iphone.keys.length; n++) t.iphone.input[n] !== t.iphone.keys[n] && (e = !1);
                                e && t.iphone.code(t._currentLink)
                            }
                        },
                        touchstartHandler: function(e) {
                            t.iphone.start_x = e.changedTouches[0].pageX, t.iphone.start_y = e.changedTouches[0].pageY, t.iphone.tap = !0, t.iphone.capture = !0
                        },
                        load: function(e) {
                            this.orig_keys = this.keys, t.addEvent(document, "touchmove", this.touchmoveHandler), t.addEvent(document, "touchend", this.touchendHandler, !1), t.addEvent(document, "touchstart", this.touchstartHandler)
                        },
                        unload: function() {
                            t.removeEvent(document, "touchmove", this.touchmoveHandler), t.removeEvent(document, "touchend", this.touchendHandler), t.removeEvent(document, "touchstart", this.touchstartHandler)
                        },
                        check_direction: function() {
                            return x_magnitude = Math.abs(this.start_x - this.stop_x), y_magnitude = Math.abs(this.start_y - this.stop_y), x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT", y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result
                        }
                    }
                };
                return "string" == typeof e && t.load(e), "function" == typeof e && (t.code = e, t.load()), t
            };
            void 0 !== e.exports ? e.exports = i : void 0 !== (n = (function() {
                return i
            }).apply(t, [])) && (e.exports = n)
        },
        48312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(95711)
            }])
        },
        50911: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return W
                }
            });
            var i = n(85893),
                s = n(12631),
                o = n.n(s),
                r = n(14039),
                a = n.n(r),
                c = n(75879),
                u = n(61667);

            function d(e) {
                let {
                    posts: t,
                    children: n
                } = e, s = (0, c.D8)();
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: a().wrapper,
                        children: (0, i.jsxs)("div", {
                            className: o().columns + " " + a().grid,
                            children: [t.map((e, t) => (0, i.jsx)(u.Z, {
                                post: e,
                                size: 1,
                                useCssForSize: s
                            }, e._id)), n]
                        })
                    })
                })
            }
            var l = n(64529),
                h = n(76248),
                p = n(12902);
            let m = (0, l.Ue)()(e => ({
                    values: {},
                    update: (t, n) => e((0, p.ZP)(e => {
                        e.values[t] = n
                    }))
                })),
                _ = e => {
                    let {
                        value: t,
                        update: n
                    } = m(t => ({
                        value: t.values[e],
                        update: t.update
                    }), h.X);
                    return {
                        get current() {
                            return t
                        },
                        set current(newValue) {
                            n(e, newValue)
                        }
                    }
                };
            var v = n(41664),
                f = n.n(v),
                g = n(61084),
                j = n.n(g),
                k = n(94166),
                w = n.n(k),
                b = n(67294),
                E = n(5017),
                H = n(25675),
                D = n.n(H),
                N = n(5152),
                C = n.n(N),
                T = n(91787);
            let F = C()(() => n.e(2748).then(n.bind(n, 82748)), {
                loadableGenerated: {
                    webpack: () => [82748]
                },
                loading: () => (0, i.jsx)(i.Fragment, {}),
                ssr: !1
            });

            function L() {
                let e = (0, E.wW)(),
                    t = _("hero"),
                    s = (0, b.useRef)(null),
                    o = (0, T.Z)(),
                    r = (0, c.jR)();
                return ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = (0, b.useCallback)(e, [e, ...t]);
                    (0, b.useEffect)(() => {
                        let e = new(w())(n);
                        return () => {
                            e && e.unload()
                        }
                    }, [n])
                }(() => {
                    if (s) {
                        var t;
                        e("Hero: Konami"), null === (t = s.current) || void 0 === t || t.postMessage("konami"), window.scroll(0, 0)
                    }
                }, [s]), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "theme-dark " + j().hero,
                        ref: t,
                        "data-testid": "home-hero",
                        children: [(0, i.jsx)("div", {
                            className: j().media,
                            children: o ? r ? (0, i.jsx)(F, {
                                api: s,
                                rendererFactoryLoader: () => Promise.all([n.e(3737), n.e(5891), n.e(1736)]).then(n.bind(n, 71736)),
                                disablePixelRatio: !0,
                                suspendOutsideViewport: !0,
                                effectConfig: {
                                    scroll: {
                                        type: "throttle",
                                        duration: 25
                                    },
                                    windowResize: {
                                        type: "debounce",
                                        duration: 100
                                    }
                                },
                                effectProps: {
                                    home: !0
                                },
                                ariaLabel: "animated homepage graphics",
                                renderFallbackComponent: () => (0, i.jsx)(D(), {
                                    className: j().image,
                                    fill: !0,
                                    src: "/static/hero-static.png",
                                    alt: "",
                                    sizes: "(max-width: 1600px) 100vw, 1600px",
                                    quality: 100,
                                    draggable: !1
                                })
                            }) : (0, i.jsx)(D(), {
                                className: j().image,
                                fill: !0,
                                src: "/static/hero-static-mobile.png",
                                alt: "",
                                sizes: "100vw",
                                quality: 100,
                                draggable: !1
                            }) : null
                        }), (0, i.jsxs)("div", {
                            className: j().inner,
                            children: [(0, i.jsxs)("div", {
                                className: j().text,
                                children: [(0, i.jsxs)("div", {
                                    children: ["Hey ", (0, i.jsx)("span", {
                                        className: j().emoji,
                                        children: "\uD83D\uDC4B"
                                    }), " I'm", " ", (0, i.jsx)("span", {
                                        className: j().name,
                                        children: "James Warner"
                                    }), ",", " "]
                                }), (0, i.jsxs)("div", {
                                    children: ["A", " ", (0, i.jsxs)("span", {
                                        className: j().title,
                                        children: ['"Creative Technologist"', " "]
                                    }), (0, i.jsx)("span", {
                                        className: j().emoji,
                                        children: "\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB"
                                    })]
                                }), (0, i.jsx)("span", {
                                    className: j().mission,
                                    children: "I create modern experiences to inspire the builders of tomorrow."
                                }), " ", (0, i.jsx)("span", {
                                    className: j().emoji,
                                    children: "✨ "
                                })]
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsx)(f(), {
                                    href: "/about",
                                    className: j().cta,
                                    children: "About me"
                                })
                            })]
                        })]
                    })
                })
            }
            var P = n(9008),
                z = n.n(P),
                B = n(22647),
                O = n(19804);

            function W(e) {
                let {
                    posts: t = []
                } = e;
                return (0, i.jsxs)("div", {
                    className: o().page,
                    children: [(0, i.jsx)(z(), {
                        children: function(e) {
                            let {
                                posts: t
                            } = e, n = "James Warner", s = "I create modern experiences to inspire the builders of tomorrow.", o = "https://jmswrnr.com", r = "\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB ";
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("title", {
                                    children: n
                                }, "title"), (0, i.jsx)("meta", {
                                    name: "author",
                                    content: "James Warner"
                                }, "author"), (0, i.jsx)("meta", {
                                    name: "description",
                                    content: r + s
                                }, "description"), (0, i.jsx)("link", {
                                    rel: "canonical",
                                    href: o
                                }, "canonical"), (0, i.jsx)(B.DM, {
                                    large: !1,
                                    title: r + n,
                                    description: s
                                }, "twitter"), (0, i.jsx)(B.AB, {
                                    title: r + n,
                                    description: s,
                                    url: o
                                }, "opengraph"), (0, i.jsx)(B.O9, {
                                    breadcrumb: {
                                        url: o,
                                        list: []
                                    },
                                    itemList: t.map(e => (0, O.ft)(e, !0)),
                                    webpage: {
                                        title: n,
                                        description: s,
                                        url: o
                                    }
                                }, "schema")]
                            })
                        }({
                            posts: t
                        })
                    }), (0, i.jsx)(L, {}), (0, i.jsx)(d, {
                        posts: t
                    })]
                })
            }
        },
        95711: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return c
                },
                default: function() {
                    return u
                }
            });
            var i = n(85893),
                s = n(50911),
                o = n(70386),
                r = n(67294);
            let a = (0, r.lazy)(() => n.e(3791).then(n.bind(n, 93791)));
            var c = !0;

            function u(e) {
                let {
                    preview: t,
                    ...n
                } = e;
                return t ? (0, i.jsx)(o.Dz, {
                    fallback: "Loading...",
                    children: (0, i.jsx)(a, {})
                }) : (0, i.jsx)(s.Z, { ...n
                })
            }
        },
        61084: function(e) {
            e.exports = {
                hero: "Hero_hero__q3Jev",
                media: "Hero_media__O83zW",
                inner: "Hero_inner__TdZ2M",
                emoji: "Hero_emoji__96kjb",
                text: "Hero_text__l0MXQ",
                name: "Hero_name___Z3Cw",
                title: "Hero_title__nGUHa",
                mission: "Hero_mission__vtpV7",
                cta: "Hero_cta__mK43C"
            }
        }
    },
    function(e) {
        e.O(0, [4035, 9774, 2888, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);
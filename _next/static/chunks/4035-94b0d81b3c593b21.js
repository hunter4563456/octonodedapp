(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4035], {
        61667: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return w
                }
            });
            var n = r(85893),
                i = r(38710),
                o = r(25675),
                a = r.n(o),
                s = r(41664),
                l = r.n(s),
                c = r(19804),
                u = r(91787),
                m = r(67294),
                d = r(47166),
                p = r.n(d),
                h = r(14039),
                g = r.n(h);
            let f = p().bind(g());

            function w(e) {
                let {
                    post: t,
                    size: r = 1,
                    useCssForSize: o,
                    thumbnailView: s = !1
                } = e, d = (0, u.Z)(), p = (0, i.Jj)(t.image, !0, e => e.height(e.options.width / 2)), h = (0, i.Jj)(t.image, !1, e => e.height(e.options.width)), [w, y, j] = (0, m.useMemo)(() => (0, c.jk)(t), [t]);
                return (0, n.jsxs)("div", {
                    className: g().item,
                    style: o ? {} : {
                        gridColumn: "auto / span ".concat(r)
                    },
                    children: [d && !s ? p ? (0, n.jsx)(a(), { ...p,
                        className: g().coverimage,
                        alt: "",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 850px"
                    }) : (0, n.jsx)("div", {
                        className: f({
                            coverimage: !0,
                            color: !0
                        })
                    }) : null, (0, n.jsxs)("div", {
                        className: g().contents,
                        children: [(0, n.jsxs)("div", {
                            className: g().title,
                            children: [(0, n.jsxs)("span", {
                                className: g().meta,
                                children: [j ? (0, n.jsx)("div", {
                                    className: f({
                                        metatag: !0,
                                        new: !0
                                    }),
                                    children: "New"
                                }) : null, (0, n.jsx)("div", {
                                    className: f({
                                        metatag: !0,
                                        type: !0
                                    }),
                                    children: (0, c.X3)(t)
                                }), (0, n.jsx)("div", {
                                    className: f({
                                        metatag: !0,
                                        date: !0
                                    }),
                                    children: y
                                })]
                            }), (0, n.jsx)(l(), {
                                className: g().header,
                                href: (0, c.ft)(t),
                                rel: "follow",
                                "aria-hidden": "true",
                                tabIndex: -1,
                                children: (0, c.Fm)((0, c.ei)(t))
                            })]
                        }), (0, n.jsx)("p", {
                            className: g().description,
                            children: t.description
                        }), (0, n.jsx)(l(), {
                            className: g().cta,
                            href: (0, c.ft)(t),
                            rel: "follow",
                            "aria-label": "Read article about ".concat((0, c.ei)(t)),
                            children: "Read article"
                        }), d && s ? h ? (0, n.jsx)(a(), { ...h,
                            className: g().thumbnail,
                            alt: "",
                            sizes: "200px",
                            quality: 100
                        }) : (0, n.jsx)("div", {
                            className: f({
                                thumbnail: !0,
                                color: !0
                            })
                        }) : null]
                    })]
                })
            }
        },
        22647: function(e, t, r) {
            "use strict";
            r.d(t, {
                AB: function() {
                    return g
                },
                DM: function() {
                    return h
                },
                O9: function() {
                    return d
                },
                hh: function() {
                    return w
                },
                kO: function() {
                    return f
                }
            });
            var n = r(85893),
                i = r(67294),
                o = r(38710);
            let a = "".concat("https://jmswrnr.com", "/avatar-120.png"),
                s = "".concat("https://jmswrnr.com", "/avatar-200.png"),
                l = e => (0, n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(e)
                    }
                }),
                c = {
                    "@type": "ImageObject",
                    "@id": "".concat("https://jmswrnr.com", "#logo"),
                    url: a,
                    width: 120,
                    height: 120,
                    caption: "James Warner"
                },
                u = {
                    "@type": "Organization",
                    "@id": "".concat("https://jmswrnr.com", "#organization"),
                    name: "JMSWRNR",
                    url: "https://jmswrnr.com",
                    sameAs: ["https://twitter.com/jmswrnr", "https://github.com/jmswrnr"],
                    logo: c,
                    image: {
                        "@id": c["@id"]
                    }
                },
                m = {
                    "@type": "WebSite",
                    "@id": "".concat("https://jmswrnr.com", "#website"),
                    url: "https://jmswrnr.com",
                    name: "James Warner",
                    description: "\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB Creative Technologist",
                    publisher: {
                        "@id": u["@id"]
                    }
                },
                d = e => {
                    let {
                        breadcrumb: t,
                        article: r,
                        itemList: n,
                        webpage: a,
                        collectionPage: s,
                        primaryImage: c
                    } = e, d = (0, i.useMemo)(() => {
                        if (!(null == t ? void 0 : t.list.length)) return null;
                        let e = [...t.list];
                        return {
                            "@type": "BreadcrumbList",
                            "@id": "".concat(t.url, "#breadcrumb"),
                            itemListElement: e.map((e, t) => ({
                                "@type": "ListItem",
                                position: t + 1,
                                item: {
                                    "@type": "WebPage",
                                    "@id": "".concat(e.item, "#webpage"),
                                    url: e.item,
                                    name: e.name
                                }
                            }))
                        }
                    }, [t]), p = (0, i.useMemo)(() => (null == c ? void 0 : c.image) && (null == c ? void 0 : c.url) ? {
                        "@type": "ImageObject",
                        "@id": "".concat(c.url, "#primaryimage"),
                        url: (0, o.D2)(c.image).width(820).height(820).toString()
                    } : null, [c]), h = (0, i.useMemo)(() => s ? {
                        "@type": "CollectionPage",
                        "@id": "".concat(s.url, "#webpage"),
                        url: s.url,
                        inLanguage: "en-US",
                        name: s.title,
                        description: s.description,
                        isPartOf: {
                            "@id": m["@id"]
                        },
                        breadcrumb: {
                            "@id": "".concat(s.url, "#breadcrumb")
                        }
                    } : a ? {
                        "@type": "WebPage",
                        "@id": "".concat(a.url, "#webpage"),
                        url: a.url,
                        inLanguage: "en-US",
                        name: a.title,
                        ...a.publishedAt ? {
                            datePublished: a.publishedAt
                        } : {},
                        ...a.updatedAt ? {
                            dateModified: a.updatedAt
                        } : {},
                        description: a.description,
                        isPartOf: {
                            "@id": m["@id"]
                        },
                        about: {
                            "@id": u["@id"]
                        }
                    } : null, [a, s]), g = (0, i.useMemo)(() => r ? {
                        "@type": "Article",
                        headline: r.title,
                        datePublished: r.publishedAt,
                        dateModified: r.updatedAt,
                        author: {
                            "@type": "Person",
                            "@id": "".concat("https://jmswrnr.com", "/about#person"),
                            name: "James Warner"
                        },
                        mainEntityOfPage: {
                            "@id": "".concat(r.url, "#webpage")
                        },
                        isPartOf: {
                            "@id": "".concat(r.url, "#webpage")
                        },
                        publisher: {
                            "@id": u["@id"]
                        },
                        image: {
                            "@id": "".concat(r.url, "#primaryimage")
                        },
                        description: r.description
                    } : null, [r]), f = (0, i.useMemo)(() => (null == n ? void 0 : n.length) ? {
                        "@type": "ItemList",
                        itemListElement: n.map((e, t) => ({
                            "@type": "ListItem",
                            position: t + 1,
                            url: e
                        }))
                    } : null, [n]);
                    return (0, i.useMemo)(() => l({
                        "@context": "https://schema.org",
                        "@graph": [u, m, p, h, d, g, f].filter(e => null !== e)
                    }), [h, p, d, g, f])
                },
                p = i.Fragment,
                h = e => {
                    let {
                        title: t,
                        description: r,
                        image: i,
                        site: s = "@jmswrnr",
                        creator: l = "@jmswrnr",
                        large: c = !0
                    } = e;
                    return (0, n.jsxs)(p, {
                        children: [(0, n.jsx)("meta", {
                            name: "twitter:card",
                            content: c && i ? "summary_large_image" : "summary"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:site",
                            content: s
                        }), (0, n.jsx)("meta", {
                            name: "twitter:title",
                            content: t
                        }), r ? (0, n.jsx)("meta", {
                            name: "twitter:description",
                            content: r
                        }) : null, (0, n.jsx)("meta", {
                            name: "twitter:image",
                            content: i ? (0, o.D2)(i).width(c ? 300 : 120).height(c ? 157 : 120).dpr(3).format("png").toString() : a
                        }), (0, n.jsx)("meta", {
                            name: "twitter:creator",
                            content: l
                        })]
                    })
                },
                g = e => {
                    let {
                        type: t = "website",
                        title: r,
                        description: i,
                        image: a,
                        url: l,
                        large: c = !0
                    } = e;
                    return (0, n.jsxs)(p, {
                        children: [(0, n.jsx)("meta", {
                            property: "og:type",
                            content: t
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: l
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: r
                        }), i ? (0, n.jsx)("meta", {
                            property: "og:description",
                            content: i
                        }) : null, (0, n.jsx)("meta", {
                            property: "og:image",
                            content: a ? (0, o.D2)(a).width(c ? 1200 : 200).height(c ? 630 : 200).format("png").toString() : s
                        }), (0, n.jsx)("meta", {
                            property: "og:image:width",
                            content: c && a ? "1200" : "200"
                        }), (0, n.jsx)("meta", {
                            property: "og:image:height",
                            content: c && a ? "630" : "200"
                        })]
                    })
                },
                f = e => {
                    let {
                        publishedAt: t,
                        updatedAt: r,
                        tags: i = [],
                        section: o
                    } = e;
                    return (0, n.jsxs)(p, {
                        children: [(0, n.jsx)(g, { ...e,
                            type: "article"
                        }), (0, n.jsx)("meta", {
                            property: "og:site_name",
                            content: "James Warner"
                        }), t && (0, n.jsx)("meta", {
                            property: "article:published_time",
                            content: t
                        }), r && (0, n.jsx)("meta", {
                            property: "article:modified_time",
                            content: r
                        }), (0, n.jsx)("meta", {
                            property: "article:author",
                            content: "".concat("https://jmswrnr.com", "/about")
                        }), o && (0, n.jsx)("meta", {
                            property: "article:section",
                            content: o
                        }), i.map((e, t) => (0, n.jsx)("meta", {
                            property: "article:tag",
                            content: e
                        }, t))]
                    })
                },
                w = e => (0, n.jsxs)(p, {
                    children: [(0, n.jsx)(g, { ...e,
                        type: "profile"
                    }), (0, n.jsx)("meta", {
                        property: "profile:first_name",
                        content: "James"
                    }), (0, n.jsx)("meta", {
                        property: "profile:last_name",
                        content: "Warner"
                    }), (0, n.jsx)("meta", {
                        property: "profile:username",
                        content: "JMSWRNR"
                    })]
                })
        },
        14039: function(e) {
            e.exports = {
                wrapper: "Grid_wrapper__rY988",
                grid: "Grid_grid__qWybJ",
                item: "Grid_item__dDKT7",
                coverimage: "Grid_coverimage__YWssv",
                color: "Grid_color__T3Faf",
                contents: "Grid_contents__oOnhg",
                postlist: "Grid_postlist__IUqPG",
                thumbnail: "Grid_thumbnail__N8_BA",
                title: "Grid_title__JEuyG",
                bottom: "Grid_bottom__9TqBe",
                meta: "Grid_meta__JzDhZ",
                metatag: "Grid_metatag__1zmnP",
                type: "Grid_type__0SDIt",
                new: "Grid_new__Uuyne",
                header: "Grid_header__t0wSz",
                description: "Grid_description__vJYXJ",
                cta: "Grid_cta__CtM1J",
                sidebar: "Grid_sidebar__HSqd5"
            }
        },
        9008: function(e, t, r) {
            e.exports = r(29709)
        },
        70386: function(e, t, r) {
            "use strict";
            r.d(t, {
                Dz: function() {
                    return p
                },
                R2: function() {
                    return d
                }
            });
            var n = r(67294);
            let i = [],
                o = (e, t, r) => (function(e, t, r = !1, n = {}) {
                    for (let e of i)
                        if (function(e, t, r = (e, t) => e === t) {
                                if (e === t) return !0;
                                if (!e || !t) return !1;
                                let n = e.length;
                                if (t.length !== n) return !1;
                                for (let i = 0; i < n; i++)
                                    if (!r(e[i], t[i])) return !1;
                                return !0
                            }(t, e.keys, e.equal)) {
                            if (r) return;
                            if (Object.prototype.hasOwnProperty.call(e, "error")) throw e.error;
                            if (Object.prototype.hasOwnProperty.call(e, "response")) return e.response;
                            if (!r) throw e.promise
                        }
                    let o = {
                        keys: t,
                        equal: n.equal,
                        promise: e(...t).then(e => o.response = e).then(() => {
                            n.lifespan && n.lifespan > 0 && setTimeout(() => {
                                let e = i.indexOf(o); - 1 !== e && i.splice(e, 1)
                            }, n.lifespan)
                        }).catch(e => o.error = e)
                    };
                    if (i.push(o), !r) throw o.promise
                })(e, t, !1, r);
            var a = r(85893);
            let s = async (e, t) => {
                    let r = await fetch("https://".concat(e, ".api.sanity.io/v1/users/me"), {
                            credentials: "include",
                            headers: t ? {
                                Authorization: "Bearer ".concat(t)
                            } : void 0
                        }),
                        n = await r.json();
                    return Boolean(null == n ? void 0 : n.id)
                },
                l = async () => {
                    let e = await r.e(6807).then(r.bind(r, 56807)),
                        {
                            groqStore: t
                        } = "default" in e ? e.default : e;
                    return t
                },
                c = async () => {
                    let e = await r.e(7240).then(r.t.bind(r, 77240, 19)),
                        {
                            EventSourcePolyfill: t
                        } = "default" in e ? e.default : e;
                    return t
                },
                u = e => {
                    let t, {
                        projectId: r,
                        dataset: i,
                        documentLimit: o = 3e3,
                        subscriptionThrottleMs: a = 10,
                        importEventSourcePolyfill: s,
                        importGroqStore: l,
                        preload: c,
                        onPublicAccessOnly: u,
                        checkAuth: m,
                        includeTypes: d
                    } = e;
                    return r ? function(e, p, h) {
                        if ("undefined" == typeof document) throw Error("Calling usePreview outside a browser environment isn't supported. Ensure the component using the hook is only rendering on the client. For example by wrapping it in PreviewSuspense.");
                        if (!e && null !== e) throw Error("No `token` given to usePreview hook, if this is intentional then set it to `null`");
                        let g = function(e) {
                            let t = (0, n.useMemo)(() => JSON.stringify(e || null), [e]);
                            return (0, n.useMemo)(() => JSON.parse(t), [t])
                        }(h);
                        if (!t) {
                            if (u) {
                                let t = m(r, e);
                                t || u()
                            }
                            let n = l();
                            t = n({
                                projectId: r,
                                dataset: i,
                                documentLimit: o,
                                subscriptionThrottleMs: a,
                                includeTypes: d,
                                token: null === e ? void 0 : e,
                                EventSource: null === e ? void 0 : s(),
                                listen: !0,
                                overlayDrafts: !0
                            })
                        }
                        let f = c(t, p, g),
                            w = (0, n.useMemo)(() => {
                                let e = f;
                                return {
                                    getSnapshot: () => e,
                                    subscribe: r => {
                                        let n = t.subscribe(p, void 0 === g ? {} : g, (t, n) => {
                                            if (t) throw console.error("Error thrown in the usePreviewHook subscription", t), t;
                                            e = n, r()
                                        });
                                        return () => n.unsubscribe()
                                    }
                                }
                            }, [f, g, p]);
                        return (0, n.useEffect)(() => {
                            let e = () => {
                                t.close()
                            };
                            return window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e)
                        }, []), (0, n.useSyncExternalStore)(w.subscribe, w.getSnapshot)
                    } : (console.warn("No projectId set for createPreviewHook, returning dummy hook"), function() {
                        return console.warn("The hook returned by createPreviewHook is a dummy as there is no projectId set, returning null"), null
                    })
                },
                m = (e, t, r) => e.query(t, r),
                d = e => u({ ...e,
                    importEventSourcePolyfill: () => o(() => c(), ["@sanity/preview-kit", "event-source-polyfill"]),
                    importGroqStore: () => o(() => l(), ["@sanity/preview-kit", "@sanity/groq-store"]),
                    preload: (e, t, r) => o(() => m(e, t, r), ["@sanity/preview-kit", "preload", t, JSON.stringify(null != r ? r : null)]),
                    checkAuth: (e, t) => o(() => s(e, t), ["@sanity/preview-kit", "checkAuth", e, t])
                });

            function p(e) {
                let {
                    children: t,
                    fallback: r
                } = e, [i, o] = (0, n.useReducer)(() => !0, !1);
                return (0, n.useEffect)(o, [o]), (0, a.jsx)(n.Suspense, {
                    fallback: r,
                    children: i ? t : r
                })
            }
        }
    }
]);
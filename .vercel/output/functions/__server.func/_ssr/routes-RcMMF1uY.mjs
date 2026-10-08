import { o as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as object, t as _enum } from "../_libs/zod.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-RcMMF1uY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		href: "#creed",
		label: "Creed"
	},
	{
		href: "#programs",
		label: "Programs"
	},
	{
		href: "#coaches",
		label: "Coaches"
	},
	{
		href: "#pricing",
		label: "Membership"
	},
	{
		href: "#visit",
		label: "Visit"
	}
];
var creed = [
	"No mirrors.",
	"No machines that do the work for you.",
	"The bar does not care who you were yesterday.",
	"Show up before the light. Leave it on the floor.",
	"Strength is earned. Never rented."
];
var programs$1 = [
	{
		id: "strength",
		index: "01",
		name: "Strength",
		kicker: "The iron",
		line: "Squat. Press. Pull. Add weight when the bar says you earned it.",
		meta: "Four coached days · the barbell",
		video: "/media/iron.mp4",
		poster: "/media/iron.jpg"
	},
	{
		id: "conditioning",
		index: "02",
		name: "Conditioning",
		kicker: "The grind",
		line: "Track, sled, carry. An engine that does not negotiate.",
		meta: "Dawn sessions · breath you can see",
		video: "/media/grind.mp4",
		poster: "/media/grind.jpg"
	},
	{
		id: "team",
		index: "03",
		name: "Team",
		kicker: "The crew",
		line: "Six athletes. One clock. Nobody hides in a crowd this small.",
		meta: "Capped at six · shared bar",
		image: "/media/team.jpg"
	}
];
var coaches = [
	{
		name: "Anil Shrestha",
		role: "Head of strength",
		tenure: "Fourteen years under the bar",
		line: "Writes the programs. Still takes the last set.",
		image: "/media/coach-anil.jpg"
	},
	{
		name: "Maya Gurung",
		role: "Conditioning",
		tenure: "Ran the 1500 before she coached it",
		line: "Dawn on the track. If you can see your breath, you are on time.",
		image: "/media/coach-maya.jpg"
	},
	{
		name: "Rohan Koirala",
		role: "Team coach",
		tenure: "Crews of six",
		line: "Keeps the room honest and the clock louder than excuses.",
		image: "/media/coach-rohan.jpg"
	}
];
var stats = [
	{
		value: 240,
		label: "Members on the floor"
	},
	{
		value: 63,
		label: "PRs this month"
	},
	{
		value: 9,
		label: "Years the door has opened"
	}
];
var tiers = [
	{
		id: "open",
		name: "Open",
		price: "3,900",
		blurb: "The floor, the rack, the track. You write the session.",
		points: [
			"Open 05:00 to 21:00",
			"Racks, rings, sleds, and the track",
			"Your name on the community board"
		],
		cta: "Request a start",
		featured: false
	},
	{
		id: "forge",
		name: "Forge",
		price: "6,800",
		blurb: "Coached strength. A program with your name on it.",
		points: [
			"Everything in Open",
			"Coached strength, four days",
			"Programming written for you",
			"First week on the house"
		],
		cta: "First week free",
		featured: true
	},
	{
		id: "crew",
		name: "Crew",
		price: "11,500",
		blurb: "A team of six. Competition when you want it.",
		points: [
			"A crew capped at six",
			"Meet prep and reserved racks",
			"One private hour each month"
		],
		cta: "Join the crew",
		featured: false
	}
];
var schedule = [
	{
		day: "Mon",
		dawn: "Strength 05:30",
		noon: "Open floor",
		eve: "Team 17:30"
	},
	{
		day: "Tue",
		dawn: "Strength 05:30",
		noon: "Conditioning",
		eve: "Open floor"
	},
	{
		day: "Wed",
		dawn: "Strength 05:30",
		noon: "Open floor",
		eve: "Team 17:30"
	},
	{
		day: "Thu",
		dawn: "Strength 05:30",
		noon: "Conditioning",
		eve: "Open floor"
	},
	{
		day: "Fri",
		dawn: "Strength 05:30",
		noon: "Open floor",
		eve: "Team 17:30"
	},
	{
		day: "Sat",
		dawn: "Long strength 07:00",
		noon: "—",
		eve: "Open floor"
	},
	{
		day: "Sun",
		dawn: "Open floor 08:00",
		noon: "Closes 12:00",
		eve: "—"
	}
];
function Coaches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "coaches",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "section-head",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "section-index",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " The room"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Coaches" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "They watch the last rep. They do not watch you in a mirror."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap coach-grid",
			children: coaches.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "coach-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "coach-photo plate-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: coach.image,
						alt: coach.name
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "coach-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: coach.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "coach-role",
							children: [
								coach.role,
								" · ",
								coach.tenure
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: coach.line })
					]
				})]
			}, coach.name))
		})]
	});
}
function Creed() {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lines = [...section.querySelectorAll("[data-line]")];
		const ticks = [...section.querySelectorAll("[data-tick]")];
		let ticking = false;
		const update = () => {
			ticking = false;
			const rect = section.getBoundingClientRect();
			const total = section.offsetHeight - window.innerHeight;
			const pos = (total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total))) * (lines.length - 1);
			lines.forEach((line, index) => {
				const visibility = Math.max(0, Math.min(1, 1 - Math.abs(pos - index) * 1.15));
				line.style.opacity = visibility.toFixed(3);
				line.style.transform = `translate3d(0, ${(1 - visibility) * 28}px, 0)`;
			});
			const active = Math.round(pos);
			ticks.forEach((tick, index) => tick.classList.toggle("is-on", index === active));
			section.dataset.creed = String(active);
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "creed",
		id: "creed",
		"data-creed": "0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "creed-sticky",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-index",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " House rules"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "creed-list",
					children: creed.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "creed-line",
						"data-line": true,
						children: line
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "creed-ticks",
					"aria-hidden": "true",
					children: creed.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-tick": true,
						className: index === 0 ? "is-on" : void 0
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "creed-foot",
					children: "Lumbini. By hand."
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-foot",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "foot-mark",
				children: "FORGE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Earn it." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "14 Industrial Lane · Lumbini Sanskritik · Rupandehi" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "27.484° N · 83.282° E" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				children: "Back to the floor"
			})
		]
	});
}
function Hero() {
	const sectionRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		const video = videoRef.current;
		if (!section || !video) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		video.muted = true;
		if (reduce) {
			video.loop = true;
			video.play().catch(() => void 0);
			return;
		}
		video.pause();
		let frame = 0;
		let seekLock = false;
		let seekTimer = 0;
		const release = () => {
			seekLock = false;
			window.clearTimeout(seekTimer);
			video.removeEventListener("seeked", release);
		};
		const seekTo = (target) => {
			if (seekLock || Math.abs(video.currentTime - target) < .05) return;
			seekLock = true;
			video.addEventListener("seeked", release);
			seekTimer = window.setTimeout(release, 180);
			try {
				video.currentTime = target;
			} catch {
				release();
			}
		};
		const tick = () => {
			const rect = section.getBoundingClientRect();
			const total = section.offsetHeight - window.innerHeight;
			const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
			section.style.setProperty("--scrub", progress.toFixed(4));
			section.dataset.scrub = progress.toFixed(4);
			const duration = video.duration;
			if (Number.isFinite(duration) && duration > 0 && rect.bottom > 0 && rect.top < window.innerHeight) {
				const target = Math.min(duration - .08, Math.max(0, progress * (duration - .08)));
				seekTo(target);
			}
			section.dataset.videoTime = video.currentTime.toFixed(3);
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(frame);
			release();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "hero",
		id: "top",
		"data-scrub": "0",
		"data-video-time": "0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-sticky",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "plate",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						className: "plate-media hero-video",
						src: "/media/hero.mp4",
						poster: "/media/hero.jpg",
						muted: true,
						playsInline: true,
						preload: "auto",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-copy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-lockup",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Lumbini · since 2017"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "forge-word",
								children: "FORGE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "motto",
								children: ["Earn it", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dot",
									children: "."
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-line",
					"aria-hidden": "true"
				})
			]
		})
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("nav-open", open);
		return () => document.body.classList.remove("nav-open");
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: solid ? "nav is-solid" : "nav",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "wordmark",
					href: "#top",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mark",
						"aria-hidden": "true"
					}), "FORGE"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "nav-links",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "nav-toggle",
					"aria-expanded": open,
					"aria-controls": "nav-panel",
					onClick: () => setOpen((value) => !value),
					children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Close menu" : "Open menu"
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "nav-panel",
			className: "nav-panel",
			"aria-label": "Mobile",
			children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				onClick: () => setOpen(false),
				children: item.label
			}, item.href))
		}) : null]
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "section-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "section-index",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " The board"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Membership" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "Pay for the work. Not the wallpaper. The middle tier is how the house trains."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap pricing-grid",
				children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: tier.featured ? "tier tier-featured" : "tier",
					"data-featured": tier.featured ? "true" : "false",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tier-flag",
							children: tier.featured ? "The standard" : "\xA0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: tier.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "price",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NPR" }), tier.price]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cadence",
							children: "per month"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tier-blurb",
							children: tier.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: tier.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: tier.featured ? "btn btn-accent" : "btn btn-line",
							onClick: () => {
								window.dispatchEvent(new CustomEvent("forge:join", { detail: tier.id }));
							},
							children: tier.cta
						})
					]
				}, tier.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wrap fine",
				children: "NPR per month. No contract. Stop when the work stops."
			})
		]
	});
}
function Programs() {
	const scrollerRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const scroller = scrollerRef.current;
		if (!scroller) return;
		const onScroll = () => {
			const cards = [...scroller.querySelectorAll(".program-card")];
			const mid = scroller.scrollLeft + scroller.clientWidth / 2;
			let best = 0;
			let bestDistance = Number.POSITIVE_INFINITY;
			cards.forEach((card, index) => {
				const center = card.offsetLeft + card.offsetWidth / 2;
				const distance = Math.abs(center - mid);
				if (distance < bestDistance) {
					bestDistance = distance;
					best = index;
				}
			});
			setActive(best);
		};
		scroller.addEventListener("scroll", onScroll, { passive: true });
		return () => scroller.removeEventListener("scroll", onScroll);
	}, []);
	const focusCard = (index) => {
		const scroller = scrollerRef.current;
		const card = scroller?.querySelectorAll(".program-card")[index];
		if (!scroller || !card) return;
		scroller.scrollTo({
			left: card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2,
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "section-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "section-index",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " The work"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Programs" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "Three ways to train. One standard. Nothing in this room moves the weight for you."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "swipe-hint",
				children: "Swipe the floor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "program-grid",
				ref: scrollerRef,
				children: programs$1.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program }, program.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "program-dots",
				children: programs$1.map((program, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: index === active ? "dot-btn is-on" : "dot-btn",
					"aria-label": `Show ${program.name}`,
					onClick: () => focusCard(index),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				}, program.id))
			})
		]
	});
}
function ProgramCard({ program }) {
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (!window.matchMedia("(max-width: 800px)").matches) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			if (entry.isIntersecting) video.play().catch(() => void 0);
			else video.pause();
		}, { threshold: .65 });
		observer.observe(video);
		return () => observer.disconnect();
	}, []);
	const play = () => {
		const video = videoRef.current;
		if (!video) return;
		if (window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) video.play().catch(() => void 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "program-card",
		onMouseEnter: play,
		onMouseLeave: () => videoRef.current?.pause(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "plate",
			children: program.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "plate-media",
				src: program.video,
				poster: program.poster,
				muted: true,
				playsInline: true,
				loop: true,
				preload: "metadata",
				"aria-hidden": "true"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "plate-media",
				src: program.image,
				alt: ""
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "program-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-rule",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker",
					children: [
						program.index,
						" · ",
						program.kicker
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: program.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: program.line }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "program-meta",
					children: program.meta
				})
			]
		})]
	});
}
function Results() {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setActive(true);
		}, { threshold: .4 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "results",
		ref,
		className: "results",
		"aria-label": "The count",
		children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
			value: stat.value,
			label: stat.label,
			active
		}, stat.label))
	});
}
function Stat({ value, label, active }) {
	const shown = useCount(value, active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "stat",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "stat-num",
			children: shown.toLocaleString("en-US")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "stat-label",
			children: label
		})]
	});
}
function useCount(target, active) {
	const [value, setValue] = (0, import_react.useState)(target);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(target);
			return;
		}
		let cancelled = false;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			if (cancelled) return;
			const t = Math.min(1, (now - start) / 1100);
			const eased = 1 - (1 - t) ** 3;
			setValue(Math.round(eased * target));
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		setValue(0);
		frame = requestAnimationFrame(tick);
		return () => {
			cancelled = true;
			cancelAnimationFrame(frame);
		};
	}, [active, target]);
	return value;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var startInput = object({
	program: _enum([
		"strength",
		"conditioning",
		"team",
		"unsure"
	]),
	membership: _enum([
		"open",
		"forge",
		"crew"
	])
});
var boardCount = createServerFn({ method: "GET" }).handler(createSsrRpc("bfc0155f7a909750db3c609f9c2afd59a67f74eb05b091013b0d91654d5b1593"));
var recordStart = createServerFn({ method: "POST" }).validator((input) => startInput.parse(input)).handler(createSsrRpc("edb3cf3926197fa96ed00c95986d48987ddeb234db0541328731fc0ed6b5970f"));
var MAP = "https://www.openstreetmap.org/export/embed.html?bbox=83.265%2C27.472%2C83.298%2C27.496&layer=mapnik&marker=27.4842%2C83.2815";
function bookLine(total) {
	return total === 1 ? "1 start on the book." : `${total} starts on the book.`;
}
var programs = {
	strength: "Strength",
	conditioning: "Conditioning",
	team: "Team",
	unsure: "Not sure yet"
};
function Visit() {
	const [today, setToday] = (0, import_react.useState)(null);
	const [clock, setClock] = (0, import_react.useState)("Lumbini time");
	const [membership, setMembership] = (0, import_react.useState)("forge");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [program, setProgram] = (0, import_react.useState)("strength");
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)("");
	const [logged, setLogged] = (0, import_react.useState)(null);
	const [sending, setSending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const weekday = new Intl.DateTimeFormat("en-US", {
			timeZone: "Asia/Kathmandu",
			weekday: "short"
		}).format(/* @__PURE__ */ new Date());
		setToday(weekday);
		const hour = Number(new Intl.DateTimeFormat("en-US", {
			timeZone: "Asia/Kathmandu",
			hour: "2-digit",
			hourCycle: "h23"
		}).format(/* @__PURE__ */ new Date()));
		setClock(`Lumbini · ${weekday} · ${hour >= 5 && hour < 9 ? "Dawn session" : hour >= 9 && hour < 16 ? "Open floor" : hour >= 16 && hour < 21 ? "Evening session" : "Closed until 05:00"}`);
	}, []);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		boardCount().then((row) => {
			if (!cancelled) setLogged(row.total);
		}).catch(() => {
			if (!cancelled) setLogged(null);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onJoin = (event) => {
			const detail = event.detail;
			if (detail) setMembership(detail);
			const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
			document.getElementById("signup")?.scrollIntoView({
				behavior,
				block: "center"
			});
			window.setTimeout(() => document.getElementById("signup-name")?.focus(), 350);
		};
		window.addEventListener("forge:join", onJoin);
		return () => window.removeEventListener("forge:join", onJoin);
	}, []);
	const onSubmit = (event) => {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = "Give the name you want on the board.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "That email will not reach a coach.";
		setErrors(next);
		if (Object.keys(next).length > 0 || sending) return;
		setSending(true);
		recordStart({ data: {
			program,
			membership
		} }).then((row) => {
			setLogged(row.total);
			setDone(name.trim().split(" ")[0] ?? name.trim());
		}).catch(() => {
			setErrors({ form: "The book did not take it. Try again." });
		}).finally(() => setSending(false));
	};
	const tierName = tiers.find((tier) => tier.id === membership)?.name ?? "Forge";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "visit",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "section-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "section-index",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " Find the door"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Visit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede",
						children: "The floor is in Lumbini. The track is outside. Eight minutes from the Maya Devi gate — not on temple grounds."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "yard",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/yard.jpg",
					alt: "The shed on Industrial Lane at dusk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "14 Industrial Lane" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "table-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "board",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", { children: "Weekly board" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Day"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Dawn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Midday"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "Evening"
									})
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: schedule.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: today === row.day ? "is-today" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "row",
											children: row.day
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.dawn }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.noon }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.eve })
									]
								}, row.day)) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "clock",
						children: clock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "visit-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "map-frame",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Map of FORGE on Industrial Lane, Lumbini",
								src: MAP,
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "address",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FORGE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "14 Industrial Lane" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lumbini Sanskritik Municipality" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rupandehi, Nepal" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "quiet",
									children: "Open 05:00–21:00. Sunday until noon."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "link-quiet",
									href: "https://www.openstreetmap.org/?mlat=27.4842&mlon=83.2815#map=16/27.4842/83.2815",
									target: "_blank",
									rel: "noreferrer",
									children: "Open the map"
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: "signup",
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "done",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [done, ", the book has you."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									programs[program],
									" · ",
									tierName,
									". ",
									bookLine(logged ?? 0)
								] })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "form",
								onSubmit,
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Claim a start" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "house-note",
										children: logged === null ? "The book is opening." : bookLine(logged)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "signup-name",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "signup-name",
										name: "name",
										autoComplete: "name",
										value: name,
										onChange: (event) => setName(event.target.value)
									}),
									errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "field-error",
										children: errors.name
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "signup-email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "signup-email",
										name: "email",
										type: "email",
										autoComplete: "email",
										value: email,
										onChange: (event) => setEmail(event.target.value)
									}),
									errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "field-error",
										children: errors.email
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "signup-program",
										children: "Program"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "signup-program",
										name: "program",
										value: program,
										onChange: (event) => setProgram(event.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "strength",
												children: "Strength"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "conditioning",
												children: "Conditioning"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "team",
												children: "Team"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "unsure",
												children: "Not sure yet"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "signup-tier",
										children: "Membership"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "signup-tier",
										name: "membership",
										value: membership,
										onChange: (event) => setMembership(event.target.value),
										children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: tier.id,
											children: tier.name
										}, tier.id))
									}),
									membership === "forge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "house-note",
										children: "First week free."
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "signup-note",
										children: "Note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "signup-note",
										name: "note",
										value: note,
										onChange: (event) => setNote(event.target.value)
									}),
									errors.form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "field-error",
										children: errors.form
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "btn btn-accent",
										disabled: sending,
										children: sending ? "Writing the book" : membership === "forge" ? "First week free" : `Request ${tierName}`
									})
								]
							})
						})]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#main",
			children: "Skip to the floor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Creed, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coaches, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };

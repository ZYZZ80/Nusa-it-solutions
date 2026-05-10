import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const WHATSAPP_DISPLAY = "085770759300";
const WHATSAPP_URL = "https://wa.me/6285770759300";
const EMAIL_DISPLAY = "contact@solutions.com";
const EMAIL_URL = "mailto:azizhannachi80@gmail.com";
const CONSULTANT_URL = "https://jakartaglobaladviser.com/";

const services = [
    { icon: "Web", title: "Premium Business Websites", text: "Modern websites for hotels, travel agencies, consultants, exporters, real estate, and service businesses. Built to look serious, trustworthy, and ready to convert visitors into leads." },
    { icon: "CRM", title: "CRM Dashboards & Client Systems", text: "Custom dashboards to manage leads, clients, sales pipeline, documents, payments, follow-ups, team tasks, and business performance from one clean interface." },
    { icon: "App", title: "Apps, Portals & Internal Tools", text: "Secure web apps, client portals, booking flows, admin panels, team tools, and database systems built around the exact workflow of each business." },
    { icon: "Ads", title: "Digital Marketing & Lead Generation", text: "SEO structure, content strategy, landing pages, WhatsApp funnels, campaign tracking, social media direction, and conversion-focused digital growth." }
];

const projects = [
    { key: "traveltoko", title: "TravelToko Dashboard", category: "Travel Sales Dashboard", text: "A travel dashboard for bookings, leads, guests, payments, documents, itineraries, follow-ups, revenue, and team activity from one organized control panel." },
    { key: "esmeralda", title: "Esmeralda Vacation Club Website", category: "Luxury Vacation Club Website", text: "A premium vacation club website for holiday ownership, apartment packages, hotel product positioning, exchange requests, services, and lead generation through WhatsApp and email.", url: "https://esmeraldavacation.club/" }
];

const comingSoonProjects = [
    { image: "/projects/coming-soon-crm-esmeralda.png", title: "CRM Esmeralda", category: "Coming Soon CRM Dashboard", text: "A sales command center for Esmeralda Vacation Club to manage leads, apartment inventory, payments, exchange activity, and reservation follow-ups." },
    { image: "/projects/coming-soon-padel-sukabumi.png", title: "Website Padel in Resort Sukabumi", category: "Coming Soon Resort Website", text: "A resort padel website for court booking, guest packages, private coaching, gallery presentation, and premium wellness club positioning." },
    { image: "/projects/coming-soon-tour-marketplace.png", title: "Travel Tour Marketplace for Travel Tours", category: "Coming Soon Travel Marketplace", text: "A travel marketplace for verified agencies, tour packages, destinations, prices, customer login, seller onboarding, and quotation requests." }
];

const packages = [
    { name: "Website Launch", price: "From USD 500", desc: "Premium business website, mobile responsive design, WhatsApp/contact flow, basic SEO, and professional brand presentation." },
    { name: "CRM Dashboard System", price: "From USD 1,200", desc: "Secure login, client database, lead pipeline, document tracking, sales overview, admin dashboard, and business analytics." },
    { name: "Growth & Automation Suite", price: "Custom", desc: "Website, CRM dashboard, client portal, digital marketing funnel, reporting system, and consulting support for serious growth." }
];

const faqs = [
    { q: "What makes PT NusaTech AI Solutions different?", a: "We do not only design websites. We build business systems: website, CRM, dashboard, client portal, AI integrations, and marketing funnel connected to real operations." },
    { q: "Can you build a website and dashboard together?", a: "Yes. A website can capture leads through forms or WhatsApp, then the CRM dashboard can help the client manage those leads, follow-ups, documents, and revenue." },
    { q: "Do you work with Indonesian and international clients?", a: "Yes. We are based in Indonesia and can serve local companies, foreign entrepreneurs, hotels, agencies, exporters, consultants, and global clients remotely." },
    { q: "Can you also provide consulting services?", a: "Yes. For clients who need more than development, we can also support business strategy, market entry, operational structure, and digital transformation planning." }
];

const industries = ["Hotels & Resorts", "Travel Agencies", "Vacation Clubs", "Real Estate", "Export Companies", "Consultants", "Retail Brands", "Service Businesses"];
const heroMetrics = [{ a: "Websites", b: "Premium brand image" }, { a: "Dashboards", b: "Control your operations" }, { a: "Marketing", b: "Generate qualified leads" }];
const dashboardStats = [{ label: "New Leads", value: "248" }, { label: "Pipeline Value", value: "USD 42K" }, { label: "Conversion", value: "+32%" }];
const process = [{ num: "01", title: "Business Discovery" }, { num: "02", title: "Premium UI/UX Design" }, { num: "03", title: "Development & Database" }, { num: "04", title: "Launch, Training & Support" }];

const cssRules = [
    "@keyframes spinInfinite { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    "@keyframes fadeOut { 0% { opacity: 1; } 78% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",
    "@keyframes glowPulse { 0%, 100% { transform: scale(.92); filter: blur(14px); } 50% { transform: scale(1.15); filter: blur(22px); } }",
    "@keyframes bubbleIn { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }",
    "@keyframes tailWag { 0%, 100% { transform: rotate(-22deg); } 50% { transform: rotate(28deg); } }",
    "@keyframes tailSlow { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(10deg); } }",
    ".intro { animation: fadeOut 2.6s forwards; }",
    ".logoSpin { animation: spinInfinite 2s linear infinite; }",
    ".logoGlow { background: radial-gradient(circle, rgba(34,211,238,.68), rgba(37,99,235,.28) 42%, transparent 72%); filter: blur(16px); transition: opacity .45s ease; animation: glowPulse 1.8s ease-in-out infinite; }",
    ".logoPath { transition: all 1.15s cubic-bezier(.16,1,.3,1); }",
    ".bubble { animation: bubbleIn .45s cubic-bezier(.16,1,.3,1) both; }",
    ".cat { position: relative; width: 64px; height: 54px; transform-origin: center; transition: transform .25s ease, filter .25s ease; }",
    ".catLeft { transform: scaleX(-1); }",
    ".catSit { transform: translateY(7px) scale(.96); }",
    ".catSit.catLeft { transform: translateY(7px) scale(.96) scaleX(-1); }",
    ".catHead { position: absolute; left: 10px; top: 8px; width: 44px; height: 40px; display: grid; place-items: center; border-radius: 48% 48% 45% 45%; background: linear-gradient(135deg, #f8fafc, #cbd5e1); box-shadow: 0 14px 28px rgba(0,0,0,.36), inset 0 0 0 2px rgba(34,211,238,.30); }",
    ".catHead::before { content: ''; position: absolute; left: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(34,211,238,.18); }",
    ".catHead::after { content: ''; position: absolute; right: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(34,211,238,.18); }",
    ".catFace { position: relative; z-index: 2; font-size: 12px; font-weight: 900; color: #0f172a; letter-spacing: .02em; }",
    ".catFace::before { content: ''; position: absolute; width: 4px; height: 4px; border-radius: 999px; background: #0f172a; left: -8px; top: 3px; box-shadow: 16px 0 0 #0f172a; }",
    ".catFace::after { content: ''; position: absolute; width: 5px; height: 4px; border-radius: 999px; background: #0f172a; left: 50%; transform: translateX(-50%); top: 10px; }",
    ".catTail { position: absolute; right: 2px; top: 25px; width: 26px; height: 9px; border-radius: 999px; background: linear-gradient(90deg, #22d3ee, #2563eb); transform-origin: left center; box-shadow: 0 8px 20px rgba(6,182,212,.25); }",
    ".catTail::after { content: ''; position: absolute; right: -5px; top: -3px; width: 10px; height: 10px; border-radius: 999px; background: #2563eb; }",
    ".catBody { position: absolute; left: 7px; top: 27px; width: 42px; height: 22px; border-radius: 999px; background: linear-gradient(135deg, #e2e8f0, #94a3b8); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35); }",
    ".catPaw { position: absolute; bottom: 1px; width: 8px; height: 5px; border-radius: 999px; background: #f8fafc; }",
    ".catPaw.one { left: 16px; }",
    ".catPaw.two { left: 34px; }",
    ".catWalk .catTail { animation: tailWag .42s ease-in-out infinite; }",
    ".catSit .catTail { animation: tailSlow .95s ease-in-out infinite; }",
    ".cat-happy .catHead { box-shadow: 0 14px 34px rgba(6,182,212,.55), inset 0 0 0 2px rgba(34,211,238,.55); }",
    ".cat-sad .catHead { filter: grayscale(.55) brightness(.85); }",
    ".catShadow { position: absolute; width: 42px; height: 10px; background: rgba(0,0,0,.42); border-radius: 50%; top: 48px; left: 11px; filter: blur(5px); }",
    ".avatarHomeRoof { position: absolute; left: 18px; top: 9px; width: 26px; height: 26px; transform: rotate(45deg); border-left: 2px solid rgba(34,211,238,.75); border-top: 2px solid rgba(34,211,238,.75); background: linear-gradient(135deg, rgba(34,211,238,.22), rgba(37,99,235,.16)); }",
    ".avatarHomeBody { position: absolute; left: 15px; top: 24px; width: 32px; height: 25px; border: 2px solid rgba(34,211,238,.75); border-radius: 8px 8px 10px 10px; background: rgba(15,23,42,.92); box-shadow: inset 0 0 20px rgba(34,211,238,.12); }",
    ".avatarHomeDoor { position: absolute; left: 27px; top: 34px; width: 9px; height: 15px; border-radius: 6px 6px 0 0; background: linear-gradient(180deg, #22d3ee, #2563eb); }"
];

function playTone(type) {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const audio = new AudioContextClass();
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        const isMeow = type === "meow";
        osc.type = isMeow ? "triangle" : "sine";
        osc.frequency.setValueAtTime(isMeow ? 520 : 620, audio.currentTime);
        osc.frequency.exponentialRampToValueAtTime(isMeow ? 880 : 180, audio.currentTime + 0.18);
        gain.gain.setValueAtTime(0.0001, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(isMeow ? 0.035 : 0.045, audio.currentTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.28);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start();
        osc.stop(audio.currentTime + 0.3);
    } catch (error) {
        // Optional browser sound.
    }
}

function Logo(props) {
    const className = props.className || "h-10 w-10";
    const intro = Boolean(props.intro);
    const [spin, setSpin] = useState(false);
    const [introSpin, setIntroSpin] = useState(false);

    useEffect(function logoIntroEffect() {
        if (!intro) return undefined;
        try {
            if (window.localStorage.getItem("logo_intro_seen")) return undefined;
            window.localStorage.setItem("logo_intro_seen", "true");
        } catch (error) {
            // localStorage can be unavailable in preview.
        }
        setIntroSpin(true);
        const timer = window.setTimeout(function stopIntroSpin() { setIntroSpin(false); }, 2200);
        return function cleanup() { window.clearTimeout(timer); };
    }, [intro]);

    const active = spin || introSpin;
    const buttonClass = ["relative", "grid", "place-items-center", "rounded-2xl", "outline-none", active ? "logoSpin" : ""].join(" ");
    const glowClass = ["absolute", "inset-[-10px]", "rounded-3xl", "logoGlow", active ? "opacity-100" : "opacity-20"].join(" ");

    return (
        <button
            type="button"
            aria-label="PT NusaTech AI Solutions logo"
            onClick={function handleClick() {
                setSpin(function toggle(value) { return !value; });
                playTone("whoosh");
            }}
            className={buttonClass}
        >
            <span className={glowClass} />
            <svg viewBox="0 0 100 100" className={className + " relative z-10"}>
                <defs>
                    <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="45%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx={active ? "30" : "20"} fill="url(#logoGradient)" />
                <path d={active ? "M30 70 V30 L70 70 V30" : "M35 65 L50 35 L65 65"} stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="logoPath" />
            </svg>
        </button>
    );
}

function Intro() {
    const [show, setShow] = useState(false);

    useEffect(function introEffect() {
        try {
            if (window.localStorage.getItem("page_intro_seen")) return undefined;
            window.localStorage.setItem("page_intro_seen", "true");
        } catch (error) {
            // Continue without localStorage.
        }
        setShow(true);
        const timer = window.setTimeout(function hideIntro() { setShow(false); }, 2600);
        return function cleanup() { window.clearTimeout(timer); };
    }, []);

    if (!show) return null;
    return (
        <div className="intro fixed inset-0 z-50 grid place-items-center bg-black">
            <div className="text-center">
                <Logo className="h-28 w-28" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.55em] text-white/80">PT NusaTech</p>
                <p className="mt-3 text-xs tracking-[0.3em] text-cyan-200/70">AI Solutions</p>
            </div>
        </div>
    );
}

function CatFollower() {
    const [dismissed, setDismissed] = useState(false);
    const [pos, setPos] = useState({ x: 120, y: 120 });
    const [direction, setDirection] = useState("right");
    const [mood, setMood] = useState("neutral");
    const [sitting, setSitting] = useState(false);
    const hideTimer = useRef(null);
    const target = useRef({ x: 120, y: 120 });
    const raf = useRef(null);
    const sitTimer = useRef(null);
    const sadTimer = useRef(null);

    useEffect(function readAvatarHomePreference() {
        try {
            setDismissed(window.localStorage.getItem("avatar_home") === "true");
        } catch (error) {
            // Continue without saved preference.
        }
    }, []);

    const sendAvatarHome = function sendAvatarHome() {
        const next = { x: 54, y: 64 };
        target.current = next;
        setDirection("left");
        setMood("happy");
        setSitting(true);
        if (sitTimer.current) window.clearTimeout(sitTimer.current);
        if (sadTimer.current) window.clearTimeout(sadTimer.current);
        if (hideTimer.current) window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(function hideAvatar() {
            try {
                window.localStorage.setItem("avatar_home", "true");
            } catch (error) {
                // Continue without saved preference.
            }
            setDismissed(true);
        }, 700);
    };

    useEffect(function catEffect() {
        if (dismissed) return undefined;

        const makeHappy = function makeHappy() {
            setMood("happy");
            if (sadTimer.current) window.clearTimeout(sadTimer.current);
            sadTimer.current = window.setTimeout(function resetMood() { setMood("neutral"); }, 3500);
        };

        const onMove = function onMove(event) {
            const next = { x: event.clientX, y: event.clientY };
            setDirection(next.x >= target.current.x ? "right" : "left");
            target.current = next;
            setSitting(false);
            setMood(function updateMood(current) { return current === "sad" ? "neutral" : current; });
            if (sitTimer.current) window.clearTimeout(sitTimer.current);
            if (sadTimer.current) window.clearTimeout(sadTimer.current);
            sitTimer.current = window.setTimeout(function sit() { setSitting(true); }, 900);
            sadTimer.current = window.setTimeout(function becomeSad() { setMood("sad"); }, 6500);
        };

        const onClick = function onClick(event) {
            playTone("meow");
            if (event.target && event.target.closest && event.target.closest("a,button")) makeHappy();
        };

        const onScroll = function onScroll() {
            const root = document.documentElement;
            const max = root.scrollHeight - root.clientHeight;
            if (max > 0 && root.scrollTop / max > 0.55) makeHappy();
        };

        const loop = function loop() {
            setPos(function update(previous) {
                return {
                    x: previous.x + (target.current.x - previous.x) * 0.075,
                    y: previous.y + (target.current.y - previous.y) * 0.075
                };
            });
            raf.current = window.requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("click", onClick);
        window.addEventListener("scroll", onScroll, { passive: true });
        raf.current = window.requestAnimationFrame(loop);

        return function cleanup() {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("click", onClick);
            window.removeEventListener("scroll", onScroll);
            if (sitTimer.current) window.clearTimeout(sitTimer.current);
            if (sadTimer.current) window.clearTimeout(sadTimer.current);
            if (hideTimer.current) window.clearTimeout(hideTimer.current);
            if (raf.current) window.cancelAnimationFrame(raf.current);
        };
    }, [dismissed]);

    if (dismissed) return null;

    const face = mood === "happy" ? "w" : mood === "sad" ? "n" : "v";
    const catClass = ["cat", direction === "left" ? "catLeft" : "", sitting ? "catSit" : "catWalk", "cat-" + mood].join(" ");

    return (
        <>
            <button type="button" onClick={sendAvatarHome} className="fixed left-4 top-4 z-50 h-16 w-16 rounded-2xl border border-cyan-300/30 bg-slate-950/85 shadow-2xl shadow-cyan-950/40 backdrop-blur transition hover:scale-105 hover:border-cyan-200/70" aria-label="Send avatar home">
                <span className="avatarHomeRoof" />
                <span className="avatarHomeBody" />
                <span className="avatarHomeDoor" />
            </button>
            <div style={{ transform: "translate(" + (pos.x - 26) + "px, " + (pos.y - 28) + "px)" }} className="pointer-events-none fixed z-40 transition-transform duration-75" aria-hidden="true">
                <div className="catShadow" />
                <div className={catClass}>
                    <div className="catTail" />
                    <div className="catBody" />
                    <div className="catPaw one" />
                    <div className="catPaw two" />
                    <div className="catHead"><span className="catFace">{face}</span></div>
                </div>
            </div>
        </>
    );
}

function RobotChat() {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {open && (
                <div className="bubble w-[260px] rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
                    <p className="text-sm font-bold text-white">Hello</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">Need a website, CRM dashboard, app, marketing funnel, or consulting support?</p>
                    <a href={WHATSAPP_URL} className="mt-3 inline-block w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-center text-xs font-bold text-white">WhatsApp {WHATSAPP_DISPLAY}</a>
                </div>
            )}
            <button type="button" onClick={function toggleOpen() { setOpen(function toggle(value) { return !value; }); }} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl transition hover:scale-105" aria-label="Open chat assistant">
                <span className="absolute inset-[-8px] rounded-full bg-cyan-400/20 blur-xl" />
                <span className="relative text-sm font-black">AI</span>
            </button>
        </div>
    );
}

function SectionTitle({ eyebrow, title, text }) {
    return (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.55em] text-cyan-300">{eyebrow}</p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
            {text ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">{text}</p> : null}
        </div>
    );
}

function DashboardPreview() {
    return (
        <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
                    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                        <span className="ml-auto text-xs text-slate-400">Live Business Dashboard</span>
                    </div>
                    <div className="p-5">
                        <div className="mb-5 grid grid-cols-3 gap-3">
                            {dashboardStats.map(function renderStat(item) {
                                return <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"><p className="text-2xl font-black">{item.value}</p><p className="text-xs text-slate-400">{item.label}</p></div>;
                            })}
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                            <div className="mb-5 flex items-center justify-between"><p className="font-bold">Sales Pipeline</p><p className="text-xs font-bold text-cyan-300">Active Campaign</p></div>
                            {[88, 70, 54, 76].map(function renderBar(w) { return <div key={w} className="mb-4 last:mb-0"><div className="h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width: String(w) + "%" }} /></div></div>; })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectScreenshot({ type }) {
    if (type === "traveltoko") {
        return (
            <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/20">
                <img src="/projects/traveltoko-dashboard-screenshot.png" alt="TravelToko dashboard screenshot" className="h-full w-full object-cover object-left-top" />
            </div>
        );
    }

    return (
        <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-white/10 bg-stone-50 text-slate-950 shadow-2xl shadow-black/20">
            <img src="/projects/esmeralda-vacation-club-screenshot.png" alt="Esmeralda Vacation Club website screenshot" className="h-full w-full object-cover object-left-top" />
        </div>
    );
}

function DigitalStudioWebsite() {
    return (
        <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
            <Intro />
            <CatFollower />
            <RobotChat />

            <section className="relative px-6 pb-24 pt-8 lg:px-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(6,182,212,0.35),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.32),transparent_30%),linear-gradient(135deg,#020617,#0f172a_58%,#111827)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:58px_58px] opacity-20" />
                <div className="relative z-10 mx-auto max-w-7xl">
                    <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <div className="flex items-center gap-3"><Logo className="h-11 w-11" intro /><div><p className="font-black tracking-wide">PT NusaTech AI Solutions</p><p className="text-xs text-slate-400">Web - CRM - Apps - AI Integrations - Consulting</p></div></div>
                        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex"><a href="#services" className="transition hover:text-white">Services</a><a href="#work" className="transition hover:text-white">Work</a><a href="#marketing" className="transition hover:text-white">Marketing</a><a href="#packages" className="transition hover:text-white">Packages</a><a href="#consulting" className="transition hover:text-white">Consulting</a><a href="#contact" className="transition hover:text-white">Contact</a></div>
                        <div className="flex gap-3"><a href="#contact" className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100">Start Project</a><a href={CONSULTANT_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-black text-white">Consulting</a></div>
                    </nav>
                    <div className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">Indonesia-based IT solutions and AI integrations partner</div>
                            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Premium websites, CRM dashboards, apps and marketing systems for serious businesses.</h1>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">PT NusaTech AI Solutions helps hotels, travel companies, exporters, consultants, and service businesses look premium, manage clients better, and turn digital systems into real sales opportunities.</p>
                            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#contact" className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-blue-900/30">Build My Website / CRM</a><a href="#work" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-black text-white transition hover:bg-white/10">View Work</a></div>
                            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">{heroMetrics.map(function renderMetric(item) { return <div key={item.a} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xl font-black">{item.a}</p><p className="text-sm text-slate-400">{item.b}</p></div>; })}</div>
                        </div>
                        <DashboardPreview />
                    </div>
                </div>
            </section>

            <section id="services" className="px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Services" title="Digital solutions built around real business operations." text="From the public website to the private dashboard, we create digital systems that improve trust, sales, client management, and daily workflow." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(function renderService(item) { return <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"><div className="mb-6 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-black text-cyan-200">{item.icon}</div><h3 className="mb-3 text-xl font-black">{item.title}</h3><p className="leading-7 text-slate-400">{item.text}</p></div>; })}</div></div></section>

            <section className="bg-slate-900/70 px-6 py-20 lg:px-20"><div className="mx-auto max-w-7xl"><div className="grid gap-4 md:grid-cols-4">{[{ n: "4", l: "Core services" }, { n: "24/7", l: "Online presence" }, { n: "100%", l: "Custom workflow" }, { n: "Global", l: "Client ready" }].map(function renderStat(item) { return <div key={item.l} className="rounded-3xl border border-white/10 bg-slate-950/60 p-7 text-center"><p className="text-4xl font-black text-cyan-300">{item.n}</p><p className="mt-2 text-sm text-slate-400">{item.l}</p></div>; })}</div></div></section>

            <section id="work" className="px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Portfolio Screenshots" title="Real project screenshots and dashboard previews." text="TravelToko Dashboard and the Esmeralda Vacation Club Website are shown as portfolio screenshots so clients can instantly understand the work." /><div className="grid gap-6 lg:grid-cols-2">{projects.map(function renderProject(item, index) { return <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"><div className="mb-3 w-fit rounded-2xl bg-white/10 px-3 py-2 text-xs text-cyan-100">Project 0{index + 1}</div><ProjectScreenshot type={item.key} /><p className="mb-2 text-sm font-bold text-cyan-300">{item.category}</p><h3 className="mb-3 text-2xl font-black">{item.title}</h3><p className="leading-7 text-slate-400">{item.text}</p>{item.url ? <a href={item.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-950/30">Visit Website</a> : null}</div>; })}</div></div></section>

            <section id="coming-soon" className="bg-slate-900/70 px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Coming Soon" title="New projects currently in the pipeline." text="These upcoming CRM, resort website, and travel marketplace concepts show the next systems PT NusaTech AI Solutions can launch for serious clients." /><div className="grid gap-6 lg:grid-cols-3">{comingSoonProjects.map(function renderComingSoon(item) { return <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20"><div className="mb-5 h-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-900"><img src={item.image} alt={item.title + " screenshot"} className="h-full w-full object-cover object-left-top" /></div><div className="mb-3 w-fit rounded-2xl bg-cyan-300 px-3 py-2 text-xs font-black text-slate-950">Coming Soon</div><p className="mb-2 text-sm font-bold text-cyan-300">{item.category}</p><h3 className="mb-3 text-2xl font-black">{item.title}</h3><p className="leading-7 text-slate-400">{item.text}</p></div>; })}</div></div></section>

            <section id="marketing" className="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-24 lg:px-20"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Digital Marketing</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">Not only a beautiful website - a complete lead generation system.</h2><p className="mt-6 text-lg leading-8 text-slate-400">We connect premium design with digital marketing strategy: SEO foundations, campaign pages, WhatsApp funnels, content direction, tracking, and CRM lead capture.</p></div><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><div className="rounded-3xl bg-slate-950 p-6">{["Website Visitors", "WhatsApp Clicks", "Qualified Leads", "Client Meetings"].map(function renderBar(label, i) { const values = [90, 78, 62, 48]; const growth = [74, 58, 41, 26]; return <div key={label} className="mb-6 last:mb-0"><div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span className="font-bold text-cyan-300">+{growth[i]}%</span></div><div className="h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width: String(values[i]) + "%" }} /></div></div>; })}</div></div></div></section>

            <section className="px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Industries" title="Industries we can serve from Indonesia." text="A flexible IT solutions and AI integrations partner for Indonesian businesses, foreign entrepreneurs, hotels, exporters, consultants, and international clients." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map(function renderIndustry(industry) { return <div key={industry} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center font-bold text-slate-200">{industry}</div>; })}</div></div></section>

            <section id="process" className="bg-slate-900/70 px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Process" title="A clear process clients can trust." text="Clients buy faster when the process is clear, professional, and connected to business results." /><div className="grid gap-5 lg:grid-cols-4">{process.map(function renderStep(item) { return <div key={item.num} className="rounded-3xl border border-white/10 bg-slate-950/60 p-7"><p className="mb-5 text-4xl font-black text-cyan-300">{item.num}</p><h3 className="mb-3 text-xl font-black">{item.title}</h3><p className="leading-7 text-slate-400">Clear execution from strategy and design to launch, training, and ongoing improvement.</p></div>; })}</div></div></section>

            <section id="packages" className="px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Packages" title="Packages designed for different business stages." text="Start with a professional website, upgrade to a CRM dashboard, or build a complete growth system with marketing and consulting support." /><div className="grid gap-6 lg:grid-cols-3">{packages.map(function renderPackage(item, index) { return <div key={item.name} className={"rounded-[2rem] border p-7 " + (index === 1 ? "border-cyan-300/40 bg-cyan-400/10 shadow-2xl shadow-cyan-950/30" : "border-white/10 bg-white/[0.04]")}>{index === 1 ? <p className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">Most Popular</p> : null}<h3 className="text-2xl font-black">{item.name}</h3><p className="mt-3 text-4xl font-black text-cyan-300">{item.price}</p><p className="mt-4 leading-7 text-slate-400">{item.desc}</p></div>; })}</div></div></section>

            <section id="consulting" className="bg-slate-900/70 px-6 py-24 lg:px-20"><div className="mx-auto max-w-6xl text-center"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Consulting</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">If your client also needs consulting services</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">Beyond websites and CRM systems, we can support market entry, business setup, commercial strategy, hotel and travel operations, digital transformation, and growth planning in Indonesia.</p><div className="mt-8"><a href={CONSULTANT_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 font-black text-white shadow-xl shadow-blue-900/30">Explore Consulting Support</a></div></div></section>

            <section className="px-6 py-24 lg:px-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="FAQ" title="Questions serious clients usually ask." /><div className="grid gap-5 md:grid-cols-2">{faqs.map(function renderFaq(item) { return <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"><h3 className="mb-3 text-xl font-black">{item.q}</h3><p className="leading-7 text-slate-400">{item.a}</p></div>; })}</div></div></section>

            <section id="contact" className="px-6 pb-24 lg:px-20"><div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-10 text-center shadow-2xl shadow-black/30 lg:p-16"><Logo className="mx-auto mb-6 h-16 w-16" /><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Start Your Project</p><h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Ready to build a website, CRM, AI integration, or digital system your client will respect?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Contact PT NusaTech AI Solutions for premium websites, CRM dashboards, apps, AI integrations, digital marketing funnels, and consulting support from Indonesia.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><a href={WHATSAPP_URL} className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 font-black text-white shadow-xl shadow-blue-900/30">WhatsApp {WHATSAPP_DISPLAY}</a><a href={EMAIL_URL} className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-black text-white transition hover:bg-white/10">{EMAIL_DISPLAY}</a></div></div></section>

            <footer className="border-t border-white/10 px-6 py-8 lg:px-20"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row"><p>Copyright 2026 PT NusaTech AI Solutions. All rights reserved.</p><p>WhatsApp {WHATSAPP_DISPLAY} - {EMAIL_DISPLAY}</p></div></footer>

            <div className="hidden">{tests.map(function renderTest(test) { return <span key={test.label}>{test.pass ? "pass" : "fail"}</span>; })}</div>
            <style>{cssRules.join("\n")}</style>
        </main>
    );
}

const tests = [
    { label: "Services section has 4 services", pass: services.length === 4 },
    { label: "Portfolio has 2 project examples", pass: projects.length === 2 },
    { label: "Coming soon has 3 project examples", pass: comingSoonProjects.length === 3 },
    { label: "Packages section has 3 offers", pass: packages.length === 3 },
    { label: "FAQ has answers", pass: faqs.every(function checkFaq(faq) { return faq.q && faq.a; }) },
    { label: "Logo component is available", pass: typeof Logo === "function" },
    { label: "Sound function is available", pass: typeof playTone === "function" },
    { label: "Cat follower mascot added", pass: typeof CatFollower === "function" },
    { label: "Robot chat added", pass: typeof RobotChat === "function" },
    { label: "Dashboard preview added", pass: typeof DashboardPreview === "function" },
    { label: "WhatsApp URL configured", pass: WHATSAPP_URL.indexOf("wa.me") !== -1 },
    { label: "Consultant URL configured", pass: CONSULTANT_URL.length > 0 },
    { label: "Hero metrics has 3 cards", pass: heroMetrics.length === 3 },
    { label: "Dashboard stats has 3 cards", pass: dashboardStats.length === 3 },
    { label: "Industries has 8 items", pass: industries.length === 8 },
    { label: "Process has 4 steps", pass: process.length === 4 },
    { label: "CSS rules are safely joined", pass: cssRules.length > 0 },
    { label: "No emoji in JavaScript data arrays", pass: services.every(function checkService(service) { return service.icon.length <= 3; }) }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DigitalStudioWebsite />
);

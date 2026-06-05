import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const WHATSAPP_DISPLAY = "085770759300";
const WHATSAPP_URL = "https://wa.me/6285770759300";
const EMAIL_DISPLAY = "admin@jakartaglobaladviser.com";
const EMAIL_URL = "mailto:admin@jakartaglobaladviser.com";
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
    { q: "Can you build a website and CRM dashboard together?", a: "Yes. A website can capture leads through forms or WhatsApp, then the CRM dashboard can help the client manage those leads, follow-ups, documents, and revenue." },
    { q: "Do you work with Indonesian and international clients?", a: "Yes. We are based in Indonesia and can serve local companies, foreign entrepreneurs, hotels, agencies, exporters, consultants, and global clients remotely." },
    { q: "Can you also provide consulting services?", a: "Yes. For clients who need more than development, we can also support business strategy, market entry, operational structure, and digital transformation planning." },
    { q: "How long does a project take?", a: "A standard business website takes 2–4 weeks. A CRM dashboard or custom portal typically takes 4–8 weeks depending on complexity. We provide a clear timeline before any project begins." },
    { q: "Do you offer ongoing maintenance and support?", a: "Yes. After launch we offer maintenance, updates, and support packages so the system keeps improving as the business grows. We do not disappear after delivery." },
    { q: "What is the payment structure?", a: "We typically work with a 50% deposit to begin and 50% upon delivery. For larger projects, milestone-based payments can be arranged. All terms are agreed in writing before work starts." }
];

const testimonials = [
    { quote: "PT NusaTech built a CRM dashboard that completely changed how we manage our leads and client follow-ups. They genuinely understood our business operations from day one and delivered beyond expectations.", name: "Operations Director", company: "Travel Club — Jakarta", initial: "T" },
    { quote: "Our new website generates more serious inquiries in a week than the old one did in a month. The design is premium and the WhatsApp integration converts visitors into conversations immediately.", name: "General Manager", company: "Boutique Resort — Bali", initial: "B" },
    { quote: "As an international business entering Indonesia, I needed a partner who understood both local and global standards. NusaTech delivered a professional website, CRM, and real strategic direction.", name: "Managing Director", company: "Export Consultancy — Singapore", initial: "M" }
];

const industries = ["Hotels & Resorts", "Travel Agencies", "Vacation Clubs", "Real Estate", "Export Companies", "Consultants", "Retail Brands", "Service Businesses"];
const heroMetrics = [{ a: "10+", b: "Projects delivered" }, { a: "3+", b: "Countries served" }, { a: "100%", b: "Custom-built" }];
const dashboardStats = [{ label: "New Leads", value: "248" }, { label: "Pipeline Value", value: "USD 42K" }, { label: "Conversion", value: "+32%" }];
const processSteps = [
    { num: "01", title: "Business Discovery", desc: "We learn your workflow, clients, goals, and growth gaps before writing a single line of code." },
    { num: "02", title: "Premium UI/UX Design", desc: "Wireframes and full visual design reviewed and approved by you before development begins." },
    { num: "03", title: "Development & Database", desc: "Clean, secure code built around your exact data structure, integrations, and business logic." },
    { num: "04", title: "Launch, Training & Support", desc: "We deploy, train your team, and stay available for improvements after go-live." }
];

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#marketing", label: "Marketing" },
    { href: "#packages", label: "Packages" },
    { href: "#consulting", label: "Consulting" },
    { href: "#contact", label: "Contact" }
];

const serviceOptions = [
    "Premium Business Website",
    "CRM Dashboard System",
    "App or Client Portal",
    "Digital Marketing & SEO",
    "Growth & Automation Suite",
    "Consulting Support",
    "Other — Let's discuss"
];

const cssRules = [
    "@keyframes spinInfinite { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    "@keyframes fadeOut { 0% { opacity: 1; } 78% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",
    "@keyframes glowPulse { 0%, 100% { transform: scale(.92); filter: blur(14px); } 50% { transform: scale(1.15); filter: blur(22px); } }",
    "@keyframes bubbleIn { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }",
    "@keyframes tailWag { 0%, 100% { transform: rotate(-22deg); } 50% { transform: rotate(28deg); } }",
    "@keyframes tailSlow { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(10deg); } }",
    "@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }",
    ".intro { animation: fadeOut 2.6s forwards; }",
    ".logoSpin { animation: spinInfinite 2s linear infinite; }",
    ".logoGlow { background: radial-gradient(circle, rgba(168,85,247,.72), rgba(109,40,217,.32) 42%, transparent 72%); filter: blur(16px); transition: opacity .45s ease; animation: glowPulse 1.8s ease-in-out infinite; }",
    ".logoPath { transition: all 1.15s cubic-bezier(.16,1,.3,1); }",
    ".bubble { animation: bubbleIn .45s cubic-bezier(.16,1,.3,1) both; }",
    ".luxBorder { background: linear-gradient(#0c0015, #0c0015) padding-box, linear-gradient(135deg, rgba(168,85,247,.35), rgba(109,40,217,.15) 50%, rgba(168,85,247,.35)) border-box; border: 1px solid transparent; }",
    ".cat { position: relative; width: 64px; height: 54px; transform-origin: center; transition: transform .25s ease, filter .25s ease; }",
    ".catLeft { transform: scaleX(-1); }",
    ".catSit { transform: translateY(7px) scale(.96); }",
    ".catSit.catLeft { transform: translateY(7px) scale(.96) scaleX(-1); }",
    ".catHead { position: absolute; left: 10px; top: 8px; width: 44px; height: 40px; display: grid; place-items: center; border-radius: 48% 48% 45% 45%; background: linear-gradient(135deg, #f8fafc, #cbd5e1); box-shadow: 0 14px 28px rgba(0,0,0,.36), inset 0 0 0 2px rgba(168,85,247,.30); }",
    ".catHead::before { content: ''; position: absolute; left: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(168,85,247,.18); }",
    ".catHead::after { content: ''; position: absolute; right: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(168,85,247,.18); }",
    ".catFace { position: relative; z-index: 2; font-size: 12px; font-weight: 900; color: #0f172a; letter-spacing: .02em; }",
    ".catFace::before { content: ''; position: absolute; width: 4px; height: 4px; border-radius: 999px; background: #0f172a; left: -8px; top: 3px; box-shadow: 16px 0 0 #0f172a; }",
    ".catFace::after { content: ''; position: absolute; width: 5px; height: 4px; border-radius: 999px; background: #0f172a; left: 50%; transform: translateX(-50%); top: 10px; }",
    ".catTail { position: absolute; right: 2px; top: 25px; width: 26px; height: 9px; border-radius: 999px; background: linear-gradient(90deg, #a855f7, #7c3aed); transform-origin: left center; box-shadow: 0 8px 20px rgba(139,92,246,.30); }",
    ".catTail::after { content: ''; position: absolute; right: -5px; top: -3px; width: 10px; height: 10px; border-radius: 999px; background: #7c3aed; }",
    ".catBody { position: absolute; left: 7px; top: 27px; width: 42px; height: 22px; border-radius: 999px; background: linear-gradient(135deg, #e2e8f0, #94a3b8); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35); }",
    ".catPaw { position: absolute; bottom: 1px; width: 8px; height: 5px; border-radius: 999px; background: #f8fafc; }",
    ".catPaw.one { left: 16px; }",
    ".catPaw.two { left: 34px; }",
    ".catWalk .catTail { animation: tailWag .42s ease-in-out infinite; }",
    ".catSit .catTail { animation: tailSlow .95s ease-in-out infinite; }",
    ".cat-happy .catHead { box-shadow: 0 14px 34px rgba(139,92,246,.55), inset 0 0 0 2px rgba(168,85,247,.55); }",
    ".cat-sad .catHead { filter: grayscale(.55) brightness(.85); }",
    ".catShadow { position: absolute; width: 42px; height: 10px; background: rgba(0,0,0,.42); border-radius: 50%; top: 48px; left: 11px; filter: blur(5px); }",
    ".avatarHomeRoof { position: absolute; left: 18px; top: 9px; width: 26px; height: 26px; transform: rotate(45deg); border-left: 2px solid rgba(168,85,247,.75); border-top: 2px solid rgba(168,85,247,.75); background: linear-gradient(135deg, rgba(168,85,247,.22), rgba(109,40,217,.16)); }",
    ".avatarHomeBody { position: absolute; left: 15px; top: 24px; width: 32px; height: 25px; border: 2px solid rgba(168,85,247,.75); border-radius: 8px 8px 10px 10px; background: rgba(12,0,21,.92); box-shadow: inset 0 0 20px rgba(168,85,247,.12); }",
    ".avatarHomeDoor { position: absolute; left: 27px; top: 34px; width: 9px; height: 15px; border-radius: 6px 6px 0 0; background: linear-gradient(180deg, #a855f7, #7c3aed); }",
    "@media (pointer: coarse) { .cat-follower { display: none; } }"
];

let sharedAudioCtx = null;
function getAudioCtx() {
    if (!sharedAudioCtx) {
        const Cls = window.AudioContext || window.webkitAudioContext;
        if (!Cls) return null;
        sharedAudioCtx = new Cls();
    }
    return sharedAudioCtx;
}

function playTone(type) {
    try {
        const audio = getAudioCtx();
        if (!audio) return;
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
    } catch (e) { }
}

// ── Logo ──────────────────────────────────────────────────────────────────────
function Logo(props) {
    const className = props.className || "h-10 w-10";
    const intro = Boolean(props.intro);
    const [spin, setSpin] = useState(false);
    const [introSpin, setIntroSpin] = useState(false);

    useEffect(function () {
        if (!intro) return undefined;
        try {
            if (window.localStorage.getItem("logo_intro_seen")) return undefined;
            window.localStorage.setItem("logo_intro_seen", "true");
        } catch (e) { }
        setIntroSpin(true);
        const t = window.setTimeout(function () { setIntroSpin(false); }, 2200);
        return function () { window.clearTimeout(t); };
    }, [intro]);

    const active = spin || introSpin;
    return (
        <button type="button" aria-label="PT NusaTech AI Solutions logo"
            onClick={function () { setSpin(function (v) { return !v; }); playTone("whoosh"); }}
            className={"relative grid place-items-center rounded-2xl outline-none " + (active ? "logoSpin" : "")}>
            <span className={"absolute inset-[-10px] rounded-3xl logoGlow " + (active ? "opacity-100" : "opacity-30")} />
            <svg viewBox="0 0 100 100" className={className + " relative z-10"}>
                <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="45%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#0c0015" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx={active ? "30" : "20"} fill="url(#lg)" />
                <path d={active ? "M30 70 V30 L70 70 V30" : "M35 65 L50 35 L65 65"} stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="logoPath" />
            </svg>
        </button>
    );
}

// ── Intro splash ──────────────────────────────────────────────────────────────
function Intro() {
    const [show, setShow] = useState(false);
    useEffect(function () {
        try { if (window.localStorage.getItem("page_intro_seen")) return undefined; window.localStorage.setItem("page_intro_seen", "true"); } catch (e) { }
        setShow(true);
        const t = window.setTimeout(function () { setShow(false); }, 2600);
        return function () { window.clearTimeout(t); };
    }, []);
    if (!show) return null;
    return (
        <div className="intro fixed inset-0 z-50 grid place-items-center bg-[#0c0015]">
            <div className="text-center">
                <Logo className="h-28 w-28" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.55em] text-white/80">PT NusaTech</p>
                <p className="mt-3 text-xs tracking-[0.3em] text-purple-200/70">AI Solutions</p>
            </div>
        </div>
    );
}

// ── Cat mascot ────────────────────────────────────────────────────────────────
function CatFollower() {
    const [dismissed, setDismissed] = useState(false);
    const [pos, setPos] = useState({ x: 120, y: 120 });
    const [direction, setDirection] = useState("right");
    const [mood, setMood] = useState("neutral");
    const [sitting, setSitting] = useState(false);
    const hideTimer = useRef(null), target = useRef({ x: 120, y: 120 }), raf = useRef(null), sitTimer = useRef(null), sadTimer = useRef(null);

    useEffect(function () { try { setDismissed(window.localStorage.getItem("avatar_home") === "true"); } catch (e) { } }, []);

    const sendHome = function () {
        target.current = { x: 54, y: 64 };
        setDirection("left"); setMood("happy"); setSitting(true);
        [sitTimer, sadTimer, hideTimer].forEach(function (r) { if (r.current) window.clearTimeout(r.current); });
        hideTimer.current = window.setTimeout(function () {
            try { window.localStorage.setItem("avatar_home", "true"); } catch (e) { }
            setDismissed(true);
        }, 700);
    };

    useEffect(function () {
        if (dismissed) return undefined;
        const makeHappy = function () {
            setMood("happy");
            if (sadTimer.current) window.clearTimeout(sadTimer.current);
            sadTimer.current = window.setTimeout(function () { setMood("neutral"); }, 3500);
        };
        const update = function (x, y) {
            setDirection(x >= target.current.x ? "right" : "left");
            target.current = { x, y }; setSitting(false);
            setMood(function (c) { return c === "sad" ? "neutral" : c; });
            [sitTimer, sadTimer].forEach(function (r) { if (r.current) window.clearTimeout(r.current); });
            sitTimer.current = window.setTimeout(function () { setSitting(true); }, 900);
            sadTimer.current = window.setTimeout(function () { setMood("sad"); }, 6500);
        };
        const onMove = function (e) { update(e.clientX, e.clientY); };
        const onTouch = function (e) { if (e.touches.length > 0) update(e.touches[0].clientX, e.touches[0].clientY); };
        const onClick = function (e) { playTone("meow"); if (e.target && e.target.closest && e.target.closest("a,button")) makeHappy(); };
        const onScroll = function () { const r = document.documentElement; const m = r.scrollHeight - r.clientHeight; if (m > 0 && r.scrollTop / m > 0.55) makeHappy(); };
        const loop = function () { setPos(function (p) { return { x: p.x + (target.current.x - p.x) * 0.075, y: p.y + (target.current.y - p.y) * 0.075 }; }); raf.current = window.requestAnimationFrame(loop); };
        window.addEventListener("mousemove", onMove); window.addEventListener("touchmove", onTouch, { passive: true });
        window.addEventListener("click", onClick); window.addEventListener("scroll", onScroll, { passive: true });
        raf.current = window.requestAnimationFrame(loop);
        return function () {
            window.removeEventListener("mousemove", onMove); window.removeEventListener("touchmove", onTouch);
            window.removeEventListener("click", onClick); window.removeEventListener("scroll", onScroll);
            [sitTimer, sadTimer, hideTimer].forEach(function (r) { if (r.current) window.clearTimeout(r.current); });
            if (raf.current) window.cancelAnimationFrame(raf.current);
        };
    }, [dismissed]);

    if (dismissed) return null;
    const face = mood === "happy" ? "w" : mood === "sad" ? "n" : "v";
    const catClass = ["cat", direction === "left" ? "catLeft" : "", sitting ? "catSit" : "catWalk", "cat-" + mood].join(" ");
    return (
        <div className="cat-follower">
            <button type="button" onClick={sendHome} aria-label="Send mascot home" className="fixed left-4 top-4 z-50 h-16 w-16 rounded-2xl border border-purple-400/30 bg-[#0c0015]/85 shadow-2xl shadow-purple-950/40 backdrop-blur transition hover:scale-105 hover:border-purple-300/60">
                <span className="avatarHomeRoof" /><span className="avatarHomeBody" /><span className="avatarHomeDoor" />
            </button>
            <div style={{ transform: "translate(" + (pos.x - 26) + "px, " + (pos.y - 28) + "px)" }} className="pointer-events-none fixed z-40 transition-transform duration-75" aria-hidden="true">
                <div className="catShadow" />
                <div className={catClass}>
                    <div className="catTail" /><div className="catBody" /><div className="catPaw one" /><div className="catPaw two" />
                    <div className="catHead"><span className="catFace">{face}</span></div>
                </div>
            </div>
        </div>
    );
}

// ── AI Chat bubble ────────────────────────────────────────────────────────────
function RobotChat() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(function () {
        if (!open) return undefined;
        const h = function (e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        window.addEventListener("mousedown", h);
        return function () { window.removeEventListener("mousedown", h); };
    }, [open]);
    return (
        <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {open && (
                <div className="bubble w-[260px] rounded-3xl border border-purple-400/20 bg-[#140025]/90 p-4 shadow-2xl shadow-purple-950/50 backdrop-blur-xl">
                    <p className="text-sm font-bold text-white">Hello</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">Need a website, CRM dashboard, app, marketing funnel, or consulting support?</p>
                    <a href={WHATSAPP_URL} className="mt-3 inline-block w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-700 px-4 py-2 text-center text-xs font-bold text-white">WhatsApp {WHATSAPP_DISPLAY}</a>
                </div>
            )}
            <button type="button" onClick={function () { setOpen(function (v) { return !v; }); }} aria-label={open ? "Close chat" : "Open chat"} aria-expanded={open}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 shadow-xl shadow-purple-900/50 transition hover:scale-105">
                <span className="absolute inset-[-8px] rounded-full bg-violet-500/20 blur-xl" />
                <span className="relative text-sm font-black">AI</span>
            </button>
        </div>
    );
}

// ── Shared section title ──────────────────────────────────────────────────────
function SectionTitle({ eyebrow, title, text }) {
    return (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.55em] text-violet-300">{eyebrow}</p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
            {text ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">{text}</p> : null}
        </div>
    );
}

// ── Hero dashboard mockup ─────────────────────────────────────────────────────
function DashboardPreview() {
    return (
        <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-violet-600/25 to-purple-700/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-violet-400/15 bg-slate-900/80 p-5 shadow-2xl shadow-purple-950/50 backdrop-blur-xl">
                <div className="overflow-hidden rounded-3xl border border-violet-400/10 bg-[#0c0015]">
                    <div className="flex items-center gap-2 border-b border-violet-400/10 px-5 py-4">
                        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" />
                        <span className="ml-auto text-xs text-slate-400">Live Business Dashboard</span>
                    </div>
                    <div className="p-5">
                        <div className="mb-5 grid grid-cols-3 gap-3">
                            {dashboardStats.map(function (s) { return <div key={s.label} className="rounded-2xl border border-violet-400/15 bg-violet-400/5 p-4"><p className="text-2xl font-black">{s.value}</p><p className="text-xs text-slate-400">{s.label}</p></div>; })}
                        </div>
                        <div className="rounded-2xl border border-violet-400/15 bg-violet-400/5 p-5">
                            <div className="mb-5 flex items-center justify-between"><p className="font-bold">Sales Pipeline</p><p className="text-xs font-bold text-violet-300">Active Campaign</p></div>
                            {[88, 70, 54, 76].map(function (w) { return <div key={w} className="mb-4 last:mb-0"><div className="h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-700" style={{ width: w + "%" }} /></div></div>; })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Portfolio screenshot frames ───────────────────────────────────────────────
function ProjectScreenshot({ type }) {
    if (type === "traveltoko") {
        return (
            <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-violet-400/15 bg-[#0c0015] shadow-2xl shadow-purple-950/30">
                <img src="/projects/traveltoko-dashboard-screenshot.png" alt="TravelToko dashboard screenshot" className="h-full w-full object-cover object-left-top" loading="lazy" />
            </div>
        );
    }
    return (
        <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-violet-400/15 bg-stone-50 shadow-2xl shadow-purple-950/30">
            <img src="/projects/esmeralda-vacation-club-screenshot.png" alt="Esmeralda Vacation Club website screenshot" className="h-full w-full object-cover object-left-top" loading="lazy" />
        </div>
    );
}

// ── Mobile menu dropdown ──────────────────────────────────────────────────────
function MobileMenu({ open, onClose }) {
    if (!open) return null;
    return (
        <div className="mt-3 rounded-3xl border border-violet-400/15 bg-[#140025]/98 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1">
                {navLinks.map(function (link) {
                    return <a key={link.href} href={link.href} onClick={onClose} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-violet-500/10 hover:text-white">{link.label}</a>;
                })}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-violet-400/15 pt-4">
                <a href="#contact" onClick={onClose} className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-violet-500/20">Start Project</a>
                <a href={CONSULTANT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-3 text-center text-sm font-black text-slate-900 shadow-md shadow-amber-500/25 ring-1 ring-amber-300/40 transition-all hover:from-amber-300 hover:to-yellow-200">
                    Consulting
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 opacity-70"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                </a>
            </div>
        </div>
    );
}

// ── Contact form → opens WhatsApp ─────────────────────────────────────────────
function ContactForm() {
    const [form, setForm] = useState({ name: "", contact: "", service: serviceOptions[0], message: "" });
    const [sent, setSent] = useState(false);
    const change = function (e) { const { name, value } = e.target; setForm(function (p) { return Object.assign({}, p, { [name]: value }); }); };
    const submit = function (e) {
        e.preventDefault();
        const text = encodeURIComponent("Hello PT NusaTech,\n\nI would like to discuss a project.\n\nName: " + form.name + "\nContact: " + form.contact + "\nInterested in: " + form.service + "\n\nMessage:\n" + form.message);
        window.open(WHATSAPP_URL + "?text=" + text, "_blank", "noreferrer");
        setSent(true);
    };
    const inp = "w-full rounded-2xl border border-violet-400/15 bg-violet-400/5 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-400/50 focus:bg-violet-400/10 focus:ring-1 focus:ring-violet-400/30";
    if (sent) {
        return (
            <div className="rounded-3xl border border-violet-300/20 bg-violet-300/5 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-400/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-violet-300"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-xl font-black text-white">Message ready!</p>
                <p className="mt-2 text-sm text-slate-400">WhatsApp opened with your message pre-filled. If it did not open, <a href={WHATSAPP_URL} className="text-violet-300 underline">click here</a>.</p>
                <button type="button" onClick={function () { setSent(false); setForm({ name: "", contact: "", service: serviceOptions[0], message: "" }); }} className="mt-6 rounded-xl border border-violet-400/20 bg-violet-400/5 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-violet-400/10">Send another message</button>
            </div>
        );
    }
    return (
        <form onSubmit={submit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label><input type="text" name="name" value={form.name} onChange={change} required placeholder="John Smith" className={inp} /></div>
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Email or WhatsApp</label><input type="text" name="contact" value={form.contact} onChange={change} required placeholder="you@company.com" className={inp} /></div>
            </div>
            <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">I'm interested in</label>
                <select name="service" value={form.service} onChange={change} className={inp + " cursor-pointer"}>
                    {serviceOptions.map(function (s) { return <option key={s} value={s} className="bg-[#140025] text-white">{s}</option>; })}
                </select>
            </div>
            <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Tell us about your project</label><textarea name="message" value={form.message} onChange={change} required placeholder="Briefly describe your business, what you need, and your timeline..." rows={5} className={inp + " resize-none"} /></div>
            <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 py-4 font-black text-white shadow-xl shadow-purple-900/40 transition hover:opacity-90">Send via WhatsApp</button>
            <p className="text-center text-xs text-slate-500">Your message opens pre-filled in WhatsApp. No data is stored on our end.</p>
        </form>
    );
}

// ── Star rating ───────────────────────────────────────────────────────────────
function StarRating() {
    return (
        <div className="mb-5 flex gap-1">
            {[1, 2, 3, 4, 5].map(function (i) {
                return <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
            })}
        </div>
    );
}

// ── Main page ─────────────────────────────────────────────────────────────────
function DigitalStudioWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main id="main-content" className="min-h-screen overflow-hidden bg-[#0c0015] text-white">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[100] focus:rounded-xl focus:bg-violet-400 focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:text-slate-900">Skip to main content</a>

            <Intro />
            <CatFollower />
            <RobotChat />

            {/* ── Hero + Nav ──────────────────────────────────────────────── */}
            <section className="relative px-4 pb-24 pt-6 lg:px-16">
                {/* Background */}
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 20%, rgba(139,92,246,0.38) 0%, transparent 45%), radial-gradient(ellipse at 85% 10%, rgba(168,85,247,0.30) 0%, transparent 40%), radial-gradient(ellipse at 50% 80%, rgba(109,40,217,0.20) 0%, transparent 50%), linear-gradient(160deg, #0c0015 0%, #1a0535 55%, #0a000e 100%)" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="relative z-10 mx-auto max-w-7xl">

                    {/* ── Navbar — reference screenshot layout ───────────── */}
                    <nav aria-label="Main navigation" className="flex items-center justify-between gap-4 rounded-2xl border border-violet-400/20 bg-[#140025]/70 px-5 py-3 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">

                        {/* Brand */}
                        <div className="flex shrink-0 items-center gap-3">
                            <Logo className="h-9 w-9" intro />
                            <div>
                                <p className="text-sm font-black tracking-tight text-white">PT NusaTech</p>
                                <p className="text-[10px] font-medium tracking-wider text-violet-300/70">AI Solutions</p>
                            </div>
                        </div>

                        {/* Centre links */}
                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map(function (link) {
                                return (
                                    <a key={link.href} href={link.href} className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-violet-500/12 hover:text-white">
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Right CTAs */}
                        <div className="flex shrink-0 items-center gap-2">
                            <a href="#contact" className="hidden rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-black text-white transition hover:border-violet-400/50 hover:bg-violet-500/20 lg:inline-flex">
                                Start Project
                            </a>
                            <a href={CONSULTANT_URL} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-2.5 text-sm font-black text-slate-900 shadow-md shadow-amber-500/25 ring-1 ring-amber-300/40 transition-all hover:from-amber-300 hover:to-yellow-200 lg:inline-flex">
                                Consulting
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 opacity-70"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                            </a>
                            <button type="button" onClick={function () { setMenuOpen(function (v) { return !v; }); }} aria-label="Toggle menu" aria-expanded={menuOpen} className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 lg:hidden">
                                <span className="flex flex-col gap-1.5">
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "translate-y-2 rotate-45" : "")} />
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "opacity-0" : "")} />
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "-translate-y-2 -rotate-45" : "")} />
                                </span>
                            </button>
                        </div>
                    </nav>

                    <MobileMenu open={menuOpen} onClose={function () { setMenuOpen(false); }} />

                    {/* ── Hero content ─────────────────────────────────────── */}
                    <div className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200">
                                Indonesia-based IT solutions and AI integrations partner
                            </div>
                            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Premium websites, CRM dashboards, apps and marketing systems for serious businesses.</h1>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">PT NusaTech AI Solutions helps hotels, travel companies, exporters, consultants, and service businesses look premium, manage clients better, and turn digital systems into real sales opportunities.</p>
                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <a href="#contact" className="rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-7 py-4 text-center font-black text-white shadow-xl shadow-purple-900/40 transition hover:opacity-90">Build My Website / CRM</a>
                                <a href="#work" className="rounded-2xl border border-violet-400/20 bg-violet-400/5 px-7 py-4 text-center font-black text-white transition hover:bg-violet-400/10">View Work</a>
                            </div>
                            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                                {heroMetrics.map(function (m) { return <div key={m.a} className="rounded-2xl border border-violet-400/15 bg-violet-400/5 p-4"><p className="text-xl font-black">{m.a}</p><p className="text-sm text-slate-400">{m.b}</p></div>; })}
                            </div>
                        </div>
                        <DashboardPreview />
                    </div>
                </div>
            </section>

            {/* ── Services ────────────────────────────────────────────────── */}
            <section id="services" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Services" title="Digital solutions built around real business operations." text="From the public website to the private dashboard, we create digital systems that improve trust, sales, client management, and daily workflow." />
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {services.map(function (item) {
                            return (
                                <div key={item.title} className="luxBorder rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-violet-400/5">
                                    <div className="mb-6 inline-flex rounded-2xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-sm font-black text-violet-200">{item.icon}</div>
                                    <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Stats band ──────────────────────────────────────────────── */}
            <section className="px-6 py-20 lg:px-20" style={{ background: "linear-gradient(135deg, #140025 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 md:grid-cols-4">
                        {[{ n: "4", l: "Core services" }, { n: "24/7", l: "Online presence" }, { n: "100%", l: "Custom workflow" }, { n: "Global", l: "Client ready" }].map(function (s) {
                            return <div key={s.l} className="luxBorder rounded-3xl p-7 text-center"><p className="text-4xl font-black text-violet-300">{s.n}</p><p className="mt-2 text-sm text-slate-400">{s.l}</p></div>;
                        })}
                    </div>
                </div>
            </section>

            {/* ── Portfolio ───────────────────────────────────────────────── */}
            <section id="work" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Portfolio Screenshots" title="Real project screenshots and dashboard previews." text="TravelToko Dashboard and the Esmeralda Vacation Club Website are shown as portfolio screenshots so clients can instantly understand the work." />
                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map(function (item, i) {
                            return (
                                <div key={item.title} className="luxBorder rounded-[2rem] p-6 shadow-xl shadow-purple-950/30">
                                    <div className="mb-3 w-fit rounded-2xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs text-violet-200">Project 0{i + 1}</div>
                                    <ProjectScreenshot type={item.key} />
                                    <p className="mb-2 text-sm font-bold text-violet-300">{item.category}</p>
                                    <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                    {item.url ? <a href={item.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-purple-950/40">Visit Website</a> : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Coming Soon ─────────────────────────────────────────────── */}
            <section id="coming-soon" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #140025 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Coming Soon" title="New projects currently in the pipeline." text="These upcoming CRM, resort website, and travel marketplace concepts show the next systems PT NusaTech AI Solutions can launch for serious clients." />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {comingSoonProjects.map(function (item) {
                            return (
                                <div key={item.title} className="luxBorder rounded-[2rem] p-6 shadow-xl shadow-purple-950/30">
                                    <div className="mb-5 h-56 overflow-hidden rounded-3xl border border-violet-400/15 bg-[#140025]">
                                        <img src={item.image} alt={item.title + " screenshot"} className="h-full w-full object-cover object-left-top" loading="lazy" />
                                    </div>
                                    <div className="mb-3 w-fit rounded-2xl bg-violet-400 px-3 py-2 text-xs font-black text-slate-950">Coming Soon</div>
                                    <p className="mb-2 text-sm font-bold text-violet-300">{item.category}</p>
                                    <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Marketing ───────────────────────────────────────────────── */}
            <section id="marketing" className="px-6 py-24 lg:px-20">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-violet-300">Digital Marketing</p>
                        <h2 className="text-4xl font-black tracking-tight md:text-5xl">Not only a beautiful website — a complete lead generation system.</h2>
                        <p className="mt-6 text-lg leading-8 text-slate-400">We connect premium design with digital marketing strategy: SEO foundations, campaign pages, WhatsApp funnels, content direction, tracking, and CRM lead capture.</p>
                    </div>
                    <div className="luxBorder rounded-[2rem] p-6">
                        <div className="rounded-3xl bg-[#0c0015] p-6">
                            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Example campaign results — actual results vary by client</p>
                            {["Website Visitors", "WhatsApp Clicks", "Qualified Leads", "Client Meetings"].map(function (label, i) {
                                const vals = [90, 78, 62, 48], gr = [74, 58, 41, 26];
                                return (
                                    <div key={label} className="mb-6 last:mb-0">
                                        <div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span className="font-bold text-violet-300">+{gr[i]}%</span></div>
                                        <div className="h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-700" style={{ width: vals[i] + "%" }} /></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Industries ──────────────────────────────────────────────── */}
            <section className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #140025 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Industries" title="Industries we can serve from Indonesia." text="A flexible IT solutions and AI integrations partner for Indonesian businesses, foreign entrepreneurs, hotels, exporters, consultants, and international clients." />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map(function (ind) { return <div key={ind} className="luxBorder rounded-2xl p-5 text-center font-bold text-slate-200 transition hover:bg-violet-500/5">{ind}</div>; })}
                    </div>
                </div>
            </section>

            {/* ── Process ─────────────────────────────────────────────────── */}
            <section id="process" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Process" title="A clear process clients can trust." text="Clients buy faster when the process is clear, professional, and connected to business results." />
                    <div className="grid gap-5 lg:grid-cols-4">
                        {processSteps.map(function (s) {
                            return (
                                <div key={s.num} className="luxBorder rounded-3xl p-7">
                                    <p className="mb-5 text-4xl font-black text-violet-300">{s.num}</p>
                                    <h3 className="mb-3 text-xl font-black">{s.title}</h3>
                                    <p className="leading-7 text-slate-400">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Packages ────────────────────────────────────────────────── */}
            <section id="packages" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #140025 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Packages" title="Packages designed for different business stages." text="Start with a professional website, upgrade to a CRM dashboard, or build a complete growth system with marketing and consulting support." />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {packages.map(function (item, idx) {
                            const featured = idx === 1;
                            return (
                                <div key={item.name} className={"flex flex-col rounded-[2rem] p-7 " + (featured ? "border border-violet-400/40 bg-violet-400/10 shadow-2xl shadow-purple-950/50 ring-1 ring-violet-400/20" : "luxBorder")}>
                                    {featured ? <p className="mb-4 w-fit rounded-full bg-violet-400 px-3 py-1 text-xs font-black text-slate-950">Most Popular</p> : null}
                                    <h3 className="text-2xl font-black">{item.name}</h3>
                                    <p className="mt-3 text-4xl font-black text-violet-300">{item.price}</p>
                                    <p className="mt-4 flex-1 leading-7 text-slate-400">{item.desc}</p>
                                    <a href="#contact" className={"mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-center text-sm font-black transition " + (featured ? "bg-gradient-to-r from-violet-500 to-purple-700 text-white shadow-lg shadow-purple-950/40 hover:opacity-90" : "border border-violet-400/25 bg-violet-400/5 text-white hover:bg-violet-400/10")}>
                                        Get Started
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" /></svg>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Consulting ──────────────────────────────────────────────── */}
            <section id="consulting" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-violet-300">Consulting</p>
                    <h2 className="text-4xl font-black tracking-tight md:text-5xl">Need more than development?</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">Beyond websites and CRM systems, we support market entry, business setup, commercial strategy, hotel and travel operations, digital transformation, and growth planning in Indonesia.</p>
                    <div className="mt-8">
                        <a href={CONSULTANT_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 px-9 py-4 font-black text-slate-900 shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all hover:scale-105 hover:from-amber-300 hover:to-yellow-200 hover:shadow-amber-400/40">
                            Explore Consulting Support
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06L11.44 7.5H6.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V8.56l-6.22 6.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ────────────────────────────────────────────── */}
            <section className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #140025 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="Client Results" title="What clients say about working with us." text="Real feedback from businesses across hospitality, travel, and international trade." />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {testimonials.map(function (item) {
                            return (
                                <div key={item.name} className="luxBorder relative rounded-[2rem] p-8 shadow-xl shadow-purple-950/30">
                                    <span className="pointer-events-none absolute right-6 top-2 select-none text-8xl font-black leading-none text-violet-400/10">"</span>
                                    <StarRating />
                                    <p className="relative z-10 leading-7 text-slate-300">"{item.quote}"</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-black">{item.initial}</div>
                                        <div>
                                            <p className="font-black text-white">{item.name}</p>
                                            <p className="text-xs text-slate-400">{item.company}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────────────────── */}
            <section className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle eyebrow="FAQ" title="Questions serious clients usually ask." />
                    <div className="grid gap-5 md:grid-cols-2">
                        {faqs.map(function (item) {
                            return (
                                <div key={item.q} className="luxBorder rounded-3xl p-7">
                                    <h3 className="mb-3 text-xl font-black">{item.q}</h3>
                                    <p className="leading-7 text-slate-400">{item.a}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Contact ─────────────────────────────────────────────────── */}
            <section id="contact" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1a0535 0%, #0c0015 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
                        <div className="flex flex-col justify-center">
                            <Logo className="mb-6 h-16 w-16" />
                            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-violet-300">Start Your Project</p>
                            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Ready to build something your business deserves?</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">Fill in the form and we'll open WhatsApp with your message pre-filled, ready to send. Or reach us directly below.</p>
                            <div className="mt-8 flex flex-col gap-3">
                                <a href={WHATSAPP_URL} className="inline-flex items-center gap-3 rounded-2xl border border-violet-400/20 bg-violet-400/5 px-6 py-4 font-bold text-white transition hover:bg-violet-400/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-green-400"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.07 13.6c-.213.598-1.249 1.14-1.712 1.213-.438.069-.993.097-1.6-.1-.369-.12-.843-.28-1.448-.548-2.55-1.1-4.213-3.66-4.34-3.83-.127-.17-1.033-1.374-1.033-2.62 0-1.248.654-1.862.887-2.116.233-.254.508-.318.677-.318.17 0 .339.002.487.008.156.007.365-.059.572.436.212.508.72 1.757.783 1.884.063.127.106.277.021.445-.085.17-.127.277-.254.424-.128.148-.268.33-.384.444-.127.127-.258.264-.11.517.148.254.654 1.079 1.404 1.747.963.856 1.775 1.12 2.028 1.247.255.127.403.106.55-.064.149-.17.635-.742.804-.996.17-.254.338-.212.572-.127.233.084 1.48.698 1.734.825.254.127.424.19.487.296.063.106.063.614-.15 1.212Z" /></svg>
                                    WhatsApp {WHATSAPP_DISPLAY}
                                </a>
                                <a href={EMAIL_URL} className="inline-flex items-center gap-3 rounded-2xl border border-violet-400/20 bg-violet-400/5 px-6 py-4 font-bold text-white transition hover:bg-violet-400/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-violet-400"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                                    {EMAIL_DISPLAY}
                                </a>
                            </div>
                        </div>
                        <div className="luxBorder rounded-[2rem] p-8 shadow-2xl shadow-purple-950/40 backdrop-blur">
                            <p className="mb-6 text-xl font-black">Send us a message</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ──────────────────────────────────────────────────── */}
            <footer className="border-t border-violet-400/15 px-6 py-10 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                        {navLinks.map(function (link) { return <a key={link.href} href={link.href} className="transition hover:text-white">{link.label}</a>; })}
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
                        <p>Copyright 2026 PT NusaTech AI Solutions. All rights reserved.</p>
                        <p>WhatsApp {WHATSAPP_DISPLAY} &middot; <a href={EMAIL_URL} className="transition hover:text-slate-300">{EMAIL_DISPLAY}</a></p>
                    </div>
                </div>
            </footer>

            <style>{cssRules.join("\n")}</style>
        </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DigitalStudioWebsite />);

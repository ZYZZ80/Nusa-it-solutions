import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
    { q: "What kind of AI integrations can you add?", a: "We can add AI chat assistants, lead qualification flows, internal knowledge search, automated follow-up drafts, reporting summaries, document helpers, and workflow automations depending on your business process." },
    { q: "Can you redesign an existing website?", a: "Yes. We can improve an existing website with a premium visual design, clearer messaging, faster pages, better mobile layout, stronger SEO structure, and WhatsApp or CRM lead capture." },
    { q: "Do you work with Indonesian and international clients?", a: "Yes. We are based in Indonesia and can serve local companies, foreign entrepreneurs, hotels, agencies, exporters, consultants, and global clients remotely." },
    { q: "Can you also provide consulting services?", a: "Yes. For clients who need more than development, we can also support business strategy, market entry, operational structure, and digital transformation planning." },
    { q: "How long does a project take?", a: "A standard business website takes 2-4 weeks. A CRM dashboard or custom portal typically takes 4-8 weeks depending on complexity. We provide a clear timeline before any project begins." },
    { q: "Do you provide hosting and deployment?", a: "Yes. We can prepare and deploy the website on platforms such as Vercel, connect a custom domain, configure basic SEO metadata, analytics, sitemap, robots.txt, and production build settings." },
    { q: "Will the system work on mobile?", a: "Yes. Websites, dashboards, and client portals are built with responsive layouts so owners, teams, and clients can use them from desktop, tablet, and mobile screens." },
    { q: "Do you offer ongoing maintenance and support?", a: "Yes. After launch we offer maintenance, updates, and support packages so the system keeps improving as the business grows. We do not disappear after delivery." },
    { q: "What is the payment structure?", a: "We typically work with a 50% deposit to begin and 50% upon delivery. For larger projects, milestone-based payments can be arranged. All terms are agreed in writing before work starts." },
    { q: "What do you need from a client before starting?", a: "We usually need a short business brief, logo or brand references, service details, target customers, examples of websites you like, domain or hosting access if available, and the main goal of the project." }
];

const testimonials = [
    { quote: "PT NusaTech built a CRM dashboard that completely changed how we manage our leads and client follow-ups. They genuinely understood our business operations from day one and delivered beyond expectations.", name: "Operations Director", company: "Travel Club - Jakarta", initial: "T" },
    { quote: "Our new website generates more serious inquiries in a week than the old one did in a month. The design is premium and the WhatsApp integration converts visitors into conversations immediately.", name: "General Manager", company: "Boutique Resort - Bali", initial: "B" },
    { quote: "As an international business entering Indonesia, I needed a partner who understood both local and global standards. NusaTech delivered a professional website, CRM, and real strategic direction.", name: "Managing Director", company: "Export Consultancy - Singapore", initial: "M" }
];

const industries = ["Hotels & Resorts", "Travel Agencies", "Vacation Clubs", "Real Estate", "Export Companies", "Consultants", "Retail Brands", "Service Businesses"];
const heroMetrics = [{ a: "10+", b: "Projects delivered" }, { a: "3+", b: "Countries served" }, { a: "100%", b: "Custom-built" }];
const dashboardStats = [{ label: "New Leads", value: "248" }, { label: "Pipeline Value", value: "USD 42K" }, { label: "Conversion", value: "+32%" }];
const platformFeatures = [
    { title: "Data & CRM", text: "Client records, leads, bookings, payments, documents, and team activity in one source of truth." },
    { title: "Workflow Automation", text: "Follow-up reminders, approval steps, WhatsApp funnels, task routing, and reporting flows." },
    { title: "AI Integrations", text: "Chat assistants, lead qualification, smart summaries, document extraction, and business insights." },
    { title: "Dashboard Design", text: "Executive views, sales pipelines, charts, operational boards, and role-based team interfaces." },
    { title: "Responsive Apps", text: "Business software that feels premium on desktop, tablet, and mobile." },
    { title: "Security & Access", text: "Secure login, admin controls, team permissions, protected records, and deployment-ready architecture." }
];
const processSteps = [
    { num: "01", title: "Business Discovery", desc: "We learn your workflow, clients, goals, and growth gaps before writing a single line of code." },
    { num: "02", title: "Premium UI/UX Design", desc: "Wireframes and full visual design reviewed and approved by you before development begins." },
    { num: "03", title: "Development & Database", desc: "Clean, secure code built around your exact data structure, integrations, and business logic." },
    { num: "04", title: "Launch, Training & Support", desc: "We deploy, train your team, and stay available for improvements after go-live." }
];

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#platform", label: "Platform" },
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
    "Other - Let's discuss"
];

const cssRules = [
    "@keyframes spinInfinite { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    "@keyframes fadeOut { 0% { opacity: 1; } 78% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",
    "@keyframes glowPulse { 0%, 100% { transform: scale(.92); filter: blur(14px); } 50% { transform: scale(1.15); filter: blur(22px); } }",
    "@keyframes bubbleIn { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }",
    "@keyframes tailWag { 0%, 100% { transform: rotate(-22deg); } 50% { transform: rotate(28deg); } }",
    "@keyframes tailSlow { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(10deg); } }",
    "@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }",
    "@keyframes typingBounce { 0%, 60%, 100% { transform: translateY(0); opacity: .4; } 30% { transform: translateY(-6px); opacity: 1; } }",
    "@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }",
    "@keyframes floatBlob { 0%, 100% { transform: translate(0,0) scale(1); } 33% { transform: translate(24px,-28px) scale(1.08); } 66% { transform: translate(-18px,16px) scale(.95); } }",
    "@keyframes floatBlob2 { 0%, 100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-20px,22px) scale(1.06); } 66% { transform: translate(28px,-12px) scale(1.1); } }",
    "@keyframes fadeInUp { from { opacity: 0; transform: translateY(36px); } to { opacity: 1; transform: translateY(0); } }",
    "@keyframes meshShift { 0%, 100% { transform: translate3d(0,0,0) skewY(-4deg); } 50% { transform: translate3d(-4%,3%,0) skewY(3deg); } }",
    "@keyframes deviceFloat { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-16px) rotate(1deg); } }",
    "@keyframes lineFlow { 0% { transform: translateX(-42%); opacity: .55; } 50% { opacity: 1; } 100% { transform: translateX(42%); opacity: .55; } }",
    "@keyframes pulsePanel { 0%, 100% { opacity: .65; transform: scaleX(.72); } 50% { opacity: 1; transform: scaleX(1); } }",
    ".intro { animation: fadeOut 2.6s forwards; }",
    ".logoSpin { animation: spinInfinite 2s linear infinite; }",
    ".logoGlow { background: radial-gradient(circle, rgba(251,113,133,.75), rgba(37,99,235,.35) 42%, transparent 72%); filter: blur(16px); transition: opacity .45s ease; animation: glowPulse 1.8s ease-in-out infinite; }",
    ".logoPath { transition: all 1.15s cubic-bezier(.16,1,.3,1); }",
    ".bubble { animation: bubbleIn .45s cubic-bezier(.16,1,.3,1) both; }",
    ".luxBorder { background: linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, rgba(30,79,166,.65), rgba(122,79,154,.42) 35%, rgba(233,106,154,.58) 65%, rgba(242,139,122,.52)) border-box; border: 1px solid transparent; transition: box-shadow .3s ease; }",
    ".luxBorder:hover { box-shadow: 0 0 28px rgba(251,113,133,.16), 0 0 44px rgba(37,99,235,.10); }",
    ".heroMesh { background: linear-gradient(135deg, #1E4FA6 0%, #7A4F9A 35%, #E96A9A 65%, #F6A08A 100%); animation: meshShift 9s ease-in-out infinite; }",
    ".heroMesh::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 35%, rgba(255,255,255,.28), transparent 22%), radial-gradient(circle at 70% 64%, rgba(15,23,42,.38), transparent 30%); mix-blend-mode: screen; }",
    ".deviceFloat { animation: deviceFloat 7s ease-in-out infinite; }",
    ".lineFlow { animation: lineFlow 8s ease-in-out infinite; }",
    ".pulsePanel { transform-origin: left center; animation: pulsePanel 2.8s ease-in-out infinite; }",
    ".cat { position: relative; width: 64px; height: 54px; transform-origin: center; transition: transform .25s ease, filter .25s ease; }",
    ".catLeft { transform: scaleX(-1); }",
    ".catSit { transform: translateY(7px) scale(.96); }",
    ".catSit.catLeft { transform: translateY(7px) scale(.96) scaleX(-1); }",
    ".catHead { position: absolute; left: 10px; top: 8px; width: 44px; height: 40px; display: grid; place-items: center; border-radius: 48% 48% 45% 45%; background: linear-gradient(135deg, #ffffff, #cbd5e1); box-shadow: 0 14px 28px rgba(0,0,0,.36), inset 0 0 0 2px rgba(251,113,133,.30); }",
    ".catHead::before { content: ''; position: absolute; left: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(251,113,133,.18); }",
    ".catHead::after { content: ''; position: absolute; right: 5px; top: -7px; width: 13px; height: 13px; background: #e2e8f0; transform: rotate(45deg); border-radius: 3px; box-shadow: inset 2px 2px 0 rgba(251,113,133,.18); }",
    ".catFace { position: relative; z-index: 2; font-size: 12px; font-weight: 900; color: #0f172a; letter-spacing: .02em; }",
    ".catFace::before { content: ''; position: absolute; width: 4px; height: 4px; border-radius: 999px; background: #0f172a; left: -8px; top: 3px; box-shadow: 16px 0 0 #0f172a; }",
    ".catFace::after { content: ''; position: absolute; width: 5px; height: 4px; border-radius: 999px; background: #0f172a; left: 50%; transform: translateX(-50%); top: 10px; }",
    ".catTail { position: absolute; right: 2px; top: 25px; width: 26px; height: 9px; border-radius: 999px; background: linear-gradient(90deg, #F6A08A, #FB7185, #2563EB); transform-origin: left center; box-shadow: 0 8px 20px rgba(251,113,133,.35); }",
    ".catTail::after { content: ''; position: absolute; right: -5px; top: -3px; width: 10px; height: 10px; border-radius: 999px; background: #2563EB; }",
    ".catBody { position: absolute; left: 7px; top: 27px; width: 42px; height: 22px; border-radius: 999px; background: linear-gradient(135deg, #e2e8f0, #94a3b8); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35); }",
    ".catPaw { position: absolute; bottom: 1px; width: 8px; height: 5px; border-radius: 999px; background: #f8fafc; }",
    ".catPaw.one { left: 16px; }",
    ".catPaw.two { left: 34px; }",
    ".catWalk .catTail { animation: tailWag .42s ease-in-out infinite; }",
    ".catSit .catTail { animation: tailSlow .95s ease-in-out infinite; }",
    ".cat-happy .catHead { box-shadow: 0 14px 34px rgba(251,113,133,.55), inset 0 0 0 2px rgba(246,160,138,.55); }",
    ".cat-sad .catHead { filter: grayscale(.55) brightness(.85); }",
    ".catShadow { position: absolute; width: 42px; height: 10px; background: rgba(0,0,0,.42); border-radius: 50%; top: 48px; left: 11px; filter: blur(5px); }",
    ".avatarHomeRoof { position: absolute; left: 18px; top: 9px; width: 26px; height: 26px; transform: rotate(45deg); border-left: 2px solid rgba(251,113,133,.75); border-top: 2px solid rgba(251,113,133,.75); background: linear-gradient(135deg, rgba(233,106,154,.22), rgba(37,99,235,.16)); }",
    ".avatarHomeBody { position: absolute; left: 15px; top: 24px; width: 32px; height: 25px; border: 2px solid rgba(251,113,133,.75); border-radius: 8px 8px 10px 10px; background: rgba(15,23,42,.92); box-shadow: inset 0 0 20px rgba(251,113,133,.12); }",
    ".avatarHomeDoor { position: absolute; left: 27px; top: 34px; width: 9px; height: 15px; border-radius: 6px 6px 0 0; background: linear-gradient(180deg, #F6A08A, #2563EB); }",
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
                        <stop offset="0%" stopColor="#F6A08A" />
                        <stop offset="40%" stopColor="#E96A9A" />
                        <stop offset="72%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx={active ? "30" : "20"} fill="url(#lg)" />
                <path d={active ? "M30 70 V30 L70 70 V30" : "M35 65 L50 35 L65 65"} stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="logoPath" />
            </svg>
        </button>
    );
}

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
        <div className="intro fixed inset-0 z-50 grid place-items-center bg-[#0F172A]">
            <div className="text-center">
                <Logo className="h-28 w-28" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.55em] text-white/80">PT NusaTech</p>
                <p className="mt-3 text-xs tracking-[0.3em] text-[#F6A08A]/70">AI Solutions</p>
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
            <button type="button" onClick={sendHome} aria-label="Send mascot home" className="fixed left-4 top-4 z-50 h-16 w-16 rounded-2xl border border-[#7C3AED]/30 bg-[#0F172A]/85 shadow-2xl shadow-[#1E4FA6]/40 backdrop-blur transition hover:scale-105 hover:border-[#7C3AED]/60">
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

const chatKB = [
    { keys: ["price", "cost", "how much", "pricing", "usd", "rate", "charge", "harga", "biaya", "berapa", "prix", "tarif", "combien"], answer: "Our packages:\n\nWebsite Launch - From USD 500\nCRM Dashboard - From USD 1,200\nGrowth Suite - Custom pricing\n\nFor an exact quote, send your project details in the contact form." },
    { keys: ["how long", "timeline", "duration", "delivery", "weeks", "berapa lama", "durasi", "waktu", "combien de temps", "delai"], answer: "Typical timelines:\n\nBusiness website: 2-4 weeks\nCRM dashboard: 4-8 weeks\nFull growth suite: 8-12 weeks\n\nWe confirm the schedule in writing before starting." },
    { keys: ["payment", "deposit", "installment", "invoice", "pay", "pembayaran", "uang muka", "cicilan", "paiement", "acompte"], answer: "Payment structure:\n\n50% deposit to begin\n50% on final delivery\nMilestone payments for larger systems\n\nAll terms are agreed in writing first." },
    { keys: ["support", "maintenance", "update", "after launch", "bug", "fix", "pemeliharaan"], answer: "After launch we can provide:\n\nMonthly maintenance\nBug fixes and security updates\nFeature improvements\nContent updates\n\nWe stay available after delivery." },
    { keys: ["website", "web", "landing page", "site"], answer: "Premium Business Websites:\n\nModern websites for hotels, travel agencies, consultants, exporters, and service businesses.\n\nMobile responsive\nWhatsApp integrated\nSEO-ready\nPremium brand presentation\n\nStarting from USD 500." },
    { keys: ["crm", "dashboard", "client management", "leads", "pipeline", "sales system"], answer: "CRM Dashboard Systems:\n\nLead and client tracking\nSales pipeline view\nDocument management\nPayment tracking\nTeam task management\nBusiness analytics\n\nFully custom-built. From USD 1,200." },
    { keys: ["app", "portal", "booking system", "platform", "admin panel", "aplikasi"], answer: "Apps and Portals:\n\nSecure web apps, client portals, booking flows, admin panels, and internal tools built around your exact workflow." },
    { keys: ["marketing", "seo", "funnel", "lead generation", "digital marketing", "social media", "iklan"], answer: "Digital Marketing:\n\nSEO structure\nWhatsApp funnels\nLanding pages\nCampaign tracking\nSocial media direction\nCRM lead capture\n\nWe connect marketing to your website and dashboard." },
    { keys: ["indonesia", "jakarta", "bali", "local", "based", "location", "where", "dimana", "lokasi"], answer: "We are based in Indonesia and work with local and international clients.\n\nTime zone: WIB (GMT+7).\nLanguages: English, Bahasa Indonesia, and French support." },
    { keys: ["consulting", "strategy", "business advice", "market entry", "konsultasi", "conseil"], answer: "Business Consulting:\n\nMarket entry strategy for Indonesia\nBusiness setup and structure\nHotel and travel operations\nDigital transformation planning\n\nVisit jakartaglobaladviser.com for more." },
    { keys: ["ai", "artificial intelligence", "automation", "chatbot", "machine learning", "kecerdasan buatan"], answer: "AI Integrations:\n\nSmart chatbots\nAutomated lead scoring\nAI follow-ups\nPredictive analytics dashboards\nAI-powered reports and summaries" },
    { keys: ["portfolio", "work", "example", "project", "previous client", "contoh", "portofolio"], answer: "Completed projects:\n\nTravelToko Dashboard - Travel sales CRM\nEsmeralda Vacation Club - Luxury website\nLive: esmeraldavacation.club\n\nScroll to the Portfolio section to see screenshots." },
    { keys: ["international", "foreign", "global", "overseas", "remote work", "internasional"], answer: "Yes, we work internationally.\n\nWe support foreign entrepreneurs in Indonesia, global companies that need a local presence, and remote projects in different time zones." },
    { keys: ["contact", "reach", "whatsapp", "email", "talk", "speak", "kontak", "hubungi"], answer: "Contact us directly:\n\nWhatsApp: 085770759300\nEmail: admin@jakartaglobaladviser.com\n\nYou can also use the contact form to create a ready-to-send WhatsApp message." },
    { keys: ["refund", "cancel", "guarantee", "warranty", "jaminan", "garantie"], answer: "We work milestone-by-milestone with written agreements before starting.\n\nIf something is not right, we fix it. Clear scope and communication protect both sides." },
    { keys: ["hotel", "resort", "travel", "tourism", "vacation", "pariwisata"], answer: "Hospitality and travel systems:\n\nBooking and reservation tools\nGuest management portals\nRevenue dashboards\nVacation club and membership systems\nTravel agency CRM dashboards" },
    { keys: ["hello", "hi", "hey", "halo", "bonjour", "salut", "good morning", "good day"], answer: "Hello, welcome to PT NusaTech AI Solutions.\n\nAsk me about services, pricing, CRM dashboards, AI integrations, timelines, or how to start a project." }
];
function getBotAnswer(input) {
    const text = input.toLowerCase();
    const matches = chatKB
        .map(function (entry) {
            return { answer: entry.answer, score: entry.keys.filter(function (k) { return text.includes(k); }).length };
        })
        .filter(function (entry) { return entry.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, 3);

    if (matches.length === 0) return null;
    if (matches.length === 1) return matches[0].answer;
    return matches.map(function (entry, index) {
        return "Answer " + (index + 1) + ":\n" + entry.answer;
    }).join("\n\n---\n\n");
}

const QUICK_REPLIES = ["Pricing", "Timeline", "CRM?", "International?", "Contact"];

function RobotChat() {
    const [open, setOpen] = useState(false);
    const [msgs, setMsgs] = useState([{ from: "bot", text: "Hello! I'm the NusaTech AI assistant.\n\nAsk me anything about our services, pricing, timelines, or how we can help your business." }]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [unread, setUnread] = useState(0);
    const ref = useRef(null);
    const endRef = useRef(null);

    useEffect(function () { if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

    useEffect(function () {
        if (!open) return undefined;
        setUnread(0);
        const h = function (e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        window.addEventListener("mousedown", h);
        return function () { window.removeEventListener("mousedown", h); };
    }, [open]);

    function send(text) {
        if (!text.trim()) return;
        setMsgs(function (p) { return p.concat({ from: "user", text: text }); });
        setInput("");
        setTyping(true);
        window.setTimeout(function () {
            const answer = getBotAnswer(text);
            setTyping(false);
            setMsgs(function (p) {
                return p.concat(answer
                    ? { from: "bot", text: answer }
                    : { from: "bot", text: "I don't have a specific answer for that, but our team can help directly!", cta: true }
                );
            });
            if (!open) setUnread(function (n) { return n + 1; });
        }, 1100);
    }

    return (
        <div ref={ref} className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
            {open && (
                <div className="bubble flex w-[calc(100vw-2rem)] max-w-[340px] flex-col overflow-hidden rounded-3xl border border-[#E96A9A]/20 shadow-2xl shadow-[#1E4FA6]/40" style={{ height: "min(520px, 75vh)", background: "#1A1A1F" }}>
                    {/* Header */}
                    <div className="flex shrink-0 items-center gap-3 border-b border-[#E96A9A]/15 px-5 py-3.5" style={{ background: "#1A1A1F" }}>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-xs font-black shadow-lg shadow-[#1E4FA6]/40">AI</div>
                        <div>
                            <p className="text-sm font-black text-white">NusaTech AI</p>
                            <p className="flex items-center gap-1 text-[11px] text-green-400"><span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>Online - replies instantly</p>
                        </div>
                        <button onClick={function () { setOpen(false); }} className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-[#E96A9A]/10 hover:text-white" aria-label="Close chat">x</button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4">
                        {msgs.map(function (msg, i) {
                            const isUser = msg.from === "user";
                            return (
                                <div key={i} className={"flex " + (isUser ? "justify-end" : "justify-start")}>
                                    <div className={"max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 " + (isUser ? "bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-white" : "border border-[#E96A9A]/15 bg-[#E96A9A]/5 text-slate-200")}>
                                        <p className="whitespace-pre-line">{msg.text}</p>
                                        {msg.cta && (
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z" /></svg>
                                                Chat on WhatsApp
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        {typing && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 px-4 py-3">
                                    <span className="flex gap-1">
                                        {[0, 1, 2].map(function (i) { return <span key={i} className="inline-block h-2 w-2 rounded-full bg-[#F6A08A]/60" style={{ animation: "typingBounce 1.2s ease-in-out infinite", animationDelay: (i * 0.2) + "s" }} />; })}
                                    </span>
                                </div>
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    {/* Quick replies */}
                    <div className="shrink-0 border-t border-[#E96A9A]/10 px-4 py-2">
                        <div className="flex flex-wrap gap-1.5">
                            {QUICK_REPLIES.map(function (q) {
                                return <button key={q} onClick={function () { send(q); }} className="rounded-full border border-[#E96A9A]/20 bg-[#E96A9A]/5 px-3 py-1 text-xs text-[#F6A08A] transition hover:bg-[#E96A9A]/15 hover:text-white">{q}</button>;
                            })}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="shrink-0 flex gap-2 border-t border-[#E96A9A]/10 px-4 py-3">
                        <input
                            type="text" value={input}
                            onChange={function (e) { setInput(e.target.value); }}
                            onKeyDown={function (e) { if (e.key === "Enter") send(input); }}
                            placeholder="Ask anything..."
                            className="flex-1 rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#E96A9A]/40 focus:bg-[#E96A9A]/10"
                        />
                        <button onClick={function () { send(input); }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-white transition hover:opacity-90" aria-label="Send message">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M3.105 2.289a.75.75 0 0 0-.826.95l1.414 4.925A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.896 28.896 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.289Z" /></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle button */}
            <button type="button" onClick={function () { setOpen(function (v) { return !v; }); }} aria-label={open ? "Close chat" : "Open chat"} aria-expanded={open}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] shadow-xl shadow-[#1E4FA6]/45 transition hover:scale-105">
                <span className="absolute inset-[-8px] rounded-full bg-[#E96A9A]/20 blur-xl" />
                {unread > 0 && !open && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white">{unread}</span>}
                <span className="relative text-sm font-black">{open ? "x" : "AI"}</span>
            </button>
        </div>
    );
}

function SectionTitle({ eyebrow, title, text }) {
    return (
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.55em] text-[#F6A08A]">{eyebrow}</p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
            {text ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">{text}</p> : null}
        </div>
    );
}

function FAQSection({ eyebrow, title }) {
    const [open, setOpen] = useState(0);
    return (
        <section id="faq" className="px-6 py-24 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <FadeIn><SectionTitle eyebrow={eyebrow} title={title} text="Clear answers about websites, CRM dashboards, AI integrations, timelines, support, and how we work with serious businesses." /></FadeIn>
                <div className="mx-auto grid max-w-5xl gap-4">
                    {faqs.map(function (item, index) {
                        const active = open === index;
                        return (
                            <div key={item.q} className={"luxBorder overflow-hidden rounded-3xl transition " + (active ? "bg-[#E96A9A]/10" : "")}>
                                <button
                                    type="button"
                                    onClick={function () { setOpen(active ? -1 : index); }}
                                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                    aria-expanded={active}
                                >
                                    <span className="text-lg font-black text-white md:text-xl">{item.q}</span>
                                    <span className={"grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#E96A9A]/20 text-[#F6A08A] transition " + (active ? "rotate-45 bg-[#E96A9A]/10" : "")}>
                                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
                                    </span>
                                </button>
                                {active ? <div className="px-6 pb-6 pr-16 text-base leading-8 text-slate-400">{item.a}</div> : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function SoftwareShowcase() {
    return (
        <div className="relative min-h-[520px]">
            <div className="absolute inset-x-0 top-10 h-[360px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0F172A] shadow-2xl shadow-[#1E4FA6]/40">
                <div className="heroMesh absolute -inset-12 opacity-95" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:54px_54px] opacity-35" />
                <div className="lineFlow absolute left-8 right-8 top-28 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F172A] to-transparent" />
                <div className="absolute left-8 top-8 text-xs font-black uppercase tracking-[0.8em] text-white/70">NUSATECH</div>
                <div className="absolute right-8 top-8 hidden gap-8 text-xs font-bold text-white/70 sm:flex"><span>CRM</span><span>Apps</span><span>AI</span><span>Web</span></div>
                <div className="absolute left-8 top-36 max-w-[320px]">
                    <p className="text-xs font-black uppercase tracking-[0.45em] text-[#FFFFFF]/80">Software Studio</p>
                    <p className="mt-4 text-5xl font-black leading-none tracking-[0.18em] text-white/90">WEB<br />CRM<br />AI</p>
                    <p className="mt-5 text-sm leading-6 text-white/75">Luxury interfaces for dashboards, portals, websites, workflows and intelligent business systems.</p>
                </div>
            </div>

            <div className="deviceFloat absolute right-0 top-28 hidden w-[68%] rounded-[2rem] border-[10px] border-black bg-black shadow-2xl shadow-black/60 lg:block">
                <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
                <div className="overflow-hidden rounded-[1.35rem] bg-[#1A1A1F]">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/45 px-5 py-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F6A08A]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-[#F6A08A]">Live CRM Dashboard</span>
                    </div>
                    <div className="grid gap-4 p-5">
                        <div className="grid grid-cols-3 gap-3">
                            {dashboardStats.map(function (s) {
                                return <div key={s.label} className="rounded-2xl border border-[#E96A9A]/15 bg-white/[0.06] p-4"><p className="text-2xl font-black text-white">{s.value}</p><p className="text-xs text-slate-400">{s.label}</p></div>;
                            })}
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
                            <div className="rounded-2xl border border-[#E96A9A]/15 bg-white/[0.05] p-5">
                                <div className="mb-5 flex items-center justify-between"><p className="font-bold">Sales Pipeline</p><p className="text-xs font-bold text-[#F6A08A]">AI Qualified</p></div>
                                {[88, 70, 54, 76].map(function (w, i) { return <div key={w} className="mb-4 last:mb-0"><div className="h-3 overflow-hidden rounded-full bg-slate-900"><div className="pulsePanel h-full rounded-full bg-gradient-to-r from-[#F6A08A] via-[#E96A9A] to-[#1E4FA6]" style={{ width: w + "%", animationDelay: (i * 0.25) + "s" }} /></div></div>; })}
                            </div>
                            <div className="rounded-2xl border border-[#E96A9A]/15 bg-white/[0.05] p-5">
                                <p className="text-sm font-black">Workflow Engine</p>
                                {["New lead", "AI summary", "Sales task", "WhatsApp follow-up"].map(function (item, i) {
                                    return <div key={item} className="mt-3 flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-[#F6A08A]" style={{ opacity: 1 - i * 0.18 }} />{item}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-2 right-6 w-[190px] rounded-[2rem] border-[9px] border-black bg-black shadow-2xl shadow-black/60 sm:right-10 lg:right-auto lg:left-4">
                <div className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 rounded-b-2xl bg-black" />
                <div className="overflow-hidden rounded-[1.25rem] bg-[#100024] p-4">
                    <div className="mb-4 flex items-center justify-between"><Logo className="h-8 w-8" /><span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black text-[#FFFFFF]">Mobile</span></div>
                    <p className="text-xl font-black leading-tight">Client Portal</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">Invoices, bookings, forms and customer status in one app.</p>
                    <div className="mt-5 space-y-2">
                        {["Booking", "Payment", "Documents"].map(function (item, i) {
                            return <div key={item} className="rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/10 px-3 py-2 text-xs text-white" style={{ opacity: 1 - i * 0.14 }}>{item}</div>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectScreenshot({ type }) {
    if (type === "traveltoko") {
        return (
            <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-[#E96A9A]/15 bg-[#0F172A] shadow-2xl shadow-[#1E4FA6]/30">
                <img src="/projects/traveltoko-dashboard-screenshot.png" alt="TravelToko dashboard screenshot" className="h-full w-full object-cover object-left-top" loading="lazy" />
            </div>
        );
    }
    return (
        <div className="mb-6 h-56 overflow-hidden rounded-3xl border border-[#E96A9A]/15 bg-stone-50 shadow-2xl shadow-[#1E4FA6]/30">
            <img src="/projects/esmeralda-vacation-club-screenshot.png" alt="Esmeralda Vacation Club website screenshot" className="h-full w-full object-cover object-left-top" loading="lazy" />
        </div>
    );
}

function MobileMenu({ open, onClose, lang }) {
    const t = LANGS[lang] || LANGS.en;
    if (!open) return null;
    return (
        <div className="mt-3 rounded-3xl border border-[#E96A9A]/15 bg-[#1A1A1F]/98 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1">
                {navLinks.map(function (link) {
                    return <a key={link.href} href={link.href} onClick={onClose} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-[#E96A9A]/10 hover:text-white">{link.label}</a>;
                })}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-[#E96A9A]/15 pt-4">
                <a href="#contact" onClick={onClose} className="rounded-2xl border border-[#E96A9A]/30 bg-[#E96A9A]/10 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#E96A9A]/20">{t.startProject}</a>
                <a href={CONSULTANT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-[#F28B7A] to-[#F6A08A] px-5 py-3 text-center text-sm font-black text-slate-900 shadow-md shadow-[#F28B7A]/25 ring-1 ring-[#F6A08A]/40 transition-all hover:from-[#F6A08A] hover:to-[#F28B7A]">
                    {t.consulting}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 opacity-70"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                </a>
            </div>
        </div>
    );
}

function ContactForm({ lang }) {
    const t = LANGS[lang] || LANGS.en;
    const [form, setForm] = useState({ name: "", contact: "", service: serviceOptions[0], message: "" });
    const [sent, setSent] = useState(false);
    const change = function (e) { const { name, value } = e.target; setForm(function (p) { return Object.assign({}, p, { [name]: value }); }); };
    const submit = function (e) {
        e.preventDefault();
        const text = encodeURIComponent("Hello PT NusaTech,\n\nI would like to discuss a project.\n\nName: " + form.name + "\nContact: " + form.contact + "\nInterested in: " + form.service + "\n\nMessage:\n" + form.message);
        window.open(WHATSAPP_URL + "?text=" + text, "_blank", "noopener,noreferrer");
        setSent(true);
    };
    const inp = "w-full rounded-2xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-[#E96A9A]/50 focus:bg-[#E96A9A]/10 focus:ring-1 focus:ring-[#E96A9A]/30";
    if (sent) {
        return (
            <div className="rounded-3xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E96A9A]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-[#F6A08A]"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-xl font-black text-white">{t.sentTitle}</p>
                <p className="mt-2 text-sm text-slate-400">{t.sentSub} <a href={WHATSAPP_URL} className="text-[#F6A08A] underline">click here</a>.</p>
                <button type="button" onClick={function () { setSent(false); setForm({ name: "", contact: "", service: serviceOptions[0], message: "" }); }} className="mt-6 rounded-xl border border-[#E96A9A]/20 bg-[#E96A9A]/5 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#E96A9A]/10">{t.sendAnother}</button>
            </div>
        );
    }
    return (
        <form onSubmit={submit} method="post" className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">{t.formName}</label><input id="contact-name" type="text" name="name" value={form.name} onChange={change} required placeholder={t.formPlaceholderName} className={inp} /></div>
                <div><label htmlFor="contact-method" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">{t.formContact}</label><input id="contact-method" type="text" name="contact" value={form.contact} onChange={change} required placeholder={t.formPlaceholderContact} className={inp} /></div>
            </div>
            <div><label htmlFor="contact-service" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">{t.formService}</label>
                <select id="contact-service" name="service" value={form.service} onChange={change} className={inp + " cursor-pointer"}>
                    {serviceOptions.map(function (s) { return <option key={s} value={s} className="bg-[#1A1A1F] text-white">{s}</option>; })}
                </select>
            </div>
            <div><label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">{t.formMsg}</label><textarea id="contact-message" name="message" value={form.message} onChange={change} required placeholder={t.formPlaceholderMsg} rows={5} className={inp + " resize-none"} /></div>
            <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB] py-4 font-black text-white shadow-xl shadow-[#1E4FA6]/40 transition hover:opacity-90">{t.sendCta}</button>
            <p className="text-center text-xs text-slate-500">{t.disclaimer}</p>
        </form>
    );
}

function StarRating() {
    return (
        <div className="mb-5 flex gap-1">
            {[1, 2, 3, 4, 5].map(function (i) {
                return <svg key={i} className="h-4 w-4 text-[#F28B7A]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
            })}
        </div>
    );
}

function FadeIn({ children, delay, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(function () {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
        const obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) { setVisible(true); obs.unobserve(entry.target); }
            });
        }, { threshold: 0.15 });
        obs.observe(el);
        return function () { obs.disconnect(); };
    }, []);
    return (
        <div
            ref={ref}
            className={className || ""}
            style={{
                opacity: visible ? 1 : 0,
                animation: visible ? "fadeInUp .8s cubic-bezier(.16,1,.3,1) " + (delay || 0) + "s both" : "none"
            }}
        >
            {children}
        </div>
    );
}

function Counter({ value, className }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(value);
    useEffect(function () {
        const el = ref.current;
        if (!el) return;
        const match = /^([0-9]+)(.*)$/.exec(String(value));
        if (!match) { setDisplay(value); return; }
        const target = parseInt(match[1], 10);
        const suffix = match[2] || "";
        if (typeof IntersectionObserver === "undefined") { setDisplay(value); return; }
        let started = false;
        const obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !started) {
                    started = true;
                    const duration = 1100;
                    const start = performance.now();
                    function tick(now) {
                        const progress = Math.min(1, (now - start) / duration);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(target * eased) + suffix);
                        if (progress < 1) requestAnimationFrame(tick);
                        else setDisplay(target + suffix);
                    }
                    requestAnimationFrame(tick);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        obs.observe(el);
        return function () { obs.disconnect(); };
    }, [value]);
    return <p ref={ref} className={className}>{display}</p>;
}

function FloatingBlobs({ variant }) {
    if (variant === "section") {
        return (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" style={{ animation: "floatBlob 22s ease-in-out infinite" }} />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" style={{ animation: "floatBlob2 26s ease-in-out infinite" }} />
            </div>
        );
    }
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-fuchsia-500/25 via-pink-500/15 to-transparent blur-3xl" style={{ animation: "floatBlob 18s ease-in-out infinite" }} />
            <div className="absolute -right-28 top-24 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-violet-600/25 via-indigo-500/15 to-transparent blur-3xl" style={{ animation: "floatBlob2 22s ease-in-out infinite" }} />
            <div className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-pink-500/15 via-fuchsia-600/10 to-transparent blur-3xl" style={{ animation: "floatBlob 26s ease-in-out infinite reverse" }} />
        </div>
    );
}

function CookieConsent() {
    const [visible, setVisible] = useState(function () {
        try { return window.localStorage.getItem("cookie_consent") !== "accepted"; } catch (e) { return false; }
    });
    if (!visible) return null;
    return (
        <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl rounded-3xl border border-[#E96A9A]/25 bg-[#1A1A1F]/95 p-5 shadow-2xl shadow-[#1E4FA6]/40 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm leading-6 text-slate-300">
                    We use essential cookies and Google Analytics to understand website performance and improve the experience.
                    Read our <a href="/cookies.html" className="font-bold text-[#F6A08A] underline">Cookie Policy</a>.
                </p>
                <button type="button" onClick={function () { try { window.localStorage.setItem("cookie_consent", "accepted"); } catch (e) { } setVisible(false); }} className="shrink-0 rounded-2xl bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#1E4FA6]/30">
                    Accept
                </button>
            </div>
        </div>
    );
}

const LANGS = {
    en: {
        badge: "Indonesia-based IT solutions & AI integrations partner",
        heroTitle: "Premium websites, CRM dashboards, apps and marketing systems for serious businesses.",
        heroSub: "PT NusaTech AI Solutions helps hotels, travel companies, exporters, consultants, and service businesses look premium, manage clients better, and turn digital systems into real sales.",
        cta1: "Build My Website / CRM", cta2: "View Work",
        metrics: [{ a: "10+", b: "Projects delivered" }, { a: "3+", b: "Countries served" }, { a: "100%", b: "Custom-built" }],
        startProject: "Start Project", consulting: "Consulting",
        servicesEyebrow: "Services", servicesTitle: "Digital solutions built around real business operations.",
        servicesSub: "From the public website to the private dashboard, we create digital systems that improve trust, sales, client management, and daily workflow.",
        packagesEyebrow: "Packages", packagesTitle: "Packages designed for different business stages.",
        faqEyebrow: "FAQ", faqTitle: "Questions serious clients usually ask.",
        contactEyebrow: "Start Your Project", contactTitle: "Ready to build something your business deserves?",
        sendMsg: "Send us a message", sendCta: "Send via WhatsApp",
        formName: "Your Name", formContact: "Email or WhatsApp", formService: "I'm interested in", formMsg: "Tell us about your project",
        formPlaceholderName: "John Smith", formPlaceholderContact: "you@company.com",
        formPlaceholderMsg: "Briefly describe your business, what you need, and your timeline...",
        disclaimer: "Your message opens pre-filled in WhatsApp. No data stored.",
        sentTitle: "Message ready!", sentSub: "WhatsApp opened with your message pre-filled.", sendAnother: "Send another",
        popular: "Most Popular", getStarted: "Get Started",
        comingSoonEyebrow: "Coming Soon", comingSoonTitle: "New projects in the pipeline.",
        processCta: "Explore Consulting Support", testimonialsEyebrow: "Client Results", testimonialsTitle: "What clients say about working with us.",
        industryEyebrow: "Industries", industryTitle: "Industries we serve from Indonesia.",
        processEyebrow: "Process", processTitle: "A clear process clients can trust.",
        marketingEyebrow: "Digital Marketing", marketingTitle: "Not only a beautiful website - a complete lead generation system.",
        consultingEyebrow: "Consulting", consultingTitle: "Need more than development?",
        chartDisclaimer: "Example campaign results - actual results vary by client",
        portfolioEyebrow: "Portfolio Screenshots", portfolioTitle: "Real project screenshots and dashboard previews.",
        portfolioSub: "TravelToko Dashboard and the Esmeralda Vacation Club Website are shown as portfolio screenshots so clients can instantly understand the work.",
        comingSoonSub: "These upcoming CRM, resort website, and travel marketplace concepts show the next systems PT NusaTech AI Solutions can launch for serious clients.",
        industrySub: "A flexible IT solutions and AI integrations partner for Indonesian businesses, foreign entrepreneurs, hotels, exporters, consultants, and international clients.",
        processSub: "Clients buy faster when the process is clear, professional, and connected to business results.",
        packagesSub: "Start with a professional website, upgrade to a CRM dashboard, or build a complete growth system with marketing and consulting support.",
        testimonialsSub: "Real feedback from businesses across hospitality, travel, and international trade.",
        marketingSub: "We connect premium design with digital marketing strategy: SEO foundations, campaign pages, WhatsApp funnels, content direction, tracking, and CRM lead capture.",
        consultingSub: "Beyond websites and CRM systems, we support market entry, business setup, commercial strategy, hotel and travel operations, digital transformation, and growth planning in Indonesia."
    },
    id: {
        badge: "Mitra solusi IT dan integrasi AI berbasis Indonesia",
        heroTitle: "Website premium, dashboard CRM, aplikasi dan sistem pemasaran untuk bisnis serius.",
        heroSub: "PT NusaTech AI Solutions membantu hotel, perusahaan perjalanan, eksportir, konsultan, dan bisnis layanan tampil premium, mengelola klien lebih baik, dan mengubah sistem digital menjadi peluang penjualan nyata.",
        cta1: "Bangun Website / CRM Saya", cta2: "Lihat Portofolio",
        metrics: [{ a: "10+", b: "Proyek selesai" }, { a: "3+", b: "Negara dilayani" }, { a: "100%", b: "Kustom penuh" }],
        startProject: "Mulai Proyek", consulting: "Konsultasi",
        servicesEyebrow: "Layanan", servicesTitle: "Solusi digital yang dibangun berdasarkan operasi bisnis nyata.",
        servicesSub: "Dari website publik hingga dashboard privat, kami menciptakan sistem digital yang meningkatkan kepercayaan, penjualan, manajemen klien, dan alur kerja harian.",
        packagesEyebrow: "Paket", packagesTitle: "Paket dirancang untuk berbagai tahap bisnis.",
        faqEyebrow: "FAQ", faqTitle: "Pertanyaan yang biasa diajukan klien serius.",
        contactEyebrow: "Mulai Proyek Anda", contactTitle: "Siap membangun sesuatu yang layak untuk bisnis Anda?",
        sendMsg: "Kirim pesan kepada kami", sendCta: "Kirim via WhatsApp",
        formName: "Nama Anda", formContact: "Email atau WhatsApp", formService: "Saya tertarik pada", formMsg: "Ceritakan tentang proyek Anda",
        formPlaceholderName: "Budi Santoso", formPlaceholderContact: "anda@perusahaan.com",
        formPlaceholderMsg: "Ceritakan bisnis Anda, apa yang Anda butuhkan, dan timeline Anda...",
        disclaimer: "Pesan Anda akan terbuka di WhatsApp sudah terisi. Tidak ada data yang disimpan.",
        sentTitle: "Pesan siap dikirim!", sentSub: "WhatsApp terbuka dengan pesan Anda sudah terisi.", sendAnother: "Kirim pesan lain",
        popular: "Paling Populer", getStarted: "Mulai Sekarang",
        comingSoonEyebrow: "Segera Hadir", comingSoonTitle: "Proyek baru yang sedang dalam pengerjaan.",
        processCta: "Jelajahi Layanan Konsultasi", testimonialsEyebrow: "Hasil Klien", testimonialsTitle: "Apa kata klien tentang bekerja dengan kami.",
        industryEyebrow: "Industri", industryTitle: "Industri yang kami layani dari Indonesia.",
        processEyebrow: "Proses", processTitle: "Proses yang jelas dan dapat dipercaya klien.",
        marketingEyebrow: "Pemasaran Digital", marketingTitle: "Bukan hanya website indah - sistem generasi lead yang lengkap.",
        consultingEyebrow: "Konsultasi", consultingTitle: "Butuh lebih dari sekadar pengembangan?",
        chartDisclaimer: "Contoh hasil kampanye - hasil aktual bervariasi per klien",
        portfolioEyebrow: "Tangkapan Layar Portofolio", portfolioTitle: "Tangkapan layar proyek nyata dan pratinjau dashboard.",
        portfolioSub: "Dashboard TravelToko dan Website Esmeralda Vacation Club ditampilkan sebagai tangkapan layar portofolio agar klien dapat langsung memahami hasil kerja kami.",
        comingSoonSub: "Konsep CRM, website resort, dan marketplace perjalanan yang akan datang ini menunjukkan sistem berikutnya yang dapat diluncurkan PT NusaTech AI Solutions untuk klien serius.",
        industrySub: "Mitra solusi IT dan integrasi AI yang fleksibel untuk bisnis Indonesia, pengusaha asing, hotel, eksportir, konsultan, dan klien internasional.",
        processSub: "Klien membeli lebih cepat ketika prosesnya jelas, profesional, dan terhubung dengan hasil bisnis.",
        packagesSub: "Mulai dengan website profesional, tingkatkan ke dashboard CRM, atau bangun sistem pertumbuhan lengkap dengan dukungan pemasaran dan konsultasi.",
        testimonialsSub: "Umpan balik nyata dari bisnis di bidang perhotelan, perjalanan, dan perdagangan internasional.",
        marketingSub: "Kami menghubungkan desain premium dengan strategi pemasaran digital: dasar SEO, halaman kampanye, funnel WhatsApp, arahan konten, pelacakan, dan penangkapan lead CRM.",
        consultingSub: "Selain website dan sistem CRM, kami mendukung masuk pasar, pendirian bisnis, strategi komersial, operasi hotel dan perjalanan, transformasi digital, dan perencanaan pertumbuhan di Indonesia."
    },
    fr: {
        badge: "Partenaire de solutions IT et integrations IA base en Indonesie",
        heroTitle: "Sites web premium, tableaux de bord CRM, applications et systemes marketing pour les entreprises serieuses.",
        heroSub: "PT NusaTech AI Solutions aide les hotels, societes de voyage, exportateurs, consultants et entreprises de services a paraitre premium, mieux gerer leurs clients et transformer leurs systemes numeriques en opportunites de vente reelles.",
        cta1: "Construire Mon Site / CRM", cta2: "Voir le Portfolio",
        metrics: [{ a: "10+", b: "Projets livres" }, { a: "3+", b: "Pays servis" }, { a: "100%", b: "Sur-mesure" }],
        startProject: "Demarrer", consulting: "Conseil",
        servicesEyebrow: "Services", servicesTitle: "Des solutions digitales construites autour des operations reelles.",
        servicesSub: "Du site web public au tableau de bord prive, nous creons des systemes numeriques qui ameliorent la confiance, les ventes, la gestion des clients et le flux de travail quotidien.",
        packagesEyebrow: "Forfaits", packagesTitle: "Forfaits concus pour differentes etapes d entreprise.",
        faqEyebrow: "FAQ", faqTitle: "Questions que posent generalement les clients serieux.",
        contactEyebrow: "Demarrer Votre Projet", contactTitle: "Pret a construire quelque chose que votre entreprise merite ?",
        sendMsg: "Envoyez-nous un message", sendCta: "Envoyer via WhatsApp",
        formName: "Votre Nom", formContact: "Email ou WhatsApp", formService: "Je suis interesse par", formMsg: "Parlez-nous de votre projet",
        formPlaceholderName: "Jean Dupont", formPlaceholderContact: "vous@entreprise.com",
        formPlaceholderMsg: "Decrivez brievement votre entreprise, vos besoins et votre calendrier...",
        disclaimer: "Votre message s ouvre pre-rempli dans WhatsApp. Aucune donnee n est stockee.",
        sentTitle: "Message pret !", sentSub: "WhatsApp s est ouvert avec votre message pre-rempli.", sendAnother: "Envoyer un autre",
        popular: "Le Plus Populaire", getStarted: "Commencer",
        comingSoonEyebrow: "Bientot Disponible", comingSoonTitle: "Nouveaux projets en cours de developpement.",
        processCta: "Explorer le Conseil", testimonialsEyebrow: "Resultats Clients", testimonialsTitle: "Ce que disent nos clients.",
        industryEyebrow: "Secteurs", industryTitle: "Secteurs que nous servons depuis l Indonesie.",
        processEyebrow: "Processus", processTitle: "Un processus clair en qui les clients peuvent avoir confiance.",
        marketingEyebrow: "Marketing Digital", marketingTitle: "Pas seulement un beau site - un systeme complet de generation de leads.",
        consultingEyebrow: "Conseil", consultingTitle: "Besoin de plus que du developpement ?",
        chartDisclaimer: "Exemples de resultats de campagne - les resultats reels varient selon les clients"
    }
};

function DigitalStudioWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState(function () {
        try { return window.localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
    });
    const t = LANGS[lang] || LANGS.en;
    function switchLang(l) { setLang(l); try { window.localStorage.setItem("lang", l); } catch (e) { } }

    return (
        <main id="main-content" className="min-h-screen overflow-hidden bg-[#0F172A] text-white">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[100] focus:rounded-xl focus:bg-[#F6A08A] focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:text-slate-900">Skip to main content</a>

            <Intro />
            <CatFollower />
            <RobotChat />
            <CookieConsent />

            <section className="relative px-4 pb-24 pt-6 lg:px-16">
                {/* Background */}
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 20%, rgba(246,160,138,0.38) 0%, transparent 42%), radial-gradient(ellipse at 82% 12%, rgba(233,106,154,0.34) 0%, transparent 40%), radial-gradient(ellipse at 60% 72%, rgba(45,93,184,0.34) 0%, transparent 52%), linear-gradient(135deg, #1E4FA6 0%, #7A4F9A 35%, #E96A9A 65%, #F6A08A 100%)" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]" />
                <FloatingBlobs variant="hero" />

                <div className="relative z-10 mx-auto max-w-7xl">

                    <nav aria-label="Main navigation" className="flex items-center justify-between gap-4 rounded-2xl border border-[#E96A9A]/20 bg-[#1A1A1F]/70 px-5 py-3 shadow-2xl shadow-[#1E4FA6]/40 backdrop-blur-2xl">

                        {/* Brand */}
                        <div className="flex shrink-0 items-center gap-3">
                            <Logo className="h-9 w-9" intro />
                            <div>
                                <p className="text-sm font-black tracking-tight text-white">PT NusaTech</p>
                                <p className="text-[10px] font-medium tracking-wider text-[#F6A08A]/70">AI Solutions</p>
                            </div>
                        </div>

                        {/* Centre links */}
                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map(function (link) {
                                return (
                                    <a key={link.href} href={link.href} className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-[#E96A9A]/12 hover:text-white">
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Right CTAs */}
                        <div className="flex shrink-0 items-center gap-2">
                            {/* Lang switcher */}
                            <div className="hidden items-center gap-0.5 rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 p-0.5 lg:flex">
                                {["en", "id", "fr"].map(function (l) {
                                    return <button key={l} onClick={function () { switchLang(l); }} className={"rounded-lg px-2.5 py-1 text-[11px] font-black transition " + (lang === l ? "bg-[#E96A9A] text-white" : "text-slate-400 hover:text-white")}>{l.toUpperCase()}</button>;
                                })}
                            </div>
                            <a href="#contact" className="hidden rounded-xl border border-[#E96A9A]/30 bg-[#E96A9A]/10 px-5 py-2.5 text-sm font-black text-white transition hover:border-[#E96A9A]/50 hover:bg-[#E96A9A]/20 lg:inline-flex">
                                {t.startProject}
                            </a>
                            <a href={CONSULTANT_URL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F28B7A] to-[#F6A08A] px-5 py-2.5 text-sm font-black text-slate-900 shadow-md shadow-[#F28B7A]/25 ring-1 ring-[#F6A08A]/40 transition-all hover:from-[#F6A08A] hover:to-[#F28B7A] lg:inline-flex">
                                {t.consulting}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 opacity-70"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                            </a>
                            <button type="button" onClick={function () { setMenuOpen(function (v) { return !v; }); }} aria-label="Toggle menu" aria-expanded={menuOpen} className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E96A9A]/20 bg-[#E96A9A]/10 lg:hidden">
                                <span className="flex flex-col gap-1.5">
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "translate-y-2 rotate-45" : "")} />
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "opacity-0" : "")} />
                                    <span className={"block h-0.5 w-4 bg-white transition-all " + (menuOpen ? "-translate-y-2 -rotate-45" : "")} />
                                </span>
                            </button>
                        </div>
                    </nav>

                    <MobileMenu open={menuOpen} onClose={function () { setMenuOpen(false); }} lang={lang} />

                    <div className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
                        <FadeIn>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E96A9A]/25 bg-[#E96A9A]/10 px-4 py-2 text-sm font-semibold text-[#F6A08A]">
                                {t.badge}
                            </div>
                            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-5xl xl:text-7xl">{t.heroTitle}</h1>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">{t.heroSub}</p>
                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <a href="#contact" className="rounded-2xl bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB] px-7 py-4 text-center font-black text-white shadow-xl shadow-[#1E4FA6]/40 transition hover:opacity-90">{t.cta1}</a>
                                <a href="#work" className="rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/5 px-7 py-4 text-center font-black text-white transition hover:bg-[#E96A9A]/10">{t.cta2}</a>
                            </div>
                            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                                {t.metrics.map(function (m, i) { return <div key={m.a} className="rounded-2xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 p-4 transition hover:-translate-y-0.5 hover:bg-[#E96A9A]/10" style={{ animation: "fadeInUp .7s cubic-bezier(.16,1,.3,1) " + (.15 + i * .1) + "s both" }}><Counter value={m.a} className="text-xl font-black" /><p className="text-sm text-slate-400">{m.b}</p></div>; })}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.15}>
                            <SoftwareShowcase />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="services" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} text={t.servicesSub} /></FadeIn>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {services.map(function (item) {
                            return (
                                <div key={item.title} className="luxBorder rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-[#E96A9A]/5">
                                    <div className="mb-6 inline-flex rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/10 px-3 py-2 text-sm font-black text-[#F6A08A]">{item.icon}</div>
                                    <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 lg:px-20" style={{ background: "linear-gradient(135deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 md:grid-cols-4">
                        {[{ n: "4", l: "Core services" }, { n: "24/7", l: "Online presence" }, { n: "100%", l: "Custom workflow" }, { n: "Global", l: "Client ready" }].map(function (s) {
                            return <div key={s.l} className="luxBorder rounded-3xl p-7 text-center"><p className="text-4xl font-black text-[#F6A08A]">{s.n}</p><p className="mt-2 text-sm text-slate-400">{s.l}</p></div>;
                        })}
                    </div>
                </div>
            </section>

            <section id="work" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.portfolioEyebrow} title={t.portfolioTitle} text={t.portfolioSub} /></FadeIn>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map(function (item, i) {
                            return (
                                <div key={item.title} className="luxBorder rounded-[2rem] p-6 shadow-xl shadow-[#1E4FA6]/30">
                                    <div className="mb-3 w-fit rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/10 px-3 py-2 text-xs text-[#F6A08A]">Project 0{i + 1}</div>
                                    <ProjectScreenshot type={item.key} />
                                    <p className="mb-2 text-sm font-bold text-[#F6A08A]">{item.category}</p>
                                    <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                    {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#1E4FA6]/40">Visit Website <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg></a> : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="coming-soon" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.comingSoonEyebrow} title={t.comingSoonTitle} text={t.comingSoonSub} /></FadeIn>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {comingSoonProjects.map(function (item) {
                            return (
                                <div key={item.title} className="luxBorder rounded-[2rem] p-6 shadow-xl shadow-[#1E4FA6]/30">
                                    <div className="mb-5 h-56 overflow-hidden rounded-3xl border border-[#E96A9A]/15 bg-[#1A1A1F]">
                                        <img src={item.image} alt={item.title + " screenshot"} className="h-full w-full object-cover object-left-top" loading="lazy" />
                                    </div>
                                    <div className="mb-3 w-fit rounded-2xl bg-[#F6A08A] px-3 py-2 text-xs font-black text-slate-950">Coming Soon</div>
                                    <p className="mb-2 text-sm font-bold text-[#F6A08A]">{item.category}</p>
                                    <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                                    <p className="leading-7 text-slate-400">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="marketing" className="relative overflow-hidden px-6 py-24 lg:px-20">
                <FloatingBlobs variant="section" />
                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <FadeIn>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#F6A08A]">{t.marketingEyebrow}</p>
                        <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.marketingTitle}</h2>
                        <p className="mt-6 text-lg leading-8 text-slate-400">{t.marketingSub}</p>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <div className="luxBorder rounded-[2rem] p-6">
                            <div className="rounded-3xl bg-[#0F172A] p-6">
                                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">{t.chartDisclaimer}</p>
                                {["Website Visitors", "WhatsApp Clicks", "Qualified Leads", "Client Meetings"].map(function (label, i) {
                                    const vals = [90, 78, 62, 48], gr = [74, 58, 41, 26];
                                    return (
                                        <div key={label} className="mb-6 last:mb-0">
                                            <div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span className="font-bold text-[#F6A08A]">+{gr[i]}%</span></div>
                                            <div className="h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB]" style={{ width: vals[i] + "%", animation: "fadeInUp 1.1s cubic-bezier(.16,1,.3,1) " + (i * .12) + "s both" }} /></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section id="platform" className="relative overflow-hidden px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1E4FA6 0%, #0F172A 52%, #7A4F9A 100%)" }}>
                <FloatingBlobs variant="section" />
                <div className="relative z-10 mx-auto max-w-7xl">
                    <FadeIn>
                        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
                            <div>
                                <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#F6A08A]">Software Systems</p>
                                <h2 className="text-4xl font-black tracking-tight md:text-6xl">From beautiful website to complete business operating system.</h2>
                            </div>
                            <p className="text-lg leading-8 text-slate-400">Inspired by modern app builders, but custom-made for your company: data, workflows, dashboards, AI assistants, client portals, and premium interfaces connected into one system.</p>
                        </div>
                    </FadeIn>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {platformFeatures.map(function (feature, index) {
                            return (
                                <FadeIn key={feature.title} delay={index * 0.08}>
                                    <div className="luxBorder group relative min-h-[220px] overflow-hidden rounded-[2rem] p-7 transition hover:-translate-y-1">
                                        <div className="absolute inset-x-6 top-6 h-20 rounded-3xl bg-gradient-to-r from-[#E96A9A]/20 via-[#F28B7A]/10 to-[#2563EB]/20 blur-2xl transition group-hover:opacity-100" style={{ opacity: .45 }} />
                                        <div className="relative z-10">
                                            <div className="mb-8 flex items-center justify-between gap-3">
                                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/10 text-sm font-black text-[#F6A08A]">0{index + 1}</span>
                                                <span className="h-px flex-1 bg-gradient-to-r from-[#E96A9A]/40 to-transparent" />
                                            </div>
                                            <h3 className="text-2xl font-black">{feature.title}</h3>
                                            <p className="mt-4 leading-7 text-slate-400">{feature.text}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.industryEyebrow} title={t.industryTitle} text={t.industrySub} /></FadeIn>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map(function (ind) { return <div key={ind} className="luxBorder rounded-2xl p-5 text-center font-bold text-slate-200 transition hover:bg-[#E96A9A]/5">{ind}</div>; })}
                    </div>
                </div>
            </section>

            <section id="process" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.processEyebrow} title={t.processTitle} text={t.processSub} /></FadeIn>
                    <div className="grid gap-5 lg:grid-cols-4">
                        {processSteps.map(function (s) {
                            return (
                                <div key={s.num} className="luxBorder rounded-3xl p-7">
                                    <p className="mb-5 text-4xl font-black text-[#F6A08A]">{s.num}</p>
                                    <h3 className="mb-3 text-xl font-black">{s.title}</h3>
                                    <p className="leading-7 text-slate-400">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="packages" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.packagesEyebrow} title={t.packagesTitle} text={t.packagesSub} /></FadeIn>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {packages.map(function (item, idx) {
                            const featured = idx === 1;
                            return (
                                <div key={item.name} className={"flex flex-col rounded-[2rem] p-7 " + (featured ? "border border-[#E96A9A]/40 bg-[#E96A9A]/10 shadow-2xl shadow-[#1E4FA6]/35 ring-1 ring-[#E96A9A]/20" : "luxBorder")}>
                                    {featured ? <p className="mb-4 w-fit rounded-full bg-[#F6A08A] px-3 py-1 text-xs font-black text-slate-950">{t.popular}</p> : null}
                                    <h3 className="text-2xl font-black">{item.name}</h3>
                                    <p className="mt-3 text-4xl font-black text-[#F6A08A]">{item.price}</p>
                                    <p className="mt-4 flex-1 leading-7 text-slate-400">{item.desc}</p>
                                    <a href="#contact" className={"mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-center text-sm font-black transition " + (featured ? "bg-gradient-to-r from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-[#1E4FA6]/40 hover:opacity-90" : "border border-[#E96A9A]/25 bg-[#E96A9A]/5 text-white hover:bg-[#E96A9A]/10")}>
                                        {t.getStarted}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" /></svg>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="consulting" className="px-6 py-24 lg:px-20">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#F6A08A]">{t.consultingEyebrow}</p>
                    <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.consultingTitle}</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">{t.consultingSub}</p>
                    <div className="mt-8">
                        <a href={CONSULTANT_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#F28B7A] to-[#F6A08A] px-9 py-4 font-black text-slate-900 shadow-2xl shadow-[#F28B7A]/30 ring-1 ring-[#F6A08A]/50 transition-all hover:scale-105 hover:from-[#F6A08A] hover:to-[#F28B7A] hover:shadow-[#F28B7A]/40">
                            {t.processCta}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06L11.44 7.5H6.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V8.56l-6.22 6.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <FadeIn><SectionTitle eyebrow={t.testimonialsEyebrow} title={t.testimonialsTitle} text={t.testimonialsSub} /></FadeIn>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {testimonials.map(function (item) {
                            return (
                                <div key={item.name} className="luxBorder relative rounded-[2rem] p-8 shadow-xl shadow-[#1E4FA6]/30">
                                    <span className="pointer-events-none absolute right-6 top-2 select-none text-8xl font-black leading-none text-[#7C3AED]/10">"</span>
                                    <StarRating />
                                    <p className="relative z-10 leading-7 text-slate-300">"{item.quote}"</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-sm font-black">{item.initial}</div>
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

            <FAQSection eyebrow={t.faqEyebrow} title={t.faqTitle} />

            <section id="contact" className="px-6 py-24 lg:px-20" style={{ background: "linear-gradient(135deg, #1E4FA6 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
                        <div className="flex flex-col justify-center">
                            <Logo className="mb-6 h-16 w-16" />
                            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#F6A08A]">{t.contactEyebrow}</p>
                            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{t.contactTitle}</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">Fill in the form and we'll open WhatsApp with your message pre-filled, ready to send. Or reach us directly below.</p>
                            <div className="mt-8 flex flex-col gap-3">
                                <a href={WHATSAPP_URL} className="inline-flex items-center gap-3 rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/5 px-6 py-4 font-bold text-white transition hover:bg-[#E96A9A]/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-green-400"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.07 13.6c-.213.598-1.249 1.14-1.712 1.213-.438.069-.993.097-1.6-.1-.369-.12-.843-.28-1.448-.548-2.55-1.1-4.213-3.66-4.34-3.83-.127-.17-1.033-1.374-1.033-2.62 0-1.248.654-1.862.887-2.116.233-.254.508-.318.677-.318.17 0 .339.002.487.008.156.007.365-.059.572.436.212.508.72 1.757.783 1.884.063.127.106.277.021.445-.085.17-.127.277-.254.424-.128.148-.268.33-.384.444-.127.127-.258.264-.11.517.148.254.654 1.079 1.404 1.747.963.856 1.775 1.12 2.028 1.247.255.127.403.106.55-.064.149-.17.635-.742.804-.996.17-.254.338-.212.572-.127.233.084 1.48.698 1.734.825.254.127.424.19.487.296.063.106.063.614-.15 1.212Z" /></svg>
                                    {WHATSAPP_DISPLAY}
                                </a>
                                <a href={EMAIL_URL} className="inline-flex items-center gap-3 rounded-2xl border border-[#E96A9A]/20 bg-[#E96A9A]/5 px-6 py-4 font-bold text-white transition hover:bg-[#E96A9A]/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-[#7C3AED]"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                                    {EMAIL_DISPLAY}
                                </a>
                            </div>
                        </div>
                        <div className="luxBorder rounded-[2rem] p-8 shadow-2xl shadow-[#1E4FA6]/40 backdrop-blur">
                            <p className="mb-6 text-xl font-black">{t.sendMsg}</p>
                            <ContactForm lang={lang} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-hidden border-y border-[#E96A9A]/10 py-4" style={{ background: "#1A1A1F" }}>
                <div className="flex gap-10 whitespace-nowrap" style={{ animation: "ticker 28s linear infinite", width: "max-content" }}>
                    {[...industries, "Web Development", "CRM Dashboards", "AI Integrations", "Digital Marketing", "Client Portals", "Business Apps", ...industries, "Web Development", "CRM Dashboards", "AI Integrations", "Digital Marketing", "Client Portals", "Business Apps"].map(function (t, i) {
                        return <span key={i} className="text-sm font-bold text-[#F6A08A]/40">* {t}</span>;
                    })}
                </div>
            </div>

            <footer className="border-t border-[#E96A9A]/10 px-6 pt-16 pb-8 lg:px-20" style={{ background: "linear-gradient(180deg, #1A1A1F 0%, #0F172A 100%)" }}>
                <div className="mx-auto max-w-7xl">

                    {/* Top: brand + columns */}
                    <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

                        {/* Brand column */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E96A9A] via-[#7C3AED] to-[#2563EB] text-sm font-black shadow-lg shadow-[#1E4FA6]/40">N</div>
                                <div>
                                    <p className="font-black text-white">PT NusaTech</p>
                                    <p className="text-xs text-[#F6A08A]/70">AI Solutions</p>
                                </div>
                            </div>
                            <p className="text-sm leading-7 text-slate-400">Premium websites, CRM dashboards, AI integrations and digital marketing - built in Indonesia for serious global businesses.</p>
                            <div className="mt-6 flex gap-3">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/company/pt-nusatech-ai-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 text-slate-400 transition hover:border-[#E96A9A]/40 hover:text-white">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/nusatech.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 text-slate-400 transition hover:border-pink-400/40 hover:text-pink-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                                </a>
                                {/* WhatsApp */}
                                <a href={WHATSAPP_URL} aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E96A9A]/15 bg-[#E96A9A]/5 text-slate-400 transition hover:border-green-400/40 hover:text-green-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">Services</p>
                            <ul className="space-y-2.5 text-sm text-slate-400">
                                {["Premium Business Websites", "CRM Dashboard Systems", "Apps & Client Portals", "Digital Marketing & SEO", "AI Integrations", "Growth & Automation"].map(function (l) {
                                    return <li key={l}><a href="#services" className="transition hover:text-[#F6A08A]">{l}</a></li>;
                                })}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">Company</p>
                            <ul className="space-y-2.5 text-sm text-slate-400">
                                {[["#work", "Our Portfolio"], ["#process", "Our Process"], ["#packages", "Packages & Pricing"], ["#consulting", "Consulting"], ["#testimonials", "Client Results"], ["#faq", "FAQ"]].map(function (l) {
                                    return <li key={l[0]}><a href={l[0]} className="transition hover:text-[#F6A08A]">{l[1]}</a></li>;
                                })}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">Industries</p>
                            <ul className="space-y-2.5 text-sm text-slate-400">
                                {["Hotels & Resorts", "Travel Agencies", "Vacation Clubs", "Export Companies", "Real Estate", "International Business"].map(function (l) {
                                    return <li key={l}><a href="#services" className="transition hover:text-[#F6A08A]">{l}</a></li>;
                                })}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">Contact</p>
                            <ul className="space-y-2.5 text-sm text-slate-400">
                                <li><a href="#contact" className="transition hover:text-[#F6A08A]">Start a Project</a></li>
                                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-green-400">{WHATSAPP_DISPLAY}</a></li>
                                <li><a href={EMAIL_URL} className="break-all transition hover:text-[#F6A08A]">{EMAIL_DISPLAY}</a></li>
                                <li><a href={CONSULTANT_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#F28B7A]">Consulting Portal - open</a></li>
                                <li><a href="https://esmeraldavacation.club/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#F6A08A]">Esmeralda Vacation Club - open</a></li>
                                <li className="pt-1 text-slate-500">Location: Jakarta, Indonesia</li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/20 to-transparent" />

                    {/* Bottom bar */}
                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
                        <p>Copyright 2026 PT NusaTech AI Solutions. All rights reserved. - Indonesia</p>
                        <div className="flex gap-6">
                            <a href="/privacy.html" className="transition hover:text-slate-300">Privacy Policy</a>
                            <a href="/terms.html" className="transition hover:text-slate-300">Terms of Use</a>
                            <a href="/cookies.html" className="transition hover:text-slate-300">Cookie Policy</a>
                        </div>
                        <p>WhatsApp {WHATSAPP_DISPLAY} - <a href={EMAIL_URL} className="transition hover:text-slate-300">{EMAIL_DISPLAY}</a></p>
                    </div>
                </div>
            </footer>

            <style>{cssRules.join("\n")}</style>
        </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DigitalStudioWebsite />);



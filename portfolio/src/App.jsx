import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/profile.jpg";
import oratoLogo from "./assets/orato.png";
import edupulseLogo from "./assets/edupulse.png";
import mathsgameLogo from "./assets/mathsgame.png";
import orderflowersLogo from "./assets/orderflowers.png";

const ME = {
  name: "H.K. Anjana Indumini",
  title: "Full Stack Developer",
  location: "Sri Lanka",
  email: "anjanaindumini128@gmail.com",
  phone: "+94 71 143 97 92",
  github: "#",
  linkedin: "#",
  bio: "Placement year student passionate about building full-stack web applications that solve real problems. I love clean architecture, great UX, and learning something new every day.",
  extraBio: "Currently seeking a placement year internship where I can apply my React & Node.js skills in a real-world engineering team.",
  yearsExp: "2+",
  projectsCount: "4+",
  status: "Open to Work",
};

const EDUCATION = [
  { year: "2024 – Present", title: "BSc (Hons) Computer Science", place: "University of Westminster", badge: "2nd year" },
  { year: "2022(2023)", title: "G.C.E. Advance Level - Physical Science Stream", place: "Sujatha Vidyalaya Matara", result: "One C Pass & Two S passes" },
  { year: "2019", title: "G.C.E Ordinary Level", place: "Sujatha Vidyalaya Matara", result: "7 A's & 2 B's" },
];

const SKILLS = [
  { name: "React JS", color: "#61DAFB", bg: "#0d2033" },
  { name: "Node.js", color: "#84CC16", bg: "#0f1f0a" },
  { name: "JavaScript", color: "#F7DF1E", bg: "#1f1c06" },
  { name: "MongoDB", color: "#4DB33D", bg: "#0d1f0c" },
  { name: "Express JS", color: "#94a3b8", bg: "#131824" },
  { name: "Tailwind CSS", color: "#38BDF8", bg: "#071928" },
  { name: "HTML5", color: "#E44D26", bg: "#1f0c06" },
  { name: "CSS3", color: "#264DE4", bg: "#080d1f" },
  { name: "Git", color: "#F05033", bg: "#1f0d09" },
  { name: "REST APIs", color: "#a78bfa", bg: "#110d1f" },
];

const PROJECTS = [
  {
    id: 1, name: "Orato", type: "Language Learning Platform", year: "2025",
    desc: "A full-stack web platform that makes language learning interactive and engaging through structured lessons, quizzes, and real-time progress tracking.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "#", live: "#", accent: "#3b82f6", logo: oratoLogo,
  },
  {
    id: 2, name: "Edupulse", type: "Educational Platform — SDG", year: "2025",
    desc: "An educational website aligned with UN Sustainable Development Goals, offering accessible learning resources and structured content to inspire quality education.",
    stack: ["React", "CSS3"],
    github: "#", live: "#", accent: "#06b6d4", logo: edupulseLogo,
  },
  {
    id: 3, name: "MathsGame", type: "Extended Math Quiz Game", year: "2025",
    desc: "An interactive math quiz game with user authentication, quiz history tracking via local storage, multiple difficulty levels, countdown timer, randomly generated questions, dark mode, animated score messages, and dynamic backgrounds.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "#", live: "#", accent: "#a78bfa", logo: mathsgameLogo,
  },
  {
    id: 4, name: "OrderFlowers", type: "Flower Ordering Website", year: "2025",
    desc: "An interactive online flower ordering website with product browsing, price sorting, color filtering, and a dynamic shopping cart. Focused on responsive design, clean UI, and user-friendly navigation.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "#", live: "#", accent: "#f472b6", logo: orderflowersLogo,
  },
];

const SECTIONS = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

function useOnScreen(ref) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return on;
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const on = useOnScreen(ref);
  return (
    <div ref={ref} style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateY(36px)", transition: `opacity .6s ${delay}s, transform .6s ${delay}s` }}>
      {children}
    </div>
  );
}

function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [ok, setOk] = useState(false);
  const set = k => e => setF(p => ({ ...p, [k]: e.target.value }));
  if (ok) return (
    <div style={{ borderRadius: 20, padding: "3rem", display: "grid", placeItems: "center", textAlign: "center", minHeight: 340, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#f1f5f9", marginBottom: ".5rem" }}>Message Sent!</div>
        <p style={{ color: "#64748b", fontSize: ".88rem" }}>Thanks for reaching out — I will get back to you soon.</p>
        <button style={{ marginTop: "1.5rem", background: "transparent", color: "#60a5fa", border: "1.5px solid rgba(96,165,250,.35)", padding: ".65rem 1.5rem", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }} onClick={() => setOk(false)}>Send Another</button>
      </div>
    </div>
  );
  return (
    <div style={{ borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <input className="inp" placeholder="Full Name" value={f.name} onChange={set("name")} />
        <input className="inp" placeholder="Email Address" type="email" value={f.email} onChange={set("email")} />
      </div>
      <input className="inp" placeholder="Subject" value={f.subject} onChange={set("subject")} />
      <textarea className="inp" placeholder="Your Message..." rows={6} value={f.message} onChange={set("message")} style={{ resize: "vertical" }} />
      <button style={{ alignSelf: "flex-end", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", border: "none", padding: ".7rem 1.6rem", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", fontSize: ".9rem" }} onClick={() => { if (f.name && f.email && f.message) setOk(true); }}>
        Send Message →
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [word, setWord] = useState("");
  const words = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];
  const wi = useRef(0); const ci = useRef(0); const del = useRef(false);

  useEffect(() => {
    const go = () => {
      const w = words[wi.current];
      if (!del.current) {
        setWord(w.slice(0, ++ci.current));
        if (ci.current === w.length) { del.current = true; setTimeout(go, 2000); return; }
      } else {
        setWord(w.slice(0, --ci.current));
        if (ci.current === 0) { del.current = false; wi.current = (wi.current + 1) % words.length; }
      }
      setTimeout(go, del.current ? 55 : 95);
    };
    const t = setTimeout(go, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY + 80;
      SECTIONS.forEach(s => { const el = document.getElementById(s); if (el && y >= el.offsetTop) setActive(s); });
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Unbounded:wght@700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #060b14; }
        ::-webkit-scrollbar-thumb { background: #1d4ed8; border-radius: 4px; }
        .inp { width:100%; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:10px; padding:.8rem 1.1rem; color:#e2e8f0; font-family:'Space Grotesk',sans-serif; font-size:.9rem; outline:none; transition:all .25s; }
        .inp:focus { border-color:#3b82f6; background:rgba(59,130,246,.06); box-shadow:0 0 0 3px rgba(59,130,246,.12); }
        .inp::placeholder { color:#475569; }
        .skill-chip { display:inline-flex; align-items:center; padding:.4rem .9rem; border-radius:8px; font-size:.8rem; font-weight:600; border:1px solid; transition:all .25s; cursor:default; font-family:'Space Grotesk',sans-serif; }
        .skill-chip:hover { transform:translateY(-2px) scale(1.05); filter:brightness(1.2); }
        .glass-card { background:rgba(255,255,255,.03); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,.07); border-radius:18px; transition:all .3s; }
        .glass-card:hover { background:rgba(255,255,255,.055); border-color:rgba(99,179,255,.2); }
        .proj-card { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); border-radius:20px; transition:all .3s; overflow:hidden; }
        .proj-card:hover { transform:translateY(-5px); }
        .nav-item { padding:.38rem .95rem; border-radius:8px; font-size:.83rem; font-weight:500; cursor:pointer; border:none; background:transparent; font-family:'Space Grotesk',sans-serif; transition:all .2s; }
        .nav-item:hover { color:#fff !important; background:rgba(99,179,255,.1); }
        .icon-btn { width:36px; height:36px; border-radius:8px; display:grid; place-items:center; border:1px solid rgba(255,255,255,.1); color:#94a3b8; text-decoration:none; transition:all .25s; background:transparent; }
        .icon-btn:hover { border-color:#3b82f6; color:#60a5fa; background:rgba(59,130,246,.08); transform:translateY(-2px); }
        .cursor-blink { display:inline-block; width:2px; height:.9em; background:#60a5fa; margin-left:2px; vertical-align:text-bottom; animation:blink 1s step-end infinite; }
        @keyframes blink { 50%{opacity:0} }
        .pill { display:inline-flex; align-items:center; gap:.3rem; padding:.22rem .75rem; border-radius:999px; font-size:.73rem; font-weight:600; letter-spacing:.3px; }
        .section-eyebrow { font-size:.7rem; letter-spacing:2.5px; text-transform:uppercase; color:#3b82f6; font-weight:700; margin-bottom:.4rem; font-family:'Space Grotesk',sans-serif; }
        .section-h2 { font-family:'Unbounded',sans-serif; font-size:clamp(1.55rem,3.5vw,2.1rem); color:#f1f5f9; line-height:1.15; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        @media(max-width:780px){ .hide-m{display:none!important;} .show-m{display:flex!important;} .grid-2{grid-template-columns:1fr!important;} .hero-r{display:none!important;} }
        .show-m{ display:none; }
        .mob-nav { position:fixed; inset:0; top:60px; background:#060b14; z-index:90; padding:2rem; display:flex; flex-direction:column; gap:.75rem; border-top:1px solid rgba(255,255,255,.07); }

        /* ── Hero name styling ── */
        .hero-greeting {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 400;
          color: #64748b;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: .25rem;
        }
        .hero-firstname {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 0.95;
          background: linear-gradient(135deg, #60a5fa 0%, #06b6d4 60%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          letter-spacing: -1px;
        }
        .hero-lastname {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4.5vw, 3.8rem);
          font-weight: 600;
          font-style: italic;
          color: #94a3b8;
          display: block;
          letter-spacing: 2px;
          line-height: 1.1;
        }

        /* ── Profile image glow ring animation ── */
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .profile-ring-outer {
          position: relative;
          width: 200px;
          height: 200px;
          flex-shrink: 0;
        }
        .profile-ring-spin {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #1d4ed8, #06b6d4, #a78bfa, #1d4ed8);
          animation: rotateBorder 4s linear infinite;
        }
        .profile-ring-mask {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #060b14;
          z-index: 1;
        }
        .profile-ring-img {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          z-index: 2;
          width: calc(100% - 12px);
          height: calc(100% - 12px);
        }
        .profile-status-dot {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #4ade80;
          border: 3px solid #060b14;
          z-index: 3;
          box-shadow: 0 0 8px rgba(74,222,128,.6);
        }
      `}</style>

      <div style={{ background: "#060b14", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'Space Grotesk',sans-serif" }}>

        {/* NAV */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 60, background: "rgba(6,11,20,.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(1rem,4vw,3rem)", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: ".95rem", fontWeight: 900, color: "#fff" }}>
              <span style={{ color: "#3b82f6" }}>A</span>njana<span style={{ color: "#3b82f6" }}>.</span>
            </div>
            <div className="hide-m" style={{ display: "flex", gap: ".15rem" }}>
              {SECTIONS.map(s => (
                <button key={s} className="nav-item" style={{ color: active === s ? "#60a5fa" : "#64748b", background: active === s ? "rgba(59,130,246,.1)" : "transparent" }} onClick={() => scrollTo(s)}>{s}</button>
              ))}
            </div>
            <button className="hide-m" style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", border: "none", padding: ".42rem 1.15rem", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk',sans-serif", fontSize: ".82rem" }} onClick={() => scrollTo("Contact")}>Hire Me</button>
            <button className="show-m" style={{ background: "transparent", border: "none", color: "#e2e8f0", cursor: "pointer", fontSize: "1.4rem", alignItems: "center" }} onClick={() => setMobileOpen(o => !o)}>☰</button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="mob-nav">
            {SECTIONS.map(s => <button key={s} className="nav-item" style={{ color: "#cbd5e1", fontSize: "1rem", textAlign: "left" }} onClick={() => scrollTo(s)}>{s}</button>)}
          </div>
        )}

        {/* HOME */}
        <section id="Home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "5rem clamp(1rem,6vw,5rem) 3rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,78,216,.15) 0%,transparent 65%)", top: -200, right: -200, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,.08) 0%,transparent 65%)", bottom: -100, left: -150, pointerEvents: "none" }} />

          <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "3rem", alignItems: "center" }}>
            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              <Reveal delay={.05}>
                <span className="pill" style={{ background: "rgba(74,222,128,.08)", color: "#4ade80", border: "1px solid rgba(74,222,128,.2)", width: "fit-content" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  {ME.status}
                </span>
              </Reveal>

              {/* ── UPDATED NAME TYPOGRAPHY ── */}
              <Reveal delay={.1}>
                <div>
                  <div className="hero-greeting">Hi, I'm</div>
                  <span className="hero-firstname">Anjana</span>
                  <span className="hero-lastname">Indumini</span>
                </div>
              </Reveal>

              <Reveal delay={.18}>
                <p style={{ color: "#64748b", fontSize: "clamp(.9rem,1.8vw,1.1rem)" }}>
                  I build as a <span style={{ color: "#60a5fa", fontWeight: 600 }}>{word}<span className="cursor-blink" /></span>
                </p>
              </Reveal>
              <Reveal delay={.24}>
                <p style={{ color: "#64748b", lineHeight: 1.8, maxWidth: 500, fontSize: ".94rem" }}>{ME.bio}</p>
              </Reveal>
              <Reveal delay={.3}>
                <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", alignItems: "center" }}>
                  <button style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", border: "none", padding: ".7rem 1.6rem", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk',sans-serif", fontSize: ".9rem", transition: "all .25s" }} onClick={() => scrollTo("Projects")}>View Projects →</button>
                  <button style={{ background: "transparent", color: "#60a5fa", border: "1.5px solid rgba(96,165,250,.35)", padding: ".7rem 1.6rem", borderRadius: 10, fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk',sans-serif", fontSize: ".9rem" }} onClick={() => scrollTo("Contact")}>Contact Me</button>
                  <div style={{ display: "flex", gap: ".5rem" }}>
                    <a href={ME.github} className="icon-btn" target="_blank" rel="noreferrer">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.41 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                    </a>
                    <a href={ME.linkedin} className="icon-btn" target="_blank" rel="noreferrer">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT BENTO */}
            <div className="hero-r" style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              <Reveal delay={.2}>
                <div className="glass-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem", textAlign: "center" }}>
                  {/* ── UPDATED PROFILE IMAGE — bigger with spinning gradient ring ── */}
                  <div className="profile-ring-outer">
                    <div className="profile-ring-spin" />
                    <div className="profile-ring-mask" />
                    <img src={profileImg} alt="Anjana Indumini" className="profile-ring-img" />
                    <span className="profile-status-dot" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "1rem" }}>{ME.name}</div>
                    <div style={{ color: "#3b82f6", fontSize: ".8rem", fontWeight: 600, marginTop: 4 }}>{ME.title}</div>
                    <div style={{ color: "#475569", fontSize: ".73rem", marginTop: 4 }}>📍 {ME.location}</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={.25}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".7rem" }}>
                  {[{ v: ME.yearsExp, l: "Yrs Exp" }, { v: ME.projectsCount, l: "Projects" }, { v: "MERN", l: "Stack" }].map(({ v, l }) => (
                    <div key={l} className="glass-card" style={{ padding: "1.1rem .5rem", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "1.15rem", fontWeight: 900, color: "#60a5fa" }}>{v}</div>
                      <div style={{ color: "#475569", fontSize: ".65rem", marginTop: 3, fontWeight: 500 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={.3}>
                <div className="glass-card" style={{ padding: "1.15rem" }}>
                  <div style={{ color: "#3b5170", fontSize: ".68rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: ".65rem" }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
                    {SKILLS.slice(0, 6).map(s => (
                      <span key={s.name} className="skill-chip" style={{ background: s.bg, color: s.color, borderColor: `${s.color}30` }}>{s.name}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="About" style={{ padding: "5rem clamp(1rem,6vw,5rem)", background: "rgba(255,255,255,.014)", borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="section-eyebrow">01 — Who I Am</div>
              <h2 className="section-h2" style={{ marginBottom: "3rem" }}>About <span style={{ color: "#3b82f6" }}>Me</span></h2>
            </Reveal>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "1.5rem" }}>
              <Reveal delay={.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div className="glass-card" style={{ padding: "1.75rem" }}>
                    <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: ".93rem" }}>{ME.bio}</p>
                    {ME.extraBio && <p style={{ color: "#64748b", lineHeight: 1.9, fontSize: ".88rem", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,.05)" }}>{ME.extraBio}</p>}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
                    {[["📧", "Email", ME.email], ["📞", "Phone", ME.phone], ["📍", "Location", ME.location], ["💼", "Status", ME.status]].map(([icon, label, val]) => (
                      <div key={label} className="glass-card" style={{ padding: ".9rem 1.1rem", display: "flex", alignItems: "flex-start", gap: ".6rem" }}>
                        <span style={{ fontSize: "1rem" }}>{icon}</span>
                        <div>
                          <div style={{ color: "#334155", fontSize: ".68rem", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>{label}</div>
                          <div style={{ color: "#cbd5e1", fontSize: ".8rem", marginTop: 2, wordBreak: "break-all" }}>{val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={.2}>
                <div className="glass-card" style={{ padding: "1.75rem" }}>
                  <div style={{ color: "#334155", fontSize: ".68rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.25rem" }}>What I Bring</div>
                  {[
                    { icon: "⚡", title: "Fast Learner", desc: "I pick up new technologies quickly and apply them in real projects." },
                    { icon: "🏗️", title: "Clean Code", desc: "Maintainable, well-structured code following best practices." },
                    { icon: "🤝", title: "Team Player", desc: "I collaborate well and thrive in agile, fast-paced environments." },
                    { icon: "🎯", title: "Detail Oriented", desc: "I care about UX and the small things that make a difference." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{ display: "flex", gap: ".75rem", marginBottom: "1.1rem", paddingBottom: "1.1rem", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
                      <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>{icon}</span>
                      <div>
                        <div style={{ color: "#f1f5f9", fontWeight: 600, fontSize: ".86rem", marginBottom: 2 }}>{title}</div>
                        <div style={{ color: "#64748b", fontSize: ".8rem", lineHeight: 1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="Education" style={{ padding: "5rem clamp(1rem,6vw,5rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="section-eyebrow">02 — Background</div>
              <h2 className="section-h2" style={{ marginBottom: "3rem" }}>My <span style={{ color: "#3b82f6" }}>Education</span></h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1rem" }}>
              {EDUCATION.map((e, i) => (
                <Reveal key={i} delay={i * .1}>
                  <div className="glass-card" style={{ padding: "1.65rem", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#1d4ed8,#06b6d4)" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".85rem" }}>
                      <span style={{ color: "#3b82f6", fontSize: ".76rem", fontWeight: 700 }}>{e.year}</span>
                      {e.badge && <span className="pill" style={{ background: "rgba(59,130,246,.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,.2)", fontSize: ".67rem" }}>{e.badge}</span>}
                    </div>
                    <div style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: ".9rem", color: "#f1f5f9", lineHeight: 1.3, marginBottom: ".4rem" }}>{e.title}</div>
                    <div style={{ color: "#64748b", fontSize: ".8rem", marginBottom: e.result ? ".3rem" : 0 }}>{e.place}</div>
                    {e.result && <div style={{ color: "#475569", fontSize: ".75rem", fontStyle: "italic" }}>{e.result}</div>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="Skills" style={{ padding: "5rem clamp(1rem,6vw,5rem)", background: "rgba(255,255,255,.014)", borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="section-eyebrow">03 — Tech Stack</div>
              <h2 className="section-h2" style={{ marginBottom: "2rem" }}>My <span style={{ color: "#3b82f6" }}>Skills</span></h2>
            </Reveal>
            <Reveal delay={.1}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".65rem", marginBottom: "2.5rem" }}>
                {SKILLS.map((s, i) => (
                  <span key={s.name} className="skill-chip" style={{ background: s.bg, color: s.color, borderColor: `${s.color}35`, animation: `fadeUp .5s ${i * .06}s both` }}>{s.name}</span>
                ))}
              </div>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>
              {[
                { title: "Frontend", icon: "🖥️", items: ["React JS", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
                { title: "Backend", icon: "⚙️", items: ["Node.js", "Express JS", "REST APIs", "MongoDB"] },
                { title: "Tools", icon: "🔧", items: ["Git & GitHub", "VS Code", "Postman", "Figma (Basic)"] },
              ].map(({ title, icon, items }) => (
                <Reveal key={title} delay={.15}>
                  <div className="glass-card" style={{ padding: "1.65rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: ".55rem", marginBottom: "1.15rem" }}>
                      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                      <span style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: ".85rem", color: "#f1f5f9" }}>{title}</span>
                    </div>
                    {items.map(it => (
                      <div key={it} style={{ display: "flex", alignItems: "center", gap: ".55rem", color: "#94a3b8", fontSize: ".83rem", marginBottom: ".45rem" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", flexShrink: 0 }} />
                        {it}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="Projects" style={{ padding: "5rem clamp(1rem,6vw,5rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="section-eyebrow">04 — Work</div>
              <h2 className="section-h2" style={{ marginBottom: "3rem" }}>Featured <span style={{ color: "#3b82f6" }}>Projects</span></h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(480px,1fr))", gap: "1.25rem" }}>
              {PROJECTS.map((p, i) => (
                <Reveal key={p.id} delay={i * .1}>
                  <div className="proj-card" style={{ borderTop: `3px solid ${p.accent}`, boxShadow: `0 0 40px ${p.accent}12` }}>
                    <div style={{ padding: "1.75rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                        {/* Project logo */}
                        <div style={{ width: 54, height: 54, borderRadius: 14, background: `${p.accent}15`, border: `1px solid ${p.accent}30`, overflow: "hidden", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <img src={p.logo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 13 }} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                          <span style={{ color: "#334155", fontSize: ".72rem", fontWeight: 600 }}>{p.year}</span>
                          <div style={{ display: "flex", gap: ".4rem" }}>
                            {p.github !== "#" && <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" style={{ width: 30, height: 30 }}><svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.41 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg></a>}
                            {p.live !== "#" && <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn" style={{ width: 30, height: 30, color: "#60a5fa", borderColor: "rgba(96,165,250,.25)", fontSize: ".85rem" }}>↗</a>}
                          </div>
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9", marginBottom: 3 }}>{p.name}</div>
                      <div style={{ color: p.accent, fontSize: ".76rem", fontWeight: 600, marginBottom: ".8rem" }}>{p.type}</div>
                      <p style={{ color: "#64748b", fontSize: ".85rem", lineHeight: 1.75, marginBottom: "1.15rem" }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
                        {p.stack.map(t => <span key={t} className="pill" style={{ background: "rgba(255,255,255,.04)", color: "#94a3b8", border: "1px solid rgba(255,255,255,.07)", fontSize: ".69rem" }}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="Contact" style={{ padding: "5rem clamp(1rem,6vw,5rem)", background: "rgba(255,255,255,.014)", borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="section-eyebrow">05 — Get In Touch</div>
              <h2 className="section-h2" style={{ marginBottom: "3rem" }}>Contact <span style={{ color: "#3b82f6" }}>Me</span></h2>
            </Reveal>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1.5rem" }}>
              <Reveal delay={.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                  <div className="glass-card" style={{ padding: "1.65rem" }}>
                    <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: ".95rem", fontWeight: 700, color: "#f1f5f9", marginBottom: ".65rem" }}>Let's work together</div>
                    <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: ".86rem" }}>I'm actively looking for placement year internship opportunities. If you have a role or just want to connect, drop me a message!</p>
                  </div>
                  {[["📧", ME.email, `mailto:${ME.email}`], ["📞", ME.phone, "#"], ["💼", "View GitHub", ME.github], ["🔗", "View LinkedIn", ME.linkedin]].map(([icon, val, href]) => (
                    <a key={val} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                      <div className="glass-card" style={{ padding: ".9rem 1.15rem", display: "flex", alignItems: "center", gap: ".85rem" }}>
                        <span style={{ fontSize: "1rem" }}>{icon}</span>
                        <span style={{ color: "#94a3b8", fontSize: ".84rem" }}>{val}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={.2}><ContactForm /></Reveal>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "1.75rem", borderTop: "1px solid rgba(255,255,255,.05)", color: "#334155", fontSize: ".8rem" }}>
          Designed & Built by <span style={{ color: "#3b82f6", fontWeight: 600 }}>{ME.name}</span> · {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
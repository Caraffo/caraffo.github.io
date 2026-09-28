(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const CV = {
    en: "assets/cv/Franco-Caraffo-CV-EN.pdf",
    es: "assets/cv/Franco-Caraffo-CV-ES.pdf"
  };

  /* ---------------- i18n ---------------- */
  const es = {
    "nav.work": "Proyectos",
    "nav.more": "Más proyectos",
    "nav.about": "Experiencia",
    "nav.contact": "Contacto",

    "hero.kicker": "Abierto a nuevas oportunidades · Buenos Aires, AR · Remoto",
    "hero.role": "Desarrollador Fullstack · Mobile y Backend",
    "hero.lead": "Ingeniero de Sistemas. Desarrollo apps mobile con Flutter y backends con Python, desde la idea hasta producción. Hoy lidero la app mobile en Gilson Housing Partners y llevo adelante mi propio producto, Viajapp.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Contactarme",
    "stats.apps": "apps publicadas en App Store y Google Play",
    "stats.commits": "commits en Gilson en el último año",
    "stats.viajapp": "desarrollando mi propio producto, Viajapp",

    "work.eyebrow": "Proyectos destacados",
    "work.title": "Productos que construí de punta a punta",
    "viajapp.meta": "Fundador y único desarrollador · 2024 — hoy",
    "viajapp.lead": "App de viajes compartidos y envío de paquetes en Argentina. Los conductores publican viajes, los pasajeros reservan asientos o mandan paquetes y todo se paga dentro de la app.",
    "viajapp.desc": "La diseñé y la desarrollé entera: la app en Flutter para iOS y Android, un backend en FastAPI sobre PostgreSQL, la landing y las herramientas de administración.",
    "viajapp.h1": "Pagos con Mercado Pago, con webhooks y reembolsos automáticos",
    "viajapp.h2": "Verificación de identidad (email, teléfono, Nosis y foto de DNI), obligatoria para reservar o publicar",
    "viajapp.h3": "Chat, notificaciones push con FCM y avisos de demanda que les muestran a los conductores qué viajes se están buscando",

    "rc.meta": "Gilson Housing Partners · Desarrollador mobile principal · 2025 — hoy",
    "rc.lead": "Una sola app para los residentes de muchas Housing Authorities públicas de EE.UU. La usan para órdenes de trabajo, inspecciones, la recertificación anual, el chat con el staff y los eventos de la comunidad.",
    "rc.desc": "Soy el desarrollador principal de la app en Flutter (antes iResident). Hice la mayoría de sus módulos grandes y los endpoints de backend que necesitan, en GCCS y en los servicios de Concierge.",
    "rc.h1": "Wizard de recertificación: grupo familiar, ingresos, activos y gastos, más documentos y firma legal. Genera el paquete PDF oficial de cada Housing Authority.",
    "rc.h2": "Seguimiento del inspector en vivo con ETA, que aparece como Live Activity / Dynamic Island en iOS y como notificación en vivo en Android",
    "rc.h3": "Chats en tiempo real sobre Firestore: bot de soporte que deriva a un agente humano, chat con el inspector, chat comunitario y chats con especialistas",
    "rc.h4": "Autenticación híbrida (token de GCCS → JWT de Concierge) y Luma, un asistente de voz con IA para el registro",
    "rc.link": "Página del producto",
    "rc.arch": "Ver arquitectura",
    "rc.archHide": "Ocultar arquitectura",
    "arch.note": "Cómo se conecta la plataforma. Trabajé en cada una de las piezas.",

    "also.eyebrow": "También en Gilson",
    "gccs.meta": "Backend · Django · 2025 — hoy",
    "gccs.desc": "El núcleo multi-tenant en Django detrás de cada Housing Authority, con un schema de PostgreSQL por cliente. Construyo buena parte de la API que usa Resident Concierge: registro y reclamo de jefe de hogar, paquetes PDF de recertificación, recordatorios y reprogramación de inspecciones, Inspection Chat, campañas de SMS/push y exportación de KPIs.",
    "inspect.meta": "Colaborador · Flutter · 2025 — hoy",
    "inspect.desc": "La app que usan los inspectores para las inspecciones NSPIRE / HQS. No fui el desarrollador principal, pero hice su capa de ubicación: seguimiento en segundo plano durante toda la jornada, jornadas sincronizadas con el backend, ETA y distancia, y las Live Activities que les permiten a los residentes ver llegar al inspector.",

    "more.eyebrow": "Más proyectos",
    "more.title": "Proyectos propios y para clientes",
    "bookit.meta": "Cofundador · con 2 amigos · 2026",
    "bookit.desc": "Un marketplace para reservar servicios locales, como barberías, estudios de tatuajes y centros de estética. Permite turnos programados y atención por orden de llegada, con un mapa de comercios cercanos.",
    "claudio.meta": "Proyecto personal · 2026",
    "claudio.desc": "Mi asistente personal con IA. Es una app en Flutter conectada por WebSocket a un servidor en Node/TypeScript que corre Claude, con herramientas para finanzas, notas y actividad. Acepta voz y lee tickets.",
    "easy.meta": "Proyecto para cliente · Privado · 2026",
    "easy.desc": "Un CRM interno para una empresa de climatización y limpieza de ductos. Registra trabajos, técnicos, gastos y reportes de resultados (P&L).",
    "archive.trade": "Extranet de clientes para una empresa de granos",
    "archive.miel": "Sitio web para un productor de miel",

    "about.exp": "Experiencia",
    "about.edu": "Educación",
    "t.4d": "Título intermedio.",
    "t.now": "hoy",
    "t.1t": "Desarrollador Fullstack · Gilson Housing Partners",
    "t.1d": "Resident Concierge (mobile principal), GCCS, iNSPECT y los servicios de Concierge.",
    "t.2t": "Fundador y desarrollador · Viajapp",
    "t.2d": "Producto, diseño, mobile, backend, pagos y operación.",
    "t.3t": "Ingeniero de Sistemas · UNICEN",
    "t.3d": "Universidad Nacional del Centro de la Provincia de Buenos Aires.",
    "t.4t": "Analista Programador Universitario · UNICEN",
    "skills.eyebrow": "Skills",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend",
    "skills.data": "Datos y Cloud",
    "skills.other": "También",
    "skills.mobileNote": "Apps en producción para iOS y Android",
    "skills.backendNote": "APIs, autenticación, pagos y tiempo real",
    "skills.dataNote": "Modelado, migraciones y deploys",
    "skills.otherNote": "Herramientas y forma de trabajo",
    "skills.en": "Inglés C1",
    "skills.es": "Español (nativo)",

    "contact.eyebrow": "Contacto",
    "contact.title": "Trabajemos juntos.",
    "contact.lead": "Estoy abierto a posiciones fullstack y mobile, remotas o híbridas. Suelo responder en el día.",
    "contact.cv": "Descargar CV",
    "footer.top": "Volver arriba ↑",
    "toast.copied": "Email copiado ✓"
  };
  const en = { "toast.copied": "Email copied ✓", "rc.archHide": "Hide architecture" };
  $$("[data-i18n]").forEach((el) => { en[el.dataset.i18n] = el.textContent; });
  const dict = { en, es };

  // English by default; only a language the visitor picked is remembered.
  let lang = "en";
  try { lang = localStorage.getItem("lang-choice") || "en"; } catch (_) {}
  if (!dict[lang]) lang = "en";

  const archToggle = $(".arch-toggle");
  const archLabel = $("span", archToggle);
  const arch = $("#arch");

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const v = dict[lang][el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    archLabel.textContent = dict[lang][arch.hidden ? "rc.arch" : "rc.archHide"];
    $$("[data-cv]").forEach((a) => (a.href = CV[lang]));
    $$(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    $$(".split-words").forEach(splitWords);
  }
  function splitWords(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", words.join(" "));
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(" ");
  }
  applyLang(lang);
  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    applyLang(b.dataset.lang);
    try { localStorage.setItem("lang-choice", lang); } catch (_) {}
  }));

  /* ---------------- Stagger indexes ---------------- */
  $$(".stagger").forEach((list) => [...list.children].forEach((c, i) => c.style.setProperty("--i", i)));

  /* ---------------- Architecture toggle ---------------- */
  archToggle.addEventListener("click", () => {
    arch.hidden = !arch.hidden;
    archToggle.setAttribute("aria-expanded", String(!arch.hidden));
    archLabel.textContent = dict[lang][arch.hidden ? "rc.arch" : "rc.archHide"];
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach((el) => {
    const siblings = $$(":scope > .reveal", el.parentElement);
    const idx = siblings.indexOf(el);
    if (idx > 0 && el.parentElement.classList.contains("more-grid")) el.style.setProperty("--d", `${idx * 0.08}s`);
    io.observe(el);
  });

  /* ---------------- Counters ---------------- */
  if (!reduced) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const to = +el.dataset.count;
        const t0 = performance.now();
        (function step(now) {
          const p = Math.min(1, (now - t0) / 1400);
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        countIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    $$("[data-count]").forEach((el) => { el.textContent = "0"; countIO.observe(el); });
  }

  /* ---------------- Header / progress / active nav ---------------- */
  const header = $(".site-header");
  const progress = $(".scroll-progress");
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    header.classList.toggle("scrolled", y > 30);
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { onScroll(); scrollFx(); ticking = false; }); } }, { passive: true });
  let ticking = false;
  onScroll();

  /* ---------------- Scroll-driven effects ---------------- */
  const heroGrid = $(".hero-grid");
  const phoneSets = $$(".phones");
  const timelines = $$(".timeline");
  function scrollFx() {
    if (reduced) return;
    const y = window.scrollY;
    const vh = innerHeight;
    if (y < vh * 1.2) {
      heroGrid.style.translate = `0 ${y * 0.18}px`;
      heroGrid.style.opacity = String(Math.max(0, 1 - y / (vh * 0.9)));
    }
    phoneSets.forEach((set) => {
      const r = set.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const center = (r.top + r.height / 2 - vh / 2) / vh;
      set.style.setProperty("--py", `${center * 60}px`);
    });
    timelines.forEach((tl) => {
      const tr = tl.getBoundingClientRect();
      tl.style.setProperty("--tp", Math.min(1, Math.max(0, (vh * 0.6 - tr.top) / tr.height)));
      $$("li", tl).forEach((li) => li.classList.toggle("lit", li.getBoundingClientRect().top < vh * 0.6));
    });
  }
  scrollFx();

  /* ---------------- Pointer effects ---------------- */
  if (!reduced && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    $$(".spot").forEach((el) => el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));
    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.2}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`;
      });
      el.addEventListener("pointerleave", () => { el.style.translate = ""; });
    });
    const photo = $(".hero-photo img");
    $(".hero").addEventListener("pointermove", (e) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      photo.style.translate = `${x * -12}px ${y * -12}px`;
    });
  }

  const navLinks = $$(".site-nav a");
  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => sectionIO.observe(s));

  /* ---------------- Mobile menu ---------------- */
  const menuBtn = $(".menu-btn");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  navLinks.forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------------- Hero canvas: calm route network ---------------- */
  const canvas = $(".hero-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, nodes = [], travelers = [];
  const LINK = 140;

  function setupCanvas() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(60, (W * H) / 22000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12
    }));
    travelers = Array.from({ length: Math.max(2, Math.round(n / 12)) }, () => {
      const a = (Math.random() * n) | 0;
      return { a, b: next(a), t: Math.random() };
    });
  }
  function next(i) {
    const ranked = nodes.map((n, j) => [(n.x - nodes[i].x) ** 2 + (n.y - nodes[i].y) ** 2, j]).filter(([, j]) => j !== i).sort((p, q) => p[0] - q[0]);
    return ranked[(Math.random() * 3) | 0][1];
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes) {
      if (!reduced) { n.x += n.vx; n.y += n.vy; }
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > LINK) continue;
        ctx.strokeStyle = `rgba(255,255,255,${(1 - d / LINK) * 0.09})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    ctx.fillStyle = "rgba(255,255,255,.3)";
    for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2); ctx.fill(); }
    for (const t of travelers) {
      if (!reduced) t.t += 0.004;
      if (t.t >= 1) { t.a = t.b; t.b = next(t.a); t.t = 0; }
      const A = nodes[t.a], B = nodes[t.b];
      const x = A.x + (B.x - A.x) * t.t, y = A.y + (B.y - A.y) * t.t;
      ctx.strokeStyle = "rgba(91,157,255,.4)";
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = "#5b9dff";
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
    }
    if (heroVisible && !reduced) requestAnimationFrame(draw);
  }
  let heroVisible = true;
  setupCanvas();
  draw();
  if (!reduced) {
    new IntersectionObserver(([e]) => {
      const was = heroVisible;
      heroVisible = e.isIntersecting;
      if (heroVisible && !was) requestAnimationFrame(draw);
    }).observe($(".hero"));
  }
  let resizeT;
  addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(() => { setupCanvas(); if (reduced) draw(); }, 200); });

  /* ---------------- Email copy ---------------- */
  const toast = $(".toast");
  $(".email-btn").addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(email); } catch (_) { location.href = `mailto:${email}`; return; }
    toast.textContent = dict[lang]["toast.copied"];
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  });

  $(".year").textContent = new Date().getFullYear();
})();

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.projects": "Proyectos",
      "nav.experience": "Experiencia",
      "nav.capabilities": "Capacidades",
      "nav.education": "Educación",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Ingeniero en Sistemas · 24 años",
      "hero.title": "Software Developer con foco en producto, arquitectura y ejecución end-to-end.",
      "hero.subtitle": "Graduado el 12 de agosto de 2025. Lidero desarrollo mobile, backend y cloud en productos reales con usuarios activos.",
      "hero.projects": "Ver proyectos",
      "hero.contact": "Contactarme",
      "cv.spanish": "CV en Español",
      "cv.english": "CV en Inglés",
      "projects.title": "Proyectos destacados",
      "projects.lead": "Productos y plataformas en los que lideré arquitectura e implementación.",
      "projects.viajapp.date": "Ago 2024 - Actualidad",
      "projects.viajapp.role": "Founder y único developer. Producto de movilidad compartida con operación real.",
      "projects.viajapp.desc": "Implementé app Flutter + backend FastAPI por capas, pagos con Mercado Pago, notificaciones FCM, auth JWT y migración de datos hacia PostgreSQL.",
      "projects.linkPlay": "Ver en Google Play",
      "projects.easy.date": "2025",
      "projects.easy.role": "Sistema de gestión de trabajos y técnicos para empresa de air duct cleaning.",
      "projects.easy.desc": "Desarrollé una plataforma operativa con roles admin/técnico, reporting, exportación CSV, reglas de seguridad y despliegue continuo en Firebase.",
      "projects.iresident.date": "Ago 2025 - Actualidad",
      "projects.iresident.role": "Fullstack Developer en Gilson Housing Partners.",
      "projects.iresident.desc": "Lidero desarrollo mobile multi-tenant con Flutter, módulos críticos de inspecciones y recertificación, notificaciones push/live y observabilidad en producción.",
      "experience.title": "Experiencia",
      "experience.item1.title": "Fullstack Developer · iResident",
      "experience.item1.meta": "Gilson Housing Partners · Ago 2025 - Actualidad",
      "experience.item1.desc": "Responsable técnico principal de la app, arquitectura por features, integraciones multi-cliente y entrega continua de funcionalidades de negocio.",
      "experience.item2.title": "Founder & Developer · Viajapp",
      "experience.item2.meta": "Producto propio · Ago 2024 - Actualidad",
      "experience.item2.desc": "Concepción, desarrollo y evolución integral del producto: desde la arquitectura hasta la operación, analítica y crecimiento de funcionalidades.",
      "experience.item3.title": "Full-Stack Developer · Easy Breathing",
      "experience.item3.meta": "Sistema interno de gestión · 2025",
      "experience.item3.desc": "Diseño e implementación de plataforma administrativa orientada a eficiencia operativa, trazabilidad y control de equipos técnicos.",
      "capabilities.title": "Capacidades técnicas",
      "capabilities.mobile.title": "Mobile Product Engineering",
      "capabilities.mobile.desc": "Flutter avanzado, arquitectura modular, estado con Riverpod/Provider e integraciones nativas cuando el producto lo necesita.",
      "capabilities.backend.title": "Backend & APIs",
      "capabilities.backend.desc": "Diseño de APIs, lógica de negocio por capas, auth segura, webhooks y procesos internos para operación y mantenimiento.",
      "capabilities.cloud.title": "Cloud & Data",
      "capabilities.cloud.desc": "Firebase y entornos cloud productivos, modelado de datos, migraciones y automatización de despliegues.",
      "capabilities.product.title": "Product Ownership",
      "capabilities.product.desc": "Priorización técnica con foco de negocio, ejecución end-to-end y toma de decisiones para escalar productos reales.",
      "education.title": "Educación",
      "education.degree1": "Ingeniero en Sistemas",
      "education.university": "Universidad Nacional del Centro (UNICEN)",
      "education.date1": "Graduado el 12 de agosto de 2025",
      "education.degree2": "Analista Programador Universitario",
      "education.date2": "Finalizado en diciembre de 2024",
      "contact.title": "Contacto",
      "contact.locationValue": "Buenos Aires, Argentina",
      "footer.copyright": "© 2026 Franco Caraffo. Todos los derechos reservados."
    },
    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.capabilities": "Capabilities",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.eyebrow": "Systems Engineer · 24 years old",
      "hero.title": "Software Developer with a focus on product, architecture, and end-to-end execution.",
      "hero.subtitle": "Graduated on August 12, 2025. I lead mobile, backend, and cloud delivery in real products with active users.",
      "hero.projects": "View projects",
      "hero.contact": "Contact me",
      "cv.spanish": "CV in Spanish",
      "cv.english": "CV in English",
      "projects.title": "Featured projects",
      "projects.lead": "Products and platforms where I led architecture and implementation.",
      "projects.viajapp.date": "Aug 2024 - Present",
      "projects.viajapp.role": "Founder and sole developer. Shared mobility product in real operation.",
      "projects.viajapp.desc": "I built a Flutter app + layered FastAPI backend, Mercado Pago payments, FCM notifications, JWT auth, and data migration to PostgreSQL.",
      "projects.linkPlay": "View on Google Play",
      "projects.easy.date": "2025",
      "projects.easy.role": "Job and technician management system for an air duct cleaning company.",
      "projects.easy.desc": "I built an operational platform with admin/technician roles, reporting, CSV exports, security rules, and continuous delivery on Firebase.",
      "projects.iresident.date": "Aug 2025 - Present",
      "projects.iresident.role": "Lead developer at Gilson Housing Partners.",
      "projects.iresident.desc": "I lead multi-tenant Flutter mobile delivery with critical inspection and recertification modules, push/live notifications, and production observability.",
      "experience.title": "Experience",
      "experience.item1.title": "Lead Developer · iResident",
      "experience.item1.meta": "Gilson Housing Partners · Aug 2025 - Present",
      "experience.item1.desc": "Main technical owner of the app, feature-based architecture, multi-client integrations, and continuous business delivery.",
      "experience.item2.title": "Founder & Developer · Viajapp",
      "experience.item2.meta": "Own product · Aug 2024 - Present",
      "experience.item2.desc": "Product conception, development, and evolution across architecture, operations, analytics, and feature growth.",
      "experience.item3.title": "Full-Stack Developer · Easy Breathing",
      "experience.item3.meta": "Internal management platform · 2025",
      "experience.item3.desc": "Design and implementation of an administrative platform focused on operational efficiency, traceability, and technician control.",
      "capabilities.title": "Technical capabilities",
      "capabilities.mobile.title": "Mobile Product Engineering",
      "capabilities.mobile.desc": "Advanced Flutter, modular architecture, Riverpod/Provider state management, and native integrations when required.",
      "capabilities.backend.title": "Backend & APIs",
      "capabilities.backend.desc": "API design, layered business logic, secure auth, webhooks, and internal operational processes.",
      "capabilities.cloud.title": "Cloud & Data",
      "capabilities.cloud.desc": "Production Firebase and cloud environments, data modeling, migrations, and deployment automation.",
      "capabilities.product.title": "Product Ownership",
      "capabilities.product.desc": "Business-driven technical prioritization, end-to-end execution, and product scaling decisions.",
      "education.title": "Education",
      "education.degree1": "Systems Engineer",
      "education.university": "National University of the Center (UNICEN)",
      "education.date1": "Graduated on August 12, 2025",
      "education.degree2": "University Programmer Analyst",
      "education.date2": "Completed in December 2024",
      "contact.title": "Contact",
      "contact.locationValue": "Buenos Aires, Argentina",
      "footer.copyright": "© 2026 Franco Caraffo. All rights reserved."
    }
  };

  const esBtn = document.getElementById("es-btn");
  const enBtn = document.getElementById("en-btn");
  const siteNav = document.querySelector(".site-nav");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".site-header");

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    esBtn.classList.toggle("active", lang === "es");
    enBtn.classList.toggle("active", lang === "en");
    localStorage.setItem("language", lang);
  };

  esBtn.addEventListener("click", () => setLanguage("es"));
  enBtn.addEventListener("click", () => setLanguage("en"));
  setLanguage(localStorage.getItem("language") || "en");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    siteNav.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      const offset = header.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  });
});
  
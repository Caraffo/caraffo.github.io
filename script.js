document.addEventListener("DOMContentLoaded", () => {
    // Translations
    const translations = {
      es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.education": "Educación",
        "nav.experience": "Experiencia",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",
        "hero.title": "Ingeniero en Sistemas",
        "hero.subtitle": "Desarrollador de Software",
        "hero.contact": "Contactarme",
        "hero.download": "Descargar CV",
        "cv.spanish": "CV (ES)",
        "cv.english": "CV (EN)",
        "about.title": "Sobre mí",
        "about.p1":
          "Estudiante de quinto año de Ingeniería de Sistemas en la Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN). Tengo una sólida formación en programación y desarrollo de software.",
        "about.p2":
          "Estoy interesado en iniciar mi carrera profesional en oportunidades que me permitan trabajar de forma remota, híbrida o presencial en Buenos Aires.",
        "education.title": "Educación",
        "education.degree1": "Ingeniería en Sistemas",
        "education.degree2": "Analista Programador Universitario",
        "education.university": "Universidad Nacional del Centro (UNICEN)",
        "education.date1": "Marzo 2020 - Actualidad",
        "education.date2": "Marzo 2020 - Diciembre 2024",
        "experience.title": "Experiencia",
        "experience.date1": "Agosto 2024 - Actualidad",
        "experience.date2": "Marzo 2025 - Abril 2025",
        "experience.desc1.p1":
          "Desarrollo independiente de una aplicación móvil diseñada para conectar usuarios que comparten viajes. La plataforma permite publicar y buscar viajes, facilitando el encuentro entre personas con rutas y horarios compatibles.",
        "experience.desc1.p2": "Tecnologías: Flutter, Dart, Firebase, APIs de geolocalización y mapas.",
        "experience.desc2.p1":
          "Diseño y desarrollo de una página web para un emprendimiento familiar dedicado a la producción y venta de miel 100% natural. La web incluye presentación de productos, puntos de venta y formulario de contacto.",
        "experience.desc2.p2":
          "Enfoque en experiencia visual atractiva y profesional, con diseño responsive, buena accesibilidad y tiempos de carga optimizados.",
        "experience.desc2.p3": "Tecnologías: HTML, CSS y JavaScript.",
        "experience.view": "Ver en Google Play",
        "experience.viewSite": "Ver sitio web",
        "skills.title": "Habilidades",
        "skills.technical": "Técnicas",
        "skills.soft": "Blandas",
        "skills.soft1": "Disciplina",
        "skills.soft2": "Trabajo en equipo",
        "skills.soft3": "Resolución de problemas",
        "skills.soft4": "Comunicación efectiva",
        "skills.soft5": "Adaptabilidad",
        "skills.soft6": "Familiaridad con métodos ágiles",
        "skills.soft7": "Flexibilidad",
        "skills.languages": "Idiomas",
        "skills.lang1": "Español (Nativo)",
        "skills.lang2": "Inglés (C1)",
        "contact.title": "Contacto",
        "contact.phone": "Teléfono",
        "contact.location": "Ubicación",
        "contact.name": "Nombre",
        "contact.subject": "Asunto",
        "contact.message": "Mensaje",
        "contact.send": "Enviar Mensaje",
        "footer.copyright": "© 2025 Franco Caraffo. Todos los derechos reservados.",
      },
      en: {
        "nav.home": "Home",
        "nav.about": "About me",
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "hero.title": "Systems Engineer",
        "hero.subtitle": "Software Developer",
        "hero.contact": "Contact me",
        "hero.download": "Download CV",
        "cv.spanish": "CV (ES)",
        "cv.english": "CV (EN)",
        "about.title": "About me",
        "about.p1":
          "Fifth-year Systems Engineering student at the National University of the Center of Buenos Aires Province (UNICEN). I have a solid background in programming and software development.",
        "about.p2":
          "I am interested in starting my professional career in opportunities that allow me to work remotely, hybrid or in-person in Buenos Aires.",
        "education.title": "Education",
        "education.degree1": "Systems Engineering",
        "education.degree2": "University Programmer Analyst",
        "education.university": "National University of the Center (UNICEN)",
        "education.date1": "March 2020 - Present",
        "education.date2": "March 2020 - December 2024",
        "experience.title": "Experience",
        "experience.date1": "August 2024 - Present",
        "experience.date2": "March 2025 - April 2025",
        "experience.desc1.p1":
          "Independent development of a mobile application designed to connect users who share trips. The platform allows publishing and searching for trips, facilitating the meeting between people with compatible routes and schedules.",
        "experience.desc1.p2": "Technologies: Flutter, Dart, Firebase, geolocation and maps APIs.",
        "experience.desc2.p1":
          "Design and development of a website for a family business dedicated to the production and sale of 100% natural honey. The website includes product presentation, points of sale, and contact form.",
        "experience.desc2.p2":
          "Focus on attractive and professional visual experience, with responsive design, good accessibility, and optimized loading times.",
        "experience.desc2.p3": "Technologies: HTML, CSS, and JavaScript.",
        "experience.view": "View on Google Play",
        "experience.viewSite": "Visit website",
        "skills.title": "Skills",
        "skills.technical": "Technical",
        "skills.soft": "Soft",
        "skills.soft1": "Discipline",
        "skills.soft2": "Teamwork",
        "skills.soft3": "Problem solving",
        "skills.soft4": "Effective communication",
        "skills.soft5": "Adaptability",
        "skills.soft6": "Familiarity with agile methods",
        "skills.soft7": "Flexibility",
        "skills.languages": "Languages",
        "skills.lang1": "Spanish (Native)",
        "skills.lang2": "English (C1)",
        "contact.title": "Contact",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.name": "Name",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.send": "Send Message",
        "footer.copyright": "© 2025 Franco Caraffo. All rights reserved.",
      },
    }
  
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.padding = "0.7rem 0"
        header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "1rem 0"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  
    // Form submission
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message in current language
        const currentLang = document.documentElement.lang
        const successMessage =
          currentLang === "es"
            ? "¡Gracias por tu mensaje! Te contactaré pronto."
            : "Thank you for your message! I will contact you soon."
  
        alert(successMessage)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Language toggle
    const esBtn = document.getElementById("es-btn")
    const enBtn = document.getElementById("en-btn")
  
    // Function to change language
    function changeLanguage(lang) {
      document.documentElement.lang = lang
  
      // Update all elements with data-i18n attribute
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n")
        if (translations[lang][key]) {
          element.textContent = translations[lang][key]
        }
      })
  
      // Update active button
      if (lang === "es") {
        esBtn.classList.add("active")
        enBtn.classList.remove("active")
      } else {
        enBtn.classList.add("active")
        esBtn.classList.remove("active")
      }
  
      // Save language preference
      localStorage.setItem("language", lang)
    }
  
    if (esBtn && enBtn) {
      esBtn.addEventListener("click", () => {
        changeLanguage("es")
      })
  
      enBtn.addEventListener("click", () => {
        changeLanguage("en")
      })
  
      // Check for saved language preference
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage) {
        changeLanguage(savedLanguage)
      }
    }
  
    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle")
    const themeIcon = themeToggle.querySelector("i")
  
    // Function to toggle theme
    function toggleTheme() {
      // We're already in dark mode by default, so we'll toggle to light mode
      document.body.classList.toggle("light-mode")
  
      if (document.body.classList.contains("light-mode")) {
        themeIcon.classList.remove("fa-sun")
        themeIcon.classList.add("fa-moon")
        localStorage.setItem("theme", "light")
      } else {
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-sun")
        localStorage.setItem("theme", "dark")
      }
    }
  
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme)
  
      // Check for saved theme preference
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme === "light") {
        toggleTheme()
      }
    }
  
    // CV download functionality
    const cvLinks = document.querySelectorAll(".cv-dropdown-content a")
    cvLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // This will trigger the download attribute
        // No need to prevent default as we want the browser to handle the download
        console.log("Downloading CV:", this.getAttribute("href"))
      })
    })
  
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".experience-item, .timeline-item")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll(".experience-item, .timeline-item")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run animation on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)
  })
  
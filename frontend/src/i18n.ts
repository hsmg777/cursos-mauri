import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        courses: "Cursos",
        contact: "Contacto",
        viewCourses: "Ver Cursos",
        language: "Idioma",
      },
      homeHero: {
        title: "Aprende a capturar la belleza de lo que ves y convertirlo en arte",
        subtitle:
          "Domina acuarela con cursos pregrabados y talleres en vivo, guiados paso a paso para principiantes y artistas avanzados.",
        explore: "Explorar Cursos",
        contact: "Contactame",
        videoLabel: "Video principal del hero",
      },
      fourSteps: {
        badge: "Metodo 4 Steps",
        title: "Aprende con una ruta clara y practica",
        subtitle:
          "Un sistema simple para avanzar con seguridad desde la primera leccion hasta resultados visibles en tus pinturas.",
        step1: "Aprende los 4 pasos esenciales",
        step2: "Lecciones sencillas, paso a paso",
        step3: "Acceso de por vida",
        step4: "Contacto con Mauri para dudas e inquietudes",
        step5: "Garantia de 30 dias para devolucion del dinero",
      },
      footer: {
        description:
          "Domina la acuarela con acompanamiento profesional y cursos estructurados.",
        quickLinks: "Enlaces Rapidos",
        followMe: "Sigeme",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        courses: "Courses",
        contact: "Contact",
        viewCourses: "View Courses",
        language: "Language",
      },
      homeHero: {
        title: "Learn to capture the beauty of what you see and turn it into art",
        subtitle:
          "Master watercolor with pre-recorded courses and live workshops, guided step by step for beginners and advanced artists.",
        explore: "Explore Courses",
        contact: "Contact Me",
        videoLabel: "Hero background video",
      },
      fourSteps: {
        badge: "4 Steps Method",
        title: "Learn with a clear and practical path",
        subtitle:
          "A simple system to move forward with confidence from your first lesson to visible results in your paintings.",
        step1: "Learn the 4 essential steps",
        step2: "Simple lessons, step by step",
        step3: "Lifetime access",
        step4: "Contact with Mauri for questions and guidance",
        step5: "30-day money-back guarantee",
      },
      footer: {
        description:
          "Master watercolor through professional guidance and structured courses.",
        quickLinks: "Quick Links",
        followMe: "Follow Me",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
    },
  },
} as const;

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "es";
  }
  const saved = window.localStorage.getItem("app_lang");
  if (saved === "en" || saved === "es") {
    return saved;
  }
  const browserLang = window.navigator.language.toLowerCase();
  return browserLang.startsWith("en") ? "en" : "es";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window === "undefined") {
    return;
  }
  const normalized = lng.startsWith("en") ? "en" : "es";
  window.localStorage.setItem("app_lang", normalized);
  document.documentElement.lang = normalized;
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language.startsWith("en") ? "en" : "es";
}

export default i18n;

import {
  RocketLaunchIcon,
  CpuChipIcon,
  SparklesIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export const resume = {
  name: "Stray Digital Laboratory",
  shortName: "STRAY",
  tagline: "Ingeniería Creativa para los Audaces.",
  description:
    "Stray es un laboratorio digital donde el diseño se encuentra con el rendimiento. Construimos aplicaciones web de alta gama que definen el futuro.",

  hero: {
    badge: "SISTEMAS EN LÍNEA - V2.0",
    title: "Ingeniería Creativa para los Audaces.",
    description:
      "Diseñamos y construimos experiencias digitales de alta gama con un enfoque implacable en el rendimiento y la estética minimalista.",
    primaryCta: "Agendar Llamada",
    secondaryCta: "Nuestros Servicios",
  },

  navigation: [
    { name: "Servicios", href: "#services" },
    { name: "Metodología", href: "#methodology" },
    { name: "Proyectos", href: "#projects" },
    { name: "Empresa", href: "#company" },
  ],

  contact: {
    cta: "Agendar Llamada",
    href: "#contact",
  },

  features: [
    {
      name: "Diseño UI/UX Premium",
      description:
        "Creamos interfaces que cautivan y convierten. Fusionamos estética moderna con una usabilidad impecable para definir tu marca.",
      icon: SparklesIcon,
    },
    {
      name: "Arquitecturas Escalables",
      description:
        "Construimos sistemas robustos que crecen con tu negocio, utilizando tecnología de vanguardia e ingeniería creativa.",
      icon: RocketLaunchIcon,
    },
    {
      name: "IA e Inteligencia",
      description:
        "Implementamos modelos LLM personalizados y automatización inteligente para optimizar tus operaciones y superar límites técnicos.",
      icon: CpuChipIcon,
    },
    {
      name: "Estrategia de Producto Digital",
      description:
        "Definimos la hoja de ruta para tu éxito. No solo construimos; planteamos estrategias para el futuro digital más audaz.",
      icon: FingerPrintIcon,
    },
  ],

  logos: {
    title: "Con la confianza de líderes de la industria",
    items: [
      {
        name: "Transistor",
        src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
      },
      {
        name: "Reform",
        src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
      },
      {
        name: "Tuple",
        src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
      },
      {
        name: "SavvyCal",
        src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
      },
      {
        name: "Statamic",
        src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
      },
    ],
    cta: {
      text: "Descubre cómo transformamos la tecnología de nuestros socios globales.",
      linkText: "Leer casos de estudio",
      href: "#",
    },
  },

  testimonial: {
    content:
      "“Stray redefinió nuestras expectativas sobre lo que una aplicación web puede lograr. Su enfoque en diseño y rendimiento no tiene comparación en la industria. Altamente recomendados.”",
    author: "Mario Rossi",
    role: "CTO de InnovaTech",
    bgImage:
      "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
  },

  pricing: {
    title: "Inversión",
    subtitle: "Planes que crecen contigo",
    description:
      "Selecciona un plan diseñado con ingeniería de clase mundial para generar lealtad en tus clientes e impulsar tus ingresos.",
    tiers: [
      {
        name: "MVP Boost",
        id: "tier-mvp",
        href: "#",
        priceMonthly: "S/ 8,500",
        description:
          "Ideal para startups que necesitan validar y lanzar su visión rápidamente.",
        features: [
          "Diseño UI/UX Completo",
          "Desarrollo con Next.js",
          "Panel de administración básico",
          "Ciclo de lanzamiento en 4 semanas",
        ],
        mostPopular: false,
      },
      {
        name: "Growth Scale",
        id: "tier-growth",
        href: "#",
        priceMonthly: "S/ 18,500",
        description:
          "Para empresas establecidas listas para dominar su mercado con tecnología de élite.",
        features: [
          "Arquitectura de microservicios",
          "SEO Avanzado y Rendimiento",
          "Soporte prioritario 24/7",
          "Integraciones con terceros",
          "Optimización de conversión",
        ],
        mostPopular: true,
      },
      {
        name: "Enterprise Elite",
        id: "tier-enterprise",
        href: "#",
        priceMonthly: "A medida",
        description:
          "Infraestructura y desarrollo a medida para organizaciones líderes en su industria.",
        features: [
          "Desarrollo de IA personalizada",
          "Seguridad de nivel bancario",
          "Equipo de ingeniería dedicado",
          "SLA de disponibilidad del 99.9%",
          "Auditorías técnicas mensuales",
        ],
        mostPopular: false,
      },
    ],
  },

  faqs: {
    title: "Preguntas frecuentes",
    items: [
      {
        id: 1,
        question: "¿Cuánto tiempo toma un proyecto típico?",
        answer:
          "Los tiempos varían según la complejidad. Un MVP suele tomar entre 4-6 semanas, mientras que soluciones empresariales completas pueden requerir de 3 a 6 meses.",
      },
      {
        id: 2,
        question: "¿En qué tecnologías se especializan?",
        answer:
          "Somos especialistas en el ecosistema React/Next.js, Node.js y modelos avanzados de Inteligencia Artificial como GPT-4 y Claude.",
      },
      {
        id: 3,
        question: "¿Ofrecen soporte post-lanzamiento?",
        answer:
          "Por supuesto. Todos nuestros proyectos incluyen un periodo de garantía y ofrecemos planes de evolución continua para escalar tu producto conforme creces.",
      },
    ],
  },

  cta: {
    title: "¿Listo para definir el futuro?",
    subtitle: "Empieza a trabajar con nosotros hoy.",
    description:
      "Transforma tu visión ambiciosa en una realidad digital de clase mundial. Nuestro equipo de ingeniería está listo para construir el próximo éxito de la industria.",
    primaryCta: "Contactar a un Ingeniero",
    secondaryCta: "Nuestro enfoque",
  },

  footer: {
    description:
      "Laboratorio digital independiente especializado en Ingeniería de Alta Gama.",
    copyright: "© 2026 STRAY DIGITAL LABORATORY.",
    status: "SISTEMAS EN LÍNEA",
    categories: [
      {
        title: "Soluciones",
        links: [
          { name: "Desarrollo Web", href: "#" },
          { name: "Apps Móviles", href: "#" },
          { name: "E-commerce", href: "#" },
          { name: "Consultoría IA", href: "#" },
        ],
      },
      {
        title: "Soporte",
        links: [
          { name: "Documentación", href: "#" },
          { name: "Contacto", href: "#" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { name: "Sobre Stray", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Carreras", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Términos", href: "#" },
          { name: "Privacidad", href: "#" },
        ],
      },
    ],
  },
};

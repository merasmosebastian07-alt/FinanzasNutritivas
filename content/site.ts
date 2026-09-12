export const site = {
  name: "Finanzas Nutritivas",
  founder: "Audy Paulino",
  tagline: "Cada centavo cuenta.",
  description:
    "Educación financiera con Audy Paulino: ahorro, presupuesto, organización y hábitos para transformar tu vida financiera, un peso a la vez.",
  locale: "es",
  email: "paulinoudy@hotmail.com",
  phone: {
    display: "1-809-931-1031",
    href: "tel:+18099311031",
  },
  whatsapp: {
    href: "https://wa.me/18099311031",
    label: "Escribir por WhatsApp",
  },
  logo: {
    src: "/brand/logo.jpeg",
    alt: "Finanzas Nutritivas",
    width: 1536,
    height: 1024,
  },
  headerCta: {
    href: "https://wa.me/18099311031",
    label: "Agenda tu asesoría",
  },
  navigation: [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Sobre nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#recursos", label: "Recursos" },
    { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ],
  socials: [
    {
      href: "https://www.instagram.com/finanzasnutritivas",
      label: "Instagram @finanzasnutritivas",
    },
    {
      href: "https://www.facebook.com/finanzasnutritivas",
      label: "Facebook @finanzasnutritivas",
    },
    {
      href: "https://www.tiktok.com/@finanzasnutritivas",
      label: "TikTok @finanzasnutritivas",
    },
  ],
  legal: [] as Array<{ href: string; label: string }>,
} as const;

export const images = {
  heroPrimary: {
    src: "/photos/audy-hero.jpg",
    alt: "Audy Paulino, educadora financiera de Finanzas Nutritivas.",
    objectPosition: "center 20%",
  },
  heroSecondary: {
    src: "/photos/audy-cta.jpg",
    alt: "Audy Paulino, fundadora de Finanzas Nutritivas.",
    objectPosition: "center",
  },
  about: {
    src: "/photos/audy-about.jpg",
    alt: "Audy Paulino, acompañando la educación financiera desde la empatía.",
    objectPosition: "center 15%",
  },
  identify: {
    src: "/photos/audy-cta.jpg",
    alt: "Audy Paulino, de Finanzas Nutritivas.",
    objectPosition: "center",
  },
} as const;

export const homeCopy = {
  hero: {
    eyebrow: "Finanzas Nutritivas · Audy Paulino",
    title: "Cada centavo cuenta.",
    text: "Organiza tu dinero sin complicaciones. Alimentamos hábitos que transforman vidas, un peso a la vez.",
    primaryCta: {
      href: "https://wa.me/18099311031",
      label: "Quiero mejorar mis finanzas",
    },
    secondaryCta: {
      href: "#servicios",
      label: "Conoce cómo puedo ayudarte",
    },
    caption: "Educación · Ahorro · Hábitos",
  },
  value: {
    eyebrow: "Mis Pilares",
    title: "Así como el cuerpo necesita buenos alimentos, las finanzas necesitan buenas decisiones.",
    text: "El verdadero cambio empieza en la mente y continúa en tu cuenta. Automáticamente aprendes a darle orden a cada monto que recibes, sin olvidarte de que la educación financiera no es un lujo, es una necesidad.",
    items: [
      {
        title: "Claridad",
        text: "Entender tu dinero con palabras sencillas.",
      },
      {
        title: "Orden",
        text: "Organizar tus finanzas según lo que realmente vives.",
      },
      {
        title: "Transformación",
        text: "Crear hábitos financieros sanos que se mantengan a largo plazo.",
      },
    ],
  },
  about: {
    id: "sobre-nosotros",
    eyebrow: "Sobre Audy Paulino",
    title: "Acompañamiento desde la empatía, sin juzgar.",
    paragraphs: [
      "Soy Audy Paulino, Licenciada en Comunicación Social, facilitadora de educación financiera y apasionada por enseñar a las personas a transformar su relación con el dinero.",
      "Creo en el poder de la educación como herramienta para crear libertad, bienestar y oportunidades.",
      "La educación financiera no se trata solo de números, se trata de decisiones, hábitos y mentalidad.",
      "Mi compromiso es enseñar de forma sencilla, práctica y cercana, para que cada persona pueda tomar el control de su vida financiera y construir la vida que desea.",
      "Mi misión es empoderar a niños, jóvenes y adultos con herramientas financieras fáciles, que les permitan tomar mejores decisiones con su dinero, alcanzar metas, vivir con tranquilidad y propósito sin complicarse la vida.",
    ],
    origin: {
      title: "¿Cómo nace Finanzas Nutritivas?",
      text: "Nació desde la necesidad de nutrir y crear hábitos financieros saludables, representando transformación, cambios y propósito, para ayudar a otras personas a administrar bien sus ingresos.",
    },
    pullQuote:
      "Quiero ayudar a las personas a transformar su vida financiera y personal sin complicaciones, partiendo de su realidad.",
    formation: {
      title: "Formación",
      items: [
        {
          title: "Programa de educación financiera",
          detail: "Certificado de estudios",
          institution: "Capacítate para el empleo / Fundación Carlos Slim",
        },
        {
          title: "Finanzas personales",
          detail: "Certificado de estudios",
          institution: "Capacítate para el empleo / Fundación Carlos Slim",
        },
      ],
    },
  },
  services: {
    eyebrow: "Cómo puedo ayudarte",
    title: "Herramientas prácticas y un plan adaptado a ti.",
    groups: [
      {
        title: "Productos de Ahorro y orden",
        items: [
          {
            title: "Organigasto",
            text: "Organizador para distribuir dinero en efectivo por categoría y gastar según tus posibilidades.",
          },
          {
            title: "Carpeta ahorradora",
            text: "Diseñada para ahorrar dinero a tu tiempo.",
          },
          {
            title: "Kit de ahorro",
            text: "Un paquete de herramientas básicas para iniciar a ahorrar sin estrés y constantemente.",
          },
          {
            title: "Reto de ahorro",
            text: "Un desafío para motivarte a ahorrar dinero sin morir en el intento, a tu ritmo, paso a paso sin necesitar mucho.",
          },
          {
            title: "Alcancía",
            text: "Tu mejor aliada para crear disciplina, guardar monedas o billetes y hacer visible el hábito.",
          },
          {
            title: "Sobres financieros",
            text: "Método sencillo donde puedes dividir tus ingresos en sobres etiquetados según tus prioridades de gastos, metas y ahorro.",
          },
        ],
      },
      {
        title: "Asesoría y planificación",
        intro:
          "Acompañamiento personalizado o grupal con estrategias adaptadas a tu realidad con el objetivo de crear orden, constancia y disciplina con tu:",
        items: [
          {
            title: "Ahorro",
            text: "Práctica financiera para ayudarte a cumplir metas.",
          },
          {
            title: "Presupuesto",
            text: "Un plan que organiza tus ingresos y egresos para ver con claridad a dónde va tu dinero.",
          },
          {
            title: "Registro de gastos",
            text: "El hábito de anotar cada salida de dinero y saber exactamente si gastas por necesidad o deseo.",
          },
        ],
      },
    ],
  },
  identify: {
    eyebrow: "Preguntas",
    title: "Estas preguntas son muy comunes.",
    text: "Si alguna te hace ruido, no te preocupes, es que tus finanzas merecen orden y atención, y un plan sencillo que parta desde tu realidad actual.",
    questions: [
      "¿Sientes que no sabes a dónde se va tu dinero?",
      "¿Quieres ahorrar y no sabes por dónde empezar o cómo mantener el hábito?",
      "¿No tienes metas y necesitas organizarte para alcanzarlas?",
      "¿Quieres aprender a administrar tu dinero sin complicaciones?",
    ],
  },
  process: {
    eyebrow: "Etapas de Acompañamiento",
    title: "Soluciones financieras a tu medida.",
    intro:
      "La primera conversación es sin costo. Las asesorías son virtuales o presenciales con un objetivo claro y preciso, que empecemos a tener orden mental, financiero y les dé valor a cada peso que entre a tus bolsillos con claridad, confianza y la seguridad de que transformarás tu vida financiera.",
    steps: [
      {
        title: "Escuchamos tu realidad",
        text: "Para entender tu situación económica actual sin juzgar.",
      },
      {
        title: "Analizamos tus finanzas",
        text: "Revisar a fondo tu manera de gastar tus ingresos.",
      },
      {
        title: "Identificamos el problema",
        text: "Detectar el punto exacto de tu desorden financiero y qué frena tus metas.",
      },
      {
        title: "Plan de acción",
        text: "Diseñar pasos simples para solucionar el problema.",
      },
    ],
  },
  resources: {
    eyebrow: "Recursos",
    title: "Herramientas gratuitas para aplicar lo aprendido.",
    text: "Estas plantillas están creadas para que organices tu dinero de forma práctica, según tus necesidades y sin complicarte.",
    emptyLabel: "Herramienta gratuita",
    cta: "Descargar plantilla",
    items: [
      {
        title: "Plantilla de ahorro",
        href: "/recursos/plantilla-ahorro.pdf",
        download: "plantilla-ahorro.pdf",
      },
      {
        title: "Plantilla de presupuesto",
        href: "/recursos/plantilla-presupuesto.pdf",
        download: "plantilla-presupuesto.pdf",
      },
      {
        title: "Plantilla de registro de gastos",
        href: "/recursos/plantilla-registro-gastos.pdf",
        download: "plantilla-registro-gastos.pdf",
      },
    ],
  },
  testimonials: {
    eyebrow: "Vivencias",
    title: "Vivencias.",
    text: "Experiencias compartidas después de los talleres y el acompañamiento, en sus propias palabras.",
    items: [
      {
        quote:
          "Hola querida. Fue una experiencia muy grata, ya que el taller no tuvo desperdicios, excelente contenido y más por ti como facilitadora eres muy buena, salí de ahí con la mente muy positiva y ya desde hoy puse lo aprendido en práctica, hoy cobré y saqué mi 20% para ahorros llueva, truene o venteee 😜. Gracias por todo.",
        name: "Participante",
      },
      {
        quote:
          "El taller me gustó mucho porque me enseñaron cómo organizarme y ahorrar al mismo tiempo, antes no entendía el sistema de sobre y desde hoy lo puse en práctica. Yo le recomiendo a las personas que como yo tienen una descomposición financiera que asistan a este taller es muy educativo. Gracias Audi Paulino.",
        name: "Participante",
      },
      {
        quote:
          "Me encanto la manera que diste ese taller, y para mi fue una experiencia muy satisfactoria. Aprendí hacer un verdadero presupuesto y ver a donde 💸💸💸 iba mi dinero. Que por más que gané, jamás me rendirá el dinero sí no, educó mi I.Q financiero 😊. Gracias. Y ya sabe me anotas para el próximo taller. Ojalá sea de inversiones🙌🤲🌞.",
        name: "Participante",
      },
      {
        quote:
          "Soy fiel seguidor tuyo quiero agradecerte de ante mano que gracias a ti y a tus consejos logré pagar todas mis deudas y voy por más ahora estoy ahorrando unos 20k quiniela donde antes no podía ni ahorrar 1000 jaja me desprendí de todo para acer ese sacrificios gracias de verdad por los consejos que subes bendiciones de ante manos",
        name: "Cliente",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas claras, en un lenguaje sencillo.",
    items: [
      {
        question: "¿Cómo puedo agendar una asesoría?",
        answer:
          "WhatsApp es el canal principal. También puedes llamar, escribir al correo o dejar tus datos en el formulario. La primera conversación es sin costo.",
      },
      {
        question: "¿Las asesorías son virtuales o presenciales?",
        answer:
          "Pueden ser virtuales o presenciales, según lo que mejor se ajuste a ti.",
      },
      {
        question: "¿Para quién es este acompañamiento?",
        answer:
          "Trabajo con niños, jóvenes y adultos. Puede ser de forma individual o en sesiones grupales.",
      },
      {
        question: "¿Qué temas trabajamos?",
        answer:
          "Cambio de mentalidad financiera, hábito del ahorro, presupuesto, registro de gastos, gastos conscientes, capacidad de endeudamiento, administración del dinero, metas, organización y hábitos financieros saludables. No trabajo bolsa de valores.",
      },
      {
        question: "¿Necesito saber de finanzas para empezar?",
        answer:
          "No. La educación financiera es parte del camino: avanzamos con herramientas prácticas y un lenguaje claro, desde donde estás hoy.",
      },
    ],
  },
  closingCta: {
    eyebrow: "Tu primer paso",
    title: "Cada centavo cuenta.",
    text: "La primera conversación es sin costo. Si quieres organizar tu dinero sin complicaciones, este es un buen momento para comenzar.",
    cta: {
      href: "https://wa.me/18099311031",
      label: "Agenda tu asesoría",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos cuando estés listo.",
    text: "WhatsApp es el medio principal. También puedes llamar, escribir al correo o encontrarme en Instagram, Facebook y TikTok como @finanzasnutritivas.",
    formNote:
      "WhatsApp es el canal principal. Al enviar, se abrirá WhatsApp con tu mensaje para completar el contacto.",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      submit: "Enviar mensaje",
    },
  },
  footer: {
    blurb:
      "Alimentamos hábitos que transforman vidas, un peso a la vez.",
    socialsLabel: "Redes sociales",
    legalLabel: "Políticas legales",
  },
} as const;

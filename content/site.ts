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
    eyebrow: "Una mirada distinta",
    title: "Así como el cuerpo necesita buenos alimentos, las finanzas necesitan buenas decisiones.",
    text: "El verdadero cambio comienza en la mente y continúa en la cuenta, cuando aprendemos a administrar cada peso que entra a nuestros bolsillos. La educación financiera no es un lujo: es una necesidad.",
    items: [
      {
        title: "Claridad",
        text: "Entender tu dinero con un lenguaje sencillo, preciso y cercano, sin tecnicismos innecesarios.",
      },
      {
        title: "Orden",
        text: "Organizar gastos, presupuesto y ahorro a partir de tu realidad, no de una receta ajena.",
      },
      {
        title: "Transformación",
        text: "Crear hábitos financieros saludables, paso a paso, que se puedan mantener en el tiempo.",
      },
    ],
  },
  about: {
    id: "sobre-nosotros",
    eyebrow: "Sobre Audy Paulino",
    title: "Acompañamiento desde la empatía, sin juzgar.",
    paragraphs: [
      "Soy Audy Paulino, y Finanzas Nutritivas nació para nutrir hábitos financieros saludables. La marca representa transformación, cambios y propósito: ayudar a las personas a administrar su dinero y aplicar ese conocimiento en la vida cotidiana.",
      "Trabajo con niños, jóvenes y adultos, de forma individual o en sesiones grupales. El acompañamiento parte de tu realidad, con comunicación clara y herramientas prácticas, para que puedas transformar tu vida financiera y personal sin complicaciones.",
    ],
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
    intro:
      "Cuando buscas asesoría, escucho tu realidad, analizo tus finanzas, identifico el problema y proponemos juntos soluciones sencillas. No trabajo bolsa de valores.",
    groups: [
      {
        title: "Productos financieros",
        items: [
          {
            title: "Organigasto",
            text: "Para organizar tus gastos de forma simple y cotidiana.",
          },
          {
            title: "Carpeta ahorradora",
            text: "Para construir el hábito del ahorro con un recurso concreto.",
          },
          {
            title: "Kit de ahorro",
            text: "Para dar el primer paso hacia una práctica de ahorro constante.",
          },
          {
            title: "Reto de ahorro",
            text: "Para sostener el ahorro con un objetivo claro y alcanzable.",
          },
          {
            title: "Alcancía",
            text: "Para hacer visible el hábito de guardar, un peso a la vez.",
          },
          {
            title: "Sobres financieros",
            text: "Para separar el dinero según tus prioridades, con método y calma.",
          },
        ],
      },
      {
        title: "Paquete de asesoría",
        items: [
          {
            title: "Asesoría de ahorro",
            text: "Para diseñar un camino de ahorro que se ajuste a tu situación.",
          },
          {
            title: "Presupuesto",
            text: "Para ordenar ingresos y gastos con un plan realista.",
          },
          {
            title: "Registro de gastos",
            text: "Para ver con claridad a dónde se va el dinero y decidir mejor.",
          },
        ],
      },
    ],
  },
  identify: {
    eyebrow: "¿Te identificas con esto?",
    title: "Estas preguntas son más comunes de lo que parece.",
    text: "Si alguna resuena, no significa que hayas fallado. Significa que tus finanzas merecen atención, empatía y un plan que parta de tu realidad.",
    questions: [
      "¿Sientes que el dinero entra y no sabes a dónde se va?",
      "¿Quieres ahorrar, pero no has logrado convertirlo en un hábito?",
      "¿Tienes metas y necesitas organizarte para alcanzarlas?",
      "¿Quieres aprender a administrar tu dinero sin complicaciones?",
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Un camino claro, desde tu realidad.",
    intro:
      "La primera conversación es sin costo. Las asesorías pueden ser virtuales o presenciales. El objetivo es que sientas orden, claridad, confianza y la seguridad de que sí puedes transformar tu vida financiera.",
    steps: [
      {
        title: "Escuchamos tu realidad",
        text: "Partimos de tu historia, con empatía y sin juicios.",
      },
      {
        title: "Analizamos tus finanzas",
        text: "Miramos juntos lo que está ocurriendo con tu dinero.",
      },
      {
        title: "Identificamos el problema",
        text: "Encontramos el punto que está trabando tu organización o tus metas.",
      },
      {
        title: "Creamos un plan de acción",
        text: "Proponemos soluciones sencillas y un plan adaptado a tus necesidades.",
      },
    ],
  },
  resources: {
    eyebrow: "Recursos",
    title: "Herramientas gratuitas para aplicar lo aprendido.",
    text: "Estas plantillas están pensadas para que organices tu dinero en la vida cotidiana, a tu ritmo y sin complicaciones.",
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
    eyebrow: "Voces",
    title: "Palabras de quienes han participado.",
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
    eyebrow: "Un primer paso",
    title: "Cada centavo cuenta.",
    text: "La primera conversación es sin costo. Si quieres organizar tu dinero sin complicaciones, este es un buen momento para comenzar.",
    cta: {
      href: "https://wa.me/18099311031",
      label: "Agenda tu asesoría",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos cuando tú estés listo.",
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

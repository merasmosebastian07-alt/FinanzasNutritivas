import { getSiteUrl } from "@/lib/site-url";
import { homeCopy, images, site } from "@/content/site";

export function JsonLd() {
  const url = getSiteUrl();
  const logoUrl = `${url}${site.logo.src}`;
  const imageUrl = `${url}${images.about.src}`;
  const personId = `${url}#person`;
  const organizationId = `${url}#organization`;
  const serviceId = `${url}#service`;

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      url,
      logo: logoUrl,
      email: site.email,
      telephone: site.phone.display,
      sameAs: site.socials.map((item) => item.href),
      founder: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.founder,
      url,
      image: imageUrl,
      email: site.email,
      telephone: site.phone.display,
      jobTitle: "Facilitadora de educación financiera",
      worksFor: { "@id": organizationId },
      sameAs: site.socials.map((item) => item.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: site.name,
      url,
      image: logoUrl,
      email: site.email,
      telephone: site.phone.display,
      description: site.description,
      serviceType: [
        "Educación financiera",
        "Asesoría y planificación",
        "Ahorro",
        "Presupuesto",
        "Registro de gastos",
      ],
      provider: { "@id": personId },
      sameAs: site.socials.map((item) => item.href),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#preguntas-frecuentes`,
      mainEntity: homeCopy.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

import { About } from "@/components/home/About";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Contact } from "@/components/home/Contact";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Identify } from "@/components/home/Identify";
import { Process } from "@/components/home/Process";
import { Resources } from "@/components/home/Resources";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Value } from "@/components/home/Value";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Value />
      <About />
      <Services />
      <Identify />
      <Process />
      <Resources />
      <Testimonials />
      <Faq />
      <ClosingCta />
      <Contact />
    </main>
  );
}

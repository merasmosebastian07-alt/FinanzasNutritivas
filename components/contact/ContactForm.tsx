"use client";

import type { FormEvent } from "react";
import { homeCopy, site } from "@/content/site";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-md border border-navy/15 bg-ivory px-4 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-navy/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ContactForm() {
  const { fields, formNote } = homeCopy.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("correo") ?? "").trim();
    const phone = String(data.get("telefono") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();

    const lines = [
      name ? `Nombre: ${name}` : null,
      email ? `Correo: ${email}` : null,
      phone ? `Teléfono: ${phone}` : null,
      message ? `Mensaje: ${message}` : null,
    ].filter((line): line is string => Boolean(line));

    const text = lines.join("\n") || "Hola, quiero más información.";
    const href = `${site.whatsapp.href}?text=${encodeURIComponent(text)}`;

    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="space-y-5 rounded-lg border border-navy/10 bg-paper p-5 sm:p-7"
      onSubmit={handleSubmit}
      aria-describedby="form-note"
    >
      <p id="form-note" className="text-[0.7rem] leading-relaxed text-ink/40">
        {formNote}
      </p>
      <div>
        <label htmlFor="nombre" className="text-sm font-medium text-ink">
          {fields.name}
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="correo" className="text-sm font-medium text-ink">
          {fields.email}
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          className={fieldClass}
          autoComplete="email"
          inputMode="email"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="text-sm font-medium text-ink">
          {fields.phone}
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className={fieldClass}
          autoComplete="tel"
          inputMode="tel"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm font-medium text-ink">
          {fields.message}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${fieldClass} min-h-32 resize-y py-3`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-paper transition-colors hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
      >
        {fields.submit}
      </button>
    </form>
  );
}

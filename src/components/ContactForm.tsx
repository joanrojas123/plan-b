"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            Proximo paso
          </p>
          <h2 className="font-display mb-6 text-4xl font-normal leading-[1.15] text-white md:text-5xl">
            Contanos donde esta{" "}
            <em className="font-display italic text-zinc-400">
              tu cuello de botella.
            </em>
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-zinc-500 md:text-base">
            En una llamada de 30 minutos entendemos tu contexto, validamos si
            podemos ayudar y proponemos un primer Plan B para tu operacion.
          </p>
          <div className="space-y-3 text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-[#2563EB]" />
              Respuesta en menos de 24 hs
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-[#2563EB]" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-[#2563EB]" />
              Diagnostico gratuito
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid gap-4 md:grid-cols-2"
        >
          <div className="space-y-1.5">
            <label htmlFor="nombre" className="block text-xs text-zinc-500">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              placeholder="Como te llamas"
              className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#2563EB]/50 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/30"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="empresa" className="block text-xs text-zinc-500">
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              required
              placeholder="Nombre de la compania"
              className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#2563EB]/50 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/30"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="industria" className="block text-xs text-zinc-500">
              Industria
            </label>
            <input
              id="industria"
              name="industria"
              placeholder="E-commerce, SaaS, logistica..."
              className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#2563EB]/50 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/30"
            />
          </div>

          <div className="space-y-1.5 md:row-span-2">
            <label htmlFor="cuello" className="block text-xs text-zinc-500">
              Cuello de botella principal
            </label>
            <textarea
              id="cuello"
              name="cuello_de_botella"
              required
              rows={4}
              placeholder="Que es lo que mas frena hoy tu operacion..."
              className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[#2563EB]/50 focus:outline-none focus:ring-1 focus:ring-[#2563EB]/30"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="h-11 w-full rounded-full bg-[#2563EB] text-sm font-medium text-white transition-all hover:bg-[#1d4ed8] disabled:opacity-50 md:w-auto md:px-8"
            >
              {sent ? "Mensaje enviado" : "Enviar mensaje"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
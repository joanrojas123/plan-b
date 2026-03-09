"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#3B82F6]">
          Próximo paso
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Contanos dónde hoy está tu cuello de botella.
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          En una llamada de 30 minutos entendemos tu contexto, validamos si
          podemos ayudar y proponemos un primer Plan B para tu operación.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-2xl border border-white/10 bg-zinc-950/70 p-5 md:grid-cols-2 md:gap-6"
      >
        <div className="space-y-1">
          <label
            htmlFor="nombre"
            className="text-xs font-medium text-zinc-300"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            required
            autoComplete="name"
            className="h-10 w-full rounded-lg border border-white/10 bg-black/40 px-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40"
            placeholder="Cómo te llamás"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="empresa"
            className="text-xs font-medium text-zinc-300"
          >
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            required
            className="h-10 w-full rounded-lg border border-white/10 bg-black/40 px-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40"
            placeholder="Nombre de la compañía"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="industria"
            className="text-xs font-medium text-zinc-300"
          >
            Industria
          </label>
          <input
            id="industria"
            name="industria"
            className="h-10 w-full rounded-lg border border-white/10 bg-black/40 px-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40"
            placeholder="Ej: e‑commerce, SaaS B2B, logística…"
          />
        </div>

        <div className="space-y-1 md:row-span-2">
          <label
            htmlFor="cuello_de_botella"
            className="text-xs font-medium text-zinc-300"
          >
            Cuello de botella principal
          </label>
          <textarea
            id="cuello_de_botella"
            name="cuello_de_botella"
            required
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/40"
            placeholder="Describí brevemente qué es lo que más frena hoy tu operación."
          />
          <p className="mt-1 text-[0.7rem] text-zinc-500">
            Leemos cada mensaje con atención. Cuanto más contexto, mejor.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 md:col-span-2 md:flex-row md:items-end">
          <div className="text-[0.7rem] text-zinc-500 md:text-xs">
            No compartimos tu información con terceros. Si preferís, también
            podés escribirnos directamente por email.
          </div>
          <Button
            type="submit"
            className="h-11 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] px-6 text-xs font-semibold shadow-lg shadow-blue-500/40 md:text-sm"
          >
            {sent ? "Mensaje enviado" : "Enviar mensaje"}
          </Button>
        </div>
      </motion.form>
    </section>
  );
}


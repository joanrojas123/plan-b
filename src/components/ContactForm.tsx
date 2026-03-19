"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-20 md:py-28">
      {/* CTA block - Linear "Built for the future" style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-8 md:p-12"
        style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(91,110,245,0.08) 0%, transparent 70%), #111111" }}
      >
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#5B6EF5]">Empezar</p>
            <h2 className="font-display mb-5 text-4xl font-normal leading-[1.12] text-white md:text-5xl">
              Contanos donde esta tu cuello de botella.
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-zinc-500">
              Una llamada de 30 minutos. Entendemos tu operacion, validamos si podemos ayudar y te proponemos un primer plan.
            </p>
            <div className="space-y-2">
              {["Respuesta en menos de 24 hs", "Sin compromiso", "Diagnostico gratuito"].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-600">
                  <span className="h-1 w-3 rounded-full bg-[#5B6EF5]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid gap-3 md:grid-cols-2"
          >
            {[
              { id: "nombre", label: "Nombre", placeholder: "Como te llamas", col: 1 },
              { id: "empresa", label: "Empresa", placeholder: "Nombre de la compania", col: 1 },
              { id: "industria", label: "Industria", placeholder: "E-commerce, SaaS...", col: 1 },
            ].map(f => (
              <div key={f.id} className="space-y-1.5">
                <label htmlFor={f.id} className="block text-[0.7rem] text-zinc-600">{f.label}</label>
                <input id={f.id} name={f.id} placeholder={f.placeholder} className="h-9 w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 text-sm text-white placeholder:text-zinc-700 focus:border-[#5B6EF5]/40 focus:outline-none focus:ring-1 focus:ring-[#5B6EF5]/20 transition-colors" />
              </div>
            ))}

            <div className="space-y-1.5">
              <label htmlFor="equipo" className="block text-[0.7rem] text-zinc-600">Tamano del equipo</label>
              <select id="equipo" name="equipo" className="h-9 w-full rounded-lg border border-white/[0.08] bg-[#111111] px-3 text-sm text-zinc-400 focus:border-[#5B6EF5]/40 focus:outline-none transition-colors">
                <option value="">Seleccionar...</option>
                <option>1-10 personas</option>
                <option>11-30 personas</option>
                <option>31-100 personas</option>
                <option>Mas de 100</option>
              </select>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor="cuello" className="block text-[0.7rem] text-zinc-600">Cuello de botella principal</label>
              <textarea id="cuello" name="cuello_de_botella" required rows={3} placeholder="Que frena hoy tu operacion..." className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-zinc-700 focus:border-[#5B6EF5]/40 focus:outline-none focus:ring-1 focus:ring-[#5B6EF5]/20 transition-colors" />
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="inline-flex h-10 items-center rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:bg-zinc-100">
                Enviar mensaje
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>

      {/* Success modal */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setSent(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-white/[0.08] bg-[#111111] p-8 text-center"
            >
              <button onClick={() => setSent(false)} className="absolute right-4 top-4 p-1.5 text-zinc-600 hover:text-zinc-400">
                <X className="h-4 w-4" />
              </button>
              <div className="mb-5 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4ade80]" />
                </div>
              </div>
              <h3 className="font-display mb-2 text-2xl font-normal text-white">Recibido.</h3>
              <p className="mb-6 text-sm text-zinc-500">Sebastian se va a poner en contacto en menos de 24 horas para coordinar la llamada.</p>
              <button onClick={() => setSent(false)} className="inline-flex h-9 items-center rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-zinc-100 transition-colors">
                Perfecto
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
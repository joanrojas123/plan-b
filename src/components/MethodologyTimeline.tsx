"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", week: "Sem. 1-2", title: "Diagnostico", desc: "Entrevistas, datos operativos y mapeo de procesos. Entendemos exactamente donde se pierden tiempo, calidad y margen." },
  { num: "02", week: "Sem. 3-4", title: "Priorizacion", desc: "Un mapa claro de donde intervenir primero. Ordenado por impacto real en el negocio, no por lo que se ve mas urgente." },
  { num: "03", week: "Sem. 5-8", title: "Diseno del sistema", desc: "Procesos, metricas, responsabilidades y herramientas. Todo documentado y validado con tu equipo antes de implementar." },
  { num: "04", week: "Sem. 9-12", title: "Implementacion", desc: "Sprints cortos con tu equipo. Medimos, ajustamos y transferimos el sistema para que funcione sin nosotros." },
];

export default function MethodologyTimeline() {
  return (
    <section id="metodologia" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="font-mono text-[0.65rem] text-zinc-600">3.0</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-600">Metodologia</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-3"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5B6EF5]/25 bg-[#5B6EF5]/8 px-3 py-1">
          <span className="text-xs font-medium text-[#5B6EF5]">Sistema SDO — 90 dias</span>
        </div>
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.12] text-white md:text-5xl">
          Un sistema instalado en tu empresa.{" "}
          <em className="font-display italic text-zinc-500">No un informe que se archiva.</em>
        </h2>
      </motion.div>

      <p className="mb-12 max-w-xl text-sm text-zinc-600 md:text-base">
        Trabajamos junto a tu equipo para que el sistema quede en sus manos. No dependes de nosotros cuando terminamos.
      </p>

      {/* Visual timeline */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]">
        {/* Progress bar top */}
        <div className="border-b border-white/[0.06] p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-600">
            <span>Progreso del engagement</span>
            <span>Semana 1 — 12</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-[#5B6EF5]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="grid gap-px bg-white/[0.04] md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-[#111111] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-2xl font-light text-zinc-800">{step.num}</span>
                <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[0.6rem] text-zinc-600">{step.week}</span>
              </div>
              <h3 className="mb-2 text-sm font-medium text-white">{step.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
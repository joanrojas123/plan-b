"use client";

import { motion } from "framer-motion";

const steps = [
  {
    week: "Sem. 1-2",
    title: "Diagnostico en profundidad",
    description:
      "Entrevistas con equipos clave, analisis de datos operativos y mapeo de procesos end-to-end para entender que frena hoy el crecimiento.",
  },
  {
    week: "Sem. 3-4",
    title: "Mapa de cuellos de botella",
    description:
      "Identificamos donde se pierden tiempos, calidad o margen. Priorizamos por impacto en negocio, esfuerzo e interdependencias.",
  },
  {
    week: "Sem. 5-8",
    title: "Diseno de la nueva operacion",
    description:
      "Definimos procesos, gobernanza, metricas y responsabilidades claras. Alineamos herramientas y definimos mejoras tecnologicas.",
  },
  {
    week: "Sem. 9-12",
    title: "Acompanamiento en la implementacion",
    description:
      "Trabajamos con tu equipo en sprints cortos, medimos avances y ajustamos. Dejamos tableros y rituales para sostener la mejora continua.",
  },
];

export default function MethodologyTimeline() {
  return (
    <section id="metodologia" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2563EB]">
          Metodologia
        </p>
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.15] text-white md:text-5xl">
          Un sistema en 90 dias,{" "}
          <em className="font-display italic text-zinc-400">
            no un PowerPoint.
          </em>
        </h2>
      </motion.div>

      <div className="grid gap-0 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative border-b border-white/[0.06] pb-8 pt-6 md:border-b-0 md:border-l md:border-white/[0.06] md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <div className="mb-1 flex items-center gap-3">
              <span className="text-[0.65rem] font-medium tabular-nums tracking-[0.14em] text-zinc-600">
                {step.week}
              </span>
              <div className="hidden h-px flex-1 bg-white/[0.06] md:block" />
            </div>
            <div className="mb-1 text-2xl font-light text-zinc-700 md:text-3xl">
              0{index + 1}
            </div>
            <h3 className="mb-3 text-sm font-medium text-white md:text-base">
              {step.title}
            </h3>
            <p className="text-xs leading-relaxed text-zinc-500 md:text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Diagnóstico en profundidad",
    time: "Semanas 1‑2",
    description:
      "Entrevistas con equipos clave, análisis de datos operativos y mapeo de procesos end‑to‑end para entender qué frena hoy el crecimiento.",
  },
  {
    title: "2. Mapa de cuellos de botella",
    time: "Semanas 3‑4",
    description:
      "Identificamos dónde se pierden tiempos, calidad o margen y priorizamos en base a impacto en negocio, esfuerzo e interdependencias.",
  },
  {
    title: "3. Diseño de la nueva operación",
    time: "Semanas 5‑8",
    description:
      "Definimos procesos, gobernanza, métricas y responsabilidades claras. Alineamos herramientas existentes y definimos mejoras tecnológicas.",
  },
  {
    title: "4. Acompañamiento en la implementación",
    time: "Semanas 9‑12",
    description:
      "Trabajamos con tu equipo en sprints cortos, medimos avances y ajustamos. Dejamos tableros y rituales para sostener la mejora continua.",
  },
];

export default function MethodologyTimeline() {
  return (
    <section id="metodologia" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#3B82F6]">
          Metodología
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Un plan en 90 días para ordenar la operación.
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          No vendemos PowerPoints. Co‑construimos junto a tu equipo un sistema
          operativo que queda instalado y no depende de nosotros.
        </p>
      </motion.div>

      <div className="relative space-y-6 border-l border-zinc-800 pl-5">
        <div className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-[#3B82F6] to-transparent" />
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative flex flex-col gap-1 rounded-2xl border border-white/5 bg-zinc-950/60 p-4"
          >
            <div className="absolute -left-5 top-4 h-2.5 w-2.5 rounded-full border border-[#3B82F6] bg-[#0A0A0F] shadow-[0_0_0_4px_rgba(59,130,246,0.25)]" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {step.time}
            </p>
            <h3 className="text-sm font-semibold text-white md:text-base">
              {step.title}
            </h3>
            <p className="text-xs text-zinc-400 md:text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const before = [
  "Coordinacion por WhatsApp y llamadas",
  "Reportes manuales cada semana",
  "Nadie sabe donde esta cada tarea",
  "Los errores aparecen cuando ya es tarde",
];

const after = [
  "Procesos documentados y automatizados",
  "Metricas en tiempo real sin esfuerzo",
  "Visibilidad total del equipo",
  "Los problemas se detectan antes de escalar",
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      {/* Section label - Linear style */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="font-mono text-[0.65rem] text-zinc-600">1.0</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-600">El cambio</span>
        <a href="#metodologia" className="ml-auto flex items-center gap-1 text-[0.7rem] text-zinc-600 transition-colors hover:text-zinc-400">
          Ver metodologia <ArrowRight className="h-3 w-3" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.12] text-white md:text-5xl">
          De operar apagando incendios{" "}
          <em className="font-display italic text-zinc-500">a tener un sistema que funciona solo.</em>
        </h2>
      </motion.div>

      {/* Before / After visual */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]"
        >
          <div className="border-b border-white/[0.06] px-5 py-3">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-zinc-600">
              Hoy — sin sistema
            </span>
          </div>
          <div className="p-5">
            <div className="mb-5 space-y-2">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/60" />
                  <span className="text-sm text-zinc-500">{item}</span>
                </motion.div>
              ))}
            </div>
            {/* Fake stress indicator */}
            <div className="rounded-lg border border-red-500/10 bg-red-500/[0.04] p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-zinc-600">Capacidad del equipo</span>
                <span className="text-red-400/70">38%</span>
              </div>
              <div className="h-1 w-full rounded-full bg-white/5">
                <div className="h-full w-[38%] rounded-full bg-red-500/50" />
              </div>
              <p className="mt-2 text-[0.65rem] text-zinc-700">La mayoria del tiempo se va en urgencias.</p>
            </div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-[#5B6EF5]/20 bg-[#111111]"
        >
          <div className="border-b border-white/[0.06] px-5 py-3">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#5B6EF5]">
              Con Plan B — modo sistema
            </span>
          </div>
          <div className="p-5">
            <div className="mb-5 space-y-2">
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ade80]" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="rounded-lg border border-[#5B6EF5]/10 bg-[#5B6EF5]/[0.04] p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-zinc-600">Capacidad del equipo</span>
                <span className="text-[#4ade80]">91%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-[#4ade80]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "91%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-[0.65rem] text-zinc-700">El equipo enfoca en crecer, no en apagar fuegos.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
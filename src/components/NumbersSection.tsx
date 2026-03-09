"use client";

import { motion } from "framer-motion";

const KPIS = [
  {
    label: "reducción promedio en tiempo de ciclo",
    value: "-32%",
  },
  {
    label: "incremento en capacidad de la operación sin sumar headcount",
    value: "+48%",
  },
  {
    label: "disminución de tickets urgentes en 3 meses",
    value: "-65%",
  },
];

export default function NumbersSection() {
  return (
    <section id="numeros" className="space-y-6">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500"
      >
        Lo que cambia cuando la operación deja de ser un cuello de botella
      </motion.p>

      <div className="grid gap-4 md:grid-cols-3">
        {KPIS.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-5"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/15 via-transparent to-[#7C3AED]/15" />
            <div className="relative space-y-1">
              <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {kpi.value}
              </div>
              <p className="text-xs text-zinc-400">{kpi.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


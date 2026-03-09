"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "E‑commerce & Retail omnicanal",
    detail:
      "Operaciones con múltiples canales (tienda online, marketplaces, retail físico) que necesitan unificar stock, fulfillment y postventa.",
    hint: "Órdenes que se pierden entre sistemas, promesas de entrega que no se cumplen.",
  },
  {
    name: "SaaS B2B en expansión",
    detail:
      "Equipos de Customer Success, Implementación y Soporte que crecieron rápido y hoy operan con procesos desalineados.",
    hint: "Onboardings lentos, churn evitable y equipos siempre al límite.",
  },
  {
    name: "Operaciones intensivas en servicio",
    detail:
      "Logística, servicios profesionales, fintechs y compañías donde la experiencia operacional define la marca.",
    hint: "Muchas manos tocando el mismo caso y poca visibilidad end‑to‑end.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="industrias" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7C3AED]">
          A quiénes ayudamos
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          No partimos de teoría, sino de operaciones reales.
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          Trabajamos mejor con compañías que ya superaron el product‑market
          fit, tienen equipos operativos formados y buscan ordenar la casa para
          el siguiente salto.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/60 p-4"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white md:text-base">
                {industry.name}
              </h3>
              <p className="text-xs text-zinc-400 md:text-sm">
                {industry.detail}
              </p>
            </div>
            <p className="mt-3 text-[0.7rem] text-zinc-500">
              {industry.hint}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


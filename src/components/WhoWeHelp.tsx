"use client";

import { motion } from "framer-motion";

const industries = [
  {
    tag: "E-commerce & Retail",
    title: "Operaciones omnicanal que necesitan unificarse",
    detail:
      "Multiples canales — tienda online, marketplaces, retail fisico — con stock, fulfillment y postventa desconectados.",
    pain: "Ordenes perdidas entre sistemas. Promesas de entrega que no se cumplen.",
  },
  {
    tag: "SaaS B2B",
    title: "Equipos que crecieron rapido y operan desalineados",
    detail:
      "Customer Success, Implementacion y Soporte que escalan sin procesos claros ni metricas compartidas.",
    pain: "Onboardings lentos, churn evitable, equipos siempre al limite.",
  },
  {
    tag: "Operaciones intensivas",
    title: "Servicios donde la operacion define la marca",
    detail:
      "Logistica, profesionales, fintechs: muchas manos tocando el mismo caso y poca visibilidad end-to-end.",
    pain: "Sin visibilidad en tiempo real. Errores que llegan tarde.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="industrias" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2563EB]">
          Para quien
        </p>
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.15] text-white md:text-5xl">
          No partimos de teoria,{" "}
          <em className="font-display italic text-zinc-400">
            sino de operaciones reales.
          </em>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {industries.map((ind, index) => (
          <motion.div
            key={ind.tag}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"
          >
            <span className="mb-5 inline-block rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#2563EB]">
              {ind.tag}
            </span>
            <h3 className="mb-3 text-base font-medium leading-snug text-white">
              {ind.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500">
              {ind.detail}
            </p>
            <p className="border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-zinc-600">
              {ind.pain}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
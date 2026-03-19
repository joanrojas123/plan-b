"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    tag: "E-commerce & Retail",
    title: "Unifica tu operacion omnicanal",
    detail: "Stock, fulfillment y postventa en un solo sistema. Sin ordenes perdidas entre plataformas ni promesas de entrega que no se pueden cumplir.",
  },
  {
    tag: "SaaS B2B",
    title: "Operaciones que crecen con el producto",
    detail: "Customer Success, Implementacion y Soporte alineados. Onboardings mas rapidos, menos churn y equipos que no trabajan apagando fuegos.",
  },
  {
    tag: "Servicios & Logistica",
    title: "Visibilidad de punta a punta",
    detail: "Cuando muchas personas tocan el mismo caso, la visibilidad lo es todo. Construimos sistemas que hacen visible el trabajo en tiempo real.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="industrias" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="font-mono text-[0.65rem] text-zinc-600">2.0</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-600">Para quien</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.12] text-white md:text-5xl">
          Para equipos que ya probaron el mercado{" "}
          <em className="font-display italic text-zinc-500">y quieren crecer sin perder el control.</em>
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((ind, index) => (
          <motion.div
            key={ind.tag}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-200 hover:border-[#5B6EF5]/30"
          >
            <span className="mb-5 self-start rounded-full border border-[#5B6EF5]/25 bg-[#5B6EF5]/8 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#5B6EF5]">
              {ind.tag}
            </span>
            <h3 className="mb-3 text-base font-medium leading-snug text-white">{ind.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-zinc-500">{ind.detail}</p>
            <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition-colors group-hover:text-zinc-400">
              Ver casos <ArrowRight className="h-3 w-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
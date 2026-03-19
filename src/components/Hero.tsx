"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  "E-commerce",
  "Logistica",
  "SaaS B2B",
  "Fintech",
  "Retail",
  "Manufactura ligera",
];

export default function Hero() {
  return (
    <section id="top" className="relative pb-4 pt-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#2563EB]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-xs text-zinc-400">
            Ingenieria de operaciones
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mb-6 text-5xl font-normal leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Escalamos tu{" "}
          <em className="font-display italic text-[#2563EB]">operacion</em>{" "}
          sin perder el control.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          Consultoria de ingenieria de operaciones para equipos que ya crecieron
          en ventas pero cuya operacion todavia funciona con parches, Excel y
          heroes apagando incendios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#2563EB] px-8 text-sm font-medium text-white transition-all hover:bg-[#1d4ed8]"
          >
            Agendar diagnostico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#metodologia"
            className="inline-flex h-12 items-center rounded-full border border-white/10 px-8 text-sm text-zinc-400 transition-all hover:border-white/20 hover:text-white"
          >
            Ver metodologia
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 space-y-3"
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Industrias donde ya operamos
          </p>
          <div className="relative overflow-hidden border-y border-white/[0.06] py-3">
            <motion.div
              className="flex gap-10 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <span
                  key={index}
                  className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500"
                >
                  {industry}
                </span>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#080808] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
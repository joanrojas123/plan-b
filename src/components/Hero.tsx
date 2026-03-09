"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  "E‑commerce",
  "Logística",
  "SaaS B2B",
  "Fintech",
  "Retail",
  "Manufactura ligera",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center"
    >
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
          Ingeniería de operaciones para cuando el Plan A ya no alcanza.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl"
        >
          Escalamos tu operación{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
            sin perder el control.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base"
        >
          Plan B es una consultoría de ingeniería de operaciones para equipos
          que ya crecieron en ventas, pero cuya operación todavía funciona con
          parches, planes en Excel y héroes apagando incendios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button
            asChild
            className="h-11 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] px-6 text-xs font-semibold shadow-lg shadow-blue-500/40 sm:text-sm"
          >
            <a href="#contacto" className="inline-flex items-center gap-2">
              Agendar llamada de diagnóstico
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-zinc-500 sm:text-sm">
            Respuesta en &lt; 24 hs. Sin compromiso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 space-y-2"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
            Industrias donde ya vimos estos problemas
          </p>
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-2">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <span
                  key={`${industry}-${index}`}
                  className="text-xs text-zinc-200 md:text-sm"
                >
                  {industry}
                </span>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A0A0F] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A0A0F] to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#020617] to-black p-6 shadow-[0_0_80px_rgba(59,130,246,0.25)]"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#3B82F6]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-[#7C3AED]/30 blur-3xl" />
        <div className="relative space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Qué hacemos
          </p>
          <p className="text-sm text-zinc-300">
            Diseñamos procesos, tableros y equipos para que tu operación deje de
            vivir en la cabeza de unas pocas personas y se convierta en un
            sistema que escala de forma predecible.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-zinc-500">
                Horizonte 90 días
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-100">
                Diagnóstico + roadmap operativo
              </p>
            </div>
            <div className="rounded-xl border border-[#3B82F6]/30 bg-[#0F172A] p-3">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-blue-300">
                Acompañamiento
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-100">
                Co‑pilot de operaciones para tu equipo
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


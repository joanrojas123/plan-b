"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = ["E-commerce", "Logistica", "SaaS B2B", "Fintech", "Retail", "Manufactura"];

const mockupRows = [
  { label: "Diagnostico operativo", status: "Completado", color: "#4ade80", pct: 100 },
  { label: "Mapa de procesos", status: "En revision", color: "#5B6EF5", pct: 78 },
  { label: "Automatizaciones", status: "En progreso", color: "#f59e0b", pct: 45 },
  { label: "Tableros de control", status: "Pendiente", color: "#52525b", pct: 12 },
];

export default function Hero() {
  return (
    <section id="top" className="relative pb-8 pt-8">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#5B6EF5]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            El sistema operativo para tu empresa
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mb-6 text-center text-5xl font-normal leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[5.5rem]"
        >
          La operacion que{" "}
          <em className="font-display italic text-[#5B6EF5]">escala</em>{" "}
          con tu empresa.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-center text-base leading-relaxed text-zinc-500 md:text-lg"
        >
          Convertimos operaciones que dependen de personas clave en sistemas que funcionan solos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#contacto" className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:bg-zinc-100">
            Diagnostico gratuito
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#como-funciona" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-7 text-sm text-zinc-400 transition-all hover:border-white/20 hover:text-white">
            Ver como funciona
          </a>
        </motion.div>

        {/* Product mockup - Linear style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]"
        >
          {/* Gradient fade bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-[0.65rem] text-zinc-600">Plan B — Sistema operativo</span>
          </div>

          <div className="grid md:grid-cols-[200px_1fr]">
            {/* Sidebar */}
            <div className="hidden border-r border-white/[0.06] p-4 md:block">
              <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-zinc-600">Workspace</p>
              {["Diagnostico", "Procesos", "Automatizaciones", "Metricas"].map((item, i) => (
                <div key={item} className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${i === 1 ? "bg-white/[0.06] text-white" : "text-zinc-600"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[#4ade80]" : i === 1 ? "bg-[#5B6EF5]" : i === 2 ? "bg-[#f59e0b]" : "bg-zinc-700"}`} />
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Hoja de ruta operativa</p>
                  <p className="text-xs text-zinc-600">90 dias — activo</p>
                </div>
                <span className="rounded-full border border-[#5B6EF5]/40 bg-[#5B6EF5]/10 px-2.5 py-0.5 text-[0.65rem] text-[#5B6EF5]">En curso</span>
              </div>

              <div className="space-y-3">
                {mockupRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-36 shrink-0 text-xs text-zinc-400">{row.label}</div>
                    <div className="flex-1">
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: row.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${row.pct}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.12, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <span className="w-20 shrink-0 text-right text-[0.65rem]" style={{ color: row.color }}>{row.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-12">
          <p className="mb-3 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-700">Industrias donde operamos</p>
          <div className="relative overflow-hidden border-y border-white/[0.05] py-3">
            <motion.div className="flex gap-10 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
              {[...industries, ...industries].map((ind, i) => (
                <span key={i} className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-zinc-700">{ind}</span>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
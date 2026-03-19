"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/[0.06]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#5B6EF5]">
            <span className="text-[0.5rem] font-bold tracking-widest text-white">PB</span>
          </div>
          <span className="text-xs text-zinc-600">Plan B — Ingenieria de operaciones</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#como-funciona" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">Como funciona</a>
          <a href="#metodologia" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">Metodologia</a>
          <a href="#contacto" className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors">Contacto</a>
          <span className="text-xs text-zinc-800">{new Date().getFullYear()}</span>
        </div>
      </div>
    </motion.footer>
  );
}
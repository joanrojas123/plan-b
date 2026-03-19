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
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2563EB]">
            <span className="text-[0.5rem] font-bold tracking-widest text-white">PB</span>
          </div>
          <span className="text-xs text-zinc-500">
            Plan B — Consultoria de ingenieria de operaciones
          </span>
        </div>
        <span className="text-xs text-zinc-600">
          {new Date().getFullYear()} · Para equipos que quieren pasar del modo bombero al modo sistema.
        </span>
      </div>
    </motion.footer>
  );
}
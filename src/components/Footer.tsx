"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/5 bg-black/40"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[0.7rem] md:text-xs">
          <span className="font-semibold tracking-[0.18em] text-zinc-400">
            PLAN B
          </span>
          <span className="text-zinc-500">
            Consultoría de ingeniería de operaciones.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[0.7rem] md:text-xs">
          <span className="text-zinc-500">
            © {new Date().getFullYear()} Plan B. Todos los derechos reservados.
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-600 md:inline-block" />
          <span className="text-zinc-500">
            Hecho para equipos que quieren pasar del modo bombero al modo
            sistema.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}


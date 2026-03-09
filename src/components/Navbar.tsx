"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#numeros", label: "Números" },
  { href: "#dolores", label: "Pain points" },
  { href: "#industrias", label: "A quiénes ayudamos" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#stack", label: "Stack tecnológico" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-[#050509]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#3B82F6] to-[#7C3AED] shadow-lg shadow-blue-500/40" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] text-zinc-400">
              PLAN B
            </span>
            <span className="text-xs text-zinc-500">
              Ingeniería de Operaciones
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] px-5 py-2 text-xs font-semibold shadow-lg shadow-blue-500/40"
          >
            <a href="#contacto">Agendar diagnóstico</a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-zinc-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#050509]/95 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-2 text-sm text-zinc-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 w-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] text-xs font-semibold shadow-lg shadow-blue-500/40"
            >
              <a href="#contacto">Agendar diagnóstico</a>
            </Button>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

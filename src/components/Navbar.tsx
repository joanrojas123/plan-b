"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#numeros", label: "Resultados" },
  { href: "#dolores", label: "El problema" },
  { href: "#industrias", label: "Para quien" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-[#080808]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB]">
            <span className="text-[0.6rem] font-bold tracking-widest text-white">PB</span>
          </div>
          <span className="text-sm font-medium tracking-wide text-white">
            Plan B
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex h-9 items-center rounded-full border border-white/10 bg-white/5 px-5 text-[0.8rem] font-medium text-white transition-all hover:border-[#2563EB]/60 hover:bg-[#2563EB]/10"
          >
            Agendar diagnostico
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-1.5 text-zinc-400 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/[0.06] bg-[#080808]/98 px-5 pb-5 pt-3 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-3 flex h-10 items-center justify-center rounded-full bg-[#2563EB] text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Agendar diagnostico
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#industrias", label: "Para quien" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#5B6EF5]">
            <span className="text-[0.55rem] font-bold tracking-widest text-white">PB</span>
          </div>
          <span className="text-sm font-medium text-white">Plan B</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[0.8rem] text-zinc-500 transition-colors hover:text-zinc-200">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contacto" className="inline-flex h-8 items-center rounded-full bg-white px-5 text-[0.8rem] font-medium text-black transition-all hover:bg-zinc-100">
            Empezar
          </a>
        </div>

        <button className="p-1.5 text-zinc-400 hover:text-white md:hidden" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/[0.06] bg-[#0a0a0a] px-5 pb-5 pt-3 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="mt-3 flex h-10 items-center justify-center rounded-full bg-white text-sm font-medium text-black" onClick={() => setOpen(false)}>
              Empezar
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
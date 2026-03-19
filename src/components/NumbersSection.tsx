"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KPIS = [
  { label: "reduccion promedio en tiempo de ciclo", value: -32, suffix: "%" },
  {
    label: "incremento en capacidad sin sumar headcount",
    value: 48,
    suffix: "%",
    prefix: "+",
  },
  {
    label: "disminucion de tickets urgentes en 3 meses",
    value: -65,
    suffix: "%",
  },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const abs = Math.abs(value);
    const duration = 1800;
    const steps = 60;
    const increment = abs / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= abs) {
        setDisplay(abs);
        clearInterval(timer);
        return;
      }
      setDisplay(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const sign = value < 0 ? "-" : prefix ?? "";
  return (
    <span ref={ref}>
      {sign}
      {display}
      {suffix}
    </span>
  );
}

export default function NumbersSection() {
  return (
    <section id="numeros" className="space-y-6">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500"
      >
        Lo que cambia cuando la operacion deja de ser un cuello de botella
      </motion.p>

      <div className="grid gap-4 md:grid-cols-3">
        {KPIS.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/15 via-transparent to-[#7C3AED]/15" />
            <div className="relative space-y-2">
              <div className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                <AnimatedNumber
                  value={kpi.value}
                  suffix={kpi.suffix}
                  prefix={kpi.prefix}
                />
              </div>
              <p className="text-xs text-zinc-400">{kpi.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
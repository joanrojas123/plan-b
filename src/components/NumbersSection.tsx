"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KPIS = [
  {
    label: "reduccion en tiempo de ciclo",
    value: 32,
    display: "-32%",
    color: "#2563EB",
  },
  {
    label: "mas capacidad sin sumar headcount",
    value: 48,
    display: "+48%",
    color: "#ffffff",
  },
  {
    label: "menos tickets urgentes en 90 dias",
    value: 65,
    display: "-65%",
    color: "#2563EB",
  },
];

function Counter({ value, display }: { value: number; display: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const prefix = display.startsWith("-") ? "-" : "+";
  const suffix = "%";

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const duration = 1600;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function NumbersSection() {
  return (
    <section id="numeros" className="border-y border-white/[0.06] py-16 md:py-20">
      <div className="grid gap-px md:grid-cols-3">
        {KPIS.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-3 px-8 py-4 first:pl-0 last:pr-0 md:border-l md:border-white/[0.06] md:first:border-l-0"
          >
            <div
              className="font-display text-6xl font-normal md:text-7xl"
              style={{ color: kpi.color }}
            >
              <Counter value={kpi.value} display={kpi.display} />
            </div>
            <p className="max-w-[180px] text-sm leading-snug text-zinc-500">
              {kpi.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
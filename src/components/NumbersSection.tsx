"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KPIS = [
  { label: "menos tiempo por ciclo operativo", value: 32, prefix: "-", suffix: "%" },
  { label: "mas capacidad sin contratar", value: 48, prefix: "+", suffix: "%" },
  { label: "reduccion de urgencias en 90 dias", value: 65, prefix: "-", suffix: "%" },
];

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let step = 0;
    const steps = 50;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.floor(eased * value));
      if (step >= steps) { setCount(value); clearInterval(timer); }
    }, 1600 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function NumbersSection() {
  return (
    <section id="numeros" className="border-y border-white/[0.06] py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-3 md:gap-0">
        {KPIS.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="md:border-l md:border-white/[0.06] md:px-10 md:first:border-l-0 md:first:pl-0"
          >
            <div className="font-display mb-2 text-6xl font-normal text-white md:text-7xl">
              <Counter value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
            </div>
            <p className="max-w-[200px] text-sm leading-snug text-zinc-600">{kpi.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sparkline = (values: number[], w: number, h: number) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  return `M ${pts.join(" L ")}`;
};

function Sparkline({ values, color }: { values: number[]; color: string }) {
  const path = sparkline(values, 80, 28);
  return (
    <svg width="80" height="28" viewBox="0 0 80 28">
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LiveMetric({
  label,
  value,
  unit,
  trend,
  color,
  data,
  delay,
}: {
  label: string;
  value: number;
  unit: string;
  trend: string;
  color: string;
  data: number[];
  delay: number;
}) {
  const [current, setCurrent] = useState(value);
  const [sparkData, setSparkData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * value * 0.04;
      const next = Math.max(0, current + delta);
      setCurrent(next);
      setSparkData((prev) => [...prev.slice(1), next]);
    }, 1800 + delay * 200);
    return () => clearInterval(interval);
  }, [current, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col gap-2 rounded-xl border border-white/8 bg-white/3 p-3 backdrop-blur"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-zinc-500">
          {label}
        </span>
        <span
          className="text-[0.65rem] font-semibold"
          style={{ color }}
        >
          {trend}
        </span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="text-xl font-bold tabular-nums text-white">
          {unit === "%" ? "" : unit}
          {current.toFixed(unit === "%" ? 1 : 0)}
          {unit === "%" ? "%" : ""}
        </span>
        <Sparkline values={sparkData} color={color} />
      </div>
    </motion.div>
  );
}

function PipelineBar({
  label,
  pct,
  color,
  delay,
}: {
  label: string;
  pct: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-[0.65rem] text-zinc-500">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.12, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const METRICS = [
  {
    label: "Tickets resueltos",
    value: 847,
    unit: "",
    trend: "+12%",
    color: "#3B82F6",
    data: [700, 730, 760, 780, 800, 820, 847],
  },
  {
    label: "Tiempo de ciclo",
    value: 4.2,
    unit: "",
    trend: "-18%",
    color: "#10B981",
    data: [6.1, 5.8, 5.4, 5.0, 4.7, 4.4, 4.2],
  },
  {
    label: "SLA cumplido",
    value: 94.3,
    unit: "%",
    trend: "+3.1pp",
    color: "#7C3AED",
    data: [88, 89, 90, 91, 92, 93, 94.3],
  },
  {
    label: "Capacidad ops",
    value: 2340,
    unit: "",
    trend: "+48%",
    color: "#F59E0B",
    data: [1400, 1600, 1800, 1950, 2100, 2200, 2340],
  },
];

const PIPELINE = [
  { label: "Diagnostico completo", pct: 92, color: "#3B82F6" },
  { label: "Procesos documentados", pct: 78, color: "#10B981" },
  { label: "Automatizaciones activas", pct: 65, color: "#7C3AED" },
  { label: "Equipo habilitado", pct: 88, color: "#F59E0B" },
];

export default function DashboardSeparator() {
  return (
    <div className="relative py-4">
      {/* glow de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/6 blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-2xl border bg-[#050509]/80 backdrop-blur-xl"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        {/* header */}
        <div
          className="flex items-center justify-between border-b px-4 py-2.5"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-[0.65rem] font-medium tracking-wide text-zinc-500">
              ops-dashboard — en vivo
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10B981]" />
            <span className="text-[0.6rem] text-zinc-600">LIVE</span>
          </div>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-[1fr_auto]">
          {/* métricas */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {METRICS.map((m, i) => (
              <LiveMetric key={m.label} {...m} delay={i} />
            ))}
          </div>

          {/* pipeline separador vertical */}
          <div
            className="hidden w-px self-stretch md:block"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />

          {/* pipeline bars */}
          <div className="space-y-3 md:w-44">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-zinc-600">
              Pipeline 90d
            </span>
            {PIPELINE.map((p, i) => (
              <PipelineBar key={p.label} {...p} delay={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
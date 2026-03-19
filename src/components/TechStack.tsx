"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "Dashboards operativos", tools: "Looker Studio · Metabase · Power BI" },
  { name: "Data & almacenamiento", tools: "BigQuery · Redshift · Snowflake · PostgreSQL" },
  { name: "Integraciones & automatizacion", tools: "Make · n8n · Zapier · APIs propias" },
  { name: "Gestion de trabajo", tools: "Linear · Jira · Asana · Notion" },
  { name: "Metricas de operacion", tools: "Mixpanel · Amplitude · herramientas internas" },
  { name: "Ops + producto", tools: "Colaboramos con tu equipo de ingenieria" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2563EB]">
          Stack
        </p>
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.15] text-white md:text-5xl">
          Tecnologia al servicio{" "}
          <em className="font-display italic text-zinc-400">
            de la operacion.
          </em>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-500 md:text-base">
          Nos integramos al stack que ya tenes y proponemos mejoras donde realmente suman. No llegamos con una herramienta bajo el brazo.
        </p>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] md:grid-cols-3">
        {stack.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex flex-col gap-1.5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-sm font-medium text-white">{item.name}</h3>
            <p className="text-xs leading-relaxed text-zinc-500">{item.tools}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
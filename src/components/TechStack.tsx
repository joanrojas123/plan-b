"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "Dashboards", tools: "Looker Studio · Metabase · Power BI", use: "Construimos tableros que muestran el estado de tu operacion sin exportar un Excel." },
  { name: "Data", tools: "BigQuery · Snowflake · PostgreSQL", use: "Centralizamos tus fuentes para que todos trabajen con los mismos datos en tiempo real." },
  { name: "Automatizaciones", tools: "Make · n8n · Zapier · APIs", use: "Conectamos tus herramientas para que los datos fluyan solos entre sistemas." },
  { name: "Gestion", tools: "Linear · Jira · Asana · Notion", use: "Eliminamos el seguimiento por WhatsApp con sistemas que hacen visible el trabajo." },
  { name: "Metricas", tools: "Mixpanel · Amplitude · custom", use: "Definimos los KPIs que importan y los hacemos accesibles para quien decide." },
  { name: "Integracion", tools: "Con tu equipo de producto e ingenieria", use: "No llegamos con una herramienta fija. Nos adaptamos a lo que ya funciona." },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="font-mono text-[0.65rem] text-zinc-600">4.0</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-600">Stack</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.12] text-white md:text-5xl">
          Tecnologia que ya conoces,{" "}
          <em className="font-display italic text-zinc-500">conectada de forma que escala.</em>
        </h2>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] md:grid-cols-3">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ backgroundColor: "rgba(91,110,245,0.04)" }}
            className="group flex flex-col gap-2 bg-[#0a0a0a] p-6 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-medium text-white">{item.name}</h3>
            </div>
            <p className="text-[0.7rem] text-zinc-700">{item.tools}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.use}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
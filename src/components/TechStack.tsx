"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  GitBranch,
  Kanban,
  LayoutDashboard,
  PlugZap,
} from "lucide-react";

const stack = [
  {
    icon: LayoutDashboard,
    name: "Dashboards operativos",
    tools: "Looker Studio, Metabase, Power BI",
  },
  {
    icon: Database,
    name: "Data & almacenamiento",
    tools: "BigQuery, Redshift, Snowflake, PostgreSQL",
  },
  {
    icon: PlugZap,
    name: "Integraciones & automatización",
    tools: "Make, n8n, Zapier, APIs propias",
  },
  {
    icon: Kanban,
    name: "Gestión de trabajo",
    tools: "Linear, Jira, Asana, Notion",
  },
  {
    icon: BarChart3,
    name: "Métricas de producto y operación",
    tools: "Mixpanel, Amplitude, herramientas internas",
  },
  {
    icon: GitBranch,
    name: "Ops + producto",
    tools: "Colaboramos con tu equipo de producto e ingeniería",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7C3AED]">
          Stack tecnológico
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Tecnología al servicio de la operación, no al revés.
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          Nos integramos al stack que ya tenés y proponemos mejoras donde
          realmente suman. No llegamos con una herramienta bajo el brazo.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {stack.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-zinc-950/60 p-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 md:text-sm">{item.tools}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


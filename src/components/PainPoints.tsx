"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Loader2, Workflow } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "La operación vive en la cabeza de unas pocas personas",
    description:
      "No hay documentación clara, los procesos se sostienen por memoria y buena voluntad. Cuando alguien clave se va de vacaciones, todo se resiente.",
  },
  {
    icon: Clock3,
    title: "Siempre están apagando incendios",
    description:
      "Los líderes dedican más tiempo a resolver urgencias que a mejorar la operación. Los proyectos de fondo nunca avanzan.",
  },
  {
    icon: Loader2,
    title: "Sistemas que no conversan entre sí",
    description:
      "Muchos tools, poco flujo. Excel, WhatsApp, Slack y el ERP conviven pero no se integran. Se duplican tareas y se pierden datos.",
  },
  {
    icon: Workflow,
    title: "Difícil saber qué mejorar primero",
    description:
      "Hay muchos cuellos de botella, pero poco foco. Falta un mapa claro de prioridades y un roadmap operativo alineado al negocio.",
  },
];

export default function PainPoints() {
  return (
    <section id="dolores" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#3B82F6]">
          Cuando el crecimiento se vuelve caótico
        </p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Probablemente tu Plan A ya está al límite.
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          Trabajamos con equipos que ya validaron el mercado, pero sienten que
          la operación no está a la altura de la ambición del negocio.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {painPoints.map((pain, index) => {
          const Icon = pain.icon;
          return (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-4"
            >
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] text-white">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white md:text-base">
                  {pain.title}
                </h3>
                <p className="text-xs text-zinc-400 md:text-sm">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


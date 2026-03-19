"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    number: "01",
    title: "La operacion vive en la cabeza de unas pocas personas",
    description:
      "No hay documentacion clara. Los procesos se sostienen por memoria y buena voluntad. Cuando alguien clave se va de vacaciones, todo se resiente.",
  },
  {
    number: "02",
    title: "Siempre apagando incendios",
    description:
      "Los lideres dedican mas tiempo a resolver urgencias que a mejorar la operacion. Los proyectos de fondo nunca avanzan.",
  },
  {
    number: "03",
    title: "Sistemas que no conversan entre si",
    description:
      "Excel, WhatsApp, Slack y el ERP conviven pero no se integran. Se duplican tareas y se pierden datos criticos.",
  },
  {
    number: "04",
    title: "Dificil saber que mejorar primero",
    description:
      "Muchos cuellos de botella, poco foco. Falta un mapa claro de prioridades y un roadmap alineado al negocio.",
  },
];

export default function PainPoints() {
  return (
    <section id="dolores" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2563EB]">
          El problema
        </p>
        <h2 className="font-display max-w-2xl text-4xl font-normal leading-[1.15] text-white md:text-5xl">
          Probablemente tu Plan A{" "}
          <em className="font-display italic text-zinc-400">ya esta al limite.</em>
        </h2>
      </motion.div>

      <div className="grid gap-0 md:grid-cols-2">
        {painPoints.map((pain, index) => (
          <motion.div
            key={pain.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="group border-b border-white/[0.06] py-8 md:border-r md:border-white/[0.06] md:px-8 md:odd:border-r md:odd:pl-0 md:even:pr-0"
          >
            <span className="mb-4 block text-[0.7rem] font-medium tabular-nums tracking-[0.16em] text-zinc-600">
              {pain.number}
            </span>
            <h3 className="mb-3 text-base font-medium text-white md:text-lg">
              {pain.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              {pain.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
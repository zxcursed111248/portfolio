"use client";

import { motion } from "framer-motion";
export default function Services() {
  const services = [
    {
      title: "Создание сайтов",
      description:
        "Современные сайты для бизнеса с адаптивным дизайном и высокой скоростью.",
    },
    {
      title: "Дизайн и логотипы",
      description:
        "Создание визуального стиля, логотипов и элементов бренда.",
    },
    {
      title: "AI-инструменты",
      description:
        "Использование нейросетей для ускорения разработки и автоматизации.",
    },
  ];

  return (
    <section
  id="services"
  className="w-full max-w-6xl py-32 scroll-mt-24"
>

      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold">
          Мои услуги
        </h2>

        <p className="mt-4 text-zinc-400">
          Создаю цифровые решения, которые помогают бизнесу развиваться
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
              rounded-3xl
              border border-zinc-800
              bg-zinc-950
              p-10
              transition
              hover:-translate-y-2
              hover:border-zinc-600
            "
          >

            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-zinc-400 leading-7">
              {service.description}
            </p>

            </motion.div>
    ))}

      </div>

    </section>
  );
}
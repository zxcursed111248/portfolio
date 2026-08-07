"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "⚡",
    title: "Быстро",
    text: "От идеи до готового сайта за несколько дней.",
  },
  {
    icon: "🎨",
    title: "Современный дизайн",
    text: "Минимализм, анимации и удобный интерфейс.",
  },
  {
    icon: "🤖",
    title: "AI + разработка",
    text: "Использую современные AI-инструменты для ускорения работы.",
  },
  {
    icon: "💬",
    title: "Всегда на связи",
    text: "Поддержка и сопровождение после запуска проекта.",
  },
];

export default function WhyMe() {
  return (
    <section className="w-full max-w-6xl py-32">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Почему выбирают меня
        </h2>

        <p className="mt-4 text-zinc-400">
          Создаю сайты, которые работают на результат
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-xl
              hover:shadow-blue-500/10
            "
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-zinc-400 leading-7">
              {item.text}
            </p>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
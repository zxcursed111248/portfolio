"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Быстрый запуск",
    text: "Помогаю быстро пройти путь от идеи до готового сайта и запустить проект без лишней бюрократии.",
  },
  {
    number: "02",
    title: "Современный дизайн",
    text: "Создаю аккуратный интерфейс, который хорошо выглядит на компьютере, планшете и телефоне.",
  },
  {
    number: "03",
    title: "AI + разработка",
    text: "Использую современные AI-инструменты, чтобы ускорять разработку и уделять больше внимания качеству результата.",
  },
  {
    number: "04",
    title: "Поддержка после запуска",
    text: "После публикации сайта остаюсь на связи и помогаю с необходимыми изменениями и доработками.",
  },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Why me
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Почему выбирают меня
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Не просто создаю сайт, а помогаю превратить идею
            в современное онлайн-представление бизнеса.
          </p>
        </motion.div>

        {/* Advantages */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="
                group
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-zinc-600
                hover:shadow-2xl
                hover:shadow-black/30
                md:p-10
              "
            >
              {/* Number */}
              <div className="mb-10 text-sm tracking-[0.25em] text-zinc-600">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {item.title}
              </h3>

              {/* Text */}
              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                {item.text}
              </p>

              {/* Bottom line */}
              <div
                className="
                  mt-8
                  h-px
                  w-12
                  bg-zinc-700
                  transition-all
                  duration-500
                  group-hover:w-24
                  group-hover:bg-zinc-400
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
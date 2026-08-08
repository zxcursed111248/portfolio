"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Обсуждаем задачу",
    text: "Вы рассказываете, какой сайт нужен и какую задачу он должен решать.",
  },
  {
    number: "02",
    title: "Предлагаю решение",
    text: "Определяем структуру, дизайн, функционал и стоимость проекта.",
  },
  {
    number: "03",
    title: "Создаю сайт",
    text: "Разрабатываю проект, учитывая ваши пожелания и показываю результат.",
  },
  {
    number: "04",
    title: "Запускаем",
    text: "Публикую сайт и помогаю с необходимыми настройками после запуска.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
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
            Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Как проходит работа
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Простой и понятный процесс — от первого сообщения
            до готового сайта.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
              "
            >
              <div className="mb-10 text-sm tracking-[0.25em] text-zinc-600">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.text}
              </p>

              <div
                className="
                  mt-8
                  h-px
                  w-10
                  bg-zinc-700
                  transition-all
                  duration-500
                  group-hover:w-20
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
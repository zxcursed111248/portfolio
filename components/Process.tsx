"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Обсуждаем задачу",
    text: "Вы рассказываете о бизнесе, цели сайта и о том, что хотите получить в результате.",
  },
  {
    number: "02",
    title: "Предлагаю решение",
    text: "Продумываю структуру, визуальный стиль и необходимые функции. После этого согласовываем стоимость.",
  },
  {
    number: "03",
    title: "Создаю сайт",
    text: "Разрабатываю сайт, адаптирую его под разные устройства и показываю результат по ходу работы.",
  },
  {
    number: "04",
    title: "Запускаем",
    text: "Проверяем всё перед публикацией, запускаем сайт и при необходимости помогаю с дальнейшими настройками.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-800" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">
              Process
            </p>

            <span className="h-px w-8 bg-zinc-800" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Как проходит работа
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Простой и понятный процесс — от первого сообщения
            до готового сайта.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-12
              hidden
              h-px
              bg-zinc-800
              lg:block
            "
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                group
                relative
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-600
              "
            >
              {/* Number */}
              <div className="relative z-10 mb-10 flex items-center">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-zinc-700
                    bg-zinc-950
                    text-xs
                    font-medium
                    tracking-wider
                    text-zinc-400
                    transition-colors
                    duration-300
                    group-hover:border-zinc-400
                    group-hover:text-white
                  "
                >
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-zinc-400">
                {step.text}
              </p>

              {/* Bottom accent */}
              <div
                className="
                  mt-8
                  h-px
                  w-10
                  bg-zinc-700
                  transition-all
                  duration-300
                  group-hover:w-20
                  group-hover:bg-zinc-300
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Быстрый запуск",
    text: "От первой идеи до готового сайта без лишней бюрократии и затянутых процессов.",
  },
  {
    number: "02",
    title: "Современный дизайн",
    text: "Аккуратный и понятный интерфейс, который хорошо выглядит на компьютере, планшете и телефоне.",
  },
  {
    number: "03",
    title: "AI + разработка",
    text: "Использую современные AI-инструменты, чтобы ускорять разработку и больше внимания уделять качеству результата.",
  },
  {
    number: "04",
    title: "Поддержка после запуска",
    text: "После публикации остаюсь на связи и помогаю с необходимыми изменениями и доработками.",
  },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
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
              Why me
            </p>

            <span className="h-px w-8 bg-zinc-800" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Почему выбирают меня
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Помогаю превратить идею в современный сайт,
            который понятно представляет бизнес в интернете.
          </p>
        </motion.div>

        {/* Advantages */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
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
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-600
                md:p-10
              "
            >
              {/* Background number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-4
                  -top-8
                  text-[140px]
                  font-bold
                  leading-none
                  text-white/[0.025]
                "
              >
                {item.number}
              </span>

              {/* Number */}
              <div className="relative mb-10 flex items-center gap-4">
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
                  {item.number}
                </div>

                <div className="h-px w-8 bg-zinc-800 transition-all duration-300 group-hover:w-12 group-hover:bg-zinc-600" />
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-semibold tracking-tight md:text-3xl">
                {item.title}
              </h3>

              {/* Text */}
              <p className="relative mt-5 max-w-xl leading-7 text-zinc-400">
                {item.text}
              </p>

              {/* Accent */}
              <div
                className="
                  relative
                  mt-8
                  h-px
                  w-12
                  bg-zinc-700
                  transition-all
                  duration-300
                  group-hover:w-24
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
"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Лендинг",
    price: "от 7 000 ₽",
    description:
      "Современный одностраничный сайт для привлечения клиентов, рекламы услуги или запуска нового продукта.",
    features: [
      "Адаптивный дизайн",
      "Анимации и современный интерфейс",
      "Форма заявки",
      "Подготовка к публикации",
    ],
    time: "Срок: от 3 дней",
  },
  {
    number: "02",
    title: "Сайт для бизнеса",
    price: "от 12 000 ₽",
    description:
      "Полноценный сайт компании с услугами, преимуществами, проектами и удобной связью с клиентами.",
    features: [
      "Несколько страниц",
      "Адаптация под телефон",
      "Форма заявок",
      "Современный UI/UX",
    ],
    time: "Срок: от 5 дней",
    popular: true,
  },
  {
    number: "03",
    title: "Интернет-магазин",
    price: "от 20 000 ₽",
    description:
      "Современный интернет-магазин с каталогом товаров и удобной структурой для онлайн-продаж.",
    features: [
      "Каталог товаров",
      "Адаптивный дизайн",
      "Подготовка к онлайн-продажам",
      "Удобная структура магазина",
    ],
    time: "Срок: от 7 дней",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-800" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">
              Services
            </p>

            <span className="h-px w-8 bg-zinc-800" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Услуги
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Создаю сайты под конкретные задачи бизнеса —
            от простой посадочной страницы до полноценного
            интернет-магазина.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                md:p-9
                ${
                  service.popular
                    ? "border-zinc-500 bg-zinc-900 shadow-2xl shadow-black/40"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/30"
                }
              `}
            >
              {/* Background number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-4
                  -top-7
                  text-[130px]
                  font-bold
                  leading-none
                  text-white/[0.025]
                  transition-all
                  duration-500
                  group-hover:text-white/[0.05]
                "
              >
                {service.number}
              </span>

              {/* Popular badge */}
              {service.popular && (
                <div className="absolute right-6 top-6 rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200">
                  Популярный
                </div>
              )}

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
                    transition-all
                    duration-500
                    group-hover:border-zinc-400
                    group-hover:text-white
                  "
                >
                  {service.number}
                </div>

                <div className="h-px w-8 bg-zinc-800 transition-all duration-500 group-hover:w-12 group-hover:bg-zinc-600" />
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-semibold tracking-tight md:text-3xl">
                {service.title}
              </h3>

              {/* Price */}
              <div className="relative mt-5">
                <span className="text-3xl font-bold tracking-tight md:text-4xl">
                  {service.price}
                </span>
              </div>

              {/* Description */}
              <p className="relative mt-5 leading-7 text-zinc-400">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-700
                        text-[10px]
                        text-zinc-400
                        transition-all
                        duration-300
                        group-hover:border-zinc-500
                        group-hover:text-white
                      "
                    >
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Time */}
              <div className="relative mt-8 border-t border-zinc-800 pt-5">
                <p className="text-sm text-zinc-500">
                  {service.time}
                </p>
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="
                  relative
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-700
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  active:scale-95
                "
              >
                Обсудить проект →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-600"
        >
          Точная стоимость зависит от задач и необходимого
          функционала. Перед началом работы согласовываем
          объём проекта и итоговую цену.
        </motion.p>
      </div>
    </section>
  );
}
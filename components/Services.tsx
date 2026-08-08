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
            Services
          </p>

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
        <div className="grid gap-8 md:grid-cols-3">
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
                ${
                  service.popular
                    ? "border-zinc-500 bg-zinc-900 shadow-2xl shadow-black/30"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/30"
                }
              `}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute right-6 top-6 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200">
                  Популярный
                </div>
              )}

              {/* Number */}
              <div className="mb-10 text-sm tracking-[0.25em] text-zinc-600">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Price */}
              <p className="mt-5 text-3xl font-bold tracking-tight">
                {service.price}
              </p>

              {/* Description */}
              <p className="mt-5 leading-7 text-zinc-400">
                {service.description}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="mt-0.5 text-zinc-500">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Time */}
              <div className="mt-8 border-t border-zinc-800 pt-5">
                <p className="text-sm text-zinc-500">
                  {service.time}
                </p>
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="
                  mt-8
                  block
                  w-full
                  rounded-full
                  border
                  border-zinc-700
                  px-6
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  group-hover:border-zinc-500
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Обсудить проект →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
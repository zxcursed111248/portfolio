"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "RESTAURANT",
    title: "Сайт ресторана",
    description:
      "Современный сайт ресторана с акцентом на атмосферу заведения, меню и удобную связь с клиентами.",
    image: "/images/restaurant.jpg",
    features: [
      "Адаптивный дизайн",
      "Меню и информация о заведении",
      "Форма заявки",
    ],
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Интернет-магазин",
    description:
      "Современная концепция интернет-магазина с удобной подачей товаров и акцентом на простой пользовательский путь.",
    image: "/images/shop.jpg",
    features: [
      "Каталог товаров",
      "Адаптивный интерфейс",
      "Удобная навигация",
    ],
  },
  {
    number: "03",
    category: "BUSINESS",
    title: "Корпоративный сайт",
    description:
      "Профессиональный сайт компании для презентации услуг, формирования доверия и привлечения новых клиентов.",
    image: "/images/company.jpg",
    features: [
      "Презентация компании",
      "Структура услуг",
      "Форма связи",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl scroll-mt-24 py-32"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected work
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Мои работы
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          Демонстрационные проекты, которые показывают подход
          к дизайну и созданию современных сайтов.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-zinc-600
              hover:shadow-2xl
              hover:shadow-black/30
            "
          >
            {/* Project image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/0
                  transition-all
                  duration-500
                  group-hover:bg-black/45
                "
              >
               <Link
  href="/projects/restaurant"
  className="
    translate-y-4
    rounded-full
    border
    border-white/20
    bg-white/10
    px-6
    py-3
    text-sm
    font-medium
    text-white
    opacity-0
    backdrop-blur-md
    transition-all
    duration-500
    group-hover:translate-y-0
    group-hover:opacity-100
  "
>
  Посмотреть кейс →
</Link>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Project number */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm tracking-[0.25em] text-zinc-600">
                  {project.number}
                </span>

                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs uppercase tracking-wider text-zinc-500">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Features */}
              <div className="mt-7">
                <p className="mb-3 text-sm font-medium text-zinc-300">
                  Что сделано
                </p>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-500"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-zinc-700
                  px-6
                  py-3
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
                Обсудить похожий проект →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
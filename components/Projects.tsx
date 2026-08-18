"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "RESTAURANT",
    title: "Сайт ресторана",
    description:
      "Атмосферный сайт для ресторана с акцентом на визуальную подачу, меню и удобное взаимодействие с посетителями.",
    image: "/images/restaurant.jpg",
    href: "/projects/restaurant",
    features: [
      "Адаптивный дизайн",
      "Презентация меню и заведения",
      "Форма заявки",
    ],
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Интернет-магазин",
    description:
      "Современный интернет-магазин с понятной структурой, удобной навигацией и акцентом на презентацию товаров.",
    image: "/images/shop.jpg",
    href: "/projects/shop",
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
    href: "/projects/company",
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
      className="w-full scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-800" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">
              Selected work
            </p>

            <span className="h-px w-8 bg-zinc-800" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Мои работы
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Примеры сайтов, которые можно адаптировать
            под разные задачи бизнеса — от презентации
            компании до онлайн-продаж.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-600
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Number */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/40
                    text-xs
                    font-medium
                    text-white
                  "
                >
                  {project.number}
                </div>

                {/* Category */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    rounded-full
                    border
                    border-white/15
                    bg-black/40
                    px-3
                    py-1.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-zinc-300
                  "
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-zinc-900" />

                {/* Features */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Что входит
                  </p>

                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-zinc-400"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-[10px] text-zinc-500">
                          ✓
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={project.href}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-sm
                      font-medium
                      text-black
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-zinc-200
                      active:scale-95
                    "
                  >
                    Посмотреть кейс
                    <span className="ml-2">→</span>
                  </Link>

                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
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
                    Обсудить проект
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
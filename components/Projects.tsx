"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Сайт ресторана",
    description:
      "Современный сайт ресторана с меню, фотографиями и удобной формой заявки.",
    
    image: "/images/restaurant.jpg",
    result:
      "Презентация ресторана и удобная связь с клиентами",
  },
  {
    number: "02",
    title: "Интернет-магазин",
    description:
      "Современный интернет-магазин с каталогом товаров и удобным интерфейсом.",
    
    image: "/images/shop.jpg",
    result:
      "Удобная структура каталога для онлайн-продаж",
  },
  {
    number: "03",
    title: "Корпоративный сайт",
    description:
      "Сайт компании для презентации услуг и привлечения новых клиентов.",
    
    image: "/images/company.jpg",
    result:
      "Профессиональная презентация компании в интернете",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Мои работы
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Примеры проектов и решений, которые я создаю
            для бизнеса.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-3">
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
                hover:shadow-black/40
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    transition-all
                    duration-500
                    group-hover:bg-black/0
                  "
                />

                {/* Project number */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/10
                    bg-black/50
                    px-4
                    py-2
                    text-xs
                    tracking-[0.2em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  {project.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Result */}
                <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Результат
                  </p>

                  <p className="text-sm leading-6 text-zinc-300">
                    {project.result}
                  </p>
                </div>

               
                {/* Button */}
                <a
                  href="#contact"
                  className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-zinc-700
                    py-3
                    font-medium
                    transition-all
                    duration-300
                    group-hover:border-zinc-500
                    hover:bg-white
                    hover:text-black
                    active:scale-[0.98]
                  "
                >
                  Обсудить похожий проект
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
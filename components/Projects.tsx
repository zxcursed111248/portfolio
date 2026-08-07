"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Сайт ресторана",
      description:
        "Современный лендинг для ресторана с меню, фотографиями и формой бронирования.",
      tech: "Next.js • Tailwind CSS",
      image: "/images/restaurant.jpg",
    },
    {
      title: "Интернет-магазин",
      description:
        "Быстрый магазин с удобным каталогом товаров и современным дизайном.",
      tech: "React • TypeScript",
      image: "/images/shop.jpg",
    },
    {
      title: "Корпоративный сайт",
      description:
        "Сайт компании для привлечения клиентов и презентации услуг.",
      tech: "Next.js • AI",
      image: "/images/company.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-6xl py-32 scroll-mt-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Мои работы
        </h2>

        <p className="mt-4 text-zinc-400">
          Примеры проектов и решений, которые я создаю
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              rounded-3xl
              border border-zinc-800
              bg-zinc-950
              p-8
              transition-all
              duration-300
              hover:-translate-y-3
              hover:border-zinc-500
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >
           <div className="relative overflow-hidden rounded-2xl mb-6 group">

<img
  src={project.image}
  alt={project.title}
  className="
    w-full
    h-48
    object-cover
    transition
    duration-500
    group-hover:scale-110
  "
/>

<div
  className="
    absolute
    inset-0
    bg-black/60
    opacity-0
    group-hover:opacity-100
    transition
    duration-300
    flex
    items-center
    justify-center
  "
>

  <button
    className="
      px-6
      py-3
      rounded-full
      bg-white
      text-black
      font-semibold
      hover:scale-105
      transition
    "
  >
    Посмотреть →
  </button>

</div>

</div>

            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-5">
              {project.description}
            </p>

            <p className="text-sm text-zinc-500 mb-6">
              {project.tech}
            </p>

            <button
  className="
    w-full
    rounded-xl
    border
    border-zinc-700
    py-3
    font-medium
    transition-all
    duration-300
    hover:bg-white
    hover:text-black
    hover:border-white
    active:scale-95
  "
>
  Посмотреть проект →
</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
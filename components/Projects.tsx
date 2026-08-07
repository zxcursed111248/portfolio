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
              hover:-translate-y-2
              hover:border-zinc-600
              transition
            "
          >

            <div className="overflow-hidden rounded-2xl mb-6">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-48
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />

            </div>


            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>


            <p className="text-zinc-400 mb-5">
              {project.description}
            </p>


            <p className="text-sm text-zinc-500">
              {project.tech}
            </p>


          </motion.div>
        ))}

      </div>

    </section>
  );
}
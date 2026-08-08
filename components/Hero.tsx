"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-zinc-700" />

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            AI Web Studio
          </p>

          <span className="h-px w-8 bg-zinc-700" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Создаю сайты,
          <br />
          которые{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            помогают бизнесу расти
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
        >
          Современные сайты, дизайн и AI-решения для бизнеса —
          от идеи до готового продукта.
        </motion.p>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6"
        >
          <span className="text-sm text-zinc-500">
            Создание сайта
          </span>

          <span className="ml-2 font-semibold text-white">
            от 7 000 ₽
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="
              rounded-full
              bg-white
              px-8
              py-3.5
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-white/20
            "
          >
            Обсудить проект
          </a>

          <a
            href="#projects"
            className="
              rounded-full
              border
              border-zinc-700
              px-8
              py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:border-zinc-500
              hover:bg-white/5
            "
          >
            Посмотреть работы
          </a>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="mt-8 text-sm text-zinc-500"
        >
          Отвечаю на заявки и начинаю работу после обсуждения задачи
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-3 text-zinc-600"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-zinc-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
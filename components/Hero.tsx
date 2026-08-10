"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full scroll-mt-24 overflow-hidden pt-28 md:pt-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-zinc-700" />

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
            AI Web Studio
          </p>

          <span className="h-px w-10 bg-zinc-700" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            max-w-5xl
            text-5xl
            font-bold
            leading-[1.02]
            tracking-[-0.04em]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
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
          transition={{ duration: 0.9, delay: 0.1 }}
          className="
            mx-auto
            mt-9
            max-w-2xl
            text-base
            leading-8
            text-zinc-400
            md:text-lg
          "
        >
          Современные сайты и AI-решения для бизнеса —
          <br className="hidden sm:block" />
          от идеи до готового продукта.
        </motion.p>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 flex items-center justify-center gap-2"
        >
          <span className="text-sm text-zinc-500">
            Сайт для бизнеса
          </span>

          <span className="text-sm font-semibold text-white">
            от 7 000 ₽
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="
            mt-11
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <a
            href="#contact"
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-white
              px-8
              py-3.5
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-zinc-200
              hover:shadow-xl
              hover:shadow-white/10
              active:scale-95
              sm:w-auto
            "
          >
            Обсудить проект
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#projects"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-zinc-700
              bg-black/20
              px-8
              py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:border-zinc-500
              hover:bg-white/5
              active:scale-95
              sm:w-auto
            "
          >
            Посмотреть работы
          </a>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="
            mx-auto
            mt-8
            max-w-xl
            text-sm
            leading-6
            text-zinc-600
          "
        >
          Обсудим задачу, предложу решение и назову точную
          стоимость до начала работы.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="
            mt-16
            hidden
            flex-col
            items-center
            gap-3
            text-zinc-700
            sm:flex
          "
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-9 w-px bg-zinc-800"
          />
        </motion.div>
      </div>
    </section>
  );
}


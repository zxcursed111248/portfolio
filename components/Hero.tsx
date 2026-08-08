"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="home"
  className="w-full scroll-mt-24 pt-24"
>
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
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
          className="
            text-5xl
            font-bold
            leading-[1.05]
            tracking-tight
            text-white
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
          transition={{ duration: 0.9 }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-zinc-400
            md:text-lg
          "
        >
          Современные сайты и AI-решения для бизнеса —
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
            Сайт для бизнеса
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
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
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
              hover:bg-zinc-200
              hover:shadow-xl
              hover:shadow-white/20
              active:scale-95
            "
          >
            Обсудить проект →
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
              active:scale-95
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
          Обсудим задачу, предложу решение и назову точную стоимость
          до начала работы.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="
            mt-14
            hidden
            flex-col
            items-center
            gap-3
            text-zinc-600
            sm:flex
          "
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
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-4xl text-center relative z-10 pt-20">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-6"
      >
        AI Web Studio
      </motion.p>


      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Создаю сайты,
        <br />
        которые помогают бизнесу расти
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto"
      >
        Современный дизайн, высокая скорость и AI-инструменты.
        Создаю сайты, которые помогают компаниям получать клиентов.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 flex gap-4 justify-center"
      >

<a
href="#projects"
className="
rounded-full
bg-white
text-black
px-8
py-3
font-medium
transition-all
duration-300
hover:scale-105
hover:shadow-xl
hover:shadow-white/20
"
>
Мои работы
</a>


<a
href="#contact"
className="
rounded-full
border
border-zinc-700
px-8
py-3
font-medium
transition-all
duration-300
hover:scale-105
hover:border-blue-500
hover:bg-blue-500/10
"
>
Связаться
</a>

      </motion.div>

    </section>
  );
}
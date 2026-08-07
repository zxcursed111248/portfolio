"use client";

import { motion } from "framer-motion";
export default function Contact() {
    return (
      <section
        id="contact"
        className="w-full max-w-6xl py-32"
      >
  
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-12 text-center"
>
  
          <h2 className="text-4xl md:text-5xl font-bold">
            Давайте создадим что-то вместе
          </h2>
  
  
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-7">
            Есть идея для сайта или цифрового проекта?
            Расскажите о своей задаче, и я помогу создать современное решение.
          </p>
  
  
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
  
            <a
              href="mailto:example@mail.com"
              className="
                rounded-full
                bg-white
                text-black
                px-8
                py-3
                font-medium
                hover:bg-zinc-200
                transition
              "
            >
              Написать мне
            </a>
  
  
            <a
              href="#projects"
              className="
                rounded-full
                border
                border-zinc-700
                px-8
                py-3
                font-medium
                hover:bg-zinc-900
                transition
              "
            >
              Посмотреть работы
            </a>
  
          </div>
  
  
          <div className="mt-10 text-sm text-zinc-500">
  
            <p>
              Email: example@mail.com
            </p>
  
            <p className="mt-2">
              Telegram: @your_username
            </p>
  
          </div>
  
  
          </motion.div>
      </section>
    );
  }
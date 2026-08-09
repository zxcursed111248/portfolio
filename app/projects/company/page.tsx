"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CompanyProject() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Link
            href="/#projects"
            className="inline-flex text-sm text-zinc-500 transition hover:text-white"
          >
            ← Вернуться к работам
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-16 max-w-4xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              03 / Business
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Корпоративный сайт
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Профессиональный сайт компании для презентации
              услуг, формирования доверия и привлечения новых
              клиентов.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl shadow-black/50"
          >
            <img
              src="/images/company.jpg"
              alt="Концепт корпоративного сайта"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project information */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              О проекте
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Что было сделано
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-400">
              Основная задача проекта — создать современное
              цифровое представление компании, которое понятно
              показывает её услуги, преимущества и помогает
              потенциальному клиенту принять решение о сотрудничестве.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Адаптивная версия для всех устройств",
                "Презентация компании и её преимуществ",
                "Структурированная подача услуг",
                "Современный UI/UX",
                "Форма связи с потенциальными клиентами",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-zinc-900 pb-5"
                >
                  <span className="h-2 w-2 rounded-full bg-zinc-600" />

                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center md:p-16">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Хотите похожий сайт?
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
            Давайте создадим сайт для вашей компании
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
            Расскажите о компании и ваших задачах — обсудим
            структуру, дизайн и предложим подходящее решение.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200 active:scale-95"
          >
            Обсудить проект →
          </Link>
        </div>
      </section>
    </main>
  );
}
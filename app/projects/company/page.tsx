"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Доверие",
    text: "Профессиональная визуальная подача помогает компании сформировать сильное первое впечатление.",
  },
  {
    number: "02",
    title: "Услуги",
    text: "Структурированная информация позволяет быстро понять, чем занимается компания.",
  },
  {
    number: "03",
    title: "Адаптивность",
    text: "Сайт одинаково удобно выглядит и работает на компьютерах, планшетах и смартфонах.",
  },
  {
    number: "04",
    title: "Конверсия",
    text: "Понятные точки контакта помогают потенциальному клиенту перейти от знакомства к обращению.",
  },
];

export default function CompanyProject() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-black to-black" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
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
              Современный корпоративный сайт для презентации компании,
              её услуг и преимуществ, который помогает сформировать
              доверие и привлечь новых клиентов.
            </p>
          </motion.div>

          {/* Main image */}
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

      {/* Project overview */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.5fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Задача
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Представить компанию профессионально
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Основная задача проекта — создать цифровое представление
              компании, которое с первых секунд показывает её уровень,
              направление работы и основные преимущества.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">
              Важной частью концепции стала простая структура: посетитель
              должен быстро понять, чем занимается компания, какие услуги
              она предлагает и как с ней связаться.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Решение
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Сайт, который формирует доверие
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
              В основе дизайна — строгая визуальная система, понятная
              иерархия информации и акцент на тех элементах, которые
              действительно важны потенциальному клиенту.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black p-8 md:p-10"
              >
                <span className="text-sm tracking-[0.25em] text-zinc-600">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual block */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Визуальная концепция
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Современный образ компании
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Визуальная система построена вокруг минимализма,
              аккуратной типографики и свободного пространства.
              Это позволяет создать ощущение серьёзного и современного
              бизнеса.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              При этом интерфейс остаётся достаточно простым, чтобы
              посетитель не терялся среди большого количества информации
              и мог быстро перейти к нужному разделу.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <img
              src="/images/company.jpg"
              alt="Визуальная концепция корпоративного сайта"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Company structure */}
      <section className="border-y border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Структура
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
              Всё необходимое — в правильном порядке
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
              Страница последовательно знакомит пользователя с компанией,
              её услугами и преимуществами, после чего предлагает связаться
              и обсудить задачу.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "О компании",
              "Услуги",
              "Преимущества",
              "Контакты",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
              >
                <span className="text-sm tracking-[0.25em] text-zinc-600">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {step}
                </h3>

                <div className="mt-6 h-px w-full bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                Результат
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Цифровая визитка, которая работает на компанию
              </h2>
            </div>

            <p className="leading-8 text-zinc-400">
              В результате получился современный корпоративный сайт,
              который объединяет презентацию компании, понятную структуру
              услуг и удобные точки контакта с потенциальными клиентами.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="rounded-3xl border border-zinc-800 bg-white p-8 text-center text-black md:p-16">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Следующий проект может быть вашим
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
            Давайте создадим сайт для вашей компании
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-600">
            Расскажите о компании и вашей задаче — обсудим структуру,
            дизайн и предложим подходящее решение.
          </p>

          <Link
            href="/#contact"
            className="
              mt-8
              inline-flex
              rounded-full
              bg-black
              px-8
              py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-zinc-800
              active:scale-95
            "
          >
            Обсудить проект →
          </Link>

          <div className="mt-8">
            <Link
              href="/#projects"
              className="text-sm text-zinc-500 transition hover:text-black"
            >
              ← Вернуться ко всем работам
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
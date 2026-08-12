"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Атмосфера",
    text: "Визуальная подача сразу передаёт стиль и настроение ресторана.",
  },
  {
    number: "02",
    title: "Меню",
    text: "Посетитель быстро получает доступ к основной информации и предложениям.",
  },
  {
    number: "03",
    title: "Адаптивность",
    text: "Сайт одинаково удобно работает на компьютерах, планшетах и смартфонах.",
  },
  {
    number: "04",
    title: "Связь",
    text: "Понятные точки контакта помогают посетителю быстро связаться с заведением.",
  },
];

export default function RestaurantProject() {
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
              01 / Restaurant
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Сайт ресторана
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Современный сайт ресторана, который передаёт атмосферу
              заведения, знакомит посетителя с меню и помогает
              превратить интерес в реального клиента.
            </p>
          </motion.div>

          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl shadow-black/50"
          >
            <Image
  src="/images/restaurant.jpg"
  alt="Концепт сайта ресторана"
  width={1600}
  height={1000}
  priority
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
              Создать первое впечатление онлайн
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Главная задача проекта — создать цифровое представление
              ресторана, которое с первых секунд передаёт его характер
              и помогает потенциальному гостю получить ответы на основные
              вопросы.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">
              Вместо перегруженной страницы был выбран минималистичный
              подход: крупная визуальная подача, понятная структура,
              акцент на меню и простые способы связи.
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
              Дизайн, который работает на бизнес
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
              Структура страницы построена вокруг главных действий
              посетителя: узнать о ресторане, посмотреть меню,
              ознакомиться с заведением и связаться с ним.
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
              Минимализм без лишнего
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Визуальная система построена так, чтобы контент оставался
              главным элементом страницы. Крупные изображения, свободное
              пространство и аккуратная типографика создают ощущение
              современного премиального продукта.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
          <Image
  src="/images/restaurant.jpg"
  alt="Визуальная концепция сайта ресторана"
  width={1600}
  height={1000}
  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
/>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                Результат
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Сайт, который помогает продавать впечатление
              </h2>
            </div>

            <p className="leading-8 text-zinc-400">
              В результате получился современный концепт сайта ресторана,
              который сочетает визуальную привлекательность, понятную
              структуру и удобный путь пользователя от первого знакомства
              до обращения в заведение.
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
            Давайте создадим сайт для вашего бизнеса
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-600">
            Расскажите о задаче — обсудим идею, подберём подходящее
            решение и определим стоимость проекта.
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
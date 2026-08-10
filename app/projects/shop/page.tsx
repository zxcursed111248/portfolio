"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Каталог",
    text: "Понятная структура товаров помогает пользователю быстро найти нужную категорию.",
  },
  {
    number: "02",
    title: "Навигация",
    text: "Продуманный пользовательский путь сокращает количество лишних действий.",
  },
  {
    number: "03",
    title: "Адаптивность",
    text: "Интерфейс одинаково удобно работает на компьютерах, планшетах и смартфонах.",
  },
  {
    number: "04",
    title: "Продажи",
    text: "Каждый элемент страницы направлен на знакомство с товаром и дальнейшее действие.",
  },
];

export default function ShopProject() {
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
              02 / E-Commerce
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Интернет-магазин
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Современный интернет-магазин с понятной структурой
              каталога, удобной навигацией и акцентом на комфортный
              путь пользователя от просмотра товара до покупки.
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
              src="/images/shop.jpg"
              alt="Концепт интернет-магазина"
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
              Сделать покупки проще
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Основная задача проекта — создать современное цифровое
              пространство для магазина, в котором пользователь сможет
              быстро разобраться в ассортименте и найти интересующий
              его товар.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500 md:text-lg">
              В основе концепции лежит простой пользовательский путь:
              категория → товар → подробная информация → действие.
              Никаких лишних элементов, которые отвлекают от покупки.
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
              Интерфейс, который ведёт пользователя к покупке
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
              Все основные элементы магазина выстроены вокруг удобства
              пользователя: понятные категории, визуальная подача
              товаров, простая навигация и заметные точки взаимодействия.
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
          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <img
              src="/images/shop.jpg"
              alt="Визуальная концепция интернет-магазина"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Визуальная концепция
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Товар всегда остаётся главным
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Дизайн не конкурирует с ассортиментом. Чистая композиция,
              свободное пространство и аккуратная типографика позволяют
              сосредоточить внимание пользователя именно на товарах.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              Такой подход особенно хорошо подходит для магазинов,
              которым важно одновременно показать большое количество
              товаров и сохранить ощущение премиального интерфейса.
            </p>
          </div>
        </div>
      </section>

      {/* User journey */}
      <section className="border-y border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Пользовательский путь
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
              От первого взгляда до покупки
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "Выбор категории",
              "Поиск товара",
              "Изучение предложения",
              "Покупка",
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
                Магазин, в котором легко ориентироваться
              </h2>
            </div>

            <p className="leading-8 text-zinc-400">
              В результате получился современный концепт интернет-магазина,
              объединяющий визуальную подачу товаров, понятную структуру
              и продуманный пользовательский путь.
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
            Давайте создадим интернет-магазин для вашего бизнеса
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-600">
            Расскажите о товарах и задаче — обсудим структуру,
            дизайн и возможности проекта.
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
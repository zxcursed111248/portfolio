"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Отправляем...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Не удалось отправить заявку");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("Заявка успешно отправлена! Я свяжусь с вами.");
    } catch {
      setStatus("Произошла ошибка. Попробуйте ещё раз.");
    }
  }

  return (
    <section
      id="contact"
      className="w-full max-w-4xl py-32 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950
          p-8
          md:p-12
        "
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Давайте создадим что-то вместе
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-7">
            Есть идея для сайта или цифрового проекта?
            Расскажите о своей задаче, и я помогу создать современное решение.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Ваше имя
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Иван"
              required
              className="
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Расскажите о проекте
            </label>

            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Например: нужен сайт для ресторана..."
              required
              className="
                w-full
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                px-5
                py-4
                text-white
                outline-none
                transition
                resize-none
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-full
              bg-white
              text-black
              px-8
              py-4
              font-medium
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-zinc-200
              hover:shadow-xl
              hover:shadow-white/10
            "
          >
            Отправить заявку
          </button>

          {status && (
            <p className="text-center text-sm text-zinc-400">
              {status}
            </p>
          )}
        </form>

        <div className="mt-10 text-center text-sm text-zinc-500">
          <p>Ответим в течение рабочего дня</p>
        </div>
      </motion.div>
    </section>
  );
}
"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent) {
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
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
            p-8
            md:p-12
          "
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />

          {/* Heading */}
          <div className="relative text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Давайте создадим
              <br />
              что-то вместе
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
              Есть идея для сайта или цифрового проекта?
              Расскажите о своей задаче, и я помогу создать
              современное решение.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative mt-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
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
                  bg-zinc-900/70
                  px-5
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-zinc-500
                  focus:bg-zinc-900
                  focus:ring-1
                  focus:ring-zinc-500
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
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
                  bg-zinc-900/70
                  px-5
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-zinc-500
                  focus:bg-zinc-900
                  focus:ring-1
                  focus:ring-zinc-500
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
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
                  resize-none
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-900/70
                  px-5
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  transition-all
                  duration-300
                  focus:border-zinc-500
                  focus:bg-zinc-900
                  focus:ring-1
                  focus:ring-zinc-500
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full
                rounded-full
                bg-white
                px-8
                py-4
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-zinc-200
                hover:shadow-xl
                hover:shadow-white/10
                active:scale-[0.98]
              "
            >
              Отправить заявку →
            </button>

            {/* Status */}
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-zinc-400"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
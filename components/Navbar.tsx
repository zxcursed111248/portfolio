"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-zinc-800/80
          bg-zinc-950/80
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="
            text-sm
            font-semibold
            tracking-[0.2em]
            text-white
            transition-opacity
            hover:opacity-70
          "
        >
          AI WEB STUDIO
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <Link
            href="#home"
            className="transition-colors hover:text-white"
          >
            Главная
          </Link>

          <Link
            href="#services"
            className="transition-colors hover:text-white"
          >
            Услуги
          </Link>

          <Link
            href="#projects"
            className="transition-colors hover:text-white"
          >
            Работы
          </Link>

          <Link
            href="#why-me"
            className="transition-colors hover:text-white"
          >
            Почему я
          </Link>

          <Link
            href="#contact"
            className="transition-colors hover:text-white"
          >
            Контакты
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="
            hidden
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-zinc-200
            hover:shadow-lg
            hover:shadow-white/10
            sm:block
          "
        >
          Обсудить проект
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-zinc-800
            text-zinc-300
            transition
            hover:border-zinc-600
            hover:text-white
            md:hidden
          "
          aria-label="Открыть меню"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`
                block
                h-px
                w-4
                bg-current
                transition-transform
                duration-300
                ${isOpen ? "translate-y-[3px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block
                h-px
                w-4
                bg-current
                transition-transform
                duration-300
                ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="
            mx-4
            mt-2
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950/95
            p-4
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col">
            <Link
              href="#home"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Главная
            </Link>

            <Link
              href="#services"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Услуги
            </Link>

            <Link
              href="#projects"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Работы
            </Link>

            <Link
              href="#why-me"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Почему я
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
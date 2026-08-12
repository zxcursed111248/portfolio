import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="#home"
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

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Создаю современные сайты и цифровые решения
              для бизнеса.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Навигация
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="#home"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Главная
              </Link>

              <Link
                href="#services"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Услуги
              </Link>

              <Link
                href="#projects"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Работы
              </Link>

              <Link
                href="#why-me"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Почему я
              </Link>

              <Link
                href="#contact"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-900 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AI Web Studio. Все права защищены.</p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-300"
            >
              Политика конфиденциальности
            </Link>

            <p>Создано с помощью AI + кода</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
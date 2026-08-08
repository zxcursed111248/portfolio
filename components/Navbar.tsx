import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight hover:text-zinc-300 transition"
        >
          AI WEB STUDIO
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <Link
            href="#home"
            className="hover:text-white transition"
          >
            Главная
          </Link>

          <Link
            href="#services"
            className="hover:text-white transition"
          >
            Услуги
          </Link>

          <Link
            href="#projects"
            className="hover:text-white transition"
          >
            Работы
          </Link>

          <Link
            href="#contact"
            className="hover:text-white transition"
          >
            Контакты
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="
            hidden sm:block
            rounded-full
            bg-white
            text-black
            px-5
            py-2
            text-sm
            font-medium
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            hover:shadow-white/20
          "
        >
          Заказать сайт
        </Link>
      </div>
    </nav>
  );
}
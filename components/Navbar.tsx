import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl flex justify-between items-center py-8">

      <div className="text-xl font-bold">
        AI WEB STUDIO
      </div>

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

    </nav>
  );
}
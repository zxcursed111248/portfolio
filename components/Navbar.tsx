export default function Navbar() {
    return (
      <nav className="w-full max-w-6xl flex justify-between items-center py-8">
  
        <div className="text-xl font-bold">
          AI WEB STUDIO
        </div>
  
        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#">Главная</a>
          <a href="#">Услуги</a>
          <a href="#">Работы</a>
          <a href="#">Контакты</a>
        </div>
  
  
      </nav>
    );
  }
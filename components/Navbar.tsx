export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
  
          <div className="text-xl font-bold">
            AI WEB STUDIO
          </div>
  
          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#">Главная</a>
            <a href="#">Услуги</a>
            <a href="#">Работы</a>
            <a href="#">Контакты</a>
          </div>
  
        </div>
      </nav>
    );
  }
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-4xl text-center">
        
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-6">
          AI Web Studio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Создаю современные сайты
          <br />
          для бизнеса
        </h1>

        <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto">
          Разрабатываю быстрые, красивые и функциональные сайты
          с использованием современных технологий и искусственного интеллекта.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-zinc-200 transition">
            Мои работы
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-3 font-medium hover:bg-zinc-900 transition">
            Связаться
          </button>
        </div>

      </section>
    </main>
  );
}
export default function L2Page() {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#f7f2f1] text-[#211d1e]">
        {/* Header */}
        <header className="border-b border-[#211d1e]/10 bg-[#f7f2f1]/95">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
            <a
              href="/"
              className="text-sm font-semibold tracking-[0.25em]"
            >
              AI WEB STUDIO
            </a>
  
            <nav className="hidden items-center gap-8 text-sm text-[#211d1e]/60 md:flex">
              <a href="#about" className="transition hover:text-[#211d1e]">
                О пространстве
              </a>
  
              <a href="#services" className="transition hover:text-[#211d1e]">
                Услуги
              </a>
  
              <a href="#masters" className="transition hover:text-[#211d1e]">
                Для мастеров
              </a>
            </nav>
  
            <a
              href="#contact"
              className="rounded-full bg-[#211d1e] px-5 py-3 text-xs font-medium text-white transition hover:scale-[1.03]"
            >
              Стать резидентом
            </a>
          </div>
        </header>
  
        {/* Concept label */}
        <div className="border-b border-[#211d1e]/10">
          <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#211d1e]/40">
              Концепция сайта · L2 Beauty Coworking
            </p>
          </div>
        </div>
  
        {/* Hero */}
        <section className="px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b77f8d]">
                  Beauty space · Краснодар
                </p>
  
                <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                  Пространство
                  <br />
                  <span className="text-[#b77f8d]">для красоты.</span>
                </h1>
  
                <p className="mt-8 max-w-xl text-base leading-7 text-[#211d1e]/60 md:text-lg">
                Современное бьюти-пространство для мастеров и клиентов.
Всё необходимое для красоты — в одном месте.
                </p>
  
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#211d1e] px-7 py-4 text-center text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Стать резидентом →
                  </a>
  
                  <a
                    href="#services"
                    className="rounded-full border border-[#211d1e]/20 px-7 py-4 text-center text-sm font-medium transition hover:border-[#b77f8d]"
                  >
                    Посмотреть услуги
                  </a>
                </div>
              </div>
  
              {/* Image placeholder */}
              <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#e6cdd3] sm:min-h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#211d1e]/40">
                      Фото пространства
                    </p>
  
                    <p className="mt-3 text-sm text-[#211d1e]/50">
                      Здесь будет реальная фотография L2
                    </p>
                  </div>
                </div>
  
                <div className="absolute bottom-5 left-5 rounded-full bg-[#f7f2f1]/90 px-4 py-2 text-xs text-[#211d1e]/70 backdrop-blur">
                  Фестивальная, 6 · Краснодар
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Intro */}
        <section
          id="about"
          className="border-t border-[#211d1e]/10 px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b77f8d]">
                О пространстве
              </p>
  
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
                Не просто место.
                <br />
                Своя среда.
              </h2>
            </div>
  
            <div className="flex flex-col justify-end">
              <p className="text-lg leading-8 text-[#211d1e]/60 md:text-xl">
                L2 объединяет специалистов разных направлений индустрии
                красоты в одном современном пространстве.
              </p>
  
              <p className="mt-6 text-base leading-7 text-[#211d1e]/50">
                Здесь можно работать, развиваться и создавать комфортный
                опыт для своих клиентов.
              </p>
            </div>
          </div>
        </section>
  
        {/* Services */}
        <section
          id="services"
          className="px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b77f8d]">
                  Направления
                </p>
  
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                  Всё для красоты
                </h2>
              </div>
  
              <p className="max-w-sm text-sm leading-6 text-[#211d1e]/50">
                Несколько направлений в одном пространстве —
                для мастеров и их клиентов.
              </p>
            </div>
  
            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-[2rem] bg-white/65 p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b77f8d]">
                · Hair
                </p>
  
                <h3 className="mt-8 text-2xl font-semibold">
                  Парикмахерские
                </h3>
  
                <p className="mt-5 text-sm leading-7 text-[#211d1e]/55">
                  Стрижки, окрашивание, наращивание, реконструкция
                  и другие услуги для волос.
                </p>
  
                <div className="mt-8 border-t border-[#211d1e]/10 pt-5 text-sm text-[#211d1e]/50">
                  Женская стрижка от 2000 ₽
                  <br />
                  Мужская стрижка от 1200 ₽
                </div>
              </article>
  
              <article className="rounded-[2rem] bg-white/65 p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b77f8d]">
                · Nails
                </p>
  
                <h3 className="mt-8 text-2xl font-semibold">
                  Ногтевой сервис
                </h3>
  
                <p className="mt-5 text-sm leading-7 text-[#211d1e]/55">
                  Маникюр, педикюр, гель-лак и наращивание гелем.
                </p>
  
                <div className="mt-8 border-t border-[#211d1e]/10 pt-5 text-sm text-[#211d1e]/50">
                  Аппаратный маникюр
                  <br />
                  Женский педикюр
                </div>
              </article>
  
              <article className="rounded-[2rem] bg-white/65 p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b77f8d]">
                · Beauty
                </p>
  
                <h3 className="mt-8 text-2xl font-semibold">
                  Ресницы и брови
                </h3>
  
                <p className="mt-5 text-sm leading-7 text-[#211d1e]/55">
                  Наращивание и ламинирование ресниц,
                  коррекция и окрашивание бровей.
                </p>
  
                <div className="mt-8 border-t border-[#211d1e]/10 pt-5 text-sm text-[#211d1e]/50">
                  Ламинирование
                  <br />
                  Окрашивание
                </div>
              </article>
            </div>
          </div>
        </section>
  
        {/* Masters */}
        <section
          id="masters"
          className="border-t border-[#211d1e]/10 px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] bg-[#e6cdd3] p-8 md:p-14 lg:p-20">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9e6877]">
                  Для мастеров
                </p>
  
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                  Работайте
                  <br />
                  на своих условиях.
                </h2>
  
                <p className="mt-7 max-w-2xl text-base leading-7 text-[#211d1e]/60 md:text-lg">
                  Пространство L2 создано для специалистов индустрии
                  красоты, которые хотят работать самостоятельно
                  и развивать своё направление.
                </p>
  
                <a
                  href="#contact"
                  className="mt-9 inline-flex rounded-full bg-[#211d1e] px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Узнать об условиях →
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section
          id="contact"
          className="px-5 py-24 md:px-8 md:py-36"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b77f8d]">
              L2 · Краснодар
            </p>
  
            <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
              Готовы стать
              <br />
              частью L2?
            </h2>
  
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#211d1e]/55 md:text-lg">
              Узнайте подробнее о пространстве и возможностях
              сотрудничества.
            </p>
  
            <a
              href="/"
              className="mt-9 inline-flex rounded-full bg-[#211d1e] px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Связаться с L2 →
            </a>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="border-t border-[#211d1e]/10 px-5 py-8 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#211d1e]/40 sm:flex-row sm:items-center sm:justify-between">
            <span>L2 · Концепция сайта</span>
  
            <a
              href="/"
              className="transition hover:text-[#211d1e]"
            >
              AI WEB STUDIO
            </a>
          </div>
        </footer>
      </main>
    );
  }
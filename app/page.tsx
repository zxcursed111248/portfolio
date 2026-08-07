import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center px-6">
  
      <Navbar />
  
      <section className="max-w-4xl text-center pt-32">
  
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-6">
          AI Web Studio
        </p>
  
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Создаю сайты,
          <br />
          которые помогают бизнесу расти
        </h1>
  
        <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto">
          Современный дизайн, высокая скорость и AI-инструменты.
          Создаю сайты, которые помогают компаниям получать клиентов.
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
  
      <Services />
  
    </main>
  );}
import WhyMe from "@/components/WhyMe";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      id="home"
      className="
        min-h-screen
        bg-zinc-950
        text-white
        flex
        flex-col
        items-center
        px-6
        overflow-hidden
        relative
      "
    >

      {/* Верхнее свечение */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          bg-blue-500/30
          rounded-full
          blur-[150px]
          animate-pulse
          z-0
        "
      />

      {/* Нижнее свечение */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-purple-500/30
          rounded-full
          blur-[150px]
          animate-pulse
          z-0
        "
      />


      <Navbar />

      <div className="relative z-10 w-full flex flex-col items-center">

        <Hero />

        <Services />

        <Projects />

        <WhyMe />

        <Contact />

      </div>

    </main>
  );
}
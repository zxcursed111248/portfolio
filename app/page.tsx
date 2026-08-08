import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* Верхнее свечение */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[150px]
        "
      />

      {/* Нижнее свечение */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/20
          blur-[150px]
        "
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <Hero />

        <Services />

        <Projects />

        <WhyMe />
        
        <Process />

        <Contact />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
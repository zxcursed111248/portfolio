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
      "
    >

      <Navbar />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-blue-500/20
          rounded-full
          blur-[120px]
          -z-0
        "
      >
      </div>


      <Hero />

      <Services />

      <Projects />

      <Contact />

    </main>
  );
}
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Projects />

      <Services />

      <WhyMe />

      <Process />

      <Contact />

      <Footer />
    </main>
  );
}
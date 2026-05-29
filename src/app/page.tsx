import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import VisualDesign from "@/components/VisualDesign";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <SelectedWork />
        <VisualDesign />
        <Contact />
      </main>
    </>
  );
}

import Hero from "./Components/Hero";
import Projects from "./Components/MyProjects";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#22223b] mx-auto p-4">
      <div className="bg-[#19192b] rounded-lg">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

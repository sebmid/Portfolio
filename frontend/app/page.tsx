import Image from "next/image";
import Hero from "./Components/Hero";
import Projects from "./Components/MyProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#22223b] mx-auto p-4">
      <Hero />
      <Projects />
    </main>
  );
}

import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#22223b] mx-auto p-4">
      <div className="bg-[#19192b] rounded-lg">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

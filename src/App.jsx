import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

export default function App() {

  const [isScrolled, setIsScrolled] = useState();

    useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="app-bg min-h-screen overflow-x-hidden text-[var(--color-text)] transition-colors duration-300">
      <NavBar isScrolled={isScrolled} />
      <Hero isScrolled={isScrolled}/>
      <Hero />
      <Hero />
    </main>
  );
}

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
      <div className="w-full min-h-dvh">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam cum iste consequuntur aliquam quaerat, ducimus architecto quia laudantium unde culpa voluptates nisi, autem saepe. Architecto expedita ea natus aliquid.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam cum iste consequuntur aliquam quaerat, ducimus architecto quia laudantium unde culpa voluptates nisi, autem saepe. Architecto expedita ea natus aliquid.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam cum iste consequuntur aliquam quaerat, ducimus architecto quia laudantium unde culpa voluptates nisi, autem saepe. Architecto expedita ea natus aliquid.
      </div>

      {/* <div className="fixed bottom-4 left-4 z-[9999] rounded bg-black px-3 py-1 text-white text-sm">
  <span className="sm:hidden">base</span>
  <span className="hidden sm:inline md:hidden">sm</span>
  <span className="hidden md:inline lg:hidden">md</span>
  <span className="hidden lg:inline xl:hidden">lg</span>
  <span className="hidden xl:inline 2xl:hidden">xl</span>
  <span className="hidden 2xl:inline">2xl</span>
</div> */}
    </main>
  );
}

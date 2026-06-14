import { AnimatePresence } from "framer-motion";
import IntroLoader from "./components/IntroLoader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState();
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setShowIntro(false)
    }, 2500)

    return ()=> clearTimeout(timer)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <AnimatePresence 
      mode='wait'
      onExitComplete={()=>setIntroDone(true)}
    >
      {showIntro && <IntroLoader />}
    </AnimatePresence>

    <main className="app-bg min-h-screen text-[var(--color-text)] transition-colors duration-300">
    {/* <main className=""> */}
      {/* <NavBar isScrolled={isScrolled} /> */}
      <Hero isScrolled={isScrolled} introDone={introDone}/>
      <Project />

    </main>
    </>
  );
}





      {/* <div className="fixed bottom-4 left-4 z-[9999] rounded bg-black px-3 py-1 text-white text-sm">
  <span className="sm:hidden">base</span>
  <span className="hidden sm:inline md:hidden">sm</span>
  <span className="hidden md:inline lg:hidden">md</span>
  <span className="hidden lg:inline xl:hidden">lg</span>
  <span className="hidden xl:inline 2xl:hidden">xl</span>
  <span className="hidden 2xl:inline">2xl</span>
</div> */}

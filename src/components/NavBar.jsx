import { useEffect, useState } from "react";
import logo from "../assets/NKS.png";
import logoWhite from "../assets/NKSW.png";
import { Sun, Moon} from "lucide-react";
export default function NabBar({ isScrolled }) {


  const [theme, setTheme] = useState("dark");
  const root = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  }

  return (
    <header>
      <div
        className={`
                  fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-16 z-40
                  transition-all duration-300
                  ${isScrolled ? "h-20 backdrop-blur-md " : "h-32"}
                  ${isMenuOpen && "bg-[var(--color-bg)]"}
    `}
      >
        {theme === "dark" ? (
          <img src={logoWhite} alt="NKS" className="h-[20px]" />
        ) : (
          <img src={logo} alt="NKS" className="h-[20px]" />
        )}


        <div className="flex gap-2">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>


    </header>
  );
}

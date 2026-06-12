import { useEffect, useState } from "react";
import logo from "../assets/NKS.png";
import logoWhite from "../assets/NKSW.png";
import { Sun, Moon, Menu, X } from "lucide-react";
export default function NabBar({ isScrolled }) {
  const navList = [
    { name: "Home", link: "home" },
    { name: "Projects", link: "projects" },
    { name: "Skills", link: "skills" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

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
                  fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-48 z-40
                  transition-all duration-300
                  ${isScrolled ? "h-20 backdrop-blur-md " : "h-32 md:h-48"}
                  ${isMenuOpen && "bg-[var(--color-bg)]"}
    `}
      >
        {theme === "dark" ? (
          <img src={logoWhite} alt="NKS" className="h-[20px]" />
        ) : (
          <img src={logo} alt="NKS" className="h-[20px]" />
        )}

        <nav className="gap-10 hidden md:flex">
          {navList.map(({ name, link }) => {
            return (
              <a key={name} href={link}>
                {name}
              </a>
            );
          })}
        </nav>

        <div className="flex gap-2">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          <button
            className=" md:hidden "
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`fixed left-0 w-full bg-[var(--color-bg)] 
                      transition-all duration-300 flex justify-center pt-20
                       ${isScrolled ? "top-20 " : "top-32 md:top-48"}
                       ${isMenuOpen ? "h-dvh opacity-100 z-50" : "h-0 opacity-0 z-0"}
                       `
                }>
        
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navList.map(({ name, link }) => {
            return (
              <a key={name} href={link}>
                {name}
              </a>
            );
          })}
        </nav>

      </div>
    </header>
  );
}

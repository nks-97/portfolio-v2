import { useEffect, useState } from "react";
import logo from "../assets/NKS.png";
import logoWhite from "../assets/NKSW.png";
import { Sun, Moon } from "lucide-react";
export default function NabBar() {
  const navList = [
    { name: "Home", link: "home" },
    { name: "Projects", link: "projects" },
    { name: "Skills", link: "skills" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark"){
      root.classList.add("dark");
    }else{
      root.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme)=>{
      return currentTheme === "dark" ? "light" : "dark"
    })
  }

  return (
    <div className="fixed w-full h-40 flex justify-between items-center px-48 z-40">
      {
        theme === "dark" ? (<img src={logoWhite} alt="NKS" className="h-[20px]" />) : (<img src={logo} alt="NKS" className="h-[20px]" />)
      }
      
      <div className="flex gap-10">
        {navList.map(({ name, link }) => {
          return <a key={name} href={link}>{name}</a>;
        })}
      </div>

      <button onClick={toggleTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

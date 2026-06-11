import Hero from "./components/Hero";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <main className="app-bg min-h-screen overflow-x-hidden text-[var(--color-text)] transition-colors duration-300">
      <NavBar />
      <Hero />
    </main>
  );
}

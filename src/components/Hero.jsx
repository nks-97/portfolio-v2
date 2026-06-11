import { Mouse } from "lucide-react";
export default function Hero() {
  return (
    <section className="min-h-screen flex w-full px-24 py-10 relative">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <p className="text-4xl font-semibold">
            Niko <span className="text-[var(--color-accent)]">Sarmiento</span>
          </p>
          <p className="text-xl font-thin tracking-[0.05em] mb-10">
            IT Specialist {" \u2192 "} Fullstack{" "}
          </p>
          <h1 className="text-6xl leading-[1.05] tracking-tight mb-4">
            Turning complex workflow into{" "}
            <span className="text-[var(--color-accent-hover)]">
              simple web application
            </span>
          </h1>
          <p className="mb-10 tracking-tight font-extralight">
            I develop internal tools, configurators, and data-driven systems
            using React, Supabase, and more modern web technologies.
          </p>
          <div className="flex gap-4">
            <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] p-4 rounded-xl text-white">
              View My Work
            </button>
            <button className="border border-[var(--color-accent)] hover:border-[var(--color-accent-hover)] p-4 rounded-xl text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-1"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-text)] flex  flex-col items-center">
        <Mouse className="animate-bounce" />
        <p className="text-[10px]">scroll to explore</p>
      </div>
    </section>
  );
}

import { Mouse } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ isScrolled }) {
  const textMotion = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const divMotion = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const buttonMotion = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
// px-24 py-10
  return (
    <section className="min-h-dvh w-full  relative 
                        flex flex-col lg:flex-row
                        px-6 sm:px-10 md:px-16 lg:px-24
    ">
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.div
          variants={divMotion}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={textMotion}
            className="text-3xl xl:text-4xl font-semibold"
          >
            Niko <span className="text-[var(--color-accent)]">Sarmiento</span>
          </motion.p>

          <motion.p
            variants={textMotion}
            className="text-sm xl:text-xl font-thin tracking-[0.05em] mb-10"
          >
            IT Specialist {" \u2192 "} Fullstack{" "}
          </motion.p>

          <motion.h1
            variants={textMotion}
            className="text-4xl xl:text-6xl leading-[1.05] tracking-tight mb-4"
          >
            Turning complex workflow into{" "}
            <span className="text-[var(--color-accent-hover)]">
              simple web application
            </span>
          </motion.h1>

          <motion.p
            variants={textMotion}
            className="mb-10 tracking-tight font-extralight text-sm sm:text-base md:text-lg"
          >
            I develop internal tools, configurators, and data-driven systems
            using React, Supabase, and more modern web technologies.
          </motion.p>

          <motion.div
            variants={buttonMotion}
            className="flex gap-4"
          >
            <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] p-4 rounded-xl text-white">
              View My Work
            </button>

            <button className="border border-[var(--color-accent)] hover:border-[var(--color-accent-hover)] p-4 rounded-xl text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="flex-1 hidden md:flex"
      ></motion.div>

      <motion.div
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-text)] flex-col items-center
                    hidden md:flex
        "
      >
        <Mouse className="animate-bounce" />
        <p className="text-[10px]">scroll to explore</p>
      </motion.div>
    </section>
  );
}
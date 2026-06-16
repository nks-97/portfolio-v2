import { Mouse } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/NKS.png";
import logoWhite from "../assets/NKSW.png";
export default function Hero({ isScrolled, introDone }) {
  const containerMotion = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const imageMotion = {
    hidden: { x: "-100%" },
    show: { x: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };
  const textFromBelow = {
    hidden: { y: "100%" },
    show: { y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  };
  const changeColor = {
    hidden: { color: "#fff" },
    show: { color: "var(--color-accent)", transition: { delay: 0.7 } },
  };

  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <>
      <section className="w-full h-[190vh]" ref={sectionRef}>
        <div className="sticky top-0 h-screen">
          <motion.div
            className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={containerMotion}
            initial="hidden"
            animate={introDone ? "show" : "hidden"}
            style={{ opacity: opacity1 }}
          >
            <motion.div
              className="flex gap-2 overflow-hidden items-end"
              variants={imageMotion}
            >
              <motion.img src={logoWhite} alt="" className="w-28" />
              <p className="text-xl">NIKO SARMIENTO</p>
            </motion.div>
            <div className="overflow-hidden">
              <motion.p
                variants={textFromBelow}
                className="text-2xl font-thin tracking-[0.1em]"
              >
                IT Specialist {" \u2192 "}{" "}
                <motion.span variants={changeColor}>Fullstack</motion.span>{" "}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: opacity2 }}
          >
            <h1 className="text-4xl xl:text-4xl leading-[1.05] tracking-tight mb-4">
              Turning complex workflow into{" "}
              <span className="text-[var(--color-accent-hover)]">
                simple web application
              </span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isScrolled ? 0 : 1,
            y: isScrolled ? 10 : 0,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-text)] flex-col items-center
                    hidden md:flex text-gray-400
        "
        >
          <Mouse className="animate-bounce h-4 w-4" />
          <p className="text-[8px]">scroll to explore</p>
        </motion.div>
      </section>
    </>
  );
}

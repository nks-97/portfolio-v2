import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050a07] text-[#faf8f0] grid grid-rows-2"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <div className="overflow-hidden flex items-end">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="whitespace-nowrap text-[18vw] font-black uppercase leading-[0.75] tracking-[-0.08em]"
        >
          IT SPECIALIST
        </motion.h1>
      </div>
      <div className="overflow-hidden flex items-start">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="whitespace-nowrap text-[18vw] text-[var(--color-accent)] font-black uppercase leading-[0.75] tracking-[-0.08em]"
        >
          FULLSTACK
        </motion.h1>
      </div>
    </motion.div>
  );
}

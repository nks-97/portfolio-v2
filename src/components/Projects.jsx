import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import interactiveImg from "../../public/projects/interactive.png";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      number: "01",
      title: "Interactive Product Gallery",
      category: "React Interface",
      description:
        "A responsive product gallery with image preview, thumbnails, and smooth user interaction.",
      image: interactiveImg,
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 2,
      number: "02",
      title: "PO Tracker System",
      category: "Business Workflow",
      description:
        "A purchase order tracking system designed for store requests, approvals, logistics, and delivery monitoring.",
      image: interactiveImg,
      tech: ["Power Apps", "Dataverse", "SAP B1"],
    },
    {
      id: 3,
      number: "03",
      title: "Product Database App",
      category: "Fullstack App",
      description:
        "A database-connected product system with API, item details, images, and admin management.",
      image: interactiveImg,
      tech: ["React", "Supabase", "SQL"],
    },
    {
      id: 4,
      number: "04",
      title: "Sales Dashboard",
      category: "Data System",
      description:
        "A reporting dashboard for sales, inventory, and branch-level business performance.",
      image: interactiveImg,
      tech: ["Python", "SQL", "Power BI"],
    },
    {
      id: 5,
      number: "05",
      title: "Portfolio Website",
      category: "Frontend Showcase",
      description:
        "A modern animated portfolio with intro loader, hero animation, and horizontal project showcase.",
      image: interactiveImg,
      tech: ["React", "Framer Motion", "Tailwind"],
    },
  ];

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Main horizontal side scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(projectList.length - 1) * 100}vw`]
  );

  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 26,
    mass: 0.35,
  });

  // Background parallax movement
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const smoothBgX = useSpring(bgX, {
    stiffness: 50,
    damping: 30,
    mass: 0.5,
  });

  // Floating text parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  // const smoothTextY = useSpring(textY, {
  //   stiffness: 70,
  //   damping: 28,
  //   mass: 0.4,
  // });

  const smoothTextY = useSpring(textY, {
  stiffness: 120,
  damping: 30,
  mass: 0.25,
});

  return (
    <section
      ref={sectionRef}
      style={{ height: `${projectList.length * 100}vh` }}
      className="relative z-20 bg-[var(--color-bg-soft)] text-[var(--color-text)]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fixed Section Header */}
        <div className="pointer-events-none absolute left-6 top-8 z-40 sm:left-10 lg:left-24">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Selected Projects
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for real workflow.
          </h2>
        </div>

        {/* Horizontal Track */}
        <motion.ul className="flex h-screen" style={{ x: smoothX }}>
          {projectList.map((project, index) => (
            <li
              key={project.id}
              className="relative h-screen w-screen flex-none overflow-hidden"
            >
              {/* BACK IMAGE */}
              <motion.img
                src={project.image}
                alt={project.title}
                style={{ x: smoothBgX }}
                className="absolute inset-0 z-0 h-full w-[120%] max-w-none object-cover"
              />

              {/* DARK LAYER */}
              <div className="absolute inset-0 z-10 bg-black/60" />

              {/* CINEMATIC GRADIENT */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/70 to-black/20" />

              {/* SOFT ACCENT GLOW */}
              <div className="absolute bottom-[-20%] right-[-10%] z-10 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/20 blur-[120px]" />

              {/* BIG BACKGROUND NUMBER */}
              <p className="absolute bottom-8 right-8 z-10 text-[9rem] font-bold leading-none text-white/5 sm:text-[13rem] lg:text-[18rem]">
                {project.number}
              </p>

              {/* FRONT CONTENT */}
              <div className="relative z-30 flex h-full items-center px-6 pt-24 sm:px-10 lg:px-24">
                <motion.div
                  style={{ y: smoothTextY }}
                  className="max-w-4xl text-white"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-sm font-medium text-[var(--color-accent)]">
                      {project.number}
                    </span>

                    <div className="h-px w-16 bg-white/30" />

                    <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                    {project.title}
                  </h3>

                  <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* BOTTOM PROGRESS */}
              <div className="absolute bottom-8 left-6 right-6 z-40 sm:left-10 sm:right-10 lg:left-24 lg:right-24">
                <div className="mb-4 flex items-center justify-between text-sm text-white/50">
                  <span>Scroll to explore</span>
                  <span>
                    {index + 1} / {projectList.length}
                  </span>
                </div>

                <div className="h-px w-full overflow-hidden bg-white/15">
                  <motion.div
                    className="h-full bg-[var(--color-accent)]"
                    style={{
                      width: `${((index + 1) / projectList.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
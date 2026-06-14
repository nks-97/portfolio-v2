import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import interactiveImg from "../../public/projects/interactive/interactive.png";
import interactiveShowCase from "../../public/projects/interactive/interactive-showcase.png"

import configuratorImg from "../../public/projects/configurator/configurator.png";
import configuratorShowCase from "../../public/projects/configurator/configurator-showcase.png"

import potrackerImg from "../../public/projects/potracker/potracker.png";
import potrackerShowCase from "../../public/projects/potracker/potracker-showcase.png"

export default function Projects() {
  const projectList = [
    {
  id: 3,
  number: "01",
  title: "Ilaw Configurator",
  imageBg: configuratorImg,
  imageShow: configuratorShowCase,
  category: "3D Product Configurator",
  description:
    "An interactive 3D configurator for lighting products where users can preview, customize, and explore product options in a more visual and engaging way.",
  tech: ["React", "Three.js", "React Three Fiber"],
},
{
  id: 2,
  number: "02",
  title: "Interactive Catalogue",
  imageBg: interactiveImg,
  imageShow: interactiveShowCase,
  category: "Product Catalogue & Quotation System",
  description:
    "A secure web-based catalogue for lighting and electrical products, allowing users to browse product images, view technical details, and create quotations through their own accounts. Built with account-based access to keep quotation records organized and protected.",
  tech: ["React", "Tailwind CSS", "Supabase", "Framer Motion"]
},
{
  id: 3,
  number: "03",
  title: "Purchase Order Tracker",
  imageBg: potrackerImg,
  imageShow: potrackerShowCase,
  category: "Internal Workflow System",
  description:
    "A web-based internal tracking system for managing purchase order requests, approvals, item status, and department updates, helping stores and internal teams monitor PO progress in one centralized platform.",
  tech: ["HTML", "CSS", "JavaScript", "MySQL"],
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

  // Floating text / side image parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  const smoothTextY = useSpring(textY, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  return (
    <section
      ref={sectionRef}
      style={{ height: `${projectList.length * 150}vh` }}
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
                src={project.imageBg}
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

              {/* SIDE MOCKUP IMAGE */}
<div className="pointer-events-none absolute right-[8%] top-1/2 z-30 hidden w-[48vw] max-w-[820px] -translate-y-1/2 lg:block">
  <motion.img
    src={project.imageShow}
    alt={`${project.title} mockup`}
    style={{ y: smoothTextY }}
    className="w-full object-contain drop-shadow-[0_35px_90px_rgba(0,0,0,0.65)]"
  />
</div>

              {/* BOTTOM PROGRESS */}
              <div className="absolute bottom-8 left-6 right-6 z-40 sm:left-10 sm:right-10 lg:left-24 lg:right-24">
                <div className="mb-4 flex items-center justify-between text-sm text-white/50"></div>

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
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Server, Monitor } from "lucide-react";

const projects = [
  {
    title: "Purchase Order Tracker",
    type: "Internal Business System",
    description:
      "A full workflow tracker for store requests, approvals, stock checking, logistics, and delivery monitoring.",
    tech: ["Power Apps", "Dataverse", "SAP B1", "Power Automate"],
    status: "Production",
    icon: Server,
  },
  {
    title: "Product Management System",
    type: "React + Supabase App",
    description:
      "A product interface with image gallery, item details, admin upload, and database-connected product records.",
    tech: ["React", "Supabase", "Embla", "Tailwind"],
    status: "In Progress",
    icon: Database,
  },
  {
    title: "Portfolio Website",
    type: "Frontend Showcase",
    description:
      "A modern personal portfolio with animated hero section, intro loader, responsive layout, and project showcase.",
    tech: ["React", "Framer Motion", "Tailwind"],
    status: "Building",
    icon: Monitor,
  },
];

export default function Project() {
  const containerMotion = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardMotion = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full px-6 py-24 sm:px-10 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Projects built around real workflows.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text)]/70 sm:text-lg">
            A collection of systems, interfaces, and tools focused on solving
            operational problems using frontend, backend, APIs, and databases.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardMotion}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-text)]/10 bg-[var(--color-bg-soft)]/70 p-6 shadow-sm backdrop-blur-md transition-colors duration-300 hover:border-[var(--color-accent)]/50"
              >
                {/* Soft glow */}
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--color-accent)]/10 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent)]/20" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      <Icon size={22} />
                    </div>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-text)]/10 transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-sm text-[var(--color-text)]/50">
                      {project.type}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-8 leading-7 text-[var(--color-text)]/65">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-text)]/10 px-3 py-1 text-xs text-[var(--color-text)]/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--color-text)]/10 pt-5">
                    <span className="text-sm text-[var(--color-text)]/50">
                      Status
                    </span>

                    <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-sm font-medium text-[var(--color-accent)]">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
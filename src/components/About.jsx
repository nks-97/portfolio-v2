import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Workflow } from "lucide-react";

const aboutCards = [
  {
    title: "Frontend Development",
    type: "React Interface",
    description:
      "I build clean, responsive, and interactive web interfaces using React, Tailwind, and Framer Motion with focus on usability and modern design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    status: "Building",
    icon: Code2,
  },
  {
    title: "Backend & Databases",
    type: "Data-Driven Systems",
    description:
      "I work with backend-connected applications using databases, APIs, Supabase, SQL, and structured data for real business workflows.",
    tech: ["Supabase", "SQL", "API", "Database"],
    status: "Learning",
    icon: Database,
  },
  {
    title: "Business Workflow Systems",
    type: "Internal Tools",
    description:
      "I create systems that support real company operations such as purchase tracking, approvals, product records, and process monitoring.",
    tech: ["Power Apps", "Dataverse", "SAP B1", "Automation"],
    status: "Production",
    icon: Workflow,
  },
];

export default function About() {
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
      id="about"
      className="relative min-h-screen w-full px-6 py-24 sm:px-10 lg:px-24"
    >
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
            About Me
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            I build practical systems for real workflows.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text)]/70 sm:text-lg">
            I am an IT Specialist and aspiring full-stack developer focused on
            creating web applications, internal tools, and database-driven
            systems that help simplify business operations.
          </p>
        </div>      
      <div className="mx-auto max-w-7xl">
        {/* Cards */}
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {aboutCards.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                      {item.type}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mb-8 leading-7 text-[var(--color-text)]/65">
                    {item.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-text)]/10 px-3 py-1 text-xs text-[var(--color-text)]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--color-text)]/10 pt-5">
                    <span className="text-sm text-[var(--color-text)]/50">
                      Focus
                    </span>

                    <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-sm font-medium text-[var(--color-accent)]">
                      {item.status}
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
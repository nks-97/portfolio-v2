import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSelectCategory = (event) => {
    setActiveCategory(event.target.name);
  };

  const skills = [
    // Frontend
    {
      name: "React",
      category: "frontend",
      description: "Building modern, reusable, and responsive web interfaces.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      description: "Creating interactive features, logic, and dynamic UI behavior.",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      description: "Designing clean, responsive layouts with utility-first styling.",
    },
    {
      name: "Framer Motion",
      category: "frontend",
      description: "Adding smooth animations and page transitions.",
    },
    {
      name: "HTML & CSS",
      category: "frontend",
      description: "Structuring and styling accessible web pages.",
    },

    // Backend & Database
    {
      name: "PHP",
      category: "backend",
      description: "Maintaining and improving internal business web systems.",
    },
    {
      name: "MySQL",
      category: "backend",
      description: "Managing relational data for web applications and reports.",
    },
    {
      name: "MS SQL Server",
      category: "backend",
      description: "Working with business data, queries, views, and system reports.",
    },
    {
      name: "Supabase",
      category: "backend",
      description: "Connecting React apps with authentication, storage, and database records.",
    },

    // Business Systems
    {
      name: "Power Apps",
      category: "systems",
      description: "Creating internal workflow apps for requests, approvals, and tracking.",
    },
    {
      name: "Power Automate",
      category: "systems",
      description: "Automating business processes and notifications.",
    },
    {
      name: "SAP Business One",
      category: "systems",
      description: "Working with operational data, purchase orders, inventory, and reports.",
    },
    {
      name: "Data Automation",
      category: "systems",
      description: "Building scripts and workflows that reduce manual reporting tasks.",
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "tools",
      description: "Version control, project backup, and code organization.",
    },
    {
      name: "VS Code",
      category: "tools",
      description: "Main development environment for frontend and backend work.",
    },
    {
      name: "Photoshop",
      category: "tools",
      description: "Preparing graphics, product images, and visual assets.",
    },

    // IT Support
    {
      name: "Networking",
      category: "it",
      description: "Supporting network devices, access points, and internal connectivity.",
    },
    {
      name: "IIS Web Server",
      category: "it",
      description: "Hosting and maintaining internal web applications.",
    },
    {
      name: "Microsoft 365",
      category: "it",
      description: "Supporting users, accounts, email migration, and collaboration tools.",
    },
  ];

  const skillCategories = [
    { label: "All", key: "all" },
    { label: "Frontend", key: "frontend" },
    { label: "Backend", key: "backend" },
    { label: "Systems", key: "systems" },
    { label: "Tools", key: "tools" },
    { label: "IT Support", key: "it" },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="min-h-screen w-full px-6 py-24 md:px-12 lg:px-20 2xl:px-64"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
          What I Work With
        </p>

        <h1 className="mb-6 text-center text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">
          Skills &{" "}
          <span className="text-[var(--color-accent)]">Technologies</span>
        </h1>

        <p className="mb-12 max-w-2xl text-center text-sm leading-7 text-[var(--color-text)]/70 md:text-base">
          A mix of frontend development, backend data handling, business system
          development, automation, and IT support experience used to build
          practical internal tools and web applications.
        </p>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {skillCategories.map(({ label, key }) => (
            <button
              key={key}
              name={key}
              onClick={handleSelectCategory}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-text)]/15 text-[var(--color-text)]/70 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map(({ name, description }, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[var(--color-text)]/10 bg-[var(--color-bg-soft)]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-[var(--color-accent)] transition-all duration-300 group-hover:w-20" />

              <h3 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
                {name}
              </h3>

              <p className="text-sm leading-6 text-[var(--color-text)]/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
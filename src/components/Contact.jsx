import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full px-6 py-24 md:px-12 lg:px-20 2xl:px-64"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Get In Touch
          </p>

          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">
            Let’s Build Something{" "}
            <span className="text-[var(--color-accent)]">Practical</span>
          </h1>

          <p className="mb-10 max-w-xl text-sm leading-7 text-[var(--color-text)]/70 md:text-base">
            Have a project, internal system, product catalogue, automation, or
            business workflow that needs improvement? Feel free to reach out.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text)]/50">Email</p>
                <p className="font-medium text-[var(--color-text)]">
                  nikosarmiento1@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text)]/50">Phone</p>
                <p className="font-medium text-[var(--color-text)]">
                  +63 917 315 3604
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text)]/50">Location</p>
                <p className="font-medium text-[var(--color-text)]">
                  Meycauayan, Bulacan, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl border border-[var(--color-text)]/10 bg-[var(--color-bg-soft)]/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.12)] md:p-8">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]/70">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-[var(--color-text)]/10 bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-all placeholder:text-[var(--color-text)]/35 focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]/70">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry"
                className="w-full rounded-xl border border-[var(--color-text)]/10 bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-all placeholder:text-[var(--color-text)]/35 focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]/70">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-[var(--color-text)]/10 bg-transparent px-4 py-3 text-[var(--color-text)] outline-none transition-all placeholder:text-[var(--color-text)]/35 focus:border-[var(--color-accent)]"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
            >
              Send Message
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
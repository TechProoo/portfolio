import React, { useRef } from "react";
import { Footer } from "@/Sections/Footer";
import { Divider } from "@/Components/Divider";
import heroPoster from "../assets/717645337933573.jpg";
import posterA from "../assets/framer_gsap.avif";
import posterB from "../assets/typescript.avif";
import posterC from "../assets/tailwind_bootstrap.avif";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../assets/717645337933573.jpg";
import One from "../assets/one.png";



const rowData = [
  { id: 1, title: "Tech Drama", img: posterA },
  { id: 2, title: "Design Thriller", img: posterB },
  { id: 3, title: "Frontend Saga", img: posterA },
  { id: 4, title: "Backend Noir", img: posterB },
  { id: 5, title: "AI Stories", img: posterA },
  { id: 6, title: "UX Mysteries", img: posterB },
];

const projects = [
  {
    id: "p1",
    title: "Framer GSAP Showcase",
    img: posterA,
    tech: ["Framer", "GSAP", "React"],
    desc: "Interactive animations and micro-interactions showcasing motion-driven UI.",
  },
  {
    id: "p2",
    title: "Design System (Tailwind + Bootstrap)",
    img: posterC,
    tech: ["Tailwind", "Bootstrap", "Accessibility"],
    desc: "A modular, accessible design system used across multiple projects.",
  },
  {
    id: "p3",
    title: "TypeScript Utilities",
    img: posterB,
    tech: ["TypeScript", "Node", "Testing"],
    desc: "Utility libraries and typed patterns for scalable apps.",
  },
  {
    id: "p4",
    title: "Realtime Dashboard",
    img: posterA,
    tech: ["WebSockets", "React", "Postgres"],
    desc: "High-performance realtime dashboards with smooth UX.",
  },
];

const scrollByWidth = (container: HTMLDivElement | null, direction = 1) => {
  if (!container) return;
  const amount = Math.floor(container.offsetWidth * 0.75);
  container.scrollBy({ left: amount * direction, behavior: "smooth" });
};

export const Recruiters: React.FC = () => {
  const rowRef1 = useRef<HTMLDivElement | null>(null);
  const rowRef3 = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Hero / Featured */}
      <div className="navbar flex items-center justify-between p-10">
        <div className="trigger_start flex items-center gap-4">
          <img
            className="img_trig w-16 h-16 rounded-full object-cover border-2 border-white"
            src={hero}
            alt="Hero"
          />
          <h1 className="md:text-2xl text-md font-bold text-white tracking-wide">
            Developers Page
          </h1>
        </div>
        <div>
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src={One}
            alt="Logo"
          />
        </div>
      </div>
      <header
        className="relative h-[64vh] md:h-[76vh] w-full bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-label="Featured"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
        <div className="relative w-full p-6 md:p-16 flex items-end">
          <div className="max-w-4xl">
            <span className="inline-block mb-2 px-3 py-1 bg-red-600 rounded-full text-xs font-semibold">
              Recruiters
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight leading-tight">
              Discover top talent, hand-picked for you
            </h2>
            <p className="text-sm md:text-lg text-gray-300 mb-6 max-w-2xl">
              Browse profiles that look and feel like a premium streaming
              experience. Fast previews, curated collections, and smart
              recommendations for hiring teams.
            </p>

            <div className="flex gap-3 items-center">
              <button
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-md font-semibold shadow-lg hover:scale-105 transform transition"
                aria-label="View CV"
              >
                <Play size={16} />
                View CV
              </button>
              <button className="px-4 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition">
                More Info
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Rows (Netflix-style) */}
      <main className="px-4 md:px-10 py-10 space-y-10">
        {/* Row 1 */}
        <section aria-labelledby="rec-1">
          <div className="flex items-center justify-between mb-4">
            <h3 id="rec-1" className="text-lg md:text-2xl font-semibold">
              Featured projects
            </h3>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => scrollByWidth(rowRef1.current, -1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByWidth(rowRef1.current, 1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={rowRef1}
            className="flex gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth snap-x snap-mandatory"
            role="list"
          >
            {projects.map((p) => (
              <article
                key={p.id}
                role="listitem"
                className="min-w-[200px] md:min-w-[280px] rounded-xl overflow-hidden bg-[#071016] shadow-[0_6px_24px_rgba(0,0,0,0.6)] transform-gpu hover:scale-105 hover:-translate-y-1 transition-all duration-300 snap-start cursor-pointer"
                tabIndex={0}
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-44 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 md:p-4">
                  <h4 className="text-sm md:text-base font-semibold">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 bg-white/6 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        {/* Row 2 - Collections grid */}
        <section aria-labelledby="collections">
          <div className="flex items-center justify-between mb-4">
            <h3 id="collections" className="text-lg md:text-2xl font-semibold">
              Top collections
            </h3>
            <span className="text-sm text-gray-400">
              Curated · Updated Weekly
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {rowData.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#08121a] to-[#061018] border border-white/6"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h5 className="font-bold">{item.title}</h5>
                  <p className="text-xs text-gray-400 mt-1">
                    Profiles · Insights
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Row 3 */}
        <section aria-labelledby="new">
          <div className="flex items-center justify-between mb-4">
            <h3 id="new" className="text-lg md:text-2xl font-semibold">
              New & noteworthy
            </h3>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => scrollByWidth(rowRef3.current, -1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByWidth(rowRef3.current, 1)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={rowRef3}
            className="flex gap-6 overflow-x-auto no-scrollbar py-2 scroll-smooth snap-x snap-mandatory"
            role="list"
          >
            {rowData.concat(rowData).map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                role="listitem"
                className="min-w-[220px] rounded-2xl overflow-hidden bg-[#041015] shadow-lg snap-start cursor-pointer hover:scale-105 transform transition"
                tabIndex={0}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-400">Updated recently</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

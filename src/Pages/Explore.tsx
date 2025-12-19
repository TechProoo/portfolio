import React, { useEffect, useMemo, useRef, useState } from "react";
import posterA from "../assets/framer_gsap.avif";
import posterB from "../assets/typescript.avif";
import posterC from "../assets/tailwind_bootstrap.avif";
import hero from "../assets/717645337933573.jpg";
import { Badge } from "lucide-react";

const projects = [
  {
    id: "e1",
    title: "Framer GSAP Showcase",
    img: posterA,
    tag: "Interaction",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/framer-gsap",
    preview: "https://framer-gsap-demo.vercel.app",
  },
  {
    id: "e2",
    title: "TypeScript Utilities",
    img: posterB,
    tag: "Tools",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/ts-utils",
    preview: "https://ts-utils-demo.vercel.app",
  },
  {
    id: "e3",
    title: "Design System",
    img: posterC,
    tag: "Design",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/design-system",
    preview: "https://design-system-demo.vercel.app",
  },
  {
    id: "e4",
    title: "Realtime Dashboard",
    img: posterA,
    tag: "Data",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/realtime-dashboard",
    preview: "https://dashboard-demo.vercel.app",
  },
  {
    id: "e5",
    title: "Micro-interactions Kit",
    img: posterC,
    tag: "Motion",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/micro-interactions",
    preview: "https://micro-interactions-demo.vercel.app",
  },
  {
    id: "e6",
    title: "Modern UI Patterns",
    img: posterB,
    tag: "UI",
    author: "TECHPRO",
    url: "https://github.com/TechProoo/ui-patterns",
    preview: "https://ui-patterns-demo.vercel.app",
  },
];

const Explore: React.FC = () => {
  const [tagFilter, setTagFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Featured");
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.tag)))],
    []
  );

  const filtered = useMemo(() => {
    let list = projects;
    if (tagFilter !== "All") list = projects.filter((p) => p.tag === tagFilter);
    // placeholder for sort, e.g., Featured/New
    if (sort === "Featured") return list;
    return list;
  }, [tagFilter, sort]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (selected && modalRef.current) modalRef.current.focus();
  }, [selected]);

  const selectedProject = projects.find((p) => p.id === selected) || null;

  const toggleExpand = (id: string) => {
    setExpanded((e) => (e === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section
        className="relative h-[60vh] md:h-[72vh] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
        aria-label="Explore hero"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
        <div className="relative container mx-auto p-6 md:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold">
              <Badge size={14} /> Awwwards-style
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Explore design-forward projects — crafted to win awards
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              A showcase of cutting-edge web design and interactions. Filter by
              trend, preview micro-interactions, and discover what makes a site
              memorable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-white text-black font-semibold shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-red-600">
                Submit a project
              </button>
              <button
                onClick={() =>
                  setSort((s) => (s === "Featured" ? "Recent" : "Featured"))
                }
                className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-pressed={sort !== "Featured"}
              >
                {sort} · Toggle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between mb-6">
          <div
            className="flex gap-3 flex-wrap"
            role="tablist"
            aria-label="Project tags"
          >
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTagFilter(t)}
                className={`px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 ${
                  t === tagFilter
                    ? "bg-red-600 text-white"
                    : "bg-white/6 text-white"
                }`}
                aria-pressed={t === tagFilter}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-400">Sort: {sort} ▾</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#071217] to-[#06101a] shadow-lg transform hover:scale-[1.02] transition-all"
              tabIndex={0}
              aria-labelledby={`title-${p.id}`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-white/6 px-2 py-1 rounded">
                    {p.tag}
                  </span>
                  <span className="text-xs text-gray-400">{p.author}</span>
                </div>
                <h3
                  id={`title-${p.id}`}
                  className="mt-3 text-lg font-semibold tracking-tight"
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  A visually rich demo emphasizing motion and detail.
                </p>

                <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => setSelected(p.id)}
                    className="px-3 py-2 bg-white text-black rounded-full text-sm font-semibold focus:outline-none focus:ring-2"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => toggleExpand(p.id)}
                    aria-expanded={expanded === p.id}
                    className="px-3 py-2 border border-white/20 rounded-full text-sm focus:outline-none focus:ring-2"
                  >
                    {expanded === p.id ? "Close details" : "Details"}
                  </button>
                </div>
              </div>

              {/* subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
          {/** Render inline expanded panel under the corresponding card */}
          {filtered.map((p) => {
            if (expanded !== p.id) return null;
            return (
              <div
                key={`exp-${p.id}`}
                className="col-span-1 sm:col-span-2 lg:col-span-3"
              >
                <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-[#08121a] to-[#061018] border border-white/6 shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full md:w-1/3 h-48 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold">{p.title}</h4>
                      <p className="text-sm text-gray-300 mt-2">
                        Detailed description: This project demonstrates design
                        principles, interactions, accessibility and performance
                        optimizations. It includes code examples, live demos and
                        implementation notes intended for teams aiming for
                        award-level quality.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-white/6 rounded">
                          {p.tag}
                        </span>
                        <span className="text-xs px-2 py-1 bg-white/6 rounded">
                          {p.author}
                        </span>
                        <span className="text-xs px-2 py-1 bg-white/6 rounded">
                          Performance
                        </span>
                        <span className="text-xs px-2 py-1 bg-white/6 rounded">
                          Accessibility
                        </span>
                      </div>
                      <div className="mt-4 flex gap-3">
                        <a
                          className="px-4 py-2 bg-red-600 rounded-full font-semibold"
                          href={p.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live demo
                        </a>
                        <a
                          className="px-4 py-2 border border-white/20 rounded-full"
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View repo
                        </a>
                        <button
                          className="px-4 py-2 rounded-full"
                          onClick={() => setExpanded(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-500 font-bold shadow-lg hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-red-600/40">
            Explore more award-winning sites
          </button>
        </div>
      </div>
      {/* Modal preview */}
      {selectedProject && (
        <div
          className="modal_overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Project preview"
        >
          <div className="modal_card" ref={modalRef} tabIndex={-1}>
            <h3 className="text-xl font-bold">{selectedProject.title}</h3>
            <p className="modal_message text-sm text-gray-300 mt-2">
              {selectedProject.tag} · by {selectedProject.author}
            </p>
            <div className="mt-4">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <div className="modal_actions mt-4">
              <button
                className="modal_primary"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
              <button
                className="modal_secondary"
                onClick={() => {
                  /* placeholder for open details */
                }}
              >
                Open details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;

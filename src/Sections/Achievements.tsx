import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divider } from "@/Components/Divider";
import { BadgeHeader } from "@/Components/Badge";
import exnod from "../assets/exnod.png";
import esno from "../assets/esno.jpeg";
import reactLogo from "../assets/react.svg";
import nest from "../assets/nest.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Achievements: React.FC = () => {
  const [openAward, setOpenAward] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAward(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useGSAP(() => {
    // header entrance
    gsap.fromTo(
      ".ach_title",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".achievements_section", start: "top 92%" },
      }
    );

    // awards reveal
    gsap.utils.toArray(".award_card").forEach((el, i) => {
      const node = el as HTMLElement;
      gsap.fromTo(
        node,
        { y: 28, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // testimonial fade in
    gsap.utils.toArray(".testimonial_card").forEach((el, i) => {
      const node = el as HTMLElement;
      gsap.fromTo(
        node,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // logos pop
    gsap.utils.toArray(".partner_logo").forEach((el) => {
      const node = el as HTMLElement;
      gsap.set(node, { scale: 0.95, opacity: 0.9 });
      node.addEventListener("mouseenter", () =>
        gsap.to(node, { scale: 1.06, duration: 0.25, ease: "power2.out" })
      );
      node.addEventListener("mouseleave", () =>
        gsap.to(node, { scale: 0.95, duration: 0.35, ease: "power3.out" })
      );
      ScrollTrigger.create({
        trigger: node,
        start: "top 95%",
        onEnter: () =>
          gsap.to(node, {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          }),
      });
    });
  });

  const awards = [
    {
      title: "Hackathon Winner",
      meta: "HackTech 2024",
      desc: "Built a realtime collaboration tool judged Best UX",
    },
    {
      title: "Cloud Certification",
      meta: "Certified Cloud Practitioner",
      desc: "AWS foundational cloud engineer certification",
    },
    {
      title: "Open Source Contributor",
      meta: "Top PRs",
      desc: "Merged performance patches to public libs",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Lead @ Acme",
      quote:
        "Delivered on time and exceeded expectations — high quality and great communication.",
    },
    {
      name: "Michael Lee",
      role: "CTO @ DevWorks",
      quote:
        "Deep technical skill, pragmatic architecture, and very fast iterations.",
    },
  ];

  const partners = [exnod, esno, reactLogo, nest];

  return (
    <section className="achievements_section">
      <div className="container">
        <Divider />
        <BadgeHeader text="Achievements & Testimonials" />

        <div className="ach_inner mt-10">
          <div className="ach_left">
            <h2 className="ach_title">Recognition & Awards</h2>

            <div className="awards_grid">
              {awards.map((a, i) => (
                <article
                  className={`award_card ${openAward === i ? "open" : ""}`}
                  key={i}
                  tabIndex={0}
                  role="button"
                  aria-expanded={openAward === i}
                  onClick={() => setOpenAward(openAward === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setOpenAward(openAward === i ? null : i);
                  }}
                >
                  <h4 className="award_title">{a.title}</h4>
                  <div className="award_meta">{a.meta}</div>
                  <p className="award_desc">{a.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="ach_right">
            <h3 className="test_heading">What people say</h3>

            <div className="testimonials">
              {testimonials.map((t, i) => (
                <blockquote className="testimonial_card" key={i}>
                  <p className="quote">"{t.quote}"</p>
                  <footer className="cite">
                    — {t.name}, <span className="role">{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="partners">
              {partners.map((p, idx) => (
                <div className="partner_logo" key={idx}>
                  <img src={p} alt={`partner-${idx}`} />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divider } from "@/Components/Divider";
import { BadgeHeader } from "@/Components/Badge";
import Wework from "../assets/wework.png";
import Certi from "../assets/certi.png";
import Ecommerce from "../assets/ecommerce.png";
import Uninav from "../assets/uninav.png";
import Medmap from "../assets/medmap.png";
import Helio from "../assets/helio.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Portfolio: React.FC = () => {
  useGSAP(() => {
    // Section header animation
    gsap.fromTo(
      ".arrow",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".portfolio_section", start: "top 90%" },
      }
    );

    // animate each project card into view with a subtle stagger
    gsap.utils.toArray(".proj_card").forEach((el, i) => {
      const node = el as HTMLElement;

      // entrance
      gsap.fromTo(
        node,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          duration: 0.9,
          delay: i * 0.06,
          scrollTrigger: {
            trigger: node,
            start: "top 92%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // hover tilt effect
      node.addEventListener("mouseenter", () => {
        gsap.to(node, {
          rotationX: 6,
          rotationY: -6,
          duration: 0.35,
          ease: "power2.out",
        });
      });
      node.addEventListener("mouseleave", () => {
        gsap.to(node, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.45,
          ease: "power3.out",
        });
      });

      // image parallax while scrolling the card into view
      const img = node.querySelector(".proj_img_wrap img");
      if (img) {
        gsap.fromTo(
          img,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: node,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // tags reveal (small stagger within card)
      const tags = node.querySelectorAll(".proj_tag");
      if (tags.length) {
        gsap.fromTo(
          tags,
          { y: 8, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  });

  const projects = [
    {
      title: "WeWork",
      desc: "Coding education platform connecting learners with jobs.",
      img: Wework,
      url: "https://github.com/TechProoo/wework",
      preview: "https://weworkk-delta.vercel.app/",
      tags: [
        "React",
        "NestJS",
        "Tailwind CSS",
        "PostgreSQL",
        "Authentication",
        "JWT",
        "GROQ",
      ],
    },
    {
      title: "CertiAi",
      desc: "A platform to verify educational certificates instantly with AI",
      img: Certi,
      url: "https://github.com/TechProoo/certiAi",
      preview: "https://certi-ai-sigma.vercel.app",
      tags: [
        "Node.js",
        "TypeScript",
        "Machine Learning",
        "OCR",
        "WebSocket",
        "Groq",
      ],
    },
    {
      title: "E-commerce Microservice",
      desc: "Payments, inventory, and product search.",
      img: Ecommerce,
      url: "https://github.com/TechProoo/nestjs_ecommerse_backend",
      preview: "https://github.com/TechProoo/nestjs_ecommerse_backend",
      tags: ["NestJS", "Postgres", "Prisma", "Microservices", "Stripe", "Groq"],
    },
    {
      title: "Uninav",
      desc: "Empowering your academic journey — a centralized resource hub that fosters collaborative learning and provides efficient study tools to help students learn smarter.",
      img: Uninav,
      url: "https://github.com/TechProoo/mobile-commerce",
      preview: "https://uninav.live",
      tags: [
        "React",
        "TypeScript",
        "Prisma",
        "Tailwind CSS",
        "PDF-DIST",
        "Accessibility",
        "Performance",
      ],
    },
    {
      title: "Medmap",
      desc: "Med-Map helps you quickly find nearby pharmacies that have the medications you need.",
      img: Medmap,
      url: "https://github.com/TechProoo/medmap_frontend",
      preview: "https://medmap-frontend.vercel.app/",
      tags: ["AI", "Groq", "Tailwind CSS", "Storybook", "Accessibility"],
    },
    {
      title: "HelioPower",
      desc: "Fast, accessible landing with animations.",
      img: Helio,
      url: "https://github.com/TechProoo/helio_power",
      preview: "https://heliopower.vercel.app/",
      tags: ["Vite", "TypeScript", "GSAP", "Accessibility", "Performance", "scrollreveal", "typed.js"],
    },
  ];

  return (
    <section id="projects" className="portfolio_section">
      <div className="container">
        <Divider />
        <BadgeHeader text="Selected Work" />

        <div className="portfolio_grid ">
          {projects.map((p, idx) => (
            <article className="proj_card" key={idx} tabIndex={0}>
              <div className="proj_img_wrap">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="proj_body">
                <h3 className="proj_title">{p.title}</h3>
                <p className="proj_desc">{p.desc}</p>
                <div className="proj_tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj_tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="proj_cta"
                  style={{ display: "flex", gap: "0.5rem" }}
                >
                  <a
                    href={p.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj_btn"
                    style={{ display: "inline-block", textDecoration: "none" }}
                  >
                    View
                  </a>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj_btn"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      background: "transparent",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    Github
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

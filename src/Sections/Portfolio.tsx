import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Divider } from "@/Components/Divider";
import { BadgeHeader } from "@/Components/Badge";
import placeholder from "../assets/placeholder.svg";

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
      title: "PixVerse Creator",
      desc: "Short-video AI generator + editor.",
      img: placeholder,
      tags: ["React", "AI", "GSAP"],
    },
    {
      title: "Realtime Dashboard",
      desc: "Low-latency charts & WebSocket streams.",
      img: placeholder,
      tags: ["Node", "WebSocket", "TS"],
    },
    {
      title: "E-commerce Microservice",
      desc: "Payments, inventory, and product search.",
      img: placeholder,
      tags: ["NestJS", "Postgres", "Prisma"],
    },
    {
      title: "Mobile Commerce App",
      desc: "Cross-platform React Native app.",
      img: placeholder,
      tags: ["React Native", "Expo"],
    },
    {
      title: "Design System",
      desc: "Atomic components & tokens for scale.",
      img: placeholder,
      tags: ["Figma", "Tailwind"],
    },
    {
      title: "Portfolio Landing",
      desc: "Fast, accessible landing with animations.",
      img: placeholder,
      tags: ["Vite", "TS", "GSAP"],
    },
  ];

  return (
    <section id="projects" className="portfolio_section">
      <div className="container">
        <Divider />
        <BadgeHeader text="Selected Work" />

        <div className="portfolio_grid">
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
                <div className="proj_cta">
                  <button className="proj_btn">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

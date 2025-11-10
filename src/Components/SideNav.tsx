import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SIDENAV_ITEMS: { id: string; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const SideNav: React.FC = () => {
  const items = SIDENAV_ITEMS;

  const navRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    if (!navRef.current) return;

    // entrance animation for the nav buttons
    const buttons =
      navRef.current.querySelectorAll<HTMLElement>(".sidenav_btn");
    const enterTl = gsap.fromTo(
      buttons,
      { x: 22, opacity: 0, y: 6 },
      {
        x: 0,
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    // create ScrollTriggers for each section to update active state
    const triggers: Array<ReturnType<typeof ScrollTrigger.create>> = [];
    items.forEach((it) => {
      const target = document.getElementById(it.id);
      if (!target) return;

      const st = ScrollTrigger.create({
        trigger: target,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveId(it.id),
        onEnterBack: () => setActiveId(it.id),
        onLeave: () => {
          // if leaving forward, clear only if scroll isn't inside another section
          setActiveId((prev) => (prev === it.id ? null : prev));
        },
        onLeaveBack: () =>
          setActiveId((prev) => (prev === it.id ? null : prev)),
      });

      triggers.push(st as ReturnType<typeof ScrollTrigger.create>);
    });

    return () => {
      enterTl.kill();
      triggers.forEach((t) => t.kill && t.kill());
    };
  }, [items]);

  // animate dot and label when activeId changes
  useEffect(() => {
    if (!navRef.current) return;
    const allDots =
      navRef.current.querySelectorAll<HTMLElement>(".sidenav_dot");
    // reset all dots
    gsap.to(allDots, {
      scale: 1,
      opacity: 0.9,
      boxShadow: "none",
      duration: 0.18,
      ease: "power2.out",
    });

    if (activeId) {
      const activeBtn = navRef.current.querySelector<HTMLElement>(
        `button[data-id='${activeId}']`
      );
      const dot = activeBtn?.querySelector<HTMLElement>(".sidenav_dot");
      const label = activeBtn?.querySelector<HTMLElement>(".sidenav_label");
      if (dot)
        gsap.to(dot, {
          scale: 1.3,
          opacity: 1,
          boxShadow: "0 6px 18px rgba(229,9,20,0.18)",
          duration: 0.28,
          ease: "elastic.out(1,0.4)",
        });
      if (label)
        gsap.to(label, { color: "var(--primary-color)", duration: 0.18 });
    }
  }, [activeId]);

  return (
    <nav ref={navRef} className="sidenav" aria-label="Section navigation">
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <button
              data-id={it.id}
              className={`sidenav_btn ${activeId === it.id ? "active" : ""}`}
              onClick={handleClick(it.id)}
              title={it.label}
              aria-label={`Go to ${it.label}`}
            >
              <span className="sidenav_dot" aria-hidden="true"></span>
              <span className="sidenav_label">{it.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;

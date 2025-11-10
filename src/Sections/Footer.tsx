import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useGSAP(() => {
    gsap.fromTo(
      ".footer_links a",
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".site_footer", start: "top 95%" },
      }
    );
    gsap.fromTo(
      ".footer_socials a",
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: ".site_footer", start: "top 95%" },
      }
    );
  });

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <footer className="site_footer">
      <div className="container footer_inner">
        <div className="footer_left">
          <div className="copyright">
            © {new Date().getFullYear()} TECHPRO. All rights reserved.
          </div>
          <nav className="footer_links" aria-label="Footer navigation">
            <a href="/home">Home</a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/developers") {
                  navigate("/developers");
                  // wait a tick for navigation then scroll
                  setTimeout(() => {
                    const el = document.getElementById("about");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                } else {
                  const el = document.getElementById("about");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              About
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/developers") {
                  navigate("/developers");
                  setTimeout(() => {
                    const el = document.getElementById("projects");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                } else {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== "/developers") {
                  navigate("/developers");
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                } else {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="footer_right">
          <div className="footer_socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>

          <div className="footer_ctas">
            <button
              className="btn ghost back_to_top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              ↑ Top
            </button>

            <button
              className="btn ghost theme_toggle"
              onClick={toggleTheme}
              aria-pressed={theme === "light"}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

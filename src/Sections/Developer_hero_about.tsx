import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import hero from "../assets/717645337933573.jpg";
import GlassLogo from "../assets/glass_image.mp4";
import One from "../assets/one.png";
import { Divider } from "@/Components/Divider";
import { BadgeHeader } from "@/Components/Badge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skills } from "@/Components/Skills";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Developer_hero_about = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "a Frontend Developer",
        "a Backend Developer",
        "an AI ENGINEER ",
        "a Mobile App Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (imgRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(imgRef.current, {
        keyframes: [
          { x: 650, y: 400, scale: 3, duration: 0.5 }, // first move
          { y: 800, x: 0, duration: 1.2, rotate: 360, scale: 1 }, // second move
          { x: 300, y: 1000, scale: 2, rotate: 360, duration: 1 }, // third move: right, up, shrink, spin, fade
        ],
        ease: "none",
      });
    }
  });
  return (
    <div>
      <div className="navbar flex items-center justify-between">
        <div className="trigger_start flex items-center gap-4">
          <img
            ref={imgRef}
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

      <div className="hero hero_cover md:flex md:justify-between  mt-25">
        <div className="flex-col">
          <div className="hero_text_head">
            <span>I AM</span>
            <h1 className="md:text-7xl text-3xl uppercase">TECHPRO</h1>
          </div>
          <div className="hero_about mt-10">
            <h1 className="text-3xl text-start text-wrap">
              I am <span className="ft_hd auto-type">FULLSTACK DEVELOPER</span>
            </h1>
          </div>
          <div className="portfolio_btn md:gap-5 gap-2 flex mt-5">
            <button className="colored flex items-center justify-center gap-2 ">
              <Play /> Resume
            </button>
            <button>Portfolio</button>
          </div>
        </div>
        <div className="hero_img md:mt-0 mt-50">
          <div className="logo_video mt-10 flex justify-center items-center">
            <img src={GlassLogo} alt="" className="" />
          </div>
        </div>
      </div>

      <Divider />

      <div className="about">
        <BadgeHeader text="About Me" />

        <div className="about_text flex items-center md:mx-20 md:mt-18 m-10 justify-center ">
          <h1 className="text-4xl">
            {" "}
            <span className="pl-60"></span>I’m a versatile{" "}
            <span>
              full-stack developer who partners with founders to turn complex
              ideas into high-performing digital products.{" "}
            </span>
            I build fast, scalable, and secure applications with clear code and
            thoughtful architecture
          </h1>
        </div>

        <div className="about_text_btm">
          <span>
            My core skills include React, Next.js, TypeScript, Node.js, Express,
            PostgreSQL, SQL, Tailwind CSS, and real-time features with
            WebSockets, along with experience in payment integrations, API's,
            NEST JS, Prisma, Drizzle, and basically anything the system needs.
          </span>
          <div>
            {" "}
            <button>See my work</button>
          </div>
        </div>
      </div>
      <Divider />

      <div ref={sectionRef} className="skills">
        <BadgeHeader text="My Skill" />
        <Skills />
      </div>
    </div>
  );
};

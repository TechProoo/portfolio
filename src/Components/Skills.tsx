import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Tsjs from "../assets/ts-js.png";
import ReactNext from "../assets/react_next.png";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, SplitText);

export const Skills = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.utils.toArray(".skill_item").forEach((item) => {
      const element = item as Element;
      const img = element.querySelector(".skill_item_img");
      const nameH1 = element.querySelector(".skill_item_name h1");

      const split = SplitText.create(nameH1, { type: "chars", mask: "chars" });

      gsap.set(split.chars, { y: "125%" });

      split.chars.forEach((char, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: `top+=${index * 25 - 250} top`,
          end: `top+=${index * 25 - 100} top`,
          scrub: 1,
          animation: gsap.fromTo(
            char,
            { y: "125%" },
            { y: "0%", ease: "none" }
          ),
        });
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          { clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
          }
        ),
      });

      ScrollTrigger.create({
        trigger: element,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
            ease: "none",
          }
        ),
      });
    });
  });

  return (
    <div>
      <section className="skill_section skills_hero">
        <h1>My Expertise</h1>
      </section>

      <section className="skill_section skill_item">
        <div className="skill_item_img">
          <img src={Tsjs} alt="" />
        </div>
        <div className="skill_item_name">
          <h1>Javascript and Typescript</h1>
        </div>
      </section>

      <section className="skill_section skill_item">
        <div className="skill_item_img">
          <img src={ReactNext} alt="" />
        </div>
        <div className="skill_item_name">
          <h1>React and Next JS</h1>
        </div>
      </section>

      <section className="skill_section skills_outro">
        <h1>Back to base</h1>
      </section>
    </div>
  );
};

import { Play } from "lucide-react";
import { useEffect } from "react";
import Typed from "typed.js";
import hero from "../assets/717645337933573.jpg";
import GlassLogo from "../assets/glass_image.mp4";
import One from "../assets/one.png";

export const Developers = () => {
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

  return (
    <div className="hero_cover md:mt-15 md:px-15 p-5">
      {/* <div className="hero_cover">
        <img src="" alt="" />
      </div> */}
      <div className="navbar flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
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

      <div className="hero md:flex md:justify-between  mt-25">
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
    </div>
  );
};

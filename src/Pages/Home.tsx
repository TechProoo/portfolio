import { Link } from "react-router-dom";
import GlassLogo from "../assets/glass_image.mp4";
import { BadgeQuestionMark } from "lucide-react";

export const Home = () => {
  return (
    <div>
      <div className="logo_video mt-10 flex justify-center items-center">
        <img src={GlassLogo} alt="" />
      </div>

      <div className="selection_section text-center mt-10">
        <h1 className="text-5xl flex text-center justify-center items-center gap-3">
          Who's Checking <BadgeQuestionMark color="#ffffff" size={40} />
        </h1>
      </div>

      <div className="flex gap-5 justify-center mt-10 md:gap-20">
        <Link
          to={"/developers"}
          className="text-center decoration-0 user_card_cover cursor-pointer"
        >
          <div className="user_card rounded-lg  hover:scale-105 hover:border-[#a80218] transition-all duration-300 cursor-pointer"></div>
          <h2 className="mt-1 text-lg ">Developers</h2>
        </Link>
        <div className="text-center cursor-pointer">
          <div className="user_card_two transition-all duration-300 cursor-pointer"></div>
          <h2 className="mt-1 text-lg ">Recruiters</h2>
        </div>
        <div className="text-center cursor-pointer">
          <div className="user_card_three border-2 border-white rounded-lg  hover:scale-105 hover:border-blue-500 transition-all duration-300 cursor-pointer"></div>
          <h2 className="mt-1 text-lg ">Explorers</h2>
        </div>
      </div>
    </div>
  );
};

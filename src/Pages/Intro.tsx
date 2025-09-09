import heroVideo from "../assets/PixVerse_V5_Image_Text_360P_Create_a_short_vid.mp4";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      />
    </div>
  );
};

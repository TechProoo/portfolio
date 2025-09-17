import arrow from "../assets/red_arrow.png";

interface BadgeHeaderProps {
  text: string;
}

export const BadgeHeader: React.FC<BadgeHeaderProps> = ({ text }) => {
  return (
    <div className="arrow flex items-center mt-3">
      <span>{text}</span>
      <img className="w-20" src={arrow} alt="" />
    </div>
  );
};

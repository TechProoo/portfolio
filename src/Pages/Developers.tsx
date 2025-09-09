import { Button, HStack } from "@chakra-ui/react";

export const Developers = () => {
  return (
    <div className="mt-15 mx-15">
      <div className="navbar">
        <h1 className="text-3xl font-bold text-white">Developers Page</h1>
      </div>

      <div className="hero flex justify-between mt-25">
        <div className="flex-col">
          <div className="hero_text_head">
            <h1 className="md:text-5xl uppercase">FullStack Developer</h1>
          </div>
          <div className="portfolio_btn md:gap-5 gap-2 flex mt-10">
            <button className="colored">Resume</button>
            <button>Portfolio</button>
          </div>
          <div className="staring">
            <HStack>
              <Button>Click me</Button>
              <Button>Click me</Button>
            </HStack>
          </div>
          <div></div>
        </div>
        <div className="hero_img">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

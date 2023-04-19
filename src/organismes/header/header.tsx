import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Header: React.FC = () => {
  const { isPhone } = useWindowDimensions();

  return (
    <header className="flex items-center justify-between py-5 px-8 text-black border border-b-[#12000] ">
      <span className="flex items-center gap-4">
        <img src="/images/troll-face.svg" alt="logo" className="h-12 md:h-16" />
        {!isPhone && (
          <h2 className="text-lg font-semibold md:text-4xl text-orange">
            Memeify
          </h2>
        )}
      </span>
      <h4 className="text-light-purple text-sm font-extralight">
        Meme Generator
      </h4>
    </header>
  );
};

export default Header;

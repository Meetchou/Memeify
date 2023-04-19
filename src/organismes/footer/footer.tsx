import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center justify-between py-5 px-8 bg-orange text-white ">
      <div className="lg:grid-cols-12 flex items-start gap-10 justify-between">
        <span className="lg:col-span-7 flex items-start gap-1 text-sm">
          <AiOutlineCopyright size={20} />
          Amanfo Kwame. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

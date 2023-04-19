import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
}

const MemeLayout: React.FC<IProps> = ({ children }) => {
  return <div className="h-full p-9">{children}</div>;
};

export default MemeLayout;

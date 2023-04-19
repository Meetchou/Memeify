import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode;
}

const FormLayout: React.FC<IProps> = ({ children }) => {
  return <div className="grid grid-cols-2 gap-8">{children}</div>;
};

export default FormLayout;

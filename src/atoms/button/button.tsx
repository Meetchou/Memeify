import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
  onClick?: () => void;
  size?: "medium" | "large";
  gradient?: "default" | "reverse";
  type?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  onClick,
  size = "medium",
  className,
  type = "primary",
}) => {
  const color =
    type === "primary"
      ? "bg-orange text-white hover:opacity-70 active:bg-gradient-to-r from-orange to-white"
      : "bg-white border border-orange text-orange hover:text-white hover:bg-light-orange active:bg-gradient-to-r from-white to-orange";

  return (
    <button
      onClick={onClick}
      className={`${
        size === "medium" ? "px-8" : "w-full"
      } ease-in duration-150 my-4 rounded-lg p-3 text-sm md:text-base ${color} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/button/button";

interface IProps {
  title: string;
  description: string;
  img: string;
}

const ErrorPage: React.FC<IProps> = ({ title, description, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-96">
      <img src={img} className="w-96" />
      <h1 className="text-7xl font-bold text-orange">{title}</h1>
      <p className="text-lg text-center w-1/2">{description}</p>
      <Button onClick={() => navigate(-1)}>Back to Home Page</Button>
    </div>
  );
};

export default ErrorPage;

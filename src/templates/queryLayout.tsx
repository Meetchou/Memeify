import React, { ReactNode } from "react";
import { UseQueryResult } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../atoms/loader/loader";
import { IApiPhoto } from "../utils/interfaces";

interface IProps {
  queries: UseQueryResult<IApiPhoto[], unknown>[];
  children: ReactNode | ReactNode[];
}

const QueryLayout: React.FC<IProps> = ({ queries, children }) => {
  const navigate = useNavigate();
  if (queries.some((query) => query.isError)) {
    navigate("/500");
  } else if (queries.every((query) => query.data)) {
    return <>{children}</>;
  }
  return (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default QueryLayout;

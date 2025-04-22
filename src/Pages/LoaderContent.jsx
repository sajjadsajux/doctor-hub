import React from "react";
import { PacmanLoader } from "react-spinners";

const LoaderContent = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <PacmanLoader />
    </div>
  );
};

export default LoaderContent;

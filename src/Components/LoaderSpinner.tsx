import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner: React.FC = () => {
  return (
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={100000} //3 secs
    />
  );
};

export default LoaderSpinner;

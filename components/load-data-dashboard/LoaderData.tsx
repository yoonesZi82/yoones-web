import React from "react";
import { Triangle } from "react-loader-spinner";

function LoaderDashboardData() {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#faf4f0"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default LoaderDashboardData;

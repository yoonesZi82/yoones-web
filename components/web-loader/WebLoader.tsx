import React from "react";
import { DNA } from "react-loader-spinner";

const WebLoader: React.FC = () => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default WebLoader;

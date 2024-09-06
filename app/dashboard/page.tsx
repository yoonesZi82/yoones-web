import { usePathname } from "next/navigation";
import React from "react";
import InfoResult from "./components/info-result/InfoResult";

function page() {
  return (
    <InfoResult
      title="You are in the main page, click to see the projects"
      titleButton="See Projects"
      link="/dashboard/projects"
    />
  );
}

export default page;

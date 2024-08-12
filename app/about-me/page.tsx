import BreadCrumb from "@/components/breadcrump/BreadCrump";
import React from "react";
import ShowMe from "./components/showMe/ShowMe";
import Skill from "./components/skill-part/Skill";

function page() {
  return (
    <>
      <div className="pt-10 w-full">
        <BreadCrumb />
      </div>
      <div className="flex flex-col justify-start items-start gap-5 p-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl text-dark-blue-color"> تماس با ما </h1>
        </div>
        <hr className="border-2 border-normalBlack border-solid w-full" />
      </div>
      <div className="p-5">
        <ShowMe />
        <Skill />
      </div>
    </>
  );
}

export default page;

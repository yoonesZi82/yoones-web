import BreadCrumb from "@/components/breadcrump/BreadCrump";
import React from "react";
import ContactForm from "./components/form-contact/ContactForm";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import LoaderData from "@/components/load-data/LoaderData";

function page() {
  const Map = useMemo(() => {
    return dynamic(() => import("./components/MapPart/Map"), {
      loading: () => (
        <div className="flex justify-center items-center p-20 w-full">
          <LoaderData />
        </div>
      ),
      ssr: false,
    });
  }, []);
  return (
    <>
      <div className="pt-10 w-full">
        <BreadCrumb />
      </div>
      <div className="flex flex-col justify-start items-start gap-5 p-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl text-dark-blue-color">Contact Me</h1>
        </div>
        <hr className="border-2 border-normalBlack border-solid w-full" />
      </div>
      <div className="p-5">
        <Map posix={[32.68669734, 51.61509843]} />
        <ContactForm />
      </div>
    </>
  );
}

export default page;

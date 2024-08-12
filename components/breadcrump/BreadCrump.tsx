"use client";
import React from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiHouseLine } from "react-icons/pi";

const BreadCrumb: React.FC = () => {
  const path = usePathname();
  const arrayPath = path?.split("/");

  return (
    <Breadcrumb
      className="pt-6 pr-5"
      items={[
        {
          title: (
            <Link href="/">
              {" "}
              <PiHouseLine size={18} />{" "}
            </Link>
          ),
        },
        {
          title: (
            <Link href={`${arrayPath[1]}`}>
              {" "}
              {arrayPath[1] === "projects"
                ? "Projects"
                : arrayPath[1] === "blogs"
                ? "Blogs"
                : arrayPath[1] === "about-me"
                ? "About Me"
                : arrayPath[1] === "contact-me"
                ? "Contact Me"
                : "Details"}
            </Link>
          ),
        },
      ]}
    />
  );
};

export default BreadCrumb;

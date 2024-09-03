"use client";
import { Button, Result } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function page() {
  const path = usePathname();
  return (
    <div
      className={
        path === "/dashboard"
          ? "flex justify-center items-center py-[12%] w-full white-title"
          : "flex justify-center items-center py-[12%] w-full black-title"
      }
    >
      <Result
        className="text-meloWhite"
        title="You are in the main page, click to see the projects"
        extra={
          <Link href={"/dashboard/projects"}>
            <Button
              type="primary"
              key="console"
              className="pt-[10px] pb-[30px] font-medium text-2xl text-meloWhite btn"
            >
              See Projects
            </Button>
          </Link>
        }
      />{" "}
    </div>
  );
}

export default page;

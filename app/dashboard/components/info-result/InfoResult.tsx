"use client";
import React from "react";
import { Result, Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface InfoResultProp {
  title: string;
  titleButton: string;
  link: string;
}
const InfoResult: React.FC<InfoResultProp> = ({ title, titleButton, link }) => {
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
        status="info"
        title={title}
        extra={
          <Link href={link}>
            <Button
              type="primary"
              key="refresh"
              className="bg-meloWhite hover:bg-normalBlack font-medium text-3xl text-normalBlack mobile:text-3xl tablet:text-3xl laptop:text-2xl desktop:text-2xl hover:text-meloWhite transition-colors duration-500 btn"
            >
              {titleButton}
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default InfoResult;

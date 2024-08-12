"use client";
import { Spin } from "antd";
import React from "react";
import LatestProps from "./types/LatestProps";
import GlobalCart from "./cart/GlobalCart";
import NumberPage from "../pagenation/PageBox";
import { usePathname } from "next/navigation";

const LatestCart: React.FC<LatestProps> = ({
  title,
  cartData,
  error,
  loading,
  total,
  currentPage,
}) => {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-5 my-20 w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-medium text-4xl text-normalBlack"> {title} </h1>
        </div>
        <hr className="border-2 border-normalBlack rounded-xl w-full" />
      </div>
      <div
        className={
          loading || error
            ? "w-full flex justify-center items-center mt-10"
            : "gap-10 grid grid-cols-1 desktop:grid-cols-4 laptop:grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 mt-10"
        }
      >
        {loading ? (
          <div className="flex justify-center items-center w-full">
            <Spin size="large" />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center w-full">
            <h1 className="font-medium text-4xl text-red">{error}</h1>
          </div>
        ) : title === "پروژه ها" ? (
          cartData.map((cart) => (
            <div className="flex justify-center items-center">
              <GlobalCart
                id={cart.id}
                src={cart.src}
                title={cart.title}
                date={cart.date}
                tag={cart.tag}
                type={cart.type}
                link={cart.link}
              />
            </div>
          ))
        ) : title === "وبلاگ ها" ? (
          cartData.map((cart) => (
            <div className="flex justify-center items-center">
              <GlobalCart
                id={cart.id}
                src={cart.src}
                title={cart.title}
                date={cart.date}
                tag={cart.tag}
                type={cart.type}
                description={cart.description}
              />
            </div>
          ))
        ) : null}
      </div>
      {path.includes("/projects") ? (
        <NumberPage total={total} currentPageNumber={currentPage} />
      ) : path.includes("/blogs") ? (
        <NumberPage total={total} currentPageNumber={currentPage} />
      ) : null}
    </div>
  );
};

export default LatestCart;

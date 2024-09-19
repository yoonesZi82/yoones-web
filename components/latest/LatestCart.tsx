"use client";
import React from "react";
import LatestProps from "./types/LatestProps";
import GlobalCart from "./cart/GlobalCart";
import NumberPage from "../pagenation/PageBox";
import { usePathname } from "next/navigation";
import LoaderData from "../load-data/LoaderData";

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
        key={title}
        className={
          loading || error || cartData.length === 0
            ? "w-full flex justify-center items-center mt-10"
            : "gap-10 grid grid-cols-1 desktop:grid-cols-4 laptop:grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 mt-10"
        }
      >
        {loading && (
          <div className="flex justify-center items-center w-full">
            <LoaderData />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center w-full">
            <h1 className="font-medium text-4xl text-neutral-600">{error}</h1>
          </div>
        )}
        {!loading && cartData.length === 0 && (
          <div className="flex justify-center items-center w-full">
            <h1 className="font-medium text-4xl text-neutral-600">
              {" "}
              There are no blogs to display 😔{" "}
            </h1>
          </div>
        )}
        {!loading &&
          !error &&
          title === "Projects" &&
          cartData.map((cart) => (
            <div className="flex justify-center items-center" key={cart._id}>
              <GlobalCart
                id={cart._id}
                src={cart.src}
                title={cart.title}
                date={cart.date}
                tag={cart.tag}
                type={cart.type}
                link={cart.link}
              />
            </div>
          ))}
        {!loading &&
          !error &&
          title === "Blogs" &&
          cartData.map((cart) => (
            <div className="flex justify-center items-center" key={cart._id}>
              <GlobalCart
                id={cart._id}
                src={cart.src}
                title={cart.title}
                date={cart.date}
                tag={cart.tag}
                type={cart.type}
                description={cart.description}
              />
            </div>
          ))}
      </div>
      {path.includes("/projects") && total && currentPage ? (
        <NumberPage total={total} currentPageNumber={currentPage} />
      ) : path.includes("/blogs") && total && currentPage ? (
        <NumberPage total={total} currentPageNumber={currentPage} />
      ) : null}
    </div>
  );
};

export default LatestCart;

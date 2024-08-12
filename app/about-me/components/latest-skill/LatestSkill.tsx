import React from "react";
import LatestSkillTypes from "./types/LatestSkillTypes";
import SkillCart from "./cart/SkillCart";
import { Spin } from "antd";
import NumberPage from "@/components/pagenation/PageBox";

const LatestSkill: React.FC<LatestSkillTypes> = ({
  title,
  cartData,
  error,
  loading,
  total,
  currentPage,
}) => {
  return (
    <div className="flex flex-col gap-5 my-28 w-full">
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
        ) : !error ? (
          cartData.map((cart) => {
            if ("tag" in cart) {
              return (
                <div className="flex justify-center items-center">
                  <SkillCart
                    id={cart.id}
                    tag={cart.tag as string}
                    src={cart.src}
                    rate={cart.rate as number}
                  />
                </div>
              );
            }
          })
        ) : null}
      </div>
      <NumberPage total={total} currentPageNumber={currentPage} />
    </div>
  );
};

export default LatestSkill;

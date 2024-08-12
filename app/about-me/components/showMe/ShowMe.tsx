"use client";
import React from "react";
import { Button } from "antd";
import { PiArrowBendRightDownBold } from "react-icons/pi";

function ShowMe() {
  return (
    <div className="flex desktop:flex-row laptop:flex-row flex-col mobile:flex-col tablet:flex-col items-center gap-20 w-full">
      <div className="desktop:w-[30%] laptop:w-[30%] w-[45%] mobile:w-[45%] tablet:w-[40%]">
        <img src="/images/me.jpg" alt="me" className="rounded-xl" />
      </div>
      <div className="desktop:w-[70%] laptop:w-[70%] flex flex-col justify-center items-start gap-8 w-[55%] mobile:w-[55%] tablet:w-[60%]">
        <h1 className="font-medium text-4xl text-normalBlack"> Hi friends🖐️</h1>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          I am Yoones Ghale Renani, a front-end specialist, just click here I
          will turn it into a site for you, just tell me your ideas and I will
          do it for you I will do it, or even if you don't have an idea, ask me
          to find it for you with my own creativity I do your site.
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          I was born in 2002, I am still studying, I am getting my master's
          degree and for now I am exempt from military service
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          I would be happy if you could contact me for your site and your
          ideas❤️
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          I have been working professionally for almost three years and coding
          in several companies I worked in different ways, I was in this job in
          the professions that I know In short, I want to tell you react js,
          next js, restful api, ... if you want To understand more fully what
          skills I have, just look down Draw 👇{" "}
        </p>
        <div className="flex justify-center items-center w-full">
          <Button
            className="flex-row-reverse bg-meloWhite hover:bg-normalBlack shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] py-[14px] border-none rounded-lg h-[44px] font-medium text-2xl hover:text-meloWhite transition-colors duration-500 btn"
            icon={<PiArrowBendRightDownBold size={20} />}
            onClick={() => window.scrollTo({ top: 811, behavior: "smooth" })}
          >
            See Your SKill{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowMe;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import { PiLaptop } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

function Main() {
  const [descriptionEnMe, setDescription] =
    useState<string>(`My name is Yoones Ghaleh Renani, I am a front-end specialist born in 2013 and I have been looking for more experience and updating myself for nearly three consecutive years, now I can call myself a senior in this field and one of my best skills is next js and react , keep in touch with me so that I can create attractive sites for you according to your wishes✌️`);

  return (
    <div className="flex desktop:flex-row laptop:flex-row flex-col mobile:flex-col tablet:flex-col items-center gap-10 w-full">
      <div className="desktop:w-[40%] laptop:w-[40%] flex justify-center items-center w-[45%] mobile:w-[45%] tablet:w-[40%]">
        <Image
          src="/images/me.jpg"
          alt="logo"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="desktop:w-[60%] laptop:w-[60%] flex flex-col justify-center items-center gap-7 w-[55%] mobile:w-[55%] tablet:w-[60%]">
        <div>
          <TypeAnimation
            sequence={[descriptionEnMe, 1000]}
            wrapper="p"
            speed={75}
            className="font-medium text-3xl text-center leading-[25px]"
            repeat={Infinity}
          />
        </div>
        <div>
          <Link href="/about-me">
            <Button
              icon={<PiLaptop size={20} />}
              className="flex-row-reverse bg-meloWhite hover:bg-normalBlack shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] py-[14px] border-none rounded-lg h-[44px] font-medium text-2xl hover:text-meloWhite transition-colors duration-500 btn"
            >
              View more{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

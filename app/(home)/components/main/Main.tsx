"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import { PiLaptop } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

function Main() {
  const [html, setHtml] = useState<null | string>("rtl");
  const [descriptionFaMe, setDescription] =
    useState<string>(`من یونس قلعه رنانی هستم متخصص حوضه قرانت اند میباشم متولد سال 1382
    هستم و نزدیک به سه سال پیاپی دنبال کسب تجربه بیشتر و اپدیت نگه داشتن
    خودم هستم در حال حاضر میتونم به خودم لقب سنیور را در ای حوضه به خودم
    دهم و از تاپ ترین مهارت هایه من next js , react است که به کمک ان
    میتوانم سایت هایه جذابی به دلخواه خودتون برایه شما بسازم✌️
`);
  const [descriptionEnMe, setDescriptionEnMe] = useState<string>(
    `
My name is Younes Ghaleh Renani, I am a specialist in the Qur'an and basin, I was born in 2013 and I have been seeking to gain more experience and keep myself updated for nearly three years. My next js is react, with the help of which I can create attractive sites for you according to your wishes ✌️`
  );

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      setHtml(htmlElement.dir);
    }
  }, [html]);

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
            sequence={[
              html === "rtl" ? descriptionFaMe : descriptionEnMe,
              1000,
            ]}
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
              className="flex flex-row-reverse justify-center items-center bg-meloWhite hover:bg-normalBlack shadow-[0_0_12px_0_rgba(0,0,0,0.58)] border-none rounded-lg font-medium text-2xl text-normalBlack hover:text-meloWhite transition-colors duration-500"
            >
              مشاهده بیشتر
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

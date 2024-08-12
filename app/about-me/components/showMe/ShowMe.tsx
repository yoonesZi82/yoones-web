"use client";
import React from "react";
import { Button } from "antd";
import { PiArrowBendLeftDown } from "react-icons/pi";

function ShowMe() {
  return (
    <div className="flex desktop:flex-row laptop:flex-row flex-col mobile:flex-col tablet:flex-col items-center gap-10 w-full">
      <div className="desktop:w-[30%] laptop:w-[30%] w-[45%] mobile:w-[45%] tablet:w-[40%]">
        <img src="/images/me.jpg" alt="me" className="rounded-xl" />
      </div>
      <div className="desktop:w-[70%] laptop:w-[70%] flex flex-col justify-center items-start gap-8 w-[55%] mobile:w-[55%] tablet:w-[60%]">
        <h1 className="font-medium text-4xl text-normalBlack">سلام رفیق 🖐️</h1>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          من یونس قلعه رنانی هستم متخصص فرانت اند اینجا کافی لب تر کنی همونو
          برات تبدیل به سایتش میکنم کافیه ایده هاتو بهم بگی همونو برات پیاده
          میکنم یا حتی اگه ایده هم نداری بسپرش به خودم با خلاقیت خودم برات پیادش
          میکنم سایتتو.
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          من متولد سال 1382 هستم هنوز درحال تحصیلم دارم ارشدمو میگیرم و فعلا
          معاف از سربازی هستم
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          خوش حال میشم برایه سایتت و ایده هات باهام در تماس باشی ❤️
        </p>
        <p className="font-medium text-[#333] text-3xl leading-[25px]">
          من نزدیک به سه ساله دارم حرفه کار میکنم و کد میزنم تویه چنتا شرکت
          مختلف کار کردم همه جوره تویه این کار بودم ار حرفه های ک بلدم به طور
          مختصر بخوام بگم بهت react js , next js , restful api , ... اگه میخوایی
          خیلی کامل تر متوجه بشی چه مهارت هایی دارم کافیه یه نگاه به پایین
          بندازی 👇
        </p>
        <Button
          className="flex flex-row-reverse justify-center items-center font-medium text-2xl text-normalBlack btn"
          icon={<PiArrowBendLeftDown size={20} />}
          onClick={() => window.scrollTo({ top: 811, behavior: "smooth" })}
        >
          مهارتتو ببینم
        </Button>
      </div>
    </div>
  );
}

export default ShowMe;

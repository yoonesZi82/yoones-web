"use client";
import React from "react";
import { Button } from "antd";
import { PiSignInBold } from "react-icons/pi";
import FormBtnPropsTypes from "../types/buttonTypes";

const ButtonForm = ({ loading }: FormBtnPropsTypes) => {
  return (
    <div>
      <Button
        htmlType="submit"
        size="large"
        icon={<PiSignInBold size={20} />}
        loading={loading}
        className="flex flex-row-reverse justify-center items-center bg-meloWhite hover:bg-gray-200 shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] py-4 border-none w-full text-3xl text-color-white text-normalBlack hover:text-normalBlack transition-all duration-500 send_btn_form"
      >
        Login
      </Button>
    </div>
  );
};

export default ButtonForm;

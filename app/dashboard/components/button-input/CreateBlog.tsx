"use client";
import React from "react";
import { Button } from "antd";
import { PiPlusBold, PiArrowsClockwiseBold } from "react-icons/pi";
import FormBtnPropsTypes from "./types/buttonType";

const CreateBlog = ({ loading, titleButton, index }: FormBtnPropsTypes) => {
  return (
    <Button
      htmlType="submit"
      size="large"
      icon={
        index === 1 ? (
          <PiPlusBold size={20} />
        ) : (
          <PiArrowsClockwiseBold size={20} />
        )
      }
      loading={loading}
      className="flex flex-row-reverse justify-center items-center bg-meloWhite hover:bg-[rgba(1,1,1,0.3)] py-4 border-none w-full text-3xl text-color-white text-normalBlack hover:text-meloWhite transition-all duration-500 send_btn_form"
    >
      {titleButton}
    </Button>
  );
};

export default CreateBlog;

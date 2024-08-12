"use client";
import React from "react";
import { Button } from "antd";
import { PiPaperPlaneTilt } from "react-icons/pi";
import FormBtnPropsTypes from "../types/buttonType";

const ButtonForm = ({ loading }: FormBtnPropsTypes) => {
  return (
    <div>
      <Button
        htmlType="submit"
        size="large"
        icon={<PiPaperPlaneTilt size={20} />}
        loading={loading}
        className="flex flex-row-reverse justify-center items-center bg-color-gold py-4 border-none w-full text-3xl text-color-white transition-all duration-500 send_btn_form"
      >
        {" "}
        ارسال{" "}
      </Button>
    </div>
  );
};

export default ButtonForm;

import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";
import AddBtnType from "./types/AddBtnType";

const AddBtn: React.FC<AddBtnType> = ({ link, titleButton }) => {
  return (
    <Link href={link}>
      <Button
        className="flex justify-center items-center hover:bg-normalBlack mb-10 pb-4 border-none text-normalBlack hover:text-meloWhite btn"
        icon={<PiPlusBold size={20} color="gray" />}
      >
        {titleButton}
      </Button>
    </Link>
  );
};

export default AddBtn;

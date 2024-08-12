import { Button } from "antd";
import Link from "next/link";
import React from "react";

function ShortAboutMe() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-[#f3f1f1] shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] py-16 rounded-xl w-full text-center">
      <div>
        <p className="font-medium text-3xl text-normalBlack">
          {" "}
          To contact me, just click on the button below 👇
        </p>
      </div>
      <div>
        <Link href="/contact-me">
          <Button className="flex-row-reverse bg-meloWhite hover:bg-normalBlack shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] py-[14px] border-none rounded-lg h-[44px] font-medium text-2xl hover:text-meloWhite transition-colors duration-500 btn">
            {" "}
            Contact Me{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ShortAboutMe;

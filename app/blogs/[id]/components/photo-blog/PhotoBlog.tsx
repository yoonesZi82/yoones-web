import CreateDatePicker from "@/utils/CreateDatePicker";
import { Tag } from "antd";
import React from "react";

interface PhotoBlogPropType {
  src: string;
  date: string;
  title: string;
}

const PhotoBlog: React.FC<PhotoBlogPropType> = ({ date, src, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-10 w-full">
      <div className="desktop:w-[40%] laptop:w-[40%] w-[75%] mobile:w-[75%] tablet:w-[60%]">
        <img
          src={src ? src : "/images/fallback-image.pngk"}
          alt=""
          className={
            src
              ? "rounded-xl w-full max-h-[280px] object-cover"
              : "rounded-xl w-full max-h-[280px] object-cover"
          }
          onError={(e) => {
            e.currentTarget.src = "/images/fallback-image.png";
          }}
        />
      </div>
      <div className="desktop:w-[40%] laptop:w-[40%] flex justify-between items-center w-[75%] mobile:w-[75%] tablet:w-[60%]">
        <div>{CreateDatePicker({ date: date ? date : "", disable: true })}</div>
        <Tag color="#111111">{title ? title : "Title"}</Tag>
      </div>
    </div>
  );
};

export default PhotoBlog;

import React from "react";
import { Result, Button } from "antd";
import { usePathname } from "next/navigation";

interface ErrorResultProp {
  title: string;
  titleButton: string;
  page: string;
  onClick?: () => void;
}
const ErrorResult: React.FC<ErrorResultProp> = ({
  title,
  titleButton,
  page,
  onClick,
}) => {
  const path = usePathname();
  return (
    <div
      className={
        path === `/dashboard/${page.toLowerCase()}`
          ? "flex justify-center items-center py-[12%] w-full white-title"
          : "flex justify-center items-center py-[12%] w-full black-title"
      }
    >
      <Result
        status="warning"
        title={title}
        extra={
          <Button
            type="primary"
            key="refresh"
            className="bg-meloWhite hover:bg-normalBlack font-medium text-3xl text-normalBlack mobile:text-3xl tablet:text-3xl laptop:text-2xl desktop:text-2xl hover:text-meloWhite transition-colors duration-500 btn"
            onClick={onClick}
          >
            {titleButton}
          </Button>
        }
      />
    </div>
  );
};

export default ErrorResult;

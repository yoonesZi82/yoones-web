"use client";
import { Pagination } from "antd";
import { usePathname } from "next/navigation";

interface NumberPageProps {
  total: number;
  currentPageNumber: (current: number, size: number) => void;
}

const NumberPage: React.FC<NumberPageProps> = ({
  total,
  currentPageNumber,
}) => {
  const path = usePathname();
  return (
    <div className="flex justify-center items-center my-14 w-full text-center">
      <Pagination
        className={path === "/dashboard" ? "" : "white-icon"}
        onChange={currentPageNumber}
        defaultCurrent={1}
        total={total}
      />
    </div>
  );
};

export default NumberPage;

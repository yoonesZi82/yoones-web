import { Pagination } from "antd";

interface NumberPageProps {
  total: number;
  currentPageNumber: (current: number, size: number) => void;
}

const NumberPage: React.FC<NumberPageProps> = ({
  total,
  currentPageNumber,
}) => {
  return (
    <div className="flex justify-center items-center my-14 w-full text-center">
      <Pagination
        onChange={currentPageNumber}
        defaultCurrent={1}
        total={total}
      />
    </div>
  );
};

export default NumberPage;

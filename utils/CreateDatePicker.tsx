import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface CreateDatePickerProps {
  date: number | string;
  disable: boolean;
}
const CreateDatePicker: React.FC<CreateDatePickerProps> = ({
  date,
  disable,
}) => {
  const dateFormat = "YYYY-MM-DD";
  const getDate = new Date(date).toLocaleDateString("en-US");
  const dateArray = getDate.split("/") as [string, string, string];
  if (dateArray[0].length === 1) {
    dateArray[0] = `0${dateArray[0]}`;
  }
  if (dateArray[1].length === 1) {
    dateArray[1] = `0${dateArray[1]}`;
  }

  const finalData = `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
  return (
    <DatePicker
      defaultValue={dayjs(finalData, dateFormat)}
      disabled={disable}
    />
  );
};

export default CreateDatePicker;

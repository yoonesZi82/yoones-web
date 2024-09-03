import dayjs from "dayjs";

const GetNowDate = () => {
  const now = dayjs().day();
  const nowDay = dayjs().set("day", now).format("dddd/MMM/YYYY") as string;
  return nowDay;
};

export default GetNowDate;

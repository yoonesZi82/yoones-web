"use client";
import React, { useState } from "react";
import { Button, DatePicker, Table, Tooltip, message } from "antd";
import type { TableColumnsType } from "antd";
import { PiTrashBold } from "react-icons/pi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
import ShowModal from "../modal/ShowModal";
import DataMessageType from "./types/TableMessageType";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
interface DataType {
  key: string;
  text: string;
  name: string;
  phone: string;
  email: string;
  date: string;
}

const TableMessage: React.FC<DataMessageType> = ({
  dataSource,
  error,
  loading,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);
  const [messageID, setMessageID] = useState<string>("");
  const columns: TableColumnsType<DataType> = [
    {
      title: "Count",
      render: (record, value, index) => index + 1,
      width: 70,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => {
        const getDate = new Date(date).toLocaleDateString("en-US");
        const dateArray = getDate.split("/");
        if (dateArray[0].length === 1) {
          dateArray[0] = `0${dateArray[0]}`;
        }
        if (dateArray[1].length === 1) {
          dateArray[1] = `0${dateArray[1]}`;
        }

        const finalData = `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;

        return (
          <div>
            <DatePicker defaultValue={dayjs(finalData, dateFormat)} disabled />
          </div>
        );
      },
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text: string, record) => {
        return (
          <Tooltip title="Delete">
            <Button
              icon={<PiTrashBold size={20} color="red" />}
              className="border-none btn"
              onClick={() => {
                setIsModalOpenDelete(true);
                setMessageID(record.key);
              }}
            ></Button>
          </Tooltip>
        );
      },
    },
  ];

  const confirmDelete = () => {
    axios
      .post("/api/messages/delete", {
        key: messageID,
      })
      .then(
        (res) =>
          res.status === 200 && messageApi.success("Deleted successfully")
      )
      .catch((err) => err && messageApi.error("Something went wrong"))
      .finally(() => {
        setIsModalOpenDelete(false);
        window.location.reload();
      });
  };
  const handleCancel = () => {
    setIsModalOpenDelete(false);
  };

  return (
    <>
      {contextHolder}
      <ShowModal
        type="delete"
        title="Delete Project"
        open={isModalOpenDelete}
        onCancel={handleCancel}
        handleCancel={handleCancel}
        confirmDelete={confirmDelete}
      />
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{ pageSize: 5 }}
        rowKey={(record) => record.key?.toString()}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <div className="w-full">
                <p className="text-gray-500">{record.text}</p>
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default TableMessage;

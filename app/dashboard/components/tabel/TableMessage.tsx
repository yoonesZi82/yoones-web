"use client";
import React, { useState } from "react";
import { Button, Table, Tooltip, message, TableColumnsType } from "antd";
import { PiTrashBold } from "react-icons/pi";
import axios from "axios";
import ShowModal from "../modal/ShowModal";
import DataMessageType from "./types/TableMessageType";
import ErrorResult from "../error-result/ErrorResult";
import CreateDatePicker from "@/utils/CreateDatePicker";
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
        return CreateDatePicker({ date, disable: true, active: true });
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
      {error && (
        <ErrorResult
          title="There was a problem receiving information"
          titleButton="Refresh"
          page="message"
          onClick={() => window.location.reload()}
        />
      )}
      {!error && (
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
      )}
    </>
  );
};

export default TableMessage;

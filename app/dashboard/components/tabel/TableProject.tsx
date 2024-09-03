"use client";
import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Modal,
  Result,
  Table,
  Tag,
  Tooltip,
  message,
} from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { PiPencilLineBold, PiPlusBold, PiTrashBold } from "react-icons/pi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import DataProjectType from "./types/TableProjectsType";
import AddBtn from "../add-data-button/AddBtn";
import ShowModal from "../modal/ShowModal";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
interface DataType {
  key: string;
  title: string;
  tag: string;
  photo: string;
  date: string;
  link: string;
}

const TableBlogs: React.FC<DataProjectType> = ({
  dataSource,
  error,
  loading,
}) => {
  const route = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);
  const [projectID, setProjectID] = useState<string>("");
  const columns: TableColumnsType<DataType> = [
    {
      title: "Count",
      render: (record, value, index) => index + 1,
      width: 70,
    },
    {
      title: "Title",
      dataIndex: "title",
      filters: [
        {
          text: "Js",
          value: "Html",
        },
        {
          text: "Category 1",
          value: "Category 1",
          children: [
            {
              text: "Css",
              value: "Css",
            },
          ],
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.title.includes(value as string),
      width: "30%",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      render: (tag: string) => {
        return <Tag color="#111111">{tag}</Tag>;
      },
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
      title: "Photo",
      dataIndex: "src",
      render: (src: string) => {
        return (
          <img
            src={src}
            alt="photo"
            className="rounded-[50%] w-[50px] h-[50px] object-cover"
            onError={(err) => {
              err.currentTarget.src = "/images/logo.png";
            }}
          />
        );
      },

      width: "20%",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text: string, record) => {
        return (
          <div className="flex justify-start items-center gap-10 w-full">
            <Tooltip title="Edit & View">
              <Button
                icon={<PiPencilLineBold size={20} color="gray" />}
                className="border-none btn"
                onClick={() => {
                  setIsModalOpenEdit(true);
                  setProjectID(record.key);
                }}
              ></Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                icon={<PiTrashBold size={20} color="red" />}
                className="border-none btn"
                onClick={() => {
                  setIsModalOpenDelete(true);
                  setProjectID(record.key);
                }}
              ></Button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const confirmEdit = () => {
    setIsModalOpenEdit(false);
    route.push(`/dashboard/projects/${projectID}`);
  };
  const confirmDelete = () => {
    axios
      .post("/api/projects/delete", {
        key: projectID,
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
    setIsModalOpenEdit(false);
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
      <ShowModal
        type="edit"
        title="Edit Project"
        open={isModalOpenEdit}
        onCancel={handleCancel}
        handleCancel={handleCancel}
        confirmEdit={confirmEdit}
      />
      <div className="w-fit">
        <AddBtn link="/dashboard/projects/new" titleButton="Add Project" />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{ pageSize: 5 }}
        rowKey={(record) => record.key?.toString()}
        expandable={{
          expandedRowRender: (record) => {
            console.log(record);

            return (
              <div className="w-full">
                <Link
                  href={"http://" + record.link}
                  target="_blank"
                  className="text-gray-500 underline cursor-pointer"
                >
                  {record.link}
                </Link>
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default TableBlogs;

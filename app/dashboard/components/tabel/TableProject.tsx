"use client";
import React, { useState } from "react";
import { Button, Table, Tag, Tooltip, message, TableColumnsType } from "antd";
import { PiPencilLineBold, PiTrashBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import DataProjectType from "./types/TableProjectsType";
import AddBtn from "../add-data-button/AddBtn";
import ShowModal from "../modal/ShowModal";
import CreateDatePicker from "@/utils/CreateDatePicker";
import ErrorResult from "../error-result/ErrorResult";
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
        return CreateDatePicker({ date, disable: true, active: true });
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
      {error && (
        <ErrorResult
          title="There was a problem receiving information"
          titleButton="Refresh"
          page="projects"
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
      )}
    </>
  );
};

export default TableBlogs;

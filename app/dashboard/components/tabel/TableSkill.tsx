"use client";
import React, { useState } from "react";
import {
  Button,
  Rate,
  Table,
  Tag,
  Tooltip,
  message,
  TableColumnsType,
} from "antd";
import { PiPencilLineBold, PiTrashBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import axios from "axios";
import DataSkillType from "./types/TableSkillsType";
import AddBtn from "../add-data-button/AddBtn";
import ShowModal from "../modal/ShowModal";
import CreateDatePicker from "@/utils/CreateDatePicker";
import ErrorResult from "../error-result/ErrorResult";
interface DataType {
  key: string;
  tag: string;
  photo: string;
  date: string;
  rate: number;
}

const TableBlogs: React.FC<DataSkillType> = ({
  dataSource,
  error,
  loading,
}) => {
  const route = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);
  const [skillID, setSkillID] = useState<string>("");
  const columns: TableColumnsType<DataType> = [
    {
      title: "Count",
      render: (record, value, index) => index + 1,
      width: 70,
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
                  setSkillID(record.key);
                }}
              ></Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                icon={<PiTrashBold size={20} color="red" />}
                className="border-none btn"
                onClick={() => {
                  setIsModalOpenDelete(true);
                  setSkillID(record.key);
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
    route.push(`/dashboard/skills/${skillID}`);
  };
  const confirmDelete = () => {
    axios
      .post("/api/skills/delete", {
        key: skillID,
      })
      .then(
        (res) =>
          res.status === 200 && messageApi.success("Delete skill successfully")
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
          page="skills"
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
            <AddBtn link="/dashboard/skills/new" titleButton="Add Skill" />
          </div>
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
                    <Rate allowHalf value={record.rate} disabled />
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

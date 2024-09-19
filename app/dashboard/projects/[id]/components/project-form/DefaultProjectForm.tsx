"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProjectSchema from "../../../new/components/form-create-project-schema/Schema";
import { z } from "zod";
import TitleInput from "../../../new/components/title-input/TitleInput";
import UploaderInput from "../../../new/components/uploader-input/UploaderInput";
import TagInput from "../../../new/components/tag-input/TagInput";
import LinkInput from "../../../new/components/link-input/LinkInput";
import CreateBlog from "@/app/dashboard/components/button-input/CreateBlog";
import { Alert, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import DetailDataProject from "./types/DetailDataProject";

type SendInfoSchemaType = z.infer<typeof ProjectSchema>;

function BlogForm({ data }: { data: DetailDataProject }) {
  const route = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SendInfoSchemaType>({
    resolver: zodResolver(ProjectSchema),
  });

  const onSubmit: SubmitHandler<SendInfoSchemaType> = (updateData) => {
    setLoading(true);
    const newData = {
      title: updateData.title,
      image: updateData.image,
      link: updateData.link,
      tag: updateData.tag,
      key: data.key,
    };

    axios
      .put("/api/projects/update", newData)
      .then((res) => {
        if (res.status === 200) {
          messageApi.open({
            type: "success",
            content: "Project update successfully",
          });
          route.push("/dashboard/projects");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          messageApi.open({
            type: "warning",
            content: "Pleas chose a new title",
          });
        }
        if (err.response.status === 402) {
          messageApi.open({
            type: "warning",
            content: "Pleas chose a new tag",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {contextHolder}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="desktop:w-[50%] laptop:w-[50%] flex flex-col justify-center items-center gap-10 mx-auto my-0 p-[50px] w-[80%] mobile:w-[80%] tablet:w-[50%]"
      >
        <div className="w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Title :
          </label>

          <TitleInput
            control={control}
            error={errors.title?.message}
            defaultValue={data?.title}
          />
        </div>
        <div className="w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Tag :
          </label>

          <TagInput
            control={control}
            error={errors.tag?.message}
            defaultValue={data?.tag}
          />
        </div>
        <div className="w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Url :
          </label>

          <LinkInput
            control={control}
            error={errors.link?.message}
            defaultValue={data?.link}
          />
        </div>
        <div className="w-full">
          <UploaderInput setValue={setValue} defaultValue={data?.src} />
          {typeof errors.image?.message === "string" && (
            <Alert
              message={errors.image.message}
              type="warning"
              showIcon
              className="mt-3 h-[32px] text-[12px]"
            />
          )}
        </div>
        <div className="flex justify-end items-center mt-8 w-full">
          <CreateBlog
            loading={loading}
            titleButton="Update Project"
            index={2}
          />
        </div>
      </form>
    </>
  );
}

export default BlogForm;

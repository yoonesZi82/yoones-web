"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BlogSchema from "../../../new/components/form-create-blog-schema/Schema";
import { z } from "zod";
import TitleInput from "../../../new/components/title-input/TitleInput";
import UploaderInput from "../../../new/components/uploader-input/UploaderInput";
import TagInput from "../../../new/components/tag-input/TagInput";
import CreateBlog from "@/app/dashboard/components/button-input/CreateBlog";
import { Alert, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import DescriptionInput from "../../../new/components/description-input/DescriptonInput";
import DataType from "../../types/DataType";
import CustomEditor from "@/app/dashboard/components/ch-editor/CustomEditor";

type SendInfoSchemaType = z.infer<typeof BlogSchema>;

function DefaultBlogForm({ data }: { data: DataType }) {
  const route = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SendInfoSchemaType>({
    resolver: zodResolver(BlogSchema),
  });

  const onSubmit: SubmitHandler<SendInfoSchemaType> = (updateData) => {
    setLoading(true);
    const newData = {
      title: updateData.title,
      image: updateData.image,
      description: updateData.description,
      tag: updateData.tag,
      key: data.key,
    };

    axios
      .put("/api/blogs/update", newData)
      .then((res) => {
        if (res.status === 200) {
          messageApi.open({
            type: "success",
            content: "Blogs update successfully",
          });
          route.push("/dashboard/blogs");
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
        if (err.response.status === 405) {
          messageApi.open({
            type: "warning",
            content: "Pleas chose a new description",
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
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Title :
          </label>
          <TitleInput
            control={control}
            error={errors.title?.message}
            defaultValue={data?.title}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Tag :
          </label>

          <TagInput
            control={control}
            error={errors.tag?.message}
            defaultValue={data?.tag}
          />
        </div>
        <div className="flex-flex-col gap-2 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Description :
          </label>
          <CustomEditor
            setValue={setValue}
            defaultValue={data?.description}
            error={errors.description?.message}
          />
        </div>
        <div className="mx-auto my-0 w-full">
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
          <CreateBlog loading={loading} titleButton="Update Blog" index={2} />
        </div>
      </form>
    </>
  );
}

export default DefaultBlogForm;

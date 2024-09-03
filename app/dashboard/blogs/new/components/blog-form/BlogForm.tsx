"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BlogSchema from "../form-create-blog-schema/Schema";
import { z } from "zod";
import TitleInput from "../title-input/TitleInput";
import UploaderInput from "../uploader-input/UploaderInput";
import TagInput from "../tag-input/TagInput";
import CreateBlog from "@/app/dashboard/components/button-input/CreateBlog";
import { Alert, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import CustomEditor from "../../../../components/ch-editor/CustomEditor";

type SendInfoSchemaType = z.infer<typeof BlogSchema>;

function BlogForm({ params }: { params: string }) {
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

  const onSubmit: SubmitHandler<SendInfoSchemaType> = (data) => {
    setLoading(true);
    axios
      .post("/api/blogs/create", data)
      .then((res) => {
        if (res.status === 200) {
          messageApi.open({
            type: "success",
            content: "Blog created successfully :))",
          });
        } else {
          messageApi.open({
            type: "error",
            content: "Blog can not create",
          });
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        route.replace("/dashboard/blogs");
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

          <TitleInput control={control} error={errors.title?.message} />
        </div>
        <div className="w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Tag :
          </label>

          <TagInput control={control} error={errors.tag?.message} />
        </div>
        <div className="w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Description :
          </label>
          <CustomEditor
            setValue={setValue}
            error={errors.description?.message}
          />
        </div>
        <div className="w-full">
          <UploaderInput setValue={setValue} />
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
          <CreateBlog loading={loading} titleButton="Create Blog" index={1} />
        </div>
      </form>
    </>
  );
}

export default BlogForm;

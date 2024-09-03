"use client";
import { Alert, message } from "antd";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ForgetPassSchema from "./forget-pass-schema/ForgetPassSchema";
import axios from "axios";
import EmailInput from "./email-input/EmailInput";
import PasswordInput from "./password-input/PasswordInput";
import UpdateForm from "./button-input/UpdateButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NewPass from "./new-password-input/NewPass";

type SendInfoSchemaType = z.infer<typeof ForgetPassSchema>;

const ForgetForm: React.FC = () => {
  const route = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendInfoSchemaType>({
    resolver: zodResolver(ForgetPassSchema),
  });

  const onSubmit: SubmitHandler<SendInfoSchemaType> = (data) => {
    setLoading(true);
    axios
      .put("/api/user/forget-pass", {
        email: data.email,
        password: data.password,
        newPassword: data.newPassword,
      })
      .then((res) => {
        messageApi.success("Change password successfully");
        setTimeout(() => {
          reset();
        }, 2000);
        setError("");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setError("Your old password is incorrect");
        }
        if (err.response.status === 402) {
          setError("The old password should not be equal to the new password");
        }
        if (err.response.status === 404) {
          setError("User not found");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {contextHolder}
      <form
        className="desktop:w-[50%] laptop:w-[50%] flex flex-col justify-center items-center gap-10 mx-auto my-0 p-[50px] w-full mobile:w-full tablet:w-[70%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Email :
          </label>
          <EmailInput control={control} error={errors.email?.message} />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            Old password :
          </label>
          <PasswordInput control={control} error={errors.password?.message} />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label className="font-medium text-[13px] text-meloWhite">
            New password :
          </label>
          <NewPass control={control} error={errors.newPassword?.message} />
        </div>
        <UpdateForm loading={loading} />
        <div className="w-full">
          {error ? (
            <Alert
              message={error}
              type="error"
              showIcon
              className="mt-2 h-[32px] text-[12px]"
            />
          ) : null}
        </div>
      </form>
    </>
  );
};

export default ForgetForm;

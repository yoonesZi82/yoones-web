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
import CorrectPass from "./corrct-password-input/CorrectPass";

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
    defaultValues: {
      email: "",
      password: "",
      newPassword: "",
    },
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
          res.status === 201 && route.replace("/login");
        }, 2000);
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
      <div className="flex justify-center items-center mx-auto my-0 h-screen">
        <div className="desktop:w-[35%] laptop:w-[35%] flex flex-col gap-3 border-normalBlack shadow-lg p-5 border-t-4 rounded-lg w-[90%] mobile:w-[90%] tablet:w-[60%]">
          <h1 className="my-4 font-medium text-normalBlack text-xl">
            {" "}
            Forget password form{" "}
          </h1>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-3">
              <EmailInput control={control} error={errors.email?.message} />
            </div>
            <div className="flex flex-col gap-3">
              <PasswordInput
                control={control}
                error={errors.password?.message}
              />
            </div>
            <div className="flex flex-col gap-3">
              <CorrectPass
                control={control}
                error={errors.newPassword?.message}
              />
            </div>
            <UpdateForm loading={loading} />
            {error ? (
              <Alert
                message={error}
                type="error"
                showIcon
                className="mt-2 h-[32px] text-[12px]"
              />
            ) : null}
          </form>
          <div className="flex justify-center items-center my-5 w-full text-center">
            <Link href={"/login"} className="text-normalBlack underline">
              <p className="text-center">Back to login form</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetForm;

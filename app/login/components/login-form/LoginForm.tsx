"use client";
import { Alert, Avatar, Button, message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LoginSchema from "./login-form-schema/LoginSchema";
import axios from "axios";
import EmailInput from "./email-input/EmailInput";
import PasswordInput from "./password-input/PasswordInput";
import ButtonForm from "./button-input/LoginButton";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PiGoogleLogoBold, PiGithubLogoFill, PiUserFill } from "react-icons/pi";
import { JwtPayload } from "jsonwebtoken";

type SendInfoSchemaType = z.infer<typeof LoginSchema>;

interface LoginFormPropsType {
  tokenPayload?: JwtPayload | null;
}
const LoginForm: React.FC<LoginFormPropsType> = ({ tokenPayload }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();
  const route = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendInfoSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (tokenPayload) {
      setIsLogin(true);
      axios
        .post("/api/user/token", {
          email: tokenPayload.email,
        })
        .then((res) => res.status === 200 && setUser(res.data))
        .catch((err) => setError("Not get user by token"));
    }
  }, [tokenPayload]);
  const onSubmit: SubmitHandler<SendInfoSchemaType> = async (data) => {
    setLoading(true);
    axios
      .post("/api/user/login", data)
      .then((res) => {
        if (res.status === 200) {
          messageApi.open({
            type: "success",
            content: "Login successfully",
          });
          window.location.reload();
        }
      })
      .catch((err) => setError("Your not logined yet"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center mx-auto my-0 h-screen">
        {session || isLogin ? (
          <>
            {user || session ? (
              <div className="flex flex-col justify-center items-center gap-5 w-full">
                <div className="border-none rounded-[50%] w-[60px] h-[60px]">
                  {session ? (
                    <img
                      src={session?.user?.image as string}
                      className="rounded-[50%] w-full h-full object-cover"
                      alt=""
                      onError={(e) => {
                        e.currentTarget.src = "/images/logo.png";
                      }}
                    />
                  ) : (
                    <Avatar size={64} icon={<PiUserFill size={30} />} />
                  )}
                </div>
                <h1 className="font-medium text-2xl text-green-600">
                  Welcome Back {session ? session.user?.name : user?.name}
                </h1>
                <Button
                  className="bg-gray-600 font-medium text-white text-xl btn"
                  onClick={() => route.replace("/dashboard")}
                >
                  {" "}
                  Go to dashboard
                </Button>
                <Button
                  className="bg-red-500 font-medium text-white text-xl btn"
                  onClick={() => {
                    if (session) {
                      signOut({ callbackUrl: "/login" });
                    } else {
                      axios
                        .post("/api/user/logout")
                        .then((res) => {
                          if (res.status === 200) {
                            messageApi.open({
                              type: "success",
                              content: "Logout successfully",
                            });
                            window.location.reload();
                          }
                        })
                        .catch((err) => {
                          if (err) {
                            messageApi.open({
                              type: "error",
                              content: "Logout has error",
                            });
                          }
                        });
                    }
                  }}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-screen">
                <Spin size="large" />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-3 border-normalBlack shadow-lg p-5 border-t-4 rounded-lg w-[35%]">
            <h1 className="my-4 font-medium text-normalBlack text-xl">
              {" "}
              Login Form{" "}
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
              <ButtonForm loading={loading} />
              <div className="flex justify-between items-center gap-3">
                <Button
                  onClick={() => signIn("google")}
                  className="w-1/2"
                  icon={<PiGoogleLogoBold size={20} color="red" />}
                ></Button>
                <Button
                  onClick={() => signIn("github")}
                  className="w-1/2"
                  icon={<PiGithubLogoFill size={20} />}
                ></Button>
              </div>
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
              <Link
                href={"/forget-password"}
                className="text-normalBlack underline"
              >
                <p className="text-center">Forget password ? click link</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginForm;

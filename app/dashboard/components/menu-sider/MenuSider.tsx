"use client";
import React from "react";
import { Button, Menu, message } from "antd";
import {
  PiLockKeyOpenBold,
  PiArticleBold,
  PiHouseLineBold,
  PiChatCircleTextFill,
} from "react-icons/pi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { PiSignOutBold } from "react-icons/pi";

const items = [
  {
    key: "home",
    icon: <PiHouseLineBold size={20} />,
    label: <Link href="/dashboard">Home</Link>,
  },
  {
    key: "password",
    icon: <PiLockKeyOpenBold size={20} />,
    label: <Link href="/dashboard/profile">Password</Link>,
  },
  {
    key: "message",
    icon: <PiChatCircleTextFill size={20} />,
    label: <Link href="/dashboard/message">Message</Link>,
  },
  {
    key: "blogs",
    icon: <PiArticleBold size={20} />,
    label: <Link href="/dashboard/blogs">Blogs</Link>,
  },
  {
    key: "projects",
    icon: <PiArticleBold size={20} />,
    label: <Link href="/dashboard/projects">Projects</Link>,
  },
  {
    key: "skills",
    icon: <PiArticleBold size={20} />,
    label: <Link href="/dashboard/skills">Skills</Link>,
  },
];

function MenuSider() {
  const { data: session } = useSession();
  const [messageApi, contextHolder] = message.useMessage();
  const route = useRouter();

  const logOutHandler = () => {
    if (session) {
      signOut({ callbackUrl: "/login" });
      messageApi.success("Logout successfully");
    } else {
      axios
        .post("/api/user/logout")
        .then((res) => {
          if (res.status === 200) {
            messageApi.success("Logout successfully");
            route.replace("/login");
          }
        })
        .catch((err) => {
          messageApi.error("Logout failed");
        });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex flex-col justify-between items-center h-[90%]">
        <Menu
          className="mt-8 rounded-tl-xl"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={items}
        />
        <div className="px-5 w-full">
          <Button
            className="btn-block flex flex-row-reverse justify-center items-center bg-red-600 border-none font-medium text-2xl text-white btn"
            onClick={logOutHandler}
            icon={<PiSignOutBold size={20} />}
          >
            {" "}
            Log Out{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default MenuSider;

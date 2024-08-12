import React from "react";
import { Menu } from "antd";
import {
  PiUserBold,
  PiArticleBold,
  PiHouseLineBold,
  PiPowerBold,
} from "react-icons/pi";
import Link from "next/link";

const items = [
  {
    key: "home",
    icon: <PiHouseLineBold size={20} />,
    label: <Link href="/dashboard">خانه</Link>,
  },
  {
    key: "profile",
    icon: <PiUserBold size={20} />,
    label: <Link href="/dashboard/profile">پروفایل</Link>,
  },
  {
    key: "blogs",
    icon: <PiArticleBold size={20} />,
    label: <Link href="/dashboard/blogs">وبلاگ ها</Link>,
  },
  {
    key: "projects",
    icon: <PiArticleBold size={20} />,
    label: <Link href="/dashboard/projects">پروژه ها</Link>,
  },
  {
    key: "signOut",
    icon: <PiPowerBold size={20} />,
    label: <Link href="/api/auth/sign-out">خروج</Link>,
  },
];

function MenuSider() {
  return (
    <Menu
      className="mt-8 rounded-tr-xl"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["home"]}
      items={items}
    />
  );
}

export default MenuSider;

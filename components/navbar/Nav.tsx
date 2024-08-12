"use client";
import React, { useState } from "react";
import {
  PiHouseLineBold,
  PiPhoneCallBold,
  PiInfoBold,
  PiArticle,
  PiSunFill,
  PiMoonFill,
} from "react-icons/pi";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";
const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: <Link href="/">صفحه اصلی</Link>,
    icon: <PiHouseLineBold size={18} />,
  },
  {
    key: "projects",
    label: <Link href="/projects"> پروژه ها</Link>,
    icon: <PiArticle size={18} />,
  },
  {
    key: "blogs",
    label: <Link href="/blogs"> وبلاگ ها</Link>,
    icon: <PiArticle size={18} />,
  },
  {
    key: "about-us",
    label: <Link href="/about-me"> درباره من </Link>,
    icon: <PiInfoBold size={18} />,
  },
  {
    key: "contact-us",
    label: <Link href="/contact-me"> تماس با من</Link>,
    icon: <PiPhoneCallBold size={18} />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Header className="top-0 z-[999] fixed flex justify-between items-center gap-10 bg-normalBlack w-full">
      <div className="demo-logo">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={35}
            height={35}
            quality={100}
            className="rounded-[50%] min-h[35px] min-w[35px]"
          />
        </Link>
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        className="flex justify-center items-center"
        style={{ flex: 1, minWidth: 0 }}
      />
      <div>
        <PiSunFill size={30} color="#fff" />
      </div>
    </Header>
  );
};

export default Navbar;

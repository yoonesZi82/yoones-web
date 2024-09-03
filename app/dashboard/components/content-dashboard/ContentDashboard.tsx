"use client";
import React from "react";
import { Layout } from "antd";
import { usePathname } from "next/navigation";

const { Content } = Layout;

function ContentDashboard({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <Content className="desktop:pt-[18px] laptop:pt-[20px] bg-black px-10 pt-[50px] mobile:pt-[50px] tablet:pt-[45px]">
      <div
        className={
          path === "/dashboard"
            ? "p-6 min-h-[360px] bg-[rgba(255,255,255,0.1)] rounded-2xl "
            : "bg-[rgba(255,255,255,0.1)] p-2 rounded-2xl min-h-[360px] max-h-[645px] overflow-y-auto"
        }
      >
        {children}
      </div>
    </Content>
  );
}

export default ContentDashboard;

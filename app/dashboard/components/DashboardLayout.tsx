"use client";
import React, { useEffect } from "react";
import { Layout } from "antd";
import SiderDashboard from "./sider-dashboard/SiderDashboard";
import HeaderDashboard from "./header-dashboard/HeaderDashboard";
import ContentDashboard from "./content-dashboard/ContentDashboard";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";

interface DashboardLayoutPropsType {
  children: React.ReactNode;
  tokenPayload?: JwtPayload | null;
}
const DashboardLayout: React.FC<DashboardLayoutPropsType> = ({
  children,
  tokenPayload,
}) => {
  const { data: session } = useSession();
  useEffect(() => {
    const body = document.body;
    body.style.overflowY = "hidden";
  }, []);
  return (
    <>
      {session || tokenPayload ? (
        <AntdRegistry>
          <Layout>
            <SiderDashboard />
            <Layout>
              <HeaderDashboard tokenPayload={tokenPayload} />
              <ContentDashboard>{children}</ContentDashboard>
            </Layout>
          </Layout>
        </AntdRegistry>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default DashboardLayout;

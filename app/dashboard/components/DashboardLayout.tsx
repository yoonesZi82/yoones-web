"use client";
import React from "react";
import { Layout } from "antd";
import SiderDashboard from "./sider-dashboard/SiderDashboard";
import HeaderDashboard from "./header-dashboard/HeaderDashboard";
import ContentDashboard from "./content-dashboard/ContentDashboard";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <SiderDashboard />
      <Layout>
        <HeaderDashboard />
        <ContentDashboard>{children}</ContentDashboard>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;

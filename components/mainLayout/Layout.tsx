"use client";
import React from "react";
import { Layout } from "antd";
import Navbar from "../navbar/Nav";
import FooterPage from "../footer/Footer";
import { usePathname } from "next/navigation";
const { Content } = Layout;

function LayoutPage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <>
      {!path.includes("/dashboard") ? (
        <Layout>
          <Navbar />
          <Content className="bg-transparent px-[48px] py-[80px]">
            <div>{children}</div>
          </Content>
          <FooterPage />
        </Layout>
      ) : (
        <Layout>
          <Content className="bg-transparent px-[48px] py-[80px]">
            <div>{children}</div>
          </Content>
        </Layout>
      )}
    </>
  );
}

export default LayoutPage;

"use client";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Navbar from "../navbar/Nav";
import FooterPage from "../footer/Footer";
import { usePathname } from "next/navigation";
import WebLoader from "../web-loader/WebLoader";
import ScrollToTop from "@/utils/ScrollToTup";
const { Content } = Layout;

function LayoutPage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[100vh]">
          <WebLoader />
        </div>
      ) : !path.includes("/dashboard") &&
        !path.includes("/login") &&
        !path.includes("/forget-password") ? (
        <>
          <Layout>
            <Navbar />
            <Content className="bg-transparent px-[48px] py-[80px]">
              <div>{children}</div>
            </Content>
            <FooterPage />
          </Layout>
          <ScrollToTop />
        </>
      ) : path.includes("/dashboard") ? (
        <Layout>
          <Content className="bg-transparent h-[100svh]">{children}</Content>
        </Layout>
      ) : path.includes("/login") || path.includes("/forget-password") ? (
        <Layout>
          <Content className="bg-transparent h-[100svh]">{children}</Content>
        </Layout>
      ) : null}
    </>
  );
}

export default LayoutPage;

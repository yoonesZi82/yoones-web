import React from "react";
import { Layout } from "antd";
import MenuSider from "../menu-sider/MenuSider";

const { Sider } = Layout;

function SiderDashboard() {
  return (
    <Sider
      className="rounded-tr-xl rounded-bl-xl rounded-br-xl"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="flex justify-center items-center w-full demo-logo-vertical">
        <div className="pt-4 w-[50px] h-[50px]">
          <img src="/images/logo.png" alt="" className="rounded-[50%]" />
        </div>
      </div>
      <MenuSider />
    </Sider>
  );
}

export default SiderDashboard;

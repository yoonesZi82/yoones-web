import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

function HeaderDashboard() {
  return (
    <Header className="flex justify-center items-center bg-[#243B55] rounded-l-xl rounded-bl-xl text-meloWhite">
      <div className="flex justify-start items-center w-full">
        <h1 className="font-medium text-3xl text-meloWhite">
          خوش اومدی یونس ✌️
        </h1>
      </div>
    </Header>
  );
}

export default HeaderDashboard;

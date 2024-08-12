import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentDashboard({ children }: { children: React.ReactNode }) {
  return (
    <Content className="desktop:my-[18px] laptop:my-[20px] my-[50px] mobile:my-[50px] tablet:my-[45px] mr-[20px]">
      <div className="bg-[#141E30] p-6 rounded-xl min-h-[360px]">
        {children}
      </div>
    </Content>
  );
}

export default ContentDashboard;

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import En from "antd/locale/en_US";
import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      direction="ltr"
      locale={En}
      theme={{
        components: {
          Menu: {
            itemBg: "unset",
            iconSize: 14,
            itemColor: "#faf4f0",
            itemHoverColor: "#faf4f0",
            itemHoverBg: "#333",
            horizontalItemSelectedColor: "#faf4f0",
            darkItemBg: "#000",
            darkItemColor: "rgba(255,255,255,0.4)",
            fontSize: 18,
            darkItemSelectedBg: "rgba(255,255,255,0.1)",
            darkItemSelectedColor: "#faf4f0",
            darkItemHoverBg: "rgba(255,255,255,0.1)",
          },
          Layout: {
            siderBg: "#000",
            triggerColor: "#faf4f0",
          },
          Pagination: {
            itemActiveBg: "rgba(1,1,1,0.8)",
            itemActiveBgDisabled: "rgba(1,1,1,0.3)",
          },
        },
        token: {
          colorPrimary: "#111111",
          fontFamily: "var(--font-vazir)",
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeProvider;

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import Fa from "antd/locale/fa_IR";
import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      direction="rtl"
      locale={Fa}
      theme={{
        components: {
          Menu: {
            itemBg: "unset",
            iconSize: 14,
            itemColor: "#faf4f0",
            itemHoverColor: "#faf4f0",
            itemHoverBg: "#333",
            horizontalItemSelectedColor: "#faf4f0",
            darkItemBg: "#243B55",
            darkItemColor: "#faf4f0",
            fontSize: 18,
            darkItemSelectedBg: "#2C5364",
            darkItemSelectedColor: "#faf4f0",
            darkItemHoverBg: "rgba(0,0,0,0.2)",
          },
          Layout: {
            siderBg: "#243B55",
            triggerColor: "#faf4f0",
          },

          Form: {
            // colorError: "#ff0000",
          },
          Input: {
            // colorText: "#0e104b",
            // fontSize: 16,
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

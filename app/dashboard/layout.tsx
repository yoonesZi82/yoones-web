import React, { ReactNode } from "react";
import DashboardLayout from "./components/DashboardLayout";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/utils/auth";
import { JwtPayload } from "jsonwebtoken";

interface DashboardLayoutProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  const token = cookies().get("token");
  let tokenPayload = null;
  if (token) {
    tokenPayload = verifyAccessToken(token.value as string) as JwtPayload;
  }

  return (
    <>
      <DashboardLayout children={children} tokenPayload={tokenPayload} />
    </>
  );
};

export default Dashboard;

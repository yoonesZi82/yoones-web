import React, { ReactNode } from "react";
import DashboardLayout from "./components/DashboardLayout";

interface DashboardLayoutProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <DashboardLayout children={children} />
    </div>
  );
};

export default Dashboard;

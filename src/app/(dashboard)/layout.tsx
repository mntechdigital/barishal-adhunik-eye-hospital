import React from "react";
import DashboardNavbar from "./_components/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;

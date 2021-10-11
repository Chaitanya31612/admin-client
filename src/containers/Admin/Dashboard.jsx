import React from "react";
import { DashboardWidgets } from "../../components/Admin";
import LayoutComponent from "../../components/Admin/LayoutComponent";

const Dashboard = () => {
  return (
    <LayoutComponent>
      <DashboardWidgets />
    </LayoutComponent>
  );
};

export default Dashboard;

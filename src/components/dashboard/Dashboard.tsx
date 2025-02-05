import React from "react";
import AnalyticsDashboard from "./AnalyticsDashboard";
import DashboardWrapper from "./DashboardWrapper";

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <AnalyticsDashboard />
    </DashboardWrapper>
  );
};

export default Dashboard;

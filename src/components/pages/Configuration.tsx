import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Configuration: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Configuration Header */}
        <DashboardSectionHeader title="Configuration" />
      </div>
    </DashboardWrapper>
  );
};

export default Configuration;

import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Support: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Support Header */}
        <DashboardSectionHeader title="Support" />
      </div>
    </DashboardWrapper>
  );
};

export default Support;

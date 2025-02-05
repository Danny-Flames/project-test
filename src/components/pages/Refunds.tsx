import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Refunds: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Refunds Header */}
        <DashboardSectionHeader title="Refunds" />
      </div>
    </DashboardWrapper>
  );
};

export default Refunds;

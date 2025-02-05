import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Orders: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Orders Header */}
        <DashboardSectionHeader title="Orders" />
      </div>
    </DashboardWrapper>
  );
};

export default Orders;

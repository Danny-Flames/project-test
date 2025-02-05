import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Brands: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Brands Header */}
        <DashboardSectionHeader title="Brands" />
      </div>
    </DashboardWrapper>
  );
};

export default Brands;

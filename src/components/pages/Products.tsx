import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Products: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Products Header */}
        <DashboardSectionHeader title="Products" />
      </div>
    </DashboardWrapper>
  );
};

export default Products;

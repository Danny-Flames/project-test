import React from "react";
import DashboardWrapper from "../dashboard/DashboardWrapper";
import DashboardSectionHeader from "../dashboard/DashboardSectionHeader";

const Categories: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Categories Header */}
        <DashboardSectionHeader title="Categories" />
      </div>
    </DashboardWrapper>
  );
};

export default Categories;

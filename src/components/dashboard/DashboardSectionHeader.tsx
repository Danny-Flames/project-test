import React from "react";

interface IDashboardSectionHeader {
    title: string
}

function DashboardSectionHeader({title}: IDashboardSectionHeader) {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-base font-semibold">{title || "Orders"}</p>
    </div>
  );
}

export default DashboardSectionHeader;

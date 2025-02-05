import React from "react";
import DashboardWrapper from "./DashboardWrapper";
import DashboardSectionHeader from "./DashboardSectionHeader";
import DashboardSubheader from "./DashboardSubheader";
import CustomTable from "../table/CustomTable";
import DashboardReportFilter from "./DashboardReportFilter";

const tableHeader = ["Name", "Category", "Last Viewed"];

const tableData = [
  {
    name: "Store sessions",
    category: "Acquisition",
    lastViewed: "11 Aug 2024",
  },
  { name: "Sessions by over time", category: "Acquisition", lastViewed: "" },
  { name: "Store conversion over time", category: "Behavior", lastViewed: "" },
  { name: "Cart analysis", category: "Behavior", lastViewed: "" },
  {
    name: "Search conversions over time",
    category: "Behavior",
    lastViewed: "",
  },
];

const DashboardReport: React.FC = () => {
  const handleDateChange = (ranges: { startDate: Date; endDate: Date }) => {
    console.log("Selected Date Range:", ranges.startDate, ranges.endDate);
    // Handle state update or API call with new dates
  };
  return (
    <DashboardWrapper>
      <div className="px-1 py-5">
        {/* Analytics - Report Header */}
        <DashboardSectionHeader title="Analytics - Report" />

        {/* Analytics subheader - starts*/}
        <DashboardSubheader
          initialStartDate={new Date()}
          initialEndDate={new Date()}
          onDateChange={handleDateChange}
          children={
            <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white custom-border-2">
              <img
                src="/images/icon-4.png"
                alt="date-icon"
                className="mr-2 h-[16px] w-[16px]"
              />
              <span className="text-xs font-medium">Auto-refresh</span>
            </button>
          }
        />
        {/* Analytics subheader - ends*/}

        {/* Table section - starts  */}
        <DashboardReportFilter />
        <CustomTable tableHeader={tableHeader} tableData={tableData} />
        {/* Table section - ends */}
      </div>
    </DashboardWrapper>
  );
};

export default DashboardReport;

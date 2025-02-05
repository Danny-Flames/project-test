import React, { useEffect, useState } from "react";
import DashboardWrapper from "./DashboardWrapper";
import DashboardSectionHeader from "./DashboardSectionHeader";
import DashboardSubheader from "./DashboardSubheader";
import CustomTable from "../table/CustomTable";
import DashboardReportFilter from "./DashboardReportFilter";
import { fetchUsersData } from "../../redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";

const tableHeader = ["Full Name", "Email", "Phone Num", "Username", "City"];

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
  const dispatch = useAppDispatch();
  const { isLoading, users } = useAppSelector((state) => state.dashboard);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("DashboardReport-users", users);

  // Function to handle filter
  const handleDateChange = (ranges: { startDate: Date; endDate: Date }) => {
    console.log("Selected Date Range:", ranges.startDate, ranges.endDate);
    // Handle state update or API call with new dates
  };

  // Fetch users data immediately component mounts
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  // Restructure the 'users' data to fit what we want
  const modifiedUsers = users?.map(
    ({ name, email, phone, username, address }) => ({
      name,
      email,
      phone,
      username,
      city: address.city,
    })
  );

  // Filter users based on searchQuery
  const filteredUsers = modifiedUsers?.filter((user) =>
    Object.values(user).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
        <DashboardReportFilter
          dataCount={modifiedUsers?.length || "0"}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="custom-scrollbar">
          <CustomTable tableHeader={tableHeader} tableData={filteredUsers} />
        </div>
        {/* Table section - ends */}
      </div>
    </DashboardWrapper>
  );
};

export default DashboardReport;

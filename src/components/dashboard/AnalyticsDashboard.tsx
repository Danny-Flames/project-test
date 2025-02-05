import React, { useEffect, useState } from "react";
import DashboardSubheader from "./DashboardSubheader";
import DashboardFilter from "./DashboardFilter";
import DashboardSectionHeader from "./DashboardSectionHeader";
import { useAnalyticsData } from "../hooks/useAnalyticsData";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import {
  fetchAnalyticsData,
  fetchDashboardData,
} from "../../redux/features/dashboardSlice";
import SkeletonLoader from "../../loader/SkeletonLoader";
import { chartsConfig } from "../../config/chartsConfig";
import { createChartComponent } from "../../config/chartComponents";

const AnalyticsDashboard: React.FC = () => {
  const {
    salesByTrafficHeader,
    salesByTrafficData,
    topSellingProdHeader,
    topSellingProdData,
    convertionRateData,
    customerLifetimeHeader,
    customerLifetimeData,
    sessionByLocationHeader,
    sessionByLocationData,
    salesBySocialHeader,
    salesBySocialData,
    salesByTrafficData_2,
  } = useAnalyticsData();
  const dispatch = useAppDispatch();
  const {
    totalSales,
    storeSessions,
    totalOrders,
    averageOrderVolume,
    fulfilledOrders,
    marketingSales,
    returningCustomerRate,
    isLoading,
    currentDateRange,
    comparisonDateRange,
  } = useAppSelector((state) => state.dashboard);
  const [searchQuery, setSearchQuery] = useState("");

  console.log({
    totalSales,
    storeSessions,
    totalOrders,
    averageOrderVolume,
    fulfilledOrders,
    marketingSales,
    returningCustomerRate,
    isLoading,
    currentDateRange,
    comparisonDateRange,
  });

  // Function to handle onChange for the dat pickers
  const handleDateChange = (ranges: { startDate: Date; endDate: Date }) => {
    console.log("Selected Date Range:", ranges.startDate, ranges.endDate);

    // Convert dates to string format if needed
    const formattedStartDate = ranges.startDate.toISOString().split("T")[0];
    const formattedEndDate = ranges.endDate.toISOString().split("T")[0];

    // Dispatch the fetchAnalyticsData thunk with the new date range
    dispatch(
      fetchAnalyticsData({
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      })
    );
  };

  // Fetch dashboard data immediately component mounts
  useEffect(() => {
    dispatch(
      fetchDashboardData()
    );
  }, [dispatch, currentDateRange, comparisonDateRange]);

  // Fetch analytics data immediately component mounts
  useEffect(() => {
    dispatch(fetchAnalyticsData({ startDate: "", endDate: "" }));
  }, [dispatch]);

  // Get data for each chart based on its title
  const getChartData = (title: string) => {
    const dataMap: { [key: string]: any } = {
      "Total Sales": { data: totalSales?.data },
      "Store Sessions": { data: storeSessions?.data },
      "Total Orders": { data: totalOrders?.data },
      "Average Order Volume": { data: averageOrderVolume?.data },
      "Fulfilled Orders Over Time": { data: fulfilledOrders?.data },
      "Sales By Social Source": {
        data: salesByTrafficData,
        columns: salesByTrafficHeader,
      },
      "Sales By Traffic Source": {
        data: salesByTrafficData,
        columns: salesByTrafficHeader,
      },
      "Marketing Sales": { data: marketingSales?.data },
      "Top Selling Products": {
        data: topSellingProdData,
        columns: topSellingProdHeader,
      },
      "Customer Lifetime Value": {
        data: customerLifetimeData,
        columns: customerLifetimeHeader,
      },
      "Returning Customer Rate": { data: returningCustomerRate?.data },
      "Conversion Rate": {
        data: convertionRateData,
      },
      "Sessions By Location": {
        data: sessionByLocationData,
        columns: sessionByLocationHeader,
      },
      "Sessions By Social Source": {
        data: salesBySocialData,
        columns: salesBySocialHeader,
      },
      "Sessions By Traffic Source": {
        data: salesByTrafficData_2,
        columns: salesBySocialHeader,
      },
    };
    return dataMap[title] || { data: [] };
  };

  // Filter charts based on search query
  const filteredCharts = chartsConfig.filter((chart) =>
    chart.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-1 py-5">
      {/* Analytics Header */}
      <DashboardSectionHeader title="Analytics" />

      {/* View Options */}
      <DashboardSubheader
        initialStartDate={new Date()}
        initialEndDate={new Date()}
        onDateChange={handleDateChange}
      />

      {/* Search and Filter */}
      <DashboardFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Chart Rows - starts */}
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(searchQuery ? filteredCharts : chartsConfig).map((chart, index) => {
            const chartData = getChartData(chart.title);
            return (
              <div key={index}>
                {createChartComponent(chart, chartData.data, chartData.columns)}
              </div>
            );
          })}
        </div>
      )}
      {/* Chart Rows - ends */}
    </div>
  );
};

export default AnalyticsDashboard;

import React from "react";
import DashboardSubheader from "./DashboardSubheader";
import DashboardFilter from "./DashboardFilter";
import ChartHeader from "./ChartHeader";
import CustomChart from "./CustomChart";
import { storeSessionChartData } from "../../constants/dummyDb";
import GridTable from "./GridTable";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { GiKiwiFruit } from "react-icons/gi";

interface AnalyticsData {
  timestamp: string;
  value: number;
}

const salesBySourceHeader = ["Source", "Impressions", "Clicks", "Revenue"];

const salesBySourceData = [
  [
    <span className="flex items-center">
      <FaFacebook className="text-blue-600" />
      <span className="text-xs ml-2">Facebook</span>
    </span>,
    35, 5, "₦22,035.00"
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-pink-500" />
      <span className="text-xs ml-2">Instagram</span>
    </span>,
    35, 5, "₦22,035.00"
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-blue-600" />
      <span className="text-xs ml-2">Twitter</span>
    </span>,
    35, 5, "₦22,035.00"
  ],
  [
    <span className="flex items-center">
      <AiFillGoogleCircle className="text-pink-500" />
      <span className="text-xs ml-2">Google</span>
    </span>,
    35, 5, "₦22,035.00"
  ],
];

const topSellingProdHeader = ["Product", "SKU", "Qty"];

const topSellingProdData = [
  [
    <span className="flex items-center">
      <GiKiwiFruit className="text-blue-600" />
      <span className="text-xs ml-2">Fresh Lemon Fruit</span>
    </span>,
    41152845,
    203,
  ],
  [
    <span className="flex items-center">
      <GiKiwiFruit className="text-pink-500" />
      <span className="text-xs ml-2">Barista Drink Laite Lit</span>
    </span>,
    41152845,
    202,
  ],
  [
    <span className="flex items-center">
      <GiKiwiFruit className="text-blue-600" />
      <span className="text-xs ml-2">Essential Waitrose D</span>
    </span>,
    916691,
    203,
  ],
  [<span className="flex items-center">
    <GiKiwiFruit className="text-pink-500" />
    <span className="text-xs ml-2">Freshfarm Spaghetti</span>
  </span>, 75452711, 404],
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="px-1 py-5">
      {/* Analytics Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-semibold">Analytics</p>
      </div>

      {/* View Options */}
      <DashboardSubheader />

      {/* Search and Filter */}
      <DashboardFilter />

      {/* Chart Row-1 - starts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Total Sales Chart */}
        <div>
          <CustomChart
            title="Total Sales"
            subTitle="#0.00 -"
            handleClick={() => console.log("Total sales")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>

        {/* Store Sessions Chart */}
        <div>
          <CustomChart
            title="Store Sessions"
            subTitle="0 -"
            handleClick={() => console.log("Store sessions")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>

        {/* Total Orders Chart */}
        <div>
          <CustomChart
            title="Total Orders"
            subTitle="0 -"
            handleClick={() => console.log("Total sales")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>
      </div>
      {/* Chart Row-1 - ends */}

      {/* Chart Row-2 - starts */}
      <div className="grid grid-cols-3 gap-6 mt-7">
        {/* Average Order Volume */}
        <div>
          <CustomChart
            title="Average Order Volume "
            subTitle="#0.00 -"
            handleClick={() => console.log("Average Order Volume ")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>

        {/* Fulfilled Orders Over Time */}
        <div>
          <CustomChart
            title="Fulfilled Orders Over Time"
            subTitle="0 -"
            handleClick={() => console.log("Fulfilled Orders Over Time")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>

        {/* Sales By Social Source */}
        <div>
          <GridTable
            title="Sales By Social Source"
            subTitle="N22,035.00-"
            handleClick={() => console.log("Sales By Social Source")}
            columns={salesBySourceHeader}
            data={salesBySourceData}
          />
        </div>
      </div>
      {/* Chart Row-2 - ends */}

      {/* Chart Row-3 - starts */}
      <div className="grid grid-cols-3 gap-6 mt-7">
        {/* Sales By Traffic Source */}
        <div>
          <GridTable
            title="Sales By Traffic Source"
            subTitle="N22,035.00-"
            handleClick={() => console.log("Sales By Traffic Source")}
            columns={salesBySourceHeader}
            data={salesBySourceData}
          />
        </div>

        {/* Marketing Sales */}
        <div>
          <CustomChart
            title="Marketing Sales"
            subTitle="0 -"
            handleClick={() => console.log("Marketing Sales")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
          />
        </div>

        {/* Top Selling Products */}
        <div>
          <GridTable
            title="Top Selling Products"
            subTitle="N22,035.00-"
            handleClick={() => console.log("Top Selling Products")}
            columns={topSellingProdHeader}
            data={topSellingProdData}
          />
        </div>
      </div>
      {/* Chart Row-3 - ends */}
    </div>
  );
};

export default AnalyticsDashboard;

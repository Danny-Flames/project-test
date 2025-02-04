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
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-pink-500" />
      <span className="text-xs ml-2">Instagram</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillInstagram className="text-blue-600" />
      <span className="text-xs ml-2">Twitter</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
  [
    <span className="flex items-center">
      <AiFillGoogleCircle className="text-pink-500" />
      <span className="text-xs ml-2">Google</span>
    </span>,
    35,
    5,
    "₦22,035.00",
  ],
];

const topSellingProdHeader = ["Product", "SKU", "Qty"];

const topSellingProdData = [
  [
    <span className="flex items-center">
      <img
        src="images/prod-1.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Fresh Lemon Fruit</span>
    </span>,
    41152845,
    203,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-2.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Barista Drink Laite Lit</span>
    </span>,
    41152845,
    202,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-1.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Essential Waitrose D</span>
    </span>,
    916691,
    203,
  ],
  [
    <span className="flex items-center">
      <img
        src="images/prod-2.png"
        alt="product_image"
        className="h-[23px] w-[23px]"
      />
      <span className="text-xs ml-2">Freshfarm Spaghetti</span>
    </span>,
    75452711,
    404,
  ],
];

const convertionRateData = [
  [
    <div className="">
      <p className="text-xs mb-1">Added to cart</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    '-',
  ],
  [
    <div className="">
      <p className="text-xs mb-1">Reached checkout</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    '-',
  ],
  [
    <div className="">
      <p className="text-xs mb-1">Sessions converted</p>
      <p className="text-xs custom-font-grey">0 sessions</p>
    </div>,
    `0.00%`,
    '-',
  ],
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

      {/* Chart Rows - starts */}
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
            showSubHeader={true}
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
            showSubHeader={true}
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
            showSubHeader={true}
          />
        </div>

        {/* Average Order Volume */}
        <div>
          <CustomChart
            title="Average Order Volume "
            subTitle="#0.00 -"
            handleClick={() => console.log("Average Order Volume ")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
            showSubHeader={true}
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
            showSubHeader={true}
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
            showSubHeader={true}
          />
        </div>

        {/* Sales By Traffic Source */}
        <div>
          <GridTable
            title="Sales By Traffic Source"
            subTitle="N22,035.00-"
            handleClick={() => console.log("Sales By Traffic Source")}
            columns={salesBySourceHeader}
            data={salesBySourceData}
            showSubHeader={true}
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
            showSubHeader={true}
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
            showSubHeader={false}
          />
        </div>

        {/* Customer Lifetime Value */}
        <div>
          <GridTable
            title="Customer Lifetime Value"
            subTitle="N22,035.00-"
            handleClick={() => console.log("Customer Lifetime Value")}
            columns={topSellingProdHeader}
            data={topSellingProdData}
            showSubHeader={false}
          />
        </div>

        {/* Returning Customer Rate */}
        <div>
          <CustomChart
            title="Returning Customer Rate"
            subTitle="%0 -"
            handleClick={() => console.log("Returning Customer Rate")}
            data={storeSessionChartData}
            dateTo="Aug 19, 2024"
            dateFrom="Aug 12, 2024"
            showSubHeader={true}
          />
        </div>

        {/* Conversion Rate */}
        <div>
          <GridTable
            title="Conversion Rate"
            subTitle="0%"
            handleClick={() => console.log("Conversion Rate")}
            data={convertionRateData}
            showSubHeader={true}
          />
        </div>
      </div>
      {/* Chart Rows - ends */}
    </div>
  );
};

export default AnalyticsDashboard;

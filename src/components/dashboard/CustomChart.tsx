import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartHeader from "./ChartHeader";
import ChartFooter from "./ChartFooter";

interface ICustomChart {
  title?: string;
  subTitle?: string;
  handleClick: () => void;
  icon?: any;
  data: any[];
  dateTo: string;
  dateFrom: string
}

function CustomChart({
  title,
  subTitle,
  handleClick,
  icon,
  data,
  dateTo,
  dateFrom
}: ICustomChart) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      {/* Chart title  */}
      <ChartHeader
        title={title}
        subTitle={subTitle}
        handleClick={handleClick}
        icon={icon}
      />

      {/* Chart   */}
      <ResponsiveContainer width="100%" height={145}>
        <LineChart
          data={data}
          margin={{ left: -40, right: 0, top: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="time"
            tick={{ fill: "#6B7280" }}
            className="text-[10px]"
            interval={0} 
            minTickGap={0}
          />
          <YAxis
            domain={[0, 10]}
            tick={{ fill: "#6B7280" }}
            className="text-[10px]"
            ticks={[0, 5, 10]}
          />
          <Tooltip
            labelClassName="text-[10px]"
            contentStyle={{ fontSize: "10px" }}
          />
          <Line
            type="monotone"
            dataKey="today"
            stroke="#8B0000"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="yesterday"
            stroke="#8B0000"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Chart Footer  */}
      <ChartFooter dateTo={dateTo} dateFrom={dateFrom} />
    </div>
  );
}

export default CustomChart;

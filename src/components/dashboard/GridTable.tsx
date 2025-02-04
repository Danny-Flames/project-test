import React from "react";
import ChartHeader from "./ChartHeader";

interface IGridTableProps {
  title?: string;
  subTitle?: string;
  handleClick: () => void;
  icon?: any;
  columns: string[]; // Dynamic headers
  data: (string | React.ReactNode)[][]; // Dynamic row data
}

const GridTable: React.FC<IGridTableProps> = ({
  title,
  subTitle,
  handleClick,
  icon,
  columns,
  data,
}) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <ChartHeader
        title={title}
        subTitle={subTitle}
        handleClick={handleClick}
        icon={icon}
      />

      {/* Table */}
      <div className="mt-2">
        <table className="w-full text-xs">
          {/* Table Headings */}
          <thead>
            <tr className="border-b text-gray-500 font-normal">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`pb-2 ${index === 0 ? "text-left" : "text-center"} ${
                    index === columns.length - 1 ? "text-right" : ""
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Rows */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-none">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-[10px] ${
                      cellIndex === 0 ? "flex items-center space-x-2" : "text-center"
                    } ${cellIndex === row.length - 1 ? "text-right" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridTable;

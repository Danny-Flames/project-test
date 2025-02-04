import React from "react";
import ChartHeader from "./ChartHeader";

interface IGridTableProps {
  title?: string;
  subTitle?: string;
  handleClick: () => void;
  icon?: any;
  columns?: string[]; // Now optional
  data: (string | React.ReactNode)[][]; // Dynamic row data
  showSubHeader?: boolean;
}

const GridTable: React.FC<IGridTableProps> = ({
  title,
  subTitle,
  handleClick,
  icon,
  columns,
  data,
  showSubHeader,
}) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <ChartHeader
        title={title}
        subTitle={subTitle}
        handleClick={handleClick}
        icon={icon}
        showSubHeader={showSubHeader}
      />

      {/* Table */}
      <div className="mt-2">
        <table className="w-full text-xs">
          {/* Table Headings - Only render if columns exist */}
          {columns && columns.length > 0 && (
            <thead>
              <tr className="border-b custom-font-black-2 font-medium">
                {columns.map((col, index) => (
                  <td
                    key={index}
                    className={`pb-2 ${
                      index === 0 ? "text-left" : "text-center"
                    } ${index === columns.length - 1 ? "text-right" : ""}`}
                  >
                    {col}
                  </td>
                ))}
              </tr>
            </thead>
          )}

          {/* Table Rows */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-none">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-[10px] ${
                      cellIndex === 0
                        ? "flex items-center space-x-2"
                        : "text-center"
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
import React from "react";

interface TableProps {
  tableHeader?: string[];
  tableData: { [key: string]: any }[];
}

const CustomTable: React.FC<TableProps> = ({ tableHeader, tableData }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max border border-gray-200 bg-white">
        {tableHeader && (
          <thead>
            <tr className="bg-gray-100 text-left">
              {tableHeader.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-[12.5px] font-medium text-gray-600 border-b whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-[12.5px] custom-dark-grey whitespace-nowrap">
                  {typeof cell === "string" ? cell : JSON.stringify(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

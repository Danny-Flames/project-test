import React from "react";

interface IChartHeader {
  title?: string;
  subTitle?: string;
  handleClick: () => void;
  icon?: any;
  showSubHeader?: boolean;
}

function ChartHeader({
  title,
  subTitle,
  handleClick,
  icon,
  showSubHeader,
}: IChartHeader) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-medium custom-font-black-2">
          {title ? title : " Total Sales"}
        </h3>

        {icon ? (
          <span onClick={() => handleClick()} className="button-hover">
            {icon}
          </span>
        ) : (
          <img
            src="images/icon-1.png"
            alt="date-icon"
            className="h-[16px] w-[16px] button-hover"
            onClick={() => handleClick()}
          />
        )}
      </div>
      {showSubHeader && (
        <div>
          {subTitle && (
            <div className="text-[14px] font-semibold custom-font-black-2">
              {subTitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChartHeader;

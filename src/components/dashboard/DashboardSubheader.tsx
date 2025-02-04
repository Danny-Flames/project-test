import React from "react";

function DashboardSubheader() {
  return (
    <div className="flex items-center justify-between mb-6 pb-3 custom-border-2-bottom">
      <div className="flex">
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white mr-3 custom-border-2">
          <img
            src="images/icon-1.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Reports</span>
        </button>
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white custom-border-2">
          <img
            src="images/icon-2.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Liveview</span>
        </button>
      </div>
      <div className="flex items-center">
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white mr-3 custom-border-2">
          <img
            src="images/icon-3.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Today</span>
        </button>
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white mr-3 custom-border-2">
          <span className="text-xs font-medium">Compare to: Yesterday</span>
        </button>
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white custom-border-2">
          <img
            src="images/icon-4.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Auto-refresh</span>
        </button>
      </div>
    </div>
  );
}

export default DashboardSubheader;

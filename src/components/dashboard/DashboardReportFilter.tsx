import { BiSearch } from "react-icons/bi";

function DashboardReportFilter() {
  return (
    <div className="px-1 dashboard-report-filter custom-border-2 pt-3 pb-1">
      <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
        <div className="relative">
          <BiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search reports"
            className="dashboard-report-filter-input pl-10 pr-4 py-[2px] rounded-3xl border focus:outline-none focus:ring-2 focus:ring-gray-100 custom-input-bg-grey-2 dashboard-filter-input"
          />
        </div>
        <div className="mt-2 md:mt-0 md:ml-3 flex items-center">
          <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white mr-3 custom-border-2">
            <img
              src="/images/icon-5.png"
              alt="date-icon"
              className="mr-2 h-[16px] w-[16px]"
            />
            <span className="text-xs font-medium">Sort</span>
          </button>
          <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white custom-border-2">
            <span className="text-xs font-medium">Category</span>
            <img
              src="/images/icon-6.png"
              alt="date-icon"
              className="ml-2 h-[16px] w-[16px]"
            />
          </button>
        </div>
      </div>
      <span className="text-[12.5px] custom-font-grey">120 Results</span>
    </div>
  );
}

export default DashboardReportFilter;

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import CustomDateRangePicker from "../DateRangePicker";
import formatDateRange from "../../helpers/dateFormatter";

interface DashboardSubheaderProps {
  initialStartDate: Date;
  initialEndDate: Date;
  onDateChange: (ranges: { startDate: Date; endDate: Date }) => void;
  children?: ReactNode;
}

const DashboardSubheader: React.FC<DashboardSubheaderProps> = ({
  initialStartDate,
  initialEndDate,
  onDateChange,
  children,
}) => {
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Track the current dates in state
  const [currentDates, setCurrentDates] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
  });

  // Format the dates whenever they change
  const formattedDates = formatDateRange(
    currentDates.startDate,
    currentDates.endDate
  );

  const handleNavigate = () => {
    navigate("/dashboard/report");
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  // Update local state when dates change
  const handleDateRangeChange = (ranges: {
    startDate: Date;
    endDate: Date;
  }) => {
    setCurrentDates({
      startDate: ranges.startDate,
      endDate: ranges.endDate,
    });
    onDateChange(ranges);
  };

  // Function to clear date filters
  const clearFilters = () => {
    setCurrentDates({
      startDate: new Date(),
      endDate: new Date(),
    });
    onDateChange({
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-3 custom-border-2-bottom dashboard-subHeader relative">
      <div className="flex mb-2 sm:mb-0">
        <button
          className="flex items-center px-[12px] py-[6px] rounded-xl bg-white mr-3 custom-border-2"
          onClick={handleNavigate}
        >
          <img
            src="/images/icon-1.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Reports</span>
        </button>
        <button className="flex items-center px-[12px] py-[6px] rounded-xl bg-white custom-border-2">
          <img
            src="/images/icon-2.png"
            alt="date-icon"
            className="mr-2 h-[16px] w-[16px]"
          />
          <span className="text-xs font-medium">Liveview</span>
        </button>
      </div>

      {children ? (
        children
      ) : (
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto dashboard-subHeader-partB relative">
          <div className="flex w-full sm:w-auto justify-between mb-2 sm:mb-0">
            <div className="relative group w-[49%] sm:w-auto mr-3">
              <button
                className="flex items-center px-[12px] py-[6px] rounded-xl bg-white w-full custom-border-2"
                onClick={handleToggleDatePicker}
              >
                <img
                  src="/images/icon-3.png"
                  alt="date-icon"
                  className="mr-2 h-[16px] w-[16px]"
                />
                <span className="text-xs font-medium">
                  {formattedDates.endDate}
                </span>
              </button>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-400 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                End Date
              </span>
            </div>

            <div className="relative group w-[49%] sm:w-auto">
              <button
                className="flex items-center px-[12px] py-[6px] rounded-xl bg-white w-full custom-border-2"
                onClick={handleToggleDatePicker}
              >
                <span className="text-xs font-medium">
                  Compare to: {formattedDates.startDate}
                </span>
              </button>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-400 rounded opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity">
                Start Date
              </span>
            </div>
          </div>

          <button
            className="flex items-center px-[12px] py-[6px] rounded-xl bg-white w-full sm:w-auto mt-2 sm:mt-0 custom-border-2"
            onClick={() => clearFilters()}
          >
            <img
              src="/images/icon-4.png"
              alt="date-icon"
              className="mr-2 h-[16px] w-[16px]"
            />
            <span className="text-xs font-medium">Auto-refresh</span>
          </button>

          {showDatePicker && (
            <div
              ref={datePickerRef}
              className="absolute top-full right-0 mt-2 z-50 bg-white shadow-md p-4 rounded-lg"
            >
              <CustomDateRangePicker
                initialStartDate={currentDates.startDate}
                initialEndDate={currentDates.endDate}
                onDateChange={handleDateRangeChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardSubheader;
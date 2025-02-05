import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";

interface DateRangeProps {
  onDateChange?: (ranges: { startDate: Date; endDate: Date }) => void;
  initialStartDate?: Date;
  initialEndDate?: Date;
}

const CustomDateRangePicker: React.FC<DateRangeProps> = ({
  onDateChange,
  initialStartDate = new Date(),
  initialEndDate = new Date(),
}) => {
  const [dateRange, setDateRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    setDateRange(ranges.selection);
    if (onDateChange) {
      onDateChange({ startDate: ranges.selection.startDate, endDate: ranges.selection.endDate });
    }
  };
  

  return (
    <DateRangePicker ranges={[dateRange]} onChange={handleSelect} />
  );
};

export default CustomDateRangePicker;

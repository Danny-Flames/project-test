type DateRange = {
    startDate: string;
    endDate: string;
  };
  
  const formatDateRange = (
    startDateStr: Date,
    endDateStr: Date
  ): DateRange => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    // Helper function to check if two dates are the same day
    const isSameDay = (date1: Date, date2: Date): boolean => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };
  
    // Helper function to check if a date is today
    const isToday = (date: Date): boolean => {
      return isSameDay(date, new Date());
    };
  
    // Helper function to check if a date is yesterday
    const isYesterday = (date: Date): boolean => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return isSameDay(date, yesterday);
    };
  
    // Helper function to check if dates are in the last week
    const isLastWeek = (start: Date, end: Date): boolean => {
      const today = new Date();
      const lastWeekStart = new Date(today);
      lastWeekStart.setDate(today.getDate() - 7);
      const lastWeekEnd = new Date(today);
      lastWeekEnd.setDate(today.getDate() - 1);
      return start >= lastWeekStart && end <= lastWeekEnd;
    };
  
    // Helper function to format date with ordinal suffix
    const formatDateWithOrdinal = (date: Date): string => {
      const day = date.getDate();
      const suffix =
        ["th", "st", "nd", "rd"][
          day % 10 > 3 ? 0 : (day % 100) - (day % 10) !== 10 ? day % 10 : 0
        ] || "th";
      return `${date.toLocaleString("en-US", {
        month: "short",
      })} ${day}${suffix}, ${date.getFullYear()}`;
    };
  
    // Check for special cases
    if (isSameDay(startDate, endDate)) {
      if (isToday(startDate)) {
        return { startDate: "Today", endDate: "Today" };
      }
      if (isYesterday(startDate)) {
        return { startDate: "Yesterday", endDate: "Yesterday" };
      }
    }
  
    // Check for yesterday-to-today case
    if (isYesterday(startDate) && isToday(endDate)) {
      return { startDate: "Yesterday", endDate: "Today" };
    }
  
    // If no special case matches, format the dates
    return {
      startDate: formatDateWithOrdinal(startDate),
      endDate: formatDateWithOrdinal(endDate),
    };
  };
  
  export default formatDateRange;
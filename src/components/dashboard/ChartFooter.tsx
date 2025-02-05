
interface IChartFooter {
    dateTo: string
    dateFrom: string
}

function ChartFooter({dateTo, dateFrom}: IChartFooter) {
  return (
    <div className="flex justify-end gap-4">
      <div className="flex items-center gap-2 text-[10px] font-normal">
        <div className="w-4 h-1 bg-red-700"></div> <span>{dateTo || 'Aug 19, 2024'}</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-normal">
        <div className="w-4 h-1 border-t-2 border-red-700 border-dashed"></div>
        <span>{dateFrom || 'Aug 19, 2024'}</span>
      </div>
    </div>
  );
}

export default ChartFooter;

import CustomChart from '../components/dashboard/CustomChart';
import { ChartConfig } from '../constants/interfaces';
import GridTable from '../components/dashboard/GridTable';

export const createChartComponent = (
  config: ChartConfig,
  data: any,
  columns?: any[]
) => {
  const commonProps = {
    title: config.title,
    subTitle: config.subTitle,
    handleClick: () => console.log(config.title),
    showSubHeader: config.showSubHeader,
  };

  if (config.type === 'chart') {
    return (
      <CustomChart
        {...commonProps}
        data={data}
        dateTo={config.dateTo || "Aug 19, 2024"}
        dateFrom={config.dateFrom || "Aug 12, 2024"}
      />
    );
  }

  return (
    <GridTable
      {...commonProps}
      data={data}
      columns={columns}
    />
  );
};
export interface IAuth {
  user: {
    name: string;
    email: string;
    phone: string;
    password: string;
  } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

// Interfaces for the 'Dashboard' page
interface TimeSeriesData {
  timestamp: string;
  value: number;
}

interface SocialSourceData {
  source: string;
  impressions: number;
  clicks: number;
  revenue: number;
}

interface DashboardMetrics {
  totalSales: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  storeSessions: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  totalOrders: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  averageOrderVolume: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  fulfilledOrders: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  marketingSales: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  returningCustomerRate: {
    currentValue: number;
    timeSeriesData: TimeSeriesData[];
    comparisonDate?: string;
    comparisonData?: TimeSeriesData[];
    data: any[]
  };
  socialSourceSales: {
    totalRevenue: number;
    sources: SocialSourceData[];
  };
}

export interface DashboardState extends DashboardMetrics {
  isLoading: boolean;
  error: string | null;
  currentDateRange: string;
  comparisonDateRange: string;
  lastUpdated: string | null;
  autoRefresh: boolean;
  selectedCategory: string;
  searchQuery: string;
}

export interface StoreSessionData {
  time: string;
  today: number;
  yesterday: number;
}

export interface SocialSalesData {
  platform: string;
  icon: React.ReactNode;
  impressions: number;
  clicks: number;
  revenue: string;
}

interface ChartDataPoint {
  createdAt: string;
  time: string;
  today: number;
  yesterday: number;
}

// Define the interface for your analytics data
export interface IAnalyticsData {
  charts: {
    totalSales: ChartDataPoint[];
    storeSessions: ChartDataPoint[];
    totalOrders: ChartDataPoint[];
    averageOrders: ChartDataPoint[];
    fulfilledOrders: ChartDataPoint[];
    marketingSales: ChartDataPoint[];
    returningCustomersRate: ChartDataPoint[];
  };
}

export interface ChartConfig {
  title: string;
  subTitle: string;
  type: 'chart' | 'grid';
  showSubHeader: boolean;
  dateTo?: string;
  dateFrom?: string;
  data?: any;
  columns?: any[];
}
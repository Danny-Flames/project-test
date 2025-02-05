import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import setupInterceptors from "../../api/api";
import {
  DashboardState,
  IAnalyticsData,
} from "../../constants/interfaces";
import { analyticsData } from "../../constants/dummyDb";

// Initial state
const initialState: DashboardState = {
  isLoading: false,
  error: null,
  currentDateRange: "Today",
  comparisonDateRange: "Yesterday",
  lastUpdated: null,
  autoRefresh: true,
  selectedCategory: "All",
  searchQuery: "",

  // Metrics
  totalSales: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  storeSessions: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  totalOrders: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  averageOrderVolume: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  fulfilledOrders: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  marketingSales: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  returningCustomerRate: {
    currentValue: 0,
    timeSeriesData: [],
    comparisonDate: "Aug 12, 2024",
    comparisonData: [],
    data: [],
  },
  socialSourceSales: {
    totalRevenue: 22035.0,
    sources: [
      {
        source: "Facebook",
        impressions: 35,
        clicks: 5,
        revenue: 22035.0,
      },
    ],
  },
};

// API
let { apiWithToken } = setupInterceptors();

// Thunks
export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async (params: { dateRange: string; comparison: string }, thunkAPI) => {
    try {
      const method = "GET";
      const url = `/users`;
      const response = await apiWithToken({
        method,
        url,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch dashboard data");
    }
  }
);

export const fetchAnalyticsData = createAsyncThunk<
  IAnalyticsData,
  { startDate: string; endDate: string },
  { rejectValue: string }
>("analytics/fetchData", async ({ startDate, endDate }, { rejectWithValue }) => {
  try {
    // Replace this with an actual API request if necessary
    return await new Promise<IAnalyticsData>((resolve) => {
      setTimeout(() => {
        const filteredData = analyticsData.charts.totalSales.filter((item) => {
          return item.createdAt >= startDate && item.createdAt <= endDate;
        });

        resolve({ ...analyticsData, charts: { ...analyticsData.charts, totalSales: filteredData } });
      }, 2000);
    });
  } catch (error) {
    return rejectWithValue("Failed to fetch analytics data");
  }
});


// Slice
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<string>) => {
      state.currentDateRange = action.payload;
    },
    setComparisonRange: (state, action: PayloadAction<string>) => {
      state.comparisonDateRange = action.payload;
    },
    toggleAutoRefresh: (state) => {
      state.autoRefresh = !state.autoRefresh;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lastUpdated = new Date().toISOString();
        // Update all metrics with the received data
        console.log("payload", payload);
        // Object.assign(state, payload);
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Fetch Analytics data
      .addCase(fetchAnalyticsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAnalyticsData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalSales.data = payload.charts.returningCustomersRate;
        state.storeSessions.data = payload.charts.storeSessions;
        state.totalOrders.data = payload.charts.totalOrders;
        state.averageOrderVolume.data = payload.charts.averageOrders;
        state.fulfilledOrders.data = payload.charts.fulfilledOrders;
        state.marketingSales.data = payload.charts.marketingSales;
        state.returningCustomerRate.data = payload.charts.returningCustomersRate;
      })
      .addCase(fetchAnalyticsData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const {
  setDateRange,
  setComparisonRange,
  toggleAutoRefresh,
  setCategory,
  setSearchQuery,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

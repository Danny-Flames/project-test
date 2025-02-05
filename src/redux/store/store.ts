import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import sidebarSlice from "../features/sidebarSlice";
import dashboardSlice from "../features/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
    dashboard: dashboardSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

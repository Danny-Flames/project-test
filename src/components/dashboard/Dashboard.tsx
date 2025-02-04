import React from "react";
import Sidebar from "./Sidebar";
import { BiSearch } from "react-icons/bi";
import AnalyticsDashboard from "./AnalyticsDashboard";
import Navbar from "./Navbar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header - starts */}
      <Navbar />
      {/* Header - ends */}

      {/* Main content area - starts */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <AnalyticsDashboard />
        </main>
      </div>
       {/* Main content area - ends */}
    </div>
  );
};

export default DashboardLayout;

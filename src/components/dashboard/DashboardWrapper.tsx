import React, { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import { closeSidebar } from "../../redux/features/sidebarSlice";

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  // Close sidebar when screen size becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(closeSidebar());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-20 md:hidden"
            onClick={() => dispatch(closeSidebar())}
          />
        )}

        {/* Sidebar with responsive behavior */}
        <div 
          className={`
            fixed md:static left-0 top-0 h-full z-30 
            transform transition-transform duration-300 ease-in-out
            md:transform-none
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
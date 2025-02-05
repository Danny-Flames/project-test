import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useNavbarData } from "../hooks/useNavbarData";
import { IoMdClose } from "react-icons/io";
import { closeSidebar } from "../../redux/features/sidebarSlice";
import { useAppDispatch } from "../../redux/store/hook";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { menuItems, menuItems_2, currentPath } = useNavbarData();
  const dispatch = useAppDispatch();

  // Function to handle navigate
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // Check for the active path
  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    // <div className="w-56 bg-white border-r">
    <div className="w-56 bg-gray-50">
      <div className="py-4 mt-5">
        {/* Close button - only visible on mobile */}
        <button
          onClick={() => dispatch(closeSidebar())}
          className="md:hidden absolute right-2 top-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close sidebar"
        >
          <IoMdClose size={22} className="custom-font-black" />
        </button>
        {/* Close button - ends  */}

        {/* Upper section - starts  */}
        <div className="mb-6 pl-6">
          <div className="py-4 px-2 rounded-lg bg-white">
            <div className="text-xs flex justify-between items-center custom-border-2-bottom pb-[6px]">
              <span className="custom-font-black font-semibold">
                Your Store(s)
              </span>
              <span className="flex items-center text-gray-500 button-hover">
                <CiSquarePlus className="mr-1" size={16} />
                Add Store
              </span>
            </div>
            <div className="text-xs flex justify-between items-center mt-2">
              <div className="flex items-center">
                <img
                  src="/images/jumia.png"
                  alt="profile_picx"
                  className="h-[24px] w-[24px] button-hover"
                />
                <span className="custom-font-black-2 font-medium text-xs ml-2">
                  Jumia
                </span>
              </div>
              <span className="flex items-center text-gray-500 button-hover">
                <HiOutlineDotsHorizontal size={16} />
              </span>
            </div>
            <div className="mt-2">
              <Button
                type="button"
                variant="secondary"
                className="!py-[7px] !text-xs font-medium"
                fullWidth
              >
                View Shop
              </Button>
            </div>
          </div>
        </div>
        {/* Upper section - ends  */}

        {/* Navbar items - starts  */}
        <nav className="pl-6">
          <div className="dashboard-sidebar-bg-1 py-4 px-2 rounded-lg">
            <p className="px-2 text-xs custom-font-grey mb-2">Menu</p>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-1 py-[8px] mb-1 rounded-lg cursor-pointer text-xs dashboard-sidebar-menu-item ${
                  isActive(item.path)
                    ? "dashboard-sidebar-bg-2 font-semibold"
                    : "custom-font-black"
                }`}
                onClick={() => handleNavigate(item.path)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 dashboard-sidebar-bg-1 py-4 px-2 rounded-lg">
            {menuItems_2.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-1 py-[8px] mb-1 rounded-lg cursor-pointer text-xs dashboard-sidebar-menu-item ${
                  isActive(item.path)
                    ? "dashboard-sidebar-bg-2 font-semibold"
                    : "custom-font-black"
                }`}
                onClick={() => handleNavigate(item.path)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </div>
            ))}
          </div>
        </nav>
        {/* Navbar items - ends  */}
      </div>
    </div>
  );
};

export default Sidebar;

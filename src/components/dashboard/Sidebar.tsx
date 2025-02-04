import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from "../Button";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const Sidebar: React.FC = () => {
  const menuItems: SidebarItem[] = [
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-1.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Analytics",
      active: true,
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-2.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Orders",
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-3.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Products",
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-4.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Categories",
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-5.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Brands",
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-6.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Refunds",
    },
  ];

  const menuItems_2: SidebarItem[] = [
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-7.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Support",
      active: false,
    },
    {
      icon: (
        <img
          src="images/sidebar-menu-icon-8.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Configuration",
    },
  ];

  return (
    // <div className="w-56 bg-white border-r">
    <div className="w-56 bg-gray-50">
      <div className="py-4 mt-5">
        {/* Upper section - starts  */}
        <div className="mb-6 pr-2 pl-8">
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
                  src="images/jumia.png"
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
                  item.active
                    ? "dashboard-sidebar-bg-2 font-semibold"
                    : "custom-font-black"
                }`}
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
                  item.active
                    ? "dashboard-sidebar-bg-2 font-semibold"
                    : "custom-font-black"
                }`}
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

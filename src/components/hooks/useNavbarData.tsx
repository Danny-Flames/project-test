import { useLocation } from 'react-router-dom';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const useNavbarData = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems: SidebarItem[] = [
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-1.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Analytics",
      path: "/dashboard",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-2.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Orders",
      path: "/orders",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-3.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Products",
      path: "/products",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-4.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Categories",
      path: "/categories",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-5.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Brands",
      path: "/brands",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-6.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Refunds",
      path: "/refunds",
    },
  ];

  const menuItems_2: SidebarItem[] = [
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-7.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Support",
      path: "/support",
    },
    {
      icon: (
        <img
          src="/images/sidebar-menu-icon-8.png"
          alt="icon"
          className="h-[14px] w-[14px]"
        />
      ),
      label: "Configuration",
      path: "/configuration",
    },
  ];

  return {
    menuItems,
    menuItems_2,
    currentPath,
  };
};
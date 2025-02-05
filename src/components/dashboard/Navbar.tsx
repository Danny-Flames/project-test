import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "../../redux/features/sidebarSlice";
import { logoutUser } from "../../redux/features/authSlice"; 
import { useAppDispatch } from "../../redux/store/hook";

function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth/login", { replace: true });
  };

  return (
    <header className="w-full bg-black px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center mr-2">
        {/* Hamburger Menu - Only visible on small screens */}
        <button
          className="text-white md:hidden block mr-2"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FiMenu size={24} />
        </button>
        <div className="text-white text-base font-semibold">LOGO</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="h-[36px] navbar-search-input custom-input-bg-grey text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center relative">
        <IoIosNotificationsOutline
          className="text-white mr-4 button-hover"
          size={24}
        />
        
        {/* Profile Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center button-hover cursor-pointer"
            onClick={handleToggleDropdown}
          >
            <img
              src="/images/user_avatar.png"
              alt="profile_picx"
              className="custom-border-1 rounded-full h-[24px] w-[24px] button-hover"
            />
            <IoChevronDownOutline
              className="text-white ml-1 custom-dark-grey"
              size={24}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate("/configuration")}
              >
                Configuration
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

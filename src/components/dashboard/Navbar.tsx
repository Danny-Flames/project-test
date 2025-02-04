import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className="w-full bg-black px-6 py-4 flex items-center justify-between">
      <div className="text-white text-base font-semibold">LOGO</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-[320px] h-[36px] custom-input-bg-grey text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center">
        <IoIosNotificationsOutline
          className="text-white mr-4 button-hover"
          size={24}
        />
        <div className="flex items-center button-hover">
          <img
            src="images/user_avatar.png"
            alt="profile_picx"
            className="custom-border-1 rounded-full h-[24px] w-[24px] button-hover"
          />
          <IoChevronDownOutline
            className="text-white ml-1 custom-dark-grey"
            size={24}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

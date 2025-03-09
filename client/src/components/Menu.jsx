import React, { useState } from "react";
import {
  FaThLarge,
  FaTasks,
  FaChartLine,
  FaShoppingCart,
} from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdMenu
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useInsight } from "../hooks/CustomHook";

const Menu = () => {
  const navigate = useNavigate();
  const { setIsMaximized } = useInsight(); // Ensure useInsight is correctly imported
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("chatConversation");
    alert("Logged out successfully!");
    navigate("/signin");
  };

  //   handle menu function
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Menu Item Component
  function MenuItem({ icon, label, count, active, onClick }) {
    return (
      <li
        className={`flex items-center p-3 ${
          active ? "bg-lime-100" : "hover:bg-gray-100"
        } rounded-lg cursor-pointer`}
        onClick={onClick}
      >
        {icon}
        {!menu && <span className="ml-2">{label}</span>}

        {!menu && count && (
          <span className="ml-auto bg-gray-200 text-xs px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </li>
    );
  }

  return (
    <>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden fixed top-8 left-5  p-2 rounded-lg z-50"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <MdMenu className="text-2xl" />
      </button>
  
    <div
        className={`fixed md:relative top-0 left-0 h-fit bg-white transition-all duration-300  z-40 p-4 shadow-lg md:shadow-none rounded-3xl border border-black md:flex flex-col items-start
       ${mobileMenu ? "translate-x-0 w-60 pt-30" : "-translate-x-full md:translate-x-0 md:w-1/4 md:ml-7 "}
         ${menu ? "md:w-1/12 md:flex md:flex-col md:items-center md:gap-6" : "md:w-1/4"} 
`}
    >
      <div className={`${!menu ? "mt-3" :"mt-7 flex flex-col items-center" }`}>
        <div className="flex items-center justify-between px-4">
          {!menu && <h3 className="text-lg font-semibold">Menu</h3>}

          {!menu ? (
            <MdKeyboardDoubleArrowLeft
              className="text-2xl cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <MdKeyboardDoubleArrowRight
              className="text-2xl cursor-pointer"
              onClick={handleMenu}
            />
          )}
        </div>
              <ul className={` ${!menu ?"my-10 space-y-2" : "my-20 space-y-4"}`}>
          <MenuItem
            icon={<FaThLarge />}
            label="Dashboard"
            count={2}
            active={!menu}
            onClick={() => setIsMaximized(false)}
          />
          <MenuItem
            icon={<FaChartLine />}
            label="Insights"
            onClick={() => setIsMaximized(true)}
          />
          <MenuItem icon={<FaTasks />} label="Tasks" />
          <MenuItem icon={<FaShoppingCart />} label="Sales" />
        </ul>

        {!menu ? (
          <div className="bg-[#EDFFC9] p-2 rounded-3xl">
            <div className="flex items-center">
              <h2 className="capitalize font-semibold">upgrade plan</h2>
              <BsArrowUpRightCircle className="mx-1.5 h-6 w-6 text-gray-700 bg-white rounded-full" />
            </div>
            <p className="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              mollitia ut accusantium vel temporibus.
            </p>
          </div>
        ) : (
          <div className=" p-2 rounded-3xl">
            <div className="flex items-center">
              <BsArrowUpRightCircle className="mx-1.5 h-6 w-6 text-gray-700 bg-white rounded-full" />
            </div>
          </div>
        )}
      </div>

      <ul className="mx-6 space-y-2 my-10 cursor-pointer">
        <li className="uppercase">faqs</li>
        <li className={`capitalize text-red-500 ${!menu ? "" : "text-nowrap text-sm"}`} onClick={handleLogout}>
          log out
        </li>
      </ul>
    </div>
    </>
  );
};

export default Menu;


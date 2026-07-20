import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// menu
const menus = [
  {
    icon: "/Home.svg",
    title: "Home",
    path: "/",
  },
  {
    icon: "/Cart.svg",
    title: "Bag",
    path: "/cart",
  },
];

export default function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const [isActive, setIsActive] = useState("");

  return (
    <div
      className={`
        bg-white rounded-2xl p-4 transition-all duration-300

        /* Mobile & Tablet */
        flex flex-row items-center justify-between
        w-full h-auto

        /* Desktop */
        lg:flex-col lg:justify-start
        ${isMenuOpen ? "lg:w-64" : "lg:w-18"}
        lg:h-full
      `}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between w-auto lg:w-full lg:flex-col lg:space-y-8">
        {/* Logo */}
        <img
          src="/Logo.svg"
          alt="ecom store Logo"
          className="h-[41px] w-[47px]"
        />

        {/* Toggle - Desktop only */}
        <img
          src="/Menu-Icon.svg"
          alt="menu icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="hidden lg:block scale-hover h-[40px] w-[40px] cursor-pointer"
        />
      </div>

      {/* MENU ITEMS */}
      <div className="flex items-center gap-6 lg:mt-8 lg:w-full lg:flex-col lg:items-start lg:gap-8">
        {menus.map((menu) => (
          <NavLink
            key={menu.title}
            to={menu.path}
            onClick={() => setIsActive(menu.title)}
            className={`flex items-center rounded-xl transition-all duration-300 hover:bg-tertiary/30
              ${
                isMenuOpen && isActive === menu.title
                  ? "lg:bg-black lg:hover:shadow-lg w-full"
                  : ""
              }`}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center h-[40px] w-[40px] rounded-[10px] transition-all duration-300
                ${
                  isActive === menu.title
                    ? "bg-black"
                    : menu.title === "Home"
                      ? "bg-tertiary/30"
                      : ""
                }`}
            >
              <img src={menu.icon} alt={menu.title} className="w-6 h-6" />
            </div>

            {/* Text - Desktop only */}
            <p
              className={`hidden lg:block ml-4 text-lg font-bold transition-opacity duration-300
                ${isMenuOpen ? "opacity-100" : "opacity-0"}
                ${isActive === menu.title ? "text-white" : "text-black"}
              `}
            >
              {menu.title}
            </p>
          </NavLink>
        ))}
      </div>

      {/* Logout - Desktop only */}
      <div className="hidden lg:flex bg-danger mt-auto rounded-[10px] items-center px-[10.5px] py-[11.75px] hover:cursor-pointer hover:scale-110 transition-all duration-300">
        <img src="/Logout.svg" alt="Logout" />

        {isMenuOpen && (
          <p className="ml-4 text-lg font-bold text-white">Logout</p>
        )}
      </div>
    </div>
  );
}

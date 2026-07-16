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
    activeIcon: "/Vector(3).svg",
  },
];

export default function Sidebar() {
  //menu toggle state
  const [isActive, setIsActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${isMenuOpen ? "w-64" : "w-18"} bg-white rounded-2xl h-full p-4 flex flex-col transition-all duration-300`}
    >
      {/* logo */}

      <div className="flex flex-col justify-center space-y-8">
        <img
          src="/Logo.svg"
          alt="ecom store Logo"
          className="h-[41px] w-[47px]"
        />
        {/* toggle */}
        <img
          src="/Menu-Icon.svg"
          alt="menu icon"
          className="scale-hover h-[40px] w-[40px]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>

      {/* MENU ITEMS */}
      <div className="mt-8 space-y-8">
        {menus.map((menu, idx) => (
          // conditionally render menu icons UI
          <NavLink
            to={menu.path}
            key={idx}
            onClick={() => setIsActive(menu.title)}
            className={`flex items-center  transition-all duration-300 hover:cursor-pointer rounded-xl hover:bg-tertiary/30 ${isMenuOpen && isActive === menu.title ? "bg-black hover:scale-110 hover:shadow-lg " : ""}`}
          >
            {/* menu icon */}
            <div
              className={`flex items-center shrink-0 justify-center h-[40px] w-[40px] p-2.5 rounded-[10px]  hover:cursor-pointer hover:scale-110 transition-all duration-300 ${isActive === menu.title ? "bg-black" : isActive === "Bag" ? "bg-black/80" : null} ${menu.title === "Home" && isActive !== "Home" ? "bg-tertiary/30" : null} `}
            >
              <img src={menu.icon} alt={menu.title} className="w-6 h-6" />
            </div>
            {/* menu title */}

            <p
              className={`ml-4 text-lg font-bold ${isMenuOpen ? "opacity-100" : "opacity-0"} ${isActive === menu.title ? "text-white" : "text-black"}`}
            >
              {menu.title}
            </p>
          </NavLink>
        ))}
      </div>
      {/* logout */}
      <div className="bg-danger mt-auto rounded-[10px] flex items-center px-[10.5px] py-[11.75px] hover:cursor-pointer hover:scale-110 transition-all duration-300">
        <img src="/Logout.svg" alt="" />
        {isMenuOpen && (
          <p className="ml-4 text-lg font-bold text-white">Logout</p>
        )}
      </div>
    </div>
  );
}

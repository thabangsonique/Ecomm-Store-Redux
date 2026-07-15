import React from "react";

// menu
const menus = [
  {
    icon: "/Home.svg",
    title: "Home",
  },
  {
    icon: "/Cart.svg",
    title: "Bag",
  },
];

export default function Sidebar() {
  return (
    <div className="p-4  bg-white min-h-screen">
      <div className="flex flex-col justify-center space-y-8 rounded-lg">
        {/* logo */}
        <img src="/Logo.svg" alt="ecom store Logo" />
        {/* toggle */}
        <img src="/Menu-Icon.svg" alt="menu icon" />

        {/* menus */}
        <div className="space-y-8">
          {menus.map((menu, idx) => (
            // conditionally render menu icons UI
            <div
              key={idx}
              className="flex items-center justify-center bg-black p-2.5 rounded-2xl"
            >
              <img src={menu.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

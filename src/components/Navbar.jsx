import React from "react";

export default function Navbar() {
  return (
    <div>
      <h2 className="text-base font-regular text-tertiary mb-[8px]">
        Search Item
      </h2>
      {/* search bar */}
      <div className="w-[507px] bg-white px-6 py-4 rounded-[13px] shadow-[0_4px_16px_0_rgba(26,31,22,0.15)]">
        <input
          type="search"
          placeholder="Apple Watch,Samsung S21,Macbook Pro, ..."
          className="w-full border-none focus:outline-none"
        />
      </div>
    </div>
  );
}

import React from "react";

export default function CheckOutItems() {
  return (
    <div className="flex flex-col">
      {/* shipping address container*/}
      <div className="bg-white rounded-[13px]">
        <h1 className="uppercase tracking-[0.25em] text-[31.25px]">
          shipping address
        </h1>
        <div>
          {/* dynamic-text-render */}
          <p className="text-regular text-xl"> John Maker</p>
          <p className="text-regular text-xl">123 Plae Grond Stret</p>
          <p className="text-regular text-xl">Vermont, California</p>
          <p className="text-regular text-xl">United States of America</p>
        </div>
      </div>
    </div>
  );
}

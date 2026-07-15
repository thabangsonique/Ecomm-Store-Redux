import React from "react";

export default function CartSummary() {
  return (
    <div className="flex flex-col flex-1 w-full pt-14">
      <h1 className="font-medium text-center text-[39.06px]">Bag</h1>

      {/* cart items */}
      <div className="flex flex-col items-center">
        {/* items */}
        <div className="grid md:grid-cols-3 gap-4 mt-4.5 p-2">
          <div className="flex items-center justify-center bg-white p-2 rounded-2xl">
            <img src="/iphone.png" alt="iphone" className="size-20" />
          </div>
          <div className="bg-white inline-block">
            <img src="/iphone.png" alt="iphone" className="size-20" />
          </div>
          <div className="bg-white inline-block">
            <img src="/iphone.png" alt="iphone" className="size-20" />
          </div>
          <div className="bg-white inline-block">
            <img src="/iphone.png" alt="iphone" className="size-20" />
          </div>
        </div>

        {/* CTA button */}
        <button className="btn-primary">
          <img src="/cart-white.svg" alt="" />
          <p className="text-white text-xl">View Bag</p>
        </button>
      </div>
    </div>
  );
}

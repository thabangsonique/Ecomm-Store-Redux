import React from "react";

export default function CartSummary() {
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-screen pt-10 pb-10">
      {/* scroll-line */}
      <div className="absolute left-0 top-[51px] bottom-[51px] bg-dark/50 w-[4px]" />

      <div className="px-8 ">
        <h1 className="font-medium text-center text-[39.06px]">Bag</h1>

        {/* cart items */}
        <div className="flex flex-col items-center ">
          {/* items */}
          <div className="grid md:grid-cols-3 gap-4 mt-4.5">
            <div className="flex items-center justify-center bg-white p-2 rounded-2xl">
              <img src="/iphone.png" alt="iphone" className="size-20" />
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-2xl">
              <img src="/iphone.png" alt="iphone" className="size-20" />
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-2xl">
              <img src="/iphone.png" alt="iphone" className="size-20" />
            </div>
            <div className="flex items-center justify-center bg-white p-2 rounded-2xl">
              <img src="/iphone.png" alt="iphone" className="size-20" />
            </div>
          </div>

          {/* CTA button */}
          <button className="btn-primary mt-10">
            <img src="/cart-white.svg" alt="" />
            <p className="text-white text-xl">View Bag</p>
          </button>
        </div>
      </div>
    </div>
  );
}

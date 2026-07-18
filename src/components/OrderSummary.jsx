import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className=" w-[243px] bg-white rounded-xl p-4">
      <div>
        <span className="text-xl font-medium ">Order Summary</span>

        {/* items-details */}
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-tertiary">Items:</p>
            <p className="text-tertiary">
              <span className="mr-1 text-tertiary">$</span>
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-between ">
            <p className="text-tertiary">Shipping:</p>
            <p className="text-tertiary">
              <span className="mr-1">$</span>
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-tertiary">Esitimated GST:</p>
            <p className="text-tertiary">
              <span className="mr-1">$</span>
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-tertiary">Gift Card:</p>
            <p className="text-tertiary">
              <span className="mr-1">$</span>
              {totalPrice}
            </p>
          </div>

          {/* line */}
          <div className="h-[1px] bg-light mt-[16px]" />

          {/* order total */}
          <div className="flex justify-between text-danger mt-4 mb-4">
            <span className="font-medium text-xl">Order Total</span>
            <span className="font-medium text-xl">
              <span>$</span>6609.78
            </span>
          </div>

          {/* line */}
          <div className="h-[1px] bg-light mt-[16px] mb-4" />

          {/* CTA BUTTON */}
          <button className="text-[15px] text-white font-regular w-full bg-black rounded-[11px] py-[8px] px-[53px]">
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
}

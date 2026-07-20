import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderSummary() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const shipping = totalPrice > 0 ? 6.99 : 0;
  const estimatedGST = totalPrice * 0.13;
  const giftCard = 0;
  const orderTotal = totalPrice + estimatedGST + shipping - giftCard;

  return (
    <div>
      <div className=" w-[243px] bg-white rounded-xl p-4">
        <div>
          <span className="text-xl font-medium ">Order Summary</span>

          {/* items-details */}
          <div className="mt-4 space-y-[16px]">
            <div className="flex justify-between">
              <p className="text-tertiary">Items:</p>
              <p className="text-tertiary">
                <span className="mr-1 text-tertiary">$</span>
                {totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between ">
              <p className="text-tertiary">Shipping:</p>
              <p className="text-tertiary">
                <span className="mr-1">$</span>
                {shipping}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-tertiary">Esitimated GST:</p>
              <p className="text-tertiary">
                <span className="mr-1">$</span>
                {estimatedGST.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-tertiary">Gift Card:</p>
              <p className="text-tertiary">
                <span className="mr-1">$</span>
                {giftCard.toFixed(2)}
              </p>
            </div>

            {/* line */}
            <div className="h-[1px] bg-light mt-[16px]" />

            {/* order total */}
            <div className="flex justify-between text-danger mt-4 mb-4">
              <span className="font-medium text-xl">Order Total</span>
              <span className="font-medium text-xl">
                <span>$</span>
                {orderTotal.toFixed(2)}
              </span>
            </div>

            {/* line */}
            <div className="h-[1px] bg-light mt-[16px] mb-4" />

            {/* CTA BUTTON */}
            <button className="text-[15px] text-white font-regular w-full bg-black rounded-[11px] py-[8px] px-[53px] btn-hover">
              Place your order
            </button>
          </div>
        </div>
      </div>

      {/* back button */}
      <Link to={"/cart"}>
        <button className="flex ml-auto space-x-[16.62px] mt-[25px] py-[10.4px] pl-[32.62px] pr-[24px] border border-black rounded-[11px] btn-hover">
          {/* arrow icon */}
          <img src="/Arrow-left.svg" alt="arrow-back" />
          <p className="text-xl">Back</p>
        </button>
      </Link>
    </div>
  );
}

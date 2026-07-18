import React from "react";
import CheckOutItems from "../components/CheckOutItems";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  return (
    <div className=" flex pt-14 pl-25.5">
      {/* check out items */}
      <div>
        <CheckOutItems />
      </div>

      {/* order-summary */}
      <div className=" ml-[102px]">
        <OrderSummary />
      </div>
    </div>
  );
}

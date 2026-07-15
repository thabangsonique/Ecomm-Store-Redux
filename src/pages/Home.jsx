import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CartSummary from "../components/CartSummary";

export default function Home() {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="fixed">
        {" "}
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-[122px] mr-10 flex flex-col items-center">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-background">
          <Navbar />
        </div>

        {/* ProductListing */}
        <div className="overflow-y-auto custom-scrollbar">
          {" "}
          <ProductList />
        </div>
      </div>

      {/* cartSummery */}
      <div className="fixed right-0 w-[345px]">
        {" "}
        <CartSummary />
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CartSummary from "../components/CartSummary";

export default function Home() {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />

      <div className=" p-6 flex flex-col items-center">
        {/* Navbar */}
        <Navbar />
        {/* ProductListing */}
        <ProductList />
      </div>

      {/* cartSummery */}
      <CartSummary />
    </div>
  );
}

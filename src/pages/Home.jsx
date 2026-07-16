import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CartSummary from "../components/CartSummary";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/product/") || location.pathname === "/cart";
  return (
    <div className="flex p-4">
      {/* sidebar */}
      <div className="fixed top-8 left-4 bottom-8">
        {" "}
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-[122px] mr-10 flex flex-col items-center">
        {/* Navbar */}
        {!hideNavbar ? (
          <div className="sticky top-0 z-10 bg-background">
            <Navbar />
          </div>
        ) : null}

        {/* ProductListing */}
        <div className="overflow-y-auto custom-scrollbar">
          {" "}
          <Outlet />
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

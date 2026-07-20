import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductList from "../components/ProductList.jsx";
import CartSummary from "../components/CartSummary.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/product/") || location.pathname === "/cart";
  return (
    <div className="flex p-0 md:p-4">
      {/* sidebar */}
      <div
        className="
    fixed top-0 left-0 right-0 z-50
    lg:top-8 lg:left-4 lg:bottom-8 lg:right-auto
  "
      >
        {" "}
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto mt-[100px] md:mt-0 md:ml-[122px] md:mr-10 flex flex-col xl:items-center">
        {/* Navbar */}
        {!hideNavbar ? (
          <div className="sticky top-0 z-10 ">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        ) : null}

        {/* ProductListing */}
        <div
          className={`overflow-y-auto overflow-x-auto custom-scrollbar transition-all duration-300 ${isMenuOpen ? "md:ml-40" : "ml-0"}`}
        >
          {" "}
          <Outlet context={{ isMenuOpen, setIsMenuOpen, searchTerm }} />
        </div>
      </div>

      {/* cartSummery */}
      <div className="fixed hidden md:block right-0 md:w-[300px] xl:w-[345px]">
        {" "}
        <CartSummary />
      </div>
    </div>
  );
}

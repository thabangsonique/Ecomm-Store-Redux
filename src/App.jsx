import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./index.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Checkout from "./pages/Checkout.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import AddPayment from "./pages/AddPayment.jsx";
import ProductList from "./components/ProductList.jsx";
import SavePayment from "./pages/SavePayment.jsx";
import SaveAddress from "./pages/SaveAddress.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* stand-alone pages */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-payment" element={<AddPayment />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/save-payment" element={<SavePayment />} />
        <Route path="/save-address" element={<SaveAddress />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

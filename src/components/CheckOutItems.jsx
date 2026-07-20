import { Star } from "lucide-react";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increament } from "../features/cartSlice.jsx";
import { decreament } from "../features/cartSlice.jsx";

export default function CheckOutItems() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const shipping = useSelector((state) => state.checkout.shippingAddress);
  const payment = useSelector((state) => state.checkout.paymentMethod);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formattedSubtotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  const lastFour = String(payment.cardNumber).slice(-4);

  return (
    <div className="flex flex-col overflow-y-auto h-screen no-scrollbar">
      {/* shipping address container*/}
      <div className="bg-white rounded-[13px] p-4 w-[871px]">
        <h1 className="uppercase tracking-[0.25em] text-[31.25px] mb-6">
          shipping address
        </h1>
        <div className="flex justify-between">
          {/* dynamic-text-render */}
          <div>
            {" "}
            <p className="text-regular text-xl">{shipping.fullname}</p>
            <p className="text-regular text-xl">{shipping.street}</p>
            <p className="text-regular text-xl">
              {shipping.city}, {shipping.province}
            </p>
            <p className="text-regular text-xl">{shipping.country}</p>
          </div>

          {/* cta-button */}
          <Link to={"/add-address"}>
            <button className="h-[35px] items-center justify-center btn-secondary text-base font-regular btn-hover">
              Change
            </button>
          </Link>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="bg-white rounded-[13px] p-4 w-[871px] mt-6">
        <h1 className="uppercase tracking-[0.25em] text-[31.25px] mb-[24px]">
          payment method
        </h1>
        <div className="flex justify-between">
          {/* dynamic-text-render */}
          <div>
            {" "}
            <div className="flex space-x-[8px] mb-4">
              {/* icon */}
              <img src="/Card-icon.svg" alt="Card" />
              <p className="text-xl font-regular">
                Matsercard{" "}
                <span className="text-tertiary">ending in {lastFour}</span>
              </p>
            </div>
            <div className="flex space-x-[8px] mb-4">
              {/* icon */}
              <img src="/Gift-icon.svg" alt="Card" />
              <p className="text-xl font-regular">
                $ 53.21 <span className="text-tertiary">gift card balance</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* box-icon */}
              <div className="w-[16px] h-[16px] p-0.5 border border-tertiary rounded-[2px]">
                <div className="bg-accent w-full h-full rounded-[2px]" />
              </div>
              {/* text */}
              <p>Billing address same as Shipping Address</p>
            </div>
          </div>

          {/* cta-button */}
          <Link to={"/add-payment"}>
            <button className="h-[35px] items-center justify-center btn-secondary text-base font-regular btn-hover">
              Change
            </button>
          </Link>
        </div>
      </div>

      {/* REVIEW BAG */}
      <div className="mt-6 p-6  bg-white rounded-[13px]">
        <h1 className="uppercase tracking-[0.25em] text-[31.25px] mb-[24px]">
          {" "}
          review your bag
        </h1>

        {/* bag-product-items */}
        <div className="mt-[32px] p-2 ">
          {" "}
          {products.map((product, idx) => (
            <div key={idx} className="flex  pb-[32px] px-6 py-4">
              <div></div>
              {/* product image */}
              <div>
                {" "}
                <img src={product.image} alt={product.title} />
              </div>

              {/* product details */}
              <div className=" flex-1 py-2 px-4">
                <h1 className="text-[31.25px] mb-2">{product.title}</h1>
                {/* To-Fix! */}
                <p className="text-xl text-tertiary mb-4">White</p>
                <p className="mb-[26.25px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam{" "}
                </p>
                {/* star rating */}
                <div className="flex mb-[17.5px] ">
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <FaStarHalfAlt className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <span className="text-accent text-xl ml-[25px]">4.5/5</span>
                </div>

                {/* price + quantity */}
                <div className="flex justify-between items-center  py-3.25">
                  <span className="text-xl">
                    <span className="mr-1">$</span>
                    {product.price} x {product.quantity}
                  </span>
                  {/* quantity selector */}
                  <div className="flex space-x-[24px] items-center">
                    <button
                      onClick={() => dispatch(decreament(product.id))}
                      className="btn-hover"
                    >
                      <img src="/minus-icon.svg" alt="Decrease quantity" />
                    </button>
                    <p className="text-[20px]">{product.quantity}</p>
                    <button
                      onClick={() => dispatch(increament(product.id))}
                      className="btn-hover"
                    >
                      <img src="/Plus-icon.svg" alt="increase quantity" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <p className="text-sm text-tertiary">Total</p>
            <p className="text-xl font-semibold text-dark">
              {formattedSubtotal}
            </p>
          </div>
          <Link to="/checkout">
            <button className="rounded-[10px] bg-black px-5 py-3 text-white font-medium btn-hover">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

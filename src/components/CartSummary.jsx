import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function CartSummary() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const { products, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart,
  );

  const handleNavigateCart = () => {
    if (isCartPage) {
      navigate("/checkout");
    } else {
      navigate("/cart");
    }
  };

  //format total price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  console.log();
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-screen pt-10 pb-10">
      {/* scroll-line */}
      <div className="absolute left-0 top-[51px] bottom-[51px] bg-dark/50 w-[4px]" />

      <div className="px-8 ">
        <h1 className="font-medium text-center text-[39.06px]">Bag</h1>

        {/* cart items */}
        <div className="flex flex-col items-center ">
          {/* items map*/}
          <div className="grid md:grid-cols-3 gap-4 mt-4.5">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white p-2 rounded-2xl"
              >
                <img src={product.image} alt="iphone" className="size-20" />
              </div>
            ))}
          </div>

          {/* total */}
          <div className="mt-6.5">
            <p className="text-xl font-medium">
              Bag Total: <span className="ml-4">{formattedPrice}</span>
            </p>
          </div>
          {/* CTA button */}
          <button
            onClick={() => handleNavigateCart()}
            className="btn-primary mt-10 scale-hover"
          >
            <img src="/cart-white.svg" alt="" />
            <p className="text-white text-xl">
              {isCartPage ? "Checkout" : "View Bag"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

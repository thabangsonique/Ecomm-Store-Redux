import { Star } from "lucide-react";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreament } from "../features/cartSlice.jsx";
import { increament } from "../features/cartSlice.jsx";

export default function Cart() {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart.products);
  return (
    <div className="px-0  py-[40px] xl:px-[48px] w-screen md:w-[973px]">
      <h1 className="text-[48.83px] text-center">Check your Bag Items</h1>

      {/* collective cart items conditional state */}

      <div className="mt-8.5 mx-10 md:mx-0">
        {/* item-1  conditional render*/}
        {productsCart.length === 0 ? (
          <h1 className="text-center text-5xl text-tertiary mt-50">
            Bag is empty!
          </h1>
        ) : (
          productsCart.map((product, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[auto_1fr] mb-[24px] bg-white rounded-[21px] pt-4 pb-4.5 px-6 md:w-[600px] xl:w-[877px]"
            >
              {/* left-image */}
              <img src={product.image} alt={product.title} />
              {/* right-container */}
              <div className="py-2 pl-4  px-2">
                <h1 className="text-[31.24px] mb-2">{product.title}</h1>
                <p className="text-tertiary text-xl mb-4">{product.color}</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam{" "}
                </p>

                {/* rating hardcoded*/}
                <div className="flex mb-[17.5px] ">
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <Star className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <FaStarHalfAlt className="fill-accent text-accent w-[22.5px] h-[21px]" />
                  <span className="text-accent text-xl">4.5/5</span>
                </div>

                {/* price + quantity */}
                <div className="flex justify-between items-center  p-4">
                  <span className="text-xl">
                    {product.price} x {product.quantity}
                  </span>
                  {/* quantity selector */}
                  <div className="flex space-x-[24px] items-center">
                    <button
                      className="hover:cursor-pointer"
                      onClick={() => dispatch(decreament(product.id))}
                    >
                      <img src="/minus-icon.svg" alt="Decrease quantity" />
                    </button>
                    <p className="text-[20px]">{product.quantity}</p>
                    <button
                      onClick={() => dispatch(increament(product.id))}
                      className="hover:cursor-pointer"
                    >
                      <img src="/Plus-icon.svg" alt="increase quantity" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

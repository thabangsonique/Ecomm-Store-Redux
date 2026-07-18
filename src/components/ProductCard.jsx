import React from "react";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product, image, title, color, price }) {
  const dispatch = useDispatch();
  const handleAddCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully!");
  };

  return (
    <div className="hover:cursor-pointer  group transition-all duration-300 ">
      {/* image container*/}
      <div className="rounded-[22px] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.20)] bg-white p-4 transition-all duration-300">
        <img src={image} alt={title} />
      </div>
      {/* text content */}
      <div className="mt-2 p-2">
        <h2 className="text-xl font-medium text-dark mb-2">{title}</h2>
        <p className="text-base font-regular text-tertiary">{color}</p>

        {/* price + add to cart icon */}
        <div className="flex justify-between items-center mt-2 p-2">
          <span className="text-xl font-medium">{price}</span>
          {/* icon */}
          <div
            onClick={(e) => handleAddCart(e, product)}
            className=" inline-flex flex-col group items-center px-[10px] py-[10px] justify-center rounded-[9px] bg-black  hover:bg-tertiary hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            <img src="/add-cart.svg" alt="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

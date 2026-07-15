import React from "react";
import products from "../data/products";

export default function ProductCard({ image, title, color, price }) {
  return (
    <div>
      {/* image container*/}
      <div className="rounded-[22px] bg-white p-4">
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
          <div className="flex items-center justify-center rounded-[9px] bg-black h-[34px] w-[34px]">
            <img src="/add-cart.svg" alt="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

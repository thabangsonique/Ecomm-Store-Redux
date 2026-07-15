import React from "react";
import products from "../data/products";

export default function ProductCard({ image, title, color, price }) {
  return (
    <div>
      {/* image container*/}
      <div className="rounded-[22px] bg-white p-4">
        <img src="/watch.png" alt="Apple watch" />
      </div>
    </div>
  );
}

import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-4 mt-10.5 pt-2 gap-[48px] pb-4">
      {products.map((product, idx) => (
        <div key={idx}>
          {" "}
          <ProductCard
            image={product.image}
            title={product.title}
            color={product.color}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}

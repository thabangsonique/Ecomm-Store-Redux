import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-4 mt-10.5 pt-2 gap-[48px] pb-4">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="block">
          <ProductCard
            product={product}
            image={product.image}
            title={product.title}
            color={product.color}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
}

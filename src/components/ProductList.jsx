import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products";
import { useOutlet } from "react-router-dom";

export default function ProductList() {
  const { isMenuOpen, searchTerm } = useOutletContext();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div
      className={`grid ${isMenuOpen ? "md:grid-cols-3" : "md:grid-cols-2 md:gap-[70px] xl:grid-cols-4 xl:gap-[48px]"} mt-10.5 pt-2 gap-[48px] pb-4 transition-all dutation-300`}
    >
      {filteredProducts.map((product) => (
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

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product, dimensions }) => {
  console.log(product.slug.current)
  return (
    <div className="product-card">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        href={`/products/${product.slug.current}`}
      >
        <div className="product">
          <img
            src={urlFor(product.image && product.image[0])}
            width={dimensions}
            height={dimensions}
            className="product-image"
            alt="cover image"
          />
          <div className="p-title">{product.name}</div>
          <div className="p-price">${product.price} CAD</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

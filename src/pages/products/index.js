import React from "react";
import { client } from "../../lib/client";
import { Product } from "@/components";

const product = ({ products }) => {
  const uniqProducts = [];
  products.forEach((item) => {
    if (!uniqProducts.includes(item)) {
      uniqProducts.push(item);
    }
  });

  return (
    <>
      <div className="products">
        {uniqProducts?.map((product) => {
          return <Product product={product} width={window.innerWidth >= 768 ? 350: 150} height={window.innerWidth >= 768 ? 350: 150} />;
        })}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default product;

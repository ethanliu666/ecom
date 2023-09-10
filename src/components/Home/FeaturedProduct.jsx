import React from "react";
import Product from "../Products/Product";
import classes from "./FeaturedProduct.module.css"

const FeaturedProduct = ({ featuredProducts }) => {
  return (
    <div className={classes.feature}>
      <div className={classes.featureProducts}>
        {featuredProducts.map((product, i) => {
          return <Product key={i} product={product} width={350} height={350} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;

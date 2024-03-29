import React from "react";
import Link from "next/link";
import styles from "./ProductDetails.module.css";

const ProductDesc = ({ presetNumber }) => {
  return (
    <div className={styles.descText}>
      Presets best for  images. <br />
      What you will get: <br /> -<b>{presetNumber} </b>Custom Lightroom Desktop
      Presets <br /> -<b>{presetNumber}</b> Custom Lightroom Mobile Presets (DNG
      Files) <br />
      Lightroom Mobile is completely free. No payments or subscriptions needed.
      Don’t know how to download and use our presets? No worries, you can follow
      our instructions <Link href="/tutorial" style={{ textDecoration: "none", color: "black" }}>here</Link>.
    </div>
  );
};

export default ProductDesc;

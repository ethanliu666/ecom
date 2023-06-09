import React from "react";
import classes from "./StatsSection.module.css";
import Image from "next/image";

const StatsSection = ({ text, showIncludes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/mobile_desktop.png"
          alt="desktop and mobile image"
          width={window.innerWidth > 768 ? 500 : 300}
          height={window.innerWidth > 768 ? 350 : 200}
          style={{justifyContent: "center"}}
          priority={true}
        />
      </div>
      <div className={classes.textContainer}>
        <h3 className={showIncludes ? classes.secondTitle : classes.hidden}>
          Includes
        </h3>
        <h1 className={classes.title}>Mobile + Desktop Presets</h1>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default StatsSection;

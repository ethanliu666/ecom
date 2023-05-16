import React, { useRef } from "react";

const Slider = () => {
  const inputRef = useRef();

 
  return (
    <div ref={inputRef} className="slider-container">
      <div className="slider-image-container">
        <img
          className="image-before slider-image"
          src="/Image_One.jpeg"
          alt="before image"
        />
        <img
          className="image-after slider-image"
          src="Image_Two.jpeg"
          alt="after image"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        className="slider"
        aria-label="Percentage of before photo shown"
      />
      <div className="slider-line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path>
        </svg>
      </div>
      <div className="slider-button" aria-hidden="true"></div>
    </div>
  );
};

export default Slider;

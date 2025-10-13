import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <div className="p-6">
        <h3 className="text-6xl leading-[1.1] mb-5 font-bold">
          Prospective <br /> <span className="text-neutral-600">Customer</span> <br />
          Segmentation
        </h3>
        <p className="text-xl font-medium text-neutral-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur officiis magni magnam labore dicta repellat nesciunt provident quas natus.
        </p>
      </div>
      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;

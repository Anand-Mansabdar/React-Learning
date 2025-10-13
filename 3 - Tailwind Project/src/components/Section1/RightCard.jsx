import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = ({img, tag}) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative rounded-4xl w-72">
      <img
        className="h-full w-full object-cover"
        src={img}
        alt=""
      />
      <RightCardContent tag={tag} />
    </div>
  );
};

export default RightCard;

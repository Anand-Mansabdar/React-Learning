import React from "react";
import RightCard from "./RightCard";
import RightCardContent from "./RightCardContent";

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div className="h-full flex gap-1 overflow-x-auto p-8 w-3/4">
      {props.users.map((user, idx) => {
        return <RightCard key={idx} img={user.img} tag={user.tag}/>
      })}
    </div>
  );
};

export default RightContent;

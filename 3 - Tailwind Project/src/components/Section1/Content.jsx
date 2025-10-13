import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
  return <div className="py-10 flex gap-4 items-center h-[90vh]  px-16">
    <LeftContent />
    <RightContent users={props.users} />
  </div>;
};

export default Content;

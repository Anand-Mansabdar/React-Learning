import React from "react";
import "../index.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="parent">
      <div className="card">
        <img src={props.src} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  );
};

export default Card;

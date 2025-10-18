import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { themeDataContext } from "../context/ThemeContext";

const Navbar = (props) => {
  const data = useContext(themeDataContext);
  console.log(data);
  return (
    <div className="nav">
      <h2>Context API</h2>
      <h2>{data}</h2>
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;

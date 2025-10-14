import React from "react";
import "./index.css";

const App = () => {
  const handleButtonCLick = (e) => {
    console.log(e);
    console.log(`Button Clicked`);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  const handleScroll = (e) => {
    console.log(e)
  }
  return (
    <div>
      <h2>Click the following button</h2>
      <button
        onDoubleClick={() => console.log(`Button clicked 2 times`)}
        onClick={handleButtonCLick}
      >
        Click me
      </button>{" "}
      <br /> <br />
      <input type="text" placeholder="Enter something" onChange={handleInput} />
      <div onWheel={(e) => {
        handleScroll(e.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  // Wrong way of calling a function
  // const randomNumber = () => {
  //   const num = Math.random();
  //   console.log(num);
  // };
  // randomNumber()

  const [num, setNum] = useState(0);
  const [num2, setnum2] = useState(10);

  const numIncrease = () => {
    console.log(`First number increased`);
  };

  const num2Increase = () => {
    console.log(`Second number increased`);
  };

  useEffect(() => {
    num2Increase();
    console.log(`useEffect Running...`);
  }, [num2]);

  return (
    <div>
      <h3>Value of first number is : {num}</h3>
      <h3>Value of second number is : {num2}</h3>
      <button onClick={() => setNum(num + 1)}>Increase num 1</button> <br />
      <br />
      <button onClick={() => setnum2(num2 + 1)}>Increase num 2</button>
    </div>
  );
};

export default App;

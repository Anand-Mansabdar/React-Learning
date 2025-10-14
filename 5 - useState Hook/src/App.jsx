import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(20);
  const [num, setnum] = useState(0);
  const [friends, setfriends] = useState(["Kohli", "Rohit", "Dhoni"]);
  const [obj, setobj] = useState({ user: "Anand", age: 20 });
  const [batch, setbatch] = useState(20);

  const changeNumber = () => {
    setNumber(30);
  };

  const addFriend = () => {
    setfriends([]);
  };

  const handleIncrease = () => {
    setnum(num + 1);
  };

  const handleDecrease = () => {
    setnum(num - 1);
  };

  const handleReset = () => {
    setnum(0);
  };

  const handleClick = () => {
    // setobj({ user: "Virat Kohli", age: 36 });
    // console.log(obj);

    const newObj = { ...obj };
    newObj.user = "Virat Kohli";
    newObj.age = 36;
    setobj(newObj);
    console.log(newObj);
  };

  const handleBatch = () => {
    // setbatch(batch+1)
    // setbatch(batch+1)
    // setbatch(batch+1)

    setbatch((prev) => prev + 1);
    setbatch((prev) => prev + 1);
    setbatch((prev) => prev + 1);
  };

  return (
    <div>
      <h4 onClick={changeNumber}>{number}</h4>
      <h5 onClick={addFriend}>Friends: {friends} </h5>
      <h1>{num}</h1>
      <button onClick={handleIncrease}>Increase</button> <br /> <br />
      <button onClick={handleDecrease}>Decrease</button> <br />
      <br />
      <button onClick={handleReset}>Reset</button> <br />
      <br />
      <h1>
        {obj.user}, {obj.age}
      </h1>
      <button onClick={handleClick}>Click to Change Content</button>
      <h2 onClick={handleBatch}>{batch}</h2>
    </div>
  );
};

export default App;

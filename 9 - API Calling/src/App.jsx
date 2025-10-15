import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([])

  // Using fetch
  // const getData =async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const data = await response.json()
  //   console.log(response)
  //   console.log(data)
  // }

  // Using Axios
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setdata(response.data)
    console.log(response.data);
  };

  const imageData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button> <br /><br />
      <button onClick={imageData}>Image data</button>

      <div>
        {data.map((e, idx) => {
          return <p key={idx}>Hello, {e.name}</p>
        })}
      </div>
    </div>
  );
};

export default App;

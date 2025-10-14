import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    setname("");
    setemail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
        <br />
        <br />
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="text"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

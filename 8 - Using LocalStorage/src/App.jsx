import React from "react";

const App = () => {
  localStorage.setItem("name", "Anand");
  localStorage.setItem("age", 18);
  const item = localStorage.getItem("name");
  const age = localStorage.getItem("age");

  localStorage.removeItem("name");
  console.log(item, age);

  const user = {
    username: "Virat",
    age: 36,
    city: "Hyderabad",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const res = JSON.parse(localStorage.getItem('user'))
  console.log(res)
  return <div>App</div>;
};

export default App;

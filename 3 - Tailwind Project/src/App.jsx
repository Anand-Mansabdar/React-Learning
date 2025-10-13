import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import { use } from "react";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1724627559656-9652a42c7e91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1717068341198-95cce0b54b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1717068342175-c3a303a09f91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div className="">
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;

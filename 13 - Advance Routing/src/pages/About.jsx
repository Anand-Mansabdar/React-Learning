import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => navigate("/")}
        className="bg-amber-200 text-black px-3 py-1.5 rounded-lg mt-5"
      >
        HomePage
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-200 text-black px-3 py-1.5 rounded-lg mt-5"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="bg-amber-200 text-black px-3 py-1.5 rounded-lg mt-5"
      >
        Next
      </button>
    </div>
  );
};

export default About;

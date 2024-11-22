import React from "react";
import Userclass1 from "./Userclass1";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Us</h1>
      <p>
        Welcome to FoodChef, your go-to platform for delicious recipes and restaurant reviews. 
        This web application is built using React to offer a seamless user experience.
      </p>
      <Userclass1 />
    </div>
  );
};

export default About;

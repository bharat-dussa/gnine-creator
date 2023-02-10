import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate();
  const handleClick = () => history("/ramya-gopal-wedding");
  return (
    <div>
      {" "}
      <p>Gnine Creators</p>
      <p onClick={handleClick}>Ramya weds Gopal</p>
    </div>
  );
};

export default HomePage;

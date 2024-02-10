import React, { useState } from "react";
import "./Header.css";
import GymLOGO from "../../assets/GymLOGO.png";




const Header = () => {
  return (
    <div className="header">
      <h1 className="logo"><img src={GymLOGO} height="25px" width="25px" alt="Gym Logo" />  METAL MUSCLE FITNESS</h1>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "../assets/Airbnb-logo.png";
function Navbar() {
  return (
    <div>
      <img className="h-10 w-auto" src={Logo} alt="logo" />
    </div>
  );
}

export default Navbar;

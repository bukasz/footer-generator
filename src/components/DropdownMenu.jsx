import React, { useState } from "react";

export default function DropdownMenu() {

  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const dynamicOpen = isOpen
  ? { visibility: "visible", opacity: '1' }
  : { visibility: "hidden", opacity: '0', };
  

  return (
    <div className="dropDownMenu" onMouseLeave={handleMouseLeave}>
      <button className="button" onClick={toggleDropdown}> 
      <span className="barsContainer">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </span>
        <p className="menuText">MENU</p>
        </button>
      <div className="dropdownContent" style={dynamicOpen}>
        <a href="#">Sign out</a>
        <a href="#">Refresh token</a>
        <a href="#">Revoke Gmail Access</a>
      </div>
    </div>
  );
};
import React, { useState } from "react";

export default function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const dynamicOpen = isOpen
    ? { visibility: "visible", opacity: "1" }
    : { visibility: "hidden", opacity: "0" };

  return (
    <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
      <button className="dropdown-menu__button" onClick={toggleDropdown}>
        <span className="dropdown-menu__bars-container">
          <span className="dropdown-menu__bars-container--bar1"></span>
          <span className="dropdown-menu__bars-container--bar2"></span>
          <span className="dropdown-menu__bars-container--bar3"></span>
        </span>
        <p className="dropdown-menu__menu-text">MENU</p>
      </button>
      <div className="dropdown-menu__content" style={dynamicOpen}>
        <a href="#">Sign out</a>
        <a href="#">Refresh token</a>
        <a href="#">Revoke Gmail Access</a>
      </div>
    </div>
  );
}

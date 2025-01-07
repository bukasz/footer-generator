import React, { useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dynamicOpen = isOpen
    ? { visibility: "visible", opacity: "1" }
    : { visibility: "hidden", opacity: "0" };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleDropdown}>
        <span className="dropdown-menu__bars-container">
          <span className="dropdown-menu__bars-container--bar1"></span>
          <span className="dropdown-menu__bars-container--bar2"></span>
          <span className="dropdown-menu__bars-container--bar3"></span>
        </span>
        <p className="dropdown-menu__menu-text">MENU</p>
      </button>
      <div className="dropdown-menu__content" style={dynamicOpen}>
        <button className="dropdown-menu__link">Sign out</button>
        <button className="dropdown-menu__link">Refresh token</button>
        <button className="dropdown-menu__link">Revoke Gmail Access</button>
      </div>
    </div>
  );
}

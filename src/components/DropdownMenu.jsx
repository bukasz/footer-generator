import { useState, useRef, useEffect } from "react";

export default function DropdownMenu({ handleAuth, revokeAccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dynamicOpen = isOpen
    ? { visibility: "visible", opacity: "1" }
    : { visibility: "hidden", opacity: "0" };

  const closeMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (isOpen && !closeMenu.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Only add the listener when the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", closeOpenMenu);

      // Clean up when component unmounts or when menu closes
      return () => {
        document.removeEventListener("mousedown", closeOpenMenu);
      };
    }
  }, [isOpen]);

  return (
    <div className="dropdown-menu" ref={closeMenu}>
      <button className="dropdown-menu__button" onClick={toggleDropdown}>
        <span className="dropdown-menu__bars-container">
          <span className="dropdown-menu__bars-container--bar1"></span>
          <span className="dropdown-menu__bars-container--bar2"></span>
          <span className="dropdown-menu__bars-container--bar3"></span>
        </span>
        <p className="dropdown-menu__menu-text">MENU</p>
      </button>
      <div className="dropdown-menu__content" style={dynamicOpen}>
        <button
          className="dropdown-menu__link"
          onClick={() => {
            handleAuth();
            setIsOpen(false);
          }}
        >
          Refresh token
        </button>
        <button
          className="dropdown-menu__link"
          onClick={() => {
            revokeAccess();
            setIsOpen(false);
          }}
        >
          Revoke Gmail Access
        </button>
      </div>
    </div>
  );
}

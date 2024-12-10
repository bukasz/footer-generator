import React, { useState } from "react";
import styles from './../styles/components/_dropdownMenu.module.scss';


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
    <div className={styles.dropDownMenu} onMouseLeave={handleMouseLeave}>
      <button className={styles.button} onClick={toggleDropdown}> 
      <span className={styles.barsContainer}>
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
                <span className={styles.bar3}></span>
            </span>
        <p className={styles.menuText}>MENU</p>
        </button>
      <div className={styles.dropdownContent} style={dynamicOpen}>
        <a href="#">Sign out</a>
        <a href="#">Refresh token</a>
        <a href="#">Revoke Gmail Access</a>
      </div>
    </div>
  );
};
import React, { useState } from "react";


export default function DropdownMenu() {

  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const dropdownContent = {

  };

  const dynamicOpen = isOpen
  ? { display: "block" }
  : { display: "none" };

  return (
    <div style={dropDownMenu}>
      <button style={button} onClick={toggleDropdown}> 
      <span style={barsContainer}>
                <span style={{...bar, ...bar1}}></span>
                <span style={{...bar, ...bar2}}></span>
                <span style={{...bar, ...bar3}}></span>
            </span>
        <p style={menuText}>MENU</p>
        </button>
      <div style={{...dropdownContent, ...dynamicOpen }}>
        <a href="#">Sign out</a>
        <a href="#">Refresh token</a>
        <a href="#">Revoke GMail Access</a>
      </div>
    </div>
  );
};

const dropDownMenu ={
position: "relative",
top: "-1rem",
right: "-1rem",
}

const button = {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
  outline: "none",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
};

const bar = {
position: "absolute",
height: "0.2rem",
left: 0,
right: 0,
background: "#fff",
transition: "top 0.2s",
};

const bar1 = {
top: "0.9rem",
};

const bar2 = {
top: "1.3rem",
};

const bar3 = {
top: "1.7rem",
};

const barsContainer = {
position: "relative",
height: "1.5rem",
width: "2.5rem",
};


const menuText = {
fontFamily: "Roboto Condensed",
fontSize: '1rem',
opacity: 1,
color: '#fff',
};







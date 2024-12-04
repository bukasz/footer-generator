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
  padding: "0.5rem",
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
height: "0.15rem",
left: 0,
right: 0,
background: "#fff",
transition: "top 0.2s",
};

const bar1 = {
top: "0.3125rem",
};

const bar2 = {
top: "0.5625rem",
};

const bar3 = {
top: "0.8125rem",
};

const barsContainer = {
position: "relative",
height: "1.25rem",
width: "1.25rem",
};


const menuText = {
fontFamily: "Roboto Condensed",
fontWeight: "bold",
letterSpacing: "0.175rem",
fontSize: '0.9375rem',
opacity: "1",
color: '#fff',
margin: '0',
};







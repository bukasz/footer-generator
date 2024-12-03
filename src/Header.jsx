import React from "react";
import Title from "./Title";
import DropdownMenu from './DropdownMenu';


export default function Header() {
  return (
    <header style={header}>
      <Title />
      <DropdownMenu />
    </header>
  )
}

const header = {
position: "relative",
display: "flex",
width: "100% + 2rem",
flexDirection: "row",
justifyContent: "space-between",
}


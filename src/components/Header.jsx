import React from "react";
import Title from "./Title";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <header className="header">
      <Title />
      <DropdownMenu />
    </header>
  )
}


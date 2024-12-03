import React, { useState } from "react";

export default function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div class="nav">
      <a href="#home" class="active">Logo</a>

      <div id="navButtons">
        <a href="">Refresh token</a>
        <a href="">Sign out</a>
        <a href="">Revoke Gmail Access</a>
      </div>
    </div>
  );
};





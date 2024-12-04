import React from "react";

export default function Title() {
    return (
      <div>
        <h2 style={title}>Hello, CyberSailor!</h2>
        <h4 style={subtitle}>Generate your footer:</h4>
      </div>
    )
  }

  const title = {
    fontWeight: '700',
    color: '#fff',
    background: 'red',
    margin: '0',
    position: 'relative',
    top: '-1.5rem',
    left: '-1.5rem',
    // backgroundImage: "url('/svgs/brush.png')",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
  }

  const subtitle = {
    fontWeight: '400',
    color: '#8c8c8c',
    margin: '0',
  }
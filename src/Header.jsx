import React from "react";


export default function Header() {
  return (
    <div>
      <h2 style={title}>Hello, CyberSailor!</h2>
      <h4>Generate your footer:</h4>
    </div>
  )
}


const title = {
  fontFamily: 'Roboto Condensed',
  fontWeight: 'bold',
  color: 'red',
  backgroundImage: `(url'/svgs/brush.svg')`,
}

import React from "react";

export default function FooterPreview({name, surname, position, telephone}) {
    return (
      <div>
       <p>Name: {name}</p>
       <p>Surname: {surname}</p>
       <p>Position: {position}</p>
       <p>Telephone: {telephone}</p>
      </div>
    )
  }
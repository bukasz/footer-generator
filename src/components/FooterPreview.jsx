import React from "react";

export default function FooterPreview({name, surname, position, telephone, more}) {
    return (
      <div>
       <p>Name: {name}</p>
       <p>Surname: {surname}</p>
       <p>Position: {position}</p>
       <p>Telephone: {telephone}</p>
       <p>More: {more}</p>
      </div>
    )
  }
  
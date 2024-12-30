import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import FooterPreview from "./FooterPreview";

const FooterGenerator = () => {
  const initialFormData = {
    name: "",
    surname: "",
    position: "",
    position_alt: "",
    telephone: "",
    more: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [position_chosen, setChosenPosition] = useState("");

  return (
    <>
      <div className="footer-generator">
        <Header />
        <Form
          initialFormData={initialFormData}
          formData={formData}
          setFormData={setFormData}
          setChosenPosition={setChosenPosition}
        />
      </div>
      <FooterPreview
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={position_chosen}
        more={formData.more}
      />
    </>
  );
};

export default FooterGenerator;

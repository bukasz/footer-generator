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

  const [useSelect, setFromSelect] = useState(true);

  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <div className="footer-generator">
        <Header />
        <Form
          initialFormData={initialFormData}
          formData={formData}
          setFormData={setFormData}
          setFromSelect={setFromSelect}
        />
      </div>
      <FooterPreview
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={useSelect ? formData.position : formData.position_alt}
        more={formData.more}
      />
    </>
  );
};

export default FooterGenerator;

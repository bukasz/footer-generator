import { useState } from "react";
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

  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userEmail: "",
    loading: false,
    error: null,
  });

  const handleAuthChange = (authData) => {
    setAuth((prevAuth) => ({
      ...prevAuth,
      ...authData,
    }));
  };

  const [isFromSelect, setIsFromSelect] = useState(true);

  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <div className="footer-generator">
        <Header />
        <Form
          initialFormData={initialFormData}
          formData={formData}
          setFormData={setFormData}
          setIsFromSelect={setIsFromSelect}
        />
      </div>
      <FooterPreview
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={isFromSelect ? formData.position : formData.position_alt}
        more={formData.more}
      />
    </>
  );
};

export default FooterGenerator;

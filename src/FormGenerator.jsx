import React, { useState, useRef, useForm } from 'react';
import FooterPreview from './FooterPreview';


const FormGenerator = () => {

  const initialFormData = {
    name: "",
    surname: "",
    position: "",
    telephone: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  //Select position from two sources
  const [useSelect, setFromSelect] = useState(true);
  const firstChangeHandled = useRef(false);

  const toggleSource = () => {
    if (!firstChangeHandled.current) {
      firstChangeHandled.current = true;
      setFromSelect(!useSelect);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {

  };

  return (
    <div>
      <form onChange={handleChange}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Name"
        />
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          placeholder="Surname"
        />
        <input
          type="number"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          placeholder="Telephone"
        />

        <select
          id="position"
          name="position"
          value={formData.position}
        >
          <option value="">Position</option>
          <option value="Software Quality Assurance Engineer">Software Quality Assurance Engineer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Senior Web Developer">Senior Web Developer</option>
          <option value="Leading Web Developer">Leading Web Developer</option>
        </select>

        <span>or</span>

        <textarea
          id="position_alt"
          name="position_alt"
          value={formData.position_alt}
          onChange={toggleSource}
        > </textarea>
      </form>

      <FooterPreview
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={useSelect ? formData.position : formData.position_alt} />

      <button type="reset" value="Reset" onclick={clearForm}>
        Clear
      </button>
      <button type="submit" value="Submit">
        Submit
      </button>
    </div>
  );
};

export default FormGenerator;


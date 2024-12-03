import React, { useState, useRef, useForm } from 'react';
import Header from './Header';
import FooterPreview from './FooterPreview';


const FooterGenerator = () => {

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
      <div style={generator}>

      <Header />

        <form onChange={handleChange} style={form}>
          <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            style={input}
          />
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            placeholder="Surname"
            style={input}
          />
          </div>
          <div>
          <input
            type="number"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            placeholder="Telephone"
            style={input}
          />
          </div>
          <div>
          <select
            id="position"
            name="position"
            value={formData.position}
            style={input}
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
            style={textarea}
          > </textarea>
          </div>
        </form>

        <button type="reset" value="Reset" onclick={clearForm}>
          Clear
        </button>
        <button type="submit" value="Submit">
          Submit
        </button>
      </div>

      <FooterPreview
        name={formData.name}
        surname={formData.surname}
        telephone={formData.telephone}
        position={useSelect ? formData.position : formData.position_alt} />
    </div>
  );
};

export default FooterGenerator;

const generator = {
  padding: "1rem",
  margin: "2rem",
  backgroundColor: "#f3f3f3",
  width: "50%"
}

const form = {
  
}

const textarea = {
  
}

const input = {
width: "15rem",
height: "1.5rem",
background: "transparent",
border: "none",
borderBottom: "1px solid #d5d5d5",
margin: "0.5rem 1rem 0 0",
}
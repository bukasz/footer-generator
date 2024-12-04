import React, { useState, useRef, useForm } from 'react';
import styled from 'styled-components';
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

  //Default text in text area
  const [text, setText] = useState("Something more about you?");

  const clearForm = () => {

  };

  return (
    <div>
      <div style={generator}>

        <Header />

        <form onChange={handleChange}>
          <div style={formRow}>
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
          <div style={formRow}>
            <input
              type="number"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              placeholder="Telephone"
              style={input}
            />
          </div>
          <div style={formRow}>
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

            <div style={inputWithLabel}>
              <label for="position_alt">or</label>
              <input
                type="text"
                id="position_alt"
                name="position_alt"
                value={formData.position_alt}
                onChange={toggleSource}
                style={input}
              />
            </div>
          </div>
        </form>

        <div style={formRow}>
          <textarea
            id="position_alt"
            name="position_alt"
            defaultValue={"Something more about you?"}
            style={textarea}
          ></textarea>
        </div>
        <div style={buttonsRow}>
          <button type="reset" value="Reset" onclick={clearForm} style={{ ...button, ...buttonClear }}>
            <span style={buttonText}>Clear</span>
          </button>
          <button type="submit" value="Submit" style={{ ...button, ...buttonSubmit }}>
            <span style={buttonText}>Submit</span>
          </button>
        </div>
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

const button = {
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "middle",
  padding: "0px",
  border: "none",
  textDecoration: "none",
  userSelect: "none",
  fontSize: "0px",
  outline: "none",
  transition: "background-color 200ms ease-in-out, border-color 200ms ease-in-out",
  borderRadius: "0.25rem",
  margin: "0.25rem",
}

const buttonSubmit = {
  background: "rgb(216, 19, 35)",
}

const buttonClear = {
  background: "#999",
}

const buttonText = {
  fontFamily: "Roboto Condensed",
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "0.9375rem",
  letterSpacing: "0.1em",
  whiteSpace: "nowrap",
  color: "rgb(255, 255, 255)",
  padding: "0.875rem 0.9375rem 0.875rem 1.25rem",
}

const generator = {
  padding: "1rem",
  margin: "2rem",
  backgroundColor: "#f3f3f3",
  width: "50%"
}

const formRow = {
  maxWidth: "34rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  padding: '0.25rem 0',
  flexWrap: 'wrap',
}

const buttonsRow = {
  maxWidth: "34rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  padding: '0.25rem 0',
  flexWrap: 'wrap',
}

const input = {
  width: "15rem",
  height: "1.5rem",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #d5d5d5",
  margin: "0.5rem 0.5rem 0 0.5rem",
  fontFamily: "Roboto Condensed",
  letterSpacing: "0",
  color: '#d5d5d5',
}

const inputWithLabel = {
  display: 'flex',
  marginLeft: '0.5rem',
  maxWidth: '15rem',
  alignItems: 'flex-end',
  color: '#d5d5d5',
}

const textarea = {
  width: "100%",
  maxWidth: "34rem",
  rows: "3",
  background: "transparent",
  border: "1px solid #d5d5d5",
  fontFamily: "Roboto Condensed",
  letterSpacing: "0",
  color: '#d5d5d5',
  margin: '1rem 0.5rem 0 0.5rem',
}
import React, { useState, useRef, useForm } from 'react';
import Header from './Header';
import FooterPreview from './FooterPreview';

const FooterGenerator = () => {

  const initialFormData = {
    name: "",
    surname: "",
    position: "",
    telephone: "",
    more: "",
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

  const clearForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <div className="footergenerator">

        <Header />

        <form className="form" onChange={handleChange}>
          <div className="form__row">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              className="form__element"
            />
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              placeholder="Surname"
              className="form__element"
            />
          </div>
          <div className="form__row" >
            <input
              type="number"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              placeholder="Telephone"
              className="form__element"
            />
          </div>
          <div className="form__row">
            <select
              id="position"
              name="position"
              value={formData.position}
              className="form__element"
            >
              <option value="Position">Position</option>
              <option value="Software Quality Assurance Engineer">Software Quality Assurance Engineer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Senior Web Developer">Senior Web Developer</option>
              <option value="Leading Web Developer">Leading Web Developer</option>
            </select>

            <div className="form__element--withlabel">
              <label for="position_alt">or</label>
              <input
                type="text"
                id="position_alt"
                name="position_alt"
                value={formData.position_alt}
                onChange={toggleSource}
                className="form__element"
              />
            </div>
          </div>

        <div className="form__row">
          <textarea
            id="more"
            name="more"
            placeholder={"Something more about you?"}
            className="textarea"
          ></textarea>
        </div>
        <div className="form__row form__row--withbuttons">
          <button type="reset" value="Reset" onclick={clearForm} className="button_clear">
            <span className="button__text">Clear</span>
          </button>
          <button type="submit" value="Submit" className="button_submit" >
            <span className="button__text">Submit</span>
          </button>
        </div>
        </form>
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
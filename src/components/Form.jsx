import React, { useState } from "react";

const Form = ({ initialFormData, formData, setFormData, setFromSelect }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    setIsDisabled(false);
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleCustomPosition = (e) => {
    setFormData({ ...formData, position: "", position_alt: e.target.value });
    setFromSelect(false);
    setIsDisabled(true);
  };

  return (
    <form className="form">
      <div className="form__row">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="form__element"
          required
        />
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          className="form__element"
          required
        />
      </div>
      <div className="form__row">
        <input
          type="number"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone"
          className="form__element"
        />
      </div>
      <div className="form__row">
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="form__element"
          disabled={isDisabled}
        >
          <option value="Position">Position</option>
          <option value="Software Quality Assurance Engineer">
            Software Quality Assurance Engineer
          </option>
          <option value="Web Developer">Web Developer</option>
          <option value="Senior Web Developer">Senior Web Developer</option>
          <option value="Leading Web Developer">Leading Web Developer</option>
        </select>

        <div className="form__element--with-label">
          <label htmlFor="position_alt">or</label>
          <input
            type="text"
            id="position_alt"
            name="position_alt"
            value={formData.position_alt}
            onChange={handleCustomPosition}
            className="input--with-label"
          />
        </div>
      </div>

      <div className="form__row">
        <textarea
          id="more"
          name="more"
          value={formData.more}
          onChange={handleChange}
          rows="5"
          placeholder={"Something more about you?"}
          className="form__textarea"
        ></textarea>
      </div>
      <div className="form__row form__row--withbuttons">
        <button
          type="reset"
          value="Reset"
          onClick={clearForm}
          className="form__button--clear"
        >
          <span className="form__button--text">Clear</span>
        </button>
        <button type="submit" value="Submit" className="form__button--submit">
          <span className="form__button--text">Save</span>
        </button>
      </div>
    </form>
  );
};

export default Form;

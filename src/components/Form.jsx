import { useState } from "react";

const Form = ({ initialFormData, formData, setFormData, setIsFromSelect }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    setIsPositionSelectDisabled(false);
  };

  const [isPositionSelectDisabled, setIsPositionSelectDisabled] =
    useState(false);

  const handleCustomPosition = (e) => {
    if (e.target.value === "") {
      setFormData({ ...formData, position_alt: "" });
      setIsFromSelect(true);
      setIsPositionSelectDisabled(false);
    } else {
      setFormData({
        ...formData,
        position: "",
        position_alt: e.target.value,
      });
      setIsFromSelect(false);
      setIsPositionSelectDisabled(true);
    }
  };

  return (
    <form className="form">
      <div className="form__row">
        <input
          className="form__element"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
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
          className="form__element"
          type="number"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone"
        />
      </div>
      <div className="form__row">
        <select
          className="form__element"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          disabled={isPositionSelectDisabled}
        >
          <option value="Position">Position</option>
          <option value="Software Quality Assurance Engineer">
            Software Quality Assurance Engineer
          </option>
          <option value="Web Developer">Web Developer</option>
          <option value="Senior Web Developer">Senior Web Developer</option>
          <option value="Leading Web Developer">Leading Web Developer</option>
        </select>

        <div className="form__element-with-label">
          <label htmlFor="position_alt">or</label>
          <input
            className="form__input-in-element"
            type="text"
            id="position_alt"
            name="position_alt"
            value={formData.position_alt}
            onChange={handleCustomPosition}
          />
        </div>
      </div>

      <div className="form__row">
        <textarea
          className="form__textarea"
          id="more"
          name="more"
          value={formData.more}
          onChange={handleChange}
          rows="5"
          placeholder={"Something more about you?"}
        ></textarea>
      </div>
      <div className="form__row form__row--withbuttons">
        <button
          className="form__button form__button--clear"
          type="reset"
          onClick={clearForm}
        >
          <span className="form__button-text">Clear</span>
        </button>
        <button type="submit" className="form__button form__button--submit">
          <span className="form__button-text">Save</span>
        </button>
      </div>
    </form>
  );
};

export default Form;

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Form = ({ inputValue, handleSubmit, handleChange }) => (
  <form
    onSubmit={handleSubmit}
    className="form"
  >
    <input
      className="form-input"
      type="text"
      placeholder="Saisissez votre message..."
      onChange={handleChange}
      value={inputValue}
    />
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// == Export
export default Form;

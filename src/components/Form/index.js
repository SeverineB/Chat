// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import './style.scss';

// == Composant
const Form = ({ inputValue, send, changeText }) => {
  const handleSubmit = (evt) => {
    console.log('au submit je réagis en executant send');
    evt.preventDefault();
    send();
  };
  const handleChange = (evt) => {
    console.log(evt.target.value);
    changeText(evt.target.value);
  };

  return (
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
      <button className="form-button" type="submit">
        <Send />
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  send: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

// == Export
export default Form;

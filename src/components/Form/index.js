// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';



// == Composant
const Form = ({ inputValue, addMessage }) => {
  const handleChange = (evt) => {
    const newText = evt.target.value;
    console.log(newText);
    return newText;
  };

  return (
    <form
      onSubmit={() => {
        console.log('je veux insérer un message dans la liste');
        addMessage();
      }}
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
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
};

// == Export
export default Form;

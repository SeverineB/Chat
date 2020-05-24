// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Form = () => (
  <form className="form">
    <input
      className="form-input"
      type="text"
      placeholder="Saisissez votre message..."
    />
  </form>
);

// == Export
export default Form;

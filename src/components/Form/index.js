// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import './style.scss';

// == Composant
const Form = ({ inputValue, addMessage, changeText }) => {
  const handleSubmit = (evt) => {
    console.log('au submit je réagis en executant send');
    evt.preventDefault();
    addMessage();
  };
  const handleChange = (evt) => {
    // je veux intéragir pour modifier la valeur du champ quand j'écris dans le champ
    // dans le composant on réagit à un évenemtn
    // on execute une fonction passée depuis le container
    // on dispatch une action
    // elle arrive dans le reducer
    // on la traduit vers une modification du state
    // modifier le state déclenche tous les subscribes mis en place par react redux dans mes container
    // le state est à nouveau lu et les props rediffusée
    // l'inputValue qui arrive dans ce composant a changé
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
      <button className="form-button" type="submit"><Send /></button>
    </form>
);
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

// == Export
export default Form;

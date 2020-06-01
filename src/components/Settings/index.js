import React from 'react';
import { Plus } from 'react-feather';
import PropTypes from 'prop-types';

import Field from 'src/containers/Field';
import './style.scss';

const Settings = ({ open, toggleOpen, login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('je veux me connecter');
    login();
  };
  return (
    <div className={open ? 'settings settings--open' : 'settings'}>
      <button onClick={toggleOpen} className="settings-toggler" type="button">
        <Plus color="#ffffff" size="100%" />
      </button>
      {open && (
        <form onSubmit={handleSubmit} className="settings-form">
          <Field type="email" placeholder="Email" name="email" />
          <Field type="password" placeholder="Mot de passe" name="password" />
          <button className="settings-submit" type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Settings;

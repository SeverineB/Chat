// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Message = ({ username, message }) => (
  <li className="list-item">
    <p className="list-item-name">{username}</p>
    <p className="list-item-text">{message}</p>
  </li>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

// == Export
export default Message;

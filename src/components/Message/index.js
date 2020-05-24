// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Message = ({ username, text }) => (
  <li className="list-item">
    <p className="list-item-name">{username}</p>
    <p className="list-item-text">{text}</p>
  </li>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// == Export
export default Message;

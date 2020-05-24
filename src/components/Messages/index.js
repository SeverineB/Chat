// == Import npm
import React from 'react';

// == Import
import './style.scss';

import Message from 'src/containers/Message';

// == Composant
const Messages = () => (
  <ul className="messages">
    <Message />
  </ul>
);

// == Export
export default Messages;

// == Import npm
import React from 'react';

// == Import
import './style.scss';

import Message from 'src/components/Message';

// == Composant
const Messages = () => (
  <ul className="messages">
    <Message />
    <Message />
    <Message />
  </ul>
);

// == Export
export default Messages;

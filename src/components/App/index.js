// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Messages />
      <Form />
      <Settings />
    </div>
);
};

// == Export
export default App;

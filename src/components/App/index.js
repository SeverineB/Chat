// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/components/Messages';
import Form from 'src/containers/Form';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Messages />
      <Form />
    </div>
);
};

// == Export
export default App;

// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;

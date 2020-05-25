// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import PseudoForm from 'src/components/PseudoForm';

// == Composant
const App = () => {
  return (
    <div className="app">
      <PseudoForm />
      <Messages />
      <Form />
    </div>
);
};

// == Export
export default App;

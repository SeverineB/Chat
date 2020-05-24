// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Messages from 'src/components/Messages';
import Input from 'src/components/Input';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Input />
  </div>
);

// == Export
export default App;

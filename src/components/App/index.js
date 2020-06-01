// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';

import './styles.scss';

// == Composant
const App = ({ webSocketConnect }) => {
  // après le rendu initial de l'application, cad dès que l'appli est prête je veux ouvrir le canal de discussion avec le serveur
  useEffect(webSocketConnect, []);
  return (
    <div className="app">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

App.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
};

// == Export
export default App;

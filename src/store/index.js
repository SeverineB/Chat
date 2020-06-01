/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducer';
import debug from 'src/middleware/debug';
import auth from 'src/middleware/auth';
import socket from 'src/middleware/socket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// on crée un store
// à la création, non seulement on lui donne le reducer mais aussi les middlewares
const store = createStore(
  // qui s'appuie sur un reducer pour faire évoluer le state
  reducer,
  /* initialState, */
  // on met bout à bout tout nos middlewares et le redux devtools
  composeEnhancers(
    applyMiddleware(
      debug,
      auth,
      socket,
    ),
  ),
);

export default store;

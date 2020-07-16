/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducer';
import debug from 'src/middleware/debug';
import auth from 'src/middleware/auth';
import socket from 'src/middleware/socket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      debug,
      auth,
      socket,
    ),
  ),
);

export default store;

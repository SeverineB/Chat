import axios from 'axios';

import { LOGIN, change } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('http://chatroom-server.severinebianchi.com/login', {
        email: state.email,
        password: state.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response', response.data);
          const actionToSavePseudo = change('pseudo', response.data);
          store.dispatch(actionToSavePseudo);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;

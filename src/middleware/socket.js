import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware', action);
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://chatroom-server.severinebianchi.com');
      socketCanal.on('send_message', (message) => {
        console.log('un message a été envoyé', message);
        store.dispatch(receiveMessage(message));
      }, {
        withCredentials: true,
      });
      break;
    case SEND_MESSAGE: {
      const state = store.getState();
      socketCanal.emit('send_message', { content: state.text, author: state.pseudo });
      break;
    }
    default:
      next(action);
  }
};

export default socket;

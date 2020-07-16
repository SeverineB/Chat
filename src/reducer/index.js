import {
  RECEIVE_MESSAGE,
  CHANGE_TEXT,
  TOGGLE_OPEN,
  CHANGE,
} from 'src/actions';
import { getNextId } from 'src/selectors';

const initialState = {
  open: true,
  text: '',
  pseudo: 'Anonyme',
  messages: [
    {
      author: 'Super Chat',
      content: 'Hello',
      id: 55,
    },
    {
      author: 'Super Chat',
      content: 'Coucou',
      id: 3,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      console.log('reducer RECEIVE_MESSAGE', action.message);
      const newMessages = [
        ...state.messages,
      ];
      const newMessage = {
        ...action.message,
      };
      newMessages.push(newMessage);
      return {
        ...state,
        messages: newMessages,
        text: '',
      };
    }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;

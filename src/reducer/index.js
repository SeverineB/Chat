import {
  ADD_MESSAGE,
} from 'src/actions';

const initialState = {
  username: 'Super Chat',
  text: 'Gné?',
  /* inputValue: '', */
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        text: action.text,
        username: action.username,
      };
    default:
      return state;
  }
};

export default reducer;

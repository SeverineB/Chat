import {
  CHANGE_TEXT_VALUE,
  /* CHANGE_USERNAME_VALUE, */
} from 'src/actions';

const initialState = {
  username: 'Super Chat',
  text: 'Gné?',
  inputValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TEXT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    /* case CHANGE_USERNAME_VALUE:
      return {
        ...state,
        username: action.username,
      }; */
    default:
      return state;
  }
};

export default reducer;

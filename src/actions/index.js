// ACTION TYPES
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE = 'CHANGE';
export const LOGIN = 'LOGIN';
export const WS_CONNECT = 'WS_CONNECT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// ACTION CREATORS
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeText = (value) => ({
  type: CHANGE_TEXT,
  payload: value,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

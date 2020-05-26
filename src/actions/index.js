// ACTION TYPES
// Pour éviter les erreurs sur le nommage des types d'action
// on passe ces types dans des variables
// par convention on va écrire le nom de la variable commme l'action
/* export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';
export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE'; */
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE = 'CHANGE';
export const LOGIN = 'LOGIN';

// ACTION CREATORS
// fonction qui retourne un object avec le type d'action et les
// éventuelles propriétés du state à changer
// par convention on nomme ces fonctions comme le type d'action (action type)
// mais en camelCase
// fonction car configurable et paramétrable
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeText = (value) => ({
  type: CHANGE_TEXT,
  // information véhiculée à l'action
  payload: value,
  // ou value: value, => value
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
  // information véhiculée à l'action
});

export const change = (key, value) => ({
  type: CHANGE,
  // informations véhiculées à l'action
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
  // informations véhiculées à l'action
});

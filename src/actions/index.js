// ACTION TYPES
// Pour éviter les erreurs sur le nommage des types d'action
// on passe ces types dans des variables
// par convention on va écrire le nom de la variable commme l'action
/* export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';
export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE'; */
export const ADD_MESSAGE = 'ADD_MESSAGE';

// ACTION CREATORS
// fonction qui retourne un object avec le type d'action et les
// éventuelles propriétés du state à changer
// par convention on nomme ces fonctions comme le type d'action (action type)
// mais en camelCase

export const addMessage = (text, username) => ({
  type: ADD_MESSAGE,
  text,
  username,
});

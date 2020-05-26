import {
  ADD_MESSAGE,
  CHANGE_TEXT,
  TOGGLE_OPEN,
} from 'src/actions';

import { getNextId } from 'src/selectors';

const initialState = {
  // 1. on pose la forme initiale du state
  open: true,
  text: '',
  email: 'toto@tata.com',
  password: '123',
  messages: [
    {
      author: 'Super Chat',
      content: 'Coucou',
      id: 1,
    },
    {
      author: 'Super Chat',
      content: 'Salut toi, ça va ?',
      id: 2,
    },
  ],
  /* inputValue: '', */
};

// en entrée le state actuel (valeur par défaut initialState, au début de l'appli) et l'action avec valeur
// par défaut au cas où on appelle le reduce sans action
// le swicth est pour réagir au cas par cas selon le type d'actions
// et on retournera le state actuel ...state
const reducer = (state = initialState, action = {}) => {
  /* console.log('une action a été dispatchée, je vais la traduire vers une évolution du state', action); */
  switch (action.type) {
    // on met des {} autour du case pour que const et let déclarées à l'intérieur soient
    // limitées à portée de ce case
    case ADD_MESSAGE: {
      // je retourne nouveau state avec ts les messages actuels + un nouveau
      // je construis une nouvelle liste de messages avec ts les messages actuels
      const newMessages = [
        ...state.messages,
      ];

      const id = getNextId(state.messages);

      // je dois décrire le nouveau message, je fais un objet
      const newMessage = {
        author: 'Super Chat',
        content: state.text,
        id,
      };
      // j'ajoute l'objet au tableau
      newMessages.push(newMessage);
      return {
        ...state,
        // je dois dire que messages c'est un tableau avec tous les messages actuels + 1 nouveau (mon nouveau tableau)
        messages: newMessages,
        text: '',
      };
      // en 1 fois :
      // return {
      //   ...state,
      //   messages: [
      //     ...state.messages,
      //     {
      //       author: 'Super Chat',
      //       content: 'Test',
      //       id: 999,
      //     },
      //   ],
      // },
    }
    case CHANGE_TEXT:
    //console.log('je reçois CHANGE_TEXT, je réagis');
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;

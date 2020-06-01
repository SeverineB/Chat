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


// je définis une fonction reducer, un traducteur d'intention vers une modification du state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je traduis mon intension de recevoir un message
    // on peut mettre une paire d'accolade dans un case pour que les const et les let déclarées à l'intérieur soient limitées à la portée de ce case
    case RECEIVE_MESSAGE: {
      console.log('reducer RECEIVE_MESSAGE', action.message);
      
      // je retourne un nouveau state avec tous les messages actuels + un nouveau
      // je dois construire une nouvelle liste de messages avec tous les messages actuels
      const newMessages = [
        ...state.messages,
      ];

      // // /!\ toujours interdit : state.messages.push();
      // // on ne modifie pas le state directement

      // // je dois décrire un le nouveau message, je vais faire un objet

      // version longue
      // const newMessage = {
      //   author: action.message.author,
      //   content: action.message.content,
      //   id: action.message.id,
      // };
      // version propriétés raccourcies
      const newMessage = {
        ...action.message,
      };

      // // je dois ajouter cet objet au tableau
      newMessages.push(newMessage);

      // je dois retourner le state avec ce nouveau tableau
      return {
        ...state,
        // je dois dire que messages c'est un tableau avec tous les messages actuels + 1 nouveau
        messages: newMessages,
        text: '',
      };

      // en 1 fois :
      // return {
      //   ...state,
      //   messages: [
      //     ...state.messages,
      //     {
      //       ...action.message,
      //     },
      //   ],
      // },
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
        // ['email'] : action.value,
        [action.key]: action.value, // action.key contient une chaîne de caractère représentant le nom de la propriété à modifier
      };
    default:
      return state;
  }
};

// on l'exporte pour s'en servir ailleurs
export default reducer;

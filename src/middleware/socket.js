import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/actions';

// je prépare une let qui sera accessible dans tout se fichier qui contiendra mon canal
let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('dans socket middleware', action);
  switch (action.type) {
    case WS_CONNECT:
      // console.log('c\'est l\'action qui m\'intéresse, je réagis');
      // ouverture du canal, on execute la méthode io sur window mise à disposition par la librairie socket.io (ajoutée dans index.htm)
      socketCanal = window.io('http://localhost:3001');

      // on se met en mode écoute, dès que l'événement 'send_message' a lieu/est emis par le serveur je réagis
      // dès que quelqu'un envoie l'événement 'send_message' dans mon canal de discussion je réagis
      socketCanal.on('send_message', (message) => {
        console.log('un message a été envoyé', message);
        // je peux réagir, en modifiant mon state puisque je veux l\'afficher dans mon application');
        // je veux stocker le nouveau message reçu dans mon state
        store.dispatch(receiveMessage(message));
      });
      // on écoute un événement, ça fonctionne comme les écouteurs d'événements qu'on connait bien
      // document.addEventListener('click', () => { })
      break;
    // chaque fois que l'intension d'envoeyr un message passe
    // je réagis avec un effet annexe
    case SEND_MESSAGE: {
      console.log('on demande d\'envoyer un message, je traduis comment ça doit se faire dans le middleware');
      // ici j'envoie un message
      // sur le canal d'échange socket j'ai accès à une méthode emit pour émettre un événement
      // En premier argument on a le type d'événement, en 2ème des infos véhiculées avec l'évenement

      // on récupère les infos qui nous intéressent du state,
      // avec la fonction getState que nous donne le paramètre store
      const state = store.getState();
      // console.log(state);
      // on envoie l'événement avec les bonnes infos
      socketCanal.emit('send_message', { content: state.text, author: state.pseudo });
      break;
    }
    default:
      // console.log('ça m\'intéresse pas je laisse passer');
      next(action);
  }
};

export default socket;

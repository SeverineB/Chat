// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// == Import : local
// Composants
import App from 'src/containers/App';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
// on apprivisonne l'appli avec notre objet store
  <Provider store={store}>
    <App />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

render(rootReactElement, target);

/**
 * Objectif : construire la ChatRoom
 * Etapes d'un projet React / Redux :
 * 1. Config: Récupération du package.json et yarn pour récupérer les node_modules
 *    + fichiers de config webpack/babel
 * 2. Render: Instanciation du composant racine et rendu dans le DOM réel
 * 3. Découpage: dans le composants racine on identifie les zones principales de l'appli
 * 4. Composants: morceaux d'ui, chacun leur réponsabilité, chacun est reponsable 
 * de la représentation d'un fragment d'appli - on pose aussi les styles
 * 5. Props: configuration des composants via les props
 * 6. Store : détenteur de la vérité : le state (install de redux)
 * 7. InitialState et reducer(vide) : forme initial du state et fonction pour le faire évoluer
 * 8. Provider: diffuseur de store, prérecquis pour les branchements (install de react-redux)
 * 9. Containers:  branchements en lecture - mapStateToProps
 * 10. Containers:  branchements en  écriture - mapDispatchToProps
 *   10.1 Event: dans les composants on réagit à des interactions
 *   10.2 Action Types et Action Creators - utilitaires pour manipuler plus
 *   facilement des objets actions
 *   10.3 Dispatch d'une action depuis un container = émission d'une intention
 *   10.4 Traduction de l'intention dans le reducer
 */

 /* 
  A propos des Websockets
  - Jusqu'à présent on connaissait le protocole http pour dialoguer entre un client et un serveur, c'est un mode d'échange où on fait des demandes ponctuelles pour obtenir des réponses. Ce moe d'échange ne permet pas au serveur de me fournir spontanément des infos sans que je lui demande explicitement
  - Avec les websocket on peut ouvrir un canal d'échange client serveur persistant où le client peut envoyer des choses au serveur ET le serveur peut aussi prendre l'initiative d'envoyer n'importe quand des choses au client. Chacun pourra réagir de manière événementiel, chaque que quelque chose de particulier se produit on réagit

  - Plan d'action pour implémenter cela dans notre application
  1. Ajout de la librairie socket.io
  2. Ouvrir la connexion au websocket
  3. Emettre l'envoi d'un message -> l'émettre au serveur pour qu'il relai à tous les clients connectés
  4. Ecouter l'arrivée de nouveaux messages -> envoyés depuis d'autres client et relayés jusqu'à moi par le serveur
*/

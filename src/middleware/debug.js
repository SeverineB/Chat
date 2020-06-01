/* 
  Un middleware est une fonction qui va pouvoir intercépter les actions et éventuellement réagir
  On va passer cette fonction au store
  On va pouvoir avoir plusieurs middleware typiquement 1 pour chaque types d'effets, par exemple 1 middleware pour du debug,
   1 middleware pour l'api github, 1 middleware pour une api privée, 1 middleware pour un websocket
   Un middleware aura 3 entrées:
   - store; objet store avec méthodes getState, dispatch
   - next: fonction qui dit si on laisse passer l'action ou pas, si le middleware laisse passer l'action
   elle passe au middleware suivant sinon elle est court circuité, 
   arrivé dans le dernier middleware s'il laisse passer l'action elle ira dans le reducer
   - action: l'objet action, l'intention qu'on intercepte
*/

// les middlewares de redux doivent s'écrire sous forme de triple fléchée,
// cad de fonction qui retourne une fonction qui retourne une fonction
const debug = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export default debug;

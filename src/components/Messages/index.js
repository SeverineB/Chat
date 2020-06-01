import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Messages/Message';

import './style.scss';

const Messages = ({ messages }) => {
  // on cible l'élément que l'on souhaite atteindre dans le DOM réel avec le hook useRef
  // https://fr.reactjs.org/docs/hooks-reference.html#useref
  const containerElement = useRef(null);

  // pour pouvoir réagir après le rendu du composant, on passe par useEffect
  // ici on met "messages" en dépendance pour relancer useEffect à chaque fois que
  // la valeur de cette props change (à chaque nouveau message)
  useEffect(() => {
    console.log('Element ciblé', containerElement);
    // pour avoir la hauteur totale de l'élément, même celle non
    // visible on passe par la propriété scrollHeight
    const scrollY = containerElement.current.scrollHeight;
    
    console.log('ScrollHeight élement ciblé', scrollY);
    // pour scroller programmatiquement un élément du DOM scrollable,
    // on utilise la fonction scrollTo(valeur de x, valeur de y)
    containerElement.current.scrollTo(0, scrollY);
  }, [messages]);

  return (
    <div
      ref={containerElement}
      className="messages"
    >
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

// on veut récupérer une liste de messages = un tableau d'objets représentant les messages
Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;

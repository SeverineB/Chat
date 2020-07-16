import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Messages/Message';

import './style.scss';

const Messages = ({ messages }) => {
  const containerElement = useRef(null);
  useEffect(() => {
    console.log('Element ciblé', containerElement);
    const scrollY = containerElement.current.scrollHeight;
    
    console.log('ScrollHeight élement ciblé', scrollY);
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

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;

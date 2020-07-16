import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, content, isAuthor }) => (
  <div className={isAuthor ? 'message message--isAuthor' : 'message'}>
    <div className="message-author">{author}</div>
    <p className="message-content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string,
  isAuthor: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;

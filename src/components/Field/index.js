import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ type, placeholder }) => (
  <input className="field" type={type} placeholder={placeholder} />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Field;

import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ value, type, placeholder, name }) => (
  <input
    value={value}
    className="field"
    type={type}
    placeholder={placeholder}
    name={name}
  />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Field;

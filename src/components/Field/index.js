import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ value, type, placeholder, name, changeValue }) => (
  <input
    value={value}
    className="field"
    type={type}
    placeholder={placeholder}
    onChange={(evt) => {
      changeValue(evt.target.value);
    }}
    name={name}
  />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

export default Field;

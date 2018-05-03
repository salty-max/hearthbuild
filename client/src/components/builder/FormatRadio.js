import React from 'react';
import Svg from '../common/Svg';
import PropTypes from 'prop-types';

const FormatRadio = ({
  format,
  label,
  onChange,
  checked,
}) => (
  <div className="control">
    <input className="radio" type="radio" name="format" id={format} value={format} checked={checked} onChange={onChange} />
    <label htmlFor={format}>
      <span className="button is-dark is-outlined is-medium">
        <span className="icon">
          <Svg type="misc" value={format} />
        </span>
        <span>{label}</span>
      </span>
    </label>
  </div>
);

FormatRadio.propTypes = {
  format: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default FormatRadio;
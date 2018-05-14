/*
 * General component for select inputs
*/

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>  
  ))

  return (
    <div className="field">
      <label
        className="label"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="control">
        <span className={classnames('select', {
          'is-danger': error
        })}>
          <select
            name={name}
            id={name}
            className={classnames('', { 'is-danger': error })}
            onChange={onChange}
            value={value}
          >
            {selectOptions}
          </select>
        </span>
        {info && <p className="help">{info}</p>}
        {error && (
          <div className="invalid-feedback">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}


export default SelectListGroup;
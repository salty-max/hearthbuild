import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  icon,
  value,
  label,
  type,
  error,
  info,
  onChange,
  disabled
}) => (
  <div className="field">
    <label
      className="label"
      htmlFor="username"
    >
      {label}
    </label>
    <div className="control has-icons-left">
      <input
        type={type}
        name={name}
        id={name}
        className={classnames('input', { 'is-danger': error })}
        onChange={onChange}
      />
      {info && <p className="help">{info}</p>}
      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
      {icon &&
        < span className = {
          classnames('icon is-left', { 'has-text-danger': error })
        } >
          <i className={icon} />
        </span>
      }
    </div>
  </div>
);

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}


export default TextFieldGroup;
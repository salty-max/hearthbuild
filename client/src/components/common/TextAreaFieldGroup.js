import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => (
    <div className="field">
      <div className="control">
        <textarea
          placeholder={placeholder}
          name={name}
          className={classnames('textarea', { 'is-danger': error })}
          onChange={onChange}
          value={value}
        />
        {info && <p className="help">{info}</p>}
        {error && (
          <div className="invalid-feedback">
            {error}
          </div>
        )}
      </div>
    </div>
  );

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}


export default TextAreaFieldGroup;
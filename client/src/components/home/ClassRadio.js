import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../common/Svg';


const ClassRadio = ({ hsClass, checked, onChange, label }) => {

  return (
    <div className="control">
      <input
        id={hsClass}
        name="hsClass"
        type="radio"
        className="radio"
        value={label}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={hsClass} >
        <Svg type="class" value={hsClass}  />
      </label>
    </div>
  );
};

ClassRadio.propTypes = {
  hsClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ClassRadio;

import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../common/Svg';


const ClassRadio = ({ hsClass }) => {

  return (
    <div className="control">
      <input id={hsClass} name="class" type="radio" className="radio"  />
      <label htmlFor={hsClass} >
        <Svg type="class" value={hsClass}  />
      </label>
    </div>
  );
};

ClassRadio.propTypes = {
  hsClass: PropTypes.string.isRequired,
};

export default ClassRadio;

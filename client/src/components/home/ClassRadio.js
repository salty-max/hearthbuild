import React from 'react';
import PropTypes from 'prop-types';

const ClassRadio = ({ hsClass }) => (
  <div className="control">
    <input id={hsClass} name="class" type="radio" className="radio" />
    <label htmlFor={hsClass}>
      <svg>
        <use xlinkHref={`img/classes/class-${hsClass}.svg#class-${hsClass}`} />
      </svg>
    </label>
  </div>
);

ClassRadio.propTypes = {
  hsClass: PropTypes.string.isRequired,
};

export default ClassRadio;

import React from 'react';
import PropTypes from 'prop-types';

const BuilderBanner = ({ title, subtitle }) => (
  <div className="builder-banner">
    <div className="container">
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  </div>
);

BuilderBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BuilderBanner;

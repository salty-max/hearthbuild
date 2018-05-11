import React from 'react';
import PropTypes from 'prop-types';

const GuideBanner = ({ title, subtitle }) => (
  <div className="guide-banner">
    <div className="container">
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  </div>
);

GuideBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default GuideBanner;

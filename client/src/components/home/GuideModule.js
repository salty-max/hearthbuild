import React from 'react';
import { Link } from 'react-router-dom';

const GuideModule = () => (
  <div className="box guide sidebar-item">
    <h3 className="sidebar-item--title is-size-5 has-text-dark">Deck creation 101</h3>
    <Link to={'/beginners-guide'} className="button is-dark is-outlined is-medium has-text-uppercase">Read more</Link>
  </div>
);

export default GuideModule;

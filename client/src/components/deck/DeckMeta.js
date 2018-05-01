import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import axios from 'axios';
import Svg from '../common/Svg';

const DeckMeta = ({ meta, author }) => (
  <div className="column is-9">
    <div className="deck--title">{meta.title}</div>
    <div className="deck--metas">
      <div className="deck--author">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-user" />
            </span>
          </span>
          <span className="tag is-white">
            {author}
          </span>
        </span>
      </div>
      <div className="deck--updated">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-calendar-alt" />
            </span>
          </span>
          <span className="tag is-white">
            <Moment fromNow>{meta.createdAt}</Moment>
          </span>
        </span>
      </div>
      <div className="deck--cost">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <Svg type="misc" value="dust" />
          </span>
          <span className="tag is-white">
            {meta.cost}
          </span>
        </span>
      </div>
      <div className="deck--format">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <Svg type="misc" value="standard" />
          </span>
          <span className="tag is-white">
            {meta.format}
          </span>
        </span>
      </div>
      <div className="deck--type">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-tags" />
            </span>
          </span>
          <span className="tag is-white">
            {meta.type}
          </span>
        </span>
      </div>
      <div className="deck--class">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <Svg type="class" value="mage" />
          </span>
          <span className="tag is-white">
            {meta.class}
          </span>
        </span>
      </div>
    </div>
  </div>
);

DeckMeta.propTypes = {
  meta: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
};

export default DeckMeta;

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import changeCase from 'change-case';
import Svg from '../common/Svg';

import druid from '../../assets/img/deck-banners/banner-druid.png';
import hunter from '../../assets/img/deck-banners/banner-hunter.png';
import mage from '../../assets/img/deck-banners/banner-mage.png';
import paladin from '../../assets/img/deck-banners/banner-paladin.png';
import priest from '../../assets/img/deck-banners/banner-priest.png';
import rogue from '../../assets/img/deck-banners/banner-rogue.png';
import shaman from '../../assets/img/deck-banners/banner-shaman.png';
import warlock from '../../assets/img/deck-banners/banner-warlock.png';
import warrior from '../../assets/img/deck-banners/banner-warrior.png';

const deckClasses = {
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior
}

const DeckMeta = ({ meta, author }) => (
  <div className="column is-9">
    {/* Change background image depending on deck class */}
    <div
      className="deck--title"
      style={{
        backgroundImage: `url(${deckClasses[changeCase.lowerCase(meta.class)]})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {meta.title}
    </div>

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
            {changeCase.upperCaseFirst(meta.format)}
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

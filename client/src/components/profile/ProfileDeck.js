import React from 'react';
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

const ProfileDeck = ({ deck, onDeleteClick }) => (
  <div>
    <div
      className="deck--title"
      style={{
        backgroundImage: `url(${deckClasses[changeCase.lowerCase(deck.class)]})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#383838',
        color: '#1ec2a7'
      }}
    >
      {`${deck.title.slice(0, 25)}...`}
      <button onClick={() => {onDeleteClick(deck._id)}} className="button is-danger">
        <span className="icon">
          <i className="fas fa-trash-alt" />
        </span>
      </button>
    </div>

    <div className="deck--metas">
      <div className="deck--updated">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-calendar-alt" />
            </span>
          </span>
          <span className="tag is-white">
            <Moment fromNow>{deck.createdAt}</Moment>
          </span>
        </span>
      </div>
      <div className="deck--cost">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <Svg type="misc" value="dust" />
          </span>
          <span className="tag is-white">
            {deck.cost}
          </span>
        </span>
      </div>
      <div className="deck--format">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <Svg type="misc" value="standard" />
          </span>
          <span className="tag is-white">
            {deck.format}
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
            {deck.type}
          </span>
        </span>
      </div>
      <div className="deck--class">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <Svg type="class" value="mage" />
          </span>
          <span className="tag is-white">
            {deck.class}
          </span>
        </span>
      </div>
      <div className="deck--likes">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-thumbs-up" />
            </span>
          </span>
          <span className="tag is-white">
            {deck.likes.length}
          </span>
        </span>
      </div>
      <div className="deck--views">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-eye" />
            </span>
          </span>
          <span className="tag is-white">
            {deck.views}
          </span>
        </span>
      </div>
      <div className="deck--comments">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-comment" />
            </span>
          </span>
          <span className="tag is-white">
            {deck.comments.length}
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default ProfileDeck;

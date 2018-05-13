import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../common/Svg';
import classnames from 'classnames';

const DeckCard = ({ isTwice, rarity, cost, name, img }) => (
  <div className="panel-block deck--list-card">
    <div className="deck--list-card-cost">
      <span className="deck--list-card-cost--text">{cost}</span>
      <span className="deck--list-card-cost--icon">
        <Svg type="misc" value="mana" />
      </span>
    </div>
    <div className="deck--list-card-name">{name}</div>
    <div className={classnames('deck--list-card-count', {
      'is-common': rarity === 'Common' || rarity === 'Basic' || rarity === 'Free',
      'is-rare': rarity === 'Rare',
      'is-epic': rarity === 'Epic',
      'is-legendary': rarity === 'Legendary',
    })}>
      <span className="deck--list-card-count--text">{isTwice ? '2' : '1'}</span>
    </div>
    <div className="deck--list-card-preview">
      <img src={`${img}`} alt={name} />
    </div>
  </div>
);

DeckCard.propTypes = {
  cost: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default DeckCard;

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Svg from '../common/Svg';

const PoolCard = ({ card, onCardHover, onCardClick }) => (
  <tr>
    {/* Change card name color depending on its rarity */}
    <td onMouseOver={onCardHover(card.img)} onClick={onCardClick(card)} className={classnames('', {
      'has-text-legendary': card.rarity === 'Legendary',
      'has-text-rare': card.rarity === 'Rare',
      'has-text-epic': card.rarity === 'Epic',
    })}>{card.name}</td>
    <td>
      <div className="deck-builder--cards-table--cost">
        <span>{card.cost}</span>
        <Svg type="misc" value="mana" />
      </div>
    </td>
  </tr>
);

PoolCard.propTypes = {
  card: PropTypes.object.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default PoolCard;
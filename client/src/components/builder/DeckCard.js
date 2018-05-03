import React from 'react';
import classnames from 'classnames';

import Svg from '../common/Svg';

const DeckCard = ({ card, onDeleteClick }) => (
  <tr>
    <td className={classnames('', {
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
    <td>
      <button className="button is-danger is-small" onClick={onDeleteClick(card.index)}>
        <span className="icon">
          <i className="fas fa-trash-alt"></i>
        </span>
      </button>
    </td>
  </tr>
);

export default DeckCard;
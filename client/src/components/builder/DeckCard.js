import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Svg from '../common/Svg';

const DeckCard = ({ card, onDeleteClick, isTwice }) => (
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
    <td className="deck-builder--cards-table-count">
      {/* If there is twice the same card in the deck display 2. If not display 1 */}
      {isTwice ? (2) : (1)}
    </td>
  </tr>
);

DeckCard.propTypes = {
  card: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  isTwice: PropTypes.bool.isRequired
}

export default DeckCard;
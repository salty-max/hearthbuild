import React, {Component} from 'react';
import PropTypes from 'prop-types';

import replaceArray from '../../utils/replace-array';

class DeckDesc extends Component {
  constructor() {
    super();
    this.newDesc = '';
  }

  colorize = () => {
    const cardNames = this.props.cards.map(card => card.name);
    const foundCardNames = [];
    const cardNamesFormatized = [];
    let cardClass = '';

    cardNames.forEach(name => {
      const match = this.props.desc.match(name);
      if (match) {
        cardClass = `has-text-${this.props.cards.find(card => card.name === match[0]).rarity.toLowerCase()}`;

        foundCardNames.push(name);

        cardNamesFormatized.push(`<span class="card-name ${cardClass}">${name}</span>`);
      }
    })

    this.newDesc = replaceArray(this.props.desc, foundCardNames, cardNamesFormatized);
    return { __html: this.newDesc }
  }

  render() {

    return (
      <div className="deck--desc">
        <div className="content">
          <h3>How to play this deck</h3>
          <p dangerouslySetInnerHTML={this.colorize()}
          />
        </div>
      </div>
    );
  }
}

DeckDesc.propTypes = {
  desc: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
};

DeckDesc.defaultProps = {
  cards: []
}

export default DeckDesc;

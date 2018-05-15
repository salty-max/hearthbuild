import React, {Component} from 'react';
import PropTypes from 'prop-types';

import replaceArray from '../../utils/replace-array';

class DeckDesc extends Component {
  constructor() {
    super();
    this.newDesc = '';
  }

  colorize = () => {
    // Get only deck cards names
    const cardNames = this.props.cardsPool.map(card => card.name);
    const foundCardNames = [];
    const cardNamesFormatized = [];
    let cardClass = '';
    let cardImg = '';
    if (this.props.desc) {
      cardNames.forEach(name => {
        // Check if each card name is in description
        const match = this.props.desc.match(name);

        // If so
        if (match) {
          // Find matched card in deck cards
          // Set className based on its rarity
          cardClass = `has-text-${this.props.cardsPool.find(card => card.name === match[0]).rarity.toLowerCase()}`;
          cardImg = this.props.cardsPool.find(card => card.name === match[0]).img;

          // Get matched cards names
          foundCardNames.push(name);

          // HTMLize card name with class based on rarity
          cardNamesFormatized.push(`<span class="card-name ${cardClass}">${name}<div class="card-preview"><img src="${cardImg}" alt="${name}" /></div></span>`);
        }
      })

      // Replace cards names in description with their HTML version
      this.newDesc = replaceArray(this.props.desc, foundCardNames, cardNamesFormatized);
      // Replace line breaks with <br>
      this.newDesc = this.newDesc.replace(/\r?\n/g, '<br />');

      // Replace paragraphs breaks with crappy double <br>
      this.newDesc = this.newDesc.replace(/\r\r?\n\n/g, '<br /><br />');
    }
    

    // Return HTML version of string
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
  desc: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object)
};

DeckDesc.defaultProps = {
  cards: [],
  desc: ''
}

export default DeckDesc;

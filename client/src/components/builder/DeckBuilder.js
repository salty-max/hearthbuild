import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import sortBy from '../../utils/sortBy';

import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Spinner from '../common/Spinner';

import DeckBuilderMetas from './DeckBuilderMetas';
import PoolCard from './PoolCard';
import DeckCard from './DeckCard';

import magikarp from '../../assets/img/card-placeholder.png'

class DeckBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classCards: [],
      neutralCards: [],
      hoverCard: magikarp,
      tabs: {
        classTab: true,
        neutralTab: false
      },
      deckTypes: [
        { label: '* Choose a type', value: 0 },
        { label: 'Aggro', value: 'Aggro' },
        { label: 'Midrange', value: 'Midrange' },
        { label: 'Control', value: 'Control' },
      ],
      title: '',
      type: '',
      description: '',
      format: '',
      class: '',
      cost: 0,
      cardCount: 0,
      deckCards: [],
      cardIndex: 0,
      errors: {}
    }
  }

  componentWillMount() {
    let cards = [];
    if(this.props.cardsPool) {
      cards = this.sortByFormat(this.props.cardsPool, this.props.currentDeck.format)
    }

    cards = cards.sort(sortBy('cost'));

    this.setState({
      class: this.props.currentDeck.class,
      format: this.props.currentDeck.format,
      classCards: cards.filter(card => card.playerClass === this.props.currentDeck.class),
      neutralCards: cards.filter(card => card.playerClass === 'Neutral'),
    });
  }

  sortByFormat = (pool, format) => {
    let cards = [];
    if (format === 'standard') {
      cards = pool.filter(card => card.cardSet === 'The Witchwood' || card.cardSet === 'Knights of the Frozen Throne' || card.cardSet === 'Kobolds & Catacombs' || card.cardSet === 'Journey to Un\'Goro' || card.cardSet === 'Classic' || card.cardSet === 'Basic');
    }
    else {
      cards = pool;
    }

    return cards;
  }

  addCard = (card) => () => {
    let newIndex = this.state.cardIndex;
    newIndex += 1;
    this.computeCost(card.rarity, 'add');
    this.setState(prevState => ({

      deckCards: [...prevState.deckCards, {...card, index: newIndex}],
      cardIndex: ++newIndex,
      cardCount: ++prevState.cardCount
    }));
  }

  removeCard = (cardIndex) => () => {
    const cardToRemove = this.state.deckCards.filter(card => card.index === cardIndex);
    this.computeCost(cardToRemove[0].rarity, 'substract');

    const cards = this.state.deckCards.filter(card => card.index !== cardIndex);

    this.setState(prevState => ({
      deckCards: cards,
      cardCount: --prevState.cardCount
    }));
  }

  computeCost = (rarity, operation) => {
    let newCost = 0;
    switch (rarity) {
      case 'Common':
        newCost = 40
        break;
      case 'Rare':
        newCost = 100
        break;
      case 'Epic':
        newCost = 400
        break;
      case 'Legendary':
        newCost = 1600
        break;
      default:
        break;
    }

    if (operation) {
      if (operation === 'add') {
        this.setState(prevState => ({
          cost: prevState.cost + newCost
        }));
      }

      if (operation === 'substract') {
        this.setState(prevState => ({
          cost: prevState.cost - newCost
        }));
      }
    }
  }

  showCards = () => {
    if(this.state.tabs.neutralTab) {
      return this.state.neutralCards
    }
    else {
      return this.state.classCards;
    }
  }

  onCardHover = (imgPath) => () => {
    this.setState({
      hoverCard: imgPath
    });
  }

  handleTab = (tabToActivate) => (e) => {
    this.setState(prevState => ({
      tabs: {
        [tabToActivate]: !prevState.tabs[tabToActivate]
      }
    }));
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    const { tabs, hoverCard, deckTypes, deckCards, errors } = this.state;

    const cardsToShow = this.showCards();

    return (
      <main>
        <section className="section" id="deck-builder">
          <div className="container">
            <div className="deck-builder">
              {/* FORM */}
              <form onSubmit={this.onSubmit}>
                <div className="deck-builder--form">
                  <div className="fields">
                    <TextFieldGroup
                      name="title"
                      label="Deck title"
                      value={this.state.title}
                      error={errors.title}
                      onChange={this.onChange}
                      icon="fas fa-pencil-alt"
                    />
                    <SelectListGroup
                      name="type"
                      label="Type"
                      value={this.state.type}
                      error={errors.type}
                      onChange={this.onChange}
                      options={deckTypes}
                    />
                  </div>
                </div>

                <div className="columns deck-builder--cards">
                  <div className="column is-4 is-hidden-mobile deck-builder--cards-preview">
                    <img src={hoverCard} alt="" />
                  </div>
                  <div className="column is-8 deck-builder--cards-table">
                    <div className="tabs">
                      <ul>
                        <li className={classnames('', {
                          'is-active': tabs.classTab
                        })} onClick={this.handleTab('classTab')}>
                          <a>{this.props.currentDeck.class}</a>
                        </li>

                        <li className={classnames('', {
                          'is-active': tabs.neutralTab
                        })} onClick={this.handleTab('neutralTab')}>
                          <a>Neutrals</a>
                        </li>
                      </ul>
                    </div>
                    {this.props.cardsLoading ? (
                      <Spinner />
                    ) : (
                      <table className="table">
                        <tbody>
                          {cardsToShow.map(card => (
                            <PoolCard
                              key={card.cardId}
                              onCardHover={this.onCardHover}
                              card={card}
                              onCardClick={this.addCard}
                            />
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                <div className="deck-builder--list">
                  <DeckBuilderMetas count={this.state.cardCount} cost={this.state.cost} />
                  <div className="columns">
                    <div className="column is-8 deck-builder--list-table">
                      <table className="table">
                        <tbody>
                          {deckCards.map(card => (
                            <DeckCard
                              key={card.index}
                              card={card}
                              onDeleteClick={this.removeCard}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="column is-4 deck-builder--curve">
                      <div className="box"></div>
                    </div>
                  </div>
                </div >

                <div className="deck-builder--desc">
                  <h3 className="title">Deck guide</h3>
                  <TextAreaFieldGroup
                    name="description"
                    value={this.state.description}
                    error={errors.description}
                    onChange={this.onChange}
                    placeholder="Explain how do you play this deck..."
                  />
                </div>

                <input type="submit" className="button is-primary is-medium deck-builder--submit" value="Submit" />
              </form>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

DeckBuilder.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  cardsLoading: PropTypes.bool.isRequired,
  cardsPool: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  currentDeck: PropTypes.object.isRequired
}

export default DeckBuilder;


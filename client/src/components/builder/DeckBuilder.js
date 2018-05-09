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

import zerowing from '../../assets/img/zerowing.png'

class DeckBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classCards: [],
      neutralCards: [],
      hoverCard: 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_009.png',
      tabs: {
        classTab: true,
        neutralTab: false
      },
      title: '',
      type: '',
      description: '',
      format: '',
      class: '',
      cost: 0,
      cardCount: 0,
      deckCards: [],
      cardIndex: 0,
      errors: {},
      poolname: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors,
      class: nextProps.class,
      format: nextProps.format,
    })
  }

  componentDidMount() {

    let cards = [];
    if(this.props.cardsPool) {
      cards = this.sortByFormat(this.props.cardsPool, this.props.format)
    }

    cards = cards.sort(sortBy('cost'));

    this.setState({
      
      classCards: cards.filter(card => card.playerClass === this.props.class),
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

  addCard = (cardToAdd) => () => {
    let newIndex = this.state.cardIndex;
    const { deckCards } = this.state;
    if (deckCards.length < 30) {
      if ((cardToAdd.rarity === 'Legendary' && deckCards.filter(card => cardToAdd.cardId === card.cardId).length < 1) || (cardToAdd.rarity !== "Legendary" && deckCards.filter(card => cardToAdd.cardId === card.cardId).length < 2)) {
        newIndex += 1;
        this.computeCost(cardToAdd.rarity, 'add');
        this.setState(prevState => ({

          deckCards: [...prevState.deckCards, { ...cardToAdd, index: newIndex }],
          cardIndex: ++newIndex,
          cardCount: ++prevState.cardCount
        }));
      }
    }
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

    const cards = [];

    this.state.deckCards.forEach(card => {
      cards.push({
        name: card.name,
        class: card.playerClass,
        rarity: card.rarity,
        cardSet: card.cardSet,
        cost: card.cost,
        img: card.img,
      })
    });

    const deckData = {
      title: this.state.title,
      slug: this.state.title.trim(' ').toLowerCase(),
      class: this.state.class,
      format: this.state.format,
      description: this.state.description,
      type: this.state.type,
      cost: this.state.cost,
      cards,
      views: 0,
      likes: [],
      comments: [],
      createdAt: Date.now()
    }

    this.props.actions.sendDeck(deckData);
    
  }

  render() {
    const { tabs, hoverCard, deckCards, errors } = this.state;

    const { deckTypes } = this.props;

    let cardsToShow = this.showCards();

    if(this.state.poolname !== '') {
      cardsToShow = cardsToShow.filter(card => card.name.toLowerCase().includes(this.state.poolname.toLowerCase()));
    }

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
                    <div className="pool-header">
                      <div className="tabs">
                        <ul>
                          <li className={classnames('', {
                            'is-active': tabs.classTab
                          })} onClick={this.handleTab('classTab')}>
                            <a>{this.props.class}</a>
                          </li>

                          <li className={classnames('', {
                            'is-active': tabs.neutralTab
                          })} onClick={this.handleTab('neutralTab')}>
                            <a>Neutrals</a>
                          </li>
                        </ul>
                      </div>
                    
                      <TextFieldGroup
                        name="poolname"
                        value={this.state.poolname}
                        placeholder="Search by name"
                        onChange={this.onChange}
                        icon="fas fa-pencil-alt"
                      />
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
                      {deckCards.length === 0 ? (
                        <div className="box deck-builder--list-empty">
                          <img src={zerowing} />
                          <h2>All your cards are belong to us</h2>
                        </div>  
                      ) : (
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
                      )}
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
                
                {errors.cardCount && (
                  <div className="notification is-danger">
                    {errors.cardCount}
                  </div>
                )}

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
  class: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
}

export default DeckBuilder;


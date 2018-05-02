import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import PoolCard from './PoolCard';

import magikarp from '../../assets/img/card-placeholder.png'

class DeckBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
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
      errors: {}
    }
  }

  componentDidMount(){
    this.getCards('Warlock');
  }

  onCardHover = (imgPath) => () => {
    this.setState({
      hoverCard: imgPath
    });
  }

  getCards = (hsClass) => {

    let cards = [];
    const instance = axios.create({
      headers: { 'X-Mashape-Key': 'gRaaphoNnCmshKVbb6SrWfC2IHanp1QeWMMjsnTLA3mjewjtYW' }
    });

    instance.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${hsClass}`, {
      params: {
        'collectible': 1
      }
    })
      .then(res => {
        this.setState({
          cards: res.data.filter(card => card.type !== 'Hero')
        })
      });
  }

  handleTab = (hsClass, tabToActivate) => (e) => {
    this.setState(prevState => ({
      tabs: {
        [tabToActivate]: !prevState.tabs[tabToActivate]
      }
    }));
    this.getCards(hsClass);
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
    const { cards, tabs, hoverCard, deckTypes, errors } = this.state;

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
                        })} onClick={this.handleTab('Warlock', 'classTab')}>
                          <a>Warlock</a>
                        </li>

                        <li className={classnames('', {
                          'is-active': tabs.neutralTab
                        })} onClick={this.handleTab('Neutral', 'neutralTab')}>
                          <a>Neutrals</a>
                        </li>
                      </ul>
                    </div>
                    <table className="table">
                      <tbody>
                        {cards.map(card => (
                          <PoolCard key={card.cardId} onCardHover={this.onCardHover} card={card} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="deck-builder--list">
                  <div className="deck-builder--list-header">
                    <h3 className="title">Deck preview</h3>
                    <span className="tags has-addons">
                      <span className="tag is-medium is-dark">
                        <svg>
                          <use xlinkHref="img/misc/misc-dust.svg#misc-dust" />
                        </svg>
                        </span>
                        <span className="tag is-medium is-light">15k</span>
                    </span>
                    <span className="tags has-addons">
                      <span className="tag is-medium is-dark">
                        <span className="icon">
                          <i className="fab fa-slack-hash"></i>
                        </span>
                      </span>
                      <span className="tag is-medium is-light">
                        <span id="card-count">15</span> / 30
                      </span>
                    </span>
                  </div>
                  <div className="columns">
                    <div className="column is-8 deck-builder--list-table">
                      <div className="tabs">
                        <ul>
                          <li className="is-active"><a>Warlock</a></li>
                          <li><a>Neutrals</a></li>
                        </ul>
                      </div>
                      <table className="table is-striped">
                        <tbody>
                          <tr>
                            <td>Magikarp</td>
                            <td>
                              <div className="deck-builder--cards-table--cost">
                                <span>0</span>
                                <svg>
                                  <use xlinkHref="img/misc/misc-mana.svg#misc-mana" />
                                </svg>
                              </div>
                            </td>
                            <td>
                              <button className="button is-danger is-small">
                                <span className="icon">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="has-text-epic">Baston</td>
                            <td>
                              <div className="deck-builder--cards-table--cost">
                                <span>5</span>
                                <svg>
                                  <use xlinkHref="img/misc/misc-mana.svg#misc-mana" />
                                </svg>
                              </div>
                            </td>
                            <td>
                              <button className="button is-danger is-small">
                                <span className="icon">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="has-text-legendary">Alexstrasza</td>
                            <td>
                              <div className="deck-builder--cards-table--cost">
                                <span>9</span>
                                <svg>
                                  <use xlinkHref="img/misc/misc-mana.svg#misc-mana" />
                                  </svg>
                                </div>
                              </td>
                            <td>
                              <button className="button is-danger is-small">
                                <span className="icon">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="has-text-rare">Acolyte de la souffrance</td>
                            <td>
                              <div className="deck-builder--cards-table--cost">
                                <span>3</span>
                                <svg>
                                  <use xlinkHref="img/misc/misc-mana.svg#misc-mana" />
                                </svg>
                              </div>
                            </td>
                            <td>
                              <button className="button is-danger is-small">
                                <span className="icon">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                              </button>
                            </td>
                          </tr>
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



export default DeckBuilder;


import React, { Component } from 'react';
import Moment from 'react-moment';
import changeCase from 'change-case';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

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

class ProfileDeck extends Component {
  constructor() {
    super();
    this.state = {
      modalActive: false
    }
  }

  openModal = () => {
    this.setState({
      modalActive: true
    });
  }

  closeModal = () => {
    this.setState({
      modalActive: false
    });
  }

  render() {
    const { deck, onDeleteClick } = this.props;

    return (
      <div className="profile--deck">
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
          {deck.title.length > 25 ? `${deck.title.slice(0, 25)}...` : deck.title}
          <div className="buttons">
            <Link to={`/decks/${deck._id}`} className="button is-dark">
              <span className="icon">
                <i className="fas fa-eye" />
              </span>
            </Link>
            <button onClick={() => this.openModal()} className="button is-danger">
              <span className="icon">
                <i className="fas fa-trash-alt" />
              </span>
            </button>
          </div>
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
                {changeCase.upperCaseFirst(deck.format)}
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

        <div className={classnames('modal', {
          'is-active': this.state.modalActive
        })}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <article className="message is-danger">
              <div className="message-header">
                <p>Delete this deck ?</p>
                <div className="buttons">
                  <button className="button is-dark is-outlined" onClick={this.closeModal}>Cancel</button>
                  <button className="button is-primary" onClick={() => onDeleteClick(deck._id)}>Confirm</button>
                </div>
              </div>
            </article>
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    );
  }
}

export default ProfileDeck;

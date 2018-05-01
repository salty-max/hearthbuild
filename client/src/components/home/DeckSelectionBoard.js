import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../common/Svg';
// import { Link } from 'react-router-dom';

const DeckSelectionBoard = () => {
  return (
<table className="table deck-list--table is-fullwidth is-striped is-hoverable">
  <thead>
    <tr>
      <th>Name</th>
      <th><i className="fas fa-user"></i></th>
      <th><i className="fas fa-calendar-alt"></i></th>
      <th>
        <svg>
          <use xlinkHref="img/misc/misc-dust.svg#misc-dust" />
        </svg>
      </th>
      <th><i className="fas fa-thumbs-up"></i></th>
      <th><i className="fas fa-eye"></i></th>
      <th><i className="fas fa-comments"></i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="deck-list--deck-name">
          <svg className="class-icon">
            <use xlinkHref="img/classes/class-warlock.svg#class-warlock" />
          </svg>
          <a href="deck.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
        </div>
      </td>
      <td className="deck-list--deck-author" >John Doe</td>
      <td className="deck-list--deck-updated">2 days ago</td>
      <td className="deck-list-deck--cost">15k</td>
      <td className="deck-list--deck-rating">+52</td>
      <td className="deck-list--deck-views">1k</td>
      <td className="deck-list--deck-comments">32</td>
    </tr>
    <tr>
      <td>
        <div className="deck-list--deck-name">
          <svg className="class-icon">
            <use xlinkHref="img/classes/class-warlock.svg#class-warlock" />
          </svg>
          <a href="deck.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
        </div>
      </td>
      <td className="deck-list--deck-author" >John Doe</td>
      <td className="deck-list--deck-updated">2 days ago</td>
      <td className="deck-list-deck--cost">15k</td>
      <td className="deck-list--deck-rating">+52</td>
      <td className="deck-list--deck-views">1k</td>
      <td className="deck-list--deck-comments">32</td>
    </tr>
    <tr>
      <td>
        <div className="deck-list--deck-name">
          <svg className="class-icon">
            <use xlinkHref="img/classes/class-warlock.svg#class-warlock" />
          </svg>
          <a href="deck.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
        </div>
      </td>
      <td className="deck-list--deck-author" >John Doe</td>
      <td className="deck-list--deck-updated">2 days ago</td>
      <td className="deck-list-deck--cost">15k</td>
      <td className="deck-list--deck-rating">+52</td>
      <td className="deck-list--deck-views">1k</td>
      <td className="deck-list--deck-comments">32</td>
    </tr>
  </tbody>
</table>
//{ <Link to ="https://playhearthstone.com/en-us/expansions-adventures/the-witchwood/">
//          <div class="home-info">
//              <h3 class="title">Witchwood is out</h3>
//              <p class="subtitle">Go check what's new in Hearthstone</p>
//          </div>
//        </Link>
);
};

export default DeckSelectionBoard;

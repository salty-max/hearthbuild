import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../common/Svg';

// import { Link } from 'react-router-dom';

const DeckSelectionBoard = ({title, author, createdAt, cost, likes, comments }) => {
  return (
<table className="table deck-list--table is-fullwidth is-striped is-hoverable">
  <thead>
    <tr>
      <th>Name</th>
      <th><i className="fas fa-user"></i></th>
      <th><i className="fas fa-calendar-alt"></i></th>
      <th>
        {/* <Svg type="class" value={hsCLass} /> */}

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
          {/* <Svg type="class" value={hsCLass}  /> */}

          <a href="deck.html">{title}</a>
        </div>
      </td>
      <td className="deck-list--deck-author" >{author}</td>
       <td className="deck-list--deck-updated">{createdAt}</td>
       <td className="deck-list-deck--cost">{cost}</td>
         <td className="deck-list--deck-rating">{likes.length}</td>
        <td className="deck-list--deck-views">1k</td>
       <td className="deck-list--deck-comments">{comments.length}</td>
    </tr>


  </tbody>
</table>
//{ <a href ="https://playhearthstone.com/en-us/expansions-adventures/the-witchwood/">
//          <div class="home-info">
//              <h3 class="title">Witchwood is out</h3>
//              <p class="subtitle">Go check what's new in Hearthstone</p>
//          </div>
//        </a>
);
};


export default DeckSelectionBoard;

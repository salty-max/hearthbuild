import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const DeckItem = ({ _id, title, author, createdAt, cost, likes, comments }) => {
  return (

    <tr>
      <td>
        <div className="deck-list--deck-name">
          {/* <Svg type="class" value={hsCLass}  /> */}

          <Link to={`/decks/${_id}`}>{title}</Link>
        </div>
      </td>
      <td className="deck-list--deck-author" >{author.name}</td>
      <td className="deck-list--deck-updated">
        <Moment fromNow>{createdAt}</Moment>
      </td>
      <td className="deck-list-deck--cost">{cost}</td>
      <td className="deck-list--deck-rating">{likes.length}</td>
      <td className="deck-list--deck-views">1k</td>
      <td className="deck-list--deck-comments">{comments.length}</td>
    </tr>
  );
};


export default DeckItem;

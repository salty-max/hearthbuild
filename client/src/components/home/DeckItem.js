import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import Svg from '../common/Svg'

const DeckItem = (props) => (
  <tr>
    <td>
      <Svg className="class-icon" type="class" value={props.class.toLowerCase()} />
    </td>
    <td>
      <Link
        className="deck-list--deck-name"
        to={`/decks/${props._id}`}
      >
        {props.title.length > 50 ? `${props.title.slice(0, 50)}...` : props.title}
      </Link>
    </td>
    <td className="deck-list--deck-author" >{props.author.name}</td>
    <td className="deck-list--deck-updated">
      <Moment fromNow>{props.createdAt}</Moment>
    </td>
    <td className="deck-list-deck--cost">{props.cost}</td>
    <td className="deck-list--deck-rating">{props.likes.length}</td>
    <td className="deck-list--deck-views">{props.views}</td>
    <td className="deck-list--deck-comments">{props.comments.length}</td>
  </tr>
);

export default DeckItem;

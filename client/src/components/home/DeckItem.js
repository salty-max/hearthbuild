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
        {props.title}
      </Link>
    </td>
    <td className="deck-list--deck-author"><div>{props.author.name}</div></td>
    <td className="deck-list--deck-updated">
      <div><Moment fromNow>{props.createdAt}</Moment></div>
    </td>
    <td className="deck-list-deck--cost"><div>{props.cost}</div></td>
    <td className="deck-list--deck-rating"><div>{props.likes.length}</div></td>
    <td className="deck-list--deck-views"><div>{props.views}</div></td>
    <td className="deck-list--deck-comments"><div>{props.comments.length}</div></td>
  </tr>
);

export default DeckItem;

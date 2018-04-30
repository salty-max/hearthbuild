import React from 'react';
import defaultAvatar from '../../../assets/img/misc/misc-default-avatar.jpg'

const DeckComment = () => (
  <article className="media deck--comments-comment">
    <figure className="media-left">
      <p className="image is-64x64 deck-comments-comment--avatar">
        <img src={defaultAvatar} alt="" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p className="deck--comments-comment--username"><strong>Angry Chicken</strong></p>
        <p className="deck--comments-comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic similique est beatae non, tempora sed, deleniti, esse, id labore repudiandae sit odit magni dignissimos fugit incidunt soluta deserunt vel ut!</p>
      </div>
    </div>
  </article>
);

export default DeckComment;

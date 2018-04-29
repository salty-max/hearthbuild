import React from 'react';

const DeckMeta = () => (
  <div className="column is-9">
    <div className="deck--title">Pew pew I'm a mage</div>
    <div className="deck--metas">
      <div className="deck--author">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-user" />
            </span>
          </span>
          <span className="tag is-white">
            John Doe
          </span>
        </span>
      </div>
      <div className="deck--updated">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <span className="icon">
              <i className="fas fa-calendar-alt" />
            </span>
          </span>
          <span className="tag is-white">
            2 days ago
          </span>
        </span>
      </div>
      <div className="deck--cost">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <svg>
              <use xlinkHref="img/misc/misc-dust.svg#misc-dust" />
            </svg>
          </span>
          <span className="tag is-white">
            15k
          </span>
        </span>
      </div>
      <div className="deck--format">
        <span className=" tags has-addons">
          <span className="tag is-dark">
            <svg>
              <use xlinkHref="img/misc/misc-raven.svg#misc-raven" />
            </svg>
          </span>
          <span className="tag is-white">
            Standard
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
            Midrange
          </span>
        </span>
      </div>
      <div className="deck--class">
        <span className="tags has-addons">
          <span className="tag is-dark">
            <svg>
              <use xlinkHref="img/classes/class-mage.svg#class-mage" />
            </svg>
          </span>
          <span className="tag is-white">
            Mage
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default DeckMeta;

import React from 'react';

import Svg from '../common/Svg';



const DeckListHeader = ({ handleSortClick }) => {
  return (
    <thead>
      <tr>
        <th></th>

        <th onClick={handleSortClick("title")}>
          Name
        </th>

        <th onClick={handleSortClick("author")}>
          <i className="fas fa-user"></i>
        </th>

        <th onClick={handleSortClick("-createdAt")}>
          <i className="fas fa-calendar-alt"></i>
        </th>

        <th onClick={handleSortClick('-cost')}>
          <Svg type="misc" value="dust" />
        </th>

        <th onClick={handleSortClick('-likes')}>
          <i className="fas fa-thumbs-up"></i>
        </th>

        <th onClick={handleSortClick("-views")}>
          <i className="fas fa-eye"></i>
        </th>

        <th onClick={handleSortClick("-comments")}>
          <i className="fas fa-comments"></i>
        </th>
      </tr>
    </thead>
  );
};
export default DeckListHeader;

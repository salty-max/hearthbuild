import React from 'react';

import Svg from '../common/Svg';

const DeckListHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th><i className="fas fa-user"></i></th>
      <th><i className="fas fa-calendar-alt"></i></th>
      <th>
        <Svg type="misc" value="dust" />
      </th>
      <th><i className="fas fa-thumbs-up"></i></th>
      <th><i className="fas fa-eye"></i></th>
      <th><i className="fas fa-comments"></i></th>
    </tr>
  </thead>
)

export default DeckListHeader;
import React from 'react';

import Svg from '../common/Svg';



const DeckListHeader = ({onclick}) => {
  return (
  <thead>
    <tr>
      <th onClick={onclick}>Name</th>
      <th onClick={onclick}><i className="fas fa-user"></i></th>
      <th><i className="fas fa-calendar-alt" onClick={onclick}></i></th>
      <th>
        <Svg type="misc" value="dust" />
      </th>
      <th><i className="fas fa-thumbs-up" onClick={onclick}></i></th>
      <th><i className="fas fa-eye" onClick={onclick}></i></th>
      <th><i className="fas fa-comments" onClick={onclick}></i></th>
    </tr>
  </thead>
);
};


// class DeckListHeader extends React.Component {
//
//   onclick = () => {
//      decksToShow.sort(sortBy('title'));
//   }
// render() {
//     const decksToShow = this.props.decks;
//     return (
//   <thead>
//     <tr>
//       <th onClick={this.onclick}>Name</th>
//       <th><i className="fas fa-user"></i></th>
//       <th><i className="fas fa-calendar-alt"></i></th>
//       <th>
//         <Svg type="misc" value="dust" />
//       </th>
//       <th><i className="fas fa-thumbs-up"></i></th>
//       <th><i className="fas fa-eye"></i></th>
//       <th><i className="fas fa-comments"></i></th>
//     </tr>
//   </thead>
// );
// }
// }
export default DeckListHeader;

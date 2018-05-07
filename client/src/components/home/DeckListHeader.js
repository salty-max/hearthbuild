import React from 'react';

import Svg from '../common/Svg';



const DeckListHeader = ({onClick}) => {
  return (
  <thead>
    <tr>
      <th onClick={onClick}>Name</th>
      <th onClick={onClick}><i className="fas fa-user"></i></th>
      <th><i className="fas fa-calendar-alt" onClick={onClick}></i></th>
      <th>
        <Svg type="misc" value="dust" />
      </th>
      <th><i className="fas fa-thumbs-up" onClick={onClick}></i></th>
      <th><i className="fas fa-eye" onClick={onClick}></i></th>
      <th><i className="fas fa-comments" onClick={onClick}></i></th>
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

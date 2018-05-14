import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeckRating from '../../components/deck/DeckRating';
import { addDeckView, likeDeck } from '../../actions/deckActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addDeckView,
    likeDeck
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckRating);

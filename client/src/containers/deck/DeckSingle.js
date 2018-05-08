import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeckSingle from '../../components/deck/DeckSingle';
import { deleteDeck } from '../../actions/deckActions';

const mapStateToProps = state => ({
  auth: state.auth,
  decksLoading: state.home.decksLoading,
  decks: state.home.decks,
  classes: state.home.classes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deleteDeck
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSingle);

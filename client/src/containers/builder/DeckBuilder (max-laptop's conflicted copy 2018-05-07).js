import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendDeck } from '../../actions/builderActions';
import { setDecksLoading } from '../../actions/homeActions';

import DeckBuilder from '../../components/builder/DeckBuilder';

const mapStateToProps = state => ({
  currentUser: state.auth.user,
  currentDeck: state.builder.currentDeck,
  cardsPool: state.builder.cardsPool,
  cardsLoading: state.builder.cardsLoading,
  classes: state.home.classes,
  deckTypes: state.home.deckTypes,
  formats: state.home.formats
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    sendDeck,
    setDecksLoading,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendDeck } from '../../actions/builderActions';
import { setDecksLoading } from '../../actions/homeActions';

import DeckBuilder from '../../components/builder/DeckBuilder';

const mapStateToProps = state => ({
  class: state.builder.preClass,
  format: state.builder.preFormat,
  cardsPool: state.builder.cardsPool,
  cardsLoading: state.builder.cardsLoading,
  classes: state.home.classes,
  deckTypes: state.home.deckTypes,
  formats: state.home.formats,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    sendDeck,
    setDecksLoading,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCardsFromApi } from '../../actions/builderActions';

import DeckBuilder from '../../components/builder/DeckBuilder';

const mapStateToProps = state => ({
  currentDeck: state.builder.currentDeck,
  cardsPool: state.builder.cardsPool,
  cardsLoading: state.builder.cardsLoading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getCardsFromApi
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder)
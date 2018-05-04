import { connect } from 'react-redux';

import DeckSingle from '../../components/deck/DeckSingle';

const mapStateToProps = state => ({
  decksLoading: state.home.decksLoading,
  decks: state.home.decks,
  classes: state.home.classes,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSingle);

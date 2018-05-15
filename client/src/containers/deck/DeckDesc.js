import { connect } from 'react-redux';

import DeckDesc from '../../components/deck/DeckDesc';

const mapStateToProps = state => ({
  cardsPool: state.builder.cardsPool
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDesc);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCardsFromApi } from '../../actions/builderActions';

import DeckBuilder from '../../components/builder/DeckBuilder';

const mapStateToProps = state => ({
  builder: state.builder
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getCardsFromApi
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder)
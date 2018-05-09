import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DecksFilter from '../../components/home/DecksFilter';
import { setFilters } from '../../actions/homeActions';

const mapStateToProps = state => ({
  classes: state.home.classes,
  formats: state.home.formats,
  types: state.home.deckTypes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFilters
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DecksFilter)
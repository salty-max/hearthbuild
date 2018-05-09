import { connect } from 'react-redux';

import Home from '../../components/home/Home';

const mapStateToProps = state => ({
  decks: state.home.decks,
  classes: state.home.classes,
  decksLoading: state.home.decksLoading,
  filters: state.home.filters
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
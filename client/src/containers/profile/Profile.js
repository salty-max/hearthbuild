import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Profile from '../../components/profile/Profile';
import { deleteDeck } from '../../actions/deckActions';
import { deleteUser } from '../../actions/authActions';

const mapStateToProps = state => ({
  user: state.auth.user,
  decks: state.home.decks,
  decksLoading: state.home.decksLoading
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deleteDeck,
    deleteUser
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../../components/layout/Navbar';
import { logoutUser } from '../../actions/authActions';

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logoutUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

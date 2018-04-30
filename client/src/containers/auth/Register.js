import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Register from '../../components/auth/Register';
import { registerUser } from '../../actions/authActions';

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    registerUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../../components/auth/Login';
import { loginUser } from '../../actions/authActions';

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loginUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
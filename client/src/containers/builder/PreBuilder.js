import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreBuilder from '../../components/builder/PreBuilder';
import { prebuild } from '../../actions/builderActions';

const mapStateToProps = state => ({
  classes: state.home.classes,
  isAuthenticated: state.auth.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    prebuild,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PreBuilder);
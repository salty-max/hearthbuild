import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreBuilder from '../../components/builder/PreBuilder';
import { prebuild } from '../../actions/builderActions';

const mapStateToProps = state => ({
  classes: state.home.classes,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    prebuild,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PreBuilder);
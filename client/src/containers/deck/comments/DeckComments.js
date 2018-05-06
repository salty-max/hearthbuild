import { connect } from 'react-redux';

import DeckComments from '../../../components/deck/comments/DeckComments';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments);

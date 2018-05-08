import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeckComments from '../../components/deck/comments/DeckComments';
import { sendComment, setCommentsLoading } from '../../actions/deckActions';

const mapStateToProps = state => ({
  comments: state.deck.comments
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    sendComment,
    setCommentsLoading
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments);

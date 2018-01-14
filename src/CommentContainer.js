import {connect} from 'react-redux';
import {thumbUpComment} from './actions.js';
import Comment from './Comment';
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);

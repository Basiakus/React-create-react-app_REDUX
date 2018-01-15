import {connect} from 'react-redux';
import {thumbUpComment, thumbDownComment, removeComment} from './actions';
import Comment from './Comment';
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);

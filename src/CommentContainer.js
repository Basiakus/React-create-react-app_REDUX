import {connect} from 'react-redux';
import {thumbUpComment} from './index'
import Comment from './CommentContainer';
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
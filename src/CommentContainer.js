import {connect} from 'react-redux';
import {thumbUpComment, thumbDownComment} from './actions';
import Comment from './Comment';
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))

});

export default connect(null, mapDispatchToProps)(Comment);

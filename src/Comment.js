import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
	<li>{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpComment(id)}>&#x1F44D;</button>
		<button onClick={() => thumbDownComment(id)}>&#128078;</button>
	</li>;

export default Comment;
import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => 
	<li>{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpComment(id)}><span role="img" aria-label="symbol">&#x1F44D;</span></button>
		<button onClick={() => thumbDownComment(id)}><span role="img" aria-label="symbol">&#128078;</span></button>
		<button onClick={() => removeComment(id)}><span role="img" aria-label="symbol">&#10007;</span></button>
	</li>;

export default Comment;
import React from 'react';
import './App.css';
import CommentsList from './CommentsList';
import Comment from "./Comment";
import CommentsListContainer from './CommentsListContainer';
import CommentContainer from './CommentContainer';

const App = () => {
	return (
		<div className="App">
			<CommentsListContainer />
		</div>
	);
};

export default App;
import React from 'react';
import './App.css';
import CommentsList from './CommentsList';
import Comment from "./Comment";
const App = () => {
	return (
		<div className="App">
			<CommentsList>
				<Comment />
			</CommentsList>
		</div>
	);
};

export default App;
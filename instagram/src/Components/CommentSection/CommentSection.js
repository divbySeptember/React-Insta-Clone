import React, { Component } from 'react';
import './CommentStyle.css';
class CommentSection extends Component {

	constructor(props) {
		super();

		this.state = {
			username: "Anthony_Jarod",
			comments: [],
			newCommentText: ""
		}
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
	}

	submitNewComment = (event) => {
		if (event.keyCode === 13) {
			const newComment = {
				username: this.state.username,
				text: this.state.newCommentText
			}

			this.setState({
				comments: [...this.state.comments, newComment],
				newCommentText: ""
			})
		}
	}

	updateNewComment = (event) => {
		this.setState({
			newCommentText: event.target.value
		});
	}

	render () {
		return (
			<div className="CommentSection">
				<div className="CommentSection__list">
					{this.state.comments.map((comment, index) => {
						return (
							<div className="CommentSection__comment" key={index}>
								<h3 className="CommentSection__comment-username">{comment.username}:</h3>
								<p className="CommentSection__comment-body">{comment.text}</p>
							</div>
						);
					})}
				</div>

				{this.props.children}

				<div className="CommentSection__add">
					<input
						className="CommentSection__addField"
						type="text"
						value={this.state.newCommentText}
						onChange={this.updateNewComment}
						onKeyDown={this.submitNewComment}
						placeholder="Add a comment..."
					></input>
				</div>
			</div>
		);
	}
};

export default CommentSection;
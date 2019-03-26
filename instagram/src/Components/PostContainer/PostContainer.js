import React from 'react';
// import Moment from 'react-moment';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'


function PostContainer(props) {
	const post = props.post;
	return (
		<div className="PostContainer">
			<div className="PostContainer__header">
				<img src={post.thumbnailUrl} />
				<h3 className="PostContainer__username">{post.username}</h3>
			</div>

			<div className="PostContainer__image">
				<img src={post.imageUrl} />
                <div className="newIcons">
                    <i class="far fa-heart" > {post.likes}</i>
                    <i class="far fa-comment"></i>
                </div>
			</div>

			<div className="PostContainer__body">
				<div className="PostContainer__indications">
					{/* <h3 className="PostContainer__likes">{post.likes} likes</h3> */}
				</div>

				<CommentSection comments={post.comments}>
					<div className="PostContainer__timestamp">
						{/* <Moment format="YYYY/MM/DD">{post.timestamp}</Moment> */}
					</div>
				</CommentSection>
			</div>

		</div>
	);
};



PostContainer.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number       
    })
};
 
export default PostContainer;
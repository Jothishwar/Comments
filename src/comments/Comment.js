import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Comment({comment}) {
	return (
		<div className="comment">
			<div className="comment-image-container">
				<AccountCircleIcon fontSize="large" color="primary" style={{ fontSize: 45 }} />
			</div>
			<div className="comment-right-part">
				<div className="comment-content">
					<div className="comment-author">{comment.username}</div>
					<div>{comment.createdAt}</div>
				</div>
				<div className="comment-text">{comment.body}</div>
			</div>
		</div>
	);
};

export default Comment
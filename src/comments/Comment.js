import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Comment({comment,replies,currentUserId,deleteComment }) {

	const canReply = Boolean(currentUserId);
	const timepassed = new Date() - new Date(comment.createdAt) > 300000;
	const canEdit = currentUserId === comment.userId && !timepassed;
	const canDelete = currentUserId === comment.userId && !timepassed;
	const createdAt = new Date(comment.createdAt).toLocaleString();

	return (
		<div className="comment">
			<div className="comment-image-container">
				<AccountCircleIcon fontSize="large" color="primary" style={{ fontSize: 45 }} />
			</div>
			<div className="comment-right-part">
				<div className="comment-content">
					<div className="comment-author">{comment.username}</div>
					<div>{createdAt}</div>
				</div>
				<div className="comment-text">{comment.body}</div>
				<div className="comment-actions">
					{canReply && <div className="comment-action">Reply</div>}
					{canEdit && <div className="comment-action">Edit</div>}
					{canDelete && <div 
						className="comment-action" 
						onClick={() => deleteComment(comment.id)}
						>
							Delete
						</div>
					}
				</div>
				{replies.length > 0 && (
					<div className="replies">
						{replies.map( reply => (
							<Comment key={reply.id}
								comment={reply}
								replies={[]}
								currentUserId={currentUserId}
								deleteComment={deleteComment}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
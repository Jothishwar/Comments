import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentForm from './CommentForm';

function Comment({comment,replies,currentUserId,addComment,deleteComment,activeComment,setActiveComment,parentId=null }) {

	const canReply = Boolean(currentUserId);
	const timepassed = new Date() - new Date(comment.createdAt) > 300000;
	const canEdit = currentUserId === comment.userId && !timepassed;
	const canDelete = currentUserId === comment.userId && !timepassed;
	const createdAt = new Date(comment.createdAt).toLocaleString();
	const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment.id;
	const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment.id;
	const replyId = parentId ? parentId : comment.id;

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
					{canReply && <div className="comment-action" onClick={
						() => setActiveComment({ id:comment.id, type:"replying"})
						}>
						Reply
						</div>
					}
					{canEdit && <div className="comment-action" onClick={
						() => setActiveComment({ id:comment.id, type:'editing'})}
					>Edit</div>}
					{canDelete && <div 
						className="comment-action" 
						onClick={() => deleteComment(comment.id)}
						>
							Delete
						</div>
					}
				</div>
				{isReplying && (
					<CommentForm submitLabel="Reply" handleSubmit={(text)=>addComment(text,replyId)} />
				)}
				{replies.length > 0 && (
					<div className="replies">
						{replies.map( reply => (
							<Comment key={reply.id}
								comment={reply}
								replies={[]}
								currentUserId={currentUserId}
								deleteComment={deleteComment}
								addComment={addComment}
								activeComment={activeComment}
								setActiveComment={setActiveComment}
								parentId={comment.id}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
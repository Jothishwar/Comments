import React,{useEffect,useState} from 'react';
import {getComments as getCommentsApi,createComment,deleteComment as deleteCommentApi } from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Comments({currentUserId}) {
	const [backendComments,setBackendComments] = useState([]);
	// console.log(backendComments);

	const rootComments = backendComments.filter((backendComment) => 
		backendComment.parentId === null);

	const getReplies = (commentId) => {
		return backendComments.filter((backendComment) => backendComment.parentId === commentId)
		.sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
	};

	const addComment = (text,parentId) => {
		console.log("add",text,parentId)
		createComment(text,parentId).then(comment => {
			setBackendComments([comment,...backendComments])
		})
	}

	const deleteComment = (commentId) => {
		if (window.confirm('Are you sure that you want to delete comment?')){
			deleteCommentApi(commentId).then(() => {
				const updatedBackendComments = backendComments.filter(
					backendComment => backendComment.id !== commentId
				);
				setBackendComments(updatedBackendComments);
			});
		}
	}

	useEffect(() => {
		getCommentsApi().then((data)=>{
			setBackendComments(data);
		});
	}, [])

	return (
		<div className="comments">
			<h2 className="comment-title">Comments</h2>
			<h4>Write Comment</h4>
			<CommentForm submitLabel="Comment" handleSubmit={addComment} />
			<div className="comments-container">
				{rootComments.map(rootComment => (
					<Comment 
						key={rootComment.id} 
						comment={rootComment}
						replies={getReplies(rootComment.id)}
						currentUserId={currentUserId}
						deleteComment={deleteComment}
					/>
				))}
			</div>
		</div>
	)
}

export default Comments;
import React,{useEffect,useState} from 'react';
import {getComments as getCommentsApi } from "../api";
import Comment from "./Comment";

function Comments({currentUserId}) {
	const [backendComments,setBackendComments] = useState([]);
	console.log(backendComments);

	const rootComments = backendComments.filter((backendComment) => 
		backendComment.parentId === null);

	useEffect(() => {
		getCommentsApi().then((data)=>{
			setBackendComments(data);
		});
	}, [])

	return (
		<div className="comments">
			<h2 className="comment-title">Comments</h2>
			<div className="comments-container">
				{rootComments.map(rootComment => (
					<Comment key={rootComment.id} comment={rootComment} />
				))}
			</div>
		</div>
	)
}

export default Comments
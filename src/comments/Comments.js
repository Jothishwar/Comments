import React,{useEffect,useState} from 'react';
import {getComments as getCommentsApi } from "../api";

function Comments({currentUserId}) {
	const [backendComments,setBackendComments] = useState([]);
	console.log(backendComments);

	useEffect(() => {
		getCommentsApi().then((data)=>{
			setBackendComments(data);
		});
	}, [])

	return (
		<div>
			<h1>...</h1>			
		</div>
	)
}

export default Comments
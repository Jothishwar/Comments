import React,{ useState } from 'react'

function CommentForm({ handleSubmit, submitLabel }) {
	const [text, setText] = useState("");
	const textareaDiasable = text.length === 0;
	const onSubmit = e => {
		e.preventDefault();
		handleSubmit(text);
		setText(" ");
	}
	return (
		<form onSubmit={onSubmit}>
			<textarea className="comment-form" cols="50" rows="5" value={text} 
			onChange={(e)=>setText(e.target.value)}></textarea>
			<button className="formSubmit" disabled={textareaDiasable}>{submitLabel}</button>
		</form>
	)
}

export default CommentForm
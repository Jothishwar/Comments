import React,{ useState } from 'react'

function CommentForm({ handleSubmit, submitLabel,hasCancelButton=false,initialText="",handleCancel }) {
	const [text, setText] = useState(initialText);
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
			<div className="btns">
				<button className="formSubmit" disabled={textareaDiasable}>{submitLabel}</button>
				{hasCancelButton && (
					<button type="button" className="cancel-btn" onClick={handleCancel} >Cancel</button>
				)}
			</div>
		</form>
	)
}

export default CommentForm
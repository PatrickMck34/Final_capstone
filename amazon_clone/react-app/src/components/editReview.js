import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../context/Modal";
import * as reviewActions from '../store/review'


function EditReview({rev}) {
	const revs = {rev}
	
	const ret = rev.review
	const id = rev.id
	const item = rev.item_id
    const reviews = useSelector(state=>state.review)
    const user = useSelector(state=>state.session.user)
	const dispatch = useDispatch();
	const [review, setNewReview] = useState(`${ret}`)
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		 
        const data = dispatch(reviewActions.updateReviews({review}, id)).then(()=>dispatch(reviewActions.getUserReviews(item)))
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		
			// setErrors([
			// 	"Confirm Password field must be the same as the Password field",
			// ]);
		
	};

	return (
		<>
			<h1>Edit review</h1>
			<form onSubmit={handleSubmit}>
				{/* <ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul> */}
				<label>
					Review
					<input
						type="text"
						value={review}
						onChange={(e) => setNewReview(e.target.value)}
						
					/>
				</label>
				
				
				
						
		
				
				<button type="submit" onClick={handleSubmit}>Submit</button>
			</form>
		</>
	);
}

export default EditReview;
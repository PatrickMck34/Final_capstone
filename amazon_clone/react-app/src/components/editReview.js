import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../context/Modal";
import * as reviewActions from '../store/review'
import { useParams } from "react-router-dom";


function EditReview({id}) {
    const reviewId = useParams()
    const reviews = useSelector(state=>state.review)
    const user = useSelector(state=>state.session.user)
	const dispatch = useDispatch();
	const [review, setReview] = useState(`${reviews.allReviews[reviewId].review}`)
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		 
        dispatch(reviewActions.updateReview())
			// if (data) {
			// 	setErrors(data);
			// } else {
			// 	closeModal();
			// }
		
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Review
					<input
						type="text"
						// value={review}
						// onChange={(e) => setReview(e.target.value)}
						required
					/>
				</label>
				
				
				
						
		
				
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default EditReview;
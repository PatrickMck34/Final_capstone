import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../context/Modal";
import * as reviewActions from '../store/review'
import './edit.css'



function EditReview({rev}) {
	
	
	const ret = rev.review
	const id = rev.id
	const item = rev.item_id
   
    const user = useSelector(state=>state.session.user)
	const dispatch = useDispatch();
	const [review, setNewReview] = useState(`${ret}`)
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(review.length < 3) {
			return setErrors(["Review must at least 3 char long"])}
		  if(review.length > 50){
			return setErrors(["Review must be 50 char or less"])}
		  if(user === null){
			return setErrors(["You must be logged in to leave a review"])}
        const data = dispatch(reviewActions.updateReviews({review}, id)).then(()=>dispatch(reviewActions.getUserReviews(item)))
			if (data) {
				setErrors(data);
			}
				closeModal();
			
		
			// setErrors([
			// 	"Confirm Password field must be the same as the Password field",
			// ]);
		
	};

	return (
		<>
			<h1>Edit review</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Review
					<input className="input"
						type="text"
						value={review}
						onChange={(e) => setNewReview(e.target.value)}
						
					/>
				</label>
				
				
				
						
		
				
				<button className="demo-button" type="submit" onClick={handleSubmit}>Submit</button>
			</form>
		</>
	);
}

export default EditReview;
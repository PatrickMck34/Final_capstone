import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './review.css';
import { Link } from "react-router-dom";
import * as reviewActions from '../../store/review'

function ReviewPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([])
  

//   if (!!sessionUser) return window.alert("You must be logged in to leave a review")

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    dispatch(reviewActions.createReviews({review}))
  }
//     .then()
//     .catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
   
//       });
//   };

  return (
    <>
    <div className="log-logo">
      <img className="login-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img>
    </div>
    <div className="create-container-log">
    <div className="log-logo">

      <h1>Create A Review</h1>
          </div>
      <div className="login-title">


      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            
            </ul>
        <span className="log-option">

        <label>
        
          <input
          className="log-options"
          type="text"
          placeholder="Write something nice"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          />
        </label>
            </span>
            <span className="log-option">

     
          <div className="spacer-log"></div>
        
        
          </span>
      </form>
          </div> 
            <button className="continue-button-log" onClick={handleSubmit} type="submit">Submit Review</button>
            </div>
            <div className="signup-redirect">

              <span>Don't Have an Account?</span>
            <Link to={'/signup'}>
                   <button className='nav-option2' >Create Your Amazin Account
                   </button>
                   </Link>
            </div>
    </>
  );
}

export default ReviewPage;
